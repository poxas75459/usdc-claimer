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
    "63FYCiTK84xAHctLMbHtfUkf1GiiHC2VrkdaFFabs8nuSTCGGwda9jXUQkPWz4bqnca41LK6MG7wxBnwLdRXtDuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qJKonPdUwqNKdyEAsN1UudapWFYpfonRpawQP88sW174wUeCZP5afvr5Qqjavs4tkQ6kqN54cNrUiEn1WZu9ycz",
  "key1": "2eQJjGV6mstbWEg8jJppYjwQwvZ2yYLZDvkDe912GMg1rTe9KWF82wUbkpDddVcqi3aWn1XFvVXUn3k8hZVXyi8W",
  "key2": "egyfGphqjKmhqk9KYBWdiu82REj1DgpxG8eYeMSAMp78sVwRtqHCscV9DofejaaS8LX1Teio8z3QKDYyGs1HjHk",
  "key3": "3cEuFATfDi2QGfY16BMUMoTmLYCxJiip2ZGqgYanFTV89TiHjZ49tBYmEVDK1cjui2B2e3gt2xfstN9xzrBXkZLT",
  "key4": "5bCatSfumGQ7PFk1gJ1VkH5GeGtS9fg1GB91zho6NK81diSSHAboQbjcskvfGyykGWQHkatJ5TYnjauKdc9j9wjW",
  "key5": "5PLpuQWFxC628TA7AUTvTqktAY1Q1zqimjGMGE6cEWCrDWNyiTomDFgu8cAYvS8eZVUh5rEQyP4bXBbnCsSxQdKy",
  "key6": "2QYxWeDHS41p1DFQUs23qMu9HsfAxn4z1EhQLyMMihZw9axyB1fobMd7xdTeJ2BvSJ8BetkqdaDPsxGRf5Laq4kE",
  "key7": "32tGrvgnoqA3C66YVjnZNq8NZCThrmro688hk8Yp1D3x9NtFnCMRibaake9dbDJJjoqtXaca7May4GyeY3fz5FWb",
  "key8": "97Ru3q4ZMrepssauJhZN31naaiqCeh5Z12hipDru3Fq8eEy7hUNP6pPsyHRdFJe3rR9U5rGW6b6H3X8CGGaYVev",
  "key9": "2uq2NmVn3faXAgnkQfYyHN31UfAUgPTCodSd16DQc5rxepqCmtFy4kYwQVQBfadD1h8EhJLFuCdUsxEHS8zJWUmh",
  "key10": "5NZ7YnkozzHKWLNfDKat6t6jyEDZVPTigV6gZ1KofVG9Fai2KuG69AW7pAqPBw9N7ScYiYtogTM7o1jqBUT88WT8",
  "key11": "2gBqvip231QCukshXzX14HGYLvB2JK5fucRwEsJn5vcCArCfJRsfZR38KX6a5oBTh3mropy8Sckejahht8Q6egDD",
  "key12": "4f6Ue1kRCZNDsAi4n63pfjzEafZh33VfMGjBiB4VmYc6xMq9EEQZ71MXuXjc3VrdwKKtmW97PWStj6WhCVvLfoPc",
  "key13": "5dnRDxhzi9qhDuFYXupeoZWVNAiUtAQ6aARJv8kTQubkXjCMv1CCxDStGnzjDc5uzhBPBf69FpHFVfE4gARLxdjk",
  "key14": "rTb5RNBXHpqYS7MamGzVcQe9Bot6q38oTfmSUuroP174REStZVLoJeioQabEvRNHhkid7V3PMncfjbRLH6cHeAJ",
  "key15": "3dgy1fSwa1JG9ys9ZJWCoWEfWaJ1bVsqANEj7eVbJF1dtbbLWRYtCj9GKPRwoiNijiJnvkbtcB7BEqYdQaZB1FJY",
  "key16": "4M1cMN8emWQMmr1jNVEiNsUyx4P6FiExPLXnrjusr8kXeY121cJwtEKZWt3QKd6CxQASiwWGj3ye9Wx9YjrdoM5x",
  "key17": "4ChGGVtDXhy8kFGP6aQtdomUvGW6pxgnK2SiaE5rJmvMAunwcNuFJZUPk2bTsNKYAU11ogtoMd2aEjDuzXf4uiZ7",
  "key18": "PsqAriGxprE4dNLEnsLteLpcS2QUEGLUFnj58MyDHTDUrok6s2Bkz3JfvXpqFYWV3xNHyH1HR5axxVwncKnGuTs",
  "key19": "3JHvkbSSQBKGZo77VCWmMfuzL7xNaUE5dj5qhpHGwoKm89qarEUr57VeoXLo8J97FqowLrWaLVHCaeyyRXFCmAaz",
  "key20": "7pZivD46usE9r6GdPsu1PmY9SSSptxDqikXLrpmhfjng7jmahdst84WnBNioDXcBbr7nD8BmTeufc1BBe9r6Rys",
  "key21": "izKuSqDGgxtYomYXcB46i3C2GTSLe53gdEBSJjC3znx1rcwTySBXyjApimXVzffkE4wqi4n2tSqtBW1b2sX1Tdk",
  "key22": "RTDTFNZqdXNhnqAqVC2eXXfDmSRqpAVyPHeTehUCWVbWGByTuAzafjvWYHBrbs9teT22GJFub77uA3KJc55vGDn",
  "key23": "5g4tLw43mQHaaBGnNSHntAVNAmSVEefuYEdmrE8c2GQf9wSkUVtDVVP3vPiM3CnGmzmVKDRu84xLKVsr7GF46NWS",
  "key24": "5Dt4bH3E4cRBPLHkZ7SX1Vhro9NfnK4K3aFU6xBZTuAXMFutKpJFoD83WhR5ce3dPLSMAB6zFdZKXG5uLW24KbQ4",
  "key25": "Cr2QtxnCzN9wm2qeAS884CfjCFyZ3CTMocu9pwPKCzY93L8Misiaa1Aw8EirDVggTX6zJio1P1VdcZTv5Ca1khy",
  "key26": "XP2X8s8VbjqwJw1atJXcLPeikkF5YFKsNjLoeqq4K247mbk4KyNporiuQKxrdVMt8PvHpMgQBhuPyWjAHmPaHWC",
  "key27": "4ZZnbwxbJLgvHFMxGwpNCzEF7smJE8aVTLDTHQP1zqQZQu5FRS4MxfJehNz4GYCNvzntvgGx3rg8ksn8sirV7yki",
  "key28": "3EdgAZJ9577a3KeY6ZTtpyqEaczj5X87fLkP3Rpac8Lo99SPvvyiDVW57vprVoMHnbe4sDhVZQZy5h4uQSuPynrF",
  "key29": "4diZwM2w7boL52mQpE2Zm2vZ6oDPsnH8Zyw4jjPRvw4svnHpdGY3hoeeazhogqMsYMHckkMnGUCYpiQcKam1UPj1",
  "key30": "38iPjf8ewFgcdcEy1TMNZQZT5vkNaCzUU3rFTcuiPDQR8p8TvSzr6edsPGVLTCMd4etbkGMYnzzn2kY4o3fA6wzk",
  "key31": "5WF77s6Ev6kNgq5SFfFtNqakd2x5fRyMLsS3XwmsFJs9Rff7VSTnWA5xETrwcALXA2Nh9fgwVEagvvHK8VkV1wra",
  "key32": "572sBqVbxaid4LYTojp8X8QPTx8kdCoWSyNaTgr7QabZRddpor1kPn3ndvjb1sZQ3XMTiHjXQyHLiNPK3D99YGA7"
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
