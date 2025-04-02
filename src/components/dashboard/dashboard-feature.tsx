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
    "3YgGKY5GHinKSx8yfXgNYf93EWTCZHte7hbYq21wQsX4ecwKKWQQFX9FETiijJCaEwGWgFmVyvzWVwgnAoWKYW2N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kEMVR6n5jTk8tAaKjB9U8298TsJvsaH9Zi4RSUGXbHarpzEFBm7borAcg3Tsz5xKvRuvVi6ecAqdDNbGzXsegpQ",
  "key1": "3KBpujwHz2QrVzDrPr2ZhDyxU2gei5y18af4n1E7na2zPgdjPfw93f5uATBR8UqRbb3WkNdZtfs9zARXZV34up9v",
  "key2": "5zfovCWLZZTve2ABjEPjqFPHpnEQt7Cocmf1t7Cvhzv1xE41Bi7XFb2nv6z1MA3zNWgFzPrhjVDp2zrsyE1SEhdN",
  "key3": "4yRGL1W6aqeqyW7q83VYz6MxbuyG2k1X4G4bnjD18rLAQkPXXxt69WoEZ8r7GqWyXbpqVVQEZm7dMH4YajdZp5KT",
  "key4": "56x63zWQUNsmnSntkG3snp3T2VMSYeRWgAfuT5eEvTKu2gAYMzFbAPvqjfCa3dAcNT9R7862JwNjWPWeEJxk561T",
  "key5": "4B4D9guBfCFdTER9X5W8TfeLcwNWohonTzTirxcAeBbg9r1cRMzKTVTbLSjPdhwg6enntdJ4HRCn8ehmg1qmZwMs",
  "key6": "q2x54HwHBa3rbpVRUsPDgU4RAA9MMsXWDuv5aLxxhC1f8RUmnWp7ntP9BmU4heAbH1eQneoNVJwrnopGC6tua8g",
  "key7": "3eKuCYcuSpHZWaFZ9g86aCVTHsfkh74vPMasNfLRPUh4aNcpEbNDHZcepSo9YRjvzcorGLWAqNEt1v4HKtbxfArZ",
  "key8": "5fbMCaUWcmoBGs6tLfuBcYnGArMU5jVVD7KHmzBJLGttyXrhCfAgSMUKzjueYwvXojvGVjpmfVKmZS2qBofF2xMo",
  "key9": "5PDahaphUpsJxTDYkGNqoBaH1A2226jw7b4f456TK7ovzEzMhwVLAYydTyW5ojTtKU2hCeoYnB3TxW7Ptd1Xoqf1",
  "key10": "7GBHuNDEmgFXpZg2YzuJx2VxKbmkfi8G1pdUbNQs1dUEq4ziKKysJ4KwvYaXjhFaBstfWBMts1xnu3QKmJYvMqX",
  "key11": "MZHWHWyefsj46888iKuva6PazkrQ9Kn3hi7uU2ACu4UGYQMYHBJy56QoUHCwHB1Gw8do9cHvE3LCQ3PhB7e2Y6m",
  "key12": "4PeYYbWLEXzPkJTojz44ymPfUNwGmbspUQDse4BKb9RjtBFNNMHhPzhE7a15ErpdtQZ5BYJwB56G86hQydzifDgF",
  "key13": "iEz3kxpwJH5pFAMJ6XKZ434nhJ3ivyjA9jPMLU4Lg7aHGKjWmrAMbbjAHHq2Tu19VwBuSLbkNAQQnSWiMG1uaXJ",
  "key14": "5PmmDWgA4JacbrtYYPTYy3pTpgBxHt6aJFdvGteUkz4w7vCQyQCQsKX2ZdEAVBh8gV354zembNiC7yRbCUVhcd2U",
  "key15": "5zv5p7zrAd91xxJyCdPwe6RhViNtoQ95HUaEtdd2XRkQTb2wCt2WG1oDhtZqX7pHSvEJ1cBqwywz1KiQp36hVGCF",
  "key16": "4r1vu7bqKiqJR9GdJTWiGA3kW5pg7grRu3PUu78f4c6MAmWMXvDLV6G9KbFDBbSDDkDXRK6eBgnKQc7QgDwggAs1",
  "key17": "2j7rRqfN2SzdPNWp9t32CrHxY3P2TgbE3dLoY87MEGk9tGzrB1rAEv1nksu9E8FFR9kspFCkn5FBd53uWLSYBdq5",
  "key18": "We6uS2eVdmZWJQNUf9LrCNtw5XSqUS5rFJ77KmmW8Paw19MKkcADLKQHJM8YxRrW4tvZMPhe5AdKT5RHibdwQfV",
  "key19": "5kRZw9BWDohb8GaKTzSUzZhTnTJGFEmBukM4p8rcPKkNYmTSTkmsWtpzauaVsyApR1jv4gDZr7iwmjtzbsDbFRz2",
  "key20": "5ZFtRXxs2kM3FjE5ufiDtbnAm1EoD8SFQBAyfqXobQ98dTK6onJ4jifEVUNpyPz55RSd2v1AsE3No52LgQJRJnN2",
  "key21": "8oLSmNtmPdZePctDEPDRhokaPhyq4fyfivkCuDHwonUwh4ojtioGeZmaNtWexjSdZSkAKj8Czd7aZ9kHhNowhPW",
  "key22": "wp9yyPTLts8d1CiocEfT15gR6GZM8kWib7actxrMHL1p4nnpkAvv8GVkzRbDvAMPxJYn2nTTPDTa2avt1bBhAVx",
  "key23": "35WwRdB6uVYbeCFizpUWK8yuTahWV8sE9ArQDq3VUH2W2HpgXae28uC1zdi673p8T7Rt7yMiSr1nLkPVH1m4U8VZ",
  "key24": "5k9HVGFj6wx3P74dLL8BMQp5BU61FKAGZcEvWwpy2VesuWeGJUZ2uhQs84wg6NRoi1Xom3avXGDDtj8tBSNxyEYf",
  "key25": "4L7wmcEJfruPCcdqnGhnak997a6H6pwntNCYjh8UJWNnHUM8Tz2fhUyE9uBmUEMPN9jKXtQXzTYroLNEq7DdiawJ",
  "key26": "5FCVchxTTh4TJyPNstRwFy9tTtFKoju7RMGT96awz3uUW1WGWygyKpaFK65BMZakwRF5oCx3KxwY8EL2eVPa2cd1",
  "key27": "3szkc6z4Z4QrmYygDuZRpEZbLFzHSuZVDKRSCLsVqf7axzvuoKARMxbPvXSWGrZyqkwknsftrH997fuwxJ8pyBpZ"
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
