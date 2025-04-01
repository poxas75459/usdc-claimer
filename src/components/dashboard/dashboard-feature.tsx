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
    "2C35CANMqgUge37GUJVLbLqKzN9LsoLbBMSGi7hhGeJRkpJGatRz29iVTrRU4GwcaRdWShJnvjoZiG9L3recaSeL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n2KchUDya4XB6zK7LomEewX72mCdRTvqxGR96mXuVsnZVxYEiCJnZmQDMfe9tygFx1B9ezDb4tSJ4vBCJkreQk9",
  "key1": "2XUQSks1RCSXek9CJZsk9giKYo5HwuMpApP95BwyqAFZdn2pZJpJ62nLpcPia5mVjDMxTejDMDR9WLKbscdG6Ca7",
  "key2": "3VD2o91TNrhML8poGywTXWfQHzsVtE2J7mZB4hHnA39pgEeMLpH9XUjv3DJiJp2E5ZUTqeNu91MuewDbMvuLVRXD",
  "key3": "SKSXXsMvvKAn5aTfGxMkJKt9GJVfnXRX12EcVKv1vvybpeMJwuPvnsEN74UjZKu9Y2DiRUezopGZe4VhtXxm3jE",
  "key4": "4c1Cdf85qqgHf6QHnhPEiFt2tGsmuU1vmasos7KTDYEWUNH8on7MGSBmzw5CmAvQGPcF1qAAEFox1YfdcsCnG2Vf",
  "key5": "3dtez6m4W1M7bWMUNZ9pdzBEZoyRSb8mGdt95GjGE3mVzsomjd8tempJbQyLHyvEjaDZ3ttjczDvY4epcWLtWZUM",
  "key6": "2FwLV96mXcfpKbaWUvbopyvjab8K4vjPXBxLZvsUqEKkGQFoVtSGUQFhokvcZ36udJVRjdg1WACNE4YNvQvJZ2QP",
  "key7": "24PUuebwa7P5vUMZKn3XoxYHvAeJXWoBvBRPPV9YmVyVQdN5UWxPbik1Wn4BPcHhs8T9AWna4BEzwnbmYkJm3GbY",
  "key8": "EixenYYnjbTnEu4WTrVRdmNp63rZRmw12fvXyjCtxVLYohLEQrES9yVXaG86Gs3UkF1xrh6XPL3LZPnSotWuJgo",
  "key9": "66BmEpAgohaZQ2Kj2WdeBxc1sPyWivLwtxygm7EUkxpUcGTmmc2bCr6QEfdtMNLEXs5KNWGZNwgpFEii9Qb4NLw4",
  "key10": "2kL7VSy6tPSmYSjVb9d9a5FmSDehL6Z33fLmRAiV2RvTjc7kFUCdyjfgMAH8WqqnS9XJpuJ71FwMc6SEhhjuQZrA",
  "key11": "41nJuFcM16SpA6opozDsBr1bEZnrvGD2ek5r4yHsxrt6feGh5WX7jwbPmAYZfBRPd1Bpo7QNV8QHZ5SaKdTV79ms",
  "key12": "3T8kpftDVmwtqpFTLysLrP9WG75w5Xx23mNJFzecatoco2P3pQ2QbHQmnx6T9dQs2qXmrE7YMiBvog4CQ4XGfbjy",
  "key13": "5b5djYa9mcKbpb2VehoLnFreKhziDc1qoa7Ryf6TaEY1NSwL7JMNwNvE8efnCwfGFjynio8kUSwdLwGaQzAfgGWo",
  "key14": "5GDzej2XQzexMm1DHyejPmMCQHJvrGoY4HucCnpuSkAJqVuRNhavSEjvwMwUyPQCTP6qoJwGdCpSYpYqWyuV1dMe",
  "key15": "3akU4uf2LhVJ65oWgB6cV245EuJDS1MXTsmY9XeDEHnW8eUQxDxFtUkMedwD6TxCvvihp3wGSURCGV7MnsMhP7d6",
  "key16": "3eRS7trKYLsrGzXB6JehiaT4AyZAX4WuA8tPkfXuTw9ZCS3XJCbi3UGFxcT8pG9D8KquhTS4wjfTSbUjEkkWhGVs",
  "key17": "4Swn7uSfg1m2g4EZvrgRdVrgmSUjFpzfJMYKPWszZvtL99fhEagAWGJQHVygt39YmMSUYCcvhCyuDykFcEGjVFE1",
  "key18": "M5ezvUF2wYhZwGudGjaQVgMoXUrz6weHcwiDoDcgcxuZS7nLGWBAjGTozsHEtATWghYPEa2Q1TRWYYxjTwN2kgo",
  "key19": "3fPU3tgSadW8QszhinEipbpqcNnftAQCmyYweoLEvn2LaDrbt5xSArSkzcnchh9H381LzAazNSVh5zXygS5N88r7",
  "key20": "5B4ZTj4GGc2qqg3Dg4f8NcAhDP9xh4kfJD8fbwDJjEwgcvRjfaUZnfHnKZBkEDxxpzyj3d8pAvMM7u2inMtAbFRq",
  "key21": "eBLE2ads69wYHms5vJuHVYWmNXabntSiS8bbs9MR9THSk6iiRh4bFvR66LWvp6h4uEDXcLctiyjgPjYfr4aQqve",
  "key22": "4vcaqN3MmEMkqYK8FUeiAaDJyi2Xnxpsxgc23Vy67QKbUxC8iNPjoKzfwdcXpKK8a19kiX1stxw241YjYATXRZ4Y",
  "key23": "njZEDd29PpHbpfz2ML326hZfHNinwLNmBtdoqvgDJwG8jxM8tTesJdkXPupEYVh2LeAx2moLT9xToE8qTEoSWVr",
  "key24": "KhW9hdj84eZZ1v3TPTbTMrbxiJEU2aRedjBApc6GgkMm3m5Hp6uLYswQixE264YU2ucT8GBa1iaDTUjAkw1QTcB",
  "key25": "2HYomCbyigYYQmRNCfEM4YwbTifVHxkvpd5atYq7YYUA8HqrqQfUzQktUWtW1rGuykj92kxXwpRAhXHJ15dEtudS",
  "key26": "2zWRXx4w7LEAd8No7dAy7UfEM3bm9uTw8nwaMb3GSGbJor57NogvrdmTCeZzGuSpZ8gLw3xrXbJ4tvpkw6qWJF2z",
  "key27": "2hgm5cA8tb3aaSxL9U3a6kBY2UdGE6kT8uvqD6gedJzzJBBjirvs4n14yhYeQADmwBPviznYpUfDUUeh8i67qi4h",
  "key28": "4k38j5owhKRUoTCxnQcAhV9tDVbkLWHFvyTrD6GMdq5DFwGqdvWc4LWoGmWCWhHNcnhu6yAT3LG7jBUE78seBCWE",
  "key29": "4TkAsektK3dwJntpdfbDAahzXXZYumBvbbGyudm3GZN8Q581TLW5VRTbgtn57BRLqjispm6ZqsSerERiUoc7LnNg",
  "key30": "7kBLp63wDkgdaeXWfVhHgngupgqkrX41YCr5aUx54qQEf1ZrqAJnuGugg8gEXjemKNWekdpTnmFgm7925t7Mw6t"
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
