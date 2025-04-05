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
    "4uzsxZFpPPcDmzhacZ4Cgfk7aVs8UVZnppgrR1BKitYrniv9bG25pQfp9a5LxozDPXvWavc9YjCxxACHnL8EwrnA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EwBVnRHgDmPz8ug6fdvuhLTVBLdpCvZJ82tgPuZmJC5CEq2mjt6bSYzVGyNaPxCR57SELonXSpdspuy1QWD1rj9",
  "key1": "3YpThrUDawJt4WEL33pXKqsHe6YnQGQiS1yUpXh4WTEJuM163Zv6KSQh2vTqvg2pEPCufSRqn83ZbSKipzbgFeMf",
  "key2": "3nG7Gg2q54DatJbW9QqBZ3EPvSEWpzTgdaW9rcPd33xPaEhGNxMt3YUcGHZn2SRrtfbmSfGrvNFFVaFQwEwBBJ33",
  "key3": "37h6oEGcPcmSWa6VMu2FpjhU956vRKXzH4T4ndhervgFq4R8gmrwdouUZY13maXFJHt8Dajcz6sJEhe95G1HZFVM",
  "key4": "5s3hsu1eDrxjE4nV3PEZUd41ayzMwXrxqzCLbgbNikBz3X15BYauwQqH9VzwG9Qh3aJLdu3ivTYJ1CtheqjcRoHQ",
  "key5": "5s2H8PaKavfuCYdPrf4A1WAR5wGuM5wHA1bd5Lbnftgcnt8S6QvDjE155pcrMSJdb9NULJ1xRoV6b8qVFcd53C2k",
  "key6": "t7qTqDegZdnFL6n1kHm3sKPDbqkdW2bswZqDbTxHY9nQYjkVD8aynpur9m3ew8LDW7y2qoABRNoU8PsyadDuTy2",
  "key7": "27Njwk5MQ6nRTvw9eYwpCvsgpFNuhqTZR26QDAs4RM9ssaWQaq8CBykQ1mAq9Rxtrwvty4yMMTdr7KUzQK1oCzmZ",
  "key8": "5WqjV39RXSGvhJXDuUe8R81wvuZipYXkNSK1MnBC5frNySHFMs9maK2KAUBZND5Df4Qr2V7XbmFCTLMPm8yqyf14",
  "key9": "5s341QBuACw1tR63tJRGLntqvK3ZqnoWRxu52uDDfLFTfoK2LiXZPujaPHFQrcZFnEht3uQiQq7nFHbdazP1ZYgY",
  "key10": "3LYBh1W2Drhz4ZxJFNMMMJzq2wxRPxztcHWDJjH5GAdHe2ziJaPzpHhqfmPB6UfcxB2rusW7n8NUgWgfj5bh1tq3",
  "key11": "DxEHGvi3udUXGdjAHZRrtgmwQ38khws3gj9i3V5tZqJRJTakmjG1LXWQMBfDPkoLMpo5CVTiE9WipKDsPyWPcif",
  "key12": "2Jqb6r8NBQdZw5jpQBR1U1vX8WWrTDLDEdtUYfQairvm1f6LpPzYgkCY1BLSzzt6TU29364gjzj1HXFZ8FZZ4qsP",
  "key13": "2rAMJKxEq3DSQik8EpN2eNX4TPENcpjyN1kr4bTAGgoBM2HTG4MEuNBna3hcsAzys2RnLLJ22189NcVHUCk4kxmN",
  "key14": "5ZwFfdXY75YSBJarhVK89KqR43EzyjSDtdRNFwNMbJUPzvnHrxbWeukJJpzmNJSmuadDn4W1SoNEJMXkeLB8tFFp",
  "key15": "3oxXtLnK9voRUqzFSumNkMpdkjXK2ZLENLM9Urgbto6CWPAeYmpPuU1XE99eVTqdJVk1QncqnCbVNMAmtHH2AobF",
  "key16": "5DQEZqXWH1LYLUMu5DJHTPnybSWkXQbCGsumDvsFuuxE2GMzfJUWEcci9mNQu8R3NAyNa1pjoWEEr4KkomMR2vCj",
  "key17": "3bME9pkCnSZmkGULY8tEmSPhHAj9P2G1BS1V3NEQ2np7qprTh4gjZT7sWqwUKpmSDi5FMEbs1UZuA2kPQ2YieQ8d",
  "key18": "2Q4hsq9tPxUbb8Z3KXL78rZ4BupybYkGUTveuQMMFszQqhLSiRCm53ovpYWvtePzpzL4w4PiaK4PUngVrJmm463v",
  "key19": "KxVgNuNS6GFQkaXjS9rLbpggmNnHKQNqLPmVo8CmDPG4uKh4YoTqq7AvvannZkBXvDfiSYsw5zTfM9z6nju2VXj",
  "key20": "j6tuZZPwyh58CNQRig4EJCwALP72VRBwUrKJoBZapjn72sr5JrhePD2dSUfQniiKryzecHVZwNjvTZSJKGDMi8K",
  "key21": "3QkY4oosdEusX9HXRKcW5PWny3BCtm7U1W7mfhsKwDMsvJ3HDGdAkKVN9huUmzQW7EKb3VA9ZCW58gkjWQmbYHVC",
  "key22": "4i31RfJp2uRKS56e6Mx5hQqzLSkqtF5mQgAVVeFaShqXSCw6jxmzxTZmyg1FG4LKzuu3y3aTWGh3CFDeCrwQAY3p",
  "key23": "4epWFW7zfma2KHujRjf2JEr6vM6qxoy2NTDuRdhtwyb5Uq1VaxJJ7utpQ3HHEnL9RNbsgwhjfEdkBNKWd5o7RTc3",
  "key24": "66kQKMV4d4DbhyNYYS44PEWthd8m6iqpxMMFgqwHx7JvGt13jUpJUaSWJr6JsxMvNGp3fQBSyE8fLKmCYHKuJFf5",
  "key25": "39NntegWfvuo9235cMPAAfeRbVUoNxYqYtoiVCyJW9tUYQcRHPNLFWgNVz5iTyNdGe4tvjwJMcT8BhbRTBr4khDF",
  "key26": "26Mmd5QrnLXSTjM9axC74AjasAmKjfhEcQ5tPtRbSJRyidQZjePJmtyoSMWD4PkkXcv5DN8GbQ1bjiguUEGr7suu",
  "key27": "35Dg9obgTAwYmooAqSSX62jTNDX1LGRYJDD11tf4FcREDnVNtzfLBE1dxD9PJEKdgBCCnFnEjm3WCr2JLWT9xref",
  "key28": "nJ1qtVRqRkzVQdikTFiVt3favAKf7BL9BYMqs8c2YTer1Dv76ZiazGmonzr4a4b8X3GRYiM8886bR9g9FZFuENL",
  "key29": "3LU1rWB73cPLxH26Qy8rbkR65DD1HnUfeZwgGTdyeMesczso9v8BJjtdGE79SSLCFz5Q4U1YCfabnNSjJiGnpwV8",
  "key30": "5aKDSNTr6S1TsHzD3gqw66FyaxBjX1yKb6PvLKr7gM8iipzMVeJsZTbwq8LgLhBpSNojRbterSSWv8snJBvkiaA5",
  "key31": "5tpbQkoYuxJ16upH9HZoRe6mWYvDW4DgM3kuuS1En9W6nyvrvYLfqjnrMKR2YpTMRw2dE8AuJ52itVaxvVQd3ChG",
  "key32": "4Ne5JvoPz5itWFsqF671KRYoBjtZvbMKuvWGygN8URQRyfAm8diHEFmj2hDpBNTyNxcbcWCbKLg6d6pb1d1MEgPD",
  "key33": "3fFmAi9kv75xERrJPgfCTbScHfzNvqFcFc62h7gxQsFfj9pvLrnQWahZM3QZ24ov3G8hFh1uoXtmvTNx5vzibW6f",
  "key34": "2FtxShZzWR6vkc88CeujEpVaGxvgzGTXCd4kAJemTGZYFsVYqebXCu5e45ersqrT62UK4PkfAkKzgk1TUUzdfMAT",
  "key35": "5PB6KZWRdtkvyVZxKE5izZi789ysdyFtwMxAXd4c1SAhqgQVyPqUk1GXS9pJitToDwGPwPSkLxmRDcu1YEfM5hJ7",
  "key36": "3fbseXenJkAsmkH6ZZTShRTEA9PFeKogJ6SLdWVUjRhvDtgSZHrHxXrq9Esag1i2y5M2tFYdcK5u1TLRRXFVpfhm",
  "key37": "3DugWmmEpUcw2oxipwXKSMcCdjKRCY45XK3oFU1SmYUBtkxeywnh7TUNeZfHxZRS8z5BMhQppTDvK9s5GALsmDaB",
  "key38": "KC8rMxSP216F2ERLK1kQMR4okMGBvgxpoqhvEd7ZwtxfqbVgWP7Qe6Uua4pYFFh2iQYsLjBbrvqR6dZSQaUDrfy",
  "key39": "2tA678cnQVG3NHd4Msb2AEUxzEaPciBKWpasXKXNuhEo8Tr71PuNvFRqgfqXMDHaE7P6wJTZpMWq8bE1Ga3tuMTF",
  "key40": "5ndiLzJ2L6FiXa22TLwxc83KGLw22BWY64eYKQeGZzfmQpSqvZ3Bks2n5QVQ5SKzfP3ygT9yS8GeSwxH6C7J3TTL",
  "key41": "XLVu6A8BvpH27opqFktrahDQ6FxhhxYHx5m1PvLVatyPQe6jhGxUrRDzABSSawTVMVWAJziYipzDAYuNZ92wzM6",
  "key42": "5oqkc3to5tnKjiXXnyXwMBz9aus8SpQX29xzbFoTUbVoz9PCFZgxUbuNitWv3B8obVqD3frGTxqF32EroxCq5t86",
  "key43": "7mKQoGmq6U7nN2nRguH9Wt1bLPKwadxc9ZbwwitWFVb5aeNhGeQ8vo5xmAdX4edmsAkAsYJVUhfB4HouDSMVNhy",
  "key44": "2XmfgSwZokYDjqgsGsoeAeZwYueroMwaagHRvdcn43EDofcht56R2DWN3GRh39PxQBeVPQE4G6XD4MazLgDaHAxc"
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
