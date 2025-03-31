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
    "2jU7Fb7TpmuUBQcbADXLMXWaiSkfcbJrQJJBZob9jkUdgadeuGeT14ZWoEGSiQCnzEZnHq9xhFnmovcC5giHnumP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UbZzYRWE9aWu3Fuiz8FPtywcPU8d8uHMD1mAwVoffH6vafWnDqLsrdTYA1N94bk8wDLBmY5tEGDprcSkAFs1o6p",
  "key1": "2VytM3M5PD2YygXD8vTJTCBu6pd9YFMUybtbd2yMVput6mkRm7GJEW3mSCwKS6HwxW1rYH1VmfLRiNLvwCytuJhm",
  "key2": "3D5wtxL3oWDngWAt6HbrcjBiL4QfpC9jcrb6Kzc2g2zi6xwSv4kisUQry1km4mNdj7dgLYTLJahEGtcLTtbr4WgU",
  "key3": "5vy2EYFkNkJg8oBr14ZKUYPafBHM1hhrZUTMBzhhNt2ShUh3mm914rcZUzXHcHL8D4PvCgDTjs4rMf9HLDdHShTW",
  "key4": "44VunFj8mifMrYxU5JmWxWK3KpqKUM6Wo4UCL1aVAuRcMHYxVrnEmVyp5PrpWmbnMwVjgqpdc17sJC2bsYXjbXQy",
  "key5": "3gFuQQgPCqRYJ3cAE6ezw1ELsS3WFoi81B8rKgpAeEFpzT33PhT4PnCpb2NNhx2NnYe5C6WhJvWhRsg4Qyt9GBAZ",
  "key6": "4eoN6goAN398rHqFGUGXaWTp1R4EMYQnCrzgwJxi3PYohiKSiw5VBgdukccvixDKERy9ADHi7QL2JDwoh5somMkt",
  "key7": "5PbR9qevzUR8ReSkTePReVM34xs5cbhX1UU7ZvtW58cTVAkUx5M2Nw1w4qu9Ph3QHWRGsVmaMY33P1dvKQxELnfN",
  "key8": "52FYTn1vGwEp8JfLTjbjaoJv3GC96wdXzYAhCDTaaHiXs7KkFbxomPfDQQF89A1jvbGKzub3DiNViXqphknLBPSj",
  "key9": "2SZZjRb5otvoFKwd2yBBEdBVF9wE6HWj96bzcnGAhD39zWbm31Z39xSWsD1J1eDFw5aQgmKGTfFKaEomqiJLWxnh",
  "key10": "3Nn1jerLV9kM13rXuSzY7a6QKrx6TBG3qp9AA3fbzGgjFcWfskydRMrJkD6jWLQGDe7HGP6FctqZ53LQsVsAwgKq",
  "key11": "4VnfUWRR3jX5kpwkceAa4HZ4pRp3Nwp8ze3qw4SGuXaNnrcREuKf2K3w5K3tDsaMb2PmyaGfR6EWKM8EqhNCo8yS",
  "key12": "5qmWiwU5WJen2FpxBM12SpDh8RpMkaju75CDEbprQfuoLsTq1TcJBYLMWBUuFYaFKxuNSDJJJauK5mHKrWBLJdy4",
  "key13": "2xtnmfqkJWFEbpnhcBWmRHUw8pAXW75tdwfK1Z6KAgXK3YMAPPEuTiP5NEGJcE7iPNTzQFsJaXUZtBfobf7XitmU",
  "key14": "4SC6EJwJy4fHAGqvDp447m4gJxEUVriPazHBozZsSjTDxyzzoHc974LMBBMwKtMGZ2FGBH11tf4rFr78kXYcM7ny",
  "key15": "4TzNT8ZBoaZ3UY53eJvKS9oWSBD4mAjRVDBYvRzo3Ji7dh6Ex4VnXieFFjKNDYAJBiJWyzsgU6cC3LiQAH2Hs7bC",
  "key16": "GcJPyq59RG419AuhFUe6bPZyUBDB64rpK23F3dvsvkh6wFsPVQLexHjXNi7sunWNW7xcY6Ckawu5aR5jTjmmRpY",
  "key17": "3w5H4mxW9WSQvauoUTDohsUgBjm5vugBogTJdqBqS6hdorJqkqG82XV2Tan2pQRsDHx4VJKZqct7gGnSTAoNzyni",
  "key18": "iLFJjqU9X7ymqFbfSwa4pTbPQSnSy2pMMWH7DmLmHuYXQ83XTgGFUhNfkZLtgmbvhENVE1z46uycDbA6h1uRyaa",
  "key19": "42iAzqPKi6FrYrANtYjmeJchTNSk2e6ZmgsD3RyXxW9N53TXMgeW9TLcXLLdegg9c82cgurfjiyDkhaXVtUCXHWc",
  "key20": "4iN8LGvcFVm1GRBG66KyreWYycWiWe4NWJuU3xTLwR8MKcAhwpca76XVszuEtbXTdVZZ7Sz2sXCqdjEZfmHJdrPG",
  "key21": "4TnJirHc2qVJU9owMG5JGuBvLiXfdRBLD4ptqaj1zwppm9tgm8ADuGyzU7yK86qhhmukuCpdTCgYCWkF39ssRPQg",
  "key22": "2MRS8LVzMQjqJNYGtbuTZEYJCWAk2yGBzdPd1PkA78utKkGxEGWr5WYPGwdcWWD8cgqkBCPihL9jfYJ3NhNuAnAE",
  "key23": "5wEbTBqZgtoza1nWCnoEJY1cBhWLHSG8Dm1Y99auNZuSncjMkpr7P3DuYZXfuUv7jNzkzAc8DwFUAyUwdn2pnxJt",
  "key24": "2GsTGy3dactPVhiDTBG8GitfT2RUmFus9La9QcxZBLoAmwVi8yUEDZnM3kjmjv8ZJobkgy5vrhu5bcFCSmCjeT8p",
  "key25": "42u24cW2kFsynrd2RdoahmKYMfq1YEMdhXQcDwex9NV2JoWe3FVosyaj4W6amJwj7rLqUsXiFtrQejJbnAqZGVio",
  "key26": "3stDrqUfoQwGXhH9NGFobs55hkq5ihEmumwzZPEg2apGdpRMTpJ8kihhQJgZEx49pZgXiLeu77kcAQiLL9TDoWzF",
  "key27": "5EP8hqAjdRQLSy5rhQtM148SchfcBsPU3gtVNGuAE3GPPu8pNMbmWn7wVcUv5FJV52HPn8dSLNEEi9CUuMjEHkn9",
  "key28": "5gGZwK6eJuFcdDRhdeBcbLqNDs9cUxHUXBottYQRurKaSnfezhsgHeCkZvZ58KrN8FJUjeZSo2Axo7UcA5LEVfxr",
  "key29": "4X9V3McbiCd6ChrDMLnjaEwSUmaFdC1vHST6Coznhsq8nHUEV19qsyurQvjcS7PrGdGJjjVcC77jpn3RScSuc7i8",
  "key30": "3gdrAhQ1QrcbPAMTaZhsCUt6MJJMwH7uox7ByTmSQzZDndfi9JvMhRt7PMsNEda2173kkfi5shvhVqnaScnqbkXx",
  "key31": "2E7WbfUBkPLYbGHA7f7ffunh3vKGUaTth3LCskzMy7LJR2tZfkuEX7zTGjW4ByqQwzbspd5B8p33MpfYvZzsWUiQ",
  "key32": "2n2DSDrV7wjvULXrDiZRH3ZKnUed7vRfE7kh9bPDDULk6MXRZdcx2c4t5baE4UtseAiPQfvw9VXQsXxfrMmazjx3",
  "key33": "5MQVz7S6LXS7YZvBrkUue2bj6HWJRThRxZ1BE9TKmfT6vQ3PCUYTgr3UoNEuDSneRUAjX4fA6qoxpGCEbVjnxTFp",
  "key34": "3ck8ipLqiVQHYp6w5ECYYQnw2xtT4USBsB7Zqq3hk7KQBQovATi7ciTcs8wixFQEXhBm4EuCMxhjinMHFQ3BBFeH",
  "key35": "3zkcCGUfeJFCX3ipCKenayeeqMQC5icm4c7sQjS7RtgPmRNTVm7Q8fYM2QMxLTf4WpdtrwjkuXk2PZPQb8ANatEJ",
  "key36": "4MG3nYUD9LuTWG9f4zrG1us6DPv45oBBbsuScaHKZJjYu3ijwNjxEa7n22CGgvjN2VYXuewxj58KL3bWrgFuUs6V",
  "key37": "qJyVLXfSuAKPw3BSzR69jfUZvL4qcWMMzSNq5JmAuSjbbQU2YCsQdWMx9kw3Bm8gkuBvdPfuMgxf3YT6fup2sqe",
  "key38": "4e3nXiaPJS2Ud7oCVGwpM16494J7keBHfoFnA6uouchb4Mzb536bVN4jH78ZG8W1cjCUH2frDHsEJ4EMjqarV2td"
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
