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
    "3XuCnWwmnG9QW4W9DPqsSpYNFoAYC4BMw8F5rkYTfxXWwpPe7LKcFkA7NmfadbnPFLoXXZHhKp5ZDQTRdstKK13y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b5ziH5Lr7ShQqYstY2vxcvKbCWFC8gbYmMDqdcNDbizPsDi8wtqfFTQ3iwT8pxdHXaWVAShqSbzsW8A3SkCSe1K",
  "key1": "2bUmhF41z7FZSuZx7sNGLFHgS4JmomQWqxNRxFxxvkXUaCK62W5XgDR1iMnNGPbjceeQTt2NWRiwEsK1dxvn3VVV",
  "key2": "4t8wsEHiF8Tmh2zyKVXhxjHVp3K2UxahjDPqC5beh4wTBTgszCGv6i2qojDj32sKnDLp8Qq7YLxVaxngRHx4HXCH",
  "key3": "3gZy6RWJHrhBwYB4Wk3Au3pkE1kBuSTdySwKm26pG8sQQ1VKf84RZhYs47Xdawh7ia6WaweeZJTLKTPeTUvf1bqy",
  "key4": "5v3xJqjq69vSxYD1Mn55ue5Pta6DKeL3f4htrkpXWy4L78nqbnWjEyTRJ3k2iJXu2BFnD6wa4AD5uviWfzroWdWK",
  "key5": "5MUMsUNkT7edqgYBtuNWKTU5WbvEqEXiBwF9sraJKUdXtrd5VP4hcVJRK2Ljzkn9qC7myEvwGFychfwva9iYYiB4",
  "key6": "5DMxLEm4MU82C8S8tEyXdfHLom4TT5YF9p5Yw6NSjwLxD5i14Wk4n2wBjQ5yQHQghStNXESFB5iWoHKVp57m5mJB",
  "key7": "3ZseQuPa99q9bf52u1P2UVUCgsC1dNPzouD4VuPp2FfffYEDWaE2LaanQt6xr66zCdMy6J6s9EspyZhqZPj1L5ht",
  "key8": "2oiWqJWHq4qA5sLS417pUwuy72TiksAvK5rcG2dBcK91y2eAfE8aneXM5ANwebEKbB8ksLZfW6vrqS3ZQfBcTEqG",
  "key9": "5EQEBhJLyMmVnnukijm1PMff4AXNW7V8LN1MBd8N9yNEywMCJyvSbnM7Gi6ywyU2JnuxMgeUP67rk2CE6AAox43N",
  "key10": "3CuwM1Uwe1vgGAANvw6W43MVYbShzbPNxR2JCdwezhrrFYSXSEZvvHmBnRYLSWjrdYKrR25HVpcH3S5pgvrfLEAW",
  "key11": "4oDZpafi7wvUPa49eB5iFCpfDRhThBXeVTWCzxwSaHTgrnZzSPkPMr8LGL1fmf2tPBMWeG25CEa5MvbhVgCYp3N5",
  "key12": "2KcrBkUFH9TZNhrD3b9MKWhGwdnogP492oQYMkRSucgjcEWPd4LjVhRyTpKYnEvmrGtAz8wqyK1hpscmZi3CqnRE",
  "key13": "4HXQP9293djAjczhDwLsx14p3iGPYoDqu6WhbbH3PmD1wE8biw4KnsEdgGMBzapRAPpmQR8euJTaQQqc2BQ4aN1S",
  "key14": "5GN5EGHGNB15ReF5xu79VBtV1wX4xBKszDSaejjfW4hJTqpibj6zPxrPXnJ7FvxDny5XTocz9Vxyb6DEvHBDfVEY",
  "key15": "2seQzYdia7EkXhuj7K8V1bWT3ibRjPEHr2NXTqjw3xZMvpJHVzfmaib9RsxK1T37T7bAMJu1SGQAmEmaccYH6AY9",
  "key16": "58SfTJJ8VqFXriQ4MdgJ21Hsdr4zQyhZXW9YSig5qLYeHAAh2FCHnTbVUbmU7khXpvMwPqujmi6Nbnp35fNJrDBh",
  "key17": "2DX8ySGPW5XpxSSEk73WnWW6X3kF3A3ZJjtqeA3geFPfZqbwJppWoF6EJJcBVapnM5vyuDaY9X6EJQ8Z9hy4WWsT",
  "key18": "2YJjg8FSQWB87G5kqc74aFaPa1BKYRMnjGY3x4J4PgDyqCt7XUSQGhtKn188Kziuxkozqi7FbP1PtAAJvGEEqJK4",
  "key19": "2Sm2EwkDn5jwWgvkB9QrTthWaYuZAKKBkdRveSMhv5MNk7jHPVLFucAj4f5MWBhxb3e3aDMzbgAHMMPcnaKj7wtB",
  "key20": "4ASpyhgksc6mwZczpyah75HTfVaBDeYPsrFYBBJHrLLap9Ga7gZcLofHyruWohT9qMuZagT3Prwt2ssejz2M5HGR",
  "key21": "3T93SxNitaHfxkgUtdkCALnybnng4UaWYuquaG3e9dXADht3ZK2CvsDttTrFpXjUqhWBCsiCUahRKvTR5TB8EvN7",
  "key22": "n1JniFpbD9Vgj7VvyVrnWCduuJUkNTXT1Ltv1ERSDxKpooL6b9JLMYGLA3WrL7UhkMYQJCF9WGE69ZEAv9xtoyV",
  "key23": "5531q77H4yK5X5n8KJcBPDZBm1PU7fP9CHP6vzJZBvSZxFK285s7bTKCiwDBWXBaop1tMy5ADRPYuKqEwM4F4idX",
  "key24": "36Jw7QA9PxRXcmBVvDKR5xxFk6eYcKhZRxPnvgM78a3yZAax6UhcF3UQEosGq3KZdSYLe3qW6xyyzdGtC19UR1Ys",
  "key25": "47Q31wsCvU5tvBa3iQ4s3Z6C7zQm8etKUPQTFyy582uusSZNpkZM7zSCGHhzcKKM3u4y58adCi69U6ZCVAi3aaz3",
  "key26": "5R7dJekKrN9aa9faVZCwKVBdMD1iSmXA4EEvdFQF4D5S4w3ZNUbyKKbdDbREkaCXCCNaSkPtb8YeQRy5kVaxTgz6",
  "key27": "4JowRgzTU4zWabiRXrFSsF5t2rfejksWF6WQw3VanwmwZ7hmmXXZLfTngSuHB98t1nkxVydfinYxvhFw5kADTFjZ",
  "key28": "51Auj9FwpRxgzVQdgHLY9gvX1HpJnW2jwafBRYvG9KM18fQTSmtFXDki6EMpfxgmsPsya5bCoANvYDpBd3bRJMbR",
  "key29": "5uKiu9pQzULmH8Df8EaNYJTQq7WG2QH5j8NN9bek4Vz3Pcw1i2jQm7Sq6Z3e54YPwWjcSpbaFF2Wtn9Y1wc28TF4",
  "key30": "2MVjxcXnM4MmrPstNruFATF3zQgQ9cjBejiR1TjqBdXUxES4Gzwn9hcaZCaVBQ1cUz7ok3vfsTeK9MtjjAZak5m3",
  "key31": "5HTcvK653Tr8asmFHkt3AfM9B7ToxKQHfX12PgPeVuZwKQNbMLjutKf49YjMxebxWi5Sh34UTXdg33KjTSH8QoF",
  "key32": "4VBdeQgCpEDP2y3Eb8woBMS4TKDRv7dJecEC7ZTULcfcAGUL3scZC8GiaAv41L8U3gi1zsK9bUuLU2fksaMCZMqY",
  "key33": "65SbFEZNfw1j6WRxM2wSXvsVFUptmHwzrX5krACSkoH38bndoy74HKC5f8BJP3hHps1A3ryW4jqmz5nfw2Y2HYGb",
  "key34": "3LvihAGTf5SJYy35HefuDxiDePpAr7tjzvQxGP2rieQRTmhRXXZ1nPHsfGjSJcWUzLxrAtMwT7Fqdb6TddPTQv9c",
  "key35": "SstKNNPHpRPQu3LNU2diKsXyRd5Pyatvy7PeYvnJk5jdpnewy7NUrbUofVAmgpmS9J4EPidGQFys1GGnmJCLFMf",
  "key36": "4f24C5WmqTthff5Bk8pNYR6ZQAXvysfuuvvuqhxjWFRuAref9JpqbByaLEUQGcwaCS7zPms6bShgMRLMqzrnjtXJ",
  "key37": "4CVvR4ex9nHVuFKkKtoSdAu3gTg8UunGuRAiJozFVuQVizrQ6PsHtKHAtVmGPFc6kyDwqBhk8LFaQxsLopjnKpXg",
  "key38": "2YFbyePREXaeBgmMjeqfo6hvBko24ZsBD6KSPWawg1jnThb4AD5Y63wiLy7JzRbieXeEdpNhNfdcrDLvMFs1pVz2",
  "key39": "5N4v72SPN2xVDaundkhYwjKebd7d5HVhGqopRcaRPCCXXESf13x8JiJAjdwy6yHcn3uibAq1uzx1FT2U41Qk9Lpa",
  "key40": "3PMur8zJVuFPNFgAYEMK2vmxhKXM6BMFGeUVPdKY9umpvoyt6MX4opgtRDatT9qZiQGGYsQyWAhxKB9MQZqa1zcd",
  "key41": "2EnnTN2f2B91gvhJ6tLN2yuWTTN5vKtxJVEKEE3dU5icSgT5EKgCK4XJwtcV1iHax6WhvxLUgPRtQ1s6CdswDHEZ",
  "key42": "5ZRYhtQ92kjX6JSHWTTbBPx5ELoiWLK8AXrGJFBJ58oqpQWnHyXpeub4WC1e9iWy1FAXGz2kSRycgdtqgEzYjRQM",
  "key43": "yqVKdfVWUqRxkdHmPai1kAnnCNoJ9QC8HFudxmbxmSnDvGdcR4gCQvGQcgb2cD8cpfw4LRmEM2dBJq4dBFKQ9pa",
  "key44": "6HM7gX4V7L3ywnF935Pjq7LQdPDfZyqtxwfUo6QrTjrRKR8cF2R6aduossxNmQLkhgAPJnFYtvHgiiZEvTmwcSN",
  "key45": "coP3WNNH1r34qBoYkN9U5GD51Be8msYBSrK77Cy3L1s9jpnLUY9cNJcMwfvowrhXRX3hRSqcip2inzAd9EKFLHd"
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
