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
    "3Nyena32EzuhBSq45oFWFxVFYscCg8hdtvQhLmhZyAwVmWK89CXLM3DxctSwrCjRXWztszZdD7ZkhNwjteRr297c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iLPnGQ4KrwqA6HVrntRpbFBpxrBc9SPs9v597YKQRnjnCVp8QFrC5sU7mNPuXg2ZnX6o9UKQFR6DBLKyFf75K6Q",
  "key1": "23VT65FGARemhhnuCUnxNkoU2GT8x9yZCCRBWgpssQAn8mtBbSuRhm5RnEQmpozRTKFM4TVmhTFTy2H5ketHB9eN",
  "key2": "v8m6eyezPsc4XseuoPwkN65S5u5iYmg7KAgn5sVhXPnombsALJ2M7nk7k3Nyc4qiDX6PuBEbbDPtHAMMecUhd5q",
  "key3": "inHYf6uXS6XTPbAfoY96XgYRqqTyzu924pA2DDonnqFGaGoZbHTdYgrThCjd1jHfsu3XMez3CVQwLugP2bFxZdQ",
  "key4": "5i8CExeLbJNmRrutWVss83vdzpebcg7QQC5CQodU1mrFGZ6WkYjXvK9cYaer53qmV1y7CTAtGPmvShfARcFsoa1C",
  "key5": "vQLAu1eSc46My4HgKUHFmbowMeWZqTEBct8WxPF6UjgDumgviuDMAzJX31VZf7gpHK5jTzz9kYzhPmx3ctv7xYt",
  "key6": "UXpWv9nERxFzi2mE8LfvH6sa8G9xrkHwbAmWnBZrg8RfwjdnqjuWZdkWQ8sFy8ARZeA9WJRTR8j9JjvTKbGxufm",
  "key7": "5KwqEDhuSZs7dcdRp7kxuBxxCB5FQ6Y9qgZax88n62mR5QgCZeBP4Z28n1uiYyua9LuJ5zXNAKCBJS5R4N877rLs",
  "key8": "48nKdCXsBbMSx3updY8mASqfgirinWB9SZrJE3AmK31mRStzyXuqr7xiv4HbbY4yf3WFVTLCJMEEPyctVJFFuBjN",
  "key9": "5EW25fyn4BzXtxBWfEWzvr4iGFCjfdjSiQRsG3N8cc8evNmUfz9cPghUkoGXwSm1PHTHG54a8cPHbAVeeP8kqCEC",
  "key10": "5o5qcjhC8KCeCtfLFfMGwow8XmAMAX9g9kqcaKQBk5boAufXkd1YR9EDKaeWXTVCwri3Wt5FnbJvcvxGoWBNiUCj",
  "key11": "5LkXtcowZ1LQ4wofLwQBYwfWJo8RGB8KQrscPuvW7iqPAW9QtqojgexmDX6kxYSArDFKuXSQ1tfSvujhE67i1TbL",
  "key12": "2FsXgnEh5e3hurSYizqyi1ELGsG9zX6Q4MrN7ECwarkTYa2ZZZb4Kf4VJKtEU59kcB1mKTaR2zUBtvbTVGVBUNS1",
  "key13": "2MsfmtHBaSumFAQompMbbkqTeuVcL7RLmwm9NG6MVsomPMFviY365b3whvq9PYhPJzwNKHmnYw1ydcT3jB6mUQ9g",
  "key14": "5mygCPurgqyn5yxDrJPcAq3w4xyo8GmyhQanHrnjufKwwGcYGJAQpzjReCGnPLHBtXLcrvqrBwj5MnoivJ3W3eHH",
  "key15": "pUDAU4zm4Y8vvTNVirdwXhU8gLpFCbELwHEaKQjsvnFeYsjfevGJb6Hy47EArGAjJqTbmcLJ6fvXbC7DBJNJuR6",
  "key16": "5ZcKHTYYWMMcCvu5gBThNigvHx7NqypZdxWtcJ9jRRfii9turbFwJZJmRMUJV7efg4s4v34BWcgPegBFwSvKgscW",
  "key17": "5U4menaiUinDVdTPNqduQNP6y4iNy3BkaB1sqUgJgyNpUGaCsV8HhcA9tSrQFKqpoZzk145kyH5ZPepADhgeKJnL",
  "key18": "4eGmqm4Kv3Ttdc86eRetw11x139gtCF5znrQCwaHbsFirLXktQLjahFV68QbYMTWJ2o1asUhynWKhssruTXQbrgv",
  "key19": "2ZCre8Rgy1q5ios16v4s4Q4b9F7zb3HeKMDCstjgBLXVrCp8A9hTbqErAxKdbvD7DuDLozVLiDPNnmXgmuYSAwKa",
  "key20": "2AjagNWAcvE6DSMNszFUpP11L6bPJPYZZiRa7kerSebGTGbpPwumip9ptLQaNnuB38BhFQ2bnqwAaAZLBRJi44yz",
  "key21": "37DzzT6nSu1QrudWEP6RsrBanjz4ty4yD9EsH9MbwkY2eZQRtMRnPu5CR7D7VLeCTGhJuW7voGsd9GJdNG8nzvBg",
  "key22": "sFvjxWEJL3xqqquiHuufvwPvTkBwCRtVu4sjiCEDnsQHHJnj81cXwV9FTvuxyzHdyUa7uqNo7DM8hT2D69kP1f7",
  "key23": "5o3EW8DKep2aJRyqpgWDUxuAyGLEhSEGj8fAyHoeUy4irR6fCpoJt9717KWH6vnBZ3GUtaqJun19WpxbuWL8m7wR",
  "key24": "2x9FSmYUcNrxgstaWQLzCthHmb7FD4ab1DacUz3MKkw4riCuL3UkTqdC9Mub4N7HuhBqDKKanuZZCD7ECfsgLxnk",
  "key25": "xnnYZkiL9AQQgZPVkxoiNQ7hxHRWpiTjAcERUMUxqA7P7GXeAZA2cDYDjozarwKP1GL2hAagiyZiKwEmkGrLpyr",
  "key26": "3VQjSBJaFbqVcBamNp5GULfnKuH3hAvi1GocCQ17D7ns1s4cmPBi4CPvgrL8cUrP6k9EngATfEN6c8buRpKDanVh",
  "key27": "2QeQyGTwe2xvFVGLYMoa4mGkphWB6aFUQRdvgCWGwNN2iEqEjFwiR8XPmY3Ke68VPCQUExqApr2WFsNZoSpVAG2Q",
  "key28": "2igPje3NwrH7pxN3znnhdnWqj1ghW1LuvFE32EXrNCi6SgV5TmJtABrFerQ1TuXJvCX7VwnTqXME71dbp3Vpxn8N",
  "key29": "4c57k7sH6XP5ZHrQ28txhp4bcdLe8kgDVZ14eUXzCFNj8B8N68cDce9EdpTt9XNasoHfwVxc3UbJPPJk7hW6F6y4",
  "key30": "42kDi3iGr7RYWKS1D1JjmZoFDQzW1Zrq3M2jkPRpTYzAJYKAJfqohypV9g8a6AY5BsYJ4kgnAxzrMbCoRZgEv4un",
  "key31": "3zsPNbHDdzTf1KQDsbRAs8zMsECXmiL97bUVS1tj818ebBf65zV2hB3DJ9CdLDeMJ2pQqCPGHR35PDXKjL5qCkcd",
  "key32": "WLmNUSt4YK5jtdSN1TebSWWR2dxjgkbFrAw4QVeLMYsFPemofy1H5RDZijjZAPqcd8PvmLpMRjaD3fbK4sZX4XB",
  "key33": "3Vb2Vj1quvf8iHjahjyrvvfDMF5W8VnWKgCdyNbvqs2X4XVqYA3fQRDQBePk3XiHYEJYZ4DRrzfbvaXmXcsACZ5b",
  "key34": "5W8XiB2ARBgUmEg4nR8jfgp6dvsfYPYVseSDtEJoyFGpgGhonnjVfRMKUvDFg2faqBx3xjiUTdFzXzPYcaS5BQVf",
  "key35": "2dvLTbovEj7uMWdgCXLa75fRedwfCS1DuJmcGGgq7q8VQqrXjLkFVbmAS7NYD6o6XP2ALYYbz1Z99BGgCRMFf4Us",
  "key36": "3HUGn6eXd5vbyKUHMWxMs6ALr1m4f5iSiHqLhfkZbq9QjMDAR4r6bSaNKATn1wLYAdvC3fUQvkqVQ3ExBZ3ANvUB",
  "key37": "53LgYazNDjwfocso3trvxRCNbAZK1G9spfk8XdgGxQEJL9FwW4ZWB8vp4nhmAsyfKhSbbCePBRpCYmk7riGHANuW",
  "key38": "4HHLfNp1HxVEi4jVdmut6extzKQMeh8EzfrREdW2dYw36dYLBpbXXVX2dvHRGC3y2VCCJz81Uwam1nttYiDcT1HV",
  "key39": "2zUudD5bi68P1czcijg9DAQwZfuLCtmDq3AD8skWBo62bobxQQTE53fY7TSxx7LLpsWzVLbgUpf834k6mHK8obXe",
  "key40": "s2PZpigFeyhgeqX3cM9R4mSTgR9pcEd5Qp3G7BVhukvwU1nBb5TsBgd3FmXrio5ZRrDA4jiJMzTGB7CtJVsLgjy",
  "key41": "3DFFBXzqq2uz9zVjZwZsTLmiRD7wMrp8MS3PRk4wcktNXXgZoYe2CXB2XxWXqyoJeVsGQ6wfKV1ggppUvYT1LwsF",
  "key42": "444o6nuFTYhGUEQFg6vQpg47NzdAh5HpumhZ8KVyJorw2BgsGAB2prkoapWXRcqEs62ZcHx36CMKmmmPxHkKPKw8"
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
