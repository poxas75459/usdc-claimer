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
    "4sHZc86Q5GJJiXqHofuniMqweqXvtGveA6g8ucc6SrSDE5umeQAh2jwE8iKgQD6tNUtCsUQ4NwT1HfkVsp7Vs6QU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rZFC3eTBw22jam3yCDDbqcUXfNhPM6YzhcLbbqSWDqZFEUA7f9YV2K3FRRDCmQZN2zWqqXKiWLAomYipMHQNQSG",
  "key1": "37HmEdRQxQmZjKkFt8x8NivesmVUyFuzzzLajtDVLRBKnJpYvdMWFCM6VCdMLe34cxKnPanms3UkowwiR9B9LG4",
  "key2": "4oGuQSmZpwm8qDLtTxippJkspX2ZadU5GmKNAWBTDcd4HNurYoaLB7JW6bnmv1JoxFsWU4WW3zQGrKoiR64PRics",
  "key3": "2REtMAwcgzZMvxMAm1gratumVQeL5zZ6rqkigJQyjFQ9YZ1ZRnmDWEeCK9geHdDfwL3wJJoDDLQL16Fk3eh6LUxe",
  "key4": "3GMzqtagHBfqZ8fF5zuDV9rwsGBNgw7emSdPyCgT5pz9syT1jzMhLcjE3Vk7ip2UW3hH3vsds9yuMKUrjooVxuyN",
  "key5": "4tbC9mA1YA3Ye4NKCpwksMdmv99146gtc5ETG7e5j5ZRG2VYRJRiWJmsYbiYo3MtYD7atrFZ2hv1rd76GhkJXBiy",
  "key6": "1ge7YCrVp6wNY7HRwS5FiEtgLciQEGamHo5reqzHxrktvagqg5M4mdwkND1udRM4BeaU372TKTHB2MpegNXR7NT",
  "key7": "4BVsTnwENezRBt78874S21bCTAV9q8y13roB7UnbQjfCun3MhNKc6gWBPGukVyRMoTvEsNaKfSyYkf8oULPWz4AL",
  "key8": "5K76QH5QSZqfmbee9yYfSjae7tfSkJsdkQVcp1kKhbc5GA8cRRASbK93rtXubkmuCPsY6AKRrjzpzemgfLg3YanV",
  "key9": "2NcjnsvBN61t8PK8HYtuprZcFdkQ3mqMrmwG2TPNMxnZmz4YsuCwWGRdSpB9JpjYt9cSWdkvHUL3FZmXVdinCTTx",
  "key10": "2BFPTARDmww89jBUJwtZhUzjQM1SS3JCt7srJL7ogvma7MuytFzkPT8Rh1SMPHMhK4zkHzN8q8ZQDkHYfkPbCR8s",
  "key11": "4sWjo2h6CtCHXMNpYNxDVejkZqdjVvkVSFgy8LTqmeUSDwcVbKUMYNb7rbe19ucuMJuRw9LJvfUVuMnvqq8NTAKn",
  "key12": "yNPcgwjYLn9MD3Jrw2U5gEyWfhgouF4mhs16GhNoKRhgUHuuEwmrHHLpKHrPrZBFSHPQmF4A2jgMa1KS1f7bRaG",
  "key13": "a3e8bBbobU4ZLFQhbH6f6mV56BNJzyEonTy4YnVgbzCxzERiyCHc8pH2ftWfkyNApmK5ZH58Hkt3fQ2b5BZtUPf",
  "key14": "4rtjA6ivRdeDypPXebAYfKjoc9f4XkiSgMaPES1rWgshBxXmCpaQi1yQvZXpiUShVfZM81t2uRURMTWRmRhyzf3x",
  "key15": "5pMbUZcruAPh5Jo7TsRPxMnJcanBCBDTtvF9tZf2vKaAa2vBPoVfvBt6tPCaHk4H33qkYyyQoCECSpquDoYCYrjN",
  "key16": "2AFz3J4Vh58Bjb6zTDFgJ6LwZrSDUCskMSEP6QvmZFF2hUsVUW2nPwFBENANV16UrokEjxvuYaLzPEUcrowbjWjU",
  "key17": "5hiSdXx3QDV2gUTaqeyd2EKjnoW7mFXbMw1ek4xT5h6zZCSh3tFCFVw1EHVdvrEnqavR4pk1JjLR5DbNrF54HsaG",
  "key18": "43Va8ihDqTo7XDfb9L9uCMCSREe36Erb6YJqbepfH9wPo9w41oBhjbndKKL6MhYgm42BVaa4KUrbXBPZgq4bvu1p",
  "key19": "4kjsu2e6hSujWcWYrQTptuBQAUra7dBu1Wy9nBKvj4Ke3NEvjBK6o8VCcEAE2FAZ4oioHztmcC9dXu7krbePrGJb",
  "key20": "8MW4v3KSCopyqSXk1CjuYvLhEHReeEPtT8QZgtbMog5JHsSMszFiPG15xCzidZWK3jcd4hRTYeQLSCgtxBphFJi",
  "key21": "4A3Y9Pjs5iX1du8FpuxNocR7euaMV7PRJMij3kae75upg3m9Q5btQCuAd6EkwKDHXXnV29ZBgvQEEhZp6rjQrLxg",
  "key22": "64BR3QJKx7PVtT1pxeqUhp2t4rLqYbrXMJSEpKrfd5V6jgcMr6ExoQcHuTtzGDbMJhNeKt5vaRu1G7oWVy7nrtbw",
  "key23": "5y1ur8UQPM5zQrgu31maJvaz594JSMT1usiwdEUksuwCxRxxUd3RGdWR9jLEFeS1b6WomHgcWsYG1GrdZJF1ajKo",
  "key24": "CwfcBzuvmYGv7E876CQKP3rDqRKEBLc5GbPG6BV5d2up2RbZxMmMzZYtczY7kqZ76tjBAtid198KUoRAgMEnT1j",
  "key25": "ZDdPS1nYppu4VrYd8U1Z1kLGNuPx9SQk7mBYWi6MBEzwigrnPMaTSGNE3zZJqu6i8VsZsDkikc4xNbevgE5XWrD",
  "key26": "4X7QCAirmqR985D6dnnnkRBXFb9pRd3RHNGPJ7prT61wqoinN49cPb8WJCCysk2DR8YoS88KjLvEEv1WTFAh3GJK",
  "key27": "4oY6tpV1XJcA9qFrWvgjPEzT8Gz5g43P3h4LmkCZNy3R5uyAoumJGqcc2wTSi9dhSPeYrPN3ewo58FMki6r9S4Zx",
  "key28": "2C2vgwcrW7CKZ6Z6PBAPM51sK71LWAxTJwJ8pBdmaq8N5pCGP944xPcrbqE1De4z1QSyvCkrfC9ZJ6SzAvjP1tpU",
  "key29": "iSyrW1iBsv69Lm85bGQTHzfiPJhpKeEiYKbHgKpV44HAnyGms98ct9HCt3MQVBKYzoQaukoCQmnTZmH5k3QEhnr",
  "key30": "ipFNbF4fcd9ariGyiYduz3PBsgohuBy96mPT4P5K7K2NwNUCVP1Nox74K2rRa98JjbMpR4PKfcyABoU5ZSuN9a1",
  "key31": "3L3qziLK8jDrQ1oXp72tQhj6NGugGTZbHarJqCu6qHFN3UuJMkZrD9GsJJDQKxSvWtSx1dFrA3e7jgGdEgP4mvN8",
  "key32": "3Sj8of1kaea7NrE6DNhEXKjtuV1H1GbQA7T3KHQg8yy2evjA5qD9bP8ELCw4ocWKDECtxSRnK2NAsP9n7ffudwui",
  "key33": "4sH3AUgxPDMbXahC517gqJs2fVevxHjtufiLdwygqUMHdru5ML4drcEXyTzfK7LC81NQTcwVs96JHvxX6FhJocbx",
  "key34": "4GUGhX8Ni72mxCxnzPMa1Y8bk71qd2WpG7MP5MewiZuGEeak7g1r1rkfRyySbkummKbdUBysLNnHE3bJVmvYSznu",
  "key35": "5jZAiJipf2VoqfTh79zeaUTvMXroFoUqNoZS3uouJtrHX5Gh3s2K3CXcQUiZwSgamUywirkhLQ82pdT68QtbCZES",
  "key36": "5seR8mzZEwXgkSXSQVQYmpt9JDNEHY9PE9dVHHonM8SqMFBcFkEZAqUz1RCF5UVx8WFtyFS9JGvLDra7ymADvnS3",
  "key37": "3WiDPGKKWjfxPCf83oX5XmqUCSW1qjaBaXYvPKk66HH7cRn9YE6wMw89UXxYvV7DYB1YZRifXsqfwnSoc2qhV7fy",
  "key38": "N3tFwKxcQtvAXETiSo1hXuo2MmVhatbrawv9copYvriJQ9fsaSDNiaoBSmtwubPoahjD5SP6c7xneMhN1e73nwu",
  "key39": "5xWTnkbhjPLPMwwjY2Xavg2QJdigEtpnx7cndwgCTLHsWUvuDuhpPkZTCSw6erS3j8CqdS6C2xmcU9PFK4GSMi8c",
  "key40": "35weTYyfLcKopxeqjvExc5rUraRaKTgSgN67vaY6nMcuQSvvCURkvYn3LGGsuW7q4BVeh1aamzDE9P4AiNtWbA8D",
  "key41": "3daxK5mkKmYXdFQhSsnQSgmmo7skLeUYhzTXgkri3JxmgrHZ8m5B4QWdhRmQuyCJdsiezoj8igkNeMCV6wqaabAc",
  "key42": "34QecXmZM9Fj5UwCMJMdMJPBMPWHdHW9hEPTPt9bhZbbYq8BbGv7yxoZPZUNGsbZvE7Q6EVkFZTT9JcpL87J3xc",
  "key43": "3Enhk4VeK9uuUuomCRUrdKAbupC4gH9KZYxLkK5iAWfYi1iBS5A4UzY8N5eu9Et6ABa63KRi16hdrHDkkDVdEXJy",
  "key44": "2sEeSwftJSFne2DpiKY4YsMTAsvSCzFNV5JjjNDZZMX7EYqi8FncmT8Fv3DS5HTGd3oA7WRW4g5iKr7DykqMK3bd",
  "key45": "42fZstjcEioJeQH9CiPZrmc7vaFx489dbyW1gTrc5J2ouSuDYPdMH3XKp3Hi4xufAr6E6xS9QNst2Jr7FJG7ygC8",
  "key46": "2ksEfMdVKUVkCwBTneJ3qkrszx6fYUm1fDyWNSAWfWFJT5pepL1X6L1fiXnc8oqWhQzAiWXDUYfjsdvZsxsygUTS",
  "key47": "34nQk79QLoCeskb5UCv1A4GGQXQ7i67u9CNamk9WPx9EB6d4qjvYnv7r9vz8qhhgh8mBGp36H1JwYyfdL1Dtco9o"
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
