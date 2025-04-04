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
    "2VFgLheLx5STQEj4wPC1oMusYFqmuhtbqMp3PMm5AjphPdwxeCzqTR1vW7pLSaa4tf1ZBzkBqhrnMv6yWzrjJgQH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yBn2poKmr95aZjvJnEe4C7g5CSxY8Nxmkwvu7Vmdkx4ESquWxzr7rctcEoDmvK12YHZ9dEkr6ngMYzmnKkmW8mX",
  "key1": "3BatGxLpBFYFvnRHiTwbyGTKAeeHQqDdGiDNFmSTJYCbM7bEv9QijiEMQgveoVouhGqdCYJbd3TJhV9Apk5qzyQK",
  "key2": "2gLegfSqZKPA6Ngdv9CRxZyaszqDX1HYKwFJgg8VfS3FEp3f4Jfek8VqGiFWvKTxd9fdrShA4fuhFfLzo8zyyAm",
  "key3": "5rMfh5C7v2crD7iomfwMx76kYUX1iMQEjp1JLoHPuieNNXUSRMKgftYHeX6pLPpzDvnX9tE7FsJMSL18S51WGHiy",
  "key4": "vT6Hez8QG7H6s9mpfxBUpDZMtpXm6PR9SXk3zBMR8sz7rccPhuFgJvZ9yZ27pD5e7oJcNLDgH4FdBU3KyNwkHaP",
  "key5": "4dPSZSMi8PPvz8Pc26yKYWjpbHhiDuGHtEbubnfnny5KPY1ssLpdqDAc4jhWMEHM8g3PBai4YW8gjmU5RkH9LbQ7",
  "key6": "bZBmoGM8Ht5NF9eR2GyYYpeXmgXFCVfjwFDzPExna32vrZbn2aZD9ouT4zJNjGGi13mWtWQ1EzDHWijADVrgwAK",
  "key7": "47oJ5cYQ7fusqi7JqhCgAcDUTkvpWHymcmCbNiUVdPVrCzVMEdvN3P9YS2TFcm7W1UP7HjEBucoREmD61B2exDaJ",
  "key8": "4xjNLXMq3Y1988imb5vGbi5heHxouYaAmkSfKHNYrvBDTybNTRbFY5rdVX1pFfxpjbB2aSPzU4dEpH1KB6xiQaeF",
  "key9": "3UcnAy9k9dPvD8qygjYtzpYoTLCwUJZC3WF8vmfcmQW8MJtpXUokvw11LdeU2qyoKxDYgkwEpDtxCzQ3cnTpY4C5",
  "key10": "2A4h1nJcCWwbk9QEmiAFBQrEv7h3ciDvggXsvuBC663P1c5SuWbjsw3KqabrN7CzwFHKPXgheG9HhbjCrCVvR3EP",
  "key11": "joY1M796kHhdvocWGHEHHy645uTEvRVZQZWu9D1VxESBB5eUbbVCNGu2cB1aemEG2Bz9X5b9rAg4pWc1HoJGW3k",
  "key12": "dnF8y4cECWf8UqFmHVAEpePJQnp2WcEQSvV5xMJ4XCQ9A9Wy9nXv67wEEg7DZnKgFGpF34TnrWw72pYqabKgKdn",
  "key13": "5Tqw3HVhu3GYhrg2iqr9Jikobi9owNvP5LJwcRbamg5fJNPvAczoRUkUEUia84v4QUwghDtbcWUiGUyGi5EoUiE9",
  "key14": "62KRxahaY1AMEcavLZjGtxQQwks5fZUdftoGPPcKrA7VuMo5qz5kJ72Hd4ga2CRN17PKDwq8FQGo5nChm8JvhHRF",
  "key15": "59neUeeNEt22LzkBwEcoGKfoDuZHkDc1jgFTjUYBQgynH1qbwkHSspaF3nPa1pRetUyzkKu687YuJ8RFWuwZYiZ8",
  "key16": "2VRkPJtJ5PP7wfRRcdTZCXvDC5ugQ3YQu7U8GStVEEJ9ikXmUYw5w5oCULLT5DCmbdbmriudCEjoCPXMJmru8oiU",
  "key17": "42dvV6R2R8AZKpZFFdW6ZRCK2GXsThYVtj9tTxmyMXUQdpSdegfavRDJm4phR7FPnQfFcWj93AVE3fQ54t5ZHww",
  "key18": "2oAKaBmovvZFveXDnCcZfxo3MbDezu6AXnA1k6cXPPxzajP3cG78etzX9zacRrB67dc3ZcR2JKQh7L5vYdvyAgv3",
  "key19": "472q2YQwD1cAn31kusc4rkYTQpqUPTEzAXDXC9wbZd7WZNYKiqPybZCwPi74Fmo9GcvB4SQ9cjZikjMgxD5WR4zr",
  "key20": "42sAJEcBw6kEo2JebDd72heNinMPKF3Y4AneCjcacacq3SPWPcxXegJQVB2EzQy8D1eNR1t9Mc3pc5bjzMv7rtHr",
  "key21": "35rPSTvo9t8TNvVjMxV59jzLymgdm5pDK8DAm1DNZKk9Uy7ubcKM33GJ7ta7ymMX4kBC7Hhe1Fo5NDp1bLrMRjnv",
  "key22": "Dze3NbgoqeH4xjewUzqmvSs1C4VfurbGdBQ8sBLm7JKFwBcMXKZ7x5Gh7FjebaHgBhFUDXm7Na8GLN8Eoh86jHW",
  "key23": "63kKaMNzvTACt6jLQ4KC9HqtjqQNEhRJBxH9HWz3V36JySPa54A8b4mvpJxFhWTPkBedPEREx6qXyKRj6Dg1nD3d",
  "key24": "5a1V9vUJNe9q4z5gvEQsdzrC32CVXVBTD4gBJmHAmtW8sC2kSMK1NaAkaeumfiy1JVsCA2ogNtAG4p75ouSp5ZC8",
  "key25": "58h2APj2S4PKrNcgxPorygFipHrySE4P1EPdXAZshX987QzFDXsbzfP22VT8n6Mbap9mazHpAFJ38Xj9AEGR3JmG",
  "key26": "4ETZUBsuqyhhxnGuCMYc1LSPthZmxnT57gZSFDmZaZMguerGSFEtCY3oHNdqGYNhuCEpXdZsKx7EdqdDmT5MJkb2",
  "key27": "5guzE1HpWBZoBsvSejFQA62vVrGew7fTofrznGQax3gPDN8CgYf4WbjEpZvEKJCcbAU5HTbM2KNwScEcXPcngkT6",
  "key28": "4VdSzgfqwQ4NU92S2scQPAt6eUrebwMGwUTrLQNQnhVj1B9npb7uNEReH7o8392NcdbhhbMeh8zSaKYEDVLoy8qf",
  "key29": "3bHSoSoek9yHp4SiG2pGSuku1DBiAmdaxcYPCPgLHaskU9zndEJwAePPad14qTx9mQrnfNv3uWgge7cvvKvxF7x",
  "key30": "kwz8GfUfqYLURNZ9N9LkBZzNwexv1ChTvQrvrb5J39uY1NeK7QmXxUuAXyQ8yyfSFNTTnzBgy3f37J6HMKfDzaX",
  "key31": "5CCLu5pqVg8vnc1ba5e3aBL5e4SkZu59nTo3U7Q7exjJi9ftEywDQzh1r339NKmigQouZKmS4UetKprfq53XdZV9",
  "key32": "5Jr7PdxfxNjcYsZz7ov9SWntGxY9qzu5F3z2Pw9jPUKGyEAELssepnbJ8Ts7tU2UJbtfXyqmyqpYwVsJ5xb1zfft",
  "key33": "EfLtM8ZWADyMVuRRvVoGU3HuTzvKveTuJVTpbYy4txdDSZeKifLU7UVytUFDYDwq7P6B1dFhqNvXasNZWZZ3GUF",
  "key34": "52eATcFJGUEwToYH2zhZ1BRdmPA2gURTJn3XEg9ty3o4ed27HuG2MmjxmDoTTUSD7hXNNyShowKuoEvdJsxHpjx9",
  "key35": "q6DaRD528KcZZqwhS7Mm3CPo2VxrgasVWo2U2VswdG5aYTGe1c3v1QdZ9UaBJoneNohVrMzts1p7VebjL2cUPBc",
  "key36": "5cUKbDyJPsRSPSjYFDC2YPrdsjFePwtYt7kWALwpLQ19LGuy4WGZBMHuqN6tTwkLbY1RxsmTR1f8DavKwMdY1Gzs"
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
