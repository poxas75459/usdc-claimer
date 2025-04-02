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
    "NuUBTwiwzT29TrnYr4WUfFe3tF1RJG3FAxC5UkBFGqh4SD3MJKRGMD2r1NqebCnyzPdzbLYUpzD1KYsBsYrvMtP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S4kQNmJVNzGWJY9fspomJFRstr9J8LSew1qecmEgE3x7YuGTcn3KvugCKXYvQdxerHFuYz4xDUPEyDEopL5Wskw",
  "key1": "4P59Cob4PDcwPMqxMMppimaPi7RqhXBWZ9bYap3aTdY3goCbeGTr4gqddDVBZZYQUsj6ZSxUNe5DaSQuBkXLkNj6",
  "key2": "4Dz73biqae2xCh4BydR7dQUd54H9NegSg74NEj3jLcmoWe1nZBy44bqLHdrnbPmGJyi6H9gz3kTm55ryAZSqEFGg",
  "key3": "59uqBeL2Hgb91hSEBoPkXCLR6gv2gvZasZiaJJyh3pcwrAc1uJ2u8WCSxgRJymZ4v54gMo6q4B7Jz3ciyd4YZbnC",
  "key4": "221W9GnsPuhQpRYuCM6f1LdXBxXyqd3cZC4JtMp3xgsNbNkBU6bdNQKX2Uqfe6Lt5HvBkfdg8rmJyQ7VCinxmX2n",
  "key5": "5L9XWu4iaqcRSbmWfFTxmUp61buGwDrCvV92NyPAm4dVDa5b7f7pTET7HEhicqLhThCwX48vjVcXuhfpEfxLroie",
  "key6": "3yohdkmCZTGYKTErTKWYEt3CpFVtvSxqsbPp4iiMQ3YxEZ1u5Cq5DfaBmchQnRSfKqRbsVQ7oRZ81gF5eeKHpszY",
  "key7": "3VYBfY6bEyiZD4zJVfj3MHbaDtVjGmnyQ7t9Cbg9QBQz5v9QQTQqKcf8XTAVKJbwoRwJqeA5E3JkAEBwe4KhTmNN",
  "key8": "gFfwCQD8AqYt9aWiUMPpxVGcKoNLvjHJqQ6NbnucGDf39iJv6acZ5jci8hecckh1Dc8qeqAwW53wotUPaLVbSwz",
  "key9": "56XhZf1a25eGpMxQyqsoUazMt5zXbLPVYi7m5Co5svq1soAZcrCjbfn7rHiYKwmqXvzkCw6URWrxvwS58qvyrVjW",
  "key10": "2ryRJWyRFBMQfHD4EBqR3FrqWipqWx8r1mgZSxPLuiDXMVYEHAXbwUEP4AtDpeAPpN7463J1abKN9NpBrQCDTihJ",
  "key11": "d6x63q5kwheqR3pQMN6J7J8EZuBsD2Qm2vF3EuCXhk23mUsa4MBcHX6WuK2ZJ17JRHcb5uTfP4MNBJZcY1mjJ5C",
  "key12": "248HQzf1ypTEbQnEsh2qn1fGwf1dcqYMJ1M1ZSjPXE31c2KadFBfpQPgajSC53gRGEjoam9HUAnf1Sv4W7ju1jgt",
  "key13": "5VEVKGUEckZWsjk9CmJ9Zasakc2WUfpBHknektZj9mNGEvYars1NNMpUVwdEGwpk3rHf9PbXmgEThcSmTqBGbi3w",
  "key14": "3Ji9vR7sjAXj8CX9eb7tTZ8YWkFHMWGgBxNE38Vj4wXMdLvqWgV9c1AQKusvWDN8XSF9WD2iBpNCKbt6jM3QN7H1",
  "key15": "5KccfxY3GWiBHQexaNqn2cHq8LRPVNC7trGCjeCirANzTdbGS1ULHoV5J3ueQkaseqDVvvpihbnRJz8S9LRFkA4n",
  "key16": "5wXXW37EiyNuyRsuLZFupPbS71S4owi4SqDvNBCfHDM8G6w2d7zJ6fcwC3VCAKtf7BdiMqqyawXBXpH33bcary6V",
  "key17": "2hcZmLircmQTwS964cPgLGDVA6dSMU9TipxDzwR9dKxLkQZ2QY1jpG5RdFjW7vnVMHAmBGJQ3phzt2opFwKxE2f2",
  "key18": "2BvPyFsEzom8hbGprpcBYEbJWqQRfUF7tnaq9gqXnyP3f5hVFDxiD1QVPhy8BG8u4FNN6zSmcr16Bry2U1Jtmm4T",
  "key19": "5FosXqJ91DDfYTMHsmPxRsik1Zkq9HoiYfC5YgoXPkZyRzNYgBgYeV2tp1nuyAkrHfLKc516oSMDgUUecp1KnLhh",
  "key20": "fjVYah3U8mSEUbwm1pp6SGUZ75azobeepDTEmXYPQXgUFPUBkdWasVAsPqqR91jMw5qrX77JtSP3U63A6Aaa1iT",
  "key21": "4FSxpaqUGaV4uhfeywXhxFAWbHGUxh8zCuunvh4ohRQSaoTxmAypvN5L18SxBC1thiWaPVJs78NVvdkaYuFEVpz5",
  "key22": "41v9KDBNtRH95LwKNQfdEkkKZrnsoqx1jn9a5qLumm7YonqrcfJAPYL4yvABHDUQKVBePZmwdWozSjAvGBj6hovC",
  "key23": "2L2YYwyxZ5pnTFKLfZxmdNoTmYbuNQDSMgVFh97c5rb55dJvzxLev8xRo182Cj1hVYmgKHGK67ySHia5mcPN1Ryt",
  "key24": "588MGuRWkhXEuKBoP4xKXNPFP4wFEtHuMaSfg9vbvZ6ud156MKJ1JLhM38hsLrvSixCuApqJUgHrGd5hEf8PE6VP",
  "key25": "2rnY4s9hdsNdu3d1A8BLYEWhKDfXo3APygG6DcwMbiJ7VyxtEaK8juMjeVtR2orAr1ujrhbJ6ruHr3CLFvceGar",
  "key26": "3PTJUA9qYPjDw9MbyVsP7bSrpD3xZuQBkmYG38x43upqgsBZXnwKjB2GWXPVfcjpU4fehKoeE37XS5peGbzRqHfK",
  "key27": "22DMwC1U5V3o3oBCbwVYtXqNKNB3ERjRvFzdPkZLgRvE6WkdNi8urDBbe2BuYHrrAsuu2f2WG8PSCYVzsxxPjF1D",
  "key28": "3sYzMi3iqySQnP7tgQZsXUXnZogDXqyrpgEi33Bo5tt9HRq46m9KkxU4AAB3VbTrYxvEeGfhB8G3i7MgrS1Ka9Qx",
  "key29": "3eUY26ostkdPNakfevQgwSSQrjmYCMUpaJc5xmP5bYWQJXDFUypQ9ofFFTKbhP9cwhSSqj5Vn4RNPuUZWtS5MeRN",
  "key30": "597S2SU7FecEoZ4K7KDXkosK99c1GYNYvmseCvyrZsBCrpky4QvwshAtcvxZeRQEdep6yqLwEvnQpHkskEwtuWRY",
  "key31": "3Mq9PUTTq5qqUHv75dwP1889JBBpmRPgmJfgYMzQ1cVSwyG46sTBR6ztXpbWuF6ttJ5owkHChiRXjC3EkTUSTcy5",
  "key32": "3X5X7P9LmpcZvqndSic5iq58UCQbkUsGmmX978zG3XWuxroX85YM2zmkPhUC1LC2dKV4jN2jErmDsNA3gJkWmKmj"
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
