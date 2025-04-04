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
    "2eS3ekfwxUsJ5NuqAN9Zg7bp7otQzgQgXTSdHDEEWMWb6WFAyS7k3brpi3JqjwgLQ4pumgSgucUsAEtu5skLFwRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gUD51SKsHLcuh6uqFRwCpPobn9MM2mZFrjPZVXYUUWyyNP4pFncPChzuc8izPd2rL3szVqGZ2GUyVa3juzBJsVB",
  "key1": "3mvAzfZNVk8Q7KPSP636417cAM9CzKDJFnXMZt8PEX6zS5vUoakQ5QpQboaYsxJhnqb5LBbyHqVRfbQtaCpzSshD",
  "key2": "C9aXW6rP18giGF1m1d5RHWkY1Sb3q4E77zsMee5pD6DGK57XPrQRPXp4mZVVycviqD42u2MjvxrNywyfnNh1vHy",
  "key3": "5wo9qTbuNy64eL6TfjxtVm7v9qjVmsCLpN95CBGcUQk58b3tjLuiwVuDsB7thvjk4Aokn4dhCiApqQaoxxa9cK9n",
  "key4": "3y9tbDufvsAZa8gZt4v1xk4eu8scWhJ2qC8cMhi6QQcBFbvZuertyZLyGjk1mT6AtkQYeHmXThSVqV614KDE4Ss6",
  "key5": "2s5iGhFjhUT1zX59ycQv3fcTPLJdQm6LMcMnZ9eeC9zcgwiSZXgSnzdSp5ieY7dZHoEH4mmwKKueaE6Xt8m22RZm",
  "key6": "3MJAzyUyu3B9vgHywonnxHh1tt2qMficSHEbg2ySEAZQ4oBTjT8MfUZgZatoMMTgTnBaJ9fLWg49tGPeDSp24vnW",
  "key7": "4eazyLE3DLZa74FEFP34y6keznmH5QuMrc22tr3P4C35TLG49BH8EGTD5kAQNDXLJjZMkvnEqasu5keQF4SP5Y19",
  "key8": "5a2UeAKtEkFmQanExbNoxeHawNsE2SUiQBVaeYcRbYNETRcWwzKh7Bx8v116J6VjEwWFKWNumLBcKyAf9DHJyqSq",
  "key9": "JqQpWKv2jwvU3qt55w1DeiopzxoCh7mQvrK1UUFH51gDtaZjjRQYEDmJW1Sa7EtRS3DFJogP2X59EP3AjSyQwq6",
  "key10": "4pSG5UMCQ72iCUeBex83RT7oo2zU7neVc5T87ha4kp4NAgikybbhRQvmXdrQMoqApmsiRB6DcaRfLoKGnk6Jvo3j",
  "key11": "2xj4vGvUEL7YqTbW4pGdVZueRZzH9ic9Gd5sV4s5qEcFZxKVafqYaZWc1c1CydksapduGJjjFg2ENkQfEyrQayEe",
  "key12": "5gCPJmRoiC2f7UuYhHcPWkpQydHWrpdAn3AsWYx7ViWDgq3VNJyA4pXBWpUh8Juw4PjJrdPdx3igDaEUfeZmyL3g",
  "key13": "xrhcMd4XFtK7M7c3ahrX6UCzDmvTKdBdjJLU7GM8DBYd9Nq9fCCNsCmNR9xyLGA46BoiHtzhxHTP4pBu53DrkMC",
  "key14": "Q7L3X3zYqwANRNzXAkLSBJLiq9u2mLSCVkHM7ef9v6pmRsDaCeQQbyjCDmCsQgcEy73CqrmEERK9ouFR3zawT64",
  "key15": "3fQAegSympSASurqVYxTjC2UQJfh7uNmYkVoSngkSvmxaRPYcq6wVPmYJy1AS7cArPtmGubqvECNKCuu5jyP4K4t",
  "key16": "FwccWzm1kuLGkgb4f7gx3uP2r4NrcDyX7kHd7mcVqH5sC9srEWe6t8Xq6stwsCpufuoX5cFju9yjLw1JMPfFJp9",
  "key17": "3B3ZpPigXscBRACGRx3dhCxeSzuUXsMTcUdEpkt8KmnFpJ1KfvBSK8Y14qb1nKjKQkjxveDEGkU29G6MN3z4NDr2",
  "key18": "4KhDK7BzQTVT7Y3NVGSsz6LiJEUToD4KRsqJPaSZBe9VBeF2L4ZAQ7XaDUxmbLU9dxLM59kR5Q2rrRGWAuAEotH2",
  "key19": "4HTy1RgmudEbNrXeRxJk6tE88EU9Dk1EGUuNbh9YRwtbjNLTJG2pMd5E8JWXLdXADUZZJ3qk2QDPcLWUFbzHCGus",
  "key20": "4SHAMJP3Juij4qognJp4NdASjk1nWgWysRKh9nU3sXuShPjoCuQ4PADTizEH2bfYny9GcHXrrquhT9P6GVxVieAS",
  "key21": "42mWT7KSxMAHL7GEXbc8GPzzLbWV7XaERKfYs1aYGEcTXcbVVsskRXgVwy7yQy8Pux1imcQQAqkmmXe7Xoqsdq1B",
  "key22": "2GM5bCKZAk7gbsCAZg6wuxfHAmGr5fJjyXDXeVNgXQMEEcbLMj7MeuLkGJcnUmzUH5AYmwTHfYQdVrmQvay6howx",
  "key23": "2bCvQaJE7v6AUsBKqi779rrBntpNFTryMzCFfaiGYJU8Dd2AGfVrQKBttUfF4R3pKUz1GVHvxzoK6wtaMiZpsdnZ",
  "key24": "cGAcjwxgJwaceTrqx6JfW1uD4Q7bDkR1URmqB9VPzBsWS4aiP94jRgGDtcJnoyGxgVqLxfYKVx5j4efRmqgYn2N",
  "key25": "65CHZmnh2SYdi1wowZU1XsfNvWm5vJjCH6MeNyt9Lp9xKLpaTQErhjCrrTZDFW89zk9ZdjN1oTgw5cxuo2MUwnL1",
  "key26": "4Nn166HxwDin1obUy5VRRmFESbUctsewS4912Pmjv5rFhCx1CrwQ9wZJFV56Q3QkYZeFDPwFZKpT1sPckREbyUGC",
  "key27": "2m7soUCg4c1TQWo9BEdeeRGCTomuPMx1p4zzQqCT97X8KxL41YV4nLoqxpv4pi274AprZrMd3wVegZfcAfXWVWeD",
  "key28": "2DNnpaow3QqQWV4VtvJEG965NEXV967LAtWujGpdLEZBkFmH6ZWZ9o3mMraD7vzaYSBvLN6pQpDF6RRSLqiTd5vv",
  "key29": "5pF7mTpwS89PCX3kP9RBEtkGDCYiBrUuNH2CQQDGwAwiGen77k8wduaRe2yyQpv4Jsy23A5GM6o3sNnkZtiRNfzu",
  "key30": "SEQp1YZKvG1pUhPk14FYiMXHyJ6unHs3M2hyPZ414d8Kx2XF2vZLfxky7aQ967daZMnKeoGQQ7Pvyq6QjQt7Zx7",
  "key31": "3by57zYavGmZc2V63AeC4jXXHC6CkMR2Gw81zmHhY6eJUFw3pYArBiJefuZcgWezRideZPyvxDJoiyB6dMjk3gah",
  "key32": "2QR9UixKi5tq4SeCxo1shvpB1edCLfrzAuYigvZtUPLju3h4mRVwr6NMYKu99AmjLD27DtyWn34LJh7N5o2iAycP",
  "key33": "3nhgmTS9U6NLNvcHkktVfpVAFVWhovb8LDxmqqSmGciuz9cBb8smmZAecTsVEcPwqaKdEz8CC9QfpAqLH3bYptGJ",
  "key34": "4g84W26sYPVUhMHUpUnRTVDuYsaheiyukiQWGUgTZHoe9FbYR3W4Mp4BvZADuDspQG4s3S8QcYUo2HDTwikMpqLh",
  "key35": "5QX4qWhJzT7bdPDpC8VipzpFyqqFLy12oieHenVaTh4KmJn74vqeRJvn8axioxtaBbMUkNxLfG7dgJAhb6exJetL",
  "key36": "5FauPqNCjaVHosdoXDJ591xQHpmi3awDudMjb9CVAUioLtqwosW2ZcGFb6dt9zQPVPcfr2ut4KLotuiQhzwTosav",
  "key37": "msbrTKp2CeMPKjv4vkWT2Y5wr5S1DMEXPg6CxzERAGWRBUvsFd9ohir22sHcdDGgAL8E8i7hxeVf4sevw6mDuce",
  "key38": "5Vs99k4xguMTNRQhtz8rVPrmDD7MM9eFjCP1aEC3dvDvVsKhxUso2kMzGTvQUuczEFNTCSNDkXxDwntDjqpVWDaH",
  "key39": "3FfzZWZChEYQhsro78f3oH4S12RJRzFRR1ZRBktDS6Qj33i4xjJqSKoW5EwiBJwaq5ZDds3m9jAzeQB1PT5MMHon",
  "key40": "4Zo9LeRVLyUTbSQiBXFxZKr7ZcKr1GBrGekdsS4FPC1nhQiWovRNarJ8c9xaWADgpVM75hyFT3HBLApfcZXTiFca",
  "key41": "3zC3sXneTAMFTsm7aUXFq6T5LgxKgSbL8Ae6HNCFaZS9ADmYaU7E7G1od3wk6Lb79LRYNzpfBrVGY6GPzKgDxYzo"
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
