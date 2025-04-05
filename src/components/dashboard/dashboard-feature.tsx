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
    "3EAQu97xLmLNTzLzTG4XsijYK7Z3SUSdaJTZvSEj1GiZf5bsNkGGyXGsKArGp6vBDnW9sDYcyvXZNthqfgX3b2oE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mNTAnyTKbJD716NWNBJumQBPi9aB9oTuh1QumoaCVyD4ed31pacTQWGFNNRit1vXYsSrjFkWVwoF3emGtM6eSdy",
  "key1": "3SJqwrYYM35v63ffFofVdAYMEFugTedinNGvqKYzC7iumyNGZ1bhQFYQZWchtsr4YPkY6j9LY9w13VAR3PebwkDq",
  "key2": "7xu9Ao3BqHGvYC9E7N88Y5jfJxUHh7iWMHYzvJFDwNYdf5inME8jK5fxGuffYZvEjpPVpW7Qgs26w7RsD72sXx8",
  "key3": "5Q6xbGpdHTwhg3VzJcSeHMPjhfpcmbfYRNNJxdbSgyFzEJZAAaXpPDyJd3qu7EvZRUc9P34cmHtmzpxtHyYgwzhh",
  "key4": "2xuqMciWuGHFtnbGtadJg3GhMSCoBK2NrqLTG8oMakxZNYE27dtg5jKWV264erkuoHH7wPgkPrMwLo9sc8R8Guqu",
  "key5": "6oTq3ekDAebH1PQQ4ZXwP6ozeQeBMjTAVPeFMu73oAfipoRnEsnvyers1XDBoieXz4rdf4DfLkQKfosNMbWTaX9",
  "key6": "RbWeas8RdyVFLYHnhEJrbjz6BACdhFymdrMJn8d4CBR8GXhJBn6NqaJQDuk3biFaJuK6BFMS3pJyc4jDecyBhXm",
  "key7": "AgRhqKnySq8vXWi1z1Df9NyjPcjyc6rpvwKEe3dnrLpHCrpZn1UmRPzn96Yj3Y4f2JmFiR8RSqXTBP5dNbuFZnu",
  "key8": "VMMYWAZ5wSZeVzrTHH43c94AFiVSUKmpmAgXQEmbd8euvwXUEJ4drrixaCTomSJzJiycWPdpsvjqVYRRkLQHVR6",
  "key9": "2YKYV4cpnTdpgkcmfFffejqdvKgkvWL5fDuuVuY9ETcHuMGW8gCda6Qt9pUa6xQY22g6bzC1c8gnmytDx1VYV32s",
  "key10": "2aVaa7FARNWwp6xwvYRe98gtvkzFYtwJtgJrFQtLf7eCRArEPp5QgPp9neFGztFkbxKA498qTFTs4egB57Tb63vg",
  "key11": "4hVD7DoEs9mno7fbR8GFLDkyVXdzKMvytJxjGoXBsSNeQKxMP8PcSfuiFM1kjbWbpKxRPUVhXM5CzaK1w8LRfbki",
  "key12": "qT1NqDUu7mCr5MHCczM1Je4FWrkUagcB94X1uLdroDgXpUnupojtMxd3dXzgoCefE7gv8VEb5KpNjLtKPLvug7a",
  "key13": "Ssx1bDK8KJp57JjyKY5jwfSJzgcu8Fe41z2eX42CCehNrx4CnQKKzjC1xXGvuP8BFMu9QuHx6EPxbZZzYQzgMsa",
  "key14": "2xfLbjrs5aB3VRX6HdJmYR86awCa1DAPWWh13NgqjimqaiZGT6iT1RpSP6LbBc4hRkaCSAddEWknbzqFowX1XYws",
  "key15": "5PqsRZ9hqDRKr87ANLggyLoEgVe37dc8hVqhT7SNDf7BdFEKLQ1gurZDbSopCnpahzovVWac1hWpUUH4ZPxrsViE",
  "key16": "67EnCm5T5a4SgmcXejL4rgFGUL1erbmh73GXjzB1MWeUyrLosdWdntaEPZNLicD72pwuB17EpJwY8M39sfz3TbJp",
  "key17": "2hTVM6RVVf4pqMd3DbTbosopLWHeoGFVSCiP8FWppEoxGWDDr4nwByjeHrXNbsniWFzXkmbLMmgMq178C3vX7p8X",
  "key18": "2p4pYcMaYjAk74y9gSWuskC9CC5PiepBHtJwoA4GnZP4XKqBhmasyRLGb47hSPCtAaffiEr8UXgE235adHqcgfv1",
  "key19": "3wKbCjuaWhHzM8LAV6zBSHzM45mUqCaDPYYe55W7Z9U662t7LRnrV5h1QHTkbQ5zU3yiD7oC5Cy6vqC2v4vW6iXb",
  "key20": "J4HWvRH4PxPfJwnLU3xty35eYkKgNqtBLgAizN3GzbCnqxfeAHdZuTKEZ7r1uVThyS2paQdsT6ty7wk4gPvDrB6",
  "key21": "5xw6KdwDxzHuS5EYNnbaMhEvPySwVa1zMWKMGDGoAqpYfJwdCWAFg3waiKkbjDwCK1jdrMsG645ArWb6C5Mc5qZo",
  "key22": "5MPNC98zE8HQjJTTxvyP7t8uL75zdsHxfSPsdYRqL7nKB68aQ3ve6Jv6BTbeLCL9GDfmfNc7HsvkW3nZrDegUxPo",
  "key23": "4m9GH6SFnvjMnFdShSEBW6YQDNxupYqS8N2jQF3hcKZWJManwGYu3Wm4jDaGCDN3aXwaHi8iwAne9HZfmaKeijPs",
  "key24": "5W2SmJPUd4CQqb8gJa42iZpJh43RyvCVqXMnzbqCnLezDf5jQfoVRJihSW7oQJ6N3HQu2VzpZUsVpUXgxKGb3ztp",
  "key25": "4xsmgf9FqRLURVpTQCUT6yL6p4dXBSFjbHB9k48LxJthM4PN3zeoS1jJjzcZnNNhMusvJPPKa3xXZRjupsk5uQns",
  "key26": "3h5EY4XuCBgMFhDtp8aNXQytSutgWMssEzcCw6s1jb9Qc1dsWsRR8Rxixu2yPHdG42FhH2b1eTLw7YcmsRAybbTB",
  "key27": "2AQurDFhJ9Z6jMzw8WMT6ecUxoh9MAe51axv1AiNDTQyxUpYRGkJSR3oXZ7AvDEBqPKEFviNXShZKZxoGi7d4yPw",
  "key28": "2A3G8ttjLut1fuLVAGTbjdDFeg8AW9qBgkeVmuXfPL3zPq6XCTBLYnLHf5rJdkY3tPmA6S5rJ4X8MfA2LuThgLnN",
  "key29": "3zwPpgm474UaRPseBcFAft4hnpz6bjW4gqXpKT6Hvqe4uKhg833r9kzrEt6kp6CYkNF2mj3XQBvXFabmLFqDrjQj",
  "key30": "5sRQTGfCwfy9F1Tse2rFmWt3CWAJ2VV3s6P6EVnTcc22BCKwxbicENh92yn8BCmkYWmq2g5KxDLbxkByrGPNyfzw",
  "key31": "5uAisNdKauLXYBKWn8MoDqsP3PFQW6CbE94wvvTFbRpw6S6UfWEB97wQrf54bDkfYjcgGQFjXa7FGS1jCjK9FJnu",
  "key32": "4EFYhmmXRfNgFBtpHs9dzwf8zVViBpZNHJKbY8tburiZ2DYDX29J6mPpYWkZXT2SebEH7HVYux9pGjLdB2sqHQrz",
  "key33": "3GS12NP4ZXjwP1fhF44LLjsJXRyndZiQ4nC9Cyiw7d6daJhDsjFcP4AYngpxqCX97y6VmEL7NH7f1ciqom1GTqJS",
  "key34": "4p1jiqioBrYx2HhSpmNet3RJVmP8sNwZCmpZm6fA3gXTccxFfVZfoC7F5ueiiaBy6fbXRvoZgGXR1GXMbDaWkKeF",
  "key35": "5VGMwbtbH81bNmN61k3M93Z5qgJmhtZqLuGtp4FDakfgwbZ4HWwQLdpdTV1VgMZ5C7R3dtG5wSvhw3HroX4ZZmRP",
  "key36": "2ehnZP4V8eK1AzBoYJ5qxCchmTG4n3xjVqfE32T4x9K8jwCJb4CESESmUCG2oLsVkUuq3hx6PWP11BEnmGN3iJyL",
  "key37": "DaX7oskmNeFfuooNsYnt6VN1fsXB3bhFDkvwkzgv5PpFeMUHuvjtfDxw5MSEYBwNzkk1B8vEEE5Adj3Sx64t2xn"
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
