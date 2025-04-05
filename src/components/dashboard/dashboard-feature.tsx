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
    "r7uBSJGKJZGALfw8jCNZ2x2qSmyfWfTEcuJE2ULCvq4GPxVQFYAfBDzqRCk3Ahx4Etz3boWDCozYp2o4NqHLXBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f4Pq9RL7QgrxYubDxWgcLkYypfng6fHfjazsUZmcywRmjiY698KEivQNSgbpoV39roYWRywfpsBh8yKQoPXyeoR",
  "key1": "gY2wSt5Yvz3kMmwD2aQ53s6QmB2vHtQWxFqKbSqRLKXpTEeB8ACBgCtL3LuJ9PqxxZS5Jr9Qn2j9YwZmyJorKDq",
  "key2": "2wdSA9SPTgbmiYhZ3vQKgWFfo4N325NuJeoJ8Dsvmjn8mpSuBUt89N8VptLhD2LesEWE54RZCBNxtHKukRh5ySrA",
  "key3": "3XYRgphqfJsyB82X2M2XsqNX152gjutXvXVE4AdZ8VLwPG7tuKA7FEGzoDyjc2DuzUUNZhHPmP41tq2jsWAfMiJs",
  "key4": "gxkPNL9yeNF36Mx5N2mxcmsuEp31igZ77gfLDVWCAdcLunmiQC9PJxstgEgu3bvAmG6PWcC45s1XQKpoYyeT5vM",
  "key5": "UJjgh16bdQehemEMFdciLc2WeuZaWeEfniQGoXp9Y24x37GoLZi3rPpNXVyQzE6fGUfPBcDLdKvUutCAJPzdGXW",
  "key6": "3KScmELbZmb9kEHvkw5rcQH9ybvBg87cYHKFYaSoG3vYKCH7pBTTHMP6pLrY5ZTP2zxn3gZwQAm7vyYZjXecWKPb",
  "key7": "346eLHKKwbJWwfiUBEhFvHHtdDbKHVZG26Gnh8eLcXbJ32WpDHgp7amNMBWj7V2djarPZQ79wJ2Jn2m4ZkmD3BFN",
  "key8": "2V9HPpjCKyPGCGcHfuAvXNmouuUjvtkiJq4GJaxXtAf1mJ1qf14kVj3HSMMT5Apsk7cfbeKYFK24qP3BA6Q1apqT",
  "key9": "4TL9CAgUgvGvSa1bprZh9cnzeayDuLHgT5KBvR1oRRZHpoKNyLc3Gm6NNtYY7gNq6hbfJqwiB8qE17sw43UsXRJ4",
  "key10": "3mgh1CdgbR7LMyfsa6xgcagHAc7MLrnME74sY9mh7gLW8pohmT8r3CkR1CVU6V9cgv1pXSMqYBZ9sqFAu3PpK1X8",
  "key11": "5BHUh6z3pRPwPnAj1DKswCCopibX8KP98t4g8oLgaQM6u9QyuBBBDPQWwLWUzu9LzdYuf7qjnnFcZPfNar5ryHHs",
  "key12": "4Ukyh5q5EgvdtYJBxmEk7Z7ua8xosQpsAyKSbQZ5iGQv7piGvLmeKA4ZDWsLS17qJoGcFzn2wGcU6kTHAueVojCd",
  "key13": "29FFHsA5ZngqYutUqXtWt5Gm9SCKXVw1X5GsNFZSh1UtwyzmxhGLgtwZfiDojQsJtqdLCopzCrDoaXbCR82pAD6E",
  "key14": "4kVG74XU22pMTb3R8YgcByndNuwTheLATibZ9PVnc9Umoy3jKLfFFegJUrDEVVgiroHfqQvmqtQRSxtveZXqNT3i",
  "key15": "31AbYPZJeiqZAVnLGa4KtM4g9LEvdLXmZQvekqtttFm7eUzB6ZTZ9EZpTb3nboQBQ92yh3p1S23SpxsDVfm4YAAM",
  "key16": "3kt9cTjLXLRKs1Evn5BMRPngaDUSGRv4oovDfLNQWYrmCc78pfDfSs9Fydoou6fdKohnAThdm9tNr4UDuuHSASkU",
  "key17": "2psgvXrk6fSNL3Ca9NndMkrrThMwrV5DKjezST1d89ikJkYWiK5cUScKZE8mHEET7ZFu5eGVKdW4N5Azb3dNJbQ4",
  "key18": "4ZCdjE5zrxjonXVjNhVK4Jagcf9fNJfYPSUZj3rzs3wBTTMx6uHHzmzomzFCRXTq6onGEfaHFHkZiaq4ugi9JMYH",
  "key19": "2ghgxctv1TtnyS6R6UTmJBi1KqeASzsxRQFLqhQ99TntsqZqukCny4oczrKLxpKW4fS79ZEnE1KoAj8LiGtrURmr",
  "key20": "3LwHNdNoHfnyFL6VBKU4MUEqSarsv7KgxNyQBJsFUMBHk9uSKTQu6KZ1bwnWnVxY8Q22z1dJUxhaDJS1jNuh3oXN",
  "key21": "3Hs6dmnVsu43AuGECSoqbRfRBaGo46os2urbpdk9tAFdRKoP9z1W7YWshNF6hzyicjDYd26yrCLbDqMfokbbReCi",
  "key22": "3rVcDkLojd6QXXgRSyQ56vMh2hvX2io6PWFDH2YeAEBfxz8YECPzMctvpRN39vkngrNne8YNwGk655b7gWDFTCHH",
  "key23": "5RQeWog4oynprZ9wzaem3kK3oxzDnzWDWcuswQQ6Q5xjFwFUk29DHHmjWrptg9gdM9parnw9Ym1gN3MruR2LeekJ",
  "key24": "22moUVtUJRqyV2vFRfhh6vhmtyrHiqB3GyNiPhebcTcYHQUqLsjxmXjCxC8LkdyuooXqTM3dZw21MAB8DFkvv8uk",
  "key25": "gczvGV1SZ7TWAUo7JEYxatuVQw844Nf18pKzgU5pT8dogTJ3gCFd9rszUvbnu8pDNCV8gRZRoHypGrPynTX4oMH",
  "key26": "5M99RA2NZ35oQjL4vdtci5VG7QhkQQ85DtHzxaVhTNsBGASiHbFyDwvUY1yBEhtgqexyZsDevQfkpw4ZgAFBeWuA",
  "key27": "2jsJnMkeUqcPXwVnQyrYcPgunWhnj8ySmGUNz6CFQ4TAhmgQKzmCb8Sz2v5rWZbKKL8qE9LvfZjmmFHFvLHbuA5J",
  "key28": "FrKtFSNxhC9qFPFYHkLJ7Fc4LUGV75EUQcYzdf9zvp8tko3eWsrWbN57GezNHKp37xLR8AFsGpt2r1zitcMnZjD",
  "key29": "342qwpZmyktPtV5Njdh8tn9s4BRHvnMSJwt3AJ9yCLGTYsb2F4JYvFQUZirmdhCDm6E7zBuTjsvy4DefyEwHUiP1",
  "key30": "2rUSgkpYihKV9XciwpMNqEUov8W8iWbCFqRCbPTvixWDTbN4vUc7yLEzAzxKXgKi4QRYxcUKifE7NS13mG11j6aR",
  "key31": "2AR2cLu8PeqRW8PSdaNiQPLMhP6FY1sUWY2heCta8HhTiRXmDqWL9Eon47xSu65ZCSaF5TB2BqGARJoEjnMDj8Nr",
  "key32": "4BvjTdf3AMuUECTJbZqgRJwQgPvwic2pJEpSnA34ZEofQXx1CtiowKaWYtTM4GKmhmMpCPFV96mdBdbyhWtJr4nX",
  "key33": "4zQXPC6494mwnecXKUXezGcgwyZ1Fp1MHw9kUNGRTSG1fbypFZ73mjKcEohLxPptX24r3CNu4GEfnSoz5Mh7rCmz",
  "key34": "2BcNNXitXpDce2nApwDfjYpJa2ig1xfQd5oLqfcRvMFoxorfv8NixCxiomLWRpf5xHu1Zwn4Z65dGGcVHi1txbXX"
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
