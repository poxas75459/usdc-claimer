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
    "2p1Ki2xGbcALQ8YahUwbqqUGmr5hh54TJkN9KC1JFoemVzpo6MqKHNjPzvSE8q8vaNj8GH1MRThApLpjo7vuDzV4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U9DJTof5eHY2Kx5HCGRzgqk7tKchjVaeSnxL9GAFnVTYxiA4kEWwqNZrs9QQUBqEvkHnodUB1Cdgd6fTaeAEbns",
  "key1": "2ML2HAkrrjLFbRUFcuAxHpHBL3PgBJaVdhKwq3qU1cmDmd4fCewV7Sq5cAvTCyVYBaqAhdP2vDCEtRjoHgUTZ7nu",
  "key2": "66vjBnGdJXLdFXfGrT6J15gnRecUTccscgk3mJxxjfjfMGLEYeGxt6XMzc7A4uhp6JVBNcKxvGEnJ24v56GW8xHU",
  "key3": "32UioHYbqwPrGMgVazx8DBcbCbH9CqxJtCgKf1NKfkHbaqsEaFW3s1YqGJUa5oGwhd1QAEnnLSayJLUcWPyycyJV",
  "key4": "4Dw7HuVLTy6Mj8rkhaCv3meSTjKVgnu8b4PnfAnVautVDswGxbE8HNVouTDp4EgRXbamXrAMB58RwdfQ1eG9uPRf",
  "key5": "2aTNDLYYZsXy88SjpYiUeNtXwNAVerafjdyfDzU6JBR7kSMTebjTcLUT2H5o9jBdwmLHYjdgDYwhDUAw2VLR2Eni",
  "key6": "2iqKdhYbw6nwE4SMTY3LGx9W1oVkU3pinXgxasaQYMHxot8EG3WE4zjx6LMQ2aVLbpuphZwsrkczM4JgeSEQUZj",
  "key7": "3pSnVr2KSckShQyWnhnTrS3avVW8eGKZbAZrV9AAVs16XAP1Af8qR9ytaNTkdefeStFBX6WHS5jnY27Mkz7ARSgh",
  "key8": "k53PsCbzLaiomAywyrsm8CZZ6W5uAKLMcLJFPrfSQxt2DnRBbRJoHmmcr7zRmd8YFasFSKz1xJjmGX5jQut6XeJ",
  "key9": "5Y7TgdqppoJMeE3C5cKCK4K44DcEMWN2FkGPbbxpa96Jws6YGYk5ifDyaYV9o4FhxzZEbTe3uqJWX9t4XnXi2bSB",
  "key10": "5YPS3csSLJ8MxUaBHNAAAEJcZmY5u6VJbQR1jLpvM72RANih5BArqjJTaJcgxBGYQzZaTK6358HjpsXtyacyP7mp",
  "key11": "2DF9g9vRUVuTpBab2VFnogHegf6zgba59edv93dX3FtbveRNcmkytLASRmgEUvS78PWTs5ANVxwyJh6CGh38MRkF",
  "key12": "4gzRzMgBhzkWyAEo7XNcDgMfSbYuvrHHgrTWfCpSYYQNn44D13vY1krJVGetXs7anhVnq2ySCh2X74VQnejrzpdM",
  "key13": "5HQQrd9jXtx1QhaUshNMdoA53eZZ53js7mNoFzif9a7p7KQudpYBdMaepDHYnpEGUmjddhdmskrio8BszEAHGk56",
  "key14": "2qA7FUDiBmcwajABYmJW5qZDYDWqFEneQH3Vevm6MJQWtcRkWXDp94Pt3QBFfWn3WR5v4EAgzn6526fWdZaLFv9t",
  "key15": "4xt127TKaurLRjK1Y32TX6JLiFHTnBLY1M57een25EVdcGc8e3kw7vMmgaSBNp3rGmhMazKFPkom7cHCxGfxSACj",
  "key16": "4DCpKQwf1JNdENXVM5s9EPEjocRxUceSCMvvhL5ozR8ff9woVk7mNwn2wHQ9kSRH9Uu1wo6tnhTdHSHvnjhEuBAf",
  "key17": "4n3iLMi6sEYLRMdUD9NscUXDAj9ZEgEb8EKybhTjW7RdhmM5SJU59fkv6yXycc2aSLdwdEE8ocacrTBsCQ4Npxvs",
  "key18": "3d8XJsXW4X4ERj1zZc5Xbj8QGdLQ8Ai2U51xjf8ZSwW425XZvkJkShtGGHKvgEouwxeaeHUqay4SUK1SEjQfsXm5",
  "key19": "4ihkGso3k7pDB2aiFtKNvJ8NmetHQMnJzbXKGFt63h71tuSPK5qRvx49zaiBTuiy9UuuKG7WTbXDTGapmdm82HF8",
  "key20": "VVar7CXjNTP6RN52wWsDvyAFPBckFBDnFP7kBLrXXQCeU32xWC2LZkQjFnJkUWN6Negyt3jWcqrNp2jvZU72sxC",
  "key21": "3ttKe8coF46quQeTYutTNWv3xBLk3ZzMzxWaysuaVHWAj8jtcHh3o8SnNohNCaLrdfdULYRhFtJQkoRjhPGceWVd",
  "key22": "5X8LRaHc2L2HVfHmrXLtHyrZ4BdCHrFZrSMntoJcT8NpkKAZJSN6jucBmY7UwY23RZZvYDUxQFDcpFh4vnEMropX",
  "key23": "5hMWRzLyecqZxo5YyQPnadCctPLiVDguRPVUwAsVxhFYh7wQyt1oYdWpSyHWrxEvJKULwczSmRB43up3VMYK1EM3",
  "key24": "2nPh8v5KMt3dyGGCz6dwoAG32Kjb8z78QXxucwfCFXd2HzuKPt4yV49kXZ1coqTVAdWYm4wH5HV28Hp52qYELAuT"
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
