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
    "2S5mhjGgkZaCggv7S5qwiXCG5k1ynuRacuR2SkLQD4nxaC1ZpuoAwQ5VPXPdN2q1rHxx2ruVFGfQoq8Wpox9j6uE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LYRAJZTxRQZBaVaojkVfJDaeDhbLDyVZbLrg85bGeogHRzcN2NjotUj2ShivMrGq5D2VnfY2fVw3QwQk9ARVTzT",
  "key1": "nsq8vGmjVjKf4tHs6Ah72zkSKs283RhBK4Mad6qCBuDpMeKfMbD5e9Thr8Ti7D2SBgy5ioJe5GcQnStwbAD1UnX",
  "key2": "5wxumtPUbjEH9zMZyHbweu24PyUfiptrvKoWZTK5ghBPcfRWyb18S7E6j4BPswTLakMaXsyg8KxM8DGLP9dKfZty",
  "key3": "4jmoywxqMm2432znhRhhnC6wsiv74bjxeaxuvSDKk1QpbETZmAPjwkfqqCYr9Q9ub8DoydkPVZm5qbaMwdndbBQy",
  "key4": "2fJYrfiKc5bE1Ay4GLxYNZj5eH2DStPZiM4H6CSeP3BNjMTpa4zHs3CAaqEbD2DPmbpHpYFie3gTKs2wCiog5tb8",
  "key5": "5zkoYjw6gNTUBqs5bm2CGgdhcoxdH5aNdTB6ymSYBJ4KFg8htLzjMQyJ8kKc1yUux2ZrvrMkAWFna9aRNr9JNGKV",
  "key6": "4pz95YNhmvAtMP5HCqktVxJX4YoswFX1qpFG6SpXfM2Fri6E2yyuD7nHQ4HCnsoudQoUsPysC1wpFQefSyCS6Ypn",
  "key7": "3BegtkzMxba8mS2sY6sLRwMFXSyaCNCajDC5nRZQBfeCaPLLRUjQxPv1cwhmhurGeMtjoJKwXxgcJ4r633wVdKhk",
  "key8": "uqKR87VTkgFk4y2T6qB4KBuccAy8XD6tAGoXM9X22s4btaS7dnk53Z5NKfHbLPp2EKes2bppG2msz9onWdC78HU",
  "key9": "2HLjphAMa8GX4fq6tP9LjB8NTgxqJ9DfGr3mC3SQJdE6jaYMjJ3dd24an3mhKh9YuZjUttNZbFF3frEiaGma6RZe",
  "key10": "52bq7KJp5GQwGRwoUTrfoXkLJ8wVZreBfUFKboHV6BGR1wo9RAMoKXg2Xt1zck5Tcudknhw7wVhkgPqutgpDp4a2",
  "key11": "P36hhXdvJMHPJUsLsyGarKXMxTA89Nw1SQRibK4Nax317EpTdgogADGGTr4Nti2T4JxGxHXTz6f15FbURphsTvs",
  "key12": "5CFQf8A8xAa93GT74GqaQcZAqCcGRWJk5W8p2PqA4mLddkAypMKpWGxcjD2Q2JELEkNJcfNNb7VHpJSa1mttxyQG",
  "key13": "4wVTZ2ENbNkuC2m2YDAbQw9KhgbTHg2WPEXUG7cBoNgqEWYieYtDD4wKs3Rrc7HhThuQb5UDR89p6NXSxkQ7LGFU",
  "key14": "AbFtDnQ9fzHX6cH5rUiRd9UaisgdNsCqLRjqWpRLgNfuNiTkCuVp9FhA6iRN2K7tqQcLzUKxBucHK1ZUbNBC77q",
  "key15": "hFbncnuBBba6cqNZa7K5HapnmeAEn3vsVtgfWMgXtmqjA4aTsLXvMzDmR7DRxTp1N87BC71jw5Nq5LkbRgV2dmA",
  "key16": "4dd8dn6xxeCng8RJ1m2XNfCA184kVwnMC9bVkD8gjTN6azakV4uQLcfp2XXT68m7tZzmN3CyL3jJky2JbXk7e7HB",
  "key17": "2vN385jFaomuUtokQTMQbxpp9WGRZiCH3UGWp22ppTyv4ghEBjsmABzHHd8SsJ25ELHqiMABt8ACbJ5LBNXVhY6m",
  "key18": "3PDLpURQoveSJ6unzGrc7N9QCHJoYigWydVoew1CSZBUhTcN86vqWM8zobQeeK2XSqGbEtjiU2Qmv39iPaPqfr1o",
  "key19": "2W81BxDLqEn9KApfVXJpJ7b5SUQ9RuBsP8dpFhZvQxqJmFnjS5Z3gNG8dsP47ZrVi2TDYjanw9TQMzJy4kRDpp5A",
  "key20": "5C99d41VjzLL2tUcjTqz4Mn6FhJGJvkhgBCkKnmYBP6yyavQftyzdiZMqZZYC7xwoeDKxXsN9rFNzsSac47dfhsh",
  "key21": "2jQhHpxdQjBtf1nHNeqNNa8tAisTBYyLpBc9KuPFU485LibKEL6rzsvEaC48sD7zNEzJFXa2t9TYKootZyazFiAF",
  "key22": "4oGjmRjrEHFvJuZTffRz6m8aJdr31HKANcVKPpTSFv9NK2DCzDL85JdET3WEEAFKxzfeKd5pDy9aUhc5KoFvFHbp",
  "key23": "65SxCn6NFcsy5kxZA8HmMVnh5DY6QR5JAKkK1zehGmbHjf6mynCqmtY1qvVa3cRD5uZV5sLF44fA5DtRvNsMCXiS",
  "key24": "3nTukicRECnUeHoiVRLwVx28raS5o3seWakvgbJtjkA9kd9ck5oBDPhvZ1tsLfGVTtQm1tkZvJQRCUs5j2eqgTMi",
  "key25": "2tpASG8CK6JG9XGhngx4m48oGJYFJDwyGB8CQGBAFgdms6MdipoCJNCRkQCbM7Cn78GGahGEoVzr3pLkSBDU41o5",
  "key26": "2wWBoZNa6tUXd5d176wFe2m9nGvZ9GtQa2PEJeJUu2NtDHYF1nKYfRTBTyqYQunibpnzVtaaScmSBkR8MF6zgYbQ",
  "key27": "2H9R9p33BhraU7GBVcvunnK4HzDRiSr7nydYrCy3aKVQqwwYQqDMUdeCHFyfjtec9RHCBGFJDcXn3qtoQRirAPwG",
  "key28": "3cxv9horAidyaGt2H9RncVQwK3QD3vtk1koAqQmXka4BRShJBLTF1uz2SSZ1YfttV39FRfhBDQwzKNMoSpGdcicR",
  "key29": "5SoGsekC3EWe4WgXcq2JbU1QNBJb6Ym7DHusJTtskGnQnBtr1gfXKLtPLf3iC92WRj2r7RLhDkWS4xi7soircTwa",
  "key30": "4KjQvPGkvmKYkFB8EodHJM8R7M7P36M5QaAPzEfKoja1wdBFVs1Cvjx7Z7vGeJVStfayd8dYdhNFMV9Z5uixWap5",
  "key31": "2m7cxxvN933Ty93vefCzQVZSCBGCtaPSWSnDWmsKT7Wo6oLd9FsXf85apQfb2TKAsSNmE64pCub4buJzCqnEmvt5",
  "key32": "125dZnQn542g7F6sNtewBEtwGQBCriXsB38AWL1oPYsuktx9Aer42PiEBQ5csXUEEJFZLzZ8FUwLYhGoe1NtsXuC",
  "key33": "4yGURbaovEK5pJdvwHDMJsDBnUXFzSPDLR85fCgrTU9NpxjeXy29AiPCHtHMZbz3vMjpChnjv8AsiuqWawttAx6m",
  "key34": "2V3EzUhUSK4yFY4gzdTqGEy7LU75JUDKZgQ18eEwzdN69GYQWvCCGCoA76k2PzXPy4X1EH6oRJtq3YNzDTm9DXBU",
  "key35": "4Gbmtcjibt67bgzd2krXcLHJ6WGzWyT7S6i9XPsitDv4h8Y6S3Jbe4p8xV6ToDbk4u5HL9SHEGKH3bzqVDXtaPkR",
  "key36": "4n4hRfUyFzBp8gUoKRxYy2a89juBpq9BvewKL72fW8JnE75QdLgn9CAKDrLtTM16szPdHSixJCo7mwB5TgmuPSPV",
  "key37": "559vAMQKqVMMF3BN7XiXCT1RwJDx19qo16Swhtb2qz4A51yngJ43cd9eihR3jk5vemmty7gUMpuN39ov66wARfmF",
  "key38": "qRC6dKspqLXM4njSc1ABycyoSznif7HmUeHMneARDYR95YGJa4PsFxvryQYM5HMKWLE5sXkFRYu28SFpPD2znYd",
  "key39": "EYGBt8XRzp8kY2sPono4xySD9rMpSD3ivayMNYUWsSeQU14SprzPko4j4pnjuz8i8taRtFkYQgfV8P99Gbxro21",
  "key40": "ymM4Ve65DYjABNqbHCu2N71aC19AxxCfnu815TYWgjNMtVY9datdWLjdnWKWrYNn5u1LR45ycYGzFxfsVCKiQ5W",
  "key41": "5tub4vuzr6ys91gGKKbTFkjd178i5Bsw4HXDRa7cbwRNQX7j5AkxmKKBYxiPFsgrVZnf4BYgEurXps1zbHP8zYet",
  "key42": "2bDLwDwY4D4hJ9SwqohzrPyiMhWExEAQNR1b1Vcx4nN2Aetot4DMYmB3AE3NYw1VUaJxSAHabyg3jbCWEBGykbWp",
  "key43": "EAxgF5Gic5nQhCWrabowGmuUuQpcxntJ38XKEB5X9hpKNmhyhVwJ5FDp4asrnVCENEXRcGqRGDyM64qUscWhVf8",
  "key44": "2unRhRt8Yj9ESPozGAx9dNmMaWvjuNVsm7JikHB1kms11wuaR9fzqE3R8CG49nJBG9GkiWXEnUv4Hk8ynkCFi9wt",
  "key45": "2uP9sKKnwi94L7qjQ65NXpYWEwvLg3ubYmktdo3WxEfihMtc7LyKLQqGvp6xBCExviaHo7hV44Aowu2bhWKxQpCg",
  "key46": "598uXKxPuuGNQCG85ZbQwnGhA4zbMrXpxixnJ95qj7kTftBYbk4gHRNPESep6cD9E9iqh2rXp6KQyUmpBPbyAvQx",
  "key47": "3ucJda1L1KsVQxmZUV46c7zmrE9RabRedTkyNVS93bNnd11cqDaBgfiBLUnZ3PWfF2aYNUiNZ8R1WvFzAWEhHpnq",
  "key48": "uyrnzRJzFpdcHESEEDsWFHt4TUMdNqeNRwjCx8nzjPQjwU5Lm2eax2EidKRTjByqi3Vbx3YBkoWxvvWTfbrdmE1"
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
