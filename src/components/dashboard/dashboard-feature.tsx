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
    "2i9dGFx6jeiXRkptGLthgSjS4kRbeyHfq1NJwA2URMoVGeNjBmYzhhEU58mDjGrJC1VWdXDVNFgpeJ9z3rLyeFXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CBpaNVfaC33U5BJKm8uyfgi9sSW5qRt8vyu4m39VoEBYPhDu9r6UWcn3CsE3ofkGUUd7R2tLmguKe3UU3aTpett",
  "key1": "2KnkQFwuGsGYxTkExmsvRjBda5LsLQD2baTHTEFiabjtX97frHPbKCXT69RtsCaiFiHhcbp8nS39Xt6wikBPvX8d",
  "key2": "3eApxAXD3AcqvfZZ6yYZrNTVRZLYBCEtP6K591L1MH6FB4LfvwaxiXhpYPVuKMryV1diJTfMR634ShxicRBvqC5X",
  "key3": "5phTFoHByMjxPgbie7A79dnHYERG5aSdBnkX8NoLzXDD1169UwNNeDsvuogKPidjfCGK69WrLQactPapKG6uJMjX",
  "key4": "3bdoFBAi5p8Rfqud1HwRCNxRnamf9MYvNK5iMw4e4wJpBE6RPwmkdRuLMmDXMx1QmH2ReApoTxoYSBewEVp41THM",
  "key5": "5xEmRsijAmMjFDAkxHn5t3KjNaETXnUHpsRoYEjUQLuD5RT2H2vgyjWTSVcR8RyAF35z7ozNy29VeiHFZfW6FKLR",
  "key6": "59wvj6vSaCusjUNTPsGxteZWjTwG73nazhY5g1FPPLjxLju74fMM9UzhBU6JBEv8zpVow5UnozGKh2TQ1TTjUy4R",
  "key7": "3d8bcanvVzb3W6bg3qet4R5z7EDsHiU3b8H1DTVrcjhxgf9JGrZUkENn8jr9k3QpGepYzV5b33eZiDJNq5qmJSUu",
  "key8": "4Xz1szBxLQkeKR5MQ9QjX81Ps9K4uaQ6ibmyuuxyUKSauoAeR6vtTdp3jCmvZbNW6yaZeDXQEYfg2imrc2ANPAeg",
  "key9": "2ba6rwychMDfKL4FN43LCFnzc1Nc2GLrKTrBTpGhZCa7yecGVLJV6XWnjGPzCkH5UGoHyy8CFHTeBH6kY6VEx5Ya",
  "key10": "5pMtWME3t5cDE9sChEVJ92wskVgnz5djM81GtT9dunpncgUmP3F8xpbR3tfUd89ptCvrYQTtYn4Q2aFsVhtnp4NV",
  "key11": "5vi7JqixGNK7XoGUEfy2NiFVzAJXcZ9nUanZA1mWxkF1BeXCZrTBYFadXr2p2Uqfd3tqfSGYPhBMC1fBYkoGmTEq",
  "key12": "48qrcXtgMTwgD9QdqGnRyeZYUJjg1gYmdHpeyaM7vkvjGDUhdbZqirqTmJ3uKZLUdctzcZbMBxXdQiA5VFs8rcyP",
  "key13": "38yGsUt3sPMbvJcgtTpshCQz6fYMrMjxSBT1fqo33PZ1phdigTpQLZ8PunTvh4BWpdRPm5o3DAEQP4FsUEA8ZnH5",
  "key14": "32VzYGWDFghHauEu9LKDQDjq2Yg5RDu6NMVtnbWZaEecMDK4RCYjTMLabLApfk5BWfjcjQxrxRQzMkoF6aYyDmve",
  "key15": "4VAEK9nuNkGBXosbjL84L4DH6ZCy19SVNiRp3P8pd16Ezxtp6B3SVjqyDoD9uxrH7pSCHKgoVhPYPEEkraYkxceP",
  "key16": "56ahdDFrstCHVtn1DrG4n2vP2ZXUm8hmf372KWAKpa1tq4QUa7pY4iskKqamQuqDMRBp8h1HGyQdrRVe3hhZCfnN",
  "key17": "47k5vmDWLBYfRJEyxwmZv8cdnegR4t17NjxS6obMPrbVNhdENP6NRpmejkGxxa6hUikx41PG2CBzKyzouWrb3Z49",
  "key18": "4s4XWK2hsqBqET3zkST5cwVMvguGdDVnfJPcfv4MckGbAxGGgYN8ccQ4bbaMkPRHvmoGj3zEEGwqhvWVdk6sWeEt",
  "key19": "33zv7J2PkppobY5hQKNYHgCGu35ywurGifWJdFkQXFXoYJXmUKULf9zytznqstMBNVZoS5sS9gxfSYuZRnnyEzA2",
  "key20": "264V4J77N8Sg2rZNMxNLxvLM6QwPWhmzW56kUNAZQiZJHUoSLmCcJZRSq5waqG2Z9pDcmYNgrLAvvyXxE8dnva3w",
  "key21": "32vziBVc4UgVDs48JgsjjBahZhmfFQFwfVS5LmSDU3FMQmvYdBqiKM8cVxmTdpPNKz7R9EeczKBgv9jYwCYt9HcB",
  "key22": "5BM3MKBZtHUpV9Ff4HeiBWCJoBmiX4vXKyYBnm7PPvZG9h6kCQxnUZZoujPX7gtTXhSq2P2ZEXDDETjnB9HXEVAn",
  "key23": "3jrUSqahUdKyDHonbYYQrc94fdiyZuwYhHCASBv1MRtHtyY3YQj1YpmWxuyEdnxuTdzp2R6ozZrXkN3e6eZoyReS",
  "key24": "8ihLqKJ1p3aoAQQJEzFbXL8YAxwgakXy5jig5kqSSa3QNM4H2RWrqj6YxnN1gx7bDq4gXg962xSbNBRetdNkqdT",
  "key25": "3ji9XFEEGWtdG1YZ97jsLfXqtjHUnExhZnodwGrJPrFLZ7RuuZAsCd3rK1yaSx2bkLNmT99ueafWiU8bdgXTb9y5",
  "key26": "3GvLiBHh3fKVLHv62P7AB2u4577YEqAmzZKSFA6JiWkMa456yBzKVaYZAkJWfnGZM8SwCzcP6Zf2q1xpCXyaLMgk"
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
