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
    "5wozi79YohjuNFzGAmqLs6472GmuRWe7tpfdAnTAoiFb4iUqLHtPgL95hUxx8HextLaBVYusoV8YtPci3wxqwfDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wJSd4iGAVhpth6azMBiTjpXT4kx4od61F6iXrATZDznf3b9TW3tPZzCJoxKsgA95LWMpjcc6tYWJnRS8qVgAZLb",
  "key1": "4LUhsrKuWqnrRgKgXdVymsiQMyJwwobNR5F6X4XEnyWQXnN4aec58XMLyboC6HkfhRRXT4GckDweJPDdCfaznw79",
  "key2": "wCb7o4ipEf5uKLtS3qw76UXd1pj8nhAbXWTzHDiifLxXLszweYUeCwMsQaQdAcAJmTGXFoYB6Ryete3vxtzJTan",
  "key3": "5mHe81oGputrywu62kMMCSgAyH7ZeixAgb1HivyuQWJLL1mvWAYdsHXwwxy49nkKDQX9RuCXRcSteqw8oE1sfLLL",
  "key4": "3YnqnUDLN9tYfpsUnbx9QYRXBGCMjMgkW5CKXuBnSFXf1DqTmrL3jrzYrjZZzYDutq7N4o7q4YtnR3pReEXtiot1",
  "key5": "2487vL3PPgkmmR1cEcYAorNzTQK31PPRGQfALUMVmjVLGj47MFhv3G3zx1wVx9823rJQsPxe2MJZtyEQJBj6woHV",
  "key6": "2umzktL9DtCg34nWrHzgiMYnb11hCTbkbF9DZs2vLM8Bqhbh3JhG8BHHCSGVNzKNnctfTHWGjVVVKsHttYht9SaP",
  "key7": "2qoRcAhu5xRPuimmrQURS6b1T6Ywpmwin9Tb5DzNyqj2B5E9CVpyC1UEFTWtJXUkXegaUBqRYKAinCdFA5YzLpxF",
  "key8": "5sypT4NWYu5iJC1mEhXzRTjTuFY1JuL5XpCSupc2KZtxxm8XuZfiYpHpGFwCFyTexoETtU3cUYK9fjntwaGnhXS6",
  "key9": "5uP5zbB4CLGUXViSvPHUbDxZhZyanzvtFaXqx2p1JcTpBPkW2k9om2i69FfEDsehiNKs3mfFTGCzSejJQRfob2F4",
  "key10": "49trNAVDTLP2CegM95wFpDBXnxbbijcN6HfnxTh47dzFhByganmRgjjUUHev7kPQkrGCPsEEChmnybZ7jPmnsTDS",
  "key11": "43B3QcqJj4nkbLgsqdBR26NUxG61A2nqzpM3673hbfYgseTtrNibS3qr18CYZi2RzGFcGa5iNzvCbXEyd4EwXRHv",
  "key12": "2k3BimhDky8MzSzoBSjqDK3xRS8DZ8wPy3zY4Y8qTJBTs62dEZXbR4Lwk4nneKadM5iwuRcmc6JwBUnFDQdt5g7X",
  "key13": "2KZZRjSRhUUhrv3yPnXedkRG2uBNWQ11XgEHijEb84moTc5cipiLmbXqXiEybatEP239ehTNLe8uBxcSE4TQgevk",
  "key14": "2DzP1mzGzLymngTfLkrzUBS9erS7D4oTz1Bi5gNw46sGbF7VdFKzTTr3f2H64tqUnW5YwgE24o77iv1FKU2y6BJX",
  "key15": "2wGKp3oZhzDjvXgpZVWYC1MLRVTrrEXycz6QZAFbL5ocYDickTVr2Hpj1mmU6BDQnw3ymx6ft4WLhyQf7hp2CtoU",
  "key16": "4pfsdjxbBxL1N6pQwUfyCTgLBmjvopbfZNiGBjnopGXaZWfgg6c8np1JZ3Qm1STcPondboXDd9C5CqhneaMJFhC3",
  "key17": "4kU9T5BqG7V2wtp1t45qSNDiPnmRQvE8xkC3vyhY1NaMxNGpnewhE4yFxwHAgnRy8y2AiP4MhHod8J1Xdmo1opTX",
  "key18": "3krB1AkFfVeGCSNKdJx1r2SfDsDbbXgjXHDGqdFT8LWJiZoZjKz6io8836Hy3Z1F8pm6NsrmGKMef3kpEkjrAAYr",
  "key19": "31kJ7dSCTb7DKnJR91gKNiVuAWtzbQsi5eyPYpqepcUZQnqsCM3jxaD5bdiTMLmKMBW8E52Y1KthCeduzv7qXTix",
  "key20": "4dv5MQqw72MvzBw4dLLL8uLp39V9iromxQ1bjXzeNrZRHupJzdSAbJQMMue5ftnWfq2zAfdY539uFA5eJN6yF3mi",
  "key21": "hz8YSzXoJjAtyiPd5dYM1ujDtKQ3Pgepg6S35UA2Zv8oAgbpKAgrgx5beqDjSs2QC4g7uwm7t8unJWXjAVrspaV",
  "key22": "4PDnLtcnKp6PfsriA5RFWtqaVjACLBL9D3Lyd2Hnph7vHJVE7Pxy5WodwhA7VFZH7SfpRXfDmPPcGfjURxB4XqCH",
  "key23": "65XnoiLKhTK64bJrvkYTYuSUZi1GYa6m8igRsDu6iduTwRhBfbpbRWmTazbf9qtqkhacbj6p9ZhvLgY84b4Vba9D",
  "key24": "4Yy3MPCe2f3CwuTggkHDSumKfyVZEE8ydVyg978zte2eG4HhUPqq48r5x1PochTFAw5hkzshk2uxenS7aH2UfDRU",
  "key25": "4Rov3xaNnwXbC2ixkVP8jerXxL5cNjeS72JGBUA4AMwEpojDX5AZiZga4nmSsH79ruHyicdo9GVnrk2dKrtc9dxS",
  "key26": "4uRNe6GmTBkZUiJNxhwa9g69iQ5mqVCRbnFLKSoakfrQ8XEk3NBLLABN5ixMA2Rx9ArhmvKf6QBvqHgLmLNAfK1g",
  "key27": "2JscgWyNM65LJsVsiMWm4HHu4y31ZTsgVh3GGQnVntGaoXwZkrpwZ6kFnTxBZVbZHXhWVSN8SuJgwaXQk8L5snsX"
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
