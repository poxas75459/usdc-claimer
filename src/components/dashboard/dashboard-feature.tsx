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
    "8WJrPK3GsfGJKQtFX2MtemX7GJRHsnuYu14Hf8ekN3E6Ur51xHbRpMsZexeVUnKqpKRUyYxBVGMAawj3GyVrMK9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32AxNXq5zDB6yRm5GaxMRFVBXXMXHnHQuPMwWMq2YueJNHwai3LC8B27znpjMkZ8dvt2k8XBnzCAkWLJ9wcmLvjf",
  "key1": "3vyb2AWA5dCD7LCCqHGFCmJk4Njq82P1MWhhPKEwA5sYxtY6mNEajE42HcBdtBWnt2bJz3vPTbtGjeX9qc3FcoGr",
  "key2": "4RwG6F4nGeeH8M1RVcQVw1rAQT2cC24cSSBRtH9LRi2yHSrgcyHcfuu1foudqa8qEd9YNNu74dWHU1cbAjCaMsPp",
  "key3": "5QUV4ZM6zZCPCRacv9ZkTd7kMvAqGBGBZPjhbvvDcEFyS4J5cdx7v6tezqPGAo3HWt1F1sqYcG7JoCeHTYAZ1i5V",
  "key4": "4zApW5VBaY5EY1KRVRMSumtwQfVtsUHNJgGbSeQ9xwmXWEm5kqSQGeUEYdEzb6LFtWtFrwjkt8ED8G7QZUVz2iZR",
  "key5": "8m4AgPGx7viPyuuoNBYwFMNxmniEWmSb8XxXu4KC738w22h9AheLSmKkQt8TN81ykCNhJtBNqAWtNtFx781wECR",
  "key6": "348mreSjFHuqhvjDony8PsRaUbQcJFacsn4XnNuNShjy9fiJHZZaQc7KjqQunk4LtVptG2JmoW1jQuSypmDJP7EZ",
  "key7": "3Px3kpbym1vDxW3nxFxV9TNdLbgjCcxGo2o1QBZtaswBYdnghL5buvs52Jd9VSmYRdiBSgbgtSHNpZSbJsURdpdr",
  "key8": "CLptZ2WrURPaGnDwAafe2r7wrLPY2Vvqj57cGiEoAeagDmyrzYA73LDCjYcS5LczpQrYSUBpCdnVyKAztpBtQZm",
  "key9": "4eoQNqQKopzFkXkpKcj11SkBCqecXzfY9bBZL9ddi7ZZ1LaZUgKgVTUuQmhigpxg3r7mhiwowUsK4bmNf1KPXV9g",
  "key10": "23f8HKsAMYecsVDzbEnTgSgXfv1P5iFbyq2d8xUKowQ9Nckjzy27touj1mFPsvjBoF25LwaeoPwa7KsPhNdp8hFu",
  "key11": "5CaJt7uG6imSXmuN98AT31qXMG4CUcaU6T8HrhzP7p9kconuw6QbcBd9MzFW3Q8WzJthG53SRT6PiKFtuEGt35rr",
  "key12": "5FP4R6NDJyVJtvCTwvqex6BS4VWBPGQXoPpfk9yGpx7UxDK6d1NFNXQzDgZ53Mz7Jq71D8rcMZHVZHzL895tMGt6",
  "key13": "5ehsVxsRKKgmn2DytuXrjtorc7P6Uw99YuSLWfbsEtvmTkSYqzaLT29bSNjRM5JGVDWtGa2wDmcDyaAeXr1Vr7fS",
  "key14": "4Ld1UDzJkDPNL1BtmszxZUVT8AN4iL6krsdsHFMmtg4FmbehfKtTmR8GtxnJsVmVJYd5su3ikBkvsAWcjsXQM2BG",
  "key15": "73Uj25PiYq16PFVDyDZSmLG9ez1BgHmQmhnjLNYuE2NNCAempPELWdN31Zr26PFSySDi7ENm1ZJq6nPFF2iWG28",
  "key16": "3Rq8Tx1NRWKEPLLmt6Dk3ktM79nNw71rr2FTzwBJxFAR7YmHAjV3rQNNfCD28EcbPbj6aysEAnyNfbr4uGE72TyY",
  "key17": "2QuvC6xSCi7zFh2hauaioC97kGf32jaBeW9r4g3M6rFrB8hWEFVhjBZ1JFv2VABFboRJhqPqwkznf8MooopY9TVC",
  "key18": "5q2yfvgB3zCA2XRrEJSLjMoXggKTtQrD46esQg4hhCPjEgX91NtyUJgJ6AQfvCpHbXvzLHCvUGp1Qb8EqDdLhnHo",
  "key19": "2txrkQ6ru2PKXZVCwyENFwFyJPxiwuJhRFhqbcY1pZHfcdSvgo6bCVfLZHkTqZtgDRP6f8PPFDvxJwf97LnfrNRu",
  "key20": "3aPT9QVGaJaYLaz7itGhQa5vRRWn4JiM8QDRE2zXD8ACzSNnZfWVSyoQBsEHPp6n9rRhzXzz38RAyeMQxmGhATb3",
  "key21": "PDMNvHAa5NpdA771DkKL8gB924NPjvmf6kZgUpCK3Grxui6pH72cjRziD1afF8MEe9H6s9eM6X7hZqAf1dYfQ5A",
  "key22": "P8vEpayvygLYFeMEgzuW8bNUFJzKyJpsmTWii8QWUE12XTAfgveigmVwiaseL7mwthQcwxBNWk9Eexwf7BDM6QB",
  "key23": "3DzCM5LRD7NR8iePPAqkVjKkiEiGFUVjmSmafwp2TFNbjKHk1xCDP9SEdJAfvaCBgv16JWjVsgieRLT5ave9a7SU",
  "key24": "3VzSE4inpCrgWR1ZBVVmV33yoogHTg4jMp95tpkZ2VSa8JFjPp78QuMntY1iQMhE5U8UYismGsL6wX8z9RNBv6s7",
  "key25": "4YepFvtmPKSHiBy2j9uoN7hhB6mXXHVRT6KyQ9Fr9rYRAUszPPd4ijZb4SPtEdureCmMDD8cbsheCGvtBQpXPRuw",
  "key26": "1dR6XZNoNrsdDUYhCsCpBc6q8wxUUmmK8FCDioeqcXLtnoni3Muzx7opYpiBogCHjogsvHbKaXmzBpTggvuNKR5",
  "key27": "KqGVTmbf6jykGXmkehDZw66cg6WVgGnSS7sqRCF71WECuRRqcJ4SH2EJK5LDY9dFUZtVisRtiPEMNWEowbyeuEY",
  "key28": "dK2L4VQ3Hpo1f1LuMPM9gDeXSbaLriNf3SH8oBtmZxwoutcLvMainxe1z624yV2GGgdu6uDXb6AsVhK6csYALTo"
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
