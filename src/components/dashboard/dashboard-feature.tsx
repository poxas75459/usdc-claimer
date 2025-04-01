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
    "3EWic7T5WXejwTT4nZk99tnZfEaZM2CTVMVYNqdW1VnbyaRiTr8AKHe4JhMYvZdo3d8z8RMzcKGavK5b7pV7UYy4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FkfhX2tWtDB73e1DyMtenkWVss8i9cDcHRMFxue81mUAB9nCMwvdyxQFXmwAXyyxrGcDeo9evPF6dNpGM6LH9cq",
  "key1": "2Vqvkx4mN2mza1EYbQqf9vFub2WiaAfrkTLRx2nnX5QZE3Dg7NzDCjAWCanyMBNjbKo1XqFAgGVdaLcFRbwU2ywh",
  "key2": "WXPxrYFFHE4iY2tUY2L1LwJ8VPVm9En15WUPqrN7bRmpvVV8guASgCsXuVDtJ2bQMb5booEE82uXLdzEAoShX4x",
  "key3": "5WotZWxBuGWJ4b4B4TkeqYsGaK8wWntrZmiAQyZ4gZGDoB4mypfZ59jAKLubW7gLyKHBtbKwax6cH3WRw4GNvZCS",
  "key4": "5RA2DKrTnHPfGBC5voEecjzG1tP94wwhDTxTFhgEYBiSQ3eNt5zGYxjmhagokmGq7tdiYAs2E29AzGcRB5vBj7m6",
  "key5": "pXSnn99fHvdUQ5GUcU1EH5LXWmQ3doc7sW13fG3MgNuazQf3ajZE64Y1UMt5PrZupaQAvRMyzf6Sttm6EgaDEFZ",
  "key6": "YTJPbohdKx89cfwLX9YpnFjr1b3h2wPRwgn5bEpTVTRFKUCv8JUEbQHHxQYeb7RyGovywoACaQUQCCRRTxG7cLM",
  "key7": "4XXhMHnzLByvtBF2N1wqEwFCy6qC78TvgoWn43AutXCAnA9aSYMGNDQAXo4TjKSpDgExD8bPDowZnkGQ29PEyAzA",
  "key8": "5g5MmdA8DUddRvm78arbZ6vXnyVuctioZZu4uUngAj73echwfNipaxqjmNFYLfxsVDYyXvobqym2hM2YoyhvejMy",
  "key9": "38dMZhoPPEjkWAFS9dSzAneiUhEVYYHGDQqcZuFVaG5gYnvfiPwrPFYSQT8UuHZ7XzLA1p4zcUWnvBw5oWvMrnu8",
  "key10": "ugcpzqU6koYaXdzuHAbty7jM1BTnS4uJU2r3V57VK5MM8VboZ6dE1mvg5hFBoQiogWf1WEbD1vNWoqcvkyrtgQ5",
  "key11": "4ca9MQc56JdFAxgG3HKpEu7zqHNkxsEXPfPWmzdAG82qSQTas7d8k5Yb9JagpD7nkWWMwTKqHVE9mi3iA9o7TRbx",
  "key12": "3kw4zPgAA3zcfRmoRe6M2MqZ8Hv61yHRQDosnKJxVGAgWd8BZ2Ghx8yeCE7mjgpPpfVauGEaAAGTNEajKHmrfvvQ",
  "key13": "5xs5L7tGf9AyFKcfEvHxpFvZE1B2gcr4nP8g3r9jQvUmibwaKaJSa4xzTpp6jP1r86pUNFbYtiuNRxWsxvFSpjX9",
  "key14": "Vvkz4hV4fWuPJF7z1T1ndkzW9gRkLLegefnMaFt8VYh2GyEzWLQ6zWs8eYcHfz5f5RDACEPKtjSJ7pYGKGppzhy",
  "key15": "46Dwvacf7JtWfmTipm6Vf2RishuPJMNL1RCK5DLEG8WxziFAA93T6aZWubYSBST32LCdf1Ajyq6CeGHPFcFwipW2",
  "key16": "39vuH96eEftjUWs63ndytHpd3vfisNWEopNe21x5zFF38PUoTKHZo1oYrRUuEGHEHuXBzowwc4LqtT2EQcbKY9Zt",
  "key17": "5xsQ9PA2Fqm9i4haG9QKGfb3rrrrerqyyEVKaabXg87tQT7VijipdykGqj7YfgNWxjSs26deEtmGheeqb7Kjhmku",
  "key18": "dGDANZS6v7uCNEeEBAkrBAmhYoJS4pRSe2gXYGm4dhciaLAJAmbEQW7pUypfsMDvaVKP17VBYtqoVjntZmnMzGz",
  "key19": "5g1RmQMKTtCm4edcJoSpwPyZRa6c1yHxE8YXmVDyvxVcfydMuHYyvNEDSunbFmLw6VJjYiUeRPzfy3JFtRW6DUpW",
  "key20": "53ocqkBLdUhSvwstEyk2ahoV9BDXKoA5HVP1T2kijGdR6nA6YRL4brDvkhF4QwZE5S69B4vFoZmzHckHTaxNnTQi",
  "key21": "5du9xngrhmE4FDaKfUYYF7CMD9yGfLC7BcykqakckFJby75tDa2D7q6aKLjkhRJ2javxKWA9yY2w9wKhL22YhfGy",
  "key22": "4NVGZwFMpi4QEMXQTNtGYCeFjDWCfGSqWynkcc8h9MjJhLVGA5Cmb7EutYJnzajUfbLCoPyCXz9sn3CvSFLhvWEH",
  "key23": "GW4zuBujApyQdWhhQ2bxzCgyDfsWPdDGhBPcMiaoLjH1Jgq6gW81MQ5r11PabMAZ3frAWie4DR4bpA4ZWGzck2P",
  "key24": "5vHofK66iLejJwkv7y5vKfo7bNfqo5h4WWKKJC6kku5MmjQnc9RAxSq3oX9pKBcDQafwGaNynw9RZqmw4oksdbqG",
  "key25": "3qoiEoZNyAC4Y7iadAGS8vCAD3pTdYMptyE2U2AWb3v4tDp2pwjowJUvns1e1z8STf5CGo3acav2vG2W1xMNWxdp",
  "key26": "e6xSz3paQ8iYjJuFHsQYLND82vDGJAMErMkn89HXpidXaxZrtrDJETFcXio5EwertDrayiHiA36VB9oQXNJV1yX",
  "key27": "48nnTK3haXnsN9u3deHqcxPf9ezwHgL1xsQRtfVXqBUHfAyGwmU3ghLe8stujKHV3jChfK7MCyV5hunbVfdYE8TR",
  "key28": "3aKnS1TRug2gcqTe3WW8NNyKtAP9qHYKR3cxvuvAfRMijkU6kon6di5xVQQEP89Ahfn2PWN3eHbd4WZcnWRY1jif",
  "key29": "2oEvy8STqjxpt7urZ1crNMxLJGLsesXR5XcfhYv6jFr2JAvZqq7tDs5Kh2HkdZ4LVhLUCGHmuNCYtCoJ31fTVwS7",
  "key30": "65TjWpQAqqT1PfwvNGfu3DsiAtZD7Tn515ZGjDRjJtnSqyuo7bMA6XzpbTZQUhpMkHADZNHKVSjDBYcaRa4SnXEG"
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
