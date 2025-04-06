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
    "443wQcJvQ5R9MVjN2STJzofEr5Gfv9CfXvMoRDj8jjmLGSCyPt9pZyaXgatiDvpVPqPFZkhWxKkxCezLZruZbP94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cHYkoC3Kdm99hbMf9mHv7c6bimL4Nd3eZhKoF5a4pnGwAxK3MPm7ksToLKqEqFaTTbxzB8XVQHDX2j7qDLnLEHw",
  "key1": "31nRkAALB8a8VdTsxHNxP8BTXHp9Cnk2QK7TsgSkunL7JGYD7BKUCjj68zUSKq9TmZe9vgGa7UCt8CJCqBrJ4kRY",
  "key2": "3gfUr4ekYepdy59XX77dsDpL1fKPMNdt5CAKinj5m3N7FM6tSg5UBEsvUmkqhgfZDGfiJfZaHqupAWiejWGM2t4Z",
  "key3": "5mq54tTGqbCFMKjuFxoLYpoxi7juLEymp2NXov3QTBHsesnYrhNkaJXnZ9FHm14hXqocKYM6PieoNRBwMZB6saAd",
  "key4": "4m8TKCvDhzf6YFnaNSHz6j62fduADWrsjzz4gCX8ojSH3prXbEfkp5XcVCjeCz1vBYn9FN4rXYBETiHp9CGjbuGi",
  "key5": "3bBP5iCh7ed5w3ZEZa7nwzFtDMkRhPhXRAYvdSpKYg7EmopwcWBnPw7pCYzPY2jQS2i9xbB1sDu3NWPdpDgVcgWX",
  "key6": "33xfRAkpSrYhaQug8ffnviH2ywLXTmSJrwi77FoFpaPBmgnxRvn5CxENigknEmtXp41ouRjyWyB3t8MBrVt22upA",
  "key7": "4XKMsoEuAcMBHba9yjRrkpQVKbhi3rN6CBnoWzismTbr6otbCDgXUpF6MoFP2m8KjCT1r5GdSvoPuPNy8y7uUBkH",
  "key8": "R5E9kgjk1VEZgaSRArNca7oEQ3vKLa1uuweTWpzvjnvHq3sTmkEc5P75zypi9UEtJcd431J9oVGjgDYy6brFuQJ",
  "key9": "3kVf5HGwWeSQi7RvjFm7YnBqYHHo9xqshoYMEXRuN43hByHbbQjW6QXpGBrpTN2bqCksupV94PTE8fZdoqoDj7hG",
  "key10": "3u8XwXRpcGcvUBCAtUNBGFqWnajh6Xyf5mXwNuguF1vCPYWTudeA4BtzwL1yoLcX1UnLRSnUXQnpCjzV2fPrfAvA",
  "key11": "2boxtV8fkMYHgNPfbmWYEw6ZjdqSzwAXWquswVEoFwm4gHP84yDb3v7R9YhDkH7gaFbox9KG9sDeMhWDJf7gh1Dj",
  "key12": "3p5KxrveGzarxsNfmTuFv8AvfFF6GbzEVTo5faDH2gEcFouQms8Y4ZnWRepYFtpScmWBt7T8NygMaKKzuZ5TTWiV",
  "key13": "59UMyuFiCTd31FfCpTGXuG2MK5D3iRjNSZrAgnQhS4oQA6WYjHoSupa3RyUeqhPqV8mYTiCKRprtrt2ZYihQdjuM",
  "key14": "39s3ngdTgrwSBCxaQboQkuoa5jeyDJtSEKbqJXgeZGDhehpN8vxzqG45Zws6qhYXSFiDL6zmZzbFAudAgT35Mqjg",
  "key15": "2V8SwTL6jLCe65xuAKUTPEHf85SMN3FDKV8nPKvdZBr9LY6zcGLaJV4FGE1mcE2nzpU3NPBZkyssa9RRChu5UCtT",
  "key16": "2S2yXpzBNSwSC3mZaJMaVrqbPHFUWtsgYSVobL75pnAp9ed6R19hpLYhhyLZrdXeiEziRGtkC1Mcic9Rb4pt1Eog",
  "key17": "2DGbzxUQS3VKvX1eRW4qC6YBM9RrNdxHmfyfdmRsQcnwxX48wjhW7wcmG8FcWC4GUPa1Yg5ui7Qv666aKKSqm9s5",
  "key18": "TjtM5JYCdUcJeYQXrbo3b6KaZEjVhZmhPj47GxxqqzBBKqgZczST8psw7t1Cr4kXMXcDycuo9FenBnMKYefgptV",
  "key19": "4syee3apfhSer1ZHi8WxAVomDo4mKQeJWPURF1JDfBneJyLvJUjtsQWZfjsuiNEnwPa8Rzf8AwuV84irRHuf1iFr",
  "key20": "2WPAjxeJFDk6jwgVApmFbyZZwe1238fSoN3jytdt1TE8HBXBV5Z7D43Sfhuww5rQTisfZyAHye6F84R9VimM3DGB",
  "key21": "5ntBWHVrGLr9A9cmwW5HXEHHk3C8uZc8WNvRXCdyv3NCQTHfbwVvG5w2jZBxock3XMXqHQjd6mE75o5C7D7YKsWT",
  "key22": "3xctMvzs8h77HX12tpj5QhZ1VgyrtfdKKuSgxmNimTogx7ApmmnvtCFnLKKm2yyoS7fMvcwansdDYF32XFP1K2mC",
  "key23": "5pQCaLPhtPyaT1BB7XMKeb42eMUEQgpg8ThQ6YYDiPAJ7AimAB9YuKJgoM18pEajdzFMDvCq6rWkrmX3ro1cAggS",
  "key24": "5qdRA9cphcu775X8Asgpgo7dLbBZG9k1qVVkMyxj12Q5RPRuHtyEugAF8JPuZMMntnVwGxHXxtyr46BmJ1QaB8a2",
  "key25": "29UmgJFEGc5PmKWacSngUwFKJQiGr3XSCJFwnbPUR9b9SAecEPXu3E2o4SuS8Ze4P5Sx9WeVwwFwmqx1YUXmpQ4R",
  "key26": "2zDGZQHf4kijXhZjQFVNXVo1PvBeqhLaWavE9X5LZUbqVCavV976zwN2Hq7SHjaoHqwhm9joWYAzrrLNtB9BLjLr",
  "key27": "5e7JkMTvXKywscpyvaZqPtiCvydxVBFd9XVyBD8wu988NtApvckY8fNLFMEE5Fgt2BfL5EortFuxG2FQ34nFJKfZ",
  "key28": "7iL3KvJD2GduSe31vVG8BmNn9SaczANWyEcWFiVsebfVU8XvKn1iHnmk8MoUX9yNicApQiiVNDkMQuZ4Wp9r39c",
  "key29": "57hh96K8kYs6jdCXBRStPg2diA3nGeczvAwC9KCJQuLdPpTyHyRuatQwMcdqE5NTt75UTfgzYG78NqN3oDqh1ufh",
  "key30": "3dJ9A9qxmpaXGDX1C8xQQg2TcvYiFkrteq43Tojrq5ckvL8bv2NEHS8h2Cyv7n6YbgpH9skGUYBJL9D4reTKGS9t",
  "key31": "2aVzDtwWZgrN3T7MxjzdorodVYB82GnpVEHHJiNBhF2nnNRUaWNcuNDvG7Z7X3R9NeSxbKpnndsqF6SK9uj6aWQ5",
  "key32": "2ZuiKTEVzZkb7EvEBYCQyBnqEPJ8kR4wKYz9C6RmCcJRp48swvmkzW7ZjRebcvF2Hef83D9j9KAAPJGxqdWLZD34"
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
