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
    "3MXmdVggpuLu2vdQvNjsLCZdQAcKd9cL9bL2fHoN5NUXSDWTirVq83uE3rRkmjk17CMz7fQPfgSsyPRJHGTTCFis"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LjqaDTL3EDVsdssyJFmE6PmRcC1r1VM89sGFFQzDqfCnkBkVjALaDdSpBjLAPVB1skrz6KdmTMXCDE5j46GiqM8",
  "key1": "3Fy7KKVgDB8g2iuSAkAtKTzUmBGSm6cAY34zJQrj2Mc5vEb8VT3LNkin26VLBDJK75GsSjPD9JHp5rM9sdywL62M",
  "key2": "2eQYRkTYsR6oMKMvfWNBvhjETnKLk3bjXuacEJ9m79errJ1CHJPjzLaFTgGxT2SbQRxYq3oQCFchGaXo5vbvkrvf",
  "key3": "ixCWiToiAP8iPrVWkRZDV29sXNeK3KAY3Z616KmvM9tFp6Mo3wxMfAT4e4RZcmseTPXQrFJm7Sca8dHVmdeQZZa",
  "key4": "254tsHqT75AhaZjq71a5no5kbR8ih3dtsNjfHKp5ijn5bkH7zj2Hcx1PxTy2F4XxHZhErvUVKigyWnNFnkmii9i2",
  "key5": "4CTvHnFToC4DjdBrovymUTsN8axC8n6enL3nJygLoksgoeqqbP7hQxZDk6aNdJYqZhsSGMaq6H6udp5rc4xDetXt",
  "key6": "2XtM6PsdNLp8ag3ydEhyZp1qTKLTJGAGX6JX9AtZ5TZdWYBC3Vi9SALhMyyuSJpgrpBjh9H6ZCNHYgb5A1JtN2Fh",
  "key7": "36V2TDFXHCWwFNRf6XsRgPdmt6HJo5Him2kb44anM36WaTbJ3ysAyGvKoHbEUH6EWJ5zTEnvR9u1KqdgbEursEeD",
  "key8": "f185exbnjSHrCNyaPQ6ic4nGdb9A7cvGK57DUqfxZG9t3uxXWte45cb8RNygpt1wfafrQP9nzZG9Geow9tqfQoZ",
  "key9": "2zUWi48BdHN5S1aKC1534bFxs6PftmUfoQNizgGFRsPtsS5mTX4db3Wm81jDaiLGbHrkMLDUzkbbxoez2bk3LifG",
  "key10": "4X2dVNax6Hwoe5fht3GPcsbyVJjtUC2Sa5v1JPwmhkwiUaYtZ6GDrL2v8bC7Z7gBWQuVPhbSRkMCpwQYfNCU6Vye",
  "key11": "5pDFqR79dwwjBZf9Bte2Gh7xwKH91bkRUwuJPK9YAbgzqNHTnx2SyVUVfVzG7GHC9jqshefmMH5TPZGubKhUrtDW",
  "key12": "35TxPPFsPGiojxjoAKjxNKYhUqJ1d2caD2nmiwGXn9YKB89fzCBPdrJxCLFGDMoXS6cF9kzLYS6BLcnZseAoAwQS",
  "key13": "4eyonrYPofD3qG3NK3ky5pye7Tgq8rWq1DWbnHgXR36hPd38uL32XqmDm6H4YuzZSh8DQuhnn2DRRbMYfvQaTdJT",
  "key14": "22XjeFgWdyYMSc5J3ssVHXxLXvz8szLUEthdmdCDan72Xch2Kn3msL4aUVWUB5mDudxuq2EwUCitAiygmxUEE7pg",
  "key15": "45E9qcQj6UVtCTgv5tSJxQwLMrurimXvQvWRnzQR64m46LXUey3jfSyXRSCciQRyb3ga4HrnoWSifkCWNdmjHgK",
  "key16": "4c5gYaZWAoL6xBbKvQvD5VNZjaydUwnGMbJJ1AjvFMLfqRfWtfAvL17AHNixjXiDG4giEuDMD4FvZaXDAofNVwUe",
  "key17": "5PgJRk7g91ct5MA8B3RP1kV8B3dMPhbKbdAP9SohS47TeGkabFVMrdNUaBuM8GeD3JZUAanGMfbW7gd86UUFpoBf",
  "key18": "S4MG6mVPd8ykTzc7rNp3SbX922xExPdcGaVfyRznPC7m13C8v3PgwD6QE35EYRhzgkht5ypYXbnodkvXz8cCem5",
  "key19": "bVM6CP54a2mZ3ez1ygS7tsya5SXFLHFRKstpRGupaToSbCiD6oncaAY6vGSUUaeaqK5EzJy9vtXaTrK7EXdVYS3",
  "key20": "4pRUodRqmDqqnfnCtvNKp2wFopqr59Z7WQYycK8v2dcnnmbySEP1iuVsY6eRacbiLVhkpyZReddXJ8iSrqVtXCDL",
  "key21": "3yZxbpP6jMGmW3hbMLu4zF5BFpLP5J4j38F7sKHotwwMmjvgVchz2ShexVZQUYPm5zbxdys7WWNVcJy4CQ9x3Kj4",
  "key22": "NQbq7WpEaqNjaezFkfoaPhDLApTv87JixdeihpdiLdoxjuXKX82PQwK8Y8bus68acCQ3WFJ6Ausvsk3GYVNMvnX",
  "key23": "5BSVkaw8Ycg4tqT8z8vgY2TtFmTgMQvtdJAhA2qHKiYGAmJJ5k9Mk2CLNW4qnKStYLqxBK61j5h2W5ynvvrJSkDi",
  "key24": "swHzUPk8hwgzNPjuHfbxrRLcpS3X7Q9nxghPKkotAv6BmBmRx3LpYdRrtJA8To8SAjYQgxaTC8CdE7KJDdx4jLW",
  "key25": "5To2zjuJk1Qh4K8AMzBXLGmpK2vYdsdvyfFFMyF6agwk3pFErfPH4JHweMhTz1iPKLsNKsbZk7JKFFKDEbp2hx3g",
  "key26": "S6EgyTpEUqrnehzxVzpFmG2uVDXFRSmMxSyefHQMWrthR1rRyNYBhh6nPfvJg3MzpQf2nTeP6dquw2kb4s57TxA",
  "key27": "5nwdmb9CaRDq3iGRSG6egJbjMa79r1bg9RVb4ufJc8SY8DpdRfPCS6Ym2AvTNqYLeGdhQheKtEbTYTL8wHpH3m91",
  "key28": "4tPva74xMRPg7EwVkrRjRu5ArpRD8THW5f7Ts1PMuXMGsYbqPbCpbMQYuRcpvjf78yPY6ndC2JTNFGZVf26NXhrR",
  "key29": "5NvDSsSmY9j96PhKALtghAjbimeq73Cr8mCYcMFuvAqmDd84DpKNUrEpyZkV3kdHFFdzsDSdnFnPYMhMjNeTWnWB",
  "key30": "5ctiracTsy5pb4sd3Nxw3sfTFzsijQtqCXTmVqZfZYymXMfkH7kLSRZpBumiXAGGFczuCqU7Yo9MtcUuFs4kBzFQ",
  "key31": "9qaPELEQU1RomKVpHwGgHc4kGmsKw4pNrCFA8tvn9SvPtFehKmzUwUvWLKxVMhxrBwhjnU4PPVhW9yXkcMY3VHH",
  "key32": "4saY19aMVoLQ2pFFNSbLmxcn7Lr1efcZSyW9UNqvrcjAeKMd1kANkWu46dF7n3snbv7NWhLDZ9kEWfe8sUczTUWN",
  "key33": "49BjvorT4ydXhBqb2eghEMrsxPLtv5pREWf6WyPtF5cuUnkc7LHFjKB6g1vtDpm3sW6X5KBpDnTqcsBYpP29cC7F",
  "key34": "ikLmDScW4MuDhH37PFZQ6rTt6EyjsiGyJGVc6nMvNoUyBzLo4uAgmrGVuBg7G6MGiUEFYmpSzNm1DRGXmiuzZgN",
  "key35": "uePfck7macuaqLDs3tW3Sd7yg1z5rR7ZVLXpvzvaLzyw6LMbDLkzdVUtYuV7aoeAXE9bgb6nWUMbS73hWaB6CtX",
  "key36": "5AqSR3Jy5DfVh8s6qqGz3rnekCdNoFQ1zidn2EJoJfDF71HuQYV6C78aPBxQvL3kjq9WV9hbBSvtagatuwiZ9mTK"
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
