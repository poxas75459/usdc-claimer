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
    "fRpM2FBhqF9TELUdZpSyEJ2X3RUMZB1pYWFmuniuHGuu7XKDrH32rkLxwK22iQbzqyD9ySbcW2yjaMKXXpkVun5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YgkCQNhackkzrNF5KQKggDM1KpsV5n6Sfgaqfj2hWBrDTuqW6ffLTpDbegE2Sr1Q5oLKCJ8q7RgyBCm4xZrDh8h",
  "key1": "2QaLm7JSUngz3Jctbd55QCiD3NS2iE4oNYDPJQWiWD37nRUAhcx4wjK1BtXuu8hMyKeWn1xm8mcSXejEniM2xM7H",
  "key2": "5xZ5swvyjsbDqtGqZHXcb431UEuLXeX68VV9XWxEAaa12WUzdiB3kWWFdaESdcA2PvtVnYibJsZ1HGp5LntfWtBq",
  "key3": "3NpPtqNLE6S7G9VcqB8NK8g2Gs64zVPXgFc47Tt1Yx8uQm24Xpbxo3Aad7YDUbgv34GeHry1AvDRCrdLAskrcjyr",
  "key4": "ddCwXsBnEJr5Vh4wUmcvyKASiJTotZPTABYahbX5vw3fFVAsPzk977WuwHmMstkt1iu6KbunQ3gjUjAq9qrMgtG",
  "key5": "AymFT974TV2XqjkQgWoBBWqjo2sQMGD9Aj4VB5cZzwWjANdRhFV4ZW8kseEewFtc3pWB7dbCkxx1t4VWE594ej8",
  "key6": "5Uug6AajmrMLSwYPPdPjL1g22PURcj9BCJBSkoLpUasbT1DjVCfcAhukaVj3zPwRJKQziotTFD2ciTK4Htxf5xPW",
  "key7": "87onrubc1fCvPZ15m9CTNsGKaFCA8bhghJriTY6yqYvvMSXW8nW9tmpm31A4YvaNyqqhLGAgdkPju9KVZZ4TJZb",
  "key8": "3E1w3uAbgR1mFdfAo1AfiHhYa26wGwEbCy7UpbPTEEWAEJWBCrjYm73WbQw8cR3hp5rUTc6ZJ2CEAwZcUBWPC32q",
  "key9": "4VKYyvzFjXR12ZHnCun5UZRF3NaHv9bBkHSAje4oFfpA3BTwt2Sbw1JRPe9EfrsbzATPb88fJmLHi29aX1ejyJkF",
  "key10": "4yyykQo2DmoB8VrfCnYSfiukSopUGxEHkZnmPydu36vmE8QC8edrninwu5Cu8tXrgdUncDHbVq7eaVbbmMcTrV5Z",
  "key11": "B9nmFY1nhmzTRFJfB7cEoY2QSXns5a8MKq3qo1TawsHyzoutvhfMo3TLmFyoHUtRdCCrh9Gd7BXQTVRUuKPSemp",
  "key12": "4SSZoQTjUbecEVAafRd6SDbgVwYZQqQK3fhdK38XpYbZWdSgA6ALD24daK4w3pneZ1xcD3jx5GWKL1sNwZ5a5Xbj",
  "key13": "22Sv7ZP9TYSCYmjWMdL4G6HRY9m2upbXdHQVrGT5vjXZET3miRktzWiTueHfFgWV8rYJyrqBqLuyF5fNubueYTJn",
  "key14": "5eXCEnjtf58EaVv7KDhbV5FaZKZX4VsVLokgwNQRFhVJiiGLGLqW32CL2ojQTW153Ts7NCP2Ds46PC2zcWYkPiMc",
  "key15": "ZAkYBTjwujtKhMGBninWHtruCKkaUTt2HJRDsWnaHuzdzvcLS1be7yMoxgSs4naBpFVwNC7jA3UvUvKRcV8e4nv",
  "key16": "2EyyvJTHBeTNzwX51Wani3g4apxXbHZPm3dSSBKzUhpK33dDnxMwLmhuqcjy4imTkGfTRkMPXzLNeG3LW4VRMVD7",
  "key17": "52CCdXmmgdKgQA5e8eiqwd682KK8TwNBfLxJMFQ1QMkAYBRJ7NaMKgeKpJ5YUqB2YW4o5cTJG7jKNPvV1wJPh8L",
  "key18": "2GRTdJw7yiERnh6yu3Dc2zeWaj7sJSkMKMGon8WTLneWLEX31dfdJbAAAZy4L6cHKdNKHRpr3kVEPwyBy6cMAjDn",
  "key19": "5eYpYnK4aMXDPzpRRa4t4zDmNqnqvJo87YAjRk5bceP5Qt4MhDdQxffECHPUKM6HWyNZZef4zrbKshaaN874PUvR",
  "key20": "3HtdBGM3NsZUJVkG1HDGRgzeas2MvqRzGCAyMrYugzZ9z2UtBEKpyP6JjpoCXXCBjBmgXRqH3oPEkeKnWCvs7a1G",
  "key21": "2DQRrRDRhjTixhNbeEn2ZZNQQodkc645Rerxe8E1U5RCVsq9ZXPKm2jHVjD2Hm7z5B1EVwLL5sXm3QmnbHGxM9Um",
  "key22": "569sqGjEPPPPb8st5s4hpu6YeXzfPdWZHdTkag4uGLUintCMYo7w67Et2y7dTFMDAjhADT3GahCNJ7pni9WhKe2m",
  "key23": "3SEsvNmMWsF3ydPUqQKeyLk152jJqY9tiFGmrDzpedS22gFrYAotyc5wT45TrmcYn8XpL6nKaYtuP5Xkzc1Yj6YU",
  "key24": "4wto2bnfeiy8aG6txUU2AE1372x8fAdU3y3UpkheTvVXXye7CJYeM4jZzQpMSmbsywesYdV8VJ42RvTRdNH9WwCe",
  "key25": "2wg3WVTjtEJALgduwSAfNCp4f3YGReUAGmZ51ruLzUd7ueYTERNWJwfGmy4Tw9R3vsXLaq3PfYL5jTUq89zycRR7",
  "key26": "34bra6SVeEdL9qR6jcErzumVfAYbUZBBS6qze6jAqHzTRj3uKm53KzLsez4k7GnLEfr2B42vFHQGm9iiJs8Kxny",
  "key27": "4foxnrAKECMp17iq37LmKw1wkzUmqPMeQ9pwpmbfs7Vq9tfDdjN3Q9wDeTgNTzjwaWSsHZBshzzA2PDS5krfQAKk",
  "key28": "3uCZToXjJgycS4FNtEDtmWcE9MJLGueas734tcEAZrowRoZE44GaJ2edVfxAgJ9e1kSJr8sw4R9PzgR49K5yr2vU",
  "key29": "3Miyite42zeB4HEJiRrtRkVYFu4Yh16DFaAfnDrqCpDZcK2nnCUQXFjuKf8BMBXu2BxXLdspnqPs5Tk6jqZoXzMt",
  "key30": "4hpMPDkRAePnLs7KcvPZs3vM2FX39GuAxdZFRGkq5pCwVSvadZrjZErxp4FvCVhiTPRpcF7o3aR4VviRu7xLS3J6",
  "key31": "4kqSUWDuifSq8QrympCVVcpCvJQRZf6KZLjL5vAitg6rUWCw9YeKtrZfWivP7wJoT5y9iwr6Yx5DNqg9jwmYfjSx",
  "key32": "57vxU2nB8PtXFkg28M4VijcxjhM85r2ttp328RW1jNtQaz1hFgKvZL5azuND33vptmMui2pQwe3oZRd1nAkNn1Ff",
  "key33": "3qaar2wJV7mDz5wmUcQK21Tve5rRCLon4cuzVQAvDG3Cigv7tHssSfy9kMq2TsDuydApEsgckHH2nyMjUCuT8Ntq",
  "key34": "5KPVghD6Vb8XpfgGfuD2XTSvuBWGnW3QBFZeaCaUzCmhXixCYDfLjt2ve9d38S5rdJc11Pga2LJn158vQyeq9TYh",
  "key35": "5mPQZ22jdWzWnweGjtFRpoQbeGjs16SPCrvsKm9Ukd7tcWY4pmGLM78BFkWyFGzM2YEb7hgdV4JkyZrECXxPxXXj",
  "key36": "4XzcMWfKjiMEP4wAA7cassebjj2SAyfxe2eDhsFj2Ny77THxp2hwwkxE6wPbuZ2pJCv3xrNuZVVxT8afjLxKESyk",
  "key37": "J9VfKKg68cCCNjuixy519M8w9yEvuEUzKCNo3ajJTThW17yB2NUK83rp9fqcpSKCzZkPey3xu5M95xUTR66dGg8"
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
