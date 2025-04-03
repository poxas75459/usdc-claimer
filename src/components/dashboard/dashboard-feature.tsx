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
    "59R69YdCWGR7KnzVSegMRCG3SFPWPxbLhvtwSUwNGc8XMEnRXUTD4JgF4CXq78Ub7MfRnqSDrbd4vDnwgjkKm5FD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46Hh1Ns9pKsP56w6k6x75V3BT5LN1FMpd1zQncpDPrpqbAJPiDFoRTHygA7xsDG8NaNdWijv3HmrLdB28QUoYKk7",
  "key1": "5ypnfmALahSRs2uLfnZo6K2rp7CX8gByj7jinT5vQN1Pnbtsqa4mk5FUXaC8YBaCbc1ouLTdnVfyFuDYPP7S8UdT",
  "key2": "3aQaSCm9i5Y3Zh8T1HBKinRePuKh6SLRHBA83RFKLm2sm7ntmMjockf5c8R4iasYmUDCunbooxd7cS5cqJfJkASV",
  "key3": "CFgaPaCrvRGy15RkU6xxwB2mLuE9YJVB1zD6buZrNYzEdV4em4oRCeFsN3m6rJt3kuxt2u73skTpp8Jr4md1wQz",
  "key4": "26BgHvPs8JfPjKVK7cdpNabQtz2JQzL79rcL4EhHWiLEjDFCaFXfRgpPLWUhFz3rD6HFAV1qZXDy2yLViZnDEWWR",
  "key5": "3iiETKwYxi8PucKFJmt1quQE8CA9YaQAX451McJirPKkPdLSoFo7FxpFDnEJAT5txFue3snU2oEfn55PDqbJyWBd",
  "key6": "3NK3PxQxPQuPB5x6xgKJnNvUnqfwR5xxAYivpM8NvhvzzuptuizbXdhDjYUuxQpHc35i9eEC9n6cTTktjNhBJbL",
  "key7": "62Kmj4u4zwEKCAnN4jvkqcAMZybM5uqaav5cAFhU5WRTVw1JYqMimh5hkLidr2iF7SMBCjzFgjoNVxgnX1ZUnzmM",
  "key8": "g6M6RKLFE9j13ky6dJJEho7xdRWbSmmcwxHZ9yzFt7zUjegk1etqWJD4JirnjjGzYvbqpHYM9Y6JPm7M8Vrq1Lb",
  "key9": "4ap1A2G3RFUF1fZjU2zZCRcV93nL8eS6Ru3UBcy9KQxRNinQohpGSHeaDpEa1kDQ9fgGAAG92xPa1iN8LZD3Uyj",
  "key10": "5kzkTdyCHMaFpqfNX3jMadXg5UFRMxdfV1YJ8FMTXT4hY1aXKdGM8ut8JEaTwtwFc2c6XSYPvNn1MTE52SfUK3CK",
  "key11": "4h9PRRFdcMyyxRL1FKHuzeKJZHKkw7fDmNktXd7PW31fc8Cd1pzjNNqAvmhc3pNi4gA22g8TZoQ4rEKiN8QZaynd",
  "key12": "2NQDyYvM42N1fVuTMoHgsjfA7wd5ACN6mum8bZMu5hfmUHo15ggnXm8TJRmrRcHZbbGkqiLTuCYPjktjZadcdLnD",
  "key13": "5577B5hHUmfvVKeYQKACa4ZLmvuvzUq2JJhhVZw8DdNCKP7LxAL6DmTonKTp5tfDxhDXrZ3kvSNpKw2A9qnhcxxn",
  "key14": "4HXzfgDWXHtqVcCF2EAPs5MQA1jpAYntMre8MnCNR5jTvWzSyjL2jNWWadG5u24ntGQFn223dP29gvmzaYHGo34k",
  "key15": "qbt5Hm9CtHGBrrAiEVAojrFJNA6wGqEeoC4cSiPyouZMexEWRhixo5hu1hH5Xopam3DXEjzps7EsczsM7R6Zv9q",
  "key16": "NEgaygF6h1PrjV4ayeQvH5yiXyBseAJ4o3oUbyyqZ5KkSSP3V6fYw7NDyH2B1SnUfez5QkNq9BjR8jHwkc9eEPZ",
  "key17": "KvASaSYi7jn1gHVEVndr6CH1tiUoszfL4te9EViz2AJfMdK3PFNtDNTAH51QKL1NyTXan89AmpC5WawR9mTLuss",
  "key18": "2tMz2foNJnXoBDo14vyLc6dHQj971SCAodCdtfwhcKFWeq5wMPkjyZuNmgAvRsBvy5aUs5UMYga16yaKXew2Rx5g",
  "key19": "3UwkeusVd3LtwZJXA1KP6x5AErrx979RqjjFZjRsCN2a9S7ntyVTWkVnqCLwmayctA3wFPgf12BjhS4BvgsPN9bj",
  "key20": "4g1Rt4SYFapUMCxMCAi9mrF1BaVKug53uUDLD4pA7giGgus5Xz1VvyEasrGZn5fEWtudnejvipZNU5hyeZbvYCZm",
  "key21": "dsHii8x5hn751ZyvnUhQcAB7Dc8qyZWMMQCw7p1cDDxRPMVxmizgf3DTkcYWx6MKbz566MkLfWxxNaWumJM5JmE",
  "key22": "C2Ehvtdw3sqWvi4Wu3jxCjMwqz4Rbm26sNpf6evMu4FYv2SyVyXEE7DUJJ3NbpjqZXsLatX4dJkb5pwwjBQN8QA",
  "key23": "5hC7GTZtbW9XMvcujMTJfbuA8qVpdKpBDpBVhWahThkrz72fNsQSeJ2HTDZCkkge8yDhBsUi5kX1fxhDy2KyRLaY",
  "key24": "5VikjYjLeLR8e6Vw6pssMtzpNEtLenHM5h9oU3Wp9ewDeKrvpY7t8Ap8vBzYBWh1WKuLc3jT6YznepyfoLXwsvco",
  "key25": "3est63y6txDTrNP8x1srKc9phL4f2ocn7GqY5WTgbn57XdZp9uybQwWDNxu1jrMtxrJxPBGZAtXLPcbfwiqDCgtr",
  "key26": "5GDdz6ysDTMbM3Jy7ABPT985em91b8UeEEePZE1SE4UrL9CcoEBp878qtLNRbBZb1uU77Dv1r1JZXJbNqFeZWuHb",
  "key27": "5LW8MnoaToTFoD3MfGfccFHQAxzAAVB8G7Maj3VBz9yKvukVi4GjbS7bnYf2DTi3NJ15w8oBGBsKb6Eyyjwu2YiK",
  "key28": "3eus7FM5empQBpwdExqQrgdeL4PQXDyEpHiG4aG3QcGhjwDris896iWpL7Zg1mQjniCmhyxZw3QrdWtD5AEks3zt",
  "key29": "3S7LBXunCrhej736xFA9Z48bcF7B8D3Re1hqvJ53gwcimkmux4GoJbVLfquMcCKVxSp2UfyDXxr4kVX6KzanPYSZ",
  "key30": "4nXjQ32iWbsVjPaJnQUwRJBVtr1W1AnJ6q2V3YoPYVG99mY2rY8np5DrbAWBPxJ9M4wASpJhyZEy6RN17PReas8m",
  "key31": "3pEi2mZBoQbFzd4qFb3mecH35KqFBa3DpgtWmb563QUSdC2gxouthNz3QxdbFrVfL7ZhxAoWGfq2xBVHYUt5Lnv8",
  "key32": "3iWyBC6vpPwDsYrm5t4Ro9auRMftMkSM2VwkcuG4PUJDynyhqTViNVJzPUQJoaUvb2XZmBW5Ca2A89qtmNcE9UtX",
  "key33": "4XZRmR8SYuSRox9LHEZqrUV9ofzHFzMDjnkPtjnrYXzaJaomP7Xwshz853ezzAypMH2LaqEsMMvKDvysGkzvUWZC",
  "key34": "5XFGJjQEy9fmrtd6oQpy7LNHV6TLZ6JMnEcBKDGvcRccYSfB7Kf5DNMJGC7E7QTon4GgfhRCzptJV6WR27ZpEZFW",
  "key35": "3QF4W91c8fqSVmX7LXeaXv4fG6jniw3VtMQt1ZSrijTKGknjteK9GnMtHoSnGHREzC5HWpVv84rDiT4DX9a52gzE",
  "key36": "L1JEsiydgozgHBnYf5aaLkdeXs4LwQZiEvVxHNDkiVoAsppytbaveAqYZvPkVqoYjANTGowspUrTkAeCGwtip1Z",
  "key37": "4Cp4C59cPYmmt3aUG77ZRMkhKECTK6nhHxmF5LPVsUNvAnwAxiZAd8oD8Zgj9o5yZ9SCTGvHNCLe4ESHrcTZoL9o",
  "key38": "nTbBt6aZM1rd9c4jg91fAaLj59y56fyfNTrz5c5eSnnFSqFzfiBkFXoBkbvzP4XY4PZcYfj1vV5hQL4jHBbLwHE"
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
