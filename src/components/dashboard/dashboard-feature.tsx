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
    "4AFFFVuqkpKJvRaJN541vYcodEWUZmCp2bpEmER43kzZaowLd3ykGyTVXGRNboeeD1VHfVCZ6GA1AaU5u3tDD5i1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f7M2zJsUQT1sSjjPmvz49NQzJzC4R3wNkedN9MngZzQd9oiAFskq3w6u8GCFLyyLevHsAaHWzR9ddASEBc92iQm",
  "key1": "2UhAnc6DJAyMxzoKaYRUysPdWjZ5zUeLZeSv3RE2AoCvHCbiXpgDkWpSqVk1x26RUYm1ci9fZAFL3ZoFZZnjVMcr",
  "key2": "5FgvvzjuKRgM3SkHcyADSKAR51tijLJkayaY3vWwVP9ZDv6DsMC3sQ6F3SY37oRnzxELETdZPpDASZxCVPgezih",
  "key3": "3bimu9Rc18MLkq7NXT5LLu6A3rLhgb2zHX8zJb5mg49gGvFCRKHri26bmz7LSgUCDYCAEac6uCBf3drX8Yg9XRAN",
  "key4": "23bdQGRA8MhPPYZgdwgbSiLHJygajvW486r4L4hVP3Tmn4FZnc6aoEigVjxbvskF3EtVn2zEH9HNVae89pkYhVsU",
  "key5": "GTysoLJmB4mTLbTvryRumQKPAXNq7hTLBHmr22m21ezuuwcty62NCvdbpY1xzCFT5ZicNQG6euxYGx7HoikbWRv",
  "key6": "zrPVkNoRrSfr4rZiCP8wpGxh5UqEPmcjCskFRCXiGL1gucbyTBrAfXipdqKt3r4VEs4T5bXfDmMdFuRDhDEXb1T",
  "key7": "4XxcTJnKksiZJj1r1hUntSGpAWCstN4d4CD5ny52aGNcMdhGLhG6cMSqm9KqzjrgVmccDeW7JrzFdzj6cX1h3bcP",
  "key8": "28YH2oKafmbiWW7cze5zYHZFKg7aCkKCvXJBy1mTyoufN6YvwmioFtaEsAFEsxpeH68oRQfhydKZzRficVaYXEUW",
  "key9": "46twURzd8AdWSRBqenMSJn3AuQSKwC9H1HNxhK18hDwwYtcNFF4qEqat1vW4Uvg41pEoQ2fcVJVejdE4uxBSGUhJ",
  "key10": "3EH1ALN7KUbd9wtTmvfJV9mPA3R1aztSWMFM3uw73eAsmq4esxXWYgsACPGqzEKidojDvXVGt7AAHHYadKqGUrX",
  "key11": "PzwGocwWTqTkDWchaR3i8YpcXKWvh6qNPa1Bk9eA5B3q2HeTCccDrsnMzozJotc75SE3m4iqZwras2ESc4j2Jpy",
  "key12": "4UWNVeWy9PgYcna4XpGSPoBSqs9A8yBWmsQ6L91SvkqRGc6XYTRFZo4wXq7EECF48snLaoDipbawESsQMNzBu5oW",
  "key13": "2KXC61nxLpVGKmrRFhWEfCqfkNJHx7j9hDNFGpdeQY8ZkvMqmkNzQPv6Knq5p4Nx3W5mNAuhq8prdFBS1CPtav3v",
  "key14": "26zZgRSfwbAuc4ngypxgmH5YPx9Fy7vX5yfgovH77M9i64zzUVJTyXaLQebUAZG46TqH32ywEPmkHFhxonr38mbE",
  "key15": "4gRRJfE7VseaCBnVC55NaGJhTF5t9uvaWpvgSLdkTdfwn9hB3AB4YVaN8RtSNqzviMmmp9ENr6ShBHApk66CtXiP",
  "key16": "2nQQEkNJMWNX4Tc7vACNUhCj4EMKSzzDaDBeVhSBXyjRGojqEr3E6KdmyaPatsJD5pyZbEJks64ujZbtB9cNP7eo",
  "key17": "2gWcfx7qiZ2VVnhPvjd87Z2NSmu8jzmBDegdAdMKbvAGKtozFnr6wKxaJZVZETX2HTiZUMavhJDuBdkg4RR6sbbr",
  "key18": "5cyq1SvJqkREafEipQWhoQwQYudWsHQe1UhwGfzXjsCmbdFYHqcC7YtGuNbhZmZtYgbbhhGUvJt5nqxChRAj8U8U",
  "key19": "wABkrGUqCE1PQEPuvS1mvLcD354VAekhkATqiS9DqY8b1MN73G2XtwJLQfJFuDBhdqnpTr9HQ7VhnqVscNSedoM",
  "key20": "4Lyd5J1KHZcMR1kG78jDXu8pQiri4GJKua5fJXAdXLC2dVzsgBciUBjf14YMdy3zRR1fN7rdZRVDGWru86RUQf5h",
  "key21": "piiERaskKyQaPgVg2m5jDbGMoo4uCTbDkco6HZfUWZUzMDsWXVSghMu5QAtWdm8QfwiTNLMFBsbUcfgNoUp8iz8",
  "key22": "xhVmS36tBF2EVqhedufTkuY8g9GKB2V9g8HTBPQKwYzuUGPKzsZTKS5hMQma3fwQcitDVbfdGG8QXKfSQ8rtw9f",
  "key23": "5vW9Lhvk4VTUGmdZV7E6zHh4TMWVLqAD2dK1Ropu7FT6Wk3AjDwLeP4YtaLzTEBYDyQv3kpqrtPZXjdJXPPBQaqg",
  "key24": "4U8S3cgok8sxwViGECC7BxbiNjHBhtLyB2jTWzFnduhStinoEpZ7hoswihz9ponyPi8dSi53NvuhM99y7wqRpiNQ",
  "key25": "2eenEG2XL4ziptbc77dYmhyvSj9SDvqE1FheAyqTZMHq3uDKvDPLEzPVVRTgeK1KcFFHXFQCcHMazyfV4vyRj1dB",
  "key26": "5VBytLgbreBaCVKZrZUoVAfUP7Z4HZkUjoQ36gndDVHAzUiy5jrtGFXoULbQy2Z6g29Enni7xywfpEjse4KDwoUp",
  "key27": "5wpABuEj2A3cgnd9fZrzLgpT8QrKNN6LZdHEuaR1WqBDdwq4a9ZYstKPsS2Hd5wCeb6PTFntMY3w2drXyB1w7doA",
  "key28": "iyxFFoxi7RCcKwgvatkY6AxbNn5KQQjzFLvkVSvLD5FWYhgdTbMDbumPBxAHuqBLjmW3p5v4sPustunMH5gvaX2",
  "key29": "4RcuhSBBi8HFS9wfDtY1WFSNPZMJX5M5QoSDwJq2jK7WczFTUguMBZMbwxKbJRkYZYs3ePoFoKVyZwCRYBrFAKN7",
  "key30": "WsGAQm6CP47qQ2v6vbEMqQQBkWixmXfPx2sMRSiTSbvcVkHGmVQnwfEmZgeWmPYELBegu8XzZRY49E1hUtL2ii9",
  "key31": "53nB1EcPYxk8YDEDMLG3WXeBwVkY7xyfDj4yr2APNbcpS8yq1k2Q1PsFp4mf8fj3L9XVryhD1onUXHeuY8cQMxq1",
  "key32": "4QmcT3kGHtV1Kjm7k7fqabJHQujz34jfMFdM2FrCWb28WMdRB9RKLaLdtS53XA6o9x6snG6yyoqUneTZqQFwXiJo",
  "key33": "5MpyehbcpFKHLw9tUydaqJeGS43QaFhja95qm5X5RA27gcu13wQxFcNGz6PijitbKFn4KNvLTkUz92ufxPjwyzsm",
  "key34": "5te3fgDt1Vtx5L2VWJd5MgRQr67XkcqWFwyKGaShbPwGgbRnkx5wvPW46ECTsUc4zpC6Bd52WHdEu6NY4wuAAkhB",
  "key35": "35S364USzp5VXrDk13J7UCjVrWtCnbdfvBdNcrtmGV1Kayrw2H5aLePeLDjD5t5kDTagLxhHZeWWjVUZWpRTumDc",
  "key36": "3KnMKquRgfSacLyJ98NSR7RsT9HLvXXzZuUTSCXFKcztbdhdmx6GTgFpE6Pjc8A9ig82p4AQnU7qdiCPA932wSkb",
  "key37": "2uCGKiNYMUTd6dykmDTxo638ui9bwukL9MYZDN25ZZJnP4isPYVVNyEBvPczL4viSWQT8L8qCoq1w4KVaan9tgVb",
  "key38": "5bg68SF6LyThyaaAzAQYys87gdRPhLbYUEDGFrk43bVjmJsQDxaSxLxSMzBNvovBuyHmj6jvnoSWGYdBPSDX6c6Z",
  "key39": "4N9SQqrzav7dcy17yKAjoTdqcqwatZCGJvaipyhrtBPMHteosBJpMVM1JNEsQY5Jd9AQpvJP4ef8RvTmgVfRL79K",
  "key40": "34y9QRv1nqEo5BeKiHnCocwX1hKDEsqrZSaWgPmo9yjvhd9c1qi4uyXGbbMXyBYmk4mRP8M6C5ZVn1GiWFuuV4oo",
  "key41": "63gND9JXUVstaP6xMu9G5fry2KzjhzzNrQqW3fJZ3x8t781FEYKc2jMDBue54xRZSnx9iaJmnaHR3t7ea8zsTPQJ"
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
