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
    "2MmiA91BZMF9J9b8BEZiLKt7ViK7Q17XBC4KHPrPHzdjHWzNwG6TLPVEz8kFehmWUcMbB6XoJDVmS63H1Zf4CFym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sfUK9cah1PNdBujZYYnEwiNJnGVsonWZfvm9H2SBdW9XFUd1FgN1Yy7VvMHzF4U8v2pJ1bYnvqKKtELz54Xob5h",
  "key1": "3SN4ut2uU3tSJmJ1ZXNxqvXVAQaPmVoMnpQbii7WRb7fuzJcDpAkqjoA4WtEUHNAZFMLHeQf6RceUrpwAcxkkA4h",
  "key2": "5PKirDoUhBvuUiDeZW1EtNHUYZuZUBjBfUEeDt6tUUmRTF8KebseEQU4dBGuauhKvaCfUxomjkeqgeq3Ma5yqWVx",
  "key3": "27qfesGB1YqwAYeS5sGE9rZovMwkBQsoEYQWMqdJwKK2E6MTASi1A69jiK9AxpZ1nExmsCLct5C87VHLqW8L36Xs",
  "key4": "4ncNnvEKC2mvy1Vp8JShQjRg3rYzaKSQ1xTjFFT8boLb6kEeCi9gonwEwJGRjfs6f1fahzjdSrVKtHYrA1RbAayy",
  "key5": "4gBYo8AyBoGwQ4uJTuNw5FnskGpq9aASMhLAjdPiXh6mN1Jo5AYJL4QdvEyAj3WS6KyQ1a1B3Cg7dyCv6pFhHZJY",
  "key6": "5RTyrmL1nXcKNxmfafkPu3TxPEkm27jALsHpuTmPotdgpzP6RXjTHHLBkDN3KDyYuKa83YiwQSHTP3uFH76e2Fr9",
  "key7": "abMGKXRcAyR2D2kjVZ2G4BZE6igpLSGskmSDEyEshJnpwxZ9QbHsEUXsHX2iy9Gpx7X7HGCWZufjEzwo1MZPJxS",
  "key8": "3ZGssYQc2CF29AZSMVJyt7u74XmLDVj7ubnimSj1qnBqPUfbBjaijfpS8UUSMutsFfavry4T1L8KD3kzbt38WwB",
  "key9": "2dv8uiEBhzC9YusEXawD9B422mD9HefUkynCfbgwk1f2i1i9gzordVcxwwD95KEULnWsYJBd6f2Tw68pyz3oZWBJ",
  "key10": "2BA5uA1pEsBgmNLf2A8SY4fGCHLAJWHV8JQyGXaj4UPbDikJRLREJybkDzo5aALjDwcs2YTAABA6bHu1qyVmWfAp",
  "key11": "3ENgwxiyxZjaMo66zKFSCCXzFHvo4hmFT5aKSzdejRWfEqFAXKsdMsqZtnumbZJdaWuww9eo1ojgEYURqwJF3oro",
  "key12": "2gQK7L11iPwWkKf6AoWe2LF2o8uyELRSoWYcSBbjQMJ88Bm4BA8JBefCU2tctXxPL4SX7P8TYZH37z4Vd6sogLuj",
  "key13": "BozYyCAgWsxeG6ySG9GVSDkgh9uPdoJRBBXwvksjKG5rgnvZPZRTVuuHD4B36GeJvz8V5WpU7BBdMRNMoY3pVWu",
  "key14": "wtTbmV89dwZLF9t4N9jJVLH3sjNXoEFAmvYMzjS5CRmkZM65x5Zo1wLcqki2WPoikgKhh4xFpcViKgsu6gxBm66",
  "key15": "5jwEuULQMaUC4h72yi3jQAWE7pYgUdoth2rXgdm5d4mXrAma2e9Cv7Y4mHzL4YAnu3S7spt8myMQ4YaQP3x29i1J",
  "key16": "25TVTUP3B4Y9Wa8UoR4dP3KV8XyJ8pe7rs1pwZCCQR637YfnPeMYSgpfGy3KDBrWk7U8mhfdss5axS84PTH5Z23Q",
  "key17": "2KeNgeLK1cNQmTLCZ6EJcHk3vuJk9jQKkG53YVsqbipgDe1MGfrprHm1Fs2s9EYwRZTAUm4SDyR2gJvxUMe5kAEn",
  "key18": "55ZjYFhFKB3nvmXsCjHwbYohyM8xd2C3Myvj5H4wfUtoK6Ag83Gb7NtDyHkgfRgZ3YGaEjLdAt9HXp69TMnEMzRX",
  "key19": "iN17jvVESyZZ29G438iAtWMu9kUcRCFyfmKY9UFeexsPQS8FYMFkJFviW9CYSFNkzJ4tF38CJeJgcDUS8u15FHU",
  "key20": "5GsbSxrVqqDGNvq5KghQVnKs21Qe5NT9Vszv6sUBqyU2oZniUcJVCXpamBZzZmfqmA6m5pBdRC5zGVXAf9hDKGAC",
  "key21": "284HfujYHK9bSGwS95UyjURr66gxHRoGBB4cet7FTLgx1xBdxygZiCZoWtnsvPWKWGN58oX4GKiKnVg348cnucna",
  "key22": "2DxWgrzgrDTFxHXXVQqbtuJVRsraniZh9izLAdhrfZTrxUWZqwTtC1mk3baEMzhQ3UVtMCKMkbfYHoqajmZhBZ9e",
  "key23": "2aHaXXL3aYVtMrQkbeDUSBtuUdSG2nJBxg4oXutpdFUuB75tpQ5eahKJz5QRFiZcjJHWxidcccKnxTKb9oaaXQoc",
  "key24": "5YcypkFKBW43nqT7VvjK9jzpRpcZzPFiK5v9VDHsbCtxKJKVFAgjwFtobCyyZAGvghgnwfBasTY3uXjYTkAkxAR9",
  "key25": "5Le3zkbU7B6oihWK2iEdyTs5mkQGJ6GfwivGepFmuWJehj8hiSzgxtWfxLbqdhyAsCmjfK9LfQ3kPkkjLhT7fePg",
  "key26": "2Ht28VMvkpe3NRGbJAFCvMSP3hdFtarKxHUkhBDNU4e4awMfy8iP2JAADQ1TfLkeXpb54hjsFXwfrDVwny8Q6ntS"
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
