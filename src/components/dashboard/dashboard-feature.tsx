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
    "2MqvwFA9XEyGtzRFfhqWSKdcDsMDvrdVF1wMgtMV3nXjHptrAE1ohVQbbcmynZEe8UZDNYHy8fh5YqcH2bE52z1S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JbhdZZv73Mrzfvuaj8PDGDmhfMGpS341Up3mRFwnJ3wiavT9stUAjbkAki66FZ6yPYpZBL9b9JqkmkSGC2NQkyb",
  "key1": "4MgZTmRoxX9azm478LokCNo7WEK76mP3qExMeDSRUKpMmKdRrAmGahxYAcCZt6vohaJcRF7gofhcLoZxwbo2zwX3",
  "key2": "24PUimQapZNiinGQaXKmUcAv1W6qZY29HSM5kRRExLTLFnsd2SagYpvbtk4bCaUtEBv1tXxopWnNCPsMzwCKwcCu",
  "key3": "3W9asxS1m31JXT4JWuLhbJjaERXWKuqsgnYRyHU3k2yt66HV4orGyQuEM6pPobKPXYtimpEDDxdZa5nHYtXaU5LD",
  "key4": "3QVTBdbqi427D5x7CAxtXJdGBJbXtBTNbFCCieFVceKEeM6qNtiQw7KUqw3s8TP8XUdqjmCUVvvNJKKgafKsq2th",
  "key5": "5et8GvRqrUAH85dwzMaEWwP2qdpSAQDJdgCfK9bt5NosdMgKNXK7exyKc1LMKLJzSVSN8h68yUYQDJ5UhpVsTScJ",
  "key6": "3oUygrDvcuDT8pYQBHD9bkPnhSCEPKryj4aLjEfZgZ6G7MFKzrqPJQMj4Jk6qm92na7nm9xTKmdzs3cxu5eMRb4t",
  "key7": "38UkRppsDQ6BfpmSwzqQZxG2bJryTxaJRLLLdn5ke47GhpF5X2ccf2EX1kWv18E2vPnyb6eTL5g5bkkQNG731q4x",
  "key8": "3g6HgHvxaWBcQhGxGV6iHUZGnErc4BN7HcqWakJibwnEEEd88VFytHWc1httn1kPajSZ6XCY9g68bLG6zsWz9XNG",
  "key9": "gQiY6Nkv64JGE1ggitjkVm6f18aDHfCMf2gGM5b1MpjZV6TioAb6fgsU1EQ1Ko8HiQKCvGzbWXYkVu73RsUJtHr",
  "key10": "8vC1BZN5iDXHpxSRArRYrSFTRh6Q43uvokZRRqJ99kSduX5mwK8JpbkMUgMptWeDnsBeg1NYxTeybGb3bnp9kJe",
  "key11": "59SAUEoJZXridH4Snax11JAMeauZt7kTNaDWg4YEGjVPeUdTsZad4KDTTLgdzfBaaXAPi6WRiMKM2772WvC2aWti",
  "key12": "5sZXK5H9hYXpTSGek1zoYyrrAcfxz4v16vUH47hTkxSo8PuCJGiaHLrENgB6o8eja9YmGQ1LC1DBLPGVH67gQ9cW",
  "key13": "3ncEbCCYtwXXE9FUKdcfZbq6udUocyv7tsmaMY8BNyqdM6H4ScUmg7YKvFmfXdPuNwe5Wxh7pYsSEzSJ5BSoYZ4x",
  "key14": "3DjVpoDqDBkDQZ1STnXdaCirEQr6EPCNPAD2SA1xZo6fvfs2TYQwd5wjvavHizrfkMmTFuNmtxjd6ajvCvXZY9y8",
  "key15": "4AE43wcL9siPgXvvue4V8if7xrcWwmUChjp35rvhYR5uQCemdn2RJWf4oT8ZFEA2h4CfwZZ1r4gD8nMxmP6phESQ",
  "key16": "3ggX4qMJFJkj59HJ71ddGVNFV6j6ExTnnUkdd9vNXkTuNm4CpbP9pt2ddWN2t7bN5FnTh6Z9kSNnApmZJEPX5BSN",
  "key17": "xpvrVywCTMhchfU25UYZfZxXvK5bNHQQd4fuPCX1UZoBoZuYupDhtJbbyi8gGcMLFrgJ1jXk2goNy4jFPX3fu8y",
  "key18": "BtNiAGq2u4B94G5HVp8xxwJhSU1u7Ts6mtSwzbVwjEXy6F1MVv2wsVbKfFjRXp457nXLDEP1AodEvd8p9cgJ2EB",
  "key19": "5QZaPmZqAHsb57Qp9Vkz37KVFdnU64ZbrW3Kd1qyifrSYQkwYrfwwbuTXCjUmmVPKHXUvxBoJsVAbUfDKknU51dt",
  "key20": "5ZhbGaPQ9PHEgdsZa9drzjLFK6RRfYfpoM9kR2z15r2qrE1xnmBvEEXLxU2jATUYTpNujyFyh9W18MX2fjSAy2oU",
  "key21": "1pGBb1reqHcaMRGiFsvxyae4hS9zMC9fK29FAkvufeR3DPHaJPmxTt7RnEZJpZKJWak35crc2hnYHYM7PSGhZr8",
  "key22": "fhQ5WJdH7mGD5LAgfuhpKSNXWmp6tqmbs3HhMPg5oYgxaAkv2B6epuTyaj5dRWMDB73r22TvhdESVpQ3HV1s4kv",
  "key23": "3LJKXENdnZR1vyjF7VUvzzqmfbMMopXGGaDzCE9XhhYub9JrtGs7da6T85exJwnqA3E45aVj1rc9qmf46ti2dwLR",
  "key24": "2R8kkdCUt7La4xj79xzXBcCPh1HFTVEyWybAs6jAMmQLo44MPYYaqnhiX2Z8pMwWEpVLULMQKnctragAA2RyF2KE",
  "key25": "iTe4WJtYY1XRPDLUdr4dCfNEgN6GpCuS9hVtAmX57wDjZDCeT8M46NLKhjVrosmRN5DT4kbdkikgcTPFFa6vNys",
  "key26": "3yUmW17GtZc8Fnh6orVirmeVVGtn6uG9DcvYAtdV9vsAKvJF8rUFZoTu42JQnxbJXR4yK46gzkkLPmq4z5c4fqDw",
  "key27": "4voU9gkRbZq9zYNLQrh9rYayYzW95ZBo94UaRxX55HkLHtKkUps38HHpv55es5dLDUAsWhuHdLHiZcJ1qg6sVXHg",
  "key28": "YiBUxA8an7x8JDwrt4rXU9sV2X8zSXCm4ensiQu9saWcdi2z32Qu8SMjr7uoYrDRrSFhEd9bPb2NoUxGHDzKoc9",
  "key29": "2BHGeE8gBQUX2uv2B1R8Jb55iVm34ZcP2se3m1dJSJ7VqVEXzsCRXM9RBXYp1Ufg7S4XfWxjygiKrATwGhzZFJX1",
  "key30": "3UPgqcfvGJ6hCetszKqDVwDc1hAV4LmTJe1xUwLehrJZMcwws4y16n6Jvo2cX8FvosesHPtiu2jvrXT9SFQfwBnC",
  "key31": "3WMMgEbydBJduGZ8Qp8Ny3DpcxwACrKXWWZodcXxD7k7UkPnJ4hrfvo9q4wDXsbEArzrDuqoryXxtaNUSX7989y2",
  "key32": "5gpStULpbXpdfBVQSG9bLr3zGHhKHzsH7sMLGqBBXgoJGxzAKYXDPe1UW1Y2QiCv4Vspmi469mQqWofSWp9aSmEn",
  "key33": "58VZkdf23uZwrXYxTb4M5PjBpHqgDJweMNBBaGot7Q2DFbiVJe5zBwoQF5z4ZHFzNQegkk2gBiF6nWKcwwp1LNM2",
  "key34": "snugbhLcNVTJUYE7RE7TSqc2MCrKNzRcopBA3tbzSW1of3XrrVJWdE7sHWRHiJMQR2CZykrCLcdkXhAFE9aTreA",
  "key35": "257pWbfTVvfJMC8ujDkPv6ejaZwpi5WL5edYUcTgaS8ZsFHMU95EnhH9WuRN8L5fb1VkRHDqimRWffS26F9krcmx",
  "key36": "4wtUtVtGtLmr9yumopQgRUzx6KijQGHCdWJvYTLq96MXfC5E1kvPDFciPS73AmAtrAfnHmEgRaAxZzLvJgpJksWD",
  "key37": "4kegDkEBCPGTiUgSoo78bTZ9q7yzueFBrRXYRdsLnceN9wJt3Hnhp1MnxxxBUWrhWJW15hR9ns8L2Db8cBV7WHm2",
  "key38": "5Takd5z7Pr2PvTS84HnjSmwGkkFCTqYqX7BVLaaYymWEvzBEXZNPcs4GpsVed67WmFWkBdVtyP8wwbLtwwVWCK36",
  "key39": "3Vy9eMs3zHLyxqKRExwid3TaCw9BiGiYXDXfQXR6mAJtu4V3mpFmCH2htot69SqGqqAamrFVy7qdGSVDpa84T24A",
  "key40": "3zv44nHvPxiz4ase4MJawRojVXUNGR5NHyntnbbPdye92fQCamYoqPe5otREgsBSjKhzur3jQwBP3f3rhYFpfTm3",
  "key41": "3d9xgXZTy7ZiQCWSgRm8ovY3dDUeWrSbZxjz2LoREsh3p1JcQosLiyyhe9buKqgnd1zAP1gaVTD6QVcpHr3LDgHu",
  "key42": "2GxTjEzkddfwdzZr4iPe3vAv6vpTxV1Qzq2MgatFCjCbmcdBK2iPRxEgDfGgy6zYtJ4vBMTLpbth2PDH6msDt2F1",
  "key43": "41twWsf6gy4CdmVPiLFmGja6NeiRZzLgKVdRhnwFmPNBQKSxx4cxVPctHUvB6ZZa61tmaf6Z4SeWot9MMeEg6spi",
  "key44": "2P5cr3yzFpKY6udVZg8ninaD542Dmo96jpMemHte9UA9ztFHp762n5eg2HEATXqFPpJjbEm7LXUKDDvmfZbBQnyJ",
  "key45": "2DXfT8THZviJkDgFbCG6uk4LxxhukaKdTPBHWbhNFVuXV45cQGuDrqR45A66b6m8jSohW1ikXG3ju8asx82zHGjK",
  "key46": "4dKsEyh925BsPEyZX6W7LpKmrNEKeDZAKzpgZW3ze7yxsrTACGwM9kU2yufxT1G3oZbRPxKsQwp2zjC4QNdtBsRS",
  "key47": "qYGQaWy4qrmZaWorxfNAmnfypVqd3URv3knpvm53hRyLCHNAbCFBJhvRB38kBwgFW2CZH9XxJCvrTTccd9s33h7",
  "key48": "4au6qEbjcY2oRsGjiuENfN6EBT9GRUwEhhQXcU5H4shRdFphyYY2vChbXP4q8BPBj6Ft7YUmkL7ZJj3Rgc1p8zL9",
  "key49": "43ah9ckXoswGZPgRFG5pUSraWhTbwv3kBbMwTd1jBWCMaZgeWvmJW8Z2j3Vc7F1WxCa5WtR3u3xdz4aN3MLg3rdS"
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
