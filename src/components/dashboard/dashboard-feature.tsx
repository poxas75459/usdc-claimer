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
    "3fXDngyg7NpmUzyr5KQMRF9Ug61SoGk6Y5eJFMW3vuqrschnCuE5xHcJK7v1w9Xat77LJpsNw2VHLFs4AFfYHgKK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "343hiNc1xCG9xPezPfN6qzmcK2NLndLkzTfKMTtNqGLvq9sZffrojSD1UpnV1DyiXgkFRTFMiACcphsSZcQ8BLPZ",
  "key1": "2XdV5kFoi9HrYGsLUp76DiCnGhr6JztC9kb7fP946nADsW2xtgAtng4CFWuAS7gpKB1Ux8jm6iMrKfGkhv18g4wP",
  "key2": "vQSMFf4RDeu8XEYfRjus4jCAoraVHzcEoPqHKdUMgW7gfVGv2jfDPP1mdLhARFZjmLKHD74zbsFfYFwEygLsjWC",
  "key3": "UWSEZH9THNzhW7V9TU2wxCAAW4t4LQwuDRyixRrc3Mz8Bk8zrcz7DVcv2xMY9gK3jt51eM5VsVPXYwpeBAa6ofW",
  "key4": "4VJ1bCsQz1jzsj1b5aePEdxobJAAVVSyMAAJxwd291PKr6d9U9yNaZ7wF8u6PVnii4HZDGRh6FEA9Uzdqbr81wCa",
  "key5": "HVDngN563Fr1Jhmgih1gNyszoAxZWFMRiWttbCZSrpV8pcCc4byzkxX5i7dxPSiU756VPr9JF5em3YfrTLqvCeK",
  "key6": "54vy4Lp1HB4UiQP23JSy5FV14Lo5knX17Wa8r87TQPcUZ9sECSr75phe5JNjuNusBrThDATPjocfGUNiWXtk3uj7",
  "key7": "5CRK8MVFaf5hdZGXB9zRpPZqA3VNBTtZBAPhjKZcKNGkWpapC6qNaNjVo2vU6hhNwXHVXmpfCZ5E5ENQUqCWYDGW",
  "key8": "5QQ2urfEMP11dUtZnrkzRKdd3py84riZU1EjN4XNqncJmX1vVs7rn3JeasyZFt2iNecQS5yFaJc3UEzWVvpyBeB1",
  "key9": "26UsVpTJqeMAgm9PScuTtRmJBzKgxjvAnHs62aVNpbMiZiLi99ZY3W7stPT7QMi1buRVeQzgZn1ToUSktTkDbLRM",
  "key10": "2kWFm1H3RjeoW6GhVntbfvq4ZUriRwYd2cvDvfBd7BnmdPtytZfZrtNcsWbwvEo6A8SC5WhWrjVD3FpX4P5PZxQ7",
  "key11": "4egPuDbLVj5R74qTG8k4vZyFhESVvU2VC1rb6cYivSo3wGBa3qMwdwK6LurxxXvDhD7JAYtoFJZRHoAAZUaokKYW",
  "key12": "4N4hSbFiNbuNLQ5i29wQH49R38VbWf9PQKTmC5ofinarFBvBLam1J4sxFL3o8BfuCYic8KJyQhcQKFxXE94Pb7TF",
  "key13": "4RkHcB3zNeNuMQpgAqkVhNaDd7LAiELf6GdXRN6vrdGrPvAkxxhrWhZzU4VYagR6gLtdPxTxbwPW1KRxgTA3NvEe",
  "key14": "4msn1KEiPb1ucoRtDhJ398hCjNhxQ6iy1gytYqFwBMxdmt1V4GdBbtRE3UwU3gZjCE8fGprfzLwCzkW9dkFMzmWa",
  "key15": "issvf6PGzDPQG8muPStvDzzAt1nR4Pu32MrS5wEBM7LiCFAzjhwT98yZ8PYE8eKkaK95HXPxrpnTM6y7GVFiwv3",
  "key16": "2fmNLcDGdkqQ8gQLLM5dAcXFHCR8D47ogNpWTBexsdUr7Wf23gVGxUP81yB1Jm5yMaQmL6KjStxJ7SvoEdYdTdVy",
  "key17": "LiPMYRfeTnUWDy7XEEuSJ9KbtDtP3atpYTBLpcWrtxZrKHu7SGiT4jrKd9hYjqZ69iET9mqCoJ3F2JRYLBF3kB3",
  "key18": "2fQGbnVLuG5xgTESbs4tkfdoG15FUaxtsSB4NhttN4fz4UCKrzcQrSStRURLm4c1zXMqbW6RXUxtTc3iJJ9PSTZr",
  "key19": "5TMhspHWwpaidfNkjwueViysocWuuCXPeohJkwxkwPdpD6EmtemJ67pg6MBhNE48zX6BxE1kxdGxRSXLnahmuURa",
  "key20": "2Hs9N6y6eKSaq4U6KGTcNWYpMEmTamXhTigtTFGZu6K8PXWcVwRJnd9fNxgkGyzhqJExUCNsabw34LdcXWrq2ao4",
  "key21": "5uVMPcCepjPNYohNXsSjesZcBzSoeDyqmW8V76x6iZYhDPBndufs86tp66WpMpiCm5MPs5Ekgd8mWKnUNCBC9J3r",
  "key22": "5X7YFPuWZWe9LSRndr7kSL6vYmdU1AhjXNtrYTVJy7QXzxaVs2Ptw9wRsyeFSUk7MvRKvimtYG7ntBixFanSjoa8",
  "key23": "TWAA5TaAVph5t433AMdHXaFg5UM4qsWFwh7eJXPoUDTB73WckJ7z1m8wy4fvmwBtx4Lc7dyYPgY7pJBy7HfpaMB",
  "key24": "2W3zsgukiX1goHjCn589DAgdoKHkXNerRveXoGbEFMpwjaXzKHWypATsdFPjkfg8qHNGwYyf5mNzsu9QKx4SyRZw",
  "key25": "3En23NqW5Sjsy1D3BH9eSjWAivqpB4R3ufVYPX4fUBEz2onrKNuSkiBFYHS3jFWfBZ5jja2Skhq15GNZsN44WFkk",
  "key26": "3hcnzkLgfaqkF16To3GtQ494zPmf5qWA65eWpEba56HThP61CwK6vkJGNm3FYvQL3Am8E3yQbDdza9Kc5b5tfQ1S",
  "key27": "2oSE5NhY9KzaTXtWEE2WPyj55AkfRsFD4RFmvvD7Jw3codMLCFhJDmmD4NDYZfrmGd3JM4u1ceAiaFW1GYjfYNKi",
  "key28": "4WXKas4d9dNAkUydSv3YUuuUBoUv5Qaf3yP33gDKfQpfLDxFeBd5YzNw9qGLtqT8uA8uRmhgvfLDkiVEgk98cfbE",
  "key29": "65vRThyJT21JXhjo1GQ9eavPfR4s8vnhcCNzvUbuejaWy9U5Eahja2abbb1uWvG1cncETMnngEsjbx23i3pswhLC",
  "key30": "51bjX3vKgbvT3oAPRLzBMzsk973r1TRMHNKzGQobqVVvDdDVLjrBahfXVD6QuKCgR1oLUvBFxsto69hfgpHC9qz4",
  "key31": "4ZZMsMfLLrHo5qWjq5vFfrFKev6cKKhutzZMyigMEAjtYvzPYnRYLsjr9xejFy13LhTFNLgz68JVVuSBtUS27ScX",
  "key32": "3udS8nshdLBvznLMgXquDLpxhZ2keTZuDsJJ9xkjHcB7QbXuQ5mNoGGSJ7495XyS1fTYk6RjLDnDN9Z6HwSzugAa",
  "key33": "3XwUPBMfe2ZqNBGZbQPb8iLtBZQ6TYaVmXbpRGdT6LRgaFwsQ2soF9M3DUapAmRfBaWCU5ewauJ3hm6WpvPM2vGq",
  "key34": "3mesCuyDFWWZ47sPzUmia478mZqJqart5zsddztPaWPF7cS7zQiCB3qvm2Ha4U6ab3cCUeh2jKjjncYvXggguNmp",
  "key35": "2YH6iGDZcPqSG9TBHWJZkLs5izcvCXcxRzVxHZTUK2F1jWSBB7RHgsdic59dBQNxNrGoeyQTUZYFNGDMxisX8kfZ",
  "key36": "3RBZ8vjUyP4z5efVR76ztyHKDtH176yiHSp2bxL6f8KkqZKYVPfVAy3srpJE2dmxoCc2TGPQoqnzWf2DE7U56q7x",
  "key37": "sFux1VnGaZYZQFAieXVVEUD4MvBdc9NCTHfvnQSr4FHyp861W1ScuH6fdgE2Ce94z1yfvddGtCmvKnkW8ZNiZpu",
  "key38": "4uxPaKTanHBjdXczbGJgEcPSriKU6hLhJQndFCbSW4KnYynzTgMuWCXrR623DA4Yh1T2QuWSPjwZPxdNZ4avyZMo",
  "key39": "5ZCmWqkhsm2d1qjRN5LN3eRwYqxsARqUHT2rJJcS8scQLxBeqUJoJ6XJJCjUZCAM1F8FHyAkDbankFzWBuBmSEnV"
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
