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
    "2USbn5cnyN5HyA949Nr3bEJ3Dcsuvqb8FugdbKBQQTVPWw7jcjSE5N6bwgia9x6mX3tg8b4L9pwCFJyWcP8f8tP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EDSa9RmAh5Hd4iwhvQRVNUnmEsPjwDAwit1srU369XvjgJeM22m85eNBtL4j5yT1wsqP9ci2VddtioNYSTY6Pds",
  "key1": "StwWBcQEyk3qiGekn8Kaam76kPNpFY4LGPQW4gSddjJVg4ZJBHuBDPe4EmXnKBQ5ECC61fktHMjo7stfDqKovso",
  "key2": "5zLs9doeTmALaQA2mKwR2Botm1s9uW8VsK8enVQZUC1i6GYixkY5CNSJUZd2ohSudGD2vjQW37CcCT7Ex3PpKfGi",
  "key3": "3542MsuLVxZU4Hnf99UFSSy88pkrU2c7a1bycS1ZySGghGxXydgooKuqTGAWb6nfvf1Zn3JdgapdowhJV98sBm8R",
  "key4": "dDzATqzC4Hf5Gdq9dSVSajSMM5nxoZVfHkYZxhwBtdLpXkbj299MWg9fDda4XHn23dV8Auq1Tgn9y1oY5zBuy5A",
  "key5": "47pmVekreSLKRSZNcPJFKS8mvv4dC3i5nLBkKw4u6RtTnGtbJ6CJAzvh124BeZkn16frteA4LmemtradvcJcHHGa",
  "key6": "2KSa3BDLY8DtRRdsijDEwDcJpPXKEWzvEP4v6x4q1pQ2FHndLgWUDvM6dTbCMc1uSss9FXL2qfz37XXgx3ABiuhw",
  "key7": "DyH4oPNB9ikHNi3fMbPbHdrrwuN38Bqj9XpukXzTHRMmUBgABCSrd2D9zp5yZphZfzR7Ki7GPwqebMm4GXRkvXp",
  "key8": "4svQRHrp2JzbHMuirox3L9dNk47CNhyauWNMHA9bQVKfGVpiF8qybAviTD3rnbrAXAz7seR6eQP5i5dkFtwacE6j",
  "key9": "3NjMokYgDWc4KSdaKw79B51ko1cqHMFhfDYWwUKdJ3cEqDZYRbbAynsqKkz4hRsrCAgQfZ2dLyrkX1JSKkwVyX28",
  "key10": "4b8Z5TQNXv3rahChZd3JN1e4aLpCJoHZnvxePzLUM8rqksQRysdE9GT2Dsmoq5JC99NwFwk75mP7ZD12PJxiYUeg",
  "key11": "4TSJtG5zxrcPmZ61JsDFXQuDSkAjXf6kFAXT8EG7yT3FEsoFuBP3R92UnYHeHjHaUKjwSePjuaVrLN11vVAjmeat",
  "key12": "5suYvdc6ZD8cewzrxihoT8V2kF9nJkjRsrxQTNd1VqBjYkGRH6Bv3DDH7yfzK6soxDTiW1iHdK6KcypD22MhzyY3",
  "key13": "3trJjxe1E7JRXEfu8oa2EM6EuLo8N6FxvC9CLb9vaJgEsdzsWhohAsjkzuXvHC37hNfyrz5rVK2krXWypdkTDZ6j",
  "key14": "3x2nH4EJqhkewbNncKBF5Mfz8vFiSZuGwnx9MkVukF9TuvU2g4vbfdiYUz2LZxTEoawPAYyfjAyL38HsQVCrZDkW",
  "key15": "5bXtbWAUEGhobFB9ryXtTHJrmiV7FfvKLChLSuXjdRvL6UP4tWi2pnZ61dwtp5onkF159nbvkCc93ABB9yEuF741",
  "key16": "5BNJrAWZDwDha3bkpsVGaNYWZ2RskS2DVGS7cmws8XoiyiXQYHU9wGtNFLVmCELdGKeU3ny8TMebCoSv1xSAEgbd",
  "key17": "31HTUAecuknoKQmciGyK3xAXFs39BkHkumgfLgGeCY6zmpEwgBUvwb9BGqBFGXW5cEcvSkCLmccZG1thSBGr1VhS",
  "key18": "5bLLeHsFF9nQFJQdpTMWfsxwExpPsDTnDrxCquqtrtKSGE8cUSkcfa2JyeUuqHdQx5eE6GkSZ6un5fNy3q3rjuHM",
  "key19": "4X1RTG6LB9uaKyLEwrHMeRJHgaBTnmqdCWsh1MFPs5hyFtke2XyfFy9M1MBB6ipVEP375jof2gcgXhcCGfEMNsFe",
  "key20": "2TtfRpypb6wM9E4vT7wVrjQ2njbadLYoHZ7d9RWRzJzgn7KfHaChS5PYKwVCXdiQunZakCkPFGtBKbZKDRkjYbv",
  "key21": "4psUNveuq18aJr5Y47rKw1n4SFdci65aD4Fz7unMiU9fvWECqqtEsZe4Pijt5wM2araLBfnZpMLhzzbDjvtSu52j",
  "key22": "GupDWEGgkVXdXoJoaMHWBkR2gv9NeWruMrP5JoBZ7L5Jj9EvSXn3YBsYDMBGAqJgCyhkDASf9ssJXEk9qZhc1Cv",
  "key23": "upQ6cjGfMqidrYTJinDqdw6K7cPABN95hjbfTqm65gf2XDW2ucWjFsi4ff53K1CGMmkDf1gmfqNgYMyzGr2uTzN",
  "key24": "SdvGdaoWWtW1LjnLTbdFmqLtwUu4vzxAvam8zzDFEVUNF5xcb8iffYAcfTTxdffEiMEupNE96S8Rii7wZpBvGtW",
  "key25": "4jX5R8pRdpDfHVMAUR5T41GEN3vzGngTZxzc2BoDgYkyibXpeZvEAPu85i1Eh9DspVtrSqMSZSi2mx35DVqwYJ47",
  "key26": "3W3YjzTwzK6g3Ycm3uDZ3FSpSYBoxNfXxosdmxaprQ2yu1LEURLjmwoaWRCSwz958Uxyq7cpsLuJ8BcKUXythgoD",
  "key27": "267ocge5XtUxNnv1ZPHz3PNCMVurYfJBtd4hzUyDxf4cncJ2m4QcGsxcpHWbhHTH3e7gxQK6E3VbnKufiMyMeZ34",
  "key28": "476XeaoyE3ADg2kbq1pErT6ix2WpzixSaZfXUHKX5VwNiK4Lz2mzArQ134rRpuerN1FRfeepgPDd7jM6yTWNKjoe",
  "key29": "N5o86t4pGufj4CXtS9A2ooUpTRBqR7US2pARVcvCF9o4BG7VgzbEsYm2q1U2XwTnNquhXghPCSnhmor5CYEzXBv",
  "key30": "4m4LamKSatP8i3piTsrH8FUP8CwxHveFSmWWHWPb82kU3WjEM3bDB7VP8mTgVnN1wiBJC4nv7nNMsFwbnCfeFCXw",
  "key31": "3Z1X4Ab3SEFYfgLUCvLQcGTj3kBRc31kRBvBmqajAj83XGpavuCFWjzTPr9bV77TsHQtTc1xa2xJ79Ns4K5inLRu",
  "key32": "3VrBPKznHxvrUfi6hMPVARXEcvGraZ2BcVQVTgtBUExwvYsyRiX1CH3Q615MnDk7W1Qkq9GUhvxShpBnz2387CnH",
  "key33": "4L8nGXD65dW7ma5KoKxYdjs44qe2FSDfLXonbGsWDLbpWYV7rDLYxNB3uSRvJoZ5LjQyAjgqQstLvWyE7Ki55ahB",
  "key34": "2cstudVBQQwKfTvAsj2m4rL81c1TFJv9mB2tcCTAM6E76Ppnpd6apyjMCgi9y1Ru4rn9vRjnMXNMs87aRmwXgg3v",
  "key35": "4QPpCuGNk13m8VFFeXxdw6WcT9AywbMZAqQPeBToVxL8uAuugMZMzYLPojJkm5Q5zgJbWz3wKagkChXAv7859pdK"
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
