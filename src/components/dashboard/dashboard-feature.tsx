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
    "45a8mW51pLrBFq88WoJtnoW4CCUeyXUA5W2wL2jDEUupkekRb7SeBGv6bdKcEMjuV56GAjtbVhSoTA3vbaBE8JWG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nbdYkQWK1bYrFsyZXziA2SHiaiHDQB2DXJ9yAuhA2PwFWUgnDXAPw56CN5QFBCqd7QVVBnq7wxJSxst92sPVr5x",
  "key1": "FQznHMbKzciuqQxAWkz1HbcBX5q6mPJqzNpeiJWUqtVPNe4LhrCUNVDkYTwQduqVZ4AfFyjZiSmNRBy4tj6QMGw",
  "key2": "3FL62F4WmbsADwA9KSC15LRUkm6rxH2QsBCQk3npEGtCfCCLZtFdTKXF7R2U6ZG2zfPnDwjfAQVQ2Yak7BawqcqD",
  "key3": "4FtKTFoGfJUSk3ecj4mAMtdhjiGMjVWcLQWaSrnMqtzsrve6usrkoeeBDCGeiMqkQ7KsZvFjUw9ToY1aQfJH5bN8",
  "key4": "3pHzpQCaJ6Jy22qnf51nbf5VgVXJsyTAFmzAX1vpMtpNDKPGutTySqzmckdJoarpn9UJ4qthxDtc7ptUmKGb4icw",
  "key5": "aDREgSzeTDwfifJsawM1eiMB8ex8eNR6adyoeQnoLAE1Gi8C1BqCgKzTcvrqtp5TPHuqEjfzY3is71r6f7envxR",
  "key6": "coYxVQNYE8mCY1KjWV75TSrmXADZNWbA9h7hKDzVTQHLJjcfgFHRr9wxXAZ8ifGZWobTQoQeYWYYbiVkb7CWPrG",
  "key7": "3UdezrtDrKWNVMedguHV1RrBkPD7n5Z4tb1LPzTvgndh6ohnLgSLdqx61hcqZER1edjWEWLFE33B4ALs9L1Rythk",
  "key8": "3qLoxTMbZhLSnmNVNHjYiVp75LbRw8mJFNPehJ1XcoLrGfHGaqb2PB7UgpcsopNQb43zhBuVJLtcKAwiSkKN1bU9",
  "key9": "aUHgb5EVhHfhoL2LLeoTYvXL5CyzgWed2jPhqQUvwWSUjn3a7e2uEYMpdQ2qWGBYMPsCPRoqck67972gM6pD3en",
  "key10": "2wKPxMSFvTkDFzTL8Qvz2qnrBXT6TTd64XYz7kPjUR2gyeWsWtP8wAPeMbfckETa36iPBU2Gk9GDP6Fa9X7ZQtdS",
  "key11": "52uYUrsf1QoLuwcpZdk1w8iVMQh6W891dxqV5kLY4asw1D4ABUg79h9FkueSanzzVcRwdqSFfsanQHeyK7nLzPxb",
  "key12": "2YZys7LVHawyQhpFWTDeUY86mNh8kcHBwAPcFc2jLMYo7CWFWm6M5QdDPr6naJYKUU9wHyL1ZPP4aDuev1ES2UcJ",
  "key13": "4QMJvx6wx5ZVvY27mLQHxWkPiiZWoDpUwiixXVuZrBZKgrgiZ3z5gn8gXUQNnz6KHvHaj1mUQd4ZDJTZxAMSvTk5",
  "key14": "5UwUp6rzHVjvrDmS6fNCk4fnwmkjdqUZ819NcVSnnRwFSDvYMeqyc4VWkC2SRGHMhvquHrjmERrn9ur1rHKBuLKE",
  "key15": "2uB2j5whtqQxmvvhTraywejKAm4nhxkvn9eoB3RF1ry3RErHkBRehRtxfGTKvqtGTLr2T2HsszpYXaU6xfTNJzwJ",
  "key16": "4d8jTyQ4beKxWFJCDCRnj1Z3DspLidcHwk1YZev39f4X7ocYcgzaxHqyZhhwbFPSNR7PVxXC4uZDRAUysQt8crQ2",
  "key17": "4Jx4tnhBrdxL1eWVNx5TjoSCipHxhVpqEcS5ftkTBfeRmXqqC8cpEhMQ2s84mEeKwr2qzRYfQLrf93EXLw8gRkcb",
  "key18": "4Rj1zspjg8P5LQMjBf69SiiJFd6y2J6kUwcum9JAKNYhpF7mRoKhRkrPsafizSWuTFdNwShaqdjACmuAHBX8ri94",
  "key19": "33WEgWee4PnVb7gBY7Mpfp9XzWhZnforaPHBayXJzXbFpQvSzoqGrpeaPe9yoiNnWEX5S8ZFDYMzVX6bhQ391qzx",
  "key20": "4u8tvwPWNo7V386ffcUWqU4BNWDy87AA9PmZf4K1wDcPs3Dh3hF3yd7M8QfyVs14QYBhTiKjprxRpkvgS3jt8kUC",
  "key21": "62xw8U5UfUaBCT2532ZhqnDPNFkGP6Xn4cRToBw1e32jer3A2kNYM37EXGSQYGLaKwhRwAnZLxKq3hVqbFrrY1QH",
  "key22": "5FVJ1FfTboDM3qwPEBnDHY1fVxUv1m3YSDgjNWDU3NggTHf8w3twDsgnaTEo4ryV5aUgXSPgwDcWVEUxuj3RACgn",
  "key23": "3oLKkwGUm2SrjMAMgcFdSQwPpJ12LzpRLg5YqbFzTgGUqH9t7Ly5f3fipZU8VDa9ngxFTn3u6yHnQeSyXVnhN15x",
  "key24": "5N1Wru7Liptgcuxy9U5B9e3F8rV8WY6MHFvz5RRFXYdQdcwN2FrRP2kPhqK89V9oRmopvQjZHZVewxK3dnUBR19k",
  "key25": "2cHBhTGmDs4P8atZfmwK7hyKZVaEikZS6UbPvdMk9EREri7327t15wZcs8nardJ1muHTLM8cQUS3dnT9NWhxg8ao",
  "key26": "539DV68MpmkY4ppshGvbjrYYCKfNktPQGzg6445Bc73doXjZFzBcYVkTLBwSa5P9bUNZe24bJcKFbBtdg7LPq34N",
  "key27": "88K5rtRPdje4bmaq6kB2c11MeNutnkVKmGfEQ2ovXgF5DG2NVa2PSRuGHZRnJrUT18SyNENqzhLBnYyn1hacBmw",
  "key28": "5mYuM7vM5h4meQjgwE3Z6u9SNLCEVJheSqUjK7n2j66erSdum488bRG9Wn3XuSATwgcbXqvtTzmtxWf1UVDgDCby",
  "key29": "4JdtC5TnZFqD3tRaP4Wn28r9NAmAL4hCK89DqnsvkcgHKvroJpDXmCUikXwyRTdLSLBMmPNnXqGoTX65y4AWQXm6",
  "key30": "2CJXAWwjyALGsLCqC9ehzssceMQjkD9usQ7RyfPsJUEMdA2vj9ME9EWYZcYRys5GoeSXbN5pSxXrRm87Yr8Ps6Ga",
  "key31": "4kKqJtkFKXzVFT87Ci3sWgAaP8BAjgdph4m1ufxVQGQwbLCV65vXYCfWBADaDzTKE3bhV2feXLAZRaKbcEEnbfYu",
  "key32": "44AaNaBgAQLG1SPksAHWMXiaxAn8CYjbc59i65PsVXByJ8XVnLZmpSrQaKqrQTwGFw2oqS1KD8XTjto2Hk8dD5Nk",
  "key33": "4sQCd2dN5c1t66Xa9Ecyh4eyLq5jro4JzQMCisLEpghDSPqfs5tDFVDH1nkuEJWSnCJD3vYjK9kxuWsBUDUpLLiV",
  "key34": "UZU9TqVrchpWz5SxohreAxt9rWjU1ADWoGEj7TWGKs7PUHC5r3H1VVax5Mub6decAvRqPriGB1VH54wWPewnwhR",
  "key35": "4jm9JkCvpo7Dsu6UrRj2AHJ6r8qvAmxgqiMSZJXaNaHb215DNF8UvrVUGX6sz8PvaXQpBe2fF2iN84DR95Fhdgc3",
  "key36": "Cxua11fVfBAyd3CeDo29jZgGv7u5V41npBDQZYec24NoMq2F2ARLWLUaU4VvEGyCJXarzwT8yZVQgBjAZFbwstW",
  "key37": "49fQrLTwrYv6J36Vo1vkyuBSvbogHtBmCU3G7zLD8xntCjRbenbLQLVEnR31mQjtSACUAVUq6i5FW2HBGg3UguDZ",
  "key38": "5jdjjFVLaxX4VvZrarRHw4yUoDM4NJhpuKCMHVWMdVDzkjcR57FyXvPsNm2Z5n2j5ayHcd3m2qMcJ8gQQkZFC5tA",
  "key39": "4kJbEEMzgtT9jntNycazCgUH5JED2UEFnZhTc8n3o5DcDNdtuRJLTAqFxRa5KVhctk7PEHMfUmU9qpbBT4JBZLXh",
  "key40": "Y34jgsGUSmiBJPRiYUkwtMq4aZUmHQhoTB7HCne8yhrduTbv9cy2r783NKdK1FPJx3vGfiDigaF6jtF23vfYuVh"
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
