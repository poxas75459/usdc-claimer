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
    "2mSwgdpRghhszHS2H5Et6DnExDQoLcD1mokpuPq3erBKNXyLoqMAUPUaUitWWbXt8NZUkhv8Q6k1tuEGf5dKFy2x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yE992fBrCvFfMnbKjictAt4zqTjgTFTUUG6QXovzL8dhRPcs1aC8KhrQFsa7MD5xagug2BMLN3iMnghynkgc2UU",
  "key1": "5tkZktV9ksZUgPuEhDwUwRqxChxYqn9igdzMCsuDbKJK47Hvd2VqMrwsvBkC6HzEPj8Km8gbrPDYJrMCwzCY6E6V",
  "key2": "24VQkP4ZVsPxoEzg21wcLLx1hbPFd4v2dQ7mtuEUi9315oSSN9Qz2RxiAGtNw9KEm3P1yJCa8yMWTp7NseKaMszF",
  "key3": "4PYbXJha9zvY3TQ3uGYL3vQVCHDrGsmDdaM2FnjUN1fEJS71KqqxC3j4kTRx8GWCdHTYFBThmpV3rF1NrVC57j8U",
  "key4": "5cJEhMnBJeV9qxgjAKgh2eJJuAn94TftSFc7G2qjuNVhbmUSJMpnChWkuEFooCdSuyZW7qTZvaJAo7Xn661v6AiR",
  "key5": "eAvubGHBACPciJEBcvsUbdn6U7XtQYHa4iMfKFQ52hcHKof8fjmdgZp2drp5k1fahjQ3tNhCHT9ocZyzqxTyTpx",
  "key6": "2UBPCAgg7jQvWgtVH3fRMTfY5PAApe4tAHHoKGWS74Z1gFpw1kvKWsGXyi9WAQuePjQhX24L17HPvK6xaHc6wG2j",
  "key7": "27An8ZMERSirbLNHLvxysg7kPG365UvqVQqDDfXN7fLZaiYLcThZd3Mu38T3zdako6zeHohaYE3JoPWuYYKtiJUS",
  "key8": "3ZRCwZy9fHLwUf9bdtLise8RPpmwdUHR4XqDuL1GrUqswgafhoyXm19sXfBoS9DamMtN6tdu7xLX2Fj5W6yd38vf",
  "key9": "B8i1NjmNgAkqqJLxe2GFTj1Khuebiv6H4e1yBN4P4uN8UG4JVYZ6mM9ZAZz7DPHRaCzHuhQMhcxVrBzyrV1LPji",
  "key10": "acJn9X9F8q8nQN1t4bLATh2VvtfaCysYWs3kq8PyXRrjYqoz4qwWKEdejMsPfFTpFv3amMzM9ygEhbrWvJ9R4t5",
  "key11": "2Aso57gYgz9XkFyyxFsFA9ChsAFaTuVGJnoxXm1rSpeaFH1czVodxysznRfFbDfVJy1onjtbGRSsA6nQ1XiVKkVV",
  "key12": "5hos5czHhfzjmVsD8htfMhH5JEtDJX6DugCx3Bs8KSoFzzLsT6BFew2RJrQYoym7FoZ7C4pugUndwBZ3NgF22sxo",
  "key13": "3eknpb4ZsGnoTSJhvAge4fdYduBhtSWdYa2j252XD5AvYpMsD7DEWQVfymM7ALJdXL4HNXmWEzcGtmhdrTY3qbtr",
  "key14": "5o5nkHVUQ7aYUvpkQ9X58qR3V3262pM6GaBnLyYM2iE9SV6eSiBvTSx8gDXb5LaYf4tNfRE6FS77VubsBSmc9LqX",
  "key15": "2ZKMaMA9U2DZ5EqFRVeLT2kr8dzYwHt4ETnuQG6xiQPwZ3hALVfdxzwem9i6D6pcAmM8gFB4Kgdvir2CKGiTdAaV",
  "key16": "5ZmzwvPLjJtTSunBxVZu51jQVgAHTdRAUsogXH57KEiLdwDc8c5bgcz8dfAs1AWnA8SgopexsC9ZBwfHz2Tv2PF8",
  "key17": "5LuMnX5kRga6VqTXG7DkiiFjnnPJSTNXmocRv6yvTqCCQEDfQUuqQDMaX9zfjogx7RaPhtMKbJ3U1JLJeLCw1uXQ",
  "key18": "1ZVYWNWmvXW4wp2JyrDQDCo2kr6WormrPX3RkhqhEo4vnsu6fehyTYSSp1sQDEiqPqPNJeqDTuVEGM44eoX7Lwk",
  "key19": "KmwYEf9SgZbb438vP6SH88Q1ZX9ZfBeYGRnSsvA55iXrD1479PQFfF8w85aXksqzDW5Qe3KUhB1e2yMABej3Jh2",
  "key20": "2idcYBv32KvwchAWfBcEmHJMEb4LybZ4as6GZFfUrmDx2mYwGXm8orLUmwBFRCsAwnUPLYugAK77yMtWc2ikmYVG",
  "key21": "7BX8WqqTyR5RPa4sqoeQAtWt9nFFXww3HuubaP3crTZtHTquP7rVPhxE7aqqsZGbGiC4D3Rfq7gcF37Pc3motsd",
  "key22": "3QH3874CrztJ7a1iyN3q7gcLjdA3xkrY3h8nAdvtMKyeZHAuDktbRoKQsvZn3VtZL46WZ4GPVzXCNnKUpZ3emgSz",
  "key23": "ZD52x2dt3Wfr91zmJDh7FPGzR4yR9ayLCFHuPDeUzNffPhvmUjSJxfEW3tPekV55LsfnKTviN4N68WxEYFhaMXB",
  "key24": "2qA8iuAbPPHrZPPQm9PojCMqZ4hANcXesr339JrKDiCi1BF985aDZG9qAVQGmujuSsFf7aRkvMDxfd8NdAihEWCv",
  "key25": "5AyyQ12o1ym8k3HG48Z6Bea7kNiyLuufUCwCqNER4DqAn2J25d45RbMfoqjf5pPtRTpdTnTTqw4df7hLuRgp5pxi",
  "key26": "Bd41CaZWzadRYY2ZefN3AfW3S827SYSM3mGB2F3tFeDrkNHbLCeJvaNhFaKjWsFcUkg4SNjvfr3HWpiyKmANwjG",
  "key27": "63WtdWo55hgb8Q2AF4XTCWgwYvnArrzRstHKYHsbqYXwFgkfQe8VgNqBozEz193PEtzweLjHqvjcPVzhdwiiCqQc",
  "key28": "2KuWQ9tB55u3LU5PtWg7HnktQah8qzsYakhz5pouri4wQwuWAkYhEJyd57cJL1Ko1SSgQiLTzkXoixR3qWraximW",
  "key29": "PJz4zUf4ewatwQG6of4MVbsWFaoNoc2m4vQH28dDynm6WGiLAGitqFvLArPjs1PsDjVfowJjn3NK9p7iFT7sn2A",
  "key30": "4arR4JtiGmbPjwyxACA9g91ah155y3zdXLTnE35PqHxtMAjuD9sqNvrcPxh6s5p4WHZ2ySyJHk3Pu9TkEa4Db9vP",
  "key31": "2smC5JFhuXZYkzeVRCgToVSHSi6YhVFSh8jMBjNWqDiTa88SSUnXSNJ3UD2DBf5mzpjNLyZbZrhmSHtWABAeUgQo",
  "key32": "5cvHMBHA4A4ujE4J2umVBUr1oAVQhiTMnphQFKvF39mqtBrrpRgY6PquVQ4KpaPbAWGUR7Jxkg9eyx13QVmAgijV",
  "key33": "4g5hA2V2VhqM88nxcgArM51fzYKAy531ANFgDFqDHP3F3K1Skgbbf71PbvyHPgr1dZ2sZ7pYNVasqmZQu2xNWZtD",
  "key34": "4xDJg19mq5WxTXK7fuSQMT1fTcEjE8Jxfc6CK8dASKsdy5ZPgM5SpRzU48fkJnu51zWbtYdsJ1YGDFu34GvuM42M",
  "key35": "5879J6XQQRDRkP9GRwFu5kEdt6SvXdaQ15kXECojtqptwy1bXezchNk6gD35JTqjwkjze7PJpGrXaqaZJtx1w2uT",
  "key36": "5eC56k4fxKZPFVNjqArJYpnTDCbix7XgSRrZQMibyzKNxTfACCLQkf53R7RvAGfuA9WWbay5PomZHDK9FZfQVweA",
  "key37": "2bLwuR3UQVRaginC5GigBdi8RqdU2z1XZSw2b2omFwBrdVB8sdjNp2udNt7xRipJPPYdWYv2CxKkGAF1TA2U9cRa",
  "key38": "2QX8K77WyL887qd4SMcoLmwZBtBhonedH1fQ7BL5opyBU8hgsPsRWGWKUNXLC8mHeTqkjVmhfjjPirQ4pMezhXSR",
  "key39": "RVDaD7avyMp42pA9RUku8cdPJ8J5pKbfJaauT5BbCeR2cNXZUiWvKZTcPnGttUQiDQWuudafrT1WoPxepkpzh7K",
  "key40": "5RVy2gNo5Y2ShVHeYFDQiQhbdK4ZegYYxYzGJqDBDFansHv4nGTJpqfAYZNEf1syTY7oCi1DJnQV2pggcf6Czqua",
  "key41": "4qZasExpywPHBtUV77L511VzmSXmHKYzDZzcrTUGeLdHDHpknP2vZsji46kzHGGg9zpyJBvdTe5eBdrSsgaPmZbn",
  "key42": "2huz5J9dFXX2VR8KfJQPZCm6RWXBfZjv1grmzNX8uKjvKEXXoNBpvgauT1SngdNxjqd6gjMuW5dLUycrziMeG7Nz",
  "key43": "3g6oxQVo7CFA4MJW5mSKFSDNyHeZeW8YMmnYwxjH2Pmd7rBEDaFKSsLX5PsnDSUNyK5SXmpjdSmjZ2tpq1GvCWXJ",
  "key44": "2sCj5jUmt4r6MSujfvxWbi3rmcEcmijgQuir4kqjLozfaMbzDApqxaC7QpMu22oVTXHFoVr6oNWDeBQdguqhpX9z",
  "key45": "3o13Wr38TjW1fay9QpMCvnQ1BvYZ3MpdQZ9u3BY9yu9roTzsCVieGQP5zq1FeGaoYZ9wSNnV8N8cjMAuS4RxxyMe",
  "key46": "4pd38qnxskjTxCf3kHJH5QgxAPFBJTReoazTES34g3XJpXMnNk2pEgoczd7hNRriTPGVppDfwCg1nABVdZeBtLWX",
  "key47": "3zu3FoPfVBvKFksqgNQQW6EEQHLEDyPrJ7c4YbkLAzfg1T59hqWxrA3RCF8StPGCLYaJsu9Q1ZjPEcVnfrkfwxW7",
  "key48": "56nFrNFvUVHcVRjCGjugmhKF2CBrSCLthubJQGbkbZV8DcUC83R3bF71zz4BmRpwWZv6xZbiziBFGAgg7Jc6evQo"
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
