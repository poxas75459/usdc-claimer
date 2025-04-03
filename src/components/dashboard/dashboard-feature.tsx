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
    "3Q1naqujnA5fgowqzmx58EWAUoY2j1sNmsL7DR7iq3oyk98QzCDiriJ7xwAEVahYB5cgbv7nXFa8eC1rixYNHSr8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nJgkJcKDRfreGq6m92UPeCS31dJem8SD5ZY1WLK349z1P8ueWXs4pjMn1DRWvTM5t7qQsx8i6vjPPCAWi8eJSrc",
  "key1": "4E3xUXQDuKBEFN56nT57yTZr9T9AR8XuywK2A5VBaxsZyBJN2ifyHGC8iyiCyjJoND2nZ1R6yNtYeFvyXU4ifwQr",
  "key2": "5qBEQskUKze3d2bJ8AR1C1u1VoMFdXBQsLZFc1f59pEdsnKNcN8Ya95TV57Y6ujhTMBkoPbSEaf3CUsA3h4WMME4",
  "key3": "5sMr4wb5VwkmT4U5ZJESbjbwWzPJCWbBikngrnS7CYPwuAWff5Ncz2zECGeLKyjFfbAngtziGmj2LXwsJ9CJaRyf",
  "key4": "ZNwrE4qCQnfSGRogG89PHYsHuFHn2id7h7ASw8jxY9RCWScpvY2tvt6kSC66YhSBSRFm8k37PQh7ZroiYirjcvE",
  "key5": "2pLE5zBXJ1ZyLVDCjRwgRDz3eZwrNdjB5wvMM4jkngGThmC1L2BnrA82xV64FQJMt6x3Aato2eDuf7w3jdwHeuCL",
  "key6": "3BKJTVYdC3vpJFATgkQgcC1axM2ZsS5GR6J4t7W9ZmpGwehauW1R2xmKegQPhrTeMApBGZMLmHxd56UNKygWBC2E",
  "key7": "5W1ipgyASP6uBwzjXh8mTkNEEEVyVb5NS6UejyAhoxNqjQUMRTEmRxShJ8XGbDDSDPWHisBTCvAst8bQ8B9feKbt",
  "key8": "5jJzhVwyZa9gtgdrTDxjkDsqj8k2En7g6gYsy9p5vuV7wX7FQht2w2t8H6UQoVvJqgS9GZ2kYN9T5WnNB8x8kkgY",
  "key9": "2d5T4t689pWgPn7x4LVF5qbEkWKY5TXihnNHxdUG56gcdKeRmkLXpxnpDvLPcW9PdX9tAz7hqjVjxWavmnJY3UEo",
  "key10": "3D4Xj2igpGQbXdEQWA5BCcrJxfxGdHzw5SQttKmpSPUvdSgFakGFj9T9ufQEL8ET5xufzk8ojRk5eYmZ9aZTjj2e",
  "key11": "49UsTqhUfCsjjD3ckVvZtXjJDvkwg4ogbhhugQwcPcsgmAG76K814wnrkYzxZwn7UDhfqYE6FoqFYhYF2b73xDu2",
  "key12": "572ZqTKh3zUeK32zPhQrP6g1TszDyuuijFCKZjWXq9bYiNwCutoNsCxFZRcfemDPf75f7fYxQBxJXGHNB7gvgokN",
  "key13": "A6amttJQRrq8JoB37JtoVRhstRKjgu39gaoTUtKN8X9iX7pjUEHWkkx1XKjpj81asbxo1uk3BG25aGqT3B57pBm",
  "key14": "NtWYAM5c1T4GWesHxYddskc8QfUwmuYrnkzt1jGfN7xZ4mWbR1sHGqGR9cQWbwC36PHepkkhoPuUxn8V61bhxSv",
  "key15": "4F73zq52XBJRp3gsJCmAMzZDwMpcxbFom2xE1oeTMZCBvF4zHKfQQiA5PLVtXthwABewvtzA5ShYPNi8KysPaffS",
  "key16": "3RyC3eD7hxTZiZTPkUfEVoSXBywwe41VQtQTqUrUFRYvGRv7QUNHNPPHh4N4Q5yYPeZK23XH92B9H8SHivwbtNHs",
  "key17": "549vfidzmRii97AYtDHpm9PheixsmGkzLZHrSkiASp4FLfBAXbun3EhFCQtfVrrSVTtWAQ8EUsk9bk1TgxmygjC3",
  "key18": "AtCVMCifgf4Npg4xAJQN8tYWKBAZGF3rsYTtjJhoXkB1vSs8B292XmQ7otNWo2FsPjpqCTGzucm9jQVtT6ikg9r",
  "key19": "2QDNtrRyVm4CFeFGTYq41EpPkJ4z8KBaxmQJPtjgfNVve1kennLMMbWjijtfgNrkL8NKtzjKyJx1KsRkDYY2nL2V",
  "key20": "TcEQ2fqh6RFKGtEtad9jnN4gZVAFdKYfMzgYEHGa23xH56NZq8yteib4cxASq7bxYd5Rc3skCU7DFkvMuLF853J",
  "key21": "2VZcQ43AL6hsQroKNBLZu8cmohqomAfeZqxTNoCjifbjire14zrpjTFas8tpybsCD7bU461qRjekyqiAGiTf3iaz",
  "key22": "3BiK5uf7V3h2K7dLbQJYkVv61vRsy7BeB1gt4iRPKeuAsiYk8Uoz2tdDnah7jRN3Z67YLKpxCxPTr78rgBVAc7HG",
  "key23": "5FqPKKTBFDrVm35stNr29Z476B63hVVctJxX4jTHpfoF64Jd7HvA4SMnDHFzNFKQ7trvqesL2u3N53aAL21RdASd",
  "key24": "5WrXVG7trs8ayqLBA2kKs4P7rtt8nbnMW2uRt7j1w2iAGsp6VWkNW62kc4TDRGVHHdYnZ3dACY5kijA55p6R8pQb",
  "key25": "4kcqUii3jLhWhLz2h3GizFHBh16nmFhaEfF2TBxpEZEqH8rFFV4DhDwkJzq9D6a8joLZZ1N3c8mwQMpzcJ3Why3M",
  "key26": "NkWKFC281vCJw99LkXkjfEBpuDa9xRYcW17YvTY26jru2WvLHn8cTXcDwneYBSH77xsM3GEiepcRAqf6tW8AVVu",
  "key27": "3tkFC7NBZnhiYamqAj7eWPDUaa5xaxAaZYkdmZMrwDTLK5RiiaVsotct4caLiUpYxwdMDv25MkPet2rG87QYzN89",
  "key28": "izT6paZ26ae3wKr92av5qsaWPvUCm4pT4u4znw12wnyXej9AQWkBZVaR26RfxP77zwgZXnq6YacNUnKncqXtmx5",
  "key29": "5cXopN1AzWS4yeUpw8FXEr83sUSE8A6TcwGtt9pS5Er3zqUmFhWAsLowsw8e6CYGTiDX9XZ6tLeGkBULG9rYGujx",
  "key30": "2ZoZq3dihvrJ3wrKzA4799oBmyQMyFBPLeHM3PJZuQnPc6er4SEKkKAYkksDLqM2HVEbD9x4TQRpFEepYhMXTJkt",
  "key31": "3h6uPzDmxnHeeUpdU4BjcxQ3PMyUwZp2kCBDVpgSATrLdNQfiHyggFGmMY6eyu9whAZDRohQNLqLuHwAHoBZ3hYF",
  "key32": "48oQvYMqJg4Pp8pYqRhoz7gECJnkpN57xPTprc6vTxcCaiUXfwamtEWDdAJRJxV3CFCvVWah8XZyG8x1krrSeVeu",
  "key33": "5EHJ5AwJFn1n3QTDH7mZFRnAsDtcoMUXm1HVwhKfHWQ8aCvPcABaaibssCkMAnXqRSabsaM2YmLGmBgnar5rNTw4",
  "key34": "3VNXJsZa9dqt9DDuXxDp5AJrAsCoisbXvAPXa2D15AAAEdB7Vr2aqCwQVCu4vBrfkXM9G4LcnLZiuHtBi7fAVth9",
  "key35": "3fXzKc6chdfFbkjk5CfuZVoj2CP36Nb6Wr7VCQjXD5tZyCR4dNHPSUh6oiyKHyXJqieyo6NgMg1y77i5mxX3ftQG",
  "key36": "3ZxbAg3BARBvquoaVK5PeANELSqtNsiwGzY2SGQdAiXENjUHYGEHvr6TLy5Xp1mK9TR7Esopb6WS73Vs8gPViK6G",
  "key37": "5YCSvFWML2ERXD2GDPXPkhcCkuWXSiqLdFo55Tb8hQqqoMMa2a629qUb5nELXB1npzxpqXHzmEbq9MMMGAWXV4rU",
  "key38": "TUTD323MM7sJBz1RvSod4TCxducxaUxBWZh2FKs1fkRHENVC8WLswwHdy7sHYrSRgSHXcE4Ukn2qPkWHnGsJasc",
  "key39": "4TsS1gZEoSqUre25FH5AGvjXKWiNYA2eSiCLTDH42hEdnrogA4BMjQUyMwEeUFzFurNrVqogyzt61KkH4E759gZC",
  "key40": "4eGgZMVd7fqaZTEbhFnceRbfSyLF3nPFzhYVCNTZkR2gBFgsohsFMKszUNE7qN6cDjAw91T915bVWZJyjQRYkYzX"
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
