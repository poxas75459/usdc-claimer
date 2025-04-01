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
    "3wy4tEdh5BUahDbLotTFU6q5UwNA1RZaDGLGwK4a59hTzouWt2rHgR62CeBPjdG6x9VYp8jPypiaUS61QYxE8BDJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZNb31vwFuM2CXEHuGuiUVYwWt4F7tvsz2Wf3PBLFs5AjQRXFox7LjpcCXUiRnnCpgYfE4KRiFqP4ViQgvijAjod",
  "key1": "3sVYrzVoTmMhKXgJPRK2W5vbyVodkPzaa5ah3Dv8JkqWdRAcvPiSaKUn8uVtPcBDQpgaU8NzU1475YPmNRg8u2qW",
  "key2": "65JiMW5ux52oUahA4LEdtMXjcSg3zPEGgr22caQkJBoiwYbnhDrJttrWRK6Nj1g9Zvii9LALDanNXVhnqsU8uKKS",
  "key3": "26FCBJ2if6iuVFpHnAARhkGkvNpPKEQQnXzYPNNdLMm8Gp4S4uj54iVnETWHnL7BdwCqeGReLSpVcpCsUojDS5gx",
  "key4": "3si3nAz2qfw8Pu9gPhXYNYae9CVYcWs8KeB6iB4D5C5JpiZ7qMz1H6SJDJgCv33GaxJc6PrQ6h9bkHR4ri2m2Uqr",
  "key5": "ojPpFpk1obWfi7uD5opyEy4XReo9i7DarmHwLPrD6Pxxm4aZidj6YZHjk2BMzBkupG1fPkPwDYwDteqhUUbG8ur",
  "key6": "2S2dPFQTYQxPSGY9rezHSdiva1NrV3fFKc3aZ8sHF67adFaq6zDWdu2xXakB4g56rHt8EyG2QkHagvXTGWmeCezv",
  "key7": "4VG7yJk6UNwV6KjJpjVSE1hSvo9HcmgBY9jtSYq9pnjpabVnPmZBQtGkmmVTtWMXMXiw1ME2zAckjDMJj5W78w5o",
  "key8": "65D9DcZaAQywhaatQB6wnXDy4A6nPvLBFyPVDdaDvnZ8AatvEBx7FTy2hSXx2kgSpSEm2V6o22UykHAb3dnHhBmF",
  "key9": "xhqXRv6KjAuVtp6b67z1oni39re4CqfBprxUwm1hiNqmpzBsSffJYUdrtBFxcpifxvzLSKTg1kyQGok4qubE1yv",
  "key10": "53JFAj2xpamRfo2okaBKscrN8tMebbJunsDdX3CfZLsBYSqNuava2N3FrNRG6AtRrM2W58pAi6oKagxF7otzAxQG",
  "key11": "xAuFMu8KaM6QmtDxQaqW7Q4QhCS5xVUohMpNA7UoG82fRsnFdfr5Rp8oq6TBq7zALHGMi8hRiFkMGnTDjjw9wmq",
  "key12": "2eSK6vUPZUYM5G2jA4hZo5FPsZrwZYuobETo5J88L3DSxxp3cgA9kXjceywiEkba4KxgdTwrDkUC6ybA2NsWPiUX",
  "key13": "3F3SQyiwD7J1LirJHo5bhGNiFA5Fsu9QPTM7vxz4a4Txi1BPC1bqE8vRbmkGXxq2yAAPit4hWwXKDXDab8qn6Skm",
  "key14": "3tqjRUjUhr1rS9Xeyf4oGxg8GPcZe1BfJcdumzaqpAeha6Rh8HfnEepzxbTgp4xTPVJi7gbZi373pskfwZLTpKMT",
  "key15": "5QFrQBn1EdxP6K3sXeyacsk8i374DaCvzFmYTS8G8ZaRyVUtGq1CeCXs4gcigenvarW18Nw3F2EJ3Ayzu8syxKpU",
  "key16": "s1hUM6Bf55HsV86aCXMgBERCBFMagV2uH9tkJgmaz5pQKHTJTndhYygEcfPx9BNuyTA8yNyQbJq7wpTKnPweF6s",
  "key17": "5iQsKmHWNAqduQ9LSVDNGaVFreH5sCuHoknQhHfK1HoxdZWSrpjukWpKB82FTWzgBoNZ9bi1U5iZCxbsQkDRDRmL",
  "key18": "38UkgdATwj9fBNC6hSCzDDmZwUUEtE6tFgpfMDLfDApF6MLwe2eXA9eXJRB4ynhGFLN8caV9tCWTE9BTVtVwA3Fk",
  "key19": "2FqjkKToFhWESjnuVxq7jWn2MoKK7kvorEzmVTjgT8B417Hci86NfnhXFFMD5H3DdxFsd4ve8beEFBfLrE8Ldszi",
  "key20": "2byBxFXsNrvXP8gTex6od82Cy2oymyhG5SsKA1awiaAuhuexcmuLF1kQrNUXdFsduMUsVLNXvC9v7kuhqnBKTpNL",
  "key21": "43JuexEQiNR7ofjbnmMpw2W6nnTWDnCH1RrjEYGQNYwHYHF8GAfDsrT8m7vqVB8NvuvGXrbTtYY4f4KUTTbpmoF1",
  "key22": "5LwFnsQYF6X9ZwXCcTZEtXyrrs7TVJx1Gh3QuDioY6FLyXnzRY8F3R6d3QxHqtvXw9hFWSWeSSBFS6xF5bWTe2Ws",
  "key23": "4vidQaSkFSKdaYmnRL9WVQ8RFYf3JpG4YTti9cv6gqus1UfpjNR73uSGk6PeFcVquDQ1UghYEUjD4wmBHW8oohfT",
  "key24": "31rAhp9ZLQVhqKd6Tx8ik9U1DKgAT76UzCxbQ5ibEWunPfTdC56tHuRgepma61LUcp53nrjfZiZ5fCJLbZfTMHr2",
  "key25": "5iXUQ4LnP14YnoFQgC3eoNFn9okHDLR5JSE846iaWNr6P81BeKMz2p7i2GJmpMohcMibj2zk4oQhKmqqacZM3pxh",
  "key26": "MUkG4Q8CE7FoEXpQ5UUUWZnFjDnAubjFidMapDjEyjY5d1FQ1YzJh6bFE4z4DRUBgkGSYeiGEbFxYNDR263n5NQ",
  "key27": "67YijWjcSYEZoAWbRy23jcZ2dAeaUYrFyFyiRY8EdqJw7JE5oJWWzCS8nttT8EGnGd6bTpY8FMLCuQgrcxraTwmY",
  "key28": "28ipK9sGBYKgwgjEMVYhyWHJeWrtSXRvm6LfheU6fdbfB7XGF2EorTGLA86weBoMYZqJsQ48wmt3H5nZYWAkdbgV",
  "key29": "4SuEp6qRXV1sVcGDW9TaaHKYEkx14xq8iFCnreXVFo4GxLPUu45ZeM1Yqv461CNMyV9D5e4VNpypvWLEQWjuZN6f",
  "key30": "epDA7vmiXDijqa1Na7jtC7tDZKvyHoJepneuBp7RH9PnrRkJkMokAN9qtNVvahM8rCoqBTXDvmxxVZUVvktX43f",
  "key31": "2C9wXwCtUV25LjrC1fAzHv4amo93mAYEUmvYpgNMHpZarFnwX61moYJgCQj7ePK3UQoVVpQNBBLBkGheXiybmSg8",
  "key32": "5ZUeJScPZZgfGLXQdGYpCBR5fUgdzCsAm8W3dVVKo3BtzLSHP5m8cadMey7PjxfHyXVzn8kMbhXWkqFUdkfA3hcH",
  "key33": "4bqe1n4fo66pKPxHFCEs8GrytCHrJFieFz7pKkKgsLFcSg64u9nMoSfXAB2kjgFJX7LSqjdjsoRdMg9aQS1tPq2x",
  "key34": "KrAHXPqUjMuMirEWzqKzhAAKvdvTg38bpMG3xrcDzTNX5GngXuJTBimQxh3iMzFWhD8ZKQxfdpmVhrtFM2jsTS7",
  "key35": "3z8oijeZqu8wfKGVExFkK9Tj9qbzMQP8XvhZ7Y6dLNxGhQnvVtcxPaCLBXYu4udVk6yXWE8LKqeZms2QUShD1ARY",
  "key36": "5YZj3HLw6ETtfGmaSu1KkJZ1BDneXmRDJDLVkbpr4bDHeyfdw89cwCqWDSKuko8kQqHEoNpcMibagMt3kjTZ2C9j",
  "key37": "4FpjkCsNd5Fdc3jQ4cSKh3z22Qyx1wF1zn9ym8UX1zw12N9YeJx1j4STHx98AuTviYic81qKuoFouvg6iKWjmMhx",
  "key38": "439hR8uj975k6n6rAsVFjL6WWfCtfUgphbaSyD4tmTMDuD3NbqHKx59u597Ynd3PRmUXp1nFTfUCrAmr9moQAr3F",
  "key39": "3YNYjAZqJ8ZkxsDwK9bMo677Cv9EvFwqi6QoGEnFSSjSUJbhBNAfEtbvUaaLnJqp5CtWkzKbfT3eVg3jAMnhdBwi",
  "key40": "3uxvyvjvebZZaZXR8qMhzA5dU9UjDHytLsjHJVZaLKZWwjsTfcfTxEDne41SEqsssEvZoH9iGs7FxW6QNnaxkaWC",
  "key41": "2evbNJazn2MfGT41ER6uLdD3cLRkz15uGjkrg8V5NVjh9wBXVo4mJpXh8FXXrKxCUtAgTRabdZo1kbuKWgeHPs13",
  "key42": "4NixhZM3yKSQbpk1qc8b473tx6cV44c8W6MgHBBXoeZJw8ucffBhPsXq8XMkdNFHuVHhndQpvT97uERFaHWY41RK",
  "key43": "yk6JvxutUiEetvt3xprSR3cMR1QHUeeysx8f73nkxMBbGaCLytjnLFJ4Rr8ZiaPMKw7Z3QvGk5pxrbFfjH7m3jG",
  "key44": "5okUeq4rUDzYEFy1ba5v5sRrPxuXa1qq5NHJpxbcL1ungRuFT1H6Sv79YMifxAUC3LaFPYNnc559Ua9FfSf855tb",
  "key45": "5Wse5wZ5Xts1jhMWEPzfqp1RiG5ktz87FaNcm9zpFfFQremj5qxCv7rnxWN3DtA4Bq7TdweLSGuAEvcjjvKg43tZ"
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
