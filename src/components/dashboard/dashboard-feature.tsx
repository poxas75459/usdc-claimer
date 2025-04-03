/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "23CzX3GJ4hE12JRQ4VM5zdTvbtLG92fQqFzsR3xDZPaRknTi6KXL6AH19hi3n6XyFJiUR2Dk4hSegy93mEZJ3hQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eUjizoN4piUzwqbhPM5S78X4zrjRxTCBWTuVX6gRXXyS1FieRsSR2kxmEayaQjjeGTQgcZuJ4LXXvrMBEW8Hu2G",
  "key1": "4a1gJx6fK7eJt7zKrbzVdqA3SvRUQKpMcykxtpQdkF8EuFfpJueY6bS5rTXuXjpJezmwwNfWCru4L4XvrSiwtbGL",
  "key2": "wc4UbNgzm6A5QP65NdGt5tGWav56yGeMLrrtJAVxpDm3vbE7HCVfMx6MKgULmhSBfqonSEEXgf3YpnwFiFoRCC8",
  "key3": "5V7PesAX7MCrWSt5knyJHzBZcupbbHLmARPnktWnmFLUB9CmJ67zHfBDaGxvRtEWmKtjC3w9yKNbirYqP7vPbJkL",
  "key4": "3apwt1YCBx1RJ3xgFVNg2fue6hK7ZWbJ6yz17jJeUDWSKAnfoLiZRVRaa4uMB25cX1ozXHk8CbKkkdtreSPJQymW",
  "key5": "3uEWqWAU6U8L2miKm9XHXnkgR6V5SQNNTSSaUo6V7nDy6o9QUcR7q4sb8SxaVkRwf8ZLTXTxQ2jzN5jyA1jBe6pq",
  "key6": "hTkvPndf7BTn7VG5zutCvQAJj8r1amDMzhcrPcGyd92YvcTbjxK2jX8w9Qj2mpVqkwv9QqHBLCnFTQCQSdKJGmk",
  "key7": "2gM2PT8r1uf4N7Ur5qHvMmMonnfXe6FDQzi57KJf4p4LMEJ6w6vaZBgfBHZo449SMXJJS73Gq2Y61UrusY4rMkLN",
  "key8": "3vGT3io2ceBVQztiYwWYU2Yxp472wg5JK6oWTF5s1Xxarau87QdSNPrQuf3s7ug7b7F4ky7u36VRxNFqJLiewZgh",
  "key9": "5rvDJBdyqWv4sZF8puCpEiXttcMvGD9kUehDwWRAimz1dAtqphx5H9RgPQCZGAK3k4oszFiL3JYQADkbYAGNjH5L",
  "key10": "4cfQAn3BGtrS6ZNzZdEdndbKLjPwPNbEhxJMez3698V4MVLahGenpjhWovLN6pSGMGxBjV71VxaoE6zVyWQfFWtu",
  "key11": "4r7javFT6QF28xZVAV7v1dPSHmraDiu6Rxruuo77wcX1Vk7QfBLDrEehv6njd4QJDJwnov1aMDS53QBwNQUyb9xj",
  "key12": "29N869CjKEhoXcGFZsJ8Sum325raqbzShSXQHEX14Yx2BzhF6dMDHKjbHVbV7k2qTpDAtB9ww8Zyz34PpuamxAqb",
  "key13": "37117etnmNh8dwj2NsvqPcpAMNsberZsAzC9wntThyrkNQAm6wcr3KHWvjWnxeSaR5YCG5TPEtzozD28HF8ePn1y",
  "key14": "3WfZKxpHEcK5HeGniH5UJjb9SbUSLpZ1fKS2F7HQAdNuCSkVWbsFDwLhwqsmpLMFX4qSu7HRjWStchiQuM67isqS",
  "key15": "eWoCXMQDC8XcYT1Q4xbXaj6MhU5TKZyhJEaumVASnrEPnmb5F2UKi71PFbyevqXjjAU8kH7hDF1h57UrLDTTsdp",
  "key16": "2Yb98kXe97Ve9NXzBBygkD6BXkg9DebM9wSWd4UqpXS96z8EtZULX341SjNqzBiWGwisJWDMgHAUbnzWPgGsr6m2",
  "key17": "5e6w6ceCCtgxJzQdwczW4Zk3Gc8yvGMwNrCwuRwnHvQVSkzMV1vF9GqxR9CxakZBPgan6xu1SFaYbDGF6AE8uHpQ",
  "key18": "49BipxjdxjwhYVeokD3TMVmVVmUHuhziKMjW2FDnUvbJY4Xjoy7xeUeoRDxFLcQQvFzNiG1kMwqW6B1ycVDekFMg",
  "key19": "318N3BVEh7cSJLXzNMRC1hctVtb6FanUPYLPda1Bgrsi4dQgZRog3GaRbDsANAwansYaVnDqNzp91WfXEE8Z5cPg",
  "key20": "5FuKvDM23no4VWyNEvFwNPDrddfnB8LNRCSBhtkbf1BEWUrVdomkqoMxNZtAiokfv3ZQumSj7vzYgTaYVhAgVAPJ",
  "key21": "3utAiMpTvkZBa14FXoigcA4bKu1S6kJBfZCCHspCaLDn8x29K2BUtgMAV3mGNG4MJw7CHSScyB4Wgyv4yQS1SLQS",
  "key22": "3MsCAwBHGsVNzoTbuB671ECUHZpwgvUERMPFSBFqvHb62EjH2eBZYZGceF9vvzux9fpduMkmxMmTCASXoRFyDqUE",
  "key23": "5XgmjyggjrcYKu9V8pM9CJAQHSeuLaZg7Y9e3KRcKSoLBNW3h9TE1kgGXCmTwikZBBrHKHn4BREi3fFfih23B3TA",
  "key24": "DLvrbfDYFUbaTdrRLmdi5uAfmgBjgickPV9mx1F8GxhHxaoNjFajwMx7gXDhsPR1qFc3bjd8q5K8XuFM36Siuk9",
  "key25": "5QcdZupTkbLUmpWCLHUccGN7T69smAPsMGSGzJDkdj4NdLjkfe7muztquxJbtNWGdEceAV1RiR72Lvk81e5danCV",
  "key26": "54tdDZTPYzCZL7LxC2eiwFo5dAsNEH2i7JfPihNFNujtoqbk9FAFtrgRFGjWwYwaZt5pEEx9kk9g8s5TURWfxG3t",
  "key27": "2VheSzMPk1JC2rXc5cXsS2HY95dTzVssriyg48oBjKw691MoTAmJA5WJkziwNHhjyi5jCr8XYPLJpsK5KbMhMXXg",
  "key28": "igS7RCFFLUVNoGjdoMYEhNuXWJQuSCrCosWPJMRWg8pzJj5Aek1eWa1dskAFimZcjTq8xpaC5wp2jj559aVTm2M",
  "key29": "5KSLyC3Q164R1WS7VZ7tfwtV1Ks6CD3oAobfrGJZkJnrReyjFpUMaxubWdCSzGo9pTB1LTJW7dgqBHjVWqBdV9M7",
  "key30": "2wquJxW9rsRoHjDrwjdRvGBBrbEJbYps675rZpMkGGk5cugD4B6GcAHCwtKMaVeQZecFEE5WF52Ev6xjZtsCstqq",
  "key31": "3ov49JKfTEBTWprSLuWvBVGs7bLXb8udkgteFDmXGz3dopHV4qPwK63smV2Grrxv6QkP3zhhdQ8CnwCznCByX2uV",
  "key32": "2BzyTaLCdjAkaKzz7woRa6a73mkJHH7LzQ32URTRMRTnFBYUBPZN14vbZ7njFanUVoK4RPbNNDxSBajGSSPeq859",
  "key33": "3kknysGwBwDTdZkXxxt815PyitFYnaoVy8zaLmwEqLa6js9tqL6phRTt7Fe87R5eUbUsXx4ZmoXdBpPSHKpn3VuM",
  "key34": "5GaCesiDNMYPBoqrLgR7Nus5BHEuT9dJAYTdDm3WtER1grsyUN25aamDxuqfV3kPfmNLhsqHAqmKXhaMzBRP7fxd",
  "key35": "3ZuUHnwaG1LVVbR6VjsCLNNLKfzbqE51PWJiprKsBnSZmN48ZiCpYJnAmttpNZpjW8EUdVuKDByDnmyvys8yQ8DU",
  "key36": "2r2qMSpnXSdCV9dLCsCdSwJAho5h8FRf69BiRAnjYMaoCxtAhqNomdktLQ2tmL2NP6quyrkCQjD46LHUhHd4kiUh",
  "key37": "3CSaDyHqitQ8L9kC9RnYjoUPYp3yeMDocbfVHVG1TVHDrP2anBzkeHUMK6FLDFLeoB9hWZeQ11reS7fHimpv2voZ",
  "key38": "5rMkHJ4Jomy1coY8gMUVuaR6vR7o6W2aALFVnRmKJGpSH61Pvkq16EfpayeMuH98a2mwv333RD9BfYAhbc7EcrEb",
  "key39": "4sGaHQxtYmS85b5eTwKHcCvbJp4ajv9C9vwxNLpjVHPYh1LYkWv34sHnDRwNW59Tg5CUYNCvLan16ziSZXB7LLcj",
  "key40": "2A1rnHocGvw5jmfVF9Z1kTKp8SV8zcmwULCSxWF6Hrae9i5hsaGrov7ec4NmoKhNEeLrnRmBi3wk2aYbPg28dHTg",
  "key41": "7VTeZpF5vNHTJ7cjHw8fL93CA72XyuUjaZHAgyWftDX3MyDbcQqJspVRQYtLPjr4EVMGPV8YErt9a4JJKzWnkHx",
  "key42": "2mx4S4Lyj82EFhLrExidso8TD8okukwtca65s9Vs7yGrd11R2WShxajGcBM1QEoB1EYCAurEuqHnT7eXfHhtvcnD",
  "key43": "5Tt7jo88WiS33ziFLEwNdyuPdX5ohm8D4Ha1harjSsZ7drgYQxynfQ9jx5p1YNaLUMukYDyC52XRWuwMXm9PcF8c",
  "key44": "3vgP1MphGiMUFVvXNpbAx4kj9JNoKXuTuBZyHCDWdna9ysFy2QqfiKf7ytyGkSA1GdrRN9Sg4Qkq5E7MbJKN3hoB",
  "key45": "49om1ydyiZh3bG83TqVi5dF7aXzvwr5THsnzFNAzKWJUvuX1vu4xwZ2mDCHjUSDgjqAaHWVxPtUFzfdmUWdDcEXD",
  "key46": "5bP3mT9iCCt94W4uP84Fkyt5TvcE2mvwdxvbbeLXxx94TJJqSy3rqLLnuTThAXccY5vXd2wRRRcYtjGX8aXrZxxP",
  "key47": "5mvE5LECpEDs8J38AY6DhioXpxtYaAQH91DLG7cFkxZo1w1XRi11EuLHmVo6iisJ1bAXzyTXneMYmzm4jCZGAedW"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
