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
    "3eKosxVjZDKYagU5wo874t2a6nEKLfL5ce93hRuMgq542vyhp8u5vPZtuCjnuEkDdMSsHrfAQ1B24Zmy5Cjhh89i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "636UVo5z9W97B3QKa7CHcGWxMCEndcdLoHd1NRZXqCuZxkSzMTfxEvCCUhdyHaMLf7pUAD7Dsr1vujgCNLnUooF4",
  "key1": "3zw8An4acwNi7tDSDUTF1DkuHABdZR78LXY12nDtXSRFsZB8pnXLeRVLiu4pW7dWd5gTsLYSRAdBeY3uyJRkXWWC",
  "key2": "4QTkh5JtqfYCcKS6vBFYQNJugvMdekMhYEiParKa2tZ3dbyzavDnucYVccyeLmirKxk3kgLHFh5tS1ZeqJ1J4kYk",
  "key3": "xQ1fBA4keW2k9ZKeNzEWgECUMMMM3RzoK7PWCQWDgAuACdbPE4G6Gj1FuahrADajFu2P8uog9xQsANFsxDaSkCC",
  "key4": "5U6TFK5X7f8MAPp4mt6VzWVBHFsUg1abT5wA7fQUZU7GgbBmZbgpBbKSaezneaeeJ8FozW9YgeR9DgyocuT21BV",
  "key5": "Torov4at3LhmJkqDZbJa6ZqawJ6hY35atAqc6GN1aCGLFXDmqcVbdgKoXeihVFr2qLSMJqhf4KLaaLq5mYEZZXQ",
  "key6": "Sr9kPh8MJTC1ZX8Xr97ZHhowr7WNLoTKtKLEbr6RPCgLe3uCdc667Jv6ZgVW2oMgCf9Pd93RLqt9rgUnyiJ6xF1",
  "key7": "5cYDkmhGYEF9m4LV2ruYj1SKzdBE3VgbJk3RsaatnAtLHwCcJd9AkYbZtrCdHfnDFykParhrGu7dT3UFcbiz5JWw",
  "key8": "44LkAeXs1pTUnQer2uBkc1PDRKhCKTDBozn1AEUZL3YJAr8L5LsHz2yURerQi12rRwLMaTRT5JYPLPG1gAwsrGhZ",
  "key9": "X4rd3XJMKEKarAMNc6YQyv2He5PQDT1xzmbpx2dMcKHz6Kgh2jX541MxNZhNXFR8HpDZcL9gtGgWA1Yi7wf5Gur",
  "key10": "2w22BoFsZABikyeodnqadtuR3ob3ubPwGFbsiwfFd9EXVVogTDMhZeWSWTM7BRZFcypnNyXujaLVLoSAz31vyxat",
  "key11": "Vc2qegGqAebKtfrx6J5z1iX6C4xx9SEDw1Pcy1wA8uDbjDQraJ28nWJL6ppD5eeUXBRLCDkuC6d7nhK81b6Cnjs",
  "key12": "gN7Rn853VKg8AjGnqwVBQ3KJvWqKMhy3mUpxFEG6h4Bw8A7hZJoLHLd8fmSSktjR9ddWo2jmrZt9cQNw9cASavb",
  "key13": "5DoZjJtw7H63RetBYr1PYLc6RGEDL3UTJdK9bMh8q67HGcUNHyboTDSHiD9uHb8GwizwUJxrTQGkcsMtrTKQP2rP",
  "key14": "3qyqwrFC6eCyAu3XahyK617uNdJVP36RKTia6GEFLPjed2kzxpkFJz5DeF1Ene8yXXKPVCrWxFNDKRKzDaJ4jCVR",
  "key15": "4UiHJkTY7VpUwHJHar34T7g7vugd6aaYgYEAvxSUriN2R7zKV8wa89EuPv2y2cvSi8HLp5j5J65T3dtHrmW7pTXR",
  "key16": "TeCNfkKVdJY3Lqatoqk8WYFmymN8M2yKHEDuapbbXYyQYV5oTabSu3hJpwZGzGeFQHirMDs5j1eJimqq2cr1uV4",
  "key17": "4NdKoJMwJNMRHDCLjdtfAw3wtEDLAuetsuCs9euhhN7esCh3Le9pdfjn9v7kdD6GxDnXYV2YayQRsNd9VfmkArEV",
  "key18": "5pATEVexs5XAGJgttShkKKwmy9DSFwH8NB9R6jG3Km1eiPDxoM3Y6SUCPUg8iWkqWhsH6ZJJpqcRV1nvzoQvSZTz",
  "key19": "3E1YibpZXDsshWByi79oM4QAGBhz5z1xm7qXMDaCVi8789qcZZ9svsoozatjSunsknYn1SZyBr6FgZ45m4n6gJa",
  "key20": "5DyMiJT8kcPT4hqmeb6XsFFvFwhhQXH4JyM9fgENhTXFemrn4a3BH4a1oTii6uVTK8MtxmJvpNCr77nn9NXunxy6",
  "key21": "65qFDAujmUcT7HwY5yWsikuYUM76zXWdgpSw6akvKU7EnLRGdwwbsMcw8thbXg65pMLLd7d7kzSvXfepWRTu3FGt",
  "key22": "4StBwDgh8zw6rNRhfM8Mg6PfWbSUG9uoWQpRSx1GqAxeRoKEjrtauMdAkXWWhR5KziB67tDokD7xcYaZhvayUjgD",
  "key23": "2YRP3ddTwQJ1SNn3sohqvtHUFFnCfYBgAL8q3QqpvmdZL3ZqXZuZ4mz3Li5eJJHKcYwx3US4iPcse4YWZQ5RFPjn",
  "key24": "5ZRQG554gJo3gF6RxEwgHm16L5xNnaRyYp9zkCgKT3TYmC8Yyu4ChXe3Noc4U3z2VpYUDoBvdi8Du1cSCEbMPrU4",
  "key25": "v9ueArNc9ocVrR4YdyYjtbzzkjrxnXsW6eYo71xJyCoqXauc2pgW4FhwgCXikpchLPQDpwY9nFZrBEyyCeHZ2A7",
  "key26": "2dEJTyK7JY1CaQJpMAdx52JCLuYt821PcLSqsAKn8jR36jDvYC3RdBavcFL38XxoJyQ74wzmHE3UxjTT7hp5mtt7",
  "key27": "2xhEc1TwFUSMwbJnDjCjB19ZTDs6gNxBvdEnynodgVKPqD6BUHYN2rigG1MQ7guFr1Kxbcm739Dhpt9U69LCdYZf",
  "key28": "5CHEmokNAFcY4muppC8rUKVJb7tpzUyhTVzsux6HggtsERh9N8RqZunjYePCGcF4uhkeqMpdh6jxvMHiqBkfsnQf"
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
