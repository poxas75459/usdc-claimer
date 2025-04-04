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
    "4RrPXtudJufsK3TyB4nxeK3iGr9tXuewQzs3bUibHezWnTzUi1dyk1LjDHVbhNqxxqL5g7LPjr3YnpGXDk3shECW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26c7pRfFcFTqmxH7dzVc6iF3wsKfASPuhRzeuZtZdPwrkXr9vunQ7Q6EbBLEwwr7u93VMVHGGiLs9ez6fSM158Wm",
  "key1": "3WAFYw74ECpjbDapYt7cYz4gGvDAQ9ZWJuQ1Kup6pp3iTmdjEuQnxNtZsGdnURaVX2d6xKKPktMdGJV1PLBZXksS",
  "key2": "3VKXaKm9JQuoqbGrEfstJZ2wezJpDyKS3n1hiUDExok48Lr1ui7zafCjGEwPvRGagHq3i9Eu8fVkGu9m9UGF86ks",
  "key3": "3SZ4gNHH3ZrFNXgRBXu5a7vNoZ3sSbhvKHffidMjV1owBV8ne1S65h36RGLVReQJMCviWyxvmkm7esfTmRjK9e1u",
  "key4": "3KLBCe1wRMRBMKVGKEs8pw7QeoTd4sue93T39ZggYG9wvmfxSRhzbNsiwzF7PVXshr5oNCMombGmSZPrrwUpgpjV",
  "key5": "2eY7zUttvTi4YLNzMzZScKLBwGpaXDPwPhVRz9Q9eNrkAnPiogWUyCprbZnxqYqcUqtrCd5CgJQaUmrBd8aS9UQr",
  "key6": "4r6yb1jauDfZotF5aBr2NGpTqng8basE5uE7ae4QfiruMrqWBho1JpACZrMTBTzQ122rPQ52dFNgj2kpcJUvovdf",
  "key7": "3BgwHjEuuS7MpPZFu1WFzf6kaLf3L2rDEdHCkMEuDdUuHquqwaPmyvA2ce7i7rAK5Qot63G1ZnCUuH6sHzNwf3ZJ",
  "key8": "5cMTP28QXPLZN44tkb19FsP5TtE86hTQqz8qGCyrnhUhYyqoW92P2igFAGKwjDYXXa6N9hCPmmzDN5dLAe31SCdo",
  "key9": "5KwQEUSmKhACV4nkWz23GMtnGq8ivCczsgJBsqrxoxDaUD2ExjPNtCTqSN8E1a3MT9gocoV77T2b7MpauxbkLEVM",
  "key10": "2uHU1sq4cFAmaHvi9okivJMUiphoqwLvm7KWFKuXzTsb4o2pXwCgEvEJGXkBb1twzWPXusyRFWBHRpcLyDG2UZZu",
  "key11": "jgbr3Fo7Pj6QueKytdRnZoqjAfU1r8Qq63DSLoD2vTXJXWvQmioofWoLyvnL1bDAEDMrhZ7RUKYmAbrmo5YBfKf",
  "key12": "2pvUgBGLjXws3xyh9X2xsQz5grpJrE6r6RqNigdZEa3rLjLvxWQgPoPFb2d8Sa95e2CDA7BYP1tMcYNws3rnc9mo",
  "key13": "3RGaw5ogGeomyBWnuX4DcJK3pSiBmFS3R8q9mRdf364TnnCxU6qEZSwHbMjYuH8c1whv26rBSWGDkAtWZirgXeQj",
  "key14": "4FTQW3TRAabB2SERGYXe1UFY1MFvx8pYp19ntf9V7GcQMUXv3qJncmMkSePjEAvtTvsPNEsrFS6jXQh6SXxtAVf3",
  "key15": "4bAd4UFEBuBjJbubQCkTBzJkccYv6BRDTd893QKyKBXUvEneoWqDALQ15JMALVwP8vkfrhVHfj1qJqEhW1Rzatis",
  "key16": "26kSkDPvQBTi25m2JWAydsiZcybXtHeSK8r91wAvCXHv3DWs7nUhy6dp8JBoVwx1hCkgYzsE5fQZJne1zQv13Lxu",
  "key17": "65BC6ZbFJpb2eFm2c4W53WffnpgWCqBQvGUp4kdwgxjG71CVRbwXrRZ9ZmTmntQ7JSedfD8ijkZUuHyeXEmeQyd3",
  "key18": "5PgvJfTopCuuDnLdysmJ2gtfiVxrLhy3kHVm1W5dkuww7rcAdmMqRY31HKdkZAtLnhGAqmGBeLTAogBHnPrNyUf7",
  "key19": "2GUHjA75e65QCsweXnHbYXmRquvEL9cbHucGpmt6vJeH2vnJDVADqTKok3iLZj1YdPmLUv1WUzoH9eVZXiG8gHsj",
  "key20": "4L3SSxBkwDxXRvp6bVBdVKDk6jJrU1RbBxExbvxyRytqNZfFY1RiYczcb2YrP6J38i5Xen7EMZz4CUKPaK7Hg9yj",
  "key21": "4t2uouufKeg9RXpLag8PjPKAtLqUqgrzpAzW44QBQ3RUAyoR7rQDuGfWNHgJS3yxTEtqGuEUn3M2374XDptDPKcb",
  "key22": "3hCgF9eYJWyJBbUQbasFd4jB5559DTGTKewBxCEBFBd979Zr7tgg7SMemKcx463qAxYKj87AJyTA2qF74RJvoSpm",
  "key23": "656svKJs4dkSPXFXoUgkWJWxS3qKPmn98xx3jSeEXKezTnJhn3dNHCcnxhikBhCVo56xS3JBRgPyfxH8kNRnsRbb",
  "key24": "mqdQoKeGjr15dEzmFuGzom4ccLWz5yMRnGfrvnBw8n4DUjnxipjhzXMxF1zKCzsZLqGW6Ri8rMNeuya4GjDfPhJ",
  "key25": "4T164uWajN2C3SceaZF1cPqXkQLnUcnZTbtpQctoPHyxYWtP5FmSsHoqggbZw6hhu1HgR75jdfjUXLc99qdCQheS",
  "key26": "67eMdCBUd2Pe9tdvwYskdS2mRHDNMQFdDHrJsYaeuv4NVKekgdJmWwpdE6w3DbCZ1Uhixt7N3XFX9g2tCniLssqY",
  "key27": "46iPDGHWcWft1h3n2t4QsD8eVsosYSqvb5j9m5Rv8HShNBkWHVoAtKebzRjRYVL84MdTELwSnoJU7kH994QFStZV",
  "key28": "4x1AfjXY83sMT7syoVvK2CQ7GMgzxZLt7pc1QrvfuJnuAq78CvNwRZVaAvUfFixZ9tTfMb8oiEzkMoV6EgCUp7hQ",
  "key29": "QZ49Siuv1nKsrnKBS7xSMtr7m1bG6udjV1rsp3CdiW2gAXnavYqtr6AABoiBPKsXWtac5ahov4bdLz9Bd8pJmgc",
  "key30": "GmGVoDUhpEhSUL1p2VezHjfVDBtUeLJ6Bs1MoXcpx1FDFWotaC8UtpuCSHvvF2mt29yGF55aA14CHwBCp1hA3MZ",
  "key31": "5gHBAgxWJuCH99SSxMQ2CfGy6w2jDaty96CUVhJDKA2A1HzMH8YN2rJgbTzAEDqyqosHrCb7x4H1oMAMv6rwaQBD",
  "key32": "4KsrTLDpzbdXKtjwdQ2iFRRJ6nvpk4HNVgnUrYbAMVkdHXKicFmufHzG8Te8KU1zn9DmkHx2JHu6jMwGQEcdfvF2",
  "key33": "4eHZ8pdi3uH6UHJmRDuaokG1QNU2ze7JLM8NBCeKVqyBWH8hyS3VmU8Xj8yk7A5BCZupdau4DX4QxoeRfZGwTS3K",
  "key34": "57xMHPhEb3BtkMQPkLeqyBtze5u3HW6XsF66HPtzHTfU9EMvpgzKCJiXN2VcwpgJehQrDw1is4oeNhw4xTsAHDLK",
  "key35": "4kxkdFDNdgVP5izKWfRZSVCtJG8RQVtaCXxuvQd8aatH3b3u3ywLeVyXbPAPFMYjzfxZ8R1JnUGWVma8yhW2YnNv",
  "key36": "3kq8QNEwdVUNW7ssRmi6B4wo9w6T1e1TWAg2MuMu4aFViBNmoq54xZPjCHFdhSYa3xwoiX9ovE7AoLNeuR6wa7eA",
  "key37": "55fTRSpFn4KE9GNFFeQQgQedz3kuJmdJ63N8f25CKk3RFfPYz1bQqCxmJjqS9w5WKEGWpYMDhJs3wy19TcuRxuNE",
  "key38": "5MZHhjPP2sqyh7QR1vH3MNqLjVUmjLw1ciiYZf1T8jxUFn5acu2qTuTmQiyuSQTqp5xn5Gayah9dkfJRLaeAJf2e"
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
