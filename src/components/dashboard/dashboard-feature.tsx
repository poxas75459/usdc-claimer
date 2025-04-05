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
    "J3xdR5d7yuA5Dv6UHeCcLCyakNto8Jm4YXUt9afaegy1SCiUmjQe5UQsQFnqpAaAaWSedJ5fw31hevevZqgQ7Po"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TAva5zfxLck5EhSCx5ea4oPpNEcuddT5EQ1tJagm8ZqD7W3tQH8souGeNjokAxAfvCA9ybWMM7sBe66P4rkR5aH",
  "key1": "2FJuHPDCPaG48VyXT7USmTbenU2do4GqY2oSjpygSjST29LwS7t7TtmjZWLuo1P8idzfZ3KQHQgqLpbV2TMJHpRs",
  "key2": "TY77B1BHsCXufRDD2GvhQqnxjgJjRF5fEushXYRqeB8HGfAYXjqCs6S9mMPE4wEzidKKstP5bHr46gsus7FHZmx",
  "key3": "gP3YGz2qkV44oNXU3U2ZgMxZKG4raVcjoYQzNeR7DdTK4HRDCzjMQ2PpKDCMAaKoKxWPFSF23PMbYxRh7eMoKrS",
  "key4": "4XvCzQjNiQqDMgKs2hbRDA1QUkPrbK3hHwzrsRSVm1YvNnjLGH82JbZDLWkKcts7rZfUdAXQWHHfdU32Xnmg3rna",
  "key5": "2ZBWmFH545t8YuZXL6pE2r8Ry49CQoqADMk59iJ6N2u6UubCBhXko7G6M5qPzzvpzRzHpPqEkEow1AswfEpvkX3X",
  "key6": "2ToGx47KcLaTURAUnVt9qaypU9JnaWhmcEYSnNLn3dt7L3HC5C15aqnTfjkv8ikgGbK8K2iUWSbkbDHTaCg3cMGA",
  "key7": "3AkyJmshkXSBL7S5f2uDWHK7Hm4Gi7dxErPUh7YCEbr8TNKmW2JepByvS91gxN6EcrqQ8nNMzhKUqx6mwX3q98hr",
  "key8": "2n3bN537KkZnhurpVkSKwLhSZmisDUNSrTk2ZoQuJxZTw3iJip1aFqQuZQJuwjLCEhDEYLXfBX91esRLb4zfjUcE",
  "key9": "48PJs21Dr8DapT9RBiGqAkZLb9vTFLpJi6gk2TnmmpBtefzzQH2dS9HsX8H5binbfrZvpgczwmiZtSH2QCzYmxYD",
  "key10": "4dziU5TbdknTL3isKPtDNvMEvTWhKpduLe3NRHrrPv9sqStBZZtmtmsAKA5sJhwNsqVGfKAgqdnWeZS1NiREdXJn",
  "key11": "4nE4Rzp25Q4jTFCBQMNhSPJ8o2Qif788woJnTBf4gPtHWgS5rwwofdnHq5snYKpm3GEhmU7hseCpENRKQtDewKW1",
  "key12": "3JUUhLhccn15wqqJ9cRGhu2TeiT85XEseipSXr7X3UMuuoGoTF6AZwRTknEDJbYUTWUCJ7JYUkyLpsVXdaWT45U9",
  "key13": "3YoehPkq5XeywPh5QcvssekpCsWJ2C8UJgmfsdq8XHvLvbuFMTW2tU6Q8iS1mbaNBJCxswspHThkKvteVrjkPPPg",
  "key14": "2ZiCKV5PFT1BKKkM6LTXWkD94WeNAijW3Xg3rvqerRNf2CfYCPspfP4nMSt1NGz8B6ztxVSRMBH6E1v9rYJ1jiBg",
  "key15": "4phZioCd37SwCzbjuuKjqb6QhLLu6osVeT2LCWcx1Uw6jzprhByKRi6CrgA5Gt6sPyNHiRdeabr4v2vk7jhoTJR",
  "key16": "ckuy8SSdqpuoiLu9Xe4cA8kgGP3JNaeSRYnQKsuuTowjKQMtkgWbNZRngAJaG49VtwdZWJ5bmbzKYXteyonXU4X",
  "key17": "3CE57ibBHzL2HefeY8zXQCXCPt8ypxkwThJFUWkoyN1F4Pi9XayG6DFWH9uABR83fUVapCWpgagnfwraEQzAQHfP",
  "key18": "3TLdbD2bab5nDtVjo9ACxL8EEvdavxzwJ4Y88kavUV7pYPun2ZysWdMvCXtpzNKa94WoWKXguCWYTyzHmSKReJ9u",
  "key19": "RStyFD51kp3ZwhysEDGX5jrEEor5MkkwHnxyWShUmqoyLbHxN4ySxzoB2pFkuWYiVUEa3qCcxxz8T4f6iP4MiYj",
  "key20": "356YbgVHZXmFU5MzQhEriGtJeZPrSZQ13bUy3SRfJyJ5CaksPZ6GSnFgirVudR9rCpUNTiiG2UdB5XW2b57TPWsR",
  "key21": "2DCtH2hVEJd5hdFrPqisXmWCyBVdYd8hUjjhwqnhVHwRM7zskZb5YZzR13uSN1YYZLUimh8Fr8h3KZFVoaCQpAcf",
  "key22": "3sPDFckFoCwnC4bK8YSXv7dctGd2YR7UrB13EJ9tWq6EGjyVqiZMWWa83iCgTi31veX61HfNjEp67VpwknNjWLgP",
  "key23": "A8r2tNehiBZUH6m2Bq4pMBDyX4xTWqxMDyEEhr5UUtypKxYgZoCVehVNrmAEvgdkfi2gss3yoYYH4XahMnjfB7J",
  "key24": "3oYjyaht7GUuxEVo1T8fGSstYzAoJ1Hm4nd4tk1LDh4CLiXVbZ8siisJYYPz6L4gQnGKsLuKHHiEAEbHgCrPbqaw",
  "key25": "3R6efG47tGbYteNXqoYPaGMV8UKCsqe2cn4ygza4vD55fHmiKTbF9hc4Kmvh8bQrjuTqbeYjj6SDxdAbzWPPRdZs",
  "key26": "3AsPJiEK5VS3HQxsEsCdnhdaRjSt3FAE4YxV9Kf2w4vUHEKbY4PSKL6UiLtY3ckc6YgvbaficDWF4mRfeAJZfZhB",
  "key27": "5hQTTYXrqwRjkcLiSW6E2gwb3G7TpfLhyUqCRPLoNxojQMGEy7zPQDnyDi21exrTNSzQ27wqUwa1eYPb9E9Tn7G4",
  "key28": "3MhQZ6M5MfsFPSFAzUkTyQBVpJ8JwFCjT8bMCiTShWWdWgARdd5nejjK82YXgg4Yo3sPKDc9EPeBFU8UT6dut92G",
  "key29": "2zawUh3qpDVSFqVRAeZdmreKEBU1VJFaJfgr5uNjG5YgbkVRdntTrHqj7GmTTmYaMruvffXQpXCz4cTqyCyHgh94",
  "key30": "5VhGkxtHEjHQ49krE84g1Aiz4G1McWSuDVJQdJq216Xs8G5aNrUo8hpWn2cvJxG2nsNB1aFQdbaCmHiSn5FmLyNP",
  "key31": "2sgen6RudWV3mFbYDckdLUN2pKGyp4CaAVQksJDDLqGcLCUzzrXR4i2EoWr98t2S4nVnHpeVBT4iDeVD5A9iru8c",
  "key32": "2SrYorro4MKbUVHzN8Cnf5pKaSRMFATHCQD4CKe432kpt8WjviHUHoc6zxjLeVrYfnrrn8vuamfJf4hvAzairXLD",
  "key33": "2Z92VgAzvfqNKKVTgd9NPdgSEVfMhMGyHjRKq4wv4aAfy7dvHtJJdyAuBFRAL4YBr1L3ZXee5nSytbbCUA46nY2U",
  "key34": "5qDr6JMqCiqncQMeLuxfC4fgU4pT3QK7GjLu9n3iHqou9QTgLRSNGYhyd9zMyL15sVGz8YApN3jT8bq6qkP76Bv"
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
