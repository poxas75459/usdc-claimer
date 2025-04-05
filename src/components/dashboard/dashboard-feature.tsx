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
    "NwLkDkGffoVzmfQWUUeEHFEW7WxRHp31nxRDzCeW4jCAkhAVkY33rMVUSPwMSvciwoc4vRuJi6ozgvG7NHLDW7a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oKCwCeTfgWgvRg6nywvj9qjfkCiZdM2Gyu9N3RA76BQqUJMohfnwmYHpTjDXuZCdhL7rM5iFtik3mTEeNMCWhDw",
  "key1": "2xEeAyNLZu8mGuEBLkArvDuJmxRbK9WbhHKY8sf3gdAFE9x9WBV8avj2TQF7y1KkNfkFq7HqwALzwXRLP5N9VtNp",
  "key2": "4UYyeGZ7wXDfm7MDaiG882zFsvdSRqLhzs8XjzTZW6BpzDhgchfytajbSyRu6da2qVEtdQ3dw6MiqeDfWB3UcxoG",
  "key3": "2R3kJxDXnpRqTJqxZNyjQD3uBweVCAA9C1aFuWoUAsJwk9VKay4va7FwRZceH4HtZfy2GNXWPMEBZrPqqro9W2E3",
  "key4": "31KXgXw5q3HFNnZAbaKSUnZ85Yp6xLhwrZGDwVKPpwU4Ykung56RpDgj3cBP3Ap6Q2v9iyTdVyAdnwV2z2H5yEFd",
  "key5": "8tVmVTCAWB2XMb9njqd5bmppiSSZe58dX813p83z7oMj9b18CQMhDtj3cWGBdmRKnhAKBJgVrsA2znw1hbW83C4",
  "key6": "wurqhbbkHhocmWonCXfM3CFffWT26hR2B7eAZjTW3HrkkuV7HhTbwUkrKXhguhUvRZtyoZah81wzQ8yqKK7JxtB",
  "key7": "D2dboPMfpCkEDgRvNCPveakyQEKf2HVG6uFk47geg3mBH5UiPAuXtLTpiKvJGuRmur43zDpCxWJLjbQjXedcDy3",
  "key8": "5KELu4J4rx7BeS73bW2coGFgbY7iozeWUC2mBF3iwyMWZ8Bz2bL6knRurXGWX5fSoew1iHv8pTeE4BQHiS2YD9kX",
  "key9": "DT8jxfwDMuEmDc669NwCBubT7BXT86D3ayVwuxz2rv3EWxmtprAs37KU3HdP54Sz2wy7sfdnJGRncWd5CU45jaW",
  "key10": "253vvmBsr3aeUXqWz5KZJd3tNEd1JcSQHaK4cwJP8Gc3UWXyVLnfgkLWYanL5AWwiP3C8fp3aB5RVjjFFKFGWnmQ",
  "key11": "4gom9f26EHkQMmivyFeHkfjjv9yW91e2W2LRLpSiczoeq4SuGUD1JPrNsLnvuvn57fAEnqKvHmPg1TkUkiYwcBDe",
  "key12": "5ZZgoKHCgaZSTxD5vrqEqDof2N8h7QfQdEzswECRj8iWhLBRpdgVY2TByi45ZmWx1rqnYtVAHcyiTzpMNoRUF8kj",
  "key13": "5XBzqwzH5XZ76v6WyzVWoguscnQBVqhkihj5D9FLYgfctLvyjzBgeTJhaxRE5ejgPGuVESDAHzWfLQqvTz8dThtd",
  "key14": "2yDLiJaWyqwKbcUVFNqj8NnVUVpd46q4D5SEHgJ64PKvW3SHCM7gsAHXUxHNhpFuhSSi9dbfDV16wCV5uV3C5BSt",
  "key15": "3bE1bp635Wt9JfWizWhUSgeWtDAr79uPqYxfG1KNVAiEjKpEk4NXwkVv8V4fW4DG9HHJqKoQznttV9x9kD5e3FZh",
  "key16": "4nNhVGnR1zwzEaoxKiWLiPbtZVXxfWhYvMWrJVLa6dAwLj9BjKk22aeE63tT6fDyt6C9emFeLmW8uKnEcmvib9ty",
  "key17": "2ZcZPcrvWpsvZrPwUNpxtYuQt1yrf5xVg2NTNfmE4GrrQqhaf9AXCek9rma9NDSf3wxW4SsKsenBBPkuWL9YhvjQ",
  "key18": "5yarX49gXsN9ENzKsLqigDQvuJcDmL2VD71JnHYSjAD3AZJaVZA5AhLgytdYiJDQ5GWyvLjDKsBmLkaUsgVyJ3CU",
  "key19": "5NeYe65xDPWThT2RDqzXYezoqnwPF6gbwTHWEKTox4Qnu9qnEMsgzAHzCJrQXKGw79zWA43HMQcqYasTreVzmKJn",
  "key20": "3Qt3oe4irf6HZRSY5aAewwnavNEbi5T3Jzq2kYhpG8fjZVQJMGx9RopvLXsKk5BodF64WD6D5jhYtqyc5H9rkE1g",
  "key21": "5HNGSFUz6omEncHAye4C7SjvXSvYyEK82LW1kshXq8idoSQaALwkjswexyZpr2UqYQfNfxERMJPbjzdPBzCKVpk5",
  "key22": "4TMzidNesf96jk1APKaztjsv5UFsWgnoGTk3WF68jir5JUx7KYDnzyF8RSP2r5SrhSqmF1T4ncBjrFSpWcKpdUG",
  "key23": "4Q8yvanvnJCGAGafFjXNYj97tbD8i8MEi88VD8ThR9NXwZX12d3NJSYsigKvHd23XWTr4zMMTMakC1TUmiiEzuNv",
  "key24": "5oH3w5kdqgs3TbXEv71WfFLF9HU61xW8rPNpRB1z3RJ2bbRmxqexS56VrJxksQbjgViGCYcSZT6w9f1M5Rr3nHUy",
  "key25": "5PU8igxLHfaSYWHYjFE2A94EW3NA81zmj7u4KkNdsSgLQHwecDpCzd8MsmhXSPmzPuXuz3KiRc8LmJyG8AfsScxm",
  "key26": "2JzhP3NPFkwX8mVaAcgS1JhcreUWQPeSwQ5J8YeEGefxBjUR7i5eDyMtRju94iUQZ8JqMTXz1e9m7htFv5KaiWTH",
  "key27": "2cmEKNavdVKLukUDHroPeJE6n3L1voSCzVuiAcz38GLYtBULeWcAUmWa19eV9oShBMxTWjNQ1iTKGHJVD8WB7o4h",
  "key28": "2KE4JwLf3DMfMrwxYNPPD5mkvoYsmaBUVdvrEaC8ijVnuayC67hckrrvCRRWUrMo63dfybuz3pzUi2aXcDJs2fYM",
  "key29": "G3LcDZ5WjNawk6wW6TQCFkg5eNWZsdGJMee7B1fRVBgUNcgQaMtqLBwWoZBZVDADnX8cKANzRQ9K3yuVgCSAMeZ",
  "key30": "DBtfNLTPsfCUeyZX4eSzvN8YrkwPyfHXrzUSjdmfBX9fJe7bL6pyqcWbgWrTwkxgdE9PiyU2nTJ9vibjMQmR38e",
  "key31": "12561KwEnMQ3s2BTRkz2tXLQq65ZvJbVw23DTiNib6pkotY92DxwM6jaRs7r3rbFbBPDqA66NHzNKsx8PFbKKtEN",
  "key32": "ZZjbotYFNGpHn2z1SNePn7oqbQYFaGg3SGxQy2aW8vprJ6sadAhuC5hjg5S2hyhcCsDLfFA9gKCuqrVm1GFgbA6",
  "key33": "3ESQTaDDoZ32hoyC1ow7jGz5tAGcpyrAo4hJGffwXUgyfrrgc2LuSVVJ5dQT85Kpz7ALjKsCSuk2NxL7nmj78Bau",
  "key34": "4dX4fXiRicfqTFLmJMQMwYVbXzy1QkvkMHyaErHyHEbyqCa7KzQoaQ73jQP91UYjPAqsvNErVbcUe2KE7A978oT4",
  "key35": "57n1R3Q5vW9P1MYWyuKsLPbcZexKvuLQjS5F5MR1Je2Yx5HaM8LZrCPWAJCYse6kWPnJ1BCifX3j1bxKFTZorvzc"
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
