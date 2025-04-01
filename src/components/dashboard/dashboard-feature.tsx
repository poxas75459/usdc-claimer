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
    "5HA8nGbRD1N7vvFvKwH2ajXox4Bp8bYfYH5Aiq1kqFPjxfQjTzvoJaSPPsnhEffiKjAeWRavDt8yE6Gdz6DCUDqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tPf3cazrRAXPnkQexJgRcMtpHrnS9TpT8gx3JhLHPB5S86w2YAUxyUXsGic8DyVYYBxxqC9LuhqkfhTLBHWMnUU",
  "key1": "VDneZaPtt73TyMhzjwhw3Wcu1ysEANa8DxywjcTUG6AApi841EQxRYMz3qLTwzL8DDkunzPMmbmsh5hBXBsGaA5",
  "key2": "5zGUy9D3kfZjg6LShfPzZMfxG1eZCWCfqXGQMQVVMTKSRJmiJ3JRzsBYC7EP47eWQ4sKoGzkYGVjptQSfHsbDVSb",
  "key3": "2C972op9KbCXP9U4FPHtY1QnfFZbCM7KFVHB5FMbwSyMiaKNH5pJyUEMqLp67bGzq7YYeMB8EzAmjivvWuDHHooU",
  "key4": "2ZLdnvAXS1KFVZafsmxnTgWypEioFm715qgAnWS3ADaPx1W9HYXxXJz5LLRMoTAcBj89EaM6fm2o1Xyh4ZkwcgVX",
  "key5": "HhWWyjhBTbeRuUqBabrybFZ8b8dPL4ujE2QWbYYsqo73Tu6apDaAQsscQjGkUieDctMeQUwuuepavyRDK4MfojF",
  "key6": "5qSWWie4mAABLQFA8diJV292sWCfZAvGtbrBtaQPzJoUmnAw6ofh5f4NwBD3JZGwC4mjuuLYbyXnQjjWdnfSmqj5",
  "key7": "2MmuND8S4vDptYdRR6gu4F1s821HfnRRfemPNV134ZqhgxKLLton8grNgnPCDRiqEBNpWnBZGf1BmVFnL9MWVAjU",
  "key8": "pfUS6hRjGK5iQab9Se8cDmPY8F95dMbrRTnxkDF6t2vXa63t8vqzTa1Nxz9AgC4t385aZrGpyVZPPkwMXa19eiT",
  "key9": "4WxxXuoongHaenMjHgqjAuvxGK6eNt3VXoeK56qJvNvagXZ8XpqofC6QL39pHEvEMYJrGukKhU4EEVZuQThzuhxy",
  "key10": "ihLjn6N2EBsqgTmqjHEVp5YjYD7mZZ5nYpR4HrdJLnperR4zyGfb4ZCEE2WBaK1efW3KdRxLsmMSBCXpRfQy1LM",
  "key11": "4NePEhxdGq2LRfawMX2UikvcXKc6ici1sgr2k5aa7nNdWbV9FR21qQEaXhfHdfL6xAaYG8M3Msyu3qSz5eRVsJZD",
  "key12": "3KRt3eRv3Ga2acFxSHb2T4WyZC89k6HxAEtY7bEJG95pNGeKjmxgZtTEkgdJPLTiM6ak55j97n94vXnxvKkeiKFz",
  "key13": "aHKQ6FS8oazuvio8fezUiwVYjKU7gRSmJYT5V1ZpYFydxRHk6zDYw3Da3sTJisvDv62vDUUheezYEZHUgP3GFiq",
  "key14": "MFhQvZf94A2eGoErqohiJa6H5t5Pkd7H8GdRi7sAq2RGAdTSciYreHnDcE5TSjzbt86h4pJ3dEV7MuRgHfGth3M",
  "key15": "2iPaSkW5EotfGd3woZzXgnnLWkVvcJ29XKy9LKwmBGY5qC7fEmu8b3gWkd9HKqhWHsmSiLUqvnYmkG81cs8DkrB3",
  "key16": "4KkcDMHqjtB4HDZKiyUi8Nd6zzZQr98RyAHcAL5CfJ86kWkd1zbM9qYkWFqgYH8W1X6VmLUqHjeFz68tUhzvQVnd",
  "key17": "3yJFNRYdghtF9x3DE9xP7fdc4cieaqT1wXGzqfat2mysxGAtuGvLavxkq9H2CTA7YJj8P7t6D4npUBQWAmcwn9cu",
  "key18": "3MR3E7ArH8ne6PmkzFfzjnbDyM6UwEU9Jm8jFGiBr1W9KHiWBBEZtxG5Yvo8bQ5djafupsbpJ2PLWiWmTuqeKviK",
  "key19": "4EntEdhxMH7Li7MLFnVmd6eu7ktm9QiDQA3bGG79PvPHtTVpFTvkcuvo9GVmpSD6TRGDKv17Kqr7ei75B9gaubVT",
  "key20": "2zFYu7UxQgxYqiJ8YMMhiiSnhRYdKbbwmEg1So2pLUoEUBKQSrt9AdCeYr2ViBZWBrhyX7jyMowZqLWAGaF15adZ",
  "key21": "34rUpfQ3Yg4BAJ5k8DgSMPgNEotY5gkMoZKavc3TqSNBVuqw5wpyRjqJGDPeA8f4CrCokPDSKgTqw5VaauYxW1WW",
  "key22": "rW56qgwwxmWdZaMx4sSrSrV9hSPASdnqL99jNpFXxuAdscQ7fhEgrUBajNcjncVXnYY8EFaUYu22ZxpiqPm3X3Y",
  "key23": "5WKgXmS6tzWL3nrpMAMtiPD9tKQbQgeNz3RK6yofeKq5hoTwhCRYhQmUKdXTMhDdv4gsD8WSfXXTMiEE8irqckT1",
  "key24": "366D8QQPp6qEmdvqFZancjeyx3DXiqdp47gQYQPHmwAibaRsMAvLHZfxYeAjLNbfF2KhDjdGKZyP7Uf4jdyeYwA1"
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
