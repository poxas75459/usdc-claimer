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
    "3JJuNv61odrtCruhbo5XaxEpGKsGgCZbrg6hfdy4e6s4UiGsMP1Mek1myZBbRHcnLh74J6ZjwQczCW2gqxY555xG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Srq5vU2qciASpmbyHxNRxJojtRYfEDFEKgzDqYPJXmQKdDMmVwosCGKiWdojMveiSTYn8puCwquoGUzF9Kjtbf6",
  "key1": "3gq76psZp56TS34mWr3BHoJS1d48dTvUxsysvtCUWqGF3tPx8t23dq3a2ykPpczizgjVQGVVnkVcmfpfsofbCdJ8",
  "key2": "5Bx3ivqcvn9ora2LDmRN23u1awAKGEWasgNpU1f2rRaSVbZ8TwV8pREc2vAQpA6kpnXjrjoKMjjHJ7pr1iGtgCLe",
  "key3": "3S9QpY2TVmx9FP5idc99yz5CUJ5bif2zsmHtStYVjyhyMXpCidbiKK7nRsC1Waf9pbnzAx19DZE2mUZVm4b5u6cs",
  "key4": "PJStErg1joXeVNfwpdKVPrr35fF26xZrr4fzoP2jc18p824DS3gBeYFSn8BoikAMCvqhGqx6XFd4DjCNNdEidx8",
  "key5": "5XmVh273n4vYUr2BnSx5o22gCMGdDAbzVSgF3K3tBUw3fpXP2Aub9ou7Z8aEQHM7B2bMW4v4KmuxK27ZyvyDKX5h",
  "key6": "3tw4ZWw9EfMZBZLrpVkLAt3Ks1URuyJfCT7Fr45GEAJ85Ni2UwpuucVyjMebnXmfyXmtSWLTS2fN2P5VL2CyND7q",
  "key7": "2A2Bys5HwgkRCqqCqYp3dsCThPa1NF1oyDmui74P36N3xWzG2CPfsbCqLC2DVKgFR3DnQVxsCyY8KL7sEMNRmQSD",
  "key8": "2VDrdzTqfQ5WdkMGgCaakZRuSYYshfqBt6MxetsR1PCxFUwJPL2oGUFgz7qUjnoF8Y2V2cUuGg2nanSuypyKLAa9",
  "key9": "3AmibAdGe6bf6YZLjmuwRshN9ApRdScmj2A4djwkExeLU2qvoBHYQp1h6Cqukoc2b1QL7qKTdKauU7dFAo74p2yj",
  "key10": "qa9w6hbfwuBdhFJZ3yd2LPpRePcSW2Wgu6pYygwPjCw9Xhp283EUxWMvsZEZtVGnbykn1c8VG295JX5suecrrkN",
  "key11": "4kLUNTN3TJdWZY8ujK8jsJ7evqTSEcxvJFRNBuGmTZ8kKbbr3XxRP6KhF8eyyba4Yy2MQRRyxWbXjYTe2p3TJz4p",
  "key12": "7D3dr3jdEzaUJd23DSYXs4mCXtLDYCmZW3Eg9WFdX28c7YNhPB731kzDTaPjbAF3NPJHtiLhhqjvNLXjFzrRQur",
  "key13": "47AHsXffzfmsT7vAu8PaD2XRTxuJ3SEhMpU7itMio5uPoo45Z6C2Ep2mAJ2U2XpRFZJNfvqzSKVhrCcSzvWhRYge",
  "key14": "2qtRF9oMmbBJpLBbA6cC7AoY4pMTmRmHVRNiXcYu4eTq95esmRU3kYQ7wpj4wJZknLRbDiRCzPkoDcM9fPdFFejr",
  "key15": "3notoeEZpgvJHQKkqUoKrdCK7xt77Mf2zCpN5i9tWd5u2N3F7MA8RpPBvbv5XTUatTjHrVJFEMFBiMHMDx659JjD",
  "key16": "3SgWpTrxZbRqxQDsPWmfmDCmoV8mp5BdDv43mzdQkKNEDaEHZoji9fViKgijQL5aodzYbRxGrecpS6jetK15pAnb",
  "key17": "4KfFm3uhsCFUcCQd4tYpFFmGfAh3B47yVkyXV6WmfBSSp7RwPEftRYwmJFTiT6PmiNWCoG3p4fj8akVoNHVUQAye",
  "key18": "4UiuUZe3DjcyLPdWrLpfDw3LYre5VdrZPgsp4cY4DjYK2yBTUF66yAAAbKVsnXpmni9vFp78darFZeQkW6s8tzq7",
  "key19": "5h1ErnCA1BYPYj5YCo9EdpUUDZSKGFdYo6ts5jNp8xPJqovwxPffJxvVhobCXSknLbNMPWEJcHf7WAoy7SdydYwM",
  "key20": "4JLj3Vmm6bxneM2pFyUCQjVHnNGdKbcXwdVdbCpvQRdLLFQiSPQ3j7SSbSMwiE2mHLWjwigTtzB3pGRSCeu7SVEq",
  "key21": "2wKqc1xmoF3KQVweEWRoPxaHXimq51xGERY1a3kqwV5v3bySQ5kYLnkqo5trVVwUrWbFAshsX2td8kNzPitBYvCA",
  "key22": "5Y3K21aYpq8oahTKn9khdA5FxDTuGKkvp5rjongeAoLn2UEbq5VzT5rsq7gvUn6vRV1JCXbtCXWo1ZDG6byddXVj",
  "key23": "4adcTbF4npSzE77BkfkegRnhXtDEFkf6E6JHK3bcko5UuQR6A8fkNEWAyD64P1GuFQJFa2tt1f5o6LUk44Tkcw3P",
  "key24": "3udMRKHQ43MSJa4A8jdRBJDQLf2VNrzhJZ74KHywEPSMfCwzPoFrbCoqicKEz9b9Cwf8ZSnJFeziBm69D6J4CiE3"
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
