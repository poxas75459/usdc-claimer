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
    "4XUHCRMikJHjj8fvLidkyqcoHhcUputFghZZLDmiw3pgttbZwg4tALdKnHT6C7TLer3oN6JYbGgDqXhn7GQB7xqG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z3RCneF6Z4enrfvocTzJ3HYZVKGvqdje8vntuVKe1s2Q6GDacy5SQ4mCPemaHbV2TKVoKc9LAHHPhHbJpn7nc6U",
  "key1": "4fYKszrrvBhmcFi6svXU7d9AtfKWqx2ki5RbftPRyqdF31SRMh7jhnrFfd38UbMNKV9XniaYYJ7F3WGaE1BPr1Xm",
  "key2": "4LRgVu562f5TGX4a5AxaewgmrrSwR8Hhah9H19kUyusZrjjmNHk5A3v4UcWP9kWsTBx6eZxVmAsj2ng7q4HaFgRq",
  "key3": "5tswHpukfe8kcVS6LoRz63MxDkALAg4B9U5niikUGxwc7YY3a6NsvkuftFocvQddeekj8VSUvCQCKVMPN7h5eVVh",
  "key4": "4Hdg5BP8WEodMSvKYfknpXLXV9t8q2r7StTsJ7vFDg2AvUtJzjdDtEZEJQe9HJgr8ogg9CiSppPvN2XxPZ3HXVjT",
  "key5": "5TL14MwTu1XqaKBCNLYDP6xFcgmwqSfeyXQK2oW7M6x9Q4Lx2NUnW1rFf1yNfzDF7oVGwgEZMjeBtYzUaSuzwnXa",
  "key6": "3NAvPwUnGP43DDT21DSQUAEQ7JfAxGk6YfT1GRnFGYNNAYuhFhRZDL8uyag7TuDDMX7rL8JhPYDiMpy48NEYqHDC",
  "key7": "41VXdS3rtkiez3AfrkBZBgE4GqdSrDV4rNqMpVcnxPmumV5SqYWd2n3crWkN9sQ2qPJ6zUeu7LhwiTm1Q3sUghzF",
  "key8": "34Mxsk7iwMRv35xmBReLcttW3rt9BBjkAfaAnNFXeFPCCnVUAxQLu5Hetz5gza8smNrchkP52VLkhbUoHFkaRWXN",
  "key9": "4vDbbW7RNgmP9frimxiEiBQbRWUhj1unSJ4x3eG1cQeArAN88iYjTrWtMMxnjFaGxZBdPadQDawCEEzC8BN637n",
  "key10": "3LEsstzNgqJoaM6GLg6dhQV51bE44benntmH3Loy2HTXqyEo87PD9QYrxbzyAdzmhygoHoSVyKcup6DuRHrzVtTi",
  "key11": "qWW8RbReC85GKUNAroNVWLpn4a1jUikDuQtwFxTrHdBVN4xTMEE98u4TmcUGq4XvuUzWy87mLdyH6yZBke5pde6",
  "key12": "39SDmFTXHf6TmknFHdkVpxeYU5UEgFqt3aRampnK1nnDs8nfdkUCxcAFtEziWH38eSnMCigeR4mL3ujeqv6EYo6Q",
  "key13": "51PMxYAdQirUV8swn7Pd6vKHbMT12BwEwZ6ZXsAyJnZTxapZ6Anc6e3jT78ZDQ5jzTMbAP4eCCLjQoLpD3LnbbJi",
  "key14": "3PgbnBnQ9ivazoxVkA1pPqRMve83AZ54CXDd48ohM7FJVPpj9rmZNgLE9ZeNSYz82HdZ5YBFy76YMJKx91MmzLqG",
  "key15": "593KeXMTEqeY38VoPeZkzRsAYq5WzyLMg4y3isp6QsmBHi7w6zzGoAwfb9PXRUqhWXrHtMRtHwHXjZKvz5wmQbNE",
  "key16": "fS1KFtjrfcCYuEvAYWsnmxD5S9joCAJajJk8kEE7YtA3kFTvrMgTzdJaXHpzWgBfdsBx3rL9cfHxAFxsnDNUzSs",
  "key17": "5p5A4u5sYBCkRyc27Xsczt9TUbLNQXQPH695hwRQB2pUupJhsBJuWPrnaMRwfzy1taqH3Hy2p7jsPyUSL8vXNAof",
  "key18": "2FQiiF5LHPgPfoKQg16dNZ4pj66FGv7E7uuEHgLmy7Km2mFEeymjZxP4jaTqVwWPWKweC6aEotjaEyqqBR1HVY8C",
  "key19": "5NDUgZDxLUaTUPL5TnxNaBR1xLdvCc3PKchAzYxJDwT24cHmURenMWSKWJTUCckeHCZCJMEFYaVVJKafxaEpNzPP",
  "key20": "3tnK5BbPvpnmDWmZZEVrZhmNrUtkeCcJ9ypxnCT5VNqKLpQ1WkjdahcB2ApG8sv1UMdWWBeniQ258YnPPxDEAemF",
  "key21": "3ULQXqVe1zchkSFwXc6ZWfxjsTwFXDL5zYNqZ8MCqVT2kwEhi5r7ZRz11GVr4K3XcQuDR9jHKbDpodVX7qsj31XQ",
  "key22": "Tpg8wWtRVW7ymoo1SSvxD8F3NJG2tQvQzJ4tnAaMJuQm7Si38hfemzfTrKRuFnt7ZCnaVT32KjqSomDq3KrDjKJ",
  "key23": "4J9yHa3cPbFnsdfu2eFMiJXi9i8rNMC2WwB5LYr7RtiTaGbaDZoqdg4DeqAR9xsReKgFsVJUD8Q8RHuHsqBvnBZM",
  "key24": "Do4LhafutRS8xjYrxXc2mDqXbvN4jCxfZPcMSbMpRRQLoCnhCBfYZ3AYTMVtGGgi9TWsSTL7t8XJY7oxcCcU5Vy",
  "key25": "3A4mZeLZ3MKghh2nED497zZDaCLb5rQMZASrZanyeWWNqW5vX6mwGHjiBv4Q9N6PmdwSHMKXLpYsBYZWPpR9kPuu",
  "key26": "3WuzsCpMGdXUjLynw1iNbcuPeLyMvGsmpTVs8XvnevQNeQE55mPNCquL8zGukwZKAMd9V3d17TJHmpZt3zD3YS9n",
  "key27": "3q2Cik1V5G4VB1yvaEpCwAdxzp9SHA2FMrWUXuGk6bppbJTDW95919FBD8P3ULX7Ciz1u5QwsZFaYhsVn2tMWWHs",
  "key28": "3T7f5RDECLwAhAMENwAgX3mdFYGQN8AhVCHrUTnAwqj6ecGv61pWk5rAk82aVLp42QTdkZ9zNW8uwTo1rUK7FPWU",
  "key29": "sYRjKY9v9LuFVzyAdcMGXdsnN2jyjnQtYBFEVrgzumqNjqa3gVnYEe11m6HMyCynDMC26ua2TVKGEZAUoe1UUt8",
  "key30": "3pniGgK9RiAZwXuitWWtXqhgsjjb4z2SNB8MGmdcZiidU7NXJRz37cBpWCpPof3zEuuoYLwuL1Pu1zrpZXcYVik1",
  "key31": "4wPLEYZrSGrqCx7iirPeVbHZ2k4iT4c45gEaDWJyzCy1ang4v9d1HXct7JDpBJkP4xdt1362QCT76XnAuZjsfM1X",
  "key32": "2ah6DVhJM2E1MhJJRXheG3cZ9sqUmb6DGQK4PJCyXuFt1FMbJDPDSbTSKaTTw4XKgpwyTaj4DBw7TociV39KwYsz",
  "key33": "Vk9D7T9aq4jAdFX4DJV8S3b61cnuPL1tpRvpH5syhW66REPiTeuKwwKgX9wKrqiRMeUJD7tNPTyT9HHbMJ2riH9",
  "key34": "672Vr9d9LW8ME3tqEE1GB64RxdsMB8aontv5BJnDb5yypHbrPqWNymfBCLQutHwcGDZR1NDgodfWR2MBJCdoz9Xf",
  "key35": "nQiammVwei15YvujnHWk7Xnoaoa8348Ez6e7md4CTk4JCJdK6CxQrwzhzM2vQjS8Hn6X6FHaDXm1XSUqeCWEBsA",
  "key36": "tbb5HXfTpsWasFRvR8P7paxZJhAaVcsyhQP1g55Gkt7ABe9V6N8FstL4MaYddYwVjSXwFRvhaWvh59jvUN2xDfB",
  "key37": "5MZMSsUMBwddbvXzvmYK32WgFndC2iVfYRWqbsEqbEsVGcPhh54MjVdPA2bEsbFCCcKdxAx7hvNHx9NuTbE2aYxp",
  "key38": "5rcjEAtNuGmLgg1ySCY7FmrzwT8iHteWBAMrthtiVuyBCKiKb3WgQL9GuEA8pe82JbPoqMbDeqoVCetSp7rtHTLf",
  "key39": "61udzzqGoEzKLsniLZ31sf5cwowxk6FuHrztbpSVB2cQrSCuY8zPivmWrS4mkCeGQsyaP2TPgpqTVvvGxBTG7FDK",
  "key40": "3JZoMihYbRLy5VoKtS7aMtT4t3EeTNn79cmNaUFGT6LatMaKSEoeMBzBcHvBmG3pfATrQoV7jGiD7bN3dcKsDwe9",
  "key41": "5dWnfPCtnbBNLQvQDthoGyH1kYWV1WXiMLhMHc6EHJ6TAAmEJBz4hkac39jmBRLnHeoMy1LZuTfgpsyj5XPBoMqx",
  "key42": "4ctzw9BoHd2hJuM1i8TBFoB3PuiiW37PDtdUHRWuCcmi3T2UxBMpwekf7Hru988N94upQ9Ts5QczpjLABrPWT4o1",
  "key43": "2naBhz62sT7QTbxLag4nGtqwUvjteZPKQffgXfyi2rdpTqjdvmwsFTM7dxBWCbEKc8HQ4EMsN4583dgRhjeesG2T",
  "key44": "BG8iJu5zC7Muntw9azD5uxtuDohYn4gkWpiKBKpYgrVVMdN7Hh5SajRjdQJgZxecsSpsBRCfLB4fytLVQa3ygpu"
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
