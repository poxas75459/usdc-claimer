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
    "LTTxZHUASqPcA7LozpSuzCEAZg1E2mwJ5wWXcvLAuTEa6BHDHTYapUbJmkuh5px6cDxdqiQPHkSmVAxbEZD9o8g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TWbr6tihXVaXfXcUd8HeZaBiJafi16DzNuzBJkjK2Rg2j2d35UCKe9dc1p5iKAh5kywLmy8KSYYu7wVb5afGvzQ",
  "key1": "4F9obVMEoYwiJkfzAMxbgjjQ1e1csHDsjdAT7RxxYDTTvBTuLJpqhPoPsEaTSemNLQkcUpNMUktgixjuxGRHp2G",
  "key2": "4ECYPXMfoL11uKAwMomfKR6xq8KJSCWzKbXe3ji5QYR2iHnJvkLKA2uD3o1HW5w9yTQtEFKAa6g3kh4JXDgDa4Hn",
  "key3": "5RCweQ94V73yq2xVTmiJgQsaYQb351qXUXKrVnkycZircvokSDsHtaHjTtvoh8eYCFLuRTRHhH5C7WsdKPqJLLa1",
  "key4": "4k9xQwKL9RiGESDf8pWoDcMejb5hG4Gp7EcBJZt59sVRruFWZ6QUzEBgvZPaWc8J9KBtiH1Uh3hs3WcbNpTQtc8w",
  "key5": "3RyQoFcQD3QyB8iwUdy1jp4BydU4tQ3wpfE1sXwb1tNX4iMuYiZCwsAYRLt3hJpsg4nKjnPQAi1f1TSsuUmP6wgp",
  "key6": "2wU2N9f33YnJC8bruWxZwSJn94MSurMCr2Foa5X9FRPVV7mkhAkcmUn1hTifFbG7nx3BU8ZizLu1FvexK98BgQtG",
  "key7": "3edDqqkShHT9dZDRrpHESrdazg9CLeS511NTRwBV7rCAi9EkNxHpSGoikMSvhFyjbf6kw4cudezUX588XAh2qZ9L",
  "key8": "4RPXt3W4qGH51KMGSaYLU9Wz2hdY73xALSwVtDRWX1k8DBmNLy3ypbyXdrKHywQAWrjUi6zYa3XuqakZyAWxvEzd",
  "key9": "Rnr1QHUJyyLnFmkSQZaJUwE9z3s8US11nVTvwSv2midrPVyg61AaRKdyadGbhQhy5G84KnVDSpMfjBCr3VmbLSi",
  "key10": "3ktXNn6dSPc1Vghf8HGXaYY3xPgzyVxaVUKSriWbgz33S4GdXXYvPtugh7ch1WDd2ASVroD3hUmyYoATv4tacEtV",
  "key11": "4QU47Ywpw95Cw2x143VQ4xhmeHJxoM9NyxMeYRf5uSZC68Re9P5mKJtuBZFVLnq8gesdmiSwg8DEBhb29ve7V5b2",
  "key12": "217eJ9XbPviqCbV8Xds5ABHdgiXreDtfqiKrqTENWAZqS68HFeSVGUT3KdrUPRxcANUWKagZFGCHvqCRAg2Z79PM",
  "key13": "2A9vTobb96XFPin6jXFeQb2rCdLiQoGaRMpn6Jcsts3Vju97rCAmSJH32u7ZeEKStc7guB2j5Vu7ycWfQh5FxSXb",
  "key14": "ksW6AFAMMJ1T3swiieGVtpQqxh8jMpQ6BA56nQ8cD9mN8tgQ7tiKNsLKpBD5RtUgfg3uGnjGjV5uup9Pi2qyDYX",
  "key15": "3a1nGRqX8StzHqR4Adwbh3d8UNeShXhAcTQLGysnwTeyqMaVJBJjWxgcNkv63vhSsotkorftvXStQcuNm4J2sQWY",
  "key16": "3fz3TDirRjYEBsSE3AYDkpAuj3ZDV7rLgwgKEuqL2reWo5TcMFC98K5NvU8zPVBcVS1kXBzJ59Pd3bMyFKMtGgEu",
  "key17": "3WonJn392QLNV331Jv1ta4RRHGvBsNFbfFAX9stzVMf3MjvMxV8yYR6Y8xUYDSHcsnrEu84R2vuRbc3GqnCv539t",
  "key18": "2zZwPiQ1ow8bAhJXgdNzph57BxTWaitcZ8XFY1rWS9mX35HpsMryzJ6Jrq6ACPh3BX6FTAuitegq4px3oxXyg8x3",
  "key19": "CAaz6KSBWJDYZww4ftQTUAFhNMkUEX5FLVAP7JyWSnVxicdzXPNHSV5qbT6MxVSyymYe6nYCeLv6SYXm7DXCn9Z",
  "key20": "4cNTSxJC1Wnwr7iqmcCXizqfdKt8S2QR3gvE88fyhGTqo4wfrCGUe9Ya7wQ755hs94UVbu1tCXL7osN23i8cifDY",
  "key21": "4MM8jNw51N44Py7kZKHphpCpcWrw5JpnkMrB1oZwY3djQVUc6w2RT5yy1wsYCxbGfe3H2NChcF3jKExXLPfbQ9Au",
  "key22": "2hSHbzU8oMf11D55WVRCHyNzCePZNPMULrScDy2knDpEJbxqnqp3rw9zmPsZewvPCiMDAGZUvxbUmcQAX56dhHbJ",
  "key23": "4wuU6pD5bdvn2vjpSvbURMnkU3NFvJCFCKoeZk5yWzXUQ62LUywzTZ5JH5YjLfU4BVnDU7DZzKsWjiaqmeRd5hsh",
  "key24": "2i4c8f22SeEXajoZPYnH8xoLSZepVUZjRKnkU1o8AASU8uY9LCbuBWT2KgUgyLFHkg7aNcd6hKLs5pUNrNscV1En",
  "key25": "2iPDgVL5jAPc7uTsXgy4wGjQbXEp1YQfw5cxrA6oFtNxu6eFdpU9xajnLiwfqbkEUAhZvgM45BynGP1wvBvjhy21",
  "key26": "5m6mTx2PwMUoE55kDnf8BDocBWPnuCVT1Z68NkZyLZrKe242EiFV3Jo2JXuksMSbuJW52QaePp6PR8SiGmH4jvU3",
  "key27": "2jMXEbipi1J7Xs8YzrVCAfSgYUePbkdJ86r98nqi83JUjQCPy1ucXeL8KB12rF8bU8n2N2PgWyK45vxQTeeVFoJ6",
  "key28": "36AZNYVWLsUWzJHbbPxQ8pAD97WgBFQ9guG2EaPHGX9jGyxKrbzq5cWub7SpsEN4AwKw5HjBHDM27M3ndqmHKtMV"
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
