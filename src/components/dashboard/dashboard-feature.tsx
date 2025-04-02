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
    "2opj6SJWfPHxhWKYJdPbkwjZSgWhBrMjFhrPXtyQbzydoii6nrAv7AiBPgYA4gsa3Cf7QaWKPS53hBBwJo2T34st"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KYVzE9auYZp84buBQ414pLGBdU7Bar5Ljxr983UZkKAnvAEYkFMwheDp4W58twqEsWghxjYuA7CJJCs7j9yT4AL",
  "key1": "4TnCp61HcvnhZX3GyXfGYkn6Nkte4xWp3joocJWYZQ5mkvPCiQiqP16nJwnMWgEMKpLthNFk2Kg5bs9bSDxBjW4h",
  "key2": "3zN1iihueCJBsbUE85QwWa8RgaDTiMaP19LquFEa9ezz7sAkhAWNBSnB7ZsGRaQW3o3khwu61DjgMQK6mviXg3qC",
  "key3": "5WmHnkXpNoSHN9rqUDJT7Z14afq9cdVthVeSaDStpo6H2yU571AQkj8GS2rinHbugv7eiLARfrM7rgmFsiLwNTQz",
  "key4": "4Ccp46QqndBcQy17KTdQQ8odE8hrMntH3NPyNUXPFyxv6CxnDnFxtojAtPjFANeXazdrR2F7T1SbBwNj2adMdujM",
  "key5": "2wj3sBiuPP1uSmSFueVWkP7UMvcBp7nLNXPVqG3SxvyctYLhPnKyhTHjYEGBAgefnGFbUvyMRcwWiwGGACejJz8w",
  "key6": "4TSWauPU13cYH7mU56AYfrtEmhjw9Mh3XFEmCuFyQDtujYSRRZAHhRaMjHZUf3tzCAsjgzv5NUQHkbirrRCKnwgU",
  "key7": "CMHqP72p1hidxrxVtGzdrZ8HA1UxC1qcEaPvAeCy81Virc9GBUv7dKoirRNoh1M5uVvFCzC9soVsF7Jn9UTvFDE",
  "key8": "5HTJ3SCjphWFW1Qw1tmG6uZsbvJRJx9i3J6kXDsVjPGyh2aCNp95soXr94vRPuCwMgZ2H83SLLghdfzMHo5U7uG7",
  "key9": "46wV5d3jnxurb3tXqGtLG8QkvM7urp4fwLkrnMGgxqc9omdMtqYeL9238u5dZf5iCmaaYHWRDZePgNmR2r5wyG6E",
  "key10": "MBY3Yn7CFWoFuu6Yu66qeyg1pek1hmUJCJQYNecm63DKCgPMszmySDPbEwpXJMXYNGtdGvXhiw3zAqVVGVHqXMk",
  "key11": "36YPvUYMCZnEMKNfZq3Fsh8VjoKb7DgeiWp8G3RaUaCC8jmeTG14NPtb1qZgzSe4VdW4rcvSQ42ro77jobLLV1FF",
  "key12": "2xoQ3t364mjDNGxqrFPQA9tm8fMzi6HDFbZpYi1FBRqBrjACjTtZz8UNsQDDA3FWqTQzqRaYpN15fCznWyq1mBKB",
  "key13": "5MeZGoh1Xmk3HNs12NWzKd62i5CsJbbf5NgATYZP2tvHK6JExpVwEvWz2BtAm1xEwXyFDLt1JPuYqaNC34Kf9rEU",
  "key14": "V12Sq4M9uq7bDiLyTd22n9ywgDzVFKQfAztXPnVAANCh17H4C2YVt1MUAWrH1VfhXRmGWMmtCvxZKYUa1Sfeihv",
  "key15": "43kYbBsMF9AYaqXey2i5j3NyRJgr4XDR4Qc6tgsK9HLrhsPVZfTuNeWvXGQVFaNVwzHDn7MCQDVd9GzEyJbA5dLR",
  "key16": "A16NBVxZkiJU37R4H1Wfwwb9XwnVQFHhiDWqpADGMNcoZY1QBsg9YmUHDkeueG1s9tzu7CsscPoezH5wGeLAtAn",
  "key17": "5wnmEFHCwcE1qJmqKZpA6eNXawrA2MdBG6kTQ51XKdg1wW61Y6JDCvec5AsjiD1wA2zdRUSnwio7VTviyKpgdDeN",
  "key18": "4xFxnsCiFVBLLPUanB97r5mVFnk3oDnD2ziVkZF18GbhaMZpcH6hSnjCtw6hy8viDTeVqm5BjnCDC5KAB9hF9awh",
  "key19": "1hUZ7Q3NBFSnYPtbD3PudEbYWRQNtoPWrRKba8iAr7WuJDHZQuGP9aDCnVTEYPFB6qjdWPXLVLLf5cyUynQwoEg",
  "key20": "4zkb26hmsJ7xs1DKY8KxcmUyre1t1jPgyrXVGHzD33doCDc4DFVGEVpr5WxewwzUjmSokAcFcnZsrMwS4WVguGV9",
  "key21": "1iyC4LZYM15UK8KZJmuPY2gp9zNxoQCQTL2XYXc5TptRg4qjPjxXa1tha71PjtivR3f6cADRjvY91ULgH13A84D",
  "key22": "289WkjohBQSV36kY9fS8J6VGqzRGJnM9pLFBVKiQz5766S4FCq9A5byax5W1DmUZsWppnuVB9Za3q4FukJcqkwqv",
  "key23": "pJgUxnzs4ukiNhdF1BemU4SpurxkJbdWbQ5D3TMwGZMXtCL2ikE2W5MakyfwtU2ShbnX7uutwVEy9UiTVaRxQPN",
  "key24": "39WSBrvZwo47JVXFvTeQWMk9tvvNZ9gecceAHvZBqzGDjoNa8Uq2UBZGvscWnhMB4gDCEYiQKxUpyKd3XyhcfKdX",
  "key25": "jsW2j8uB5qE4MEUz3zD4SbG7bc7aKE2ufcSoPethjwsgbAmwYt5orgHoAzSJEsTwj7N39RAHiHGa6ejvqo6Dtme",
  "key26": "4n8YcxKGkXQRuv784DnzRdrLzP1wkAaG2vf8HeapzGPEjMyB1shForZAXEWJE1P9sMBq6DzYpH2YCwZzG5vMgyE1",
  "key27": "2PvjvPdZdpupVmUQtH9q3dCn8dVjKa3NNkZJHZn3ffMYM8R5rPrK5a1K3iW4uja32eRodcTMdKqqMsMFEUJz2tTi"
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
