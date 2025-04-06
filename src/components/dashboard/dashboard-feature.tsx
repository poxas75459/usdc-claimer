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
    "5Pgk81JdxHkHoWZv5v3fJoSxdT973cQhz3SB8Angwjw9q6XPPXVdkFJHmR13cLhGfjCxCvaeHxwvjkTY9Mj4AuP8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aNQxQebwKfvmNs2P3aXwvpMnS9ZC1M2VNKXbekYVsgzD6UtkFEufRoTFwgkTxtwNSfjsRzsqjszCvWCq5pLEc89",
  "key1": "4EqFBWcthFpVEQ2MTBaTJ3QKernPep6dgEPYSeqs73DrVY2a5UEtmfRhE8uHxYt97MwRTWYjwJq7onV2bv9TSAWp",
  "key2": "62ncf28RBANvXeW6H2zLhHB8FHB8KGc5GryMjpsVmWueiL1F9c9fV7Cru48SxM36k6CA9p63hqETn21j5djUoW9p",
  "key3": "628uHvWBfwzss5u9eGqigoec1gxGn9TzAJxWA4i67wgEPFyc1Lqok5jU9YR6X9uoD4rAo54ANVXeHwv1JvP3eHzo",
  "key4": "655zsj75vq7wNhxGaqYCP3GLidVbJG4M5skmPMw4dNbucnpvxfjbMpuSXZTkEG9y988mMEL7XWBeDumndzu6fLPw",
  "key5": "4pfnMivXtejqM47UcPSTV84XgRTyB5r2VCAdJ3GuusLbsD1mMbwRbfT4Vm6xWynibWsFxhbMYE4dmEwUoR6zEKev",
  "key6": "5CbUpzHdftayRvs5pBQiMKHdtdSHs9XA1hqRiRYbeWbv4K7XNCr6s4ysUTqNqMbTxUVfTmJjKrVVzeeqX7gQM89y",
  "key7": "5Aepxvo23TMXyhigQn5eCR9tGRoe68e4Rz12cY2Vz3VhquA8P4GVSfszYotUXrrQTW4QWMsHKE6dvDvfrJmN6d6t",
  "key8": "2Uu1u4ebC5zhAaPSksLGhMc3Yw7PyqXDX4c7A9EhD9m5dgwbQh1VX4AmRWikwouvae5kRaDQQVBTdv6DYbnkh7Hq",
  "key9": "3uRivG7SA8UBNuUBX2xC72CE8rA4LA841NCHhdgbtWEYp3geUf5dv5Bjkfo7Meo377NqjY8h7Si955gpAAqpXofS",
  "key10": "28A57PSutcLdyVDdFGeUCFKCDPwDFxWzvajCc5Fs6FY3S6egvKKvHnkzKbYGJjZn8W9HeiyvuRUXMSZHJLmM5WJ8",
  "key11": "2q6RVu8hZvKAa1MJCtrucezFvvcaSyGvXeDcfhDtwed7c4E2H78ZzpaaE4nvqX9bWw9xeREWoZkfV2RBNhn9G5En",
  "key12": "4aVXbmzyLcYXiMCJKwacCAK9VpL2eg5g1rZ7wJmCv5xwfr6JW9N1yL37Wa5phwL6zgmsdjGYhG6aaWbEwnStAmwu",
  "key13": "2TKSsdPs2K5qUw1UEnw9tFYWn8Ch5xapowHuEBPeM648LdyTKYtnhWRJpWWyH3Yjs4a8Fxskwp33HgUMdneVgnbB",
  "key14": "5fnBs3kPDqcz8j5qwenFYPLVLdiyF1ijGQCXd2Mvqzt6E2Yq6X2NJWzxaMYfaHdUsQUjqWYUDopULVwtvSRa5XBT",
  "key15": "4tnwBrsDJuC79iThMjaTcxkhjnQNYYGfSJ7X7GrgB6YeRY3MnCAuty8Rsbyqu3DwRhCTrAHaHNrV2Z4VvCKWkSB7",
  "key16": "4LzxgSYAgm15HqVXVDH5q3H6X25AHTMVkoifnuHq429yuyxNsc7YFjmoo38Js4ot2eWFF4ALrp9XEcsEpWoWh3pL",
  "key17": "YgXTT87LXM5AGm4Y7QBo9oquyvp2pYVFjV5znikXKUUj5Ta3BJfTDvqY6vaxauh8vs6hzpQCxXusM3fyrD5dBuk",
  "key18": "t72C5VP3GcqKi4u7dKpoYZQgrNHkJkaPspAQSnwiDrZjwYoB4Q7HLtSUrkudZkjLNVou3w7KpvMgm5AsdF4AJjS",
  "key19": "49cNr1gESASW868WHXLp34DDiM2YHTLVMnqmEXbiiKxbhuPu7v81Va916E9dH2HAMKnPW1JPU1GwXpozCozQM8jN",
  "key20": "2x5Az5ZwaPxdqgqKNVB4BxdH56CPMPpHYZRxkGvwpmp3XfyeiLfCnvr1G9sXp54XtQvaFgyAd67WapwbVxyX5QbY",
  "key21": "5UaP4PrLuoRA1GnqPSUncejLkhBx9AS1XZ9uxkAxXn7XqVnG8EVJcQAzr793zo8rGGM9qo5JWuHigtYm7aZmCzy5",
  "key22": "oLYvMTf3Zq5mWkHNenVJKDxuHdhZzRfL6yxP3pY1PPGk5QpiHFToYNmqSrbRpNxAvZQ7i7SovuJuVBodf4PqZxs",
  "key23": "4j3aYoFJGZvjj1TY3YzpxS3YoxXQE1FZ1ZWDU9EaWn5QBAAnvyvoRqJ2KkMBG2RxWj2YMGZnpLXgHr8Nq5rNFVEr",
  "key24": "5UHuuapunZSP1sB2wNu3ZgEYQWYkEBnM4TnnkPoz83njwdGmBH45QrY4cJLbd1DsxGKMhb9wdemoDnnN2LfyTtpg"
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
