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
    "4kFnYm4b1Rbd1v9KnLY5utUj3EM7SAPFYRYfFMrQhBKvYaAq8cpNL7gu75AzA2B1CVL9EG2WXBCjkLQg94wyDtS3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hTf1QJ1jPB76jNUxV2btyJThcRRPoUD4zzwsjUZhhSSMKuaTgkGR1AK4pxvv1NGZN8BaZJfoNRaG9tUBc7F4ePJ",
  "key1": "LCNMHLu6Mh9KVexRRWNwAUFqTcgDcAQrZAusYcdKMULELUEdyGn8CaUtyUYJjPakpPEDV2QbsfYw3RqdVJN9a4F",
  "key2": "5ibUziZPUYT6D2WZmpjiqb35wazGcCuKRk3Mi67ixa2jZuJkR9ZFZgQX4H8BeE1NC8xm7vh89rJA43hT5TrJ1Swr",
  "key3": "22h5ybGR8CcbTXERpiKWkJWYedTteUEivawgSMQnWCRVBoZ8W9t51bcM1uVkT8yz8q1MhLkMuWVKph8LRC1hyBPX",
  "key4": "3BGiVpeeLXnzLNE64vVi2LriuBUgp1jvPANkgZZBpScZ2wBcHwif6s3neqjuYntyJpYYzDFUDDaZnQ2om1JvP6Vx",
  "key5": "4YX7qTMFc9BA13VjdxTPswD4ybQTbLMUcteiQooqWNhoX2T7iLsvjw7UVgp3PphD4hZBL7KPhoPCo8tcq6owm4vx",
  "key6": "3ET3J1m1rCmSuRBYpMuKQRz2y9PFXnuivEDmKP12vWZvhYbeubjzui4jaHSEUcapB18MfuzdV8nKsaveG2u1L1gQ",
  "key7": "56jeEo29FWDTFMPumwARAT7gAVJUFGX7N3viwWF1DXn1RsJh4UoQ26JADDY8tN4EeNtugwbxs2a9TTQQDZCzbG6x",
  "key8": "4z5AkJ52kY1gGom3spHcXXYKXAudommiWrqfaWC5MnQJqdmm83JvxKyV85cJAsQKnVC8SScQGa6wgEYyMRMbECT4",
  "key9": "26jjMHpyfNC5LGefrM5Z8fWfCJYxotfzjYVXMQXEvh4nRmgVcHLraZiyEPKcrxxr5Fn5NYNx4E8izZoQG3HALsok",
  "key10": "2kiAgp228YZVLWRPJ5nLcVwYefvDzURCCYESkfCmLnxSj8qq1Wdw32KQjUcdajjsqn2hjVEy4YoCLW3tcVDEdxkk",
  "key11": "5mpKANvqNTHz7ECCUpP3eSHdW3tZqWefBEoMbrn7gVJiuHMZXGkTUxtwibWUuV39gfTccnGA8ewbN3ho6rPcAwvA",
  "key12": "3kf8rsgMov849tSEvDn9LHcj5TBLtbwybctHNKC9A7Fgtr3JKDY4PNJLvTnj5k7D2fK2dc9z2tbYhVpN9FhFqU5V",
  "key13": "3YhTy1AwuyJ2VQCCaoAmfQdYBh1LPygDJK4Faq3CU5uKCVmwnUbrqKM3Z3BLAF84rX93reAFV8iewnba3jegNEL9",
  "key14": "3QY8SZjRKGRNdnAyWy1jQpsNZpCYWWqJj2YTz5Jnz2mwFZL5e27ajrtA1mFWEMRpsSqFfVxMkoeZyhmS5mZw6mF2",
  "key15": "5GtpkvQsUbTjSomuuofoXSB3jRRvVDMcHShgW6JN5kRWLygZHKsBmcQa32wenxebQNTfCzVaA7H3RzG9Ae1RaGNx",
  "key16": "2BV1Rsv8k6X5BgTheH6UMXby3qQ6oAxkrNRkQ3tqrV5oYAq8gAGoQnByiLcP7JFoegKncz65ozAC2txEYLVXApFB",
  "key17": "5DGD9wVAqqvjAeHAt2ouR9VFha4vVMxuf6qox7uAufvv53opXe2za4dVfAH6JRkjn6USWLo3vcRqKK4foVvYU2PE",
  "key18": "3XgoTQqZhVA33tFmX9B8kAUwLf1937T9DpCmmUboTyJNst8CTYkHdXyFgtWEdUtevWfeaKKELuiUq4f9dCub5XjL",
  "key19": "kzyjmSWxhj4rLD26SqCe7SQaetUmVFV58ouUpgjvutMEEpPDrbJg6CTtzoFeePYc9uF6B5Q2UirHttgebqfPGXp",
  "key20": "48dfmBMA1J76yoynZSfSsb5StLMontXhR3qAPkZBybTfDPdtAUS4va4VtyBgrhWGHgmS4oN8Lxw4xFaNuhnN2smk",
  "key21": "CBR4TMUNP2XoRsdi98avCUcKjbaNxc3P7rs7yUbJyLLbEqGURKRfqUmvbhHbdbiXBS9gxrv4ke1nxw8EYpW68kh",
  "key22": "4FHmkzsdgpRCLQMD59r53SmjjC5gz6UUW5BQ6qATxZnZJAkXsyBD4YhJBPQRxBq9AjgQCr4cQDw3JgnHGYZxjLn9",
  "key23": "3aYJzwGfYAS9hmmGUWbBFG1JcHj1hGkwNDYarE6LmbnE3pRjDK6JgM7x92MN6KUFgzpAQgczSNrgcFjSJsCHEsLa",
  "key24": "46r7qeFpY7aTyRaMUTqMSETUxk9R8vhmtCszhpU2rPbhAvVuWGoV1dirA7WpCGyZi2DeuY1v2xEzAxW586fC4PWH",
  "key25": "41hmnCaKRrbkXPzP6NFt3PfViMHnPQuHVp6f9tNxfbhPjrptLfihpRFYWfa4Le76hPrV5YGhKULFWQJetm8xvE3m",
  "key26": "5veiWJGRQPWyJqG1geRRMopYmc8913n8RTY7NJCTtsZQAGuHsG6bUnTWYYwarHvCHCnkQFC3q8sfRcgQxh94w286",
  "key27": "25dW1mEdeCjDdRDL6Y5EHqB2QDYH4tCkp4cHQ5KmGtTYn5mfdaGAuqfvXp3V2tuBe7aJPSmX1vcQnyHiwdGk4Wta",
  "key28": "fboVfHYrVk7bV4QXZAUWgaL9EdV98sfut2PT7tF2f5zWa8UuygUY4i8CDPxXKLGRy6b39XbA4taaMpRu5pVRMme",
  "key29": "2pxzgzWJ4Pm33wK2ysrCpddXpKXgJ1wCKw5DtRoQJ7ToMvST8QQ95mAJHyfkxasjeMPLhj8QM1EwKsv6YynB6rjR",
  "key30": "3spEPrpUmnCyPRN1HNZS2YzckhPjorX3z6zTedREGmuqPWtX5eN2rLra9kvgf1qGGLDeQfKHUftEcBHRnJX5yzvh",
  "key31": "3zPovrh6zKczUNP1EHqE61NVuSMxXPSKnQh92wXNTpHG5XH1ypgVkuLwfs3H92Cfso6CsQSmaAcNri4pzkctudQh",
  "key32": "4Q168tmsfGdRpKWHju93mFDHjRyh6GQ8xhnTQ77G3kWvC6re9QpnX7kc6UxZyds4efjB6pJfKCZrNs9bVTrPES6G",
  "key33": "2FMPqn59csLudyTS1LCWArG3fQEcR5uzLzynevcQMwSbFE8TjMrZxcpd9f5viK75kFjaHCYBafpAibMheoW2LMcJ"
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
