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
    "2D4qpYwjycCpvYyEvsyqYYFsa9eXMaDZj2eCQ3NdBm2kRxtqTrdYwPbusyGwMy1nLeT1AMhSFZtJM1kQPdG6sGnN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vcJ21q35thryZJAttrVC4RDkqtLQ9XJ7WgVGubXDDdDEAzDQN7czzUbcTj5nB2AVxDNhBobwXkZLpNQo2bMyz4y",
  "key1": "4ZyYLg6vw76wj4WYSwd2ZrY8unqDxmWCm419jD4zYx5RwweM3ZYeHmYKZdg19wWWPe3DBremsBbZ2X4gBhND5dGA",
  "key2": "53QSGq3iEf7aWrHjf89w3Cq6pF4fKEWSFMD2644Vz9FsZtm69aVJWN23pUjnDhCDi1oGEK2h6YtgzV1euQH5vMrZ",
  "key3": "5mxS4tqpsxCkneyEmGWHy8aEBMuwgbcfNjKKwE342Mh2CJ8W8ZMqYi2qvTfJWtqjXeDMuB25C7ARmKJNWf9Rpiko",
  "key4": "29er3Xt23tek8XSgVxpy6GvfydstdEKu7kx44vUCYJXpABfy9VXp5sCNUUDntcz7piyHMYHzt9CCn8FBcydTJUBs",
  "key5": "67PNxFzvJbgP5VqTpf74L8H8JkgTydwCxS5NMpg4K9K1FzePt2LJAkVCKRcBwcm5FPMSJgBdtEhD9tGqgTFkAn1H",
  "key6": "2RteQayVK539nqF4rustBHBrAKhEdzkdNcak5wDYe3DKU4bme4nL8BK3mwXMvi2amrDXwAtjn3hoRKHNcFKxHZUz",
  "key7": "3NXE5qRADgFZiHxVEJuAzxLxTAa8rXDGG364zMZBpCjFqP9EJQsMMyLH9Ao6sCKRCvvPLmdbz6P5imuXyQSnAUta",
  "key8": "45JzdURBqRaXgaiuH64ePZD98YwEAZGKatGhUy18XRhxTxZ9PhdX3hRKoHSBTNyA4umtVtWXHUvBwiWAC1MiyCRY",
  "key9": "3HiQyVof9PDvXdmTV7qjCwQZrhwpBzf3P3J9gRQkrwHaAY9fvjutCtn7uWAQ8vnCKy2FB7WjxRLD3972qUx43NSi",
  "key10": "2J5aaAEGshiJWvHWUnbDdiYXR6RTSmCyVPo71khWX1tA4B6Dpk6eZRkxY79GyHnPhTQdK84eyFkVftH6ag8a1nG6",
  "key11": "2nqkovopSUY41Bxw8cysH2QbEjdjaExPxgnkkYwtLQ47kWpBRQrp8YtwHx8QDGN7PxDMiwR9TBtTtPSogiW42uSv",
  "key12": "fYgZsY4MoDsthhh3cKm5TRcACwGqt4aW44mnjM1S8xCNCqAmkdcGiGNFQi2GyWTartCdfx8kRk3oG9TnYs9wmXe",
  "key13": "AgGfgMXmyjcS51qSY15HM2QyuJJdLYBgQfS7ctXGYkNCtUdvC1xXLNbkpuyvirpCfE9eK1CUBF5hm21panFC1kb",
  "key14": "3TP3YZwCewNfdArra15MzHttB8eZ4fAQxmRoHiJp47AsL9kLXZRckwChe1XeooCZFud9GCCpPxRAojCogki8m3XZ",
  "key15": "4iwysgwW9FgsxffuQrCA1VotmbVuDNmouP9qXaC8TWm3rmsKr7VCoJUCuCkgFPvn3DiRe66jszCHD5S3aqMW5Huo",
  "key16": "shAhM9XHMLxmiAJEETNrDGTQQ3dNDS8r3dMFcEeHALpUDyC41gKVzMJwf4uTvKKb7ARUyQbq93wvv554AApLYfo",
  "key17": "5bxVCZE9z5jRWsc5QP1nMrQvTaRn4tYHHm9jF8TJQR6rYxE6iwsrkr2ZHZNZ237ervXQinagCg7QHSwCJ9fHqhdc",
  "key18": "2rubjstWhQ2FEEr2wSCWWBQAXBTtKY4mLbYDzFu1uKU1oLQ8vjgJZ2Vk5yA6AP6mnbATuXFnsCZcGS4WoZ4CZWwM",
  "key19": "fNS8MPUUkpd9FnmUkfsatrtRLa3ZMmzAaqCTebQAMDGY3pkLwefGwHhwZXW4As6ZgnoioxcNccTUhCz5BhFERqe",
  "key20": "24cAu9YBJJDPLWXbY2WDkEn4PToyftnpe2uaUS5iooU3rXkEMHTjRCMVgiF38t9mSqxQgfWNJGFwMKKS2XhNk9Ge",
  "key21": "44GNkvGN3wLFDeWeo8cuvmBkrp79L93cLkKrNFFixsMdkJ8LuWppMGCy3CHQss5ajJpF2jZHsnikJQq55REjysjb",
  "key22": "4dEUNRFFAWuRBzxwxUD7rVP66jaFzVRHKJwsyTWcZRXuKGFouSqmFv9UjEevKZeAjNASGMTr6T6dLvGHSvFSLUvQ",
  "key23": "4W3Ztq8wLuq8FKRagzqjJ3ksrVRbXr1zQfbQedguPKaS18z9KzRrcNW6UTyHk1kMm2eixUfKPTsp5Zga43q5RPk8",
  "key24": "4zMuEddbUovBtDcNpxweqHx3N489LH5McgqaFLubaYb7pGTvZm53doxTvmvh6jfmNMJLW4dJCkhyGG7NARTbrube",
  "key25": "5rMZ78cBTwHCsSKYYQye8fTZ1PaWC4TLo388jMha6ofYbwxVNdQbBhjneafSNGBeKFt91QvXJXeepoTK6it6LYhC",
  "key26": "5uN2Xu5vFFvrApVP6veNuKoytNPwkqAYd1FewVzt1HGDWVN1ZhKVd23HoSxfpFKtm2JhJ7BWXZDoxXZBLJoDGQNM",
  "key27": "4nYXEUcGpX19cgUvhEzpzN85weYVJftRhwqBmEJupT6DsaDggDUvidxUq8tubBbt6HvHTpe8FPZLcjqNebcfnxGv",
  "key28": "361eZk43q6aYFqYHERMeyCy13niK1qgbjLk1vJizEZXA4a7tBcqTyCttxskGEAYwxx6HHH2VN6ZZwFnjSQSACk6C",
  "key29": "5qvKo4QjoFzZzP4Wbi9xQCprxxHHC2bkwXNTzjuypPQcVgZ8cKUKcyqr5akc4cELQ8EKvCVhgGgMdyk7Bh55tmq2",
  "key30": "3urDt845XyipHFEe9APFicWUvWYE1PbKgeyxBQiBebNSNCsKcNjkRkp1Uv12FEAva91AYqoHPHaCPUheFKdKecHZ",
  "key31": "656dRsUMQAAepeTSJxa4XUqACct89zaBphYSeaCCDH7Ce2da9Tg9m7r73KU1BcujjXZ7P1MFNX4bjwCkhBnGNSdT",
  "key32": "2i3GeNN3skxfuBzNvmZvcxKutEHKxENafieWkhgqfoy8EuoejZ1FeVcogqs6Uq9WiSJ7F178zL6Uvjeu8mHQXd6y"
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
