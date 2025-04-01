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
    "whVo5xCjiNrFfwtNNLM4gvTo7k4e7dA5vSK6MvbSuHy8KjpyaJF15k59PMdEKHitPs6cEnbPeqp2k62KiauTwhp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49f93Cf3M7khXNCGW1uvS6tA2CWqEuuU177Tfs6UoaMGSPQeG2uuXqY1XYE6iCmL4FKfizdujJVSEGesvPbGUPNW",
  "key1": "3xS4BR1qT8huWUmPdspEi42aybyAco95XkjSbx3UYEQ9tmbSS6Pnam7Ro8i8BAaQEyFhHCtoisG4yEpAac7doWNn",
  "key2": "23BBLCfJLgumkMjXht5SHdsXtiGBSEjjrmMKUEpxPMq85fmpLG42sepCATo64PXPno78W5KsPsTbTUV3G2MBVamp",
  "key3": "BJrouV26U3L2fULVBeGLktyyYM1pffqf6iy7iHx3E9AhK9v8keYHLixc9UHGPXxq1J5KLUWzDmrBz8vg61793xv",
  "key4": "5tU2cpLpmZxLxhL3V93oZP5H9zQPVV2ZfZkLLaZ7PEFFQtKjQBVV8cW7VZxGh64qRpSttKo2VrPEhvaASoZeGpMy",
  "key5": "36hyxoBfGpbpx1Az3oVKQVAP4hrZHkRg1k5JFm1nuM6FCQxtpMhzTk5YAsTM74T4ybVrPBG3dPGjfykKDEfPwe4T",
  "key6": "4zAgdiiuYPQgWp1Np37WVUSziyQyiGZF3FuoNN8aFUt3bHkQnZc8drPxqf68HvQfyuZpdMS7U7qPQWQKcyGuStF",
  "key7": "4JmQRwJ4zJoKsTPehN3KiHFUQEQZ9utfVSVKxCNp8Rn5X4cdRsBH4YAaznq73HPiJkNUwSm5rWGjjNVxBQsxPikH",
  "key8": "JYFcquZDeiPieDNxqMNAYxADVxt2jCBYkd38UZJu6M6aDtGkgfhGaiVCdjsoCtrj3KEwer7d59D4EdW2s6rpFhE",
  "key9": "5bYBmsqHgFfN5TWwKHWeuqAuaryuoxoCm7enMQZHaPTbaKCAJwNdq5MktNfDEB9subWMyXSMJbWkBkA4yH1cNPMP",
  "key10": "DTFPyzrZAJoaAo5mjwfLiDfh8rUB384rxykdoKc5Uyo2pzLEqyD6HyufRRuNcJNuSgVzBD6rWVwj4HXEKGsL8KQ",
  "key11": "2n1BCyfsTXsM29HfQXQb1ovZuwzwMfR9gRFVFRAKSR4xTNvYiAhUYf3iyLVXJaoDrmwPxk8vsUaSakBFNmS64nzN",
  "key12": "4cjSzXpfkGUArp3YZfYXzitNA5NbqynoDbfi8328ehKkUHM9fxLb3MLvJMLsK5vSPoVtBwmtGeeezMCaqhU89mRG",
  "key13": "3DgzwND1dDekRx88baQ96DV7uEvnUzatb9qtY4om3Q4FDA8kMniWJVkhrV4WXQ35gWeoyK7d7uQwfyRQUjhe4p7T",
  "key14": "3wGvHznTBbquFqfrTh1ws9kDvBpfnUwoztag6zVSkzEHGE3XCSyuRaVXyc6zavju3EL8GbkQSPSBFBTXKz8gyxfz",
  "key15": "4SdCZnzNhxfm9M4r3ytWsdK29wjJJmCxenDBfX6dWmK6QYwWk4Vxc9Wor6c8KKMZcYxYJBSTzsLBEHNdZhX6nQpP",
  "key16": "5r8AnV928zUGh2ptwTbQzm88PazeEGY4bY6ue1bVs2HHWpgqpJB7JLKqiFbGjzjYgWxvVXw5LPCV25Bb2jZve4U",
  "key17": "5r3z7imFD5db1L6Efg4D4UPUheytkbocwSw9BbZXc6FNr1xdw3QhdkkKMG4iBe7mgNzCxpYkUidHqaVzoZLcLjGC",
  "key18": "3fBDeppEEBgUgLLWXAAMVv5igXfRfTCCaNGavMtsBrptbW7jz4upbGyEiiGVhXeubsMKEjLuuoVoTWDgzyyVqDag",
  "key19": "2mzcNtaK39ngPyix2YpA9RtGGUHGYRX6RkPEYcSSFxqFfBvXj3uVn5shnqTYuvJu33LWjghKdfXU32d2YEHZpsEn",
  "key20": "5WbkuUBsNGX1ACdR4AT7UcVuj7GCoxUt4Z3XHWWCyNgbjAQUW6d7FGNdfrdPC1GxxHH2hxjh2niEkeL1uD8dgB5X",
  "key21": "33Mvdjvn7sNiuCoQCxLRNPCUzwBp9fmmVbYGua1Quv7fYre5VwEmGLPuE7JCBn1tgTKNBX5JL8ooEdytTWdCZSmx",
  "key22": "2NhtVc5aC6fjwZ78hhTxpQaYH4iDpEp7b9vQxFSK5JciAh5A4VUyqyNfvRmReczc5NNYTS57xfCnPnd2QPKdqU9m",
  "key23": "JKNUmZCtWcAcGHVqePDuJNdH1kbALcje6mZN62xaze2TDqc5dMWqddpE4DG3Pv3JhDAzjuDiSbxoyixCvQHLjuf",
  "key24": "MaFSktxX8hTRx5QQPyArSXAdanrzzghKo225xSs2Sqtyyvz8PVjCDDQg2La4tTvkVivb177XgtWEPMyc1xKFAnA",
  "key25": "3qkmkKvXeM3LwBRX28AdEfUQJETNGLiqfzpRc7pCoL6FzG1UErPcwHM3zr6rPLqSXqGimkGfdZYaF11dV23kQXBv",
  "key26": "2JAsHSNm6vK9o8YiLJucqVQzHzkYDFqubyPLaWgqKU54YgjY3yLSatc1BYqoAYTFJ2vscDuRb7Xjh3F32kg3t1BM",
  "key27": "3XPNXZYjr2c3J8ogVDKo1YGWWm9UpLRavq9eTdZLAbHC9PDgdWTEuv1JsJLjT3kynTZVhL45uY3g2tRYBju9x8tv",
  "key28": "2RvPFvMrqa9YMMVH1uPKbsFGVRoSzCpxySjcugEvJHTCX61E6SdjXWZGsoaE7asm8XZFes2Ytc5EpQQtZUg7H13T",
  "key29": "gNVrXu1k6N7Cfr4xwJGduCEqb2Ggm73qgSAnHfhbUjCgAZfFWFuXjcUczMhYhs5cx8SXD8TFfPjXHZKX6FxnyCT",
  "key30": "3zdygGGunFaQiaby4K18CaEJeuCiapV7cNbjozZxMoV4ogWmg4MeMAAqNAXWmhCykvma9aGf2thF5PVq6mciftyn",
  "key31": "4wYbtoJWkqdXGXxtfw2yBzxr8DJwMaFW6QHX92TMoRQwoDqSXV7YydpftVRiByNBECyWqSMsE8v2Da2jDJMgf816",
  "key32": "59qhc82Q3jdS9MusoeEn18pz1vGUhBBNitDhkzDatx5sku9EPxy2t1MRxLTzFz6Xk4SH4CFg4SSU8rF6vhXKiXfU",
  "key33": "4tjD7SDuAZwBCp8EY2dAjya1UzknxXEePMRUZuj8Q1D2rcD6Ch6VBCyTBbVGGhFYcj5PrkPXmcdiknN4npUUCAmL",
  "key34": "2z1ozFsJsjSpJXLqzc5E3qrCpDLYVSfLYjFHmci2eWXWwQ62vgbJP1c6yk2YZ5GfxTU3h6htzbuKDfq6QeWt9sMf",
  "key35": "m7H3rWjyVy7Ff4sL5rDaz6jewWVh93KL6qSE6bTDK1tzp5yDh2uUgd5dmdK5wLgcUeEikTApvPBF4Sctg4RuCcq",
  "key36": "3hJryJyH7nZ3Got1vMSceQdY7xej1kicufFe6VZtNG9Tu42eDeCosgDru5XvMZvjJBdL3R58jgsicE7VfEF6XRWd",
  "key37": "64VFbakRUPvJftjxCj9cgEiCgjKYFeH8gPJcmXFjhorm9Ltd1zcgvB3i4GtriXeVpyY5nBasqGzwixkmMDV9Lsvf",
  "key38": "379gm8PVDS5gzYZuEa9idmWz4kK9SBM6bifm1dbyujrrUgWHZ99GgdvfXWyB8uWtBRAzqKFQxkw3TEhqvekUp4Qz",
  "key39": "45DXMXv2NAc77vh2tgDoW63LcwHqmhB4DC1w3EtWrKnD82a7qHyWNoB7NTpXGdKe7yaZyv1oYLXfewUCk3MicasT",
  "key40": "4hMRaPv6GvpK9uCpTpnRLG6pCtYrVjySnZoZFWFeHHtGEbNgica7VGcXX2jvBKeDgBmBMr7jxFZxsFDpNAacfNAy",
  "key41": "4xf5tXd561kTcqpPtyeg3FQqqNoEbXKNywdQNub7b8RkyrXFGbGaxZRpK7tkfvLSvHWPgfTMxeRAkL8HVUQ9FumY",
  "key42": "5bo6aXn9cWwTFqZWjAmo7TqHUSjNMssTxZoszUjGre5VUAHdwfH76spLiePaYkvaHBi7mFrfAL5WuzvrF73qBArk",
  "key43": "46ibxwRmUfk5npU3JL94JVvuB9URnj2LaRb7NkZhXcLQzWaoSHvydfh2SpEUvXWMZv8oPztK2bR3z728PvMTcHJB",
  "key44": "4uwK1jAdhRHAb14qTZ8Q7AqznqAXd881eDVYW2TqhpEmLPVfSHjpGf2FLy5xsBYd1qk2ReDEyjPBAzuaNryn3Eh1",
  "key45": "44hQcpf4utqCT6fr3PRfJd5v36rEszZUZgoTWABg5nhfDFV2hgsYJygS4LkrXZNwzCK5SX4NzgfesTBYStDchoVi"
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
