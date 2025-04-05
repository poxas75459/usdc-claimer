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
    "fxfXDKB5dkZD6mb5pQ9amafEoZnofhmLoMS4x1qMfJynYJ4atZ7h1tLfPVne8BnUmKjpjiMkvapyqSXLPSXoWs1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hkZCX1ER2fxPjTyxd1yrsrPDe821ySVkgsAjSje3s5mCtjp6gHKfmhANssgtbddLYqnjohhE9isqqTaCukTJN2b",
  "key1": "5EdaZpTzZzkMXtYcDuSSXDjbRUJcAybxtPWGAM3BMYs9br715offF4sb4rXV88pGuTC4ZFPoxUoqDZZwxnjUWNag",
  "key2": "4utNFDj9qiTxrHkcjV3r6aHNfrGs7wmRPj476aXF9XaFKBojb982SkFwSxPYSu1JK5ur1Ho5yCMoF3PVpMmHvsac",
  "key3": "2uqMHrPctPH8p17nrehPZZJLUaaxXDTJqVjQzWD2HUJvUQSLCUWcmNs1BxfuZuqQ85zAcZLCdLdV5ukP25fAeLrB",
  "key4": "QohESzXsHfCcNHzH8yZCmWQgeUBnPpyKBwueCDNphiHCWLqaKax2xFbHGXhWApZsk3mPkGaCdDkXR85nqEHvp1m",
  "key5": "5emBytw8TwTtjVCRRtujreAB9A3d3kKZuL4ATn2ChuXKwbFM7LwDwFkMPzrLhbNkxvGsY1tnwRKj2VVgYc1jANqm",
  "key6": "8X1Nh6dvpuU9RzKHKqq3P1Bixr7mizjJy98jkUbmXNNXTDp4PtoDK5a92xPECnrZ4rn9PDrYd27rk7v5m9T8hNU",
  "key7": "4mt2cuzcf8K17ByVGciMnPdKDa6cDbmi59R6aUJeoPVcy8MsDWdumfqWQTc1T3aWn48pk1Edef8L62YJwxxkg7ok",
  "key8": "SecRhXL5V723mdd8GJpzU3xDEF6x6qGQgXvCwFth8S6s42oGGdNRGSnVsqq3Ucuu74DLPNSgpSviCeEFHLA7rfU",
  "key9": "4ubchzDugYKny5XT3NtUcr6P7KR2d5bHJ6tggY26c1YsYXedPijcePcN4D6oBR9iXAAwe8JhLyhK1zPwLZRDqLTB",
  "key10": "QzubbCheX5U7mqU5Mq3RnE7wxu7VUCPusd8gRjxBFFiHhdXk5gYhsP2Gd71zXhEzUKdmsrg9Uo2RGYkogEyk3YN",
  "key11": "G8Y61QUn8K26GUFf6hEdZTU9a15JxdaGBYmNdMKoPHDAqSjzjX4Urpv4eHCGrmawHtWWzVjBvHaBeNgzgpnzD6b",
  "key12": "2G3ftGxJGNBjngaSo2f6RiwQbYfkZNygJwrEcQDCpXFRfDDmQSCg1V3Raf9DD6QezBsftsBtupEsrP3LzQEZjZVM",
  "key13": "1pN3reyPhyNwY6MS2qLShPPQo5vbNfmZVx9qL6jLKghrG6JryxZxMpEay5kLu95QMH4LpJSa2u4wEWtaRutR1sH",
  "key14": "4U4kut7HP4SBbNPWGjV9Ph8zEnfrpRn1ZLQhFFNp3ESwd7NCBjs9biHqQein6AgECFoyWnXy8LQvHhppEHLGqujT",
  "key15": "2vnvW55ovgWdPsjmF6sXFhy338Hny2CrwJgiREpgkYwJbvpGYbugmeWCqw6WzDkFeAc47LL88UQjnttRL9kCoYh1",
  "key16": "5EAUwfoGkFpQb1q9FkRbHjeCCfi1ySQVSE7QiRACNrGDKei2NkR9RLeJjqBNh11PTZv81WENMhJo1upRaqaM1UzR",
  "key17": "4DbSR3ahPq45DXzpPYq5QjpcfzRnf4KeXDFtAzag2U9KBoQBviASUf3B59KY47Ai3gf91RazRcTUSpapcmp5vmT9",
  "key18": "SMf5AMGMx4upBDPtxAVpTmmVHrRBYVaeKuLDdWHZ2S1JfvkJfRGRR78ncjVkiW3ApUHfWb3viSuRZx1BmhMT9dX",
  "key19": "4qaaRtrrcR8uwESQxgiqjkrqnsMS2oTsSKjJ3WecwDVVRK2hKnZ11BwKcQNxr4QCgyUQQTay2ghwLV8VvTHweE1i",
  "key20": "2imzGpR9yjJR6gJBzmVqs1te9NevtaS7WJSYjEib3pqEyRBr1kEknT9XuRPtXGoJnbZFo9v2k53g59xS6bTWof8o",
  "key21": "4uDzEbFmEwTZmyCJLwQ4QdGBQo7ZegGB9Jj7TPFFFujoSotCFD8Z5r7kKqyx2NSykABnpu6aapohbqR1wW52jycr",
  "key22": "28eqEyxKEP1LsaG6i8z2R7PocSACxzVfx1Us6Zby1wMbVkT1FfDd1fdYWAbXrdhoWwP1pMKqRoVcZmsq7c4Jpdpb",
  "key23": "3C7puUjmGTZPzvL8pdo9UxdRd7GE5z1piVqqMnnDTXhBMyqVvAuTwmxQMx5pmtomCoVCb4UvuF5XgtR5ZXcvjNR6",
  "key24": "5bJGitLeDpWn8zYhFfzV2beZZcqP5qxrgZXys2GpX3ziyebRPiuTZk6ptyjW8dRDBpvWdKwA3zzNpn25EYLZVpWD",
  "key25": "3s6bcdMicekB9VMCT4ZvL9a2Y2LxtEEdwyusQPdJbMuN2GwNZjJARhr9ujNiPUjgkpV8rMpmJJEEYnVB8N6vq8qp",
  "key26": "5hhvozQaS3xvMuxAt7NPANaQxEXK5kUSgktTayMzCnG71wCqAaS4HvcjU1fQQFDZNAoKJzC8JvdACSVTtTBvpgEb",
  "key27": "2wbjE1x88SmV9CymePP848zsxDWX26fdYzPr2JAkZCoFyyoLE3KpwTtGxfe2LoWqWzc6VsDZ5DEhpaVTgSGdWKTp"
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
