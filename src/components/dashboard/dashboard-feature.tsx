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
    "3uvx5NEdtZH2xbkXdAvWRc3dtLzPqkP4DRVa2q5qtyFwL5QYW1nqnMCTwavMCeMgmpqnQmFPPj8JzjTXmiJu832A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XCpG2hKWMGdzqr2gkKyScuZMZc6JrSWQY31nWMMB7aASWnsYWptSJFEmnwHu8pjW5dTAJAraSr8XWxQEvuPFo16",
  "key1": "5gW97fP31rMHC5JsHYMN6Y2hBP143dCiU131BPpCHzWryV2gSRHYr9VXK7Axaf5B1Kx1chwBpuJVi2u75DFxy1qN",
  "key2": "5MFEoPVp89CRVhohiQA2H8UFLFCAEASCtvZYkGjcNtziRo4Az6A2Ttk99P5CerB4gTYfRiXFuBYn67bS26ToLsGC",
  "key3": "5enFr8Fc56ZkByK3HKAKHweAW2aqAuBZCjMsVk67zSFd5jbayLUm5AZ5rLgmKmqQRRvMafoXJ5rYEsdao6T76ABy",
  "key4": "2ADnhFegVBJSDiBr32Q5HJw4gXdWEvh3a2wgsiSb5PEv68zjcphaJwvVzcEZCdkYJj851Ju9TipqNA7MQorp6zEv",
  "key5": "2obqFV6psV3MK8DxQdvkTs8DtJioJuLLqmsaYRkeZYbPfUVq4ZAhNa6wBoZquJpizNpwvfzopUZPSNcgJfHsCPR9",
  "key6": "3YtUSurFn4JDoH5jmrUJHLaQXQyPpNQrxCiWyY7CsJD39SRuHDAtvL6b6LkaQUy9qwGB7iKzwWD4F3YF4iGjD8bn",
  "key7": "5Tkh1Gt2C4jHQa3fzYhfbH4zq4dtwvSozQkcfmvMVQyEXkPfi4GEBa44sHA7oADwTHwDVVqdngzRLmnvdxAeL6Ev",
  "key8": "29JY3825mcorkxAsut4z9aEVqpvRsQgUoKqXG5xYCSaZvAT3qyzyBx95Djefmf5RA6Ht2E8JWQdhBi5jBWhod4AG",
  "key9": "4QWkw1444r6C9YsyWeV1SZRzTsn3k6j2S1ymqf9PwjQ1ASYreWGJKVRnuFNxT8AGGT3NAHRwrtFdejgSEEVLKLT4",
  "key10": "54GWPiiiWZurKgXMj5VKaBKT8EbUA58EFVAzaPsXwCbncxqDSPQX9s8dvVNYMrH3vLJt99TgveMdmGaPkKYsm7bn",
  "key11": "3HUXcDBSeU44ncyMcGp6SeCWCdHMrUZNVsBtA1PuxdEinfzKnt5V7H6BErqHMvLXae6vcUK92CKVkFM6oYzAmQtg",
  "key12": "3JVmZT7RCHCc44ETGZGWRGTXQf9DXorxGDkqqEdCTioYR9ExT11S4WvxNd2g2BL5hbt4YJXmY1yx41LJnhJEciuk",
  "key13": "2XkexGXjugBaFpVyjzuVbZTZ6teEMF7ybWdjDkkKuGuPCZQ9EinKpXydDEKxdENiUxRiRDoRv6QtnUi5kVV4KJxC",
  "key14": "3sVYz53z5huTYJHoRnsZrczDknMWaTkANAjUtrxo9UxGQdxHkUTgjoUH4AEWF2uw3WnS7XgVo4D4yUeka2HcF3TF",
  "key15": "4cMmnnPtWUqXJ1aqCmrzN3KS5y86EzuN1wiJ63QsDD9AZXN6e21A7G8gtVwGPwj2ywsvwnoLN8jpuoyU9c4VXSza",
  "key16": "WcEaKjcjp2XoVPSEaaMAUsg6wWBcsMMAdRS3avUcEEFcnQtXgz6onD7KUVYAhKys3VbKb9KkFxctTi3Z3ZZcnJn",
  "key17": "QmZixc2vWr9ZCreCoyUT99tfnGY5qMRDaQhNQkrGHBh1aswhnvyysgzB52QsV2hTopyqtGceXKzmUwRSAwn6bRt",
  "key18": "2oGV2KL7pJBhrCbeMytiYVfiaqTVLwMNYVfsphrc5Vf2WeiEjTRxJ19ZDH3vMd7SoC2Zq4oVwXjqhDd8kCNk6NKD",
  "key19": "2Urba8qtBcttRhmQreAmPc2zg22jHvkwLmVAri4H1S1iN7rSFmueFyusUTmWCAMsvcXj6G26E8gwGbEvw4Hf5VpJ",
  "key20": "3pVoX99Rv18qLSUTzLFK8nMsgYtPMCVWHMoeL1sQiQi49DMzVSDDNDjecy4HkfWwqBBJrkj7CyZZ7EHoWDmsyNB6",
  "key21": "kaogdPeoifUxWM9yfhJhJQQ16XqtMYp2J7MrfbUh1wLjqHM3wAdyX8XGSWhW6vLnx7nxZtJCrE9fJtb1v2F8e9E",
  "key22": "5BwwegSpeqJmTpXNFSptEcpK3K9SxxFZrprU1gNSzxcVTqF6AqBXGiDCukbkNQYGEogJRRyoPvXrjBf3bTBpNeYz",
  "key23": "311wBZmE1azYMC55tEnmvXeDs8eAD9DzE8z6wxFdvbMiibu815pYCnPe6cJcW3hVqcKo44ngvWkiGFToMk58kDVP",
  "key24": "66bvewbMRntahQSsPhdBeu2qwwCm9vCR1u3Aky2SPU5bEBb71emsLjX4T3tUSfQHPwZzeF4df891iy3G26kjr9js",
  "key25": "48vpYriJiw5QSEnTLdaUFEw1XLeqz9NDAMSjsRoF4eitu1dw8kunStMzFAnqruHRZdhxUS84HDcKAAGnKNzWTUfm",
  "key26": "9QWGsjw1oR5S132w165oQMnAbPN68xHSfsdfz3ecfNrCYCbhbn2DSBQmc6P5W9CQCPaigHpUsDKbvKX7Xp5jKHC",
  "key27": "4x3AsXdeEUsQjD9HWXims4Nwa6sdnA9b7j3KpPATd8uvMRxeKRKG74g4JMYYbvYhDDLYpj4Hn8kwVzWDW2fMfUD8",
  "key28": "3UXg7H13yFCxX4uYwQksvmDQngV1jcfFrn12NXzLxLPDmmZEKy7vs2jKhWZJxqE6YiqViHRT81w8oNWZJAJsFP75"
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
