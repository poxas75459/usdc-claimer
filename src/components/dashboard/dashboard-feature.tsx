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
    "3BwCQ5F7sk6njA34G5aBNHQtxKZobnWT1Z7JzvxRarYuSd7vUfsuNcGBWP5SzRvA9ubqZVLu5ScnAy4iPz2XXWfu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "563bFiRTWbppBjSEZzyzRawMPZqQtsq9ZoDVhrd6tfixFBkrRAuqAzVwDwxXtJ8rpKLqt2kHm4sTZgj7bUExhrv",
  "key1": "41zfvbVFZjW2CLFGfRDQr5yaizgc9Xga9p7BCFeXoqyGumkXhpujDyn3DroQkx7L3JTVefKZdmrAYPFe7bsGhKHY",
  "key2": "559a1TB3k5CwH9yKHvt5b1eH81rrUN438UbpzHYTH1bEU5thyz9N1N6ex3wWVwuRcPYDiTSfuuJb9WQfdB7Xffao",
  "key3": "VR8QxVQ3S5pohyysyt5ryq9VnemgFuaTqQsGomTzYvhJSUcTHJyoUt8SMyHQnVmU2Cij2LTviYecDFCzSjGtwAp",
  "key4": "3qePmwtxUbuMtL1ZjLHNVyCu85CrSUKbpT5bQriksY1mKQNrW18RSx9XMVRbQg7NHiqKGBFLuSPGsiS41k7Y8keR",
  "key5": "4dpuMBVyYmHVHkWeEdQH9b2mYkwTJSge2t9KLRWZf9HShvgVH5RxuUe6jM5MCJtfk7ScX5jhrdcMqeLhXS518HTi",
  "key6": "fgf63nBVpc9KU4QfwF25Hoak2yBfUsJFyME7uezQcXWh1Kt79ogtSJKm1cLHg8EkfxLfuofzV4bJMyAVVbgLB9E",
  "key7": "3fqcrD3TSVBb6AL1nda6Svg8vA4aph6HcQMReoj92t3aX4kfvyiDyXoUQuqJm9D6bzKyucv1cN2apRU3NUJD1fZP",
  "key8": "3ANBzVFKyahHtmVh6ppRHBgNFNdmrgBuLsRag7foQYb79QpY1P5EgsBnNqUtDDdcAvf9nNc2gYskccE1A6eqpr8X",
  "key9": "2hCrpvLo4WM32EPPCmDuXmiwaU75kXYDBkbpWm5EQAgFD9SgJAiDA1U6aN3rkjDeCNaBj4vWnHLvkTe6e9fKsaEJ",
  "key10": "CTW5Rfs747v7NAaiVHVdBQTpHufouw5ZvJfFXGKz5mtmaWoBPacAexCzKej6SdkPubuZ2SzE9FkDtGi5hczg5ZG",
  "key11": "3qNApc5oisvykH6GGihNnHt5c4u8ByJ2J8X8QcSkM2oby3spX6J7U6USMGJ8Ny5jeebPKA3EGDJ4yiaqukdQbD7d",
  "key12": "jKdoy89T6PqA8BF4h1UVVydrC6J3tHX31iGFYefPV6XrnPkWy8tscUKYERRhtNJsukAm45ewDjKxYZuCfYAfpLn",
  "key13": "23oiQ9mU8iGZbgfZoQvrM3kcR51YKRwEbESR9zAQdEmHG6D598atWVQUx2LREmusfv474cDMyxcvJFyuW3qdLj3t",
  "key14": "5JS9NFX1J7ZzCNh9yuA4pxrCNXuzfz6aieYDDMBeGWoLPwiJqLp83FRZVqeby4QqTXN8QAmPrkge4F6wgoyUfuAq",
  "key15": "3FkjApYit5JqCK1u8Fo4KSP9hva6xti44siTD2H2CQSrTCBikN6crgdmJtCvi7tfAMh98kZizUaGUkRcFDW1NZsH",
  "key16": "3wYrUDuMtZjvYh2fyd9wwfKLELzEZW4Q4h8rx3iKwnJUC4byHHd36CDEoQjc55bR22ueZZzEZRuPMKj6RFend2YJ",
  "key17": "QhT92AHWV3VjMMwHRZCpXLG6Y1BjvNk7krDK7SKDXWxTrKfsUE9aU3Rw1KN3S1SjFMQtEm2kMcoghrxZ2KDKnq8",
  "key18": "583UpUFazX6B7VpUrzQgKmLVCoQS5HENWHZSfx6nFV2h9JMQYEYGY2RhEn6rfMjtcfntczzMyv5SxsaoNzmwkqCz",
  "key19": "XUj3x1u2CAZYsxPMJc5jBGY3BjzXc2WwUgcPoSXxYG3sUDebobAUonW6XnfHEmSwyc1Hq2umREEeMaTGbidw8qt",
  "key20": "4HoFK3Jam2K17oTW78nnsq1KdzvkAe53aHug1WkwdRjztG4wChLxx6MGmeHqHDr6BnVUxWKyfEaCzCRf6yXERKKU",
  "key21": "5BsfufC9K8DR2TNcfm2972hGv4HzqRHuG9bWmZ5EZrFgM5gvp35BVNtAnye1VPKKuysacv8z9i1QGsAkSSxzpuRd",
  "key22": "gtpdrcCnd15dvNrU9zzAscQcd9eLgF13ZedehaTpSfdgzzaUs6qpvtQs134UdymPLoiRyC6s2qQsPxtP5UEzBVt",
  "key23": "x5RSXJh68tgy4QesiYKSmEYdJmuHkDMREeKxVH7716CBnkh2F8cwy4FE9xJLLEwRj3PmEtHVM7e39M7SCq7vTez",
  "key24": "3j1SdHcRrgZSupRnmnF7GAyD1yTBWXTrZyACBQxZuWsfcUkJCBaDtWAQrJEUmVfYEvPGAVRAYvgqSydxbt6z2gqb",
  "key25": "4nDxfp1zHTTQ8TfpJeAbxummnidDFSM9JgC7gBQASiKduvQeYN9MhWFt84LPAFSB9Hqy83VQMhW7WJBtdKik8kd9"
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
