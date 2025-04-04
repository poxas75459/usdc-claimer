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
    "3ZkQu6JfjAyXcgeXfs4t3tPN7fbvRCZ7iSL51S8QFJKwh5h5JyJiz5QBcoo871En7LVy9qC3DrUsEtFwHAifLuRt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "neFyNuoVFJqpbX4adUNYFYLvPL4pEErMgwVDn8qn5oWBg1kizLcxwbYgYz78Dn1hXLHBi53ZFbDeT4hQfWPfEGa",
  "key1": "3JDZkvxmPiFzx4fjmJmgtM9UYgwxPmZ5h5hhTeaKr729nCBBF9Xw7eNSCDcuzCWWnQkdjrR8mJXsw9rQ47D51ZyY",
  "key2": "JkgzGSmceJ9jC65baEpdy59ohnxwfhD1JPQ3AN7rVLinEnCsgmaB3QdHdiiGxKGqb9rr4KH9KnQbd6Lp4Q4WFrj",
  "key3": "hEn1wA9JNxFEcydh7vjWkNbxTvxMttLKPLBu1RvNqzCNeZC6X6ndcTbbPMGAWqAxLzQUFLABYSUBDLAv8NDmo9j",
  "key4": "oSTGKW4H4hziffx7Uf1cHCiAhM3axo8ovYxMGTgm34ud5p1jdbhRydQ3brDXPHewhfDaA7KPNNYmJZfzupz5i14",
  "key5": "4fkG5QQzEj61GxGKXRa6VeVyXzLhEfzrLyCcaNSPqFs9rcG3RaHDQS4BwqAbBNqC7bUDQvgG6R4Svk9kwH3HYmSF",
  "key6": "5bqszfkZjKbREgBmovfbJK3KGLV89MF3cnJ44fA499QKM7QbXJx6GQDQssXnZiggprajqSm9i8hoCCnJpMXzTPw4",
  "key7": "5KSk5vZEr4CyfqnZ8CF3sDYmKaegL11Xd4dpzknHVYVau6iiptPbXh5JwAmh57KFp9fuCpR8M1bjDjQnEYy6x5Kf",
  "key8": "64u7rUGJV2zHHJXLgA7QqQK9jaXbXt7YcxYBQziM8ppwLCpej5BRwJPQYq8Ph44AWW6vnCix4VXuf7huHWmXQu3Y",
  "key9": "5aPFujooVoXhKcc4ehtHCdi9y1wtxA1uioThXrjBfR1LNVGUUeYJ4goQ2ZsrmKST9PTdsQj6zqUCReGahyrjnGnc",
  "key10": "3goZc4WxihpsJgbQAykogxiM2foPqzcAe39d75h52cM77c4Z11Rygyf5Fq98k9CisXorEptkHyWQpfpCxXLogWsD",
  "key11": "5YB5pzy3pewiXLWJ1qGBYzgofG8kzx9Si98r7eEVK5pa1S3GTASsvCspPhiGd8AfcM3nbJnTrtrDsEaUqAnutL96",
  "key12": "37ZBCjUAH8VbyrE1ErisMFVtfP7DrNejR6PyQ4vtwVYTNRBuSySJZZ2W96T4iZA2FvfhQqUwgw3kAWn5z5sxJLqa",
  "key13": "2yurSPJiTKeJUvEtnJaHTvCG2iDv6Cwbqd4rTRE2SJMtxnKE5Xdt19rLZYf3XW5xbvjvNogpouaSfaW3AHPXmiPe",
  "key14": "3MV8qWsA2xGqYwvN3esRtfzXUzMnfRbUSkZi7mbt1Ko5NvigrReCunS1urhn5scwFqoPPDckEmQgWfwBLdpeHBxv",
  "key15": "CWqMsbhgxhe929h2qd9oNm1Tbk9cAVL1N7G4BTgHiWs6xvRxiDv8BTHQR1VGeC9FJR11DCQukJwwDQHhp7ePbYq",
  "key16": "4jPab3g1tPVh8sriANQjkn5cHnCKm9Gd8KmLEYQ6RHNe57tmgSqdkVBdUuuJx2tpwgzN2pWR65gs6N2x7TzDfA2c",
  "key17": "22N4ekpBS3kdvv7kQVK2W2AqMwEHvp2hVWxWn2xodvX7tbuJwn4TCJVjEXUe3PTWVhMMeTc76nSfY4tVVpw5am3f",
  "key18": "4XKz8HfedARAxvYdwQeYQ5pW4nBo8DCtHRo8ksM1pWFiSN1vTJSCjmLPJ5UnUgEHnaamzRvkwBSSjiFTpyKkpeJa",
  "key19": "3fuQL974o1ALuGUXc9MoJxZgax1S79nQAzf9zr4N8z8dkQRhEEMx8UwaQ84BVEDeoyZkrXigpTKEqkjw2cfhFL16",
  "key20": "54MzVqFe3FqiKrwfsB5ptZH2qfn4ZoNqhqavMeYfpMhqN1U7zYhfDSFKKgPd3cr2uP9SzGhvUQ6ky4EDiXWdxJWW",
  "key21": "5XriUsVXKVeyDVBbiahLMWRrxBXeq4WSohwMfaux5J8UmrpXCPCBu5wdbNKPvJeW9nXNhgAd2eAhAGP6ZVYcCx8e",
  "key22": "rJ8z2tWc714ejbLbQ7P7vHPkWymUzjgjiQ9yyeF1hiU7tN8Z11Ah1AfuwuojZSZ7N8NvNkG2pjJueZfR7GK7ZQ5",
  "key23": "3ZQ28NSGu5KqfkhhuuMaht87VEp8Bt9LGGgR1TZUhshJEHgSRL841uscTUtixXVREwSQAajhReHApYwPjt78fX5e",
  "key24": "2wNs6cqPovt9pxQRYYvbHsXYdDPCcgeMbSJZiuNA3audPaBW3WLvqCsqW4SqxCyb2txzcaFWWTDxHQFiG8khHrNe",
  "key25": "kNQ7SyNddTNvwnwDQevPFn1CpmNFtSNrwUi4nxhCH8aUeBa5ZwxZsJzhv3su5aqp2x4ySWhgEoUUAPMLuLNtmCG",
  "key26": "2wdBGyfftEyGH3rbeD46DGhtEz2ENhxYEoqQuDP5ySWhcEAtFxDPyBsqP4weP3Jc798dqB1STRRipazcTKW2UmVf",
  "key27": "f74CrkeXeeyM2wqVZJCWTsg1dPK9hGhWySpHrpWarcYt9CJ4gmTgSSdE38MuezFbCTj3wCLcLq7QG5mddZqibhU",
  "key28": "4xhtCAuzKgk7wTm3cQnM9Rz1ifPHS8HaqV971fmkVjfQQykYoA2WcPo4BRMUnCagV9UMsGH4CaDL3CF2T1pSKiCq",
  "key29": "3saB5b3XwrfDJLuNgjXZCW8XkZdK9GooVY7Nhc6LMTsZ1NLJENiiQT9edfFQa3kAvLPBgbes6QMJobVXneazQjBh",
  "key30": "3Y5BNdEFUKr8ud5FXgPgEU9q8ZbRSduDtGLoqUkXBvkv6p5sBXzsoiMxoq7onjafyNbfZrQPAGWEQhoAne1QJqUL",
  "key31": "59o5UcjrbiqKFsdKW1cY1dC6sVMr7HhGfv9BLtbgfQQgEcXUNk7DTeXmAURoYRP95N5b1qK2czxvar6hc6efCySK",
  "key32": "1yTsDzg147fNV44QNpWh92PLLG91XnUHFBvDiPvKZ2rDef2818Z7mELoHM13LDhxpr64hGBoctw14MxCTcSpWjS",
  "key33": "23Fs11MJvCP5xgy8KXkLqZ6N55EkpCw6FCr6wHcHSVpJHfJoF6SGzgtrFt7hSbsvGWeD1fMP4zNjszXAsytatx56",
  "key34": "5NJZKGjE83HQ7HGFZAaTjVeugPyA43PyPKQLLw9E4KZNoL3ghyvEiFDK4rL6A6N4NiTP9CYzge9EjSKXmPv7UZBf",
  "key35": "4bGBUfEqw8VoiAQEmgwwPPTPePsEUqe79XoLc41Xomu7RUMwa6AoBjzvnrkmJVHMf4ZbQmfvSWpT2u5DhxApwQgv",
  "key36": "4JNEniyesoh39BVRPCyZHjFk9bust9o5hKDcd89BcKH4Sr5WLMayAWKiPuHA8N3qxJPGVduL4R8FiEQytH4wnv66",
  "key37": "Cy9QbaWaRH7uQvzosjkjnwa1KhmUGWvfJrsmkhgr53Kd6dP6TkNUENkJ5Z3BWSTePpp1NSuB6dDgHv5U4HkaGfE",
  "key38": "3wh9mxzbedBP9LVJeWWGuoyj2V7goryuKhHovFNvRnKeWCzmAUpKTFGYQ75WVYwEniME1yWWKCytu7bKhDohqFtf",
  "key39": "217TV8UfKJVnWzA8kK34xHNzGNeuk8d8jkFHQbVoGk6mzAKUaTBoVH2MedngSHYPacJ4VQ27XECAjPSTngrBaUeV"
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
