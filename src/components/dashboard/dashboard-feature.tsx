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
    "67bznYyaymaacwa2U6ER3L5EtvVjHcD97d9ssEsw1KCQgDxSxxwvEd91DbWUwzqu14vG9PDVntREh4ZzM2jDws14"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38gNNH8zjw2t3v24QDML2s69hfGYHNzEvnJDBvnhv1SAgQ6WE3yYq1aGzL5q1fFv1Hy9Cwp9ysKCRngkNnGqEq6o",
  "key1": "56MEhL9Q1LJHkYFMnYnXVTydUmidFLVcP5TfeULwVhcC2r7JpWZMoJSAbiHg2VhJoKJUsXSnmF9KcNJj3gDVKRCV",
  "key2": "2rN7eT3BDSWk81tbsxCS6RtggTQsNovNtgb9rujd2hqWaBWx6t5gSjygE9zqPAxuCKwuEzJRtRboErwm6xDBqRAC",
  "key3": "iELgbFaSy34eUXLpu6CR1niBnShpj48GJBVTrCjYftGEqwqpz4xWDfq7dhq8roZgHs4qLwY99ree1tSeCaMf7NC",
  "key4": "uVfU4RqBKzrsZnPachipL7r7copve8oxbJSQ3rnPsw2yjWjx6D9XZ39RWmPhwxAbJoSf6dv5AmBMzTd8hcaQtsd",
  "key5": "2B4VmYhTuMRruhXc4eZjALDeSV7MZBGjMobzZ5JeN3Gy5UgxRqrNfeBiCnSxoN72y9NXCe4KscrZ8kR1v9SBCBP9",
  "key6": "2EyHfkEwmjNoiztEfDshtndE2MVPqTxHV7WzMXQParbjBeefGMjDUSjXCafFRgNieGXeknMVoqu2h8imZ95oGyzt",
  "key7": "3jxefzboTgYNrGMrXsWbYKpZjLYsw2bGLFAwD3LyfXEk5cCerde17wCyMiZVx4EYEep51BDrPE7D8Xz4idHHBC8a",
  "key8": "3Mu5aXf2yhiZGBqswVqBt1NDHKvZ7b4XUoLZDpdvtXBZLmPFTeqShZ4CSrNgPaUhECq5zXHTGE6DYuWucAe91je3",
  "key9": "4PNQTK4R9kPGjqxzk3Y7NdRSaTtptXY67H8x2VpSFuN4wsCAZcKnf2DEoNs6SJSy5VtHdCJW1T5ZGrGKpaninVvk",
  "key10": "2veFe3v1PvNDXfBa5qEefJGwT9raMiLshDPH8mkZDn7NH1soUfeWa6PTrRSWfZDnX3a75MgAyaPs3ZejdQDeUr51",
  "key11": "3DiTGMDaJojtWp4bDg7K825boT9CexTKNkob3FUjAkEWDutMumMgVQNRphLqdmZkgHRFAokoj8xhrGVzoSH669Gf",
  "key12": "HPhVpgUYe6cTEx1nvXYhodon6apu9fav22jt7yEDXQ4T2zL8kRUz3VKCjvDQnCmABJRLu83fAdqkfqRNsRZFMtK",
  "key13": "3mzRKEGn1MbrBAMYEL7oErxjEEPtzzSLwd2FgBp59Jvi5iUd6qGM3n4dvCnuCQ5HK51Qy7Ron3mnXf3w871ah1Fp",
  "key14": "4vatRmvd9ZYH5ejp5XTyMdjCZgJQH9onqucwvkyJxfFuWCW86EVWeiA1Wx92JFEFu2xS35wFMA4wvcpbtsLyTWnd",
  "key15": "31ff13N66MfjM6G4qjvaAwxnTwXsuc3Ce3yfMCQRD498kypPFqPiJzwDuX3ssFDM7mdmLLUTSKdWdJNTptunZPE6",
  "key16": "4WqdGGUNn4Mwvd6qxA7b3ahDoa5xgC7eTNSZsHF9JbsnE9ddq3oSU66REzQSh368GSrVvj9r9YhACh3KXA5nrmNq",
  "key17": "29MMPkwHwhfbL1MGQHPzevK4C9U2XKur3uh3SjxTiH2PhZPhYxJN9yM7Xanw8gcUPW57hFMgC9HBgs7NtgUkvnE3",
  "key18": "5MdRhnCdwkoT2EZq3UTPLjL93vt16b1sVaNQrjuww5oc7JnohkiPugA9qZv8mx2hiyLs6SxrSqH4SoJWpnYnafrs",
  "key19": "61yQW6NbyoTYkgaviYXQueKHMXbwxeHzf1Rww7VRds1HMdj7imSs8hXcFMd6hSCYifKpYgdKD9V8AitSrr4tGMjb",
  "key20": "3Tq3E9fTKnwUp9DeTzkmvWE58gXizWLpF2UV9ZpsBPfnBBvSx2iv7Z5iqXtWRu8UVw2G6QWjbpy1WDhXZ8dLNYt3",
  "key21": "5s2cEx5jCRYhFJhBi1sk7hLXYLhXkTRVaNpmmTjjPXR1waSvrX1shZrrfVaYg3vvda6ez5CFAxRAPqhCcBMhcXca",
  "key22": "44bRk2ZZyfcUcdF1T4XkWguirQfbLq3RKfta2Fzscg6cEYATSnjMGm7x7QTrexX9BXDmFx4udupDBynkW1c6hjFe",
  "key23": "9DxfHKKVqZM4cjtPvwTyLjULHcgWB45YH7X4gVGP8eXERCMthaU91QtsyDGfhkTSK2mD9UExdhahVadYZgnwsHE",
  "key24": "5CRDHEVry18Vf33cWW7ZXEMW74NxYFFX2hJvsgwDUtJ6fGbKoL9obV7BNV9LzadvYPS6YKmsb4xmFkZ7kUKtUVd1",
  "key25": "negP9M6UDp4Y8FTdKaAufDzRL6EgQHnrzcjsTSVMGChr7rrfTBHx7u5fFSZ1hhrWWwpP7xwKmxsHkzXVNNewVJe"
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
