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
    "29FVtbiJh5KDHRt3EXu7QpF4ynKKgLpFf31jRbzYr8neg4Pdui3NpMVR2dfbQdgvBrfKsxcqBYzVQDXc5K7vCwmM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "411WphFS22RjBgDvke95SpAJrDxQA4rrMiw3PCc1QpGwCFxKNSDmpfh9qruZmECdv7AGLgp9AUr3hjGrGQhgSwpW",
  "key1": "5Rym6GVponpqZScqE1QNyDqZyTTKHuTzDGmcd144rNKTDQsN9SvSKYqRFeBNfAxvKs1zyRT2SHsZ2E6dMbXyxAUg",
  "key2": "61obyzKmW1ykq82J6wudUmQVPryBFj7QfsQtqEKaVGyUf2dKbbvweWzLDgfMnzju32X7w96ydFZuzHNgoMjw6ZH2",
  "key3": "fZJbJMUG7BLeuhUhomYzG7zQkfqtkUPknESntJSzRYVBsftUGwGpWFeY5AMsZsvkLCVgfwGpzifhVCaagMkJrvi",
  "key4": "2sSkhUrJDfspenfYj4EYpojdZ7xSVn9LxUna9VXni5yMRYfHhA3uaJaMLwxP2TyCGTeuVUqibSSVBu6XMacdDQZ7",
  "key5": "e1pqTSnBpLx6BBjMf5VKn27zdb1Mfo5NMY7quE2kjQeVmTqaZ5NMbgaoYjkVHpx4QpykuBNzMiu85eDNeQfJpdn",
  "key6": "3iE6TJ6SrWGnjimcMsGfkAG7v1quLbGdi6nPCCwp9ZN5EX89fFvfrjPaAjnH71PAGgaQQSGpRbPgPgerxEgPjijJ",
  "key7": "3nERAsGWJaHqyykM8CM7A7cg24jr7Gc2X5HBK2ZDCMVGLWxi7qk6FKvpLQwgPHhn7R5csXjPdffcWrAPtM8T9mi9",
  "key8": "23R8zkhZZNWKDFJ2PpizG8W7iYFWPgXDkRo6jrBB8aGQxbRfxBvMte5NNAukTHDA7qe4RtjYHgt54mxW2RTYSDob",
  "key9": "52um4zn3cwmBK4G7KY9CZrkoT5EfT7Phk7WhbyHMqfG4icXkTrcf44tdgwSudzJSxmrG5ALobWRw8jkwRK6oKymT",
  "key10": "2W1PKsqnsmX638jgqSJmKWtqj7y7WsgweFSLkqLYW95TCystFbwFnGbKdgX5SkJzhTrgZHbFXDBnnJN5tERP1Hd7",
  "key11": "4qjfXgNp99kTMhfcyBHcLTJVBApXqW1ZnurhajHxmgccvPS6SaFPvTWkzQBFyi1aVnjFRWzAbBnupuHjN94ekPbs",
  "key12": "4y4fvqEa6usAfUnwojJRhMjPTR4vFVkEEvQJj1ujifBx2MCQoji5v9x3xqPxdHE8qvm66jPaRLAg62UBx4vn3mxM",
  "key13": "5qs9Ai5xwuDiVoee2j3UMkYGy6JihspqvFqoVrixkb8Z8c9MhApYvJLiRYkT8449ZGyszfzH12ubYnRztTQG5ttj",
  "key14": "59xA3UzMrUTJQEkiQCeE63CSYXhRDjSa5wM7XJT2qSuRBt1TvDviU98dvpn7mVDU8WQ7fjysuFz6j1R31WwHAD1H",
  "key15": "2CdVihEu766Bcx6RWANtLxLBzTw1BqVqSxihx7ez1kRx3tpG5rpAYNg4BdTfmdknUxviRFckgn4hm3u9d3obntc8",
  "key16": "2CCF27nPk1cFRgFNeMNAb4ZBPs637QpXCiGR3NHyvMhyCuWhy39jQaN4e4oLzwBvm9iZh36CQSqcatDBkDpYb3Y5",
  "key17": "3shJTWQ3hQCrRTfjLzsg8jGSc4R8FZkM7XCFdTtv5aGV5ditkoeQiTCcirRXyzmLhgE2gYgxEG9Cr6h3rp9zaJ2j",
  "key18": "2KPxaWLjCjZSQZ2gUcgLQQGg346VZvFPbTkyth52QX4DuXRCgh7WugfvKAwsazhTcy8xeujWiQZeSW5wHewN5hGv",
  "key19": "5qiNyWxkb2N3TTacaMc3FN3MKvqsBsvU9gHLRwnirmFyJhcw9JFWdsS5TrzFWyJLqrzWX4VEH6kWSKwHuuXUix3V",
  "key20": "2i3jMWrsYK3zrmE64uJbfwzV3hCMF3cSDpd7D6a2d8FAgBLYZGPRMnZHJCqNJgQv1voFsXH5uQsAoGZuDkFWqNmx",
  "key21": "4A25gEDKtJ465AfWqw9zgEZYq21eRaW7GTAhn5bHqnuRGPPFi9VxfYvrfuDxrwLt5kU9CkRrB68oHN2odxSSCWGZ",
  "key22": "4RBDbzajEDE2zkjELm2DG5tk3pWwTKpzqpoptHBGXoU12NeTHyPyamxqCuY5ApcsRkt1a1PGAKv7bPm8c4eqVMpC",
  "key23": "5GVxQDZPqS2Sk5seC3vtYecssWLWjSLC1i28qbn3ew51Ep414uXKhXSytXBk6EAUYFSNw18ooxLZfCGxgp6Fx36X",
  "key24": "2ndAv7xfkMLHXjcdaqEyNzUDZ7AyF3E7nQDqd5cAZXEztuj4cAyJJozbUD2QguSJUhnYHDxn5rUtnSEtEkuJaY6x",
  "key25": "5TJM2JZE8NoZWmVvNaed7yZBXxhs6PxRtotEGuUwLNxXFhqUsvFLnMXbQmMp8qPrnUmvtA5DqjR9B82baZCNL21H",
  "key26": "r8Qf89AVuZMbapNZXwAbJSiWKypAWojKVXv8XTFgzSdTmY4JA3wkhNWNsuPgXY8aQFGs1TLYqxhKvXeymJDj4Uo",
  "key27": "4H3CpVuxSS4ThAPAmDYRqrmS9BEpUc4gPxFvSaBMqWg5YREfaThsKtvpVDP9HmjpY8WFvyBbuERDM5aqjgHRwbr7",
  "key28": "3XodYPA43kHnX3kiDHzrD9Ewnrg7B4LWNBS5umuXSrT8q3KifQ7AfWDXzhPTairCXNucAQp7Uqq98W3fKKrvcr4f",
  "key29": "5zpwMQfjgRQ5iYsV9PPqBN8c6oS4YoGwPfF4x62Utpfn1Cs6Ro7znHu6XdT21mGYTYiqUGvQeWiNtFPtQQX6vzh4",
  "key30": "2kpvGBKvuJkBWqA28AbngncNbXhJTHFti2rpRJyDu4Q4b2XVacgieYavC3CAejRGbG1Sj7JvC7ayWe2sVDcTbq6f",
  "key31": "3qZ9pax1hzoak3mjxL1zUDK4YrmEMoAJU7KPDEBnChrambBjowk9JTWAYVd8SST82L4eic39PsQyXUMQ8ypuqyhH",
  "key32": "3drySDTgRizQRKcVxPFa9Z3grUrAsUeoWuBRhTBh17rHGSiQEY3SsSikrUWFNEsMpEh1ZrC6jEXQSYDPVntYoX1S",
  "key33": "2icM4wFEgTgfEKgfebUymApK9G1uNN5Ntmgj9G3VibAH1X1PSSZRZ9gyui567WajY5U9pFD6f6Hng2YUCSW95w8Y",
  "key34": "45TWHEawqs6M1X1LTsEh5QquSkqsnWbMcK4fhYqbvm8SXH8mZ5wEZdwkuigzsFmeWRC3LXcpbASYcbab4KaFD4ss",
  "key35": "3jef2JnPBcPhwbuSbJe92gyaLh3Z4hxn5qgWwXX69HPptGuDRQrj9sNS7q4QnGWJDJWDTSi2cWvQ7xBZanFgAFPY",
  "key36": "5THwt4it7zYayTPSxm76z9s7EFZpRKe6agR3NZsbsCBMasA1orCPa8AAVfEWi8VbStZ5FEyg6A4o6EhuAiY374xi",
  "key37": "q2G7C4aQJkLUb7drowRQYNTgwPNWj1QF4qUww4nR9epKGz6wqoqSnvAL3yxn3nZV2Q7ZcThfz4yQJV4tha62VWv",
  "key38": "58FsbiBfGAJbJvdB6DZnSRxV23EHq4WpZKS5TirbjGkKdjCbzoM9d1agHjcZ3bwic5CJskLAAJsThByJfjnsV263",
  "key39": "MiPUkv3qfsV8tHGi98QHoHX4z3kMGCDSwhh6dgFfF4dCmkrHqu6c49H51qUFjYbvN7Zras1BD7bD2GDtSEsMyKj",
  "key40": "58tpvccTbZvKJkJpG29XAUQJkUaJ6aSk1mXPsBHSYMsgdsxAnYWeA3s7pKfaUsJm4e6W5sqdijjVbd1iAwXpb6kf"
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
