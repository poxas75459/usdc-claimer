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
    "5Ss6ZAnoFMXmUupuEN8R2HLRuUuEAs2CPzQm1gaFwQmEa5R8KaeVbsMHZFKPmjZA4uTrVa4z4VpruMmETYaizMdn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EGcYL3vJjustyZYp6pGWbAweeZAe5S6bhrQ3wy5G2fGHnpiXvvPJePTUJ5guvyws5o2M2RSy2VFUsyTb7Sdt26w",
  "key1": "549h1GvkKWW8gnx9nxYpMBFNm94qofzEui9xmEoQjTT7WvDMQsnBqdQSyS93oAQepQETCeo79rfgEdYsHtuTitsH",
  "key2": "38wiX8n38yzWG2wrALohSXTTjcKrSH4MsrbesbJs7zqvRokFwtWnUzo8itJJGNsonJoiLcEXWAhK9kWFriPdtnrB",
  "key3": "22TLUMdzaF52DcHst2EC7roMuodCNBW4Qaw7xKqGhLoYmC57ZANzFvqASVpm3BabksfoasxQ7YVwzSF7uvNyfNJF",
  "key4": "4Lf1WgBjD14Wpaqupb4YvbhFhxU8je6C9FuxZxSf4ij7uoV5UPB5ha6V5sk96gy4fmvevuuivEYeg976pcaTX31U",
  "key5": "LLEFmJ7iJ8xtNy82ooxJMyzKcZLerBffeqi5R8p6YcZEkgEDJsDpSGAr5eZrbuBmj5tNCbQsDz3jemth1uRNX5j",
  "key6": "2mm7JU5PhPBBGqmwSqxCsNQ3nBybaMY5Jv2LaxRTBUycRgd2jWrSm8GM7mBbfTmaCYUAuWQJBy2qnc621esGoqn8",
  "key7": "5MNd6iq9T6Do4qtD9GJGXqPL6LEBcDVjcPpy5ZjnBwTcRYNvprVb9vcR333FmbgcZANp7m6sdBLkC6tmTofWzAf",
  "key8": "4SsnfwNETH5hNtmxU8m7St1Rdr6k1XdSMgrcHq4YSwrv6q9yTYU1MEegFF22QKAr1b6grEC2L6Yj15pT5zX2MUeF",
  "key9": "4CjoKqYouCpHNwbA4hcP7pD57UTwdbeyrEpqk3XVPUzdy2WwXNhUURQGQ39L21xpp6Ur4WsB8hKVb6Xho7nLQy8a",
  "key10": "5pnCsXWcpchqntajhVLX8ijGCTgwzymKXJYev6LYYoghk9FjAJw9Ti3C96KDs3T9e3rT6ZgHbYWFrgAFMLwD44eo",
  "key11": "4cNWrGpZSMHBnrcW7BRjK3tJHaixGE9tVQ3mFSPeBoA4itnfw9LMtoBuZfUbNU49wH3dKzNNAUCSnieYQ3b5Higm",
  "key12": "7ZG5GdK1Smp7NcZ2mWzxZRsTmwnXt8HN5e6aBPxi76j3cUpJt8fy8QVGi1oSADz7Fj9YNK2pzi9jFhneGfrErmQ",
  "key13": "5eebCuBrKcf2jN2WbqPBzYEZbG3CowgfL9ZQyBM67879JprcYZjnhYiNuGZ7KBupKyZVzJX72dixJvsAEBwgZMXF",
  "key14": "5Y5AvFQkGN3bWg2BumHagx8A5biPspFkz9fFhgSxUSP1ShZY9Hn3xupjTaRu9dyz4bBkVUx5vy7CkbHxAoMjTdjG",
  "key15": "2dW1hy4e2FU7SK9U7xUj4AHxkKb3BeVhqrhbRzv6bsTdvvn4oLpmjCkt2eeJBLpWfYuPPKB9cYhfi2zMcQakA1n9",
  "key16": "3KijNfxSLsf5ctSCrLQDvnegKRtXnca3XA6kHNqAwAFwkkn5nnRcBoPPNy3LDTMHVgbzNj6hxy14F9FGrixmT1Zy",
  "key17": "3gvSRyUymP6kMFu1mTrKnjdRUJwxytt9fKo78tiBs1RCdEaKWdqtCNfij3CFJDsWb9uXPNWw6GYZMtrhZqJiWvKR",
  "key18": "ERcEWeJ9Q9chGL7xfQGpQmMGqovNskE8nDgr6U4wunD8JjqtrNSwNVDZBMBQdFzfzbVyqNH2eeTRnCssqXG55nV",
  "key19": "cDwMdutmLv1Qdg6uJfbMbdZLjFLstXjFGqb1LRLRrgL3LBPr9P9pFTrRZ3rhA6MQnGeuC6mGAgwAoCNpkfRxXJn",
  "key20": "3BTf9N5x5TJrsHfkLyw7u8ZRVqyPZZZPn8TwkMj3NdiXRLSwfmGBH7SNovv9aW3AkDndA7xYdcVzrUSXdKMLGxej",
  "key21": "3bYd2YMKwHexLrCtWnDUvsZHejZAG1GrKgt92n3kw8VcP12uayvh9FUEJvnpxyDpFufnZs33LV2RMcHqdBtEJNp9",
  "key22": "3fqx3xmuvvvzfbQWyaYR2QgkcBHEbhrMzrbWVsyMBSvKszs8UQbJ5arGED3rXumhxmeFN1gXqaBacrdH1Rd1KGj",
  "key23": "5xbeNzzt9dbjR9K7nxTrh61RkH2qPiKGgUwcL9XbuF7akrWyBfqoEmz9nwMXRLRAKPWJ6kCa3XP1AaWSkF7F9hb",
  "key24": "591m8tHUWLibaoeNkF2y595fqFq3yKiLTGtFUQS5CcEMvEWDamogMfGiRV5Kbjujam4hLUf9La8RsHJfmVtedPJf"
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
