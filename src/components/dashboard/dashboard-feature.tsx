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
    "3ebRBbkDm5RNtnEnvSs64iNtUKhfdbtSBoFLYViEpisoohsvCxHSzi4z9yqERyVZ8Au5CbdzSUVeoPT9S1ebodxH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oYSFYjdKyDad7MC9ACfCZ66vhU8qiYFD9xL7YUFX1gyEQcy4nDipWF24wrLXAfPDeRHpbboBawQRfyDnjFyghQX",
  "key1": "K8K5djVmHgWFZdxC3JsLP2jnPgUvMVGgo8mh7L3NAqhVkWzbLo8futkbkVvKSz9h8Ux6nJdC2RymFL3e2KfhvaE",
  "key2": "58wkszjrkHqxV9Mum3GfSNW4noihoToKc3o54PDjUHLE5QdiqvUCwtwujZR9y36iymFtVRj3zzZ3JrbdZLfeUKtg",
  "key3": "4rxaP9QZgQFL6ygokQbVz5UNoPRCotcCvPTV8T4BxiJ4EE7SVXEaqf7F6mMaGy99vFo6miJDNrtEiN3d1xJHTCed",
  "key4": "5s2WCnxu7ycZH9HphqaLkhswTSp8wgJpyct9Txc1RpFBf5McustYWAixWcTU2EsGLx3xwSzL4v7bRAh1EVSgyCMP",
  "key5": "5QiZ8zuM6fmLFEr8k2f6oiNT1mTzn7HJLRUD2fMud9AyXdx4xn18ExSEGqZ12BU4Fv2QkwhYuwT4mmVY6qN1wmd7",
  "key6": "2NA47H5xBspfpwRRdix7eZQWVjeH9SdXWUzHJTiHP8X3Ka7SyBS7WspCySc6Bs7iN3DeBgmGZLaqzQkpSXq31PSu",
  "key7": "4VLMybPspDeSjsga2x62CcRtHw1aUD5bFrzsPxAZM2pBdysvcJz8LnHQtwbVnZkUnSufW52RPcNDoiNrAHu28hAs",
  "key8": "WaHf62nfysKPMgaxRiePjKdt8nHj4SrdurKucD96AM5iZSNqizKhZcPVzJDYV24SZXh4duviyqKGkpQDFe1UmpX",
  "key9": "4pz9Tjz6FdccQYaTsGvmSV5p7eXcZZ3w94jeaV9Uubx7b7LQFYK2VQt57cZ95791ryccYkvmUX4r5Gq1jSPm6V6z",
  "key10": "42zYehxKr9afXEsAUVmazLWWUumszBfR7P3VRxphe2aashHhJxTGmrGrCuwrLe9JBR3zrjvM7ajRqohemWS2b4JA",
  "key11": "2LR5jCzWsYnBiUmmK8aFyDHNJhGx62dEWpdkwkKSSfNAensYZvgwQNDeNhLu7ZhzwqYHWuq1DHFcjqF1N8RWw1Ts",
  "key12": "4bcckUDy9fEgGUN4GYPsHLi4dGH1YoEwqdq7MpM73SWdMAqEGVADLsphnjonfkKsyL6pRbtzmunKMC7StJ16n8Lj",
  "key13": "4Dp8Hb4M68nN7w5zU3r7Q3jQXLqMJEQjHBmQjUJsh1FPrURAfu99Ccg1i6bJjonFmV9aBn2R1GzdeoXGfnCtGofc",
  "key14": "4fTfMwWE4U37giW2PW5EW5Eyk9LmTDSLhKnN4pMnUrUH4PfZtcG6a6hZsqUXjJiUVgTsVobripy4izyYiHfQM1Um",
  "key15": "65AmyXbeGS4pKrdajyxDaAWCqeSHMfPJm1tnaJCqGeNvPMWFkvFFEqQd62VsqqTJxd3JJicPkJMVMEysV3GLmJeP",
  "key16": "3eD5JkvqUxfBgDMavuWnjhxSwQUVcA1qj6PbJ8ZQyDhuRmaaHZZkVSbfpy4bU8vsvFQgjoEsWJFX1f6bBjz81G41",
  "key17": "F8gkSsCcpcqZjTiiJn295hAerTxLc3NxkudN9Qd7wcka9FRQ1AGqGCzmEGm7pEZbLCbjB4r49pQ2Z1HmbfE3n8n",
  "key18": "G16trmgYt5F6pTUFG3fxETk6oVbQNqwB4dTvPihX79WhhMKp4QWszPQjCdhdppLdkUctzwKh5dVYExCuDkz9Sxp",
  "key19": "4KGHfkhq2fd13ZHBYCUmCwJ4vNiXj9eeDJn347qipGqnrat5jSjWV8qRdDByAWzvmtd3uZzybwL4eqdyXoi2sT4d",
  "key20": "4k4PsmkfEDymmqhMxKeBV7EUT1Wm1JUeGjkeHYteTrBhzYhTye1kLKidKuAuVN875ZtcxUb7EjkhjCHG2VKuKbha",
  "key21": "4PnGNcjiFYZeTM9RnbihnLzDXtHEwTjRRprAbELtFkHfCN5Ru526GTbsX1iUpGzhPWeZVQK7Ec7dQhWFHj1HcCDQ",
  "key22": "33tj5VQ1UAXdjpVLhKwsb4X5xAQzsWdQkFH7zsNKGrprsf46Cmd4Q6B5yKwqraRVKErRAHmzGwfAwVsFVAnefhCp",
  "key23": "PT9tkNjkDHNJQHUtiTHoxNt73EyshhGzDVKoRZJqieRXhDrEzgo4Hjbwzj9j799RAJgSWdGYLHAkLxsJ6uSgHAD",
  "key24": "2wbVrUfKurtSsV9fe5vy1vg8AZZt7SvpdrXhSsPC7LxWr7SajWNYvybeCp2VCbkwMiBRZSa3EhenhoqK7ko7YfmB",
  "key25": "Vq9L38yNsdp2CFEnukJSfYu2CxMpwUcFeRTaQYfT7SRw3W88npykqDU3BARkoQEEutF1gg2iUKHQgkBaMWzooit",
  "key26": "3RpCDoePmDETWj3hJ16fsZ2Z7obEqQaXaDAkZUPaLc3n6vM9svsyBRDWPiuuuxFuXiJJq532JWu7fvuq3aEePaPB",
  "key27": "B31xY6iuKchKn4T2HZANe5PAgjcLwREyJJbPnEERPZEsSmuRDz3omMSoNzYqQnRhXhTZkECsYmBgU5A8RWRG3mb",
  "key28": "43g2Zoi9Xhm5biPeBGMDKN5ZgztDGed9euTt1Tp1h78nzXxLYLZv7Aecv9k6sr4kJ9D3kkA8Wh9m6Y6MEDNUgnVu",
  "key29": "5ao5iRSW4o5ZLXZJiZTrupTmQitDsiea1Qp7ZaFD4EEt5fBX3a4Y7jKf1kSvYATDWkKq3aQthzjiXTZKbmYpnNiC",
  "key30": "5dRdYLFdi2UogTX6NqxWJ9tJ5FzpMm645gzy7GtpmSkGZbdbAEEky944Kbf4UhNmNjG7iRsuBPaVxYSXU9MbwexJ"
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
