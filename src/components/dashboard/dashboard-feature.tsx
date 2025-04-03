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
    "3KyZtuUTzJoQJwccNUnomsNAzw9QB1rsv3SiWVC1BtuoUkJDJHK2tAkSZrTNs5oMeoz4LiEUx26kAU6R8447kJpe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wUJYGfJihJVjC2DBungJvRBGUewxBbrrwfs8b9pEqj7e1Q4L59qp2NfTrXKWBvZyPg6q4pT245d6cBM2oebKiLj",
  "key1": "5aEB42jpyYT8ugGVANomcKurD3bLtUjxeGfwELtpa9GHPCfwDZUa4t8pAuy1W1QccGm5KLPiK5izwjzdcWGwjC4f",
  "key2": "5JhRfS6wATkx2AGetwCHkLafVJhfZkx4ZhMZjjPmkEbUWn91ES7hU7ux7YGSssnju68k29rKm6ng3Vjz1KHfBtar",
  "key3": "5Ga57XZ58EQ997hW4DAZHgvgqAhv8mrtc7UfwznthCTyGCSdmyzFYvAFYt5DmkUVNCkzZBMKpj1v1y4fwu3vdSvy",
  "key4": "3F6Hfw8pBWNn5pCYqXAcPP79rFpRfo5e8n5DkKBBF6qis1EsLUjAftzzwFMNGnMwAJ5NFWE9RGonZSquJEp7T8ws",
  "key5": "PRbpcy5nhuU4yPD8RZXDZgUhCkDJsgjXwDw7oDCppSuBaRuAaB1N4Lp74uJoREYqH6PnsUCV9mupDWw43i37T38",
  "key6": "35PuL561SJJ4eYMHG61sK7sPMouEQV1aYgBUWofkeUNhQtYEzu38PJHPf8Ua1E8mEdFrStF9gJhztpQD28HCJUoE",
  "key7": "3d7uXanPgue7efVKFdzzfWvdJ3MTbpx8bqq5VoEBDo3BpdhX3SUkmasKynxvBs54Zg2ZRzxDRrksGBW9fk7rMzM",
  "key8": "5ZYy8ZVwQGqXPkg9UYuydsUBJiNHq7ZPc8Rh2JsZ7LKXR7419AVAF9TF4fswh6drc9WYTJG9AfGjoUezoqFfGECu",
  "key9": "2U6wa8iggQ6qTCfRrUXeSnNo8pfWYMSJWdx5f2JD1G8iq4G3mprSpV89od62BhQSMgK9Ufj9Ub9LhUMDCTpjXWTf",
  "key10": "5M27PeAyQJjThyA8C7gtf9ddgSWaHVnn8AiKEKxr2UH9REYmgQYPVF5XCFdCv3cY6iaKYTiDiq8aNAW31Jgx3icz",
  "key11": "3EuNrjYA5o9YuAvZsFUmMQHjbwnyCbdhfbcXfmc86BLTjbecgjbua3DcSEfTVgFRE8hAa2uUpHVKAqF3EbxL79M7",
  "key12": "3GV35o7cQUnXHxCfwJADxLUyQqP8EviVALxNawoU7hHseuw137YpYfq3sYZsAhjrLtLC3FbfRc4wFi8zuTvRgCfi",
  "key13": "kPQjq7YkihjsubDqNQeKYv7ZTPfN81EWh2tqNakdXa5SDd8zHndVses99fP3JdAcjXzLuPpXeHWeHvph5MzYfFA",
  "key14": "Ry4n5DQh9ccwyxeuidf5zTycoDjWLmw3Q32LZshRVWXffiJxmZhQKUuV5y8hCPHNSSXG12n1z3bL2dryMSuL1M8",
  "key15": "LFcatLGY7ywjSrDqXgkC7wCd9rMVS2yTHoo8K8HvUPe4SqMsssHvUmmDD36NxS2gsTV917Nc2oV3QQEYPP33aqi",
  "key16": "Ebo2U3eJnrXTLwta7h1xsN5KxnCn74gM1d4MgXsKXC1prnQ8Rv3DuMtYRkLxShSM9YVsE3NDgLG8E9ns2LWRQ2K",
  "key17": "c5SN1ZGmGK9S6sWyWot78tgJKHEL5192VtmZhbphWL9hmxpFgSLTVPSyrCVXPXUp3RG9nr2x9gqRe74dQGDhhsi",
  "key18": "hsrWLR3hC6tK5UPvFNSkYSU3SsjwfTzHdF7va3eqdaCiogd7P7t2o7719fUrdsqSg9CzU8ABQtBssELxtsnwA1k",
  "key19": "3un1BAZSRa7iDQXCRX2yxBJYo24tjZyiGau1D4dPuexyf6hcs4PzWpjg4zjEWASLHBnTtSdSQ4snKSH1QewgfkQd",
  "key20": "2RognVftaj6ALq6LU8LqyZa1M46GK2CUa4csLAdbzjshva7e7tJ1MhennjN68GdRCAUrK1KWmr1T59TEifGC6xaK",
  "key21": "5uwi5Qgb5ZoV7v4Ji8HUWBdoHetunuGtJmiRdzQTkjY5LKthFiMjxYZMoxDM3dKHo3hytE2yxAhW9TM99riqPDxL",
  "key22": "Em1hxfpguDSpEdh5EsobkXieorjLMzzDuicuynhWb11iyKcgeQpYQ3Yf2bu4RJPoaiLw53f7DBcQYCptugJiKaA",
  "key23": "2jWxtwV55GJP79m9BtkWYCqbmAcoLBdZqw8D7kazoQMWqWJddA4Fxj7Jwcsgg3u8o9EJVWAwhGhUYFzDEjq4nxiq",
  "key24": "PQSNeCAWwtrHze6m4zuunadRAT9K9Wt91m76R3EjGpcjWEVw1do67KtBkVm6MUgeD8eRT6zTNqmNWu8kmystdD4",
  "key25": "5Mqveb8xymTbipoWPHM48rJJutBh2TvgiJEmtHTA3bVts9c1LxbNi6wJWG5SqNobR98jATq1MVKGBr7qFQGPU96B",
  "key26": "2Z7sjVCeRRuvy1rvQfcZdPi1Au8v8icdf8S8Ej66qovwdx829XUKW7MQbysJBFCnxSi3jTL8VscdRsrPHsKefkpF",
  "key27": "3p58SHMxmuXhi8tzmEkrS4AoUu2jGa7XEeA3pAKdZS8tMUUvq64LpVuAQZFNtruyrwTLfzXZDPqcKHfQvamptq9V"
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
