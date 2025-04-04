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
    "6T7pn2ffKYVR4KpLhZLH3CTVZvjHYqHqS4HYCQmTrd5K2cZ3aW1yH9mtEDNfmGoorV9hY6vEvWmL8hu2WjJFCpF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LQ7QGMuKMWagjbWZL3XoRJwcVyrXS1dkXxVoSET89yemhjELkrM5HrtA1hVGk6A484eYipkgkppjgDuw2Pt5i3U",
  "key1": "5mbWs1Y8YfpE1xPSSPAWDj6oYzC61ZxWWB7CJmtzPUm3JXp9oc2aAmMT8wD7efqi1BtEKS1eeuTybT3g7FWfLQYa",
  "key2": "2y8UNk5VeNzdUx7As9qKvXEgDqktb8FRN3a2ULbtArSicKMyQ8TiBRzR9RhYmeTbSPKCouR3mKW26FNDYWPhL41k",
  "key3": "3XzySQsyLFREN6nWXpBiMYUGvXU2NwtNT4TqCCus1EyQKCfsvnpg7xEV1dHeJQQDx8nfafKUS8u2uWmy5mFemVyQ",
  "key4": "2GmQPTqpDeZmRimJzVLyvsK2qPSD7sNUe3WhBF2q5FeVxtW1yTNaXDUFsxxwNhz8SoA7QN1dFbugchbfCiHjoxSh",
  "key5": "66EcqXBuWWQwoZS1ym1YoB4zmmVQXQJAyEgKeyVBKPpU3jxnGpTnVe78CzsB3exj9DFLz5bsimSHbCYXiyX8dJX7",
  "key6": "5wGTNC5cXjT9hJzs3yB6T7JyqFBHVVwYKUWYzjLR51zRbGfze62oBJFVS2FUpSd2Akcg5QYYbqAtjMsrF6j4aEqD",
  "key7": "64ghZMshgAvSSs7ioYTyetDNKi7JHQXkSc7iPxiRYtCyrUnK2XQavzWa4QBQ6TZ9c6GX6gZdg8ML95yRDY679XfP",
  "key8": "4FbfLW2PMTxFeufau3uAvcCvm8R4sFbK9ggeS34peE1vzrHH3SjZ1oeBUeMoigYPfmb3NtS96LdG2n7NNhW5s7da",
  "key9": "5tADnwcVBfPbMdeVKyikeoGPVUTyqnRhzR3P9xuibnWrpq9m33evBcEoZXKszQmDvbA8m1Pn1GDkrhiC8DY1EyGz",
  "key10": "5hyWnM818GfA55JHetKUfS9LT7iiBaauVy6nv1fHS5Bo5TdGBvVegBcR17wvQxfxEi46d3JAz45nmqoHXmLtgntY",
  "key11": "29TpnCWmr49mrMNHTVyEQGzNEcLyDMJdBSCm4p4nfkAAWoBgmdXdDxhPdMc3hEtuZzi5Ur3KPtqbgJ9p8xWTqSrv",
  "key12": "5kAUoZqB3aLVYJdfJY49SboBhy3sNwfT4twKc3M1d28e98Bd96ci3cexHxopBYW2vM6Sbb5GHo9DBVHxD3P4ZviW",
  "key13": "2Q9CdarXUkFpCVitEd7mtvfdxwXqpfFvPeBB5Bx4bdqgcb2zFAkVc3j1cbCCkhtyZuxjzvcjAE7MjqdRX8HxmhrX",
  "key14": "3MAPrACDLiCpHPfF75qa9BPPa9wFCEWM4BQBVS63XMz7y1WmuFrbUe1fp3vJGu9JqP6ynZEKM254SXMrdVALXx76",
  "key15": "3puAeN1g44KTZHMrx3zCZKvvMN9NtKaKk9zhRaYhj1WYetkW4Diwy2Lqpbp4A7pdGreJ9BmAY2eLfz2cPXuJ6jTh",
  "key16": "3ytrWPDqmNYBRpfZe5F2wgyMFiDpYCXroaGQ8YVXp3KuyH5siWwA85Lqjn6hoEqv8RD5aUusR5PcEyYvUNuuTH53",
  "key17": "3AFdMmxmjWJXEKnYBzjma7oR7YFxoEsHbK37Qbo7hmfirEXACHBcLwHZVmaRdax3Pe1aKvy9L2zgiG5YaJmETeaF",
  "key18": "5AqByh8rktPcU1VmYc6Zew5rkAXbMtuLLUXBDnmJUQofLhypzvEdEvtq11fBXm1GfQabkpWXjjJJFWWtSAjpvP3i",
  "key19": "JLHqj8vJsViZJHwyuYkoUVEytw34zYw3WfeBLyVCbC4LSDhUrmznL7o1HaiAR6JxbPLTHVjSQGfYgGRjfFpEP1z",
  "key20": "CidwdVVBnQy8xDaAPni6zLPyZB26s3y3mddwcWoyjoT6gc5fhsumQ5NDuC9TFZc7TiXhAnwJB2UBm11rv1WHtpz",
  "key21": "46LnskiHCmaKKoo3SqtxQqxUHKkgCqr7gJt556ppp2vWLB9efHgBRHbXB5uJaNqUBMW1LXa9X6rqz2KhGGBVhNko",
  "key22": "4W23DvmRyrdDLuy9Gw9nSwh795r1BUvk9TPw4Xece5uCfKhizq9ZroujZK1ZYmtMvDFZc5chNCW19soibr7wJpeE",
  "key23": "3dNnXCqJ2jE4hFqy2kGLGJYDccVvLUkwpd5mdGaCXJ796tzkmhPPbhguyb6dmUxEDUpHTe6SRTa5HYesZCSgTspe",
  "key24": "5MvnqVtgZjQEShzKcMzcUm97HAHvjMZTpnDH7znw1Ws4McnsdiGd2ojdABdnLCTCZb81zQErpj1pXM79hX9SRHT2",
  "key25": "5UhLZ2bLS9NZ1c6VPGvTSxwjRhEVU62mKKuARNTnkYBgFD8YAD9euDwqpuMaFMFp8qDvpAStgYFYUQfF1hokG87L",
  "key26": "2tPXqVa1ELS4xU2ZBVLLJXV8z1KSzACGtrGBpsELYWiA29ASEEorVkrW9VRvgoLMf4pmuo7FvmDkBT7rmpZWpBdF",
  "key27": "2vNy88XpFgdubLBG81V8J5GuGxrM4waXSzKna24pHMSXnVsayb1cE6DNbqqLMeZ2Upbqv9dM7LJM4Do87EGuYCQE",
  "key28": "46Xm3zcBjySpLpbHdFF8hFYzmMgBXYMVq4HP8aeKHdZPhVKWe9UoxsvjXzAeWbeA1sKjpDXF3wNZdzoDcGh1SA2B",
  "key29": "3LNxpRo7apWdBE7616LiS4mR96r6ZSRgUydnXo4sbmaCfnTNNncaE7Mkcco6JfVPisj3LZoj1AvvVAmh4FR5rN4e",
  "key30": "zui4VGERqp7R9u2EJAaoTbaF2PLhYJcR6r896LtGkJjCHSMaywLePEFtrVh7B1BCxsoUgnsZUcxNBD9XZ3qyrz2",
  "key31": "5HhH94Aux1JszRxyodxnQ65jUk6kArLmbgcoZuUxuDBcdsQztP9PSzp2QAo6TRus92SkpoEKbEQbvW7k9xozJYJh",
  "key32": "6xtRKqCof9VhsZgQWG3jwKVzRbJqjgZRoXb3RcmaQS9CaqqUmGqtMo1BYASFXBZAHzqmQGa5azhPAU4uNHM4Mj6",
  "key33": "32gf4BQKrPSJHaQ844WnJHsmkDVATpr7LhyUXJLXZ8aV9fEVvEfjEjSm7RmcyHuERmj1xHUd7QchyvjX5XR8Fhgo",
  "key34": "2WHpqGhpsBUSzZURYhXJ3bMjxppKfSj2GdEGenvYbN5pSgrbP1N4DqqMMmoGBLPpTfVvvYjpmb8LfCgf957RwU3Y",
  "key35": "3CF7C7robpMBvsv3ZFAHf4Pbz44veSyu9NTtsPdegHksLiSoD3T4qeCqfQaQky17RpTikX1uc7zBSAxrUAXvEcr4"
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
