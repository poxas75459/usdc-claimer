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
    "2qEwaQsye4bAGS93WaUPJ5zQMBPy6okeJwgvWu3gKKB5WKT3ewYifWGp14y3TzqrWwqStG527GxTHVPReHxoXFRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2apMwufiMvvcYAoUUTLhZsBPQFHUfmHfGj7E7cxPMmkpF6cK65RWUuxht39YHoMVS7xWqgBvasVKPVvS2giqzsdf",
  "key1": "5AxpP2ecRsMY9W63JtJQBBtLq93gt5wYjNL1qbhyS9ddooF6qjU9G8wWifCvAx14aLGmpiCyNnku1pFLFT9HKvf8",
  "key2": "wUQ65mGzfPhR5NSQTLXzTFdGoxcsJn2J3U4pobfuf68YCjy17QRUGtqRV5REDFwCKdaRELf17THkMUqWuoDnjVR",
  "key3": "3BuypexEXmpFogTZhFDLuaQkg5pmQTtWdF317btfqgeqqgRKwFGiW6uP1s4se76mF71wxWUvr7LVmNFuM79tZALk",
  "key4": "cboQpX49B8Tvp8E56CF23ZnYDsVN5ZFkJc9higgmUqt7zA9Pi8aFYhiz7rU3amye4AUFhKxDTssyUpR8YofsRyZ",
  "key5": "3tkJt15gKrXoTiapejTYGGjSvfyjDUduVegh8uJ5UUvQtBLH1fcHCVVnTfYUW7un7cc2Ep5F8dnH1n5TCZWmgqcJ",
  "key6": "34ooDPoNmo1x6k2hjRx7phCjUDsSVYhjhTmKwChX3GGDFPgDMF33n9MJdDcENoo4ahWCPCyNdAE2gUu74HtFfwGz",
  "key7": "5bfFQ6uWTKKjYCiYE2wGRpiJFZDnfwZGwd1obpastjNbLbqPgkBbMhmPR7vXThVmcTyqiv4qrrCKmduMsQESmdnJ",
  "key8": "2MNuxkcrSTo9Qq7ahQtxceEKooJ4vKmR1Jt7R6tZfSiiwrRz81QksUsE5FHNSJn8Ds5SaHzFHeimCAWWPKBd9EK7",
  "key9": "5C7HrrqcGqCPw2k4axcnCyPqt7jWUMhDAqYPkaJCgoXcitcxf1QBdTUZKFcPXGR7HCwzhStSaakZULDcD5tP4KAo",
  "key10": "omnxpfrDp3Pkxcr8Xe5ayB5pAdLXnJvV8GqjrozEE2GtPuMNTJj4oVySWMvGtMU6BD4FPRYVMh8sZxD3xW7QEj2",
  "key11": "9fJXU8dxD4GZkCS6FPNWRsYW5MwxaYrNgKEe9ruR6YiBogGLVKpSwE6TZHt4iUCPjTvZYaSdENcpGnL9Wgmis2H",
  "key12": "2JKFfmysiwNmGPPLbT1ZxJSnuwToTVh83WNb6BkRvjL9AHvXfnpdTwW4Urx1AWC4XwKciML8ELT1jeCyVkM6qytM",
  "key13": "KWSMDJkULFQvVbC8ehJArkMFdPKQ7DmwnkY31quTqF5HksortstRsExpRfFvwaqUg8ZJKeFqFccizP1XffGip21",
  "key14": "5jj9BuRZvZLBpAwGx2upxDFhRsa6JrVuTjjaqbyBVshQJdgronMzc2RK1EDzSAvAGCNiqh51eRjHX3vmJamaHwyZ",
  "key15": "p1My7NKdSErN9jushyn5qy2HbU5p5SdgRQwgJz21UecERctNJi6NjMRmLrxdVGvLfU8afaLzRJjr3iDG7Q54U3f",
  "key16": "5X1jXaMDBdhkboA4t1aEnC5TTAU4MggQLaBSvcX6YhCBPqwk3QSWXmqWwoWn6AogfnpYgfpQkxSLzhHddfgiRLFP",
  "key17": "5yKjGkVpXDwwJ3U8NrumRZyELLb3a4NNnhKRJPmV7nCSWfNKXTajeKBAswPiRs2Vq7nMkBYUkbJk2chXd3gjRanK",
  "key18": "FAPJ3Qae2LmPnZz2TL3EgUsV3SuSVdDL7zCdYNbsZqp3c2Ybqa9Q6ggXgonf6hwj62E7tEgWYkKm3UzKCYQ52Rv",
  "key19": "3djFSdziT9tqyDoAVn3gueA4qJNHLdPhyHMYRS52jAEj5J1APGpNPfYrfwiwkDj8NdhicDFpdFWGubUbPJEogDpJ",
  "key20": "nryj1P6Fcm33z5NkSUZZToMEZfNdFNZKsjgHqAymJmzbAXyHiomeW47gpsX985xyMJ9YJacorf6YD4BBYknAXY9",
  "key21": "5gjbsYsToXwfgMgvpDhduMTfR5y7Dy3AsbXHboAU8Q8K9v4rRxURcDW1T4HS9bTtjAuzZAksbnc17w8bpvpL461m",
  "key22": "2jC3hmfQkmMVnDf1BVmNyFPecfHKcNFJQi45vpuc9N7T2A1vVyXAYrWw9ZaLCXbCmzWdV1NTLqRkABgcEMjJEJL1",
  "key23": "4wAc1S5bLmiDaAeu1pmtfWnkZWG2w37T6PamedeN6e7SF9gi2FDmrMdaHirpeMaitLuUHJqudmcgE5LYMKuooNti",
  "key24": "JUNRF3jxUkzAH6hq9AAf7GDxkaCA4TLZL8119MN3wxmUWFiW47LbTA8zBkyBtpL11YWkM6hRR8sYu9wD7eW8KMi",
  "key25": "3QGG8CiNzxFrARVNLcrgS3SDcLmMe4Qi4QLQVZP5G38TqRVq4nobsdJMbZT8AWZGmjUJHktcmvPWg8J5CG8ZauaW",
  "key26": "3s33BMbPrhFU7r6kHSqCzdawwaYchKtvLeoqNV944LvKV1EP6tXBVfxYHKEpre5jpn5ADmfMwNebMa3RDg2N5aKo",
  "key27": "5WK8hm2DZHYacGPwCFkGbsSeUNc97HNBHsnysNbmzSKwVm2epmBWzQMLPGavfSrZnfM7mJxBkzKsNakw5QZbeddJ",
  "key28": "67MMNRmwW9ePXtBsHGcWY9spZZfm7C52fFhZmruj3nnrUri7Fa82XW9ND1Gu5NfHFrqesRVgjAUUv6zNhoxSGvCm",
  "key29": "8S4HnDMPadQS9z9Gq1BpJjyC1pknpxemrfrufqsKSVsppoMmMtZYgqKu6F6827jj66STB7tbqizPYiZc8UU8P3B",
  "key30": "3iSZb76eyZM4GcjmoF8ZyskT1N2LbQUeSvMz5hggYruUjXb78BPSB2JYisYxYCSTdQTVeY2pJXAwZ7mcomPAn31B",
  "key31": "PudBsZ6s3DtHXwd4UjTvx1MuDJwsGtYFZnWcxdtzoz5DSmb76w7ZRiPDBpiT7L2uULBDzobkUtyiMcGBTc5NEYx",
  "key32": "2BmNESNZpJwBDtCuYZrzn2dvmB9x125PU6BDskBCKw8tEybmTJE3ShohQtp4iANwFwSzYseoz3SVTKcgoyfHACCr",
  "key33": "4aaUcR62Q78g4sPWRZJbHGDu3awV9FbyLQaSiKMgPqCmtD97ZfPWv7LXAHoXYfEwh55z9MeCXFNqj3z9eBMC8beW",
  "key34": "GcB24AnwBipmHHTn4GdS3vyAMYSzj8dVqqSsNyigbgXuZXjL4Rb7dnyLYkUnRx7oJQmbPAyovn2yYjC9cqRThCK",
  "key35": "4ViSYWQ72THWxbk2e6xkvk4w9To3yzhsJvG2hEtBZCqYGsjdbKFb1ExcJHSxQqPoVwPTaQNeuRVEfojgohfEYNfQ",
  "key36": "2hU7p35txiiNyPKJLkuPn71GLutZJDhcz8NW5T8JUcQeGhjm4xVyEuAp3sAsErtoFaSomcy7qpFyBtYNraytBP5A",
  "key37": "2ahpHgooD2oYFyKTDRAMSv5jo4RkorBZGSg6iq9hVrYa8TknLdXSD7y23cQXoYpwUmio1HSrUmhXiQEgfNVb2Wvb",
  "key38": "4whSt85xRMzboGuCpc6WhYUxMT9CVhmHwo2FnkoBY8XW8C9XvbrMT8VhK2SxhJZqgZamE9BUKVJZH78vC2eSCHJW",
  "key39": "29dXHkCSF7jGU8kDQ1vuPb6DUQTPXE4QpodVv3RZVBUb5u8TS3TKYBBH3uMfxbSyt4oMRr9ynxaiwaqajuXnf6xd",
  "key40": "3dtBy47kTE5SzJW89bGYcnztd7ncGUaMTx4uXiRVFwfq3VQKC4k3so6DzncZCqK7MAtuJx5SxAias43fc38zKzaA",
  "key41": "9sMECYApi2QAEmYv6zZenmbtxY4aTGcq22wxMo4jxhAaQmmQHVHtogbbgLzssj7PBdWm2a8ZsfCNaGBo8SinLmJ",
  "key42": "2gDpwvQKM4vWRmJpkC3AqWBrDr1SJkL4Q3HxPdumuxuFkKJKjcA8v2NcY21sbGzC9q2iybkvGWs8vPnv4nisS5SH",
  "key43": "2jf7YULakQHojXQ6J3Xv4L2n1st6a3uYFN5qQVRjF5775bTF6o1CtdJy9oUBbH9SLp6pykEuzi4QJiT4XX7WuqnP",
  "key44": "2ksQUxvn94dDc7dBje1yEXjJFcrrSJ2tWVR2W6XE7d9sHVzE6XvPNtyumu9SYro5hyk9Xt2UWbqSxKWa3W2SgWxR"
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
