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
    "3iQS8rZ86hdQwDf6KVng47kiVxLm48bh9Zr8U7pqqJAgtY9xUQHTuwgAzS3unbrKrWoE8zUWtjjdZVqzS5xWZeUV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a8yab4X8THMYWM5ixjJoRMKgirHV1RnDV8wuNwUPS7SkkoZDQ8GnGjaNrFiAgWBnjdrP9ccWGhdNhGL932JCcqi",
  "key1": "45aXeKUFfr4MU5JHLGjy4i3SeFzWhm3ko4V4sob3xcyFsHaVMKiQZGJMTKbqTMzukMSmD4XZbRJ7yf6ZswaHPXZt",
  "key2": "3LLNUzahFxH7zpZvW77Cqoz3xRKFWsiVFVsL6E51QE1mGtCjt6gSMTV5MDxSF6KC8XLhdUiikvFLRdjACuKiWZrX",
  "key3": "5H2yTThZbCsse6CizcAprgjrM4g9ZJsmANScGTLVj9K3HW31dRUGoo9jZdJArjybW8GiE1mRuuN4qMq4CfbVh3SQ",
  "key4": "5fRxqTZB18bgJECbohBbgWhmDp6gjyk1Le8G3D6rpeq8x6Ep99QUhhkobfLhWWoSPwVnggdu57GtjFRmv4nz8BRF",
  "key5": "5Ki6CLAAZkicPFvcnKc7b1jXpc5xj4BR9rvJHmGPA62zHDSSFk3qFPVcWJWAY12kUogSopAUfPiUaeXr7sn1US34",
  "key6": "62nfUdYhxLKhB5NjiNmze1Agsa7Lf8yTVkTSV6gzitgwqnRk3eec4qzAzomxGa7eQAexf228nQrymqM34mZHeHWE",
  "key7": "45fMFxaTgYUAXFj7VGzawUWUqX7uxvWzxyhs4fX3RapJpU7m35HRYHV7TsCTsWR51fRfuQKRqSYLb2BTXHWEihgx",
  "key8": "4XNCUxkyko3UyfZCYMD2H2ibbLNaoNvv4HGh8mfDMZqK6PxbBZFhm2ibLXq6BiPo7EaApbnahPiwX8btH6xaHBkk",
  "key9": "6ihWvmzSwFnn97pL2V3GBioaN1REY9YJ8V7VXaAhGbk3xkF7acm5t3uX9VNh1tf9yWzbFUhZ9qUhzWuwxq9f7fp",
  "key10": "5UyVbN8KzNqyorYJFPxfbHK4EjgU4tGREzoqP1kNoxbbevnCPSbjHJQh8keUBVGLaAVPXgoiUeQYZcUx43cesAoW",
  "key11": "3RFgkJe5E25o2U2GKNJTb3xnTVT1oqEDYf4bgahmj4Z1VBbasCcNTGesMfYNJNLkAVhhKY3LZAcm6DpMbmuPZu5G",
  "key12": "4wZb3NVHdcjKCaByjQZGZdBj6CgfLDhhG9Q6ryE6Lj2DTmAgwRKXZBy72fsh4YHSupdBF2tzszxa2LXaXhZ81dRZ",
  "key13": "3AWyXgbH48L67nC5K6bWKqB4CtjhVZWd6kXQm71qFYaxaxzAESsZvRowXvPV4BzcXWGXj8nh919PsjfUq8sbXpar",
  "key14": "PBJjAZryNx2GTWhfgJxucpg1tJ1r7a87aHS4FerXema73rh7gt1PSnn6CJ4mCpFARfhQdGsfLGEDwxA3AawdG7Z",
  "key15": "47iJpH6ixXuKrtMfetWjWNQVr8UK7NghazQWQS6j6rsjFHmKoK4mdvxQzVCjZ9x4Wg9QVL4enB2qz1t7igD6Nve5",
  "key16": "3FGtRtUqiune8prSs2U2L7ehA6xUi2nHNEt3PFvAwpX25drTrJMg6KhzdEFDYVUDSFLjf9Nm4KRtZy1kCJHkcfLB",
  "key17": "4as1QhSdB6rRyzf6PkQHzvKMrCXc9PSfjHB9uYzMgFZKoSrHXWucsMoSRaPUWZp72g3wwVu8YmSWuS59SYiCGxNC",
  "key18": "4usFTucaDT76WRLLpkXkdaxdQiAKB4FuT59RH6AKSNSYKEsjqAVPE4seWhxHir8XtDqDyhntE1stZVorMQxWFxKp",
  "key19": "4rCdX7578eSAY5muJPiwZ3rEdLhFMG3dtMQGRBM2dXHYszxtMaPLSpqoRLJBhk2ewHKVZEHLz3BQarwALcRM3Nfi",
  "key20": "2rzScSVN4FUCU1631WxpNCQeiWnyKJjwsmtZKJTH4aSf5fnWD6bz7ffCwGzkT8AD6bJc6ZDhcdx1qTDyWN6U7hS6",
  "key21": "3gcidYqT5Dtjt4rwJdZnLeagRFGo7wrHfhpLvVWfrY5op8HzVzxMuEXyaJ2DSJmKDCsgiPr8pvAFH3D2Dai19cbu",
  "key22": "cnj1nD8yentL6uWt9GqaPskkQhEJMTyRFzwXwyM8h53bDTpAGCLPmcfUVB1KMk53U65p5La8xnY2L4jtNEGaL1A",
  "key23": "626to6LmJxcbfzT2U4PRTUksU89KqnNq6boyvixCNV1KFwnDCXJfwidSLz4g4k8DXRAGGMK3Jw6q1wA7aDWtLvxv",
  "key24": "3SzjN3rrFUtVEbo3PgvBBoKieZzD3o2j797DY73QV6pHRYHK5JwwHfVL1MrME4SEzAvwprdA6Lmm9kex93DwY5SN",
  "key25": "XBsCXcAdmPW26E6tyiKiG1Gxr6y78Dqu8fbm4dvDLWNJe1BvT7UibaPMB838db87rnGqZ9VRv9rVBBs5aNWcJAv",
  "key26": "3Yh6XQtPAbkneJimeqtyVxKdqhV7UWoaWK1LGDRNva1DDKAQ3K7Sb8W9Rsbmj8cB4vz6N9i8dA3Vjroy16vHLioz",
  "key27": "Kj486zJ8LdxrQ79mSY7DrCePye5mV8MnYYeetv1ZrrKaeMrcm6BsYAofeoRk4JZj5TQhtPafZDjZEoKx9cibH79",
  "key28": "2xC9TsR2NKCF1HQ46FNSCkLdUA912X6MdHVTFnARbnqprLeH1JAXEshw5mWwJY9W4qcm8Co9D4bV4Au2q7nT58ZA"
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
