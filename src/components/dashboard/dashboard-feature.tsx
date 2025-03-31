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
    "49t15RwDQ563eDR3X1BYCRaRCU3MCpibadxZyUtjy83Dzaohg4didKozEDH51cLfwUxgFeD1FLAYnusi2Zk2JLiM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H3mLuUENTofW9QhsyvutZuXEUjsuF9Psvq1aLhb8vX3sYn8kLxU8gFLgBdFFGKMG84BmSeAXgpo2UC7xtG8jVuW",
  "key1": "2oTmUz9acHyXy43duzgkPQ2dpUnY65xbLg4xWDzePByNNcvp1brabM3Ekufd6CXqUtho9guJLefzfkdeYm7TyN6n",
  "key2": "Q35hotgz6hA5apBre7XtnNT3KiMTbRiWhpESp7tUeux5kVYH6eAnSR76xUfn1BW4SpWtxT6GFwsBg7mmW98dmQQ",
  "key3": "51KuKp8bJW9LJMsdyhS5QsdCNFXvqjYiwrVSMTBTT1R6ctHqKfkJThPfJtJf1uFznXgU5J4EQN2hHKDNDJgGpPDZ",
  "key4": "5qLtTLdCpaSunknxX2QV7m3hNaBZ8noyQUuKA9o5VpJpQrzq4rQ487wf72CzoFuTAfH2uER3zgt7VvRs9G8kJhYW",
  "key5": "2WPpyR1AqzUqzL5ZZDB9Vennti4NGVhxJmaBYc3J18HnDte6jbYh1dfm7dKvNKTQiFUNfG58oSmycuPRpuqm2kdt",
  "key6": "4MJJM2qUFogSgPLTb2KjpQMX7CyjZrhjmmuEfUQUxrBxiznzmYiyvt2h1YT8znDHWVSCRXux5f9iCDs9vUJ9Uvro",
  "key7": "Hi4EUETmfLQXRajJnaD7qHAuRRNYNb3NDYmetM2exo1SjCjEjbLa81dT5k9CREBj1SKmsCVg5eSEH5CMyLVtbTA",
  "key8": "2P5czUAXdRXCYcYCLYtvFuEqo9viLYhP2ksx8g1KCyMPQUPDJiEi5TYnHXKyyKXVhbGHpwGc1YGVKK5NPbFdX6DL",
  "key9": "eFy4eaJKgMPjH3aPXb3YnyQB7rrpbG8xXN9KVqQgZF8ozexm4kQY797UXuYxXhyKGBywbYfSfi6SoC7xxs8Vkrg",
  "key10": "3r4d2PhfBuCAecTVCscY2z7B2dQJMfgwLTgnTaSDSMwf4xMPmnv5yiRQouUeinuRAG81W95xfv5SrxW5Qjmrs5Eu",
  "key11": "4DMM47dRajBA8Ly3GTAVx9TL2KqZvdRTNKQVvH33xpBMtK5yaMpY4zq3rBKr2oQgJjMiUnxEUqYjxiZBvoaFpuof",
  "key12": "23LfFnMYLK8isetkYeMbS5zirENUXWjDQ9oFkpHsUUWYZvZnmnb99mPPoD5TQPwmVSMNZJjuANLLc67MrndSdgYo",
  "key13": "A1pkCfkPD5ejhLf38pQGASGxHvXycYLNmu5VYJKAJoSDMMjbupHGzY9Y1Z9rp5qH7bySA9V48cBnae118Thg91V",
  "key14": "2NEP5gNzSVCkJnNfH7ejSf2H8XFhwNzfdvURFRYmzDmjaseAzA1k6j7hZ4vaVjmfKyJPUx8Dm6iFT3CXW3ZU8Mbt",
  "key15": "ADieHBjuSij91c9EcoEuwZYs7soA6ofgtjD92Ft2dyiaKsFxogYPKY5mBNB42YbrL2PE5D1K1EVrDLNjcY5MgyA",
  "key16": "5g9CkyXQESWeqmZYL7mJb8trhJty8QYbY2gcuQjiW9SJ37kocZNZDQZJCxR49aZX56aGyzxjRGsEgVVR39wi612U",
  "key17": "3dmX7LfMhBwwH86ejr7fubSeecZBQRxxehu4QmGZEgZAByrVVVR1UVrna2Ed6LQwCHeaGSa3ceWMGtx7nwE5Yt99",
  "key18": "2K9bU3uwfu9ij5jmhH9xcuaMYyjSZn3bLC6q2vYAdZp91n4TnKbmPkqr576Tn2139r3GbDPT7BmbDbyYcnzuvjDL",
  "key19": "3uMiJv2ahP9QV8Km2R5mWpn8XUdoVcegxBjqKnJzV99FjtzAKJUs42wnera3XEJWkQ17DwGRgSAAktKjMnewcYx7",
  "key20": "ZnC4cTKuThP7GXNYvmkSRTHnKKDrbK9mnbQdGPkfmQSeMBoY9Eh8svbhF9u41QopPDZwwHS53MRcj7biGcqJY5w",
  "key21": "3B9tYTbHsQMU1FKVyYV3JvybYDjCCWYcF7hvZBTNPX6W8VHUZXK5PByuXmmiM3Go7WCx3zgPyHc9kzQuhFpzd6Hf",
  "key22": "45Vm5RW58qT9kYS1jHJE4fegCxSAjg3dDSz1igdamrQu2d8qME7zfDzGyDyirASmNrgP5PE3JtRuMw8M1EgaTnJf",
  "key23": "3CyacjU5APFGdZMe64qxke315nLh4SaXCr3x6dqSQp1hgyxFYx76Cj9WK1yrfkM8WXxASH55HNEBHJPbD3aVfgup",
  "key24": "3myTQq7KEL3GfcekKUuPaCUwu7irkevaKRMTGuv9KyDWY55VcCS2qEzcyVrvfN169STTsfgPKv9cUZHNEEyosCU7",
  "key25": "3SB3RtkKn2tcJrzcrgMPDyaFsnrrZRsy5uWTQ73oiZFK2cnRLYcdR5NrEQehtt7mGMmwK1kb3F1DgnLy795RFxdp",
  "key26": "6kyQeMsFJEZ4p7NhzboXE2meNwwsVUzaJGD29ZR1H5trGFYTkjQmonEPcUbAcKJ4Kq83UZyn9gFbNh7rzgFDRfc",
  "key27": "gNvzDzaPGyfAAxXtt8UnBkrhGT9AEXAhKUGrTv9AQc18cacNna1PG2y4nXn2twJpHkBhCcbpb1eRxtEvGFN3AJ4",
  "key28": "2eqwQE5etRofPSpJK234Uaq2JaxJtatPAvXpgE1K2Eats4P3UUudw1iEeCRnUiSAvNkKKUo5qs94gQkPZ4dW4oJ6",
  "key29": "4JhwshvLPM5ReuBRBhRbsZG62YBUCkdCi8i74NG6HfogdZx8wVRT3pNTabWMuUmSrsPDrZz6HZj8SBz1HAFnGpDS",
  "key30": "3Lh7KDApcAZs3Bgxch33So1ZVpgD4VJ43oL6ZQZZjU6JNSjjTB8XUKQXiyWDxyXWuV4bDgFdHoTiZJ3yJDDx8mDN",
  "key31": "3WdDAbvP1SKyCWpVqeg8dEbeCkKmndkeKZGAU1yskQhA992d7U4uQ5Hqu42ZGuv5GBGfvaLMDSNcTwWSHQNtWjwq",
  "key32": "4dNFj6SZRAzvBXpTGhaAJ4FoCCDP25AEExWjThhCCgCn8EwHrCirEaxjo2nksqggSyKkqLBqCxhamdNE1SjY8Bi7"
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
