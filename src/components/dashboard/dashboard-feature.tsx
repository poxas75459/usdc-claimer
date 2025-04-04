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
    "3dN8fDrdzQcgkQTVnvBzxRzQEqwA2qnNpMKF2sVVLagVzqx2b239aqGQdd8AcWg8wduWdqph4tUcT6UjQAKZVfbi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VxyPTFpEt9v774n9Nxm8xb81v2RAtwHjvjdQXpNaMpZsdrnhCQEbTx8wBDBWod397cPHCswYQvBqbppRSKmpShz",
  "key1": "4zE1NtTz7pRo7iZgC2MHHgU12VFHHM4erhRFaye1VShLvkej6d7SQvaNrMjo7mxyWHL3og17eHrXthMbfgRfcQeu",
  "key2": "btarSgtJ86dAm5MBzHcd46whwwCRBbvLL8T7NRdPQSvFjpNiyaNRANzHhusQzQjFoi9qzCSt42SgQXYa3FjAXtA",
  "key3": "34veEPy2hwMi3R4avpjUAzABQ8QhVfjMcbMqQnnP3NYghMBq3X6zSsXzu27bdjzt1ELLFSsb3E8DpLbwZhkQer98",
  "key4": "tkUGbYex8F24a1BDYvWn2mc8eBWC4fKRXrcKSmK77wdqRrdpmm2XfrE7xYHxynLzxPWJswVEC4dsGGGjH2Pic8c",
  "key5": "Z1AcPggbhc172hqzRZW3D9TVC2jxHkB7bSYpsrw35Dtcct8Dvgc5pP8U3z44hC6RfiwKcpwPpBu5eGH2ToAcsij",
  "key6": "Hfg7zSyf8HpHaZpVR9SiYZ3Zehwk1fk5iVfW7PRWbcVKvYKSrcFnMsCTMeB7Mq81UCVVN6ApfAHU1vFvuDyeNQF",
  "key7": "63TKfhV51Am26eGNhE2JGZTkQPKYtYdqB4wTgSjjuAnrEsiXX1Siye7yiZDRJ2SiZ6qs7tjGCxrnojvKAwhDV3jK",
  "key8": "2nUUpq55cwZkaxj9tiWVPsYkoBiNCEywHeX6NkgmnRA7kpUA8oYUdWQHPQdtBs5G5beinocU2Hn8aCoAkaGAo8J2",
  "key9": "4exbo39sJGg7BnGgUr91Z2Tjd8cnVmaRujJaAxw5NajXdpkg5XXitFqoJmCgJ3GB35A3y8x8wkNWZyBVn6uZiGrX",
  "key10": "3eXJ3ukq6NCQtTUyjgDRBx9nEAnmS4HLEy33JFGfdNzffQv2KdXEcvycab6y8kzkyAcyb3ez5m7KCC4ARHkjPZnY",
  "key11": "47x4ji5ZkPcMSGxkn5ZEY3uxs8fs6jNV5NE8QzR8hR3QKbQywzCXKvhUjSSUHFX3AuNYkt2gtR1Tz6pvMkdufy9z",
  "key12": "61aV9snb5ZhjtRF2wEkgn32dDVBJnrbNRSpaGkK5h8hc869qkMChnpchjgoBnTMXtbDQnqBXtcLULq7LcZy8Ycok",
  "key13": "4XriVrdaXoYgWLYaBcysaJxsYUS7qEdrTfrPVYozmodxRXhFU9KSRqpsA451eQkqS86VE2UVQMYaMPUtPfeG9XDU",
  "key14": "PMVCfHXuVXKdoyJ6Wd96zSrYyj3k7YHdkitwxM8xT7yh4xXoK3TjNbZL7MAQoDuoKqCfvYrWJWnwKTKFQnG8oMG",
  "key15": "5Yek4KhjF7CSpVRmuDj6vszsrHJwuFXcMm5uyKUUcoFQUwJXaVLc5qWjpGX8HkztUfzRDqEfJqvxKZBKm7V31YCN",
  "key16": "567LUjmJKgaMqirXPFuQJj8gof7YURKJKA2MyShphtTwUtfyoK54zUpFwj3HWYj3n5irucNqfdKw74coHhPgWLgE",
  "key17": "2csfJZFoQGDWi6L5uTjCMYJTXZLfBSmjrLKV7khQ7FAEpyyapHQcgxvBcWdPfDuR7UjquozGymPNuTRi6HrxLNai",
  "key18": "5PAFyn5GzRNLG9sPQ87Q7hCED7561P9RXDSDLjp36o2enuXMKPFvzxHRzeMyuFwxxW4WQNb87MSzo9BeNfH89ZP8",
  "key19": "4qZmo4TbTDPZgk1e8bSuVezsdgoq53rTfm84yLxvekC9hV9zdQDbTKHURUqcBTShfSSorc1bVGUcCUst1opH2L6k",
  "key20": "5HirrrXg1dzBChpNUkYuhoxYJg3bF8paJJm2h6Ly73BZkYBPFYxxigbmnnTtyiaBBu2dGbq1AaVdNsYYYNJcZ7AG",
  "key21": "5aEX9hD8zZFg19Ry1trTG4mk9smH317BZ936m84BsdCF7QBvFBxrhJmP4g5qKhDfzyT4haaGiaCqUphsZNJ1Vv8w",
  "key22": "4PHCWQtbyTTABEeArq2RBg9DLze5F33nTM8oQhc5SqFXn68pDqcwrfSUYBytEgQrSunrXdyWpVCjp1GmLetpx4qt",
  "key23": "5m2oP7GEU1aQpAUe9QUx43ZXPbcMuA3C5wVBk9wgCny9rqKcxf5qoAiR2SeZa15JPMNYXqsBnbpDYeS9QbQMkZdb",
  "key24": "5V32sW2bw258u9Liq6VjoTgC34SsNMUtiByw4kDf68hVjwvni92r4TL7PjHuL8gVxsk8mr5g6QiJf4CTefxgrF6J",
  "key25": "3aZAb5AHLMdQZRhBWL9WFMmmgHtk88wQeLCjkKs3K79C2Ms2YMb7tSibJeWYed1cBiC5V439t3E9oxrho6Sx3dVd",
  "key26": "2VJrDUUxJfbgnT5sGL4byejsrQqhhX4G88SsWCNSSSHynXCeeXi7suXZ8Bueoo4XQcbs8tF6YCS8EsfvbVJCp98d",
  "key27": "QvxFtzdCy9GD31ig5UrknmSgSzvwdmUZu8Tdt4GTcNri1oU1zVDaVCbpWHSLHCkcpLM8uosY9WCwgnsqSzaEPaV",
  "key28": "2NZcP3hUevu5tMrGD29sHZvZSiyAyQxdPvc14ZAc7dHyLxMXSse42y3YUYcHLJQLSfgBN4hS5d2ZMTZkPHBwu2bF",
  "key29": "3ScG3E7Lr6BT3u9NWfi6Typ1cANW52RNumuknioQ8noL5ztfhXsQLFxSHEbTjuAy5Gz6dhpU9gHYZmjCYi1NqVE6",
  "key30": "4WSJaXKmnvJMn9jtt66YXQWhav7CyrDak9zhPr8mYfve8azLSMT2oKTiom3a2AWsMMxbMsoArPUXnQyL39rnYjRE",
  "key31": "3FLMyDB64veBJeKJAjwAnfLLWMQrXTAicYUmkWo3ucCUdv7DRhSp1a93FaUMTuttGVKAis2EEs53cbxtbbhMpMNL",
  "key32": "4DpPFa6CYwRHgH3vForNydHJe871XUQsLo5BZbqFp5qYumru8ffKX3bzsSZMuEs1GZEhkaZpMLXV5xTK6q5DxZfi",
  "key33": "dzpHiZ7uouZDhPuHNe274Z3qr2sYHrhpU4Xrmzr8Kb2fm1BRzSHscCs5UxtLBoQdYKRxjviT9AZvXQzaKkumHNZ"
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
