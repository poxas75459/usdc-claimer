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
    "547GMEBamBvqBkqy3Mnr8ZbByh59HfQUNw1b29AjJN44LvQMHQMETooAVfENwy6VjmHZYpBNcmLvGpe8Z4WZMgDh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Etw3DBbDjXjpFvvrsqRAWaTC3nMKfTFqiyvraSMGeqqJu7kzQSrwM4nc8zkgL7iifGn8BgFrzKUzVeCmevSuTWE",
  "key1": "3aNtkhHpsvHjSjFXBCyKwDGf3eAVJ9NMTQ3bNJP3CkQ7kcfwX2zhYwLy45ThHukcMPp7WyA9V7yxqspmCeWcW4Mo",
  "key2": "5sUCcDkYumNB35RBNAEqFZwxLdwJGkoytqJAmnDa9W5EbMY3gsfVBvnw4MJaDfekTNxKRDgFrroQ3AxuieX2AhEw",
  "key3": "3TCAy2mZd8hfoFXB3z22Vt3h2soEZZn6MRXLVQUdMyHDvU66U3BmtWv5RgDLtjokTMHcfDZbUy1xmkc5VLbva3nX",
  "key4": "8H9oR24CtrzaK2ksv78SAzSEwWovpzQo23Nt9Jq4YgLk5xGAQz6j4Q8x5npqaRmpjHHTUJ58pyLc7HD7Da77Kbq",
  "key5": "5E6NSXf9vmFizyfFJh7kE5DKeTpSyHEHKvovgao9fijELwRmXDGmehsRuYZzkC4zhQDYtk7oxRMFCYXDxX2vR6zL",
  "key6": "9Mou32MBGMsNznhswHF7QbQTzfvVeJDNkHhNAFkgo6sy6FxLm2dPetdZXVxrtynMudSL2aDwRVJGFzszK7s9utc",
  "key7": "5UhBbPGNpPdqZpF63oQtsE7JYEkpE2NYMLgHqAH19pgDUxMV7iqZJx7cZPzZq1w3Nv48ydKyEn6wSTRu1gC1ChHU",
  "key8": "5z5q7wZ1Bxee1N8ujWDyL1NGnFkMR1VVYAa8Fzj4Sxc16sTFwZeCd2fFkuvZ1eDtnj7cXdZHVWVSDhM3YCaVnriC",
  "key9": "4T3oc6qsFxLxRVdujdL25juiKJq6WjNGjU7b9ehG8N7ekxihwAUWZc13copPu57HAxi2QvjuEtPXipHuMpozPH5t",
  "key10": "4qLSw46LLH42vF8ZQ3nRzoxzbnvoBQXqcRjKrtPYbfP7rYCicY2fVe6eYkpUyTQzG3NoqcHviHM96joRkFn4TGvd",
  "key11": "5U5upoMSwT3QzJGPV8eBkrVygoeCoX5gCLXohnQpsGL6Ude3RT7LEtrukYHTqwDA71SrH7LUeZYRqmoLRAkb5Jvg",
  "key12": "4yKw4Un1QwToMtawLiBPepJ91x5vLt1DQeZkrJy6DDFsLdsvZaudAcsReokPcAwUoJogAmoDEi6xH2rARukKyGQD",
  "key13": "SMtZGTQExVG5e3bkDD9TJoSA6dyhVcLV7DBn3jmuWQWZ5NX25KBLjiseYXYe6ZyCMkSKvQ185TxywQFvzRSnj55",
  "key14": "4xEYv1cFFe6EjV7Lw7qzwV4mpV3gcfgpVsQwY377U6f1GrUCuvhGKD4tQ7tykwgvuDkh5Y7XqTm2ngDTUi3K432w",
  "key15": "4ZMPNEbmwq8DGgRbHStuFamkwMbjPwhp2oFXJK2VW4aHz3XK9ZjCic6zDqdoMWRS84Evs9o4aYmZ7FDEW5KiKqjz",
  "key16": "4818PTAriAno2TzcLa31F26dWwPBYKeA4DdxTaKjsprMUoxpSa3ax62YgyW6NWK924kgPshVSpBn3ct7xpkMgnvZ",
  "key17": "2rDc6MF8qFKiGrAWJGN7zvsdmPBmfV4Yg5oQJqc5GHt6S2amRpBPD35gU6A5XFqZoJ8deryHWVWtmLNYpLx9bGnU",
  "key18": "5HaQrjd8ELHJweMNYK1PN7sNmMoBgnqLSMmzdd8jHD5D6hSSp5xzy8YixzSzhmczP2jdesg3Gm1Ee1335B7rx1Tc",
  "key19": "5cZLYp9XBFeUvLfVWt2BbMvQF4kiE2M6PFNGMFyVWNykrkPWwD6WWT9sU4eXWvrK6Dk1ECcRtWsQ2o3cHJPffRjf",
  "key20": "CvuNCRsLywTXyUpTYHud6cUvETmsvjqethxcwM5AXiWYThrQn87iJKtgvWPnbAy7x24511RNJxUBtAwf8ZPuvSd",
  "key21": "2u1RsHGYdbDWqCq6xUFyhdUkmT4vB6r8CeBTrDAYqnp1Zc3iPwxmVdLwRtG6S6dA42z4NE5xumZEeGaYK7UrTaFr",
  "key22": "coTAn2JJVZooowobt3PD3ZFUnCK62i4HQQ8H9YN2jZ4JtbW2msYGijwG6xh6tV6vB5m9f9Q9SttEqymmmNHFBj1",
  "key23": "45j7WEU5JDV2xeV6gE1VcFkX2uAnMo6fVikSYXXJXBeh3v7F2fcz3qYFPXNHpriY2hZ8HNt6weDEPW9EffMLQ9dw",
  "key24": "4JDufo8c3gSPzsRxd4Ku9oPGspfMkZpxXejC8SHx7HjGeg37b4VHGB9AZZ7PJAua3yHygLcg5BjyhHicpzxzHd1T",
  "key25": "4yy25jntu8hkmu2NDMxTh912NqLHH6k3PfE1i75zQVAdWM3njMHsKE1i9KW1GQdQ3HqUZDBcriUKvW8ZR2ZYEgJu",
  "key26": "4qmbPpVxiQBsy2fTKkNtC3tfNuK2bjBkD46GxfzPswNF52PLVAjp4w9ceaNdZYnZuV1UgmjGXxvcmLPVqQmZrjEv",
  "key27": "23q6ZzrYgD7kV3LwwTgt9LqA2y2LWZ58Nu79jgGTDjTfwWwCf5cQgKpn8SEBAtN4bsKZ3Qk3r4BaQKV7pXRr1vyK",
  "key28": "aNNByBggep24iERJkFP1xJ4a44ZnPqY2Xhea6vRRHnrBaK4Jk5LhTBWYfFdHCK8T1ncNUCYTAc4hV5XN9ifs8ik",
  "key29": "4cD3EhhMByiPsuPRS7izFZnAAmhAYZ6XbB4yc3p2y4TaSFHF6hqG5jgx7neG5Ym1yqknfFE1UEup1mFAwTaHP3Jj",
  "key30": "5FjRLnyAS1dhKw9BC5nUvsK1Ah1CJT6BxHTd173DwfHGS9kgfPjY8CPh2cayfNT42sKybAPnzQF7swmK85gf8ZQ4",
  "key31": "4o8EyedaTYpsb7n5jANruq1tV5cxVgmEaWaT57M62BsUVPzgtBoXi5Mabe49c2dUBRCDqswSPbhCrDFb1BDe8ty7",
  "key32": "46HWQSAkFhDm2oREX2EcERQ7RAzomeuELc3JcQtiuAR1Xeouj7GZUr9qGM1s5FaVmJP9u4U15mSAJM9Jgw8XnahL",
  "key33": "5mC5u3Y5dBJY7GTzuDQn41pRkGJkTSvxPNwPysUNquf8xNRanHfzFjTWT3dFtxaaXv23sW3c6bmzp6xpvfjWDv8o",
  "key34": "4FGMXZ6JPgUmKskV9Ctgc1X31B9J12c2KMGVj8fNNLKqMxQokSLHFgCioaahREV7RzGYWz1MyHiPrL1sH5SkvYsY",
  "key35": "62nUtNPmXFEfTh21An74dQTkqrkqUpZUg2YJAopmSMQVo8u9pviaD8vbXEtsGto1YGbzQMyBXrSwtLLJYz7mJS8n",
  "key36": "v5dT3qPZ9mvVt6Hoc77p5nTN3VAvQU4u3RD2burWPsB9MMEZou4ifLXmmJz7i4g7cKZHJBfeBAJKgCgU7L1edWJ",
  "key37": "3riYJqq98HcFmFvcp17auLgiJQmrerE9uHSAo2ZJy3cbShgZg45jzsAV2afzQeFKKegMrkPD71tTQAaZJUTc3E3o",
  "key38": "3GJUmpA3y3pr9HithSzHgpsexhW8T8811h4UcKYiiisd1zriLo2qeyFvjKnGmqBGAozz5j3jjirshBEBrkTMt6fq",
  "key39": "5FtkCT823HAMBDsqDuJ4HYcLRakKpVCGfYrLakpzUGsd1mPyCjX3ubWd71bN4o367RtvWEPxEhyowpX9AkcL3cAD",
  "key40": "4cWrxZZL3rL4JT8HrU9YC2Ft86hWnbyQqYjZDZV4YHfv1WEQAeRv5SRhW6MaS7ctGK5EpiZYVp1P9ftBZFzYMvXx",
  "key41": "59h1LTiLySmhdpBRAmQwu5BgDdMTjCsuchDqii2LoBKAXMu2PHMARy9Kb7kdk8afg9H4dE2b96eCfW7JeZAB87m1",
  "key42": "663hnqaffSg9DH2p8fcAGqJjMYENBmokWeofjBQeWVpGNFWHPDk5Qaj8Kiot8tSgW5KNuFPYcop9pA2XW689sCdm",
  "key43": "54N4R7SUVqdkqQw96YSmXrBx5jhwjXnuPEwd8rUvQZZzZGjy7JkgX6tKpDEs7iyMXBoJxtM2jiMeUijNgmVAT69Q",
  "key44": "k26yiH4vWXcxtD1kFPboaxJ1zdbMKgqJPutg6a2Hyhd9iwAamRRaBV1mQfVp3fP5m3bHDnMB42YADru5ogVEt4H",
  "key45": "2QY6iPEpYFoT6cunVMdDmyXNLxKhWgTEopw2vw5VfXDSuwwdEajMGHLqDGvQWTDkCi9mkcoXWPmcdyxnRh5Q33QQ",
  "key46": "Yga6BoZZQzSL5afXspo29aRc2A8FxHupcKo86gdPQZVAC7w4fVZR76voqeS6dhhULr9xzBYpKKX4i6PQfNLwoMm",
  "key47": "3yraSj9BDL2GnA1LHfHFjo7ZxpzDbfd84n9aV7d68NAVT8Y4JdhMWiXcq8pAmWK4nBAKbx9SuMnsW3w4z4sTfg5A",
  "key48": "453V2Q1iqUAVaTgA58UKVMjQp8S5b3ZxTc2sANyBNWChJn2sVzgfbomdKM5gtdQNkTnLyTFFfvkVJbMQ4ZFfgkM1"
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
