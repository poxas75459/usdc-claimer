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
    "4ZzLwu4XECqNvmg4uNqGZGsyxuWK6NrCRKj3tZisAcdGrDfVTz4JsNmZZpULAw3tZpSrxsmENTujrtfL4wCinn5V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bVnK79GLExcAiqWCsrGD44iLwCs7JkcajTCqo37JWURvfQjsFthXYTLcRhjrvKwF8zGTGgWw3b3zcHyfi5npK78",
  "key1": "2n2UtBF2xqX1VhCSnWaXmVYrq9DiJjQhPqfAd5nXSnCB9oUfnvK6wDXP6NPJjb6kFCpvLRCWSBpbJDrxT5gXoss5",
  "key2": "3u9aTiXZPRXJdXJRKBVEdptbgFAfvrawP4ctq3X7yUpyYWUjGkMpo7cSvAmx9XcNgSnXHvt4Q5dBHKyP6ccF7NrG",
  "key3": "2AY7QyJBA3Xorx5X6Cq3bdyWpxWKbfkXsBx1ZSdtyFGNWJZR4J4Tirf48XZnLEtMUK3rDmkdkfsPAGdZA85RwAiW",
  "key4": "4NU85XQ2JgDVXSXEteyTHDG1Px5knGHXS9o6ruzYavcDhyvnjX4PpufdfewkTav9tyXNMJBqYFN34y4NiGqL6pLK",
  "key5": "5mZd3yFmMJmcoyhRmSvxjCFLDAK7bAmiWur8xWFJ6JB9kynU9Fe3f7PyQ3uRRAjgX8gRezmNukA6i9rRp1PXRmJ9",
  "key6": "dAMzKYec4JPxRvZFutheKmRtxGbrZyoHCsQFV6iDJD8NpRQCxUFSZd9oWabGDC1jg9N5ZDcdSy4emDcfXr1F9vq",
  "key7": "4YW5t9KvrMJQYJd8VKVnQpr9Q2JXoVaAjaBtQUKZdoJeKW8ktZKZhFsoBdXacbtLzYzqsTnC8cpRKJhBhheRMKWc",
  "key8": "jjibu5yj1V4i45MBBjzuP27TcVbdqCWZWaiDWZHAU1tG9CrngbgWCXPo37j2LiqNtSPraDWSRcyHz9tQjTCH5du",
  "key9": "5pzoVTkiorQsqBDxxAxLWviQrshwVfppgpPtpKonUK4umyQh3HNeStPuWGjnYrAZgmx5mBBUZppmkv2npcnhtJMc",
  "key10": "RaGU6jx9VfVWyJD1EeNRBvE7n6Cq8X5s77biQk7a3tbQptBhekwuWfD8RbAc6bWEouTMcsTmxj3XNs1SfMVq7Hk",
  "key11": "3zcNSGhqvHsezPbfJYpYNqB8XjjEfkWT9Y18jeTHceMMfjszEfTnYP3gAqkkqSK7uELPizbV6ta4SoSoxAgizGRM",
  "key12": "L4ogqKu5EGzdeuY8wqzz4X3hpENxVCrKqJ9WCFWNU1TvX1aBXwVKL3DXw5n7Xrou74MoCPnFkr7g8bHTgE5ASGT",
  "key13": "34rqCwTPGe5SR2hATpTP1Jbx68kykpXzKMTow9LXZ76eqF6mDynkQwVrGZrCAPemKerrvQiFYoaRJbEb63VUfP7Z",
  "key14": "3mmtRzBYF8RhN2NxTJYeSTQNymWFxNeyB7SFvFxL6Ffw6GN5PhUsreD3nK1e25dz7WHtApUvpHGW4JkCWGMB1uYH",
  "key15": "2692tJnMkRC7P995mpkeSv2fG1LLpTYq6U3AfK6atvZkGhkX73uc8nz7JLTfqxuBE8ajYcabMPD7QBSZGuxXvAvD",
  "key16": "3ewXUtiZ6XuzHsmteUHKHZV1QrJGAaFgSptWRsoUiYeu8iF6HMcrpKdPVzGntipnP3p3RhYJQMhC4iGfEv61jLQf",
  "key17": "2TJcfFLvFv9sSUrBhVm2DKm7X6p1Dm3xdgL4BZywiY1YuDAx3cMHsC4kaHc8LtCukHEHe1QjA7bzQRNzJRReQgz9",
  "key18": "2DtYqf4zYQZNH65tFBngexrWoXoiwYpq6DZQ5x7LTBhY6A3GaCdEeSVg4aAtdBw6RhHmwjbqgzMAWHGKAKUTCaj6",
  "key19": "4QiRNL8zrzDjeXCuTkLmZddKXzb2RtHx9vgCtLG5MUDawyZETY4iCCTf8kCdBAdfrJ5NRnBQ4g7tEA7C2tuG3cRJ",
  "key20": "5VxCFkx2VQ7PhFKR18jUMQoG1tvwbgHPPnMiLMmewBsuvbASdeJ5XnbTwBNWME8pdvTPppNp7EhmbzSjJsJfDkT8",
  "key21": "TqBV4iNqfK4Gb4AuoYgwUkkNY8TqhLhPiHVjn7c8JNodNkYCJZkcut8bsX94ZNgfw9hYbCq1KKz2C845u8TqZk7",
  "key22": "b2VsgrKMJCDJMyXkW1H1xZD9CHgUzDMRA8DdWnBRM1w1v24kAw8zJUZYJSzoweNMHMWD5TcJ5YaNt4pne9TtDNM",
  "key23": "4NWBaeSwhh5DapoadUxRGxHGfiyS7RBdJt1UZgKXXu5QJCHLSqCzsDVMNKAnFpk3QokENsghTqTobmQosM7HnJBu",
  "key24": "4U9Jr9q9hTqSgPCmyRLdbL4SR2uZsWCR5UeuGAj4ErbK9YH3ADjE92td35FWYQ5uaWZrTKx9zx7xzpatnw1uMSfa",
  "key25": "5RJn2L4qU217G1qxLHEBySnFx5LSZYzWHSEXLbtxLqZpwbDJUjxcPs3QpmeazQ3PQyFj5SMkx1gBVxBYMP88AGi8",
  "key26": "4czedPbrXhSY6cuj5VNN6pdNhK2DF1oSyAbD3pqgGMjkjkSr4uy3QbAUedxHoE5PygaWzt1E87DXFQFBdBpNyA2L",
  "key27": "4dP3bP3528xaxq2XSSS3QR7uEUxJ2QxBaC6NeNTNCZLFETZS5T55dBp3RH13w1hRKrDgyMcjX4A9icmbdcP5A6NQ",
  "key28": "5HoadroJWporBWgFjTdYjbroT8X5Cc3zmzZ3AyPxCFo62gHLr17vnxBydn5HmcBBZsMXM1VJXGmnA1D1pUXRNHCG",
  "key29": "3UniZ9AwsWgzt54p6KZMcNgTMnUh2Z1gzMEz7RjeVS9AUVLYxK318xG55sB9SrjCsF6HByjmvZtD4wkPJXffzWLj",
  "key30": "5hxKETebfu6mrGXASFpug8XHWMJL2WWuWvNsDxm1Av6F2EsCiNtsk14AtsPyh4vrxwi3ibWuYr9Vph7tKrfybS3i",
  "key31": "2QtypXVHpcNwXzFeF8HgVvSzqQMCA7RMgt7Bnbo2qrEzeDbz7rqFycY24mSUPWo8ZsuJN5FnFCfTntGj5rCMrQHJ",
  "key32": "qiLj5vqfZthJwjurJjn3NAkfYmRnFQMXZnP42SxPsRfPy6aYHJmoHJiWTNBAoudffZgVw7FQXssNhZC5mw6mjri",
  "key33": "3QAd3bBT7pdPMPeKh7fKZ8nb1dnpGMijRM2Xf2NFFFMZJLetepM4JebjjvsMyXwVfec1z3bwd1PT8xRHZum4SuZq"
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
