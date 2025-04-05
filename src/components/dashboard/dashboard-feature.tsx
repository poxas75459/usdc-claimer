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
    "5UgQ6gLqQ2fCw91kMrzmWxP7kNThXcNmjvqSJ1k4v9K3BQpWHFdo7hXZCzA3WqB1SuXNqd5SnsQgxBLqTHfVpkay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sjLu78L9v1mck3s8aNuQuTKtzXQuTRwQEYp1gVtHd2C6VkJx4BpTKwn3bWDw1nodf5RUygYrC2LknHs8hUPS8qc",
  "key1": "4NrPKjRZwurK3MqzFv6dbWLDPraqb2KsniHt5MZdvHNTMaZwo4xwmxu6y9EAcMFDHjYtCfhSXYpngrfh7btLrQgF",
  "key2": "2RmubLbEGXag9fzd9v5eZAg4Tujy5RH4YUymKxaez2gs7iFHQPaZisGqevpRCnyWbamZxHqc4fSgyQGVMqA5B3mh",
  "key3": "38g88UN5fmCrGZJ5Ujfvqq5WrwHpznizwuRpJBgTohzNKueiDj1udxxDdpiGtXSu6FHjMkqyvmnkT8eWtN7pnJVc",
  "key4": "2G6WQL5x8ri7tv99WWjua5T4unsU6U2HfN2yNKm4WsWE9YZYR6x4eQUcfyE6m4neRh6ZGzCHuxT7nGPhb8PT3mmq",
  "key5": "yAPLmdx6tvp7TD5Y7hLEvvybXGaCRkmtmLX487YMJUnCAZLZsGaU3h3GnQZX6UQDZQEx1H51ZxyY4vvdpx8jAuY",
  "key6": "nXFNhzEmhRWAp2yUoZ4QmqFDg9wW943u5fuV3wY2DEa34g41VxPtBqB5z1wsQZnr5Qvjwy3FQYGy3wMvFH1cwQQ",
  "key7": "4DDpYQA8z5UrpUcGnx9JZEMY8XkAShK53NWYqgFMQL3EG9YVy7jtombZh8JsVqRStfe2waVYJaBt5cAhnxxiM5WY",
  "key8": "5vCw1yT7kjipVSCrHgbGESEp7PJcth8RqZArmPp1Agp21YkSyJBnzak3WwHkGpHNg2XxKW7M58xxde3UCJwp4WZz",
  "key9": "5JySpLUZ6J7NFnSo61TC36nr8ZmR7s5ade4LfuDGQrrzx85T62ZnJiqUwo8PLvA7Gyg5BFKXiD9idEDP1grHCnAy",
  "key10": "2zYCMSFNTpmvDzzsmyMCdMJbuAi5LqSpFwzJoeVK5vwcWQY8bY9TYJQsBX8mK9fYGb7PT8N6Ez1n37opmz3qiqf",
  "key11": "33cevUAq3eJbPk4Vwph1dsZ5CPxPexVF2SWYfee9BLNx41NXLuFRkxobLLGa1iq5C8DBCMzrctwnqq3tGA4ePER9",
  "key12": "4SEZdZvtMcmHBeRcQJmMp8kH1UHFZbcL1SSKUiPPUXGJby3SCysmw4rkpjLcJKRtNbNARApBmjx5j4s7a4UQazjA",
  "key13": "5SfdD2tTKcaFgkkM4gmAvK6UQrpmRJVEWAM989p92o6WC9LcR79J1wwTwxagJwgdJoG5GbUzzN2znstzcyLhCvZC",
  "key14": "42f4ZSiWXDKSjo2BFbo9AHzGoo4reh46Mf5FoCo33Ka6hnbPea7YjMEEAq4KTTpU2ahAXc9whxrUCaYBUB4V92zq",
  "key15": "3kig6zVB6dx5o99pYuJsRS3gaoX8SYqNaJ74RoW7zPR3qhaoXuTryGptkd8oxxzUJXUVoeGeJrnU4Jjkack8gaTE",
  "key16": "4vRVZ3KSHsHg4ZRw3WXypyjCELUcgQ7weqsdgddqdtakmaCfPf1VrN8dc7fuS187LUgV7dcTz12DLT9yb7NZyuff",
  "key17": "4z7FjqhPzAV7VcSeyamuSjnnXsb8fX7fqVXEb9oqMzdLNKh6eRKHiAmJiTu9ntn5krqMKrRR9e9XMZXStDESSEwz",
  "key18": "3NL6PnaznY3aJrcUvMBjVywRzJUAKtmvcDFCzbgK3THi3pd7G9pNXpsZnri8f3Bko8rG2c7xkRYPkXaC3op1VNVW",
  "key19": "3Q8gWNNffqW8i7aSwmmxu4qaXyber6NLsMKG9RFS8wq3L8wTFKWhfNW3cgjAMhghRdUdqgWpcYxwQnewWfZ5Pmou",
  "key20": "MnC7SqM5yAw2boqScoRz82JjnMSgirWB1ape2sBZxLLuBmNnr2S9WmQPQNSuG3xmqin7jr3uN1cN8QSEYryCgXF",
  "key21": "3CEt2WSukxDDJWc3Smn58w4m7Tsqwgckar56WdKoAHMpufmfsGxdLnkWBQzwabC8RxieoyV7ymPNBRS8uLT4fcG6",
  "key22": "2FgBo7qZdey9F4V5pquQfF8pyW8aYccoRSFy2yrhriCmxpN4jpNToMuNACLAQucVFf37bbFeyPGifNUgWRKERsFq",
  "key23": "4FaBJU3CptCRC3eTN3Mr5ztuNrpCK24s7XsqiHzT8LiyBLQtnq68WHh1N1uAz8oP8zhX6KiQBk6Evm4gjWsGtrL3",
  "key24": "EXRqt7xaFqrK3NtVUr4uFNoVQbx4MABzUEjzdzQpZoiVH9RXU9p3aCgWyRLwnEWEhZQ6cuX1DEXuXqZ7s1y2rC4",
  "key25": "3Tgaz4bX4F4EkBgPZhk5v2hhHYpsNy1EfPFJrpum9rax5SkLRwbBcc4or5LdtuBo52vZGiTjQjk3xxTMXYWxSrqE",
  "key26": "57AK6zXWLPKX1Dy71ErxxjhRNjeLcFzh3rfmMVuDjcSsrMTLd34jE9Ej9LCok9B226XZHrZ8XwPmEaiMh5pjJrU4",
  "key27": "zRCBVwFVdXm7V6jtRCsmBrZtnzQDSReu9y4ymKN3nqDCRcLK38fTdWC9BwvK5PvTrmiW4KXsZSmbyGkBYRtkLhh",
  "key28": "5TiNH7tRDTaVDzRzVMrDS3fSBXjB1JGT6xz3bWiiXummWQ8Z8oYDh1hM9pNKKgEGyhsEWGpgowf6E5kNeKLfc2Tg",
  "key29": "2c8QUTL3447Y67X2RZFbVgEuB6hdsTRTiibNkF9bFxrvwBeNnwmcNJpU6gV44duMis3h86d8cssYZqmsqY8aFLa6",
  "key30": "gd86HJuezU4WN2Mf8ASUU556RerCBBe9sWtHq6tXdtHZpg26ZckzPnupacCxwpqoYiE577eKBaHn7k2E9Xe33Fo",
  "key31": "4K46GwcTNYHKS3UtgC8Nu2kEkNfAQAReWbqNnsfyxnohQP8vgvpcSD2bsa49v92v2SimXvHq8Q5V2h7yK9Vsz6R9"
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
