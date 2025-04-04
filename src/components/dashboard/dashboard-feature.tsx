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
    "whrCQZHj3cw4ofXEGcv9KnexvD1Ajgi8HyhpjWEogdsgTW4ypZRiGrY11E5tYzB2vjBcFHniVJG7KV6VmnEb16n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WJS1ivYHXxxJbcQaoukZGKUFUPbXVwPjY7cpZrjzQ5jhHhsc5tVsfTjEB4aew9dkGrqn6zdmVcyUM8TYCMwqEAE",
  "key1": "35toV3Db2rBCz2LvtwWGtvit1LLT6bA2jkZtFB32Wzg2NWDbCrFEKq7JAdSHGbkpKMW3jJ2jRv6AxRYkzWURMfBn",
  "key2": "HmFoxtim2zdBz39TBUDq7yp8Dfm4FVMUuMNmRUYdp4AoXjDUS493R3hcJdozJ866yttjS8CsRsDEgWsow4ghYDi",
  "key3": "wF1TdBUw3hE2bMxC27UbsP9axrC5qevRJFkezSRpSvfxpNpog9ps5XNafyj8TkKkEKLAej714dghs61E391h5p3",
  "key4": "2uhe1ABcAKaQUn4gb3f8nri2kzQPKoaAExQDAMYR9cPQjzKkCfgypD6CZpzc3eeesqLmA3TkmchfVU2GmuvczMVH",
  "key5": "2gUPWUSTsS64Xxi3HATBRVadnJ4AiCohnJzgnzyVpKgiEYHdwDQWvMW3jxoEThnd9UsrQFRJpiQhY2BgFJxWsfe3",
  "key6": "f8E7zJxenzw6ipGsws2vijMWGK2gJW9XMpjJZqg6DVC1vFQASjeuyhEbLNhDnFeSpiWzBkdsdPaSoqaNTrMTpeM",
  "key7": "5xKMSSpDM874ui6F5To7GGA9NwNdxgDF5cYae6M2ZmEgdnP9wu3V9m6kgkKd5NbT6CsRSfwsgjHk98VRDVXkzyjW",
  "key8": "36WinzpUbei4Q3tV9GfP6MunHjbcLAkSrMq9PWJT4raZUCyNNproCvoPtccj2cwMNQqbw8KSNqhhVrUwYzn6wJP5",
  "key9": "2mAt48J6tBkpuxuUR4J8Kzg7Z6Lpv6ngjdcDkRGkkxxqCqqhM5judtQvDMyBFfze5cGWsRgkPTnHqxsDC3KxxZ8b",
  "key10": "oTsAHu6EhUFv8LtWe15foTk8NoZLMnmFyb3fx8tBazZbQFyYpdHsXggZFNY7LNCL71iBDuKeVQ14UtTbWggZuhP",
  "key11": "56kwVj9PT6g47cTTGq7XxXzrYLjgJBVz4iJofzRwnyJhhddPc27GGhQ1u4mN45A1GJ5daK5pHE5bLMRBuXyPCzEq",
  "key12": "2jQFQZezhoKMK6R23p38Kzx8pesogRU3uYsoWpH5yTZgccN2ut29VWXk6SKt68LyQxK6ACfYHpV3361Yt3Dri4Zq",
  "key13": "2inJAnm5z3oD3B2pU195xUr1S39WwxpSGwU37EnsbDhKm2jHaRtE99GgHvCsJuuwofW2XqeePpJ4sbvtgSyHNxS5",
  "key14": "5pxMnfXrzovg6Uu6htHvgg2t7UQjU6MmDJVnSX47aHdMefB37CL4wJLFZ9NcDwCiFAzM5HkVjpQJShqH4M4iBq4B",
  "key15": "5nhEUEDPbq9ejgHK1pgPNcw8mPLZcqa2uxcLBZYck44GUZjshZ1wYCJnfy5YHxgJcEKMAy9KApaR7RVQwceQuio3",
  "key16": "34JC5Usvgi739XGtUYUJBZp9Aue5xAMUTcm4T9bbY3vwzN5yPyq1dgcfxuyPMQ9h8Csmy1FFCASWScYUJPtJJSBP",
  "key17": "5wTgYUgBUsE2zAVeQkDDLojfW81WRmMmxmxokngCcBrHzfTjASJXmMjdKGWY92cR9VZinuxzUjQJVdTGi9co4Chd",
  "key18": "323s1HtHMDKH7PwmRKzktjzvxTgVE1eSQqScdcGMxeSqJyvzAG6ezffYS8Q2MTKZ31GJVnTg5xnKwUcadWbo2Gc8",
  "key19": "2iFRmSep6pftHrAjCWadKguaD8x6iRozQ1gPQLVgptB7k4HRfha4Y9Mc8tSwpfr5b1CMmadH5rANCbPZassJYgPT",
  "key20": "22sd3TZAwApde43WA9aBuur6T7EByR2K1YkzJPEPKeBqd2SJ8hoPLQVtYdCGTunxnXpnQU6eugKPe7ZE3VgGK1Mr",
  "key21": "4NQ6q4BpNQq4ouHGnXiMCvGBNmVLDRbbMcVP684Vev8yuTG6vCy4HWvBLNGYMty6zbQfCVBDhDX6DdVWfp1TkbL7",
  "key22": "QmgHKYjv1wYd7E7S2uNfEQLRDnVHd6gMBgiD3R8mnu7JoRpCX5H8as3PLKRCU5r2jrwyaPU7k8fSVh6kZ9ZDo9k",
  "key23": "2FVtTkTiVoyD8b8bG9rAu7HGqcK7dqXfXtBYeLNsqTcwZJ5VjKyaMtan9ixNiuP6na6fiSY39GFvnNtqMh91eVMo",
  "key24": "Zt69N3WFoYzKvVMFddJ48trwwNSNx6NsnZTySb6Hu96oiT9YHDit22AfUQDiSQgneJzjQFDfGnP3WYQRjCYWzGj"
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
