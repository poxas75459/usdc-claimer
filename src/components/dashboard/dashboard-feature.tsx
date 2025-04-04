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
    "3AzxkJXVRwdmkYs7D837aRC4Jkcyc3Lc6W1uLxhzYfsYFvxNL1fRimNMrz4zSAeN2ktvaFVbgtzjyHCtqEbmkigw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LmWouK8aSim3EwT29Gxp5QHEVJQwtPGaAeoHnCqSdh9r5hn5T4FUZU6ogEgKWYvtkmr6cA4pVsNifDv73Ztq2yz",
  "key1": "3Jz1ajfQpyt78QQtd7QdK6A1JhPjSETys3bvJV7B9a9MkNkZ2GdWQq1o82bqGmAkhf2s7bWEfcqn4d53SQH6uevs",
  "key2": "en8cYnWxdSoqbR3chmRqcDAGse2AdieMqhu6vkD3wQZSdK1cuvSD38jzrG6f72JbABY4TBkt8SprWGrYXgwpB5E",
  "key3": "52osYyhwD3tQ16Wtdy3VDhnc511kyfDkTDuF8hr2o7ciAujHFkSU75NxkASTpMThWriFZkBY1B8HAHF5pqoWxH6a",
  "key4": "4t16LK62PRrBz1VSKkTiAEHXKNqwxwXW4C5yHqNYGEweod7TrFTCM6op4cKL4SffixHCLCEyAjkK2TiwcFdSunTZ",
  "key5": "34PtL7aNi81Mix5GWsV1E7pQC8qsboTkVNc8jMoGKVn9R7XEQh1WyiA4VhL7yVb4NqefhrD4XgSo6yjrGyN7r7kM",
  "key6": "QFdjk9A9XTsMgLCWLUJJT4tT4wrSiTVX6V5zCSg7u1kgAwSRjd4QiEBdobHDL1hfryjfZsr2Y4Sn2nbzvCBHMiT",
  "key7": "2Y8t2rhLxbMypYNW8iV5mRGvbBc6rJBezEPkRJrutCd7BGgeuHi1x6v9KVe5VHbVJ9WAw7CWv76Hj4t6dePA8jQR",
  "key8": "4sterZWyerm2EMyqShSZq5h7Njp6rKXxGwVpusd6cjQZNwRMXEadJ5Zf3iWdcSjNCU7pxxhEfP1RVcjgx6ReqLmU",
  "key9": "4LNuPqSGNVxygxfLDKVZHjb7MrpMMoqJvjVdhvGvAokPHTRowF3vo3HzGW9u9mt4d6UX2v5Utx9ygytH2NYuUD9a",
  "key10": "4q8wRjZRvbz2XBhNwg6RQN1DoRaUnEpgJEwKsKHJ9QnYY1TaA1HvpigCskjAk6vLkyWeCpYUgBLQFCJnyLmHrQwx",
  "key11": "4Hc5X4SM4wuDZCmDkkbQkpDpcwPcNCUWiPJUUHvFXedPuEcpy72RYA3P8FRadDpJA6jFfcc9zEDEBYezPrVrkpeE",
  "key12": "3UzZie3RkxXttLNEr7h7rJQa4XxhcDQMiV9SiFiXczdSZuwQcwUDbSd3QHd8nh4eFeFBar2m9mTdtq3gvs6ethjh",
  "key13": "5o66LgdQxDT8uXfgA6FU3JQsaeqrsQRxFe7crmvRGVGKPwUnD3rRkxuYu9xx2WQoFbicgJ55v8yAxMw9y7sizLGr",
  "key14": "2xQXNgjfiaGgNgzTiL9Gxs1vi4A8BFuj8diNRtsxUC4zYsxDoBfeshE4ZDBhArJaPgT4wJKMgHQoLjYju1LYRXz5",
  "key15": "3uVHQXUS1fFbrUfUFVqPMRGgXFnYcSiceK578RMZTzE42r131JXVLx213vFiuc246cu6wpnSBYT62zoRMyvxgBwT",
  "key16": "2Qxo4EB3YTsKJRNcsHdGoFRyKxwu4qPWhHpsC7GjAHRHv5g9iuFV8qU8xJB7jY81NkiMCF1dTgUzU4r5oFtnk7ZS",
  "key17": "2FUi8APgpCdxvDpCMDCqMFwt68YwGx3QuieC3S5TbMi4xrkfdC8ZeA1k83wn7hUuG4YKS96ez3dUaQJaLWfQ5h64",
  "key18": "4717bCjFRGLbn4TWbAYWPoZYmGveUHK9uGdar13msySecJLBK62KhzZWyCg6mkFV8q9Yf4oXZKBvu6NA4GNr2awD",
  "key19": "2DgDuRFjafECwn4qRswRtMAqscv6etKEniAGh5kHHzm1xNPGKcgvUDGasSZk3sCnDAHugFQWN6py4rRMRLm1d13J",
  "key20": "2sXHX8B7ENyixwQ5PFHfmHC9sfmeMooy1AJKg3Zn9g4MuXP8rRXqGUGuz2NpksFTn17m2xHZsQkZqPCkdfmMjyiU",
  "key21": "5GsCsm1vLpLfNLrNRRZGU4xgBD2o15KrYM3bdWuPCGHprqujnea7zqz2ViLSWWTwfNhAGWfbgxXwvdiNTvuyVCD4",
  "key22": "x9F94BfuL4Ft1moUDmvWWocmAzEAjdEssAz4dqpEoi4NKL87Kojqxwif5yM1kFWCBLDVEp9JNXPSoeFJJuXMauW",
  "key23": "3hBQdc3oqk9JKoNqM5hxAU2LAgwmyS6mFTtAnYtecUmYiEkk3dJkWiJVDyptXcbH6NQg98BKnzKK5VizPsYPKYdv",
  "key24": "36MXwUHriM9CiKnuJgPmUdrUWDT3bSWnmiym1qyU6jmrSFXCGWVvk9cHxW2xNEHZyX5Yvwg1cdscw2a8kwsX15tF",
  "key25": "27Konn3x4oTB5U6oJzsw9Ef89k1sTyDfaoHTvZbQVZRgqL9J1wU7RPi1gFfMwrXD9BDsgoiaU19kkFAiCRqy44mb",
  "key26": "2KTHvDFww6G9Xrgz8YPbyCFadPfyvLvjkK9QyGHKTWcfqt8abV6dWXLrr9KTYRuutN97CXrhUsdvnC7NQaeU69dp",
  "key27": "3v3XXPag24HzcBCcH2rK39A4SFBSjpMHytZRq5aBF8xDB6LcuwbJbRYLsB1yxoPN7N6JQfVFbFeMioVmUTyaTW3V",
  "key28": "5rNdeGa9VtK7aYcqgYZ2KQjCfSiUhifB4isuB1YDAyCXJKHoNVa23vMv8vKLANtxcb88ZfqdpgxY2FRb3SHLfTrM",
  "key29": "2hXx5wcHVJVy9tuSUeQb9gVQekbdSt3nTceSRgsPmEx1Sh77vi9ACKJcqr3h5zsqf11Yujx6vdkEaNxDm2mmys3m",
  "key30": "3PVGBAsYSPdyW1QkZaGiCLXXyk4aNF11c2bBXu6ThfgriAvQiPPQbZZxqzTWu9nLMoUrnPL7Xg5M7VfR9UtohsRq",
  "key31": "4sQ25U6i4nx2nnQTXshoj9s3kSiFyrTR7eG5KgKUQvzoGY1fD24v5i22waRKnVamzaQu5WqQYphHFRpCinwfx4L9"
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
