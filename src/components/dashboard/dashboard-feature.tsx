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
    "5zeCgwGnj7LSZLF5XHhxpKgxGKGpP4mCnthhbj3MYqLi7C2zkVfek9ky1ym6wtKv9tMUERG1yXX2PfK3TFTZQYXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mrKNCrK874c1qcAZ1tHEdtPFLKpoEmjTiKM9mnVGpCiXE7thtHu554UX1HtBj5BgQVFfc23jTm1DcujxefKugJs",
  "key1": "6ZqZj9wbrtfsgUkxwzkrBSQvWtnzL2pt5gSWQoRijeDEydQGbtbVkrcNL7NiXbinzyECnJ5BDfdyEnwUN7XGAU7",
  "key2": "4oj5vWJoH6aTzWUjo61WTsqnTydLmcvYm7mSibPQtfP3ea783J53StiDS6PwiBwMCHrYt73RTd2qYTfLFCNGrSHm",
  "key3": "44VvkpWtedUrviLYBvHMEombcKrxTES4nJH9WhnZUhYaWG4HUzTTQ7J8epXyRmtTaoHzbn7QM1EyM1n6dxaH9uHu",
  "key4": "5eHDMidPvUJHevvhZro6cwKWHfZLtowvavfWCCtxgauHZyiLZfoDfBNmzX6ao3kF8hUe5Q3gC5ZQESvbvPoz5fHC",
  "key5": "Q1WtyT5kM1wvmee6xob96UraxiFy4YNNB7KUBRUFJW7B5hPHmYefzHt31pTyuCXyCTDwEvSZ8EN4ZFSyFRu3kyP",
  "key6": "7oJ15zFJq9uHo2FeDNAyZ7WBCK1W46XpEgbvDPAq23h7KkfXUZPpJsCyvmHuH6Zg3m6tq24wUtcTtMhwFZLzCcv",
  "key7": "6HsbAHHYnSSR8nh449RaNRJxsbU2sakskVqfnnUwqfZNHVLEZNtqmYJ2ctaNzUfqgGGTNLREiPEZgyMdnBQDdct",
  "key8": "2MbaLntL83bCo5qS47QpjmnMVnHRLFEtCeKYYJuv47d2wfjareEGyKhLN3X3XxcjW1iuTGDzJp1y9raaThsQVpjp",
  "key9": "41uDwTtvvdDDBUViSCk9av2R1iXHBWzGLqjVUHjfuWBb2igvBBQDfcsuQT775myEkYWnZWXUcai9zfZfKMVz9CeR",
  "key10": "4cKxkFsq1yQ5Ne2Rw6SBsHafMGx5VRe8gsT4PSWkSHR8BmF6KRaPaM7NoVuGYWPspBz2tDuBiJLKMRroRuyPzc9U",
  "key11": "4iysPjW3WEZWmFDSichHrjLbR2Y5TAZNhE8So6W1mv8osA8jimpMzFgwYr3Ac1R8FFWETB5WFr6ECYpaqVgUbBmu",
  "key12": "34H5D8Dqk2jryVu5GDWjbSCZc5uu7YaqMhKttWVGFj8njnFLcfCFLXucVXmQ2TVQU3D9rfUwhwsVNznV1kf25XaZ",
  "key13": "36wGV8eUfQuf4gqmyX8Yvt8bb3j9SoKLYBKByJ3cprEcXZEAB2GWxi5aP2xSQGT7h1Z8cq7Fxj1c8KMT9gy5BNvJ",
  "key14": "5iGG43m6D4cpWDe4NJsf36YHidmt5utHRrL3bTfHFAv2msoty3F18rZAvRgmCnUVJUzUkcWjHJjvGL49rrmTJLcS",
  "key15": "2bL93nPwQZr6dhWTJ6VkFBLikaboYeMQnhxaaKuj6nhZSgWRyMkXrV4pcELXxznVNGz5h62uRJnYCdXy3E2Uxz3Y",
  "key16": "Meo9jApHeJmvPJP8SoZ6BY8x46DqzFyS7X1Pfidb1hEM7uVB7wmVgdgqVFk4aNpdyVdzPnbDuozpteAb2w16GUY",
  "key17": "3ARtMgL52cgook94J7VETJeGBafxYXZJPseaBrgGQ4xVFHYXRhBCrchKvGotb7coYTDWqFAZcP3ti3n3asT6EZ7q",
  "key18": "5FwVqdUCLmX5q2QrK2qYGWzSnzazjkyYZaq2fAd9PavrGwQhz4DqF2L9xRny29HT17XXyiUqqCmoPwSQPRo98c5N",
  "key19": "4PAj9rLVhZ4Y5eM6bQSUmH1Wp624f3fAXQF5zvr8U9P1WjA2XYrn7YjimuaDKFXsFktJe4dtd1oedQc3dvyYcUW7",
  "key20": "3UDeARsK3khesCg6Doj5psU2RGZLHqw98xK4rkMZb2jsoraEn9hcJT8ZJYwhbtLNtqAYq8Efv6vPLTFAfphrDjRT",
  "key21": "5mgjzWgNadBEisEGhCLjNAjc4jz9KvijpiTSKA1CZ3no5ScMP1Q32Cs9m5RYEvaH9cvhr5ZRCrTY3Lb7iTUDoDtr",
  "key22": "4dyUqfKTwntXrHjKzJqGozBcZKLSTRfGCCh7Mi7VLJ3N3TfUFiA6ZXFWDN5NShhgZ1bxzyggi4PChDYFvTNo5G5U",
  "key23": "2TU5Pxp5TjFG438FrcyH3X2TGJMmafy19i3TK1okMgxXRSybjUNsAYjbWmWa6jRCbaEX7zxCDx9KyKnp3NYCHXWa",
  "key24": "n7FC9iJX86dVjx24YCeNx5ESqnpDcqH5LuYq1ewGYp9PfB2mcF42uuwnJEuY8TESohnvE6SuVeEDf9B2R9UBBZT",
  "key25": "3T63HGdx4pho4pUPtwvFVuzWZm2bx2Bd5ovDeZJBdDa63fnjcpAC9uPMinF4ehiqYzr2YwCeuvY7JPfigHMryGi9",
  "key26": "39rosRqkQC35qjfp57we6XX9xMZsVVoyPsT9NdkBdnq7uqQNd6sHktGog3twynefMgcLkWF4FM4X3W2JXLTAE4EL",
  "key27": "32mo3usLFEeqHgSPumRbJuJJqffVjVoN3bbYE3qDXFWWAEUyQXHjzpmGm29oF4M6CQ2ifqHW67jGvSpwWtgZbayZ",
  "key28": "VhKtj1c31GCdTsjfLo6fgRi64mksRVn7p2ipoSU8LUcxhfRKdK3NH2U9ZqMhMQdAuGURtvL2nddnYN4qU9C2Xyy",
  "key29": "5pGve2gNPANVpfft7G7gc9cvTPrXYtiPq94rKdj7JiUwh6k321FkgxCVd36YMvwqz5KQUHvAuP8RJfXRL274ogra",
  "key30": "2BfydvyMKjCuctQ6VqTFWgbuC7fQyBtUathKrfoTHAH5qZthyPJc6DRhKSb9pQFTt1T95x9kZ6VsyjzZJRh8ebji",
  "key31": "6DW6zjMC4cJRoni5eEEvZaYSFXDqTWe47ZrTJBPdtudpvv28sXumcVefAuigxJym1QnreEMrz8bidoMkkPfiAvr",
  "key32": "5JpKgfoCeC773d19r8EuCesKSHgpd6ygt2ztDCCNvAn2xwcotguEmLfEKkZRdc9BXkJ5econPEN2zxAmYuwhB7vx",
  "key33": "eyCHcBDdk9cJzAhEVQYJwZtH58Qe9cJRBLy5pow83wBmhNnXJopM4AqqCgDFgZ6qjk9HBvKkAMSB7jbGaY9o3Rp",
  "key34": "5grr7YQNBfhiGDbEUbfJrLAWVsi2uUv2ZBYeCMPFuzUbzC5F1v5MgaZJUjLxinz4YKyE8UbgbSo2pYhnY1DhFE4x",
  "key35": "5Q3bf3xxF1GnYkDeQxYVd7xKxGUzeR7km2zsc7Hdks2vmdgbHd6nnNS2PY6DcLzB6nMjjcp1PpoEdpiZ4cSdY8m3"
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
