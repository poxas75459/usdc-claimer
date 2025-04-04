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
    "4ELFfgF6Za8q3rcBYnHUj8bKyfmE4tJsiX9MVGXCEbrokZkSo1gCTe2fjwkYN2qqdxg5cNLWRNnTkAWYfJk7UVhT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sKK42Hcj1NEU9Z98DkPVtrA8SutufefJzQdLay2Z83F6mxqW8Td3Gtej8fKLky4Ud7ijPENEUKz5KL2mzEPd8H5",
  "key1": "7gUDRN7HUXWFnYaHXE4TmPy635xLf7AdMSgMwyNuwZqUXjQLDkLnKcew1HgPmdrE4MA8ExwXsum8CsiKvcDh6BT",
  "key2": "5AJNEKWGMEzivtbcXnDdEghptF9i4T1Ap9nGAbs2fuT1xymLr9xdwcEPb3oVCGQ4SyeTQFkvQdrGe3iEFnDWhPwf",
  "key3": "vnfFyvDJS6giNfMoj9ctVMZgooJwyvsuocYxwCGEZsRqEssaBXnSJsJ1TjWUXY5G24qUbzQyLfWzTpLeLxdd5od",
  "key4": "5aFFqhvfz3s3bzjYPA22i7g5c3A4q6fEXmKJ7ZBhPUP2zvahPshUaaFAgYYxBf7MAdgx9Bwpb3ts6C6Vxd9KsuxX",
  "key5": "2sKmjPrJHsh5v5WDDnqwEjjjs8cvaNUhVsQMg58pMcPTgbucCaG1KwKU3vP59fheLE3iGaDE4yJG3xJpEih5NfmW",
  "key6": "5SVmmfdxe8V8LoTT55j2Ba6SbLnvAEg85Gutd1TKj3W4b28np7Pqu4N9ZLwXXx9KcvMm36rjn9JxqfXHJdJhzZLk",
  "key7": "2uAD1sGn3EiGBY5ut6LkVPDQksTYrMLvUr1c2AFuxtcEGmzMH4mRF1SQqrUw7FNkQn61c1btbuuDm1CNEsXf2afq",
  "key8": "4PLaxvhsf1jfRRANPT6ipTpEyZLFJgh7QfbzpUwdawjaNxRemfZHscKWfS91TmJEwRoxjsRQ7gaDpNpXpmpuno6o",
  "key9": "hLBWREvhK9yd7bNYjbZ3huYX4bH8kmNPGX9okvtZ3trMcxopAAztLRSmUfYR5r8axeRLEYp4TP2RsFfYcmH4DfT",
  "key10": "2aGy3mW6yxKikCBUPiyH7VsPv9GggDGn6KT8ix7ufVjwzhvn9jetnfiXtkRBVv1rMqCVeogLDhWcf22DNHDY9QbY",
  "key11": "5CZnXc6HvyFJ7VVhGG8rbcbJktHnhA7Y6R5PuqA32Q4E3KXLMdj6nJd8HMQ1KnDfxPyCZmuJJpm93g7xBPK8XYYq",
  "key12": "4y379UaNE1CbePpMoXh43x5KNs9r4RPYjUQHY5GGFmeuMvxQvnKRpUxtYHtGznrqQd2C5siAh7cQtmQGRjpPvxsU",
  "key13": "25Nb9wRrsrCTJ1BYCGKovdNNeUk2WVWpqA5Uf6f8i3vH7NnKLewBmHT45Xxww5NMaeZ43ta2NymAMQyuPg33ohos",
  "key14": "vYNE8Ns6RXNyhvo2CmTiHrL3D1GQExDbgPtSErtAj3kBLAaV62ieWutq2nyyf7xZJm4GGRi2m58ZZueQYNgHHs9",
  "key15": "4Rm6BdEByiZGjXssSdUfs74mW27xX3woMYCFzeUHdCCQoYgLVc9GxMvVnKPzyi2z9L87EdmjVk8nNAppNdA7wrd9",
  "key16": "23UjNBa8K9E2RuVgDF9HrdaStuLZdDJw6HvmqXpGrqNUEgThhsRZcfQVttaFUoKrqFPAxzbP8jFNpDffvELBVmsT",
  "key17": "4T93gr4xQSYPnFMYsXUEsDiSuoZjXjSv9sncAytDVcVxTh9mydXnZP3uMHgNQ1kBLavz3cNC2ZkAousdkRJQktyq",
  "key18": "2dfwjoFV8hs4kyBVGKsJT8TcMnXn5JttQqEEFzK9QEMLZo7WDZ917yFsUYtZJqmS39LR6P6p987C4truedLcJNc7",
  "key19": "2uj8xB5N1syqrXXaYNAfNazNKbH7YqHARrkWzX3Q11Wo6G6cBUSE3dpi7a1HKBjsVRQ6z5FjEqnZZJh74a2A39JV",
  "key20": "rAoorXfhjpTazLNpaL2kNMrLjHkT3jnwdMcNRVa5SjNxjwV47K2UPBU8pEmLbB5wfijFT92eLoARVVD59yhFgL2",
  "key21": "w5x9TjpvFbGetYBVbyKiT3wo8pkydNySKr1DemHpYGNnB9aeCxLJTeQBGnkg9qhFaZDtQRgSd54W171Dwbiyk1r",
  "key22": "4SJBx81TbfvPqd4yk4UHEhGiMUQJ7gyavhud32wcEvWGunJuFumdprBfno2A4EvbSQD77UR7AEcS98XFGNbYTrDP",
  "key23": "2tWFLkNDVZM9uQ7QtjaVFDThTkTMp577zrhauM88Lf723HhxpE54aNA1qr2aWMHNwVoJy8dUixBBkzK7e9FDsBke",
  "key24": "5s1C9PU4AUzjHtzjXWQHsfyRjqRCTiGazfcvTMtz4Jd3K5Z1PQoZJGsxcKXDiT9BfLFPWxMgm1nf2p8gznauqikd",
  "key25": "3uSrgpj87x4RbhAMEgQ3JSpyY5qFUKas9MVZ7yeQ3hhJP3cRVTgbwuqCz6Mt6abC4rZHyfXj7swbMMKCTyktEwdd",
  "key26": "41hoS7RbDcFzBuk4P8fusVQjjkJR9NVTzjkvuzxMHdavBuRPKAXFpPY4fN9JvJzGxaS5QZGr6ggqyAmyYX3koLz",
  "key27": "5XbWTFgo7QotSUDH918YviWYkvjtg2WbGF3MSnY1HDbkB7Bh5557r8MY7iJ3QRMm9bhbuG98KgRsQzioVb24kZQa",
  "key28": "557eQWnCpRzMhgEctaG8MLeRxhqWk1cpUD4G9s6t7idNZmF1FsHEcnQ5q2w98SDMzJTRvtQNHfstRWWnfjLUeQVr",
  "key29": "FZ9s6oJDgnnMh86arv1wk5RFwUQAqbvEhf7A819eb1xm9DUqKWj6xEFUZEnwoV4kGpiNFBZoMhVsihLnnuKri6Y",
  "key30": "3JxdnpmD618WKg2fy8HaAPtM8hqceNaPh8STrVSe7CqMFJUCTakXo2TWktvChx2ki2RUFXDeuM8HaSZ57eq6wQb2",
  "key31": "2U3jFEdcg1f49KT4sX7Ezg26qY4TSMYAewW3KFunEb3Bnwh6MuE4hzjn8r7A6w3gZE8wLpWJxPczfEH7yZw4hCjX"
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
