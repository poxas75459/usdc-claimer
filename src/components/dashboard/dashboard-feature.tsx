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
    "2RAc1wsv9A66ZfzdawctJz9CQKAbD1Jaaa9T29Rk366tHDrqBGUnwq36BcgoDuDWv3UgwWLecw3ocpjYUKRt7Y4o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Bharqwmqtxis5Hf6n9AVeDiLEc89YU8sQvRixVEUWvrVELabiBJzMhamkSJZFumzWCHsm2M8m1qLckMs6g9Ptfs",
  "key1": "4bEsv1owZmL1Y4ovFo1QA8fG8ePd7xN3QJd9VZJzaMeiwehSTFjdzTifkh8fD5CpMdYVu988wg7qPFd9zSrZFAoc",
  "key2": "4Fo7F4CwxcbfNdLGwVcNmEbHeVBvFAwz3ycUw9vdatVM1t2B6LpQwAryZ3VYtwQ898W875LN9viZLGK5Mh881M2",
  "key3": "3CtKbe7qbWnnLc2tM8tTstnCoPPqrt6UWnLuN5ui96rbD1CjV2QNePUtcg2bBoxh2zH3fXtzGieTBs3K88tSR32X",
  "key4": "5p5boYwnHsQvEd2eCvN7aYmCpPiREVrfMQ3zqd3x1d68hxrStBdoUvbBuUZidKGCyYhpSpSiDgwZZhFbjDFGu4Ws",
  "key5": "45gxgvvUUKiXQrKaULDfKRx6MwREhtayJ4zjijipa2BNwfaAMCPTgRe3p3cEgybqMH1v9TesSU58Xq5VtKnHdLc7",
  "key6": "YAxKw45Xqqy9wUURFLeG4CTZGJASW3ovNgtZ1dMTFzq9NXNoVMohFLT2hNgEnTRCgrhW5EuiSK2m6HwZcwQqVfF",
  "key7": "LG6wYHgVwDhJ5h8FkAKiNJSzeqPehPoJdJAbwgdrPdWsrRC2PwJoYbL7XX6L5HVdbJTPCvNphyQzKiKHZ9xmfA1",
  "key8": "2aBviBv6S5UHSMVK9GHw1iaZwK3T8S2GWE7r6YQFowETbT9fUSx3LffrztbNvNTVbbpKhU8J2paGcZkVw78X8C5",
  "key9": "2oD5m2PsbuZ6ULJUTEkPyZ9pV6F3qBtbibPbyUJ27srp4WJ3dfvHtygmRzK7RZcCAQaPHmFe3WNw4sWVu4Sn34Z8",
  "key10": "frvUqCoptLZLr4AqGq3bGgnaz4yGDxpAZtWaBseCzy1HXjErsNx2NNP2sbWFpEoijPYCsFw9gZfowHnvSRUbFEH",
  "key11": "3ErxKe68qXr22P5nWJJPE78dt5XGN53z1CgiA86KdYAELxYe8LNxXeQbq8vUNmQ6rjoGE2JeEK6A9d4ChSNzuMxu",
  "key12": "2PVm8LELf96ajL4cSYEdUwrrmyLWkVSSkTKM363Lxo22jPoPCp9jaU9jE29ycTVgRPF4pei5tqFQoGDtwrR13JdR",
  "key13": "2CmceXxm9ZJt7MXw4L5gT52UpW3PB6mgErigRSfbbb1whjUTZqkzT3bsCNG3ZLWHtdwaP86Na4pWKsQiqBbHMJMh",
  "key14": "yTxNiXSuR2xphzmHMUisyUXrB7ANv2xkRiV2ybZERkUZEod3ZLUrz8MvSDf76xRSj5pi8vm4BrvrUp37oxhrkJs",
  "key15": "23gt98nJT88eUN1ThHAMNP2hyp8rXwEJ3MNdfBwrS6k18s4swQWKf2ukiojbSPw5372eecdGAustkc8H6ShoQEMp",
  "key16": "4e2VjR51f4DbwRcGogriqhTWxyGV7WXadCLweYTRmYsz9E8RzHvGp93sP7BbLFcay8Uz6yfE1Yb75SF8G7YWexYh",
  "key17": "4msD6hWsDEvtXBetXB9miq6JhzLygJRPNJsdojyBpF1tQNe6jXB149VDCgrh8CddCUaiBUpfFHgzDJVwgB4jss5h",
  "key18": "goQhvnuaQ9ZMwfq9uDgoZY1rJhFryHQ8sNUBtsPbhdLqC8fTvuzT2HzyZUSstwtSQn8o3BVgEmosT1dz47p2kNb",
  "key19": "5J5G2LA36jj1XHJBkRqQtPSxPwUnH6Zq5e18GNXWi8Fd5v7d6LVM7mZLwgYYd1pDNz2X7ufAbdDWjiFsMR7vXTzj",
  "key20": "5DPZoT8WXynfdw3YSUapojTSd2mYMAW8gzgREHYYvVYbhy61So8KHbBwoZhCSFYruZL1saCcqDS9fTe87gAWgACY",
  "key21": "2wDwFLt9f1LHsD7y1Qny9pacyjUDuwWEkztj619h1atH7d8KydJ1VH9oLg1CczBgv1vboJieK3YExQ9jbdFuUtBg",
  "key22": "5sRMmZb9UrxBGbNf8KudXYUB3w8rTE5MtgR5J2meqP3XvC3nykeS8mtY8JgoVaKB2rWbUrvE2jNZZpBKmGJ67bYE",
  "key23": "3xvFpRrXtzaFy6i3A8EJwtk7iKLKDZJaWjHWuwoGDeEriVL8JdHXBQLCeCHPPdFB5xoNDjU3sangABbdwiH6Bje",
  "key24": "scw3bFRRMDtNyCEQtigdmmEsaCkGfSS1vspGLPnSe8RxoMSB8MRiLEL47yLYiFsMhLaNyKJDWHrTDNGNdye4pve"
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
