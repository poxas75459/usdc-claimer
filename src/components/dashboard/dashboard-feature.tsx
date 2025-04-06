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
    "4mtnc45rFgGgZFNENv1fWDVpGJSuceh93kwDJVM26jYaXoDpGcJ6g7boZ1LndsoB6vs8sA1AHaNUcyg9dMXjQc3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wGmFordNcx2GSDorc1DRGtLBobUQi9ehMSpReHuswH2Ft4W5RXrirnSWiSdaQFfeexNmV8yi2AL8hrRRJ6qRLeQ",
  "key1": "28K9MEeZdSfdm2utrZvXCgdxDPEsiphNfueYNxjtqhk5gweziru8y4si2yLRxDxTNdGxDk3WiUqFLsHftWak5Nxg",
  "key2": "2RA8E1CyzhEbVujDjnGJSWf6QU3suggwHCxJGPa58up2Xm8SCcYoDSNd8BamjwuGfRTaHkvvRfL3zzmgpiUpFBLH",
  "key3": "d2yR6c9zS9sKbWmPVdfoRA4rPEABrGBeZjkVaiU6sjFAtWeo1VJYAce3nFVqHoFu4VbrhB4oURrDhHYwr5dLv66",
  "key4": "xmdbiwEd3it4xfmFDc86xNhQBh83TdUqYjUbCoKqaQ9Nzuqxb57zdsUA3xvJCfFzrRenfu5e3UeVFYC8VCwqLP8",
  "key5": "2QKf93zJ7LTyxSTMA4FW2NYkmww5z6oEKXxmKV5ZkaKDGFyXRwo4VPnV6V1PX3Qu5q4u7NH8xgARSdPUfsGA1Hzx",
  "key6": "5oKkKz31FBkxFcU3WMxVzYNehuYuagCSJd8tbn5Vfray9DZTx4AQL1H6m9oobth2HLTCbbT5Z9vnr5weoyz7T7sw",
  "key7": "4sWfidpPz5nEP6sa6qrMMDttbNxp9PvEUPPppwNHordcX3ibjv3jA5h7CS2qzdwTWfiRaY2pFRpJwQCiyNWqBDj9",
  "key8": "5qYVXzzuN6cpdkGKr2XZ2PWKKWdPz7V1cuWVeWbs3b4uv9ET5vXqAJsnQ29ych3pLVcwXheTX4gxH3o3vgk1PZ3M",
  "key9": "2wRiZWEUNuG18SAY1in2nvQRWC9gAZ2CPezHg5hUxeGcYpmhyN7Q5i7UKQMZdR9nyyYwbdRdWKmRZKwHZ3VJFYQw",
  "key10": "3Mx7gWgDomDtgxWLBg6xGpm7jjixdSHxa9eZgqKWgYc9TUK6DTe8EC3QPE3fMEy8euJkEm4mrADMvLdwyUzjxNQu",
  "key11": "5CXU5puVdD8CQzznUSGZb9ZJE8nhNJascZfyasYYCBS4NbVTciW25fJUnUWh3dLSkaNjhovT9FBD3CMH6cg6fahu",
  "key12": "KBK448MvYWE6TWBYPZoNJtptbFT8NB9zB6bJHk7dHvyJZz2aarsuF1pSBYDqKzNutZvWmM4b3n5RgZeFF2xuXkb",
  "key13": "5JhkxJ7ALfjEkJ1idGwH34mVQVmA6dhpvDddBm3o83VtmmPxiKfYKtzA2RnSKnAL5uMYs8VL7KdUmP8xQZzL7fsr",
  "key14": "3mKi5UbsVRwbEmBZsJewk4pqvak3XeCXr8XhqKUJwGW2bJcZrBgVbbFpbjQ89L5Y1EXzcVHJiUojRTRPrH7fpq9x",
  "key15": "2JNTYP7JFhtDbJQeurENhcGZnqwajKe4ByYXnFnhg1ixjRGhLZ6zPH4pvrEHMi37YKGsj4DzdyhPTvNXfSoYo8Li",
  "key16": "24CKjR33cSK1mQChwsxaR85ucEnrsCrbxutm5qoes9xS4tiEjsaNhcnt5vMEYTgJWV4cfa2oksCFXPbjNLpCLuDg",
  "key17": "t2fQqP7PDVtnz1esdcBu3xVrYSJ6sybQx7P1jHW6JXSM6RW85FFdsQ8Qj4e447d1t83MatjM8kFRLtPkUV9YgSb",
  "key18": "5UAnuaf1DkYopSe2YogJ8ZG7v5Cn6Lr8HDq3F5Zage6dfWAacViMo5HYZLUeLrmhNnrEbwynksJcD71Gwa5ANaBb",
  "key19": "3U9y3nRgPBThF77syXyttPpc5kWy81num9TWMHLzzvjJFeeHniS27tHiw11nHZnS8zH4ZRx9QgKF5o25DSB9zekw",
  "key20": "2nbzDfM4neG4rYvFx2UjRuKYgJY8Dtix7s2cxQJ1CTUmfAF7FXSjd63C1XMwTyyuZSLvmBxpnDSCzUxJC8EsoE32",
  "key21": "2LNqKbtDjKnDevEXXRQoDiyfBnqhSTNCAmg4QTV1fgApA3uomxxjBkWxnnY3Qh4V9zDT9xGN5USaNjQFVzNDvDEq",
  "key22": "2KtRj69LVePwhKFa3wErn94K88JFCQ7tLzvMTt4uzVn9ue38QCqYaFRuGy99QDin17FqREE36DtHbydYGsoSejua",
  "key23": "5awbCQjVwPpkKabdW5t7oza4XSS9ozKBVckW3cPJieyT2g3B8nvEsxW1H1y6VzBGG5UdUwhGDH4vLvwa4jgQ1Lzb",
  "key24": "45GHyuHQkH2VFBFWQ6mp2SvAKvoqr77rALHswmpECnBkkMCu2dtAphbyMpbyEBzUGKSrN21uRmcmbidCnYgDSxwc",
  "key25": "PBm3JrqyPBr6CF7bbQKbA1UrzP4oy5n5WbLU3GTz5vL8h9hRgDgYFKAAxEPafncvtwBMB8DVwdu325AqFkepehe",
  "key26": "5kMn9dUTcfgNkrFst5fH3MpuPpwoStbghSrEu2rg1ZPzt1ctM19Bh9YicpcHMcLjn3fwCrPq9YRBemFaKFPWVXcS",
  "key27": "2SDT7jyUKMwB1SqEAr67uDnvRgosCDCbbWUg6FY5qGgevHY5iBpUnmk6VtUZWCroJywYPYLBcpyHQsxUV3XQvogv",
  "key28": "3317KauVWX87ujz8wozr6TpdaoRpr9XcAZh7d45oCb5toZ3wBH9hGMuj5ATZH4YnbTbgAVS1f9tCbgsYERUWHtcr",
  "key29": "5VnsEEWC4QUy27uY6HJZPDK4366kTL5b98zGpEHo7rYtEwTYP6YjeJ8wEgMbo1BD1pgQ8zjLpRtBGCiT9KdRAtHD",
  "key30": "3ufWfqsxaTtBortpsUQyBkrr7hiCV9n4Hp5uCEsQ6JQ2AXu49jLdCgjSbUEZRzLcuAtcvqPFRVgjLVZDUjtTg1mX",
  "key31": "5oU3bWAzVB77aweqHV9PJxaJ2VkjPafEDMeAqqqCvScADe6jnaJUsAqFKnRZ9y9q5Zoadc6u82PFseCchTo1PjZc",
  "key32": "5FcKs93uwRjanDXt26DfNvWfrRSMmDLrSc2z4ghPevPucRivBS3Cmq4u9YLFxG34GJTKs8sjNtKGFH7FfpvLmkBN",
  "key33": "3Tri9oKyGXtxE653E4EcZNPtKNUifvpHRYRizDxWYtRfmK2Lx7DLFTiK3LCsF8cQJ8gDFzQp82zseKVhAiu4c8Zz",
  "key34": "FtqHktiCu5gX3kYNHkAWgAoghDQZejxFWULhnu95fFPDZ6VHQuZu5uGCgULxuDtJyAXP42Wya3rZdDawt41gyeg",
  "key35": "5MHZY2RdTjrnQeVuyDy8494gY7ny2ZML8BgUjGgQLKFqmZ26cWUDZTY8XHEsqZq8eDserQzSF6DtvPiLtfTN1cM4",
  "key36": "3xpMEB4kHRqoYQfRV5VBextXRmUyyNKjaQWySzsGunTPtK95dPN6vtgftsMv2Tzo4LGtBLUBJZJjjE4GaCPoJciT",
  "key37": "5tYAx9uduTRdAMNP8MaUTrnh7TJrfPTtKeoLg3LHnY8rgkM6sgv6wmM3yDmoiN31PmyfW8XN52ttTPEUHGPZd4MF",
  "key38": "42Z5vKvmk4idPWDKzeArvN4xttxf2eQdhJTTRDLA9EtXKpGvxPEyioPqGG8gijFgeypLGgQfKvbb4mncp3nDVPCq",
  "key39": "3biLEG9ywozrpzamsU8w8Qe33NZswYhvxkUysrg2hkhKPgLnY3z9bjwW8cJB3P4rv5zcWExnmtX8s4oyzkkeSfWr",
  "key40": "3dGu3396xsfUkRwtuS7MjaET9LNmEFwn4GXZu57z3ezK9puLwSkGFJSJVgsPy2jnokj5iH2cHVdd5oVQstvk4EgS",
  "key41": "3dN5bLSvQs4nAXCyvfo891nmBukTJTiU2MrR6jK8o4KeBCfJMC4ATYR87bh1bHEVTjXLp56WMGg9zGKNi7rcjXMS",
  "key42": "5SJc5jK1gg9wpNzWVJLJxcLbCznRRZReJG2xvgDvmJYzUTt5Hfg3LdsA5sRDCgqKveWH2sdKR9hraLu1KSQGczkc",
  "key43": "5WaEHHL2igeAi5Ve6zrvs4hsJREsAj9y3ewP7JK45B7y65RaZP2aNKVEp7rTrVkSt3Po1AXejTiYieHy5zpE3NXT",
  "key44": "4nYRYNiSsTdiBPJg8y4eNvvQVWEwuvbHZp14popsUGFor7dwb5crvQDSgQvU8ZQuNpbsXoVYNEYBy8fMYjBfLxq8",
  "key45": "3PXLeAmg9WQrZjAj3jsTnsYxGWEeZgLuBGiAdGy3BPe693yBb19FtVjFSN8ma7frVzfqLDY8AUhJh9U2NdFPU9Hr",
  "key46": "4ZKSQv8qjD1qMBuFEps9xFrxi9EQJ4qqsMkDKDArtYDtG93BfLX1d8strH3g1q12boR3qFvNWcNvot5cXGZd1qqc",
  "key47": "2qrSrk5MuWZXR1RvSVb6bPtovvtfCYSGcUTKsNAGmt5Y3b4CrYRf7jxbqaiPsC5sKpxQBBszeUoH8vH2GMEXX8vb",
  "key48": "Mrw8aJFHXotNRoqKavfnyfqKxg6K8NJFvGPiTNM7RgqDLz4SvvbTjNrXGRcY6F5H4MpBEZ4MKs4ZB7y3A7wbq69",
  "key49": "2DYe1LCNbQ5Ju1LrNYvtc2irdTunUHauziXdUMMyRrewXUKBB2rn8bV1KwwYGqAN7JLe8L6251fZf1ViW3hkXdkp"
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
