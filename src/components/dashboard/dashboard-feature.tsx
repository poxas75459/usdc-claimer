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
    "64nDsGdpydFDbeJ5dbgVB5YynsTKDWkcGdR5KSowsZCZjYXkyPpKqzHWLWxQrMUgs7CJNVojAQw12z1JwyXRChZ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kDpzdkAKmiRRUjFAPZ4uNCF4HDUeXq3m9jHPN6Y8Ak9oh72v7adHuPRtehAf5jXZVcid1C7GfNmD9dBpUhhDsW8",
  "key1": "31NfxpVx1Jjo8uU3R6gfU3oH2oKcPPKV5bZLGfTXwnW34Du24iv5txBhTcizXxRWCDD5jU4nGPoXC7FxZnW3iw8x",
  "key2": "8uceVFrKtdwuUjT3k2KX8HAA46YZPKu4GxeBVFbBXLP3vAEsNw76tSe8qserTgWUfmAFDdFw4ESESvDGQcSo6RK",
  "key3": "471cHd1ypP6sUfxWbMHR8SwX2Bxz6w7xbB8ZJ9WiQVzP7fsoBbCPo43bZjnLLVKhvkwFarNxb8q5MUc9tBR8as4k",
  "key4": "4kNgPtjZbQqNLDBKeiYiu2EFr3Q7d74eii7bQn2YjpLVLo1gGVFyKuvYowEtwurVXaooLgEYpHPvdodrNcX5ya8K",
  "key5": "5grcEEMPVR9Mw6kArGpQps44cScke4hX5cTw16Ky9244E7ucRN14HHds11wn81aZZFdRvhawfqRLbRszGSKXkij8",
  "key6": "5AhGU1zKEpbL4SdSbZU2qzncsEtMbS1paw3jBbpvHA3LVisq7GP4FeDDbKBLVk1r7kHtwpo75CtcRL4cfUTubPor",
  "key7": "2bVkhQJw1dTaibms91KkrWfZMnPckCTTLUCNqNpcMMVagJ11tH6dcrPBvQp7nomucEfrSQFY7NKh3YyjegY4snLH",
  "key8": "3a38L4phmw6zjY9zJsjBurmKaXbk4towvm1EDh1zZLCVXoXaMwR4SQ9jc7qiXYK2ioQBY4GByBwEUFFfwdEMjJNY",
  "key9": "5JQYdM55rQgaPscHRaa33a6qGwo4zZ2vkiAWngX5uEkkCxbxDAADoYUsCqFKB2VKqh4mdnVzzpooJnsbUCXsWzVK",
  "key10": "3Yicq7yyy13UXk5kwSmnyvVVveNTcvewLheNFA4t6QXE1R3RW21NNXZpyJHczt5KJV6ADdpukY7oR1zjeQCypc1P",
  "key11": "3nYh2Gi3PfUqotiYPcpWPuXHyXxQrHu4bRhRt2o5Vuj612RCTMeKs5ka2FM63LywJwbTruug8E3wSpfCQXD4W2Ni",
  "key12": "3xyA51TaTJZU1KDESXTGMtaygmXftEeA8jwtD4jUFFaRSMbJQcHL34Ur2iBVuxBgd3WWJ1szLygTZxMWo7HVmx6g",
  "key13": "EP4RNxkUvntsaa4WpUhnBi7nnW7RkBsRA71tkc5E3kBNxF2cLBqzkpQTZPsMmoHcTRwPLbjd7s5GwksxzPuk121",
  "key14": "mtv4vQobuBpuddamUt8TXwXYmX4PotFkJoFe4WJ5Wk5pgFbSzuhNCVsTKTrhWuZ8fLL1ydfS8suGCSTo5c8VnXQ",
  "key15": "2prsf2MGXijhLgs3ucDFTYLhe2kMsmT7eQYCvpYkDyXLMiSnj5YUwhc7cQahj2NqRWHGTAUxENQ5wTxHTaGyLMV3",
  "key16": "3TXWRhsqwMRQCsQ9pGEvSph4FiisNcAkne3PibXnnAbMY1zxi7LQCXtp7efsG9Y9kiFW4ysv73exk64G5y1AxfCb",
  "key17": "4v7P18NqysyXSbpa7QaEL4GCYnfzewFF96te4VFn8s9wn6PJEBm3QgVJ7NoarTEeGHdo99Jq2mSuuhAYtp3h39hF",
  "key18": "4nrQgxNrjFDxYB36HGVhX9yALns2xmqJLEQtdAV7V9BkbuBtQqBquGfz5AksrRinrQviCj1FPjM2rWMHxRDf5A7M",
  "key19": "65LhZ6feQk21QfHW48NvrFD1vqokhjv8fA4ra84ygi7SnmX5DexPp7iY3Qcbz8HbmxcZVh3beATrzcgW4JtixpWR",
  "key20": "5XBQwRxUpNmAW2fn4DEL4GrV3WbJ3V1VL1feAZDFvE3MowtwjRJePraj5a9utA2FzrVGzaHg1VhzLDgyGyPkNQuM",
  "key21": "4eu3WJ8eWxKiSKsn8VSdsghAv6DheS3haF3LU87yQDfAEhg2kKYp55HjKG15fkAoZQUr59prEk1LgqpEFL88egYu",
  "key22": "Mn8pbJrab4SCjEjKReboAALvii3uiEc8JinrmxirwyUe8c9KDP7NnA7y6ELrzE3bzyGxgzk2oAnsKXQXfH6JtVA",
  "key23": "4JHTAVNYGdN2Y6fEQTxEu9rGg8xditesGferosPgZKoZQGaymxMFco7NrrpZ41Fu6PiiKbnu1f1rv2cZ1yURxCnT",
  "key24": "4EhnisxKHGKmJg2ApxK7MHqxxMvhXaFre5K1sZKawyp8oXCdCSQCdrNb4MVK7uWy7iRFGPW758SW4xQyFWubEvqt",
  "key25": "4bRqYLSYQ3Lyy1bcjjo7bmms23krP4Jj6HWDeCPAHbfQ78fEdrgmQo6QZCJEYVr54iXKQtUpwu2YAnbgD47yfSHG",
  "key26": "4sqvweaBwYbS18GYvCMvwCrHKkGUu5V16LNE4AECqGs77X97jEAdr3D3vg6CW6axrxeiPghzgjb9WJV8WABBVTWv",
  "key27": "rJgCY9a4thRKpcWSkQYynNuoCMNAuHWb2ttYsXc9VbaC95prkGCcK5rddfK75zFUqEamvuoqpTA3gQhAq5JUdTB",
  "key28": "31ezafyF73eGy8dExM954Kdd3NUcQFqLynWF9BSC8bZHmjdQvNwT3DmpFyGJS3LZstPMujQLkcueewpqJmLmfZZn",
  "key29": "3yMM33a4chyWNHo2yB1U4nVXd8QgUeti4Gj2iay3qnmpxaCfnYsDpu4KAs3usBoR2oxexx1Dh3deyQZxuDQq7XjB",
  "key30": "2M48FK7DKP8khmYxjYuRCa8wwxWMSEWAmZm6x7fwhzAnNaHGvNQ3recJnquu6B2NFd4gVkYeag9B6PxEfDhF2M83",
  "key31": "4iwrUaWH6HHbS49DbNKxPcRTfKje15Vg3LM8CXwAcKg6yCdAHJAGfFgs1PzHPYfkCgw11cku3M6Xp6VPMdjsMRHF",
  "key32": "w1pKXQtzXUQ5S9KpQYG1Ezi56RqFHkMiDEs9XoaBxLRKve1k1C34k3i38Q4EtdcSBMN8TotDVkxTb6hWxbzmogE",
  "key33": "4PtodWW7ZMY2GWgvnXzPuDaoktTKSnLhPKnpDeqkQjUwZhMSGweStim77mdZ629rk4YwkvW3HFupESv17ps6H8cp",
  "key34": "5dzzr2EonBBsYeZYmsEnxu36r1hGm9P7z1wxzeWxMjG9AYULpAUbq4TEGMb4kVojmpQDs6DVhXjFC4QDqyDoAwPT",
  "key35": "3nVrBs9x462j1g1aNfR2XPFRjvTnCWKNfDjsCAMdn5STmGYPe7B5vrkevZRNw7F1ivCrU35GE3kYrY8NuGYPwFsu",
  "key36": "4Pj6j2EBj1Sn2Wbp7DRoAxDZax6wSwuNSmGNpSKWZfL6Tob3HErpVa3hXH8mD7GmKqR8UMUhBPVWtZJpaWCGd94d",
  "key37": "4JgHJ9krnvKFsed1UY7iF28YZVKzXLWfmsVKGxotKx8q9dFvchkGygsEwugwdfCDg4hNcj5TA5XtrNGBMKgS7Nsa"
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
