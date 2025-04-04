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
    "5eVYdPMvpZXMHt7vQqaJf39Td9R3JG4Mmq5Bi2FvP1CSCp5vZDkvzKtyYGps8Eqf9jdj8XQ8mWVJMZnqL1YHM3oV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zSmvSRNVoysiD1yBf5FARzyxp1eR7sADtMzRRjFWDX38owzrgpc8V1rr584kUguzWRuJ9ays5qaPUNQVE9MEqzF",
  "key1": "21Q9f3G9D5ktsYUn8mvxxStohsc2naSGUHhz1Zx5snfBTU9Ufmk589CBv3fusbAHsPUCTSVMnEcXghpkHFY6VpyG",
  "key2": "4D74xxZSieAiCsip1B7JBiF2n7Dx7CR3gf7awy5wd2UPHtjvf7JJhvToDEqAGU4dgJGW4zJqbtfyRSUtNvYTtAgm",
  "key3": "n8LfsiRY1LrVejJYuVcMzpGE9srX52dVan1SPBZDogqiE3pWoKpb4BzG8KPowFKFc12GUxZwhATCNJ4Pf1g7duY",
  "key4": "2qSxWD1SE9xnD1cU1edtzGUjjMj1JPKSwTgYTBjQPDeUPrgtEmNQ5D7hFFHQVos8jmiX5cJAE9oyh6Wc6MZZWji",
  "key5": "4FyEE6McvPjf31QKWXTW7BdTC2DNzGDbaJwZpzqX6Zy1T8tpCiBeitYnUeqBQ6mMvmpUs2APHQUMtpy9iNzHKDwR",
  "key6": "5jVEsHJRS4ZVpLSJJvixEgczXLXeuhM1PyfBvAxydkCx7ezMQgD9jUPS3rFyDF3LSiCqaKSejEve2dG1tE5PPteb",
  "key7": "2hvvnS9AsKAzUH9W9Bxod27h5tX8r1x1gJ7jRratoykjzaGeyU2EUSs3bC7xa2iizinY2cqXRgAHout27YJssTtq",
  "key8": "RP9dCWrMxW1NcxSp4P5DHFFYaQuiRrzy39qPKBgjxjZtHBHhKBYmWgeufm4JpP89jpcYMjJ9AyRjaa2essNHRGr",
  "key9": "P17aUwNCKSXk2hhdiAPWaf7Co3SwCykMzxgqsKQnaUEcZyUJSakTWCH8zC2jdmFFiPK21gSA14UEadPmYy6HGhq",
  "key10": "5HA7Prs5YnS7srB3ERXPqsYs6Kq8reNQSGK9VJVyD8LE6pacY1i4QQ2iEYrbxFXrHndH52SFhLejHnxiaeRnWDpo",
  "key11": "2E2tKBYbefYiEXDQhfEwxqKNoR9gb6uM45zXZ17tj6tnQcxcMZPXCdN5fuei3AHMxkbyGJ4Toeb6BAW3ij3vfT9b",
  "key12": "GJFFdZcMFkLfYiwdpXcTC3V2GrqS5yBWRERy8SofGp4ZKmtvUFapnUfdt2LAy8CqT63ePLX29F159c85zPxADAK",
  "key13": "2K8gW5cfy9WtkZyLmch1naDFPHfEJZrANR87GvSa8WAEmtiU6PVpV75GjripHSypMiraYvJfJQ5XALKjFw4cupgK",
  "key14": "HfWJvjyX4WzLNEvRxGgKd8wKCdwPpzDntfHXQfrtzq4EoXK1uhmauJQm2ch3g1sU7ts5p41F6DHmrXF3PdAMb2h",
  "key15": "vmSBz2hJuKNtmLiURZpLYQgKALc2RECJo5F927oZcuATFp2MSHPQV5yaDnREV35XzGX5hG1rSuFuwpVa67CQyuj",
  "key16": "4B3nAGqToNAkXHRZFC8HkT4sEBb8UMfpA73upgiAno8uzDq8Cw72yzqjgQ5waFa5vuDHmS5LVM9pJxeZahnsWB1L",
  "key17": "5UWkVHr4yj8r4HKVxkQBkS6ds1onu8KcxLEtsh6rtHZHB7vnnvy2nJpC3STexDke3zVT7K7ozTM8Hupdi7P3qJf1",
  "key18": "4WkDUmDuWBLVxnbFig7B2tv1dtXZfCFZDaTKMxZFpiQ6dYqDPhY8GVSKK4ygpiTTabrsJNkbG3ijE3pLyvn5so1Z",
  "key19": "57qwXJwGbDdeNgbRsV39dmMA4vHYkTg5so8YVKSRz5Zw4eS3Rg4PmE66pqptCiHkNcwWHSPmhMqGDiH8SrDHqWVc",
  "key20": "3utjuUEzSDoMQeXSFBmTLFj891Bi1VuKeibMAXzzURJ6ejCBod472DPicoyTAz3PBk5Dm7ozEV53GAXjEeBcjtiN",
  "key21": "4esheFy9xWaDXRn4juRdcrXwiXDm3kApZpDD6zGunnM3HD3Q3qNEHMsBBPFSBjzK2ezZWuCc7CRT8AYGergC375V",
  "key22": "53KQwqnQ8MTnVTAAHgEpQNQWZEzeqk1EDBTkaZ3vscxD17DCxgjV2VAuZCNxZ4SpwKbnkeaoaE3pNmdv7xZkfSz",
  "key23": "4mSGTc6H4xdX9zdqFpz2A4zGQo9aDo3cidjyDzgm8TYzoToUTUU5TM8zdMp6SKFScW23PWjzGxwmxhMmbBTjrmys",
  "key24": "4NPZCTfdsWfnngmm1vfcLADySx7B9pbYfZQaFui1fDVaasGkM3tb6foWYziRQsRqwrmrAHRS99Ci3UQKioBcogaX",
  "key25": "2yGnmsfNkq56gRxa6MQE722dE7HyqvUmQ49RxUMB1SJK4YaHoKWLJy781LezrUbTuFLYPsp3H5PqPhApd2yHWDje",
  "key26": "5tekdagXHsdewYW961fqDsqZ7KurobPwM4tz7ucNFCnvjua8w3uACwHEEGKHtLTZJgAtUM4yZjWxBKVSB4MUmQa7",
  "key27": "1MTqZjfaNSrekVwZLnU5j8HYDTLda4FVj66WXpASvNjihcpJSKNJiyy2nRpskwxos2WuqiYwFoBQUvLbDnq78PK",
  "key28": "SnxjPpBbrDmScovycBmMedCGGTrDigQbeHTEizuP2LvccnH4gEVMr7NyWC86gPJDGL51e1n9LDf2UC4VRjjWiG9",
  "key29": "4wc3nGFNnj1BZ48XUdYMGL4WpVoeYd9owEtkmy1FfCcgyFANbXLnrUX3LkL2uTcoewh1Uywqu7JaHa5PDb6aUmyZ",
  "key30": "n8YPYRa9kZ6GwWzf8QoBciGu6fKdGAUUiJQ9fVWwwRr3TP5jr4XVG77qAcso1v15RKXWqkYwftywYjmjBHNq9H3",
  "key31": "XANiV6BNmjGrQUaFQ24bx2m9cL2HtZejkNKxvRzpjuNeSciV9TuksWQHpURTtLpYHdAGUyunhzPPHbDfXn5PtRC",
  "key32": "3Mdbvtgk6A9xtX52A6XUwrEYaTHvDB4uwtbpu4izrSqfSgN8ELecQzwzGCHm2kE1c1WmSYUPPGRsma5pHgj3PrhU",
  "key33": "SahPHZh9rSS7WUzUVSQTypXStgTXLdiJBbjeEkyo77HFkickU9H7gs1rRp46yLLos79be7Y3ViXz1Y5AuyevXz9",
  "key34": "32P4bATuZZq6x8EyeWrRZiiGavyeWCjcWAVfG9Nn14o74GXtSHsqCqaGzBa5AYBJee1Qoez3eB9Bnpqy57i3bm7V",
  "key35": "4DoG4SXTfasypp5Rfk6hRfPwzvjq2nLDSK8YzZGnpt78bwhzkqm23irs4iM8p1jiE8z4HguSKXdzbLARnA2DHDQN",
  "key36": "4QtyaPu7jAiRbVhFFuWTuj73yQ1cjtPWVo99AtoEjJBb2QHHc9P3eEb8H9x4p5ytJZEmzg9iBE9yrPtf8xGarWbQ",
  "key37": "3U4K6fDMksMoQ6mwbgE9qdiLL8NCCvjLJo7DXjqpje7yuHmRPnhBBUjKPbtPbEDq1iyonRJoBH5sg5Fd9L8fHMfn",
  "key38": "5tN7xrR2MNwaWaXfQSNf4GurL586U8pzKmY2CFpXbu8wvq3UAhkimEEeX6GpBvpMNYeRBrWkMbAfJixnAmtHdrnp",
  "key39": "3A1fNKG36nkSQ2UVgrWxi2uFztz2bFx6Av29sj64WC4sPqcPoVrDbMxDHsVrsQXNbzquev3kgkzcnS841Y2b9YGt",
  "key40": "52hUJRKv9BExzvgjWJAYp87h4uHNH7EfUsFv2zmxZiyKEReV6ATKaZLpk1N3EAnJqvdYQbT2izE7uQtKfREr17Wi",
  "key41": "5zcAUw6z4mE7kwM1NcSJmSRB6jkpeyxGp7DUDQBg9kjanCgKib9Q5kYA6n4AY3gkjmqjbBqoGnrF4sQR6rSzUSvJ",
  "key42": "ef3Gy2kq18fdbJKdAFmLhGGAbxQiPcVhbNBaHWXzXGSohojYwt8DXMbuQCwhiABQmdLDiXSSfFYMNYykEGzkqFN",
  "key43": "2n8Hjk8gbWz8nRa7fPG1GdZg51CG8WmahFkXjqtxUUGHa7fUoZtRRp4agxtaWuaAccFVhjiqiRYYiEp6c4yXrJDg",
  "key44": "44htHvZMULHT95VcBS2Z9zMon4D1TSQ91VRr6GzrUbaJPbrsR7inWxXmnoTiBKf75FVtSV4KV7FSnki7bWwCSSCw"
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
