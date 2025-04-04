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
    "4mPBBoUMHKALAc6XukjQLqQB88HfeUeoFZg6puUohmWfgCJH2CybFbgZ9JQ5oY9qVenJn8sTkuC6rHWfbqBuFb7a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35M88aRP97yoUsPPkguLMfoHxAfFV4DwfTmyNU7HGfXJ5zHSL8CahGYXewp999uYXazJLvtMatg2oeRmoQ7FAgmk",
  "key1": "3pzjo9wiwQhT5THQvV5nHU8TUgncSr5bifAa3D377asAnTsrSrCvQGg92ryDLUY6rrt7TXGhDjJ9cGWUMMx9gLz8",
  "key2": "3vQ5Cd5Y6VerKaxaGxSq25juCXkKv72TZ6xQTTYvGLG8UnBdDfuna4xfJUpuU41aX4WpB5U6HAubYY6hsSTEB934",
  "key3": "3mku3NsdqyCEgjGM1AJUxWnQ6qZ3UvGaeifoJ98EEBksPzfFEqTbUNALvEAmn9yfeZFVMd8yWZ3oCXLqKJndQiNK",
  "key4": "5zRRkRHB6vy5oB9Ck8LeAspJ6QYeEANieVm8ufoGL4AxEkEUe6oxdGLjXY5CqRRyYJsiaZm3DotrZ8NzHAES3x38",
  "key5": "3eqNuQPuwFfvTxqPQyV1dC8JrBjcQRSKaxWrNmk7UBBdZn67XxTEwQx3UYbHNjRZm397VvS1aMro27uYoPSh6RbJ",
  "key6": "4GNefdKauYBAXE3kR8qfwwZgkfUU8gZfYduu4XnDnxoMkEhM1UdkMHgMMFh6PBjT8Jo5NXXPYJHbkhaxnTgyTVrc",
  "key7": "5DNFUSPZAeXtZpD62gBMVPQUKnjAWAgJq9hCMSCQBKrQgbw1o9tLVwGvnoLjMMVxwQpn815zWY1SprRiDdGANXfX",
  "key8": "5hn9ZeabS3rL2GJiqVhRSCeeWpDc16AYhRxcfDZczfkNYXKUVzekZoC3mVHpceuDNo9BQSfiHTsRDHG6XG36Wvar",
  "key9": "wA5NcvbYt91ZMb12vZ8wHC5EHDtDZppgoS2cusJBpk7nXeXdBnnZFwV4rHiRCk7k5vm19pTEPSJgNECxK9pHpNv",
  "key10": "5euEkweTr92BYU3m1qKBUZMRmAnuF8exoNH1KEmHhXDLBVRNshzknH91wkLGymHvE4Sti3k7R6raqpJrHhNo14h2",
  "key11": "Fs1a6TxSbUnL7TKhFSzTNffVSkaVZfzTedEeuGYQzxkSgAAdLqfk65MiU7Yz1hkFvWHNEtLSUED3ztxqgVH68uh",
  "key12": "3mmzwmzyaGBkdFzeHYwEQLihqVkH7hGTrue8cEFZUWjutSoxLamE9Xb1sgNHQrQNBg6jbVqwUMKt8gdNA4ED55tK",
  "key13": "5wQoJUSwMmGqhB1eMupbXWa6KND5dhiyFLkYVBDxAnm8XNYx5SJYL9qyAg9Gz5BzaA9CRokhkTUQx5qHWYkhfx2Y",
  "key14": "4gFTFZbJwPefMZzHEN6xVnnvHTumXBKjrE2GN3FW5M6Bg2yQaSPizqbR337d8st2buxjXhCCAz2a3E5kSFZiCHbX",
  "key15": "2W4rsesfW4xp5WbTD6K5Ms3ztUbxev6iW9uXzPneBKgi5SXGYQzehYYCRKcgqYiT9X4XLZ1A3fEm37yFjppvPFPX",
  "key16": "znh2JokjhtGBz9pstjAJddFCvHbsz3siCG5dae1XEngEhed9RMzko6jdvhENXKDg4kAcgo8jjKTV7EcvUrt2vL8",
  "key17": "2bydxKS7yLUvZVbG44GxUKyC8YgvfL32S6hj7UwEnjp3RUGjYatqn4qiXom9ahrNrq7nTKzCgPiHvP4vD18C3rK8",
  "key18": "5T5x8JgGZja7LmojVPqWZPKbc9Wqds9an7xEWyGp9SimCuLnSSPzwmsMTrjdHuee7ppH6xPUQrH92FbVCPGVoqCW",
  "key19": "5qPTcneDdQY4iSu2KVeJePxWo4B68roEAPU2gGnSwda5YCw2hYMFSMgJAiU2zxv4SAQ7egQbpxhVXrGqMocj9QEf",
  "key20": "2qmpJC7rcsuroLAGJofFY7vWoMCha1aWpC9MPk4ADbTFBaCz6qvStvwQqXqbUzfiNVXRUnAHzXARmGsgAGkusu4h",
  "key21": "4Vem8H99QM3CmPGKWqyDioSqDQKdsvr3snr682u4ywPhP9rPwqCqn5jo7SGfsde9hSnwvmrEdiH9UmPvE5mvJppg",
  "key22": "2rGPE4FFXeH82mwv6SxnKjDXJWYk7mviw3cTFCKjdTNhHjVGMnaizpPYWPJLtocX8MGpwhF4FACzHzNefwd8CmMJ",
  "key23": "25f8PtMjeyMtTzkd2nYP8fTyqCrSbyKftmHeXNS98Ad5zKrZ5v74sv3LcEyYCdb2bq4w6HfzujwT7LkWxZJ1zxAx",
  "key24": "39oBkvnVqCVANwp7H4Kj8HWtsspkdZKn6aJ7pnicYLaV1KnCzDzFtKPs6rE4McUzPU6cizp8TQ67q9FVBtTAkciD",
  "key25": "3ZqMeEwKhRpF9TqUPxnSCX4a8VdDadNQGWD5zSvWo61cdhb8vDzZ8C47C5m4NemsqwwhC6XXYjHEAwL6f9TUkeEi",
  "key26": "5PaQYsN5tvZzHF6PrhzvvHTXhMQfAsVFHS5qtEqDuvKjtoQ9awGkznzXBr2u4Kkm9VQYVaRWRTs1oSnm5jBLSHPi",
  "key27": "4uVVweyHEKFnQRB2FuowJLKFo2Gk82tdsZBm9T1DZUNsgRnPqRCTdFEkME61VRnMCTRLLyqxSzaBNSHxPLja3VK1",
  "key28": "A16aejGX7rsLofQTLsPnNJoAGMA2WBEHnbkkCS9nwxAoxgY7TnXgpjskKigN8UtermVb2BeUDsuigDm7aLG5ifw"
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
