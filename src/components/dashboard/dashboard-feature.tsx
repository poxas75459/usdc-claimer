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
    "2ti7n3z5qFGNHqCTUckeN7QCeCKKzXRfzNgpMPin47Fnx3mkM1sV3x1vzTFhqGsK7zpvBeUUuLwGf5ToiSCMEUjt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KtHxLnjorfKfFow1P3kYK3Y72iLQUBuGDXjHqEpkmh38jdKAndT4ymoRqwnYyCiBRYzsaC15DYCtdP2D42hyik1",
  "key1": "2QU81uCV9Lkn9S7dEkEbqzNFHjyCanWECnCMDBsKBAQG4ySiHezn7PuAG1HYaTL1e1ruSsy91UeMDvDWhpEwW7Yp",
  "key2": "2vhrhvEP4JBGbSRiWiBzxku5xs7FK7uVbyTNJmRX3Wpo6uf2rePpjPJx45nrm1FvkyqdwriXyJVG2bDg62K4Ffqg",
  "key3": "2sDmUeURXnyhaniqfA8u9vmj7iVQUFMh1dhG5CrMVCt9v2V593kxc7VpEPgWPurcDpRJeG7N4HCc67qqZAuHTkUB",
  "key4": "22jXCJkksSTKGJMGQyHH1p5E18oxdxhh1CAiZSGwrQqNQYMBYy5ysn3cVQLDhcLapZ3szfKAARRdnt89tgtt3zTt",
  "key5": "4gDCwqGjYXhTcGDHVkpXps8yR5dyeC8T949hh9biPwunju1byeNs8kuLQgyAHCDmNmsAUY6KSRCjeVSa9yrdzmaF",
  "key6": "5oF1FBDPzzUo456fSGEnTaJXsTFArHstba9XoKPYGZFGtmwdAQ6Eeoo88BcgUBEXepkDfMVjxb7raHjx9anVrdt",
  "key7": "2TZYRGXE6Y3YksJ6nZ5RDmFUVr2FsiswgyhUKCE2qjCRwKAodfcY9i5Ka82nZkdSBqMTd6PmkUaFs1doqD8LSzoq",
  "key8": "4y21ox9Mr2A7bvqxk4BYh6Nyk9JaWk2JSwjyHMQzxLfsnAuaaCoiwQnp5WU1vRPc7FEQ27ipaJXE8CVUhjb5E1dp",
  "key9": "EJ8xqKqyq6G2qAN2Wwd4taAM5NY5WRVmTbBNXdPM9mwFw5C1HqvKGmwauij1NBmaV2CFLKRGp7BBbQyJvaBbPV7",
  "key10": "29pr17SFV4kt8Nf4icNfGNxsi8PyRSJwc2RCjzrpbeAc99d5kDMnzzZmLgBu4gqUTFAeFPmvG5GBbLqWHBz4EpDf",
  "key11": "3LHmFVQv2uPbu5RQqiYiP96zSkWcJ6V3B75AM7RQdp3AwGx3JXZdQAN4YJAE7ZZMgh4ERisZKsxHbLqx6V7NeCiH",
  "key12": "5PDQSDUZKStzPCS1SXtYsqogvcHZB6f8fQwfWok7ZoBcnNVYmof4D76fVzrhqxZXiB1bggYftSfiWaC7tVTHFhxy",
  "key13": "3kK5yRXJKvPiGZCXqdbBuRzWjfW8gqs3gpewEkB3CVR9RfYAZcFrbUQ3spunU8xDpx3DsBjBMzpgF1eh66ZfNM4w",
  "key14": "3iqbaKahxJ5NijpaGPEmeooHBhxrw7Xx5LajZiXu8k6RsTBGSLRVPjLeXnDspn6hUvEkg6i1EFPa2LoVNvAaMgDi",
  "key15": "5jg4pjXe12ysURPgzYxv2CTrnbWi9pgTwT9Kpym5AZg9zopLZwUrQo2DmCB9p3ACHxuR5j9WV2cWr2RFaxkrDhCW",
  "key16": "5UjXMuHiETgJv84kJg45cg4tvzF3qKCLcQLLomvpSaGaMKsitTqBN8i8hgA6k83gXooRhdae5teTxm8yStWDBa97",
  "key17": "3T8YZxSChoZEeEWwLZXGC9WM8uZRPYfqSbJK5aPLLgbYpVb4pbPxWwGr91EPJMeaGomSLtLANVewnTQmRhCBN742",
  "key18": "3uyBjG9tSDUoPpBm7C14n9orgYi7vxFy74KArRbm2JtbBmZzpBnd7qUs2EQjUqtZi2RModsf1x6dCtq5mQ9Si1sm",
  "key19": "444syLravzseRjf5H8aNg4vhsrgiv49cgoEafXeXAszGob7VytrVj7sktryjziFSS8GRVgMcqYbEzCbf1cQzUxdj",
  "key20": "3GGUqEMfZX2aQpVLCXDNJH1NDvf6wH3NwF2J2uMyMJAW5X9CHjyTx3JgL2xNgEd4rvhpPNdX4tJVBsrszhuExYs4",
  "key21": "634QEpek5uJFE3JLnvioSHCRKdPbJmgosFLVprqRgNiz1cJb7AMn35n8B5NoKqyiwYnj2SaQqjaSZDjGPBQqxZRy",
  "key22": "q8XXwSytr7QhA12K7B6P8b7wZxLUnv6zjCbEoaCtPKaidNXtC7Ttj4CLdpkbp4y2tVi8XYqN4rWtH1iSG7NNEEj",
  "key23": "3jCgDBa9dsJYwuadY45tnSN2qixM7LZki1GHh72EyvhkhwXwFNsRDeUaw24jLGS9e5DxzzooqwHKSjK3jRQsvBa4",
  "key24": "2LAHXka2uJ4nTHUNCDF3XH54cEnyQQHMjvNRAZFTYu55qSA75Wr5ScbaXV54VCaFQmYCMYDHpAMzG8MLsarvEmSE",
  "key25": "kzpRk4FpJmAHaJ3MQRXzq7sBxRTzrm5VgRsJTvLj2tJJQbNjxzvMidAjjktzNqVBf1EqDLacAx8yD6EZZezrizm",
  "key26": "2k9KodnJNbCp24Tf4QqxKzJ7un8N6N5KMrDeSsxJJ8djBXqhvvXSbdvN81zVnB8xekbLCFQCUbdV3FVMSvkQP88L",
  "key27": "2AitUzrZ2yH7EKveNn1uCgBZodD2k1zeesbZ2AuzqzJQ5m89kUMfMQvPgnPwdDUopmp4AUe9eyzCAwhS7MC2XTdD",
  "key28": "5WmWjD5xiaJR35U7kvUdcPokbChgQt7fgNZkDQ8pmwZg8DR4cKZAkRQYeK2B2rASuWN1fQoDTcFSiMC4vBWjaw2",
  "key29": "4PyShTy6RQjiAPDN7RxvWgCaLDsZmBvHoTdFrqRz724RQzyrpLgMAAEEof4w5oM6KgLqZVVZFXG7743nYMqnYTnT",
  "key30": "D2nfybSuEoiV3wiGPPH9kcQDKShHck8n8yirURpKkpvsXKniA65WR8zVYWCEqFCZuf1HjBy1fK4WWXN24PGDk5q",
  "key31": "4djbmSiu4TFhkqaeLHKBtqeZfPaYdcRY9YTQGrsxhDH7U3iSKhDZacTBgFA1GrM2k4drHPnLJPccEoNisb97xYqS",
  "key32": "3LCENXkByLErCHgpJ6vBqZtMgTdtq3sU1RgLiPcbxs4GH642JtMgXJDmGEnyEnzfgDwdt4Yv3a4j7RSGRVK7kDox",
  "key33": "3RmWmYjNMpTBj4hxa6eWBLC7Ev9MTfTkjAiXc9nDiZNssq2NEBHtXPHpors1ZE4S1GeZWMLjcknsxeUaKNLVktD9",
  "key34": "4ghpjtyarYumt8ZpV8C8LgiRcUQysuAqwnRe7CNwtDz3McQmLVsD9NHMDt1v14Ei1rPWtcNrf5A6NxASwmtQc8Wx",
  "key35": "3uaVkJTBVszYDXcHxCrap1p9jPEuMdoP7eLXfNbFeMPJfuSRMm2erHmYZWfDjrEQakwvKfQ9WABoU5KTodYBaBUR",
  "key36": "275E3XC6P4mCAYqcP2P26wVHhxBQfUPGo4gSzaAb2U7m1RvgJJeMzWEZ3QguE7UndYTWJWsVbLV7pDwjvXs6hX1V",
  "key37": "3oH6xZQUuUGepr2YgwtJALHkKCXoQkhPWr9KqJ7hosfRn123dsd6E1ePSWVCQxCmtc8THTVz4LzJzJNBaSZP2tYs",
  "key38": "esPz2GUSaahZhQKg6rpRtxL3WGahnbQV1CPyPNfxpN2prBBoJ5mWwDK8cHt4wzP2Y2SaAfNY6PhYRAgxvrMHSYZ",
  "key39": "3T2fThNWHwA2WhGgDtgnzvcTeVYcEZGFKmaAVrwuzpnjXVYvg4SoZNiLNzAfZ7NYYykr87Wjb75G23E96QRQ12KU",
  "key40": "jPbFtLyLk4g28ZqdXWZivC14AUNNgmtQbr4BENP6ph8mhC1W1BWhkh6e5fcdfgK6rnBVUNEszRmPtnRZh4FFMso",
  "key41": "4kD9DDyJBEgFqJXaeEDraURzoXPJwLvt3x6HoaBoyrZRVicum4HStpBYUYrtsJJEr4Amu9T8GHnY7H7feq1yJpox",
  "key42": "rYurNYYux6zNR6c2Nr1fNQXCZ1cAcUWejaY2yLBwj9eiHp3RrzNh3ePQyNH7cSL2Q1xFttYEd8JH8jDndSSa3Dr",
  "key43": "59UeCuFv4qLfm3a3fjpShLXGP523FNswg7rKNyHPJYdWCRGWR5gSVwz1c1t4XKx5su5tRX1bUAMz8XpjQuAa4vXD",
  "key44": "2ZjfBnhwynxoJfvevSrDwKxHbt7AmcSQ5usAUQ9evvD2GE5qbrNLQmveCpLZeQfCpcyiTRQ2mSdvjyrR5GYqC9eu",
  "key45": "2dygrrZAPxECmchSFHe6x32B5s6cP1ik5u1C7LVen9BgXyJZvdzM1NSoKHFphjaZaymLZ6TbeoMUxn4kvprFh5tq",
  "key46": "riPcCk5QPDRhBqW9nq52AABRtoSW9ZZivhmoL7HZEALtQLPMfXV4y52jxN2L4pPVycsNHPnZec9PLaio2p1Ybmz",
  "key47": "4rwwYKYzvseJPyEbFh5Ub8mtkNU6ieV351fxJNs3UH8bvLHYQwwe2dFmG6mThR87a5fbAUsiqsJWyf6ibYic1Zv",
  "key48": "253LBrgeve9GLiS8VB165kYkccemyRGVq1TUm8exHBu6CSLVu4dMDrPksEJcmiRmACxLLg4QoJaQFq1E8aRtD4LJ",
  "key49": "FmeVqQGY469x6CF8tqhXnCdEpCj9SYS5TPkfYAFpa59491h4hdTvLGY9j959M7efS2hPUdgyvcS4iApJ42EshWY"
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
