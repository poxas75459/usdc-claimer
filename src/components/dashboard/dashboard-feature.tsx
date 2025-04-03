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
    "61L8yxedmg7KZEzY5aqfVmVfwhkNCtMxVX2Fi3xnsTLvckDnQyMbvZUr38y6iAuJ8SHHaVVLYZgbBqVDNMBJhUBe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gfqbWabhaeskLio8c9eWaYCNsTN8pa4GPif9q482x4RWkGtyyiR9SNKAWzL38FaSSqndMmTu1m31m8GtHLfLdiG",
  "key1": "4X2MuS5bbZcmcfaYf6VCpC7c5eiGYKqgcFfU4V9kpJUKFZAsuUSqE83CPPrwjJZ3BMFCoKCk1aGZAfgsK5WgSQ5v",
  "key2": "5BLRT9LLGv5rZorfEXCs4efsThrktqJjzwxxZrwhLWMXvoaAiidg6BwLQYwnfCh3EDBWKKqq1MbYvswdHxx6CWju",
  "key3": "43FJmw2zWmC3uLm2Uqh6Kbpc4Pqs4aTDCrWvwgRwjkVVs72AigWVaPvXZDLiaNSiGVCGFicjTQyP3gGeucLCcYDK",
  "key4": "4yEUb1nezzTZbVtpxj3SSn7KedhLtQiLK3T8yfWKSsFrrZvJ59aUXSjiiSHMumxwRMk7vXsqPS2B33Mzmq87bg58",
  "key5": "5S7gVbc2fhjjzDNNY15PvRsZsTDibGCxAR9RiuPfoEZq6tD9Kvtj18cxhXpZwDgnbwyo1dfj3fuLZ6xAQ2zqQrrn",
  "key6": "59HDfHMnwraxE2SeeGj7fPMQUwFxMWspSSrbRkD3u6qXh92C6Zm2dz8upbZKVTvbyE2UckgzXawf1ZuTsXh8G3my",
  "key7": "2zafX4FjWPBPoYFRffmbTXshFRUERUUHQSYAVbDXXtiTEiYJUutS8kBBdCr2jyKzEHY9NP7JsEjE4mdsSToNr85H",
  "key8": "4y8NkDhyZgT6RPEAm5ZuAaPDGuoy6qqcCh33Vs6P8kw3niWYvYVe2zBPjFA173Ga1UoygrF242j8hMV2CtoWKxDq",
  "key9": "5YmvWByzcQ9qwn771rbfyYTekstey23NhvnmmcmgMN2oUmTTY577dsxwyDGohyRWKD9x5n2P8ozsAAtU3Du8zkMX",
  "key10": "4vfRshvUxW6Dr3RsMafgdeNTymc7kcfhwVteShAbFbAxCni4vwgVTQXBF9byCUMjcYCQi7tJtFrjddxY5ALnTVCD",
  "key11": "3ArCsh6HyDR4UFjTnhQwLmSuTvNBNLV2KS2h5eSxHfowxivy7SE6NuYp6spn2KfJU83CG4xEv4y3AaHeug3TyyHR",
  "key12": "HUbiRadE2W5BESv2vBNQtpPPX8vQXbzVzA9AuXct6WiYFWpuAtGk9LFcANERGStTkjmparHudefdw1kW1NyNZH1",
  "key13": "4pH8kbUzjeAAt5iU6zvZkCsi8qFisinZCvXy8ESoBFaUQxfJAC1LmkrpVx4pBQSwNsNdtCAkDdvqzzNPuM6yHrc5",
  "key14": "4x1w21uPGjTXG2WLdKNpXYw8jDqDq9aFRPUrK8rVtfTJxGUTpDHThF4hfwCCxF7RWmBvBDtuNuyiJyFVYrzmxzzz",
  "key15": "4VSH8i4kGnNo1DN2QZkZ1kG5x5ddDU682rdveKUarDL3Xc7eyG9yRnVdjuZwfWPt3y96oW2YawEEPvwhHt4ZqReY",
  "key16": "2mwsRLHswvVrrx8oytPgCfRrSmMXdJzgW3Tbbw9Ye8EgJYsi9oA315XGRBSYXdRGqMmksdigrZvpLW4c685nDwRB",
  "key17": "3W6XNAnVvYUAbfXcQcVTc4srwFcPBT6r6X6Vf8kXQAFe3WKxeXJi4Sn5s8hnqJwWDDDZDM8KnEuFey6YXHikHDBT",
  "key18": "252P5Yp5ov9gaefGWFasatmS15HyyiPfiwhodQQVTJGzafrL1RQ5jbbXXtZtPRujAfEotC6KVce4G4ufZJQtVdTd",
  "key19": "4MkoxuvSYPhZkA9vravgXHKDEEiaC8uqcWmsxYUT33TnBHZMaiTPxB4PbswiSwX6DKkHYmNwSKLfgipVp2eekcyb",
  "key20": "4TgEEMcyxKHXm9hucX23Akm4c8CjTaLiy1w8xuouzGQ5v2pgb9nnmqtG6s4eyoVpEj782TPj2tAxuhCH99cqe6j6",
  "key21": "nnKqNrAhRdDWkMgFYwRFWcwkgcfLDmj14aHJ7Zk7jDJcD62dZTDF2c7vKFNBrUCpixBdiVv5Cz4hwuqmxWRSL5B",
  "key22": "5PDyUqADh5ZaY1SEHv53ksJRF1kKg8dvcgFxNDQvSimjpMaYNDiKZmKy8XHkPTbBaHPdFpaxew1XeF74SoQJSPyJ",
  "key23": "2UTC1dCwGcTxdsc6uBAUnR8dtni6yxMkr637dVWs933KqGzrx91PEXwokMofPremQEnEQXmeVZGCRFeumSyLHDuL",
  "key24": "2zRNW2GM8aVJbBzDy3BKsfpBaNzq4p7PxhYWXZPR4XLuyNG6pGYhAZqs8mwdndrAYf4udjaUwh2UvrDFshRx8Uao",
  "key25": "3RUGkKX2XCddZV5giM7zXoV5JCTjcTfPAmxryev3dKSBziJXypyJ9xcRRvDkkbCX8cu1iaPVEC95J8fkYeWwTFbC",
  "key26": "65uiVRiExQSioPUZ2guYhaeecJw5TBvG8nXSPZi3th6LbYAZGJJTgJ7pfog9qoXD4x4FR7EK6nXkSG95KqyRfJfe",
  "key27": "3b8DbihYY4aNM1bTFtYwq56N2eExP4NYwGVi5t11FUMVLypYwg3x2krjd8ub8DVm6L5QUJwVD5RCxkTtB8waMZse"
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
