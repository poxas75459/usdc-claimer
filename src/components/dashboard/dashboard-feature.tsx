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
    "2d3xy7dU7CBkmpPBQtzvADe3fUTgbVNoGEpSuUiqsLXofkwrXJiNacwbySQdvPgpWoRtQbaTBhSUFDakLZoqQ9pg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H78764kcZ9RM11G7aN9csMjPumSwjFNqFgwdtpSG7PQuWXRq9BmqWkynfNJTkPZeJLdQDKRyWLTbx1Qwxu6wKJP",
  "key1": "5qnnoasschkp626bmyeMcnhsJLRzu8ahruHJcKhmuY1Ts728txLYu7avdhBRNUkYvRCxwz42BdxM4Bqbn3SByffg",
  "key2": "45ru44SjodNLYs6W8XmmnamDTzv8UanLKErPhNTH3n9zSKgYUtWuQAZcbLi6XzZETL9bXhATDKz5Exxsa3N5bcck",
  "key3": "5NJeiTY8HgkvvWtuN5cKKC9eVpebj4K2g4wzybXzW7ixabQh6SNncWcHCLP21XHVdnyBeNWTYHk2UfPWq4ok9pkc",
  "key4": "cdQHN3TJ8XAitFRdrcdz69UMCNF8auB9AmbLMrbt8csQUvaaHbVH2jCNpq86cyP84a471tmvdAc6JKA5ExsH8k9",
  "key5": "3z3zK5xi3SV2fBy1ZfXFJkiWXAPB2qsdu5ZGvdU2GicT8qvCJkKFxj5v62cu1Kg5ssAJf7wxNMVT7drCnR55hHAN",
  "key6": "SDMoSK3fNtYXNpyFFnmPtFSQvFDmRfFYW1wQfhec6BV1eAkLs3U3gRqDJawaMAnwfPeA5yfEqWX1i4sbWioWKfe",
  "key7": "3h6Z818dgjVW5QFUQR13iZZvo23nMEHzVcmqHvaeupomH2fnkteHC2FLwWeNJtwaw5CygW1D1vfBS6H4dLSn3tET",
  "key8": "4kFE3SEUb39s4c2G9QTwpRccwBvzDyEzahfPs1mLjFqgfoQLjVcacKKtiDnn7XbxosMP4GD6yMr1fCFKJnZhWcuf",
  "key9": "3TV83F8fviw51wEzcK1JVfpqZFnaj5L8HfV84GqwYcKjEWhJNnDnJXGocpRzb9U7CUBGMNdsWho3Q2fbLGuXF9AE",
  "key10": "2zS645PNxUCxs5pKACe6e1N5rT9YTwLg5vm8zg2TtApPFvCZGTTPWNLwYHYHYEG9aMkrU1TNEf87XfU7cMTAVz7J",
  "key11": "27QpowEAmwrWJCBmB4Na4CTaSo6kEyTup9LuymBubhEGnXbpZ5Wm6tHmaUTyZyY3PuSTpvr1we3fvCzaNDJAtv9n",
  "key12": "2amaPVPsaNMsxQ9vjqYtZNJHnYPB3fAMZpP7UmZUTN72DRrwLpKoBcx1aKpcvLRXVzmsqdpwdN6T2QNWBWWSWjm8",
  "key13": "373aHCP2b1P9k8NeRRcrnRNTPedkkp6AZcSYPwCWRfkJXHxosNrGMhx8SGEAMEyT9yyZt16vGQUtgNVWx2FBbMQ2",
  "key14": "s96hGGnpLHk8hq99y2F7Ct29Kh4GZhHQFKPZtrZ8ARz4wox1hvKbxFT7wyLUbBCuqDZ8vqc6RtLezrpSo6zvcZX",
  "key15": "3Gz46C7XdAokKZz82f4kBfVibUiad3wMAe5GvUaRaR13qQpcRHvttyD13pUNmiZRKXgyf9gHKxVwx7MXpJHyFhCW",
  "key16": "4GtxC4JMEGnwT2SCKxPkHzRkiQyECs3xxdJiNp6yjN9bP9sKmSEN9F47oEJvPL9F6TjGuY2aUAq4KnQRecky5apM",
  "key17": "xdFqTLVPmKE5gKRXYwGLFNBnKFxUJvzQrU2W5jt4CCNxpPbhYFgSEa74AUjg6eQx8nej193ukf61XoRiPMdDTCz",
  "key18": "3BPvk86Uqn6NexzHfrsNUbQjXM5ePAWweBX5ahUYVstczYrkNEcGc4ChbWuxom3B9oKvx9q9cmLETnor6752xf6",
  "key19": "3Zzz3mYg8SdJDb3YMyqec3xXfJ4FC5JKJZ1PAtF7ccB2erRZqz8qbCuFNhnN1gKHJyN8JbiKY4CQy1Qd4qAR12K9",
  "key20": "47ZVz8B6BgnZztvwuCg8rsQe6ZLwKCfaKoq6WJ7uj9VtqZMv9TZNRPXh8atbPYXVdVvvRNgUJpQq9gUWzseGXdxt",
  "key21": "2R5CcjmTGj9am3ea1cyyc6yKWDkjiS5ovKFTLPtBezvnTdca3mWLSbYmPLJBiezqLmAFEbhTi3eD71JUJqAbcUPZ",
  "key22": "4oruXUV2r1tnFX2V8rQAoXV27b3x4pCJAd9xPnNDrxECV9ayk3kG7M1kZsVi7nsT6Lzx4Xxq4C7CcpZSkpTvqBpm",
  "key23": "224kNmCgBNWd6jQp3KvvTQUwZvoLwRX7y51YSxLhtebhBLAYPtYxeiZTc61ju4wpusFvP17eYcSD2L9Bi1CjS4Nj",
  "key24": "2sYrXCpqK9NcZnxNPKRXMSPv4PajxFgkdrF1tHKtq6xH9iWKQTQEsNTke4RQesbjUeDskPyXvTPEdmtPvwyrVUr3",
  "key25": "EB66tmNeA59gVNLBouMUCMNrwCMS5c1CDgMnfHLHxccRLp9ahQju3hr3nuiQXznvFMcjCVVrBCFY9f3qT29nm6d",
  "key26": "56BuXzdneKPyRKMzbbHnDWTvHL9xKgCCKmdLfqiqnJuyyVoCerztMMBx7GcwYdBsoJ2x7ke6x9dxDibjbqrHjH9W",
  "key27": "5oC2W6f1cZofy5RTgeBhX9ju7ehxxSC3M6aXuN2pcbiupwjjg8wGQnPapGxAie7JZNBWuoLyafLQVJ8SuGWtNRi9",
  "key28": "236eJ2iNH3QWPaANNy6waU9G6wnanSL1zzLhWYuESAaQ6YzTqqzALzSecTurfjdcaUnaWDHXtES4nVq6w9fzQtQi",
  "key29": "2GMCJ3BtyMfJADiHVwMZhG1grTXSwFah3oMh8JMpXgyMfiHS1kiVvyK8WwLHZ5wvZHMWnc1twyPdxG7ek6bj3qEB",
  "key30": "2Tujqzzce8vf3j2rx3t5t6nfcY3M9XHkiFwSZXAyC4B6YuASrKHN3G5s45VcdmgHeWXMuA2HVcWhYDzMPMJGLrzW",
  "key31": "4oAH9FFk83MKAx679996XwAw1B77BH5AiNmU9bN7LuyJ61HphWsr476uSJ7GZWL64eZ4TQWfYYVMvH2FskmPZpKV",
  "key32": "RjaTYu77SqnVdf7zf4mNsfnujJpjvaXQBK4F3xkf8ye1ddbizJTCek8fgjwRL6VfjnVxKSeaHL2mmNCkrHPf2JM",
  "key33": "4K9BHhHPEiCXtfyeM3nfJG1aBvWacUafFz3t6qe8XDVAZVpT6dGPiK8ZgsvRTP8vdv6XpifMa2hEXTMqfB6vo2qe",
  "key34": "1yXVB2Kmt3PuF3n4vb998nE57ZReTTdi1XmbHHuYcmaShLtzf4uvu67pdGcjLh7PKVMUyCtkVErVYyLgrPbG9ZM",
  "key35": "5G8hqq7zmeCpChbRdp3jKnJSofUeW7gJxLiuNe7qRyWc3vVS7JEdarW9yeZX7BYqysdNv7HQz9S9s5M3y7nY6gr7",
  "key36": "2Av3ToJyK2hMLRiWTG8PS1nUKhBx3dJ3hLjD5BbUpTpUBVvBcpcXHZ3tN8N4H8SoXTeeWjsU8us2icqsXhakDj9K",
  "key37": "283ScgqYUUJWPmb5yGsivzRMu6v8jEEKyRuV7puJf8tY7ofMi3mW4ujR23wSo2utVRNuREkowGd2FFdGQd3EwMmz",
  "key38": "49h9DdouDtrXoaL9rdiqirza75dHov74tVMmtnSNcCa9NWZhGUrNDzeJyxoitg8nPJQYTHGmE4ZSWzTu3WEaSRe",
  "key39": "3EKJXNm4AAW7LDFvTfSiBpyaoWKumDKfEAV9rm4JQRTE6SrSv2T23KRo4PDtapK1DBAyp4Cw3DUDhMAuASh4312H",
  "key40": "3c2qaHC6Nk5ayPC98pnCLTpyH9czcD6beohuA5rYuZP5DNwrxpBriPob4BXBCkAvmnByGVSq27PcbMjZHLCDm1Kg",
  "key41": "2aAYgeTPmqJXgfwY9KjWUbkJtrwWKgrqLpT17Kope3mU3fHmN9kKXBXA8y6EYNNLWyZpbrg5R17Jp2sg3yxpg4eN",
  "key42": "32rPGhMfnxyG2d4sRqXbNfjbV54ShVnW4Au82oJ87jSeMCvf1wF25hGwgAa1qwx6uU4GyHmJXykvEUcxL7bLwdQb",
  "key43": "CX8t2xrxYbnDo5sD3D5kV4yFHGw5wDdf58ffK5uKyaMFgp5rNTpk2HLD9kwARYeEj8BhHPocjbd4nBoeJDCzYY4",
  "key44": "2YbVE3V1qQMSUEgQpNmMJqNBNnjhBFVRz7rjAXAPKe5v3ccfnNt2R45KVTvPDGnpKUAqjY363SMn3MarXmx497Pi"
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
