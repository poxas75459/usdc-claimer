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
    "4iBAmsa3eYuvaffLGc6zCqBqcfF6VriNij9BdPm4DwZTbaA6t36PA4opXYdRvPStVTznfZjq4LN1vx21jyjpC28X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Uo6w13rNt5a6MmBbTEVTVBtyjSenZFe8Vzsf6Zkb7DURc3v4ASihhfxwdwEg9QuguydD8xLHgtifqmFaBhRj92D",
  "key1": "FuUnbMkyG6uzVXsYZPZas9AX1RcXjeSyddr5ZTNT52DdZCfR1mcGQ3d1ujPTseBwbd3ykHNK75zdFCFhvToDs1g",
  "key2": "2cQZVuSw71PnQMDdXt5cNSGUrQPVKKwE65Hc2wwJJ7JNXpBXWMKUYh8dn9WEyNzRUuGJSJBUfguxfw3urmB6uQhk",
  "key3": "hjEB1VEWme6FNBGYq9UuHeDezMCF78rTcGvuPVZoBwTtJ2JrwnQWvLwh6n769ZCfnz2HH7pDhP1A9dPuCNR87rv",
  "key4": "3ksXyeD4MPtzAv5hWS2bS4JuzAgVxxz6AWRZH7Ar41aqkptzYeXynneihFhQQsExe62djK8omDu8cTdw5EZLdW8C",
  "key5": "2Xuu13pGUAYQCi7ZEyTNAKKW9KoUBHpzPjP3KiVcsyi4N8RqpZzRrXP4QYkqFDwX9yYVAtnUycUvUtPXB6HviTq",
  "key6": "vFb4S1pFpDg2Ju6ixU26XovkkQp56dtjCHA5Zm7GybJjpc1KLUpZCvWxnV1GDrsAFzE4e7RpUYSvdjihcLG4kHs",
  "key7": "4vDF45w5ec6g3VXBvsRfrRxDPE3y7TFpCpjgCxz7Yw6QL7KcNtQTTfxX9C496i2QFbUUWzQFBreEDNKtRJgbPukD",
  "key8": "5hjCWYeCVRqsnjHJ2Y461wmbqwJnFqYtp97SLZZrukjVKfrhCRrgkC7y1JJmNHkGY8GjSKP4cYdpoSPHWRx4x75S",
  "key9": "56RZLoyjnQ9kiASUEMxzrneXufrceRAD1FRDYd5k3oXZco3omXsLhWGfJ2VM9qV86jwvVdKCv7Ka46j52FdaJLLW",
  "key10": "2Qj2Kjr2MotymWmRUqLftxESWsN33GZFjFTEcGTyUcwNDAB2gQ512e3cLMZVLQKNqWDTb2JKRjeLeaaZxWxLxUyn",
  "key11": "49Lanf3EMWDqzp1Piz1AaSa4gSHPutvDfMiMKHPPkb5TcynsvsQvro7ntUti1e6uJerEtF9TTLLmHKZ2D6jwRVpQ",
  "key12": "nmEypXZLVHLprVfEnt2QiDo6KkfQK2NExLnxQMFQ67QMGZ29F3igM3amFACVf9R9PiZR2ZAtmuYAeXKd1QEka9C",
  "key13": "nQYZnndUP6PhxpLo3tBES2MP97W2z5ZesaFFJZwGmESUkGyc9JzJc1y8xcayncn9eP8hj9DzHSLaD9WhyregyBF",
  "key14": "34X62QFmAVKuF4mB26Az7nosTQWgwUqXwBwpPyLDd63UyHCVSRjNHMSH46TLnUUUq9aEb6yJz73d8xHy7WJ7y5js",
  "key15": "4CFhQKaCKexWHxLBR2CWc2aE62z9cnA9PWmQKHo1MUSuSmRNnoWbkvTMrFeqDMLWYoNDfi3hQ7kFrjoenQHymPz7",
  "key16": "NxWxun4RrWMQoyUe8rxfVdRDjG87xdTWMEY217c1JRjto55Ph7RAvtJJtuVFGMjqKTN8ujT8BLAgcArCAaXu7cY",
  "key17": "4evXaUU4BEA8kRgpYufgHcymZPrxhTDQ2LLXhGBQm9mYDj7jjDo8X8XWKwCtfnxHmsfNRcbWtH1Bznxja9o7MHh5",
  "key18": "4CcSoEUZmM3UCbua7UvRgNWZWnCRtFhnJZirzXeEyJsoHvYf1uxEmdEs867P627kcqfaVwHnokNymrhNcnzgsM7n",
  "key19": "3yPYpuhxQPhRi9wAjmypqrTfZmbvGzgU8iteis75y2gin14pbkLqiqYjeEbHsXT16fz9Gz2puHNqJU8bn28Xs3fb",
  "key20": "5aWusb3m8Q7QQQMxvj34QZ6cVbwx4buV9AY8moFMUqMSCyjZRYrQd5gPhfa25RZdeGNbkSGMDqszKmzfUwpkRRkZ",
  "key21": "5rCgRpQTZtWQothFkBBKyCU1zTQ4GzzatDcWwjKyKYYuZ4UKNnfSxxZRKSkV2eiYk9g8EAdGB8D3XLy5wQXqDiC1",
  "key22": "ZTGmPwU83MKtxkwbJfk3mMENDPFNcy6UNk4vQXSzFSFHt8ETz9taRMFGx7KorY4PGqok1mZKqtBAukCwM5T9KiS",
  "key23": "2TiJJEJ3ofhEQptLT5fVj5UJDiKR1vUKiR7YMfphPpKA14qJU5Go7msxCfDqNy6FNBMEKUdPx5m1MkoaizP2w7sL",
  "key24": "46P2hbABvaT8eKbJRGHR9Dqo851VLkrhWPizVzjGDCvQTDmE8ZcBSHJ6WrWirSrw5cKTGNPoce2m3W37ppMzHDfa",
  "key25": "3xzPmzNhn2EEeF9jsVWt4LyuwFdLXQFKF1Z5QswvoShxbAVoL6eCJdrZdDZ8HVPRytCcr5pcddj3N5MQDsGnN2q",
  "key26": "3e3Sp6rgULdr9YPm3Q8zdPa7DbekxJSpfyAFkeN2nBCABNJGZcyowaxfPXHvdBjpXpSQfDubDajNza48JFXDJYgv"
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
