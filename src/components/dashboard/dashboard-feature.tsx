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
    "npiVst4B5kytZpsj6mEhVHKHdTrCzzSua8ATgR4n2TVkbRQK3Bw8qzignXMxjazQEgY8etG1YBzkpvDsKKAiMN2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jgZYcQjBVrZKAnSK9ambmyNEndGXqx4EkqEbj4h1srvkK5ejR7cEecdiRLCWyPE6rLUYooX7TU4vPFFZD1JX9TS",
  "key1": "2GrzayKde6AcoNeybPgn27HB2tHrmbbKHhXruB2GEeqnGRydoobRyXQq8LH2KHcdfjr4b75xwwz2en7NFxW7asrK",
  "key2": "JS4ydeMq4jGYqkAksVpuRHkL3ygq6mifAkNLTw397mjp9q38kmF4m8TWQRHQC16rc7BLwe5W763em8Pb8yoWyTA",
  "key3": "4VR856hjG9FA9k1hi6vj7UTnvH7t9TvEccaSqqNVpSiVTZvRq1CD454EZyRfABrph3QtxDii4JgukEx1pcVJrxAg",
  "key4": "3ovjpX8sKdn6oMtutybnUfTZK2Hm9qEX3aTsKuGPaczxfF7jkuE6CMq5bTeMyCr4FRASwNMmpwnxmA7vh1d1aCNg",
  "key5": "2oT6ceq1HK6yh4EV3uWAeHiF89EubN5718jppqmCLw4mfLPE57hDfwRrNM9455aPohcfMFjY9342Y1nNiqV2BuTV",
  "key6": "sokyRnsGvx9zFy6kC8V8QrFjjRaZ6sycP1ey34vnY6CUiFmUGTkmDKDwXSzDbJ8nPswkXWE3vr3XHKJADz8Hm2E",
  "key7": "2bvJXDwBziHuAPDq7vRqtkrWL1xXBj1zp2KE18qjRdAvirXQcY5aT24tyQ1WdUjiqDVWJiZWG1PcQWG2XTs2aG2e",
  "key8": "RX93f7u4JZNKX9qCG32KiN4o92zr4X3WZ2Pv6N6ftF2zsqvaHHHcmsSLJwQpQDbvBXDJJDYS9sQ4CoiUrvsXijQ",
  "key9": "VdHaub1vixvTxrcsHXD66WDvmY6gFPLfhs1UJ4WBrYZGdjAxwvecjRvwQgXKRArdiha2yt6DmDJey6hpq6EjibY",
  "key10": "42aeBghshCCH4xJNe68rEfcuio35vJVWLE6tkSZv2bf15LHF7Rd9M9Ufrd8tozUMKVEYQgjaj5Nd7gofvNK172Vv",
  "key11": "ksctkUWoWhDtJJ3CEXfw2ySzyoRT3e9bt5C4zQfGrHZCQ2c69kPE63VraSnQ8YPY6Q5Adp8YE7X9hv5vd7rAbE5",
  "key12": "642T7uiKvp44mnURge2S5e8Jcp5DfC8UttdWCuotbmuqk8gfrUhjfLjsMWPqtTD7o5fagWq7QykcGXK6nsbDa6AQ",
  "key13": "4NfSjVPcZdnvMRYUzsckzi65z8UKNTv2J85zMHupPzozWvKgmbMbCn8QyN3fRWA4pzYqhrtEidkUtezgHu9GuS68",
  "key14": "Rz9vC7EWytyrQm76yqFvTLJVwTpbkx7QUVZXexdRENUbSMi2niPY1w6LEBi5F6cBrL6eviYEzUHrQiT3QuB5HvA",
  "key15": "2hUbz1XorBgKUWWoBX7hDcetqGQNfEwJpMCmduQNDRBGRrKB5pTqSpvVbpp4LWTaKrjY5SwyEZoH922AChy2fFAT",
  "key16": "39XGmxbtCN4rooHs382dsCAZ3sRegugb7fM2vgYkVUgdFm1vd5KhcpMLdMuRDL3p3A81K7xofZyLuWxT67JxQzaa",
  "key17": "5jPQadFYSXFUuxNYEpSwgdivgyTDj6AEJX6H2Cn3t8LSEHv7MZJacKPJbg7goXSoyz4cdCAKNtJ9sQVJpc1wgdeX",
  "key18": "4KddEeJDhiXS4pAxxXsBhZHhLTWbrXEeA9dnejcVqosCBogmJRWMWsBqUHuYmK8oTBE6SeS7H2ejhy9uS21y7wrY",
  "key19": "31vbDDtR8aBrJefY81sxGiokkVqvcvzQhwBD4wiLqknqho7XzszG34ejUW1S8LRdQFpka48rNyVRbUocsFzeyhTV",
  "key20": "q99PYFJQGdHmzF9K8kxQrfD72gSm4MjH6DgDDUpNgSC73jvtXbxP9wHuxAmDpc5d9feJ95eCQtVcWfhaVw7D4AC",
  "key21": "4iA5zFqyVZQF7Nu3ZazJjwzCVrAFuLhuFTt8esWaa3xAwWLAELNTcXacSwi2QTeoz7EBzJSARTTkkoYvwoEbBkDK",
  "key22": "2mLfQ5nSK6aL4wMjBa1Epb8BXBjg6LbfavadqoM2a6j3nno7mU8iUP3A9q4bx5eDAPwoZH2JQu3RoiCY9tYvDM8e",
  "key23": "2Th3KVpqGGxKLCyN7ZsWgVws4h1FBuX1pmCkTWqWKePStSSNqvGiPTDQ1S9Ny79nVAuJ9bF5RV38zpq76mV4hBVE",
  "key24": "4MvNbJZHYHoYMKniaummgETtBd6VJCpY4kSNZMiFwZ11gm7XhrUBX9gx4zySDAba7bsZPkuxyeNJrKoX4zstSw8k",
  "key25": "5ZAo3P2tosjTGgrzMePfwM63mPavRk2CRo9ojysZNdnCTaeUtCiRpsshudHZZnfbsK9giYuCaiXjZDToBnUx8EiV",
  "key26": "3n1473UAvUK4epmgjyXRY16ub5NooVqyq3jEeYAcFwvLqoVdeP9hSh5U8G9nkhiM7rUeFrrkMoma6DhyYKbvADQJ",
  "key27": "5LK3cokMde1YX4mo8zuAqW2vvCUzE8DfLagjCwjPeWtJVgofHksite7UPTzu78SkBePCtHEpFvdWmMifhabeg7z6",
  "key28": "5TJX1CRPKAUWDUSaymcFiGzFupZVzMniNNY5PwC1qdWpvmYv4XwX1EZVEuZrJRJ86rN1rhjRZZY8ffyZLkxiuoch",
  "key29": "SZZ5mJizteW9BJCJdFyqCfL4Gy1XmutF89sNGqKNechqhSoAU7Xvyt4cBe8evC5A4236BZ4XVkNdvsMk9WvVk3f",
  "key30": "3qF3ZYPbGpswQKpVKzHfgpccgwwfczdSVK56x842v665rZsibUURvpCsA1Z2cCgWydHzq2ztLHpSiyr1mQXYhCDx",
  "key31": "5ap8P9DGLP6kYvVNhZkrcayv4hsyEfv9i1tB1SSmsnxMjiQJAQppEy5wChqDhV7ECBC2z8UUDL3si4NtT8spec2N",
  "key32": "RvLL9CD9TECTpRB1aDgBXLzjruThZnfEHrMckVJ7zRhwM1HbZFaY4TjEKukoeU6jxMTL83UMYdbPnYge61ptZh3",
  "key33": "2sBKbEYv3EEiCX4AsKK874eKdKqzGDqrEcMq9mSHaXvvBUf7erwBa2MdErhasX7X3bKwJbnALckjPUbcyakeB2W7",
  "key34": "2Mx5MnRFYFQoMi7o7fuUeUZVmmVbW2c7o4cxVGghiABQKu24tEPqtVeehmdLG1H4eS5hZybacGZfkcCvmDzuDMMr",
  "key35": "48PKiFSScLaJ3egzbbxkukvb6C84ZMnT6xAB56XUAP3kkSvyyxZWXTshkKzus3bjc7uT6vStWAGzh8aEBbvBvfD2",
  "key36": "4h4UrxBAyjaTYmpXEwn9Vkn8GUKdG96AdMcDvtDkJFzNkDr457v2Cd7wHsL6BXReAgCNLseKCgYqGRrU4a8bH6Nq",
  "key37": "2bihv9rj1iZ34rudhGD5tco1qXJsHTiiikVc5TBd7ogdfLxZVqk33MmLvKuMMmGgg2b6n1sAoNnEwQapmjoGnGkQ",
  "key38": "3accPSwdwgNLzUKfr9aMyhNkh34w3Vh7jn6cE9DugvA9zbzGerb8jT9J4vEo5Smav7PJxL8FJ176Fard7VmWaVSg",
  "key39": "4mwPGVHnTLZxSnzJfP1qQWPUC7iVvde9f9yyccyUBrsZoDtgSdiiUHc2GoU1XJSmGJPmv9fBMxWCAStpN21mERBf",
  "key40": "27iPoJensp2ewZ3x6ZiGpgN91ZUcvJvgrs8b3xsfXqvRPmaAuiKiKQnGW2btps49TaQtvu72JcT9ftPNZeXJKqH5",
  "key41": "iGEt7dZF6KUvjYV8u8ehpjufyk3nNnNRgw1iqZsWr8Tsk3F6isBkwPh4Q51RBpQQqXPYh4ckWMXmoAUDfVQ4Vfr",
  "key42": "f2jwin3VqFUKBZdi5WXEU1v8kqHUBrDcpRfeEQWnUafvmQq8BBqQ923pHiem9jPqh9qKPTGCHs8hp6dB9fjz7mH",
  "key43": "63Y7ZPFcscU8g8QEospucFGdeoRSxV63gS2RrdWMZqMyvdM1T68tt4YGGJ1PZbKAZitKD73oaDWL6R2bkxf9ZD9M",
  "key44": "5QzdSVsDtWvxAAVaGUCk4U3VM9sMZCW1N6f8TeBTkBC3ZNFGrBtwTf3bqGcrLSrwSKpvaWdFtHReN7KJwzqQ5ivu",
  "key45": "46GKpKTodyfu4GcvAVMcsJkPTjnqNtzhvq9CtmTaHadF5vqXq7UEe8araGDagmL4QNYVS9wrCv7gksF8299c84eV",
  "key46": "5hkhCq35baCpNM3EBUExj7tEvc9Ux9afp2nBQt4roSfAHXjwpY48YY96WeDHefqTT62hFiZGAeSWqKu8qHQHaQpR"
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
