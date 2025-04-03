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
    "3xu3xVP8s2EaKCuNrqcCpMzfQSjHazDgHq1XtpZH2wZ5eUWSL8hVKBSkxZ5pBHFqNrWKJcDS2Vm1o1wQ9mK1ohwM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6e2irZr7cvQCa3Sew3eFrqCRu3Qmjh4pWV66GaqoRTYmarmDWJpF1uj2Yo45DnPU7XpBXtvJLn9ks1Sdg6MN2fP",
  "key1": "3g9cMzxuZLBfzR259fi5Fg1JSJpZJYT5LLckGEGAEJrXYBRWCQKQDPLNoU3gVKswJpiZEdx5m6ZxPSUypsoJZ9rx",
  "key2": "6LefGSvmy36UoDBpATgAdfRq5kCHxCMTMWdR711QryzKLDdvaLXS8xN8FRTsehU49DvLFiKKZQLZVaAGTnxwr9o",
  "key3": "3AgRNvYAjQA3sPheNecAvU1q8DCqKDRcGCJ6FKoiiuMuC8ErFHzLAjcj5SKWPEvehnBWgPYvWwvbB6PCqW8gRwpf",
  "key4": "5ixcLEnYA51vWg1i93VE7rvEEkiaYtspfpze2B6fyPMyWGnopWumyFeX6yrimhxCekgnq89sPkHgTgu1QwGdmVP6",
  "key5": "FJaFERf19mKgsyi3qVmGkwUtXSCLGXbHXR4YejjvSEnR49A27RVHDaDVqNvdZMCyZXH3kgoAQYQCw2sHWaqDehj",
  "key6": "4RqyqbqUuJF9ZtuwDuVPyMaHJHDFUcu5Zd8KZDuESdUWBDKzhHYZDh91Maiq8nhS4hjJbdKrmgt1nnDtTfUHqJwQ",
  "key7": "37em8ySfBzQxtWbNGxhrd8Y82r4ycwYF2ULiPo3mcqQccgHcjrFKax4jXhE9as5SSLauav1wz8bK7jSLqx5mHqjb",
  "key8": "36N5b9MkqZeENSstptR6GBnu6QcY3VKpgasTkBQB1sMpGDvJqtvYBV9YPWSLbY8gEbbW2A7trVbUHwvVNpziCZ65",
  "key9": "5znDxw3kwMcdtxa2f6UZnkhBY1bAs6JH8L7Wj3AyHuy7zKDGfffnGsEofGmmUZsw2NxJnjTaayf5qgaa7w5ByPQj",
  "key10": "5vncWEGYEkSsRUcXDakw7C95hxVszC8CBZcCZNHMyBdgQRQsVmUnFEi23kccADkrZzsiVqZaNp7omkLbu1Aw8FLG",
  "key11": "3dAZiznkn6KJaZknqbBzaAUP9obRyDfotvRzwABSEbVpHQn1rimT2JwLs5d9fqJVDPrXuAiNJyNFQESC7raMi487",
  "key12": "5rv4VRxPbXv9hcsYzHNZQEKrrL3AXYTEFiMoRLnP6o9WQGmesktqVMB7vYn9bGKEk3uKs141akNH3xcnxwKcGm2v",
  "key13": "p4wxLsfkcLsp52DkAvNByiDxj59zgCD8P3RsSivj5yVeayioQDb8z6eao2gm1fKcnh4oeiGiTpMjmmTefEp9ZbS",
  "key14": "2RTEcQwiPY8c5kchap3Bs7np7mQbPq1tpG64R5r7QRKBgfT6HSZ5hY8tmKqRwbSk1czdwZCaJNBktiEfVm2GfcGA",
  "key15": "2gMAhRXYHZSBMDU5DFzt9XDCpG1oXNLxUxJ8qoHgSN3MbcFao9yp1DrV33enLMmyBfJrDgjiaai1QpEu1Hj6p432",
  "key16": "5JcJ8pAnUWwGBdnvq7vAUqgSuRrCVy2656Jt8nLu1tXVkUFQtnSXc43oackkG2NCwtcP4kg3kzbWfBkRXNgKhsFF",
  "key17": "3zzeSnbScZ47MqqCxMjjcdxSsTWY9GoiNQqCrK1GjgzVB5v325NQVfkmGyo7QY6orrkfsJ3f2byP5CrKBTEi59Pe",
  "key18": "5Rmm433WS9bTBY82VcDwrUVtNXdWcRnmVhpx4qkEX8VN2C2ReHkUe6pMfWdpmmiiy3k6eDew4ZNbEcyC7svB7fPW",
  "key19": "3Gei8YYPcksoCEYcq3dxFSNY5jmzKXxCvV5r8zGE88xk7Lv9bJzBt4UbPQucQpaANBhh3vJ36dUdhmC37695msvP",
  "key20": "3gcePCuKNTkALFMRjrZTt1BVQ8SNk9JyYDLDEb6EppArZSUMeyER4oGC54LMZNA3FaVy4JeKBFK8QrNqnQd7v4ow",
  "key21": "5EGvyW9yH1XyKNU57uifxtZ3kZqLxp2FJLZFsh4FH8YESzr2VB47LxXPheqQMhQz5ezLMGom14yYy7NWGJGHcuQ1",
  "key22": "5Ba1G8P4mi1WcPaGpFLMt7XZDsdvHNibJUagQwVwGNSGqpzegiT2ye9ts6iAA5g1pKDKW9yYyfjaNWntMCNxcUBM",
  "key23": "5RHaShbQHp9s3xrtaPSdHmJsobZx3cMhHqzSGLRxbTiEBpADENyXsQPcUzhzcJuQvaKgXQeguZS2W6KT67bSMVp9",
  "key24": "25rCQdN1jCxZjsWirDpq5nRLCkUMfiwzi3RcAUQe5AesKiczJAXAb8xKXS6yGSw3LAmSx9Ev1rCeDEgtxVRujeQn",
  "key25": "Cc5VRwSDZgU6qb6jzpq8ue3nJ3JDiwv3kDLt4WLgaCj1KJzXxjLhJNSdHTjK14jfSvG1FoFFh6YKQWDDte1fAzL",
  "key26": "QT6Nc179LRmw5upsijqS3Yiv5QUL8ZaXc91MJtAtHJnY8GMtw1rQ9SUHB9Y7wyQwpS44WRsP5zXyoLjE4k4sMdx",
  "key27": "2RmjbPaqEzNb1xKYPeCRKTKxw1r9TA2M1SGxW7w9bXTyrHiuZxQBDuFD5Dnhp3smF23SAe3meWdYXXYQhUcWLh9o",
  "key28": "2eJ3zLhhepgeawNXsy3MuRxraEbqTAFStFj7coWZ3LcuKLHiKaz1hNonDjed25jPGkXA3MsSPdjB14zfC1EXBX8q",
  "key29": "5EeP4y28hcDdh4n7Ad7opopcFyThNDudASjH6L4qFgGL4SdfUTUaBGiPjkanMvWeVtMVyCYsjtQzPnRPNTJPNxK1"
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
