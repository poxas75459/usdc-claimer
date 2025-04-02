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
    "4Kzi45AbGa1aPVdAsk7iEJWht71PxyhUux6mBqcXjexNn5RansgQCAGJWDu5i2Fd96egFVU43hL1YJaF9EdEP3CJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tvetck2o6bafyZg3w7tAf8NtYySouaBkvriNPpEEiWqaAXMBtc7NXcYa1gd3uGocH3GBunWGVm48TLsDJ7zFx9K",
  "key1": "mtPKawj1Rhgtu6J9eHJK44CkwiQbhexMxGHawW1Mm42ZZ13cvt3odTrtHcnyQ5CRS3HCGV8sutjpu7rZ7edC4Gc",
  "key2": "2CYJTkn7mrn4NErC7QKredSeotugo1B8KUQMhfn1vDouXskm6xNjUkk8yx2BEEkfKCkYrL8X4Siphg6UgpoX2Yw1",
  "key3": "2Zy1bA3jAUNwxAagdsUw2Xs8qzALo5FuRW3vpgKR5MMUFD3WQNgwxRComQwPMkR1ebCbCcL7XA5U7bzut7UgmBtb",
  "key4": "3p7QQwfg6kPbEACGKe3hvtTxc9XubCtxRCYKkFACnrgxMNAhkZU61AjnA8PoEBLVd8D4bQK7vjmpP4WofQywTooU",
  "key5": "5sen6Et3Mez1xRzauvJcq7neCuHxnPfgAD1HwudMr8MxLvdj6trHKrq3U16aEVLZhdhrQTtQV5aPC12SSqjUuQVG",
  "key6": "NH8FzhHbw8vceaU7XvxATyUDrzPDZEA1oL69zmjTCDiuU1fDuN7uVv9TtY8N7UJM4esVo8iLtL7VFCDHbRpJbb9",
  "key7": "4e5KxLqiGGi2aXUJnVirhBKaB29kcen3vSwgu7Pbj5UKLDwGfTi5QMJswFWnvxBFFCkNUnGnwB6fnkWUbMZZ2bTd",
  "key8": "3ZSsgEoGkTwzrPGZZreHJmEwURrNjaFK71ny5ipJ8p7ToFYjRcenhge7YL4dvJkzdqScA5EYmQQoiXZmZmYU8KVr",
  "key9": "4V5MZKDRmKurdBNK7NJ3Lu7KVqqLR56j8hsAeP3GAySmEko3nRPoXCLwfqw1VwoCFHFx3HaqaqZBd6rPK2xT8rrF",
  "key10": "3xTSVRjkpib4tPfAb7tRFcUvz4DcoNr76Fi79nXDNZvpKo3uyYjrf9t44tTRk67MqC5hgd7ff6aP1Rehs1SS8PfH",
  "key11": "64UPK8rVLSrUeoMTWJVuWBKevvk973WRGFyhe4A6DsMhQgq9fQ1MANTz6knpF4v29JYPgYvVr5rJTKbiMthRBL31",
  "key12": "395iM4X3VREgqBSmpxRp7THxyu5jLtHpEhrRFdnqqc8ABgfJ1qgnAzmBmg3hceoAKixQBhsEBUyUThUPnQqsBvk2",
  "key13": "2dVdVRwvNARXuXXcCgKbYcnjrZUQYG4fiqMt7CgLcEBym9HoyGU9QFNAhN9syEBUGG6XLqnxzkL4vmU8nNahgAFj",
  "key14": "25bm5TZVJKaMDvocAu4EoTmHQXCtZpc2VGQXyJevYoWooyTVGhHEF5xifgEZCsAhrt9YahS8j2eoS8yfcn1eBdHu",
  "key15": "4t7xTcU6so3HzH4BPSbeVMnZgqfvTurQYK8kFhdihJcQMNRMoV1wfESJedbnKhJsEfXk8iTs3uJmWYeKybQhqCzP",
  "key16": "3BvbQfJLXchC9DcU5z42XKpTX39G7GKL6FBxEcroEVnjXXDd2TfiTpwraBbyQjoRymdoDutnFt4yRMCAoDzgd3f6",
  "key17": "dGq5qbEHRgLKr8fqgu9WPdEhVbgNTuRYs8f4QXZrzF8L6GykAFyP3HTvFT8Ac79oBoER1Q8widwYqBfqAPLPa2z",
  "key18": "Dpjsm7YbuM1jRUcAr4UdZRTPFmqJ3xmrqCr5qeY1mGDFKyEfQkdtMZW3PputmoVVLGQqJbeU2cmB39DQmXUSXc7",
  "key19": "4ZHWTHd2j3vfVxZU2n7Kr3kq2gjfLyTgTjDi7iMZYaCTwiCUF5cx7ZTo82GLfCgs7BeWx8bboZpuDeBCvMCDa8EW",
  "key20": "5JhwNzqkTbhD4QR9cR4LeZKsGUwfN2mZH5vfQLeZtqYmGVSA2eWj12mHRmziNpTkZK3ZsvhAe1HEiUbiBER1HfWV",
  "key21": "bEzz2oNkHcQH3225WK4GR4eU3Z2ZbYssX1EBVLDJRoufTg6yfikar8u4GZ9wWTyuFdzSrtfuAPCJTP2YYZpqvr4",
  "key22": "42591NpEuCU7QYTNQ5yScZjk4rRYgoBfQ3uDtvp9xmasY9J4ZMWNY8H2ojRZrvu5XbgJfANE8N36JxPoX9kPQFUg",
  "key23": "m5TkLxApazmCc86ZB5sYTRbxoCvCgeAwQmQncDWidjtkWiPchULuYQtFD3CWut69kdHHhi7QZWZR6DaZ6wCizwA",
  "key24": "4b2PxFtQrF36ZFvGDVpESQDNDmrxLnzmrkLP1Hu9jdFFNzqjwRCuUHvC78pYgx4m22aKpNnj8CyPhHV6fUD5kyRp",
  "key25": "5zh6J6dyrscpqS2J7cEUvBxMgTZNgXeXGsQfZEEpjKNUbjUUKTJDmK5zmhdS1W7PBtWmssRdZY9YtT8ffABdv6aA",
  "key26": "2XQMKEuXJk5RMCkuhVjcHqU4rE8DWuP64mCVPjndxv8Y24vLry1ytJY3a2fLgCRWhKjg7oWxzxkp9uupayHgoKfo",
  "key27": "zFRBELuLFB6LB6A1ZAx3sFHG5G8E5xoaQkGb6i7Td85xeoCZZBgLkxxm2us5D8Zyhbg6dJcbYHxUDzmTiEnzcZf"
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
