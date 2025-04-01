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
    "3dByWee6rp1T47UpLJmKeKTAmrVZtGXeDfbFp2nkULtZ7GFHtQT8hLhpQVy6bmMyKFsxgyUfcoDDKqc66d9P8T46"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YUQdrJhLQLhL2cpRo9cbxk6hmZEYmetHQMELUk4j7xM5dS8ygGGjNJQpvGFuDXSsfCuS365P596N9Ltnm8DB9Zw",
  "key1": "2Mbt8KJt1NiuGpJZVNWc7bAKh54eVxgk2kAwvbLj3evYfvf63X3nkFFfjEdqTgAUBXwt7WWp93DNRbN9Hg8Rf1Gg",
  "key2": "2jd5bPqPew9Si8CoCvZi4UctKivirX35Un9Z5V4emptSepjEQgDVPQfMhUviciNGdANUPf1x2Q38w2RL1fhyfKu",
  "key3": "3vq71U8fbfmhyGQ86nhct3i8arg4cq5KGfhL21rPtPSFsDL3xvkE395qhoB3pohXLDGEdo4cuysJafFchtPLKaK1",
  "key4": "4Aate5HXBfpPS7cmKu5j8CqxEYMLpAv8n16QdwNr3Tk6vUE5swNByhC66KJ3WEphPknPEr1eQwPsnU4758t8sPEj",
  "key5": "3VvykgkCG7gjoFUY24ap6N2mC8XpmVvqKc4aL9K7tjsKesVkedCowcEvZU9BcuXe5fuKyriPWVqWNiWVGPomZhCp",
  "key6": "3CFPqV6ciQYP3QKvtKpoMJSMeeRZ49JTCSJnh5k5XN8zcRwKpxcUJqxn8WaRfBeN8Rgsfv3PbtCUUv5uUXd3Q1VC",
  "key7": "2yisx58f18icPTR2fG5h28NEvupuKA1XyqfhyhSb27rtdPvxu8Z2eLfz88NzWmLwZg8ibcCJvb4y28mDr4EiW75L",
  "key8": "3PVz64G43WbzohxA623cxFW9DuKVQDGpoNibxpr1sbsABK9DkgsKyLVivMi5Cehpz9y2FJvvMzG7dmqCXioT9wAg",
  "key9": "5XKTjDBJLXpP4mAXfu7eMEsfEiCs6NH1ri4znGLDudqGXjhYwSnq8vH757Ju6CZDSmUPbM1dyBZZ8SuvRbjA639z",
  "key10": "4pQ24rJkGnbbX3Bopbs6EQKZUxHriTvL2PRWaAxF4dg2cNqz6cp3qQAY7wNDWRL6NYGDqnE7THHqJ2phMJrWHSCv",
  "key11": "3rd2sD6wd8yQ5QX6CmXf1Qd661BGkmf6XAPGPL1raogAGAnSnADMG82AodH4YGsDiqwVTMD1qh1f4Gm6NQvv53c",
  "key12": "9GZs8EweewJ4Spam3P3NSZgC5FpJyJJBP6HTKmLv7QoDjbnLKsT5qWrNwzVWWomU6daA5h5aMjcz5tfkQd5ncGz",
  "key13": "2Auba1WRjZPyMR6vWYTZkB24R8ZMQnTL318Q4arUQfU3goefhyoarUY8QeTaFhN8mNqAKmoCTZcxodAZpN47GZ4Q",
  "key14": "3iSC2TNUCnUAdYBourGy4Y1kWrDFWeKCdxmykmfbZ2EJfhdwwvHTtL5oQoh1gcSkG9Rz2KmVCVeyVXqhDiu5nRik",
  "key15": "4qnLP66Qx9gziKKHX8bnrf5LKvEkHACmRcssAKnfRH4sd9bpfyFZqc8Z23EXQsnwfagKsHfrATE5upxDrSC951hz",
  "key16": "2Bes6iDgyMKcQWFNGopcyP8D2AobKq67PJ78PADuwL6boyiNStbuGAgfa8HiuYxqJGcD1hjfTukrwgaNdVFrcKoi",
  "key17": "Kcz1GLH18FN9rQZbKB4ischcYxAgnD7TpJcy2x3M14LGQQD8kHKhxrEqYRHfLpDDmD7cGQTj5FKHhhzaWX8D2z9",
  "key18": "4ibyYXn5JVPrNfuhBb9GGbTAK9QDcnZg9ZdgBXpiVzgNtmudYHCcyzHBVyN3N6J2snX2LcpjLmDGsqiEV4ie9RcF",
  "key19": "58FvJ5w9fJgstqdodRwMoQMqx87c8dXhamkq8btH6CU2Qo8dE1jyYEzrZX1HqYbK5tKyfbszSRQhZkoveBnhsaTE",
  "key20": "3PekUnG1tUShurYbriSReT1ngZhEwLJ5dG7XdZ9GR7FD1i2KnYivoffDibAXYyT3rQ2AmNGkTNVndWfRyT3r671F",
  "key21": "46YoevV9SQ3zWq6orYVP9yfCriiiTMLtsGgAjNLLUJWJFcB8t5wnNFwo6xa54La3K1TNszYNmWsNGC3upS7MqTbg",
  "key22": "3d1Q2GcmHSXhY86t1fXCwiKV1uRGEzYsRi9vgUNmyneELiSS8WTvcCwaJNvkssVBuUKhzGsF21NMrf3yiPLw9Afx",
  "key23": "4uZuEJKqa971JVWeixqo9jfYSrLvXFMVaDMfquhBpHeKm48ccKF9hfEC2HuJmeUKGUJ6n4eW7rxwh2XpcZWr9bAk",
  "key24": "4FNNvqk5qULo1NVqJJ2FjqqwCKrwrkfg7Hr1dE7kcC8JGo2xLa2K1NXSsYEFXDJuDvLAMAptzciYoGodnet8nGx2",
  "key25": "X5WUtKHBKjHLwNZ1DepdxVZgoobhfcpeRP4uBgLKT8kBKkMbLbYJRaMGpJUGEZD6FAYePxh5hQPLLowaoYc7QyU",
  "key26": "cYN2qD7NeHLtKKbv83jnTBpZXfA65AEk6ZFQzyV6VmMYwEBMqh9bP1tQnUsLy7YQAyu7PX8Q38EZGQUVc55FC1g",
  "key27": "4KoXSq18Qdaaj1x61G5JzVeEKBeJXsZJ23bhQBdjdxm3oDgYeTkUp8VPBo2nMzrvAfjWSrz3pmiPQyxBpZNnZAZY",
  "key28": "4tSdE2Q1PUCv7fRC8528tL3gmeQKVCNXgJrdCrnwaNf8Ed3e1UxTSL7dkVtzNeFZ67YqXY6QaB88jvej1dXBvMSa"
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
