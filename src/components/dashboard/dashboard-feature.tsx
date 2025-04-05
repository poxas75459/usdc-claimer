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
    "2HpDPhiDakemgrKAtgn4QuEPcCTHii1udj9pvFNw99eFqdapWenF5L7s3eUQhXtgywxXZrrJLiGdNYAGKseet8rq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P8wqBSxc2Qxcz96FdpyVMadRSAo7kKbubnDzKA2ZgDfXLWZcEj3dbSfyHEFW3YqjpZ2AJCiu8kvTxbNRECCywja",
  "key1": "doVELZ3J9WpZYNFPpBxHgPTpVZ2WJCZV4GAR2wJkA7eLcVso5KJNPuwsauhB6qiXmkkQAYYiQQp3hSr6nbXFsgR",
  "key2": "3YY3nPso8WpMi8oifncqpBeoKq6izHVzHNBtGQUxFeXu43ScwosWA6qNHbtGvVgm9vDpQWJuGg4NVTzJsyATkkMi",
  "key3": "3iuVz6DRHDz3zepUQNeNJgY53qByiZBCCRAkcy5JgNgxDAwgjSCPEs91yb3nGfAHCvWZTKvVLPM4M3ZzvXisGMh2",
  "key4": "vYwqjbL1Ugzt1Efpr3cp4dtkWs2sJ4PFoimmTw9fsJpgHFfVXYQFA8NpzReQxDj2MNNoD1JEVPXiJ9UMA7N9JJ1",
  "key5": "2ZXMbEpbcHHPAEuuhjB923CmdcoYR3PDzPJLYfY63qSbJhG1iUTF1mpgGALt8DCsFitHpvHCukrt7zftUMahSv1f",
  "key6": "3N4ockB1cFYWo85XV4fmcccZvsvi8tBFvR6Fw8nDBtEH2AvrHf1d9FvmNF4Hy3WwMrsKwja1dzqLRN1vfPh1KUiM",
  "key7": "JDUvvmnLvMjV2j2AYZUKGrG7XvX7pZ2emWXxVwfFaeR1nubSfR7SZG2UxvmaT8qFSD2aGtBhbaJMTVXoVJPJTo2",
  "key8": "KuiyPbeqQmuPJLQxb2ySgsEnvKnGywamU1ZcBV2J5e39fPu4E8kvoD9ZN9SGrfr1LGTLjo4MyvVV3hr3Chorpza",
  "key9": "4q4UT9JKCeTnDkwMYhtQ4RxFkeDpsLUG16rkyVi9auog6S7G6duhMVtCQSgqvfxZwvqbxBw4XVJZgRmnTXmhJe7f",
  "key10": "4Mbh9sC9Xe45esPf47EKEHSQch86Xv5ZNLbwNYq9g2vq2WPjgcnsTDRTPsgFNMzxwMbvSNfftdZvATmXtoVe1Cfv",
  "key11": "rwTL42qi7a4PXaJtypDybMsu8sAYpj34n5PhYN1SzdHi7AR7p8bkxtt65TmXio1NW16ZLDs8RKFiheidBARAtzE",
  "key12": "3W7Nbx4JRSykHiE1AZFWp84BQf15T1h89R3rxMxzvXo4RgRG92VyzKPfM3LLoqGTetvkTkRbxAm3h9Y49tcxkwar",
  "key13": "5z3cK4TVdX5pPY8HCFHjfJv4cuqHcUdG2dyCEsEJ2X1AHNg6G1enVL7zi51xC55UV8KggSmLkBnSfHDoTcpFBUM8",
  "key14": "3x3VapUZv29CWd4tZqdKoPs99AF1TbnAdWMwkSNvFBrEftTyfEdWsL1PPGUtiA2xpXuixHq6yZoJRpsgfi4htQvH",
  "key15": "rnGRwQWXE2er1Wkq1mSDAa8WjBs5iF5n4r51wXz5RHayJf72biR8zFLQcGtXomHxi539NddCrwvQcdBT8Q9zm5z",
  "key16": "Y6hn8XLg6c4FdBqyHr4E83DJX7daoGerJHW24zbn6vDutgxxRTrFUHs2tLmNraDy7Ty2M4nB11NbgW5XiKgKvfh",
  "key17": "43KD2VJTGg88o6U4LvpP9Pp6BQurgy5nMjdpUiLXuFLyoPVeZAAhwxiRnCzS4wVeBx1X6mihKbR3tEr8VAs9Fro8",
  "key18": "2vXGSgQXjrcqapG6UcWHj7ngo3WicMq6yK2GqbWy2nzEymSTM2tr34rTaAd9dMTrCWzpvZvgdtcv3kiHhCfbrWLU",
  "key19": "jqRe1YAwdExjRUwbykZcrVYXTsutZawxdH9mpM38rbMibpYTUBPPBJE7H6H9mVeWypYEgT4B35ZPjzE2WdMj7C2",
  "key20": "3W8T1nK58bLypsgFH1NHBgNCEhLQpFGEpdneTXWJoAeZEYBWGqkWvFJzLRru8jLMUG2g8efp6Pkb8URaGb6bMxWD",
  "key21": "65qjzNtaZcBWg7BxUYdrTG4b6hYZXEYejreV5sMDB2GMU83u85ksRaMvKpTPcs1YMxr6R3in8RmPX398UwtTULZU",
  "key22": "67ZrU1Wos2DU9aje6E5fWLQGgdZ1Qg6AHwLaiiuvALBVWSLa5DmLm9Xy7SS3xKYfVuWPfMvKjy8kj2oXE8CNkFeR",
  "key23": "B8ZgpdfJHLEdawXVn3pCchKa1UDiAMXbquSu43ScBrmmxPrm6WNyM7ijYZogqEpUDvPtzc7Amxwj6eVywMDxSHa",
  "key24": "5sBGkXW6zWRzNNiVgQfJTnhsbSrVKWxL8RbaS4DPonhxwdJX5LS4xiVgQgZL6ugp26zjJQPocDXKPWdFLMm333QN"
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
