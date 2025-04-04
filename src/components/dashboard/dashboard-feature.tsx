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
    "4TLeNEoKDJpsvJ6mZWoK349VSGWBrAbEyrAF7JyvcdcMd8jmdWVMGkuUATwpDh4z6j7DTJdmdWEsVniUPGE8aEdy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34hnyXuzVWJXZjXXjng6x55GcM4wXFgu7Lcg3qmAMnnyB9n4QgSQtsyuKTDg2rbKuNsrazHfVhAdZhPLdutfXgAn",
  "key1": "iDJhAqfQFyAKDwR2F58NMRAkMnz546W56G5UicbVxb4mStDGzic8MzcA292SnmWrpvWdUxNwCR8n51Q7RTGozN7",
  "key2": "2vNvAuApX2eoSqxdmNDHrBCpLuESRdrS7C4JUq4C4dSwibwR3sfWenroLy6yP8QptrfdwheERGzmmpeaavqhtnKN",
  "key3": "58CBrPR1iMnNoAwzjCNpn1MSkXs4ibYK2GVW1idzc3tKzcHxBsZMcjXdpLjL9kwE2NLscFrniuNiixNEXxzuv9i4",
  "key4": "2L3NtzvcdMfdPzmC6Zd3ck3EfPed3t4d2ZryM844omskeJXcsjoEUFxdhxQrEUAg3JTvpeZcWeStJa1f7anDqaFh",
  "key5": "64xzndpLiLTLUjNMMoL4o5Hyzq31dAyrWivcnqVUY3BUkiaTsHw3rRh3AG7cAUV4dnazggUFxqsT6g8qGdfwbB6r",
  "key6": "4pQ5FD7iKnSXLt5hcZqFb8oB2JGxkfesqGfifBrcz8vRdDRhQGvzqcc8t581k4VZL6AvWJpeXXaaZoNzRBxUhEds",
  "key7": "Ps4pLNUYXWFNy9Veac7g9B2Cr9KYkUgqjmKnAkPQ77Q4pGN2QpmByVSnZ3tS9Bq9P51GVpsBYLgi8hMSZRbFLRv",
  "key8": "9P4DNY5S8YNkw1JVR3r4rqTWip9QZi7g7gshhfCSeYrCyLq6BRnzRPtgKxmjH1yXcp1JHLDyP7UNSmjLkdX5dPa",
  "key9": "33jtCtwCtxzucF5GiVBPaGH7sbmJk56qDAAHKausaWHUvRDGNYBx1eup9rHEPhccR4kVCaVnd7NF8yzD7QVt74BT",
  "key10": "5RGcuCmSJMTH4sUoV2oDDBiJXqf4CrYL79gGmZ5q92CjuMj68RDHdbpbwZJspKFErtfFbiE4N6tczWRzyg9AVqn2",
  "key11": "jFK8Wqnsu9u6ezMZrm9YbDgBNzZ3MdGcUzcUyrFwzTbtMKbUbL49RMDCWCShusUkPoTmtodyCHzQx7Y9g3aBq87",
  "key12": "4MLXPPYdVKc5GJbykMgabhsEjnbfZxH2BAvvAW8vEhc76LubouQDmCErYQbFydCZHMs38wp32HRGMmtqKy3UfwHL",
  "key13": "4Si9vi6yb89R3BqALUHZDCWFX9mQcxuRLRoAFEPzTqHvFfa6mza99N8bfbP45eaxrPeAriaEUh7cfaxn171aCMeg",
  "key14": "7uJqggJJqTc4RXqqcwr3QV8g7W8T1oEeXpJDaxZEVtqbk9uFQeessp4p23HxfKJR23d1ayVZJeaR4WHAeCkngZm",
  "key15": "3wHNodfws6zaNW6HzxdYa4ugC8JYydn4HPUPnUBhB2u3vGkw53MFWYSv4zzhQTiK2ALDg63HJe9tPDsddV5iSui2",
  "key16": "4giKueQRpYY4tdicbDXQRE9w6sUaGzTPwGUmot6tjr4Cbu6X51LsZQPCXrUAB8QeBR5v1M9Y9EkwWpmCKPRDoB5N",
  "key17": "3YP88QHkJufAPDHF2MgaAHEE9wkcZtf5y3dmbFsNutYgsqDNGGFQ9iiYA8iM9rMDvbwP1G5QxSncozXGQTW8r7jh",
  "key18": "2hn5VDcMPs8jva49BgcZhdRHwMf4kz862LSnUDjjuEKLGcLREnet2yLAeDB18ssiyRQBgkJyFkdmPGpqZjsGdUW6",
  "key19": "3Q4KpxmGjL8qo6LJ8RdMFTusMkPc8Daa2pe4d9HdqvKzF7JNZibxyvRf5bnwghs7AK8QPgGNwznWkpSWZaijnexr",
  "key20": "5dcnH11iYV1tjkvS4VPKUB3PqqG6chjcxv8WghSsEUfXfLj2T8SBwjKrQi9hYXUCRqKGPhvCrWLBSu5VTft42pGt",
  "key21": "dKTJPsEbNnSWoVeEcsiQkDNaaVxn3t8cgYoMnYxjP16kkbH6hvT4wwH4ZNUV7ELYpR4RN61ALKoPt1bT7QVkkuL",
  "key22": "42jR5UaSMCNSTkwheYRKMWtcVh72wJKsdKTUFdSmaRwgmukmghBpaS7CwGhye4e42i19evC97xGShfL47zDwK4Ge",
  "key23": "2bjAiUw8CumfJq6LPEtt47qhmqRUetFW5ovcvirkudPJAZhaY81GvhMfc3sANmzFZBtFQmMonuWiwaqszGrTQVLL",
  "key24": "dEF6hoafWcpUzYAraB182n7Fsc6DmeCUxP6LcNhzchJu9CrZw69JzZQwdfiANyiAGgKJP6MAbXznXuA8VErtQMd",
  "key25": "5kvNn1gYMLFFA8K6YLkUUgk5yhkCegcGWmbMQUBpaksZbtQLQ3mwqUjTpgCa4hQRvct6kvb3tPZJ5Q3PGc2GDktU",
  "key26": "1nzKGEohRBATFyZBSB8FtHN2UVeN7Koj3UvdJU6YSdd9Vusm8g63Ua7SqFfnKFXnMcUJmQcse9jHdU6yjdEQDcW",
  "key27": "59MNRd228JdmWqPcscbWQfNfS3cFnsZVdfFeWdcTVFNWBeRPDg9vgGenNqkB1EY8NKteQC7rPKetJVqwQ22UVWG6",
  "key28": "4BnMvs3C6qFhf8zSX6w1442AAdhF1K9k8K6NgWZ6mujkQxAShVW1eT5G298t5uaacJgqQ3UCEx6tUdbuNhnSZw3U",
  "key29": "Tcb2rnGZk3uaNKs3L4Z8XsjpFiikZUL9jMp6iRwuz5ztHL5ess441QYmA5dsbv12Sw7TF9jVaCz8TUEEdTiSetm",
  "key30": "5dgFSuUxCRcoc3UEAk3QSCK4y4KEMLh4MTtrt61RhjH9ZJguMRkh2A6MvECULqMp12HsyvYS7rzDgnAd1ovmKW2s",
  "key31": "4UJShdeyhi23kvwca33UVuySju6C8jETjaqhofEhssbt6urBvA4nJZ8Cbk2Fi5mBcY1Re3K74UU8kTLRGxVbSEQw",
  "key32": "61EZnD4ddEh8quCppW8EktCC4e3wuALX55g5gGH7R1oqhTwK8vHnUEmi1tRmq7AMTbi9kGMcVLxejqLraooqHbHC",
  "key33": "5DYHbTiCfJs7idwyyYNyEfMMVoAeCDAfZUKpBYoH6BJmcExbNB3k87ShwAqDHqunVrG7HDCw2rhxyUaWYa6iYVYF",
  "key34": "58jhK68FXVpLRxTS4sbMUDcyvBvJvoou97oxWxytCM2GydSBVynZtf2TqPoQAPRvqX68kt2hj716xRzbm2QFcJFP",
  "key35": "4Bp7CdiStvvN8QXoJT63MtjfTfLRAVhyMfUetdZV5ypBCfg6W9kgWo2C7KRZSa52N3PqUUnBxepx1YSDMmppZsmM",
  "key36": "E633BnPdN3R3mDmamKHuKG7EM1w4VT1a1D1CVaFvJDuoUg3h5TEFpsWU8fDp6GqvXHsNk2y8Km9qeg7FyWZBbBD",
  "key37": "2W5KiN6NTL8SUWMaWN6pbkRcC8Lk48FVqqYmtV1Z3ZourdbH8cR5Fv3cWseBvKvmZFN4NrjwFHYv6X6GzmT2P9nf",
  "key38": "2cqUnv4P5KChZ9Q4LJoSCVBPV2QJTGRkxjMf95QynvoqhaXHrj8sxBBHoVm5ga6y7DaaHtKcwxqJwFwjvQmLsTDm",
  "key39": "SUZGpCJMhEpiBgP1tkrwY6h29thybmvxZ9mR7JdZjMm1UxA417A6T9jrX4hNrYf16HkDkwvnfP7MywNdfFYbj6p",
  "key40": "4VgfDdaCdB96hdG46US1czYD2NJRKmU4UXqQ2mUpfN6opBeByUo6H8BHJU26cr5Kex6KqeLLF2SU3js4RtKPubJp"
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
