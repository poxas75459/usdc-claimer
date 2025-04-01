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
    "21gb6KFgwo8qYzBMg1HYxyRr72DrL5ZgUQRkVMGp8ortZKUvciqjbiEK3gTMvp2y4Cv7UsGWUmTK87ZHmoeQxZdj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "btfgPb1DL4EJqwtjdVxer6URzSgvctH9CZxE9oJAYtcfyaqpAvdT2Ufdvkzbw3NLTMCdZkQD5XrhBzqGpYvj4HK",
  "key1": "56fNw4jfjDPpayh67Hz5ZVaEhvjniY6cs5suMGzHedn9bnTNEBm6rJixoHBo16GHeVmuo3heJtRgni4EYkCeaVjP",
  "key2": "3HviY6wHALMGC5prY97py6Sfb4Zngx3fahNm6MoxpCVMUu5RnSKkcaYbBcAnxrTkZ3gWxsf1w4NEEmQPsHa9U6B6",
  "key3": "2aWCfmkQpPrBJgfZQi1pgfoUqCFfU7Fgo11NFK2HpUHUPKCxmk2y5P5XEeCiqokEsV3BeziuBPLyhZL56BZYUg5y",
  "key4": "5d6uygU9ogg8XrW6tPTNij2KRAzYenqBBxP51SUjFbsjxFkVyNsYE3TS25EFzrzh5XwpMwSD1EjAF1Kdwxu1FZPY",
  "key5": "4ABck2FcApY11LR8sQFhXm1vgoWoCy36YnHK5BB1dLJjDw2MBujUtg1xgXMmS3wJbFnwWH9LtCbdUNuQGjqnYrB1",
  "key6": "3PthwstRTopgGudmHBS7kfBt2McnDvT8cM7eKFuyxTsE1FiN3i2Svj4uSBuuy1cVj47PkytXEuzmkVLgfBPdx1QY",
  "key7": "2hJjsSpyk71yzcCE9vWvoqpGxp5fKiAP19n4mXgcFSXZTZJZNpygrCitTE6Qq241ruh89SntMGQSmVuXfRh2F4Fs",
  "key8": "2SeM3JN6bkXXhekYkDX9c9q6ftVErUCYSwfaTsn4GR1nZYZtXSuprMeReGNDm6AGJcRsEstyidG3DLFfmY2mYqaM",
  "key9": "2425WqcufKSh1kgU7DeaRBReF9msX3Nweq5DomYEkweJc8p43nEUEGVRJj139mCLTpeZHefbAG27ZeoJiLDVhUcL",
  "key10": "4dzaccXHbvAPtDUys17UcgN4LjWEy32BQgvTny9AEt7bs8tyaoutkzsMhyQcBQ2roFswqU3fAkKqLUVycGmQDzak",
  "key11": "5CLq7UYdURBfK2HyxZ3NiQFVgw3yvRsXsPzRhMH1bNx579ZAWLpdk19yrvQrVrkAtnAS1HW2pEgAuizTFfywA643",
  "key12": "5yGEHwKrusdXqGUJFH9mTTxxXXc2TqpeaiAPCMhXmkbraJ8st14DQPZ7ar9jWT4um4cBTLSkP52GZNrcsvkE9Xp5",
  "key13": "5iSrMtK47yoAhsiAPuoTARV1Mvx29bztDDFgqCKTUwoKPRQqQVwxKSuBCbY338EXerTmbVrvUev49a3LwesRXBrC",
  "key14": "38Wk5JezdEMhpwpTGPHKRcfWtUJVAa7VuL4CMMy7LqR5N1RQjrwazQxBrgqt9vZfkECNzaJBLpjHmKApcQLQcLUR",
  "key15": "4UB4rAon1VTYmEViPYUjs3627yUMfWs7rYLDQafLrSuXT2EAW23XwqafQRx1jgCEdmNYKQRDNajGDDo3qf6ApMao",
  "key16": "UVczzgKZtsuUmUKA4xzo98pLfnr2NCUgwLK7oB7bRLUqCRoCyrL2aLDyzZV8so8qDiqac2Q2wy3fkL4aGfCqDce",
  "key17": "F6FVhotXS4LXiPzm5NUmnPKSM4WqL3Hrs9Mc45bzn33JsaYHxgCUqgWwW6tA3F1aqLdAsmUJyiqeFmwc4hgzoaN",
  "key18": "4SYa7tbuTdTLcCtrLC42x74zbdnDtyGUzNyteziTrxs55VNsFGAeSamh71YBcjYPfpS9ANgdibiZinK6yT4Qgcb3",
  "key19": "3Q2zUsixachRTkycqFBfCypjCDNQqguSrT4pd7XucaeHfYxRuTfqgTag9hMF8CNMQvnT1oBs4cooUjtAvDLPKX8c",
  "key20": "4UkutgEmS4gNqjTeUHvZB7aG2dxqJLwaQiGExGzEiPLS87yyiQepoMz7q1JV1w2op9hSZ3CmQKQtyfpJiheqteGh",
  "key21": "3CKhzT4yFmbe2cRqPA4UymbaZHhb4JPKe5eQSy7LTQNGhfCYqaRkiA5pFQbkg392fWfBn6Q9fUF6bDek9tv57k7h",
  "key22": "wa3gFS6gviykajXiDffq4Vi3RjWGAgqXBovqaQYBysz2Fcu3cjrSLkkka4USffaH3TTDqRnjrp2sB7YBeQEj87h",
  "key23": "BTWCNKeoTedx8sQ4jA1dqFTeVd3Uc4H99Zu8mR5hwaNiceVt93pGMTXYMPaYL1SY7GodVkcKnBUge2JtitUVLTS",
  "key24": "3sevacyuXTRMgmpLajJPuQqRhUGxm3P7eYePQz3uA1fR6B9aR3MbARMjuaXBPj2MS6CaYSXqkwPLWsixWdZ2TfR2",
  "key25": "L8Xu21BLbtNLQRqMhGDDQ7JtBoM3xdsqB9ZCiVWK68LqYU9SqJXQbuWjSUh6TafjRQtCRLKgtc9tKfach7QMPRG",
  "key26": "2d8zgxU2niqekXFrLcUkDUYwDFFQ51xoc6z4URm2VPCym2wY6Pu6MNPor7pH3oUm25Y8hbVT9vEPFbgX5aJx3wsT",
  "key27": "5rMumeck5BXHEswsSB2F12FWT3gD4FXjwhMjUzKKo3t8PTCfcWVk5BqznkAoDpyv34hTuUm1U59kb4R8Y6aad8hN",
  "key28": "cTtH5JXCgMk6p1Aw2SdZdRb1PzceAqtnPgL7aQEsKfMN58rAAZLWJEaR4J4DyvnJiV5YdqJ27zuAQ4S15KbLR8G",
  "key29": "SjQr3kWbvvvcrceJvcaXQVynhi693nxXQHbLga5ghsDwh5zHBBTCp85yMetLsjvkrsQ44R3VTBGoykLoaGwKNaS",
  "key30": "5SBZWiy8QQ7tXGGVZVxXq5ESaM5aRZdx3gts8ua1ya2b8i1uS7M3JJgQDpuiDxuzKp8bvS8M1ouEp4GYSmZxnVE4",
  "key31": "4HPLsyJA7uG39XJRgDTGsnmo4mYYQKF7asJVyaKiQtQ8tWZUh1E5b4Gmubi4AmVGoCebzhbpQPM4CqJkLoFL2goh",
  "key32": "4ssjeSNr3G9BheC2mw8sUkHwbxiCwfAD7jRZBBiuH22ss3ZjPTKDUtJedyuPrDj5GtKjS2289XDnMuEjy2i4RVRx",
  "key33": "4kMichtTA2BN9QdLY3gnbutcVDixQioNj62E1uZwFK1D7F2BwWbmsqSK5TcUQptzNyepVPzQNYKrWVB39CKZR23F",
  "key34": "5TioiE9GUSc56sLuTkso5ANr2PJoP7HKUZXKxN6LssX5qFDDK9kLQMPyHC3g8WESnNjKniBGo4tGgZpYGsZejBoA",
  "key35": "5KeXMKVfPbE9Y5PUq1pzYuCsmZo2iHJcs2n4hyX4yP8aV2KuW9hTpBWBdZ6Abim9MBZbTmgCmLhBQBbrf8mV1D7Z",
  "key36": "23KchkoLW5DzWET8JjsADJZ5SDx9QFDWqWprVbS5Zi57ssjhrQDPdGiZE8EzdBTbiryb7Gv3tyheNtD7GJmnYia6",
  "key37": "3VYUhqSmx4h82qiw11jpLmQLqoogG7KKfqmSdr2Ajq3XedQNDtDVDqJpFCmtSE4EmhpyQ4HmcrAJ2roxv5YXW7Pm",
  "key38": "4gLWPMNDAoZ4ZByYHqvMAMdufmkku252CU1T9oPfvpAMn9e4tou993pvPuGhXY8uGZjfAyCXvbNXp32iQRddArNQ",
  "key39": "2sVncRbyLBprYcxnNkXmY8GiUoD7sNYTH1uwbAfMMEWFXMDKVpKDAMx8awfvfk3i1JH4kBc7v49PxfcmD6LZpwDQ",
  "key40": "2ymaZyvmfJp1vL7mWAsvfB7ExfPHPAbDqVYZP6ohGct5PyXvx4kD3i7BiMWhEHn4ABacDazJenceuKyyA4kmUr52",
  "key41": "D7yJRDHQhyeuzqoLtMTsL2RsMKfaxp8g7RxobsG3tP7827x5DD9iKoojNfSu88Rjuy8fiUAduKgvrJTRaACVwk9",
  "key42": "mgqyqmRFC4hxpeS4ct6krDc1uLi8jWFGKsQbi8hAs77rPt7b4JURZzDCUjr5BZApuZjbGk5pXVEPzYJi1aF52jx",
  "key43": "4vrxFSSWdz1FN2YBL8mc7Gzz57ZQsmsvK3CLpSNbEfnCZkriyUSMVkzFXXbK1iJ4iUFjAsxoj11bDT1q3mQjikRy"
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
