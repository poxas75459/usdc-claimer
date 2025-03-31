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
    "41B21rKBKc2UHETWuNGbe7CLLKFazpzjrpTSMS8gd8diw2NnEwSQwdP47phd2uxUe3Qt5YcgpCdEhWiCoaRehsN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qcAaJwy71diT3S5w5QsWBkh5WckBRorpsAiJyYTTbQJfT4vxKx2ZPVS76ZkfiDuA4Q4J2TYGEbzbzeTSLBSRZJ2",
  "key1": "3rvb2VzdNxt2e3auAP3JMfiNjJ81uvgFkwfZPr1C1FK8hMBawe2avWopfxwvtVtXb385RiT2SxQ39wa9tUi2wrmz",
  "key2": "2ZWEVF5szeSu4PyHcwAVKSwG36hSynWWaN9h3rTg9BQbLJsb4ca7uN8ftn3XVStXvVKeVYBwrXqvGdFe1BYpZj3L",
  "key3": "YgxJQz2e6g6nQkrv2w2VvLPcvA7ZU6yE8Vh5a7Sw3BnMeDYJV9YhZkfNB2qe4nzR29Gc12adKHicQ31L88twS8N",
  "key4": "4kmAQfHRePb1j1LTqqV9nnfV3F5rQKmmXxAF7AGN6GghqbsJYkSDHk44oULR5fAhtgpKYamkmyksXzwewyt3sZyz",
  "key5": "5QevFeJg7sCevgWTyFqj5kLG2hnpHrYxN4kpPnkwCMDGRq48vicCgvXw7oaXqkhqcytVsQhEA2W3wPJewyZ7ZvL7",
  "key6": "3LGFuFd9FXb4wL9qfFfFrxpsx9u3Cy9cP8qsD8Z89dZLhdnjU2bXgsfByvbNaMCjP3G5kpHxFkeGmYb4rgZJjiq1",
  "key7": "3Nb4S7pZHdEAVX1p5FdXvstca6dS2Rhv6iuiwiKbKfV4nHDrbAztaTfufrfRQEUtq5dxrTrvPc9DjHexWVKCtWqy",
  "key8": "4MUQxFCtJxhSd5AHUc34DmhiDa5qq1eYMBvfscbMQcTnVqT6LrpUAXu4RHfDroQ3Z2aGaKujmdyndfQF1FrhXNYt",
  "key9": "5bDdDCgMo3WsGP3ZAUDGza3Wj8Vcvrj6CWNX5DbFyqyTfDRKRwLrkTeKzKEyuwaXNsfmyBqs476bSRcggtzKLmyv",
  "key10": "WHCovHBawFF681fHv1WwaeHCfhU7MGqGxkKc5J6Cwt8ZaaTymmaZcJwUd41SuphSJtwk7Dc91xS5yHr1d3fNT3r",
  "key11": "2L337K3MVAjkhZzktR6c88mQgKuEXYLmRxgfJAkQwJhAmdz67YJG8B4yMEXay22NUbyg1qT9qFzLJEQNroHRN36u",
  "key12": "2KPR18BQwaRpVPULrxfv31sGTcP5Nqet94Vm2Kx9qpD8xuppqPJ4KQVFLaeT9aGzmZtPVxxMLXofEbRCZZsqfVkG",
  "key13": "3oiDRzRkqp6jYtjCW1C3UirBqrAHLjR4R7s89TyRCgu9vcxVQjXjCfhoZQNLP6LL7LuLkUEpLxp39rvFS6Ck45nW",
  "key14": "5t1cZfd62mkKfvDT45CFswzBKXGP289DD9EaLYzmydn4MEWCdbQm7wdgUBRww48ZN8nY9r6HyNHNf19YfohkHn8R",
  "key15": "2Jjx9CNwuBBxPN8oLDixaVQdsZK1wEvm7P8BzxXfqegN7x4SKpQSj2XFr67geD2CkWRJA6vbSjHE994CiZm5YodZ",
  "key16": "4kvZCWjBTREAen26wApuvbLfVX9WesXv1RJ7ATNdFiLNGkxYrQkJBV2uZSNvugHuhZvXB99RijbZYwcdhNAgVQEi",
  "key17": "4MVq9yF2gEen21gfMEocAzdCsPqMuUmWZBSuL1omzs9qgS4GrftBh1b8bYbKbLgCJRpCZoEY2imP8bCQAWY2LqVu",
  "key18": "3UXx2kfgfGBe4TyHUM2s45gaEYHDkFPu86WBp4HgBGmAxXtLRDmtvDKNCGbSvBij4wgQmTdiuhsTcjMeCqQrBvm3",
  "key19": "2X74xtdPerZKBPjn6u6tpaJ2ri6wW4fAN2EVoR3tPKKGiYozummWDLq2WPX9QhT43HjG4zG2crhbqfsbtkSvcbcG",
  "key20": "UgnyApcrTv9Q1XsLc1CWE1NPPUzVamj4XDJotXKoqPUGqcECQojt7D9w3Msxe2kzCQZMNAJdZb6HRADzEcRoCVV",
  "key21": "2Qz3DBBvwG6svkB4d5Ux7QWw8w2tBXsPnPup32i1J6fVDSy7wNfVE8xwbNNBnehYp6TeyWdsMPkEueY3LfywDag6",
  "key22": "2NiqvcDzBw63ftvKm2jc226TAs3khJSaKKdZwsmdtEQejudHNgsLocNuwRnhWvNBsyEJD9FASMtqZhF7nbTTvd9W",
  "key23": "xhHmZuG2uXYgZdduYtiWmRqf5ff7MEXrKKvfrJMFWDQDfx9yK1PmSiGQ1FGBNwHMmeirLDhExtnvgkTTtmQg4zm",
  "key24": "5LWK9gVyVjatmUmLN3yrfHz4jDooStsHXvgWFMe6y9Z4Kt7r9Dztp6pVvMWg4E6d4h2UDuoqieuz3sLuTJEtEeKQ",
  "key25": "3aX7GHgMUSwDFCedkrnsyyACuty4hyVwWRF4ME2pU8Phq5Ly3zBRU1mq9y87xNPdmqqRhBxSXZikdQHeKXw1YYfW",
  "key26": "27AXmZtT5KrG73SsqESjCbymAL6w5TdFkcgiYdHUsHPrY9SHWemxFXYU3wbVBFBuY136mb1btuSaPbEkG5Gi1hZm",
  "key27": "2FJNww7P52QRPTMu39qMRhYoCbFEkGAg63doueRyEzMQ441MZWmPtNZWeSGafssk8me58rzo7BdZtzGTqHWGerp2",
  "key28": "3qGAxTq7wB3fZUW48QbjrTyPv2VQrCJitFpqsHtd8iWJjMhwrBVux3i8XdZTjFWbrx4xvkAzDDXrZq9nCcWTxwVt",
  "key29": "5iVo5n5c7sNuKwWSJLcyZCSFQ2KdMUERYWCtwBBST1R6zKT1aDnPPmgQiPduE3jiBoHgVKNwDDxBw5yremdpA2Ej",
  "key30": "2LsKoyAhZsAEWJvRRNHoeX7MvJT2oBYhfoacvzWD2u9mPt435Sm9JwufsRDb7rF1qVpzDjBHDVoZGJ7jggGpSZL1",
  "key31": "5U9GEMuEy7V4eZ8U63UPVVgHf6LvcuPZPoRHrPaBi8DCut2QhMHKY45tk98osgVJcGeynHv7EUfMJ4EniTG9QNxp",
  "key32": "65bkddY96phaG5FuAfhQB1QShutSbHLXmogGAysHnhgBZVa9VZRgbDUS2oMqkTSpLnneRC3uD5NMoE5svWShAsw5",
  "key33": "5tNDr9DznrgwK8LpEQ8AG67knXPZ9FQg3iqP9QBb5JMRqRTDgwcXQSUzesfW6Quqjz4xUo8rvxK433BctFGZmZZB",
  "key34": "4Yynh73Ax3DfazJhgy5EWRJ1bhUC8R3tSduu2Cig7Mh25nG4G7YQFKijVpiydUSNMsfrfLL2JhmKxxa5vM5iwFf7",
  "key35": "2FRozgBrpWPPTHpbrXxWs1Scuyu1sW7n3Tqcmt73tziPazhxyCnD1nxNCzYM1of5YpLZccdwo2TkDMfzZ1JeRs6k",
  "key36": "27eEEjVXyrFHcU7y5op8vZSsbjR9ypNYt75cRLy9W9DzxRZG4zwt6NSoHgot1HtFF6rJmXuVScfoWreE1kDtSWxS",
  "key37": "cB5QcYUP4fk39LBQSGRHsMrweTGtu9p9dc3Aikuzuya7WU8oPKYhT9G3KxMUe6UajUXd3WfHZsvz23GgL1eaNmG",
  "key38": "5mF9uovnrFapM4BVYGMTWJonMri2mXzvAxN4TSX3gbo5paQx9hQPrRvjLZYXChD9HYz32zcCTRFUknarmbn5qr2m",
  "key39": "5TQcUvaAQLeN61FagCvg7Xfqifmy1XyhbLX1yDqxLdU3z8PWbVPTRLoA8CtaSTdpLa5Aa7MYYdvFJP5ixGQ9jurJ",
  "key40": "2hQzFh7wKraJ6aJ3RSeGJwzmqWtvAToXMBqFUEStMfvmcSCNyPDE7w6guM67YRWtjg2F2aHzbPhzG3iZ1RMmXGsy",
  "key41": "3NBWj6WjoFo7nr3uYqJbPE5BaJAqEcH2XuUgtV3FaoLKfMuK2VyT876QksBt1YDppHHUaxPjVHREVQVbjgy9Lu8w",
  "key42": "QgEMD83Ro33qYcyQdcEhAUkFCmtjrhXKhbijWVsRhj6vA36BPFtiVS73FoQwP56sDt2HmB3ibCYzQmGFt6CaKGi",
  "key43": "4s5Sq5P4QntohxjXLa24RbieEi5xWPQ6JgPv45dqDcYMDQNJYe53FWP2C9atxkmd8S8Fp6MAmxXPdCwTkkkjt7WY",
  "key44": "4xmxbaa36no7xfYcgoKqcVyBD8onK7xxLChr6oB95mAQX5XGQVNKmsq4b4kYjKPbEyNeS3oLRwq2uTt7Q3wnQu5V",
  "key45": "4aixBuXcWtNguSENAxW2RjrkQX1PUBwAoFvCrh7vFrUcqKjS57LkknCFhjvCPmztPvYoPEehZUEptb88W3AbYBr2"
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
