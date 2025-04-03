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
    "mYotMREUYwST1JnuvsUsQK3NfLPqSayEoVEUGKNyRG7wW2KUMoJM6t1ixeGyLBrpY1C442Dph17PeVJ4N4sims6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZDzsC3uvcSX8xoLGzAGQLtV1gNo37Bag1xzUEV4YqARYzxViBe73D9ic1yWvkdF11jCAjkq8GwotAGH4VdqCDQF",
  "key1": "EoEfMCuJ2pNsFwmpGaHAGwJLHKXfVCRBPSeDGPpsxbRZP1qo1pdXby97K9DeGXU1du8rSE7wNbdjt2qCiUYEsam",
  "key2": "5yWce2mr6S3QRvvNea51Z6orrRQZzE8XabeMbW277VW3xqJuyMitnLpH7tbUn6BwzgvPvETvSmdkjhst183jkiHC",
  "key3": "35fR4e6rEaXFW7wwUzZRYjN1MFZ7YH7aSA7MkiyqmHzU456jBAn5uKvLawus25UciKvuN9yo3DwEBNCGpicwos7E",
  "key4": "ktXSYjjxXDLwyaMn58C6KmJpFhFSAWyYux5hpfQwtkDTJKCDhWwPryoBjixurV62ouHqN4Vp5Pht4JApZfeuVbp",
  "key5": "BA2bS4v54vwcn5vzKh7or7LsUb7Zfh4JXVH8FK9nzHWMVT7FhcYHC12D3exsUZMSwwMYX1Q43j2E16LBoGF9G5P",
  "key6": "FXzX7tuH3MnnU2Zo1TwTK7Z4BYkpoCAuPQoV9Brt3KQ5Z4r1j6ydWqx2aKks7Q6hrxN2UapbAjvYquytEkq9Ze5",
  "key7": "tqzCqN379trfjVyfcpvQVnQ4192jgq8YPNmEh665moHmyUKvfontb7ZVATXSAYdMAKSYhvZodcF77L9u9MVMSnt",
  "key8": "3iMEcTZQgbst5mmUVBP1FW79qdzd8SK16NiF48pPhu485c9fJjsqp7LCby4QbF2JLQnya7Z7otAmmMCSrK5qdjMy",
  "key9": "39KL4mnU4AtkwUWehVfksRbL4BkzotzPy1uK8kYLvkFCKHbDduUEjwHyDXMSQagt6FBghYBB5cLxsjNtVNVPXjym",
  "key10": "281nNQBoztidoYWZrqJXcbADnwGiQyXGJEDghMpQuGLYz2niv7dMfJBQoZgKGmh2QCZhpKyeUKCf8dUqwkGNrviQ",
  "key11": "22rU9bwTWVWz3zvrhm5Q544q5U6uv6MkCs6yPsvAdCGGUktj2scpLdnkaP86uPAk9F7VKYRefs3ooM3HKMUJY3Rn",
  "key12": "5tSxMRktm7GKk2XXFvPmqRwh86sMDFTQ7ce2dqnxWyUEUkGaREcrxDttdYVhc3x8ppvY3haAbXpdAW81jHBb8raG",
  "key13": "sMSmKgm9jRBbPeT3rVjnHwkd2tHcRmvBvQUutgFySnVJQ8PpKVnFS4myJ8kw2XdeteidegK7wapLx9d4xTU2AyY",
  "key14": "31tMbrrZ2vqcyggNULsH9nPvhE94TfonQwmg4rRbo8bUsBoUnE2VMibQBNo2HzkuRc8EtpdsyBzcbsnUqBKjzJEd",
  "key15": "5TNFevjZHYdQMyvhomxRVyRbNZ1vuBM9tGA6pGH19XAMkJvyWbaGztE4NHgjcbv8qfDve1YQsyuCT6Zt7q4TAHrM",
  "key16": "31DVq4LfJLNoT2vLipM9fYQ7FEavcx9jj6mECG4J3Bx31XFxYXReRBFFWvZtRLGG9hKV24YX52gomqPvEKRHACFM",
  "key17": "JAhEMoTh3PMvKiuFZkSqWLougeZSgoVRYLNdwKz9P6KzCx3VtYjz328Mq5VhCUtBT8FPL5euVzbYMLw6jJ98W7z",
  "key18": "3MF42kKK5ocAx5wFjXtyuUkDT6EXJE8U1xvttBEdEwuKpVZ7oW4jvLJrRSAN9KUf6x6DWMqJY9cCh52FWqyV6ayv",
  "key19": "2czdzTCBu1jEPReFDgddE1aVQoUZdjUvzxfozwUhpciaKGcodAGvnUcoowUFYL3kGqCTUsqNKViujZpbwDQ4iH1s",
  "key20": "LeEWC4aW8NyNM5fhvzLxpPm2hmqbSM6tpWFozUyjYsvXXSCcuaZaeMVLhfgNTbL56mgBECiyBx6NZ2dtbhhRuGq",
  "key21": "2Kq23v214zjXapnY5hLWij78hVCf4zr6ph2YGCGkTrV73K6Sk9MJx3Vh5uFrbdmkaRNXsAS8fnrEZG5o2tZvu9kE",
  "key22": "5iUJzReKfiHxDfxpbfzUcfZ62cLVerriymu5oPdtExc2eYMxVW7kzfsBWZSgdj3LcLGhXLqnxgoYDFuJF8aT86je",
  "key23": "4rehV3cL3iYVN5P2y24Uy7z5p7rJnGkzxhW5zxxjwRFfNzucyrf7vieMk3tYZFTDqKBYNvJ59KTeCkVgBZKZQLJN",
  "key24": "4kC3yzS57YBFfsDoJ2Zk3E3ChpYxX2qooFdPCejwtwks5pk9nsD4DFU7yQAcmoa1vpiWWrdoGJJPJvXY9QfZ5xSH"
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
