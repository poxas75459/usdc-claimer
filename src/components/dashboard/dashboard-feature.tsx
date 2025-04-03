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
    "63FYVBRknV4MjkzJpg5uMny3j1KsGESNxfypmhFvvjAMhSEEyotVAYgZyH8GX6jtVK2Nq3zkEhq8JAVMi2g8asDg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FuS7MMHk9ihNL41u6WPcNSAYViUFQy1KXZaexQYfMcXNSQT5F3rFaZZYmcdcNyKu7sMctmzgWwkwSugZ17ioUQT",
  "key1": "473UQPHz5VyvL6z1k6omsbcTFVCJ7LTBH77i3yoUafDtQdpjGNVkPihv9LRECZX1kuprnMpZwisohAXrEsnPyWQj",
  "key2": "2fCPD7dCF4HoYNLjAunQ1TbNwfEebcU89tMon2q2Z27Ysh2jSpaiPfCqQcRpyANzX6y9SxBNo2j9mhQ3pYc7CQov",
  "key3": "4fiYjs3PqesYyyiJYR1hSN7BuRU58pVjE9PtYUko2zjVTdy5uCqopoGJWvgc5uWNQuoM9qjEqRcTodK6RHjry4TM",
  "key4": "55722UA9SBaFe8LikrN7AZAHbr4bNTbHDNcaeqrFyM61MkhePBcmrSTSiZ8LPumtRrPSrMAQsc4BkjW24DoSqZ8m",
  "key5": "iv5MWtJ2gEvvfRSWrEnoH5nuWeWL8KVFuCjcLxZqXW5ZjZ9xsGG9tc73Jw84Qs7HXD19955hPZ8sq9SGip4GRDD",
  "key6": "5CxbVeBT9uBE5MynjSaHeFvgRdGf4DByCnKs6tfFA4Vr5aJNBLGjzZ13WuDNh7nVfxHCDBTqDsM3eyhJipf2K5p6",
  "key7": "3V8u7efeJZBSp8YH8zWjdr2tbF8Fgisf7y7xBSB9g3L3EGvtqoTAs4W3EGdNkqQe4TS8zwXjwDoHZoEarUpAapXp",
  "key8": "17JkLGKcKKvzwStzWxGjhvfvyB3cTwNY8fD8oVess5CiHQ1yRKiwz1KEBMEpP6svapEBPaopjZTgJKZb4TGufi8",
  "key9": "5ZpjhFc8DVKUt62YF3FHLHakGLXyMXp5P8Ks4PsZjeAa5SKRmneozeuyMzDrfb6sQGFVEm9GUvrtzEqt4Kw33Y8Z",
  "key10": "4boxuiRrNioXsZJrw22sZ4u5hwzEmepMRHyJ4pvwsYz6v323Y8n54W2aMA6PsfMZRHCVa7Yb8P2yMx4rmNHji3EN",
  "key11": "5Nty5jNfmZpY8NESo4oF2gErTkiVgX3cMVmAEt6FwhS2P7zcsYct2RR8C6EQNyDNWqofjGJ8fZTwxYTpY2pU3bsy",
  "key12": "3jH8tX6rexM8Ki6uKqPuYBDgCDCnBDYb7RwNybXQ4prt45BTmXeAkwi5SsY6DkKErUATSoArDj5tFAUmovE2M5WY",
  "key13": "2tbpjTSmtii9xJsw3AVYjyaSCeQrscUufCkPGEw2xzPc6kbPqJdJpp9zQKeDR85PyoL43CdBRZW5g12G6y9cbuSs",
  "key14": "5ktty4oPK8nK4HyM2mCgkZFLJEUcJatBiycNwqZdQXkRkZaaVWUkEEwyykMAjZHnmRSLXaddh5bfE4iiWyLDiyBQ",
  "key15": "BimHXkmCjjVzZJT4QudV1YpteQopu35gLaGcbGmNjcLGYrXgHsnUCMp5XS4srTMpRg6RLQyryo25Fao5h7U6oc8",
  "key16": "C3SyWaK6rxLydo8Y6hdQA6KNEdbnV576Q32pYQev3ksgsaKceb74pachw92Zuz2Z659e2RMz58ozNq4Q4sWQdpb",
  "key17": "2jZj8qfX79kY3qvExMhCohrgoBbgAFSukeDGi4GEotZLd3ebuCkguCQF1Z6uU5mphVysJmKCRgvofekyouP5mxZK",
  "key18": "YFYo6GHnf5PZqQ8oTPtaryZR7jbLMj9DAsvmtHLBfTSn91zyBJoXhQeogTcQ2y1xeXxC6TrSExdwPjn9cqQALAV",
  "key19": "4NUuc7f8sVnuM3JpexHKNEU49uKkkHFDWvEC5u8bdc8WAE13UKDWTtyuWFEFZmEWJk9nSSvngPQidbzemGqbKLCp",
  "key20": "2SghV2Pm6yKMjWqGpxrk6RoyzPXTusBv5FPCSHgHFWEde9bQeS1FiTuJSkeajuuyzzA7uJYWWH2a99wvu57byJLJ",
  "key21": "4dk4pJKuzGmn8h6gT3zexed6rmkfHakooYr9WRiCmrd8t2t4WpQskchFYT5n9bheBLqcT6iEbKhiahBRDNUotrrC",
  "key22": "4Y6bJouV2a1ma2BoXMD8ZnEvU28xW6eRStoxCH4dvMBvowmXSuvbVdqxZ8fLcVhhhF6BPeQC78nbnmxqxtSdug3j",
  "key23": "KydrXSqeUcokRS4KykRydzzatDCs3UbRrKUtVCoW3sWyBfVNJaWhN7ibomwEELKX5NTjQHph5Ti2i7bjqXF1vpu",
  "key24": "ouhBfzcJSkZY3anNZo3p1LdX9SDXuAwWAtPtxKcLRaDws8Wg8ZEmY5cGXfoo4Qt6U2e8AGYgWeei4HRXRwEAzhJ",
  "key25": "gBaYevsVeRsfM9uTxSjCBvKMKp9BmhXrDsVzph4VBjZWkFXHGDEYDkaGcVorXaDGxPyjhknJmjPm6NHbaUvBxrq",
  "key26": "4owKzx3cxzdXjfToMv1WUzeoLRLFErfYSRuNL9kX2FVetSH4NqsgnwULhBLffNbaASXPifC28SjXf6exQTWokeUq",
  "key27": "5QDVLz2ifhp4Aie8CKGGVjyySsAePHc6LKS2d1KbN25a5ZADVhbn1Qc48xdZVVRa6mjEcJVKM7pFuF3hJhc4btoF",
  "key28": "LrFGVecywzE6e41XkkUR69ow7c94oCScczc3sbmSJEv61G3uDzA2hoacaP1aN2mbwpAUsYWGGCcxdXresg18HnH",
  "key29": "261uWxoZ7e4aG49moRLtVm62rw7vrP8NwtmBMJLffHoonMdauLxcQnKmkavafBkbnxqH9DDqvgWnPGAQUsVDi4pg",
  "key30": "2es5xouozSJ9gv4HihSCu4c5k8pGDGBzE89gASUTpSFbHUYYpFZqde8nChRG43rVScArsnX15ybGJXDhgwcaHFsY",
  "key31": "5iWFmYBVLPFvA1Kq4dqh6hafVuzhHDPxnS7Z6GEcQVt4PPNSRNezGQdJexC2tEHsx75uVp8QMcuDqNxEXpZjYwER",
  "key32": "2595PEYobFruha9K3X3KLHGbfAAHgXwT3D4xR4NY7nq2soRq6fSmQVqd2NLK24pFepPEzoNvEgiANoFRMwSKXvb8",
  "key33": "4VzmVVcw3JzPFDBnR7Um2QhtRxdqaBMw7qd18b8EH8Dxdru4keVkNDgEFsHNxHEqMuFjLY7sjJWJca2sVNwtfE8X",
  "key34": "eWWKzqX6b2trrCJx9ekQukR14dahgELJyNpZ3UuMYcqGWt2JXUEShUUCm7KCpUP3Ep46EBGDR4Qz9wessAeGVx4",
  "key35": "po9n9ugfC87E2QfH9y7R5T7AjYojr4sCFLvQC4pjXdzvgqgnwVmTfRMrEMgd3auaH1X2nzAP8y2rHKyrQBdnHie",
  "key36": "4vnWAvt7dEKyB9fkfV9TSkhT3t7twAMCEaH7Z5HVyGT62UR8SU59vbJ9kC2g75noKaYeZ5J6Wx8Py2mn4JcxkxLm",
  "key37": "2QykNitJ4LkepVwi2zVqhEnjoqY6jZ4qdUfWdnkxRUyKNk6maxQH8DVsMKaQKFyhqrz2TpQtf5m85SEtj2UoZsfc",
  "key38": "3zNJnHFaqh2zijfZPrkAjMuKrCvQCKtnH8GX7L26oRQkBTcF12WVqocfoUL4G2b7G94RHHueijN6k9WR7v8XjS6q",
  "key39": "5KsiK3RZC75HoEPu87eED5VMk2oyEwDMoBzmFKDi1HVLSpHBuHUgmEyuS9kApvBqKXi8MSQtxewKC8eVxPU9kH5W",
  "key40": "3tRqzSkL6qX6zbXk3ZnwbEzZs2pP7iqpYkgX3uwCsfVXUCzGG2asboZCu4tYJDqVCUybjSkLhwYrjbVjLzXPBh1h",
  "key41": "U194EYncw2QYRoKui6rE4ZGX1H1Ju6HSAqVpCzVEPpxrWq2seTZBaMmkGB8wSsHueojJCGH8B1mdTQVJDh5Tpd4",
  "key42": "5eDj9uJCqZray7rUb7yoBEDjsc2o7G5XRdsGJneDokJF7x6oZq43AsU1qtU3YB5aPHYNALhkB1UEzTHpULcSJJLq",
  "key43": "SUiTHrDXBdURTVRbyfwHURNC52HXPi5Y6JgQXnijQYgTpa3GnaEszUHhT4jRHxvjGmGfqE9AHJcPMb1T3wPTGra",
  "key44": "2PskS6uyNcnQj6PEm98YBpg7ZRKV6WjvSXcgbjsFmJQiEHG2ujfTcLLfKN1jq7yGt9p9raWxmdSrsNcp1vwjRCEg",
  "key45": "3PTc7Lsf4dzANcwYZLoeWeAB5SJMTjzm3Wd1uzJtgt5XZtwCUYT7CssR4vBCk1CZsqy81Y46SrfNsggJkZNs66PQ"
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
