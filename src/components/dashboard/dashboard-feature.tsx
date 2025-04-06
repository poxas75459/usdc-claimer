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
    "5FDBBLogiP8PNRGWt7pgdt44DVUMsRf8EcNPb1j7uUgn6PHSRLPCinPA8ZUSJuyNSaQpLSYQm76BYCs25oKPq1BX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51Sh1yEmc9AWQ9MNjYdzETjNDZEM2K4X2RYFyh9PcMmbcbDUMdW5t3gFmTSUZbcYYq8fnEuaNzxPhYm4ArmiV2ZQ",
  "key1": "3zHudhbjxH8s8UUzKN9w8cubwmL9NnSgJx46pJX9SkSpLEVEG868TAc8DzDyrUg65N33c8m4XHYy6fgYLTi8CkNf",
  "key2": "5SDEagQnBcgsUHF59RSyG9kM6jEdUXnopULA5qB5poS2F8HvggbAuR4Jry4RMF4r4ARSnxTbSAXCc7okZntxsEmu",
  "key3": "2kSQr1jiyUcaUCczC6szuhVCzkZGKKnFvxesFBq2YThHHeY2xdyXJ4js9mto8aQvGCASaqEoKMxpYLyY94HFvJMr",
  "key4": "3m2BW3kifzwpTZUjUk1Nb3wCwc9f7nPipfEwJ1RiRDb9Np4nY1f2xqNKv1X1xdqEGAZL7rwVKcLXigCBexCvzhED",
  "key5": "636K5YbRxsBWXmdT36zaztTP7PA6hVkUB6TQRsYkHRf4x44gDmhkQN22Lw1xWS6TioEUcT8L12H3PS3UymNXAgz",
  "key6": "UaX9ibmoNBDkKGqCQn9jFUQ3SbnDLUwdq93J7jStRSv2HP7X6oExjQkyDffPKwNKGAwCbby19CMi84xGMgPr6Sw",
  "key7": "5iWnUrpMoN2BebqbRVK3JK7hQ58RyrGzefpXGep9oqA8R9msYEaZYiR2KqcxkkDwp1RxyeeLjaaDqybYn3f4AhLM",
  "key8": "3THqZb6ERN8EkNSSwxNe5aE8uDrdLNU6JA39ZT6SWLR65MENGsCmNnUhybQFmpBp5Hh7bqtNA29uXnXVwQqxN93D",
  "key9": "4KqrVN6sbkroYsXMqMo7JkT9bXbFpZnTARYjZN1fXs2A8H1UcsYiUTDycVSeMeFUr5XkaRzsajTZQPepZ1WVwJin",
  "key10": "37AZSMqmedgZcvjMmcUv4sCBAGphxnW81jXPDUP5N69FWv8SprD31RoxBYuntyDrfhpcXP6CHk8NmZy2cNGV2xMG",
  "key11": "3GmREejcbvnrwfszR2sV3PYUGgULtnQTkKAbKkMheewteQw8sHiTLAqX5WHBzphc6a76pDEXEm5PUUV9khC8CMxv",
  "key12": "48QR1ukAYJt16qB86Lfkk1pJ3YEHrSwEVGasHV9qeL14uVJgaGhUMombMe6fQv4otBEzWU5Rzq9qJPrQkVrrUwFK",
  "key13": "4W2g8wHdhnQECDhohy5vPvP1MVHrCx6HyxNMRMXkUPXomd2pFGZBT21ZbiZrMaTenfea5tRbboCBdAwy96viTMS6",
  "key14": "5bpxXZyTCwhbgHeEYHWoLQWTDvmRDSk2yxaYPz45jporMDFcAAnvyUJZ6m6y7WuPpdDMAsk32BtKK44jc9Qr2S37",
  "key15": "5aLTThiXkuTpEHCcZzuexU7GcuEuz2zRRsh4G82qQ3rwL6jKdnLcnDNycqdh8CgMzf9pcTHQYMUQAHKnn141pgoU",
  "key16": "4ZW4jgurWnAYdaTxMa2n4UaiAALUqr8iVW68cP7rNWPjLTLB7qyuRsEjTsbzwAc1pHQVFUbvfavLrnaNUwZgVa91",
  "key17": "xzphA2Q4kFEYY8bXa6MZksKkVmby4Qxtjv4gGq41fARp66p6shYsEYZquM4vKp8kUtiLMJdpD9awtXkaod3uDtb",
  "key18": "4J4XTSDCJyiwHxLu5NoMLM4zoZ4MNsGHLq2zwmYdHDmXsnyRGfFMNYMM5j5j9uwgzmrFCvbG783Zii7UxuDu5xMH",
  "key19": "jYFPdGasUthKFYQCcM2DLfBthZVYEbZjEQ9bNEu9RoFZe4VjEkMMrgUZNhLdBgHxZ18TBLAYfHpVk8TJwJMdzgj",
  "key20": "5Th3bzj8tRZfFvrVjDfJtBbQXTAvUtwsPMuNz3cWVNJAC2oaeCfLGf7vSTNegvQnd42WxWrgDXr9PDSDwkbKx6Mt",
  "key21": "2uPbb7uySxMGRBai7xQjjQmBHyWy62Q2HiMxvjc85BkCUnPtg2SuseDxoUMJdNdC7xjVvmCWLaAv5oM2FxWahawo",
  "key22": "4Px7wmfkpZbvapD4XWJv8jXTZgfSdmSdUpvKgYF456YatSTP9kYEfnZUzQz6EFbpDCpexbgMBLUDT3TxuCndWU7U",
  "key23": "34Mv7caZD9eXiYT8a1CWUqqVtLNoHMY5mvpXRYeG3U96UoNdX1MAg9BS5H9LKd4LzVa3jzjwsR4PexANWecBR2R7",
  "key24": "5cZSHArzz55dKh6GBfQ4We7kqotTfK4cUcRvo2RV8FJp95cSnquwLQnkg4Xuu5sJMGrJaYcNeCw3CuYtAn22bvZN",
  "key25": "3KdEQDhQPRbxvTpKxBSFmanXNP9XzmE8hJ1FghGeWJSRvBVho6x9ruFJgBAvCEkJUsU5Kdfesqq1pHkDdNwTDuBW",
  "key26": "KvPZ7E8bx4xDwFJrWXg5Tz61zcSFCPf35npSD7PQdzHVAaoaTcZGC2UNdGVfEvjuhsxShAEQcwLmQPdEW8ksnm1",
  "key27": "3GWFYM1kPgQFo3iJHyfDSd1KwuBocpdjUvxw2ynNseAYNbuhhZ7o3fe2bJGsokAqGbUCjHy5uAvpni4aoVkowBay",
  "key28": "2BwLn7oL9YhVoogzuNxDoryT9BuRGMJnhrGW9frZDViuB52dGdvwTpJ9mfSHhr8PF4caoxi4Rs6z7j7aT9PznVFH",
  "key29": "4hxBWaLuMV5TQtatfc1RAy2iVBKQeqXYJYCtDvKsbw45M6caJNMwmFQNCDfARGBJvMvbVzTf3PJRMhTtXueCw3zH",
  "key30": "4KEKVyx5FXMLsLNP9Rsp4mmNe9ZJ6rx2wpcTYVHPv6ZdcGejnFFNfmk9yhkb6yEeabZ4yjRJpWSruTjxKeZQ3bBM",
  "key31": "3NSwnynGSzfeH1kcVArJaEqp2wxSW5iqvvi9Q6bxzXXmUbtabvLTVqVFYiMK44KJZjvBckfKRUaQ2qxdY6dgfJ29",
  "key32": "VT4DVwta41jMsEkGn9AaH1SmSRDTbZ5SsLjUKM8ur4RJaUaE4JfFHfYBLbNCjhSMQynSZoyqTy8hosPLuFUaTPn",
  "key33": "2EqwU5YFv5gCPpFSUXvQ7XTYACEwXPqLZmU8y7TZ6MVk39vpAfZECyKKWsTWEjFS54bRi93MENTu8JLRUFmmexpa",
  "key34": "QrnFJCER3mN6fYZCfiYgss96JRZNisAXApBFBAErgK5xfVNtBj5UxGhqN4jj2KsgXttgsuwgcdaV2JvR5ZGwga8"
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
