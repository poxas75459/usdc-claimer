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
    "4Y5R8XBnoCcWKydPM6PTXy5hMvao6xuusH6Zebfsqwo8zmBy2qZBCDMBxoN5YJtm6jwFwUJACyb1GNeJcwUk3WoH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n3PybtQ1pDgc1nT3B2ZFrDW1CVqYdm8W28sJKmDK5uToQcoAi7ogwCSTuMVvVAxNySVYJcUSyFjJoXuARKTqSJD",
  "key1": "2ETt2mgFg6guEoW8SG1QvUtCFfkk8tL9puFaftskD5wftZepSf14QfxktdZXKTuZRW2vnHRGJicyuxtdBroGrivV",
  "key2": "3LruNqJMYgdU9pn9ciQzVgBEbfRrzj6W2gY2r8NQCSahewKiK5hzVKsWU3HCoZfLHzcFU6u9oiDynVYNZkaenAeL",
  "key3": "4ihBx2V7Fdr1eXd9gnpcCRj6L8Qw8VN95xXenKXtGDBG9N84oLPpiyWMmEtenzmmxKxPWA33hiFAGm8jrgVcX3Nd",
  "key4": "5h4qWX1op4iPUPPpZoQPfoNp9V35qfXyhztSFuP9fsBjy556NRNZe5TJ8V7cTQoEi1o3HEmwg3PPBi4zmyCx3p7K",
  "key5": "63Ri9XFKXZHzN4MrzTCvBPYa7nyX4MDU9f3qnsUkfLzYaDedMSc2x2Y4HSN5gfCeBXYTgSFjsJo8Mjonwxet9AT4",
  "key6": "2E6MqPu1bLcw8f4AwhnmicdbJg7kwM3fDqDfUxvaiVqWD6LiYE64CW6t3zsmgDX7eSa7Hx5dTowjcBYGSPbT3pjK",
  "key7": "UJLeqhKAW3gLn4gbWtxML4LDdtDDEridDVXB37Gze1TbnPB7YyUW3L87CJnix1MV5XTAaRKV6Qx2Kt5As5DaEPd",
  "key8": "5F7kBZX1NoV4KXr8yrzNRQopHL2yyh6rAQ21MuQiGFqCLUNXzUbL1gYvWU3Mi23XRyrFotUYvNDeA9K9zEQryxQP",
  "key9": "5fgREhX14yrpHVkKuZ8pBSRVeK2rzRmjJhwcSAbGrYeCR3atPG8Snwu4mvUWTrKQg8t3n9bsFHD7K5fDwmhsJCXh",
  "key10": "5upEUpLdy2nsMykxgStamVZv729U3JecyJEVNUtxsk72bpbwNTbqDUALD6QAHza5FbAoWGQSn35dDs2uptioBPtv",
  "key11": "4ecGD6cwpBSbXCEdNYvbiXTpcxw9W65KGypaKUkW5uESKHbyyTLFMxDnKbCaNnPb8aSMEFHFsDVfkR5aBiu7mEqo",
  "key12": "4ZoCQ4i8nEEqHcAk2w6bsssNvjqBMkVZskZPhFBvk8o99QNcxMGiBJNGp541YXjgbH2oXpKzzN3LrMA5HxE1RniH",
  "key13": "4e7uGV4CsUtFQ6wqs786fRrBaQfV3qKB2H2FncSruoQEGioUCqqisd4j7dxvhPro2ZfmDCihopfXUcWbEvvvsf4n",
  "key14": "wpMkRWa2yNEprh2aKtWqdsk8R4AmePUqPstyH1aksTkBDiFqGTSQMqkUqg4ynHJ38H5AECb82UtUcJuETuoCVJy",
  "key15": "3vExSN5Xbduk5v6rbsBE2KzhZ6WLYCpUGuEBHzwm2xxMGdCa9FJET5A7GqUkMy3ePHwqL32itXvZJYJSF223kSaH",
  "key16": "2f8VM2ugkQQyhsEF9d9qnoyXb4TTb8t1HeFZc61rUjkHAzmquRxAcAn2iLt2q66oqXfPntwDWagNugnM62hKCcuL",
  "key17": "5RzashkU6ntmoh1zkJ9hGQZEmqPY7nnvtkmVvcrVY2RzANdBjghgnZ2uUKkeDSV1UkVuK17iqKthHRt3196cSKW2",
  "key18": "x9ZkfNYnev6p6g3dxRznan7KeeeDoLKojcXoifE191zEdMbN6zXJsQmARL85msnrjthcxENYbeLtSrHda5V1DGi",
  "key19": "4pXwHnWDw281dcL2pwm2cQV1BLLSrLC6UMFAbSnUmcof5FwmtUbJZKBtS3ZBTmyUfEUA8gc4fsrLz2KjjLiRXRs4",
  "key20": "4kntWAzU2HKu6PhdoP1z98ReXY46inP6P3UhEUXNXJzTz9MTPJWXDPSUXEXuztPfrkCdpnd7toMtNsTjafywA3Dk",
  "key21": "y9JbMaR4Z3iU6jDHp7WFF1gneBBFm92uNoNcquEYwJ68QUE7TKchQHnrEThxKgca7XvRNsF8puy1md7D5M51HE5",
  "key22": "m93TkqrkkL8qybPFWbZgec9dXZiSnzcH4GNhXTVsgHFtHekaHM7hmfanNqjZRK14mYc13ueQsFKmW7iZFL1GQyj",
  "key23": "4exnKf6dEbo5FmUTHGX4GzbkHQiPLs4awr5hXSZ7FNxYDCMpsV9oyRjDYSKACdrqSDoXfLacxPov5aJShYU4Z8XJ",
  "key24": "2RfaRK6koCojHnEUyR8q6TxqcssjtTZHHXHoPPZdsgvffPL7Ga5qNm6DfuzigmoWhgKGvuarNFfBCucyhN4WQQUe",
  "key25": "5CgQouqcSCH3QtWav12ZFFP1odmhETjaxSzVvfC75bs32yzvJae8MDspB32jX3XxXu2HfgUKgCPYu5cSSeiGsJkb",
  "key26": "44WSuJPUSpVqDCbrACT44sRRv2egzMtFsfPNY1XXPu2ujy1M6hVissiC8LkamTuxppFFioSPzXJqEoaYVQgCjE2z",
  "key27": "2SktBJW9jkfysoE1hHMxecocnk2X94Rbv1ZWaxFnt3YwjtaHoxDmkyQkVm7SysrUgan3xejxoBrgeyt8m5FRZRmv",
  "key28": "23BxfHq9M65cFjHrjDRJxkM3p3Y5vtCBUXimeV547Y4fDMaXMqnJYVxpnK439YWdi6Zf4mMXZZMpb74oyJ4jLwPk",
  "key29": "5Qd7Yx9rhDcLNfozBiAgGjDhq6nDkhjMJEx6QmnQxhqgEG6pAd3XFsawmUFXoFxeJWE37W1xLu68y8XM3EQN21EE",
  "key30": "4vxMq4ZCt3PrUAr3CdJiwoZcLAzi6GFMy1jbBuaUSZza6chC5imVP95H5m7T9a4n6RLtNZ1mx4TAHyv527P8FF8J",
  "key31": "4sDt1LTLCK82KD9n6AakaRst83uG9ApWbimY8VT3VT1aChzD4rjaVhSzpvzbTAGT3aNEtWFjYREGTsMM5buLpBe2",
  "key32": "qxaUUdk5yDRuTenYsQGLmxBqq45tqAbskrksAAH2c55dCcVPhGVfecwdcqKViFyvNndsvxG2BzbcKqebPyhKnwH",
  "key33": "4AKyBBcaEgSMSMRjZXSSdaqW3mDJXnpkyVKzRgydkYfatZ5dcQGV88ciWzXQ1W23Gn7vBdb4iA3B2AkynXkCZin",
  "key34": "2HgsZytjv45S4s76CWCQo3evbrJnK3rwpZh8fPnkSckyCysnc3DwXZTMmZY5aD9ZbXjvTqEszuwF4ovfdznrk81c",
  "key35": "5QiEeTVPDT4u8M6QY3GcynTqAqWTe1ivRxRHGYo6gQ3JCnmtYd27muXx11RrHmifXqvY3Pi8GNgE8Xq44q6kEfme",
  "key36": "3z38iV8SC11hNW5Z14yzsbJCWXYzGkM37otmyQAikHQERPfomLxNCf2GuLfP7PynA7e3Yvm4SMoVNjb6E1cxaX95",
  "key37": "4HVGpptVaQLNHrotxv2VErbG7Dpvk5whBVpTHZzwAvDZ5Zn7mfB73FL8EQYBmNJt38vkFP5Lah47PDFtvdM9hSSX",
  "key38": "3doSSAg8zdkW1CZqLDg9rzk3WSv7Mw6aM4LWkg9Sbvvb2kVfU9wn3rJTukoQbGzx1pzyt7gXbcGiqQWvXvT7Q96r",
  "key39": "DBWSa6A8vWwCjZERucEGWByh2coQ6T67FvHK58JsAuznNf5h245pvRDHANt62fUNxwc1iTzPhr2uarAAV5ZeYYC",
  "key40": "4Urke1UnAwqfFerG43HvPbezgELZYrq481Gjbs7j7HYtThvzoKjqUccoi7vvs3eG5VXUU9PnEUE3qDGy7JiYZkbi",
  "key41": "4Kf1VHAoZrXFMLWtT8Xcqiw2dtAa13WhdmE86x31BL4xrNwr5LPaCg4GdeX67qFjPdeNaFvKZ6cHrttkbe2FwCZq",
  "key42": "fG1wWbJKXRXJTwWezy3RVtDYP5hoHTNyw9Eq6XnbcWKtv7VtMkjrSuV7JaxgFu85Wziu445hBRK2iKhYRJKeCc9",
  "key43": "3zxbRr3mp9nN4xLdeUE45B4gH1YZHsxWbHGEP8sUurz9WP3kmJojTeAxLkjSy13RXGDBqTGvFF5W3ZQ2ibJzqU1h",
  "key44": "4ZAf4bAZQBMWdHPt7e9Cr4A4f1kp16kYjZDMZQtjevXnC1zabaH9QWznT8QGZQQQm7Wh3DMTe4Vr5MWue9RxAhYM",
  "key45": "2i2CwA1YqYV7E1mM5TUfD7mvAUCJk9wdC9nde14joEdi8A9ykY3E3Ha4azZ4eE96FKv4HTGiaJuk3ScbbwMQqhpJ",
  "key46": "5mshGP5bz7sjMNKmLvV2S6wZtEV8xxEd1awQpbQ7n7TRUMAVmnNdTGLNPPsCd5qVX1gYEVU2FB2ZYT9Dg6Yyvuak"
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
