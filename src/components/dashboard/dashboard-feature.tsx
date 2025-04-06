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
    "3fwBbsW3gM3wWndE2rqvvcsrR5UgyuD5HTpHxxd9KY1v8MEPEXX6yteYhNuJ1X3QmZEwB6LnCQjL8YeBZFpHJnzN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iJPVxR4LugDMxZS3UiJkf1Ui372i9mefCuEmEay9tU1azZtDX7Bcagq1PJsRQrzhCJ8coeyADnU8THSpeEghE5w",
  "key1": "2vNjdnnj27Y1ao24zZ3MpmYqz3xJ6exoffeZuaERetuMGQ4wwjbBxvuJbnXBW6uTzDWaJS7WJm5ak8JekbRxR4eu",
  "key2": "34X67yUm6i2TYSmyNmQK2SDeoPkVteJzvdNKVpGd88fM7XrJHXcA7Fm534ezAeG4s3HXUk9yhu95P9uT1cxmrUp9",
  "key3": "3zuURsE2LzqgXmrCCmPNyhD3F36TtfTarbwKD5kx7KXcdbqmRbZHPQQJzWHhT6cbiJsAxGDQTCW9s8PgvEbxTJy8",
  "key4": "dFbC3soD4yTFfoqepRfW96HaoEbDkkb2puAD585qz5U84T8eRZbmZ58NsYat1gjLT1GY1oaANgQURpnKTE1ioA5",
  "key5": "4jTsKNoPjQPGgfvBAwqbHYvrNSeWCa3Rdq1UGombnVXo4DTNVXpFcuEiocnn6cqbygYXD2Wyoq2z5sYFKs8yCqp5",
  "key6": "5DmF8a9srnCa6VvYfYeCdmuGCH11TDZDfkRBpFzFat5SFNtys2QzhjMTVqugW3wgxc2J1jazSxs2rQ91Pz6LAvXz",
  "key7": "3JdpZVYM3odRAyyPZF6CAvm5DF1QQ54Jr1zMuMitfRekCMuPb4q41HxYZTTxtr6tmFdLsGtSgPnXLmcnrASPpX52",
  "key8": "oZa7gH3A81XAQvUWguyjEoLusc1R8rSTYUisjeeHMa6oj91kDLCf5ZYHcke3u6f115c9KFdiufBExaEyF1RuVKw",
  "key9": "2GnPjfYrpqhRGTmhp3GugJmifnq3eZ7xPU5jwUcxYLwLNy7GJNyA5MUuc73A3Yd7Jv9hCft3skkVofw9bZWrNTJt",
  "key10": "2vNynkBxAhuNtB84vXuujmeAiC6YgU3pvfwHZihKvdNYK5QXxo37xMAesMLbG44djegpHtAd7jDmJRVWWJLRsSgd",
  "key11": "5utAarogbhcPfSEmVSDDMSz7aQGxUrMAkFZ9TBXkB9NeV3yM7N36iQNmvE5xraJ7bRystHqGuLLRsdQDaDTBH1j5",
  "key12": "2zLyDB6FHHZw7Bn2FkJ2fkSZ1DeMaw4Qw6EbtBguZ7M4pkdpwacndgRXndVWZFjT5GaRrKXA6juDEq638SjFioA6",
  "key13": "qC5APY54Seu54Eu88oDDbKPwSkd6pXbNL83muGAdYxJWcqTQ4M8K45erqhLfNsCX4eJWD6uFRR55dDinf88NkwY",
  "key14": "5JBhSGq39LTsJRJpsBij7ctWtykdKEoovXUG4ouqoqWT3qJTWrDv4wgngXE9Uny5a6NbkaEcERS9x1L28owXptEn",
  "key15": "2bc5VwjKMLofD5CCPf8MyXahp8hVgJQ4Bsowd5NA29ojifBvZYf2EHkRcaT4Kx7MX4AyBiJKKzgXt6KKMnfjR2Lf",
  "key16": "vVyhBHvKExsx4f7EFiaYWq8r3buckbT3mwUXSxdYHkjSaoANbmAHNL7E6gJmTBRS562UveFmq4VcA47E7HfpqZF",
  "key17": "29bHJZxEFX3tfbtXyVPns38pfr3Uobp77t73mLZwYVjgHAiETiMPmSjhv5TCxRAormi2sGUBYw1MBmctYDWB82J2",
  "key18": "4GyhjZazN7M2QyeUixBjcLmRrCzeL4GK6Zb8PkYFQaXMop7XutD3MVWFA2kGUkrtSBRBJDSsFGGkKXyp426iCmCc",
  "key19": "4DHJm1i6uMisJQex3bSBM4vHNsYXsaXR4S5HZmsuy12a23X25oi1Tzaju99BYgTQUYn9LqoiimbN9vAMYGF8hY9N",
  "key20": "4FqLLBNituLAN5rh78gxnCRsZx4HQjMR3afZHNDYZcNSMW5reJPitnVBGKeKEPk4dUKbxTQGzmK3EHHLttA7c9kS",
  "key21": "53egn1BstC5ZkPaNqjRz5vbFRhPNDxbt2XzbUP7hekxBRwGsJRKGUNFbhY6yMe7dPxxJcZj3QvHTua9hzQ3pfwy7",
  "key22": "2WTFyjas1MD2LmpcmBWLP8GuiFYqimixKUrEML6vCyZqygpqJ47VTt5bz2qpGGbndBTRsiP4w7EPNPE3dSa9YnsJ",
  "key23": "3LnQqXKuh9K5wAJfdkFoRJ6RQV8zy5BNv9T3UdW2TNeaYuoi6NQpJvmvntJBi37TBVodDRGwtYjm1nenctPnP379",
  "key24": "sFcpPR1GaLAux9sbrHkbvjeF65jfddUSqEEsdJaUtiBguu6YkY8q7xMqEaCutaoSBKD3i3UJxmvVGnVACEjc4f7",
  "key25": "KT64xi3CYGsPYpxnZA9KoYj3SzVoMqgrnmfciqHaJLXyBgmgQJyfZgCjkv22Hsw9jmr1Gb1mZjNMnEFjkZYzLmV",
  "key26": "4om1aAgC99aazi7JASyCxCAUADMdqPRjyMrYw57fnwhJF8oS8eAVPTgq3EC7X4c6TY8PWMJeCYLCWNikdNbbKVdZ",
  "key27": "2x7LAXvFEdmUBHScy8c8K3n37nKBJvr1RE7dfuXmcfAweZUvDh6cht4S4N4oL2FtUGkZSYZ32K3mSAmoyz5ULmR7",
  "key28": "2mmrLMfqVwWaFfepnN4XW5npANoQg7B3dZ3qNimLDH9dqvUKDYg8gBUu7RBoebyrk77VRJGxN6g2jECqZ8KqrQQ9",
  "key29": "56qHjXYVw562yvqe1WDfB6j1kP9jjoGtN2pD7xmmVbjDCdLhEwkinq6rdKSdnZeeSVcsreFhffYLcXMNrhLxT2si",
  "key30": "4wkPMRgP53ZxU2fNNtC5sRJDmohfTpYhE5z6S37KFneCobrHmeyQETe2iXH4zpkTtYgXpiYR2qNJsbLVhCeVsbKj",
  "key31": "5nL891dbQZvWfdBgBrV7pn5EGcH3dCtAYytorJPongbD2etKx2RzRZNt9kqxccEyXJmhWjVYVXPNuHDSEwzzP89t",
  "key32": "xKYcnFCepvjyTGktUxxcxuLTj4dJzz3cxattMEpUjcqNoHayYPyJVqEpe5Af6D2WLhacy2MUhWAgWYpQBsqY2U5",
  "key33": "3L2KSSxkJoZ7iRRdQgzCEgTMiXDa5FtpcMX9bTZeT1dsERnZcLWorzBBeANGtAARBNYShCw2HHAbeXvdspMLpzCS",
  "key34": "3d1pSYdXwDy66dXbgbppXB9iSWfSu6nnkUSM6KwmQ2vYbVs5my9P4d7E9n7XL4JPBdmDDpAbwRMfUULWxi19Dwc1",
  "key35": "4EfVA71jX9HRimHRqj3bwa7Yo3BiUosicPUpwfJFPevScrcXuhEse6GKMfGJijFGxtAhYpYZKSRFAX1QGGUGCoQD",
  "key36": "3CGZWUaExZzKdB624ZTz9YUtGBi41LhL38WJinfZdUdFznzs6U1Rb76sxbf9ZBbsGP377kz7HLzcCWQhzrFzmKBY",
  "key37": "KAs9mUurc1881Mi2rC4noEAwS8umcw5FJjF9fhzGykq8hfYkLyjqZmxr3NPZo9Xnagdmb8tJzBjS1nC1v2MFS1o",
  "key38": "TofYQvE4csGoEdUKEFsDfXpggbNArrgEJ9mcXKQBFXAbJFMnBrLrEK9nsoGLKfKj6PyusgpJpPKNn421PNmGh3r",
  "key39": "mg259fN6qSEQBZVbDuKMPX1gRaFsWh71wEKaSLWytNgxC9is5X5gVdgPc9VMJ6dJ3eae6U5YSWjrbRZYjqWJtU9",
  "key40": "2YM1WVBVuv5wPeNSUnb5caQsEPQP8NdT9TmMXqHefwp1k67kY6S8qM6okFN58MJP1Px6Q9xDzrx7AwAuNMDkPEJ1",
  "key41": "2ZYa55HMH5Vonba9g8P6LnYyJumcY59RgZccGGjAi5a7d2Ng2X613Wp8LHAihr6tNNBQPSWdKTZzEE7aH1Mn5gK7",
  "key42": "4axfqed53nuUVvwToKkWCh8kK2Uv5LCHVEvv13jRnW9m2yoybbU8h98aanPHaUTHgigh1ogzjHhoUoEK9nZUMkRW",
  "key43": "5LdmRhitr1gMtWEj994AapJ2gvqyVKprwZC4esTbNRhx9xvxu91QKsSaJ9dNLXrsdcGDLXwjYQBnA6zT7EiK2kCo",
  "key44": "3pYYN7G3E97eCjwvnZsZWzmweKgYBGHPDRpkCypVhYWwcKt2ULzcFXc5MhrzPA8HGgaVqQwG1bePZmTeErqeeHaC",
  "key45": "ciSp5wtQ1c8qqob4fn4nFKKSriKFtQs5kmmh4uoKehLVA4Wj15aEeZ1BBUmQEazHdu7CtLvynCQ7tH6zqPMYHPx",
  "key46": "3jnsmgxmKmgV7L9z67jyAreFjBe8BHR8V7dzZEk1C2AVPXgmhsTTs6oVztYwaLyB3kVBF3qdApusEoc7NcXbr2d4",
  "key47": "459oYEFhFhekkYDQzPL2Sk8y7582fPiW8xv92mja97HYVgvQ8UiR8pNd1Pgxv19iLVRbpNwhr9D3MjS56VnMZr3j",
  "key48": "mHSViRX1g5C5wjauFWNGKu9URPcZS8VAJm8erwpvTwdkH4hwuQizmasjqEYxoHYzi58CQD35D7wQu2xRjEkYtxU"
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
