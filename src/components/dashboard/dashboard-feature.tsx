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
    "dKfHF5NwTZ1hs8aYCsBmsMWJTgdvXNGpuvvsNN2EuEWjFrSyzHDUKjneRPyDXi8dKnaSYWh4tse1B32N1WUAYXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WTamTTeNqvCvfArYx8DVkD2TESEhHXCrXJoGM755SyK4zrvAJkGfS6x39UjiYk8M8U6iwq3ZEjps6nbAKjizqXN",
  "key1": "3NdoB2FbfpTxzJjiJrbYeKotgRa3MRaDv19PV4Dy3A4fqRuobp1ff6JiuGsc2QdUAa4rCne8tdQmoWxobazZGKBy",
  "key2": "w5EjmKZ6aQwwibcUi3dMccMxa65BsMDexuoi5J1m5ek6DhYYN81wsPvhWiFY2FsqDbtXYrHASAQmWGtu6mWGNdV",
  "key3": "2HvHQhgZ9rpXjAMc6WhjUDiG6bu5FcASxyH7dho1kCW2jtVxRjGy4jSUtkDCD3Q6wfzdjMPQRNgwSWi87H76nCbm",
  "key4": "5QxX27jMW77jZuvGNuVaQEFV2U8Yvk8RyjU8jL1gfLZmRaFfSZUuurGjrjuH4HyQpjAtmH8EzeVXQvgZLrjvpBV9",
  "key5": "juU97mfHrCtwPJC443mMFKV9u5Hkrxa7HijeAo43qnSWJBLdiWUeFbjtUAQGUzHxJD5QuSDu3jaGp1LEzKw8SZK",
  "key6": "2oC1WwJqQ3JssxmZAC2trm2vm64KQJX4WgMYBLgikDGYiUkVmQFGAGWVjawmYvxYtwBSC5BpaxarreqbAQRkr3RZ",
  "key7": "45CpMDuYJmDWS14Vrp3nfXXmnrReKCWYaGBi8duULT8QL6g9NdCw98JHfQrRxMXvRoAJz6xQ8tD8XRukC5E3yjEC",
  "key8": "4VRx6ooqVRcKBwbG2J43SB4SoWeMs5C5ik9s9yZi294hhQw7BMxKqiMPDutdnYsG9RBMxotKwQyJsTTcE8Mea5es",
  "key9": "o9PSQBrhXRF9xtsDBna8kDvmJMnN1cWebf3hjr5YsQpEuDhwuxegtTBtQQXNMTpi1d8FA8paVMJKrVoDfDx69t7",
  "key10": "3MSvkGfPkMzgagr3LdLQoWMvu5t8RRNYWk9KNQ6FrULGpnxaVUH4jAKVYphzf3mXi3mrAxPkQXtJ4PGMZSF2u1vy",
  "key11": "2wDopAFdL6yrm1GMDtCu6mE5YYs95hERu11qDAQGqhnW9bHYEJaC7epzhMGnw4eNzhyBpfAdWGpuAEH3jQpCqn5h",
  "key12": "59o6gCP7CWSRQinBrEuAyNDMjQyjcvN8ZgdJGUwoNMrPN7ULqSGDtuAMdQ72B2ThNWPyvX87E714r5HTWhy7rXA5",
  "key13": "47WUZCcseFkESmKELAJ3DzuWjXro27nbtF4GpzRPXGekCZcR7BQC4NYAenatu28hs62szQzG78E6vGqoJrxJaLmm",
  "key14": "2efMee5JoNNBXXAcxvxwKFUtH9rvSqJVqwbDEP5x6pyeTFBotCSvgvUJ2En6Md7Emn5Xu3Q2eoC7kwHh3mp2h48Y",
  "key15": "355DsoExFpjxE91auT6yyG9LJNvyM5FSvAfbbjTnMEYTCCWmiBiuKWQm5frFUwYP4JQcu1xp6xYWZuqLNJaVSctY",
  "key16": "2ZMajT3EoWMzhCrAwfDZcmwYo6Rv2LADPfsG2R3w5duC2wpCzNxaR6oof6gronCBfs8xDSgVKpb8CCWxHDQKLeYq",
  "key17": "21FiftGmcoydHF2ryvDG4b8eDo1Kp85vSJ24dufeCigjmCTcaHoKYC717hMeQnvQhUM71px2vXZEk8WMPEfxq2LZ",
  "key18": "4r62h3EpsgohGGeKetHpTkTUTDhGN7bCiSoHsNzDvrbrHqzKELEiviF288ek7cykGWik1w3bDET2NbETwHtvxnXR",
  "key19": "2EWPuJMtcMMCnNPdEXZ2HRqoJNSz3giHZLcEUZhGCAddbyQvyahwWfzKEH4trpZgFP5Z2n2GqdYLNgmMCqP9bawQ",
  "key20": "21DqTYjKqQpmGKLbrL8JPfm2eMNY4zC832pyT7VGud4488M7uWo49DTAU7PsW2cqdcR7r5Cx2DZwr9z5ZSYYV6dN",
  "key21": "26TmzPKnMFM9Xz6Xc7Ywu79TFvxAfmjy9dLBV3GUE9h5gcKhgxpBgYVwmzsMsZhodxTe1CC39sFB3Feyjyrxjk1L",
  "key22": "KjmBFkVEieaoyuSeJiyMcrv2gqe16uQs6CcVUCuuRGB9Htfis7yYPheHAQ8HdbfbfDXiBZVWrYii4ZygPm85Caw",
  "key23": "3DvVwRc66nzBgntgHgjiV2xz4JqRRUKDWSFsB8Ct1rCZy8LM4TcZzdfGEjL4HCZ9zhRqF2y8KDrYV8uFbDi5diR8",
  "key24": "tfQcYmPehdu3ywrTxJqUZecU7FNDmhtnSdk1WEseri1Rv9nb4zKQnrHkoufpS9pKS8N5ZiYM5xGsbhESR49QQvM"
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
