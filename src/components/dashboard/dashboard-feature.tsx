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
    "3FdhxuZbVpKUkcSwwWXkotmWUQpxKhBueMSRqZpff1iq7Z3gSMgCppEtDYNmemyfm1oqCJHT9EjK76ZL7T4iTVhU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kXSQHGzLfpLX6mCNS8FC2rMPn1M94PKwstB3UyUC7RGzmQmvvWhm2fDU5vytrYvW4XtZzFNKHAaanQWFK3vaXEX",
  "key1": "3qrvEBmz7o79ZEWj8iB7wURcMokVxXPhsfJik1WWEjrpcLJhK3iqfL3L1TCLyr8rmVKa81GMGRMjFKs6q1yhg3hM",
  "key2": "ZhM9s1h6pQMj8MRvWHrSgb1vor2F71ct1QDHgSRnncErGhfeRwwsUejPEbuC9ffmDDnkE5whYYGsgjinRphJE7F",
  "key3": "3mAmGC6ZVadj4Bpo4cFTQMCUY26tEoVqiD8NECa5jJga2jfCwydEGG4CEiFb2wwRBQtcUL2grGqB8HSzvLN5A3Zx",
  "key4": "48xzWLFg2GVtDiaySknZKB3LhGiWhytuhsFCfY8bVQfckAvSwu5erQKCLze7DBsX9kvoEMMM6Y7mCbdRziiC6dX1",
  "key5": "4dSETQrA4DD487LwRWEqTsqUPfC146JvNeCj23pyMAB64orx5jFZ7KSPeiAkm7z9MKzdTs363SKJ5owSG8V6o1e8",
  "key6": "5kRYy4vPKjcLEPzn63VVK2bd7QFEaW64ZVySWyTjZ4JG9LPpXQEvoWvur3khqSWEN8v4JR2x9oZAT6EbsQR1wCUq",
  "key7": "4Ty6e842xAaHEHULJk7Go5D7UDwJUr86yL6EB3e4uQE65zhLZTHMEa3wNaiAE4ZYNx4YoPj4HhrARBDhfjJpDd8t",
  "key8": "2vzGyZJyfbovTHqLhBdF6jvGdAJJeGpmYHvtn3ZUL6XQKtZ7ZWvBGNp33ybvZbSb5ZcFzZbA6m6EhKmpBHYhupnj",
  "key9": "59JALcXD7NgX5bAvUf2ULTkAtFVDezN36CDtxuAh3FhToki2Bwgd3txgp6kEmggTCSiuL3uSixw44ZnRX12nk9XH",
  "key10": "2uH3cnrUYz3NWQH16z9AgD7yLno5bbaPcHQLPac96SrYP4Fz7ThhjbRMj5yXtcY4QSEWWsG9kpUzXr8yV5eoUodA",
  "key11": "BL5PsFHMUu5vzT3J4b9taZeRLkFmhkPzwDeGBF1AV9P1CiEZG4BffKnCdcHMP8ZoevBVBB8G3sfkMe5KqR3v99E",
  "key12": "5PwzMLVe211Wtq293gBDtg9LNaMEMZGKsjFyriDXJCinXeSjpbtLfqdQ3EyaH3xrqFCN1bs572iBt6KXPebgHHMd",
  "key13": "4AHYC1qHwna9F9t3Ex4ASh2XkCu1DqH9Rngm3DgTDNDnkeYMREPB5UtuTTiZ5R73wkxwPYFUm7L1NX17zK3Pr4BL",
  "key14": "2Ri5MuzWg2T4DXr4BX2vYpgxaotczh2kPQBk9LetYwXKWVDUtjtqdopTpW4fFLuMNYKpcasNizHnvEc74zYtzc4n",
  "key15": "UXE8bUP98pFHyEB4c6zCUZfFYCAz7c1TDotLKo4LdApb2YgqCMAecnYxykbcQbK2EMXRMXpKhRTir67sx48Vc24",
  "key16": "gpBL2epJKJMCCWiT7658pAerbcEgRm1iFirWUbQwN5R2NzPGiSYuHZs9xEAEhjU8btzK5jDeBiZUQ73dn8LKKE5",
  "key17": "3uuqgqeXdDQ1xQEsQm4FjDtNMzKCkoNYNtfyAVaA1C4DiimX7PCnRnCiEexxRETNs3vhAFdf5jyVBhusBJ3ZcXet",
  "key18": "2mjMfVwJ9MRZuyqgjQhgoUmtswdnN3oGbwGuJ9grbHLj6qe3EsKGehJUe6yF9SBcD6iCqpkfDskhi8mKXSG39sUm",
  "key19": "3MdLEfu6LbQHPrhU9i7zVaVC9nCCvo9HtJuysYBfB4agUbRSvAYSPS5ep8SuyfXyzjPrmzTX3erSwDp1Tz9CG311",
  "key20": "66Gg32qwTqD2h5DzifjRtcqTcK5P2Js3Z3THtqtn6iCGNRYcnEPfXrr5THBbtCb1VPo994rAd76tKq9wGcqZ6Z4q",
  "key21": "3RSULegAkoquNK4dkUQTmHYwz17XUVkc3y6pCqVW8fgAZtW3JhzUCMps6bdCFxLLuRngwaQKCzG7a3i9rULe8cYi",
  "key22": "gpt5m23Urctfd2rRYBSqkYyzyuV28DUnyNikFpXRNf6WrQnQirbHAoYg4j3aCjP5bUKjt5yBwZejoZpwLLjRigX",
  "key23": "3uJ1Pr1xGEevWHnrgY99XhJdfN3UHeUYB7uUPHRMWCs16UToBQBx3kAKj8sQEwSDvZQY95RbjstuhBbNQ3ufKLvD",
  "key24": "42U1t1kVeUgCNCvyPvn5bgVugjTyNK3Et3wU5FHhSrmMj12Lq9623ogSZ1YTucBpACFpvGDHSCVRw92ZULdZRdAh",
  "key25": "4pAyGSZH1VJBMajH9Nd3mY58HRdE6zQKQsTJa1j42T4AQtWUVi6HkGVCxaAEDR6RhfN5apKriXer4FpNDRgNEExp",
  "key26": "4xAW5twkFZUkzNkoR1zMtkK92V66na87xkUjtdomd4VecQ68Cu5booz3jmXD6m5m9UhDL6F3XExmX9xvRWV771ia",
  "key27": "5n86B6ExG9DfNAWQktW1nopwjaPZurTUcbqZmkKKRdjQ2JLhE9ueJGHgmZQTbmwhpyW7vRoSQPhnnFR7yofRkMFX",
  "key28": "59YB78feGgq4YH3eFHMQPPdGxRHTL5UjcJqUZaRE8wQPnE2dxvEhfHxgZycpUNsSbazdsJqh6v7Ppt64SF58oB2D",
  "key29": "5B9STUaTVDS6FRHHANViiWvgKAKYtWoktwYgWFCyVt32MRa19hzWWzZnZCKkKgxXrNKnQULCY6khUj2Jb8tMzqyx",
  "key30": "471qMP6vYcaoneRvHiCSh6cvX7azRvs3BcJLLwpp3bfTqMbpb4yuEGj7h7dDn8tGZB7rZbRKznupDpFKTYRs8rwe",
  "key31": "Si2CuD3aXPEPDYQZ9hjNW1haNDMz6VzAcSC8UscoPXRzQsM6mAmzDiqKqJKWdP1sz7DSvoXSLpHmj2YVYvAYRPw",
  "key32": "5zRyXawNq6sDsgGR5ZacNFNtVsAuKjYEN8XZiZsKNj4RcSrWXnPVnfNz3GKqrCmgaTDBjYxhZmqmUvXR9Sks7kBe",
  "key33": "5SXKq8Xix6qXEqZchkYK5ynsDtfo2xa9grGR4jX2YGcKkeW3zW5k49JTXiEiNa6KjAByKoBfNUBG7wx7L99nbBFY",
  "key34": "41gunx7qkfUgTfrsqk7dMdraKyiCmCmUcZ9FVQMdiFT75MZ5CBaviWqi98uPTD5kphBpEFgbE9v7dJQ9ha5vEkfR",
  "key35": "2dVaFrVZ6xYCADmMpPVabDzWrsyDJC58Ft3QxhETdv2nAiA3tAQCD5mEdaV2Z7AzkjQLQSWE27TvxxDYbqHCSJhE",
  "key36": "4zmU597Bo8mzU2NoibJhFpifyQfaAAMPxv3nQRqcM9BsRaAN5Fj936GeER4DyxP98NoXVi3ZqMnzqXbZT4GCrsXq",
  "key37": "5fhfrYvySxwDBAFDveDkj5rV7qoUx7kHQRG6XS3fdKCgTaYXER2r3EvQm39uko4pWHcfG52H154qaYqw4DfDuht3",
  "key38": "2giJS35Fvn98t1Ux4Rsr2dzdCKDqThDiFZ7oufWKRUFfWu3RaH2wKkGWnxqwWZiRgtj53YyiuxPW5MyhZLydVDc5"
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
