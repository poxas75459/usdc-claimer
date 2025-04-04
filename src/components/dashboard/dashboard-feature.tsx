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
    "3oSzD2VyrusX8CLCfiy8C7TnSEBjU8MzuWsuKGAEJvM9topRXyqHx2fqdFjuwFbGqdEAnvFFBaiWt65dDmgQnFkK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oYWg7ABXWrQZDhjDeFhifJzsdJfdyUkzCQ1mmFJTmfjE6qzmTKvA7rtW5HDRz1htLJ5bCaTYrX8bQu3vGGAnTtD",
  "key1": "5ewcAShJqNzGLGWBLscRiaRiGyKdEeisGHrk73bnZ1MNWtivoubpSZ1WjyLtcFTppgGnt4QoF3dsyHvQJvKgUa4u",
  "key2": "y2u5RsnkJpu2RRAYC7WBgtkJbukX9Mqb3NjhtGFSbXQT1oUuK6iMYZEzSuVxpNmb6QdJXk47hGgTZ9qr2fskkpw",
  "key3": "4fdPdWY6VU9KENjJ1ppCaeK9DxEJzNMHiEzkQNg42ntk5piYKFEnXxhXBoRqu2qPQgwkn6ovdDj6r2WzadWraeto",
  "key4": "4GNYaD6JPpRX7d1CTUruivXwukQLc3P9u4huPV2rmHiVVMBo2wg2wn3CtmXyrkSwbQ6NqG6AHTdgB3uzcnNnNoZ",
  "key5": "4yrRZ3GF2Zp3jDZag4FMUFJncJmVjA1NDXbHUChYdzHaruQ4KUXpvi4EsrKgGFcTNCFJnuiBYJiVuhL7uHyEyaBz",
  "key6": "2A8mpCiJbhsFsFxTDEA2gmzk3aLJqp3y1D91KSFJr6JvZjn26VJqKAWuov52z6KeMcd65HekJ9otZJG8XhaqhCi4",
  "key7": "5o1yhMm5zSGhHXVQismeN9Cm2KbB1L59vNAJbiaRY1bcNUADyw9qMVuzKMXtMTuBv6DoxY8DNCVo78hzfoJ8qrWU",
  "key8": "3dD8yZgjR1hmqPBaBLf6HavRGMzy3iWiYbHBbDy6WN2cpeuD5VnZ9rMzLyE8d6fGu1BPS7fZ3hvyx9VXiorvFMCi",
  "key9": "21zpdM72kZotYztEX9yDyWnjr9xcDrT8qKfQs1vE5Nq5aarrZEJADj7PeDbRPCte4kfnn8jPGNzj4tE3SBEuRfkq",
  "key10": "63WFGxpAE69Bs5YCWnoTmKShQopkUnHUMiayJYitBDoN88oJMDRiRet2ZLfbsiW6EpthTdHBiRtukwy5GFmmE4qR",
  "key11": "3gQFXYtJJTd7cps6bDKPvmnQjhuYUnMV2zytLD1zrPuJJpPYrEVeiAUqxYv6DxgSyRsWguyBcivMddkfYN3Jjn6m",
  "key12": "5KFbxV5rgykwKiuZSrYhEYTfX2vh35q6RxSjhpkix29JiUWmcUEt4oK7xG3gTrjcErUgUwb2kmkyKENUQD1gvXr3",
  "key13": "3AxGKDgA8oS2TGokwWFYJh3aXfExy7FeRtqepxNkiWBwgpK6mG5bPZ6JinonR2dAf9ZNhPk297CkLK8oEGCEQa63",
  "key14": "65gigr9aw96pxK6GgjCrZnpDfpx9MHoU81tYLDPsf6wxvCSorY3RvGQZ3KwwwwRhCfRCwyLhong9NTkLm1S9JAsQ",
  "key15": "eCq3m8187KeVfTTJbDgsPsjpXx52UpHygZ4ZAFVJMcVQdJgFZRyzbMExwsY9Xxw2o1sriYKvDN58SKJcDitwBBU",
  "key16": "2YMY6A5su5MyMhTdSTWR4LhNFiXKcVZwXMWD3BSb4GHfLQUYdqsvu57nPXdYTbKefCetd1urvN4uG3JsUsHLFRLE",
  "key17": "3xZ2JwiRwkYGyvQhNn3AXJeQJYwg781NfTp148ptf8oGJ7uLa4UZspwe2soLpbeVrXM8uG3KDUGfvZt2KtxUJkA8",
  "key18": "3gAygU97smFUo7Nhjyenu9uK1pbtyta2CGhF7NidVwx4utAufRoaZWn6FukdRcXXFaELGW5b3rEqLRrdKMPPZh8z",
  "key19": "4WdLyemThfovdARGA4gAaWQLJyKzUCeqPfAGPm17LsuFXPWdw4q3c7RResmhbMNyH29woUABYx26odHdXisxSibf",
  "key20": "3hyycndYY2Nx1Nfd4yRiz8HcAaMTkJ34Dwbu29QTMnBTnWLKcV8VVUWurYHg8uLbDLpNEtqt5Q46KMi6kU2x3zjb",
  "key21": "5at4jMrgMMHVFzjSgnBV6MN68PVgGNqQya3BLPu4BQVvsU24ZXChvNNK7sf4x9fUcAsYfWaH6kBkMWJK2x2HUDae",
  "key22": "rLZTahcvpoHbesaJkeurxAxakHibE2ya583ZCkLsDorgeB8UTUgaRGkxCc684tf8gbyfoBFfBgUDwmE8pft9h3A",
  "key23": "4p87WRp8FFcfoqSwAU7tJCucH7DAEDcwWmgxKw4xsejoy5nzrZaVjyGX57A3s3bVXBsEmPyxZvvXvj9Rege5vRE2",
  "key24": "2iGrsXPgKBAHQwJUW6CBpkHL3bLNf15sxoZBP7C5axNaVSgzxM76EZHi4z2s957jT21S2dVJtFivNT6ExUPRmHn7",
  "key25": "KiTLk2tzXpuSTyffJKCcGswey2DUykfrFGwhfctVs6bich6xCwhk9y7GThVsFKnamxXVhuxiYQzFYxdy4RwcauL",
  "key26": "5T7kowuBHx72ddXovycMeWo7NfLR9rcevbNToSi7YvwdCsmik4H6d6HJQawmV5gU3XrhdyFnVtnGcfqmEgu1oYVJ",
  "key27": "3XrE2QxPdWPiYbNBxFQTnqMaHTgMUuMgr63JdGBFNw8qiEZvrnrZsACkwNrtqcasNC81mSZY2v1E9sLdQUvb7w7k",
  "key28": "5u6Hb62BkmqBNEPHbtnRv3Scp3xecGuMSuQjbC6PU7NXbvQmdbmwJn6kELoD4Rqd3WB79SKCcPujTr7bpF4bw9cP",
  "key29": "3gKP91N4uNv9iuQsN3EgXQFXTogahmXd9cvcfHKg7NP8auDYp9p1fpa29ZV6RFbhBvWKynqE2ZubAfLRfSaAVuFY",
  "key30": "3xJXPj6hkJFnnZamVTXp6CUSgz7ETYcd9PjNR5MbecTopVwrxKV5H8nk235dm5bDVU6TrEMoyckG7HqRZBgrVaDx",
  "key31": "5KLS4yWgyCMZHFnXKvqGg2zyLzQX4NPacapDp7X5KKuZk3Y2yNRbDAhJwnRhB4zUCmqQKLjrKTeDvHMA13BiZbVZ",
  "key32": "3fiVq1wCkCy8berN8uVr3jPT5cnmYf27pfTjePB7sD1Y4m7tdLXusW7mCznChxmNJ8ShGCG1MuqsRxUrHgkwfG29",
  "key33": "2VBcSmqm5Sw4gJrX6wwdFzNn44S5nUqfYYj9dvEHxeTFyrcFS2WbuwuJvGpmDzj9pZLyaBWt4nE2oX2Ha3DcNgzg",
  "key34": "4mENy5dp8LktDrDjHsGNA2P4EUKjDKXRkHBjzZTRf1LyLZaWtAbmmv9UhN7ECFSXc1MP2NSyhqEi2PYrzr4JotVt",
  "key35": "535UTv3SeGwFecYt51eEcvHF1PCiUL9QWd3M1Swpuy6soKcaeHkTNcYmt8eesAYWgkfA4kWy8PUQE2V31dhvCdiR",
  "key36": "xs92cUtwjch3FTAqmjzoRVtDYejGdZUXuwM2uZWDvm53pKUnu5LGvynofYfKFAjnigrDUTuxGepugVE3R5aah53",
  "key37": "3TGuGTHJxzYWy4auRK3JCBzCtMF5xtKhY4vyjFoD7Cg1nUa5ZZS54Jqp5fDi5YLc8CUqjUke4nosoVuaW7TG45YV",
  "key38": "2gzzEjnGnAi3qWiUG8GCXV9LPrcZ54wKwiXHKimzWZ3nHpq3zpM7iNByN71hGV5pvyrrjvJg3UXjVw2Pni7jTG9L",
  "key39": "3mTFwUhqkcHu8yKWxhuyoi8qkKWKpay5UPFvVz6gqekNwPr86VSw868howNAdzx1ePQSushWpvU7g2rLwnRuX7sp",
  "key40": "4h3fgKms5JqFXDXewWioxaeQ8VW5f2uoZi2KzBV398Qi65Xv61Z9kBrDmukGSmmHcuiDBTYfgWxbwhdSHm5TCBWT",
  "key41": "JoDEtaF4YtcQcRMriMnuwhB6YGCqwkpWDcLNGQ5L2WEqYa2t4HzyZtXZ9HTz67iNBAFXxFLwkpRZ4H4QCx4fpsQ",
  "key42": "2BHWnJRoLFbjCU7rgRTAyNJ9YHDu3ruEjKLirSj9SxbSdMTPLmNA16wxCMmpys3t8wxNkeiwtnyLWrdvQGJ1wGik",
  "key43": "3xNqkPVVSAbL5RrpSS5gdzBHHubKjkRACWvJDCS2wTNSAdpAgRv453GKx5geTxAaXBLK2RKC9YCW6LcRk4c9CdAx",
  "key44": "5Sjqiit4XC7tDv62SFekeHmu9aTchzUM8jtiZvhK9uy41kFEcSKtBKpJv2EDf3PUCDxkLHfpVrLtKaQ7LGUu6JV",
  "key45": "4HZDVeuGCdgjJnsSQVNV7jXoAxeqj7t58CGTd1yHeLRYBSRU3pJVSZtqEFKfML4kZ238hSjzHWbB3s9XRAmvNatf",
  "key46": "4kavMpBqJS12my7JEtqm4EySfeJe9ThDMVPcauYkwVWTtovqPft4EsbSr868VBJoVLqopoyNnaBGZvJojkigkPAz",
  "key47": "3gc9QuQo739LcLYD3hpgAWwV55gfBSWGmc6JCyz2SAHCGDFYyzEnTckwK3d3ooG1n8jXoeMLSPyZPLF9L1S1VxVL"
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
