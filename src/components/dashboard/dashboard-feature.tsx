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
    "2LwNwpqnSE5nkXdxKN9t1kvamxAKr2m3HeqwqNZ6sbR3SGJS7mRX66mLXrzEG5wyHNVCpP6A2ZFV8A8MxXGyiZhG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mmVRFBbCGEmXmMN93g4yRhPAtAep8q4aKvcZ9EBjDXtfsqMjUq61hcQ6Afd5pmp7pSikZoCuXoRV8ZNm8SfQ4iL",
  "key1": "5LfUB326fvWkCffgAM683AB6nQhcMMytV6EAtFqB36YWSpNsM4goAxb6tbh4KpTakFfFBgRekgHvUVz7Cg6zsbXT",
  "key2": "26XSo2SBDJu7bTFLPGdngMCMApEhApD3LqSH6g7Gs4561mssi71mA6gWkjbgpeMM2p2JLqdYGymmoybLhdpkBza4",
  "key3": "3WMpZSQSaXQQrrj6qCJd8NSYwwophd2wGxfmLUVsCoUiuGP8kJLGBDAkDanmC64mpEVdRwfwm6Kkh3EbLpdaHEZo",
  "key4": "5wHLorWjbgV9kqZ2LGMcNQrC2Ncc1imrcmUyZ914tv451Q8U6a9B4YMhEjAR3YccmqG1wDSm5pgB6V9NqpJdKhyS",
  "key5": "59dtD3jiuScmnC6mZ4PE2Q5Nd6RzbagCUu4bhLGGTA8HLqa4HQQjYDuaXsPGdw4TjPoN2A5SuPErmSZCds4bE3cp",
  "key6": "5Q7nQWJg2god2wydciaJDutKYBedFDfaD8oLH3Yzm3gjjzJjJtzjsvdBgyrMyikUhistyhrsFQ5XaSymh2TsnBtU",
  "key7": "3NuC9fSjEk1BNsyGDJHJ8WfpUPiiZ2H4QdGqtZVaJExbDz8VMms5JK5xuTJk2emri5DJqMoAbeRdoZ6AB7TA1RAf",
  "key8": "AugprZpsX9rkJSK6j2MubWp3smS5B5P9gkrBPD7Gd3pEXyTXyfNmun4e7vQXRDS3K7jwAAG9d76kCPPQWRrKW6e",
  "key9": "5vW4V488tqJViy9qrtNSygfCQWxvnFBsVMVqWuxtY8KA64G4YUCQXHWq4MhCKXLQevrdcsPVVQy4nRgk3B5tpxey",
  "key10": "2K6nLBi2nmVTSx1tWJpNvMEXDp2dvp65bTnguuwd333mWxTrDhpNdZrrmBvYPKJyiexcc9JgurBbx3zxFZjtAjh5",
  "key11": "4qFQDZe6gUP61DzSjivV5kPd8scNcif4VHpXyY4dWZQApV7xLVaDAqff7xrJd6hgpHoePgzhefmvfSXj1nCKpGMq",
  "key12": "ezBH2gezCD3s1ewYF46QsBskk7DW2HWg6622R7JZmjDUv9u6yoEJ85mcpJqJFwHrR6ev1uQTtMCnDHkfHVropwS",
  "key13": "3LBkaYoY4XUQm7Fi6dPYfQfgr3qT2wtsDuchEpLRiHAraFyEyoy8jVnzAF48Fdw4133EMXZC1ZGYqKmRZEf62UDD",
  "key14": "47hj4r76JKXoi1YvAPYu4HDkgQbZdbZQS7djhWHmNBGKpz91p6SjFMeYxKyjCLE8w2URB8PHBftnQV6PsEvhDszv",
  "key15": "3PZbd9gPRTbU4vyKbgWceQsntBTw189N2FsyC5H5GzdL1ZrAZqsokZmKx6qo4zzZZarZ9XWECPcagUbzQPFw4uja",
  "key16": "my6qcSvZA1kk9TxaBXscrawTYHqRV4dz3zGnmb56V71846hyx3mv9svuRQSRkG5qM2ueijSiAt3EYGn3TkhoExP",
  "key17": "3tp8jLexhvRd4Tx8WYoovzh6qGtb1HACzQCZVqqQkryQXrbYQz28fAY7ZxZLZWNw57UJKyHkFxbAXyALziC2PoBZ",
  "key18": "4q4xLCFtB7kiroY5wJRrJwSBWDVMT4VW2JdzBuHEoL89TbdBFNBe5DTwUvZEzcn5jZLerduNgWhPsFbWiTXSdX4h",
  "key19": "47mFivyv7wAFnJduMrWFph1aPaPJzDnT8TdFLeXPxyzvHAG1BFms6hAHqPojkzf2UL7FRBN2n7KiMi1MAxLwChZP",
  "key20": "5o8AFY2oTEnjmzRn76Bv3fvZ6Gw3KQUDt2BZaRGpJnimTYveeqTLX8hDC7RDpPeYvoLE74u9vArTvVRFPKkqTpk9",
  "key21": "5Cj1J1MfFxyWS8sU8QDX7tvAUCGKovC8TTJFkCY2upkGkozYRYLFt29a6jizFD2pgVmchsoFasHkiZFoujNWWm1m",
  "key22": "5qQaCguGj18tumPmeGtHiscS3nxiwAQ6PM8XCuXABx7tMXDVWBiFZGTfcrcUbsGZUvEgxGF5HBiybtZW3sYrFK42",
  "key23": "vjq363EDCB2mEXiQiYPn8Q9mbXfqkGXjekMCzS9jmadwxmbkjzT2FXdjC7RRkexFS23f2nv14DHi8wWSe5HDrD3",
  "key24": "394MeS68g3H2TArk5iEptQWWAusDu74jCzkqvjihueNwqsk7KFFGD8Ri7q5Ed21Z39sK8Mi5hxeUQANJvhuXQLLd",
  "key25": "3hepb6uWfF5AeqNbRV1j4wzMFP12PHVn64Z542cX1tMWCeWWbNQZxUGX9MUrfmhkZJPn16MbEoGFtfHiLzxWcJZ9",
  "key26": "oXLC5htTzSoBhuqfXRSab4YreBqAa6yD9XhCXA9V5sMKa7buPYse2k28PJ6GpjYn2gGAiqBuie4ok571XvGqoXz",
  "key27": "21PMQPZ2ik3gPhuCpu5zt4LbHowHaEoEkZVSmqdUZRhdLEkJmXBkRvjGoAWNcksJgLy2ZyK3mCMSFsTttZa1ahv6",
  "key28": "3QvyizvZunUqndSuHhYhug14NSQ3DmTE2WBMwzXDdhs3VyrznevgkziZrbGceaJ6oEC2KSqJKxXCJigoJ1kX1CYY",
  "key29": "ydAFW7RHs7aUgrErruUWecG2UZVuQjwA3k8LWEaeP6YtFxcpZFQo7Anf5DHSBEWvbXeMqz69W3k5zrycgq64M6B",
  "key30": "3jWbhkHD4ieC59EsooXVqdvFUU6BfpzgBYKW3FgmLG46PaT7Nf4wgkAUk6a7LRxLB4m5QbP7ecVpzqZ6i9Rdrgg4",
  "key31": "32KsSA3zxPShRoSYpBFbnwCqYsV7P9QehGZo95RZT16cPKGTaVoutnbExDMNopX8gmEonHmVHuzcBgxkAs5RyTiN",
  "key32": "36hB3esFHh81HqnoKK7yafE9RGRCYcqS29T2UPSot6QrRPqEwnMkLhG7TqFRkbhRQysQFiTM2mxNoGFmowJgpxps",
  "key33": "4eHJTxs8mt96JaHetizbSjWKZNfrXTkBaTpLnyeKcm7yFwD31tZzKdiZzbYxhWXXSUW3irAnGHCvrePHKgXauqqH",
  "key34": "2JkpoK2wwBxeY1rW8t42zi6eUjaJzoQ6gXND6Sn1pYRxowpwV53oKywWXqS6ojnDNcWHYttRcngREEvrWyo6RyGc",
  "key35": "4o3tApgH2PRxcryDeHN2569QKvNHUpeiR3fqp6rwB5pBYoPP7we2BKMZniFBsEN1S17t3xPYf4kAGBCKZne8pcSZ",
  "key36": "5byTHqfKDburVesVkrg6JRYdgiudCZzukcMfdmVeQE4i27Lnjxo3bdBGLtTaKBajM9qkLejPxmdgPntigJB6abWg",
  "key37": "57u3FpcnRVQBc4FfSLbaqdhh26pTM7uzmaAKdzMNDFLwi86L6obJHnB1PBwoJkAedTv1muUmrvx2vKXW1pGNXtUa",
  "key38": "3R7Zpx1gRY49jQUDbazfqqVUzZm34EuwgsjrSuXpCDZSDK8ZL7kmRrDzswQ7XxVkNtAm8hwbvpiUyVVUqckom4xg",
  "key39": "33ULkRdZZq5d5iL57exyPB7DGPpA5sMBYHtP5TZtbjbPhciG9Swt4KjofBUAc3Be5R4faZEBQNYed8K8Q782S6Fg",
  "key40": "5QGvvtBSbyGDkd4D8mrUXGuiBjzrPRxcjM2PBqw7WmzdMLwugQDx6DnmBGyaa1b9DWCnUAfvpsAvKoYMGAMUqqwA",
  "key41": "58Ldfti6xGUgWN7AiWuvBrHsoAygqecznLdtBoiPSq8K7ViN2eCu1vWZCavuMDyw54fK4P7kWxKVURZyPmYaR7h",
  "key42": "SdGXYBv2NyqY7mtLSio3hGgE1sSYaZfMBcGgC9gGwrY13ZgwrsRVNXjt3jdZskKdm5kd5NYtafgp6VnJ9HD13KD",
  "key43": "4X95aBBcrCjWqG9cgL4ib2oAZCXBwsEfRna3TKRtdwkf3TjM3NxZ8X7JbNjPaazyAyGFGNZMAngtuTCaA6en9hh2"
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
