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
    "5LDvK49NyDsgdA6zPUk9MZN6sSDBviaV1mWWhMwfBEPaUcUina8237QEyFwFKrVMp18GfCpETNsEvgBZrATFGK6s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34BBFzjF8YencHTjw4zRZ1aXmJ2Db3iG48UGLnTAqWX6PyLMdcRMAuL51fsjkDC2v1JrXG76bzkjjkUB9cuR58zE",
  "key1": "5XCgQArfNVPYkZsr5m3Ddr4Z5YCgnJS3jtGEXqCyxBdcTEMa25AcUBJ3m2b2zMQt19t7f8ZxkSoQBWYN6gDvhk11",
  "key2": "3CotGQCtCsZwVypRSZCANQVKjzDRvVHsMsyD8VmZZZovKjWYNKTqzBT5oJGNQpma8wZvPksquifsQVj8NcizQC6T",
  "key3": "2uY1Z8QgNqs2xyxnocJYam86tzN19wMXYFCubm7aCQBKy11ALVVC5VQtLnBuYYZj5d8CsBDzUXPqp8uxvgpDufqE",
  "key4": "3MxgQUaHVzSsnZwgEy3gK4wJFD7utr1tsja2uePaTejtWeFLhBA8jm6T8ccWTiJoeQSvv7XF1VWLG1nKVm2KEcnx",
  "key5": "sYG8rv3T4jxYi6Yy6tYwjsjvu8AJRWRKdA6FgSoSiN45ZSDBFWmL3FvRjDcWQ2qMhxaigDGxxLPD3YSFBuZowJw",
  "key6": "3eFRgnmETVEtidAu2LAPujrSCkxQJR9mksX6JiaNaYEk5HmUHiwAsxersNxXSJi6Xc8EU9QVpyvks4vTbTVBiB1M",
  "key7": "4T1S7C7HHipRvT5BdET9ggfXV6JtKJxLtxeni4MfknfcGZQvSV2VGR7jybg41rfzK1Q2Bzp7hB6sNd7te2xnQ3mM",
  "key8": "2LzdckCoXKomqAQhwA7xKr45tcMNApDBtHub5C18CNXjt8rrADJron7USy5EvWXpwegZjsdtZDks5xPEEzVS97z9",
  "key9": "cki3URhPPPXEYPJiKhK1zPJSSuGwRYhhhjM5zC7MiHaPDn3oTjuJwNFEAd7v13knFcVCKm8BzUkJrbUg3TC4TXX",
  "key10": "QN9xXqjK6Ek2aoKDf3ZQc9EWqguGNiEUN2Khq1fTFz9qmBDDFYxpUCmySTLNCPc6mAsd7X17FkvFzDYg9xgK626",
  "key11": "5upkKhQBM4grEePPCSsTEJFhWPzchwTtBXRLEdGV4FuuVL2TMRigpRkrtpJiSLFQUcuHqSFTNjFHjLTELUCrgPtu",
  "key12": "5v4YH4skTBQRYWMMwF68ErnpP7HkNxAQV1cQ6NpTtYrfh5fFNiKJNLJKKv7712cwEwdj2F8dgUthPjAb14FFnvWT",
  "key13": "3DgJKbKSQ7gzk6qzcW9eRZQg1uTo3PznAoLs5fsfqW8oHUuoPxQajHxipYVGtbBKGvX2c3NEDbk3Ass75vwJKXzf",
  "key14": "4mm9JcTmUKgo5RDaCrs4pd3naott6Fjd1GRL1DHeWYXqUH31CNwRMk5ofZnjRfGQMTUJWaXKHCDEjXG95MUCsUE8",
  "key15": "3qDJCLnGnjWFEjCPuTAc6ofueoGCrNEhJCVnkWMuYcwUY8nMeNH4jnfSTC79881yPtkKEPLxqWrPLxX3BGZvrnpP",
  "key16": "4ur8y8wnVavnewdfLNBw32qHwzAeZNWFTpN1fcNCKWvP5obemD3vj2iuviwPGPxgiGjPm9jT27DXjQjXV5sMqirD",
  "key17": "2WQ6VnG1oSiD5y2mi6F1SHkieULZQ4n1myYrGkaT6h94w4cqKMSBkhuYXXyxmmfHVg4ATmRbhb2ighgNFnG77P5E",
  "key18": "5wGVwqMj2cpAWLoZcyM5vQRv2i7BqED5ES36WQ46ZuyxFGCPjFZtpuw2X7j5WashzweBCgjuPR7EVRMACoWC9P7F",
  "key19": "3MYrA7Z7eVWgEHogpPbKd2xXjnqYMY5R3dJg4iqqSvAGBti4rMudwJ59GUbUQM1CcDQNq1cgmqTVUJGXeVkvgVWw",
  "key20": "67VmfNqqfnWU9QoVZQoRhGhdXJQXqXB6Xk2Q1BppcQPwV38EcoSvTHRoBx8hDbU6YtqGtbPd7DuJiQnQkhmJRTJw",
  "key21": "2gaS6dwGSiD2qiLujddrKoPghsQhxe77yCvrpQFtuWm3gQTRUJeF1G4Ds7Rd73CRWurq55YCvhwwhX9S98XM68gX",
  "key22": "2YP3u4FsKxeajCyREiNKnuD3EwvpuE3U8UtoGFNoXxVXQC7VZMFxUS5776uGU9k9zcUBave6qgVpkiWiVQFBTmfN",
  "key23": "4BUTCtmn8mcyYvf1puF85au4wBHDBERuL7u9LgFt4UC4KtqnTfhzx2q1kPbRZJrGDzaLiNQFLLqj4C9p3ThgrXqs",
  "key24": "5UoR26mDVQKCQn1BZP2P9ifRAdPQMh7pybLR9QXhDhE6mkGuTBSNx1GLgDzovKArg1XRTS7fRpxcSg4h1QTAn2ni",
  "key25": "62KZKTakExhrrUBqodDYNUVanVJUGTd5UEn3ZBfKhEgtwJbysycCZz7qkWiaEWZnRDNkR77erNug1Xnbmoc6ZgsC",
  "key26": "9epbrUUDrgt82bc4C3wKqPcvAJToWvJRTD8ieCV66eYYBgBm8WFB4jjuQgQxyCbt9NDLiXWyudA2FuJEmi8aMo4",
  "key27": "55jvNgoC1qK2upkhUJqvPsWeJZGdA92XBxWTrL9nJq9tcb4sB34GGSjEkjijKXMuuz2Swym1Mub3dkXJtY9ATNDm",
  "key28": "gUM1NqSrNBDtUbakSZUXnpswobgSmbE7P99cd7ECJEiBCB81jxg9fJZk6WxKAF1NU35BuoP36EbFhGQd6aNW47X",
  "key29": "3u4n12A93gzPoqTANxBguV8otS48jnbnCUKYHkkdvJuqraDwJ146k7xwLDAHwhwDY9uFEduBGfawAfiRHmcUQLVd",
  "key30": "57nMV3MSVR4Z6HDTm1mZtsZD5RSdzAKJCbVvJHWA2m15BYPszo3FmL17f8MeHz7QNeHqJMFcFLpFH7Zkvwo8pA6S",
  "key31": "5yMU3dGBy4iYmMfWABJNJrg3T9yHjp8PxVz8snZyNQ9s5dnF9ns6L8nT3gA3AQBA7K8H4QkQ7YKGDHVcyArJpUKf",
  "key32": "4whej1t9mDdJiW3LTdRvZG4nZn8jEzB3pp8oijyXyBK7JRFNG66swAeJ5gs5Cbed7G7BZgEUmteGS8XoehCv7uHf",
  "key33": "V5RMrfuy4KprVyQ9xHckLXkZeDFamHUNdxTK4fmLBuau17wCKj356o2u9PT9PiYRPsaGhhZFV7nxLLvQtEvPajn",
  "key34": "ZSXkuvuNKNMt7NRKe4dFRrXvfdAmEjxCyhpQUfr1MAqpsMNYPo3B9vWsMSeVPyKUzWwG4G64ijLwTKGRMzXD3U5",
  "key35": "9HtCcpDiNs9cA7K8Kt6q7Mx7sohiCQ6ZtvMpAg9XCNiGb7to8o6W2KzNLjcyr4RDZVcFY4mRCJ23RuwzNtrgXWw",
  "key36": "2xKoNQeYZhbpkirAuQ9tcS7rAuQSbj28e3BBYBbYte9JcsKZo5RfxZTsmiA7DVuJvxthcrcfD4HQbRJKqyWDfjgv",
  "key37": "5Vm1KRmbGpFTFUs6whyhH5F2mrdjco53zyjcjNxCyQjoa95GypxeZXHJ9BZt4nWKyqV7vQVLuuY3pExjwgNGdY2Z",
  "key38": "4DwDRR6wz6scbTNWKdhn9DiSvUJsX49cq9vowQTLjPzQ8VGKTyE4zvjawu932d69R5Mqj1pivEvipBaSkM2JQmqf",
  "key39": "212jzNMUr6pE5BCZXsh2wFZHguzqN2Q8MqmNjUBznXq6AARscpvZVzjdwatrnLcaQhgavijmVmHX7E7Z6S9TmJ4u",
  "key40": "2UKmGagjpRwDHrGr2r8mEL396XQM3vgUXunuZnVdvtNq4nPWHVUSK5rG2CPp11whJWLeCi6Qdoxcjtbd8o88Cdk7",
  "key41": "2xdKWvC7GzgZch8jQ92xNyUDWomhuZGVCY6Kr1hiZxE1o3fC4ueP9uFS8yKL7uXMZcizZZM7UHnAUMCtRBhobzsM",
  "key42": "2KMkGaTLizqXjDZFcEtg2a7ptWbU4BrH2Sx4ScXoyzaNzusWmVGRx5aG7DP5QNXC2ZqGWBi3fM1HmfJ4hubDYrCT",
  "key43": "2k6FseUMECrHBB3bUfCu1g8tkHvCtb1f2PteBLV61cC7BqCD2eKeW5rpPid6Nsqoqd6gZAqzCVs4aGp1SEMB8zWh"
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
