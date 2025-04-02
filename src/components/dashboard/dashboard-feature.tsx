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
    "4TKgiVAa1R8rZenB8YGtNCFG8wY76oTx5S8e161zc16mbdptg27UTdTtfCfZ9WdLbqBEHq7MD8fBZfLSb6Dbuik4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3on5et3nUYQjto89ZBvJQxs1bo35yYmV8tHodJ5rszF6cmXWxtpJdMAgLk3M38WonEuc24SuuVcKvdwhsY8F2cHc",
  "key1": "4EpgYAPGRqv9Hk1qDq62cW37bdRLHCUeULrhU2qhB6JcZDzf1K3A9FeaZrBuG3PQ4KC8VnXimQNYtMuxDpMTc9fa",
  "key2": "2dHk1Rmg8uHzd1RDHisMipihDqTpb6wpPE3aXE5QL4sV7zrd9DKLgw5iJ4mqjy3s2uub6wW9UBjSH9irfmhew7eo",
  "key3": "2j8ksniND182eFtQgEqWHX2Sjb3B8Af3wqp4UWbBWBjZqJEkK2feSLKaf8bddTuuchALEwrm6x3jntYejrECYDL",
  "key4": "4fd4a6KZeFK4cSG4tZMpbexM9ruw5dAAwKpAVfNWremPeHjabAKdi87iF38Xz5hgSmj5xVk3mhWCuquP6rWfkpFs",
  "key5": "5cJQVNDGQfNz4HYSRH8BWt82bCRvxyyySKkyfXrM5Jn592ZHtEMEq2y3i51cGeNFs5USNj5qFHoN7ZMJwciqxzHM",
  "key6": "2Ygo3DGubZn7mJoHbkC1Rn3ZQzPDoN35BrurjrQLtPqqBwApM5zNjtbh2KMAEPsDFFQ45hMKK6oXjkmRyLW68bpV",
  "key7": "vhHi1mKDUoWAFk6n7MeEwauU1Q9nUWYYzcU75NNo1u5GpwrMdB2dHiNFSrHWbHk61UYU4gRuhq4bW4Lns2NJPZK",
  "key8": "2Pu7vNqRgeseaGMWWvqu9PPS4hikW27moU9Y7FDk6ZNtfFZMtGYSaqjXyt47QLYDjw55VUfeyeoQvBoQ8LDqPvDx",
  "key9": "4dWLdKWkTNy3hiJGKWhcCXB9yzJUSuMpBaUYEoFTGA5WStLURhXFY87vHwuz7CnByk8oPKK5Rn6dr8VDsZHMQJXg",
  "key10": "51dGCCjMLfiJcKSRZMf2fRkYMc85crqzAdfuwP4Euqz5Aw8ayXd8E1iGeseZUPBCo1jWXbBizBE6A83nQhuYZyUt",
  "key11": "646PUak369y5xRAT8N8vLSNhRnmJAM6Pfw8RUxRABZmpdmUmjQJkk3RBktQFiPdaErupFzF28f1UWy4sfAGWeMqy",
  "key12": "5FJFbZiXYyLTZiUkZCudmgvqU2DrcDwy7pShHXwmCzKoUDgxa6dcpj7VtzwGiobFvxvqZ4gPuLxvpCLVtWK8M4FV",
  "key13": "3FBczEoTGtv8K6ZbjFaEve2xe4khmgqkD3mUJxRR5EgJqoEuUj4XtvQRWmsu1DFhdSaRPMqhTnhFeUzzswdSVQ2x",
  "key14": "4DrzwRLX66yt4Y6tLUTWU1ivgUN44aVGYhzXooPEAQWQjSzwtxpxFw1EBtwQNFwoUhVsBDb35EfLLvvt2V2kDBde",
  "key15": "DGa1fXLT3m3Qa2miZjwJjPcrnTQj8CkFYX1PTotLF2Hf5ovYSSzV2JFHLAE18c8HCrY2r3QYbZSrCdZyENJPNBM",
  "key16": "4jVFeLAE7Ab1oz3g4M9xVoZ1q6uoH69qTv9sYGxLi4y42Vdqhc1gT8TES6ZQWbmBAKNBmXfpXpBggCmjYq2YRWJ3",
  "key17": "5GPHLNvi73tQmCs9uE4eQKanNoTU3UhiWsocQMMtD32JipbcZMRfeo1dMzHJ27pDxqDFyqjR6LmnMe4k2oE95pr3",
  "key18": "4TYiaqxu1ke86EW2DEuMRCZ3e1X1Crm2euzMxFrosVEhUbRCMxKcka5AK5avuKwFuweBU4GRbTVTHhZaC2qsBeWu",
  "key19": "63NucCbsFNC2g2dDLKWK1Js4HzJSt6D2W7w2KrUvWM677Eqj8KTbWf7EZ7Fqcr1SQs6u2qM51qMJbiwJ6kx3jucR",
  "key20": "4WbQ4vBYz4voqtYEYjDVhwJLaDSamSQfNSASEmhK7oKokZsNBdXpr1HhMwA18VdhKequ2YdWMA1DcBLpaft4PssL",
  "key21": "5g2PfjBdGkjLnR44RtN8npy7NqHUV4foXAp5Pf5LtZUCN6sH2TJuT15RBoH4ZXufby92TxaLRYvGLSD3wj647pss",
  "key22": "2aTginqszosxpMGK54dYA2kcHozvHYqVHVTgLaSRXk4ddUDgLypWTyZ6XCHCLZ7tYUdE22nbCuHq3Fp1Dw3g3LZJ",
  "key23": "5GS3E15TyQnMaR1UUdJZo9X2LBr3Fp9fZctg7UkSGdQzY9PZYDcz4Ff2HpBsphnGnHLP2yEGSaDMWwm5HcSKFjL3",
  "key24": "5Cq8aBwJW1kaey3mnDAJT4wWYtngaBpgihpg3Po64iDbCVsTd2VrmWkBStLXCst7xYgwBQGbLepUrf8vbFAxmvjT",
  "key25": "2NHWGWieBySSgF8Rw65pe5971GU4TyPqzJpLQq5bhqrHi99acRKiLTK9VicNUY6YzRQzkGiHV2Nww2HWmbV7du15",
  "key26": "HsHReXNWPwX368L4mypA4bPs2txQuZ3RGW6V1xnDffj1rtNkuR25uxejY9wEZuveu9on4UELDRkMY8LMdxpz3XH",
  "key27": "2doyMEie4SDwRyfEsR7AH4Mr3LsG8aGm3JsyRMeqfecQQDKxmQnH3c9zPqXa6bHivAfUtC7RTUDwA8rRj2xfM61P",
  "key28": "5TJwrs2vnQdNwsb9GyGa6rJss4NpRZVVLKgYHPYVhRA2Tf5LtLjVGnAxU6Ga7JjqHiXVhtDzJHghdYe33NeywZ7g",
  "key29": "4Y6gVGcvkCxp6qBHjV2KZTwH84tDE9Hz92jJpk3yGBGKyaui8iMpNWVg2jfTBseRNtZy7J1t481UFLdjhtcSwC2N",
  "key30": "biMXWwwKK5qCtEfpGwu2wxo34YtddEdHGaxmaUPYY4g465jZ5tTPLPmnJpC4Qozp1KWcuiXgLvBqs2hp71u74G1",
  "key31": "3Arfmq8bs4nHsQScAawqTKRchnTmDkgsbSw5hqaKZXvEZ7XZqWHRYkFBcFeBeCCFxdFB99cgSt3UpoP1m44TrK82",
  "key32": "2jCkQmjzkj7ZSuL6EHJLAyRNAj4UsvuY7QpDf5DD3peLAdzhPKxnQmY8wDTpzwrguDd5GhnqNwDFN9eSk4rSd1yP",
  "key33": "25MheHtioCcDuScDAKco3qM9Djq7XkffHk7hW3ymrJJFFvi2Vs3e9uiH6JKTjhe7EemePUiu3A7VByCS2hp8jG29",
  "key34": "33cLH7HtnguXqtH76DwPdK2cYEPaqCBBjyAUAKpQnCPLFPfobrwxS6Xe7SJJuRxcrqbZ23vLVRxiGkYKnYSxVgGb",
  "key35": "xmoHj4mkRW46PdLpHSpiyJvsXu9Lspd7xfudqVu3Za6rKWU8c2SiAkHByLjS826newTroRWtcg9Ufign4CuPjLm",
  "key36": "5G5J6MsVufY7YFkA2wXzey8J3BJ3wSgnaBoG5HL5duqT5oVjKufX1nB4EirZ6x4rfxqXo4sZJXp6mqdzuEyuhwQM",
  "key37": "4iczvkKkDqFrWqmGrCycLn9fHaKfDRjygbGMCKfaVm5DMsfogJGjVsHZ7pT9bYZUqBuC8gDpkUjdG96JsorUGbwR",
  "key38": "2tPQMc7HBK2NQnhYE2Q5RQYJExEEWoeJWkpeeQtJiTHgd5PJ8KtQsEUTDGShBe82R9kFgRiPp8JCpDxN7YHsrS82",
  "key39": "53XyMrVXYXAja7m3UromUFAKEuEa7QiNG6LKBXuKR2R2wxyp5ndpjMvLkJ2UtJgEDtnKGNLfEQm1uHoiim5iAjwV",
  "key40": "31suwaByrLv433uzyuVg1bf7G1QXVMkEZbsmxTHAz8w46bimYrPgLvh9nKGsuU2WHHofxBM69V18WATG1bsZwo2P",
  "key41": "3wo4qx1ZPB3VeHbuPqCvbLRp6FDEyDz9vcGKZretHGQew7uzaWNcWHapnMjYngz3D6psmMaUoKVsJSCwMjWP3P5R",
  "key42": "3kHsh4z2Yxv27FLaPEUw7d8qRzJjPiH4Dh6Pgn2RqkMrysYb3EBKShed73uyxkZGfEqae8hoEevX7W73dDiczAeK",
  "key43": "3gjNs1ddo4iisZrZqFgpjGvBSp1RudBkjwcmVEkyy5xCTNPawnubvnkQU9ZuUW931F18TxGq1gCmDgWRjGkz1B7n",
  "key44": "5MErBGm3N5Ev1VkLPXYgnqCmCx8mZ4QGecAreTHF2hXDWPo6xGxPyLAoVyUjtB2QTowi1BxSimTSitRGqodgVAMH",
  "key45": "2habNUzh7MeqadexNV6jrG51qGr9KshxTJtGuFNJk3bVH4UdTraAeLgdG95qG7tGkvpS9nceeJmgeG5kwFJFG5Gz",
  "key46": "5n12emHvyQywNm3DfuNoQ4Khx3z6sGhay3yu24sZn1QZWrDQj4sHwMLFMg4i388ee8A1yqsSBWiAro126DWTFwNQ"
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
