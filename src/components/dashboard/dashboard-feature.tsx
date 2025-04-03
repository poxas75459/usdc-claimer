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
    "3opj1g9PsLvtn4ZK6ckXMkMLRK9yMzaAe7wiRrgHpTi5nt83mpMyvEtDnMyQniFDrieftxo6azTfq1RXFRYryE5z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mmx4BVpQFarGsebCNGdhm19aYmPL2MbTwCC62P2jvKN2i7BX99XB32ViehUMfGNeqZkPi6dLzC9CoacMGiXSW3t",
  "key1": "3zuZCoB1C84FKLGkukE8kAxEBs8qX1d9hNoUNcccTVxLPraJ8NgAJf38ZZ2Fv4it4V2AHoeE9BPuqw12rubroG6Y",
  "key2": "2SAt5BqaaYetzLxwEk4rTfodjaRbTXM2GazkfrC92KrUgsprxQfQoMGGf4EeUcMgHuDoZ2nzdpyxN3ToFMgs2SeN",
  "key3": "iJr5uKe6xgAGANnFpxSz7ztwWop6RY6QgaXGeMpJ2Ftj7H4jGgUWWp61zgGZMEAG9dvCKtBA26C1CR99NcvrKe5",
  "key4": "4zZhMuWXgCx88J4oSVYePcy5BkyTeSCVDSSkZb17EPPZFBKbniKfiRuTGG3KBKzdaVyUtcQQaRoud4Vq3sC96a1r",
  "key5": "FvXx7Qk9qQZdTveKkKxqceSt9WPoNBvK22qyH4zXiETS6thJ1sJG9z9qEy7dE6xbd1CPvC4ZhVcQ8Kriv183Y7S",
  "key6": "4wxrYkCVNf3Lfk4oJ5Yw3RDSABXqY2uX9hjaoUA1SKzBNHTDc1pGtrGEwSMQXThvzdNmhVkxVB7ipNgjnAwVwyRR",
  "key7": "2ikdZfrr2burE7SU18efoYDeccnQTB8qxf8PyW9cH84GTqf2Dayx19XxSAVdCVwTmsE6gszb6vhu8U7bkFGxSvGS",
  "key8": "Hnh6NUmHra1EWF8QH5Y9vZ1pkT7Eiyxz1AoYdP4jhW23CzEVGBKVHFhncQQtw9tnLN5HsqgPEM4MAZ9RVxuH9mM",
  "key9": "31qZiUGkAfa8nym9gtD5vP2QN6VEWXDtknM71vCGr6kRLtJ83HAVHydMMrv9CGcHEHowyfBEdAF9jiPZG2qVYhYU",
  "key10": "29GHSLTww4yHXiaEoRyHnKS5wxsci6yncEtfM1d5dqpo1kcogg77SGhMBQK2pzLPLWZdat7GKXwbrin8ETzmSKmk",
  "key11": "3pk2MmfnZF6xs92AnSJasfMMN72CKEfEpRud3rq1zFbqRUi1yR4A4W6FBL1gWFngJwyK43MHtto81PxhZuZdbR5w",
  "key12": "SNpmwFBCz5MRZ5ki3CUXRzuR8hnWYK8jbMtJmgCU6Z9buj6HoeRJcR1WdUM4mNMqMGX42k5eeufUmNPLSezQSFB",
  "key13": "4VbFyAuFeeZLntUWqdT5osM4muquWDWBeGpRZpY7bhsejeBGHTgMbXh5GocJpcoSU8eRNoQygmGJi99PZ7i4NRpM",
  "key14": "bv9giTDLSyDCbxfFs7m2iW3rrUCdhvc2qVqQjzgFxw5eoikQm9EKuXMWoA2NkPD15TjsGhpzJ96DYoeZVuf4cHV",
  "key15": "5EirrF2WyzviTMeeM4eckfyimyHpuFbmkhF5ne9QyT7JXGHf7MLKzG9gHtxQPB81G1bE6nWFdCjERAGHDdKgoHXT",
  "key16": "4FnqK3BiaD4eqwT4m6bBBbMCGhvEYeLSL6LGwuUkbWSCRHb7FNxbAYCDhZtrh5fCMRUneMgUgcpkGYX3CWYPCUEB",
  "key17": "4BQfYGof1Ea4k1Yp1gz842LZdXSMTkW3BCE2rem7VycpWL27nZPcFbLt4rHRiSHDfxwRdmrG7YG5YxKhbcx5aoda",
  "key18": "2z5sYo6PdVmaD7SfP5muocV4PTEf6xReLzsqxvMvazFg3KLDhMvSKwAwwcPyokNCsSJqixQaRLL8hAYa3LEtqhvy",
  "key19": "CAFfLs6ZNRZN9zeh8GLkUUvGnRBoBzfYLauPmnXCgBEBfpvw55DYfTUVJhohQUK19s48zh8riTHmNbnXN7L6avq",
  "key20": "3N5DHXWtFaxGcdHzpmqD4wAE4VEuN3kxQ5hP7rSbGNKsVvtnG3ZrP9tR9nc6uVCk6Ut7JVfL1bDSBbstFkkwMoM4",
  "key21": "5MAdNkWk6M6bpXyzTVo7nR52kKb6yguRD7F37pKNzYvqvhmty4w54rLNYCw1uvbbJRsVX2nkenDLoizG49KV2v2Y",
  "key22": "2fQwEhRmdXN5FofeqK3uKY5qG9bw2ebYxM2ebixw3YuVRHLuZnFacGdEEWXQq77gfY1sAeJhoJskgPpsReBg5QZY",
  "key23": "UvwrkmiD7VsKdJ2bH6iNqrEvDosVHsXaEneyXHs6tXoUC7offAWRt1fTP3aWV1rAEjUebbZwRP8qZHXwtD5Qszy",
  "key24": "3KSHvRuFF4Xn8LbaYbi7Qs4pLoQwZR8YLRJYyoqtxvoQ1tJHWgKZM1szF5nUvvxgq7FLwaV2EJw1L7n3NAECkC5U",
  "key25": "2pihB3kw6oChyp3pf28aanyByf3dNJJYQBuQAM26811HCsGUHtbhfTPtS1ZckQEujSKXjfFTbFJeYgTwBJSQxfrA",
  "key26": "4J9VnPhWCS5DVvjkFEcr6VfcA5GopmWxW7U9xSLyZEcAkgJbz8opF7gwLgEWHo1iqxHg2YwTbawdxyLP1XG3uzrt",
  "key27": "2soCm1nj5c178FSeH3swYsCfFFSw54MHwdgWmsppTtEnJopoK7VymbEjssVEDB5shZSWYK1TbZiapncAKskzBCog",
  "key28": "47aR8VApkVavD73Lwus1QQ2staLe2z4jhJqk5AnRaGNsuDXppZfGyz88PSk7qa1kuRXq91yiFgy4pEKCqdDiNZCb",
  "key29": "3XHGGhBH8GvfAhtX6AbaiA9U2RyyBbkrU5Xvt5er1ar9457Lv1Ct4MjAaiEG4HpvY4kxzW95w6mxeqAfyPQnqrPk",
  "key30": "4Ebc1VZUBv8BryLmcxptQwGQRwfU35ZKbwvZBPUH7V4U87gWqfczKa2sPBCZ86XbzY22WvH19FZ97rFTxzLLzFt6",
  "key31": "4KDs3NC2WaNtSfDcWjzXGtKaT1dLx1EN3RKiN3kZqtL5kcykkyPVkmbSHVRzRQQTBTrWPLGH5a6hfeeE6XeHDH3Y",
  "key32": "439dwsqnr6stoXEKCvaLAJQRbWu44y9hwYVXNSVKoGnSU7utdFG4Wyb7KdfcB34YE78ysTFvV2QnMpV3MvoFR3V4",
  "key33": "3Yq9ehu9keECELPpoLZs5bqZXKkDESBjFkYMbEA3GJ9LvS8Pf759SGpEDjAEnbEyTocrHt9KEHDmxQfRHnvLr4AJ"
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
