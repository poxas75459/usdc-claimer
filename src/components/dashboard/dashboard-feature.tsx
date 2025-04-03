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
    "5jDGQUxDmCy9eSimgESHziHkhymV5adk2M4gxXpKTbJBz2rSickEsPmnTvZGpKZ53neJmfWxgLvh1HK9oBX2Bc3p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iDyyeSshFNKMCkLmkoKoMSTebqDPMFz8vgoppjzkTHugahB5GbrSkgcz3SeM8vDW7nFFVHy3pvMuPnM6MCtJJyz",
  "key1": "2L1oBXFkbJ7vJqMAaqALoTVzGmBpkxamTQeAFWmrjwEi1dM4jZWr68rWFsHY738nmq1wvKBc8tMQT5JxocZncBqX",
  "key2": "3zQQ1ENJcsxtHDTTkvGiADBpnBHqc1fguQLoXBBhwYha7pExhCXqpNT6cXYJ1rcdKieumHrrT3oHi5t851zupkpe",
  "key3": "PZNxEzBXutkbasQvpPz4U6LQwVdCxkmQP69awam7wEXEnqdVXhNoRADXepFACKeYEYAvcsHbx9KkgP7yVNGEU8y",
  "key4": "AYtz7x58PiuXHycp21TSdAtckrPFikxeTy45tygKDxXjQuUQPQZsBeF8H5dKFWXFMpqEi1FUPBUbZW6zeUKMXi9",
  "key5": "3XaExH2cDu5GWgmzSt8h4FcS6T2bNoyHrfDbxXhr2dYtVecZsdQ3Q8UcPjZVbdirzC7guPNz22uaXdJx8mCABSPW",
  "key6": "JNZvdurioehhzUjQcHTDkuSDrhAzU9QKkNzZfmm6DvHATzMwPj12HPrAsZXgiLTXbpmyy3cuSgERJx49PaTdF8V",
  "key7": "4nxKZsd5EMi98pc45G5oxPYKonbLcpViVwSy6Cpccd2woYu7GzNk4WmoVVjKBHu9n5oYmg8Y3FMxDVWeyqHYFvcf",
  "key8": "3K4Me3TqbC13PDFDCXcnZ7seAbkfjdQk43cVsrEd39gkN3CCoE3JnjiGw8UniQFoFKLoXS487ZE1UkFvwyQYfWai",
  "key9": "WDbgYNqr82BFkwzK6ajh1nmdysMKBo2ZFa9kc6UPp5fHzNB8yujq2p2gYF6sukhb8PD5KCCDKDTAbUaG9CHhBeG",
  "key10": "2ysJD5VVaDkuWkSXVeGG8brg7aLWKQoghPHDeogghuKpKWWU4jmtJrRGc952Hzt1ojCSYJC8Zz3Nw6mmK9JghZiW",
  "key11": "TvRDcyHqQxoiCfNkDwMPeXxnefhLNGwiAiqJQFdGzQCZ6TDFMAUBnNiFVr3hcCiwdDiNHqHsE8VNEGTWhmJfF2z",
  "key12": "4w5mubeKgJWCrzScNWGFhEMQuYuxwTrEfyMrQ7jfsk7zGWVwafonmWoePkbnt4JJtwZnsLYjXcgF1CJFukEPtWPs",
  "key13": "5BNCh95rUxn34dA6Qx1XtHMTzVPqhPhJXQ7Yy2y6RorYKyHVnpXxYKHbvnf9ybRUHkHpPy93Jbenn2EYtM7G2n3z",
  "key14": "3S8DPKPuphSMaa9jz2aYwkrKed6cVdsv7rRBr9RNhLYxb2uBkfZnrrkuKKub6VfgFVT36F4P2iFYU7oovnzfXeFN",
  "key15": "3KjcRms2SsieNbyFATGUBnobWgWLJCK5pExfbDpmxAmAdkL81oMu94ZjP8XB5kNYK54TaqeEuEvscNamTG57cuPe",
  "key16": "3MAsnfcQ6LfH8gTykMeKTfdNK6SCsrxjJ86Cp2pBjQTTpLKP6g7fe4vEiCjcPfCCxrDqnaxo4GvHEkVg22TChNWP",
  "key17": "3obyPeNigbm6X1dgsdr1MasKrVpcLudakjVgjvorXggWYDkWHeMAUsjURmxNjha1cWZFhCXxH5GcUQ5i1G2iiLXJ",
  "key18": "5L2DznMsACyeyKyE2Z4WF6qLpVUi8spcEzQaiAQdxa7GaPPeiY3ihZezahhhws87eWmPcoKQFkTxDNQNHoy8yLvF",
  "key19": "57gDYRnntoaPMnVX2WzrGF9J92nzjd4HCYWH9w6a8AwQ9EYkUj2CGM813F5fnLBsdV7KAQyEvPrgi4eSEiZRjqUH",
  "key20": "4bF9sAbsagTcMw7b2MhKj8wpYU7anDdTbhRBB35J1n4wwyhD9BLYgN9ZQSGuaPLcuNq3MHgi7QrgRxA69SCTujy9",
  "key21": "3vhUpAWBiMxQxh1bx7h9h4Fjg7e6dxyLEMYaJWyZFaXY2BuaWAC28MRWn2x7B3e9aijv9nmVQz2VQhLGSna1KLj5",
  "key22": "rwskkEeEXQyxgu9Hah7jV9gUsotXriMGnWG1GSa5KAcjwoemr6FvTSxbvo4tndhCXcvdG73Rmqjk9p8SowQt9US",
  "key23": "5Wa6y1iQN9qN9RW5igmJBPcEqz6TyZ3mHGrrbKLsd3MmjR2no9edtrYfZQkeXvKd5QwvKEKUcVQc6vPxARZ4B6ym",
  "key24": "2xJ5AAyrtd2SbEDrWUxrcr1iGqJTNgTeiGgUzHJruwnh1bjhajUytX7CX9urzZcPiEszZTvr6UY96Jk9x18DXMVP",
  "key25": "4hBZBJXwj4Lb1xxAa98uUqjc9XrHcYNAyBb68TCrGrm395qiqX5H48rLcfK3N9gr5n25P7erSV2ce6piNP37HJLc",
  "key26": "4VjfP3wKVs1yVEg8jaWWwP6AVK46NYs5fkzyxQn6osujk2CWAqz16S4DyJvYrUfro8xS4UGnWdk2s1qLfAJ2FyUx",
  "key27": "2SWM818g7oZ4yZsAjQzThMz9EKHC6zugQnKtJgRfZAj9MaufCvGjixZvpCvg87R2sC8Fg1sJ9S9yGUVMZsGGT5kr",
  "key28": "54pLvLXgNvgk5b99Y8oAVpgh55rTY5YEHEacHnbm2mDts4jLYu6RMyNWz15ZBu4CRPEtBkx54BpsjFZcQEJSnJve",
  "key29": "28KJkVFDV5n6BY1nrE7eE2CbmeGEJ2oXutVGVJdo1BhT7duxmyD1qkxocBiZf5EY9e9qQ3jvzfV2e5J7mrFjvRtq",
  "key30": "8J6dtzkRAa1GxGbBoQ4cUEbyT1duF758yjJkWLcUsT5sT5RhWVg3UZLAzY4G1ftJHWaLfPPqwexfDHYkaxzeJP5"
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
