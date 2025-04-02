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
    "64voA3T5uahDB8uJutqWo6nwMGqfuxARgCyVXxFpR3EjHB4VbAnJAzbra1MMqFxs5fMg6xwGvwGSqM3D5naepEZ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33ochE4PZ1MguUhBFWb2LDPP1Xhfh61W7ppXJKvknBBPYiFJW23r3BYWqTLMPbjLJg8gTkPbd2wtB28aULRbxbG9",
  "key1": "5ev8PpWSkMBDbFR7EYHB6hxbyqz37MSMzbKuHGikiJ9nt3TXpQMkvt8awRAVeSXxwcCj7uGFTGe9sWuqwPGnt8jZ",
  "key2": "3iWJdpnpaccUPzij4BieuyVxeoSeM2GJTFP7Xo2uVuek3c9WxfPmLQGapfDWkyhLbEPDMd6cXyVvCa5P7vQ5ptnq",
  "key3": "4An9np8daRmZyidpD3Apws9sDQQ9YrUGoyPWDK5eEDanTMMZMBL8z7qMFPd5fPeDZB4dkTcpQg1jvj8S6b3WyCRf",
  "key4": "HZNeHZo9HGvEbHubVX536ntuVSXu25GDZf5PFfRKd8mvWmTWP4oNjBSvq82MpxcTk1ZoD34Yes8XNW6KAvWP11B",
  "key5": "VQbGPZ9nCjPku1pRcYWosxBhrQeiNLbbZUdoTHTtGCXSGFc5oWKBXG3ma1s95jtW9xGG97sLyTzpuarbDxqYJPn",
  "key6": "2Cw78nMpDzGEPEXY5hHAhzF9rxZxVV9De6d9TWNXtEmX7r4naSCsBx4CVwSrDfhM8XRxdhPPEQv5Nw7xGxgUgcYa",
  "key7": "4QvA7vzfvnnZbn9cZQtRPUrvW7zehvYfoPPhCXHhBkpENHuZFz67GiCwFpwTpsD7P9asTgXEa3i2FnNzJqWnmkD7",
  "key8": "4nzzpAysF8cTzb5RT4fW9hwMBNRWtLtMeoKKHJbT92qnx1mBjPxBG1txrid3UYLVGX54FVAMx1aAZWTGMpgzknQh",
  "key9": "32ASAXSD5CWqHS3yJbSUZu3nVKPGVKWV3p5TXvuAQ6yyZ2MAbSaMhfriciFKhVQ14cVAjJ14LsBK4Qt2VTXmDZP7",
  "key10": "2T2XDyS1uFvdWxFNBeKkRGuuWubHTDc5e6v8ykUCqzcbAoGbGnRUh39r18Voxsawi77suxPJEeZKJUB5gfE6RVK5",
  "key11": "3qWx5aYMZPvGitWok4mXT7S5CTTNrjnjh5g3TRxoTP2zayXH34KVNvSjEecB2cRsjCDTLv425h4RDxN4NTAbeRJe",
  "key12": "326FpM5gdnQS5cLdW8rgbUadGjXa4LiGzqEAga45uSp2Mh1cPtSMsG6jQH9db17PpCodGSHC39CUaFBv3WZUeR42",
  "key13": "3JbeCZ3TigNY2qRGLT8X99x3uqUbqTVB8izt1cbASbmQh8Ab7ToFpSYDiPmM4LdeusFo2YSjguNCzXUK34mqM5Dz",
  "key14": "52ycRQ6k5A4H5ieaPhGRwbjJRQdYEnfDxU5PK3KWvZrPNsWEat5bzQHth4VAY83wudLHZseeV8kQbJAKLcEMaqGp",
  "key15": "248uSse65PwcdGMcq9PWtC4PDy5NiqoMHkskCG7o8HUFbi6Qj6tY8fACBiKDssM1KYSiZUdXSHGVxQ8RoWYYsLUn",
  "key16": "3Zx687zhEt6cyvcEn8yiX9QnRNQGUwuzyZXTND8J5cigsjyzzDe4K6ifqnhg9jRqhwzisiQsxMRDpxniNk8YxCNe",
  "key17": "2YhPxuDQCiDgzskdgju9n6fvCRV4tMuNPP84gju6HXnYDBaMgxcTvJ93a1Wo9dcuDhaodG67HpCMdcnWxPMg6hgw",
  "key18": "5Vi8sFwQ1KVwYC1smB2NbyRSLGhCzcuScPgC9WpkkUbaTcvfTk6Zt1m4EVhUaHfb7RJHXDV1WwoKw53byEvf27eH",
  "key19": "23cGUg2tjjxbNkz6GxGQBxmdV7GQFdTBnr65mmLW714iFQj3Sd8SKAvCxe2ZxSCkRT1MmFv1DPGbaVFdh2oars51",
  "key20": "4kQU9eqZg9G3uz7qSrcanrznia3DNEnLq2NuutvwMcgfjY98LEqNVUrQEwXZaUZWAoxvXBttGhQbaHYKBiDGvvTP",
  "key21": "2f6EzDGoPVaJMWvxsTv79Dn9MhkcHMCge8UCJApHCsjpg3ijcY5EkAB5imJAQc6FdmPuyEKsKKqGosd2iCwB6K3a",
  "key22": "34Gg55PStAnZSnuitvz1LyUzb7WkknurGftYPvpWKrh2gmevtMor5pDKnHqVPDeaG3fqApdMEJ2BzFdqUi6tfMnM",
  "key23": "4hXv7VtX32cgUcsdbLLXdFFdqve2upzGkL6W16n92oSk4bCx8WpbBWYVryNz4zAju4iXkAC8b4wZiGAMLshK9B4R",
  "key24": "2FC7YbkjMUCzXrfNE28PvwybtbHfVJDLkR5MjW5BQ4bioj59pkxBqHUUTxqgF2n2etMFiWFbk5qwMbABzVbZRRiY",
  "key25": "23DEYd8or3T1VM9Up4xu9B2B1gNtxA5kWoK2kVW2sbJa4s4DypjXyQo2M26s7seLVNgWbcfbShod5xggq4eyuME9",
  "key26": "3n2LHyicg3VWSCzSqZabq2uWwCLn661BxFPjueT6BKwop3k1qqu3TYV7pBZT9dNa22BEkwcmmwBYEDZ1qVJWExfm",
  "key27": "2MR88sEE9XBXVaW8VYaCkCdGrVqqYbLAXovTsKkXijamcjtKncs5f1jiay6jcSKfVvahGoov89kAqW52Eb4nL1ji",
  "key28": "2dxAwSLp5kHxch4nGbMTijq7Gq15cM6wQaXGsiAdsdwES2s2LkWXU45PnpEyzsaBFoDJ2sRdtX6rF6gzYbSnScpF",
  "key29": "66c912GFPWbvpRpGUr7XhpgVp37dRGKbR8j3bztEs3MvdXh1jVotweYA1LVvjQEcE17tB58tp5sfnaYvRHc551oC",
  "key30": "4mUaxDCBeMQ2G4DXEqpsUsgoqbTH3qkPwxNCYAT7exVskLn7d7CKtriwVAvntM9o1keAWucszBEW1mWSgDJMNhcs",
  "key31": "2aTtCe3ocZPa8GawDjX3DTbN5b8AJitZ6dKExjevsuzCS6HXNfWu2ZNEBDAk8Xq8KPANhVCAARDiLUWUrfSoJvM5",
  "key32": "4FhyP15dxabnsPtiXoFjEkFtQE9RDGH94BZid8bMyw2KVE6rJHjFMN4pbgowbsTdmdZgHZdTE6Coev9hSNJuhTE2",
  "key33": "4bPvxPAsNCKgLUoBACRoGn7q86sj5YDkyydnaUWcMf1JRRjjBttFjr8urnFx4Xh8A8qYkMN1NHM9ba6Yy6R7cLKP",
  "key34": "9ZB9bH9MfwZZtQrX2W9KoonZmJ3GmWfy37v73gLvzPdanfrckJWVM6G1tcgHT21hgV35RzcTVV6NzBdNmar2Rty",
  "key35": "2BEvLdWZMaQABDys6Mn8Ebfgr2QpHSbT5Ao1V8ryobSr9y7P2QbYkU1nYzfNwxqaHVMvmNtRd1SwZ3NG29khfRzp",
  "key36": "3aL7Ni4GT1AFuerJxvtouG3Zz9gEhqva4jowaMYMwXPA46jYwB9jQ3cEFRHeh4nqqiLTT8ZzbHVoBwbBs8nR2WiJ",
  "key37": "5EtrS1n9JUD53HxtBaGUTeexGuWGAp1M53GfFFXHtgzvZ82fH2bCtYpXFitgEfp99RbqenUE5N61gWMs8z8SuZDn",
  "key38": "3x8AwWBAF9sw1u9S7b3fG5j4CQWSYTJjQeZefmKpEqTnFno9LitQsTkjm8TepNus43qRzBUWWb8quTbMFCqSeQSW",
  "key39": "3G7CeiuH2yXRsxCmeczRdg2FeoY3AcHk6Q3urVFNJJB8QpmP9CuzEQwkSXtG7jVRH4pvhkqYNGHRLMafKhwps2WD",
  "key40": "3SWy9hWc35NPtT4ZUAroRwzx2gqfhZEPKvN8kZK7B79sthtjU7P3pbRDQav2BCtwipUPHAi7E64ugyQtzEQ3NYWw",
  "key41": "2eRefBjxKwn7zNduwvqwBVHJ2JuUscvi7RUxnYBTVPFpSA97w8rVf1wCKsLmRiSoXAVYfXKQMN8vc4F9uHXKWexD",
  "key42": "2yrmBRNNZs3yVPCd9sUXkfPD21H7qcfjNSZzj8pon5KVMVF2YbjSgdMUN8yyKHjNiePSkByuvjxE79pw4Aa9BEjV",
  "key43": "t4CnAex6xZyon8UEmR67CfhFZzhPuyp2H2wHhfCea14hCeJyZGEeE6WQgVvcCaUwWsLQcgDYRngBEzPKsEPDVH8",
  "key44": "31xA4ataYhagxv8Hp7vi2BfNrJqH4wtZDgSg2ZfaSU6G4yKDCEyAXiqy1CrrvHwKBGd2e5CMueNjrQrbCBb1gHKJ",
  "key45": "2gjULxHTi9AWDPpfTmbHhTAmRXudgHC7eaDZY9AZVTM1HXqbxMZxByNnzJ3YR95hRU3eygPaa6T4sBUPtZh6tZab",
  "key46": "47Lpr4ED6hQN3X63amp81xosF8oyh5miJhyhKdcv9FTrmDPQXoUuPnAMh9XhqM9Eu4X4BxKDxndbqibSEQBx41Eq",
  "key47": "2NNcdf4jehDah24JTB1yjVvEb5fjm6xkbV5e42E8LvQRx5mMQmu37kr1e5cDk5v6EW4wZAEmGd2fJP5C3xWrY37i",
  "key48": "3w34xqdphJFNU8xnt8x7yiCx69TveaytqPdm6XmzChi2GvKxeTZ8kTnCYAtwZHWyGZ1dHAALb6v7umGTZWdMUX1e"
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
