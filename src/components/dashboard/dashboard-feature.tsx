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
    "1E6aRfkZRciudnkrfH3DMuCYeP4wt958yeAQQmrmisqpYAsJZLwzEY5FqG7MaXikyqdT9JnkeD5Bny1vxmDgh1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R6Ed1Z16LtijnM73sw98Jt7zJyskE8smgkgdq71KmLenv5PjRQ3GQS1EvCCGPsnh3HzMLnFJ8nWETyEC9zronRU",
  "key1": "95q3DpmfpW12cC62Xe1VNSCb3p5TBm22AZ6Nc91vRGQqD8Q2wmpXf9WEh1Gtj9oPMj4sZkaPFGgzfMvkzA5HF3v",
  "key2": "GoXTBSiQrUtMB4vRXSLTVv9HdgA1HCs32nbq1JdAjEUAtgVogVRVCcrCUhtQuTTvyG1RkwsPLz8nstJp8RYyPzu",
  "key3": "66awjDMN5txvfkjiZVhgtKWK8QLXRoYYLD7pN7nrXDsJw3pZ2xeEeTAJf3r1BPdiYe5FBCSv1hq2Wd6u7pfAM3Q1",
  "key4": "3GpUjpACW3JYpQt6PReqifRBGW2w9KY24zpNn1qReKfE94TXfjakWfcTJwh6tLapmrBRsAXbVNPdgo2fHvJURYEo",
  "key5": "2omTwSbBKmKxhqwwfqgTccjFUY6EPrf43Qqs5AVRTd1t6nDTxfY4JY42ndHhkHyowJ7MRkpYrPpdrp2twUyq4PLV",
  "key6": "2CzLNwsZaGdF2Gv3ACU4FGb2cJ2UqQsfNHR59NVCwgHj6cLTFKnXzQejwT4pU4RqE7UFn4i4ZYMaCbY1VQkkzFVz",
  "key7": "3HSivLAAV6rps5ak5xhTgGpjYyCk3pPeZCb2GsLFYboRahTZetsJDofLFCGkDJsXxAHK4jv2yn1QgP6FZLDAXjgv",
  "key8": "eTVovYdwbtHf3Mb1qhvPpvr4uz86Q6uYskqo7MrGhZm9myT3x3Sr1QNb19pF2JrAXqoP8a1KD9omz9Dn1h1z6EV",
  "key9": "53GUtf666uKWLhRxEkW8rrKPYyEnDiQHBhe1VyPhpjkNw9QMbvCxQ63drv46KSPHarj2g4rbcsgvM8mzFn3RWqbW",
  "key10": "4qbcg1HQbTLYY8rFvo19cxm5vex9ki7EPfYXWXopHFSoSh4HxC7KDZosJJeoVZMZHfoLtgkaNmeySkBkkzeaGBAA",
  "key11": "58Uy1yhCGWWhT5Pnr1W7nDMPoC7gSm4Ed3Uk25EcWCexYQt1y6Ya3LvQXvf2BLw4RxaMLCyWddSXC4wDEVHvbaCs",
  "key12": "4Ms2CDmBDNwJFeVB3SsxEKo94cZ2ZTNd7Np93BZ6EFQZ38UJB2697RxaqnvkMtX2EWgda11LC5LeoYzR7csiYT49",
  "key13": "4jN8rt1bViH292WCEdBzcnk86xk7SjcfNzpnaLoQUPYBG44BXa1P1wnTLjYbTQj7E2U7LZNdche7rZRQWcEfFy26",
  "key14": "67NdYEH4cfno6LJ1bHx9xxsiXBvy2CWSGiqbrxb7bQUmZavtoe4ajBNTGd1R9zdmoQr3XmnJKfPdx8ogYumMoBn3",
  "key15": "2RkDF2jqfdC26ULqiQLPXtRJx7wasppkQcU9bYBp3aeaqu3XutF9tS44JiXQe9L4TeCAr72k6ozDMywf43L2XThV",
  "key16": "2ohqeyX67d5FZaoLiZXAuJigpHNhuFF7QBs5BubqLQS4Zwb2Gsxxw38XoJNP5cQrE9pA6nKdd51CH52XUJoiaKxD",
  "key17": "2fTAXcixeLNXrqaztCs1dex4mafRgFzodmuChnuGsh4Sa3hy1LiyZfSZ5n99QsPsfN8qVXvFVeyVJzpxGVXAUoDJ",
  "key18": "p2CaBthYYBmhFfCasUdMDjq3BAFqrpRb79djPHqae57pDF9Hm3uG4yeZPY8t6w7BLEFV7csYbqHg2b7Ncri7xmF",
  "key19": "3ZVz6RQR5ErLmKyekqucStdoHWEz8UEEZmZQ57r6wqUuYnX4588RaHmK4kNoYx512PXRWUBxdH9Pr44AJKYunLXs",
  "key20": "LRAYa52muBTy1xDERKCEhKZVGbinT5LDdVnBgx18dMeUpRywYnKkxe3WQfJBrVBoLr3fq2RBzam2h4snKUZ8PYD",
  "key21": "4fGjYWcxZy6G8HHVmCCFLSwDrG1LbDKahMYr2M9FyNGddQChKZADERXZY1snU3L6tPAyZdidi81QKWg1C8KuZsg4",
  "key22": "5U4QV5fbwa1QR46M84xHESiBBPeNf9KbFF9N9y28swzeHCNmYHDVQ1B5pgT3gnWRPThKLDoXtMoqr4DrCXyBugLF",
  "key23": "2yKxLgYs8b2xyL1zsExqcQTrsivWnEvKqnDFXcjUdxX2u3Ls9UuedeU4ShY1GMFjXJQP1VHheMcNPitFU6kkPWuU",
  "key24": "32SEnLB6QSk4iWoyHsT5apgaUeehatTh1ZsWDjwmkYdWMZ5hXHbBNQZZAAuY3Bwp3zr6MCiLwQhHfKoLg2riSEiR",
  "key25": "5WHEMXu28mgsiHnph4queebUKbRk1eJwg8UpxrQMU5DChV7RX7MkVxSEnae3Y6xwk8CrgqHH9GNTtTJaXRe1LDN",
  "key26": "4VpayfE3yt9ixpoHs1eyijBNQUTgoHQpjKCT3o2FJjtTYbCxAELC965xTRAivzWvcwsL2nLFcysuodE9BQjZQx1Z",
  "key27": "2nQjtEdYzyKcAZCyVNCG6MviJHEuxzxcyC9RZ3Q187QeHtz5tBRcR8z9DYvvrES99yLKkGcFxuRwDT42pDZrdQzj",
  "key28": "51FWdz4TP4ZFzeJExFAZm7VQnTsJXL2xhKcL52DB8VmhCsa2u29gF5eh2g729pQHQy4PRGnNCC1ofS7jTKgqzMRE"
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
