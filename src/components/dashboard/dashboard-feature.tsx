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
    "5zTBBKDxv8XxmdexBXW5U47BXLDwVX87KD4GmiaXnfKT8SngBTgC88QVG1DzMi8xNR5Ug3XAGq8xd3C7yLbkcm9M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sQn7rLaLsSnigKHnvFe5tCmBeTQFKoqVBuM6PVxdKbywy18QpgAM4K7C2NS6ZdAWGHJrZjbLZ3DkbvsKpzjqi1v",
  "key1": "3f8eWFxzKWUXywsGiyRJy4gyrcbr8fokrWqAmygw3vu7CQsgimTzGUy3vhUWTq5o8RHMV7S9fSC23tdyMgu8YAub",
  "key2": "2HPPYcqiYn6YSFR7wbJmXVJgSBf1cvooNAgkm94pCRc75FbiLg6X8WC9XmX6Xr6EysGmCYvZgdtECJJLDRU3FHEN",
  "key3": "Eect9A25yW6ffwpTK6EUJNyxsRnQbJr3ym61j7tDjZqyozvBKr6HiUFfgjDjSoTmtcVmna4xT5ux4ERHv7cUnjt",
  "key4": "PtTGdgpJiMYB3KnUrFmhp9FJYYA3EUuRk4RGUFDZMuB76nvKpSHMDyVcScsWoAxCNEbvituJmo5V9h7EJxg77gU",
  "key5": "4Kf5asEzqVKztskhFB5Jk1BY1ZRbGoTsH67oJALrzsp5q8whqNGtkPXWpnt7c3KuQd5Pe3RKsgAPQJ2Z7Y7WzDgt",
  "key6": "8VmTP4n2Bxaa24G4T5CpQt2WUeMjoVBVdwv8NGUec2sbYWmvfBfJZyK1F3BvhDVwcsFqh8qatRDjh3iCgR4PaZU",
  "key7": "4fgL2q5jvakaFcYq2Tz62Qxb76u5e6u6TZ4pBamSrRfqgszDVZbRg8Zii1tFjgdAucEdPaUAhF2HCbUkzxjAxTMU",
  "key8": "uN92g3TNLJWRHhnZfyk9SNbNNmNpN4nN66LLJ5Go1Z3UAsHjVPhjmguheukNkF8S8LNykC5TwciFdwUmxTCXbjD",
  "key9": "66ZXVq9NSAEwqmAE8Dyo9fd5XHat7zMuaPtpuDoXzxJtQ9Ns6E7u7xa75GQt2roQR7RSCrJC1kJZmetEcs8qNq2R",
  "key10": "hU57K1JqpwxB6r9fBjhdP5egR3zZbbFTbVutvXfUcHpEqJgNZw5GuQsq5z9cByCWfBxfkncxNiaQMJTqhSGQ6m9",
  "key11": "56jmLuTYq98vmEExG4Cv8H1j7UP9apwWYEnEVTfzbQf6hRn5GZmhxUpVKHHRjgMqyJWbZRHEREESJi29ZJ2qmzJx",
  "key12": "2ZRanKx2ChumhKBdYYQjx5utCSj7khRDQGcTrLjJXncgHPjT3UoUGnMJhGYGURum1eMSeLwbZT786DetZbovytxb",
  "key13": "24C5WFPvmvR2QJXYvFFprDFT2bc9zHSj8s3FvbajmNQR6JVwKfqiyXAshtY3fbhWzDhMzXooEBc6TjZ7ZYLYVdfW",
  "key14": "4k5wEqCpemypDr5pFVgzMUKqkxueMJBZ6U277vbiYShDrqSxVWn367CFPKnjfxUEHoTt16cAm5Di79CHSd9px4eD",
  "key15": "4SzABVV338iyCiMXpGaGQXuDwC2Ctz8cjXdpBTXwsf9baahZZffNN1GrzfKhK1HDWECS7apRFrpBMp276MGGJPKx",
  "key16": "5PwZ6bscnmqNeSDzaUxr7RysYZitTDxVow4Q1RinkWbgU5KzdL7ZB92SHdkrhe4VjmoBrqsu4EPWwcosXHWUvXuS",
  "key17": "fDeV8QuSbAwkXtoadRjobreMB3wALnDth2qfWvGY5aJpK8kGzD8pBfwPFHhgMX7ZoC2CYcvWETtbAYeDCBfWcUb",
  "key18": "2Y9jR5CrGkJjtDwoMNf1nDjMeiLqxikhhXDFYdFLvt5TQhMKg8aspD3NE8fZTJwy2xn6Nnmp2nEnHwTkt5vYCSwd",
  "key19": "SLJNvrBpuAE6cB6h4o8NoYK5wJTY9runZ9k3mEpUdtbjMPULmqVsXBGW175hxE4kW9s55Bub5a2XZS8eei8U7Kq",
  "key20": "5WToAi55WTGppftWw9KNVE2T8j16N6wtGFv4tKwkLKiD2J2akiiSHUobRQZ1334ULwTvDZN979adN2xtPAnK1CWH",
  "key21": "44dLeVLiXj1v5jKk39d7XMRo6WuG4ySEfWhFtWpy3xKGTvFKN8DLPsrB73cbqn4ZaBXAGA1iR8MRdu8TQmQmHjS2",
  "key22": "Y2sNphETeNZXXRLPT7pkrYzcxZFSRxmEYu17HgqLtt4Amd5v844R7JRaXKw6zwoenDJkRAEBCJbnJopATjZc57p",
  "key23": "botZU5i8EYJT4r5T1ifpqJQhMpg5MybhJzhxCpv2Vuzm8Xfw9RryBaJJhb2D6jBMJT9SUgEMRx8ucPosq5qdKfJ",
  "key24": "43ba3GyouD8NKaDCTGkbAqbXsr8hPDTAWfMLx3S58uvznvCQ2UTG5XjnV1vdapWwoHp8fpH1o4zrHUQtKskes9Vv",
  "key25": "j5VAofwqJt9XxF6PuQvEqXEzX1x8boAeRmQmcPcL3q3gSm7ViSsdJrR1DbjCnnR7iNoBvkGJzyYwJvHnKHxxPW3",
  "key26": "34JYXgtntwg836MSbxCjkgf9ppFLcCTdEVf7BMsePX9otG3TBJtaKFLf54oKnQZoKULkyiR2LL7S5pUSv36VZPD2",
  "key27": "5fDGdEAEb8D3RxunLVaRszoMG5ZqTefvh6dyBuEp2gHuq3Yp6VdETKCyHdv5GbsmnaJ3TDXhB3sA2dkWyS9Pr6Q",
  "key28": "2cFYPgoJrTcudohRacSCMRfTJgNpD47P6ZdfZHSh4XqEUNKMy3QPk9qEWp6gWE3JncKWzAYqtK9RAHKWqLZNwLVr",
  "key29": "pLerwfyB6BCTrAGPCdEUoUXb5awFRZvjCog38AFFPQ4L7XdFFc13Xs2ddRoMUfQSrQqAH3CxjLPDUfd2N9P1ihp",
  "key30": "3fgy2EGa9db4kmy8ab24M5sdVVTGqG3pUcy7Xzw9NbRNNowVjmXsWPNCvmtgrUspZ67AXTqMwGimuyDkUZvmFntt",
  "key31": "2U9D9kSgaCfAHNB7q8vwFqKJrxkf4cR1vh42mP8yV86pWUo3mchMkedBFbELsatVRaJnbmLS46taV1wXo3Xpyug1",
  "key32": "5YjYM3zQqckanyXahLog5udQDKRSredmkvPp5ZsrU1JA8JJNa5c5Hw3e5FKm8pBiqgmZBVcyeeZnUr4bUtW7qRN9",
  "key33": "4hTp8dXkXJ3EoBuXnpk4fsHHdFW6aX3HHVyuxGkS168hZLut2NWaa6zmTxq1ZCZRV19puwA2BSN1NHjvaXKhPXNA",
  "key34": "W8VaGuJrwN3HRafdodfYdQM4YD3zXzpsHtPq7JGrsYzfwQgLxakaqYanWqGRyJXoouuUFsCXr5WwrCBgsVXfFci",
  "key35": "5WNvL84S9zvA2YHJxH6opd3Da5V1RtGN3drKL8TmALqQxMETZCNDC8cucyPCyHJgq69cTLVRMWS7tdgoK26n57rD",
  "key36": "653jw1R7Co8AMJMTnz2EC9WJ2uoFXYawqJ5LsxEi4dyqjNjn3YmTuCeyZUB5vjm6YKdbKLqa6nmtEAbxr8wMR3T1",
  "key37": "2BLffkRYq992CYSEWMzJEjiHvmjVnicfdb7vbXJbwg8ST5bswgyNbHDn1WHrWLU95nrpiBmUyeBm1WtwnTamdX8z",
  "key38": "3dPshyab8Wts18JhT4qx4aXVcafNnGZ4D8Mved7s1iELc66s9DZsTJJDa77pWCTbMiMxVcVFAapisN8YMW7BmQ3o"
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
