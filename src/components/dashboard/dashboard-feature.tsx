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
    "mSvto7i5DivmfWzkQaBxzMTRwkn7vRk18R1ncUijEdHgsjoCE4qYYUHQwkMuffJqgf2Cz2tRAP8vKycwtawHaPV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pGb2PkPDECw7csg2CUP5GQZxMU8H2BMVZ1NteH54DF6F5U6sVGvKumcwLawhC9dNhQJsqgSRXgpsGj7wprTFC7A",
  "key1": "4cejUGSKeqBDjoT7dEdfKgSbrgNn3RE1kMjL1DST3gf9LH5b3t1nuYLXgcRFb95wDQjAJiL2We86fbHEdWWgRctE",
  "key2": "2nqJGEW9w5WdXmywAb45PsKXqz6oyPZaLqxbvX8qZkybLL2JdDVjcfwnjdJF2qSqpR7KnTJvwkxAkW1WSMbHbRQT",
  "key3": "51Li27v4mmHsGgB6LyHL5Xce3ewQ2T5SPFPen6SPp958BuE1fMjxgqiF5WQiuybbXg7ujVA1iJv1818yMK7MdA98",
  "key4": "3H47Lc9PeYwsAtvHuTEmWuHPVMeuifycDoUZfaQEkzKHkKqvfaqmH9M6oLyxPuxYsZ2RXnaKRvLNKVPiv4TPJfqe",
  "key5": "5sw72Fr5Agq2Uzve7vxKgtoMRhHY1nVMFZbesmLA2YCFWrWzZehsVL66wF7mhD1hNqWVDy9T8dZqwVoNvUUxMcmX",
  "key6": "21WHHY4kZKY61bmjPPD8MDYrQL4guo2NHBxDV6uqcts31hjqi5f47CTq96YFiwch4dVAQamZLjRvEUi999bt74Fa",
  "key7": "634JgB7euKWzMDA9PRZtYmRV9uqzsFbGLwxr4m92WWVf759XpRmoL9R86mnZTfLdxJpzwYE8vQHooE2cFqz1DbjS",
  "key8": "5iqn4U4N7t6yJ4Tgp1HdHCM5bcnpvUL7KUyKQbtKMjBbLy4T9SuXa7mxALrUaDskCFQn7PJNC8REKsNTNitqry3o",
  "key9": "4X6U2hvuRd6QsWKXnfhEy5oVvqg7cYarKyGfkpptU2Dfc75ZRjge4poym4rc9uRJSYaqhVnyUSW8DukSAV9Cz6sD",
  "key10": "L5b6jbhgq6twjPG32ekkh4cPRm72QRUYk88Mm6fNR7TcoD6Do5NdArcVVEwsZHyVst3DHDBFfg6q9BEVaZv2krq",
  "key11": "5eXU8r3nqUXngsjkAugYim17jE8VWw9X7byvY4vh7tyqc2MBngoZbo5kM3ePEDg33EAYkqirHaRqF8NNTv7saERj",
  "key12": "212TCVQ8Eoiz1SZDn8Qp4SmxdCVeLcR3B4ZFSqL8ZeYT9puuTmnJhtxzSTWTmJEt6fzRMGx7d1A3VrGvttdCQAaX",
  "key13": "4sXF1kXF2LxRQVTiMcESh6w9ZJjQpQt7NAhD32bMuBGDE7ckcbwG9SsPNMQAQBHEMbzygw2x5vF4dBHqiBrtDuwd",
  "key14": "tcg4aQUeqyMvs3SapfQnCKnpUULwNZFgipd1SrNimrTsjwYmUk49tn7E72Dnuun3JkWpSvTCvzYxWXMxeFimhJE",
  "key15": "4t9NtFCQSqpysxEHESPYGJpEQj7y8jnEBdwnWQ1mA17fFe7KG8odV77BNPxdoyqVbZKfLoAAYVEbfDvtnMSXjFbB",
  "key16": "45ifAbMcfgTEyqhweygCVdX4qcam4QT3difFQ2skvBDwrvDh77ZJ7SF8EFRLNf4oxaTyyaejZKtZ3zPY1kkAbwgf",
  "key17": "3dASL9GjjfwB9zYnEgTfkshbTbWpidYH1hMkXCx2koXgKjKwPhnw31Gz6GX1yuSKL77KfAL5ndVAa5DiQ5pzfhxn",
  "key18": "5VWe316CVeJWfMZkE74GJg3LS68w9pYQ2yLiTF1EsRrkf6wUbffBT7HZRGTkbLcsNj4Qy7pQ3zcAh6qT2a2k1cXr",
  "key19": "4uJHT4FfHhCKqxqq51WzmniMnC3J98eJbG2PR2CPSZk5gfREnom9aNjFwWd15w8KBDAmnZQ11o4Hcc3FSQjdvQ3P",
  "key20": "5CHrc1A2ite2wDqmcYKGk7awzFEAu69RshDVm1BLbMpfCVXNjtFkYoXJn5d7kBmPMiW7yaT6AmC3pCs5k6kvtuAW",
  "key21": "3vzbyAPsVKV6ynvY2gTLhkt2be53DoReuR1VNz2pjwZs1LcVB5XQ5tzLQks1c6qHMR72WHbhDKNNcigHJXJdCFqU",
  "key22": "3sJRx7TxBUG6THs36GWkaNLzps8xqeoLXpqVSKErWjXNHHRNpjXq1K8xe86zgpk1nwWTEWK6z1bYMU1Dd7xRXcTf",
  "key23": "3gL2B2kPm3w92K7s5XxYPUKADZdeKAZo7RapdhjfcpDYjmK47p1xTjeVgbfG3AXA8QjiRCZFraFoxfRhmttMxRcv",
  "key24": "2GCDizp88Qg9x5N7Zx44CfVztqESzgnQdUCoUqQJG9r4hz9e91rJVFwabWJGEtJXKce2tXieRTpXEJUt4qVTsAJN",
  "key25": "4pybiBt9vr5qmYNP5topi7oPWun9sVB468CYSYobUdvtxXFm8uzmx24PupJQb5fZ9JmZKVXRKHVPR21uY6vyfczk",
  "key26": "3UwyRafFn4oSpD1YUok98xpY4w2dsMJiJ9daTXg2KWD47nK1CmmBYtWdZqRt2zDJwY3F2Jtphkw9LWpzAioC1Fgu",
  "key27": "35qG7H5k7CdyDsxWkmaWi1yXWYdwuvq3N8rA5AfM5cA87Qpb4SWgSTUEPxMtidPsYVrdJV4xDBeV3ZpUKySgmGHL",
  "key28": "3MKDrWu9h6ep5LHNH6mT5uwe6UJ9xNTVTVAtgwPqGRJVrv5c7SMEBTaUaZApg9Yphq9duAfcszwzTeVTVB7tSDsS",
  "key29": "5bmiY8fumnvJpby6WMNrmmN2baWjZKzZZy5ieH3zCi8forgyQXP4MU6vBUoe1GuKrxRUpWRM1mVyDyNRE6fuG4uu",
  "key30": "65qMeMEybGokYtZSReD2RNhCHCszFGVTqKpyEL77emPyF8eBx3F4YJsLJNHoXr9SUxpu4cUa7MLZcmVLye3uGySk",
  "key31": "3gr2FXHSmF9CKMF7pAiaXaPmYLUSVSpC2FMsGzyhsxHwYtmCMYZnp4c9jcwrFYT1Pgfuf5oq4cLtYt6q3Kg9QaAU",
  "key32": "5Fb1KGvwprQryNZzJ2nWq6JwavTqBVAkEHimjS2arYNYJKHxDcekQn89BKaRkp1BKXpDkWxzbj4E5zDEBqve36wj",
  "key33": "4Qd3ixpoVAzFLKu4i5YMMR8QcY9EUpS3tVEXv7y4pnVUJAnuz8Gz4WQjZasBZXPSKr8rg78sgqDDzrw8w6wgBPL",
  "key34": "4RSrEKVPmkpjUAMDcCgBKbQ7Ni1FizqRT4GLs5eLGDxhL85eiQV6ChdMkNu4Pa2kxpXHa3f5o7gn5gPnjsVXkg4Z",
  "key35": "WaGn1ViN7PkkR3xcWB45nYUAWgmJfx2VViie6SAoaEbZaW5Kjnp5d52zUpJkSmxcjyW9DhezSVwGBqesyy3mcPC",
  "key36": "5smmqiJfNc7AufKr4RqKMjtSCydLtjEcA9Ax6Ye5L9hTT2NS7v9gVZWtiV5tx52W8KmW9YU5WCJRwYE5kSoJmHJh",
  "key37": "2DECkmdGxHsG3uRTUF3NRArMLSLsdmkvqyoU9oLRevuyC1tLtSNa43tQBDSeaU8jBBpmydLEAdmtCXrse4DVKx9F",
  "key38": "ezsKYVKiv5MEcnn1X2TZQLQ5r6GTcdqVY94gNPxd29bceogwUefySNKvnVrwkMZZWDTBT4vr3kenaas6BS5uQ3h",
  "key39": "5dipobnu77SKnSxCU3ouV9duYziq1J56VkyfKPp1ts3RFzcuycC6VGhNmxp36jaD7sBSv6sTZXbma7XM5YqX6w4G",
  "key40": "3tLAKrFkfW3rE3RvPbjts7QR6NBA3NqGgGpzkX3fVysAmGgXbFmb2ahsj7GcY6sqWRPAmo9tUJskXiiEXdFomafc",
  "key41": "iiqFr8RqCG5UyFx5STvKsw3E4kyvPosce7gY8MkBwhhEkowSkgXugLBLxcjsTtgRui3rhBjD1v5boCh92hzgDG5",
  "key42": "3m37MZKKxgLJgVoCsBBGzJ889iJKNsmyNixeCn6oR7b4tZzwNEzxvUNDob8JbyaHM1BUfiRLj5KLtYFLVNWtNvMw",
  "key43": "26Bebbiq1dyQNtWbi8S1BNgXkYN6TSYT3TdoptsmfDq49qVVi3t98PiBPdfaXKGsN5zdsENa7MyoCUH8WSkg7FZg"
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
