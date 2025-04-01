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
    "25kMPvQwVrqEzqWvNdryW7vNJudDm6qZQWpCB6dsTbSgv8AuTgi76Zw6PdckCBHxTAnMJ5TeT23CwJakCjZMKfS9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KYhQnTURC8daFXdxacLNxf34xhSW5JYx2ncYExzmNiav6Sn1vxCnLoyJbF1rN16MXP4QLxSjWjZjWcesgHVUg8B",
  "key1": "2kLXWNHkgYMfCDaL5RBGF38RJQ1TRxCqZn5Xs8MpnL2utDFRXnTJnsEsHfzr3PShwLcY8ntsrsv5HqZhdFHyRcDC",
  "key2": "4ygEJAjgXks4zjpNr2oDMCuQ8oQpBr4wXkAocKMTma3yyTNn8fQwuaiudu84fFNMxGNYumkPYTBiha45NavmUSf4",
  "key3": "4qv8jDkddLtf8eh2WqiXWpEqYy4Mpj3NaVf2gA1hGUsJC5QJAfYdXhevAvc6AKj4TGJzrHc1mwZ9ccN56968A4W1",
  "key4": "3A8yZDQqLN8phL6boj3ApfEw8mMVm9M49ESHRgXQNtkZw3BaZhyrSGiCetTyV2ehaHjwhaAe8yB1Jks6AGMFQT7Q",
  "key5": "55XnnaLLzT6oPsAJHwqckHynsC96SozNoE2xreRFQPreAtZkE3kWYnar6vw8bFzWQ4prJTdU2unLHmCf3sDAKXCw",
  "key6": "oCBTpBfBxginX9SJU94ed8WUrzZrYps5RZ9GkoTF6BiJz7T2xmcedvyzC4coBdusjiGrZgvxPSQtvCBWpUkSM3w",
  "key7": "3qdsByXJuBbnPTaH4Tia8Yq7rNes1ci9WjjNh1XpSFxuzRakzy7CcTSWeGJgtTePxnANMDtYFLeP97jrsGNPZzC7",
  "key8": "59kUxk7cQFQvAWtC1bbgctQrsbKfYY3cNJ6nxLWKxtNRVfr5AGG5tUpb3ttCBJTeWu97NMfTqSUX676wqbiWcVvF",
  "key9": "5NSUU4cTf9VrwzFauHUnNqpMdDmsPngG3B88NCGxt83ZuLDoeB3e5QT1csmEe329qYnEsM61jkrd3PLhRnCzjgKq",
  "key10": "2vRNSmJBdMB2svGgUCnDJCFjGajnNN3yDV3perisxHyYgxKxr7qXkL1nGbDA1nBFV7U9anmKq393XrcyMQYEWGyN",
  "key11": "2LoaibrckEVj5dn2u1A6m5xTyKzAFK3GuuYQ8ZZPzEj4t1qSiv7Mpsa65kRE5Wp3ictdtTXTcnLwqNQqVYvrT4ws",
  "key12": "3r9Zq2dpzZvop2kmFwSKpgFZ1rJJ9seM1jcX7W32qxwAZuTUgtBV2ATeohM6oZnR9CzhpQizDdZnpcPrvcPoE8Jb",
  "key13": "wV8Ma2y2jKkViXurSBiboj7wBQR166b5L5FZ1mywDaKGXgRBpXrHCeK37Zr82HEu8BSFsP2U6GKP13qam6Tprze",
  "key14": "AQQh7BEMGMGcWY5Bw7wzeNceL4BxPgJw4yUhjgMmpAXudi7UcyJndPCgtqseUpowgLFNc2cokcZeECKBU8eNNUG",
  "key15": "4jmsdg4ekUf1j2Xy8UsL8XmBAQdX9iAcwgBvAVeocAq7Lw4tj7cQ5VjDqoEcGJSZyhL9g9jvBLDu3GwmwbAMnRmM",
  "key16": "3odcRaxM8WWBLDBCz2ZXsPzQVajK4aHgvQpTEh5K1XNGy7QSc8qudgJyc44EwG8HhDHYegUoLPhsnKzh2hfAa1TG",
  "key17": "5ij7g2BVDAvJ1ZoGPLV99vo9mhf5rvgQhXTBRaD3t5ZwWtrtGyjPNPWcjTTyfbjtQutHrJdXFAePHqHadf9obtAs",
  "key18": "4VwajekMAK5kNfi2BZNdQgEDWzPx9PabQAjdFNrJUvmn959hnSmgmueS1mZqKjsTDoZNEoPF8nn1u3QuApxXYeiL",
  "key19": "29nzku27L8GgguiN4Kwu2QNBodPbFFNHFSzekagLNQo4gC2NR3h3fhtgxXLb7G2NoK1viPz4AzrALWBzjYGzTEnj",
  "key20": "25vkXTgaVWNpTzVY8sMigSeg3eJwTN8vv7oUbGTohAWTRogR5xvCDDMWednbZJaPUQEWXAn3BdiUAmPSoR2yfDF9",
  "key21": "yzdcndWfbfP7wMxkgEFW9QXfo12FbPdDxboXqkU2CvHBcyC9TD8JvFzxhpMiJygJpGuf9UxM1SKRAiv6jwyjxQP",
  "key22": "5zrU4Gg3L25AgZ8APiQXys1qVYB2Xi4AFNYPssUD3ng8vrUn3px2qqf98e6yfEpYoDHgAdjiMDB9AGDmh219sY9",
  "key23": "TC1evGLuQU3JLx1NZybvEPhtSu4Rz3j3aNiuw4XcAL92T2vZVmXGHkjKkF8ZQV1Uz1JVrURvgoKxZvEbSicbSg7",
  "key24": "5Lo2AxMQW81iLasfwDXCa42MJEuqTwTrybJ5eAtoH7DRrJKDKnsmqG8x2ULmcJGv5HfLJKENDmxCGodpSHcr2EgZ",
  "key25": "43xsDrjnJzBxTAhuNwRtztbU7jUg79ZZuihfhkmvEa2u4E7dW16Y4bSJ28FTmGMdww76ZDE1L5ufKFJPoBQRERQ5",
  "key26": "3yWSQdp5G4vqBizhoubxpCAv3NAMQqKHBKm2sFJPmqnRBJkTVGWVdKPp48bPHHtoXH7YHgqiC7iodvKHAro2MNvq",
  "key27": "3LjF8R9B987xPgX9n1fkTocV11Byt42vTRRJLsFp8t7ZGj6qhwKCwaah6EWAjbkyxf4zhbpeNcHWmCBjGRKsRkpL",
  "key28": "3An34Gr1T1iuoo4uGtgFrWeEmhwczux5M8JMYTTA59LZXTnoSeHwBPn4KRitzVdrLFieTNoLkzASs7qF9Xeeh1ny",
  "key29": "BgQK8RFbfdrBH2E4qZ7ShopgDRVxCnwXt1L6MmQzyCJMmMYWZKwFc7U4kBkC2bvduQnkHif269GkKbYX6kPBjA9",
  "key30": "5NvGX6QRh5bJE5pydH5E2H7s1JJSxXCawJameMG1p3gCDXrHQHeJtsfxaw2jmFXfMpSwUvDcwAr2Wwcim8g292mk",
  "key31": "2MVczDxLvMStSL4VUWq8vsWRmS94bdamezDsbnq34V1uiG6Amxd87ypQysVZjfTfBGATJ1URYN936p2F76sN6hAh",
  "key32": "67RNxkgZVKLyqq9LaHvBmn2Eu5QU3ZTCfmpjdPhpp385QzbCAqzoBSo3tFJAuZMEpSXoYBPL1Ak7feEV1uafZyKt",
  "key33": "3Y2xA9D9b7SACdYYMM3b1R4MgWxYasjAjctmXH4XEh6SWUtFsg3zibURwBAjCrLpTrWLgumTHDTh3co7rCVCtpoK",
  "key34": "4t73NfQ8CQ24nDHZxy8xrMf7jSCYBXTvs1hMUmXsXRmbvtzDSUJPtPksKi63Wa18rarzS5obNzbsSrHmc9qsBV5R",
  "key35": "7a5FXWQjtKZyC7Sm563EjmBqsDzN9SBKFw4sm5i4Yr4A3Tv4PrcYiSW5kAqFH5wSi53SuiYM2ujwNSkKxGjeDW8",
  "key36": "2MMV19D5UEnnDLLDodXMMRzwxDYgV5iRF7wJvQJDZyMZEB59Ww1r195gpJbLr5xuNSRhz77x1iam4VbtSk49zJt5",
  "key37": "51yFHyUHSqZxmDXHFK4yJ3H89pXtihNWP2beZkjaPNCM6sfrbNChQaiXeVz1NwYwQyHvbgttt9wgHrSQ8X4U4WXz",
  "key38": "4Cyc96nsUxmxTmZnYeavPcgC3nNEmyybN2EvAprwkUkcgnA4xQfDcyEm3YyMMTTZVHh7hYAS9wb6TYErFhSDZHgh",
  "key39": "4LwNg8vH8J1zGD88ZVsi7nADtYgMgFdxcEWmd6ind2eg1LBhtYc8UVRiPbZ6tf2fdMTMU3QAhriqPnUyq1vLCHPL",
  "key40": "2D3eCe6CMPuBmh9h72hJ618QHqoPbau67Y1TfwCg6essRraYCpWSZ3c2SQW62xvMMunmfEJFoSSGPmShnugDwmqM",
  "key41": "3Li6W9SWW93FRCvEvqrp4agom2PzYAU66zgVF6ZG4AHbuvrAd21KH4hcAAc82sxuF4nZ2ukGTztKZNbSK2zw2H2y",
  "key42": "4pCZ9ME2PoPmqMUxaH7FR6DUgA5t8XBJKJvJop3smJCJ6YrAJBXC3P4kKJc797y1orA9SrzpzRYtHdG7NGZihzTp",
  "key43": "4ApXQ5nAWNRCLchjabCQszSewvw5TQ8U8a78gnMjiVJxiPisk8BWcjzXLY28xsNK9wFAgSEMrPcZ3zwrb4gJi2bW",
  "key44": "33dJRKgvDCBwaxkin2axTL316BLFaGuHj39mzLqaoVCUvBEPfUKtiiBagzZoMuginV1nCnXcfgKsVm485zGjqmoP"
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
