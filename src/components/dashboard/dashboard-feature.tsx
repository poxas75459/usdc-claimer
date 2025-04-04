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
    "4peoJuv8sYxubQs6YpeBSPc4NJvQEK2sg288LxSfNeEUhdZ8323eFLQyNZB2Mfmft7wsBoL54ZF361JQcUTkvMnE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2knUK7m21FDHwMqTDvSqFuJzC2hDxCFEL1jPRW72Q39Ejq2ZLFXNh45DTyAFnvBNKpFZpKr48psdXWKm9y6MPmho",
  "key1": "2XeKnEbcES1tqW37P8HXXjqS57D3QTemWyupcNBVCTy2sbjSC98d2oapqMFYwxzn5L1K6hpmuYys6kNtvM4hG7md",
  "key2": "23g598PeXuJxMa4P2rTx5HNCZ1noxWHw7mYYceMBNAXmDFP6H2E4UEswBtX1mHSuViNQMnNvbtZRoL69LVXvgmoT",
  "key3": "3tdMiNh89X82fBjmpHTZmUH3ebk3n5Eo1bNijPvPCDAtfW5Wp4oEg5BCqqdRRu8LcC5AaTUBftQRvKTsgG1nHWk8",
  "key4": "3wCnramqmNVK7s6BzCJogooi6uD6W7RDyrQSUyvaLM2ADFUWZ4f4DdhUdP58stT3gP6vhTqYtnANLzgu7hwv7acB",
  "key5": "3QWVFmVX2DcL4xQJqqXeNY1WwEDXL1jBSvLqyoYdYYmCjRetT2tYow4wNcngXSrCHWMFZbqaJn59MsrvdDFToZX8",
  "key6": "422aXryMr6M8pMY3cQ1LZKaRxqP74aa2j4WBLmVVbQCWg4Go9VZGYWEJiBRNN72ZwCbQyL4Zgp2gaj5NjhK6ZEoh",
  "key7": "vmsXYjw92btrAYydqx8XCy4nyKd6rep66C4WXNLZvKiy6SShkQqJ1FCodN7qu42VgCB2UBWDnhhAzw1v3GvnidR",
  "key8": "2hF9CTVy5Ja9X2u4suxVbC24UNJ69Prb5VcHC5ChmVmBt1h6RQdEZap1vXWKC4N6xG66gXHogwTrDmXiWYdF9rB6",
  "key9": "655wsvCWjeu44XULeSqb8bqrHmFWhFQP2kdW26SEtmnHVgMui2XTJhFbMm9NT3i1SGKbDEqHa16vKvDV6AXjfes3",
  "key10": "2MiC4phKWf4XhX6PDfVdy3a8hwTqjcdfDTApui9e5HrrBtjEXRZRu9todJtAYX3CC6kNBETC2qj71X3DztmxhYih",
  "key11": "2Kzm5gFKJmWPfFqrr77kSPWTZ9ZDfjUD1wRTz7sr8YXyU1q8HJqiomya71jRk2jZxhgSMXu7XJ1FxV1BJTeAhBEg",
  "key12": "2B7b4bYU1HVCNzZ2dPTCvzDB3vU6Z6kvCgwKDZfXQWwvQc8HaCHiyn28UaUTnzi1Zb7yvUVV7nsKuJ9fSmazE7uM",
  "key13": "39tc22VQ1Hn27JHmWLXeo2k3Y62BRvJF5wL5BwYoK8bPyauMMphnLkcFZqMqaq9vYq4CkUJhjjtiLEoc3hmCFCQj",
  "key14": "kJfCJYioorqLK7eQf1gx8ySHzynLTaahf5jv8WVyYrQ4GHcSzwq8AFE6NpAjA4wtkLaygZd2sPtYp7Munpsr2H1",
  "key15": "3tY4449KagMLzuuEfPXxNRojM2Xub4JVUtiaQxvZyUgFLJ56snp7EpbHpPqHDTpRHxHHAzbr2q1CQzdxvmZK44o5",
  "key16": "gpz3Ka9hvRRHRN3TBfU3rdxUeDpj616fYbM8qXKCyEXP4wi1hkEmo1scnKQwFdGkHyW8TEwbn3WVMfnP7iLZYNG",
  "key17": "MNrPkuUVPnB6KtT78Z6tp4RpQFegM2H7z29Bvn1b9R1U9MYu3Foo4jgVa5w2sud3wUoHVb3ePDis7QJJmM4NUAJ",
  "key18": "2foXSVHHZjoGMi7SiJn4RYGS3N85PejtGdTRFWRbEovSkwXhirWQYbaMKpQ7rxGjNswL1YjsEpt49hwz5DqwbPq4",
  "key19": "3TvyGiTxoJDPXT8YmaMr9Ehp9WpFvocLsLUjq5UbRsK35qezDha9oc6DsLZDk4csfCqrdaYLqWRNvKKe6oxjadmU",
  "key20": "3hWr1uQVdiyYqtTVGcNBtwuTreWXLdFVSHN59WHLpwmHjzkWe7rRu22YuuZTPr36tJcRjzL3Y62Vsih8o9aSa5bJ",
  "key21": "5NqRrRRN6YcUxkWyY4z7QWVpULhTtSnwZLJRcuKbBVSzdQ1diGNzEkHjkoM7mJsxGZbtbwDB5zZEL2722p8b2dYo",
  "key22": "611VdqnWH6vFwc3JUhnQfsuxTd9awRu4XCVe6cDKuqoVpVKD1oVyD6PfjayzLiW7XepdzJzMLtRPSmtSMQwctMSD",
  "key23": "3bcAgZPSMuv1QFK8BF3ZqpdsESKcM1DnG6AN3KR4FCGRh59phUN8Ruk7D9KSKXnSMksRAqoFmb6LqUYhVJhDhxwe",
  "key24": "2o3RnmQUnte5dQZNnZDFccvC7NGu5pmECGKLe8xq9ak61e7sS22RkbsZda4oi4MYhv3oiRmn2Q4YGGnxQ5qykPQG",
  "key25": "3eQSc3xRpcMYmrDTm6vat2qhQSmLX7yFkZxVjbNKBaqEwKpRogWvYkKEt9NGPC8Tguu9muF7q8kaqzfdaZR6muBx",
  "key26": "4yhH9tRBTkBEXJ8BXYAGXhuZdXuJxoNavNmfa258Ujpc1Skztihc4uXMVWZoft3SM1VQ7L4ZAj2uTB6GCkssunMg",
  "key27": "4osXvU9TDtrnvNvUtRq9Lm1BvwhnSixC9mL59JCb3aUrpMQLLsKgVaAAoV3DNphA3XKHLJesv4TZjUvHBF7tqVxa",
  "key28": "619eP3dMYvrvY3xGzJdZv94HjbPsNc7XL42RpbCUtjVPYv1WGdujJBqwDFDj3iXi9wJG4EwUPaLDQgEnoVjgEMpU",
  "key29": "rfe9LWKewWwefPcjPjx2ciYju59y6Ek6pVdCCm8nWSbXrghFEFxKwWuMXstJgUN2S95oLbjMJED6LNYA2YUPF94",
  "key30": "3yzNLk9j1ok2gFDzUHQXimSPZoqtoS3QMyLG3FFx9rVa7ZjRU545QrPM1DcpHLgCtyJ8sr3hwwXLijJ2j5Pbmdj2",
  "key31": "3c9vBeYCMgb3K9BkZu4JxRCbbTqdZ46zoNaSqxkBAc1MtUHFtWRA161bL8vJCqPxQzaE9mZVQcmMSmKNu9Ybm7e6",
  "key32": "2qn2XwKHEZe6G35JEeQbvnYRChoiMYNF49pMm7isogLUra3WozvUGxEkw8vsU8FEiYJMNq7R3SiPYkaScqxKVWBD"
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
