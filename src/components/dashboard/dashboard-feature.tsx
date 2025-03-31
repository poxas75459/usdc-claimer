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
    "5VY44w9SKDwu4sceqPKaEu3zHjNtHhB7XMEsvaWVkdCE3NW5RrHWf6Q4TyDHVBVy6BDYDiQaXJBpYpfaRjdQSxBn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TNrFcSffNxjnbd9MYnZWreaajwar8YnM11cmChT3tY59J2EwUkQQQhfQWjDZUmVqr47sa4tnzaNtXSvr4ekBeF1",
  "key1": "4VBSWqGkhuYFiTCunYLnDiLWvHgH3YAWoZTKWQKGLm41n8akY22kXb1k43v15JKPh97VuqPEYLL3DgWPRG2cP8pn",
  "key2": "E1qB8WQGWV42f6ENz3dJ7VmL6CKnWVysstzpf3injZuQ7DRvtVoSDGCiaAcFSHaDexUzkdQHG1FPCze7bFBgSrn",
  "key3": "5czXARwoeiPyqay7AJzKRDwMqNQkuen3vnRszkACneJaYoPkE6V3o71PiHJCa1XBdhTXNfVLyQanzHQ1E4E69Dig",
  "key4": "5Rccm2WSqwZYvhSHhguhck8GQtXrdv3XWzEm4t3Nn2jveKQbtqKA8m7KffDm7UNLqvEYDyvs4vqqbvKc5skNiVAq",
  "key5": "4hLkvdahrufUpbgyja6kYHgdgSHGZHf3tvzfwNY7yrmKx9vERLPR6oAd12oLeeH8kaNKXtgiSv4nd2ZWiALx2Gwr",
  "key6": "4ZhCWpXKTi4bdrg35t3jn63r5U3FosSae6QmFFBwZPK5Gm5AXWsyrwip1vyqKTnkbWuvur6Pw7KXix6umAqAHzJF",
  "key7": "4zLLitbjX6ChxSEJgY59Vevt4GpLg3c8zT7axxG9Mrz97YmyKsZqVKxL964sCN85ebmAg7F4koukTDU2iR34AGT8",
  "key8": "Fr8vJqqXGrq5YygjCUcE2fdgQemhwCCkdBEKSAvNGePgmTo9gNMr6Yu7WdwQVE1rM8Z1NB2enVUTcNkyLvzwqXQ",
  "key9": "3v3c3pt1ZQSJfVA2tAUjXwgP1R5ZW4i1QcN4g2RgRgupFT9UmWx9R7mJtYc68SQ43icXiGwkKrdhCSqLC9DD4tCV",
  "key10": "bAShqi6fZ7WKRuS9vumqvK6DjY7KqobMpyu44wqpUpYpt3udvRtBbGthVepr3ojaDGx17vbD1gVWStJhMfH9C4m",
  "key11": "2qcy8CBvKiqkDTBLBSWWbhN4mPMtv8sLKPkthcinQdqyBpnbY9aYXXS6Cf3fwfJiJCFCag5MwhBBmNDdqN6VdrEz",
  "key12": "2EvyS49sW6LkCdxnnDPtcc47kNbQDbZLibQxRgLRhD7iQxCM2pcW41URBQKNHGDutqgPYawQrKa7y35y9jtvKMK6",
  "key13": "5tCg6VK1NF6czb22qmpBpfF3752iFjNCVumXn42gDChe53W8Sazf4n9WqDAHF3X8M3bYPkf9TXeEAzu9uXzSDFAM",
  "key14": "NdNDA8qDsDrMy3uCmG1dJSQF93RJLSHdaqyynVRnJv2it2EhFQbFshn1K45v2b8kZeD9hhQkuHBUNjpqAn73Y2o",
  "key15": "3m8UqvkuXAdV2TxhS8aJpxij9TbCPR2qfbmHStonVYXeKFthXuRaEreAPoorTLnNEcQZhrX4X52xHy1mNGQGWnkp",
  "key16": "5w1p3AQor6dHRoVTCSY9C9SzqDyKLDD7G2ZbeBk5wsWDP7Rx3JKo6JVSk8TaTaYHjx3R1jugpNz7GxUwwDZv1mAY",
  "key17": "5NKBLDCLoC651rbmSpBSoZhq3YGDNEMgBTvCJKjHAUibyqR9SGnyMGGpgUJyrYiKNSAiCX5iPvSpvaeM7RrHPA9U",
  "key18": "5x8R9q4FH3fnYLTCatSnvqGJJwinpKiKkjRRHXwhHWbKoJWKnV96br7kLWq1hLsqNwiiQzbs7XmMZWCyAzLa3TN1",
  "key19": "qJuK27MwvFARS5NHgkFV6BwKvDjek9KFL5p7dq53eTs7kY1rJt25k4wcRzdXJYJ7KCpThoRSLL6Z3sZdRRzZdxG",
  "key20": "2HwfCVSgFqvXq5zdk2E3hUNpCJ1QoupMCYxUKW8qXSecZ73fZC86LgnnJnxfe57Coc8TEBF1M2DGeqbCjMKiBEQ",
  "key21": "4Nb3VfAwZfoczPpsC2ut1E4KXyKmrcmLpNN24FTYYFxMvCCD9bM23UMwaz62LyGP4JN51bKMjVrntXZnjAGkRJhH",
  "key22": "3HW9nFZW8Ef1RqhUHs4ibDhmyXmBEnpCdcFNcaaWvybG1j294ffxiW2YAj36LgcFpWcNmqbCUoYTtRncWBvW382y",
  "key23": "52TgksCBv4tskR6rCvr1iLwJNv6WrqMbvFSwbFLL2M4kVi38Udp6F92UfugCdCC6SwUN9YPrXjq1dgCaasxDcPB4",
  "key24": "HdxezNCZVVPgUbC43e2HoZgS8cQ1RwqWxWmpEnL3zUniLJRPGQ3X6a2mqEowmdiFo8SxDSzn59W6Vx31qyq4Tqd",
  "key25": "FzFcH1f47GTEaSWUKpYjC9CC3XKf1mpUJcRm13HxtjQ4axY5xSoBxj53KFTLmmUCzi4UQdvaDFj1hy5ebhN1qNE",
  "key26": "VXPkBmYA1JAsDNPooEdqtwHW7rrYFUPVM115n967hkb6ihnWJiLF9uG67AyUfsqZBB4vjzqaRHLVxN8KedPpugX",
  "key27": "5CSKm4iBePWriJxoRuNrExqkgpLrdK42PiFDxEtF32MdTbJZooQcZHU68jmyRMsPGvk2Xcuyk81ysFnvSwMCjEag",
  "key28": "2UW4wfZXFY8S8BnWiKAJEuKSTpxUS6dFpyV5Jwjd1i5cKe37W2bDPo5DYSCpumKJmWzbi5owLoH42WyAGHHuWXme",
  "key29": "27ZP7KGecTgMPbzcWaaq6FMr7PNnrChvxyxV1b7SXSjEkgif6rRP6E68dgY9qSLwoC3tCLL4BiYMM1Jb1yZcjAgw",
  "key30": "4UWNE7e7fBBAhnGU9668SM4uJP3ovJ4KC5cw3gRLtu31JJG3qGPN7RWRTF9E2p7WEW1TZdc5TM4t5TJKJbaKdoqQ",
  "key31": "123jcEEZhMPi9PhzXXnTzh3L5yEvyo7uRULS2bByePA3Y4kBbUV6EUhsXX8kkKtbsN1Bx2hoeZiepE2wB5yM5DJo",
  "key32": "3ShMEAVrwgANwifXNKh5QSRi4FfJxFDqHt5JSzFjbMarqPeEJoaC3QqhPnQsYB4Nirc6LYcKFE4mpKQAxPM9rbwr",
  "key33": "4LSWoPgb4zybxLjNezeZt9zVfjuxCswo7ZZL321ZtNiCmH7f3vNNLGTsWtWPV1gkTWW8sJF5b9rTkjMjeWW2xRAi",
  "key34": "36qkvMJrc2xiP3Tb69Tftas3kuJUdNyG4abm37uAVxsA9Cc5FYM4A2svveojUYZpSQvagHVx9zoc1P44uqhkqLKw",
  "key35": "21WxdAFdXsyfmfnUXYgB9QW9VpZyEar6S7oMqZCMPXeiS6BZfijnvnn54jMGTiNzaCsDtU1r7ALK4vt7iueLnRrb",
  "key36": "9F46sJWVCqyweX5YggG5CxwU19AbZ3JGUiURUbWKQgBMrwX2Cw3DdkwG5n7xaPhUGZsSz9nbRAgUvNqZB8KeJmX",
  "key37": "wzSBKW7WCyan2Q6G7kuRKNqUoEbpsDicrxk5eC6uhY7WhWeJPUR2bVPQEXqu7aoQ8TDXMRYBNcnFTPrRumBEaES",
  "key38": "3u44tqqtXMeFmjsyh5cfAWfMu5f49eRobQjN7cwk1Shf5akYTG8ZAMnmmMdarb795TYcGSg7DMbqXQBpA5JKawwp",
  "key39": "3wzJpxV12XXZsMUxfftJnQiXhgQ2mphAWUPhQJ7uMH4Xgt7JDbujZMSsB3FVdx4CErdkjtgTGwvLFFSWFpCzoBeV",
  "key40": "2nThpuXkkA1wF7txUZuEBS3BaeHmJRXnTBWPbamGbTN91YQXNhwcgr4kU9pvmMkkrxnPgfi5W8UF8KgezZXV6vB4",
  "key41": "4HQ1qmwnNbwAvek6pgDPEvFjmVEtHFsv7ys3WNFe9HFxyPYWmTEgJyf6NPWmVLyAfzXFVmVKXvWA6v2fbw5QpioL",
  "key42": "5jGJdJLp7uE9RFQbVg1K8EN4kzNzb4svEjxD32gQBiVqAXEBwe3jDe4VjLvc4MYwRjJsP4Xu28ZYbRkDKWTnkEzn",
  "key43": "4B2i2262BRTmGKPn71FgY68S7gVVxCPmBF8KcxYqHVQkdoXSAAR6fKFsph3BwvXZsvTBC4MaNcihxJEYnF2aBc4b",
  "key44": "3nCpemroSNSmNcjuhx4T4sTTPXo38efJNhoXha9LqpnCuz3J5b5C4PYxF18MYujs1bafFBcXsdSqWbzSqdfhFDAe",
  "key45": "2uBd3BkHTv12JwNY6cKgeDDefjxfBx9cNdzdpytG8HKvpcV4RKN9ZNnfKRQRVsFH9JzyXcip2r9c52FYW2wDqXjK",
  "key46": "6zsq59diq7gMhW9GyBtkY4SPJXhA2Lj1n1VaRC2pJUVLbQ9Q31bwar1xDnKVuiiEK1M4CVhy4nHYaUR9wopt7Db",
  "key47": "5LCXfFPeFLH2PZtKHv5NdRz7HHJgvKrowqkNcPWS26mHVVDJ1tbXaHcRXedZ9YtDiKZastnWruJBisDanvzCjJpD",
  "key48": "5fiG8vZteg4j7zxSDUnFjwgJeKsf7SpFvMkhnDS1QG5Eoz52EwufTxUcD1HCknNVfBAekEJd1bzcEqHFMTTWHMvR"
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
