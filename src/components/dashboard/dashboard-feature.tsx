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
    "3gah4MvSoiZervxhNvKLKjEK5fuvQvwJZUA2bow4vgsXAMQ5ndaMUCzsHcXmoQVYtmMKQywPL4GqRFMoPN9PkvtZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sjK9PMKu1Gph5Lh5pPasXcxVx45nEWsbzTNNXYmWUEGYCTnGQB1bzBJPrQHTZhxsZQo9pPwv5SLQyYY6sfjHePK",
  "key1": "4RWVwTB7fhKbbDfMrthG6fnYKAsvqEGjspgyR4H2cAVDHDEKr2VsSQBW1e5a9ugoFYjPdgpV9MPrhHczSyXAjkXg",
  "key2": "uNp8AjYXL2wABamko6mxpXk9rBQHnm32JcwhTZ8WZuFGbpDJv4E6X61Ma7wE4VquQ7WE5qmGtq8AqusKQ7gTV8U",
  "key3": "4huLwFQL8GCDRqzS921FojjLZRbumgGM48b1mb8ofazod8yLqWkdRf6SEw1AvXQ3Q4iHAoFHRrRBAnxcgLiz2GAp",
  "key4": "3bwniLQpdvMDW9DyV2uroWK8DkgNNJDfCPiasbCLbvKTsLLqSKkHxXU7tJp8RjH4QPL1cp2oj2aHPAnQEMvb8DSz",
  "key5": "nd3Ro33jEgwfp7xEEcRapSWmMAmNf3Foe5Bpn3Act2Y3UBU9mi7ectJCv327Ki42QH88fjjzSkeAtiFDjmpDW7G",
  "key6": "5Neb5yp8pb4bAdCRxo4hYJGSAZKok4dC9FLNvbkKyDDqV94xNpxghHsCT8VBZzwUyPKDqs7rvtVyR95q24iW9Ejm",
  "key7": "5GDYqLHmsfAq6NRjkxVtWExakREWNKnx4Yb4L9sfQBDDFGQBpL8CmJgJRmJbeUd92AXCAxXVbuKnv3b6XeSvY4Re",
  "key8": "2FDxNbQ3173wJRtFV17Ma5TPHRqFVszTu7gCjwAP3AZ1YbVeK36NHvukSaJApFTJt1v5S4ScjkdqLcjqRZrp8tX9",
  "key9": "4p1eazECLqCH2UT4vA7SntkkQ4RKAYjCwD3rkWq2AGwHdFoCDDW3hjqGJb3ccVC6mD3CM3eyHHrZybkHaK1tpNdw",
  "key10": "wWuPk1dQo82xWfv3imLxuygA6fTm2w2NWLmgMPNsFCzNHYex7Dzb57YSTqpfjw9bimx2PjXo4TChMD81nnL3m7v",
  "key11": "awSby1JayCoHVDwc9mSS1TQ7qDdcy5rpyMnV4eZNih3YrnWm7AxUNfrbQp9BtXVNv2vnJbWcAJuJMzwZdyY8cfa",
  "key12": "2j2661kU89dUBrWnTM7EcZJSuhWfyCscRGYfCeLEwxNna5ToSAQF7PV4LT4DMbUvTcL7zJRX7gJ7WWTnGfirG88R",
  "key13": "h9hweC62MdRqASbM51KVxoCPneGVP4GDEC6BHgQzuvg7Yc5MQrNEwFcQsY8n7Dzw3bhS5ZnXshXWtkkDVcFgYmh",
  "key14": "5zPJKi31gFhVp1ESmkAfnGiyRSC13XtZ6JJMnBRAxFQLBDuYXMyAKwKyUww4BfZsDKtQ8L1WoA3ddampG9BaWgnQ",
  "key15": "isw9qrF4mxDRQf5Df7L5eJNmfLCrcaPMYZCusT6rmeM7MvVYLWp2stfqBqfmupZFPZ3VEVsDhcx1ZvPp3peQYKG",
  "key16": "Rok93du8AkwEQ8ez33uFfEh8hur8R5WwB8WgTMXEypvTwRYSc5c6TRek4hSizzpEKHt5dYwzpDgLDFnCnU3MjPz",
  "key17": "NfpDdYgCGYJpGKyQDdZMjYS5hgoauHoomB7YM1uHwYcmEV4mSxv55XdmE8BAXVJw6rN7eipeBdjE5ZGFnot9rfB",
  "key18": "2yvUVS8GEcUbsTFJFi541rBAAaMp7bXjpk4SBzMZi8HitaDtAv3yo1qGidAft9yRHN4ZgTLtJ4SHPAV8coG79MuS",
  "key19": "593LGKTJSjsBk9MQ4mxHoUdiLTJjBLBmRLesUFu3h6XrdkTGeGFY8iBfgLeJHbgoMZzdmngTgaM1FrtoEifHPADW",
  "key20": "3Sh42D7PGtxEseizWyXQwu7FM7Lpm2MsCPHypazK3vBcd3Wnv6sfURXUXPWzk6a4kejoDztNemd7bic3eLMxmCNx",
  "key21": "25iqnQhq61xao6QxWYB4bQX8fYAipHo2BFC9AURQ3vgt9ApfpM6SttGQNy9GpTzDA8NDv6meqiaoaDQBKMjbRufA",
  "key22": "3YjpQsuF2MbmBtZnHBx4M4LvfrvQ6vQJ28R6d8bJHDRt3YWXSj7rWSX56XxVaFnWzPAotMuGyXgRjWwqhPzCBMZX",
  "key23": "3VN3dk113qQEQub4cQhecxjrkeynNEyUtAPZoFioUHNtxPvbdMKiodw8FcNyT36vLf6ey8T7CePHv7PpcDwQFgrH",
  "key24": "3v9CK4YVNvjiyikfTPyRRCqudQJxic2r7dyvYA6QHFymPmm5wKLK441b5ZNGM5HF9dWusppBU25BFfjkpybpJG2d",
  "key25": "3mXBCgdMcPEV7VgPvKtUDFuXKDyYitXBM3mfT7m7gz2M8TGn3SK95LLbDzj6RfzQ2osLvSEqvesU7k74viDSiA9i"
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
