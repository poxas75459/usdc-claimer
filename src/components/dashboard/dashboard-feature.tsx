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
    "2bKnhdzM1mK2SBfVHzcU4rsWbEmcZ9vaU5y8MEiqKT31jDzZi1Z38A7zdXbJZpTBTF8xpfKxG7tpEMGdDVoHPy65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3296YGhP4ySaZvnmsfNCqXjwyxcjQn9Ju5UFneBy5ZdWKv1gFYAwM19P2HckwscfQ1CMLtsnYYttYsoVwQEosoMH",
  "key1": "dmCkbgJKYrvjnki6mL7bd8XEVqf4wDETE2Dc8SWU7X1VGsEidzNqhbksYhHfcC8NTM8KKkJq7xC82ZZVCvrCA6f",
  "key2": "2tNdsJYPvzo71WmigvdgfZpuSAd4U9oFEXZ165xXtBs69fUNiWuewmqvqvSo9cWpm1CZWtCBThpoBQx2FYzhWhfr",
  "key3": "4Pj3jL4MoKysfPxGbLJJhGptcKuKyoGCDt3oWxqE7SRTZzve4W7quJM5WqNjHitv8VLL6ZKH3ZWPkZv5QtnDMMQb",
  "key4": "4RHCY6orMHuyuyZyfT2XVrr4ScZhDfSCysjGCizMrv1DY3u6NuthyvJydnMRMckzG4VkzfSBvxSjyijDkaMXFRbE",
  "key5": "36PY4eGxSkrPvJy9QaAgPa2qFJ94oAshtc3nbHkc6keze5E3ELTy6p87g8jEZ463GcdfRXdQtpeVDDW8BtKNztBt",
  "key6": "zV7n2yFXXDuGti9G7XpKDkdq3RTppKEpeV7zCe3n9kbN7qW3Lku5V82J2BBFETFYKXEicuGfuFeVh72JibeeXHq",
  "key7": "3YfgM7seNeGmofcnbrs8AoiLkob7VYvePPn1dpnHaMLWVNxJXQCXhaVY91ay62jMWVeNPFNnxmdmzShusPUhQ9ZJ",
  "key8": "34qELmQcW8m7LXrJ76fzuufLtxwrzd95Aec1f8yiuPzu2Z7xaWi7wuonx9T2jE16Hg6ZTnXA8QTu5ASuWrPBcT1g",
  "key9": "4EUBiCoZCGRJk8wNMpkjZw79eDWHB59TFVcnuC9RNucsLaAN3t8rpwmKVq223ZHG8QUF4WY7jcKNU7AxC9qjaynU",
  "key10": "3R8nuUm7LTsYh9KicUbLLm81g19EpKRzhAWZLS1i2feZDvSkZ16Ls2ZgvBURGLpSWsYy4hfr874uSenALQ56S1gb",
  "key11": "3B7oX5nkCiPYQSAs82wkPUhnWYsyeWsUTJUwCZ6WavMoivPZ3H6f4Vwe1Hsj7xbJ8foNc3bNUqu7SPbjYFfcWKp6",
  "key12": "4KG7yBvCMdktgiHainiR5dVVnZz7t8cNauEGhWBPxdTohu4UsTyr3mJ3UEFhN81z4KsPYU5TLo1TuVMqNYgTWEbn",
  "key13": "Nk2X1MfHUTDC3DyjKAxgSsxjrXLd4ZHe3uinnmNjZ5GuzaHWeSDE4Z4ZYArvNivuSqpugM5ySSvJrY1ABFDhLt6",
  "key14": "3gukcPRhWvmEavht2Cdy17FUVYAZhYRdFJuomgs7vZmGuMZPCCM2hshzNbpdce7HfLNH1bmTT7NAwKt1XF9AiwhM",
  "key15": "4C39DvrjQHYJkW8dfRvSMn8pZqpnRXPMcr1xK8M2f1oBVAJkhJaBfJyUmwWeewm3H7wxKidV5jCBZ6WE9gBQrPcb",
  "key16": "2sbPdyLFd1YnzWWCLiCDdzDjENqTWDGsLaS7x6Bbt9oxyR6vdELZbJRbUx6b9gds5pg7DhVakjVuwmGztotZcJmM",
  "key17": "oURRmtkWGPVtsS6M3UwQz77rPDFRLqWs9EFqJBjZhAeuWyT1tSHqj1hjkZsss6UUpZDkNMK4coCmEsaRcwrgUT2",
  "key18": "4t7CmE8ZN2tWCkxKwEESV6mju24YfBQEnSZxr6WrHqmAhVXqoGojQigqgZXXwisTzJ3daTLWtHiGFbhPWStkCJa",
  "key19": "3hKyTBrtxuhyfTqb69x23cxrE5w4ajTJZQZgDLKob1v53MhpumLT5g7Kctn5UCcGKaxaDyVGXiihiFbESdNZp7GS",
  "key20": "5CHv9tFp3VJd54y9UnidCnRm8baWAW4uD6F9cFsMe6BDDP4eWwuDZqR1VaF3eP4kEQca8GL1jXeTQZv7fhn3cbqY",
  "key21": "3a8iLhZgDHah4a65RQmu5EQbAJPCkx8v63HiyzZ7NwtWvGD5DHaeqDFANLFbitBCCoHPpYtZBeCWPBehAHZTk4LN",
  "key22": "2XLCkJiX7xkzQeAVMA9sneEc34xocJR817iaKYCzHncPBo5uHij4DpMokoq9dP4cPHJYqENwBzTapTf5PMNVrg4R",
  "key23": "5cgXs5Qsv82LxpZDeVMkVuwoedHZb8JZjXbDULKzWwiFuBKYELK81vJVtYaPvTTpBQ9qGra7fVGPMHMCGMzP5kyN",
  "key24": "5JrsyFtZJXJDhTe1Xm8ELHi93DDThXFXMoxxqbb918ggcrWX2T7tVjG9tjJs39bsgZT1jT349DN39jSzTBzb9fv3",
  "key25": "ZhkEp8sG5ZbzH9JwAG9D74QJaMLZVRPYqJcMDz53opE9xrVoUzmVAJHMWDP4YYeKZCFm28hjebUVCcEJk6NcsQt",
  "key26": "Jh97m4X6r16giumk8fhV3YtcpaacgbXnZxA1F1Dc5i57bzKcQnc7Ui8DVse9xURLiXwzJXAfZRtL5dafxMkRmjz",
  "key27": "3KiHRy76uy9m8BevXtT6VK3uBEst3U8V9ngtdPbLKrWB2ECLU332hypDEgCp8kKucMpRbr11vAqbk5siMAsKYtMC",
  "key28": "57Cg2ekP4dEivBDAunmLrLFpCtWQ2mvHRPYqaMKBbHJWzSHWZKAquXex2xZNs3JPmEnus4dkwv5PdKqAAqxdB9JJ",
  "key29": "4mLajtJpMhT9RBveH5Vc9GzzHYzCafrSZAi1wf3AUiN4v5e1KPWigrQD3P7hKjT9yu6VWL1XRKirfzwAYVKLTXMY"
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
