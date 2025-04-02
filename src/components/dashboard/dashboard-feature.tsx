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
    "3vRirQ4mdR5Y3LZrJewAbBjHUx79AU1e4Stxhjksgo7T1hmdokBNgW6yqXU3knGsejn24vrJv4111mAwW7tftzJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Po855bdK2mvcWfayUAabVLBE3qdyvf6GvyaSg1aVLYsCgfFMGookqmFirHCaf6jBY8yiFNz1Nt2xVSTbyXTYiWE",
  "key1": "eneLRu51w6zMxTg3niZTnHfUfRcPENsCMiKeXb4QPxynkeiopgRfQcp2AEqv8GXQ65bWu7P33mQ5mkbPNS6J5iU",
  "key2": "29DwfU5rhRW3N7ZPbooF7V1GJBNLkSqafe8wssqFtYef4RnthHHn1iWgjRJV6eikiT8vuR7NKw2ytHkzruarvzQS",
  "key3": "3CxRzNgS749PxLh2ixqWGcwYkoLB9zFx7EYRjJUmeXo1isT69D59YgnzjBowbyGCB4LRYB9PnPDJfRJKeoNB175y",
  "key4": "3N8tGkrNrsDfDQugG5SvjoMrWvdt9sw5CbroVNyi4TyCWBN7Eb6afYiuZwYv4gsPCnDgdMqCXXZyX1qNqdSrUPax",
  "key5": "txHrthPNjq529csykqq74LeToaNnrGxuXrPgSW5GaFtjXNp1kVKmSQAjBeVHK65EEfFv3qG4MXpwzgVjZEFxxFY",
  "key6": "jGTc4D3DLUx5Rs4Azz3uVbJnnAaJq9ryrMnb2aYZKxB5WGBU4vwhJK4AEPSzy1tVhfsm2Aekc4bj7ECNrnq4m9t",
  "key7": "2cDtfZzCBMnAy9kDnUEANVwGh6TJawqPPG6o5vk6yU4GywVFABqZGghkemcqqcgnpVvvMuyoByknGL6Df8i1wgjx",
  "key8": "2qdMTLjj8o4SaXxQuFGiJpRBeDqELuY8LQmRkg5f4GKH4ZrqVv7wLMZ7T8ro857ZeLkBtR3kzi1jwB7tdW6nR6u3",
  "key9": "3J3E15EV7uZZ2SF4VYvrxqQakhh1xViJ9MgvoJyRGVKhuzHoEP1dMuZL4yh1pBB6aW4wptiyjhAZ3EKcuq2eTGX1",
  "key10": "3UkBhyQYMndkcePzADdwaTBR9rH7hR3f8sh3ZAnKXZsGkb7Y5dkSYHiA7Ghmw5Mmjc1wqcYPRRk9byF9HetEAs73",
  "key11": "5ZiH1Fxuj7LtVD3CpnuHj2Sr7iwppMQtD5K1QktFRdRWrTfAMMp13KDYHFNriokVVq3oDaiXdgLtLr3d2P5fAnnR",
  "key12": "29DpByNskbjwnsbMVvAn8q5kfhRxqc9ZKHLFRaMX1cTmo1hMja2dNRMHchczbg4KAPmd18QFDkVrmzkCpS1jqdrQ",
  "key13": "5UQaQ4gFNGiXWgKEJ2ASUNYkCdCvBgNQyyvB3UkrkpVvZRxrqtjkDVSFZyS4Rz9Bswg1CrhbEwKKqEnzUX4PqPAa",
  "key14": "3cbY77bPHHnFzABgULdQY5tSt4PHHVr34SjASHoze3EnCMJe4HoTiqPBfGAMuWzXYZQePfHW1Dojj1AfnEnWSDXN",
  "key15": "2yVGyugWHU8cyJsxUL17qZaESnA6y3f7BU4qyNd9N6TFkQcrypmCnTMRkWRn2ntQsXYuEYpaP3Dha84dfdWo3GfR",
  "key16": "51N683Tk59xtDtqRajmRaWrXUgtT524Gdm8DcztSNYEnpMQZ1CDdgZKgkhqmqmMqqFKV6u69TNocXXHrJpnxJC7k",
  "key17": "WY3sKWLbEvkQxfydWPMj2KpnynVT23WDGqq7bK5ceEvLURRMwftcfm4tpDu861wEwVs4j4NVogsFso3ggUZwmau",
  "key18": "3R9G7PBFcJGnjhW8eDQtmtGtKM6nt5QHPDzrGBsvNBqYPRuBeMFrgwDJKBqXwxvxZ5dZnKKkqo3tpw8vkiUqw87r",
  "key19": "5NtV8KAiJeMCEuGLmYeht9JyJJanynwWW7MQTFtVsXvhJ6BHNSYqP8BPxfDh6gpzWUqeTTXMUH7cmcF2kXJjq9px",
  "key20": "3yuWn2GA15NwDHiTHKBhZjjy4zApTAZjSpSLkkxG7qfS3mKzr18VvdXSMTwmwt8VapoErfxRZ4jWhwkEu9isDMHs",
  "key21": "2Cd6G2mgvx2po4ioYGGqBPrDBoFsiXMTCCMHvWSduuzf6TK5gDqp4qRQ36vfrmj6v3i4BFX43AZAXo2Y7YAzRrfL",
  "key22": "X1XjX8V3ctQRPMBNQWt6PneuMgrRAFLRRzvd2whSjR4hwLwGUBhHR4oiybP3QKnBee45EUhQPamx8Bi161FuUV8",
  "key23": "5oHZDtNKCcfbou3UQGXq7YDPK7qW7edzqrjgr3jqtNb8EUxy5gDv27K4bqLAZvYZo6nVcsYiLSHVsQtm1ZFJRMxz",
  "key24": "3WEMkvUiBZZVYfbZ82tuaB6vpf3tJaNGEJGzWwF5NpVu3VvuYUoyM5CCqSM2S6uGAgdC8tN1HoJPKLegqah51WFJ",
  "key25": "26AheEKoFtudx9jbacLB2JL2oYJU9yw7McvWBhADhy474WzPvuz438ttaRBwRcn79TmZmXZ5CxoStgERhiTdaJbT"
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
