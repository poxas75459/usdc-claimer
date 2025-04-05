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
    "AkNcH5obMw5HtkKeBRUjQw84VBeHby7iKzSkpNihqEgiaQ9zTdKYw3NdYADp5ZD1ApZJJgwFH4QDNNqioBk9TCV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k7mCjfDdN39v93vmUjaK9UmoQKpbDgcz6S3s6HjfmruUKhGF65VqcrKSf9PAZ38QGe7XGkkNLjKUK7mUg7zUajx",
  "key1": "4cwXUmLXEkbJXgWtEVV45XZb6tdibsyZbwzoyzHLRB55V1Xmhbkz5TxtehfSYJjCdJKdwPjqYMLBBMdjUkkDT6ed",
  "key2": "265AdFU3U569PHNWrQrZXVtNrLwk9k9JH6bEq7nVKFD4a9BuJBVShP9LidMbmnTjvKcWUoNL5WNziizonJHWuS6C",
  "key3": "51pUA3FrJgbLJ2V65RjV5mGNd74HZH72GsaSLtJWHGgGevYxBDeHMdptzDyPUxSThgQmGRhA25znWj1fTK18HNDP",
  "key4": "66vGjzbc2TVNcdBaZVvtn98ks8Aq7PnLrARhEyxP3rQu9jaJX9fZ13v7WR4v2ynQJS38WmUt36F2Hzg3HaZTKCYN",
  "key5": "3jAHfVg4YQXm9cuDKC6WhMfn8yDVWQKeukVvaZbKAYxJEpW2vkQLbYekwekEdmHaNoppWvLHUhdDg2Q2KNcuEnhp",
  "key6": "2MSt4pi9fLFdj2XbV55mntvY26wY6o8hfAZJ7YBfd9WVjc2qxGvsfwE4JWp3phwuWAhDnHVdPX6bMcPm4Q9XDNAA",
  "key7": "3yt1NeR9iC46BoY5wsejibqueDejEPVQMV1grSL4nLiCdsnmhrt6PPqubJZrxu21hK2H6KpkyAYrKLKUXfnASEUQ",
  "key8": "3SwVMLZG8qEMd5QnNBsWA4gdAHLrJuDtFb1pWowiwm7Z8xHHpq5dbqpBhiDjqKm8DNNtiXx4sRDja4LtX3P2Wwtw",
  "key9": "2HCwujr7zRhx6xuJsrVpZW6bHXTyqGv6riSiKuHxDNF6s4zWTVeDor27Yrb3zxcTgCzevbU6JmXAbHgJgBw6cmhL",
  "key10": "58LmpUFzJRvw7T6sUAeYseNcn9EriaVydkX445dhTBzd8SJgYDQBe3ekks4ghbCkcanyPshy79DoQ1jUv2YNjhZ2",
  "key11": "eX66P4MiSESE79HdDMsnjTH6nZ54VYD1PPWjcSXkJEMicoCHnqEjX9Yoi6dn5kMkLwhGPDwvdbtExXZQS3eJToF",
  "key12": "5G6tfy8pwtJFcvLM5y8gdk5Bexv7QsFcTyaDdYacMgvjL2LX9UgGCtr3yj85WxTxYzJTZeXQYAsXYxmgy6q2CYrS",
  "key13": "YnKfaWL8ykUPUUQE8qtZjGNPF1fo9NxMbXMYadekkWTRBaXZUcEDs4kF3bBiJZ4h3C612UeqEKG58oVCFPWKEyB",
  "key14": "62vdPP1EsXDrmkAThFvJMa2g77VakEZD2XLB3NN5wsLm9RGAopBWnE49i9F5tpKBnWX359DxzZ5f79WKRxFMbAiy",
  "key15": "5bE3nFhDaNvcT3trx8G452VmcA1ovNU7fz38B8NskKrobkvpTBVTsFBzJWNSJwzTdcBaGiiyQaJdnAn9xQcsofyD",
  "key16": "3UjTHi6CqNkdpVLMtghP7BNweau1STQKdzsC6vFyBN9rEMCYqk6AWQsmC6cKeQbTUpnuRCg5Gei9mpZSF6ruHLeF",
  "key17": "2MacznwvY2eff9mNBfSbzBDYAzfAMTXuoLUffuq8FUzPo9JLJAGUm8M5eedoPnYu9o1x426rvQMHrhksAfLdA2Vs",
  "key18": "12AEqFepSqyFxQGsae4KmsdCMcgjMEEecZdddQ3bAXE1tyaLEwEf731GfKmKABe8oXkpnHT6fswVEBfiPAuusGo4",
  "key19": "5VK3hGqv77u8YhJFMpP5fFq5EhjizyyFkqpH2fac9uzW7BHfmPgvsymuHWMdBjZJ8Xd99JfGUTUrK7zbCVG7WtPP",
  "key20": "3DZ8brgiLWqKiLW6sLUX9ybDRe8hZsUPnJpYAipbMumMPmSmUX5gctggym7RqdCA5iQLdvqx57zQiEJuFB3iorR4",
  "key21": "5BusK4Gim4D1BTtDxfsor323YbB2zABhDh639HD8SthdQQjeVW9iEMFLA1QqQrmiNEjKeVLKw18CtE3eFfSdkX3N",
  "key22": "3nxhsZrviP2sEWMnUEgsU2Qc9sFXvRdrLob9vQyU2QUzbXjfSXoMm9xemYFRHjJfuUABHVVVpvyzzA6wNQa6gvca",
  "key23": "VHa4ctdUjRWKQe8GGB63kqZSuyjdouu4wSAzo2TofLVGpEA3FDPqiWMmurwhzwsPc8RjfkJDHMtrGQKFHbXUvRp",
  "key24": "49RBBpwynHrr1NtCYe6FhoVYy2SJgQYmohDfXJAVQ6o4CgsmzvdtZx1B7TE51oJ9hx3cV1p2Z573h8EuAfRhSufJ",
  "key25": "4kZ4isC41Aajx864ZriMKY5ENBV3xmT2ySQ5ZoP2ZgRS6QTubywbuBjTjkdEmekiGbBKyJBqgjj6LG4Lt1fwD5wG",
  "key26": "2uhRuMurDkGxRxFuPxrVqAng1dMJcDaqSpT2LNyKY87Sm6jmGGLNFXRBsHgPerdXodC5wKSTdFUcQN2QwJCy2ASs",
  "key27": "5BmbX8N9S66hmX18zr9VMvp3aW954zX9Q2Bsttad8ywmuSYqo8qqeCjX2cbGuXebd5X3S7rYBTY4kx373wXk1rbv",
  "key28": "2H4W7hAeBUif3d4Q6biizXZZagtkWtpdsndUKTzYE1EDNqCUxTd19eDukojnPyvNkmJNG6HidjYGL4s5mRphtB7t",
  "key29": "2txFqjZsdAW5cyYvAsmqDr57ehaLD6tkiAhiHYQjmnBeF1jVisbKaZbR5q89mhBik8LdW6Rja8FacadC7PRYwGci",
  "key30": "FdgkQbyWdatFLJkxWYDRhiEmAvZ5VeY6zU3A6T1hFEfydaPGU4f8sEgjFjy6sb5TDBuztbGxuFTvQj15RvXB3ni",
  "key31": "2HGnzFfZHWbbzDANrio1M4j6YdwAqWePRCNKNC2JZqFUFzYbo9WeDfAsXizr4H7nqATmf5nQUw85K1Z97KsavXY5",
  "key32": "3uGLEyv9p89KrD5JaYC3YCUvNV4PunVSAD2ot34okRy7SsQSWBMfPQebboXAY8FfCAvWCU6uyZ11NbRhECojNeXp",
  "key33": "5vZJnNUCRJid7PoxJBqgPM3Ckc6mvJLkveUPax1yBPAKeeFRD8rUXpsbQ85PQyfHXtibxpNQodLSejyuYfEvauZa",
  "key34": "5NGgLqSXp1UWthP9zTPrxG1XsRYrG73o8Spg9UvgJ7KEZM93UXkEdCmjmb4MeB3L8LBReW1wz8FeXFRVPAVd1u8D",
  "key35": "1nwitQKceNQRxrnmhxJADsKsqy4Zb5U6yD3vg4xiWb4N9Tb8Ax4mYg7BD42bNC9wM36emVYemcGuhzLFGSDNUjF",
  "key36": "4UnECsy7ZsCEhQGrG7LuxyJHQFWXetafHvhuS2SuZpQnpvRMW1eDCsiPB1tmeUrPtRM2ReKNBXTfpJEPCv1t5rRg",
  "key37": "34rsBJhSDV5v54PMRFwFKUpE3msVZdVzqoCk37v4AWV2SmqhgmdBFEsiJMaUyFTqxMAu1yDbtHNJf9inzFSDdh1n",
  "key38": "4hLprAgr55w7SdxhFNSM2LvucCQeEKmPHWdFBEU412G3SiWCnCiZCZpfxyC2tDym4jZcj29k6HfrFNPF1QL7yoft",
  "key39": "5Mia4dAL3yJvzBtipT23DCMr2U4WWP859bLKy7CBBeJzshAs6DWbKMo8DB5pj6WsnhE7WYW5FBecrKfTHCs83J83"
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
