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
    "iiiNkibPh5TABnHSo4PSsEWyLoqJVqtQZRuLNZwCHjdsiMKQntVHzCVsAnxEyLP23iuhFRHdeCaDR4gLcaDaSHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zU2r8dKEn6gHwSdSHijdPtrzisbfv5yJEbSrAyrTGANh3ANJSFv4X4v9Rx8qc5pJiRZ9W3dPsx4fgMmVJWDpDPH",
  "key1": "4SQ8YoA4VCmU6M7vK6WEFxKkcfHUbQMmNsufrbsChWJHXEdK1VrJR2WwGdu8WuNSp48xQrnH3ePXo48KGESpdwAm",
  "key2": "Dam2x3GAJ5aUapangtgmCWA685ZhNvqiz5qL7SwEvJUbhuDHbsPJUnTut7cw4GDszjYXhxSPnsaChprCFjPKpmg",
  "key3": "FhExF8qAiA6dFJPWqnPwbX9LKeTkDbYkG3S9H879Q6eC75KHgvAVb4pu1zqJFp9JPfz1A3ygDpdLEtGcwy5o3v4",
  "key4": "2E6DuJZMEpsbgu6GKE7U1SXQFBPaKg9djkPDd878TXgP83LkGZ33VhmApaqTe2f6kQMxi5YzbPcqWwhXbjhBsgRc",
  "key5": "5iwQLzPeGPawUXebiJi84HDixnXeqnBYMucsv5amCLGXFQyuXexzmVCH7f8QgoQCoQhWsXu1iWBkwGL41fKCJEae",
  "key6": "46H1z6a1MWzxK8fzrGypXNqDvJ8pQ6fTRmTov4NdpueoShgpjMPnro2ieNwPWhezPb5p3zC8YxevknMNiFTWz5Yd",
  "key7": "4PvVEESm8H5mpSCeniBV8mHX53kh6GkmGpvqE18MJpR1PXhMKc5ELFvNPuCA7DDnwRKoY5LGFPjjRfpvfBdEnL4o",
  "key8": "eWWc7iQMn6VR3PdfmcuKapAde8ffFeqaTLj8q58dFcfHFgesphxak7Z6ZdcfbvhABW3j19BjJSDvBHNRLAE5y9L",
  "key9": "4muneBWaAnxa35MPJ1mNzVV7cYP5vRkBzQNAEnTxM5ienzMqfMKGVf583UZxkbAkBcEdYuYZPQ21M5Xfxr8JJfyi",
  "key10": "3zXM64vdViMSP7WvEotRzDt7FhEj5xNrsVstNt2CRhwb25ZuRt9FHPK4CB7r2w83Ld1ZCGwAYJ7B3R34iYzCg34A",
  "key11": "MnKLfZLaM51u4z6m6gDe1nFrGsYSyTQKb8bTU5XqLZ4JTHAGPwbdS8MdzufWKQVMt5UQFL7zX89ZvzRhfXRcNDf",
  "key12": "2Ejse8PFGEmJ4vfk2yrJYb8RF1A7mfoq9DhV3RmP5kdeyvCvjNSkcFuecCDurnzGisbWv2rgoxst5pfRQYS5VExR",
  "key13": "ioWjZGP3BmYGQ7ZqNPRhXLgRbvpWpLhxQ5nWEppaKaYnNbprTu2gi9XmH2337h1r7YDxGVanZkRqwJBng92CtwQ",
  "key14": "3tLCT6783rRC6gTDU3hmndv9iBFt4hNKBufrn2c3BLQhzYC4BZpnXPd7WzqbdfCYx4XsHZ4KLGWUerMMEUY8cF3r",
  "key15": "3q78Eh6pvgKkbdtAcGGYywpC7ib51U2rbSgkWgU9rNnprNHojYKo4NKpKrpTQmnvKhRTJjYLp7YSVkshLJsKPhTL",
  "key16": "W8BEDhXrsKFMT4BxXVy2oTSusDUYtrPGAzVYn6pYCUbUyc44ZfzcLhRiFtHNDxzyCCmdUWS39n82yQqDMdi7V5a",
  "key17": "33WX38UU2Ln2gtuzyAMxRTi3J7cUJGg2r1vDfn4LRqJopjZdtphbdiD6doti5iZk831VjnEfawQnAK5PbopkQogT",
  "key18": "5GgrvkuoQfKwQwe89ytowSxLa8ZMZSNwhDnickk9cAbg8JGHcC5VDWvaoLGuS5NHYGJu5WEsTaG5p1dfq6iKjFnt",
  "key19": "35ifszFv1yHeJ6XkdqwgsLrgAfchKND3GuxXxaUX5uMmYA2LUyDGaNPyFAMbvy6yHDEWD2DnKgygTNhVhDiLQXMR",
  "key20": "oHPpFgke6nqypX29Drb5HwR9zPZtsqRVsJDhXbuTyXajJA1un8bBEUVZAAsqwe8Fzn7vzyDHpq6bR3Ee3WpLE26",
  "key21": "5nRpTEE1Kw1PoBSr1WertfJ4frW39NxPyzejCtLMjH1ipDTsrJ1TUe379iBf24o3nPYiJkyCP7rwsyMMC1xfCxJX",
  "key22": "5QqW45i72SVgzPVPDsV93fCYaBXvuoJdNo87TcouUREp4zvziqzdrEXbKxZck5D4rYyc2Zv1G8ewfCWaLm3JCMWp",
  "key23": "2DXb3vbV8RQdzXZ8cg9x4vmqvrtwQChkQDjiexoj4tWFTPaNTCqo7rcuAWH1fNeRkgzoxpVgzAGGMKCnnGdL2zTS",
  "key24": "2VBdSCv5Yr7x41RwcYWHZktem4EuG2QbZ7yL9KTYJqG32EmHU4rnfbESg8Tckbu9DAV6kFuBHD2xZrPuAjueKEWA",
  "key25": "5PGBmqwTtHXdWx9rMVYpCN4jyb8PKdC7dNHmRanaf8wS3JiBLSmYhfek52TisYZ3i3weERoYZn1edu81oaf8SZ9J",
  "key26": "53M7KGrmDi2KHUeKrpiJcbevC4U1Nwkt2ZNXkzXb234oFC4jVkgaxfHqnNtamGmRspjHMzVMnsrs9Q6ZfGnkZZYZ",
  "key27": "3pZUH2Rmsb7yETQRzN4vfKmkcaH43pMntg73aQ8gi95GxXvfDLWA33PcgLcq5FxeCXxHYDgP2ttErP1FyLz9CSCi",
  "key28": "4SbBQKYwEEg4j5drLgM65VjQjPvLMbMo2HJFojPGfZ8yTfusBAJBDBrc9EtqYpSE4Jy3TZFcvSi8q2W52uPHMLhS",
  "key29": "4mhpa4cuhHmHu8b6Mcb8K52SqJNZN1F92gKqw75qpgxBAoB2NyWTUpyBvCLW146NTjRzFj275tQCGsdf7QHZhSUZ",
  "key30": "3qasyDePc286Xd11HPEVArEu9Wtj17Uz3oP8FtmC4opF249z2dLAZ4mJsRnCVZXgeBbGNMiKL4tMrdNRXMq7yU3E"
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
