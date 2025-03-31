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
    "2ec1wnPiVQS7myJt6unX71RyPwTPpyi8Ve5CzmBfgMouWhpwEnNZKaPepqucRr4UZVChTm91zQL4QPpMGXT3NpMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pw9A4Q9pUe9Je1mV1R17kBxcs48pTR4H8GnnycwHN8VKyDFGVAZWHvGc5kXKMyQAffBXiVPgWgrC9p9JzDpGVBJ",
  "key1": "ENBURYbnkXyTQ9cfmhDQwUuh2o7ViN87NXmNYZYeUVHX6yKCB5zxh73kjLf6xRu5KGGmb5f5oCtePGJjKWANgmP",
  "key2": "4FJQsUWGYjyRopBFqCt3MbCMMv5qY1C5CQEJWVP1EbwxR4ySZPZbagSUipKeZ7eqpCr6tpQrHHdpEoTkRVDip4bL",
  "key3": "54aVApHgonvnhSuRWGbxEn1kGLX9mYy8Sd2GYR4cGr1rxprmobQ3EK3eJHoVVAYKqaDGjZqPwwE2yD5SnS4VHRU8",
  "key4": "3E6MBCthSEQkZfJyU7DHfZhxTN8iTfqo9fg6HSEZQ8U8VxYaMZAorzUvndTeo691a7HvpHcbxAxeCG6KD6Z9fVyj",
  "key5": "b914FKx7swDupTQdkx9dnGoCVq9HYCvvwbo4ho4oePM9cco1zZHYPF1erm3AigqDRiSUGNBCt34mvJXiEPoXhVc",
  "key6": "24VQJ6k8bUHvCphfhU73wsngRKeqs6m5zZwrjTYHX11SFHZxboQycAkfyV42arTELkRVWwe1FnXR4bG7eGZQSmBj",
  "key7": "3afLLm7hW4PrSJNG9uxPnsJufAgWHHtiFcC6DaXiNmDfaLT8WCmifBcFi5NJUdyqT2TUxMgNxbRgkM9f4ML7EuF4",
  "key8": "JE4WNxvGeGECjB8y6BED929WUPd32PzkPcb2W541wxyTh5iNsU1rd3xbwsepFVvVCSgLgp8XRJ5XxhUi7f55T5a",
  "key9": "7S77TtAPChcNpsUd3YB693nEqVbFFL3mm7TiVXhz8VUWJ7bmoS94XmmZcb8DajWUyV8QYDoHvyVpJULPvDSXKV6",
  "key10": "4hboPAkwn617eWrseK71VNSecGSLhAEsutmwBeDzfoxHaFYvxLpnxVKjAegQrYy6HA95nPPAVaqTeTwRDMFdHSUn",
  "key11": "Rhnoth6sADKnTdNLpEpm6XW6n7q3QiGJBasUUHesruHNkqH3UrFU1imYUU3yJVgsQdr3A1PpGCPGG1M1Gubybnk",
  "key12": "5DxEss4B8gSzXWjwAw2hzqRoupixEHbtdkCdn1fNUb93bmPvnApHyjapdhFNr1RkuxSDMtZ4KCXTkVp7w7YTnjYK",
  "key13": "67izKZjCa4fjLYh5rXYcRPnWnvAKop64Ta1oNqpkybXGiMPXzJpRxdRVK6k7Rk166kpk6QXb1Jmhe2JSkNyhvXV5",
  "key14": "668xZ7vQaJErKRUEZEQmVjYNmXqXsWt82k8HxiZRpq3QxRN3h7riGTY6fLdUTMZmNumcqPnZAz2kzFQdpNMpNCvp",
  "key15": "4FjUjGraTMiWwrJePxWRvH7yaSNFBzADiYZvbfsuCDzfHp3RQ7r5mPBhviDUAb1ze6vr84nwg15GP5jS9FehRWMH",
  "key16": "3YLcPkKryAxEW1QKkDKmi1kB7zJi2sVDTT1ju3Fd8riWmKs1hjSqAMvVkydcux9jf2ewhAHLd4XKHM8SoPYG7XxK",
  "key17": "5Cn453DnMr91UUZjeUrSk1TxGTjqYhiHBDGb9JUUrdc81tRP81WLdpkBXF6QrPMuyzGZsivpkp6ngPwSXhP3CNLw",
  "key18": "xezwzihcdge2DycahL46MKstMknBTwsPRvRvThFqZaKGeDqCLcgYWdmfFA3SeaHvwFErSUJRTeUU3RqWPTtLzCk",
  "key19": "3qCqQcw6kaZjUBaKChkVggprvtbvAuG6rPaC2wCcqUJqzn8zchz8RojzdLP2vvsVtrxa9r7zpD7PVq1W8gJ7jrkD",
  "key20": "5WRFgnCJTmMHeSquKGvT3vMuvbyrCfXXcd2dFsZkUtt9YtsUfZj83Cf1qfw8Rm2NaxTTpU4ydQThYyTD7LypZPSr",
  "key21": "3EbHit5VUZ9BSo2VeoyyaMp5pSmDJhnCtw88c3tSKikC5Lv5yjfkKdf6EDN5V1naJ9fb1cW9vn26UipT59VbpiPg",
  "key22": "41GoQMcNerM4BfqoaWXXLLX4Buo4VRLh7jrggPBPsr6JU5iwKysRqCsD5193ihrvsUyskt9Wy783Az2TH6Tj2NFh",
  "key23": "bEm84KTcJ6ax8SgvPXDMQ5V1kFrrtPzJd4CDX4LfsKycSVTVbeJvVkkpjB3HgeuwbVtr7KKfWUxmoKxMY5NZSXq",
  "key24": "4QGxftrF8QV9UBZYdN3vqEPBHknHDzDYpgsbSxun8gKTEoZzWtEDuCECeAzSuFu43kTjsQrPnAPojyqd3mKS7L7c",
  "key25": "36ett343qQWpNYhfmehMdHnJtM7wiDRLx3vuZLdm9b4LL75Q4yrirgndj4PyAz1Ri4iyH4gSqZHrLaihRKV43k5S",
  "key26": "2c1Hd6LVFi5NZjt7NfkAxd3Bzsfsfe7Hjm7RV5hJmZdohgdWh3vcQR7dyQgpXrENSHZndYnXX2bm4cEweRjwk3Z7",
  "key27": "3gsdQHATpdVLu1EvLackwdgG2bX6hofZeyFCeMRz7keWtD5h2SBdP9zF2tsQACs9PH4aCstJi38dyuXkTkyvcKKY",
  "key28": "2eKqHUtRQpDKqv5dxeYWJvR4ybC8vNZLVBRqeo2Pequ3fHfHjvJpgNA68MQDgNfi82WjpnaKpvZ1ybpG5iyM3DyF",
  "key29": "4B3sCiB1vGFRRLzeqN86jwzUW7Bff63H3Djw2D9sjvpEjpdq4LCgjhw6DiL4Ebz6TaAkr5WEq2uFzLhv5N3ZYdfq",
  "key30": "3M52WkTAdDwaHkeyFbRQQAsDCze8iJjCW7FXNqX1FSEsRMYMpWwA8u9BY49nxPtAGxo7yJzyd3VYciL4C6LBFRYi",
  "key31": "5iV7sQ5frNsJdnLoGhzgVwSJyj6FY7nHd1n6jpYABPGNjWLR8tKvwrBfJG9h3mjpzGkrQQdVtuR8T3Ads3YPuzFM",
  "key32": "31EQhUdVgp78pcexjNafFNyixzZ94PqPuWzCrkFdqTB8jmQNzsGJFpwVdyLwXwCmv2NFGv9wEvPMERbPMbTjUe3N"
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
