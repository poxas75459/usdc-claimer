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
    "pWd8eWNukJSuJE1rXr4cka1KYYZz4uL649ig9676uuq8A5EDPafbMSagEqyvfbJsexFHYY4kNS5iH5LJ8yugGmQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YqTkJEHzDaBqRwdRte6a7P8mGmqgmPw9FXjq4ZTm7Qrd3ZpF3ErmYYdjFsUqJSi889rUCybG8N5sS4hrrrFjWXk",
  "key1": "3gMFzDUqbvwx5NwNMDTF95BuymQoAqBy6q4bG4cWd8rFAXjkzSAoRDErvHjrYHhN6H7R6x4kWLmQSzTz4muA6ppP",
  "key2": "43sBt8sGDvMWx2RTDNMmBvzbhhYmoU5iv4ypsBDUALywaFeCsqZijVhewmQfCtEJ3AVbREPxpMCqJPmqTU896YyH",
  "key3": "4srBxgiXkeiR3wFs4cSfC3UX2ik5EpNMiR5sQruzqwaoM1hy7Hp6Y4nRAzL4YWPYzyA1SViWwHrcBsZkC5YnCk4M",
  "key4": "4zDcdq8JyyaKLorHG7E3iR47o4tQyzjHCS7u7utguUGMfadGhrtDL1wT2QK6t4Y1p5HzCqhFBCpzijyGRuywFJ3h",
  "key5": "5HLwe24jc8P6xB2FD8Bnfn6Ufyng9dbSdGmTcyS5B1uQBP1MxPb9ci5byWC6thPPVp1gi6jFSSLT7BhVwK9uGEBA",
  "key6": "2YKS6aokPyFLCkZMCY8xMYZE5bXQmf3Kv8epMbAomaB5qzSz9HxwUGGLHXWqZyvoCY3DdfuYpRJuvmu1iShrpkFZ",
  "key7": "7kKSJc8zgm1JVaw7H7Wd8cdrfoYb42TMwL1ZyaT5LXVQUXch3GxHhaV33kdvaqCCkNvNzGGbYzCajKYF1CEKX8j",
  "key8": "3pfse2c5mxTeGHtXWHm8ysvePZbRPYUHcvFMwDrg5DKP3o3XMh7cJHRgGCdFwwkcXpxLaVye3JTgi95uRTMRE4kw",
  "key9": "5bynq8jkC1VmfUzmPbpH49kBKxLvHnuf7mw6naJu2kdissNDx73hwpUAc6cKCqUNc7VxBoDeSi8cahTnwKDLgnRs",
  "key10": "46CCHa7aPX6jFtCDV7G4hpekeNBhFUFV6YYfqPG87v8igmjLJFrDNSfb9TgTgapQd37VtnhoauaVN5i1rLcedtcJ",
  "key11": "4FSmubAsoLBQypxnC5KsRSPKTqNq2BnZXREdncjAMqSXBRBjWdJDBuFNtHWEUrY2v4CRHBzyDmQQPtyLxxyApWvP",
  "key12": "265VzUdaW9dZbgaG7E5dKjLzL8EVLbHLMFrQGKiKhntQzxySLrcY9Jk9FbcUsJ6uuDDnqLWVsqPZ2wNg717j943o",
  "key13": "3MudjY5rvGFgqKAXbgrVNwXkJfrhbMmGEp69F69nMeKK1i3LSRSaAvZ2KmAfZCbk9KJufvJfP4k7KKyvR9KBoYfo",
  "key14": "4KTSh1bE7LnUgCm35HsvkHCCbqForm4vyHbqVqrfn7WqXcaBeMFJiHHzKg7zo8pswPsmPxyhxVjYm5JBgnbWWjp5",
  "key15": "4NiMwCEo2oBTTSuqhr5M58f5DGJiqeQCi74TDoQBMiHaSsBSrFf7EXauovTVSzf1e9BCcojLCiWQ2egEXpECeacz",
  "key16": "U4UgFFqmT4YQwyLC61PSeXNo3K1ibVWGqKgNsFqMMGwT5SHNLw4Y3itCMHqdfWJWnVRxPe3GRnnXPwyrxrTFyy6",
  "key17": "5Y3AhqusURtNXnX6nxoykVjwkTjPNWeHn1qizFVQCoKYy9Qeg9u3CBibKzGrADkoiqPyra7PDZQdpCuihwf6Z8su",
  "key18": "42v5HdhRKfxYxyVsHMx2NEA7VkKGbJsXSxYLacDgMf8Ewr1PtBSBLPysFoetLFJsXpjHBSVtkYSyPx3yP9dVKJ5P",
  "key19": "2Cap29qfpn5qV3sSJLKNvwDBwZBWGi26ps1CW5SuojEkTowz6mq7rPriCp7N8hpB6LAavvdvb5hyYUHpg44E1RGo",
  "key20": "25XCYxB95DtV4rBjoLPCnbwrv4h74y6c5LgZ8Px2hNYDEwf9uSRZC71WQeZpothd9KDrtYeZWLjf7qJFspQXKqKT",
  "key21": "5zKRaadfpPNF8e1MuJLQgX8KWLQC9iU7rxw8sdDki2cQZ2HTLnVt1iLMnfPVAhK5apLTC6v2RpBBEHmkg8dZWPK9",
  "key22": "8yCwvj4m1Dc9DJ2gCuyfsVK6P42YtXT9MjMgGpT5iY3Kk95VU7MHSCcgSknFzZUPedpuTZTfivH7KnUnjkcTq1n",
  "key23": "cKAeK8VszcDU1TJUr9pdJxMTgA7r9nXsQSWopm3PHmVZaaeaTEPJAZg1ML1EgcLa5QPgtoUC2QStj7k7tjLWacQ",
  "key24": "2pSjmkNtff11VrUyPd6iemm1zTpQoQwfYPxycSyZySDP9L1n1ChCCSecJ8G1YgTL5iDnV4zRmMeqVn1pSvskocLw",
  "key25": "AREYwt1hvbhEpTpb8TDv1t3QHgbXjVWanHhZp9fmyKA4magoUF6KjV9pDADwSfSRJ4Pzpvh6siXLr11n25fQMc7",
  "key26": "4gPFHsD2Ts9yiJA73eywGMpAYeB6bT95PMj2ZPqVkvbt189u84pWXnz7RVNKK4jFMTWbuXiekriSNs1K2U5snCjL",
  "key27": "3654bAcboPLNxsSukUBM4E2fsSnk7cViAHBCvtECczNrAbu5AqqX8wj2b9faZ5994ihpuEopQuADwnkCeqQt7kkh",
  "key28": "5pwuNy11R3Pm3N9sFEMuzj9C4QpKj1qLupH5sv1UpgChnKtV8BvWrwX5xAyLt7haYuSbBQ2JwGqJAwfynf3YurtB",
  "key29": "5XvWr4qWajT7QSSjxjGfAVC6yFr59FxpMg1sJozW3YPfDvk3Y55toFrXygn6TE7Uiyd3CZED164JP2UU1AhLfoHP",
  "key30": "CrD3UrFcGwhWRyN7bCMoQjKnaBDaTtBJrnZDnjdwL4nMYHbpLESYCmK1RCh4Pxqo61qttzczBeFjxG8MWCHoEZQ",
  "key31": "4iiQfUQDe7pG3eBttm1SA9rxzfGaPEfuNxasXAyi6Lv7FH6z57Zm3YdbbWgw5bQajaTvENKpz4pbiHnQmCwoEJ12",
  "key32": "2Z9bunQ4mjn5uh555hsnv89YAG4xiW1pwvkHdL3ifSBLtvVE9Drxw82Ww4DjwUAok8uxGNH3DXd8WVZLbWLCwiAg",
  "key33": "2VJ4424413Vb1VH4uDpx4TKzw8JXoPAK8ucJEMFvvMgQnLQmQpmmvQuFcEC3Tg5wrfxsz7Ukmh4hHVAcxbQMv83X",
  "key34": "3o6258YnDDRrdUGEkgkUeemZLKY6FzSdxn3GQF2xLZz8kwUbTfm4wCxF97E4JBPS1QEX4yjktrFJrEH68yFYV3Ve",
  "key35": "3y6eewNkF7CfutcbtAeffaytb5tq7djC38RL18rVvA2CpJqnbqpwcvdVF89sLSUW82m8bio2MDWb3AG8xDiB9USp",
  "key36": "2aWZrGuod9uNoytyZnR9f5S1SqP8Lsk1LXr9eUhJMR37CVNxofZJXovUV7NgFaVHRxtvHuXwvjjnuVbEtmYxbu9B",
  "key37": "5611oE9zYAU6iDK9VxzhRrGodqJsV2CJBJsTexA2nh5SyArSbiVfhh2SaKrtabSb9DZK6XKaUkZUAvHoSbsQGgDq",
  "key38": "4D3Sa7uEsqk4RibuiKV4Tu2zAgP5abmTHGgJMvypXntyANGnczUbooaDu3WreR5zWZbgXaYCDrejYNxYRoNQSEag",
  "key39": "MKr7QfEEuBp2k2GDboyqvSXzv7gmwq3zQtz3xjpLXPKr2yGw5GmJ61oMjP17WAYpFUQZsRd9of7TpHTo18ACcU5",
  "key40": "32KiGYumR8a4BsnkUA5iSnuFX7Qw8bDXugXvLWRCNtduoER2yqUon8H45SXVec6EvCxshWeE9caaJMWBov3Q5oHu",
  "key41": "1iVrHcDZiWKH1BHRmYMQ6U5DiDwyXESrJN2rpHsypNKMFaXPe5JEGyz7o44Qd4yMj5aLABEiBQigbr89jfvGEEW",
  "key42": "3KgN4uw7dkLqDHHqBUAtMfMEMMP9ZZQjsdKuABZ9wp8nyaqKounJQh5sPm8r1Ru4YsmRkSQQngX7ThCsg2irTBiY",
  "key43": "5zDMCnAPJonUtGmbUrUiQRPARgH231Yk871gKCK8YS98HQLCE9G8YATipy3Wgk1Mds6RidAkvLS1jjaBNMrGNVfi",
  "key44": "4efMFxJUURiNeHcCpdLC3EoYPUf4ok9Kf18Fcb1T6o4cPeim6oBoUkaSdGrcnSwXQd9nfmPWdfgyFDpZoBDWs8hN",
  "key45": "2Wvis2RomtmBZFwFPHu5gNnD3TAJRt18e8NFy7t6LkDHVWFiGUxsf1njNKVzGTw6cbMYibHHhTApCN48vZdhk3xc",
  "key46": "3yttwRSpuM9TdR4TrDaQtrH84BvrbLFkh6Bp661jjDgzLtM24yKBXtufGoEZX7VA4sWwbpq8Tnhxrp8C63xnzBbH",
  "key47": "5usUAV6uqcxmPyHvjg8oSZg4i4MMx99TBn3naNQg262sYtADBAzw9qj2JiZpmKCXD5aUyeuXayHG6DT98QJZn8AL"
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
