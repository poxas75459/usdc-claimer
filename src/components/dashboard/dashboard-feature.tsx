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
    "4j6YvnUafUVSeWSz6FyFQwtKRNjoEArkyqWFq3vLZHqs6ja1bk4AuZxvwodb2gT1bNZzu7SuKNCTpeRGZV8oi3wY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VUVNC4CnYv4wSEzryvRHsQzLSMMc9uwjcoPjyJjbJF6R3aBYHkm1TP7NWC1FmytnXM5gCp9hLSjapVs2yYgbY2m",
  "key1": "sn15diAMAbhLd3h6JhqtqJrxLxQE9L8EDy9kK77u6XjDUhFHaiSyrEXzvP7AsTEf1drt99Ne1aLpLcosknn57jH",
  "key2": "2DzbSMD3yUUKBGZ1JA5TXGCARtA7meNLUrhjsWrXVUrViQtPycXEdJ9CdjTSoUcVAoR5pzAfHzKC5jMB4SyePN1q",
  "key3": "3gctGUFuPvJ8yUpAa1HCnCuJ7zo7amXduPcys7uBvDATbe5H62Bh4ZTEJdMn5fKnGaSqScvwLXjDvDGpoavRRdqa",
  "key4": "4hUV6GRoSfg1HLNgzQMnEeVncffnhiBJUnRhTe3pkj42rNt2mYcQLUh3GZwuVHa5SE42HUquzSwiCD35gCoipSpj",
  "key5": "4mhhLfTg65THkK9sFPDShY84dCbxD9DUBqa23aqnBdjqRUmzpR996m8HtYchiAym3rDRUHk6czBx4Fq2Wrdtd3fg",
  "key6": "47b5sQKUsDMsT1VCecLbeNf75cmWDVBpfrTztMZNPDP9bkyvEqf31CFSi2tT2zkAmyDzhRhEHkvcHXZxtjXuthDB",
  "key7": "2PHKUx1kdww3514VKBz4rxcb512E3NgrqGq9UWtgoc6T1S2zRfzEXgxuDr5HeANgewmehf16B3Vgo1JxRR7aXhLz",
  "key8": "4RjnguN8fst8GkAzarBkH4f4akhsvWHudAkhrwTNzNzjK5cd9iU7bXuiR9M1z2S2gtqtXp38SRdV2iP7jYBD8Mja",
  "key9": "3TuvFibnWZhP2d1K9GMP1DF688yVxBCrjm9Fwkus1TSyiYfM1H7BkVbDnFTNTquxr7MtjZLB7Hb7g7u4MyaqBYrb",
  "key10": "uuHb3nuU1tHmjtvAh6UxUENbjzZdocq7dvBptubyGsSc6rPwByTRsULfP1UM6Q38P9Hx9U9Wb5WNg1fBbxPJrzU",
  "key11": "4UFZi6bzPC32Pn4Gg37hkNeyjGeyQDmaYnAiE4ugTWUAph7u3hApZGBswbuLDtv7fRgmGguuMW4BpqZBHX4zjjbC",
  "key12": "5J6odJgFtMDvKBAXAx4rvL6gLQmqFkX4j9dMoQdzXTFH5g5yfpobrJsJe2nkbiVzvxPrDE2j5Ff2BaugqyioSWnh",
  "key13": "R7tqsffL11DF58KGccUHnJMAUqN6eKPuf5zuABVeufHHMhrJLwZ4mJDSKKk5kVzHCbUQxm2A4fF8Fwrsy1zWqWo",
  "key14": "4dGLjkAJQre5KkgUufvfEDzAhyByQrpMHsMNHjrNko6QNxWBQPAtekvvGJhVyxsa7LbXi5tuCjHi6YVaR7U4J6bD",
  "key15": "2XNDEDWuyKKV6ZhfQYVmeNGycBSPzjLMcG6FvKLhiUBS74bX3crbBcsMm2d81aSk1pgmE1wd9abDtZAPKZQkBiaq",
  "key16": "nsmcryF4yN8H7htgTBXawaoqtY5x6vwCiUwPeHP6c5xGzBQqSM678to6fwKMTMuZtTqqfw986uLtDYQt1wDCjVy",
  "key17": "3WHX8kWfWEMoJ7WpbWFFSPzgqDYaRQDZM8YCmRwgtEMNgTdvEih4wJqRwgBHyj6yNRHaBFSDztmXdpSm7WzpwNzq",
  "key18": "2XZTtspxKHcjhtzDmzDYpyKwrzamTRdV4fK5nRXbSMbRKurn1UsJwPz5W7dcnjx2Q2uTpPo7sKAYYR7EuJRUMySr",
  "key19": "299WJH8otydDUrH16SQ9FTdLxpT6QbMeotCZybTfVGJ2UqF7VvkAQZhzskFAo9S1Edz1Hz3Rj2HBJZoyCNSUSceD",
  "key20": "2EWANvcSezBZ6AWaczJsgKUaT9dxZSVThdAFfgKEumdfcuJoeCK4wgCLaHRZv8MxZ9RwBBe9Wmc8nqiFuzLtYyLT",
  "key21": "55J5sMDyK2LphWy7ZiNX8aybz9cFDgmiapoP4i4UxB2mHfJ168RZkPJ4YCwZf9TXiH88dbZLfXR3ZbeKiKeXruWL",
  "key22": "2EHfveMGgdby7usLyoN7pv6NbuUSJXVRxek6uZaX5PHVunm19poLyPKqths1pWA9ERaNFdu4Fnu8twhWatzss4Rd",
  "key23": "3fv8k9CEtkoR6DYaZoo79ubm7nHkGoo8g6NJntnbGCP9AmyhHdRi7Nq5xQa3HUMPbZtkdePwfGejicH6enJxb3Lx",
  "key24": "3fEiW5bgbGFsqrBwdqMfdMkRfU6ojjmso3LmQk78hhspifpCTGKyheFd286EUBbvxcGBiVcoyaFicAvi99ta7Jy5",
  "key25": "4AYvAq3ukPsg8e9BRu63B78Kr8q2GZos83F1wXnixgpF2Wkd3mA249v2uPLK2bLquJGPreBVAVwnfw4N6KnkwLWN",
  "key26": "62RaXnxStzJdYQhZLesXEnw7pyiLwDBvetNdRfbZg5ubviPAMdeR9fb6fbd3SBN7nrFowVm4ewqbP4kwJdxB5u5j",
  "key27": "4SgHtpfmiYUKEXmB614B5ewrTeDzKrtwo6JRyt5amda6RyKUo6qcRgDW1CfjmWU3SbJbcy2Pxp6wmjKPUKVfqv6H",
  "key28": "kin8Hcjxm6iYveiNmemQzzo9DvSjvs47Ct4PUaj1cVQtn1DSepWBPeerQCuMxYfvrEPPjDpegNwch3aX5MDyACq",
  "key29": "4JbCRNcLDsmMChdELj4hFmnEMEJCQmqQuRvnveTGvtg32R1N2NLRJiHA5Sx53MBYUVKPnXHVvurermhaxCnXTYVU",
  "key30": "3fFgv8Hm2eLBPPQwJwNKFpEhfSEy3qVQ2Fe1ZFwndPT4kAtevxB8SYEZG3o8TdyCHNJJYeGZ24fdWkFE6Yxmr1Rd",
  "key31": "g2Jrb5qihgSTgx1AvyJUjurV9FPrdcmGz8Do8iMAqeCU5aBJphaafpwpkpkBAkFCAf8oA2zRY2k4CzS1AFaM74i",
  "key32": "4JGjCoPppSq5X1fJUnyjpyBtRtrdYwerwSnmBKfzTzPVYeHPyCP2dDRAK18pNaxveLkaqDUH9SwA4g3prJx3R2Ra",
  "key33": "2TkP9KeccT1wb4gthf4h9joEq7Rv3JZe5hLjE4yXUMLXSxJvXMpQz3aBpnfvBX16SPZwn5M9Y5ctu5ThJNGU4A8j",
  "key34": "BGfHFGRcx5A59NPfwRZJKYwZzTyH3tP67nhtPb6zEoBQ1jSNSGiW5N6THTa993Wx3YCmQbjLxsb7AwiVCmLn23R",
  "key35": "iKWJpaZvRGtsmQmtnogCrJs23G9S8KeEhNF5MJMpnkyQV7jbbyBpv559aLJ9kKwS1eHx5utvSpXiny4yQMbCob3",
  "key36": "4tk2jD23nuMTZZFP7wt5V9PMdUuKk667eXHkfWWPjPvnQ9z6jkkDWVjVxsUsaQLRYGbcJrQBd1bSSEuEy4TiFMzg",
  "key37": "4RAHu1PGK2cNJEmfGmCC4uVq1VDeHFUncrmQ4tS7R2Pe8p92KHSYbXbBvNLnPcbatQkvq34Xbac59WrxAhNQawqd",
  "key38": "3YgwvG4QjLbKoiUfX53WwxfUJKYhirormng8UNGiUMhTcvnMqd2JgdwyZ9HofAeDSyJFyuzbR2uJmTyYwbtXbA2Z",
  "key39": "2E6B5A2SDQtrupxQnBgpLVYQqSWrEwLVAEYwAYFfDGq1UeUvdPvJmG15mFk6Z4bABTfkLJmZoTGgesraj77Qxq4z",
  "key40": "3MryUDb98AcDuXdYd9bXZFSSe7MEUGLQS825g1wfdL3iFfypZXSQqK8Zai9gEUxSKBn4FT9S2PLF9iZZ26WW5faz",
  "key41": "4tXUyePA8cKJAP6x73RzN2Zbh4drZppmKwJsNy7rmgo5PhTxuEPyoY7jQEERzxkui16KkJsEBpFXboGQDhmXh5hG"
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
