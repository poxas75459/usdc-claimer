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
    "2vyVpYDp5kE5fUSeLfLWSZbiQRQgtZEUo9XoozL3gsuaSTQujocRcabAnRmLdvtwLBkpk6e2RTGzzYZYZRaNdJNo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zjcpPecszjiiPPFMWPR6UT5kynd76gCEbQhRijWnwf7MVoPK4vJ9dTzSfveXBpqNJfEUSetnHLeBX4egz5Hueja",
  "key1": "57wAzMEpWpCudKz7RrAK3YeFNrbDvjKr3tnYcejByDn7fDXGcQFRqnuYKaQEHrE1qBhCCxcYixreGscRmP5VYhp7",
  "key2": "2b1PcJqAo82cAT8T55GBaKBA9AdNkcDiLc15KQW6VFvQb7xM2QXV4yvwxvkrjwippqLzzXvQRJkTahMvyt5R2gQ3",
  "key3": "4mgV5QPMLHZbsUuTpWoHhynB6zuqRDJHTgcVpaPSo1HMDeZtjYVFpi58ATV6uCQ5BZNWoPKyHr7ezpjX4D5CYfUA",
  "key4": "5sDpGU6yNwZTEeTGUznB28RzqV1SYdWz11gKv9AhCa81ex3X6dLxEboM4YbVM6GKFwveGYm4eJtsvZESkBsoVtyU",
  "key5": "eCGudu33S8a1zXu46NmTpcx2LnQqo3sqqfe4H4duLydrmHXmPP7ibAffHMffBrzhqT4dUaKc4jDrSDjChwE7W7A",
  "key6": "4eUyEdszf2FM3C4yW6CdHNkUVwhkWbZHrHntASJz1upS13Fkhi6P3DGGaeyBLVs2TzEAbjHC7GuZXifpx6TypnMR",
  "key7": "4sbmuhTnNRA7BLLJx2UesoFYpL4B5gTPE8kWC71aAx3KdjgTSeHFgtdoijkZbGa8YMcWDLpNunAmMmaPULNgecgv",
  "key8": "37zptvCX41pjDBkc4Aih4ArsL4BaoyMgP4cWzG5z4FWhbx2h1AcSTFiopdoCJQq9oERYiCsRHXp2DVBX8gZopALz",
  "key9": "mACsBAMF1ie1gkkQ9aoyMkuPe4TsEZ9knpuY2WKd9oPBy3mv4buWHvrRuGqqhmU5c3FooitC3EvpuuF4mD5bSmy",
  "key10": "5VB1JHXnpid64zcrLZ2Nob8XCHCkWu4karPsMMZVnMF7nsjGUqiidsJS9SkXeGYtqtRDaNF73mqsUY6Vp5awcz5X",
  "key11": "5FfqEdk4UKibYteAgZh9WiEKSomeagejkp4CBozbbn5x5Lbw4z6NDT9EWYtASopZok7f5CyFtsMmK2n1VSU8DK6x",
  "key12": "3bEW7Px4HSSoHcE7bSpkRfp8zxebV7hPzrrJfqk6tb3PJVW5YSMkcKgjRGUYzBFKnZUE7jp3u7RzfbyGDsqu3xoA",
  "key13": "5SGasGWKbYbahzu35Mrze4dqMmHwSHTEXGv4fJxoeg5abcRw99HPxwkrB5kjfUN5DwEDBZRV8psPG9rQNcESXquT",
  "key14": "5ypiuuXbNTQi4VLVrLgPiNJHAT397BXchLUDA8g75HqMvzhyPvENWhTSRi555x6EQSYDMxrtGWWzj6NHgDmnjk9C",
  "key15": "3DLirNACJ8kDjpNcgDR2TbYQvchRPSWjtaWxXrjYd2qe2sjpJzLjn9MJVr3SCwSB5fsGb1d8c7VM9pNpdEyYod9T",
  "key16": "5zPFmbUQxeVevp2dC1eHfEKbzFUvWS9tr2Kjh4fVhgGQxaqKyB7osqgFRXNgmLuyLXwmJKwQnyEu6DTsuvQ6ef6R",
  "key17": "3RgBm436iHB8mzTRoKa7jAndtGCPTHrCX1wPiZTuwHUAzC5gmGyuqjA6VBwLP9bQ3GhMP6gUnvsHZGKhavZZYkq9",
  "key18": "3mJhZUPpRxs57wz9SbSSXbF6YGSfiYMUSGTZ3rX2aef9wC1aGZzSYYbNdkRb6a7Nre5AXz8vigrKEJD8cWxWoGiz",
  "key19": "3gATxhJ9ErQJ8wzexVMAG7nNaLEKYMeg3k84yrM1ngbvJuAsyEo1CTUdxwxUq1aBDEfNgAYMxtCjkHr3nyVcPT2y",
  "key20": "54ENQ7tLxZV9xY7CSBgbkgv3kLMjUM7WDhTaHJYibKxus81ZDp8PxYyq8QAeD2KwoKTBckPzp45uco5WvRyjVQSL",
  "key21": "651ag6WSJqgMQjJEmaLyJxUPDmi1NMaPG7N2APWYtErb1WCXwU21hnePPKNooFuSjJSfKhNEhQyAfWQauGYyxR2F",
  "key22": "4pmwzmTWAiwBEtddoudZEmAmZHeuyUkCX86VdM7P58z8c59CGdZq1ohBgPhV6pjhefZ23m1yp1jA98nPpyAZReRF",
  "key23": "3FMGketJZ8yAdxiaPDwgg7RnpjHizDvsELsycDSUkgyg6noHhiqcTHp7A9Exx3NLHTEK6Doc9DWmzZ8swu9HN6Da",
  "key24": "5mzkrL8QsCJj3cMVURAQdfH5F3eLxM9DCvT8AGJyvFXcAyP1F3quzXkpMkqg8nkNB7Z5CHVkpGCCwv7XyvhhYPfA",
  "key25": "21BSgmaCyUK8uTBTAXUw8Eo2w24ZdQGoFrG72pstv22qzfDydKcJbp1RAqxsBQcUMiLgQxiEq6FifYUA7MPhJoN1",
  "key26": "4LLocRFP16ffH49ZkshBYMESA1YBkbUYm5QutpiDvWgWfLmm3SkygtFHmCeaQ5jRYVedTRUxHBpZvct3yreRtXpY",
  "key27": "2V77Czx9EkfLSV3LaeTrSf9Wk8WXLiBNzsyrzQCoDJBbjq6Trqy9T4KABzBnCCMHJZgbGkeNLtBK5FD5LkofunVi"
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
