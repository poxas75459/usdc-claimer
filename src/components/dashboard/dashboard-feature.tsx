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
    "NEYxrcVue6FmoqgD9GD4JRxan4EWCjqfduygHb2RdcTWKJWcKjvzVdCvQbvcS8gnhzFpK49n4iaCSLUMH2qXpzx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67ifjSoK5eXxz4qjvPedxWNQbAigeReK79UcuZbBVU1WkpAy3xyv1sMZpkTz9vWb4Qu39ecpLfnYJpX7ntKrENmo",
  "key1": "4KZyhqzhowM7hGN6yrj2NDB8GmVqaoqEViPT6c81mfXvAzm6XKv7aNSuiaPyv6XWPY5vBiBeknxGe7RrSUmzvKtn",
  "key2": "4TKtkaFfyBz7i5byGcNs4tnKfdVdyRg2e48jCvstC3NaqTVSVE5ZBZJ2vyu3e6PVh6rh8pacrU418e5GfnUqhUZt",
  "key3": "69HXSCZtbEeNrRM8Sm8t671GpZjfTgCgGsJe6cK2k2gWGyeq249N5wiKtLcKQPeekMtGGnQB1X927mXtB13qNJ5",
  "key4": "5iSrTiSWkkCrQ2egqeXuYEuRw8w87pfyBpniNgdg2hh5oGaPUni4q5ijRwyKGCtpxqtKwBkv9kYLbV3p6AH4eQbk",
  "key5": "63GW36eeoahA3ip83hwEQTH1k9C6xLsrmcZJETKp5jKjzDLj1Qr8KyisoyETttGkLgTeHsrwJadpEMDt3p2mePLM",
  "key6": "3dkZFCPGTeBw6xmMVSgjo2MwvGXMpph977i3gNdGwz1Dy1mZNVNY14CE5DmcQqqVxdq8DPAGGCTTmu26NMyaBf6U",
  "key7": "LuF81rrR3qF823ndLxWiLVjMVN8fRvfuutSNAyPVZ2a9TACy7qDMy4rLGY8UVeHgmqrPg79UHuiMyodEe5QnXpV",
  "key8": "5GDt89a9TFWnuLrg7VnwGcv2TprLAN7mpz3dLzTKjTVkExkLyWVV8sTGEvWosRsAB7KhVycsQ6XeuUwtxUzxzXBt",
  "key9": "2cQMenjfmqRvX2FCS3ieQ7TW91Rtk3DhHKTpHZEEFiauQY7LM1TJxF6QS4Qx2WYEhx6jUj5RGrFtGXmpBscEJhg2",
  "key10": "63mgd4R5dCHQisR6CX8WQ9JqLwMdspgYS3Z2eNfF4fkPhYS9Ri1LVvjPXGBLgSSU8SBeJ6pWEE9hh3AiUY8sqCPA",
  "key11": "2qmvmixQ16wCBK6gB5C37d6sZU7hj4p9vtBHvhoPjvVQiSVab3cBmAPrBerK3X5ruuzjx17utwsgeA3EJk8M9TH5",
  "key12": "3EK6J1rck5V9gpJ3QKw6rRQLPxCm7u1i8tF4rw2eX5XxEnxQsUyv4HB63FSFHFVVGshRRz954fLdsPg223dowrr4",
  "key13": "4h5yFF4TNWWMygCidmswsU5Mi7PKhg5AK27Fpnf2wRM4B95swBdRkpYDxC48ToFCNBYyEszE9TmY3epAjoCzyYG8",
  "key14": "3fLcTagWbWYSXbqABjAo2aiEbXrtMBpsVWH5ywpgxfA8eqyr5VjxSiPBNsodhiwTECrCbT9CpLbK2tK6nYXQHPy",
  "key15": "383eLEkVRbvegBSAc5SqUvAsoBV6EbuNEuAQCzgjRrjTDcc7RR5oeL8Gq8Ax6s25qC3E1RFwV18SC6dgthNSeSot",
  "key16": "3RrmcfEFicvdS3daqLhUCcdbPtqHCZkvBqnieTCJtvQLFt7xDqJM22tVrWsU43qiMQajuHj5wgGNzdpTrt8zeZuu",
  "key17": "4fVr7DKuHp9844apFe9CzKSzcDkQ8Bn2euZ9pXouakpgp9qSMrvh6Ft9WZJqJ2fAtuSm1V9X6sbqihpuP4hNTECe",
  "key18": "tunbUrXZXiYaREDXU8A8cBf4nqaxARJMv7wiinL28Y77tfNTs3gTneWSRUWG8gerEVsg8Yh9o5XCW6k9qoCy5UH",
  "key19": "3tNbgdSL5Jm3tn4DHqaThkmJ4K5K9mpZYupPbHmNUytE2HRPmD2GT6F43DvpKvXu9bTjL2b66tY2fGqnm3Uec49E",
  "key20": "WbZFmyeLA7odDe9ihk14HXAcDwchGWWmQGFNrkomDrUc5jVKuMyM8dgkHUdbvpo9417Xx2Ric97ANo8vdCMZJnN",
  "key21": "5Vq9Dx42ZNHNmZCrcSAWSGbS85fAk4QhYPHQuF2q29eJWGhnbZxCnW2vn6W1NRsHkVZuKy8ixmJR4zR9AEHQBfkD",
  "key22": "3jajwd93mavAFh3WNs9JHRmd9qJxivVzoeawFhXKNKzt6H4ShUxqr9C1PT4AejmKqqhn2WmnpZM2tMVEAzZBtGKn",
  "key23": "5EztwV7t82bdck6WJXvi5HKVkm7mPmizMXsqvcJ3LYbxVcQMCZ8CiTAwLEZU6ffF13UgPXabfgBy8GVh3HQ5haKP",
  "key24": "2spGHSNpqQhYXh2syXPX7eHhAtPu7rRoW6ZcDLrDR2S4Pk5uTwEAUdt4JtEz3mdZqNZ24qZNmv4WXK4kv9uoWhT9",
  "key25": "3czXBTHDgG4vrBst1qo1mixvno16o4d7VY2DTNPzm1CFtTsGyMqr23cwfqmFPhEnNvCEzMKaYwgDKZJA5F79zpcu",
  "key26": "onuBSQCtbHyZcHNTs5TSP8tutfgJZN1Raf29wgj3396iFSYFB7g1kSUsiDjVi1Y12CuPeusy6ew6mHen4xMS2tK",
  "key27": "4TD6dA2hzDEZEEb4Ur7LLJhB6PecYapSkEnjPbZgKRnqPAY1ha4x6sf6VHFL7j3HHnuB2ZercS29CP4EH5MCyPGG",
  "key28": "4ByJNrcB8nn4x9HC7shz1SZ3ERZWRZU94Lg2Vk78xZX2v1tsLe9AQ17MYDucHgBuK9VMtbXyc1ng93dHCHtKMqZL",
  "key29": "2LV2arigT8kUXBhTFoziSHtQ5KPk9ZKKmiY7Ty8CZWXbDvEFuA1z2M68VFW2z5sHznFoYgi7uPtGusZg3jCyr7RC",
  "key30": "Jfrw6BMgWjXJCqA5awmWVyki7NzZzHYAnafJEH3ChqpqERMZ13zJjSz2V9d8fZUPGiCURDXvxWson1sj3Y2NAUK",
  "key31": "3psD9rR6niuv4Tq2wZ9ZNfCuZXqSg7AYv3YtQFfxp5FkSEMLWEqGYZn1AHVgcPGwWwuyWTdN8EGqQ2kpSrsS7zC7",
  "key32": "8y3a61YXTdNa2i9aJCgCdAknNMUmiXrdKuqab6XENok7vX8ELNeNghfBS2fnhCYq2sBaHZ1ynTJ8YtvM2KmqkRs",
  "key33": "4Qga5jTfDuDmrYgbUpi4pmAqfqyScunzwX2XHQiPR86jUuVEnHtrhF2hL6X1bbDm5f7mggDFTVedLJFnfbnwtLYQ",
  "key34": "26eaUn8dXBkJEUG7oPS51p6D8uBmjtKidkhixUhZ6e6QhvfZsekdp9H1ptokSGmGhSVTdaVi8zytooXvY3Qnaayq",
  "key35": "SQ4hvGsL89vf8tKGZUnUttF2oUNisBJomrGMrQSUyqisWw5NbmiZ55czizSve3T43Aw3yfqUn5DFw3yV9T45FcU",
  "key36": "5r5aVyTfS789TA3VAaksWagmbFxM6pnKQHegnXJNXAjkW5MZBjGBHTkLdSJ4mvFf4z28LZiaZuNYPmJd5Cs29DSw",
  "key37": "s5bqsPYaTGTKYDxyT26MCHPUGcn8R8pHKuXVcp6xp68L7S9g826fkHXDoPr8tcQG6se2taQcQqgU6Zqg1eLbmG6",
  "key38": "3xuMK7oqKF4avB7F7DLMGESZBHhHm2cFvAF3kDymZbtrHB94nkDtxxrboQn1aPQuFKUaGDu99YrkZvREGevbHJN2",
  "key39": "2cm8AgvWXcweuwVP2KL3RznD5RbPkFAhY7JxgY9FcMYhKQ2wtET5Ey4g6MbLVtJEk3EZZmhRQwopbWHV3KMYe2VB",
  "key40": "CsKM1F5wWybLNpHvzX7T8XkfZjTLjvUkNFNLsGJun1JYdtC6TXvBppb4A9kVP74usK9fcHKLejmb9v6XC6BvBMh",
  "key41": "3UzcbRfeuzrbcgByS4fXy8FbGdfHN2ftKzp7HQ1qZkKGKJa5bAJUiqtYrXC9wCk2vi1ZQu7F3WCXVKDtVP8hRmD",
  "key42": "F2WbMhpmTv5bo1X9faKh3pBsZ74tqPFfzHZsZYJ5gTtfqEFQjuTTtTLo8CD78CMpSC9aVRPW4fEXWwnpbzw4mqf",
  "key43": "4KsNvVFc2jxzdkyBAjrpX8eGd9krQebQMCPadRJFRQo57jWQDszsnXgnAqnhFAbwmQqWHFUZGwLSBw9YQRPR8LqE",
  "key44": "3ALkMrBQKgrRqMyp1BeGmsSLYUkHi2rYvFDfvKVoZ4TwcZiD6iQ5mBmtjZfTXTJ9bb76gbnLxU2sbvDJ6d9GmfUb",
  "key45": "3ikVB5gmSxvTW1STAXBXqQ1cS8G9iNMWRf41V2tzZVX69FWfMvr71YsbTWu8v5FfEJmNHVVnXMikJxqxUq1fXsq3"
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
