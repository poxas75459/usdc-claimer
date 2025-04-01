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
    "3R3cpxt2SDhfERzp1oYZqQYEzVpAfsRtws1seNuQMV43CLXW8qHFdTtTPYhSzy1UN75FvwC3E1WSEUq1zpD9m3JP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ou259okLuLZuAXyPjadhrmk41Jaquf1RXrrNbzjSysGPAQqMZFQLu7wL21wp2S8i4cYjGcZiMQctaWweNAZMZyZ",
  "key1": "4MSeyPNTXztv68kW1rGjK8DCNEqQmUXyNLseaepCwL2YGybRbbjQ4Bfz6qY5WAWZyrx1FpeQTSSQQhjcn5QKQAXY",
  "key2": "XAYJVu2Y5VBaYTQo8DZntGYPPZpyNQ9wdaamMdD3VrJ1uamMQu6RwNdpPTXiNxhqYJmzAUxsi1ac78UtLDq8qqD",
  "key3": "4ixoC987MJVwGxt1BpqzizFwFAB4qXcjkTVz1LNxFyKNi6jibUx8hJFcdbpLPhbi7ypa63XqBgwPNGn4ZXgjvjmU",
  "key4": "2Nq8hzhPxTMq3FoVGVnfFAPwRwLmA52er7QGTB5RB5JFCuj19fpU4tTpAaes7FW2NM4sr6eWKwvBQgmn3bYqrYDd",
  "key5": "KDH4LRrdjGi4JxmYL5ssiTfMCWSdscEN7SzbKCYhLSykqEGRbmRDqKJdGsVii5x1DovY7qmzSWzjh4RjJsvuz7s",
  "key6": "3uxw5CMPHRv7x29qoSYEyeK9txfZicAjH2tEJ5Dh2bnGiyNKp53fFMFa2EEkGfMG8CUZNBe3ZiM5cvJfanJ6P2yy",
  "key7": "5DJ3U6zn25ZVXCSpMxQPEyFL7eBNM6zvkLH2UamuZBPVDBZJ4qvR2AsBQnjsFZJLuvvEPZnuS9fGUQXAXHN7sEGf",
  "key8": "3Bbfxi64NCnNRVkEbcWdW8aqjkxJdhzdEGn6gXeTC6MhVtyT21eDnyWobEoMR8f3PCCXSSBVZNmPjFjjf9gPjra7",
  "key9": "4h2LpXovZJWLCYP5K6KrWGjaeBJSwzh1WCQE2UKCaKyKbmHAdJSA5XRgJa6i6X1exYrF9KXxdNRnRHb1Tx8kcQms",
  "key10": "4L2zn48F8a8LudzZtfesxEAQVpDrE1tzoozSmWGsw3xtEGpifAtykPwrqd8sMh8uvBy2d7S4o6Htfgwk82mXiJu6",
  "key11": "4ypse4zU4PD4Q6VPC6uDRpqininYen2gj2K5XSxdBBHg9wM4eFofgzfAisnK89uEusy3viSXZK68ppsPvedjGFFW",
  "key12": "5GyZ47BbDdLRKUGQQJu1euzpRMu587Lzy6Lcmx7uX8p47L6FTMbKm5aaL2FzKEWhg3ekNm7PxEbAJQwDgeEhgGos",
  "key13": "2T6fDU4MLgxX8EJJLyjaNzTrjZZ82BWHtGXTks5vLwpvoeHayuCEEcRtWkV1wSaHRa1htkmpWQ23hRfb46YpPHiJ",
  "key14": "5zGPoxjM1LWcidp6XpBX8ykpC1M2q9F1rtKbbqDrtionq4KfnbZmCV814o2S3u9rzUQ4NaacTyyuWo9NuAgf17ch",
  "key15": "4nntiT1jTToSY6S2uEJJwjetu2fJEqMQbQ9epou6zYcNnNCrj2ceLwVEXgvyVNstPmphhxrG4UKSCurTvdMYMgAE",
  "key16": "5aVd6jhsR7556NWABXwhz9Hr9zUFbCWnQxFXgyAnNYZS93XTrFcjv2LMTy23HqGzPTHy5TG4kqJH6mzQAYFf7KL5",
  "key17": "4XHiPsteCuVRVqRWMM939E8eceKCrAsx81HY18UEWqW6JFPspsL7kugRESwykkfhszsyNDF9DF4c3waP7KYXFJ5G",
  "key18": "5vGJjbceYDw2suUsy6hR8FWHGt9DmGbQXaqvxJqHDoEjXvfqJWRnDetyGarEDBfRbfqpKW63UGGYEro1EmFg2zdF",
  "key19": "3c4iLL6dcA5awR3fAEUFsxVDLwBA1heW8SZq5CmxNHQaRexhdE5fpZMkNsTDEe5uo7uSzoGdQeDGkioyFQC2HoT3",
  "key20": "WR87JEkM5SAU8PicYS8GTbcrjLrdQRMLYDZppSeJj5ovPcv4uWaY9ZTzL4AjkfoJaJageAAnv3KZdvr666WaR9Y",
  "key21": "2YHbSXanM4eMuCzEB6PS5wUeu7oVEuradhw4M8qgxKK6RfNBR1tpjZv4Uxpe3MzGCL3i8b7pH3YVSw8xDbDj8rCS",
  "key22": "4p9CrQfGraDfG48ctrWFhLHhtoLYBH57Ab4yvf1d5pS3hyWisqQrfvc7xSyqzh1CjXYxrqGL1dsqoEUQe3yBswBk",
  "key23": "27zgSKWjPKjNhcsBJ4iPd3YSgP7uWdMWAYr2yegn1YRQrPXEXbtBD2DYdsEQK6XbWPud3PRogH8kczNNWRiWmrbK",
  "key24": "QBrwsHqJL99SkxxL6JMFvetQBcML4omz9fUBiTFNwd6ruk3LJ7rJM7iowWsTuxTs7uo4gXAP1eC7XgKA7AwCaxv",
  "key25": "2g24ynHEBXf1HGNTKHML2We6RK6mL8aEriSHaMYPGdfXuhhuo5TkTAtQEMPtxjBVkeD1w8CuTHyiWE7GJuUE9TfH",
  "key26": "3dczwb2G5P5JUwZKRykizWMy9whf13Aav9pWhkjLgGAPomjbJcEkwtb4aNszTWnBmyZBh9MiJ5J5Ls2afUaosQjB",
  "key27": "2vqVEffNDUuaXZASnpbP9b1YLg27GmwirHxefPQM8oyS5Cg2hv1UMYHFB7k35A824SgdJ17ocn4HCfsEEgf1zzvA",
  "key28": "2o42eD6tWtmE1WorovXbLM5sXjcKJmfopaK3sYvpcEEJBQajPFNFsMzrMFDgKWe71W2r6bEubVAYhkMui7ccj2cX",
  "key29": "YbcANc1kQQGzxWuwC4jA28zuMCgfVg5woXq7VPvxvfxG9wuekiHmwoVaqghhg2uZ7XwkmjQmXDwyhc3unzxVZj6",
  "key30": "5qYhE62SqhknxK4r81K1PSjErNi8EnSW76jKaYMDVd2YkmneEm2p69Nmsrr5hThKecZKPwkHQ6cSdG7AwMiPzAFn",
  "key31": "67Z9oDrqxJtHPQ8rjkkVVj1n1LDJjSWHcsAyeMsdptV1UbL8ZNQXxs1sDFhPkws85Awq4iLymepDxTPBkJUfPjXH",
  "key32": "299do5EE2fnXJbKGPe8cDv1TQe368e5t7b7j3hcxVxkv1UokTDdpCvUZGmQ3WzGgYrXfEquZSYV1PzGAdSNaJvQ1",
  "key33": "2tHqG1U3WzPHmGJsi9KWZoVsTZxqXR7iwXGmMpBpgWoNiZzpxEYide7BEafjQCVVRbvor2LsKo2xtkfyYKx5vRra",
  "key34": "2DfgCXA4hViBp7NAD2QDFA9F6Lwy216ykGtpQeTXvBWwMThiKFaXHdfWiZMDWX6nCPJmVH2HgSGfnkL2e97JEP6Y",
  "key35": "4EeXLwr2Q1wHgphV6zXDJ6M16EMFCErwFft32cpDpQGsPPCu33ZBQqD6b4ZwFnhnwDwNmPCHL7YpfmTRcRD7Qhui",
  "key36": "2RFD5ZfUWqGPc6r2JWKWk53afRikB7KEFthwp9wP89Nz86cC6CkrD6iVFGySnwMvr83AXwAAiCJECJsBtjNcfmM9",
  "key37": "5R5foWozSDgken2jiygdJaAPP1R4MEzg1qHmbmS6F8ZYsjmHUQ1vFCiQX8koE8QtBvwiP2QsmDW8THr4exXfKkKH",
  "key38": "4Gno1ieQUjEyyQdsZzEbp3q9ogRMfZVQo7iEK9hD32CNPf3jTWtmccJPhBL3MeHa25YXXYYzdFcFpBYzVPTozcv9",
  "key39": "3rresd95ZT692so3P3R1EZXHjvVYJFugQoVFHE5sDKy1WanqtTrZKAAdFuUc32zVUop1FLaZReL8ehu5Jxg7JXnF",
  "key40": "49kNBuSgX9TexkQTW2aLjJEjnSErSxB86nJyMgJ4anfhXfg9LL3CxAmQkZHxHfmNJjquaDGVWA8qNQDydSmoTRvZ",
  "key41": "2XdyayPEDXJ2G5V6xx8vKYitz6qTBEthGVewMngtuQNvUfc9ujrB1LZHCz7xh3A78ECZvjJpd8HfabYvr7Xb87NS",
  "key42": "4bWjgqNDvi9e7gN86J3G1S6gSy5k71KL2kqiUbJ4yM5gaN2q1Nnamv98TNKuS33AaxgN1zuER7EuqfWfUBNnATfP",
  "key43": "23kHZDgeDQ4zMbtVCZVDgEbBPnVqE8yXr8k7fF2zZcnHs4rproWRG2kKrytedpvxEif6qW1GVkogXKA6nT8P2FyV"
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
