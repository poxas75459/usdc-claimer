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
    "2ewBAH2QiaqVApQqm14EgYyXhWM6mt1MHXvxD5j2pWMYtU4m3GDqEqosEpMxE7xKYkc6RdSZgCyzrSGuUn5fdFP3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wzKqkEFRhuQ9y9kmQXZdyjTAtCbgBsGNFsWPWfcW4XBVMv5y66BptbyUoc2p1K9dsaDjDdCFvCTmYG5S5Rs5M9R",
  "key1": "5P1rNcWkG64y69ZYRwPRtimwVyAYga2yjTP54KTjXeYV93LNWXsoRc9rfyhP5yBsDehVYvTDi9Kf7KQ6hgChnwEW",
  "key2": "GL1hnYk7pbQP1Dm3woZRn5qArYxkX6d5roKxQMCNaPBwTHxaRC31tJajBsV1BuXusgpdZWRXFuQg9ziPEwTBYVj",
  "key3": "4azZUjrr8wggTWUCQekp7VRw7gtSWuKwyT14dzq9KeUZF4s8THWEDfdudv2cJoSbVwMSyoBYStrAW2kddpf7kuay",
  "key4": "38WCMhcYhjwubegjwko75643dBdAgVRMzsCL5FnQWRnRs6WaXdLL8FBLFXZsr4Ab5geXfC2SfHCe9HhYHdXWHyn7",
  "key5": "2yv7dQodKe73FgLDy3D4nmsgmatAiT6hH5Y2twJk9WRBupnMCLiAVHokPCAbV2ufQGWnAyyLjDpqe56dpn5jo49B",
  "key6": "5kvDUYvkq2eq8cFgf2ga6xW3XFEGmxtsLb6PL26Wwxm37wThfzE2hfpgmZ2j1SqsvW9igfAvfrQh9ETjDXEgPZMS",
  "key7": "5z8AA49mLWvpgQQvZA4M9VT6wzCGfdqNx1GVNavCQvY3DChHJcjHNXanDT2FbZfaSssC58oSNMuPvesx6LhMnGMD",
  "key8": "51kzoyMDsn5eXsJLV4typTn1v9iGYfmzN6nwo6oQLUFQ9UGTdzuxRqCeKNEgzhc8rgvorUHVnZhSjxNLs1ksSuvK",
  "key9": "4J1CCMpwcWWjZvXDdm9ytYP1xFBh797BbiVG8v3YMS4PZ3gmDzUB7HQAKwBw6bRSgXJaxMYM1Q3dAXHj4Jrq3CrW",
  "key10": "4rmijrLcDUnk5D9ZQxgiBnFwviv54Q4v259PaSKLBrefDfGANfjDbz6THeGvpy2JDYwk5o4kHbJkhcCcf8L9xZs2",
  "key11": "gS2F1wE7VQoWe1zdj5MiNMW7kEWqm5TLN2iANu6j6ia2xGvsaKk96it5U4tHp8e3gfnsdKY7RNryj9CWZZCYZif",
  "key12": "XejtqmUKQPv3YvdvJ4ki1z2L32TdThb2juYp7SoYg54DrCs4nJTEH1fUuuzbGBRFnS45qJdJbTQ1DmuE8CYqnyJ",
  "key13": "rNJpudsYNAwVvu1LaaahTeT6Tnd9wbL53d4VA4WA6riLbqCRHiwJGyFetBfMx47kucS6TpyvCuv1hUPVh9rAsW1",
  "key14": "9LRXPwwaFbzhcvaqrCWwuHmsUUiPZot1dzMmHXGjEozzGzf8vbXeL9u6KFRRWL3xFsRFPayaoX2xJxGvwRk1hHr",
  "key15": "3Wpm3T3bCpdKP4sE8KUbL6m6Vr6TkkYHmm8tpwGWjQD5Gx3woNoe13Vuhoc5hvSQJub8cGk5ZPhQZWZ8fz5x32ru",
  "key16": "GCzKJy39WNaPfJjwfZMgez68vK4HjUEoHGZBxFQb2uJavpA8DbYUFtijydZa8vQRj5ZRbBR6Q36KKqALD35hheZ",
  "key17": "3eKPbgczcmm2uwzTNDzCJzWF8gehDkb1zehUrqFipKWvnv5rbcRZ18bTQnbVWH6PkH6no6dM53rAfwgqXV6admQ8",
  "key18": "2SiCSikHTpSMLSvrdZZdJuAcihNY81Rs4KsGNv3sKtyWBp3kz4ZvXuVC5fuVLdf6oZf3eSsYh217oSh6Et6Vid9r",
  "key19": "4e1zUYmvFYUCCdcHcGGQUF9HsNkXCrqeu4ntzU3zEMVmmdijBhCkPW6yWLo7xK8MdT1PkirNWnit9RShjWNqX2bN",
  "key20": "4WmB3z2LzrwjX4TB3VPEqxeJDokkiTJi8x2kiwxwyoKcm2BdB5BhXtoXPFjaMNQ5HbHsEDGJupDiGV3yYcaCEbEv",
  "key21": "WJKX6cEwKaifQtZQGLMRap5stf64vQGb3wpd7Hc5qK3QBPFdPMoCWm3Z3vYD6YbBiwHFQsPKA1gNk7S7E88h7Yk",
  "key22": "3Q2aPXZNsk4s5W6TMK3LbMmvFVBsyu7kvDSRYPauvBxJBjzV3SK74JdSFJC9CMcsYSGfhDJ3Jv2drPTKXHBq5cGK",
  "key23": "3wGBkp11amzQ6wqDEgrVUmQe6jqhagamxmoKxG7YqXF8z4qaDtcBRsvyFdnV1em8FCwexve7R8T3D21G8okinw6j",
  "key24": "5BUQM6sNudDqH8EGog2YEmg55WaA3gJHoKgLGmNFFPv4syYDJoNXQhHrrauz7DpgsKis8N7p72h1vyKXowLAZtkP",
  "key25": "4dNFmoMCF2iN97URkpmEQFuB5dW3fDiR1PL4ka72QGnYbybEiXX52T7WfDXazvjaGzNyiztinzacJ2Fs5VujKjRs",
  "key26": "45iwJKvMA4qwQx1pjVnsa6cMUUvLdH1ndgwLAzLG7HY4WGt6GqMLvmBDtMjK7Am5a6ibGXFAMLM54fSgACfyoUdi",
  "key27": "5fFf61ZCr2J2RzqghRJhaPU9o6QXVxnNmhnR14QNxc9wYbYDUDpMne6X4ryt9FDkzctgB9f2pYFMZyQkU2q35e1a",
  "key28": "VBHkC3cQuEHLGZKEHJ3ihZjVM98h97CQp6TkMKN9Tp7GcaPv2T6s5fAEWeBwsK25TYBQoZq4oXXPEpv2yhWWd9u",
  "key29": "27CyQCKsmmzgZutn1ydnxnQLHcj2TYkKA4yok183ohkY5nbV5w2ZBZFthKLHscmMGUjN8Hc77nqsbfD29SceLmor",
  "key30": "2aercVEjVcBJjyjS7J7YW5gV1akrG7pTSmQzXxKYrMPRSpj8QMTvLKP6KoSMmgd2HUqFtWgPwk6ZcaUZLrhDGboD",
  "key31": "cGuspVK3mC4p3EctMnZejorhwfzQvWvb8aF5KhFTR2RLrsFbCTeMMvGCZTCFvpjEFQnaMaosu7tPxiWXFkcF4Vn",
  "key32": "TyPRLYZ4GTqJ5yFxcWzpKjMVenNY5wijDEwjxW9evddcvrq7dhXsRVPXaGVx9qdMtg8o5hB9ENKwCxcymvTEsPy",
  "key33": "3NpnSH25vahHN8mM2KLS6rE2rQx8SZt1GY81x9XsDC7V4MbcVNT5iYtriZjxdQNRUj9uSRSuFmDYPeut3pjyt8xE"
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
