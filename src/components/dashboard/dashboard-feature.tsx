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
    "66j1HEvZpsRBxAvqp4kJvaKkDug1WrSG7gKzWDHK9kZveMDiswHpAPQb3hXLVZawFB7dxA41DiyJDyQbUR86G3wu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eKA4p8MypRyNxYVAfLGRTBR1gWwE4y4yz9wnZ5rvvV1XK5P3gnsdeugdnZ5PnwdMgYaUqQ81FSt2e114ktAeRhC",
  "key1": "4kY9aMsn1FMJViLaQQAaCv9NSGpZC8oz6f4ezzMUikvHocHYhyJiW4poe9NSN85eYkHy2UfeX8DifdJZFDqML2kr",
  "key2": "2d25aMHKydZdcxfZQ7CkqzpaiFuDp4Tq7XmGg9V5LVhjj8VBYUDRW44Bnz8C8iqy2KNQtpMHifjCL9tg666bbK7v",
  "key3": "2ADjkMjXKUxmVi345fPZdtKxC6H6tfyCBtMxJ6pGhG8VJUauvC6UAVK1pcfRad16y8wdfqkR4m9jy3mD14FPvqNg",
  "key4": "SSRWfEyrRiZMBae4rS3V61iLnUWDWgHT6EBhhSBzJft7LjAEPedxGMWqMb9hw7MhoHiKFf8QybKcpeNitz7E1ra",
  "key5": "Qz8Wgjc7PBmXCKgAnSmHJkchmxj6TJhf7WxCQJVtQqXA7pgD3zp9HqyP9GnC2epphtEXv21nUZd4V48vcxk1VGW",
  "key6": "521weDxxRvGzoHzZmzMFWgY8r8fhRwJn6X632HzXVCYMZihLnPv6YvPWiUpe1fUs6cE8hALXN6yfgfeJuq6ri6VX",
  "key7": "2Y8V7YZxrrPkMMkkdfgQJYYL9mseEdTtRmCqxgjzJpsRT5ftR19rZ34A1ahyqY6v5F2beDH41oskDsSAsuS5MYpN",
  "key8": "5i6W3YBk5ppDQFB1VAr6bUDCS8Q5fnrZ2zva9haKDRrKov44sjEbEQtXQwmRJNau7wzsKHhaF3TXHRibxf6j2o4N",
  "key9": "57LLe94FWA3smRMGr8BmSyQXmh7SPXN4kMGNuACcdd6DUzYyMibobvACLihrWvpj5x97AZQr8GGgCUsPtKo3nkP8",
  "key10": "4WgPsfQbLjTZxBNp61YpyW639Xku9pCLuEgPo4zGG4Bw2wErDP6XAPBrsXtxQHXKzwckQUDySkbh5kNu8LB56rmw",
  "key11": "4vEAkgL6knmL7GKyz19MhvYipS3EjPPySn8nTr8xvb7Wo6J3tNyLwtdv8qhtcUjDaMk6JBxzuVD6bZewSFL2QyA6",
  "key12": "3eNTyHHMz7yJaMF8c91UQu98sbgb3noX9YkE8Ps4AL9XDyuu18eNf188HZQHHnC3J43JmoGN5b8iWebv6ijhQtAP",
  "key13": "2QYYifUpqNbKb5jfM7XpGUFVWrbBNkfqCTzmYEbHQWDmQA5WN29LfpXkTYPCPnMar7MFsjUveUxxUi2Qvi68sk1B",
  "key14": "4xYfAEiHVxBMjziJod1pBMUKCmC4G287LwCH1knzSVryz5ooh2XqSQATHpM3gBrspQBBnWBXSjUmFBnhPwAYyLUd",
  "key15": "4NVbUNwZ4ocLHxgdU2x4GcRkvhYzEWP8vshLBNmAS2iAQezLPurfsN5CiKfbQHw94UUXWb1W41skPdMakvprtqHm",
  "key16": "4p1pTn2y1atZJNE4nYwiWAB4A5aibq91zsjLcogCbvvN92Hsj87oHzsfjF8h5y1nm4J6p1YuL7QdoKsrgB68G2nF",
  "key17": "2Dg6D16ARAZoG678pmyDhG4dMMCMhK9sXEMAdyZPCCeXwfH8yK7wYBjGigVJCXq2c7ekSmbnVg9juJfTSLg16RLU",
  "key18": "5txDkHNwfAtVBn4kaaJa7yLPAaxc3cakNYyBjYd6xK1q2GZ1YtsyRD2WCLiccEQzJigHGntWKAZhpnFL8FhmtpTK",
  "key19": "3RVDr9i1xoLiwnpbSWYs9VecRAMhfgjYuizH92H235b3WeTm9DXYn7KRgitEWU1KwEwNgGRpcEnQWeB77RtE4fq9",
  "key20": "3jTUfswvNFnXDcjXoQ3kxjaNno5MhFkGY79XhmwQdyHHRufAM6pRJmsmECMQecUySFVEtTWXKcQyXJ82XcB37ZSc",
  "key21": "657xKQJi6nQ3jCrrmKzhyx9NtJx7Tdhfa57JJ1LLY6utor4qhtaNa9ShFSBzgCaE4ZoVi9wc6bDVmR1ayyvKaoPx",
  "key22": "4xwFW1zQTLpFsHThCunMjwmFw8Rq6krfCJ9u9rUmqV4u7kefZnsAFKyj8Cup5wXszt6jVQPnhdZLJYM4h5CguAws",
  "key23": "23eA7knjG7WE6vjV832LP2T3VK8fc4v2aJ692w6nXS9odtubcxjxcM1fvMuuCULh1Ta5BABvy1FSRRw8nHawqUUi",
  "key24": "5ZpHzgth4bCWbtZs7oTTyRPiQBg76mivxiqdx9yaMf9zuSHtT2AN1X32soK4yJZf1G3w4dhEUk1vFk7k5paFExpj",
  "key25": "3C7J4TFGd3HwexSzrjatgPzzyA32qJ3nXPyofcY8vZ4fRPNASapkoNKEreU68yD6NfBiJoNMcU6rxM7cVRL5RobL",
  "key26": "28NaVX8Ep4MFwsJ1gLpcafqFwnqm5pLt5A9sCLgDTXK5HcZJHziyBpeh4r8WK6QQuCCVaYwpDkvXQReyZgiFiqyB",
  "key27": "zFeF8M699jBnf5MQXiKikEDa2KwnMFzC7sY9bECTmuB4cAHErjkdZCXt2a4hiC155a8BUxH1kQrLjkbaBaMTjN7",
  "key28": "QDfobm37kPRD488DePULpPtd9JwoTwqHcfywWnm5PiFZhZK9zDeyauER8bc2uPPsEtszgb2XtikmBhQXYHaDYK3",
  "key29": "2hiGLzYkUPaSsLp12yf6FRBaksDP2tJo9ximPoAA3gAhxn1SwbK5AnBoyQTf4H9P2a5wKSmhRgJA23JLru7Su274",
  "key30": "3bQTurQwxw5oSQ7AayuuWWfoG1FvAvtuGNWZuWgTZt7G3u5kYwS1cwyhmdyUyriDCmR316R5bwrjpaN98GM5oLx2",
  "key31": "sfvdUZ6My3gx5cRHh1SFJBkWJDSdHPcwLdyHFjNfbcSPbx1TxKgp9qDDWupvCveeapN5R9mGfPjpiBLMGw2qZhm",
  "key32": "5HLUZvWhCSfgw2CJVvFxBda5EkrxJSLBCBhoCuDzqn29WPvqNepekqLjwJB7DHzWuEKj5ysF51zF76mxgdEGVSSX",
  "key33": "2uxWRWATB3HYjwQ1W22vPPJkET1AeyYDYEYXFEcb57ozhukKqqUAmFwcQWFHWSWkPVtatRuXuWpR4i6aCfUvNJRJ",
  "key34": "2a6cv98y3WJLj4EN4jitmrgmDkcrufcVCVWiLLA94e63qMFd1nTkixnjJJVRav1kLSaVbUPbWdBkAUChVcEpZwAw"
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
