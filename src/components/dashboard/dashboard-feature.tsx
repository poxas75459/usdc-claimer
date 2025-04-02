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
    "2r76Yc89pHBnSVJLG4JzjKEb9XJJhNakvBazZAd1wq4Z8AS4zkGX5AFNuJwtoA3y4xdLRd9jRp4upUFXfLTSTT2z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hs2uM4Wsbi36Bcdto4n5VorCTgjdnVoUuGimnccvasumvRUWD3zFyu8k4mTZssPBd3LZ9R8xXne5EaYX3N8U49u",
  "key1": "2Ron1vEp4uAiZsmnXqd3DGR6FBzYtq6mw2Gfh4n13hdpyjAZxwdC7AmHTfp4EBknukr5j6zN6yBTtN2zEVs2YUfV",
  "key2": "5CZdN4aGgSCbLoqwcQJrLLAkz5qUTGsBeyWwk2oX1RKQBgbFeQ4KfzaLfjqc82JEZ68C71WwcBkMgutqPZWj7o4j",
  "key3": "2p8SeXXcZca5k3ZhSkyUwHmKrCE7PBStGJq3b5JnKgVABKk4C6JFPftk2cY6FEGAEpEtFB4N1hm1JAQpxfQtyka2",
  "key4": "3WrtwnseTpVr4Cw95vY4Q16eaB1C5wNcpS33eZR4AYRWCqfArWfYE3mGb5255bkbWchiUng82VLCQN6XTK4qrzVR",
  "key5": "5yJF3i1nQVaPTVvU8jbzqWrQsKwJEZwoK5PjjYKhyG2nDMSuou9nwPSuCnu2vXMbjo5uDeJ57odAbNJKutpeQQo9",
  "key6": "2cxk6Jb3DCDnRAKvfUrkaQKWhxSqCVfdAq1b8cG19yAWWVZoDFhspGamiCDQ9t34n2GQoaxHhnKVPWKVhz3dBFym",
  "key7": "5BToiSsGRhdp6M3uj29RSDWeqy5DPWCbZNmbvRUBAnUVUTePzeNuhpX1FyuZWsUt1qryHLfSYuKLGaMAesuqzdAo",
  "key8": "9agNnDdEJmc9y4t6v4mAV9zcCWdWfXc8r9VkrS1QkqbvzdtNZ8rA5D7eb9Hkv8uGWVMNm3RnmyHQCbD5nvXQhVQ",
  "key9": "5MSo7HUMfi8hyu5M8YsCruUZ9LdoFXN2RaCdUDW11dCWCVCD1izuAFDNZ9xZii3eJ3pn59Aub5whcRXtFkWrfZzi",
  "key10": "iRPNgnuvBV4v1nbr8msqLUtGX33erzact6fSG7pkXNFAZh8dFL5wj3K587PBa5G9u9Jv8EaWBE2hYTHuxvpUf82",
  "key11": "4A9jrhw9y2m71UugJkW58pjisDMMMMZgxBCGvWvhJVMW3yDRVzD5zDHuDnWmzGKhgUnMKHyX8fvYYytTqQwu9Wrp",
  "key12": "5XQSgGFHby3YjaNMgzpNPPFcgCFan1iFFZ2iEUzL8aYRRm6XLHexEUJqy5LdLBtBxCUsykurxH5AZXgBzWRbZH8j",
  "key13": "cHLBH2fNzJYrQWNDMTRmWk9U3h2s8An6stwifuuaSomTi2qVADxzsUQsSdnNdnvUUxchtTuVAbRgjRWNG5vthVn",
  "key14": "ZAYm3AwJMnpHpEK6GiS1P3yHDEzrRrhqnjf63J4w3cRiJgrMLCYqmyRF19xbg66a9ctxQR7vxzgdNqeStz4kcz3",
  "key15": "5sD4qXXbUE2wUbTgV4RgnKZw5aMNtFVfHAZjm76y1MGXagxc4S4PWrCpPvPC5k6HD2QAK1sFKqi6XCargjj7frsd",
  "key16": "2weaw99AMdgWJkpvdfHctzYprEbwkUVaigASvXMFBBHz7HCnJenK1friRapuSc5tw81SYY2xUNBpKZNfEXSNkR8w",
  "key17": "3xdU8hPqdzqGB9K3Psr6wxqnKgVJJRsZeWyyeCmsrRguroA8Davh5722Sb9aYmAqMANWpLZU9aDEEp4YDz4xHrnA",
  "key18": "2rVX737XCbwDNePFKt8xSuPb1vXVmbXGXEPUV6YaxcMjrWuiACkHemNeFqDzy6KEagvSyE1mZSogzZRUgXFpJyh8",
  "key19": "2Sp1MtG8c9BzEeNfTk35VHRNoyykb3NTPsE2FPCxS6D8WYArhM6Bwf3cTfVy98F1fDjaFSxEpkTYTVCXRtnAjVGQ",
  "key20": "52oy4G5PHf2bme7c2CEziBn9rHudLWrnfn1ihmULpswZCcWqWtQCQybwM96oscCksChucfrfjP3s212Z27TB8r39",
  "key21": "QKCaGNAyTniaNA9BBKyyFKJWqaUpyUnm5JMnmkGEGWHge3LZZABzaCEGAaqQW1TmymmCmLHdgoy75abJWQHV4jm",
  "key22": "5hMWRAWhcGY5Hq42FxukRvJxC8WGSDHH3M219k3Uh8xbaXeBk2cBT9Xt8Ttd9V65sJHKaSU6Kwuo8gX5ExCaNca6",
  "key23": "2AinEKfraRAhngF6mQk1A6Ddd4yGaYzv9kJEKNzgD4QNG3SVd8cEb8XoF9EiLwswadyTeTHozauKEL5EHgJfUrmp",
  "key24": "cq19Uxd8PVahWtu1aucd2zQPXdM9JbFChjQm5yENvvou3GZYk8pd5FiWkiMrGfExDpjPtzRG9zpUhhJNaxqCAY3",
  "key25": "2PpNKEQTSwgvUA4QrLDLtQtkxMmR8rbHqfEk2grp7L6ctsNPnmhfvcf9Gr9vdoq5mDroUVRXPx1nP4ob3YV3cBHW",
  "key26": "ps2VeDBAstNdxxD7VfCL41WpGubcyAFd4acz96AjJqueHSfGaLe7FY6k2McodTcnL4hBAmTrcuwprV1Y4aHo2hk",
  "key27": "DgPBBetQ6QMvCPQoxqqFVk94HpADaJUPVSyYGhYo6fC8LHrjZu9v4Jd1So95cgxPpgTcdLr3wDcvPN591ukkGyy",
  "key28": "2kxbv2QyLXDpDVjinTuGpXaVeChwep6g35EBK1AzpR8GKMFtDSe5voBoZJbLGbUL1TUbgMt3kdsxB9WXkme7f472",
  "key29": "Low1NqEtqsK33ZNx9AaCj13VHKFdETevDnthk7LDncrRtySKA2mR2dHmnCd3fHFKEjdugH8RNXLPWqcDBXXUTNz",
  "key30": "3d1LGqdGDJt8yan4z6ZP4DTdsRExdwLznye6Fkkb96syDpb5iqUSseVj4tBU9YVkR1YPFKs3XH9wQkL8YoKrJ6Hx",
  "key31": "4ATSBKhB8FqHmh3MDmtfsjnKqQ7YhF53Ta8fsCD3CV4KK8i8Eo4hDbj8FSq8BEjZLisMxZjYH88wLiRCnRuXxQyi",
  "key32": "2qZxKprunTAqphwueMuqtkaviKfWhqYRr3UYNuhrkhvftHXvZWVJHY3X7pki2u33EzkkZc4ctzK2x4T5kNvbVbMF",
  "key33": "f5NnWSbME8jaH9LnaSkbwosuaw5ubSt1XvzR5x8xKq7Xs2S8XpQccMihFqJApc44uvbbURhkkx9wBPHE3eXozLF",
  "key34": "5VNga6Usj4dZCRZeDRmsrkVRQ4r3E61MtweCGwkcRx8oC8yiGwZfKFno8HSYh1Zqj3sBm86FWsuEQ3KT4rkdfUwV",
  "key35": "5sU7bbnFMtfUW9Kq5yCPUmncZmR8FWJZ9CpWsan38LU2bRbR8XhkCLHGRzHMxZ8JRgsowySDqpNg4PsPCms4zt1M",
  "key36": "2VLv278LQNnbK89d1G6239GATWLo7KaB1Wq1MK53ZhNy9CrXkmmUd42Y4GNs6bFzAFkVXMdK2NmM8MPqVFZ2xYQz",
  "key37": "2QEUKxDE8XosGyFXaVExkoj5PpWtujKYGTNMpULUdyUDLQSUScXiZ65qBg7pD2z4Vmnk1QVNiY3rT2ag9LTWZxpX",
  "key38": "3ME6QfikBy3zSehmnqsinYjG1W6rqWEZFEKeCnLVCGo4hw4gap6ZQXEB45edQ3F68MgDjD2tqr3kY1yxKSgxRQp3",
  "key39": "5Lqk6krevRs9gVB8eoxQGXvQ3WpDnW3f1wtuX3hTBsNo5FnDWxoqVbyn7PJi9dhVNQ9tKCGDQ6uCL8afh6UPMcLR",
  "key40": "4mXXkvYxQQUbFLRB1QyFaGFYivtSsMMDzT9znXbLnmNi7SmDkzuW1D6m1LjzTCwm5RfmTiAwoTRJR5ebM3i7reMN",
  "key41": "5REzUvWGBogvAFuTh5SEmE9r25N17HsaUiz1xgz2CTq1dNZtqnrdRzdej7ECyApY29KHCZjUg7p8tw4CJrsgsofi",
  "key42": "5ne1MiRSvYPfFX6WMWQfQ17EF5w4PSpfpPSx9FCPGTyKvhcBcxrNCEHhUf2T5TCs8pKkjz1McthmqWmfFogPNJSQ",
  "key43": "porsDtcAN9i9geY8xC9HezMZ1kg5dGxCwvemToWLok5eU1xaH9d4zsKQosVdqfMKSqeffn5nctRYyC3Pj1Vi2mv",
  "key44": "4Q2vKwrEXBqGD9z1yY5SsSAiKZh7ZQSbVEuv8fVFecfhUSVT9mPKNPmiH3hHQTabZcvbp96Dz7LYnTv78wJkvhoL",
  "key45": "417cF6s862vhFWCpHCYRHPGaDsWnLwGZSTUbox1WeRRrporjaMpv8t9vJmKdaHJ9KuNWmrDSoJjcjposQjWxoxDt",
  "key46": "43Jz2veMQRwKKj425fdXq1fVdDv9JgXMdj7jCT68xdJP5Jaxheq6Bbn12C6F3bkoiwgzT1FAw5d6Feh2WsxgjBrJ",
  "key47": "46qgBE432hAzZdrrg6euUSe5WZ4upeFZon5vuDdX5z6ssuVaFxCFUnCQajMvZeoiF73aUDVhWz6otzzq8caEooCD",
  "key48": "DNFFA5scnkMpfbwDBokCrVWfbQsixhFSmUTAfTo2cAQqCwL9S2wv7Q3XjNYoxiCPM3nfPew3u9AU9voiS7MLMMA"
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
