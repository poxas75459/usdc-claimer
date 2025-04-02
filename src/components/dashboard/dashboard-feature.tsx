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
    "5u9LPPpCSwrEHDBvVEZCS7vRpKLHsRcz7vHqTJXgErRBdsjKTV4uh6M21uUkXYYyNLEpBkAR4ggGxw46dM3nsU8J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UmTXbhgN1xTSVJYXNYrqqFijZBDeXSyUpJeXZBECt32RnptADcxV8o6USrG2YBX59hWt38fwbNATamoq3KG7SEW",
  "key1": "5GAikQbqwdQ4BfH9krMPMECenoiTvDaH7BwZCCKjop7yXsb24eoDZjZQYCBW5VWanEWk7SqFducgUm5JD8wMTAX8",
  "key2": "4vz5BXf9xAg2v3wzYgQanvYX1KBKkjnrR9n8RrTLUYii9jN8aHqozwf6J6DJYEdZCCf8hPK61LvEqGYJH6zXXyEU",
  "key3": "3Lnsy6eBAUg3pnNX2WTU8YLuKAj7diWoKmDsqh1ayFQn7kyNwQMWdWvmnVo2ARDhKHAqxQG83WLGuoes9BYWqWey",
  "key4": "2fHHvjwWtHWiCyak2hwAHjBKiU4QSRxMqkdvwNTEEk9voyqNM3UmTY8NB3aDKPJaFZNt9Lv9MjZvfiLgGcYDW4Q2",
  "key5": "2YxMWm5AMZienheVocdQdrnuJPbzZd1FyYKQpyWtKMBQquckWxj2QwtTZg4ZH1AF7Ubb7L5TkQkWte8bveypKgpt",
  "key6": "4ZQptGatPN8p2UDk6dw2cQ3wdAPGSQ4GUYW6S3EVvBwtKjpW9m1L9JxtSxYey9MiGRKJufKkA9zLA8wHpu5JPRCW",
  "key7": "5UPypvaTeKnR7ypN9WrTFUgVKUG15iPNZPZ7grGNBX3WY9GYcbGYqu9MHEGY5t4Mqe1mWeDFoR3es2nmv4jBnnPk",
  "key8": "5bxQYG83tRvo4gMh4c8DZnKE2PmoyTeYAW5fGDZ37uvPp2n36eq68BNrMauCd1HFMxaV1p4NUsrWTeCzg9RyNum8",
  "key9": "3rq7GbB2HAtX6W4fjQGZ88urckhYY5KxAb8aQCkD5zS5FpbTzvmmSeR2uNJsGFJYzvkhocuukAGLnxN1bymY95BA",
  "key10": "3X5aN6LUjWAAgdxUQdumyLbD5P6LB172usSgoWQx37mLtV87x4rz13E59a3qupgYRUxcoidPXqDd7aZTtjMpXLZz",
  "key11": "4uUPVPnYNfXnoPLgoY9LcV4howMK4eaCkJm5neM2wq2oxBwBZpCfhQKjxpNTrjvGZF84yjbZ6KBUVDVhSj21DdPn",
  "key12": "5ZP8Xvq71QAwBwoS2trttDmH5B2MghdJpyENLmFbFxk6H7WSWn4df5eUJYEdZQ5udCkZDvP3RcgnvD4RbCShZX5g",
  "key13": "3e7D93N6KmKnzK7otnoGzzdGwMLqwDM9XCLAtDuY8vCjErTwYA6dw2ydx49WTcP1Zuu9TLE6o5YeXw6Fgo7MigZX",
  "key14": "2J2TunusFCXoMeZg355kJsyLL6wPARLXD9rJBUvKxF8xWT8Enjja3tDPEs2P1736ctHmN9omLxpZsnjDjtsXUkQ9",
  "key15": "mspzMUU49jX7c9yTeg2UnszCX1Sp2KcZfTBMaVRvdEiJAhwgRrdG9U1faGzb8qVBP8wJk7GWCK77TZPrzj3bb1x",
  "key16": "2wbdENMUfMHyVJfp8jhVBKugvH2nZPmMaAMBiTXvsrERPGxor1qZLD2vyYhJSHWgtSnyyMxxcc94wGU4XVo6LmYt",
  "key17": "4sz3w9ZBm9hKJqjR2eXZedJQLHMaqzckuV3A1Jq8rAPc4mfETSYCCvdvzBj6RHKU7FuV6XRKEjxwkYqzn1Ngeksx",
  "key18": "bpobo8sLARrUFi93qMmJ2dBWkZUhM5PF1S8teiGoE7qSwfgmQQmk7P5BAo5SYFBAXrWwXZAGaXArd4JmoPna12z",
  "key19": "67CX8BLQvK19vt3zHGgWnfMbqe9vijEj3ZGRCjDZfss3X9D6W9sLwMMd2cMVkjDWVWGm7rNgD96YEHYxFCpfdLxS",
  "key20": "4UyX4QGZgaN2qxxjBuaGzvJ3QbUgoC32Q6d7kJzuQVuSjmisKFxZyTb8KFu8Sd7RnVTZvzJq1P5Tu4AiW9CtTc2F",
  "key21": "4CDKVtVT3qhaSaygXyr3fx6UyFfu6Du5bJLDmhBcfkKxkPATNNissJ5NayH42bJy7teaFZPGHsL9ewS1c974mpMk",
  "key22": "2btSPamya1nFpSgkS9ZomWMgVf9EAub1YgD56fmXUq3XbVXcG2vzLtmTtdvviSXptxjSo1AwiPcyjQEgpCwNvBpp",
  "key23": "CViCMDgdWMkDf7GQKpTciT9Gf9oCvv2mtreLxViPT4AR8P5XE3LKsKtVLcxVLhhULctTmpToBLsvuWGBrxQkGT6",
  "key24": "2gnZzG45hoQy5PYyHz9RA7aUga9mEwP9NqFed4NTgiK1QqAuCQ3Q6fZRDvzgNkXiUtXUSAyPsCrwjoTGDWDjhGJv",
  "key25": "KMGBssM5NpwuSeskVgG13erdtEz6pUP5J5od544SU2hr5RDeTgKD4cQCTD25biAoDFLfaexVqFDpP8zJqXSqCJR",
  "key26": "3Sn5yxx6BKH7ZpSKfoTEgrytEfxbgCzDvQUP4qXEhUNZfdzfLvaYNtGpJ43Ps7kaGr7w6xTPxZntXtbiQmbh8hoj",
  "key27": "5QArawPLaR8QKoJYXRU5BiQNC7cKfN1KJAVp1Njra5kDrUnG2BucGqj2eriC3Yhckgn9Tq7p3uaWsvJMXcYNoeBg",
  "key28": "5cvCGiVqSGUsfyqgkPAhtpRy5HnFDQERTqZUBkt4oKHymYbjD3LF4CZzZujiYUSJ2xK1kEz9LoyiyQnHt4gQbtwo",
  "key29": "2S1wD5kheNqJC4VtEyiVP1TpLQQoJapnLqb961yR3QDjJF58L1juhTogutwKVbe5JmVb3UwVNkqWNouCCcz13QKR",
  "key30": "2QBLdVjYhjXeK8ZaXdf7sbGe3yQfXpgzTeLUsfWkkq4yy74gYhTf7xxM95322rhHdiLZ8Th59aiWNDytSZthGJER",
  "key31": "3UG7473i5P7i9Xdr3RAKc1Y2vvPTHZQqmn8AskSS9hsdrtQhbouYexHuZLHA2S9h3sNSq9ejiBK2Mj8U6wmWhJE2",
  "key32": "MhWcWnqC2ShCGi8FpGus3cdLGmESPEfyDzHAbpGQt3sVn1cmm3RgBcuGXFgMrxanZFyapEQbNPwWyt7No57s9eV",
  "key33": "2ui7wqQhkY9uksQYpsyiGPV6AKGnHgNY51q4hs8feoRJnCKdo9pTWmPBVXJGrhDitcafyD37SfAHdfo52TLJfR8p",
  "key34": "4XsGFbDpFuhURkEY23zdS4AzeTVGET9UPK39CaCWpAEYsdKPvB6Wy8Fttr6cUmejfW3BLaN6NJLcp73etV1XRqGW",
  "key35": "4jCRuW7rSWbN7b7coVBTAcrq8eFqCA2PehQWgJKaabbxAPHaciSUZvxL9s9iTNk9bexFc5svVZeQZ1rjhp5udr2h",
  "key36": "yUauoRutKx688SdZfQttXDDPjQiffmjDF7geUD5UtHgtCncP8JUSS5sfR783rGVRrycXwEyjiygPPBhZNSsEBYL",
  "key37": "SPbbavBZ4ANH8f9bDJ6zyVm1HFBQt48132Wy688hfwh3EgbEka488nZn2iDrHg7eSbNG65WyRvBenHsYzNTHoaW"
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
