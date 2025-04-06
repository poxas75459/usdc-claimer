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
    "5xF241JayUxyZQnBDDjRwBj5vrZeaeLJC9bzCAJZCxfNmYYoMB9CA1jZZMv7cBfCWnxwrcFseDMwNZ29cmr8kSgQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mny2g4cZW2bniMrSrZtV6AeVii11XeSydGU4QGyPSXTKzYfrGciwFT95brxUNnxsyhofJHEPj17dHdP9W7HdQuv",
  "key1": "5fy5uMskVovtsdsSCvR965Q8ESrbxZPTr85R7XN6UAHKjN6GZt4fooH3fSMq2ptLSYWRZBVYVAzDwU4A6ioBHqvA",
  "key2": "5kF1Qasc9rANnCoY6weYu5Zq9fMXwdDZfL2dCX4k3sDgEzyQrjgg1sNWTKLCxSTk4Yofjh1W6UaN3k9d9eqHVCih",
  "key3": "2vN5wShAUuc5abXKRwYCNJMWrfuwZzugrrr8E4TRPoj2To4UUUVPJhFgF9f53G5ib94Zv4K3XJCoHBztnkj8znkf",
  "key4": "3m5ikJR8vRYUFQZFiYX7RiMzWRNAwqRYbD1ZJpZz3uPskZKVGBmdtCk7sAYVTZdXvpHdaDFwFs6ajgcdpH3N5jDn",
  "key5": "5haB3F1v4Ua7pDb7f6iLpXib3eyFbWBh3PXVzdX7n8Me1wKfxhh9yBTUAA4xLrJRWRGZ2Pj79utrXqcDKNg6Q17W",
  "key6": "LwCyHxPkxwuPV1hQYx69ym2Lq4gGHh6ENRPBj4zjU2Z27dHCDrubz7CzMoUpUP6V5ftCdZeJiH8xKToJaTcY4BM",
  "key7": "5N4NTSzNsafu1Wyq6t1PKEajbPUqMP7rFC32jjmgheiMXUvr8RgnVp7QxyQeGPsfdcQ93s85PKr6me2s7eiiN3AQ",
  "key8": "3G8xdfrLs9iig3tjzeRCnHWwzJBbiaR1cJFYBCgijyumASR1PAUMhTysry3Fyq3TUvq9TrhfzyS3DDuM9NLAHuNd",
  "key9": "qg3KyqQEdREzsKo7rgb9WzEfZDXeA18PPQZeLBhHmPMnNNZzgQM1pjiD5hSC87jwkmLYhkFjokc5g8Z3mV2GVRo",
  "key10": "4ydgvdw6zxyMYfEsERrxxwkusoTRqBe6AskTwpXU5nXAm3NdNk4DSpMuYNVYMYFsb3Wx4ZMgJ1do5Y62o6ebTLxe",
  "key11": "2vancdUn2iSDPL5aYSTCzqaakzWiaWhw9enZxnsYaY482YyZb7dFzqy41cTYii3rgNrWXWQp48NEcS2hpywtm5ZY",
  "key12": "48wcXm1pw9L7ZcU1qYc8eKgHXtK6pkFJNqjcBxNY3UGgThAuenLPXxA6TFg7kmsYWCfjrZgfhpvveiH6cde7Sjqb",
  "key13": "2zkj7jEz1RRZCcPZ6BQ9MDxnEgVHmcVCQNkAUDcuuShBetLzEMyjCH1ewP7PwfxP9p1mtQEmWF47JstkR6kcnDWR",
  "key14": "3cePUr52o8R733X6jXJPWmDbw4D3iBC8LApDhENNBAzuJmCUoYEksnZ9ALxgmN2nuJT68QVXYE7bFfehW5qNBvrM",
  "key15": "3z4iMWkooaeDT4n2khfnvAV2VuNpZvRAnqoGwwbabFK26Zz4XCsw4Yr2zfhsyLewu6EnxqGzPtSC7c8rrKQ5RBaq",
  "key16": "5WfsXysJn4kuKg2Mzbqd8qGNsbT6QvixQmxCQvC683gZ1BdUiTPXFVipNePTY6Cb5EqQrt7PnYHaYvTuuHBPR7zA",
  "key17": "4jHhjKYa6YLyMdngFtD1YfpgNjinoiE4HHrv9wxaDrby8dRmpCprK4WQxiegihSBu8p1NMDQgXVKfiT2EzfvjF39",
  "key18": "4yC2nGMdTw5nQMDqZ9Ynqc3zzmYpYZQirYFK93hPZFS2jiqFPQmGcZ5bN7LDuoDmE9LRi8mfG1qPo49XXjTwmRFk",
  "key19": "2F7RvVnUix1nDRmW2Bu21STmpPnqXGFy3kWThBApRRPmUbSVwmynZJREm8VnNZPtTD4yX9paDNKHhxaAKAG5G91e",
  "key20": "B3c3wxK6FTv6E8neeL1x4JuAXox79oZEWQVgZcs2Me2raGFY1we98JFypT2dRh4c8DYybUiokWRiDX1nptsHYRn",
  "key21": "t6nW6Q8MQ93n61E7kGZdARKoGwyNQMFzFwKpF8dVkUw4nP4Gp1ExzEBtpXc1KHB3C7gfRGVgAv5MLEywJuoZhjs",
  "key22": "6TgWoqWJVd8yenouwBMBTBHdYuqTUsVVRK96bvksqkU3ubH4PVXQHHZoTMYQCdJxyJQ4313K8FAKhQthCriLMfq",
  "key23": "xgh981PCDncs6uBVNVuQkookBWXigxD2VrFfYXwMki2W8VMuXoir7KPfPxx8XrLcZ5EaX5PXSSnQp4xXZe5MB9K",
  "key24": "4j1qBRtdjJv7YxTG71ZgRG3Vi7spf3cveCKCEHjutPKb7u46f2pUmL5jsAGFPSL6Zzgfh6kqCjBRiEhX3Qprm5Ny",
  "key25": "3aqNMWsFi1JGkS3YvFqCic8gfVFLngEqTVqrM1tPRKUcV9QzcD4DgCn9ZGPtCSjAtXPUbhKHtpJFQd5m1Tz2dThT",
  "key26": "d7vpbZzpr9CNfiiJYgSUnHc3wWpGiUp4Bti4sfstAQoHJi6jbf7Hsa8C2v2R6PpxUBEQ6gumg1LFYDdSfobdYtm"
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
