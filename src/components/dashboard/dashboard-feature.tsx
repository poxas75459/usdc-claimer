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
    "4DqvqZJFZGJfgc55HoCy4yyKHUv8j1KBq1Po83rWDVKKCYR1y5C47Aoso4i8SGcLbqcu4Y2TQkeX4C22KiCMaCxR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hig8kKtmAmp1nCH1qpLUgtnHPC7qNBnhmDJW12HfWn17waRq6zw4YSuLH6gaJ4LpuBT9JTF9E6ET3UQwYk5w1S4",
  "key1": "2iE8S77CoFtwmX1XKX1NU53qWVXCmwXvrCWZgNw1DVD1HTuYGZ5EysedcEAXWac2WRianG9hizuxUoQCwqGYYAdN",
  "key2": "5piaRVTfZoezd4Bc5EaK4WZ3s86VUoDN75HNpaibBfCrb1rgypMBXXYYvAMMssXymwpxezCsiZ6LkQV8nHDAQbbj",
  "key3": "yriqkgBjeu8QGbzve5bP75KczVmwg1a3sBPhVaa7cH2cSWDweQ3JxeYLCXSphWBrUXTYzU1nqqBVuPU4oxutNQQ",
  "key4": "3jAZoBELGz3T4bUfMskY6Embwj91KRkkZTTzoQS8eMed9GNGztPAG2Ka7nxdfkKG2zzuEKFeL96K6b4V34dxfdvk",
  "key5": "4o5Q13B44twfcAtxgGTzfTbqL3D38dtGXD1iFhSjXtaDJPTcTtcNvbNwXxiKeNVKGTBBCm8QrzEHi1vC2By84iSy",
  "key6": "2MoJ5fj2yhak5mhbKnDSVqyTKraoXYKEa99M8oQUKyJfSbfjawXC9vd5rGV233ubekDCCJNgYg8QRiEv8E77U3S9",
  "key7": "4gq2UTWd47iopA4NDxuY3zSC1bSMYoJAQyR7TZynQTird1ochTTKLJsvGVRXR69bd5TzYVVvZ8HdrcrLba6rUgeq",
  "key8": "2HBtkRLd67vdmAiAb4XiuBSD5x8d9hwiWKas5TMLcpqyujGNzau2QcKHKg2BrXcZxyXRmgAoe1fMVti5SaeEsviZ",
  "key9": "kXfEGUNhDLFra2jqD2ymtfbyFiseRqPaq1nJvGpFSaaaMbzoUd1jvgEdcWuLp2qBABvAZJmw1S3AFU32wsfb8LY",
  "key10": "43V8RaK4kGWdszxMwWYLijXCQoAnNJfjGBdZr89gTqQVG4RfHm73mG1c9o5RyPUHU2zZXgg2kBg6tPbaV96LdNe",
  "key11": "5KUu6LeZ97vRG6qyBEDMmDZqop2e98XMVdZf8k1bbZZ33vUZCwk4sJkWpSHBrV9a2Qmen439xRc5ZpLVH7KmvJGs",
  "key12": "2ScrgrR1jnxkGnYCDeFKiw3GTuUApJgWHB61UjqvkPSbkeVZEBVWusBvtFaHqrUi8537HKJxKH6tumrVBASmZV3P",
  "key13": "4SksSRWDwQ35s9nEYzELeFN9SyLbbz3iNsJfFAbgQj1XxvFRVA3crUy8HyuvwfgbUsz3tUWbU9k9vJZ2AaMDtEFM",
  "key14": "4jLdQQKtMSJ8nYC79jz6Rk7kej9LFaSbGEQwhUQqwK4LbQfatk4gpBMH8jVXSB1Bk73Z8FnYLdnKBUqJRpYVQPLv",
  "key15": "3YETdWdrNBp9v2HPzaVhH6FhidQdLR84vB21Y8WvPSQBgrFpDApaW7u71Bk4i1fLkkCrMykSfsT7JdyqRbp6m1na",
  "key16": "3ri5c1EhrBE1dzpoZMLFuWzca9MwHz9jifYTkDqzB4CqvpWhDHDARx9ab5VbJ63ymqdiU3p5oXfL19BppFVg4Fnb",
  "key17": "4qacg8bsLRjb6vtE3sCDzM3Tb3u9tRjfUfYpDFMujBRhFzuXPXfrfAC1x1N1ke8kUUMTUd6RBFSwSuSvVZVqdkSJ",
  "key18": "4xfvbVJAz3S9CiYPZbUYgbtW8L53kaU4MRjyu5Yir493phaEFee5iGS6zDPy4UYrFvqGwt9bxS6s3Gn2PmbiwiJZ",
  "key19": "5ZYwtcFVs1YxSoecnwi9nMF5ZtRZ5PWqxWCJyxyaKWufniZXAyxincDzPLin1kQ3VzzXkGze8u3vXebZiUZiAuEh",
  "key20": "4zrsHG4YPdLJ2aTnBzMcRr7L3GDHmNfGv4eSUY63J9bbbPBGiSXrsoh6oGLBNSLm48RD9se591A4oDGmD6RHTpo8",
  "key21": "72DGdXVEmzamS8g8e6c44bmpL4ukx3SCgaNPFaFJDMqzxm6T74FXhiGxMYmkuuTwavt5qhgdiKoyHjhMoWv69pa",
  "key22": "5C1cAepZcj5MYYM1JCpoRUoVxhBNJSRd3FhXf762g4rL97MtWnKMNcuHjfDenpyS1KP2A8Jv5Dq8EAHHmcDurnAV",
  "key23": "4GKVN5kLxQZ6YQf5ZkHYT6Y2gcm5jHtPmy7x5zfTwaVFHVHG52Qx4CHxikEc2hbeQc7oFZdjEGsDJ3jF98ram4Ne",
  "key24": "3vJcWZs3zk7KuQ6yfxfUZzA7wb17WZPC49hkMnZwdMVjVqVxE48jnzfK279p7YR4iuhpaU9EpcCmep45GVznL2KF",
  "key25": "czLtrbaTRSW34VpPSSaZPKVhnCUMBob5JuPL34iXedCsDnVEDRnYqdggDngwQuLubnXDJvqSeufS1ZTFvZtCvM3",
  "key26": "3vxgZSoVu2EE6NVwpiEatWiZKNRhEiBkdvNUE2274b3cS5aP4ojgJ5d2GsqDWKNn18KL29bmE1w9AN5XQLuL1tmr",
  "key27": "4NHaywbQBp5FaVc8xyF15RbYs9koAGqNzBqB7D5xzs6TcTEhgHMvwrBbr48iJ9W6DSi6ALPZWWDmGaFQcmNCrKVQ",
  "key28": "EGoyDn9okgWqNDPFXSAdA7visaka55y5fzmZ95dCR16MD8fbhvP93WtPb3jGf7B9xLMJwfAWcVgEgCWFX74Gk8e",
  "key29": "25C6SBruB3KzUpGsTy7SpVcom7y8rLiJsoHEqK7jt8oJvSRYFL5VbAUR3jeT65AqhSRtApDGHEVm2Xe8bExAHbu1",
  "key30": "1WFgXcwQ3EB3xfqqqZFbA1UJWAuwJLXyT2PtW43A1d4zZxpenKhmcvc5U4yLtrnumJBEBMdXHRqa7QWAnajJvHD"
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
