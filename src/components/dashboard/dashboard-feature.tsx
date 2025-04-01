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
    "42v3PYcUeuQ4PsYySrKZEhg2c6K7A4AFr4VtmWCBAkpGNs3zrKCuwDHafckZxBxmRHoT9uS7HtAnYtWMQFfRum23"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HExsvabnbp4exjaLfZYxMTTwrjyRWosXFncfNNiVMMtUmSojkRtJ3dY18efH1wTQJQWjad8MytipdrCYHhdsScA",
  "key1": "2CfVyPJ5DqHNK3ZmopLxMTXS1pwT6vRrFUwssk7aFv7WvrPr9HrAkM7rvPATfskcsakgEoMBcgCGGF5pFMYQAnZ3",
  "key2": "3bEqusCqSZEN1H4ysk82G3b7Y78ZQmPYEqgDnWkQGFod2fNavZeKfskyfyWSCLc3tCerQQ6STCqoWZrADKejQLTS",
  "key3": "2tYKLczDEGqyf9rHFAb6F6njW326LqmMybsKrCoB8LtLd6r3DiJeYkkP8w1R8p4Fb76Vx1vTvDsX6ppxubcuYsmQ",
  "key4": "n74faYYxTTeP1wudv5CzLTaiE3hKBF5gtuUcYo8YVDjoaN1tsaFtHcAbRaQtsiKkwKRGQyFz3v9ogBBaQ5NTaoP",
  "key5": "36X5df6p2sgUUQ4Q3ySPZvbw1631eBD6bqnPHxxrNJ1HuZyBAQQnytDtejcAQQ3bcUSJGWKnNJatb9BXWmQ2dBeE",
  "key6": "PH3DcvENJdRMShDeJFG8epnnzy3C2iYCAtwvgwVXeoK3BtnnNQoA7sBwvK2skj91u7hTtwn5B1amFNps9E51b6X",
  "key7": "2QtzF47jUVAfP8M9LdL5dg6w5kpdxET15sa9SMgEzVW17bnjxDKcmUu1LNYtEueEJw77xoqHARQnCyZ7k7T52cKP",
  "key8": "5oeywZ6umCLuLJ3ZiQZ3yg7u7LYGgbHqZpm8g6qz48BRGSuR9UXDNTV84FTs8KpaCbV92BFmVgryGwZCshH9Pjf7",
  "key9": "4xeCR6rwP6H2b7rZ8tWb2yDT4B1VS45mMAFoqxTZGgqdTjWvCjhnjiQBCBgo7zLsK5TC6fbwtdkrkEug3fTvWf76",
  "key10": "5GcZJTfytKVqnbJRwjRpJrV3T69KL6sBXaVLZvrwifBYcLevy5aU7oshLjDNmWzedpzuzZfyBTswt3hYsJtqM4i",
  "key11": "3GNtHLCAyHfAUbcdh8TytaL16kPPqgvB2nDat2b8EngXV73CBxZ1xFLjmDx51nd8NQo86P6dk7Kg1f1T9GURTND4",
  "key12": "4yGqvkFbiR8rJKo744WS5aYLcc9CDVwYStgmCDqroLhMie6ANGCmoAQDYdiCvbPgHipsGrjN2UaWQ5ecMvxZxTHW",
  "key13": "24R6m9sdy9npqPPpQDePhXG54Sw8rXHq97HYanSdckog7s5o7CL6sX9BJG8d233mtAEZK4LG3pmpHR9PWaU8tCo6",
  "key14": "5ghLxtZBNeG2bJDCW1v1LJhA1eozD5YgRtiT9j8r7yhqkDr9iJTW1hQNqLARm3Yggor3kb5KAxaG3tUfpAk2fQct",
  "key15": "5cNZrDbDR5iX24teNCdNsc69M8VaMu1LnUb2tyH7ow64tXb123xDfFvAPvQAMPr4smYtfZZdvvwNFLX2b3g5FjUx",
  "key16": "4onsrHkBeqrNF4QymoeDPieQgPC76tKugatispN3ANFMmgsvRVgaN1G5QymLiDXd1fcmxdMAC7dmVso8BQzi44nD",
  "key17": "5CF3p43HcTj1UCtkMdk28RTqkbpujQQRwdmhwTxgi3gQVUJMXKHjzVMET4H5q9tu7pKnXZ4XTTHQnhhAcgLyrk4d",
  "key18": "3Nk2NWKZJRjtfm5GRhV7U5GYDet8b3pNEbvmwD3QDfYZyxVtmsZ6wfZxGN7J48UfFZrtBYknJZHhrFMbpkVph8mk",
  "key19": "piosFUKbAQ4rkLLSNdWcLDDMujeFcjsxzQR8iSRfqesVDmcykPX7cguM8J7obuxV6xnzLjH8TkdQUvKbUM9fTr3",
  "key20": "4CGHasVtGbzrTHqwi25b6RKYDP5uJhxsvaXGsiC3WxcwSo678f7UuM4iJWBNCCaMBfSJ6oaCzMN1GuTuTLo2atk8",
  "key21": "33GYb1JvqNEpXc8E4DziZnKqMoSnsarP2t2gRRJdv7nCyTJNkwVGhULgYQG1b1kEihZrqS2jjmV8M2pV4zkqyGeA",
  "key22": "6x2sX8WYFZDQvHCwAAWn11HA9EXEUbc4i9BQbXVhM2E1egnKkocV4TMWbvtbzBjQpBxn6ESv5rRzoawLvZgWnxk",
  "key23": "5ABCAoTQx2ukerxhmy3JbEqwu6SJfZoMdJKeCtMdcfMGbvS7iBxtn9oidBkU4N3vRxJnrjArM571PqnaeZ6sKFX3",
  "key24": "22JtJuf9ry5SrhYLaheMYgUSVqkkJdCWnPBj4HTZVYn4fEsxqE2s3FZM8APaeYJzy9v6ZKPZq5gaWb22QfwtS1z3"
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
