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
    "5bBKjd6jBFrtd1Koz5EMy4KcibZexrj3r8d61b391LW16Q5RsGhDZEV5oYTzhFDqMBr9zhgp5BWYjzRbGhQjKn5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vfe5spE9LtrcX932JPQdPcnfxUAFhnqa1f6eB5w34b8dFBJB17kr6LyA582qex4RocpZoPCEXkfpminFKYGX34c",
  "key1": "tUdzyLaPQn6n2XzaMhcqTNDjMKBfQQVzdt3xYPsY71GpVXz6AZc5NuCE4bxZZA8sdDhZSpJwSwuG6wAZsmyCYw4",
  "key2": "4q88dA2166jDs9h3XMwMjGYtDa2ycZWhJFu7DwMyUnJMJAnUNFRxANoLh3hZ5ChkXMXahcfR47qBmF7ranPuUQC9",
  "key3": "27tsNy4Fy2iJWvjv9oWYFJTVRrVsSGHfvcsu3UTPvWfH9ZeYc7tbyh5Xbodg52hxEWv5uuqw8U57P7KidtoACjSN",
  "key4": "raZ9DyHcBkWHNLNvXntHTCCXKQKSC3gyf5GSBMS6ZR24vusKCwfwCDEcL2q8nZLdNHfGnFqxfqiis3dhmQfZJVp",
  "key5": "5Cq1jXXEs5CQ8FV3XECS69bTztzULiPpkwUC3Yz3oUJWjYnNSiZqVv4UM7pJT6jxafj9EgKSiAxdAypuN4u7BeAn",
  "key6": "35zxTVAQgXfzy3PSFpvcWLdv4Xu7yc7tXuhtgDyyhBKo3cf48v57WBRbpMH2TDQpL8mzrAfuBgWK1KaR58PCKuuP",
  "key7": "59wNnD7Q9zsmbi73ky3sZB5BfM6jsPyngyqHbsvMeqSUgR52x2bsqodrj5exVhFAjY5hLHeJaNmnvsvtxqKNu9Wc",
  "key8": "64eG1BHkFUq4AMPmJi33TMUnhfSwqiySWGCtMW6yF6nqA5Gs31tXbvSSahjnDdoG9gu15iWiQ2z6RJJY6eGDGwVC",
  "key9": "2z1j8goer2TcnfuNVJohhtQ2yXo2kBec9G8oWjLzABKkxSLKujtpqJr82NmMtUsYPvgmbKkgjKQhh5qGnanUoVey",
  "key10": "2gW7YTEyKri5vKc3Zf7VzjjZ8BSbewCdPMB4pWtxVbMQpiUAgrm7Zysd1rT2txsofGSnQnGpvvsxK9BPvLkmDzbM",
  "key11": "3HHfQayK45spKxyYFf9YgM3SYdQpz41t7UzFsa95tDDbUyJVuzwrQu6eGckvD7y6HbxPqMWcbL1BM3owhZkq1tDY",
  "key12": "28BEhTCwkBzbyQbkKTFNc8eEeFfnFYZJjQMXSgK93Zi5FgPDW9HUBxbjT43darzMchmJzz8dGTxAfDHfEBnJSmKA",
  "key13": "5JrhnKn3EjhWLAKN1yKgFzqVAPjA4STk981eQaoFzLvZQ4U1z3igvPS9FScncqZjUwyVhMF7kSrMVwkd6zQaN8Vt",
  "key14": "rbqszccUH6pAEBNL8iRMTAAEzoWPL3TRrvJkJCQeT5tDZAUosQknkCj3786mARLVRCahQMe9DEhNgPX4rbzpYsn",
  "key15": "4YA8rTPLeyMcpXZLqaeRb8QLDvkXFWTVfT7X4EaGGVvyc9JmzKyPYDa3UcWcAvnMfaBEZgzJ9VLE9n87TLrBV4ra",
  "key16": "5nWWBgtq8NrAHiUNMrpNuPWADqnjP3HETNndjHkf9ijzjGr4vcKJtdAaZsRW5eTn1pKu9y1t7FfUrBM3RJaWaEQh",
  "key17": "3PXE7muVHcMB4FX2ZXksK5zc3RCfXaCdfFGgGYLNeGAtZbwrdq7tLVdoS7w8v68XdkvNNromjJ1Kwf75VsNYdZQ1",
  "key18": "Kgb7bCpN27GZJhXGwwgMC2BqvFYuxx5RRdwNP7EZx4tygn6vv3AJ4uV3QYmvYF4b5BX17riCk6aNXaM2gMur7Cg",
  "key19": "54HM5vJfLKzqFWzPQYFqoBAvx7V9hHFT36HsbXkVKNg1NSg4LMNCp8W9ubbB6upn4nv8DAfnre29FTtkN48pLJr",
  "key20": "xqpevvoLXu3u155W4SS8gYdtaJu4Ui3rBdTxC87MeGeftUZP83W6TjDPD1MLFZqtQzrCkpr6CXVvwmZ6xs1bsYj",
  "key21": "2K4bPVfU1qpgNV7ctruVPWkhKZ2Ac8tDS65aPJh18fBRTbMgpkMbxDJWpVaoM9WR97Lf1tVJZqg9siVhedj6u5kH",
  "key22": "2bfzPy3gA9hwRJV92WRLu7GJnTLz6kov98QwMx6Hd7TavouTX72wKV8gQxRy5BXX45zmKNjuWAnxxAv3pZoUGZWE",
  "key23": "59j39ExUmb6knCfgupYUTMcUttZ31waKgGErBUBYPswjkY5rTuKpzneSVDzqN3HiwLZWJ3Zz1iJ7U5ppyJrv22Uw",
  "key24": "4aUd2Tpnds7JsTEHaVgdUve7GacJrcsroeQ8e28bRyRXpVMkzVV7sGirMW75QyT8XxeLEz3jYpdmpTYvwdgCbnbn",
  "key25": "4gyCKMa73WAtCgW72rq3QAgAFucRXJLA69j5dHKE9djvDJmQKE4Fs3mjJ9QpLbDyWVuUapPtdE8gKMwxcKi2vAEo"
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
