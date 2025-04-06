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
    "2bUUmCTKmjfsBTYdoNNZxjhYTsqFPEvMQpHUMiNmmC1tnhwsRUuzH7ztnw956pTr7jFwcaMMEECKsJqsD62tWVKK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jhV1TAsHF5Hi5wMruycueQ4VVYNM928o8PxPx4mcQF1VJUwWtixvKJmsXBezivS122CjsASbyURkNDrn97Y31g1",
  "key1": "4GNkMXtr26srBrcgEsm5FRxoHPYyX82y5hmVfUtdaPDfx2MaNALGmoNTcVV9uXpcpFavkGAQHYQ1GfH4ak16CMeC",
  "key2": "27SRsESDagzu6n9HxCRqdg3SYonVuCfnVPihxRiPq9W5zXUCRhYHaGk2yXVXtjKcggD6J8PKyCdQ3djrtJrPHrx5",
  "key3": "58HuF22Q8mXtyULrQpu4b1wv7BubYd3qxm5AQnquFBwJoL92hZYXFKSbgS19kGnUtpdN78wiGVA5STFwcDLbKELs",
  "key4": "51ig2UoENn8bGATWZmdrxbMiRdG3armteYfiraH55f2pW4FEFpRUjByH3JtjXu2YCX5r4QJmtNr9MJMQUaFaS1Ux",
  "key5": "E1GbTeH1GcWSHhtCufzN9CSAGkLgkYkJM1vqswi6mrdCzDriKsnwai2YFCkbMaa51WjFE8nWgJnxxh4wwKsq1cu",
  "key6": "dMH2e4ZLsLHggUJV4zgkmPAjXPrTwm12UW9wdJZ2ftxguymgBkEpgZSUA9bd3PrQDkUsL6Wj1RZqPDAjJRPDfzc",
  "key7": "4E19SgzYUTYL6U1xRbXqQsgwCYComdzXYAZbPeRaHDv4ztGAgKZPcs14yLwfB5HPu4ybxYx5jnWDfBQzj3gFbGwY",
  "key8": "5wNqpUsWibG9ZWn7tG4C2i5zKNgYrhSYy53H7AM4j7VEYiMqc3GTLbrtpdHhamcbC7T81ghu5gk1fQQmHPTandq9",
  "key9": "25eVg9SrEYWYdRuE5WhM2AEd1VFNssXzjnvNpxvYUxq5nt8VpuPY2j6MNbJmFSFd43JSVdXhgxpQSwKUu8hx5WNP",
  "key10": "4uYoes9tQDf6bFS9NMwPmEYVnCMDajfnZomuCpw4Pkx13hDmcHFQUDi5VNzVNBU6YCEgCxqs8cwD1JgM9k7fm6KZ",
  "key11": "5uEKSEYrVVGbbPGj3F94rQzrceDkqQg8oiryPJVoU3ZT9wWjGumddnQ6oBocFK2aRP9dN15PrVrLUrNvBocoYgrM",
  "key12": "2hULQgVog3rwedu5WtXqZySMnzAQwqV9qEipqwH8ZiF4rdEVFHLdC4Q6g4DJGz2vmwcVV9aoKNTFrAvGjzogzLpf",
  "key13": "5hJ6JJuvsUfz49n55rRAap92L3AQy41KEot1twseWMPvfquvV454whvqEdesuSDnRpfXFsHsksRjTn4WDvA3nefF",
  "key14": "47PJTJmKFMF3c8Ujx9U5AeSWSFscDfx1taTaeg4hQNL7vaBSCZKpXX3g2zTZiuNFdFtFVcoFAq6YSPwHdffvbSNY",
  "key15": "46SjkJAf2s4u5QyS7x6TTUJYgioDobceU3P2u72fwJNroA16epkAU65M8dxemAfT5yyJHGxoJ63qHUTSXdbdEEVU",
  "key16": "3pJsuszvkV9hNX66ouw8KmVmRHfH6hruMuygrpnkaMAs84QDd4p6GgdxREwkT2szUF7Pgdf4FRSnKyALxguUG8ig",
  "key17": "3Pzd6amxai1BAx9ftbePiRoRo2WpMAw1V6R3b5MmdZSD8oysGJkJyt27gxQBijnaHVbsAJ2JSVb74auCTjhd4pyz",
  "key18": "2CmReWnb7wfd6HHYyeRay4DMz3dRYYPv6RC9BrpkSYN6NidaadeqfcFJeDFqj87eXbesWEENSaD8mkWnNG8dm3RR",
  "key19": "2DqhHJs6Y8tVsQ2NWTxUEks2iDxrGzKZ9R6ctSKdSH48a3jtcmVicsxPp1YWMDqinHsngiaRqeM5NQSDC24C7Vid",
  "key20": "5gqajN8Sh1KvjdXDUKRBv7fWraWTgW2fuCaQhUCw8A1LoML3qwVHSJLscPVoWFxqazEvVyNDuPjLtkSfFDrnJ3bb",
  "key21": "5bCGt5FT8mYGB8yJ2ayJYdqRwMex2ZSwBaUuhML7RNYbkym6fkYGzzUuh81Tk6yAgJQS3hjQbyuuBEvtvM44A4FK",
  "key22": "3ZAJ32nA3XGcmgSdgoif4YjyDBFoZWeVVWdBExtQp7Uafv3uwATrY7U19X6JRgksVDSrUWixmDNrhMdwU8pg8vNy",
  "key23": "4aoVQWzdJFY6rkyhto2Sx8mU1Sf6ZH2KLEyFTZbJ48GqyePaoDxyFtkq1qRWyzyCLipSG9QZm6QppfwmSEYvBpst",
  "key24": "3VMoiHrMgukXpGvUs1EKT2fZjFZhTg2Q4JptvNLovsHRg6k3ACiZim4crRZXWwjUgarjbV1fKKxLPTKWVKLqCaDF",
  "key25": "5LX4oVJ3dXhRXayTa24Urd7VDidLNgzRnAo7NTxgM2fo3UvDr1Ks1ryQCo9Tx3Jmjqim6oUBzsKERoUXBj3DdSDd",
  "key26": "4RJqTJD7TichAT32UmbdhtTXHjrN5YHZC7d7q426Qdys8RMn76TranzPXPpekp6NXGewZYLEEbBh6hL1DQKGXjkj",
  "key27": "5qZhcubouW7WHsyxyCUuC3cyuooJV9EpHnCcA3Sep88rGuypDhJ1GWorXpVTQRVWmdpv4B4U9emVLJgbbWS5z6xB"
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
