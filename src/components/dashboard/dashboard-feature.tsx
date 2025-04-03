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
    "59Hxt7U6RBBDGRJzQuznx28PY5E3tK3fZaeCWD2ZTuFmoNpkm28SixgwZFemvnoN7QWsphFNnv6C5rQ35yM33yj6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QNTpyCqCod7xEi4juJZ9cKELmiRD3UQSXrARwhoVDxsfFaw4cwMG5nLoqu6eGBd1zXW291sRkRdRNNJV8LBMMQC",
  "key1": "4LaH9bBoYdzdKqEonXyHsna8wSGsFxqJVRkGWWMoxp1NJr5cmBmwrgLUAaeY6nqhs4jHYN6QxiG8AoubUs88uqHz",
  "key2": "5V9wPnub83jBs29FPNGfPEw5vprpbyLSBEr1EQySEHqALQrE4YaGJkrSZqkZZRMZ8YayrKiGaRRMxyzZYEunJFCf",
  "key3": "4F2SqicezHfNMKNQuApUcnEMmVKo4aPcAHRH2e4geHT3BtUEQegobYnZJoifXZSmCKnaXLiGVkgWuUW6mJ6d5Vif",
  "key4": "2aR8rDud5NhshJuVsLX2Qc8c9yYSjb23BuDsop7b4qHsgGXhmeJHffbSuXcCVseoPYzc9ypY11JhSRpyH4ouVRdN",
  "key5": "KsKBJgfQ3Nc2z31KSGkyE1qMxWC4uj9MBGFSTVSXKkUTMEst9t9iKBKLCxyiSonnUF3JKYuuYTdXh3zKz9ey7bG",
  "key6": "2JA5aRB3NXMkv8RQUDvQ1ERD6bTYfaCipimWxuWxGdgza4AknxApsjBHKt6v4vmV3hPhycry3xat3dcEnQbe2hVR",
  "key7": "3mBvmrt8C1nmbjMQBt9AzKAWUWWC59uzwiQQhe5boaoqwARtpKX6wE5ycdYHkhDTRu5ejnKztmRFtzpTf4gGEFWt",
  "key8": "ZiMBRFuUqoHRJAVHUzfHu7SPJ7MtDNurDUQLmga8iNACRgwQf7967DvTU3C8hcW5EssgE1gFqPoswZJUGgR8seM",
  "key9": "5UrG8W3hE1SrSvYrqfLJS8mJZ7gf9qUZfXiMETUp4mQDgTNXhwcVwteJBMjEbQKjyevP5DBnhz8wGhcdkdj5tXJE",
  "key10": "5Xoq9z39wpH7krtgFD5GxhsciHy2ELMdVk4kP8yuFXfREaivc2rbrjAGgFs889EqXSsmBCPEso9csqpoYZ9PdFkd",
  "key11": "33URsF5LJAQNDXWzojmy3Znq2vFGYaASBVqdSEqJoH7GNnH2jgYE1Zj1eZAS6a8mA7e9hwtuDJdAM4gN7VX8DBY5",
  "key12": "tzDcUa8rnz5BgBGtb9cckPed83G3k112YsqfNFiSJwjABcec8CbsDN8KSBEegurQQ9vgTCVHLqKgFpZWoZ4mkbj",
  "key13": "YRxrbKgj9sEWYHhTdnXhaamGEe1gKv8ooqMJi6EAgY1kQEsTmtHVZzucEeTVpc43edfdGAJhncGJsdEWWEBpEdb",
  "key14": "AkycaQC5XuwYj6vVaj4uiiX1DMnYHUV6kQabrmCju2vgvhUK6J5KJqnkie5ZK3Sj3D9rkKxF1ghx58THA2VUPGk",
  "key15": "42xWgrdeNzBCJUNnDbvYias87ZadynpH1B5HR9URYbSX9q81ggY77YM5tUc2PgXcw6XmZy8JKGmkdGKAah1UgxZq",
  "key16": "2yd7gnG8U27DLxKXsB54AacM1bpFaHEaXhbesNUDtt7WSa4xDnzV6XXkeyKAVa5ohvFcryo7KEiwvQMqC4xLDLWZ",
  "key17": "4sAx915mvXZh8Gc5ofp4cpf4orjbXQcgz1yj8par959QLKu6bmfQbKpCgbPkVWraagPw3Drodz3yScnJ6oEPSrZc",
  "key18": "45Aj5rL3VPTZRfy2abNr7q9rrvG3ev9fcX7wgNQhPbYbppEzAnc36A2rNuvT3E8M8EBdaXieeEg8o97DkbJVJASr",
  "key19": "nERJBi4svnHkAaAoDEQ8TGmDEcuEWQyHz1WEWKrodTaD32k93yC3Fe91RbB6ruAqoj4EF4Un2LRR1gbqGmGfwrU",
  "key20": "66AtGjLRxh4YeCd28uSL2WCPMgHyYU1w14MdBfPmor7bdKoFhdQg7yK5eZQuSrfd1wYhCeXhP9p9HqhyDh9PcbZW",
  "key21": "57tPbdse4G3SY5rFq1qQo3KPS7VxW8mo2L4fnnQkLR53TwH6PcGeepUz2sHHNeqFXgJymoDfJeEtoUkKurXD1DSc",
  "key22": "49v1yqhZPfQH6ccXU5sX2SyHutbZaU4ivZZWKbnoNX1fufH5NaT3veHNfvYPV5EbmuZm86rhqPaiJygpeTUCFX83",
  "key23": "ftiB1UYxwYou1R7p8725J1JbE1ifbcs7pZAk9Xdi4ghvNrvH9UC2WKDETd9VLNhie9T1PRChoz3BJPBdSYHoPm1",
  "key24": "4yGxByoWkyo11BhqAzM85oAySm8zY94HenE8jdVB3zkhwCP1aUyH1HhnUNrTQRKvb6G3cWTSXe9KpkqynUNL7B2P"
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
