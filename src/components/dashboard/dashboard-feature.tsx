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
    "36RHVvPUzVpSeNEkYryEKyFqBquX4WZib3VL3EyE5XXtFXEVNdYNfdDiHJMwUh91Gg9Zpe54gaaJJ7G1XPr81x6H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MeD7p4BNHd1FNUAAwRdEraBLuTUYAuPUTJzdxVs3hNFjNGMtEBjqNFie9sBP7tXXZMBkZveh3TZ1TZvpt3LR4BR",
  "key1": "33iLGALZRZLSg1xEvdbq441QAgjw6mc4yypa1DFdtipeDx4sazCFhFfDgJmkmQLVBH72cka5Au739AMkWLnyvwAi",
  "key2": "5Y7vbZ26uDDx2LcEnwFpkEzymGEhpwaiFw6TAne7qAzH9T75bXmZb7EnmQgv8Gd4U5TAgnpZYSXmoGAxh22rTkKQ",
  "key3": "65EoBYcwLDEQC3rXSwPba6X8UGxD8bkd6duhHLeKhMo59gu2CH9kSsBgXS8EHgAnA5Wqq327XWk5BueLdQ2Gb6cC",
  "key4": "5hVgGKEtK9GbpfzXX7CtYQ7vXhQ9r1RM9qigjPtaokgot6HXV5uuE8NGMqJLBKHgtfC1Fd6NHgUf8tDnaSZKJJui",
  "key5": "3N6zGDnvjPPNQ5XSsMLmPHHak2826ndAjvvf8qCwFbtRUpqCDybyHR5vM2PuezfZvvyedkWYjmKDmybo3LazN6fT",
  "key6": "3rvCQ2YZzETr2Ys6QJuFyjxFyrjoLZKL8fxcSdkFxtdgPLx9QtinyfkNUEjqTgfKCu3RB9jxpX4LsevKN8ap6pgb",
  "key7": "2PC5t8WKg4iq8tgz2uFijNofcLRsayyUbjivXrDKF8gXSS3JmWjYcMGJjo39byzSSL3KKdtkJRw1KpvEHZpMN9Jz",
  "key8": "3MDoX9ZLuABX2gpF7WYXY59guvxcj95NACeRkM76JgS2a6CPSRutpxjKbeeWij8Nwv6BAsCvtea1wHVfnitQeajU",
  "key9": "2ssTkamdtPWLYr8RBes8fSRg22C399AgfPduDPzq9uxeNh6Z1CwTPVUpk2ASJRPsa7pBwi6BGP43xyoAzNBonuch",
  "key10": "2gB6QfapunFRyE2NgdAzXUGKuaGHqA7qnWQRfKetDGKK6DBa23jZtyzirn8eByT2Dgn1FCvzjd3nb72iMmT53LfT",
  "key11": "21DD3ikfu7w6GiacbSkMDmjEvTtUx8yf9nLh8M3Xqfs34pQQA9GL8rGsrtfGif35Q7F6nSXxGA2qfwA2QHs2Jw2v",
  "key12": "52ygwZWcoq5HNjAmD2TncjGZsF1HVLiSxbZccZRYrTXU2uUdp5eY8y8TodvQZ4pmoGpm6hivULE513t65DzELNuF",
  "key13": "tZBFxyKAeUJjBVJRBjHiXVKMvEZ1fy4Wk75Ex7cwi95QsQeQ3fLDM2JePe7tB8eVGHj4mRLS4SLg8onhoES1oa9",
  "key14": "53Uh7jdNdzXDotSyoVpV7MEXPvcpJr9FWF7ZYpdqqySxbH9p11C9Dg1YzEmCkQ27MBRsQXt33B7vKAkrNPi2aUXj",
  "key15": "3of5CcBkMYS9aKgo2JaFw71DFBXVdwKvDD75EgRcPdyoiQYcjSHUNjNbEsawFRs6vhqW3dCxk1JNTevD4WWgyGS2",
  "key16": "3UXvxop5QyJ23ZGmcFCofTMV6hVApCNUDdcD3TSNVGKPeBBZf512X4Vn3egjRNjRbzRfZzoYMiV1pwWSyVeaavie",
  "key17": "5QwG7WPf9cB7gMfu8hXqMCEaevPxLHRKJC5TyT3tsXGCMDaz6iERM3UGZBkExShrD9ksu8mPPXKoszAicsKKTN43",
  "key18": "3gHkf88NwyiE8mmUNvH6NBeBveXQ6YdqKwc7Jx2AFsYzcQSaFB3Z8kfD6j4Rp1Zc4YJtjjVoxjyWAccy5pX3RMzW",
  "key19": "wsnAgXa3Mk4byLxwAWaXiYFTrDpPp8HKX9yoHEXqtkjivv1i5WKxr7EnjHsqNLZKNUx1vom3GV88GA2m88SDiud",
  "key20": "5FdCnT1hrQfCCxykmBfV9JUyreTGEy9x39r7F1inuLJsLHfxetLFjbNiXm5LSQjfJG4YVRXdCL5uZX4naUH71eLP",
  "key21": "5fzyaefrxyyUZKA6Lso3hrwf2A4UFPi3RW2iCiLe5PqQPHkLAoKrwUZifyQ4H9jX38ENw4SXT4MopmZE6hFpRdCk",
  "key22": "5jiScUvS7Y1VwCh3rA8TFCvUwLSK3RFZDMZ85J2rXieZDS3Sbuji6Z9LWRZwRzGMZTuPApLv1TqbgWgFfSH1et8u",
  "key23": "5nXxpCoWUgANnv4MZ5AvLbi7tM6XbVxqHXMNgFFRahFfk39oo4vqHs4WNoZ6z66BKwQMJEZHERSGoQw4rX6k6XAQ",
  "key24": "Q6xShwxcTQ3YhPzVTR2bzWYPy1r5AVVPxxCGyHqnCoUi4ygP8euJ1RJbgcM1o4xbZgvoDBdJiDfj6QNRx1j29Bm"
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
