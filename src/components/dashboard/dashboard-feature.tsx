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
    "KncVUYPSh7RW4rYh4saema2Z9SUyDCSeAa8444Ha4hUKU5e7RiLjbeAWckvk2hPfxfZ2VfmLDTpLhszMcLynCrA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Boqv7Y4Xg2KJuUkx4tanTfmsnDC6pWgMwR9u3m7rzuPgdX1wVw5H31o5XN9D1CdqrerQzTxTaBoXog3rv4RLzEH",
  "key1": "FvRUbbnLJvvbUrMiGC4CCyvtkaMMP5TGEgHoKncihruPewome1csJAexojekSEA8X6caBQAUkWerSjtBZyJN7cc",
  "key2": "4ByuVHbH9H2w5PnYjC2azBqtYH2LfheXEoXiUWddC5dcjr4Hvicg5YKzUmYdCqijuUVvHPUeLdTpSV5oivq5TfQa",
  "key3": "2TpfK74yt5W6sv7xGL9n9iuivqDj5XnNWcMMkb9hnn6qpTD5dnhT54213mAvhSvYgXu6iuijG9p8vPjxetoL4vj1",
  "key4": "ikYVe6ec9aYTeLYUDaBemUJQzyKk9W92puzcvrQDLNVLEEcobuiD4oda2AVuyQQnNau4dJ6GsBuSW1Na5DsYM7q",
  "key5": "5vKZFH7jLBcMprtZMBAoXRFjhjBJgESTcD8EFU6VfEtWjUqzNuxGtTRQq3At53FNdEgwfym2jao76naZD4B1kgvz",
  "key6": "3626fGUnuv9XCtE6LbBQ5Dkcr22tsn8PptJuxuoimnBPozaYoL6CQd8DeteGuWdAdrjK9o1Vo6UMQmHVZL5FR9UU",
  "key7": "E6BfGqVrVVyoDdToiSiHStEtc6eTTQWNWeHLvfjRcVPmGKRie1ARPEasrJU5Cgk6g3uYBCqSWGjyAnMsxeYGzDS",
  "key8": "24j9x6fLmHhVzRgyUyDvmBssVS3eJyuPs5BD8DuJhoSmZZkz6XygchaRpwmGNYhqoYvP4vuvXQaPtGRMMHSs4KXg",
  "key9": "PCD8GWJRRRvSgskJh4ESPRReoYpJZ2CCYEJYn47aSN3UAXWqt1YbzdUiciUPQaGgZdUe6vs639Z1JhkEh4Jk7GB",
  "key10": "4YZDeRknZA8BJRutgvKThgbJnm1QhVcn7fQKAsjXJpGkh9h7iLYtDGzkptwTGVb25X6HeuyNCigKXynZGkzz5oDa",
  "key11": "54mvSbdfbyRrE7Aa6K6z1UxCCro4sWt4qpZ26x1S4HQT73L8WbX8kq5vQCqXQRFRQw8VCASj7Fop81toXfEN8HB3",
  "key12": "vkcbeFZA21EUBrJekiGesqr8x7T5VdyNh37HJeteYWQfCoVLrUDNJjkpzpoJU7zpj38kemWkRy3yxDb7REBcP6e",
  "key13": "4Cfn3bG7BULeg4vCn4RCDbXG3YW1ZrWzopkXsHffvfpRh2VPPQg3YUozoXQVGrHshoxCRmdaMTFEP34nK5fPYWVG",
  "key14": "5zbnBK5E9jMnDsFiSVcMX1zjCrpwp6iRafE9rL7KahJcat862PWP55JQVixLPpYaQsBKjAFTVdggvMq9WTjejWum",
  "key15": "4b2N6JhWmXGgtPaofuYzJcti3QutE7YXpAhzVRYpQXxTXSw6RWwmgmpKn7T6uZLn1bzRrEXHaZbBXj3jKj5ZTsUL",
  "key16": "44y8KykHFxjEcBm3MbThPZmTy7kyv63diMZdmVKmVcKVectk4x8yBLHcf9JgebrEtLvEd8PwK4EZQS9J87rmpE2G",
  "key17": "3VotZofPUd3mz3opx75zUJ4uBSv2iUU1FRF2su1hYEfAcV2QRYtfsCnMsVhiEhJiqE3eVZrkQkMNEHtgS9W9PXUc",
  "key18": "5EUSw1k3bhuwz2D75FHywP3LeoKJnDveYNYFMzZ2Wi3DHzKRDBa7sX4pDLeLiiAZHn39Z2LWWtighc8f3wASmW5H",
  "key19": "4drRmuB7rmW79HNDkRwiqxRxmksLpAWJxqoHRaP6yxBseappoLs4qgNPaRAuwtzVQLyREsfv5vm1kQQ7HULuHudy",
  "key20": "UeM8yHkQgBA3YYp2wwm9vEcsZ61jWZTTAYcnumHMdKxx9JSHQb6cPSXhNJSM8r484gwSMS8wPJQkKMMTR4a4dJQ",
  "key21": "4susJZ5pt57Wa2BrtjbPmogmtKu9imKtEkEtpWCh2jxWgAxMRXqv3eQPfde9aok54SdRLhU1yHDnp4DnvfbhgTHe",
  "key22": "5uaj2qooknPF465PFPXVfTPiwf333yZqfMqpaLLbnoV93yup9hiUBfATnLj4Y7HpzL1QgfwVBHGpk1TN3RoJnaDY",
  "key23": "65p6QN6PymJLshwaX9B9SqY6jNUS2SQdCXdbDP7rbhyxQ84ozYGYoV4RUehUBwdkT1UM3e5BgP2twMRW13hLAtwG",
  "key24": "2t3N2nGEC28GGi3ZN54j3hq7QWnhJYJU8ZEhqRjJPrggjJw1iDG6pDaBoPxoaMdUKvtyFQKJLZavwfANnQr7SYXv",
  "key25": "46t7UQrGeRVb7S9vJt1ED2WhGauqdFHgRSqjvGSu6xYC8qedCbhjRiXWQn6weC2J1EyiMDpeDDsSTQzrtizCcazB",
  "key26": "3YurDWyg6JjKmGjugsy1Z1GLumyHzJqtQmWqTFU3s3V4Y1eFhrzwX7xFsnAjBeyfiDYmSaNnEWUBEtwkgMeokLNK",
  "key27": "3GsvvoheBntZdbUvXyhxgWsXXdLVPoMqnYasBobfBgBL9K8PU8jLPdkPwnjMXJpodS7uAzyrXAHcXepgW3QkwRro",
  "key28": "4fX2XGJXdzE3eBB3PfkZRXjxAcGmLR8NykoasCKruC59v26GVQC9TDZEiSGaQYHRm8eMjpr1oCBkdZ6fSz64vdqj",
  "key29": "5BLnWRqaZCKGc5WJj9yHfKGsCMTcWpmC3wx9Yn3oEg1etTXSucFTybpEpMvb7V2ZLoDkUTYZTsmkgdj824MbRUB1",
  "key30": "kUs8MYiGqoAN5spSiHFMLsSoGNFSGGct6NpVSmD2ygqPZgknCFXusm29sQLLgDNLp3pNoraeDHszJQx3Gyki5Q4",
  "key31": "433PuaHZ8zVrRbfDQPJ3nVJG5DWpUQz647XF5jQYD5cyqjRnyKeDcetENtPv6Nx4SCLnUmMQcrKJEg7AdsWbtJ5",
  "key32": "32zsfK9BLoYijC8h1QBZci3ARi212rQMn4pixkT8HgkzjkATMGH8EZAPsb9iPAJ3iSvKWx26zfrxS4bcxkNUBewW",
  "key33": "5FLQfACvFNsDJPEwU1j97c2cGEBn8zdwoLdnHNSDD5VWxd4RH4ntVDHskMoHJwNWKnXkk43JDf53kqvMtdbhBjL",
  "key34": "5KaeFjNpx6UybhWyYsd8Lpkf8UxqUYMoU5UgVTNxupPUpvfRb5Ms2cyxM7GZUm3J2op4wTB3HR1qNP4K8mCU2pNf",
  "key35": "3VeVA3gS7LExX349kfyvQb1znWgcoeyQpcrotVkFpdn76k9D4MoJaYw1Cusnxhw1jR52WN9dZ5YajED7KNEzN3My",
  "key36": "4JSGBHzdGFR6CnWGNEcgAS5C3wmycKmRMgV36BS3Bwuq3aeF5N1DCqZCuGbSGTxEPm9WpfS86ycb7wkEU6NvDY7t",
  "key37": "3drmRsUnVQK1X2V6125mufmKVJEVpEjzaaf3LqreyZ3E94v7dEcmpa656HzGuEi1VnsHRK44mzHat9kWvMkEryuX",
  "key38": "4ZMpyi9YzutdChh8pHAzRDb4hWUcMhieKsJbBsKAS1VJuoaWFZF6vQkB8kjQBo2ZTp9bhUiRh82Ca1K3qX1vp3WZ"
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
