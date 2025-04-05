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
    "oVSdJzhyBM5JAH6Ldz3KJWCtJxXvv1f3fPZaAUzR7z9G1EZPCgPLG5zVhrNN1mutm7KnyktXhcEs2zeFLvdkPZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EekmGx2QDqUavrCUUqqgMepJLEf48UeYiDBoTQqZhxgmbr3bech7Na6HFnRKeJbRu8SGYo9rWBYpWUzEEKAgru5",
  "key1": "3BZ61ERCwNGCPQNethJKLFDz3uJNLsktHnf72ZgojFEf3PeDAFdhqzMrmYJZEzimgKqLCwxBowhLPaPC3wQRd6kZ",
  "key2": "3sn2RidRgA9dRVQyehjRprbSQUNf2B7CEsgErFhSSQxAYGu3afXnxDEGVPycMWu77JDYyXzhwJHXKvvgQeKo4pzW",
  "key3": "2sB2McRdpMvnKhuT1Gmm5DynsxU3nwNZLUrY7H7gvojGvfzzey1KPkmXj3vBK6a8fWR24HZWKZKrnfGkycvRdZcw",
  "key4": "2RKFYnDCGN8Uz1bVLjwCJYnAbVKgdWk3s9FoSE8Tj8xsDEmoDaUiZn8fbcJWr4KKnzYQkub128WmzhTLr1fQyj9y",
  "key5": "4uTj1qX9F2g4FEbeofvrjRBpnHsRsMXMGzTS3hLzC1wFqtfWNCfyC9XKTQrF22mRHktyKUtUWk7vGkeaaiJNRbmT",
  "key6": "3qhKoBwcZYsHUD1Qw5uBdjn9cyynYb89uAWzJsuif68ZMcxbVQRbtLMEqnpGNSqg2rdy2svZPje14zwhVwSY7guC",
  "key7": "Mr3ZyMPsiV54f3YaUmy8KLpA7dEdq9C3D8c3Zqom8XjUDEPNUY9388vmhEAjZJJZcpH8GNcVkCf9Tz2tthKMEJX",
  "key8": "62qwWzM4v63n2cwB2yY6bq4uqBWF3af75reHfxdnqSatNy9ZAngnuiktB7JARP6ySKmbhRmiC5mmdUE6Li9Pn7S9",
  "key9": "3aPhGoUEn7rmEWkQ5RCBvK9KWSe3jnz93ES8Jo9zYh7dStjGh9kvqVqtMDZbky1fv4R4PjsiBdMGxq6ncgTDk1jq",
  "key10": "4We52SBioc7pH22HYUqpB8iSELxW3wNVoX8U1nsTCyTV7xs6QoqHpUYcoPnDdpATQBV4jwUD8tWCCtb9kpQ2JpZY",
  "key11": "uhqsGup5HoTUdDV9rVWQFXu6y9WRmbYzvpuKysYy82cDzdPXxjzrKW339XNMXmJAE56zY1Cif8zczs3DRrmY7Ba",
  "key12": "4kTTngpPGLppuQU7croJ5h3z3Btm9EL2jhWihZPpytCEz1xkxs5cxp8pCyUiFJcqN2Ki5W8VCP5q663chxYv6cMz",
  "key13": "3SiFqY3wKCDDDKQxtoXtWUCWM3MryL2cVWpDExBNSbftNW3thaJqu8bXMFRANRdHT6ZSnpEbBtV5TEAfrMKMfqFy",
  "key14": "2aRakUqBT1iDyTFVbhPDPPECrqQj37djUkvXaDYaUEuUhjXQzbVz1AKxkRca7yDEiFtuxW4BD9BcAjDtyPhAHE3M",
  "key15": "2cF619EGvv48Q8qf9SWnkZknCw5fyAdeNc2oNhEXr5s8mNNgsUpzTXW1XvP2wFSiP8Ahm9ZeXhusTmMYLUSXUnPL",
  "key16": "2C7dy6KCabSHTkcT5bos3pVbRuVbPCpEZ8tnMmxhkgF4HP2FM1L5vduNmYQoYMAbvQophgtQH78M6dj129DABWzK",
  "key17": "2w8rU8hcHufeW8NUhECCTnaUU7vZhbqFy67jdtggwugioUC9RywJoYPheiodakqHGDYijv8FdnNeDBi1dqJa3x5C",
  "key18": "XEJPjn6QNnnJBGcVjY9QwjBeyN3w7xQ85cCcwHJf66JsqkgCDGSwYudQjnPZm8qxGWM7mujNGJMnB2oZyWtwAPH",
  "key19": "3uccgF2G1FayArbFgyYdaGH6wJy9gTGnBv3ju44XFJ888FNE7QQxwuL3zbsQBzSYniSYF49dQa4smhD4NEczVfme",
  "key20": "4kh5VieJi5Tofaw2MfT1xVHMvVwLdPHuvcLQp84rGnypSzUzfaZmvkSK2iixLHwekhCGtLSAb9ZHAFY6D2pzQtse",
  "key21": "4KajgjVEQsr7N2hsCi8s94vpavTMadgxyHWxXb6nWEFrH9EAQjcoJa97nsPo9gjXjsZx2AkzXFG7qxVApWQ4cVm5",
  "key22": "5hE2v5v4osruuM6L6MippcAo9NfTK1dUfkGsBAAiWc9KQe6TU6wcZoJqPgt2QR2cVyhiTVEEWjS1Kav9oWPHSBKM",
  "key23": "5k3zAkVwQawyZnzPnkbXH5txU3KJ5J9EE2ss7nwkCDtuNDvWfVHYy3bZNDdBDPgGZ3kXz2o3do8SEtBx7M36v46w",
  "key24": "4YQd5Lw4xoymjkXitGeYEGkfQKScssJoBYvcbiApNP4C8WUZRucHvMj1pCRTtzvpZPtH38EL2WDQqkidjxpUbkc4",
  "key25": "4gJJpvN67w84TRa7wsUSFZQfHH7MhkGt9vPzAUBN1TTaa1L9E1PbcpqbSiF4SoDgazTYKfRVvBW2eyoZvbFDzNU5",
  "key26": "9icD1bc7KkRa2ZiiHThPGFLsaW3u11LB95ttZgCL4YBzSe5rftxqpm2rSv18YHaGociaPitJbqNhVqhhV4p2fNU",
  "key27": "3hArVoqvvoTg4ikETBFLREnPYmtoBzXxADPkLCvx8yh4YZtrP2kUb6dqJUMi5xNPNFYHphTSmvE1ptFRMP1xsgKt"
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
