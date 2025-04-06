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
    "acCY4jobfYWBATfWwAiteWbVa3yaJgmormsHDU3JgThAkCWPQgnUGNaeMLewiruuWpEnUKdpYGnMFbduW3VsMLf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kaFiTTx9ULBhHo5RGnyPPV94V1RWsUmcaf7T8yav4Yb5tpV7gsEkwQgy8UbLHszfNute9HQ9MVcP3QkUx4YK5Ez",
  "key1": "3eyHpffcu7WJ1CsqXBTNvBLfnPY6QYtGzrFsHZJZ13csanba3Vp2pJ1RcCjcaPUFYzKVzD98Cyv1K1WfvSaCRKRn",
  "key2": "3NJjGjQcG15mZ8DJtx7FoWEmRQ9V7rrNLtdBnui4oYHB7z7SChYmEDnAdMY6hd5S9UDh6vZcpr3kF2R4dPPdiNx2",
  "key3": "bPeucRajLCcvnswVetPvBF3phuWJEUoEDxuv5dMkzcGeZGMP9wbJ2ckjd8c3YtLAH9LPukWmUn4815ajoumigTJ",
  "key4": "BusGLK3jp5gk8PHdLTvZUNdj1gN9dEbpzhoPewwAt8SKsrNQmi9qxoWxfmLhLtzWpvN17MuhiRibH1iiPiDFv6Z",
  "key5": "zcmCCtepLU17vwHAcDx6gDJpDkbBiFN52bYXYtW6PTyGSTwHR1BWgcrSqQGjsZMZGo1WXyN8LEh1LHWJqtXhgNh",
  "key6": "2JMvNpWHboP7kfoSPRpc2ZDMZ4hHESy4QdKjSmJ51RAt9o1Hqb7WC9CcVAAP2PxiqaeRQtzkpkfKvQvavvhnwj4T",
  "key7": "38e42tJPrEpipJFnaS2fZUx2sPyqsc2LN8Xmb7gBzBABEdDBZjzWuKZ5KQmnJXwJ4iizKU3R4rWXnBKVjiBVHrED",
  "key8": "4hDRMdKqorrkwx4NiZbj94YYPc9C23F4hnhvj8wqhJzPohmFaFChCYbxvS8uuuunhuXz52o3LqB6bYzbhLD7mACU",
  "key9": "3ZKtjrxQ541wrWXwn331Kyv8zYNkYiABPb3fQHDzhgJp94uAnuFf5fdDnBy6RfZ5Hemb7sxGZv7k5AE75VKqRVrT",
  "key10": "WTK2iRQVANV47Qm3y1qj3FarJgVUmRtDtcfqVX7ZnHjMFTReyeFFApgkEhMBaEKPFwtmg47JmkGKCgnppyGcwAD",
  "key11": "55mz68LNGrFHTzw9yhyNeMh36BEoLfHFoNGN7esLzBVG2ruEk4oZbQgA7SR3o4h4NydX34ZaKQP47ddU17jopaQs",
  "key12": "3MeVjNFcmN1XcZQsgAGXCapzKwASThYC5hKioEFbhJVq6N3R1awRQ39GbM1aXTDMdNGNiH64LPTfGqAedqbYxvAD",
  "key13": "27hbf8iWzdxkVVCBPcd5CYs9Kork91rkoYs3JoB4eSiise441aQsQc3yWgA1B74a3yDW6UPoxQdBWMHp2n9NansG",
  "key14": "2qJEWuDKY6UTWLtvwuWPUVLt5vxNTRdJXFKhFvN7T9fneadDhDDcokrkxgYbCNTKuLohRHAUqZJ3LxQP4Sxr6JQz",
  "key15": "55sGPYJh9zVDCFdSE1gSCEWgQYQpSKS2B1RzuZXyXEykGEpxpfYeLybsidDiVLitX7b6qWxDpRWYKt7cyaLaacBm",
  "key16": "3J8y1fVDBVizT7XYvmEk2CRLcHFQBxxQnSpymBDoV6nqv6NwhBAo2exJRhRmizRsRHdVQdTc8siWxjjU34MkiyP3",
  "key17": "389fCXsqvSPa4q28G74xGbAXVtbiwGC4vhRziZWk9s3J8U4UVxpf5M96UJ513W6i1mF61A2RvZAiFvWQBQ4Vd5Xe",
  "key18": "32k6pLC45qttqDrpMYhY37Q8rdFbYyVeYV3RaL5amxSVKgLknoxT9ALoq9uuT13RT6NfKhK2xG1DYY6EyfVSKh11",
  "key19": "3LzmrYG55LAGp8zySLrvHAv6Bmh1LQViP4cABLDeTV12EYipj48vEkaMyGy57q1fxjb2miZLPL5Af1UrucgWA66R",
  "key20": "SXqVBK6PFgMJYWfQMHznitFutbvtP7fAVBAhJgaSNfdd7RR88SFehbULKNF5FAzDNwL8Yx5UAVBgxawqBM1M45K",
  "key21": "4mWboPEXGbjGj851eetjTGmwzuXujZVJVf3S6DMsR9TP1r8cZC2qnYsMjQbMvD3M2A7eXryveKsRBi1ck7in6fv7",
  "key22": "62juMspjSG1FseSgMuBhZVj4g9vtSBxTkLA2qvp7HdQw97HLvs81RnhQX5pKF7pDnw2uVc53NW1Gu4kfcmNHcdbi",
  "key23": "2FXwPhWcxFpM1NZbxGay6N5V1bowJmbMw9JjG15RA4PLDHdpRGP7hPva8TYVfnuRxhMetktVJ5VR9DyZshgx3cC4",
  "key24": "3EUty9niL1MYtj8ZrEoPdcBAiGXHKyxY6ov8QwigscQz8Dweb3p5kJtiufkfdRPz3a5jwpthEiCac2XZc1Q7xksL",
  "key25": "4TbU96GKxGUCHQH3eEcT2556xBDYB8wf24ioM6SDsmNyGsWaJNvhvh2PEYkxfZRV1ofCi77xvhx7EkggceC5zpoS",
  "key26": "U5habdyYp15RdvVx4aioHWkvgxTzQYB6wn75Kj2HL9XgfisrsTYXCzFrGnybxcEx8s3t1Hs9ZDQXpyo6pKMGNg2",
  "key27": "4sg8F1dpe4B8zHsKmaku7EWc33hzHtyzkXHNGtajwAqH1syxEDHxA6eMWGT7VFZihsLhQJDLD3GoWN4tX99u6MZ6",
  "key28": "a2mveqrN9W75R1drStgWQRL1q1s7GnXCPHzTvL2Nxzacq4tEECCmUTG8jUGaWXvvKC1eW2JLZyc1m8hxTgp5ruh",
  "key29": "M8r5Vif5PJfE1RxXdaEwEuNeXXcKEuiHrPcxB89UzL1iL5JEd9AnE1SauCA8XGGBU44t3KtJFU9v4Xtk4oQ2bz8",
  "key30": "22FG1Fc2a8Je3twnJvfFc5SXDFqJv87pb8ADPCMVMHaPfdstQYTZu5rP9zYzpxok2xtczXg7bnFchCV5jTgjCe71",
  "key31": "2MeRgpqo3AAiZg4fq1HZDjzFg4DaQrM5h4hMYu5jzge1TfHxEkN7pc6zxQiMZbw5vWZAVSbM5BdsdjZUf3f8G94a",
  "key32": "3VjPor6SK1s7pi9dC5n68vmcGddBq22SKTPdmBkje1p1fxbLTPHQBE6UfUrxfijU8ovMqau11BBvTCYrpQunSwiD",
  "key33": "48XtaXWXbGpLQ75btMMSd6HBVkv8PHrVyrkGGLrTKaAyixJ6d7nQZy6xuja2JjcMCRKuKxy9xjuLbZHsgnMGs42",
  "key34": "58qqSxgoMdivAtVYEHCxfXuNiXdkNP1TDJ99iSAi8dpc4EkwcuoFpc4C1LXTqPVGnnc49XLUhqCbj4CMet7SHPga"
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
