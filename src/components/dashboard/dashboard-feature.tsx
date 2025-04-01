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
    "tRGFJAW5NBphBJ6DMLVVP2W3XTpEvmdc8qa5fGS8GTFhnhp1VB8vGcvAJMwXRUQvmSnWB2upPj18WUCUicsquQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C12CpEreCgRvBfPouk17vJug6ys3KJbuMCG3hD2xLDnY6emc7suoZzqayecuhvJ59CTxKV1Rak86EjCpTTwn7Fy",
  "key1": "2FVdXhkBEuGuzXMhgRmbgYtX7VbRX9zHq5fix41U88Q5NoZoFoTn1Td4H2aUoCQbh1YzEqqGNtktn5SpDukfwxw1",
  "key2": "3sx28nKVahducKnivKtjte57yawD4qZFrEd8b6KR7NQYTiXeHCY1fCXPBGH4pcevUcFw2Vbr8awXGHC2hN77cNTw",
  "key3": "4YkUW6ikjUdNUxDwePWQzkiCxEaSjnZArDscVqnCJhTvFf5nUQp8saDyNUEbYtjA8pNUjHy47dxqaScARK9WUp7G",
  "key4": "3y7GFYRAurxAnZwt2HUVwFiice6iTHJAEf5ShqM33DiSoPAqBEMLDW2Y8gsoMMXj2hPtdHCNHNmkEpRBLeNovkdv",
  "key5": "4g4LAXSdAjxt5QAZNJGL94o2dzMgLz84ii2WaGBij5rABLt28K9u4BZ4kTicPXEsx6W8XSpzWiN3d7bqDsc4UopS",
  "key6": "2Ft5JsWT8XG61GBZh9LigpkWfF4oMUica35Qrn5QpTqWTiHmfHykzwnLcmiz9g38WjY2LTajgCrKx8YDNKUN6TtS",
  "key7": "5cZm9sQkMBRYLoSqwx5QGRvJXLZtqeunZQYypdSsDqEEtQPLuSsSjNJYHT6s4X4Fu22wXNa65VdtjstvoJBn4QbK",
  "key8": "YgK9em9UTP3SjTgkpgF4xQegmYit8j6JQsPqY4H82fpccmbXstfj8a8fqE1RkFJtS5W51dSqo1tWrZSnKpUAiPV",
  "key9": "5yjewpfjDcPEZso1aDR875QfX7m77LqBgLsWqQNFCwFQLRwp2QyBfJugdq3JmcngYEdpQnyra2HvzxPVMTmFQ919",
  "key10": "5VgETp9MLsnMo4vSffevcgJAXeEFisScLSBoVYHUgCsTfek6uXchbPSQ66cXY1s9xCiMTgg92Wo2fc4SnuTEzkfn",
  "key11": "5KyQyb6ddFQrRoNYFRj6BPkqTxfBFMLpFFdDVrdV6ihJugMpeCS9RPo63QXAUpvxPbqb8JmAo4RGrZnhnuA9inxX",
  "key12": "cD6tZN3hfjiTJeZ1fy156GBSxnpE7hC4sLQZBEv426mWvj7Dyq49w6PhcrZn2ssxqEnb2toCDgGDTuZGGrqCLW7",
  "key13": "3SndFzoCRhDXSXrim7kQvxGa8euSbEczQ5r2fYHAsMhA87qbqx2nRNnWADmdwtomWGnLYm6DgfaLTdxNp5bchKt",
  "key14": "3GqNonmpPrrNa8LHdhW95eGgwgwKNpge8y2scUjpV5VwxMULVDVJ29TJ6DJ9ASzsaJp6KXFZhnYMMSS9NiepUQ9Z",
  "key15": "Uz18rNCqmy6TgGtk29Y1nx9iqRAjYk7aZWkcsioURGaBhiuArWnZdPf3yHJ8Z5yJwVDeQ4AaQHsef4bzFqxzd6j",
  "key16": "2dWm9hrSA4zdAa5M6BXtZ3QUoL2MQYwTehh7MzFRXGvFyH14Wsmw6SWwF9fLK93VzApRKCLhSEwADSY48DpLftgX",
  "key17": "4v9mKEt4VsQZawEFdLnv1v2uutJ3Dqnof1FajCCGCeHsvMY96BP1AxEha86DyLyyMCkKLebRSs9YpM67iLN2kxJC",
  "key18": "51LmJppLNoVerVsvUW5EsvZcBjKbKgqFZzbC2mkfa3rbFXck7wvjda9U5WGTGhM9zLyi7QjU3hS4TtHVaDkUCvHD",
  "key19": "w1VurZVwtYwquBVASfgnRtqut7mCsQoX3WpfQGm3qYmDF4pA2j8FvjzehKEugdiP7T4yGRRimYbbmBe7paMf4XK",
  "key20": "5dLt1X6YiWTYBh1UCLp9aZ9yK45MUMRQeV34wmdMg546KxQkm6MmgEh5dnUY1Ft1CmtQbD4zKG5CCiiof7GP884H",
  "key21": "2RqX6ozMRyZQPX8h4RDgup61JvcEtYFrorvMAEavSLTTaj2ZQB7GgyVbSZWYt7D1QzxKAZC1MeqsvrvEouga9G6p",
  "key22": "4jCxuam3eU9BCwAgqohE7asfW6AaAKMnXQ2g7jSTpmVoefYKCGHjzwjspL1Y33PXYZWDchgZaNdjZ4XjjoteURap",
  "key23": "u6DYFmFGvhn7HDN4RD3bKsiNMnHzxgd3Wbx7nFrNQ8hnxc1MVpJ512SPQXoLBsVW86ivcexRKcYP9aevGvd5NNF",
  "key24": "5mwx54jdCFuk7DyPrZ6jY4ij5e2pfbxEWUJJGFxsbjYhC5e8kny3Yzpnn1vtF5VmsKki3EyS1BxJba7Eqm1MRBC3",
  "key25": "2e8M6wzrT3ho1notBMQS2BpUpPLfTFojAPtNCAnNQYFuXZE2iuagv5VnqDfD7UhYBPQppHgkzupnAvikcZAH3gP5",
  "key26": "MrGjiGZoQ9hH2GXxkk9xKmQwfH75w4xmvkWDEAEvtmmUaqisMQFrBZaNyqUxuZqjdiUNQSr31eGFihE5BmWGcgf",
  "key27": "5W4LtGAdtjPGnM5cWT1R13iHVukktSxqxMoVZ4nKDCWuBWpAEPzyDmXpQt9bJEMdJEnnkA4RHHZ7duL98G7AV9ZJ",
  "key28": "4MVHaRP2ZnEXzJ654bs3Jt3am9u2ujYWahZqAPSZX2w37j1DUKUvcbUEvwrYcYyAY8Vg9Rug2TKM6ebxfukKksks",
  "key29": "HnLZcy35UNNekF781PAmSFzRL4j6jFw4os3fSdL98cSGeY1DVZT7LAZaGAmPrDRXiuxCReswXowFdLgyHQJSxL5",
  "key30": "2C5tcCkAvqhkT7Exrkrpn7KQVQsfUg2XC1E2tLahtPUNMaYrXeu5SXgfccrvMQvQBZe9po33NiwoEvDEeMFoCd5j"
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
