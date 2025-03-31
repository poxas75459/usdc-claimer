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
    "3a1WFXdHudsET8hH5BZESF4s25EfzFjv8mazGvi9h4Rnwz3MhtrsMCQs2nu1djgCZYRcZmY1RybuzN6HGF64xzn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UERWCBM6UY7SzigZFSZmmSU6oLdQ6v6vEeQbGTDeJG66L81AwTWfPwAh4iwJn77QvKH9uEQEBZ2prPLtyR3dZU1",
  "key1": "G93TViPpcnsm4u3VogatMft9T8Lg4rX4Dz6K1HDRqT7E9L9eU6mYgWuJne8B4aBuRqvYDN5o7ZSmQ4GBCpbmbRs",
  "key2": "2bpg9zivmN277oGZqLj8RgF3F9ojgwwgKGpesCg2wdD3iaf1MaxaqE5WjcSsZNhKHit6eh9syMFePx9th1iPzeFo",
  "key3": "5kWoWWCauspC5HZjN4Aog4RXw5hHkR5qfCvDFL34UNzhScegEn63fXoY2uMoLnKBZgUgxoBowuL4dxj8PaRgyv95",
  "key4": "4MzN1YDARQi6fNGKHZb9nYbpW6DM2gBYh4tjw5DwJBwsJuxWBQkk3jP2LTiShMNEPBbX9DqBjH2NNcYP5UBuG2fq",
  "key5": "t4ErsqJb5EMaJ699mQjnYeu8kn42Zy9MMPs4SEfqFp5oC3iXgA5D6xnAk3uLi85MVfU8ySccMcDyJtGRHT49Lim",
  "key6": "3DihvAdoeNsN7RpS16Aoai7LsaBfciS7NzxtaFUd8GcLZVVWsqcd3nbaCZckk5nrwzMCF54K2jj322E3LUtWSnQn",
  "key7": "VSXnMswpNLSXUhgropDEsEVQ7Ed8Km71fPmfd5Apvpy5rT597M8ndzQdYbmh6iduHMcYxCLaeNzTAxzg34rgjFA",
  "key8": "41am5kA3jo4gJwGrwysZJ22nAgHigaeiucj1RXJUJDhWPdea9U3SwArGCZweFBVyJ3pSVDjvoWTax5V28TMozpCL",
  "key9": "3f414Ui523aoLyx1K2srt8YwLevRykQCJCga2fJaXtF3tdEprGJScx48qgvB8NdGixoJV1p721EU2YphK1FSFTJE",
  "key10": "2PoNqsKnowuATYLwJVzsDRDfJEnhLNHcWdU2tKQQdx9R82Mg6MiV6TEAt6Q852grotWxRxASfshAN7e52JDGUvd6",
  "key11": "4NiDQ81DUiSXroFJ2fMB9PbSsCSALLSdAcbhogBrPoTVcGPY5nRppsLZdKdZoBtNbg9bjiWeXbCLCbpxuooEB73w",
  "key12": "5waGu3EJ9nb4sj9gE3DFcMbXofXwNAkqiY8xbAwYdh1LuaAuSzaxVUYqUTfVBALdutQzfZDEhDYoZSBsmK2agVMs",
  "key13": "qaeQdBF69JwDj4HmUQHoMAkC2YcfP7vTX1s97snb5zb6aTghLrpBBzQyzchDTfPVKhefDDDDRtjawg4JjDgcWj9",
  "key14": "4zi6jVgSKQ5ynXXvHYQK8Y9skWwN7JXXWhmHbKfGrUdnm1R6xr8DbqZJS1pJsg935UPQVu5Q8gBPujZzzkCLdnf4",
  "key15": "41E99PHfm41JCKBvsK4HftDoCr2iyBj4EwMoWGn92NzF3vc48bossgA7F18KuEudYJDirH9sLB8xQdbSguEeonEt",
  "key16": "8XFqNUz1pkgqw8DoZQzWy8g1t7oTvxQcJUFrKiLZAjvoVMZHTujvzA9dhUQdBJEUFJtCzzd4MbzNcu6jdGwcuEg",
  "key17": "2yAn9KCLDhJBMYAD5kYZVJ6WCo9Es2gN1f4b3G36rKNMdsfdrYKVCZmKq4uRseaKPaHUenb9WR2Vrg9NBAKCYrck",
  "key18": "59cQFCPAmargi6P3X8NFk4foeE3bGMxXrA1L665mxww7vZPT9d4ZCyWcCcoMBnojcZ7Du3fF82qfBj8gfy6AoH28",
  "key19": "63tKyKR1civ9iVxp2oefEN4ukMZ5DnEV74APGi6knktCehAzQmVYFaajPeCm4BMSAbojgJddn1X8dwZwUXiMbj9H",
  "key20": "4GU8dnaqYukAfuU5xKLw9TQ3eEWhsh3UXgfvoNUd454pFiN1D1yoQ7RtmpBfgyE1Vyk3UsiMzBpc8RMStPj5coH2",
  "key21": "cRDHR6zH2vPXzK6AXjVQeqf2Xrb36L3Bedia6R38EX9kFtA7XFmWweG4DtCe2ErDT1NS3GitJptMis8r2etPPCq",
  "key22": "5RriUQW3zV5QMwC5Y4nKiBqtfm68Grbu9HfF8XuDMzNjB8HTzhzAaN4itczP2dCu392YQtKKTLRgoeSJC1AcJF6H",
  "key23": "3stdd6YLLy5Ps9vTuRHRMiCEuDLyUnXAApsX97ing4y6Q93z176XSNFYVGTgQkAE7RdeUfTu5JUyQyKRU49NzQ1k",
  "key24": "Gk1G4FtBafALP3mYhYnDXmdDuiYvmbBZCpuoCuAN9mjNa8o5ax8bNoNKJXPUUtoodHzUhZSJEzZtQo4eXYXtm1R",
  "key25": "5WHEDYEsmMHSiVmacq1U4ZVXRG62UWtiuEYK1J1iiDTiLGJkA9sitSpyM4wB4ZhZr9fHS72deo6AzfNz7ZPjAPyE",
  "key26": "4zSPD4cbNXyn7AbTUYqmwzhc9xVSs2xscpxuHTZpmcUiZjisY2B6bGiKWti5Z8JiM4SsimsXGieinp88rRbQFw7M",
  "key27": "BjqaAjd3bbwAofXaSQFQYRrRcnsMpsGhosLNcauEo86XQ87hwCgwrCZxBhkksNN64M9pgiVwGe1YWCxB8VmJCwF",
  "key28": "3cEFkAaw2DsNpdtFJP8UJg2afs6x4zQBxTqqtAaaigtZQmaaWLDYvm8G7bx55JwqtzSUZ31dNE9MkeXZs99wethq",
  "key29": "5oJMcppqtv329EoG3cETjmKTAqikrDBFoFD2b76pjd1SfDgSYcMHdNTJumzTDHUhqWRpygffJMD1zkn2FrmWXshb",
  "key30": "5B5ajZswTPshJT2vjRzGrtAbkPSUWoN1SCmzphqGkMxZ63xyEvJjFUUgXqoN3STkd7utL4nu8v61SMW1hFPD6bF6",
  "key31": "2R5m1ady38LX4yWknTChNfz4P756XMyVAFnGkMHx68y73hDoGCRVi3mGDTXUxz48i2c5gUMeWpjXuz6kdsPaaoyE",
  "key32": "5KU5ZmgQHbK6dYW1EUDw5vuQNbkYEbVXCYN81JTkrg41BAf8VgJJkptkPKBfFJXfM3swXHSb2MgoWGebqm3AS2Rt",
  "key33": "29EAKCMMadUviapamHNZEJRAUAUmZ6tS6mA4W46bAWo6pcGC4ERck7WthxSYXGSnUjGN9BZPi6rPGQ4MqL17AtvG",
  "key34": "3gtTEPQzpqxjUvDadX5mkcnir2jNherx36sHHEwSNUMRKBTzW7PrzCzoiPnjubho7BKuPo7B62xzZeKywiedCmMW",
  "key35": "5qNJWXuzuMjkwKVYzPNNB9WQfWLdbvxWEqJqpfgHYNHAjMf7oaUsfuK9LgRL9HXS3tTgeXqqQMSwsYo6fyUxv8bs",
  "key36": "3YKh8CQQwKg3fgY3NCC4QJK3Gt5HYXGUcGmqUJNUPi6SNhW6LEqNXaP7jVrTdSkd2rbngY2rRzy6LDwuTgsZ5etT",
  "key37": "65KYPsvc7dwWEoVLV64Q3F24EdndyJHgwTMoaXB2S7pENUCgs6fmKUcqYBVsbPM746JjnCqCTBYVWQbkKBJrTqJd"
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
