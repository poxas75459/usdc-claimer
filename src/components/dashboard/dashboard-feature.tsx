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
    "3JpsaFQT4rv1fMRr5GMvY2QhyztACCo5QXwBeGg4f4cGkoSodZHu5PeHsMcS1AhoH3C1RaybQG5QtR1avztt68cM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TnhJsoCiqpTwe45kuuCipKkZYp6tFJRdKaFnnDL3DhgYvdN2Uje11SXA3GvkzZ29udAwN5iuMMMfVySUL7gSc2L",
  "key1": "2DM61twr5ZkKbYESxs4JmHoLJdVbuVAHUtU4Ush3dWj9XUbYwMyyr8YXm8hfJa7NwvaSiYtFtgdTAboUvc3KYtBX",
  "key2": "Q89xuBg5wj7dVQSqe68QG2EBwhx168Kmon4CPLbW6GGGoW4SfEgR2UVi1xr6rAcG5igd2WDFpY9xfnP1cLPnWH2",
  "key3": "2Vt3Yr58JjDN2eaEkApdHzk3ruj9RMhmBNVfXMLARnvJCcGwRvPjskm2HF3f9vgXfBWfHu4HioxQzffcAgyZkhZK",
  "key4": "44aPHMGTsSDx88kF6sTn7oBSetsHmvNC2uGBECK2Xg28JRbs9jjxE7p5EkVgz3SRkGTcnhPtaaFVia9u11tAprLU",
  "key5": "39T8a9DUeZFwFS19B5hoFwRsvYMMVirmr5L8ftscNETrZp6uqFGye1agP8DFqR7F74yvrA894dZbpFmWLqN2u93e",
  "key6": "4G5bs6AVgVTbx3YfXP2tmyBBfKPdtvXp9bTUjpuRK9vhZoW7bV3pWnUxJvYxhi8yeQ16RRS1uwbCExCiGNYEGrFo",
  "key7": "URTMQPZxTk2Y1Q1KZT1rNmCrKsmR1RitsEGCG7si965h4mAFDdDzzpvCbyommnZEq1daamotuVFe9FZh5ysjeBv",
  "key8": "2dRsQPZhacjFVfrVdhXvG9pJDE1EZbrkvsfbbx3G5hgGFiNNJJa4otKTuShyVXmhzppS5Da9G8PUP5xj3DadLiHr",
  "key9": "3ApDpbA2uTHhatsjgP3umUhSKWuSLfAuia3wzf8TLSJ9oWGzHCMLwzjCifYhQQNqDvnnS1iHhJyiJphon4RBLVjA",
  "key10": "jtQinavNMshDjukyXh7sk89e6Vh9wXkYxKY7VtGC4aF9ajwmgdaxzsKZhpagFvBbsZW3aiJdBT3KXdJAXUHUgXQ",
  "key11": "28tt4JHMkxD18idukGdodrxM3HG7VKfBzUqbpg6Dxn3Nvs6tVge5fFbGi28ydijGiauavBEF2CgJwGJcYKywqmVn",
  "key12": "ZnzZab7L9smyyGPdraiR2edQCikmuQoN2HYD5Q2AmnVaKVHKSKdYeUDzwGSRZfAprZKX7E1ckKryQWoJYoceSrT",
  "key13": "5kkj8GGoktSAqHvDmmoNMScx5ZqWSQRvPFEmRf8w5eEYaa8DkdBoqusotbc5aiEt8XjGnAjnginsGtEZ2sK6bxNq",
  "key14": "53Q8HbMwopepyHzsJZ125thnUzShBpKMcvetcwL1RuNA5Ty3TmkLoYnnSQvrMCuLcnMUx5ZG8JGCdnzGBmZcYnaB",
  "key15": "RPend5dEEwY3wuvuhpNEPjWsn5jLAXaQePkbk5P84zbzrDV5U6fiRW63P6j1TVk8Uzyso7w2LgLiYd9BYsUoEZz",
  "key16": "qmn9pEexh7gACaSASU24MGQPcMwfMp2Ch2j7xmo6ua9pK3Zmg13YzxCAMaaYQYy5c1LALDYWek1PwtvoobJgceR",
  "key17": "oC32ifV1Hf9wc9Fn93o8Uj1vo96cLRt5iPHeA6kzuaic5HSfVjPX2RWKgvAKp1X2Xy3GQtUA78k7jyZjSuEJaKf",
  "key18": "4aWZDQFj5hfAzVuysfCxLRrxW9MyC5bYgA5T7Q3QYBrN7qtDWy7vyNFP3BWSPexjnfsxdnw8o8xmsLGajxC1quC",
  "key19": "2HgHNrF45VzEDbHpRdxjSfNkDLnKGWm4r6ZFEfQ9FjY6BaF9A6WT2aNuQN1YS7TXHTV6PQkDyqcJAyBjcmisZ6Np",
  "key20": "4qYKEeaC5yiwrdQmTxgZV14RWYT2NeQnvvof5SCSSYPDCoUxMMSAjkyrMbVAjV8wpMrrqP1hjTdFNnvCjP9bv2ou",
  "key21": "4J8DakZzEbxFWZVRPRRJnKiCBHFbBLVFVFPb6PfJQ4LiofiHLncn61MMH8LGenPuj8ykkeSoskoeU6Rb214mYvss",
  "key22": "M72PVx5XXR2RE6FX8GXGrrP9qsXHcfj6keVUhS4Z9T25fVFqevRT22FKR4y1DeWjR6x5JxsUYCa1Wh9ncSVAK1J",
  "key23": "56YgNP58kezQR8i6E3uqYnnyNWJZPxvSmNAiesjGytLfLmTawMeUtKvt7cBJE6vqu94F52ipEDL7tqBB6svJfVHM",
  "key24": "48kchwEDQcxxjup32qnx3ChQk5XM3LK66fMyXzCcgThwgeTdGcjC8ap9fyq4v77MG8CSjLzMeztkHZG8KPdqhtiB"
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
