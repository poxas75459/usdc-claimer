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
    "4vUyXUAaFm8wcW2mTj8SagTpgvcxVgLvzY6m75vbdUbdFhhwZc3TWTA1vTMy5y91YGBVWsnovW3WtedXHPYM8xwd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WnH5SFzcyDVnQbTAAd2Kcmdae8CLKhPJemm9kPYwSNajVotmVNTGm1hEVF8VmPrdWT8MWXoCZsjFajMk8GunhM5",
  "key1": "4rxvTnDJRSn7JxPF4WujzfWUmduPRS7U7Gsq3yrcxWZFFbRP4G9dN2aKcTBL2Am331NxprQRuaHSFKv9qLsYPQjQ",
  "key2": "4CozG7PSgx4uVr9ASABev9hn2LszNfxkriiEf8qcVpTX1rQFkzEhVXduakr2seYTcMkKokprmN8i7ueRCwVhTcoq",
  "key3": "3e3M5gyNrLSUUQw6fjbj82BwHUySWhAqQefsD1PqK3mHHf7CUGKgrqY8v1sJizuFXpLF58EaYYgya255sLUR6QVb",
  "key4": "5uKj6efCt1u4ECVQHYWUeoQLcVgPMHo7crffjmY5b1aSdB9GuyH6BWszbfW3iHGg15JQS7o9F7twfQaiQWY5JaTJ",
  "key5": "3NBtiZ4tDGLBaEMeBfJwe72iLev3TEyWzjC5RR5asRUuk1HWEh6w6MrD54DJhnMAUYf9N6spEmBZuaFB5m7G2smU",
  "key6": "37FLV6uctTvQcxJw96wYaMqgPfjsXztj4UehWaRrdHe5hd4oz7sntnFsBzXo6gtjhmkwdKCmDtHJpzD8mfF19qT2",
  "key7": "2vhbx1EUTwfGhNpDEMBhffGghtXcSrYykMgFTyaA61XPDnj2AvFQukKwCPgXiyEY5ottjEBZMj32Ro1kQKBZ1Yob",
  "key8": "4nuu5xX3veYdkDAKZu1ZNUgdQj6AjtTGQVJtGHv3824TyBnX8NZPVEtUa7L1bWa8voVRfyL5UuDwu277SXuqBsWh",
  "key9": "56bmtFcSrTmtwtkXQHWAt3k2wMggGj6BBFxPWo1c9bVGGJhQva84VT1fCMfVUNYCgrDWkFCbKuD42dAqm379dXh3",
  "key10": "MTzwr1BvLSYmjAKo9pBR2z7fad4d8TaqCw3hcV7fpGazVHcivqScDcFF2mLZ2ab9LNdMhzh7wvJG4b82PLwPn5g",
  "key11": "4J2UsYE3cAgMh4AR2jiSPbHBm2Kr466R5vKzJyKA8L8r6w8FBmV9aAu5xEKmTGGkpr9RAHSZnZ1cwCbt9qoZdJT7",
  "key12": "1FH2G1HWGJSsNXAB59Sk8iiNV6GQSTyMB6PPHHdDebpHwxFzTYewmWqFwaCiFg7yABx7b15WpX2mLywyXCUawJ2",
  "key13": "QWijjyfBEu7MXLECw9WzoqYQ9dmmdJVAU4g59eWV45sGVDRehnRtxe3v9KyhL4phTi9CYXRzCLjbVaEipHYRdm7",
  "key14": "9tuGsdNRaphj9nta4mk9ND5QpQuGoRyBDdDGuo3dv7E3CymzdRveQHG1KA4f1qhcSs1sFsiVmUzEieFWK2goZi6",
  "key15": "63SCbiWKdpECvpF56hdZPE6NmNMvTei7ysMYcPvRv6cXH6QdRDMFv9CNDzP1gREZbKRd4X7jjUAUBZJZAnhB3gKi",
  "key16": "3HwwYheVEiPb6WGRKnYyjYHhGA3gKR5RVrLh4BsbXGmAduYyEHtL6jvt7PKiMJZJZBJ1PCPxcWt9wjjdbYsYrLP9",
  "key17": "34jGWXF4WFKQQxnbAipXFRxbL5shU6h41gH7CLypetVwyk1XANYjRkzbNo4c4u6LCzCfHgAEAxJwwks6mEyPaePd",
  "key18": "3t57bwB9ccxhXzZz5RWLFYKDbdyzTphsi1fgsEstG16XnoER5WqNgebcu5G6FTu9yBbwmaQ7P8rjEEJ7ckgezi56",
  "key19": "GZAkvnEzFCDwY5by9PLBSGG8Foj1mzFJ57ZhCzSKk2Q1opFfKV4QQvPayqrm2yEjvnoaoCsA6KSx6iFTDkSo6j4",
  "key20": "5F1g3ssKHHdjuUBeYjKJ6xctiqzWWimFLhxTbaJ4vZ98YaGNCbmZcfrhuPta972BRTvbA82ETCqQuW5FaKtmXpec",
  "key21": "52nm9TdxyBSCwr2Y8cT4zeS9ZtKpmGidXAiKog4PFg1aN82TJCkXayCuzqdVNdCEgzzs4AiPNkNi6xpkV9tq28mD",
  "key22": "3Cmro4gmnQJ1MErFSDtkHBX1EVqMPvMxJp9kQMjWQnpAgEbpYYVGGmuBN8Qjwtun8jEeY8xWj9GGFyNy34GBPuh7",
  "key23": "3u2ebVtvMycYhdK94rQu9TUEMEEJTNqe7gorNCVptXxcMB77rgrrz1NEnJKBWvtxonC29NC6ipXCyujPgnw3o4WB",
  "key24": "39XUGqKmwa6sw7waPrVPSRwNLdLzdjyj9uQGaWuDyZXHYPLtzARW5qCVX2f3Nx2fU5PgYnP7BRkDAe8gCh6UmSYU",
  "key25": "2okMUvWa5KsAZn8xNhZzGinJCXcL2PECq9SR3rqxZsGd1MQLQzjaPJzbyqH7ZUrA2mYsRYCcaQAmdS3Pjgi54Wbh",
  "key26": "mMig6Fd8pvsApyXsTSo2ecsQa7sTfX3y4QFoRePemBDMP6h3Rm2TKEgkrLLw6e5pfwdhEd7Q4smRVs1LMSnWSeC",
  "key27": "4ejvF8JVy3gz1ViWcQ4PRfjByXwahHxn5NoMkZPESLBZFmVtPRPzsjcoHK5st8priJhrm5dkoQKnuEb3GSgURiRr",
  "key28": "5VrK6azW77UdwVLTc5673QnmdhkbHrZDDjR1Svi8JkXGPbiy73U2D8XX7CJaviwiyoLYGk5812MMicbHes31jkzK",
  "key29": "UvTQU7s9dzYQCGCuhp8sCswUrf7kzgGwC2MkABE8oo4pe3pSC3wQkiQ2xqVDtY7LzgkYkt6anNGGHiXJ1Qy3AGa",
  "key30": "5BTcShKepwaDo2Agq5eHeA19jyreFKTWVwczkeTEQ3aHFAuBmaBdnodXG8v9KHZaBgYcmgshRXoUvd651i8e2oC3",
  "key31": "5nn3H5Dp4cexoJmDRfgMhWd5sjYckowrNjB1w2xpEXqiTR9sYzxbTjuh2q1M6direQUdxYuwdhTBowdX1a6wY9Ex",
  "key32": "zGxbAnVMhV9sdcGgdnY3HqbxHjPnJmKDtiaf1bVX9KHuUtsn3hz12e3hVWVmT33TdeVQdMBUxwDyM7xt5hb9jtg"
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
