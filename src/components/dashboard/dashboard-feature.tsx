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
    "5Hde58Wh59zCBK54JAnx2KJDBgGDw4hcGSFVVr2W7mCKojCmVFtRATr3QVH3VXZ4ikb27KMM8ijrn5i2JjoQwBSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jpSgECoWTbPbKUAxTTYRJeHEv5Z4oFphFS5sK4cXiwFfyYgjbHfCpN3jutENaMpX5Uci63Ch8Fugd9WjLLZBozq",
  "key1": "4KXgAqS3t9QGYjE2gdAFLGJjLHu1s17JZs1K5kPmSZwtBLiz5LJzhnGEDxGbjZft4FgV8wb9EVqV6zhpgkzKZ1bR",
  "key2": "ssMc34MGbQdhiiBxYQwbP6YNcN8zgpnL72yRdFWoSPnRfD3GYY3QevH6qUDBafdzYhmSX5Aum2eUCf9sZnv8qCK",
  "key3": "cpoauF7ATGiorbpEY8J7RGNY5R9oJE58BJ89SXv79Z3g2Mwzt6kBhFKV4vfhg5zNv3jkHtLg2FbRj7ErwCi6yA1",
  "key4": "ApBQzM42zqhvv7EbZsRxS1BUYrjTeynFZRwAZWkmJ5idZ5L944uskuEu4J5xUnpaFZmzeZKQqUWoqQbaJ2jdr4Q",
  "key5": "4zr4mi2NLYwSzZqnsQh65uW55wS4fuzNNtE3deTseyfKoj2DpEE9pQShZeHJGjnZVBCGi6d8tPVra5dq31mKtH1f",
  "key6": "2RaCWEa9ANTKf2EEGodYu4iePAcrwFBLEQnu3ZfBvBYs7J9dk9EoMrJhQcQb2vpKxTBaePfbd3v3poSxPZJj2Mwo",
  "key7": "4fpXonQ3CExRZG9u3egJdfqi8rfAWx9WrUCQQrQzocEMm1CHC4Vc4e8FYFy5XVM6J63b8qvL9cFHsSAPif1frtLU",
  "key8": "HfwC6EhXBanXfmE5NBj8EySRzpNaZbA7zUVP39qSEXiLZv982KD5ALPwdf5S3p55mWdSHzWeAUPG5DiSs1wBdTC",
  "key9": "2r2Mu2B2Uwhco5KkFWG3kLaZV2tZm37KDDMuRFzJwBRmdH65LUEPDL1iT6RDkZ8Rqf9gjEVDA3rc1wgzt4EkehwJ",
  "key10": "5XBHNmtk9ZCYLfVi8k6jY3QBxXaX7XCkCzCRbqL6E211sGmDSsuENpjDd4G9JUrCzHpP9YmLceNC3qgthwKFETM9",
  "key11": "39rALzsHoyRsrg36xf7DQF9xxGJPCtw9HdawNgW4TaBciWMbwXasYCaL98gLSX853LU7qnpRouTgZDvrVMv3PMmz",
  "key12": "55ujJrCV4Cvvj5rz72xB3TVPNaJ4BSNSqQA8Vdye8xnaTtwReJSkudKPG6fcuozyw5XpraXDpv7DVpBiFBXiwHKn",
  "key13": "2L7wG21wzGdK9RDo5oLnEbbVYrj2mBchPvopeg7BvMhjRRuip6jUzuFfji2DgY91eA66JDiCAJ5ouoSvbGz79gig",
  "key14": "2nFRPpgoXCob5fvCDN32xSA5HMf24UX76S3j8omPQgUyHdn27n7sMczDxdcmqKPgkXkweKjQw87GChYWMJcvxzrn",
  "key15": "YaK7B5gxzFdpxYMohFFxG8BmXf7Q4Nu9u2pWtxN3Bg8EkbewpRAYr4nisctheEzs8Noc4c2e9tCeMQzB4EsR2Sw",
  "key16": "Fifde1XeZBQcoZZbSSHmt4XbhSRwDKdpyHdvT95EYW4kBfmMVFRs3vQ67f6BaAabesd6iaSeodGD3XUHADQFbfd",
  "key17": "3FKJ3UNL7aPNqF2mJLoTNxtGizcCE5Aiayk5YSRwPSN9VQu4Titxa594Aj4xYrGH9tCRviHFz7Rz7g2gTLeT3Mwg",
  "key18": "3ZPu1UzLZmsBQUKnzywMnUCYYwBAozBBkrSVrNG54A7zyboxoBPeKuAD2tgr6rguKmFypNedPt7yDdj6AwpdtyXh",
  "key19": "2YTTEhMhqpXApBTxXG6Szd1tSPd9Sz1bVcxZHNMtyxhKqadMce9PqFGfTTKpPLqZBw2iVJMSd7cNCTvqNwfspcpw",
  "key20": "4nHRsDgKTCZmKWyxQzg4VEezFhjNmgf3mAeXPHVMKhVLCLra7nHjzfkPtDCyqU6FdT4JGcnTBUPuMnRkoq65bgsG",
  "key21": "2Z8xXg1jG6yABvt8kY8T215xf7wzoEGSG3mVYEFYd4MAEHnBwdap7hZRL4pwEiWTduji6tUeXiRohJs1iEqeAhuQ",
  "key22": "2AG54z7FaDkTWQe1xVCHhS6f14X32auXTrT1H5jSQnfGp3kFz5h3PskUfPjV5YuMpPYqY7Wp9i7CdeSV5jonWBBp",
  "key23": "AE8LKTha87ziFsVzdRYzRoYx7YGHZhELkd921kYrnX8bRhFJVn45QaWSsdHcbi8Q7ugrT8c5BLKx45eR849TCnK",
  "key24": "4ofAvUK2uvozFsiCqk2RGq6h2tJJRbwFPRiSKH3VrVpwPjrdXj58G6jfZNgr9C4drVEVjEay7hc2XGJFBcBdJp69",
  "key25": "3WfCvKS4FX1chLq3S2PEKgmGcS6Vvui9LsU7dcnq52Q2PNf6rWJMuWP1uRJSV3vGMujxjvaRpRxmaBxVsDGSfG8b",
  "key26": "3Zte9Bo2SSc29en6NwJKEMtnHfkvZ5NmvhVy3Ein8FvN8KWKyKtuZ9iDGViS8t53KcVjZRBGH8pjho86W8UetE7J",
  "key27": "3guxtb5L8KUCboLpJFLEHpWxHCQ6sSvP8F7ZNWCm1KtX97zZCpp5iSQVpmCM3Smw34kS5LSbxquL893XAYaZLMsd",
  "key28": "3oTnw45QApfobM7peCjRseo2MJPN3VtRXu65PEnTpxRq65Dei38GnSFuTRtRDhjyqxaCvTm9cQffomZNCKuvgTK7",
  "key29": "5t8ByARD1qXduehspoyb2ksqSRnneZicXaNGon7K7GURcur8A9BLcxRtdv4BSDy7wmfCUZo19VK4mBuvdD6tdMhN",
  "key30": "4YriqhyASdi7mv8TiEgbKi9WVmesc18QwqaKmtxBxfUfJuwFiexijs6bTh5M8sf5siL4BBWZwQXoQsaNPkxNEjjz",
  "key31": "BV8SWiK6KGsRY1iQEPNMJiNstgshe8R1BeGchTWstdVQFrSqRjJ3VxSiYQ199wgUnrM2kZXs8zGUsurvetmcxG9",
  "key32": "mgtQbW2JRFqJDaBNVRL25NJHCfrjZ9VGmi2nSQQHFW3paxW8mnxaj3M1X41vp7cACfmmqisvfJDecMxdiWaavCT",
  "key33": "2EgH4vieb8AVfBhacRwZDf1hVatutRLE3ZpsCAgnmTyU1BEZisvuJ8APqq7bhF7X88M68cYja8kY96JDSLg1ob7e"
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
