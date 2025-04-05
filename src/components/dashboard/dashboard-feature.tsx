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
    "AYqMzBBuStWXr598EHEbtrdzgLoQfGvP6Y5btfyMfvLowiimqTaw2C3ZQrv2yfbUaFLfmdKaRNR9KDm6p6ir96G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "254jDtBad77RGNSxhssbqX175Ukrina5AFiUKsEGkNYycLaKawMBhNx1F7dh1cZ6GxWgtCAogHu8yvxeVXU5CWWF",
  "key1": "51n4mjgFTgQT6f3CQ8LsjRgixgCKDeW71KgbL1ywDPaqoyP6odKSzY3CRUVrgruF96edyDPkzCBiRTEygbWb6DF6",
  "key2": "4hRCcGyRSnDTwLvKXJgNH7567cF1M6BhKGDKhSt3zUCMyu4smmztHzEiSGUUJ4QytpGYJuiRrsTuzn6HqX21wzVx",
  "key3": "4XNywLjDAJj1HktpfJqnTduJnf4KyXw2MXqts4mDc6CasFMbaJDXdtR5rqsodgTVMHRUxJauLNu7WUnarGTbrnKq",
  "key4": "iU7RucXkJzfRJtNp1E9beDXDgjquyDwP6h95X4FhEZHLNsEw8BpCHunMrTQwxGXfRyUJQsZKX26Jttz8WLwT3S1",
  "key5": "2wdaMyJoQv9DsiA8o7CFDF74wZAtXtFmU7cY4EU11dFABC9kzKFU14WerYTV2AmgFpunmUeKcuAphF8ExADw4tHv",
  "key6": "5bjj7k3ZM73eHdbACUw1CujRfCYNxay1XPh9oT4tKS6aVEHGGotUMSr6yfuuC793QT1PCQN7TkFww9cyDvHUEp9r",
  "key7": "9DinB8piSPf85YiDtzEdfWrTgVJgw1fUUpPLaEH7xTVDYPkJLSyMz1Ms7C6gG4PLpwjxmMG6vrxrRrQdQaf4mWp",
  "key8": "jJ7usbDgoXnUHAGKDEDSgTqwMXuDFJttqnD5refvDD3visz2aiUkbRyqmyS2LY7pZ4zba17rfoL3Y4Q6Wyq6CQ8",
  "key9": "5Fd6kbrcCa2U6rMYUvBsA8N6E2TBGChxK2gaK7CS1rkJrSW6yVgNotZGvyRWDMxovWCr4HnJq4XrJF515XkYvGPz",
  "key10": "5zeSs7d7mUwRLDUu3FbYKPaDJzBXUwV3Nx6AySmmR3pdEJiQ9Rs2fr6G3DpZztv7DKdnxdvbUFW69cPimEppsf24",
  "key11": "5yN6Caa6GMNpqGsfg19CN9yz43xqjCbVCFEgLEGLnEW8xTEyk9bzBKhmLGqjfjiAdnB7GF6QzwoDA31ZEdybv69x",
  "key12": "XJJW1WaytKzQmYKAd3574d24114v3g8BsKpLuXTFfEbFjfqLDhF38pvm4vPJyCXiWUakafywq1ke3rbbYPAGjoo",
  "key13": "2eqQfw5VTcKq96cdh4WhjDZ8DRkJsHRkzaCEPscUdbjpKpUhhHtBxp5GCiVMeurg3MoMiJz3N66LL83oGWdcZYQ8",
  "key14": "5ZR2e9EgV4MA3Q25ujkU6j3bZnQZ2ZQMoByKDq2XaFqrqKrHh9JweykJoA9EyrF8fQw7d71W2k6faRZL4xo4Tcq6",
  "key15": "3Zsb2Po6ri1REa7pNh5AirFDAqKvdsKe8E4cuEP1B8CAW8YaWKPTSWfUtEp3BQeXHnhSsXuDbuD31QNNuntoM6RL",
  "key16": "GsMpEdUJK3GDGn7G7F8f3gNhGCnzo37WXtxefbVpLWW9aCB2JbRbLhfWeTyzvH5esQNh266SMzLZczEkpPzYY5Y",
  "key17": "o8CdXUPbYPmCbE6nTatxTX8CfchiXYp5Ca1jpFXodeW8HMun5z1hGiN6R33R9Hny4hb7V928dzAs6RYZyDWGRoM",
  "key18": "7drTNfw3omzyrxUUvyXxQq8PhqdXUAC83txEvgw28o3T5QxwanEwAmZNhKZZgRZCgj4r7pLvxKh31A5aQBQTD12",
  "key19": "5xB1rnM8VH33dSPSgeaSRBoNE8TYKpPHjcb9d418AUmjsC2RrQsNeiuHn4DGQEvh5oA9og8pJ7yBJFsiiGMK9amL",
  "key20": "zW5VSTZa3Bb8V44hS4nctxgF5GVx6yZiNDmeT24gqUGCg8xqPzz6cuwr7zcnZUSigqipjXZgCyHG7ieZuQ6Q9L1",
  "key21": "4e85pUVzdnboPomHhbqAATX25Ruo2CVfXUwucX2muL75g9kHJWPHGRMiWNTBeBTB81br7r4PqUF4Ng1evb24io32",
  "key22": "5AvemsfFqvrrGyukDXH1qGYup5WPeNeWjo3NoNy66j2A9oGcBuzKd76hnq5yyPKdxSY1Xee1SJ6gKm356Scgcawa",
  "key23": "5kuCbmtzwmwhQeXBvwropuWKZtexmu15hjWeFYL6AD5MHnfHrCGByNjxKL1qydSbsdkZKwTgA7zSA3MXsmfjZwju",
  "key24": "3SUAZZoswkwxL3MBYEi1kMwywHHedZJy8JW1rqyJpeW4Achhouwoocybb1C2M6uXSMhF1c9VJZHWGS9dcRTRr6AN",
  "key25": "5T8sDNyi3CGA8z3uGnv3UADvGupW4zSJVSNSYsGhc8R9p1PmmZnXDGLtG5rmJ3je2PJN8AsTbqDB6qpqBWydMroD",
  "key26": "2775FwJb5pueB76dFWjLtF3tuniHmZDvsHdm4gDiMuXpR81Aksj9FHJoDu6U7aWdHrzavvN1A6LE5rdeySqJhBHA"
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
