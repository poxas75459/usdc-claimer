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
    "4sZgPbiQs16G6WqDTzU5KRxuu8pAh73qYft9FPbujk12vXVCk8c7ZyDRqTtuFMe8GhuJd4pvUKmhJqr6Z5REff3L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49wGAhmhWJFPZBJ1MdvAJRTLojEcN19QLndsjURZXFsukFzdAiypLCvBVZUEtVgfW9Rh1f86FSRo8fZvYybrbXLa",
  "key1": "3FKg9miH45cuCP44i5gvF3NfWgAxtRN1D5BgReoZdoL5d4PGgPAQHGsu8QQm4BYq7pimRaa1dNNWfrpHsQ6N62Ym",
  "key2": "3BByBTA7FUmvBytNqkvoDtLmZyTNbjLzEdAkFBxBJiNBb2AN8ZkuiXR4W32nG83BCg5LT32QXiQVaHgL8oqB6kgE",
  "key3": "xnABg2V4aLycemXkDSYCBrwCt4MtKENxUKC7W1CHHgoE4DpMHc9J7qCTn4Zt5oyH9xyRmEHHch9X9msUPvn5T1r",
  "key4": "5aDSrxXkYSm3fp2aFGcj4k7vt9TAU4Y4PeECZgUP5LLP4WjFVkW7XArqP7hD7e8xMp37oscVygekKRkBxkokij7U",
  "key5": "dtbNjC1yiJdeKuMt98z3cT3adPSme8DWFzFNmMjtbYgepns2a8Csjw5gxKXPkwBvWHzTRMhurDC5VYCWb3Aczh4",
  "key6": "5sX8ZhpHc6ZpcmYAQWscUuydZgg8joBDNmPs8ZXpok6gA2MfxUhSK2WAwWnDNAZJu3XxkoGtsDhckUSiU6Wr4wvF",
  "key7": "2WAxvfngxWZXKXCSDq29h2ZGynFxQywsVPRyLiQ2CgkyscVJNgYSQqG68q6SZheN6zZrPnELHyuWTwubEvo2ETFg",
  "key8": "5g1ehpjmhJsV7Kyfb3SCAGFzMaA5SLseiQpiqaLztzUTXCv9B2uLkyuK1R2s7dhqfCmHz54zpZuURUWLBjRumFSF",
  "key9": "4q2YXDKB4WfivHp5qJ34eiPZehiPPvhpjhUndopy2bM3hgcieiik9VuqdNkjqenEPb4xFewwnFodCSuxU44CDsnQ",
  "key10": "2WnLxtQ2sEMmmzMjdEmCh72JTFnGiU4EQDwHxDkitnaHjwi12yDFAJsQxAXj4WfJf4e7dwFWFB5f53rxFc499JNj",
  "key11": "48664h8Nk5hZmb6ZMoRaPNXxtMq7WF9E9S7H13B6DCicsaXkZazNeLiu4SNMyKASj8WFNyC5UgUHxovNNsGiMdvQ",
  "key12": "5caSztSsqeCEaWJN1Jz9BGePbJZGr8Dwamij4mYHHGTFWaV4oGJvoNC5uQtfYhJETu7FtQM2QKPFXj5M1AwShPJe",
  "key13": "xjCJvR5nE8AP5xiKK4pUygo9hEBXmHkG8ZejXFU1LM79D5Pip86BS7F8AV89Zz6wVnCizYAbsy8FmDvtmpZs9u6",
  "key14": "5iCCXrrhAsRh5kBKUPG9WMQWmaeUPDTzKq5Aef1k7hR4rbpQkjSusWCmEVYrARH8iweJtXx4L3f6JWznhyGKXAuq",
  "key15": "2fr6uUTyaRxZCWihguYmJPEHnsaDcoYeV6XkLYgEitPRuRbpqobTztvvsujz9V5RixWvDKLzsnYTn5ZQbaRFEM55",
  "key16": "64w7Ts6PryNgdmsuuD1nAFonyTwuxR9opuk6De9zE2j86UFU9TUjTKjUBPCbpBxQuo4iqeJ2ZHG1Ci5T3NT3DQWQ",
  "key17": "5YUfE4huSXingezhvmQW6LyDHTFGRwEGowZNMd5DYXmxCtkbcNi8ZWeMkcCptV1P5KabdrxF9nvBbou9gy4m2xvG",
  "key18": "34cT53wHQDYzefv1YZLZyBBr7QyaiSYWqCAwV13yCfL5kXV9pXxro1tSzZAWq16Af1cihYEX3SWfDfRwCDgDjmBc",
  "key19": "4MubrH7xepWZGgdrk5QKBpLsDXae5XevkFeSEjVm1A4jygwGq8zc1JAtUKBkEze6Z8o3KhPjP7u4SAfMf5nz1QMC",
  "key20": "56U7g761qhzSjThuEgNxqLzdydqZgemWWMNM4EyzzSW8NXz6Ri6CLRbVS6iHndNei3nEXAgxtdYHWfce5SQtM9AL",
  "key21": "3VwpqvozRaaW4UTqtZFNH4rRTgGqudz6ziBGPHbe5jqRjPZD6hqXTgXQcybXhsPxCWMLmjcmLrKWgDsmfcpuoEXn",
  "key22": "dt23MgaNFb1MMeTwkGKMwe2NxxiHFcr11EE5rbLs7Rm5wsbN4qYLMA7Bo6TuM2BVSkLQduxvnXW3seYLwtuRAJ2",
  "key23": "5mLEJwe1eo29oFvXBbQu8iiKYGREffLwBmnhqbxxRJnqSTUJYsyG8Hdo9mquXQPmW1eDrP3CJV1P8sPwpgjFsS1C",
  "key24": "26Zn9ViMsr3KsZg5ffEXPE3Qb9NdTNzsB2YBhj9vpk14RR8xHDqNFoBJJB1wM8PboYioKvqHWVPV3drFQ4tEnDRU",
  "key25": "4UX5NEW38QFydRQiKn73warZzfcL7dKVePbD8uRd2Bo2uioXwoZvXESGsaxPkT7YM4bHPJqXCizn6qYMPfmEo75x",
  "key26": "3rZ2vn8F36rrFAgjpL9ADnDk1WeDmyQmKbhimHLJJgL8b52S5D65BCDanjxYiHEH6yJX8BsgNCzr5PN7xvKTBmD2"
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
