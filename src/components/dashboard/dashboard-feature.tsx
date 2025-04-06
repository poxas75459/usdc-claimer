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
    "2VGvqWycMxeCogvn8qMTYpxZo5XBStfRiqq7xjM2TaHfuWPQGxPEmsWUzCCJWcBjJjbJZsHjzrJw5Zhzvz4ntGaY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tV4x3g5iBL9dGX8NYY1wHEUvWEB6hmGdZ1Lykc7oT71M3U6mmqwpXN96Z672xeE4QAv1pVB6XDzHqz1vJuNTfm8",
  "key1": "5q8XZZr5sYBxeAC5N7cDDtXb3uV5ViuGPYRnpZkJLTc3o9hUQ82FYy8xYiDEo9StAjwsZu6i5MbXUer19y2BBqyP",
  "key2": "NjbwstBzig56YMtKX2FXNTJBcBQYajvdSkSgEgRTW3PsW3Ci2aKxFpvSe4eEmqE9MWzm6h6novWeqAgTuNpcJzM",
  "key3": "2ZwFDX5ETXxZcV1dxaie7zXoVsmm2PPrdyzHkTbRYwGuBEMf7WTHf5YsC6xaARaWCWVYcVAtrwepZUhUribw4kVj",
  "key4": "38D4WWwsyG9rg6wV7J3mNcqzG3G2ABN2KGKYd2Df8qoCSn4wWmxq6MDEditumBQbiqttQfyhgpbNUrGqauRD6VQ6",
  "key5": "565Xt7gdbQoff6stdgZ1er7VxuxTugypSzpahTy7HS2imRcxFK4GSHhpvP4Y9uonbYRyPc3H6NB6BYMae8wuwft9",
  "key6": "4htCBMF4nHz4jp1FHKSn9W7fSda5ogBRVFinKxqxXiHfqjNp9eAVJap2hkNDEWtzd2jZDHptESHK4z5TvdJ2LcMM",
  "key7": "eUEx6ZbrSt2yGVkf9nsLZGaEx7y7DXGizLFvdbzMWKHUnWoTfwnkgY724fHjMuHS1tzdVnr2WyCwWDnrsqkVkLx",
  "key8": "2BoRQKqmE5c2p9AMX97bbkgfcYymLkNntMzHHjGiQUfZdpVuFEvECUAcpLS7qgkjxUhdAWaLfrRU2XeuQ6XNaHNL",
  "key9": "EJo9wyFp57yE1GyQU8FTepPNSsnic8bjXFVTdG6ALkK6sSUkkRSKhFii7omgXmxahp69MvKuqRn5W2xQ7wEvyZS",
  "key10": "3AWV8v13eDqDjfH2zkA7jnB3WQ3hyS3V6wM7rmgBckk2wZvdAMRDFsKT7nZCAZfeSDreBZpXnWsvFnvw71rCetRX",
  "key11": "wg8zvhgvJWtTiZLVbZomsyUJVHANvjP6jQqcb5tcrcSKtC3eFW2sZKKBVkCF7hTXzHibLAJ4FqymkD4iCqokqTw",
  "key12": "5zxEXFMDx6gzLzCHBTocvWGv8mco2fGLuEq9K7HRAuS8GUGqQkmdwYHJWAYMpgRCsiHwPVPLBFnRByTAxzLjeHkG",
  "key13": "2ygtWbkSDNgZcvTfVg5HNnS6hS7zeFDEoBGhNNmE7JoK8hzNV4VzMCSESKAV1263Q4FC2yQEMuJPZ6cmb74VMhrX",
  "key14": "4bYKenzhpQo6VajSjwrKUka3XCJ1jGfutFpqju3aBPvNZCcd1fXSjxB3U6td9H2jm4LpoqSXaNgbdY4GiGKJBVyr",
  "key15": "3u9FBSjSdWsz5ZyXBwnoYv7uWUWqricqrUCqxYky6NG5X6FMaNTAmfw5Kvo6jR9qf47jk2xpELcdhbLYB8AAeupU",
  "key16": "5Gqaeg4vQbdHkuJxb6oXAE9YMpbUbaB6KjjFtXDLhHcHMqKWeK4YTUTL8qhQHbbZwpGSdypnm8TbSCrjwk5SngH6",
  "key17": "23pTGqxvfDLh2Ppe8H5tc5TJqdWhE5jZzp1uDddad2ZhhJoMmBajEVu9HFFf9Csur9VP5GACHtPRAdyYhMfEc6c2",
  "key18": "3GoXTbrDNZviqzSVtqF6nbqK4seK4v4SfSM1v17DS45CGqSfzkUfipzAnE87jUBPGxTJYVDjSfQVSiET14WoRJXV",
  "key19": "5HWDb6iAaPpAacfNWwSMMnmPYyuhDPaWouEX63f1NmVjcFXfSpsc6JmP8Em9pFPrLxmiQYryPm4ZL9hpshoTYYcu",
  "key20": "Sb8Y64k5LDGzeS9ybs87a9mRpfBgCpcEvB1NEh4LWj3fEfRdVjRgsxSbZiSLvRBczPTddYjKB2uVmz4WyZD7ekV",
  "key21": "3LeqnWZvgA4W6quFnRKDR9jcGyJRp4xKjnfwJ93VjisE8jNGnBEpk5AtZ9am8b3XTM2rw3DNV6Bsiirvu8pQhEHe",
  "key22": "4tbUYBACK9xsXdusfNZrCkybh7UpKvKh3Jxug5wbrJEbFMSSjyTAFHCgWaQ55tRZVUq3PZkxNz7iTFgph5Gi5yYr",
  "key23": "5pw4kwCR3CYNw5xmskNFsgnLSMaJ3GfjK2aE4VQmLbYUhZkCcU9E9qWZNx1s7YoyR73omKzaEiCzokycezzVw8jG",
  "key24": "53B6NrLP8ixBkAAn3hXmJmoXTZpXiyRqoXDY7qr5Re84gZV2iPb86tf7fsksuSZFVqDrcLsitKUNaDYQCgeBbFY",
  "key25": "Q16xgFbW5v24BAN5xEJB46fAna38gtvpvCYH9Nb7fHrqMMsvxvCd1AiX2QG59NscCctLXt5LpMGTjAVsULRicCA",
  "key26": "2Q46Aw1uBVQCxLMkXErXNjERqDLN7ycpxumtsBwzPtRN6kQeNpamvzDJn2nN4WBHG9gDyQVkKHEWPwk82MESHWM8",
  "key27": "hALATxCHNHMCu922ezJtrgFRHFo1Jmfa4QnaLkua7SuvUZmeigE9LfrfZjyFnoCqzx3yRz13uc9vvoBWvishAoS",
  "key28": "3LYUrzKSRZjLq48PR881qp1Ro7dzdpbfkyHroyYspXTXdwHjeHabWMUGpnhxCNJqD7BbYe8QEY5x11iRn53krjF4",
  "key29": "adEV8FKJNi4ZSwb6f7UWGKNNagusymsTr8BgHQj8jN8nrDVxUsQg2LjARmT4x3wrxKSMTiYFvvADVwRDeAwQXUT",
  "key30": "4ayzA4Yy4NmbmBHGyMaeu9qhTe7krHbLo4psMuANGAgAHcdWzdfbDUagy3WmaPZn3WdaEz6caC6r1Bwcp6bj8xFi",
  "key31": "2UZY8WXj2jkk7FEb4DiRYyLczRsi9vwogmnKu9GhDzftwn2dkBB1522vHkesMrfo7ipomLZNQh3tXRUfaxCWbXcV",
  "key32": "4bVVwWHDexZFERX67zMK8QNgmxeY65UvpUACs6yi7w8jnF8SLv9gxo9EDk32LbEToHarHQniCVkeHfgxcAHuoktd",
  "key33": "3ZJr8N1xyzCGEJDU3hdwNMSFwZokfJayPzQ4CNn877ArKAwq8iuXmuHqg6jTLWeVfUtDWQJaiAiZMJAtmJVABMJ1",
  "key34": "mUuTPaSPndvTMPTRHXf3eRPaVPDJ8ar1E8eNdRisVWfoupx2R2dMthppPzDsBjYt29btuUbNwsgte7Anm6v3tRd",
  "key35": "2Ah8WtqA1yNCNFsTPnhgbGWuoq9QKMgoaS9UrbRcaJAYWTWncqYQBt8JKYP3N8xmprZ6A85n8S5J8fEuxnuduFmG",
  "key36": "4t1TAc8r5bu4ndpZwcyn9Ho1WkLSM9g1sPRhc9EfPsxBisEJSxBbEGygvrq4WPv6Pw84E4v25oCeWhm19CDhCjZE",
  "key37": "4zQQit525hr7EfR6thCrxMuGmNXADwxocrWwVe29r21HajtWwbxyT2Gv2QbPxYKbEuaBjKnjywmhhkYnvdSfp83u",
  "key38": "5bkgJMxMcavsXE8eCLX3B2YsGeDwQu364iQ62K8DfYRAUVouxQgR7CPuKvx9bHkQWpbaYyXoBzYLYTFciRz8sF9a",
  "key39": "3GgpfgfUWmP67amVRqQzdFF4KVEzyLuKwgGzion3t7D5LGpA6iZYNDY8umVmHr6QZ3ENGZikLk3uA9s8y6uwCkVZ",
  "key40": "5oWaQRC5wHuvNwBeFBEMcFwKWJjcBacW8muBgDgQ4roCmBANU3gyXcUzvxcu7gEsVvtxckB1R515WuWk2nuRx4bB",
  "key41": "3Y3TuhZdPE8s9D2rsKVK5BhYcXJ56XJDg1KjfcNnxiixNb36oR8ToXkx6A5kgSxXjMyNtuGYoJzR85DLdH2r1TXL",
  "key42": "3ohX9xu8VPK7hW9MsmE11o7xPLvCBGgkygH7PUi9QYRuwELg6qmJmPAhQDrmdHzRAK5Lx8fz7dQtAKxH7AT83Nwu",
  "key43": "3xPGDZKfrnd2JDBmWUr6uH69MCC5rfHdKbj8X591GEZuyAUkcGJ4ttnc7seNQLL2YmCkuFKnEYEXANYqKAV8pkq8",
  "key44": "5HrSS189iJ2FVfHn1mPTGbe8aqEmD88Ku86XPJgxyT8BjxsMqJNushFEZvbafuvDKuorhMWupYYXZ5dQhkNTi4Cj",
  "key45": "62ivepHnZ9Ak9wWZ1nyoVrxYZDjPYgLQ7BXgp5Y45Ws8QfnGBB2vhMkEJWLSbp1cJQq7hHHNcjffvbWn6KHF3kiW",
  "key46": "s5CNvVMvRw4qAiWVncwqahu9LRUmVT5NKscRZ8aV1dZoyj7aGsbeiWZAiAkvSmJGzosxMRnn5DsjmLVfudTgAjg",
  "key47": "4wPqQpJHoxRvAoNKDHQaeLhjqGkoi8C58iC8wKoNpceRPsfUSmBEhQkwTp5nhwgtEBDQr8LxaBdxbh9iswvdBxdG",
  "key48": "WgpX5kGS7KvonzKVuesy5ouYvt7oZVpUDGKjPN98eoDcz2dyBWk7BzSpEqDcRkTqPNfAQz2Q7EPkjv1yq71FGGq"
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
