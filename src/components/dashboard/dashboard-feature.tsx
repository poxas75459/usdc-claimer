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
    "CmquVnLd8bSrLZLVL39vWTAxdtCwbArTHzkh8gFpwsyi23wWGYRvQVcJ2HBnMaDmMjtnNSYZoEGA2Rfc9PmZta9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FsudUhc4k58swQmu8Mx5Tf8PtxRFgHjPGSDjGpKyeqZ8zeM3rgLMPripMXNvD2vdcGNaQKqX42mWbmTKWSMJQJe",
  "key1": "4Y6Aa7ByqjqErCV7e1v7HvR6sgW6ShtvVJkUjcrJ7njsfWbr3zNHVZAgAPquey3fMaFfDTwtrLzPmxpN3Ff2AV9a",
  "key2": "5RbCHPUnUypMZLJ6T68dh4NgnTaiApaDTSvakk2Tv6DokYGz6eiaJSzCyBdG4XLb87dDMRoXQMeVtWrWYKNdB2ej",
  "key3": "3DW5gDn4vFhmxS4dPSpnSyjGWzrhybQLxGtbTbhLSdKEXWdehhnQ5vqmCGEEdRApctnQ5W9BcRYiqFXM9fQoETvY",
  "key4": "4kJjFmy8WBA4XAf6QX6R6pkuxeTSDSGVF7nrk8W4aaCY5utYJmHh2xkePuCykXjNF7WLD2UZ3L74zqyrXNFByzM3",
  "key5": "aKHTurgrTbN9MNcEuRRHXz46A2rvdSxuP9VuSetawmiq761PTHrZ9ms6N6smxAHUxTXXNYUwMYT5juZDPPLZFbo",
  "key6": "4cQgkNfCXPG5KgTmT7jzWd5VTAsdb1scSHsRq35TCjJ6AwoEdku3TX6MAMSASvngX4koq6NtQmyqjHNWoK87B8mq",
  "key7": "2AGjJJhUhoHpMBZsj7c67LK7CPJNYzq8rVYzUpSP2AtshtWK5cPxu1MtGhydChf6yecjpwufxMbWKSE7P6yrzoWe",
  "key8": "2azhSD6xjW3pBJ5UCwLjB9QyMpnsyDnVyywevDuCdcLdJqeaoS5UM96ocUky1TqTAve2HdTW4ojMiddyuPJGYS3P",
  "key9": "2eLHTPBrNwp3XmLvKPwgMyxvUyGCL72yPDotx9NhaCmnxu6tgUodw5HQ5UZiuiBmucqkeGDmD7BG8qrXqy4rJqfv",
  "key10": "53Fu5YVJDqaD7s4Hm58SmWhPz7awabK6QSbSjgBUFcnVt5T2kHavhgek9RdDQN9m7vZ68D5a1VrG4PmjN6HYygGZ",
  "key11": "3xY2qt2J9SacLvoSs7375KWmkFSAeapN9UW3BgqNCiU9iYu6Y9cz2GBSamknhPz3XE1DMrh7mvgp9paXbWy3W6Jm",
  "key12": "4hpC4RAkMmuQCxswSCNrccVZz4iTobFVhNCaKm8d8AedLScmT64oS7ZLhhuztkYRecenBkiLoyoGXQKgBdPkhtuo",
  "key13": "2MYBLz9n4bweLwybgR46om8NfnJSs88hgNx43bAvNgBVL3qL1GBeou5qfAHWtUXQBCrhA1v4t7ZhgwQVTXun9gz9",
  "key14": "3v2rRhpqVuzbV65L58tzQh6VJyk2bD6eQ1xd4gsT49MPXLsDDuDTaQi9bHqmhNDaFyfYqdXfob38KVNVxCDS3L4e",
  "key15": "HnrV3jtNVz3XUsWspytxsnw9jzoXNvRjGSGjZYstVgLAYRdJgxcL3XsbDyfGvJC7hrDANUjgfUsBMpemZquHmeN",
  "key16": "4GG2m918NTZzYRqqK5BJKjc7nriFbCQ2sVDvX1PHbG4sbnuqcBVFwzkXjsJSAgDFHcEHjeAWWycrE8nJWvduyeiQ",
  "key17": "35PZ9HDTynqbo64bV7zJnTJ5R1D1VsxPwtvkha8uNFnjcDt7scSgFRxTLbMFud5t7JLz64VePDZd9wyX9i57pJP3",
  "key18": "674CYftnBYeAjwJLgZ3Rd5VXVMdgSRy6h7MSvjm7nXg8nvMWthFfY7tURuxfs2kKko8yj4nuz8757cEKbgryA6Bk",
  "key19": "qgkMpGLJFxKRMZvnwWWQZ1MYEX9EWv8zTt6NeXqW13PbX7WWAFx6QNVhwHvWddFHKcRrqAseMiUYLDKGzL12Pfg",
  "key20": "z2eJQHcYEvstnDQTZnVCpkhsAeMQCJRE1BsADESqo5UDRtDmtBtXwUBGU2bYjXnwSzD7R8r85vg4waAetgogB8y",
  "key21": "65GfpmSFyPYQdKufpc8kR5EfqbsrY2LoJFPkzVzZPZpbGAZQ4jXLRxtGHopxgTViY5eC5LFqpGLRbocQfmJ7zY8",
  "key22": "3x5KTzaUzdKqGMnEt4afnWEHw8YuBfN14g4B17JsW9wie3KdWjonvYbXmVU7zccDtgLYDTfK19ySndYh12Qu5M4C",
  "key23": "2Yum3TjiCq4dA23c2swNEdWXdLAQoaP6LgxfR9wuRbKH8WxnjkWvF3r2iBZnr7wqEnHavPJCNEKpHP873LxC3FnK",
  "key24": "5roh2nA9kRsEFBTWpefGg7nvJanJDtEmsuhcwgaDLwbmosrtP22yJvi5NcCNgPdUCgn8iVGsFxV2U4CgzZSLCkVr",
  "key25": "5s9GQzFszvSzPW5XAd824GqJV3JJXySDjwz2yDXKrPsdSDSbPx9GSm8cAnVJX7roJUWAKumoeFeQmy8qvzfaRybu",
  "key26": "2ASNCYuCufztuuvqT3RsNKVHRv92Z4Nx5BmvmiDGjeahPHwzXpp7Cc7PF3AuXMsTLfgw1s5D5rYKP38EDKkdCCDF",
  "key27": "52Zqes8zRHPmK5ztRhcGi6RVnZqZBycgPXnbRzcemNpnQep9zAzeBhg5BozM5TN1jEkgEYQ5h4GMZniZubWQ3edZ",
  "key28": "3iovZV36ZoR3V5KmmX6Ydg3Ka6iCiT5LhupCt6vog4Hz3SaiFcQDQyCJvAKonUNekBajfL9vdm5tRbsxVDhq55T",
  "key29": "51cSVW7ZXNeB6zo5jrgcUNznuohiYAd9c5zGk8Cw2crNpLbDVgLHDL7fiLdZSRn3EPoBqgKfcUJwb7jEnYhtgjK6"
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
