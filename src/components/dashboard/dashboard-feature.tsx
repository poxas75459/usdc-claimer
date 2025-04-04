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
    "2WwA4Qb53ZETVABSnHE5NBuZQzhJQBensnG3dRYYy9E5rmxaGFhjtwD2bVgju7A8JnB8veVf9jiFh4GegNinfKPH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uwhELKiMMrRK5fHEkBtdiyHu2eYxXa77c3UJm1CDg814rbgW57Sdzs4nZvWx5m17BtzJzby2B9sUVAdABRrRqr6",
  "key1": "31M6srJEVReX7Ac7KiZMdEjvUhucW3AiuUQv3Z4YjxGDn7682SqcgLsGiX8Bn8Qm6XAgiYvSD8QF8KyMqZyZGLFG",
  "key2": "61DDd4MMQw9e3eaS4wCmqScSdHY71TtQSLMqdmSf3DvByaBynA6GnDDeAeG45pnr3EHcDaRoXcWJXveuSY4CdKYX",
  "key3": "3zPCLyMNqT3eAcDuhLgWkpZhnG7GnygfVvZiCDaEKvTaDiq3CEysrJ7ngB7QQHKDzry3vyd9u5bpi4TpKrYVoXrW",
  "key4": "3WYXpJBYZexFDKDJekGfQGSqQ8XK7yLMdYPZpeTYKaHfBeRzLgWhAL1JBXvWy3EuERLcghGDwBQm5cLN7wr6AUuV",
  "key5": "5cR2bj6Eys23NmJzzrFbco36fx9ugWthGw1PYEr8UfAqfucod2zG9mjXgK1Ao1MNvNKV5XbRVUBVU87jG2xghYHU",
  "key6": "2xxULgpCmHgwsGkuv3CkkakiDHwBp5C49KWLRkwvJDJrDrtmvJW9uzfVm39fD11CKHTq3yf7PevoqUGf13SyjYtZ",
  "key7": "3qaM1AxSdCta6Vc5QtBN5XNPx82vmgtWWB2zZ1o5znmLqtJEgCxLQaUSeSxdjB6ZxfAQLGNvZNQ7Jqeghq8JYuH9",
  "key8": "22NByPGbbB8jgRY5zEp1EGu2FPDrVVTKiGrLAj3838KmAWr6ZzkapFy8DzCd5wDmVAGqJrCcTvsGWwNPsW3mmBEu",
  "key9": "4DaVcEvMpMyCYuQkNXUE2gCf6FxrECrGAN14fohFwqNkRnktQTCMVD3WK6pzVki38zyJD4ESJUh2iexpCGQpn7Ej",
  "key10": "5vGi1MckWkcVW1JimAwreiqC125sTD8jHh6M2YgXNvv2iVf69rA68sGJ2gH7GASiekQxxNvSs1YZw7w7416A7wJC",
  "key11": "AnGCpEj5mrzyeq82TGhuXQiNJzVxm4KtXTDhMDT7nNWEdy5uopLgFSunGNjUuBWZFjJ61Yoa471yqPbpW52HFqd",
  "key12": "5jiNvyQKJtmkhwiBfGAVpt39yXxXi9yjvM4Hiq3LL4BC7JN2eczcjK1B5Ms8FCBBW1KHeC9aZibG8X8uWGC7vLCD",
  "key13": "3TK6SvoqB4NWvN91BFrhQemy3S9zd2awf8ayULcQhRPsohfNG5LPpTdAtMgbRNeX9fD3x87LVx9YXrzRYBjsuGrk",
  "key14": "fLYW7qXbRrwKKRWkK7X1zBApjzt4Ua6uQRzrtFKv373BTXrmBHzjXXmwM8jDMhpqfxu8smNX7KQAjJ2fzKPGT4s",
  "key15": "3TnBWLjAku6EjWY44HxVrrHPeDxr3inNNCkghhf1hA98wNwDgZkBc3oSV5B3GwFqApmTrzrdxS8xF6L9V156cBz3",
  "key16": "3ho3U9NpEkRqtqQavUmmS993TyH3oHiCMHeLRYTKZUohgcVsGCjTWM7Hqh2iGXL88o6NpW2F5hLw899QWHMSC5Hi",
  "key17": "4SCyGaT9DwrSKrhVLRQauFe3NLdZ1GvGp1xYUVNU3ajcBF3rXjn6xZpMXoQpygoU3SXATxA282fx8TbE1QrorVJm",
  "key18": "51wngFMXJEPtLL2J6zZG4Tykhmd7v3VgkettQudJtXdEtAHUTEc3gfzNxfMRFCqGxgqWTTc9Th3uQEK5e2wWj6Dw",
  "key19": "2fpXQMnPw6PRnguvUKFShjxX6SQwd356rJ7gKBLWWCYtCU1bbXMVPRxah5Gd1foQHCmjzm8RJbiW4PN9gZLbiWGz",
  "key20": "AgjrDE7zyEN8vrBiJgCnSFqpo9B6AUDi2s6xV7EF8VibWntdNnTGMQtm9rcdBZTcsaa7UmgwN6Lsx1oWk5REDdz",
  "key21": "5GQ8z5EfLPaiTskAPYHcy61m84gvWiT78Qo87foekTUyrGvWBjZQhCceMAZgUtDVs56P8aWmEKyaM7JpTmdq5fYj",
  "key22": "2Fg2Lg9s7FcXHY82hf8RFjRmokpCW2Fh57ExVJ6KzxYKemuXbwViZZwAR1GyVXw4SpoH2VcKrqphpv2gGUDHXg3F",
  "key23": "23vrwTznFHGCukLRyVzroekLzB8q7N5JvnN5ppyFnkDs1Nfk2eYGQA3c2SJTdHuVGrxU38mnWDoLXJ5Ecsfx5t1Y",
  "key24": "34wQvJhaic7Rr2CrDRemY3Za91kgT191ykSgKVF7eq2zN3vN3a8DL86ooFaG4ZrSnWaip3vA1NSeryg6kE9Ua8mG",
  "key25": "2sKkhwA3U9McSxqkLaPCYjKSdZ3qrftoAfbTkanEZLkUCVtswxnSaxscLtLWkbZxAX9sAnC3AxKV6ip4oNn5T6xd",
  "key26": "5D8hCyQuhSvZHoH9SNm6wHL6DYipLsyJxU4F6McU5N1foNp2t3AMRKKCpqEuihwd3QNA9Yx2uHMzicpXLky7RA22",
  "key27": "25YcVg98Q5pwkP9mxvpfHyX6dogshTvYb4etcjb5kLifHSPEFYyKNwMuZVZgR5j2d46GJ4e8vz2b3FjVJNoYZ6Sp",
  "key28": "JmCPMV3ujuHnRxqssRSYd9ttmMVBdUvojfkijUW2wxjihKDHZqhbGTj2zLQZxCaSvQrWWPTjLN7winWDndQ9xkm",
  "key29": "2TV4PwA5XS2QQULpNvvu1CUNnRpm58jEwYyXsh8vL5Pp2HPnCtDQH3nBrTCsfmay9EuuuqyGcJ8CuKUrKaTBhMC3",
  "key30": "3RJHMzpSg4LDhkG3iGZEvKUNk6D6SEyrJVUoGocWxrkPc2veARQyWL7Kw8yPpbes497Vx23FdntDzNYP3BgXk9kX",
  "key31": "4TFsiV9afKAy8hmnnDhYEM4iJP2QkCLxaBS8u3wN2QRk1wxA1BHwNK6NF4i3kmcAX6ve9PtKrX2EBrH2cKZgv5DQ",
  "key32": "4p59c8XgRZpZtG81Dro2RqFZHhyy5DvnN6kL923Q9QZ48Wf7z1fahqxNDL8SRsVZv4Q1yeom7Tes89qbsFeDUe1e",
  "key33": "G8xx1vRTPof44LvMMd9kAh3ccPnM2vu79tKUk7z5xRAZoEvGdajkFtrfVmtPKwbCzyfGES4DZ62u2RLaLmpAJwW",
  "key34": "naWh1HiQQvR4Yq9sxmKqZiKwCqgNCyjAZYd48222TgAG9jQiNhRHbnBf6U741LEomvUM25DrnV9sfZ1B4aerzue",
  "key35": "4cuUSErZnNNzutQyk15AQ3tuXDzGAZZUZ91ffCKkiogR2zdjNKrbMCGq1fSDSvvtzhtGMHLvWt73TkYxoyCuAHST"
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
