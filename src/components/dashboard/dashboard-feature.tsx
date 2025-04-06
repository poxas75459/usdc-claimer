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
    "4cJhjUFn5HojJHPjBiPbAu8wC7M93wdbkES4bNP29CRwY7ywax1yCQWK8VLrLG7VC4cDXKGXP69gBF1czUaQ5P6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58395NeHhq4W2CBkLTRXGXdhsA5N1puQ11SmZSGjb2UKDm8yTewd2rUrecS3MR4dtWVbvckPrb89JvvKSvqNXARV",
  "key1": "4cuK2LJiRoEaD9Ho2UguqxvVn1eZFQu3gdUQRygDD21T1GF9BKXt9mCnF4GY66C8HN1Wo3BKXnabbViZaRfxRoPg",
  "key2": "2n94fQ7bxF3zYQD2LQgAThSoAt8jc5j54duv9WYMnNMdRPMWjpjyajok3bstdfrVsom9pwjSSFyW59tPC4E9SaR4",
  "key3": "4fRBpQGdTCmdHZq8uCwZadrv5znvjg9FWfPLuwYrKFqdefJk9g5jbHtUNzcwJ2rTQUrmrzJc1BRpN3znUkxjAkvq",
  "key4": "64FQ1adD8JNX45dKvHLAVsGt8rgXQYFmXJRKefAR8zFpUH1YwZe92ywL6xQFP9YauxhMHxRKCYJKN5Vj9zAvSBjc",
  "key5": "3NWCZidXQK2Qp83wUWoUhJZ8Rxrove9wBPnWb9NfELxjuv74GqSy4BNUZGFnzMqQRepg15Kodiox6yEP1GVVSAn4",
  "key6": "BYn7GmxWYgKWPb9jp67C11Hfjsq6k5fAGENUo4JTpteJDgSAkuEktjUUHGsTRbs92R6xfsV8Qo2PsS9UasTA8VJ",
  "key7": "5MzyGnrmjYveGipH9iPJgJycBW8iH3Gad5wW3Zg2wEorsxtjnE1yBy177KPE4fLZigc8ZXtyn9dP9aDjUcNK3sdT",
  "key8": "odZbempUykTnhudNbXAfPUL7dFGpAuQ1qeEc7tE1GGiY1vDzdax2irtRL2m9nFsrruNndfEGuDkPg4KQLzNGwC3",
  "key9": "3Gdq7N9A9k6YcRB7GsQwtUQ15NhayPmzupmK5gXGpdfdPnupeR6j36d7Sa1WqAheuRL9fcnuWQ3MKabre8tmZdym",
  "key10": "2q9LGKXPb9ryo3nAfErDe6uzpnDex6GdE7tKGvgFeumLiBut8f4LCuKDGLwnakUezq35nYeqbpT6KeH2APiUr8Gb",
  "key11": "3Fx4yKFUwGYr8NjU1XjvfnhwvENit7rym9QWpm5LNCw2WqsaKWjU6QPXryAU5kcL6ZHvkDNJqoNVtnx3SXERKZoy",
  "key12": "3YGqSL4dtLFioXEr7rspySFb71n4i9ucVuf823TgmNua1yDYLQS3GM733o95nVvLFaVv6GQCSMnMaDoV1ZJRMStu",
  "key13": "3q3FHa3ajHAAam5rdpwjmnHVKpEUd9fvntDbLzmLrKoVxVrctUZXTuznttwsTVBApuyn3Wpgb5bLURPGGRpwXmyo",
  "key14": "3mtGgKYVYV4fn4cRaHBuBnEncVqA7swwGGBAoxuoTY2FuerqzmqRmQ9RLmCxNfhAvqKM3a61cNnBqJShbChc1gWr",
  "key15": "4S2878MXQwigRs869YZe7SyM2hz9uDuCQqsWG2EHBn3tEw2bfDbMZ9PzeqwFprXkwjsRowgtL46vaHiny2RvgNf8",
  "key16": "3cWS5YNK9L5mPwgP6BQKjhcFUGCtJ2cxqyHfMs7TyBJsEbr5PAruKFzuFAZJ7WeaXmFcCMc6wQBj2hTfntYbAvqD",
  "key17": "31Qeb1uBfDLF1H6FHojVRMNudCqu6iqigWwxc2eEqf7Fa2GNwdyn14wEFB2dZGZCdcwXnDqSs7owYLU56NVkkTWM",
  "key18": "5HK3kwj7mHtE6jubyQ4knkpwPNmk84QMM4thVS6Hr6nueDUAC32hy7FipBianGAPgy42Rp2YsgL1L1Y7gPziyD36",
  "key19": "y73LnTVP8h21CLt9SwPG2ErLVWwcUv32wHVtpWatz87yPTJ7JYFRcz37Z8jubcrfysWevjsM6KXV6mACeXxmC4n",
  "key20": "4yhcZhf6TWri2zdh4UjdLhCEhTvtwEzx4nCfcAYRJ39P2eW7SWqS21kQbmXXvWBZyfeg2aydxsvzd8wsEgW3VBys",
  "key21": "4dkNVT1ZUpeD8vPNG3DUxoFB8sRqZkM4MRWmM4JdwGVUmLwe3BZt7N1z4gtvqcFqYNefSnbw9NucFajGaZsxNb6N",
  "key22": "zTH3HP88YYjNF2fjSgfpTsNXy9rcYmoJA2hzrHCeqFmBs4rSEEf3TWDBe2hPXdjo8dJzSykQmZiWw6qQyxefVQY",
  "key23": "2Gy1kmeE2MosWQv5w53oDbGRCT2VMRrcrC4M3mrPdNR5xirpRrTDjRYfnoDo7rzp2sCvT8aG5FCGvWkpzFJF7oor",
  "key24": "598G5iFjstg5qsx93zZdPfmpYDxmL3pouvXRNLkeW1siTEdPfG8xwx8afi63QMMpt3HiSZDM29ETciAHTzhY2GJ3",
  "key25": "2kWSRWhPxjLwLxCpH2qfEpxbQ81fwyQPHgwyMU1aTCHZ7QNL2WG9szwBpkTU8g3HqMd2DjZ3xAfwwhppwtwqLL1R",
  "key26": "v4gvqNgnzLbtGkwBdnNDXX5UQLSVyn9G4auMrguRvyECtgwmiLmv8YtduwhLFhSf5tF9Ve3mawh3kBBtAWGEh5H",
  "key27": "4BtDFX2wgE4v2u1CAQHLQ5itoN4R5f5XLawkEfJE5FSBBeBKbcQJiXaUydHz6h5WQY1fGmVTd1npujzQV6bxXEsC",
  "key28": "gKsY4PJXzf1HpChX7mEXweTvDDTLk2LWwqN3eaHUN1Xg5mQR47Kv1zqbfzwBX3iNS1LRo75T2gHMS6Hy7VNo1vp",
  "key29": "2zB11TGbxFe6y3gNWqCcU4fPGt5cRCLDiDoox6ZVewVCiYJWNjzrRtx8q8JriNNmw4raZUhQLnJCZG4bP2wqcEBb",
  "key30": "4sSVhBegCg2VK8sLgvTRDC5pPh7bRMRPC45WU12MMcSKJ7MH8aedxk8jTZRwvxoBheHCrENajdbXbi2tpBboVbSo",
  "key31": "XHDzRKgmTW5vQX5aTtbkHVWt74U24Teeg7psG8CaA4wSqwu6SvJV5BgqzzropXzDFwCPAbcEEx6NoktPbDTYy4q",
  "key32": "nSfuCzEynpJY9xxTCTcSTr4DmYts4zbBH35n3jGEY9X9aDmT1fAmSqstsMLnx1KtGzsmU6z7yeCRm3Y4hUuxtT7",
  "key33": "2nhet7oMscrnGoquoaJAq3jNVKUdAMYavH7PfiBSpcYRk8jfkCW259aatbctBHV49PvHSLqEnXQJRKoZmWzZTyL6",
  "key34": "c5ANUY9GTYDWDCWqab2ZoyEvc5sSScycRuethbSdWsHRQvqWYMaY4gHLH83BPUYWqFq7fTtKaKaGMzB5daTKQCn",
  "key35": "3tjigJth6tFigrkuQ1GS8N7zJGd6EbnY3Z5XLhwQXH9WitkZmdGXc8p32h2Fj2szLonNLAeYfZQ9G84SYPJW66Ka",
  "key36": "595dZD88RYm4zSBQPSdzsj1bxh6mVMwkmDC5aPhgoZR5HAW1mj6eEjgX5hnyB85YRQ6Xt9dgh1SCub653H4Z8SCt",
  "key37": "3niT8KE12NR5xW99XRLEhCccUpVV63459kycokyApU2G5nwBkPhBvFSTXYd9AZpqH5rccJQNcD3c2zpuNUfiUNwu",
  "key38": "3t7jEXY9RiukU5ShSxNiLjqdZeHPQk11FbYEPS7C3bugQQiuCC6MdQbjdMLVZqZyZA7oaNyiusMNE9cCH5sLKxAd",
  "key39": "4zxWFZdQAWWiTXMYjyv2zyq7gTS6ZLYwJ2cGca9VTMVZSE387hMiLtTaLiJYBvSgDfM126i1aWafXhMAA946m6tk",
  "key40": "ZkSd2oknZoTinLVA3YQypPSZsjvGeaJtsG54A3DvTfnSeNCisek373Cm8bXWug2AwWwwZxp5Ui9xXnB2jrfpkGX",
  "key41": "2JeNndPnnSJiVm8xPnG1PduuQq2ZPB9my6ARQJFm1QQqHkVYikbxRC8bEfSMaFQXumngXGmuFSx2gGDjiKTG5teA",
  "key42": "2xdfjDfV4EdGVGfAF2XEtjEzLr5k8pzz2XKNeyZVv2sbdaJ2bJoYWL6MUYWjWDP1czby7u39YgMKV9ATqFffgkXk",
  "key43": "3MXF3D2mxwAGrtFDuqwF4wBLvmCJJNdL3ZtnSM56hpbPFVbfJ9BPHCod1WaLmPdbMiwxE2aVYxAUsZDB1kdbSow5",
  "key44": "3rHEWr62MfNgumPkCKiVVKL1aMkk4JYfEQVkKzuR5BMuRkyUWWedhy1tX44shQW9zN8HvmXAkeBo4JBXSoURvKhR",
  "key45": "21dfEnAC9qYx4EYi4wiSJDudogs9NxuUromveSnWa539SrPeNEzcWn3FZGmmjXbLJq1dY4isdwpSzFz4jfWNtju4"
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
