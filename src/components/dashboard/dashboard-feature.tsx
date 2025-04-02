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
    "5rJKYAkrNhvygEJ3RfgCmfatE2h2F8dZ5Xowwihm2cS2fyTgfgGFNqRrcogp3z7NfNohSfy7y4rzRmbVVmPXHfTY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hNNKY3qZ7Aga5BWGf4ypKEum5rdU3dwYFpVhnaqHVKn7hf6BJdepCkpXwsHsx2VP3KZJPkbWqvYypN2FGvNMkHA",
  "key1": "3V37Z2h9Kxb2MmyffwofDW5K9CNmYZqU5dEijEBECRczMPNY8FeFfBnPKZXkjWpzJ8PvrssTsGFaaKbmbcxtv5G1",
  "key2": "5ukw9p8ogXLub7gzBgXu7rjGZGBQo7hX3DzgcJ6HQVvgCGy2u6QiJ5ZHmYeSZX2HmLso28U9H68ogXUPg3itPhgj",
  "key3": "2KB136CfqEkuT1kfsq8JrJWiySZaBTdGuNwr6PYPGBHyntbcXNYWYZo4YV7ZsjJeTMBNQArQfQZKRaHUtJdPnqwP",
  "key4": "5jXBFDLSCVJ6Nwp6wAStEkeNPMExNg4cmwAdkUnXgxo1dZAVKtxxHwojfq9pd9sPpjmuBZcZaKJFDMC1jDiFwFC5",
  "key5": "WceDsuYBSsU7naURsjDnS375vv72xE1Ds7cNmPjddzNttAipXpJYEBAb1CcwYn7pNEAEGfqRuYK9rAF26eUtieK",
  "key6": "tEwoK1uVxf3BJKvdmqewxGiY3RPWWJGczp5Jv1c3v83XAeyL9psXbMcB1MkeAEg4SA8eKqnHfZpr6z6z87k6tuM",
  "key7": "Ds93ppwDkgjZTNwVdh8Ud5TzJXbRSSNLa2YX9YzAruxNpJhzmbE8qSvnqwjZ4vo6vTd5bp2og1omdbqxh2yq4tm",
  "key8": "3WKLdkoBpoCcmPAvuZvCdFyErEyZkSKjYWPChVBqgABpoZmj49uyZt5N6AgMJqNnhZNjKzWdu3YM8J2qBZbXfnck",
  "key9": "4XgKk2xVgecJMTFS1bL3z86GXkYfwmeXxvtQiWC762PahgaFBPsXTvnhnGQhferbS5FzBavxbzQmcEvFCNQ3HAZ9",
  "key10": "3uVuGy5qwbysGoJ4hnYFUKKuajtvr9pGm8Qetsv3hsu3ytAFEmq212Ur2yYLTncFMALckoPV6h7EF5MgNEkjtyLb",
  "key11": "3svcCq6WgUWBDKmrZQ7i9mVwZQKoJasuhJFCMeeCwwQWt1xLBatBG1nbwuuqiAgfCcspxtoatcPK9gAk5sKAqrqU",
  "key12": "4Gtf56PDRSZVYf8juSh8cQZUYB2S4LEJBAnaUEDmPkMHTQVYLRAqnnPMeVApGYm5FUv887toQ6PsRiqmx7mEJxd9",
  "key13": "58Kzs5dwJ2MyS7M6BAU4fam1RnrMguieJuLxZePMtUybN7a8REt1AYPU9gLNfKHhN7YgKrW6z64eBBL13pNwViDP",
  "key14": "3hAtyTouzQEP4P7BBvhMGhFH7yqGoQoMJF2HQL3sWfDBSRD4R3ghg5mB5Qsjvgr2zopHPT5f4Yaa3kArYkTKaN4z",
  "key15": "3JPHmSVjTt6n1EhdszD79Ygz1j1dTvfAEkFYSQJ3EdAmGLYyYBfWtFC9LZ93jt4PmrPRXFpJoT1M5C4ARsYve2qr",
  "key16": "5sXfXGKPWRYLqA3oJKfQtrnTiGnwm6nGXg5uo15NCvPoKTVjDQNr1Re4k1r2fibx1d39UJtTG41TiwAdQJpDs8kD",
  "key17": "2acyigMq1j27kRUU5PBR2Lb8KVkTwkt7JDYFT8NSqkvJ2pTFjEg94B2yovzfE1HFNyCRfRbQXt1TgrUbDLFWccmi",
  "key18": "icchvunEF674ATGYU1WwdVa8UowruHc7ZYFpnrzYQLhc4ZUpmxnDjTxw88VhUpyhE8agmjNPncic1QET6WLbbqU",
  "key19": "674LgJQqmF34dHZfzRRoLPkomsBa5xUToPXC26ue5QWBKErS2Rexe15xAbbJoSWF5NmfsLXZuJiPSfRNg7bWZLnE",
  "key20": "3Ha3MC2LhZ96Go12z7N6S494t1nPCo3hPm9vmC4Sotq7h7Y8tLYkcfGNe33Pbjd9xoV1Cdpcq2EHAuFk8rGdEPk4",
  "key21": "HqxupPC67xN4VtkKHP1Lw7aMqSb4hm4mpgHcdGYC7yb6443X8ZS5uUpXA9H6kLQnQMWpD1acW9YvaxpaFrpbaGv",
  "key22": "4CgaQyvfGkcBVvM3dEbWRsBHiAt1cyix2CdQW9soJhFGRMnaYTF6XWvGiQU1PM45VZuFY57tVpeK7maoqdPxwAfx",
  "key23": "5PHQW5HcjyUa89FS6BN3kSTmN8F54veEZdshvv9h8YLorGbDumaxVjrj9bPXwpbU6mr39ir94tyTZaVowQASUYXY",
  "key24": "5fW68AXdvqoHdRqguAAZW2sCqrvHXAGLv3BeUdxe3sbLB5bFx2zt5ZRGca7Ju2SWdRz1mk8tDnb9D41X7fyWs9gC",
  "key25": "2Ho68vNTnASzUECks4KE2q683wP945innE8mVNZuP2FdhK7dMyYBWQBsfVaSEXv5aV2Xt3zGQYGFqxi3MifXBbFq",
  "key26": "629sBn8MTbEn3JKGEZ8vfEGMjXUpBaPuM7byF9fMds5TBih31zi4tCoJCj1LxJ92rn94e7oxgYaBa3hMZsUswMHB",
  "key27": "3LAm4idPB8UHgHxf1fbFfrRMGyq8NCZ57hvaTGLWmfJFecqS6e3KWVLKjmpN3YzZ8AEe2jjxjp8fNeXRxE4jdVpN",
  "key28": "4Gpnd5hkDaea5TX7PjhZo3FoA8G3z48u4Bs4KnwecH39dpuEWrw7NeZMYNCz191bzKKsn3eNaFhskV6NZh4i22s2",
  "key29": "5XS4E5Df1NPMRT6UrAnc1w1abBnWcazqhLoWv6RWcofgXdKSUdUDVFTsZsmbt8efYAzFWaNsSpu3t1mKxLbSQJwP",
  "key30": "5RVPJrc92qSMrLpE2C9Fn89hpVmPiDnH3sSKSBb7Mkx8EcdSoC8kZwDT58avC3TBzJp7EHCx7SW98kkcVoKRAy7g",
  "key31": "nMZAtXhFJoothqLgWSdcejewBMDoJ8Yttteass5NHgnRUFjrPoxokrU7p9ZRQun6HJVk9oNgrX8wEEc3MLTbBLL",
  "key32": "bZGU7qCDNuUvEGEK4RddDo2R4tM75M1HnvnbbPEmjMoWEArUVk1TLuq6XeRXwR2Gh6NrejpP1RbcSksn3BmKAq9",
  "key33": "6g9ihabkeQHt4VafUciUBHndt5BpuontPQLBS4iugEGqDzK8BG2FcauGEjRStbovNaTF7CnjzzxuKTohFdVhe8F",
  "key34": "2P514NbFyqvzfPGp9zesdRUAB76oLGLr46a9PYTmcp2yLHvrLiN8TqSWd1S8zxt6iocMkpbfNqpfT1YP9c5pnKum",
  "key35": "3XYeq5syQNrBY6aEyDBGLtRuJxgHysXsZKmTqRXTUj21Scapjrw7Dv9WBXcR2ZFffQiSTHQZ6sVQkRFye1w4zFRn",
  "key36": "4iY9TBE4fjMn2L2Xenn3UUWPu6i6NakWpV1U8T1Qo1a6Q32fo4TRu3R4UW6x2XxLHJq9BB1ozPiSbNAYw6AiCPQV",
  "key37": "3JyAq6Q49moNggBXy9eXA4zFSGXvA3asRVn6wJuxEra5tjGxzbsjkanNWFQ8nsdbKuZjUfoRyGMjZzVfnercMYMd",
  "key38": "5CLz6SnVp36gzpXffjV9GSPmRRtb9jFjWv9JbQnA24Vnnoy5AfgwJSKYpmuGLe5YUPUmWQEpaiv6cZwtZWy5SYkV",
  "key39": "2ZwF3rv97MfE4pb2PYLU6PBczD27CrrqELRoYgDnizJxGLzhmBoitgQj8ZC2dZ7rRj7wHCuu47uodWiLdZ34mHs5",
  "key40": "5bdpG7AcV4zCzExXAppnj45V9moUXM7P5BTj2qbatVATbWcApxTEzdSTpqz9NEYfB1cCZQ5zTiZhMaXywzkkzWJd",
  "key41": "61QfMhh97Zz2f61J8TEJeAQ7TxaiaxpXiUi61KnnkwgfxE1QLdtcyq3SBDsVMoSpTZLNkQFvxn3DkH1nkUmLY1tP",
  "key42": "647yuBssSot14NJr7jjVsWwxAUCCCQ1hAbvntSr58q9tBXLMdaAwGUcg93BHHhwrdcQGQoB9yBVRFUBbaVT763Km",
  "key43": "2nrCkU8TDGXKH88bhshrHuW6N3i3jjfpoWewBE26rFboodUWHqErnoN7RXRdBLo91sENfPtf2KjPpaSeqSRFgKpD"
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
