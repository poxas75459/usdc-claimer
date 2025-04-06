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
    "36pUw7faCymDAwNPcMMKw6rvbqGLZUXzSRAxT1oM5KF4b7XJEQdXFh6fot3bKuSE6DZWpigWQDQ3fpHu2jYQTeVm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44qXwRmuiCEdGqqBd3TxXvT5zdMW9Yy7QzfJmSsgpZmZcC97nf4WPW3EsGF8cBtWiVSXD1EHBfdYSWHsqHvtxzkK",
  "key1": "5173EsgJc899LwgP1GV3nGfpQr4KHc9pzwRuWgCfqEMJJsLbiCDv1Av1L3drMk5PAuyga8mtBUvZEApuKe5GCJK7",
  "key2": "42T1bihYKvi576T1WS8f7qZEb8BLoYznRn7EfhVyTez2WCpPTxhHe8DvkYcJ9G2zhL2xy36Ev2K65X6HoTRyeeTV",
  "key3": "3gkBZRL9DMRJqXwCq4x9fBLgsnL481tsoZ9ip7HUzv1ssXaeC93jNkzjF5597Pfo2AKYjJQTLkNhBZjxBcTbzYhJ",
  "key4": "35DHfCLsQDjdnEDKmKBRCkHXW5cNEqQ4ZVUAFvVM3V6SqEykfJkZwHeQoLxHb6UuqiqXPVkaZgDvv5rLLQP5WSyB",
  "key5": "4QJkJp68QU8wUJhC2YyWmpEJHtedvrmrwu9dHAh5ntPaEbvjHfGmCc9hUx9PpoHRuLGNdBi5vwRbFH4u7H16H2pc",
  "key6": "4sqyZZQriM7ko16655tjMFBXRRSRCCYFx8uj6rnUdRcazCbaufJFZqZRehSDyheb1vxhzA2hvsAhLQ5NvW3DCnvG",
  "key7": "2RKsfxdGE5pLjHhnwX9USu38xKhaRFaGapuPZ4uy6c74e2i1Q4uPhaPsxUBRmhasnSddorj24RHeF6Hb5ds7bWsY",
  "key8": "5MGe8y7pXkiG1SBNYHRXSe3WNdH9JpL49gmoamih1oNsYapKGBJrqVo266jPwq4Psem8GfDiwV4EWWackptfQHCY",
  "key9": "1EDmQftXckAoaNrURWuFjWipWqAG4BeFMudw9DyaHWA6KmJrCwsS2zote53X1mAcDgxCvqfniXAbWRefa3zjw3A",
  "key10": "54zzR5VYdMd9M8brMny3SJoXi6EXsMbdzKABmacuhSgZFY29kSeJ4vcwePXkMMLkbAkc6KMX4ybKXrpJ8DiRpH9M",
  "key11": "2TunKzDynkrkkSWaAPpHdMhC2xTiKHZhnFtZvMpw2bXhC7PXtrRz22FGWgefbuKPrtSi1zve1Ap2D4gQXASZj2SU",
  "key12": "56FQhZuBoUVxQMHqnroVP6ADLEefUWz5oXGoxCy35svmqs8zGaC7sNNtTgtR2zgPwfpQ6gtdfgoEzCqMqSzjqfaP",
  "key13": "5Cwp7kTazngjjE396RtwZVdseV7YTyeMwxAHYocpeEuyfDGFwtBrKLU2opjR6kvZzTDsPEcMpERFycGrDteRanf3",
  "key14": "X4Ytqrmdyi3cPrMWBXsCAGtq882W7jHoRNRyZCdAaytwaZ1TUYSkjYoAeQuB2VCvUNBh178xgkQKuyTa4BAir34",
  "key15": "iDg6igTfu3cdW3kobN3uCAPw6V2yoAfQLn1ytKneQzB61HvKymuXP8SNSo7GZhx3gGWBfuQnwaMzLFtskuN3VGq",
  "key16": "4pKqZfWsGVf48HLTXTpVCTTv7wHzkLndXPJh4EiU5J1HWeTxPDjSWDcj3UanepvXcjPeJ7TbGFQTyGguU68g681Y",
  "key17": "3cjM7HQsmgPxgq8L4QYAGsDXerXkSSUehh1Q4iJwXCAjZvtbDHNnBphKbkxLCmuGhafQoaRCMNP4ZJh4TERJDd2E",
  "key18": "5SsXiidPdYGVirmWxbUJU9VfA3zwgwhGdWpr1FDqtzZm6TAUTbXcU8sbJqSgSfJiqNURfsK1aF9pSWZKqR49HFV5",
  "key19": "3Ng4Mp7KFrZ6tGkrrPvYvvqqeLSByehhSPXi1H1JoEKrV8Q1J4H5jivT77tAbBvoLQA62cKMJg8Mmb9jZCfJ788U",
  "key20": "23zyDCspg4cCm1ryCxUirrWs4tvhqz9JcwKZpGX1JA4dtdp3w5NoNSh2fq2HQjswmJ2JDatfEHA3BZwtDtQpxkb9",
  "key21": "2prD2tKsDLSmmUeaErQ9Tyzxua28wf9Gz2aLvxJUGUnT6K2zfDSFW86J6DPL8G8s9BnQ6pLxejKKvpUc2fscdm6P",
  "key22": "2oNNvwPJviHx3k27TdoMpYt2LNjpy4iEudgNrJ5i3QSne1FWxVbTSS2JWvATXTdbKmkYGfpV84T8tZwEjJhDdNCn",
  "key23": "2v7PD2Yd4Y6rniw5V1Cz4cNVMMzeBmxxYG2Wy4qViH6va9NX3zKQhkzeQxhmZNvPMXnECbS3vLy17XfF8MQQfhC5",
  "key24": "5x3smY3vfpRzTyShfLweuMoG9wCwAar2m1HRhCNT1ZFMkhShbc2TUFbuKJYYvbdUuMUnvAqCTjV7ucWgDCq6R8ME",
  "key25": "5HhgX7xVhNCXbhkvEaHALzDT56iWnW5qG2ynyWASLiRnhfaWGPnWJ6y31kghC6tyJoTCkosyD425Jo5NVaHQqCLS",
  "key26": "4bvyXR9mXmsvnR5DMdTmPW9xMfrJvTAsMMpAMQbzGCXyMdAhPd9S1nQ795r5Ep621kyX2M4yN9TyNMKTW6WfX4NF",
  "key27": "5ZYVk1V17jvGR28k4UmNsbgD5fEn2QNBbTzxhRaD9TYYcUrPGngJ9zZCX4fH9eiSND1bMToH3AtB7h7Bbiv4wcHS",
  "key28": "2FxLwidrAYZVTFJj3CbjAVs3HNKwuYGztCF4MjVWnhKKeiwFNGCB9mAVqpcyBVNuzRea5o2fdCu85qDrhUtbZvst"
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
