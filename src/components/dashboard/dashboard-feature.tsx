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
    "5xprZ1CELHDte3StWjNiTEM9aN9ygEvGMvteinrr8pM3UaZBiwguPSAG28irZQ9wvor9WGbFBc1GVywgStsuahX3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R4eKGUd4nuGKbL8oqbViqR7Z7RKrgndLbeuQuEsmN6E6wir69UhHZQqJtM5wRTeYz61h3s9Q7gLvFHkmUE1seiW",
  "key1": "24jwQa71YquUviksAhYJ12GrCRghp3Mgn6NgYhxgpwPvqBKm6CgV5YE46LiM4S5VnV1HhxiTjTZ6py6aTWCWGmdD",
  "key2": "4LmgSw3N8FuFUCC7LScmg44zEkcndPpAy6VbPXLKxc76q3zVwoEfMZ1jMVYpTMfvZkeeKH9KbppPW6VEARL9jcVs",
  "key3": "RL3DYZwgnrebZETucc7jWcTgqxcQ8xCziCS3ZVJWftPDRBmjZk1KgtreUcXzJZRdvScue5t3iNg7kEvHSMn4q1q",
  "key4": "51FqdZLV9qZkd9T4hXXStTNAKqvXgXRxc3WmJwWMXt9uFFBfWnu5ErgU7RE5tLbqj6z5MdoHbege1iei643Vw24W",
  "key5": "31uGa8c6F5ZFc7HW1gejQadE4XGMmNSuoZzkbJtSG69hpG821TSccXdt2cU2fwURVPu3wXzEdNBv91xxDYebcpx8",
  "key6": "4ujF6ax39dfJM9FRzLsEa7znhugviUsFZjSemofg72qKufttfq1MiBQyAXqQD2bYWKdFe1qXndXpoK6LdkXtdCk8",
  "key7": "5NKbvb6oX73vwkvMimGtB6ycP7R38TkMuEjLBm6gp68fEmFbVknD5sgB28mtv4SC5RDEnRTjwLpF7WmuqPQ1Q2aw",
  "key8": "3pqJeotPT8Qx56DwoxhCKMhVHnJBMjMk8SPvfGip1j4Dx4ri8syinKUSTSXT7M8Vd3UQhBXxF1aLoT4vCgBHfSNh",
  "key9": "5QVKiAqBHvGKGJuRksgUJcd2shnYWhmMDM4T5D4qy24NEbNkN5FNUyohuxuggEBkZurMwzXJD6aSnBe6NNwz5xT5",
  "key10": "5CuZ9h94FQrus16Wonm4MyC4ZfPhwLBVwKcHePr25iP24RiXEC6uKXb6DJc1M7B8Dc9o4KugtY2gMLVJDgsfqhSF",
  "key11": "p4oBcnMFWJTAwK2GMaLAZsmz7LNAGpgehS42trh6EHY59uyJWSyvrzoun6x5FXrLawHCiGCH3avVgiSZRTnSmSR",
  "key12": "2YiyAdMHxMZCb22NirXAvUAMxqUuEi9239g8aFwpZnytKhdKSQ4jwT8JVVeMU4wYjmMhuPW4K5A7EeLUYYVwa4KA",
  "key13": "R4rtDaLtdxfjM8QkWU1xornjwSsKD7AaCHjhVaqibtaqZHdQaZfMEYe7rrnoQj7akYjH5SxnfadhxYf8JHcUB9W",
  "key14": "22ZqnGMT2mipzj4JTQ4Rhb7MxoB7y6jHYih4fmnJGZnbuZywXiR9j64ztY5fucLPcz3hjCaqpYHGLfeY5fixpABk",
  "key15": "3T3hDbyrYDZ4XJA1iCzXxVyqr4BzLjr3ZbTvr3eYVDAZsvP3vdXw4Lmfg2Qv89RGxqxkkW4qduKMiPSiSBSY2vh",
  "key16": "4p7vSWBW6YwSJFHDHjyEeHPLNEpzGXM58cLyYVNJZMzzWrRm1Jc2Z1ovDyranCrWPgoy2Hr31QPNtKFqZGzzWU45",
  "key17": "4F24rSwM2a1awJqup9bCoawZTajyw5fWpU4ZJdVfkZ4fR3f4sdVodPWzYzWtAk596xCYEw4b8UUYyLy5spd9u4RU",
  "key18": "5BtaTnFgwGf1gGpeW3pJ5ZorJw5V79rheM6PoG2Z9Nykjs7nqAcJjfLh2yJE1GRTyLc99mxYBJbYmDpSMPa1q8TH",
  "key19": "4fiTLw3qSEVwroCLgtxM6JUewn5KnvxaUP7kuAZapVzw8Sbihhu9P5B7Yk5AyuzjntnmZpLxHU6GnfyJE9BHYSVm",
  "key20": "4MnkcvPNsCaDi3MmHZs3MeHUdS6RnxBYABwH5gQfx19ewFh6SqUtT5rvUogwNVxFHnEnEj2uhioLRMmaZ51CbuX9",
  "key21": "2HU3Fnn1wq1py5PrRAJ6n93YmfnJer43Cd2QfMTjPw8Smb6bpQ1own9214k3wPEVaBauTm6jcUAcrEP3TpzP5E5i",
  "key22": "2Ly1ezcWfW8tMajwvG3WbWy5HNVdW2Qg6yMQpb8u2yp6DzsZxYDHHCF1rj8aNHzuBL6W3ymC2xSs7xWBBJDGY3mT",
  "key23": "2kZXDJSKwnBBSopTfbpKU5ShE2r689HZBPeUxpDNLfS3egbWzRijRCJNsbu2b3D1DiU395Nuh8o3wfBmAnNujqfm",
  "key24": "3acs9foDw4A8AUqzvydSvLNKkmHZpRZ5u5ji2MxRHZK8soS6swLpkeVWN1AAansaLWgGYQZErzXgCjeNdykLzu15",
  "key25": "3UUfVUrQ4rpG8srCSQNwnqZGLSumL5KYjhrm2TySKM8daCBZBGnmvbqgKo4onpkXDUBKwXtkXFWD1jkHF4XnN74h",
  "key26": "5ebxWGvQtJZRmD2pe4KWG7FZHMWmSAsJ7i9aABheuF1w4huRFLJCd15M5zWC8FUDvKNjR8Kzt9hG3dXSQyPok541",
  "key27": "TzcEVGK1aBrJtjZ4Va87HQihmBGuYFhnSTAiK8fJ19ZxLNisjLKpVbK2Bup83fJZ3cbMr6HBY55AYwMUM8Q2zJ5",
  "key28": "CJbQ72qfEA9ArAwQVP3rC5VcMHFG7duW3PxYjVeBS1sqLmCBUV3bEpfTWVjxNAYgwWgqvjjXhsC1pqPnL9K6Vm6",
  "key29": "37xCkvN2eXGSEwaexCXbZ9L4WP9pBmz5VZjtRFRDivhEXcFe7UrFLnY29Pgaz2vNgKgNRe8vydUHBdgSMTYYLz21",
  "key30": "3zntang1MEge1rX4Bop6KJGQA4ob7RQoyJMqRNFtLdA9efSyRsmjxLsDPpW2ZJhyoNLUk8SUZpk9YKhskwLptDiz"
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
