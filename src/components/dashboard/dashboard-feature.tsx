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
    "4qxzd5hwdYx78Z7JTTLfoXaYkjkHEtM9CrevqLeK9DCvXCKxydiLHVYtpX717kf2UKPTe86A2eZnX6mERmdBH8mn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qn2T7YvuFmMMiz7Z9EmQszErLmmfHfNYfQQDEoVtF3RYqFaLfpB2g1qz5uSPZwaFfXkWmLLMHWzL1CVM5SHwsWe",
  "key1": "3doSYEG9KMbSzrMVejtZPX1Ddk8KoYmnJvMfLwUMaa56n9mxZ1n64P7ZX4wbiMc9bDV8jQGMeA4kBJQDBp4H56Lk",
  "key2": "oZfzg8m9AF3mfJxqTEZMbQzbhYFoHjJvhRtAU6pLmoYdrxdSboBdnTDu4jiwKgcfJhhtWNGMMujBH4rkgfCSDDm",
  "key3": "3UXxG5FhazqqFHqMdjdtZaU8bHNyUYs8vwyrDxPXfWE319UA5Povpvoc6YGKakvBR7qyyJZBB6nucHcpz4qqiZaq",
  "key4": "5YuKDREjf5VRFszYLrxy7XDsQtZrLjR7BXau9GuzcNXBE3VzqrTukvzNVniD9Rw8ADq23U7Cwq1SHaWnjgmzpj5g",
  "key5": "3496PZq2gQ2351yQqueHSrNmrsqUhBb8tGAcNp4i8vKhDN48FrnNFKY3qaKeRYbaQSbrhZsdfSw3dXSPyGt9qQQV",
  "key6": "5Giwy89pGXiPT3QqAFag4kiWP1GR1y9z6xw5oKcnumojeX4nVYwSedWtoiXXSnoRL8xDnnpJhs4UPgz8zsFtJB5o",
  "key7": "tEuWT3BSNyXK6zkrhGUw4D3DRKADYCz61zYpvdZWhcPNkBS5wSsnLMxwrxG3i2Cju5kTtd23M6htzNPGDfkt3ES",
  "key8": "2Be3xiHhkBa68JQ9LaZLocpoGM9W2kKVHmGP6ayTfbb7AVXWHcTBQbWKH6Zrfmj6VD9VJ5kJcbUpbQBAW3G3waaq",
  "key9": "56ZfELBnDTcCcMPE8c8uLdXu9Z6Wc7rQTd4ttYD1ncJgHs6eBVDGzpeDNhQ5zsXkD5eNe55nStpgB47THHbrZZbU",
  "key10": "4VGunUvNLoHcqCku24rBuUM4tRY72KJNNNBU4ngoULatTw6w2w6LhAhjajiUvbRgkxbyGtaVNucLzNVqRJj7AjdK",
  "key11": "vzXSHbH4p9zZ85deXf9Wp4RbmVXE8RUP37iCF8vXdZMjazDzK7ScJrkdVJuNf5PuHrTDhFTh9FYN3zy7S4jVs4s",
  "key12": "3EvaADuj6DXH3vgnzGB3Xuor6M5GzRwekUKmJoUPLskuevGUk55axpnw1PP1KovTppkf5GhHJPrABgqB8ztMN3HK",
  "key13": "3RDajJvwNv8vBqc2prNrxC94PCJmbBXYQyqwF9JGL9VNJcyjk7ZQ48FUpNqLkdxgvKMLpmKUdvCXwKQWv9G3TjJB",
  "key14": "2L8HXqU7uabAzckJGFNobAvW5ypC63VuyvkcHTXfGb8hUJGerUX9VP4cgPxvuCrpc279bohxrsvaSBra8JzUDSKH",
  "key15": "3CHihu41AMVLQmBbcTqNXaC9Cixw9WuCCRCs2erSv4bXLdta3DMpb5ZjikEgUteUDjhpCPN5xdhJrLCwoTmenduh",
  "key16": "31m5Wr3rEM8kYkCdpmoFCTCZTakt5L5gabZ8HWv34DW7sqKExV4hMUhyH3TzRkF4iYw6zzC6U7tKfVatNtwpN7xP",
  "key17": "3QBN1FxEnrWmYZf6ZhWpAKZC9dsk8JPncxSCmy4wuc5Vci3eKKhjstPppwK8MbNiEdMNLBj1zFKESnEb8VpCmXMH",
  "key18": "4JCAehHVqWrR3hhH33Babbx5aV9ex7XyN8HdwHMrDwtoYtAUtoqDQAXvf6m8mUXANDDLgk6zkdtEgoDWhpeTDP33",
  "key19": "2sUU6nbtnTyMZetp5yvfmY1Xw2DsYcm1nkZahv3B1Hb9Hhrbz71ZDoMqXNMWScr5BFUtCiXk7n8qKMrMU5kDFUfb",
  "key20": "4PWmGToPEidBNy8ngciJtJ2DGE5GwkRzoJrX6mHyYsSCMzRNjV6dsRaP5vmqJzrYe7an36DP4p2UCrCFSnkFmjii",
  "key21": "5e1WJKCYgGqouZqTJvbh3KxmWvQu6dyXwbruALZgRA2XVNje6rcLjK3odwmSuuBBVWHzkeLsCeg6vopykkooS7Je",
  "key22": "2t9SHCfqy4DRc6SXJctLKsKV2vwqyEcZP67H7dni5y5aupt4EMu68fNkBtAGS6uLAaccrqnL6iPAH3o2K6yqWGFU",
  "key23": "43ssmmBDSyY3Dr4iCR556VKsRLN8ix5tMn3cKYa5T3gviWKXH6G1n49Qbu2p7QPru549GJMsLHBS3kbV3nywDoCb",
  "key24": "fzHNhvFBtVWswsHy73KGywyFPjCTWZKtxoq5YMP8EMQnKf8oi8UMqbyUPv2kRxMffqE4vWNGPzPdf7jBD6Fj3Pe",
  "key25": "5T3c5Px2PxDxKYXh6bHrCbbEnNT1Pg6nKjqFcZA3RB5q5zPye7UWQJXKnd6u7J2RxgSSX9vucWBZytSA54eeVJpk",
  "key26": "3LyPEf7PAQNRCt4XAJGAAwemWtcRyjapuZQjnnNCrwWnBABfuTVELhFWmsN4yWjZVFhytrQmUbMTR5FrtBj8PCaX"
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
