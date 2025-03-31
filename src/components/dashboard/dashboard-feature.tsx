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
    "nCGJicTbULHk8UfKX21aK3Q2DpaYpUe14AKbhE3v6SNf6PtT8mjiLX8b5LBuy2pTQGFfiuLbsfwJZHnGb2zLe5L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QG2C5KXz1dvatCdAEErbP4K7yF3nMyFCHwjAr19im5BEWTV3vAfAbzF3EZuqnZavKVPCNCGcqqsuPX24DtGUS2u",
  "key1": "5pqHeJpc9brDpj4fufB41CecQgDPRioLsCKty8LKFEuuj2qV6nrPtggn7WQZ434XC8itcsuFKPmB6rfr1BFUGpBP",
  "key2": "5gujcgLjVb5pmQTzRvGeB3mbT8MhSxGtjBUVtwymeeSiUqHeTRCVaWTwfJXLZubHqoUGcySH2w7WBCczcKSRWPMA",
  "key3": "HTYcL2nPCmS2GoWZMPs7qwHmiVvBVxRi1N274msSBsYVHnRunSDgn5fnr9b6MGDRhZZYb4bjKVzichBKwY61Z8p",
  "key4": "2jAH2KcQmKwTZw47rFt6reNSViC985mCZbNdWv5TMyp1iN7zSLYcXMqgXrt44suYd7ZjJVt3bfCfpyEfoUEdbzYg",
  "key5": "3gKwW5KaNFpekSBf338GnZK4Jce11e1CUtw7GPkXuEAW2WLhPo1VpfDfrYarh7oSyPrGjyPbN8sxttpFrfX4PA5n",
  "key6": "2TMmvBJCdzW8V4gaNFWS18Npsp9oy9U5NBzRUfZZYkwpJFVMJAbfCXGVNUXxbWdjsznv2LybupuvhLZBdH5YBEWi",
  "key7": "22ifoBHesHUvdvaJ29k4GKe3hkHVh7jW5P9gT14X3VC7jdJqq1Ra97b53QHMrxC2ofeFpLWrfF4NkNmrNWogDcrX",
  "key8": "25G4hmaiS3VfDekW7PZYrfS2trRLzabDjZA39NzM2kDgTj7s6zHS3URqxzrnwD37VCJhsP74ta9XBYHph3hvnZ5P",
  "key9": "21GVFnNoFNFhQQPRvpDU6a2H8xdsXaVjdigjdwwCoRRFy2Kh9HSk6H6mxSbFW2G3np7egDMdueuTFNejLGhj9V51",
  "key10": "41TEKFZhoQzv2qsAUXCJDPsHx8Sa7gSy9hQ8hzEQ8JFkYkxsnocyobJnZhrKf1nNsXq1J4FVa92dPa6L9E3XGQV6",
  "key11": "53W8QmcXFkNnF4R2vLrRFRuYd9RLSyfmDqB3nuzVq47DWPQ69H7jQCvtsEoH792SFLh7khXghBNA6ZzBjzNzyge6",
  "key12": "4Fm5HwZEaHesupq6oNp1oFw6hiiCPUC3moZKxDdZ2bWnWCu3m1LQQGm8Byz3FF8GLB4Tsapr9EyqgH15PhiCFxXt",
  "key13": "3KRQJ3WERt9XSZ4VhNuo88SfnmvcH78Yo6xXvbkNsFPez99sQkLzCckxyP82So5nYbkcfe5Q9j5UHA3K4UTtZhrj",
  "key14": "3jFW3ww9AokPnhW3Jz8BqcYvwfbdYf6eRSXnSaUdFTceLQLi2zRw5iA36Un7f699borVfEWWefnWfCCQYSTUMShu",
  "key15": "3asbEhjgEudDJwpXpfcddXkHiGi93aEeT8G1YatDYsmmauMunF4aueQXquYFwqEvo1beF3GjhqfrETEA93KmiJvh",
  "key16": "2FUeehEAoxQXPX44hUpsQ7GB4Q81ALy35hDKhFZFZBUdqSkDsnu9QTAmm4F4Eu7aaHZ9LZqRAXGjFFFMsJyeY3bS",
  "key17": "33DFxvyuUQXAwk7BWrwdFRbPPVqk1DLUav5sFcx37qk4TY3fnHackgqqx4ipApbQbRoDpxSWWejGE88tt5PMezSy",
  "key18": "5eYiKdvXB29s3j9mJTLRDozvsctzX5VXwZyS1pCEY9x6v2Ebh9hoWTSDN8SEmHv1ErxeuJ2Y7wRCmBLyJEv8gd6W",
  "key19": "45oUXbtY5WfoXRvriQDU368TsZCfnT54cAJUVkEe5WDUbeMdBpf8QbBroFL5jtWp61om8c3qpiKGraozQdbUoTWv",
  "key20": "3ScQVz2f1QgFwqtqZiLCKxApFjmcp73BzXEL4GT5xVwA64b9GM2hsyqs8DCyH6HYZoTxUp2P7DqZQDRmKrM8C1B2",
  "key21": "4TNcpiEN2c11AnPnNGFZoxU72v9uiN24qoffhq14ENPdoiA6THauByCPDQVTdoLWfN2BVgyLmK9SpqWAy5HdhyiB",
  "key22": "q8cJy7rbuwMbPNKPQWFqP333UNDuXfi2hk7EiRTW3ecDjXGJLxqFywhCe2tjod3UBHM7ryPbUgzo5fHSsVUhGWw",
  "key23": "54qH4xePD9Pfq2CLkzFazzpfAADYzmMFKXnphwuNEzAhC4sRA1spVZRRB4TBZZycKeoLjGnzoSVPdxmjVtUZVbEN",
  "key24": "4KEhML3n3RxcZyxoT3NVko9R2JYAPar1o4bWrUQHbFAhRNbAtpP3FYeNbzP42Mv2UGK866xKFBHF2tTKZ5eFBEWt",
  "key25": "4ncL63Shgzy5JsggHFAzyCwccgyMqMw8iwnQpX1foSMa6X6hYVUWjtrL67RCcHj3SrNp3VECYLXM4c8mdSxUGw2t",
  "key26": "5o25xZWSaSQTRqMPfqK7S3rw8c5db3np2ZHTXWmGJHjoQQ55jsXXEf4b3itY77xJK2dqnwgeuhLRzxoB1kodqZmo",
  "key27": "4CGJFiaRhZeuAMfPZQJvXoZfhyYGyDpMwNKoSJPfa9idg6wWEHYRtqb9DDKyQhdYqziLwyQ7a92rY4hjMCCFb879",
  "key28": "2h3a66CtZytKgqTDXU7z8GQDRPuhmNRaWXRYZBbxcxeJrJ795XBUdzVsBKpHGW4UKyxpqXMqgCpzDJ6dBnTFy9by",
  "key29": "3aTjksk88isziSeKWammystA6w85pCerWvQWMteCwysR71Vt8CtpKP5KbquE3bfHkxspSnWp4jqRGfMwFSoNt4aH",
  "key30": "4STxM8AT31cmbx9sxQhY5H5zcdwfecao1KTjVpcGNiaEczvVG4SXZzdzq1bUZLV6xDGNUa4mPL38F32yVYNKhunJ",
  "key31": "2aNyMkbjtv73svJqqvgakA923CrRLAtWW2HbwHuipDM7519DEmussXptTjCFpEzw6CSbCncXNRmiXEuerGvcxysN",
  "key32": "2BStKNrJeYABchVQHhdXQqNBvHqiFSmWeraGDBVgMUdgLy26ZsPqwRQ8n8CxYNTEj73EVv78Xz3JX56ySvkEvWck",
  "key33": "5fmLMptHzhcN4tVYCZDQXnaPfwVCSTpeoNza3PgnovdVH4HTghMNrbBBa4UHNhehKUA1VSavKXc1TdPcqCXbzgSn",
  "key34": "3jrQgcbyVXsBrqBoTiqUW3Qu5F9pwft2xqQ3qLjuYub8HGtBQkiNhWorqA6ZdwS9Ehd5CKUaSzBtVPTonCwWwUam",
  "key35": "awDcZBgb5DFc4KSBLhzZ9xyEHH5MS9YNWhuH6AM1AyQzA12Z8t14wxMbwx29JPL4e1feG4YgQb5mXRnbEetPpZ6",
  "key36": "7oujSbCQgr5BPV4LnMQSCRCdEJQMYukRH1f9TCgjZJjGyYr9rua4kHe7pJ3cDT57nGdv4pa6kJdqPFLwp8HkTBu",
  "key37": "4q25XikNFYvSb754JNFzJ61KWhqZ3AhoqmDhMnj8Ahkvygmp4BzbwGrgDrh3TRuHvozPe6BYn2H7HQGqejZAMsjt",
  "key38": "4PkgMwEzFkXCbdWBPo7DFhhugxmSwFFwcNJyyPwFYgLR9f5c3kja642Dhu42Mi2UZe83eWsNWpQCVRSHiHBuMKHf"
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
