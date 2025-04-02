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
    "4Gc88v295r4uzHSXitR6gErkh9itS92b1TZS2QDJMYewx9FPevynijaTEyCU2c7FatNybKLqfGVedn29X2pjGHom"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9iQusrHsTDRcNwUDDsm5yXgktF92x1nHGmzY8Cqk23imjqxFHusqAW5a7e3dzAWNWzSqwMAPXz5LZgp2f8wYKhK",
  "key1": "C6EiUu9tKViX55FAqgh7KAXWqSvr8sEeytaHMk3FkN5AbJ1uWCbSL3uXcpDPnCjRkzYZ4QuXDDRYywmJNmwwUdD",
  "key2": "4gsMYzTNH31GivNdcqQyqEDSiQv4zuV4xz1t5bx2NCccsSUtyn1inbrXww5TvuKnRTmLd4zv4rKkkCCS3cB1iARP",
  "key3": "3zzgsQSL4fJjFYvab7qP7q5vohTPGaoL16eqeeAuLhtdenwaBZ44Dk3rtAJfxCDFcaN1yPkmRXV9m55MMN7ohY52",
  "key4": "3G6PJo5KcyZnpjDTrJy82JRAUh7Eo9e5pXEwbBvuWgLhWSXhoGmZsy6ZUvrWafAMK9XS5e8Bj88GJJ7oC4yfKeVc",
  "key5": "2ncoqD7NgKjvzuYrZgpBUKJcMzVzSM568HZRitefDpCVVSpAijHagwMrQzHiu4fWuLrhroRPgUheoK58ECtu1GGe",
  "key6": "2ECGeqNbHKydErZpgHpcJugcVQMN3zCtET1gSCpHBsVA5u9ezPUnBHZhyt3oBM9xpMM5P86suqvGqbLpQVhayugE",
  "key7": "bDSuSPgssvY9PCoRUTbUKxPXSz9UaxfoK7DbZTwgb5bWxRsJqzvs2U4WAwkKZGDzLZQBNSY4UTEC3j5iwc8mnhE",
  "key8": "4GhnNe3n67tTpTAfVZUwPJ3UnEmc1hqyxJs8tfTQsgeLRqb3yQB771UqzQV3gWmiAEvSVYdZ1ADraSSqpUzYC6WK",
  "key9": "Gh2xnSKGUNCyM4PuwnCQSN82zueXuNDw7Lvvma1S1FYLe1rrQadFfy2hV5PMLhmT2RitRZWSvpEdz2CEmmGZ2DT",
  "key10": "4RmKd2gHGHwb31e2JmV1rT7TZ1KqveCiTXg6vdwbKv9Fg8xx46M3hqfSyoC5wCoMEVZXfFKN8JdsS6qPgUdfe4cd",
  "key11": "Ss7Ez6VE5tGDdiFvex33krM7dwn9MvjNMxq9TDzHmBWYF1UquaNcCSDcNpbzid2Azo12N7piSH4aADpHenosKfX",
  "key12": "4Kvx5VRhX8HEcWYkPWg3TKRtXQUPJPGgJCP5E9d7RuHxnqk6CTE28X55REq9cXQZTZ6bwoMcubDAZ5h5vCdeKTxz",
  "key13": "5GB566W34viLWE3paU4KQuKy48yVtusw6xsDxkf3i8NMyTiCHL1a9As1grxAdgnJaLiJMsbj4GbjNZLFNuC1arzj",
  "key14": "2HAV4JbuYU3idBxnF4wxwLrZJfB9T1vzFafUvHcuVnBBaHZA7GKvdcZC4zqBTzs2vdCeqM6TC4UjUHxnLsp2DJN",
  "key15": "3JrWUgycX9YGBrHBx9TSetPuhpVpQwnyfyGGJJmRMfMKG2arrQpfc6qjb1kcunqMZZ3Af4x1nsXRJ9aAdTgYsndZ",
  "key16": "3qnT93hNC99c18gTXxziKbNpWxVfApcJavwzMGFWAX1Xxws85XqKqeEgQCcdw1fboEwpMSLxksWfyh9WZ7DeWsFL",
  "key17": "45XkU14wL8t7UeP7NPn4ptbQ2SzyrGird7vcgqxpKTMfPdbhXB34gCcQHJu5Qg8niG1d9wxD8yeVvWXbF8wmHG1i",
  "key18": "2jboyV1cgBC6EDWrfeDxJix1ogCZGM2onbnmhuo8tfmeQvUuNFs71xLibPhVPLBRPbqWcjZLMwFVShZp8Djf1F6T",
  "key19": "4kQmPYpcPY2mVqY6Vik95Dgmi2fKCGLx5xcuxchMEBVsjLLccLQ4S6LPkPEAwbZ1dQdKZRVyA3YhcNeWDG4G3Jq9",
  "key20": "497CvyCyqGyx7ChEDQs8sfq9SKFk9XxrKBv3s5zkARKYRDMR9CaFXznCnHFJLjU4CnaqY3fypRRmCMtssfxS9Gan",
  "key21": "5BvmX3atgnSYiqmmtRxt9WEgTEje4gPBTaogrjNcD9WcrRPsDXTfaDaXje3WhhJveC1o3L9C2NjNJYEs4ktpCbCx",
  "key22": "4z5UEYZgKcQqTX79k3DQfBPWWvEbGFwXxL33dChBjvTZXo5zJG7FCJFeWEXpQJfLUgspG2pDArj6RQsjoVzhJ1kc",
  "key23": "5Vid1aUo9rjU8ZN36G8Nc4Bu7rCgLxfqjtf9GXoGfsoqvcHvXptcRnRXHzpLEzdaWc7595zZbPNBHeT81kLQJWKx",
  "key24": "4VcSYLF8nRCRfgqQs1JnRsjvYyPusccn33uChijumXBZW36JLjrgvQ5ThmDxK7Mm6msJUo4dCyEDzVmJ5ee4Pbno",
  "key25": "F5enKiVKNCTjsUe5vxHQqvDYvvtLARBNgruk4DCFZUMNWg3gqqnnTA6FniKooVwdmfYPHYhmhTRRo8iMbT3jQNG",
  "key26": "4mVyyMznVmfXXyBBDvtDf8496tHmbKPs6cRPGFVeuxLSwPL1TV7bPYZLT9sPcDQYWaxpqc5g4YtJ47EYebTB5Rat",
  "key27": "4z39dm7UHgm96dMmoVVYmq8Sk28ceaT36KzJmyemVU2cQGiapQmPo5fP1AxQyFR67R45zKwiP7hR9smb3AZmXoDW",
  "key28": "2P28L4akz1GFieQFH8yNRR2KGUmwYwYmWVzCRA2KjBNDkMaSuLyBkVMXEKVmZ3dy1aPhxehH3F6XfcYutGWdy2St",
  "key29": "3WJzefRJVHtXHs6928chSff7N5AFTVszYAzjxFbqsTJmWCPJ1qjKVpGDfRpVRiCUV7gWH4ee5kkktvezFMxAxoL6",
  "key30": "2kze31iUWVNxCEbWvfRYnUPjj9q9wXusWh7z1irhLVKEkGHqFf1ohMvahxDPCNtS8XYMzqQvWu36X6mjBRsRYENZ",
  "key31": "gczLNFikzUcq6AmMMSz7k4hrKWWr6MXnnmjEJvD8A6jPCUH9ewJSZK6EqjdFCWeSySVf6oQkbZENeo3Q2HFTXxc",
  "key32": "44YzYfSLe291rspNQc9yhyBUpmeHvYywj9diRjQxt2okEv1zRzUfcqP3oXfz3zQsdf1o2gUCGHrRAFG6uJswe8od",
  "key33": "8Y4FJQLu4tJhx21m4WSeBqVBTajU8h63y7Ydw38ScrgJZCSQPZfP5BGoc1Gqk3NZ9Rqof7pm8SFuUSfoCEiZgc1",
  "key34": "rgfgWijKQnGELPUjkPRSkA9fL2DhsuK3Gt6ewLczfRivysJ3PzDDXZ3iERdkAT2UB2MsYKU4DiQaNQ2PY6CRB8J",
  "key35": "7ukbPNvw9CRgfpEkEmxDv3CZWqni4otZ6w83nBJEcwVbUTBPMmgsG1tBXd1c931cMQXxZtKBzS8uWv3SwmF25ae",
  "key36": "55EYGqHUdYWBMQX7eYBoSrovtUL5cSusfuvwdrru16LQUnuF9kAoEXxpdyAAbhPGDfvu4sLKGf8Ss9PqG5FkpmVC",
  "key37": "4pyE72FRtbV48SnrfXScDwGBsQnWB5RAHQuip9GB1E9nB16futTfNfGdjYUR8WmZeZwHVXAwLXwUFoTXrZ9C4TD7",
  "key38": "37Tzq9vLKd1CWbrmutVgDLLb1dtGjssEoddSLcczdKBcheyvWSwTy5V31jrkF8K613WUHBe3DAHQwqSr9VG54ZAP",
  "key39": "iE3im2gFvBgbuj7rmkjgLRUUc2i8ui1WPMh4twrtWZ78u6K6LPq3s4JxwRRS8nHmKdzdtanSonusraAmGoSFBjG",
  "key40": "3PeGTU4cPxT51axriA8RyK5zUD3TWokQCa264byNrrATCPKjmdm9of3kY1cGp5SPCVbamRLw9tMBaUyXxjoSZfWk",
  "key41": "M7YkMcfF9bJd3LoZNxmJbwKfw7MSzozWdSAUkrF14SZPSig1zkyQHokpgwNvyier8p412AGhWaHEcNctYxSmccx",
  "key42": "3C37oQpzqpzukoZ3UKnCeuexi3VBGHjYxAjJwif7ModQGmmPVHjvgCj3ZZz2UANzuyTjzdsLMM413EEh2GX41ARQ",
  "key43": "KFBYk5SzG6EeZ2EqUZcBqRUDc7JCdDiJHmiyyvHdDbEXMNHhthPqXFN5MDVmUGmq6y77KpG7AAZWnbYTd4mDuRW"
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
