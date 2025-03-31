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
    "kVcAFqMSg2CFaoQeMchKhXzruDhD7TCwsqPDyLBj95k7V84V1CDqSxFLceTwsri8ZpDfaP1cu6hMFuoXw9o1KT1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "381Cp9ZBoAMuDL49iRY1piF3HkSXXTRzjrfEqxJBunhVyakdBaYDQdxAdkMVGwSm1c88zENTgGUSQFvcxQBwNgs3",
  "key1": "4XeEWX6zYRns58L9RAKS43Vj3UzTXYZPCcUbzTMUzXpdUQLdyTaPD5jQ3xykWnMBazFGcEkJnxLuoDsQPKZRYg81",
  "key2": "5A4TnZkiVqhzAQEKfXom7faGaJhfcqFdV7iE162WAenUPgXhPvzfb6CLkdNF42Z7tRT6EnVrdVmKGVjU1BaBFiUZ",
  "key3": "34xLpfS52NpvXWmPsvgynrjbkDzzVnqE9rt26NaW78NLoRahE3dPNyQL1E7hBkLwM62E9NqRB65TJefsaTNcgqnH",
  "key4": "2BXBz8faFR1gi4vH4ewR6vywPd2zfjidxzjjmrHtSVXeKptxykf6hqFhw3YDSqKmaCpRwgntw1zQVNvz99YD5S9B",
  "key5": "5o6AD2X3XhtfeVESGt79GR8tpsLNJqDPLRuuRaHCjtLipdGKAEGCedZQu4iYdHH1YoZ6dgWrr4wzNnEBmau1o7X7",
  "key6": "zebhCFPjmioQ5WPj1b77SjEFf5uSK6z28zooU1rtykkc5iWK5oLbBFe3WiVADwx31JWj55BAyBPcnJsKQhkPiPi",
  "key7": "25tattQFUQr7PYPPhZTVeU1b5vNFnoeKtJyKPHHiq1BnuhTFk63cEDHAw4ssm8HGLmdt8WMwFsA8QcsuokEf7ffp",
  "key8": "3x5zQbTV7LpYfVw9mGiB27TEpcPRv7HWdpNd935caRWk4jNBmndZnP7ZVuZVHAgbdbhAtJ5L2SYN6f4132AXT1ew",
  "key9": "51FEvDNmqqC2BvZFLbQ47eeBGN8Tg7fx4cu7BSxvm3K4VK81L4FkYseu1RrgZ2yEoZkgT6qtTZpgwRsHN6rLgdWw",
  "key10": "5yweh1rCXBuZevwND12Ltc4R3t8RthPp7r7PTZfbfME74rYUhxaybypToxU7APBuRJDtoR5v5mM2JwngP1LFfJBu",
  "key11": "5zheLUBUNDV63SMoaRjVBikjj3DnUqLZf7GNHanSEEKXDQ5DdxYxScYmqooSspPg2QM69A686sCQHdqFYjLyfaDt",
  "key12": "4VVKhsAJzi1GewzWfZ8uRqNrm1tRLcaB36MVLR56W8NY2KwZMz27ZNUi69Wm9BGRsZTgQ9QxYcGVDDcLhDbiUQya",
  "key13": "52JVfZnFriryS5aSHPjkiUHL99MWqVtm6pmSURVa3aZnpyBTF9rVWEke4JRjWW2MqpkzeRkH1c4WorMnXmQfwFpZ",
  "key14": "4fpNYPMC1JvuV4HpMuqw5brWRvGuvxMzKYABWrKgp1EbCo2LCJM8LyoqGdhoxpGSHJxytvFLMhsmL8RTGT6B5xoX",
  "key15": "58XeVki5JNtjgMFPbDkfQdr4CQr53koZ7M7qvGovmp3rP2ppJkf6BNAnP5RfNsGxQAfHTs165bTk9vNZKz3TshyE",
  "key16": "4oVFBEG6QQcqBXCeidybKDhQVgrG9Gm1dYHJe71LJS3926KFsLJGce9QyAQvAFFxYrjoJPyojUckM1JziczmK3CM",
  "key17": "4aACCtVTAAv1pWPmzPSWaXPtz38EkvBnrdufDpYciLGQGpaoSzJH2eqRsLBWNb4aeGSNFWDFog9Rq3b68dr2L1bf",
  "key18": "5khJhxVemvCGHg3epczRuVGbKo7H9San9ztgnkQduneS3op3ows7Zqf5xMZiKdzceeJ2heDLu2uNS3QaJsWBXP9P",
  "key19": "2cMuTX85aFQsKupfB5Q4UCpSkUR4fXUTCubgDmmgbYpA8wMcEtj6Yfya2pxdoPBSJ6GDo1mTgNdLEf6tAKw6jWb9",
  "key20": "5jBhmw2MeVp9pkJp7JEy1swvJMSa4aTnfS3s2QczKpkWjL6sKQyogrDG5eVhDUyLJPfhcdnnmERZS9usMaF89U7a",
  "key21": "2m5p14z7osJ5swhBYbH4PStEuRKTfEebLvnppmW2Km4BSYX7EoiooomxZf3XNqtpWKriqHm7HF8HhSowVbGYhLPQ",
  "key22": "3N5exGRBYS6yWFpGCK6v2WwDpD5E8Lszvqp96dbpDBHKkNfCQrb9FVEJ1uSyGBDmz7G1EYkUhrUiFQWMvgNn8TJJ",
  "key23": "4YnYZjrZaiAU3163R8uyid2fuDG5cP1dWEXyhy1GbjVPgBY7sEKWyAQZcFheSgRxWdUcoZvGDBeDmTngZDWZ3ifh",
  "key24": "4262e29CFvTW6paExNYFzidg1kr729xRzacVwHKpDvk92CmJo1g29SCmmFtFbSyD5NB6vzqH95Xbd7W5GQB8hso3",
  "key25": "27ZYzQiXnWrhGqYuvsD1UE55gDRtVcHMfnwpkvRapM1orixPm4QPcY7pX7Q6F4aCdALFk8Gn4RQXq1N3MXVXMahp",
  "key26": "2mRKE3z9iqe7EojdH7GW4H6gp34xmMnjWY5jfcDDeD895ySvLwxGG3h7v74RSuCK5Sn9biSa5FFWa3D4gRoefYXX",
  "key27": "64jBJAVXrTjB7Kbrz1YRRP2h38q8FLqKoikECWQVAmnH7uvFaouDR7FfXkMogA3LSm7mcptFtxzHeJQvEmw8ecF3"
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
