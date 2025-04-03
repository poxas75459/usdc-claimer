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
    "5pAyzUXS1Fr6HJ18Z83AQYUzGkupadTqQ5P8d3fVqLcG6e32dx9oLo8sRHspBNHrrZmq9xsY8pcJ3cxknkKunTDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V12PkaT2VpcZGSBBhb3GpoYK217dGHcqBBHPCPzpcnp2Fpzvx25eTBagQr146Y4mjYu7WgXVXMu1WhTtXottVgT",
  "key1": "4uPVPG2XnuamTMALhjxbUWJgcfVrNPxs3XUbPPTRSoVsgh8GeXVtj3dWEDy5Xgm6hWhtE4eLJPg2LegroL7yiJ6Y",
  "key2": "4Z72YzkwFdYnMbXELppYvxxvCrdT1C7AmQuasiawKeFDPpvB2HfsUamyTDGfhep29JbH7e9f5uHeqpw6oZ3AuTJj",
  "key3": "oAaMHkeY8C3PEzHcnraz44wrJGRLYRcLyYRB7AkEFNbcL8bzq98tEmBLf7ckZLg9dP2CGogu9LBzHGVrv1MMSE6",
  "key4": "vpyqniDTsTVSEjKuGT94ATnoMGhByGYBHiJ7SUyu79CGMW7Wh6xdPRytvf27ka8SYrdChnkH8Xg3AdncVAPhtXz",
  "key5": "3uTY55icpVmYtJ3ivW1cj1xx4ksvdBvXGwS3zVJUSPBWoPUwQwRa9wSEMPgMsoEuevGU9Yuc5yN4cCVY2g4DP4j7",
  "key6": "5sNctsHurxRN2quTPJV5Z9rqMYDfg2GLms2EDAMEp29v7gy4BEwtQAQKAZH528MxVoohFBh8ZF2YfqFj7L7YY7cc",
  "key7": "7sB94N2NtDWa4uHAHdDvtkifqDohBwzZ1jZNcvQF3m8uNf7ZNUacRBMe3HN9YY87ytke875CJvE4eFb9RQMx3wh",
  "key8": "4oVbkUTGRAC88r3MFWoFXRvXVuP1gMPjMtVWSbMgRejaQYSLHPQeGb8M4dEzaki7ApBeJYYzrFbnGoVMNRcG2VR4",
  "key9": "48p3QkVm69FE4kACMSQJVXfxSWmS8PNDewSNyBFBck33x7fkgkmFMVgwPvVkaAbM2NuJXLwn1rRpLVVoGHXrWKj9",
  "key10": "3hZApToy4pf68fE6ktHWueGYptuuRktQHHq1YgJyX7yNdjEQT7GeXDDVNZAeppJCfeYgYTTvQF5Lp76ucRi7L2kd",
  "key11": "3zCQshKFqEGEhomrBNVGpGMPbsm8KtmL6gN9HVdfB3BZMdYoLurqtDn66cv5TLddtETbg8kPwoUxcokoTWM91oa9",
  "key12": "tj96QkKDepWEr11yqjJGj1g1eezbjbcEHczb4mjSo9dwdFHgUGes2UXj62HDMq2L5V1afd6rPRuCrPNjp7KRtbW",
  "key13": "4rQudtPYj11PTsCLRJdyuJMJGvmZDALMnj7TbjFN3fzGpeiSyDXNGNJ7sjdeSii3tDZ24fi2sbNjM7z9PFRyL9kJ",
  "key14": "4MxNaRs85LJLswoJ9zahW3Jej1y7eh22uMGsvVPLgVhowAGeym8DmsKeY4LNzzxnvK1bM64v9StMyNudmUJgwAno",
  "key15": "4xTYc7X91AWzhmwqbjzeejHaU1djdTALPqZnMnNdDS9absXJdZTZBpa3iY3ukU5j3Rbx2BggVEVq2XQGxgYLCXMM",
  "key16": "2iU2CM1DSuBJ1pZ9AnuVfv9i5uBTpCdPa525YzDfUUHqxmtbVUTXhvKrjGkHUSyx5nnADYAU2CcrvSCx2K9MjMGg",
  "key17": "5XTkcvv7u5rnAMBNkvwj6pk43A1Rw3wpSM2W3Co1uTRBgEpcM1nUKwqp3JZki2RDpBcdWhLSzTPEZ1nf3TS8PCrP",
  "key18": "5yVTNPUHwAQpu9E7ynpTa9WTXQSsLefhV9bNY2HSHtAw9ZcHcbKHqDksYrtZe5FpDqGYDwqX45HgVFnbhXv5mSWh",
  "key19": "4qocijTbydHtQMRLy5TcckadQuUFwSjRHx27xBZwQmzbVcRNxmwxEVHCFPVGSbodT1x3YEzagq9pWfTd1jZfzYh",
  "key20": "3UA7aoY7HaV2R2Z1pbTMgv1mmRhffjiveNwwm95xJdBRfnJt7G73rqhY5GHrzu4pMrduZh9tEzFMMejMPav8QKgn",
  "key21": "5UKuVKBWpKu5DR5saCy3wVFQJdhDiuABjD6bXYNMX9Pt89B9qFD4144ap7PYgxAFAc84LD91KenNZZ5cZJYdornm",
  "key22": "4ZVxyaSzxU4q3aYMf7ATwMFzZHSzeH2qhKRLuLzeLKGsHrBDKnzT9EqcBBrmR9PFJc5YzirJ3bqzbjWxagKabpLN",
  "key23": "3yZMvR21TnVhaAZDkWQmqePfzsonAj2ErnWFgFfvQk67xKHhM9CvdtyBcf2ApiZShJVba7R4CAX91ynBoMv3KwMN",
  "key24": "5YbYGdfgNLG93EpFTvPezhy8ZajnHBRnTdEZTAJ8dmLifmghD6URL8aDdv9bcrAHRizUJjnLX9etVRUv4t9STCNQ"
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
