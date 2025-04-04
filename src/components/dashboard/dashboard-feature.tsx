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
    "2Vu2UbyJV6h1nJsU8rm46B2UbPN41VcFjV6aEVsCExJF8FtYJ4YSupFBn6P1WBqPwLSKj5Gj6Z9ZvNTeks9C5dqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QNcF1wwDNmnbZqfCzBFmQ1bxj1NcU23CWLkpNsgLswkpJHTBWCAhaJdC4sxzvLE6kVDBYozdx1L2s5ixB3AEp5i",
  "key1": "AyWdjYUmvYsJN1hhXeEuGwJwnRwmCRf3Bn4AAHzPNL6Q31N7pRCsRCstFBdnoiV9n4JU5HUZiPCANvpoJiGrCxA",
  "key2": "59vdKpdv3Bjw3SzM7Tr2G5FReEg8xsjDMoMhALKAguMCjPSnDjoZrCyDUX3NoFiNPg6cVKAbfqbdvFUPoGWCXRgS",
  "key3": "676Dy4iYwUSMbn7Qbhnwhiif1UhFrNoZQRZHHfFrHw3tErBkta2UjZcukT8A8f6DaPXFP497KzDWX6jStMWZH4c7",
  "key4": "3o9hVHCrdg5RcDiW3HiQ3RV3u9H7pRQnduw4xz2x8xLP7sumTbh82NHCwKmTpVgLbU5PaBMMiRAmncHLB4Kb8U3W",
  "key5": "ApZec41eQGYqRQ9MyjmxGTVsHcHXc8NzYtr5gahuLaSnH3W2tFbteByND9FZt6NEfkWikowTk2pAR1EZ3rvfcJG",
  "key6": "4ZkFQ4Gdng6ctRMbih1uZ2c9qZbmQJphbTyqxsJ3XqtnbcohkMUfJGtqSSWd9bsYbyb7UPwgsiuXH6tRvSqeoVC7",
  "key7": "4AVVbacNZ7aF97F6fZoHUc1dPT58TxtimwKMRATTHXgaW1f3pe6dHKuF725AkT4MUqNWCk7hUrp9NRD8pdB3kKLA",
  "key8": "SRemB4WEYLcQT6h3jJWheS7EyXrkU7WJGRES48nCA6gZENvuzUbdAetQ6m7TFvmU1S2Euszv1Y43MAwqbhiY5Yw",
  "key9": "5ErEMg9RAcWXZnekr9QcaZmkD7QQCgxUEBLAA5yjumb5oAiVDTQHJSDRwiPQ2uTEehHdkYgpv5NRtDmjS9ZY1bB5",
  "key10": "4tdhrhi8aTEqJoK9tM6uGfAc6Pxwf36rdUrn5C42mYW2ajVUSqp3KPBxx7t776qJkBUs1gdxzANEJnECF2a2Mkgu",
  "key11": "4hQhFUXCf9iCTKM9kNkJXivpy1BeMrbRd2DFiD2iZLxZ4nvHEA6Ao3xnPhFzgJJo8VcWLcXEdRhcZkN6FSukUMti",
  "key12": "44afPnjASgGuoHMNrsu1kryc2GaqhEw46btxXyWibxnTC9s9qUKr93tDX4RZgvvdMxaXhC2HE12d3zUwr7Kt9PW3",
  "key13": "64r2QYZw2DWTPqGxFG9MLbSaA8uaeMmrECqfWSuge4zSFaBNAVeQYncPaQCxhfsHWw3kSTXapZxkhzNccjWvR2qr",
  "key14": "4EzBFHYrL8oat75TWs6ZvtqPdw7Du3Gb3UAYvquoPyfDssdEtZH2YaUfaUcVtshmgJ7AXqTGQWoVMJpg6QsmhAFk",
  "key15": "4ygxeuq6Wo5pDwjn7MNaWdYhGYXyMxd5N6qXw1TSqZYNtiDZxavYiTJxyWsmFFVgNJL75JY21nSseToZ25ADjyVC",
  "key16": "3s15Vxi5sCcGnNmrzUrvebjZLgqNaXVV15PtBhAh3GbyLeqnSfZ8XEBoSpR9SPxscUULoHfoeP5Vnse7pZ59eZjo",
  "key17": "4zXW9WdTxqmW3Q4JyLVMUSj713aL9RMq3TxjfiEZLM9yTEYjE1FVrqBRCKAZkUpMfAVzatS5FCBHzxGmtvMU1Px1",
  "key18": "2JBzaS91h4fbUfrYu81jSq94GrcV5HSsijVEoZgjoRLDH2UgXtSwUfjyrp4Q6aoKHY2KDe1Kzcz6rwSBzYpj6nuk",
  "key19": "3tEkAzGuMQQYq3hodnuFgbVXci2tQ7qxGiAHf5va5dAChnAbiJeRaRLFaEL2cyHxXAzY6Lf5K9ArpWsJcpAPsjSJ",
  "key20": "2p6YTRNJyrVznueJ6avhj6MC5DQut7Jg2kPffA1pDRUqnTeRGCav2kVP7HeUjAPQP7xFuP9v9VFPwNPVvVVTJTy4",
  "key21": "2c3p67NB2q4rRyMTVRt2UQ58UZrvFsiU4G2UhcUmNDCzncuAxP2SwDvsMFUhDiQvXRHzmwvQnKqtXE37vHL5yEZ2",
  "key22": "ab9aN97nH6cCx2qBRLyrLkxcpcS6JovQa99b5s5KbgUezsoCDiDyxrHb9BHMxTnvKA14UM4PkSkcoFjzNZ8zkXT",
  "key23": "492CWSLS6AjC6cDNUwRcZnLAqtqpi7hNEUtLHriNDFVovZXBxniwy8JjhEqFMipiF9vxQqnpVh8DwsXUfLKZmuHo",
  "key24": "3xaCavGa3NRW1Xw48brve8bTZmpz7NPYRkLzN7yBxY2gmiqBp2kvFGRXeWwhNqprzMoX1Fujxq23DqGfFhV9JxCB",
  "key25": "557HUc6bdh2hgbW3Jmvu76iqZV5nbcQ1P4RrXAWACwbDVcAbFh1ubfcAb9XoeC9XEwxyydwFWE4yAZeozHj4tz31",
  "key26": "53FUiQm3piNfrf2KD4ZiyEVjqw98Gm4ctMXDA3F8sdeaQb2vgQxVkmMYPmJGi6N4vmdsKg6SP5ecKRcnGtco9tLw"
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
