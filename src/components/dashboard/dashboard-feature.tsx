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
    "2WARPg1X1eEbhwiP4LmV6QPpp4N4BC9QDCmGH1Y8Di61rZ2MHhTVgPTjNvnefGeDPxhF9M3pceX5c5dR3txmh8EU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DgHyrUkRUFStQSPHr4Jccz2VpTH3XSCPj5Mzi48ZGJqCaysV2uYU1LMnyGHHMpYQu63kiB9EDNcbPHvnZHAL8bi",
  "key1": "4zi8bkTT83zPri3B5KhfuZiTSwvDt8e3XmVdpcAMgX5pZoV2tAwq1Je8F9d7oiZ88weW3ZYr42dTfZE13qUEXrVj",
  "key2": "iRG5fdgo7ux8jXigwhGwxbepLn8uzxvNcw4r2qX7dSEBn5ELtBEyShghLN81P7RwD1LHzpGM4tM521EWtDtTshv",
  "key3": "4vaDKWQ3JHr7eRp62wAAd4DYx6tFMJtiHr4RD65kgw4ibyRMYm9SPfwxdJxeEHgk6nc83TS4Fd3gyztS942xW6ga",
  "key4": "5FSZyy4qVE7HEiBPLvKoKvWaUT57vnbP1V8mytEyZUj7sxhgzLrznKaC4vXYjq6PYgwBroxg8Vo3BocboZjvL68F",
  "key5": "Png1PdTCEnCF2yqsjBMw9g9FFs4yRydw7YVMguK4g25etR6VGpZG4YWF29xGx692SdJ6HLbQopvZJVSwkZ7qRwZ",
  "key6": "4Wm548bbpNkZhNVqcKXsEdKKPNYtaCKj58fm1pakoUkCVvkTGHxDPd8nYfXYv1CLzyyvr4LL1qg4Y9cRPpvhtZ5D",
  "key7": "4BA8bypTbachcySRNMJ4nsfY9hb6C5fw8XzJcbRsrC3E33KQ4FTWtCZa6Txn29ATG6nhVzB3XpyU3VDC9pWvXMTV",
  "key8": "5y7C7PeeE1e5awbLs7j4nsJoh2f7kE26mWXLwTURy2QyB584f8EGkdRemVqRv5YtP4SikhwzL8FrRguDETNbevxc",
  "key9": "2P3LkD1Z8RDZJrUq4KHbipoNci5UzubbaCY2GbfoiakBR7Sbutdf5z44eWtVptWGzDb3dLaSy3rgnbHKXUtwNoc8",
  "key10": "23qEtKQvVWLf3GZGmqUQ4Guurfp6yZ3w2f4kdLLb76uNSSWxmxvRGmvCp672DM2EcuzhUeaspyN768ra9JQ6TiaQ",
  "key11": "LhqxnSBPK5gXG4sGHfeYwwMnLq7nVExR7zquoWTKeVuzyG793x3uorbCqmonbUnXTnHAqmYkZuKXFK6EuWZNFLj",
  "key12": "3CCW34zyBHSdmreZitsxtRy5D6QH17BpNYx6Bud5U3qsCArpB5UeX8e9VYaCQy7iosg8wMHHkkQ3gtGjWDRx7CiR",
  "key13": "4Zgr9ZSqRy7cS3m3zSHfnEXEF1bqPaVmmhoQiY78iQHSfJaNVSWJZCy98bXW8XUZCFmmQFUxRVTCzVdN4r1g1bZR",
  "key14": "36S8mSR5kQbVpoyLovvVGQJdGQZAJyyjKiTkT3RA8rbxwJZo5uvAtDaR3JvS1Qa6fEo6LNaucTPCaUMCB5ettNQ3",
  "key15": "XZroXWbzCCKSiaEfVfF9XirmCwKKpi37YN6wA8hwyuh7nTEQ71NfpXdodKkKUGcpjsyZyYHDpqdQgt6ESxyyYXd",
  "key16": "2oNiiViSn9kYdsr6cmsxAAbZK2F6xrXYEJKyXaPbZyvdHiwes49YBEPYyJXACTrA9tQ5AaJEcTxGrZSn9ZXBVk8i",
  "key17": "36oi2UsQ3ktkkhg36bcebw1ZkVTXJB3R7Wb6dc27B1qiaL1PoUcNz3VcSev49ruaW7cVQP2V3VjrGBmxW5gDA3NK",
  "key18": "44VWZ9kP4MkoqvTkAVvGp5YEpNwiy2fCNC25fWa3tUT1miUvS2heME4XR41wWTUJqzdf3BmGkVJnkR6C1m3yhf2k",
  "key19": "2qamD7bzSdT11GUEBM9NGFqsMX6wzXrAfN4KK3mELALUy646UGQW4Arcy9VMDmcAZHes1uUbyX3Dzy82SE4dKiXX",
  "key20": "5nMCAJQ69imdua1hCWL6ie8ry54M41aF5Le5UJDrJQaL2kfkX7ajaKCS6RHgrWWyWdzzBnXt4ociehiDnc3CAUnA",
  "key21": "4EMWc14YXo13EjX3Rphv5C3Gk1roSwQba79orVrSLVhabNVCaAkN9xjDJJgqqa57CZQTDMiB5eYDquP1cGvD9raT",
  "key22": "CVX6idaXt4xpTCnTagjpsuksx5bS5TWmMoRmTXv6SWekbSnTGkgB8vfGAVysa9RXrGh62jDLKWSULcGUbVAW9h6",
  "key23": "4NJ4gMJeR5QuoENiEyzdqo84FucKsP7Gqm9cxf3UDnnnNuXTc7uQ2osTFmPy73mu2ceLc8dDx8SUs7m5YypxA187",
  "key24": "w5JsAHZCuwrdaPEnMumi5CCH1q5dEbX1Usf4x4ybrjmP1yMnLZ1ovznq32W2T44LmXA1712AoVoh6TL6wBZmqTT",
  "key25": "3XMgs3b6kSRri84PVQBqbAtHGdtRPzDUE2By2CkD8p9DeYZjQTP72hEkVqjPP3vJZe7uGLC8Cyp38mJGmB5LP3Yp",
  "key26": "wRMTBLP5yMyfZfVszV5eVDSm5WrbpqaXMk1BhuZVJ29YC39xXR32vDwmFHh9sTFti6xpBMiPrf86tWNA9TM9CTd",
  "key27": "4aC1Ztww7QMrf3JP5HP4NoDLk3h75kuwYCBbHjiBS7h2C5NqesX2mUWVeY1hs88QgJKStipZKBRidqPAtafDq8M5",
  "key28": "5U8XVez62M85XjXMHcs2DsbnA3c3xi4kEbDEDd1Rnt1Cg4XFuXMzArkThJKcBPCu2WdYBfXk2NP8UEUAZ4GV6tdW"
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
