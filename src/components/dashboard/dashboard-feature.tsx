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
    "5ypiHV27vtnHnwFXppniP5UfPK5kWMkxAnffwFmxSjN9s2Nqt6G2CnpY5Jgwv5jjQf9E5xysQMnkGsWhJEC4ywVP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pF9x5yY3MFBJwbdGwYniDgNZtG1Qn7KLzEh4n84nPyyizsKpZMmhSA8XT9xRAnyK5RSvNjJgdyTEbXVje1NwgY6",
  "key1": "2pMgfcyFmRkpm6KyUZnzVmav8u4SUicAp6fbUVcCsAjaXVdsHVnPbyDwjyPTvb2ziJsJuzcyEurRzGVMnVFp8QCt",
  "key2": "64aXn4sSqhDvXjEaEpvihsxgpuJXKfJfxbC1ESdrGKgqG57nKToAaXBKmFovwzJY8gDRD74DGrZziNvwXXuKN1tK",
  "key3": "467zkky85eQ5i3mnnyxTdVGp9vDVb4bcru5SvHdBYoK6dLPRdixJ8yNunSMQuvz2VjK9Axa9WRG1RyCz1MJE4noi",
  "key4": "3nJx56gCxnKtm9jUtBhxoN75SF2qazRvTMZYQT1nRnVEhvMScZdMLTqdvTdd4588iPYg8dd1zo7QgywoiKg9grPR",
  "key5": "3U8fXzs4ta4V8a5AaQZYaAxt7LfYB5LYC6yFx1TSdYUgTTESg614hKvHPCAdXSkW5st9WAYtSknDngpLUYQgWQr9",
  "key6": "4CcvYswXSVXaBEBoP69jxPwKsQsGkMwntkn6XGfUVRWXDU3jFUL5Muw3qEgLKUujWnYorJfeADi8MSbjmhTZG7U8",
  "key7": "H6HeHnQmxUwGKpWiXcaJvScVGmUJHR5892wBdnEGDnDtP19UHZ4JRcAKSXnWJpipwya6APmzCVw6ZCDKuJuJxr3",
  "key8": "3SrSPD1EL67VXTD7r9bMu9oC6tK39RXu1psM9BSiTBb9xYGhukgGxF992uB1LkMi3Ggz93VMj8vdLdQMN1yT8r5C",
  "key9": "2XnMgTy79ZqYfDwk18hyiPcJ8o35YwfAVd6MaqVVqn9oteLVphAm9yHUFwQfhoCCjSLggpuGqmJy9yYKNfrNnAoj",
  "key10": "BpkxF5RkVCSuJrBeLnhpD1xg137KRdv6eRTBAZA2p5QhBjkEWyCwsfpKR2xxkhMT7AUMLdtasduwwU7wJQJPJET",
  "key11": "4mBribUTKM7zKDeQhfSYMMFxBAFyjAwaNMPXKB346HRnv8a3DE2kYK4SPThLiHZjyPzs2FUCFb8cRn41Sf8W5HZR",
  "key12": "2yXcBnGsSgTzZr6tAR9SSJeaW3QQ1jUDjfqynuGzSUqrsMnFocCH15zq6bPvqmyPL5BkbeSZqqCDcXgX6LMDDyXP",
  "key13": "38GCBMhjndbg9cu74eGnHXTva7jWogF4KkqHQWXrSCqAZEr81xJYEZ99NWcmZs7PNN7ehnqqD6r2FsSywyJEhsmw",
  "key14": "UH9LT9ye5YFomWRMa2TQCTvadW25f4FtGmhgbUwzBQ8cioixn6Qm9SMSFN2ZuN3iw9KAujwoGnxefxQT1PdHeqY",
  "key15": "5w3nLULhqK8cK99SafnDDtjYFTYJa6MpsZLVEwWQsJqEEg3wTqx9QXtDfZMzESYCXCJgScSkhFonnLachYuQrbXy",
  "key16": "5WAeukb5YNihm4pw9ezoKCQVADErFBnPiB43J8pqZ9YZQn8MuvgBcaSibSMuLfaJmkKjC4vxHDc7mr47F76B9phh",
  "key17": "3evHhMwLwgwYhwXerKcKa5FVpvZogpynMtRPmxAALu43t8xpon1BjDgD7scLXgwDed4G7gWYWdKP8qNEhAAJrFFr",
  "key18": "2R436wZqFBTNZ7dvYNstBKgJU42iQa99DEvGr3DQcb5TGmEyqREpCs7AteahysKB3dDgB95mYyacsgP9sSx1VsRw",
  "key19": "VPd5RRdYoihaTVmTFjRk96riBXCXNfMLtUjJAqYUfbEJrQHbZ84YDQU6gKQWH8K8G1aUxHqp4cYLLQ2KaSJqYcq",
  "key20": "57KmackvnRDrrDukoYa3A4DHbYmCXfkWVFsCXtcwbJt14JKYHdhgXdNK54nkK5CrSNDEMh5wNB8Fdvk98UzkDKeU",
  "key21": "2GicBWdC1kLV3q5zHmzMsR7RjBS6jNGwxrSamWyFNtqPvFic6GrVKfu1BC5eLL2c6n3wC1J8PaAtBwkoBnZzhFyC",
  "key22": "5sTnqyTrmkNCEyoRNLuMeULS84dnuc4LuGcdLx1BUftaW3meKjGy1hrwxZzxZrpWbbiv741GyrqW1hPgiYm5NEoT",
  "key23": "22zdBYVCdTSDTHTmD1URnTYXYcArwwUjJ7bzaWyisvp7a2W499LbbUYwZE8nQGHPYi5F8mUFeNWqRVjG9BimRM4p",
  "key24": "QxYUAK9qAYeoG8F38EvUUU1xUT5hRMA9gJaGoKngCSoRFbBKwF1AyD5p5JhNkvVoVMtfEdZShDMspfSFjtQh18R",
  "key25": "DpvnEH8miCTnM5gvqwdiNATJHhY161u277MshYEevnPL394nrF1KC9TS6UxRosHYd7vfiWv4HL7ojAWwD87RpYo",
  "key26": "5ruCv5EeS9w6CqHH9nP4PCjnDGZY6mYr3wbyXucTpzHsVSvMFANmzinVNa48UrAYBuPEpc9NJwaK2iv2MVDtF9bD",
  "key27": "JU27MDyyqnan3QQQ6JuobcXMBsZmb8SFM2XcJ7WVMBDDM2JxKArC9P4KdNNVvTc9bcky1EyCHS7apuWrRyZGqJ6",
  "key28": "2kYCbsB5AgWKit9fjAtRwXa2BUkYBNtWwLHuRZ8s2t6Bwfg3Exd816zU9wnMAvt7TiStJdm8MQ2qKv3FG6Nq1fpg",
  "key29": "3KHShTjr5fSxcEMYN4y635iWMaZmYhe8LSx7aS68cRGKNhTSWok9sH395iLdmmNRak3LdGs581ed7FA5oxWVk8RD",
  "key30": "2R4i2TtRBkuDXcZrnS4T6BFDueJRq81ncnJp2BC3G8v9CRXqaKEH1FNjwX4XNsiqasx91sM6Tk6VCwPAEdqJQqht",
  "key31": "2y5eaNe9sANQkGqT26sT7jZpEsFJEUfRPmjq8rFE84U4X7RfCyRdC5gVgrz2x1dcripLRdmxr8nUswwBKSQX5vh3",
  "key32": "383q62hjbDx4PYS2HTitvUXwQcRjv8ZmWbKTQmpVWaYtcD9cyKZDKVCLm6wnc3e4fT3ZkWwh1L2gBFE2Tc2ohNKM",
  "key33": "5dH5pKj9RDrzNFxrvbEAMBKu22yRQL7nWNqkscEneTYK1jckF6PLGZKusQ3siFGUGgzXWUd8SXTpfRJho4ABiH3o",
  "key34": "3psnE7BHjT3cFcRp5SzhBt2gqSKm5GuEWs8cP6roD2Ugo3MKfFV3e9zZvyW4Qzt8eqXNC38uVEEHBTt83QxRtRZ3",
  "key35": "21AqqJiWJFW8ZyrSqjcYUNaWfxHRixmW5vzayDtPyjqsDkATUFcbrEsak8yP2b7uDLewRTdEpy7DmxAX2VKisv5N"
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
