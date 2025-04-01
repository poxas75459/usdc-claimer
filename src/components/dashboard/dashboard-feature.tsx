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
    "5iHCroYtNmYrm1Witgi4Jb2rUP5bpvDTWNJeFEufYDV5YnMfQBS8KVmLtsoe776ZnmGh6RW53m77hkmQuKr4koZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4myQyWArAET6Ni6RrtCMy8D6oJqUccjtmPQsodoLL8bSr7GyqsPeU9NMDoTTE1zgTPJZnFq2mjQt1w9xetjnn5Jj",
  "key1": "4daHYfpsknq2jovHDjFHjRRXXBD7F1UEYvaN4b7mE6KzJayMokSnuto1htEKQBYsoTtss1VG54cWGBqh4ZNC3SFK",
  "key2": "4y8SwcuYYhyNHXdqZ7mmjf2ojsZLbxP8E6EtcJpueuKXfcdDKLazVyfGg8bXZcJLVWrCbxbXopcg3Gf1USwCcUZ3",
  "key3": "3Nc4xiWFvh73bfLSebFU7VHrmb4mZsT9yAEsw7MADikfNCZwpUVpGwXurc2WVinjgie9Hnyvatr1rCECpLEmAAXu",
  "key4": "3e99BiFexEcfoC1d5NBzHSChy82uUa2drM6X3ucCLdu99jQt8rr6uTQXL4kScq6jVzug3VU2YLnPvw6KJeWH8yS7",
  "key5": "5qzNQsjvcJn36V4Vip2kzgUSBAMiHCDpLSnJP4szKLQf3Yx6gFxAfD53Tuy7p4rhRBGcv7AvfU8Mb2Zh63iHXDhZ",
  "key6": "2XBQ7FxmpbiZ8M56XVKTUFtcx7eMP9wDfbNayX7WbbRdTcVGEmLkCE5yaVmLK7UKbvmVKxNY7EkUvVowfopyKjRG",
  "key7": "2kNwAEnXGoxkQo7XiRE7WekmBrDZyquPTmFS7JYsbf79ZRYxL62VAx8LxretAuxe9rMcQDu5hw52YBLm6aZ5dGzg",
  "key8": "2uEyHb5X33HjPwGs9FnrGw294kqBxaVLRLZ8Pvu1Kn6zEyoznB5BVnBDXzPeEFjvQiRMvDVB3d7PsbAavyuie3an",
  "key9": "5fzN5HMYpcxrngQ6qD7TzHL3ovaE9dnNYG1EvRaV7kXyB2sGrnWifTf9jS3Nsa11cP4Ve9iE1Qq3CSrdsvwWZ8jQ",
  "key10": "3RjVdzsFSoaN8SBCwk24iqxi2Zp7JUwvarhZVZRjA7qvb7ZzqvvJ2mvpgokU9mFchdZGNAKm4J5xQyDSKUFYBoNe",
  "key11": "5gzftTaz4ahXDqi6rcibvFcnHMJgv2dcg6KmtFBvZcqkNa82Y7jUVPvg5NCyD42HGgWC6qD9Y75q7ERENMZhXgEa",
  "key12": "5Kb3cyAmAeHeq5iqpBgQ6kr9xwNbKC7KRBkVPyrEjNbEDiM2L56hW18zgQwqjam2YTCBMw3EF2nYj6ozMMksjh5Q",
  "key13": "RMwrHhRWLQRWdop35oeuJ513rYjoczDBeSMZmKvxAEVQWhSWqKWn1W88CLRMyjtghapxDZiqUCxfKgFLtByd1dj",
  "key14": "2MLZtfnZMseM68VRbq8WKEatF19BYstupYZ16cLywd5wADcxJzRCvuFkszsBjRuxB39pi4m1ecvRkiQMEYnVy1Vd",
  "key15": "2iZmfwjV8zJHwgG94cJjCnszFfQaPpRp1Yjao7H8J36c3Kyr3EZYGCSTm9emWsxNMHRheLEM8uEqkAx43Hozm2iS",
  "key16": "5N8u36yuvSh7vrvLxXvANMT9QU3kgBZTsaUTtpxwEj6yoDQiGkDrMNWMtvmP1uWA1eLQNAr6XEteqGV1tjFsp9pN",
  "key17": "kXg6GPjhQKYzPtKcLnpxfQK3faAhZysPMaareEQyWhHYPUqLfaT1e79kWLaRriy5ZjEMk8QECr61MWHezpJzqeD",
  "key18": "4oLHLF8srXVJYh1TJBfmS9rQS7eyGTvxmLmcixmqvXnWzpVozHbJyDxC4gzymNjJXgWsuFVM3KjLu5myCA433iYa",
  "key19": "5sjMoo1HVBW8DzuBnfzxetUnQ4n1Uz82UJMxLg9wupGpko876D3epb2UPBjWR6qyRXJrJ65Z2yQYrLUAxfBhLMZi",
  "key20": "3BadikwbRiXrJA5zsDCEYMsZUfUYUprAHnXupNwRJsFCsMfvxQW4ibESEtNHnph5kkXAW9MuU2nGiVwm9qT8W6vE",
  "key21": "3biQji87Z4zCoJS7MGu1Zn63RRKauuDHmxrQSohjchqGxKjGTNs22tt1GrutJA4VRJuxWPeYubWFJkDK4R6mfcq8",
  "key22": "3TQsddBWdLRzmDP5Ygm6F8rWo9ZJhEFu8obBfyQc88jpMKKZQJExDsakXwZUod96xUuPW2G72QSJTgzqEjk6eo9K",
  "key23": "5QjGiqBAdk7Z5gXgZsCHBZkkUxgwG77E5cCmbCxcfxAVTinBzj1v6UMV5QuUe95dkfJ3iho2JJxDESFRt8xBCzT1",
  "key24": "2AZmDWoieaKmojH25roGkGoNm9YBThhpTRpHwQCj8wYSVUa9VbBdWobEpqSSDCLdFWhsuxgdUfnb8H9bTmGihYCA",
  "key25": "UdEqS9G3LXLzVTFmrMLwqb8PbUwQbgPTVcfJqFSMUfw1mLjYK52ex4nTCaLgEWFFvsi7LgYAiRQQKG9D4fpaHz7",
  "key26": "5cy7CGTyTA8evEzXv18FQfqLeZt7v6ptagV1h9muKaHQ7ywaSAGgrptS1MTg9G6eWuETS8L1cSQi8ExHUiSmyuxM"
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
