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
    "2uTdRwzr6SDryePMZ7pRTCEgFv4z2nsBC7krPqj58pUfq2Lg7hizRWbuRBDssqYRtrSvHsMqoureyFQB9umUn6Q9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ocT9bPUUVuQpUyfZTrC3yys9Fz5DGoLSqA8yNZxBNtEHz2tqsAnHhWm2Xs7QybanUjZAaZ45DGXYES7bLbXBJtC",
  "key1": "37Xv7JdBTccNGcN6c83VrEwgmwioiPVfTJqKLCokAwXkYmM9UjcEd8kwWF5nabyeWKNh7Mo6jtEFgjpTj6c2gTPY",
  "key2": "2vTfsYF31prt8ryeeAcmvA9Cfr3zBNi3KoBPGpsd3ZW3AphDsQSrEb21qDpBV75CybjhFqdQPU77ZBTS9Sjy49oy",
  "key3": "5hwL2R6o4NdLN5Zfv4ncSstb1C52pAUo3DZTAjhN1vWafB1X5CJwmFs4EgkHc2mLGRisNx6Xnv23ZYQK6hxM7ShN",
  "key4": "5HkMhHkGHWaDG5M9FY313GxjbphQbWHQejDqWNjJGyUSLKwtmMHoxXZGJArg6FmPxJ9B2woafsqYSJSLTspD3XgH",
  "key5": "5zXnXZD4xNyCyFa41J1aypUFFm5vY8avhGSFq79oCXLNBvtgXsVaG8CPEqg9723AeYUpV7RczSiaKM2HYT9scsHT",
  "key6": "5K6iJuBip7VLrv2JHYE2smfhxxZMwZsbsvvDUtQmKdHx95Y1LgiMBMCTt9jTfscPdLaXSXSn7qBMd1ng4fFftRXR",
  "key7": "4tZsbDPbPgF4C5VH43wWgoH1WHrSTRwvDaWSMkiYke7yb3CCT6DRiwdcFV1bNTCUwQgrBFebrc1mXg3S7afPLfoa",
  "key8": "5c17BVfhmL9PA3ZSey97KiffMPaKFBYm848woz9aefSYkKqKfgXoFbcB3h6Rg5tMdwq2MgwSGXzssJQ3PNyvHHXZ",
  "key9": "3zXhXfh72Qr5Fsa8MRcRu9knjTeRwdbrEmDenRUYtMFPyPy7pJJCuH2s28WDyCaLdvLJQroqhkNyT9iEpv4k4myP",
  "key10": "f1gCRdqb5Df5B1Et7CAXo4KbhN5K75scH8T47ELyMdzhprwgDPb8A7MYNizS9TkzL7HiF4ZHP7PT4dFnp6oe5o1",
  "key11": "2Gnm6SA3qWEg4AwPLeUuJKZkfmbMs6gj8k4DQyqpdhvZ5KSYjKb8rcpBC4fQen3Ae9r1NAwDaD5xq7Y3tQvoRqKL",
  "key12": "CLK2oZiN2jiSNBXXf6cFAuQ66SxgX4oGbj3WVxyurfTLRCLaQaYTSLCquDzyYDR9ythTWPGTVDB78ZH1zTwKfkz",
  "key13": "2bdRKQVMdC1XNUMgfY8TKymmiMLQrFDPjquDXrWCBTyGXon8LWkPe74xwzjx1Lw9wy3sDNSsmYPU5pcfpRvBicbh",
  "key14": "3SsKuyssqCPihz46P9jFcUA4H8MsdvjS7JaXqQhjFgJhkCvQghk8U48LYgGETRbCSs3KmxwaGxHjcEEXqRv1Cbr",
  "key15": "3Hk8zFqPnAJM5PMkzJpRW48hpmNfjC3Mh2FtW1uFh8z8ujNHHLG953pULBo7RXzGbELk7CaWnMs9ExDp1ccGrnhP",
  "key16": "5nzKznoDu1QDVt9oYF6BLA2pxqbeL91qQdbNPzc3epMgPZ5Emii2N9LrjzvGBXnvjhNkAsg1AiTm6xmhq8YKrapw",
  "key17": "5gpBnRShRNQ8nAnW74nhdptLbBSrJXKg89XgoGp4bCjGG3t8fK7DKoAhDh8eanvgb9rXoRpvq7Zfu8M9oKodMbtw",
  "key18": "4vfhcov4mAU8xDCszChaZDw85F4QhbT14Gpj5XrC8MYjhhVhUmswdWBr5ui5PGiMvS9WLu68ZNxsALMZGqy5jM2T",
  "key19": "21diQzHDViAodZxhdFUR7tEaCmBPeF5n23FG5SGDPSYT5fKxEwX5keGcAikAvmw15TUK6hoBu2G2SPnavB1dycRm",
  "key20": "DfG1QJFzf6uYmh1rnpXhQi62pu33xSb6n7NpgeNcsidYu4Mcrq1q9c3HxmSAZ2KQ7bLnF2nScyL6b8VBB3rrc4C",
  "key21": "4KgDKCuuc8wu3isJrbGkJu3CzrkbqeF1bfKq4RcMDj5zSb8DZjguk7QuXooDbYPYc9FzGbhh6BTuu5VbtkYaZBL5",
  "key22": "3JMAPBFjSq6iVdZgEut8T4nMUgsdgBsJrwduc5XghosaDJrqChP1Amd1RMDWknPv6ud7j4JW1mkVCtrAbj8p1fQX",
  "key23": "4PwbndiDVBiDRzpewX6qwHrTi2K16JyubbDesB8S5XVJSMZLCWJoLiwygAoYej8xCa94UwTn1rk5NYdaHgZNWzKT",
  "key24": "3TjXmYS71hjBspMwUdxPEnsmBGoJoUZbzW3uYNjnQLjrBYemDcAtocV7Vy5YDvBxkpCDEpxZRKC78EmEpRcfEjbR",
  "key25": "63EztN4qY3Uzot1gDRZ3EDvRf7hbzSzuhD9Ky4aPJA4iz6qARt51WyuqzCimaQP6rg4cTYRosoK5KYmzhnb5XFD3",
  "key26": "4prNrwGbBVAPCurAaow4Za5chyrgMRR6D3L4gEAvDHd32JfDV4zqN6Bh8TWgNUqn4pn2BoxnYyavAttk8NhGskRZ",
  "key27": "5hXjiz1ehAsrw52twJbxMCadbzorc3UDhm2LviwXaNNgT8oQUSvcH2EKX4c7Jv7tfDQf97Eng1KoRmwsejAFgMQk",
  "key28": "UhJySS1m99jmfPkv7JfhWyt4hDHp3X9bmqzGGCy4bKA8pSPR5ycMRvvqmXMvj5chA83fod2uwG4RB6xrnWqFWv7",
  "key29": "4fthKE6Xqz9ohK4GCnL8exWKRLEct1xKckpE6ttiss1jGmtLpLsNtEbph4fApFHrUdpzYicnmpbzu8xVRBi9dKsf",
  "key30": "63nYzwhUD6csJwSBYBgp7tt1WdUCm1N6kYG3eStKe7JNRjvp64ubp59aRjVAmgXYrxACSxA4Sq1U8myUhKtRxeww",
  "key31": "3whHRuzFHt2nc6sBnogL67XPG9Tqtg6BTxCvzZf2N1NrrGddLp4AzqTgcqa9h5oAX5BJeec9sjvXbmQsNXQb7vBb",
  "key32": "4ETSgZtB31vqHMsHUT3ocUmsoiU3SEt9uBcTnnistgQtUqMnTKXZyQ4Emdzj3NF1tj92rYyg19Pz15nz1KGiCNHc",
  "key33": "3o1ZSAhTmAF8ELHtzLWjLvuR2QMSJi6L2HPM8VgcuYSb5bUG59uedYggZsf8RrcJY1v1oVYMiPiiU7MC22qRqrdV",
  "key34": "2owDzBzpxtqd5GoTCDpHab1oaoubXvX7p2aYmFcCHHK9YedzpJsTvnb2ikzmfKiDcWsEPEBfJUB9Y3YRtCDUD7wz",
  "key35": "Bts7XLtcDDRK384nyPrp3hDan1igwrmEUWo4PoEeJFGY9kncerssVQDUR81t3nE9BdtTEYKjZf9prtDieC2i8eV",
  "key36": "2P7DwMvWs2igChHkzAdsedS8UPDhs17JPxpZncnK57pehpdchreJsuAaWQVDv3QPeTifJqgdDgsibGw38F75AKL8",
  "key37": "2DkV1xy8PpCoougvHpPRX1buPkjmKtYQqTeJoGQkamhn7V6G5szmNU97ay5dGBy4Rf7caABDy5cSHHNrf9TopmX1",
  "key38": "sm6bUP85wB6MPTeiqkVK6tQ74a9xTK5eXgzh322oYk1A4v13aMda4fhUHWv6RBaPzHm5ucfZepz1ye5FeqCYqRA",
  "key39": "3Zw7kn1N7tdEnCEndcX8wsW4wQTcw7XaNAvatCFXMHT3kKDBBHWxtWDjuenTag2hgv5rhmnGu59KKEbdcxMoYTY1",
  "key40": "Ce3DbvRnCJ9JcAUxk6XfdknAA4jg5Yqun14hKJviG4tpbHwFKsSHjoUT3CbecHqdMQ9VGeoXcnEe9X2wTVpgoq1",
  "key41": "3UKavvbHwsH7GWC6UYppkbhm5UWnfgc6r68soKsDnr14WUdteRh8bvv7ZAHEtsKTJcfnh1FJhY9wS6CNftM9uURd",
  "key42": "2UtVwKFhkWgqJPyZP5yDA2sUoda2Rx96awVPrpotkCrJXHT3WUXAQeaZ41pTHDq47eZgsEfuNUb7TXEL16TjJkfg",
  "key43": "2akshQqYDGdT6vaG9RH83KBSbFAjUXJqzBbK622nysnJXcBZhC7nuJCHRjpvsvT215AKSacnLzAjL89KK7gPdsTD",
  "key44": "4LptNZ9AHRGpJ8AK8cxA3T1Wan2GVRsRnWSYyMZd9YwCbgXoLt9BrvfUPTd8GcnN7kv1f5SUQxj8AsQiU2QBw9qg",
  "key45": "5MSRJE55GXrT1ME1CEC8QJqxuPEB8atapQnPuxmeiDhptwgD22K3RiajYUmADivGUZ3esBcd7E5wi2Ad5gC1Bz6g",
  "key46": "5euJU7LwqdpsDg5xV88FtHR1AzuD4b3Ap4v8EmcNGMdLzxpwcHjMEbxgh7S45Yibjp2LhQPnvY64gXNb8MWsazWv",
  "key47": "aLNqTYfELQwhuKL9PphR6t3zU1DytsfbFFpZFvtqvcpXmd1373dyMECPPjRCre3Mfyxn2S7uAEUx9bEqVynwU57",
  "key48": "2z5cepcFhQTD98x1Lh3te8zqQ9k98zmtcLqToBa5Lc3cQdi18WYnNziXQ9PvufTqvDizBX23GDJdXJp3RN9KcmXd",
  "key49": "2dQggHGKpcYoi4bfAKj2T3tyT27QE3cMWRrSqDRtbciQ9UmEZjZSH1Dp9tK8TY1YkysDUQ9Jad3F2ujaKupUcU2C"
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
