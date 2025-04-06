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
    "NZqD5z1tgdoatD3iMJQFMbCoSTXMaMW6yf85x4r6ro13tqj3Wc9FnsnF6c3B7qHHFD1tp7eNHbVkxWBuJ3G6Q56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pu7RxQit7Qyt6TCqF2xcSqG6s5NBAMXLZVhqKrS9tKqjzJBkThdkzJM3aU7DDad2G1Tt9omxHBzsNesU8AiDW2Y",
  "key1": "3d4ygAMYYRWN3CFWkV5ePhotfe374uMuoLZYsQRSwqwkGB1aimJww8VfX2uYczSgeTraLbTJLRSYzsAF5iJ2fVuY",
  "key2": "6ced1GTrR8xNpr3TVJjBe2WjoDAAYY3pcSYbDcN6KtxtjMap5X3WE3VN8aCo8CNsmtApoP6rU31TYNZUB8PB49d",
  "key3": "4yN75ErEPFkm5VEszDJB3NTxYeb1p8XKrZXXppvxeKQ912yERiqvdSpPiytKWCZocVi8kJF2XUqA8TeLzJUurQNc",
  "key4": "EYPyqH3YiiVB8ioTwVVnEjDR6xQxkNfNaJfZUnJiGuTNT8T4pGtn3znvW1wUDt4h1JDnuxLGtpsjX3NREAWLppF",
  "key5": "3e2ioiKdSoDrgfQEDXWz7qXJDKDtrttwW4QbPeHmZD88WoXqqqweAdqJfNv5BY7oz69EKN7pkDSoUP1uN7n9d4ke",
  "key6": "5ex734fhMjvXanhnGEiuwZdsjd9zV8BYVouy7PRLTWUPi5U274zTqRX8hGB9NYBmxyAfV9EG6b3H1p63gqDz62f6",
  "key7": "HQWEaLcuZK6mL5mKZhmr6afd8aayeXBhL1G2xoj3KheKV3B5iRaPivZuBSdnLEYC241Tbwy3K1dQA7MswfW3f63",
  "key8": "5Q9JaNwcTpeD72zwK24d5Qz2X95tdLxDgeThohiFccLxz5fndnnKP43BcRjeAtqPj19nQSEiWbgM3A6JDH6RmzBj",
  "key9": "34aigWHt89jKMZnouUWDBAu24TGEifsUnHqcQNEkqcfgbtCWiqVs5Ayhr45biLCkeaxn2Rs7zbfHRERqsi8HAeyd",
  "key10": "1T1ZPLSv6pizTPKgqwJkd56V9uPPNFgtm8oK3iWRBMKBwK2i1y1Hhp7xyb9iR8ModNpqPxsV59uDLXEEMLYQ4Ww",
  "key11": "XHX8NvGND9VzDW2AJAdxShZd7sdu7dqsMVxpZoy5SQUB4wJ8Vbf1Tf1GETkMKmoE4mYJ2irdvJGusJUbREKtpi8",
  "key12": "5f2J9k4XV6XHPSf2RcjUSSzt6PRsyLZDtjohiX7kmxi5eDtxS4YHxMUFMiCb3tu6YL9ZCykAfWXkSbbpj2WjcwjQ",
  "key13": "3mYML3AH2RTvnx4HxpoptZge8wavpMnTTZtWcfBoAUmgGVVbJMcHwyFqKvcghBpSqSUvCr2PjN9ufrhUdwGUtViM",
  "key14": "58ZCsnJ8vMx7mHTLe6mJZNm96dfM4Jx5pWX9mSwhQaLeSnNRaERVYh54L5J9doTX4Ex9u8ifz1dz5ZD5RQSJKiYp",
  "key15": "2MJNtxxscf6HmFE9ZJtC2KFKkMhzd25cfiEtSxb5KN49zmSGYJuyzzSSaCVtnZYwCFz9Dz5mC8pbiRoQ1k3dNbmZ",
  "key16": "3rMSYib5Rw4wpEaYp8uHnCga5ypRJFb7WDeCzokTgLG86zSoZaxpKVvrdDSDVRcFcJok8dy6N7yWGY5zogV9GnKu",
  "key17": "5BAKS5bTLTiQpRQ5cZkVuXEqyqcahytJxEmoULwejWspop3xYEaxNMoPPXsAMuXYeVaD91wrhphtrcxi9xPAtiVW",
  "key18": "2BpbLZfoPBtDh4vh6Le7RiCHtqd1PwStjWidjJfy3sufFv8YZFKGUhgpqH9nXyWkJMWknBfyNL8PUwwy4ohjbug",
  "key19": "5ug8RDG4ydUrGacJVh7Rrv7KhbtesLw7Urz59cgrKt4wJUQnqbFbD9BaMiPHew594KCNPSQ8hh7fjJnutprZ3j6V",
  "key20": "5EW57REJzZQYFmX7Jn97PLV9VyPjHk2Ln94CvuVMpYC3CrK5MQWEXkiaf9cZNu8VH5kQrhw5CrT6YLGFXHUhwB3h",
  "key21": "3vz35EM1uFvtnCwpv2FfVi4JRrmYJj6HbJiMNJdWBbfmHSCTvtMwdeb2SUe4PUAxBv3p7Jn2mNRDVfERKr2cDu8Y",
  "key22": "2JwGbLC7PQA7TF2jgLcMnxS7UjY9dzEBQvs3uJuaNs1PbRidVddVB5umtJBkVS8E7VTKU6gNXdvuiLDMiza44ifu",
  "key23": "3pLjGeC8w7K4avBeqReYWPDymNCDcG7UuZdmWSdytQnNP9HkKxrv84uaQgSe6TBmvzfVbRNXMcc2sevuwu6KZebv",
  "key24": "3Hio8TpBgNWeWqrJFqMMGkPwM34uqtWkuXjq24m2iDrC9UsjTBgGtSndrFXaxpbBefvce9Hbnf6ukaEkaPuUbeQU",
  "key25": "2Pf6EcqcTvDRA9jDFvex2Hu7QjSh1q1HMmw8gCWdSVQcscR8BVhd6qKibQic55BnTXAyXab3PzKMfEdK7C4Jqqir",
  "key26": "5kCbLjTnALyWrNj7XCm8TJbqm7KzxYerZzJZKw2V1cZNi71jEg4uJNKd22Ts5A5BVhAZHe3mULuZgSCDk6rTWzbJ",
  "key27": "4GpASPtt8LQYaiLSiRxoYvCUp1hKUP47NeFqRYdTzPi6hB5YR2HrkcurFamSkGxtw5D6WcqLKfWySSMbhtddTgXj",
  "key28": "4f7g3FmCiaPmUffy5RLLevCWA2XM6vfUJ2t9Dx85QLn6Kw9pKTqweXpqcxVqk2MTfNhupEzLJVPXi3CBasSiAY3b",
  "key29": "4cE3tph4PgMk4ArctgyssEZSbRARX2NZ5SCB7fYPugVSAW57XRHdZh5Ppyos9boZFQiPu59gUGkKcaAxR1joNYHr",
  "key30": "4T5n1ebmbEZ1JMGm7SbyJANtCfo5gWBu6dkU66Z5TiXMqCDjhTE9D7pK2DVcAnZ9EhdoHm9UarA9mEQ1BbaFJogX",
  "key31": "4xsMPHYmBEmxsQvPkVn6J2NMa2JFPNZiZLpHnArVS2Yj4NGmv5Xury8oRAggCsQgkZ7aqwaz4ybj6aQoYzYrNhFa",
  "key32": "25i8xRtBRtfPLoVeeKLYtMjA4HM7jPsdkAGnFWQjgsGNvJjaoJqkr6W59kQEAdtLmsV94E9XpNPbvhF3wd3hCm71",
  "key33": "3bPoDpCjq1m5Moj6QYGmfyvgaFVLGELnUGhMxiEEeghRgvxC18B5STFvp1WgGPmh9gjj3hDmCMsGSrTsf9qSwUxs",
  "key34": "5vAv9N5WhmzrTajqBpMcYk36WybvYjbxzZYGjQxaNpW89H8oJ577xN4Nxd4eQtBhZjm3uCUKEX3mEAhwhUQh39Js",
  "key35": "5MxDQGgravpDURFNJ5PSA7LWotQyNZySobx1eujRZyS8Ro1Aw3L33LaXFqnr1hC1E6KXaLB8rG72PZLvPbFWMQKP",
  "key36": "2xBzkA4tGzMvAttLwgiXXFEYK1YtJ3CMHhghxJgWTyVpiy7knnMw4LUGAsbBMswyjFRoYmcD1rxJtbHBUKgBsgjK",
  "key37": "3gF2QdoQkZCtpysg1Sikkc6brmbqFvop6H16LSuqQAHvGB8sVyCeyBcn8ebM2WUmJqToHE3G7xHNn6kCCV5SfGJG"
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
