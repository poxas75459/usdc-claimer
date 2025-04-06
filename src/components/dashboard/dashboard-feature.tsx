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
    "2kTGbLGHRcaLNihpxqsBKobCWFjBm9cPzM4cfUP9PbcRnQodJE9CidcQgVzxPNhbouMJJxGmGrv7CekWf8SgvwTV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FkTm7zmgRtwZNCjCb7XZQyQ7C9F9ecZjqPpb3wCeGGsPAhMy3avph3QZvXNf6iVwx9itPrjvk8Wn7AwfnJVjSQN",
  "key1": "4QUesh12qBa5hYoscqD5CFEBsnjjnfYAACotKGojQkLk2mixu2W3CNcZHeiDfvWELavswV53EJe9V1PDeEJ4EX4M",
  "key2": "5hejSo7inixg27kmtMJdtZjLAgxenm92tDwP28wpVeULUxcukMfhNWf5WJE8wr5LMe3KEDH6HZNGRum2aVV7EFUP",
  "key3": "4v5GbXohyh5qtbJ68pmL658CV1HBubufe4RRBLK5iRecXFTM4dJhDBYkM4qw1Sd2VJprBkAGcAe99snqiwmDqkc8",
  "key4": "2npeqCpwPHxTbSfSNwZRFeKMnw6rLDYxaP7YvTfJV3DVSKdpLv9cBrvxwGHuEXUPwW5Eh7ToYGqbJchaNDUVEYLf",
  "key5": "5aFwpqQDtrBiDxRkiqKnfnVUzjrEqrSFtAmSNXfpEHrKcppRbq9wqogto4PGk4fmoB1zYF15T31LfqoZd7cWJg9N",
  "key6": "31x5zvkfYoxDD9JEf2eiTcebYLj9G4u2Dyqcx6m1jWE9a88yrZE7nPojsMb4GFBYASDwRa48dxYFkXzBPECU5jav",
  "key7": "2MCrru1NgncuCVCBHTvu3tzDgZ4MG34RdrKU34jzaVDVgZAL1CpPukT1Rpgxuu1tdZatf5MWNpcVmy9tuUyopuPx",
  "key8": "2qnBENu86BrueUsU6f7WqUjxBscVyDnCDi6XNLvEQ2vpTdmAueN7eEjFX35PhkyYj82yr5pkCLGhRLHDxAtQiua5",
  "key9": "2s9F5aAUcK3Ev8BFwedSnbvnLfmuHGWVYHhotHgHk7DtdvoL9Gf45M2cCSzboK71eWMqAV8eFnisrfvX3XhD7App",
  "key10": "2mNu9yD9cEFNrpzWk4Ku7HwS5jG4MpeDVHRiyfsE1aP3fLUDTmEtda4aP2cFqXgz1ndDTz7gQ7a56s3YWV3Y6Bmn",
  "key11": "3cNc47zDegmkmMKFJsUkLi5APxZkkjDz2cZGWkiDMC1wRwyxa5yw7unRanTwTxg1dUUiaGQTkqdNHpN1cW7MgMpH",
  "key12": "2y9tNfPqMMJwCZzSHsknNt2EFxim2sjgHCYXn6raK69PA83QtsJwwtWh2U12S6SRktBCrFzyPMTEeuuaJ4KuKxpA",
  "key13": "4GEBxmx8YL6VTiUt7gVNaBj5qpVFi5tEm6WQAU8Utuy9uibnEy5NGk451SmtUgGkgLhjUDn43r89En4GcrFdYXMv",
  "key14": "K9k4mNQ91gcs1xdKu4MxqiEb8EReXvAq9RwXHdaukss42g72AAZ45UhYCDXi5owsnY3siYbw33b2NhQ3QhiQqqR",
  "key15": "62dVKUnxJ8eBbaBeQ6XggFKfVnb26S4NB8Kqq33iDfZ3KeL5m7REeFVxNZ6o2ieqMqnUWiPrh54wUHJ482FRE8Yc",
  "key16": "36wNyP5HL69hj3jAYkbG6AvHp5CLmDEsH2ERAR8DawwzG8Qm6xWjunTC1MAXq2Vrg8H6EyiJ5NQUgqNYbuDcontA",
  "key17": "59NHqWddfdYjSRduQbJDuqZDPMr2VtCZa9baDbSuKZdBXjnHk2Ra8mryCEvLAPu3FXmyXGSAttbefs8EKG5cthZy",
  "key18": "5WPuKcYtML4tSce2hsX4o6KZrkyu4evqnnxUaTk2kBHdFULjoggz6fzAseHQbmpw11TGnZr8Jm6R731YuPMsdWc3",
  "key19": "4SQAVPu5aazr6uwTqETpgqzRPaG3j2wNuxGq4q1r8L4W5CzheRGkDMbUCQtaFvu8g1RVx4xsSsN8hRLqYCsEidHe",
  "key20": "4LoSPjqTYiABxYxh8iuEpbC6jcNgNQrmbsFuCFxJD8ssuPrJABzQeizfSpsd2SAKUjJWdXVSTnxri6giZmUSphCb",
  "key21": "5fgco5SHKaNqena22JfZqRT7jzBr1gMmAnUTJ2MMgfhEpToAw8kDovFUg5i1hswtHjx4XakJgoLmJcunF7UyNpdn",
  "key22": "2PzRTnyHuU8KE2k8Jzf3S6ABEwcjrbR3c8GtgDWhJXQF3wXYYd1q9gDbjSSrAVJLfqZoxaeHm6CBfLuYLbK9qcXh",
  "key23": "32gqWNAuH6X9chigFaLCDRzHbTiBEEgKgqTwgz6PQMvVjrXzGY1ktDh8WZwEGMpHvduX3xwUmRLijiX7s1my6jDZ",
  "key24": "3uhg4ZhZXLaZfCjkfhpFVdC4v6kGj57m8r5CtozCqDuHkQhiGmhhHxFgCeb6nY9RfcKqaYTkKXjGJwLzFBmKua42",
  "key25": "5YVvNDCAkSr2NDWermjU9Gs93LHUMMvUS3TD41uacu1TDJHGnTWUme5qqX7GEvirUQ8Usxuf9CYA9jMNmLD6fakh",
  "key26": "y85FqnxESDhYMe1UUdEDS2p5U5XUTuu6rXvZzNYRdHVHyLb74oZ2jpGDoA2qaUF2EphjLKgy24PRCL3KT43996D",
  "key27": "hrkPKEWSkynBGPi2a9rvGfNhFKbLr4Y2eM4wdJaN8Ap4UQLDGHgRpMi8cvbMLWAArMCb9nRNZgWwGQG6dEwVwy4",
  "key28": "qEH6rdiQHfX1pA4RuC2TRtwPAcnC999PkaUwh6PjJs9Bo5kyrq7eaYF58GdCxJ6Jw8kqWKW6CiSbxCtDb8mmMro",
  "key29": "2zvXAuj7a1AgNf1ieKZwNS6cxEUvGGfXXVeFUBAZEQH1xkV5JmfJj9qCe83s5bZjQbTgn12mHbSedi7BxJPd4iSX",
  "key30": "2cdL4pMGHrh4eh9WhmTuwKdXBEcEPsJXNcLPKYpWoeZoq1DQAYXJYDRBFk7zPqEBhviNxGfBsQknqc5mN7Byonfe"
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
