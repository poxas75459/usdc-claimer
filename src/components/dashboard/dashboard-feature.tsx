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
    "4YWf3WFrcgnw6y3WQoNKKTQvTq1evcAKrd1im1ADjiJkUy919ZT3TUuRCnfkwsBdUUaUFiB4RQh9Tqt51zpTrCKm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67NBeWAkfWZM3aTvaS3nG94Wp8fJGEHpoFdFgbnUeac4RZjCrUYqncJPCTWSUFqmBBNvhg3S1WW2PwyZkDHyugQc",
  "key1": "3zpKueps6YtcHm45ATqVKNfsWcAyaM6jG9v8UvrDYypGoF7sLAjk2EQWETAjMVRVFQBK2KqkAWS4KA6ukcCxHEg9",
  "key2": "WQ4rwhFi4RZGagPcT3uWKCJBSrhznhwp7AUAxaKZ2aoUqSzVUiZvvv81pYc5PbSevuNGNzzFvQsxZLurc9pzmGS",
  "key3": "4dfkcMsZV7w61iopZyEgmWsdrsTmZ4c3PwVqxFcqV5mj16ULd12fyNJFMQx7BnbVvdRV3acPYMz97zKVdyiCQV6R",
  "key4": "54qshJ29woyb9FGqerVxfJxUYud8o5bgqXKCSdRJtt6dYazGfNsE9qEdwewskshmkJs8vAjREfHZ2NcUDGs2eCBW",
  "key5": "2UU7fM5u1wtpKooai8gLbW5QBAC3KYNvZUdfML2ih78otRpAVpDfLavTz7YYbfhPMLXG4sV7DHhmYhtCr96AicyV",
  "key6": "4umssk1dPTMqYTZafY1H14BPSWMWpRNix2G3EDp2BExMvzpkTFx3YAfhsjkZDQZEyTzfPmaCFTD1a3gwef7wtcBc",
  "key7": "4ytVmWtUmvarDicKZ11mD44q65btFR4FCBW4329RL3254hdxH53tuJKg1KvJmYWMGYpLekaE4Yoa3PHkwv7R9d8C",
  "key8": "64teKa1khFc8yN8vDZWW4nMeSrTFPCtG1Xy2mF926FftszMGbhUdrEQMzbBGceE7MhAkvsjLMoggMNdYLJqgYY4k",
  "key9": "4imHkifok3X14kun27Pxpqg5R4dsYBt8WHV3f5d6AqJ14bBfA91pcyFVDkxhsV1LLRfR4pmvuj4w9GVwS6c9Wj6Z",
  "key10": "2o1V3BhNkpiGt1FyVLGs6wTAX5piPW1uZHVijLTeK3rrzCmg2kZpoxLhr6T8gHF9hLQrnJuFU7JS5uZFbK28RuAs",
  "key11": "3kxZAjtNWdzaAYZBu1r8WsCqHh1L39kw7kQwpd9gQ6TUZrbY1fApcewRCnwzg9qtiMiaZ6JkHtFtMvp18xBrw72w",
  "key12": "5jtJudVdsnGupHMuABMeY1NUxsz3u13R6M3HoTQGVJajbEQRi1zT2XwyK69Djb5FKtfW41DWPjtwJ7x5LtjrYHpv",
  "key13": "hvT1E87ZU2WqRP4q9EDjtF7w8srr4XsdijzvKZKM7jEMUtC473vvnPmNeFgzCUCLy72b2fWxNrxRfyZBhrysoca",
  "key14": "5iRNaUEcQgREpitwyTcW1BmPjeiMtCzJi2EeudhNP5DHhsbbw1XZwTXtZgHe64BfXGu5eYJUUv5PVhjwRfdhrPnp",
  "key15": "3qTtMAoXSHeJUkTA49kMF5nK8rrF8XBRKhggTXEQXc2Y7JeWPdp3NL2GN1WTsGHZk56veMyvcyQ1RwA1HSxvUjQ9",
  "key16": "3MZ4xXo3uLJHxd85KUNEXDsP3nd2Ur5NpinsDePy7HRMetXWhRA3uSKhU7MCrzG3nXsLGK7DJ9QpWcCjofJZHB44",
  "key17": "63stpeQMCA5qAcv5Gyh9tN7R98PMNJspvstyv5yDLkWVLJStEd3bDQMxsGtH6yAP4G5UevS7NQwtGHNLEyibuRz9",
  "key18": "4zdbA7NBjJawC6CXcjS33Jv1vYVzgC5ajceGeALTVpwUQW1rYEaaQtHRgA36V8htwVytbcX4N4WKQoAKURZfcM2B",
  "key19": "4VEpMqHdioGhDcsMsd4AHCEez9NvicKpcmCi6bnp4ANwJ15nJG2pGAs68gMuXyR549eznmka6pCYNbySX74YhAbW",
  "key20": "7v4JMSRBHiZNF4wCe9w9Pz53uQmWQhFPHUuLusWJyvM7MdbyhKwFTaouZiGTsuZTzK6CVkpQX1cS69u21k9GQ5x",
  "key21": "4RquHueNbu168Xu8SpX7DAL7xGFeKhhmVYejZrrSdr61kpcBprVg3rmEKDM2uJhR2iMdHXUvp6LrSRRNg5ttNjCY",
  "key22": "2hLvLop24C9aqGHS32a46C414hXgUvVEScXxjtXQFwbbVKwYHzCyzP5rAUceeYvE7LNk1fF7LJH4y5LTyGaa66Yw",
  "key23": "316PqLZR87AgSuPNjGvThWLUQFz8UcYZCQU4Nd7hhoGxeEr4d54XboQQcJktj5LcwMRMz77vvnrwV1NSdsJQUU21",
  "key24": "5eJhHveq3EMmeeC4ujSDeAu4amiP29KaM8HGYTzmaGSnbH4wN2bMKBJMpVmxsMxVuWJT2fuKn1wrEQEhDhqWU65i"
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
