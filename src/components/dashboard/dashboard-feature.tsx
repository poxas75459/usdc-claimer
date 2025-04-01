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
    "rtEHoa9TSbsCDBM2eGuK5wWZemXvP2LSs2TntvpZ8hbs3t5df1EPxexDB8wFyxbVzj9FmLfy5edD6cp53ey9RpD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MgdemmhLnEG3XR3Ee9kZJMybtbfiN4KETSe13JHXwNtsf38iQSSSzqcPsy7pwri1Q5XrWgc4G6iDrocLuisweLW",
  "key1": "5fGmHBFjrqqkYFXk8DFAMx1258cbF1iQjSBQifDWUFaVWTmZibA2HBXdSfXiMq8Kr1HrdYJbWrcm7by1E4NxUrby",
  "key2": "2NGms2eXAaJjTEF2NMLxn2cu6QtxzgWWxBkoVMi8URUJJ2YnwmgVo4Kd4qTDzGogWiKweLzWuvR8XHdmmUGovMVF",
  "key3": "5Vt8aFCXZBAkZaM6Wf3UeCskisDXeX28sLnkjBtbiwpZ4WsdY41LupDmZjUerPFeyUv684qeex7njq9RePE46MaE",
  "key4": "5LxevhwfK3WAkv6wJ1g3xn5KUFhpwpCRhdNArE4PXVrqH6Suf1gAwVbB6g5me6sG6mm881w98WLdh4HLKSPHVSgS",
  "key5": "JsTF8v37APGbzi2uAYJ9ZcEp3v9n9cgCr7zaD1452zjJTfUqjjm5wGMh9j6aZ4LeUVZGErGRkXKuM1xPcLMBy6V",
  "key6": "A7Rsj1wEZf7MnsB3Zc4MsZRRbUVfvpXNpWXU3Dm7PqwrKwWPuN6WnpicU37q2PwJyoE3na2rSwhsaEnT8UuZ3GM",
  "key7": "39G5sTtWPqfPuN5y2zSQpEX8mMLAJ7KZ3FDrRQcEBRZMVyTuLUWGgdLKfFmCgiQphkbNbRMyrn65mgEMv16LRVPb",
  "key8": "2B3PsGzNAv2CnddMSkJzJhrZ7YUmjPyHazaeNKzd1SvpFxH9DzBsEcDqSDyp5851G5uhW41LdLdbe2eBscs2YEjY",
  "key9": "5p6QCStmuUqGHmky1bAVHtzm9ddCxL9CGMNntUVTeFvd4JVVhWfxX2ZEUuuVPQhPAS3R8oik1W1jhN1MZiqPR77Y",
  "key10": "r5fzWoLeAMX6mq3vo6nwr8SeifupjhVkyUteZe8p8dNkh27uduURdSrgpaEnmHeTngTUhumEUKxSaVVmK4a9XYM",
  "key11": "3wxgxZRkmGYV3eq5JkWeg4T6Nt8Sk5AC2gQ9yJzWt6bFhb8WbJrUsxHDTCYc1GqJibKf7A5w7fMAqfCCEGmZCwF9",
  "key12": "5mZgEZUK7qeK2Z87Ac56VPpuALi1ZVHsv3pXi3Rs8tG8KxYf89qbZFTu2PiPPhr5xFAdLZW6sT15ejaFRuguQn74",
  "key13": "5nRzUNt1GqAkdxx4bPh7aEcGBnKrVdKjuiw98xv776RFMfX2RkRt929tJ9iL5Vof1GmgiTzQe7X57G8DnhaEt1Yb",
  "key14": "GZ7CHBNYSTZ1KSh49wMArRS5sbofgzKk63cHS1B5vE6XdZtbQ6JNEMnWe32y2vBWuxeGSinf4okVz9GxqzoR4iU",
  "key15": "kNX8jHFWjuGMLt6mAyNJ2fzsLAHSNMcMC2kLjK2FvxFpWTgJ5yLbPy56o8yRyimreHvxuVmvCYCZYg8BWVpbVw4",
  "key16": "ssynSudnJoPNNvFKXUvtbQdS1jhJE6R2qfXPS5HsnLHLKyzWft71EnhHe8KydAy65ehLu6x4k4MYbrKHnvN48GV",
  "key17": "2UnELKbj85oBH8wYbrRQxSxoG3WjbEK8631TNLZrmpnNQy2DzcGf6V7Zc9SwHEkzvpcnh35EE8QaxQgyAm48w9XH",
  "key18": "493Spn4bVRzXq2BVdhi4P562ouzAoiBEy5PVRkdMF68enXVWLBpC1YVwxx3fyE9kzSo8uwT8KJCzjMWFsgQSViv8",
  "key19": "19NBiVoRqs8kNpAiwctJ3xcnUXqRZ6QkSCzGD9KsTUJVNJpVaqfBrJPfaeQsvxoauEmFVPFnTogSsgkmN7vyJBj",
  "key20": "3nwsycq5qt8qqyCum3sPJRj8Z3CXtdeXLGZL5zaNUvFvqkmTiQnSAk7gddyBAjMgH2QEWvTSMpadNiSndffYeZ8e",
  "key21": "KCo69zPMJJ8ZVHi3CLAVT7q6gawqGVHH57nfNBzAYnuwku38eVhgKFzY49umiwnxoCcrDQQLU2utbUuA6fb9f1e",
  "key22": "3xGLzbdiFcwiNmHoUL6bhWxEXFCV3JzfUg8fHNqjyxvpW3vWqjnAoC8zZ9ff5gkLtpzyYmcV8U3tf42ugSEQWvGR",
  "key23": "3e3tWyP1CJgHt1zx2xsrrid2rkptoSRvouWxUS7WZcYgTKK3eAjx8Dv7SySj1mQJCKqtgUvGnTJsmSt4JE4oQhKc",
  "key24": "2MPSmcHW7vfndubyBjMouwdXHTQLThVJ6Shm3axnK2ScdTUzYF3gZdB1NPeNnn4Qva8LrrYvvd9Dn2SVp6XMzSY5",
  "key25": "3YRqkBCras7wKBYVt865pnrJqxPRZCw3wtsN4vn4uN8Eecrx5cm4DKPN1v5eYXRzCWioziiyjUvcUsTFVEurAogk",
  "key26": "3Fx7ZdZ4t8gFxqyNtUsgLRWrHYuhaA1n1dnttLmWGgGh81xvk8LLR24s8262herGADGdJLoxepAGf2PHANMGPErF",
  "key27": "4u87Fj4m4sRTPSJCf6EVL1gNXEeHggWyMRZFmbfeWN5AfTMePWa8MmC4kLr28zp9XVKmdJJ1pwZGs8nnwtp5uTjX",
  "key28": "36T3NzjdBwx291hmTqBcxTDE1rx3KrS7uhUyu1xJZGQNpwZCogxcWx1fLFBFcZ4dX8oHfefCa6GXkoWejXx85iPJ"
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
