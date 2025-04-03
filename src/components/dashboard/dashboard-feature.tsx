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
    "3dk182tRBDfRiqApRZUBzHuNdypiSbKuTqGGX5rZqxuNzc2GY1RHcjqKxXW9uB3qFipuS3ykc7CPToTo6rbKv1k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vVBU2xyQo6CeBDQJKysWGKsRBMRGkARrd8BzqfqKrN4NpJoxuDGEghWsmtxRQND8HLwAUHADbpJfQ3CDKBG31dt",
  "key1": "4h5rbyPf9SPjbF66FCoYK5jVCun5FoeNLaTjrBtiuxzqXU8eWSQrKV7nZ5VAsRrBb4X6ojabJWwrZdcZJKeBXZb4",
  "key2": "2zDZ33dbf9L3W5Lgfmnx6VVDdYjCeertqGKrUyT7eQwefxaBqV1gVzm2qs4QNjkk119s9rJ1wYMyMJZa1J43DrNA",
  "key3": "3FPkQRd6c6gT4JXRVnjVYWKxeFdqgDWEtoncfuWs5akjTzjuyGh3GqgGkv5cbTSCidnryCuUVqfmBTX5zR9Kmy5s",
  "key4": "53ztFLUnuH7Asw59wNAE4hcuZQudevd7v1TSmMvEtHkDvWi9H6Cx7JjAhSoa2oaTRHQ9wxXqdfGpdd5Y4936B7j4",
  "key5": "4ckHMzuiLo42h7FxVtaiAiCVhLeU7pK3PxeLpg5Zb7rBaMQEiGtfRaWQZBV5AqreBsrPBt3rQySaZ6SofbuS5q55",
  "key6": "62Krncz5TbtH3uAZG7aUjAdU8G8T9s9esMJE2TEgj69bf6viXr4oc7MQXbis1327TTKQswqAaKeZbcjPG46yWrpv",
  "key7": "4RXeuQ64ovxS1jxfhKtrpVEVPZiwFRdJzFFCeEHcVJDfZUYC4UZCKE3cCgGs5i7rsgNh9iMue751JrSmCdVhcTFH",
  "key8": "5cdBi633qeoLUayBpPNRt7Dd3KZDTv66piP8YvUtz4g65UNU4AuyGg9QDoixahuBRXrNAtdBmsZgZMRAxDdvXtrx",
  "key9": "2U7XAWBa7axnRT1NgXijoJHwJWyNGxEB3c38fvkivUr4j4vtX2LuCRC53YsUcoJ1e8xddWYuMpyTDWShGY3pqy4H",
  "key10": "2dKV2qECgcEH47ZVTmxsxeda1BcDHqaQyefgxJskcwVRhRLuxT3rMbf7GSuMHMXSuyd6SZAbbKx9rYKkyCCw7fG9",
  "key11": "3zSYRft3djrG16MpETHVu1XPVg7nV2znTHFvJ67dio98UqqPpRrE3JQUVkMsmdc8dZT2DB31omMz8xLiyvcCcwC7",
  "key12": "5P4wE3DQG4DTRcgSmEZgbXrCt7wYmhMLHGwDJXwPZwEK1yX1wjxhHfpH4faGrh44YxJCyb9xwEm9DxpqCV4B5hY2",
  "key13": "GYGqQQaDgD4rxSekBjMZY3CDGxGUG3MALuj2z24yNQ7SscmJNtqeT24jQLAE12kkwDXuwYayxKv6wY7JQtzf7BY",
  "key14": "a2ZC1a6S3sCra8yMpgNNQmpvc1MgEpEqJbfby3z326EUHc8xiAv8AUzdCLU3riVGxo3g4g5NSSUdL2UUsQs3b21",
  "key15": "aMcWR6rVB4Pizso4ACiArGv71nqcf9kBowcQFWv5mj5c7H67X1hB2idiHZoxgm8PopFBhNKLKKZKYz4WTjrpvGA",
  "key16": "3gufM51WHvcv6LQXHTea5UehrECzD2RnixakzfCo46hwsH6p5ntzsbNUFxawUiggSBgaHJAuVm8Nr56VDjxSjJVg",
  "key17": "Zxdf4iPdssniPJpDeJyQtvWCVg4Q9bNJxWcujDsrauUwaoS8x3jMagzNZ3RZBHmYM4yUF8T2eAxMmf9EzwHshEJ",
  "key18": "2mGjBMLo3oq3XJdTJ2MGHrEhvtUeAn5zHYB6FqCm6Yqux1MZNFD9cKznK8iKYJAukHAthVD4fDDsfGrMXvqo9cLH",
  "key19": "5XDfJiyjSg4oQKDTsAsBJfZHHCfeRMyTaMZGZEMuoWTsUtyRfgnjhALqzgdUQVB1ZQ5W986eB1VXZYndC7WyDcQq",
  "key20": "PHWG8ZRm1UZkRveufRSLogQzxV9estkRqeSLKc2gCj6oMhDCpowuakz2BrqZ7HUTcktqzPXv4duQa3F1g1tmoaK",
  "key21": "3Vj5sMoVhChv2iqNGmvUkrunAfamVJUkK97zUgcLjZGpSzKB5yeAVLJ5QJ7iYC8Jkf2AenCSr7oyMEHoqNq2RQxH",
  "key22": "5UGR6DodTMkvhZV2Y778Ht8xdGLYU2MAFuJ5yBsgTujc8gRK6fVoUAyvF7dYcZGCpiZbZ9rs4UMQiJWXYoiey53P",
  "key23": "4puddaLeT7czddj636VMS57KGwDTHKzytcd8YzkrY6eniBQMScqKXeGAtPRZzzJBzpxCQzKvFhn3ofa9NygyW1Zp",
  "key24": "5yo28Mn1ZHKGqQ4PRjz3gFfCiVBAYun1x95P3ifLZDrYXNKxtiVHXgRdHmQ6DW2qnVZg4zG19v5TsMq8sGHHN5Ru",
  "key25": "qFnGs2iYYkTsXEPTKxTZezofRbaHKmiq7cQWNPmRAaQ1WaqsNL77SwMi8WJ8gF1AdTBpf98QgUy7GYMFWPzVGtK",
  "key26": "3f1aYuRV4n8MbnKARjxsM1FsdaR8HEFbTUkehW9Wfmmod6MkcpYs1MNgVog5TMByRigGb4Kg44QKUUBGErRj7foB",
  "key27": "5R6a2siX6HhWexLmjqebvwZRRYbWhbxjNymaAmE7s6daGthY7ToqpiWZ9WFBBbh5vLm4S7ZSfAgTPKRGPUzExqU9",
  "key28": "5QmnqvfZygy7Wy9SmeWpyJZJGE43CV5nKpByVjW7dGrPzmqxHoCTgRh8Q6RrdbHGjgtFSWc8EbxVsZEeya6CFhta",
  "key29": "4CkPkcL2RSQuso64ZALzwZaKqZBG38i25xxVoXDL6KikJDMDMjtdFnZDXTBiWxxu3eQ4t6Dn1cwEA9sgtgVTYram",
  "key30": "64L5rwyCv4g7U1B2hkA6mN2KzcJGPpM6tgFZiKKJJKWKWV3LCWRwPD9KFPc6zQALA1APe9Ndxv2FmVveJzyE7VfV",
  "key31": "ikXxS1L37my1LELFpDDCFMN1WCCHiL9Bs8PwgdzSgZT1JuAAdjDtRDEv7grPitgiicUdu2ararFpizqvQG4AEsc",
  "key32": "2MmWcsQdTi7j1uvRwToqJRfokVQGzQ7SeUpKSzpkELGSG26hUFHqRctaiiFL44PfTQyqNPEaVeAyVqfTjcNAUqht",
  "key33": "5AApGRJatxCQJkBwiiFiWG2cG7goPXsZy4cvXTNSwpwgNgrTu64Qf2iiwKpmUWVEbKaho8SyWrmsVQmwwu2gCyoL",
  "key34": "3wVK9LtogtDLCeTbDtW7k4gWD59PeNWnYwbB6a6RvBMamZJLXa2Vb43p1GkCX5SFkgFysQVRSNKEz1cjEa3CdK8i",
  "key35": "kqUysa1d7XTEntCHpK9x2pPXpdcm75gJ9Z3R5ZqUCRBvBVghWY9b6KuU3EKwLakJarqvYSVxDLrpWu7t939vLUT",
  "key36": "338SG6FiYcT1JavGyaY5kCxfbcfFwW4R4QtGMNxcarXFW9zLs2736ZicBco7Szz8rL5mBLqACaef2yWfmjBpGfsJ"
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
