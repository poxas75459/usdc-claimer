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
    "5SzvxeoYAC8o4sUikwSTvm9xva86hUXpT5vJ4NjMyc3wF811XivVKYKFvFtKrRZRnnVsjKemyUrBDd4ou9GXUXmx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bKrUaUYc823E55JwtqpcjMAxnt2hwY9BM18GzNZLyiUdCVyk8ekZyQuiv1XwiQsTrvVKJbFLwNpyCyry2NZa1dJ",
  "key1": "jpYc6NGjcJm6g26vgUfNxUyeV3xRWGUugunCDMNGkvPej5RdqicAAivnhZWuuJ5Kb3fd34wim4cRz4eiMWH7a9x",
  "key2": "5svSSytiHcLd7TuZEQnJnf3tPyK95qzZ8gJ72gRpmsnNz7NpKW5Z3Adig23PsKgD1AvTgKnWG3nAQps3yZzxxPnD",
  "key3": "53AUkcwoAna1n3vfwhrGz3s5ZU37hpZ4Acf55RRCqxu49ywHNwVC2qs6MxuHhcygsjnBtee8wo9RzjDdEcnz25FX",
  "key4": "3fZTEoZTUgpqjCkWTiL1k8AxBqFfmS5TD22XjTvGw52MB336BYwegZdix3CBK78BP9Rznc1UqnvwR5f7Y5B1iTYf",
  "key5": "3ucfhueGQsFPtJHjNxD1ZKyfR8yKRYEjY7CL4SVWdzbMHWBEzUEMQxxDKGs2EH4MfnRzJYYWE9QmkryZ5RGsspCf",
  "key6": "49GMqQVywwPzGu23d2ZriiTXrMNDVRVDtMLqDLcQvsyZBJrpfKrSmtGhYJwEuGAoDUyaMwg3XtCtLUWp7enoT4Js",
  "key7": "2EFeQw6DVJr71qipbsp1v5e9Q3VzFqjCMMSMPKCZGNuDMxa6HoPLbe3qb7HN18qsEw8Y89QvtTHEKQPwRhorM1w6",
  "key8": "2Y44cM8FZM9Jp3JJU7xjjNX7frntdkBD2oUPCSwQQRicFtotzFhHKQWjAWg3qHmcygbXRfvquQkxWqgkkimkd5CG",
  "key9": "2CV1t9DP74jDHhGpfissdawsR8ux69476ELbiY4inAWNkcuRGczDZU37C4EFEt3dJT46PrTrGcCXdLUqqjco18D6",
  "key10": "Ho4MmKnxBt2sKdY9xQSfh54YvRoSu1JYP9VCv1WdWZR7ynG4c9hrEyMKHQQZKdtihFF2udCYM7NNufABu68CYut",
  "key11": "5jssmNHfPxE51YRiac9Rob3PYjC5k5D8PmQtB7BZMaCi7ZLyyBApjn5RNoEXa41MPs9AbRzHFHZ4wSbNXBhSgeD7",
  "key12": "3pHNSUipemFEd53MNa7H83kPLu7c1jfrwXNYfcevLtjTmBN1GE3C2wuBg4dQqmvWTRqr6RLpTow8TK6Z4PiMekZC",
  "key13": "5NZu3qCy5p8AJyYVUbbbyCeYc3yu2JyC4DyepN94XZEgZGCmKU3g58LHcamDvM93AKNXbwaGLPsvot3HzhsHLHgP",
  "key14": "3wN3QnjZ7VCe9rD4eiza54T9WP5csDznziqbGJ3H6j8wrec91cAQ2xuJBhNsQUqBagDZVupj71sQ7TyEk9E7Njj7",
  "key15": "AvpoYweonpbHfZXYgfVyV1idAsjmXdwVFCrKX9WCPuWFrh2k11FgwDVAy1dmXNMQZks5CQQACGVUypVKbKLooob",
  "key16": "4xKDXvdfbNydn51sAan2PC15qa4FfDeArKUJysz7zt1kKC96HbaFaL81THujVV9erFHvVdGU5yy6dmspHxmacVEa",
  "key17": "2EA8sfjET1M5b7bq26N9kPkm326cXqLZmWcRDtuiLoRCzkv18NKFmJikxCKJMcaUZjKmF7adn1jg31nhABputHgc",
  "key18": "5GxopTDS1uhf2DPN97copAcTJRkTn2HXsSSLfCZaamEeGaBk66nWwx5HUyoC89rVZgEpMye4V7SLRcVmV6Nvvu2n",
  "key19": "3mvLjrJUVp5vhjBF7ynZSdsvH9BwmZ1UU1xpjSHNTMLCABt7mUmH6cmtwimtvCpxRCnyStbWL387CGQAFMx7a567",
  "key20": "3K9tz9XCgrAhXoS1urugbF4hqtiFWZ2hhPhaF2Cdu5NuHAT8q4kaPaqVHW4avhfeFpzPXV3bkmUL1wZDGsLK1A8i",
  "key21": "4EYyaHXE4y76KNe8ShtCYaLANqUPfviwmToFhQpd1h2sc7XSzHVwpJnRrokwZjyvq6Z4Wd83MRdCgGGE35UnwXr9",
  "key22": "5kaS35qxJ9ZmgaDNe4E8QHxptMtUbVNHZiKwu1s5gXCRMrfXQvgbeGDiJsbd4FtcatNnS9dKqkakptuX5aCqgZUg",
  "key23": "4gd9qm6TXrY6ybUHGTb4HknF8fFCLhagynx1tvAcGuUkfV3aTfaHn3HyWEVy8k1aC4uf1yFqGwqxscVUbnjVyt4z",
  "key24": "JT1yg2xazM3Z3TaPJv5ei7HCvWmn2WfhbMgabw8rWetZx3ChHcMkJ67jbyjriUNm4QW7QHCb3D2R2X4tKzF7WtJ",
  "key25": "E9LEwzn62u1mkU5pSb6stafUyMUTr8tnQu7n94cpC2J6gSNwHrpxEZEEuPPbs6511HwEqD19i3i3GHQVer17fSQ",
  "key26": "2DE81nHovRayHR3Pq22RY79iwUmXASXRtEXPe7qfhtJQAjfbguopHHE58ZUQiaZG1FWYZR3KSDj2ZGL6MHG3tUhn",
  "key27": "V7rZro5q9ijRSnRvNzXfyq2Lm2Df3rhgfHMisus13rShJUn4kCSkNnouF38ASWzJxwNZtEwvX98BkCg1SkScCY1",
  "key28": "6ttiPXfG1rPeyWWnHbCkeq9TLKSYeCUNWonEQBLMYJA93jSMESA3vm4pZf7a1ewJXRA27uF3pzaPJ7tehe5SVbh",
  "key29": "f4zn9RM6p5CswYzjuSqpzYV2MPWxUsj9x2mtKP9wHnrsDUN4tZCKPQCMSJpHcDUbAQubeWj4t2eixeN1apTPMKR",
  "key30": "4RydyxfmYFvJBTzoJMCxwX4pd96XaU1HXyDMYht3PLDZUtJAXhZQaoRLKUpFUtsYzKgCX9EeuUVVHz5fWk5h4xKG",
  "key31": "vhrmzVDh4VE5x6mF1o8p7SrSSB2D2MiL3MA6WZozMD6LQnS5aCPhDXuF6udGKRLFWFZHLVLb2FoHxMeQMdJMfhA",
  "key32": "4qt7XksYpASj5WduqZrxWnp43JCAQydkjzyPuyaBuE3QQBKFRn76jArs1mRhwRbDDxpD8hvP5Gyu2nm23PeaPr6g",
  "key33": "5Gh6QjtRwVpnL7J9eDPmQyhqEMSEMLU568nNWzHWzAR2h8xidjvJdiqMjRiDkk4ojEaRh1WyPAFaPKUc8UWzENQ1"
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
