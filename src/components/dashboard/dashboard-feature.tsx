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
    "3YthBPmeZ1eEGsQVEdM3wakstdpMu3zFFve6BqmjfTfeejbmAdcgya3iG5YbuHfSyMtSsrP33UpvTrxHCHRbYbDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k2mvE9G4EkDSHXnD4AmkV91bquCquQmSGbsi4TUvaS2j9zNotV25oaG897sq73RuRvHSbvA6TBoAb7neXH1rvB8",
  "key1": "3J3yJwZrpLy4M6pd7n5VaaYkhC7PrzJj2CE9kYCAiT3FoBfsTxCyinFg55NTuoHZ2ihBAqUZ74K7T31ssx8Npohc",
  "key2": "KwLgjMHW6DVYXgct4mCidy5MieC7V4m55aD5knoP1DsXmEyLZLcR5WjLDjCXxpLkJPEzsxoSfQackQPnMFUbKpJ",
  "key3": "5KfwohKSrLCvDwPfzJ38U4UNXoQo8vp5Hi8rbEwtf3oWjgFryiooEcFi9GNyyDvySiCiqdsZecPKuiiDLqcJkNAD",
  "key4": "3VsdoKF3DVCbTDK567KGxR6ZiCevxMpnbpPkuNzU9L68UwUpqxrby4wcinSh3RFm3phPgxvkbb2ku1XPwpiDwbjw",
  "key5": "3SQeXGKEEDedz2nz1oxiQU5stfFZBcEjDVjAirHSQU6pQ8N4Uawbboj1hVNC5ujLypQAP2uiEMyRVsD7tcWSFDnZ",
  "key6": "4k2kX53GRxYbiRPEYNbu7cmXSJHYysaKAn5XbZYzNU4AEaHhr6YHo1FowLAh3ZmkUxweyvLyzL52cAaRnN5Ti6yo",
  "key7": "3599cjGhSyi8rsUhY8zh7afNtTGu8cgkngeCqweZG61CST5QauUfXcpnwb4y4kjamEHpNaBNCrcjZikaUxhWmvAX",
  "key8": "2qwqMFqAjUPv27rGUnHE9YeXC25QBMCRYYyvtKwzwQffdMe2PifRG7QndvDw4ukVoeiLrjYFFSatkGTKWoHJDLqo",
  "key9": "5mX3BoybG5LzU2UDe98AuofnEycgbgzC62KT6QaUsSH6EdQmNCmoZGcVS67tBu6JL7uPSdKTAAhpEgA5J1Wbtyj2",
  "key10": "2ty62G8TiY5H9Qk1FiTHqipb7nkzsGCeU8doEh86zwCypLYUr2VBJnmHYz7uegYM5X94oYPAo6RXUPUjJxaHFbEt",
  "key11": "LVuQ97mUPEsxTfF1zdfSoUbNyTjTRdXfZBjSRgtnWXbTi89uvzkCJeC69Kq5UB21B9oJkXyYUiQSM2zYMfDFutE",
  "key12": "53uGghtrMcKHh99Ptbz7zMzmH4zFVrCEHSFThY85ij1NNqamYnA2Lt9cqe2jUWqBUivUgRBkVGPe8DMFQcQ7Sr9e",
  "key13": "4fRywPLbK6L4MDzi1QgBn3aP2V2uoqhFpMAv1mn7m1i5wi8ZTuYdxW4QXgKMW7kUdowd7Yy3dwdP73N4LgNuG3vb",
  "key14": "4RN8sHwKdXLHC9JLcqo6Ga9NBHWdiqcF1Pt5b3Y2aHMVqZyPxFv4LWDgNvnnbTEEVEJT5iQ7qPbB7LsRaRrZ4mDD",
  "key15": "5YN8wJs3BBo5FwMKXpvWXRpvBusKnS9gbsEacDF6xgY5dmGa8vRzcb3EPzg6Dq8JqacrPk7xSMXkMPuU38zomLBC",
  "key16": "Kyb93GCwd2k3retxutvHSGyxJ9oRCfjzJfmZysLfzpJGfY9gM9aWRQN2nDHBn7y74MckEVm6cU2BbdeuBQUEXRp",
  "key17": "4YDKGuymevVXbWxUjE6Tyuvudvdz3UFvWUjyguhkF1jX6SguTjXCHt1uSVhMmmHChzKzu76SuuUzHkje3dTwdA2N",
  "key18": "3NSYcqxsNmPZShahrf3cEEHQEw9PxEqa4H3Jq2fc4Up5Bi8ndBHhqyD3VeEyYWet1Gg9hciFD7p5i4MkmjkMEki6",
  "key19": "Uf9Vfiho9z9KfcDdNNsY2dhM7BqSzRGxwEXKHuoFRKhiUGPchtiPN8yyMBcRve5XJZd2L8m4rA4xaE6G1nw243H",
  "key20": "2RCHhkUdFhEeS3r5GvbnFyxTwMUCHRwu5qW5FSjsC45xy39LV9EdxdmSuqCPcoQcHMyjNKKekSMPZNFBfX3DbD4r",
  "key21": "3FDegYpqLxxSSEHj83JRxqTcLWX9UMTKUujwUtzq9mjuoHbKQXwGqaexjTTC8XLxvhFbtUp6iSXXnqqVB89qGpvL",
  "key22": "27NBwdc5fMdTaRyy3ms3WkYeWAn1F5UhR8D8jneQzwtKHN5uPt257USeuhFFnALe6BXqtXDwXh5g1whXa9JWU3Mq",
  "key23": "4yEKPjEiWmd7CqF2sdWb34srUbprJ15i9ST81ZEeCsrRCMZm585KhkPMY6ZZddyxo7iiuMjeaWr884KTWtyMEcGf",
  "key24": "41aDRoxFN9ab1dxXL8u8nCki1rRN8R2uh9HwMTMpPGvnZ4LkPjjSQWCwqUDQgHWiGTiZ1DSUwt9Xup51CHuaHucg",
  "key25": "3APqDynUowcDs1J4NSBAXsngCbH9wk728m2YYbgi8fNW3uCbYxSMe6feCVBnp8uU7hiA4Ez9MUzyYWoKH9LLnSyo",
  "key26": "4Q1xSXWmLxpPqKJPhpsxmPP37aRRGpRRBGWNxffJr4gaaP5FGixYtD1r9Dc4bjEAx3thFEcT7QMABSYF3QLCb7n1",
  "key27": "61JwqVLY5rWuuC81vS6VKU4ZdRgJEfgqHsPZgdpu7aDL4nqxBWBwvjnB8s4cJoTJ1DLKnnk7R8QMRxQcDCjHEPKG",
  "key28": "3ww1LjsQ77GrV4UhefhiUEsu6NZzZenp7gVRZhuPL1TZgWXiBBdz2ur4dzrMYoQkgih4LF4qxXZSndTcWcuWzFh8",
  "key29": "3uAkbhmdrmmozRMRzVfofG18mF8PLsyi23s8HKNjos62x8ESiwe93DTAkMwJH2pZL1x6fkRfGc1ztYjNm6NoTLdZ",
  "key30": "4DFvW42bidU7mhMGT8k3bP1DXEogY1snRf72ksf8jhesoF9JNAssN5QKoULhTyF9Ujnk4P2SvywKci3mS2RdjTGw",
  "key31": "4oPCBnZrYtTQ9GYoKdWvXaR6iqYfiSKZzHfXGWvqEadUU7CtJpMw2ub4jo3ue8yjw3ci7F4Nrn8BaW87c9LQ9rud",
  "key32": "2mEmnbQMJQfuQvAQWBbTEA2Q4qvaXAS68bBUsEyw2JRjDRGiiYqgFpr8LfAdpULkyctyZoeY8xDrwDu3ToeiZ4eg",
  "key33": "5NDZcQyDLEtTBJ7xZLoLUrSjSmnCZw8Pj6QStwwYgVybzyxgHdCAZyoSGVXB43akc83fUR2tBnGLPdtGu6CeBxiy"
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
