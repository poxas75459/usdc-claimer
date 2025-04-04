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
    "3Ehvu4m4uCBjtMz9G5CUcsnTuCgoo6WxZyBQ9zQaimiMsoGo4iJuAz74cXAxxNcm3G4nMQfeLrMxkb7bYJW8cTaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uCnh6kf8heBcodGZST1a7ERZNkjQqkCSViMAcEUq94gRELT6Dwu1KRALdsUYtkQ6TnjT9Q7bg51WrCHZio4q9sA",
  "key1": "4nXfjcFxxE5D2E2EgN2ExeDXZHUj1pLzz4Y5BHv1sTE9YTNh9mxNVaCvhg23szXPzPAyz1v4CQWYauUcLRLyKNk1",
  "key2": "5P7LXqoVQzF9zkyF5udjxxKWCmUgv21HwRGKP4em8Re4sZSnFU8aDDCi2X9S37eAmPKnERFbL31iHEb33TLDRfzT",
  "key3": "QTiF152AoMbYLPbiVHmRVD66zgNWct2wZ7j5YJQHjmD5Kumb2U6yk2RZY84YUsNX6ZJ7ZNMhBYppuz47N4VR78o",
  "key4": "3EQ3e69LEB8mn5JGzGWA3hYTyz8LaQDSb7p3FwwpkVCYij3wWvQnsKFYspWHFThEBK8LQ8YRvcEDiaau4d2Uab4q",
  "key5": "5HSjn8zPXvAVXexiFd8n14K8RBjY2Kqt64NiAg6eRMswVAANS8tEwZZL5FV4ERzgzbwavHaMeDywtYAydkwhT8ZE",
  "key6": "2vgnF6QPRiYHHgbiq82CU8fs1giQmcPWu9gtFUFFK19JxDt7ZxqYXJwNjEC1E28T6bop3T5nNWemkcqpgLezEhaS",
  "key7": "wx9y6gtokQhp1PzSyNtcuieimHdQ6jrHaWBAx8rXXJPn1T7Sq6nvqwDWCEuFk1hZV7BEjNv21KeNYLWSDqFK3W5",
  "key8": "atUxfEN7UoEt2zodsKUV7Gen2fWBrSs366r86phHJMFLtioxfC7zUip2VHDHosSJhWr4EXnErnsAPfhjYmQcbdn",
  "key9": "5GUqDEiTeYwADRTrE6ojMArkfHVanTWVatE7EVA57GTLhYVsgz8aAiG4S5m356TMWGdYxByW7kXwoN9mDKXQh8fU",
  "key10": "3LhfTXAcLPoV5xPoJd7MbcBxzUq1Q2YX9Gr4TvrwQWkkJRpPC2aarZ7YCZfJtmd6vqdrtvJtAUbk8TJEtKsA5H4e",
  "key11": "4Q6ZhaAVCNyaquFP8bwVKvLkwDALEHtMgEbedkUt1aSdc4bLtmX6DHFRWrF92jev6VgEFwXpkA5BDwhDEe5eQCD5",
  "key12": "4TREsMuoL1gLLuGhJUNzJBraBK96cwpvEerEi4SVupRH3eD64iU2f8FNvQVZzhLrVyJfuYQu8LumiRXPnN2HTKtz",
  "key13": "5PKfGDYu4KXVfk5MjCLkfqDxgKuXWYDGNqCGLhiBVrdLvzPF3vDeYoNYa6LoPHuqigEFh6X5iHhR87d4i9FLZejN",
  "key14": "59Yowxg8oUJkvZMxjoNWgPE9nC7eN4ripnbpsa9C95Rj1B5vLGiRYUiCLud7br19hGxHx6Qm13qtsCwDSR38UZ9L",
  "key15": "5ofscJVKqozxn5aogG9a6WiC1bdvbER5eTt3BNYNGNRyRD8gV8JmkqfGWehaKQ5qWG1gVPmPWfmuG99iDTBn2G3B",
  "key16": "ZQxNwNg1KiXSaGP6tLY6SSZXUm8vzqyogFc9rSnwNaZo4UJujxhyuuda2wrdmtrbPNhc7Q8RQwYfxnPHBFHbgBY",
  "key17": "2DNa1AsE5xPH4NUAPaS51fvnWjAY9uUxc9s1dxviruvugK6wGC1Gg8CUesnHfsn4LtEK2JVFywQJf5ZsrhzReAwt",
  "key18": "iNk8YPYmpgKDXRv86myPtQA6cYNk3rP5VpasVhSNePwK37w4Sohii1rwJaDJYR2ioDpxb3uYwXdB7HU449wfRLR",
  "key19": "3tMj7o9Kx4EvVjcmGovuLJHiHYtkpgcT8mHJN6a7Uhyf35cu891bVYD7HWdAatC1gDR1WWGiJR8BV4iL4K7DbaQZ",
  "key20": "3CoxQcgz8XpcMV6c2WeG7FBvZGSSZU4rn84VtJ3xZAMQnKcHFcXoYEsQmVAkvErJ3TAzHG2GdDK44HJjy4H7EQXp",
  "key21": "5Z8nSRuToYvGMHKBFLWa1TnnDXwqmQDA3HAG1JUTLAPkUBvevJh3A4ysecRrbGZ9k8MRdTXYShjdS9shkimTGPPd",
  "key22": "9weY1wHVL1q8iKGFwUqcUeqF6DNEX4b2xyV64BP13oVf2zkWfz3sfvkt9ETbXa4ZNFAEJ9qeJ1yoAxsDhgEfdBk",
  "key23": "44GBic7VpZk5ocvwoU2RD59YSmhz7mBQ1ujR1AhxisVTuAgZtU1oWUDLPgmycmHSqmcM7dQ1hFisVSDKPypBT5uq",
  "key24": "4YWdxARWcBWjgh1UYM9mvjiYVtvEiv7hy6GCxtHufSSTnMmkitY2W9dVRLzYKbf7CHdotS1pbK8VuFLKK1A34Gyn",
  "key25": "3p7XvUbMfCYvzvCVbCwHMcnitzQKzmWUTMHrCXjktTT6CM6Qu7LDQoes7acBZyo7mjKxRmmupcgasNAHGNTRox42",
  "key26": "vEHfGPuh9B6fZxdAA1F1CbevQdug8USyCAhX26b2jXUfhnJQtywfoj1x7cUbLL8SDomw8uCEmxS7nW5ayHsqFza",
  "key27": "5pUjKuAXzw6JDMP76Tpku41A2ipPx2Y4NQaGmnWaXH3YUJE4tTXqgRKQrUEGCTEV8y93wnJd64oHh68MtdQyvgLb",
  "key28": "ouFsMVUSJPZA6ppvfQNtpjrQ7mZsRQNBhMS5nEFLEPAomtT3kppcT7mZaV9e6jP5C2SgDnB8hDgzJWmZDM6wDGF"
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
