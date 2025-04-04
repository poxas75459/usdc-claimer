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
    "iGGok4ktnr1apAQhwWXYXNqqTWj71ezhGerFHdmitZehDbzS9Run1skcjDkMTaNUGyD5woSF9fM8ZppRtgKxEdW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "229QRvqm6iVCV9FzT8s7hAK4uedV4KsYiTA38TdyyTGqUzZbMhwAyGnxDaAsnFWfP4o58qDGE245kZ25rKsfdqLR",
  "key1": "4GRYkeGpzKo5v88yBaWniaXxa2UmuRNzGmxPb7j15yLQTeXB9kGKFi8r1Svq2fmqcHuAuKbhRmVctrzSS9LwCEie",
  "key2": "JBqjTsZc9SSWQEiuVDqc8XMvUr6YGJFgVWSHUQtetiVbK2h2uByj9cpgUmFGsiCdLKeQNuKgSSAzuUjA4NsFGVZ",
  "key3": "3MxDVzLgJtyZGsweSUuBGBoCz9BbZkeyyStAr9xzbN86HmV5nWswdB2pY8LioZqAhZjTsgfeD2qpvNzW3QLoRaNg",
  "key4": "3BDVqta3LcLZTzUDFdaSizeFcRoFiGHRGoqkzZ9GLSEEUKNAD24YJiUufP2JJmEWfz8LDpx9grG8JXxTiFbuBvJj",
  "key5": "53e3anb6c5pf92FDYpQJDdTvhr1Litm8Wi34NJPN5teykagLgKXEvyhAAhHCHXAjC6LBtRNWpcunCoLSv8Ycq57h",
  "key6": "5PeQ2TRwsicS2V5bZj2gz7z9qSEQzEeRaJ3xTcmCah2QokYjvbGUKnLZJAbA8pP1GqeXxiEKDBKtRdJb3VR73QmN",
  "key7": "4pwAEKEtvJoTYpKr7n56Z43cTCM24yMZ46TYD1ettJtQNwfFMEUrm3uwxb63HWq8RmoDc9Yu9JFwrDjpTgWa5mLs",
  "key8": "56JPwr2Yhw91HAaAcMXANDNuSzmJ1fTW9uCktv4FzkrU8iyRmRS1GEUyherdsf3r4CB7UeYysikGpUvxFje5G9Tk",
  "key9": "2BU3eP6j5LdG3y1BhmbndBpzeVES7K5sdfkNRJ1g1uup3RvyxdPqVf74vRtiRa2edv8bzkWVffM3eGLrMa4kD7B1",
  "key10": "469ELti3AgWCXixWj9dxAiUBjj6KWwfHgMwjyLHfHRDNKzXxaVp2sX5HP9B1GJHJU4LgQ8WLndVnGdPb75ec14Af",
  "key11": "3ukaNNa2Kiuj8xqrP97Ve45NFtrMoLKysW6DcJ6FBY81VMxVsi4LxtLCaBj3YNeZmhdgAQzJEvPQLAtF9Fh9LE7i",
  "key12": "5CAVZbpEQmkDS6dC7PY1vSob8jGLmrGthPgBow1gtFukQ36BvmxbPmEif74yLzQQrX9akL5L4jfnaUVKM9MsbZiB",
  "key13": "4ZxxLACZ3NZT3ndGA9r6hGkYwATBspYXjui9ANx42Lc7zxEbHQCEKhtpKsLAwMkAfcgFt1wfM9w1JVd3a6XHRtPQ",
  "key14": "5eQyuxJFua1WXiJRzYjDKsS4FYVKJEWNkL6tUvJV7DWb5eYTFVsbkugJdCesYRTy7gtyzQ6ddcfTCBHrd4iEhVs5",
  "key15": "GFKQ1kYNwZSJjhhNBihS9QXSgi8QYqE2kLcNarrAX2cfyTwaupMcMYcHiUFqRTSG7RRNHocayaerrrKWxM9fVZL",
  "key16": "vjEkVRD9thTcaLXDvFRGtrCNnyshTqQVoxwNn9RCBMf8qc5CWvhiNxT3zxvFu7UkDNgbPbq71zmPUB6QiLJJh7H",
  "key17": "2xSoBnYRT6BVNcBDu4B2F3kM33bKXLzJ1CpTmRp1rpPH1fhhGwLDFjDYbCvKR7AZE1HJNMS8z8LCumLX4WtLeVq6",
  "key18": "3Z3kYQEyV4Fnioaoca29nczRo9agrwUFHjpDpu7c2tFkHZYUQ7D9BPTSLoGKnmpyz5sMDjv5NoMRgxTMV5saQirv",
  "key19": "2yihLQRV5N8PTsZRZFJSJNWYgTDhg1ckq8RDLvYsWSvkL2Xee8gqyhVaKiaXtCigJpvDYvHaYroGovmmdpoXZCoR",
  "key20": "2TjA37MGGMRx1eJZPFYcKBFzgtBMeM29YzioNdmwdTgsTp1wnDvnqiuQWmEbLypHRSUhNtCvAM8guTYSd8LTgAGh",
  "key21": "4a7r7pfEypZaAgjfoJzLpwjzTE8VrvMvsH3X32QSyUDtozCC2vKqdmJ9Nmk8E1o4CsCx2YQxbMnJW3fKQuF2nm5E",
  "key22": "oTJoKvTypHtp8heSriV4b8KyMFfALTURHJzU8K6XdpX2NP2QQSBaE9VrJzQKHNTRGGbtPVQZtYcX1WBLxGWiBqL",
  "key23": "3H3b4XkEF2mNwrsr6vvxNNQMtGoVFwUnpKLsFmQrLaYkcwB2Ds4vMe45oXTKZJPG9g11E1p6ECq6RRSRh4R3ciqN",
  "key24": "4XqjgGxH8vKqGNcsWpFFo5gzvCGz32ZHhHX55VTw6UrfSRrPYBi9BkfAwRxue1VXtvgecwbLhY2vEWPXom8Vjrqw",
  "key25": "5gW9SEGbyXEEUeG1FwD6MV1SNaNpCujr7xNv3EJwFtBjhcCrFYKYmBqxzue28ytfiLoSrEm5pstEfWiJB1Kroj6o",
  "key26": "WcBAxGMKBd8RiKYxfHEcrx3VhPqLh6xvZ2UrKnzJiuZystjiott6pAkeDyKppxdFTG1yfATBz98mxJHLfFLypfh",
  "key27": "xKT7kN5mG1YF2rzpnZ6KY3noo367oDpeS5qvrdpSfmF5o63VwD1sHKsX5FqEMLXZovGK1K2nLPRBZS8whyAP4os",
  "key28": "zuAiM3AJqyGKApgziR1XKoJcq2L9iirhsRrdzTCFXhHwRWTEoGviyKMp9st4STR1drsPw5Yibmda2WsXxqq85MW",
  "key29": "xoceq7eDqwTc2PdUXVpFPmNp9ghZgr1haQE6D1eKBWdiweEHft6CuyAkRJw4nRKdADEPchgSmMdmnnFpPQqkVk8",
  "key30": "1uLFzqYqzqhX8HGPh7ZnjBrcGRfSuQyqvtiC59CEsnMEGmDSTA4XXapi8R1B6Zy3uyS8ku1M6qdZnzH9JYJWV8s",
  "key31": "4v7Gk5pSQW2ioDC91NjuvZJWBqxQUsDkBJiLMyZvqoyVs7Sg1tozpgbumCZssqeSSaFTPGWpuGnoQMWaS9Ax1hyv",
  "key32": "3Rqfc959L4Kr3h72kgWeEj6fQJUkPUHP4x7QbTDnMzSaeReFNRDDcv4ieriEBT49p1eRn8tnY81Wz9kf6ruShazm",
  "key33": "3kRx4Tghw5915RNQykrwjSiZBXBYKSKZ6iaEdjcS5xs9NRkoWDSjChA53XwLpUYymrbKpQ3dseNUfNMy4DWsjm85",
  "key34": "5uvMmc3mco8J3321FPaVytRPnoV4aWeYLBnKZDbQZDi5vyM3VA8E5QTQdosYmoCAtQQwqkkmBNL6ELA5vhLCUe7v",
  "key35": "SqhiVzXhVmHGFupQkTMKRFge6NtZxAT4aotPkhfUQTGsxUUqCqgQ8qAE4KUmSJWgWKNB2DkQ2dyweFFCHrBeyxx",
  "key36": "2ZuyAm8JmfMSu7fquqnN32N4H5JCKFLmGhpJe6qXA52rMEfUHd8bama4uKwXbvA9L6Qpkqbp2rGrZpUvn5dhqNvj",
  "key37": "2pYm7iR9KoLBnPY7vyUcABEAGWse9ayX9JUDa7QJ98EPL6RMjsuUaKPKJABCeufPHpMKDT7n5AmNPTta1BPUzJyw"
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
