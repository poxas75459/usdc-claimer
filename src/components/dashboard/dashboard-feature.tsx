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
    "3HxZJuT7Arx8DEQRLZeMU8L34CY9eh56vCkQWtjJ6JHGD7mmb6qRZFfHiaeyToyq2EMwizRoMWfEqTwJUWycw6ps"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TYiHkAQEZToqs61MFhikEonpyEgukN3tX1SzEqz5CUcvAFJwCoC9EM1Y2ybP553XRirVcPY6HaRdEMYWJB7pvxq",
  "key1": "2jufbkpqYsS3kaVKjV9HjXHC5w6GG5DJe6AxP8Dof7Twapp7biHbu9csqYsMi8c2Q9MmdisfgbmD5EE28hLX675L",
  "key2": "2yTtEQzpZ2Gw8nVfL9DYdkX7LNAtMYVPvrQT2T7oy9STTcJLBxW4zRxtxbG7oy7txBst4zct95peiZSZ7r8ugpNr",
  "key3": "2e256cjSoXZmduGFbCer4dZoQrTyMbQs3Mzku9KW3nsHh1jnmKL45nmiW267i82w1P2Gid57JJ7qDWCJdnV4kbRy",
  "key4": "tWcVWzD4aXtzm48ozULWEzgqD1UDopEScDYXQg9w5cs4fce3vwFYXVjqUsNk9t3R6eCTyXZKyqrnUFRFjXhqyTU",
  "key5": "3X6nUFthjHq3fwHaYvwoWYbXQ51dvkUdyijTMWxydyqXnXNUMjtT9uXhxF5x123Hiy5q3uWKwpkVDvHPK5MQohqn",
  "key6": "TxJYxtx29FexXaPxASmpANc9NMLHZSrH3C7kgqJGqaVPq2sU4S8umHmURMjAxYAfPmiW37KU7VCckCqt9jrseCz",
  "key7": "3MVzXhDFM9GBENweRP8E3x5uZyjoW5itjwrGcQfjbbZcNbyvWn7EqqPycbdeYdTJ25a5wuSd3S4eiCoYzLT1p4gW",
  "key8": "4vQYyXSpgp4PVTp7snJBrbg1ybq9ZjHzKeAVaSQjdik57W4mrVfRJbazzm5LhVMKCNrgWPun6bXjjNSHd3V9mdU3",
  "key9": "3cZmcJXQHqU5wFQrcBxmKEhMdJMMt9Y4cyueRHCC1rvGgHji9ouLxZTCEv7Qk1i69MfKC8fedUBkJPgW1GfsBJCn",
  "key10": "TsKQXcyNzPTuwMmhGQ2Xbv7B1cGycNcecVK4gTTLeXZVzBZVgb1gCdDmu5TJNtuDQSW5jB3Uh6MEuJ8hy7j5fMq",
  "key11": "5YGGAzkz7LCHKAS9bXVdv2JRUTdaSnZAzZGkWPFGQVyqfcYKyj7hX63THYig42CPd8gFA1rCuXAyPF2GDZUjrZsd",
  "key12": "44dh77dhJDFTk6dkAkKWZhSupEj66VVuepJMkh5mtmmJPx4oFL5vmZeNb89X87Lc7i6SaKUGM3MoS7b98kNweDGF",
  "key13": "4LTmFA93Uo4XKhknnciZA8zKC6xXU46suDnJcksEGvtmw8vcfkwnujV6EUZkYBkrke9GdUrsmR85Kg6pvV8gMUbq",
  "key14": "429dpC5sFoVYAcBCrtFzLJiYvTYJBb9DUkCc4hiHueGaSEnphcEYFCY1KdtH18DiZkMh9uXx3aEoAT2WBpgujgPV",
  "key15": "4JVCCj5AsYxacdSNiwe2WjCet78wgSQRPf7VpEnRgdu5793igZUf44Xg9SCVuWtpFPSu9o1M2naKmG4o6bk1xtuu",
  "key16": "4qosByuUPSA4gfnCLkpofWZ2N49K7JCnDF4KRSPpvSnzrxMtu2NhNYGPKExdUtxZu5pnycdrjHXYihvSCEmVE5x9",
  "key17": "3HgYzVdsCr2KQZb1cGvKk3nVEgDbXDB1ZFx8GYuvnPskFTVKrgSHHou7rBqHZazjDEGPQstAwYCXQAKSmoxHQDFx",
  "key18": "5RhQWLShD6cSULAoCxHSXTW1UZzLfEupY5mS2fViWR2N2QR8PHgRuwbZCZove74SCNgyiw7PXvNh55h2W1Nnb96K",
  "key19": "3rhMsoRN1HDKB3y8F9QtReUHbvee7wPwZwTjwh8kVEiBZ3bv8V63t8h2Yj7Q9nQeBGS8C68R8QAAu9V4t4jodYE",
  "key20": "3ELYqDYfNxQM6fx4bQTuvzkuDqpxAMNo4beWmp8PdfgfAL473j4NPCendfo4E9p4epMFVGokdpJwUTkMD9tSWGdE",
  "key21": "5YQFajVNXhWmnsVS741UsAzx4N2b1V1RvXj83F5PGuXJyWfbweVcStLm1E5xq5v7qpAHEXyRHH8FecAzXcvr5rbu",
  "key22": "4i8FsygMX4AchCaSD37SxeYvWDzPfaJxTd9YmobLBMa7unrByjatZWaAyRD7if6oHyV1k2oMzkwZMeJgatjpY4Q8",
  "key23": "g3CvcecbKUV19iTMhhj4G89MAaagBt1T1ewSwxiqxv6gjgSe5pAN4SU5Lk3Yr4CDtxyMxgqzYKG7b9PhNNKoaKa",
  "key24": "2ZiqJEujMKoyro75mK7TwYN1H3QmRqbbhsbd5NXWfVGhQZFBYqBiDhQfJgNP7pYHTDqs3segGRLF9f7DBaiWRDWV",
  "key25": "5mYv717rhQXappBNu4BZGTLuC2y5XYDazguitAEGTEf6un8AzaSWLngYvnETgQuBVy4YmSYWwHVD7K4TYk98pSzY",
  "key26": "HrciKz1czUXg51A1Euxcpw2uryNK9Xgw69VVKak82yGPhQ2zU7gS9S6fzLez7mJLGAupjhz1NTmBgBHxnwiWUbw",
  "key27": "2ZVjfn8Znta2wQ4tA9LdGPSJxDkou69jwuHcmjZU7awG7DPkHhqQstwA4xhVnBwTFsdHBECBcxqVhjESaHKpkoTh"
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
