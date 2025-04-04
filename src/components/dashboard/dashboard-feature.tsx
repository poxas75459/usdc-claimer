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
    "4UE7U6kZtC6t44E25Xc8JeYseUFVD2hJdhcacVgLqZupByU2WAUrXAghFfXph8osJR1LeKfuzmZm9ab81pjwfKdh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ikWHkDrosnXMtanVFvjhwBAVJhLRvB1Hkn8U72AiKZ8jiLvob1poEM3HgkPYAVbaKXUt478G2YocyBoryqwsbFL",
  "key1": "5CiS5hwobu3pxWcuhBWjMThavjfjAJZhyLVoFcCfivF7HFWFtp56drXKz9zPSAG284DT3pzndWjGkfXMbtYnixWA",
  "key2": "3s4mrHvmzAVqvwcXccJrKQfg69bqX6ba7t9VTKhuqkZG4wJ2eo1pxiY6r7MTRJzyyzkvSt5XpYRTXey5A57D5GUA",
  "key3": "5Eqm6sXrTMvKTGk9JmLoGRruSZW9Ndu4Nq968s8z4etHi6uJneJaw3XhMgwiyDt8dAMFJCt2y1iBpVkSKKvmUGwj",
  "key4": "4ss8rMsvKZfwggw8DRBPYz4k3YPxf4rBx8eZKqDqXVGvcYSvhtRx179ydxaHoqNGrgHqQjViqg12u4D7ZTLhB2aa",
  "key5": "2CjhiMR7Z7LE8qiisYcL1iWcsvsLZjTUzeFvfQb3u4bXLSdz2JnRa4cnxstzRBMDV7L8bTxGviVj7nvwuB1LgFFT",
  "key6": "4uqGXY1spS3PeBTq4fEpgKeZzRoYkK7hwj39o26yYo5bKZiQei1z2PvEh665NRuRjBjKMCPvjNc7TssK9p2Z6VBr",
  "key7": "4DrfB29SPBRXs7LKNkezyACuDPvJAb6fvVSkGUmEfwHa7rjMLtCbC97dxngNsxKr3GucC2C2pxzSHgYqxg1fBYpF",
  "key8": "46XBpEwFPGAGQRSiuFhX5tvHtL9d2kajkzSCKUHGUiSPHkdLHcnyZ7YJgU45fNHYWrH7pSc2qz8gUGcfrhp213wq",
  "key9": "3yGjaxbue7MmCJE5fTNC5A1Ye4UmaP4jBm13Nvdt64u4o42yaaK9h8tYDznUYTWbDxRiDChjRAKaAMkok3GKg8Dw",
  "key10": "5rL5fv5PfYP71zbbak24NhvkVvhp57bHThbjgHf7qBLtUBXFEneNToFQHzEFKQpbp18tMDjvV9NCm9TQ5LZ7wY7d",
  "key11": "3zmQgAEVvsB8jz61ZhLj5SPAQR4qoC2dTdsbEsCuvgUhxKSfyWJG29Ws9NEDcnzwucu6pyj4XukjM7RyBLBpWqxi",
  "key12": "2kmLgMGLGRpRdDz1so3ZtC82QwcBse3un3TZgWkLPpK6b6wFxYxx3hwy6Vcv14qt1Jcs1HvpMmEa7taKQ7ijh7rC",
  "key13": "EoiEjrz8bHgfFWsc7b45iBPXu1818WLcRmdgWbpd7b1X5YY54FQNTpTqe83fC5R8YJeemqtWNNXixdbzqFY93tV",
  "key14": "47qzYi3yqrq4g5fsfUEoZZc9JQrBdXxDDrbBjr1ssULb4oZ5UnzFLnmFsMgQNAGWLKNpdu7nY28ZzcK7K6vsZRhG",
  "key15": "3WXccjiWxNScUQ13qGZc5BXmFa2mMYejLVsAX2AWy9KM7dQi3ZGMV3ay1mHfgN4HiJ7JLVDLTprKGoBMPiwADAgS",
  "key16": "2VxHicigYKPkr2X3ZSDtX2s4ZsTsZpKr5cgnVorcWwx4yB75rfDX4EDbstNcCpUeQb8CtvfRuFHu9P5DbuzjxL5V",
  "key17": "2A8YWhvVT9cK5Nmr7jpkuK3VnQ1CinV3n86Q5v4jqeuA5MhRfSd2vdTxgT3DED24ciHXem3YoP4dUY3pLR2beQeE",
  "key18": "4dPKt96Zz1QZnihP6gqCexWRvpREbCfzYDRt4BTg6RdkRtosTJSQ4hVZ8M9S9fipbV3sLWC7bHaV7X8wPjLxghrw",
  "key19": "5k4vDR7h9w5TSogLhKd3ohnygCRWA7MxEJgveWhKqBC6CYftkpQeKSQC4aPirXVAvXxpjqG9NK3vjEJZBTBQAkDq",
  "key20": "3fsh1Ur8Sxvsj72pTPdRz3tSDCqyC9Fzjp9KjFiH9LRJF5Swd37Mu3WpU4jo9FN5rJakea6y6oxYmPt1Q3mAprUY",
  "key21": "Lc33RkuT77Nw7C1YLum4oLEx6Lb5fWLtZE4Um3FVkqkV1ujxZeHZixwg8wFaT3V6u4mpBcjkqSoRRzKAQHEG574",
  "key22": "5kbGKLBknb7p9GoNhGc4qiAjeFV2ddEcSaPB2U4rjhsaqSG5sNsvmze77VeKqJf953XCZwW9v8CxRv4qn3iUnYUa",
  "key23": "3cCxMojEnZCGeGjWXG8BQCDb2JsBmihDuFHPrgeE1mjkLQvERq3sdYBf94aKLkcFHvW7By9ATADArzeeBkMKkC2a",
  "key24": "5xiqxmMWc5TXF6p17RXh4uVTBawgrQXGMoXcUppzfBafkb2f1heEmN5k6EUnEXvxQG1Wukd5iCyG7T6R3ZbSLRjA",
  "key25": "5um2htuGbV7G1WfWDetsHePHp8bdKZnNDHnMuoWbiymytJ8u68AYR4snsTsinWoaWqCboLghGdnCPc1x27Suz6Xe",
  "key26": "2pMgFNkvrpfPm2BKd1NB9uj5LvCNYK4Pkk87wfxmzYkv7pFXAUwWvkqSLyzaLpDUAJ24fHwugx6X5wK2obUoZCXu",
  "key27": "4KwHnBmioisZvkVjq9wj9ANMcNRmmXxdWD1K84k484CG1LiJBgqWLxWjDC9BBwgQS3io74uqVeJmpgFdfzosHoai",
  "key28": "eH2DAaHSwFkyxGsru6YRk384FDyCGg2Qij2zoNcLuCKk5BDt37qo5PjCeVxp9pbMrAKRUJ7ZUpYdtZHR2Ca7o2j",
  "key29": "4Prs7SAyyFzg4tB1orfBZhSQ3jkKkwu89yLnrGRV1xJLZM9nNei2LyWogxm9SaJ8SzhNSNx39tDzRQqisEZThmxf",
  "key30": "vbo1SmNmpgP4uwqy7ptse73mscSrhpjtjjACks1aKK3caJ6ZvLCBcYnn8XDiq1i3NVb87iq95Rn28R8icNzuwYG",
  "key31": "27GQRQKbnxY4D9Y6CCYxAUnWZzmX7Uz2bhe3X77gLWddQe3eKeVNvgXFeu7F4EVJUwnPZiYryNEsei72Twa1kTPh",
  "key32": "4baY7v5YKTpP9GcUei1iCim5kyrFKXVcyQu3kNWrQKbFZ1YxGnVzaNgNR43q1HuusajoGajP5qtQBHMG7LTKLi9w",
  "key33": "34GmgdzRmW4FAYhQ7N2tY4jSY8k5yTo9gcWyGfMQacHmz9QX6wsoRApJDs4BDEVmUSekxj514ZMTzpAf6MJwUiPc",
  "key34": "3kcg1agzFuP8DC9keCJhXVBpU1oSxKBwXYBVqYXHMFi23QqWv9KNmXC5M8DGQrMypjCZQUjpDjUUX47V5Ekur3wk",
  "key35": "2d4reFkqt4Vbm5Uyh6ibzqDwxPK7WrUrjTf4zqbrA3Y1FkrFdETRTZ7Z2Xi8j41aWsXD6BQZt62Xy989iLZBPuH3",
  "key36": "67bY3Z2r1RfZAyVTCTVA6ZJ6n8GXs9xSkEd1ouLjhFTxW8Z2sb5vWSrG6zhLfrCMmGwu5qAeK19ydQ3TDEgc69AH",
  "key37": "3sxmgmNnnDdG5JxSEmqzFtAWaMsMz2L9gcbKk144QFtecwz24rwTSiYYEw278dKWJBBj9RvKWcA4qV22ThvDCCTq",
  "key38": "3Ruu1pk4YuVuoy9nbSjiGRiCReCwU4uUpehSHpUkmAh7debtdsWBq1Biu4GtwBr9Npv25dUpx3wtbvNwUWxjzbCv",
  "key39": "5Bfu7sKwrQSNuMmaxaX2F2ndspgWGvhwcQ2TAGCGAcHRJLXawuk9WT5Zuyfqo7uJrTuatLetWL5HGTpsL2oGQ4xG",
  "key40": "4NERrLQS2ULUzU4Hs2p6Hfcqpj6BBGF81dxGHHP6BrpKyNVSTrpJtcxqyz4JXu8pzYhewaW4rinzhMQQm7K1MRDX",
  "key41": "22NTQiEXQ3KWcNuczSiZFgMctCbP1u8zJGtp4TFviFpPkEhcMCxonMKndiKHErpu6pJE9HQtiuoJq7SMcmezzGWp",
  "key42": "4QmEYZXfgca9FTc3pJ1nMfjVSiaeXGAEvcxuLcmktZnp2VKZcJXNvkzhGJehxtLqbF3HuWkaDW3atWXmt8tehj58",
  "key43": "5earvpNwtHHpoN9RQDaG9CXP1GnW2BbUvxnznrzQfRvFTCWh9x2WvHqedUg2oBUBQFnoPxao4dUHTraqpWFB8jVd",
  "key44": "465kiA4NwumwPWnbxF61dwzdQo9WUPsBKLc7J4CDNvMGVLwCsQE46gEMFANf5imd7rUxRqaoejT6SAdccs8v4iSW",
  "key45": "4BK8UHizn1Retc6F6En5zRx3hvPMb3QdESwvJboVvyskBfcDeC8cpEtETvy9qtVWksgu5mCnZQajX7ouWbRXc9sN",
  "key46": "5rwFopANL2fvKCKkvqjtK9fdee9qHEGVH6ZbAcg5wLCLXFdRFPQCCmSuXoHDvFVZw4B6YC6jJy9DYS7qX66ZU8Mh"
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
