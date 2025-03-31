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
    "fYCn7XoS8qxdiW27mQixPcMTdC5Rf5hw5iPiEXvxsRwaodVomrdj1xtmSFixXKfdCwDojbc5v6dZPHMD8WU4esu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38YjYsbgEQk6LGZ78ocLSAE54zs68enBfG6wgmGFAWCXsf4PfHVzTeZZm6qBQrgX2snxKduSnJCfCnK1MMd8eKrF",
  "key1": "39aNcP5FUsAJENRXwq2aX2V3GaF8Ldg4vhTypHYdzCW3L9cYhBJXVqq7x6Wz4myo4z1Wh6dcVskeSmfy7pievBUP",
  "key2": "5QnTMH6pwkHMhGJL3YEgKvxwStyVTep53hj7DpRhKPDrW7yeSo7YZ8XH4eFNHi78ekqhGuNm4Q1RBBWaSrxi2qff",
  "key3": "5vJUVwyKEysYZqB6tSXwzd98af1wnSiqhLtGTCVkw44y3kQdQ3BtaK11ddoiZaVWUkUkQrHfPhGWsh3iE9fCawNY",
  "key4": "3GLqbqBTWdpkhgLBFe7SdioesHHCpQ3vr4c2opuyFFCyU5DAppup5NWFeCj47MA24YKhxJVVHrkVDmdSnb6dKcrU",
  "key5": "5p4C3UGz54focz5soR43M8YaQ75nGKMtfecgecJhuuWPEEA3ecuNvyMVYFArSzaxD2fJH3Va38aZ8UPMn4rXCQU5",
  "key6": "5kdfPEYceeGcVo9PariVfCv6CyuVTD61nG6r6o4Msxxy3PKwxaDSk39TxM1TDkEtyT1picsCcbmn31rMe6cMZaxJ",
  "key7": "2n2xM1esd1r5oPzqbuLjrVjJ5GNgE4Y7gPhvRZ2uFLT2TqSLosuRJ5do8ennQom5kY7pN1kueRdY4rVsyAQMA1zm",
  "key8": "4GUD1Hd1zYunrSYuXAMXfhmqgK7VcZ54cP6NmQynxfkj3dWN64Vno7CC9zgJSqCamZRHkarf4exUzTXuJ6VBtcfJ",
  "key9": "487f2A2912YRVDE7kk1NPubwjcgtF2Q36RHvCNWrpoKPFEagdQ9bkutDpCb5PWZsoiFwrr4rND6R6aBJCoibVqqN",
  "key10": "5f9vqyxw59kvDcgerjpsZ9h5WtBgWTThwnfqGwBYgBNR9ZCWWEtwViN2wU8fpYivqnmazTJMLnJupD7AKQDxGYbx",
  "key11": "4oRz3uBryVG5dY9ndN3sau7Jvz6CmBct2wTquzdLLJhKWwU4XEHNzuujQS9VYk3pTv1dQy3Zm84GJ2UomwDcfP35",
  "key12": "4bPrrHLckuVQyPnVFWNBNUr8Jdz5F7t58G8UWnEdNY5ZUF4YC1QmkMXBzB6Yg83Zdef7JbMmEurmeGcwM8d3GfRZ",
  "key13": "5F6ksxj2jNNobmDKLko9PMLLtZz8Guu9EEZM1VcsNY9sNw5chM6uPVwKS5195CS2moaLqG7HTcgiyiaA5cYA2MuN",
  "key14": "5dBtrYMLo2B9R8z1YZRmezVDDaKz58DCbw8eYMco2yzg8uWeYiKnnBYVt3XQwnJeZ41Z17Pvdb19gpoumx5M4Te3",
  "key15": "3nZJhXXhqsAZdujwuduZhDqCqcCYd4eHmn6miRnCb35xW3Luj9AjzxDL24kswEjP8SNRAdtTiG5v5sFExgApzSBs",
  "key16": "3jtJraCwejvCzU5U6TM9jNubkdMrcLtvohzb4NS9RGeBBhQkmt9Sx7eFMFmsSLQma7PoG8eFUobAzc7mHEFS1UUg",
  "key17": "4zpYSrfEVgqiKutyBHrcotECmE5zLVgBQ1HecKzMZqR6sL5jXzjy3GoU7MwSH5vgqKypbT5127Dh5mNHm2EcVdPY",
  "key18": "Ds4jPkr4r3ZGiX17SakZsJBg89Ma4bBnP95RdQpBvyEyYVtk31vZvkBWGM4N8QMLDVBud78siJBeoUPX5vSRfhd",
  "key19": "5AXaksdYF6YSpwSxj46haXLLLU4jnZ8HG5owCUnPSEUxPN6ewEEHMrGn96BEAFcPnKG8Rzo8WEve3rHtQBJB5wTK",
  "key20": "4oJ77b5qDhzNVbKGH1sC7wBLxDggdfJZCBc5Zt8D4iRDS1SPqT8qPqVy4V92hp7Cb7PB1uixqhpGCwtPPFkLaNhm",
  "key21": "18BeZMYbSBiZZZFjqkTord6TE2NNnWpfFhXafkjiK8Zid4QhHzWEiwLrugqYwCBoQKJzLmpA5SpQQ5fzqrDnawV",
  "key22": "2DFQZQXRCBm9PbQX8khuAp89T4DgctZDonFK5SXyjRRdm54R1xwzD8T9rnZTfizdLupSkhn9SKFei2WxCw3fCLNJ",
  "key23": "3QiNcmzSW1yLEvPTctw448txaypcCkhMfDnHZw1cKZ6NEybC7ZmmCYroZTH7ex5bRG2pQ22mT67vkejLaiLUrrAT",
  "key24": "2e5VsmJfFH8BnSdFaM82mYokCm6r34caDLBPbSrqhASiRwkvGYmAGMhz6yV6MFEZmRxSeh5K5s5VfRNdDt2C7Yd5",
  "key25": "2k7tPDmXfZQ39pAysYRjzVHBn4sfbXqPUQ5PxZd3bZDyFAinn6Bhtzycx3x3fchzDLrALxHtKUNrL1R8KT7oomdF",
  "key26": "4iWG2rhbLWkv32GE7JZ5nvsU4bk3s6RQH93EKNtJ3c4a5cZahXA7zzeW9Wyj2cHMQP8MaqcGbmbVqy7UBwES1Eta",
  "key27": "4HM63Mgioc3jxJiZ9rgzZbL7t7Ymajt9axkhcVnhouEQrpWsUpsUJntcDRvsUifGXohGoHq6g1eTWnbF7CjkS6yf"
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
