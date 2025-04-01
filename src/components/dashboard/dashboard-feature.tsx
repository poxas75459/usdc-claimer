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
    "Dc4GH377CWBoGsezQUz1UVyS9SrHnkfUw8FBSjXkbaXmsy1QFVZqtWi5Sm63y9KC4QfLXv4P2U9aHcXNnu9gUM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bj9uz2MN7DpHPEKdyyJqMDdm1kEynDeF2yE5v3uNNQFnBFTbriQoyYDvjUp7kxz6Gsoc9JpQZTwVaLgV39NbTuT",
  "key1": "5j21PdK2dNgMzshNEXr3xfoZ8b8VfF5PhAfe9KWLGEv75PCSAVGfAKS2mVmQDeFf1NuRWq3jfJPMhRNXGz8H9rfH",
  "key2": "3rmFJoqzofpMrJdD2QFEMmeoSYvvLcXEJe7YAFmPsqMNh1Pz5CxicBJFCTPPz6RqWPg7TH7yGRKcoWJa2f865HDA",
  "key3": "KN7DqXui51p2Kw8nCJnffgjW2iwEPZriE8HocfStTYoNMcnZeVF1vtUb7FTmrQuaqk1Ve3XVQceYsgocX3EKAVn",
  "key4": "3aKHa2qzdUHmdjPoxpYELEkZPt8NR96CbGhs7Kqhmak24YjB661hTPKGPm4v5QL6MTqg3dZJNymtFmU7xsXi2uGt",
  "key5": "4vppFNRnVUrqkQrDomdWt83JHmeQPTmiyUt5zSGeX66oJPZzsNS9d5Sr4pZfmTDWGGez3Xn24im5YnoZ9ihTbNCU",
  "key6": "PEB2XPPhvQVkgeVLy3fJ9917iPtgpnPZN9KNBezovkaGwGYvtGjcCtin4XqaUsu51mEMsp5WfWnvDHGgkLhJT7a",
  "key7": "2KYdjSKcPovinjLpKTh8nx6hcpZut3ZKnfjxLfVXvgvFPKo2GMtNZ7gUmsoYGogcV7y7jBiKfwBbcSo73HYiRLpM",
  "key8": "56KLYSAEKLAwnwBWUpcjRFUsD3snMW51qLmaYFyrJVpwcVzKXMkahDCvLyd94diDgYmj98MfMUaEhYN3GhohQnb5",
  "key9": "614HVtU5YueUkKJQ8asPycBNQqHe1uakzUBZ9kYs5NkXiQi5qLKZrAoAjtNNY1FZGLRvo6uDGvBXiRPZ14ZMeyHy",
  "key10": "2UFwi7h3hzTqZDEQbsP1rpQTeuZEAzs1qzxVuBQSnffPM7btWrVy1NHFe9ha6jSUcXeveQVfi8wRCkWWJP32dJuz",
  "key11": "3x275cH7pQNREFRYCW6XukiHXGmoBabJVYrbu6f4rthFWczTvTgmr2jjT5Lv14bMMY7GmKLUTouFdavYJV8KLncS",
  "key12": "Qp9NMsQQ1dcjKg3eTWvntSuuRnhts9pwnBQ9zHFtU4sNhmLUQ6CvhdqGZZaNdseXEz9QztSig8UK47QUDqAruKt",
  "key13": "2MLLFsuRbBnAMSM8TLdq6hT7jUBs4RyX7zCBa8mqEFEaizGo5bgbEHxWhhw7HSQYbk3DzDQDvTkoiBK6ZfGdSZuU",
  "key14": "3vBfWqfbAB4iX72s4ygSTvMGkr5o9UvA12vsLa9B4s3ig5hrj7RiVESkqjPbmujCwWN4VvXWwRAcSBsceGLm6h34",
  "key15": "5a9SxZEZ4KYQaMfypDZfcE5MXgY7qgsFSA5xCe2DS6dsNQk94cc7zfKebTxPE3vdSfjFaPgxpHk691MKva5Z1yCc",
  "key16": "64Bw2ACTGx5ZseDe9HYWWeSAARATk55NFg8mjFZrSZQtBFAQHYcvyZLphc1rGQTFed1631vcCu3C5S4mnohfhKFo",
  "key17": "4sGYvpkHHkiHiKWkz64CDr9AvdnHiJzc64AGP1LJTehURa1H2BJ3b2KRHoChmizGwbHB1twyGbK45BHv5KYkp89u",
  "key18": "3NSHg6e5fmhZsNbW96KYoJ3tigBtx3X6xxq1PLCRJ9x2qhu76WnGEQT6Cekmb1AYCRJpoG8nVnJfX2E1yvvuiR9H",
  "key19": "3N9Uemj8YTSTCkDguAU43X1zXvnLXpt8kQzE2vkaNvvDccaBaqhoVc4mwTuTZ5NcNM55nr8es6i5GHfVr5JiuY59",
  "key20": "4tvhNQWYpXqxtCE4STukmCLL3z134RbNteMhfExSf9c6xQ5TbtrtqR9P5DnZVB43tq2KJdduUgKG3NosjdAvvSKp",
  "key21": "5ijVWd851quUwCLLesqY9WWu7hTjd1cQgjtzsqm3SViMJGCzB6wexTHKdxpz2xSjGysMHvvpFJpbsyhcxKnFLwo7",
  "key22": "2AcCuWKVdxtuunQwaPNxhpaR2ibRNT4ftgiQRyfMhfPHjKqbHLyeWRLwmVF4hq58JNkTRKa8BvR44zZX6FxxSde2",
  "key23": "5zRf2UmbfGkVgNZNLSUUaF6h17WwJrN8iA9hZFnr1FPP35BoK3vRiqm4HV8yGpK5dnRMQu24Ftqoi5zaFFAYuT8m",
  "key24": "21LMS7csizJ2mS6hN2czrv4UUjzjj9x5YKwsu57ZQ1rz1cntYMkWX4rTWKPtxyB7ZDvA5rSfDFAsPDKekorLNTqF",
  "key25": "5UiMJQ1oLxomTwmnkm3eXXhHwZ8xzH39u6uTcw7Y1atW5Nochi9mB1EfoyykZYo7kaeRKP9waEda2th4EYkeGsLa",
  "key26": "2AoC45f6mZZMTgLuLu6tPAEgn8tiAWBpabMGuhpTk1AtAXN3F9U9EvXGTvU8MnLYKRsh2775H5cWrZU1F3Znv34K",
  "key27": "FkDdbP3PUJokwWMDvPSqHpBfnDnZNZ42kenTdCDXJiMXH3jHxL8SroNesX7bQADSNhnEmw3UjWLoUfDNjyajoJs",
  "key28": "3MT7oQXnLV1BrgXfaqnHA3H7mwAU9iswgypeK4VixSjTmmkzt4SppG9ZyWqBCdwbWzaRnAo4xWtTZSmKAr1hvYmR",
  "key29": "3XarnWPUyQzebR88tetXEBdgCe5o1oycdKCfkSE7hc8QWeTu3oHAU4SquxZvfffvVrES4n5rL67ZyP6zX3sQagFv",
  "key30": "2hGJEgttcHLpG4WjLN4WQWbSDYYTZNGMcie5MxzhxeCk9BQRDGVpTs4gCy4Pf8VfjExkxaQEQa8GxebSbScWpkBj",
  "key31": "2NDT1tX6dWR2PiTu1QSS6YEgDt8mPQoZ81ojPWWQEnfky9RZN5agcvJBFtTNqyPWkq6AsENwMaDAqY6rQzbatC58"
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
