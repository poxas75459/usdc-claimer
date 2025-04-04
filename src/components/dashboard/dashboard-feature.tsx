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
    "3QuVovE744q4WvmSx1nkWHZv4BhJcH81SQLtptMwZDnfUjbbQSiSZ1LW6fr9U9KF634NGvmYKzbL3JssvRYuzQMe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gv8vLoFsxPVCzLFr2RcfHacmQXdd8cThPvNTqv1pGBe811WhaYXk4VKLnamYt9RjY6a6AoCrQPipUEADDVeuGkX",
  "key1": "2Y23jpXt4xoweYPQ5YHQZKjGGGHBY3V3eCgRdL33Edf2u54MaPqMUgksFGe27pQ61KBKkfbfUXtXYjxSq75GQHMc",
  "key2": "2jY62T7mt5XPQUFkpPZsRnKqU1qCzpWdrpq9MC5wXkQUTMeZmfhUfo5Y4SVwWDggeihxoRVy22WLMzDYkc4qYocV",
  "key3": "3oEi8qgRqbwtah8UeQaSYqaEUNwGsvF1G9kn41j6un5zGyTEJsugNFt6X94wQWbSgZvgYff8xHCxTsh7tuCtBQvE",
  "key4": "4daeYzamt8fyX8wCYzQa6gyEQyUzetM7sgohWyHyPzR18xJ1AGWNLvt1AEsKjLRxE7XmvfMULhvKHzjNH8nQLLzn",
  "key5": "2JK7Yc58TDbszgm8HSwjyGt84SVCiMp1xoAqSgVUhXThuuVGmzw4YgmM6HVpq5eTNQDjhNM3jeF3x8iaFvugzpFe",
  "key6": "3JNwrf4PfNDazKM2X2JzV6UjbmN9VZDgwxvxc4SeVfiWTZvCR2VH23etfsSpvXaHeKrRKGWhp8LnHcSuZ1ot3ecC",
  "key7": "5e4MRjPVFbEgQ5DU4NVA6a2sHQmfQbxxkHL2VL9XT4aCr9obQZUeCiqeFhVmmXUZSwzMp2xFS7LpTMnB6TAXuWv3",
  "key8": "5QrE1ih7jVv55DHU48jQCCK6QscSxCuqFkHtg2VYv9WRbM3qkfcaCZfqJTnwjfvxL4Nin8YmEx4ZRGLFrjps5xtr",
  "key9": "3thtpANy1VGciDAVpBYgsPpKADUKmTMEuB3cF1NqJng8UnUYvDGKdj3ocDBSFXV41Vwr4wpaZHvgrzp7yYRbadAG",
  "key10": "3P5AGun8yqrG7bxiHEcHc2K3RZzAEwB7WWpuGqPNQoX7xMHXQej2iHZT8geqbY178QC386Qjw4swiiFtADaX7Sk5",
  "key11": "652s1zrpGfhXWtGgDXkT4DPZbiHa6o6y5EMHJGFw744qYBgtLoFzAcAV4AkDmKWQiZeigbH65zubPpUHwHcen173",
  "key12": "3J2itj4oryuSR76xpmatdnpxnsoDxxAAzaiE9mcdX1RghriAoknuASmzv6eGqF67ejfLP7KYNqm7B7ULiEDoZ3QT",
  "key13": "2nTiMbtjYFQaozk5sqVyyHV9YyL1qSnvoCv7k8aMMXeJi16JKz9azEEaEwzujXctrTYCZ83fnymsT4zc4Z9ZeXQ6",
  "key14": "2oKy3nqrteLYV23tMoVuaWxjDM7MBQjdbaVarkVTAwxxoVSSA9Kn6mUe7NJq34cDViqkez6s8PVBKWJXksJEwRrg",
  "key15": "KNA5qHvxPYj65zk37dkyxJrhEs3LNEsx1TEb2rGRnZ7daGmbspmXNqfaNaEBGV7bRDSjtxYTHyqJknw7pPA1tBr",
  "key16": "4KsmfohXNuHa56GpeLwqBNXNxFvAxtBJgCPiHovW1SakrDh7ASFvQovKp7eh19tpT72z4iFTFTrztHTa6KWmeaXX",
  "key17": "dY91pcKigcYjPpG6SXLv8JCTFziQWfdpfUxUQHRfRv63NCatnjtpSHMSiLwWNsPZunuWNK1uexJfymys1g38ycJ",
  "key18": "4TnZtuvpwaS94d6yznb1bupUXUTDpHCMLFoAt9gTuyuak5vDti5eCdHvUpJreZLK1wyDsRPpdaGBAkQTFQ8siY3W",
  "key19": "234azcRTXfGZ1McC7a9kXmdQd4EiaBfHnCGMVZB5Q1V3v8HSns7waGvUbUGvwFnum2i2zx4dh7eQDx9yy7b4mgGL",
  "key20": "2gsu3TymMxCMMWHKmTkQK1DWmFRQCZRgmES3wJEV6qV1Pqi5mBHSN1Jr1KpaD8QjMbPL4pa2zxND4LaXLQkARCB3",
  "key21": "3ne5d5wkrqkzjykghsTCMhVfTSgPKiTWFqn2MnoiYg24uT7uwxeWsrmLbqvwWMkUcmoTjCUaKSpQbKdX3rgA33ab",
  "key22": "4f1T3wLuSPNEw4qEDGamBow5MwH6VKscUYNV7hzH14GxT3J8mcG5Koh5Z1j4hogkuSKTmSJFCYFAS2WKcZ27vBjx",
  "key23": "7KXMZPzBZSMkDfETGNJdfifynv4a3UBeKtfFcNMXLnq7sC3hJVvyP9y5JJJydVfHLMuDAsKrXmugeAgfFXbrMEo",
  "key24": "4QbGt69s4Pp8tXa1StwL6oni49PqZ8RLQpSDb89RsmkPxY1Th11BEp738iFxfcCnoV8FDxr1Tw5q8VYSFo6mFTK1",
  "key25": "1tsLUjKcD3MCou8bmRsJ1Ux9sHCw2C7pDmUEUwUmR6mvPtGRWNfNXPrzYGWz8kFtnv2GbptZtK8JvTXzKsmGJ3X",
  "key26": "5uyyvJpcejQ49AcDkSesV2U6o3i9xXmrDSVE8kxHMAAzpEfzcg9L6kxqJM63QcdeUns3JaLThrGEBM7nKu7iknnH",
  "key27": "5YeTdFddXAG532WZ4ia8NAEhTRvt3KiTaSTXQDXuvjjoibFx7t5srAjoUm59AC5bsq3nMBquftByFhY1qqEyzXwY",
  "key28": "5A3M7Nz4DUeiN6pHFmN1Hgwd6dJtdR3iU5qMZJexuxReGdruF7Jt5Hou5xST6koucWL5PaWrcxyqmfwLr1AbYjBA",
  "key29": "5SxKGh9r19wxg3Q9ERJX2osRDErcjqYovmVSLg8NLy2Hr7ngCw1Ur6snsLKhYNJUCCpeCZPdYmbjVMVAWHUHnWWz",
  "key30": "4VZyGJDJN2Qqpwcx5vLivBUXHp6K1S6GMuBMz3bt8fNqfycfaJXnuT1GfyD5pmWHCxHkRVGms8UZGZsy3fALc8Xe",
  "key31": "GShskAKy7Wtm9iEcsMSLS8ULBjQTQiK5y672hPX98K6Ku5mwkzNqmtFmZfJeNPVHYFiLTgiZ73XSGzDREfxhKpz",
  "key32": "3557rmE3Sm31TQitbzXw7Aj7W7YEyhAMESpjruBydGwLgHoKgzfpLRr18HJYHfpKKY7kShuW3uBeLGE7HF8B71nX",
  "key33": "Vh9fLw6wDfBRaFFrUPczKLctAZPNJnwZVHv3EeRkz5ctxXgRtbnBe4BFWufLCTjGrcSHVKbWCZCphExxjAg2FZz",
  "key34": "ojMvvWVtfequgjmr3bZgzjxku8XhhTkYzk8CGGfRguZzSkzpP9PQLECdf9tPQMAJBiwm8tHUGRCGqGFtJrt2iuU",
  "key35": "576o5ai5iRqH2C9ionjVugTUWCnwcjYijxTQFvMoQCdYjptT53aBJSfqyLEZGpC2KGju8HPdZ9varps8CLZAozhf",
  "key36": "2LoqKbHhkPS11rKQLxzJE7jRx1WjVadQgVeRT2CbncUJS4vW78m7VofSBumwmQavSJFt68x38cX4TDCCwKz3KiXa",
  "key37": "fUAYhBk25ULHHa5TmWPKs9N5Tq5DXwLVoTRYAyaGvoam21NLoweYZWJ8aj8qsAFQznYLQx58WAkfDamq5sKQdDz",
  "key38": "4eeQCd2navk91MVDyWz3aVs27WysrkfFu7nddPVvGRr8LRnALnJ1XtgeoVT2SuvgQpZPJ8rFE5Awv9ienFFo2bu1",
  "key39": "2TJn4uxm1q7HAskvDMwjEhYFd661mfN8boYGztK7ruNUcYPNmBCh5v3dJzJzKQtexM2bnMZmXcmpHgNUVTQw2VTq",
  "key40": "4wdiKoJqXkU1sf59ncqW9MjxPCKyyUS3AHEFcw4zWDwetTFiC5Tpg1uJt6L2f5TXoHWmr3ygMTiDzuTs85xd2YfN",
  "key41": "4imEhBdvB12uPwPBTDCM4v3RJtHPdaF1SAPBPTAZR6WdshH2TDVZinoh6r39ZL3m7WucTMcwxQZyM9X4deZmu3hP",
  "key42": "rgUJyiDZpL5g7gDG6azndr2gA3zpNp8Ys19jVwDwkRkqNHD2cVtVNZZo13hA3Ln6EwfUkSJjmjYLDJLupXdLpyz",
  "key43": "4oiC67rGiyDg27n7fyZFEF2bqXvbM8vVD276Jnotp4SyEwNrpMUtZVQrLujzVxAcmLnbUu9aZNCsA5AWCLkSz9R",
  "key44": "GwZQsNSvgf9u1SncC3HVKrreEqNjUAuMtTpsNVQHf5rFGoMK4Z3xjyzmHJjkdKNdpvqHyhFgfP3hWa5pngANrKk",
  "key45": "33TEVXzRC5nPM2Wj5D5HF7JzxuhTGZcpvTCd7LEeqsJtdoXjGmrB5DZfauqYVEPTEMB7vmZCaCbTzchVW9GTefoV",
  "key46": "384Bz1tPF8ZJLkGGvzGLNgTndbEuWqqQsqg6ZcRuFJEiM38r3pUSk8hXBNqUbkwFPGJEGpBWGRhpyCJi4tv9K4GJ",
  "key47": "5Ar35TbYS8XFyyuJqHCxKVboEZ5vuHbFRGhomeBqhSWE4SLhqoATu8N26WN9KEvLgPLwFiYbsWW6s3sdG7HJq9tN"
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
