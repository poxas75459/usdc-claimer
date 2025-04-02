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
    "5maA9jSUHduLR3wG5tz65DoEheXLJFRxDYnnHLuyrLUymazuwC1hNa8h3cijWENRN9gPTSFANLfCbi3zJ2wmR91m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DebLJSohkjDFv52EJ9QZ77HSqpZsv2onwTpRPKCGK2GBkHxkMJRTxivif2PqgU7xwXhNiayZdkDpXHJB9rgZDCz",
  "key1": "2ypn9829vKVwb7fqRPabE345jEDtncFdGkFPvQhPPSKfiw5DXsxzhVjTqdzyv5g5FkJvkQvjRVNkK5wfqucMVcNC",
  "key2": "3iyq4q6p38ytU9KkRAxojByqnFXKQx7JDLT5xiGkyf8yHMCrig2dMRf9S9PD6PhcQuxKMz9uJPLDoiKNVq1MRjK2",
  "key3": "3NUVSTjP3BmZvCSf7qhvSJX2JapwLzSo98XLXYbxTfbUX9pzfqrE7RtukQmcsMKwvucSfc8sBV9RpviAbTV6ef4z",
  "key4": "4ThcpPRUzpBKPo9qMoxNgoFRKdmTLpn6W7x25tXXK3baKWXaC2BWXWrqQsUH5jAntMk1v9KNMCHLbpC3wNjM1aqv",
  "key5": "2eWX4MS2ssZaiC5oUBfLUejp3Ms8ApYeK8jDd611kbNqtxGS2Cg9PsFWw5FYjfAUeY2RnonPFW4ympkaijhRVXhC",
  "key6": "Jop6YV9JwbG8W9zQKwwz8VCAVojHB2yWNQBawTV8o5r7ermxkezNCbVUNRvBaeg2u6yPb65GQwVygGGKZTAKaUp",
  "key7": "5742zzPhks7tn2S6prVa44Na62TJQFoaLECT4XprrJXft3nuoiENAjzhwJXKSyYdQP9Szw2387YyVsgjHs65d6Aj",
  "key8": "4Vm66MWTdy3qqRC83C4TWCKsR1ztXgtYXN5dDu1eS8QmVp8b31GeXbqcpfQqTtTMR742upc4aDP2rxUKS9TWEFnG",
  "key9": "2E7iSuDCaeVsgZEVpuJZGuFLVEjEm7o9VStjuiJagyo4FqpcU7GvixQE3iuxQeTNe1rCSv2iihsFbBgYFUaEo5FA",
  "key10": "86sWyiqEmVbAhjMJ7LqNQmh1xeDMjkABWBruvvkEzsu3HcT3Ff8asCwK7rURYagW4hR3UiC9GQ7TSTczd33zcdF",
  "key11": "2pDo7Ubq4z6ytEbr1ze27xUaW3K62PL3bnYAxApNdWN1mx23BWaDdvAwKY57AqQczdyBiy3V5WByn8Urt7Htn99f",
  "key12": "5DjKreW5Y6QQBBCL9fTQ2kyXuPZYi1jVjC6x7jFYpmEavZioc4CzbZY9JZUmVJc6xJqHQk4Jj78oXjnqzEo2UJLo",
  "key13": "4UCTWzdHsKzz3x8t332wYAADago8ar2icTpigs7FeTT3asshUMLNamL1q4zmJxoLkwPNAoFN6JfxYpeAP92A518Z",
  "key14": "4zW7eky9eQ51fzhTTGbypJ34WKzWCxwb8Tds4zXDxVQn2eoM4szq6EgkaTY6p2We5qhTZ6bpcuCww8K878duCBtP",
  "key15": "3bhdMnA8ndX7GiQGHkEiSrL6Btgi1ULzS8959brEcB55fLcoFHH225JQmGgKM8V5qvruraCuuyycpUYpAPkCZmJy",
  "key16": "5MVrX5qUqNc7gop15chbkSQouhF9HK7KpaQbCznWCGCUnyu2pdtKf4H2Z3ADbU4inJXjMuGc6iGex2vn9Q2GRo72",
  "key17": "swVxu32Yf5vjqMUyDsp5CQDmzjDb3rmT58wdgDrUEh4Pzf2wmEXpViGdwLZteW7Zs3AEX3RtpgBmyCetMkWdA2i",
  "key18": "2Kz7yxMJSBGVLZoaFWsupTBbr7DVy2NR4a2AmSpwcCCApR643iGckV1riC3Cu7tZXiqxefCEgmKLPBXz27cTPMjN",
  "key19": "43CvQ2Cswyu9yGW59kcRQ2Z8WKyQz6QzRfxcakPiLoxupU5UPwtYdMjg3W5j7UG4Qz8bcsr8J2bbpxPX3hvZXPnQ",
  "key20": "69ksVGGgX7i9Fy4nso9vuVd4D2BmaBrbZq8ugqFK7DNawABq7EXGaAqGYKpmW9RPJ6F8wAaiMQRFxuBq1KCHnN1",
  "key21": "4rPBZsf6Ep3KaoXkUHAneAmGhjfECpVKJ6QK7JdvRaUgpCjDrymP5qEGkysyj2KF7Ac7RDpiy24EXoQVdJ2wNXAR",
  "key22": "2rtypWHTGX5KQxNNziy83P5tLcYSvwAdrjjefBgwiKaryxVHK72C9pMCY278Zo3qtSo5EsSjbHTzNTkdPu9b8f6J",
  "key23": "4DJUFZbAeK6BN1f7cFzqbroPdfcn4TGNusuMT3hYE6tVMwjW6HPFmSFggpj6XYYc8WSwBZRdgkqmqz2aayKMZjVK",
  "key24": "TMPK71oL88hdUik1zSrUAhv5YKBTgyvv5wJV6vaZfBBrZ3AoD3TEMN9PExPCbF9U172r36AC4oipUBndveYyeGV",
  "key25": "3da2A6pEFZs93MpPmJCAk74xHjp2fEu9v9fGwe5VNEwFKm3xsufgQfLTNv4kMMz6MxTYjgRJAUM5kTqd1HDwEt2M",
  "key26": "2HdXruPetdK7xj5dWvryqZsrqLrH7qj88MLdJb7QrfxS6C75rMkQUwKupmHS6hM3b15Jp5ZRguT8T24wDAjdUW4Y",
  "key27": "2FjqhSk12ySnUtL7xd5Mvn3PEtbKQJpcHXJXo8r4mJv4FdUAukuQskGvaUFkeY3y5sLbnkra7fydaH1iugxdpTjB",
  "key28": "3Tu9bpMu133P6WrbCRHoSPfcs7Xhc49S3fpPrSqBWjuXatn52rg7LFH5obTaPcSZbNzjYyQ3M5t45HnZJf4zbPvQ",
  "key29": "67293swoWfKVS7fGqvdt7fH4Maczr31RciHrXd74nd2L3pf1AJB9hrmtwVSErPBT1TzRxarPvJYibUmGcxcNmdVE",
  "key30": "48zuGX7biURNCYDuGLpNvvSxwLFmuXYCYoN7knzaBzDqYtGrWmuWZuadum1BUnRUCQEbCfUZcBkYgUgVoxWBpGTM",
  "key31": "38EoF2Zh5YmEog8MXMp3KuntSpWvWvsyTmfN2gNK3KzuuqJPxguYrK7ZLMPVDzLNgQ2WXUnCeGKW8ozHwGX1jP5J",
  "key32": "2Cxn59PBn2dAi2GW4k6swmB7A2MEaSBZ8nZ3WQoSVnqLY6MyR4U3uKfTm3NQ4dR7gHgTTkBh1rj29GRMfKjo1DKr",
  "key33": "2amfT4RxmTaKEGSeohXWi8vPHisGhy9don776vBv3XtGnczoemZjpnAYSQSSjCF1vdVY8MU7S9uSXB76YdqdvmZd",
  "key34": "JhhJmWhHrvbRz6dGJrpchSJHyrb27bdUDFB912hVNoxeGiHMghENpe8UbdqQ292rFKNPMKPgqwh8jtKqCibjBuJ",
  "key35": "4rHyRU142jAQTF4kvkQzB9KG8waCGYMpdof5xk2w9QxZD2H54XizvyqSjmomKUnNKYQ97ZS8yQ3eDHam7tcfr3Dw",
  "key36": "dgnS2ud53UbeCcYtThXj7rR9nMgsYVwFUScjRJyFpTVchVgijiKgxbf6ff31t5WRKvDuJPAWmeDEts7syAppkQR",
  "key37": "3Atw4qMtcRe9eAcWWVj4rMq6FKi7zc8hUkNspszUJ1A2stU2HZVyk41YyKJapaYsXRwJpHgf66oeFLmtUCeFuY7J",
  "key38": "43UHBqCQv9mAzk7pSZqYJhaFuopCk1gnwfYFGfyCpuQYeVUNQN6K5xB1GbjNZE8ziJwqj8pqB8htrS9YA6arDKPq",
  "key39": "4HnEvzyp5rEFN2sgpjm1VeuQyoi5QbAhtU2Q6BMmFSxs5VSCXYjScJDW5HFBXY1qraHQej4CdFaH2RFYEtheb9in",
  "key40": "tvNctFctqTDJCcumid2aQ6f1VvzDv9ANmQDn277zSJYCFgrFyASpFFFXD7bS2yTG6WEagrgVFU3UjJMA1dzKc6C",
  "key41": "4Ui1jmiyXpnuGNQwLEyDPD2sLVED7sUCzXPwtgbnQrct7s1LHUNK1SR2VCoZYe3GkyGwWPTaMaXg75mHmo7e8XBs",
  "key42": "2qYGtmW5tCoGBxnp8YK6zLBfkwjktfjCQUqt82JLoLjaGeCyEbTgGNTF3Zgm4VGnnYcqx2hnue5YMUqceUSfFnkN"
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
