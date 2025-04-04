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
    "2UWQUMM5BgGwZ75G2jWdeFctWHdQrg25U99tJcxGs8sxcEyPZrb4gECjbaCn2UEaMtEcTyp8V3xdJXiLssdDy6A2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B7nyuEWH2d5q9ZnvrdTfexv8xP3bTTmeKfJLN42iPzTto3zkQX6ck9pe4gLyENdmjRuyc4tywi2u4oAhECu3ujt",
  "key1": "2jcaLbPRJHjsBSoZFLb4vTsGKw1VXVgnAnwqDJ5V5RmV9GRfGd6QNMprwsumRjD19FN33Sfx6qUaWTvRrWgVM1CM",
  "key2": "55t788BRt9SLbkV7ypqsz2kBi4UK4m2bJSuwviVqCT7GSgq5F38TFHCbfC6odwLsVK1bYukfVxEvUCVnRHkpseoY",
  "key3": "4qmevoY5AxQZTxKiLVWRqdXFzSKz36wqSYKSMahx36F4X9e2jUNaXyAHkZRFLkVX4fvY8ik51MyHpBYgdLLciTe1",
  "key4": "5f4R1voDsF3sCzErHCcYJUAyoNRHPVXFD7mG2wML6WhVZe7GuecbphiAqEhkKfkGwE57m29sGr66eD91JHuSfzbG",
  "key5": "J3RgLZfX7pMkynDmTZUBeNyPqvCTMJP61eehJMGiB3BPHF8fUjtSxvoobCy5XTmQxZsu4HwRfb682g3dUyDg8Tq",
  "key6": "4dYHFjADPtShJ6FzQxNJuopMuL9azi8bMpLUif2avUJafEB5TUyUjYDPbJKBmR6WJK7ugH73Kz3GTffGhAs1oEG2",
  "key7": "5mJgD2hJpd2Rv5z7HwpjN3RJzKmVqrY4PPzV8ZogLpUQRzKP9L9GnmMbMgQTi1WfHVofe4sCbbHgjfRbvBsJw5vZ",
  "key8": "5m9pLRMtW4mpYRgJxNf6meJN2iWvAuPJeHiwLYKHxyMm9W9fxYXenB7Mf3XRpfGQfEBVU7WTwqRopuU5JGJQbpzV",
  "key9": "4CP21Tyargxgq7zaeZjYcByfnC7RyNMGt7PzMkS7NXrY6Y5SNL7Yis4z7jSVfyKJeyTcDtiiGMo4u9a3nd46aAoP",
  "key10": "mWvHUvdy1mZSZjuWUbyHpfMRkAqV9r5jJ6e461HB9BaXpoEGcUhQshMAgFuk5AQ5WFH5vFE3V9Gw9gPUbwdng4u",
  "key11": "49eabMhoBXB7wgT717FEVEjbpcb5B4ux1ZKtXr2uFMYY8LtimBpGbPz8K71UmCRLKvzZwfVcQGw6RiPCepjA49Zx",
  "key12": "iKSVY1r9TXs124ZQxN8frqt29EWxCQShPgYak9Mw3h1YC9vg4nerS76Fb6UVpBwkW4H4bw1RF4JhfxF6bchA1ef",
  "key13": "33rJGCobYYU7B2Ky1Z72r2sQQdqWsDRXmQJc8X8Xe3TTMWdDEYYNwBAFAe6siP2qvXBaGGLef61b73rtmMCFdwWU",
  "key14": "2H3Z9T8PxvbBJrWKe5DGpc177PsHYH9mPr6uqdaNzgJjSNgvMA2C7Jf52B2fNvHtRR1Sda7cEHredEN1FMMdkxdR",
  "key15": "2Su14cQPEn6zujfcc8ywRzYGEskrxgudKHqkALKKjipt2YmUvbDhQxgaG2D9PLj1DFyYr2QgjaWcF2ZECT8y61r3",
  "key16": "3RS3vVub8QcUFve35VHAm7hqsgJRfBRjHS3SbF1KixJ46Neh8tQbdxWSBQzZzz4aBbA5Me2GP3vX39VXM9hp9GGL",
  "key17": "J4x4XwLMcYDEyGty7V6af29e2SPgi27wG6nVTjoCoRKp4hEdjz5nFc5EyxppYgoBEyoUpA5s7PZsymSuvuyAngd",
  "key18": "2cvkdcE3NyECgCrw3dYmYS5s3Gijer4ge5H3b7BuGqafMo1zQzVKWxZjTWRUzyih8LftwUhFNGfKL6pqyBiTnWUr",
  "key19": "4H533SbUtvztuMphgz1VUYHysxDnn3e5D5jghMSF586TuNy7WyBrZ82a9VhJyqzFEziv2FM8CkUh3bWNW26x3aJ",
  "key20": "3vs4yZEzGPNdybF5Zwp1rXTZSdXJTc9wMAVd9x9mfnxnaGZ14XJ6gdxccWF4MvpTfBwHSszyaUV97QxAg1YenEb3",
  "key21": "5ARY67zv5Lf2jgP8rThrqiEypHfHkhHqTTZFJJ2tLDm96Cm2Dm713ktx8PPLZYGENkUBP9L6tYt4aMcuaBZRGWQa",
  "key22": "2vxCeWc6mh9gpeR2K4VdR5wx8F4QG9nmMwhTzz4AXnMTYqRe4CvwaiHCGUVE3pEQTBfvynfAJaMoY2yAH62ioj56",
  "key23": "5p4dnhm8VFeuqRBEi5UeJtSAJUcWa7BBgmeXKk8ca96BZSUk7eb5Vkj4mSt4QjyoAN7kHmZaZYUzXeaC78zD9gNd",
  "key24": "3mftS4GPy547oDWTiyPNoRvtEUqKL9wwC77eh8qRA7RMc6Z4Hazh36w46TeWSPSsmuUnMnGWBDtzRvB9NGSC2gJy",
  "key25": "2xsGNsvwMidtiF7a2jQvo3Zsd1EtvWciuPQLfoMoqmx1A65595dNhBkTmoaBcjKbjVoDFXsRnsc9KctRpD7eAn3X",
  "key26": "3LjX5b81er6i6CtyofgD3sXgBuZ92P9Td4UsR4T7k51VJKa4HmhY6wTq6gxQGU75fgFCuY2CVkAzTinrVpGa3CCT",
  "key27": "5SYjAHZhZZa5sqt1RTcqZB2toLJkPaL2eKyh4u1xnJia6ujSeuwiDLquJGpisrprwtUtHktGSUeTNESubF4VVVab",
  "key28": "5jTw4nRtXgnGrgpMfJkJsK84LKhsqoJkKeQyzC8sf4VGRJLdNz66Jpr3ENmRqjKjgGZumUyTNw6sWmK4VWiBrYhT",
  "key29": "5y3okVfsFTVvj36hWDnAgGfMe39ZtnnECcf4S1Yjv7pZmD92mMgsVtZubtzr3TaYKFm8TBTUxGTRtLVTtCVfpa82",
  "key30": "3XP9uYJRrsFtxLyBFJgZ85DZ2nQkPjyXhy758LCb3Jj2FU5fa3HjeCfEFdFtpwQz1HAGkyXEHkgGanTmLtgbnrfh",
  "key31": "5s5Myv1oFzN4wfraNRyx4pJ8qke5ByCLVVsbKRZ8F1unHm97G5FcFabqxUPaE76uCAATGMaQex9PsGCkjcfDthcN",
  "key32": "5EwZh7xHo9k8cttoGSGjC5vdAjxAqoFAxeJRB5qHhE18Hx9wYFj7RNznkpXyPL8tP1JBmVCV4SeUH56VqHp3DdCf",
  "key33": "5Wg9rvcQpkSm2sTwcrhKoj5fMdCgTCuec8ZVyJRLfzLVbtsPRpJsRnnb7Vd1z1J4SYnyBSja5f9Tn7RtBqxw4MF1",
  "key34": "3g8UG2hY3q6vCboUGNxFK6b7CZyjEJ3Erkx3Uo7NqWZCbjGrghJPWQjeY3ZzoVbXVvXesVYzs8XYcbA4UryE6BbT",
  "key35": "P7c4HFnZ6xK9GbY2gcNwDR5KHWNWN2ujWfyxhsvuQgnxGBzA7y4mz3eXTJytXYRZELsuxxqQfN7CGZvaym5nekL",
  "key36": "4rEngpZAwG6RdQDnp66HfQS2E3mfzWnLR2SD3np3ryEFujeTjMfjxs76b6GaVJsUf6AEVKX4XQSD9s5sbohdXCPs",
  "key37": "4n5tGS3uHtztUXs843GzFUUshAic2ihkvMYmec3tWq878hZ88kJUVvmEonHKL5GgWw8pRVp783prgrzWjPnviQwt"
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
