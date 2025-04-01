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
    "UbcvhaVaZm7mt2dG8NWLvJo75JXZCQ9BjCWmY3tzm3SMZtgruGvwEPov4L13KkU5eo974wLD4Qi4MJnTW6NcY5j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZwS1EThBst35M6fpGG1QUJQvXQsjgyei1Lqh8SLHQQe9CPddpJnyAQap8VratyBVb2Bym3Dg1MMpLVaPE3Qe7JC",
  "key1": "4Micj2CncJGAWZwE43Dvp3tk3RjvdqM4fiS4FLxMRpppFvb63Rn2wiBd9qQcdfgqryQhrbJrufk2dq2LCQoFQXoj",
  "key2": "3EAXD4ChEipV3LbUTUwS8c1fwNSjUFpedr7tuM4DYFSPxPVq33DTyZRChKbDmVDBJYdXWPn35fH4WCxAGG6us5E8",
  "key3": "5QtW2hH8FbNnGtBVkkUvm59N9BSB5hri8pukqtntCsmgF7cfNepKVPkUw6Py2yWKXMRodz6DmqXTByvZ73D419ZL",
  "key4": "34XHyosfd3s9Y5vDrKWR3x4iZLHEX5h4iSLXvdoqM1qfqE48ZMNE3PesvU2DuN2CrpA6gGEbE7x6qkqYDD6pTvDS",
  "key5": "5Wwd5tEJiZk4JTyKNNhMZPT7g6zfGM7Ev1H3dYGF9H5uEWC4hLiqwrhH4T5Lsomy2Bek2NRpkvzLYZixL8cmwh7v",
  "key6": "dAyjUXLwrNbJwGvtiBfincPEELYrJaGFA7j641FxAk8NeNk4UbSDEqjdPDRjfR5iheWRcJedYyptnHAK3CguiaH",
  "key7": "onJFqgpxhonprwKrq5jvJmxhpSqANBTB7wGzVfkdWvomxSvzaCTswxUEuFre1PEvFsWJFHvGGxxAz7BAmaSspkE",
  "key8": "4oSGDy5X3PAs94HHMtJTMD48bmckdT4Xx1vfDET5WKXQWWrrstXcSBHe5YHRo9SkBVUnDWYSkCTn8Vhpx1ekZsu7",
  "key9": "2VUhBWMomvyvBCef2uLuE8vLcxaYb7G2xfwpKdxQ2y2yPzKhsXvTEt7uDJurP99BHyvzbpzZVgFR6KPCfzZTYWMr",
  "key10": "3NonLmuSVZPrSmy4oeouRpQQT3LPr71Rcc44FhWVPoDmSqA2HBktkdTPfnatrx9w1ocySGyoi3abSK2U3Fe8gzU5",
  "key11": "3qicCMpTqrVcVZLuwPRAJKUha9eobs9xb21Sck9eBpLfuBuWpneLRVuPEAmSTyt73VVe9xAwjVaa4n8PjZta1Hxh",
  "key12": "3WbqjhtGcZ9aMSZovEc3XZiE79fUuDAWcJgbpNqz5ZS69Smp2NPxzc4Js1CB52WdX8AnR3kC7uMyDRLwEVABvejE",
  "key13": "57HqorSJ14s4LsGyrfZNnAmKhJPoWPsB7RL6ayEwvvuYtBCyDP52dDm2TUvDNvyy33KtKG8Kh8SKobfEbvhHKL2i",
  "key14": "44p6C9KQuX1QbDwm6ePtzHTVSPNWdCJs2MaaZLdkJEizBTb476jB1xwJToYvy76M1FaFUUvPqgD2aAuAaybY5pwe",
  "key15": "5z46UkdmhSKgwJ7W98qHpFREVqUuidfMXosGkNWaDoVU19t77U7vGE5kKsV39Vg2fa48YZfKaZu6fiEQ6csNjkSL",
  "key16": "2KPuuJpBJ3KeHmeiZU6Aej8dxHUc83zbAeR1ziy9DWpT2tdkhnDxN5HJAZgFink3AP3s5bzWXgPTjbyeiKQMCi6W",
  "key17": "4wUGe3GSEfNW8qwzLdwo12goxHENCfiFEL9xN5kVAaRAs2dveucBdE2rb9FBN7DJ9XbQLBBvH4tsAZTHLi4G1hfd",
  "key18": "zjyiALaWguG2LTtWCQvHJEv14YdTQomiaijP6qsfhasu3btkHLEL732TCxtHzMCb9Y5T3xMwv8mvDP3LRM4HjJB",
  "key19": "kaFuytDVYrjp8mTKbqweDSs4b5x9k3oSoJSw7LVbqy8AyXUCkVBVqbXyPucxSDhHoHxvqtn6cnbxnBQinURR9rX",
  "key20": "594pCdz2nLNJ9WRHjEfNcnqatVz3Dr7ii6HEFLShzmphkvoefFxKfetVciftnzSSNEeWLnGpBrnUTzzyLpgFghJK",
  "key21": "2xKiGswgqGcLDLLw6NAk8CV2KL5Y7pXJzxKKVQcCtmg7KChs1tPzWGsT7WBQcCeKodqUNHE3KM2Rc2wU4y2Z5rQd",
  "key22": "FxwCdqRNnaWAgzG5De6ok1mXYg3umbweoobzzZyNwdQomvgKUPHTLjhgKiAkrDCKw5KXeKYV1Q4KkyFzuxG5mJa",
  "key23": "4nocqMn2HLG45F7DhCfqdHFvxj6rntVZDrWDFPrrQEZsss7kp4rJj4NGswfErbXni7Q4vaHTvr432CVcUPrqBnxv",
  "key24": "43UVTPxzYSBVq2TQun3FucirYpUugiqgao5DaeqkBkm7AYdkpc51Pq8NTwKiSxCwCNGkQHbxPE8Gqdzg8UL66S2p",
  "key25": "2W6jMvePydWYGfZMGTzUhcMELUxFJoQz4TbUXemrqPDrfw9piWje5QSShvkf6oGCD3ijkb7QwnR7q9hfxWDPz8oo",
  "key26": "4qdm1vYX6odaxoLHsEDqbYX76ukLcNbm5cpr8nVWfKrhuE565XEr1ATmGmfQ6um2qLCMRmVfxMX9gwMRLkvSouM5",
  "key27": "5d986B7rTqK1uYZmcFA22P4QVp5K9hHhfHAK4QjNVzychUq5FtN1GmGQy2Fn8kLUPAm858K3BjCAvzsJE3sVri73",
  "key28": "AFWnVgi43hysMcMrMkCK1jHL3128AfWpzndTVyine6L7td4vwjYso5sx7KYmJhFw8saFfseZB5j29CjRxtET133",
  "key29": "5qjA7Zh6yKbnXvjnUjRRcsnNnruR5UBY3j7sRBtwCWcHcdbQcR5SFABJunNgiXQJikUfniY6jWyuvTxgCkgzXAm3",
  "key30": "55MYVVTaYuH3dEypv9H7FTEcckkJiJJvM2WfVxD3BpQRKj8Tf9BYBpgtZt79bPsxBqmvGPSRJPsPTBc3LgQUHdvp",
  "key31": "41GqLwTF8rffYv1uRSikqKQ8TGXxT9i9PRV8nvtwbCYJkN9XrBYCGmrHpXB3vDe2AigrGVTwK8ViCXCm72zd1pYR",
  "key32": "2beeMJdEMibfrzznTmrFBorU8GkJRpeo1qb4WNNPrVAzGG6QAQ5D1DDMwngRUGxuTWPrbTCUZq1wDRbbijXXQr3E",
  "key33": "2bShzfa9fSKYiGtXU3L5vH3uLM7EMjepwKvg33TKwJ1PaM8WfeFmDYecMDEg6ZrUmGtL2u1HSue7kmuBgmWpjDoN",
  "key34": "5VtU9gsJn5ngBUNxcwpDnVkYWHFAituBxkddEqCZ46xoCaeJ9HcMGW1Sr5FSSYmbo6i5TxyUtefFGCTnJTmfQd8N",
  "key35": "3ChKvwx2fyZwkju6oN6gSkZ4fzsmntR8eZoWpvYk7qXyozoyt3M8kqNW8c6gHr4Fq7KDPZ8NNDpjXAVK7SGxRh6B",
  "key36": "2Hi8eNiphA8Fp8wNb9u9F38Hfo2yrp8VxMJh43EqA5AHJPbCT419FiQvMYDthuSd6k6jaLdGzQL5tiajqoMkx5Jf",
  "key37": "4xgWHYDetx5hXi6Ftgae5zvszBitYBCAasmHvY98ncoH8C1xnkVnkr9YK1jz8nn9xs1jayAPNxSfC4yRvnqN8x25",
  "key38": "2BMU3bG4zEttheV67zmJDwAJsZPUa7qUVhfujwWWfbtEpDdggin5rdvrQra7YUiYPXo2epovnrvUfhw8RLU8hPha",
  "key39": "3wFM9jPdYHsqx4ZyiGBwgZWQHcf2RdVXYetbwoosfYUjLxiaaAiNkH3EefYiJ5iNVy1c5n4oP8ei43SmmimZ7E5M",
  "key40": "4c15tCsxtGPpV3oE1Esj116XYHxDN75k3xTmk89ueSkg4v143D9SLaZLvFnU7jU2BWZcTvJYiXGvYeR1NcwnuoTy",
  "key41": "3rgeMgY4HmyurFE6kVZxRPFc4HNgJXjfgueRLZvXdDftiG61DwMaKWNNGxJpZcT2vzHXbR9Sinox728R6d1nfw3d",
  "key42": "dDixLm3rwkZE4wuaca8E9Yh4bZYLk9jmMXb6Up9p8eQAanND3DK5yoJgsp6UCgieiSpESRNXYkHeekFoetpWUBC"
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
