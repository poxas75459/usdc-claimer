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
    "4QGf5JBYw9oCavN4zPa79zPxBMKtsWXSz8AU9MubbB6YDTGiZzrGb7rA66vJ2F9pPRR4kWak7TdqD6wvmLhbHirJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rSxWegdoreASQ2c8vxzUxQ3wEvYjZT7WuuRDx47CLKELTbj8J1oXzbGVf1vFRpxiUgAtkrQTbFk6B4P9zQRJD7g",
  "key1": "5aEDS5FxKEpMdsxDMC43yMFmfxYtcJLRSQjPV3h9eBuaFmzJpYm6uDwRYdpULstiH14B8aBRcmPUH9PYD65C2z4k",
  "key2": "4J5CLBYaFWmt1ZZyCyWG5mvjxDqDy1jj8f2bfL9ErBrNBjqNzJ5HmZyK7cfZT6gFKW8c1MW2zTLksbSUXda5D9HC",
  "key3": "2ocCKcNzPztgo1rkVSNJ69q7Sumx18gWrGr19vafGhvCWpRZk7YAxN9HqALd4LhnHRs5SjGkURUoT9tSzr4EMzEP",
  "key4": "3AzsakLwaL3uTapv4kPkLbS7aAEzRB8JyQ3CPUGW2N8MzkMMVVsJF74fPKLzvkCg2dKS31XWB6XbFWG1Sh4QjuuT",
  "key5": "5HN8iMLTfcZf1C2nWhSMtHtCn6gUap2a35Zz8Cwjm1UbGdnqWZfpqMj73DVTtHw9JZ5nn1k5U1gnNmF2PqmD7VaD",
  "key6": "5qEnJSi8vyKp9rVuNiFs1RoKxo7r5A84xbqdDULyPPtx1zUApi6bNMQc359ge3aQWReX2UPUYjwKgYznzA8LVhVQ",
  "key7": "26cmwYPLRHBjLJxuZeJKghBd7t1tCRJjpqK9FW3ZjHPFFCzwJfBWhfQUuzzFRpjkN8Czm7fappkGUdWMCbELc5kv",
  "key8": "2oqp38NQnSbGTsigyAdFspHLuPG4TnQ8fzonW4Dnq5C9r995tFs2nUJLUxod1AjDG4R4Pz9UcExSzQtTvUyj1oD8",
  "key9": "5Hj4ovEW7RkVwTC53GWvTMJBDLHSwm8kofWeuj18zc3HQm13apEgFWBoamb4khfrQGS19k2Npp7rPXMqfyKjW7Qd",
  "key10": "rPzHm4JrueKi5xRoTaPbpyGm92XY7en5D6vTG4PyGdNBBqtHaMSsTaDFxCxbpPtsiW857LZrXMiuqF2ev8dMSZZ",
  "key11": "5vQL5NixdHDJHbnKoQrHJWZRSt8ZCYepPffC1QH1ba1JGoz17bcTWsLuD7KTFB9HiQsAUP2cPBHFnS8gRV1GwqZz",
  "key12": "5Pki6WCA3Jy37LTwNdTftQQCrdr16A692ggDmQQAqgoG6F4a5P4ASesnXbZbWc18NmeWaUtmK3ypoLCGFQQjEFdT",
  "key13": "27s1JG5YEPrVSXZCiZWn3GCasWJyAFXXjq7nhkTbYuAi7MxwHhq6dz1n9HKFiAFoegDhz81NjEQ7usTDtF51bSU5",
  "key14": "4Uf9UdergzCUtmH7SRMxSEX9s8VdGbBact47jgaSVTAZycuJetEXQExb5gdj8JngrUmDxMoKuiEoN8pZ1eVKRCD1",
  "key15": "4XvXC7AxMyDhjCbfpT2dYP1eUxkrEuj3r1JbJAdRKNyuGY3wZPFkf4sRP1jpMsD2CZWKgrvjdkvLr3xyDQvQ1Y8",
  "key16": "2gBqgY328PUZRFvVshiUXyW9eZmqCYSr73GpmAdi3ebtfFLiFMGbwrJ8GX5mQy9GKZgq2uFbx8Yt6aRD4GBRBqn2",
  "key17": "4iwnrMdnKDajhVccRkQrEpQsH6XKoxzzis45PphxDoPKZQJgD5FPCvnpZ5adtj2gWMPhbVfjhTJjLcXxjMNd2gVi",
  "key18": "31ZSpz37U1MR7QdSUrNioiHYzmC5RQmgRFM2HbK45txzSgxJy1BBGAYhw4grMWzUZ4geMUvmPwLqzUA13S1v4Xsq",
  "key19": "42JpaMZV1ndu35j8ALrv56wtYT7JLMwSgMDcnfUUeY3AyrTSMfbv8KvWG3P68UWdRyP17jKrYD5NtiZfcdw3m64u",
  "key20": "DKx4uTJSVXPqXAFySs3SGjKp59DfWEMfmoyNmjCUVEZ33VbCb6ii7DkqH3iDMTCgRLDC74vjZPcs3ztgUW9dHnV",
  "key21": "5y9jSZvt9n2NxqAgqNfDdoZxDanLXfVadXQAS4qW9wywLHXzUmuFaX2c23kVaYnMm2NTZWJ1Nezye2F2L7tXfYaU",
  "key22": "3Zn8bkBujuWPqbY4JVSuC6NV6e89dRnfYig6peHuqiPJek8yaJW7J28GarCXFTSHxa3k7yhTrgh2HCw8uq5rARbE",
  "key23": "2SWBmpAkTPdGTTi72RfY74ogRyBJLgDeWXeeSFmFvwMXo5RZbF93Caot7x3CiN2XvMuEAqGMS7na1GTGvDJZ7vRn",
  "key24": "4WLa8WBe843aYsaP5byYydGHrogXLwjr24997eksRKMzuAVpo7B8E5S7t9pip13WemNo5jDnj6EgVvMVKZ7hjRE5",
  "key25": "21W9MXy7EGajf57pDWfJ7wRjdxSyTL92tnf3rUKtKoDWUNh8rd9d6pQ3JwM4U7Ty3Gag9ACMcnL2QMXgu4iS7EG7",
  "key26": "2iQbqUPxcLoBuo2Bx84qUoy8wL6thtwKe9x8VMGFtTXo4R9ZHnAkHifncapXafqZd9yGwq1jGB2yZGD162LGcbLk",
  "key27": "4HkwNz6RcL7xY3Au2VWESYnHotBhixHEv82JdSTtrFREpHCNKQpLJCo54Zz3ET1ideqFg6U2Xufc6HwHdZsPyh3D",
  "key28": "26KH3jy3X8PJKufSMgjstfvuhxxhyLoqYszX8mUTL91RxxroxSLnXHvPomjDtjiQP53mEoHddFWyPnqEVNR56sD6",
  "key29": "3LqeNWTnZiDutBhewQuwNvpe6PMh8Z14DoXq6jUC9NVMTmfA47UH8ctDzcP3scZMDge1E1iJhVkquhuWxSjvTQtm",
  "key30": "4Ln4jGxujiSsBrCRh4YUprzMZa9hKR57edoLayZd47bZVih1PTK1HkqqVyAXNwrdCqgTxQi9onc28GdxNBxieySi",
  "key31": "3v9SdYKRq7KFVurPJbrzjmCiEYjnc7B1G7h8SL2ibq9Edg97wpSJUeNWsbrSNpdPU6y5Xf31M3s33FwPsPLHZfnq",
  "key32": "FiaH6GcYcs4Sd4DAXC85xjCqnGCcEUerJVoyA5ffPDsxnEXw56EDXvVEwuyc3u8gbajBTCSwrsoNtfhf8TA17Nd",
  "key33": "HrwcEs4RTgtVeeFXLnsEwZUM23bKaBgEcYVTNPnV9VK1TYgppUgKkytCxJPWiTAH5nfN1ZGWMnQPf6wVBbo1nP6",
  "key34": "JnhBjw41eFNwWxiDTJLL8iN9NhHjfaX7UG5B6oXANu7G9SdRms1o9Cr7WkPTAKsxETxLnjfm8tpynf9DU8cuuNR"
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
