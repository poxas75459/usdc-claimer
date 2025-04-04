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
    "2a4NfBp15C19Dv7SSAKeVTW9h4ExMqrzpbmAA4D2hi2as7d5t3q43NS1ZYtNpGwjre94RmRYhEAKqYZcZKbkEKan"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jD41y6Td2zpLXW8HAQLKcWxoPhRJAueffebw3pg1ynGE7EWuhpSCoQH7AL5WsBLwnuUaPkoncgCfzacyq2kQpx3",
  "key1": "2ck3pEaAH2gdhHS358Qsjwj7ykPrHNXTsKUk4hZLZHSDGjCxJ9F4b2GrXQ6QrZHJgwLa8DDoXxPYCrbJnWKRxA7h",
  "key2": "4xBDw2hvUWyVP8qZcCFk1C8HVwP4PwHe94rFqNfp5daJJKWjiXQWAS6FchzFdUT7sgJsK2rQT3S6g6AvcBxoHKBx",
  "key3": "MC6fvGKdvUB2AAui5scRxpqTT1mf3WqaH5LV6TXeA4xDPpREGXwsYbaJA5BLwTFw9BoyEvQHbranuz779uQ3kq3",
  "key4": "4bZoiuCqr3NoxXvsweV9M22wMroq1himfFTBLLoHPfqdmuuf4ud2pVXdFbqjkNXXjVMDU8tMWrvVuEVRmtFsYipb",
  "key5": "APynqAmFWFAm6UnbXUGH1QUQcFDWSXKLAH3cFzgR5wvJpB8jHrc4vj1SXNpQsg8u4QUwrAey12DCbvpkA25Go4Z",
  "key6": "5jPCCBuepnF8Z8gHcGbKXg6daw3iybWUnysqNnKKFAWs668QNh5F1DSXA77vYfkWYPMZyg4mrC1oXeDjmFE6eM8g",
  "key7": "2r7ZfCwjGKawPEF76K1MVF3pej7zCuxaGrTgpsjynQfzdoVBUtrJNMrZbncpEheR7XjtJYE2Hn4QRC4ikHpFzRCW",
  "key8": "2mRoGGp6J8SHp7uDVhubGvbqqHqWBytokPETUyFC5SjKipjzeSFS8WEK7qUdNpykqx7YFTsGdL6A495VABRZi6rA",
  "key9": "3KBfmuKpjGxFNEwbKJdrUJtkUmW9oyATZYEg5HGvvM5DtcUtWtbp55M6zrupFupnjq1dk9epkRCiEahfkRQbQYnU",
  "key10": "pHhXvrj5Z42bUAP9x3MHgD2c8YxTzLaYA7gvRVW8PKyoZge9wtsA1EDTdXgAznxnWqkdgYzaPTjgKaM9kDEgKGu",
  "key11": "2X41s5o6yofx5qciUHU4iuBRLLF74qkEXf34VqedxiseD6x3MxLqLnewLvGgej1F2jP8UtF5c899sT9gjuKXVMpK",
  "key12": "ZVVAxBWjEhWLC9dxPUx7iwbPHsP1kQ3txLKksAYcg483fRWk3gu6oDFxCmPJ8rX9hsdJgDjfxeaug2Tjohj95Yv",
  "key13": "2HBbt7A4zJoYai553PGLxVYoS2wkzhMw3pmaa8KoATcWfLNZuP8BW3vd6i6udjRPPVWZomWinHcCbfbbhBSV2z3J",
  "key14": "32SD565iRqqyVVee8Q3FbPvK9Fc3PnwaDEqdjvjTa9iGWzFF8qztV624DTohyby1V1LyqXY59VCeNw3SbeZ4e4jj",
  "key15": "5McP95xBcTkjGZQdiToiJukQGp2YgJZYTi88Y4rLkHpykcUGGaHND858Dqd2RWY7PMPCAY5NzSakuyorJEersgGc",
  "key16": "4k92HUhEFntHzXG59i8yAREcgnV12b3FrSw119xxswGbFG59gfnMJJuwEdhgtGc8EpwGVyVV8EfNnSLuLJsFXkHy",
  "key17": "31URuQnHWUxXVKTW9pHY7AsPU9DQkwsRdUo9ei3ihNNpaX5ZKVUQMiD6qGrmxWkhqp3K46r1ZB3iXWSAYSYeqHe6",
  "key18": "4Gq6tW3fRzqbfgFj4NnQQFbE2K82wmKkXetYBvRJMmyyiD85jbXxnCMMtJiFBg4UFEXTvjJMM2mP4hYbEoYU1TYm",
  "key19": "2U6hBQWwPng4Z2TguTcVQCvxBEhoCmTaCvRNgctP8x1gYxzEFXzhLJn8xuuohzR7nZtj7EsNLLU2613ttoRTGcFN",
  "key20": "5iFKRxbNWP9u8q6GnULPc6CA4aN9zZLRgTB1HPggmh2hgUW54D49HzD1xx2U4nwNt2urTm6ZErNEWgeMPLH3ynzt",
  "key21": "tdnJ8xG4Ks3MwZ4kzybQX7x2JnaovAgXT2zeLMhXeWwzPYrAeXKh8aNEiDMzqsYZGm9AjRmNbVQfZpMWoCp4i58",
  "key22": "zr7ChDunKsa64YksuTFtTWv867LNKNvkNThby1VGsrnUpySt8ktSRq3NHwQgAmksqsXphZeKHG7dHJczj9BbwDH",
  "key23": "461kofiPFiXquJu3CnSZHp4VTzib3SGjTb2Kp2aURu5Zerb4Cc3oWsp3cxhrD1Xs7LHkV2cFxFgjg2nNS81CQMYM",
  "key24": "4vZsTu1ubah3fokP6Zzf6Xj5cQf6aiYcQFte3cbyp29MXmRikXznuVRPJuFC934w6n5xG7gCMr9pSkPYaavYFReg",
  "key25": "2revUPFz7Sii353ZRLfVNSuviPT9n9VmgucAEGpvnCQhPTJ7q5YvVcWeYgXgTLwUysaAQRonBSNTVKELXbZwLgLA",
  "key26": "4NHWKq13JJC2S6prNtYUD1jLQF7D84eKb7ZFos1UU1NCUCDFBSff4nqeRbJxQV1QULvjzM5AspfNc7DYLuAPHDKL",
  "key27": "4MLFsX4feqUSu38tgaY8i373tNH4dH372QtiSHgcccQxJ8vGsTqcFnaX21vXp4aFJRFU1W8pk9FaZgg6EzYRanvX",
  "key28": "4axtB4WbKJ1WVmzEcc8QeYYUwvkhxjGrAzgu6b5Ko5LhKVDWjTb8itdveeQF6hqeWVyE9Pmiu7VgzSGrrDYY5DDr",
  "key29": "Tshig6ezPhtTZ6khtyAQeTFhnQTBCcpZjrkv6qYjKJaniDfwBAbTrtcV2wwrg1dpuJU3CWjFaA2g1f8pyBh4Lm2",
  "key30": "xEhj6s5WVP7yK7QJiDbTNgaxorPBxDAzjKhPppuJqzsPuzGoLyxdJFyZGajZTAdUW5GkV5uxs7zmSwDkZcxmuB6",
  "key31": "5SL2ZvqMQVmD4k4W4Suefqz5s2UM5Jfsh1KyWaP2FTs2iXMC6mHTTebPx5TLADu6r9pnWpC8Xk7WHLgqJbeUuNcE",
  "key32": "5u76FuAWgBcN82eseNqR33yjvyPDhdSrB6Cd16uw4njEjD6jbw9dGxLUMHeaznAXpQSCiMvgaWP4rnunRKFozhDW",
  "key33": "4jTS4RtKDYLY7JtGLph4PE1VzJHZuxCtMCyzr28mBKrfHQrS6E8PynjMD9AUr7iLk6RnTev9QurwYXZJqDnB8eAU",
  "key34": "3sYdovQrGSct7vbbQU9UZJtpUuoQDEUmcCKrne8hZWzEu7gZ25hvDVoCrzJKfYTPd4YZ75XM48WXwfnnagp8eVTv",
  "key35": "36NJvCxGmXPepmYpKTesBHrm8Zc9sUsBQ3fJpi381mNaVD8u9jMcr8UXP66uTx4j24CAL6EZSfbgccrp6S5M6XFe",
  "key36": "4iQeasokZVrbJ9dw17giTTxa9rwvk6fTyhsaRty7zhL3EJ4cscoty3bNksf8QNgTAFC7oN1botYi3W16NBqa4FR9",
  "key37": "s5sx8RUjgjsHaW3UaE654RjHmSuXf51eZ4xaiosmpDfR37dwVopBkYawrmPQXaAo5DCo7UvA2Wx8REP3QMnUKpL",
  "key38": "1hnEXy5wN4rmQKjsjf9BRYzr2NzyRDrsBXGZbmDJk4j5Xp1sr9ciXbEicE6TKofLpSFriTnJKoWJ4qXiricmvTP"
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
