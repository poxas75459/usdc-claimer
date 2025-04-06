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
    "4wz8Nu5wwDuMykf9pwgomMJRcKnuzT5tTLnmCWMEM772qS8Ldjn6R5BAmbdF8LEnqzdxZcVybGVGwubMw5w9c7xH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eo8XvhN4SpHRNASc4jU9KyWzGCZrWchh8JtN7y5LAiAh6Mo4MeD7gZ74BktUKfvVxMZezwP6sNbwdXib3shNjUu",
  "key1": "4sZ5rbiHf2cp24s8UDJ1dDrrcav1jFF2r4RXnbf8e1hU4775P5drdZUoyPjPENzdP21SGiHHfDt6CDP1vHWaSA3Y",
  "key2": "2tETzob9UB96TNd7S8b46zYYinKG1mE4Bdkj38BqwWh4Zppk5aghJ1ji7SAg6fDQAZLEd6QaSxEp1Lv4opshRvgK",
  "key3": "KXuJYVRZmzss41ZCRZPrp8U1rDAhqnuox1NUUkXKP7LrtLyu3X53y9EQmnCteHv2HWcTLs9kbuypSbawqGhJUoL",
  "key4": "2EbQN4niworsfmcoMZTvaZka7KAHCGr6DT5CrzLSTWgwt5JGfL487VkHVmcoMREvfguAtMFMq7zydNKT7uxs8tRD",
  "key5": "4Pxt6jnjbP8SSRKwTQ1uNqAPm4PifWxwUNEgGC84QBwkPUTJVHMEFpiF61aDmdanExDtRocnJfP8wPL52sWHR547",
  "key6": "5y7dixfz831PywcGVafvDnLGX2VxSkTNzmV8VtnPX71555oB13ooDdhFztkzWVar7SQN9uWDjcg6LhQGGzqyqNny",
  "key7": "2rWAYWc21w9GngVekQkEDKjk4VAnwMHVY6ndgDFSZj24xAxoLqQKvAo7UcSzLrb4CZ6ebRQtr7dQb4rEo4rTX5an",
  "key8": "3e5GGqy91kpyWirBtMu45wrhBW9s6i5fVe5U1DCUMzQpbqrAkMz6zY3vmmvGf649Km2v8F5x3qkKWYoE9gigEMbA",
  "key9": "3GdnHU6D4eRhPJ7UCJ5NikgVxVu5qvxQ6uKtGNqAr9atAg89fDU6Lir3ACMBygvqnjvVPfZmfJTPmuAL73Nhz2K2",
  "key10": "42MmTDmSU36LC7mS59a62wBkrofnChiPv3WmgqmrmJdkPjMTBrhUNL6eerShVKRTYAWxNowuyNPo9nANmddtncgR",
  "key11": "5qtsmDJpwSnG8SeLcnWK1tykRGgasga4ZfvXVVDcjWyjsvjvNjr4PFe7zaHQsRu72f4T3Ye1JQZwAsiPqb8DikMz",
  "key12": "9K89uwhA8XeRTLvZcqNs3MzRVRMpD77nPhQnLYfvZkqzque9wdvPJ7STTEbFJ2DMnjeVpDSZmatQALxHM79L4o2",
  "key13": "2GXBmUxtDXxCLCcDXJX9WdbDsJwW8TNeVGoW35NfabF8hQyhH8q3c9ZAvMacxg9s9MsZY4LjzfssVxCMaPjqGXy2",
  "key14": "2V3SgdSqbASzTE2ZGUptEc8FBiohBZKUiUV2EghUdYuyH8guDhy1LbFZnyUnM5ZFXuVfiRyfcU1h2gHUB3kkAXx9",
  "key15": "miNCn9qJ57uSzhtGviCjrTqUJ7vuK7nLGQc6c58ivV5guFAcUW4oK2CXrBGgEJJH4nztVERJbVhmcEqvom5cHsg",
  "key16": "2FRuyGMb3uJPFs5C2jRQfimvK8KcXuj4fDzZGbwv2ch3qG8U2MR68wvWYAU7spbBZ1Ntvaj7JG9J5oZpk9AzvkHB",
  "key17": "YK2u56HMXzzgzTiVSg9UR9RtEmqkntjcsHKfekpwSpWi4zBDhjqydsSWvgUp72RsFxLa6Le56RuFxUb2URmXMHk",
  "key18": "5NfiB8idxkgV5kjncDK4s1QKJetbKRJBqs9kFV2qji3BkwY3SY24gF2Aho2CVuNFRsNge3oDWz6ba4kCafQiWRoW",
  "key19": "44s13rr49dsVFsA8cNXYPLHrKCjDspJc86EDjdWG7HUHBGYavGGu6tVMkMf8KZBNadkxAw1EopEpDvG4hSr6h1Zw",
  "key20": "4uoAhgxVjeMYzCaLZVkJnTwZzUgXAU13f8pve8MdDy6mwuLwhTxwzKcWFjgz58cPKSrJcB2Mg5ZwZFQSRvBsR5b",
  "key21": "5iuiB8vAm1t54ZXi9kTu6hkBZCYGehTLzLqbjWi8LsXXVeMJwJmKqj355rA1Gqcgiwa8JwPd4CWZEnUKEyhJ5qt8",
  "key22": "4aAaZTRGybo9DYhNPSvES4V9USL8cs7tz8RCExKTKNgHinKGP1ur6fM2LcfwbVmPwDpF2fC6eTHrJE2tT8RhFc1Y",
  "key23": "5wzVrkrbyzr7SopEMttruv7jG7qRJSK2rxvFNdP3JwwbPVAeU7uoHk26FMsAxsUGFoM5aWWNDfQqAWqqUkYVqcXC",
  "key24": "2JKjVk3oNJxyDacMYwazkh87Jcm8jizFfjyeAvLXZySEg8kkaXrEHRLkeGhHacQDQ8KNGukg4ij2Ut49VcenMXtu",
  "key25": "nQqEycZQQRhmDxkbgiGpc7iKJJyM7EhmfrQNkjWf8RKV2a7i4sddUdTXDn3K98y4pt3MD8mUEpKZpJW5kcgyHEM",
  "key26": "4ftvioSRWy3GU691A2jQByqizjhwhBMEJAW4jUXaQ5L6dmcmumEwD9P4ANDXWWmXiBpWHLmbWY2Ujw13faDW7TLU"
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
