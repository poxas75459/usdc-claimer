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
    "3CsTBFhJEmQupJM5Co9x2wAZKoqRHtMTwWRzQ4q4p4Cu6mME8T4Hq5qn8e35cVpBsdrHrCkUD3hfAwqAmStdHuMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LYayqA6mmzSt1jRwLHmzPniFH4rNdHXz3nsdpM7GbNneBvGXzD6PuExzYsqngy3p7pn6SyxzDytbDkxTPj9iRC8",
  "key1": "598xcCXH9VsGBW9xvUc5ozt6smW1JY74CKT4w7HYrg4nyMMeo6vMgKmkpP3z59myqheyW26oEaqv31xmwugvMhb7",
  "key2": "W7kYUb1N3sXp1VUE497wiW1sPWjN3p9KKJiX5XCGHknDkVTKv6bs1xyhnyc3nHBMFTPweX3YLNFEK9BZdaE4qMV",
  "key3": "2FcauDPogpqptzz2GrNrEAKB3z8kPBzCXcXaogyXFkyV8qbockQo9uVmXJfaQo4LyxeFfQUyRPr18aTd1rzFqEi7",
  "key4": "5Mcpg3EfYwhyQaav8k9oNvbZ1QJUSQyXU4m2YRxHJQ9qX5yhZafkoXip3kWCrteuj6xH7rPXZVhjVv4ZRgZHyM4y",
  "key5": "4L6DTiKQrhb6jvF31fZPZH3QSe8HHjyHkSBZdnWcFrPddsUC6Yn1VxF6aJv3VaQDxUtxJiJy5hwjYQyXzs64i9Du",
  "key6": "3g7nZYijWHH5HP4ked4pnFoy9EvqH6P2aKdZccdjv1yjw8y7ZRUHkHu5aNA1aUaSvUEqa6F8drmmUU6d7eTLZMvN",
  "key7": "4jHs1tJJd3ntg9TuBTyaSZkNasoy3QRFmSWbhP9m7tn3ue1MCcJDtWX2QcdtySSpYVxP6i4xFFKQYpcLZwQEA4Qx",
  "key8": "3AP3L35njZ7dsMH6jWhRtemszL3gB37on7Ymbpfnff7TgBSjq3D5gyoLeuV74bm2tbCbm61jgceo8cnt3dD8CKid",
  "key9": "4XBD7rs2qc7wjaFBvsXWbcyhHSC5bsYAn9aqWHLFFEJBwNeLe18yD9tNym1Cs72KjjANXMTJhammr4rxb2GDUD9o",
  "key10": "3cBu8HbPMVrv3tCDteD23iFJgJJLdfWdqHR5dy4cDGJtbM1Uf8DaWBbg8X55pBHign7MfCWGG9YB4mw4Ji3u94gq",
  "key11": "4JKG9DRavybh6NFbRStob9pQm3kH9kNh7QSDYJmqv2F6KygEkoievonKvD19utNqZ6hxkZUeX3USxYiiLbagygAo",
  "key12": "3Zoukzi3z9ckkNZMWR1PJPz3yZYQFD3BRZCrEqS2wXSVEnnkrfYyFmUbUNP1CSC9KuJ4G8ucnWdAoddktmvAysGb",
  "key13": "5X2H6wafoWcHi5bevD3yyLpTR6RtvdaGekfb8JbDULhBqYQTf9FM3gTxQFHbSiZkSepQj2bxXAusGVignQVX76HY",
  "key14": "464zuorRMpP5AGHSNmwjRqQNxET7bqM6KwYe9d4ydoK27CP2DNJRnVbLKGWuuBXdSrF4eB8BwN7U7jHsxdoJsgC6",
  "key15": "5bjF6u7pKeDiEUQPasErf6KYUs7tP1bBrNyKJsfhwd9a6sZSKT2qjoW4Kc3Bkzh1Z73LDJQBErLwgAwvca7ix5Z9",
  "key16": "64e1XCDqnZkz46Qy7LopRV7R6S9ExUNM5SxMV3Mm6wEbQ4xpXWBDa84SJd3xrUBHf7A1jWW4wSMnSTVgV2Q1Syp6",
  "key17": "4EFa7MgUVz7HWVETfgrizhGahaGFT2sStcbHYnaHj3d5dbhCQV6z17Fr8AQZxxAFGvqCAYF9gNcH9XaAgbK6pmFD",
  "key18": "5hxNVKZB6Mod15Ysvh459CxF2MegUuUy7wP5CJ2CZwKRKr1iAsod2TiuGkxn9vaovXcEpxzftrTuoHupfom92r93",
  "key19": "4WpxDoSaWZGQHhT4xa82j29ENiA5xPq85w5CxStd9RW4m84ySaDdTKvPyzn514dZfNZ2JnMFc8iQrKA2YMbchJag",
  "key20": "36mRL7ksX1kq4R4v4kmzEe5Hs1nvw2dEqAFjf1xhRNHx1bAohLPZxuGPkUiwD2znw6FAFUxGZmHbukvBdDuwxtQE",
  "key21": "2xPTHJHQD3ZLg1zGy5Ku8cYBPRjW6osVm3Cp9NhTCppYCWB1Hdf29aBu7V7AHQGNnDFxPBsDJy7CeW3sAp3JG3w",
  "key22": "4Vf4FREorXe7xVm14ccBHJF8SNsPFBsxqEZt4vsoWS8s15pLFeAdVqvR7qJZNsFK8ef4NWhxRsGcWv1m8M6FAkzm",
  "key23": "2kTSJ6xEKvhkRZnZRa6nXx1FsvJd1r8yZET1BUGTc8vqHXK6ybXEnircCCpNCx1iYGHNpRenunHP7tvLKRQmRepf",
  "key24": "nzLvKswCqdXHkiKXZfFhKXxvi6oDXcivcZ5iqVjkZJBE4MPXeDDcoAezrBGfuYWGBqUYqwiJqnFj85zWkkL3cfL",
  "key25": "4vLzEHC6ajBZEyZuw6fi4aMe6Q6aphfjZwenPSrU5Nyr9DRaCXQskUbhMFKo6qDgYuRya2DhaLSkJzi8vmeFt9AY",
  "key26": "4F1EqGYqdeAXTzbRHEsr5g3h4yT4WMGdU8AgQDt63pntySiLAY9mQmsRM5jNP5rk7AZAG98xV58zAGDhLBpBBkxB",
  "key27": "33LCgc7yCTagbLBTH3MRoZ4exNbkRhMRpCwWmd6QgTW8wTFLke14siYmTwHLNTCK2ZaqcXfjW71ZXjZKCfTVwe7k",
  "key28": "3xzkcRLEJQnpReJmn4L6UAx3aYZL3AfuEf4jMdv6VRzxKpF1xGrLTArFJWi7qf7YpTvPsw4APbGDavPKsbuwo19v",
  "key29": "2sBRiDMMFVEAe8bNNumLDPWpqPuh9tSZYdGYaSYXdiw97ANPH4qB8o4n3zWm3jJGwbiyVMBHbax2sGG7SYM8tVjy",
  "key30": "511FwJCHJNP6sktPcPhmg69ysMGX3L99wn9b7G43bv2kxWTUprm3S9Cq2zuT7yJ5bzg18udRVu6TTjJJCdqrdcyk",
  "key31": "58ahFWvE6zBeEy2tzwQdvHkGza2oXxDAUUd78aNUPB6bWN2c17zuE2NUuDEut1TUSaKJsQDRvaJSuZivVE28FMBR",
  "key32": "1aKR3jmCawFBczJHzzJvbbVkimBRKtEF7om8f2SGepd4THG4vcKoNjStf2A3B7eLnC4bEy6K82Mm96JMExioboq",
  "key33": "31k5WYwFAAuxgZ4g6SJRmHRvh2ohh3nYiAdsRJsie7ZrUTNmfW2EZtCHpUW9AmUvNfuUKPnrRSmgVmAMv8sRCs5X",
  "key34": "4eUaMC5wtQydy5rk7Bx5vfz7ruNf639ALTmDZcRrFdD1bS1LeJwx1ThX9s8jNxw4e1aNuyeXsJKTa5Dz2DnbvTRw",
  "key35": "25FYNFa68MEMFKrbfCBgkaNmtaCvTwsFq6KyfbyvrRGo8KBD7wuR5gVKJ97TLSgDKjdMtm7mWhRy8yNrgJXeJ8aY",
  "key36": "67QmZtpc6uPoiZMcszKDEYBNFVXtgShupEVELKMiT5cTbFDVnWWGpXy7iWqhRDTQ8zn5AGYv1gGF1ePSQ4qPVjB1",
  "key37": "tyMVLkdHvSd5gjmBnGRqaRzZDVxRS2AALVCAkA8HeEvtYYYM4WLALGcJxsF7KCCJFgTMmQHpdTjH6GxMBVVrrr2",
  "key38": "g4zt69Fda12i8owQHpotYJKYdaD75CRiXhYBx1YLMpHrUBrUeKdAcu6zC3Q9YmGopdY4xY6iHhum1XHqCdYEupu",
  "key39": "2WuVSCQ83qKZwWZQALk3rRTiBfRqmFZyoBFawGvtAUjQ17MB2wWLifX8cVChou6Yf3VGRyGsRVHMPGxvMFXhUj5E",
  "key40": "2GttZ4nmKBLjhK9vACMuZWwup1fhhFhqpLC9wmjq5uqLVXabTZrtchgaamdHaWd1av7xoSR3KkTEZvCu7Ejdhb7A",
  "key41": "63bBMqo8V8zzFjKXjD5BnXLY1EtAr6uHDsJhURuhZZZFiDvKSyuDNEMgECxMWMchXHbcfGL2mdRfNkADCRid5xLw",
  "key42": "MJAi29JW718iGrAeoZaYLAa2AmTWRskwiwDyHRPgEtuXR671BtweEwck926pUmp9gFVjKhHRCHgtXNqjnT45pu2",
  "key43": "QHR4cXAu2MiVngZWqyC5kBttVqfpFkoMMtATNvC1f37NAtELokXFnkWQMzk3HuWrAAttYUyyqP46oHsXYQeH8w2",
  "key44": "ih6rnHhQCWf63m8PLR95XE8eYt7QPDi8ktJG4FoTmK7EqT1eGvGRUR9hkkdxrEJEWzwZgWCGMSMPgpQa5VHUbgL"
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
