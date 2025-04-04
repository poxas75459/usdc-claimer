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
    "ymvYSpdNZeibqUkAmzB81CjGo1hneZ328b4FHAhLZiEriKVmrSZJKyhdLMaUWy7hdyGdUexFyShUuqYX7tqVMa4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xRxo8BHvzHSHbswiN4eAmCimefYMx95Uz6PuxXuTZee3T9Xbry23BbUPhXy89jUBULvJ27LmTodQt1aoiScS1FA",
  "key1": "2XVA63zcbB3GgEYFaUxFPTVDWodMSV8kZ5GAj7S9xaM72dDhjfCaAmVieNdyZVAuY78BPnUDRmapWysFJZXZo7QH",
  "key2": "5MwFQCA1zErGdcZ5tidcvrsmeh3FkB4AnTdUomV2BkVcT2839jQ3oxw1EhG12UWUFKNBT7bwcEav7CmXS8AV1KUu",
  "key3": "4x9XiEtXiooMxgjy6pRxLiecrYo6HyjxqQd4Ud4axfDKYcrTwiDLGD1KpGqLQJXsQ22E34PGsSdLrSv7bVX5YE8R",
  "key4": "31nGuYBhW483A4tHaP7MG5VmjVYoPiWC5WV9inNmbnk9iC2aQFfBvMxJF9ouThCv9BW7CMxCKPxpKbU1TFLGw6RE",
  "key5": "3Ej7kpBxS5Zcbx56SwRsPAUwvumkpDhKU14AsbqffcxRhZQJeVSd7DSy6VDAi9h7Gsd4wNJDCEZTjTn5Tamg3UZ2",
  "key6": "39Sperfgd4bGGRufEYKpkXwdZsx1U8NFn3xY81rjmya65wW2vG5n2xeRPG2wsAoo1frCGYWqwuwEG4bGERypCfSk",
  "key7": "5RHF6A58nGcq97wxft3in6zatSoRa8no1DVbF523SqNqQALDfGxT5RGJfnvyHZfNGaUx5e6B6QPrjEqWaAMdHXPK",
  "key8": "5zZdGTNG7KZWkyLueT43Ymm9tuD5MQcsv46RPXzkLeoP7YjK3QVzHcRYyDxH5rRJVfBnoYwxpNBUSWo6CUc1tUWc",
  "key9": "2aPyC2qcTtydWgbLo8evTEjxoirXjuKqhnUd1qBUk9cCS6NKqgjXfWbuR764NQwVNXQnYGEvLNsmiWm76NzeDrJi",
  "key10": "4A8PzxRdt5d6eAuWdydvSiw9sjL8ac2m5BaRoNbDTpFuHtzKg64DCrzEV3cYYXDJoFdyGr9f5pgMwUE4g17WQybL",
  "key11": "4MezkmjHzf6PB19nEQh8587fwbvFnb1ybD4bLBNcrYxwXjWNuXqranVEjs7C5EtbH9n7SEF1X54s3NPGtB5zaSYE",
  "key12": "2abvzjFyyf561RjqF9Z1TMD1wffkVVbZtdNUN9kG8W1rqgZ53MtNYQRzJxw7mKx1qFmMRmwv6YUhjnmvpb7en22q",
  "key13": "3F6Vd2A2Ns5sYhUiYyYaKheCypufVEevszT1RtfgNaPsZCe1hi3WUfwZtppxttPcucN2tvRZczNjKwbgRPwvssEg",
  "key14": "3yUGvSGTxEFmrxdVe98vzXZRdNNcNBVPiZxwK7oxhvzUi2qsTSfsQJNMpDnK2YxvYCxhvWwcTxCkHqdWfuF1QQqc",
  "key15": "2zzMDwfHpHH86rQCujhYmif2ZdmYUArmsHTAVZPfFQCeYEa4wDpq4i7MeYrh4irrFGAvsTHgFdesXZYveX8Fp16o",
  "key16": "5UP326dR7N1SPa4p7fgor47KH4JUsDNNcCE55aUjHWAEXpvA7p35XMuTUMrUXZGnPPPWzfAC8XvmB9Sgs7poxvW8",
  "key17": "3YJfrxxmUqE8TK9BNtbVX3D7rP8K3ctHQ7SGpYqYs7ojqVYKwsHNiL7vswKHLSvdRsSiM5dmgGuG5GPEQPRivuq7",
  "key18": "Ff7Zv5cgJb8N1UkUp7BpE1reJa1fG2Pe31ACoLgqaFAXkuukidQny7TvuVpvCrsv3pZcQiQ3rjdb5X9i8wrmc5P",
  "key19": "4yodKnEh8Hf5spELVrEPDNeS4RPQLFGCDY35UCHUGv3a54whnoQigT9J85B4J9AEe31RPkJDchkQ499uyNEhdW6r",
  "key20": "inLa6eyBVPifLfap7RmeddGmUBukxrFVcyXH6ydkhS4277GtWQwdKUCBZKFe2qv6kE9JPo5sSwkv9SW3qTnKyLr",
  "key21": "4TdH6QTm2uajN158RoWg92gBp7hHZvhXrffd4gpRjpZx2oAMxuaMQUezwVHXrVuUQn9DK7TUkUFaWbyZKkDf7eom",
  "key22": "3neHFRmwKMbZ5WFPHEsRu6yPDtKeKa13yvphkoWT97M3cD1hymswPB7r6XjpXBdfAsEKnXx7BoJJi3shJubA5QkG",
  "key23": "4pkZzyfsxpS2wEzHehKPaqGefyFnSFxkphKaaZhfrWLHMDGwfoYhFVoKk1BYpjMBf9LM94LvwUyAHc6RKGMkqWWN",
  "key24": "2kJaGkVYedCX2ReYuUHgoZbPErX2Ek1mXGWMJhrPyztcVi9wbWYbfRhRbb6zpPrqcF3JXbskyVRNVHit6YjU4XkU",
  "key25": "5X84Goyczr4F9t3s1g87Ps4DB1SmzPPDdXQdtNydE8SmkFcsv8XkNpPPeXqz91TNa3ZwzPhqWQqcgPyWeCiMyPWV"
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
