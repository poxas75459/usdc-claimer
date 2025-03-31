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
    "2pZrvWiYXfPN1twFAE4fCaMz2AMS2d7iARwPw1AX8pBdTaktuMFAAM4ow6UBAuwYgqsFCbebDzEvdDoHKFW3hHPA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AABZKjJ8mXmHPN2mZMpF5okncCGjKoQK8uZVcTgiXUj5HY8XY6zuyg6UsBXhBBDASVZ7CKBaPm7uU9trJV4X7UK",
  "key1": "63eDSHRs5YK3uYuQazM3otgbfy8ouoC1U5XySZRGu7stfpKLcMTeB9UoUaGrTJqFvQKKTYVFgVmNzWRCFZmf8asu",
  "key2": "2X3QS8EfXDahNMu2Yo8RUd3kzehnvroue6qWcMi7YasHJJraCnYRTq45T3TbcaT1grFn5tUFZaJUzXxDQNcvYLQf",
  "key3": "EJ3XCm9WGKziTU44LaxDizgPQeFAWJQJhX4ep5M3pMgZGCWpRpdEwYz4QRb1RR12RmsdYzwia8zEYW9DZX9J3tn",
  "key4": "5cFsjv73y8HYqcdF1rGS6eYprj6uvu1Hu3gG8HKpAM9Z2sA7bP329DvdDDTY41ryAJogFA9TR7X73BxaNQ1z4d2J",
  "key5": "5uoGCaU1WG2rTC3cTdNwGQC18xrLvLJSnXZKLmrvAm8XwGBQMcBHbBjhdso1vTVQC2rXUzza5R6JTEByS9Sun19k",
  "key6": "5PYXfMrwYMPhSM7tt5gUXaa8PQ2DpxwQdP78QBDaFVk3pcC3gbBwRpZMaLRco4Un9s6psNRCFu5gzhZy7amJzDxv",
  "key7": "QL3hJBDGizWMDwQ8vB53AmwoYt69JnJGmgrnhxRQcd6rpjkfdtnedKx5PXAWgBLNhH9SpEF9s3xxeKJVjp7RuQp",
  "key8": "2wpu6EJr3XMNU9WVk6fyBHq3aUxpfuxQ8ys4tGCX7BdYV1yFo7xf1AiG4WQdjrv9BjewyQa34LEWoLJNVYNbuxpQ",
  "key9": "5QjfunnVq2WupkhDwR6Fsy5tqrPof4gTZVkfART77XWgdt2iBzug73LyuAf5La6Qqbwn75ahaJFxdVnStQKcRLUk",
  "key10": "46GMxx8sddLu93QeTaxpsKSLGZnbUYfFunLJvXNKazys5U5SkaNc5dSYrrkA7XGmkLyqurXqn3caK2snwfASMhzb",
  "key11": "5Ct71ULn5xaxSvCdRWnLZXEJyt2VkFEug8TBzX3vWaBAG6Bd1X7NShRsJbNUBxHsXsejP72x4eUBnX5zn36yh1gC",
  "key12": "228VFZ1xEkWs1FvgabiqMHBCconXc5WbYJ5ZRFiuX9MXSGKDsmj9o3kHAzsdRaXMtsbtV3UD5ZwZuyhn3GjCzQCr",
  "key13": "65YsA5gvpyBCcDXcRVtZsBbhmxoMD5LatxfRXrwBsKh8J1X14BMnXBWNAKLsEekoXJGhB7EgYDCH1Q87UrjVwzHx",
  "key14": "s6tUUtmJsQhqcX7s3tpFPAEwwi9hcFs3N7Mgb9mWgLyEZY6qcnDtNHACTA63x5UArsYYoz7dkzNXmHzBYbqMj8p",
  "key15": "2sfbdPuSitzBpxnqJ7UUDkSXePrPgmyG4kWcxMRxNHwudYhRVzF95aKKYeKUdaQ8j6zjfzLhykvfPzrQkgWWiTj6",
  "key16": "2ApC4EMHPJcmrD78avfm92jSpARVvH1WLHFEM2iyoB3z3y4c699Uj1PnCymkewLJhHnqHz2JkQ93zK49f3o2dtm6",
  "key17": "PvcXVrCktBbvG9PapV3jvY7mxAUDm1WZDD4J8TTJD98PTCxJQkVB9AnSEHnb7d7ryL5qM4eEJnHReDsZBuB266F",
  "key18": "r9phmz7rg1eJf4RVrsH9nZ3F6FgAjFPVjTCmVo3cSgrs5e97MJGUBHJ9Q4njRnmwp3shaKgLprcYDQL2DDdXWVE",
  "key19": "2JMvN1APLTDswXNUBrgpSbdtDdvVzP64Z83nySLNz9h3w8pQtESiQW1hoAdfPS3G3VcXfWKrzaDwdh4FgDFvDwXy",
  "key20": "vGgtLDhUvYBAXec1GrsDw46Y8Z9WrBNpr65za4sbkyBw9TGM2YGx47FBGwxz5QB3qmN3MLGSADvfbWzpxXc2kgR",
  "key21": "31HUASw8c8U92BcNeSGYWTGYUfRyivz3s3mqGeC5zJdnxnWkzyQSDc3B8djGwLLyTHaXcZukFMEEJjjAfWnQiMux",
  "key22": "4y9TzgroBTiNxuhbTLDN91MYXPVP2WCezGrarQMgtWanzWTXBNmrCN6mUKdt4G7DreFgCPS7NgyvfCFTCwMvfndi",
  "key23": "2NiK4UMMPQoZWSEujNqVBp1GhaGReuEspqdTbpcsh3XQXDZG1NXXZe4WehjL5ZXFXb2Nk9254A9brUVp6AAdz8ec",
  "key24": "61x15DZ72uBHhZTRiMaMfb1Xyg1x9GNbebUBpXGcw1mzT46uR5jNU1tg4Qj8wkS47BQ9aLwo2EATCHT2dn5RvwxE",
  "key25": "5Nf33gttFr92UUjPTFfGYrDA7RtNDJ2S72jbqQxjeNyjt4b5mvjzujx53iPoPKfEXsQXqiHYHrCWbeKfNeoa2maJ",
  "key26": "2rRr7ZLkYcsG8LWrL393DGUv7kz8UQqLvLwCKfS66SAVLN2RMM96S223F9f5thrG7oAxkBRkHtATpaAKjQ6JBaFa",
  "key27": "2EtKKQdoabf6yjCDkvaPFcxBXxqm8JuaWMTbxaU4U8jQrvvtyS2J723nGyq6GjaYfg7YMvxcXnUPNrpmjfsfCJF6",
  "key28": "3vByTX8phwnBP7Rke6SL4Re7eMtQGRn2M8rrZa9p1AE2HMqeiaE1RKV821vVanEpArZotB4mxexQ5fuh4bQTFwNe",
  "key29": "TwbtCCdJrs3BCsbyBb8fNJJu3Pum98e3iW2hdLrBjkXrfGdBWitB3hKUA3kwKV6T5tgR4kATk5cyjCnV2RAX2nG",
  "key30": "4kAkzzKjEmp1Zp2BNX1emtUnoHzBxVgBQxdVF2HDnr1KFY2GTr2ySqWCpXR11h97S1itmvXqiDZSbr3fDWQ5piDQ",
  "key31": "3giPqaxix7RCMXB93pjNjAXFkTEUk8yE1JrwgrPrTFPHMUVULtAGKHnY3ZbMoZ3hZmHHcrkXNaqG4EjiXNa5u3fq",
  "key32": "4MDaYH9dvcnBNjL1VBxdM5Auj4BpDgmSrTo2GjXS3SgiVnWkLMU1UBycbk96Vds2RBK4Cgh17AVez8k34Ki7qCqK",
  "key33": "BDqwsoc3ettemxm5ixo6XdrrhyqQFmdL8XZdAJgzKhnn8LrUerp91pobNEBQncujtvTPetNhQMJr8EeCMEVftCv",
  "key34": "5MhXT2pTy4LoZ7eEhM7Piegu58KEB8Ek11qbQmHJU1vvwWd36KTzDATWCwKcUq9a9FAsAdAm4QhVFrFNPQV9wN5m",
  "key35": "2rizjgetVchXLRRRgovGWWSvaSiuZAhRiHKNPw657z4PbMB8HtfP3G3Ez8sB11kD3dm42RyeuhxU8YD8Nh71kBRr",
  "key36": "2PbdFpTD7BRq1qQM1xk4wsxBy3yy8vQuLNSChx7o58FAuu6gWWoAr8qPXPpY1mmgUpGxz2eidUZhCDde6NobNTzA"
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
