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
    "3Pm813Vi6mGKEUNzu8Md1jfKTHJ744rvcFJUxqnXKXJqR7BZX6NkZJ9YpLDRbmBQFFeYTFwQhPx3ESCLm9ZLw9NQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C85LqURCFFn3npd3MMV2stxYqUPrH3VjMYrHYkepFx25CjgEjCv7C13KkVeBybyJ4Nt5BCrNc2ejr5qPiGvAGkM",
  "key1": "2ok3cpsFBBk54Y2bxBmcZuEaisCKHpBaNpgkkbR9kSJTLYWVHrrM2AgWXC1E6geWehoBnHVwMEAFs2E6Du2VoZLm",
  "key2": "8j6FQJQpDEFrQisqkCRTEwRB2yTVidzfJXvLhFo6LVn5owzcwgSDDMFiLNHaqB5rgi4RRgq5mU3WW7KEyLQStgu",
  "key3": "5ReC4ZWVEfsLVa5KBvdTN6znmDVV9VVyhGGRbB55o5JomEs9vbgVFbDDpXyLfQrCjsQEPEXUUcmNKmMxYJPTCL2y",
  "key4": "58gTXCXBDgTWmNi3yQaRJe6uKdd8SzTaquqoAxtbAo8QdcDhDLPdwyct97FE6NekivrXKcE28LBozqMy2iE3cwca",
  "key5": "ZqZ2FJXr19CFU3NwTVxe5JqRed5V6sNo7oUtxXq3Xwyp2ubJrDN1rzyzgjxHcZwbA5AQCuCZZ2XvycNc4RQTZkm",
  "key6": "41hCZcjyDWvv8t74S2nPZYvztMLTX8pzzHYU8syDy7KUP7ycSC1Fjx6NhGzC6JLdH5ABJrPXLvsvvrzW8LKBDJfy",
  "key7": "3A5z9VkgVtWybnmHP97317ZqdR3jvX3iz9oEsgMfhURsXutffiT9Nm86P29ryYmauL6TzvCymdMUHQcjEtdw4ekX",
  "key8": "RafaJsPiGSp5GXMGc7sJTn1sATaAPTJfN4Q7feLZMc9zpVu2gACzZ3aiQ72Vh1ATnJ3fwZ5fVpkFeUvotcrn1cV",
  "key9": "5mFAv7EXAMV3H4RH7aNFMkY77YU9fzMRvik23m3EBbAjsxKfmsrpcLkKqFatLpXA7Rd4onntgjSjqW8hbweK5W65",
  "key10": "3uFtcaU1hVk4q8eLTapXtjKH1WujXvZiJ8aVXpmYWXykctqjuAET7nUpk5sKJ75m4QC7WM57o3iGUX4m8R8X5H4K",
  "key11": "46WM62afaHVSK8NnMGt7GtWxCd1gaLVeNXny3FGiggFP3ZFeQ9qmh1CV9NqNAcAyjH7JaXXKQMPcRQNbnDQC2VD1",
  "key12": "2TjRS21SkXnvJyTFuEq6gvySrb726PMwyvm3477LfBztmSH8jmYEfcB1bwLRxJNuc4mcg9H9d6idBi4u267pme4F",
  "key13": "3oAz1yJK8ogTNnUTzLvGGB12TUvpgMPhCJax8Lutz85ttM4ActSfZXzwz6LXSJx1mGkGHcSyC3zGZjLN5zQWGmoB",
  "key14": "2jktyAtwp9gvVmnQBiwbqB2HtEUmqRkUZZPzDD4XNWaaq21D9GEeC9uuUZxboTcKKotH9ZuA9dssnHU9XXX5Mny7",
  "key15": "jCWVKW1SHRJfaiBrvgm3UX2P2Dh3g2LuTDrAji2eELCKBUCpVCGwxaAQu3bi9AYipRmVoruuwVj1x7YFYUhCb7b",
  "key16": "3JUbme7ipxegiqcoiXSeHgZ4Ffe6QK9Y4EpsLYGcqDLGfhfWA2Gd6DWHDZaYTNqTkfHMTEYhJ14wQZcLPVFtEMiN",
  "key17": "4NipcZfb5nAh5DLeC9aCRPcySE8HNFA87C4D3aM4NDyfinNMpe1rrR24oxG3tZWGxYNwWZsyV5nH52sxKGwPf8tc",
  "key18": "5chhbvCy4X9o9sHTDUTEmUZsAFPXoWdUr26ZGrntdHeBRp6zo9umBqbpXJwiNajEqwP1sS5w1x2D9p9TrQDRYhVR",
  "key19": "3L6qct8oNALqKyLNiKvetLmXBAsTW4yQ8Daow11DifWvzqJutfbxGj3MeWheRn6tfNdQEj8M4zoXLRjxqh13cq5Y",
  "key20": "9swa15W2iJb9LZzhcint1fFFkKA6vRyyieoZfKRnZKaxzqP63qKkUrihkC49cqAfVdiWQJDpLkwjgnUuVzRJn2B",
  "key21": "2QYKAJHoV6kZjWGEfiJtQchKPwj1n4zPdE6X8oSxdD7DFvAB4Vm29QsSccKHbY1KoRu2AK5qn7PY7vphtrWmUnVj",
  "key22": "5tb6PciDDpHafnGeChdewuXQCTRu3LH9TB35aqnQGMVVpUtVU62MHSiPV2gz2kM14aXdXEnkrd3TFMAfXcUaYpTi",
  "key23": "32Y4c8FpfjGhkzXebky8851epRgm8nGsYB7eBCc4xhvANdU8V7ECEdv4936CF1JVg6sLnrTL7jzrBBMUEEUmC7n7",
  "key24": "mNz6K4UidwHhdfPLZCyeQemZBesaEJsV5kQMXaTVBJH3a3dn2zWwmz5YtgvmWJoyFish4vv877ZKoZ5WXSpBfKt",
  "key25": "6EUwXcmQWYFuNhSYGPE2ddcMueuiuYSdY9VjXpuXgDgvCT23C3j9AhoJzGVHjTCp4WyBR2RKrAgcyN2WwwuuWiY",
  "key26": "3c34unSAEzuHjoyoJG2t6GyLJnFPd98pWhT9wQf83n51VmRMWM7FEsWp8nzRRGSo27UAz2mWkLeWwvJGwSQQ9myL",
  "key27": "C2jrf8CsCLPDV1ps2w8wRTWFYUCXvNL5FtJ2EddWwke6oPrYiQRgVSxK59Dp5kybAiWCL7ppyqp2w9LksNciaMm"
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
