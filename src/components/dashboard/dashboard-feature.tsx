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
    "5c6RA9vzk5yBSrvahP238pDyqRBtZtg3W7VydVTCPRkYSkxi7dhMWnt8YZj3MjWTL8Zvg2g4Qsf1LYkBwZaAAs2A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pRppBJE4StBi7grzMCvQHRmC4UpebogTzU5NKAdCxLyv21DEufHY6obE5u24qn9Xq4LxRrtaR4gLRbbsBU9a1eQ",
  "key1": "46DFNq92w47iqWLkgPQBwb1iZ7B7mCbqjLNSozZGKeKbjdUrZQwYomdD6jZCpCx79tKbFhqKRWXurewb7QujuHhk",
  "key2": "2NYXhefwjRgh8a9V5bFboSfWz27tNUdKXqDyJKjVAUD4tAYnAf5cHGxbWZ363C57cGGmPHJPDecqCPytmkGWu3S7",
  "key3": "3xsV99iJjhLj4PGCDZeyWZPZoXWzXTwTZ4DTe8apJxSd5o4Z3AxNLLCYLgGw1c3UpXN1JWei3DD1DwutsNJ4jds",
  "key4": "4tbDBKyrzPtaS4gV7ZBwNvkjeW7mKEWz7dtRj3vxBXBL3wEZUfvb7TfPqLiAmy1auHixzRpNfxjCapiCG1wBH4hD",
  "key5": "4SGFEHSfQLKdyZpNMLjd9dNjhQBrmop4cH1ymr9soqBhDjF7MgAjnBBFnW3FFGtqcd9iAF1CCENHQNAVBHPiEojP",
  "key6": "91n9qvMiG7MQLuL1oSedk7ytjaor6Xd81WnK8FX6PsjCT34CqKVxwvniU48EAXBmtZjy5isiUmdD34HvEg3anAA",
  "key7": "2G6yrc2oHPZNKR7byMNXzDovCZidir2SHvZSTUW121uJh8ydZsNaRA8rpV1t8Dori6eVZ3iFCRLKU8fpT7mvbuDf",
  "key8": "2Fxtom1XE1JTTDZgy4YMd5T8yHvgmBJpwgKgAvDuqPoHso7HySRogDKCS8LQSC8og4a3wgWwkpBBSpGxPhv1kFui",
  "key9": "4ZnMhk3USaMYJ3WkW9EMu7aYeDfVqrK4rQiWEP5CXW5GCTEenhRm55zFqvJaJyCv1EH1xuRrNvejFZx9CCrk6rsA",
  "key10": "5bG3xJ3Us7nyJTHhRZEpeMe1QjNhoL8NsVMULpW24PBQYeHcp9YbxRRECwJjVT9Rq8b4iAwVvwUSRcnwTfSXkWfe",
  "key11": "2i8P5Gonb4ykCM2RVrXusXWNRViG7Jxnd4EgAsEAjyaEsgnBs38ESy2fbbZd7yjfEcpRuQCWdFX6pzWbR3KoAGxg",
  "key12": "5HtPW7iZzv1bsYoDN27YGPPK1DdJW2DYjfL84VCEJhrLtQssuMVPT42xQHdXhPUhRB7E2Q59AZF4f9AvNNgWDjGz",
  "key13": "3wxkt9mijzk8HWQDkKEm3H2PznrUXzzKXXWe5kBNw1s1RB4awgnqHqzy2Faw4hrG98iw16XQugBVWqAkp4QZ9UUf",
  "key14": "28ymoBa8g3CxXzdt4vkbpKqJjVgPXYCYbHpNApZq5sGHTdXZmLJH7LQzD4pGcHbN1exoCnvswhaXE5YSt1QgvYzB",
  "key15": "5jkie4MrqQ8Hdm7FG3Th85FvSUBXZQtSQPacUAqFUQKRmRTqF78P932pRop2hHJqNTTYD6wAS7ZcJNX4ZpVzduYJ",
  "key16": "4cLqRvH8widmUrkw1MSMrB4m5tYHtQ9W3ZJFyqv7GrgcQYAfWzKrvSbQFTTFoNwz6z7kAYDnxeabTDqwgWScfJGN",
  "key17": "5PEYUAxSuutzxJe5N2gizvbYDxsRciAsPnsCs2ZPnZhNE8AnoK78EFN5PpTs9siB8N996TZxAGHqBweMybvVcyb7",
  "key18": "5BgqY7jJCUradibTJ2hogSTPPvxKeTVSrssZq6SayRojtaZC7iw97rcr6x1UxuCXTc7RB6tXWXHGnuKHTjGX67c6",
  "key19": "4e9Vvmg4B2RC5EeeEbcyDDD99tojPEkBxzXaiguWxJHmxi6gKTTJvBLK3QLtyajaJFEDngKiX69jjbRNwu4cPMBM",
  "key20": "2qYGCG1oFMqWhkR9anFRtZyF4jozYSRht28qHDmhcFLVfbpMHoyktVMEKWzSkeoLJPVv5Q1FKD6Djckr1N2z7bef",
  "key21": "3QeLQU8uKTZpmAKBVANC32dT1hL4EYi3QyLPoFynhZNYAXDJQYMpCBpd4TZYKFGskSKv5XBWqLsegfXAXtPVnbkn",
  "key22": "3xLHfw89YMAGDUfYV7uDmNHGakVEwX4biAPyNQ9eKbLpqnZiFcNVwc2BNRifbtY5ZqJvWS1q8xCx7g47p9HjTTVg",
  "key23": "2W1zxTCMLiWfJmL1P7Bm67yCL14DH5y2vFYYihWsWeezYVVLMWCKjocRM83vxLzdKEkuwoCb7rmJK92GsUG1rYUg",
  "key24": "59g34SDjJoA6qGnKfULCGi519JoqUyYYg7SrS5B9q63QQzx4msdLABX7u2xUDAABwfkxeP71YsdrCbPnyrapdRtU",
  "key25": "SB69iBiDd97P8oJ5aEFLrSNvRuMRQHZ6J2fGKyQwBLYPSP5tWSJ9rmsxycYW9Vfc8SoF7U9tCRpZjMXUwUjbx3h",
  "key26": "4YB6zeVGfdtnx7sFPAmoEzZnmKfbKxADbUFFAoKrUmFwcALM3TzRK955XgBXeyR1gkiNrVhXbzPP91yDiwKJ6dpn",
  "key27": "4fK8jKQnc7kFVSQcxzKhBFAhjCWi6jDendRFo2hCzpfUx4GaqFu7YvkLJetGBaraMT4SV7E8UU4nUoirXpTjkkcp",
  "key28": "4jHLwYsk5rXPPimUkRhqrWQDCdQCWBrVQZASapB5z5a5RZirdzKTw2GUwdEnAfk14uPEbaJW5nGUeSCpA7HhNRxt",
  "key29": "3qbzVV8mxojX458XoXpNmYZMWE5tAEQra8Nvqi5ukZ5yB4iHt5YU6ddM7RWABNjndWRCFUnqoe1iFMADWzZERyRc",
  "key30": "NqExtFGKNJmaeCqFU98PSj432EpCpN3FtbhfxWdr2rYkUBhjHF19URSG9mjUHuZdpHce8v7PByj99q6DXWpkbAv",
  "key31": "3DAnjaxM4Lfy9cVg9LC3ENBetjm6FGrrPgNGQCTBZwQLXKdhyJFUEeREDt1LpzVuDkXU9nqWzURZ6qm93HuEHKDt",
  "key32": "4kKqwjxGk5kTDdGXaYU7GapbvCUjGQ74WrvBNk1h12VZapjc7UPowMrPb7DpHf16igijUzsbVQ5c9N6H2VfuECJL",
  "key33": "2qdpTZXMEZmzhGthRNAjqxAAJLDZr22WJ7ppMDJPBx5EjfbAoWZNzQaDLY7bbuc7uWAEWfW2SMpUyC9wZqR2MZko",
  "key34": "4PiyDbZkyFqWPo9dWctJCFsyHwy7eLGnQ6sWwTrqAFG2iiidxZdoR2KoXs5dmBbWxeMjvek6ZRAvx3QNWGJcaM6h",
  "key35": "qWuLvKyHPYmmv5fVXsvyNUV9aPtyEi7NRW4PNHa5TFVT9vAC1dUm8jQcvmeRMPYBbyvmySAuz86uiAVTPAnkNVd",
  "key36": "51Vj9B6UaroJjQ9Ruemvko6b5i9qM29TNnYCRgRaut4owwLfVwefGkdrLfGZhuEbsSVKwPzwKWhd15KsCnpwJKpF",
  "key37": "4Xr8dvpjH7XApLuCXVHH89vgabP1SM3juRveVV4ayqs4NJAADMLoVLv2Sz6T6XTFvi23gicrB15LWXtYdtVjTpXk",
  "key38": "M2eyrQEZQE85PNVaLyJxHsepLSzJbR6d2uP4QaqVQDNfcDjUgWefjs5cmQGsbUYZ46FVK2E9JaM3vJ1td1jfD87",
  "key39": "3YByVshRQMBzZaPzrdy5ZyH8ZAqwTE8ULE1NBLNgrFPaUyegG9skL9VidqjVzGUd7G66VxjWwkrz6joLp1Eau8me",
  "key40": "5r7MspMYoXJxz6qPQVEXUic7AipP9ebxzvhyee8oAJ95Z3YeHUZFRBquMk8WcoTDSXabNHXJBLGKGxnuN4ELP8aW",
  "key41": "aMuRWXwiJTUZA7bja3QgoPjodrbxM3Pqd9UJfC5hZTkfd8vW3CdS1AWKn5M8PQ5ndSfwfUVfxEaTqeZXbg7frWY"
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
