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
    "3wph7Y2bnbTo1kEA21GpKkujbXAh5LxQrdN8e2kR5GGeNXYYaedHtmGxYfJB3SLe4qcq8zSsoy789rBinwasUtpH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ayawKeSjrYxQKrJKfnivysJrjqXe96gqgWwW6A2gEo9gxZp29M2tA3hSLSjHrE3vXfaX2KAbZjMmK63QbScZ783",
  "key1": "2kP9DkqaAifiy8DsJAt2L6ru7Vwz1pfGQf49C4CeCUu5ubWJGeLqgpZdsk7XK6hFi45ZhsoMjsKEXMGPYL6Q9qhr",
  "key2": "5xtP5HVYd16hsPfXrd7mtk9VCSE9DDRFj9JMP4gHz1C8m96CY81jfdZsJxFSaWUrp2tvQtNm7syfH9NVgswmMZ6N",
  "key3": "2ZfQFt86QrX1zhvDMXnUoWmiQ9mMFNmDUe8tvhxofM2H9nmkzHgpnjxGocA3A1WczF4uYbfF7fjpNZ5QeGYD4xPn",
  "key4": "46M5UHfiTq72evb9yoRtastbRgwxj9F7ZEvfxyR81xD25Kq521d2hxcrPL85VNLgakdLsVH6EbB6nzn8NQqLCycr",
  "key5": "PEWUFe2tRJh6yj7bvkLSzNbxxXCM64oD9RbiSXLgoTazQKQPX4kiCRRGsEzJPSN5edzTL9n1SETGAAsQtBouLKi",
  "key6": "49fsL88bSkE9VSrPRWkN8AxsU8z9TXfcJP4LBjPsneUkgwPGLNqo8gur7QdTDY318pLcjpqQsGCHRAe9Vy9PGpEa",
  "key7": "utzXMEst6AV47LPrq88qjefGiygzE7zaoJHrF2jnMim8xS53maaHEzKrueW7vMv2gbJMNNvJ7vqiuVY6s9UjQxU",
  "key8": "tyQZQ37NKbM8V26gZS2Y9MvFCc5fwfapHGKJW6en4YZAAxwWBJwKJtNQdgi29rUbkh5L2WrBo9qntdHJhQpoLja",
  "key9": "3zrmDVfG7pFEa9yP7WydYGyyh4oJyN86wmckqkhWxVUnNBC6RmpmJRa6XSgLZA8eube7EqTYV2eCeRjSzZpDXHfF",
  "key10": "2tH4fNikcUpVLyxrYhYvankrJXn5WsT1GByt7kUCeKuTaBuhxsePnes4uRnxkjQcPjB8gAwRRoRi87ssUoGtbbx",
  "key11": "3exqnKarAxNGDkNaGX14dqnFtAqpLvyV3nCb8PdKNEJMmgca72qwBrFvLvftTocgqvGtrHs6RU2VUTBg2XemUwLq",
  "key12": "3dz8dyutw49xDiooFTzKKSr1BndSc2kXh5qArJ58Dr7A9yNpZjjRBBhxcGra2YA1D4cz9WUJrEb2KkiEY7iK4z2s",
  "key13": "5CSv1BFx3jdGdNsbBDK2p2ctTB6GxDiQdfxM6ifBJygBkEaWhQYsDczB3D7XEPUF5UtAvnHLCgDVTgkoHjvJc3Cq",
  "key14": "38Ze8xBugxkmYcyoYnKsdFs1DSLEhSk96C69PcQnbR3x2twDR3Y7cqtW19uvL5vg1Sqp49pzYC6W6p4EqW7RBCB8",
  "key15": "4UQaZYn1ktfPQjiSruHatvZXFnEKwhVDrjaWgeVDtcbSzTMafdnj5F6apRJXGA74NzSxmV6xBtRyosAYqsDP1iHW",
  "key16": "4T2MP5E4Dcbub8ATqkbwGXRRXpWXGrP6FjBW66sPvJ9RWvGZ8ftRud4MSg7bfoUFyBwXnnrsNLC7JNeo3irStZGq",
  "key17": "3TTUZsMC7LXxCvFSBD7UpaD2E3wuy3QxUpdA1K13r8muHbi1ynM73xyjkfRaYGtzM3n9oDaG4UAEWawx2zVYeg82",
  "key18": "4LnM4XLXj1JEWSossDVs4Ge1BLXcG6EHKrp1k1odXi8pk9N4QdKWakeuLkcUMkF7zB4kMsFEgoANG3sWFtac3bJN",
  "key19": "3mCj1ZUBfkCiCg3YxTpxkP9W84cWPy2ZR8fHjks6RSXGBNm8q2sNVHXZC9gdPbPnQDC4dU9iUs9ZudqphZ88KwHM",
  "key20": "59mDSYxDdf4ndwxBPpRfsTXN7vNfFv1hTN4Amge5m7qBfitVwvnV5WN4EAj4P4vQgnwg9uzV6GPfWGMd1ZcxxRUb",
  "key21": "2s5JYJwUZaAaY4vmcxxFPsVVhSpwnEoZQFRWK4ip9X9xJa3t7KGzFTMe1VsoXRFPsLkKa3f3ECMqnZjU2qtaNQRS",
  "key22": "5EVbG4AJhopuULuZhfcJ3FzpYcDCai7h7wJDjhuJCrUapsfhqzH8BvQntVHJS4qdXikJ5C5HjLBos17KpMbZzTUB",
  "key23": "5fnmdxWRrLhJKRyMd8AybjYpJ654gkMFcUqjPeJRGJo3hFKSHHWKtdvSHum1wwNgJ3qo8ZZf4cfvoXsRnbeYAcFD",
  "key24": "2LRXVAq1JaRrAiWmzMp2Wwjmd7mq8YrnLjT7fsu4NLnoPMuDNxGsKZFyHPLEeKwxtug7uZAba8w9ffTGsMQo9EFz",
  "key25": "2u4qu8gPjkt929nxkx5f1kPfmmh9VYCre17v8H4RSmfqZyF7cod9Zbo9G9DEEb6Dwp53xdViJ2RgH43CqFQtjqGK",
  "key26": "2Bnkyd72zueXE9TMp4tGedV6vSyug8Wg2VnSunbd2xMqmzfPNKXF5vRRPFEWHnHVkEy7uArmrNyNKtyXGCutgSkP"
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
