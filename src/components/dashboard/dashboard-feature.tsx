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
    "5j9PTyJasHvHgq4BJqFUguGg9mx3ZxEFxLokoTMY5vvs2ByqCXQ2tk8mX57U9kUh9dKh2wjmuutUZdTmRqYcVkTJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52Co5bJuE9HnMee2DWfyJkcbTLD6GT4WWmcquXBg9gVRwgVQvj94P5bcbWc6pu412Wh25tG3y3GudgjycALxgc2C",
  "key1": "37YAytiRcdSPMG3L8RK6d5UaaeVq4LE6VMiDjPtxPwJ3B9Zbi6J6XUPWFrzuwW1Q1Gq7smaV5uyyg2ehM1Kam6wM",
  "key2": "L9WGN3gyo1mG73qoZWAgRgx4SF9VZPgXmQxFTJR2GkwfXkeunRwRCUbN2d4tG7sregaudST32993Z1wSgLxpkQS",
  "key3": "2US4KBR6zRUb5SrnbZE9hfYGvF5FanmJC5VuDRhhJV6SDmjiHp2ZCdxFaCZnHDitcgY6yzF733zX1XeXbJYB1Qbm",
  "key4": "5Yia7iwC4S1MnsLtqEmazozZC9Fgbfv1vGj5ns9GCz6wAEqu5biq2AWNDvSFK83jNniQhSGTKn4xDhghCdGLHYji",
  "key5": "4Ef4L1v56gvpmTCB61QBrpLmoEwWXDcNPxURyfRwnUpN4Uze3FZpc537J2LFQoE56jtkqayZVgY4PxzkFMTfin14",
  "key6": "EMSXVf57ApzmggdmhBcDSeMeH6bjksJ94694RkinnXrdzgQnfebt2CR3DAkpwqEA1fd6LDadijJTKTwuARRxPdF",
  "key7": "vhgBbMwW5SUgmt3kquDNrMLVBNArnQBpkBtjt8Rob2J19tkkQYoPeCx2ZxxKNq4E88WwxUshGDiFUmP9r1dbMeo",
  "key8": "VFDDz28QsMFdx5zjvq9HomZYZzenpXJEUYfwsEdZqYyfC3YLhGKfFaRMoWQ7tEtBm7VZfLhbWXTj4vYPmzZexJt",
  "key9": "2T8RB6zbK33UqvgkaU2zo79pPQUPvM6TUxTgeZqNvty3saje7uU5nUVUdctT1hZacwpjeFY9oz6XPi9fUdqkTdpc",
  "key10": "5SaKdZR1iggmnCQLozWaGjaEsnWVJDVyBfqrjiiN4jATZaEPikXnvwXUxA3KXybJgAF8cQ1i7JrZB9bHvqvdiTB1",
  "key11": "618tDc4XFBpL4hL2jnf1FYGbHfo3tejvmcCtvKpB3CU9dBZkUwUJubQsHzFPXEWkrYUri5ZPp14zydPWn1PbeEBH",
  "key12": "5gjU4XvbD3cW7S5MCJPZFXwqazDYAbAgGors2W7jMomd5uM6hMozFBWJB8Qg3mcvicWkfJmjGeRRYeCPWt1DzXBz",
  "key13": "MVmK5RkEQen4hqeCDaVEdvbV4R4wkNGci4wFejts46XxqzMeAy94hDQ8ZYMi9B3LFU5RRESjNnUGzJ1LNGGSb8p",
  "key14": "32kPegxJVTR38Liy3ajTmvqbDUesSRTqHs6vdJhHsXnJVntLWDnNgbhof4caho2RqBa4AU3pjjpjuLH4tMTz7qy8",
  "key15": "5QoPEWWLbuD13gp4E9dkyMKcnwfbRmmmYQwcLB3n44tvYkT5sR2XZj3B35GgaYgB1iP4cbUvxg3LUNceXJH6ji7T",
  "key16": "2wds8KfaVgezrosrMNxrfKGz5UH5kVABRUXtagqTywyZZgHVDmzYuaxwLjdoy4FJ3n7kPHmH3ABXMDGzuqW3UdJn",
  "key17": "4GPmZiUToKD61uvZDqFCABC57D4v4LKRJxQ4ZNnm53F4uhbfiFeouYerQda8g3zCFucWEp7qN7CeJPT6eZvpFqPz",
  "key18": "zRvxfSDHS6UhiLJpxUTWXomnk63rujwUGP9TnSBZ92kE1E7rdf3wpmbnEnTkmovNM6h2pe1iKJMJj98KkFpvers",
  "key19": "4R7hbQ2BvG4VVuQGAapowBkxSw4HzPJZhu4gtZrtgn2QEZQ3B27ZmVTbveZDPm77ayRS1QFVtWnZ5RvVnJbywLmT",
  "key20": "2HPGBxSMQxKkHZM3SZ53QomzaA8zXFLmEo3Xt4Tf5cgPt83wTpXfo81LphyQdKV1MuoPUTTvcaGiR62eCGxjLXxd",
  "key21": "4tmKSofpUP6rw142UGhDaGHxU8aXJSJhsSj4icnr8VhCwpwGvS9sA9jbHj6PCSQGBR37iNM8HvYzrrU1Ut7h9Rm7",
  "key22": "36n8uAarXUr4Ft498AR2LMGpxSTengoLeRqWknVFmSoq9UKPUx2X5MzqV2J3sQ91hRQEHPU1cPVQdR1qQyNBnNAB",
  "key23": "N5YaiPLYRFFi8WbHyD5RnQxYxKBoTN9cQ6n3SDsbMbVJL7w2fj57JSpdvfxEYee61mkCffA2Zzvkzohg19dLv1x",
  "key24": "65pMcVA9xNsjFMhXtT4mCGZU8oH9BBL86tW2eUG6b79gLixw65Ah1rPHTqosxQAXxZWbbMxkYkai179F8CUYgv4L",
  "key25": "29LYfBomeZjPn1pyEwJY3zE8QiKjuQSaXiouSHFaejZtxx2tKmjR94DJSfnZQoDJwVQjidhx1di9LYPSdGLDuDoS",
  "key26": "ecJD4g1kfsx4w1iwVnwEhru4DdLzQcLyJx9v1EubJbPaiwCSATA25tRamBRbh1fqhEKHyFGJyviDJmqrrtcTtTx",
  "key27": "2H8F5n3SP351vrE4kURxNiZZ6wSrgQpzhZNs5kd5Sg5dznw5M3Ra6aVHEAWeep8ZzaNqE8egDx4EPse7TP6nXcJ9",
  "key28": "wH4Yh5dxaWiStWEZnvFzS7S7btRef5xxR6LzgkZhgdLnzQa8982MqGKhTSa814SqJXygwam3tStun5q19BgYAm6",
  "key29": "41Ai9XGnmzv9s72kUq5mQpKoPi3bHYGfYdbps55pXrrmiWmmxsazfMSzjgo7LZFt5TVFoJS186SjnzxjKs28BTnX",
  "key30": "43CDd24hvaujdBTL2eLPjVG1RSbH1hjNw4o7Spd69EgBZJH8WGz9BjWeds2mvbRNk2h7msxfW8YmP5YXLtDecnDd",
  "key31": "4vudXp7at59EoVPgXQcGazTM7kR8yfww9WvtE1LUerdiGxfh6yku5xZwmgT3zXDtSG7LkV8CpmZGTx6DNrFkxoaw",
  "key32": "neDoWroubbnxywJVpSSHKYntbsLHdShEKGJ4v8w9UtjWw6xYPxW6gj98z7iXZJqDTiK24J3ZtDpZKDn6wbeFJan",
  "key33": "5DiYXvVGiEyFfR35bwUNyQA2Hhkb5npi4QW5jBBo7QikEKM28Nkk34CNR9uUwoZ3ytQEq5Eu9uJTvrj27Us8myDs",
  "key34": "GSUJCdM9X9HSC1xAhPFbz1ATkZ3bH68zanFKgjgf8WBF3PknGeJBQTMcy3J6dGBumDpBxL6JTD9EojbHvVWjn2Z",
  "key35": "3QiA6b2zuE3DdJVWGViwEmg3ShMcX6ns7GRxkeDzeiAoaYeVeTiecHwfd8WZjhX2WQLvY86jJZ8S5aF79FG2skfQ",
  "key36": "44VdrWuGcgmSKHfv9gaKijbbqWjLRvEiYrYXeTp6MtSEaGEpKPLiE6FRQrXYuguo39rWb8QZrrxdiBbur5tWx2DM",
  "key37": "23H7HKCTZ7zGEeF4djMbe2bexmjU4FGApXz6gXQeh9hkaqCVNNJ1vhDQ8gP1gwfHVQN368jbhdnNzdQXD5uV6tHa",
  "key38": "26mDpjA5YwBCPTBY3NH24EH2R89NpUQtJUnSteYzmJjM2A3yAuhwkqirn3mTnQmG33LjdxdS2j5aaXJKjcXHd68m",
  "key39": "UmqtwZ1eUf4sP1cbGWcarzJZgASG6EsF9gYpN1ejc2SwVS6qkkgNrG3B7GACGy6Jaqdrwz5aF3qCy5ZYyDd8JmF",
  "key40": "5G1PwUxngGnf3fd64g5vJNpmfMDLfVXGTVcR7zTAfGsmvTwF37kra1MvjDxgZoRKMTnpgKgSWhAfdoP6GjwJvWPA",
  "key41": "3svtjh6cjNduYurnPAVgm5Ya3gK1SJHA16q2MwiLqtHuCkSgKYbfQkrme6mLin5dzn5AMoEm7X8LbfR6F2QJ6N5f"
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
