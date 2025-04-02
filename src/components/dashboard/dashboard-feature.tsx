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
    "2Q5P2K8nwcS3YbRPF71MUANfyurFHNimGjvpNv8tyBNVddosbYSXU4EHjxQ3zXA8doEvScdPprQGt7oiSE5RANBv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PA3GXuouVEnCHy91biv75t62m2LGcL2beG3bJ3QPwjLHM31gZscshaNF3Bvmot4EMCJAUmzCngtJpd3hnRRNTx6",
  "key1": "3hmr4E4Bvm19aZwsdDX6DBu2z2uuKsHkkmMHJK8fqxabGaH2NqsizkrkV7BKbEPwtSCZJ4moQAnn4aufE4SpdWPG",
  "key2": "3NbPNwxZmRR3DThGEecE52pJe6hWmXbEsAuqdCKS5ixXNgTvBrS7jkUVwDqtkM2iLXMbxMVcuw8G1RGiYSGs2NNq",
  "key3": "2gCKMrUQJAyCSBDyujiBvxaPePw1tyt6C9DMVi5wdfm4gRKWVnqkbeqvsYgQ75JaHVMadRngvrYSaNMsz6VSHg8U",
  "key4": "62pmznZVCiVzYMcktznnf5QTVFQZxgwdKgTRqqC5GYywGGqVoed1Xxft8Vsu1NQyKqrPQhdhxm93XtEdB92Fa9zZ",
  "key5": "2QqwPLHdFwaHqgKG4NXbwn7RTf6TxEzW1UuYUhqKme6uYFgQgVfDrCUXobXNR7rGqac5zPDpLnQnSjfS5nCdqAeB",
  "key6": "2sgr6goMigzZbG3hY6gKtgutfFTPPkDC48p263Gyt6KWgmS5LP83CFgTh78ekJHeDoLVqQyEDidwMuCoE7ft8G5G",
  "key7": "5QWyazHvAufnAqy7LcEDzq7THfZv8uH1XZabu4gjYxSQg2mYU6BBRLfvdKuTj7v59nuWLgd6WaQ5kyCnruXf6GPR",
  "key8": "3uSAVMvDgk4R9f9LAXpBCdJcteZA82mHsfYPfgD6TasTWxBDQLC6dSUCfWTnYawXkfujDnywganK5KUkRQEfRni3",
  "key9": "YYzk2iJKfURWN5jdPe5HC3sddsWZ9fbMTLXgihJmRjrhhZFdrphHv92oYvT6YxsrVMFPEofyvDND3bHj1FVnR8u",
  "key10": "4zFv2cBqJDubVJ8KpFsRgu48r2Hck6qq61zw4Ar1x4cSFkJQnYjjs8qJjgbncH6FKUrEk71a2W5bmLfJX8akJq1U",
  "key11": "CvnkmeKYFRJDYJZ4354tLDnGCaEgoFFXPZdN5MtdLfFiqCzKfj1WPn7827ob47dMk4VGS7C1CEB8Uu68pzzt41G",
  "key12": "5xykHq7QVNuAp8TpMiu9HfCgyJbwz326KLPJqw7JVdrxQsrjLmLew2FeMDvFEWqnpuLKjsEJoAbkexh3xJdwZ31P",
  "key13": "NK1VhPe6rLVGCzzJqdtVtzvx8gf5HwpMbHPnrSEymyNA7GZUVAUfAmcXu9VxxBEQU14qDJuCwz6hWPc2pg3jatS",
  "key14": "3pvfA7CKA7tXHKWzFQYmxpLETTWvEzcghGwYNGVbvoXFMnfkdaqoU9vsHz66vxQ8EHBZn7ucAiMidaWCN2byJSio",
  "key15": "2iwr54rypNbJyTjssCjiSyisMV13ogsAqbXjtW4nPXuhP1JLW1mnUBceKV3VruEYgDZnd7AYLFTjiMp1binYg8bg",
  "key16": "WF7RQZWepAaN2SX77c8Eto6bvxfVTRscQgRfXDJKBSXRYEk7NST7R2iapHR1D9bKeaL8YTTyCtKFawpJdwy4Ze8",
  "key17": "1WcXcaQLiad7D6QEU71bixkYTRPBKKEefyM5maitZBXm1zsLd6jwc76LHuTom7LDo8VTARRTLpMDCJoEk1BEQHQ",
  "key18": "57yfA7TuoYFansMqMqAQ3eURYw8d6wwuaCg3c6SgJ1VLTSohQosrkY1xmfHqLHSd3CYx6apTL7e8ohMNknJXiREi",
  "key19": "fpGDmZqFGPnrDpeWYwF7nCTBxwZ7zEMahie8PjS7Zf2K4n9mQQJkbUV6KaUqQyR8WHmMJt8EdjvuAJ8PZTtce7b",
  "key20": "67f4TBRr59aAhhgx2RpAyACEPCN8oEUGrUcS9piYnAbUuTZo89Cqqo87WfLYBMMx8dHbWAXLCh9SVtHgbiRptyvd",
  "key21": "Bv2FZMnGCeDYuC7BKBB9AApTSPSXKqKRwx5c7xhJcK6Z9xkPkgtpwfw4Sv4um621c4RJJYXrVpHE2PiUVQP187Q",
  "key22": "9JKE2737kUgN4Yq2HWzM7ckTUvfKAcqQPu15Eqc2SEQ6W712GTR9mnvPmbbnWk8pH68hUs1BUREKM8R48dZ6gAR",
  "key23": "VwegHhbKDFNWuS91Cw5fRXpa5tKYjuuimixHLV5y2KbakLkBKjQaXboHbuTYocVS2FLAGFwAWKPTCrkPngsQJKK",
  "key24": "4TVUHquAxNHdb99UijWtJihzttgbYnd7gLxqFYsTC2KhQnPoXnv4ySPcsBYWi8e5CtUKs9SXqYsYhoyLML5KvyP3",
  "key25": "3nkDuDfERwRv3kq9V4AufiMrewmz9YbPWjr1iUBBKE9ZW1GLCVqV49wXbc3QASy4Wu8byk7wqVFWWMqsbGk5knzU",
  "key26": "7KWsDHaubDvb6caAZ21jsZ9xNxrZqTUmoxjpqfYcYRBuPLPnGwXxJtr3an8xGbjg1nMw46viofQTpaVYHhk1onK",
  "key27": "2g5KFzRQBLHAxCqm3N8V62bkhnuzrbvxWgoj2xHVqy81cKJBbgFfjMdyhMWK3frEV1HTiLLUfpXw3bhVrXUsDVdB"
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
