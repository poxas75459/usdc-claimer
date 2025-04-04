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
    "4HGfj62aVHQvqmFvZnaAtzVJkdctFrF8WjxGGq8Qw2YNpDaf8Mnr22ZWt7qYTy6NnC9ga31ybn7oCf6rsA46cM92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "duAmbRe7Qn3WNPaSrFpvmJRnxcqjvo5WKJkz3pgENVVmbR1EYY5GDeCrpECCwcQN5AsJ7j4pZbPmsBLfP8w5QcM",
  "key1": "5kZkjkkRrfL3XUqR9n1aPNgHPkA5iprMxNSYztjSnpcDEF6jxmdnaHB3ax8CDyfXSCk9DSyUtiNcYQvxaJEHM84Q",
  "key2": "5syEmduR91Tm8QkKBHpspaCmLN17rfwm7A6SBpy1MmGspeNM8m4HLBCBLh228B7VQ5LbsVaxY6Mnwwbt2vXhSom2",
  "key3": "4Ezw9G5nD7bQr9bbQEbY2Tv8LpPZxToWMSrGdkou4DXABvpoqRmh8xRFBbtREaDutMYXMc93WYFFZMhrDWF2yH3t",
  "key4": "5vGqVfpDB96AMV37J6bY6bZceYXmoiRFU7rUQPBLCSLQuuL44zvcU53YxcaUhWrBshc4KLxjvD16oyDB6JvHxuJ",
  "key5": "4cvxrqHjzBZ7S1Zr8Z68aQqY5Ld9atbDvdtUDHVG1HEukqGLnbu2Pemw4uxhFrxgd5J1hBBuHL4UMn9ATCRXXq4U",
  "key6": "28fWa2fXCPooSuWwQ91AsQxXQpzLXvBZfoQsS7xJmundAMYwZf77fQ36C73bVErrX78GHCPEW2bRda4Riio9Moqs",
  "key7": "3BVT9vb8iaa9sxk3qBAYJdy3HCHCv6ete2mz9ZdZQFt3zQaUXTZxzwNchhCP39JommU23KpVtJX3kVVKd85ZVBAa",
  "key8": "YaCZx1tYGRVB5c47uhVF9wKszzSRnVUsVfvoKyxfVRkcnzHKkywZgKPe1hHVSUp8TLYczvRJPfRKT4qX5ZaHMk3",
  "key9": "3csf8G1oMVePbiFmU19xMP6Umi7NKwT94PW3K6iQGQpZXHFEvN1VEP98BUJG7TC6KBurVQ37JU2fVy3CuqH2nqnf",
  "key10": "5DmeZWrHcrtkM7W1oS7UH6Mi8joSLMXn5qJ3Z8HNJXtk2E3QNy18ZNEPWfuMyorGBC8Ph4JTSGVY9vk47JbLuyYm",
  "key11": "48MFdU2d6ePUiCTd2kzxjZLmXswHLuDGq5zY3bfDPx2qpXPFWBfF7oAZ3s8XFCRzNVRXkgVG6KiuFtHHXX8yFwn6",
  "key12": "2pry5Zvaf1gY6QbdGKDMQCzXNMQYD1F4UN6SP3D2MPbp63eurdzDD9K7QRTb2Kz4a45kT5fjp9By13SvkZb4FCHz",
  "key13": "22vDUec2ewQSFMBKyJGLTC23SMxLSqFTTXG4vrgiqXyiWabPbjtmCZeB4FFgWmNrgz5QYubZMPnnMM4QR59Pwn4p",
  "key14": "3NCa3jADi1KroZgGe1dEsFpQ12kBued4wY3fvJet45G6VAJf64JMZeMmBtdng81W3wkUZPLv4CpDrTXe1xWCYKWd",
  "key15": "3yavCr6ByeH2a6AFhHCpPofGdC8UyE6sFDbv3uwPKNzAqqFRgJTkPNo6h2ncdxasaduiHs5fXCboMWowQKDiGraX",
  "key16": "7MZgpdpYvXHsUa8MPWYPEkV4dMWydEujkXf7FGhJwBAscCGn1P9WV5JxgcLveEKB3as1SEWoBJh1mU8AxRLvDdG",
  "key17": "3KaiCXKVFUjbtPkCNTdDqwcMUEhWHKVTq9qD11azcxczPjjzYu8RG9ZwE5rDcT8d9ko7SQXfCJdDx4Jt3mBmSYpL",
  "key18": "5Z1t7B5X3iAeY6z5M8f9MF13Sh9xsDUPZKKCpiWduAvoDcCSPhzvos8XHcSjSLDAnLymEoVeM1vbimHSQLUSorP5",
  "key19": "1q4QDJc85PVRwTSTwuBC3metYLXcnRgLuWswErAcgLXKTspDYwCMnvNxoKAJJRfQw9hU1BS2cge7eXWFZjcfB4g",
  "key20": "2PUwL2xpwhCVZXcFzdESyqniGWkyFTCusUNz6Yp18btLMsmKJHSMwid4mLqfjApvQCHGHMDCqnLUEMLjQPbkNJv5",
  "key21": "AoYMKu37mmJPWymexgd7sDF1y2dZ2P2GkrKLrgXwprvBWMxsBafKad9on7JtoSt7QMfbhwxVhBiniqukghVVBSh",
  "key22": "2TtTCfYwmYb8Nj1PQ6eHWTR1YqndcGVhEDYpKSUCgNTGf9Asc83zaPVg6Qeeo1eBv1XvyB61DpoJjfdm5gV9S8Cm",
  "key23": "2qPuxLBzCrjT8bdu5uBG1LKF8EDuLV7vjHw61YRtZn8tjmkeTR9UEP9L2GFLVkw8XXbymsFheBvryuy3NgLLiiCD",
  "key24": "5b8Wa8R6q9TpPGF51Qf4CH8JeGCscEXoZMEWrSo5AnbpsGGdojbsRSQfcAh6iaJiuaEAFd8ddkN8Q44S9HjFxnpo",
  "key25": "635J7dQBq1ruWyM1sw42kmxsV9HzDE9fLFew1t36BoyRpxsAbxmcMwQdiCPKFeey3JMSspAfFDswY9J8ffatr5WD",
  "key26": "xSrLoSarRnuwDfYo1c3L3QSPoFfWzB9jjPjxmPYiU1meHCsCUazJyzBnpkvizo5weMscGr4icmwXUtKPhVPuEJV",
  "key27": "nSTqUqW5ej7nQMLKmP3AGkFV9wgYn2hdowJYsp5c6G3FHyLyokhQtyx4ciTvYiM5zbLJavEUaPqoBg1tRddVyEz",
  "key28": "WjgMUrQqcrsMKdpWLhhKvKo3nmNE6nKXS1QY3mYFG1aNNNnNtN2Uw3YhzhBL6ASBcaSMej5BcM7rcDKS3RawBnA",
  "key29": "BX9bZUcreRCxzXCXLiAAReZwqPoGV9o8uRsoNhTZVgg3o3SS7CJqrFMxrxaJLZSJzBZQbNyBVHUKGF9o6DvzVeY",
  "key30": "2oVjcp5tqxEZW1tQ48kRvKVVs2wVY9z1jQTNWX7YwRuRfy5WkKQk7PqQ9j8FEVMJrt4y2euH8tmScsxfenT5Psj6",
  "key31": "7qB15HpsgSzMsUu7QMdQozQKbFPsWaeg8PBzUoVdQ34PnuYy4TyPKEQKE7y6sk2JVEn23wGRNb4vWUQirq2qRWY",
  "key32": "5UFXK2sABgdCq4aDU5X2YDT8yV26QbyKVQRf6XW1Fk1XcL8ZZ7h4WNueqyVm7FHMTVEqdZcVkNoD8hfvfqQ5uvUT",
  "key33": "42HRUVz159ov27ZWpCn3y1mP6h1g9i89UksVhf2gmZGhX9zcyxZV1RaPacndjx2SrTX3evmmfezvgk36EaBA2pg6",
  "key34": "5j7Y7Z8F3hxBzZCMGr91Pknn77gzqaFZ29mVYjqGwh6JJFKVhGhU5tkqGSqSP9bfGtSaHsZnM9vc2h5LqfiSHUSp",
  "key35": "uwb2oEYo1Ywrp8AAv5NbhFvkLknXexBxt65VvEzjNtYXHFh9mzSAHXjKMsNrh3Dars36SCFv6HehtMwY6ogApWx",
  "key36": "5i8ievshQ782d2Y4a9HrDdeP4HwLkrehFokizN3g5rTXieWJuLKzzJXvzgcEjcQgGt9cV2qDSFnJX2j3a9SQFDMd",
  "key37": "BpjQgzFULEBCxuExyGi3CJPVBJZ5keyUpMDGKrz4xaWLteeRxbWf1KbGGXV38nEzvJkowggL7wx6eL97CGDg8iQ",
  "key38": "bdyJLfWcx4hqsiPe8492FVfiq2ypqV4d6S9sG3utVWBBx6TwR9sLNqTY2ig9PXnFnmBwTcSV9qHmsxoabNu8nDd",
  "key39": "65YJusb6Q2DbSzbYuizctp7DAgnNxMvLZfSSjghKtxDNfYihwQoquDErjqwApDQQjo54vL9k5PM92V1h6GMfRtf3",
  "key40": "3JTdBDr4PdhUCHDsrCSN6JjHbkb1gXnwtBz3iCspQ3codxLN6GHMPov2JLy66jci4HVpUyaLtr3swCWiaiUA7sDy",
  "key41": "5fcGTvYKUSf6FYprjyNgAPJ8by9SECrm8FfDtNcjugogkYdnWR6fB1DiHySpRfjV9tM4rsJ2Gm9gagJBqVovrVHC",
  "key42": "483wmYjuasGretGH13zaubRUs931w3iqPK5ZhA9FAfnRssN49tiPgq3NxKmmU42Tm2F2mjAfteDFqk86yMAt3L45",
  "key43": "5rvyubcZP4EoUB4EPexEVhxGJ5PiwTUwXQ8bGC3ZT1a8z9BH7LhM1rGBGSx1ewMfWuQJRmynxp3C7CwPdnBypWdn",
  "key44": "3iuV4vuV2zffeXCsZTrcW6rnK37EaecK391dUizotibdr8pMvMPF7sygXP9xhEaMhL7bfAaAUyFNSNNjWLHaMRSy",
  "key45": "4e5gPf79fEXzcYhnoJPwZsjeiNjY1jYTVv6s77GaLuFsV9KG1HteJumihAAKPUTgujb2aijtTqhMJQN5dgDLfUyz",
  "key46": "2u41eWCyCjY6kT7TJ9TsJeZFmhrUz2N8uPCYebsWeS5PgZPVH6g9ZwtydcAMDD8dw3uEfXwLd8HeJvkbszSbkUek",
  "key47": "2z84tY55BxuPkhL16MgBzDgTX8Qs5bsuoDy8YV4eCssC9QrvqUC7WCvMrpUSe2vnp4fab4M4Cv5kuNtQoCEwXQvf"
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
