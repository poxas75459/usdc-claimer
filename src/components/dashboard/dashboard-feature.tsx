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
    "3wUTHhXAaor4mh4jVTW7ijW1ro7nrUxvbj6vAEkuDAJXrZ4JpDrX42ChA3eK4KTrztEudvUkrbWuJkVcikvLhP5J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VE9Ks891bs83XZZ52t2DthADdsUsQ35Z5smMCPP9B6nYmENwkqTJ3hwFYjpBcy5kjUMcq4Pg2V3SjfCkaQWpCpQ",
  "key1": "5txNeZfbRsW1J2MsdtGCuUJY2P6jXEYwBBMQypU3uaEVPGkekE3rsG3SSBTApnxTftvvg8azzGum2E9GgQZmQ1VJ",
  "key2": "2qEpED7JAXtfc7m9nvikV1jqKtHbiuVkUbH6y9etZTb4ueit1XUHTZS3wrQrp5FsAfU8UcNoA5oNA3ydHGN8Cyh3",
  "key3": "3ciwoxiLkLG3nHnXd1zDBairXPfsZaECzDTHxeaht8SVkDUpZucH8YFcAcyeQ7Wd5BP6iA62hMPnQ8KBoxWQ4tRc",
  "key4": "5XQJXGt8RnyPoHSohKByCigTLHTE9867Ews2Fg2SJgkRrQoNt5X9nVDbL2KVipQF6FftpEmogB9S49uUFugc8tYC",
  "key5": "hNVHwjUPiyTbZEtkvs93WHjFCkGbfkc4aQ3xB1vLFkxh4FMWE6wkPxuDNxcFzCrCnQ6Rb4gKfrUx3k4QaKaFyq4",
  "key6": "mPkVfdynJMavT4iRK8zFkVKibUvsGPNd21YZtL8W2o1wpdk6tGBTyJ3cNiGAJbVW5vQk9jDo1vBHuxD3XRwzFGZ",
  "key7": "5XvMeJ9oxb1YxtyrR2gtiwkk5Ne6x3gZKUe9eZFMBCQ33svPvBM2ExWDunMyMtj3bdUDfiSxACzQbVvLCWyPLCy1",
  "key8": "n12JPd551ubG81WnHHqU6fDxN5Aww2TE88KBvHryhU4nra2w1dQWMH7zmRx4J1bY7wcDFhM6PN1RA2mrvHvvKbB",
  "key9": "2eccJknNacGT4kVx32ue13zEmZAqQGocpsJ2fyhmNNnff192VYvcZxjRDE7cXzhi9MdpdRbXXRgumgpPGQEQ3PDH",
  "key10": "uBbJuR4zH8vkfaM9thDNd2faDzpEWTVRwdB73Rq9SYpXi4u5rJ7z5C1BEMmbEbZmTwSfcuEvK4PsuFYj8A58tDG",
  "key11": "33SZwhknnMCzcomP7TS6CXPBbFXustmqJSJLeksZvhZF7jATPJLhPn32URskXTve3fpiya2eLgeumatHS4Whomti",
  "key12": "2M6ny1tebQB5EPYPj9UFuLxQ6hp4Y6w7R5eJUBL69nZtgDrYmMwtGtk4APiG3jcoTEFibBL84A6RNPFfE3goAVh9",
  "key13": "5GqWZ8JN7DAg7RkjKM7nqDk3mhiAEdsMAkhLmMDtQ9JuqvMYuUTk9KwjhnRLbGsmDgSM1KCTXMPN7w9wvtE3CwTE",
  "key14": "3eYrWMpSRpddnXVML3qTQxx6u9Bk76SFjdpn5ACZZYaat6ZuoHuMG8CdAgavbqtzP4gWxiyKFNS796YgV3zrGTFx",
  "key15": "3Fbgdjh4YwXPVLN7zw49bK8cZxLEdc1dotT2oSRi5j8NAxiKsZEuViYZ2Xan4wCsDXJWNhAvuCrzynWtreHoH9ox",
  "key16": "Avt9jRbYvZiRruMhGx9snK9es5d9wXSi5C9HJGwGioQjugRFVPAZ7mGTiysbqVR94duWGBXmNGe3c2T4QiKvejG",
  "key17": "2re1A7DavpDVGh1i99otZHeq6em4JATP2vvJYuZMLzktSHZHywS3ha451xMnQjcJfUGwtqUCtA3Z1Z9sCH3KtMCp",
  "key18": "52DToCAUjtw72mjWpmncppHxfqKox2pzaGMxLYQisVq6J5SAxkkduqTxStKehWGfZB6oGvGjrTeVKoHbRmhbLC3z",
  "key19": "SxZH985P1yzsBhYJMRbxFqxBxCDaVXmAWDkSpZC29MxW6sidQUdc85ahHWSUmwnLUaZSYG8VZXqzcpHaVFLh6PH",
  "key20": "3WUKsh6ieXhYGy5RVJayKLEg5WnBFBXxaRzxvZXAmpUfVCzYGDW375G1ZVNdmvQ9ZxEjjRUsz1PhvL89uK6RPRKT",
  "key21": "4UVn67QYHo7gkmA1G9GTitJHsWC8J6hcAtJfJhkEcX9yrHRRAFKKUVXdNEKNc4xuK5Kyb7w6vt1YfR3Q6dCzeXmM",
  "key22": "4GrMdZrZfXB4PsKHXVFtcgqfKwoasJ6rxoLQkyoSMUWGqbM1fqkacviW4XLdQAeMZ7o9UmW8Bx9WRsxX7hyyqsZ4",
  "key23": "4etBkuJKdjuWapHHfCLQkEADvq3MbyJu6ZrixyonTVDcvU186XAdChKCBjXsgBM7NBQAZ5u1GoDQrmpyzWXzRvwG",
  "key24": "2KryNWoANxT1ZF1bsYACjBESk9pDhgmSLQu3uaC24bTckNyxHkDeKs2Mi1KGQBW58Y8CXXXipumBF8JZfXtFkkAL",
  "key25": "2xFp3Vdv2dS618WrGajDNLqUewLbbTbeGZimUbLqtiYXpkSSWdrrwB2aeKZMmBK7BJX6NJLaBFqBA9oowSHVLgcS",
  "key26": "4SmKBjnP37u6Wv2f9zEFSW9iJSJYx6cGWzUqM8cRzu35KYUDaXKHbmaEDPfHYXTduHHz5uvLxdcdEQVGh71WNoEo",
  "key27": "2TbMdsbNyZX7gAX2NAT6D9kxNjuuY2kKLv6tNojxYTrAUrpau1tmXZNKp3LRCWpD484uqVtMApG7ywbgefrjTtos",
  "key28": "4AVdovsL1iVBrUVLVBt2S6CypGnVu9wDNFhPhahjmXoWKw5X68Mcd4nTVUbGGs5sVeHBmdiczctv1RNVr83BhvuY",
  "key29": "vGkM6umpXksZgo1C4Muho9hEZHRe167mTsM7XYGYNecyAzzPm5uXdvpEDFZJnZLvS4Hs4tNkH35ytkpPEdzBesw",
  "key30": "2FG9pfKmza6Y6i6Ux7uov1K2kBgWY8ZYCQ3z1o2vvWFDC7zVsFGaecaQiM7Hnrk8Qyi3QF5EVJmLZwxgkwiE8ciw",
  "key31": "51wSf54pVg5yYZRnBBuRS7E8QKmk7jzgGCSydYHoCJXdgmHVAmPLA1dP18zHZvZ52zD7NWN2aBfVhZGarp6yjxaA"
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
