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
    "5S1Uz4pV1H9KY1TBaJWz5mW4qa2GPNMeQ6abWASxYFq6H1k7GfGQuPrs8ntymv4T9FjJakGjNx3XSbxoMdjL6FjU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q86jJgt73AspW52BdZrJZdAWcfcSgXZeh5MNgK2kSsRbz1jp18bs6uownMEiTMWLPaUsmdL62n3okoKvKctumQP",
  "key1": "21Dy7rqa9RR18BBSwSheX6pxT22yr3ta69AKkFUSc3DrbStWd6NuRo7nYNFKy4EHVreRoRaaQudKibLcWE1b9LmZ",
  "key2": "esReJMNbQN68r2D3d9wJDo4JNRewfR9RaL2gxzJ3Dtr4LRjMiHBkgdefmGGmwXysseKsq8mikMaajZTsdi6ZV4j",
  "key3": "3Pso6g1rqXMWiUXieCnQ3cpw3AGpQFw8KbBVrt6sRSRsMLCmAXxGcpEFBXXu55FKfyhGUQ8iVXtVC35Nxtc33RjW",
  "key4": "3uhUShGG3ZNKJ17YbhfdPB576GnxZdscRS4sBMxzy3wJkBsKduyk9d79ASExH12ShJSuciG1cYHdNV8T4M892y6f",
  "key5": "41rQyFRwzEcs7TwLaY3urTn5GdkKA5Lmq4VMgtL3gbgbi9TikSkiB7tQX91FmpK2LypbPas3cLjsGdascLbA5Sey",
  "key6": "5VyeDPJ47EkhnKXZnSCV6Njr7EcHuK9xCrzB4tZcUonUVVDTva9mbPkqJvVc9rCvzfnGu2KVWKbjsriHQDndNvNx",
  "key7": "4qDJmackFzpMKApn5wu3GyqKbdmUZgVg7ACuCuLxVbowA9U3Q5n3P7CtUSkyGSJ1v9EWFurgyB53HMmvwPx4gazX",
  "key8": "25zfoyNbo85kyhUV6hnZZa9uDfnYcoKpcQj4rBgmdxNPzxzeortePJoyKND2DwJjh2hGFDhjgLNyXWh18Xx1cBjD",
  "key9": "54Gw2kS1LfL1Da9kPQprrLkv8EfTW5Ysu5rxdCeWngobjnwUzeSXUv6iJbe77KmXo4iVksBr93GjfVoav99rh1bo",
  "key10": "2ULaBepwGvT3rc575s3B7nwMCmcB43DEWiyRfVbocnrapeQwzjXsmR6Z3LZoTGVTnVrJwW7hUJjn8cdp2jAiynYQ",
  "key11": "3evzTyo83FVq7zvf1uXzKxpNY33jLi2YmYefG6kn8TzLyowwTiQwjkFuPdfvXGsU6jpZJ3iJK4Y47WgGJbVGKokR",
  "key12": "AdAh681fR9VZmNHUf69ufsagb3bMe41U3vAvM78aZjRdhrCgfNi6Yj8Q8XwJwPpaVxX5P225JYTg9VFTSrYtAud",
  "key13": "Wcc97StC2GE9sXdcRSEf4yjovox2QFnhtTrNueEvJAmaggtg9hZxX379zZ4b67eZ6863v71CqmRCcV958Xy1rKU",
  "key14": "2LS5Sjb4rWZqKfqQReHvELicwmg9iRQNtL9EaTVpeZeb572JiPzJPEJqqc3t4H298nFccSzDaABxz1oAuJH5qfVh",
  "key15": "3Gdbw7nrftH91jTQC2pfxMrE3ZBYzAqZZvYEG9yF91ZTZnR1UYueDLrJsG1eqBs796pC96VJZbAf34w5LuKiR8p1",
  "key16": "3a2USCa1HbG1mxY9cxfBhU46mNG6Y1BpkGJxmeywGL54xrkRBQeTCNfaALTyZkqBckxpAmG9NvVjAqTP2tvayXa4",
  "key17": "5u5NR6N1rf4r4Tg5yc8tQvVZh68c46Hm2PwtZkyA1YqwiQXFdPKZxnqz3DwhxMeexW7Bzk8ZPjbnCBfSxxgq6ZJP",
  "key18": "4pR7vxVPRHVDLDbaa5QsmsxYKqTABnWgZxYUe9tqurgQsyJpVhS1jB8sSrfzw9fe5qRLRkhA8CQiFJBxb1zPmbBV",
  "key19": "4up9rT6HbWiop8WekvviWmaK5RRGho3zKD8VJSBXSnosQJDvfjMD9TuEa7fjma33HYXBt41TCqtstAQ9k8wwNsXX",
  "key20": "4c7EpCyNyLNmmqtGZUnmZx7KZwCqxDFABMoAPhDULwhjDEZKUfcXvxMGTVpDeeutptxVKzoUBZqAnxCdUJCK2VqY",
  "key21": "LWNEJykekmLrTbGNGdW4VFH4rS7ZPZj3c6BpFTcD39pmUNhbabKZZ8qRFHfaid8ECTJhrV2qCZFytcbYK92z6Qc",
  "key22": "Grzji6gFdZ6pjoHXJAGbHoRLaG5WEXY1SBSGPBvdo7n8x8pWuErd4hRa4s3oiNnp2JsoadLR5BuL84gsKdWBQPB",
  "key23": "3KCorFcfHYDb6dgC3eWLPM2DZW7S7umX6nUQy6beTkXfZwTJDJYDgxzWcHkKiPeQvgVMb2vET55zSm2fPtwxgexP",
  "key24": "3d4Fk4VPdGfootTbwxyWgPmm6a3DjVpKHHUu7a2tx2U9k5VVeqw5iKU3qa1AFBY6GaiRi4tTb3ZfaB7GCm3a51Ev",
  "key25": "2hwaiadHHUMSJLsYSUTjiFV4qdQr22secsHsYaH9oj3hgwAvvt6maJt5vf8btdbr3D7aaySSBmdrinfgAYUH6khZ",
  "key26": "3FARzrxuLmByuKDqs34n4aq1qdGCBC2ToEycrRy2ArjYbv32dQBD4xmwRpBL41VJ9fDKtuwbLkp5NM5jcuhG7YNb",
  "key27": "3Uu6A9G6DcY6u7Brr9US2LamiqTtFFEX1jPunb2MSDeZMTkjViBoFdkT3FNLGrs81nibzm1o2e4k9E7wSQFDVYJE",
  "key28": "3F4PgyVsS5BkrgVTmH3wg5LEBz3Q4e6MCVwMUdAgc36stLkDiXx1mqadxTTeMDnihUd6TMYK9yEusSGEAAAxa55B",
  "key29": "RitxUUbWguNdj1Kyj9DcQMFrqo8HXcncnN2FUrHVm5Fbd7UnLSpjRZf5hReiJsgqXcLkhoTKwaUunn5hNMuER4n",
  "key30": "q31jJmE29vy4KYCRD6h577XqdTzRUBUByCptyAWw3grRMMzGNbuhqtmUbf1bvFqDZMYnjFUempf4n1zddL9nHr4",
  "key31": "5JvA87oGaNjJb22uGLmu2gLEKCsx7fTZyFcLTf23dCMYMK9wzMGUmc7aCikJLaZ15aJCoy2buxkSGPgaMkANbqFF",
  "key32": "5YGXmWPmLgY5GS8C8qt13RpXSr1CvPYdyz8UibkAhjXvZTayoZpyW7bDmxa732qJVNUeDKsZ9WRRbX6x8NKnv8z6",
  "key33": "3AAVDnTRP1Tnr2BKKdkic4nNtueUPvKtAonHjgKZxf4E4rTjkREMr7RkuJrNcb5hrr4yExdAfL6x9yWxgCmeCpon"
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
