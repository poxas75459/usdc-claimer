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
    "3Hy5gUK6Fo2sr2BKFf5T1z89fd1nNExqWhsbskuNoWGEg59nRErVzLriYWPxHZ122HVDkQb9cYbGXkEkAK33JodW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XVkB2QYKHBkjeMLCCeppPc3qNgc5evygT9ciwQfFzAkV5kCX4kb8rqHwPWP4u9TNUsFrWLdw8qio45SAK1m9Z6n",
  "key1": "2X3hZG4okvaxww7wmJTFPzqka9dtXjG4s2zaAxQA8REaVXjjTPGtj1KriAzjjUdhtApZj7As4jDF1FU6Qp9N9t43",
  "key2": "fGd428Tw6qWikSjLcdPfX6qNsPkj3xaaqqbBXSfoZs7EtipAEptZST9DGorgMNSH6PnVjPnHU6bWdZrFZtdQAkG",
  "key3": "4p3MFwpFVtJFB2gxtkkiXVWtBFuLCuoJAkDuoEpTqQveXNC613zwR1ZMtkHKuRSCWzx7JvuhzpGWTmoNutfFEKR1",
  "key4": "2Ni5zR6va8hjTHopg2HV8z7qUFHxp6oTcgkFkWBPbJu3pCrvMCWh2z4Zcizh2UQuabEs1LkdS8CmgBujkmuAoSRZ",
  "key5": "6ZBgbpYC2NfaGyRce6mcc43KJbRnoe4pad635PFZHRtwuvhLeQd7wbbE8xEKH48LyogLxnopPB4f7qyDRvA1tQq",
  "key6": "5SFxmphTtU5AcYGE8XuqYBVh8JuoBpmtzjxWMVGDT1d2Ajfn2vgN9GbwzFAfJRuuHgQcQNuc5ZzidayfkMJRsXix",
  "key7": "43vrDyW27XLspK6wjGn6VDx7fxtk11RWDL691LowA7hdkz5zJ3jHsbF1bP4j5rSM2oXutDPCqYYHGPhexKAupNNX",
  "key8": "5fmCNXY1LRfEkBbCb3A7i2YS6MPJqokx1zpWnpayajRMUopgtjJRSsTj3XNf1HRNvqP2CLfdu5495n8hSZWCg3eW",
  "key9": "4vLZDXigRdQGszbbZxFHExeP7iXuysqqMBfRsqrNpwgmdGxbh7kVFW3cjTjf8FEBH4nAXgjgNEGUEDbsJqxvjp2T",
  "key10": "4CincRKuEzmB8mGX1cSfrUYVaRSz1bqWebgpwAocNtWgvJJRvtfAuwCHGt2zW4sB7ZCMcqMhu1BiVvg3PJKK6dLY",
  "key11": "2Ju2mQXxBDsirSQ4Q4rpqTpLJftTce2nr7ADZ9ditqxRNoma3KdzPpRi1prXwYjqZnV9zKAr22rbNFjizg8K7MF1",
  "key12": "yi5Yeshpsnrkwvjwvcdzn5sN6eX756k45wGB7Dnk21uAXTZMzGPnGhVNYEzt4roDcM8En93EdqyGyMDMnW8CHvk",
  "key13": "5F4D6EkUK92NgGKCe7Qdf6KnfynnDERLw4n865Q5TcFi8JfBthNRCPJELubqbijdjLmcrDPCBLrWe3WCXaxS3HHf",
  "key14": "37iE5PLBFujb8Bi1aqDqHR3Bm57XgvKpH2JwmNqiQHmr6WbbFkUdyUhnuYbvbX1UDaGfgCWyTmqTLmF9V6pBLVxh",
  "key15": "27mrd9mGwQt87cUYApdKXbwBcuFSTAbsaAtri8TUHmXWsgNYxgxL4y5vBWq2NrYfZbpBB6qvsT18PcUyQe7hGx6X",
  "key16": "4jNbVPwoK8VPcHhFpcsDaH88Jh9iTgvv4MZ7pjge3vVnUanXw5WeoaHtJEnT9apw3qLFDBhQ2j3TcpokwHHsszCk",
  "key17": "2WDX5rWzNwwtJQfFh8hzJXRBhQz9aicpARVLQvonvj1kCY4Kbh4M3PkDk5GKhQvGSTgLoC7zgeeuuumy2Un4sG51",
  "key18": "3DrBPUZnfRva8xayWCJZpkpauKrYPe5qasAQGRJHMq6zYWNHvvhmoR7JkTd1LehGRwPo5j7Dc1NEU1GoY8DsCDsr",
  "key19": "5hoiJ7CBqE1JNFoKf6HgHUx2nDMfLJC4KJWNSezbknZvQjJ32cE2tmzDeDSMSPNdGUC5zRouRDgDQ4bs6Y8AozhW",
  "key20": "4yPgHWiocfd4vidjHcDoJixkWsgePr4wBMyae9tauK1t4dHSkz8CUcnT63E954akZfsySogisR53SvgYUNLke4aq",
  "key21": "5Geus6jheM816TBBZXZkHtEUQF9HSC6fYmTvoktEfqeoFyXNpkED9odTHD5MExYxza3baKSjziCLHsaAPxYuZjWS",
  "key22": "H11VsjJyUZU12KS7gy7GDZ4fSyjFwMYfaAKQwq5aAU7THGfk4BQMyTRqJveDoMpERbkdhWmiisAmSZYmYtdqRDC",
  "key23": "KXGWWYfUAQQo3i5pNNET6MaRSUt81r8a4mUqRathuqB7QiUnuuB2JYoctnRpQpcgFG67PyKW4W8gGJUCYuJ3ZSk",
  "key24": "kETemG6gEePe5ur2t3KCAbT44Lm2FsmXp2xbv28MgcBTfGWmBdg5bgfEv165W7VnhndAXryqqTqwKKZuDHQKNZA",
  "key25": "3mpx5ScPAL51GRRLJzkEZtLJZFjCb5MHR8WtTcgKB3Q2iGdEDLdcKpgKhDo5aayk5nsDChNDGHoRtGg6NKknDPrf",
  "key26": "58N2Jkiuf3H6HaoGHaA5zUnPGMqLPvPb33TcR5AdkTG6d5shuDUzDerdbP5GVXdfhwhTaK3HDRjmDK6g11VMMfNt",
  "key27": "4L9UzUy5Fg9KVn8KDtDiZf9upDnZLAim5kWDsdxJWzDWHqLfs76T5fHaVjjt4eAyA73HNwbVaiyHQQFZADwrxxY6",
  "key28": "Een3d4MDnTqEkkrhESqcpXtoiutucbNxLYg2AK3XPiDkgqQCCge7DAuvEAuaAEG8mvXPmt9MDsm4B9Ph5Jm1ciZ",
  "key29": "3TunRKZ97rJuJqxoEe2ejJiCDM3tmJxgR5Pk7fFoWG3oAA4nvsWubF4PQqdtGtTFXH6K9e5ERsEMFR62cLJWsB7h",
  "key30": "4SU3fiW2PsGTKnmj23DS5E8gUhqTViHWN22aaXE77sqJfsewtdZxQYcsYxyUUwSPHtG2SsWLxytZhWQEVLTxfJm",
  "key31": "3DQb9uoyxYmQwm2NMr5sycGZjjuTGBdVkZa4RRSFgcaHQvGC2qyfyR7DAor4LvnovVUL41oLWJK22kxMdFkejBzz",
  "key32": "6mHbeWiemtoH24ivPUEQ7i5CgLCaue3vMJagVvjroP6X5CvQULbr6UJzRCSDEpNkKhShhhatEjxte8eU5RQnVLV",
  "key33": "3JxzVsa22m9vEQNY2GA4nhCsiMFZvxm81GvBQ9vnf5VjEgERazoR2TefS8aGj82JpFdFiDHtgQ5ZBWas8tVMTGNJ",
  "key34": "5RBHYebQc2zfnQt2pvURFMm3UQvmNv1QooWkbpbFpJ54sp3qoWYgUHSSN2WGVBVMXoszA5bfphw1HZ8XhDwZHFzi",
  "key35": "5HLDTJMxagagMTDTZsnwpSbQQj67mxHvhxohJ3QVpqFQxWqBSaXwjREh4FCGGMeu8qrhMGiJThmqrEBooHV8YyKS",
  "key36": "2UZJJhs3qhAsd2sFa5CcPULBktDp9oEinZ8AKuWdvodrmufeEtn3W4btUtCbzxWgPq7nUV4UbKuRNUYexFDMB5sC",
  "key37": "66sUQFhBfZsjakqnLHxAcFaojQ1hH947ibq3eQvoLW48KVdxxeUVkkzQ2gK93sAkFeb7AFHGtDbZumjo9YRohuog",
  "key38": "3foBgecXxss3yzdn4TARq68NCTw2DvoRfRHfLQDZqJNNJkAzBvoJnV1zd3rwgBphxM36sShZcaTa83resSPN52WY",
  "key39": "2SYAiyrqWUf5MvuTt8CbMwApELsaquGFtJfvad1ikNYKybwijv35fYfaSb7m2nAUyZacXjG6Y35BGSibL9uknS7P",
  "key40": "3KqtbeNetyhXCBV6oa5ujgzCnTUmwuqXfZbtKKZZdibWbndic8EFHt3N4EopJTcXFxonExCsByhzrJpjj3RN4DGi",
  "key41": "S343KKb4svY8wuL5XWZJmHU2yGrZvUaa3odMitQRhEwosUXQ2GYZVCF3x2fLfJhSjoENgqUaw5bUR3TfYGibbxP",
  "key42": "5vxFGFAATPgJ1z38ZP2QLmJke88X9GXheDLiK6q89AoKpUdjGAXPWnrGhh7HnvqXhr9wQL65joUFk94MwtiRfscE",
  "key43": "5yK1v6MK8DffjFLhMSm55FBvixeHRCWDxq6mAGQYX3ryg2qnUcpkNSNCGfHFFCQqD4DesTL7BT4MFPP2VnoLh4yw",
  "key44": "5v4NHBArzg4KNawFeQEwyjD7irJxrY3zP72cWaCBER3DWrQp5WrTzkgukFk19fX71TAQK6EkmeQJFDk6CvKmG4sZ",
  "key45": "53vQekZtiqcccYgirQB2LkYGzyddkWZJ81LHMpBhd8sT43U39hsjdPTKwrUKemhhK5SALzPzkarYedXj3P1GKavz",
  "key46": "2nugQpz6Dspy6AxmDHBV4WGr87cQfRyBLQyB6JdByFkhZRB9JDJw8NKxFZWUt6qMe4QAuJHqxn9qt7MxiUccYUcw"
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
