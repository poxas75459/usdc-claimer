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
    "3fmJUojZEoGig4BbnaQma5R5eH9iugZrJpX3op8Jr5DTzBQpxspL6Reod51bMLxi4TtCYhPWmPL1vTAZFyG5kT9M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EUuBUDNJjF9V8XA2kz8ohHCFhuKHYBsuu468NMFquxTjW6BVai9MCSwx7KUxNEczBrcD9Kh1WiQ2pGEuAhN6gG2",
  "key1": "3WF5xDBrRbheduN8R69sNYZgrL5zEvuci4LE8MnF4x7PHsSfGQ56ebqLwUPnuvg7L3d781GPdpydQsRcpXn9omDS",
  "key2": "2MwycJBs2KwccqgtxhpCPTLrTVPKwwV7ojxxmDxLjcgdeZpSyk9j82qVEDPG8To8iZjZhDMYyXGbX4W2taqV8ApX",
  "key3": "4SfTzw2phX64NgripYpNTxH5PhTrSGRrEvGQPvg2qVCDHrA8WBNto1q3DNtr5v9SMRphCRocFsQFMkHro4ruDdV3",
  "key4": "5jPVSPMpkXmc4RCaTrF8J5E8kitgPJF3YkosSZ2KT8hcG6EFZot4V4sRxNL47MQXXQoDEJf9ZtKmbHD6dkwiJdic",
  "key5": "3mzUF1ZSx4NK3KGaK8G8GbXcAjzw1Ky64hmSj7QSmeo6xdPfvqqy9ba8HfEJqJ4YauSbtFciANnQXWfkrYZLBNre",
  "key6": "3muuqHwXXmVZAdWYi1bx4iN9wUadnCkW4Xp2wMxjTDMDDUBLXWYQQGejBq4TrzKXWJUo3phHos6oxVXrW5UucD7L",
  "key7": "J7pYvVNUNfJpLYqGZBSYnyrTGk9XivKgMSQXJ9GH5pkT2iUqV2A5p5p7BsFcmotRXqcLZbfiEbYKhc8PTVyvV2b",
  "key8": "Rz26Td2pjPAx8nPJzM2tWRb4BpNNY17rGSJ3RN4NxgbjDjx1hod3Kmyt3e7KBHfg9jzdL5joVEuyGfyfMQT9wyj",
  "key9": "4YrFFgmpdrWz8DbEMC5tRjUFfRi2agRcwzLNuEom4bBhZNcYABHV59kFknLQAW977cn1cr4fwTgBnEXZatGCjzue",
  "key10": "3Lo8hPktnKip7ex3QCff7iEVheBvGcNrM515SKjnXePXN5sLXiJgKcyMW1LaonFWDZPRPazFnSYvhKTdachqGakv",
  "key11": "31KQ2HBJY7fcvkUGvyRgmhmHeUEwp1QVsSZghBjRjj5DwKTKak99fWCMgAJ1QBaN76XCciSzyapteERVxTNr7k16",
  "key12": "4sKrWLFYL3Gc9anknuXXDYjJh5ongsSVULYKRLn8xiDZPsr3k4VoECyKkeavydJ1y6ZnL8jHQR6Y4kT6aDAJBW3A",
  "key13": "4gdpSNY7Jz3ZbBhQvVF5CgshNXGv75esV3JCk2zZzrgmRS5HNsfWizK8xFmbkyq19FoQhnuBM5pJap9TnZyGs9CA",
  "key14": "39u49vdc922hA7DBumqTuJmXHuHVaANCPGTYeEokazeT5pMTcypUbCMG1mzRaKExeYWR6QpRoLnpf1qTBuFbHfa5",
  "key15": "aVoiGgza61VuFVsiudZ8XgZnmpqjGTaF2hbimLcnaYuDtmvppsCps1MVc43QYLGD9rUeorw9mVfsWuTiG2Tkfn7",
  "key16": "ayN4dGXFeomnRDGQRfnG1kB2Df4BAhyJ9gJpQWuhBC2Ha1RWrpgraR14Jhp3eLDxXfra6nnQzBfR7oXKJGzc8kK",
  "key17": "2Vtc2LtjDw6yENxiGwX6Zu4PJzvFAM715N5SDQCUU2W6SM9MHDXcyqcaEgdqvmtjzwry2222yDfmQvU6vsVEkjx8",
  "key18": "nrSeEtb8GatozgeU9fXZi4ECGGnzB7wxMxEHLQm1LuGsCcK9ZSHYtGRJ5RfZCBj8GrSLFw3v3anLA5xNZr3fdEi",
  "key19": "2Kny47zgEwmjuz5bZKrVYNEiaNji4YmTHgkfQdYFHJPTXTwJ2Fhp4gTLAWeohm2tdkk7HbmDhzrqwvtmADQdrfbu",
  "key20": "3rE5RqPP9PFuRkVEBgGvDwSCYhKivUNsPCY1mW3LLgSMSHqadaq1L5Z94V7xVM2KYL12p754Fwb654nZmUzYZmf1",
  "key21": "3EePUfuox6FYiM3r6BksSCEo1F4wVNT9m3AFkevkEyvZFVqRYiYG2hgENiKSEzT3FebSBk19YepwjuGkLukbLBw7",
  "key22": "3pnw2N8ckV4xFBgvn8Xd1eCzSqFJbze78gynNFrNBYxzEmVxDYS42bHkyPdKinfouQSP4XbfGHw1R8a6gWRKe6Rx",
  "key23": "4Fj91qEEyTJzFgrB3Pzc8uA9PgvcMRK1M4H1aNfN7thkcS4fAmmJ8HngNakcxvUZ7GLEZaDoUi5REsk6VVtfWhF4",
  "key24": "2bwSRwKacgwLpTywbu6E9jRfKquXY2bqRPVY8aTYHsvazaXVf8xXAKEaWhzhTaw4vBpFSetWCK8afxNvyt494cqg",
  "key25": "5E4S4puJqVKtAXtgwqVu23CSG4xn56erw3EGFiuXaWhGLuDVCcujnacM6TjaGhH6sFdDnUpkDjNPSNU2KpSQhWEy"
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
