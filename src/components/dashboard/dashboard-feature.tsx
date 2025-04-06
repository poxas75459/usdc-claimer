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
    "5nk8s3pRUtVDzuZ92nXuDNuiyz4xd1tQkPRjtpCxyudoa8vtbmPa3JPcCigyJDz8fnGGMvStwS111eTUTU8nt844"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AwxEaR8EZ5SdMj7Le3svmg7YzkAUQXt9EWj1JLNNVCgj9uUDUF5okpdFHf3FTyQbdDf17CzrDsYjRTfWqGgi4X4",
  "key1": "3Faz7HmMGGAf9tTUSff2CaHkSZxA7nmuLtiH9qUp3xyR4scbEKwWjHEgSPmJ6EQeXU4pmB5D4xJ4VLRBYEJG2Vkv",
  "key2": "28A8wAA4LavX2UHeLESLfgkN3q35XDqyNBQGr6qCWdMiv7cQZVkY43epbP42fz2gL3AWNnCR83C1Dhj5tPKbX2aU",
  "key3": "2jK9CFv2mfTkkYHFLUFQX2BXQmXPchLfgf6CUhQRDqLaHmEEowQj5g2ggyvSDVoMyb37j91SEYTUp6fDBhwAVBV3",
  "key4": "4RCBWwKrUPRUaBvVdV5weAgMSCnxdsqjbiL9788wKwQs85yS7cxHQ2ncwUZR7TJcqNcBsSPeyPt3WMTRmahEBS9D",
  "key5": "2HxNNCCZ6gBph6yxQBvMuCF9n5FKofnoR2coeBbnNCVgkAz7FfswHM4ECx4BrvtYS19AsZ3ri6Bvdu3NX4qYsL5E",
  "key6": "2RBj2hvA3rn6QTA9Pdiyv4UGu2v6XGi6jUyQViqminMTfjj92Yeuhgmg69S7C4xaXorQjCpUTYQVbokQ3jPStCUr",
  "key7": "3yTfCdRr47N5c2Htdw4FB8j7yg5aihTBW6guXW3paosSdW4kVKRKc6Nvs3eFYnQuHjSEEdPkcDTGmf1g7NdGji2c",
  "key8": "MAz6xyj3SkjLnfkQ9q3vYrLsz3DjtbUHnNDkPtuoM6h37pLYxUXbqG8QZpa87XnC1h1oG2NSzhrdmXg86Tx5YXk",
  "key9": "5YAiPFsWmeQrWcWcEYLCCcUc7Vf3JyGyCQzAVdtv2BRpCAQz9TAv5oe8pwFEdkasJhmaBQFN52yC6kXSKf5Xbx9n",
  "key10": "mGJr6V5Mq11aKPCi6jRKo2p6CF86DjyHs6QMWSTFpbuihfjipn6eoCVS4Gk3sUCRTEQeaBC7DBtrNaijXGBfmLh",
  "key11": "auzyMvrbifuUvrgt9NrxNvuopGaXco9ETdwNEBx3pnHVrdpFryeGohpnbCgkX1hSBowXcnxjZ4DXRcrbUQZJ8vk",
  "key12": "2arRrCGXnTkkXGaFb8vTfyeURCxcJ5R9kH34g6oDH8HrAyv6f7fAquWMzU5AH79SwTt9kgSj9JRaazJ2oKP5S3fG",
  "key13": "43RFFfZi1dnkAmeRewoH3Tq8Vb6UT3muZXtusSqmsrxEVNXJvpTFmhuXZDZw5eESKPm75C6GieJY6jF31yPRVVPK",
  "key14": "5FVRuzezij7HQqTnggcrGhzdHURNdgnrrxnQzKUm8H3YiauZuLBbVD1uBG5JgjPoAJ3Bx1Tzg9rzX2K5VWPe9RQV",
  "key15": "3TshzXaeYUxLXdEwXuVHEReDZrsL6fPBuJ7dt9QxAn1vaQwjhss3tvWUcWzptiWfC9uhxpLvYUs7tQvCHwa2Ncgf",
  "key16": "3Rzx8ssM8fifi7DtMNGfvASYAzmziduT3wstj9R9dx54F1UyyW9qad64S8nvfZPYN4Eggjn9Hqag7M2kdnoC9wv2",
  "key17": "5FTAKN36i4SWwR4qBRfFGPKicPtnJs5HZvG9raGTAPpdne8htACKq1uaFZRkBufRZCY7tpierQUF39HMpDJiZLg9",
  "key18": "5Tv4UtGaazKKcK5J1TudYnXLuG2HPWCRDFgP76jS3AZzVYKbuGrv2Ma8YeqXNgWCsDETF6b3iwxDwyYEvGdmaK4V",
  "key19": "4P2KSqjRnLaEqFtnXhjF7obu9BovKYzn1rZZU8eGo1QRG6oCHuAywfhjjeqnc1RWwi5KUXegwfdmJzYUSdo6CR1d",
  "key20": "5mupviXcNppdZxcHdTVtDWkyFD53NQ7eCw88Vkipp7k8UK5ns3PkjPcBSqLVvxRaWsu9sTcRCRk938RmBRmh1rHf",
  "key21": "4CV7aa4FyGu4c4wQfBWLdVbmYCPpiNWmsHpMWisVJKpLNf3pFE9sneB316bsgVptjjs738oFaLHuakZi15uq4etP",
  "key22": "59NwjBYfmrMPmq6i61dvYHtyrx78Tjb7q4cexAk38qkXayhJu3kna286uzypA3wvVPsFx9VPAN4iHJF6T7ywMb9a",
  "key23": "378A4dJikPQfYhedq5qLckorojtt94AC4BzGJzn8faNr2JmMMd9UZ8yFwtzD1X8gEtkQBRESag6gY9PmZ9uaJQ5p",
  "key24": "516bicRNpSNm4irLWMqbph2GVo2Wjo3WVRdfSWN2i15CGJfjwkdNRyb2pMeMJGEFzbL9SZqqciak5W4sAyoHBWGZ",
  "key25": "2G6RWTDcBUsqXGxcnY3c8eRgiSkYhnMYBbQPJxEQ4osXsmHBeg3NBc116kGvPTTHoC3Y9cjZqjWEeogUaGNMkA2Z",
  "key26": "bQcF4Q33EwTAThpw81ftcmkRYZuRifwc5bemEGgALDYpGmZg3GedEcYx49mc74QRcH5RPyWX15gRtpkyhDjXDXX",
  "key27": "3BEHkf2UDCkPHhJRSPuLnnvHF9vb73Ar6uYSwQHoNUXoDbpzhMeVtwwimVxkmAUjk7xNnUpnHR2ZziHGAp7kAZCq",
  "key28": "rAD9yvSQ9CpMDdTTwspg3vGokwF8KRm8DnQB5M9UrQJPXnwiwtakhNNeJ3u166T1NBGd9tg78AvgEqCBwAq3iRu",
  "key29": "2kErPCx9bNM9GeXLgeRXmMpYPe3Xjij3XgEfuv74Cyb3Dq11kKUvS4f47KsHCg6oJQFkXGJaEbXdiWSdUyGMaBMD",
  "key30": "5NTuYFXmrjdK8nU4FBdw7JAiCramFWk8vvG1rdmAhgcy7UYxTxNfpiTJAALRVbjRjAW2YWGtzYS9QueG1hdTA4d9"
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
