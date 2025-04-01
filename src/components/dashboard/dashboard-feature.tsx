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
    "35asCaytEkmPd1ugxBxqPFyozo494DYZyAn1EgUqMg6N9QitcQWHmQK3UkBjvrABGSjLJAHzmRToncibb81vRdoS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dqwLLrXJ3EfhEXfV69BJYQ3HDpzsSNzZdYVTUb7iH8WmRpRMMDDfMCKZhDthz8pocPmicomd2g9PdPcy9FRUeqP",
  "key1": "3iRHcRuDgm19ZB1Uq3Jd68L1cBs4EUw6L5ZP9VycYi2FSm13G5GKpvHD4XpZmhRjA7YbNJTapuhpAmMBETWZpRJ",
  "key2": "5LAe25JGvZGB3ExK2VG7Y2c2RykJCmPjnCX1iNMiubmoNQVSKNKWVDLGRCL2HeUcRtoKnXb7SQiSBPWiVKzamWd6",
  "key3": "r7cGvucFaMuH2kxchzRv6XcZPkW8twT32yUACLTGmWxhDdpuTwWku9UtWbQ8qNjnsSKrufLojQYQBiQivY3NAag",
  "key4": "21cibFkUwc7EzdiA3aidYgX829QT8WjPtGnL4JJQDDU46kGoRJ2W7E3YfC27oURgJRZWDBMC7rj9gSS2h3iTNH3T",
  "key5": "gdUfh3RP2jX6uZQcZMd77gG2yS1VYpWtK82edm17ydqXBEWp2RwuDM6TdrVyDCg8cuF4vz7dirvbkGnNngfC9Q8",
  "key6": "3rXcnxNKtf5RqNVVeCrrXAR2pZVHKYuPLWBu3vziMmuMd4ceWzHmM4CFyQyqDAHzDRxa4xpiw99ZLfmfi4MDkcGg",
  "key7": "3FPVkakAU8ZjhGc3HRnsF8MUX3UC5m7hV4ohus3sA2GCpJDVQf5739kk9W5dt5EXXKCWgh4PPS3jAhgYFH1GEyoz",
  "key8": "5XWB5PKd5G36JHC1koszgfVvaWWM35YrzEehFeqdgidyQtTVnhi3LcJCx7G5C2gYQGr5c4yRxMHgmAJ7MQ3MHqvJ",
  "key9": "4VGAczmJiupfKUPe7g7gJacjqcwyofnygZjtDGxgJEfTwLgHXe3ubrKNv3S2D7LyHASPo4KfACoWzwCmtrEpQBsA",
  "key10": "bCMMB4bjCK1uHKbyeuPeG3WiByaj787JWU9uehvySXC2Dz3W5v19cx7zCxXpjSAmxyaqXR4bqACpvkFty3CgtDg",
  "key11": "2czDezS9TQQGkhTQLJyfUh5WnibTUEB4TQ2q6SRV8jr4njNMH7LC7RdVPnCym5vxQvQ7fSqw1nYdaVjXijzCHMFu",
  "key12": "26mJpRouEk7SjLRPqzUodWuSXHDXjFAZF7tJmozLmRwAnsFcDcxG4BYHa3H1uakDdg5UVrN3aLuZWxNGa7zAAuyr",
  "key13": "4tuhm971UTz9QeTAzLsUCEvUuc1iGNzJMoW6z6NXBsgZzqkznEVafdvMKos8rB8B3goyKBMvwejAxerpkDmyWYNM",
  "key14": "4ZRiBHFyMFxZgs23o8tFdUf5en2nA2s51mKzPZYD5GvsN2N3s1sHoMnESuvsdWD3S9sUbTyPHZUcb3NXaWUQYPmx",
  "key15": "22EAdW8Gy3MJ8PuBFAaF4VgjrkJf46RwdFYxtjS9KQuW63wLqokRP2KrjUmrug1EbswwtADdtJxMezNbA24JHixx",
  "key16": "2MR3VcSe7x897X9GmHbyewzEBhkNBssyTyR626FH6ZMmHBkUB3jkLo9RcmQdvSydQk6972cCpFvGSznQxBYHgjDY",
  "key17": "oURvUMRK6y93EVXzW3ucpw8xsUct8rNeqHV6ByctvwEExA1ENgobDKDcGzayxQQoKSs9c3KJsZ5q2XnTwaMtuxj",
  "key18": "gPubB6Ug3hcwxwxzJZztM7sYpb5D7pistzauBTf6kFimxoFk8MkHt5JXtanGnkeGr2ntqJBwMyh5L73yAvvERo3",
  "key19": "3GFbgPhCb9S2Tzcv4qZZskLie7nMbH6PXhxk3StXJpFwcymXdpfDoMzYkKS8vXnd37m8ng7kkM4AeiPmnqbvj76A",
  "key20": "4KTRzXpjvd1Aqk3mM8gazd8XfQ5aeutKuTpGdBMczRbbPJoJnUy55MhGX9QHg81zY7KpSFUkoPYF1xkFwgr1Q89d",
  "key21": "4hpPpFSxi7FUhyKHisFJDNUY2c44ZbC3vqZPHh3Qnzvj3hsLEkwToNFXVmkLJ5u2MNH1vKjVcsiZg9a26L2LodtP",
  "key22": "2sZtRrBSTxthyvofbmqDsHurS5Ypqaktugg2wSni46N35BPBgYbfneH162TgaXm4gsgNi7XxQGGXpYpr8YVBKHCK",
  "key23": "2CSCFZFL1uJk6aHXYu3kJsD1MbiakAY7X2ZQNHX4xVtdyLzgvFC6cv8cpZk622Nbt9yzm39awHvQwT7MFXjzojo5",
  "key24": "3WRWF8ddswZEmX1Xpqz7cvVgybZztyPqaqsF4qsEizJ2GkRjFLW6rXQy52wFdS1xN2xRmQ9jQr4zpnR2x4KQsoNi",
  "key25": "My1bHKfZyfT44N7945zpfrogwP8j1pMumHmHHbaeDZebxJJ4XAT1ecQUCgXeKNrpnZgxsrTtj1s7YHDySoXEnX8"
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
