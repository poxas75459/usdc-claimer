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
    "5cmWM7odAJkfUn5RG7dMidsWCJt7w6ie5JSuptGFiMwEuukxxArSjyC7mHoLQJNrNXUPNKCWJw6zg2RZ1B4GJuez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Kjt11Js8EpARwqXe6JrAZNow1M9Sn1sDe2sCD56teUNHPVksPmHDqv4orUGzMbFg6iYvFzpRnHotYMhy8SpkJtu",
  "key1": "5mPsBh5ei7R7xc3LxBvwwnF993M6Q1ZfuDfjPBdq5wrKWAQ9BMVuFd4a7qRtffznXXiA44HEshhGaWFw6vEzaPq5",
  "key2": "58N3fiACJQYnMp4pnepb3qPKepZfQoGiULRPj7EdNXQhc5yM2crkcJsFVeZ96NWbMpbZ7t1KzLS6XBYSJU9mevyw",
  "key3": "556hAvQVhowypWQBMUjdUyAn9be1ThvgcdsEH4Vgmn6u8V1DqqLNVqb4zXPGFBJdh5dziHbfFzCFPgTkEAM7wnkZ",
  "key4": "65kC4sSctAcCR2S2kcJNMfnNBt5EewkE21iPsnYeYu3xRZZESXp8vAGWd3rrq21NzVeVpUhyVnQyodFLXhEKtRNb",
  "key5": "4ALhhLvVgcscCZ3U1Y6kcRLDoivzUQEshSwtJurE4smrKra7YN1Rp77z9QpnZX82tncDdQXN9HyGMRq5AgV569Sc",
  "key6": "q6CD7L5sMqLdvNbkCN2pXdf1WHCd41pAWa2RVtWXtQ1TVvKyAvSiY21KRFK8BzCtF4h1rXgdj1gVC7VbMAeZxdb",
  "key7": "3UBXrdVM8b3D6crXw9yiu1P6dAe4pvpYac53oMZe9aakvurD9JtwaRe8fbBmEn8pEffuFR4qABjPrJdMgVKLKsnM",
  "key8": "3QFgNZUR7foaR4y4bNEvgSNL61efqk6KmqEo2Bk9U4hp71MtjHA6tszWyMDGwxwG9EcQgK9Wmtff5ucX4g8kYPp2",
  "key9": "VAJa1VjRmgUFHNEfEKCC25wt5jJqGRdPsCincn9M1Eewm1vBjonfD3RiMuuiVNaSseCNGTVQi63zyn9TaWxHGHm",
  "key10": "iJcgZBvRi2DZf2Jjwe5NVw9jVLjrtgEv3TaLdfwHsxpruMVjDdHocJTw67BMWu41UQUn1uCfegh7Za37BdXEmuz",
  "key11": "2sDrNqUXiVfi2Q9xJ3F3CpS4C3sALYRZ3XDRjkczhQMA5Cku638mXpZwiKH8EzSJdYpdZv4gDoqNuzbBZ3doTLye",
  "key12": "BXnMgRXNdmbFwD1Pg38SEg9dUkcHZMUGjT7tfhhoKWwgr4wZpmPVzzA7TUq7Mgs99WaXHKDYNxockUcbTzXzyS4",
  "key13": "38MmhPJcwzNWkuyjhKavarU31SASUW3M9iY7eYxEaQKTttTQXAqb8m5iFpKXGb3h2MHyFc6AgPzhXTbHWXb2Gbnv",
  "key14": "2HwEj7faGcwcSfactmWFVoTvkJkEXdLjvTGqjrxfaryZcMgBjxNJdu8bwsCVLPej2V5cNBjEjtySNaHi4phdsqjf",
  "key15": "3DwGxobbTJS9WfgREAY5THgDF3jgmhe7qhavTMUtobjkSuB3xhAKGigFPCqzhttKVhJQqvrKrw5hinHfRktPoVUG",
  "key16": "r6qRRJc1YVLRbT4F5YeYiCac3ZVH22PdJzuPXGsVwy547BGZ8eeQZv43nB2csEG8Q1bm7wgR4TMoDZoWGhUQCu1",
  "key17": "3k6izXhijGT2nbvL6x61T92A6fh628uHmX6pwRL48TcyT66ydSegvmdSC8ZWSk6n6WzEaUbqnwZXFxopgZ1MSNyt",
  "key18": "5Ex3ysRuXnBHShh8f2ard5pi74fJnXr67ZeViqgAC5xjgsPyEQqNVxkN3xtuhNFKAg3HbKxkrpEVt9zem1nbbq2K",
  "key19": "hPA3K8TeZKPFEwgXjnLpeJ2EeCdStmQ7uXPWiwNuytmufTgiAbDZCbEiGTu5qZdRuiR3K62VFAehqG1LhX2HcWM",
  "key20": "QoCVUgDWued6bdEQgiVYMPRrwiH1LsASJibmFmEozEh3Whvfi7hTZhp9Akj3Mdb42xi83Y9HusjCJ3SgRHvaLe6",
  "key21": "2Y1YCSruSLejNXaHrWB63KYHCnqcz4eJL7eCH97nWPXypSZtgTNfkNAzHgMPeQ6xvgt41BxaKRWvtRK2hraJ4i7v",
  "key22": "TUvwNDXRdWgwq3dyDZc4zaggFZnFzwk3AHT2Cr8QQKjzqAPSiHPc4HxzcyHkVKjK2yKf4Rafaadscu8K1x8MwV2",
  "key23": "Wq5G8AcbuojjUgMCqUGV6D79dSBn6c13KjRk6xDa4ZvEGwNGpHJr3dtffXdR78PESBA1Noz16PBf8Df7cnL8Wy7",
  "key24": "5AZXWN7gSNLQfPdb73ft812sqHrVw8Nbfs4suYzyDqAyWpJaWjuKqgLLVnSMNzbyWk2LiiFfwHvAvmeYpwSYFPjx",
  "key25": "5DhwDLhtDreCq82HKWiKeFGTvfLZYGr7EsEiwBV18wMFkTxy35euExqB5yQ4vHJde4Y4GZemAGeJYpBB43w9HA4i",
  "key26": "4AHQc5RWqEwaJoSPhg4UuXNQZJfFTVqSYu4RhYajmmiz6oSnVc5xkFSZUrASzoJnQGNuTTA76AmYRa8RpxxDbrtD"
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
