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
    "4zP1xdsNqiqBHaaKg48FyzhySMQ6BFcED3fT91Z7XpPzgEWEDxnddsNvoem9DMQAmztUjzR4io3HT3mGR51ANCnJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rKUpA1qVmQ9ZeZw7f5HRxxPVuWgRo2uurv9txp5YeecKCC6ry5g8nesTa7S3Y9ruSR6jGeLDSRc3fP3gEi85A7j",
  "key1": "27cBnNFWDULEiZ66U186QoAyi46Qx832QaWkw329qFKopdPFRSqM9PaTu4FbLC1Yx9UjnEdYCTWLTbSm3nq3WqDi",
  "key2": "4TRGTmQqBWJP9XJDbRsSY7GB6FbxJ11QXppGFqkqFGzZbmqHBugSHNC9CiHnAesRYx9VwbuDjFBssEykr7JyHptf",
  "key3": "4szAbTXJMSwCAvmGk5XDGnKAYWMuaCLaBc9yk831y5AGgTqM15X1YWxXn5Yz8QPFyJmYaziSaqP3EwqZRFuWBGht",
  "key4": "4kAcourXWoHrZkvawEQYiZHRjqZHZf16g54ikssA7xTqCR8EYk1xgRtxGQFcXuPoB9KTwompADLWwKT6M6cN9C8B",
  "key5": "2we8p1BL5V4JNVdAcKLxRUL8U4dHHvTCVgWR1SR3u5nu8fMbkMS19JwEn3W9qpfuHWAbFEvD8BRq5XuULwENk9CN",
  "key6": "3vzwdZ8YD5dFqtpHRCFFp578YziRNX1bmfRPS5jtuVhjW5JvJSfGbJt5edFcduwTCTJjZ58XdcrTyYfkwWS82XPZ",
  "key7": "5KxzxSWNkXdrTdQHnDgHDPfi176orSiqMNd7v6A5ApeJP53haNAZeycaKHfBJtzkp5guP2YTkh9DcqyWmsrgGuiy",
  "key8": "21bbGJ1y3U7mcqdTmiAKda2mqvCq6Mtm1XpxjYbgi5Q1PxR79DNNDEuCK5ffvfnue1vTLRvLVBrYN3rXyyVGuuGU",
  "key9": "4gFnKZgX6HnyF9B7Jtku9TdQvmhUUhCUe3GDPoAWZe5k1NrSfZUuhHTVVqqXb5WALhtQSjtxinicAADw7E6CuhGa",
  "key10": "9TeSbpMbZUGkxUuaPaA3ZDnnrhbHwTEuZwZxuoE36B4LMg8cDfinfWJPgpsykLRxhQiMHKzzDen17kjS3wnRfnz",
  "key11": "3cn6k73jDWkiS3KMjwrCmeAssJ6uk9BTFe6AvALKz6g76LsTM8iwWvYyxKpq4xchpPfkJe2kFLnfEDter3tAGP7z",
  "key12": "4sri5Se3jmEL2DUKTbAxbYm9p18b1LpHEQHvEhwG3HYN2MDUaitEUWBga9nVkrfVs3kBswGnRjqg2q8HGRYbh1BD",
  "key13": "3Jp7FVLZNMJb878JPVdE1nmc6onXXAqpUbbrrH5i4TawFgbwo9VJU1Q3autHv1zfuM8YRrDxGQ3ropN8iKWyCEH1",
  "key14": "4HrK9QvSgC4t2992rnsTAbavW5xbz9UAKfCSQjM51fqHEzEiMegL37ATDLHYXPapHG5aSGruJK11YRTk7o3h63Db",
  "key15": "ArmtW1an1JRbj6yvN3rQTSc9H956atXq4f8rNtb1QVeKYEAiH69w5C7vfv4hX8AH3ADAkexXrpsCwtnaPJwmB1X",
  "key16": "2SofWpGjom7ZebKAXhhoJPouTv6TMqJFtb9ngUAMp5Gdr21uW5C2RoSZFFv3VrgtZuTLNSUWj1okvBY5UBY4xeGs",
  "key17": "3hFbi6gN7yW5bDt3nvzYAw9bcZwnogss6gUbWJfWBewErqbdYjT5Hjezi18k2LMG5LCFARwRd4fdZcf3Jdfag5pe",
  "key18": "5cZKNZrBxVnqxQ3mgScG3WnrCcn795Wc8M9x7kzW6fauDPCFFPhjejzrLkw35JHBCoxK9S3h9edor2dw3KCqbvUj",
  "key19": "TbNmU9VVW9sAuq6V7qeSpwvAuEJAh3WAYomjxrDoEafJusZiT8uWUQZX7c77SnWVtbscFz4nK6WVWEn49K29JFx",
  "key20": "3y1ZmzkfVuLRpai7ZHpJN1Z6i77Au2EVAr3EmWzBsdtkvUc7e52fHp91JNhzi7o5zhsfrHmDcX1L7SLAatq5SGNC",
  "key21": "4BLzyMMZz4m7Pt8n1nE9Lec8TdDeqFq1k3XoomAeQbksUVLpmoUTWKmejHuLak1XaZwvozgz2eyvUozLvUV5fpjP",
  "key22": "3DQpdEzQvJYD8veEns4hVXPVtDcKBV5QF8sGJRr96NZnqp9fFTdmSSpvWGkLGRbmDrHjt1CpidH1ap7emmH3aB2k",
  "key23": "3tSFE33VEKvJeD2rVeeSRpMA8tMG5KDrPaztnwZizj3SMc4ZPauSCn5j5GAMWSZit2sUYKy1ZjK1iaANNrN4agKh",
  "key24": "B3zrUu3fLEgZNWRr4icpt5zxEjCq4KtUi6zTUrMqAW2HBGUy2xomiKux4zD4amVUXpc2eFNU36poUQsrwNfR1dk",
  "key25": "W2gSfFYjoVwD4W212EMhnAyjcf7NDezQZW5pHiJvhXhchmWDzmPuTjmLj8QLHS9VenS8ce3V1JXCPkR9myZsxQ8",
  "key26": "5tUUZbymVroNtjH9T9jokSvqLFSwG9KcyT2CvvjShfKbWYMq5LoUS8NRBc9oz6tMNXXB3JCgHHepUqxh6KVP1LgR",
  "key27": "3zkCTgeZEgRzTVznAwCJhKZ2V97La7iYscujTyDvao4UrKUnpQo5ARRrDHhfXH8hSsm6EvTsmgN3LEpFp69rvriu",
  "key28": "2QdyWsMqippJ1igfdGUH4MYtFVcJswM8bgpuPGYUikFHLJ5ngFVKEbAPd3PmBg7LEjppqNsVJeFAMHsJ2cXXFSbN",
  "key29": "2g9ParNeaS9qaawkQYz3X6GjoBryU9Jd8NMACRUetvux9ChuxNAyrz81BMGPpv4QMyD8WoL3KymFqshVXiu8X38w"
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
