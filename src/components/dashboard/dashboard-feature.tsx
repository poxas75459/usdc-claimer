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
    "2TzpRYVE89v6Z8iJA8vvydbd1zBv1iMZ7aR7zsYNKiUxTjwDLW9UEuHmPaQxntrnz8PtN9rLxX9t8eYBQc5KkBf7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XuSW2piEmw7bVcxfuNqn71a2yWLUYfqkQMaxADSzhyWRu1x4MLVSqm9VHddCpDxxsBoPA7dLt9NAXnqGq47BHPN",
  "key1": "4i3fYUkwS4vt988xvnuBHfh714RPyP6RXNqHkrqQ5coucqoN3FD7zWdceRTFgWn4dGS9aZZpKuyH5jzknztVrjb1",
  "key2": "2SBim8LueBvW8Lyj8UQVAGVxJpfCtJLQtSCxAHoTMpqfZxGsqGUJxdH5ZwzyLCn4rB48XddjRXXgrZV3fTzFDz5N",
  "key3": "Z2E2CD1aZ9gXEJGubkDfzWAGExG1mGXMbHkDuB1ZYGEgs6oq96RT8spkjmrvUwogTZQhk2YqQADqdThBTrVUzkA",
  "key4": "5ezdzFr6SQcMQD2pVE9HTzzhdRCtwLSHJMw1z2GwbjxbPYprBmFSKdo87HJfaLC5X4TtUPyA2vEzQGa9Lm16ow7m",
  "key5": "3jR3ZjYC6arvVXK7YFtssBLL4P1zhcDRjHsVhT7MqTdAEphe4tP44V72e49NntAEDmCC5JGcCXKU5PWFQEMf7zhu",
  "key6": "21hJt1fpffj5piothvzeNPYiJsbrpxk1Kxd9EKxiXPn92YU44ARxE8iTmdQCxc4xNsCArzPLwiwLKPKwdA6zJHLm",
  "key7": "5NJDHMV1uDFTMcxYqVPNoSSZpvxgmGS7r82tzTJeUFft21wLCiDKiuhDbPPYmcsg7PDuqYFDRU9R2b3eUKpe7okG",
  "key8": "4pG91oemsKBcRg5FGE9pUhjkMsh5wru7YVh1p6NtdBQhWYqPJMhT8L1WFxxgVtA3aTrfWSc9YMJJe1UYiUWJr7Cu",
  "key9": "3vfz4UhvtZJLW4YwdsPibknUeYL8Xb9porL5QWxKJYqMZNRtZmebH4kPpsW95Kv8PQpCnTGGFWLNiKB1pLi3LLJi",
  "key10": "2KWaP85pgAkpYfccoBnGMue9GpL8TPHYp2zgZbmiJec23YVDsLtnQbaCrM4MsUctqEt6Kk2auYeaYAfvKJx41caW",
  "key11": "8Yb7MHjNW9hCbCXZZw113s1NgSdtHU1xgS9pp6pPJdHEoTQv5e9kzDGwGZvuCdkcxiw5HXkbeVZb5J1kcawkCBV",
  "key12": "2Zr1VBSRr1J9q9JSUenfRuwBoTp9KTWbHsHpt99veom9ybe5U1MBxgEVkzkagbVow5zx2R55abHGjuzdULXbEiSY",
  "key13": "Um9U1Rr1dPmwDWaapi4zZdDJX8tJkTPpzYAZh2YJVMiikZ9aUBU8UeN9jXsUUHvfFXcv6VsVwbx3dvxxJHaEsSQ",
  "key14": "2gNTwmSd5mo17pK64WHpwi3NwxYXnBDS9sjd5XXLC8ekvT8BCFXACgCED7edFaEbDAm1fKf2XWvDc3Evem6Li6Nb",
  "key15": "5xXJg4Qrmdi5d3rkx8b9vyV4a2FVPV5ZsFgLWMyym5UWuV2etBUoFHt96FfdVkGZ3ZqaYjyAADjfKqCoJ7RpLpPd",
  "key16": "2GZHBhhcD8LXXqPw61e64ToYDFaYsW7iFMhgpbyGDi2esCRcjzUxVqFWWTgFihKT4pdAkqP1gTMUVpH97kngXDRA",
  "key17": "PFsKazCeVU2ExvzSuk6F8gfHJGgSyB2sYEbJ2p3iZ5f4nkdg9wY9PqPvjKLHRPkSzMS3KdPR7YpobT345w8d3Fn",
  "key18": "Ak4qHvnYm2E1Q4ztyhtW4Ui56NPrqGP7R88HZNvFGo1vSoH4ji8nVn6WVypffW8A7MBXkzDPShfGbaxxoBehvBd",
  "key19": "47dtXYaG9azwaRPh9fHmi7CoEorsiNJ9nQoxfXZF4i5VugCjotKrY1qm66XNFtS1sYPBbaMZUCNuUwLnsvC3tEpu",
  "key20": "29LQMHE2aNM32S8vcG4gJ29ZiAojKRPQBTjK4ejNxGoAXdpTiSYpgySVAcQ3uwnoKLPpjeffghNAGkTEUUb9G2Ui",
  "key21": "7WxZkHrG8GeyLCufA3VPtafYdufP8BQovdqnqZNR6qbi9aJb61xaC4H3TSXM4NJ4Fm2MRrYtXNdn6QVnTs2x7Aq",
  "key22": "29kZ9wwPgkhU9bpivkZWNjd2huc5z3EkEvfeSf57Ckj845VZ4Rb2euM6h9xGmhxdV5WYTuWah8G5usZi2HnVYdTD",
  "key23": "3wALvRX5b36n3B5C4Z9AS2ReLUDGqj1E2rZjt1PDLddy1eZFFLRrPsiz5QLMeqeCjxYn3495ttPTT1KE8rnC62rU",
  "key24": "2TfyCbts1C1rXeyGiXAxiyc7rFJLjiqodXdj5cXNsZoZ6FYyXpwWZpTMzaR2wo8LRDu746yQoYSENL5UPy92NGFG"
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
