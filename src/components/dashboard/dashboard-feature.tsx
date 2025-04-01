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
    "5Q5yLFAwp5chRvhqDZdyrfJh9iSZyLfefozDDL8zsDWfjp2xix8Dg9mSyiyHo8PS5tpmzeChNoXyDK7D93j7cD9n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UgCCiGrNf8XLB1gW9q4eDX7cm6gX7s3cWtCLjsBMhiELHDDJ8HMh65sSwjJ4iNSPQ7HwCqBhCV6QEiQpzxBd8EH",
  "key1": "5NkRWbqUohcny1YrkLavcyj8V1GrdtWFkAeGuKLfz9fzucXv35U3YVS6vMcGMFJMA6tMAHTYxoCiADY24DQtzpvJ",
  "key2": "P9y4Dskd91BrbW7g8eGSks1QSM3nciERgC2g8XLMhS8xKqZgoqXf2gKeEXoa74YVYDQ5LqeACsVmSoRW7oFGTiA",
  "key3": "8FtwrUYXRp3gQtzrDdejELWBXFymJcuK5HTeUM7RTs3VHtDE3fMAwx6Xso19UjHAez9bgFaxgNEBd5Xvo7MXNFB",
  "key4": "3BVaBmGUErGprLThLCpxFVaj8h8ta54ovJFQewj3uyyXogB8nubN6ou9wuM4tsqqt8BJPFPkMELKo9t9rVRcp5i5",
  "key5": "5EaQktGugQUtjz1kgVty9PbuSp4FprxHkn4gzsUNbiKTPFrnZRjEWmEcje6h3jK9DGbw1g9JzYSqS8vtrXEg83ab",
  "key6": "5PEjGYoRwwapL19sFjgXs4gbWtQ4Dks5nTrJzJrXMaZQ91WhV4ZQ1JAeX28kym9y94vHXnTr2s1qksWg7FRHjoYq",
  "key7": "2RnPcV5eGRYP1FibYbATMXbXu7uAR3KiaK5Wn1nsUkhrWNsQizs7advviwSV76t4pf4cHsjBjbuCUdrj8PgrbnRA",
  "key8": "2QWHAwrwEKbqKtp7J6oxHwCMhHcVfdvAymozC3PY5vephS2NsD1gP3swmg1G57x5qrPZKYwVXG1AjncHCyHDLqPc",
  "key9": "3dnNz6Hdbope8yfS2YZoHC6Asf9wm8eeyBWtC8xTdHUDihzG7tkH9aRy3EvA5Htdzvs3nS6jhfsRCNzT6Ae5gtjK",
  "key10": "1wFKBDHWqJmrA7jhYmBSZa7i2P89hbxncS7aPRgosg5a4mxvm3yE34N6uMpXtRcbdKhWmx1VrRMeKVwU8CkJWMq",
  "key11": "3bhbA9Ds227ohaSPz185qeC3tAYvCQocGzxLdt9E8e1hs9Ru6RRfR12UJTdHa9gjSx2A7mngCCxuZkj4no8NBeg8",
  "key12": "shzegdYe3gE2iuZboHedsMmm8MbyMJN4qCVrEUtWGFLLoWU3Xca2iPiLLMbbNn3WA8MyJJpBgHSFXssinYN3xoP",
  "key13": "5JLZbTbyBF1252hLidBv1SPCRh8NBiVsS8Hux9bdCMYvQJVeMJp7rEvwDbDvg6pQViMDHeGRdzoa9o6CUP2pKzGZ",
  "key14": "47ayEX5v7Ec2ZJFBfPxhVfkze7SoSiLdAejFsgp4HNBJJHBNVG54ksfGe4EFJ1tVkkMMLZq6iMKH985xQJncrbHD",
  "key15": "T9pJtUiUwY9ZKVpm41ZL1hG6Ba8H89EvJaXER9ZieHp3SjyxeER1QA31bhwDKRGJegeQje2rBZcHFasiBXJCP3d",
  "key16": "62bJvxUETCuYuvjmQq71RKKapoA9Ankt9UmwhVPm2TrYZEtZw7oQgpBrDEKc54QAd6ucNyK8Jaq2L89QTYH57UqE",
  "key17": "4rU3ZyKnseJUasvm6ov4jXLyLZsrDKphUXvx8GCaQrrgUhK6xDESeEimR8WQWbtdWRAK7hJhZhkNR34wzYGnm7MY",
  "key18": "3qT7p8t8ik9tKUGgxiy21gvoxpYSfcodAW47bzyvWhkKyyUaa27HcL5S7dQL3Z46qrTPyuKtgtNxDCPMLLX1FWMt",
  "key19": "A7eFoMVQdQPAkeu8GCQC7c2fNU9WXCCuJhLQwW2njgHUesLvMHk5MPKYYAzryEx8GNhNYjFa9p2SC7RYWDKMHhg",
  "key20": "2NDPk9ojoEqEwGqRSE8d1hxAK2i1Zdc2PLfVkdSjTXjvPJyEtJmePtMRjdarpdSrzrSiJfshZJYUqtLKeNTXKGaj",
  "key21": "32CtrXajzTeLThmY9sQGEKL6vfMKkoo7QXmqjyUSmX3kSk2CdwXZfphfKbDm59yWVZoJqkVWPzmUwXxiS3aSxkcF",
  "key22": "5HLHoC34AgRMboV6tgWRNhUQjZM46PvpJfqQw87qJBAuA4PxuFVKzHHPgVAiPBvS56jm7wVoPH6q8e5ynE6MPYe2",
  "key23": "3pHWcPAJ1bZLw4NZ2NvvGycQdVHgYcc36VyeGcg3acT3pAc1WhEVTCyLnqdJ6hrmuJcq1mt6m94FiRW4rnCWwTYk",
  "key24": "Er1GBWQXcU7RmFY9An3B4VT94weJZwryHqcusKfgxekJN8SzLsfs7ftnCb3tn8F7NCopieHXhiyyH63mDgXWnFY",
  "key25": "1LF5pKjdXuke9tqg76woBS3Zracqsx1z2Kzv9qJeMnqCNcYE9rpMt8wGRJ514WQr3joPH4LHsWnqkAwqSUZSYVD"
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
