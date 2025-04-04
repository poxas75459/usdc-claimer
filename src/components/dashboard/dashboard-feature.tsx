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
    "2FTMh4vVXnE5Mks4u7g8AonRLGt5XdTQ47wiwcKTSVo2krr6GBkJrAgmDFwnf3NtHNuVs3a6FA4FjgsLxF6y6mDY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55v4jjbiAPTaWtPTWaQmzH5uW1j9df7qwntS6g9KvCx7612YA4srQvV5249NVwhsvc4Jd513PXLzifPE5Eb4YDig",
  "key1": "31YBL5SAE98pDDRgJdp4PKTytWmRq6veSjxdsi6DYx8J48hqasd5ufdo1uSGspMXfSYcFoE5xvm8pwW6dgz2yfcg",
  "key2": "2XrKuoHm6mnqkgwiQQiZFMSaB6URtpGtgj9eesdrMdne6xgP2YD8J8L2BGnvXifPXPJ8yKGTpb3zjuuCWqaQKkV7",
  "key3": "3zrmJTANGKcVwoX1ZZFccf4TxqDrpz6M2NyPSSmgczkzH5ctD6ogZts1kYVkNsVcMxoj3ERmjZU5VM8836h9RT8Q",
  "key4": "55iV5sfADuU7mwz9nxQnaHk5C9ScJr9kuPPkZ4daDvpP8vYDR5BDzuPQ8oSrHLFjsH4cea7VEJygZzypJYmD96Np",
  "key5": "f2izh6sWg6TaxgkXGMwSkBphh8hrc63drxH6rjLEMmcHc5xQz2uVURGexanJPvksm2bUpxGcZ5YfRhZMwL7G45o",
  "key6": "5zwb9HSftbbbxyX8XbNcffyKrLK6T55wJuouBzyPoLHLmmfh7UfeJtjtFnrAeuPD4eCpNeawgSSJkcXPkKvpUD9o",
  "key7": "6XiRinjj1RqwoBh6eiNs1UTNVkd9XKyHdKEr5XQ857Lc7r8bDfv9CC8GzvqizyLfDGTD4GwGacXH1NJuisCMbwC",
  "key8": "4y4mqtVYX8L8UN4DFsV2j8qUh4wLMzKszsgV6gwCf9AGgACwoaT6itEVbkMfVLCRvDYD2mefqviAPtTrLGXgxNLy",
  "key9": "3zGRgpjf8sCjNuzQ6tYp8LQvjHHvhHsZqBqZ3CtA6M1qQkPiCPsUNfhMqinPFKcsuzbDyeni3gBpLWdZ4utEhLNm",
  "key10": "2eBYzQkLxoZ2McQqiKcTdRMk15GTCWmWs3a4RFWBQX5dd9Q2jKCNHpFGgEs7FjZ8HQwoDwRRynhn3f1fyvfRkhoD",
  "key11": "B3GUTTyDEaDgoCthRkXBmLq523C4vZorGtoex4FnfHBaLqkpnP1kGXB4Lb63giqXaNgtHQkeNRLXoUzjtV5KRR8",
  "key12": "3QWTJppVAPnFrqD4U9NHmSCL4Z8JNoRnV4YH49vMtTetPj4vVYrj3RHxeJEx6MJ7BDhMdKR7nZ7ndR68RBy8JZuk",
  "key13": "3NG8xK1kXNemmyUJ454zqcJNoLQVTobymkngzriivFZnWhxhcBb1MyqRfN7B4yGXK8BdcG6iVg5jJCRcTV5umh25",
  "key14": "2RijUg8faxDkfN5bePCmTzphviLxLHpVgeCRoBfS8NpD1ujzebdgk5TVFwBcgBmmkdYpFthou4rRoKTeAftjLLPz",
  "key15": "5cNPegj5VoGxZg1qn6R2gRpCexyvh4o3ToDq3R9rb6hamEd6afoXAEttQb6SZfU7SXjRPFuETcYQfsaBvqZwkwKw",
  "key16": "Zuz8m9K9rZMK4XtWutNvza2g5jbtUqxcdGgdhUi4UHt2e3eC9nbtshxgQ8di6ZhNknY6gECtXjRjPCKGZbpspkP",
  "key17": "da4M6c9o8xHUqEqXcFC7KfWMh6vEQYizfB6C9AoHGoBGXP27HWoJE84mkNwQH85rHE3bbBnxiXNKJoW97do1FJ1",
  "key18": "62kSnUHmSeuYu3rHdWtmgBbk5p4RBTxTTUoRDhjktSQpiX5PSf9ij5UR1jN8rvZhxdVRq2t7Rpysfp5MDQbxRSW1",
  "key19": "Z5zUHCGEnng6646JARrrAkMURodv82nheJFmT1wMe7AGNmUQboBrSnuJXqh29XFDNw8WPrEzxMpeh5Ek7DYHPZr",
  "key20": "25opNsjz68djmFmfDRWwKLCmZXdekNDd1bGrzQbUWUkWqKZNtuQWqEfev2yUZGy8vbRTwMjpvjz82Tc8YhH5RBZ2",
  "key21": "646i3QZZjxSwWSNhqgBaAK9nqD1zLBjJHVzeyDZwY8mr55aQ96CihNFC4gsyvHWxD1iiyjaXw4j7kgxXuvdXcCgK",
  "key22": "3PVVxwUJEVv7yJV9HTNZHBhuKLPsnNbCJMVriu4g4HFkJR2GMCQsLd5LZ2dPVZFrHx2gkyWm9J8ZBVHqGHnA9q8K",
  "key23": "ryH6FW4WbGC5uDQDqaDDaW2m6FzAxnBwDBoP9K1vSqVbTQvBGiX647HeKDqqteyQAzX3kSYhYsm8stZrr4iAufu",
  "key24": "2qx7T3iZ3nAebBkenj3iaXcfAZ7irdajjPGGBRWEgBgQT5BKsUojNAFjgkXXrZZxWPhJHrY7ietZH9kz6gq5N8BT",
  "key25": "5LwwHCBFpGtNLnq4fDVs6BpWCvS682fMkmstrKjuwNvbEYqHwnm3yHw7HsCvRvb7gXGKe7rvcy53v2rRrxoEqPe9",
  "key26": "4n8yzhj83Mo9Vyddj7bYCqiGCQxTrjqkn5cxhgpTH1sFUwhMweLNgg41kyoqywEbbJU5tAVviFBfxXN2q946yNBW",
  "key27": "2aRwKXvNbLLpPA24w4hRZw9JvdQXWPYL89eR17k8vbwXyBTjqk7AkLMxfmsjxqsRagHezCEqLUN2hxBaSpw42p5r"
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
