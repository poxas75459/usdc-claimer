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
    "5Y9LLLDHrxyJki69QhWBexkTv5KGe4RPkiHTQyTQ7CwFydiuKQC7CDxyoMvjWVyaYb1LjK5MKm78Z39UwwEDT8r7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "482s81VKMypr8SdVz8qgLQjtstXngveUhYz5XRMakBzETY1NaFWP57mUrRSvSmW92AxpRLr6HUZGBLCX5STYAPJw",
  "key1": "idt5NRvwbt1Fkrv4ox2gJXwjdcMbWBBpa4k2qUBNSYdTirpvKgyXeRDKJA8dXuQiQktizYY5cH3Cj2WErpZftpB",
  "key2": "42g1ddnrfiY3NCwH7LcY9PBriB8QG6kwfEaSDU9DBeExBEKJB7DfUDCGWvMxpFtpkjHGVP1b4YeamHjUoM8oisSU",
  "key3": "4QU1ikf1DpbKUgtxHasm7pqTrGcfrW3BWsUcqvfwn74n1VbUyJiwmRZSscaJ5TY8XMFUar1UAwFrsVwNezWZDH6Q",
  "key4": "3TY9SkB82MFGhAodJtngTK4HVArs1RAgw59PqZSHp7KCJHBnucaAXPwJm7qUEr93RTfETfEJXHKWYNPzs76b8dTs",
  "key5": "5FynwMc46B2MK1yYzYKwjq5rFjWTL3yGfuDBtodEwUd9svXwx2neTf99Lu1rT3fgvRpWxig42bG6iVt27KcspYak",
  "key6": "2aaLxmrLnbr12kwNDqFXB6cnwdmvukBhSqtqQUXpZaoHssbffYKDfpUaLpZeYoMYh71KHsa5S4bgRrNVBrqvDjis",
  "key7": "4AATMrino1EQiwfQmGfH8gMD94im2HPpyRPmqpQAyKF6JuPkRFTM9U1QcCekGc45x4Q4Vtk3UMwYtW2D8hYQ21bx",
  "key8": "bXxxYM7TtyncuExMKYyeeFedYPUqwK5nA15YCduAq1AyWXnzq5iijgfHmNgsu8xqRj8WpCQwzB8pA9hdSMEXPmc",
  "key9": "5mLuqKp6M5DUEvDMkHReGsY41fthdBc8xZyciQ6dbCS1DhTe2U6q1DQgMNSEDzRWDCyVnPqToQma19SZFrg3ceJK",
  "key10": "G6UiweeaFZwipNNjJaWFD5ZvqTWQFthHCy3vAX6uRcuyp3fWQVWn6n8DWETu28WJuVE7jfxeeNgKuuiibEiRz1o",
  "key11": "4PVhBRkuQyKC2Zr5FEhiJcGANaU8hTNCXWHaxWnBnwv6sZgLEM2X2CTa4zyxfnEEkQLadtCdhBRHqWoUpNzE6K5U",
  "key12": "4U3xuB15T4C2zosqALKaKKq8HN5R1Bk1EQnST5QXFwFkYumvw7qFfsVAXnTexBTcxPQpHH3SbxJsVFoeqWQx6zNZ",
  "key13": "3B1BYG51wacA3HniJmddZUJvAezspPUX3cU8hcxuNcpts8N1QB5Ddnij8NLYpAPkNLg5tJYWnUtJ89Mdrv3CgLw6",
  "key14": "2iGtSL83LXadv225ynkmG5aUcLi9MvLVLTqnH2uY7k3pYqTsdq7yLUqXwwpTDg797EXccL5fUPgS4kcmzEkduXtX",
  "key15": "3LF4gbsoPXW9qLQBPzBPQaE2uEW49EDNJn743pVSFpbrbEPfXychEfEgHY73L7dW6qHjXSDdTsx4CPFATdmX2AyQ",
  "key16": "4rSDATdc3CesApRDMFmm5wsLwonchZ1pftey19eq9Uq42YQN8NNvGtYgYxM5Stk8HMrLUp72U7tU9idXiCULuTmT",
  "key17": "4MFuzAwN72tQiUhAzf1As4uDCJJfm122Pu5qMbZ8DdL9Q4HXgfudXCjGDLSqLgH2nsuM4QukecLvnQsF5qYyJe3b",
  "key18": "egs3wdqWg5VZ81bMMqDRqNPVpecKdGetfb23sxY1Hz2o8bgFMY8sQQxTaunpRSorYMkP9HsABEqeuWw8fuoJ7ZU",
  "key19": "5y2nRdU6MujSdUFMm5n1BQrQtDrPhR64KMYooGepQqswTGTsBh2RdEdqmWCaoDzDvbRa1PZRxsG9WCwDk1GwzGXJ",
  "key20": "2QXyCHX5V9SFD86x7Gv4Kr3kL4fCsNRY5WdtXSWKi8HEyQsZcT8Lvua3XqEe9RxnNnLM6h51wpvGBCsGhoD1QW8h",
  "key21": "2akvLzsdSLVn7g14KzFg5EQr9Pw6kMfSSwnpUiHCoyQQoSYtfzYHEV9jxMu6XYTPpvX5XCPnpkk9hr4iUFYqz18x",
  "key22": "3QcPEMLnj1hfT2d5VrQ85drSgBWEGawuFiMstVwUgazeZMtMiqfgwhcJFaoGHKijAB2rpnWFHBgQjHLDso4R5kjW",
  "key23": "3sbzxJYSZWLWwDESyuqt7aB5FUKsBuxE97Ff4BvEUDSisLotXyPofwcs7adV8AMvVwQs4MKjfq3Ff3sjQVjytEb8",
  "key24": "4ogULqTRWczu1Tf8QS85kHMyviaCUTogVveDESJuZqadj5cQt9PKxqVrJ5bRUrDS1DMyZqMXm4w6UPKUx16NxyjR",
  "key25": "3vWFAyNhErgicnEJ9x53N1ZTra3HtdohnxuzvbBr9ifjJAAPXWGKThgKsAG3foF5KRhbdRarZJJDcNf4dYqyu2Cd",
  "key26": "4YUi4zgL21GTA1ChwPPY6fLmmgHPPY2QwNjGH5xcQZg8BoULti9ffrWgFPi6tyGHqDehBzdSYGs99XPpskLBbakJ",
  "key27": "3RufaTiPZK6BA6iD5LtfpxoKjawgG9yp8gR5whczfdZEYjE2H2uWRcpk3rRemjUZcBYeux6SPb6cLFYvG1Vt8gif",
  "key28": "2MgGk8nUkqqNMGg8uyBYokyA1FoqUrJ8k1CZnmhqFbKdwDKB57d6Bwk69hD4tLfc2VgvRVzhpt2KJCPMGa2W2jJM",
  "key29": "4EbnJV5ju4SSTi9uQf3KeWFs93BToxsxAQNouNUyjGKFH4CuR6aagisujxoaBn9Vsvy62LamiNFmNTQ4PCGvpe6e",
  "key30": "3Gop5qEWRf5dFwH1YUNsaQxtHFCe9EUzfU5zHR8sgT8n8Ztp9zjcoapBcA5vDZh7fudzZwo1iapvn8c6j1dxbuEt",
  "key31": "4Qi8B13sKvVKdqmuctWKrChFf2uCfAxK92unGbDSaxSrqHMr3sVHPiYeuSLb9qLEmLmCBQ4p3h2atLGWxerzRPz",
  "key32": "YNsEAMzqwZhyHHFcWBsUZc4H5vgNjYdrrCSchUWK3EpNMFcEhPTs66yXsPJZSnDE3C63AVESQJB2JaTxb5ev2XH",
  "key33": "23k7L781g3vmrVzevnQz2Puf6aTidG4nkEMDbhZrkhYXjVtrdhMhNofRyjAqCpN8vWuxvwKykJu2GAdGPn5UJvbp",
  "key34": "65HM2Ch6Z4fPaXqgcABriUsjgqqWAMkERzWzZd9rEjWEq69wMx39KXYjPq2R92sNcfKnV7vHejKT1j1qJre6t6qT",
  "key35": "5JMsEdQtcbKsJzw5CFoNikJFBR3oMp4wzwFvaRqvu4WfVQ6G3KC5TmKKDteGZG2CPGiv66jcX472LcWRYQvDTMb1",
  "key36": "3aFy9cXCCxynjewUL7N3VHQ1T8RpAZ1kQ2rSwQi4Ly5B6BMrDhAof9jj6tfvMpDqJygMFB28BGVmRHqvRgr2PVka",
  "key37": "2A6rguN48vU1TV9WR5mQAJUfYV4Gcjbgas7mhpansDysWDwdn3RkdMaHGY5MDnzjmLL1gmEHWBW5KAH68PJ1i19K",
  "key38": "22hFj75ZaLcSCRXe5kbCPAheaHmJ43vUH2xt6xccb8SKZT1udk4epC7fYgQJN6uzApaa6QcyH2MH2RSPjwWRrXnt"
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
