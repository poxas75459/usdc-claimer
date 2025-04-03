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
    "6594ZS94nNzSGvueFyzfoDz7QsVCtWy5t7qTXapcrn2q4qmr474dKwgT8ju7XieX6oTc7gY6QtfeRzmDuiGVo58i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QwENquBDovBCBrGZBWrzgKKDCp4gdMGcVoHr115GKWvj4SmTnSFLPpbnyo5hWcxCwPUVkeoFvZtEFi8ofFTD63c",
  "key1": "3EZKtdk7m1ZwcNrDRg2YzueXEiE6PxGyfc6hiiTq7H4kFnE6yxRyGewT16FmDUZjKWTXgSQ48jryGbStkyj63WkW",
  "key2": "4DPQ3iLCF7go1R3S9F8i9CbLich3ETX5rwZ4UPfGhy38u5GjAqGmJ8TDCECpqmnQFsW3Sm7QHNkKwEAauLsxdKQB",
  "key3": "bBkS1HpCVSF6GnpdBgU8uzqkdhFFALWw4rqc5oCdszaR4Ahg5ThNyiVdFGFHvDajnm7L1KUxrpxPvhV7pxCM8Zc",
  "key4": "3qoYwewcXpcXjWj9qcVPMtZi9BAK3uNeA8HWXNLqTspB8FDHuxFt69XWGSzoA4n3iajbz6j1napY3XvoMdNrQVcU",
  "key5": "ghxPLmvXDQASoikBRQHQvXHxcEXBahKexruSDPuekXge5XhA9ky7aUwPA5iP3dV2sHA3zx62PnDVA8RAFzLsYuA",
  "key6": "2ojvTK4CLqQt27ZTQZ59qvcayhwtJxrPz1fGcm2X87bP3RF43jpWUrzkyt7haZSpqnvV7kJp2yuR9GBqNBbzwpPQ",
  "key7": "2Wn1KX7uotj5foys9Jugh8pBxAeGd78KGmzuttUfCdiQSt3eyvygfL3dGEtVdQAuqtJZcqHddw9XnGcvHav3QsXv",
  "key8": "34wvUDq6ow9xn898aYR8vBU1QbVv5TKCfpGmKmJ51jim3Z55ZCxfiv8ucsNtET5LioQLqnyjez5R12pMUE2p2MEv",
  "key9": "2reyYqogHZrfib3kXWpbRns246CzdoxiwiBGyFYX5BjKRkE8YHhEMc5z6NfaN62QnjPt6MNQd15EdFvtTGfYdrBp",
  "key10": "2M5XvevTKiP8Au6GjSYP4KUGaxgVdvwHdghRAqhcc3JQUSTuZZV2CcYQBCFHvmngACkgACCEJ5vGPUPwe2rroJQk",
  "key11": "XvZed6p4AcvfPALi9wadE1iM5oVcgPJjzxPCkQjnUXBEGjY3kPcoq7bJZEFCELZUJb2nRbex9JpdtwHmWAHf6Ca",
  "key12": "491SyXaqEQ2eGjTb8spzAZPmXgUWt5gmbjHNqNxtepu86yddUphxYg8pePiZevmhf8XbjvfBdCFE2VrPj7wfKBAG",
  "key13": "mtuqh3Lxy5dMM1FUpknYdCbAQkFxhTMcstsZfeyE17wXtWjtTuRzuKzEA9yPazfYh6qY5JEKFPHdKSpZKd1ucKw",
  "key14": "551Z85BprfX1ERm1ctxeXFHB8V5EFHbncnKyutytu8uCcnor1fzWoFjDEmAjR59vX1ivQvD8qBrUTESy6kWB85Sc",
  "key15": "4S24KzPGtyF98f7rPAaAMy87dnyt7pZL3kRchvYf3xLNLYbT3UPUXEF27WRNYqKJhjKZLNQAnY6K5tFEaTVzNKcC",
  "key16": "5GAPdkVfqXZB3BVEAruxYCN3HbtJzhFADXKNQa7FvBazK3xUvnPwCa2H3Zd3t1H6EM4pkyfVGyepz96oam1PJUXW",
  "key17": "24fU5aE1xSADuptDTpGWVHpYTYeFDJUZiVjiTy3F9wwDLJQ3EpMp9mjKnqnRyaRfPTHQYMQvmKF2jhuRz7mEU6gv",
  "key18": "26z562Z9EZzzhG6YkHpLjcMRy7W8XuPAXVHFU9Y9DbpfAmKSXL2e7KjayYsEHvNQ1wUsQciAj9MpLr7Hibjtdmvy",
  "key19": "3fKoMTuoYAMiCAPCohQZpxyrUNSxWW5TJC824rFNffeyRm2yrYBpofSLKaqMBpHSh2ePs1nxHxBWuM5iy91iSDkV",
  "key20": "NzeZyUzUknfEmZGAQ5KLuZAfBtsLDsiJoUEbQXZekvGQtkwkMcQL2CwaspRgR31CZD4pLLQs62QUmuosfPhAySJ",
  "key21": "2DSWfTp6GApU8MxC39iF1Hv22qugWz54yY8oZEGpBL9p9tkFyNiS3bFDs2KoDLaYvLPgnd93pZ1QVHX3p5LrE6dx",
  "key22": "3GHxmmUkMvvpSha6gZJ6H5WBsZbu2fWwSWx1vD2bDzsu3pZB1cQdB7jnDoacQj29Ln6tifrbUUAPuvyVuXQswKyh",
  "key23": "5v3h7AiwmCmg75irvLqsDjufMUseYp4E5oovMDXWv95oANrPz1Xf7qTqvcuLdft49o834d6jscBE4qCHrpm1vLKA",
  "key24": "37QTNNixZrpEUprj3p9AA9XUpBLTyuAcLvuQXciCdWjS3dE5DzoMFgYXe6BSeNfgap5gqzHrimQTEr5bxbmgbk4i",
  "key25": "5ngy2gVV2u5EYnudX6aTGENj9d3CRFvMhKe4HBKtQMNB48vtgCyEkzBQAdKWZSSTSsAPYTfifwjbYnmVAXg3C5rA",
  "key26": "3wgrMzJc61sEubKB8YWW84SmSQGrtbJWbg4A9rZREzvSK6MwtWa95E4kt5t5jmyrtWD8FYBcMnuxJbnDe12FGGND",
  "key27": "5EBwu2pQtDe4m2en8f4N5oy3woD8t1gF6BonX9DocBH1h1fMnw9eXU3DB3aX6PzUpXiv7LA8CsjxZmT6pTMo67JA",
  "key28": "4Mpp5r1xwLy5GTUZzwxgEMrmBKGmyxWLD94GQRMhvD1HZxU7wNWSZ4kpGFdB1NqbSWLtwMa51ZVn45V8cwteiD9H",
  "key29": "3BHwrwjNnXpDHonrbiieJ6R1xNjkpMnuFA3bXmXuiGEZtMJfTEkWphPRPYwFLznMcZvQdb2yRifR4ASiwXxPcTEH",
  "key30": "fTWDDN6h45V7QXzoVDQMGtF5rsjPdiiU8k1ndAZDCNeMW54H7iJvny3QvZ17RUJxFKK1fCYbTrtLh86MqYSCdLm",
  "key31": "XDnkXvU6zbVHABXoUnQJtQKi9DPcohhC1d3asDFYM1FybgNESph5eFv6VNsciqLWacA8s3qu7hynJrSUxNnK9GJ",
  "key32": "5Ww9QbHskmAdsyGnMD1WLnAp3QZWUtm89NWY48W6fWtH7mqTCfMh7h1U3kVyvHkuUCxrTy8Ki5uRZGczUu3dZqfJ",
  "key33": "bwe31Kt7bpouZT7CLWPT8XxiPVdVMaRRwo33WqGaCZT3g12sXji6mNRK9vaceSuh77bVxbYnHvDUKgv19WxKYay",
  "key34": "d6teqsHumfAGquR2PyGtmM59KCgzCwYXr2hPAdXPwtQcRe7mThBQq3p6VpvTuKRbGwFuqeyWGqbWcSD3hYBvnkF",
  "key35": "TwTYwQur5aQgUgFDsXAVHBBJRJcvnHPCKEcu4Jupyoa7YhKdGDEW6bKE8SUaW6eGdxZw4GpKwekL7dC8y3MLqkj",
  "key36": "4VbHsVnzbtBHeTBdmpKQLurwh54RZ8bixh9Sk16d8B3Q4KHEqWFMTxZwypP2v2jSyd4GkSUJ69haBxAR7UGfHziu",
  "key37": "orV89v8oscttorD6sq6adR6fTXK8y5d7Cj6VrJ9qrxwWs6GxCdw7ffYLA2AGAzGxd2Wuxikir353Ezen2uTNTrW",
  "key38": "4uTDrScsFBqYpmTERNUMUrkvbwcsrs31qJRFXMJbphZNXX1YpSztQdoern3BzSo7YZ42tG9jAUrHWLyAEtqnWduo",
  "key39": "21tCt5kXQF9e4Nqq4AEPjHfShQU7Fp3QujEp6xqLrheF1Hhrbb3EX4Hx7BCLg4EQ1FGepT1TypEVdqwXWQH35FWa",
  "key40": "4bM4gF72apSdqweNRESj5LsdBAJPKtgq3wvABLyF5fDz55gCSYbecznx8L8vVyU1dy3ay2fgcLJZgiNpVJLc65u4",
  "key41": "44WPz54PxRWW8Cyxxes9jAoRnaq5Vgcs4S8fmqg2crsCA93LoWtAzEafABPoAtKd6G1aWMAr6Tt17bY1ym9yzgch",
  "key42": "4a4pKU8SqoYFdfExYyutNeH9mnHfjn5pTYyRVz8odCymREFcVgpkQ5cAhxJWoHtA9WxpaEDdHZrEUmbsE4nVGx7V",
  "key43": "3DkhAPjLcrZa8Evk4xy371CWbKmt2EW3bqkJv3qVYramHRMoSvReV2xuux6uXFkUAXAWEkQ6nRhbfgeaXhnsFLnt",
  "key44": "5pjNFA2t362aYPm9ZmysF3bhfh4bQ7SNdztqZei6DHgyrjWBhEXbFcbAc43ocLbc5r8YjGaLzYPpRQsP7YYEiCf1",
  "key45": "3ro9K77no9GQBd2YsSSmeRQBhFgZjsjCfTn8rr8voQSwL5HWothyt2qwdJMJJESygYYkuhyyT93KWVySNkrStVdx",
  "key46": "4VuuDP2viJbbHRB1qLHSXY2rKxaKHSt7qSDTg7XwMj3uqLzKuqJtcXC7dwWLzkHquhnmSom9V39zz8CpnhUFHfWv",
  "key47": "28AmK7r6DoCaH4NHnyFcCP7vgKzJi9sbKuTKxGLz8pjiCPVbPq9CaMxWUsnp7sQMbhyUxfRYwuaYeiXFyYd9tqhU",
  "key48": "5r81A5FEouuygVDFw8F6RDnUjcJNP6xzjTuzxfyaszFGwiSEPFxAiwKdmGjcDFmnFGZsJPSUqqDKHWRdoiaCkrFj",
  "key49": "3RjvN8uwmXx4me4tLfVfsrHZHwtguWttXSZiaJzNzUCE1AdveDMLi6i34HUx6frJKLJW1W9cchuh8sbY2rqQCCaw"
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
