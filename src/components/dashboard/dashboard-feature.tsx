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
    "38zMXG7Qc8SgF5KkYMN9CcLS1z6yaRhmBrBAthZpd1q1s3e2QFiPDtZyLCfPyviCGJHzu5ebvK6iRDvL88H1LS4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uwWVkVYtSnN8yCRbB6tPLGAV3bmhdpBV89s2LbC47N7bLMNRtDCH2DyiumGsZvsrrZ2kPSepZxc49HYiw57BLrv",
  "key1": "4ykSV9WEmLFCSjqc3cX62VqN6QNd8fTRhkNYH81sRNpBwHs8QTFSjrqViNEZqZjKdwKEAY3zDu57cBaeLCJEnSkv",
  "key2": "NA9nfg1T3MuSHRt8pUDmDhmwoRLHsFSxr2jntWjUvvVWvrJWPxyjuZLPEZ1MtUTbpMHJFAv57qJjNUTuFrJytmK",
  "key3": "YH4WMRvtfwZ96wS6bMGi8da81R3d8vSmsq1ttRRTor3yndMix559dHEzcb9acSVgYFzyTsLZqf91dS8BWitfnkN",
  "key4": "64xFqqKQhWnDDCubPPgDWZv8ARm6vkZGCC2pdGDR8HaxQBZEMtWvrUAtwSacAeni4m1x7PG1r54CtEUDuv1pnhVU",
  "key5": "wSQUnmkFtMvySuTFzt5LmUVZ7Lvub3KhuVDmChFxGL9HWRLRf4LXz5gq51BLnXf55NPpfrTdk12KToSyXvbNkW1",
  "key6": "22GqMRmFXpUCwgx8HfiMZZgiZckPSeqfXwTkP4wihNDdEZ3GbugiUD3Cg4LnMUPaQCQgH2FX9kNFik5b16JzeWgJ",
  "key7": "4YZ1hDt8bRkGT1aTvXcqqnpEp1g9oxRyPTZdARa3LHptmRwMyhRGqAZdPLCNGTuM98N8CWPg6464U8kx5ViDtbPb",
  "key8": "3s7v2RUUzBWm9VhejzaYr3orYQb3pp3vV5gALFTDMVhrHfbdrJbxET8KmLzABdj2HxcGAHUCWSxhjQvR1V2GRuun",
  "key9": "2QnEULtTnJtNCE5Yz42hWdQiu291dgT7W1K2g1gU4pBNjgwMvYEg45BHXHGWBbcMXX2aYJpM6RftrttppV4kY8ah",
  "key10": "5ssCJg94gT6HZhE9SNR99Qh8yBAAuoWBVVMDhAYdJXv6nUXBPX88SWpWjfEtxso8ZCFKdZKXeDWM1kdKMTe9UCEB",
  "key11": "3bZw9AiMtQLBgAB3M5cZtRogKRnhFDhUjQbCHmLmzHTNn6o6aW7JQ1WcnSrTLk2KKt461tdYABEMQxdKcWzQ2h2C",
  "key12": "5VePorW2xDFz2J24WmPLSm4e3tZ6s4GYa6zKYzRRcpZuqV2Ufc4uJ9xpaoxpkVU22iZnkwokBz7TivY7HsHr16Zh",
  "key13": "4g41xiXG5EjyhnEDhCKzouBPFMyV85WHxapdcYD6NcMRTmdU93Dz76EZyDLwEmZCm375B9BPWDfqrg3tzZJHrEpE",
  "key14": "5AuG8ms1xAcDK5xRrNLDZFLy8dKrurcMk6JFpsBVuALHeYdDKTZQe79eueCWbktxKxn2hepz3b7v7NzK9AGuPhQY",
  "key15": "55vDwWokSf6R7UpBSJHi4MdrGo7xyQJw7mgorLgHkqDgXGZvNpsdonwmeWpeB1KgFBKmk2dgLXHKeapCE5bW1pJV",
  "key16": "5MFk77KvFjqBiQyNG3kUnycyiiti7Cz3XvFtvHrkRjmhnwnzCxMH7WQqw4PqcJgGwwppoU3zYovmxh7NHhnusCX5",
  "key17": "3Y2wPWaM4usU9DsWp6q9yRJ1dRLqMjVDsmxUQAQP2MKpXEPqEoKFfy6Gi93MuGJfZ1gVmFUzE2LCtHw1uyRPnMdv",
  "key18": "2sRrAADvP7RUYY5oSLUErrTnFq2zdKoBzcWznVrZMLmEpv2NEpRWmVjrNUEWSXwZisELPr3gd7bHF4cZtevs1Gzq",
  "key19": "48SqnxPkbv45X4GqJisyKovvT75qPDX8VPSk7DfGQyhmNabp47wqoBQiViFvWL9KwKktdXMphSKiFGcJH59S9px6",
  "key20": "4duaeBahUF8DpWNabVoex51sMmq7w1VZLbaZeJKefPiAWfJywbE2YyeBDpXyC9ndcoZX7RKExwzw6L6XdQfWA4G2",
  "key21": "2LtYALTCUEfAgVS7NBUX8wf4AgBgxnt3wUdgxKt5y5HCjXRNQqFYuKYZ2msKajYZPxQXKddmHeSpSHKChwfXeHTW",
  "key22": "3YREwWhfMxFTXGjwmqs7omgXxX4jRHM98fKDe1n6WpchFtLizcZw8XkjTJqSzqNsKddwd1aTWNEydFFyzzpJpckS",
  "key23": "5SCfCehBwxcuP1kyBghwdYaf4JZXtqBsRaV8oLUSRYZ4n1GBYrxsz4s1H5R5wnXbzxuNzsUwFXS5d1bU6SygMhCb",
  "key24": "4tSGqbiHtopXMHsvNysbGPLTJPboxR3WTKdjw1NKmREGvj1SqkVXoCVwWYPkQRdRBMusbxNUZ6QY4EN7y3iA3PV",
  "key25": "5v2zXpamc3VY8ZsGSeyL5bbWiLAgYFUqgD9Zf8AcTCAT1vEwnJcFZjdoMSKcssewPxygcMopxAc2VsYVtULGpGrL",
  "key26": "2WR8GMtn3CjypNyLe5t7Zihw3dhRmW7xaiy8a7eaLwShBMWrT16hPvTyrePh1TZTRgTgUas4eo55irmuXDDc7F3z",
  "key27": "5wHkEzi9isugJqrRyh1eSbAY3JgrxFMnzWUyjX9U1MfFtgXur5MNqw5WTByz25P1X4NSdnfq3NmDmM3ZVgCC8q6L",
  "key28": "5d4b1xRUmJVW55wovyKJTbn1rbeCiKg7bxeSYYfJrM6y9eYRUcmYCLMoSJbMpaeqEYD9Th4EnbXGtt2kQe2P7rTo",
  "key29": "2jNBvXQYVXVhy4fAMhehEUTnCmu6XVZFLMxsQLgxrj7ouRzPJpzpzz91fYAadHcbgWcuRTXJdVfdJ1PaKZ7d4LgQ",
  "key30": "2eLbTXHqfYMdpgTSCC5GDobFPJa1ChRsvKXAGSXtqmvtGf1B1U96GKSWZsAYRu8mtfjUHiqs8i64uA51a6GqhpFz",
  "key31": "3CYbbbxmvbKAFGsMMzSAGqMHcuNdzSpPnHuSYBU1DovRGenV89rvnBZroAFFqYZPFJTBJgj6BUc5xCeFCdVnMP1p",
  "key32": "5qSyw1pgBxaV72mUsxLJAYB78EtdHTYwppJabtRuTyBQcb9KgUnnoTeCRpbY9w1ReVoxRcrXYWrJ1vaLaFhL8Zff",
  "key33": "4HVaAfj7yX4SUE5d5YQD69FiMfnpkbCfznextTTZ516Gb5RCBU7F6iZku975DHcucPRXBguiUJvpTBz5QDF2fF1L",
  "key34": "zG3Hbt6amsqJHQkq6r8ZdGrGUqmRm1Ajq4tUZFsd242ZWXZhYJWMDu13mY9yJLHcnEAdEgfQpeq494wBikewJUn",
  "key35": "9uj28nQgX3B4KVTmPqj5VAZUi3FtphezfLe9rz1JWyMDvwoZAgrxfxtKhCmycUBC14qub7ksq9tTdkXMrADhD5T",
  "key36": "3rZXZbjaqyRmCjcPMBbeTMad85bP3ETkvCTokBpZjxoaDBm29BZpSAQJt6255yQ3mXinmm8mctYcFZ4QK1jAVBd7",
  "key37": "5a74N43ZLKNkbqCDH5vdrsNmsrdc7V9X8zTPRPGQizEBGjUQLG1ad4XXjfRqjZDLgVeARjk8gasxJdaLrjNRGHgj",
  "key38": "4DCGW3gGVzGjyKCyqZf6j8PJxGY7ZP3VjK7aXgqc4r6Uzi6uykEma3ZS49QHoKb2itDHxLU3FqtaGGhTd5jwUicG"
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
