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
    "46xvuuWoab4tascvJ5qCEf8MrYiE1CZqd3ck4n6fdposV42XT882CprY5oB3v5SNEsFgXHCD1MiafgmAaNBiMR76"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FwWJHJqgr5QZCZyWPLvfavCxeBUnjzz2dMGRerhzeY8xobxeXVdgsjtjvc8ctYqn4DMsMXLsqfwLdVMozaMecBu",
  "key1": "shVeoo2oRD3d9LMKeMT8roPKK38D3fRVQjqVehPs4KGCpkDSPeUMeLnAQcNqRSd4uz4rXKWZWuGgy24C9aGqFKC",
  "key2": "5LmWo8bKhgAoFtfrDTUyyYbqjmgrBfg7tGLgLvFurDAsyypAbPRVcyvsbPusn95SBPQULSqkXpJDxubtGw3QMzYc",
  "key3": "2nh2jxTztssRuuWXEDM7DHYN2kkz2jrVJyHmF5TDabXv3LkimtMpvya6ZmChqXavByWwRRG6vT3wYNPfiXeMgAUD",
  "key4": "KXdTymo9g6JhzE1LbWPa8AYJB1H6wfyMoYF7zx7d3GCS3FnBLnzrHTptPckV1CeoKGSfN1pRGkpZeqsF5EtJxD5",
  "key5": "3j8FduYu3KJcNkNES4v5Vc3fffVYnoDQaTDpUrfaem4PoyEHDfwppQmmKayUNnaSaW9vcbpk6DGWZ8C9mQ6U7gJQ",
  "key6": "GwYQk4U1qqjM9qtZkLn8yHquL89Ywud6f7gdcNteWbingnCJn3Ca7bMcuoJBvCcvxFeA93w8ztKtBQdL43mjaqm",
  "key7": "2VsDM9tbVkpLy7NbRKfhZ6g1QnA38rJ5PZELWYZ6wQqiPvvradszyByFYn99WariRLXsX5HNeVVWnDu12MABLUNj",
  "key8": "5UH1RvjbuH92RodksyJ61d6mh2Umzuxu9BEyCW6fbGHSK8YJDRtEEnMDjMxvP8bgNTfQ54oS5VQG2994CX6Ma8af",
  "key9": "5x3VWjYgkgm1XkAHoRnsYa5qNKLTmSKHoH89UfoNHkd167qVaeKX6BdMvVjgXdwefk3N68eo7Qmb3krawQG2YYyd",
  "key10": "31YJfASWBxQLGQnqvGuCvHYzCHVdc5Ytaef2dEukDKveikAYnywALo1UsASe6p1BC1qES32M5qVgALKYUftfBEpp",
  "key11": "3BHyeJpKXZPEzsuDAer4LK1wWPcATiJyQf7UudsYQ67gEBSDvEE9oGSKZZ5nJWAXLTYbMmVGPCp2RASBZW5ZnC3e",
  "key12": "4VAp2SfzGALot839VJUaSJBYgCrWG4gYT2JmfLa8sWJHGJKTF8hXWiRdiBtUF9ZBLueFQxcdJ8QD875JLXbuK229",
  "key13": "7E3H2q7iXH1Z6rRRyajwW799AUpnqnAS2quWBV6372ntdydg4HTNnJB92dq2tYhnMPgrbPbYg65VftoSKMEYWfH",
  "key14": "zRXpAGRioMeMTJSPdcqbmis5jvaJAcpMhYAczAtyJJcudGtZ9wCUhUpe5MyZpLow21tBEwbWtP2Jo3LBcoAwSh4",
  "key15": "3wZEnGct9TshjrfBn9ouCMPF3GEh3b3GEMPwTUSscYizy5docCVd7QteYNsv9krQxBQeLpUNV8P8yjVAG4FknWq8",
  "key16": "5R5bDhdLXNAXGrMcK4JMeq7dBeY2NdKq6uQvco2V6uuJ6UCxKuPYJPPGwHEvmbxMWRdnXWnT19dAzyUJVpUoKXtG",
  "key17": "3AW9w76FhMm8VsR5MjoQSjjYc3LSnshyEC3sm3hShBXkwmgwcV6FQWbTvfw6t8RbmRdMvRggNCCprnbLzaLjh94B",
  "key18": "oodmHAzAnRg2uGp78Gu8EeBRQVKTfyzMuGqbkS9Hyqw6EPyKWDPfb8EP22Cpqd421VsBWzCtffXfqhGddiQw2Wq",
  "key19": "2nPthUQTQmRdVDNSjc8dotu9C9s7TyJyxqntaeani1AhVzp389W9ByBxUsFqY3TEtKF8CnjBgv1cbVVQYcrfH4f1",
  "key20": "5tP7wD5AFx7w7N2vzTyTFGEM286xh3Yo3PWVjFLnBZKPjKm9ckbtb7ejrnzRWfwH8JWSUdzqs1BEe4pMPopzMSXc",
  "key21": "5oiWnKJEuhSzVcZVhycaxG8kZZL7mj9SW4C6awM78PwqmF7139HuHhhcVJto4Sqyh7kSpUNGrF2yj3sCVajPZnGd",
  "key22": "4uf6DQfiF5e8wQbAjNQ7m6T9SUCVzcKWmgdDbWSUJT2waWrViMQf6h6wU4zXJCy71QbDatRkuF1c53UE4jEVGppd",
  "key23": "3HjAZfz85V1abnN1CLkdVqQqnPJkCCyNCNCrDB9kja8Jz8sH1S8S1Uy5zrRgnauJFMdVMh4q4LLXik2hFAFkv6xb",
  "key24": "3WB3M43g6qy6YWNYz11WpmVgq9bZiRvEUr3devqHRWtbMKuq86GD6AoNnNzwJJ1AabcAmW5TjF6CVzisr5AYD119",
  "key25": "4gdXbDUFfNJFWw1EfqYwsMf2kqggiG3ehNsda79CCAq65fkTeMKBo22RNjjS3wEGdmAd8HWtrYTb2N79Ni1K2X4U",
  "key26": "4SjFQG7RNSLjGauzqXHKNFpxAgd5QaQkiveJnM4mPgAn9rBe3zSHKRy3XtXY25LMh5ayNcprhV25XfFv5qJJTfpZ",
  "key27": "5ZStPd37JYxnWRTFpsgTe7sw6ToRWcV3koFSXWxJ18LSadbkXBpX1nBjHrArvUTz4gB5rFf84N26ddsrXNUbFk7b",
  "key28": "4hrshnCg9fceLvzaztor2KRfbSGWqS1VeLoDt6VzEGY3a5xsGvcTBm1bx3dKE5JQB8XjsnCRPBTAUepnWQRF4S9o",
  "key29": "4qwwyxUSKTFTmmepkBfSpjYobx9aD3FNCn3W7gGTAJGvVhbm4SZxnFUpvF6CwWpHztGcBwqahg8257vwHgPLgDXF",
  "key30": "43c4q7Fww4ZaZCAE98EaZsYMuB5eo2nmwAwYxtwLdLHyxvAs2WgkqXtEZMXfQZmhCtQC5dy4tayB1gstSYHcK3A1",
  "key31": "2mFgJFDwYscY1aViGP6yhMb5T9W1Unx6G5AWtrKhHA6sFjpcP8KkkPHqhmJs6gj37HCFWjYGYndCSzb1Bhz548N4",
  "key32": "5ekySDExUb52aSXvUD2NNQkSMV5fgD8JME81kZpKBVCn4D61yfactCf2fvxaEPPhURu3t6L2qBjZP9ytnDun9XfH",
  "key33": "38km8jY4NUxP88wMajxUj9ekhLyXrPXQ8d5i4cfkxCFF3ubBgrVncriGxKMUhtyfvabBxbwfAxfUPN6qskZzRCs7"
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
