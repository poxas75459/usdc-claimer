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
    "2uDFy4kJvtXhj14KCjWJzQbWeAbFeYSixX2FFgjtJ3MDKcY1X5z6ktq1MbAVu1K8KBc7jQujCH8NwgpmD1coSarb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ybgkgw2jTzXcRFfDAaADHLBDkywgpWxtxYcRaqTisNc2JRUZKNUQcuHwjg1vMCcM8mjmbwEqTQqDQpmxsxCvQs1",
  "key1": "5WLXRm5xFjWjmtQND571hT9KgHUvAJiXrLKT5shdrw8sUSB26UR1c7q1HC5rAqeQnxrgvZ3vUGS2tcozu9is5ucK",
  "key2": "9vJ3kjPnFH6saK5YHi2EMk4EJafqb93QRhsUfeg7MNVWQxmpLQsYTY9VryuxDAvG2oJgqCmgfvGJdwY2ueRHuAX",
  "key3": "2ZxX9dkjNekCokmRj93FyJvAsSSsBzXUs5GNv9xj4Vn8pQUH7RN9KMusYbbzBFK3u4G2CnzHvpy9LbCxzn28Fqwe",
  "key4": "2XbsGsH2s4Hmko3bxDNiCQs7FcyQbVHd9sUrBfZUTy2r4wVFhpZsr3Z89VkebdsB6NRxJLkcQUeePkCrWpXjuDW2",
  "key5": "4p6PYZhdXAmqs6epCw49DyEoxL86tBXTuXXcJeDdZq52UtVY5dhUDWubajGxTahVSoT77hBygRqPAYtLLFNbJenr",
  "key6": "5KHm67PPLBwDkKG9ZUHf2A9VZthYYTM1tN47J8Hsy3BraZQc4FRwJzQeV3RQ96124UTg654RDxNrkZxe3p3Ds5e8",
  "key7": "2vz8g9NPDMVbPDoZqnz1nCR6r5Yfz8g5gPyimLdzZVQ8VE7V3AXq4v89gDaX8awaTCp2yLQjufGLZjC57AnvLCEn",
  "key8": "5TcjcuroyTixZ7m9eNmmaZ7kGFmJJ9BFJueRQEbMfizgUwfApzA6DGEpXsLXFS4MrAxYEdjtuqCCurVkzPxM3F6S",
  "key9": "44kVLhKZawTeynFKmiU2L3NrE9snTB8F392UH4vi1gcg19h9PvRrafeHhXoSSYicujgBVCVk5KJg1SHi3Teyb6CX",
  "key10": "67rKMo5emeMFavxKVunqyQZsbwg85SPYZ5YMngoVb5z5yfBCwYZSDBdhWAhyr5ssxuBm6uPtjxDeKe7ddseA2Hs8",
  "key11": "3tyT2RvUPRvdHpQm2hKsPaTtehhSfMtW4vZnBR8176eFLXVPfKbNs43TVxg6QmjywuEwE7G5aLRGhi3AYFrrr337",
  "key12": "5rcBAWroVCHW81SWWzes4QHS7GrWRw2mJC5SWHj6REmhHBbNXMVUHfoKtDiMMJSen3DpB2hEkiarqDBFSg6wsjfS",
  "key13": "bNyiCDvroveW6DbDCdf3PBhvbABwyf1tQnm8wVdgydnMHEHtLikhdHeAbTv89cqGaWSCtWAZahbaVpYMhpxp8zm",
  "key14": "577oyyHZd8wmroRNnpSgLjezF4L3d7zfHBa5soJ67LabPFjgqFnVho58itLCRbyuevnDK53nNzNs8NeUDKqoCJuC",
  "key15": "4MkwtoZx1LEUoH7cV7SQLsYZefqDTLzpJuZCyo4jtSUvTBZDAYcFLmbMn57okpCqvQXcivS1YZC8eNbQeGsbY67D",
  "key16": "4mtYBCEjWAJkWUsZvLX1pKmr2d61ReuakWhDuv3vZV5Fta4aFTrB3TTVGBZo4e2Gzn95nRUvUS3LgDzJ98Vz7CvU",
  "key17": "5Wk4Zm3e74UJW2iyVSk8zyjQyZP3PrLeBritew6qzypujHeo83ZetYyLiAXAZjm6htjDP87tbbS7ThHdyN1gvqAQ",
  "key18": "3tCi9KhXAPFWziGnihAMqmSarBqg6FwUVS7xfRTzajxL22eBKsKajWa7wvXrvfq9EsEMK1ebSW9yrHQEFNW6ET94",
  "key19": "3G2KQEvcgsTkNwQJU6YtWJgnnA8LDHmCvDQZnbzyihM1iswi44bKSEBmzqoNjqZvjJSvzXo8mrVs6zB8Viaj8BTE",
  "key20": "2P24rZB27kAnPeHo6VTTGsUad6DDtLJUm89s6V7sQYLsqjnPvZDYUpx4kcPzW1NXE7UBbJ7tmG4TnWwD9bMruDN2",
  "key21": "4NWqFEhh47QWKptkCeDCQj7iGKeQkFyhnTQXkhSRGgVyhF2presGdHYkfAgAUrr2GLtoV6FpyGc2DjVpLzJxNXEZ",
  "key22": "ooY39R8ubTUUjBgB9QdxkztTyG1igfbhDGF8yU16Dwm4PVqtNCdfF2qW66KkAc7WzgwrdsXh4SaBb9p6UMvCV3d",
  "key23": "4C7RFCVGqxf8xpVYoo5zxEuhbRYE8az8UWpzBciAXAs3oxyGssqrjFriA5xt9Eiq2A7oBhRxEhJAZbRaVdhKANUi",
  "key24": "2YSSEN1h2v3EveeBxg4RpkLNUDdMhmx2kgttekn4z4i7LNWtMS6Bw3umSHjcPWyiafici6SXPN6WFdzDHeH33XT1",
  "key25": "5JbxiaxGRC9sD321uDKmPRazKaQ8L9xVLydswtoMkthm61vjr6kendHGrQSHGL2LGNQ6hhzNZouuharj7yWva2kn",
  "key26": "JgDbznHUZ3oegnUVL5oKwpbF75Nqp1YSHaEHjuRCeZpPWqSvrpE6vPFC26tHvdeY1XpAptkWe3V4orNNtJunZJ4",
  "key27": "2TEKqHrbWmV67xJK7JuW77ALQCdYYBibuNi59f4fB7JE75sHFwTEa4JXa34ryfrNDWCNxNGoVmwnf4svRdTr58Bz",
  "key28": "4TPoM5r2ecv4R6QfzSMA84vxDAPN21DfD3wK7ovesV3wK6tfThHxf65hM4FiweKYMevFB7YthLZavrpXmDqP8jfy",
  "key29": "41PuhEz4Ubmjx8dJfcLucTpFN6mdhpSQS356N62eEVCUqZsA6awj28zKN7vWaEWoBs6VZAV9DBLUAkFiikL76dUb",
  "key30": "YtGFxjac2uqjCiA8xAaRNXcVgYA7ZHt9yVj8UuhjP3t2dr2qq46MQjhXticQDaHSYMNKJU9ztNKEkP5L4GKVeUx",
  "key31": "2JX9tNsXDcNkc6VPdFZKHLbuaz4zTQJvg4kBEQCrerEGsvBBa86srf4VKh1JdX4WyZGgpoZzMYxAewmc55g551CD",
  "key32": "rdyKjxct7Cv6stw5N6RoQit3gtX5JAfgmYP6xiXnC65fizKN9zxiWo8TzyQBuRKTeWAotLCYbFDJXQZ2xjy59ZM",
  "key33": "3TgKATczoFtuJsLxDEKAgELQsidPLvUYhhZTSXueoR97AJnNCz7JtaemC3sHKAubmizdbHsNtEXuaRa7YK7Zbbp8",
  "key34": "4UvW2sKfowRHEXKZs6zW9jVNhuoFcquqkAA9eBeFcFAeaxrxtVPoKijGQid9c9dAoUQdCt1bFn44P42w1nqoQDFQ",
  "key35": "5EsPjk3PwgsYq9s68fzuiqXaGp5pCH7yjeaTjd8rRgAWL53aLdePMcb5Gt81BYubRcqK6kNT8HckXP2j1j4YwHKr",
  "key36": "2zibnYa5ibKCS5GQRHfWZ72a4a6TijMmWLhBLnUxniS3X6GRsrg7YU5tAi41zErrfBgJGAZHfD3wApVtpKTr7GpY",
  "key37": "41mqLPpNfioJLP1vURtBjMxJuNZqAFkaacVfrYnS2bqXKgScjfjZ7CFDKLNDPe697fnifb24FfBuUJRGTN5vX7VH",
  "key38": "5R8w7SrRFU5VEmCapB7dbqeQk8P5XC3fF6pqNQybmM14jGWHfenPSsZG4kRNewLG53rWk71QEVwoP7ym1VZLgSVN",
  "key39": "4jAApJDRWKzdzYjhWoxTpnvP3xv1xjxMPU1hGzCtCZ2deFrLzRXXwZ4DSGUJTEVJiP4vWJ1uVvKwLUWgQXUyhiaP",
  "key40": "36haqZwsT1ue2qxLcqymzcv9xF5hqUWBZ219MSvyuHnH4ygXJYejggrUgnxEwLaLkLUEYd8j2wPpppC1hEAQK6hj",
  "key41": "XhpdFG5BqL1noKLMELZtBogkMxw6HLQCHT8cwWmXfpAngzq7LSC8B5o3XdaW9h1tJXfK9aSGa31RQq98naT4vsg",
  "key42": "4VCHr7C6YV5pfzaQSvmkFwt3grdg1HXag2nPnk7cuQT4k1AUChDFANNR6TRCxbdBNzaTqaxQ8GcDGFe31T4fCfrd",
  "key43": "F52PyzA3sWT7S28TgiNoK7jb3rUj3BYaQCqaCH9JpZM3UZp1gbh6541owgD4yCj3zV8TPiffppbag59eqdrMLjg",
  "key44": "56rNvWzxidNZER6yKqmE7EnJNEKV1NXJ3QDeHeX3EJ855u81T9SJQJvXzUJsZSyCA4oUyNTzypJJWBE2gpqMgJKk",
  "key45": "2phcEwQNmQaQFufcxwG5KHATs5nGcK6gzzSY9nQuGL7cHDW7qj25drdTeYh22kLER9Hrxrbk9sLb31pLhpVEQhgH",
  "key46": "4ruxTSzpMFNX4SNQgtnaaQHLRhzbANnZbFv6YA4Bb4apDr3ADe2TKV8Whdn3WAYhPrCCiaos6QNGwS4YbpsM4oZR"
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
