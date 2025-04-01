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
    "61PKbRoWhHVB8TMGL9pDzW6yUWFsK4tE56S4eLiDH7wpgdAES7LWvEt9D5J3x75JRDVa4uJeKPTGj2RR4YU8MGBM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V11zHoUkMwkM7234EjkJKbuao7QbGXckTrCksG1y59dXdFMbMAutmW6Mm8FNj1cqobg21kD8CyrcnonmcHpDn5e",
  "key1": "28sjvFFQoxv6pbgQKxegpzFXvEWDTFWsDCov9UJVsiPcAWcdP1xqh7dV6taa8DSEZ841iFh6iSKju5RmqfKsdvqA",
  "key2": "39jrVcUm5UT7hX3JQtT3GnUL7QgiPS8DK5fxS9i7sKLuHCR6avzoWjfwhjuNEMT79DghZf2uCogAw1yKSsUuiFrq",
  "key3": "3PMX6pFokFCVy8zVwQzRaKs96LhCEvVK8Zmx9i7faySiEw6SC1yx2YhKTwB9eWC7cBrNCeFBTuwrqh7zU6rLyDZM",
  "key4": "3Y6nkqes2WwELJt5mXiKm45HFB36NkmEjZ49Yh9WCoSFSpYHfq5rwCdWStMMdfwTXG5TjkTzR6579ZDn6NoChTRF",
  "key5": "265uwaZ95F1N8XkMVsXM1wLBC6E7RACRbTKNLEwXgdSmMKqoeDY18BkVwEEgLD9fwnMCpqm2kJnx2HZk39DcQUkX",
  "key6": "TcNTrqtCkhE953Vcr6ywNP8M2QXbuzLMJ1Vafq5TVux8R3qtnjN5KydX4Ne8VBWGhEBuJBriiU8TCoTMNrYgr2n",
  "key7": "5uFJDJT43RYNwhfMVLuYcCiHeEo2KM8p2ip9HABnhKXtCzWUb2p75CBuQaBijRwHJnn4P9QkMD8JMhV8vge2ecpP",
  "key8": "4f4zmA5L2H8xNkvjeDLh4DfsiZBqTbfPdFtFdYsZSLsPgw5d47kawZemfS9Ps6yrU9iv6bsYcE9chmw5cWqwamXP",
  "key9": "5oBSY8wWKChRqkGiLkmgkXwkuB8ibzHohP2cYrnDSMcCS4WEkwGNVAp2ByueH1YRupBKDfSEf9Jr972BiJngAFsk",
  "key10": "5wBHwCsxYKiojv9uJMPgQAqK6vE4qV5KUjDVcLbEKKiWYf7m2fWAYwL5zDvxKzoZTMxu2mES3TPLTVsKczdN44ma",
  "key11": "2EQFjcMseMb8UHQS126Kjq6Mrtj15sHRzBp2e8S9KoZJbaQfNFUqwbFcBUSWkrK5dGdTiHt9KrLVoUyweNUUQtMy",
  "key12": "hkYedw6yEZWu8gHYbouckUzRM3bdtNYn2BeXNgyHWJJ6rJ1gH7YuxHBnQPMigGLHuZfx24LF2wp5dRsvQA2BqhL",
  "key13": "267nrkuD68BhjAgmvPM9ZTTYQMR5VEZ2zpQKJaCNdFSpeqtKiq5xgqAW1bgj6YYV91ib4hcfXBT71Yed6RJXtt9p",
  "key14": "2PBVgRxzvDgrUA2PcDNVUcUjkWJwSwVgswNiLzAHkzo34zUQFcpxTyi3kiui14j2HkLB5zs4seejf1byoqt3Z9vx",
  "key15": "4ALonCRmxRZGSq7TnppioDCeGdcx2PEGgxoqme3qjQAQFH5ivpmACWK2aTcjXWiBh2RAHy9uu4zzTydZNAucFukU",
  "key16": "Ro9dyexq3SHouymhMeUYoqM8v2Yx19a9YZKkNSNYxrwcjYJY15StH362za5cAMEFpyqX13mbnWVjo6FpH9R6Fk6",
  "key17": "wXWL1Xho5VWcJqgzFk2iTx3u5eSb5Mq8w6tHqfZ8E8goH7HkPo2FuWrLHmwWV25CwNgDc19k6GYQgsre3St9S7V",
  "key18": "5aYpqzxgh5izpC6kGkvETMo1YP4SceJ7xTJbHgP7LJYqdryY5S9fGh7oirChjQtQtbYYbJ6uswRLKAD7TrVeXXkD",
  "key19": "zW3oBcRNK7RC97ip9THcHteZsCVDjJJuGJykm4qR5ijm5qDLZoYTF4oB2TYeJXNStRrFYrGwb8iBF3ybRxhHCkp",
  "key20": "2JNN6oq7Y7uLGnWPwZEmnSKgqDB1HkL1y75oHUMsdKZ6Eckg2B7jT9u86fUKEJaF19eURmC44r3Vpeeh2yjQKDte",
  "key21": "2Gif4dcrEbygwyXEpBexC3VqDyUks4j9XT4SuEa49BPCiiJH952n5DFeJHjZgF9C9pmXmoNE19YYmTpUn23NiVns",
  "key22": "z3dStHbRfwzpFnqhLvaQyegTB1wtjrAb4XZqtFeDz55RUgEr8mzQVjFiFngrjWRGoLzkjV8cQsvYA8939JiksFi",
  "key23": "4gQNMy5rfugNC6X3zRAvL8tyiMZTrdDfyHYkpTgnKct3MLL4PTKpsciC5iqWmGYKHiroL3n6GmXQfEv412XzNySe",
  "key24": "5pacKBuJ4vfceeqZm1euBzBqSdQNLhQEC71s3grTLG4kcgG5ehi1yqhdUqreEn1pWm6idQKaJiNRG5TLuFmBSLyx",
  "key25": "2GomNjodrgDgfcRFgzBJNtr86HECBei25dxYgToWF85UK5p8QGtE78aGDfQTZae1VHHkZQEyethy54kuZRg8eo2p",
  "key26": "524uoeMTpNQtc1boik1VKvqBYTMqA8QJB6iAcF4dYu7cjA6oBjADFSUxPyHnF2D14kWHwJ7XV9yytYPem7eXPSMn",
  "key27": "32PaZyKeLsQGm5YdqmVjyd9FK6DWsP8QrwUExfgYdQLedZjpruYLNyH8AAUSu9nTQgq4iVb2d2gq8ddcFEX5RX3X",
  "key28": "gCgkb1ZRgALFEncF1GMqP4baA5Eyq1HWeoHgFBt6rwg7ydVZkjbD5q2pUFSR7LxkPHpW35Cuq31QEpS3LAzWsPn",
  "key29": "ABaAWmBmHE4SwTXyQSaSMNdjhcQTn235XnhfYoUiyykUGSoiLxDfYJnhfEFEQwyoS2fL6J5CPRPpTk8hcxRqL3p",
  "key30": "3uecr4N8SRBfpfGU4hUQVnPGddMKnkGpUx2tGVWaK4r7opQ5FPFPJ3vDzdBpfotseVYpG8kvj2M6oq5BF9o6BaDp",
  "key31": "59Uanz6JDzdKjBduhbvPGjn6frYsxorSNEbpHf5FMw2FnmTET2Kt3HGvsYE5MufuXXBj2YHHVjZasQGLZ23PkGdH",
  "key32": "3zEgox8Quiu7TiygDM3DvKGZAghvpXYQsJRB4upWjLzCraZctbcu624AFqUo4qR3DAKRJRvPw9aByBLViarHD8ba",
  "key33": "4y9TfTyuY4qYQ1MFrUBNobf955FVKeYEmwTG2unCLWjfvcmyhKmkWtQ2f2taZVZvkfZCRSEgG2QSGbPJknLz9zHV",
  "key34": "4DcR8wNJW2qUbxmg9hgJCpi5pLMUWPN4UG6jwrJonm2G7heMS1yMxEvKa7BfCVhTV3h4DZRV3MhLKfAwQtKHfsN4",
  "key35": "2gWSFQNUJ263RLmHmYoTMnZpPcuQJvQ3KtjDg1R16MzoEsqsUNhseUjvaMiDzPFkEQ1dCCGeDKfCYcgtUAFNv6Gv",
  "key36": "5ivzGbsAuAtN6fNhpyCyJoJRHRrNUFSudF7Tn5dguYfVdMb7G4fnTEid4ZHvs65M8avkoGxZj13BxkuDbQzEwoFZ",
  "key37": "65qSV9MDZKiogagoERw49ziGTCDE5JbXsL5zji78Fv8ZgFTHSF5XNjbbW6ZNG65KqLeZ6gyPYS5BhiP4rTaiBBBg",
  "key38": "DDgh7ExiVP7STGjq9uWDYHoavQeW1peiYni2fU8aoBUmZ7HxbbBvNj7ZaMSsTdb8Avnss6YFNRLCTRncimEy1oi"
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
