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
    "4hNpyKuhWuHwTscYpGqH3XteGL5Uw7RMv2JAd16UqB9HAbGFMKpacJiGthkpM5JDLGig3dFZ3hm7me4fYvw1nJm6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47zuJHheMxNFRmuVU9WLjxiBgABEkChgj4HtBCa1iWBgR7UsTkZbfFRNTQTLHfjFKLGazhCF4Z6CYArqEU2jAY5a",
  "key1": "5GJcBcxnT1ZvPBvdmfCMRsySq1mV7HqFJJxTB3NS3aewMWYXRQ8GoNkgg1RWwd2JEH599dcuS2NSQzSPq1e9t3df",
  "key2": "g6W2n6hJAPt6eZ4i5sAezomCE5tLRR6YpB6aJUMvhpa9xrPF8EaV69nyDCfx7Wmkh4vzD8Lty1CpV83TYe22ESj",
  "key3": "3yWR1SDTPjCZdxJavqXZHVvu93CDAbkX3WdpWq6X7GoTbvMarupZztaRLHk9m1mohzry4QFmg28dahc4otH2WiFf",
  "key4": "ZtWX2HK3t6GpicGvoAbUtCkToHnrqM4p2VztdhrnBCXXhQeGVjAXf46NVuqzyMG6wbWT7bpkBWVc5PJKqWnFm34",
  "key5": "3dBd77hb7cPfRuR2w5kFbaKegnv5AMBqEnsy9jt9pMp1hwRGWeE5PnckNVc3qHKmqDXSF5XAaGEhhpvf2yYX4pJs",
  "key6": "ZRgwVgAdtNn9Z3ywYicuk73c6MYtfz1ZiZAsW3GdbEJDCw8dEpLfGfXb3YXVeg9kQYnZkhbQquYeoAHvD3RAhHB",
  "key7": "dyh2v4u81pmfu3AwSBh3RfLU71uMytPjCfo71hsFTGR7MdS3MyC6XFe3DuSMtdvp35GYMXXd7KRgyE42siqQGbb",
  "key8": "qK1TgnP5XCXqh3QQDHiw1zZnKHZcCb1ezLGXqtgD4zKVkyjSW9BK41QpiJqn9YBXQjNgkYe86GTwqSokRpcMXPQ",
  "key9": "4Tfzz9f3LxeVUSDnFv1LuKGY9obfAQxCf8E3Q9pTxqAHiqeTVPPeCg5m6YBoLSNEEPdvBJTobZTiCLTeG34umHqG",
  "key10": "25cbPb8kiehkrb8WbFH5rHqHF4dVmMywvb192tDPrBvYsrS3bbv1fWJahXFkpfRoypoWC3JQRY4EGtKiY9F9MZvN",
  "key11": "tf66LzuYXxQ6VkoAmq4oJ6Xj2UyaZ8NWiAxzRp5wvSwADVJVwHxR2VP9oGTGeN95AMrkR6zHM61y28VgBNXkStB",
  "key12": "2KrxM6cSH5PF9EuxjsZVJVSreaYyQSsC6JusaVofz5ouCuRcxFTPp8wnRC36bKBUDtrz7jTVxq13A5UjQpc13jqF",
  "key13": "dMMS6BVFUwACRYp6sCGDg74yhLLZnaiHhXW1DPkRFaXHuMgFFHJnsigupjSr89pCgZKnb6c3F8sR98pooXh4zJR",
  "key14": "4T6PFoaMNNAmfsk9XJded24Mcyr5B4iAWfk3tnAMAUcvbQG5RbGYCs8LTPDfwrjziQvVTnsJY6xZj7kVvJVStDjE",
  "key15": "538UBtBynoBTr8sUF2DMKP7J6GWUVq66nMrEwjeRmrcnDWeWatcXRnWJwAFT6aPpcns4rqaXLGGSsx8GaK6McdTP",
  "key16": "4jJZbgGyRTXjoCHjUQidHKsyauuiVpRrQzGZqqbzoph2DzTjM6GapmRr1oQSVoCFfeLASCkMRS6uGAmCHRP62r8X",
  "key17": "4tr7jbWmvjKkwAhkT9PJpgRdA5ZohLRTbiP7nNN49jo5cdLADvTbZoAtoYrvNRH6WqjH4BS6UPM2LGuBRLoW9adF",
  "key18": "3wZY2vNhnUTEb6wxUSPeg3YAP8cyy4WjqNMwJwmkoxT6ejCBQdgSrmStd5WKZexQKFPTK1QLfDD8tEgqgM68Bej5",
  "key19": "4Exko3p9JgkHheg27PcwCEMAidjNqaTn8awUkwcb3XvNq6kPL8SG6vvJhBzyb4kbo1HSydWAecHTmjaPvHXpP5wU",
  "key20": "3VFjTYAs2XGXG99JEuhmRRixs2jDXQzPes6VRzakjfzmcHtj3jSDgGNdvTKFEFRMVcT44iLCkCSkU9FPJPU76dsV",
  "key21": "2oodhhW74JMFWs5XkYhvpqebSiC8n8JwYkpP5AkM5wPfW1tuAM22hkEMdka4pTjPNSgQQmL8RaB5GNq7Pa83mMVi",
  "key22": "23Y2Ud6GUiYGyk3eNgrhW4fmWQ9wniWXiGgNuvqq7Bri7zFJ9oFDeLDxZjH863JmBDKUbZr4AbLtBSSGiaSp6tys",
  "key23": "5ngiqhMhUgH7UzLMmZH8cwUnLVyMxgwJKjrWDD2NopfBRsoSMV35kQtTpzFiZpjybEqVLxZEHXRk9iaAWHcg8QMK",
  "key24": "HctpPSrCaKtwBaUHBH3wvTVh1XSmSE3K34p9nRvLQesWPbKZGrd4fdvRcw1DfC6JC7Vv56AobNswZcq721ABuJq",
  "key25": "5BQhVTXshTzurQdWZaKgyRvgBXDJfZjNKYXNrXUNsZxokLA4mr4MoPfmXa2xgncfd4s9ED34p2XnJCGzy7VBQFuX"
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
