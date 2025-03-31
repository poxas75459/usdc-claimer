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
    "4BDZkcUZyMNEBii8YgvxZqT2SiuZC9iJmteH7nq1UZfns4BFpjMpHjRj5moHuULPxxqitjsshpvCsuBST3S7C2NW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GbRhiGmm5uiyPq14BzVkuaBE8H5nyE8ga2phLuvkNKv8jTZBQeumS934KyQHnVMtkwsma8MWewnwCHHQzkCMSAd",
  "key1": "4fXmdtZrFyoubpc5NNKmeYNmvPoWt4C7skXmr1tcedVvAEAXKpvGM31bU2cB6B8eH5DGz9wPWRE8TJQLSwRC3kd7",
  "key2": "CySSXQPviXGZECwg6GNCj2qv9TnC97wK4cZ9yjMaxLVhUnKDRNeJ8bujMkYr95Empp271uxjXc6C2E7gVfcjmaY",
  "key3": "61B2EUFUo1Rfmt95DUsYmquDHcCDG27ykkQMmgrWp8CsxCMKwXsWAq7n4X9DFLMsp3B4XBfspEaghd7cjJdsoyLa",
  "key4": "5iozfFYFFvH4AVAEYv9RzBHeK7aQKH7GdmDi7euXxPvA7Ly7btvYaTnLv3C8HMa4XJuK6PRZMk2pK26A8rqTpRc1",
  "key5": "6JTwUtQkfx2rhA3g2Tz8KHGCtYLZxnomeCzvE4czTKD2eAMnCH3NhSMMS9LjHDYoaAgn8gRPm9UpoNxo5A11oqr",
  "key6": "2Ns1G7y3UrvVDu817qLACNsnUPn3JZncPSPAGgQRLxT72c7ihTVDotneyEiWcKhkSogZT7osK27g3jLv8yi6pz13",
  "key7": "5BbpgCAtbe9DRtLapXaZf8KkzeAaX48Yhcw8kTKFwGS8Xfvp4NpmfWLmB3xvnFVCUfHta9DGWt3LDD2FYnkaEYPA",
  "key8": "5DN5uArpsEuVxkuuqirR9G1SVJrR7JYLnZzkEsRweDi8Ledh6PXsDzUXmQJTJJ5hZh5zMC2ZyH3YHX63Nmwdnfay",
  "key9": "5pxakqTzDVCt1ztCT6n8RUwjNC3eMTaBSMfaZAiWChzwAjr2RRj6rhVAQMrruaYv9iadPJqkaGgQDdAnsKWYyUod",
  "key10": "Fg1kT3P9NERUBwFRe6DnZUcds2a9Vjx8uGfqGXsxdcPNLEcqqKXTRjYE9EDSnL3ng4sAj4s8rnoHnvXU6VPXsBB",
  "key11": "64gzL15gkXVvUPixbDbmq8xbBhv6foKkXHWBzPoSpS67mnpN63aCiVi74MdjpNafZeXYnsprapFMWfUVFuZGSoWy",
  "key12": "My9SGeHY43hL6rhoNpDbenMk4p8XthRPHkbZBoZWHFKV17yukk5kD6yLai5d6VSRT1G2MnjXv2zCbfTa3TWJvvk",
  "key13": "f5GhhpFYFnM9XD7bWRC5AEFCPEXcbxvPq79A2hYZbHXAXscrtyidcA9kAgEojS3WA89jaWfBmHZEHb6Fgriubve",
  "key14": "5WMsuZF8NeTg3B9ePcgSgziPYD6MQcaw8gcLSRFvh74VKYVey8dWrKwNjSjwEmmWL7YUfn7aaNibrftJibXuZLpz",
  "key15": "3ASCgYUEJiCD5H1VCjNuV7ZyjGXBYYizvjtTgRTmJRrwxdKsHk2C7DXTBVUGUNer1iAWiRa7pZcb32qZXQVVNPs6",
  "key16": "53hvbAPq5W8G1XaAGwR2y7qQJ2UMWEh5Xd1vBMAjcrCT4oL4TGZV3zxhm3Vm4urxaQ7RPHFw4dpreqjBQnhV6Ssd",
  "key17": "44ueCEsbpTuTjEgLnJsceGFcdx8atwKeK1MXpWKsfTVYaLK4RGN6HZyqw7qR9k8PFhBH8jhroduCPGevUyWy4d6B",
  "key18": "34bF3oWwbcvk5zKZEbTiyDEU7DqQsVVdQvnFjob4FXk2kj7eZrVSVTdXHjkp3jVxn5jKFh8BaQDEEZRcot6zQFDy",
  "key19": "44SqHEB3givPDgTXVWns6zaM5feNbgRrbCzARQA5ZGy6T6nU3ZBGKLUogCDWEhi58ABSiEyY5eqNKBjZ4oTNiKio",
  "key20": "49b13P2cKLAnmHRFRuVtanArc84m75AYTPjNyaikAzASFv4LFfiZdFuWLhf1LBAcZMhrdUS3qhsvdAKSRNnnNg2m",
  "key21": "2TNuthSdNS8wZvuRo7jLupvDhoBUyhRmR2i6zV8CPrHfAa59SJQNs4XX2AgD3YXCLTtySF1dbwrnKR9Z6JZ5P7Zc",
  "key22": "4MJo1Vq4hwTU6L1D7nWQa7wxVhJenpzqkLnhHGoAXFfsBfTEMuAN18yNRU5wqhfn2MbmrC1VFGYPbJ5gDbe1sKPT",
  "key23": "2HHretFRLGuvs1G5wzjCM5FpJ18FZwpGVF5KLMFLd8SveFCYGKRgXbfdsE9ZXBo1hxCSoTf8JkbTXz8VaTDt5PFJ",
  "key24": "22KyfvdQmGf45Sm5fpLstSbqd34Kan8jme6pJiTTpTbdGE7RHbWuAVG55NFwUdDF6eFVKEGgeUunyrNpaRpsDyYD",
  "key25": "4a9LNjmnkPsPLGv9g19gFM4tM6Zb4jGAEqW6LQWX7wpidEjjiWBCroTPvUqbhwPntPkcsfEnbiAXh4NejDiMdnfU",
  "key26": "4XLtrkZBi9YH5eg9gutVebrt3EReLKNiiCpWRawEDiAWW8pgtiUq5NAbgHk256dHo5oXaSWULpLaqFMSUBozEzUL",
  "key27": "4AQDbp2KtJ9jmxwDxDcu9dyeU1ba9pXk5AHjbebwUwfw3sKUwjUTpTir2ox7CVox2Hdpo3j97qNgmUbT5pumZofV",
  "key28": "4yteNJPhgMXWL4Dpv2ziT9PqsBoSMKnoaTspMabh4DE7vVC7tv1EoRRLvADbvDm72ASnRcUaq9HNbCWCh2jiy4Qq",
  "key29": "3aUGkpKrbnEETXC8WHXb1QxUrWMb5cQsPBdECc1xfmQ5GgQJZXeBVJGdzCjfPFoUxNjz9erBgPrJ5Qd3RavM9Ft6",
  "key30": "2smTJBmp7AeGzBvbsa686439g7Sg44YreXn3RtHBAzZSUKpraLdMMjHv2276bUMW23s7jTgi1exUt31VqEsqSgXB",
  "key31": "5JuzoXwKwpzwZpsFgXWk939bNdXbUpickwhKd3Wq2YEqEKGmrLR9ey6quictjtGDNeBgQ3Tk3zDBoCrzyPx75ErX",
  "key32": "5A2qtYYQ9vPDdRuKwUoe8KYCAgU6bFRwM4s5yZDyN9YQ8n1XuaUWukNtYm853axLdz9rR7Y5Smym8XSs2kGUmize",
  "key33": "3gMAKnWyCGiUwuaQrjWK7fQgHH6EBHvhq7U4EJtpirj8cW7WQ9G9ejUA8bPHLSco1mVfeUCqa1eHtk8zREyZTAXp",
  "key34": "2b5ubzWByano12oFkiiZZk7EBspfhQBtDn6WFXHU22LnB6nYfLz9vE2UUFCDdAAVAzgEobCabwfgX7uzEC4d1bnZ",
  "key35": "3Ng5ATBwwrZGTZuXfXZpp9r3RZWjUVqzQCS1mAHP4WfSNEDVaPVkS3vjvmfYfWErbWND8ipQjN51V11w94XyzjFu",
  "key36": "4rTPvSGr7mbkjJ5Lom2ujzvxceMEBjhJcgfpJZHhVxdM2MHuLMNg5jcjzo9J9MwwgdAhKSwJhHKdMoSqmQEFBt18",
  "key37": "3Xd2vArpYKV2AAEbBvdHfhXbgkXs58AVEjqYv7cQvE1NXdmAWVLauhtsErJBBX34KDScYpr2MH55yBgzKAmygY5p",
  "key38": "5c3DAq9GqwXFhPJZEzQf9Sro3h1sYXdwTyd9AnJT59UfRxWnW8JQ8UExVT33nWyWhkL2bkaagryQdzuKK17psxB7",
  "key39": "4x1d8BrPJVidmhcibH4BZZhsbKFAmPtFyUPwiPoQikY55CUqQEKANoQFP3NA4S3vXEkerdnwgbAVCYj3JonGjAxK",
  "key40": "2S2j9nqsvcDc5Uunw8k8MXpj2KuumRaEG5TytuXp9thTHV5DUVhJQrvPB9DKoE7eoVCJTAW3a6twdZGRzPmc4jv",
  "key41": "2ew88JodpTR8Ehn5TnvhtSWuKDJBgh7FsRgBrAwYHh1yQ7U1212uWQswzGbKN1f7vhTAvhzvk2y1snsDTSiW2yhN",
  "key42": "3vGmzpSZNf22ruV363NxuGyMNSaUSzxbbLqMGMuJeUpyS7MmC12rACxkCMSgxsskfT8P1uQJRbXv6ez1BNMPbzqD",
  "key43": "vczJbjxXBXYFrb3KnBf56S4FA4NYzcs7PH9SgyuMv4MCPfxez4zWPSbK7PpDeqFMXB9NUJ3nbLXezb9rNJ6KTtg",
  "key44": "5d1V8mmqNj2ttLCEpzZLjERurmzT9kAevJGFVJ1WrvKqaEXErnJbGQVS73VCxQa11rpNb5Snu3mBgCd8fjzQju46"
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
