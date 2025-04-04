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
    "5DBGciAheCLLZz1PKXdsbyEJACW3KM5u9VUiSGhPZx61U6H14YtQjpiEiNaEyNXuFDgC63FGCrxfyh3cJzNJpMWv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AapBytyEzoB6jtVkzpW396a7U2auSzQysYseySX9UjvxTm5Z7ZksUPLxFJwfQNi4xCRbvqfrb47rq57Z5go3SzC",
  "key1": "3kHcBr6fYCY5vAhjAasmjkSg2fe39s4jH2d5epfCxCCeA1BS1aUDAoRduNGorKu7GeThTRvReDXNTxMugsKoJpBW",
  "key2": "2M8zHMnJ5pWZmCHrnavbCXXTRxQtFVSeNQCjVstpKWcCtrr8vrW39yH3xbenorMWeZjbEFYYVQv5sncLMv5ParLq",
  "key3": "3H5Hx81cH3Hd2v8xFjURcZjpwDC4n1D3WEQfFzKN2tjdePt8TdamP5sWmNWBBJafEXqvE54djgMikDYKoi2JedXN",
  "key4": "dWWX6KCjcZJTydepLPd3KU6yA8jLxgNZNj8oZWifk73vmXiJtnVekutQPYHdiqv6JhXbqCLC9b5HbCmewUFg6Js",
  "key5": "579fS9T5pkbboypqMekPHvziLmS3fK6YgMN7537TLZFDp3n3pe5VPmBifuNMUUAHnNWQFKJ9Us8yE7jQSo6hAEHy",
  "key6": "2iAd9epyRixYLa13bqatyiv8x6Vj5hHwz4dtWXAsrGj3Ss4svuBhnYARjQUsoE2VHWqAD3m6JRFbWnWQQrSYNNZb",
  "key7": "2kEpYsjc22ZMcHwfXo5tMfZqLHaSQaKWNnYAywsvx3LRzifkWUsXKBvQJEynHeqytdbXotibZFd4bEZHamtvWsYW",
  "key8": "syouYVgWAmTuMCRHCQmpp2Sqezh9QPAR2tJ33dRaUTMYvs2hx9Uhu5xfXrnowqAyinzwJZrzpEBM31REtsnr1pA",
  "key9": "5LrLTvyg5EjFGXbsR8tvYqURFVYNDswJ5L2qnMzpHM5Wg1ASATTX867dZePv7DsHfJhvPnUvaruMGKgJe2zmmHMd",
  "key10": "5DboLa2qcn3jSsAAYN1eJZg3fUi7LTKFKUrxqT9jijXPzjQ6vyYJxf7LwxxZ9Coj35XZ61SvEYawwNWg6ZFqZEeG",
  "key11": "Yw58WrrWhHgzTq98V8PNdY13wnQ4t2vyGqzRPSg3wvhZB4Qf5jGrjhg37fk4UEJqbdX9Rv15od8KjreuWc4VZvw",
  "key12": "3ofv9WTLN9ENJwkJJ8KcSJbcKZCyeUQ9gBr1Wd1JyjU83Vn4zEFWuY8uAHgR1P5Qg2FM1AijsLu3WWyNhS42g4Tc",
  "key13": "QAhFiLC8Fd2iDmHaNSZWUSG87PE6X9yi77nXqX62sUHQAxEPWSJMtKMwwP3ARxPe4dnaLc33e16828HZEXKDPmg",
  "key14": "dZjWyghX4x61L4AFtZ7cNMkkbadMytvXSdiFte6cKrEgkkTneFacKMwE2HXXbLoNFFMfTTQt1f3rJwpqkjovFgD",
  "key15": "4owm6Tw5TXxRTUTvzfFinecCQ8pMiVa2oQWXqsWJBMxdAu3T52R5Fr6vVSrxm3q1rQcdAtC99To2K3LeHom2ZKN7",
  "key16": "4wBLkkoHS1vhogGSPhYW4A7oknj4vP8qZArrCTQSY9ocYZBzwnFVk9PYk8qjnAd7V84Ws5U7zUXiBKZDRwm8YsJz",
  "key17": "2Y2zADHqjEZRfgP56iUmwtNJjjDLyDTcmz3yR5MMu8KVN3b7MRzoFQDccXNEaExXkKJnq44dLpmBbx15Wx2kmiCV",
  "key18": "3QKM4ub5xFuuyVgMa6xE9icteGfTEjZjmVN33BVEbtBTcCD58uQtVPY43xoSye12JnompvUxZsM8w67VSa66GXtr",
  "key19": "3J7UMGcLR8oSDNxaTBPbAB9g4u2TmeyerTQvcPZhqCQZ3nXFza98eKg9dRFAAP1EXMZzWQvHRdRCz3SywD7Zx6W6",
  "key20": "2xdbnfgfePhCQ7eQ1R3FrByWW1pS8Tcuu13vBYKuXVHiTC5m8aYVfDdh8avExKrGagYboMgdkst3wss9qqzcyQw9",
  "key21": "5A9iq2ouepW7g3myxV21ovzoXuFHQnDfwLFoxRsWBZra4te4PTkcQ5dRjRhfa2B2ytiUdDhvre2RvtgXHRjeS9aE",
  "key22": "4oFZehWBUywL4h37pnND9w2X83BeEkhju9NqfPQ4aeKoitH2HhUeWXyRKorLNHNcbfBaFihECdnwBemeBY1TxwVB",
  "key23": "3fTofeJ54RYPKRm7LS4y8Zi136PH5gAmAwzJBK7GnoGiZh1Ep1D4htz9ZYmUtchAmkf2stg7AuMvVAbtrrGzxHsh",
  "key24": "3YcsJg5kJeVGuTB7SzASWnT8Cwbjhbr3HoFQBc7yWZZy787no6qnnN2mR38QpAzrKQ5X3vMf9t7mzDebSStyHVuK",
  "key25": "3ePAMTkxzfKCSgQ4YwCHqWCDda9PDcuqhgKpBLq3Ps43L9ESoozxc5Uy8PJY1FJw511FF2jgCBS9BzVNL44yLUL7",
  "key26": "kjKpkBCZBP1yTpgWLX6QTzUDXqn7kE6trN2DypJqd7L67ggL1am7qAzSv2UHb1HEit6D97utzaJ7z524weUuGh5",
  "key27": "5Ht63NqDVZtrCA6o4CS36ZLXRRGQuU8NjyXtRDurWSAoMhm2GTfvwHDHEzXR31WtreMvHzYQhv8Mn2YQ4D1BVU6c",
  "key28": "636YqXtA5xb5devmox4akRbWTKtSZZTU4bQofwLW7vkHBb7oKBvNbQvaBgrUUZMKck7jYgukbAT1MuAXErx6dRir",
  "key29": "3NEKJcz3x9p9u34nGimK4kCp4Z3Kw3KuDVEzaNiqR7TPFatDfUmb5KjR5D9V47bupmkyVJjSuUDjPB29k6kEDeGG",
  "key30": "4QBXuDP9UnrKwd2nfsjaUHwxpLYnqk78zXDuJF8vJ9M8U2DEwJLRafzbtXJfHPkFqu1D5a5kgi8xPDuGF3oxNraR",
  "key31": "2B56b12wQqhwDrfCxKXVRuneA4WFhgMxXmKbFs4a46LGjTp3G1yWXjHhLTMZ6E5MJZP8P9qyy7R8djGJYRKrtzY2",
  "key32": "57gHJ9JFJ7bzgf25nEmusNrDTxkswRHpUs5ScMaPjqfUTyDGnYy3trq3Nkq6w5q4H3eNpszSGytUUgKLDSKKE9yP",
  "key33": "4ahRLquLdmzjBpS6pBCgewExu5dD93AyBAm4ht6tiPQzeV1dhpC7Bx14gWDreEnMKV7Sjh1CJCqGg1W8uhCBSxPA",
  "key34": "5chgj81ZFnyBpKRHQxeY4QafmYmNTKsz9tQzTrU5YFrho5qTsyj4zQhydvkbVm3mgo3JxsRPRKmFg2kM4BmubCE4",
  "key35": "ULF8cXUafWS2oQ6xTTsHsrEhHADog3gFLkRB1c368KkUDEYj4YwWCL6qT2U13UMxdAnSbJEjFaRC5oDLmMwnZxX"
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
