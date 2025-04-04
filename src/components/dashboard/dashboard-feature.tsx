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
    "3sv3eHanKa9vCi8amZNCLxZzpgPRnxqe2q2Yr5FSB8HddLyTCqsupvYU7brQgeTJKqEGK7yGxgib3yZQpGPHrAyc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "267e8yNLh8iceK2J4dokfqXnz6KX3LXY2hjUihk8Ty2sjdMmNg6ms66bQXTrxGtJq2MQbpSdQex9qLcNu6gMn8Uu",
  "key1": "2QC7vgy8Hpt3sHi8jSjn8sKuikGiGDhYoYa3vF2gLDKggbPK8ubgoT8bfRsbJrY1CEhVLeXWRH9EMXM7Qa1M5Qe3",
  "key2": "3wCLjtVpe9Po42114YfqLmUGK5rSpNoZKGveaEFztPW5bRD4nS5LBTsAHxqe2Dt2QajwHFZfLu7mXigoKcv9B9u5",
  "key3": "3uAGGWWbZZt7nwy8NEFFMW6FLRiFqSYMPy3Hp2yVjWgxdCz9n5g1qQg6WRu47zd5czZpgHfaCa66KHvhw6o9Nbni",
  "key4": "65kxoiz2RT93ikZezTE7EVXhjd8jFszdG3Vyq5W6QFLmKfp5625Jy4WPypkELRzZaq5f27WD2ach9AvBMNYbC6Lj",
  "key5": "4TqzQcHXLpHtRpmqoSXJ5gNGt8r2GScwxdfweP8pRksPDQ8J3Fg6jnW1kbUpXNQ65e6SKtM7WNKoVQ3kDEarLvrD",
  "key6": "44oh6g8DcFeVcoix81tFbjLbejfFmyKcj2Rr7eQL7G1vb7jiBNMWMJ8n3KvLiMZMnczYcUvcXuUD1ZwaxYH7mc47",
  "key7": "9My6i1JAQoxD6fCPipTpa5BpuJe2vKHR7S7RWMTfuAp6xnXQCor8XdFy5Fr84ZuK8WvBabeX12s9KQAJgsVhGzc",
  "key8": "34q7o9YTZYjxs6CwaedgskuWWDcfukarnTUsApmpNQYPPKpLRikgkGVPw6387ZSGK5wCLwXBR8VvXDXWJ9A4ZZDh",
  "key9": "2ekeZWRbhihUkh3fJbZiggXGDAPtHz1CZk42meh2JBG67WSqJikdpuFctwF6Pr1AN1eV1DAd6iDj77tgM5TkiB7Y",
  "key10": "4gwYbMqmLNUFWeNsGmU1hgixYqJc2dgwTTiZdSp3A4hGUPG9CTdtoPEyDZC2JiSFQNaYCnY4GWjW7R8mCkxKgnua",
  "key11": "66vL1D7FKfCJVRbqe5gSBwYCKxpojZprdQrwEHgEcQQWRvfWPxsureQm3Qziqf6LxRzk4FaYMCZ9GqvqiT9EvTv6",
  "key12": "5WNskFNcNbbQKhMD2hXso7SVFgDaPYCzKmyV9ogyQrhz4MikXzPAJBpZx6iqE65kwkLWjr9b1Yic1VpUH4hnhsuG",
  "key13": "5LBEjYq1zTnJf8zhiEYrE9sjxwayzkhTEByo69rEya55XhUSJ64jiMhkWkNJ27L6CoDqyGBE4DjbALgTNCYHZfaH",
  "key14": "2pkDiv5BYVvKLNykcufoyx25zkRzvMEVxwMaj2ov6MZrtgcQ4NhQNgabtWzQSYzcLi5AUJQfmkrfymfCX3e9oqtW",
  "key15": "2fVH9EGkDWaSeUTBFyfD4jZeadsULsqaYYLjahLrnroQCr73mhvAwM2xN25HLDZcuygoV5gCd7MZ45hz86X3Fx7R",
  "key16": "4yz4tKUCSGCW1GdKs2z9nbGvdqF3q4S6irRMDfca8jMQPzNDCaKJhYhaqRmcMJQqzFn91hWK5WgDTZdxqqX9Ly1z",
  "key17": "4zeu8AGteyhR2mh5T6my5SthoqCr8VjvPGgh1FNCj3QKjedT98N1kGU73x4ZK22DE2omYSrjRnBcjxU2TYSAKWc",
  "key18": "2N2KtgcYhrYZZAeKzgJ8VHNNG64xCPEwn7RQwevkfMwei7wxn6Y3NKRz38ELsZQ3YggVHhhhywhNgzW1SxERFxLv",
  "key19": "34QWQNRKJYzC56d6UrVUZ1MbaxRG8aafFwTg5DFtzespb37iaaU3jJZuj4nhwwAeAk3YXHsjp5kUAN6ZtDkCJdJm",
  "key20": "2K7uDaH3GixUNAbjFRyELmx6KpVv3aKAM551Qs3rpf9BaXXSQsK1dFkg7UVfFF9JVRqbrtFba29SHQoJ4FqiPVe9",
  "key21": "4zqi1Gft7LWhQdUQfuiF54ncafNd3QeA9xEbwXKmPTAFt5A8v7CD7bcRkPS5Wo6K42zEuQzdppmfDmQP3TH8uKyT",
  "key22": "4azrJn4KRPAGKMAbc6jrYYVYiipKr1onjuFzbErnuew14T3f3EojT932NwpbkwYGyCKM2aZvZ6RnasHjoNB8rnFL",
  "key23": "3TskLTE8XGubDw1FwcCmwvxi9KikzutLWru91P7G4MzLKmRGmrJDRZnZAvN55p3jPE3tvtg92C7YioBT26Bh48py",
  "key24": "3rpjF3kXBqqCohU2UnXi1iUo5esQnsBMwWNoGCTCfpDVnTn2n2kz7SwLCeNchVj4ahnXN5xRiQeDfGy7VymLGdqq",
  "key25": "65wLwcw6xzHHrBhYzhr5b5H8t7brCpyPy6LWzzRXdjfHsqrmSK4drpEttNyKrhtt223WVQYKi8h9VQ2G8b6uyZCE",
  "key26": "46DRNoxTSNic2Wer6mn31UhZePmMG4RFassgvx1mmPcwJ8QhXCGTDATGbhY27aPvHp3fHcnAZ7qufnHzuhsait1r",
  "key27": "3rf8PjJJdHao8pz7SLBpGqkZDLHsKwBwNS2hJp8SzZUsxecCzLiUy8ZshEvPPT2Y1jM3gHrJNy8boMx9VFWoFhmN"
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
