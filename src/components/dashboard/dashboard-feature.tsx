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
    "3P9SW4tkUFwsRuhpxTm6ug76Teoc567a1kdWE7jcMXXYumncMDtyckidvcPvdDxR4n7YxFqZM2dnt9SZ7DauPQBq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DE2h5cFcy3Qo6p7dWaSAQWY6Ta7qbuaEu2ivrUvGfPUF32SL1wN7ozWpVRvwYLckYjWjPVPDhrwCLv1FBXtgqy7",
  "key1": "4DppC57CvpUG1pdQWSEdepePLnxc1Vpp1NZeLKBUHzAPybysrcb9QSmmKiLkJ2g9ymuSKKD3kXNt75NxpNUYQ78J",
  "key2": "5KRWrnCida1ufHjeboWFMQ5wxSpevca1ZDUg2qtzmnVAaxE5CzZJ4jUDTfdYN2Xv1xAvRH2j4BQABX6y6omsLRrM",
  "key3": "gov6v4ovkVNog98etNuaKspCp6aamDPSKaeNaJogWnjzdD4K7c5E87UmPQ8FVbfN9brGGTXPpNGyhYNcVXBrXMK",
  "key4": "GKDwFvcfYYNZprJ4oFQSudpekcVNp6FhwZMCW1rT2JTkAQpdL6M757XrysRNS35oQfZB4N5RQRvaZo9FaWwt9C6",
  "key5": "5mKgxL9abhxUFo85VHq7eFoQw39fq1UyosiUgpCuo6dyqzAEvEndk33G41Yvmrmr16c3nB3h9rJLy6BR6aBob9Cq",
  "key6": "2J4UrNbrm3sKknYxu6CGT2AmYnz5jtc3YwK24htnkZz7fhEqevwyxv4Nh2YA4pvJtM9aoVLg2scbTYQpWyKhomCm",
  "key7": "64VuUWyK6NXY7hjeoznU1LtC4L86qxVwjbjG16BE3kvVz58TgBLbpCLVd7nmbbh1i7mMrKT8ggt7x1K51UePKzi2",
  "key8": "2U2KxffKXgGHLz2UN6VzyamKwzdL785K2vh53pMaKEDuXuhbgGok8Rpre2f2WPRuQYq9mnkSBoYHs9yo5W7pFYsw",
  "key9": "3W7aJUbMtsDxGDjxTG1YHRqEW9e6gvAkzdgU32Dib1wrYYArctr4jnr2WeH6wGSTSYec85K2Ggx69n6L6jbSad4w",
  "key10": "bJhVL8mYeZKpmmq3cv8XJ3h52cxJSJQb5Ktm4hFMs284pugoEJFCkGC3qbEa9Sa6eoNgxNCUjMw481DfPbFtQN2",
  "key11": "5k5chRx4abACK56rrAGDzWiiuNRA9L1ZmaqxWMSY7ZjcdwGC1HVRCZWTFqtf3rEL65NnyWXkqtiGtZnW52uQnpBg",
  "key12": "4U9S7jYcS6iNyg1JY3KAKMa2ui7hYxp8jhqbWToikK7mr1zui2n9sAsukxjbWCfNj5gdhFd34vfhf9pArMrpgEUz",
  "key13": "3fo31mxdNyiLZ29b6nHhaoFo2zKSqU1fKL9d39bNnjwvDCpiWKPJ1UmyArzJkGrszhWMU9RsWt86ufM6aT92kTzB",
  "key14": "2URoWgFvzeUpDnSai2DjvAu9zN7uAr6Phnr8iJkhomYn7wVVrzbLpZPYFL2LudjYnCdBXMjZFZv66LH5sswp6AYE",
  "key15": "mqR34T68TEeNUHKdhRQvonCPDnVGP8AvQMPTWtYaiMgTd7UGEn3amZsetJeJmqWgoe8rSiZUotFiAk5nmERzhs6",
  "key16": "4S6KEZoLphasCk2kaxJFpMt6UJDdCnn43oGmv1xe59i1xfBFLSFRMJkaiD8P495tquvQkRnQ8LGQqmwQ3V7FcaNk",
  "key17": "3vBoJxsmeM35K9NX7vqUoUcK1Gzuok2A3qVoRxNwQRbdkhpJq5wykZXhQngqPZDxdEJJBQoZvUxZmBv93DhNyouU",
  "key18": "5H4VWFDVStL8ztFJRXcpbmcD88x2ZsiXgQqabpSE1Q7ZNt4qvYEcJtFmnSNneUvPTERvL6ezL4qD9XcVb5RYue5r",
  "key19": "3oZZzqH3HKQu7hEqvUHWScvoFhYbu6GhVab1uCCj6sxxQ7xirc3jDFyXDN22PudVLLWHZs1CRy9xs43T8W4MUHR4",
  "key20": "3h5DYudT2eFML7rbxhVhKcoGrpU6KTeUPR3gdZ1hARb5fM3b5hDSFEmBCoAfmUbzPxQ6ypz4EwdbnasSepsVSdvx",
  "key21": "4r6dXZZyYeUKajXLJ8iwrGpA7jrjdE82cBXphcx23DjDWfU3GyvZi9jcPmjhtArYjTKNezoaVnniiE78B6tZyi6X",
  "key22": "2mAMfauN4WcGb71Pq1kjmGwMhNq3BFgwhGobf97dsvzCSZzzx5uyRJ46vmrNpNs2qcxU2FRcW8EVxFKCwWh7btGH",
  "key23": "2UMRrhWFUjjtU6vR4CFfRYjkREHF6xQFHwZTAE2hbSDFmnXkaDrFUr4in8hKahFyH6moYri6kKzacVf7jhCL2PA5",
  "key24": "253YsQfTCmSku9MXXp75B1sNUX9pMmhSXNfdZ9HKXt68fGbLqxWgGnygTswAs9ijP7GLpdPaXG2eLRNLztebGgJt",
  "key25": "2DpfmmP1AXzfvnp2P19zE7sicQRftaQJzNCSx9sy2Hg2iCBESdsqrQKnhA3tKpphbuebnHDbtL7QLrd96zhvR2b9",
  "key26": "454xoySa3vCqjf1Gj1gv6JttkRhARzXuXPSKikFFDRiWdfqZpcLncpruJQJaS4TMFdoiHTxwsQQaRazny7KMT8uS",
  "key27": "2e77WPLJLzpyiJuFy5NFQN2RXwy85gDAyoyK4jwbub3FvETenHAobVzmsX8uJrbctJkrVZqfvMXRZqRrNyr3YMaU",
  "key28": "NdqxqnanqSgNKiui9r2Ka244xungc4JPGHFf4gP4VYh8hfLy52Vy12uwvyt8XyvH1zXzorQ5QCZ3gQJsxb4xnK4",
  "key29": "4PJRmyMxQLCXNc65t1wMzZYWTX8LzWvY89LZTYUjbtbZNQhLpbQj2KYMRsP99oU9AzXWTXNmQpRuhHbctDhg9vna",
  "key30": "3VpiLfoiqhTct9oHpB7qCzD7FFsb5NdJaLtKjx3sFQFi3ebCDv7r5S9urnwLkSBUDgWBoMmRqJYFvx2UwEndLcSA",
  "key31": "3wwoVkSyyryBk3TgE7f8fac1iipgrQRGcMNctNw18abAkdsQGLRBci8MwUKPjWonMiRD8xFfMFkvT6mKaYQvYHm8",
  "key32": "54wMSqzrT4bU4Cz4g7pxxBSvs9RTWbYyC527EdSso91iQqfZS5Qov8GD3EVe5ftteCA1RA1feXbhMPMyCQXcYndw",
  "key33": "5eJcdeNnxX8yBZUfKNp68c9bMPjsBLKE1G1Jg84u3STm9Y3PMaQW3sLVeDgCmw3wieQ7qo1bohH9zbW4jRS3mA9h"
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
