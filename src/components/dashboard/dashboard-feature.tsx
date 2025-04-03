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
    "sSdDWnbP56TAJHRVUTzDrDDCYnmhqwM2xKJwzgNmrxXUzGJSCy6BkaFix3FMm73uMgKp1Yw2foDjMDTVcwnADdb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UywihLDzxe9wAWRm6iUE2P1usJ2A6ZMvxXBy7wsiFfB4E29BAXQPVmGczvF9ahbxvpuFhaQ42eyYr9c1mq9XGoH",
  "key1": "5crTdYsGz8VQdTpBKRJ7T8ZKRWjsxajcBMb6UVFc6Q5SVELUBTf1L21ebgvWkbzdRBWDLamBVbxnDk7EP78QWhpX",
  "key2": "2GdohScfP53UHJEZcJDoAbjJBmjdE6KM9H4njecdGQVQKjrVZrCPGCJzWAh9dmzNbKAYPNzwxDCQFXbGYYskCoYd",
  "key3": "5KB3T65KXXH1wST4vxWyKzgbMN1521bcuSb2BEDejfCRGQHYVL13jDQjDsmjCuKTJmBASMM2G2cG52CHmZ8XnaNe",
  "key4": "2PCJEWzC5BKWiY7VnarZAPSavGvGYrmNfwqaE4tUrS8LNa81Z4YaApMc1eB1WF8MGjkT8XgWgftBwPKf1iwFjGQp",
  "key5": "Fc3frvpBroipQ3SThDT96nSa897KyhchW3Nz9agtiWXVACZb3ecLEfKWUw1UcTM2tjhGWD6skDhJiqsXhNx3f4j",
  "key6": "KiEcQDJfPWmyJRX9poqZ3ihqY3dCuoKpDSB51SydCnfyYJiWx3nKNmoNTC1K8kke6oLkBTK3ab3mzBRQFc7A8ws",
  "key7": "3ZjjW66nfTPw7WVhYySP8cxSTo64fgy2j3MaQLRzTNARSSbox4puEh8fimKpxxedigo4NeMcyV9MDigz4c6VKW29",
  "key8": "2WYVbxsbssg6T8P7d13Kx4LrcfF1PsaSnrXyAY7CiCJXuGnNmcWYGMo2FpR46M2mEXJwngQBJa4UWpqbemVUm3MC",
  "key9": "2Esh8cCd89H96f6qgeTu9U4rRDCoAHzeRc8rGrwT2WyfVAdkk6UPpu1UQ1yv11AxfKXp6rX8DVLJpfHajeKWsfHp",
  "key10": "3GuZgdaW1mrqYT2TkFJPCxndvMaBc7PUvKtyfvgn8uPbZqaaJmmp6qcLb4F8kbBYTak1Dp3D5TVC2QSAo2r59o1H",
  "key11": "3zcZLiyei8uqvpppaiTDQajJUhFezEVcN6CfuFMzvHaCrGEDCWjXWcjSqwj3Ds4stBiCwLyZGDiaKJagueUcmYbH",
  "key12": "2hDtSwAZdJyMnFZQEA5kr11gHEaBypiXy7S5PxWgXLR78o4ziQ7xhePuirjJH9UP7iWF6zieXWwWcmQsjDxGhtyw",
  "key13": "aseLKNu56qMU4E29MzBVdiyZJCTv5gUNaJNY81jnPmj4jTVgpzgNWD2boBWcmeJxERuP8kApYVpR9FSoU2WMnzU",
  "key14": "QKPdFxVFqDAVVZ1AxJd1rP55JizF4epLZzbiHnQuDLSHSpj85KutifzSpCMjyKw9a27Ebq5xJwHrf9T93kSX7XL",
  "key15": "45R4ngPpdw6RG7KpddQA3KYyHbcZVu5fSXCNM3nUFiiFVeUp2UdZyLRuVvYeNtaqhvrgNdMyrbeSjRgJGZkdvLZ1",
  "key16": "VSDDxdWK3EgoE2jZNr43oPxSCfZNgF7twNSAVwiRsYj7qaiaLhpe9ChMWW28V46Vif4t1nMCUu9WWcojCW2nDfm",
  "key17": "3rY5HfNJtUiZU65XtsuabiX1Kzoq4hrCcJYqW2hHWEmncaF1cHa2qBW7sT1Avp14ezC5Ku2urnPqHdgks61SR2Y4",
  "key18": "4ez32v8pW5jsQvFCGS9pxQssDH9bFu4vrC7hGyNYeGSnJnTr1urVkAyxJ6xvsS7r88iWCvD4p2ufqFhkCvmMpueK",
  "key19": "4o2KCe4tFTFQAReX6kBShRywe2ng97btz4Hq9KvYCNHNGdeG2Rs2GHvUTRqVAEZ4Wcj9Y7TKUPa96K4yeza2maVQ",
  "key20": "H3PxDS1SFofvbeXZ4ZUQghqUVHDhY5UeAHzXCnztr1nhfHavpfoKLMLuQdLLHaW5jga1W26PfruKbZAws9r16mc",
  "key21": "QpYRVqGebV7ZPPUV1DjVTMzAeF8JmUVew3F7H8xwbsaRuBHJRsX8n65LMe9khigKVNG7tXyxd9FZ3ZSMqS6x2EX",
  "key22": "4A8RhAm9ZA9kH1ziQp1su2ZUpUdzVDxQG8g4fZKLiHghQa3o4rMEVaKeErysp6VNEdjVMnkT8Z3hYtLSQUYQhN1x",
  "key23": "5SpSDrkZPNzEGn51FnD52sfyibzEJ5ZPMkYpefRNqxAf9d1yP43YiV9k21vqSZSeMQTVHBZBQ2bXdDqZnHqhNdoZ",
  "key24": "3vrcLD1gDJGvXrCGMqqHJQtJ62rKJUj9XSk8L49CV56AHmeXeMYoHqgZeZuNCyWNDoYbEur5rgn2YVpzqjGpYxvQ",
  "key25": "5SNN5uUWZGue5FVb4wRr3LtZmHwPwfC7jtdyf2DDHMt4yphFnYLuFhqT7inn651odMmNLQv4i1CtXY7LxxVcziET",
  "key26": "5x1e96Uh4jA9FwT3M2ftKX4MfQyRkHNi6Sj4uzaCackfD2e8WCBS1EggkkT7UFuqSpgi5KB8K1ReNrsuEoY9sDMk",
  "key27": "bNWLA8LjJgroQV1i5P349Jhuwrwf1bGjfueM6kkZvLZ1eWbnHVbM63SVRZP9JQM4YcPaToEqonzTSXZQXdT39dU",
  "key28": "4ep7G6tdjTRbEzopEZxc9WaEBaBEQymdy74fvZpdQUDtWCojPeUfakahCo8Xw6vJc6RswcTd22ewFDPAjbTa2xvv",
  "key29": "5arhmP8D7ivpJt8tzMhM5Z7k8a7Gr13oTXAJAeSDUQq9a1WmetgL4BoSJaYP9gjBpcxqdrsGnbBVmL2wFvXYWZmL",
  "key30": "46bTtVHdsAd6rxwQ2F8rpWF94f8CzNZLsbUMNAg6FrPuHWJLv5cAhVeNV9JRpsgf5SXTsjepxqQpWuUewhNFnFZo",
  "key31": "W5g48ovPfAo6buC4yVvKD9v5DKDSkPjxH1UvWxhQU6JGHqT2MVEEHNByZLWjc1LzBLaHxszPmDY5AnmT3YkpAVL",
  "key32": "J33Cj125UPdRAeibZtrM7fdziALgqzn7myMgbQsGLTuFkvAJjbmhtrx96Ymn44G3NTsHYy956JgvjF8g4c1YyRc",
  "key33": "4Wq8cw25TesrG2n2jLMitHWvUkX4Jz2FZAMG3K2Z581ggfEFz5WssAdyfMZ81M8Z2TvHrMsf7MUCMgtH1GVjXzER",
  "key34": "5iy9CeSPsognTMY3rQ5S5dn6k1jDTvVUiSzcM9am1V5khX1m8mL2tfpRSy3NgAvk1bSMsTBYmLuX3igWvGpcpAVH",
  "key35": "41dsPFa7QjUJRtowPgi7qKQeS7DGdqkPEPZktGPdEuvZkDYdDTa9n5Mxm7A7J6HsjgAgkapBWjxjgqVmPciE7ifn",
  "key36": "3WFFmyL16VFu2ZxDg2A438LaoR41w86L1VgabP2XNk7g9xrWEhJynZ31rx71Nh4Z6m6hVc7dai6n27b57qMHRq73",
  "key37": "3QYtuTpQzwFp7KfcCsPkQZE22N1j7AR674dz7Tifi1Z6bmx8n5pCy59tJUgu7vdsoXg4YHCw42xfCmhAeZdTzn5y"
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
