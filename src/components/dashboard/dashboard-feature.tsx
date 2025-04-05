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
    "5cDC3VqqmFTtmo5yu1H9EdtcG3eJzmwyUyLyq2zQZP9PoH2A64jaw6ji9EhTiPobufKwXVMTkTMefBDyooqL19bj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jg8RLczwbvx3H7wRV5KvAKJMwsWVopyczrbhykQHKStBBMpoGhx5Gd6SWYW3xSiY6EzkVTHcrHKYCupTkVAYG7h",
  "key1": "2maNJJgXpyQjtQZMV5aztokJibyvipS5GtXy2bJhDPUSw4Y8TmLKF4quqPe5G6m81i4cwd9PDP56nQCKNdy1Yffn",
  "key2": "4aUupWwwJzAXh1CwmQN4nR456eBDcAo9uWMmCeh5VygBXhQpXF1ZFQaYNKByqXjZHTQLmPCaKjz4TS2299yLfdLm",
  "key3": "2Jv8uWZQBzRUPeCADvayuYUtJ5mQRdPyD6aGgRwNYTfZ9BR8PpsvP5bzNTZXmuxtzxg9nVmWfVMAt3vP3jBSMBsr",
  "key4": "3nutr4TuU7Ycoz9BCb3kmSemUveCMC3KPcPVdN59nGRXgu9PSHskq7PLy4t8V6meQVaZP2AzV9T4JYM4iPULUxcq",
  "key5": "wNy5KVkDVtbQy4EVH2EYzHkoScQDZver9hzPqMLUYqtmFiGzHwfCnu9CZuouMhAZQRqeBuZjptiuey4e3biRQcn",
  "key6": "Czq7kFcr2yaegsPpnSG9QGi6YSDRjWnhPbNuDyWnuKaRdbkaqpXuHMV1Q6wMMrVeVxE8vjPAmgU8rCfJ1zCaEkU",
  "key7": "2rsB4gBGtmaJaogKvrGoNEVp6sboYb2fF66493JEsVyhBX5PSyVRBW1fdtEk4jeaHfvw15uZcvXbwhxEqN5vM6bC",
  "key8": "362jkjje38a4sqC3eUCpTA8ajLvEoebH7eKa688Uifah627Fx7xxAzg7t6SDUFpk1Zi9wh4DHeraFRwQhmZNKuVn",
  "key9": "2HjQiKFMTR81eUrVx8YJegzMMaixLnhQRkS976puKP9eaXrF3ngWApPhiLpjzynNBfiUrQ2ymUajXEpcQpneysqn",
  "key10": "4TdDgYe9DVPRysjqyS8vqfZaXGuwcax9MgXFDRTSh4ZDwcoXQey2NyQgZrmh77kW7njHsdBsFbtB3ekvDFgbX7z",
  "key11": "38b5V59SxyvCazmDa2BLDtbtLu6W2zKQDiq1BSwkH3FD75fucp75t9gkrgzT19NcYnedbVfAUj34XsNv4GHBfsTM",
  "key12": "3kgZ6ARWnoXBSjHShaFvb1u3V2Xg5C3WAaRCMoZCNrFWBudPXT2KyqDmnqxVMwSzRhXv4nTkvVvdJCzdZH7eMx9w",
  "key13": "35X29meAUFfCkfBhTz1AX4QLgEihfcTByiqVsckSq4hfeFXPTyd8oPp428pn5ZwjaDa3Lp7btcsPiRWQfn3LgRVJ",
  "key14": "2ZBZjTBKjjTZj6GCV5hJeUyeMeS9UWrosy6ggUEV4kVJDbFAjCSHTBjDn7gJxLnEfPcXoECzoxy1vowTPnbfmUZG",
  "key15": "3n22EGyrYSRKMsVe9ffm714XdXqv7Lz5TM9nNWrYua7m1BCq4yR11uJYX1RJb4RjKLgJVEom57S6FJWDF87RpLzg",
  "key16": "2ZwXAeYMckDEBRPYGyPPWB1PsBx2w2KgUvoNduCiHeNVpx6CwLBYzpQipZJKyzxAd6VRbuf6VcdbSvUSDt2f4SDK",
  "key17": "CxdsGfxVidih4NLvod9Lej5X1GLejEcjWNBcxZYTWotmjBDov4Q38xUwQeUHQ5YwDAaB9QFSF3CXdTYav73uLcV",
  "key18": "9x7vkX62j4heS5s9Z3XDG4p8qUHCSuauQyFPFhJcvfE5EkWVckPiCDYfw1pgdub2xykJ6ymshs5Br2V9exqLTUF",
  "key19": "cGHmChwXwJHTGsi4Dp9cDTtVzz9LuLcEJFGi6FSCJ99hrfKBpLTS54WWHE17qEXAZHoytPqUoGZgfxrBvVxKFej",
  "key20": "wLCQdYuHbBfLuiiWN2FdMbsVzfdTtjfi48x15NUfoA8ffPG4Wqp7XtCawoGqmmJiV5CF4hVUZFJDgjwr6sHm98c",
  "key21": "3tymTANa5PsPocpG97HazgqFF1W571rZrS1LKjvD5kYJuD7BsB92dioSiKVzVEW7KDkijr2VXTM5pF29vhRbg3nZ",
  "key22": "2CfufkbHJadP4fZ2NxbATFG6Q9mbwc2afhRBanNWQ9KcvT5c2eiPDKRA6d4LpY9NvT4bZiFHHi274dcVnx98xRs5",
  "key23": "2XJVp2eLaaNrzs54yqnAmWXuuof2SjQRjpuyf7YNqtcTvCTvJDPemfmQ25uSyK6RDZbsmkwbQS3aKUd9XFTAjRfU",
  "key24": "3cA59s1eszjsqKWQVGG5FSW1ZVD3KqyKQgRfBqM5nDbuRBjj33dZRniTDcUKiuUt9bmxC25ZJYgJxPM7NjhPcu37",
  "key25": "3LRbJEZTuhVXCKzhvRmB8KAx7MQDNb3BryVxqdStGMDLBVGhE1JAXAv3Zq89UEZoetureKNt1GS3VNjKKjs6SjHx",
  "key26": "DXdrQofKmu5fBBpNARjA1gCw6p3uCgbQY7tUvBV4o44bFnp19VEeybJTtoZ2zBQnz8RcouAqd2uDATGHAEPi2TP",
  "key27": "3XgLUikYwiAnFSpyCyEaaVU1GcKLr2pevqYheoLp52pbHuCiZRbVad6g3k5mratRBVNPC2Bur6DWFDuJnRnA7DP5",
  "key28": "SeaaGaKvgfGXocVhQTeiQo2jWj1tYJ1y7Hshja3ce8u55hYtzaCxh8cxxNDHfTi7H1W8WoTRY2ppeHZUtptPkR6",
  "key29": "Jjbpv8MN5KSfTTjsPARkFvXLZy44BCbCcAoaevD6b1j6jPEefjw9jD8s9xqkEaoZGCh3h4UUMVWwGF2PC8QW9LZ",
  "key30": "3rzJnxSucsuk9dkwkaixtxJhfNS9VjZBrGYVNtf6MhJZUx76My8TFSrobpeUyz5AEebhX1BPiyJzxcL7McfGwTka",
  "key31": "4d53v7VqwC3eszJhTDRq9cbEK9vTqJmhUtx4RSxp7WCb783xFHfrXgd9TtreG6hPLE1zuQsUg4EsH7Cj63PxdeBQ",
  "key32": "2J2XAVpwsUrBojrzyvg1zpQQB8RdSTq36hNRxp6LM7SEigiVqwLLea4B6A7g4i9uHrTho2x3btjvUyWChFrZM8mD",
  "key33": "5GPubVuLbcKwS5Nb8zSbZdvBCnwEG8kyZ7kThDtJMcbUP77jZ279Lxu43gqqvbKSoGq38p5ousL4X85m4CeNKPtB",
  "key34": "2sL48MauPCvW3NstS322fJp4Nfsaer3i8J1AMTsTnCKrY6c1SqM8pLpBEpGwncwd9pCbEjmwaLFMiXWouv4zs8tM",
  "key35": "3hyCDUVq4Rzyp4NAsES3AJFGxCrVfiWBD36iFbE8skQEtrG6224kL2uYvtjuxoHCU2wGGH8C7HSbv6NjnZRhJSDK",
  "key36": "QsrCVz7EenL429FQN9ZcYWn5DCfBuuctrjfLkRwxJtVYQTHDhYBYzNw4PPaqWTkhKKULzLcydmscxN8WmjTvoeb",
  "key37": "5mSHmkCp8DvcvLjPQk7qTaAPG8URW7N4gX9S8jyiu23NAYmtA7zD19N9zQS8tydQuZtwFf2zPzsHeS2qLPAhetJ3",
  "key38": "265u2yHQECFieaDMPDHRCeKPXAJ3PxSY5ASg3ikejgcuqG2dDYo9pJErPSksKRmLyqLe62QLErZ3YtVRZSctSchz",
  "key39": "2eqvoc8vpgAVSMMButa41LMZsTsNjSi7mGTvqbZRK2F7Tpqbwrq3Tb2hYNJKag8SHjMTVQTbqMBdYUi9ALgKEk1r",
  "key40": "QtkDFj8JZRCVZd3tvZiadcynPNMzEunVgnU4SZWNfTVA8z5mF1j2mkfzBUyoUdxLkMycX3mCrYDu5TfyCqbrf8w",
  "key41": "5JFhD3cADvLi4GPbGU5osoNvcsCaM9GgjUS8qubRXrMMrPK1RDcbyRygDGJarJSHthSPHMzemjSie4KtrCbcSRir",
  "key42": "34NnzHVf61Td3qbu6bbhTe5pvdunrdrFx6A5WcbjfqW4FpuJLDwv5rSbwkoCE7wWNLsg7v2WAnTpaXW54F3jD6pp",
  "key43": "2xyzExRD19M6jb7wYwcELnFkg7S9nGbVb1vY4a43xcsg7E9nwZZnP1EPWtiErpBsormAg2RgA4ptKTBHNLQBnGdm",
  "key44": "3u2mr89Wt7HiyJwxWwq2yrj3s5MkvYQ7bREZj2hpDmxjswrL67dsxeYhrLasLkhbEUQt74FKaqnge6am2UHwBPJd",
  "key45": "39oBgm8sw5rzF5GzQ6GTmJRapKqkGt1sZXkqapHGxcB3Pd9ejTx8dRk3dsgo2A3uKuNfPqmxgXQg1dHyoHVQTCFC",
  "key46": "3qykiMrtszGakLawGb9yDpbZaKUvakZXPtPi58feYagkyh97zLUmTnxwo8P3Be5yBqSC2MJF3Y9BTsncvQRvj5Do",
  "key47": "3M7MSwKMcS3DCqDHSzW3NS56bghuwxVSqUHsf3fMamB4tscK2UzQcCYpzMJA86ZQCHxQfNzfQPzMakp9HfehYMe2",
  "key48": "3JshY4RaxSrZAz91q1ifCMLyBggKkg8TBWNEPsKpKpPJ6rdwfgakrQPLeMbhFRsyogCXAV4KYkuT3Bi8PGLqeQTM",
  "key49": "2qP6zwwT12zMYTkSUjCD35pSJzMETq9ERTyNMKpw1kkXoJFnzbb5ZBL1hZvCwRHhxHZKBC7MS1TyLee4ZpXpfViz"
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
