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
    "Zg6zEDzmTnwQtSfvcdDUi7CwcfhNiHi38bbZ6gwPGNnizfiu35wAhXpWxV714Mag2qWybfQg6pAKKeF87HYFGvk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RjEeSz2a3JdJvkd1moZUEPyv6Ky6U3boHWCZprg2Y6N3MqRLg3o4c2PkiQjMvYuhGw5WMum2nvrbeHg8cxSqxqo",
  "key1": "5GLL36K2K8d8ALrpUGu2uL6KM7kcCT9cuxSzPTVFYJak6YcgqXWcv6YkEcSke1LcQ4y5Sff2RttKfDJeVLLfzzfD",
  "key2": "3kaEG4emeHJp4Dh4EG2rQ5tQJtFMa2W97mAzMXrKg3QpF5iQkFrmpmeiN8H99YwLeDqNUt2QQsEdxxt3JjrLEYot",
  "key3": "3DSv5EwUwLcgjJk1bhwst5NS7uFNG5Cmu5hY3Nh9Lr8wkhfTXBcpM4CSMQ1Mjjs1R1AuZ2rKRQJ85J4TKa1u57vz",
  "key4": "4gio1CvyDX3QSYjEJLVprMXu4rUx9AfdvvLDoECTkKiHoW6TaM9iDMiDnwU8nTMB8Jqo2aUbbRCBkECLhys9X1Ud",
  "key5": "XNZntZqjnwVsvVNpZn2VC9yY6qgvDzZWoz4aLtkxo43bKQw9wWVmN9NQs9KUcRi13eULSXqvQFGR2EKAChbEUng",
  "key6": "2cEF7RsLux6v9kvBfQVzikXXxgN6X7Qu2EpVvvw4souA8hqttnsPg3pTDxh4XRkSE5KW3x9gFyzy9DnvLGejHjTA",
  "key7": "3gcwTjGrmHC3PusNcdg5WSEVTpNWViMYMQNBYnVNRL2eac2pWQnudo5pStaVGJvRQyZJ5CS1whbdFxnhqqLokiDc",
  "key8": "foPATZ2HJo58wubC2ws1up91p6PozR5JXY89fxQxsCiJWDbkbB62j15bxoA8YAxKVBS8ziJZLkWe1Fo1bjHiLB3",
  "key9": "3WErfnQWFzA4keoTACS9637hX9Fvd5dFddqWzzecD2wxmxgKbztg2X3AxvjAD8jVo59WtQyPzRdnMYhpELZbpG3f",
  "key10": "4VpzvsYA6VdRzzedzG1SmgTLPbEQBrLbgysokRo75sXT7yAYu4ucv3UxVTRBodTDiESBN69FV1apjZzAVE39oNnj",
  "key11": "3uhYGtBYW2Xz933ficV9eoc28P2TJhojrvWs4kzVPjxiDj4nkuUZkr69Z1KhV8JiyvLSjHpg4NhWiyvhAiXyNLZb",
  "key12": "HusxtatXwakMi5RhJtFt3JgmfQkDZT7Ckr53LjVcCLZxGkyWP8eH7XCS2Jc9xSYWbFoMHZ25CrB2vFu1NTdzpsE",
  "key13": "4WMNgbGVZ4qN7bDK2LDidXK5M4jRntbu7ndWV8bRkHPYE3BXMnQnEM7BgACtvtLyH4paQeLgoJHG63BhbfBSWjpw",
  "key14": "5CUJt8MhVFQ1ERhXXxD8Ks6MRvrQ7SKAUNU6kL5YVTV8kTRUazuVboM3Z332t6Pp1MwhDvuD2x6sCGnZXa8EDSkQ",
  "key15": "4uqknNxjsz7Hszkr6FnURYaLYwffuw6fvu5XrwLGR9o4yQ9LPXE9RuoMNmE5ekLYFyuDMm6Ey83UVkWr7xqM23jn",
  "key16": "7EyKbnua2ixwJQwBqRqwMithZvcMgvFyejcE8PsrRVWkc7tZJjshyPJ2DD1TZ2MWYdZAzJrn3furdXKHmT8Q8Xj",
  "key17": "4ioGyVpNUEUVYRLTeSwZJL9VH1kkqt9jsLS4kEXpieyvXMtmACTzi2qPRfrZo8r5NBA75M5ETURXXDFVgkPZ44tJ",
  "key18": "FiAEDbrpqPj7HjK3mgibhPeEtJqeAwHiqJSxw4a7nNzLQC15uTVSyB5MYC1x9K5fanZHsvmPokmmNgGojP1mvDb",
  "key19": "3TUaTC2ec38Xeo9sQYY1zZGgayjE2nAn31FRJVvTqnbQ2fPmAzUxkjLMUyuTmT1XHQnWhYb5dBkvYyYjhTopiwv4",
  "key20": "2JUPQ7MhjZoGUnZn8ubfM1MQBpM7GF3mMDqxPZBJf7KxVowRXi6t9Xsqm2xGzveUmTkQYN98WRS1z7pQFp3VrpgK",
  "key21": "4RWR38dUeu4sRvr4UaWxkCVA9YbFxAN12dk6BxVteSvmoe2sonGaFn8REkPa8J8YujxPNs9BGFoCF6QoNPKF7oed",
  "key22": "4xzE5hEH6trWqLTY5F5rQ8xqqpCCPrvowRLYQ2K9ymNQV7B2HC4zrVJa5ncw4eWBGWWqrD5EMcso6CodRrZhz5zv",
  "key23": "24di5RHYGLKQ5BECovSUCZWogVURhy5UYHcYcM3d6U77ypA2CSoijvh1z71huqUEZSXXVqhqQA2RG1HJH5h5rG7R",
  "key24": "RjfGGCc5mvYA8Y1nXeF8xAsz4qwyUidT1cjqFuCYoVmxyo2XEoB7XkotUY4mVPznufu4MBuR51bKsJjRuR9bwfL",
  "key25": "GNSjHtenWK5NkLw4HjanTT9a8cQK111Xmi1o9FzQKqhgwXYXif9cxbdMHmo3daqBE329RaFbTyCTjSej2YS31fd",
  "key26": "4XxvXPp8ygNX2PiU8g4Q76vbSHspf6MeN7JwDUAorxBbm64fq14ERRiJknzSg9pngiyzrTdHToeJ7Zn5U6DQexkG",
  "key27": "5du7UqPLmqWAitk3GpGVSX1DEzkfwdYYVJTGZy5b2Mf3MGpQipADUnw7TVvXNrtCWe5WxeQmymfKcnT578aQjueb",
  "key28": "4TieJuftSNqd5MFQtk6No2SvZaihJNR3MdVjd1RE9VcJ9CRNghW2aN9dKo6SC31ST1E92a3n22ugnojUD519xZru",
  "key29": "3LHg5Jj1PH4UN8NWbiVhTwq1kcW2dH2HFKJ1JhpVjhuGWJ9PahoBPaEFXy3SFbef1Ryp56rMFU2t2ACTPZsFsBkQ",
  "key30": "5bpw7TW9ZJSCH7oFM5yAnMYxmkAc8JZzPLTNbdkj1qxsmuXEzxTXRiNG1TpbE3cteEvQzgw8sSonEkD9VpXUoJR7",
  "key31": "5cV8R7sXVJUTAUHmCVzCSDHJv2JcyKHu5pxFMdkNpasWWMRBJ5gPbmhAuPWvdtNYzU2urGH7c6AEaDX3FJN9Y1AH"
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
