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
    "5Qsd8MUawtWuo8d9eYQaKYUySsMmFC3SXh3voR5trpovDFgPuadB4eApeWnQjYgHa6MBswpNTTTirNFzqKer7gpQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BdY6XwvmrMVD3qcFPPwHfkXZ2N9nWeVnPLLztGgu31tLKr14cUBAdMpoYUkt1kqZXefT3xtNyrbhqmG8shte4tR",
  "key1": "4fng9WytP8c37tWNuMikGF8m3To7sda2WcpkrA9WCbgkrqhzY3z3WkyYZ31X498hdnj2TSmLYSSipHVR72fJNgH2",
  "key2": "4cfxF5VhSwKnRSFsqdWCZbLWyyaDdvTEkBtkkUuVRvhybQegKwazHm2JwTF9aAVbcqkpnwstqCCKkcBeTfsdWwd8",
  "key3": "5S6wbz3eMffkDgDHYWkAHnx9vb8fTSfR5DrVifDLHqsySQMu8jQ3LhNSSEB3uA1fnh5hkcCaDuPBzyyY4UnWr2u5",
  "key4": "UtkSQbJ925FuDBF98LNZSTW1Cupb6akDrnLm17RsAPvr4c2wEnLzh3uJk3R2b8shvwDzdUZitxKGVRof5PqPTcA",
  "key5": "4yXYVeG2PyHhvrZgEZhCSY9EFMGerZt9PVcACbpaGkjMWTEaic7ZzVhpfWGWyfj8eDggD2MiHHgcArubNHCfPmq6",
  "key6": "3tmA8VwqRvEzMuVhZsSB9HoMtFwWAyQGdmAoF3zauGwqspuMvt46wGWcc1CC1CkrJDvAEsVUaovebfMgrGbYChU6",
  "key7": "3ZvMauMtB549JSVcS22j3hzqJkeTQLSZoZzp4x3UPt1vaCdmK4vkPSyb8DvABHbQ1bZWMCDUC4ygicb8ZFR4p7iU",
  "key8": "64ic2sj3EAeYe7rDWKr717yofEJqkhDnJ3zkSFzweCqvZmCtZAHgvCpPKBiUtoXsUwuLuTiaZhE37wwBUUrjJiPz",
  "key9": "5h6gHHebVoZMRVETSmaBbfqiTVkfn4kctdf5yN65eF5JKfZ8u9WAxgyhxDVkvPUdgUXnaRe4KGNHcbSjqaH6zoa4",
  "key10": "51ezEz8MdD786uokAG2iYadyvjfCNmYtEHaSpwy96XvCQx6bo6YmDTJKQVYGZSAF5tAK8cMRLJue4ZeFeJ5DRhZd",
  "key11": "5kDwe3YzyUs3m4sa74YpKwpXvpHR63AAsuBmBGuTDLQrFiwfEGYNRxugd8ZqPq2qT8HEBiKXZ4qYm1PiJqsnRCBN",
  "key12": "WBd5TZXu8qTDVuUYLhT89F4rSuhKDzAvsXhdzGRQr5b8qGzuTpYh9Bqq25V3aZWsRXz6PNLQae4i95BKWx5zrVv",
  "key13": "4fvq88vgXDaqR8jc3uaV6CReaN3Jf4zoWD3NTyGdhRckUpZJJWkhAAwaqXAQTbaw7n919SbGKrT1PTmvrECsoVEU",
  "key14": "WUXuPFE5SX8zx7f6BTZfkAF4V3SqQEcgY3RfZGThhHv3fSe3n4AsbHNjYppKer3hzdZCzfJ72hpWBkKHaNc2kiq",
  "key15": "cqLj1LUafWVmQhU18LqgTGLjKvkKMi6suWaV3ecNtRNy4Xfcnvr8sXuwbZDkJEt7cFz9SAZE29kmEDm1nxPnW9C",
  "key16": "2YujkRwsy6o4T7bczALuFKfPFqUAUgJMHaZVfWBoAwbrCwrBHumjbvKgcGF4uK2rKf9ZWQnrwc2R5YzU2cGkQEz4",
  "key17": "4mfaJxNm94gbQzprxFLCcPZuyz7vMadGhN9eRF7eia8ji5DCCBvBTUkNt4TWFdLsLengzAzm3Nr4AN5xRFtA6vyD",
  "key18": "2eScNwXcHnNdKZHKu4JeW3wVHm7vwQdrAd4wxjr32GvnzPuUndeS7z9MsiZPuND5y16AB648xDQFgQ2cp9FLJGuB",
  "key19": "YKbaQwjuKRARdyiFf5QHF1WbPZkNTTamfsGD4mpZjCeMttKJx2agUijgFy5K5QUQr6LNKMkDztaa3AgtPehEziB",
  "key20": "2sP4BnSbWbFJpxCBqHRw7kDTQisCZhx9pwvudtdfofFMr6tSCG5NrSdb5N3uGixwVemzXq1VUUEK3cGEZ3AYquL4",
  "key21": "3gNrTSHNU2HwjLvdTfKTercMHPTnzU1b2RfMqAuCDProyajx7i5eVt8PTvgceayd8saKxz77vb6G9NJDuxdEURaX",
  "key22": "4trgw3y8vXp5n7F2mAee4JdBjC8LRNKDYUjnUcPZJ2TczWc7rXw6aDPbt73pYbRCH4N4LHz1rYqisybj97PLGCLm",
  "key23": "5vEaLizTTq4hutCF3wiWWq9BwnfsX3NCGihP8amzQAwfJJqaxyavjrRG7WU2AUGHs9TjChUohiq5f6MjHEK5koDF",
  "key24": "5h8fHQo7xcN2DDV8ztarPdcXokGd1pcE9RVNE63CPgfpnw3z5XXaAuUCFLMCVugREVjdXvxWaX2D2FzHhYgVtWqP",
  "key25": "4isi9C9oreFsMfruDE8FUsQCNaBz3qLaXzkFR6HTywHPGmVCsrWLBmQLp5t2rS5k7TAUvLJhn7HbtHjtmeirkuVY",
  "key26": "hw5vtyLcdcNcQcxG8keHxkN8VekykMnGi4xVd4Hyaj1sm11AZjVGQJfnL822JNsUsGFR4ruQ6HckrPscX8wmUPR",
  "key27": "3vtZCi8BbKUEVYrK2vWwGJuPSyQLbQrjXkysJC6Z5WX4owFN24o4SAhVpNfignvRAvTmwE9EwcAn5QhZYLRFsHBZ",
  "key28": "2GX8Tg5nbDi4KPzEGKUeHHPWtMnrpuJyiMHGnpvEb39J5JBj8LogdtoAs5GD9fGeDSZZFTP2vQhy662ATrvcqzbY",
  "key29": "2M18bFgPU9YGKwsBKsc4uM5oRYtHwbw4cgHBNJETmwgCJbUtZvwVeELWiL1sk7wqLM75tJMJYF91kHeM9vMJPP91",
  "key30": "DAvuXGWUt4tfQt6yfNTB8RqtWNpFksymmrH83dAFSjfMMzPF3fUbvJfdECHfDTrm2aGmkTbsz59gaVvFJBVjxgY",
  "key31": "4Rkw58TvXhVTf5odJgKZcDZ5G4qXWDPebFFdhFm5BR1oWqN6fZ3tUkhaPDYeB8P3f6487kc3tFBbDHvjV131SvLT",
  "key32": "VvFLH3E1197n9khtbDbftpzL3eJKLdXcBMWQQUedbw3dBtNQLirrjPLAw9RnTt95493xwMiBhAEWMzwYiRk5hrD",
  "key33": "4oy5LUZA9hB4PnTebk3mpCuB3b1dV826oj4U1UU72z4CkfHWz6JECQoCfmuREQkhGhRufhptRJR89SHKPbeq231A",
  "key34": "5pm9nBF4dxSmQxcJjpid9ruyDDM4Cit1kyFTR1HWHVm8HVL99NGv8r4Zzf6gb35juD8vDJebunyWaCETNJCpEsT1",
  "key35": "4AMucfUa83wUYHumfVEnUDV4R8Lo7RKTetosqUrf3KPuhSanwLNDBnywXrTUqJ7tqz9sAdMr5jYxkqgvtMoFXcrG",
  "key36": "2d5Kc1kjjtumevvVSaQCxkvKtcvFq7CJrjszybqb4KUiu8cgqWuR9btt4VBeCBedSSwRQjfRBcUP4hKDSfMduNkb",
  "key37": "5MuUk1PyrvfSnY8wLgWJSxkcyyfAkDdu2cVAgzuYcRdkwe3ZvBMEnkeubSkWj4Gr59Cu5cEfDbhhnvS78NkKk5qQ",
  "key38": "469DvQ5D1yPSoMYtTfxc3poRc7n9ApavCniGwU2CUASJM8gy6xeFYaVkbLDmZ4bPpu4evmHBReXVpSeH4K2fpXpW",
  "key39": "kdmaSc6ZKsotJbkqu74HWEKuz3F5XtA6cJg8EkpjUS5GejC14uyJGhKUyXUTGFYk6tZhoyJAzfM3sfVUxQSamW2"
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
