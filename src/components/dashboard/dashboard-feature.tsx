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
    "4NH5rnwdtQE1ihosbkLBQu3R5srAJEts8BmDM5XDmfb4QwpYauoNBSnzhqjSzAQMJWDcKgZDwXwimvEvvR4EvZfU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rA7n6sUUfQ2xePeeqGu3xwT3Dra6s32Z83nB4fSDovwZigrrofMRYrkFmieuaVJtehYfzyosVg9KgLnXZF7ixDM",
  "key1": "59TDUh8M9od1efcZ7Pw3HS2jihmR3V8xxXGayUN3EMbhH8tVir2NkuYGuTLcVf2XbrzcFquL6Y7qUhoSXEA8LYFv",
  "key2": "41kYLYXHnJojkT7c4fD9ExrbHsm7rsn4mgzKm7LrHD4rX2FosuivZSj5rTGrad3hTCxkPvHBs6VXnBGnUZFWiVtc",
  "key3": "4fe68YbzAoxssj43L5ovzjFPKzZe968WWrmXPM5pdLVak3nVZhEPXAjFdc8Az7G4zSC397kyyv3ogEoB1BVUBj3y",
  "key4": "4d2V3mLfsvMXs1MrRYe2R5VkTvADfrWDQTuQnwVQ6FBcUyJHhsqbfhPeu3C5cF5nJUKprS7T1QevFMrina15MNR2",
  "key5": "5etvWsctxmN91q5o5cKqunvrV3NGpiSuSgmr8UujgX1ZpAMPPJNTSymYCyj4La9oj93RCtFcARr4vxxX4F3vuipJ",
  "key6": "Q7ucPTRG5XczehFZygmhZNAbxdywf44s6PcRzozvpfQexoZ4FosuxJLcsu8Mjs6CMqhrn1z3R57XNEqihvV2ymA",
  "key7": "2iDWsbbKccxobEEdh2s5YQQt2sZbuG88NM5kZDnzFLUj76Zu7GTxSPEahkuHjT5xzQJgfSqNDnuzSaUjgy5Ew1fu",
  "key8": "kAxchAYokjTVwah7APKM9s8XBaqqS7dDHGqWwgZn9Wr6yGvrPhWLZfRogP6EpztmcYrA8pqSp4qQMvLNw3U6EDc",
  "key9": "2ptQRahKhiogM51QR6doAHAitvxn9buGhRS1XyYEED3Xg4AuAr2B1Z9synZMmhpMLZVoPLzYLJa9MhdqLdCnMEof",
  "key10": "u7zY1Bbkm8dGe4Y8ABKFn6ghriRMLhPquJo1cEihUqXoxmHEh1Yt5xmKFR5Vov5pzmUBuLeZHZRBSSauWRcrmzR",
  "key11": "3Tc81BemtnduRjASrsgcz2Rj9EciWSQAvJYuWALcnhNCFgt15ukUdZsj38szCXSHDKMrGtGT5s6E7hEAe9nsbX5t",
  "key12": "5ZUnYafC5r5mkMhevELJz7MieB4DApaSnHUGScyiZkupiFvB2UwZRMyWfTb6j3dtSUhYotr1aHHiomByB8oMq8RE",
  "key13": "4ABuL1DdXkTrEgMkcww42ig31kzMkaxniE1Yu9u2H7rB74R8WPfC1Q9zP6S8Y6WyNtmTyR6Go12CepTU6dMWSk3Q",
  "key14": "5SNc6vixCHQP1GyQTJAcmf1NXG5r3X9xkuNdC99BNfFqUhbMefKnpP4SsPiX7AtdmpXZ42bbfiWZVLbCp2qy44jR",
  "key15": "2BcPWWdmSG19zSSEj2j7Dn2RhMvXeYkoPGYix9H3LoEAk244stWR6WA4KCX5BtuEtYou6HQakB5PppfLXfsnSSgY",
  "key16": "hykFjM5iesptqtz8URuxVCocL34BSgMHnokEvC48wDBbYL38TY4nAfqYUUU9QfGtJERagoTU4L1EKZvrNVukW64",
  "key17": "2ydMTWYG9o2xAcFTSXRFdSdfeMotvXyV5HfGr6wqDNQTfXTCnYKKNSZuwoyvGqPhUHAPJkNLpXPRacnUaTfbHsyz",
  "key18": "4mB4qy6KZwyR2QFDtEYwea1RVdhWLknTPZtezVvW5FwsLbZHpETPkZTFz4APUStwtVf7mitY6xctwRJa1UqWkJXx",
  "key19": "SjzndSw3J5qZZnp1UoMNwCpmBPm4tCmxwt7PEHSXjQVNi7RaFY6BGWqjBjVe4zYor9t961XmktzP9RtT27ZGCCB",
  "key20": "5tJZE6E5ctEqirrcuzfLuFAGQPbKHXUKe4JacaWcYRhDVQ7YRz9hYL6R13Rki1LTwbwbbpYpM1Bvis2fcKdEahsv",
  "key21": "5TwUoejGhEX679Xx3QjPruJZ77GuK1wehQpJaJsPZSr82wCgA7JMqqNot6jdW9RREVuxYPzMkT5GWHrZskVfXRj2",
  "key22": "25DkcSsYhDrdyeGadcqxfuKJGYa59uDwgvA5wfebC82ejNfjkDYgECanNiHEYbxywexBMJmqqtHvCpQeqarnMnfN",
  "key23": "VnbXvUMF8zRjdFcHWNR8hyLJpJKD2tcdYC3QF74dBaWh2LPa2uKnv93xESmZUViXtfm5HdT7zXUFu9ijMHMbHKW",
  "key24": "5cbxW6jRXocNNSqcZAPuEy6y6LKcUaNRFavkdpqVgBRBtUUcge8H8rTRkedx3fvTQ6RQLKm9qoisr6xht43ENDVv"
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
