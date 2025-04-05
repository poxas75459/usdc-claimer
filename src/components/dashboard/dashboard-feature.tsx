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
    "4AgVgh6LGML7K1zJKtqWEgBLG11wZ7Utbq9Lbw5QE74wkE8D5AKtiZc9tnMpbuEftKWqiica4cvbtYX3hGsEWMyd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QgTdzvfnMo9yQQbN47LDViry3gh1zzvwCCZ3BrxiA5ySuL2j7Wcwnv9LAGdCqhhuDNeomCTWDc6JCyspdsMT46P",
  "key1": "2hxUquMcYHaXJM42AobUDc2vevM67ihA5928u5GoN7DtYa5PUBngK2xDaQ61hY6oxX12K8DBagCNcHEQd1P9YsBR",
  "key2": "2KoLaW21FX4mCsir6qwkHvsHYaMfqw3UkzRtmcVqXKYfmMBvTYBDnQbGfAJpjXrnyCrHswZdFfRbSWZHpcE4fnZK",
  "key3": "2ptt436YUkUQpjUK1X1Fw1HbEjD3vFMDAcNPvZjBBY9Cum3Nx322n18SGnScJyWbH139PQN9w4LdPUz2P1xWpYXz",
  "key4": "1rHBkGQoKW9NLWrbg6KZmDirHGUjPvh1EjX1AvfifE8oRtTXHfoPE1zZ7ziSRFC23Wbw1w3WfPV3A8YN738RPG5",
  "key5": "6fy2x29AcW8nND5G6qYDDZuRpTBYvbmNi2fYjV2a6RV1PECN2MJtsmhEGAUPMf7VeJQJrKVccoMT5wfHzJybPdP",
  "key6": "4SihWfWQ8MtoNT8dDUZxaD64SMNktWMTx9tr6zXniLuUbmZU19g6fXcd5PCc26uDPc3SagrfZgs3ftrhDiK7bdNZ",
  "key7": "4FjTBnHjMMFUePHkXaDwAam8J9kWteh5N1wS8fMzqWWqgZzrfAXPy9uUCDpp6sprmWeh3jPv4dTqotmLsYEdm6aa",
  "key8": "59vqo5BQxxW23AkFKbqUmKry3pCx8hVHsriKdox6aufsemBxdihqTwU6FA1E8D3xjUXeJEnUJUkL8Skvxya2ktSJ",
  "key9": "2jntz9souJs7LTdJDUuHt7RXYV3iLK8QVW85TiqG37oHiJsb6CwirUUtpvuETcFsrZ6VwRK9EcWDbbo9ukEGkWS2",
  "key10": "Q2QTmLT7nf5E7rXNJZKR6Xefn8SSdjHYrUKbWdydpeV7Mt29nguPYz8NLuG5aogUT95Y9oKqEkHm3xDz6pU2Fyz",
  "key11": "5cPzpApXy21b5va8y7L5A8tPyzZyVWnUq9XokwDoFM41h8TUtHkhtfSxPKebc5XgPxN1ZiwjUeWLHAZ3taxwBcH2",
  "key12": "5v58hmQc5RCySRsv2j99cDh2JQ7eZoXpCtQEXCTQZLDyhQLTLvgbG4BM3RwwCmuh6h9FhnLTMbekm2L28pqTro1F",
  "key13": "yZ2geMxK8KxQ35VzpXaXTP3UqWYE3Lgdn7qzikW6u1Y61AyvJM3KehPsFyiaqg4mjbkR9bC8WQAMfGh1vBsCCEg",
  "key14": "s1xjqqCLNHk49BwQHZ5ocv6chsSdU9yFTFNiV4nYKo42hxb9XqSxqr9n3TPVc85yRiHvBj8b7ZrqTKhSYrHhY7M",
  "key15": "4iDCro3fyrx4N44GbsbYVoccXqoTSUhyUAVKJj3fFf1CMEsDLywqVp3z9bJjw9h2y5AVGxL3PBMZDQMfihC4vFmF",
  "key16": "2t2dGURuq91VTqacsJwWq7NHHGCFsr3E72h9Y37rY8ZRLpiwWy4dRTEoSDCuzvags9SpNe7YGHZ8EfriP5MM1JED",
  "key17": "28h6s96uicQhr1MNwyUcNwngBHLeDsLvxFExZeGQfCHSfWF4WMk3TobebBWaVnMrn3ktxprnYpoWQ3SCHwitHv93",
  "key18": "2vPY4HjmMAoDUpe5qLGxSEvTad6VfVVLfD8FhjLvpzG7mhS7aFprLEnzFgqd2wm8hXmtLqwxDf11mpYhvYHgRSj5",
  "key19": "kCbehyj4uLSHC2vskUNESNXH3yKq6sryMiEJUhAZwMtsVEQhJiecia1zg9C4fZQfqaDuYh2R74XKAtkKFnQVLYF",
  "key20": "2K9xfsrPKNhPici4LaPsdXqHU3S4EUzJHEjXJ8fFDt6aXLzasGBrE1XjT71x6dfitoLj68oFG6AZY99aFduiQnAr",
  "key21": "ALQ1tfetaeAgJqkMSLjaCffzGJFydLaBQTF6Ucfzv89xC2Hj8V3iFotzUj7t9xz3KsPWdnm6QZVjZtio9ogSDhW",
  "key22": "5yMBVQeuJ4g3vygVQzRCPWPpUpvarjW8ji5a9rKNoSGSTX8NmznQs7irCTi1KbPfson68JXpN6DBrqoXdi4KJxvi",
  "key23": "5KQiCzdFN4ESgT3x8ZQAhHzfRgru7h6Putc8Sfgwoqk6oZmkXiSXgMCMzMjqEEDrkvZxmDtrpSobPnhnzj75AX11",
  "key24": "2r6hQmr88RmjZjxtMqnXzQVJJxQc95K8scAHWU38GXgQMRB4nk859Mexyogn5zcnRAsgAcDHpeLmAxTu96EHyq31",
  "key25": "5h7JpftMX26AtxbsPmeCBtWEK4yqXxkjozVt991oJP6qJZmKsdERbxkyUJgLFWgkoPe2Dd6x1RiKyha9UvpbJgAy",
  "key26": "4Ksc65eZzFXrEx85brimvweHatjK9gZ6LqUTbgo4DUYM42cw6KzBR3SeBgLEJjU8Kn127D83bmKCrzSuaqpcNW6V",
  "key27": "31PpRywc8B5XK4ZLnU7oNYJJcYLbLwZCCr9APGzdX1SreLbjcr6otdaoexfaSWeMFSTB5z5fk5HVDdrtBgnY6rAP",
  "key28": "5B9goZGDMDX3s7qxH31SJKkypMjPZEuiz5K5nej112tbWyNDoS4yTXDqbNxyzfk61WJpsbN1uC9LjaiHxDVxQuZo",
  "key29": "3JKbiEA1WiHcuL2UVaRSZuNTcmnQp88dhKmwk7amQX5EHBaJTW2A1yNHxZzJhNGBUYjjawq4sLbaEipY9tiu51Ck",
  "key30": "3yMHbb6vXPdLWrfNeb4ajtbBU1msRTQyPZjtsojMgYyzHFwC1jq5Me8i2rp1z9VifdKmsvUPAw5ir2xLEWAxEYjf",
  "key31": "Qh3PdsKaf5kcS1rYLkJm352dXwM9Rm7aF4rv2pPdqDoJdegh2WAgoRw1YcYfUjDoToUmiKi86wn1F7R1y2eFFyN",
  "key32": "3KCQSqY2PtWBXfLSeuF8nfkACAffzexcissSBQEiZydgQ7fGtpY7adNs233fFLRq4DnxqMH9GnxhxrXW9zjAe2U1",
  "key33": "4vwjFp8ZbpWKKm6m2XMTSLx3jQmCTgTjvViJaqmT2TKKY4WjNRgy6JudTZGaDWmcEQ9TrDacVCimEbdFBEXELxFc"
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
