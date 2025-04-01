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
    "2G3sa3Vm4uSSc7nfGmV1VpYGwzw3fX4FPg4fKJshHE672ciRDpHViUhGUdzBfikemcvoNWc4h1cd32mUmXhGoBW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48mLbTrXt6MiSDApoq19h8uDrAAQXoPYmrRj2eSfSi8brEhRvwuHQz5VNUrbi7doB6drXFmfp1bsrbCNLL1onvad",
  "key1": "5X2Uf1wUa895hGfRg9BCrK2iE8kWrteJYoY55iA8m2xhtZG1TBvXwQWEVHKCaCSijKGQXgoy1hQkQRVWdbNdy5uM",
  "key2": "d4Pz8rnNEXpe2u1afyQhrLwf3TWsjTtDWX9pCVD1znvoRiyd7MbfyzM2MBgJkGhFxWCnQoSK5Fs4b1QwuGV8oHW",
  "key3": "28qxc7bB1vSGq9Ue2mp6cukMaGFhP1J33QdY69VQAZemvWPvVHHXx8DMg65z9vSL6xUVX7zh8xpeuSnEa48xxxwp",
  "key4": "4tVbCnTJDg28o6QrGbTb7egCWNCij7bgnrbTRuXkCFXfF7CgXFHy33zSZmHPYQn4EhCJhKbZD7Ziw3XKg5Cs2V92",
  "key5": "34pP4rjFXn2aBVJwnpKag8ABPy9UDy3kKHyL2Sj8pT1b1vqYozq9dN91zLhrvJHd9e3vnBDxmg3xFjxrAUXeSSHG",
  "key6": "5q2p2MEVSeCaSdwgWSoNV2VTLvYT65WAXrdqGY2RiAyWjG9RA2zwrL2v9jm4C5pLmvBYEDFdQurqCMxz8NJaYpNh",
  "key7": "32LoKroYzNWWvukLtjZ8trSUP1jnER6Z1bvCiZjZuwQTBEPi8xZ8dTAQq8mrSRu5wzuDGbE1AZsLDBHBPRWdEaqh",
  "key8": "61TT47tHe26YYpoGXSd1tkDvCNEMzt6PaUoechPX5qAxN9UXb1zxheC6HKZYt8MBCkdMu54w3KJSp4V1cot2gcDu",
  "key9": "bb6jdbyjkspfjecfTXwmthu7ZaNLs2mugEQkwRkRvkmmiCaXAutny6PsDPHTDWA63qobCwvdTvroFRPVgN8aVX1",
  "key10": "29Wru4qLptcCRodXxkomgr6tcQqctYJttaCSQmk2zzoY6ASyxhxLq3RU51v1xRE89es8Wf8txY64rqXefHpaazYe",
  "key11": "5hn21v5TM4mDiegr1fyaijT9ByTyAkfWoMfDNeabKqXxYDuDvkMnRi3eLV7od5P89vW9erbD4D3xQuTUbXcZ22sF",
  "key12": "5rSJkmnfy6U344sYbENkecjv6vz9QamGnXt8nHwPsMdVExiWcrr2FoGVuenDk8ayQPqAgCvgXWKyiiEAXmHTKrZG",
  "key13": "2ESCaQDM1Za5NiS79ZaPXM72kD31wdQmGBBpnCfNg7soc67pYK5aEHiGW7MRAtjhmVuuxSusrsvy7N1kJXjqg16V",
  "key14": "21PsFMsQ6Xue64PTFXLPC6DzbbPg6jfp6RMLP7pkTzvng7i88dCqjSBiFBE5WwXqW449fSGG6aUDsM1k6Ty2fRyZ",
  "key15": "LXqErgFMCsXiLizr8BMHNTb3HwDSXiJwr1uruDUezgVCJm7TRsL6A3SRer4bF6YxKtAYE5jwoBGSDuTSrwbyFj1",
  "key16": "M3urQ4t4WvhgNgdqwMhMKJQ7NKtut5CwyyhWkSUisY2HXDXdrL9yiUWqu41vGYUm1cTBA4ZRiGMN6QkV9T5iNrn",
  "key17": "4U6gc28Ef62Lu8Nv6SZiurgtSAKdD4tLYYBf35mVh8DjfcRYpZ7pReKG4bMACdJNZsa94GbVvaAdVBpEPFeciubK",
  "key18": "5qdap78aFnhevYmpF3wxP4YqpJ1PPtR83PsY397AiPH23NmvBbBWgw3DDpZrNES3WrtLXyCpbFDr9ZGb1F3grEdf",
  "key19": "4XQ97yMCmoG23e5Ky4yy3fGCFno96BxNWziufzmcrAuM4ZMk7DSrpDc19E5Z34Vw1oKjd3Jc6EGURCcc4qDybrpv",
  "key20": "3CngQi6kLFvdwcjpE47G1Rn7nDCnWefDkVJmepRYgtLf6qKQsM7h3uMrPHExY6N9MDzbNn1sKqAdvaKnfx9EGR3z",
  "key21": "3Gf54m7Y1bGw4NuxLNuwrXR5FHmaghHC4oBD87EV6ui3ZYwPPGPcchCPTKpmbv9jXbTZDXij4dfTc1GaCFJHa8J5",
  "key22": "XVqZV5FJUnkdMkQbnEGmwftk5sUdAcMF1fpTnmRse8Xygaxw3NGUqthLHgkp5zZ37x6SLyTHU7Cyo1PDKDJscVn",
  "key23": "2aRi1Hu8dzAGMXKq9zN7cuVSdt6YFMkkzR9H8WhiJAqBuW7VXWHbfhQfXYJZkSpWbUDoi5aAP7JfNqJyeKT1a5LS",
  "key24": "3sEfsNvWwRycwqtp7JM2VckSk3SKziww9md6vADAYmbzCfc9nxuCk5hzDy2trauZMtosLSFDbHfnmVf88VaLKrJU",
  "key25": "2NYGfe3kLTqcMvWBUBEPcqCFSwYSbj4gYyjWigr8NKXzBQPjNrJoJYiE4iu7XWYzUZxMe3NhEMapu7zS9LTtCeVD",
  "key26": "KV6K6aLFzQRGXB7JuvoBKreGqEGeut6RrEas144NtMmN8NfQQh2G7yzWAoF5ifFrUTA1hoNybKqA9srmbvAJgmb",
  "key27": "4T1F3X8oXscqqzcEhAwv1akzfPUde1v6XQZxHFhu6RJnu6o5PC2AVpHYsSjJrsg5unZQCvM9dwZqDtNat3iZ1kWG",
  "key28": "4JbHdjmnXqyFhPthc9uS6icrXhnaDKpEfhtuhidMZDAm3KaWvwHWLdJyaxRB4jxsUgScQcP2DVG6ckkgkpwhewbq",
  "key29": "3Z5YfiDjVGgtFdFNg9yuzxu8koc73wrVLysrdn95Xy85PckmAf69UCALrwDQTrBSJeZwBvQUnts6RThNfqQZTyFk",
  "key30": "5X4FSqUAWhvQA2ZfziqdtYCSCeUTDjNuCq9RM2oWfTY6m82ZuToNNiKvqFm6B6BCyjAKnCmjfwyzVjUn2GojMxJC",
  "key31": "cSD2V6hfVZBGnhrS2MWejyGtu33kbxkFa4jbTYSiv1pqtQuUgbzcBdwKCfADvWaH7uzHHthH5Mw5XzJZBsR6wWJ",
  "key32": "5GgeU8GdSwfw8YfMUqL93Pcm4UFVi3YEzhRHTqm8rkVRBqqYQxzxgnFBAEU25C2YUJ6AkjUbLZDvQJGLxYxi2SzD",
  "key33": "5jMpdzquhPtuVqrJPkF4rWXYt8rVQuseSsuCfobyhHqJCbEvt47FLisoVds7d88Cj9KsbU1NdF1PN9ZakYM96W1C",
  "key34": "4gzHpxWmt17uNqv1s2V1WGKVKwr4fBzhp5ao1KpK4LC1gUTLbGxgQtWiUtrZWpLP5cQuD4xqL2UWsLSH51pZ5z9K",
  "key35": "5Rrv4aTnPRtJJwRbYpBcbkckhSLzRJPPSXw74JRdrdUbczprqenHHz8fB55xDmRtwxkiE76c8n34ZB9dmSHKyBaF",
  "key36": "2BfDytmYSvg1o7CYoJMS1jLYREmTromCyNBfB1PNu2bR9z1xS6TxHFMCXcWHTXMd2TC62978d81u5mctws58pQAN",
  "key37": "3kj1fZ6VSmQiDr1ZKxBTHyHZvB9SC5h6VugSavouQjSEzdinKjuzwnNv4PDWwvwLK6jVSiCHXuRLNEmyUhSfEfeS",
  "key38": "2KYNDGegonkxL9XNEXUtvATNKkPKaAcMqLoc7tNM9WatZcnxNk1hCSiNHULX4hMDbEdY82Dz6PUi25g8HUZtaazr"
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
