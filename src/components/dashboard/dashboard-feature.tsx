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
    "tFXufVEbMcL5J2rN6pz3RLUWR14WTTEr4PmtY82pG6sRsVc4a7oFU8aj6N9C6EJ48WmB4nLUPwCJEg9AJKQWS6N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X656o3PTiHFeDVFLsro1rnKKNZf9dtHnHa49o8Pdh6CujQATNz7MTnGnymWo5Hbfp15z8e966foGZpMK8mdJEyA",
  "key1": "4ABMpWdGdcbEDWwotCmHnJjCkKYVg6Sih3AVeuM1TRQ4qUCvntUiJzRTyMsFH3vfupBjvzgWgG3dtnuZu6FDjApL",
  "key2": "5DLF9owT4VH3WDzd9mtbyJgaGUZ1SRfSrfGH1pnFpWo3ZvvhyCZXMLDhLR6YHpyng1pAg4fYa8MpXdMSyGD1WZx7",
  "key3": "5TJTM6zucZ5GRXqYbdYJbkTC3Zo3au7qBf9HWZUAtqvKiVATJcBHErTiBed7reVM8YVZJ89QmjLgfmk4LvH1Anyh",
  "key4": "27nTbP9bWzAsjkRytWZ3g1nLXkQxxvdca2oYN7FjGFvACmpkLJXA7fQ6a2d81Hb1ydbQ7n7LRm1vMLTaRweuVQ9k",
  "key5": "4haYPi65AXfSV3Yt7Mvib7sAHRpw5EuGKebmMMNiZsqhsTS63rtTkGL1EYeNGSM4yuT9XEmnu9veUW2o157yfWqJ",
  "key6": "37i737SF4VKCTsXP3kvBpU55iqRyGY6sw36hddG63vHtbQuGwFr6gstCEbhaAzJFRRkfNCKyavihmcdrEXSaHbxq",
  "key7": "5xBb9YneC6azQJc1dFgu6VUnQhuqhTTkgfM7uxfAdgeAY5pBaKZm4ryHXgTvgg1zkGG4thDGZNKoes9Q7dJ2zjQP",
  "key8": "26HskmhwyXfmqD7GjbozzjuFtmPSDJNiKDwe5BGzkeLDY4AkqjS5XykaswVFZuyAk83aH1yptg2jfg5ELkkhLTQg",
  "key9": "5hmFob2WiJT8ZCsSZZDjs8WK8V1RbnE6xFRtZTWdCh8wbnpLqGFkVTXFq3bii8SPrc6azXrBPTaYM3LbevWJaYyP",
  "key10": "3HVYnwQkfaps4WFKJjmToPzamzHo9VDAtY4DFvvjUyP9vWG8e8i3bkmWpbpUdEU2rgRv6nfRhw7jtMzXsGifgZWe",
  "key11": "3HwWpcJ3WuVRfYAEep1ypehBjwy1XZJQiUuA8TGT8PH333PTSqTNWhuw1tXzuiCXMYyQN48roghRnY6tmnWqvhNP",
  "key12": "w76SzncKdRNYF8VQ3FF3ag3nUCbsMxX2Zs8q2Mp1MFXS4PetLFH6ZKXNq4E713iHeqFLfKMTJ1LTYz76FVi9PZ1",
  "key13": "64yjEbErT5a6ZHRXD4ZGuwspDXF5XotigXFjETrF35xALw6BX9PF8BBtkLfxafag7e7SSGMAqcT4LT4a2rkHkzd",
  "key14": "JWW6DMuoxCFShayrRLCYKnK7bxMjhYnL9WwQu4JznXzsBh1RXr8VnyqisCKTmu5KVgPvDUNTuqzK2aAgTZ79LVc",
  "key15": "5HY3FH8vTaSc24uggmNdYKvbmex7GcLyraVPiKbS33KxRZ1gvee2qc6NcRDLucVnjLKtw5abhfg8CEF9yqGerfvp",
  "key16": "5hkLS6k8X31NZB4giWJF9urFiwj8zNqiTEn4FfjQCRf47cqqr5EdC9No6m1kBPDNncEm1zHfJFtzQwbNYTGrtiLh",
  "key17": "FPxVEcUHUAV3KKAdE1ZJ9KzGsjGcSwFMBjtJmxa3wMbnBDRE28yWrCZG8L1x87osWw7Ei7cKZwR4sfUA53e3E1Y",
  "key18": "5Kn4uhFbUrzs9EgD6X4AEM2x9M3UsgD435TkRiQthWc2SJdvEWpKMRduMqfLf58m55bBaite18GPm588uSZRtHhz",
  "key19": "5sNqL8faszwZZUKzTuUXfxHfkWh4GswZP2qhVYa2qvj1y2NKvbGMCtLje4CTMrDdvEqGGmZciMojAUyir7X65Lnq",
  "key20": "5zQaE1otKc93PhBRxuBBTtivCFNJY7GhJk18kXK53v65bNf1yT1KWgtHUYscYXevykxKn2tR7Gd6E5Ykdp99JmxV",
  "key21": "3EoZvn8tQYw6WwW8fRWh74SbZS2RqAbaguqgqGZdRtNYidEJYNhguRbybDMEghXBsdCryE7XQ1KC5zm86SGEN7NR",
  "key22": "4nxqwYJ5LfaZm61nuLBJJLvLsGS23TQ8QQJSw6e22aiDtsQuK9HbR8nEFoTqdP792y62t9BKT5B9Bfyy9cVjHd3A",
  "key23": "3qrRogiMzqnVjaWXsvLW3TH5b81nqtyEwm2Sx17rawyjGuQ8CBgpZMTYsdQ8E34of6TFY1q45GyX9BFU22puqRDZ",
  "key24": "4wXu7bzJS45z9VEWomLprpraEeHzJt4rM6nU9H4TKQdVjLaCRU4dxBeuiKvupvP7Hd19x1aoy37LEbvdvpoE88vj",
  "key25": "33LYzCCdG4S9j6zHSge7TJaubBhSpEo3hCckyBrYpYwudEFgZwa66zW5hxaP8nY133b6LB6VWQsttzb9o1f944i3",
  "key26": "RBruTSxWLnNiwYkUzr7zqduvSWRD9oFoUzChPELXmcNgMr97qV1YVmXGwUz6ZShcAbY8BrD2YXty6CQzdLDqXh3",
  "key27": "63krg2huYeyASxDiQZD8TRTRm23u5YFonJihN9GakvWaxBs15PBczDD78wph4JNkwtMyBihoAWoafsg3yZW7sYGG",
  "key28": "3vfXN19WykiRuC1jT3GNfmjEdYq8YmRX7c5tQWgjPKM6SqzdBSCLPvHaZa7crm4tFgbH1euChoo7Kn241GyPuwxt",
  "key29": "5MbntLJ7jy71Hdk1Lyodc8z3usXrUmkt3QALiEMPndKsqSAziUYs85qwyKXHhFEFZKitY9JoKnVqdDMWoWendFx4",
  "key30": "5JWDUKFJV4WpkgrTqBpG2UMfnjvruEmyVaBgaEaq9z72CkCUCcrXog5ymDkSzAR3SgHRAAyPzKzQuoDj47VqF6fh",
  "key31": "2JmQcEXshaGJdwekFR8tCRHkj68dqgZvmPsgzdpttGz5Z564DuFcDry4mvLFkzV1gnc3kKUFE4DDoHvZBCjsVUMS",
  "key32": "4Fqx7todC78MjrtJfAS4exhmsSuoLYJ8iwd2PWawFRwabAgwySSB2Qr1KXenkc16xLq8phKnj5unUQZfpVsNrVm1",
  "key33": "2QiGGiQgiLsN9ynbbUZMgDMmDFSaJQzSR3DN9aPd6Pyh5gyg98WhpJvEhCwGWVqTyHsuZZXUQZ1mvgY89dAnTVgq",
  "key34": "5URgVufXdjXPpEJkaWN1NzSn4XNMKPd6EVMuSnxd5wLz3LwnVN34FRLydNK8MiDTuip59XgMjSHh2kJLw6NR5WoQ",
  "key35": "4PQn3ZD1CcgiQGERoYQexzgv3EGGLL95BAQjSREkWpV18Vx9H2amwedfSBwq921QuQ11JPtPPa7huuByzAh9L14o",
  "key36": "JHBfWejiUsPwd8xvx6rjdhq2PLtti8qGwRsHDDs5L7VNCzoDMeFAxnuxrkjCm5CFHrzzaPfwWKA6zMoTw4DVfDs",
  "key37": "2mgHjkuW6aws5yUt1VxJVcfwd46jhUCPDVo6QRRyixYw5hvWcMBoLc84HYUK5WPMwgssPJZp6K7JtYATXWfGMdfR",
  "key38": "cy1M81tr6zrUTd6Sg2aXfsvewNJ3gbNUDn1otdms9rr7WjRzC3E58LLNVKRAi4dx1AjY5iVFqiNry7s8BCvybeL",
  "key39": "5jPnRsCZfpFftPaoj3ScTXqvzR5fuq2NmXprZLvRFAcUZq4JXNQ46hkhqrjwsVQyZPrEGyuL2vUUvHMPVcGGkUvM",
  "key40": "5E4tAR5wY47BoJgv5cKKPYP7Wr1RGvGqkup62tykzY4d56LbWqagNmQDC7xxk1YKH1iKGdLdHDL5VFBDHBXKAryX",
  "key41": "3hrQL7EfiDwZNKV837DpKnU8rb2yStCBieNSpP9LxzbCxHcABPPPYPwjv1jS19qPz16M3eZMZwDrZS36rQKRz8fv",
  "key42": "3NMmbG9n9BfNg4Gy3ZrSYjcwgFoCwVf3UC7nx31kncsKJB3oaWAshRxqpGLB6q1z4fq8HCmstV7kuH2ToppASgXc"
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
