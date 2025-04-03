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
    "2JTp54GU3Py6kukpp7CWD9hbwubN498Jc4vhgBPJon8SqWuo25gnLKWgGXctEWqCRgnksiQ5JiWDotP187ZvTwRW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48PYqSGdNmSzhbPMddqpNafzF2AkpQgnYPpWzuDGF1DT8ZaeGC7tFo2qVbRtEYcrgdhWJz1xexbb1cAr1e8UbBsB",
  "key1": "iZpDMEc8xzbb6L1xN7bDqRBc5CbjXEkvEVth9Sf9Nntj3aKiKLDAEEodA5NqEUFyAVaw3oxzri19W9T7D61tgwv",
  "key2": "3pJK9CFEiN1JCp2dvmcEy6aHtcWJF4TyVrDjPrcZYjyjyeDGUqvSHSxnyJaNPZoZEEebsNnsNoW6gNESoqp47SHx",
  "key3": "61JbnDQ4EWiP3hx36YkNCxLozGugsqWu4arppQq2S2KZxCaPvRbbGqMetLXQ4B7QxLcmk7GzgG1mPasvh4z1kMxx",
  "key4": "5mZTKNmbUDqD9waHUunkYqWJzfVZksAb6UAdKMW4iAHRP3w3h2KbmCjVj9abKztjRzE7GH4yC477yAVH8ir7GnSQ",
  "key5": "HPGoraw3XLrFmgQp8bQoSuh9rkgvFK5LE7rrgYNMM75XnbjsSEq2fy1PKM1MiRZPAGeMaASqWVPEvRne6yPVnGm",
  "key6": "4uFLxwm2WPUFZ5hk4Kr1FnuWETo7ybc34h88iobxovQQKVZeXU9bbtNURppa7Pmms8wGiGTigrHV67xqiLzr9Ao2",
  "key7": "uTk6RwguzSXs45QpxsDcyUBAqZVgXxQPxhyG4Q639Hnw6mPTU4t2xUt3RL8w7zt1u13K8souCxarFcwajRYqMnS",
  "key8": "FTzXbadkjsynNsTCgVwkEAa6igrHdb7qCYkiirVU8CyhpXoDKcFgkPr2d7WrWpuFBEvAXBGKbDvqc4gBWGbVwX7",
  "key9": "4twAgep9J71jU6Xz11ygBTWVKXoS86dcc2qiSbSX584NeffwpYSbSNjxVb1d4q49DQVHLqriJadU5Dry6nTKr5cT",
  "key10": "27rHdEE2FQQVuFg329rB3n6oAZNBRBEZs4axX14QLARmAT3saUbxqz4i9X9ioVCB5fYmRFTNkgSGdiZhTXAG4mHq",
  "key11": "3rQDuURnK6RFphbcoWg651hVopJCERBJUxHbVe8iGwYSWnXgZWN8cnAMEL1H2PcyNMqcUxXNkssgZ7yTwcZzsMjB",
  "key12": "2KWhyKRs7J3CktqDprbHLySyDB6czoiYo8qjJ9NMQNPzrsYciiSu11a1sNVSBSkNyTEUjyFFBXSv4AikW8npZJM3",
  "key13": "5JbVmNfVr2cGRFvsY3ZeK6enYvj94bhLGB1ZWYz5D77mkNEcv8p3mMpBDvnWW59FoaTvNBmjgGrzfiio9f6ann4Q",
  "key14": "T2x1dHdQ3TsydWnVb4GgZx1F5bYh2ASsqW7ctweGuWKKBccS8W92h8996Rr3Rm7xJGy5gs6ybb85PDbv8T21Sdj",
  "key15": "3w6uyvh8so6sPCAv3H8k6XrVBnvtYUsmg2dc4hJNZeNLqB4nJBVJne5x8LRNjxwFSCfkDxAptdcDzAV9kheSE6iS",
  "key16": "4CtTRcvtNiMggeKbeGTzN5M1Sdu4V5Eyoo4VngWaBfddh8wAR47P7TNecAefh9r3vkBNEfDyEBMahqJjQgn7K8SE",
  "key17": "ko2xAHV5WCSfvDUDUhEdhctNvFW82z3tj1vvJX29wEFZL8hjAHSUu9Ej9ZCYELXxouBwX1k9EDtBRCWCaZrcc1v",
  "key18": "2c4ifvySCnKzegAjkXvZH2kY3PbkuvKWiya3zHUzsZ6Raq5q2UMQFUmfFnWEe2xoGnyHdfM1xLto1T2L8XLKnK2e",
  "key19": "R5FdsmZCe84gMbeGpkDgkAQQb5kxAM9ZpLNGZTWpeoDJMjVQuBVksS82nRJG8FC3K1kVwz43XpDzRH8Bs89pdWC",
  "key20": "5jZg4RZPzrtYkndEo3Q8uuBTtGwPxHYc5bHHJ6pK2xLUpCkCB6NiuB3zLagsKH299hUSjdovW6QDZEEAFRTTijSk",
  "key21": "4DeCyrMH5z3YjcuQuYT2NqvYdyi4rhyTpbSguNwuNSe9EUYL4mHuXTD8rtprq3Kt2kNzD7RgGyGeSZPgNkvV7oLx",
  "key22": "3qJzXsVZfeENdEk5JoxzBK8rptWMbaN5VCAvvfJ5LsG3xpVDpEEDRX2GENeYjQKXDYFuUtoQV4rLeNMwJep9i5bN",
  "key23": "QeVKozqj3yTysJe44BdAK71EyxoL1woBwvSHcKhp61MH9kbhgZ3h8riEV6H1fjPbZJGyBVEVWtAPASsHZTCj4d6",
  "key24": "5UsEEp732WqUtgbWRSPN9mjXX89JuiiUHg6xwCXaD9b4ntVX6ovMxguNiagGDUekiBgU51toDnLZWXUJi5cmbgWh",
  "key25": "5pPDQytZPCezYpmpfb7jEkboy4WbVhX5vZbtMNKukq4iVzvjoEDRsQ1nocjXhriVgFPMfY75dVAsvbiYYBmEkDrK",
  "key26": "257tsVnYa1bqfFJByMzQTb2koRyoPMSXnUZr8taGmQ4Su8XGv6jP7SDH75cDwaFry2SQyB6ZZshVBXyHpr3J9Zka",
  "key27": "2M2gWbrDpgnGdNQ2mEsyK6m1TdfKyYM9k8iv53Dg6nhBxkaR9yKiAxCApbhRfmxyuiBXEi6DUf88kS8iMgzhwqoC",
  "key28": "5VLnAafYKJFNJiPc4fiKB8UWKjtyYi7xU2KCih5X8MFBQzhtw9pzo3MrfeB5vXnAVPTzj4c5eiFzWuKRvL8okurM",
  "key29": "3XTwjYtMtAfryGZjzc6HT9Hx2Cckakw73D8U2rgsn9R4h8Ng6QydTerWL4xqw5Y5heXtokQ3xPLCTYYbaJgU3r4i",
  "key30": "vnjkzrRrNW9bDxWyRUuiAWnW1kqp6H1gHyx4iswnp9gFepN9FsqPPBarqxkfoJLh1ZPFGAmN7w1gWiaLZ7prbnE",
  "key31": "3ijUpSMC7gsd37PXgVs86NdWfbvTQPJqYt9ThrXq3NKQozskxb99cw4Bn4k2UtZ1vkfELT8zT9pF4xCNCzhnkX4T",
  "key32": "65AMYX6i7ZbokfBxFgzAgcfsEkn3aJe66Azw74pLeTPUPeqh74i6fSrbg8nFWYnL2SNurnxJDcSmWCgnZWPKiqUB",
  "key33": "4NxxEP2u3vWhBt5vRaa1hESBMS5mogbHAtdXzo3z5QSWNCzgPAn6dbvuevrP5NAbx6Lnn7GrwwnxUB4pVGkvpKUC",
  "key34": "3732wPEzd1hjgv3VCACiDP4mrrUkGYeg72raBDBvkT9Hqfzw4826RLXKKnwJgYdzxNetxxkRS3r4NNzQeJtPKUSr",
  "key35": "39JRt6mdu2QEWZrXJ94vwmRfUbPHaYtfLcLXbcq62UrVDbbw3ZCbC1yoxZrEg1C7m3sPwZBE8g3Md2buyMMWmAus",
  "key36": "D4obwjsWPLiJ6Nuws67erCGUZHjNxbL2revPN7EDy17yALuBoV7ZcvnkoZ9pa7nm8mvxM3PgapwbSZ9QVJ1wn1d",
  "key37": "SdZo35PbdZ3zsiSLdPGxxjQ3UzGLjqoGXW2z9pncNSpRovGR73EEAjbX7uKEyfpF9BWmLS3y9cnEhfNbT2Bn36P",
  "key38": "53ccgTmgLxXe5HXK9qmYm8PJw4EG3Fc857bEnwLWnbtYCYrCugU44GsVvnVmQHLKbMWjpv6JmxDqXTVWCFz359mX",
  "key39": "3412cuM6YVqukhD5Ag8G4G7p6oQPx18SjQdqxgCkF6FS9vQT4adchVSBovx84endeTFpgUSgYPTFfs8WALcFYpjG"
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
