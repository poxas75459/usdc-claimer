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
    "5fYgGEqN4om1iXn3nTAu1iaizbZkSi5ySnmRw8Z7FP7nx84HfyV6MeoCvp27GK75Zsnt28CrRyqeVQWERk6veFC9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VGJYF2uPxN5F4oqUg5W8SsGtb5JWKyL9QPKdxtC29cTVxczRuSgbeBs258wGobLKishUfpPiZKKktumSQpq5BWz",
  "key1": "2wR9Bp3xCGjZdTiWoJXdv23pGDmnPvpa9tqhZmw6yh8qwQWAkZYkGu6LV4LFLxNWHS4TaAvXWhQkCrfZabaTAerL",
  "key2": "5ZdoEjmvHhVqxTUxEjHGf6L9xNK4fN7K7dpNqZsGo4hrozvWv7Vxb1LptGXh8aks7QAU94upt3hSorSAqyupcPCP",
  "key3": "2mSDddV39HsjtdjnJqE7Zr16oxRucfVYCvMZVFiiJQvJnuVkgz6nPquBTKxUdWiioGF4RA3aysPFiPWvYxJYqs3M",
  "key4": "4TqXsyjwiGoUA3KdShDnsmjPgq2jQm7oRSKaV29FnpVVoq9gR2Z5MBQ7kAV5BeuCZhJBDB9xQtszJLQ75yEjMBby",
  "key5": "4QW28iwRexW22LxtZ6wuomBDwjmfCcuK6urvbg8riGkDN9Y9JLW1DKftK7T2N8ZTq9HMfYKeghjnu7cViGpW1RFC",
  "key6": "3iKvQLdQ5PYG7c7D9DRP7EzpKCL4kVafy2qetcr6awnKi8GtaRdwu7SSCqJtzzozD2yaRQCp9JGRKaukoaFSzAjC",
  "key7": "251hrz4WETiuq1665LdjtNMnVCExCMF44ypBDEkw5z31SR21hNgRMgVz93Z82s3e6RqQoMWG46nuLyZY9Vk3yNyL",
  "key8": "2gK73fNNon2jd5B6r1v6LaWBSuDehrUH1WcXe6E8snSU5TDE4Qz646mtdXGCrE5U9F9XDLSaAh7TzJdcGpHe5SXg",
  "key9": "4XhTcN7nfeEXBXT83JBsBcwbyZZMyWzPrWEJz6HuS4gyeGmbXvadcfhexpeXWWW1tffyVFivFDgkuyetBMSMDeMr",
  "key10": "4J4tze5DGSm3Q9zHj32cGVzCXmciitnoxsS3RceTtA3NhaNDU7xmiH7bGjFy4GFni4jxjfQLWUi7uT1S9WwSSiEW",
  "key11": "FoaL8yM7SKtasoGwwKJtAP4EHQabBZ16kgZRwqtmTP2XB5RfzJP59bEpdNBhMSRwVS67a1cS8eG5aQnchKzTvqp",
  "key12": "3xG2H4yVoFT8NbmbfvqLx6KTgyx4Zkgj3M7qPUMNcxrvbWrWYT5YQ2Dfq4ojVE2xDi7a1XnyNKj1gFTQWbP9c86c",
  "key13": "5QwSSFmUHgPgwqWMUkdifyQpKQmnb74KgUh3efa7Q2qNkSHjBq6jeEnLoVWj9x6CqdspFUwirL4CSWTCzU6HpDFC",
  "key14": "67kyWv6ctt2KN9cA3f8zAuFN2RMVwpbJYCpdWBMtof2nAfGqwgLBcqPtzNxVLAjVJjQ4Qv3K3tQKa5h1djKRJo8D",
  "key15": "n2SHSDSraJFWGtNPKfCcsThwaTezyrNQhmCj1SgJ6gv61ADa9efniLsxe3REsBQRWTsewsmHdYPEuBmgEoCtjnX",
  "key16": "44tFiUZc6fS9yLfyBxLDp3JBh8UvsQRSdGRXWVkgFXNVWmTT6TE4itvb1QnnEHwS79JQ75H7rmFvSE4Akri9T2WL",
  "key17": "5UoZC8Z6o17ARBubskqRnVqq3Q9fEm89nicfijBxt2Xpwg1QLnV9pHEAbKtsyyv2pe9SJdwd3eHR2rZL76Wfjkz5",
  "key18": "2Ekcn7R1t5usduEiGCoJbFmvwf7jYZX9zheghSBZmJDzo34k1qBAS7u452PZ266nfpBJBJ6fdDDaux54MN25qgr7",
  "key19": "25WCjnJPjShWjZHXGoSvyi7v5D6nusCJvhWvXgfn2KCh71y53yCMEArthLxzbZzsht31DVqicpY5cPZgoUJnPwgm",
  "key20": "5MytpKZn6u8aWcb22LjzKnQKeeeFCv1A241dLqX5PZWUEGD5CugGquWBnikH1zNhyfwX3aAxU7vFV1jNXwm3ip3",
  "key21": "eNEqttr1spAJejg45iiz5pvJ6jbHCBo29Xvfdqv8if3DrqHViSrpW3H6L6b3WwS3k23vMFQsn36UU4KQynKGGWR",
  "key22": "q5JRquZkpFRiTkENRtVBNPYGHycmVHXt5zmDSNDEQoHvDVqTNp7F9aMMhjPBkWcVmEtJjkkcPzA12uuKmWbvAJk",
  "key23": "CC6jGUFdXFCc3KrRWeKri1AG4xmZnfxAy1oS8mNXdszaX6vamwioektLDE1b8j8DkXb5ognUcsEpwPPxihxArQm",
  "key24": "4d7QVq1NtQkZcr2BKqMGKpqibB1Nu71vEp3Qz7ZCCNsuB2tvBeWhak2SSpvYRhqVs7KSeYwsQi8tiYbYypJr6223",
  "key25": "5FDTzZn34H1c38a89gZiFCVLYhSkBck3cR5RUxurKGJnegQbuhpUCv7LgKYorF18EGrKs1m4VRDFem2vdTuJYB3E",
  "key26": "24rheiTH84dCvoBr2YJVazxLpJH9hQqsz8TWP34UrAF4wXMh71iGEfeZq15f29HVqnPvGLh96gMV8TuoozrTVSBC",
  "key27": "5zQ4Letet9anE9j6vmvRTEZ5L2bXu5MpdHoA3rpyZFVYqG7VNcDKV1ks7a9etAiLPymu9cMtcD3DucKM9SxiQxi4",
  "key28": "5wqbN1WczcUUYsdTvv8c7vXuEMbSY8vqMno38mEB9Kxa1JJxqy6Ucv37G685VfFAeidMokFD91gfVdmKS4GNdNuw",
  "key29": "5PoiKHzdBFnQTwgga1oJfpADoiFsmC83mYGzodcu4zcBC4ER1E6kttD4GEm956Xcg6r2dcLfRJ8QdtqggWKGzw5u",
  "key30": "62zjfhtydTQDCZz6BAVcvD39fkHLVUCFKaGs3wu5pwMa8FS1ak6fF73ECyzbf13tkkWxrHYQjG4PotTpQuSs53gg",
  "key31": "RCymY84SZvLjBV6ARz5RrEuMBKpnRLE46zT6DsMHtDUJMTwgLhNQRuNzRGbrbHdE4eHCMYGnaAKWVuuxdTvgibd",
  "key32": "44ThAz9CGU9wMPFcpgoxcJ4BoyhnbViDbRJkejN6tKrcrixPDc1KAWtSgZV3AfVqvR2Yr4RaLTXu7MghV5owithC",
  "key33": "32WRVKhMV8oddBKxVmSUX4iTGQeTgAgYzvfvVDfoNxQ2TcuyJ7ocXZaz5RuZ7bxveX11NBcqXaRMvCvLFxGmveL4",
  "key34": "39dKQeFKQVnb79xjBmgauTqFL2VHdRt45xff3HRo72BYKDqCBhy5HrZiXdc9XKZ3JXUPEA3KqRzq8GXkUDgXj2B7"
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
