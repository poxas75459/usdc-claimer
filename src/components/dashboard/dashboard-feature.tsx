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
    "5RVLEpAGbuLsPUfrAvhmdW2yPHtQsCR7C7Go6KAPFkjxH72kXSBiUYCkb3BfbXfzxZSYPSkjvDvNEyoMBJeJsmd8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VsCM7kwWPEVCQNJ1NAhDycYobGYjNwHNVm8MxsQprZtDyt7BYSLgMMz2Ljx3duesutNWfrx57KUmzEKaWacQwBz",
  "key1": "5evHygBTDcQmTZZtmFzFEHD27g8egZUA4GozUDKPPsRHvYdx8VvivitTDvY187N6ZXjRvLEmVVRQT3Pbs8uWRb8b",
  "key2": "2VCLoWqWjJ4RL8FdfLhbWLVQEhDcbbQYY58jKzmZyUTRMtkVmuNKwAVGi48LQ5NzKdB9rgCWEDPa737BfZ1WNAvS",
  "key3": "5rickBGxgoQpwoApc6RmeUUr5g1KHYfr51NeBgfVHXKdvmzZKePjtBkto9UuJy4x3N1tocxFNATTikzTVmKHdGZp",
  "key4": "p6AhTNKxegHsWhmSNdAYviNfwxbeKg4Rpmhqwr6iEXZyHsUDUx88vQ1P1h8wtMxnHg7bNG68WbdvCabgLsqi6tC",
  "key5": "4PNkMxoED6mjr4nYSEJwY2JsBVcHttroV1cEuN6CJv1z5asynMgF7kHnH28jnNvJzQ7Zmh2wi2jFLQAwGL9Ckmsg",
  "key6": "5R4FcA2FSV7mZzTRyrMkh1FCtSnxsDnC4BBZwuAh4xxaTHn3TMBaxMy86i63E1eimFr2u5FoKFbJmx14Co3qTSsJ",
  "key7": "4oHjGHLyZmPunNvDKQ8KwLzWm16DqXKC3KgvvdmXVb5bqZCCfPbnDrH254MGPKLZPS6g6iocK6LEhEnqCYzYZam3",
  "key8": "2z1RGhGJzHLtNvjM3Lt33DqyrMRmmbxBaomCcVe7hLz7E1yPhFihjewRijPKeKJLrBc4JcJJTvEygjaQbfXa4L3m",
  "key9": "4h5zafpLrwUP6LSPsJca3aGtBEDgAmwNCKxJRT7Q7TVgC2BMWpbxFtkZ7jkpyCaXLdM4x9j5RsyYxVWXLkHR8ZSE",
  "key10": "2Qmmj9thaFfoZrRgHx6S7d6TRZwFyrV2zVYYckVmrt3i6E9gijHcZcqMRrmtis6gFquapemMvx4oUppahsiUJUJr",
  "key11": "5Uz4NsdV2xo7LD5yA1846CA3iFTAPdCZrbqmJHsuSeiyX3TDvLFjzADa45Nhvjt8uiZcjYKmFokKjL2jtHR1wSaJ",
  "key12": "2s9cup5VNNnukRZ5c4w9Emndaaj83cRb2rK5jWfxQrduaJUYgBEoHbdo8dbUHvZjAAkiWXq41EFWMP97g1v9Rc5M",
  "key13": "cMnmadsKwdPdJ11GruXZd5C3nwFyhNkYPXPaDqccqrkhSRy28ZVrjNv6xyoKhxJV7rFMNxaD5Rx5rCqTkzizFRN",
  "key14": "39mcRGnwjrRT4kT96dmKeLFocL42hp4gnZagKByNwZotCL4ko8JPww4cuLR6ofWT2rvKvpUTPrKq92GA7yTrKeyZ",
  "key15": "25Ux6aZwn68oLDPKfx7AKsE7sK4WL9kCs4V7DutqDeyEyuTDmMJVE4hoS9i2bG9zYPRudwiFN568wk8kLaVTLEuC",
  "key16": "5V29wHtJESKkiJ9ktQYpmFPQo7sS6e4aUB2Btj9JecSfMsuxAtLt9whcBjQ6HmVSPvXCjmanyddXxYLTWm2JW8sH",
  "key17": "3wAyDuKuMJGSpb5YphpKkTuSNrCHqSXMVwzbMnyxAGncFzqWiG1RLXmYS5eRpJSuXY7Y9My6yXTdY1ZCfpRU9Pko",
  "key18": "4Mp5npnpcRgG1hpgrpa3UndZ8XVmXAGt1tiZHRSzhdu86Go53xvAS5f4aMEnzxtWn4Jezq5HqvKkgrXtVBP8pn2H",
  "key19": "2WfAdfEU9Qs9kNn4t9HrEwsW9PzB9sd62wzqWgx1CRJrGFtLZoqhvkn7Bkk5NB5duPttPjumBJzDGKZJNJA2qT2e",
  "key20": "4a29S9NyM8jeniSFwGSzNzziQyyNE2YFSYpQUPVeZEL4FEnM7VXjeFingUvDs15LJjnFyYarUGHmiuzZmfjMZpb4",
  "key21": "XAQHKLzGSkP68K7ytcCiqC61HprkC4CW1NxdfNiMVbjpqp9Aqg9jnmgLExwserUPY8U1ftoTKS77UD57BPUiTFm",
  "key22": "3YFqCNCwsU1L8AtMYfg7K6VsP5c269oSm8ih3zNbpmUEX91RQor7vZmp85deWiXT7x7Z1C18JBkgPCuwYKtAx5Sy",
  "key23": "2SvxHfTHY2tWXtwcnWQk8UjLBeDGJWarUhCXW4wu5hZb6oHLh4KKVWK8WhLqKuzD2EuU1DPuZNRA8Ag37R9UBsKW",
  "key24": "532pYt6tS7r9a8oCavC1ikRT9F3A8p2SZUiVBHfyZJ9o7PABahkPRe5Bu4uA8XctSe69qx7Fp5i8FMc1pvQmsJhf"
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
