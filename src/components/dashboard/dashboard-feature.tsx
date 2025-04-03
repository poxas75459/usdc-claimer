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
    "mwk9rtTMK6qEKqnWEc1nXZSH2E4GcGKJMV7D2ohQbsmJmfZMaWcwLM5jNMYCpst9ZNfknBHdrkXb4m8VNaUnvT3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2icf3xLmmTfpG7w7kfM8gSoDr6wcmazbDeoyVBsBFckub4Af7ze1EjrWmy1BHHmGSFner8MtCq7QWiWNU6wYPEMk",
  "key1": "3KepKRPtKjZQc957UwCEjcsdZvoe3Nf8HpwNSatzy1fysFggpAcnQrnSD8FMzLaUZ31XTTDQJ2f1vT3QDYk57PVv",
  "key2": "3TPsKN2UbqF3UWdXUPCfvhhXTgP155opgEvZBesb44wh2HnT2j922CT9YyfKYR8Yg7cRiHsdJtGdy1sMiFr1W79q",
  "key3": "4bmhJPbNuofAAcUAtGig6NPEy9wmtWbwae8HLKswZpS4FNj1h3bDDpoa8dnN4bE7tjPmiYRtgsEx4ggwwtiGtRFz",
  "key4": "evEqoyvKxbeoHpngDMS5xrknWVimpyHepAVngHWh2RJX8R7spjPNPL58R8uEyucJFoDTJFKjQ9GBNSpSxXzDNyh",
  "key5": "41X57fG8o7EeYDZ6KpVrBvD7gio9ZHT38qHQHC7aqyXsbMdTJmGxujyZhVMaAYxMnDffvYHDWaNSYyuGjUMs9WXz",
  "key6": "2neXs3yeHrVWWgNZwMqc3CmnRfTKpAkC3TCdae349UQC8Q5P6nCdMkRYJRJr3VFGa7YpYvFyBqt9W8tJ7ToKbZeh",
  "key7": "UVpvHNkxvKt9Bn9Qxwp7jjJo4dfYbYuz4Pf3EYJAeCo7ce4nNPK6Ro4S1r9f1ETAmxuvWnGqF51orXkfgi6YoxC",
  "key8": "5QJbqbrGeR1L1v2h7L6gfJWctpFTUV1ack512aJT8iEfxSQoZcLXghxZFhuSnWJos4bCtBXnGNq2XNx8qJL4urTn",
  "key9": "5bJJsD3JCg7PVBFwtAPZ6Rh2qKrhTCmZNLCT8qki8PG8TDGHV725efmnYqPv3dqsSaAFWL2syDBAm2zttkrJkp7b",
  "key10": "33kuZsoN3jat5MqTuNpV4CVCgCjbas3BHF9kYR8rbYxnFoUXj62VvACEPXoT8mL4Q7KRVvfSpFzGb3SegyobJEG",
  "key11": "2qt4EEKwHvfArHoVZYwDfpsQcDuf3XqjXJih8E5YB9N13e5tiGyV4aTus5ad4hz49TXcP3ZmojKBPLzwvuaxyHcy",
  "key12": "3QEejYaUYs2hCf12EswZmN7kgRCnxy3UVAzQp5WKTW798oryvDDKDHifLLv8F16DLThUivZf1quoZg9nm1NyNSq6",
  "key13": "56PFbepiE36L5ocoWb1bUh34MVsyPQ7QWgQjofw7u376ScgimxfiYbxgqQqVrXwexErZkdjdCSDoC1FvRkrJA5Pe",
  "key14": "5tW2vKy42iHGVP4aY7prAC5gpZRZWC3X48kycg7x6Man1X5oDbexWUp5sMtTmDyjXwWttDNktHLo25SEXiAA9aqD",
  "key15": "65DcCndUJs5MtTaKHRYhQWiy3b2GfgmTWGmj6VpMSb29qVoJSCCtXB3kHToDe9sGsxVTg1rU7JfuLwGeZy9Kowv3",
  "key16": "4YHpHc1hxD6n7j4M7Kg6LdjzQaeHkAVsToNFdnYS3B3UVS4bhH8VAr7fmaE98vrkAwKkeHRZP9yvuZ6BXU5bz5UM",
  "key17": "44uFiqNajKdaAaj6WxdkpYMRqidB85sxC498pwy9xWSuc6YRDT1NhoDr81y89ukVN8YsfVvwVtFt6f4BhVzEnmQi",
  "key18": "47GLw2W1by4M4e8NgCX2JMW12C72BUtH3wQGAGtESJovuVDtuWjRFmH8NxrMeyDqZrb12akjPGn4N4wULS8DR9eB",
  "key19": "4szmFFbNv73JM6K1CSUuzbnGQS7vjRAMogp1uLsUnJu81UQHNHcfquuWuXkqYEb6Rq5Md7Z8nq7VRZ9EKcLcxs6D",
  "key20": "3FTc8TksazDhMXDQLSagQWiXzcQjX1y6FgGBfFDToYvZonsFziiV17qswPSPzninxBjcBcwJoniD66KNXLSBz6YP",
  "key21": "2etsUMKCPUQ7Y3BDo6kJiuMYhgRCMAb9j2V6tWfSpUJSBJiu6bNAjUcKayTPKHZ4vK8crSa7FiBoCM4GHZFArZ2t",
  "key22": "3DJxqHggtESYH21wdeoaCafDnfKgbt1KDQX9ZM83JShvocDinj9oQayqtCGnVbf6LYDJiWoQ4P3Jk6gjgPjQoLpu",
  "key23": "2Q42xbXbfBaqBGX9iqxBXhBvNsqj43SQQGcv4Wp8oUvGJXcLsBfkMnKd4T3X3gvcGRC8RWtUF8h8QKayVER3gBPA",
  "key24": "9NCxFtaj8MTpGpEAFimxS92w2qtKpSmZuqg7jdhg9HGdiSNRTzvy6gTVwXT2BN9d9QZG9hgVhPU2HwtHaB3gjFH"
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
