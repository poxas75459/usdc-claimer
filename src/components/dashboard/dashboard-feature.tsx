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
    "5tyUwoEAXErVm4E1HCtqT9DpaH6edBZJLFRpmEr2JfoaawCTvRs8khMF9zD5xigefm68Az1kK1H3bjPxtaVRpPos"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47okuBbuqBDqth8hCmFmVmE2MuvcaReTQx2AmJFY5yCTPGw4oDYS6B1ikQmdEB12YR37YE7WY4t97f3JkuDK3YMv",
  "key1": "KqvRy8g1epH9VoV6dycVWHRa7CYAT4BhwScWNCSJ8tHs6v6TtsXxkaav5kkT8FPQhAfWk5QJbmLNxkCxMgvZx1F",
  "key2": "4u4Ae52NK7xuLX6gTAZNJUu8y48HPjp1UgKTvoL5NAQMjQMuCMX1aQ4LR1nXpA3HsiMzoEfaF9KXYSVFqwfkSzJK",
  "key3": "e93pwLKF24NQheLUdrgkM2cJkAndYHE1nrV5P3cUEZ6EeX21q7vvnfZtcCVRP2RvMwdKZpHETEotMC1v4LsbeBq",
  "key4": "5F3e11bsZcKQ5HhCeQgngFHrGVtyWGPdpLdet3YkeWuj47qiv7NNasLUh98s4SHxCyyea1hZKDaS75VjgrtJr4YJ",
  "key5": "2sMQgecCqF4HmYvk1tmJjueKZBR2b5Ty2xUxWiTrXFtfcvMmQdyqk9vQnoGNph5z3ZUJAEa2JjvsbT9dTULxEUQ3",
  "key6": "5cateubWk8KQbxTHAMTahjoG7vy9qdQxSrkxhn4Ej19NRZjaUnH9Aok28jvyraW2hYNQSut1FsfwghbgwCxu5cud",
  "key7": "3ZowLjtYR4C5oEJ4zcPZkThoRWZ4BMBfCuHnTy7BcdvvpAUJh1547TdJY1frGHNUfTpsdJVSzX9FkbDrojCXhrqL",
  "key8": "JWAeGGcxXBQbXcPFEVkdzSwkhtsS8HLVxgoasHaMqtQjFgRey9yMHyGTEQ38EzZsTQSHp7ke9ELpVHPoEwrwLXf",
  "key9": "3WRsSgipPXogHu9VoSKsPkCFsndr4j5Si5jbbSJhXuU6yp7dAQSjcono8cxxKY72dUxN5BQ756vksiVELUhfudEn",
  "key10": "ZzqvQcCzw75roXPEUYZc7VH5QuPVpCMMMuovncRSEuBCDJzLripppAZDMbmdMwBB87pE5Tkfci3oFMA4froLcSB",
  "key11": "44eZkZDtV972iCpdqZe6QhLe2VJmJpcujuCmrYmSKo7ck3v19SaNnvxFy7e1LG5pRSVJJuurLZtrgRy9zHasW6pV",
  "key12": "T5X4KYB1StNXFVFRAP3Na816TKWSkNY7yqRh3gcc2Jp6cnqezhB4nLJFxEJkAFbFMPm9kKJftBBauCJ2ra5Z5gK",
  "key13": "4uNsUhUby8dftAM3hvHLDFKUXjtq2BKWn6PZCgDiMH5cqcxjAmKrRNDBqb1uY8C6fLncqkHeH5baArmH1chhWvrZ",
  "key14": "5FXBrhcNkWcP7HxceMq3YrnGAmBLjjozdKKv6yJwWn3TkMxBUQ9MozwHPbJMbDVNhFW4auGvqtJ1sD3o7dvfi6Wq",
  "key15": "45upTRCEfdFqR8h2LW5NJoPpEu54EYERbVQxiiaViw7mjYKrwTbNsRTuLZfLRvvTKvH4i18uXZiE2Ntz8N5tvQT1",
  "key16": "4oHcoTK6BTyVVyNdbZuRhuWtUXosB9E6dbbm6gmycsXeFe4FtKEa8jmam7g7CZcyDRPogS86vH9umQbjSDLTtTWp",
  "key17": "4fNVySWn8vdAuNZaDebr9U2HdFtkUmX7dkCxPB9pn6FVtAgBxwuMJbwVQDdF7yzk1GLF2U5W3tAfvmedCUXyb8tJ",
  "key18": "LGcRps3i9z5rAawxR6YD9ezAPnW7e2wwnFyyoP1XW5Sk3sTMjJNxyGcCLikkroaoCRaqZzd7J36jHNoGQqcHREh",
  "key19": "3RSa8EiLepBCptcxvDNHPnqK2h6XZWtes6jGQDSxdsRXHH4RiyQddt4GQkoTU78HYtcsURG3u3TGZVv3wF1TWBP3",
  "key20": "3Gi7Gv9nt7tJZFEAAUj5AdMKLKBegkm29evNCDUSrymGfoPCwCK9rfL19jpaUFfwGmdFojHNiJFeBe8gfe33dbLW",
  "key21": "4evskt4HKcTfo6athjBniJSci92Rgk2cZUb8hcr1ar66z6WdPmAYWwWXgm5U8uYTyFefc1vejfKYpPDFHcpmKHp9",
  "key22": "2LVumoekppHj2h5unVcJmXRGQZxkLNQPZoAT5wXGJDVLqksiMwUepJh5hGpM4Zf3JCMRG8Q1wU5HzTUTjRNrFnLp",
  "key23": "4cFkv5zTY3oyYB1yEj8BtZ6ZnKRYp4KUvYaqqN5HBa2JfG4XCuPRwsm4xgQsbgnE8pmCC23rGFRK6xdapmDunaYQ",
  "key24": "64UxFMe5FWJqML5wL49o5f9i3wGf14hZW53zQhksY5ERyUUXssYfUWksfTUuEdxWz8NTpZ6H9jNZ1H3ghXEcbkjv",
  "key25": "4c48DvKjJDnqCT8kVpzopP9kVU494LUMhvtXknzhVanQXBBrUxvBxEz8gWYJAC67MC6K1qJB57ipzqfMdcoKoJj9",
  "key26": "3aZDN6EVv6SSKdAGvHA3AJXoq4Yr6TNSMGSdnim2iHfGLSPUsZdGAPicFB6Uyg7v9QPc3baAMHUJsj9WpjLYza1c",
  "key27": "4Wbfg7AQ4VFVvkPsBWpGSsXs7Dyszt74RRenNEnNVGCacXFj6z7s3igbPuc8zArkR9MM7d2fhVginwxYQHnPhzo7",
  "key28": "4Y3NRwAMikhsPV2DmUTdUscgoDWmBCNk89P1m9aoSptoqbXKV3jWC2gg7iDhk38iW4SD5JQMrdkdaoccnSb5RhNs",
  "key29": "2tiRGT6LggbqW4otvmZSmVK7tNSnjd6m9tjsYn6Y1cHXNYpt588hzfvgL9C4TPiJqaJgenoC645GhFfWJnsLWWH9"
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
