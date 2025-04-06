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
    "881hKFXWJhEryiGPNqbDhGrqX81Gb1pVn21DfNoZnKbJCJE4jW9eqZqgZ2JuCNpZAQhKNjVYDBLDWWa45jaQcES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vgve5zJuevnz6cwNfJc85B87qmHLoZ4Uj4dTbLtoqej36RYGjgiJQ9geVQwbjFMUn3PeNfjhpNJshfzaq9D8KHs",
  "key1": "897jJ1C9VhGdjb6jTbiKUsqVAVfM6L6LEYQdWSKBZqZtdH8Uq6m2eUKiKYMSTUohcvnUMGxaL21m9CaUQSGF9dR",
  "key2": "49HAtteF5L1ud8G5Bm7xStYMCiJYVCpkPEsAf3LBCsYso1cePpDDm6kvVhgMGuTdhD3W8dmVbFUUsREWmbsiBM5i",
  "key3": "3adquk9RC8hncLYcdAJvLia6d7i4YPtGbdWQ4y5Zezcj8YB7RbSmceqCFLqLmJTKysdymgTy2j9oxsvMMrQSyisS",
  "key4": "2ioM5BvvJGKiAib2tuJsHmJUKsk8R9xzjQjyQZvmqqLj8HprvhJcef7CwGqVTGY4Juuyf23ub8wgrKCN3v8HPt4e",
  "key5": "41iHMsLwko93h37UJBDFquXCve3ASLNLck4JDZS56iSqocgCyMbo4aGaJGAuqDDYK32GzdmMxjZwuFVxqc8aXBtp",
  "key6": "4G2b8xD7r8TxsyrSqsT9ehi7HpxGuqdPsKfotkhaEUtZyTJFiVqwbocMiW44EJvEDv7q48QRkotqydZU9omV3w12",
  "key7": "2PZwD1ao7rNe9XGU8K2MAqwQJRMajKa1xgXtZBPBUB3JyFvvJTR2jtwnRuXA5w4QWQvESwu3vXeZ2xNF5Jryxv9G",
  "key8": "4vvAGnJgXPgcnuZ61ijziindDmQb5JF23YqH12c5xYdAhfssJB8X5XNLtsrUUuA1BbSpH8C52gvkwVm5rYUC4VHy",
  "key9": "2Ck38SPSsQm6MzNhHEUQmj6WkktxUtdG1fnoqNwowiZNWfXdULW2nK3aDpJhvSZxuxajtCF1fH5e9ffZM4y6J7fQ",
  "key10": "45ncHFiNrUC9GCju8MkSL4LL7hXSbxgppZ98vHpBiSF2LR4JmC6HkjoAAFbWVPMav1U5CB7MyTCcGxeBrTz4VJD8",
  "key11": "4WZn6D8WVLri1gbU8UpTDaCCyUdxEux3xroFGehUfBN7878zsuRqH2GbySCLN8mmCZ3YDjbsdrJ5cvd3MFqowFxH",
  "key12": "3TS3vKiKj4GYQnYVCGSfNxck32Ld6Rdo1VKoccN5ZHUdzNy7FBnkTkKR4B3f1GtsNEPKJTzweYnKSsRGwk4Ww8HP",
  "key13": "3tzfdaDmh1p4oiQ3myf89iop8qSNSLA1Pw8osvwAPX4jr3nj2woGmAskyb7nLS6zTdFAVgEG2JjyzdHRzsj4RRoB",
  "key14": "5rA7oTAHDgrgYUmZ47zbS1e2NsBDANP4L2982mxprgA7eDBRPLh1XziZsyVy4adKLR9XbUu2YZmUmHDRxMLuTDRk",
  "key15": "5AAnTLnXpmvtoPnNBSJbQpJjShQs7P9UHg32mN4bAhJho3szujaA9JrsLSvpgt3rcRjfsSAo4muAQqnVxmLcB52d",
  "key16": "2Yj9xnC4yiEbybFgjc3R8cPUMACxhCixNiKu4d62gP9LgqTkcx59k9Vj65F2JdwvTeY6qFWeJbcc81fDQdtrRYgo",
  "key17": "2cTzyqr24h6BPP88dB8GdL8KNqwGrJL6W2NhTxCPSZK2xztLcEZjb7VPytu9wHgKn8KB2DFBfJnE3Xb3rtKw8pK2",
  "key18": "3ekYeTBapUsAtJ6EnX3aCDr3RBCZAZofSoeRYXu7DtzmBySy1z6wvKBTmd8KQ5VrM6Nb8syFaF5JRaDNZqzGDRqt",
  "key19": "637Y5nyu69KesqDM5L66YhuRRr9N7vzFCGGKW5QbfCKS5tWNqtv4pKwRzVv4sE8uCuY6zREgLgHFTywpPgmzNHBT",
  "key20": "32k5B7eYScGLcFMYpXsZHt4PWfVMZCVYkxqNKy2VnRwrszPbpxU75dATAZVaK5LW2CsabmibKaMDPh5cce56bqMi",
  "key21": "SQGS6Ve5g39HPNcuxEegm7fmdCsoDhyTCthwt5LLRNokcvVWu217Tis4kRHa4xswKAWd3jtubawnsDqCDwjZWnp",
  "key22": "3DBcScGxcrcZZrB9cKsxkJv9Duva55MRfA33digVKHc4UWrsidiSLn4sWwd9UKNL2QWTyXjPjUpAUGfZWeDVR8xn",
  "key23": "KVEZHud8wMwxJYqz8kNPH7va73GRqmi3zdvcUiqCagdDPat3q98f3eC6dEUUz1HKxq48L1r5N92NjA9mkwUtvwt",
  "key24": "2CAiwVWb9YbbRRcf9kdj8ovv1dar6gScaccRF82EcVf2DHJWv8bY2dmNTvj7CAQoFjXSjesU9f2W2Z44p6P5E8ud",
  "key25": "21NjPjPBVn2ACieU5HeMPkwQCS1TiT86VXY4gXpFMpzN2zoZMpqTihPPcfoNjaW9uKC1uRPdWFhK8eu4A9jEEp5f",
  "key26": "2Lu28dJtcDp7vES65b7BYK5yrVANZ5sLo5oXWwd6ucCwAr5iHuVJyRxonHFF1qr1khjm48q7P8XZLMgmGAg1M49k",
  "key27": "5iMT2g5jfBaptNbLNFE6tJrzex8r7nd3eTNZeLcV5wrv1enfTGiXz2oZiyaZ7ztjwwXPDfvdwcohncLB38LbqaEC",
  "key28": "5FwccVBTFucUKSs1y6eL63hnq9aX61dPUAWwSDHEsTTf2UPphUfuu8GfmZrPmZiJwhXFbJVv1ZuqMzUxm4NCq282",
  "key29": "4AxmazeJKHpeVj32iQuK4nfg4e6UHUKVSXEmnQtZtSzbfBZfmrLHoyJW3HT83CnzuVKxL4yB8UbYuVJPD2JTHJad",
  "key30": "47xzRtCnKvo9d1dLHP5NPiN8nhKFGEnpzDyVAKxWCWtN9ty4thttgKhJZyvJRK8Q3PDDuombc9ukGGbuuXfZfMPo",
  "key31": "3eP4ZgFRm6Da9vEnUAunqDbY2qMKosGdPCoJPFQMuxQt9cHte6y6sRnaj6kqV9HwdXaGfoLavrRxpYM1XmTUj5FU",
  "key32": "NM6NM3aaLGsXgKMg7S9KiSco6EYvQF4cDkavSQm677J5x8xrpj9oy5v36o9n8UtP1KNVwQymrbWB4wpvcRZVnjG",
  "key33": "2vM1ZNjcn5SBfBfhp1kAc5z8CFwDR2aQ2SX7UhQsUKRSsn9ejDpdemB41aFMeGnbSB5g89BeKGVWabjnvHiddWA5",
  "key34": "2BkKg3JLAVkmDSeqs99RUJqapGYjpLTTdVTwbWT39uiL9fYbFfjXwgyP2PpXnfj8d1QafKxQsLXXd6hiNqVhdAKM",
  "key35": "cd7W6LXqeJGZBaAnRrumhV3PD6aon463cayt4yajS61hFEN3EMcxoNPsTjk8GiWwLJjVdCvzuTgPAfDm75zTBa8",
  "key36": "4YGT4jtsyy34J6eVfAUAA6PZSyQXcWq3FjEuyi4fYBJxMJfgVBuvK2dCzZ7w4fS3zGMw5pe9Zy8x2qWT4XxQigYW",
  "key37": "53SsbwLGUJQ9dk3BkF48J2yWgyzJaEEF69shsTyvw73rR5k77ziqYwLjxWGdpgKxjo5FHhicg545hEPKmuASRARU"
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
