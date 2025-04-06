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
    "4VL5J7gmjZpQZ3tfgLggdjRukaSpcLY75hPQqNLsApWYq2xcQAjPib1FkDNZMvSqPbjdCRpcEKcjQpB8yTvYwsRQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TDcermGcwDMAV1MtrS1hMHuBD9Az11UxnQQGczjPgQULCQHpJTjqnxtwxEBqua2PB2JCuxwaCAwYzaKvM6KKfpX",
  "key1": "4YTSo3Nb4mKEFQSoiRFscP35WJAYkxJVUV6meFFGuP4pDvnR66bcYqRoHYJ8cVnY6VZ7EUJBZoMdj65ge7CVWbp2",
  "key2": "4Emo8JDALGYerSVRdMxMjaN7dPUCBz5Rzs4kJC1rC2AQYthuZcVipTL7yyR184C6YAbCfTPJNq5bsBMZfTUCwFKm",
  "key3": "4ccqxMU2pop7dmPaZfLYbxNwHo49mCD2UMZDErmkLRdEZpHSoddDzzqK6r89TxEurcNzufPxmXXvqZ2C3qWrvvfR",
  "key4": "4EaGh99BhhS7kohk9tk2MggZuMQwETYBEcxUXjDxP9GnK5v71QeXegcugfBcHnCzTxSNqgEvRfyLPjNsotQm4vsg",
  "key5": "3rkvJfCYNdUEW5EhwuQ1rFAN4wtm1ST7XSwenGDEfmqKJvsTm6sNnuk1vAGXgyuQioidst3uxFhEMW3Skm5KgsYb",
  "key6": "5ojGBeLV4dSWM3N1nJmoCFwt49NRiJxdLgYRrnhiU62fDy86KPFL2rXex9xzAdjX9xd71z7bb9BcXiT4XhtLtd69",
  "key7": "3d3d4VTKQ8dzckukBQ2mpbBGgX7HzfQ5rTiYym61Lt5LcKNrW4ApoeLToZm8dGTiBsiT8hdeC5KHZbfogcrWcYbN",
  "key8": "4yw5GonXzwgJcgBN2CazUQCdjio4Qhawa9fYw8M62Jtt8A4hrRqtkUGXQbFvB9ShAKAjPuq2u57BXj5VXaftbhnF",
  "key9": "4bHHrPSM9EFQADrtNRqT2LgPauG5zud5Zeq3914TfNazG9TTZGqnZoi3dFFMmB3cHXfS6Qv7HuBEUGbTsxUVzCvz",
  "key10": "5Ey3Z8C2BiqNwRG9PrMDCiRbtVPPp6J5agvq6yqaKuqnrvQS7Y9ja3CwwHsywoq3CUAmhVPHz6B8GJkk1WeAGCZH",
  "key11": "3ktXGKhqqV7HmD2KS6ayo4b29gsBqMPdYahRvdr9kEF3jgBVjxZYJuJLhmkfLNZMn8dfNJpZCmWPXZV1fT5zXTDD",
  "key12": "2tSb8CXMXm6Wn7yTY3bQWPcUokci3A5n1gjRS4ibdzzfHSGDBdDwzwche4RbpsNqF5zBvemWE3UJssizyKM6FDs2",
  "key13": "anhFWehNzph2475WYJ928M3pi3pCiUi1tC5mEeGcBMDFSmPMMqixjhugaf1JkWF2N5heRtZS38r633rdwsQw4Gf",
  "key14": "5op7VXTv4FSjDHvRmxi77E4FBpovn5ygz9S7n9BuFaeMSFcecrLVYkUpEqcB84tE4ZHMwSBzo5efsuZpqMeHPU21",
  "key15": "E1jRrMSkmpuRScqe3a93BDojYVGudhnprnF2UN4tnATA67zRVhQ2DDCpcpCfQDp1KXQSu3sXwEFaYUM6Fij5zXK",
  "key16": "3S12mXQtzV2eQHzgJY5KKBQ82Y1ZnZa9G2kBW3dRcgFnqPuRksgFXynvKvgCDj9SQXRVWGAkjocteQtWC73vNxDj",
  "key17": "41zihNqx3mL6mih3a6HApvWYMSB3HFWaA79ttMpnAbV2umqqhpFjnFakAxtRqzychj7uYRzT9cnQmXpTi5WJFptk",
  "key18": "4J6F7yqMKvQAkAp9RMfwXJKh7SW6UXoirAfupS1aKpvpco7DUd8kkUur8WCMgB3aNQSNrb8Rc56HD6paUeQPXuA6",
  "key19": "5aQqQQErqkDXQWd6tQH68V9ipdwUBNP2UG4Pi8b3rUPMx1Khw8aPThg6FyBsgJjQRmYoDpoSXJEY4nP6XS2Gu2PY",
  "key20": "2BSuZLuZaS5wYVNA1dyn84TDudQ4TFpiZeSFEcnLCxF1zFdWS3pnXNLd7eypxvLBTX3qxQGizhzSLpHmYYt6LQgh",
  "key21": "5CiVWSSkNc8PrbdFnxVSeS8sjXuYrYv86WABEizWykGdS8y98go5hNFnWRWMo2gGVKWCk1cwuchpaEtS6GqQAT7Y",
  "key22": "yK7k1G6kpVY7gHBJpV3VQB9zQpudDH8cSGgqvMSGExRXyk1a629peePtjbjG38zqUCawnHjZ1t6x5MsaLHazR6D",
  "key23": "5mbLJdbkuUGpYYtmW2rRh3Z7zgqEwG6s6txzPNJ99RYDV55dGGmVkkjPf7QvD6LevJMd8uHGP3xTtsF1VtJbTZK9",
  "key24": "617QobkCtBDyvLJZFF3crqUcePerEye4m9X965MYWjUNKQAXvFhrYn6rNa2xRedbr23XbFuUWTjPKK1D7Nt9aHA2",
  "key25": "2CKUYrAunUeeZVQWd8qj2bAvr3mn8n6UaNz2R2yyPdp4jp52cRRNkgi1Dz4UYGEsewKHJZP96ecAMdChaN7SRPS6",
  "key26": "342xLhMXFREbawb4KPGgL5LahGK2FhGJCrZP7k5KKy1jsUvruJBMkuNd7raJSNy6oUxKLHsAqgUVYBS2QSX2JhhT"
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
