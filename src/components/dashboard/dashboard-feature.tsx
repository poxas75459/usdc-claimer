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
    "WXRJhR8VH8xRGXwwAMsaU1dmkTvjKkhx36paFZCsziYBuEMVFdy7CB1tB9RVqxs4NL48Dz6qiH1cgHFFjrCMw2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DjUismdkK1TuMMJTbFWR1R69VvvVo9G8jciwaZJwcgMCDctzCsAJ3R985Y4Z2KTBZhEYSnty7B8n6P6bVYwRY3t",
  "key1": "3EhGs2Dx1zSBzWZLEZPcmo1uRYCj4CJy2Xy1bDh7qwX1jcrNgpyb2gyWPQnezwWJXuF2efnR5QEaK7a3QF56WnCL",
  "key2": "2MU1jRhk7oG5Kjm2RH36DCUMpH9ZUP8zFScCWsSiffW4jj4Bwg7CzqCK6bxxpAk986DRqjAydc3vtPU3TRDdryNd",
  "key3": "tHTgLPfJuN5tB2GFaJDYsBMLnWCuHoUbYDZDcfWhuhn7nZMMsaNnjstWcPxvrLZN2wbdefgcjgDiAxeeT97i5X7",
  "key4": "3cGjAgaqiAiJFXiyzmLhaHswgMDod3ndXXPP1cu7Men2BdrG36wD4xcReEk5WaUaRNgdEcpVxLjUKpFYBLqxSZUH",
  "key5": "xgdxnBqW51eDjSxve7zFvWNaCXYvbmmEF46xer6GUdw1uiYEcF2cyPhQGa5Mz4HJqQWPJERCX3ARy4CwfdZDFg5",
  "key6": "2mtGpDYtZKTFfVVRXagxywfcitseoXiuGLEorWSu2HWAcFJ1VxWoHPe9cLLBLrcM7ejirUDBzFjfKACS1NZNy3CU",
  "key7": "53xMGNU5pQUyQETyqiZUKV1AogyMbBiL1w5TrN7uNBakPpWb1vjykuMRA6i1UjPyYezaQXP1YUB5HNL9Hw6JHhNS",
  "key8": "2DekwqPqUyMDiiKSqfVMcdLvAPrbU7z8Z6GowxK7gPetybhKijvhAXPWx3YgZWqeLKo59NfirZJZSfVoN8if9LCG",
  "key9": "4BLgPygVbC4MEAgp3rZQzSj84UPae4z5yxeYiQDWf8ojvWgPUn4x6ciUnZAP21GpRqvdGRwmbhPYmNQe3VsWnoXC",
  "key10": "5tFK2P2XpJiq8D62JRmrc19vs7ew1DrvG59fVmfT3gWtPM1MomuwuBXg4Gj5xj2M63rdxuPhrdEPxrAWXHkfyXRX",
  "key11": "5xNNus2RyZFEEdTj3WowJTgtSsDKnR2MBYGUh5sjxfv9vavd9Q7TvnsBjhMauXmrXwjixDSg1Db2fwDo6g8xdXv7",
  "key12": "2GLDPR6KiFVeCJNSD4FTZdgqDBapct4xia141yGpA9wsG7fCqrMkLA1SB9pCf16447JKSnriW3a5iYFhRQKf2SUb",
  "key13": "3SxkVWhVq2WpTac9rMBrU946VjSSE2CJ3C1CMbWG8TumimJNPmpRjZ27gwR4Bw3YtUfGGsdYN8ke7EpJjCQo2HeJ",
  "key14": "45pJGFmai8kqUpAHiFDMFeqhQ4mk4EFpzJ81uTH1bAMUMdBDPH5BJknJFAUZYG8eaKhorVizs5QaQt9ZXxpfRbLq",
  "key15": "3gbvybz265JMY8HgJjvX1SKcX52F4PJcfFbFpnipzqoYY5qcZLr9AXtLgjJgLerSCqDBkLQs3yN5wqUxYpAGvrQo",
  "key16": "4DDPCSQvYbV2XHjqQXGu5tLCY1xF2YrxNUaEj1oMXwm37KjDPRbSB4VojRrpHddRKCq3g2MAgQ1yU6gEqMkfXRtg",
  "key17": "5ADohKJaPZrXEiTqD3W9D9yaW4cKPm3u9PoeDBkZZH15yX4n8nzSvqL629Zk1Up3QViFSrtxNWrjZ4ZVRNj7Jom5",
  "key18": "64nmVoBKHWzqiVeFAjhLQLjSWXgdKH5H7Uoim2sEcNoVykkvZxWx64mzwsXCEPmAnjK4FAnbUCbJFJNo5PRtKToC",
  "key19": "32jeHrYiEeNtHd4HuVdPNcvVktREFM4NaYxW7bZEr4Ta3vD7AQ8rKtJhDx2zQtMpNvHTxtH1WrXccVHx7N15qEfi",
  "key20": "4vMnL4ePHTgTzZZFiDbfqSkXCq638rzU8ZPw8qmp9PZELcNXHn8sURv1xo4jXo4UBk4tWadnijhuvcFpzbUGZyvw",
  "key21": "DZrUJTKbsNkCSTL5vw5R8YU9f5iwiJPtHTHugiWE1v3De1s6sM2SUAk8P9qrCY3kEm7wMi1mr7KXd7iFbnYNv1e",
  "key22": "gHQS9NREsqhUcphjGKGMbbuymsJxu93rXuemCT6AEXiXhopEA9LvTLJ7jrjfB7hpQPniUk77xe4YjgRXJitiQCz",
  "key23": "5UMJAKet66hDp6eaQor1MgmTcwpXQBfJLAZh5cxvnXkjaMAMVcX239ihhEDpCoNinhP1p2FKg8D6Z18tKh1KPAqs",
  "key24": "Cs78AxAUayeKn14avTeCGTuBnSeXtBgPqSFbgu8RFYB7Cz2my6AcdBKPGPQm5Ma5UEgHivp5jLJSRpq25NxXNfP",
  "key25": "3Fo9nkvKEMj8h67SiyPNrdUnjn2mmSTCbtTnujRGDAKx72JuzcvHFvUDshZfTgdcumGbjUPcWHSaC1SbhPYoKazQ",
  "key26": "2m5SkuPEiaCNgq6dwfSRS5LLPj9GbkW3Nnu6H7e6xrN7wHHjcgDYVKP4hK5vhD7R2gUn92TKXk1iHgUqQVhtVCQF"
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
