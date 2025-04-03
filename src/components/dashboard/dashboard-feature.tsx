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
    "EAu6FqdXB887CjEmQxrVXtng3Tz51jRCBsmwXf7SKJyuQ44Tq35gvxJDvvzvNKjrFfw9dGCgFRjgpF2vijCjQBw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ESxWPhYdmGe4wfczAMvqeUqJB62e9cHGvdkpTXLycXjDbpE9G7R9Yu8uQ7GYMaoVUPSGTwuebLaF4EFZedSQYF8",
  "key1": "5uzLVngzJWYPWbkouoErDYeaCagcSR3PRpMcG6xydwqpr6rFc44tCCRboVFyo8MALAU95iRv6ECjj538wAWjaWhK",
  "key2": "2cZmNgEJCZci9x1tcUdNZ2MDBP4Xs9Fhz78k4LjECGZ26U54grgxtmHFaGstZpdpndaVaCvdDF6J3j6BH71tpGVr",
  "key3": "3fS5fUsVRzTaionKoxsVaUwKaW8h7hehxnYu2fsHoR1o4cwhaqMsBRYahEkVqtkjevDT4APyXpkEhSdMw3pam5Nz",
  "key4": "4M2113n9MsecLyMBtbQ68FPmGhMfQGyBkuR5g9nNmxy3jJxiGts9iuny4Q91sSEsEeG7RhvRiCT9Aby5wnbDUfpi",
  "key5": "2YofnFd5Abm5bdpYfaWTpkyzMyRCSzKMcg23dNRxoHn9vAv6sHtsu2t1LqT9AxcjqMbqUoAyuM5JvAKxkZPTB2My",
  "key6": "2h5yQCqh8eSFZ1i6NsTkMWoh7dvjtFzUdDgBnZ22ysG7NjUFN1QFYQfvb6fUwCoDe7FkzN9Wt4ey4RkrNBGHmnRV",
  "key7": "53DSgLAR2xQRc9WKiN42brDzCZivStyZ8kZmNg1pw7gxLAx6Vqxa5LpDqRDFJ2mYCeAtLubmA9ZDa3N7jrbKsd1G",
  "key8": "RtNcEEfiCXNBwvuWbz6K6r8qTeTzKNStgex9j7pvW4jwWkwPzVSrGdgkqYHcxL57dpsET4gUUadrmg7o2maXxG5",
  "key9": "UQhCnZJJAxFrLMMJAitXuZ5dzE7PGLwUBeRzmjaWvhBix7q98xKEbnUgkNn9ernhfuKbqKBwiGQwF1yMGzR2dRP",
  "key10": "2CUsPpRQpcAWHLoyy6oW3YPHbRyuJLrvRAwsV9a1ee89K8enb2L1aCd4WDXf5RxQYaBg6uXF5CADCP1WsY6FYPb5",
  "key11": "5vL91LfFfXky9qoFSGRKxYpPZjxsH9kMuBNEHi61d5UWcyS3MBTaXybq3WqBnYiDfw2QZfWpNukaubKjc28PC2My",
  "key12": "4XRPRD8QKygozVvES2ZMhiB2yqkicbApXCWSoPBJyQCRCY9obSEnt3y29suGHVL4Biz7GMYEqeZYDwhSNzwQvvXM",
  "key13": "TU6pQYsAKBfuweaKLt1xZhxD8EXw2xjLN7H8YHn9UyxP1okPgNsmwi8DcGG28mwgXJzn1pDgXt8i5n32CTRsaHm",
  "key14": "3CuR2zEt641vmfmfBsMxLvv2gVfpSdDJMqTkWfZcourJPLCGx9Cqi14FNDCXJj1QoKNGK66YTFKjLevAooCdo6p4",
  "key15": "2V6zTrQLJNFdutHg1dBR1mQqAfyn3SJKbUUFUj35iGYjdDXbn28xX7TeBVw61Vy7s1wBWc5cEYaNvn1LwkmRAojo",
  "key16": "4zbNmu4iQhnKU4QZfFBvu5s347gC9zbxLDmtBBhXqNbwimiZyAbQaE2QSKRqESRPgrVCy3dRLksTbwFrEKnHy3Sg",
  "key17": "3F7vpDZeBFEJpxofJsvcRNJjZqQAMecZZou9X5cDgMf9R8R49t6zRMqZWeJ62VMeNraHppNq24pLmcZuoup74xsT",
  "key18": "5XRoYjmvHHogGAyJC7KE3WLUxhK8UovfhiMv6g8rt7oYHnfq8cbbr39ykW4TrPdswJUc2oowXFLrYsazTiSsuGWz",
  "key19": "5vgUHnnVMp4przSbSTxU13RGmYiFcxsMMds82rq1Acyoh7fSeSREDtSz4UR6Zcm845DzxoANLAwp4ot6dSHs1t8b",
  "key20": "2pVev8Q5NteuesgNewkyjyN4jFxVD1AavUsqEj14SixgtbJ9NEkxsxmMzkiv8EhY9TEqLhutxysYMnyNZjFyTH4J",
  "key21": "345fM9AmgocM6UeLGkAypH3NAxgzBg8vo6QYvnHwpG2vvyHYZDVBfGRXWkgALioCvXCLSGfs4ov3mvGWK6N8pmYS",
  "key22": "2qjrJJfuiGiBwajm6gbbeHFLC4g3BU18VVddT6GFVSNbLDkFkeMz6Z76FiALmNdxXgyQZKDw4jNs5UzXWYJ7dU41",
  "key23": "5ayh6wMtx51rsVqHkBWrASwdVgApFwwPZLPNyNaVevgAn4J4vV89vsiKqQgAVTy6gkCASw3KqKeNYvsQmmsTRUbo",
  "key24": "2nEV2718kjyGCfsrKSRA7UfBGnNsvSUB4PBfmpJDfcz98yepHdwhBMJBoV4a3j9bJHTVjqWYxcaUpoBs4F7qu1Fy",
  "key25": "4AP2NbuGH5EUJptm5VHWPymvP7REwSkP1HcC93ZfX71QpVBgKQ5bkCQ3SVroKAKdEoiuLkE4G79dFev3T7tqqD3P",
  "key26": "CqfwY9FMdPN3weiKRPkW8pzMYBoD3eDseqUd3LiYwqcwUciAGUFUhzqnFmmPiUiWK2354ASKV6UattP1Hch3F5F",
  "key27": "467fya9J825ypmVenUidqnbMS8UC6dm6dNj4P7fDDJtas9JrF5TSYZsH13XENSEDceHR6QYaxzc82iSHp5xxCnE9",
  "key28": "PS4HhXkfotq6PkEXjE2Pb2ozydTMg4fwcf9Tu14rF7JPXiuSQHcYmRREXJ3tAEeS6cj6iRrjzk9tFMLX4fT9sbP",
  "key29": "SooCiCYcsWZnRa4aSp68TCBL6dVqote4TCC7VFKCrsLqF5wSPDc621X8xXPLdT8tqJ7D3JfgMMAvDAzdCpQjPEF",
  "key30": "2xkTVomD9KKkNUZS8EGCLrxxpKj1C4KNWoGBUoomPXgZgf34zwz9BaB7AAetho1MRxztPpBVKUfreK4mF7JcFpDM",
  "key31": "2mAPUnGXkK5JMHmWNxW6uncK68BvfXWePgHUEQtXQMY9amojC2HskA8vCMnYATuFDr7YduGBcr3G2Li6qc9TVegQ",
  "key32": "2NMd9Gfsu7hdDEfGvkop6XB3gfojjbQsf12Vf7CG9EDHB4623DgucVfhffpbh5kcbWsmyZToqUjaXmURgP47dtpx",
  "key33": "G89BCTDXZrRsbV74VarXc3ejpz4pWU9X59qNPGzU5JsyJh5bBFHyryfpcY73RxBzgCfq1jmFiyrPaA1GB6SekKu",
  "key34": "2joVfY9EGTo2b2erDyC76E9g6yeG2CbAarCoN6kU61d6dhvf8Ytcvtb7AdtyhXa2z3xmcatS8fz7nPvpNxeXv1U",
  "key35": "5w9jGKX1ET5ukKWTSHK81wYpdeaamsmRZBjANyxru9V564bfPGhbxvi6p8BWgafHLPYRCh2sCCteogmJN6HBb8hY",
  "key36": "4QPZKySwfCnJru7z3SLwbxMTJzcroHsCMPSi2DyaynQNmydCgDxP1RRoyyfrM68DKztcuTtZbpuTJNdAVfnrq4ff",
  "key37": "4QdafegyB1jp6Z7K93cJ6oT2V47qJmSuyE25peXsK8esJxCkQ1PCArQnqocDcw9aQbuW7hE983o7SJ5iq7CcRhoH",
  "key38": "22nfZfse64x3aYE3xk7acpNoi2KMX6EjsQEayrv21aH5AYJAtyDNNZPKRxzED2fyhGKMEYyBFFLRvaMJfsgonXK5",
  "key39": "7dCghA9qzaw62LpXCpzLY4id6xLZ6azXR32y8Vr3RKxBQ4Z7cgQZiJXcAjxkTVprncTGNerA9FrisQBuKSmd5os",
  "key40": "coAsm4n9cg6SUGR8DoCmiwVKhb3ez8aLeUG64AJrnvRpQJp1P1g4kgvhd3qmXkg75773x1hiMCEsrJRVWt2sQtm",
  "key41": "4CungV7sZQizkN3sFUmPN1pY1J64UhB5ty1dAqAT4gipkvQi9fRcY4TZ3K9SChgxN5BLjnQVmBH4GgLzVWmjmBdH",
  "key42": "qtiQKFbcPEhjNX5jk7X4DRz8eZFDMwLqErmg5kCeF9KDDD61pEVZrTMDNGbVUCg7C5tvGu8DMgJQ3AN8Ng3VLko",
  "key43": "4Dwt5yrnGBmo6JiXkZhj7YZ6nAN2MwpkYSjaoReG513erw2p5HtCGHXDrEPDZVe9aBvGbXoJgJAS1SQtLEBVhQ7c",
  "key44": "23aFD37TpQUzX2o6dJssCBSrUKvv5kfJ54Bkejk8cFxxxWNuVqj76DSi9gaLiwfnjFCkq9zwB3KbzeEsASNY9Qhr",
  "key45": "5ifxWfzdfxhF8tcVeT3MXVZq8vbZH8rTJML355T2RDg4nozFdL6a7xRqqV7aWroh9rmqThbETzNtPVLDsvyBLQbz",
  "key46": "3qX4gkQm7BqmxvejUSZnjmfrY6H23t7UAKfcjXceWL5nM1bHaH8DMHbHktshviEoqz2L5LCQMhsRDtr37vQ55BzR",
  "key47": "5MzA5eJVDi4B5qRGB6tbV833EAugszzq8oKXDxWvK5JZ6s9gsa7cFeATwD2bnMavhbpEUV8acrg8RembX3KzCUJk",
  "key48": "66yYSiyg8s6jpG6ZiD8eMoMowonw2BXqkwJ4TYvJLXLqkky9D9ooBoHYNVi6xFvMEoN4K1HFzz4zDPgKhXUSaT7b",
  "key49": "2NvDULrmAkpt4uio2CKKrhdEjxaiccaULoGcgyGBFH5q6MCrd32BjDZ1RQw2aCN2ReQonPBjeXk53Aa2j4q8tQLx"
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
