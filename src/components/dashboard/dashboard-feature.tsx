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
    "5UkjvgpeJTvAyTdvGQvYy7cUkoSWALqDDLmfN46d3NaxhCDJVfqTp4p8LS8psRKCjuvADftNy2q9tuYs4zumP2eW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56Fw5ZaxbSFXQJKHZg2RnzRuoYRNCaYUxkuzaFRx1DMXUfUViteABEq7bspuR3c1Pg9gadw462NmsMrQ8vKyfx4j",
  "key1": "2MNMmqR8f9aeEs1JawCKURgxN4y7DM44kXMthLaxdeQ1bfwo94eXis1zVY5WDgsm2diAZERwy4TqXY2pfHtgQajV",
  "key2": "4jxCVnqG9CBbkkM6rC5Za8ATS9MDyMr8ea1WbfdhK9C2LvRb7vGWW6XVvVhnxvvdjbY5x98x1B7RnhdvsQNzLiw",
  "key3": "5yZYJmC8yEfxp2i387bMq5jrtXREvj2GyXPMKx9Szt8nWEy1eBxygXJipHCytwPDWvnYx18DJDnYL5Der1wEGoxo",
  "key4": "4nEvo9PMjmJhKCszH3YngYsoebBVXM6eY2NnagzyDzawEcuwQStwLBTQ5dw3rb6j3S5E5JnSrgpyC5YZi4n5b8xZ",
  "key5": "3o1jyxsY8AWyQ8MJmoikib93Rsep9x56KeR9rtU2wYqSsarTYrmfVx9qduCy3uGCpvbudW9Cr97x411r8thGqULK",
  "key6": "62KgyJHimAJWA8d7Cahfp6w4qUAh3Tjt61wY6P3rExFjRoSjJw47PZkw9Y9miXJK8r25tpE4Cocez5Lp1braFhtJ",
  "key7": "61a6xeY6X5T6iXzpDccVEgHpvicGPJYAF7bTjfXUSXyzaEE41BPNJh6bWcs4DaCyUP2aZyPxeAtE2C3eNycQE4Y",
  "key8": "2nj2YZjwJHsCUtkDzwqqc469UeupwqrtYWEJRMXDGSdYVH1sYAs7GHPPKp1iUJYHBcUCnd1JNyGnSL5BxU8s8Xp1",
  "key9": "46SyGsib9GSX8KZsGCzFyRqhqkpp36bMSvU9cFfMLkZM4vaUijedii29x86UqEPzQC679gfZFhKjap5qCQjETvea",
  "key10": "2aosEFTkHexc2qDjTkxLbXBjfYGVNWkomEETEpTk4vHtMK8YeXTkXSoHpoL7EwzZjojAXTQndDQEKMRatoknvzNN",
  "key11": "SPoBXVGrLSDQdLWVRyn9fRuAmcDatLQ9hK3zaQYpDC1MbCETKHpVcFRUPVAbQTM6Qs44uuduQjJhy4VZXTdPHZd",
  "key12": "4BVJduTznb7U8j1v8AvQWsdNf84Xg6ntHb8uSCGaVA8kRCxUczPoX9rdkD1hyoQ21JCd5qKAFSDYF4Nt3zT4PEFm",
  "key13": "gQieLc6rKKxywh8NQ4Rvy4EgQuK9tn9sBcneic3NbmiH4df62TnT4VWcNmggpVGNYbeyqh3iTu1bJ585jVDBPd9",
  "key14": "4wN4vC8UxVgME8Md3DQC6z6AMjBL9Vi3pKGpgUA1bXsPzQvoPhZLuSuuruZZUsHxREAji3C9gELppQNfUitwqoRE",
  "key15": "61KqKsbC1dhzxZArU1tnEKR8To2918rsbYYope4e9jp22NjakDLHYwtPaMk2xS8GReXAC11BF1nMBg6jja8kcw7t",
  "key16": "64puH1VdgazrHnWQ437KcqVe9HTjReH4TTdVNg4ie4U2WHD8Y3TQGEZ8hkjHRA1273yVEfixFdx897ck22dgx79w",
  "key17": "2HTBS6bvJv7wn3f4kveqdKMsAvDUA2wuV8M7GS1jjTEtQ7wHWzwgj5onMH3mMBso2tMZWHEGXqhUAbVWcQMuoksn",
  "key18": "5PYiG2f9iAEWpYHEtZG4WwkowWJSrfadJ8jZYnre1yKiGvKZDqqiwoSJhzKNAScnu6AdKCFdCdd3TVwgffxK3Rez",
  "key19": "33xegkP1ATSStdgxamsu3Fg3pRTkhT1kXuFY4kq6uKA24tsku73vzSNv3ZvmHDEwdc5a3HoYTe4PHXxCupmn8ufd",
  "key20": "3AKydo1K5dQ6BgBrwwJ9gYjhJW7NsLFSK2z8odC5ukfcfUtVK5c5WKBapjnXterJXyRzbopj6eJr6BbTUNpF1iXC",
  "key21": "3HfrcPJmuiTxNE8wpiXPYZTrKBzB5jxhkKXCMZjNULVPi31EzWSC48sKtuUAMUBSFqwTGmyJTUQFaKMsxfqhHjiF",
  "key22": "4JZihGFrDvY7mziLxupYy9Fm7Jr3sz9BMXYDGXWrrKZWGDiVsPfPFjxqmqp7zzc2guFAc2Jj1eHxa8tkx5D25zNA",
  "key23": "6817LBUwPA5wBDmtBKoeHAeCfJc2kJWGKbwLKz7VMBo8HVny3qzHL5YsBNR9tMmoT7x1WTszMNFtMNJcDureeZa",
  "key24": "cWZrCNqwKmnqiwVWisKHXKh8B8UCquyDmWHHkrYZ32fWpcNtfEF6X4GWt8QjjEDJE4EHpfPxNp5p4tKieiYQZP4",
  "key25": "tZV61EjMWoWyHsuKYhH5mxvbPLx3BHb8JqC33mZSKK5uGit1CYwHBrhGmM3Zk3GXLfTiuFHtWxQCx6KunJxoW6H",
  "key26": "33RPkreW18xPFkNMVzsm6sYCkKQCekBPMggGj3RWauQXHncA3rRJdreyLhiU8DY9XdPkc4yKGNctpueQhKaGdJsz",
  "key27": "YLMXVAsSBLxcFwAErp7Hu4XM4ucU6wB8pgMgjCVRqS68y4crmoHwGVBPHQXvg9Urm2qiTRtuBVkTE4EVg1eqdSm",
  "key28": "2QGAPpmTdbtBEMjFBKs95DR6D8xPqwKUZ74KqfFYQT9EmpdJuKYnemnYpijKv7g8hEqpUbmEENCEsV75N6P5xReH",
  "key29": "s2aU6qDQs48HtGLci1sJKD5ukaFwSLg7Rs4NRPnHcf7nN3Z2cycjmKtUzeMeu3zrVjnzZ4gEtPWcSha3xUM3zsW",
  "key30": "ZXg7h2aFq1tUN4vB8ShkqrAxYJcKLhuh9jJMtsrVNGSocWysY2onUkdXk4XTGBzJ3Y2fFgtFrDLxGDmkR7RN7Hs",
  "key31": "2BurNbtXJAJh8KArb1BoPMB4XkJzxJDxy3M8rNRqtd6uVJCdrjqVZ2HH9rpAXYnvfirmydu2faSqNrUWLB1cx5V7",
  "key32": "pPWeV3D9hYe5vg6gEMu5PfjegE8LXacrB1xJCwZ3PdbJujYjpoKvR1wXcDpYcTBQvVpjDZCsCezkTJe68W7Xdmp",
  "key33": "4MgxjSLDPUZzyHfDzfwhNtTTDhxkyCi5PVT5sZpGafFw8moC47pJEoHeWxFq2LBWfpaT4ujE5fNHKpVxtPVM8XV",
  "key34": "4UVb27FqeFVy5YqxzGGswUuQ71XSd2G94dVskiRfqHQGBF8T25yjf1o1VTVKaSA44cozy5mUinK13TrX6wsKWBty",
  "key35": "3gzNS2rqaGhqfmXvCoTEhaUjKBJU6d2zkhywbU2SXFjitMZ3ABYVZJ14W1Nuh5NkAqmFPa2G8AAGAKij6hWJDWuT",
  "key36": "2GMmaRCKTukkvnCPTLJGkkChjAH8JNoBXu8sf3NzCuxFS33NeJ1KckmeZDjTGfokH9y1xn1ttWi7ytAfMVrrFMkm",
  "key37": "4tFNr35NDcBeHuQfgn3o6NCQTEXyWvK17eboAwxByrdtXGcuKRE5rTJ2Mcaoxx54xVV196TEJhYoL5zjXSjBCr6t",
  "key38": "4tM47NXTiUzXh5DKmEE3yraMyERLJvrZAbyrFAuQutyod1J1zbL38MdZqnAMrWewVaLtBXNqQ2JrEDTpRP7QJiz8",
  "key39": "5vrpYy2GtbDak9TBFGvLXKxJNJJURoiQ33Aei9gYBZUFpmHqrKUQ3P2YEXF7WJo7JmK1S4QX53jZQiWoeKw3Kuqw",
  "key40": "3RAPXcfzMCstKxuanDidvsbE51dRyEJ62uo1BMK8tjhGRWFxkmFDBAxVCgdH4eEYgWuYWdHNu2x1gNBHTC44VzJ6",
  "key41": "52QZqdGkh8mP2XBfJ7hnWCoQArBWdAwXPLMg1iGoGVRJtUw5gJqJ8uHg2DAzBL8MMkaWATFLosz39ccT7eutkEXY",
  "key42": "y9QUVvtJRMHRGVnq6wuUmJPnZpzq1Af2sRsp9U4a6aqkh6QjYRpxrjA3tcBUUrACJUuba6hiZJys6aVs4KPGQrk",
  "key43": "3jakWx56gDqHmfUuKvWSRpCxkQRtyBa3oGc59YsefeN36BBiQbWNidc18pJVf5g6GTxqMzVTMtJAY3CH84Ns2Tjb"
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
