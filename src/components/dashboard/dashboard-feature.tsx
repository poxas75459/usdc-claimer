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
    "mA2pT9JVq61ujhxrcoScesjLKxeLy6bgWqJYrwgMTgyuJNvEo2nBe8CQmmvcSB87VRyfctaSvq5WftE8BiHm84A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g1zkYcE9eLNXSaPzu6JvaYxxjt9efttYQyYT6gZiQzcJrMirkEdQJYRP9qKJbGxYMMsZoNbt6u35tUCDvR98ZDA",
  "key1": "3XYFzpb8aTeiX28sqDu1Y18VS4h3hDH8pe6V69xKemP3JvAnW1aGuHoRvg5rCDTYzuGpeGXEL8NPYCVHFVDXsoBx",
  "key2": "2z1n8g7cFFof22Jd8kWVEwScy3qzg6Fyx9YFUc2aukfLSG9pjVfKk2Ey6B5T6aLA8SUXHBirszQzQyZbf7aESFMb",
  "key3": "2sd8tQPBZZUevT1hrryk4MpTSEbPuQ51HsJGdTYBZQJXoXFEabGyyZsqcdsLCUT5XtVUp53jHfV4ShyCn9srBDbP",
  "key4": "4qw31La5VCbnByNuA3afEyWWLiWdHp4x3oVKjeL3CYkzbGJS3FqLZjd69zWR7jbfMC7e3NNcaPMnJnGUEwV2E6Rr",
  "key5": "utV2M7wR9h5fRFP5wtXg24TrDUHXrW95R4Mp6YabzaCztiXGD276ep9tzw7PfutF3Ke8EiMLnygAFkCYpJpazMN",
  "key6": "5TWeqcUf29KejxW9AXd84qBppWFMFb1H2mC85Gz9gggJRTb3i2GhKBqk4gr8YAm5kFdTHoyQERQ7a6mGgoih1Jse",
  "key7": "3GAVo1tpfhvSfW6NCFmchFJVpYxYM2zgd9mrEKSRPFngbnN9AWkiYxAAYfgU94bz6GBc6bJDuj5CjZM4MXhkZmf4",
  "key8": "5fqXMappMRAzQEGJwCxgCkoZ61T8rKRTaHL5N3imPXeVR6ywvihJZSGHfTcEEjwCLuv7vDroLpmiBBfhKBjmSqjs",
  "key9": "2dkbM3fb9iQY3jkEUeKrhuifW2qZQrWRh64DRsuhMdYKCT83YFZbnwFeVZbwS8trZUedaCJhDJpHY3nAsmYGQaLj",
  "key10": "2CZ2syiBGdxVNTZK2iww5SQLjsCkmjkjmLG4fg2NG9wtjdywtsReacaAgSX5BDvhAUZUHysDR9YMQxM6PZikCeKL",
  "key11": "3cXHbcqJfnMd8uCZHYoHatit6MB8C4izbZh8A1jYhTwowaP2zvzPPzNYvbA5RFzw96UieKUAuSP1SU4c4CcgkiYe",
  "key12": "2GcYTjmTseP8VDSHdLFBtgcQVzgYbPTSocnp3tbg3fmyHSXp2ufr9pwnWkxjaYQCSg5gAXHSqxQdQ6CL8LvbwaC5",
  "key13": "2t14EN2vuamoQT2roQhheQ3Whn47RoYiL4AVYjdUjgPBpf83zYPXDRwQP4EKXjRQeePHkJbsDdN36x1sEm7YkYpj",
  "key14": "27Nw7m5BR4NcBv3HtN1m3ZigHmtNQFRs14jz8cBQvDHQ9ck4N8jTCik4Mx95k8JrMzwAdafQjGx2oA1fPe2Us4g7",
  "key15": "2qMuC7ic6QPuFYSWdW9KPAALCg8AjaoZEXqF8r8LKE5ehK59DvbdCixhZJR9vdrJC6Fj2YRGV7Eb7aBwjerHb5sb",
  "key16": "4FAogVfJJnJKGQqJbFoEaG4kcfPvx5KR1LQ2xfHTCLuz9wdsWaFQALUJfzWrGnvchLcak5cjvsn6RPN9ipC7RApw",
  "key17": "44KGcfqW7VTgzMJ4A18fikyZYAD1PetJvnwCqyykZ2aZ9G3Qt8b4roXLj9U6fYGAqRt5ARYKR9ikLxH15QECiJea",
  "key18": "iFeJwnignFgeMwuqix5Ah12Hy579SUR1BjuY3R3DcyGnuvUM4wSWH63w8XfwDQ4fgtDuLAbbxDtZ9S5NnbZ2sn5",
  "key19": "3HLWQ9pqbME4h74G4jJbWAdRSft3YZ89XAwqRx6V3fsPBLBx3vj853P7EwskZQnVi7Kzg8kGTaqeGmW7rHnY5y4F",
  "key20": "4WUF1WJKjUTXirXu2huX3NFz1r3BzTQb6nP7burMzkr8CJoBad5kcweMBNzN732oUazyLRC7iW9PBe4PxsDknw7S",
  "key21": "4hZXS6g3NUvzdKiMYXWVz6CKUZoGB16d5tuXCATYfxfbHUAS6PwRA4pKeZzdkw4JcV6z1dt3KAqW5sdkD9oDkRYT",
  "key22": "2XjZQSPeoJ1k9xcmbDdxzk8pbEihZFHMEntRuifWojnqubKnEVkkf6ZUm6ZcUCzMYUggrA7LKb4xwMFK5tRsUJmY",
  "key23": "3dGWAinukWpjGae259mhMYqQRujs4uMFtcJpkgcwjXR6GQidaCzCXrEBXHvLNHy3fyu3WfH6SndJJY49wb49qj3S",
  "key24": "2MciUUP5quhkpTgoaMFN1XzcmMXnLZVBS4itFaVEVHSrsE7ZcKpYkTZnJKpeEz8u7SNJge43WszoFRkKJbn8n8Qa",
  "key25": "4z6hAPMSS3hYySUmvHvh4RHkj2fvWphvKQPqEdq6rHkyivKZxnke44LVh5tb5e7t1aBF4VkYKVxdELhUZkXcHud6",
  "key26": "3FmCVY6YtrorRpZvaUM4JJAMe8M1VThQcVveJtqJyAgpGZtytEMZcV4StpeUTLceTEqBQQq5PjCASWC5J2X2Ev7Q",
  "key27": "2XEyFh37pJDBLUiuG8znii58TqVGZiviWn2Qqf9zvCAWwoepG7PfGwqgQLWVqULZH2izsB3xY33AHDKVAFRejyqH",
  "key28": "5cuvUt6KiRoE8L8dKPoWc1i1mby7Y1ByADBVCyXtGojazeM4HKqH1D8HiiPoGLCkCfJVhia1hJUYzbGKsfxubXYR",
  "key29": "2Eg3PRF3aU3Ee7SzmP3MGmYqtwd6WUQy4JVNzAHds2KQxuGtaFfhetnX354AsEFXngjcrYe6kbbRf61rWheaiY9B",
  "key30": "5KXXsY4ass2r6nMDX95q13J7nbTG9Wt6Cs9CNoPoEupH429m3uQNYvcYRhmdmNB7ktSnTQVLdR6rSvyFDBnggJpc",
  "key31": "4YBQxZdCfEXjUPnQX1pXkcgqTwCsVrktDodWyxMFRFk6JypKanAau6NFQpsFvJCzrZcfofHu1gVsgPKH8PJaJ45U",
  "key32": "66vc8JQcgsvfY7YVDY4Arow911vGUEg6pG3fcDFii9WgrUsBMvJQYvrhs6CvCbvtmbRXsqotrVFZve65thTXpKkt",
  "key33": "3CJvqPky5KsVjc2GSkbryMWVMSBv9nBvPqtJEcL1jqGxQHZoej83Xw21V2e2fr6y8ns4BFJrcngdQeJ5KrYA6viV",
  "key34": "24JsLv9pHaiCf6raVPARwLBHpsKwtmLKWPkK4CdGRrwDhjw4nsERQduAX4Pm6RycbeyuX62YbmKWbPVAwHToos44",
  "key35": "2GGjizCYQvQCHdML7vXivXs12XnBqFQRs1XDQBpwwczB8j7nZqT1fyHXdy3NJpgQknv4aSRmwttQ8oJiBmwtXpWU",
  "key36": "5XuvgoyNMfEq3few1eHG1xifTLb5XwMVVbEMLraZpaZHZo616cGdHDUKxo5iJ3KSY4HGK9WYMsd8wuLxptGqt8Rj",
  "key37": "5gwf2hNKGEByPoSw1UTBeh1YrmihwhQy2YivwSH5G2tBzCP17aTCdT64n5S2UgdcHbNkPW3xFgK2LcyEPWtfaN9g",
  "key38": "5zpJaohmNgFFbqxXqZHhScaz1GUmyXqZXKRcvTZcCxik4GTazc6bXXkvq8ozPvRZbGhoUk221LjAuqgvbpFYDKAf",
  "key39": "fUBxY3sKVZBVnuVkFyRnJfEV6Q8BbScwX91QaUbu55Vq4nFLHYsvcazXy5VMJhRRqpmcu68fUp2oeU6iERDsv4o",
  "key40": "4wnn4YhV8ComNk9Szm7Q45724Pg6yjNmQQU38mbk1bio1An7wEUqUESJezxKSVqGvSK9i6ya2YgGhbAJ7qod5DD7",
  "key41": "3j8ZsKJ8yazkTp61KwV9j1Pq4YpKApJQKMxjeUWGbG1uPrdiXj4ro89kzXs7T2mmx2uFTzbGCZ9S9j4eNCHMAWg2",
  "key42": "qFfnbMK2hBqC3cPL1sZNtAcv5vQrhMYsaNSpErzdnipsmXJcNsgd9sTz2LhjzyZ3f1s7jkCMwDvGLYdecv4r6oH",
  "key43": "W2DvNQHJ1FK3WkdH24MSrXktLkp167jVfXiFPyMuyy3T3Cn8AWBM6oLTJChagUtDYPQRnMUj6DptJN2HTHgYkrT",
  "key44": "26W4T7iTupqb2CDGhPgLjBPGvBSxn9uT3SCKxD5ny9sieVs27JitLfdVe2WeVX3Xgd5Xj8kREn713e9RY3ugBwtM",
  "key45": "4bwnaZtH92Lc9yW4Y38J9vC4LYL6W76UmK6nRQg3iTcb86g4Fs4DfF7k47MNSxGUeWZ4Szy6XkDEebtRGqqUAMrp"
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
