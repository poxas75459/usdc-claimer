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
    "o1SuiwinhdXs8AgyV3Fa92c3ZH4tv5yebqHHZFHd7ENtXdphon55mPF4kMFxQ8Qih7dnC6CtTqRMWfMxGs3d5F5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Lh2ahjWZtnbUS3769HRJfr5XnxHQ8e9JDvuJuEUtyACtDSBojENYf2mj3x1zNJYdpwgVMpdnKrKWtCnig4cPT5D",
  "key1": "4dUTdmBeLcqwMBPu3m8EDhirqDGpqgfDG2zMEgxWXzA8unotiAV2Yp7KDL82CWUNxcmN3xsKfYj6fMKQ6HFhkECJ",
  "key2": "2q9wD9CUu7Sm7DFWv6qg71MRHaesaEqY8n7RTp9h5ANmEXaaCF646DqV8VFuAAQPtrJh7B7W1vuaiyHYU9YhVN6U",
  "key3": "3u3o35a4fTV9oNnaU9kDtNyBCRb1DgFkF83F1We1jBueh166X6qHVfAhaQCWVxDBGpXSJ7ckzcPMDgyKyW2YpaaD",
  "key4": "5uXn7f4cWrt3uYDE9ehAMEmCdg72A92qQBipAtFW7XTkgoRsj3aD9fa7XwCnRMaKZTWHwn6cB4X8yhxnGRowcMsK",
  "key5": "4mGu66hWN9rMQvU4V71v791VyPDqBtxoEENKd2KKYxJr49Z8Ke6KXR4eSxBMYktmPis6qtykno6Vw9YyEFyw7m1",
  "key6": "3eKex2UbL9qHF3gtAdJm2uWFLFmQP2mk6tgDT4vUrb8N29vgNiZ3Qm19QSG7omyBBCThWEEQQE4Fwsg9e39ADutg",
  "key7": "62UjgQm7VJkNqB9a59uv8mFmUPMMU4AkHraYGrx2tpBwgM3m4Ty7uuMpj29k96Upmvt2tzUAdXpHzmdXi9YweNEP",
  "key8": "2S49so14e5KW4LvnsuQiQfqzyEytHNngd6xaCgtzPrQHj9hmjqCkGp6gRGsSnd4uZ4PahWUQrXuNCsbkPnMhyY3j",
  "key9": "2vXUxPY2LxzZhvQmSTTT71YbUd9zX8ERMYszmtPPFxKjbXXavneJjhX8ETonYiheNaQ3tWQj5A6mKQAt6LdaMC4g",
  "key10": "25gFPUiXsCyetoNfhHHHM2oJ7kV54CDi4WA7GVEhkJqfhzxG37wyzJ2m4HKNbqrjYcNmcb2JssnmSX3wgokpJ6nh",
  "key11": "4RERwxsoj9gSs8zSy3vHAgCYoPFF3d7ZfWuAVy6J7pbbDiXQSNDpjgstkpoWfyR9bKdHp4cctFkDMHNwTHr5UXYi",
  "key12": "4jytvJMNFJr753WiYhWTyTRSLhpsoQQCbd8cdXGQhbAj8DxGa6moRNB67ceGpLF3xjPm79ZnLTpSjkCXpcX8GXNc",
  "key13": "5WCuZgsf7zHWodNB6zqJeSPxWGLXnrxfnEbFDhFWykwBmwLkVKkYRnqHcyeU6pJWSSbqzYJBSRF8cxPymU6EjVtf",
  "key14": "5NBuJdz74eTg7G6F3aJXAet6ZJyUarnrmV2uYZnhxHq6Q17zAxBAyqEVGXyKgqD7y3HK5sAak3bx2WQN7JC1EVF",
  "key15": "k7C5syRzeWk1W2vz7Sp1gfFDvjocNzUSr2VgmduGcWjj7eWeE9CM2eSQQjfoExpmzWF4tUZvDuVBAk8X9BEDjQC",
  "key16": "5gbsH3v42fbjYCGDjAdvngYAksLTsbLqWKnGwTuqiJrAw1qo6f6ZdpCki5txXMgFg4chXz3ErTT8otwcCbmr1QpE",
  "key17": "A1mMnjqhsxwjo3oqQFiBizteWMgbphf4ZUevhTNFin2ZRruAKDZor5DsFKoZTxev9UZSQfAEBiq9BC6fmUGMdsd",
  "key18": "2aPnAqbSaYBo3tVFFLtwTViTjvT7fYUwXjZFKvajNLuGVwGfeR9VZNjE9GEejiJ1FDKX4Jvr8xMnQhVzDtXVwp5m",
  "key19": "22UtfhBSxxrhChoruXRhxofkYJBZngQRF4QpNUQepiJe5ZKFjTV3r1rVi4oRdNJAuk5yZASpEJdJmrpFqurv6xwS",
  "key20": "5y4qcRZuhUfh9jC46iY8qeYvmQHf7wbt1MPexJ76xpUzXUGiq82cuDjK381oQBgEP8tGTxFYqDHhqsgTZodocivV",
  "key21": "4JAKTf2qwM9tsne1XVkHq4bhmNd1hiMpmC5qj9PYNkiqHMKHUWjpizYWpsPzEZkDvFTsaQtzuERVj5YBqbNxNq5G",
  "key22": "27xQvi1UpZBXxmnbtZc9kxDTgxqMGNmzmhpWh2j9ysny3CxE7Kp6eEMwtJa1TKorM5ZpKnLGx82Gn2DPG2kz9ksc",
  "key23": "5tAhudSPd8zRKXYBaXVonLkxkCuspiAVRyNeW5bB2LZGDkGui4z9wAvBTUqG1somSw3vnYBzMu1QWAQzxbXgWYrw",
  "key24": "2RF2L4rmwPJsonH2bb1MCKYwf8gT4Erj3Cc1L9kGJReT1HMP5c1vcxsBTiRtEvpaEkwxKCJ3JxCbbc2tTt9Vsf1c",
  "key25": "5ZmNrvfT3NTxmt3HKJszBEdmLH16e9dn3YMnrSAkwTJ6fcVhEp92ZuRxWZMECtybjaiS1PMhTLpFqpoyFfAb1uXZ"
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
