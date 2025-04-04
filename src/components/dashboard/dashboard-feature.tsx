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
    "3k4xL2xEfw9q1jiZGNy9ktHm5pfBHrsMyCjaruECYXqV4Bkiw1C9LmM5wEqXc3dAH7bPvSPRgd1Nyrzv6qePLB3w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t67nRDF9c5Vvfh4Qzvsb3xVgRq4uV37Vfpz2z4kwhb2jscjWKVrrmc7A4kBPf1o3hMJkQ63ABY9TYs8L1hVt2P9",
  "key1": "3V4xHyWxQy3i92NDwQBK2f7kBrEEUpDac7zCFxWhZsALZdXA8nhE9EMJwJPZuyqavQazp5aeTY9FknXDPysPp8zX",
  "key2": "3nYu9tBuxEK4n6W914jXv6c4DFm4XvkCPmX6DWwFGbCYETZ1VufXsNPJKX5GvVR3AkkE4V6H67PVqdWgBa2prcSE",
  "key3": "529u1Ahod2eLHKd8JPUDT9NB7EwNphMzG2sn9Xvmwruve839aUxkGqH1Z8PPhoVN7LoCayiJPjHZH7ZH7VHTsXUe",
  "key4": "2iGbPg1qjbQMtNpEvuGHJFaZNmKiPgVruKWwh4msNV7MnB8tbGnFoayfbBt4YPepjxtQq5cbarSEc197YtgdJMFb",
  "key5": "3BinuKesJZjozvJt3J6WWCP4QLLkYr85bT8VocNh7EWu7cHiw2o4ovxZV7q2nooy7MESVyGJmZ7tdNYWTNm68s2J",
  "key6": "4JCPVK5EddY6JW1ra1rYYBnGqFMw9cAZhFXkdtuQLrMcqYfAaxV8qHBY9gLCpmPD9NHuiVum1D1XHudHPesGg8g3",
  "key7": "5or3nJ1xjGiY8C6DgSdznf7TTvZ1P3z87gTEiuJ5VbsHvvSLtHFgBTrzsAM9MVio9DbmWJnMz7wymbtVRbKnHd17",
  "key8": "4anXXmbig7qmGRx7ZTAwfRit3BAHV3ZE5tQtcA6NLpcdkywtXKApuapy2LyP5uaeoaxcDVRzhYqYhMeH7W1dkTBj",
  "key9": "thrSPAQ3CvqmLC9i1BqbYktsCEZ3AHrFewz2oo1iP5EUSnbpdmdweW97RMg8ugAUDucxy7mshDZJcsFeovXvDLi",
  "key10": "4xsF1sh6jTv2pAdiHCGhYbG3LEewpk1L6vsXWJqvv2UoqFzeRNnxc7k1P2FAvJhQ5AQevGqnLXWck4vqGQCjBtJ3",
  "key11": "5o1ZFwtjfbXs2JkM5U5VQUqL2hPepR1QkkEDTj9EWKoT6sy3btUFg35fvt84oQHiGCPM6ZETZqxqzymtjrX2dUSB",
  "key12": "4Em9tEbwmMYRxhjMqcZs7M4q5jmKPDLKxyvQiqw3Ec71qZxdDfhkV1GGimQkwTPeBCpkzKQTR4uFVJhU6Nz5LooF",
  "key13": "9pdgNw5LUWhJLjaW314FdwWQ7s66c64PBLYvTTSUBUFdpua64GgqEynipqR75ii5zr55Ga4dhGB4ttScZe7Lmzz",
  "key14": "4mwX5QsMsALWA3pdyGehUs6mefaUtNajk1QhWDi1enXW4Ri17LDGVbJ8prqAckdKQq2tBfCUhyKN3wtUvv2KtP2Q",
  "key15": "4zaPjtMvfkq7nodL6KiimGjD3GRT8wbaZWLmE56BdGCp4PGeDPoh3vxm4z83zGeT6NNZL8peq1dJnnt9VHwnKAj3",
  "key16": "4strPMs1bfSncThVg4h2rHVErwHsTxBHwSGwrWoFWcD3YGkjV8gtjufcJ8hvMe2BoSmLtucsRS1n39LN1ATHgXeC",
  "key17": "37PnQqjkvSVeoB61UCfHsZYxEF2fEXUhJu7UYS5MFNJdoRg1XwFUBzxCaA4umngGJD5rWsksn6z4JwrhH8Rkoi3f",
  "key18": "3xE17XnbQngcfxBzWE4BMsgD3aqqZxvJbdR9he2rsE6r4MCYm7dQxM3A2or2skcY1aPgQqrb67oYSdg8hgRivh6f",
  "key19": "3okGXdYzcTyRoqSby9MuFDMzVMSPa1V6R4ebVqYnhnYWbfxiFKPSSTFdvSm2i5hTWozBpUdAyuQrbAwboUUWEBzV",
  "key20": "axnnP9Fx7mGvaxLVbiZJMj9KYTVoNXvbamhLxzkCv1SeKKXqQNENLqzYhzpatgLoeqNg7vo9X2H7QjwtJMVzYEB",
  "key21": "4XtUoxSnFTdM3hVsMUVdxxRBhiU4Az4ygqf4Jhq64h4qNs9m2Wqjy6nk5phL5kmscJqMybbJMdLtXX72N9zkdTxz",
  "key22": "5FnwDVA9FDVqTUctzd1QD9NDXN9WBQjnKBiajFqKsuZQ9dRNHQfzmqA2xfnF1gqH9jpmX6oLX1gor5oaJNNQVWWS",
  "key23": "2BU43HVk63CHG9nb9m2nmAHL3qCvX22vfCwqMr1vXLDY66j7D7BhmE17Guy749DHdcCZPE43U61JQ49m2xLewBhi",
  "key24": "7e4myPoiiH2DcVZ9eHezogwN6mYmUzcwuQGiachvTYQpWTE5NAFuQH4LhcNJU2JNQPLS8E8eG6esQ98MtVisSL7",
  "key25": "47qwmXvg9XbW9bKUNdft5dvZdZVYnWcHRxrSuBcjjqMVK85LK8mJzwqCp59Um3Z9jmSWixPrN2CuixZkGJcHZoGx",
  "key26": "645q6T3omVoFoD8xgntpZabrMSJMjSf7vc8rZrxvERx3ztbZspmCiq7Dq4FVvL5yreys4K82PN4zJi1tHGZ2hDte",
  "key27": "2wcSSa1hiDgynXjATMEdoW6YezFNMrNYD98V5ieSnHQ7WVnfKTCuinMzigdp8uSm3ShsxBUyErsEcswCFPkhWC6Y",
  "key28": "3Ext2cwHAGwxes52YsaWDn7CuiY1j53To84EKBMEV65YggPaNTy8NrFg9t2VqTZDYCF83zfJnJuQEAJrSC5obcNb",
  "key29": "GT2JhucwXKAEukWaFFA8JjixovnU7SVzzjgTmSKubBkATbQ8MEXTrEB9zMirjgvfep54WjgPXnTnJQUkoVsugVA",
  "key30": "r2bzx9M2AvQppLv77kFZ9F6UwjdixZeinD2C87oy7sqbsZJMq4rwhGxEBtjjTknTFJZB669tundkDomENmsZDUT",
  "key31": "49TczgWYH2HAswkJauNzAWkADVDooAAQEQdHRzRzkVLrvR9KdFKDzk91qEV3rdQDuv4b8DCYsjvcBcxA5n1se15h",
  "key32": "2bPUTuqcHCcBPEewZpjsfm69X2rFxuZ5a8M9vPpHcFaeUCJ8i3hpqWULc4GKXdScsHwbdNQGB5KcLQccwMLDRrSF",
  "key33": "5LXcj9NZ4yGTw2uxQzLSCsJvp9sweKDJnG8yxm8tDSBVGcdsCUw11ygD4jvRd5ygcUdK72iMqfLaBwBFcxXSKaHN",
  "key34": "3FHpeeL1wBoLFDP7By48Rho4JEHUVrtdByEqotomQPZM7BTXqLwFADnMvY2j4MxPFZWiCJqa3Rys6ForgJ3Zo3mT"
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
