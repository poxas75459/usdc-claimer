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
    "5haknCzC3aM25YCd6dkrtDAhri7rttcZ3zHGw5vgA3T1QR56Th4egYC7YZv7vyeFyM2tzAdTFAHGpyZ3WQQUMXQ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rbbsv3nKdVRGwPHoSbP3W3mcaD5K9G5u7bnbAxBnUJRDjCv355Es3rFgq1W5khCHcNU5J7MvsGsj7oMtuvea6hP",
  "key1": "nNNhNJJuQgBrdyJUqiwvV6LKoF48ZCJYijpDL8Jxh2TUmYdEUESDswcvVYsvjBYgL3UvYVnALJw2g3uuQo29rfJ",
  "key2": "3DqidCZx7ijBnHQpo5WCvN5mR4FDTxWvz8XhsQvo3uT28QUFYNHQGw7h4VYneRpJmxQEKUwRCQFtcHNHw2f7x2xe",
  "key3": "4kWMN3YdFdMfx1LeCz96foNphQjxvUiAtgiwVifkFHKP4y2BHVyrMW5AeTi2ckmF8SW9WW1X9e63bwHVCENXrgQC",
  "key4": "5QAkPT9SjdYvjUx3yoYCUBN41iC4GBXTcMz6kWGr6F6gqmqcsKLZmyWY1L9gKUsjLZ4LxTMcdgHW5Y9rpt52Qyz6",
  "key5": "2CkHkNXzJLrx5fPqXQAgQFwxsmy3pQyUzBXPjRNKpgfk3aRB7m5wNvyHS9WxNUwY83XXk3cCRj4PeSrRLxe6fEJS",
  "key6": "3qAUBT5xeBRYC1sDMxpo955FtJkWHPdC7ZJqxqhYwosL4BX6D1EsHfHG6zT9x8ui4LquMsLkFR1rFiYAWSaUhJUJ",
  "key7": "3nvFh38LrskqToTwVSCe9ZwjaGUxx2VMaBf3qUzWqE528A1yxWaLkUvKJmn5U9GN5DfA4WASSbai35TcybkrVete",
  "key8": "5gXnbAvv8GLmQL9yXYD2qQt38qJdebsBDQbwbKLU1N5XghsfYzMAtgy5CGxcju8mzymSiAFFbTTvqU1mYJivqkug",
  "key9": "41PcHgRyW7pZHJzcaGr22dYgEBbZN9LuKNNy93jf4XNq2oX8FBceiPvi5B849JQ2o1wWAEZZhYnfjWkYt222xHj5",
  "key10": "66zcByz9KtXzotasy5oTFt6JLvXbdecVkXHXAeVEiyRSJ6jUkKfLcw4fMph7owsSyfrmDvoQXakbWus2WK2Uzbk3",
  "key11": "4HDhTYZHHcQr1km1Sh5j1za9iLHXY1fYmpvPSHWBgpQWQnS3weKZS3PFgu5cvAJN9qb7ZgEXwNFddMoo34W3omiH",
  "key12": "2H4qEka6tueUtemyY4fUuh5aoteAacEkqhgrtEUR7b1tKyAiQFqmYfGYrqo55iMcbngGXLc9ZeCzpv7yrwpDiP4q",
  "key13": "2n32GNUpNCBU5YUcATF1Soq88bFs7HSzLmfYPVG98bD2kk6sAcJieVRWpGiyofraX8Fm31o1MoxXGUf7MBSdwRCo",
  "key14": "5zQDs9Y7U58EycRUAnHPN5D2erqSJvbwwAwcS53f41VjBx2kniEUKt16JGjVxGeNfjtMDP8FVpi5xfYLoMHLr45w",
  "key15": "4DMzuLX5CndRFrUqM9eoGEHU1DXbFhJi3N6Tsx41Um5JrsNjsrYEiz3apR9pBTN2x3F99Sd9U3pLhPhmf9vdtpkn",
  "key16": "46mua5p3VgJa9Y1pe1XYR1bBrtMGP4V23U81ZScCPsy761GYcrT5h5ejfMt7kzKteQQ1CGGhAaq8PKZFzkrJ1Hma",
  "key17": "5uZkwqDBCjeeHUCnNK5BefvTTYk4napQaihnppExpvpWg9XgvgebhhuzK6ksBsphoUMkyB6pTM7tUAo4jfV8fTJF",
  "key18": "2DatgtQ6v4HZAP1XcYvq6sGohzDRCu7denqWNFHTXdxzomqgQmf7iuiXoVACT1Uy3FFKc96Lg4CiNbW3mY5Ci9rH",
  "key19": "58esSkH3kuGVaAWHsk67ADUmkSq2tQQRcMVCqGS11oYZUh7G2ythYpn4qYNf7NFyiz2zViCMgkAuSXvMyRsMHdhB",
  "key20": "2NHdFv78mpEeaNdnhjKVkTNaWHC1vctHCTeJ6LdthudgXxfgEJpsUXNbg17KC68Wyj24xmb22pGeE6dD3gmWyuEe",
  "key21": "36PVYSwdn2rq6EPCmKn8hz5BMMYsrDqLTHp8n1Suea2PoQaF4STtboieP7sDttrQtd8nHXGMrWVUAigEVm5Q1ixP",
  "key22": "3rgesJhyZ6Lhnw5PkWv7785onHFK1nsU8bcwFJac2eQVm8Bw1iBAjR7brPKy27C6VKQsmR34pHudGkG8DRtDPhRP",
  "key23": "s1fvU2Vez87gJkr5gkedeDNjAXbM5mTZZTS4RY9zBEEumdoHwSKYJwXuiEVkwMotZeDCijE7sQ6hm3vumc9vPKo",
  "key24": "2T84KczbKzVuUSGWNsxhPo1KCofRar3XEmbdYhq2eTBtRLVNZqs7QkSAU5rb3HwNdqdVfmhUJwsurdCdY5cGo3yg",
  "key25": "5v6nT3ynJzsR6Z9FEdxjvBRXRAPSdS3RH5iLjLr6Tm4orV6dEyWyCaBTkE9qcRNCkYSWDh6yV5e5VGABpoFunqyF",
  "key26": "5x33U9nuxVkmnpbacWbFYTHTpZt2P3KTSZ2chVF3sbPCHmGDi1inU93E6Mpri3kWwjBVxWbHKveP8njQ5CVVf7Rx",
  "key27": "3Tft6TcDLuVTJ95yS8swvoTjCqu3QCYEFsnun45NeXDMpjepYMqSkdhZY1SgKsbZzh6YHPUDYNaAF4CViaKK2Z6K",
  "key28": "9RrE2bohFd4wz5EvZKEqpVg4y4KRrDPsf1DMkY9VzWhFnHv6jcX4iFJGxRxuU5GoSkwFL1CES3jEpTHbfyHzqzK",
  "key29": "55n3j6VVe63FVuTAeyz1a4c2voUG5p7AtwYtYGYcn4NgG4sKmYmGSLnjg6fcTi4F1S8JgXEVKJVUvhSfNDvPdCJ2",
  "key30": "39At8Vt8s44D5o9B1EJY71D6a5kkJH6mR3MtT1TrUah9GvZitekxNuQ8oiMvRm1MdpNjhhygRqNFo9DVWs4RJ2YP",
  "key31": "25NwhYFpWwjFmMGKetqjDAHZYwC1xYgzbEmhb9RFgxAW3SLmy7Ap5pJcNdN6MoJ5hGbMPewPxuhtwcV7KKvTtfGC",
  "key32": "2VLWexJH1M3dRcJNj6R47vTdbSJ3ESSkb2RqQUf5J36XTnyzAHxqWeAsKPUx9VPM6jCpSjqKuw4D8bPX9cn95Pxh",
  "key33": "3Zv9TiPi2Gbk3KdGUWsHAvVhV9839Jh1RRqUoZfaGNF3hiPZdCNo6ErPac2yUU7ceiKtMQ4aeo7QtcVNdDdJSAY6",
  "key34": "BLhtQ9wQtCArLJnoe1ZVrvLyiqM2DmbctdXjuXXiuGiuUeWac7sHgYTz3ZPJz5emzXwaGexBjhmyAB8LJCzF4WF",
  "key35": "5JbPwqwF6c7GehM8KypsGgs7ffGktK1egkRnRVB2sBhqvy4MfFcpwxumL27xUcV9a1CpebW8yAsniK3D9gAzVqtL",
  "key36": "2AcsXUxZMFJvoMpFSZntpbS9PMTSrJf7oe2RDP84wLHwT3eBJ9T6cFEidiB1Z16nMHshDdy8DDNqKpPsr8BphV1k",
  "key37": "4jfVc5FAXpuA58TKr8aXK4BtiQZJrMghTXq4ovQzwSYmjQ6pniQpkrDZa2D1fCLbhErvJKUs5KbvBRV1bakHTngs",
  "key38": "2jxWyFLSHqmeCdvb6wx3DJ6sXYxj8mLfHTd2exggbtF7CbxQegVt4nUdp2BLNYFKAr4ix6DNt4MyQi2dH7aPLnLF",
  "key39": "5jvQzKxXT8kj9FwTNYJ4jrjaiBv1am2QRym17MLnttZvVBLfvNQVDrG9Ldbpea7WU6H39WUwU89C6TbUwdFwFqRN",
  "key40": "VFSptLUTBRn6bWTaMauWVYogcNhR4EbrTmhaBw65HmoZPmGcrNhNsU5R9jUvs5hAZpz9j7byJBkqW74RHACBZTr",
  "key41": "61idbwLYuKL1Airk5jGXTGKPYZSzvFDRpi3QMLzVeJCRhE6PYQkoPWmbiCmEKYnKZe28TGftVCa6xvkPm8JvqMo9",
  "key42": "3TGJhRercXSpiGxsFdY4orKfffFnbNDTEQCJTWvF6i7YXtiSbMznweBevUbedkcjM1Uwh5CzrnQEbVUSxwToRUaa",
  "key43": "4mHqVCetve27aoQXkBUtQx16ap1hWDFrcFA5yBnoZ5GvY97fxGCWLWa9GZgb2RMiea2aiGc6T6xxEEiHgxwXYZBj",
  "key44": "6p8skvdUuJzN3BF7ei9PnBdTTAgZwnaLqj97gP9vyKNtu869fgfnUpBmmEFmhYVZ2NiAV56NuAn7WBtAduRVdRL",
  "key45": "64sM2MKJaQDdWTbtphdXfvvpoFCcxpA5HETWSZL6trf4JpVrW7LUQopYejkywqEbpiZ9zaNpT5MW5CY9bwpHYP4r",
  "key46": "XYoVsdFMqCn83cc8Jrk1i8crdb4NsqVGCciZPHn2QahmKYdUL98p4gHkrWwiVtHXk84HpTTmMMbqbZGx7tXCq2r",
  "key47": "3FHMVEtnJxbALqc8QUHEX9rqehrpXZEjskboTnybAeRQaK8tkaHXbNVTXhtFo979572V22pCdufnqSfUwJwWBkz4",
  "key48": "4KoPcebqDvbj5zqM9ma1yFDZs1hZcLf8BrmSD2XLFoCR15YYcfsCLBYxbvTsSGMGEziCkQnBdeysr5HTvBrCLmn4",
  "key49": "2rT3sWigUPwtsNHvVM5zsScdW9ByvuzZwKKdyL6pZQXo2Z3Q1ArH7YMZvWJaTmhce2hPVSzgZPexqSd7Rix6pBhP"
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
