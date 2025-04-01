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
    "51tba2GDrBShpcrUUANE77gM6ni9cki4EWnCiYvJhQGHPSsSG6vqeK7MPxd1NMm841RDQ4L9wUCQ12E1t5ycqED6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mnAuSEjX4rFNQAQu2Z45qi9iuYcMfY9KFCofzxidEGotjm3QJdwuSK6Hr2UGjsxCzG8UBPNvA8XyRzTjk62SGp8",
  "key1": "eDUEEcfawz1SGoeRJdU1XyvgRKRjzBikfftGtKTSh1YUhCJ65xvSVDv1aRefoRskJn8U3u6tZD5WVgfbqPefcGQ",
  "key2": "3CPkmJ2GZ2ZsYSQECrFiqzhdvDV8ozjv2fEdAfD5YMv2NdZoUm6hwzMj8sTBGLUpXmQT8oJcRZmqdXKhCd5zfAKg",
  "key3": "21gnsED2tt5bpUGpHDmFiaZmPwkDfQZsBYRAhr1drnotLSXuAi4WHEqc7GEk3KgYi6sUNsR8CkYaQ71XyixvfkPA",
  "key4": "eXDmdQi4HBhCAbvknLreDrT75yHWVJiChcH6dApBUj5TBHgvn1ijMmKTWaZgeAQH7na93nrtPHiqy8XY3kraMce",
  "key5": "uJZE4vhXZZ2Jo2Exg3pW1ypgrVFkLdsJjuBzxo2X8Ds4tDgcg7TJ6CCpzvezPX7oYungnbWzJwF45QM5HDN3UUm",
  "key6": "7Ab2ty9UMa4m7eQqhHezae7XKZZ5vA669JUvAmXyGEYTwRSZZoaSAMqjb6Jd8U7pgSoJV73Uip6uPLaaY7Ttvnd",
  "key7": "4vVm4oDnHVPje5JNJjwb1DDzKQtJyd4FVJRzSfdqiiQG5NxmWPKSx6tnMBr1tXq5HnU8Y5SBuDAZ5Tsi7Dpm7zuG",
  "key8": "5hPW6XMMqjuCWL6tF4dayNB461YdRFnmYmG7RDdBKkuSxB7bsUsDRm6u8XRf9YBJpMgpj4Nu9nVPUfV6apRBGCD",
  "key9": "4wyzYCszYP8DaPVe4PCdXPAwQVqA6BXiSFkjwHZM64YfyAnBSCNTJiVLivL7qvJcR1ASyp7JNxSataRcMwAGV4uB",
  "key10": "5eDS4K6iqJuTPr646nwTYVmQBqEt65n5wqovZ6ZL4zWjwJEDQwZt3JtgCru32Q45qcJ2fqkyGhfERGmGsbgMyFLv",
  "key11": "2W2uYBY3N3n6BhVk8QDwnSEW4peW2Ue7QHjnWCS1jK47DuRfm1CHCzXqT44P9Tr6z9Ttp63urfdyMU4Fyuy1W5Sz",
  "key12": "5B8boow8xmo8T7eE81Njv5WfDcQqozA98Z54CYkYYteF2BoiTAvNuRAocUHNSyEiZVxNn91B81LePsXXwMWarAFJ",
  "key13": "3hhyPNCFXJHB1DWR93SmqMT2aCkafkAZAEsgyafyEpwFtAVr5MXVw9iEe91MToe7qXHXj1HxZrapzrdBSmjeK5uW",
  "key14": "2yz95vWxnA5eScYQkxSgTkpzz6jb9r4dkKttQo6DvHp3k1sr3Wn6mPy2NdoPfH1iJLLUYVZsBmEdvoSmafXFrNZn",
  "key15": "rrNB47Ub4roe4duAUTSQ5aHyjhoWDGX4DCcgBFvzNcgqwhh6eWWrGSTSxWwHLT1QWH4vj8DFCD3VvHhn3x8H2Q6",
  "key16": "2VEfUcvMpzQp5kwXpMyqZUHzDPfpUwRAdPdkyRgA7j5iGFo6o7nfjUcf3Yz28uwLgNd2jAENP1WU4G3CHdfXqtsY",
  "key17": "5BPWN6mPU8gndyxRcqAXgjNPmvmfwQaXbhUMnpJ6Sc1imH2YsR3cooz8DKSMTdwBrB22BT9yjGxejCzC7ac9mohC",
  "key18": "376Kqzg3kwmLo2eYa2Ms2AmTG1hzKiHS75J5Svdbn7dxP5vxu2zCnkRfxoETGeRrMvL7JLj5Zagxi4B81xBfJjUX",
  "key19": "5mCFQ8yV6R1eMJ2x82UzYtxM8kN4k1YMkphigr8URZNAqTBajiuzuZF6hVd5XHnmNgUwbYsFztnvA1P7unvmbWkk",
  "key20": "4AZQMBYhZk4Eigm9YkmJDJt2AC2uco1DGZRnPBCpFFuo1MnPsR56nxado7imGkfgaRpGLKjRgrfroX9DPTZut1XW",
  "key21": "99LujQmDD3BQyxUg2t6oXquSdwumjFB3HUHAKt8ntT5fKiUhA578PnNoX8Y8CLLiy2DF6xAcwbgtVHPbLqZwcGt",
  "key22": "2wGNrGkEyuhUUFKoG4bM1hpQL2r73peiwFHyPp4RkHe8srvNpzVn8E7WnnmcgAD56ExxJ5Mn1zDSMXykJsJsiVrt",
  "key23": "3gRJAoevDyzQ7z7HQcCLs3tQhiDyHeecA8DNX5EeZR8ZviKZpVvCBBubG53cK8L4VoLKSjpcK12mFU76qw9gFdP5",
  "key24": "4Wb4dBdpFsVLajFDCkvkGn88vGYzSVJ8UHADWQHf5DxRNHpQCxJT8QgyqQDv8jHsiPT7ZEU3pxkpwiTnTJz7Ytn2",
  "key25": "B5zTxhcgAFjMJmyxRf8eTye7mi172ku9EJJ5JJYk9BkJBTPR24pLZi3FzJdx7cHogn7TgqmhXQUJ1hDwaNnLB8L",
  "key26": "4X1WeVzcrQa63dESwQSohkHXcqy8pavXwucmvX6BWvrQaWQhx29oiWVRDnX9WtgGVw5HfWk61AhYHa9An4Eotmar",
  "key27": "5fwucb3Lc5RCKQznTijSRuzR7KQRjGP8euoBQeBqaaQAXDtGd6ZcVKYBYwRxFB1p7YphDVq4sM74qRYAv6yZo7ir",
  "key28": "43bEBBZVCJZW9fNgiS3wBmNMkwV3ZF5dC56F8sH7tQmvaAdCVpCy6WjJJKcivfDwv86nLcMeoiY6ookPSAh7eox",
  "key29": "4bHoa16BfdHF8mpAgGLMoPVk13PW7XXiKyPCrS6dCMJYEZ5pDuin2RdH4C5UkQfkkvCGznHVmN9a9xtrF5bmnQo6",
  "key30": "125sDy2QSr59X1LmsbqT1xqAesnPMWxP3QkPe7akeY6NkALdXabsamtR9gYMtWVmE61UtP1naBrvtQcEcQcM7awn",
  "key31": "2CLVsHbsWZkJ5CWD9A35cpvrPjmkUehpmA2uKPsdbTPKA5pXn2wNqWFJau8Te2d9f9SgqJer3RYpF9H8cDXCu9ok",
  "key32": "2ca9mdotdGnmSuJxoaTP5T3QU3X9bKgdcnhQSkrAdSHxsEskAbqrYJpSkRMiGKQtacViXkMJ3xesytXR44v942Bb",
  "key33": "VcByerVMVqHvGUjo7VumLQqnTzonvFpDFxsozWkxh6iPjw3QyoM8H7KcKd5aVbQFb8X1jVhERAm17pbbLR1Gciu",
  "key34": "62A2hqbXeZoxEiHtBLrTsxjhEeJbt2MKydam2GxumrKRLELxAA6oKARZ5XsBeZzEiN14Tgox3PKDhKj3P6CbArSH",
  "key35": "5k312B3vxoPWLfKhX9YT9ptVZ1vKtKvzh8zwZj7yFGMnVNn35zz76A6tfDm1PzDHhiK9UToRSfTGwBSCaWYjHd5f",
  "key36": "4EMx81ZcTQ9DRrHhtUyqUGr34DiWtiaN3eWiyc5pgkFtdMrTt2w9NFvEhNaMKUU84k8pRWs1mg1qhbkdxd8bieyh",
  "key37": "2wdArYcEKFL4748ktVA68yjcXcuJpdKMcFzhMJj8UotVivvTgNcnZa1rPxfbQ29rLD6ikaiRJFqy8ScEYbfHzL3D",
  "key38": "393sLvkpNcVGd2hNt27LsajuBH8c6E5MH6US52A2wp1hDqA81tqHjGGrm1XNavSbTV4WmMrTwo4Rx9JdfGyEG8r6",
  "key39": "5JaHvDGMLYLwRfArEU95pHGFRGbyGXCmTkZGzmh6bvjLFo8NcBvPrjdVVcpUUJt5Q83EBZbFCT5PpHGkbvESwuvu",
  "key40": "2mNWyHgr1sns63TiU15SsDv8bryx3XfSpyPctAYqofzPTLvzkZRXfb2YRdj5KRQS3xoLcHGCz4Dz9QvKjPkh4GRe",
  "key41": "5zqJnogR1RuSDuwKxs6sT1J39oe8KWbxDbq8F9A9AkCe6umeZAqaXBQvFuPaxCD3zTPXHA9bUtyTa9pNdtbMpJwp",
  "key42": "4awkpjyBcjoV6rSdJnFEuVckf3ecG96jRJ53qB9rVh7gr89N7ZuWYcd22DM2EPr5E74KcYppZpLnBF3KPFsLfRhT",
  "key43": "2bdwTD6iofwoBdTXcPBTVpV28Bh8mbJKKCqaRiUMacwW7bfHmCdU9xyp7R1TJt4o2pdRLwdgFtCQ3eFRh6cBHwRu",
  "key44": "3dskqTDJpgSEq5zEXNKLY8dppxLmSRrbBQaEWBcx3TsEoafE76m3ALZd9RZLkF8oPDg8X7kxHuUTHGQKhAJto66M",
  "key45": "2KhC5UxEe9sNNEFX9RcoLDnwFT89Y9BJ6YRjcRTncvEqSGrhW9m4LFQdhSU6EwNUhT45RGHxzpceNn352HKDfYVw",
  "key46": "4yK7uEsunfbgm27jT1DYDjELvU3wtSqzwZmRhGozMweQpyaaiy5RdwXyu2XaMKkUyEsabBdqLnm3HmxHFHTBuZ23",
  "key47": "3R8mQXjSvF6wpcmqPVMH6iZ2YW3YPj27BFSLogC8RZ9QShmfA1PJdcFMEMq7UFvsGZNq2bLy4RdGpitF5g4Y3Hw",
  "key48": "YqT3YFN67jH3AAhMBE3Do7NSasYww7WawfJBbZTnBLY4bqFaoto1QuiKizfvsf9XtHc9EiHaiuKfAW7i9bc6FQS"
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
