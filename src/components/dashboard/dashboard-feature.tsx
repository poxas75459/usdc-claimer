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
    "2xzjtTTm9Rn9m2EFQUNbPzKXFcEsp8bziNPJ5766GEHc6Lmdj2AtosCeXysBQnzRbxk3T1KXjS4DEnrBJbiCqr9m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GyXMiZNWKE4T53yYqZVdQQRW2cYXDpDgoJmrUZKZTYUh34modRkyzAaHmW51g8oyUxqpBbpf3XQcADdb9NiEVMk",
  "key1": "2iNNLMYAYDp2QR68bqKF2t8wNGCtU5GxYSYb1DdcUadUD6X53UMznrRfXJnhVW3ereLuDnkQ3MxtoupcRpEZ4Cid",
  "key2": "35c1CRQaxDmUV8yjLfUZ4BPrzRGEXr9hb2zHqRNhw7M8Mz51yPBaJZV34ChxFuvVBb7aFoXFEMtukJGCJ8MzwCqu",
  "key3": "4KP8oLZDU2fG3gT2CdbDvHimSgDKWT25zLBGh3xBo2BhmVhdxhPXYBuxtZo9rEyvnsnnbTrKX9Cpe8MWdRbBnnCp",
  "key4": "4EL5mVpNNYejRx1H6NTFfZrJc4gL55dBqSRJCXXKiq4HACXTJ1nwdkKaChVSZP3VksmJ2QTRASBfJ6kuws9jg4qK",
  "key5": "47CoeaAB3v8ziuvxBCt3CSN2uRmzFvYRUgaMSfBdVwGw2V19pt5VdUdUNpjU5GcK6ZBRcUtG9RB29GFJsZraSay7",
  "key6": "5maB6irCbpAmGVGnD55apRKbMC4YBLN97YhdiYT3rA4rVKBHMuLeWeSSU1HngrhWJJHATM2rERGHAsq3LRHfwxza",
  "key7": "yHbemqSzKTYueTmKg19fYktbFRRcQUD2sTYSBUGTNsFK1Fgp5Ph584aqAtMhw8swuRMsCqzCdBbY9pMaXsHV67z",
  "key8": "5xQsWZZRDLQerPHEDdp5earr8HetAqRccT4LFNP3bbBWjbTuABJZ2RRKSCRaaYkb9dgvgzwnE8dd67bj7WEiwSBW",
  "key9": "8AakNXg9XghUzHoTDVYRwVyBMnowCnt8SXSGtvYT4ATJTberaZuUoEtV8yNKG6PoGfqRG9qtAQp75ZG7HbkvWLr",
  "key10": "5UR3dL7wGoMJiB36Kc1QwMT61FSzeTkkhiUNNbgo3DrFPdkuT5J2f4VSeJBYSnNRbFhAnp7uRDc1qBsxuwjxFhCc",
  "key11": "4EZvjL7dPykLii6sx1MRVLS3ZCSsemwPLiUc9N2eHcfCRzK7HeoLoeNF3PjtrghShMynzhpry2GB8kkfVvkCKQJz",
  "key12": "5qZWyoTR711SUpqbMKmfiSQVg6NJ1wofgodGYez3hNKUagan84WRhGpSwfnv4bcUBhjNKPXcxytPJRhsxWLU3JvP",
  "key13": "R4RLzMykn6yHfDuaiJ9dwup8XsKFpFgX6HEY2WeP6QTQzYhhXfTwDpzDfHeLABkh9LWEhMRSJG3K58GXfnsaQJ8",
  "key14": "2q8eX2Qq9QsqqKjao6WSiFSY7FAwzGpT6fMWWjHkRxLtFH7vxUQcbrgdUevQZ3LVoNL3u4hFmrFZSRJvz6BSM5tf",
  "key15": "LRTbZ5fRtjFoNaTvVQuhZCRrvVbfpx7jEGKFKwynEAqZRFJZvDhCRS5XhtXidUfVZ2kKEFNZD475zXpCDHVbGKq",
  "key16": "2yC4oRM62pWWoXWaQ6hRnXtDdDofYSTc8nS6cE1KkpJCeQ93rVMZamqnphditrchA8P5hNpEWcuX6mnVmt9UgDF4",
  "key17": "DQ5rBSJH4v7YUiaAxxgr3KSnudLpgHyXLkejyXamLHdWNbXNekcBKhPah1KNCiUdwPvo7FY7xjxuKJHnoDx5gHb",
  "key18": "6377PWvJq6f88PtUDnMTVrMWsdHA9nH6UyN51rHXpMSAJG31zZDaY68iwbzo4AFGkVLd2HXkths1QZZeQShU3uBd",
  "key19": "Zeo53eHi4ZX5aPwRSvVAgtxAKT2RNVqFMBvVVn2NvZNpEkizCiVzon6r6Z2e9TEEJ1AFdNwuo5no9UH1RxqdYQk",
  "key20": "qeUaCKJDy7REWDQ1GTxmAHMbBqkvjXHBXpemN89AW5Wb7mFLhrptaeZbhfAxm3t7y8BCoUzLKF6ostoEWT4JAFX",
  "key21": "3DiX5UXxU845MEinQ1vjae7jwr8YUv8yb43gEu7mWbyHYed6WHHF6fkgWZuRqXA3Yj9a78WTX9JZPApfXTh3QaWY",
  "key22": "5xRoTzqiFmacqR16wDE93dpNxB62dfVWMDBEDnBA1kCLhdr6ErD5ViGKj81SrLPMZWsW5rLJL4mDHuCyCy9M8Et4",
  "key23": "37Xy3hEWwDrKz2Jpgw8frTbMdYHk5yra5QGcNT3pVcGmVrVwbrANB3znnxVCNfXEPpWrvnqi7rR9aJAzm1wo87W5",
  "key24": "2z5WjeKpNn6p7LCHVusmhUtCY1nyy3qVW8kUwgHwwSqtdyWvKNtXxqeSevQHzjWttgE8rEBU5Q9WzzacohfgrAk3",
  "key25": "5ajyBTATiKH8vTBUTajKiMekWBexRMYttTXMXYdcjXMuZvTwJXgWPcFN9i6WzcBTDMTGPT71fQnumKAUUW2c5PPw",
  "key26": "U7ARKWGmJAzpNWXqLoUJza2BdsJCtaqqVJXFpohDjXg1hht72NDuqucQyDKaMtW4CpxbFPYErFKCLygV8KHGST9",
  "key27": "57KHpVQ6iWHSc4Nsr7kjfq7DXMDG3xsv5xGPUGmzjR6d1g3HtZ89fJ1jbgFhGFmVvLbsDtSb3BA2X1YV4g76EEB8",
  "key28": "3k2WV5bxWKHdAvYst6dwGFQHPD5XAP6wGTejyTmkWoh4ybtF7t3RYatfkkVyDqkuvGfdEBC4CuGfWLNfZ1KMasts",
  "key29": "3MzCxGtGtChYFAhxKnbrHDXc9w3tfgEzSmQsJhFSCotfUow9So8h8rgnVTy8QY2R9PwFJShxRT86j8LomJ816KxM",
  "key30": "3Q92iSfxfwCdp5NxPjdY7GnF88iFyZBEZo23t6GCpHkepn4zLnnv9p139Qb8ca17dJ8wtkrrsLHxjDj9JY2QQTVw",
  "key31": "5XZ4rkpRbSQUScEYRgNFZZB1GrjZWLB6vJw5yyooutY6fYsEQBuEr6VGHtjLHgurMYAgT9PYrbaiVuLhsfZQ4NQh",
  "key32": "4Ac6Sx3rJs5Za8Ea56hS2zpPysGW4m6dz52k1tsVgwwax2TPq2U5WXKAZeceMyCKahfyP5BYcudJELRDfGDuyx12",
  "key33": "29rQf8iDkWnDvrUfJwsuSJM5SRTv823pudxw6SyVywh4aTND2Wb5nwj6FQMVmV3Byzotkqxf4MHsXUWUreDuy3kD"
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
