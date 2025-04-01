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
    "5H2rQr8CXEyXrftXra84m8YHAxvc1Bu35nB6fTAc3KvCsTAkqLWXqbvkyjUQQ1cUqBdeBREYwDe5xmAcepx47Syp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zU8MJBPGdtoXVFBUCw3CR8eKYDKg6njoZ1LjDF97WHXJTmoDWSoau9feSdL2w2qUxERSAdrichn9PFPW21n3hyN",
  "key1": "2tGoxkWxMqhfJfxpqQdYdXxJKHYDPGvQbB7exSM72HbCfrZFP7atvNJJWs3ANrXrAay2apJ9rNmLASAsoqc55n9q",
  "key2": "4ADYmjaAaZwEg5C5QQZHX1bc3eNKBHHiuyp5ZtqHgpYBZKkXdoigXmLA1u8DLzfCNNTEVPdFn4ugRYLGd72GKepV",
  "key3": "3pYnHrkjDmVdFHHJgGZWg5DB7MNMKBPLq25ssVwyYQEmHe764K4qjvWDXr2F8zGYobaxupPwWLGxkZKeoKJSfURq",
  "key4": "3pzjUAoBi5E3TKb6W6CEcP5KcnVdnYDt9jaHxshpbSRmRqDX71Cc29qoWyRsrAndaApgRVL81i5mHssaF1N8GdUB",
  "key5": "5ihfnRZ9xX2afNmALiqMXYHGxxnWJJhcTsS1fjn4mgF38Z5YfyiQc6brnmPYWnufehrQVg4yPyPjLpGHeQK7MDhv",
  "key6": "5JcSnWxEwThepZAac6PxvA8HxwDPEvnesa79D3UTpAqo5xVpCnMmuxxJ5dz8wbyKTxhDBeqHJNEAsU9wsCMupA7x",
  "key7": "5ZVf6d2U54vYkRfBWXiri162rNdqgghJwWqbJoGycfJzZN9tu38oH7i8EgDvg7RsjqAajdXL5n6yvsesXooDkgse",
  "key8": "5jEbWWWxfhEwzKHh928AyJr8T91GPMW8JzuKKGg2XhMTvQwvognunpbbw3pUqXn8F28vN9LdKeiJBAPUDt5ED9sZ",
  "key9": "XJB4eCLWK3eoy7xeoTscbyo3Gzojq1UoMuWj3XAomambfZay9yzu3wXxXp5NAmx543Lt23vAo5Bb1B3MExGqWZz",
  "key10": "w1xCfrWKya2QobniZwa8zywmbTyG6bbSop26bDtgvG3M3hZMvGQ4uSQavaHbGE1EjcuKphu7kiKNLb9Wv1ywFLX",
  "key11": "2nRgihsm3Ka1PjaXs1hTXrUttBxfpmqoTvHrwJ8BHbqoBAWDt2MGTHGS3ce5vmy66eUYrGZ5Tfojj5SgYLMC5FuK",
  "key12": "aSKpVx3MVmTwk1j8zPTsX42RUWhCKFaoSQJ8tcvgtjWe3qdrAMBVqMDUkmwA3NfNU2KicDBit2VmjeYFCFrz4kZ",
  "key13": "4TDcHeD5kVD97ks3UdWs3n2U5yu9ZZNhEPzD4NbbWMCAnFRKT772jdkUBnse9sLLf8FEreGvyDv6rYgFDFTy3oNT",
  "key14": "4QgamAZL4mNssuvqQg8Pc47zNBtnt87YCLTEhL3SRf2X6nHa2EckwuT96uTfR4i14SzR5PcE3xpm1eBsRUvNqybj",
  "key15": "54m7fLT8j9uCrmBMjXo2mHxFZEyy1sjrMNq3Nt1xgWgkhsQAwH37NARHkuSV63L2todvNJm8RMb5Xp8Jn3gHwBDH",
  "key16": "NYP8F9UruxmjTNCHHuJXpdG7L1XkQDRV1PL8LSGM3qH3S3XV82X1hZioJKMD2E15Luk7aNW8m5JhAGNMWJmUNjW",
  "key17": "3t5jmBQS24SoRfGyd3cE529CgnU2iv3td855CEBtSFyhZkvCmhZQbS4P6WLrQfhuiUZ1vWGLHQQrGTDv7xy4khAk",
  "key18": "2n6oA6RWsBaUmBgZqZp1cjHSiMRQUQAMSYE7sjaM76xG8zPKUxmsowdW692fanVoaKpRFUKN8RVJwJQBAuu2g9Dh",
  "key19": "4gaA3wUfTR1urJq1AfT6cVm8KQcDudMLqqJjnfDk6Lh8Yhofgoju7KcfREExUYkiL36RYgaXwPJXcAcNGT8HMGb8",
  "key20": "3U6zmd1TSp9cCRnf81VcpkEorD2R6xTUzdAbdzM3M2nsMFSwecYwDHmRV7yDBnFAuWdw6Mhni1VzEzv14j4A1YyD",
  "key21": "5wqGtmSKo7j16apcDR3Xse4sF8PXR6JJvKbPDpoMF5nrxfQ2zLhYcJLwPJyNQyWuyLgJAhUbyYxwiTrbzVyiAogG",
  "key22": "395ym6URB2Hus4f1nMENZ7QzeH19QdMCeR3wDnrFEqUqS5aPzwswbA7MHm37MAA36xuscWCJdRGY26hP8P5CWPN5",
  "key23": "2FDP6yCpaHG744FCrqV5aYTcrrEUoKWNB9zSJtkvFEsw9stoUzaqgM9HhuKJ4ostFCmoH8B94jmSmPZ3YtFSLKS7",
  "key24": "4JjKNjCyWdju2b5p5jF2JUdWucdus5Mb7MHA4e8GjACp18Vmaf7qWeMA4eRxAvJ4HRhVc83KqUFSMRhePAUmXuvy",
  "key25": "4jAoS9qRYtNmNm17opQ1Efug2bVa1BoavtVLCFgwGyQcsgvGFLHkcmpPm7nxRQsPArt5U2j75fPo9cRvYLnfesM6",
  "key26": "btBHon5yzoEdSbPpj3XCvkyafdXKUJ91GpZjXsn9N3ERjYwGza8dHZj1jvidiW4gmryn384HvsefLHQauyyR98Q",
  "key27": "2bfNd58hrHmMwwyET2XPAmNV13M67gmbGjTpdNFbksVuCDZfQneWCjbhmwt4XAewDXW3tBX8mTXgoR7vUknvNXv"
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
