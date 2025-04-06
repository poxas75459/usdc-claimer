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
    "2Ykm4gngW2jvckWchbt8ptkSjXcj1Q2NiPFXky9nXCmKePLtQUrdTQc8aX4XJmJGU8HZVArJUWNeK2tHcYXxHFbR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YfV48irNCeq6njFYNKsFvk2qgNhmnwRsfcko6Ko46Z3zenYPeqPAzTkRJQXq1w6HpG2rJjo5SSy9seaxSYxaN7j",
  "key1": "2kwUHYpLkNPjjj2XBtxoM4yKoG3z6sJNYrGZ2cegWRt3KuKwQGJFqbhJF4vCKikAmD8DPsNsUDJKPHyDGL8KfY5k",
  "key2": "3gLh8wFTkYemgtJDvjhicA795haiaxDijrGfA2w1Lwf2kmDAgx2nmwqnr3a2C3FHHt24ySdo4KEn6Yt9N6KZNFvh",
  "key3": "2PGf3h72E4JMRpSMocxBJHKDv1sxpyGSbx4E8ozmqtBoKZzgMm7LAHUF3s2wFtiLQ9vRFCwHvvSjmrEq1zZKWn2v",
  "key4": "xZPauEUaSgFBWhp5Ed2DzUYhZT5jtDbN5HUR4pFSpf1xDqeEMjtXGrfpLEua798Ct4sNXmB2aYWwi4GHcSkubYJ",
  "key5": "4C37AApaeLjKcky9MrAtNX6DpujHWEpArnZvsPS8ueE1sP7PH5T4XKjU7apHfxf1xkUwkDuPZcwKFSoH6ZWQ3zqZ",
  "key6": "3pZ3faxJHDRq2VpiDx5YYQ4cNUrMWqnYYoQi4BBYtbLC3JjAhCKt1egeZu5PXWfpswaqqfhQK5EjnghSfteP95eq",
  "key7": "3MnqNRNLqYptVzFL4Ft3t79roRWB14AD7S5DBxbw1ZqarBd4cHCAjbzuryxrcw3qNnsnMT2khigvVJCU4KW3jSrY",
  "key8": "5ngaQ69MctctN4rUdFiCVYfWXrUVYu2Qqfowdd2yYgKYjBQudavrF8RRUJciB3puMMs9AtkwvWi9qPCVcvCuKZjk",
  "key9": "DA9GgaW4iUnyARqGtDgdCu4h1SqfYSWf2zbXB8Drsjg6LgfVh3Fv3AiyWgDKQogjqjwZuiyGKXKWcqmdkHVUWAw",
  "key10": "pWjDMk3395QMvrw4qknAXJKBg3zJoZWDWYmFg1moJ8ZesTATwrAPRzh4vWHHnkc3tb9hUaqNCmmo24CvVVh2Kxj",
  "key11": "2s7KPWiigyDhUVZHi9dp3Kmv9LvSRQkatCWGPumUg9MYWRKMUPovYRcFpJbrvhnD2XKFKGwNPXuZhEXM38eF6QTu",
  "key12": "ZsGPQtpcYtNomPxbJb6jACXQ2F2TTGWTt8vSNb2eyx8p6QAncMkuLvbr5yTnkiGduZenxRJQzNnaLxptWnBjPou",
  "key13": "3gRLWLRur5LeaM75ti9anK8uJk5ozjyqj6kXaZegzAxmdyVGTehFwZPqFHYHcv6vUMp66f9xydibXKS8yX5isJub",
  "key14": "5kWK3y1iyqUBAC28vX3Pst3Mhx3Zf616DPxd7GK9CMuLkQu62JSdewVnhSFDETvnS88NosBAvg6F29YRHNUyfESz",
  "key15": "4k9RtDL3CrF1kxPBuNsyjCXZULrvsdxLTEmYg7bq1ZHM3mmxfQJuqWQ932nScAP6oJ4yqkkAGagj2rYLYL41axTB",
  "key16": "4Hpwvvgw9c7hRoPUbVnUXNvBqbdtuwLMVgURDbAGCAo5LNNA3GisZ8cvLisixpoKaEPptJCBhwZ4AFPnK4wL5gqe",
  "key17": "2v1Am7kDjbtS6ZsyhFHjt1SfuUhQAeWUwGAAwCoKKUzfdykFcrsRyzQ7KP7uPxWonJ8kG7P9eRiSQHiYiatiEgFL",
  "key18": "5tQf7ohRvAHQHFo5GW2qgMx24yA9ey6Y1uz9oEDUGgQBDDUfdJDyDPrAwJa2ujXJhiDbW1upFY8oz3uELFoF4BkK",
  "key19": "4tMN5N4zFsVXMJFJjUEz9G3vpTSd2ywvUEdex1KzTWeHA7s5Ry5uxkBEBFKAeBcZEpLLKXtnGzY985MGexWGj1am",
  "key20": "4ctvVkEsmxX9ptHtXEDRbLieJEn9UDj91TTss1EcBSNJ5JJRi4zbu6ZwUwnVMiaY1S48JH8cdDHQBxhSiVkgC3D6",
  "key21": "64VneCAuFyuP8eRwuLXNdsVy92eEzTqT9UBxEa4jPq5j8yumUkC35cnppm5piwejssBH3iK5VhNUtdnD6agKn88W",
  "key22": "25ihHVQb2ZbQ2fvfxKH2qhiaBc4jsGqq5ybyC6tEeq8W6Sx7oNPmwnaWDSLKmevY5gFMGAoF2c5xQYoyswQ1w3XY",
  "key23": "2HJFFooSoKvmw6iat6sfKVnFD6dkfKALXkgSjBEf2GBEbeFt8C8xNrSnc579H5UWWNS7n3TNsPcELCgAgR8NobbE",
  "key24": "4FTSqVUSiTrnSjhH2RgXRvpeCH1PsJUKwT3kAwcXjHXRm7X9jmpWXBKmCLXpYqoytEj7HVpRoBzJQvJDie91XWGx",
  "key25": "4TUrfAQJNSL9h9pGGxQuNBfuJUJqTpwnunQ9ux4q21hYEu1JVzybuVMDSq4WfP7P5xhRM91Yd2v7D4wFfH7yW61a",
  "key26": "4scoibXff934wTuAfttTd99DTPJ48YMrX7wbUd1a3d1KTQnxhCLsVDLb7qyDUUCmrC7maSetDLa54w2ndvuhEyY7",
  "key27": "LUq5oxZ6UP8qhXnwvjRrAzBVq83nadBgAD3Hvt7JdphmWPxjAQFao7cNTTD256ydBuS3wQbbQgzgXmBjBj9nwpK",
  "key28": "4nk5SiWMxNKytRc9yNdvn8mpjNUMwoFwDqTHsJdTAsWMYzK8dDhfSKh7iXf3HZ8eaFsLmQggXci6BANwA3WA7vcE",
  "key29": "3oH5xybPTMfDnpNuhKvnpEVut7Vtdo8uvhY3npF23yeWUTf5KxkvnmLPrgFst3fbwZfMgebQAQ4d7UmcNXVAKQSU",
  "key30": "on5t6Y5h9oHwQ78io2UJ7GJ7c8qFmYgCN3BwhC6CZiLG6qmASXnta1mQ7EYA7gaKAvNKTGCq22qZUE6Qn6ZU15i",
  "key31": "3JzAiQ4vyCz4fn7ZS3HSJyEG5VZH5u8j7w4oQBPhcKDQ8PCzd1wMNfmoyFzdHZjSt4btb1PFVwa7iUydpva2E6Yp",
  "key32": "5fyugjiWsP7hbArEDWJmdZm5CpGmrzFw6Wjy992DqTdUM6ysD7YBUuBdtggYeStFq27Po2fqSesx35Dkw3dLaNyj",
  "key33": "4caqW4R6ERStKLkpJZv2FBC1jK4pcBNGS1CjdjE2pvpKGzC1jZyvLrEHe1ZzG18M32jvqGydN8NCSdGSqKdBkZyc",
  "key34": "5w47v3qGcmmGX6rCAUtaeTBLm7jPKbV7qyu3MfZ4u1UiDPPx1xDbuw9AMgk4rLVW9wX3qVj4UHENJrDFAo317g2L",
  "key35": "5q9AQaZQMsuDJUEXKdzMyVyRg71iAVSW4hkC1Eku2pXTuCUx8xMG3LjmTqZtwtxiV9KzD2n1u344HamhSQKvVfmF",
  "key36": "tSFqTEpXC4Co2PE4SnsLm3DmqV4DXfYWSJSD5pw8FhGZKjBVQaF22Dv1o87Gc7pKv8xDfT8RY4ZgiEwjaCrbHUe",
  "key37": "3cephi2wuPkgnDqrAonBREABw1moCnUXE6tC5MdAAon37Rp1yFZU69ZSQjTxPb9sPS7rnWNqeHuFcfWNx2nvpCPi",
  "key38": "5aMY4BA3tvbXpJoNwbxWrWvma3ew6Ss3BWZhaRnQgb6pHeZRea1abJhGZKYn1smCZ1139XhzcWYGsDQ6wHiZjuJY",
  "key39": "2y683Htb5YLwvwgtwimj21dNP5wtFEZ3SRT1EchqvsGprWTcQ4zXNoyaBaoEQN4EL4Y4sN7ysg5at9pFQXdFr6a7",
  "key40": "3fbnewY2oyfCnr4LTkQ2Ghph5qi9jDti6Diw9ftbkEQF72ff62pkXxenvP4acMd9orfMxwHSjhHfL51uskZqNExh",
  "key41": "KpzsmB1So4t9mvtCzu9J5J7gzKTpxoUURGcPeFXkPCgpWcJvzpFhZTEq8yG7NWTjmHntJMjPAKSte4bBhgJYqcA",
  "key42": "3E8JtdSnwRDiujPVXgkjp5fZNfTpbPuVQt6ieDkK4RThTYXDPc12L2rVXjJc6nDbdJTgx2f537ose6rYdA2bAgEG"
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
