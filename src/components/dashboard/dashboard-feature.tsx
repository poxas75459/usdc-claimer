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
    "3vrxr5bgjfPg2choaT2dVjDsAGSDWPXL9kzD53NgndrZjuiX7XeBm7zLkyoumwYvHjXreoFZeBJ6pd4rYVjqRJ8T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59kLSY3S8HXj2rbB3b9YETDEKu6TMgwWw1LmC4yrrSsauQdyJqf8MgPjsEg4UdEVBsjg7fisXtU1mGRranQpbRzB",
  "key1": "3ueeoRRSPcKBDuj1JgfZy84zQzs4FiJQyjFtMY1yRvUkrMErGoYVMhHa4Y6AQUU8x9AH3GG6sB3WDkTGLDhkt18n",
  "key2": "25eZJCPK7YV1WEVXnFEMGVyPZPV2vdBgkjP26o1dJ7DnGN4xT28UDVardqVtgaKv8af5HrL1aXzheBN2quxCeDKu",
  "key3": "2wkga3hi9niGpHsp7mUArE5jt9EucEoUx4PJV67Guv6mnqEjiByDcGkbpDgCGJxKA24rA364KtVFMqBHNxgkDUNA",
  "key4": "UMpbEfCpbzV5HSNBtiuEk3KKNfcyXausGFua7RB6EzJNSqkHAqS1suxiDfjQ42ENP87f5fDst9SFR7poCrHTsKu",
  "key5": "2Lsm3sngZMvVJRFP4SwVeCsHjsXkYbv1yD3gSfeCrdxuxLnv4qKwpEYDtArQkPwqGJcaUSLZmdaABtbywMXAabgw",
  "key6": "4mKLKZELt1Cm5RyA9pWtrj2sjXcEnajZ6SoNxg5MedETSMhvDSAe1a9BoqpzytWc51wKR8A3mRX1jiUAEuvq8RDW",
  "key7": "xyf8XNGEa3i6AHz4S84SqnJTGCszMDesUsgd8m7EbzbsofbRphrA6vYNXYVguptXtRJiyo11nNsBLwiScSDgER7",
  "key8": "Jb2KfzBoUXcjJ3hyXs2pnAEpW8mmNDam4eTETPFUUfMb3cN4cL1kuyEgm8uCRB4NdrQXPQZraoQMV8EM44QVW8g",
  "key9": "4GU1DNjMfqkTMqLh7Wbgj1AJkCoKgbuKP1w9mjTQyi1wdx8GLrDAmPBwfnSGrb4fDTMvd5PbvnG9mFJ1GZXbuWke",
  "key10": "5q1AubX7rM8kG34RkwVsHaoC3XNJYGLyuRKvtNerd4ezkYTvvk4Fpk6XEcwSH1mZVhvrhsTYt1smf9tZpQQ2y5Ue",
  "key11": "2RHRZrSvVVAR6Xnqdodo6UJ4ARFrDZLKJ9jWZD3ccuSByfTERiPmFaMsPCdFMq5GuLsCV3xCTZk6wEULhXvjmMEf",
  "key12": "4XMAVFQkgDQoG7m19U2dYM3xZ8fTmDsyDx6JPhazMxxNyxMVL39T3yY75rh4Hm8qEkf7v6xVX1f1DRGt6E6Z1mnn",
  "key13": "2WQUAdBuN3u4pV8uoWu9oNwi4RAab6pgNHGenEFMA1eemnMSiMjiajvXk2H47yCxSKgTcPTsxrPdkXGeHc9xyy8X",
  "key14": "61CRTGEyiBWFymoPhDeuSoSyeKE9eVHK9kQNyRtgg4HaAWXEjgdWrSoasFoXnbKh96whpDQGPLbmBruxEG26v61k",
  "key15": "2udKpudhyCUuvUU2i69SbvXjigjiYw7XmzpdMve6GjMGbH6TnnNeegyGaxiAeUHQcwY9VcDYEYYsi7yaFKMGyRM",
  "key16": "2cDpZA9fqe91kxjpDrbHXoDk4pMNeh8EAs1jiDnCJrfNVGy5DLTNpicDRXDWqoMC6Hdj3u8eV53nJwmqdWbp59ng",
  "key17": "kEJbH5hiSr83YCCdhDY3hcTozhEvk6FApCYXGeUEQFFbH4BfiKcg5N7HjL7NEn7BqhU24TshyGpm32cdxTStAsH",
  "key18": "At1xYGKjqJUkSsbAseMxUNJfKsvTkiU53UWFj5dgkzPjBuUX885kd3KvFWm6ytP1AYEMWBA8UGTTkn5E7cXRGpB",
  "key19": "2Fj9gLnJhkBx6wDMgto1jPFfVGh3hMr78FSkr27vDz6KXc5WoTcMkTe8X1UpVM2rw8CHRMTwegZxyxyU5c7os23H",
  "key20": "3jd5AYwQnvx9qN6sAh7qFQneuSpEKrh3LpVjQ57hYSZWRS2V9NTw58d2KKbK7p3g2pM9W6Up4S7TaFm7qCUTqhuf",
  "key21": "51ttV3hhmfY4nhf3J2PtebcjqN8R3jwSbzhzeRXVicRhhgN2QeUDLm87mXNdksEoNmTiEbquLbXT3iYjhuGJSDET",
  "key22": "3yeYwkmb5XJsmXxruFYHmRXDQW7UUvFh8etkNtgDd9HvNvNeK3JbtZHsp5qZnMzC7BigzvPh14SpPzQNujVaAAuy",
  "key23": "3tcZ7KoL3gx1LsXxEFeFDnQMsco6YZ5DA3w4ZhPKLovUdsyftGNHMmDYD8SXwLbx8wTYmTw15apMQN6zrVSN7fmG",
  "key24": "3ZFQiLzq6ZynFnHYueb15dXpLeb6yozBZ5uiGU8RtqiMneykhtbVbqKSWB6VKwimBekkqtaeGhxMuhXY6zBiuxyV",
  "key25": "31R5MuD1W7PpH7spyJGiscv6pAPQN7sfgcvuBUkgdnxvm77Rhd7v1xWfyQ2jEVyD3i6pdHBpecnsMbuBSKKZtPZ7",
  "key26": "5ssSqUeK8Hsue89j25jhignn1zBa5VNdXWPQzY49BSbLW9mznZ36FqQh71QReu94q8vZpFWKMzkgUXJfJH8EFrT9",
  "key27": "5gbtt59dY8TTWEbQ64yXXwEZzu2x561pn7vWZwM8mjH5ScoaZB7Rcjhy7F9eEFfeysssvvtyA55TdnvRiWsKX6Hy",
  "key28": "5KZFBkzt23dQbtFawMLsJUGRUek175NkQLj2eZ1GaEfxVqLbgumD3vrdmbvqHLsNVQXXTAyapKQHPVAvYSCPUCNc",
  "key29": "3gqFuycB6LyzZfoNe7mqDFWww4MweU2nyqaFkFrhh7hndxEorAhf2MsqDZxYDenGhDVd2Go4n25WwgzTnUB1ZbKw",
  "key30": "39dhSp85GHxz4Dmz9XAALpb45WyaVBpuku7LPdfCBNJ1iFtZFMCnHXfnjkZuPwvUVmKMyaH3KDPqs9U4r1oMXZ48",
  "key31": "47WM9QSQCW8kUJbmTw7NoFZjp7keTptrQ6mQde4AL4agfS5RWSTiAC2fKtzo5mpw4u1pC7cn1Akxe3d6XKw3kt6S",
  "key32": "2tRHsHsBAXUte9VjBRPPSauxwJRKhjKFDuNj7GLdTqsbeM8THagqas5KQ7x8hydPekwgfo8nSjvY4HoMomVXF8tQ",
  "key33": "MdGWKBBd9Vz6QkHfiQqM1FvnToV7dZ7A86kH8djY9KeFJQwdi2s2L7j6BJ9cZzz7Fn2qNi8BDVMtx25TonXrm78",
  "key34": "3wqGKMjuLwYRbdGtzKfjZvXQHzKRyZ21XiZ9kkGoWtv8BqfTZKbCbnaX7HXqJ2nNFxZq8SHAjmkSeMDKE3Wbymbf",
  "key35": "65U78qXidzCNEGXBG9pirHhKfvBUFH2Q3M7i2DebYtJcgLdauZqZpeNFvFftoiKbEvfxiKHkKNCmmsqrbAFWS1Bv",
  "key36": "3xiBirgUSk31ktgZi1KkraJYzLozFbhhvRTy8StRsVCcdDqQqUvmUfSSCja39mftRmGnvs1Pk59TeJYFdAumV9sQ",
  "key37": "5ScPaRKJwZjRJqLEo6DzcLSi5DQtbCeDERdCULtpHh9i7beXWY6dJhwWdwsx4wf7Td6gT7wyxCEfW7CaVyoxF4UQ"
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
