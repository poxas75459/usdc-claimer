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
    "4xJkqpU2GVSNyHXeepaDGqcExDCjpsgD9n3JcaRZL6GWAmYCPSin2G7aWLC7DuvzfnVRPVJxgFjRsmo3zd4QMio4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2He5seiWu4jaVtKjoggEQxKp4kc8AviFUSDjQkxxsx3vv1rTFvoEufH75AFxYNekqPMR9VwySsjqspVBXHTVqCZc",
  "key1": "4z41AvyQcpB65gEHHcgh6e2PkuUNkxQKAqJAK9FvwRvkMsdugb5uGZCdKgo4vWHcja7wHoN85ZVMAhFqPscTyNAp",
  "key2": "5THia5GzrgGp5D4feB4WsyVCxRwSaw5DFkskxEwFg3KNdjxrbBgYSzYxiurEF9WiU9Evdh4CRy6ne638oE5aAPYo",
  "key3": "2YA3zq3bNKcrtJPu8t5nwhTC71KPMFfSvuFvLhVc5NCPbSYJxyXacbznFJqBCMmKVQtSR1KPPXx4H5Fpdm4V9VBE",
  "key4": "gS67RomcQdVyqW5Le64CLjBPLsRSVe2uYcypktV1cMY2WEH896k2QktmaPnSbHaMSaXwWcNBQVRbDEf1yJ75Pgu",
  "key5": "2EiK16nvhCGH71Fm46Pf7AYsY6yeKy3nATt1yv3pSJhbW5zeByMGKedL23FTnzVbpNuUEMw4h4un5AThELzLorma",
  "key6": "gXsaurHbjboGUcftGQLopJH3p6co4L6U2BKhCTUcLWoFavcufVKW4PF893e8WZNgzvbowe8LDiqqHKTfYtN4MCQ",
  "key7": "b9bXggDESmu4ACUFcm8vNGcsNNTVdqRZLhodYFndjZtMj5bCSWj41m5FamsZkQHj3pGjKst86jRGFoJAa2VakJY",
  "key8": "BFmPWnzeyEwdxE4GYdQFLfKXq1y9y1gPRPzL7DnFsurAudUEcRitvzJN8MDwbm3LfSkz11YLYVvFyMWwfMiF5ro",
  "key9": "48xLcacAcWeqGoCmJbkNXEFgD9KNtX3Dryjbz575puR4DT9uTeqHuACAUdnYriwkQzVumhbTQGCshZCbH9Bi9gWf",
  "key10": "358h6JstfLLCut1K1JNXAmVUiuNkKUG9YRv2tX4wf3X3G8G2W4uXskNMudyyyH3qPJvCWHbfMAWq51gKe1adyTGN",
  "key11": "5bnKQrpgJpD7yDP3FvsvVXCRrvkYBWcEYwvvANTjsDKvVHMgFNpo5vWfRPi4QcdbfFRho1Mdr1QVGNugTAUd8z3m",
  "key12": "4s5W93tb7MdTo7WLGqe6r4KrvdnbhpNgnAziGpv9ZYafiDDN6PCe3nNG6J7uPTnFCUHcCk5m9k2nESsEWQ7FxUrK",
  "key13": "3BuWQHmYTA2fwAWiENptre1ycprjVd9c3unrc8hPjqSoEkaT4QZDTiuprghfJ38r8PQf7Fsu82mbTauboCky9J5h",
  "key14": "4EVhEu9DXbDG16JupJ8R5P7r9Cp56N1WwzUohbkeFhWMc9KhwF7TQii5mx3VKo4aaf8F6kH3EeqqLaq3LwmEJ7HZ",
  "key15": "4W9Dg9ih6k6MWxhjR48zUKJWqLHSm2doPbXvQMJtHTcdNPRrLoYmBY3NjZDJhjxzM3XJ43oPkbZmerZzj7pcupSL",
  "key16": "jxsfMjikTq5MHm4SMyLoxpSosyBWK7KC63C1qRaYF1C34WeMgjd7roYFv7pbXYUKhtH3VbHJANCutx1KpEqZskQ",
  "key17": "3bbZqEbGuX28rMU9GbEsDMEWsTf2ctSLu5yQ3bJHqbABco5ej7oRbdMTbqNZ8ZZ1LptvGkEEKgWePxcyMkJ7yKzb",
  "key18": "3vJKQ1SJZCm2wZMhJ9q4w4B47nEkU8g9ArVhSYiDjmYQG34H8FbAA986R2zWYVUF726s5rEfXGbCwpQcATrUPSym",
  "key19": "3bwP41kqu7epZVQRBY9eCihMDneg5ikc8eWEXDDHV3PjBRrb6cWnEW4dYS6sUCK4mAtvkCF2G42w769CXYeKcByj",
  "key20": "62oY7RmDqFa5u2LD9z5NTTe8moFXKJXRyejPNuoodkcKY5CbrA8xJTexASXF99VhZydmEuZERbhfgqmtXr4Khu9u",
  "key21": "5ZTuQ14FHCgCmYawDSBaNXWkMHHYqcLCH6ERrNT8WWNKtA9E2911aNcjFsGNh2hxjjW1U1SsgL1jkmmc8eEV7EkY",
  "key22": "gom3uTDwkoSwYPQFkNS2QL1kdHEhht6nmT95YUfvDcJz5PfFb23hcW9XWeGVZuDrpNMdFbsRSGRyymmaU4y36E6",
  "key23": "2dgfnr5dnXZiZvQajPtNSnJUrvSvQdu89Ay5YJcSnnRzaC2WFHpV7KcLMfjNbo7w5nzJbzyj4HMS1wL93jKz4Sib",
  "key24": "4B164pJex86xdjJCL8BfskKeqi5xbQ3Sc7ca2vUVRjw5csQh5iXSogXH4eswTnx5X47e15ArgU7b8hpQ6dN1cPAh",
  "key25": "5QgRa3yXJ1rBMrawyUHcTWwgaUqTXAYR64XMxXwEWG3UuFUxFsB9MkWfEpMxXBzN6THYUJ4YMbpaz4L7Pa7KtU8V",
  "key26": "4GudUURvCt6MfLYgVWsDBAS2q1kCokscsWRdb8vyEFKNSq1VaYdHbe2mAFLLr915MAFGw6RRuBSZnfxDVJrHHfa3",
  "key27": "ck7yDXewSKwxYvcRq7fndcgPdbie2XDZVbjYQA4MLC7U79sLC9QQ9ZiAkG9dfFuPZm1a7JXT5wFijFbtM1b4cRw",
  "key28": "5E89jUiZnetyHBrHobDtruUPTuxnqLVbXG2Jg9pJ41wEuW8wdNBarJLY6trKcUnnsM68eMSW6SNM9abiB9vBu4wE",
  "key29": "2sCBQF9TXuuDpp6WxQmQBmVVDJUdU5zNP9qdjvd85qFBsmWzpRXxfSpnt6NSazRok66oLDqV5z4HgpyktYxeSLdw",
  "key30": "2e7VTPSfmQSFcWN9JJsGkt4yxmuTaXpbu27SvFaSsbchwqQneVPC42JFsGERzM4eNLv5K4q5S6oP2wDeQpP1EXy6",
  "key31": "2AteJKAiJ58xGZiNvCJM3LcJ912H8LwJ3DC91t4RjmYmxtxN4hYrqd9Cjdg8REr8QMEuDHSBjhaCjsv2QH8Yn8Nx",
  "key32": "4wS6kgf3Qznh8GvsaXTkbWiaoGuuaAoYdusDtuVpqwTAF7vPCfCtU6QScKZPi8oXTA3TwMvSVYaTSSvVLQM7BYnT",
  "key33": "34C5JMQexM2Aj2qYyyToq1JdtFQHKFws7J2mdsDmbjUcj4dirRVz7QRX3izPrkXcAyZ45HKCnJArwxx1KLNMqDct",
  "key34": "5Gz98LtSQPpp6roWJAutpgV12Hs7wKtwaNDxcbbtxpVHzkDp9q5WRJzvPYnQQazV9P7R27TnbZdYRWMexw5f5L8a",
  "key35": "565V3gTBiVAGPk6vki5mEsYM1hUK5XcXSkdQeB39gJSZwPwkX2AmcbRJJP4fihAvhqfMZUpMSWBh8gg7v8kkdNuM",
  "key36": "2Gy9j7sQjG4ZA6MWxgyAE1htKKgYYCEyhNrTSQRsh9BHYhCaDQZHJ81LkS44sRp1AhVssYxok65SypYeFvbr8dBm",
  "key37": "3hQR2tr3VUmrWCfYqGevfMibsdELesTEtXeaTzth98623n14AjW8FM1z6WBSTneoCXVgKQpMCVZgyVTXgCGiQWKv",
  "key38": "wVEMi71fDvuUsauFCZEXRTow6PUqfkTMNZbChYAE1u4pbFwreWg8E5aCJuYNPX8uyXSXbJbPkJCLiaqc2AuuVWR",
  "key39": "QBHeAoN1pQwEiYQVB9DpVw1BzFsWSjBGkRW3tzfmdJs3uuXp7RDLGVY7X1ZJ8Rt7LyGTKGHN1oERUz7hVW9Decm",
  "key40": "gf9atCEbRYWjrKWbMigfPzFpPgdS4d9w3phuhDe7DPixVKYQnT92pRxCrYiu9YPhScfmLc9S1c3td34wnJuRQk5",
  "key41": "4L8cr5km9LorjELK99fh9AKeshNMQrmT3eFsiAs8Mgyx6UbfQTjMR31sW3tcdHDyhk9yA8LnXPdoQVgpwf3GqivF",
  "key42": "5yaPzfwSryasduDPCPKvMXn9QZnkViUxbg61r1Xc9ktBa8GmfLyYjbKSyHy9YvbRS5TnyDCz1GP8CuaYKEqdeSWT",
  "key43": "gwbSQinnnRXZxHWnrTivc9myHvK7V1UPVsc7mAnCTpjYbhhb3B7a8aqRnRECv4mffgTmhYS3EUSLkPwLuapVxxp",
  "key44": "5A9zWUShDJt7cEngXDcAfYYGtgDxkdW6cB7VM7rfzgMk9rwakRZjbG6nfNGR7DLwwemU4FZRPfe4etEyeZrC5BcV",
  "key45": "33NnntzFR7dqYG2Hwj4FKPfagDP93ySztBmpom9j4SNrK8R7wnHx2J4h39QUdsAi5874ULArAXS75263ZVdFDLNH",
  "key46": "5SHi7mkYJ1fmUA9jJjRqYRtLgTETvqwskkztwfs9xhX3phhyYZ3gWLWy4oVWC3KvvMZKmv3iiQniM8rD6RmuUh1D",
  "key47": "sw1F4xThsa6ZC3Fx4mjD3iZ7bc8DmZPqtb35sL6bJfGL5gSSgcNarNvPiNLufN2i1rAM7kvZMYiqLz3aFtHGifg",
  "key48": "q76NSjM7qEBujzyUqcUPWiMvby9XxAhYFXajCsh2sr4eHBefprfbnR8QJAJDBrfh5GRebzRg8YG58CnaaAozZQt"
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
