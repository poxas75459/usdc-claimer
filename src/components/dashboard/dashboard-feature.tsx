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
    "4NuRKbfqM3ZVmCwtqmTE9cWZZV5YMLbfJRiNZ4kSpNDrF2ggqh5ZmW7yzBDvgZr5NkbiVf76jUwJsdqPNrgrDw3Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wWtQFfbz8Dsrua5exeoyeyEXYVgTEoTwRqSH4StipA5EYXvmjcrcpsdF72QxHbF3QjLV2vBEquLU2P7HTG7wesg",
  "key1": "2WBzAuiVH2fEQp4UMmd19PVSWRBHRLHTvpk9iXosXEhwQzB4AnUFSSiVMUbHsorJp613XkdJL6wh3sU7kLiZhYRq",
  "key2": "2VK3D6Kgr78jUydB1a4THtz9o1CSFUyUwTDZzUJZXpPkPnrHQ1vctu3qkkf99zVsE1w5KYRxXY8zmGvM4PbuVFxS",
  "key3": "MtZTf4KFSE7V5R54t2g6ZdpeoQpmm8xjQaAbkdn4keQHmYNM9PfVoiSZcDYUiuYmxaShBVN8p5eRMLjoBhefbus",
  "key4": "3xQeXoxVoPQnrY1Hmk8z7Q3iQnMWpaYcEdtg2D6cVEHjTGg2V46w8jGTF2hZaVTBSHw3J2tgjdGuHMpZZGv8Z27X",
  "key5": "4e4PK6s81htLYkLwKDncmKjsKy5Zfy8b6Ye1hqx62LTM2CJQcy7aAAA3J2vVjd5mfeEv8HPRJfrZybbSU6K1XWqS",
  "key6": "3LsbU1qPfEpCYRypCeaa3rVubG1r5FfsjqURz37hvw8vYKSmtU3sjcWFjo39SpYXVKHPkkuXTkTjyeRVgY4PHqpf",
  "key7": "4WGGPGEeS3E1Va53pgaK1ds5DMey56ALFpwxJAgXNcgHrxadPj6Gwif4iuTbSPNyadMC5bqfu1UE8HHsKUHZkYSX",
  "key8": "4QN4AcDkVAxj1EALgyAWedwmEShfGih2iCy4Xiv6bzDGCJ3ecXJaqMZoqkCLY1ZYEGxZ8mNjweCpnxkDrG94fufb",
  "key9": "2WUhqeh4Wbjt9zMjA1Rd2uBXBxF5Juknnf9BbAA1LRrHrR5Y5ZYBq89U5Lo5j6Tp3TBXgbbYWX62jCnx3E4oGYSu",
  "key10": "3LVq5tjWZUpNLve1FhxWDbvjMRQQgFvciuSBq7AgTUz2qRWnUjbY3oVKUqV27UFnN4d5ZiYYN3vSiPtZ3vxsk6aw",
  "key11": "5XXrUWGLhNro6AVamPNZ2NpEskTRh36MyyYzZSzjm8C5sVyhLafFTujiYqAtA1yA6Jv4DCh5RfaX5uB8C4DtnPpS",
  "key12": "ALZRhfqnonAfYbDSp9ojjJGqrYiurYBu2ed18KkKgfA9MTgJiE84SmmF4W7haBWs82NFk2rGRK3hgYBVnm5kc8a",
  "key13": "3aXZNXTmNTVfd3jTtNhewapYAhhAZ6naQEdXsrUJE9ZK5WicHkmFmLKRAQhvymNuXcp3krj9KD19L3p48xRTeTsN",
  "key14": "2joTzg5BnRCVj97ShaTVTaK7DragnWPUSQsgq21NrsAs5xX9WcKHBaz27xmFKMrLGfkcGSJhZkt6AQywd9iZX5qj",
  "key15": "5BN4cHMG6VSRvc4PcYCD87H1UgRwj6gfx1d2hDqvsN1BbiCjwqJBT3Qv9NipaGMPdVU1UxMNkbkW1eAEZ4MJF8C4",
  "key16": "4AQg6hjHAGzyQ3wuVQWXcAaVXz1jcKkTgwv1af1N5mnM8VMkEK3xes5tjrszNT6UMKKKPuEvB16vEobdZNJ21GrX",
  "key17": "3CfWxS819stV74XGSMmBgYVq9PbfdViDD4jifCkcZaYbNcYnn7fhbvgbnScWwSGN59xF5M6r2m5E54mNQYFYYSY6",
  "key18": "2Bs6AtfptWsUTmzCtzoXUn9Tb3KPVLQRwFLggdRuyGdUmvn3w1Roi9UnxfKH8pTbwySJDr8Vud9YavLKc5uYD7kJ",
  "key19": "3CyyxEXhh8ZPsje3QNWQxNAW8oVzPjJ6Ro7qghBZDG77cHGMom9KD8Wcwyext1jebXA8eszFNw1ZXMUNx32w9qkH",
  "key20": "2aW2CjXxNCC6Fd9vNL7gtzPoJriZcondcZhutMABtvz7JxLyu4Q6p8RibUFGgZyNoQtFxMjQgPsFthBCHfVvbtHW",
  "key21": "3eFxgBcSX3EwPbDYAqgyLgFu8iCLzBwhht4zHDYfTMKrDGjKyfFFGK737dogKub3rvFEU6TALrAgsriSceKmpLq3",
  "key22": "5nS2PcbbXx9YCqZpgeQZt62rAmDETJJkhLxc9VHxEhooA1nuAkGP2MtL2bCX8MTUeQLs9mk596iqJWm7fkNR2tKD",
  "key23": "2xWf1KRGDUY5yeetkeFvKBLd2E3kCUgSQhtdv76nc8793EJ4FzXMCEnAdXEWxas8o5jqy75XRgLvaEZCGXQ6hCx9",
  "key24": "5TDR2QSMn4qhz3w3CMVcKCoVop4FC7kYHzNCMGEwh5Aa1CeY8UkLgwCNxLAsoGMYPCttx8jAcXbkgoKoL6J14t8q",
  "key25": "26gdWhpHNxFqEKn6dnfFCWQr3U4m9eLMR93PW1JxsbeP8iNU41XUGLt6NA27G46jsZEjsxANzGs7v45ZZRy8fcMp",
  "key26": "2K7BYXQh7knPuuyHwNDWiqzVxAdc1RLAuUwoeHNiPPsRyLjC81Ev7UJRbiUfrmCA7Q77nU6DVXzpsj2KZZ3pkjHm",
  "key27": "2yTpoZCAo68CBdA7J4s1PFERuseSVf3f6KV7gXmaVnVtGgeKYNxFY9v9LDwpDBFQhv5EgFPausRhKs65ZisW2idN",
  "key28": "2hEvLN9u4qhhev9Vuzp4YyhaHvGKsPnMCmXWexn86zTPaq53UQKWu7ntvkcwZ7Cv6yfQBKsKoJ4sgqLB3dM7h2uk",
  "key29": "4v2a2DryPn7tPxJRvDB3ZUUQeeUryXoNKbj7RXQi4rWYUVdo82vw3tUBdj6ZHZE1kVmt6XEXDW9Hi959hST8wm7q",
  "key30": "5o9QxFmPSUGHYFhtLn2vFYAoyfVcnjMtDUsHrJE91crzX1R8zD8XRaxRFEmUJLZKd82LSj2BqexizbpxkcCBMGkJ",
  "key31": "5pBpCDRpCiybomL8GrfSZwzwNHYWZQYtPrxpAS86CifC9y3LDe1E1JCEjj41ggLZsha3AUmQ5Fhf4gHuPerSrnNr",
  "key32": "AkXyDtj3aBkya9CeDEtzqmw6o6eXR8d8yaEhuTM2cEdQzQY4oZKyEUXmkHvXkSccMyRdGvesBbzYmhiQuUuSkuy",
  "key33": "3ydud7jad5EVYyQsGs9GmK5bAWGuu37wX9L5KPfDqMykY7haKxPDnUL4jmWyhr5RwBSG8XvwDHUM1jatWFQVR5qS",
  "key34": "Aznduo5HVpB8VdNEryK3viCMTESNQG2qBmM15jsehzKvZuWfVdqRm9MxorK3rCh8mXfReXRzKzrYc6QMoeSqHLW",
  "key35": "3sYs2QA6MBieTLZyGHpjxT7MphMjLzkap61AUNNjknbHjBvvUzLZV8pig2zAQB9DnMzHwyxqibYmr7FatWyPAMiT",
  "key36": "3dMXVsUapoeLcLor2GoVFdTAMtxJg1uyKgZ3Mtuh5Us7ojNUXWA8PaBSvbfADNwuwqgm6DF8q7zcd1VgZgZvo19M",
  "key37": "dkLmTUWwcE1J8PznWKgBgpVnxy2TKJT6h7BhKobbBKLTtmGypKMf4Fx5MQ5y6un7utzxX91hY83d5rZnsv9duZc",
  "key38": "3eDL6oeK9AFttcSxb6VAvZiaDCRM7pevvZans9N9CJX8PqTywbDfysi3tbLgLTM9BKUU4mdZna3Y1ixc5bmggQ4F",
  "key39": "R6kNAcafnh9rQ2JTyopoiNvADJfQNACsXSTHFkrDPTm3Eritc7D8yaPZn2NbqsmwNC1J9TQUWm9AcYFaJ48vYaN",
  "key40": "NVK7kSKt5ZztRA34uA9KfJtbKv6E1KNRqkT951KU55JuDMwcLSde7MWKLrEoa9TeKF6QSz2NchWCg8SUHA8qxHa",
  "key41": "2z1utjFKEUQpDX4qLXCSFtReDyYcftbGdTCDNczbPJc46xrpUcmXqUTZymrN8rU8kHo1e7grQJCm1yqwmmSxeWVz"
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
