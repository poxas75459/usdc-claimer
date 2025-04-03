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
    "2RowtRga9gXgysCgdmwSnQw5XvicsGv5s2zHDdouNVbDFieKdVbcJjNaHjRLsy8hsiZQjsyLFbk6A2QngGbjoU7H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xZXPT8P9Mn4eDz6C4kQxRXsJBsXuvbiDdKEAkvzEJzKjmJJiVBeMj6sw6LjieBXsPHm1frz2H4Qh2oFkgfvJbCA",
  "key1": "3twLQaGTHNE9AFmHC4go1k2P4Ti9gEJvvTRcLb8RV9VzxYSpnPVPtxGu2CUw4VU9wCquLxHtJKJxvjicVp77fMuF",
  "key2": "2WEcBue5KGn3Q3MjeCT7fPnyQxegTAwJKC5gvpCMP7t2RnJdsQTqpLWJo3x4qZdtTDXGMkNMhuPGoB1FZRs8rcDD",
  "key3": "3rJPiRmYiHHv596m7vDRAE2hT1xjeTe2xohAXbEqnYqgfBz3JUYn1pwydE6sCXtofCGgAtDE4BoA6XCF96SJMEqf",
  "key4": "5N39ksYbcBsnMTMK4dKWFnBEeHfYRv2Xf8RZ4fdaNTnHF1Emfs7dPVAbMndrFkuk6fHtHGyocFh1A6zKeEAJaftK",
  "key5": "3BxG8fJDv35JfwJdhFUdt1YL2DANXBpMUUSPU5BxM3Uxfj13U13jzhJjrJTvvinAuhwwRan5ZUd6UJHpuXeNvmuF",
  "key6": "3A1sWv36h5VAr6yawr3QLGD9jzHE4rycoAsKQcAYs7KjuRAy3nQcvcV5iBcQ2vzfmaapxm7Ck7By2ah6HjTc2nfN",
  "key7": "2pe1Fq3wCndYa17KRDT3Tnx8xP5ASdCvpyWqYMtc6SrkDFSZy1cK2PVMyYkr3XKFcBjDNSzh8ZLzPHt6oBXLYLwX",
  "key8": "4DEd3TPU7ucoFE2fEe99sGr6nbknfAdQ3KNZ1aZcU9iUKHgFr8yuUjph5TW9oU8UuJJ2a4CYzyUNicJ1u4usghyS",
  "key9": "3SZDybB9YQ22NqcwJSxUge5k4s6heaFsBpy2oWtnxBytNhJ8RsT5CUxyoN8m7P3brqnXeDD674YVqkYUJzxJmPER",
  "key10": "5BxU3cUyADzJHuQ8JiyYBW5H6M5x8T7au4o25VFoLgErhshidY74FKsiUtveY8Mv2LHdg5mJEaJU4WzB2szpjgcN",
  "key11": "5FyWASVLo8REguDjayREMchZTRux4cHRTT247esqkU5MYWpbeHixLUxJQfTWcdbgwBEeYrdGHMeuK4D1kwc1LQsg",
  "key12": "4CenBxRaZd5dkXRWeTkKtTAVUesGR4DVrwiEtufvtVBCUdXJJdt9yNBmZim6i4Vabcfd6bwcGCR9mUMGU1RZhXmV",
  "key13": "58FHRGanFnocjavXVmEyp9GsnCuHP9gNppq2kC5hXHP7adMqwdz29nzdwqRF6GqvLQ7kR3bszhN8t1rrhEnmPjns",
  "key14": "4wsKKoFeT3JR4XTuB1GwquES4GxeenafnocyfBuBHiuxZhKvAdKFtCC14QsAJMf7r256iFEj4GpGje8Excuf9m2w",
  "key15": "5TvXQivjVuP48abHB4PoJne2WPAmot91632x2ucbYPqtjLXqx7mAKnATr3rPMG66a4yvWSpJjU7nCcqrQWZgdQFW",
  "key16": "2ksL7rRsZFzE4jvDW1THARag8F5MmF1FDXoKpRA1AUDAbRdfoQCswrb1mEW7j3PniAuuu7M2PbtT12dAsuycwFTm",
  "key17": "4THMwj3j4ALSvugEAk7Y85bsdZnSA94Pzngn9ii6cmDBiYYyfMj2Bm17faEAxFZup6imUkm4uKsjZRHx8LCjzawn",
  "key18": "2EGpaQfCgFURM52sNCXryuyZfbMiKZ3s3UEQ7Eig2JnNDfrJLCDNVr2RMs6rkQBZaHyw7tQryvhd5HafF5wt4AzG",
  "key19": "258QJVwDdcMqVPpfpJJfr2ifR6TsH8E6MbdxpwWG8sKbKbmYmxE7oMu9Wn1cTweaJtZ36K5MkGMP2EAuZ83nhZ6L",
  "key20": "3vWKeiCnXb16WQY8vKJvPUe8WtSJ4CZnzypLkGxhmcCAoeFQJYH94TPE4s9RVfP5keFsKYUVfTBSqcTHwbFDcJ5K",
  "key21": "3USWPSYLdPSs3o9MQx6MVqd2XkJt4BUom4GwQ7qfR6UWHXvRM44ipcZX35UAiaisR7S2Neu4SMPaoT7sKxd4ptYK",
  "key22": "3Mu7yrFPkyLCdCrqkzvAQ9fsKF5j16mTszQdoiGHSdEuYiMLx8D2BrEVLudrcaUS1X5s99oPcrgvck2DnYCSPSxQ",
  "key23": "4jQoaK6e1qAwzHhtqM5eehS4nff8UnG29FucsbsdEWh9NPp1dLQ6JeYZBQTnPFuv2ewRnPUUZAR4fXXmF1J5vuUH",
  "key24": "41CFz5mdfYUcTBDEdV89p8qKSNwb5XsE7UxCG7w1UEeEdbj5it3YMkkdzJ7tnjAcMHKuwnF1axtuHKeamVpGYn8j",
  "key25": "2Nryx5kvswLHVGEDvEMauWncXRzFnobdHaxcReeX59Ncg8iAGkcsikEzf7spBsuGM7NeZsEe1MptZKn9HdEYSrdm",
  "key26": "3dpBvKRxULEVLQPb9zsnbpFeZw9Dpa8Ytxfh989fLu2eaRauYXgtWUXcQp6pnfsoouH5wR8548r8ph2kGnjZmuCp",
  "key27": "2dTWa5G7QJ2ZsJbX3mJCtbkvyyT6CyCCvi68rh34sv9U7YahEc5q6Pyer5BRaUdyxDAqpPqVn8N7vcePVKaLwszQ",
  "key28": "3V6YGw77fPAa98cfHzSsCdtXP7TDxgduktrkFQLMtcgMztvJFfXpL4foBVMkJnJG42uJ7AAPWBzvpnsxJwaXCUsS",
  "key29": "2QyQTUGZqERRN6EPC6atCBniDckACgJcF8LoSvQw1AF2VghZSiKgDwKizNCy9xcyWKsdtHGZonD6nPvgbAPebnt2",
  "key30": "4QXhFTARePHbqPVsZqXTRgGVMwAhqAxRLHsCkjE8qezJSWLpoT4wtX5naK9Hh9bxzHZQ7XCA3oaidVp6ENCyokGN",
  "key31": "2ZWf6qmPE1dgCVmbLx1hhzRZFNszYsJLxXfBZPbb917eubbbbwzScJ7BLq8bqpRnRMf47r7Pzwu3j1VnCwwLiQ6U",
  "key32": "3ZPyQ2prWK6ng81vtKVeTMr8p2rievEFWYouhX4G47J6chpE7gaoxfCGduUSFFc7zdMWf6PF2MRV81s4EitJY4w3",
  "key33": "V24cvxD33iFXguhqnvmkjWPpf1eH95ijxJAgcqAePxcXCabPXrwmQW7V8QNKSpp4z8BdM6bM8Qm7mPtjooWphGz",
  "key34": "reKLLxs7mchvKi5zqxbcijn7yWdCGh7HSGJzQ3msV2oPLNcfKyncqbFZJXprDP3FTR7EZR4rp55hE1qVhBqLi6h",
  "key35": "csgcQNKB8twLL4QnPGW5cMxpMfBQ6rfqme6trREX9cpdycbbotub6WhjkybHBQ8KmttnHARAM8fJ6ZU7zkEK9KP",
  "key36": "6DcZd7WptKycA3vSvmQZ97nKAprS2j6eQQCJZAmcwGJA6nwHJDhpub5PLe6HA5gzadvWdeS4cH8LpGkzd6kPcyk"
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
