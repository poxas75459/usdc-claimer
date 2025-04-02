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
    "5hkvFbNaC9T7ZDBgKhLdJD9x35DEEgYpnedrnp9uwLpdVRvo5vRmS6QDZB2eEcx7zVJx1Cf7XYc5Dn32hjBFytXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25LFjm2bXJhzv1bDk7rhiwDt5vzZ8d1DL8MsfoGHVvscUv2kdkq4p8UDAH9uX5uEFZnzJne11xhSutXkRyGEUZK7",
  "key1": "2Vew1y6KvcK58p8gxpnkuyaxiPtuBJQDpxgr3iUJazqgd8jVfzdoLDXQ8acC9o5Kx24os21vzA6H88XWKG74EAS3",
  "key2": "5UbW85VJ7HqCXo2DFVJzPxr2Eddy2Vwa1BHKvajAHaJCTMac41QDrqLQugZvk9guoCpBvKuB5ZnLtFzM2bZ6o6Lo",
  "key3": "3fzyYMgJHneKyruMNdRwKUAX2bfA1CrV9xs1ZbVSrmTwvjayJBuKsdW5WsUQpNi1ici2FKpZ1CV5egLxwrW2pT7K",
  "key4": "3PYrWfrjyAPLbfCv5EmASAVSyj4AUdKzL7SdV4SBs8QM9HTxgJCwhWF6zX9iso8oisZAKufsku71jpm8uTZNKEXS",
  "key5": "3SdNrUBdv9TiNCeLrqRWscQJm94tpwHjiEwvgzST4mXHW7oPCuVgixtRuK9Y2EErA1rRsDxPAvGow52D4cfED8jB",
  "key6": "54mhu9JkNQUHWomiAcqQ4wivCATMRQrivf8nSh2pFjpWAQe6PtXoQTjrwGK1UqW4a2XkgfPrcEDFA9dHVoSvN8jQ",
  "key7": "2RT8NyXmNazBtE1u23tmFRuu6SuSCDmx7SGpqdwm3mfCdscFCPz3yyUTQ2CDyxt2ZpLUHmt7vQxRRtPBFejd18gH",
  "key8": "NBdvjMiDHBjxbY55cWukpG9XXMQZc2jk8gLEUZyoxdSFhNaUAbQBY9U2APnRAN5diJMvznARVY31jYQxcazF3R2",
  "key9": "3jbNXSGUMWtNNBCum12DnoGC9WGtCsChaeHe8r7hUBm1UmGp7aHqchmhTUrBbYi77VBjRKw9ovne8yovK7m3kr9P",
  "key10": "8s8SY6ADpqDqsEEzKts4GshBqghmu11i7WHVRfHnouh7udzoDerGWRSkC9KJNBq5RE4717xJpyPGvPzvaa4TtAN",
  "key11": "9vHWyEgGUtdGhAVsZfyVfjvpiEqrkM6pD7yWtzWH84Da3CcEeGU8ev8hssK3cgBN729Zgqpjv6BsXt1orHcxTVN",
  "key12": "4Wfa962JyCwaM87T7niXtidCHYFhoP5R7qC1DEBsYid6AyVQSZcHNvX48G5zpJFnmNTc7RXYspdUoKMiWrcETiKv",
  "key13": "31M8x1Wr3BrknPEW2J8oRWbbLDC79zkhfuy6ADbh4ZJVAhrn5QXFmt1ERGwqg6yisoacNAqDezUmNojuoQdsizZk",
  "key14": "4bxEcQUTQRBBoXWtzChBCdtXCxUrTHS5sXz5S3THS1Zjmc9RqijKpuYxDEH6PFM67FxEhBF2hbbDxdXEjTaR3HGx",
  "key15": "3ptWKTqnJ7v9vqFDz7Sb1zMChHGV8K9KfvE14EPhtTTSJYb6AhwGbzoAtUKbQTta4uCYWhSWyXgDxC2VjKq3VTNu",
  "key16": "aCfHMAuF6KFs4XC9ERZACUaHUgNu8KuuHDE3finY4vazQHuSkxgDyxm6rvLsjf9SfLkvs15txhgdEP4FpAb1PbJ",
  "key17": "5rCeV4pAzTwbwVZMFvhjDRdurhgfHTpYUGV9kKDRT9eHgrFfqBZ3Ti8P38GbaJBzz11vsKh82Nx7pg47ryFQxBrZ",
  "key18": "5pzkhrJ3AvMEpjcPu6phQGmaKvLNxcWToa1SuBT6H1P3dMV7ZhnyVDkUZ7VWGFqtJscEboeMnBeQeQeEPSq9Xq7B",
  "key19": "32mLFsptUoGvYaGdEEtiWjA8zZiVGVkQjUS6yBNsBpaUVPDrAHfQuesM4PPwbVzinouNXRWTe7TR1PnBmR2TKZpV",
  "key20": "37bXgFzaVmri48F9qCMHJ6TcVd2AbJh71okWzfWFUr4YwHrjSVbsmCccQwVfUFeSzfEdLJ8AkYnXz4fXDKdAMtTY",
  "key21": "5EJSWWAncpybBfBJoqf5PprUYaYby7dnhTLEh1nmNk3wfnhRQhLTe6rjk5VUKqoBUhqzRASPw3bouhDWCxmuqA7d",
  "key22": "LaHt2kxFFeQNUS3XpqkyrfLfY49bUqNyoPyed7aEC8r4vQeRdEYwjwhqZGoaymC3M6KqFb4SMXZmeZwPfRuwtpk",
  "key23": "vLjnkCXNyCgcUyeNmex6ewvek1ZB8321xMX7HhyqTEor2kAKg8LrNbch5JA3vq4qjVZ6NVxyrU9PF4aRLbPtD3m",
  "key24": "67PA69D8Xpn96P26wwnJg65wKrX2buJSVhg44SKNtTf8gdQwWD67fkRUFg3x9sNfKpADQahAUdAhby3GhTgWFMCZ",
  "key25": "3wPLcSUPYUtdv1DCTPWPA6o2XMXaPj2Szd4Nj74EZ2k56yS7fFL2CNo5ecDmUiYwyJNu7WzxNm4ncApPktnC8Hpe",
  "key26": "2zZ9pB51FoRkjQiBx7tV5yFQ1AXtmZExQBTCSmjBA34DHpwUs99YgW537p2B2ne67PLFgcGWdEdxMYvVPzL5ys2i",
  "key27": "5ZVZ1Pdp7JU2avBmPo6G4TFS4tYUZjtEnBXar5SPeaL7Jfd49MePgYD3w8cHoxgFi22ktK61vhXGJZT38j8vrFhi",
  "key28": "9p2odcFyyEEb9gHwDDHUaEmV4Gojf4XfPxgKCMNLHV9Sb5t3tbocPx7qKyzPEQshemWqNZBtLCd7jYJgtgvGV4P",
  "key29": "4WHqi2pEL35C8zDKzFRNcRnfjHGokQuwuzEySj22D35w4ka94NhdRqEaUE49TRSmhrDWbZ9osoWVHFbhEziy3DFz",
  "key30": "59LFzwZJYV78w4iavtXciQNtpwe9oZvnjWBwPYcBiSNHnn1CVqJjgMt6AoyhBBJZpA5xZAuJ5xLGKef1U4bY2fVC",
  "key31": "3R5W3CzfUZsiQCRKc2wR3R2KPhzpWr8vir7L9gvjHZUFWrUxjX1PudiwqN9gVrCvigCMZ5mrhbVXkFtHUKo9mGF1",
  "key32": "cnVFeak4CXfHFRmZ79W16yeikTJ6t2jRaksDuzaE3HGNhJbAYA691rocsfCGDpM3oJL4zbm1npppwPEjmiuggJy",
  "key33": "2NLcM81fQBD7sYx4sDLsNhPFBcAF65JfQ6qo3oQgxor228fJcA36To6ToBDyZp3tQzrWfgss37LZ2rfgG3mADHHo",
  "key34": "4jYeb1pk8LQVzkFSDLGuaJRfTbE96yn6pve9EkJrGBvp2jZ4d7QqvfvhVCYGc3jPYWugCVBAqP1QjcnsVBUxVazr",
  "key35": "3sZCn34gRjFS5HN9smo45CiaWQFLyyxv1NQ6TuUkNmauEhTJncxakz7N18gnMrfSVnpgR2wXq8br89RGo5q5Xty1",
  "key36": "3iyTWo6BorvAaDHmSYKapvd39QHzzNcHH4zGQUHGmHxtHNKENeJBSwWMdMZXBCwpmsGcH31CTHuZhUHhVrcDY9xn"
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
