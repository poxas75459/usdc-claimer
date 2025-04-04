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
    "4URtragUiXWuj1CPi1UKCz6c5Cgi497VbGafqAqak6kzN73dcJqKRDGphmorXZVeVLignEf7LGVGGNrRb3dL8sBE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CKQAqaLevwfKshBgg2yCGTZr7Tc57BRuZSo9jfTefcQcKujSp3K9BVErDyxbpySqTfHG4yYv8GrGq3j7qp8iFYC",
  "key1": "4yTxa3hVuvvdeNyb9nq8md9XFJKgbFvXFyoofe2CMbKAuSQ1HhxWk3Fvc4iRiBfdvSJw8HcKHSAhGPAttn2Yp7dL",
  "key2": "3z3cC1V9x9subBFbqah1v76Ma26h81Rs9Qt9uWjzhxsZw5ED6ArxTpDSun4UiEGRau4ykNZ1P36k9BiRFsW97GdW",
  "key3": "TaK7BjjC1LPca7XHJBUxLxzMVBSkMUyD2YzaiXRFkAWFvUyXw2ajB5a3ce6PaCh3ubnjTDayXe3wAcZ186KLxe9",
  "key4": "2DNp8RjvZFv5QFEcAmrjgwFW8wHogJysq3jnHa3janf7epb7gRJz9qAwxLeopoKLbFMNTBtbV4pkF2Hs4iTREMAE",
  "key5": "34mWRYLNvPKeoLB8qMGrbGLZTLUQG9qzNBX7Dc1peauWtXBqt4VbuN48vo3cZcVwtnxSEFeJBu4kThWxDE6vjMpz",
  "key6": "5EwpdySqztgGomnamgY7FjcZXbD6ziGEgz2MSEBsNTAhqMyubzuabCARwqLhwtCtUXer4R7oBBQhP5ZLvZHmP7yn",
  "key7": "3DZg1nhHcPkXQKtiuNTetpSWkNxxuVmBjRVu7Yy7RkaGG2usSKZGcNUjaWWgpMN75B1dRumtyZ5vE6p9V1jiWZnd",
  "key8": "eiS3arLicVQyHpR6RqAduaN1uMRdRNrTJPLqLEZWGRP9KkakkPSJxzF1DNrc8wexzyNEBE7XVMw3uWpjyVnhygA",
  "key9": "4nCnk7PnMUvhfMSEb2qWn5mcc9DUZqLjSn3vb9E8J8J8RCw5xDqjH82BkQREmDU33UtVPqKzDFBB19Wyq17BFKSq",
  "key10": "2MaYx38GAVUFQB2E9d7hanc722tNdTzVxF2ofsQYquZQCFN3gmHyWFawjgvbP86KNUz4NU6CK36ovUwtritPVDGa",
  "key11": "2sxwebHM9vkB7cMD2wFK6Pp87hhPyEViaf1Bc1mPiogb8iUkPzAVQtt4C11GoS9hej4Wuifsu2oKkBnhGbT3Xead",
  "key12": "4HpdC3gecuygkQBdKvhy2bp7fKFzhWg1SrknUuYpRdsXjpdtkzXmifZgzqgLeAdPBtndVYxJ5ntVm9ms7AJFYvHX",
  "key13": "3XL8YrYczm8GNw77hkshxswDB6MA4nbPmzQLHtfrhNvDKFEfXzAGYcdCaX1sYMGLNGrqpNLeHCpsaN1ca1wGg9bK",
  "key14": "h2HuLsS86GKbt34yuT6yR9boZqtGi6wsKAKrVnkV4xvsiggHmyoaz1bM6AhULNaSmvscL1vjNiXLXF67BybdXQa",
  "key15": "5qNpwNHBLRZhpdMyZjdNG5QAEQgST48XWWnKbECELQd8Bkc3tVPJSrJX2rGWNfgoYupPcosHxyLeWjtSKH8CBdZY",
  "key16": "4kZBECSQo4XBDqeGNuyCSjA8rhYqdwvdRj3YPNnjwRsrnSujB1M1YDwvbYwVTP7uqVFMQRwd3cKXDgVZ3bqv9NPX",
  "key17": "5BtmiNZq1v3c3h3knk9QW3DTHSXG4ovaajA93wnpE4awmQypTiJdn4W5a6u99iwFX3BrXkSSWHRxjpsJ9i9RHjfj",
  "key18": "4d5h4VbjVTd6eHrPPHdRPtkkN6vUXn7pbCiaxr69Xq2oRUdQVVp8V5J28hXcLqhWjNd4veRQEJakwV2U64BgBRQt",
  "key19": "4T9cMfsMA4XzjjxnbCR6eiGn6xZntpTn6FvjWDChemmccGzDCp3PiZCTDqUepjRkDLe2keAEsRQkB7mVJCDX45tN",
  "key20": "s7YMdCuCVKRw6aFqYz9pv87bBb7F85emrHyTBceuMUmUtsuGDPCSpaBoCiLc3Jbscw1PBaUnbyC8SgdWUMBAE3e",
  "key21": "5UGgFLcnZcf7z2tTVETTEMB2qju6uucBmmmyZk8derDaqN8gfCmZgynJ2mWiR6PwB2w4qVykWJB8yAJ4PGsoAeU",
  "key22": "2vkR13cEBSzHJRaztH5zGChNj1nLTZULLqZQ5DgcK64P7LmXaSaW4VxXEL22Ng4FUyNYrttJkpugqGaEMJVCmbbE",
  "key23": "4qcnp9ix9bWcwPvtpuYz6Cejkn3EbdAcPbgXWKwUs33tHqgePQL5UxcJETsG5vyyiaASHPrsBoo5BP479eeQBrQq",
  "key24": "4Bmu7N12zVzVs4F8rTWUJASaNpgSQyBXtqfAtE4yRyEAsTBqqiafbdQ1WXDDN73Ca3Kd9aY7TfN8e2xhzW9pZ2gS",
  "key25": "4iLJJWSX1xmWKXaARNaVRyZkWYHkFQ9FdzoWGeHdoGVaZ2nHbWYGYGmRAs1dc5MvhyWa48axym2yAkrzCfVaSXLe",
  "key26": "34i5ypLiPhgFL9pKrUoe9NJ6TbXFiKqWXLsJXkJtMgchvZTKAmp6ctkXYizbCmE7nsVULNXn6STfc2idGAw8n7sD",
  "key27": "5SJTRHmrej2pAdaGcZfRe3h5wyQdgz2P5udjgDg6jrnYwdScDyoNrCLunPz3w2ypDsRAeKfUxLJEvkwJgDSnd9wg",
  "key28": "2jZT1f4HaEFpkpNiDLvkhkvT3a2Fox3TNu7pRWFs6nM1K6YzqjDLqgQZWmizk8AyTECLvcrWeW3M9UWy9HiY6gDy",
  "key29": "2CiNv8uJMGt2kW1kRrNQ1BDqXaZCZbmAavvem5HHyEtW6gBkQmte9CtExQXaoSJAjkuL8a5moEdD1zTncP9EJNQf",
  "key30": "5oQdKQPhNw1M3RwfYnAh8uM7u8F8iMuM4a6p67Fefg5BQ6pGdQuJZiaXNPp1smScdnbBFfErqD2kJ239fY2xWmw3",
  "key31": "4euP3Rje3fuJEyVdcVoeJKyQnZkyoJ5M1oVz1qJLpWYMoUuNPTkGJqt3c6pPpXtkCvVqBBJpFipPG5Edb8rMFzkt",
  "key32": "3vVXSmM1V6aGSeSjSogiusMZTYMMP6CLAqcjp7R7S4AyQrVmydFkeDaZPF4ATLhHe5yKgL8HU7KKqyShpGCWNEx1",
  "key33": "3GqPT1xGfjLzQkwh5KZB7CKrV56QonvAmv1e3V9xu7bCsw43TFXg8KDh7E5JMZ9G7y6kDhrnx8ZqNhX38tESpqps",
  "key34": "55N2Bj8HXQg4PtYybX9uiBPK9W59RjW2sPPpQVJCEh3UGKarcTb8Ayi5xovddt7wq16jsmHxmznhit8DPfJwPJFB",
  "key35": "4jaKHbh594jno5WDSDPziLY9PTsLGhzxq6pAGWt9WPDeRnvny4ywm6QMUjbeUNApXfdsxcp7BCse3kPgd9HiomKy",
  "key36": "4xPeRrLTCRTxT6Andi1kftTSyLcFDrssdjSngnN5Sb7MxG2FJqwGDg4KtF2YF3XgJyvY9uAJYu5RU5s1QxmfeXkP",
  "key37": "5WxMgoxyGggUs8db3tLJyASePsGcfHfrJ2RZJYVCpovwYqe2ZCwQCbWV1VMAhowSqKxKvLBxbwZ9voKVRvSRuccm",
  "key38": "2yjqrQE6f4NRknbWtW8BbVqDrxUvaFBQRKCiqvda1AmoQoQ1cHmdscBgTBRt43FNEaPNFp6A5jma4qxUt7gEg1BC",
  "key39": "24CQeeah6sJkXakJbMtv2cFaifUGgtxPY1gHgTkzdGhWTR2diuki6DmSZ9ZUJiMgcbRT8dK4pG2U67dYjS2y1b9R",
  "key40": "8kzt2jEDD4mCuSupCjTGhD7rPaaLcfviyaxnweQp9hdLZEjdb62824hK6rqdURBXM9NpLHbewMaxuwccev8KsN1"
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
