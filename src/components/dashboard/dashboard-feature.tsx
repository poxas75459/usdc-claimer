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
    "35b8FWv5A9u3jeNhrXnjUPkZRRtYkHDUtqWhu2bvo32ztGxFrBhEmcEBr6pXoAk3b1FSfpY5jVyjzir384oUWqvx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FK9THFHaBiCyrWDCxLi8WEk3PFwua4Jhv9Y3Hp23ck3wXvmvp8nbYKp912UThVRsKjP5yUGSPHXQkPudPbYw4BJ",
  "key1": "4UgvfkUAQPZPLDrCrBEk3HhcH45X4JdxZKCtdkddeFi5JpSdqboydrzMFR8eBj8Ajzeju4bmFiBbPnvDozEtqDHW",
  "key2": "3VNgJQ98UWse4vZ2ETWDD7k4ck4EY8vee4qJuXouZSwmRJ11TGrTr4hXyZVVwQtPE4rqW6RPVvTuW44VB4B8DRcC",
  "key3": "5h6VAT8TVx7F1aoGiyhG87DknUrFEt86f9Uge8aezNU2bKGSsiSNB4CxeY2aK7vz6DGbVse4nnzLdXerGDLAFVfg",
  "key4": "5ryzVZgT519BsYjnwyu8epfAea8EGrEG4QPiJL8SdqhAJcn66APqc9BESXyEGJGXJUj6i3Y7E6uiKvurhoM91aiz",
  "key5": "vGFNTy4x5Grhvj7kAuLwQV85C9qR4aA9Rvu5FoNKRn8sHB97gxZKuqo4sagRz2AuXcmJbYjstCr9Q48XHPtKChu",
  "key6": "2usn26ZbBpNk4bobaeUFGJFQeqesP7Cb78npSyT6HWXWaMqsUiVKhyRFRekY3m5CKf6A5QPVZxoT3xThAqhpLDvq",
  "key7": "LUDMYwZyeQeZZz2f5zaHykUEgqiS6AqRSgEE9eXtAQ8u3PGWT2sGoVLwJVWc5xTaBdih12ZiyiYr5JBkZTjGmiV",
  "key8": "3TNeuJeUvFVDtFvxHNqiC1FNMo7EjZxLmK9Zr7VyZTMkfexbJrKDLc2SVvwpQ1xaY5yU2rQx5qF9uEKvMJcbsq2K",
  "key9": "4XEAECpAXWMUhJ8fcYCr7674hv4Gx6wmxtqMc7SKuAhLmsmFK7szNtTGmhHFWdoEmpi8jLRBTmq6akGLy23C9Wcd",
  "key10": "3jpJZkstKzoW5cKxPkwUM7WybBeFg1cYi1tc6U4XM58LqKcX5mbYNgbDZsLwmnpqyXs1JBqzjAdrFDQgS51VMJcW",
  "key11": "4V7iNLVyiQfbh41iPvTstQJjYHVZcxMJGGStFzZgHLwg79BY1XaoCiPNEADYTSCCzsp3LBm5qx33rFtHhrVntr7Q",
  "key12": "2iHTRcUYt3aKnGj8LRbfPH7DqGsU78KxVGj3Xd5tizG7AhniuWhyVEkV3pk5ZbDaAFBP4hTv2RvDCWgsB1NsqiEk",
  "key13": "5s96GKy2ijbci1UDyDYvWPCRMeCcJiBz6W2XWiMdXWS4Loj6TYTXmA7xBEyd4ehtU9VfRA2T97zJSmjUMBDYdvQU",
  "key14": "4u2u5xg2Svaxs3AqTN74HmWJoP8Cc4TD8HaXdXNZciq6MTvSzBWG2cRHxiUkdnmv1kULDMeFKTDCkEjejjg78n14",
  "key15": "2Ks42hQuRFXacMhV3x7QwZPcMyt69Ji46PUtd1E5YxWZaiYxp5mYsCvZuB8AE8A7GT32k13h114ck5sVe2DbW3A1",
  "key16": "sFhcx2fddHUgi4YgRYTj2S1CEsuuYyZjGyozcXmRQ54hqrSiWDZbsZXuRSFjVFf7uTpaAKsYTpzkrz3yyAmWDYk",
  "key17": "2fuaEDXs1TCmnf45Ckyq5uNgZJLRNc5U27WyWYyYjLjEDdaZ3B6K6wcDE5DcsQYTEY3bBAEttmdtvNSVaRZ5mXo1",
  "key18": "vZMtAPNXN9ZjHAx3cS73igBJAYwN4ykQ3o4fifCo5emqa9vdYSxmvHexQ8z6jQGMFqHs3BAK2p82S2SGub249L3",
  "key19": "2PtdBCDtdkJBv8nkL5oSgYi2pXHTprMpCdwjcNzc3UjgupjPGhcSe88hy4zeaR8NFWnFm2AJ7R21acBao2HtzstB",
  "key20": "ac158J965fasCkNDUkNSiAwQr3m5qm298miBBm1uCbDok9sMuAmMC27idaz5Djf9pwNoXAei7MpBVr3J3rEHCF4",
  "key21": "5sB2TTLsYgHAwi5gL7gNHfkPPP6vuA3ziJcCMDo5EtnQZsMJs4CxZdkXaodQHTcA5YUgK5NZMDzdvokASrtx4Fp",
  "key22": "5dDJ5D1jHTkYCopbSTphS87LYiMpSJuq4u6LQzSUghDEtLaBqgPdd77i36uyN9WYkm3CikaiCK28KY4722uS6ZBK",
  "key23": "JU8RQDdhB7KvXHNuSHsrtWcJdnb5vMqR6qo5AwHUvC6ECsTgG7x6pEUZR7dg2qMLnACwfKYHehBx9xxeRGWAu7w",
  "key24": "2xbhTf2iq6a5dedZSVaVcLWduKZeHR6eQnUMQmMBQCJLEEaehNpFrt8iHm9FTPTWu7WkPao6uUNVtQuFyRTbNMLu",
  "key25": "x3yryeWsUSaqEuZ4oP7rNQgts4SRNU2beybi4hastd9KE7vP6JDGpW6HpLVXDvZJBTmLDYPFcysN1VcYxt8aKu5",
  "key26": "yag6utM1geiV7rikMjmry5eikZtrGRYUqyJgpJYkFPQ95tj6Vtabgg7MFGfKWCp5gYhc8ZTxrPbrKSGY8KCUQcv"
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
