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
    "55Bs6E5CymL5PrZRVn7jZpn3KMkMt7XV65sAwYvYNYcVvQ3rKEKj5dEayMdHpQ9KSDtRYb3jUCvXtB7Y17Fx44UF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ipZAb8wVWV1vZCtud7Um9aFVUb7Lar4mHJptnFRW3iiqJ6SD6BfJnTUZmupomSAVkq3GYDvr4EwDCkfUZmnvShA",
  "key1": "w8dFSpWkKxDCMXJH7yDvBAghLJVUdtJ7D5mk8mxCLR1gai47PP5Hjza5SeUfUKjvNqrL47dFJArt2zYCxbMwnRQ",
  "key2": "5WmQ28PSU9Uxrov3XjiW74HAh44C45LKhQXJabtmdKKGcEagZTbVGpHtaVnseQ6E2GLSA3V62cbbK5RQHcsFyGiQ",
  "key3": "4vN6uAE56CnRcrvVPrz8TgGR2i3kJWpXL8tFSAR2frxtSt2LCqYQReDeVed3knDrgRFSTM72hWE1eMqs5JizH7W6",
  "key4": "4CKmWV11TjNefrSSYqvqT94eJc2gaaewAkFnrwepSSQFGi2qzprwhAu1N5g6xCP3ub5WFkBVbewRAGWTn9HbCzPX",
  "key5": "4LWGjFZr3JuaGa6KQksw3NctXroUxjFNYCrPtTq35z9oHNj3A93YCcb6VqM8a6nZp1WA8KYizXokHthUYur5RYKg",
  "key6": "4HN3eHjerhnJepCzcAoszdpmhfMXuo3tKPDM8gthg9ZbxKQWHUUsE71Hq1aJUexivgHT78aT3JUA9omovm8CDHKD",
  "key7": "rWxHrrSyGp8XkxeR9RRhUKHBoetzuyiqpvP8tiQrYhzKHyUZ6NTXmRowLpppzYTuSnGNFw2pyG2gWQgMhwQojnv",
  "key8": "shDwvzMNYbrZoZ4VLT689yaH1N4LxbaFR9UKRUTjbrV2so1koj9L1Zoqet8qBdir3DAHndZsGxr11Y7iSZGk6gY",
  "key9": "BpWyfrWappVurGobVhhC9WZyD7bMQyNDHoYNBChPeVMBvea4pBgrfMXwHiEpL4kNgHQ3usrrkwnkzNUUHwzHFBU",
  "key10": "517ZuT7c2MMB8soKkom5ub1x1fqGEukUoMXuJ6gqKCn3XNvZVs6pkjqT7Np2k3RfHeegUisR5SatnCX87jrxwjCd",
  "key11": "J5MZisycx5Qva9cG1QmfUfpQnb1bS9E3S7kXTpD5YTYzZX9ZKbFAjpuJKTX4MR59i3hh1SAxzEuZ6R5EowCob35",
  "key12": "5aaP7HSG6tB8mvqhBMyQkzbxos2F7YXMCruxEVmuaPwoLGt6VTCFi6KG2RWb9UTTW2JaduzASz2j8Mf9zWekYAJS",
  "key13": "2q9YBnf2gABNZjqbYfLZG8P29pQhB34vDet2kn8B8pEaiJYDkc7gdKu6q8Et1ERaAvJ8Tsf7STgfVNvCJSbRL8Yt",
  "key14": "3hXQepNs85RKkPijNaB2JrxPw4apwcCGAR54PZP4YRQLS9GWgexAqAyTsbFuEjkfxFR5yy1bb4or9coVQS4yi5Av",
  "key15": "2zFsX6sRjTF3QTVTBZmCPvMPskgzJWJrYDHUGgRMJtSG1kKztgLSANHpENtWmwCYiHcsyT3cDiq9ZgvbPBR4xF6G",
  "key16": "2s2RkqvpJwkcAZhZ3LXKkaKhX8G9TJ3KnqfYCcTsEXvuNNnAvkVWXxUpCA5eTkMsfnzWQbpfXegroJgd9DVG1K9c",
  "key17": "TTYQgkAwL3r3bJJWgstVvSyTRffj15bdecy1peNn5u7mQEwWHE2c7JbN62H8sARXwiTHwJ5MAEsjAmFecWFYWcs",
  "key18": "59LWGjru2JJDmw9xZjqWf4GhfDHoCbc2XzknWVMrzGoJaEUchJ3kTCszrCPwNHn6u6hwDijVHaCvMFuWdT7JaBxc",
  "key19": "cpvZfMXC7a4Z9xVuCnMp8vMmYw2Ekjt6c3ZTUn4HmPmKJW8XA3q5xshhVHwBEji87BnHLuLRC81KLHoUXszVMFv",
  "key20": "2Q9svo44pcPReufrx4tT141uxXa6stn9Rs7C61Za6qqCr2fvbqBmwwwJvgtYfu7j82mFNUFSrTUyC5vx4RqR6M8w",
  "key21": "5G8gKn3bXJHhxN2mjY2rgTiHQt5hzFz3dWEsgHhTW9ZHUqspENoc4WP3YPs97GCZgNsmMzXZ7ni4QTeNxsgMrSwL",
  "key22": "5H4oqiC2V6fA15E3YYhppahSu1CfLP1wHbStppErEHv47j85EqPKWLgwA1icizRGzMwaeeCxroGvBiYZvkEQiEqd",
  "key23": "4aB81hJUYAs3APWV4Fu8g6wd5sH1Fc3dvXmHQ7jjeZZWPP3qNQSC9cEkW5hRTZtfocsrF2xSRqtaNJVeqBDyTvqC",
  "key24": "2rH1yxPMeuft9ei2Kdms8qyeHmKT1MYT1qnGTtJeNVysLR1qDdoUon2ofHMuYzfj19eEi9b2Bhx5miRQmFDBH1gL",
  "key25": "4XKtyyhYUa277N599zYfZS7gTtrHCYd4uD4c2LuSjELnA1FfYGRpXF2LxnhZukqfSXWgywd356YeJDLXAwRoytQH",
  "key26": "BvMBhFxMC6yako1VwXkXNNPfzFVu9iUPTQemzEswcmuYdbZxy8eyeRGMmzu6pfBAARrfa7PaXLaY559JrqPxNuE",
  "key27": "58gkL7XTQCHtrRLUcBVb9KMqzypaAAASzt1h6a1Gj5znMhZguQe5jYQ867bewMTpJt2F1PC7PwYsQdf6ypZQBY2F",
  "key28": "7dkQQqnuKMNXVC2hu4g3THBoHDC9YrnUsH8hy4TU66F94zFHcBX3GmaXNSLShGCJLyF21iMNkqBZdRuqZb1K3F9",
  "key29": "5EDdUXSccMRhJFEmF7povAzVARRQ8z1XgKKeERp8ipBoeAu5gkqrDpJGZJpQxtAPrGEYrkKJNmFtbhPXmW5YsKnY",
  "key30": "2aLo3W7TcsXK5uzZRjBy6t94cPimmrAa3oTEU7BLGHh7rVoHoa8cPXN11BregqKtNGaM3bGkV5jPeGheHjZzvtYK",
  "key31": "36FHgeqxZWDnqqjtBnZ1kr37HZLe8PsfDTPkb3NMXoWCsgz3qUaWa6hj6BoRFsUUGxGJZiwfzPnPY9yWNYev3a1y",
  "key32": "5X77yJZzubWekafh6MuHWhUD1P2MCGuM8JRJ5NncGB8PymmfzTF99192eizheVRZmNgsqyLEvREXGB5mfL6qqFtq"
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
