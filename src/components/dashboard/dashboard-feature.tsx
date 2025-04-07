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
    "4HHXQZZzbJ6VS3Vz7tgFV43833ERRYxKaa1eVALKX9nKRZCjirzw9s22dfmLZx9o5hi8AjoDwwKP2kZGRWt6EVrx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F2nGoHUu2egForvv1q2uBqCS99kcPXy1x4PwVfhqqqVC3Cf5TL7fr4VT3t3DVBgzRnap3Z1c5YUsyA1YibqEvXK",
  "key1": "4R8z9VhArqa7ctzxpMkKrdDf6GPg2aTXrv5kHiW1iA18M9JfkHr2LrwZpQ6oqnjJn8c8S8Q8RrMTsUFQ9UzNJeJf",
  "key2": "3KMCt7nw49ozRnuKr2VNtaGjAhEJzytwgCwmgEdXETYy5oX2FxFiB4RJBMj5pngS6d5rNWntyj9zbm8rNDC6A5Ja",
  "key3": "4FDnb5JVRHN575n1M5ZtAQDHEHdcWCRY7t7wpwNyVbFLTeXMVhqh9aSYFpECJHzWQnNFT1Ld2hBL3vd7L9ZHvazS",
  "key4": "5nzwWeWPv5QNhVWZTSMJD1PhWXDhZBTN7YUi8PS4xfLBSzFW9gokhJRXA32W77BTqFfWUNUx4AG2Am9FyDdi4aiy",
  "key5": "3ZKE7HudhXQK23wMKtJYFt58aMmxcj9JAmKp4tZvUXk5TepAvVmt79wAzGC6PqJwwordAkJqUSaMDgTzd8koTnag",
  "key6": "5kVwWdNmXtrVMAyhrDbHiVZarHJYykYTavR4BeW9YNRK9VfC49ssu7G1RMA4fEZ4xFqFAutJs2VDnkjp27DjmnPb",
  "key7": "yun2UCC5QJLWmVzGGXobdqed9hvPDdZSwuxnYBQWCCecfyTqg9wvwUaXG7M8DHP1BJjRD3aRRd2N5a5CT6kjHCX",
  "key8": "5wmeRcp9kewqqZF5RuuKKj5WAARHBtVMEufs7QKs23xt49sVv8Q99XkMPb5KohU4KtFeS9aYmnZE9Bt8iajuWowY",
  "key9": "2vKX5c3mYxqUfmSh6YcBkX8XxJd4q1d5stuAkUnFESdUqkbio16FJPH4feQebhN9KTim6xo8smsE2uGVqSR4M1zt",
  "key10": "5KibZdNVZXxg7M8o9C15VKoweYnKT6maSfPbdLvxGh41DYn8MzULW6eaxveSCF1Gd8NrjtUUQVvbUafsSrjw1jaW",
  "key11": "5LMXW8sjEiMaEY8Ke2LTywyVUpudcJUUYk4t4HZL3Ccr6Rvh7PhDq7TEhmNAmHHaszqDK1RuDcxjkGcW9GcMMVEg",
  "key12": "5NNq3zQfTyvLDSnU23Njw3WAbYd2ULMxmEWENbh9q4RS7UtyQjmJt2QzZdGsU44FQautg7ApfNcao7hGZbMuHqUR",
  "key13": "4BeyFcE3pKrepeFo1wL9QhwqxH2nNRpucZjKUpErA5TxLSEE78oE4RXeynSs9UyC5Zi12uFjyW2PNbGUrJWqhucA",
  "key14": "4q1FEUg8HhJhHqmYwQ3mBq5tb2QA8zar68AYxuuXkaDLjKY8zh94SHDBJGHCet9xmk3Ri5SoWJxYZnxMcEMdbg2u",
  "key15": "2Tan5YetgnYzoJC1XpFNjHzAzVQohSGcfSxdugR9zxheyHv4w4JkN1A9dgURwyW3TaHURhLBAP79zgFMUD2K61CA",
  "key16": "5bQzHoa1rHEdMwW8ECp7enLA7FmgDMpBSM61DE55APjcX1QrZPHEss8rq3Q1HC7oRojHRChpG4TiaLfppZG6YWC1",
  "key17": "3tWsDQboEe9p77Em9uKqGEJmpyLkPNJa1TJt8BaEVcZ3P6FEiwNUeXWVPjDZ2cjQ9QpM8MTMRXg85cvSkwR6TJAV",
  "key18": "2bG2ajAFwZxxwEKpU8pkNxc1MoQJ9jZDBRQWc7gbmZo6KM9JzsABtcKmCuLB4rLgmCkUzyxgoGvyX41RCrSEqhab",
  "key19": "3H6hDEJWxiSXyDNR6n9L69YaEFwLyt2EDspBNfV7wa7sRtVoAvwfeufnJfJ5zpSSLK6YCWF8gPexY2RAdTPYEaUL",
  "key20": "yUx1LkWVeMG24gBNMz4kuSe4ckbbfeactCsxKvDK9LUPu9B1YakzwS5Fymc3iSr4fKdR2cZwwdHVPtAkNuxyS26",
  "key21": "3TF8KiPCyMZ6XskBNQw8X6uYWrHKVFqs9Fwz2sNEJkZZsUAZWi8TsALT5gz9EhxJu1TY87G4bPWkz2VTrGRU4bkA",
  "key22": "42QxwHjemaRJNwZtPz5W93MWK2dpQALwhEJobR4QCrS1FciLTMQmiiRx8PsfQjZxY5fvVKJBbiFae3TdvETabXrQ",
  "key23": "59976VyWNtcRyx8iDV1rVZdCVS48greYXM9wm1cj7hyNMk7YoZ7cggZDe4zXVdUtCrAAWoGUaEQDygdkTkrUAK2W",
  "key24": "4bDqgvEgDgSNvU3Sakjsg4sDaoHCkAggBozSXQNmTzLXRDpSfggcXPuwfaTV66rMWgvTrFAtgZwniKEYhrYJ7HUn",
  "key25": "2tpd8wrcaJ5BfMQfaX8ZJwBUThxBNKb9giVTdjYf2hpngBX17WnfguFTM1GZ1E6zLqJrp1eSrCCHVV5NTD9th5h6",
  "key26": "2AcoM3Yre4XRPCe8QrtJe5stDJjbpT842ZxxApBXW75UC5XjibpmQMdAyT4Tx6F5TcXHVXtC4cYWWLtxc5suKuUG",
  "key27": "5aPs518Rs7ASSezwLBLCqpWdDb8ucHDHShBMmJHSmSTETSBLVvBewzDHKnqm9pSmZfVG3CmbY2th9nNjCZ1fxmZK",
  "key28": "5XVFCUm93TNdg6fbj78HkJwzVWVfwEuYu48CiXoXLnNuqXWVNcnwnNWR5L2REeHa4R3CxJYXyWUwBw8RZCX4s6Hu",
  "key29": "5vPvnhqvFFxiEvY8hna15edkbgDgAkpYJJC8A14YxSe3TFPVsAiUHJheDBfZoKTekFVBMwQ2GxHtZa9K385ZRJWX"
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
