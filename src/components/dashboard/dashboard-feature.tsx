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
    "2bWb8nEYwto2wxfFqvn75WDy86UUUTsGn1M6njNnXqcyCZGnLttYXiwZfSQssrp7741aD1WZ2u2hWh3QBbqLSfz9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ps2j5DbYzzdHyDLBPjGpsfTDn1f1evXHtonFFFRJtWHEhnDeBo7dKAK5jKs3juU6KxAKpv8HdZLt4UGSNDFXLDM",
  "key1": "mhxv8zD2FoaBnWtjmtYfyg53hxRdc112isrKkXqDjfdhHn2CrU3XGPGmUBhpMLZC4a24WgGVMBKvyLpZ7Wyir89",
  "key2": "3TFUq9YNTpCNhy8gndudLQwKgnrxcstrU9QUe7dWQoohAB92yiBjnuQk5Vc69QFn8yRvq6ngoomQ2MrLQFXGyRXr",
  "key3": "o9f9T8LzJPDJPRdrmToU9VhLGyrpPrW2GkoQVoRexJBo2ptuuEAFmCWPBmArGs2eyq1nazFQg3iBy1xe7wffbHw",
  "key4": "2gawxhTp5dQCC4LV4pSRxHMLUs3rV4a664MPoUZvCcnYMMxkCYp81bu2K1nembjHgzwUdmJqi3PJvazce268oxfQ",
  "key5": "4cJK6hyn5JJNVGaxUx89T8WTjfBynUKXMUXhPZNfQXGNvhgxejPtysCLY2r1PK4ceFNShbfSJHZqdLitWosGDhUk",
  "key6": "xyg3xrMbrYqTs6SQnM91kRHm3GxEbqD6TgwWbztNzEWfNvvmto46hV8bazBmUZoTjtd44dy9BfJsvqZDg9xKrqr",
  "key7": "5WAxWhZe7tcJ3vfEqv6eEhKu4T2RVzZUzDescEimuDNnPFR1W2pTpFRZ29VX1BkgANYfJkiCdUBAmrXpvT51pUFY",
  "key8": "JBFwuPFzCaToZRNwQAPc7HdECTZP33nC4Hvh4zVmHrHpcbRHgLo4DUV4P7RHSgfWmA8XsWd7HKUYDuhtNzhX6Ki",
  "key9": "4VVD9pHKQyvpnGinpkca2qjLN7v8LBwp9jmhEaW3DbJSybabtf75kuN5pTWtFtkKrXeSutMbEygBaSy9cxJrQKjR",
  "key10": "5WcsVLdExqTSGuBNZUzNMCEdKYMd5E2o8cWcWzZae1f3gDeGruxWSMKdiA6PHPHDtNcbDWokxW2SpDMg5PZpYZax",
  "key11": "2TNS2T7SqNCjprG3qfVbrNjxKFxTQSSLeoL1mrEusgsDoZbfsr5tztc7S88QCMWZqs5DnLCrVyxuVwzecFsVbnS8",
  "key12": "33hTfAUMQHzknj2y2WY2FYQwZCJ7jHuFqFBKvPp8S6NxFrdw3NWqr1qe2v1bqAPKz9pcAYSyC73dmsqTrFNbPoKT",
  "key13": "23CzdmioEM9WzHhkEwxWTihAZqWTHdxc1U5xeVdVVfzHqWavh4YrVMcmgWdLZpL4FMV6eZPwbrK31vuwn7yxDveV",
  "key14": "YxNstQ5wBfRogzKRVddJ4iCCBkt6J63yk5q4EEWXL8qH3fjQcBuLBHKpUrJa1aP44m2csbzFyxg1Taayw852Vyq",
  "key15": "2C16WcEKv2uZZCSuyd2zRDKTQxz74j4hr2a33Zsz17i9uzUketZ1YbKHwVoG2CDokVq61vB2mez5CPGTvXfSqLdo",
  "key16": "2u737VCPoLKCu5Z6bsduEjSG2kD81spD427Fv98kEH2TjoTUmJoKEkBjtLNaU9jgh3GN3AqsgFBv3QFT9mJSyahD",
  "key17": "2oSbG4pmamPS77wXYAejA2YiDFnKuiBRDUczCEadSUrANCoWwmMTyjDNv3W6iciP8Rwd17NCrLWbGh2YwLPBV8L2",
  "key18": "3Fi2PG9HcFEV7PvifGD8PZb1Fv9p2dUxQssPkmpBv4TMCkEfXZRfPTMvdZLNNi1uhjoWmpgVMydETHvAVi7sXPqv",
  "key19": "5BALU5otpGrcPtt4pFsABMyvZKa8CX86yzNC2sNkvJLJXXXaSxk8um6g7g96cn3nS3BRaqV4ojhgmWYevHfUnQzn",
  "key20": "51jkE1gmk3oeus6KCtMXF4dgqY9734UXDuuNxq7mP18wVi3Gp83RPJei3anM643EqbKToBdaD1T6wMD3jMkBzpw1",
  "key21": "5RW4JSBxmniyuwk7ZpTuP975p5FDjAQ6VmQCLpP8Q7ESFesDjk6k8r1WAXgXAFczneigNwtcsBfJ5aeYD6Lq1DHF",
  "key22": "4jg7gUSUCcZfbuuXMGUspvGEbFDyPJ6hS1jm1asQ6UeNxQEp28YrWzK6azRzUVQMrmuwjMJheCVZbQzHak2YeGg6",
  "key23": "3cf68D5zE83iM3EMg51t8aDVbeNPM6RQZBwJNLtXnkep33udSywaWpTKSc6h2JsF9y1QVjJS21QTcXhFqANy2YqB",
  "key24": "5FU5tsP5xSJuJas53JzPs59URnYwvX99cZSxihawUzc29abK1LK5KNbUAizLfFB1tw8u4AsN3WGKCzBqmh6UKLWy",
  "key25": "5AsDdJrWnVSeL9Yr6vizRdAzDoJrwWwezqcgKEkmj1LFPpH1dKzUdP782s4zMGG8JJXkiuntbF639AHBDUio2AA1",
  "key26": "2bwtmJVvkvVwTYueCG8Kcw8Wrut7c6NsxohkB33wzYqSSQT7gkfVp9U2d8CfKWHWUQjT373HW3g4zEnhtXeoqvfv",
  "key27": "5qpMC3rCQJAZ8iMXBAYUgWVCS89rfynXESRLCvR5cQNxFerG3sEHQxZuKnJu4CpNuyTQ7Sky4vELmhKgdSzBkJ4X",
  "key28": "4SqxfJYSx3R2NhYh5KSstuULhMxoPtRbZS1HYfNr9stSRz5ADqkuu3yBBKiUHtL7i2C4fSCL9h1iM9TT8XuXHCNq",
  "key29": "DTMSLJywDkhnc6PQJWrgs31o57KWGNvTKhzLG7eTAVJuGXRRnyWHh186ijtAT6RoEqXTs8nUps4JEZBNbmTqxog",
  "key30": "cW7C36c6HzCb5DjJQT1hVPbRrGVZgBpRYe4AxWBMxjXn4ZmBGgpRAqXfv13JtxYcKffx8sF7HRhggQi1NwfNdAc",
  "key31": "5VrQVRSiLKquZw5kHvcZXxEwRvCfV3BU92yRWdCsFUdYVPE2khfGbbYSxboWLeCfafhCbxpvXxXB6kgtQi1hPzv",
  "key32": "4HSK1QJh8eAttjZo7NncynJVSkRt7RwqZRCwjQm7jkQiAmFrmtF4gntga1rdaYd5mNF3456g2uVoeZ2uQbBQQrui",
  "key33": "4dA8uo4LdJYcPyYxLhH37XfmiZPxLWayC6jdAb1hbus797DjxYdtqpEbBJYZbzCWm7fCcdfdB9i6s5jfUV17mhiM",
  "key34": "2eeTDVPdznCT5sWxwMHxPBSYUi4M95Tr3vmhj3D8i7MLqvQb1VWnpKgZTd3pK7xfJjy4sVAfNKHs71wko9ZpHTgy",
  "key35": "31kRLbMMCvg2roXRyVMqwRZPafkMZBV55uoAUmGUaK52ijf6BjapcnXfQiHwzdvRJ7bbYccHRLJHvXAftrMjfcZh",
  "key36": "ZTJKZajCVPNikbA4w8YirUXcrNaZYBGEoUt1DMwB8ZEKFcDoURsLLwCkb1CtbHsyzr54M5Pt221zFR3otHMEiR7"
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
