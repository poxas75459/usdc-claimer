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
    "2NHzoxd2J3VFVt723cP8TZtKbBQo3avHyigSNK1LQ9g2881d7aXNnJ9ie3hRCH2BoQLbQpYW2QHLBjaic6zHk329"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SvX5gYrcuJZveb72mTG76VqBZdcMbgjZSX7j6U26ziFY6ABbfUPXVJFDFPMv5CgPJUSC7fvPe2o6A7EjaPsrKiM",
  "key1": "2nogxNp4U4bSYtG7JhNuJNSozm9GTVHxeBa1wWmEukDK4u86zJ1qAfKzb6w54naiDoSoXZYDYP9TKG45ig8ZZoTz",
  "key2": "2JtUaiFApjdTS717Jm1j6MTL7eTGiLxVHNZPYx1Qb2LHRjZeXC8d9T3wmhX3sz6dwMaRV8YgtEqowEhV8guzdbnj",
  "key3": "5T1DjvSj4AxHnpMbQXyDVrQTM4siZKw4qyAtFLW22VjAF9sz87oF8XyBzquwfHWKuz8ECgHJEqYjieqk9AZDS4jH",
  "key4": "64JmaUMC6LGwYnkVTui9wKjJc4bP3USu7q8yyP2tU2dfJHPbZPmo5uppsttf68cVFmrNtqTF7iaivMSNTMkgif78",
  "key5": "sKG21HgEruYYUjjVJE48vHPQXph4N1xZGdWP5wBTZ9njRj9MYheDrH5rbXLxXzwZGaB2VRGEoy19SLFAFzAsu8w",
  "key6": "5ciXjY2wKLrj8qj18GD5VNYGYFz9fj214mh7iy9mZRu1iTaHGN8qVA7MG7iC3VStMs31jVSSCHdpNXmxuRzzS5qG",
  "key7": "3LiVmeLE1JH9JsQZyj6t5APJCADXUq7nWiePf8tR6S4HUzBXSEX4ZcY8rJAtYGGSAiw9GZY5jK246DnHsUQqMUsz",
  "key8": "4KYEQyGbnT4RCke2Xs8PTMwKdfxQpysP3MvjsbiAP2pNWc26rRjeVco6an6f9Ris2bGqc5P1LKNfaunawKgSDVsG",
  "key9": "TCoTLucVTpRU1VVjFSTGrGCsbLCaYGihbtAZxiPrnRNBWapBWC6kkfwmKGBYeQ72pEKM8vZ1aN6dx9Mvye6GTMp",
  "key10": "7QjBMeQJhiibeSstDw4ppXr5xsQ195YikvKqLB9oJVuSfciGquePRoJGB544Y4nqhJVwbECkeqyJGn98EH9VgC4",
  "key11": "4ancpXpXq96i7aYSCke7c1SdB8eSqv2KjcW1rpKPTJzUpeEPGJ1JaoPiFSXwYvwzsNqZi1HTaJJowvjJYtmCMEDG",
  "key12": "36xgBcmha4Cs5QTMV9XKgCJub1TDcS4Zc26vurNh6v78MgrJpLRTCDfhqYosh4RrS1DKrExc9aWHhccP9Vi9R2jM",
  "key13": "3ZfojbqBYQvi7wvigiiYYrP2jivceRpVSZWKuszv5jRVhMf7D2hHuvhS5QRfype44BTC8jsWFqRg59dQBkQCg5CE",
  "key14": "3pUjCt3n1gfSG2uXbyeYuhTWfNgnrh1V5gniEcxFysdRGsdYxtfTbyKAUSGvyAo6FchTUwkVQacz7rYzMxSUGT4i",
  "key15": "53YvpFgJkeCwH9KeAMznVJfhhwpcRrF8Ba4Hnqpd13S1g7ZAxuiNiE5u6GaBCDqBMtWG5t2UjVGS7LV3jmZxmtgT",
  "key16": "4Mqj8yspYQAmXRSeXVTxnxNc1k2BJhTgwAdcnjibuSgiX2SkjNZzSf4GMcn1EnjVwZTNBBBhw7CJJ3pumahLdws2",
  "key17": "5RVwMZ7o8f5AozcjuvkAKJPTeiTC2fkejbcXrebM2meNcRDfhGRqoGbDbswMbP4LrNKqhvYkdCNC6P3qJSVyou7w",
  "key18": "4gr3TjzVAYPomii2D6XdR6SL44Kedoi8W93cHUw31AUx15Mfgyj9h1nmHWhZ5jgj2pGs3D6c6tBXUWb2pH6rwSHi",
  "key19": "3iQU4yeZgHE76zQVVExFV2wJuaiStSoPwVXyYSakBqLEJ3we7MDrjXctYTvFJEaJd1tLYxT3Vx3S8NqtHh4rCTcQ",
  "key20": "kgKcQhGwZvQGJYGHHGFSpLhgHxCyGfVjRByXnYWeoLu171JNGDyS5RusM4Z6JnnYGH1nKrYUxTAjQMbMfaxbf6L",
  "key21": "3xNiRf5Ao5aQzu29nnTkUTipXPsQC9L4CBr9SAvq4atd9skrjFYNbLt6vfq5kq7icDFd4s5W9TrMU2dHgNAWhtAG",
  "key22": "4Ery2F6VvmC3YYA7w64F9L2DSitRBR6WUqdw2fm7FbaDe8xnx1rS6iXRQZNTXjqMw9mjfqwmLr9mEBkFKAgafHMi",
  "key23": "2ANPhCy6HFtgEj7irg9dknsqaerpXHV1Lr3uh7mKwxLARyAkBHDwmuN26dBvuAjEtwvmCn7QGLTkXXgK5J6KJbfG",
  "key24": "2f9EuPpkAjUUdVf5QMSnQsfBwGabv3Z9TKPYSFdUo74tnb5gT8B8PRNeYL37tbzXwUwfwLWNMkLtxtQvPrW6fja2",
  "key25": "2aUD4h3gPxrScMoxjYLPxcgTRECV6EDGYvhQXhskiELuLMqtYx9oqRnCEFPSUwsbfr4Y3KJxm6aFYBiTSZYUqpxK",
  "key26": "5Wd1U8F75qhEiwUd331ZFfKr3UzejZsiisdPpTqcyGG6SUTRjDHdLo3WVEWjVMGeUKWyVEaLgnR4A5V48kwENb8g",
  "key27": "shdQG1ocbKzu4GgxMugAsaZw7JKLtqkwJyKXaXyD9nZTTZ5G7jxeo66G9aHz2S8f6JPBmGhRd8HJFaGqhZHDvh9",
  "key28": "2VCYXj6mVpj8tTDeMdycqJ695XA5r4ufoWTHwd6i3o4QqrEMcVJVgUjKvy3UPgovj9Q1XCPJYQJnKE2hFFGzz3Wz",
  "key29": "45RkFptQzVuLhsjr7ca96Xn6YU7Uu1kbBfPWBX4i1ZTipYCvvyDgM9Q7u1WthPdNzQKrVGB9qyQu3N3N37uaPnGU",
  "key30": "qR13ASuTMn8n4dGecYjRSqP1jeb6qaVL2v1CHR2L45RSNG52o2JVemkPqDunXjota2vE6mXC8Wkc4MLPWgyR4hb",
  "key31": "4i14zJmxN7V36mEDw9Bj3Z4R9BFUto7kg32iDm3SzZ1fEgFYRM5qqPhWhfuybk15vSrefeF5puyB2b5trK8osJiF",
  "key32": "3XAFfE6FEPjwrv3L6Tc8psqrqSSWZwqhy8KfQ54PoMPwNyhwcYhNLKDzXw3iKXjeoNU9BWLapeAj9ezxvjj6komD",
  "key33": "31FSRT3Bve1BqacV28PNEAV6ZhqtfERqvZCMi5UaDdeeFdUg4AhPMc7zFVrb9xSu6ipn7jyQDrqoj8vK7tuYV1GC",
  "key34": "3KC3AHnPjrceS8icLEhKnYyqMwCaQKhSJLdTMf3qNarFPuhkPsVgzXH8rhSwJqrD57xVfXz6Kpm9zskLEecuMing",
  "key35": "4LZjWP3dnLY3sBodFo1hzausX8jzK39kvRqGqqqfJ4FatbZLFmp2765eTxuXZLN2QTZxK7yH7hgAAsJN1NHkiddw",
  "key36": "2FL82DGTsZ2YkE1F6JK1tC7ZA5NG7FoH8xUTr9ZZkNZroechiFukpSocWTzDRf65HoYSmuDpLmM6LVvz5dusym6t",
  "key37": "R5U3MyfH3THVM2WSQgcyUNZCfSHfMTGJiYY2iQeK6CaY5ucYBZzWfhbJHp1k88iko3htJHeLKEMXLFR6RdK7XQ7",
  "key38": "4LM237xgHHQGYBNGgT8sdf4NMjvpibCMmqsHpN3gs73SSEC2oeR1yYQaV8u6aon211cwFTnzcmv9mQXSMSxzCZdU",
  "key39": "4V91Tncg1bjXutZ2ejgoug6Mqmqm2deRio1KpJ1nMEaB3xMciTfXWVJR6Cnuw4B44dJ1g6vFPgVioEMLMYNyNksG",
  "key40": "ht87pBEjci6AwnybRnrU7RrMf3YtbzchkRNK1FH8MxkQVv2k8fEiaWMwzkmY2W6iWoqTQ7DAerJ7ypPsyWKA7JG",
  "key41": "4ZNEhdKA6AYiPjmLVoMbJ7vRNLPTNiQEJ26n5bb7zn3HGHq19sAHWmbBUo2AwVHings7RaGacSn8HDnASyfmww3Y",
  "key42": "3pdvuXsWd3ji3zLvY1ZACJBvUnic9SnjWS2imgeVGa7k64xe3uthoCQ9CDskBUz8wubgvDAwyLmtvZTUHj9e4Adf",
  "key43": "WvYbpddVRbwRAJh5kdRGyPBdUVFL3vLfAH9mMqugV4RwfrfVHG29SoRCL5CNtzhrSz2re7NtJiecpr8nYhW6gSX"
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
