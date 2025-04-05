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
    "5MYEyewYC3baxMMqXkJrRGrPiDXNubkXp6Z67tVg8ZmnUFXyUkNoQqdR6qMcN45fLFF3gXXCWBLrhTHxzc33GB7a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QFVTjAV386Co4GSFsS4DjN6w4ufFmfwZa8jXxVzimP55jizu9nNuVYWJwvd8r3HPgo8ykMSVQgAJJJibTnqKyqq",
  "key1": "5H8iLrYp5PMs5xrnkbQ1g3NxowkpQekKNagcETWYb2pagk1FVhoTLBSrW5F5siqtUXWsPDDWBiaq6fDyQRuJYPi8",
  "key2": "4CYdQcJ5mD2dY59uwEnEY9HKFBweMHzKRzGcoEvNv6PyqoApQ4r2WrTqWsBs6HApdC5eS7GuxZnaK1HC1et7pGEE",
  "key3": "JDfZcyi9XEgB9pSmzJj6vniWykW9E2a2YUViEjBoYyVfghQvmxTNtetcew2NW4hjnevEicrZ9CBmin7Eew6HZmn",
  "key4": "3EjFudiRWtqtEDkViz3zER3gu5SdB1BCjX1xEZYqYzPfNg4SKjNQHqEjw9S6How29C5wNyjzW9CvEk3PdMSJmGND",
  "key5": "5iAexCnMnUxu7dDPAkh3bbWhtJVurtSYjg4fLt7FdroFrM3yyQ6Gu5HKXzeHmkSaqS41rQ54ueP94QmMhrVMg6o7",
  "key6": "5gKoWnMrM8aHRKxUgodLyWcCGoryhDG2b1MmpZsqeLDFJQgaona4zpGM4yMKr1yGxZtR17Mz2M2hWwanZC2UNmkz",
  "key7": "5M2iTgUfrqCd3S3PGVphi5vcYZsw69g3Ram6em2dpCRFZ7bZLRdsbPBrokA7ko4yaXbeeGQZW76ZxxNwG7A3KfgY",
  "key8": "49QWxZU8nj2T9mjdaN9hY6CoSaFxbji58511B8ZN8zVf9TZDBoXKBqQmJMkuGYRbq5nbycQ7wyJ8Z5rc1r7kc2jv",
  "key9": "S8SK9yj35SsDYoaYzMT2QVaNYo9oRRNuhfWM76hYyRSb3phpcgBggHqaYq6k5eahSVauQw5QkuR2nsWrZ5JnwgY",
  "key10": "28E5j8zGLs1DgpFTCYbmYVMzPnybniqjPN5X41wqYobtbkrUb5ATxMt471E8pBpmLqkXbGQX5eQCjHZGuQD9xyjj",
  "key11": "21zeBmnQ1jY3ts6sjk8MRLqkeEbRD3wy3fV8KXFSRQ2zfeoGH6aqf8tdQg9iQihVTRgJxLrxd1Wi4ArcaK5UPSUr",
  "key12": "Rs1R6E69jiYQhE8HE8y6p3yGRaZz8KZMK4G33ZdX8pkjyVhDLVWwvftNqdi5NQNHUJ1NMnWBFPVwzXJPqpj95VG",
  "key13": "58xURL96zgftPacDHsxgzP1wPDKXxhe2BtvzzAdzDbts9mgPaLwxrPT1maF1RyBzBvexuwX7SYLeVCJTRWF4nKMm",
  "key14": "4c5PrpptDmvubAr9MC37huXrZJtpfvFqxrZdUJNTGy5Vzdc4goU9Y2M5XewhCfT5YD1ZBjmSHWNMz3J2rfBvuxfr",
  "key15": "3bQFRpCmJnxMZVwm3sndEzg4ptcJDZGQM4Lzv3sSn6nzu6aKUzHCKbvtWYTQ1J3tLdVvFLm8NZtMCnF86LNh2GAX",
  "key16": "2ooziK3ipcctH8sFj1S1eayqgSydG2F53TG4X2FHABrxoZJjQC5dRtMaECCxQsPvfT4GKndgbJ1TCkaDCphkbbwy",
  "key17": "5EoaqyknQXdik5hsjyGaWzEbEwnE1atLDCbytdUHoAWKwk64Bbi6LSnXr4kJanahTZ3GduP9KTveMrEjJnhrAV95",
  "key18": "4Zr9pU5GvXvpXoX1HqkzsQYVkeV2kK7bw5cw7jvSXyBwKXqUbhAcD7q54r41jhBALv87LAJVVbcTpyRjnR5Hnb8Z",
  "key19": "3HxePB6TmmxwBB1dNsRbVTEy5sZtJhayqHGQqU2Z8TziuXC7R8rsGtkVLK9AXaBd7fV3JncZ8JswJjTwHcJoQTuR",
  "key20": "2BZ3rMAyhAGAPrnEi1aTdSBvooZnLheYn5cGck3SAEXrhEGkz89KMAkj8tc5Wejq4q5jy5J2ujY6saEYQukzUNmq",
  "key21": "2p5fTmsiwkBL619cVKWgRZrwUz1gji9KVZarES5wYemkRq2hAwg4AaS1RzHuJcDAHbvAudJExoV6cjA9ATdg6uMC",
  "key22": "KfD8jzWtdS7GQVjatcNv8uDQo1x5kYZWGNGnY6SatQEyeiMUe9boXWwQUiFNgnG5PexEFp2UeHvB5UFLsxGqiRb",
  "key23": "4FGMgSwA4FBS8z3xyBTFhKKkriAYScp4NEYBer3Mymc7sKpMXzGXjNdnmvWxU34oBpjbfaf61TiVu6Xg3LL7yC7j",
  "key24": "5nWRTUYgz3tsibhGqHVZ3v1qfLbLEZ1iRVQ4iErSNH8rzYh7i2tbzRRHSRarEFjrUcSLtasD73FTw9TK5iwzRh14",
  "key25": "5Da317UyrVLGLUYLy1WoqqjJyFLreSv8qqXpVEDHkxJDdMQRBZriFoMQ7iec72vnAMSPMNzvZTiLfTzuGyn6WQXQ",
  "key26": "DYAQAnzQ8iTrMW4546cuooHU4bBF4RSHjNcV6FKa5PjTuaQUHPJ7UxytKza6HuVLP5xwBXwjAeFvSNvZoit44Xx",
  "key27": "3wApQGBh9evfPigkLzBnBapTWEvhtVhZza3jAgDUDFPNrwEiQmTqmaYm539wX4PG9yAeaek9HzWMbkpMaHoGivne",
  "key28": "2W4FLNoWHxBnot6nKNDfnkSWB3uN4rde8W2yAe6atJ6XJHb1iamWKbqRbeCZJgmaRyEzaiVUGVP3xHmcxW4Tw8cy",
  "key29": "5HMXpcxZKuDgbEHw88sCDdpvggpgsZfXmqevKMCHtawQq3r3p8ZXNrJ4vn61muLarMZvGvhbRBh4mh7qBfoCoCv4",
  "key30": "2YkLWwhh3UFMPwFPoqAEu7fvvMhcuiGXw64B8MByGSAdPzCEv5MsBPqqHXJo6S223YZd8citKcqfzdgApTqTUtxS",
  "key31": "3YVetTiVbQW5psKLJjhBTRWB3u6mkJF6j8Pkr4mYAMn9cVrDBPL2KVvCN1RrCjkPQBFKrrLExpDBMP8xqX5ytLNt",
  "key32": "4FK8gfyFYsN1tSpGLjJtVwiMGwU1EnQDdcx4MQwCxfpQNaFP295PgHLEhp4PgVeH5xLMidMcw7DHN6dHTh8tJQ1J",
  "key33": "5FkJ32nFSM4Fy6dn6u8Kv4sCe2rFSxdWYa2aW2sCMFP3b9RfgJetLpP7TSWG6gx1ogco57rvVyL7zF3KmAxyGBbB",
  "key34": "3oFT9m3xysi6eqkQfBmsQWpnpCzN6ddzeqP5Tpc5TdVWAyevLfuCRqq6TfjVAE3UQyvRwzxHvAmVLXzuodW6nnYU",
  "key35": "2njkjFQPuqo3RNDaJgRvTqT2ioL4X3UDWGG4zmvvVRWQnvyJ3tZMYctDuDsXsQeG8gVcCLeRfVG2nJyLoTGmu934",
  "key36": "3g5dYkb61FywymEy1D9NJkuyUuggqwrdkPJQ7fPsy1Fv23tqqNWMmvH3EWTmoi7gTTHMpqBqrHuVU2S26ikvnMdg",
  "key37": "2RHXd3mVnKwvMjQQjZotNgV6v72aus1ktiRQ3N3ZGMV1NpAEBqJEDLxVy2xfhXvEE3fSHEGMe1puSgK7KNEcwFux",
  "key38": "5f5ZPZ5XQLmCY7v3BiKyqn1mJbuWEogiujQt3L18ZwYabFqtGvf7JSfQE821Qdtb1i27XqfrWYjnNQUwGkSLDzg4",
  "key39": "3efyTBrFRC8w6Rc5oDDWuHABF3QgmKJtEvUmk5dB4KqhF4BLUdD1RfnRtwNNyeiZhFHXAvyyY9WaLoivK4udra5T",
  "key40": "UqJxyYY9BHqYrWCrjgMtk5hRLR8xYj2rwJmxMpd1zje3xakj6FjbDR4JBi9aW43RRCxQSYbhxBdcH71WFcooiT9",
  "key41": "5CWZZkNYfS1NbwfnFBjiQJVUAXrHidpcLrZLKJgtDwJr72fpKnvTKpjm4DUzqsiVqHCWrK275Wk7RaM4ZN57CcpZ",
  "key42": "3wy5QanQE1GWr7QD4EChVcd8mnufqrrijdmQqvbMoTtDAdNQw5W5SrGSTNj359eZMuM77tgXFDMYd8J5fz5DFFHJ",
  "key43": "taftUpxWokWYAsYHM6G3tJs2N4JnPkAmpU9VGyfjfhwy67Z3auSxyLr7xdHBekwLSfTfcQBJ7vbeL3s87oNegWW",
  "key44": "4wNzQnorTWseAPkQphivG4rU9UHGqwBo6FXBbbN8gma4hDavCpe5UEBFViguSAxZNoUKPUinKPGoYtRdgm1UKeii",
  "key45": "25GaTNdoFEeJK9v8y7uhvxTWtwnUxboEaSWZ1Tr98zwLbWz4Ju9e3RwynRPYRCcoegTE81toj4n33mXd7Bwoq1tq",
  "key46": "5irAeGhMJcs1Dy6dkh2v46Ze2EdbyFKjnvK1evtxjjU6XmvNpRYMry9EeFN8jAgMFux71fV3Grj73YCbj4AJD3Rf"
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
