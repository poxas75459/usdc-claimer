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
    "2RruKWhwhENurbDcAL2ERUTJu9wnn2VrHnpgzWvLFJAP8oDTFUVfYjYhkhZF14V8cVrSkjmqB7ijdVKUf1CNWpK7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66jMdZM7ak46Fb1uZZQATwhqYABhWA5nYb34U3dH51X9MGENv9WBS57vyzrUJLft9uvn2obsGHPqiAi77EKamwK",
  "key1": "2L8eX9nkyiM1dXT5FaMqcYfJCqh84VcJbdaErRhuT6izekQVTKHdbX2BL3rCCfLx6baXbEtctsbb4cgAbBKmLKaT",
  "key2": "4ddcS9C3cFPMqtovf9eBH1rvcFvfTSvwXEbqam1QrC5DAJaXmaCRx7GhnJpW2BPsBkzc4My2TqyEDWP9dzFbLiHb",
  "key3": "4XZ7tGvVTPHkaBe5HG2QuZZj7bYL4tvkD3VcWWz6UCQMsp3Ym3nKAyiqmpkKx54ajCz9oU86N8X1oevXEZBnfLQJ",
  "key4": "iXDbrQmjJoWFG1q5nNrVQCEuTBS48fvcV5g2MEEjjjC4rRtbJrnsne4uzYFA4D2NatPq6vkdL4vu1Xb8ofjztyt",
  "key5": "3XXWH1AMqhTSJd2tpU5SNVgzTSW1meFL9zfUa4bqhMezu27dz35ZGLhuiGxC4xkJMarxoTgbXsCGJyGGwBuNqYkD",
  "key6": "2YiKUsLNNTqkCNGV4ReYpHyMLL1JGcf2Me7EepxbNPjWLf42guRK7JHwejmE5C7EMRgm7751gtwpn5BUF57asarz",
  "key7": "5ovsEVc7odSC1yzyNJhpZJnZGbdpQPKWpMYwvXHBBop5VcBYNtSsXx2jers3ySM5NoFkSy1iiBQUF8DubF1gmJpE",
  "key8": "4GYqm4Wxpi5yKhZ8uqWNDX6xKuGxoKsxz5rmupCzMyhs44JyQop3PL9FWsvq66VK7oHsVwtCUJ4KFhwSV957nXTQ",
  "key9": "4SsirxKWeQhLPDs2KKcTcVX3CXdK4GGNkoPm8L4T2PX9t547JogvwvRhmcasmpm6Qg47etHRgv4mPnNd23sRvRLi",
  "key10": "4rrFsatQiostP8wAmtmvKW1ZhFufn46LEyfccHVZre7m1YNzhnEJvmsMMVk496Xs8FRiW9o2ZG8qstHPRCiwu4fe",
  "key11": "2RBWBhYfZixRGxaAy3ioPgmxwjnhv8BWwC3854wib6JuwSp5dmXMRksN9RYVuX9MShBHXiFwJoL1Dd9AaVXNPTWW",
  "key12": "4PgrysbnoTVaYr67PBgseXB9tNoJmUrdWFYsFXta7VCeMwoYGWUcUxbdSQ43qz3wSzMmGdUdLVqyVP6S3Dt57S51",
  "key13": "4qbFtsVet2ogD7CKzAsDJy2zcB5NntcfurrdP6Y4DuJwLmMJiYBBQyUWN6czJ3SHXZR5yHFQFpRJndHbrEt3ktnA",
  "key14": "2rPwdFe88SQhakwkcjFgT9gYZHsMe9hvhpHEvRGsx9DRCE7NbC7KUPfziEDqQ7q72uESQYxJVcqWUhng5s6HpoJ7",
  "key15": "5btsMtMwKTtiRX3nHFaN65YYi3BwQm6Lvvnf9yDC2qmqW3zzNTNUqvULk7ny3GSm4qdHHd64nsysyEBPFzGHdkZU",
  "key16": "DrCNTf52daekVQQVJaNApGgjHtgHGMZaJkK8Ss21nHHXrsKZ8g4inXLc6Z7VQevAMVik5FZ9PoVEMVeeDo8UMqS",
  "key17": "mkt79oMX5t73CLaRFiQNKo5TDqjazGh29jiMboZsnHsDkjhGG7wcSe6QRMmhWwi5aNkVt1CaCpuQRUvpatjX5Nf",
  "key18": "3UfuCaC9AWwJAwauCxDJwzyqAqCGqYnVwM2ieaW69RZcBcHdMfFobNVTsip5hqmpUjDNof9twHNo5GjVk8ENhLX6",
  "key19": "3r4Koq8Dq52X1sz6YdfTqRoqFVv4WitRtzNs92QHSswKjTx7PLVLCYMgR9qPSWvYt5AR1A8fXiNrs6X6jg9nr2Pq",
  "key20": "2XYG9YVMuKVwiR1kjiRNy8Lzi2ifXBjpsugAje1Bkkqi1mrwToeSda7TJ1MwqwKCzqv14nF18zt6pvSHfMQWntwa",
  "key21": "4mTa6YiMx1uBJHBvYC41gh8nFHaFSc6pzYr7ASS3VzT1ghQrr3XtvNAnUm3wNSsKAsFeWqEJcLLteek8QiTJchhn",
  "key22": "89DHxoo5CePFYHwYXeLARTNpy7Sc9SUV46VAAk2hHcB5w76jmtePP8QximgTz8cFkVT3a7TCenHMFHQJdZAxjS9",
  "key23": "3uiLWZ1zq6WwJVwST5HEcfvtSSVSB84YgFzVNRcht2zs59L8pHKHCgo6Vo5u6a2T5czzw3TJML7nxoiChG7P7VrL",
  "key24": "3BB9Cp1j4att9Te4XBQEqrybMGQErngKtWqCxpXtprSEJSZyDnUpHZTVJH1k1j6xaAvPLb1ZBrAv4ZXeSSLSoRyj",
  "key25": "5DbKLMUbo1e4nJszkdXjh81QDJRgDyx2QER8aBd49WgLEYEHfZHLHuyr7hzrRTYCR3B4a5zi8w4mri1e1pCMA7Zf",
  "key26": "5NXVb2fkQ1XLdeNk4H9EbnMMtLo8qFoxDXGt2fjc1kPqNhamQVeHPrH655iCn9jGvV5cHnUUixGeYqwjj1DCcWG",
  "key27": "2CNgKH6xU8R5V71G2imCEXZ8hLKDcJENXaMaMyUBpMnsStXK284whzV5meSP4FrxmDxphGzAoLk7k7ov3gNo2y8C",
  "key28": "5kdbB5cAj7Xs9CVzsP98VogrVvNXj48hJ6UHXgfjSUTP13ePxu6tuycd2eK1utZnvrmnPL6e4ZzX1ikrDxniw3Kr",
  "key29": "3YBqxh6FA2eMtQndQNygc7Zo7ipQzP5N5H7w67ZUz8wpWe1s1kCCLwTMYiAUrWjRQJxWStJCQRqDUAxrsFMydnay",
  "key30": "VpJpFzG7mRMhrMxm7R8JS4KZRveoeLDzW59TbUCvByubUZrcssCs3AyKyV9VWdhg6zuET1tyah5htg7EmH9hJ7R",
  "key31": "41pEVL9z1rpfydd9e8aof8egDC8nHbVthaCHfk6ci2LHgXzGtjU5nUK67p6w946dm6GyAUAjq1jC3XgJMgofuj2n",
  "key32": "53qpSSV82Avj7EBdBTDgTHQ37Pvti6LUpYkS4RAmrRf5adNxWF9GnzQGi6PTaBwLvQxrESPv648DwMs6igp2YyZK",
  "key33": "56C9JNHeQ1FEPZdrj9TQJ33y6bvT93RboyzzfC5zHu16Rf3H17dY5XRHoK7Nejwo5qhXwZs6cWGcbAYiLy32whC8",
  "key34": "4NWurPxSeDwrqZzZipCafA7K7zGxhY7ZEfVJ2ZFmxcoaQdHCoAx5mp6QqNuJQBk1xjD2F9d3ipNkfbU1PnpoyZxj",
  "key35": "a9iyCKJFnXbfLW9QmPR5CDGraC9xcv7dYA9r7SU2fr9sEihmQTXJUmSsX5zdnW2TR5rLrHxNxUXbpT6aTtWvqHp"
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
