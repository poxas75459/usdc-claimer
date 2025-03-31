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
    "2NozJifGzz5FFNd87VN1Z3kAKeiNWwGXrPnwD3mNwssGrkNtZierAF4sys8gri2vCMKy2K5LyDjMPrsR4LvAdx2b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LCw9FazWuQuZibuAtQttUx7wVaGPt7uiqJkHV1Zre5hrnTaVPePJbtrJYukvsMEpvgiBJYmHXyVLdHYvgz3UXrN",
  "key1": "4paXHR27frRYmDyrKgua28moSn1SZTtLcarvSmimPYrBLETncpEiHoFNEmSvY6CWwW47AcWechqbNGWktQfDAbAs",
  "key2": "2v1qG9XfR8TFTc3G29nvnEreSXCSo5Ufro9n3HWUT5nohicaKRVb6tNSyAYApEqxwrqcWc87Fgi943AGPU4BDSXn",
  "key3": "mj95UwDNVeNaTg4kzQC93GDmwPX7KCmYfzz1ZA7DnAeaTMa4apum3e5jR9jGRxCjz3mhiVxCCgZ3Bq3wyz5BRbz",
  "key4": "3mjVyQ7YwfAhPb1bR1GPU8HMohb9QKoEm6hT5HQWekGzR9HZFc5Wyoq9NeT1R91Hqhq5kc678cLDgytrwMvJDsFa",
  "key5": "2Zw48uub9qGpfBiQeeiGX3Mpv43dnpfGV5fJov64uuifb62w5nnXHErMZZfND2tVgYRwYskEWRhpAuoUdaN9YqMC",
  "key6": "5WWPktxADrq7UFKEqBRgHDW7od97iNT1uNi1SdLAY1aF1vdWvqy2c9JignApR5dmiHUAt514hPZ4wSaTbhsaT4PN",
  "key7": "5fTJepetYjyTD3Lc6kcpATXbfcC7rLrgPaxBpM6F3d2zL2i9pEmqNofT6gEEzKDMHuVTzfu11P128YohWoWxzNxS",
  "key8": "4xuoTLhpqEz3eabE2BNpMXsZbvUbV3164LTLrVu4hgfFUswGUiqbJZcodEJu4GpNBA8DQekeK8bjc2yWumK4wdkR",
  "key9": "FYjLVWCNU4RiF1bxNvkYYrVw1TZUrwGJYAb4h22hNtseqC7cd65VibZbeLXTfGX6NR3Nqp6ASSNBkzD1QaXbSis",
  "key10": "5rssBmgAtcm5EjNW3GgeA699iow8AsPtR5SevXwqGuVJuGhAui5MPpP98iHUZWq5i1Nk8cwjSt5Sr2svf7ycTrMd",
  "key11": "2h8i2HiRNeoDAhh6syFhNFR2Xc2ASRRGyroi58FFX3HkGqQwmgG1at1XGvqkUeCPrwHWouav1FzBvD2qiMeXfumS",
  "key12": "k9qzKxVHEAGLFqhS77PETtMbbJdApEKE8oNym9hoyJDFWC4jLuHRgc1xQK3yT1KAfj4iWMLJ7Y6UQdeb7eXjpzL",
  "key13": "5r8VW5oiviLtG4LEHTVe2NnfUVNKAhitmuL546tQQfnjyDRA6qNf9zq2TEhr9FrJvLBeAhvZfQEQk4dGHZ9sqCgR",
  "key14": "534dDvX3GpUiUYS3mvE6uhHv4PijHhbz13R3Pf83RBkYGzzfNijAyX7kucLuUuyZP34edWWnvrc7eTtoUCmuwgVW",
  "key15": "5TCGQNyCrG8paUjXyxjvQiWLvMYeQcijT9vmUkNMN7fnENqkFmN5VuVbFbkbp6gNiwxhzib4eWW9GworQrczVr57",
  "key16": "3KkrHYDsEG6sStyBNRHUu3hjoN66E5GfNxp4Aj6UkWxvukZjQx5482ywMwcWFWTWxs6mMWsfogmawsM1gD56bvxG",
  "key17": "31GxBqzGYL7Ry3SxgSuZXUosLUBPE6Ax8N8faGXJR8aLkPpYJpYURzRnYzYYEiqALGyDsqf9E4AiWyGYEkHwEpHK",
  "key18": "2NhbBDjKcqKnFjQKncH9M5stEf2qgGMyWrCJeFZFttGP3YhrXQBf6gytmrX8TSw3MkBQQuVqQuwAE2WoteWb8D8c",
  "key19": "21un4g5kNnAb89ZDk2kuTFWpmX8aCfS8Y3yBAtNhEwDE9mDzBqzkpz19RJ5AYsMAmkj8vLHvQsE22WeASQmtpuMq",
  "key20": "v4ofFAuoNaeJWGcQHTo7hhxtkbCQQm5VatQwKQWbcXAPbdmAg92Pc8HjzJu5bPAHV1BGxtyGrHhwY4yiER1brEs",
  "key21": "5nwjPc1HinFJvbGziGrSPvVYu6AaCa4b3Jc7TPZzfodhjtMUK1Fyza6wF4ULfGJX3K4EZFbpaDtC1nBcpd5zPi8R",
  "key22": "5Jbv7rU9g9MuF6u7YDJt5TzB12pmNTUsYpXCKrnApNrNiksA4soRtXYF4nJ6GbLvA1gxRZu8NTxXhzPji3WDW6h1",
  "key23": "46daqVFNQY5GVUMmZkSQ1xJkV2GQ6PQ5nCujDyqDiSajnZfcbFjzYwpgoUJyMzCrLwS8wo6m1JzbGJVUYNitAmbs",
  "key24": "39XfW4bgSSgUwBJtwdyBxNREGTAXE1zGbhJewP1HLCZM4KX8EnqtqvGxjqHnsEwPAEcsxccV9EmoKfXW86VRncCB",
  "key25": "4FH73gNjeDsGmrugo8AXuG594yFYqcomPtrn43eAPtfu6yY8zcS1Hioke7Ec26EH11zxSciRTEoMRv8VZBEZLEQv",
  "key26": "5eRbyoqUcqDw78TACrTGAShSUsVDT7nLDHcJAwiCCSEAMBa3UmSyfjpWvdKLFLtcAMJJu72vk4dMwLiEj2bEAmjm",
  "key27": "4s1mVsjDYWUqwVgqnYts7Behp1KTDv7boLw7wUTyLU3Nxit5KGhCPKT5uwidsqLbTd47vEUdEyu3qfHeVcsXq4h8",
  "key28": "vA5YBQdvaxSVnBw5YBURLtULtUodJhD2JHczScQspfXzy4oNwMXgYmWhXS1HPZka2KFNqJQ4TJK3sTDqpwdFrRW",
  "key29": "XynBYtPyd2tpBguTnNTAEV3CwthjhUjeVQpvg1iBP7GfC5MmNLEYppP64Yyev4WN9D2Lyhz8E1aDXJgQZrKgpgJ",
  "key30": "3rs2HNgTG8iohT98CxPAS7xwARCg16Y7YqgFQMvbukL73QoPdE5PqFKXN2wS1KEXoC7b87k3vVjM9qnKiYsLAMsH",
  "key31": "3eG53ZgWRzdrA6gkJczoxz1hD32hJmnqMjUn4XTBbppQ5xEocgZ8pjGsLLzoXy3oSFRLg2By8E9JPBN2pBD6XS48",
  "key32": "4c6TR7gHffZd9aaiRysqHp3GpP5EYcAu9vYrBC1dNgF9jiADoMsnysgAzdZCXhT7TdiuJVFsPcH7CTjrT7m4My1B",
  "key33": "61QfM9ug5n4wXoSzEpAwSsWGw2RZrXrKzXXU8dqhGaoECJmov4VLuzhz8pkeyxV4Dtp8epxxmuDHDAABrUv999kY",
  "key34": "4qRkjughgK8vst1LXaGcykG1jsjDQz1pNjXAf7qhpVwTZNy1QSid7uJb6z3BE8tkSbTPaG8uBCugehTojxgog3Dd",
  "key35": "2Y5rFRt5BL84uNPNeeZZZ1V1Sycua333mJoAhgNqmSpmQ63ZvKADWNyLsEYQgdrmF1M6GSCscM7Mg8dyahXvdtov",
  "key36": "4HTQSYHXdP1jjCnLUnkvAFE9mDWPnk29S9BNGtQiTBRPua2DWzf3v22M65k6drgnD1dZLMLUBcxdLwusV96tQdHB",
  "key37": "pucv37bxLCwwQwhQ2D5xZp7C1U4uzCajd4sm5NxDcC5a3xWq72Q2fp9JuPDJi5rQ2bPSAWVjZoDkvjg9yd776jx",
  "key38": "2ptaLm1QHgtw58pcL5dKbPQkWJAA3XkKGocwMRHy7xQDnVL3Drs3PA3hz8ncGNUwKZe4SXrDTKFZaY61hR18cVCs"
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
