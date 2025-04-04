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
    "3yCVyH9ad4ysTbKQGStb7Qt8Mx884fmAiUvriR7k41kDhey3fpeCjE5TAK5Zm7y2KtATWvMUckH8joCa2wVYjDeR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ALjwZSPKToUTrU6n1Jcg11xm86WKCvqoU3ebLG1CTu72gjtZoy49mfyPeWuZYkkhrSEq8mw34XpZByss1gDvosi",
  "key1": "5Xfbjfcc4dEfJLakN1czF7KTS3Ck9kq3K7c7Jfio1QVQg7CWD4PAbNuoMg8vcehiKznH2cW7u44aMM2vn48LECdR",
  "key2": "3Sj72UVY85C2oqFnvPSSh7JyiiXmXXC2x7hnbPd9CYFjxu4JbhaGo2Esk1XiWt1aEXs8XEhu62GAsc75mrcJX2nL",
  "key3": "4GFYnndAMp744b492uPDC6fk2ZLjpeqeBB3PrgYMmbzpAUVnq7w1z1CKvac7S9ukwssD94xktRgtH574MnXH6b4a",
  "key4": "efoY6uNLZKdFV8HnkBoxzPhENCkERXcP31xsbTNBYa48Pkau2nmiwbdcWCWFPxf8VFogkpEnmPyGeE4ei5rWiR2",
  "key5": "4AH4xHiVRVundFSohBys3tkr9k5XDEJUCsJTv3U1qqzuSTx9FRCrcmZPDdViaSQ4U1HPcoYg9qmUxehD57cVhfCy",
  "key6": "4vzvKBjR1BS1M24RVSpGAuc2SYL55fZPXoAP7RZu2e3HiaiRdtc8meXtFA1EBomn1LMf6UMFWzyoTMz5xj4LGzz4",
  "key7": "2jmZFxRMrpUvubLNuerXRzA33of13zUNFNHiTUT2ZSfMVshadSYfJ2YM6Jkf8TF8jN2uQHmDaEzpGpi9AVZA2BN1",
  "key8": "2e75Jyx2HHSKFDeGYH5KbFRhUWLL2Nj7XvhuapW9NHBG2fv6SgjJEE33dsWwVUShwiHuF9oVmW3Fse3VvsTr6LBH",
  "key9": "3zmaEMcpmYo9GDv9PHK3GaRn51Y1Hfan4dbuDzdV1k5rebdea7CfqwwPxVKLGpwjfvPmGYhFTBH2hUxqGTDBpeTs",
  "key10": "536gmLL2tBRfXnerWK8yexFgTFftXNQrf1SjTXkudW1bRk78XDd7yTaA9Tnz5z8D5mnLX2SYAhUJSWw1mUNDgiBr",
  "key11": "Gr4qR7a5DoRZhorNhVoe6Wnf52B3DtciudM4oVCXUUzt6b5bQd2Fj7MA51UQjDaLAnPg4bE7mMKyaXC3R9sHpcZ",
  "key12": "5g8smLbrM6baT83cofVgjm6gAi4Kmoxp2RpEFsQrHitJW9xcw2W3htN4zpwsbNj9V1mbLv5bgZ7nZG3QPDVZdri9",
  "key13": "4Gj5yaRHzxfrbM1apDz655DJCQsLRHDTvBRMkjL5NfzS7ECZT6ziUVzS9m8GNRfCyp2MLiqFAZ7iWaxoAoYeCEGB",
  "key14": "evBQQVb1SXqxQb54pdvKBtZgjMF5A84vDmHeJXyGLh4RfJtXWCefK8WDBqri6w1azzE9VRLuKukiEm1Q4S3sF9d",
  "key15": "2qBa3U1yHoS4bZ9vcpojA899csdJWiQzB1vRNB31FieZXS9XVTk7w4YZZrtTJiEeX4DnGQk4gpPwTHTi7bQfgbjA",
  "key16": "53pgMSJioc8FK5o7UYq5ycHpWVyFDLZynFDFJiVZXPzq2Gz7B9jskVez9zA4iFVcaruaJAeNx3prAA8vEPGDo2MH",
  "key17": "2Qs6L6yuizjZBNXUUPrRtABmj4ge8ybZmpFKcHMGD76MRNyEB9SjtEATjffFJ2tfr3nEoqJ1kDLy8d5HAmtCzCqc",
  "key18": "D29P8f7KN5h6FYF3KpommywnHfkNfMYvqJYPLpLsGvRgBhBiAkJFZHwZD6Wp2BTmrHMNUYEPP6pcCErQwMzAf2p",
  "key19": "5e3987pB6Y7LLAjS5zhCbjDZXQ31dYrXLWvScFLUmsRu5EdCG3nw2hywk86bFptdXbxet3wAXFpR6jkgSPZgEwfa",
  "key20": "5i1HkEtxEE2LFHiSDpHHaCB72fqBRAT9QvdNCyKr2YAGPz2tHoPcVkVxrQCExNMGvvC1k5JnFbNeZ2bU645x2b2",
  "key21": "4FLbqfdAzwwkGmAHaeKUkbskmH5TTDCp53BUJau2MYSnSzeYtqx3Hau1qPgdEqkGqY5M4FJYS4QcAQW1me5Gtqu9",
  "key22": "2HRYSurjGUUSoN6Wxm7ADzesZkN8FLktDLk6fbuYcc3qVYbNTjaBckNQNcopDu9MTiwBgRaoVV5EtXTWwMajFDnr",
  "key23": "2Sjsj3ddUqJKEd5K6Me3cjRenRhEPTxPhSnWVQJTB7yNeTLMNYmMqYpwgNa1zFn8gtwYPSARL17UiFTf4c4WMzDj",
  "key24": "3MCexb9jwCREq3P9PYs5fNCLkpbCiuLdffFv7gmUz2wwU4Ap1w4rFiSJRCUfhxWqzA9nLDAxSatfqYSjzkw3kRbe",
  "key25": "34BEzbK7pCbQqRueFf2RWJfe3RTe21cZpEbVeB7ZAo7LFjRrKc4Q7xsAcNYMHmarYBn5Uj6MSbBjTPBXT51ZHz4W",
  "key26": "4kPWQKkjpLNTjiXPJ2TC8oxwms1PN7Yo8d3HK16rczBtxcdFechE7tLHHV8UhR3476TaMEXgyqoojzfy6bxx4V4m",
  "key27": "4F8hMaXP33LxRuw8GzVRx33jYixzbgCoLfZtAsxwtwqHt4pQTgQHtX851SuGAFHLnXRpKPaGGQ6aPBwaz9dP4LeN",
  "key28": "NYXM88SoB7sf6ACrsgLfNaqMaa15McxFoSAncez4AcDwbfnwWJvkA2ZYzgABt9rYA7tKvNxHf91b8BiwcGrgJD6",
  "key29": "3ZegTSswKHCb4jYbbGsxJoW7FnpoKMaBF4ndtNAMPA3111TAn9ECwsMdmx4GY1CxeE4gC4zvLCo52rJATkhiuRbU",
  "key30": "2n2trLqW4ijNcEBUpDi4m4thrGA2CTxYkLouKot81QmuaKh3KLis8QY5F5gwLxukuWReV9TnLKu9HGQkEyeffyPR",
  "key31": "q8WkXQtkbz7xFstqtT2QwXzDRx8XJzKHRhovMc3HjpJxfmA5cZe8v43abceZFm5ec25Jz49s5fyx3BXJmpV1wRF",
  "key32": "j6BQtzoHk24SKqb8g4UDdMiFf7xcaYxTntoUmyF2FzaPxgv3k4fiHsPEt6KvwYkMzh3YFUEP2ynBZMA6S83fsYG",
  "key33": "YxHZaNqdRKyUy2XJTDuKWHifcK2CH9TmhSgo37bRX2UZxxB8HnMPXLtM8FF6VRK6LvAVRBhsuq2ac9zUKEPge7D",
  "key34": "GEc3DdKZxDzP1Psx3p3A11S8uu8P5fcGLnd7xEgXXa6aDWDpVHMswRBBUF1Pj62g6aTgAUwynxA2e2SRUyqPwkd",
  "key35": "4Wrim33KT8vMvz44SKcQg8SfoGPpqXocZZuyRzg4r1tiWx1EabfXrfjKMfYSkYBun9SMTZU35RJnvpjVtWjoinoQ",
  "key36": "5Fp8HW3hY4zkvwMZs43hT5FVkZBA21ssecjxUZ3JyFx1vdP6zeyFtv98vrQZ65514ntQX9piQkbRGHedFX5AVjzf",
  "key37": "5ey1uDxzruVe9aiejcjUDBVdqWzCNa5jJjVH5DbS5YUMZahKThrvqdYk74jYvLPN9wytXtg8ruYJxeSkWegvojCi",
  "key38": "5cFZRWHtuxg57NxQtNGv3CFxP4Y4TE3SfSSmetoVFD3VxCn7brdeXTQkWPVhWJ7R6mBDTCC4yeix6cKLLGju9N2b",
  "key39": "4bDeaTJMu2oS5qWtp4R45SSPuj3BBQKm1xYTpd4RFwspEvFaVP5Wy2sKZ3VU2QrcRGYQ9YTrqiX2EnAAMb7k8LJm",
  "key40": "4VoiyjNjdJobncMNe6v4voWfAriURaheY2gBiRvH8yCTxSA9J6Gdgy4vCPmdPKuDBwFCCNHwA2bTBhuRXmM7T2Qj",
  "key41": "4TaTAzY6FGoFFXrN3rPV5H3qUGMfayEdHojpzqSW8E7PBpy5Sq26tiU5b3oHTmCj6BtQKVVwDj5t7LNkdMjXg5Cw",
  "key42": "5Kvgm1qMgWkGL75FH6PkNsicxpGVyJDcMBNFAQmHjFWbmJJWEfMsmp2wiJyfV2YdF2nGNKrfgLU45jNRxLevw6jZ",
  "key43": "2txnThnKa75NZwpsmPALB7GB53zcGW9p3eFe3nEqNJHJ9BsPksw5qiP9hndQMDNKzmQnQqtqcdzgSUSUDg2Kjj1d"
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
