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
    "2btUogUrK3nXzxqJhum1jgm3ijwqgcc6Zvf6h2pwsUXqvtJ37RajFq9LhaGDLvZC13jhLVbqCScobVjKumTBKj15"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bL6heZa15NoCAVGXJscY3U3iQq8yunyormTpX2b5nctbieDPFdqSKK2HzphdD5XpuZQjTWUADucuMPZgDm3yfJY",
  "key1": "5qc2N6VyyBFQfFhPsJAfLVu16hxVDR9YQrGQkhumzeW862YJHifAvzni3vYKuRV4LdLjLbP8yaZTKEqq8geiTXzR",
  "key2": "3iZCw4iarQGC53UZcUqgyNECNmLDWWJ54bY1gprWvqpkU3RbLjgNeWRD6uhuGVbDEamKcSRtUkkPzY5sem5zb5hh",
  "key3": "4tDyRPZRUugXHSgTPTNamorgztfNSj6EqkK7vVGdSUwePq7MnBqAfsXFdekABqfsoCYbEi5VtkfWC9BQRRaJj5qw",
  "key4": "4X93nYckWxDXjpph313n91AzEbDGmqq5KbwANx8WabeyLW3QeTb3txm15giidbbN5rEjUKJQfun2DxNRNDq1x1Gr",
  "key5": "5iAUm9X9hFXBb1oiA1hpYd5XHdCJkvG2EN82ACw9oY6f1owWVQkUZAUvYo92F3VGi7kgtW4kb7vTHvyjcs5cP7Dn",
  "key6": "5GdcW3waRStkgbDjgMAbACwqyCnEVkaEivAi5ckteqP8AGDYWQ5K8Y9fHHdJKxxcyouHbkLSL4JGzS4jPSF68noB",
  "key7": "w3ehWqoG9kxc5CGNkjNm5y8Gzo7XjdtYcJhj9nvUSYUzouQGfbfAkfCdqhqNz65P9U9jX9qiCiqEKFGxhzPJbSx",
  "key8": "3FgdnRN7eAhKV63gbgn2dUwYUUE53WWBLC9ehidmuVGRWZibwzP4ij7QphM2PQ5sQr15okdFi4eKkxLJPSD817S2",
  "key9": "2NZmB5Ac8gZRTUR6Jj2N1LapNzNkVTN1QqzQfDVo44MnzUVdowTGpVuAoHXTd2ideMQMfbEenzqXPmnbh6VnzZXN",
  "key10": "MbRMGDHLQH7XNosyoTcgpZrPKus6W5Zf6CeWmDMqyCQf33PbZAMeru1MGDQZb51gwcrJsDET646JfqNSoUFPzPT",
  "key11": "4g8VEtkTbDLQCd4v8SbBttB3Zze1zur4ezVTNVUc7rhTSk3XsWpVeDEah68eNmfwAnMrMwDrZRNYHLwpiWfyxSHk",
  "key12": "2EddAaQkaxktVK4z1aXgo6iJ2fhpqEEjZ24XW81bn9xHFafdkTRGWgTHNByAxcTRyAY2r3hpRboNR4JdgDwgZpCN",
  "key13": "3qSBVGRG6uktZM8CXoLpESjhLUipz7wH29FiVzqJpP1zRYq6GZcnXGPQmRSy1TNepms4WL2hgg4sHwZou6WWPzuW",
  "key14": "QFtp3RJmV17jJgDMmz6zusXxJn7GRnqZpmNngDS7d5HCPaXsnzg2LFifkNKcCJSEJDFgaYzXxTsNfGGc9rQFCfr",
  "key15": "3P3bmNYJL42E4gCpUMQP7RfuJAF2DB6fnePq6cNpPpmM1nrNC8AffhwcuFJzSP71N9pqBgun5ApyCri2NS8K114e",
  "key16": "2CzVtdEkPWAfJTKwttrVhqBVjcTGv51fyQDMv6RWLungajxzvDbqNxgGgtkGDqPtaDWteidX5oQ2aVFJgnyJQePn",
  "key17": "2UYcrVdNncL3TwcZo1jR43djgVfWD7pUnedqjbRGHNqqQnnYxRsHB1sLBCk64PDhDHm6bmLb8jRQkhsvc1hmsXRH",
  "key18": "2xBrLweRCiRoHM2gUJoio5YiSktfaTZrmTHtdK7kvsjbsQPxnhu7ZadzdHevoWGiVUiXUZoGdn3e4Ci8n3tsPB6W",
  "key19": "2bhCvshkRApizyCxMKveFiSby2BXJqXn3UbJf5ZyjZqwJoxy9GuU2s1QoBazXgQBGqcNsxrwsp7fgHk35X9y5sK",
  "key20": "3zTeEzCwdo75CB81gbwZJwxfnZczqEPD8enUm5a6dARRdL9Nj7sSM6DHBhdL6Ugn5zjJLMsdZm9kz7mCPdZRVMhU",
  "key21": "5Xix7bbtX5ka2m5MtrCU7yDtsx99eJiXRKc3zHUki47RhNGLbDxuCMMGQgRxDaVsLQPN4Ghw8GFrCrYvw5ChCvSj",
  "key22": "5KxfgGfgyw26FBeSHXuzfy3ofr6mVLk72tnN6ymUinkwk5BQ3d9Q2StCSCeCoaaSMXk7vVgy8ZxGg5wWtgMTzpVD",
  "key23": "3DuR5vUwpLoSjZ6ccR8bMGqPBZC8A4ppVU5W5TFwNoQQwfaXT816qeZow4kQ18dJu62HDEtAxfkg8r1it558njwD",
  "key24": "24Xr6v6uUULjBccdyPosuePqwCQuXtRfVe4wN9cnt5CZccx6GCf9mQnMB537EMUsEYFHqVpnRFYZm2DNcQ8FmXgp",
  "key25": "4kJQBRUcPdfQ1pLAjZ559cmi9dRuKefjePnVHKWKJtLfcCkwou1QY8kvsPVdGJMi25LM3VDk8zjKRjJWsFKeNznw",
  "key26": "2gkNcHkUvQxpaBbbKmVAKyz7gduokZP6iLR1KhQU8kGgwUvY5TS2a7w7KQNYAZNBgwTVkqFRGqHsWas4mLhDmNsK",
  "key27": "4LUfakQJRcw52cs3AEDWiqb6neY4sVjN9PuAgdLSEbgE9TUJ6apCye4v4mYAFT7oAcPMJ4MU4BPz1fKQLR7FwiiV",
  "key28": "4NPF7sYgaLzAJdVSTopT5Uqyb7mV71HSpqMh2gY4iBT5vfk83NvcKTkfNVX4MeMnxVXNhkMfh9dvizU54WVSz13L",
  "key29": "3pFy4wS5Uoco5X752881ASDkXwDnbk5TrdjXCQTSQ4Y4NSWwjWASY5aUKPA23rhYzgD6gBaG6hjTPUZmP1KFpZaL",
  "key30": "2wZFUASEafkgCEeuzU44Lkmo6uQpSucYUF1gpRrNFdMiASZJQ4B4qBcDJNSWVp5nmLQNFZKz9EiA79uxytUU3DL4",
  "key31": "4aJVgCYuA73tfWUvqdHaTggjKGWnoGyjrf3fbn9yWmgWeSBe4AGtEa14nBexPXm8Scvx7vaFZDzxmHQr8CdtmxjZ",
  "key32": "2TXAj9yChswdjvnFZ9whdiTFDLTEJCCa9sHqnnU7zEUeoTAt9fgi961inmyLbhs1pDRvqwFu7dqNkmAHEMzrH2ix",
  "key33": "2ZeC3rUNdUZp99RvUrvxutwPR8kw4tAf8kdKHmo9FM8Lnx1k1QNKHjj8YUefYsqR3Kvy4YfAwS4132YWRyRNuBSt",
  "key34": "65pnJE1ynxv7d9mxRtrjbeVkvnxQEeiwABXqdEjqimGwu98gLvL2yr1MyQqEUvPhKoftsDfFoze3Rwzw5z5hgi7A",
  "key35": "3xE2PeLQg5EHtHd4EdUqRkSMMBKiREjTxTqoVVTxbUradg3UgGZM67Y3VvpYXYgJskRvU3Eca88paS9v2pPymgfQ",
  "key36": "3rRYe3FZtWoEYWdr1yodLcqx1SX1R9ud6GMnK52K1XkntTWDXLMtWShe4Y4UV1hRrcTEEWC24xG5HSeFE8S8dAtg",
  "key37": "BxvDpX3YAMikbqkQeU9gAZ7fQkUWuVsiaBrp3HxX9fy673S39KnkuvEjEY9aqxJPQBycG6WiC1WuSpT2ox3PbBU",
  "key38": "56rtwmw2jJNKxbbNC9GJenGorvihKUeR8wfkbhhg7XDVwmTWK7uWBCM6vqjRogbTZrvDgZwXbHAVFmMfqCgo8fHv",
  "key39": "3oL1BAsZmSi9NM1yttEubiNHeMk1SeUCRY7VgRZeRmy5LERjZuDhCQysRXYShKmPyM7YaHwVzD5sxrbMXPkU7zwf",
  "key40": "4xec1bz4mUuz4ibR1tvuSo4HAdL8uiia8KQxFSZGXWj4hLCoh45db3wgeGCb6vxrx8h5J4AwPHhtqspgUPDevtL4",
  "key41": "5VBzpgFdopYfnH5xui4njNPzfF85tj943AbaMtTXSZVRUDvPjfTt8bJdP8cen9DNXPDmsGudDA8xLXxdSR9Rssex"
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
