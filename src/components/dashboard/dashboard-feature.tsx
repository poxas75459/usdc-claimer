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
    "67cLNmRXDZtn7hzgXhWwLmrt83FMhR8aUibpWCmbDnxCnP1BhCH1aVoe8yZan2DWGDvkduftHr7aXgR9k1zp11VY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yao46mfdLRAB1wjEvRebB2tHTVjDETnFSbAaq6idcGuzYTq1xNYhLCfPKDZqKWTv8f9ysaeNYwbCHuoN29J2GpB",
  "key1": "1vHmyzuxXaGCrhZNiVCi9WPxd2rfqBbib7MdZtRqUadzmYGKEaHpg8Nd4xYjKMeH7D394TJc8WsAif596i7GNVC",
  "key2": "E5xaG53rJ4MdwP5o7FqovNL2vEivybu3LABBuVGzgYcj7BPxhu97qtypHaANZMCKnDErS5fdbJHNSmSBYE2NSBX",
  "key3": "34F4BSHBwctC1enu7qCeva8X8WE2UTpiHmmeYw6dk63nojdfmivRfy71fj2TyseRuvdAHPxmic1tb15HumoNe1hQ",
  "key4": "QDRp4MBCvuSX4zYH7JSswMTNvPyPpyPvnbgKUfbE6fwiG6FKCVJPxEbfbLSgNcawCqKeNjMEHP3HC7cXJYJ9SjE",
  "key5": "5MuwpPVAg6ZH9bZHEC55GDrutXfqM1RDDaaDk3Xnuj1JGr1ByrbgM4jhgj2T9WexnLrZ7WeP6XapkG2VE8Qt493Z",
  "key6": "3hj3iSs8EogxRojYcjBzRbmXnE4wsLsEqA9Uum21dBMPpvSaYQqP77ntyPH9wVdxzkZV8uRsoAMxGKayevxuEvBR",
  "key7": "4ak2Hxk6d66mr6kTNtTisHsE91KX7wrVvmWvQ2YZacR1VNuybqgPFkZzEuUvjWqEdN4CmpoZEWTVjk7VtD4FQdSN",
  "key8": "3B7N8Cefd8uGqoEtKb3r8QUS83MbmC4doitAFBA2N1WnwCp1GWBPZMtpDSyuJu3VtdP7ANXwWF8M6LKAbj6Gbf6B",
  "key9": "3qZ8QsN7DtciKFmvmvJzx5M7Tn4XDyBoCp7Rc81GckU1Vh4E92w1h8tX5KubyqJ5AMXdwpdgG1rmoWcf78VQv5vT",
  "key10": "3zAKAjPqwnZHt92nn95YFzMUTsBUedXuWkwNauFFqZHt8WkduqNvAeX4JWdD3V7EvgBcLiKJdH84xAbjXnxisaD8",
  "key11": "4LWYHMm4BoLF98wP6Ais3k2E1icC6te56MX9JhRahavcAEL6Egv2wbvdKZec2oGymKUYemrZdFoUA7xPdD79HQmc",
  "key12": "5tMmLEMQ56pRz2ELrYEV7gGzKJrBdYiWAKy5HbFD8JXpN9G2F3ALwRw1XT6HjcuV8xw3mRM1ufSExGjsM2wBbfzG",
  "key13": "5eLGQHEiHsf67VodLXBrLEzukPJ3BYgDLjc6Q4rvSgKy5R4koc7MVVY9NKufzcYrXEhYjYpVWrmAUT7LAiiBd311",
  "key14": "4Em3zbCe39QoJHdXZgnTzxDT4kwqxQKVrA54mgm82R2TBvge5Dkmp8VNWyqicPFyMvSE6i8dNmv51mgwQ3rH1nE9",
  "key15": "5DeZqboistXEuVuKK7RBg8QyfjLd43CCjkBKahq55rToxFJxsZPPortsBU47n5puBetrfhCpZKJrHQM4DZK3uHVr",
  "key16": "4nnMbmBaZaFf3qbo9UhMN7TqX6GxBgNkBSfWsuHEFWTCdRXnBeh2JikBFxo6Yp5xzPWoLK7aZ9ZzbdvWrCBds1fG",
  "key17": "G9oMbYrk4K7cEq9b9PbUZjvTPvUbbAk1QZfYyGS4xZteepVyerkUZ59R3SgydNQ9cZeTwqoKfSYAMkWL6ZE3ULo",
  "key18": "5iYQ5CLeojt8TKx4YwT7KwpjDyWrd5sDPbuciwrUpnnyckK9UB6gnptwmnxQchAYiZrWj2Gh8aDXUAwQBnTnvGJZ",
  "key19": "ehWTntVWoCmHLEnpew4cYWQXcSWmmnjWCVeARM1NRn7pTeah15hEg2CmfwrS7Ed5uGaUdNKX6prEE6o2Sn1GhRC",
  "key20": "2v4jipJFLuSDorizyuZJ1nK6yVuT49jpYjeGf2YL8ENz9XV27DqUQ7ekwSwAACNGVUpSb1QC6VebQ6toSkVH4s9v",
  "key21": "4XMewYLgJvV6o9NpsUK3cahZ4rzpBba4URe4LunGrUHeZGfywnQPVsUxwFR2ce1U6drBv5Zm1GixCMFB1UtBWYec",
  "key22": "S2jQGD2ck3mYoL896HofQHHmPMnAzYDg9HbFdEksCEMJtbW76YN6NmF7yAPKJJiC2s4KGSopGwMbqHDZAmfukv5",
  "key23": "31trmr8VDCppPqaXsWSqEEo4SvNNDinugNoSRKJ6vZNRoQa2XVqSUu1owUuNKmZMY46vG5JeM6y5fbSknaE11LEu",
  "key24": "4SADbgidnSfaBTHinhJ1yJp2g8zXb5FZV2QWKq8bjgWuunPgZZtoC2KqKDmHrAhigC2XNBKcCoDR7iAE8TCKLnfd",
  "key25": "3DQGqrNANMvhfcagSfP7ffHMqqpNtP6B76PiL7gRmwyG5sVpfTdz5AWQptcfVzmi9uR7xSuXwuap85LTenY21jDE",
  "key26": "2X8xPAZkwfMZTYaQKe3yRGXYJoSseZEkePJ8GG7vSSMviqvufe8XmWuVqsUvNZTvbggBWv8Bp5DF9F1LCD1q5qLX"
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
