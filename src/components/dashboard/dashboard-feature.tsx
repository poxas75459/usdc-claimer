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
    "JLwBoSQSDVvKtYPt69bCYaun1UJyoFjdkSuP26SguKPvDQ1jnsSn9oUC6MSo9BNEQyMZubRoy2CSanZ2JAhYJH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H45KaQGYsdk7WyJeGNcWGdjk65YYnfSNdtQhoThuW3B8Jyi5aFnJH76ByFkz3kaPyW7JeMAfKDMgJKqUAxnxgeM",
  "key1": "5Xg5aez46Pun8AtDKPWTfA6WFcFfn8tzSRPdvAJEgbUog2cPzJXzZ2qJLv3i4GnUZeHpS1NRb7eZk2t4x4s4JHye",
  "key2": "YNfQ33LDT853ipZHKNSiJHcySc4B6kvxVSM3mpJ7W6x4W5WW3DfsmWGFDi8nCufukQwDZUfwRJDiMUeHMyQRkow",
  "key3": "2N6Qh7moaCdroWpis12pzmRNMFww1RkYbDgCWJAGL6cmAXHcV3C8Wcjypyrbb8xkb1apw5fPAfWRuG3DXNwEVFy6",
  "key4": "5kS98J6jXxUWiNh2YLnvPrJJVsP8fftjLCbJhu2BDdL1zLcUD4A3jtYMZ7kZFMNMLWXm5cHwx9hULQ9TCrDY8aMQ",
  "key5": "46792aY8TdQNiq1Lo46VEHTtZQVPYsg6vtczrAX6PR2S9JHeo9LyNE7J2njhtovv2dBN3RCFDRJNsaTfAM929Snu",
  "key6": "4AxcYk7YMG1kmHQBY7Apfo3kmsaAWnAdr36qL3egwm2qpXGsg9UC8SQr7xNMgHeaaYEADt913JKLJBQGvWvZakE5",
  "key7": "5jFHjvkTfQtaWyk1nZgrNM23jpygAjUuLKbssCUvTKBDdJ6cK5kxyC3YzmvC41rL59AQ1gMPpcG4yS1mtyxRfdHz",
  "key8": "2yyzYXn5Du7EN35RxX2aA9Zvmp7V5Y1FbqpwRWkJk2sg9WHDHitmdymw3mDYgUmeHhVBVt3jgp98wQcT5j8fipUW",
  "key9": "4KiR1HcpSsRnb9i2RW4rkHPNHnVtppkNRwNPA5BV7rjArWHGEV6KaQ33aUNzLT6ECUZSBXSzDHDTW5zW5NwVL6d7",
  "key10": "4r6j9xSy1PubXm5CAq5zWJr2eo76hdSFT7PVZt9j4AagPPShy4xNwtQFyG14qmxBHobAgyWkX2KnPaWw9gLu1rKr",
  "key11": "4PpQKrd4f9p78ioCErQaiDZXieJYWXQie9zMttJudhzT2MppGQndMy8ctWuMV7FdfpnNVczKEywrBqVDnkR24dHp",
  "key12": "5JwQscSbMP7XceZgAfJ5pqpzJdgFRyvFjL1yc22Gatw5egr27t5ZXt4jtfsUnciLEZQnDa3MdXEoVrJZ18QfNiig",
  "key13": "5FzTsFYdG76Rwrw8zE1qMwZvPfXTR1tJvC8jBA85ABiRm7XKn5ugTFgwUcL56HrEXqpD9AdrpAnXovoMzmqm4SDP",
  "key14": "4WD4rYrmqK2vrdDm9LMPbA9H5vEdkyGdn9ohSS2Yw9WLPYdxrw6sQmd1Et2Efa1KDbmEwQ5wC7TouNUMfX1CBpkj",
  "key15": "4QqKAcY1rxjVgwfHXyEaSCtXp7qr1CFYDcD2Pw3TWMwNfkGiTr6KGvMrk3PNK1H1MWC4VzhrbUVQWt25d4iu2B5p",
  "key16": "258J5CfJzAWJHwQ9Rw72i8kAebb5Rqa75VU5k1ZMA2XNhnRJBojBVaMpXwaAMoGBMDC1ZpAoWxicUn5eTnZnVhPr",
  "key17": "gezYdaUdoHxM3NuyXwPpmz3EExnKjsuc7Vw53Th5btEHEGUshAKUX3kqDfXFhC5bHepjEFD6Tp9eHnCjHCRQYiG",
  "key18": "44p43czhGcJ8nd2imm81ehLSD8DGZCapxdsaMiGYsofJWj9dg5agUTfiz71gtyyttifBSyTR1A63LkVmuqY4XPR3",
  "key19": "2yqZEgbYzJXdsa3qyo3jVNhozGpbBt6BbvM1jbzBEMkLExVunHcUBd1s8Y3xisNKjSzU5uc4N7mM2Rrrwrb9atxn",
  "key20": "577AH5WXuEebqE3XmChN8KjrjgBNoMBMFz6jhNxxmiVHX7YmstYx4o9AHZwkeYYRVtSP1Z4F3fXj6AQan72GNGMS",
  "key21": "2sY5wKe1AM6B511Cptd4FvVuQRwpADEi266QdjdzyRcfYZKaLBrhQapS3Lsyd8nAq77HkysLNbaTvAWRxPiqNMsz",
  "key22": "2CJXMhu63LKcVHwF6m8mBQqLJDReLyUbNwNhkkQbSogLbNoPX9VmfDFjjDiC4DyRTEd4rZD7zijcevsUGCtE7Nr5",
  "key23": "2JrUs5XQe7ZS528EBiXPutWG52epJoseXQPcFJzkJmm4iKf4HTPMpnKACm3P6zcDa5cbWHZGCuaGExFmLmiYtQHJ",
  "key24": "2FoF7wzbWENAun7akLiMvhcvTGMZvbZaA3i55DE3zNJ8axazqopyxFDEFTiBubBeBCeSWDeNNbcwaar6HcTMMWm5",
  "key25": "5rdd4keZ6ZFLyciYKipRpxe1WVYkMLVqjcteNQsfYzjz5vLs5TKfVJgYb95JoUmN12aAmyz1u8b9fAaDMYbZyxRe",
  "key26": "3RANebrj5kRTPpjmx6Q6Vz88zFpNdkef1akkgYJTG9rP65TnkUjXXB7no5ciR5Gk4Xn2fGnzNTDdiqhi4eprkV9R",
  "key27": "5pvvnwr1kgDjqe6Ba9h4SZV5VzZJC34UtkHH1wtHvZ1cAh4G4MFFb7E6ZUBQPgygrzDxRrGhnv5sWCiN8SRhtaoS",
  "key28": "dYVt2HGhxkKKtzsMTCDJETT6GpsC9CbSUkH9maBR9b6kCLfa8JaEwxdxhv5a5KMF9ksokUH9kxY3AY7bovMXUL2",
  "key29": "46fU9qug37dPzb857M45TBmQqwMmtq3pBdLQzEs5re9KkoKm7JcYrgN1nEim3JKGGWdm2oQavDzJfwU6xc1ig5uu",
  "key30": "29pRVtSZGgkzWp5rGe5ACt96VGbDf1LZ75YTUxt8CDXoyEBP9h5GiNb8awkuvfqdfapBka1YNHFgFPkKMWiXURSb",
  "key31": "4snXrnfwm9LQKYFauaUKkw6EgFBzSJ28TTTorSS8xXFmpruLkpgTSjY4Dz5rBYeMzY66vAqqqepNf2Uc3aVLN6yN"
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
