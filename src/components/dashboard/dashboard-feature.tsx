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
    "3hfhbwoEyCUAZWZgP3mXVrYzPvs1jsh4MVapaeCvyLmQsFv4wbYLLdkSc8Zp5pMe24MfhScT39T3eaoJdw6X1tH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N54KZK2LDp4htFYo2v6tvvReqRqkVWWSveBpW5uHmQKqYqzSX9agvZoYa4XqxTNu5huBZpwHcRio2wLN1vf7QCg",
  "key1": "3TLfT7fAMzAzBYjM8HzDDY9ZCkQLWXW2M6ZhurusGC1TYnmShi7PXmMzE4p8gpA78ynzBYzDecxgH41bHkzLu6N2",
  "key2": "jF3wUXfuxcb8P3RSW6nd2Lu67jngDGQJ5W77D4DMUC3cHeZTC8iJWsc7bcKqkju6y8PSSevaQEvjV2ZZZrgYbNN",
  "key3": "3zw1R56R4khPUgPrxuGuqs6fcYJZu59xMYTfpQNFSfXewH8RTUbgzPC8t99ByMDWdcyM3uJVXfDVZKyLEcnRrq6m",
  "key4": "2MnbKhCFqSy4ZcSzgn7AHyk3gMVrJU9dmEhjAnowRMkHWmKXuKkrHKPCH3N4QTHzfqcfobyupKMgz8p37KnnCxhn",
  "key5": "4yUv7bbmVtN7yG5x8CHfE8FZtp8UUVWazxyvFbyqST3nHUYJ15VwsXfPwEzP7mkXE2qL3oAbq5EbWscYT8pu63c8",
  "key6": "2s9LFoTAciHW953wZVPALqTUPpqPpCY3WAqvfKNxXtRPFptT15pgyHr7WW7CwQBjWJgvx42Y6RTMMh91JzZT4W3e",
  "key7": "43f7eEihctmvZtG6V1DwdhLCqbKvgGKFF92DLVvWiMdoYtAhzTHfSHLGbhf4U15GazymCJFRKFopRDKBHPXU3ttt",
  "key8": "5t8ZJvNsTeaCiAQcwm6PkCPRstARruR7y7UcEXc2uwaS7Kc19bG6iWDme6tCchFfD5EuZsJuEN5qGzpXFCJdc7XJ",
  "key9": "62mcByqZTCbd65EGXWMWQWYJEaATref7Ast8c2AUU1emi4QVufS4m8PFHNdZa4iFRkgLrSg3dqKeJRbmkFdonrMw",
  "key10": "3D1K5VKfDhA88FEX1uEHLSdWrm4ZpPzmUuok3DgvGWa8VxaxgLFGENnD2y2HGSvbqchBKQgsFNowF5224KLe5NZi",
  "key11": "5gbXJMWUAYRVcJBv7R5j3Eb3Cmu2Qi2Y9SopGn6LqU6J1GbmmKY1GqZB3NM73SGccupdjmbYB7VMA7zT94TNRDWD",
  "key12": "3eiE2R31tVqHkkD7iJP1nXVMuRcxsVqzZZRx1CZ6N9Ekh3F1hBZGMLMweFZipX4DNHF9j6dgvfV7GRS74zLNb6n",
  "key13": "5bpETELTmcfdn2myD8FBe4nhZ7WnCQAmBNFvF12fC8daZd74ab8WtrwnnXiKLUg7zdTX31AuoGFcANiJQVHXy596",
  "key14": "2A8eHaq8Mrwf8M17yyC5BZq4LnbtBurPfuWJjzoYYfBshGpcs3pNZPcSMvnMxMSa8Yej6ZJAVYF9mkTWiikA1Cz6",
  "key15": "3662DiA51bHLTD5bXAEiG4UFgSZLBkRbYksh5JE6X1j7fysTD2zUgm9YhvaNb6XFQzUa75NRpVPQHN6PHrtZiiFa",
  "key16": "2hGumZxiQT9zm9T8n4BRwnMCTZwNddYQ41u2XurD6qSMofyDvYvzr8i2BZ4WPoM9763BNy7Pzz1TEDUNisbJrjuV",
  "key17": "2KPiwoz993ic5xr16fsz7LB34Rx3KN3KZjq3HAgSQowDLzh42RdUfEDEaHD8geBwfQ3QNLmxnnHUeXDGgimbjayn",
  "key18": "4okXPd7kEH2ZrKxrTcEYftLmD9zCHqZ7uiELqoyM2xVsqhUoPDeQ9GmUWqmWCaGzvrF6e6MTSvcoE58MQTums9Jj",
  "key19": "4RcZjekzDjAt5tUEAkprmaab1bFWAqdN7aSWsh8GnF5r5xY3zJLD1mQcwgHUpfRxzvkUZ9JUphJ4XJoBPxyzEHt5",
  "key20": "hH81L9csSiZ332JWd5LYicjkA2Ttqm8ebjgVyaDAbV7sPjm9pBXBhFnLYEeD597WXtgXA1w6atAVrQuS9hHSHeJ",
  "key21": "4ttfrmvasHktK2Q2X8q2hLq1CK2PgusPNuKZbXuM3ZgRdkvTqR8A2JsBTvAmcvUuy6uGDEGydTtiCc2kstMDFoGV",
  "key22": "5YDLhuemRM6sxorkyye4uyUUzVLBeao1q6L77at4YJzmQ6V51LzMiYtjSAFUWsg1Wkqnrrv7SLtVXaUeVQGoBbNP",
  "key23": "4hF5JuXWhpPiWnpeXcTFBb9zvFXrLymVE599YoUF4Urh43KzAumkC5EFRkiADqWpLPoTv9TiqvMxm1LHTqKa6n8G",
  "key24": "5zMBwTncth7rD8ZZK6Q6hFKHLAtoPqX67ASFpqXVRj9H3Q1nFmtvetAwc4no8h2nLZsdsCwPseKaNhk4Ymam9eCt",
  "key25": "3qPxtwufvcXzXrbXA4wi6PVrzfaKCFBLZSmPYVFALKmVo4GjkLSGotrVrzWg3ijd2sC1J6EBHUsdiFVNDNAyg94q",
  "key26": "4Ejf1Dh8YH9ZcYhTeBP11EQdXPcRB4zwFjARccFEXMpiewZuYNgXFB8rUZxrhncUQeerYd17UatwWZXgZx6cYxzo",
  "key27": "2raRuxJGVQdKq5EuiQA1SEUnKrc22U1mcDPFMWWgEddgAeXyeLqsJEfRkhQ4Hm81EJpm4MxsAoFfNaYrXFTV4Puh",
  "key28": "32ATEB8jGwDgxcMjzKAoBZUaEW5yMgYArXpQpAs6sosQUdmZEL5K8YvDhGWrvAsVBCNKSJo9abmYPgSXb2UN8wLL",
  "key29": "48WJqi3a4hPpXGedwPRXFtQo7R2ySjXhZVuFjfLjrcLNuR51KT3S3175J85iKvJgWzSXkgVPLHsh9fGvvL3UGUHG",
  "key30": "RtEHcG2NoPAzgWft8AurY7VYDod8epLzAhwZuABzJJY6FW3UsJ8eZaM26yz18ihASWL7teiGWPcr7gXChpJa79K",
  "key31": "bq5K47tN5fTtJjC29yt6zqipMHKAgy7xXEgm6cQvdAqK8PVJb858rVSNqmvp6xeKNuUShKVLK3ncWtuu1RbgfMq",
  "key32": "57M4WhLMmVY9SRmssAuBbtbC954JcNukfsxCfs4ycaYznVr3LzU7aSHfmwtomx5g7Hmh5gV7qCpaGMDKnegKneZU",
  "key33": "2m6JNiCMEa4gizVA7B1S3v42KFdkGkr1wDjiCMmPbw4WLNUDuNKEcrJEuS7XeqSqrNJCYotTYMDrY5hzpSqB4P8W",
  "key34": "R8UUrxis7JWa54UWuu8uKB6ME6WupWutPB6ZcX5psqJhuFhaP6Wfvd27TDr9cHe6UVYrupMRGBN1bfVo5gtp3ja",
  "key35": "2Wi1TwhmsGy7WWWBTV5ika8sujwypM81KAvFrYcbBP5bKz5fvdyRJUSE2n4hEeSY5NNpm34F6ACxb7rXDme5sj9m",
  "key36": "4jy74vp53THAitzjvRezvqdhqeuBy4HoCjB3hCZMW74J6azF76XaKzX6yvwVYQEg1ZzvaEwZjZAEiinuzS9vAe49",
  "key37": "341LQbAGH7JAAa9FDL8GfJqbjBQt7MmMrCwKyDGWDt8XV6WhRnYbXcov3iFiyNZDe3s6uq6mUnDLpH5LdBPWtnFn",
  "key38": "43FMc9hwgTVshMi1aB38vVHGrKFrw7wyjwBGMvUuWP8em4XWm6st7TfXsNgLwCQqvedjJg626GFMD8NWn72ypBY3",
  "key39": "bXUcsgLKWK1t1v47Akd8UxtWwUfAaeQJbfTaENGwJs1KaxMXfbte43L9mB9hQjekbjP9jSYbBxSdWMzbTESwM16"
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
