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
    "3a8mgBkYtRfKMr4tKUGTk8JRd86h79ELEykD1C6Rw8NWQAfAWh2QJ2rYMyunSC9LgJVnReTakUkgssCnhgY6t3tL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56S814Q5qU8Lrwr68rRBszeqxuD5U4Uiwy8D9xndFQmHerxq4HCPhhW7DZVZrxByLpu3oovNFxjuK6dN3DfD5hCJ",
  "key1": "2XmvLVUqp33TzaF8SH2AfTtTfRD4z1J7FoHWk1Q4xBPS9zYZCJ33qikpCLxPa3XV4rkrcBusuvaUS5d2kjM4yyh9",
  "key2": "3C9bJ8Ej5uQL3s3byCigHZNs4ELCTuExJsJkrfvxZPiGX5B8zgdnwAJPV6ymeUeJ5pE1ib8RAjvvd9fbC37AEpeh",
  "key3": "2FLf3kpRMrrDXjHxtJg7sVZ4CELzAi1khe7DewThx3e3JdZhbGHe7DMorXe18HncuvyD5WwuwD4TFgbX1Zhj1fex",
  "key4": "5s4vN2GbA9zwzr34PkQ2PhF3bqgvSsihrXNL3Lxn6EhzHEF7v9ZgmXHuuPMgPXfqtbF2cTz8VJ1YWt17pLkY9Hrz",
  "key5": "32Hf8kv3CZmdjGDD5y6qHxbU4Sk93RyC24fM2NYteQGzRgMjazhoNHTDxcA1bKg4Mbvn52yQQ195P8dPa68U7h55",
  "key6": "2wbzF88UQJMfe4ogtkfWvSmDVHzizzv5zmMjhnqgWPf9dEvA91XW2S4GpFCmiktLE3atfiGzoWAcytGhSfWujETd",
  "key7": "4MzWFJBpF1V4KEbiFxSmv7vXSzBEua1Yca81Yp9Nq9WFo74Bp2ABm2RKVXLuWk1Es5sauYZwZpoNnwuJ5ZyytaPR",
  "key8": "2nTw3ghTkGvL7vk1fkhaQBPRM46mRpQJiAFAu1wTP88aMAZEJpR78jKouhcei2jNaTF2CufZ82JGPX3T1eKzH7ab",
  "key9": "2Zn7avLxxcCsKh5qYfADYw1o1LR54wdJez3Z1AN7HLvTUWQ8osDAxZ5vy6TmpX1586sbw23e8fwEN8y8gybizkNW",
  "key10": "37TkA8ATpjVp5Xfu9LmDGUNp3wXTfdrwbUkWuxbvp9Q4z362qgd9ri6C65TDkjhRsjbJ7hZEXaUymovgr3daAmGr",
  "key11": "4hosHEUQw9ZQEBctKYxT6qUpLCwZxmu9hTvthCZs6Rie7U7sx581mq3oDep8FHycuEZysh1o41u6x7QKTDe1y1Hp",
  "key12": "4iMbppiq1MYdtdd4GWA3kJCfbaGn9YF48hUe3cVWEfTgPrR8TgAedKA6Fb9jR8RHh1RpRZCYPikwjuMNXKehYWhL",
  "key13": "BQvQRTimZogECh1d2Zm2vQsMGtED5vfbNMiea2jfWvNVaaaqyX6nKvXUF9ASmcQoogdXts7nrULzJenrmyiS3bc",
  "key14": "4sQDNkn3ujjn9Rn4driqD49x9xBi1nMKzoZFjN3PVSWP9jxwm6tt8qPAd52fo1ny2z4ug66a3pmCcdkrBJuPdoEZ",
  "key15": "DXsfoYtdqnVAkGKoqCcQm74Tu1hh6BqTHJyn52VbQdiG4oaDnvUDe42WAGHRJbznyZGw3SvCsYQAtoMQLgZFq8n",
  "key16": "2p6HrkqAf2M82PCaLg8me5ZkU33g42R3qthGDXEmbBQw4i7NLnA1VcK2GPDt1ucF6VZegUKHv8qoVYyePPCAMUQq",
  "key17": "5PmTJ22YiRoU2STtkeQyRo6FFKmkkJsDKAtsU2gFFJzPJcstXeLW14svy9nQ3xS1rysTjpbV6eBwSzVF9YW612SJ",
  "key18": "4Qu1KnMLeCTV9zNqaytDp5q49eyQ9Zm9LTTQVTFFa5xmPca4dTjhdngvTUerWD23RMDMoTpFYNDWog1fa3k6bgcn",
  "key19": "5CmytHikWBajq1yrDw7c2ZEhcGLaaoYRMwdvQPygcwsMSFZhooG5DyiopGWjiZrW1YjaHQxsmxyz21k3WTbEWPro",
  "key20": "tdnCQTopPctZ94a9A7eGbCAZhh5qorRMQUczzCR8KqFQqjW8SUHfwYX4G5cNPvd34cE9HA9vkKFhVuKYoiFnfLu",
  "key21": "5AXNexWyJeuxSjmzYMg6xFDHAWDQPJNzie2mPR3tnGoxVK1Z7pDYunKHcSto9pLG1fDR3VaxNAsmHc9gLh2KCb8U",
  "key22": "2uZ13yheHy4AxJWYexJhbxE3jicAgnsp1SV6NdZxPbJa5vFKfAN1Yrsqfsg8QpURT41LNg7iEge76g5XdSsbjBYJ",
  "key23": "5qxpFewXRnByQsyysbxxv5tpVkd58MapJcnspbukprRa9G7NQb8fW3A6PXKwF9Ey69HGDtAsqwEDML9MGqnLs2ed",
  "key24": "4HbvR3jrYqbBLmPFjdVhQTBHNepAv4Ls7d7233CqUt9eYHVu2WwgeJ4yDdeiYbh4nRSyjbdiPq34Wntg1RwUt5KS",
  "key25": "557KVHmSW4Bn637KRxqiFNfAuyMZf5wfvTUAetqwQ2aHmoeiw8YeeqxbyVNpe4xpj8da27eayg7fZAzd3GkaqW8h",
  "key26": "3Nxd4u8e41KU8cXcCphfaWtTgod5c4t8RGEGVLaHevYfm1PxxCfEZiS6YLe4JzS5LGbfDGkTfZoMyguw92MHLj97",
  "key27": "5nFrKLK3y65LovJW2vUdibG4Wtf2WbfjHpAeCBW7qY7gENgHZAn7dcAPLYaVXHYwBimeTW4dULMbQTJVEygaiSmh",
  "key28": "4ZwewmX8gfx9VNvzn9Lx8vqP7ZD2CuBood5EWMtyPcVv8ZtXSCj36GUPdfRETkXWk9DmTujw1VCTgzP4Dh516tcZ",
  "key29": "5E2X1C5md3aLNzVKj8GMfVsBaUhsHXqEBuaxhWEd3NbXGPM5CK3dtL3TN41cimxKF7Qd71jgJpvyuqMVajpNT5N6",
  "key30": "2dNH4x2dyf31UHin9hepTcrv4FVUmEYZbM9WkUp5bfLw9qQ8ySxmPL5Rkp4a1D6JNnHvr3Cc3SQr1JSTKbDSWS78",
  "key31": "2zaqhqtnCrDFumKCnaUdj3nGQGfmzRUokp3d4HsicrCgAv1jxG6gfvZh4RAzn2pnZTonN3Ace1CJ3oRBh4ggYGPS",
  "key32": "28zgYSN2e5TsxBzgi83f24Mr5sw1ykx2VErfVTksEUMDYa5QvSvRHsrbEJpXEmTrFK37Eb5SPBzK6psNDXFNTy7V",
  "key33": "4bBbKfVbEeT7wp6aiFVxZbqeQm9VmMjbwscnn4s3uq7xAsszXmax9YKghSeHk2GqZy5HFMzWLNo2QKC2iDWcKFot",
  "key34": "4mBPxgv2NHAZSqHb7U38qph8fszqMti9K3S4yWu6Ea3dXhZ4jeH3grrgB7QjXAUHZuMAajsPLHcQJiihdanbkPbS",
  "key35": "561RCKfjtWnTMnFzoLNxuMyryT6ze7vCd1K1hSj5Tk4TiFK2AL8qFvyAW2CsnHmouoyedBuFnvMCkV3vxBhNXKq3",
  "key36": "2TJb15TSuKzCNR6TDqPMzwrEexo1GpUPDUAnCTakHnGBLbD6bnccaeXEDUXffivKBt67zL4pqWtYbSjg4fDkCtaZ",
  "key37": "4e462F2dLuxGXZx2KtAQHjca4qzLstbmeYkYnjRA7YSa2RPXZ7NPbbcRLX9N83m6DJAievbA1MGtcH1kfFVyBuFx",
  "key38": "4Jy1x86fRPYRQ81R2PZLViQ9F5gADRLWJ1x8rkbhAWmuG6mgxWqP3ePxtMrDRbMQAYgywZz3SDeeuRcH8DyXoz6H"
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
