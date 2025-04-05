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
    "3NJ2XNsAPC3J5eSmwD3SkfdZseKtX8fcdiApVVJBHdnvSKUe5uwa63QKAtzqoEjVNYR83NGbcrx6E9TPubXRTDaK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nnW4GjCoEvYhRC7VYB2sTiASJ2NUsaEwVkpoBE2vgaJFmPYq1b4ZAvb8NL4rM89E3benqmhrKCQeq6wWU9rWcdu",
  "key1": "5GgZTPqfrSD2pFFX7z885X1osmvEMEXSPewXsss77GYZxsynp4Bt84BFMt4CkaVeZv1xtmTgwAG1xFayPAKtYUJp",
  "key2": "2E4GgWABct6TAbWTiVWg5HqwmwGLVYEUBX5x5dWJdg18d6rLvKoXdDArgGt3EVjh3T7SaRVfGHTTcPCKxBAfYmcz",
  "key3": "5SVAHtsMCLz565H4Nhcf3wXKUAkQFeZwRYhhbNvWztheY4W788ToUMBUUDnm5cWpBBXRPdVTvm142yDTPvJTcahs",
  "key4": "81GStD5HHRXyFH67HeFsVgTDGyGPBEQxYsAYP8TBcpCuC2AApPTq3Zniv9zdcwyNVDYfQaMcMPsEF88L1cqzJU4",
  "key5": "2hkXhHUCkFVmN1FV5XnN55kkPbitZ2Ka6Egxss1Vo5UXiEVwdSiLxkGk9HZzeWygunsCdUobLBJsYJaFhK17qRrE",
  "key6": "53bTbk94TDSkDx5vwZro9U6kRzdxRkUzr8UjxTDGjfVVrGqxBYCxpMYGyDvEHhB5NjmaZpDVFZU1s1w3n7ocsq6a",
  "key7": "28EnEmD3WhQD9czv5nivGNr3jcjzLLHm1BZKWQgpv3qGs6cRA1Gid5PFxBAwinc17yHSzmrgQAH6q9Gd37FrmWRs",
  "key8": "mA8VfxGKfMqyNXaha8FpQ7zWM5BoithZTevNNM1q2nBRdLRqEzMNmXBvxT3Zd2u5c6kZ1g7EH4Vjr1vzyv6sVv7",
  "key9": "cdkgFx89u3nrMcDaeuWai5Px1sWjDMTUbwszrzN3hxb5Zw6wGr5qpr43cFEaLoES8ZDjnqdXMM54BhZehE5rxKq",
  "key10": "5JnW6YJcJLUzkRM9dUjnLbGeLafK8dCw9JND6aPq5Q4ZajjrX8b1dqXwYMW6YUdyToqNjLnacXWrPknkiHhN3rDj",
  "key11": "SWZ1Cio3CLykz2ByEx1JRG19Hz1E1G1qDMdLHUr6dfx9D9mBSxyG7SkyDFYsM6WQVNwY8wUUeh9xKJ9BdRb6HF5",
  "key12": "4vdMjtLCbVE1sxsBVbFpZqBxZQWrcRZjAQuBF6p5dmaYigmSFxr6Dfi1mGpayaah8desn3FjFa4RnhePyP6zWa8K",
  "key13": "4h5ThiBFFcQF2prAcLCGRgoekrmhgQ75KTx1Q5YyFc6B64p6xWeFLPdD4pcbpb8qNHtg4zP71LU6w1shzoYBxkhF",
  "key14": "9iKfFUqxvp7ksfrMWRUirRwfssZQ1AKURqw3nzeaoSuRnyuEyXFQnN9d6cNkSmewFmWyZeWFBrpncY9Ry3bw4Vc",
  "key15": "3QeGkd8dkqq3WMEXfmbUWm6Mo1TAV73moQrJemZudCyqXork6hBsMKLTXQHMomgya4AcQZEm9nEuhy7TUZXZoCSZ",
  "key16": "39AKjAxyMKzLiy2quT91a39JL9DN7vwUjzLYMuvv42eQKq7QQ1j6RhrJ7GkSRp3ExN2oBXFQ9ayTyEcqqBUAYkAe",
  "key17": "4doRbCaDDigAdwe2CAEgqSdHWXUJNtfSgHrd4K4xXp4T11xu7n7XEQP8HCUP9gko69yyzAPEguLmugHC3dVSv9gT",
  "key18": "3D1Amdg3UtoMEbRKfqx18BwsdBNMDDJG21gGWgF8zqycT7eZifE2YYXyvS6pUJaMXCzUhHaRqwYEBfN5mTvM74or",
  "key19": "62x3ENtJrJhVSFnbiwR81nXGQ1qJMftf6FMTYhTFeAxb5nkJiZb3MALgRxFuqXrV687bXxhHp6kFK1gi5P7hQV1X",
  "key20": "CfiyEymSWqGWkPjuZqhwhQnuFu7Nc6w7XYvzzRfjoayobp73iUZ9YsChC8qZPAt8VU3kF4KJnJaoQFqiQWKUVbJ",
  "key21": "51CfksCL5ymEyPyPtqnPP57yhDRiqz3xu5edy6hWLkUQWqALCLXhFDnUKsPyrhD4iYpXgBgyc78aiTV9fqy48hV1",
  "key22": "5GNV9EvekQjvqqxMm1EasQvcUa6iXDxnf5CuCMxCfk71ipRRi9UAKuEGiy2c2my1ia8shEf7qXHYdLdd2ZrrwZo7",
  "key23": "4crQ43gpvC2MXQE9Ly9UgwdzAiYBoK25nZQ7upUAfSKyvR6PJ3H7F6SQcxNp9CbA6g4kEGFXWBPwJdRnjri5AxMt",
  "key24": "2QBeb8caWzUCTHFjosMnVCfuvQxaJwFtYYYEpZKTQWjrUg4oK3ZwUg4i2LDKns3d6DkZPf4medHFisrJ6VbnhfEQ",
  "key25": "2zcLbk5e3Ueja4d7Si1zrFP6143hZLFDZj99pC5SyByr7aBLfpSCtPegvEnaNCxWHfXi924CWPZFpvU1mMwERt2X",
  "key26": "5Mmi7kHaebrcNUEKjdpzce4YXtdg7P7pUc1RAwdpfZAQhjpUkpHiZwGaa4mbA75nqj2pwDHxKiGNVmHrmzHvpwRc",
  "key27": "38DFqNvT5mYU2mhWx6Wz8riJtdQvNehRoPDfJXeK5hu4zXHHYSWLTrZUhPc23ap9TzLXBftKvBKzLkJC3X1enaJe",
  "key28": "3MLAWFGuxHLUQ2mwC56YxTmYKnBgM5UUnQmAZ9Hi3aeRfZ6dwT2E5KrGBUJdCDELh3osLME8ZX7sPV2kLwoY1uV2",
  "key29": "3fQcn4McNvCtyus7cnEuXjA3ksTaPtcTCdXDXDvR7q1pAEoBWPggWgDW1zUaQYAv4RDtpkEtHXD9UtfpJM3KSQyF",
  "key30": "5vNGz2sNC3GJecDQFh2SijQRvG3AiF2xUz2aaR4W9nFGvvY8Ttfi712znALXdCvCeJgBJuidtey5wfcJ4SKavUQa",
  "key31": "5xoEu9JRrqPYveVtJKs73TDU8gmuVExmkTKYujSP7KTrvjxnvq2kZcDKHgEL47LfDNVCxbJefWyQAx3T5yYHQLMq",
  "key32": "4oFRnatMejFoqFm3cQ1wUek1NUq7bnrYoLpN73p9j4DNJsa9pjkygTygdcjZDVEerMDokcGRtvSFeps4ZiM9DsyF",
  "key33": "3E1YpZCUd8autYeEeMdzNyGZSsa5hjK1o3mHsrB2AbVxmuAQkHceDfG4dnSE4AZRt8bYffjhzrU5sK7o9fPQEGR8",
  "key34": "5BDs7nCPuuaTK54XReSBMKjPWJfmXg5ARYU3Cy7LprNncSL1mMvQctDbzkPgwktP74FtksAMWFSVY2TNrCfCcWbv",
  "key35": "4THNMFTGAeSxrZFXnSE3kuQiF5WppU3V1vpQsuAL7S2v7H8dCG4pLvACdqTwxt7vD942hKyh22nunQJWtW1XYW9n",
  "key36": "2BKMii8P7CmXaiGbTf5wzvXyDnS79AgBrKQUwGiub3BjbExpe3GmQUUfCGx6LpaByb4kptfs9SaxU4Jk9ib9ZFZa",
  "key37": "61saYBiJZxyLa3X8mvQHAibNMzTCKoN44BnFWmApTQKfhLVrE76tKBHwbh9Bhmdbej12GfBq6gbafygwQMHSaQQ9",
  "key38": "2EkiUY9A1Zj2JRqtzjd2m7a8RdBoUwAMudyf3YWJJQubX3UsrU5YPV4xUHXB9FMDsJFrTTQJeP25QEwJXdPCcSsU",
  "key39": "3jFe5WwHdi5TnNLpSyqwb4vAotMEotjtbDimGWsGeb7uUrcJra3DVDDdzb7obrpM53Txi34UuTV6tfx5xiND5neK",
  "key40": "aL383piRg3ePNVLf3uN9LrThsDKiheb3ZQbE23cgHt1k18SYQaDt3R1LvHKtSFahH1UfnKxu9EGEb4Byq7gpyLY",
  "key41": "Lw3UUCHBnZcAkhcNgfiUrbvZtmiTniSYHsQn4Zk3P9di9xqgEeFS3RckxRHEmdNgw9Ua7wY17AdtW5JLKKiTeqo",
  "key42": "3ywMDc7zUZftkCwTTU4jWexocE25A6kXBwMviTUfe1rTxYeQue4T5UEqfCUobqDfR1uSB3d2rjvWoviHXoXbPCPr",
  "key43": "5Ms4uFD14hExaojaxXstn8ozyqiqCNjgyDfgCBGgWLxLXmxnH9Q8wrEjuYwduorisoWLHy15NNsyNdJLLXv9qCvN",
  "key44": "5LgYmoTHjvLoqki2zLR5SzpmKSCVR2XtqGzuqPqhokEHWyxgwUXAtrmiutymwnMAufVMtr3QC4C9rDxaJ3s9iidW"
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
