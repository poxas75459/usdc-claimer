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
    "3bbwAZr8Q66Wibrhx9d9YVxjp5mrvA8b6D1JPZptWF82cxooSZHtsuc9YShucF2vjqdVNSLB36MVMiuo3cnTsmbd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "582d4rUPBQzK6JmNHfZHznzduCRUNCVqsrf6uVUksZmhVrrLEiZGDEudEVnbrdjnhKJQBvzVrkBj7GP7VSx65Cuj",
  "key1": "4sCq1sLSjo8LwhnTF6ncFdf8LHc6xMsYAbVpCus1CNSGF6arWTWFk1jZDig78BoQswZf8BzUo5U5A1fM2RKHuDoS",
  "key2": "2pu4HzGxm26iU5SSrxECdwrRpCZeq6grhm6dUdVKqgsjjpWodHrH4o5JbZayob1Yk4Rwf8j5H6uVjQuGv729uzT4",
  "key3": "5QXFUuyQzCCUuM5K2V31eapnHjHBNZuJb75kyM6AouB3JBrnqShtYwC7QgTgdt1ioXhYy1W6kGh7PfmeA4dWhTxu",
  "key4": "3zLgski5RA6nfKyju69MWNGGqP7u4qq85BFvi6EbBBe2Pjy2Udr15td5haq8dxv9pPQJF7ZwWPwQFXp3xwy9BSxs",
  "key5": "2QigVdALa5g2F4eGZ61ypbYWt39U9qJGf8V9MYAygUrRyRytpcwZXDbd9ZuRrs599aRzb12VgjcfhiverxE7bPA7",
  "key6": "3LGVEx1K8sLT7HXjtSRB3Kc33HnxvZx24Gkhvmm5JLQX6sMC3EussemTGew4fSVVUpygos2Rgr1YEF6G1T8XT1hB",
  "key7": "25KwcM1PyZppqrBRjxkH1KMWhLBBbVxbmScHgRtgp7PERcA1wXnB1QQ7aMtLmrMmAhifwEGqRM29NoBqEj7pzgph",
  "key8": "63q6etB4y9GGXoCCjXZ5aSrtMvRyEhn4SoFG4f363htzgditb6bPX3m5ePd5eYFcm7LvDsb7jGArQS7qVd3bwhGA",
  "key9": "2v2PdRUp3DHwmz3RBS8rcNGttd3m6mToXrEyjbRUwYhvx9a6GN6dt5sfQPFZzka9CeDL4pkbUxqLPHH4juvbuing",
  "key10": "4PLLuXSYxJ3gYeEtueXVnLjWuwDJM18ztuvcMxMs7w9S4mzzux5KNBP5XKqT4Pmp1SHDZh6i2EdnWGmQUGKXMwek",
  "key11": "Zhkepp8rFi4qmSEdDHzLWRXvykVSL3tM9xdetsWLARm154ZpvL8Aga5QaYD92KskQxd4HLyhTUbXARDHtyJdJPn",
  "key12": "3c7LEQSYiX1Pk5UCfCq6duLMKv5nLNfkki6pXDxuLwHfuks5mvj6gLNNzsBcPtKoZ6mMab1cLDqDzdBC5GUpz9cR",
  "key13": "3WDP61pqdU5TfpFcHXBSFyqWbBNSghu23ijtSgtjtKd4eC9RE39ZaASf8EUSdAU9Xq4d8hkeiwbECzRu7x3Qy3pZ",
  "key14": "5VYJwTgL8hUKbJgdyiv38S9hoaUvhPZ3bFMdnDEJ9no4SfjqvAdCgkQzJMCkyVye1DRt7q4t5tyJBphwbdLxbxFN",
  "key15": "3mXyHGUb3SY6xGXisjHYWKKuquQNdqbRCNBhvQop3XCQWbVVoi8oMgr426RgwQEMhf67jVThB46CcAhwBNqohAjV",
  "key16": "5ZPF48XXj3Yc8U71ihpqSRM8vVPeTddByNsGWg6FToxEcoHyyXcPcwy9JtWL4WZkDBpYg8qzwN5ABU9ur2Kvg21G",
  "key17": "tCYMnUFh29g6WcsnNnmw6kYSLTM4Y7HZKJM28gTsgsjmCSCUYTinGGDb71VtgCcfHuJnSU7kGgdURbsZQVPGe4o",
  "key18": "4mm43guQqm1kG9iSWfwmXXZhnpwP1dHufQSbWM7qYUn91xHoAZgtZ1Eb3zft7gibTohPnXNeyjph1HZCk77RWdpd",
  "key19": "3KjVTgMfLTFT1oVckN8B6cqtJiSGZV3MqqRCR74CNUVrkgdKstQPUeeLBWCiwy6CZJG7UyV3uvgzzZTiH83FfGYv",
  "key20": "5vTqDqat7DADwTL2TaguG6BuSep5r7siwWWs3H23e4J5orPPr3S6P2zqZnpFjV8N6Nw1VmQdAYU2hi6tVx9GbwhP",
  "key21": "5ZeLMykzAzpyX1T3SD3QE47k4BwuoGVpascM3hucVfXbag8f3RjFS6aU4RquzrRC263XPP9B1PL478dgMTrgmUTV",
  "key22": "64UHQVTrgkofM8egLV8BTgrMu1A88AfdWL5oz2FgxoJq6JTH2VmJrmjabGUxbNPY9r24ndRtRrB76siHFNmGzYaU",
  "key23": "4sgz7hrBWpKwTnykRUFJmdX7gfLU7JZsYdvkLSgiKGeeVfpxBwLAFzcX7Q2RygG9REFq5maEVXbSNRgWSxE2QeXr",
  "key24": "HTRq7pDNkqqmVo6Te9D1jJKjcKStZLAyitDLVQ2iBfcp1fpa6aq33iC7UgCHNBRpZJSRFpfq5PLV741MUXqLhpv",
  "key25": "4EAbPMsqfCBS9CW5arztncrju1RjmCJukkZ5yzBRApSgbCNDpa6BgjAGxbpPAUCvbq6QcWFNYJKcjRpKGyHjESEi",
  "key26": "5vBPtP6hpYTouHdrcrSzUPu6HqJapizDJmZ9AW7mAv7b5gj3pq8V2rAQULXnsKSTTuBZnrT7zB5g5uCPCCtFe64Q",
  "key27": "JmjQm3URJ18Bhr1Ti9SFCpsuiCRy5BUtVMXwp7kicUEoafYsUzYTRGRdQyC9yUdVSJTraDgmRXgLHcBrmNnmukb",
  "key28": "3W98c84bui9EiTEAU7SNUTd62t1jPq61sG5E8WNFCmZvoXKyE8RZfbbcFmyn5VkG6N3zYJUi6gTckoP9DTykgww"
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
