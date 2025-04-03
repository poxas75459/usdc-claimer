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
    "CPyevY9az1TijS4XjqKuJAA3xh6QwrrCpwwSEWQubZhwSQpAv6iSQMojyVjRdffPKX2HHsqjjBa8x7K9u8h4b3u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B5Q3scNcPywjNXBc6s2XZnZgBrY92Vqc1ery4riP2inwVxyTXnWwGygATdzknLiogi8xMXf4yz1WPKTRopiB8Uk",
  "key1": "5xT7QLKsHVqXqBdZ7KNzbvKXJqfmG3cecy78dHtgZLXY7SjZFAtfNUKa8KrcgksjrdwQaLBot9iSnAUdKFwRmeYb",
  "key2": "2q9nmQCnriphp86JMrio7kP8uLYXSNrBfuLrBDuhbut1g4Go5LX33aAUaXWEmUHYp7uvzFGBCFtnjrsBhLws5H2c",
  "key3": "2onwmXhCPTonUvEWWCoE9mra8Z8pshnSYzErowyc4babhMDnRGZ7g4cmCag9sn2XGyTVZniiD72TiH7hqvJuLr7Q",
  "key4": "568J5KcSrwzHKNb3YoRjC6YpWXD3gMqeAoB9eKY72z58eEjurodxtXJDKsHrJQ9r9NNYcvdXBsFXYHfsLstsbNAP",
  "key5": "3ZTcQJBFK12kYYSYRHn9u3qvV2uVWPpt4Q6s1ynwDXjYFnLAXDqnV17gLouQvAVjYweuWPDBQjKyivw1GH58eFed",
  "key6": "56813thYieVvY4zAL1sgzKafV7NBhoE1Dh5B8RFTawyJjnR58tQT1AKHFpfS4gAmMNhHtPud9Z29wb618GpTGPjt",
  "key7": "4y8mD8LgCmzqgpFjvsynjVPMuabK3B1BvZgWHzrU9JdLHHQCoTHpCffKpEeG4DZwxmjVGyJUvCSBHkL3jSXYnU4P",
  "key8": "5ttrBYeCqQnWMfiTChQ9JfvNf23tVNgdin5ckWMS41RPeNqSdJHdQf8fnYbMNpbvaaLa7yHZ8Dpdx9rnWWFnqCBn",
  "key9": "3uwMeL4dJWNBVTLKWxyQspi94QZEFbCKzK48bHduq69w5nSnGjw2m81xRH8mSygcCVswbyCF2GLppaXWTThoBRY",
  "key10": "65p3yxvbembr5RA3vTDFM9QAXJ6B55kjNRjafgDoqCJKj5m79voyi8kXMRnMUhsSnbw3w1wRuQeknCnKis6fiRiU",
  "key11": "4CLzmd2Hr6oMpacLgYdcW7G89vf3DoPXo5ofVFVEZuQWovwKAiUrLUcMwbjP4tudWcdTC3J6FNGJH58DWcdEDkSw",
  "key12": "458Xu4dxAauyNctVAQ6SXh49GSSC1tnZht1rwjfM1vhxXPeAUXADe2PLaCV4xATiavySxiyR3Kfz9WmgNdmAsEHW",
  "key13": "WEQ4yLDmj1LBwDQuVEMpCeHRLojZXSRHs9t63oFEeoRMEEJLunk3M5r77UUD6w2ytpUhM5hmWRxECAHX665pv7i",
  "key14": "3oBa8AGKTyVbEbGKr4zPquGw3ivqJYMYKeRowQSmx3XfvkdjNwGhrDroXGc2BeR9PCfMXzwriStqXU7RvA7g8RtU",
  "key15": "FYG7chd8QneAtoMqSMPmSBgFUtD3qbBPnfeAP1F6xDYnMnFvJhtG476e2QLzgsoogsvUHYtuj5F8y1AUkzgS4bA",
  "key16": "4sAESZwxYCKngf8s97JC381dKTD6P9ng1ch7CvUp5SPU3fUHxufvyD3D5LmGEwo8uQmiSxpbCebGHZJBkCYrnHkK",
  "key17": "KnWF2QPRn4iaxDkGBc1cdQtNYtzVhxjEcZduahktrW52ZPKViYVX7m61BToynxT3nprU8nxdHqSdvfeU17YguQn",
  "key18": "5wDBsi7QsqHc7bDaxqyKnjGvn4sgcEV4Ne82gwnHon7DQZMfhfdbfXWvVfRiYC3y3L73hce3szr3f3zWREoWMDdT",
  "key19": "4GtuDkNNy2gQF9vLVbTWjErbFdYLMjKzPpqWfHuxTg4EUvt8iEFsLMhXdLrVkEYGFrAqJkgPCN4oWKftj5vtU4wt",
  "key20": "Ai1SBsAxMomtMBbaBS5Zw5peYEEKF7JDqZKa9jUiYUsy9pwDVmebfLyfdQAVRsQF1yMWhMvmV91JfUF7LNABYhi",
  "key21": "4rofzf52yfRPcqqn8x7M8GBHruUSrpRw4QygVtmR9iYGGqskY79bHbjFuYWHZcNQbVYpj6pr1HV4VfLbg4zDq8xN",
  "key22": "29qjnBxZbqRGadr17geT6J9PfnzUrssDcaJXbx1KMeHpaz6Yc9Jt2ifRMVYPwfruQqBKeMMvJLAwU7d6kLGxyAqd",
  "key23": "4LArEEzUF38RLFZKNeDP1QBw6uCxxVjcm9xaziV5vyYUra2DiuLwJZrD9GsnDL4S2rUAnxZRBYHjv9BTdZV5jtQB",
  "key24": "4Bw94KV6J2j4nCHgWWebHomWRmeGfGH6Qgtc2nyvqxNujHwx4wg2ZFtwihs93P7HjQLSFxBhtrZjk3yQssY3jT7P",
  "key25": "31hmpUJKYW1zZDkCAYm1fcWWRYhJF2gGFSsk3iD2Efdmv4tmX95h7gpyhJTYQyRn6mX4iVyRUs4WzH3z4yyZn2vt",
  "key26": "4C9VnWq6F16ANkY5dCxZkyYtAMEyGqDZ9oCuKVgdGePomoJ8EnhYGg2XWog9bMAVHbjFcwEjCBk8HBCjxx5ZiMyj",
  "key27": "2QecpPRbfHJW6NLnhSSvzkoJTvuGMuU3eCD1ee4jQSDePxQpUHwkWiHbi3q2FsGmQUnGwtQZrtwPFEdzfYSBrC5C",
  "key28": "5ZSvZGLPJA1xpB4se7X4XZvYDf4SGdggmAvS2cxEmgXceZTuUqYMbDNspaLLfrGv6NCYBjNCh2AXiNYy7nPMTvhm",
  "key29": "KY3t76d1s1YN6oHuUqqUvb8TX76i1TwGm6Y2P8g94CYxzudzUsptewb787qiDDWLqFgB12PBVcc1hsvEnU584CD",
  "key30": "6p3AapgkkMAhryEAG1L2hJzVWZJX2QoRFxUtJQS1EyPCquFeEvWE7oKFaBwCpUmNbssVVHDdDbmgXLcXZguFcqh",
  "key31": "5ZKjxHwjGtCL9idbDKULEGqaHJ5yzSTgj457MFo2U5aCvrL4XboWsHrma5GhUid8CeVymeZnf3awsMGpkdncaMwj",
  "key32": "5TVMKsXbZX49jQqhYeLZK7CrJ4pvh8snsRDEi1rfAba2gXFVvG2cvLJL6kAFJaKi516mTLJXu3g5HR2VQS8C4ish",
  "key33": "66mAnhZBTmDbfWjomZs7iJGfZzTkPbXQk2Y44SyGYSLEuLj6CPJ8xLKgaML9tj8WY2rXM1qYNrcj7Qs28ehqpTPz",
  "key34": "3HkMYzjeoKQ9dQdQLycuFCRNnhhoDfLyVQs4jcnnfoWDnDKRL6hp8RbgtmGBDtVpKNLNnXG1bKnAWb3UQ6h6fngk",
  "key35": "59Wjcg33z9bo8QNA53FcgRRxydH7BwAFUqpU4nfz4Bhpnm9Haz7s7Jgo6ryzqA4aGY4Z2pwnwrrGuGMaE4AiwvWW",
  "key36": "Vm15PxXhum4Zi6UrsbcqyreEkSAqXMYsX2AnR4K8vuJ6AfAoMn8MzmhzTeWiLCxe3kiud3fTt656v5Dpf8f62uT",
  "key37": "216ehr1cRPPY2JXQ4tXqkfgm1GKHP61WoB6nDH9JGXsZUG5Z8tensqkJtRr6yvcmWrf3QavWQShkE2S9UaMZEWc5",
  "key38": "Yz65zJsSedhuvosVizVZnktrQBmyLeDhgWEZLzsFLyLTU5gbEjuZJjXD3Pdv15Cc6g6HgdsJssLUeaWAyT7wdKG",
  "key39": "4p8faeU67R8m4xk9zMEUFSngShCx8sS5E1rQ7Lg1as6qZbgHa5n8osr5ywUTp25Y3MyHF6z8RwW72GDYkgaA2u3S",
  "key40": "3NgY7n9HpAZBZZE5ACrJH2EKQ6AnWSgi79TPigPc2mCFpKAF65jktJrNAUGwVAunftup1r2KdExUMtUaK1dSMSRw",
  "key41": "yiVeqFTNriBYAGrqQEjZ67aLc7HyaS7HCaWv5bLYiAmsa5wYP96yFhq5NSHnZsBeeLoyDSLv3KSbnDLshnsyy2B",
  "key42": "42ycb4aSTRuHM341ZokCCbnGmTuJQwa1VAcuF2RrJ8yLkdGSeqZsiFs38kQ8carHnvjhKiVQ6fKiTyQWrJKiga1G",
  "key43": "2igGyvF8n5GjcfevbmLhtRqS2FEYSzCLgo814R1q5jsnoNQhvbVyUcKveL7JpCxxJcpDtCEeNWpGGXdhVEZLMgAD",
  "key44": "4knFex6txow3n37uissqPdsepZvUx4K2af6aaHsZc8no3djtCX2ioVY3tSj97sEgcfXYfcm2BJjoRywoFKm8TBD2",
  "key45": "4FtS5Eprc8KDzdRg3HJsWQUNoWZ9nnGZb5a9kcGCy8WEH6R2TKpcrrjWX51zD2LsxfvKtFXd5E57fep5ARv1V1HE",
  "key46": "kWpNaVQ4xdGe8hwBgTt75vbRJByrpH4Zf1WsvuHbhuaAWrChnWBbyUVD8eXxAMLoXd3PKZZMeuGVWDKwV17KX3o"
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
