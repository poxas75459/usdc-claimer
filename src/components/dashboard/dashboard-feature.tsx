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
    "5GUQE9fdsqbuxSsbTv7wqB2Jrpr8xgszfQTNLtNNPSfYqrAjw6E6t4hX7KU22pqxAmSHBLWBiy9g5f5cQSF3V5on"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57qgNTsu35hPF6n4riRyjNjoA2kRPBi38fJqV8t7tuaNSmtuUNuUEwLAn8spH1N4AzXE2gFNw4bMGu6YJ8fBJZSr",
  "key1": "55TiDfSCLQtXiKhWDagWF2EV3bm1cEs5bbVZUhoSjifC9PgaBWUV9JUj9ks7SJ9RDf56CKmC6B5ceEMCKGoCqPbU",
  "key2": "4UCF7wV2Fr6jU4VGbhSEzQkRAda6w3Xbrva3ooKzXK6DpWg9EdAEUrBcNg7rKZoWsaR6A2Ei4CoFB5EB1r8GQVvD",
  "key3": "2YSV5eeqrFFq6w7uibhwbLL4XEVV6tArDu7NbTHzR5BtCZyctkipysctBae44sL5DJA5KCzXSXHmPgT65JtEmMVp",
  "key4": "5Sun6QAv8kyug34W5FGfKkc4yJmqfXr6KJAX5QmJ7L3XhgKh9muaWHrbkJ96BF8kBsm5hYzCKAgp5Xbw2rQLxhhC",
  "key5": "z9xCm1fJ6u1HaQqq4BpqPc93p4fSG3N1mt3ieQ1uFf8rx1vC1acHifdU7Q413FPTSQoVqvWoRsHpq7mHwNqJ8QS",
  "key6": "3eqhXZmqBbdv8v1ZVpm1WYjS5VRLDu5i328mQnvS9bV4HFydNn7oHKhvWCCsqhQHdgH2A6kTRhgyNGgXwTFV8k48",
  "key7": "DkiNcj3GKdDrd2dU56CpRfjUbAkRaUVnPCKmch3PtCt1eUnSWRemFeZYBztKrWHAT4BQHhFZgixc5F8KBLpGYWk",
  "key8": "3cXZHH83Pr8bLZ8AghPUGT3opHeJov6jP261ohgB6GG1KihHQTqgZUPrsapwFBhYnSki8pqX9k3soBJu7G7C1we9",
  "key9": "2RdbN8ocJP5VamaRbvu2db6Xmc14Mm69UbXufc7qCorhtcxe7UaxtuDj1YxUq4tTzyrJVFeyhjMHBQ87vTsHhwkd",
  "key10": "4ZRrEvqf1oMGFhPLP6LahEqkrtbU8F2hGVbW8PYUGFK1cqV9bfwYqSdsioz21p8DX7masLANWAZFYbJkzRF6YJSv",
  "key11": "S1C6bxCdCnrydkYezE9xYgYVACEgYkemb9UVztXRNhioCBs93XbzSpsNXWoDN2cAEmdK1ur3tE8sMW71MrYkvce",
  "key12": "52Cs58zby3gjnNZHuBjydxAYRZ3A72cRoEQ4GnognuJreWnGAjgoDLqdjjffkbdBeQqkbFL7yx5qEFvGKe7VtLZA",
  "key13": "5fFfXPtFKZpyVCu29CxoGrVGC66gf7wxecd4TRrzzQWTafKqYkCSnAL1fe8W9rZHHZVnEchPSUA1tSZX7FGRPmP4",
  "key14": "3UqvVRqcQi9gjCkZKzvNGgWF3kz11dDcW2rx4zdK9s2F94reDe2Mot6uLNNd5jPhTSevAESPgEhYgT1XuGoypUyL",
  "key15": "4p371SSoxg6QcN3Sjo84XBBoHNnh8Gp9M7zRVFqiiRLhDewDbX3sS7UsuvHzJi2TKfErQiPckJUpJszBvuKZhEvZ",
  "key16": "3favntuwx8wxkWnMHDCqD9hW1W7EEqbHXuvxaDJMCWdMttEmHgwJSG5aYvYxQ8WmXT5ZYdCEHZF3mDF8cmJ1T3Nr",
  "key17": "3m4JemUe3VznGUorsvMMbJCKUsPMAyd9xeZijbShQmVDjfV97SPbcfLcfraodwjqEuTUvvzMDAjT5QgDaP7t5mK8",
  "key18": "1tE4zJhmDj2QvcrHzwgWdFBsHxQTKUi9HWWwjGwrC9Ri7j3GNV5eM7Me3HXNwiRgTGPq7KdjNShgNRXVCysLxpp",
  "key19": "2JobZsPWbixap73LnG4TY8jpVUqswVLo7i4m35UkemhR39pZkgkHJsiHtrXgxU1K23CKsjzGRJdirWAmdgkTPv4u",
  "key20": "2WqFvZ4PEzx7BXYwWrGmUpNve7hpAzw1RTxqUE3sHxzpo5EjqP3xfgjBctyNY9Uiw8oMWHe9eUZuRuR9vKBjeJoZ",
  "key21": "4brQQ6LQ8c4aAdpVqqdmqWt3ysmx1iwxNs7ttu3oV5HcB6ausigs2YYVpvHwgzkjxVtVeaqprgDxxdUb9Rjnj5mY",
  "key22": "4jC4PPFCEdgyuV1J1X8Y5Umfs166W3iyGoR9v9h15w3ikb9eJYsFGAyYWZyKrZw6k6TGoN2uyuZdTQJtqYKe9C2E",
  "key23": "5u9M7LpZ7pJcvdj8biRAJAybPiGeTv3CCVvzYkQT3Hk3ktDE8HBFiRLCKNz8TW1zUejDx2Zn3mqM21odhtW4gpGM",
  "key24": "5JqCRYkXv27kPpKntAGj1vkePx942VU8GEtj5NeDyDndUdRt1ED5htcanwYh6CTaHTqmoyst5pUEJKEbhbijkLSU",
  "key25": "3miRqv71UQmwpa9SYSWvNYzZrDZarefRED6gPzos5EcBnnrxYea9PJx9XVFzShoxNEEtmup8vFLg4yQUnv6Jmicm"
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
