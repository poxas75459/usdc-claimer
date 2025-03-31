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
    "61XLYkUQkW8EBu9Y5e9hKUbJCk8PBwhGTWfmQekUAPufQzg5pHK9LLjnE2f2RsTr1fD2voCUXPwq9qNG2JegSeEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "381R6XctN5wAEWoQ8D1hAxMw6HiywPXuNfC7RFipxWpkrRkZ5oT2socXboqSayWR9qAbhjKwEg8XGuYwtyYuxHWe",
  "key1": "3ESpwdhRUEo1o8TjEty2FLHKyXDCpkQCnRHjNMsLbctBt83ynQDL8Vbk3uzKyhyXiB8fNj6yjE7m2ur9siD5TX3C",
  "key2": "4HtZtEt2e6ZsbjyB6Qv8yiJAcMDZsb39jig7hJLYFwVjEbvfzFibZ4Bn5eJi2Yq155hnQ7NxCDnSn9oAJ1581cio",
  "key3": "2pRqvixzFvmiJXtzsHRZ97RqKzA3cELRBgV4VgVp3CnTZseT5sBp9AXvvPmivmLiHSEUvtnjSiVv4ScVr66T4VZT",
  "key4": "66gffnVj1CY9KXPdTb9DWaVwzXy9yxknNYQEUemoTgpKt5CHiRcENYf8w8Uz3BSJGYCLp3PWV5nTvopMH8mzLiWZ",
  "key5": "3MAgUybPePVPAUfBHcYivRB93ZW1u6ZASixAzwfeDWNjQaWu1diCpR6QcRrRHjjesVcWhKrVJYV2SvwitPJJmWdt",
  "key6": "3A74XDNwE4eREyTzQmGoCFooFGHfAYWpZKQwJqiBriyMZ8Y9MncCLxR1XAwHMfpb6QFFjxXCSzNiVskn3mn6TYHC",
  "key7": "376twyJpxwbAyNfYpjpAccFxdrUzvjBV71ZjweBsCcAPoV5deF2fUovDSSanzP3JPRCV4pij6xxo3rFWewCi8B9E",
  "key8": "5kZq18sE4wH3rmw22hCv2tJAYQ3gvZjaC55Q6MfK6qSVL9XgLiNsAjBioE522bg9C9ZF4bYLxQk9wD7et93EJ1pR",
  "key9": "2GhaGdo6noGAwFJDGtwpFGuw1SrcmtwPEBtnxMe4on7VyhJnh1X9BBJ1m7g4HuSzxB5Bn3rGmf19kBD1iJTsLztA",
  "key10": "3XoNiJ1aJbs3PcUTJXeuMsHMJvsbU8Kh99qDdps6GgNsG9UKuJVkeoQFhryUwbWWBfve62GefLn12Qb8kg7CSRHv",
  "key11": "4dJ3QEXAGsc7PP4RRyqBVZTkzHbZgaMNcFfSv62CmgRgPvWgc13k8KFAL7mSygpmTsSDGJb8GWqFg627qfumAbmZ",
  "key12": "4z1yvWHa387oB2uuxLQVnDvmFiqSZN5eTKckAFjfxNNTwY4oS7CaeaSsbZHh81U2ptdeEe32pZK9Ys4TiZtHfMUR",
  "key13": "4srUfKUBnGAbW4kd5sa7ALKCB5TASW7wdFAVXehciiY6pY7ASHfdfRnKbKv7EGJCGofBbuAhh1z54z15h8vUr3BK",
  "key14": "5XZZF9e7GxjHceu3DzySbuFTPnJnTX2i6CjDtUYRdkWZWtWw4ehabdgDjjAHtPFQw2iV8edopZCEE6r9NHsbXS3V",
  "key15": "56md4eQRyXBrQyUohNcbmcFJRwtLVuPgUmwvq4hMfrDagA9pNKvGE9dEiGwaKDau8DBe2ScAxybBJ73rB37ZZJHb",
  "key16": "9tMg9NSdoU6s3HDiyY9WBZuY5Eb1XRcbTagg77GUN1zD7NWWfcqqdnio3YNi5xY5exWw8jWkQTQCtN4YZPfMmi6",
  "key17": "2QcjFX1gLAgp2tMRe9G7P7wjuJP9Zv1rP9nbZnHmNgD9vjH17yDnaJpv8HnvY9yR2k9hyBy7Wq6kwdWcbkwTKHj1",
  "key18": "2QEMuippHrK5CLmUZNMACAn2VfsyXKreBajdC3yRuTJ8xbKSK6uhV1y5VsBTCAw6nq5ot7URT17JVUi8rqSo9skM",
  "key19": "s8k1DEytVMVNcpqak7UoREPaqX6PckWMWX6mHWMe9fzbv94BokNXN6DktDDBQMDaAovC8Ud5PNNAd4XXB8i8EWq",
  "key20": "5CiCRrE3aLgGrm1JW3nvPkPSidJgReJZmWY1DHeANt1BtSJocpToDSb949yCue8kxjvbEtRfgs4sjGVgHxtQJpi3",
  "key21": "cHLe6dDwqw8wiG2bQsAXQhJuRK7j6y3jtpgtn1AKFzR5YV9TQKNu7525AeKWcnhoqJmoqf3XmSVZQVz1G9sgRKs",
  "key22": "64SFfc7ZaLTgDEAjnE4thDQiJxNvmacmk2p2Tz2WNnRLaoJf5fA8RjQGvf2u4dtjgwXCCPgfWJtnYVEqLLMwL18A",
  "key23": "4LkCVj8sLvGaWYPsfvZwKkD8Jv9TdvF1YXWVvTcPsTVVZHGFTwxnYfrpRUyhmENj68LN6HMD4XvzLgWqTeAcSfaF",
  "key24": "3Rvnj89iUPZjCTK2c3ELaZwSUTEqBX4UDdiXnteGczmevDJtAXokXUqg1TFYBnN6dTTisDGcCWpirAWvjQF4gUUv"
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
