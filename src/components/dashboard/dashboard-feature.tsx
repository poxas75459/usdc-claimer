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
    "5ZMvBhZGKznmhP992TLRv1tjNQR1371WEGEsjUtXj8dDMUjm5Rbu1tWYytipHkFtwnQvre8y8UUUNSFbropLY4uv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DVgddihwLgUwmHGitE9DKh7tK81LWMdE1LbhNc7XiymTSFvH2VJQh2YbbGTFNK7YfrAegA1SiHkuyFd95hKjnBW",
  "key1": "3N1JKoW6eyWYJquzftJE6zy46hFoApFr3SEcDaZcmvPNGGRUVvK4pj21Eo9m7HY2BAy6FaPG4kM4hgEcrJu6Cx4Q",
  "key2": "3xrUHHC92rHApyxtWGVrxN8n1i94nPoqzcxKmcJbnhVLe4kjMavbxMz5n6MKvv82RP441zQiKHmTTevRT6GpsGAC",
  "key3": "59qHr538xaGrM9qS7226bnxRHrJuuL3MJbLLrfHbpn1hoQ8hDuTptKioj14BCTiG1UeBYBjRjqvdz1TSkxKNNYWy",
  "key4": "4k3wQ5inyUWoP6qJUhXc3YAYvo2Agboe8VEckzsCTMRSh94R3xMAB1SFuVs1SRwk2xa7nwqKJvp6P1DJusXfy2Xp",
  "key5": "3nbiREqRtNFk2yiNKCgVy19ytQgB4iZmyRFydthmmkLSfvK2jtoVguqKekGGYFvnjP9tfSDRAxd8nczrjqTKEd45",
  "key6": "paMdxR78UvoMjvVC79QLwQ2iRxtLcTza7raubvbwcA6dGGJVRez3FxZAkWL5W5h4NBDHcXgarTEpezqxE4eCvb7",
  "key7": "4h9MsVsJDZ8DMZ6CE1pf8cp9sWtX5MUDrCe9i1DE8QuGybwMGYCCctcH95NQRjECGekyur4EMbvutfk1HvEn6qcv",
  "key8": "BxT9cP86tvVVtBat9WGmjGNUBqAUzWQtxDLtLKANi1yC1ThzFcM7spdMQb3i5KqpVEWjHNfNLx3bajEzLU3VcgW",
  "key9": "2XVoK5xCezuzq1z5AkXBm4asoknorh4nU9ETTDtA36tmCZpYTm9rrSrkuiR4cn2GeggEqd3PHTTfBPFXggLjLhmP",
  "key10": "ENZ24f6gizU7LuEHHAwiLufeuTzykDTpXwEwF4iqEkwe6PUYMPy7tr7CpwpyY71hPztRpm9iEStFy7f2h7Yo1pA",
  "key11": "3ycS4ucyiC2sd3HCR19YFhSuHGxpgqLXapkJbtVXiFAxMzDSRdv5e4dtcR99iThFCM8CXkKUHW2MyLxrtWNPcmcX",
  "key12": "66s6hefjVHVQe9DaqttrVoXK2QEFYhiAFntrE3fo77fepuVzmjqmwZhtadqysJWZj5GeMCPkQx8HaUF4u79aMhkj",
  "key13": "4eoBXpyaNXE85BeKac246u2a9RDQZPgVo8SsWDUtJYxjRzMSJJqJh7Z547j4meeriYX87edNXFQXmVko3TXST1G5",
  "key14": "5zJxP4jhPo9S4fkMD9Dv2RXJmC4iBJ1E2F84hPF22owxed26fm62aVTHPaVrYz9Fjeia8RtLCbPz4Kb9jZ5iGg1e",
  "key15": "5VYTa96PhHsLARTF4fVheU4VVKSvhK33UXpttriBorrCqVwUcKB4cEGm7j36eNpuo2c5HFbtvBKfFoGYhGhqjUAX",
  "key16": "5UN85DUv5JZMWGh4fgPPK8r3ArkxfdWCfPjfWrF4fwTUsAqFqhQXgnXjbBgCtB61yfKUjMk9EJmFBMMLvSp1P6hA",
  "key17": "2xTr3CUXLU9KkMP6XQCnLgSah1RGa5w8nxYZvz42svtuyorre5fu5yq2E2XZubKeF6JLzJbRqXkoBFoyqcubJGyZ",
  "key18": "5XDDxXi6dVWCYFWCTBUVJLyqcfoJteybNgTM8H8tLzSmKu9MBzdf2XHfY4dHd21TXgFmgVFiJsexWpGMuughvKzE",
  "key19": "rbWxi4jG2c5RvsJCkey2oNNnvVUeDRepnbwd884qzJrfRueRvMmtfFMHX8AE7mMwBxoyuTuYr5znvLXgjf6rGRx",
  "key20": "3qGGN5YmUxiLp5uTHrFcXDH6rwhzs7sCFiHaVF97y4rxeRF18M2sPganb3E4tjEUrAdkF2FD7aefZggMWPc9EwPY",
  "key21": "22qLrU8g8JFUtgBZp52jtDaK3gjxZGiCkG3Jiq9ksvhTnjBpV8jXBkECnCxbL3nMTGVYSDLuaYZtHAk3sB6gCERt",
  "key22": "SBS5oNAZe6XwJMXt3LPKB1aW6xoU9H2TkopcsDR3PQiCfSn1TiS7UdLnFA4auC5bghGR3JCNEcSrkMycUTZ2fCb",
  "key23": "4bFzwDKQ4yxZazeLkjVQz4EKA9DKb3epBgSfkB28d6ZrYZiQ1sCfxFuCNhsFG8F7cizty8vZb9CSu37132aBodQC",
  "key24": "3hCby2XWqeiBNRYAQKsDLNwTiuMNq5R4PvWgJF9J64tWYRjg61drjSCJKwgYQqBx6fFJDFz126FZfBy8v7bdQKiE",
  "key25": "4cgbQZrtWH6RHPHu3csZFNatKN7YrCdrqb5YwJzoqyaZiRfeMcJbfmmdcApQsLCw2eKpsMLcG3G7SkWngEpnRSbZ",
  "key26": "48S9Qu3bVtnpPMcedFHhajiJKyhUPsVYoksGiLZP6jE3GEQarA5zKNXQD9znLBZWnp7Ly2jiRzRfXwaoZZGCfEia",
  "key27": "QJgaCevyvCz9VVk5VqwnXU2W8UmXfVTgGDoWs8q85pT16AoRPVBk1H8RacQLYYmUPWFJApHjSmhJ1rerPTqABFX",
  "key28": "PdippSkC7i3FxdS54jbca2Gr8UZN6FPXKaVgiC7hAnYJrHbTDZZdCAXmAtnRDcRPGs7NysdYs2Fwvqi6ANkpBj8",
  "key29": "vpa1CA7wh4Ty5ExvJXruv6rvY1sy3wwFm4UAiZx8nEdacJd8SXwXY3zc3D67FFNVt2n4gY5yYLgUXWXY4B29j8z",
  "key30": "3goJJ6sBddbCUcfrFu7KnjfyycKixoYT9ftETnMEQsnQSGM8ogerb8upwdvG5ydr2Az8jvnTzbMECgY2ystR9YmL",
  "key31": "MuexWEWRu4KaDryW6aBBg2SKKRwW71reeymKgKiak8kAuHHekj7kF1bVf9hLASmLZNizUKXyE1YxUF18hCgCME6",
  "key32": "3wTYe2c3JKfA7FSfmBwCDkcYeg8swChLwNKBHPJbgUrdTTNd9DLsYo8Y8gsbwHWo35cHDnMciXFgywisTyrbER8r",
  "key33": "VmrFytdCDWeyddYMKA9Gj2YMxAjRBhbkFmfokanQovYNhMAf4Xpb81hZKwsrzqm1WpHzy26AoPcSTw3Qs8Hckr4",
  "key34": "PXWqpp8vRcssfuQZpe9pYiw7mkww7APV3wAViBDZ3TcceyU2sjWMrbgndw1bRD4pH1iFKHKNn6Z4beTzKYFbfaM",
  "key35": "3Uj5o3d12p7M7hjnDVYQwUQEFpNJWCgZVwyoCr3EwAmhBzeKSGB2BfhavNvJhzV4ZG8kAGxZRugk1qvCv8JnPGjG",
  "key36": "i8YT88XEED22VuNtsSXHjBiPPFGJbwxK3FFZe7kJ2Lt9DJF7PqvGjm8gHih6fBrAQPGQAbuhy9FkmgGucL9NN5n",
  "key37": "5vvApb9qXxkaCph9Y7aGiuBkD2JcDWXbdSqNd8BBMCdCA5to137SKKDT4Xq8Zds7EcTg7wobRFjyFmE9UQ4X9w83",
  "key38": "3NqR6YigWTu5G8Yk3NLWvGGniYzwHPe2Fwv1oxxBqyK4DfbxBmB9ZZgLG5THZJ1x71tPRHGX9ZjGofbk2pGVeZhd",
  "key39": "vTAPH3SiDRDD5mPyr6CTGtgy6sBbKyLumVXJcmCBmtCHMfivh9DNhmjL2PRR48c7dMVQFvRtwyLW1w2Pp2RCtxc",
  "key40": "36wdeVZ1JLMMnGDRqTyqiATeJxQp8qxFCJWdEssLrDkPceZRwHQi3SVhU1coqF8uA1wAaJt5Tdp2Ft1AkddfHjLJ",
  "key41": "3JBhtUhjiYKsv9EdUH4FJPNxQFRFarm8usG4JVqZzbq4hvi8nMNLpTB4KbRDtYbK7jcpqBEixMwLgnWzCA12TCi6",
  "key42": "3No1Uge9fYy8xqMqMZWXiTx8bVxjjJLwNSzVehU49PrSC2u5J8RB78ui7pbahvX8Np99LTRzz2z6NaqA47yn8XoF",
  "key43": "5p7Wo28dtLpUk8qYjn5yn1Yeti7LpSD8n8kANBbJTWhu3tT1SyvJQJ6dFdj4cnaSCei9P9oyk4PGPKjRy2TEv1RF"
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
