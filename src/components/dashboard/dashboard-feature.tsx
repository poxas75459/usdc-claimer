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
    "3V1im7dqNoPMLtf6aYV1GGssq9ut1L1Wby9EdWga4ViD8uwsRjeqQA88xjKqwDTYdTfVxS2B2HxjwBqqmuztimxC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58C9Ca8bSH2CnuhDWTbfuSqefMAgLTF78bcxsNzBhsmrP54CbQet3LkiStynU84Ay5qyLTZwmUcHPsce4j55S7nv",
  "key1": "4xDGpMytCqELS4VVZjnXGbkFxy7JLBykFErtKVumi11iHfdGvAxYDRku1PvvxWnLExNq2FJcwXeHy3Nr1cSm6ERW",
  "key2": "4PegdfRLnEAxVyVGUZg7jA8nKgrPzwdevTS2oAFewwVFxQpxnRHTAkhxu7LGguyG7hYwAJHDJ6cj7Pr9ZxBbfeRe",
  "key3": "2LrAZXPwLvhSTCWWUZiKwZ8qM7YZW4FzqCo3vYzZQPLGUJwUacbbTa9s8M7VjcSeiib6JG3aub2LQLLpAm6eoQd1",
  "key4": "3cciRxnGidakkNdmZSYsxcq3JwBMZaSzWR6xVmDLX5KzXztLoMSPxbsi3sUdhL8n5yT5i5WpUAC1jsPLgs4br89x",
  "key5": "3HSkT2gvaYTKGBcegsNxTLYJYuY1G3sjDdLvt2XmprrpaKqt4BFgkH8TfLbV3oeTvS3zbUJRgbeg2ixTrWiXDich",
  "key6": "3JXFkCgEJVvPz5roBFx5djyALyH8azGSTw8Y4o92ob1n9fnS3mnMtLruytbAmM4htBPkxcNa8p4ZpByGdEikz2eT",
  "key7": "3mLmhPAoogUNPjNqgqnZVLXccKrqhnXJT6JHudRmTExRhYcfj1P2MruonuTFtHWAAqLAUb4SPFHEw5NiUb4CLxLH",
  "key8": "5pUNayBT45hzpQsmFmKc7NxmRBxRBeMU6PWQo6AVVx277SWpYXv8cqv2yfroc6RV9d3QFegGcn6R1V4u9uoCE5jZ",
  "key9": "Apc8nYYx29EbrL7Mi7jhfmFhwA32kVG8rnrJoEToFRtfe5QJ5SNAr6E6jsxiqE1gg3Lb1oQH6b8bBP9E9qZtKHF",
  "key10": "P2eHTfLX1gzHqUJv15Pe7Cy6iGJKwkTtDiTvQbD6R1fQnMJfNJ2ktJ9joNcEJ96WqzJDgvoHrWZ3Drv2wfLZJKW",
  "key11": "5ZwnmYBjyaTyFxRGEm8AcNHEKWi8SX6D7f3fWzQRvCfn5v9K3CzFUX33C6inbJQYZzabP1s2NYi3ticE94xycSgg",
  "key12": "5QBipXharizAwrq8bxMaL9Tn7s5QaN1CQqxbJhPaMKeSsFNaNNWTqeEtm27AqNm94Z37SvPn8UxgkXWbN4k7xw1C",
  "key13": "461tbXJKaNDuhb8Jjn7osJHGLT1cPQk2VCFt2zPqyPF5uWwyTi4JVjpHD7tSkzBFA18SChc7zpcSs3h7SgjnXCJ7",
  "key14": "44Xe9KakXUWAYhGCCUbuTppX8HheFRhY4BWjy8RBTBTMzsrDTtinWhddVN37AtTAhkKQvqyWstfbLf893QQQ9HcZ",
  "key15": "2QVXv1yJL3P35bLpbsBsQSzUJKGPayA229KkKGop5z4v3yEeXrknjemUp9EJf9zPtzzwtm43H2E9wP7BjV4BNYNr",
  "key16": "5WtKSfxQj3BJqWAtnZ33Gyodd1HHjbwc3DvEMhASQ821a873uRv1HZVJv7y17gUpA4BCpFH4eVcvai1sWms5bzzu",
  "key17": "3a7kuYPUZQBfDVstA8nzye7AwVmvBBifBTuvsMAnC6ZsfCzKTUmpeH5R9RdiMpRceDhetKpMDipSyqR2vcCxACzM",
  "key18": "4MPGgqKKk6CQeU7Uf7eWHYng88vCgSvXmrhRHTD13qqdmf4iySPAVh4Z6zheHqYQ8gNPpFGk3C1ZXkNR537nLnfM",
  "key19": "7fZjXnJAozNBpzbACiXEWGWX3ysLD8QA3zyjzqHRHyxXods4X5KtKZxrT9jtBCaN7jsWS4aoyCeWTRYSM8pBDJ9",
  "key20": "55BfFsd8DpE2ymCJkCRH9fUdtczhYqn6Sgs6wTSf2amReiTpz3jJ9ATYPgwtNq86tAmentNjqLLA5ExTU6sJKrn5",
  "key21": "3wJNj1xKE7cnqmAZA3qhimkZN6uWXLimhZ73s94RaXcRwgHGhoomu1FPKutCeATeqfv5yM2E8sDxjE7CB7h8obWc",
  "key22": "3BRSXcxL9Yq94iD51oMmeqWLaSjoenjz7faE6zgDfWyFNMtNrtJpabLotcms8zhXmVYUpikPiG1zuLZw8cjjh2xv",
  "key23": "41fSzHmNTg15qmNcB5WM9D5aN3mbmi8ijSs4ogPsH2yWKSNLLnWqcTMRscaD3WdaDE2wyu8jyVDmXgnZWYxHV4Jv",
  "key24": "5AuFbPDKZChU3rtKvFvm3Vv8ntkR4HrCwcBrVcN29XQVNY8qRAZ7r87Ae4NedKAw26MZZZu1hGqajvfUx15Jd95G",
  "key25": "2wuWL9zuE5THXvLriVariAAVUozamU7uiRF1dK6BFYcAUeamK4wTCwCdJyKWqixTXhLVCtvyChMtd7u2SveEXkfj",
  "key26": "21gbkBnGVTTbvMSxwXdZJ4oTmagj76w3Cd6iXKs4bgJU26dRqMBE1bi1m9tjzNxpVKpGDsFu4uhzMPDDZUXcXSpg",
  "key27": "5mPtVSFZcMECicy7XxMwdXgZqKJ942EcnshJoUUpyf6644ABMARd43UYePoHc3GDj6SwF3XEUVzhymwZCNRrBdPF",
  "key28": "5zJBJerjHQjqYAC6BAta1f3W6KA3qFxm3Kchonf6eARARtcQYyDLMZrHKnc2NFTJro4H51ajebSTnXWp79LFGqyn",
  "key29": "2j7VsF3hGthzFEj6wX3D4zX4QY94SXdsgEK5W8k9YeACwaFBLSprhGNN5tjfXQbiWdBkMpzybxjN2CnLAzNkkCDs",
  "key30": "3Ub1CasWXLu78Y7MT1H1LQWwE4omiyvQX8prLPnYmd3ibLR9VzV2nF4PcmwgG5BZatwTu3wqJxZrzaYxv8JwKBiz",
  "key31": "4ex8TwBWCNWp7tDM1Lj2kxpxYgeajL8dxBiV3YbpdZjn2DsG9HbLx9JeyrU6EuHAUFS6RZ9sJPRZDA2z155vFZ35",
  "key32": "kf7iBekCdneRuFwxK3eiwtDP2HwYVLgGhqYzjTsdAuPoVHhiU9rqnbqJm53vqAWK8KBiqRTYywmV75AHyGhokGc",
  "key33": "22TPyi23FXAQXAyCJGNte5F25UANDZSTmXx4UybqCnCNwh6rtFRVyGXSRhPBUNSya57VCW61Q2uuwCRySJTWXpzy",
  "key34": "ufeWMAr9VB7aKdxB1wTTVsPxALXNqycdsdTWm4NcfDvQTKNHUAzHzE47zw53gmBPDmm9CQ8sDC8upYEmS2VR1iJ",
  "key35": "5VbJKTiK3hT7V2uQP3w2hkDaMyYQm62bUTavjrVyH2QGnJZLCw9Xtk4JzBNeBFpvtQruAcvxeNqdSmxd5pqgjgWL",
  "key36": "2NH1Bc36RmdU81coFNpacoEocWZmRotwENLR8DLPpnbCEC9673GJa88LmNkGo3LC9joNJ4H8NRsZPMxDyjkjsatv",
  "key37": "2FeYkpZvEQEzYJa76LJ9xvwU8Uu4WEZTr8w7EHVgQazhNCcREfq9KyBYCWhLgUCUVG51DGnX6UEYytvZ4hp6XgzJ",
  "key38": "3sCsbHsXuQn5EfsXeGXfwmwjG2d6JRnGzRGjUzYGfp58Q2AJiXYowQH1m5whzvimx4QPGkZ3dizwiyLtsWW38KX"
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
