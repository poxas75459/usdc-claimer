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
    "rbs31SUjRMyQmNQbzYQ4EEPAk3Hbzdtzy9eVp6oviWFyTZr2GdxQde43tYqXybxM6rkGgsaTpGhNSXhBceh9p2x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mwFviPMWpXRKF9MtWg8EcMSmwFDpQ8snPuNWsteE9fhbRw8fCtkt2GpBt8XJnUzKLsWQpK5JANFvMyYRxDeLqDo",
  "key1": "S672SUGaxb3w34xJQ1pGpRkLuMzddXxyXERfhQutKXZQTkjza861i9xUBNBk6EWnMQJa6smx93pcqKb24GYsVLm",
  "key2": "4vjDpZuiHHqkrVtSR63VmV8a9Q9zYDndAgx6CG8ag3THRYaWEw1AjkXfMJMdhkW9esp59zZgb5enzZguKAzAzAjq",
  "key3": "fNTH7bEDJtXfbUBC3ejwLdw2abxNo7GXEWqRsrJAhL2JomHsvY4uXpG8SA3o4HWnsAitZEL5F3LHhNiTfdzbgoi",
  "key4": "dXMDq7fmS8tYSHKzEqTKkdJB8RrgUj7dchY2w7o2W94wzoNeCFrd9avYDV3oPUN1RUrrnQnT1d5NfmB6f5bE2wn",
  "key5": "fVj8A1FVpNykKHMgTuJMGVwfADjJykVQAtMicat19k98Bo64P5aTofnZsLHpwbe19ZcjzkHLWCMtxmACrW9JWLG",
  "key6": "34GsYzgzu1QxdMvKNRuA6gG3hU6ckPkHy3kFvQPJEPH3CERr48gedH5rXXhdZLfaV2d7483Py9WpjHuMQBNFrZwz",
  "key7": "2v3Ud2Bcx1Z6uBN9FsWyZgdTkQgpqrnqGUgXEkjZnwcLEpCjDHCMGuox4wTnmLkwJFG6Fy6qap4w8ELXnY8CKdqg",
  "key8": "2YPGy29ehiekiHvoYYBSG8MndNHRogJj2Dj9JJZMt3p1kNtXpcWQfMtBS1xmJon8MFbr24eGpi2Gt4UiNcEid6F5",
  "key9": "2SFJ8CZuHot2RbgxgiT6AwPNweyfmv67E6xRz9GcLwoewvoAG9QMiGBgPjGcVTSJa9Cb3YWvPSbennUjPdmXSWRT",
  "key10": "3xfbkrGsnqxaonrtRKTrrshU77TVm41pD2CsNeNKi95iKPbANoTq2r2C87vwYcyhLtwqFViXsnuQqN6Yd8HWYgzp",
  "key11": "56hxfCjerZ9Su57sM2TNtsJjqGBEi68HzAZwtswNbS3MLkf7sZSCKjyr6V6BwVsRgWEk87tznLhFxS4JMUKE8Keh",
  "key12": "5ghbQaLd8RkdsBqriM7QRBJxiTve3runLpXx8z9nXaMGyAJbjpwRQ9vRyVuexhneucUyGkrx5DJ7fQZUkhhhwc9z",
  "key13": "3o6ofVDQiSHM5PrRNNGQusPfY6rDpbjWm5YBfxjWX4EWefLFf4Ph7FEpxkCdZ9jrLdgDKZy3wbgtHpKT79XEFYzc",
  "key14": "KdPX6T4Waoyp66Q15Y5zz59etocDWozV6VgagFHcSfoGjJmAyDoK8tbX4LXxTKvDiKtKgQYvL51jvBcnq89Ersy",
  "key15": "5gn2iBJqpmHSkUcqRWTByrQSNd72Pbokzu73yNJ4szkgmyUTacHJRwr1BQuQXiSKMMwNwimM62gYaJaCE25MYE9A",
  "key16": "5zgERP7nLxobSBpgGXEdifM539jXNLijBJAhYceVPMAoZePm7wXubRonXZ65C8vEEhDwwuY6PYgxBGdk7b8QyhhJ",
  "key17": "5ZSWFspMv8Mfh5UvzJFnjw1DA9sL5VjpXNUUX1rf3VWu6EQYA4UXVyt45esiAJ3M3sSojEG8x1zLPQLDYdYmqbZH",
  "key18": "2RSmxRuoPp7PMCdm2AvXSgD2U1N5Sde39u5qERDBc5bwYugQtdpuaTYpz7FkEyDGeD9ptKsuT2aaUSDyxW1UKCYY",
  "key19": "3767DGRbUoSfTSPTx4oBYiKr7y6sBJg94uq6TuVjN2cBGn6tQ5iTNFHLpVMA4FXrXqeHLU6UTH2qMD57DwZb8g1j",
  "key20": "ngZq1FcDZu2cydVxQcrT5T9qRV4Jo66fvkgjAkmSLU6yCxRrbDNFTLSXkXwBtX9z6Pkbh2fVyr5CZxmkbHqMJHQ",
  "key21": "aZNtzeofJK2cLiFqaQmdFhGhF1hDMoHiC3JWDpKPb2ZWmwxc3nh3VoYkmCG94Lv6iLJvc7vX3p1Vz6EcThT9n3E",
  "key22": "bqbFy9w3AioxmTd3dSUBYaqCWZxLZdDru1izsWoWcPKEyZJEJbzRMgksEe1pYkKsUwhP4ZoYKpoXDxD1E1LbaZg",
  "key23": "3fc3HNWuT3Dr9A2C2e1RrSkB1vtmatSFerobyY8hMn45Z7LnXPPmNcg1NtuouERfHcfyQmqiMQX3CyA6CR2hgYCb",
  "key24": "2mwck8DSA6CUi15D7mofhzP1U145k5FAHze3fgnLHYxUrtTKnXxnBYjNPwELzDSH5J7WE63a8hDZz5wAsZuEN5UZ",
  "key25": "2nZXtgu1HoDTKKhexPK3bsHRSshHzGrq6KLmrzK82EPVwtWG7Q3fogG2yEh2zBCcA9tBtKsRZBp1uXUoHzfoLT7d",
  "key26": "TU2guZcqtUKpy38S6EcbghENrSr3WoZ1md1y68akbf68smkG8E94suGRU94xGGzoJpA6LawzH9staVNZ5evgoBU",
  "key27": "5EoP1D74xkzEEPP2hmna7b3rh2DoLTU911UmbZRnPfavKUQPUdo3uUKDgZhWGaeVBUd4fRkMWjzSxgSfu79tmDGt",
  "key28": "4qU7csSjXXq2XJhLgRsxPq4RqjeDATXs29dRrCqcgSD7rYm9Zq1BHESXEexkEm1EYAtG5EXZ693fxqJZn87dbFww",
  "key29": "4HrtjoJv8f9A6oPoFkEtEqo68pNNhbx1RtCjjx41rJa4M1DATe6JL9ikCPiH57AFzt7K13SjFmzwrYAWEaudzyZU",
  "key30": "nX3J3tEH25VeKEqKJgWLPvL5FYS4XK1e4bGCPiCfDQWMmCDUZzDYuwkgVr91x4GUv7MnjgCNbxagTYTXDJTj19G",
  "key31": "3TrhnMHddMt4oL8uh8RcrJBiCuq56C7Rf5ey7MfFY4DvUJx4uB6HKyvSusMKwmFnc2i23cEXwTgFtN65jhYSB8uL",
  "key32": "2dsEU8K8pMGaRaSutHam4TLF9ApJVdUUhmRxFT8AgVxhFk1nik5iBercnTVYorh4cCBbVLS59tfJ8ydb9eHqStQD",
  "key33": "5QbBZHbtqvwhWu3isAwJ69WUDN5ak5qyQydGnDx4UGmBk4zsoeEhSze9v8zHL6kCvncdZrgFVFW7oRm7yYHLKUCy",
  "key34": "2TXQKrrCA5HcTmjGwNabWGRcK5pAAVzF4UJaGJdKRBVybdLRuWLL2hntUC1VtkaWdeLXftgKSswofyotS6FbHKQU",
  "key35": "EYHk8JynhmvG6wwoQswe7yna2CwgeiihRgYBCLTagUHdcqp5KepgMfeqeLGUsAWEF7rGDvC7YDSM2T133atKaiN",
  "key36": "5RQsYw6Dwz3N26snU6rKuA1XRtAYyJjkhHDUV5JwJzZkrF5VVuHSvET6vcwKQBToi211rUbP6EoZYgN8SfTrQBCK",
  "key37": "4PXfxwzFMoCp5hyyfZMRC5yvydJF9zXqV9nzAFiieJWxdcDZqqfgvmdp4UDnUGk6Y7uHf9R8kaRjg4CdTKMEirTU",
  "key38": "JC9PG48HmpEAhT52sNSWardyHcKAnSTv1tpYSCipfU1B4AUyoJXUMDRmjaeqRMU49gPSpuqvRXb2NEmhTQAak4z",
  "key39": "3G7HGVhWXe7x4zNtQFscbAjv1TnCEbyXfFf1YuyWwv68Y8d9bZ6CRHjTtvYUKANrPzqL7XMcLWduNWJU1Vphdi9m",
  "key40": "4A4C2A8q2ivykKbrvmDnjV3gwa4dJXouKfSyqb6eFbf1oa8krLvn6hZFZQd1AWtzFXxS7rm9WR8kRu5qPCuVcJEJ",
  "key41": "42ycR2RKz84vcqx8djJ8jaRSormz75t3boeZjWMwo3dsAgUucTthdP6dCG5VNoykXpjNM42NRb2kM6DZLatxHtQ5",
  "key42": "2BWv5As5NPRTuixMGzKw5GTh9E1ThhSFgstHfzNTh8k4vATzVNyFSjhW4XUhyjMk74RXuMRzybPTxfXN7mjsPptt",
  "key43": "ojLsfjBxb24fp5aYnkHLndBf6Kq3ffcNZCWkGwjxUctvWwdJvmQhrnPyZH6W61Y8xaaWbtQ6QEVex9jBBjVSXQ3"
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
