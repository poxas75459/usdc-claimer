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
    "4yfCHoKaNRsKAf6truCh1tf6c6CxCDv5Kh9ttg9d6zQHuoXEV8wf3UtrjMHAf7Uz14ELqnUMAuaTytNbtdDwJHMb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fspt5Rp5CLRfYuzRLAwniAqNsgL4TkPvLJE4LK8qKMfJCDSMRjhWkEFYH6c9RMLcKTRawTeZTocdDSM65JfAEMR",
  "key1": "2wcGMmUmTrxEMmCEwuwASCs7gzjKQTDzpFHzoXBPpwQtdhF9L7jM1QGR2GBeAZbZzN7wQnMW3ywoueBmB7HQ4jWa",
  "key2": "2Sknj9aBdgQcFo5PNBSysZ2xntYFaAe4UYLX6c6Noret9mqCYDYBVsn8dMa7kE2u81aXy5f7V4oJDge6VFdyY2HU",
  "key3": "4KcQRBPHxNFZbDY7Z1gMKTrBbRPWb8UjFmgvmY312xu4gaTNYNuoq8XiRtRJApdcvr1QacaCaspA3dv2F1VE5iyS",
  "key4": "xcx4eAbJNcX6y3Vh68zLQAmKeLWCLGvGEZf58jbDubH1hiB6pyTN3CjKB82jWq1HZHkkDayhkSP1WTg9tPgkALD",
  "key5": "464Q72pNXA1AKmXsSLMvSqKNFms2abp1fZHS3DfAYHZdrfDKYUZh6zUMBWo24mYz5V9UX9r5iWJRhG9RCPseAjsr",
  "key6": "46AoeE1NzH51thuhRXpXsT5n7KQwntPANsq8Zhct4VyxKVvupwoq6s411coaoa9Um5bEJMdCgEB434akpG2qpcsm",
  "key7": "5b9E6xGRDxbZqKjCf44r6P2Hg6nYirJhoJTW7Vi3so4VCK3KaFryyUSHUhigmgvr5HHgJmLmH2NdXYK8rnDeFWoQ",
  "key8": "45MT85vQyog2KNv5B9cpK8F9LRNFmBnxxzGzoH3Z8uBAY5fYvDdkzTkamvub79DHQaWUMduhKo1jFYZEz3nFtXiP",
  "key9": "3PhpSzdkW6HGpCPZFCNXkM1VQpczYnhLU4HyxX1M83fpWpUoCp8zui6E2Z6MHcsfWALhrip9og2agPAqUxbFmwdX",
  "key10": "25rPUSJ3NHJknZXSZxyv893G6vbpGyHNyZFCA5LRmbdRwUUdYM3rWsTqobicPjyyjuWpchzj7Cs8aUjMp4A2H3KC",
  "key11": "2dbRgWB7oLwPvYfrza5Eppvft2MnDJ1LQDfFH7XLNJx5QueYzQCFee4oFdmKZFvzjbTRX3SLjYANnVt5A769xMrb",
  "key12": "24bq26zswpGRLq8rGtsujbT3amDA5KWFRZhQRfZLJvDxkWLvwc2NVsKue2Hyxcbo9fGtfRgKvAbM5o3Y6GuDb5Y5",
  "key13": "WdNt7Yi8rVHqPkn1FQo7NoV4VHtTAjGhvjt2CmxZPFWCFXcnNT8CzKxsDDWLmBsQtFvBmothsvwLdqWsZ7JG3F3",
  "key14": "gynF8uhgkZe9y9rMEmfyNuj7sKQbxQPAHvrXZFcFzAKNby8i62BdLeZGT5KvPpqc6pDeaygVcRRdVmQLAS6kJSz",
  "key15": "4jxiETKieN9Nj6qm97XDJ2xmhNtVUeMP3APYACufgEkTHeEGtxYqTpUc2hjgmqn7NNndsbQEWMWRXs5zvVLDrWyd",
  "key16": "2y9StRDzTXDNhKf4b37iCeMtFNDJxCLFGuN3YRo3BXR3egr5M7XUQHSPVY7di8EK7WTnz66WJ8t6gMc2fPNsgtzo",
  "key17": "3v6ZcixtpFNsjqEqXJEaCDWrkxVrojEGVUqbuMPy3rSDVY8YeXtCVeBz58wf6Z7iNsTN7d6KzK7dwwxmJn84M1zL",
  "key18": "3arVfv1wESAoVtY2jjuRpVzz1ZKBuoD81JPhfjpf8T8fg4TBSiuxd64zUd5muD4opDxDoRHWBBZe32e1bBbJt6uu",
  "key19": "66f5EEmF7ELBbamq4msNChaahCDCqd5A5GYNT5ARrDFCua4AmrLCSeTGscimDKXQnyXou7Bi4k1RhDwRAKQhtfu2",
  "key20": "4RQpa9mThHyopqFmY4bcJMKKvdtSRwH3dGafqa7fDB3X2RqYPddrbVFH7U7qKxWNetCCz8J5FmkAyATf9cXYBQzh",
  "key21": "3CqtyDA5Dq6oxiNmq86tfgFmSrg5bngeQf3PXRyYSsQDBKpoaUYeXz6bSrnqxo8n5QpaGY9hqFFsJVr6e7b2DaKK",
  "key22": "5PPaA6RTvFd63d8HvyZPZqJ36VtcGoZ3bVmjTEWdoR7UpfCh1bF7m3vgCW7YJiq5SuJVNn4yHxw8XZodn7Eg3Spq",
  "key23": "5MReMpsqvzHt3KjVixGF1aWDBESDV2o1gJa6N5V8Y4SpmHTh9emaJoNUniSYuUbXb1k8X9i59jwYwa1Qu5zA3REc",
  "key24": "Cc6cMWamB4U5uEKTSEx4DorxANQWjZWpgFzZ8eVCSANwPGb9nFbCjfqN8E3Fz9Y8EEAytXekQ5QfqUX8tgvjdVP",
  "key25": "5PfbCL4B3KFBfy6tjABSgQdX3xnjoKULacJ7ATobPv7QN1CntWoKPz9MoPjtuiVhPcddzXUmT3Xm7yaLxD62kT4t",
  "key26": "4DaYBG2JhVg3BqKoAp1RvEnEKcj4AFvEw9XruocWLAXqJ4JboYy4hyo44q7Kk1LvQz1rgqZJntKUubiPB2Fj9XiX",
  "key27": "4twoZEUkhV4ND8gt9hJeyC9kbCzAcXpjbjNiRi6nDa8CKahZ7hnc2kPTAvfn2VDKXdNoReBDLUjeK1Rw26Qcgd9M",
  "key28": "4YW6AaiRjnj79FkjhTu3i59NXDzhZhhZy2ZPb6UsDdDgb67fi6K48SjuMnhFhTmnWsE9obBiRHgVgpMkxjTBcv4z",
  "key29": "31rsHcu6mNt4jgHMZYaBoGBRFi3re3x3vA8XkkFmKBnedW1rAnbHkegzyKqWgpmcfL8LSmNK1Sv7B3cWKhC6VvuL",
  "key30": "2ia3p1dcnRMWhyDrMAvX5PoDCbzrRSpRTwftNErdV2rXGYngZjpLy8GY56N7iiJBY7oN5bbHYhtcyZuhspafZHpq",
  "key31": "5gUhJAJRwiyiGpHQSHjoobcEx4LGepRXpsyS5LZHk31ffkYR8BFW1Tc8Fjz9zjbGbDSeo6S9poergHs2i46yRJMi",
  "key32": "FixKR3iQVojYsQe9i21Tni7SwwdfpTqC7NtebkQmtc9FJcqKHs9Wpr63qRi5bQb1zFjF7LobQuDMTTPCotza2w1",
  "key33": "2J4y13bYojqT1khQ6GkV6FMd3mMJfseXAVQHydYCYCxHEGK9ygrQdfPBjBPWRkEvYuYArm5tsgDNcY2SApacowVL",
  "key34": "31ds1SyEwwG74xjL9mitvbcHFWJ6xNq4XxoXuJyGQPKo7hyjCdGovdXt42M98pXzriFwQJbt7oHK3Gtz3qBzPgt7",
  "key35": "67eiRRQVNThg6i7nuS6R6DQ2fxV8FHfw2DwjR2UCeNS4RZrWo4HMSNKpCYdkJRfM8LbQQSWdmTdHvhyKxbYJMAya",
  "key36": "P9kvSLTbTfkjqQoGfQTizhhPdkZpQrXyCgR3ze9XpaANS1LgqYCMW6JqsGCq1AQdyWGCxPX71WxycQagTVdxSTe",
  "key37": "5zZvLpUp6KwE1syckqAbHTvmqop5d1gJKP3DYy8pbCXdiS6fBFi5o7ynYyzyT1Sk46VKutxtGDBRZK7X8pUkr1oj",
  "key38": "4NBmjEgzQT9SjEBqz8Hs6GNwkMphMYNHFUdH6RhGjicHj6pgesLqr5wwNG8jcFuYxpNupgenjZxLb42t5ryLLBCe",
  "key39": "2RqBB91HraXFp8v6E33MpcccrEbCC5PQSTRyUVuVAnP5yZxrGKipQ97ugHcoNNLzNEPKcig7yYM74vZjRxxAg3d5",
  "key40": "4EeyXmjnt2PxR5NjLQyAkVxCP4BrvbJkrTuucpwPxjVSTdvaE5skzw7ENHHLRmN7eyrA9h3BwQi2jeqSf7baztYK",
  "key41": "3ktbadnC4UzKhKAowzQe4bKXYVZoHXE7rfiCF87rRLeB4TpefCkykbjfH4oXyv8vZsoFtxYEWRK3xAJPBjokYYVu",
  "key42": "4JpQEu45sF9yMEX7Bhny2VXvJ4tcQnEUhaxGxndMWNH9QbWsKBhiGTP4Z3E7gjRg1dQZVpS5nyNuB72sQqkFCHR",
  "key43": "4TwWicMDJ5GKBwpXqB13nohfCW4AxK7pPkgf1QFx4kjiJY1j3nAMrnt1G65LZpaqmidfucitBQp6m38xqXgkfJKn",
  "key44": "NeeKRgFbcUcnNramiK6k4GW9t4uWtxiP27fVjTd7kkAFrJjCJQfJRSXaeUCYmpfXkybEdgWnS3NLEzGvytsj4H4",
  "key45": "4C5X94kV8fseRESYjpCwUGNBv59hsnadNu7NqrmMEM2zkmiAcYXciTc271mmSYq5oobzZ65VGNsECdw3rTwtRZyn",
  "key46": "41H7zTV5UA3jbnX1J1YKMfNhDASYVk76gVb7D4st9MDSdyoF1TZjpdTFmekqRZRwNeem8TdhibmKVKbRbskPBzMo",
  "key47": "3qcEbvCtdgmvSFpACYXzr3PqxxyKVpHXaPLcm5rMxV59ATRCSYkhoChCE8MnsVMe77dydC1b1CSh8VD1SN2WgtWe"
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
