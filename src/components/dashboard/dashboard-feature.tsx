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
    "3ASpAoc2DZPHjp4NbbzfQ6FSToUR8XbUKyDdcoC7VXab3LBnfbxLVS2SNBKcyYQkgyR1APVaEwap6LHnSZDZVrmY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mgyw4p8zdNQdyyUwhPP11NCQsdouGVhViyyYw9f6ovTe4kYeuR9mCmZB5kdiJcwH2gwzrtd3rwZU49ixmUYPYJK",
  "key1": "2TR3siSYyERfkvBzdWZaXW8smGa2RqXCvRxCiqG6vCtYchbNhq242MQtamqrDy8C5NutdeM2bd1D12HnMSKcDHr1",
  "key2": "2s4W9coe7ejwkz8WKWxENkUsp7wWRr6GXBbJzo8CuM1DtTXLkVa2dz7mg13SZbvwHDzrVQSu5HNXaNCA2LjCCEQA",
  "key3": "5g1Wb9jvDTx7Wmmz4cWaXcw9LASxqKpe2CvcYRemJLHipPVU6ua1TvPfbHYzf1whyqGUPhH9RVJLYJ4PdUPvQiE7",
  "key4": "LV7UFESyPFxmrEcFkf2NNPQez8njbCUgVCmNdE71auD7yrLiQLpo18e5bBm9cEW5dg1AwFojNUx5TQgELNT3jJ2",
  "key5": "4ovnUSiTcxq1cNqEKc7AyzTF9GKx5H35vziBiEb5E2J7WZYQvgHCgEn3yLapPHLuBmkfYfmotmhZGtuKVhgvtkx7",
  "key6": "4gFLoowXv8u4FAH4KJXw7xWTKjuguAjYyn2UGoWAN6vyjdq8JXRznDLQzjw2gUx4prY3WuxNr1cbmxv2MkLEgez2",
  "key7": "5UCiPtn5iyYksQCWb7jyRtr4oACfbzGCwJM8uc5yRDE4pfWZGYyKw2scvhBDdZFupooWgXWPcWTfdJRk9vSoHkVk",
  "key8": "z6CNgb5UTCsHttnKPL7s4LQaYMh5C5qFFFcW99W6BaKk9AxEKJQFQSgcwsHZJvNx5SjjLevApjS9E3h58FT5KDt",
  "key9": "5eUV1hotKHFVAhqeaLMvksUu4veLRf9GV7baNq7gQXDAGUoGMYtpsuVUir2oon4TNwt864uAAM6jDyYyuYgroGkB",
  "key10": "5pMtHfBRrxRvm4Wz6pX9P1cuidJrK17cVPbbKwyy5FB1uE7y68hCTdFvmG4sELobWhXPEEs6kZvmrWLsWMBsKps1",
  "key11": "n7q3QETjnaPiKy6QJLbu73rwaPWEPWjZvLwLT4XEo7x3vHnZpb5xzkBEV2q4xpvmDaZM97un7mzyR7YziUrM2cC",
  "key12": "348XkjNDXqu5Wzc8rq5fQ5DsGZD6WoRGgDMEnyMj3gL5afxLAPMGhYHcPAcXVRmbQjQpcMHB62jug7B3hegg4XF2",
  "key13": "3aaDw9hES1FVYhtmRxQninvAxLTXv9cbRBkSLRczhHqCev3FREFwVNLXRjE76ANUiqnDdThw1rnhkGeJ7qvmFqZC",
  "key14": "5x6bDQrTUc59RBhDZqbHHHcCqEKwFLGyAJZrixHAbqeWbkqehGvWrQXwA6wHTfYDiCB7usE3G4JnNHFgQ7gshvKP",
  "key15": "4rCDLsDf79eD1xxieoPdbdF6TMatCQNL5d8MgmqLrNMNagi3dMRRrv6Rnatsy88NWATuMUQRpwsCnvZWdKREwFr4",
  "key16": "4wZiX4ojgXYpaGJruHQei5CRUCtySCsNvbHUnXbLLHYKFbUxikcahe8mt5TZ1EK23C5VeccvqrSKJXHyQVw19J6N",
  "key17": "5jpqiH2NTDpDK5jYs5XJLxU2tj4kBjpPUQJKjUtxGxoMtQYrUK3KgU5eEA5FPmo5idkQhVGS7g4qQ2fMWqZ7tGhp",
  "key18": "57bw4TzRJGLZB98QnXTQ2eHFNYx4i1U3ywgMeQp2g8JHBGfJ1dgRGd6B7mVHtiTyYjYfn2N1QmD3qtJYX4SAkN9d",
  "key19": "4MqKrYkQjxcwaRxWSA78L8TeGFKL9obhQ2xChfaab7TAL2DHGoU6CaQdRGLqjdfn5DX21Ftgks7As7pptrZfvzYy",
  "key20": "XHkgtBmH39j2juUa2h44YtJhhixX2SmyD7LJcFJF6d37SrWUGGBdNEDZAhkj3nXHBQgj7V2JbA5ZFs3vkVsm4eu",
  "key21": "49xfAa2DF7wsUYMcproGpuAL4TPU51vaoqsaVSqXHwuE3omccXHcfPHwSXn4xksGutZNQzJSsVphLXFtpLTYT6JD",
  "key22": "3Ewe2HNvhQfzZPpecDgN9ZAvRDm8L3E97716HKDgswEhMx6dCUjAkrXYY8ELp2N8Gm4AyjAGZSaWr2pqKorkLWER",
  "key23": "3zRHcSWsfkSGN9Kr3h6ZjTh77ydTYZ2X2ZBtD78Q7BG35AzqioDMLWJ4ctF3ZKgS6JufGnnAbuPUJpW8s1aArQbr",
  "key24": "3c6xuFaGJaLxHJ2vyWDGNjR1BnBJUiXpoKhST5yV89Rfaf1tsUEvMcwfFGXat4oz8ywLL5dKRuP5jE1uKgvJ2VAQ",
  "key25": "2aRHwJrxZJKtoaCWAiMQWJSGVFabLxJ7HUC9jvhoAM2Jf1TnykU8nEU5o8ePySXTGf2N8fwP1vvAWGhn5ZxAum34",
  "key26": "36k9B7MdBSYc2DwjnLqLqMNpTe8oUwgvD2TgoUY2dvCQpKM5gysMNVVCcfxtnkPiGoHK563Q5HWqTaM3Nwh8py2j",
  "key27": "hFSZY2z7tWNPfSuHcsAdAXjbuspzUdxjk3mR1oDLkawLDrRbwMa8AkQfJSJstrLWL2vhkB3QwTZGvaiVsZYfZGj",
  "key28": "hyXRmdjdVNUi17vcHzY6iM11wkUw6RDwZUfjqj4ebbCACpdAxX8pYfi2H3qFwyB1twBt3Adw3YS389ozRVvsS2h",
  "key29": "oqPfrmficug9SLBZjvEyaXhJeRJGyDm5kmSQktdrcs3RrReeR6ivHUwrnaYUBHbcgejtqEiL2NUFTNXANjXCZv3",
  "key30": "5cdzb2f3kdpVxojt6aVyxsFNC6XXhV5hDVa4HskFM83zoXMJKnmUmQdyvwFp5jik12hofCNsFBgxULJiNBNL1cNu",
  "key31": "rsUP6nM6LE8k7S8DApmgN5gao5DoieFUetWoheKqt36h4hH8x876uwFNeffjzJCJjU7h2d3e7yzqySERFEJV3JS",
  "key32": "3mDhvG2RMMSJNWvuUfDW8QvABonvuniMWC9tMBwTf8BWCfSmiENL6i8Ejq4VfFVA8r5FnP3gVJr8mhUNdv5Gm3Pi",
  "key33": "3GDdzMoGbVvMrFMxBnsYbop5exNYC1z6uh7poacMtCnJvqXgjuxriuFjpQT3a8gjLo9JfHENL6nVdwK274MEW7BE",
  "key34": "5EnGFigaK4LU9nqifEzgQfP6EGQNfvS9tPXp8w5k9zxMAaKdCKzcEmttToFdyiGcvUByL4T9zx3RypUyCAeSkdp5",
  "key35": "5UEHpnYumb8jR7N25Vn212ojGWHtNw7y4Cpk8pZW39Lbm1AbuQeqJY4VmXEZx4DYSSHArdfumixH1sd66dU45gPF",
  "key36": "5dsfgrdeWTjo95EscFzfugo4fEm1L4ojft2wCjhjoPC3iDwswuSwBWK1KfHdimRGkdCgcLEyCpe8WHrFMXdJPayd",
  "key37": "3fADU7HQK8mNADBG7GUSSunRBY4EBz2hC2kYFN2c8jtoRdWSJ8TdCeJvVMwfoeeSfhLRqZppfmjVq9x12m6yY4c7",
  "key38": "5dJpmrKy7AEgMoK5J1AhQNjsZMKYcdDA3Cd5josxDhMKztsnsXCj2d9f3ewCLg77bMYytiBTumQkzHeZWR7ET9nN",
  "key39": "YihKMBJBjazHRLDWPuA64vSyhy4z14bPBbsUVqRNuuhoMnJFAoi9KFqYSvAktFy3SUDRcwMjKu5FCm746gq3oTu",
  "key40": "ihTrECKcae6z1QgjkWpuUR8VyQqGJW9PFCZVoysjUZFU5kPb4mKcVuS8JGmjzvpGdGbo4TmYjnXHhcJE4Yy5hMz",
  "key41": "ScPEYA7AQ3YGwQ9Y4AcG5PtswYt6AtTDxDm3CgKQQ27rA1XuuEpSQJwbPpKDHyq8xcTf4icA4JrgxNhU8KmcUnS",
  "key42": "3DJs7tWB2wA97j9DY5AeXEcomxneWKUkk1eMJPacGJR2tNogcLPxusH6x4R8G7iJbLEr6Lz4oqMAMAeAxGJGdCDR",
  "key43": "3MbC5Vxzkj5skJN6FVkQw294tzCEMoZ3m2bBUXJibnsWGLw9io2hd2cBtVVFiXb2Qvz6y52F8AeApRhGuBNE529A",
  "key44": "2QtpByVjn9NMNYi1NvmavhENBFKtbTmwpVd1JTAFFAf8oxGCbTmohDSRWsk1PHVNRke9wkMnJ5nKsCmWVYcMwXWp",
  "key45": "45myGAPddoDVPUen35x48RBED7aZY8F88Tii1tK7XSeyvizPBGuvZB45TYhtfxshVteA7NqUtDiHyoT4Ck9ohx3c",
  "key46": "3aBtvXtPgiNU35rWeP2DsHfJwkJrbYonupEvhHSsjQzKSg2hZ7u5qfkdULG3bXkm36vuM4LiKRqbKpJgByG4Rmxh",
  "key47": "3tmFbYjU7gfZ3dwccVCHEWXDEWQ1Qomg2mpCaFuKHaMM2YQrpHr8gqyEh9o9c5N56D3QNmVQU4hENMKxQpsFDtRW"
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
