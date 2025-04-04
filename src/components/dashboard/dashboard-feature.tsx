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
    "2Y4xSFczQPEKEq1ZN9KeAyy62HcxiQxb1qiEoFju8R6u8tHpyYypHeQUpdLzrwg2138htSyEmw6MEaUkoNGcCSLv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bQusbT9sg6Zdc8cwKgmxwxnJvBT722yJthd7mahZfPeddpdDsVJy4YjGQej3mS16k3Vr5tYa6AfVcHGeRLCmF8b",
  "key1": "4GXwqe3QPVBoKzZheo9RdfLKiUTtvPorQCbxTXcbhWUoodZXJ2EA4kPJk8DGKrk6D27H23pVRCXmgsRrNMuaWWgq",
  "key2": "B6JkPgy9UjSDsxPcqG8goyrmJa21S4tTboxr3Ktg1cqhn1uBbqLYdLmGAGZtKrog6HzoewW5xwW3x3aCwyGCfhf",
  "key3": "3vPjvKyGqzj3FPUripKSWcpFNKppVa3kAFRngy7p8hHmPGxJfwp3xVv3C8w2cJbhcArU4aiuy3uvoS3g6khXSxyn",
  "key4": "21oC2QchUU6yZ6hdf2hyjMuLzxf9wasyu4tjp1qXowrQUdMqxpc4eer6yycF6VeDYcQwtLqt9yNNHt8vWV8YUZJH",
  "key5": "9v7EWqzmfduCQfGeoY4p96jTSvfoSY3ru3W6XNvVPB2yoAB81eipVrKhXdeekd6gn2aQG3kNhs1WupuCgQhg8Xd",
  "key6": "3oRpmsKAsL4EvSjJX51HZfAvRuKPPBagTrQJPQWhkpUB4iS9KGEQwUCDiin9zcwjxGwHS13SJ2LhbhVMzAC77MHT",
  "key7": "4Fg2kdfAZka2ot3UApuMue6TjU6AqkNb3mFdJdR7qwQrtouKbsg5KHaKAt5r3EtsYwkGBKaZ8yxhVJk3DzBsysUp",
  "key8": "uyTyThSrL4ZJvLCtXoUHdBM7YiafvzpSx9JdDDmGhFTtLmFHPjtk85eLLP1VeeQe86uCAyBSdgKVSLRVb1r6SKU",
  "key9": "3YADzdWwBWB9WGeFkqnieU4e465XvocNn5jVogGeJeRmY5So4SKmLViXm8FxhHWPHuyZgSstfN7Ntkm6UzRmzzBu",
  "key10": "4EfdLtaFhiP7VfkotzKsM6gGeexZUByStjDzHg3QZME1pooeafXsgAiY43DUW5vCdAukBcYwhGrtQ2XmSg6Z4Wu4",
  "key11": "5pB65tiLceWQEWbVx9BdVaiFBo4f2yRyb6iPRpngQtsipxyMDM7DtaWozDzwHGU7NvZx9DL4gKe9ykdsuifkjChy",
  "key12": "4dGZmddKnZKckqPo3RQP92tnopjf5qgWdfJ9qsoYUUCHhrHtkgHbZQ5KZNuLa4ddJN78MYv2cepAbqHKEUJd2mNw",
  "key13": "2wx5Jz97mr9BD34go8yCdKycwz5MswnUzy4QcWxjEoqVKYNNrC8ruapP2A6yjiXWbnTewJkNLK5JPqgnEpSLybD9",
  "key14": "4ZFe2HCqkvEDzPp5EHyc6ZabYY9PiGmTcpZiWQfkix7bzhHJRFgcHwSL1NRikMbdc3Lm2cs4G5rEhhN7GQqcyAFP",
  "key15": "5Q1LwRWEpE46MWKtekdu2DDVHme4YyxsqLRg7fYpY5FByqNhVomQghHz2nekrucFhF5UkKaJysoeXGGbkecqZGiG",
  "key16": "5Wdj9XuKuG3oxtMcTr5UKo44BF6aKbsw1Da4UQiWouaFpvQJRkySgRU9Mf9DhUNxpgceKqSn4tuwGtBUoEpPR6vP",
  "key17": "3u4eq9GBAgeQb2xeHPhexQm8MjcbdfJjsdc1D3syBaV53dMk2k8JxTXYhknwFQUQt3RbZBGCWjBpbARHSPhxG4aB",
  "key18": "3eCyELdhp7Ta8RgqqAKXcGfAF5fcskNSJWT8J3CWLVYC37qiunhdzgGtfDX5kePud7gnVSWjD1G9n55g5uNkJmL6",
  "key19": "5sjby3CATbkAbX6LTwB5uLbZBBjQTNGBuZPAQ4sMnz3jmx5tJWxhWNj4wAhXyAfFU3CZL82eqhcuLS9r7fiab3Ti",
  "key20": "5gmndumyXN9qUmFzxcoKcL2y6Nxkf3rndrfCzKE2YohcJc8aW5kKQjPmFzryQpqXcom53RsH44iiZL1XesGuUMKE",
  "key21": "4YxLMnrGSn81dArvKmsA7ZGi6gkVCSxtz9DMHTWPnadAXXLpLkonymsokikjK7LDfwNzZMTpqKEycC3ymbQRnSNH",
  "key22": "2Z8JZ4hJmJM2AE9CeF49qKVcEt7M7F6JqDbbNtk1fPRcPYFHdQbTvFm7scRmdeJZVBm8xiyQmczocpeZnNdEQSSN",
  "key23": "3nCbB1E1aXF8MyW6hBR3iEysK9wo3mRosFyP8jRx7fFeCiV6bF6i4dBneZs3VrCD5Wz7m2QmvanCKq3NKktd4dDf",
  "key24": "5sWzD6SiXpqs1x6CKewbtQRmW5jKjHkEaiEq1iRmrHvumPJ8BoTSDRJgZVJBziyrxeRLgw64238ZhpeAzg3HwbiC",
  "key25": "64i7jUajJKAWQgXBB243y9KmC4FMXuQENNBEd4Js3E8fKaNizZagSPsB7T7QuVuCnYXazSQkKhhfzkdf2FkSirRw",
  "key26": "4vbcYKjLscgpCsv3f1LGvLDs35KPic3uPgyXeTxXctUYMzhCaoLnbxQWLbpz4X7SkMS3jHfz9vmPf3giRruyaZ2j",
  "key27": "5VRBfdZpF2rzT4GM9s3dUPBfSoq5JJ1dc22cGXFcPc2WMfj5SeseS1znfRSHYnsgrP6TkAsAjstygxjNPbz3Tazw",
  "key28": "5xTock9x5TFQ1x1SCaFxzg7sou9JkqAGzBN1ZywNc1bbysBdCgRkAKU5H1mJufEXNRbGi2ZM3dURPuRSDtpyPxrQ",
  "key29": "5M6CeXRf8jtghQH9scifPihRX42nXiXUdvei5gi7MNnWtcHHMSkZt3cGKofcaqnGPd6AuiSAN1KDYkESdioGdgUZ",
  "key30": "3o4tcxT9puTKPBptcdL6Loaeku5QYwrUc79puyCBx2JtfCVGbD78hxqkzSNwjc6G85hweuGAams42JASCfnHM6mg",
  "key31": "2XWtUH4wfStZdNh1hXUiKeCRTxufjxLxWMHiM3pFVCzb792mnhUmjADofq8UBmdUEaCLLSRktper1R9Xw6qZDW8X",
  "key32": "2YDUu1iWPWwzMm4MK3c8uSS2UGs2knCMYsD89yUagdVW8Vp6iDGDX79NZVfHisWNvZDznwho4zBZ4ThVnus7tV42",
  "key33": "52GdJX6KnymYCtNiY58D7rfBXJV7NfwkvaYMCaeFveeL9AA5EV8aL3vpFEdUe8DoYn9W3uwEppTLv5JrkodPVci",
  "key34": "71vT8NTZCQAc61db2x8JmEPrWnLGCpcJYJZo2DBkxDpNoSdtR2nd1mMqEFkmqs8PKsoMv7QoXVgzXtBqHyW3eUh",
  "key35": "NEcQSYAdXp1dLvUHG3PtyiNcfjRvVnhJdi8XxE3gqAsGYhojALwELBBft6Q5JrWQZpUi7Ccdkytd4juwgctcq2b",
  "key36": "362iRf2PE9iaEZsuaEHYFmSDfR1RT5BMQqtNiVBC324DWbFNKmdKakAGW9YwdYp3nTkSxFoCQdhPKsmdSJ4XRw4X",
  "key37": "62mBNZm1yXfj3Wzt3zXjeqRTKQGLdeBRJxDDfA1K1VwwjbWvmKmaf4MTXoCtbJEpw598PaV4kmQyjwWsZ9EbnxVW",
  "key38": "5gKpyVKV6pz5ofDahzLM2R4yEgLpNLRXWgKEpBMQXpTwSKYfo673aWCT7vTyqVJ97jmUp9C5fFz72egZyuS1QEfS"
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
