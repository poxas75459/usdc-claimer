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
    "3b58C6fGYNTCBVPNP7j5ouVSxvJ9WfbUB66Eof8QEnUKRyYyRhpz1jDNd7cHEfwTfLvJygQh7f44cnZXL9ud3wMh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N5z7hi8SkdxP4aYP7Nmac1sueDoDdBivG3WdQnasdaEJA9gR1BfdxFZZGyN6yVvWdEfYsvwyVUL5CspPV9c7w6x",
  "key1": "TJ1kdSY9pUMdqHr9aRn5H7KWKsNBWMzVLTKJ4G276oH2dRA9izTtwGgEbJXKE1Fo6h535gdrvsMz45sYJdJfFCZ",
  "key2": "sCWuoC3AHSBXozh4HUFnCCG7WfvYxP4ptQVcTiHbb2PcgB45bd1ehppphcisBNqgnh9u7xoehKx6ThjJoGUAcvV",
  "key3": "5JgRsi2tLGZiMjGR4MUvVDSJy9nsHqMQrid6wyAWQoDcxUFx2NqVcQhyM5hKYQgzL7NLr5Yx9ZrXL5dQLu9fDKCV",
  "key4": "56VEdGSsE5BtBBmV5hsSdEeHBVEzxV8Rek1NhTE4Xdib2xvPSdHU3RewY3aExxE7pUe9JvpSTB2MmC2xQ47nJF4m",
  "key5": "5kM6EA4JMoMByDfMVmak7LtUvV7rJ824e9gN5s9wwV8EM2a8WF23DDZFT8SKBTtM4Binb3Dos4bACGAsyxrk9BAh",
  "key6": "33y4aiMe99dbMJK9VQF1dd57YhGMQSvcJQTFjXbWUnxwu1FRyqkxwNPkDrwzfZbGTo3QFgCoXNJi6FAdwGGfui9d",
  "key7": "4oJXyaXx26FFU9VdXJKBLsroVcNvKkAPAXJdWNbuovZ43He21UYDh33vhyPwvZ2eZSHkW7Xb5Ta774K6Hnk1xLvg",
  "key8": "46g2rWagRrRF9Y64Nqy6xzT1Ccb8ksRHXDdtA4CH9xjTXoNGYGUBqa486nUPa6pfDfH6mE9ZMedAE9Mf8Wt1b56w",
  "key9": "2AfZhVggFXmFTrVZddWPYTuyjKHbwxEDGbUgAq4CF4gzemHGKdwPoxeohAiv8TzQvYmGhM8eii7xabBcU2r836i2",
  "key10": "4tiR5VcZsLRFsSQiFwcDxsajh4VoNp4rZzwUMADqt8RtXNUnGuADRjpUhYw1cruxSs5cGcTpqMdqzRSb61WhRCPk",
  "key11": "HdkRHwUbMY1Vufoa8iwAtxTh2SGa52NAr1BWd27Urbw6S8Y7545Q9jbycnTbspztyA4X7scvQXoaZ4ZhTSJdVXr",
  "key12": "2Gc7jgnM3WJhYsKg9pS3v2VniqafAAcWndVqkFxB5PtLzyCK7aYYVvLmbLBteh1GEcVMji7T5qvaG8YSbhApbFhL",
  "key13": "3Ck7ofUeXVRJxaxjxdnzVv3ztTamNQpJpmkEneQBjnLUFK9N148EueR7por6XUEZa7RngGQYhRXRBdLQrethrUqJ",
  "key14": "3ikV7ZZmvzVqEehQxhiLT93CRgqa7SNCkrftre5dkx9YqB43Uf5vt6uBTSdXwYFq6zuEc3apUrxDKFxXpqo3UvwY",
  "key15": "3RQkCRxaP2aNjfBjo9W4UwxHMpBRnEbCJH34igrSQFqsos9DS7JwqFz8zSc7QmLBwL5KtDdsQ2HnaJWKuioiijZq",
  "key16": "52y39ALQUo8ogJX28iBojNDWZLiYfEnayVv5mSpaXkx3KKS9Rx7qct2h1NZdsZJycNeLfGgcJsMh4dmgMpSdckPn",
  "key17": "4FewbAMcFUZ6Hx2Ccg6yaAKgMY3Er1knK31mcy6ycX8T3tPL1g2suxGwseVJmAPPjfQDFiPLuo9s4fiCroBESwPN",
  "key18": "93jAVMtnTMYb8hV2xBmEbsfuQNtUfPUxVJ2px1CWmf2QyuHrgn7buW4fpKhtq1ehXSzSDpTo24LQFNChi1EGx8B",
  "key19": "2haD7kuN8Xn4TWSzvc4VEd2AbuzaZbWroNNtAFgJHLfJQHWD7BMDr2Z1VGLDig933sJQp1Fp9tpcoKX9rA7xHdZe",
  "key20": "48Uc3VPG8YHLHBswQZVGHoAACQ8b83ZMMCqHTsVwmepY4tpKLsmCr2zTLBQUcpC9VmRRAFD5dwtnEfW92YsJi7cs",
  "key21": "3vJPGMTi9zrbZXhyPK5stje7NmFugZhAA5EwFaC94HyYSpRCKHxqxM65qiLsve8zoaQid3SkiM2ij7sWdJ8sa7xT",
  "key22": "5ygmScy9sW1vbwLyPtNBpLjJWUzDCZMYD2E9EkyAwX7zCTNFezjHAGJrgJhoEEXFYuB5nyB1BuPfB734Ag2DYEK2",
  "key23": "2ifWHfktbquxFQhRPiY2ngZMfiMS44AaFSwCjfgHvmqXSzLnCa8jEMfJherkDcH9PGfgp6hhjjaEv2YQFJpXHEWL",
  "key24": "4AGza1DJae5wmrch8AUcWyimX8XyJiCF3sgjWzbEJo5wRnHjo6rxHHvv51zyK62jg59yug6LkxsQDszjGu9DzUKf",
  "key25": "2psSK2AYvPUZdxausG2wvXY9Fj1yeGQ59cqhAQD11v5JTipvyQBGnc3gpyD3YVPjDSzUk1PeDWhyBQs3maj3MqgE",
  "key26": "3uW8RXYWepy1wpkRkahvASqrpjBS9d1kRDWdrHikSNd5JnnNhjJ963eSJW9r8iqmSwBBaE8Efu8ywVyf5SrXyneq",
  "key27": "4g8xbWAXHiT9WhFgk87oEcsVGnY6ijnX5jHvTL9rQqvnss9JH5EZmR8zzYKJjNcaVkc81LGhZ5QoCja8ucTCfFKK",
  "key28": "1G7bSULKPwqqYNacBVjNKpHAEiLw7rNm9CA94yBrT3Bz9tD9jU33tZtJdRJQ5q6r8h3QTQjGx5xYoHp5B1tosNn",
  "key29": "2my6eTYp4dhUraNi7yzoPd4CgVqHcSHAAsvXNsKbXtjaHyXWMtmJQMWBdigvcHaETaa6NQTnomghk27cQhx6MimU",
  "key30": "5y8sfsm6pdkbUC2NZdKCLcpuXbMFGms9xdDjMVwuqx9Mo27EiYaAbwpdCiwVGbNQxskJPjnAFRQGcii5RoKoywLk",
  "key31": "5ze7q2XpNRgPa6Gi8kRNBAQXqNPjrjp26HKSNcQu2mBK7qp4jfYmC7FvXNBfgChqFzyXXo7FfdnkzyT2ogwQvb91",
  "key32": "5z3yK8svzwHC8SyyHMXMpMuD3dLsRgLf4XTrnvEnZRngmRosz7g34sHFm5B1SVFDErtH7HfZ9PKyRb8RuGwHVzo5",
  "key33": "gjWDvNwhEmDtj3eyceWQPDSFDJMeQLyjLZ6JbfUdv1V6XcP1yCKyjr9E7U9fwsUynk7Sv4aML93kukVAV86QMAH"
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
