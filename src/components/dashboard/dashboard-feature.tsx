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
    "4FEmh3XhTUGPM4H6UNchbLFZmgBNhBT1HV74dapR5QacZx5S3953WTHoSLTKFDLLscvs4ydHcwqnYynZMxzxFDUK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uRMjLoa4H5xha4kCjPxKmnxqdo7aNtGsMuU2wvVex8qUgShD29JiZZtR4inwneck99P5SifYLKAM6USXs3JKwAi",
  "key1": "3Pxm3uhs3CQ9ko3AJexLnZDRuk7v5hDvKkaYSAu3AAMkcrkua3mMeA6WeSZYM3jgzb8z7NrshUaz4FsZK6k34y3D",
  "key2": "XyyDBan6DH3kNDLNaAC8FmK9SNMznK7xa2egARu67XQumfT3VpcCjp4CfxPVkyNpqCuXzgGJyMLpjKUXvYxwfGX",
  "key3": "NfJCX7PUi22vMX9atdMbhbqV6AjTYRWoRZZVWXq2z8xStCYoHZkKRTgJuMjKTKNEHpd8xnVUJ2KkcnJxTvuMBaL",
  "key4": "96YKnfbF1JZP4SwpkAR9oxvyCyW6n8qG8mD2ERThwkTwFC7Lm9eN4aKjKGnF3YcxXLBJiU6ebgqp6A6hd6mJ2qX",
  "key5": "2fNdvVAXfvkHhoEqaMLuw447SkVoEWDWS9E9qdZH2bhL2UhFc1AuVL1pyuauauniTEQSSiHmwsU9egJwTcVqM2F6",
  "key6": "nMv9Npo1UVm3GQDwftnFsDizHrQapPuShQCwWBuoUvZJNbdwcp7HJ9q48uNySBSWpNHRagpHYnXfeo8dZZ1xyQQ",
  "key7": "5tcvQAHBuzM2zEVrosMrQ6qyjGN5ZBPkUNetvkuKC5PtDNwUkkm56Q7e336NLJdeBQYcBnpYSqy55Lp3mtkekEnN",
  "key8": "54N4irD9gmobT3Cd3orC92251sooKijNLRsYh6uC6bc5obi6wHCMSnWbyz5DPov56eze43VjXEjwXxHcASYkm4Ht",
  "key9": "4VZRAX6nFPvnMjwSV2hdYU88uq8daHpUceeuZXx1TWQoJEo35bNPJzyGCpxD3zrsmQXtMHfB4RqpGoazGZBAZ6AZ",
  "key10": "27ECaqQX9v6TNG3BVv1F8jgsBPR9soXuKScjF9qFN9fKviekzet4skEjrsHvTtnUpFL5WJnpSZLEZ6weHg7bLHxD",
  "key11": "3LLJNMs5BdaZs66X6pz2FQc8w9HEMtyLFZeYFGpnet4AcqmdtHysLvFTVF5hUXV1m86Fa6wMuuzLL4aw7ffXHhw7",
  "key12": "i9Bwb1rHGje6EzwTS8oi7Z42xVm4s4tvmFcJoBei8Da7EVq7N5hKs5KfWFzCss3gHJffQZTcQCsbronrkFCGrVC",
  "key13": "5SZAMcWQF4crMkLU9gZSQxQv1v1DR3ird4GA6NLSqUXKPVv8CLy8UQsrJhyBRceekFV8kmPo5LxZEJWxxfvKCyt2",
  "key14": "36wkd7CxpA1jxesYyD7ErhCxb5yTdBuAZ9uvYFH856wub53cc89vnimDHmTvxAhgjC8VH2yMvxYBFxRTL9sPNCHR",
  "key15": "2LBgetgrzxTD5saL27Goq9n9xqSbmYSCvJZPjSvy8Ed1KTvMC9tEj7iaNnFSGTCPzgRj1RQztrqLrEwyiQPSmWoM",
  "key16": "2AZHtEpgJUGGuMTcv69h9RHYypL3KGycGnETEbgK6FTsDQqe7XgQ49ZwQZiW3UXqn6wvUasey12pwfqqa1MM1XzB",
  "key17": "3XGZWJjBdmJQijGiJhC8y5EdyVQqim5zKe66qdZrUFPfAEKjaZ4WcCfvni9kdCcpv4REsMuw5Ru71RvfwtXRMWyy",
  "key18": "4EPsJ9AJ3z3KpjELpMbkoB792UnPx7U21BzwtHGdkAjHbpYuemqbWvjKvNPi6ZSF5iiAnf36jpjsFJ7WZ4hgE32K",
  "key19": "5t7mMM4U1XAja3jGDKTvv6FiWxAsrXz9f3VYDAp3UtozY8tkH73TsoM31uV3CTaQe25BdhTey6D8SBrUda4NXoHV",
  "key20": "5rZ8Abx1bwT7eLmvhQCnSZ8EnFCycW2M5krEJRg8qk77yGGxiFMWZGHnwLDqB6R4a5taPdX6m87HeU4DKjsWk4sY",
  "key21": "4ug37w2vnnusm7QifgX98EdWmcgBVNqiSXSy2zAHZG7JVzk5nLFXi7FHi9swJZJcEKCooNCwjm7XQQ9X9swtKkTs",
  "key22": "jYVNXDw1EkBjUTDY8uCwDvTX8jLZJCzNrjaaBhAgJ1ikJK2bf3RjohKunnc6JL6hRKkuWwPoHF7pm7MLVKGsx2c",
  "key23": "39HmHBMTTvEaooo2Ka6zHMzLfQGdULvUNSryZRk9zaVGkTthwThXikbS3CEgG6Vw2TZwrdbZ4dD4puvcUfVR44Hd",
  "key24": "4wfi3Dwrq7cb74PjQ1SY3ddPJDtVPHWSXB1UNATstXQT5qxPotQ3Cu12VtNQhbsLgEdZA9URKeCfT89EbwaR2Tyd",
  "key25": "3QttAhcjEXTKpFsPUEkBamKVyNtcAq7pUqpXwiWN6UrxHpFHcFEekf5qwukhAc3PQgpL79cdTHULgYdbYK18NQSK",
  "key26": "3RJLLjpFYDpALvvogBeGcqsodQ27R22JuDrhFy4agjUg6LdBDCT4RevejhispDDTsUr9LhWDWMhepbMECnrYCSWc",
  "key27": "iJZ5g9EVgALfhA1xAqWzE6vAkoDQH1fzvVKXfEeBgNpeCQHK4FFW5hE2VkAA7uDgucPz2bxNqmn1X59TdGvdpQJ",
  "key28": "crMJsppFUeTqL1Ukpwc8oEj9ivbHZ4LTJ9AqH3RzHwsYZgvoF4koB1ozQ1qxSu1mUQXdgnoS8chsttY5r9bD1eu",
  "key29": "4u7FzFVFraxiAn6TDhmSu2LGWb1ykCdwzm2SUvdUuEMsSQ6P7BPYZHdE4aM78LWcsvWTzsYUTFYK5Vdg2LDreyjz",
  "key30": "36hLGJJuL2kSDx3sd3cHpoHXwigR7kubZHF38spk3TDKNg4pdGWB8FiGtSbZdXsMBQkTpQzcyK3vcpAa6h7MbevF",
  "key31": "3tV8r1NArTGaHHqE85U75HhGuEF3rFraA8eDMKbpPgv8zCZstE7oznSSQ86yVC84r2VXuGwgAynmP1AMKzrVBmUW",
  "key32": "2kHa9hnpHRuFiadgyJ75NWpzktH3bHaEq4U3XbKNnwUFg7UzuUoQSs2hpscq9ARDmsoY44Akq7L3LKswXidh3eRf",
  "key33": "614m8NhYMzucEwviw5RF5nM9gwHhqQ4ZBidVX1zrsbBjHCiFj9LHvmw6NX7DkPzzudswHhdA8BJpYxmSfRaAfeZo",
  "key34": "5jP5dtb8Zm6tLVv2cFjqaEby4aSM9Yk8ix31YgSGqvm96rCnFDyAkukCVgjLxvLVWESNzoqKqmYwq8h5Y6uPdNLP",
  "key35": "f3riR98i8d9xaDhYGEo2tywqNe5aBc66R6EPiZCiANC7wA3r5nEDSB4VbNgSgFq9k2grcxEqxNrWwMpUiJwhxwJ",
  "key36": "3Ym7zAjCBP4NMb6LBRGwdGe5BjwjePRfZ7t8wbctQKkjGMN1itifL6DJWzHc2nwwinDLNz866va8hRXZg1JzqCgL",
  "key37": "2Me7JJgc2XaHqJUWwQNHBwoycxHCBPKQhq7bynsEaEDr4exfJb3uzs99gBoQziQuGdkaE7FPyX5oB1Uxo8YoYSC7",
  "key38": "3peehgzYqxvdNQPSoDofTQTddVW48WKvUtjqQsWGhgCYk7w6dTxbtrxNjyp2m9tkcB2ekeyLAdj1Hea1u85fdB4c",
  "key39": "4eGer3B2nJ5NjHGmaD8CWtetNNgq7i6hhuytHLrPRVPMgwouB6dZwzCrzjF8chfrepgPx9H4MhAyGhnCkybkYmFB",
  "key40": "4Wg7mjCFYyio5NXDN8azSo8iBFaac6Y3d5XreLDpBZKMXuDZeerNo4GtVjcG9DFK8fUHKZWHVpxZHFHWKnYFaKtd"
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
