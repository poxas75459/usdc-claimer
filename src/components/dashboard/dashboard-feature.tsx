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
    "5QFpz1keo2YHkPScrMHCRkgeEHCyup6Y26BLh12phxvRFKAok6W5hHK4Gz7K1SNpRL1YZfHtL34LEgWakANF6Pwp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FY99nfkhHkrPribBBr16B4ivd6ZNBownxz3r4oRcF4u5cNgShwiZxJW39gHsBpYm7EYtm6oEnwTFuFc3NHT1Trj",
  "key1": "2NNxE1XPY1uieKWiACoBHg1k9gd3TPnbigbAhWjDRXnN8fc5vYZTUU4S21E54yUeHoxi4qgjNiUXHR4Xo5PqcwVo",
  "key2": "2ShfVt9KPfcBCPxRr1F8XDaQMoEBzDmL74thY4RHYawGKRSnq53YGbiwDHFVEH4hm23vWXX37H43yYXkCqL6eFkq",
  "key3": "5mkgT6N2Nirnsvrx5T1Bv2RPfNUTeyEt3pfb3qWzcuiHr5E77XHWLXZPQhRXqDYbv58U4vDnCRpC3q2gugxcFkTX",
  "key4": "mUCfU77qMEs1M2tj7uYNm6s5MMf36p6YzbYxr9eAoYAXceTnWChf5GWC7tSqKs4aLjoDpu2QMaRgq2dPD7AJaKz",
  "key5": "wHLLRDUnAWm5EJNWTX6R2tQsmUvMZqDfpTBaidW39koxzDj1QDWEWh8VYgm3FvSygsqcEVePVJ8CKmRs7YyZCxW",
  "key6": "591QEb8kbYh3x3J5jKMWZnkWyuBNUXqE37NCYk52nQB9dD6TjTa99bTngEYvJ4e17BYgWxKjeZg2iaPpkpBC27Y3",
  "key7": "5ykso4FyrYsmsj9pgADqEf2ACintXK6mRqQoetkXjowePTR9jPQM7YCiXwvtCwXo3waByeR3nrHBaC4W5o6dPs5w",
  "key8": "3uZWSr9ihZ8QbBPahJwGvRjGnJ5dtUsqibFgDfWU1j4m4eRBj25v7Wu5iDmVwb91GGAFviM7k3LrfRVAqHYnS1cf",
  "key9": "54rywUyQkY2Mj8Y4S8ZsxftbxtQBQRpceYbHx8nYPnrLrNHFSRqvw92BwjpQBZsYVEFg5nCawqvSGUZHLJkY6Wgn",
  "key10": "5q8E6JyfSFZLHPzLGnJ4XhQnJSRjse33Y9M2hxsjgfdDi6Wxr5kquVoxuiCsYk6VVA1uPzZCvPZoMcTU2BV79DWG",
  "key11": "2FfZr98hmNVWY2sU29S138XmqZKE4TGHDN7xhiqh6okBf5Bsoqs1kjXgpDFe354bMb2pmTt9wordBQqEciTYufEd",
  "key12": "4XD8JpGxVAqzPTWfk336RxfyBE7hYUxQw8mjDJaGSewa9sWo2Bo1YN2b9pcefKSPD6rSq4VXZC53ehgXJzo2QNkD",
  "key13": "2en5RHyRAySNQUWxvytYcka8cyasiRNrgfKitRwVddJGFe8XPbXBgb1Y7VoureVNJ1p319Z4PDWd5WyZLpFaHHHB",
  "key14": "331UW3yQKiP6nLNNFbowpqEzThDAUkQipwHM4wCctiFRxnQy9K5CbxaZJiKzY8xyRYy8gbPrDpS5HnB3u9WNXC9e",
  "key15": "4PpW7AWB37NfdmK983fMfVTifnVBpxGUacpVumfZjD4XjG7cNVmzqHt9W7WJekMxnMPttLatFQYr3tkoLTiUiE5",
  "key16": "4KY78nA6EyNJ73EgZ8LVy3JMSAXHNWmgqWo7uKUcBw8dmCV5G6GGFuP5b6Mt5k8VLabpKjWiAUMsgBNvwSMRHain",
  "key17": "2uD9MAMdptTiZvJ9giGf7Lta5ZswZZ3HPLr88f7f5upVopFYucsp8FPghksemSFNRcVDY38a1r414cQiSu6bdsfs",
  "key18": "8iAxyKrwXC86fpkBtvKkn4pc4Y8GvcR8cxC2BDZDryKJ9f2MbP28oei5BSxB2kaWnTSKF2cXeeijrYBypiD9CqD",
  "key19": "4vWAB4L38xxp9PyG27TV2QraxZmz5vWseKcSuR94GewtCW53oRxtha6Q3VXcc2rwV6KfyDLrA4CRcaBju2PCoJ7W",
  "key20": "2XNRAhfYDGRdiZXZVavH1gDFv5KmNP9g8zaEW3PV24RBMdCokRxawGrF7MDDPzPBL4sTzGN23447jhCa17APt3H5",
  "key21": "79gjvqqmic4BcqKLDFVLTAp7Cc1moKdbHaJdHkD3p9ScKeSDJzUeNRm9n18aqMWzyq3J4hvThvJT9kzxsj7cTMv",
  "key22": "3hHRa3cnmbYL18TMFVJd36jLojXySk7N76VXTRH33jtb1Qn2a4pUCZGctEdkjHGvDfY2bQdk31ZCuudJuTRfCVbg",
  "key23": "4BicsaVDayBtfNWmXGcSFBEyedSysTF4vx555X1KxgwKyC7631vU5pX3wMypDTgwKcjZEUA1GmkbWHQ98dvDiAKX",
  "key24": "y7NYnqex4XTRMhyyawVowsJkNdbCAef7QxBxCXrbsyGpHpJLPA52Fp3HjveyTzFMuVMRgPuijqCjJAbbaxF8uZ5",
  "key25": "3X6Qtr8qKgsLG63cJJAmFXNyyLk57L5w3fqUbqi4dKuSWyyMywQXQAeNBb6HMeHkGCNKNf71hAFjkGLY574muuxc",
  "key26": "2dTUfuTDCRPwEV7BJmMmzeQmHYY13z9Pc8BzfDFbnmmcrowJJ4F8S2uUXrFKUd85WVzc9KoqSEfq2oVMX2nDapsG",
  "key27": "3ZfV2pNUbvuW9dnE84rZ1Dvu2YMNGsDGp2pPei6UMhyGE6pdvd3CbgGiSStY2SpDTWZMvK7KBe8Ga5ApxshKyaZq"
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
