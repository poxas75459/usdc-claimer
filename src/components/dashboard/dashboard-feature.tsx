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
    "vB3i9uoGQmCGsVfotAQWK388pe7xBNUvYzcNkEF26BkmdFwiZQurxwHW3gnwPypwkk9FnPqrRUKpSUrmVwartEu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rYjm1fRZGpk8g2DdurGGkUNazK7W4csMH1ybkJJBL1BcxvrT1uzFPVByXG4NbHpXx8ufuU42RJe8cyVSqD3qTvh",
  "key1": "2Bi8ZdzcCyF4iLBRVKfJ9obC58mSufV7ime6tgxfyV2Qy8Pwri3ta5n6SpmC7g814fQ8Wo2mTk3gBkCphkdMFV2E",
  "key2": "pWKVRoSJ45nTt3XmeCdQtQohbZELkShjCsFRNynEaiWFB9BxdRabwLaJd9vZw6U5X3hDcphoNDMpBS81BehqmP8",
  "key3": "2u8E8exMWNekTArppHQNWbNYpbwi2gWsxZBwAEYPVXZRPpQPhRrhjmVxR1Mkbf57Y22ggM7R7JpXuUd8FEvN4gqM",
  "key4": "5VwMS1nCtwayCYk1WJ8xp9c9TZd424SUSSXUTz6PSA1kVpvWrDw6pzSBe5b5MaHRzV8H2si4ioyDvqfKhU1CgKeL",
  "key5": "3ZjjH1RBcHqsuhzdhUuUAaoLriJgojKJpxrraxS4qvBqd82g4vSfZETrd4HVowypgGPgkKF5L4dr2zSAZrgN7oEu",
  "key6": "5TB5Gx1Lu1eNj9tBghg479U7uh394DxRKNtLSR5b2pQiUqrGibFdorwccGfke6h7fqAFZFEK3bf5NTFkmxqM1Mj9",
  "key7": "4czbQr5UMZn5ZtF3Zh2ABYJVQ1oueEENRN4ZKUnRL4Kha28bRfQr9L336N5iSoSY3j1sGvCtCmaeBps2d5jWoC5d",
  "key8": "2uW5k98tGQ4MQvF7MVjV6RFJ27cw7SWf3e4TiQ8v9N4GKZzRm5tsLHrZf85UovDuNjRHfp1KP9hWgNYVCA3bUyia",
  "key9": "4Ro21QSYdoNynw7xvKeCefoQAsQacLh1RPsS5H67iWKHBtMQKTVVs8MdNssAi6jvtEXmvbZfRRTHukp5P17GC4C",
  "key10": "2bvqccSh31U8B6JTYcR2jPa8yT2m6Y5257hY6LN1tKSPNtrc2Vru9S7nQzLCBcVCQYFVXdPjgJPtsSdw4HA3G6Y7",
  "key11": "3LNoX7Y5G9ujMrpJhSbn5wH8qKuovLmy7gRYter4skz8iGrbGXxfkG7DGEiaW4ha1Tox9yFW8j5Uph2UmW1f84DV",
  "key12": "393b69UwPHxNmi9TEvgBuXUeyqKrPpdSEaAK1ZYFzeevA8JqihhjFHxH6wgfw31hMbSWxBF7ypXkMnmuDuVCR32f",
  "key13": "mRPH9sYG6wTQ5qi5zWD6bh7gqsCs2yns4vpHCRXn8PQwysoZHvDVgLtA8eu5MxN8z8bknLAaYhhDWxn2bEq8WBE",
  "key14": "2sEwGvSzQUdwfxmhZD4YDqU43Noj32WWS3dYNpFSajPVr4EmisPiNXt1qg5LbkXmoZJzYu6WRmYNK5UjMVHQtfgC",
  "key15": "3JibyHfh16iY7Hoz35ZYb2ZxwWcQR8NEev6Tj8sZXiXkf7nwsLxMvWFg1Z7dkHYqQofvV9o1XbAmHfkyN6QaU7uh",
  "key16": "5JUwaEwcv74VHgUxUCURB6Hmehch2NRGcPytN8YTVXWNYS9QPUghKziqeuBpUtbDZjVVdeu7HWDCm2o5Ch9zrpT4",
  "key17": "5r1xZ8UYx2sYtR9RGdAHuNmHhi9e5LRUCrRjkCY4QbpKbgbKR3dnCbwiqZ5u6DSdDU734mK2p5DSP4sEAXytbT83",
  "key18": "5nkHJxKekEbpgqbCupPwj98dUAEPacnmaCbXbDZHBoq7UgNs9k1orYKYRxqgpXFZMV7idoUnB3pWQ7de4HDxZar1",
  "key19": "4K8gS1uY21VxFPw5Ke4KPNLjag8EgpzLvydak6JER6PCt8xmxFE6GvMsWXncaEfEoq5y85f9P7gKbMuDqg1GLrdu",
  "key20": "3o8gkkp5fsjuaAqxxVTmDa9wAGcxvmRU385Gb4pWoWfuoqbU2NmmaBuxDi3nxmWt7fpd5MNyGE29Frw2vwGb95wq",
  "key21": "4i5jZkHXFdH4mUhdmMNMdjchzTazTrUkNmW3U4d2BwDNKJCKUe13kZAH3v6FASGKkH7vSmEeNjTvqspd5hZtNRcf",
  "key22": "43KpkNoLcn2hucR1No2gB2eNjP4qJep5UV4D7pZp951iGGNckKrVYU8NVocboXSACd7jszRaMEu2UCW1jo6t5KKj",
  "key23": "iXRuXyi88vXFqu8UdoNkH4DLiZt3y1rxQD3LoZrmn4HVRMkewmTSjg9XuJs2DrpouW73UYQRdRgG22C2asZFrxk",
  "key24": "3Bo21a23mWwkPb3pfmZMXKWhea7VkuQEjxgX6jcFkooa4rZdoE8d4zEYvfmboWqP5GKzELnwGy3b3butBXAXuqTD",
  "key25": "2f1KLKBmray1jV47whMNCoJm18AhTUhmzuhRf5RTpKJac9kXdwXEDRyqcojhufnhaLA5cgDCAxcjXbesZXVEQ2WF",
  "key26": "u4KTmdaRRgALXA23u19a9tRb6jLY5Hbb82CTPYrqfnpLZYko1EX5TkKi7PSU1PZpb13Praq2AmcVxxqeA4n1pyT",
  "key27": "67KZfTfc18SBHuiaiKP5Q8R2rDtXMV3KHa8k5VhnPLA4eaz3S9YbDgn9NX8fCTq7yr22DW4x4v18ULSWwuBWUbkQ",
  "key28": "4L3WFdZcit25tCYh333qwFqggRmkAENrS6G6oCW5jyM5pXgvTwaqyU5UHqwsNdtcMC138F4uYnVGbH1WAziaEWTJ",
  "key29": "5svBB3ySPB3jia58qCitnCErRKCaEFuc8vn6r7xz1T1FRJX6BLaC9NVyhAuimAX6HvFZ5f7kDR8n4NcRAx2xZgDE",
  "key30": "28tx6wnZWZq3fbybLpQPzUpTEb1VygYRcPUUnmFdUZinnxiaTjteS84CsD5hdB5pQbSAmD73XjB227CiudjN5G7f",
  "key31": "hyPnQTtRQKyc83tz9ctfsHEgLPueMazxMrtiBTLzwnByqkF4Gohvh7Hade4TCK1euN1obkSd3TqAXa3R3Vewtpb",
  "key32": "ksexwtn4Sh5SzyFb2snaNrRE2yqu2s1yaWmnHryDrCrhduFzshyuYrMnPMExC56VaWr6r6AEnGD6vgSn3RKajZq",
  "key33": "5gTMxakYvdJB4i18RmFNQKGvmxgya3XK19iBMSwQpo7f7Qgeq24shd2T49iTzo5VCdK2y4GDsDNPWAdFeyX9xu2p",
  "key34": "2voAvv7iGxQ8gmoiLzCJ6XYYM55d6RKdRgefNmTbZQLvkk7AQWuTk1vDmDV8wYEqfcuLhH6MwxQo4vFrtW7f2jMM",
  "key35": "5rcDVR5M93ScUnP5MLkoRBdbudV2bdX7jLrjnPvzm8kwZRTSsqftF4rZQPsGk49Q2yoSZxx8bTK2tXjCju4bLAaN",
  "key36": "nvp5EXXnvqcWrhFPRxN8hcv7x3WAokE8uGGNiKnYqNJCQ4MMZFWpfXmmRqZ5NMhLQoHL26uB5fowteEreDtv2fj",
  "key37": "2fzvZ3egUbYfMqPyJtfvZWrXLY35LM4bJ2coCZ3ZHUNkyTDqqLzv84UkJ28AGWuEjTGaDdsWUbeBRV5B1qnA576L",
  "key38": "42B9z1qQpbLU3CMC4aTDqixJ5JKk33rNc8Ro4fLVgyXoWvuHghEgzdmP2exLyzc1Vyu8ByfFeqiiWWXtvaZBSe8",
  "key39": "4ZX5QFS8nZqncCMx8MgeV8ugfdMyeufzFM2DSkvLxR4xM7V7A6DiDPf3HztCSXj1owmiB5NKLSvZZ8BFcuCGpk3Q",
  "key40": "2PeX6sJy3viurKyM5gDKFfGjHBgCi6JrP1ikCmrqnbhrVk1JNWnkjeEbKJ4Q7V6QgiabKBDg1L7q5ZWSvisRUZd8",
  "key41": "4FmzWiAP3QzCaNnavLk4VS8AE3stHqkwz1sJZfAncHBRL5NET9FxJ38nqpyEspu8V7qfrn6aebRC1rZ5S76cZPuK",
  "key42": "374cHmtPMywya6x7m8UGBsaFnSR1EH8VeCeZ6e9j3hSMtdoZ6nTSasrccL1MkUWZMfLk246pinkMJAM5DLdgKtu9",
  "key43": "3aUNhhq8YCoQ9fkGJRhHD958zNE3kKobawsekKNQcx98KYuwsk8nSzDj5nvftSWZM13VtiC4y4acyzvr1xh2BGpx",
  "key44": "3cniSs868YHAfK61NYF7CHWsyUmEPtygp8B5bMbNLsnKSL57UDvNEy3L1yn4SWceqiWPNJSMqF4CNkQRNaxp7u6R",
  "key45": "4xv8oiqpsr1Ych7KjvCbbvuypVigzMrUuAZLiG9k2mejPwRzbehNUtApViUmtvc3QqhSuoMmaSDoUQLFaMcHmr2j",
  "key46": "28VL19ckfonvf2WFT18ULQT6Pg4bzHTr9aLzKXANp83FAn5eS4g1oMcYgE679DKkdv3nmTXE7P4KzvKg9sc1gHQE",
  "key47": "28xSjiz1bTpEe6ub3rp75DxixXUk3vxYi6BECv9jK3i3mkHJGXFoF5tNGk9661rFjPyCHZWrTLU4pStYSWngvWNu"
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
