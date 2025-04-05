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
    "3c1fxB7rSUXp6uQTj7xXzjsvdXpaVdYYjN2J6PKNNsQnMEcw7SkRigZbqhTkuMDcQwbz3stR3z4wEZ9bCYGNZyqa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23eDXfYoTVVfGuQZuAjMQZZrybEimjiWQXYzAbVidsayVfKKCaSqMstB5aXDS4MLreuvCRkrv3LeexLyBofW3Spk",
  "key1": "5Bhb39shbNquTKNP2ULv4fY5eF4vedS53DEwyjFyvP16XzzXYBEKPe1zG4q1mvQcUPmY3dRDgBUiK68QGQzZwBjC",
  "key2": "2W2meHesVEV77XF4YwTUMuzSeFZFUVWBGsV5UpPtwUSsA6ua5sVuWY8UoQ63uuagAxyhrVhEDnSW6khDj5Z7Hnju",
  "key3": "cEwsJDYFQtBXgbrvdhYmM3uNrDfJsVh4qT62785b3S47VFAXgtz6c9H5wfoCoHr2C77aMcpbkDC3cU17Za8AA43",
  "key4": "3vYjWrAsx4tWpHY9nPPptQ8nsnTZe8Ynm8Giyuaw3HeiuTDb2VDiEfSv4KMA8RMBy8qAqdef5WByHyrLP6RDynKJ",
  "key5": "2SWvcPKLdjhtw5LNvitem73qz3CoL9c3EMEuomvZriGmjnq68Q2NHZJ7z7zhfVvw2bBS36XiEZStLHgaB6wYBJA8",
  "key6": "5varENx5MZWwwfKVTZuxLUnD6JJ7jDs5vpVpkYAf5Qtw858uotxDKqtCiY4n9aXj2dnNu1wvEVQsT4otygkJxMDp",
  "key7": "43uGLvkmffHMNSx1E3GbKPRPtkXfHT4FKJu8HbZXyt2QC9HfxqkqPq63sh6gzNJsKX9ZWECVWwx4bY6F21YEXiJH",
  "key8": "xpZw62Y4JRTCDVMfWAVUhNFgdvRw9TzM4mb5G3MWHjEn56SJGF1C3XNd3jkD3hwmVnmxHW2wVg3x7pbDrfadFXx",
  "key9": "4xpnoyfdKJbFT43vsnpbS8csXyKMHCjeyBCGFS1AT8wr1F3mp87bdNG5QMVcp9uLXFiowBxcCs9TVVTSQpUM5QHC",
  "key10": "2pWFXpkDsTbXM4Nf794MDbWQWRVe3cqx7WEgeQuQ1sRhe2NY9UjnQP6nrq4v7W8swi1EkGz7GaQftvKfDkir4xwe",
  "key11": "2gG6bzZh5TtBJk3qZsy2swWbMbovbe5o3Hh3kVK6LbG2RMWQaGNtZ7xf35zgnUd9ka8eTjrB1HRKTo2Z3Z46qDSp",
  "key12": "611SejELECyoUZv2HLWBd1Cuacq5TAKK4gKaMjhXdc78m6jitu6QKYqXiKGQASGveKPcobX4udRtxoZwZoeyFvph",
  "key13": "PGQJfckX5Cj29AGJ18F9vnLEp7RUuYjFhCPEaN3EnrdRoNuNAfvHsXiofmQmyACEqCtAkAh8mLEhrYkzuhFWtu2",
  "key14": "2jjH5yN13kHRxJL4pbM4rBaKniErLpB3uLNxGQ5RBmz4nbfTyC1Mf5om3pNLWMXnbVj4xQ4fdXo3TqGFhBbzLkqR",
  "key15": "2Mpk9KHDW5H2Gi3CDpKRx4C5hFJvfN4nadn8F2MvEzGGYVK2raVArTQ12EkUSQEvcKTFpsfmiQaYX9U1LrZrp42y",
  "key16": "o2YA7dDAf7LGWYFdZKrNpZyha9UCaMUeQWdRvbYx7YsATAh8tHvGWB1KG7QFtfEZVfZREKoi2f4bdNVNa2sgLRU",
  "key17": "mpdHHq1TsHwXF6ggMiQFP3qJmh9di73BPt2vJNUEtHZqnspK1c3iws6V3xXLs6QmEVpSPgRc3okoDu64qcNohYM",
  "key18": "4HqFYDCuyU8MqXscaJknsR3WzdvR3pqEunBidv6dANxJqUAqgwnXVL12XKkCYCUuVT2QpVo4LVWC9n4XohSB43PY",
  "key19": "2Jz19xCLTARdBNsjGCeHbs3DoPGxLnvVruD8vYN6RFdGjHP2ySZvmc4VFLALEf7EL3MY4xJmB5TXaWouw46B3HrY",
  "key20": "3oE7LbjJF3RNodR4D4nt6GSXFqdYVfWS1ikwBS2fPnf2dZrGkHZVnaF2wgg3sPFBQ4ndP1pAA3C21diCtcRL5r6Y",
  "key21": "4cL6gDLnBMHJr7DbpRowvLmuR87Ukt4yMX8N5uwiuCFdou9LnATNoT7GZv6PdrZa1ZqTcft4ooxZ5HpBU5ibVd75",
  "key22": "4ywrmTCLRmqWSfTCLWo3knGzUYxwkTYGFGW6dyTgnt8VAJgzKNZk48jPath9W7HUYnRrAF3uEFaTpyDdjCWK7fDG",
  "key23": "4S8wKcvaFkmBjEGfuzaoWKXoBeno6fnsKmp3Z6UPdKKW12pQPvmXKaY8z272kjTUjnbDSqnG8jfRr97nJgTbr1J8",
  "key24": "kDkcnfxEDN1PshXgJDAQEhX814AEMebtCVh8UCR5Qx4z8p5BGm1GWMpGRCiMSLwPKqrS3wyDMpJw65Xa29i7ibK",
  "key25": "5K2qGQ9CSMqmLFdKTY2pPoxbLjvhA3gHkmt4RzgZ7ZN9bP3R3AWmEsfZhESs6daYdsDV6s8uFyiopeoBSxKQnMTR",
  "key26": "2RC1BaongiruJjLFdvhMdiD7Yu8pk8USoiGzg6PZtxSn2mLe6jJfeDEZMvGvRqGk2PoPthnMW58CEFpFqxCk2BQP",
  "key27": "54Tjncu6FDWBPxoWSCiiSVtLdcRziXZmHX8ppsCmEPXrUpR6D1XYDNLKxWk6fEaXhEkghtrcMQck6Z8Sq6A7GzBp",
  "key28": "39euguj63FRtfcTnXNZqiBTixzGbfeoHDmThDCdYYFP1kAfLuYxhCcswqBZ7rwtm5EznHyrhh8VY8q5TEJ7VWChQ"
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
