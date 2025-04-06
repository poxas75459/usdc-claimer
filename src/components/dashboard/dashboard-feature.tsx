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
    "2QPxCMueWDWZhFeCzMXNeY6QVq2NGkK6u9fqqLbHnWU9FMQAQPhPVase3cBr45EhrJeBSefFvYP9vbbfQz3x16e5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C21NVbY5q8VDQ9YkKvZW5rKnVs5jbKUHRdszxYynQ8JDn1M5GpobS2hT5gqNL9dMhGs2rgUxR6BKiFV4iGJWR1u",
  "key1": "orC2jBELtS75o493ULL4drrLAWoUa7eSd6Bw81hBvvjhcpHUWEUd734oRJvkEYSR6xaUyXXcEWwoCXovPQ243Xp",
  "key2": "3F5NHQjrVNm45xXN96sHLndrzmcfS9yqoaYYc8FtY6AcqUjwPCD95NsW6Y1MsDqSf92QgqhU8Ctt6RSdRPsby2o8",
  "key3": "49jyA7QmCHy6PvJmsubG46vWRAmvr8dFNk29xWuzREDFeHxobp5UFbbnzMLJCmJ2EBo9QuxE2kAEAR8YuQsh91Dc",
  "key4": "2WnyVNdMxrotYZMxMeEaTLJomEJm5Pbq9mCtzyfDojFF4KX7EnF3YzAUFaAkqsNZ4zyDmf7QUGxyeAGc2yLpZLFo",
  "key5": "5urVMWBKHVEgHdvCCQN5Vj9UyXerKPDxiN171xkTnpRFvBD3Zjjvek5JXyZxD3kJHfqavZGoaoEyCo6bRYnorVAZ",
  "key6": "AKmTTMmsZdSt2mkmdk3WPc548j7ZiLobdHPdhLrwftsVntoUxDMnHxTJPUgnfofpUiywWsHkbuykaadexGosfV4",
  "key7": "PSEQwL2TYcwasWaLnEDpqkpXYLcqZNG5ALhPvRVy84wnKRmsdNAmBAYya19XUQ1F6LUbKXYKBs9FyvffyhNWhWJ",
  "key8": "xR1Q1MrzTr1JiFp2EqLUHjzYCgS6qi41LAGFhpXEDqE7sxZDWnxgGgyv5xLvi6S39BSAKWxFSmi1B22qUPQnE1G",
  "key9": "3GbAB2TGUx9VXHyj4ym4w54tPsRYDqfEvQoriq8qs44LgW78xuz7BDfRJdrddJKgyuJNJuPj1AgBuQx6JM8TEXfK",
  "key10": "4sK7t4Jw52LGFHqAc1xyKWxz4pH5rVdLrR4FhpaGH4BFAtoCfRgQqi97mh6ZaprKRVXfpNddL4xFaKwBbx8d39vg",
  "key11": "5QEXC51YfZzCzBKYnktxq5xAEfWRE1r4Tyv2PVbdgBQvfxP1anUW2unEBgHvPkr3TbirM6Yi7r18mihdtdj4PhXf",
  "key12": "66F8aUhRL3zeFgtU2Yb4uEnqwSVDLAKJmY2hyfnj1jYKtN59nv85Tc8QYyWM5jfSk1KS7XbNPEE6GWgrKeiiUkXE",
  "key13": "3YGCh2cLfZ3tpk4E9ER2FGGCVKSZxCHDBDUFWQSVPpZzYQ4ziw45RoKYFdqPScuCa5RfyJjjATmXKiQ2cq4eyW1Z",
  "key14": "2m7v5WU2vU9Scm7dQQWVexSgu9twfuYbPnPNFeYHXVEAXmVbukRRMM9THXxVsm3tZaRV19qBT4VDLU7NBgJsrCxw",
  "key15": "3rsHJj8xNub6qqGDuytXkE6Y2PMR5Nzr5tbjVh41gRoZ3wmyh4o9jEfbRLhSsGdSLRowBLnZip38ma9AXYaKLgHP",
  "key16": "y8zS1fmdMdZFPDWahuMfk8ZZiyLv5bH3ar2Q4yvtjX2KmMDWaZix6Bkp4CmJMS4rb4SEuv1snTsbNKpybATXBPY",
  "key17": "3Z9PybdtwLNTx3AbKTt2U7iFEgyA6qvFaD1nZHkySEebbi7rHb6iSka1f6F8jBZyhpb8fXKkKsidt3grmSoxZ1t",
  "key18": "5RkLsaeDQRsw7XVy3Ak27vQBrbBLiLjiWCfapsznLu33HAsRhizW5Mz9Z3Fj5bqLzSs8EyqBiVzuBo3B3D5FoUyP",
  "key19": "4jA5rB3NSxih4f6ssA6ART4R34yG89gQZfTk8U4R2jekGDTsWP8yW8GmaaQ9iUxTm3dwGjhvq3nFj3AyTYKQzdfH",
  "key20": "PFT4xuSv1jhU2RLvH3WNojY6GHmoaEJSbu1ysPR4QhDmo5sRRJAfdnu4c1KEonT47oXJtC1xCMCpAcEVCTdw7Eo",
  "key21": "29PsZfcUxPKnLBSmgge2KAne626NV572QU7H7Vx6KB7GxN4veC2J52ThLDtmwS8RVdzCWWvdQvArpPxvACLS5dak",
  "key22": "43hUK5akRubjxFmo2JER5d3bwkFnL4vv9KcRBRnhEhmRW7V2AdC5yxvGQj5KTfa9sQKqyyiG49b38V4FEdMMc6Cf",
  "key23": "473yu9FiyNSRGdNHN6ieJEQAHRYkcsm7isyBDmQLCEQbu6mzjavgyWWA2iWYWrPeEfanwBbC6KioiA6NqhLBr8in",
  "key24": "4toCY9cxYBo8YdPASaAmU5oabKNztw3A3grDdjYnHA8dGRgvFhAvh8bkjQg86RStbECBaadwmXpxDykGAiyS9dVd",
  "key25": "5wE3R7bryuPrFGwYwtd53RTjDcBV8DAPgEG7FE2Zps2q3YaH2LhN5xJpNcCZuJm17qhg9bpTdJ2KaEkYuQjbwV6B",
  "key26": "5wPBH48cLP6Jv4vgC5aQh3NctjrmhH6eeEDpNUpvewY5RyJZDyPMJDhdvrwwFSYwzYyrpgtYijUA4x7Um1nMs8a3",
  "key27": "2PoYRz21FnbSzWhvFgwQQVDnbZVMFfbUz27yuJjADaNLvCWmnomqrKsNwK6jCpvqM7Y6nzrqfTRnkxUdncNc1S8E",
  "key28": "5WxDCk4TGWjk2NAftA3c3SoKxGzF1kGVGFmrGN8yxv7APnhqEHAADbdUR1WE6uG1TWa397EvWwDFBnZGvvxz5Lw7",
  "key29": "syYMiUBVJ7XBLCwDHGB8WmJ2dr1D3tdMgF24sN3wHB2MmzFMFt2BdT5Z1gzrFr578ssEMcYAKiz3gFiSbKKET2r",
  "key30": "27F7DfFA6EDZH7hP3rfitbDTs8RF3ENVesRQfLRBFBPogCJkwZsmf62su2VKD3WcRsNEiH4vNF9DfKBfQsAYqRPM",
  "key31": "61MNL5tC3rFu9hdd6JWiSsK7FCrTQv7d5CeMbUEmHnWArv2J7sVNiSm6Qs9p8WPen96bCJCZd378MhWVVfepXQ1t",
  "key32": "33FmEdbcjjuWKLwXXyHNoZEs5UJ8FArzKJBUhPY8rhQ7kjqTFvXonBPZSTwnq8bL6kkeocroU8DZRoGRN18ieRvw",
  "key33": "2DjAyHXEjRDUcPmgeqjTVnWUaYwjM8tDGennuoLRHBFGd3t7Jn7DHVCWpNXpHyWrWQU67YrR5ymcxPm1YAaxhpPk",
  "key34": "2C8qWwRT26kfE86SVv13JuBn3zREQBpsqJVgm3L2VWH3A6x1nCph7e4cFRQwUccCFcxuAjffcQGKuji6bZH1qiht",
  "key35": "QUyzfSDAhCHTQQPaLcYHxn7jz8q7xofLCrMjAxe6v57j5aqo9GBwyqiGhM6pzj8tv1jryTaDXD1ek2NnQHBiNmh",
  "key36": "3XkxqYJunPdYHk523ntwtM8CAEPwT2SuatqeXKMkcp47d9ZLNYAGWavpvUQR9zAfD3wT96AGuXvNCvjhKaL2hJQu",
  "key37": "5kmbLz3fpKvYweVZ6qMVHM3ESqV7VumKgcoRR2i4D1ZPTGGh6Ncw4A2pR2rN94iBd4XhvQ8csaghBQ74DzgA6TM3",
  "key38": "2H1GB853KBv6nXbm7v3at73kgXHFEoGY1n25e1hQQm5JGYEpvxZMjp4EiQeWaSBu3KBwxWfZsDKdApfRiLYCvkdA",
  "key39": "3go6X8wp5K8Lv15DduPRNcbUvMdukfxfiSyqx6eur8DjQF3MDNbSasNmabmAQFLsRJhHDnAJDxMLd55iW8BSEhgR",
  "key40": "516NmmmNBicm5QygGDXsA7KGowXbMGgjy5BNaKFZuzM2wYQR8nN8qJEh7NKeUtoed8HrJHh8gLCURYZQgpmskdTh",
  "key41": "5r1FNPKgWt6nEGPwdodJJjTfzZVkLXQq4Xe1XCYdZdbdUG9hQrsEivQpv1EmoMcFL9ck4iq13SpFWeZ1kFeignec",
  "key42": "2rC9CxmS5uxB9DuUnVC7sqhJMXGDLbaSxaBmxFHzoGBYTjgk3cZaF1CbJyHAunWcWYhzKtrp19VcKvNWwaB3TXhD",
  "key43": "4C91huzPghiYa3wZ9uFBrv6xU2qnio6qn8bHEwyBVfSdvgDAw7uYRDeqh5W5ZpuPdTJKa7qpzXiqkeEmXgoEMbcJ",
  "key44": "36F1hiRCHf9238gHvdD73vSiFcNuJfDqYifVxWiCYm8t1e86fd2eo7D9sezgoBdBTRRcF8NXuvAzqack2U6hsd7p"
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
