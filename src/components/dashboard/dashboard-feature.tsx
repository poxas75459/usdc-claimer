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
    "3PniYjJgMWMCeTTu9qsWHJWKA59pSJFGVuu8VoZZCykCY7XJZVLruTiWCpte9kxUHjsENLQx333etP6uy33BQSDX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eCvvdWeSyjpaJrV2XzAkEnBMacpztb3jJd5Bzu9ctzJ9DS1q23wo8K6nQPJ1aujU4MY3fxZr3E9ZiSaeN5QBcPW",
  "key1": "wpmA8e6sWatuBH5vF51BBowcSuQZYxRWrv54URgMJR9912bNeGekWYqvABRMrnQXtxRRUCdnwWzYPUBfEH5jFg3",
  "key2": "5NAWr7vQw2uvG3eAmg8hU6Kr7GgkLFA7TmfXVTskysNZo6PbDTNEEJLDH9HfLeYvPVKrrUg5ufMKTpxrj1DWV8KC",
  "key3": "3PXur4hMGrEFsXum2wTqSPxktttF7NuvTNwUU7iiMf4TGW8HB1eDaUuR9YXPqKoqMC22VvNwfkHWVLtbct4jmX4X",
  "key4": "3s9w9HZhfksXguzhBTHQE1aB362RPybPrtDgTXgPveA5hVtoqXjRDVPnrqt2QnYrZwBDSoMq3VFRfLGsxqUufV4o",
  "key5": "2ENsqi2ybQ3vVn8E7woToK6tAUUJyWf8K1XHd4VjkR9QGuEoPsuXzBQM9gaqoEHQ5gSYkyDmQAbbJgwhfx6qwryF",
  "key6": "47MCPjLmvoEmyu6A12w2betWpniqnuptmzU67c74EZeZdvCYfq5XhHadwPBaPbkVyuntct17tTMJ7tSgbeg3mjLG",
  "key7": "3FzgAZgQrBufXP1pRV8c8m2GWC7BPEcpSTP4PQ9wzLcN4wWrDp6z1wUF2S2BnV8KmK753NKDa6Z4boozzdyBbXTz",
  "key8": "Bfy2NoS9hYfYMMy9WKnCEambjxkvkejqRNnQ3e4RhutWnRwbdmdrG12YZHNxS3Ryyt8dzdCeQbaPn8sTaQrbvPj",
  "key9": "Z8iHiQDHh9QvUCp7abS8bDLTgojrLJRcFbDcNDsgVq4V4t8o1Vz8PJPfbGCCzyUUMdwEDhv8JzttNhVNXP3nWkY",
  "key10": "5HU6YvZMii6Z51uU1aMjo36Azruw4Y4VPSFFdL9rbuWab2gvCJFbSKwEjWFmHVTd5jpu59ivt8RMWeSrfkrVLCSi",
  "key11": "5h3GZBePWJDT38a8pkY8G3MT2HppguqjAwTe8LeZdA13XtdFyqtFzZVYi4TXe1fsmVMfhgRYbRJsBVQPEt9XWSED",
  "key12": "2mtmWrsb2QffU5D4L2tc9RSuAQ4AEBgLne1w6irNUzL7w8c3bzAkeH3PEvhAAGUfwx1u9qPpjQMoV4sEzRqQyMm9",
  "key13": "7Vcm88xUURsctZ7FWZkHjU6YaGpcmzUkcKpgpr3SNAdoHVhEEPgPEweQL3PJ4fqzqrngbMSZsgMZHnWpgsqvSem",
  "key14": "2DqZAf2rg5CNntge5DSsM2baQiQSPHc3fMsDahTuY2PCTiCAHDbhd7L9ysBCzby99LBe9P682AzHR8agWAa7GqN2",
  "key15": "4Knv3nNVm3x4Air2117TB4PFThzG11ujcbtkFxAomTCng5JmRdWFSCuLapMbtXKLUQSJvGJKZ837TwEcZaxs44HP",
  "key16": "2EpczfM4xXgBCH4WNmJyKTVpD12ad1TzVHjGrmxoJ4yhBJfi2TVgJw91ShE1cxhF49kgPDwESkVwpxNNqemcrEGn",
  "key17": "E6R1CjbUj4fGYELSuXffPPkZUBSv1SrDbsf7MJ5NisnizpnSzcKExiiBikPxRUM4ZyT9VXEAcJXmEh3Lyz9Xtar",
  "key18": "4UPPxJad1vLPv8nTZJBpPe2GmXaLNRr9rFFnn15QcQYXfGkW5pBSENFSTU8NxHhZrt9JY7qFpawJLLbv7Rhi9Ysh",
  "key19": "2tTAjj7hBs22FwKNsBRFPEn7gB15tWiWicGJSCHDKamYZMNGbYNMu3jPMjq2ahXNQemtf7Hx3rXXC4NNNAWzUUuf",
  "key20": "5RWXFNZpJibq9JxnRG2jaC3i4LELBVHa2MB3ThzjsZ9AzPzUWXuzF52XpDa557HthciU35GHno6qKL6LJBPrTkzp",
  "key21": "5bvPZsMvok37n4Dvvdj9HbmTF8MgeY6KrT9teKqSUuvzAa3c94PZ4AK5XAS5AZ1Uk3aWYpCXWSZ3FaJ8RudDWJwT",
  "key22": "4q5wzfD4BGBLsWvYN6dZnsxgMSVG7vzYyShDscP1uANzA6jcD4wCu2XubiSFM1832F5YLqmrAp2E41kBUwiaA2XT",
  "key23": "4vimje7Y9K1SfZEG1BFGRAQ1W3aj4u5mzZ55mBR1DkJRMeYmkUztsuuniWnMyMhEqGs2yTsHbo1bFmxPfmJQbpte",
  "key24": "vtCaRHA38ALbJPxjBzY68u6Jx6ZU6NvHh76hwYjHjxwymXk5YAcicxdvsPCJqW9fnDyG4EMDRaGKnH3ccb4XJV4",
  "key25": "3giYEZKuPvLDrkcMi1ZQRQ6VAovLLRu1B8hqEC7oXU8ND5LHGUbSa29M48ZURP6QacnpimHgojTfFnrSrZRTDf4G",
  "key26": "tKV4YZqRiR82H5BMcpmfFLGYxiQ3DgrgqWfvNVcNbgvxmtsGnp7rzvkj33Yy54NWJnXZZ98aka5CKQZhRPuADRd",
  "key27": "6C75SDriBsALdQvA81uzXgAwdBWD6eJ7ynvJEGBvaWrHBd8tMPWLU7cv5eQLjc6gLYhHbgBmUQHCj8XUqmg7wjk",
  "key28": "5KX2kuGxuDckvcUQa9sKE6bUHWUXp6kroQVhte2PbTLhnMxc2ddXKu3C1QxAqGvNiV9td6SkEDppECmAMZ8QUVT5",
  "key29": "2gwUThiMcSUkLue4UYshfW4L9QQne5PsjCTkTvRRNo9nYjtUd3F15WpDJVQ5a1Pzm1cjz3rVCSYy6NYT3NbbH6sm",
  "key30": "4SVNLy3FXUND7Gb6sUxXCTFuBRzTYXrRRvvQSYCa3Pfz2WRruV5Pp7NauSWjjexNbnxypprpXodMqe4pyQFU5mrV",
  "key31": "58jeeA2Hv8D9zvC1eE1uXjFPfQXrX1oUGRednkJcui7w5g7zdmNJAfsRDvyVjfvknzK9f3geWi4kGo81oikABvZS",
  "key32": "5keijnrAjzq3VLLPoKHP2fjAgKT61pBKdmP87eejxzLaxKSw99XdMo6cMUfy3LZiK1Pg3W96fuecSUVpLy9cKZBn",
  "key33": "4BgffMqiVggrnRcao4kknfMxcavdSBMSpNgQKNyWYVRv3pwkhpjpsTsAZ3bKRwyga7h5n6EVirStQS6ow1phuPyD",
  "key34": "5qHfTCtkYyAzK22T6H4B8PYTCz5Dx43rLrXqb4aTR8Nk9ioBwGFgdmFjzC3YPktajtwbZsexYnj8m9h2izZWtjDA",
  "key35": "4VcodfCjkJjHVW6dKFus7VLz5YJLvSa7Hu2KQsoh3AT42qr2WxzDmL6rfbuCYFdBfmfcKui5WkHEadY9gBxxLnyM",
  "key36": "3zuHTjoG2jrEXyQg89LGEJhsp1dgesSe6KiuvxpBYeJRe6UEwdhGtTr6h5whFvw32PJfE5qMppLZzLbKMoTCaaMz",
  "key37": "2RatnfcdpgeDaQqDXiGdBn2atspHHXbyfzT5vtB5jWRCapDEdj3rsgDnCd8iL8rDQiE3tyjg7bFT3nNJGsEaAyBj",
  "key38": "62Q2wEi97var77JxpYFjZtRnyeSqaxjaPLBg96Loye2PKbcS1rdVcucP8BfketN817Lse2GxunY1k4fiCRket8ZX",
  "key39": "4dVP5MfgwTCrA5Bc6dqiS2899cDxsggLb1SDgKp4gNK2icyDfUQgKRYHyzDDinHxKAWhwCAju6DTrPyY4pvjkT97",
  "key40": "42MWDLgcsXD6b9LTV7kxSMi5r4iZSf8jqGbDHcaqEnZyQwSkzx4mL5o2BuLJcYcwj6UWbR2CUwdDQ5g7nxbbp3BM",
  "key41": "2C49gxLjfTJWnMZ67BNYTVA4w3Qf4Lf4nZPungrbqHXRkknm3AbrRaf9pFZBUR3QGYfgHYvsXMR5deYxbuN8kGsR",
  "key42": "erfHuBR6sWfbQ1A4Ye1R3ZbiJ6re9LEGMisCWYFfTWu1BRGHQXGufHu4fG6hZ3nc19Fej6dSYZnAPXiWUKG3jYJ",
  "key43": "35Guxj8z55Zk24VkUCBWH2HGg8hntE489uxW79VFSNwVUKiveNfyDVbsRRUgMxegjXFQNGoLeBBwjeNQPqhayw7Q"
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
