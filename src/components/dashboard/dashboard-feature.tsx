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
    "4vtozmtGmmB8vP35KetqSUayUc46muH6oG33ytkDKXi1FQZPUvXEYN3oeBkxfnrtKje2XrxStnNnV3Zim4upBBPv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mowTpMRqmLQfRZiLhdacCqabdRMB5Gc8DRzNh5eUJqv27KaLjGedKs1ESHDmsjN5hNmJVkSEHagPSwZ6usMNQAy",
  "key1": "3bPm5gzhFqyTicsVJH745XRPLkV1KHdR7CYeg15VhKC1hXKBbyi2FuaYhB8eMVSHKiCuBVMoRCKzVuj82N1VzYWR",
  "key2": "5XReodjhQfJZaPbbmutBHgB38jz5ejjGRummfjTj1npUWjwRTV1H7Tw96f47rdrNGjv9KULz4uEf3vq9xdC5Yb5w",
  "key3": "3vvCpb81fhVFnNp4bJoiRscpWkhXoG6AePh3nFJmtJxd9PzTUZVRm5D8pT3JpfUqT3cQqo4H3Wb1b8x1iGt36UfG",
  "key4": "3L16oGbC1fMUX2oMzpGWAjLCBTva8oBRXKTWQ8NKRHFJamYpgkPMXASQTrWQR4EM8EqiGXbCvBssidHUPJuZw6rk",
  "key5": "4eewL9seNbGJZGSCraYpcxty7cMJrvBjefMNjfv3m52eLqD5kZyXdQDQgAxFAjjohUkFR9cjFC141EgrEXxQ3kAa",
  "key6": "YGZpwfb3gJPMBbmFZWR38twuRBAnF28vQqzvj5o45L323jjtVHMVyrtPovSZzc9stgH8gyQUUJesNiF84TXxTGh",
  "key7": "7UiRoG9238r1wy54RgYzUVZd7GuC6knYb6u2byj1z6nNW5j5NJeYdUgAWJ2cxbh6G5jRAKT57qNm82qNRwHcz9U",
  "key8": "47nkFtypP3MzF251PTNARhKmoCwpFmLCjbbRVY5SJ7hP64YdqGiuRKv5CEZCG7h9785wyFU5ERydFn1yHxvtNr82",
  "key9": "2HobvZMctT1BspSqgPYniGfzi2kbahb5nvCMBhcgeFj6Eaa9GnpwArmMdNxW9kRUGkwt9XQvkMDckYNKgC4z3uiZ",
  "key10": "3XXi4qGRPWn4Ya9BXtUCar3QsVEDmYhagyr72NWRYmMuFushgUpX7FXHN27Y54BegMdLant3pkb4N4EQQ258EdFs",
  "key11": "4hVCoKPbWAHn27ZjK7jeuM7LKb91ytGEShc1ZF8zbkFALv75wegc9SMXbjExpbjnYMmxE4AJRet77it9eabfU4J9",
  "key12": "21AedyyaRfdsL8yKgBV81bQes1QfLaMY7ha6T49MMTPVqDFYhQejys22Yih8AN2QSYRLSHqCy92ADwk6cESsc8ay",
  "key13": "37EVYwRVVH15Pgvhxfv7PhZEuDhrVqSAFgAuDmEbVUfCbSX5Q472RHqpVQ2HkgD23qxxVQ64u2rWKwnVVtnx3wN1",
  "key14": "vn2V9c8LX8HEqyK1RCxbyqbAs21ZbkWuVoD7AG6MACKdtVn4SkhSNCGWMo7MX11JhCdJHQqMnwysX1DC9qqaGbY",
  "key15": "3FCSNiqGGVZ3gwNwMhszfhfQsUMLZwSaFSfyeFcYfCDwN1U4yia62XfzdNXCF1kHypWx7EtBNhYoW2NfmzPJUiuM",
  "key16": "EWMUJM3BjTB7KdnNr3mfFhJTJseEFH6j3rpBWaKDDQ4qS4Y29BSWHgJU8285zQ1fr3CahkSQEpvXhPvdk7nVhsd",
  "key17": "3xQbfKRVJY2sPokEF8t1zU2ktexJeQii9dTJFL7DYAV2inZrVo2ZehccxFoGQQFz66zWbpS4EcsSxcsxRsGd1YXB",
  "key18": "5wzu8tZBoK3mM9jo9YHmVHwWt6fPsm5gKSyU7aFJhSKUwyH7jkYwnXRLrdu1px5Tsxad8LpinEPC47Zi456VUpUd",
  "key19": "4XUzfGxmg2nRpQL4bEdeD4ThKnp9oQFd2fkwsn8qbpiycoA3XDSDZJJRZXf8C3HH2tSE2JqSXh671qanCCUosbUL",
  "key20": "4eGjgWrXMNLGqzhtL6x5MWZTZPfWZMXRoVhViUUnSF5M63VrawDm6SUoXCDx5veC97HGxLJjGMmfZf5AkBbUXAHV",
  "key21": "2xgqyJGDcJuRY5sjPqRSwBbmViGKkYn2Nidhr6E64jr1cFZe4J2EpoPPacLJrmhc6CLJJZMdS1GC9zm238dgmcw4",
  "key22": "4qtHhNa1bTQtbWiMwiaxtoFaTyVDq3kiXF7F5tsU41vYww8vdtBEmco1MbY2k4vwsZrRVTXgoRYzYUYHcLRPrTcT",
  "key23": "vwv98E9azSgWTUV1qYTz4jdxRdinBkQoo6ivxpS53pKc1W3nMdwLtWoEEGFDTXqZ2eSLL672ByffFCyLios4wZn",
  "key24": "4ayv14x12MGJJU9riqSRpx8kZDRbBWPiYqT6P5HP8HUMaGDobhuPwJ6nSM6uUTCGqpYyD1ynGQe47tSkNfAFuKqz",
  "key25": "VszBZQxF6BfCiGver33jDGSPuv7KF1EShtHSCQNHxQXQHTow7adFZ4y6dXrE4sCJ6rum63gLAt9azXNnEaJubEe",
  "key26": "sqe6SwA4h4GUTucVzrgSGU2RYfECGppVFAgcvaAYzUEhVbGkruCgbY7vmktprbcx3jU433XBqi3CNu2jDo87bwu",
  "key27": "5sEUYLfr6PwA3TreVU3HGCm3Cvkb9E56zKpRLbFTD9dCZxDFiCziuQqRUs3QptQrUqWv7PvSbio3LndTYJVXnGnx",
  "key28": "hCSJceYZNEvGM2cPzi1JYd6XNzKaKx2wbWDPx3FC1zHKNGU3tMq1CZEftXxVTXc4uC56jD7zLg9zmPvpPK3HgK2",
  "key29": "43vtsMqFZk9KfmSi4jcjKUnArg18ssAAz4w9xasYKXgJyrR6s4EdwMf71ekhWvAkgkzHEpVuek5pSJgWfhk7dwsA",
  "key30": "DqS6AXnBQ4ivyW9vopQQYHbUXFnYGUck5qEiVeoJirYusbFPxxGG5b1cuWbcsA3yGuDnjLCEpN9AgmqCwpeRd3P",
  "key31": "r9Nt4e6wZWmtzas2dYKrQL4Wo7iLPhZLkT9MpXbEgDnXmYrqptaJmGb8pm9cdM7fWHnQzzVX7m5Dxb2f5u5NTzr",
  "key32": "5nTFmyZMzLFEGXSuHDZ4vkfBpLfCaQHqy4fGWTHqCBDrwkeFU489duDD9CCboynDJCjFBWYgrHfiFmRfs1mPj9gg",
  "key33": "129r17GbujqsB1PdE8siVwwuF3qJQ5t8ZBe7Hyq6j6EqVAKYDvFbJWhCyXZVtpN9HZQF7XwiaeTPWTdFKf2fkPcC",
  "key34": "5XmWsAK8HLwLqapwiMgpd1bKTBciPuuQsgwjAjUc6GMqV3sFbsrCfEdnqLKU5msSfomCx3urF5L18ntrQ6dPjydH"
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
