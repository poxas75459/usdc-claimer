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
    "3bsBUZrK55XjPTDE5MAUq5yV1m8tRY2p91kUG82cazpvYXwHL8Rsjg4YykuXmhZndt9YEQDAZ3nkTUoL5h6Gh44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S7jDFDcT7ZkPZghzdkerQ9N2N7iW9L1X6kQ38jiAXuTL4Qj6BPtwQ35tWvzCgYog7FzbAjDt1xT7NiDDBFj4VAa",
  "key1": "2aSJxqK2xYxMhzCSMBta6M4x5VxskisAmiUAy1gXtspWY25afVjb1m599oyxMnLtbEFm1vehTBRyFkpLJJsVHVaA",
  "key2": "39wLy2d64WjkSVZSbqjj8iBZf67MFSy3n4nMJfYL9xLWw5DxHgQyzEyekWyeHQmWMvsh1xFH5JwbpmEmN5P4XrTM",
  "key3": "34rqfLVA4oPZRXZQsD3QxDn3wQ6uCTkMGtKhmw83V5eMAmjDiy4atXwT1SHW2f6ENdB4BmpsP92GnhBFvqw6A2rg",
  "key4": "5JLXBEFt81BbFyZ6o2v3TicY3da6pyZmatFQZ8fSorPD5Z3uhhRVWaJesL2wL35SWnrpao5cV2LXtvvxYJUTphGP",
  "key5": "4MpoeT8u58vfAwR6g9KeogMgCouj2ZcpneTp4H9hXdqFa37krrq6U5UymP2cjzUpScvQs1Am11xaVsHv4UKEJefH",
  "key6": "jwtfUV7tAnsv5tFqwtRutGzK3w2EkWnjHUsHxvRDXsF7PFC3tfybmcKDzsRekSxSsEuJbQsjvrxCtMg6pmQijRS",
  "key7": "3XW8uNbJ7ECGEwzhq5FyyRepe8eKnTSJHYLPYf521utj99SZREn6C9qcqCdeazRc1RPpDAjccuZzS89kf7mDxU4C",
  "key8": "3YtNTQFviU7ofRgUXkZbTyF7rRjDZ6PCVPbs4dC98PtT1dd7fwkdkjdqjRa7RFCwfqS21QMHUCUo5eMqgD1J3WRG",
  "key9": "4QsNbK3amGaKPHf2DKFjrPQtn1Q1qFi1pu3TtFkJRWRNyU6DwimX6pcyCHmc963jhZD4Hko5ZwxfXibqrci7obFS",
  "key10": "4Uowcf66JSo4EFc4YSkWXte58npPn1W2Sxrs3Wjc36edKyFwEU6HCjHwvt2XpHbn32HMv79i3WBjXa6nc4dVw7fh",
  "key11": "4GdQxYphfRBwR3VKkZxQKPDzMGgh7d2rbgjbZ8oBGzXt8RgD4KoC2j8eu4CgotVau9mZaQg9S8FgDx46W9dxj7eH",
  "key12": "4Kq2SvKSfi2xZg4ryUbXBnBN9iguyAc7m9V2chi5b5tTMGAJoBEd8B3BZqHmQTfsNmEu1Mt7sEPxScG6eubi8DDu",
  "key13": "4LnmTC3p5YGaPRtpjN4nM67MDu2X2EbFHWSEDPfNHsuDMJLtbnBqh5h2sGGoUr2pBEV8c6pk6rCXCnr5g3YzHMXd",
  "key14": "3QzSqZGoTA4K4KqmFzMqY72WcZiSHgsSBUVgLV6CsB81roz16dRj2edLmv5duzgCkEcMKGNrLMMTCXxXbcqGLJZU",
  "key15": "3545Wunz8iZGECiSJwZ8z7SNtRCx22YfuWZ2h36rPJZee87MBDrXtSa52xRw83tzZSSoSEntCbFjtRKTKwSFa3Pd",
  "key16": "2paBkAAXwPDB1su7gH6wJ24nvN8zHfpFtweWURt7F2iUHV1fG6QMw3wnoYdHZ5b33bvRRBL1PyeHuzSd7pxoqAnR",
  "key17": "2YDKo6AW9wQwUMNsQjE4TGcxP9t2Y37xC3odKGUx45m3HBYECiXebVnzMzTE3QniEkfVqYrLBSdWmrYF61ghWaCS",
  "key18": "Aa5HcusKhfLA7DY2V5SqeQmRdm8qXit88fK83mhrgUodLbPCJzM3fTQivqskjykzRSDvWYzY8isRyMjSgh9kG2k",
  "key19": "3iCALUDNyW58gcYgHwEUw7s2qZeYWTjFck41Rm1Dx65ePLLVZ9wukGxzW1JD4sAVaziUktVKQfsZtkjqLqM6tXC8",
  "key20": "2bUQsMuhrNTGh85ajqtxsz2q3SSvZNaDUoZBR3gtqBRkpzbGhpHnCU1N815Z8JjCiyqaZ7iDtzeo7zVypg9p4Hq4",
  "key21": "3SNXeM2mwKsKcv8kYJs6r7KPJKAcRw3wKJ8qHsWh24nRrCAkom8FrZbv95yqYDXPHXtKmjNqCgC9MM9rvXqKDBND",
  "key22": "2iht9RaobPTLYbykHPvVx12uPmFzEQNtChfQEvPeCrLxAPyotPuieENXUJ8gARaExsJp7EruScMKvcetgdirf7Bo",
  "key23": "3hiomAxcjSnqRHUJR2Y4N3zKXPeebW99K9iwtPCSVDHxeZkXCzb1Q8hsrEbG7hEU6ERqmwfcXHu222uJ18K1Syfu",
  "key24": "2ak3GU1vXhYyvRiTaT6B2eJe2SvzGysgByqWuvEfJVFDtbjQ3iHeAL7QJBophCw2NL3xhiESNyAfxmdrycmfwe6j",
  "key25": "qK2TZGsTmDGNrisdeUgu52BfZ2Jd2owW5zXucFAVLyKMUZgvxSLJQMQ5Mhbxam1DRRtDqDSsCW747fK3BsnfRv8",
  "key26": "5bMtCHnuCqwwFN1UC5UAxEN4fA5vp1GPnZC9UHdhtWawBFnwzFPUJXnXwb4zNQ3XQXr7XENYsAohxV86R5xnDqTY",
  "key27": "4sKMDpwqcbypJWVv2qV2CmGtw2vD1W3Tyxtxp1TtPVuVv3fbc4F5TFKyEA8vUgAsR9i8XCZfyEVWn1F7Zhkd8xpL",
  "key28": "5kSqQT3E3YcARaAhu3nxQDqH9zfzJZ9SnkynT6XhN2UxBp9vo6LB87QGnpf6Ucp7VHNedXcPSPSMmqrsHwQkGqkV",
  "key29": "MMfVrMjQzdUkiBbfQcD71GSLhhJTYsU5RCCqGTQkjUXNYEXtRXQquoYjRFnWQVVUgDCuQiuwEjhqkLX1khXoGeh",
  "key30": "dURxMM194gEZKdL9Jm4khXNa13KP1uVccoZXbrMw52vgggE42Gv4Xa5hdAiEooCQB2kmNeU4S6ytKW2gzQiQkMZ",
  "key31": "5yg94VbxHd3ReXnS4LXU6Jsr9hGCvCTKRDmnJVXHCoKHzGhWUdBLBuZjdJ9yFvz2oCqfhXR7WMHbqakztTA5pnZd",
  "key32": "5jskqfPzeJV9jeUb93KrmNixtGcPUYLvWw2P925ZvDo9fTUzu6ZvLXkfaH64w2W232GN1DB6yfNFAff246eCPDxT",
  "key33": "4G3fjxubVJyoB9oe1XckWpkhgwzNRThga12rnv1Rq4MHDE78pK4v4fb7o81VTrb7NyFN2fhmSm6eSuDWSobheJdH",
  "key34": "4q81dsWNHU3gR5wgRfqndRXvwHiihDbcLYjG2bfso67eFeZzar9ocGWg4JiQ8w5rfurBXCfzDXuqScggQvhCS4r2",
  "key35": "2S7xVS57fou6SoErqjAUauFADiUsGq2yGgP8pZTg23kVmQkk7Z1bd9ohsRJPKvsQxDGQzwteaT6uVgCJSNC3hGbJ",
  "key36": "4knMrH5PfVC4i98T4rR6P8NSWrTcreYSLpUoQQTsRFGAw8vAVrsHkCmEGJA4RdeGQVCVfYxdwCBtAz1XhW7MRqAY",
  "key37": "5w6hcuoF5Xsea2LtHoK318LQBLBCQNewLygxV5m3mTCpW14QFcuSf5556HShcFkP6mQMLjuUM2KhQogKWLxmnuTh"
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
