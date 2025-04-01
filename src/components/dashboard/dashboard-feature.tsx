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
    "RKPSfEZ3MwoXnhfvPW5Ed6uYEQz9yL8qBPbEiAr14ThrEwCzkb8ZKkFcuGrKGCZqqpaiCML7yfzLEHsN34Qt54t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W9PU2s8ii4G6EmY2jrRwFK6V9u9578yp1jTGT2RNxaLSnG25nZpgeDRJwYCfRE85K6g1LVGpN98WXcdeNuJyZcb",
  "key1": "65tqGvk3citKMW5Q2h6qPAWpo1F1k8YQwM1LtmPFxhQwAApE1s6D89Aj8LTL24SZEYqBZGAvvrLn91nqYceCVcVv",
  "key2": "328BZ9KCeATerkATKZkV8Rm3XwSg58xs3dEa9rEaVZiYqwfepwY18zDHHNXNAk78htddEiXfX2JcQFfPW9d95h95",
  "key3": "6b7Kbws16XRtJGBtEXRV3gDbU8LgsjS6BzFHggNThjnW5iXgq7purs6yEP11HgkbMWXRYo5xnx1XSgV6WCY31uD",
  "key4": "3LFdtrpREJ1igAhMaf6MaQMcuMaoSp2soxwGkuhqTdrdmcCPY6Kbh87kW4HR15ZsN57Vu3tGtbdEopGGgkixgMNq",
  "key5": "3am7cF2baHpZqSjptbSBSQSwSBVM9smuzZpwN4JCuy4GgfxrToabtW8J1LgqsquD4XXFWHpZANCoGos2C7otH6ZG",
  "key6": "3e2rEDd62yrcCbyDaMSKFtaGJ3ArVjJ7R1dapnLHbwWMLVUrnQonxBK1anKGBBnapygavn8KvsULtZr1JYcQKuLD",
  "key7": "3qipoJaZduNT1PQk4pwsqacenGja8VufxBLgAwk18mXrrYa5k4n3LLUcZp3w926SeLhWJenNyhSG5qyCQmuunKWD",
  "key8": "2aR9ssZu5L7vkL2rwFBwoFTVcceAo3xDMdRZeZt2fmtcY4PdTiDa1tBzU6ggNsmxPBu2bYxm3ZSib5deZDmRCKdC",
  "key9": "2WUbYMLz2Qo1W6ou1xiBzs3qM9eb5dJ3EQQmZBVNxdtf3Fb5ELUdU2rR9KLwEp4tLcyWqX9cHvibC8GFhGfQGXbG",
  "key10": "5igxw9jAGYizi1JT8L3HAumaqSCDp5sQjjyibCw9b4y1t27iyJsXtF1cZLV6R3oRfNkscCMg3BhC4rY2nj74vi1V",
  "key11": "4NLUr6vRZYNUdcfMzZ9MeBYUHpdukrszXUZKfUhpdb7Ej9F6hiHVyWwLVgWYremPW2BasNWi8a1FmHFqgVCvUaiT",
  "key12": "245bppT4ZNZ8GWqvPRbmNAR5eWJ6DTq5Vby8pb2tVBxJ18ZzJcLg3Kf7QBBkgSnLdAUngMz3vszq394Mzq5E8yx7",
  "key13": "tV6mLYpS9GMghfLaQ7mPqhrX54LCoAU86v5uwkiUUMY7bBJ69R6nEonW7diGiiTUyb9jBC5uQv4aLypCzJNHvAd",
  "key14": "3VSXQ7UzYkY2okTpWqJLsDpKP6HTFxwxobxnecDyLLZDSGi1wduQEs8rUsU61SL8YFsRUV4VmJrbdJwWiAF3eP2G",
  "key15": "47igYKrWx6UXTBydQdVP46AceJi3DYyiYuc55KytHJXQzibkjDRXLGvwchu4yBWWUtq51UTeehhbjGNTMUkaaPnX",
  "key16": "GXjTck6vQXrFWVHAJ5tdXVsyfAAegTho28Kqx2Z7kq1sjYj6CGFiPpH3wZkUNR3qnnnkuRLUtBrB1kdo4tjWZmf",
  "key17": "4DkqpSe6qu8gg4szGUUh8AN1zTmGJk8rHGJqm4G4qDQaoLCYD6fA8gU5tPvXeTqxgSB4RQihyywv1JJ7a6xkpXBV",
  "key18": "3iYYW68eptc1iWFYS2gti2k5nUPnmUZ75SdMucWCLEVwKZtA3pExUTs8dkVxuE3rQ6FPmt4LJMjiM7MfdfZHwC1n",
  "key19": "48mSYTAAeWM5rwXF1VDnUTpRt5juG4qYuzDWb75EqpkQpduuaYHs5eYqXCCEC1MyV853PYVYU56TT6Yybz9gHceV",
  "key20": "44gkg3iQaYXMYFQViufxuXvsutLjCDycBGkdo6Kjgonhd3KZDULr8HoS6mpWLPU3Hnf9pMk9TUgsNucahgPkR9eb",
  "key21": "64VHct1F3yNS5K7ZtTQNosRwh79n4zd6bMtJBMjq6ciUKQsFKbE6rSrzCD5u8yLidfbPq3kkvaAmXmF1xZodZ5Wf",
  "key22": "5bwHzgxE5dL7WHxHJ1z7Z88TZ5oioiz1yYF7QZ9DixaJGskUwYdUZ9w9orjuX6aPw2Tegy2Vb1SUHbKxiByrNaBZ",
  "key23": "4iW7FTmwk4JQZQ7SuBShapGtrY1KNZL5C2Dyq8DVNPw3SdKsw7FrLi8faFTCPTXMUVb4xhNtsVMrRxcF57G5bxPT",
  "key24": "2EL9YqcuPCSuBJ6qV7MfR6gPYYS5z3T5QuDfg7J6S3YmNLCRYavqsVVZzGreTDHYAb2bHFjTVTq31Fp2WWx884ES",
  "key25": "5DQEKDqADMjPbE5N6Wj2bevX285HW6QQ3f2JK1RdYsuWutodCCp2SyFGW9QrCZHtPpap1gZM3xq6J4zMgUarmbKx",
  "key26": "4DeJ7cp16Td7294QGB1Lpk3dbeKxf93erEgepP7M4P4JDUXPpBxHhVNvoNxiAn9UAjRh8mACqWomZRExFSk17wCR",
  "key27": "4Q5LtXfEsgfWJz9Q75n3TPZZq64sPTh1g1irw1rZQTmB8gBzNGMzqPgJpa1Y4bfRyVCYmVNGLWCBQtQ5r5ZLXF1P",
  "key28": "41vroTJRh9yNFiMzwU4tCr4kGfHzTZr7Hy38z1wBPLDEVD7iDVMvWypxy4CyBL7Uasxfuz5zZSuKJxSD6BpLTuBv",
  "key29": "3vHSYNYkARBknCPHoHnK7sFdssVKLP1NSfqYzAbUqfvdbxj5meGaCDp4jsgBTvUwQtdvPD3cKjGLw8wH92LmXY3X",
  "key30": "5FcUAbEmwvtmEDA42dhEWAACUiyVixzD2JBjaLTcTcYUB933Uwcqto6QoxfhQt6kEVUQAY3LYo3wC42jYqyMWUaG",
  "key31": "4m5EWBpV8wrmBJHASoq7phmp2JtYAAWpokvCNgWzjbiDEcFRXEPjLAj5gCPniDAuzuDKFNpHH635mtRN7hE6jZrT",
  "key32": "31LPyciQgJ8aU4d5ExbAtNqMwxLmBouwodU64SCjisSpmCoN2f2E28zhjByZ7Cup5Yi9tasFPhf6enBnYc3SpArx",
  "key33": "Fqh9edinGofQsZgNmk7ccfqQXodieWWJV78dch1LLPZr6t81nUS4y8izPMu4eqLN8LWYDRcrvAMTAzx3GXJzGgB",
  "key34": "PhTFvo51vvBcvn9nJLJwRJyfThuox1SaY3H7dFKQWF4gxWikCznRUh2VNWw4ba8NREi6o2b24YJVjduacyyV9r8",
  "key35": "2w7sG82CavbEAtbxPhsVMMPCXmh9veSCM9jMtpJ98NdJsphY29uG4KFp7e3VhmYtZkGBp1zBVZNgPFQvdPtT4dmJ",
  "key36": "44iKJZpkpBB18aXusq7F2dsgyLNTYoyQxaHV8xmamr8mwAakkNbxVeeFDwiLLtJk6HK882FFEDeCrudzz6uhzmgf",
  "key37": "PBjCpNC8VAWhnCZfmsbheqY5p7BuJmqrGrXTWSzCwFwZ7BaatK7XDxdJuYBTTqGi3mzCCseZxsWjvg6aUP2frvj",
  "key38": "sVC6FZ6tkbCQxu7iobEF5iRuDcBBhzBi3CX81RXvZx7xX1RNaKRq3ktFaxUuEaKDsWv4iqbtGJsVoHsckRBWwjQ",
  "key39": "5yBU7YAh5iadkoLGR7qBDJWBJCYdYHWDh12ZUggCu454Vx6sK2wzw8kVXBKtNp2v6mNTqBmrxaYPRy7sZKBnj66a",
  "key40": "3wAjgNdhXZBxnNpQiA1xFSaZwStdMWxwgpbtnWdoGaZxBF82wbosTibXMvzCJDnZNfnnuZVwSS7zcyU6Z11TAguc"
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
