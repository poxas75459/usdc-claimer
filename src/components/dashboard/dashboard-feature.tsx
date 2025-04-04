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
    "2DirF5CgrQFqk9srRPf23yg4vRJxSL9sB2BBq7mPq62a7EK2RRiV4QBabFWuSjXKxA6Kjz7rDaJqKsvXdDc5rPJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FivehynPgKnEXDYW59Rx3AAUXxRPMRDiiqw5HzdvaEPH2Sr8m65jaWUpA7RMXUdtUaK9b3iNs63tAkBCpCWvhob",
  "key1": "34mxuR6SXnzfs72TRNv611ksgqHyRtfknHEzJEgpvJKatN6FMovGMNJPnYxDCjyhcMAE1RKvPaHcqjW1ECsighW6",
  "key2": "3iqtQvhwBkWkCHCdN4gLkNWb2d7TJjN9wuo5ncB6pqWJDqp5cKpkVJBbxXCsvoR7FV3p5rSLD7sMtbdVaFWpqSsX",
  "key3": "2KmWF9vXmACvUDNvFybdTE66nJEBmSwB2oqmvozX9i9xpfCMRS7ZPtNCMS4rr1WbTHcG9ZjgZFGbi2L4vWnMnUNq",
  "key4": "2YLRhzEoHZDjhusFgwtx3zzGVdNzwvMQz3FtRFDQE2W8YJeZwY2LpUNAsPRUpnGZBUVwpyzwMgkYVTKKYg27awUP",
  "key5": "3c7domRJSwPFm8PBvTuk9S7ociAGxbX62FVFTFRgneKcMnnabH2Knc1F9XygmMjZUTRKQopbgkgySbhDS5NVABUs",
  "key6": "4SPAFgu1vom75KB6cfTgHz3VHMozH8R6SPjE9NQBDvsJmQFPUAaYdv2jiBvNmzXoP1LyBrNMYKDq5nKbJyYDwiuQ",
  "key7": "3vbbrSvDSMjicGtazA4GSFczFaqsbL8pAq6SRuvwGougdb4k5USY7hURRD3dcLwW7iQ7bWABYoifNW3xzUc3xqPD",
  "key8": "3VHeBNuV5SkSjNxAbGC51BL7F5pi6XLDhBju9qPk6bAteLD8wedVYN6Qb5LWSZXugeHms6qWpfjwRnNZ9nqWG5E1",
  "key9": "4k683xLPxw2pcNCu78HHtnF2Q82JUWwvNx9CKaqTMuBemvPYqsaPuBmBDF9aJS42z5wjR6vXFvyNqoszzQrZe72F",
  "key10": "gyyevzDMn33hxDb2GxnhXqcoiG4ZY9nwF34GvpqjGzK53Z2os4kfTyYjw9GNFqXKqMgejqnQ5kP6om2R5S1Sm38",
  "key11": "3VDpcqntEwVk2cUjh1jWrWFafARzMwfqwebadjFTwCb1DEwRzKg1Vk7AbuS9kBE1pQ85u4L4i6c9NsW89DKFPvns",
  "key12": "61tJPjvr3XsZHDRtEwQvUzmAtKLRyWQV2ejQjN12312zjmpGFc9HvFW4bCrDAHAhooSd35qCU1JJfKEtFJnCWw8n",
  "key13": "4qzv4GhrsgxSw8KjJRScJHF1WntsJLHzYJt7t9HHV4pvzYEokPKhhugnWXdnecKAmU9pVVkLmVMkZtgSkUYauJTB",
  "key14": "YUS9XQEcwzyEJKEscC2ttmWhvAsf81t4XhZAsWQbFfFHxcAWxRXHQzXw7Bo5KV2PUsPWVkjt2hm7vTwodGPtnUS",
  "key15": "2eTaByH656pn7hzzTU5qpu1Zc4Ms5J74M79jnmVfbvGNB3JrS9ACXE9h8HzZH5BPbJ59WKNdTvWJ5y5zXwNzSNFh",
  "key16": "2455X2kg3FkPgbfZ1smxXmeWMkbPEbwU4JhPfFWSQKLUMRdWk2CyT7UhaRrXa1JJP7gTTq66YC6dGAJqRVtU2RxQ",
  "key17": "gqv5necPLG8GVEpY3iPqBU5wFFRvU9YTZZvnh8XLywVuLZrNgv4ZAjzqRiHrSxG4hekaoVa2FLuenswt6kQGxzg",
  "key18": "63n3DjKFaPAu8bWoPkrdbJUbhFkprhqRppVyEaVFdrqoxjpQnBv4nqY6u79RWkpehW4xVWZtZ6fth5T2jjo34XPD",
  "key19": "HTtqaZqV5ZYhG5EGBRGVgYRzF9SGg2kcoyMQ1RNB9W13UXkgjLoEa2c5eAksseirT7Zkutb5GgpqeyMcRwyjqDh",
  "key20": "2mJJ7R4zhUuWv9gj3FYHUuNxQEKT8Gd1hD97dMJjYbfFavNF1SGFggtWzT7LSTvopZnu3NX2x34oE8q75nQeL9yk",
  "key21": "4KtmouNVic14DNweghYraPACp5qqUGkRP7EgiWTz5m5DNhnNi2GkkcHMiFfyt6wynnBAfsbwZpgWUGcHHLbqgo8z",
  "key22": "i8pZiXhWzih8avfhQ3aqjAW61GBuL65gGRXN6VXDVAhf7R8WbS5kVPxfFTV7bjbd3sYW6hpKUoe4b6JPFsLd2u3",
  "key23": "4xpn2YKErLZBuEqnwH1EB3MPMG6rb1HtcPF7irEhp1aEhrhkGJfRighj3M8ELK5pvKotrVX6cDEEGHzdnecq91aX",
  "key24": "5bSDAw6JcGa7onuAJukfjSFo6D4WAQ87wDCr8VNk95BkmRCD7UznbnMAe7P1xANu3zwjjFGJZrSrkEKHK88iAJQ1",
  "key25": "346uxngnkPpbwLdhNmpfBDK9yhKdiQzHdcyhkjB4455dBSg47HhnmchAYqQh3dRBu6iNSxGHzBgNCPqHXL4RGb7d",
  "key26": "3VMvud5sT91T13jZscSkYrn2wqfpaCp3XsygS4pZ9ei4E8hgP7dDGoibxxySPpYVXp2Eg5gRraNYLi3SBq1r9WhB",
  "key27": "5Aa4Au53gDUGraW8hNbGYfwGLwuV4UgU2Pn8BwkwT1tqchTzsR7FHWYo7b6pzhSWNJYDScV8A9rzw7u3GWLFd86K",
  "key28": "2omdXcjVxBQ736MoKpqUQ3Y15nkmUbv2dihvXvXUCA45Puny7sAiGxU88PW854rKBAAS9671f7dzmqBKo29U7AEr"
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
