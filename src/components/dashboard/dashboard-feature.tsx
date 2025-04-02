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
    "3jfuU5ho4K9NUGytnjdj3kF8xGoNZB3PG8o2vij6HU3Xmbx9CWXEbJWEMvpb39H1SGHXnJ3eYczCEbZPgh69pn3p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PHJNr1garGunp5kmBhoWUJBJ4mM4Rx5eqE15xZ97GpSuyoGi5i29ixBHbLdu7va57doigmxA3CPGby6MYQmrGv8",
  "key1": "5fhAkoQChDBtPvhiYo1HudKcvPnDzk2iBrDBG5La5Z3EBibJhHvsFvMQ9JtsXmQnZs1DSAVtuiACvjnZCNbXq6fo",
  "key2": "4cBPgBXNtDh9irc7EEyJ2feUfDvWUntP3rkGhzoquovp24PPwwbFNi2z9hfbn3HyHCnNPTd82xxgasix6SQkTggX",
  "key3": "5BXsZ6ADgAvzAwL3aYTPxEgCMWhcvDQpQCRGvdzAcwjp3gyy427Uxe3BGhinrWu7G45d3a36oSRYL75xMF2JLKhp",
  "key4": "3Sxqho4tA8sn6xZSWne7vfBk6rWtxREUagJ5x4ZAvNquY8YosWT7tr8gdS6UghRz1VPZjqgbUZecmRQZkafSbqdB",
  "key5": "5oQoU5cz7ssAyqHbtguRiqARero35S5QoMWC2F5ENJfq7g3wmgnC3yJ1FihE2zobrGur1WYJabQeVU8U8DMvAjNg",
  "key6": "4u7fK6QREVLgCYcDycEtcvD7kDn2itFopNV1P7NrpKugMzjEAraGNP6r1EyVDVTnhDdLBwxWtqTYG6BN4pWQt2gE",
  "key7": "3wAkzZYdBW26A6vSt7Eum2UGYccaju1sP8CctmwVQQ5csG5Wtbdmykr7syfdHw7bhDySxJ1VqqzRyjRjCrM1X4BU",
  "key8": "65AP33uEKoVCgLPcH5g2zaNRxpJ3NvBXDzHA7trPP79hNnt4ccv1jaJSP8z7Se664LvHYnQYfBq9Q5gnu1beYKMy",
  "key9": "4G4MJ8LcP8aZeMxbu1eQMv67W6Y5aV5YYEbUa9DErhNntNeLdYdo8cNFkc5Zs3rxqeBPm4zSRYjkCDbUZ37TF3kS",
  "key10": "2Z4LtaKqSDz1kqD7XyEWgkjjwJgVLqR1Ma3ebMZJQeCMfGLqxjchqxSVmMHTtpZp8zHaSH2GxJtyhkBGKK6XmExD",
  "key11": "3CmchyzkdeJP6P941VBhz1dBSmzrNSxGSt7mmkXUdBc1yWwYaRXcCikzxcx9xTeiKyQeFRUVgBY1bAu3MSPmUXuF",
  "key12": "3bpVJDwzhfAbFM198cjaUJLYbmo7SkzYst1yQ5VTcUiLysnDibjDijJfn5P88fcBF7fZqNPN3cWU3HHuH2PvEaFE",
  "key13": "4mT2JUuWRLpb7G1FGuYgwahiULdzGazUPoCE3J7yEE3E6bNgnTNHDu3vEhdFZMkLMaMhagmkHxcgE6nJNGrMbBm9",
  "key14": "3yo5n9gmC8ZCmmxvi8Y1kXsFH7nyDHh1SC2vWKDynLHzJf4FkYDQUhPVYEz41aM6chthayzskcMsRnU5twuc13wx",
  "key15": "58wfu3WWd5ijN9GL1LtfrdFp8zJ2P716FGpRUPJouqcCj74JBsUPLo7YwVsR1gseXuURaTpDA8KEfQKrvqLD2g5o",
  "key16": "4zwXkk1yDuiJQcoRBDSGt1sLkwgianaFvU9jV8XFrDS9vrv7bLhrUNqXWh5sSNgSvR7fKj38kCVBx7Smz3K9qf3D",
  "key17": "5zqrmHjbz6xhhbSudKv7d8MeFhQNNiRneCe53t4diZ7aPZZWZsULw6HSmXcwMajbM6SHqWJMMAQ7DKE1myDMztvf",
  "key18": "4hzhviiRhvPMWRJfgnbLa6fa5skSczrPSaeupHsn3ZRK7GouTM9s7BtrsBQ9vZ4SKFL9EMqH8oDW48fMzVsnXtmi",
  "key19": "5w9VvzUJB12GyE8HBGSXHHBZzGi4J6KXfxWgDyZawGmqdCKwYZoQdQ4J7pQN7k4QywxRzptC5zjhDzKGYk2nHhKp",
  "key20": "5CUyvVDVgHJwXwwuRZSmMgXijNtYgMLMfZC24J6HQGGVwjnjkUKzZa7WrF8z3CU5TsKkzmCj3WYdsLH2egAUALVh",
  "key21": "4XXZgoEdMfE3RNbU2gscokVdGZVVbK4EBwrV4muY5ZQx4BdztmSnfRkruB5ALWXJUhGaX62SLr5WGWwzq7NXhnCN",
  "key22": "62svxzktbN6tPhLKrmvRckCH8nNjZ5oHuotg2s1XrScSebLwaSiHD2FBeKkyzFsFqCqzQdsLSRqxuTvTkTfk44SA",
  "key23": "aQ9RvnBVggAuXpV7SFTg3bBGcraroN7opUJvJpyMzEkpFw4t9d5cAUPrythWqftjSQfvq7EaGXSnwchK1MhaQgm",
  "key24": "26xjW2vTgVcWZMEsvi7ps7e1bpxHsGKz8SKseBAJjkQMhD1bZCcpnAi2E8cFCVafjuybmr7ojc4jkbiC74JprBkm",
  "key25": "2CanKxzzm1EPYoJwXDNEY9qhkcvE7zeabuajtswqrDuPRJJvbwGrreNsKSLaBS4cDd23gwmNjDa7ttvKujYvyCWM"
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
