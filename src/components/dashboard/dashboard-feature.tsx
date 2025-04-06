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
    "2pKwybLFB8RUW64fzgombuYF2tG5vSL2yApv4gWvP5wGbBsp9DBkEePp9Bvw8jyJdRt9EYkosiczmmE21yR5R1mu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31JcGQkv9dEbAHyLxrzs33L5yLW7KTCn8WRwQTZDGrvRbf8pFzqvZa6xn2kv6S11E6opvz8JCYLu8yXDnTcsoZch",
  "key1": "2cVPDshvsCnDGNgZsbuX66JaHxKygR7zoUc4Lji8ZwG9eMA1Y2QHiNW7zA2VzBCb5pVNuykbmqHeRmfsNgsLfEr3",
  "key2": "4aXgRUexpUnbF3fsaaJCUN3iAoMuYG5TckNNMWyH8SXHrCZF5xqSQW3vsCWq9NmePRMkHgRHhvET5D95EwjUfbNt",
  "key3": "4UCm15XQRs1Tb2aYSUoTsXGNQYP7LUCkLDvkJBeRQMoM5vNKMPbzBoEMhh7MT3vakp9LP7A7Eyb43AF6GDdKjYHX",
  "key4": "3J88b8EubCLHrQQBtmNnC9v3HPpDaQjHrj16mu8portfyo3VoSoarTvtwpFL1TfW4UAGFb18VxLBVmm95viXzzyt",
  "key5": "3CA4EpQej14ybHXVKSftb1zg2tMhbcQh6S721s41ZhM7n4FL5Lx9mwomeFD2EMsgtynG9JdZ2MFv6p8GmfYFiLiN",
  "key6": "5jR5PnqL1UGK8LtUrRg2nyZS63b5GdiGKhzuVS1pCMk6ajXNK52XNyGyNYPHYHCNW38fFvLJD6hMMJodyCU3jprK",
  "key7": "5ABNzsnHBq76LAttAH2SN6GC7xJgBGqHQprai3F35x5t5Ee92YVifkxnd7utwJxKQThcfL7UZarxJTVEnbdeqAV5",
  "key8": "9FKNMZ7Ags85khgSXyybAHscbmhUf6XxMwJbsYte7aNF5jn5ZPWyRENgFyt59Qmzg7LzkF5n5iuupHjgZDU1REx",
  "key9": "4hgvFKzLYavQ9awU1cCD9FmFH4ZxzGLoye1Y8rV63wA4EfkAYaWYPVPj7Fy84VJBHjQdi3wkKPYuWGb1gN4U3Lc8",
  "key10": "2j9p6GF1EMjhMjVnnnu5NKS4jAmisQ1NeW8kwYxXqiCzxBf6EE7J2BpegJGS6Pu9foBoyvH6kV9t4UFAHV5ucgtw",
  "key11": "3TYAjjVejvbfqEDJZQqm7m5gSvy7dFixt2RydmaEgEF14KntMzGPKbfw7TEPXN3QDjmgqTAvuYNnwVX8MmUcku4X",
  "key12": "4UEQBLGb1c7LrQHgNbZPzLrssT9dpYwTrPQzXM6naMJEvPTgvd1FahzkaoZ2NgPctmfQyqF75zV7rZmK3ZNyVHo8",
  "key13": "3V7GKfVasqeqvztQg7FYjne3BRtKzAKUXaRMPG3euZdpu21V8nX1UzwmeCLzvS4DcGkcRce9cMMzAf1wWNC2BJ2k",
  "key14": "2G8WzSWmQrZjus1Pdc4FV57WLA72ucKLaJoPgtxGA51J3T5zJoa6Pdm88thBFqJATE1sjpLhKEnx8fMDhQkG3Mmo",
  "key15": "2miLSeCCTLKxxi9G9AvN9AraW23W7hr6adYkaxF98JLgK9NLSDEugpdnpCzgET8mHqt2K1Kg9EfdumdnRCV6z8TX",
  "key16": "3cv2tyNPvCznrFj22owKxZLF27Q6za9R4BgLfFLEnsG99Z58BJvasbThjMkCfi1TvjWY4PQUhZJ7KugzRMvgNVTA",
  "key17": "4nGctBY7SrTTpNJHChK16P6YxuLFzQswvSJYyxdpaJUFhKMAM5EQzCRuT2GCM3QsbukC13c3sRQC9tjYcK2CKT8R",
  "key18": "4t6rw4NVpiRHMhGhtvSWcJ46i5gnHdRMe4Xb8R9aHS2rgHobi2SMX5AVzMpUxaekres1ucHQYgzugPWHqsBDdh9b",
  "key19": "3CsAGJkga1EZEL9724RZ9qMWripDJFRdAERxRay9U7LeAcrkFZ6wGP5YBdKQ9TnrAtiK8TzX7X4FEJM3st6p4qN1",
  "key20": "216sVn7gCCRcVJxWxCBeRTQ6P6rC7jP3EaR4uQXcyLr8ywWjc975wEzuVG7UsAMhw8fjrQ2Ar6G7QpxkpRDMbRrb",
  "key21": "5oL861w95DtGPjtYxecpukRDfupBnQ6D7qL86s9Bnwe3aHXNBC5r4iGLXjGDfgxvVMbjWsGnRSdzoJ5VUDhdC7hw",
  "key22": "5s71vRDYeED7ixUmvB1Sghf8srNxH7VgVGJVSj9G9uiqt4HsC5T2jBANxt5VhKGKshL6fNjU6qwypu5tARFXv9sy",
  "key23": "2RmNP9g4tnF8qcpLAFWNoFDDSESxwqzsYjw9khWdp4TgDqf8Qo8e4aVGwJWVqzPRHUm8uGG6UvoDF21T729uxar9",
  "key24": "42Q1GmFduXVgs3imXU28TwtjYwdrc3PQmfZ2BG81kA8b9cpZG6YyDr3TGJFAriLJ5EnCU46XPtud66TgfKbAM36K"
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
