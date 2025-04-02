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
    "tAvsrcpX8eaQGnmmYWQe3ZCPjToiTq9v53rLc2rKP1VpbMez3hCfQqEjA4tH3FTbyTgdy9jE52n13PALewxkBwN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FMDgEPMnzWKS2t4iZDxa9Bij7TwbiPwX4gZCcgtKLsqnGyUPjy4EdXUaxMLGsExwz2E6sE7po8qbgK7mGt3wbv5",
  "key1": "5RRjfNwgRii5JVsrXYCyEG6gLsLbNPcxrX148So8zw9cwqKCJ3Z2robQt84MrLSBMHGD5xp4xQ3E4vKLFrNfmR4m",
  "key2": "2FgcWptgdR94GPhhNMt4iwYwkUkdig7kyNicJFuJWwnsKy8YaTTs2vxSsHeW1FPvWwRW9AXT6dmfshBZLkfBR2FV",
  "key3": "3ZCTy3F3mfQ3CsstkfDgUswNS5nttgwAKbmZ55TGCJN33Rw7wRBfMu41Y2wJ6oueohpa6h3e2oXLDw11zGgPissk",
  "key4": "5N5fqDW3GdNkbkPsQ3Hx9ajaATjzGXHVmmiW4SZo4Ruj2MM6o8NkYygkeu5FYrt4Tb3c5XBgytETiHA2BN3EsEwv",
  "key5": "5L5Na6sdPeBmhBcHjNbiZgCVNR7CWGvjRF2SBNPpofXTu6U52RVWs1wRUtUHYZFN2WxV4CdmJBD1akdt37uRoYT6",
  "key6": "3hoh2FfuWaU4ekuLb9PoJLtfPVkSBa8oSWxsFFa6FaoLRc1exsGtNMAfDBh5A1njJF1MXnuJ9SyEv6ET8bQjBjaH",
  "key7": "3hUf3X5VUE1gs1uoRGcacxnDypEcfMhZzuXVToQtn1qozEhpHh1dNYYPn83Nc1cfsGpq3hWYwmLpERPwRX2PFJaN",
  "key8": "5Ltme2zF47BPqCcYViNcYBVsUaj3kDDiEBerudJVdLUhj4rTfix1txEpwFYyvJMfMEjajLyJ9rhLviDS6wtWumba",
  "key9": "3pCYBNqsm5Y181VUdVqpJszhom2RsMAs54bUmcsav13nBvPuBq4zpUKY9xaSNakyPR5S3oHGa9XaQB1k3Sr8VMEY",
  "key10": "4eWJPaXsgBazqadZJCD5tAVuFG9qBhWFTH4Rdb9LGmub8ig75QgzAsnYqoWExAspoqpPsXL9eGZTGDpNcNVzfFBE",
  "key11": "4MH7xeYDSMSe1j4auQFCScUjzUwL9P9sn7KAAP4VrqECfk6s6MSG2HEamV39DLXmLdiVBQUGudu4zmhLoXhAyANH",
  "key12": "2fT6CxWQhfbVsb1R3VxAR8nvVmtb1516ATiMn1mRs97MRE8T2Lzad4Jq8Nc3QvPx7w2xdZkhPEd3xkVeUfJq1SMD",
  "key13": "kq9FJDKLjzM4RJwiS9GdHAPddrDyh6ZzDTSZSCicLig1kbGd3XYuJ3JVXtr5dmeQJNDSmebv9uVGfVWshbepmN8",
  "key14": "367Ti6Ubgnrw7aaRzxXmSnusG6ZQYKYE9cFhv8KFQ4xMk6L8yr1WjcQfah3GBsqm9ahNavqBzoVNvRcCuzVhXJwT",
  "key15": "5bh6eaByn4bf8BTm5JUG6BapFpY2AWY3E3EvbgCcguBUDemanAX1uTxWh1GbKNCcDW6D93TVJkcRvuBADY4xpAxS",
  "key16": "4F3Z2daX4D1EPfJbAFQithhEB3tuP17DL4WuDg4ytVP6uvxLCxwrvrEfshrxqL7pgY6eb1rZncNJVsh3UnkScxzW",
  "key17": "4f1dyJ7oMwAyKVXNTUGqNtPHLQDmky5nqNkCsNYfpy4nGBdi3ddLFTvDGtiXjGCisTNSXpeayVeGT9zLc29T32f8",
  "key18": "29W7XeKEDVeR6F5BL3yVeFcFmjtjW5UP6gjuHWYoRFYqRaSyXPUeBghs4MubrP6gxfXV1eVcuHnEQiUJj3a4mEnP",
  "key19": "3ZHUExRpPzp79jYfL24Lh8Q8zcJejVqnJpUFK9tSe4kBu5pLwNghr88Ab7Zjw7vSukXtkztytCErHxwv3Lc3hrh9",
  "key20": "4k92gCr2iGFtFhzYg6fBT4qyKEuawBKR5Dd9FC3z8D2PhrqrQL2mnTkzzxAQ2bk7oPV5J25FRmLaS24E7jYC4vu3",
  "key21": "2H9UQg7tf7u88WdKpvRjUB9kpwcYfVi8jmEZhyfddAAN72TdsstZWEuEsP4Fmh9yBmLysABYF5ZWiANvU4APhRPR",
  "key22": "4TFAv1Q2TZEcFsDXAv5NQNzA3HALzL6RyqsWkn2XZTGzPSgNQ4yhyTzw8dPQd8fKtZKncFkZX73y3MfJfTG1UYbF",
  "key23": "66y6Xfog5WWNJW9CZ9pXXVFwEcqrx1eHaUcY9y6wBCvuKLreHNDQmFeAMfjdZM76Q3M6g7MDXvAZesTcGbJFtfrT",
  "key24": "2L2XSfpteFQnLGDC6P3Ls3ePxVjZvBPwQT8xzYTmzeSurYnh3EoebNruGvNJSgNxoff6QkL4KVTrPQudCvPUvfvs",
  "key25": "45WiupZgd2h3qm5tmcQQpZDoTtQFD3TN3a3tgez55NW4vay4TtNp4Z5F3Cg9bJqUM5FRE5pN87KmPSzZw7E5AXkT",
  "key26": "367fzFYVDZdMSXN48XA4s6B46bQvE9MgVzzyCBxtMiPBTD9KAynW8wBo9DMTNK8W5Q8DtcFjabXx5Gv9g7dX3Le8",
  "key27": "pu82rJNHp6cyGSnMwN5TgpaEPUZMhqgH6LRFELpRNhWbsgDQBTU7fGCTthwrmpCT33ejjuc6NPAMizkp2VkZKYq",
  "key28": "Zrohht3rKaiQEULhSqo9j5gu5zgBChe6FjC1gUCTFx58msasDcCEnW51TLh9sq9jQkmjREd4cbRMRfxVQBTREvt",
  "key29": "3LTv4oSP8X12ij2WzAAR5X1fy3YzrkWi1FTToMXLbGJpS9k74CvjHxJxYmuT1s4zxoNNySyjBQnkFtj7tw1JbcVm"
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
