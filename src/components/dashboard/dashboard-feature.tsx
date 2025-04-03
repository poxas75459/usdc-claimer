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
    "4Hx9MBCvoACYwkTHTnuzZjEw2zfXbo36QyYE7EGmoR4yHuQKs62aLfydSrXB46r586KXZ12kURU7zfk8wPVhRwZK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eng4HUofQ1v6ASDnHk5YZThgQJjmvbzwEVqBv5rYcpXwwSDUuFM31bqsv7zCTpMDEhqvSwu18mZv2JBPcWPvat7",
  "key1": "4cFCXbapCcj3GeEX1Ro6kbpXWzMris6PSxC26eKuKrqc4h6LBqA1kp7yXemRv6g8J64k1MiLqKBDkWWvcdf1nT4X",
  "key2": "5hGFtLc1wyRFdiUtKhRrMVRVQNzmd3B6hbbsbxZLnfZp6a2tumChL4MhMJ1EP4jTDQcv6RedLqbbNBf8722yDrU1",
  "key3": "2NZDLe3VUBc5AMiXCoC8Y2NJgwgCt5uwgpNb9uwpgRNgD7q1jvECmLo92imdzCc8YgNbhZeLi2ShbE45rjRgj7Wa",
  "key4": "5v6TtWB5irCfpo3QLBwaSDEZs5BsoC4pFuZ4s4rMsGBz7y8NENsqEbJcEEeheh8fYVDWPmHoZSUZhhwWdDHfmnLA",
  "key5": "2sKn3T5Pf1rMS7pCGqwDBsLVpTSca6VR6mfxVcC8TaneHvzte9fXPjjax1fTyux7xaiGPSPDR7XsbnetyXR4gVpY",
  "key6": "2WLMHvfzampxpXox4PyjQk8VgWPAa2jXhFU1i2bExL3j6vcw6yazGxqXx894ADfTjLSozRYAUB1RCyXDuPyQRUSe",
  "key7": "5FpJ99wLVPSho4f1fLXQTJ53wsuUfx6xsBJejwbWfb4y3rtKM7rBarGhuBSF78eJZs5bYcxZR4yyivD69Qkakx2Z",
  "key8": "3ZNYkhMt7oGnsNZ8pD7ZbJUvPUb8iWYbotGHWEixKLc7TJqJqrFqVFntkmtgZE2fyr8v6WUjENuNos7w1RqfMjdL",
  "key9": "615TME5JkhJ7n6bzqoKDHL2RmwV6VfVv3VCwWJkD3HarKnvpdyqkJnwr3mqoBLb6WnnhQTCgyvbC3nVctkR41CV6",
  "key10": "2Kva7rm1JNLKvXNwakefgCtXJYCDGG3wpZutwAkwFs7j3dfADtvAY8JoZ8GVSgVAJQjBiVJ4GK78WPnuYL7wHQTS",
  "key11": "2dvAWK5M34js4AxLaWiGeX3fr87L9yDJAjBTFdz5WjbCk9EU9Kw3pSM7tki2npm588m2be9fWkLAv5irgUUwoL7k",
  "key12": "2nFUAUuBZ4nGJKKDYK9aVzzoxns6sSZqM9Pkroiczvz6GA8qQLEN1t9m1F3wKraiXav44LrzxwgsZGsKiNbJfRVJ",
  "key13": "xo8CtevXDcTS3NCj4S5J6UbomdBM8cDBh1amScRYEXxkLkoKBLiye1Lgxb7czXrQNS1BrMEyT3xFQqQQQTFE69Q",
  "key14": "2Lyh8VYwZyQ3xitAiF5M2j5GZK4PaYCZdpKeNMey1FzPbdjcr8bNx45GtzfFqwokdxUwg2r1GFu58UwsYyEXCCxZ",
  "key15": "3MExyMYgSSjAKcy2Bxr77f3HMcxQxYdxihb2sFoKEhQDVKDHu6mZAXoecjTW5WJWpm4dv2naR5SmNr9xJAVuJiNz",
  "key16": "57AjaqJhUtZAtbqkXyxfN1DmUatV9eCh5i6FR8wY1P7F5s5R7xsVpUDA56mYz9GjXW6SmUjeUJERAzf4zrotqaBf",
  "key17": "2yVCi7JPSaoaHWDYhhHxoHC2p5qrFmmMVSUAA88YvZ1WFTE9L5iKSHMUQDxqsWJnzMjrqz3Cc7vzAY6iziV97W4n",
  "key18": "4wTiSoZoKL2iX489gQR28SqPjyse1U8cPgoxkni7YVCLgrthbxZuvrMPXiqYMabF2xo1hqxfAjCiKyxAkxmTuVRt",
  "key19": "2TSh23QWiDdEigBpGzT8naAefXASP4CLYZLrzfhyh86pmr5nJ4Gpg3Rii9GtLRiZp3Tr9FFLJ2DTNFAriS11mwxT",
  "key20": "3T7mpykToMi2nBuF4Peb7pWZmPEsomXhxGtV6GBWH1brjuTDETDwfC9yLNDdJvFhEC55Xw7Pa8KW8gnAWUKbeiXd",
  "key21": "363pJPBgGLCoLPj5WtL3wQnS95nompyjn1Z6VhT2KdiEzJEUGvLGXPfHunBCrCGUv8WUTQvb2igfjtWGp7Eb9hyB",
  "key22": "2gDKiX7gLMciQ2qjTenCyDPQQazXkbpnM7bMuNQChbsyVMmHg6KUiEAy3hrZWo6dFK7SaZ6GPuQGCV6uzzAG7iLo",
  "key23": "3SC7KfFK6Hpvs9VRJRNQy7njTqBbC4wjtJ8NgAh4Xo67fRtUSFF1BU82xKqEYdTcjJFhrNTRtjb97FikgL8dcwf4",
  "key24": "AHZSPGXkENqayswvMJrqNb7futbGoBkYxiC1ik31xDie4TuywWPF1oSYWpXZoYfnyP5m6pcs18shV5u1ng9Lvcu",
  "key25": "2SCunA8e9219V3sQMf18AJPJw7ZKoUN4XkkzRmLbFQWg7rU2UZQwrb62cXyB7ySbygze1rG3XYFanhmpeK2j4xvC",
  "key26": "3vZkFAjAc3reTCZ68sFdyC7DGF5Ev9AtNtWZkgt2spavospr39C2c5FgVvERNgGFCPBPKL9hBqmMuTaaCZRuJtha"
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
