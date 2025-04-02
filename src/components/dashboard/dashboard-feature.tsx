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
    "2fAj3T97zYrxSAvEQFNt9SmQQ6AFRdoeodiXopHRtVWKFP6SWahV1PyWqgyuSpmBmH7xtomArkcsThUSRF95YsaW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sDsCr6Cdb9CgMaRmmejCfZ8BMcjne5ppFVRAH4sWCu5bDTGEdopDzE6veaER5khZ1UgezQUXqia5Fjh2Yc3w5Y6",
  "key1": "66Gc2BL5WMffE9mxz2AbjLGDn7hTVHBjZFuTE6sdg5AaJBq3x8GSsVpFTsz3uC3ozoswKLwKECSkjoD7hgtH4pdx",
  "key2": "3z3NxbpXkMxLzonFeGGFniW9VF7ZoopV8fE3UjnvFknpRXxc48wnZdZqauWKzGAmpZWKRoPsNfJcuWhKqFD4aJMk",
  "key3": "5qaxdYYDLkqdmA2ggN4KLxEPrun9N2wJyaKUjxmF1qA6dczoc4cQLPfNjKXGyzkaDkk2M94uUr9jvbtFzWCkZRtT",
  "key4": "3j17vVmAgxQdhzxxfEdXTtTck9ASxRxfdnb2uSny9czQVsta7HrLVxMGHbqrzMcjcgthVq3uKwp9RsrdenArNv4q",
  "key5": "vTt3CTEYdqtkn9CFpTu9ri4D5QCcoHyoimsKZY4Wunv1rcwM5M9tKeU85meYViLBFPmRnhpoafViBANuyd52N7P",
  "key6": "5rPYdbmTczbykmnc7jyCNd9JrDBnYNYJZUdrTriWRYQraBUqbnmVN51VXNA5LLPFh4ZxhpzNs6pSUy6tYEYo9LBw",
  "key7": "2E24SDJXFG9EJnBZJ2CqvvQn9FDCE917gmpPR9GxqzFtLSwLFfc6xqkAH5u8whbzAwSdN5kfBrogCsxzeLkxvWoK",
  "key8": "3XeDUxnSBsABn7gPY6SbusVmFVQ1HPZSKeVpP4bhyn6w5Tr1HYzpRLE7uG7fzPvRryCUxXPSeR8XDxt3SxJRUbJ7",
  "key9": "5BhrYwWdisVJ6tm7o3p1Jx12aX6JGZ222Yv2Njg8dYYSJxv5E5K1VsjwgWMkf41hnmWvqWig1rB97MJudQVRSsvi",
  "key10": "4TRumg2sB36NzUNnJAE1c5g4FAJqXSRG8o1GzXNKwMkLg7pdWSksMitPJtRyLR9Pa1tjr5TJY4W8dc8QN9afd2GZ",
  "key11": "2ZxZkmKvsGMwCaMRwm7RwoVv6rcVGLJSiPiWq2TE1hGsnrjLtHv9gLHhe6MxZiK9bpW3dmGkeVk9FFrzXE9qZRUe",
  "key12": "3P2weGDjgW7PZxLEbAB29EwSdoiMmSRXSytRkVthqG4xZfZb6EabWHNug5mJoQ6KECfQbqYqXg4U9GEK5og1FapV",
  "key13": "4X2TV88VtXGAzrNkABtKnde1UqXbXifGa2TZo9P4pHwbHuwLiRaGNbu9yLsjBov8S9a2Zjmq3kPQKDpZfEwojevU",
  "key14": "2aXe6sucrSjGZp4JbQxGgf4UjzAmPjgQPoDUL5x9MZDEQwCzTobaLqAatbpQtv4MqLSadYh22c7XcjKUSZL4rHWm",
  "key15": "HrG69vdtXK2k35GQiaVuHw3Uo9KY8ikwW5SMRwj9crmecostCNpWxSkiKBCp6wj9yduJSYmXzqxB3dnKA6ZCfhk",
  "key16": "3WPjVTrgeR1Mngq8fvspJfqk8RJXrpGMonZRRZTdrcGbRsBxDHEN186NP7BZ43UJRZ6nb1rZ6tnWUocKakqVwJoJ",
  "key17": "4FBK4mnM8RFGrAF5y14juuazHzg7xc83NUZJ9FXuCZ4sp7kvUznPbfk1412HrXwwttdY9VwhW6XP9GpsYJyr7gn2",
  "key18": "tewAvXyuM9muNT3w44XVxd6WSb1z2ELHbd2Am9BxPDACaPxebrA2s5EHyudfZsZdVbn9RETjHf17dKi5ggSkhTk",
  "key19": "5tPj8fqP5yMNn3QBhQsR6uepNoeCM8L9JpFXthMT6NaPizC1W6smkbqgGix5tfVkMQG5jKhiATqowjvwxqBAHCkq",
  "key20": "BMaRBeggMQoxhAXEmU9zo9kUgCz8KgMuYJ7E9ifTCub1Uesb1bfU8uLoLmXWoUs1KuBFyYKy8PGSPubWKri7Fba",
  "key21": "3bnbaHVjmRMZvKbiYb8ku7twHCoMYGnbp3j6YoAPkAT6VDsnDwVWs2d1nCt8degPLwQtMDRCD6tC7Mv8nzWEccur",
  "key22": "GoDdZ6vsNMoSpVR1HmEyfSWMnbZ7HTc9hViTS4jKcSAYuyDQoTbjg1A2TMXGzqKvP1spjf4L8sj4v8m889PQ4yx",
  "key23": "2LqZPJQ4dKMgJ1JXdzwdfJMyK83QgBZcFVz6QMeZ12SozT9WkarGspcGMDcCh4X4piLaQTSxRq9vcZZajQsFLb1y",
  "key24": "4XFKSD9oPbMSVGfErCsPCgpfi1YduNLAqyGCXSXxQZjgmG4eMDdL7AY3PhQWcDX11oEsXEfFGmE9icJBTw6Ya2AP",
  "key25": "4X3MzVTEaYAtnWh5HvchkS2yqBVPkWCxF1zYV8gnrf8FuQDEQFBKVXNHTNW9LzRqcc5jYDcfsEq7jaEYraD4eDMY",
  "key26": "2UjqqhwGS2SBWNnMhkbkJX5jHNsSJDTGUT9MJ732WCieo3mi23noNdvngQUongHErfFNAuHGrpr6ynSz6yi4bHBy",
  "key27": "4Ffb5yB7KPMEFQxUTMKFE1umdc7foNXD2AF9ReYKapggimrAtaoi78ZkqTGPsJdcGRhR56XwtBF296qrbeayYzEa",
  "key28": "DkAMcdWQMpHiAVSEc9dK5a8YdfAxiAcJ1zKWDobYfnWPEz8pMAgtvQ5aoH51MpPDRVVonZvhYTRJzJ9eT4W22fh",
  "key29": "3KDqwAF4Xun5E8EAzWSKDW2uELb3o65vMvXA4HreXBKqVpPWJG7jUM5mJ2SCfj487KoPqHEWmwJdKnUbWaDnwosF",
  "key30": "2r7u38Gzfx4pymdp1hCWdCyA59UtAWWi3UbFD3JcTopEDC9S9K1b23iH1T2gxE5DHRr25D7GiaKye8z34TVpJxYc",
  "key31": "TQjQyvFrjaU3a7UQv7HGBNzu4dvmw39Fa5KbJtcRJp2qcrkfzVyQiPHr7cR9SqhdZ4dvhjgYV1zujmTqzvJrAEj",
  "key32": "5AHt6eM2Hc6mzfbkKhdGNpq5cSoHoAZXuBqEMCru5vaQPuPBMGoxoNwhA8cxCdTz7DZeQ7fSezx1JUPNFDXCzmbs",
  "key33": "5j5ypyqGkvPsvNVcmKUseaGcJPLs8WrA4A8UqP8wGcVY8uAAssJB7ueR7Ri4D1hW7ecKr15bcHyZNTAt8E3hdXJh",
  "key34": "49nt8E2fAQ7qtQwwexXx8MftkXzEyB7hsPJJM5V4ss26TnzfkPJFTHpfZzgeKKrFwWE6vuDiVbjt2qXMEEhfypys",
  "key35": "2GWHYR9eTraVGjdTHhjGReHuQX7cPFVBduvaYqzLjz2S9V4cBeuMdrpc9S7bE5r1hwaJdpJ5pU3KgxztozASHGbL",
  "key36": "MVecWB5bkLCDNApu438gDawQZYECFmNbrPckCxMF4t276F1xWS2uvS1dgVN2VE5Z4JMRL2EMW7zwmX5snELk7W9",
  "key37": "4h8KMD693ki1Vxhk8PHVnPDifi2omdR2T5bMhcVffEsCMyDTQV1dEoW1QGzSNMxhngaruFTyhu377VdJbi6hv44L",
  "key38": "52Jgp8n9bCMhh5Cw4wUGuDbi5nYeEzTSr2Fvrc4Zcb8AzrAT2AW7NEisRuje5T1CSrZDhxhGbFwTC6W3YSHf644B",
  "key39": "1BfCDf1fbeqKo19Bgzs6raG5hKTC8o15e7u9yALdPnZvS38txY11rMJfbwabPkjFDM8eL9wya7X9ofRo2MFgApD"
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
