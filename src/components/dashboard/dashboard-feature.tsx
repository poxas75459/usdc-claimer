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
    "sxDKYwzRSvFGc8yGwQ74T8r6kYaUDyYnny5CiF6JjmRcJvbkny6up9pNQWzG2PQ8NRHyZJuYDwQcEaS28ydZW21"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "245fcs5zKNDY1shvG8xPoG5hQsGRY8WjHyw4VbC7NitXEA18g7YPsvxxmkZLzMSfyKsvcXPXgyUViGRwQ8PK2aGw",
  "key1": "125X2feHQYuEpMwa5Rsc6x9H5Y7hdBzhCcc31dhtkdwjNoAqdTWoweqnzC11iiBVp8afwk3DuTCNwvavXw1zvvuJ",
  "key2": "acpgb14kmBL68GUDaUTsB8EDvs6XQstHiabBZHzyEwhHKBK5fLvzA4fjgrJZwxn7Bf4vg25noXggfUp6tMYk64f",
  "key3": "nrSB1qZZuwbvURgZnLWRRAVPWEyqtQ39jEeZy3nxXnrJc6KjnVW4gSvneRENLSCf2jZDe9RWaGSzuDqhdRNDHCd",
  "key4": "3h69rzmy9buJb3ZxQYzGwPojia7jBSDJfnXPvkJLBsgp5NpaBmJ1KtjjLWM3gsRbgrVMduDSxThcLAKyVoPt9y8v",
  "key5": "2CGnBFU9rYitauTjHG5bU9sfQgYXNnxBnpJKwtMcY3xJ3Jc18q4bwSjcRQGNYEF77YQZitcg1jwmtNE17ULwXRrQ",
  "key6": "3ipKY1Vs8Brypj6nan2kL9YyNYrBvtRXLMPKAd9jKkQBY53A3ioHxpzH1yZnNNERDqDc91PvjWmAMH8VT1WUwBbN",
  "key7": "5AAaby3FGmhVgraBbD9RsbcGKPAQpthPQy6xxNj3PYxB287uUcvGWnaVBe6dfhFUf8e6G2h1G27XmvwWeLLuNBak",
  "key8": "4dp8ibNNHUKZUn9Ni8i9zKwwWnDTUyeVFY8qsgdSydd1HdkRXEmfY6jPxGyRfvc8YeAdWZCvHNvcB4gUeUUVkwab",
  "key9": "3kghY4PcNZxUjLG2HZMr82FDhDM3n8HHrVZ4FMjB2MjXoCvLue8otFeBGxpSHV39Y8Jrw55Avd3kjwLXedyoZJca",
  "key10": "5zmAzExTe3mBVhiDcb8d2Y7qXUb1LMjbncTpCrzdraU7ufuh1HL16ddfznEEn7jyEETihXESAw7VasCvHkdhR8ZS",
  "key11": "5Ut7gcpiLUJnFBu6FPyY88MQ7J18Xp344QuaEViYiUKE68PyHsqgbfcXX7EYvNyGBejcHJUieFBBdPwsniXjTnRj",
  "key12": "qASKbC5KjSMGnSyA8HpV4oX8VVdvoHaJchHrmk62PHeea3hsPZo6vfBY9EDe5XwmsEa64pZWnX8MerqDi4uHhCp",
  "key13": "5Vj6z8Y85qthy28ppgvFq1nFJ6s3rKAnj9MxFYSA3w9FibALrmbAnAzGV6kWeVNdrHfzRaqJHduZaCK98QYVUtEC",
  "key14": "AKqV2s5Wod8vCmjx7Div1AbHiMAcoGQ2KrXoFpmvVnE1Ufhi86EN4qzmPJF3B1Paeo9qo5ZSmKfTytXV1VyGf2F",
  "key15": "5rSWjDCJmw26E8WZekGBUfbByLw63NGjUZEdh6cjcLBXQhGPuHZfFNxzoL9ero8SggHwRk8h6u4oGRBqA2mca1hR",
  "key16": "2A8gtJsMZnNHS8fkWqVdVxdH3gncoCzVpkc6fUKpQRGXNMrtytmUndvfb5aHaNwJV2Qgdqun5Bsr2U5LErvTM8zS",
  "key17": "2gnU5RUqd7Syuo49yyfS1ZUUcjsqoT4Vof3r5bcVskGvmReK5RoeVPRAzNvX5k3NVvzs22PeDpLZsoFWReipy4BK",
  "key18": "5AxuVoR934GUnTWv74X8kEswwFWD8wtPskoNLgDQcFiYWByLtLuqaYepcQTWofRFjhf8EvGkYujHtNsJimBayrAY",
  "key19": "2TKbC1WJ9JTVykoRC24PcpbHKQDvsks2vAapyZdfCdYVSAT9dPHE6PSsydW3cXr7ARvraC5BvNBwugQ6XyYLWcFT",
  "key20": "5ELY6gyPAiS1jshKEBradnbG45mmo51hDeREbasZDrcw5WAbXyS2ziVCiwJ3QFPQT54UpQwpWTrxNWfTSai6dscM",
  "key21": "LoQK6DM3UWPNc52tWDNn5EshWXMhYDSyduTnqBytSFeYJzkyyvjrmEKjJgSAAhnyUNCarTUxvNEN7SvWqWwXtDb",
  "key22": "37nqVxAJ5vTELFYPuGxGCPR4712wzP11bizXBWA73pvHXHeWHQjAu6A2YqckCK1okTAP6NfSYcXWnbRz6U5EPd9K",
  "key23": "2a4hzSiFpv25ue7WCQvXrPD9Dv16A8iRHFv2Npq68aTwd9iWQnXZRi4W2EJ2m5k5ysBHW2rDG6DZK7LMBPgcnroN",
  "key24": "TeY5vDVShNx7Dug19vhcuN4SeXyKXs9fHN7Ef7So4PVWmDC4vrkwUYWRDybxX8Vvz6dmHtVmGmrBAsPUP2GpE15",
  "key25": "4Zud1q4snVWZJDnDGm2zmTpxngQiDjw8Qi6q6CAbfT4iWx4ZQNqDfBH3SvFJrrcj8Qxaws1BXEHW4uQUgtmuuQGk"
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
