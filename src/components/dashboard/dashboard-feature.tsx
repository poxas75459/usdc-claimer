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
    "4ghTe1vQ6qxPHBridLUkq5ehWGAgnGBjLWcGJurMs7P3WtuLQtTLDvAbEumucj6HrYToweTsKe4XajH96yLSSs6n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "484w7BFXHaGs11EmaVEwGFfZ53fuVjD1H8tAFUMGgEQahXBJwCwM4PQXbfnucZyBta5Y226c68NPQsXVdJYBktUN",
  "key1": "oh1grVme94xkdZCVWdo5rfTLxcRy1EMMqE4BTpcA7b2LiNkwUdtctECP1TQsGu2PRFgpNbEpkBVKHA7SvsvU5Uv",
  "key2": "2BcqvjWCBYebnueKVDyE5u4Z9TpKwB71B6m24ei6fAtPzUiNFdq8vDcJ8JGsrVJ2EBBXow8GV18s6oi2FNGCmrmC",
  "key3": "7823Gyk7Znrny53QGDGZ2R7P1uD9HNiB9rmSfS6kzALw7rDyBtkXGLCcmE5XzyLNjsGezJnzUELrHj8xRKXvbma",
  "key4": "3QVTboeq77LguaTPCVJsEWka4AaBmWaxoZfwiqoddheSX7MZiNXvDYRhTBPKQMnv2kjVj8KrzBigvnMYk7cnquTq",
  "key5": "3CTLcEbeeT91yKTuhAWzFaEjHRqjh3Z2t1bgAk1SZHt2XS7rRhZ9bZtvHYJR2F539BExgfTtockzpVYjYSWYgCdE",
  "key6": "tJos4xGb3ZXH5vvP6LCxWbUn7dZq6Vy95VZGuRRkYhJZcJnHCWiWDiLwPJ9M8waijvwLLFZV2e9Xt6BqD4fqW3k",
  "key7": "2CjbCkURGhwHeThjQ2KaMHPwPRMdHSTtZsvPjLzbAukPQ6iFmPc62UvvArerYkG4Jb1xsU4gnyCDH8ja1XYG3pud",
  "key8": "5ZSTuzVyCJpfHmiQu1oBBENxmvn79oKpqUBMkiBQDgeFA3iXy8CBFrjXAt6ARAx9sUoNSDKmYN6Pmx6D7DZshYsY",
  "key9": "4bt7TMP4o6S3Qh7TknRQXDVgeyDCJWpyRgNF3sGJAnEqesLt57paFDSrc2ag8bS4kTH4BVPaKtJmEbxKEFxkGwNR",
  "key10": "4rQptuBYQJhTQurjETYezRfggY9aeBfxxCh3eezSirFpJ71kUhXx6vtjBbu7nmxPyFuvEW8k1EKgEbW5coPFjujb",
  "key11": "3kjR6twxwpNYJVAbZGCW2hPnNjG3j8oDvFsAqwcn4zGjHmD4b5k2S38mFxyFdPesPNfbGp4PAr3mw5R1WC6GBvyK",
  "key12": "5asfcoxVfasxA6yeSJUXLLk1Wyvwhj6Uve89D49maSbuWxb9PH7QGM7B9A86vmrauwsCiNstzEe3xTMW2ZjXyETp",
  "key13": "3G4qHVt1AL68qivkRuR7YwMWpTdhmm65ZMMRkRofThp9gsnpLDaNTbYt3qi4ESRroN9rezxDSrfgpeQzshpdR7Zm",
  "key14": "29ntGRCvaUeqQjtyeFqGyfA711ubLNMVHHghbGDwG8GccxtLTHo4bszFs3HrnPJywgYbi9hfAziFnLhckPpp6b8h",
  "key15": "5KSaSy5xkBv8r8z9nQa8dJVXrK2Ts9sCKTCzYjw1RCBNCpiTpsFK3QEWMrud9qpFVHttjcjYAQ6kNn29HsvyVVxH",
  "key16": "384cutu4bUE5RyJLKpJoJMX28SUvBi3uY89JxQUW3LKzZ1gHRqfT78KnUH1W8o9NKLbqDWL4rLHcspLwR8GM9342",
  "key17": "2Qt3ppPczpBXh6JLoFT7XnU2QhdUisnkoKFS1zrgm3fFY5dwYu2KEEBTzeC2tcP7aXjc1ndpFEKwb1yyC98PiHFB",
  "key18": "4oqykahv2QjDzK6f7JrRVbV4nmbrXmb8UASfUg2eSw1w55mduryiMQsSTx1xMb2EkSgiyBmYpZwTbdfpq6BADe11",
  "key19": "4v6hHkRC7FFVKgA4xiRqo3kWmz7LYQ7jAXJjiwNsYz4GrmedgEit9AMX9cYMsaM6mmBeT46HFKvfM5SXvDufBcst",
  "key20": "NyXGqKwYsGLV9hKXUuTLzyyxa6u9LkqoeKAf6CPhfBcAwZ4q7N7VRUtC8QamM5M6uiNkjBcJKA71aLmaxddYTdL",
  "key21": "4mmkk9bcCmq1gRhQf3RHNW3iQU5xY95aFaQQcE9MeYvdKjoXyWLVfX2VcWPKPtE4csz9BiE8oTZzYF9GVhsRdu8z",
  "key22": "4U4EWsJubEQaT71zrJ3GicHexi49MHsXbAww5Hv9gf3MtXkUB2dNucUuYd5ZwXWhZBazPXT2QnssdQTaasR8B9Xr",
  "key23": "4h3wn8SoUfhEWdvHqi4BjD6bVhBsWbmvnCJuwWp886SRW9LaQLfqKMDWSjp3fihTYuCCFszTnrPMmRm4izJkwHV4",
  "key24": "HihSSQgp78dPqKW35rMRRx2gvGpdDW7d9vQXwFdgNcMnbGH2bLydCBYRfaPwWrexHWA7cNCsYjpuWKh1SmBV26c",
  "key25": "2eWMemwrFN1moyTXTFB2eaDwLPdavuR6mTFcHirneHkXrpMtgg7GFXp6ZFk7HmzAsPUtoUhBnrDUaqcGsFciHNNu",
  "key26": "5VxPsxFKeFmVUkn9iY6e9vowXNYmnYuyzBbDcfvheqH3nrY9QaovtHSnKNDmjx865yu8HaY1vZamfZog77UWbDEk",
  "key27": "31FXkzfQoeTQ3VkguzA5DdksJ5DQohDQutxaV9p31q2zbnL3pcPstCQPDPhvijN3xWoJhBrvWvj65nidwVEhnfVV",
  "key28": "3CeMLBuxKXn4REPpbYWrX4fK1VGiTpN4Dy32wjFnT3Dq1Y13ibWX2V9PKkZ4AZrXRoJbpJxGpE6TnsfzKrst2T7K",
  "key29": "4vFqSD3vfAvnNHzHzUdqYPEC5aaMzUMPqxccA5RqsjEvMAUPQgdJRsLBshPH388mmn1k8ztqquyZcLeTpGFR6M9J",
  "key30": "4x3qyxrFN6Q4aewBJ2ZRAsRhy9Sg9HCvjtappgSZc2XYkb12HQh91cuaEt4cdM1nNE66M6zDqGX5inbqVC7VRb7S",
  "key31": "5VNUdE1fCbPgph8aNzYNGTYUp2UCGVKPwkKdSzEErLVyNrnCG8bubgdYJHo6DXwHW1bFutxpWfPJX8hZKkcnJdxn",
  "key32": "3JBtE5DkZoAzp2ZoePv4B7hiGuK5enUsadyAnyZJQBaC96LLvZmu52DCjmiztHHQoQWZdhpBjPrXPmuJ5zBG5wgL",
  "key33": "5mrXyfa8jyxXrs2QMWW174HjDE8WPHLJM25VupVUHnvQkreZNYdsxnaPVXb6PrHjbEUWhHYtyYx4wbARBuuYTj3J",
  "key34": "3gMzo7UC3AGQ9rS4jdP8qAtdkwbywsv8r5uGfsnJEZe98XgB8XAHusmwnR1UcM1SwThn1fDjzDCks3kdMoWtMUCc",
  "key35": "5Nui7nm2ZreuYPvRp7fnosqSUECwPHZMb9dKRyvULVEDJpMiSUjfztKQYBnvRGuKLsFWKWSyPEhCQRj2Swimqr69",
  "key36": "3AeMfweVPLkay8bE2oV3YL2HJGfC5DU3gVvtVsKNBtdq9V63ascK7vJUMpXxiMbn4FJYyk9G5F7F8joEwRLtknvX",
  "key37": "42NMP4ojmhn7BSPTXiBxpFAFzM9VRsnk2wBoj1ZHLZn7ghSVsJkh64K2541VGfppi5ExpEFtvRJfgABeYriKQcZ9",
  "key38": "3JrqTo9fxxpoWiCkhTGov1Ragdub78URPHUyHCS97E77gTdsafUjvUXbwJ4SduLsrSRcuede8dssJzWVo4rkP7bc"
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
