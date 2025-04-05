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
    "4xRj6W1Hqd86ccbzSxZ97TbfQk5jh5NjVPbZ8V3DGfyF5FevBqKKEapAAGnjYebq9VuFVjn3FRkLysDcVJDtk19X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pUJyPVxkhf9JLtboncxoj613nnTRAQ6bTZCSWizgJhzLXrtTVwXjJhLDVPC64FuxKE4KqtPu5NGrGtkgukbZr8b",
  "key1": "4ktaYZzVfuTACrLN8nBgUJ4c3oCwYvoMc7CXJ8NdeMxAmPcpwznqXJ6MH5eZzwVGRLFsBDMiFexakpFpuknKLhtj",
  "key2": "2dYqMixVCP7drhTSnP81ir8HsZP5cDeuhRz4RHpE3AScAMEuzo5pSoPXLZajA6v93wiNYLd7x4Nyc3wARuLTYpBg",
  "key3": "5QvNNZxK2ysLeo4sGZCU3DatNHnYKF9Nb8GZ3dQwjZ6busRMxT4Eok24ZN6GFhMtWdDaLVzBmYqHQEv42uHWF5YE",
  "key4": "hiAPwESnD797QrHFJzSu5vexXdN5yiuMeQQq537p6xjCh26D2kWpuf36c2HAZTUfqFNMbzqLkgK7gasEihEwrJR",
  "key5": "3iHavwY6p2yY9nfoR23zkqsF82DiZtJVZ2oaN5MzN2UDETsqbkCB2q168tSu5nVELgQziDijWJnuVbHNYf6xED6b",
  "key6": "43AjWVyeZhKvYNB8cTRqqsTgpcVUDSgLgBULXk1SxxfokhVqWKRDZS9zqhkYxzmBwqPzx31NmgRrHydpNkSVBVBt",
  "key7": "Fqtv8aRrTAXvyjYjXqHFAeKjYne1dn8GaLxxraFUC8sT37TGahnkacvrsYHv76TUZKjnCZLvWeFas3uQ6GyeBLz",
  "key8": "FJuE1zJJZZ87LPdnjDv4CAJpKPV1APdvZt7n6MRRG1UToCNM8SbeopaNH41E8cPXtpjtzVHUEc9poKdK7enggdm",
  "key9": "2Qc2JGobBMLa3EeNacGdAxcUWLLawQQyTVD6RRPSJroawwcYVZbXu8sh5EVgDUtZK6qjEMcZAAig96Eebc1CaZvg",
  "key10": "38HFxR15SpwvEf6RwZBeqoquY3K66RotyxwujgXMAdgRT5M3rQeTB9kTk5Qoo9g1yMQKES2oAoaaLpFhDHKVHEjB",
  "key11": "5kD3DHmvc7U412ns1Bj3sHz5gYBT2XrmuhqWMMHJ116fqHxWFEZ5uxRSeMDDpUB7o49E6JL5uwCTkd1cGNtripRa",
  "key12": "47K1T4jcvF9RPG1RLzieKFWn4AG3VDQzsmRZH94emBTY35985RK68SRizw4xLjjNZFu4iXR9NuUckELYLd2LYW21",
  "key13": "5A2m3oyfc7H5oZeGi21iXCP6SsJCw7FkdsZpp6eqVMcAVsmShLxygNHqmGizZEEuyAJeRFCKFfNPYpwbLywKTHfY",
  "key14": "5b4wEPGfCsSyZqhZboYgDD1rvCywXd7Bj7tYQsLzHFq3hQrNvj2XcQYn2MMj5hqms91REm8kxbGHr2LSjm8JEa8q",
  "key15": "5ELxrkzBFj4qYuWeuG91942wbHPVZsgUEnYciguofPb8VH4M5Auf2mj2Bk65G2kWW1p8WtMAiNasLo8htmJ9VhZs",
  "key16": "TSwwQLHLkajCuATx4ur3nG6eWa2ZfhnqEppWtbepGKUXTQqoyDDbGrBXDekaBGNZAdhyXp8UcrpGsepCJ1Svms2",
  "key17": "MudjyJANUTGMJzxjipMRt4wy8wVWsDqifwCKKkxuaWhrmmJqUn8vHHm7Rb34mrJWMyppuCxsCwysMKUCuMy4jvS",
  "key18": "2FTxcuNFpFB3vFMXw9tfVk7ishETFVG2xb6LiHUM3kD2i3P7MS86H4fVcymHd2tTes6R5jyNrvMnrVRg3jmzQsfC",
  "key19": "52E2ZEgYHaMVtxqB553fpmcJLB9Dd6iMpU6kRzaZbdRgcBRNXaNXjHJyvTqb1MoPgEUzV9AnWsWTdmwDzNpv7MKf",
  "key20": "5vdgYjnKEyKGa23btQ1NFa6VcEBEXe2cjVMK8yCyJqrt1Fh1vu2ifnMgQc1t9dWQCYFGpYrKsLuv15ucwWP3VBY2",
  "key21": "2V6QpMWkFrAwicj729XDPLTms8Yri938Y7ao5YRPZdc9HxZgVDMNYbUHHu744MjTfmBFcPLBd7t99HMUmuMQ4wkt",
  "key22": "3ojVjKjVsbKFM1xBjFVkvsXKLgy8EMkSr76ZMHeEMXhGcLJNeafTuMp4qekf3ouGqhXguZLUnC3RkcpYviXsdWh2",
  "key23": "2MwwFKQE2sPJZe4aXYGU1Vp8DHH84ziyzSJs9ccq19jZEghj7YzPz6y99ciPCFenqMv9MjvFPcLtWiCtouT4ZjWG",
  "key24": "2M4855nZtR2griJRaAZFoKufT6gKweEHAAMvXHEL9eRoy521KttMgShKykmWFPLoFL5CkUHrav77wCWtVqQHs13q",
  "key25": "vxHe6AUBjaewRqNfsTeXGc4nZhdPjp8z7vTMGUmpMNX18Q8tSm9d5crdaQ47ix6eSLR9dbcTifvGUCK4uFqANfe",
  "key26": "ymGKErmRspASn1CELVEkRVKnbLteKRQGPNcubsFLu7BhxmKXod1BUrf9vE7TzTFG3Var1cbUVGfQEqM5LRUeqKe",
  "key27": "45H4Rww9ERsFm1PkVz5LgFBKKvNGD9S1A72SGLwcwoviECqqP1VLQ7v5UKwCEdwB52jmyTqdWSkLKMuh2mqaQBcf",
  "key28": "ESAtmMHF3umoDiPtjhH1NKMexHSGs5i4UmrntA91M7jwWY82YawUiAxLkWaUzvHdPfMkVZv6eB1kVBHM16wiSrw",
  "key29": "ofh1eeZgf8MhT2YiwByhgyNnvcS6SLkyLjtgebLbooZBvxhhX7ZMhavEwsd1kkYx9vv69RXfFBnGC8cTdNjmv6w",
  "key30": "4fG6ne6Sd5jFVuf33LzuyPhUtGt3FA7mPg2Kh2mHKrRdg9rMvGVeSa5tz4qR7wRRCe4NPh6CtMQs2rGzJxNjDP4W",
  "key31": "2z95GJWyJvvtW7L6QZfKBRmcG3hzijW9f2opFVEaSNcdx3MhkjegE6aDWLGeHQzbxdJMF1TPVRRZ8oKXdnUisfch",
  "key32": "2c1HyPqsPUb4R2RZvZYPhwbSAPxzZq7hrvZXgDhfDiuea5woT17mjNCTg7wK623fTm5GLcNAgpuq7BsT9t2ti7Gy",
  "key33": "ufuYnH5y3KcJ2an8e6oqFBsBpuWwDDEu2Nb6KJPfNZwHdprBN8n61Vev5BzsjxKCypBa5yUJ7X2dGENqc7LyrtP",
  "key34": "d6yUD52tbLTPLsbJdFn9DnYWE8rws2nXUvSQMofUojb9yyAV2azPnEqq8572LYrY1DzeFDPNhmHps8MhNCffD6D",
  "key35": "24Q3QzeJoK2qpDqWDAWQjXupKFQgcsKB5hPVhcithHWdubZfqVeQyCUC9kkha3gkq2XKP3ihii1idsXjXCEVGoPM",
  "key36": "2AsdJ63QPZbpEwySgv9xYLA4opcTwffo1MdXDVM773qHkVB5eKyycPPTZiQDggSgMFBpbw98dEY7jD9WUAcUnYJM",
  "key37": "2RT6ytoLFSP4JD2yXrL5KjeZbbD9UwKroQSKVzAMuLNkV3RhtvdSE3gq3brvVpdQmajn7eTigdu2Hy86hzkWKgFb",
  "key38": "api7qPabnomYWc1EM1EAy2m8W8Xu3UwJoSVGFJCyFLUXJrTTQXXsa3CqddmDx9GtutzQ16fZuWR5e2uxxvA5WZ5",
  "key39": "4mtQbFeQWyEu8LfEdRouJsKZ6Qm3K4wGijkcZNcvj56kzjLzzts5UT2uDDLMV9atz3pKHRf1HcFY8je1W1kaNYrM",
  "key40": "2fEt2qag9GVpWyFBQcH6k2XtwzgWgSDRTeWJGWyNPMgv67iidZYoUV2qpcA3iEFzY2QYNHHLMRgswiGJgeKTf81Q",
  "key41": "26hA6WrSmV9oSC93KB5uPjBZ2UED4wpRdsFwAiuQTY5L3yAYuk9sm8XWSMK24LMMVeDc5iFeBgXANWm7iQmTQrQY"
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
