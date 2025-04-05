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
    "2qyEpvtjeCTQKLfYMVf52ZZfj4z1CPnFhTspAiRXWFSEijAWKZZKhzeb3DnmYPdn4SepfrfMs7CpPzqTd4zn7r8F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ua3Rv4Q1qSspTFfuikKQcn88ChkSZRd8uDZiEciDitqeRu3HQDfpWMk1BQ8aKHNdwX9hjePAfv3sD4F6vo86zUq",
  "key1": "kaiFALhELaUWpC1opTvfRZtPdxUDT7B9C5DoqbFrqPGvWcXLUBvti6Ei4at8EnU5kQcaQAjwrTc6ykbzMFneX3K",
  "key2": "32VXQNvLEdawCTQYhFkBro8ozg72FfuoexBWStQCGSZitvhMbNDbofsMzZd4yZPqLxFii7y28K5iM5RzrFeZQ4if",
  "key3": "5RNFQGx3auxXiqvmqmmaEWVPcg7X9WNWfVTQSnkXgVDoFo7M9z9SHgG4EVARDaBsTMJ5TmMVor44dHxYmbJcnGds",
  "key4": "3gshPsE3DEMCFmfEmT2JqorEsVyBakDZAxsgvqmQx8KZ3AMJEStK6N5bW5ue7BkunbHqCdkmJTa6qaR4aztC5gun",
  "key5": "XS1MfvLmwgyH2vWestUjt78ZWVfHrdVkGwshPLYVMXWJdKJ1v73RSAipNntwsx2kzYLMmiWDY45efoAFbCXQ5oG",
  "key6": "3G9zp9ezc9qhBrZwNd7KGMnaeGJEkP7SbeqAoovxSAxLCDvza4r7UFhwMS6MGTJZbssV4F4nsf91mAqup5uVC2pg",
  "key7": "3YBs5UzW8DJzzsMWHTCETp8DSkhuNw1fxgGevTEaZ1Nr55oqaFpw72fRKZguC84NKmTkpVnBJZGgueCsBQUuHsze",
  "key8": "2kDMsk2KLt2sQwp2S8oJmbczUcthaBEcZ4TwkKBoKriwpXWu9Lc3YDNHAEA1dNXxkE4rokJVEZhHchqom7jim4S",
  "key9": "5nRbvWRg9AUePpvST8NRgfvCLnkL5UHN2xnMq3Ca7eiXtemMdtNdRraYToDTEWPpxoU8NxSY8bgMyU8spEWduCeM",
  "key10": "4GmEawuYvQRS21fg2zWGCqcQjgLQ6X3SzSB8nZZhP5rakRd1zBgKVbeixu4gkg2dBY5z3DBbe8UP6JHzPHK4rfsJ",
  "key11": "hhANskSYK4z8GbvybcUgbaf5GwwciqZRbNQvJCzzircJ4GMoDtmt4UVCeQiTB1jiNqYBFcHiYgPwWfJicscgg3x",
  "key12": "TNwGr5MgU2T5JcMaHmKmka5CeC8J2aaCj4dcdFgGNazte4K1s279aZ6S8CUMnWNFdWKcVPZtr3zkiMHyUXNfumF",
  "key13": "5iphiLk7i6quGuTBGCuNbL26L9pz2XDsEFewNFkKpM1YQSZRNrTboFNGzaVJJadsTtgeLq4Pie4Qw6t9UUitgAjz",
  "key14": "48PDtKaYVF1x4My4JUegXdteZfXa2tMaA49kaMJgesi2zYPKeTgZxfH4pomCVydFqUbSYz11kRhvWwu2BTxvZ5My",
  "key15": "3UMP8YLQVcjGZze5eVRwLuNKNWsn2NRfwLJ5N4SeqzezbXwW7roqcuZVif69arF3tKnoFm3Vjim2M2psP5GtpnyN",
  "key16": "XMbTQmCHEZFYDREESnHaYdGtxYUz8Kb62MFnNgiLFZAJrJtEVtsnN3d5kDMo8wU9P3sZsHrCdA1HpRQRVnDdXX2",
  "key17": "3nhEhd3Z9apWYpNQjbmSz9TJGxTXyq9cXe2XgRguHKZtkKbiJSavPQsYHSk17D2hNzWD2NGM63zRQYQgjd3tfWPz",
  "key18": "5sd9T1oeyHgKwyRTRsUxGpDjbxNCvpURzoC3VX5xGEAm6StbpFuXHh9djLkcyc3a4aSfeunojPBdHLDQv3TTSeJv",
  "key19": "431GHWPuWzx9PDVXD82R6hYe8Y66TFdNkZFRZf3ed28HFWTjZBJFbGX2DcRTQU4D7xTTXtdyNbuRjhWq2FAR5csf",
  "key20": "3ptoqpctujtpLtqsXXufYfUavezLXoaT7wpmxFhHx1pwQbE8Uc1W6f79EKAKFiL7DScVibn2xdpG8y62U3rXU6z6",
  "key21": "7ZGTh1ATuxX53FuNQwJmwhrqoLWLwvVwpXmKwatCaLyJ1MF7BG1YHkRGGanuHJyJCB4ZtkGp16qB8FC3nt3zgoo",
  "key22": "2P8c3WzmYYfPcpudSr28MbZXc29H3cupE5WR7gosN75GA79v7j7MAb1zZEeZPgXkJWk7hupADFFXMZx12gXZCeRZ",
  "key23": "5CeBVHxzJjzVWvCsr3iwvrdYkZywrZMGwvkEHieurByv7zBYxf712fk4rqDfxwxfq6auaAKh3VT9oheLGn3KCNzZ",
  "key24": "3n4FobeHG1ED6Kn24i2GQiRNCvPEAtrmJFikshtGJJK2itZQSHCKDuAKgdp7S3Xmz9XynFMq2d1jGjTimAzCsTis",
  "key25": "673E32psZsMPDdRoGkFtfharmMVAkvyLzkjgc7j9ZaomMFDBKknssqU4HL1WEQsySA68TYGtbxsQRph4YdeDvYij",
  "key26": "BEZZpKY7UeZy4yCuUm2N3XoUCvBtMfkaAJjX652r2xRcd2ngJMZnZE5VxdszKwPNNqsRceceEVRKMGFKvPfaudL",
  "key27": "3KeaNLtTydT5y9SEDiMboWy4psyxKEsunJfPA8Xn3sSeUAbxxGfV1LQANqxubee4HReDgXk6nKBPRBEbdNW32vKc",
  "key28": "2Dq8cpGPHUeNmQgieW7hEXfj5QbQyq9z8drLfXzwBvCMZ1T4d8C1jnR3tGZZggnWYrMCtGz1rE2r5wrN4xnrkr8Z",
  "key29": "596HTqbfF8H5mGpuB9sgBXzjL9PgymXpjStGQhQaaStKGnLZuPhSmYBhC1bzUTX1aUdcfdrr4VupmwGHYPJZcwuw",
  "key30": "3KZHuR14YxxXcw8PoqhgD7GvKVKCtqcqTP25ctwYQ76nimHzjEBDQBBhsDycafcM7exgivuPMy22V3H9PsjALqfj",
  "key31": "2dTwCLkooMKAqcFCWB5jAz1rbQjwaWJqrNLBnk9yoRRDkdgpvqh9tzMeZW1eKq9UVMkDwzNT7nR1rqwGamaRLG8v",
  "key32": "4tMXVxj4ZwDR3SJ1H1ZRMPCMGEYTg4aPDVcAKcA1rW8EP7LnfHzuT5ZTHaLS15kAJh2ZyPKznNciyFR7LpixwEtf",
  "key33": "29xGQJFSTAZxPSLi1nLQPpTtNviRfuXua19umoBJ3tb9khVmxuL8urJZEwamTTDL8FALpjhTwg7MNRN1xP79twrc",
  "key34": "4hxofxRgZ7J1buDMPm2mS3qSdnQbm2zcQMihsL1wa3x4AGmSEio7oYwAtQzTXow163oEiCyVJorEyzSosi42wFLs",
  "key35": "3UrEAwX8Xdhvgw1gwVPst6pv27BzuUKgg1Pjat6GrMNfneaUbrGsJGXxmQzejkNFBLgV1dZd2dSWN5VW9jZWWU9M",
  "key36": "35LXih9HWqvMLnLtcgqZTBn2jHPi8rbev1eMtaznx2TWahnLRPWnzNZQRUiLzvhxxpQPtJGQmzLb8v5eYkF3kGxg",
  "key37": "47VBB9H6WGcGXGSfLrHi6mRn7yAdq57J6a2M17u3MXwZUrsejvYYk5zvqUhYPVzdQZ1uWLj7qiPtdmghjb75VeTi"
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
