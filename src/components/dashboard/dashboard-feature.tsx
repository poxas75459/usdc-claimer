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
    "58qwzS3uCnEStYRCzrs5tVwqBMcDTzbrbU8FtxmChgtAMqRqxJkkk6y4FXMEFgM7rtpzrqJGY3vF4B45tYKfhi9k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m5PexhGY6Dsd2pfgdNWNuXSJoMHMUP9GRMu2DvRV5vC5VdwfzPbr3n3y8qkVVhrXaZV8134RUdnwyobQpmijJwc",
  "key1": "35dD36HYTHUwFk24KY4PzqZ1kPhPtUeX25GiFqEKPYsGAB7VB7eNAwzGcud9rU6dZTpPzvQHL3y8Qn5p2u5LzGzs",
  "key2": "PWJpYrZNnnLLeDZeYvY2hGjfX5bVYfzYuEEWzs2m99iX5PZzk6StnYMFuRfuCyZ9eJZAYzzQyPVTBCNd6vEppwY",
  "key3": "2JTGAKqSho5qc5RuU9C1eyNdTj9P2rR6M6GETJuzsynUonbJJbirS1GLyUgo8BCiYzWJMafQCfzHXvv6fYWj75iH",
  "key4": "47fzGsr8MX7tmekNxm7f2Td3hnUb52Lt5v64QauZnqtZW81Kg9zVZcFqYnP3XCEGwPUScU6UXKa6mvmVSVWtYtup",
  "key5": "2gUBtipNFoyMR3QavPnJnHomicQgvmayqhy5jgEriLirKk8ZMDwhpUZtkb3sq9m6TbsDoD8JBhdyDsGpwE74zPxT",
  "key6": "46jyqNfeB1PtQdoAKvmZ4mNz3232DQKDHcczeS3FATsZCZGoA3mhpKntRWkK9KHn7uSda1cxfJDvmRgo7aunB5rN",
  "key7": "4ANJuP5cKXB9rU5agcmWxnDm1JXRsmr7Vi4zzkj8FEGw8g9p2RW5f99VXWez5qkrq9uEmjJ2fonefDYAyA9rgVQs",
  "key8": "2SWugZYD13XihQhhQfQbHkdySAVYc6zKAPDbUrDxSdzY1TezZNwYm6MdbPko371azTfmhSN8jvUmpe21bwzeYEz2",
  "key9": "5ycjhDpBPyT8x6nNYCUgUtGwUEKFbwTf4DYrSAefRDYTyof9bTFm2uXzsrttPQjuoUBRyCJD9xAfPG5NBx3FWjae",
  "key10": "3uVr3TC4gVpaVtrpGjdFz3bqZ4KsePMB5r7HeW4sh3ixqL1PwiYCPUqGzH3y9GEUDffwZStAc9pwjR7GQgDUMqCL",
  "key11": "4S9Pg2JEsCAaLPws8Y7AnqGgiGCSvVFgydVT3HwQtXf7WViY4dizct1Hf7HQZtmUfZGD2YsFuxEmhvM96fA3ZDUY",
  "key12": "55SwzSERZ4ahSmcckhQs5ZPp3mZod8hKHXW6jz99K9WVSrbr462pzxAzMDoB4RPm7wG5pNjbyALGDiHEPeYJBLkL",
  "key13": "273fHBExdPc48sqXg7C4opQfHzsJA35Vp8aU51PR3RBMRU6G3bJUtj2ZMHkG686SiDo8EkWESjh6nHVVk8GQ1stH",
  "key14": "62oze3xnRCWWvuqhgNi8yT9UXoeFwUD3vvTDsLsebNGiDK95egQAYL6KcCkKDwTdHuBnV3KSQc7rq7Hes9p7Do4c",
  "key15": "5NmqUxP6Se4ZNuM7Zkcnb2cMSYKreAJ98ApahN8UBknq5tk2vCrJDVLppKSQdpLFLWfrNSZiCmsVWuFH66nF15pv",
  "key16": "XLVc5C9DVuprkzjJxRwTgwYqMeb5BgE9mxqKRe36eyJdZodsBfsHDmkmwzs2iMPnZjQLTh48P92sRa8sw9n4W9G",
  "key17": "35t5kEx4eSPP8FpSj9xTGHLnMDenh8B6mKcw7ARFHCBFyGDPDDShe6QPSktBtSeiwePRwUKX4yogXfPPfNkcNufB",
  "key18": "5sE1mMFswXpqA5jUGVceyTh4oyXRYUxRPkbVJ2USRPzWTDQHKNNvRBQ29d1Guv8q43AcJZ2QEHMgGDthcumGMGSQ",
  "key19": "3ohKztS1wDq4MsHRSyc5sTC1F6vbX4325wfVRZrXbNeY3VRJe5LRUgb43NdHc7F7Padzq6Q4WLoKikRQagfVWApk",
  "key20": "41VokwDwvsKH4mioW7h8ytMzm58dwAHtk95PS7oF1KPR9xYKQRQy77BmdsVLpuknn2u9rwCKMnjfGmXLnDhtg2Nr",
  "key21": "2qsPN9JncZPP75oQo3KFjFuUR4Yg73GR9jjiLq7sS8BWD4oCkbQW6sGN6yFjY1JarWicFiGF23FfTzFhB98Dg7Uw",
  "key22": "33tWZ8Qa92a6SSnkRSswhmGZjPpAeLf9LeuMTf9FtPt6VvZotdorNckZ7RbtqMvBafMWvxM5p9L4grJ9XNoR372S",
  "key23": "2ty1r65TASnRvFQEQsAXuXGLvKaHby71RVCiK5CxBF2uQ1Hngn2TCbFHCg8g9iydUMndPaPkqg53cuM7hp13V4r3",
  "key24": "63vV1xeeTbrnpxSYYDWyHx8PpZsEzyP1J4DpMZPiMv2xeio52Vvpj3w1frZfPjw4GqZ9jBDhXbQzWFGSEMTjscPW",
  "key25": "5fnw6pg7yhQZnCQn8FXwiuk8LXMWGNWSLGxj1X414di8ucF4Ms7LsWGe6FQL7dgDEFPiQtLsNGszaCtrX7aaBHhu",
  "key26": "2DVq1z3o6hd2Tf2QFyS623NdP1StHfgjWAdXSCLsBGNMfh8tPcdQJ2MypQDKQN4A1ZY8yFkEcThomPmqdMekbbKu",
  "key27": "sbdE5ncnMCkdE8FAPYUgKbNYbzhjrDKuWN4gaU37WXCJKQRTmhK76DfBLATGWq4E2x1CThRduBeKnYSRiHw3oQW",
  "key28": "doVmmkP7XHs2t1RbVJvjdTsYyCr9wEvyMG73cE2fT1e3AuyirkLkZqWcyG9DTqF5bSiH8hi3msAWc48sut1A38B",
  "key29": "673wuNHuLHPkqUG2XEiXaqb2EiVDHEe7pmUVv2JdowpeN4B8HZRQB8MqdfGe91aYa1cVdHmwYUFU3rZhxaY83H2M",
  "key30": "4oQXLyjraEHfyMyBKWFii3MaDwgGDsYz9SP55B61Q4g898AjAQ2dGcCdRwfDyXjQjYQfHruPvU7tFQoLgVduZyt8",
  "key31": "nMwKLJWeLK82zQqJypi6Gs9o5n2HpZG9DhjbttF9K4AHwhitW8TEGC7dWzz2kgW6fRQPkSVx3id5JiwqYKQNzTH",
  "key32": "4Qc57U26gLqaVA5DnfppsGsMGXyY5iesfUTBYRTyy2P5zWRfgQKfDHQTRNS8Sfv7Fg4K2LSbuGa1UGLJuJnrKV6H",
  "key33": "5ZXg5uHagKvC4jJVmgiZbiLfqb4X5wY9PZZiKExvWKFk9UnhhoB6KCnjLfhBjybZg8rRSyG1tsvz3ZxCkmdLYTsc",
  "key34": "3nZaWEZtTJybqpvj8PBYySuoFZYS6w7wFVcQ91QNocx3YqNDzq5ke6SWP82PVqiVCsy9E4LCGHraX2qBaMgJvwWv",
  "key35": "5wBuaEHBAdoRH3zwRnwpGHcf5RetwJSqkL9hSF7RuALHY24ZHYY6vhLh5VPVGN9MHQX76WDLPwg6be9mjtCU6Bfc",
  "key36": "H97rBrC2mtzFWPsmytsxXd1udJrGykBp6kUnd3cMCsncqFoyXDoyqBxirZwwfYQPwpVt68ZiYk7yPVJCpvd8PMn",
  "key37": "3ibFsHDQQ6ZgB9QLY6o5Qkvs26xXibxLFB6txV4m2oVDi4jkBsvnAS5J3Lc23TLmi38ftqXwGJXJv9t4wi4Roy6G",
  "key38": "5QHfXLre1Ff6uAnRy92Bvf5hFfL5bLPCj8f1vLBkugJaxZMduXEytiuZsYFUnTXhtTeNRBWi5L7F6YHp7xjNhocV"
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
