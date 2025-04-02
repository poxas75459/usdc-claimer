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
    "33ujsirrhPtwoRNmUH4Ee2igTS1eHSfXoKG8Vap6QYZAVacvFZxD5y6GQZMYLkQ9LZcjXKM8EKQhsDjQtqWLkJxV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mfySG4WsgaZZNgspt5YRPopqZZqsC5piyjCKbca3PRaTLRdEvJVHCqKvv1fz3GjGEJFLQUPo6y7EXz7d5qcbbM1",
  "key1": "2z9ShMqvLqVwX5Vcj9waVsp8CEWhetWxe4VLiqUokmUrA4RYw3zrX1PrUssEHS45G672NZgpJYJXs8eG5PTy1MuS",
  "key2": "4FpCHmKEKVLoPrxvZmcuzfbiCM1UFWeZnPeqbGS5qNjD2XnkLM81uvXgqGdLW92o7KcDRPfovtLA94N3cU8BRfDV",
  "key3": "4sN2HpxTKKqmK9UHWcfgHekGS7SdhMhpbeK9P6jTZqRR11zzkyeNiacSRwpdYHt9BsyEUCW39M4rki2axGGdLRcA",
  "key4": "hxsReiEJ1ByFNwf2byDD9TP4d2ZaPJSCqjvHfVyzUbGKaX8bmRzcM79Jh2VXbh7DJjtnDH51zkyfbT1nVW6vheg",
  "key5": "3ykkguxWZc8ZKg2Krwo32zv1UDe3utrf7p3zXypnneSMS8LDk2uDhMxHHwbaEdbEV4ykoxKT1Kvyfjq91g4KPG3",
  "key6": "5X8bg9qmwZuyhtoMNeg5xMFa6q7XMKp6m5FU6TrYxwkSvstJsrpWAgGxK11FKesa6xNpMhcjDQHZPnAXAZzXuW1M",
  "key7": "5Aiysuc3D6bfVEkwnk3A1SsyKAKRGFbRBMws7aTvfSo6YqWsAuXuDposDxq3n76AAE2jWGXF15SwRbsScwKnyt6L",
  "key8": "Z8njgDY6EYxSMrxgjs6UWHQBTF1u4vFQN9sRpqKKux67Jm83Sdd4px4GwZEWcRWF5BtrsE1Pu8CjXDMAmkjVCuz",
  "key9": "iMCFaPRXGtAGnEcxECc4MXeznEZAc2p69YCzAi4YWJQot3jBhE1Nj2YdK7HoFNVGTPgEdKqBpffm9anExdnXyyG",
  "key10": "2fxaQ9AtXDEQoqN7aRoS8xJukgJ15p5ccEopQ3Jy5toFvBADxw6WwY5GE2oJE5hmdrw1bVc6uBzsGycuMkiwHptQ",
  "key11": "61u2yFvzv3vCgkh43eu1R4UxkzGrzHuNXYWU9YoHit6J58sxUVeBeqcTDgGTbc7ZVcqpNfwHWynpJ3sZPqM1Z2nT",
  "key12": "5KRSbPMLSN5zkuDZdNtDTaLyxEJLMZ9DCsTqEUHByRgjpnounRA33PyHmBYiUF2UncjALFdhjQz8LD1FJ6D4cP9s",
  "key13": "2dSZb7ZxTGsXdEJRX6UsnL3SAtpLDeyn4AzoNvCf5rSzaGBUmN3YCyQPJAT2NFN8Fx7jyusVF2mpd5S279iZxBh6",
  "key14": "KbsXmUmEYiH4jzHQVZzdGkcVASiRaiY4oyC78FuJ5tPvtLwoLm1wGp27NvD6zxfTySNNKwhAm6hbqETimAzWQKP",
  "key15": "4qHuzPCcZ3fcqeWBMpnwDohAUrjxM9qFrSZM3DK1JhCM1LTMuuSX19RyWTRBfT98k84riwdJiXtuyi9ghSZrD266",
  "key16": "wmy4rS1fxB2PeLf1grxypocC6ocxkZnmnmvHXyByGtFtvZLAjEJGeCL1F1E4gwPwvWGCBBvp2KcnqwpDcNETvQx",
  "key17": "3WbXCGkZjHeJRr3LR4HTjvnV7aZXyLR176YhYrQpsef97guAdTYU1LNtzkpzQuzCnrAMV3BEJU1gnkDjkd2LXSzn",
  "key18": "4GaEkVHkXmFQCbXS3butwSn71HAnmFRdZSgVSSUPUiP2uvGhjsdXy2iDPhc3fmp3hWJtM3N6FZJVPt2XMeQtS24r",
  "key19": "3hN3yuaLTNRTM7meEJTYYzb5Hv1Z7SeHHE5WUQB2smGyN2f6oEYka1UrNZQ6D6pAjb5CJ3BfzfbLFvHXqRmtgTUS",
  "key20": "3V57h1Kx5pkqm27gkTdLsDVtBheF38kpeaB4nW72VFNMmAHYzmvBNZ1YeotJVzy5SijQMycnP21R6CRQAYPTH4zW",
  "key21": "63vEUHVWzFBeXCcd8PjCkvPAUMNZjohLadwy8ukFZ1qca3dtq8hBD7CmtJq53Wu5yB9hi1d23y8JAA9qdHfWrcAu",
  "key22": "4kW655o719TTYaArh4okq3VCVF36trzrzeSKYiPqyyNAHx9ztM9DktF5UkLNv1RkjwP3tMP7PukawDMhNngSGbLe",
  "key23": "3F9r7XDE7HuoZdHTM4SNAHqFNPEjDPenXbUGpB3G8uPT3qyisjrVvp2x3EpoXiAeKMGRxxjwRaK6qZHMQrfHna8Y",
  "key24": "5ajLecKjAEpySiruArMJvkGdSPHJvjRkQhbFATA7X7T8W9vS6idVtZWmPriY9GEc3aggCSL7KKvh1f3pdnHvwpEM",
  "key25": "3WTgLuHwQDtgVQgERBvjtrZZMFqtL9uAZ5t3v5UqS9JEsjkthBW9nfcAmHAUFXg5Ku8pM3qgZL1xHNsnRrSHn4FE"
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
