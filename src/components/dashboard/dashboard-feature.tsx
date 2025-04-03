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
    "658Ldcv9AnnfgqACousJybG9ow4eaRb4Jh439xjh7edWD9iHwrJnQw9B7EDYXFHb25QeL6iYgMFY91QbnAWgXuFE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59dceaAQgiEmiMLbSWmS8viThPXdXbi2GtCxr6oqLYMP7ex2rAjS8KvV9VicJjdKYXRAHKhyBie724yaYLPQK2pu",
  "key1": "4gpmtTv8d3tQYGLmn5WbH3rxKNLVjkUjgguhvR948TxoTtKEX6b5JutrAGWnqynVCe8bsqtYqL7aJjZUCLYMLPcE",
  "key2": "5WyL9sT9zS1R61ZvX8TXA6XZ2wrxJQseHkBNNLjjbCDkdSzWRK913WQsNAWfppeowjiZRBgLY2684Be5Zr53gHpm",
  "key3": "3q7PCiHPC3fdnkb223w6Y3VFqvnUU3dbeVLJ72CaczNR3iV6XVyVLknCScgDG4PZcwag2eSHzLchiDrRvQkuHUJU",
  "key4": "3Kpg5A8Kix5MhNdJpmXvHhx3GGTewJ83DZGDbYqSvs8Ycxb3x7tmub87mvroSrKimwULtT1KfiWVGFJhXtZagTzU",
  "key5": "3H7BHjVtaLwbsyWqA1KA5pjs1EJAhTKNTEwSHBrN9FucjobuNgGkCPuLxm4wPosWatcDFG9VpkPGs3gjJNedsZ3n",
  "key6": "487o5WRynWxGXDDSYXJtZhTVVdKU9ixCnvmoYfzS1FFUmP88qD4jZLqzWUySrYP9vVj4iQpGGvNGVYm5kT2EHftY",
  "key7": "RpC42kUp9NvoCsuG2UHBRmdvbq5jwEQjZpMkYocyuwQTqvq3qLJWJnHj3nnYgZ3f2qHrCikD61rGRfQYx6WZVX9",
  "key8": "3Y667bbvZYojY2ta3rnT2L1QJFSh4KsVFvWjbbqZeo6w6e9XpNU1L8LxCCCp2Ue4AtyAKq3WVCm4epMSjuyzPWM5",
  "key9": "3TGLMprXAZogF6bX3pDmhqrMa7vMBAMf4VjpbuhfBrVieP9ARX57DhX3q1Zba4KwoWbfyz32rZAKLNCKiT89dM8M",
  "key10": "4zj6RQdXcgQGxx4e51bje91qx5nHYAG8R9yKLmEo8S8a1opJFJfT2NfdemHiBBTQXKUJoYrXqyrtpBCziguEKmMs",
  "key11": "65vGMLx1UR3PZMRFcrheLJ1yDcfZ7SShc4W6GbNrj4x6vez2NUVcQ2zRA3AideK47foNGFpS8qsyEHPen4TmAySr",
  "key12": "2rTuEp2wUbUctfycde1Q4YM1R66p8tfsXNhNLgoMWnRVagEv2dQETjSL6gqDM3BBXkVtg9Gb47atcMBqrD7k4q6f",
  "key13": "3asC6GJMzRaa1yn2mW5NJVieDFSZH4UYa7M8yeZiRoSvjjN3KyK3xoGjcudt9BBkS4Frm1gR4fp4cY9z3voNHCa8",
  "key14": "2zvxDgnAV7U3AC1RucJTKn1Ddn4M8eWGnFCKN2S32cSbwwrKM8Bu1rH1X6qr9Z7ArFjGkuuNy1ECdJjJE8vWkDFy",
  "key15": "3XoQ1cPRvfcnWSkbiptS3bPG5dzrJBEeEEMwxiJT8Q4q2k1iAtTvSCVnnp3vhBRg1FgYkBE77BuHA3B4EVRQKbfv",
  "key16": "2HZXtmVE9aLBpNqNpPBSDtcQgAh1hL4ZbMsYN6mjE2PABagGsKnYm3eLwc6SAzcv2ndw1ncke42buD3wZvqEXpyt",
  "key17": "5qJqvtmLir19vSK9j8Se4P2E9gt5uodAA5Ut5XrVjF8qomDDs57jqBWUm9SWaggZ23CbCqyGg5YL2yhGo1TWG3io",
  "key18": "4q2gohXHn7a91ELNKYTmRcRkZnu7crZNgpnPKYHkzYkvkaNMeanbi19rYQheRegNFh7MPrA2CF81RTwyKWG525Ud",
  "key19": "5cphHUFYGNu9kN8C5GwAisE73YpRjh1iE2QmVvz4xLXTJqKcbVgrRBmdmoRvsAwHpcAvBuM5MyH2HcCQf5hHBCvs",
  "key20": "53BngChGvVtRnRAt4DEb1epSjaS1u9XRjTnuKpVegVArKGhG36PmfKEAQ3zRmV3XjTRwZnPNfB1XAxMQ8sV7tR4J",
  "key21": "33hhigrxzL2fsBSexeJHKVNwhdCZBo2vbXaWpcz4q15N2JogVqRRjsKm5Nzv3UGTswcswTHbGeXyMNyRwcfbT8xk",
  "key22": "3P2mV8wBKUzFrpUJqT6EHgTkAfFi3bf8ehFeXAjSs5FNjQyqNPcMa9aMiUSFK49vEZrqcn5f4rZRQTyvYghGVkLC",
  "key23": "7y8YgRXSDK5qvrfYHsbRK9mhNkdxo3SVbPutKvXKe3CPy4z6vHxFfZEbMj6pvMLeZReSjDph71buWHREdgeGYUt",
  "key24": "3g1KuxxJhndRmBdYy9TRfoGiDEeBjZZ9SmqrfhJVz5CVUcFcXYWxadVp5p2RCLzWVVxzxa33kR1vmNaD9QNHfDmE",
  "key25": "3QJrN2WMSJK5NzPa8yYAjU9T1yhsTZetXsDnjfcbM8XvuuvwW8JnBAy25y6FKd86FpjuLc4uzWQoUK1bvTaWY4Ax",
  "key26": "2cak5E4TB2UsrgZYY23AKezxFjiwpSX9ZiCHVJ3stXgnKNxGoH496azeGojRa6DDkt9qGqo5mNrjBBvvCRMN5Dyr",
  "key27": "4GAmWQCgY6sxx7aw45FEqppGSect3zGUQZjnG3M5WHNSuEvLXP83nSdpboEyy5gpfkQgHnd4JmswkEDb1VbSRvKp",
  "key28": "3tzkUk5FH1DTCYwXFgvmUBSkeNzFzFgPUybBfTSooDREAJxCYtfQXbrfgigWX5avbSaYZdfFyTiWYrs8ARWz78BG",
  "key29": "VV6ewGPNuMRz8BLhJJb9itd7RccB9AgdssAcPA4XNAUjHw2M2N6NbFUzjdoraYJ7yADdHKcpegxR5LRsWiqeuzZ",
  "key30": "bPorgiFBxrxUa341hrmVcx2nzCs4MuHRNS9ik91sJDu3kBBTg5HDRQG3LryfbV4PQCbnL1syP2LMnuAumzyMLkt",
  "key31": "2e33d9HxymXp3UNQCeDe2noRmzXuPF2GdySUDm27RRjjyyicAaR78sTm79rVPeocmmkNQWkE256K8HGVFPZeuxjd",
  "key32": "33ZCYfdTmwqgWtTMHiD7WMarCrGiVjgrtVbxYb8q2qgy18v6vzuwHrDbgxLxKhEczgvdjKE2xSakQPa22udChJEK",
  "key33": "pBwbE3eKqiYLjyxoERbZQYVV78dWAw1MvcuBk2XecauhgZce8JpMP642hktiDmmXv6fWMR21sXDQCaS9HX2qAvw",
  "key34": "4MPqd4UsH3K4z9Q8htPRDboR5Nke4dk1sH41Nxp2vzR3yTumTFZYQv5RgseS13HbzA8e9BopBrwh9kvrRyHZdHWR",
  "key35": "5KuVVsfywhrDmcQFWhNPPFRfQaw7a4JFBMkT41zc3gxPqFXe67zbgvraQ5gX2fE5hMJzRTcy5CVTqEdrS7nQBi3g",
  "key36": "298U3cy3UN6zdhu9jvfeAHrNHWS1V1wbjTMmp8YpCF4GHXwg5Epyg9KHp2FwxbwA2QnuzxqwFjiogxhCZi2TMoR9",
  "key37": "2PdbwNybQBqYvmV1QYPMhRPR1U9bgwLsA3hk3p77Q7dsechYaRPpLuANZLX3x8adGfDrUFboVk5FCQPQNvJfg8Aj",
  "key38": "2J1RvfxDwP6bnMLPHieSBSDoQynfa185N2Qza3R3jc4CAUECKhp1Fi68NhmvMwdMTnYGT47kDcdkvMDnSr3KK5FQ",
  "key39": "5tosq5xavWYoKs9rCNbee1UWHyXEu21xC8oES5vSTPnkn2zTanLFNuqvM858pAfyzBPzFTuKJQK2v4UzY1rHL41Q",
  "key40": "2VnpGeHvfLP3X2BXsY9eeBE1BpPGLhEDsh9GmTYzBPSzw4WAsZLU2fy2RZULWHDTNnkCchBmnHzz4qtJvR5DYxmR",
  "key41": "35gmHWZeWryCGzjYNkWWrVafXwPKwJfiMNWU2RUxUEB62HJx1drLCsHRhXg7SBfzg3qyJtji9et3KeqShPETuwWg"
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
