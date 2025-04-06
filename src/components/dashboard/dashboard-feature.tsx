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
    "2KVcWm3SPD3PzwZ42wJu6tVV6g5YgdAgyoxpU7B7bDfSF612xfkXompRLBz6S3LayMbGtLxuDthmBowVxUWRHkY9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4az7hSvup9VpoVoZaJEsZhyzvqs9rqgRkMmSrQwrjsLM5YoU25X3LK5DmxjTU5uR74kraDTdUApqVg4Ljs7zhAtw",
  "key1": "36PH9iaSsCQGcZFzV9gNxEVgS13AtcCEpXTMnBixsQS4FSGHXohKq1ZNXDCVzYH439zFpPFsvMYMRpNkVy47L25m",
  "key2": "4HPCv5EUoLXsmx2NNJJp1AjNTpeY6qXf5Fp5RqrMUEZ9izj83ZJMAr1mX7zsa6pVfk63JjtghgArcfvUye5XDyBc",
  "key3": "xT27iEVxYX5QeZJNFpF612DGMV2uwdDT9wWinTbCXkKV2N8V3g2K5A6X5JvhKRcGAoxUcmL1k1JNKrmVJLBPXGV",
  "key4": "qMQu8KZTFX5MR7oNUx8ys78zLNZapqfk6EfyuFP1hoiZTYHdvtBJDqpd99t57BTPYTTyg6mnCn59K12eoC9kxn5",
  "key5": "4ks12DWpdz1oHKvniHkcapcMzdKyx6EzyttpfMqFfBPtGZUgrMqXZnZdFZprifwDErDhu6U9usEmkkvbnb4t1VP3",
  "key6": "38uUgjUfSkG73VD8HjNbhJPnHAs2J6kSuMzP6hiybLCiZNJuruYvWeDVJ7yfMkzmPDVXfTrrgD6Kre7mFyjvo4dD",
  "key7": "5TYnLzJSYcaimPe6C3949Tey11BmJZHWDkx7eMu3dbGXHeRuwkRx9Fkpw6oNHVc1KVq4cFbpxQV9H1hdK8TMCYH4",
  "key8": "br23dh6t1zP5CfS3ugjZBY4eWDZT5UfhcvgUotxqZQ68U1SzNG4ZKhNN6PoSAMtMmcW3hg6K3ABNWDsp3oJt6g4",
  "key9": "K2jLtBiGMCTG92P3nsmDuMNTNiejBBd5rvJP9fMPTJeEGeY4XYrdbH9u6WZS8MsEiwxExL7hACcy4iD1xF1pSdB",
  "key10": "58xajsmKA5eSkwMS1chwFGBS5TADG4dj4CdJmKna5VYPKuUXFN443Q3FHvN88ohgQmSQmgBMKbhY1D4iNLqEfKAn",
  "key11": "3wUEUAJwA7db92XB1EAjvYEv9myP3FHC4k5Saqj1ZSDuKiFG1rWXS8H8G2DF91AamAz8rjMqAbwmiQUxyDXGghwy",
  "key12": "2cTPyNRtx2bvaFMqVWrzmSRzc6kagi3fZbc794g2Lohwdw4vvRiokNdiVDB8SPVUHQYGHAphVJRS77HDangYqaTz",
  "key13": "22qdSA52Tj1NPuyZ531RJfvN8LMjpn65HDSAx4cNTd9jDC9z43SYVnfUXKdTq25DHGsjuhZqhSButtN9D1Gwyzff",
  "key14": "VMBTPXp4ZwaY3cM9mYhbjVbftTkJnwrfJkZ7pXQqCMMc2jeuNzo8KSxhpRGbJbCt6huhZTezKrqhbYgNgJP9yhc",
  "key15": "3FDBFsC9f1TM2QqLV3xTVCdmwSm6Qk3xkHxuMbFmjNWJPtXBtwAGFkrv34iSt8hm1o8JGqzCuyb74hpVSpEhc4iy",
  "key16": "5MtfftSGe55audMUjoBp98fbzm2J1zsbdQtBYopd23rC51EYPzs5TCeasqcDK3htrGnG6iLSj6Lu11KPfxe28uve",
  "key17": "4D8md84RYYqQymMMp5Fj3XnbRuXFHckFyKvwXXkdamgbbZvq5f4Tyk3fondQ9CYDnoPqvtZFHSATivxXoyM63cS2",
  "key18": "5gfXsSyGYaNoY2oXwxB4RSNGfzN8vD532TjpyEX6bkQxX7CQSGsCZ9GHnUsQHh7uGk5w54EonrB7gtqsSVz2ziBK",
  "key19": "2r8Ke1KuMJpS4ePjDxRobhF5tqUGM5XpbcVh7YrA59YXXZVoYZWZ2N3k36GiorVdYhzdaN68TRsCSbVNg9VQwuU1",
  "key20": "5kbPQpf1RxH3Y6WEGNvKGmjAQScgs4cCz6CTSQXkVypKdVkXfdumhqZEPBFHDGUQRXQUuM28DTwYaoBsZeUy3aH5",
  "key21": "5yaCZ3LaoXCWSwsPda451y6cuCews1AMJYZmCfC23UrigwoDi4RFhRhfZkbTPsAqqMC3hdi58vnapNbtvUcpBisn",
  "key22": "2FuSfR6cUrAUqvB1H2RXTqQquNUA3Zyxowembkpda7wfnUYsXRWbdYBxX7sXpZm6g9pNnuY5eEviNr8gJs1DSpWT",
  "key23": "3nVbndaSbaZioJMb46UVim3ihveFv27AaYBPNm3bgsMW7wzexPSSAzoKQc69H69hHzF5QaMA3uztVVhzHwBovTAy",
  "key24": "4g3sxuHsGYSyXQqUMdtG5yAp4VE45cFXYiHbB3UhPNtJ8cjbFXn2L8qHLKWBBTA9RaVbdcRrjEmatn5YzXnXFXkp",
  "key25": "4YN8UytweyRLie7kPe4238dkbc2C6hBFoRFJm527Q1wNZuVuWmMcL7st7tkzq1ENoesjD22UNBqCYRtz6JFa8RzZ",
  "key26": "64vzJSqsZGaSaj2k7CYhaGsgSUZG2CuZaK4FMb4af2Nt8JKmM1kiB5zNCKwm8kLgWrVwyJryHUziuZwwLru46hsT",
  "key27": "3oqvy33UxAWq6UKqQ5FWbdcMRLfob5N188vsLSerwb25dR3LqGrUspGFgGNiGugZLrz8emFp2GQeqseVh3U6Xafn",
  "key28": "5Uz2RHuoBbGGcMUZJYF7DwaSkWkvXtF3Gug5qbsdT89SP913tAcaSchDwYaNqm4ZbZwPVZEpAhogVxb8zgAq4WLF",
  "key29": "4GbPiPw1xW5un5hs9uxZDKZGv4yYudtCtgvx2mJTGdKdVrQPGyeTwLuNMXciqTAqy37XW5SVRA9V9oRGhztCg2tT",
  "key30": "mxhAryVrGGdbK14F35kWFmddGYc3MAgRQMJuQDSCJ8qAFRGiXpQnTvwDXYJvQbtcQXoPUxWto8T66fAHx9aFa7p"
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
