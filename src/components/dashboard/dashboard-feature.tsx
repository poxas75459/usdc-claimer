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
    "2gXfyopLb98d4yJhCc7JAJNsqF24MH58r7cC8ZFtBe7RbNqTcLM2BTtR3srZFz7NHw3EmYqVNjBNqi7MyVkado1H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cHwJp2SZbfRbzZ9uDk7o7YEReyBQHpeLnoFTzvfMKRzYgzjfWUA9E8n4rBdwML4T26tXWuwqnQmVzFkkTiJj5WV",
  "key1": "2Q4q8wUqi7z9WYbougQgSTFi9rSh9T22KxG14Wjg7UiFYRSjpS7y6YAcBTwyd1gi3aGQCVbecSGSZPGfK8qSp5Z8",
  "key2": "2sJ6ymPetqBGxTPggToaHJ4KdkQM1E3AUb7vjarhibp19J4inwWXBMQxPPjQAMAcfqptiASPj43J6DbH51C95jbf",
  "key3": "5Uj97VQFV5xnG4Z9Sei2cTFPhAvK8FUX8YH5C6J2aM59RkHwLW9BxKLrNq7uy2uMFood3W7wbzaChs4SsCGHetLQ",
  "key4": "2L63RHmH4BWsh51Yf2kz3mDc9TRVPLme3bgMJgYqKqudEFWDtkPkVMs9HnSYsLMSkyZ5EPBMGQaYYwgLWYiKr2Bw",
  "key5": "2zQ3H7dH36EVAKxDy6uHBpntVxAxxvy3ELp1hp6ps7meM3q6yswwJyPrfNABevyuvCyV8rpvPobXnCvUiGbuVKyJ",
  "key6": "5JysTkkaCNXkJjNn4k2tW6hVuiWDJHXsuis42k6TDMjpVaGzwWsvnWWL4o1PMnHiqkpHTZounb1qBjssURzqwakm",
  "key7": "3tEk29dB5EFJoKT2Gtg94u4Q1Z29ZhGWypowhEPqH7t6EWHojXcCkNS6a9GR3NkR9DymuSGxvVRcKWt6zxuTYjqj",
  "key8": "63RB89jShNmX8VPvRGoMHwXZK9TSsXwx3oBvgnsx2nUeDmYB2AUia8GFK8DG2zNSxjrSV37uiYAFx98bpUfpkyzq",
  "key9": "65kXkwKHK1Wp8Gj2iCE5Jv7XDEc4zdkDXDERbdtxMShUvkiJrxqBkUQc8rDY7EPWo4sjeRotFToEHffxaxWkEuA4",
  "key10": "54zDWk5CL8ni8dzatwoq9NvjhjbaPsGawF83BvTT6waB45FSpxDGFPo6D45x6ZwimZu92Rwa4t9NgsodBR2JxCTo",
  "key11": "5xPgGmUXer5dJHCCV3xQXNLC7LZEpoZEaSq7FTdcHRVF2rmevRc1yaH6yy42bUR1QyNbo8P2f9vvcn1dZt2Dqgq2",
  "key12": "2TbMuAooLsM9hncgVJKuCetRSqMCoeAKZQHrTRYC39mS67VfkAkEPtRfAAon4BLjf316WpKzhPf5ZJNWxVKgPG3K",
  "key13": "4Z4SaKp7MNUJ3TFZoWSnE7DZfjr9uVcHPi9rNG3iywuQXivvg6fyby1Y7GkULgLaqTXbykVMPfJH9y5cZ8nPn5k4",
  "key14": "5B86qLmQhypbrBkDcq6baFM5EXfBjVp7rpMDoe8DWzBnxUUbC6apaEmPCkU4DVUC5nCMKywPMafo69Fe9W7R39QQ",
  "key15": "5c2KoiTaeNmoFJsTZaYey4EkP3GJwLzyhmpuzGkAvyGHH468HU5YoMhoQ45CEpX7DKJ6xo9tfjjWX5MUKUnFQCMY",
  "key16": "5wHdbFybwTWyquFBpTKBviwJDozmXWLCPdfKhS18batALgquqzRs67AUQWLp7RMApPp1Ubr64B7zXr1kpnXWUERY",
  "key17": "2tb7v8uuMtNWXmC92oCyA5p8hfa19RXbuQjegVCHzKrVFnRWK9FNu6rPi3H6cNhXMYZAJoAioj5s5zdZo4Kx1wuZ",
  "key18": "2zhGc5G65StxSkNW5ebQV9KL4bpDLpmSw36YwzMXQLkWnCxnJaEKarM8i3fMRmr1CB1hbRnpG7k7PacBCc8QCKPt",
  "key19": "46XpZo24xNwugxobRhUPTodV87KBstoXJX1vipPX9f6miVvj6j7cFsiwkLP55Ki2YwdxYsKr3bM2gMGSorkswqXT",
  "key20": "45DEu8nyTGaYPnuh7Gen2YjdQd6YmmbonQe6CERE3z9As9rAk2UkJnPofbT1bXz1TVBCenMQnDzQmxmrpyXFsTtT",
  "key21": "H1Kba8kMTfyw1uhNxA7X9DS9ELeeiEUydii6QCkwJvxyfuP9MnBiXbzBueqB2HSz3EYgbZZoCjKepCEsgXRbqwc",
  "key22": "6676MqfFViD6yjVh9Peec737PR7niqPUZoKoamXfJ4md4tSKtW3ttRJmEAn2yYNxJVKDx1nuAqwSyZTgFfEuvUUH",
  "key23": "3mDcmnsukaY8LzquhvAwRutikTH5WaxwGEG5m1YB3nX2G2CDu81YBk9VsztQsn1KFQJaTBQfudz7cn9QArqPJoZr",
  "key24": "5rRs8trcCfMMgdFedv9nL2DxJFsUVYExYnSnBUdEbeSBzqYzagX5e12F94WvJpJLnLbUR9uG4ofHA35oJuUmE7w8",
  "key25": "4MxP6F2uCpp7hZE12f91ADxRvvvXqePNKweJhc9fUTCMqscEyKfjyCakjkpv7dJz2LPDnDyGMgDRGDUuR96GUaMy",
  "key26": "vcTzAbo8rKK7v5Qtm2vyaQ8wydiH4ixchPz4af7mo9bSRRRVfD9xHpCTNRQNbnjFiN1jCPSHuvDfshgDpUQD8tM",
  "key27": "31dA8oUDwLrsLhMYkwDDZt4r276Vxc9MYKgtLKTtaAcVgkyjb2WHUX9hfmAskWY6nfxc9Xdd3E7rc2Jx1KkGz6co",
  "key28": "3RV48sjK1G62zbopcq7ZDpLmARPximhNUawurEG9CEsQ1YtRScLm5NTYKgAZSHoGK7hjwkQi7hAzsU28fNXnoqnT",
  "key29": "3C7FgFHpizmsXAzThFGHrC3RUxTvpHtNYZh97UBRpHdW5grHpvQ1CriGiH4fenFLMc5vWnQzUS5SwRwQ8uVmdzK2",
  "key30": "64mvyJqHkdwzLx9QXirdP2LRPpWwCb3J5t2wTbzp1SxBFSAbdF1jca8HzqQzdUnUw56LWsFQDgkCc4jmkWCjuopC",
  "key31": "5rfMexweCMZp21AVttj8aUCGoYvRtK9kuwLjmtHywvV7cm6KUsC7XJtnZr9uYKJy4RrsSjdj3ee9KyfSKvK7Ffw7",
  "key32": "onWRFpWB3xe7szMjLVvfVSH62YK7CEyPHgK6u5miQG7iu9wFGWBRNAxMzmCV9zUvBAfdpTZ6QPuXuUSpq6nUjN5",
  "key33": "41qqZJXTPDzPyuByNpXKf5XS6DCL6h5S9aeGvUaDh7yjnZ13GrtCvQSngoSJ86W9rknEKQ7j9z8z8GaTWNt9Ltn",
  "key34": "2DLrL7sFAbM7MDLuvFdhfFjHBAfwY7jTDFkincuQVX2Ekxmrf2Z58LsH4Z18wKFNo7NQCw7BPKajfc4HQp3pSk8b",
  "key35": "dbtgzzrR9cay3NPXcRj61yx8AWkcWm6mTqqS9kSGiGM3p9ecNLEcmyiNUgFwTDoP1aXDpdUtyH4f2kqotWbmM1c",
  "key36": "2UVXk7AwVz6kAs4tg13vYUdNmm2GrpXuaHLvxdfr6WzJQt93Hdpy4rhk5vN3pwL1BWEt78oWKM7btzmLegqSW3Ag",
  "key37": "4EFtcXbzNunQtdEkQUav8ws9NB6sKEJvhos3aQH4txFkna5rA2uaPcg5D1R5645Z9eaGw9f3ErhCoqxgVBZ8VnpL",
  "key38": "62V9RL7wgrSMH1pygqUL3bzAvMRXaZmFFqUMSnXWtmhyzyy6em1CDrM1qEjyKbkS7PH6hAJXEeDsdwbGSPLvJbsi",
  "key39": "5aXX2mcqAcJ6pzkpFZpgZkESV5Uj8eaZjEUGxQLMcD8soLf41yB5M9bTF8PrVt83GZ1mfpDToosCbBxdtuPopguT",
  "key40": "5D4WzE7KqM8694bNFf9HSAsqvu1571EaNCBM2ioaY6brgaGL1ne9As4wKmMZfYEPYvF6rjW7dGyXvbXyPXNwb7LH",
  "key41": "4y9RDLYFc4WThdaKBJzmC4jEjGzUivnsNb8jxVNQof7gB98EqtZyqdk4Yh8Y34WebKetQ8GfaxMXSxFmLWbWVx9W",
  "key42": "5597rwbcveB62Lpv9NxieanJXxKsKWvbwTmDoTh4671v9uFKiTC5hKGvaLeFWvkchQzRe416MvpJqoKfVVmLZzs",
  "key43": "36CE7dSBqa9kheuPrbPCJpx5fG2D1jVxcA3V2Xcmvb6fDyfQQ19EzwBRxkb1atCunpCUNSEmB9bPYwjVNz5hFFUx",
  "key44": "4KeX27ppbx6iaNPy5AxDSfSmq8WU5S8Yqb9MaDBNk5JsEaNeMuoohcMKeY3YoFUBfsndxSQL9WnFUCWf6SZ538rU",
  "key45": "5vNudjiXBUXGwcMEU8zpjtVhiMKSrmpX2c9msvtNjQB7oPfVpNS586pPxT6ATr53AA4VHX4iWd99fJUaJLGgQrdG",
  "key46": "651TBB5zb2ZegxVmRsM9Bt43c7N8EiJnZx2TMdcpb6gSr97QW6dE9qvnwpR6Kf1Gj9jo4PaP3AQQSb8hPwanzubW"
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
