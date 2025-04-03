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
    "4kz5fiPTXgcDeFYozVU2CPe61zhu1N8wTpGwTg4QBiEaX4mexg2gnyrxbEiHhUckfCHpKKUB3WGurVUuf58NoQGE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QuQPJ9gJ7yYBxTFWcNh2Nm4xjc4aDDebbUqJBAW5vXZtASniFRMBzqVmMD5DMS71EoNiD7m2nHCz8BX6ndjveLn",
  "key1": "2p7FFMW9gofa3exDSsNM991Tk3NPmexoYfv6kanPydCSHnrhvSSKgiFavA9aN7EcvA6Jo8Juxdq5Hk1tdaeyXQP3",
  "key2": "5c56fymqjZq8oPfYC4cYLBXb8tyShJ6diSjTDibMAQPwA1Y4Yp61FSfhdCrhQChei3RGwdiEWmxvKzpSRWjh7SBR",
  "key3": "3ijKL83RKexuxmMqZn9Q1ggReP6akNvjd93G4xqCJCAikDKfGSx4Yoh92J78D58pzNe6nM725eNuLXgYEB172fkg",
  "key4": "RsRbDFUhArAnMQoJJakGShERJdziAoypx6i95eemsrheqVmgyPA8gGgbGzNJFN5hjbprFjrAnSKRTW2C38pC73t",
  "key5": "4dnr2XN1ChGjrpAoiA9tb5K6Fu51rSpAvbPh2k3pgCrqaURotN65iJjRp5jn8vYJ1F1RQmFeBD6Bd5HoXnBZ1RGr",
  "key6": "4JWK7EQFmh84Fm4vW7CHGsSX2FYBbQCPihw4y7A2e4xH5bnDrzGiRh8aWUkujgSXZuFqAHjBtp9iW2TR74e5Hus4",
  "key7": "3xJkTXxgNexUkg5oKfQoBfQS98ZQ8jcManpKNU9MQCLcSBoPQKsXXD38TdMuH9o6XpnggtKxAqvDq3uiZkCH51iD",
  "key8": "2QN98LQSoQUoEvBUDoSZUH1w8BSWT3qDfL6GnuyKK2hGf83j6EF3T1ES94sxWy449rLMhQkVnRr5McuMpE1FwUoD",
  "key9": "4zSCGuvYGVMBMWNuwwZyGWZFPyZZiLE8E594mNfPn3vnziW4i3uKsjsXcYReWeitBFZT1he86q5gvCQighYVGjkN",
  "key10": "pXgEXFGqBmVmEqdhSdRB2xxTzTxaWA9RY3hVB1KGPnrwVrkmw48hFermpc9Qe7HV7YZWq8aCWBgKkhwDM14X8g8",
  "key11": "5RZktA3gp12AyAZpBHTEgbmKZk7aQ5xMVA3VTJuH3BcWvw9szLkS6whztR9pUuV7EL9na5S8hNqqaA2XzJMPsRZx",
  "key12": "32EKAAQ5khVdF2sXmQqPooSGEeCznK6yX6fHfq1R4ZnrpbYg4Ks2Ay2FVngxJgvBvSNB2jSx7Tuv4fyQMMXPPbHg",
  "key13": "5XjBVeYL4Ky6dvnf2kQxEsytWUtKFAmhtyEJN7mwjLBeuA1LMaab8Narncdmqg9q9NwY9kV55cBJ5rsmgn7vS85e",
  "key14": "fehbu3AmAJMQVpGDb6uRSkepNoanaHoMw71T6vf3Ss933fKs1xZm1YV4xhpffAdtFDfSDMrcj6exWYXM8Q5ohob",
  "key15": "KPw6DxTTXmau4rtwyQ9jCi9CLGEMaF4JThe7GGfWyKzkEYxiFrGkRU9rbKiMmXocKUF2WpAs9J2y8YQaSHNE9zJ",
  "key16": "3VKaptX9Sa9Pd7dwVAbeehaRXQVdRso9FpgYfBZUC2ryxMaxMVRYMdmRV6P3CqQze1xSK5pkymo85w8LwT53NbWy",
  "key17": "2mp9BpYj22kyAhdJPDxAvc5mzeywEKYScN8tUXsUcj84FjCph8FmwZggXrsoqp78AskCRgtzj9ZzoNBhugpEHV4U",
  "key18": "3crYbFyV9bgBcpkFdcfgaYGgN6G7NrdgKh77HkND9DKu1c3bpdtQNtgotgd9YpXSsNArYE59teHgVPUqLSbpokxs",
  "key19": "2Pn7MCycrsbCptmNKDEKJauVKSRwbEsXdSHJJQ76M7YsQhZhADw4czjh77ortzS1e34YsiiykRUtiBjUM5Zcg7BP",
  "key20": "mUZZ54vPYEfAwWYsaXcYL7kPmoE4S4uH3bLHsRwJTMqVtsNd6UBgVwkshGQaUN21ATt7hX1dGvTyVhpffVjPoWA",
  "key21": "3ehNtRUVZoJAnR8pt49Ez6yQw82CphvWoinak2RqrysKQaiRoFuS8kVsECvojSCKpzn3eQnmJYRi5fwVQXLRCeFP",
  "key22": "2caahn3EN22KGHyL5sQChxCi8zyuNxS8uFaUgbMwF5wiG4qhN8aEYS22SHjM98S4Vn39w7bSYJGrPU2z5By4LMqV",
  "key23": "2TyV4yPayfphMgVPSksVmDRnu35vFoSFSjHpMWqV7fpNCJJFjbJhgJUVaLMJEqLyKKTpuo2Hpv3DmcFeiLeFiHZs",
  "key24": "3sPTZmUCDT3q2iayme2Q4XCBmGBh7Z438Z9EgCjNsVNDHs817D8GHecNCxS2Bs1CQKQsAieNYK62kZkAax6Ysi9e",
  "key25": "HB7Qu3ZCkHWpx1snRnXV4iWEpdt4FknrxDoL9e3brv5xyEDnjiFvMNSnbLRRTpuxonbxL3Najb2G2iYqxZv36JY",
  "key26": "2ebZe6QNqNumpf6n7ap3hR1YLeadgubyjqUfXVvwAV4KVYdjECSCuPPs6PbtqzJzQDgQdjZ8htp4LbG4incVDyJy",
  "key27": "28w9JGzu8wyJSVKAKKGHH64LLSWjK1mGhNsp3ac9Dfg9DTpanUNGt9BFJM5uHX45RtJm42UAqht66ocqsj6H19TH",
  "key28": "4A1x6YqxgqxTrquffEYUr4ZFXRdhAnUek7QwKe1u8Kfw8s22oHG4cRCPwetNgsCgc9BZX4N54Z8Zuz1DMXzyPNKH",
  "key29": "5FefQNNX71h6GMU3R41BQ1HhHje6M7YGZARuFsxuL3SLG5Lq7b3pEqKWazdBwhGQNonfZW5dMQh3fRJPzJ6C5beD",
  "key30": "2uA9a1eZ8g7rUM2HQ49bkTrGvxkgitRPHwU2ef1qpKYxvtGMtEhRwuA7V7WCc19Lh8vSUpgZy4BM9LqEWNXkxYYz",
  "key31": "3XQ5g9gsEBbPgx4C9s8s62jM5YdSHifVRfHdDQw3yPQaZ4dCW42gsQYzeBwGKiCaXo3PDGYrNJEp8YNTtSWzqCeo",
  "key32": "4jw2awezytTF5mSbqwjV8RgEq1jxJs52ykZeh9XKPN8tswfDwpDUN5PvA45eD97hzjEsg4vrjcLhNyJcx1NmBKjW",
  "key33": "4vwxK9FwHUs1GtMGNTWohxDXoJnCQwQTLznWBd2k6Mtrr2XbXh9V7vSQEngU98Lb65eqyhzWJWuq9jUJF7YzsUPZ",
  "key34": "63byq38gzHtexawChXUDu6aE835PxvVdNcJbfBra9o6SpynXc3JtiAjWMjnDWPfFejio4bCFuPkc26fouai5QiZw"
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
