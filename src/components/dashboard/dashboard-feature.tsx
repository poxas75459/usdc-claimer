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
    "P3Drwhu9Z72qEHZUABfMPpj8fjzT24ST6mZYZu3JS6DvxWnz5fxXgwj6PyWDFhLiTCeczEUGNMniXPREW8t1abG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kumppUT1rUsgQH6WSS4QAt5FR5tmnHERoWqcU9rF7UEPgSaHEYQTxzou2PMt5ggYBoDSuZFQu9pF4hdkNk8Hp8Y",
  "key1": "4aGU4DxuMasEgiHR1ycfg5oPomsigYmCtnLDuBvezMnXSYW2Pp31wVnity5gRYPnH69K7Jyg5WtNXbDMpZGDunP2",
  "key2": "28H9jhoSQPUJS7FsLcpy1DgvGusSV334GYpU2XPdUwPn8TV1qY2SJjnPP4Kh5zAGgPXbn1gLHhiWyKrRxuQmNkef",
  "key3": "47qSJ656hdmqGSyqneVmcYbkXYvLfpfL91XJwEimJAZYKYPVutuE7tqr8KVQMsBST44LPtQdhBzpjWLdLECPEa5L",
  "key4": "5t2rf1N2wCDk1m7Q92QrFoXz7afiw4Der5HKJ9YMQSuid8C1ea6HNZfaEebpMAjbrh8v5S4fa79AQaZZ966LxeHB",
  "key5": "jDQbFRxrZZooD11STjkkRCpPdmyFUNU7aKDH87BTNzfEF8KpW1qxSE9yUSo4BUPcLG5x9wEWdGgP3M2uYwd8bcY",
  "key6": "2j6E7RQ5oRGBbPpADquAYWi92w1HtDD7SDt6eY4qNhzEw81b37jeiHos97iLq5TzwBBKkkAXx9doVUN9L8WEJ4Ud",
  "key7": "4qPF9i2FmxdGKro93LCxyC8zSEYCDq2KwH99NBvsKTfs96M2t2Xs6zQBJDFtBYWkQJJHi19Jo7YPUKHxu49TfvsE",
  "key8": "4iderdoV1yCCBwntcy9a4J724jmVzHiBpDmWP3r7n63z3vm7af75RPWFkNYEoerb3RvZq9WPBYKLuDZVgnzXJpf4",
  "key9": "63P4LE9FAAv918eseJG59vYmLvYR1kG9tsRPMitof87XVFVkeLsHg8VBh9N2ag8kRBoxCdhvk3HYt82B4jdVbzpo",
  "key10": "bzFjq7RwNwLBC785CvqH475fj2y3dbkrDf3vchm6KcbeUm8KutjJCURa7hC8yMkHMi1TTUe6PVtfVnDQxh21d5i",
  "key11": "4g237z6GkcfZJDk9wKLRLZECEidDkzpzXoJhhFqxmVXVGS6V4YLAuufAY6K5gBenDFPrWGmK1ZukmLfopYcAFbLf",
  "key12": "3tsA18W8U7u2roMtTti78HgUjemVTjbT6tMbuEa32TnvXeRy9sMT3xWGarWW5jJpnq4pSswPZdc8kn87bFKh87jB",
  "key13": "5Qd6EJwDf64h1VCUDwP4DfYcz7arme8tUza58ti97SzbrNzWh8jcMMVKcXKGZfbPoTNrHmqE6NaZjxv2m7fmJqMj",
  "key14": "5JcairD76ZcaJMUhdrRb6NCRabmcnRPkSZxHoZySfwZsg3VBzjMiCF8ynHin4FfBsmx5rDPZp15onnLNW227vNke",
  "key15": "2AToUNvedJohJS4kqWS1xLd8YQpCPaH3FEpQwFuJ44s9utM5gH2yEFdX6rcQkgq9rUJrjFBM2GKY2bX4fFovEC86",
  "key16": "4WQPDEfSnHxMGdx8twFgTb68iG32JCborF8R4o8pqFU2urpS2Nm6AGehCpLzJjLbP6ovwM4PdVHNszYGyUbruRrY",
  "key17": "5SfteUe9YQ5KBECQB1LiDpzfuqQPJ1ypJk8myTdVYqknUKT4f9R8X2YmYnXGGBvn5FPJ1tXB5hk7DD6Lty4W84eD",
  "key18": "4D9jhZyw8ydXwGzcZRPgF9CCZDjByZnB5BKPDA3guDRKmSL9MAtXuHzffmLbpJjxWKBGmnSsnRHeQPUZ7qKCLAqL",
  "key19": "2F8y3VBU97Duy29GynP6JozKi1bfZ4k6mvQzxNMkRQDunrPCT9drTZF4ffFPTZHeoBG5sj1un93sJimyxjW8oJLe",
  "key20": "HH7JtiJLwPE1we5N6hDLUZtmW6UbmX2bGi6qSneNBfreuBJzTh2s77wrFvHxdwhWZ7rQGYQF3mQfSAhXxgj3YHZ",
  "key21": "62M1rZnNZLgffLf2xbWJZ9X1X4ENDyuNyBMji8F8yH1Eaq1jNf6q2ZDirZWMjiB5JmpKVdnh4MH2m5pKTip5ETT9",
  "key22": "25r1xyUNaMqC1u9wjyCfhBwShz2n52pG8HQq1ARs1hRFptsik3ZqHHTQvysVK7y2rGNvUaVpiRg68WwftiGzTtfP",
  "key23": "5rs9btvifGvVxyADYaEwsgFxw7QvqivrKwajyBpfWCWtywMG53pvvrty2efxgoKQNqHiVW2bQtVAhZzJLeM63WSu",
  "key24": "3XYDZ15XZMEdo4zJSzHe82RsYF9hS2FzC2HTW3A5duJc32Kbcr1pEr6Swj1vc4U1cNssrFopeqsoN2LyqNEDzZ4U",
  "key25": "45yEHK2ELjVsL8LcompJy1B4tuL11sCXJpwBzhTvskCSSs4GeZbiu9dZXaKhrP3K2zXaCrXYt4Fx3FMQ6uAoijkv",
  "key26": "2qT53y7CZNK4dBY34nKajSDTuZXzZxvnQZdKAbgzb3pvGABeJmP2MsDgJSZfYudGPmoxjBb7GWvWQK4EN2P2sZKj",
  "key27": "3mhsWc9xYVXeEX6bxBZMC9N2Qg33iiTByDEPSDEskMRf1gapo3rtuUYwzvyrkCDYHEbBXEKyeTwoMdfZj8VVHeqj",
  "key28": "2JhjVCEjPFe7nwKpC5SvPGyqyWjiPoCU8L4b8g9Ce9taNjESuH2m1nRLA8bTJUo2trHyDX4yYGUhwr9VR43616xg",
  "key29": "3ACYt8u5xMvzKTGtwTVyQ5S9z2nYWCmt2FVbMiquGoX4AoFtwD5GHcFo1ej5P6tqJzsx9BVeDii1Zgn787uaN75j",
  "key30": "6VNBuoJ7B66jixDjM79S2e7y4x9XJULL9ZnHDVZk1nsgjRUw3rEqNJ5V1JngGJaxqBF5DVkx4A6dci25TVt6tTP",
  "key31": "2BgEATaqQ2k5ZDUZG65NsKAQkfY22tpMADcM92vFKq4ZncpQ7ifS5yEZfNH1YmvB4zzTowY72rvpzzRgJc4MxB5b",
  "key32": "48fNnkC6CJictnqn1h5W6KYqLqEkRFQBivfyXkwZSQGntgm2cWECgn8Zqhri8xy5yaeAKoCSBvXW3CChPkC6HoiA",
  "key33": "3nRACET551RpsXkv9o2Yj4x5iDdAKoxqCQWevwyPbrJNnebvpmQPaAh7y6uvtEiF6rCjf7bFDs2VN1j2jwkV1PoR",
  "key34": "4Tk4cZvpSLKpHqGPCY5Lt1QXN4TUhvYSxNu3GdyPrgspKgWtYrVWLmANxAWgcainFRcvWdpyuaGjPz2NLxhHTPMh",
  "key35": "2boM8tyTrTq7gTMYExRR6pKQ1g8cQWUuA8VWeySE4c2z7xEvuyvqXEaKFxxnVAdFiTEtNFQ7Ea3qhhLVdpMAumeX",
  "key36": "5jHoE4KJehM16ffjrgpaFndnLgw5ujfcToiuqsHXVZdvJG6jZfuecqzYxhgpcLG5R4qyvpqRaweDemfQ6uN7bcbh",
  "key37": "634GNcaZWa3dLpXp2DuJaWDxNMsusdhm9xDdKbPtoWSH9beQc4s4FeKGGTBWVgW87yNV5rP3qYLmCAAWfGqiKKwg",
  "key38": "5NZUa3AW2rWN43hR1Zy9ruzg1NXUxVoRZdWjUoCKfXLxK2BR3rdu26HQjiRCsEC59s73G7u9455AGWpUUtfv9DaH"
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
