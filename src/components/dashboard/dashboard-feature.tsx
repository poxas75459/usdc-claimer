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
    "kfXUadxHXt31enkfypWvxp2AnQwM4pWgvL3rZ7ZPAi4G3AhTKTM3ok1myxXMQ9gTXeV9tPtDhhaNPh4EWeQYqH5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "97yxzg9KV5QFMT1y8X8zCg6aSATpU9PyzJipn8KaKKq1kzSc7LpscWvVG2CV9aJ7QTovSVNhLRRDiZ1vr4Rtg9c",
  "key1": "2ztzrWQZUWooPyeZYkfKV9hexktw6NW9qKuFAN8hzEEkCDuibrz1f7EaN1j23oJnCs9fxotrpYnv5AkeWFL9qw1D",
  "key2": "4nbLLiZV7bPm3png2gavAz2vYH6SfCbKBaexmgWWEzWmfaNaZ64FtnDYXibrPLLtyWhgMdhvfhGCaFn9x2KCQ3p2",
  "key3": "5tTWvqCgxFgdgWTsY79wNDFa5aRJEardyegsVHhvGhfQDtKZhFz4KPA1h12vV39unqB8RMBBFpF1ws1X4zMLzbA7",
  "key4": "4RpDvCM6c1THbfJzvyAV4BbxDqCta5D48dt2oaE7BXtTvG8VAAFkpTAUC8bF5GS47mhqoCoB5nNDBgpYF9tKqyP4",
  "key5": "4qB3EkyJRQpMHMcHDv68MTqL8uD1VVqrvFLHKb4zzoEBWh2QTUPkAUNDz11kJaT9Kp1wzBxbors3ZonWdqdC4k7D",
  "key6": "zkwRoYpnczJ2cWwgapvyZieGuWLwY3WdVvw4PvA3UjmxTod9Bw46jAR7MGcn4HQWd4xWzg9uMiTwqNmzhoLft15",
  "key7": "2pEK9wpSvaWhhDFcJhakKUEQXY8UQZWiSoRJRVeUWCGTkdm42F5yuTUZDpDCqnpjSJp1wrzdViaAcA3PK9eFj8FT",
  "key8": "Hpfchg9JB2KTnCdTKkchHZo24Q9vWpfSVatVwq81iXvApYEuc52MBHAnKUxcGBvD5Ee8knpFXTzkJUhn6zkLGV8",
  "key9": "XQ8nM9VLGdSCsnJfLrs5pmeRqG6otJuEpZd4R5rRZ8zjYtAJpJ65mP5E1qab2HXSiBF1rZb1vXWK59KNFpUu4Bj",
  "key10": "2a9bhhbt3jrNvRz84gobQmqMbqFzV36VLCxw1cpvAF3iucH87p4f5cLuy4hjUsBDwSQwuqPVnAmiQRQNyVxvSnjF",
  "key11": "3yZswSaLRr6GTdUpE4H7KfJrdKE1QzxTfyqmRoq4FTYeHAVZSD3Tnr1n9YAdnrduqDr4tkbvNeZmax2Zzfc2SRBp",
  "key12": "3ZGfYKELLYLWXJ8kQowP4HeyDGMaLLfBWaZr7CLT75iCGufJRFK5JgWkdRjjsifScEqCDWnCzkiqn8aYHe6ksdyV",
  "key13": "3JTKkusR4v7Bndzi2c3pNYADrP2wNXTtNEsFv9HJN2BFm758XGTnCxbheyJ4shuBWUzVb9Bs3Z2WuyT83VYAcGzG",
  "key14": "42NvBkJC992kZaX5CGn4orFcN9jKZs9oEA1ajyTNR7Ra7FoT63yfJcVHtL8SJ76J99hmyQjTSJEJGeFd3rfHFzzZ",
  "key15": "3VeKawyk17srUKbpdwZUgfhw1HPBXMRMz9jkFzwCoQZNNHcsxLFFFhCu9C5vLGyiNkSSpYz5nXpsvCtv6Q1vqArH",
  "key16": "4LKtg6vKPZ1uyumVjPbGSXfmNrbEawpbcHKdVd3C29cnR9TE1dTTdUATrEYLYaQ4U84uT8Ej8ZtwzJLhB9yP9m71",
  "key17": "2sXLQt6FHwsVZHLHsReX9LB2bmgfrHgrmxCCqWD1TFNzLa8RE1dAVfEF4jMeWovQuRos5Uvna8eUqnVKPzsyqxHN",
  "key18": "2sCaJA4UPKLQ3hMD6nw1fGEHk7Dy6XVjAkCBDf8MZ1QV6Bq7UNTCW3JsehEP54D8vpXUC4FyhDZNS4ZAR2oByCeB",
  "key19": "4yUXwVbWPN6y9uFMNuSSMHv4rRXENek2c4f89EmiYXs9pWftfHyfhrDtiGNpfyqkAFmaSMSTPCdP9g5V9myK8ZiE",
  "key20": "3rhs1Kdp2Wav33cPtvz3M4JNFQFvdUy4Lu5bBBWMjWx7PkCbD8MGH97djCAruU4inH5NW6ivoMxp5tmhoqiCKcaH",
  "key21": "5GND7kLTuTYzCgvarm6knV7v4V1Bx3NAQqEpbEjMUBQxaRAunUQ9Z5qUV8Dsuxz2DqN2eAAz5egquX9yE2mYS7su",
  "key22": "2BNrdj6aQa5v6qvC2aNZfDX1xAAdDXfQBBQ1dWyx3kRddPLy5pTxk4CGJtJe1L7muf8JZD6r1gpQEmVkhL7gwxiw",
  "key23": "3hsNveM8oK9itiA1EhMz4iSTzabm7LqA1PFWswg8tngd9HbPDZj7LBLbPXCjELKVp8hjd4j3Bi7GB4LpvoEoLap3",
  "key24": "5xHRYZ8oNKupUMRN4PF2FSDK3C4hFszZDQbPUKkEYTeuUgMhb6j74ShqL8dVowMkMV3mgmXyijVAGXTzBSqZCpEW",
  "key25": "PExsb2m2f7QkkbD222zeRHSog2HRJFzGrrwsAdho3Aj8n4pwk9Xed38fQqpKWdNW1SoaRiRBcEG3fxaYFVayoLD",
  "key26": "2yJBBFMG7GrLqxjgHwQqW3QbPsGkNiGGYBP68na2RqqphC1vUUpFn1kUf1Q8jnz1BYiGo1d61eqqCCmF2ZCa7mTw",
  "key27": "3KR67sHFmbJHsJ4TwC4Rm9AP2vHCNHFBpJfDn4vja8Ewe7Acz1Nh9ShHqMwUXEzcP3nG3skXNPkGRPNPyfqqn2Fk",
  "key28": "4DL7hQzx5CHhWr8Br47VCMJ9rwjr8KHB9B638YUzhu6xVu5RfkPMpixuP8Dh97eLBd5wgTZWoCXkxenDdXsy5gkx"
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
