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
    "2zLmwWvZ9uLAf5e3GrKwnaT7kAdm4rADFgnJUUgGkq6SgcBNmqNFcaBa61DUQSs5TGjnD67iPxaxD67hJSEyVYjF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61WbpmfuZP34cTtbKMGkoeg551uVecDkGn5SF9mWFWDmdTo1NQ8gLcoQ6xZMBb8CY3jUR2PScnpN5GjTJdMiuXz5",
  "key1": "5DHa8hmcee95CrTTQ9TWoUfjVZvRN5ZG6urJ7urfji39jzrYg5YdRqyCss8hfBbhwj8Bdyzjpjha36cpUcQdyMcY",
  "key2": "4H2TdjVk8EWyeSHbSwTuodWN5xBBybcJtxeRcs4jYXATJVRgKtFZ5PnD3trTdhNctccJ2odtQVSrmyFrGfUS2czr",
  "key3": "3fF3TJDKPScVxcdGbbgiggqwitoz3VwEpg8hTFiuUFQxGi8k2orRZnm7JpzdXggypEwxRF3LT1tjFX7Fg4MBCLQd",
  "key4": "2ickDA81R6zEMkSPyH21Xd4tw9J9Xhq9PZv7Bb9oAagjEZFkKdAmMk5V7wv4UfeiLpZcGKGhW46LV4riomnVtscF",
  "key5": "42pZ2rrksjvKh38dZsr2NDv21Kiwf8goJsjvaE8XBBSCjXWr2G6wDhhFvwuUbqbsXuVKSfej1D9HfsjoK1S8vsSY",
  "key6": "3cerK6y4AawkzxNw3rYmBQDw8YRyw3EfVTf5MHTjXUVHZkw51YgdFwXPihKDAmQJremiJaXve5JpMmhhJc3ov1JH",
  "key7": "2UospMNEUXvGqawPTgxD8C4RbBQDqaucFeNxi8zWGtYm4EiAzUaajZ4ApxaeXMgCnY3vtHXC2XkyhWAHE9VLrpkA",
  "key8": "1XwpwcD5QbE332QMSLGPUQb8cA53GuAyyMvoPhjaBhdWF9y549XofSDU4TywzF4oSXWHYd2ts1XuZMMAs1yUied",
  "key9": "58WZBdKMpEiiumowzWiP1mzxrh7Vdh6HGGoEasbw69HpbAnXRoz1zFKqch17NQL4vxKVcgEGkB37X5KaYENxugRd",
  "key10": "4Peibjuq5u4V5KdT3P8oXuLwLwcsFThXTFqmZJjRcqUdADpfdPxXCNCTRvRNtq6oxWzPmdgLVAVW7kS2GJgDXii6",
  "key11": "324pGb3TudDK9uLXtgGYxaMGjXgLUfgB92kTaC79TFrunTk37fj5iFsZbNnd7jSDL9ZCR4DuXnwxoGwbVkAmdQs",
  "key12": "2CZ8WNWKiJFxV6x5qkcXL4NoCdTrjgg4dtg7tveRKVegs3A7sTSoJwZLPqfwN76zdmZxCpedhDSYV7P1uAMXj46A",
  "key13": "4y1wvYjFE1fvR43Uon2JZVitviH2gvFpU2kpVodCL6y1d47Rb4TqBka8D3MVxVoUTb5NhyaZUBaLejoLqsvkan1o",
  "key14": "4SxXqeyBFKFWXWc5uQHXe9ptpnJbqrCsywy7NT4KBkuB5RNFTiHdGH29Zy984a9oCLAWeDZUw12aV9eUfzPZeHW1",
  "key15": "4asPPxY5ZREooHzicvyZpYfyVWsTvL4xQmXv8o54XRLFoyiWbgNAmYcccnjj7AwchAAgtDDcZ7tfXFcKsx4Aj1i4",
  "key16": "5yLNBDiaGB8eqc779PtSXhi4t8SURGeVvpZ9ZR5qWtfJC5fprF3s6ZXVpHJiPFRggztLguspTr2NbgxZHHq147P5",
  "key17": "5phKGk6ZrP8Kn8NmahFvFZ7LxNQcyun9VNfgVJ9nbC9uBM9U4DxhMcPc3F1Ed78JNx8SVsQSSgoUMwJLuSQirwyg",
  "key18": "54F8JjjiWZdLNhfEcmeqnZC5HWdbxgUp3b6zSfsfzZL1rXJyFySSCifyNeg1HepxxAcbepzpPzDKUBBvUf6oiba9",
  "key19": "4ZQyT9oEoQ9pxJioqsYqUiPyjiDfSRs8o9pi4oCMdUtZ7sMwKre2wrsLYy1fZhpmwhrnDd91wxKL6hBGZAU9Ratw",
  "key20": "4TcL8ctJvDDft6nFbma1afAzCQzrBTaPkKezDkAdjniTEF5a1ZJuxBCJYJ8GjfkDXpn1bnzkNp9v9MiXYTRJj8uK",
  "key21": "4YZXZ3JaJExb7qqNtEeerVswg5JAAN94x3nduLsRMkgQ6ZAXhhNhMSnMbQUEZuoBYfo8S6L5jZthJiQDsCQKXsHs",
  "key22": "5FK8m33gWQrB5X6aqPpy4hKmffGzskKqdy9GZDU61vEsCVETATBkUGtHeCRNtLYJcS3ZBnkDSjvDTMMT4qhacDrt",
  "key23": "67c53p7WArjq7XuNr8mHtH69Ew5vogM29FKaWwVSu15NiyGfgBENN56oJWd6qQYJZ9WERGVE8XrmVpLzSeDuxrU3",
  "key24": "Y4QfvRzVvwvhFhBx5CgXnraSyjHtP5jsL6nBTUt3qXq45cmHFqPcTqp1yBvNAud3sQrjnoDzu95tqaKqW6ExJ6u",
  "key25": "xyZQ8kWwfkK48pg6s1sSKo6dxrDaeBNf12M1U8g93H9tyuY5SwL2QkuYqcXHUqwkuWyMydMWaenaY8cLCK5yz5f",
  "key26": "5tosjRS6cX2yh1HLHdHxCSWHVv3nfogsNxk5EF1Cfy4pre8N6QZgo4iRarRZh9foP9RFmRGGeGWinLu1Wv3nuvnq",
  "key27": "3TpxKvV3aurQD64G5pkHYqs1prv79CBPpj9UBmZ2mRkcwq39cjpq24pq4JN2c1198NzoPLZdegm1GBgjLh8bPTMe",
  "key28": "4CWTN61RfTnFncuTNWkgBqswuodcn4GaxNHwv3a9eGFJq3WjqDAkbotNFhbMo3U25gaqBaSAJvuNPnCxdwM6r6ME",
  "key29": "2MWky312eUeMsNxKEwxKeH8qL5L9s1wS9BEP3Cdu2zTPW3Hyhixs3mzpMp9CQrdhaxAXEbSFsdkuh9s9qRg7ay5o",
  "key30": "45KEzsK6WH1Eb8yhYHygmnGeqfhCDox1jCNtfeEXnowp59oCMhEpjRgBZzXqReJJupcVWpjVp4YDB8HCLppwuGBp",
  "key31": "3ZuhE1BQJrsSu7yZNViS7gKX69ZThrpHZAfvBXbGyyY8bV65s2DcmxGoMKFQVHBZRU3qjLetazzdi3cZbAZAXFNk",
  "key32": "5hz4Wfa9pC9X65AqrZjVygW24ZiXfdg938FwfhqUNG1ATdK3KVbU7YiWkv5vBAZZzkKWPnDiqT91naYa4uM5vK65",
  "key33": "5vCmQL4S1Hshpmp2Y3nw9fcnAWxSbhznWnsTWEckRWd6xVxmTqHA6zqBqHLzSi9XpbWcQq1x33YyjUzRc8yqx4mT",
  "key34": "5Tc9JzqXdjzqHRsKBk3ySadBtm5NmyqngUaeMYFiKmCRXpP4A8AXMEMsTweXTA3Ck6Uom8DCdBnUmpXjAmbJqHgn",
  "key35": "3TbMkXnPp94s99FGyjYDEXH6Xcg1cSLkyfEyfUDqcdeAnF6nJyn6T2goQbS97aycS2eUxP3TYs7UyeJySQW3S8PV",
  "key36": "cdj1bftKRXdtvfBgpozxmwqTzzxDvjusPPXGr72Zwaw99Y7wD8hasSYT5rCZj2qpQXYw5Uc9hY979wpNPX2JLpz",
  "key37": "5yN1TAYMbXwow1cKS8VW8TCPvYMfpZD2YQUcit1MdetWAnAv5XJv5g5QFN4Jdeiwm1gMbMEtGwrQBV5n3DtSqza3",
  "key38": "5hvb5sPhKUaLjdgAmcrnyzR1owVQ3Hg7Qxm18FwhaE2oe39xT6NKFyCCdxT11dgr8t9ZtLxhLi4xuLJ4YKGrKWVs",
  "key39": "5nbsigdKPY7VRQ3bC6ny5Ro368pimLEVHswahsa7FWgr31DxJGrziLEEJbv14A3Z8FsC827p3Th9gHZudJ7sHdvp",
  "key40": "e4D1KaVRzr4CGGvypoGTgHNodpsoZ1eTJgZ7yDWoyBjJJbgN9XL4FGXNCxxK1b5KwWRwiyTcKAqobTJKGuN9Ygm",
  "key41": "53K84mMgQe1eXCZxjNN51gx6WoFRWgmbajgCvSe1RM6QDuEGxyrKxkk3yBLKiUwEGDgiix9ZZAxKbkdVG1Hbzd2X",
  "key42": "5p1RsztZDsSuoGGYM7FaUeGqQ567dQPDNCHbhnFBoUxrxjxdyMkp2vqiYMLBUAUQZUUepoS2STMJfMCD2eKyzd7u",
  "key43": "2LXpiq2g9kSqJQtYzBAcq79zarqnJCp8Qq1pujoqN62KGwUUbCByTAaHMdVmnjpKfiGN3wxAMvR1iFfYbTvFUoyR",
  "key44": "2ptrzdVk8ESjcd7vfsMpsCeQQdS1C8pKQstXdUcjozJh7VdojKU5STEArhQHHys2cytaS4FcAB5ED49k8Pn3SNhs",
  "key45": "5MsjE2iG9cBek2BrLEHZjtZQ9Wg196AJn1jj1FxK3PL9XFuaDkWewTuVXAe7ibvX569565xB6z14T1r9sBAjk8vt",
  "key46": "3woDZvdSDEny4A4vGPZBXX5iKMk9H2C3Vtsor2gWqyYKNVYib73Jtc1Z2UM4A8wsmqe96mQLyiex8HHtEkv4N7vg",
  "key47": "3vgbdQJosHuejgrDFeY7UzA48GuyVTcs2P5oAhBmRJDrRHA68iGA6zcZKVptKBC1qLocsoySJ8fQGuvVt6Tq1syR",
  "key48": "3oMDhqpfriGNbP2TAwxet2MXWs7RmkZkz5dFjxCXyibWSYsJPSEdXXSLiYCZnLAcjpKuw1miJodGEwYJPcCmjMom"
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
