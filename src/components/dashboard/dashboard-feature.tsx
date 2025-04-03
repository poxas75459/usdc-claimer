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
    "2UQry5osJM9veTRVWdRxLGZTKM8YcTMj1SyodciUMgbRPdh3Jc4RLfw72Lf5GNnPRo28MRmyDCeU698nMAoozeoQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Cc4s5AaFbjCUkgVANp6ynFvEHMvApBD59izPgCzZZAMxDRV4HNCqtyWur66W2RBu7vysvYUEeMjVTQQ1eU6NFAa",
  "key1": "617tcG6t1mDN2cm7czAaTckyaerKFZ9jwnb3cxaFLAyC623yvtXhif993JUzWPKiekcfd73zAGoD5XrRPMiSTCDw",
  "key2": "42QW3twA8tCTCzLucJMQQJsnZuYvxNBn9wKkC9VTX1N43VX95LR7MmMtcKMjFrV9SU3YQ6aiDMbBM2stGKdwResY",
  "key3": "4fdouohnPBVbLYCuubXmm3bonJtYoJepdXxsmjc85iZMJ1ZiN662TZ1q6u6qaCijtHZgH2SeYYvUPjHmnHNY83JQ",
  "key4": "3U8kgpBKxM3fLVTWHKeqrbJMa6NgCbC43DjEPNZAnF2Fg9G1oJWPz5xQAYwsv8PhYoJvVb1DofrUHFZHgtZYjZRH",
  "key5": "5M7RP7vvNqHfC73XzH4MaUwErsFTUJUbb4LLRdHx8FsCy1A3dqt4Yv3jV3zC9JF2PzSmtroqieiYCWepX2iS4GoJ",
  "key6": "3KjjoY4YpAKeFtGmWDAiPyj9gwCmrB8zjF1EgNawRLmmJL8pwxN78bX6TxnsQMUdjmYskqFKVfXxrX7Amu7rtEkJ",
  "key7": "RWGZsCCV99GkpFbJRXJbJsjtXHNmKHPCsz26pa1xjJ6TiqvessbY4obM7y5vM6mW9rvC5sETn8ZiCo4GghYTw6D",
  "key8": "3fqso35oLdN4JbpRiDtsbBKXFCSJjdXxGmu267v1CKD7DsEpKLu4JzTXzrwakkoFdr6SPtnL4kY3A6ko4HBaRjL7",
  "key9": "78g3P71Yi7Q9sBF7KqdB5BEiHjZcLHnVSX5QaVMGCD5huUUXhvPhWLixAFRM5AipLv1ZgxwDjPWKr6FGe6dTmzC",
  "key10": "3PWQgyr8N5T6zNohjfHgoNxv6V43v2dpxrAkgPn1TWkEHbTQvKJLWLd1jVxhgbfzbTvVy8CSfSdCDRg7SZTAoR1C",
  "key11": "2cVoJ65UWwc2VCVQt84TxfD9KiKPieLyyAVkYNAc1ip77Qenqh8zgVHUg6u87e3GDbef2Ko2exJ1UDGukgyZdvxq",
  "key12": "5K2ZuNuRG7BCrmTT7dU8e9dBpNu1mxhZxSabnkbvZDuzDa4CYrhs6htywAFAQC7MuauD8RUhgF8hS92t2j8fpK6b",
  "key13": "2xKXG7V8dnnT464zbQHBkES9BngvBe6otP98aAJCPoSGjjsiamkyN92tpf1TN7Ecqfn2syxHodG8wMns3dS5YDyc",
  "key14": "wmFm688HSNxJgL4GnSPMLyqfyVZ3edUXqapdG9s4dUSNuFckgpkcAnqUnRe29U367PVz6hrkpfd3LrtUrzcWsgu",
  "key15": "9gESEsSEfc8iLUhEn9atqDGW2Re3xxwnxTjmGd6p62yYk2am8sY2y64Y1YyyCC6tgjLeBZ3R1MBK1LtKgqbPZaZ",
  "key16": "53m6yUf5LJuxoHUJrrar11jXHWXpBPHPau1WfvwxnaWWBR9NPRPaz5pP4bMTbj9TDjaUgKiNLen9RY4r166YWz7h",
  "key17": "2YiMV58dTTeRSxV7BrcKEEKqbZNd9s8hb8gr5bDNdfXrwjaK5scXGddt6bYdtg5vMqNAiL3usaCqoUTinhXcaDGo",
  "key18": "3Lv85ZHZS7ASzgmCZFquwqbyJL75dkoucuig2vri611RDY42NJA11RJxJyw4oL836FDNVThDpCckF41ZuAZ3WiEQ",
  "key19": "5eESvThVdVJuXZPuNbujHFDYGBkYmTSwezwNNNAxibnxs4TQprZMHgFTmPz6bu2beJaos4s64DG4qB6WPmFchBM2",
  "key20": "UiVBZYPbB3Fyedaj9dXB8CkaFTyhX95z8o5GyGxTYV9WQ3XbHFPdRtrrLYeAw6QMj1iMNqCqnepQA7GcJrtMtpG",
  "key21": "2oam2i6MvGnhBv6VagjkkgrnThP3ZgJmxsmH3USzVNrauHmPYme14J9XudC636AekEfpQyqj8qqQZjCNiQWDxwpm",
  "key22": "4sovn9TDMCZra6ksNpfApLHAVYvwrG9TqvQ4ddNoy2ePqSCSGWmCnGuCp7btjUEirrVHqwcR9NBUhnGWJDHopJFR",
  "key23": "48J1W8hkUkrWmTJatsykZZ5D4Fcp7mjqEffUSMVAW6KUAjXjhz6D4BPJjwfi22es1JbRqpnkFHHVayGV4Cx6Lxxr",
  "key24": "29UymWtmn5yUrGhRTyF3xDRrzzpSmc7tzgpMAsCy1MeWfnXA7LnCB59nwtibNRDaGybdAws2USw8Y9Gn2iJz4FNf",
  "key25": "6jRsECXaF9hmJUAfrBpNzhSU6L4ZfDbQG6KNX76EpNTB5Rb1gtGZ1SENSZdCPAuyF2JJ2Fz6ZCf8CzsmgdTftD9",
  "key26": "262q3MqBbcdfu4pqoigUij3pMZzmsgosvvG3eS7YHbVwPVYHCKZAq2FiqAvnEvtiSdDDdtHwrYF7jXMiPXJT4por",
  "key27": "4JHMVLgcCkT9ioXQFc2bKgXZgM1YhoUCxuStgch6scUkLja9L32ibuDGKwKzBehQbQLc1MGQU6pgxcVqhq6tknCF",
  "key28": "2Ud69WyY1Fhas8Qg7GKDoyXDDe5ZvbjdJYpJ7f6qoGqtbfipzCsDfrRD6H1rvSNYxbWkHT5WAefbskMwtbEZznJe"
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
