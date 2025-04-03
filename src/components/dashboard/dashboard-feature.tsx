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
    "3oz3f6sjnSwMbDQwEoQ4tsUsfHgVXRjLWNkid96byun8b56jopY5m5hnWogrCdGrqTN7TAhUFDp7Rmp4EFkkKa8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44ZKj3sPmsP5FHMyAiNhQoAjfs4fUpk7djNZtUHQvPGPxxyodp2UWRZGqw2Po6aTFJ5WCGQYtNVDj9ctAkAxxFRp",
  "key1": "3zTfrRyHZXMJzwqJNUTJuMTa92AnpY1s9uJdaroHw3tVjsAvQ32yemPfVD91jhFpD53keC8pa4nQn9dsdU1Q1ta",
  "key2": "4tNbuNyesabR2mq4whN5mgGuy3abEWocxhh2Hk4RsWhfcpn4iz7Tr4HTFByX4d76JcJgD9MYuMCeRhdkBrubd2SM",
  "key3": "2BD441GxVyr8pYtvaJzcmf2cmsDX7c8ipG4C5bQXoiRL8vNFmBTjruNnb2K5PDF7oZa2YKtDVNkNaqHUYeDnxkX3",
  "key4": "4W3e93TZ5qxxxNt84cxBm73CcYSRdhunQcmDJKVbXbHciQY4XhrvjRrGoLDKLKJzjqszTQGtq915F8P4Zao63ysi",
  "key5": "3ApWgwaGxiscBabxCDsXjYeTUq5cCKomweJBahBwPF3HkxkhyVFz5JCW21VvMZACd2qfhFqw4QADaxqHGb7upEao",
  "key6": "5K3o4J1A9b8KpsAUe7cqpEqk2TfrGXu1EpLrXCKpX5iZM6zTCo7ke8xwZZcru7aiWtz4qEPhTbUNFPZDe9i1RYGB",
  "key7": "4M12Gut7EkGf11Q7mnDF7xQV2LUWaYsmDSPJTQjBgNMKD8s4vs7P5ybhhyMT4mgKbFmAgbS1jcXsfM1W8kmi6DYm",
  "key8": "5qWLKyZzvf35AhFDNXRsA2fPBDBTre6dqDwWZZQ47383UtyvJK2392zzYtpjR155VtdnQD6RQkFSyTpSL8C8KBeh",
  "key9": "3s6xLvKLrCUnkVnVkSbzeALgQScM6HFdXhB5JHFTVtTAjk4TSdKyKPWs7JkafN66VunJL6UJqrUoi1yQyGtZmKrA",
  "key10": "39stTs6y2GbhTHgErPSeX1BfWKKd1DWc4F76TWBESRww9pxXLTfBxG2V7sxRHHqrrSU8nnFkkBuft5u2oygSsbQc",
  "key11": "4mkEL1AbXJq7wrTroQQQBMtf2LUeEUS8kUPSq9hMBrh86yGRByt1LYSyxtzJFxRsn1ArWHyAj56aTfnCM3E7VyX6",
  "key12": "2mw2CSDsjU6xMFGZwHi17MkKgy3rey21sp8i7E9FH7ZfPBs4b417zJZvkPTby3YANtCv7Y4CVjH59SFQ2xHNgjoF",
  "key13": "4NPyLdKo8jHVsVRXioyg8HwWcFb2cpzMBcjKjt2e1fCmWV9of4ihAx3WNBxQX6JbP1wkTioFJb7EvwwFWkYabLAT",
  "key14": "2uWA1tGLBrqQT543KWbPT4mmgYph7t7imjFYqzDpc4eSDBg1UC5Qn6RWh3rpVaLhvtVvrh5FktLoc7Ajpm9DiAWH",
  "key15": "4urkTxGsMn9ZCs5TEbJRiqQsfMCG6sJ6b1RLBhHZwZotKTdqLSnohun85h9AcmMJrntsRRuCzJn9B8d8vqxbQHcU",
  "key16": "4ZMH6Q1pgYWxx64S2XHP148hyJAdyxFdGxYHB9tnrSkbTPdQsxsnTU9wZvKtR7U9DW9HdzeJoKz28422sDJmzneU",
  "key17": "5rQdE14NYNtnjUhLTH7CoLJuQAe5KPZySeoFoKrWb84M5Hxz5aB4Agfr8tTxVXofYPRwto6Y7i8ecgommZfD2QXi",
  "key18": "3hvFUdC5P24KiaPdeyXBL7tqnRc4fKLDu3HQ6fM1rmLRaizXVVks5gE6eQCoZ7odXK7PsDaaQnHbBdMwL83twuoT",
  "key19": "pqrAzUzpwGmW23kZaBbJapUUuGsPkFybYs5GXBvjSBJVZSUpNxhSCBXFakofWxZNPRAQsZgZke3PWmp8K4baTpH",
  "key20": "5zbGxD733RYVExcmnuWpckCRRVTohvsFk2oYeCSEAv4nyn1kqBiiVRWhYDwG1idVnh2iMC8anBtgdWD7Tmy1EKmi",
  "key21": "z8LicJpaW3kh6pPJfdcWXyUzgjN3VKiqC5aBhTNY8dZYaN4SPPBcRR2xuRnCCVp5LMwxiSm4ncVem8x5QgtQTYp",
  "key22": "4ku4URb6VqTNE3Mz9Wy9N3gQUbbvgg9yKA4tRCWu34krbJbNQdxEzKofgooKFqwvYxVHdx1PJfE6wXQePqum5SSD",
  "key23": "4xmgSaaHv1FyBV2fw83ixpX19WkdR9SEmMVtqnjpV1atBD18txW6TCqyPiySj8M5KNPwL3pZdMX7rWK5kreoqQtp",
  "key24": "4autrMPWtiKd52QNjEYU6rTeGPiabtMCE1otFnY9P2szzztThf9zL7d8nnwESDzyd3gzRjDFfnURRjuKhJkmnRL9",
  "key25": "55RA1wusnAYb9a2eLYhaaobvKgD6TBxGbVx1kYSeauzkXQ4XifcotLChCQY29X3AnPFgpDp31nrRkVCuVMzeND2",
  "key26": "5LaDECsLNhY17wrhxY4Pd9hbr8hGHGH9EWwAuGncPyetTeu7sydfcYUiEVqDuo8xhmLjqn31ohAS5G6RKc75FDjy",
  "key27": "61QVetJ43JjBd61jEuB1HWDfWB3kRbFBECNsCYmc8X3x8WpraL72AxYh9AwfEXMGPkRpsLZcbW9Rmu8hJihCac1S",
  "key28": "2GcEQFQopbyn5NBA7Lq6FSLx6QFzsWG9Z4JbNNTw6C6BQP7XeCjpoeY5MeQqF8PUDc9sk3vS7SDCWFUEk5VEruKC",
  "key29": "3aqexVcM5ED99Mw7X4goV942nq4ZwUHML6g5kg3km3RgwqyGtHWJkigbWiYKnwPDRoF9XDSYvrsii2cWPvGRTsYb",
  "key30": "BB1vJ1ntsokRQq7afWsB9HMkpRqoafGrRsNTWWLAP1LYLv7pdd5Lg6xGDaokHyuZ3CiHPi18KWvLVqQDe9nwzoL",
  "key31": "4zJDVm7vgpNw1FrQkCLV12k3kvTj49gxA335axxjDsWN18Lk2irBCGa2j2PR5NBx98pDmVPqQ79VtWYwQdjayjaj",
  "key32": "STFbBMhcBAr43QKtXNjTjHac7u6AdAU39ULV274XCMqTRo5UP1w8jboQLmyghor9MQip2P8LFmcFZoaPRFNEY3t",
  "key33": "5LpX1hreKE4Lg5Cor35xanLhiKi9G6LL5FP4pEwp8oNchMiFgUtHZw4WfPHdjLNxP3B4aQNWkFgwwmzgdEJTJHcP",
  "key34": "4mnnKkcG834kH8UXPun3UoyDrf9fqfQKcNd3iuGX3RtJT9KHis9w9wTkSScsFmyuZT2hfuA9H1Qs1GfZ7jau34G8",
  "key35": "3W8HpKrqbLs1GEcBEP8Kem2EJfV8v6UHHMPGqZpCiaoqjWbyKovgDLEXNj5LyQ27v5otXMmaTNo3A3qLUwpPaMb2",
  "key36": "63Zw3vW8WenEVcnuJyCFnRMmDkHcXZJzapLzZ4vkKyzon3RngTzuDuwSMuUX9JMnPNRquXmapmyJ8D5yMVQHaw6E"
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
