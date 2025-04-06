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
    "2JGrSTd3DU21SzgKqgECVt7uNVhZZ896mGuEvYfvxy59bgGUFyw1U5vYP9ZrUK1uAQrhKTyvY21GTRwWf7aebR4R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DypaNzFG7y4gqWcp9GendmbpRpWL89T1h8NNWLsHQkiaTBHNVx1qvkzF3LRs8wmc6du4LbN8xbMwiZZ1Vjdi82",
  "key1": "4TrrB1RJTmzWSLk7Bo4R2rr2jinJb3mMepMbgLXmsYB7pcNroKvYNrkhUwnjjrbyRLYbKir5Z2panSUxHc828Xfd",
  "key2": "2fTLPt7Tf7scNSgGPDzHtQ7La6JSpqsfVj8r7TDsL5pspijKqwzh6iCqqbAeE6nn6WYAcUFQyXTigGAMNFiVZiQa",
  "key3": "3fyornqPHKLNVr1nbwGhfTqBgRCptG5tJsupjCEYncaHUEFH1gjDtE2erfFA66kYp9D8HutMtDqBEQG4Dns6wwCC",
  "key4": "VxfGPhFyb3MxLkao3qZrUGTD2UMRWuap3rs7tQrPy2YfAMfzcuQYsdpWxt3rizVwqF6t5vsRM1187kp7zqCJjpp",
  "key5": "2tTyAH4KfCXG2y5C1nshpKnzcLxtNrheKkyEkxedEK1mQEi61FqrQHKaqYuY5MZVg3uYWncHkWmwudNd1fw9cWr5",
  "key6": "4nvU9Rk4hbjdYM3kXtsKXbqVJ12VfmFig5oBvYY7RA8brJ7V14cxpjmT4SHxCBL9drGKxugA9aPDPXGc1A41hxzB",
  "key7": "JRop2fnhnRYJk5ZgyQU5F2GT6HmutbAuYf8zmJujt5ixbMcQfeG9frngEas824SPut53oDGN8D4hpMJGzVc32iN",
  "key8": "wifpVLuBde1egCaZdRL3FF1bxbkrvnjL5j2Xigq12p8ygfRJye9e5ZozwtGhD5JWmHDjnVYHQmWXbsF1BRSa8Ux",
  "key9": "5RnjsDzTTDcfdrJNAYYe6jbvFwu5SMCSPJeMhvurxTXhsubVJTH3uXxN4gVthWjLAsaxjZwHFhiE8FQZYNcPWKd4",
  "key10": "4kWSFcmxEzDpoLSpZHiJwbY9L8dSyH4CQtesZL5MFcEYS6s5xPgWWr1Jui3pVruV6TdJmaSxdfP9xEAD4GufAtpA",
  "key11": "29C2NgWTp25ncMtbQyoxdnj1NDry5tBz4wUkVBpND27mBjAnhNb1aziHu9EU2vASdoBqvQe3EBvZkaJS6zgvz6hM",
  "key12": "2PVfSJCgcBs7xZ6PoJixe4zM8gC3CmUQCveitEJLhbv5Rtq1r8vrjF4AYqjer9GTZsmhdcAfrYEdkNawRD528vVC",
  "key13": "5vAgR3Qek9cy1ig6QY3UjDPS6v9qMZwPAe6EVpHR6HYzSDsheZzSfoKqhMuznuKFLaZ27gKJuQGkoM8jvZTEQZKP",
  "key14": "2HnXuBo2PUkFSwgW4NX9TCR4FjocyhdQu34m2BLmKh18gwNQ2pU4CQARdCi91NaoJM4U2TKCJDRXSmnCBuiJVR6w",
  "key15": "5fTbDx6Fqwy6uz5eP4HWTP6RyrBocN3b7uXvA5Nsz7v4b9zsgs3kdeffWGBgJs9wrkR1LNrM73hf9t6PQ5NurYGj",
  "key16": "2ycFv3ufxm4YXKhs1fkui1DDiPV48jaFDsiwZpzNaUKEHKTDFceBgQ13oDrTjFNaw4kCeNxgBGDV1ZnHy2yREUXx",
  "key17": "5NqMa9oAj7fxXrpUYeLXoq7edYTwmReFdcR17P4adj8QjJMZdukpSUqs8dcAKvfc9ruUCH2z8oYqF5M7JhAxaEtm",
  "key18": "2H8DgFr6cpnAnP61o6poF23AdkaZA5dyBXmx64zzJCLhcv89DigfKhQndHdhe9KNrKvdzS4dzC4kQZrhFZjEA66L",
  "key19": "61xAPvq2fbQYMYe8uSBRcS5HGuCRc3zouTBuBLstcCPebjmEwJL89YqznAL8ocSn3mhVQZzPkfaXh2VinV4JVprZ",
  "key20": "2YcxNRsK2A48bqQ2sC6WXiWR9rS2nRFF86tMJtAzeXsYxnAFYj62bzBHw4MekE6d5ACwDtuN8gfCdP2hwSi4ZEQd",
  "key21": "3w2zZEVpyAzU2jDMxc5SyWi1jQebRJc421iiYzZjSz79Ro6QHZYK2tdJVeezjhismNEruQEUPimpWDXwEKzMcCK7",
  "key22": "5Ebfi7qi23j5WntrfoUijRNu8gD18xxsafvBUk9uLpq4fzai7K17RfZideTytWdURvR3XYoKziFejqRxsBsRLEJJ",
  "key23": "nvcwL1wGFGvc7satB9jctwWJ4ZY2CZkPgZvpGJBNkZiBjomFPsvY9WQCuhaZAfrVVXg216CQKiUieU3JYQnRTH6",
  "key24": "4UcUHj9gUiuHsATo61mJDomkRFmfsoz6etexsqN3BSFfVfVKsUkqenxE62Nnn9yASJMezc8UbHrjMLqBEn5dnxMP",
  "key25": "4NXRJH7W5SnnjeHUbLzgqUuwiPBLaUvutyy77mq32TpfignSJAEKJiyeMj9fj8B2dTeA1rvEmAvdxXBjfLQQ83r8",
  "key26": "2kDxfGFLhgAHydxDGt3S6VT5tPu3v5Ds7z7Pngy6qNmPhGdacosgVvKfs2DpUrxeWAyZiLFA53KR7aqom3Nk3vrJ",
  "key27": "4NUjHDt8McQNQ58biRJRjrQChFbfjq55AT4Y9FfGFaUM5oLxhqBitF2ddjbGuje4uQpb2udofKgwS3XdYrJrZwUc",
  "key28": "3Vaf9XZL2wZpNYKKFLzpCN17wwqSLeEf6Gy2N3aJfuUJbinwXUoMsHn7hewiiHkcYjTj24SrERg8esvn3ZeHrCdX",
  "key29": "2iAZPq2ukZKXYQQHZeTG4EubPBJVVai3SjwyxQHzpmaGxP98SukaFgrRdgnRJi6s1Xi9YSWWS9nUoW5N4V2oZyT4",
  "key30": "2sgonQyQmXaSGPMqohSRPEjDkAx59TTBGMFHAZQeujJNfDo7c5MDK2rEBE2JPuQwidVZJREt6d3oq2Tdu31P8chK",
  "key31": "YuKnPLfzoXLuMh993qFyNFEkA2Cd91JmFFN6R1E3eLiBGKDkYrVG1oHTdBk16qkVqdhQqA5yyPskEyxyitixq9C",
  "key32": "2LrDfAPcPXJwiCCKCuCMZYY8aJZ2UaPtysPjb8fTTNopZrdYwzqQYEDcc9eQYut4wNngBA7Ezf4GsLLDBtUmb3WG",
  "key33": "2ffHceD5aYHoA6wG7mXSDNyWAuVfHMSm1mdxxSraHjFpfxwu4nFA2tMTCPL1esKnetKtGK6HVucQMmhwxuwhZQhg"
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
