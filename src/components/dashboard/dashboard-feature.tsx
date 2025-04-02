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
    "jcigkfbF9kEieKgMbtCknuEG5o8cTRLpDheg4L3wZtSrgavJ9dmbrZcXNbjXTYEwLhEpqiEVbRH16Rd3K7U2MDt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RZuNjiiUVoUBpYffSVEMavVVLXtdC12ua2jesFPJZnc5oEpZqa2vnEDE543VAAcWF2ShJ1FpYoZfMgzbRUAZS9g",
  "key1": "5vKdZYzoYX4guL3LBbJfY9Wt5dQvbciWTdGhxK2JwBPGTDyzgWUCwY7RWgYDWDbzPWHgozWzbxpt7f2XpekMMV2k",
  "key2": "2kEMzwoJn9mfynFmUH8RX94gm4axsrV6VtDuFZdTyFK12FSUR44iV9inBMsvhbTgKpoDez2HjpJfieZnbkARVmNU",
  "key3": "4ZQoTmpmbpazFFvsTLzJmSzrTPdYfK57m8gCzZypAnPoFLgeUDpLNvh4aFWe88CPd1XEwnqnnFHFwLbveUfnmAaD",
  "key4": "y74wYKRA2ctfTUrubJU1kX7t4atak8zwGrydC31vDsAahxtZT7JAibmJj8EfDwWAEPHEtJgX5gkDLJDJA7DbbkQ",
  "key5": "fgD4mWxyYBrZV9NZrMjYsXkNRvQp5saN7bqkh7Hk6T5G4MPqKuoLxmqZgbBm7tQGmUGxtjNRAUo83ec26tEbjBv",
  "key6": "2XtFh7PhrKMkDrWSbwhjrB64utAsjcQqWMQaWfEMNTrs2TvpQPiNUqPwZL4xDyLBTYFLKv4u7Jsd9GQHeyza9WZq",
  "key7": "WEyFrLm58ZVASPX3riQsGsRjEsYztjqBojuoeRw4uMJcFpxAD43degCnkHQDQJAabVDf8ba9acdq7bkfHBUF86G",
  "key8": "3reuu5PDG56vydrSU9r1f5Rxh7Dhzai5kSj3VmXPioghetUXhce8ihPjSMJwxaiu31ESQ8f2Pj6PiuQB25it1B7a",
  "key9": "24DUgYe6DUwBvSMRZAibskfemyPzqTwyY8Doku7vTgNV8NpbdGBRcxQvD3a39Ef4ZTZzCU9MNM3TWR3nVQoQpojz",
  "key10": "a3qMrEarSU3xCZdd5m95qNFmMmd7PdVtWeGK7xLpTBr38VaQhyfAiqmuZaNGfSDq84tQHJBxvKmGuy3LYUBp6qz",
  "key11": "3HAmS9amYSQrx9bqmmNixYJYXVaWhWqJNR1pw5nKoUEoMvHevHSgekVttX5yh4h1qt8QR3LZVZ2BPcVre3CJc8kQ",
  "key12": "2fYQU4Z7x8TMysBDHtyf3x49cP9e2yWdoaf2ZuVckXNmaMpD44b7WtuyEyPeYcdp5R97tsRsavRpb7Zms6PdmTRp",
  "key13": "4qSh76H8JcWF5Wnmjmesy52xCtiRqRNfEoHKYb7nbEbhu5W4QepCEn8PP2Zex1bJgspRsycU88ueETzLLija2ZCY",
  "key14": "5DQziwmJ2vDBxTSjpQCWDgjH1ugVmhjSyHrdK9KEQip6s2R5dXERC8aDLiZCw8iXNJ94Zd3Sjg1vpWoUbt7nuBGQ",
  "key15": "2asEJgMMUuBK3UgAVSsDJDxNj49htxbWmdV2mAzKWsiQUeB5rL9wGjAkZdhnqs2boZMNCRTQG4Zs7Kn1bFQeVRgJ",
  "key16": "47qVFxHbk8KczxejTSSAEZDMAR4gXxFoAYWbJUw4KfYy6ZqJDs1vvaDtcgkf6W8qXqJav9PkWgnLU2czpnKMJYAz",
  "key17": "Mm4F5e19wnj6Dy3MJvqaZaLYdqicxNB1FhNs3yFXp6gtwzWDxASPZJ2ePTyQ2GbMn3wpWMa9Spjn8fK6BGzvuYQ",
  "key18": "33fT8d3n5rS6WUntYRtkFRr6j4Vczw1MszXc5LQ7Rcqusn59p7BURDmLT87VGqSUhNpXJarUaNYza7yjBGTpvgkY",
  "key19": "7YgWLT6TfYTM1PVnQA8Hkf4NkrfCBR7fpASYQQMVZiEJ9GwDw6sLKHRRY1YhRgczvqsv53rKg5gFAXjCr31yBgF",
  "key20": "3ehvQEVzCmtP8TPXdZHK3tsqREXsUqzquBDEx4TfgNEM4DoADuumd7ZXbi9PqMmUKkZzbahxc1dRCuhqdgp9ayuj",
  "key21": "4GiY664wWBevenQjE6dwyCjbC2sMFngnd6BrNniG6i2HNJq37C3q3DRTzNGHVn3NwZzy6wWApgHofUALdMoAQU4Y",
  "key22": "2U44zFf7dD2utPRRQD143qVvvSiuZFED78RJMjK8wYjhuATBARcT3PcShNucN75MbJaQKQjzmsLMa8LuSZAqJQDP",
  "key23": "5Wvp4kwDaih8q1PpFhwv7YS8dXGuTziAoFR167rbg1ddq17X49Ahyt18vMGGAjipCqgXtUM68zz77MsTKVVUDW2s",
  "key24": "UbnhittAS7GvxYNMzzKytDSMBZr3r5qJp86RqEE7nyLczPWtrMc9KrBT7C9LZodLEEs9w9TS22gZfg2aKT9dMZf",
  "key25": "4ssGS2aufJMpCKZbAAcVx334KzgdVueaPV4mYMgY7zCxXNJa5em73NAQGHP3RP5rbkScDK966j49rMjt2VLVdwg5",
  "key26": "64EWE6ujP9PeWZSDRapmnBNd9L7XQavL2U7M7qcoC4nESEdztNzUWYHjaHNWJZe6kAptgpdpDQjUfp8Q749dsug2"
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
