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
    "5PyJHFpxJgRGD1ZAev5q6VrDNTU1Dq5deFxvm6Xx7UtRdBaD1Bv52TshLNtAAfa2dEEqEzFzE8rfbAm3VUG7Fwh1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jd6sbd8Log44vyypq8zfZ6AfJNg1WSJzGTFaKnwsJ5FG39kazPACfK1tnauSzLnh1apHpXKTufahbM5hmTBJe6q",
  "key1": "2tAH8VghbveyBkAN33SLsgtbt5iyWHGgNpV1qgNm79KdY4qkqrb9UwmytmUZYTrGAHCDYkXvYKi5x2gNcGktnJT7",
  "key2": "31xV3S3tNzYrG9R23x7vwwQUweUucDeRgwytTHkYyBrKYDN5CRFghBd7j9EPHxFM2cB7mU5fpACKbBptjzy5sgfc",
  "key3": "w8jT3fjpcYx4zzV3pKBHjHfxTYXYni9jBWEUTUxCLGfcXcR9zL1TYRoa61b667Pf3KH3e9MZxLdas1GeZMNXFWy",
  "key4": "4WBstFaqWYC2M56ZoXcY9QRXRh7iDFKaiHMs9SEZHYH9sJMfAyJFoYb3x2sx3NV3oFAUp5hK7gt97BRoQk6TJ2xP",
  "key5": "3uBArkN8WNfwmwpmTTQMc8YHTYZR1ZDX9bgkoUn95mKC63BYkcRGrLqNXyXtfdkiB5U38NJhRkTUztb3VnBi5BFG",
  "key6": "2tyi7VJUCPS1QfSAoZ49WRuieC1oqwcNH8UNend6jrjXookJy1NN5fzdHyXj61h4Uz4zWRkmWtmebHrxWzZW13ri",
  "key7": "4YgxgbEhBpEQdX6k5iWxxwSuzYUtXMc6K9TwVoiqj475VMhgot7Nqkp4yy7ifMRsUxig5gxqEgrrTeeLgXri4fEv",
  "key8": "4kYc6kiUriCMjeeVvxesDt4VNms1gYTxRfK3StcnN47nu97co2hBB7Kug1xddjZUWciwRq8nQf8PsPhihqTW58gV",
  "key9": "2MD9ppgjsSd1bfCVThA4nHhirJWovFUXvycMFVHHC1gqrDcNx9knXNVnX5RA52beQqotXXsoB3tEqKC2BaaHP4bk",
  "key10": "5jVDys4ApddevmTUgJ28vTEGG9q91zpBP2DcErMFxwGYdKeun9EajvJMtuZgLbiHaEKV169gbr6AvobNceWSmWKW",
  "key11": "5XewrTRxg6oDifdtLGZidC9ZBZPXkGhNqVoUY1B1jUzmghrp5LsdcdV1RzxRV6SiAuq6e8E9DW8EjNpQ5ijNvrBN",
  "key12": "7a9HG8ibDdgb2e3no2Rn6dw8qvMkW7GeWBVStBkVdPW9LT2joGBDiBrjMYUxrYokEVNSv4xDQm67TVdhzadS2mj",
  "key13": "2D1BzkE3r18apBANK3sNTEFP7Pk7BsYcsuQi9BEtSLeP8j5dWhCn5Nnzz7AZPapj7vF7pxqQGaCsCgSgf1mi3rDF",
  "key14": "62LQchNo6tb84JFbwc1bD3VjKPUfoUz1WohY3rnKd7KmCEADhrE9xZmczYre2NJECEsvb6WcthwQqj1jmXyJZJBo",
  "key15": "4A1DZ3ac9CGsGBHUDCd8fHvgzJYY6p7oTzukbFr2Kyb3VRWhpwGjtDQDH8ntBk7MMoTqAKUkMYgpk3ATZ6WbxjMU",
  "key16": "4XKKsWhKvBmfecUwDFfTmoPByrdiGDUN11ZtD8cdeEbz1V627mTkFctZp848TgTq42wuiEWBxDXTkTbZikyuxTDv",
  "key17": "4ptWZAFuNfVa1mrtF5fDWA5rYy8XCUNJ7ZLpCmzdfuTtU86Nk3CwA5tmeR39iTfSgxBFMD9xquYW7QuxKkfBVfCW",
  "key18": "4duRnHAw2pM86rDtVKHhziULSm8r7w4dvyrqi7bbPqyQh3Hhmrr3mKZTa1LQ1oAhWgBDzC8YFPpttDRKRvzzzNNe",
  "key19": "3msXa9VX6gHp6nZeKMv5MNuWAV3rvFjzD51jh31WroFWhiGBzhKagfySK6pJFLqbA6KvQZa2AUwc8awYa25XPeTw",
  "key20": "2s3adMqQJfdyCWzkBcGPHKRsTkYFu9Cos8BrZXQiYaAtSJxkKeQw4HnqtbwA6m8A4XWMSxPF9vFsdWeSqAxfF1gE",
  "key21": "3TeXPwg2m4xmqFyQiJQYujn79ZgTPyqvGytwXwmCeHabfatgSBuJsi77xNCcgFMASXpgfCbb1Cfe1TJ4d5Ca4Fhz",
  "key22": "5tX4z1xNcamjcQQr9eB5tpTQUGazLB6hv5wCpFBLQAviZdcm9MDvH342bngL5aNYaANqbd2ss84WYFD19xHrYzBq",
  "key23": "3NyfjFSvzqND8xAoefTXf79mFoD3LcSod6yDHK9ChpSAPU8p3T6Ds96gdKs8dV61ojC3kscgG95Tggemhz1FbuPg",
  "key24": "BVxV1epn66ZEUpnHk7iUg7sHNhgyeyYvXd5vRPVU3rP7LKYvGgJ5Aj3bPSXE69gRxWmhdco8uEwfMXbptUqTnWT",
  "key25": "2gwpiaf36E7Sj27CJLttQMYyMz2so6Fyj6M5wsKwzfCebKsbXCxFuBMsWQyVSEQC4NRv41e7wZvjHMbPkyMHU4UC",
  "key26": "2eUEbetRVu6nnqfLCmQk2fEHe4Lbc24c2FFEagEnDAWdHqTEMcXgTtUs2BHQUdXcLbDqUhFHHwFH8pYe1Lw4Nx25",
  "key27": "2cy1LkAgzDKfddwXsZw7v8mGm3ozfW5nCXXDhmJzZWDZvHQtqAwfv69Kpauh4f2dH5JusDBevCxF5J3WPAcPiNsR",
  "key28": "5DpaSUxTjU9J6N6tzWNTsm8sU8NA1hSpTx41rnBYzGCdgb4aEVqRLs4oq6vUUghtJQfewDzrHTjySq9pp4tWrbj1",
  "key29": "4xqLWbDZQbNu1WPs55GmYzsNpbHo1XUMENajq6Nq6smjoTeQwWdivnveiP4icN9ieQYKTqSxtZKGM1q44qxzm525",
  "key30": "5ZJz1yoXCkibw5Lyoz1871AiiVhZZcveQVvxFHo9zB4NshfbD6BPNRpFzjmYh6tzGMq3736FAHegfyYrRz5EQRm8",
  "key31": "2PnWg8ubnZ5ZH6RKBSRjhNCNjf4mb4aXQf8r3SMWXfigFJD2DXSJH2LPWYhBApmgoqrVX3w9WcSxYQbJCvCEbN8X",
  "key32": "5QuWi36nbgWWhR8pdLT9GGY6f7zn4WH5qhKBvhaZo54Ce7RRfD6dnvHKmWzp7R17rNMnH2Gt9sKc4S291SsVXkod",
  "key33": "2BU2EuyWvZQz5nXbdMWhnxNATQeCaProbAkqD6a9r3tHJJGXuRG2a4YXYV5xqx9xFQ1Jbe8WUQMR4J6pKkKKqChc",
  "key34": "3mwp1Uzg3GAU8iWsk8LutZ9mmt4VY1Hr2vVbSEP8itsHGXp5s4dRMoQGCGsTzxKTCDJ5wJLJYVNGRtihYe3n5sBq",
  "key35": "3GUt9WR6LeeW4cssCHcrJL6YpamvPNi7WRpaMTAKj75HwZ8HaUtBNfDGTQGxCJyQXZDM5bwWMnsicDfQfpeDgdpq",
  "key36": "2wxx2xFgQDrP2nReSutzN3itCiLQi9XokZ2fnH73vrNnxnvhTYwEhYYvRkaiGryf4WxHZmyWzF7E4rYJjYr2m4uC",
  "key37": "5yy31xbTbk2uStziZFsEuhWyrYCGxkS8PxPQjkyVToNy6yFGcE8WoahrCN625Xmku3EJWm3hpVytSvKuoLfj5Ljb",
  "key38": "nruPy1dMVE9PoZb6F5htZ3f3VNe41LFXocGBzaK5dvGxxjL4KgVTqpGw7SDTjaz4uE9TsYV3Hj7KJVVHuzYhQQu",
  "key39": "fhpz7aSvTC3x8e4bLQ6zDxzgoC1nqBdRNRjCPfneGCruso27ZP14ZMrqeeyUFZs7ZkQ3xPgZJreBNH1C1pAJNyR",
  "key40": "Z197f5ZPXNnZRzZz8gUUkTp2dKEKyuyhzWQpnUG2V5aWejwansPeDyUZKtNdSaTfsNaZjZwJqcNYFqibXRnbZeC",
  "key41": "5Q4hUDWubdcsd9wykyMVyYhDsuLRAX4HixAcHcDPpbfvLnEun77xp6wwNGA3DPfV8UiNwpzfKwJoiN4Bg46tv5ts",
  "key42": "4e4oPUUfDQgbMy61F88N18WNUwhGWPuPU2uYjGU7VD4C8WRAQ4cQrQFe3DZrSUsy1sBPwUtLMSKB5q4mL5PfwAFH",
  "key43": "635SXf68DGKeAvB96gZpqhJuFiupWFz44HuzoJNaqn44EbwrkgpMBCDPL7s6fsWRDrsxPUmctpkcwJefHqD8gdge",
  "key44": "2ruf8EdbRJH9RkjtYm3K9k4FvTDRDrUFCPgTu5AGxYeFaMcUUj8iPsHeu84V2V316BV1uEvLm7ZQnzD6PAC28FW9",
  "key45": "4E3w9aoje4fKGuVJs7yQ9J5eWqoLu1QdWRRLkUqecBq5JAozF8aCD3ButUx7EYMvgaYSSYda6pzFCFiuKD9ph2yS",
  "key46": "2V26YCEX81K1MiRFVApzAcEKWZ9WfvFcUpX1i4K42EFsv2ikxC4sfZUjUYRUhDWZomEuY3T2rK7TBKDD3pETYNL5",
  "key47": "XWqmZDqbt3AcbVe42RcpqW9Sf3kQZfDeV4BcauvKFAEyAJqQLmtRzDxcRQf6BJTkiEizdngpKxCTPjn1VATb8iy",
  "key48": "32qqmSRePyL5NKwP5p9isJr8v7h6EZd7zT2TULsDfSHUQoSSyA1FhVcTqaXHnx8uLun7wvnXhgvMjD2KuhtxxHpS",
  "key49": "2XuuGP9fbpdpMGCZMUWxwAPcedyPQYpZM5649P4cTKozBUyg6Jn2rHC45x3jRbBWmd1Y1xFj9g6YYfiYefwNbxfn"
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
