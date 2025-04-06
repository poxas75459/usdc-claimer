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
    "5SvQnnLSFqBpsPKm4BARdjWuTwuLFwabhin7jEZCiix7KidC6haZo6jc1SKpBmB3sRZjFsrFyQSWxbTa47p39n7Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qi5f2fzhsKS7QxGTGoFxWikDaGC9VKek9CJnwYMeJLWCgTJdDjkbAWfqPWR45zpMpdUX2NKr2geihLuq3yoa2Fo",
  "key1": "4ruEwPqmiyfk8wxyy7SWNmHLRcfHKuy6JiYQDfa7fhj1vkGm3fZq3LYNqqjMmYVnpqFHKBYawv2cTuxpTV7FqSSY",
  "key2": "2fHz1A9hm6Ta5x2zsLPgUG8nY9qD9zsYxyXQoD5EmeDhRoawLk2xhApv12UVMbkYmc62UXg5QRMq4fczvG5Efiq3",
  "key3": "3E33bxnLLT1x4dTWyh9T9ABt5PDU6zQpnqXkRpBtR3kW2dAD9Mk7gK36TE1BfXAejiJXG7hWwFkp7Vhbq9jtzWT7",
  "key4": "49cM2Xj6qq8c69NCyTjx1pMWY9dCHEicuTFthbpkrCrU1EQVwSSZe5TMBZ2Pdt4qYWYS4GhAzTvrvwEVx9fCHstc",
  "key5": "239EYVBQP6crQ2tBXL7WBmLYa3z937bvAKzGSx7jAKugbNztrZiUqq5Kt1bSeg1LYCyu4NJL1k8Hy5eVopUoi266",
  "key6": "5imnrjNHyKoS1yLiDjjZFtP1UuziZussPNLWwvQR6Qq26eCUMqSms9FQ8wEUq6DaMgwXzVLEuQUg86frVu7B4gfL",
  "key7": "5aQ7LM35ovLZxo8sGeW3Rg2YVXTtznGuBhsfA6b4YsNieZxXoGMFDyas6gTD55ESaPeHHweiUuhJmbE93gaHsA6c",
  "key8": "3XpViGTPyxMGuLpeiXCpUyhtYmVkyZEZz4pNV8CciNfRBLkRtSxEht3TmLfVJiRQHtfe2xpSFUGzPBp3werw5364",
  "key9": "3E1kg2YcYxRJg4vgDPWZQQRu3egt9bRYD4TJL8oYzJ2JH4DhbjNuoeMjirAw2X2Zzz7pVraeWqCV3HyVhsBt2wFJ",
  "key10": "2E22joTAwxTeujaAR9q1X9XjZEZJCmqQYnjDeVXDEZzcLXtUSa2p2hiYj9VGRbFdLNv58yGeDgjf6EMS5v7jnSpX",
  "key11": "4RfMoak7asFYzWuDu4SrzoAWv2x5tateRueDXQm1vLHx8scedsb4JSRsTGE8aXcd1WdPbD5hFtYxK3CYYV31NGJU",
  "key12": "2g5hXjkJoKtxojtV7mTdjRKymNrwuBHaLdwKqfuTN4kkS7XMc5Na6qNN4aHinV4mj5oPtgTKPnL2FhXwmePYVrrx",
  "key13": "5TBwUXXUKkAhGMorLSNKRz57SDdvKuQaQQi9FtaZ1oLgiVJiJe7bCwekhmwR2pH55fsVA6qeFCMY2ykk9nykJKcf",
  "key14": "2nUj3acrwTLk3twLVKNtuzAA7Tdi6yxS53XqYzDzVL5SMZzRN5iA82aPZCtsBdC775tHrGiuPdAioAJAsBRBKVY6",
  "key15": "5tCj7JEsY4ebYPL4zhL7qVq36aVJCu774khWmaC6jSJCrnpQPL89C2VSLHxgVSifimgHC3osqfcRXYU2x4Gfq6Pw",
  "key16": "bQQT1FUmkiDb1wxJqyXL4KehQj8h4VvsJp5pJ5QkwPnkhGxUegbiEVAVn3dx9ExJRYcA2E8CmkG5559Ayvwsp47",
  "key17": "4VFiZ36HyUhwQS2XhamJsJA5oQgymqgAgh3LcscGBnp4QxemXeUG3DcfyL6owarBvZyXfFWeyUUNitad26v5frXt",
  "key18": "2tmj31bL943HAujQ1g7N77uRNzsznZrHPYNaaZNx2tfrGpHuP7at2YmvWFer67mNvJi7jc3FWBqNMQHzekX5Rtpk",
  "key19": "2D5fopWLPSPpaYSSh2ELg5BB7Vo6kCruzCf4WrA7aip3NdwySfyJuHw2gzqYZNWDJihswWpBzSm5od5Sbkfq8imX",
  "key20": "4PeJ1eeTqVyRgN1UemCh722kphdxTvEY93XLZMSXdXWcQcH9JjoMyVKtG981YPJWfpsEzj4sqwig4DBJbLXpe81U",
  "key21": "32qmNCoEwF8HfpED5f9TRbseA2EBFRh982kiFGA76Saj9xYMdr5wghMd4RJFhyfQaEH7BLXVSUxi51HzGWjBxQsi",
  "key22": "4Ci9hKYFRDAcZaBau24nKsLwbQ7SMCpGTGZ4Xh4xdERxFG3t18X98hWUxE54yUEmX96KABH1mUkJmoCp9UGPmkRf",
  "key23": "2hYH1bwwPpxKQCTZ3bse6hvhM75VUCSSgR6B6G19NehiD72bDHrFkRgLnvs5vYsx6FuuAAHb3NdU6EXytDWekyrP",
  "key24": "272dYneMp8zUVXgdbsLYevDzcPuYRiwAu5DgkaTzz1WeM8SJZgKo228LaPrNCgRVsxQ6aeq7HHofESEEnG3PpDdy",
  "key25": "39fbAwcoL4KkHdfm4yMRh6YHzYVW1Yz4x3TGLnXfXE8fTEg2VHqFVVqAzkzqzHkDRL1UNBarGxAGnL5Mr91tswcx",
  "key26": "3EEwxjAMmE2gJjb4ceZ8tQYVcaJ66YsDpUqUymGbRunuXhV9tSgvFEiys7j3djSXeZ4p8iWQQt2XUNJn7QsEdsWT",
  "key27": "667idVuzLGHe2zpVYrzoAinMQvGqM149NFkz7rdiFFVRegqvJECRRomewe7iWYBJWXVWZMq5pcCYvtQciUh2QqTd",
  "key28": "2c4PK61pHQ7RyW9T4cPjvckkTrJiEdocFDieEhNBLBPkGrvxKSt2Pk2AR2pBHeakN9ojc8e8ZoKjqjuQXqtFNfVT",
  "key29": "5hjDKiXmJFFkRTsNdQqHRXRdrAftkJKP7nxHohKBFRBwQwnweZnxQctu1EKhst44JfYEHPzVZ4Nx8A9e3yLTta1u",
  "key30": "31yHhfCtszqmmBLbtLMLn2FAxV65RLMJtVtTfUJrTDoQwVtU2TcKNLNkvNSxojaqMifQ9ac5KgLpVk2qaDxUdPe4",
  "key31": "4jVb6E4jTipTWmo26YiFSFLSWryoWddxSnRMvr1HdvUXntTroCYwwKwmqu12TWdvNp7rfxByztex8YKGN9CexwsN",
  "key32": "38u4KurX692dmMUpsMHELrJG8X9NMvmqrsuche2CjSzySe3de4a47uVkyv2MauVxok6coa1eWpRFMRNCzS2uG7VQ",
  "key33": "4zZjaWnHRsF9mWTxt5hzBTbFnkEENPfdMZS9J3SLiT2ff1fnmJykv2JCxDR4cWAfCfRzWRaqTMM9e5QgqrbgYrN9",
  "key34": "4kn81MJB6EnXkSt8xjXgFrABWd2WBa3edEUqahXmDa7U1ckxY2BGRtGdNzV9t2Y86tCQeP2NaB56nSWNh1Fk7hvo",
  "key35": "2RLXdqXG7f8dYivpeWnwqZk5AK7WxzhfWf5hu8eu6tRGoUDm23Q5d7mw7DBH6Z7vP2sj9XT2YAuqmPZqAp7qNa6M",
  "key36": "2v36v8xFN5MvXfspPP5o9Yi7i68N4fzDJi74d6hoSYxB6NySznsRinN16wrwdietRj4grZPmfjmgc1uFt8831d5H"
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
