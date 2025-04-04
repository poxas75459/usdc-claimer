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
    "7qafeQibMvbTkb3NGV3aD7nWYVKgMCKoHAhGDrYanZ7osxXxfaopSXE2j4NCB3dean9PThDP1FURSBGX73TaDJc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YPsGKrqaGuA73FZ1zyQsTgFmFgFLxqwh7WFDpARH9aajea3WmQPAkbHUh6uCx4QEp4DQxNNRWxnmb5VGDH2Kosn",
  "key1": "5A1X5eAmp1f3nWx6HRbPZtJ8kUVdT1bVFdpCqo9pNhK5YVeLJFmEyM7r3ePggCx1mrPVB7JQwnVfQheWgWSMsv9A",
  "key2": "2wKJUAt8yhTsSChPvnD9X4tkcE15X4rZ5rVabYZ47dwS4Ai4q5SFKt6S4vHKSik9H7QhUQKo7ykggGie3FcBMh4r",
  "key3": "DXPFDkoDrHu83VBsRF2JnDtkDYpEq8K5zpaezevdR1vJJVSSpt7RJDHEpzbXNzwPnbvijZxtpcSdzVBUWuYsFwD",
  "key4": "8WXwgec4SJWXRSBvxSm8nBJM26GnwmhVcVYgkuCwgEcHjhAje3BsdW7A2dcQiLv4D7MZtMZKCrDBMFUNL18dQL3",
  "key5": "4cTuuDsXETUkeAX9Bf6G4dGHFqfH3aXeXWJ1N5Smkr7BnbQhG33q7wH8n2hwsicYpyttGtK1ToqK3QprzoMRjs8T",
  "key6": "jxQVoqtBuGxEvV3zn3vYKvE2icwSEZpcBxhu88wagXN9qPEv33JA62xkAijfDh124yuqMWCQXHTfKjGo35ZgL2P",
  "key7": "3sjxXa5gx1SEbyGBXA7HaL3hMBR3p5QNKQep2iebZypVEpAuCssBhsok9j6KL5JsrHmxb5XYLG5HXa2mNAntPmDd",
  "key8": "2RtrCT28q9oPrtppmBt1G3YZHMvGuyBKXEE1TAPs1fQ9uvoQpoXsSGU7XGcNViWHW8FEFTS2mpdeXax9A3JC7bRD",
  "key9": "4r3R4yBHtbioGiVUPJAc8bwCjq7kMTNKHrg7HFu99J5FtmkuPwE5jkczaYUZ4gaV6YBAdNAJE5ohNiScTdH9qDVU",
  "key10": "ZgfjmznvRYKXs8obQot11oQdhUUxBscFycQpX1Hs7qi1nJNkk9ctP3efzSGor3TEuRgYqmKHEKhEv95dfksTVVU",
  "key11": "5Y6kFWb1MdcPDNTuYGVgHLNkC9YjQMvwspeq7wFz1yV1URWLzKZx4ZbCe5cTw5KPTxtjTUayrBv7e3GBoiPqDZi2",
  "key12": "3ygW4eC6ijGDFB2ijb8PWrwJbkbyC7oBjCNKxLDRg66mLKfzymwqaLLo29cfACZZenn8y6p8itoC6DdcXNrC7kyp",
  "key13": "432X6nsqofhusYNZL7mVc1MAqUdjCQrcznKRFQLHyxnRCTTqFn5g8cBXjws5FkbpQMcVpjsBQBEQovprYmbnLryh",
  "key14": "2sSr3HRXgLR8rMF41RCcBkxcYRiPuXpY3YcNeZTFADyEDNqBzubj5hrjAaRjakptxxDHmot1XomedbXWG3Wa6BRb",
  "key15": "2iXzjMXgRa2v6b3cemp5218sWspqFXpnjdKGfQNeDHFPGESo3jk2L3yvfFSiydWB13FZ8x64fEyffLFMKNcWrZhq",
  "key16": "4gKeGfWXAysiP7wWH7WLJJfyL2tUp5zpfbmtJuBWFKaZ1cRj21uDFd7GGDGs8HiTNw812fkMNk3enYUM7GuVEm8t",
  "key17": "YfWoTaNU6Rcwf6GrZ9b3RgXHvryWWbRhuYcoG3xCgtPKV77JVwwUEwZEAPEvoq5yvLVFRDYw11bQGkUgzzdnDTy",
  "key18": "4gyYKwJ4cehhJf45qKwacUiAw2ffEGwQ6Mv823F5ocRHNLgaQFtmGAswyCNG1mjZGAPxj9CtBfKBaPQfjqygQ5As",
  "key19": "3DmETu694iJjUTGXYjECUAUdG6WmViH5kHXPBFraNxhh4s3WU1838zFctweavoYmazK5uX9jGqAH1aBuhDQuNEaS",
  "key20": "64AaeVMdm9zPAdX2h1RAwT5RsXHHiMS9tMGL4fwp6R16yJc6HMq5uYaYPgR4DTjdgBMrXYNEjs6pHdHHUCAVz7hk",
  "key21": "5gSSAAUjMfYBtD8StJ4ZT8FGzb8bpBEJhLpQ3wXQk4LUPAYybSPmY3g1KGANCkCQvrnt9f7cgpjicuXAZavMvxqv",
  "key22": "4XcuagTHQtcopK21J9iP7pBAsxKKEBfxzAA4SkPeYK9Gf6yRTDixz9fFz99j9QYuHzpdpsGLYjkn7YtyZinmDbNa",
  "key23": "mDAJPtqAJdzokyWeZXSbVG1XmnjJYyxqo18js1TAgxYmE6DEAaWhfoXbtk6VEsNd2z9BnRX8qkGSNRZzKfjcTBV",
  "key24": "5bg2tZpRG6oZNaVALSQHPUwSJxL7SRjCj85ErAmBHX2htYjbvRCdvENH4zuhdvpSsPyVKKKSiwyZWLRr34CAwns9",
  "key25": "2afHQkvqoEowWrVh58PyTmwkLHVCNVcBonDJiWEZLuGqhWDB1aRgx4DaxWrWJDJGysfoPZyz86xg7DZSjiN9EbkA",
  "key26": "5unwgRcz8avCCQSLRZPyyMGkRguDpAJ1dobwkeAEfMo2oWfx52QQS92xQYiEeqYfXorokmMc3JmebG49MbxUFa6b",
  "key27": "5qBuTRUU2M8WdMa6gXYufnpFZaXRUCNR1LtNwUF2X5GtvoRgppFWZtMWcdsxkDcN92CC77zwVFXmS4xV7WbCFLTG",
  "key28": "3STJCjWDQZUhLeAiRUQdmfE1CCmMDRnuVvufpMbjCSrH54WKcu7KKMuBhCF9RnpkwNrHAiWByU3kFpgDhnRbRrHb",
  "key29": "58uVReGKT5bpoWRkBmR9LyBru85nUeTSvc4WfCK3fj1v1KguBw3qr3jvKuCfuovkK62rELXNje7tbYyZTPMTCueb",
  "key30": "4z9Wwx9qr9DdcrvEwG8KDfHghMJ5Lk6WiQnHLGrenJNcbVPPZKk6iEDa84fYpAeMk9EtZDqYfXxrrw6mrAVZbpPy",
  "key31": "2vtRPHETUgmU19wntDHdLfdgi14DP2LbrzF5LqBsXkuKoaoPdSAYj1pJX14KjiuLJMakaMrSnqYnGbycTnAi9mhs",
  "key32": "tCvBA7Gvno7xS8PuvsYz4aWDmKwVw7BWzDDa3axYvsMhAWjhzgU5fi7unGw6RMm82ginSEWjiJ1CZUPrNe8yEiB",
  "key33": "3j5mb4ykB4dX3G2r66CHbqZc35PJVGCJtSq43APGVFJ8C2PLnn1w52VjvCQVfViwGbBH9Yp2fEXmgKvPkacnmYHX"
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
