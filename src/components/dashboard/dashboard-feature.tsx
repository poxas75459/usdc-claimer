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
    "2kKtjXin8stsCNJsZQiZKjkwoAM92mgsNSNG8RYHVvMbL65WTqNozpax3ppxurdNCeesggxAjvBDUcUu8WDrqw43"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iAPCBrQz324tNnRW3Ke3Hf1WwhrmpL5kqgBJGauzSr9YAmNramNVqfxqfoYpMXL9MK2rSmjMUjUGsZmUxdczFJD",
  "key1": "4JFwKuPAozUqq8jTUrfhKj3a4LQ8U5spAoCCK536UpyPHsnxy4jKjtXiwvZzovqLgt6FeXHbfxbDA8yX7YmoJQua",
  "key2": "QkJR8WtibbrF8FBzePFLyLUq9UwBy1G6gTSgXGUje1kbyo6ZYBArirWvbwwf7LQfwTYs1U1vmbGd36cFpjZ7o7b",
  "key3": "5BPRt7fvCzn8ppndBjJaB1B7d2nqqPATubafUnYoAP2PNtQqY8U5ddf4dEK6WtEd4SfgKv3VBbGxyHygd5zjst7o",
  "key4": "5RPuGpfzkP37fQzsvFeArDgeYpYtPEd3b5U6oVafCveU9XS6h6CJNmBPaqQNyWh29p97e5pYW9LPRLVQynWuxNwE",
  "key5": "eyL41RqVEVSwdrefcibcU85N3MCCsypN9N7rDaWBxoy1rdKVEUMMeeyk1ceGC3x6WecBbokSwwFFjCaLCLQnhgC",
  "key6": "3GA5NB8cfQDMSfeNQGtqPHQT5wmiSbs94GGYt54RYUC6EXG7PJdEz3NtLRhg5A3UzVW4Wby6K13LgXfyRBHBbsCW",
  "key7": "4DErmazLXskTkJjUCRiBoF6KNywCcWEVePddwJ8SEpac8YipN6KbWHoCTtiA58c7Ap7RfT4yHsM4za28RBZRANk3",
  "key8": "CyBEQxvmTqP2hJnN1Dad4fm7zJQHy1NkwwcLaEDv97WVXQpXuqJhn5ki6ZVTB1q9x4XVhBttkRwS8hbBQV64Xxx",
  "key9": "3AzG4tRmXz8Vez6gfHUrdPGnVGjRpDEFMerZjtHksnsv2Efni9oJZHihRr8wbsqAA78FFBRqmgv5fLx2H2T9htxZ",
  "key10": "54EehAokJ8RMdgz3W3QJXaRFB3fUc6beMaLV1oTzqt3y1sCzYX25jyKVJzQjX6oeUyUt6LfUGf6JjjXvkqXCeHA2",
  "key11": "5bZytQBHFZbzvixR7j2RsAgHkGoZuTMUtZ47LPvDR3YYTj8NB54qUGN47Vnz3hs6MgoxBz3DHwRQN98NAzt5vEe8",
  "key12": "4N3sC5QPtzRyrvTMhDrBrQtsiCwoNcq5a6PrNKP2LTD52T3Gw5p4ysANHnQ5XNWeVGcCY4zuddaMgyAQWmgR8oSp",
  "key13": "3unL3q35cFKMaR5wjtfJbSFAE1oRcF7fSTQVx6TQG6uCmroVzmVZbaFUMpJmuQcRrpQGNJtb7YQoR5QJNEApB34C",
  "key14": "2Cmrmr9DAZ45NUHuUFMufrPHAuYqxJM5GHiP5uVGkfsQ3GgfTditVoLW6BpeohhXw97NLCssoQJ7Dp9biQgpLyM1",
  "key15": "e95wi3nDgtB9gnomNH95byvBoLp7ptSuQVHN6dqjifz35Du6asj4it6CbfdYp3wtke5xgrNB6ASgokxebStHu5o",
  "key16": "4hB4STUzKyZ6K2Re7SmCjcioPnZiaG19JetWYEsbwbbAe49uzTfMFoqqr3xiBJfc3CA2csqy7pkGnh63Fhrir1mY",
  "key17": "CR3yYyTQiiAxHvoHHbzsW1HVUBdcfzc89meYm3o8Vu2G58rVsX2PyZNhfdVuKkrnwXNsG5696LpLrRzkf3CHQep",
  "key18": "2AhuyztakizTHgaBfjM2hXhJoSQYi1ptZeXUwyqnQ2LrpXpCN5vX7NupCmxxmwmJGQJYk1PUqRSi5g2RhpDHXjZQ",
  "key19": "stz2cNLQPFKjSpibsUEk1Wno4BNHben94HkuUDxDAFbWPn9GSEyNFmtUoTCjzAvgGCzsN2bf1inCdXnTmmZrXYE",
  "key20": "5vSEJjQLGRbMmm3JgtgxLJ23VFu6W6UcR3gsxcj2GRqC3SJDuhyz8FcL5N3mEvxSw5bq3nqVETA5kR9iHoPsfXup",
  "key21": "obBTChN1e8wFQDj8E7PadAbqn1d2PydAsZj8cGKPBhdoSRSRDDRqvPdsGZWP2xgzTooq2gqb2nnDmvYrxiJLCXS",
  "key22": "3MGRTjKyZph6FXwX1XvABHYrZ3apM157qNWzKnhFmuJVrPyRMwoERuXahh8z8xJCyUQ1EA4k6H7RVFNgthkoKATa",
  "key23": "66nWEPPoZxBLy3u4LmAokjZLr8XCyYeXLHhgQTScCN6UHPGJmC1TixtsJ91XfmfpxoNwTx4yChge8ktMSZcbw9so",
  "key24": "3a6wVdHfqqHUgyUuE1WFQPkmrWz83RTDkFDzW2FWje7TwxSMh129wHacpAGc2yNd9FRVVYnYnirGBtP2YWt8kbGX",
  "key25": "5a1aujbxSTBEG5HLEiFCh7tfTbdVBiXB9yQm6UqQdbnBdpLwFJSQgggidQ4AKBPZwG2QZ5SwBPBF7rQzZ8Ftm1nW"
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
