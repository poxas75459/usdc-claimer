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
    "1j3m19eZbxtirZm47Dn2UZfDSg28cVSA3jbbRGpmUEpSFcZ3S4ZKGKss55Xjbt74GPrMV4rpuhMLgfa7rKht1qN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AxH78dBdfKzTPz5v7mguFeguBiMffj5DF3tZAAG8s3XiM1BtN2D95fa9cvohxwC2zKyfBPKFU6kC5cv65oGMW8S",
  "key1": "4RSH1xqRe58gxdLWkwEu5oTkkaZSAVUcG4fjby29M7qhncXuWu4CeNyPQL7daCGVjtRZEyAPE7pUZ7G8yFEPzF5e",
  "key2": "5DnwzsNDjmCStRRkbF1i2hkXkkhKo3o7kKQ1Nzag1kZZUXojEqKq296BR4etE4EdDDKmcr4kqdupxvS7jEYWSJ53",
  "key3": "5dXhJ16gyZ1LiGTFqgmPMkrob2oFkQJJGXeYzbMJeJYWnEdCzkBejBwhovsN81WspBbLGwoCQkJNyNiJqFtgKsCw",
  "key4": "5RkiYixPwKC2sYCogDwCfWtDmkcGMpoCUHHSYomm1fAHgVx7ATeroncFTJnzkxQVfmkVG4TGC88KqTjSEpvyDRP6",
  "key5": "4gUeyxQrJh8KkQRapihPBpy9h2VWdf8RdoatWvtw3XqtZ3YnNvHnYQeMCn891UTxYaJ3E8TgjXqRB2FehueT7PX",
  "key6": "4Fnr5ApCdCbKipLJQ4wT2MkxSy8aAd5jdTNW2cELc1cH1xaMdgstLCXvooeMETZ2DyrqwF9SgrGuY112jXEFHcpZ",
  "key7": "4y8CZG6Mqzv23U2VKVas5TNn3QaRW4hPxQxgViDVkpyNnA7xP1iLV2iFzDnqwKquaJHWdZXFFhBbiJ6n4DRmojpd",
  "key8": "4c6H2QiApVmWFtivTznyxiqcVjk88b1FrfCsufjLVQQcMaRNnK3CHMc1919H4iKHwLcQynsWQ3dUJDPkELXh4Nae",
  "key9": "3gr1nhdJneFQw5g9Ai9Fsqz7hW7xrYWv1sszKssw2GtDhCqaQYpKm7GqTCGoMhKHeKiPSJ9TsLNZ49AeQms3rRkf",
  "key10": "33U1SrWLgta8ZUpuEjMfWyKAZDA6awMZbZXTnqHivDb2iYymZ5rdEKtj5SewmYztWzBT3SBb8xSmqWt4vy5B7L6R",
  "key11": "5yhMsWBZ4RpT4PeM1JeqySsvj1rhRqtkJdkMSkRwTynubWjxMtKnbYVNorjk1iyd2nvy336wKUE5mJVEM9tAyoZE",
  "key12": "o2AAgjY6xQy3jwp9NvW9xYEX6WWrw5BuQ4AQamuCps1zeG6fdkjtH9U9V2QFgbgfMe2Vxmbz5Ptp9j3LiYxrWKW",
  "key13": "5vvXzaRnHvECC2h9TcbLJE6PLiofq55NJacRcRr9a3tdiLCbqUcgBNBgpji1kcSPAJVPhYRYnv8am9RaZhtyn2zp",
  "key14": "123X2Hje1dmg81F72fLabo1LHTHY1YfiuWfBMdjjMqpeRhg25Pp1ZNUgBdmrmbV5qVsPxC6ERMvUHNQjnYqtn2Ab",
  "key15": "3dsGcRhwkzWzrUvJ1uu7RLFgpgC9zSk6U4K48VfPz5p11t7SAwovLy4S9hpV3rzoY7B2bZvtFzQVJyoXRSC2BHDJ",
  "key16": "npMvZxJUvNBvfcyNhMjgrnX6Mq66fM8QS2xtMJBqQdbkotUvdq7NkpUP44AUNeCabEFWUx7C2td8gNMvG955NQA",
  "key17": "4FGCYJbykxtBgFUkFGGbetsBGS9e24H8kHuv7P1ZZfb1zWfmeUY3CzL28G1Myeysinrb2caGSeuKysPUk5iJbqj4",
  "key18": "2PeUtAFgpEawjxr2QgXj94KDRmCUeZ69bCwJn7TF4P5Nue5Gi4WAH7NWu2R6n1LJpvtFSaDtCCQVinf521fzr9C",
  "key19": "Dd2SSL1sFyT2BSr8RSALzcftVVhz8tDfVjiiByjrutgiVtKUqofvdZm2PjQciFtK1T9PPUD7DUPtvjwF18Mkn1p",
  "key20": "kBiGrkc2T7GQAtoAMe9E1RWTynPxra1d2vHWN9bimgCiYzPgvgGzkZHHtMY3BjyyjKhRkjkhtZkmBgFp87rJomd",
  "key21": "3ryENrTxxCso4wgjTtQW5aDzAkExdZE3h9JkHFaRqXjgVgvXGBfTcFmyX954uFty1UBkMhSgY7qdS9Csz6SKsTLN",
  "key22": "3FUem7CkQ924UirxAiTuVPdoFB6qm5CafkDhS249S6ZCTTZsxTKHcf3GNrZ3q5b7m1caQm6D61Kc6AUWu3eQkLuz",
  "key23": "kE32e9duyAghLQXnkVWgZzijnVmeYc6oXiuiNGa6jz5tk7nxc2G2FARC5JEbgmeg7VVH97g52o5T4oiefFBfX5a",
  "key24": "ityi1dcDY4m2GpdPbCPCZbCVqfrUcot5tUTNPWehDRecG9wgQz28n26KMVuj6CHY1P5E7qSRQ39wBt8DixuhhLb",
  "key25": "63UMxtCJyAvrSCiuTpRVW3R3F8YPYrubm5BvC1SMu3fcqGbszCLCW72khjgETkY2JWJ6XYfarEXeghXxxW8bbqK",
  "key26": "5UipQ54sZQ64oTGHerxnN96y4rC9VAMYNyFm2HFHXPcBFVHnAVE77ocSUVLkwHp9kfNjQA9Kc9rexCvg5e6Netk",
  "key27": "aL2emQbZmTYARzRQYSUor74qf4W9ymKhjGsqM81UFEybRTmAfDAqa8i9XZS5bmLGUgpYjtQkMnQnWtDk5tEmaRb",
  "key28": "4uKfVTkZZkseQ7EUpfJdD9Tf8oC57vCZfkxkLYPsfiXmAVjDTHbFZnYqAeMufw3krZvWmZDPoqcs6HtATFvQbgFG",
  "key29": "3AboCgcWJsMFtqqEFbUMb56A4HawtUYBkR1MSaDXE1nc4aFpRX5CwDrMbTuRz2VeMieMd1NKu7njgqVh3NXup1F9",
  "key30": "5GRQihrvTVhjwcYEsfiM2PRN79Z4mX5z7rDqa8nDG9pSF7UzW1CeNu2bhKsKQtESwYuVSo5aD1Ti5qedYGdAQHJ3",
  "key31": "2VMRyDjXyj6JkVtYm7ZELC6XWNeVsM4RE1VQZTqz8FH3sZEBDbqVWEXUwZGj7CkttXrEr7VE17upcygzau5DxjkM",
  "key32": "4JgfvqcfhjTXCfkQtjJnJmBipRfbfauSBed7MRWLT9ha2G8Xf1uuZ41KQkMw2M1yf1ko2SUdWhxYwGx8chioSeCN",
  "key33": "35DnSVz5SDytsqmi3CftBc6sGsF6A3z6Q9zu2VfJh8XPxar3Lc84DsVUxaZ4z93hGi47zBy7vEg4dcz8uzD6xV8j",
  "key34": "3dZ8T7uBemyEH4PmS9GFsRpnLaHZ1TPBhp8hTz9sBE1Y9apcmszLTD9QJWz9TCr9Edmkbnt6udWZnNbgyzDKTdwn",
  "key35": "3qd6aGaZ5aHxB54L5vn4hfQkXFS8Y3Yu9iU6Xr7NWsH7eqiUjG6xifwDBtvWDa5wCCX3pX854yUFppCjQF4PfapM",
  "key36": "4ag9iq2onBFiU2wEkj9K8YzYvAvBBAQvhEnAfsW79WjPs6kMGPQmiicVgn1sWStWexYgZv7ji2m7cxrTnfNZns8Z",
  "key37": "4rdA6pokaP3dFisBfpmkfxZwcX8Fdz4qoiyXya5gReNFmRYWtFGCGhrPH33JXV4ft8wprgbhyAVyuGCNxC7Q2DHQ",
  "key38": "2N6mFXTohpjYwHChKN1SbfVJsA9sMmsYgKnxbhTvdkwAg8QXu6pVVX3p5Jd8sPAGnLx3iCScHHLkKBiwi2tZj4nR",
  "key39": "62g6E3mwbLiQEor7gMVfCb2q5JPPsqkAEr6DGvwcgqhK7EbVbvjUozyWg1qeXgf51DwnaXhH5eKmMn5XdtBRDFae",
  "key40": "2UsCeuPnEQLQw5rhr2Ud12qJkQ7yXFuM6i1g6dVEwYhkDaEoDbrk8cVqjqjqENPBCpdngoF1DMww1MLdvtnZyzwV",
  "key41": "x8wPEvb1qWwwDJsEKEx42R6wMvwbzPTY7933AzdeCYJWpE3R2fQGkLtVaspS8s9KnpuuH5K9hmApPEDP9YGC8tq",
  "key42": "2GmgkB48ZgcKCLRWyj487vwi5tjrnB3KKbxP3NygYowW6oUvpbfyGCSgiEbckF3Tqkvimxh3dHZcQ883iaai4tMW",
  "key43": "63yLDk6PNq6hH2AKwM9g2eW48bA66Tnnw6j4v3ofbUFNu3srwP1d2TFTU35Uh3B1B4qH7f5DLMuvofcxinetFYxS",
  "key44": "2MhiLEsWBwxaWi6N3ZteGep6J3Sv6arpyNmoYakUkRDfi63KjwvjWkPtqmGye7kV8yH1Ev4FJNLDJ9zsUz8masQx",
  "key45": "4Ss3wWxCG1CemCruPLkZ4QCoopaNApAnQ75VHm5mrSHNJfFH9xzWCwZYkQWs1k15fFjmVQaTZTY1YsR5XRS1Hypg",
  "key46": "2syLwKT3Lvzqnh6HL4GPBkheXEu5and9VxTTP7QLRJjdSjezt7PKcZyeQx4rV9knSssaTLXv61BY64o7BwsUwE3Y"
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
