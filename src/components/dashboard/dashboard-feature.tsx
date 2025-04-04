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
    "2aoFAtrAexov2eTUhB3ChQCpXA9sS3HYKEgoumUkiQEhpRyvfxPb4ZA3brK1Z2YUFzDUFLCkq6vMfL4Fzz4mm4cz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "121tiGn4S1ki5jssQRJ3X8U281mLzXHMcuu1Mud2oKTvnf6eKA63EFb6eVV63EfjKYTXoXodGKyFCtNiVofRmXSC",
  "key1": "za1iApmtdSfKTCWVP75t3SVtPexrCKD7aDavBSHbt3hWGQXChJwB53oXddUGyS8ksgfhsKPVqhSymaA4XfmtXcH",
  "key2": "7LbgMnkHkjhiH84QWxL7NNeWzmFKGKxC4uhcqvVwipgEkJfc2TdCvFMs1oZnTpnnfFYSPzKZVsx6kHUvcz9eRrg",
  "key3": "5K5BmPmE3yHZkY174sgQ2pGPMoZAzEtXBJh5mquvE9EijFf9MJC7q9Nut1puAmK8F7z6ysSDveETKvqqC4djtARn",
  "key4": "5mfwESrvcSJzrPGPSDMVcnTtMC13p1YBKf5xcH1NKe8QRm5psfin4uByqw29J91J6T4NSd6r9srWFAArQC26N5Ur",
  "key5": "26dWUUHx3sMSfwgknThcvjArmkE5hUTaPtCYogVJuHnXce8VP5NFfWVLcyGw9xbzJWx1ug32pUu9tcDxVqfjDMmU",
  "key6": "374nz9DmrXStmFjdSCQd5QgsFZ2RSSsqRx7G9CmXJpCXY1YKyGqtHXrmk7xiCG7M2gvJsMUjP9fSW1eQbWdKgTU2",
  "key7": "ykUZ4wA4nYbWfzZXteswuvW72fyJNLUzk1cWETmhr4VWkJ2q6qJR48BUadE2WEZ6BdLgfsiEWJQaz5nvYLw7sfb",
  "key8": "25GwN1ZgUiGXMSG3nh6rPaMFrnVcH6bt8ayKYYT3p8YgfrNrGdhggpiiiY2ft56vq4E3mDHCfuZKm5Hz7MLxQ61a",
  "key9": "MSs94RzDvfcpBdPzPEy5XTeNXnR2ABMpzktDSPfYQN1D75Q7KvqDwiZSNFq2VG1kDTtPy9MzMfvhctBPE9VjQvr",
  "key10": "4UshVSw3pcfkKCa7rG97PWnPPNKvs9KAGz44qfWHDiE8A8vbmfkr4QB6Zx8cAHmAAThdQHkT4p95G2Evzi6KKvWc",
  "key11": "rAZzsoo5GFC4TCX4JZsYbVSmpUwAY6aBDn2Q8Lauipz3Y8RsqH6bME4k3usoqXYfATM8HdqZe8xByYBk1o73eum",
  "key12": "s3YmcupvKCd4eusxk2TcB2MYiXtCiaSuCic5S5Mq3r4cQua9AcDbY7fXiXeGj6suyc7khcgczZuuC2ZTR8gwg1j",
  "key13": "2yZeprBpJYBf6k9y9iAHnZBkzJP1MAmBXp7K3LALdi4GaMsRfHxq36FyEJpAeFYfhKP5sFPo3ZhUAM8Efan8YT4Z",
  "key14": "4suzyRXBWaFTnh187MCzvsyNXd6cdCE7mteZrDuxebHB3nH2czaQwRYHKqymF5VpAkNLjJXVgRNYrLF9KuPVpEtJ",
  "key15": "5y24LAXZF4sYD1HonPH7e9v9UbBS5bHfQqewAYkfYDGT82Stg3DRJYyw8yyiEYULH36d718GWn7xSc1vzSLywCVU",
  "key16": "38T4ANWzbe3gSATjKvCBgfZAKUhn9QMvKrarCoPwNCZt5Sdeiz5K7PEpqe8XvCXrGZdSLTCa63YHUrbjsEFsFCnZ",
  "key17": "2ikmt4D7yCcn6m1JhG2s1jzmnXToQr65FKY8mCFbBrFm5qrqw1fSmwUEtaV8EucHvheVRwe99vGEpBncCsTAHdK9",
  "key18": "DELuMKQBedmUZ7gbVyBNLJRH1d5horgQehtt2Fp7tTUbmkLpeADG9P5SKLWamEown5TfmnbWnneXRtvLuiFwXeh",
  "key19": "zZ4isUvQeCkRN65Hrj2sDNy2ePMuiZyjK54c5apii1tmwPxpFvXERxvB4eqjhqgBmkEp1nUoVtmgYP6Ng7vmzb8",
  "key20": "2CSmbLeT1sZHasVRWs6r7R6NwaZywCq5nQdQ6m4BEbjGqVf8hKekrjFE2NE3v5vfpLc8m4TQxAkka8oZ5ymnwVmB",
  "key21": "2TzaZ1Rm18gWt6qiaRwyyyofEUiC8of8YZyzwEoxDAntAyeoTqavxN2G6P85Ni6Wwu1kJ2ZxFZxQAqGTBZoU5mJR",
  "key22": "5W1ngYMWVaw1i7jNULWHxHUxSGRRFLwFq1qcYbunDxAiu8FqMhXv7TSboroZYZABwgvYCyiUA2pqmT3ftR6GbWYs",
  "key23": "3wFWgb199RBTAP6tB3pF3BigMShLGPKtGxiyUQgcUFE48GyVGneBkPKFg48zJxUXkF8pNQ2AgDpzddvvU67wAEHD",
  "key24": "2degQVC7vfKyirvSWtobzmVFdZy6xFoDftX1zVjrRUoc7yhGDxjQJ5nPa8D78xgqnAP2UN5uetHc4RC6X86TKtt4",
  "key25": "3CJw3CpU1HDUYMZCAGGhvwNtit61pLKED4mGsNZLWiMT7yX4H9Kkw4uQnEKuxFUo4KS4bMXaCWHaeF9KHfSADu7h",
  "key26": "5QK7bEcDc9QsU5PTXpFYXN17vMTeSAp5mtMkNspH65hJN4GdDZ7paACMj8iak35g1ci6DaUqmBx2KWbAdwZB8aay",
  "key27": "4Ub5qvqa5jA5sz78MKKapXG8fd1wSKEWdexujvkD5sGZXGTjsyhhfLeMYb2yNER3JEs4eKoUqdamFhqCkKEiFYTu",
  "key28": "3nnF5FmwZbJ8uNct8kmVBx76iFcZaLioohEfKJ7NANwCYppkvrxsCtte9x7CXWFnbxEFZ52L9BTp995YpgWdHWEq",
  "key29": "53eBJPYjaH4duZT6NSmuTT6QtPRWT2VwoGfJ7DJtXhUzAu5vPcmX1NA6bkAC9EST6rifzngKo2ozj49vjUAPrikE",
  "key30": "x5tEPebf5Th1HbEGNRn9TznoeWUAQ3t5pRFSfYALzN64KxoRrUn3rJC3kgj8cnwRdnasFrVn7YWjLHqtUKaBkdc",
  "key31": "3diuVHEgYfNyGp3ywEbgJnG2CvuNG7y7aA6KbhwyRpvTMtUx4RbvrukGMAAzgwoWu3eMvPn8rwNqq1KF2EAEzkTY",
  "key32": "2TYTudZRkCXMx9VVt8ikuD1uEucU68LPuj5GaThJBU2q2SeY5VV8xv95g84orHgCg41D21mrDXa5c1i9uHRFZ2dP",
  "key33": "3Fg1QG8qrKrRsoD7XLHLSjDg5JX7owjCW731teEdVDDpc7nhwfqueTxb4Bwyei3f7EA9gz6EqzPoi7QAXxPRexpQ",
  "key34": "5Jkcn2CTVNGDG5kpV6G6hzuncDd4nGJR2UeMAE3hgkZ7RrenWVb7FV68T9BspAJGRVCSVQbqVvjnP9r4g7ArxFvA",
  "key35": "pXgs9JE7oxxXV2vC7vh3ktzMamWKPWS3HmE8ET2W69PN6QwipbGHkCEFML3G8frXh3LsuAkQrAy3UQsJMinvaN5",
  "key36": "4o9ZiV4rz8FnAsFR5tq7uRVMiJeTVBnrSRFhLFaEq5jdzonuvu3kuZGt9KREAMESmwfNPG9yVCkJBNE4zGFGikBf",
  "key37": "4iEAtHkSPsYDcoKyGoNiMnSC36sJLLusVH9f8y5hncSgtH84MZTxuPfDAoiwAmog8sxt1WavEm6T5ssi9f5mco3P",
  "key38": "RmqJqc7Kb7sT2dWKXWa8LdsxZb7MSecAfnJq4pc7AfGVBFt27GfeFocPpZ9muCLoLtRX6d5ptSrhro6rEA7jRhm",
  "key39": "gKte1DN28YJ7ethMTdoisyEd9tTt5fvb8NgdUVECzTYYFtZxkfqWL81ETkpHN86D2MRPP3SoKXv843zTsh92QvF",
  "key40": "5E1DxTeNihSAR85kK9DzE8G2VYqwyN3sv8sACSBSAJL9U4VGihBPy2xfjy72rYELoo3zk7S6BFddiVaVHXmbWAQX",
  "key41": "5FGUmWg7VFXe7nnTRkQGn6XRA6bwPrgK1rmiKMRgBw5LYym5K4LrBTZWtbn1DyVbXXrpXNBNCpDZgzmqrRQ2dVD9",
  "key42": "4aH5XynxtpmZAMfF2sgsXYqVEQExZMHLsT85jMAvPsBjcTk89w45BAMKFJ3XmPK8kYDC7XVviUg6gfA8wRFDijba",
  "key43": "S6NrwDJ8HacWfnAapBcfhdN97sjYMyR1fwtsugUp5H2aVYGVS3wsaYXkhzcTCeJeQLPz4pYrzNW2pdxmkgPDQhv",
  "key44": "2FpVFHpWBBwizBk1sPdmd1x7Mm3UvvcQ7MJhLc6HyBkXeb19FkNj5P4EPtrjZDXLTwDkJJnqJsTYRmo5XBz1oKeW",
  "key45": "57FBQeCHHbusByfg2CjvLndYyL1WCciRpp1W9rEaGyyA4HDEdJZg3HutXYUb69oxFCJY3mvF2cKfHMCqPNS6vHG5"
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
