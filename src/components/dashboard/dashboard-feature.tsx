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
    "3jwpGMRkC7wGdFJZHDJgngmyNp8bs2RXW8rGt8kyf6Do1iEEoF89Pftq2F8E9bueRjmZhoMTGGAkxrMa8eFu3chR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FGCucsJ9QKcN6Mckf8d9bhW16sqTb2L5nxn7LycGngrDPYaH5otmURnqHAt1LEZiYfRyqdGUDPXnBfeUUk8EVEX",
  "key1": "2BNDnE8czrHVY13DTsUTkQQ4EFAeAtaKVzDQq7XprMrLPgyYDDSorQqqnY5CvXrAgBxfeqjiuHa8QrWrp5B2ss76",
  "key2": "2sK1P512tULj8241AJTTAAAdL6ujuQQrUNvtUsAEPMcc8SgcUwh1owPbXqYM19svxZDrzXQdWTZ86xu42Qnu8nr5",
  "key3": "3r7HtHQZp6ECZGVqWGHh2WQjcf6Qdo5SWQB7Y4to8BRQkh2i9WhUfLB3k2uLw3mxKAZW5Qut71qZ4H59HcXMUg39",
  "key4": "6261VUhr6AHVuai1rR9kGKK9PPwd4baHapGysg3pjhc7SH6gqJz5XV932Gts78LCupXXcguf8jZwpfsTYXMtn9SE",
  "key5": "3F2WBseNt7j3fxprUCbDpQGH4zMMSRqEiTBQpp21jT9oLJK9PQNYQdadocPDK79FH5ZRnuHJJc1caosko2Svzdaj",
  "key6": "5JNrM4CKBpH8DSygHYaFkTe5HKBWVxWVTK8enrWAXUTpsb7AzMA3VGQdPiAqXbUgtHFmHkjYAo3dYLEvu85mKd6G",
  "key7": "4cok6xsnDbMyMZBZX3HhBwA22at1zUGyTCAgJCC8YiZhRFceEb9y3aeCffuu1rgvvfYjftBi4hGHTQrXN44yxgcU",
  "key8": "4j5dukuHWGvVT2NwP5MfzetUr6JEtBho7M6Z3nwvCGastUHSB5c2JAuZNDMKdA7MEsFYoDBJhtK6K3eRK5PBZ5ke",
  "key9": "5H9w9Qs5xer5nA2DE38GqxqYhPB98HNKt2RF8NaPATUDCdVncqPaDyA9dvyQstJoyiWm4JQJBdezbswKfpikcVme",
  "key10": "5jVTH6iv2zbnwfobhkJUmMnRqEfQHXmoRbPETdFYmETm59ZqyABoc66ygEjdYLvpEFgwqxevtB8WGrvbHpFtrXh5",
  "key11": "3VBAo9zn9qx9QBhSnP5vNXrzD9x6Nto7KZcfBTCq8mPDeQpXUr5Wu5gvGb6448j3KzywZCttLgnSusoU2MyLxvLW",
  "key12": "64CRdpbSHWhunQUPfjmUWAxRcSVTo7VwbttDTs9WHaEPBDFmML5k1sf8DchNi6s9BxEDCZ7QreAnbaGj7ceeyFH",
  "key13": "2nauJDywWMBpFC4hj2zTUMiMrx2YBQX3gEwX2p3P3gn5jxt7rHjLCxtPmvkZeud9JN6VgyqVTcLozgrkwzBRsU1c",
  "key14": "4CJznUVbzRKy6Lt645f8UxYbiTF4KX17AxSKchz5PTyBgkYTBqEUvjJa1hoPKigzk39NkHrAhUL7e7qiJiMgisxR",
  "key15": "3CZSYZwtMFw2pTb42PvFhX4RfdHffen2H9uUBgdEDfE4iV1NmRZwBqMbasW2TCB4eHkGUxK3RuYqruB47YMrVfY8",
  "key16": "4vUJ5ZYmM7judBWt7KTxYMXWzcAm7CfyyNEGPWaNPHtht5zwk2opQq2j8QtZyc5zyzHFYGwCqTJV1ynLTdmxg26C",
  "key17": "2zjvPZS8RRr9vtvsbProMSQWRZMvAkeCQQ2kLVJ8xKGZbBPaeDMZi4XHjh2qPf2vDAbE3G5E67tLXZpr9d2okDB7",
  "key18": "CxYtDrCLF2yJpa9xwDGYZn5NbPmxZ8STaFFcBoMEpkhS6AEvPRUjFKxsuDAFKATGy7JK2r1QrNE4DrkhK6x41sL",
  "key19": "i1VyL2iUNfvNyBayG9m2pzDabboQV9maToycVpAAgyRV73YhWQ5WkuFwo7HVK7h7ZKWqH5VeLEUvdEDCdWxJtSD",
  "key20": "3nPzyT7L9sojjdc6cB78k9wpRamsQU2CFZ7N3yc8dbmrxCXonpYmu6S7EcKkodbvPJC2SMfWm8jAJ1mCQ2Up5F8e",
  "key21": "4BAtA9TfixN86WvmrxFUTogXoGy54jo9ekaRXdAr3ong5nkXFc2p35NPMfNLSUfp8uM41ZduR9Gk55jTYhwuRNFk",
  "key22": "3urUBo4gXRo9YeWHAwhdETMXTA54cjvPQ5kqtXQ38D9CymyxmKvaKCdHHY2oYSPYPVdCw51dYx2krDCsRTxJFKfn",
  "key23": "2kqyCwcmQ6o1GkLUASaM5yWEBH3x4eKzBb4rsBWvbdxCB841xi6y4M1T2Gm9p5HkG78N36disfgVZjbVezx8gLdT",
  "key24": "eLZdZekDzq5A8zdHGvskhhXPPCZSBuhWVgKCnZcfjzvPSiCLoUPDVbw5VJwGozeafCWTbtGijrw9LXtnepNx6Ec",
  "key25": "gwuT4P7Q4gdZmg8RdAVZFgvnJhRf4ZNJzrSD19SWFooea3QvV6jLqUoGmS8cQ1JLg7YwRPeV6ADyBY25aFBSvbo",
  "key26": "bYZZKpyc2mANKMs7Fq4Vquo48yCAAd2wHzy2pijjBVwPqDam5ixqF5k4MjKPM1nD4ibkP4vf25WL3soknUvUd62",
  "key27": "A8q96oqB57MeQ24jKPvLeByBitPyQktLQghR3ZmntjhbHpdxj7WkRqDQs7qAPeGZm34jyjDhv6Qa5iGmoM3GF2t",
  "key28": "2eUQpduswmUYjLoQ2jw5WZpDbRQARJxcQL33MbVtwozYZecVhqK6yNeBXFpTEoXJ6uQijQtYpMymhSm8c2YwjphQ",
  "key29": "3VB6rfZRSUULXnLPtiSgPq1GHYvUYY4j4VSQKMHKdxHCs2PdVUaxUXDFv3JP2bigMJHwRiffBwQ7LsPz4jNrbB8t",
  "key30": "3DuXHr4sYgbTB8seW5ZaBVKs5AXhkZveR8QGERDqfD8f6LPYhoNiLjexiXwGA5ZXNYPe2r1sMoLkEUwHoz2JsGVm",
  "key31": "1FT7WUN7pRsVKF97qWAHyimzpMkw6YWTjNE2CZDZLvovoezri2vykXawdN7HUK6xYRjyi7MdZyaaYRKoizfDjbC",
  "key32": "22GtS5xuAMqtvehyoAfe4eSsNqb1veW5NMqfsZBy9jrx7r4m9oTgKi7VG7vo3QxhyB7E2V8CKrwAUVjumqD4biEE",
  "key33": "2bZuQKAyUds8V7MkKnQL9tFBrcnLZYMnJWXWk5jeaeCGdtJh1F4f7vjwRSuWWezXR4geuDHQXs9M5bGajVP5wTyH",
  "key34": "4XRFE9BizHomRbDpTrfBUGeMWUJ1a2BAMyJTYnJLDhP9gNVTjfkkD4SxhnHFddeXUFPQWXJTdsg4bHBvWGnQdM7w",
  "key35": "yH7c44y5jRS9F2Rn3RxTdb1Z72svquqBAibbPFebHVb5uPpMBrY9WcrT4F5Yn9XxixhVFCW6917NLaVonAZVoWd",
  "key36": "5ecM4PHvvHyVfyf9kfQbi6GPCf2pcCg9FyanLNazUfiksQc1DF5e3zB5q4NUYYhRnoeZCwYpLMf8YpAJBXqMi1cg",
  "key37": "4JYxQK6ccMAtLd9mBEAX9Ht7DUcX5bX7FotDbqjVxgWRowyWCGNy1YBpHFbXbCWbxUHZ3TrAT9a34bgKTNBfvyeK",
  "key38": "5oQFYqt67DuTHhfUbxy3gHtiUVtxW3LYG7cpFGqWp8TLJCWRpBcVFLPruhhDfNn54LcwLxJi28oy5jbE5bFnrwqY",
  "key39": "488JPV2yGRKBxE5wgzKPAQyK6qnuVqMJ3SJiYCfYyARx9WFSXcP3oRkQDMSZFt4GHJrwRdpGwWLVALHvycjnXmFn",
  "key40": "4b3BMTtd7pFTLLTuXxF6PRDAFEEUBjmqsUMQqCsxZeyoHcXoZ8QWWxzMh6eqNPVZxZxQuZvN2eAUMRMn2JdY1u7E",
  "key41": "3JukX6B5sMKUzcVkxoHvLYYHBBm51VjLUFtjQKuYWWTJC9EQAp1pE239bgHEfdwKodeYm3kpAGBrrX6br6X5JKjV",
  "key42": "37d6Ap23yjfeakYtW7auwpnjmVNwAq4qyL9nTVfxdEHHDsWT7Md3gDxBobeqSacQ1PzBwXz5uNr4JDASVB5vvLhF",
  "key43": "4niNofe4h6iSy6T9TW2BphT7xyMhhe5mok7yWaB9TtrQGj7mfAa5ifPcvrNQLp6T4hnru8RDXWKxLo73TL9gvrQm",
  "key44": "5yih6mjCAJyoFDzABqmn6QwvhEAfb51q2W5V2BCgmq2vav5WmP3idnWXvRkeA8za6tfdN6rbzERT7kWGqTrF8rNx",
  "key45": "4XQ5cdf5j7pZb5FQtzqmmsKeP6WKK3xJAYMja5fgtkVx47FzUSTCTmyph78h3rkUf8qJUUBESjwkCZWJM8hiYXPR"
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
