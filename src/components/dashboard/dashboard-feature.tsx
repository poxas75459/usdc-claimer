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
    "2fPp2vaqRogr9yimtnXCAWgbHSi9a1nGTPu5uBZh6mbiawBBkMnEUXzLM5W5XrXguFHgC6cwKNUP4nmdcSGDFwk3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q6ck4ueTq771BbmGeEoWrrbUYLsjqvHXNcZJn2ty5829T2zG7CjPAApepbEbkjpDx7r96tEkcjnuoMCveWPGRWB",
  "key1": "5YbSVMupj6yXVUZM7wcdZ7JdJDYFcQqBN66sHo9SRRAS5otHdQ7xSQdzGhT2C3hBppiZdVR2HfPs4xzZfUcbT3UR",
  "key2": "5gV8NWG3qzZ2Lr3FcsdJSD8ZPpNtjhQZ7eDTUZHYAHvtJrvHwjWagJaoT586ctdt5xLMonWmdpsxdhoWETq2GShS",
  "key3": "2Jr1ER8teLQHg3dGkm6yD3ksviarvd1XJQ43iSH1rekd9FcFYpGRmkeAn3zWYeqgP2UWmNekqEs464HPinkCPd6C",
  "key4": "3g48djgzgLygMKPyWsiUG1jCPyNMFa98mr39A1AXHAwThhsQmyDXhFbQ7udDpJfDt5qQujWdTyHsC7ShGHExwmac",
  "key5": "4GS7nKKY5XSCmozjKioKyjsDi2AAGGRsPVYktFrzfamEdz5gz1b4hiJYVFqmmoso5GhNrkCcXjKC5J2fKgyStnrp",
  "key6": "2qNRtVLQdZ6wQF6E8rW5soCezeVx2CSLNL9ewXqcdVT1gMfUx4SRhG2NKbofUvidVXLazRMkpUaooeWrRsjAA5en",
  "key7": "2FM8RiVYxvShP2qGpz43GUjiqLesM5Ky4GMcKnrCjfbsRDcVt8DzrC8m1VrCMjWcnqEdHBXxEJGHvjZC6iaXJsGy",
  "key8": "3rFZRyjnvoX7DZtqAXtEtUkEsU7Etf7fezJPMJgYndEpHADDadmeeTtXRQ3fvuWzWVaTh9BSyruSdYnapD7cM25R",
  "key9": "4u1aA29x1EGXTD9gPC9vEb2K8UW7zoTgevwEH1TUFWT2D6gbqGCH8J9ANosY31q1JvZhEKudATxCmd1k72Wrv6Ue",
  "key10": "4DP4r5WxzDeDcSjVbjom1Q8ozcCCiB1sLqkNt5DumvEm6NsG2y3D9oJeZt5Zzajr1vWWg5uoVqCq1aKx3ArwAsie",
  "key11": "a9DkWTUEwchqKe2nTUwsETDY1DABDtbBxwefAEpaMs3eXPLbEz5214y3ThEkByq2dY4ywqHqFEoeg2PeserjW9f",
  "key12": "4pVod7rpfDvxGVSt9FCk3eGVZDfdRwkEKnWDmDo1jkJwmVWEY9D6KaTX5sCyXbUwdTWHcyeCPFn3dx7VoUFaTfzL",
  "key13": "3Y4twhVNTfoMEmkabj4oZA1igSELYZ6voHkHYH8CYC4gSHztEwd4bCtUBJ6YVfB4Y5wCLpy8AaPScWKpC4ENQCQP",
  "key14": "5NFyVnTqMxfKLYtkd8zFyeAmXKzay8v66Ljdx6K4yTDNiCyf624ggUtYbpL2dPMfkTTuATdVBDjhgb4aTTHcqeyS",
  "key15": "2WvYUjCG2Mns2yF6urJKno2BTCDsMdMipwhTGPgS4UfnCMQgqgoiJBFt9BbgeY6E6FBK1P4n2mM1eNDjBrt4b9Kw",
  "key16": "2vZM1iUVrVYnVvkJWA3tvrLWmNbKAm5crcU8xbxCgzh8obx1QNDzaqnSmjykykF5P3EdQ1exkayFu2cctme3sZkT",
  "key17": "5LZd6t8vsfmTidFxZnePzMU8fCQRSAtiQQ36E3iZfCHEv3YBVTC8UaG7gzUY1YH5TpFY7catFnrrCjAcniFvQmZU",
  "key18": "3hTMU3CjUJ2Kx3usq6CeEBoZYXGmxL74wso9eDYjWsa7rLV4o8MMmwgE3niQvhYnEBfvGWXMfgvA16HqEJyCky6Q",
  "key19": "5wcPNmGufZFjmPc3W5tjXpuy9MYY99m8HE6D2dnfQ8Lnckqy4kjKAeSeXMBDcjNHyFyd8m12F9p8HCT97dQ7PTD1",
  "key20": "5TbFCPNr4XDeHW4d7ziawKqPjA5a7VNScudPfQwnKnrD8khVVzuin88BPpZn4Bvpa7EhfDRRZKMmYq7BjE17YVCN",
  "key21": "3f35xiu8Z6UxVmFNAhhdcCLCjS59jnCzvFwgWxpnndbcwvPVZe8fpudgSygniaYX4YP3mz1rkzGvbGn7XCN3AQTu",
  "key22": "4xMdueYRexY2g8GZXiwH5PiQG5SB79WVmmq9rG4avLeQCipCd5VsiNhVhuXPoSsJZ9TrCWBpT69jg5HAZucb5dYA",
  "key23": "3EFScqdLtUtLRbrvc5UZAciz1ECs1EdEVVCeTwJm7FRUdMALAPW9MJbRtWmzxKz1KefyZsdskyDVdfXBQHzsBctV",
  "key24": "39VZ3HeiQGt57wsNbg89NdsHAaYX45Nt1hhFrMY2ok7EvEkJzddrNB6ntDaunVLKKAfwhMxPFzkeETQu3XCRyLxf",
  "key25": "QfdfZM24JnYqBssLQ3iWCnWC8rwkng8AHUwZXztGPs24EYnEaT7eKYPnTPd989SvneoE3hjdfvB4phn5SyiP6v4",
  "key26": "HZdARVBbynd4P1rPJVbJo13PQfs2t7xEPqGAGfB58LttJW5bmwdFsKJ4jH19wHNvCkQgTAeapULsTikVf3C8x3k",
  "key27": "2osvZTznaTdQTEMgV44kNtwwdY4zfACnAqU4wwoXbmRCRQe4znMLNnYaBgiicjL3x5o8NmyarX1byxNQ8dZ34wV",
  "key28": "373Nu5pRj92rG9aX8NjTKZoe52aFeMWrPm93mna3kXH2r9JEoYdZka49AYFK88tkwZjDSvPo9435YpYmSSR3MSsu",
  "key29": "3GHB9Z4ZeKB6KvUFe7P6SZU7v3xeKeTq3NCH4Sx75PHuKHAV35jCeFhHbUvf6WzrU8PCV2nkYRsJ9VeQZ62Tx2Jj",
  "key30": "59nG3QLww49Uhkyqq2JvtrfzckmRKLCdDBzdiV8zmM8P8zoEe4FsZm2bsPLYSPJVubZwBcYYz9tJ2MCMsbfNC4y2",
  "key31": "5yMGsDoA4VsxdGJU8w23r4V71tDb9KFR2M56NQVoepkpBh6EH5ngEFhxBzvxip2dqU4LRFjA4DHVeLh3fKJ21Nh3",
  "key32": "3opaimZosjU2TQZyFjzvMpHgP1VRZcengXD9XX1po5A1Ew41sTEQxXUVTGDcKhqMfL1HXraPZZD3wNVdzPqWDqPF",
  "key33": "4b15YpRmLFFmNDuASEaGSAeS2SjM9ixjQWpBgZb4XNmNUngRzLwWNqqiiNHGTePQmsbRUfS6tNxJvqUt6HZqj4rR",
  "key34": "3wktZSKMh2uD4SK2vWR19qLXdq4xHk5y3P89CmF5voCSr8bz8cnpWhYEfrNqXScC2TX3MswMyGS3pBSgz8HrwRia",
  "key35": "6mEEAasiTtHm835hwBDM6PiZabtL7v3jS3FecZ1mV3kFppYKrF3yccZMnBpBJZ68tKXHrdGBMyG2bhyPbG3QLSE",
  "key36": "2v7NX1uiS3NqBY5yfhzUyFqJkKLgX35dabXfURiQgzt6Dge2KHn1wBhvy7hxUSis64yFWD45JP5HPuvKoPy2Tawp",
  "key37": "2HppEzJHmBj4v4gXYcwr49UXohSnGVCesSfMkArq2drnK21SM6LijFCVTopcQfiozpmCVaGZwC7SHetXMqgciRiR",
  "key38": "38b8q7wK8HMeRCNAzYs98a22tCDB34QtWgxDqYsRZUiE92YS8ngZ81G5esvijDeLB84vGJHKHzuivZXM6B8xrhMG",
  "key39": "3wcPYf5Chbcuzcu4rmA3seQJBbVvvq65EugnryA739SWfMxprpwf5BUPq6S4vcPmYdfnX9BSn96SXWL1YJtb53i8",
  "key40": "2rKuUaLAwmDnSkeW3AowxtZ93oMbwH7HXr4ti2JrPV91tzPDpL4xUhMmiww8XUWSvVJB2H2p9rPxnWpwd5MV44p3",
  "key41": "5F4L3rzrLsdXt1918XhQSG8xVjRiaxbf1r2KaZ25n4GXtyVS8gjem6b6fB8T2Rbzd79Xggc8YDPoHakqYk8ioLrY",
  "key42": "3PAp7Yk1C4rZKCz21ooqWXtHETe62fvH4PEtoBckAoCUpWGPpyqeoaPLTfWz6gfFBwZ4bidwfxqtWtYUrRQE2348",
  "key43": "26REGvYJvzavhqxhRam8XBndWVuh5bNvqgC5wLSMX4pkht9U2qQfH3e67VrJ4R3kbDcqqVTWgCWMbM3peXQBhoHn",
  "key44": "36RCDvX3LNGdv2TWKLbE3Dz1CSqeXhTuST5fn2AGyCjfyHgAzLkJXDCwrwbKLwv9bXRAuCdjV4haRdLtX2GhojRY",
  "key45": "4TxSdSZEUnwqVsRupcXneAgUdPHQxnFfh5AVD57iSkSnfuRbmHjXFykAAaYUzvPJo3Ce2F1jBdh1RHrkkuY1KRt9",
  "key46": "4A7jZeGCCdMrHy1FRcCbwRBRWprs88323MRg3WkQf8bGEEDnrZuTgZbFVC6TLgf7AEQdpZxMVtv1dovEk3Lmgwjp",
  "key47": "5gLTBtstCQF8shFi4kxbsHogk5hEEpsGETsXmM6QKyBRVP7qTTozKM5bacvswtNDa9Mbtdt4cB8uKHcfk8PCLFi",
  "key48": "3jdNoaccNtux2sfcNkCABBTSHhG3F3oMmvBzhgzyJaUHGeoiqHW7vAmV4RAGkYN96rSaG2GuZsjhykTsS4AZJU95",
  "key49": "4da1sjdjZ5iwAKcC8n3KPoYxgrsdK8DgxwivGf4sD1ZdnGSYZ7SQbCFLoehXDjcbHjx8vj4qSTUEJ7682XkQUmvf"
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
