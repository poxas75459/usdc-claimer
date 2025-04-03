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
    "4irygy1xFWyiR4EL73LYjMNckszKf5qFkxa5tsA6z3RQSieoCBeFXvfMvorUxZd4odD8L3mzbDVinvfoxzxL9rtm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xQqgfowjQ7ALBEip7QrhoBHrqKmoaWMXWahsZhPk249RybVE5iPrAxcXcYWUpynNS7EQYHcMqcvGom4LVo7xcWB",
  "key1": "2pzLPPTf9piT4zmSaGHNzaSjP4jV7AMzQFC5PQqW4FFu8oo8zDsYSkF8HVtviX9Zqx9N7teE7WvHnFtpAXgS62v1",
  "key2": "F8ZRbKZ4fZSg9WVfMTJKKVkDTb9viXsuQEvz6MJuF4c55MwsP1VxVFxtj3DgRCFLWZTAs2AaTZiub4o7nCThduV",
  "key3": "26FcdTScNW138qyvout7NHLEaxz74xcwoJQHCDhayafqpiEbBCMHpULEZBEDBEfntcvvsUsCPtQ2ZbTFBG1pzWoT",
  "key4": "5kwFkAKLqpSkFdiEaVmvHXzGtkfjQQVYvLcVgXmY13QADoMKdBCgLretscd3k36UxNXqwgpjCKrmNCTu5rFEE28f",
  "key5": "2uAukw9UTM4qEU7ES4gA2CqsCGUYt4eLmYPDC1F7ZgGARefhfvnoaio7vRL7bkqivjGfMdxrUtFYFNfxF5rThJC8",
  "key6": "2PnmEb4oXjDB5uKpaK3YhtCLL3egD4c14wpzfmbwsoZiKzxAkMJxkeeU7zS9ZykWZ3A3ZASPs61TwLWRrmKDZPHN",
  "key7": "TnMUadFoAbrQqTjgXTMFc9u3QZ9pQkh87qk4JeDq3Twk2DKP7sev8vEdky7ebF9QhRoMD3wZrQXYnmF5kbpta5p",
  "key8": "hduvCHM5z4qjgcXUgXAAZCJEwkcCrM3nJX4VYCekj7t7SwFgfGKRaCKYAPMV6rZoFG1zZix68ALtTMuSXrpzWb7",
  "key9": "3X18exZDckuDK5szpMFia37zGULVaxFG74z69ZQECEVXFPS7L4zyZTUcknoWnnRcanTEnMbetuCumqnz8xjkjcKN",
  "key10": "3MwwHJQunKBnqQKiDVSj3xmodwaGNA4bgwW1KAxgBGE6a7kq4KJtnHE1hg4KKsvAxjnjAtRa4cNM7K37zh6nAuzU",
  "key11": "2eEb22XwjJejjYakfCCVXvK4pabfs8BYKTmWxv7MPH27cpkAMYGjwQEfqdAyPnFQ6z8b8LwseXzzQkdPSYbEHpS1",
  "key12": "59EyqNKmKSir2F4gmzX3ZRhL7kKarsf1QHERkmVPpiYaW26QgtDuex4bH3nJA3kJWasLvFj1sffoARSpquPkzRue",
  "key13": "2StZ5S99AmWJTGmr54ubHPc2LLFEg3jvbTytKWmbS6QcFriRLS1oyfM7LKbdKVSZGEUyRMRfPU8V48YEK7nu8vQD",
  "key14": "2BBUuMs36CR2qmBnXjzvXRGam3uMVMrSABVJXUJ3S39YJVE1ii1ZWtgPnGroyypAb3E8jkKUD2FHRzPL8u3F2qtH",
  "key15": "4FKNuXgT6oxZCV8aE4jaS4yjSdKDnj496H6QTzevS67ibzneo7ECUZM8jmkPyk3qEggbwMrUeTiofmYQ1rgk8tet",
  "key16": "4LizqQZaXTbftZQzN8pbwLcoL2jSyJDQYunkBuLVbyE8pKgW1CFV4dncJBQ4qbirvAj6iLwezkt7ZrZ1b99J7CvY",
  "key17": "4sW5ApmYwPSwkFtaMZohfEffCiaYrsYwceRs2FBMzee42kjGAPLRmLGixmnDEY7EDiiUJ8zQejTVQXobcGJHjeFc",
  "key18": "3Giwcnuq7PvkrvGHE7En4r74jU77JaVrydxJ39v2LScp6aVkKPWTZEpBJ8oFN8CEVrSGucfbMkJjd9scdJrFk1zL",
  "key19": "bmm9ogv5iG6JLoCGyuUDDGf3WDZeNLhvZGjEbbVwxWU5z1JDb5o6wBwkSqe2szDynLhqA46qpraL5moyYGwTxgP",
  "key20": "Adxi3BdT2hjxwh6TAGmfkmGY7GpcSpQsY5NBYKQcRcDdXJb1ew4eeZSvx9Vf2nANxYhpTfhXGoFZK927HNqCNAA",
  "key21": "3Qq4dBdhckMMVKC5vKfKdK9a1TAxNQASK423w8MTC8dARvv7nk1fizfEk5KU4guzadAgy6uZKU1gcgv6D3qbkxQo",
  "key22": "3vrWoX7Di7Jt7hfkKCKfP13q1r5mxyUKUWBfiD5ddfUk39BdWSRuZtKpZtN4rH9c16mqJKuUcEZvCjUe4qCF7huu",
  "key23": "LVtYQZcUfVqfRtjXXPFJi9Mme2QXpPfFLAWN5e13jPVxC8csXBj3NyLj3ijEhCPp5NTT1N5oKekCgse22TvCZsr",
  "key24": "4HcyxXn5buhCHsufY66SZovybaQC9jPRdkEoA1gbSAfZA9v4nZCD7Mccm4JdwKX8wPXsNeznFkptrQgu876uEQZ5",
  "key25": "5Bsq7M1WZMXhQBCL211z3yAZRtS7ny1q4nsdNZSK6erh6pvbHZZH6syD3eet68ti7C1c4qShrSHi1qL8S82NuETc"
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
