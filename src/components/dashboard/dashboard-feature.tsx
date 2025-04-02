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
    "46su51SU9SrXCdncMfNA3FC3zUMuLAR4pro7K1W43Ptj5TGEZKzwrpyf5ZdajjYs7tasr4v7Vg4qvBARDFqTtEgC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HxzZFBkULDrQYac3wjDZFofSiaXYV7qDEbbHvUmp38Lt9dXNRYnp3mBdCxZDEH5CF5j3L6avM6tB5i5hZKTYXUu",
  "key1": "4cccP1GTWRdSJUVXxfXJQq2tgSqbUAu18HBrLauHqCnAt3z5dwHQevrUzG4HyADqERd91sLGTJrjdu9RgjXsRBiV",
  "key2": "5sHMBq7Yupz2kiEjY5QcpJDeBAWXxdETtYdMkqnkUz4mtvLDFtLWu4XJCB1dYmWvnebBLTgg5pCuMpwWm3jCCPcs",
  "key3": "2PVg8xb1VrLmMXedo624ALcYdQjBYm4wwp56JZAccTKpfmYu6ktshZGoTXJATUQQrvbL6B3gVx5GF3APbSevrK98",
  "key4": "4W2w2T2N2obYRsPeswizyKumBiLeFsd36Jb7SXmXPoUAnXkAzeaMv141TxkF8EvmoSiUjRcfrkC8RDUM56e25cNp",
  "key5": "2jTqB9JuyDJ59twuaq9DtP38G3Qe9ASGdLsFtiXyqYS3mjUSKtoFNtgMxAEZ18Ti2KRSXBPtMVKjWjU3NQjAbkiH",
  "key6": "2ntEcvurC6Gx5W4NVQmduoSYr3wbTToHXCbb2TM6H8GZQGdN2fAVtowmQXAJyMRyz8LXpyXNvDJaxdK1dbt2YsS8",
  "key7": "iybZjsdVX2SUCrTy78fjdeK1Ckkuqb414YLhqBZUezqqamT5pvXir9oXnjxykRQjqpK1beUP3R5N9sw3vRpecem",
  "key8": "Kn9bhahcyTxixkyQbpXGg2s8uKz29tEwmWeLkeTDm4V7t8VxvEVbSJATXVvkZ7MsDpNwFZZC2TXvYvEQicXL9fv",
  "key9": "5fvPnzZkHBA4xPWKn2snUVWACRFR3ykEmY2LRE1BFxBVeUv5dxJN6p5y2TZLzLkQEUyGpLNdk8BDyuSChBikZfWu",
  "key10": "3iC3dEJzdDXqJAhmpDyJggM5kyzSQJVtKokNwwrMRFVG53TCK123KqDZAXiQg4Ex3mG5UNZvvMaQxTvjU23mWtYS",
  "key11": "tVtstrvrieqYiytsGspXtCzbWp1KykTi4PF4cxdiwCfSe9eGB5dtFYDVArL9p6xsb8vUzNXvTaEaFbs9RQhsmJR",
  "key12": "4P7v97M3ki48r464UZsxyQs3ehPCWb7Nw9tZuBbLPbBxtpWvgF6HLgpkLY5kkpx4yjCGghKeQ3pBNn1HfTQ18wRB",
  "key13": "1BkvWseMariq86pULrj99fTMnEJPHpNQjg7rxEFrh4KijUiAzCPnpRt7B1BLjVcshF721fYkzdMg2cf3ELvEcS4",
  "key14": "3U4q7Z3xT41KoHaSrdZBzZtmVhfVu6RrFedrJRRyjbEQSrTYccaKRLsSEo2Q6tLdbumUkf1YJ2PTxuuzy7xEWvuB",
  "key15": "3weEUUuXtGtrpjMPpbzYmxBRbYMkqU1eksVJssgN8UcUger6NF17EaEZWM5PzGbrucdNimhfkJViZGpsEdBdrz3K",
  "key16": "3hRaLs7C6QcqfFE7yFfoaMu9npvmGM62tLtCwuL2V4XfnZG3EG9enMD7Uk5HhvKQeGxrLuocUhz9stpcdsd3nkU5",
  "key17": "3riyRc1iYSq383Vo3QqPTUAaaXgD7WfukPjqsT6ktj88LtFvmqWohcw5xhL651zGjyoZRM3WHjUgYpj9b9z3RESk",
  "key18": "4dttfb9jpsbL13wVyQ8SBepRMHCz43Jm49fWzt42yuH7jtufySt4dD2boBbsKx1utAFmoQNCVvLdN4aQ7r75c3Tt",
  "key19": "5iQDJf3UquAHUWLGYi5kHYH6txFmjVqehqELwWwefheEiDqaiT6NA2zX6KnT6NEsCYegkmYLphSWNc3DG6QG1TQF",
  "key20": "4eZtw3Z4VuMuecQbxU5YEV5C8xYvHhTFmH4VBNuTRxcEFgh8UdBpmBs3gWPEvbnj3fDFZjUwgjkwa7JZYDR2xg22",
  "key21": "2T9HCfRLdREyXwkbQG5nLgbdYfrc1UsKtsviVsi3FzoUXbf1ZDnDNu8WaScQudU4fn5N3nwa2d8PcWRBHXh68PqU",
  "key22": "3UjbwrZq4brK3tLA9KPTCGbgn5qB8Mdp65Nktnwj1uowumsQGhaUJrhZNpdfieHPtX77gDd3LKGpM6fKibLrFqsa",
  "key23": "2S12JGqe2pohNMUXEBY7PUGo4YAcCQ11SBbJAa9vxMUmJrcZnbYN1e6wZF3fn5utzfddRB6YhHknvxoPcSvrWXYk",
  "key24": "5jtJny1uNK5XoTfTceVLTMfjXFR7y7PBQmCAhpuvLHMgfqKY64UMaHXTvUDfPWuzJmd6HU4fsrKTjtMxGnAKhQm9",
  "key25": "zECAprxZdp5NeiBaAM3J2L3mHXqJnaGvNTnC9o9AoNUqikeiQemXUtdgGw6Y4EmVBEQdcob8qdB5NSLUAcaTCPm",
  "key26": "3DRLTfkdWa9TzJqWbkwvZmcChZB9iPoemZDhvdvhaEUX7DwFuv19MzML7wS1UiHe6kqe69BB3L2nU7XEXvcijKzq",
  "key27": "3BYeGmB97j3n4xKN5iuxepgnbjkiMU8BA5fg1KmpH871zgRjKe8rrWbx8drDAUrKA6gph6NUnEkQSa1gUMNCJ3GQ",
  "key28": "3brBnxhW7ApvngDXaXxAwY16wgzXUwXvofUfvHjq6MBi7eK2P32PJut8A6QwmjiTgg94k4peyjCD8cQ6cQFh7xX9",
  "key29": "3BJXB9dCieNvsjSeL1Sp5cEi1zrKUXzjaTbz8DuC4TDpyozSayrNPLnAJA81inDbEe4bEMHSjLKJARZYbr3L5KkW",
  "key30": "vWAJma4HJD9MtZXdRRE15f5cdrcVhtbse9ShLRLPEccuNiKCZ7fMMPxhLZCSr7GCkjmGJDCFyxgBGPUc94nE4t5",
  "key31": "51AfX1nbFdUEHqpX9T5YFeGxXNMSXsxMmQjAC8N94f18rdzwLZHJhvuSctBjUXhfWbQPsLSFwVAm1NnFvaEZSqRN",
  "key32": "3EFa4KzbbiRaPoj542skewNKaQ1JnVhYx8tyy8e6oHhm2gGzCxid6WBMZSY9riEpsjo3kV2V5c7Pu4cVzZrGEyBU",
  "key33": "4Fp3fHn4z9oEVqNh6hYsNUYU8t87ZKyZzb1gH4er8ww8Waej9jfXpVk2tUr3FGZxrPtCzmifQoFA5huc65m5xH6z",
  "key34": "3epu49pu2htfxJxQ7G2cX1REn9MBLoV8KsdUUXxUKCH9UYr9vaFSYqebauK5apLJkCcDRXMAKbQYWy8qNm9SMn8M",
  "key35": "5JDrEAkb1QUoKVBz5sJVtVRHRLFsa1YoJuaZpNmTdqBPCicm728ABfQvxXvqkoaP1mVJmUv2ws1F1odMrzs9Httt",
  "key36": "hpXFtLqrJCrsXzJH3gANcfvNfeyvxybDPZxKHN4wQD2cafRY2K2Qu71oA2A7aoWDSYb5JfqspxD9WUnnjJrEfmD",
  "key37": "23ty7CVhMY4P4F4AWkVmZ8DFhcjtar7qwdGuQRt1S6yBsiFbpDxZB2pgJevVH3NTNL82tyJcFmR8bnyJk5ffzkpF",
  "key38": "5qqGoVnQkK8Xkb78qirTZpx2PqwG9YRCC8BcZGMBWUfKD9yW6L4JApLNLcBPSPJEAMuvHVo7Y1GkoHDqPjsZ6bnV",
  "key39": "5xhP78VCatbkJBSoyDiycPQaFmrWnUXNgA2RMGTAeDmPpZrb3s6RfTT2BqrddZRo9Ta2HqFjbB4g3B1UZ4UDMpDK",
  "key40": "5whiD1wfnZkBfwTTciFAtNPdwV41beCFa5q7puE8UZ8bWzUoAhh4bnNdqF2yN6Fydcr8AtLgKr6n8fQ8KbqLEd86",
  "key41": "4bKKTRtbzJ6ZdpQPgfGDHFusgmJt4H7LZa7mToHrscfa5HFEYodE8M4PsNzdtUZ7jVVJ57MixBupWp21nkNsSs89",
  "key42": "vcCDP77mXhmZrsagrgCJXTvtbEvZZ5Nnx9KLJwmaWVk7xkuuGCfCa2PVuMDSnjTCnN8hvaekaedKYjAiXS3pZfM",
  "key43": "5a3p5v7T3aiu6DgFBgzEPrwjQAYw1vWmvxm4ssUxqoHMhqTJUw1pPCyVhLsueuFcpVU36w5hoa2vXJRnbhqL9UrA",
  "key44": "3ijJX2p9drbM3W6ndhd8ArSpc2xhqvqyewz7GJCPJreTB51MqSfBRfYmmQ8AKmVq9d66xhRNH4hHpe7LmpwEFLVf",
  "key45": "5ESQAkoZcAiVMEvWE11cnq5XEY2A3Jg47vjHe9sQ2BjuiK4xJQrNJD3TyeJTsmP6CKjZDUXppVcfRh3NbRG3vec4"
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
