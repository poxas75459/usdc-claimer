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
    "R7B3gq5g5SVs4yR5qiC3LU7563LD72919AYwBtrknxm6e4XvpEqoJoCmQpcUz5xUxMN3zqqa4u7d9LMRPpB1g9t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cPTy7HYhJRvhkRbGVHF7Q28sJrxyYoCyaaJYsTMGt1j8NFW8hZstZvaSLKpaE5DfhEueGAY1Wp5MMkgWfFPLkmf",
  "key1": "JVPCUALDY1PvqWeBdzShZPGsUHvwQq3EtdqEyUyCnrvvmrJrdtP48TpP671mAZCYb7ceJLvgY8UkfKKJVbnQjjy",
  "key2": "5WG9qSbjs6CoYPceSha645MZxGfbAvbAbfGNZhA8EMy7wbKeFKUis8WCufhqphNVpzma7b5WU7MpD3vJwRsHibk5",
  "key3": "4LCoBhkDB3NuYfdN6DXU9oua3iRaDnVsNQd19MmvLYBj334PajCrPEeWdXTv86TzfeGKAMPmggJXPDzeLk917pdf",
  "key4": "4FMbU8VJVqK3gbUfYp3Nqcy5Fd8rfdsxNrT1pDQk3K92YReAEvg7X5rJXq4V7VYKFDQMVe7pqDNEpJqAgyTVKanw",
  "key5": "5EB7X4jbgWKFd8KbDQe3263xVY2BSEo2pBDXaKkVtXb2rPUmExqERZWQGaK1qHW2q6CDAPa4a4vNUqD4RqPsVM2H",
  "key6": "pPgaeYvpQZdmNkjz9Am3B82j7w5hCkG4LCzZqbQKuuABcfTv44SXmKzHm5Zbu8dpLZ9hYwtLaBXfJkZ6WCER6SR",
  "key7": "pexwXM656sb83SD7ypFHi4CJkJ3tESw3PnPkzhhX4wjnd4aTDvjN8WvGz8GQuRS8HnGwPKrtTcZJkjUfjHTwYwf",
  "key8": "32EVwSC8JsaH61jcNjkwH4kYSZiEHYCLDveEMLANonNYBXnkGmhQdPkF1pKw9kKhvTTgzEUAvzSWgGcS91gsMcp3",
  "key9": "6374B3gSw42WSH1MZUMxSnS8ZvNyPckt6mnBhAg93TrAsBXs6XBA6GAxcbjrrRY2p3HmFmQKHGGNDjycaGAK2Kwb",
  "key10": "e7YBdjoNY3Y7eefiZhudTpMRvC5Yf99ZfBTLcWHJ7F28zxcQYHELEbsA3VhTceBVNChzUSniEihHZJgW5hJEamH",
  "key11": "ymVBZXQStxcXh7FkbntSKBgic4C2nXV4TDBFDMfMJRUZgpaA2oSYMZnR2Tgy4EEkEYFoVsETMZkK93SKzJCbz3W",
  "key12": "42UumdPmBz1rvpqjvm3EqAo33jw5jSaMM1gUCKFaMDXSCqNrXUWpRVHb2RHE2okU5beLD1AiQCUsXDmVXtQQgf4M",
  "key13": "5pRrqufQrv9oGGCxJzsTrHbNxuARkuUxrthX3PbYwJXX9spvTwh48AbCTAwU7ipmeySZnc9RuZhXqp76CFqKGUAx",
  "key14": "5vgVY9otvPgopFsG9rRRW17Td8yq2zbtH2RvqB5YWnDBFajqyg6mLccFbHu7c3XJjJNcF1V8bCaiPu5krSjQYari",
  "key15": "4WmMaNq5NWwi7vXkiVg6KMGHXP4W7Xiu8F5cu1Xct2KYTBqGeTWX9KKLmdBt6b4ZnxXSmb7Be7cnyuvwsR9Kck4Z",
  "key16": "VnWNv2ABTDf7pmFMomaF3jRyjnpCwkmu8bun7StCxkV75n77Cc96WRDxmfk8NLc1xJcaSGWefMMUGmP7UE9rNE4",
  "key17": "3k2Se5YoSkZqBvw9NtUkiaLRjKXGNAGrSrSnCNFMWdAj6GYb4Un6ofB85sdzMxzDWuHdvpQYiDJvMugicVjHqAdG",
  "key18": "53f5QhcsThtCV6P4HnTTdo4z3QDqfdcph6xLLFvuCFd8iC9XmaCQw9dt8k6NtbDo8nbiQzsffgt63qZ3L4sp4WxE",
  "key19": "33Zsc1XiWWNh7naP4sqFZJ6H1pTLnmG1EuxdGYhtvJ8km9fmjb3Sshk3xFPq5qZfozJxwzBEC1PJWvMgjSb1TuBU",
  "key20": "64aGfhaoNyHdTV21wXu57LEZMYXUYhLU8ZBjcqiyHXm4ED7XeX2CDApXCi6hjZGij4G6LeN3YEMEyVgd9AqMZ9hC",
  "key21": "eaynvUyt2uDg4JjjQwe8A5qeMkshoctXorsVq2mDrRMmkiNohTrLXZFndNqThRaghDtTVY8hEEHWQ1gvYLWDXLz",
  "key22": "5mSoAuWCb9ED4up7hXcuF4kTpw4hiD5dpphYX3gsjcLnRx6w114yPK9xbjovee6px4CZJoCrbPDgvpr5qEaJnnCM",
  "key23": "3odvuHPQDCpTP2rczEoH8XiDqZR8TU8oubkiH9xtCQAk12aUTvisTVuqR1zU8zUXN9Jawtkra8GjX3ypxrV27NQ8",
  "key24": "331GkPART3PpwAHQQm9bkUxtrnDPodsy6oP88cUdKCr3tyjWWcJjmMgEgfi5WainX5zCCeVBwFz742jTj8ZBmkw6",
  "key25": "4wvkQddmqW7Z85MRAXSrMKRysAsKpammFHkpnzC1kUu61GMJXx5T9oGbxog75nF7V4GsspbLtSXebeEAmTnkwFQH",
  "key26": "1tDzMeWoFLqXT2FaQTusJSvRJyHR31dcKwCKYurWbFG1UqiguGGp7BBbn1CNKbXtUN4wr7W49Re2oeSqRoQGUqj",
  "key27": "45QZTv81QVCbHPTFFJyqpDFRi7bwKrSefU4X5uic2Y3UuxS9NC1Ep6g1gSGMedKfML5z2HTSQvz95L6Q5BqBfPxg",
  "key28": "3pgVkrGMLYJVBZpRzNMKFq49b9GDS8KHwL3imqJCCHz4rtiWrXVf1zf9iByRpU5BgmD3xgjdQtC7Pg6zsbkBXCDq",
  "key29": "4AEE3nuTmRAKBxu55V5xmfcwajUHqRoqDvAJ8ntfhqUBRexaAhH53BCPF8ceZn8vLFWwSJ6RX5y3QXG36LrwThtR",
  "key30": "4xWb85Ef3pmmosEfXZ9VZaT5aU9TzZhgM4L4EvNJi2qEzgMxb2Vu6c3uiynsiFYk3JeuiUwDUagUgoYeYtjHKex2",
  "key31": "3gDuc7yoXpLA8NxWiasHcdGztTSy7nhVhF4EhSQKeiTsUsGuCpg2NEQ8xiccBTrEyR1fxFZa8ZY4s12Spt9AdTiM",
  "key32": "4GQH5MCzRmd4d1hKvW35ypq1k594NMGnawxdwyBHkCpFE4b6fMe4pqmsenSMKM1KoVLxzq4XcUxv6YmRv2sWF1Ce",
  "key33": "4LL8XA4bNcqPKRNVyDLATtkUiTUHDPBXV11HJxwc4GzBQUdqrC9XQxsR5jrJowg98ZTEUdAXnHhPUxk8AvXneuPx",
  "key34": "32dzTzdYNvnqyG5MAyzUt2zGe9uytQTpQGk3kPF42xa6A4uFy3qYRbYpjCRMzX5WjMzv5DaDU7rnru9mCnw8mxFv",
  "key35": "4xVV31siz1XFFpxWTErkVxfDviP3qDcR7Jt52EEQHLZR159sXwudqdGpAf5rktwmj9E5VehGQNtTxGmV8p3pkbhC",
  "key36": "35FSep9hNPm2v9HzQTcKjL8SPFQSR2EwqmkRfKJpgdttxUY3fDRCJSxY9gsDiABRNWy89a6GbYSgUvCsxBsJ1hQ",
  "key37": "EXseWKgpJqxNCkek1FnfL5Vr4L33ENA8hSyT9oYbfr9Pk3QNP1FTTj63APgVVgWfKwThfuQeERBopjjEnubSbE7",
  "key38": "5cSXDrz8deFrq5ta3q3JyBF5E4i2abPgDMzmgU9T2WBZZrhDZFVgGkNGEwGN3vRuM9m1GNtCYoqPxhH3WKXS9BWE",
  "key39": "27YEQgpux1U4NUw8GgwVyrw1Fj3UZrRt6Wry7X9JJJojTWZFWEYFUjwwq2gNWuPFoV22YR4TvP3ySC4Xkz3BdmCm",
  "key40": "3aqz4RFKWrsomse2mGqTRXAQLkc7R9KkQGdcu1EJb9zCWqEQmEZdcynZ5G87N1C5Z499PYwzHJW9BuuxCikXsXm",
  "key41": "49B8fbfj6s3rzcxgyKKPXNoBWjXXmmhn79v9VoWTtrYa6rUQzK96SVJyAYVqa69XBkDEhaguPLLQdWzp7D5kDLeH",
  "key42": "3dxEBa7MZgHZNuhQ2fNa3N4i2Y5m9dhkDNnAgUE3NXteX4cgHPjirxXUawpQq4TTtuZxxpK8Ds35gZJ9dEuyK3vr",
  "key43": "3ePN8FVHZ6gPFF8fA5jtsBwmgSurvmhgvo13fj7LGt6EHtYaWL5xVdc8eZ85C5WGk8zrPQj3voEE5XUKnyCNTMGT",
  "key44": "4at5uD7XGVPLQnmuAESfS5EnFmEbobfPW9Qy5VRVRxRwLY5tTir8wfDuF1bioSZkbBGoCE26FGav6brArLMMgwiX",
  "key45": "2YjvMk76wXEPXgg8Xxde44M6QMeSkbLdcA1zdKZLV9nRH5GisVWyz7KuuS7Jxn3Gd3uRGX5xgJZswXqJ4hVu7RcA",
  "key46": "4sAF16gdMR3QDoYKdVe9Nc9QrW9bW48RUzQ7RQU3JLneeenHEC4R4wZQdRNQSDDgQpDrAg6UA4RU2mew1hvLEVzM",
  "key47": "2kSsP7voukU9ThsVSb8rfccwPLj7FTt8TALJ2zBwdwtbK4VhhQJuVwHh3KEub4shVRgiD55UhGujNnyBT9ByUo75",
  "key48": "4eLt1NvQJNJ14i23tjHU26ZJsfRwR1gtFwx8CwfdJTEiuPUTyqyPcdkdHobK9WFk1WmrhogR5dGnfBzXn6vYDCfA"
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
