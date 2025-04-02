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
    "5uknEfJFyLNQ8KvHw3iKhD7ognVy5oyBZevsDDt7j6WyXacXPMRUCafQ9hmzdfAN74sSfZmxFEQSUdcWKNz43dvQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qc7Tv9Jx8pBbXbb5nmsDZoMkZrb2DVdgcU3ZMtFkL55tb8EgzsPxQQFmTx3mfACBxJgoBcjE1bN5NQgfPGWFy1y",
  "key1": "29YwtRieYUhj67DZBBDNBeZPXgfzS8kwQL2xeZuxuLDdLyNQku7WWRy2UCSC4XWd86AmPz7mSYgUExcETg5wQA8v",
  "key2": "32vGEFYb8YU12FaVdpdwsoW4o79JZG5WKcqDqk9osUxP8P1gs6zi7jMNkjGjXYdxZBLJz2hTki4EKr8xmmcpPhXj",
  "key3": "3h79AgWKN4opjeTR9seXiZWGncgLeSqdzAkY5zvySCCjKsHYQYwgYtt2azHyDXw6RsgMWGy3UJqdMYoucinyqWuP",
  "key4": "2vyMLuoTUd8zyk1rLgjYJZD4BRD4w2RdYM3vRZtpcSUysuCT9ZAy2WPTSzKz9Fx4zwjbK4Svug22yypubvLi3EnF",
  "key5": "5msnGkDPZU82UeNVodkVvqwVCop7BtaotptXwhSYjD2P84m1ocHjRNCuTzWTMYpg1WHHBzLaEX8APTDffWK6o8Lh",
  "key6": "124M8Y7Hm97kr7DegrZTByaSBtepKK18hXXnZ3ZtRDpN9mVWgRuCexiwjR9VXRdbDuBjNfSmXuvyJ8ahkbKiHPq",
  "key7": "5hbLDpdbaaPjoFdL5gEJvKS1humU5MLTNbRMBpxnmzfzkosZMrBYzchrwjyCuwksmG8P36EpwpJ5Y3TBZwYufqMS",
  "key8": "2MhVeZU46SoCd7k9aTqCd7k83z3WySv8Gp4wMiU1dryq6HgXUatdy8A6yrq9zcxWV9KHGMXXFNeVJwZAVgQGtTjp",
  "key9": "4hypZ1RGs9LUNT3ce5H2UMNR8R5osdJQFYnmer46VK5MvwGmGAq5NU284mAtMomJoh9L3JHPbsdrpGQDvVXHcz9M",
  "key10": "4qB6vus8yqD4X6zNse4k4dPR5RRBHsGsAmG71h4hBjdt4GdsnynozNAGyTMcSzgSDxLACdNVbgT9LwAYf1MGsnFS",
  "key11": "5T7EV2Vpw98Tz5JXzDEQgXMNokXbNZNwSzN3zxzihJTb9tDBEGryfTexY65bDt5Myi9kbbaUweiB4Hc6Mg2YAb2b",
  "key12": "3Bdw9torynpdLFzu6EpeT8EqrwdRnKbaFrhFWFYhcTmDQuNhauANQWj4HaDUaSv2UTNW4LcMBTNfAPXna4KjJ8Ch",
  "key13": "4A11qboVcddZVwLpmF6eU6bpsUy5jeqGW9XHAs5oSmpMePn8mn8Cu49N23RLbipbYTnHmQ2P1hsnK5AS97SJHeDT",
  "key14": "5TbeNYFTTwG9bdKAaMCUBmDF1Hfft8szX2B2Exv7s13jccxoP1YUDcAHvRhN77P1FpmNoiLzP7NdVvchd1BguqsY",
  "key15": "5wWsH44LCFEnqGsrissnZ1JJnpDWgtHjAjurJQjZ93F7Do3RnCAqZpPSh2VBrkjthYWWz8oYythFwGELnDZEYLRM",
  "key16": "3T3bV6DMi4wPjPkMQgteh6CDRzwGiAntK6wYFj5gvypECogXue9QGXubj5Hks892Bzp23psf3dGt9GmWpFyyVfJy",
  "key17": "5hRD4qqj3baHthRKcPYwPDqqeM86vpAyRLjxEbiHp3YsyWGDFLdp68PCy2XmkxLD1S8f5S3fdKo7wMHuVBwi1Fop",
  "key18": "22rpco3k5yPrf6Av5vw5Hs9RkAc8X58nJa1TAesssmVhH2gwup8ND9qdNNECVPsEH1hQJggQciMsU4CJps2DeBEb",
  "key19": "4S3mb2U86G8JkK2F8XAuHqWRad17d1uDp1b8fGue85ZAwGuHYFCstrP1YDJHdvgP23KMhS7bVKwfvCV7jRRL54Yf",
  "key20": "3snMZ3bs39ZfQ4JziMZujC8Swsgpk8JSMFYH5MWQ2mFSsLafgrasxM2TnBn3jT5pjEWNYAmqMiAam2h234MRN6fR",
  "key21": "2iQkTF3SGXEo1iZTXaxSWKoVWhYymYZAqiZi3GFrC2ZMXSW3mzWbn63JiWx4AZeuRF1fJEp7u5kg3R2vT2kd6Gao",
  "key22": "4N3Ftk1FkoD1pYGTt9Wray9JE8M3MxzcY3UQqP8ZMkbMUF1SCNEjjMAVW3FqRWQHxrEos34rdw2UJ6CE69bBcAEa",
  "key23": "4Z2fmtJqJ5x7f9v1pDcxwtQxrof2GNxn7osWYC8GMrVrwGBhNS5Wr6uBFpEXEq1JySa1KiYpxfHQtg2kmfUVihVF",
  "key24": "Y6nXhd7RS1W2ZdAhLd8PZ9q1WJaezRouUxnTbkTmMghfXVu7aZL37Z5kGkX6327ebMRS9uveY5zbuHPJdzcRFws",
  "key25": "2a7o5Av89oJGYUZT6E5SrzKP9ZxigHUZ4SnPRDLaaYY94khyBCKDDiTwQvDzJss7rsTY38h4vyqxgDVsRFE9HNEp",
  "key26": "2iBJpntyEGKBEVv2mUeZ4g35X8zYENDoRAYJMgC7fRdFgsAtzF5yV54epqcKfUp385kAfgkRoqNmkYz2cBykY3nd",
  "key27": "46LanecYPHPK6Rm8Pr9ueoAw74uVPHMg396xoXNQdbJQGTQT9LsqiPdHu5K8PzNYYvz9GDp1HfFQhAR4ZyEJDpiD",
  "key28": "5V4b1grRWJgPKdUyJcAk1LZ9zR4pacZez2vN7ahto8dRGzBNwre4k7cZtKZSMtc6zPf26iEStAvpoLxvaV8fGQjM",
  "key29": "61ZZUCBi8mD732arga7Defy1ba8NzVpwsiKNddCW69KjWrwLMJt6HjBCa2b4SUQQ5amyJKZugP8QYaedy8qdieLV",
  "key30": "2HzZZjMzzddA26GwEeUAuvCRYuwvpbgy5jUFcY6ZcSnMfpKgofcpDb8eim2cyYHZmGU9d5Wrtyb8uSMqTmSbCRRD",
  "key31": "5HAj3webM3ygHWLvpm6ASFSJzE9mcgHUJfcxdzuA4iJRMUrS6Di9NX3E1UUsLsRhc8oi2B6g6bpbJxKkSYRmYYxf",
  "key32": "2r8ssXC3J6iJttZUtVwUhpx9fGob1q7LuQQ7y61bXtwAyjnmtdZTWmguvaz7RGvuNEPh23up19gQnRPqbUDWgwFq",
  "key33": "t4aQk3LtnVUEsc1R5E3iZJ1FpcZrKDNYwVtAuLxz6RrJ45tsd83zLmnScVmvJ53eHTuisHeaGE4DwDrL1B5mEVX",
  "key34": "3K5wrerkx2GSEHLxz4pczHmbJqcHtxhdQomNsNQC79JDY5nxX969rVN9U62wF4AQTVj729ugLKiEV4dnEe9FseL",
  "key35": "4YyndVXKoJedkuk6aSgf4WqYhaSK56XCHdMreFGvSdir7PYSBAFkoV2i5VGRJBs37CMqvy8oVfNnW4qyo97Lfqro",
  "key36": "RgMZ5rQpjVgniUChu2E3QL4dEtsFdWM6SSpGzuesenK1UM2kM6a9UEZLcyUz2P1DeZccukje1NDY3taUYkLxHRL",
  "key37": "2XsuPS2yxSARWeQqshn62BeeZBTqYVc4jH5gczM3yDmadQiyW4a6dp2zkGfFk1B3RDe3MjdeGHM8enZo4g2d587C",
  "key38": "XznE4M43ftJg9XeBytXBHJAkr7d9LuWMCAZeF1fujJdtCzA6prZj7pZkM7aG1sYbh5tHNyyjEcGwgo1KUgN9hFf",
  "key39": "3svUBjvX3Jwbe8X26kXjetUKqxmd5XHcmBvPGYgfF4rQ5mSxE7Z8esPPWZnCuFWTzsv9Rc6r9T81hGi5dgqWhKfe"
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
