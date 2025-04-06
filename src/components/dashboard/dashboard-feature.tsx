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
    "4NuQxhgXLToKpTnZxg84MQuxUTUnZuJ4EPZ2hmc3g7StuDpj1QkgCK6Crpf5gFyJ3qAFUpRErjcVr7y1mo2RqCY6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4StsBSuHRwGB4Urgffh867SuJ1rq943SHVJ4nCh7Yvqp768ALf7mNEjT8FzVdhha7nRn9QDdFx1YTXaHtbVkAmZh",
  "key1": "4HShfCKTwovrtDzTwKM2x9YR2E1uT7f3FbPbLTtwvFmMnGgKDSdUUTE5xCtEm3hgkNV3Edy6u7d82Zr9GPMRD8NS",
  "key2": "4277kTpZ6ALWHhYqFSnuZEJSDoVFGT7uXf6g4cvqSTkNyW5M1ygYCS6zudBCiS1tQd6JAnrgwKxysXWa9sSWjKwH",
  "key3": "47NVUrqoX9wQGxKrAUnRfFc6gxkw4UqxBLg4hVgBeFiHWxZiJZ5iiAW9GqyrRgBb1rbwY2JyxWRqBoZtK3wSj9yC",
  "key4": "2wFKaDJQHZU8AwLqKvph52vUQQYH9VBAiT29DHQANYETNfiSqYH2rwdfW6bLUbrin8pnJo8HfoEEqK5YPtqxekTW",
  "key5": "3ydV7nUzp5KTvqFieryLAyZfcmZSfV8WgoyFqQuvZ42PapejqxQgz9rrXnjqzvgbs82uQjuc6UyVejXZgBRJZqKT",
  "key6": "2NBTjEwYedBvrv25CfTq7cifN6sVLANyJpWsEwiuUZFiNnXVAJ1in31d4b8GhVcHXGk85KBt4pcy1PdnfhJkCnGP",
  "key7": "JSp4q8GFx9UFEBz9SQ2gix1os4WDsCDsQQdVMJGEKYsLPXJpef7xjx1C9HveS77AzFUngQ1rysKFpub9enmzZ6N",
  "key8": "aBrnpriHxKZZ6NDtoKMAorHUoVPvCSpWQReU4RjaC3Bv325LTWAr7skagjPfXjt4Nvo4dzGhVd2zGEa7prCoZgp",
  "key9": "4fcrQyPBxr2CieeWtmQy1BZwH2Zjn6ZoP5SEf47TJnsG6VUCqDvaHf5Md7yZqKnriGAZCuDBo5eGX5yYCpBJXbdF",
  "key10": "27CbTJSZ5f2eqbsDLB4BjNygrjuXaWH2Ey2jkSEVVugqD2GbyHNGpGDi9BDar1vjb4UwuF4dYfkCAwStAaaZELsn",
  "key11": "3MUpkZaqoThqv8zPyvzszb564Jvpcy3TPeP86RWXcHNg3UttQtZiUSVAiAHqe5mcAoGuarEENsiQnTRvuvW1z7QJ",
  "key12": "GA1SRVBdcYyTZ1ZYR8n2LYVVzDcwEmnbcXHbCbHxmzQ7iZU1etEimjNCaX7ooCyDnejX33v4DJWw5Es6tazhG2k",
  "key13": "4EoZPCso7LoNu2BUfiAAorsP2pbBeN6KivCtBfFhHXs1EJkhbcdfwkhFiRy41ga8V4jnRYE49EeAXTPYruA1NYvV",
  "key14": "uNTHiohSv7q7nNoSLwnbGCaDEP9WTWbDUk9tQgdJfJo8ZGaKCi1hBeL5C7L6PiKNqkJxwpnHaXgVzhENwM4iCZf",
  "key15": "nA1JxAqFdpvHRgH7eLftsoUiigaHyRJwQm9kLWXDMCMSAhVmSncwjK2BFTpkDh6tRnfXTqCKnrwGPd6MYo3Hjw7",
  "key16": "4Q4vWkuovQF7c3AZdWXCcZPkohPFf7J4gNm2FJbfQxkzW5Enhu9iSnKfBdkXmWEoRMCFMqQWB7sbDgsaUWZKkh9G",
  "key17": "umYVjgba4U1S2ew8zTPzgauyKQRCLsB5CHWdgrrevy1SLRkkNhjWWbKQysVBkbxnC5qrDfH7RMygKa7BX2mNnob",
  "key18": "3ezynM8qt4EVWfGKBwMv7pTxqcezrbJ2Lncn3eGp5XVacRpxPbAXWxcHnyrXERHy8mNN5EhZJYpyxxtMCyb9abBz",
  "key19": "2nuFgV86aRsGvw8A5mXvCxFiWTe2foK7ALZ8EysainMyqVM9Z1u8Wj4ZE2cCp8MX8pWEXdagYt76bNoGi6iYaAVe",
  "key20": "3oR9HTCu6ux4mmnQUCgFdPxft9a1cnNv833zQzrjwcHFxJppSSR3Hb6eGBxCTqAtD9L2iYs1ADh5pTXxWPdTuZHN",
  "key21": "5C1ohYzU7p1mFhfFbRiQUMxCA7VWpwqXDCvKm3AAbgqYvGtvrurUq6CNWnNXDKt3gsL35rpEC6XVXLc5yrgC2NkM",
  "key22": "2jkzuThoTfdKhzixHEBx1y2HB9s4MNvh2zP6ah12YugYPWHL5xv31jfoBQ4BfxbpHAryTgwrfmQgYZB45CRBRJY3",
  "key23": "2LddJtQt5tf5t9woYRfJGKGFpo4jv2ecFUC8sT7A1oTgdLz6oRp8feCnrjxzdzzWxMDL5fms1URHW6QYpUETYqeA",
  "key24": "PFZgyMePZVf8wMTAHDJMyvrRVLmMoGHVWDbTdeZyumAcM9v7D4jvbjaFz9NDoC6hEuQ1KDGCCyh6qy6Eh1HcWsN",
  "key25": "kiQr9n3PFhCSrSwCD4KnAZ2CrdHvCMDbJsiEBVrBsqtyrWww7KkvQaxSc5JfkjMeCM1QtdJjRQcEE113pKvxPpi",
  "key26": "2YwdKjyh4YvhSknnVjj3JAEyywQytmkqaHzLbwvFaZSbVofNcdMywxZ8JEHaVE8Y1ooVv8Zt39sXHCjY5XNMKvcr",
  "key27": "5EwgpMaEFJE959z842NXMW1oaCEtrtb82RdcpqtQtEVZaCRqquu5zdogSDqqEoiAtTfrHMF2qzxXBNVFBnU2nHb9",
  "key28": "59HgK7o8DiovjQytUSSHGZ64wH7tqFCWGt4SyuuFBozBBfoneLzkaNkm7j5fyFbKD3T9GFUaeU7oC7QPRkkv3Viq",
  "key29": "4rLr3h4Y5r5nTKnwz29szp5fvr5MYRoxtB81qZsPtzXhGgz7nqvcfU7eb7pr1nbnsJw1N6vvSvGKLoQomubZKffQ",
  "key30": "uBFvbzBXti3sxtkHTm2vS1c5QkRYYpnSuUmX8JhGnXynaAyqLoWkxCvJMcta4ScZyMDYKuWwfsvhU1enBSvw4Gw",
  "key31": "2pbbzcySja7WovGmx6B8XCfMjg6itVQwS7J8JPQqtjoEnzQ9jcVE3WnNsVbd73kwNBMoTcgw3usxyd5FcA7YobFu",
  "key32": "2c8ER63RdrXR1FvVyDkojZTPULBzX8DGVgh4igGbUqeSwRMMMHc8LsZaAUp3cjoYAaRhp1ny4wuRE9HRGbtwXMNT"
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
