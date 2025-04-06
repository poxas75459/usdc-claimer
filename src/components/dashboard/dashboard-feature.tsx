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
    "4Y5yikxfZxWzegBa3Yh4DcUCuDXPvDHji2ti9BhCcGqi6j1P2PAoJyNcrGeK9vsfvhBg32cB4xibZFyH9iFbLvEo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nzNggiGD4o1L8NSVKSYanozuaZRdM5rDCPPXRmc1JJpDWLUcR5izryJiPzWvu4AK1xTL9WJRZ3Qu16KRss4DvcC",
  "key1": "4YG1qh2VwDLwNsyqTf9LiY7T2yDxoVbR52bqGbjJmAMeBoy1HS13w7CbAENKJxdQJ3Cy3Skw2xhiWCKwZqxRnCjz",
  "key2": "U5MLHhH8PCMFUVaw5YH1568bZwqoCCWQxtYHx8iVqpZ6HbEMD14Z53NUwsvRcBghMybY4xSxrzu9xj45v9ABoNA",
  "key3": "4ovgi5HQDBW5C71sLRs4nhCF3HvCaD83DowuWCQs41SKSQtjpABNiGqDmBuF7Hiu72rJWF7Q26SjDykGdgP7XYFo",
  "key4": "5aBNZBJHK2UZM9nUmyusdbkJ2ApsditHvb64bhrr18aX9LpfvqHnbYb47po2ZFffAMML5evq4GkH9yAuLzmihDzf",
  "key5": "2pQy5gw5GysrLpYib2rbUrCVPqsT97wJHab2WvBXGeEiKxYvke6Sy7xC1knu8LJhoqgrWDT39hzfkzWHEuZFmeqQ",
  "key6": "FWMBgpvF63i3PNq926HXjFoaoYyYiC6bD7h2dqvth2k4qLXLS8hBCdStB4bYJAfpoHBDpbCc7GrXYygWPXowzEy",
  "key7": "5xsRJHTZWfRLU3hs2c5jm5arDmGc62ep8SE9qnXKwcsqZ8FDdKJHFFWnDXHeTsCGiUQPuoCQteXRNBZBVop3mADz",
  "key8": "pWRfpZCmczAKKPZD6zAy6bSGM1yuBHVg6B948vsmioe5ZP1QqG26oYFWcbyKtoadt4uvJpgaMbHfhnDUPtxxVeh",
  "key9": "3LfFCUz93umsaWkxdE7awvzEKtrfMueWsEEiWvcp35PEkex6JquZdHjE3MQ6hupsYhievC5mCEPjNmKVN6PTDzz4",
  "key10": "4fDtg43zncdQC1M2v9QqprbQueRBwy7cy6cMoNBFenmxVVQnEhSXq3R8ogHXXyGmVM7MNy8cwyEQCv6Pi7ub2pMS",
  "key11": "ZHBTR1oUTbuzMsqQ5FAoFdgS5ct19dQXqj4PtE8N1VbrV5uktze8sT8uvFaf4TfmaQvdnyLUXiwp2BTLq6NgDxQ",
  "key12": "5xswzYdm7bhuquoBiuegwWLdfSwnZBdFyTNCJ3gDeLpoKykwXScMCC3NB2SB6oyU9tF4wj5jsZrPZFvbVjo6BjgS",
  "key13": "37cQBudFWKbkJgeuPm5ibGigwMxHSynLsmLvPMYnW77NoFDTaKPdhB3S7xp5mBikebUy13c3U9wi33tNjDesiJfA",
  "key14": "3VtGMT8gNYjfWSw8y8Fv4pdwBwyPXLa684NiL6T1vFZ3oTSx1PMs8RZf5GoTdKDURG6nSmZSNjsX78eY1RDhqGdm",
  "key15": "57ZqzuwkBNZVJZj7iHx7U3GVeG1BrbPkE4HiCkpbgmyftjPMPZT5rpb3NpLdYaWGUbsuoXUXV3dcYJaFyM1kgV3E",
  "key16": "tL2ufsNqLagQfbpviLeZjiiCdVPZV8JLxDeXH5vQYUUZsJRjBPiSdGNfRUv2dfDMDFmRmEK9iA1dJ3PH69piyVc",
  "key17": "2EJUoJoWkhU5prCv4YjWZWVMghiLCpMJE4zyg4xANiwrrBEg9eboJV5dLiRCCqDd4JAeQnHg9ZwAuVkXWDmjLWbd",
  "key18": "R3dF5Ht2W4GwrdYxEkbb7vEw8LYC2dqJVi88ikCo8hXP5ftUG628r9yBAXTPA3KNx8nBbhso6sSXebhN7NebgbM",
  "key19": "4a5xogCguBzpozKRrceMx7d9SB5YU4xquHsp5kxqM5iZv5RdDaxmAJc9CKsh3SxmwCFYLxd8RWYomHrMVER6wYkJ",
  "key20": "5E5QXVb1ohgCfbUxYt7RhfEGjQjL9y1PGa7UwiJHHrGLmCLV9awDnweZqks5yHzStKSmFiwhfJJ1tjH38LPX8odt",
  "key21": "2eYJPfXVutETvg6B4k7UgWEyLHTfVV7VJT5QRoniKQRANNZ7mjsW5Wjr1JyrdGH9Dur8U1DLWJuJVZ7RUgdC7RYj",
  "key22": "4tJnpGWDgNLmiAm4Spfjy5Y7429fG4Nnm8ZRf3tPkpjRE5aBCwCRMKRGoRmDZPjUdm9SoiM67J6KABssZVDejNX4",
  "key23": "4kjwgNDKfnGQjMPmr1MSKfJKiVBYhHAuez1sYQvHANd5gCfxGRGA8SYeQd4Jfk6NgpxewoRRmyLsPdSAsq9JhMph",
  "key24": "5EViBPkFKdqNj44hSomSFWMwo2gYXPiJcKHTP7LXCFHszDAvFXP7fhUDoD5kMgaVGiN3rthwoz2gQ6R38pKsVP3o",
  "key25": "EtmfmnfBAvSGCL8FNydfLNUqR8QVcv3Ep68j4EDxH6CcScpERvUFryEaNszZoRZ8kveQ5mSUbA1d8bohrPddV1r",
  "key26": "3p3MrsfhMnFFaZdS2cYd3uPFUFEvyTqGX6ktVSjQGR9VXJ7HsyuDmx6PQsXewAabatYSUuGTDBe6zFrAh5mMJS2a",
  "key27": "3RbhEzRsjUXv2FmjScApfxnRwi1xaDHUzh7tnghzgTQnqGK3GfLWUnNxJ1toJ9FwdHCLyWkcQStnWNrHFFAzx7eH"
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
