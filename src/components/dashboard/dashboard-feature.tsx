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
    "5bUKRQVKp1hgsPesyuFtUmz43JGa6pG1Wz4dJ5pNAunXjMc1YDjpWh9bWxE8niZQPmJU8pouokogWxjA62hmwyNv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nvx5YeugJDv4TonumwX43uRRSimk54uyZutsj6WQbxCvWFkbHAMTr4u93Q4DtNDMGQMfRtJjKPw4nnHENbVy1Cu",
  "key1": "3GLmR3FdsLfWrLuhoohrbyUkJDuQo2QoGnpwgxx8qtJoUn4MNQfYxtsri98zBMN7RGmEhJBjQ7o5Z3KNySxfKogW",
  "key2": "2Ekh5zfdkUCCMKM9ddc6vHR8cmnULKCu5rW3Jwe8iydyLH95BBgej5b2vxL4RtpwXzcSvpJ47zSAgTSfvjKAb7Ug",
  "key3": "5sdjaGgQ2RpukWvjgYJxKgfbEBk7Wzxz8iHJ1fyq2DR7bWTubZZZjkuwNmkYW2AyBZbtQtEE9t2FbjPH8gBBTU9U",
  "key4": "5CccM4J31Ad5uMvssPCQkNFLTgiCTiwcvDfmGmCPrS3Y3WLffiajMUDjstkTkJgU5oB8XH1jYByBsiZyFb5kdV4N",
  "key5": "37kTPwfrKqajs15kxx7uUA5DBscRjFXLsm48VA9F1tfDYiRhiqUuSS9jxucmwtwfwAjfVBgohUxU7MgL1FpzrkFP",
  "key6": "3dvWFnmtuMzJN91ZEQM1jb4jqAYFBG5AgPPNGkC9ssbUrnQwCUhGfLuGbupbwe98rzXrrb5vfxUYyyCQrpuWZDdb",
  "key7": "2P68w49aDxVGVSyDUikqB7GTbNaRb7WrjS2acKG1svDcWPaDeq9PDBdfnujBvc4YEshyX4h1V8Xv1Ur9dtLnDNdV",
  "key8": "65DbTsMehoCkqwA7AG9kLkmqK4BNStVXiQS4jaPF3pW5X4Sso6ERYVRURxM82VHG7LRRXws66mTqE6LTrcUBzsnP",
  "key9": "4dJnwNQPaiX7JSbtJCYY1kbyaWwJebBw9DZGuEzBXCFHJdCt8CNsh87VAu7zWkC2b6xGdUpgbyYSzWdCGVKc6VtR",
  "key10": "34BD5CvSf72gd65kV3fB3RrVDGgPrzRJPpGExc8EHFqY596NwdLVtGTxkjyqQhdLdS6fTFnLbPbcz1Bwa3rdv3xU",
  "key11": "xyfas8KNki2NfGM517CPj9vMW4ej7kg2y37jXEEsyNK2nxTig8h3ZygXi8KezeyKi9sNKuWGsds8EHHuMP3KR89",
  "key12": "6j3vDKhkiMjy9s57CRkxHZp99sKPRtnat8Sr2dLM99yDcjBF5ZcshL3HwTcNHYAPkMU9UMCEcZLPrGAZatfk2Mw",
  "key13": "fvWgpj5C2ZBgfz8cTaQMVyYxJMJRCEdqK25bbPtqFnMFtsxkvju3NNjwDSspXCPbQQrJcFALzfyu4kYaGnD7J2S",
  "key14": "5XTkyHi3Siqm3NiBC15yM4UANTjcRTkNSey5SxSr591kThzGBRgj4EFMWYCGeidHCdd33PBLbnFAN7A16oGKn1yf",
  "key15": "2wiTPY5QbKxkWS5a7KfZ8ckZVrS2gfQXscbEsuYP6npLMY7qUYSDnRGauZraf2eUuS3JLiQ5A2J6CfpgHa4SBrxu",
  "key16": "5yAmTAgV2AX31Qa2ksohJv5VsU6n7pEdBSf6Zj846ZjkdnXtPDpqhrhCyKi3cFdb9KkCUF3d2Z1M8t9NkMovuDJr",
  "key17": "51onCmDQW3rfkM46Xq4cvNBbgynn5F1BHnYSjTHcVWid1USWK7P6JbS5V1TmCwAopuivRAgaQpARqH9Q8TNaEvXj",
  "key18": "5fU3BMTBZnHWi4r7sB6XsHBMt1VkNGf7V15TF7zoCrvpeAeZntgscEzq7twjXzKgTPnCskQCeVjpHMwgatPyxCJW",
  "key19": "63mecAss651xZSrBYtPQkHDXsW8Rw4jJ8b5K9P4i1x8xoP83jYawZ42rPKR2xEwZDTkj9NsGkW7Xc5eDGMMK9N9x",
  "key20": "29RnRNH4VbgnvPAdk1MwsnZ9nrvXV8gg9BdBETAbA2wHed5mWqFxnjkbEdeDWQ6BB7jGdayPCjmzUe8j1UAaEztz",
  "key21": "4QQ1i4e5ueoY6UKwgvvk2aMgTqcxZfmAe6P7kTPZ81Ppd94t8uyLTuZQMTvH832hNq2FK8mKJr5CdeFN2pnXGYKB",
  "key22": "2n4L4uDBvywGj5sYijxkZFvmY1G8GAuXEiV4sQAQUkDwynZfhZHGaWwbuDg1JEJRmh7uAtq4rPCabhGXCfTvtvAL",
  "key23": "31Vh8VQtxjq7FXU5YPLiq2zBh52iL5KPYJM5rrY2DJ4NRiJbKw3vxXa3xWCBfq98svLyvvk1HyNZo5HMNqCsy1g2",
  "key24": "4ukEZcZbE172rSGEPswfWjtCf8KQCPyxXyHEQ36ZWamKuXaa6MhWY4Ftzufo1wxfhbu654z3VMYfZyTUYs5ZcCpF",
  "key25": "4DPwwPZ4Sh3XfsYerqRHh76xmzcKJxZLbJiQD4saWZ5NrXSVqXWQ4cBfTBj3XU1kwRuxEEiGa6L7vEtU5Ui8ZYZd",
  "key26": "67TDiDpX8xbXAZE2Hp4ZirXFpYC8wi8wcBkSHEvhB6XmdGA9EsyHeZXeLxvDmQHPjKZ21Gb6vGkyQvnGwmaPujjU",
  "key27": "5x47JuZaeKfDpw5Nmdmw1dcGG6Pegf1uK2ZMpjczjb1C2xQX3gKwjakhui8QPCWD3gLgxcoFF7QvoKG8pTn6RfY1",
  "key28": "63HNE1ErjiGKRgkk9Rab8JVM8hBN5i5fsf7p6GyfwbV8XkDrpN6oMkisAjuc2q75Tny3CLf9Mcf8YaTr4PxfMJR9",
  "key29": "5LVWeJd2PpzYpDwi14Ji3892ZYzQPzcM1agxdvz7AAmjNmZSYWxqtotHskN1WhP9Jyt3P9tMhLitSffJxVriPixh",
  "key30": "r2JJCKNByMenhrPAqb5DCKxjD5wovVt6jFEGnDM7yPQYBZRyFyPG5vNDUK9cqUjGkJP9j5uKDzrQKan7ZrAVFB9",
  "key31": "4auaxn5LcuksuJvx6iLi3Ro1fJqu9gz9U2gzHCcsPaZK6539MPzVvEM8rnTwo3BsA2UbqSXmr9T8LUBHR8n53hib",
  "key32": "4ECPX3SNDCtS31GF5MFzdDxBs8yS4tAs7dNEbjPonTPDkmyZb3xKtR7GFmmzBKDTXVRx7PPbkef7adgZvwwuqdC6",
  "key33": "4Cz7GPExVmR9ezuJiPLPzqhK4LGSF2Z5asQ5bCQK8ZZGSscCx9Z944gB13CroNYkfJEvBaX6ogXLuTqGwf56xDbE",
  "key34": "3Tokcngth5UPwpLzCaZ9inFfNMedRbBjwkhQwiRxCXmr71yzCLx7eHBdg42r2jaKt6hXbmJLx923o64E7W8uLef4",
  "key35": "5Q6vEmA7AXZdxGsJxvnQNR1eBedoeg3HMz127WXk6oMy5XnN4Y18vtvW3dh3jDc6P4MyWPTwzGWeXcCfjGnx2Q9",
  "key36": "QXZ7QL37uNDNvHW197DbPnQQoKymXyF3aALES9rpwdDHghUHufEMvu9zwsWR9xd4KTiUfc4pevY9Y3kLCL8ZnkG",
  "key37": "5DDYSUXKsxsCvbZBnF6sMhTxXhm73hZurvCRSstWK6GWytHmydPyrTwQDA4vky8yC8jSUcok5YmTHaS5LFGZX7b4",
  "key38": "3PyfPuCb1cxZpMhWHEMyCEJU2hECwoA7vMJw6igusHPkQTwj81WZ1MWsvTXd7hak2c1aiE47ny835c1KJbUxfos1",
  "key39": "2QDaGLG1Z2AU8CWNU9NpjV2vSDV9H4WYqB5nGw5b9v8uRAuTxFsYDvKeGkgKuZmbYGQnJ5PRwLv2VDEXA9fxjwPC",
  "key40": "4V3xDQWiWeHKKvH3CfMseBpbQRF3yvfjAwCp6tYoXBmwEmtY7KhttUTjGfhh8KAvnds5eaeJnFBX7HCdjYSJQZgJ",
  "key41": "K8az4crA5aEiXw73vPz485c5DJkfBtcYPEaYhsg5sAZ1YyvMm8EGdpKZpVFY6yJLVQDmu2YBXvRRBKBXKMVmmZe",
  "key42": "qsjX1GQqDUUtwVoQbtrxrXcdzBtFR6aDJosM5GL4ybNvg4TNQCtrZGyZ7vYpR7e2etVaW3BcPKFYQAEbqwozENS",
  "key43": "5NLGoE36aYXzMQFtBHEEK4t3vdqFf97MaEttFRZxXuS4ui5eHrwU7TJpwdWUXdLJze1GytMpwwukcQrtc4YAtrkf",
  "key44": "5pYxstkS4UmpjPJ56bBctg8xgGrzGLCeLY3r8A1xtLZjsSyhpyZ1Xs8hYhKdsvtFsGWKt44XTTaNAHDV3waWeh67"
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
