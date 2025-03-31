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
    "1DtvpKjTTF6mKpZ4n9NFr5MiiY9oSJLhr7aAukxbPoXVWrutXULRubQTSmpHhpXjkJMUCrCUceQWFSQMbdGAGFs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hvHHU85TMDUeYsCi8AyEwwPyde1uYpNHextbvTCj3g77asNx8viTKRDGEXrCWAxz64kK41SiBcMzzqhXmTNA2Rt",
  "key1": "2h5Aejdsw86fb6GGxKiLXFUEcVg2PACGoumBrxY9XkqZmGiyKMAH8ovFLqR41PPq5HGQkZJLQWwEp95XvZKjZLfz",
  "key2": "meQof4skDRiE6bSBQvceN6s7Fz92KhnhtYsyJw5f3QrJgZ2uT67HS1DGorfMSNuMHZAQtF1Y5YmNaUsLjwiqeEL",
  "key3": "2ts6NgxKHGRHNALKTScK6HDvm8xQSJsHzZLPwvnqxhrcFq7BWK3kmqYx8iRUSXCUjG68fkTXwVHMKxrgZ8LR4SpF",
  "key4": "5dzJYukenaSqK4Me2bwZcrMhhUttQ7pGqfq75eBVWWfs8q7D5bL9kddEUZoMjBuMh4JFvvksqMS2fhYW3hrYsdi1",
  "key5": "3HHk2j3gWrru6tgqb7bTa2UFXmFhfkcuAYqbT9cPocDmLHKVCp21uJT2uGUzXYTyWhHcrNafz5bYwGMDnLcdaFwt",
  "key6": "2vCw1KAdokxCev63jXV1fBJjpAT1Gg8URtwhAav4ZQ7G8sPr8qeu5tcjmg9cXmuZG1Qt7svbw8NfTXtmkbMiSD3T",
  "key7": "5c17fr4Yw4xayLJfB4Ns2NTwRstTnzWZHZt3MFxugx74Nb1NF6acsTiwWRhXxwcjKZ3D78Q1vnsvxL3PnX51kKRY",
  "key8": "2tMyzEdN9SGgmimvgdVUaL6vX5SD5KQGVeq6tymtnXQv8KXGtzaSC7U15zaswht3w7wn2gxsAfuQxZ5Uv2qEuoRX",
  "key9": "5WRKekBrM35WnAsyWYSMBCckEx6SFDi4QGeGhKjpNq3M7A6KTjfSbMkNSTbsvtye8pvbQNbxQyB4Zx6twmPuFwV8",
  "key10": "3G3dZEohJnkkBmJwLcX7nod73giSQDhrsbU8JB9ARjgpfKexennrE5ej6WUZfSwvoVDuRnmfSpmW9cNrb3TTWeH2",
  "key11": "5MHpfgUeLjnHdBMoP5y6i6KFoF512sbvdWTJAZetWinSiM4Z4QnTTPQbsiJKy9QT64Y6W4WHD5jTfJFDg59gH1q9",
  "key12": "49d8ZcxbiTxnGx9rgEmDiirpeTu7KTvQGUPqZyGgxshLNBvEFbuQ79xde2MY1dhyeg5W8tyH6JETAyWfFkjvG4kx",
  "key13": "48bFwqfRo1BpnDDp97S79N8oErMtxVWdR4HzHKPytLgX3gf69TJd7asyt2yMMTewGxM9ikMFbcvgiAv86sCdb9RB",
  "key14": "332PagkP3T9Ji1K5HUUGEB4iX9VNfi6twRMFexxvNdAncQ6kh5Fm9JQp7XzpcPdPf2jQiQqvXEFGLzp2bRdgZQey",
  "key15": "2Lo8YZzXWnwBxehdYn8tnu5Mc95t5rrWre1azLFgLTkTg9SENhhgG5LM8yzscCRMboaL6LX1rPDs7S1z1KjmFrcd",
  "key16": "uRAHMPzVyVA3Mb7m7iHBcXoSE3Tw9VFFyuSq9o3QyJQSKrHY1xzNbcQx2GH7kc8BzQzjYZbjH9F456Da3TVC4zp",
  "key17": "35sGKuyPfQYReMpMMAYLXNVDvcCJ74T85nUqbPGBYcwPTNh4xB5UU21M8LRt1KTvY2LbgnJR8WHTk9zpewN3fSWa",
  "key18": "2uEBveZhnRBf6snZFxxY1EtTd1MwqUQUKAWYUkDMXWfbN1XCgx6oMHdgCunjuJWZPhYrgF2gdNLPgb1z79quKW7p",
  "key19": "4yh3avMnJMK3FMhdeJXQ62Z2WvVcr8BB6c6z7tj8sLyhSCVKr63mbXWAUc4bmZ9GgQ5N7joRUbUDiZHEasZv6eFi",
  "key20": "3Po2EL8ZBcw6TxKBQbAzJNRuA3AhvMFRzWfYzMQxLqvS9XicyGobg7FKnJdifF9TMGTVwpjxQTwmYdTvTF6K8Kur",
  "key21": "P2gLSXYT1agQQT8Zc4Vb7iphQjuLSZcKy6xUpVKpHjvEbVZLuteTdGsGvN3z5pPuEJiSxMpt7YKui6Q39QnqZBF",
  "key22": "5gLR12sZ5PcpamgKGb1ouMeLHjjJeUMtoVsgGvuywnV4YYdgK82UTkEYz7TT3nFdNc3Rn1Mj4dP8MjsboZcfRDWc",
  "key23": "5jx5y4YzTtAVscWoTXdK3sFVCk9ij8EVmtwDbvNrdTiY44gG4qMz6NTm9cR8kZ6aZXVGMPBjxLDhpymue4gsLAsW",
  "key24": "3e23inYLU8TCw3fXzNr3GPhNHSjZkgK36zvzn2CL33TQbvBr3EK1aKkB2Eus1YJ41mhUUNTCkapRf4NUXkx9yZe6",
  "key25": "3tbf6LBWbH1EbS8rstt4oKEucW2yxrEwwyCxGedzFem6eUn2ALtc3GPeBXwx7pGXivoc7eHP3CaM5b3FRsPwhkuc",
  "key26": "2H8LpEmKSMfXziWPfK66tdbbPapYXz7PnoNp8RZZeRpRzaoayvdxGtgUYqYsR8xtHWVGdtyfViScvGw7Mwbr16aD",
  "key27": "4xQ3sdXCns8juMFg12wctMEKwu8aaqu2NoSt9nJvLSjxUnJiEri1bvgxfBUudYBABLBrMxe8SmhBw3XPcXygL5hC",
  "key28": "3XFtvXoQtn36tzqAS9cGQfTg8P9UG6vmx3c3sDAQH9RUyY1tmS618ZuFFSZEArLMTSh4z3MmJjEwv9jaLArpLXjX",
  "key29": "2TQAC3JZf2MW15WsW1DM66ThZtutAjkiqrHJPpkmwsSjKdac2VvBLW8Njs1nW1GSUoD6EK3o41zKNWmrnRaGzRdw",
  "key30": "3oQV9ukNQGxfA67pFmp5CsPvWB8RQzwSC44Xe3rAKzfN1q9JjZN8hbNtzzXAEy7QYeMBVhbdPueMstXXKj1C9qxq",
  "key31": "477xq3pVExpa42KCwQTpPW6WqjvN6CeUJNf1cTVef4YTE7QFJxymtjjqddAW5GyhRQRNJsXcALTuR8wxjtt62tvY",
  "key32": "2QUs5yEU2FcFJie5ZQj1oTgz6ZdKrxUmboB7WK4rdWGiitp7CZoJuN1t24j3eUWRpai8BzwoWTRybLX5BTRzSEYB",
  "key33": "67pyuczktsbBg1pUDNU3GjYYX4Kosf8Egfh1W5tU3QiE21SWSpeFjdS86sap85SajEXRAb4WBx6HQxz3ud97izQA",
  "key34": "331xBEa9uA9FYJLAhStU2M5cSjc1DvbyXeW7W3PwG2chsAujyip2AxMNkJ8ZtuGteEgzbR59jb78YW4W1erAaGv7",
  "key35": "5tNuy5TJD9ncWGKr7ZF8PE3fCZvpVi39EUvjsgaRud9rtWYE7pxXy7CyZfbPbEgzBCp4woEqjt1UQQj9piZS27A8",
  "key36": "65KLjaQjTCKXPdXFZxGezq8pGmz4Ru2NXdnXDsyey9tEQyhAdBPppDC8Gc7gUMMfwELZXqvB4niXwzBevXgYTpCK",
  "key37": "3kgSDpSuwzSSFg3TfsRdSHajdNoE4NTcrGjKpQt4ZAZHoS4JdCwNTPDCKnKJJL3Ytq3t1kk3n2vh93Bicq4M7Yo4",
  "key38": "4PMWdGFc1rBooY8zCwRbMiKLSqaKd3Xrh2NePYQrTRgKVLayLKvLbAKpBZZyP3Mm2jrx8Zjf2teDqVnPLxhv9Csy",
  "key39": "55HNKvEd49rDj8PVHgBJaK9JE3nZr4Xdbic6SyrRpGzX7KRCqffctmtpQdNHMKGk3WtmqfPRg5i1EHYuUH4akVGP",
  "key40": "2i5D7Kn1R8NvsheTNWd1QKfwWQ2iM8bB1vRK26E3P4r56XwWqKxuF4Z82nJ1fPmdu1bAMHq8ML8XuEeTdWCxeB2r",
  "key41": "24CkVyhpSgWH6mwCAYdBnBg4oB459CHLUCk5HufhTqHW2Bxvgag3s9mhN6AiSAsHZH2VBS6mboFD7ycysMe4dv1B"
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
