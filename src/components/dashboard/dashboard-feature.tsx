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
    "22pj7BJqziY2p9pNyL2wbaKHaSixDy8cjswEh6WmiMDtzLYgBNPVnC8rsGdnb1U4Lrjx56DxgixAFs3ugS6uDmr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LQVAznxkB8jpPt6nd4MEDJNqX33F6gc3oCmXCYoBtSaoQztfjEUcj1m8KF87pSByTSiH7Ue9wd9ECt3R1RvzhZi",
  "key1": "5pffB3usvbUY7o55L6B2eyzTx91MDGkqZV8MkJfMV8HYMyhst9ujbvsVR7VCzF4rebchpcncHPqspTxy5k3T9REg",
  "key2": "2hTLcj3SaavMZeyGhoGXXqx2N2rQqVdgTekTJM5r7ep5tuzGtKJkVWGYhSYTJSWX32o3KzsRfisVg4c13EmpCeeM",
  "key3": "rPd5FEbiH1ic96KNZEe9KFoVEC69dnW8xrWuattSW5Jt7UhvdB87GFpP36xsWczXKSre8qSnCQNZemuZfbdRuNg",
  "key4": "2dThaRE6mXEck8v8VFBs1LV5HPVR9hXeE1zJfK9z4y98UMg3MeeC14VD4bvRq6amP1Ez3BwAwyFmLr6Y71B25c6P",
  "key5": "5mDmCFznqEHKggfET6g1RwVHNMZQe4W2HNHu5JhSd2S4xnLQNbYVTdsFexrBaZWUkuA83CKQxh3qATLFw9Wu226c",
  "key6": "51JeXTSeCjPCtp4c3EydCmjUZMaKR7Ece2w9ivbA8RxdHLwEWaeMxAsF1bSpEadU86zbnBRRJ7ghT8JqHvtwQfLW",
  "key7": "2Hgj1SfdVVe78WU5kRMiDuTQV1YMMDMMgDEE11uKctJrCVFGr9ntzVFcUnEe814BTMdXLVqtJrsWUg4aNbKdYuvx",
  "key8": "4RkM9t71uocAHzCvVzpMWATxGgAYibQMZnt3fYDZWChk1jEFjbhUP7tsWyEp2HRXgQ7xKJ8EvjmSZhZ8k794ziTR",
  "key9": "3bx48RzSC66CVPuGa8EwcVdAJ6bQHHhookYpG6umTw3fwQsLtnmDAb3ZHArxgedDT8ZDTQYjj9WqA6r4hMvdzqEj",
  "key10": "42bwXkS2PYg9NSJXc6s2QsfE8qNZPMzu2ibngaPv4Z77RvGpPkLEXuhjhwiEQzGsHtJnXiZEkWShS14VUHnSvbLS",
  "key11": "3wKFPTrzazWMgrzfpwGHr5F4skzp4vTQM3DTBVtuQ1sfZpAjueLtA5FdC8NK6CzUaxKYNYvQQe2fzoVhGzf45J9U",
  "key12": "4fPo2fyuuxQJPb2ugJgB94FRPAtTCmRyZtjnor1JtYyMD6Sri83sgzjcg97N8YT1TwuS5wwCYhBCXuHxqEN4nKMP",
  "key13": "5gcTU68H4Y7Mh5JuDCABiuv9bWaa9zRau9wiEHPSaW7YmkgaLHhBPt39RuTpC9VXptuT3m6Dv7s8iH6dAHau78AL",
  "key14": "3NjejW34b5yjdXFw6Bv7gc1YxdytwjjdeaVovjFXanJHk9wYk3hBUZbL5YznzmrmjedGaS1JC2UCdPEjgmeve1bJ",
  "key15": "5eqChqRDBAuXdbUzAqW9tGU9PpphVybSsFTg1TsvgPy8rLiMHCa43CfRMuzAnmiGQhicJKnb98jKo4aHocuFcVyU",
  "key16": "3RncjCyhgYhRz7VzUn9MvPvFZW5asfXwSJzwtC6KyKiheqXu8XX8bWEBvzbofzzujwZTVNR1QhVCu4H7svnJRthD",
  "key17": "2peyzG6AAYAueMFdd5pw8rYWCFTCae8g47JqtU4Z2ik6rtfjzDXS6b37eGq19MvSMBgvCYpj3BDyZzmetGktbA4U",
  "key18": "22ykB3CjwDrcqbUfpJk7qYi1mBsyiutdyQfbTuc15ATpPcSeK3E8TJYaY4HHHxtXy4rcis2UjRTYhki1T1bEL4sW",
  "key19": "GGnZPffdF1NwugPhTe6EAQerX3xQApJkGWtDTdeFz4RkyktaaTUauUAKoaV8RUxLopKs2MbDNjKkHqvt7rYHCuS",
  "key20": "HSqa9ahEi1m9YhYfQ4VKzfQfRXc7Sv5CTxokkPu2opH6wgDkvqjr6xxbGHzf4YXXXoNk9TLcrRZhiReaGcXSvEv",
  "key21": "rucXuzY6wwXGDYjVig9ozKTJs7w4BTpcRniTiCXTRuGDeJE2QCf3YatnttszJShZqxFwFJYbcJdEEjzNwXBjskj",
  "key22": "3AWcp4t4wnT84oiiEBPyhTXuAYPoSQn7Y3JTMJ73TstT2Bsi1NTzoaWvKCyicRJVPPRhZ7VBiVRNGpX4rjPrRjFF",
  "key23": "5XVHBfyQAaR8cGNDEaSA2fBs5eh3nS2fUWXB2jVpEfsr9rfv6TT89cARHwMFE3MyTKCKoESyikbcDkqCPtTk6Xd7",
  "key24": "5AStxKajXhU8H91navYiwDK5zAYfeSnsFMEnjp5ud6DqSoAKLpjwGRB2qg7PuxVxNYTDKBAVML8m5PwRZDQzbk5M",
  "key25": "668KTNjQWndbqDA4fY5nHkSrUiVuABfeGEQMdGXHHvFUw5r6KQo5R999fpafA7s245ft9jmaSJmsfbRS77Te5xY9",
  "key26": "3TpMUEmjT1KqjohoTRvFRxPPSVmJQm44sErbkb1j8mtFQYheLvvmLRvhPmw3612WnAoki2VwZ9fbNBe29o7SZqSu",
  "key27": "UHRWy1jSJiznPPRiqsHsPiLRyiyfhAVghq8k6KruW6DFNqs9owRLFYCXMaXQ8u4aSnHbpx5K41H7r9hGULU7Dky",
  "key28": "miEsE4M5mEhmKbe3cWPdjckaK8babmE6RHyNatQ75PVqdutrwzznFAU1W9eu6jUMJPDpaTjcraz5YFkWiDB5g9y",
  "key29": "3XiQQ4khh19yRP3M97QkGczzP9Bn2zLgrji6uxmCNArah2ErBKdwkH6pvY8Urzm6kbugGFnypRjxnSJMxL4iVhM6",
  "key30": "5MiS8WwcLcZZbxEzXJSqGpcwtn2Q4y3AiNWWwgtWpS154Ae3xCtHWBBBe4ETMFfRsSy2Cz8dFvZtKvE7USKcCEpS",
  "key31": "3Ve5Pcqab3KMEmUhyyuFAdU79ycnAo2VmqFDPSqkyCWhVteds8RFcKpkFvCDKwfG1jskXUisu7a4MuRdUZADFf69",
  "key32": "4XpW5DiuAVrQoHyHurk3M151sTHV3csxLyKgWRMXcqQEhqKiMVLBsBj32RZG1PNQaDgzG3SGkQ7AXUPTxmngKuef",
  "key33": "3VhXbNYYeMgSjG4xXh5UgFvh9eHSUiQXuhoL5dmJoKBDV1MaYdyUd5TteNWgRoiLx3uX3GHxCjNQadWxEp3mK2ut",
  "key34": "5c2JgZHA4Rzx6R6Jh4UhWV5yC7VCq4YkisUnMMtGYv6wXBUhj3bxQkjyd9twBpmvHxz3dULwiFun9JbV35JzreUj",
  "key35": "HP1mdGLyWDKt31JmvWpmC3pR9KgQNTqxKjhqzkzweNQF6zyoQjXrNtccFoDFzVcjoKoe56yvnHgwtZLpD2MaS4y",
  "key36": "KTHsmQAuo1CFWoQ3VsTpRWGofgLgJc6Zc8HBTLHyqhn9cVnMDSBGDUzRFNNbT3TCfWVfT2zQncZmxGUsMZS2p7P",
  "key37": "28qSdA9AfcUUfkuYDgPsdhZHq343PPtjrar6uR6MWDAgvA4JMdazVSvP2Dc3QGN2dsQCQj5Yv8RadoumN3MduFLk",
  "key38": "5dswuZsPTRpg4ucSTxpdvP61qp6neARK2mzokQ6RK6v4BzMv9g1aiqzf9UAfzEfGvP2JrFigGYRrH5WGEhQ8AixP",
  "key39": "3YwpZnNuiVWTMPiHeLEn2mHkF8rDTq1imomozFqGXGJrADVhm2VsM4hzG1afeeHx8RFpqqEqsH9Q7NXoK3LJdnG1",
  "key40": "36oXWVm1y33R4QM258uEUmvvEX8FMBuuJWhNvwP8offy8MncjZNx46n6DC7cJybrePPuCn45LfEbxLHJWPZNEYXK",
  "key41": "5Z5ooxLY19qrorT4odqMX5Dk4u8oQJE7a8Tcc16TMpJjudVcsgVYckC1LZ6vAD9opyNhKvYwP1fRUQAnevveVs7m",
  "key42": "4f18aJ3GbrJjbEt75koAhTCkeVPtdvFwx4rNCcgDkPkyYjLnsNQrPaMP8kiWbtQsCC5n2JFLsYujEPjJPkwkaEwy",
  "key43": "2NizULa3yGU9dDiiu8acvz6QR4upu5eGRr9pvF6JTk81L7KxsQaiNMSjuCDooyYsgaB4yQnzsdw4JM4S8ZzLRtVA",
  "key44": "4ArNtit81JEGGXfQxyTCbBG18vdJGAjgY5LYKgp1GmJAuQihpNjBLvdY1Zcdj4TgVjsFYWqsCDvLR4yY2UBoWM4A"
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
