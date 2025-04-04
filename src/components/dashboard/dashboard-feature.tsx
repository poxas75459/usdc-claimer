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
    "5sdgJ6yWQmDrizkVxizEd7ceLhZnA8sxsNfPvG59E34ovnheswnYwkNKSfaHpE864LiAZSPDjzhZcqyYPfwKd4yL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZdfZy6rNn71LHZuFMjBkSwKvvcUBn8NhMuy3sTwUM9MTDhgFMp3C9ka3ZvQcHhNwuU8wpFckc2yrRL3yRapvjUM",
  "key1": "4Fdy1AwxyvY4afFd1bQ7kqZNvx1uAJvzwSxPUZ1orkyS2SpGTab1mvru3NiJkwSDCUrYGfMeP4KcY8XBD9txPkDU",
  "key2": "4V7EBmadhipio4s6nESiMMRaQQ17JdCabX3SSrBNEkdkaXqM3s4sDUSiTZ4rYtPp7QwzJ72f42PDvWNqRB5Yu19H",
  "key3": "45AY5hRcHgUziPmUBF55w9wySQetauHcoJZ8RifMA4fBeAEG2FSg2a1NMiX3svT9YTZmG7r4rtf6xv8LNj39szKD",
  "key4": "3hh6tPkuiEAmtVumRtPD8FxtVfRfietbs9nfpNpU1dVrtmcponMLnu4dx2WxCnthXF5X7nLqDv4Zx4Z5uKBTMopJ",
  "key5": "43nuDTzv2w9MSrSYMZmDdHv5vP3Wkw5aQkSjfDLnPrNWMSHju4Cajb4KdCLaJTeGXuEKWMdTLenghLXHEe811apT",
  "key6": "kadcN3bwP6B66WTwbQuYgt3jqDDddKdP5qadUJ1JfY3STXLbtEvF1dN4UEfVs5XLXijsUudEKSf3QPVhiQfWD6m",
  "key7": "VtbAoYeexgsRnjok5oYDcmVs7bmS25TGR1TQR94ZoyXvU5wDS5T9yRStyyZCrEYFX7oLTrLjZzsRkkAZvBY3VYy",
  "key8": "4wuLA5f6VUuf3FerCxBvLtLx9xW82gjm2Ej3p6aLERbP12AKA44b555z3kSE8HnezwJre8kiwbX8DxM8Ajnzbaoa",
  "key9": "o9EHunnJYk4x1PXyC8fhk7ErnBxnnxXn3CQgw9h2wJSKy6Rypv5L3v9D3kbuNVy9fuYEemoXJMofvnnfadPC5BS",
  "key10": "2DPWqUqdQQYGJXHqBDyGXd93ofu2LmGggjj5KNRtMaccMuoieYBQaZsQo5gAv5ffifsRjSx1mHLMTSsZHMTZbkh9",
  "key11": "615Vo6GQ822Foav8VZB6ngQvCTj7oihRTvwV4XM1j5n2MY8xFGenP9tXDfUTfSkE65ZUnRUhrwTorBKxQ8cPZurz",
  "key12": "2ABLWqRYs36c8BEcxSkmA5XxGSoRMuKx77Deu42nJRxQfKu9JBcaNwvRBEXubh1pWTCyuEoF7Y1SEwokeUF6UbEn",
  "key13": "5mzWxCChvy6NL8u6p4vkkcwPt7hvjiLgnaUxmsmGdDoXYh8CjQ5GBv86P3QHTihzb7dwkA1cK47hHxgpg3u8yhFp",
  "key14": "2KEjdp814QR1nkX13dhWdJtRwirtpTLB1VndLkeCk8164PbopAYTFq4U4rA9X72QZr667J7VdK8EDoxEBntNGHsL",
  "key15": "4xkaisqrDL9Bf1E2stHFgM8tHCENd1WKwTRLZheabZsPF9Y2bpoGmxsHVwcfmdgx4MupjmB8Rh9bbtTMA1BZth1e",
  "key16": "3xMp7GSGi4FT9NQXejGHt9hRocDiZj9BByChr5zVCeMkEprc6JvQpXoKAdBhwGrrnvGz7hrR5LAwtf31PcgnzC2V",
  "key17": "5PNHhX1fR1fVmtiBcQYPn7xP9obqrgJuLSGqAJjcn5u4gdMuey9jWqvWVkHpbzCo7LspMDHPzW1s3fawKSbBAUas",
  "key18": "451Q2FWSBj6xnW9MZqidBVUQz6Uid8uvGRLNSwETHjM8jp1APnjMyAvf9aH57Y7Rh7iTWTgbqmTKFEMauT1yg5Hn",
  "key19": "5yqW3T8T132L6qxbFQVyBq8MJYTHXn7GhnR2a9SspyUbM6MeWEqSKorr4nVvCEQ7RdZLYYuSBDt145t8QPDLZC1t",
  "key20": "4VkeZGXN3t5rVVvynr17xNJiTckAHssV1EhdEY8bNKAuyWpAuU2YdwF2EnmbwDhpCDiTGANgAq8Y8snAXGEo2kRz",
  "key21": "5zDs4Qswerp9Ji6Z3NKNyvTBg3RrWB3V7pZw3WByqNJJGWwGWrFweEX88FiJhfWC4yGdKf6pPA3iBtgc51stMLFb",
  "key22": "3eTFXXcPtcdYaMVfXVK7zTFsZ2s75136dmRUggL9qaDibRioVnHdJpvDn3ygGJM1bDhfSXWfwkExvxJvDJJ6cUTH",
  "key23": "3uUeCR8CHngXiR71J1GNKneGm4kbkR3Vb6cBrdsheDcvUn89eBbWMSB9x2zGsHXh4S6Cb2WAARxRLVBuU2YT9Njz",
  "key24": "jnix9nXFb9S2vU1RbdDY37DM4mNMzf7iJkp1v9PzihQ65U4sdMrv289de6mQHYWACAZpv7TEAY3Ze6RU4udEsM6",
  "key25": "3bc36hLWJeYAEkg2USohVNuepLreAmMqDvbAW4EWLZQRw1CJUL6cwheUwoeBx1xtDkXuCFeAz5B9v1pdh28zS9Ua",
  "key26": "5FaA7xbiEJznD1Rvp7jGVNo2gzebp4qyJqXekiva8euLyzrS4wDjCHPKos8wvoS7aYfiN2cbqmRRNFK5fgynpuT2",
  "key27": "63hnJbJv7Z951MvpiDTikS6ATkFec7ZbvXvGBpCrCSxGeaQYkUqjvbxh8qEMg1Tb9Ta4Rba86nnXUBAeGp4wgtTF",
  "key28": "5xAjLGDuuDoxz958KeUXvPJG7QXMr5iEY8xS3PUFQWmwARTRpGCrMpsiDimMQur44PKTFXsLiEeUCKcKJtsKoEEx",
  "key29": "4sMBsezrTsr3rXzfMNMgmJxm1gGuN8RA3ZvYLHaCb1r6cX8pPt9gMhhNqxoRjWC3KsaC81zh5bqxX5CYQbP5jiD",
  "key30": "4ScfrMgwSZW7jxKPztMRSDunWPF5NZ5MhjN4PHsj5JTgw7Zw5vR99exEKbmERDgvi8KDGkMKmVGfes1K4XfmaiuW",
  "key31": "58L6CyoCLU5Ty86MnCSkXrV9YUfk8jmdau8M8vNjCh4WH6Z5fkSzsASWrKkH2ddPMbcQiocwv73nfhTvpixt7XjZ"
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
