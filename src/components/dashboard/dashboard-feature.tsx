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
    "31pf29rL5NfwjyBPLUKdhoKNSGZb54Y2fQFrxVj5dd1BDpXUSnsuEfyHbvr6FcQUTfgQKKFPKQ4AiLyT9LLZhpUM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cv5opKr3wybExQqPyqgXEiovi7gbjfh7JnYfX7B4HWuX1F3gM222P1rx6grkKBYEP4BnRnnijfUNKmfRy5rH1BE",
  "key1": "5FY4c4UXVPXYZVsVxX51aWoTeDSsFhfjkcsBaDqSekTB9AyB5qBhAGvknNZc2hYbZcsvG2TGFf9KoUEPw5opgSQL",
  "key2": "2oKL333vfPHjShQRCGT9qZu4YkQHWxhf5QZeXy7mTNn9kSBnYnMfzBZ9essjPKFJpiufHPtLAZbaVVNzPWVPgqyA",
  "key3": "4Dv1YXTDqao1RXfhDXZBSaPs46q9EiXrcBmPsDVYNbW7s6zA3BvvXyG6KbLoPCzF8km74rT4H6TvJ16jBVsZx1u2",
  "key4": "4WsitQki7fwUF7mDUnoP2mVUu1RpMmN5M9Y1kD2wUJ8UDN9MgtaDR5YBqszXboSM5PiUEdZyd7qJS7eDgXeKhHSn",
  "key5": "2GzKJTWtjkzSgn6tZ9NWzfGTeW1mSH9bepViEcdVkfC9Vid6wT9dGrXfFmxSyiPbCXcBu6qVdWQtVu2WwjYPZrsq",
  "key6": "5waTTiNG8UziT45WoHNqQjeFvZzaKcph3UkBYzBYtn9B49Rp4jxr6uWk6ZKjs7tyUYxPT1dyjNARtZTEx7WmEtzn",
  "key7": "2qRbMYG4MCxwCqEAWK5vFLzkjnH6m4moKWq1nqeqPSGRqLgNapyq7yMDuHsAVmLFf7nLy2mHvWXuBvM4T4573AMf",
  "key8": "5XNx1f1jTftMKxdDLXLg93RYPBjTAKWUd4KUkpxbKXY6LY1wkxhM5Wsqpo91zdLvAnQ173eC5TYm4tgvqnhXEnAY",
  "key9": "8uTpJ3frFaXm9BZucTWKyL7G2CQL49HjPN5yxSYku8iR4JMQGEWbqmUYgWhcac57FJdNFzzRbKAaxqHGUivq6a7",
  "key10": "28Xw1jpryuh3tQK3FsaWeQU1uUZGBmnDRkpTRUSnHseQSbw3hLJfS5FsWq3jgM1hdCECi4iwqn26c6FpzmBwCNTR",
  "key11": "zAXaZLXMju7mDv2v2Ucx7bvRRg9vzLnvSRsbcS5ojpMvLyBM2DNwJtKVfhLGnJr1VzYcfzui37aSvyEHnpMPdQ2",
  "key12": "3YTFvpgq5YR57daStcPkudrFPkRgtXL4PaSLhwkiR1C9wkmfNuLPndjgx5EwXcu4qJ3CS13Zg4G6Mq6iA39etpQd",
  "key13": "LzJjp3R35XnBhVsrLnyV4bUqaGFVGn6weoy1pxTt15jM1gBZ7gzYajdjjkkiyGLfr7gi3wKakvpEcJZXUQZJR3P",
  "key14": "49rhG7JuHmXfsMsM2imr1R8D6RnVVcAXa7FH5KWrp77wSkKorKZMeksPpf7wcymPm9cfWtEHod4yddReqESrGPh6",
  "key15": "738WaUxoDiaveh3VRBPaqrXbru1GsDR8bUVCD6fXGr4hdAXmS5aMEU5NRBv5XMNEvqYX4kpTHaDNus5g1rntH6z",
  "key16": "zr29upfLwcqPzyDUWb7rXbDrZEGaJvwX1qMRFkojueZYRtvQdbJgVXJhBQE9jbxST8jzfFJZzFFWXLT9cU4j9pf",
  "key17": "UkqaE3A3MGWBUS38vW84Rg7LCyvRV8ZQrrSXnpGFmv36MxpaDh3Fs3kPKBcS7qm5iBMDKWfDbUBfMXLz2t1BTU5",
  "key18": "2HvvrY8UztQe2mviX6SyjVXnj1zZQXpGrkkLzif3hPJMYzAaRjk3BuWf4bjA78epaUhXUYKZSJZNZSD1Y3qNizyX",
  "key19": "3xESEUPdoz3GWzVnXN6uKkZyuUCdabaa9LNozmKvKVumV3TqQWWEPgT4P4GrLAeeA6ZsiPkUsstitn2NZmKwu6JE",
  "key20": "2xqzY247qkoqq8KZyMhPUPPhxeidct6ee5rZfzMiVUiTCCe1dRheakRXKZrgCtMvvtonYjeQwkPJ46CWWU9czPJ1",
  "key21": "4kj69GMBhw3rzZeqr1GGsRnb6nwPtPgjJeCkrX458FyJZivc5sHLMPvkJ5gJbnMHf6R953cdMMuTTdATndpQKByw",
  "key22": "5jd6DK3ZsjgTVe5FmrM313EUZMARSLDTrsPVgzHu5RwYDRDkJXDLC8uu8zTeZnetJD824Cy6nqbZYrpZpfcoJMKv",
  "key23": "515kHou6huHSfLuE8uVMQJtTbSdJ8wRvDBGxwEminN11xWKAHvN98PqyqpqyTpKKwWeSpRWa34o3C8DaMM5xmcWo",
  "key24": "62qbrjCF8C6iENHBMYXA2mvrGPDNdpNnbmaPCtiiWCsqihwL1e54Pn2mKLnvDVL6NyVT3Nh61egbDbe8ZsZ5yvzA",
  "key25": "4HnFV6aaG7oqjkgSncvs3P3a9zQyVLtxAH8Y4VHHPvqtKecophABhj8XPyUXygbdjW4HPDtMdt7A9paDvbd7G5H5",
  "key26": "3BaK8KBcF5SuTnqAAsvSjwxUb8KhvhmVobMq1EHog4zJgTymHEJHTMTdY25TsD8Mt4e2VzsQPmaMpLZ7RiKGMuHK",
  "key27": "4WVD7ykTWx62am8g5FEj9uYMFJCiLAoBePk7zD6Sv8dapLwMWnmz96NETUm1FGquioXQG5pMSgXFTxHUyTLJrSUs",
  "key28": "wFQNi8ADkeWc6JtyBKWCd1vnFag3dbGaApYeagqTwdAxcE7X6FJi7e94FEghSPaFUkSoTLiZANiCcAr553mQg8C",
  "key29": "5RHohqkY7ogB7dbYo6TVgqdraoLnvErwKPeBvNpJwPgg6aLmg51QvQgB5NTb8dgYw73XEaY8LXsPDqSJdf43QG7K",
  "key30": "3F1Q1EYPmaMwggDiCcfDU3TjRd2ixuXKoVvKS3BFiRfQCMrfSfXfoEMoWGtK9KXdsh8htMugKNAigdfd6khEciKR",
  "key31": "2TpksdrcEfh9nXMXgT1bzrvS7WkmZJqtDqsh8FvZSXQrK5Dn4FLJAKmQoii4UAwU5Db12tGsRnZp9x1fY5N8iBgm",
  "key32": "5YmT3SER2Pt71jBVi9zEj9QjJdvcj1Nf4R1dNzB3gMLCiVnZcv4hP8JMmbpsH7EvmLuFnibd8EXZ7KoxPUp3Pzmv",
  "key33": "62mEBc9xLVmQLUF3MmhBmYupov4mzdNSAnexentbDA2qW6aekq8NM72tL9LwmCfg4UdtEYVugU39zK2J9ygZpSkq",
  "key34": "39AMNmogrH59gufUDTSUQNXDfdGEZrKdAoAGfA9GADrhHhSe4mFdjerqHJpxH7jQ11nhGNysqQs7bKCJMaanUHb2",
  "key35": "5R4Pg7bvT1gqBLdZCB794nwWBTeLBcrtRMqPNmjCWuXxxQogqvEuq7MAMg8m4FqDVJDy4TY3GEBzntdrPidkx8eg",
  "key36": "5U1Fkr7ZS2cZVWAMUN6p8dLCPnuxx4mQ9NfHGZvXy319wiGdMn6sN6E6Yo5z6zr7EJ9V1peM11RCQbPHY4G8ni4u"
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
