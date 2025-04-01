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
    "3QWRP4vRzMSe79UHqgAmGgQWgFwzjJxbksKs2kgEttAWNFaCNSFXTx4vqiJw53NTYAqFHBmWkUDki1iACsoUHceT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wzbxQakkkAjo6qaNMvdFudXjCpZ9hFeEDAT8Ai4vzcXyaTuPELNKx59DWsaGAQqUuM8sXf1gtrFNHaN2subYqMn",
  "key1": "3uXayPp1sdvhKRLbf16sCefAns5Cs2XnGd1ox74AXbAKAYiTLxBChN3vVey3u8SuEeWptEFTRkdVM2GR8byEYp32",
  "key2": "42cXJv4M5ioLVSNvcRj7RTkFGq9MHFurgBpjeeB7LeeydZqmfb45Z9wSdjpGC75nXWNiZnEXCaARteuYLNYhsmge",
  "key3": "2dWx3M3tNXHcdYSSckCa6u78eQvD8HS2nphEG9epoJbBp3MV7wKqqDNoLjpXgUR1GgdvkymVxx78ZGBQaAFxbSiq",
  "key4": "5ihaQKCzV3nwD8AwWxe5enB5ThiQFVBKoQ1HURj8yRfnJrCAo2yz8SiCXVpcFYMQNwrGMRKJjRfYnjePDYTaCSxp",
  "key5": "3M9SkvHoqU7Z54H4PHKm3yLFnYZw2WE7tHckEGsvPQMUbz2rMpJZ4yU6VBGXbKZDKgCRwnccEAQiWCLJmCi9QM4q",
  "key6": "4BuHkK5dADGcAwqXXHYLRekouLYUBfbPQjLoChg8XAER86qWrcVBZpoRZEhG8yxx6aVXt1u4UCbxSXRRw8dXa2Mc",
  "key7": "5W7e7C8yykoH4ZrGfWm74WBkcUc4jjj4tDT3AQZe3eAyR8qoMJMbbTgm67tTFf59vNE1QEaFL3uj3W83BWjvde9i",
  "key8": "3oWYsJ27H9TRWsNjZNEhcxxj59spto4huTTNcvHTbARpczAjNP3juztRKxv3H2HiCcyLCUW595PXK1xcJqbkjVkb",
  "key9": "4vU1mnr5CyYHFDT7hsxKksH1u4Psi79cZzVqmZFvENB9MKYtZkJBcCvUA14g4qJ6dDhd5mkviA1grFm4bDdb9Fcj",
  "key10": "19S68awrrev2Tm9mDCb5nBztntaVQkRT9Vt4naYPo1K77KayZDBUoNSVTebwZZKaoSM2rVBreeT1TbfNnaq8WjW",
  "key11": "4n8k46qVaiu43CaMEJGCWtyqXfFPHDfQ4yGq2zJGzozu23879aJtLSTMdnQwMibUqD7WhANFX2WYGF5UJgRZj64u",
  "key12": "VBahBrUjaFrRsvprUsQ5g1RUSUvEzaLK67QNomYJ2GgEW8ouLhVuyokAWdpAaP8KHckEc3y87SsriSfx2c2rGpw",
  "key13": "4TTuVsWvL7K9RYwj7txrb5Nm3eJzC1iv5R12bkodYzeQuGYELAC4EGoqEhT3Bgh6aNLyCvU8KJwfY3g9Auh8xNgS",
  "key14": "49qyUiA432ZJyUU4mubWVLaHqFVACsg23Y748TMFrDk9er9tVX3pao73GucgYmskXdchHwnYSGKvgFxSxJpBSJ3r",
  "key15": "yaTg4X8DgBoHXJw4J6CHS7raoDn1ytRxYEzuevqXmdNxPRzak3Y98sVb6Nokn3bZZ4yVvLpRxZuwQdRpjKWynnX",
  "key16": "A3vW2jiCqejynPguHMQvqr7EyR7VM1jY4KcPkeUdzD8AqHV3eUreYJtAYK7X8sxAbuGBP9nzr5Ue479UXPA1FdH",
  "key17": "3pp54MoMHUhWX4cUScqGixbvXiY8ZcvUbaVLJ6ew5Xq2bCBWPKgARbxWCJBEGhzSJuwwLQSncaqAXWyJ7HgkmADc",
  "key18": "5DpoGcCjRuasBJFaRHLRxsRMPFQKdtGNRKK1DY3GhBj7b6sNLHLgmv9wCJv2KmDv7otyWhKQbUaCZmgLL69Fe9j7",
  "key19": "2Ln6k349S9XZdZp8BUtNBzCPHGRmEFXpqj1DU83sMGrncoNtkkm6KGeY8sy4QYMHWfCLRVVkzStunEXPrDrEqwwn",
  "key20": "5eXGRPFLQMo2qZpbduBfda4qB3PKHSzQQyAr5QNqMgjuYt5wVhyN11s9r6wqVtPWAHiiPhaxAA7sFjz9NLhj8Pvd",
  "key21": "MCjAQiZw7dsWeoUpZ1M7wPC1KnV5fYXjcPRHzpebV5gzbEpwoRbPYPu1AQbsT1BgMjbiWNesoTrKLvyqcKrErRj",
  "key22": "3MrCZUha7WXu8fc6QhvBi9yA86Ek78h7fSYa7zbi295CSEYnVRCHbRF2uwadPgwzJxHezR9PeQXQtEi4Mtt4njYm",
  "key23": "2GBe4gABAEeQ7DusGbzdCVpwEwVdQVUCidqKbuD14NRUhqp6e81TXTsfwdByvuCbbfZ6rBF1D36vKWkDjAd2HbEL",
  "key24": "z79Z3zHzxsmgFREstDfT4WzytHV3V9JZNuyVpJiaCrcpdPqD75bvSEBU9GcwTmQM7QzW97rvYUDeSTWQ5XyDVBe",
  "key25": "3At8WnGQcYDS31J7xnjJ3vRSE49Lw7FYFMG7YkJ24XEdv5sckQdHRV4CzKxxj9umc8bY4xdaVwX97eTXvMEGjMfu",
  "key26": "377xQQLiVytzD8pkrUtgmRMPktiGS2EyEQhFZoBjUNXXikySCUnNXN1S6DaYwptA8hzGnEMgSGYAYWmjDCSPTHQH",
  "key27": "4EHKUnAGsdzfLiS8XUuyhQWaUJNWXeA27VdhyTpGBeaRkEM8MN4L5q6XjZhtuLKbf45EX1dD2J9idT462BwGKoLu",
  "key28": "4FCXmP3KRm7bGueQHoSkF1nrZPnNffM2hXxvYc7xBp9eCTyVK4uTnrUCybvHRTar1Q5GWrosX7TwFPoVi48u3qWg",
  "key29": "4LrYA6sgrxaN24U5cLQEsR9Hg64688DZNkvr8HY5PXKsby7m6eFNi7oPTtKDcRRudjPG1RroYAeLF6fbo2VJ3SxL",
  "key30": "67J3cboEaN441jBY5Jc46DbfMLvz8ydgXTW8wA5adNzFwXZnPM2UVxipopQ5t6654DG5ZxRcP1F3wS4v2CDkxtsB",
  "key31": "3KZu9wgkcyKR4tkTajpWuFKKg2pYy4pZwsSyRHiTgAEFypbwRSLDvw2GuzZoBVnJwrE1SiyhLigHxuwPDJNHoJJF",
  "key32": "3r9wMzFpw78uiXPjk9GHkurNF1Fd4kFHDqJH4w6n38k6xuLTMhEYS5nvhyWT6phPQkgqJpRXC2xAnx8dqenJ34sN",
  "key33": "9mxmkKTuiuUTzj4FHniL8DzxqkD2c6qMoVTsnMvG1RXi1aXMdqnjhb3e9jBwqXtKrwDjPgiiT7UJBL3iwzYbAsC",
  "key34": "2CP1Xm8ggrbcYurkegBWe7mmpLeZCABswBEtJ7Hqpf1LHRRKsWYKH1SehQKuyV1ruAiyKm1dofx2Rp5xTmtDhMd3",
  "key35": "mv9Fcar5Avv5H7mwW7Nc9iHjvsFK4tix9zQtivCzMLJJiBveSWsHJoFXW51DyKAd8v5KYbnRpf4NRiPo8jGwBfk",
  "key36": "3SuyY8319ziqoM66E18V3kfyKxP1gt9sKbx4EjyErfG52DbqELC2ERCgVnHReyEnHtRMUbxxQHq4KqHQg9Riypq9",
  "key37": "61n6GVLk2Ww2nUj3kh5fxfEXbcfzhEzW77nzU4nMxL5j6SMXRNc7njPkpKA3ZbFb3Q7UELbMdbwuHhap3PjxJBpX",
  "key38": "5ztiYRwQfqxrrKDtnDmLqbkFnUNtiE34Cn8VQU6V9hLUtGGka6Y8Zwcibf2tERq9tyGzX66FxWwyQoAen8TetPMn",
  "key39": "4rumftoTXFgcMC2uy7MNPMf3ACsbYuqWHFznH4esqgNvRvbHNVZF3MV4kes24u1KRuBTBhUcD8TJboWLR1gnKm8V",
  "key40": "4GgGRQZQfUgWCpMST7ZLekN3MfRitNNwkELsaccpWWDQ3aXrGCkEQ9w7UbkRwxz1ztX9kLtgo81xdv67rJ2JP8hR"
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
