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
    "nXSkndu46hgotTkB81pUFuidKMCjX4Y8YZaupfQmbs3hc1T4aYvz98Cmr8oFbnpBE6beEjTH4ZbPBmMYsZtqBwS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tHC8NynYTtuy2NAa8aZd85sScSe6Lm9xkU3KqPKyy11p5nFEa8p5yc36cSxhCkdTcVkJAcW8uH3Ug9dZdPQkxA2",
  "key1": "2RXXPWXnJt52djsMPQdy5heYyMTNqLSXrtJSpSPbinYxCL9GbpZ6iNJfukaJxLe77Njid4MfDv1vLEi9qWiU7Djv",
  "key2": "thoVuQbfNS5aBjk75TY72KEmeiZib9cpEaAEMPxBy1oukXZCqTxhj9QSZfeq4Qgw2H6qTP2FS1Eb4wzKPufysDq",
  "key3": "pXiZdKCxqFtBUXMU7rXhFjpYVokaPDPnkcpEg2MENxFj16VYUoF17ib55ka6RL35DvcmbLjXNnmeYpULMDZuiUP",
  "key4": "2tFHepfDyG4dqsnkEYxh6nUcxQzm72iEQ139mfnVhjaX99hyFq5LVLPPuiv7pQWJUSqJH6PEnfcFFw19oMBPDgf4",
  "key5": "LVcjoAUd7Hyay1yAieKpAKKPNqcCct5g64csYJDsdekSmReTHaim9s36n1omG5QrazCc4SGJ856MWoPMJRhQKqR",
  "key6": "4c2TPFiN8WJQwJTADbCYq5N47LKVQCS6U8iexp42fkEHFU2ZYBZnta9oJo1DjHN9he47JoTjq5cojR3hgNQWTayq",
  "key7": "2EKtiUi2wVtY8c78zdtYwXRjUeQAS9sDkHSVYs9dBybRNRoLru5p9PRVtZ7kq39Cjc9hVw7E9tFW7aRfHbBf5soP",
  "key8": "4UFWtUs9xPj5QfUzmhjaydEHJC6RNeLYb1hyAKpaUnJ1qJhjrqjXToYESsPP98tLrPRirYmrvHRCG2PjGTH5RgH1",
  "key9": "5q4wKY83S1qEiFZMBMUTmzaCU5NUwMKogi86Tej9FNZid1CtvoU8278oLHVhwsgRBjCPwFhDiMHDqscNJBQhpBVj",
  "key10": "5xgcxckYzn6yHDG8yJAPH82zo7qzqFXAJhEsGRpAiyTATv9G3V3rT1cuXggN4uZ6cKmS3E1MZFZBnvytBx1JMc6L",
  "key11": "4vo3iApSDdcMi24W8HHdjQCRcAqHfoU5vZ4y6fmPJnJSGDzE5Xyh4TqgfYYtZr8s9RutPecweWhtA4qXEHuWELor",
  "key12": "2Zne5XMccYLfWjpRhJJtVsVAPozkCE88VmW5pzLB2JxGbYJMEecjHS9dsQj9ierodxwKTK22sVF72z4f9g2jCB7X",
  "key13": "35Uj4MGuZ6vu7xsdaHWKhcAL7BffVcroBc2H4A9EEKeBFucjkU9CCLuab1haD3xtq6BrFpfsjocXZESSwZ285enc",
  "key14": "3wcGF1WfY7at3kkpJiTNPdBtij37CkZYBvR1s5bHkYXu8UgYX5hZrbB8zpha2Z8pR8r27ukRJcQXjiAu94uhQDYr",
  "key15": "4mPT8gBBGEjgNHZRW11x2Ag4fNfQeEKDTwbeGXrgf7fUxEBWsan7g7MGnDCMDhWVPhkFBZoigSUzTdXhaih9nYaW",
  "key16": "3TMxJhB8KZmKUPjTXoocuogHwgGfJWChLdGLjFS6FWVf1GcUx2Ymw2WJzFp11CSEwCDTteyb1xSC2UWsWb9yFpgU",
  "key17": "66YnrLEwzdgW3Dzeq2AkqF5vCkzo5EnPV8DaGpyA8pszRdBADofs3A9KzU76RGms1u1djS6tqSxWydp3VqjtAzm7",
  "key18": "5ZJDhNqZVxWNvDVwCreUhDnfWRLGdhagAiebbRWuQM1fRhR1oW2UsH3nWJ8dybXGPzkFowxS74HVmYdUQ928MFRm",
  "key19": "4sSG92Bov5SxwdAAVZZ9jimEYNLJrUUpEethEgxjvQyucTYtrkdRBYqh9zXrBjAdJFdwv1DnGGydRdGv1TD4HteD",
  "key20": "4CcmxBh9ZbcYxSywa5zMGJHa1v6AtSuHuwUEAnPvYHaxo8ZhzhftvGisFpy5Secb2SMkjvuFgV5hTDndgrvdbaHe",
  "key21": "nTFz7kK3qopa3XFG7QzqupopWM1sZ5ZcECTz4fZXPRXYSSguogvAwDMP7i3Mng39vR7tqyaCk4Ktj71aFBxds8v",
  "key22": "2sKxhiwqbDF3JNEHc2BJNuE6G1FYJxLyxDCG3YzWvExRoQJMka7vJJ8t22bVzzFgk2PN13AcSFt2B7NUD8X3nQdc",
  "key23": "3j1WTZzV1qcpPEeneNHPZesCuPa6HBfpWJ6DXyzMsWxQYNTjSu8iNyUmu62JAhVWgxSopUwPF7Mc5VckYEaMjuyr",
  "key24": "msPrYj29BEiVXWaqdm1fXgW7oBtKks1BqLqoPRStwyb3GBuDLKiRDk71j6MuBtZDRiV2J9dxXD73Bqb3fjY9sYK",
  "key25": "5qWXBJuopDXaWJxbPRbwPP7cssmhbzMfVeJb5ofGzSUVaJ3KSUhoSW4jrk39rRTft9WvDDyVGBfcA9a9PbHwCoRJ",
  "key26": "4xAgzqx7FnfGBCdERRcW8qcGAQ7L9Yjf3HtP7jkij5pnsLZS3szLPvj89zchWoMu5LgyzJwwRsA7qzwPZyGwwtuc",
  "key27": "b66LpKQepHwCX86fVfHVgqxYmNJMdnioaMEu9rfQTq18aJZjhfFhrvGYnSEkD2Az9vRyyFSveFYotfzjmodqpqX",
  "key28": "3vweqnQzosnUpaZ2Xw96dLzydnEE9cmb28Vv5gWhgdtDM1e6DCtznp5MhzjPCmy65QWe1k5uQWUDwnvaDzMUp7hw",
  "key29": "28Bu1kBpL7Nx9sLUDu28HPL98ofL6VTML7Y2HL8uoq6yqQbE51UARqw2Kb9iP3JTTr6UQKLUEQEcivNDRq8cmjbG",
  "key30": "2dA4RnNyep1G3rqXK8FnXnxfp5qwwqAqYDZ8TALcUGhwoec7eyu84MEKmNmh3Gk6ssgLcDCv4qKKhnvjXRsXvbb5"
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
