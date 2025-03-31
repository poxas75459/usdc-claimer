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
    "2gYsvZPm2VLmq3pYoKtg2Ld8T6HhHtYnGakXh6PDvv9qa2MbiEhakLgBJEQBeaTG7oLBUK2VkCYKFmept1EvHzqa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tty3MbHLmbMDJyF5QhmBT7T1g7fdtwLor96JZz2yz7bGJ5abGqkhxR9fr87h21QUPhi3Nx3QJTa7DwjbfiG5Rns",
  "key1": "2N9JRSh7wAUAX9aEwTgCqW4opbdH9Jtgz5hcak9PGhQAc8y3W9NDpGFJxTyaV1PikQzDZV7hVza8suhcdcXA31UF",
  "key2": "5YACBXm4EcvyqS8RgKh1jK5NSkuncjxgmTooevZwqa2q67unnsFWTZAgwVquZ5V1zbhBVbQ5JCHq9vqtY6c23AYW",
  "key3": "4HpMvwEw1E7XHp5dU36Dpd4PiNdMpDxGSJQwSwhmah6NoSSStCpkRGBHYnxgNmJ1r9pbhMr93aHmWfHCFfPc6tbi",
  "key4": "5o3SaKKEWKk4CmZSn3JEmHANGvjy3YNxq5pcJdGwYRwhRVZuNhirZY4YcL66u6G59c5Hb3C2SfGSdZuFG6PfebqX",
  "key5": "YMkVsVp54skgKwbajLaeNLU4i955hDnbLKnbGH8gLWkbn7iZ7MHx4QhK5e5Z5x4AZE4bAb61xdzJyqrbdL8kGAB",
  "key6": "5qxGnM78M4aMZWFo6KWBiCGmDSf6ea4cMXX7FUeHxaFkW8oG4TsacqEvXet6JztC5QjFoabGERjn9mkYyr415uzd",
  "key7": "MxcvaEC6VkjeyCnXTadiPgK6Jnv6Lw3539GnKGGhUcDVCAApdVgUzNYt39yeaAZ32ja2aqSFn5sh6HXJUDhVnLi",
  "key8": "4eszsustu5WkQ7F9ixBtptBTLeufjzKB4uzDBn5jrsqV9wkKJ2RgYVNCa7pmz5ZZRCBXmhDARuFhP7ggtWt5pje1",
  "key9": "4JZ3vAXQyAyspbTGdsMh7tHKin9GdMiQzV8L3ACyDTyqr4apD12ZqBBbE7GQZBmEgzdzMSz4FJHusKCnNerWpRN7",
  "key10": "3aPPCNMvxhFiQ44JSMdWpsuBqB5if5hN8r41gFqMjTqt7hkUHuzVsCh8cxG8wy7mSE3H45bNbg51XpeLeqE1Wqib",
  "key11": "2ZTPsmKyrT9Ttbg8zrnWLvbSpgWXjYbvL3z41dCXt97rBsuRQbHoNzTNTkniguedPhGDZnoLsbs5jQ4JSqFWXJvR",
  "key12": "4caNdSAHyjbHeYocxdamFXhx4DvvnWvqeMeW3prgBX66EpwYxzEfE22ecsZMPL5pe7ZvHWURnxLydEdR63kESH6S",
  "key13": "4TuY8yCzbJqyXNkjrBNnTiG4km7MRU5rw7Z8Mnu5qhHJYYZmaymtoYpen3uswsXXjFQU9t5K3x5pqjkQkX1HdDEa",
  "key14": "67W9MT6t2aLuyWukT8zuKvHBJ6i15pKSUzzJVHcSdsYZnT9r2EpdEPNXTqkSkwDcaz9RHbxz3TDsYkYa7m6e3d6i",
  "key15": "2QHoPEKP85vyYpYjUArwPaW89C2xedGy8RorEkqozUjkRykGSxU76ig1a68yjC9RCqRyzpMbXMhVB9mDNBqJ4YRR",
  "key16": "3V2B6fArfjtMzg5dFRxc6Y4bDsPTXJH3WpvKj7wTTCsJ7WWdwoSeWr82a93UL9p3Q2zxyS1geLw8RsVFzKVkxatY",
  "key17": "21mcxyLVTeUJugYwVte83mhsnYVdoRacnoMCfsKMtYD5cCkVYSUJAJQ32WAn2A9XHWcQmHw2Lv7Q9PUTpNMAbeLo",
  "key18": "3jREJj7sVDHDHzSpiZ8XuCBmwK3wKro19WBe7pEDkRmBueGudAAMFSLoJZhgte57Y76BZwTe4Y6UkwyDLJMJD3GD",
  "key19": "3jEx4LxjeMuwRnFjooet2mSMDcysgo7pnNXxepiDqVwL1c3yV4ginmzygGCnpKT4Tpw3sjDVAajCaMyKmTZqM5WU",
  "key20": "5prvg7tm5z6Dah67vmvJ9ops9QFpbEMapm3EgDSHRyWManCpNdvnWhUm9r3go26qMqDHH9nstFXFcLUDFZw8ViZQ",
  "key21": "3iRH2hqHSE3MKzRfsr5gJZT3e91DPG5LTme9Ni9J3zAt6RvcvDABWkiAotf4SnbBhYVFpDW72Ag5JgG1PMZoS1XJ",
  "key22": "ukW7k7orrLpByQybfCdHu2XmYT6hMT4V9cqaHKe4jondngByzx1WfdeSxFwNfNFG6DquhtCi1Qa76n7WRzgBsyA",
  "key23": "2ew2qWnY5fJBow2mZgcoNWxwk5RHfRgCbWwetoYwuwZWaTvwHi8DbMETVd55pWiiPnttYNwPhj3yg5pFsrJKi8CQ",
  "key24": "3W5vDG7o9wQjDv1RrqYNa27y29aqCRvv44xRgKmDthzQdua17sELHcV7tpRJZXPofKpSuyfnX3m3Jwkpm6tXaAif",
  "key25": "24XKWMfsWs5mByazw4571FSMQWHFbXKCVNnhujTmtZshy6CxDu5xMCKFTmrPo9J3kkcYkFQkdgXuBJo8FN1siu9P",
  "key26": "KG7oMj7P5fozhab2bprKTjHLovAVwSaysJfVk1GMHEkTspco7s634nqsBTMXHxethufBJ2scx32uVK5C8sWSMfy",
  "key27": "2qHwLNUaffPRA5ehFzeVPBnuZXbo6oPGKK2XwypUYQ8ft8YheC6p3PBJCE3abefhvTJpV8pTVG8xtvk1E2WFEsT",
  "key28": "2C4csnvLMstjhMCrzSEd8LfrdsHk2kFainx5TKyqshSewW6FDQdnhR4RV7mSkBxdqYzdH8PWCCS319UxHAWJnzgz",
  "key29": "5ALY6LLi6L1v9yxswiYyxxnHnDAP3hi2N1f5ygrQRWYueUAAnp3rD4pGMAsH9KnPP5hxLNYP23C8TojMsSX6myzQ",
  "key30": "2JX2PQqER2B5kAaLjf7GEkwSgohKqL3gMadzdQmtXfKFXx57d9UaF8BHLGT4CncztXxsdNEoC1VU3NdKpLVPVZS2",
  "key31": "3FWQKM59TFcrD3MfaybAreMdhaav7opWQ9u7KgK8zXLWReSrkXkwXvs4Pp1dJRhFXP4NYxi9HuA5BubdayLrYLqR",
  "key32": "4ZoVvd9Aa1FbdscfsFjVzGJUBZ1Mr24PWf8PXGW91ud6h1WBH22q4R1ZUbfabebtDX3J2uSrPuTLdtKZUxXxo8Ey",
  "key33": "4PGKHwniuGczfEoWVFAnALH3Eyo3WzsXbmReFKkTPoaVd2woCUpegJwSHKM7uwMukkYfG8pRvyb1CmQKvy8bPcD7"
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
