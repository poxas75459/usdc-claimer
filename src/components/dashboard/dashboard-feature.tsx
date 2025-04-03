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
    "4grKTPZ91NUj4LEDHF86XC6DNmFVL3saDb3wK74UQLdxtQdBtZdyJLuAHx6hYbE6zzP4LuXKfcZ9HUZ4xvdaooq8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WXhYp2ehT237enW8GSZdZ1L4RBkv55otax6tdzwZEhf2PuaESi4bnn7owN5zr5ZsAK4w95RJfH2ZGPKhpqtpfyk",
  "key1": "4cYktzFxzVshoPG2c5DdeiBcQFg9aEXFe7mhDC9H4CXuHc59dCQeLHRTugM9RCcq7eAuorwyaz9LddCJgw8PndKb",
  "key2": "34ZTrCm92M2gsBpq2ZSAwr1PkKZ1VexSw5evhsfqn8iSgEyaKr9fgP8ugd54NhEbaAoXfdFycMCBDZLBjRRnbAtt",
  "key3": "8S9Foc4XLfjYnUP3RHPkCbncrfS355sMn7BZhhHqpEgQq5Q5TQfPZAjJ5eCpEpWDCAjAdSfaYriimJW9q46KwgY",
  "key4": "W3FJyyFnYUNMvuuYcprwQoGmjXDgrqxpk6H7kkKu1vky9zDqXtfAEdKSAq1YrZfhkjzBpL4Mug9JAN4FVyowae8",
  "key5": "4sDh8CigEFPYc7kGNNtsyz2UJhmwESjNuUtucqtdDdFW41TFhGnob8ovDQFByh5YFqKkb1xTa9dRYKiXBRdMnRS7",
  "key6": "4SB8JJpn9rHMMUyb845eDGsr945RyHVCabDT6vL4WfLDmrZQvRJXQgwbq7X9NPHeYTgJrhV6nbafaz9ozAHus6Wu",
  "key7": "3DMMhut2bVwPMAhZ3DMTK5wfxeMP3TDFbVZ9dqK2BMiLiw65j1P3HbgKoAsZnSyGCc3aWU8i73doQ653HyThacri",
  "key8": "gxJLukCMdK64uoU3TKdxyWxyWsUR8vhqw7H8LcvLv3v2tdBSrPkHugDk72xsCH173Me99EW5JvePNfjoQ4aitFL",
  "key9": "5YEPadyERaFT4NkaWKM61evyn3zCvuhXCsFLukgDnp1XzzKBGMqQmyYMCC6QQK38kr3rRyoYCuz4hxTfhHW3Kuuh",
  "key10": "2zcPPvY2LhGV6aKD9sQvkTKGHzmoV5FYDp32o9nXW8HVVVbt9XDf2o8bgHABkHFLtKHMqjW4F4ftHbXu6CugtwjS",
  "key11": "5P5bWgJg4JUUQxzsakvAuTdywgJ58XoBoXZyet326TkTPDuGbQ92yZQQfqqDfvQk6hU4mgq6SPp5ZKWJNJGoZWJb",
  "key12": "3M8enfd2CbxXxL3ERqDaRKEUtPUgbfwX7hBiU1VBLungeKp2MS8BAxX7m2TNpupDG4rXencDKT5z2cgmV6LuPrHh",
  "key13": "26N8VWq1ivHNkuUbyyzKR9Ssg2nQ6j7vc6zw2zhUZRE5sBNm3vtDu61SHk6XPyADq3d93T2PGimtB73fkfncL3N2",
  "key14": "2zQ95HpWfZiYd4GEqrZ3qdTM6QQgxvjnVtgwWcWJSZJpNbVnpiLxkAr1PF2hEZ1hAZMff48xM7hPo71ckov9HmU5",
  "key15": "4DSHra8aMPepaNBGnR4GmgACbVYMYxAMuFcxwcHra7DahagqHtUmkBGbg8abKDqD3QPTQsmXx8F575iDziYtncCr",
  "key16": "4o8imo7qeE9EfD3ds2CYEVe6Ja2Gx3k4wVtYWKdRZd1Vro9usqxE89bsuxX6BS8wS8G4gSrtUb7f9kGTK2ZzKFmN",
  "key17": "3aVedjyZM3kpbCppFXnhVYWk4Mdw48WjbJUVeV7WTEzrFx7wZbiJjkLZPVbDCNZ3qZyiZtYJ8hTsNoQSLd6SYJsF",
  "key18": "2UidDP4QQ4srV6AZhrufSF2WNJT2B9Bwhgn2UbLJ93KthfgULyMdfxdMYpKJkRd1TNPT9ickw6drewLLqjKAbDK2",
  "key19": "53U7cZ61SbNrZDMzT8zKS52u2HvFRPKLacTRfUv8UpAN9zu39RXcNkSmQM6Xp7NqyxgW4tVUeNHi44Z9bLpXHFik",
  "key20": "XkjUpgxq9LV6FM7Cypduh3NDs3J5231TeEf85e4u9qVtAz73nT5rNY3FuGmJK4qzFAyJ5uqJqHkeZKUDY51AMLw",
  "key21": "2QGcbGh5kz1yPpCsX6uW39wwvbgpWs3YhVS7DeKArAEpJEJ8ghKRmoDxdEE53GTgavPwpf1Xxu8Dei68wMdFBAFg",
  "key22": "2nNHcG3SB3huxccWfRs2aEGHFsZU43nqWdsf1KbURNJR3bRkGPZTh684hJ5doLUDdPWn12RHoqsTse49zY8QXwkJ",
  "key23": "5PDBuG2yEmryUQ3EUzQevMRiDnEtbL4HYV2UXEkA2jLJ5916VFot2JcPyCFas4EYczriqfpMwWTxvBRyZdAxik53",
  "key24": "5bDoTRmwm55AYKtQaPHjLDi9UQxVCzC2V8xE8QdHrCifvHRq7abro8up8jReygUCPAy9Cz48K6kNG8zYYR7sKFkZ"
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
