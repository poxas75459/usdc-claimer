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
    "4YHX6WnivdUGph3r65e5joXfpkM6nn9jmxcZ8h9rRc3oLELedYiByAEQYb3QKgaZtZmbZLoTDQ65jcKxeSzUKf19"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W7ScRYArqTnLwV28pT8UEXaaVX6HShfgfBWZehR6HcaEqc3rtPhEDf1D7YufUoyf3tVTAvb7qmbLQeJM412Tmij",
  "key1": "36HftpD3ag5eakXTvYATAZHDLhAqu1XH1TduCVj4uDYcfDyrc4feA2suMBdJT4XrDdfcB7e6TRd4fogQo3Bsrep1",
  "key2": "49USL1E7gk8H41voDFdavnGHFQfsXHmuFxNQzDYJzXnqUdFAv9xgMYKmFAhnFKo78XJLgDw6Dctu3mAur8zGwu3h",
  "key3": "3nBBVAA5o8u23YB7g8fhDXJ6pXgW8CY3qX3xyo515wqZ5hhZEgn9QRvS1Gqn5sxDnWHoDEG5cMxSjq52oUkh4cE4",
  "key4": "5vSSBpAYdbwfdYYQeLwMKEFAJ1u1qe96RW1ZUJCd44eerVb9qm5i85imJk3L8zXQ2rYB5oAYR3doGPMV3qKpr8Sg",
  "key5": "2AWQPZfDKguneGFmBjVpJ9QsGBNjRRottV7fEWD2o8er7imvkFUJehoDRfa467tiBbA2vy66E9SuqHsswE7W4Pa5",
  "key6": "2Smg7mAqjBWhUE54HANsecywFaDukkDTDijixSN9A9wM5xzNfvc2N679VMeeCd67gRVorCCJGDvHNRt5nQUzUoVy",
  "key7": "CF1NKokqHPyH8EsoTo6DAd2ehQpJn3jwHJbRcmRp2irQkoSDvMLksSwRwov8KegepqNHfRW9z4ejrq7xPhS7d66",
  "key8": "rg5hod5ubg1c6De5x9UxfjuRm4J3Ja1N6DtePAxyWy5rVxGDqdaQyi1CMcU2eaTeeC4XzE5VBixe556funMVqmu",
  "key9": "5MWrNtBgNQMy56uBAVYSSUDYpZQpUY8eQJkterj56xP1766iXrKy6UgWi8Dr8izyxTDuXTRDzua4bEkmU8WBmEGN",
  "key10": "5zjqmiYqhprzKk3p8ea4WmYHiAsKgBk1MwG4vbeURHipvF8KD5LxfJoqpvm1F8cr7U1zD7PhW9yW8dYZozqLFoWi",
  "key11": "xAppTu7kw7KpaJMGsPB9WD6CYaNRVvfmAThYK4AaveweYhtdbvv2unkHdFF6qG1JrjyeLTG7TBd9acbXPTMHCwT",
  "key12": "2UuxzTuH4CiLdCF3vF47xNk8hXCesuX7jasP4mU3dh4yTanP3Y9Sx8dG63PwntpE6euvfnmNxg6fm9jJT4bW7khj",
  "key13": "5kgLhDy9RgiMZpiRzEApAcHjM8aJvmp9woYMwQCyzJPHBdsEAMRpf4mJB3BxBisTBBwBAv69Vr8msGy6rUa4pQyk",
  "key14": "2ukfZQGSaCkALAcq63NzTUcUNUKrEqvu9C1RGxS7bC9KF6rL7rThtWi8tLP9k4uRB6XffZfc24vN2aQYChMd6xki",
  "key15": "5ZJyMfGjCTMaMVgaiZHW7FKXNzL7XmDzM4j8S1k2neXFbUMC7txuPjCQDrhoYEznxL5ofnzFqb42HKBsfWW9qZCJ",
  "key16": "2CkwPfHCy5aZAWPcidSuQ5RUXJMfMUdLEddwQ6BwtTwiDfhX4aajLv9As2kPpWLhnSaoGXKphV3qFUFJqMfvtA4E",
  "key17": "29pMS792cC8Ckc5MuCgcMg3DVfVrNEfQTCv82Zthaoi7UDgBuHWhM8f9tc8o1dNmYKQJPFisYAH9DU1CDuM9RCFf",
  "key18": "f4UCFtuTm45bhc4EZXGoMMv16RRjp9hEsYPyqwYwW1SCggEE8JarVfjb8U8ZpaTPXgdRHQHzpmbFQhpWy5a58q5",
  "key19": "5jb4fL6APeZt9h9KpAGnomqRNAzuM4VyhgPWJRn8ViExQ4Smwfp5D9KHWq4Ueh7hGd5EYQprnbRaZccmtJn9aRMm",
  "key20": "yUYjdYXw5KvSozzLadrR4urLonrXwtd7K5cXjQiWij7stHwikAiUo2Zff3YSXCtMncZSw263aQagJsCEu4PHsnG",
  "key21": "5yh5AXroqMGSkrg7pW1AUiZrnWs2jEBGkfyNuMKy61qU8e8fWMp5hLGsoxduKrG6SkjWkh4pwCoULhbKoMGH1mGW",
  "key22": "2iDRxuNKs5c31keQS3aa8pJH9hgEfBRyhTcjSQCxx92rB4U1cR46wkT91DfQwPRJr2mC9HWggnvGNEjZFfTrqi7B",
  "key23": "2VvGP3xRKycw4g8xzNQBPFLi9R9WwxnjCwxjEQMY6PvP9uyZXDyS3FZHrqcBYkhd8nWgpWr4ZBuspCyXQGzJHgUj",
  "key24": "sXsouK7CuvPahN2Ln7ZBPZAiyeub1VUCLDLguZZt1UV4puXevMVqvbDT7NPNxK9wqJuTh7bUyeYJAtuWptuW2yq",
  "key25": "3JWjSFfVREM9XP4wqp9dnXKLhJQ8hx1pD3RrWtPuhUS2oZuDBtx7gbbdqpkufsiBz9zaoDBzzV6fUBvz3fAKC6N",
  "key26": "3G5GHfBSwpwi1fpo2AaoAkc1aL2YuvjDh3LRsC4LkYTLzBkYGCjAroupRG9hbEtyf4vmj8fFmyiUiPgMo1AUmsL4",
  "key27": "5gFDbz8wnbAFHwLWsykwnnShCPu5yf9gUhp8qRvb6h2AdVrhbn8hcWtTG8ap6Y6V3uSxW33cTCgSiSFpm7xU1u23",
  "key28": "3iw9xw26kt9u16T9fXEdebDPkcscxaN3YBW8WBVoozgT5uoNS4hZidPFzgVUrZ7n45HrbC2FXEeDGvfCuHKtwzvV",
  "key29": "3Xigac9vnP1bVWKqGok12yEYPcuHNzQgE2X3vrqxPNVaanxNjByazjDDmaWLAvyYxtoEqspSuEwW1LYnuaap4ca6",
  "key30": "32fNvqVs8ByjhvKjdQEbMQPJek16TArLCzPiNiNDk2xTWRHJZsrCWQHsTs8HM47J7WfjshryunypJFMWN7ZF8dA1",
  "key31": "YVqysJ982kkDp2g1AmEds5xYMRhG2Et58B7CFasS7UEDqPwCvb7nFJowDAK317f31uxtPCBfJgkg22xrwVS5ScG",
  "key32": "FqxR1VVzdR5gCtn5rRHSUfLxeFTgjttiGUU7hqUuFNcPEUm3Dzv71mAWkMB4Qa5DvZ1HC2ERvtrhFcDFA9hKYi4",
  "key33": "65bpW9WZpk5qR6isAgSXcUuSTFpE9UNnALg11Q3V8tb5PNik5amWzbwxQViqFwdNd3yv9sFGZhMq4RUZ5BdjvTV1",
  "key34": "5VX6ePydysJZhBJWmSQfugCGaGs6oFo11mHPQJ4dMCeXtswigoFzsgSUqdnh5vE3TNQ7oAyxXywrWobcXKjMyKPJ"
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
