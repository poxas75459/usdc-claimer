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
    "4RKB9PN6GKCEh5pTXPif2CvyVrihA1yeT8AiP41CkWYKz1orvN6DMeVzueNeHeu1GWfwLy46hWKAToVvZUdsLdzK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i4ezyoMvXKjze9ebhkSXak9Wy42KFdzGxpd1oRnFU6R2u6hSgYz98qxdJeF2ekMyeh9RD9zSWbLdBjGsyvacKq7",
  "key1": "29wC9oEURjbFYnSX5roPRkjqk5VyVD5uvqtc8wZHmGfVmdvCN47bDCW4FRkYfXmwq1uReawXBBQahcZTzxREaKm3",
  "key2": "4WA5ENuXyDBGvqxgM88MHhR53cV4PUqAc43hbSHo5AcuoHFrGrBw4As9MMeNizLGSRmPcC5xynctUeQmf5nevsgo",
  "key3": "7Zy6DSfNBUsEJB6mamdVHpuWcSEfNxYAkbVQ1F3u7TB6XzRY25nye9mrN8hPu5uqNyzkCSv3rj2a2qGz5Yg5Mrq",
  "key4": "5oGNW9S2qTaAN5sB54FRFmUvdVFisVuW9hqdvRgj2bHDezYpQRrUBDbTqQ1DMdnJfbhpc6SJXSgyfCWxFSHoPcXQ",
  "key5": "2Nz9rJQNwNe93QaeTYGLEVZnLGjq9ZbVo6JDt6ehvBZXV552vsVfto69vJMPcERXa5AHH5ju7Zut4sD95rDCwoAi",
  "key6": "3mvcaTNxKDpjjNgtBqqoJySN81yDdWGBuAwaGK4AHuxEkizUvcUpia889Z5YNTfv9YF6R4soLR2xjsNpp3415t2w",
  "key7": "22643rCVhmbqRXQcJ7bVyBeZA2ExssALXRMwXWTEgQ9S7GTyeicTfuNQ4DWGHhs1LBRKtJ3zg2w5y1mymCk2C1yn",
  "key8": "CMeKTs1b4NBCDa4e6xgcA8bfsk2wpZNKVHDkjm7ZzTMrEB1DRwgpwU3RG4aFnAFFJRqZunVJ1B7STFtsen3xfNR",
  "key9": "2CXZwT7KeLPJA94Q3m2yMeerSPtePJBsALcGFJuYTLEByutSBVAZgFivfSt7cnTeimm9fw7SDnhbRv3ZSuKnvkQR",
  "key10": "4iuySwJe336TVvSfSrmhXPHDGNTxnVkYdJDtK5e87RX3HCS1sCZZPL5FmL9ZTKuCeSPmKbrz5G1CPcQxHNhqNQsB",
  "key11": "3sXkCnah3KuYmqHdEkZ4L4sS5XGXCMD8LDt5J9SwbK7N5wdBmNzjg1fzEs9nUtPeNM6Xe2XzV3nqBrBt3Vrt684H",
  "key12": "4AzmjNUdKixgz5tq3g6hiYi3zVGMcLEzs6KMxT3xewVh8tRMG3XuHs3z6ybtpnYV7YzwmvG3v74wo2Cx1QnB4i5i",
  "key13": "2vfH8wpK6qV33Vs5wyqBsvxUsEuSqUoaUAzH5KBxhDBGY9DmRCQ6NeEbMzXR31VLawVacgnB93tqjf39mDgAS7H9",
  "key14": "59LE3bdAbCbXiKau3avxD225hDDhxuCta1GTwqN1iTL8xBE7E4meGSa4ziuVjDEjnjcUcnPDAwhsD3DmtMfxvoEZ",
  "key15": "4zWfdbeQ5h5G8Tksh1ogZqq3HswJix27apK3UeWkKqiYiC9eeWJBupj1adbBamc1Dijin6adhoBEF1MfYBKU6TBB",
  "key16": "nCYoq2hArh6W7tLrhba83V5uZSNS4pZRtT47nx6K9cjxqZxzwAVUQsGCKRD1eiwV6J94BKbeZUnMnTyP4su2g38",
  "key17": "541vs9XxAGe2srGK7btudd1bAVUEm6EAPSq291TyprxGJVsfkvEvPYBBatxwQBKYToAMwGw6PzA5fmM27YnbGrBW",
  "key18": "4HWSGAtv7VKyGwz3bzrNDTZAAx3XufDwd7hApkvJtW1k9WYo2yw4RxEy9My1zKwcAPqxzavTpdjJH5uVTB9PZRV9",
  "key19": "3cgXzwg4UuPA43S2R66ckoLucUYuuz9XKC19aEvdSJjCZJgCNyS8FTDqQqmDTJUVkxPD4BwcxxwXm9pBGvzCpAVa",
  "key20": "4wf1nUmPnayv6ZCc1v4zmjKVNbPTLkXxoYYarMoN8wKDU7zzFETMFbAExnFg4NJ791z1XKK5DyRS3hay9fR7HaYk",
  "key21": "tXuetUZN6rdGcSMQ7cuRou1V5uyMsmPSDp5xNvSQmvJG85oKiJVK1QDtfezVB44kpAgdt5Na2Hjsi2bgiHBjasx",
  "key22": "4KvFSxfS3ZvtFCus9MVjbabwnGEPg2xCXJ6u9En1XsEbKqaSFeVkpkYdqwvqnAazkBk6noS3UbJyJigYMfmCjRP6",
  "key23": "Rue9Ue9H67Cg5co4sxBfXreApy5kV9B5fuEztyRohMLFkmSnFSiw92Y1GgqwLX4YSWxYG1PzwzkLGdpe4CCNCuK",
  "key24": "4j1dv4vqgMV29FEWhBLKF62NPQPBRfTc1A9yC7TUH816Dt3Fvu971qVCGV2gHVQeczPpQkiniNaCygyHyFF1tSiZ",
  "key25": "2bEt4o9cPMs3yRiPXmaCPGxKcc3qm8WG7kqjX17ZDC7tS1YGekuVFt6bxK8FK6vpBrjxpQSecCa1ofKbhSwaiQFY",
  "key26": "4bdKupD5P1ejSFMEV4YiP6oXLxQNQEzUY18eWRMXjnhg2d91YYA7QQrU2vvghqfBVe5a84MxSNdBiYUuxktTQuAV",
  "key27": "27Mh5DjSFhwBCo46DSHEzLWNYHfXYxfhR1dYtF7956UoHpGF9VKgyudeUnKLpn5FCZztFKfHjyeuJaZoqLSPYESv",
  "key28": "4As6dWUYtgtjYsP2GgVLypDvtS9kHHPamYJRMXQ3Xonyjj6foQQWfDe9rB6WYZeHikJzZNWb8nZW33K667WmzTfL",
  "key29": "3SLKCo1qNYtcqgvnR97eGgoyDsy4YDnDZESETUDMFH2yv3UK4dJG1xj2VAd18dsJ2n4BTPhL57g1KTqRkdDUbhZu",
  "key30": "67iSYivtTYiiZQyqXCReQbbFq6YJtru2Dc8irsJHVRRfQeqAbT6mb8dEwbZQML14q3NigTFEJxFsCQ2PMg4DEj42",
  "key31": "MzScRZfVbZWjLxVRozbq4h7BEjUvcm2XsQfHKa5HdVKupFm2wK1wmLCtthqTiKbSkqwMGX8fc5RoTtBvDRqKgR5",
  "key32": "ZKAXossrabKRbdD9yNTb56HwY7ZZQmNW2XKkpTkjAeqbFY9FMgAx9AohVS9XYVahyxoqMqPW463zU3R1hMcYCgn",
  "key33": "Ekfp5QTnamaqQrhYtSruFSh5gSkUQqf8cejioFDU5KWUmkiFd45pVoa3HzfK36j9bAag3ZRDCpcNRMfcMLKzikZ",
  "key34": "2VKWTGXgbn1tQbdqgSqBFzKG7CbPbyir1SxAgc7c3tsZkJx9BZTCuiNZRFQKmUdTFE23fnxwS7papS7kResCKFyE",
  "key35": "4M2DfugzVxEVg2AimssYRBjnuYzpbgReiK8ezt1kNaCTse8nkqAg5kBHNpsFBPUnzGAvs4PB8jRSgWgwCqu2Pyex",
  "key36": "4Lc4vZjBVoHpwDyF3h1aKeCBUNBwsQLNa4oDXMANtJE4DiUAbEYqBNK6qgdXXwq1TEKRCKd5JHEDRo7VeGmP5a2K",
  "key37": "4ZQoAZaEfxU9UUhQBwj6UG7V1JN7s1o4kuWZ2yaXesJycB9yumdxLVV1WVoaZWpnCoRynYGwMz43DYf9aygBrqWo",
  "key38": "EFiARwpPvSqjsMKkzzXbJzknJQYzQP1k8oWvcYXC9t5yrh26Q8tz5oKC13iJcx359SuYBmTevVjaqR1kJvYebT6",
  "key39": "5NskEkbZjvvSSpvRE5ivTx1zZNrH2uErRtX8a1XqXNNtxAABX5QtU7NxsnQRBU1TRWHDWzDKSa8nXJgFCVAjUNzb",
  "key40": "37tJrcXMdpMVuy5t3AVVWPJhKYPq7J3JtuQ4v2uNJ86TJsxE6fWsJAacfoowzuo3Lox7ENSyjDv7yvwaevSY4yCr",
  "key41": "3sTm1dUnUbWQUk6PAo9cENRqShfUjeGxRrMTBs9FchtbYwmogkF9kMS9Zqr4LHVAybKwogu4YHG7UXHcA7mfRMUK",
  "key42": "56oiV1Nv6ZnYrruvhoUNenoxbxiJp67AZEgKaxv8jBtvnXxRZu726PZE6kk2qr2SJoq1HTwWjXrFcDMPzzsLFsJu",
  "key43": "2aWXAqmkHnKxVnn3rt5X3SZWhUe7kc1LpEeH2tXMyFgqxVED252hmRCvMcJtvXQNds2eFsYc36DbRanuHy4ZYv4c",
  "key44": "3YJ7xghG18iWGtxTYUKFq4pXc5X3QGSGcakh69ZGukquT8XhcgiqK1rcvYTC3GW86dnrfowgKek2Q5RTKzp2hNpd",
  "key45": "4GQLhV5vm552pFy7mLygstoYYqnnM4DQge5b6CEnCSKjSAmyvnUWybRz32vHEAKWKGzwkXDBLVz564tFK95j88XX",
  "key46": "2w2c6P8Hw8Vsdx9S3VeWt3DqS4J5jGiZoA1Pfo9THTrLWuJN2s2hzWq21Dg5WCpVMCU5EPWMq5pnnm6RunNdKcu4"
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
