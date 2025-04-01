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
    "5Fk9YcZPACyAtXZjdhvxcX2jDNFgqvgfWdfZ7DBm6Yc3DCMPfywjzYpLfMfY1F9Ap1qbKrykz25K4eaBFK7MG8pu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jjcCKk8qrynZor7RM8JpC6CYkY4pRUQE6jprpGpJPoLJH4AzDpCJqDxsJ7knmpxDUzzw9QXSPpxoDJbzG2WjdMk",
  "key1": "4NnYvztrbwCU2cdfA5G6qPHjhSG5GDDZuYRcV4KA2FgiofoBCysYAJZk4Wz4EtBAiPDDKpJswMBLkeeKJvYxdK49",
  "key2": "3r9BrJU1Kpu4RmN96agz1zwt1UJstpbc7g1K7qBvZJd7YyQupxRRD5DpTXeAKUBpd7asJv9HU3DmncDo2H5zoEEJ",
  "key3": "2r46AcJQD8zbTmZtY9Uvj9S4mdC4u1zw3bPJLswGPW6hpWWYKq8bXka6wCfwaegWkquG59PhUDQaeqR12Zt3SZBJ",
  "key4": "dkxpNGjMjmbfHByuxPbXXfGDA87tx716ZYbju9wkojhyey2t4DwpGXnH7QycTuJfg1qjiesey4EbTiMrStUMqXH",
  "key5": "2kKxEnKd95ZPjTpmYY8q2ErJMCN1nFyr9LDhJ9fquQuV1SveV9KyNdKFUa5JjF1fWexmZyLPcBihbY73aDMqev9M",
  "key6": "3LcDpAjdNxtQMHLt35SBXmda6Lircy6Ugk75G4ouuuE5w4eoxDg86WcTY3eg42Dqu2CU6XsVi3aJHTUkJ7fU7xkp",
  "key7": "MU1CJE3m3v8UYAACeC2eDv42pLwshxj54e5y3DCaukKrs3AJcPGTciJbzpXWzksu6LoTMbX9dNHwPemd8EF7CaZ",
  "key8": "22icuo5pBQsh6qiGoL8CPoefnu9bVoXsViXQe7mRMDdJEbcTkrzcbLYLnVUiouFttMZYXLCj4x16RZxgT6NtaiAe",
  "key9": "4Ka3icgc9CvFF8cd6NzojhSD7RNN5JhHD2oRziVzMSJKH6oMcop8swNshfoJyVzzDHxtpqsWhBZATjBrSqmYjA2Y",
  "key10": "2En5nWQeb9U4V2QCjTAe4fqQUi8ZPz7ZdC5Py66GXoeV4M4KCvj17fWp5dV6WKy8oYZgwri4sNUnLMTAPaHgAgMU",
  "key11": "2UtzaYu7Pz8fa5vQvz8DTqym9eYe1TDXdYq1tH2nfyhiKHuXemB8bKR2NqkEbhtUepdTbvYZL79vgEh1wHTvhSkb",
  "key12": "35xetY9zV6v1jWBNcSkCRpFwmKmovG2yztLYuX211UQKuYEPqh7P5P8BcVaF4FCyd2Waei1HSbPkeK7x2DUpyK1t",
  "key13": "55Li2PBXF1JY62CP2egE6m8oAuE9etQEzkiGQW59xogypvgoLJCpHUdfQku59zZXAnRp3NVMBDpX41xpa8m1apNt",
  "key14": "4cnH7J3zM6UWC1tptbKTa5exaanzsPEBtMuwbYG1F4FcudLEVnHftB3BLNjPnK4xyqmvtcEMr7URmpLrCjSLBtpX",
  "key15": "4Y12rxxWtBSG88Kb2WntHyA17CYfJbWGa5PzEYnpT7TUK9zpR2XJDxgtytqtnMKCxeF5TEaT6y1FywypGV1yCYAH",
  "key16": "PaVGRWZSZggUfKRjwAUWCRt2LRd7oJndnQVxGLusrpqBe1Ci2YGrFLY68no9RhyVPFPSS2nJ8ZxAimSZ7Ye9VUT",
  "key17": "4pHBRF8aMCjYTMfF6BuUV6XWUXVCjgfzBwyWq6Sqxh33PcmaCiFxLeqFxMX4fNosGTHzETz19xN1fia8xMddFA8j",
  "key18": "G8drxi7ufkTT5UAECABZsbD2yPjgdNipJx5XhMrCPpsSxHSsbprUsMsgdzBVXtbzbouzQ1KdUxQaN6xfdJABQTb",
  "key19": "4kUUfiTVR9KxLaKaZMQxJovCgMs1FPzdDq1FkDokxQBWuQyLND2mC6WmEteeCHc3bQ5SMcs4VvNjrGgyuvgxtDSc",
  "key20": "3LSznYzYPPoCEGnTgTcBzy6WyQn6jg4bQU7fJnLYF913WcJEZ73jcCgjMDnUpvA5PpzwrbR1JzU6D63q2x6mTSae",
  "key21": "2nSkEbrJpJeBjxBdT3bp3fU3nwqkoXYCaa6xk3shJRjYyrPPD64YXb1pE9ZvZKQ5Cu16sLs131N6yLUPCndXAYpL",
  "key22": "4rcSehM9ihF6EWYdCcTnD6afssLMjJ5kLa4ULoZggwrk7yQC6525uoaugUKGXDN4Nr4QoVibcCJfexZem93ikABL",
  "key23": "3bkrdeUijD7ooaGKXqsk8Bt9FCfMtJNj8oEiqVhVu9VBLaopJ3Sk6BbLYqxnbZjaaUUQguNcgZMpcUHCMBRp9a6t",
  "key24": "2Q81WhxouBxbDqq3z9b1FHhbMgeadMtVXHJkHjHcG8gJrm5eNjobZYwfyhwrDK6uiwKFVTEtcWRw2FTiXL4X1nFu",
  "key25": "4LgKmCpKsfQv6qSGYzaZESu3kCo1K1UxbPNAYKrTk7axZREtqPWJmQ2QGquvAxZgwAJZGnpXTCVjfQmz2ZvVM7Kj",
  "key26": "YcFnNuKKuSLG6SiNnTXfvf1HeB8TzZVkk82gGZnJxhWZkEhdtBZ3mB7V892boMcnYXuKVHyN9LA4CawgAE7cMhu",
  "key27": "3jiUZi1UKWWziYZ78nYkpWHZYFZdrsdNJJcowDus6TJ5R9JKaJA97VMdBZKhPDcw3xiFwdNcbYfmRvChgk9zUYki",
  "key28": "4AWMqG1skFdBJwR2HUHj7cyp1BQ4fAfDnjzFL69uTqu3kxVHn18jQ28i8jms6stJE4bj2TkfzZM888hBrr6yqHFZ",
  "key29": "2GgzB2JfRmuxsG3EHoLfVDPm2bx6GLjPkSb8wtEf84XjiR8CL3EU3aLLyAka9SV3Q68cYh29VM1xnLTDLSKxVdrH",
  "key30": "3MFVFEwNDk94stJLYfXsNCqzF8XMVk5q6kCVTHHuSTpqoMpqZGHdtERxSY3mkrur8qHpGkkevDMokyUkW7FgqF3t",
  "key31": "p5YwcKhExC5RQv88GBFvvoMaUcZVV3Z7GkG9et65dDXZhrvGSayPhMNfXtUvVWyzHoTz5v4NxipW2Ew8kiE1LrB",
  "key32": "2WuUYTDeDGJurQ1sYfP3hXA4GVsHJjAt3UvQzH2Q6d2bALshYpmyonG3CPXqgm45yUrwRMdiTygmWgtCTywWR847",
  "key33": "54txf5KooF9APDiCCW8ycxbzKpBRhSYm3dw1maUqE6rNT9j43P2u8jFmxvj2E6pDX29XT8x4ubsPr9CRGsrpUExW",
  "key34": "332Bqz5XeHALbfsacNnDVSWZPaukyJeeCKMPjTUuv1LzJzRNPCNxtM3GNtLCjkAVyBidB7HhFaYsPJLvJ4VoeeLm",
  "key35": "4gGpFyjtFM2kkfygU7pY9NSrAsGNChM1fsTrHMucwJCRTMBNJB9EGBoiTJx1sGjPhUR3n4B9ofNTKCAyrW88KAM4",
  "key36": "5EHLRNFr8oD1SfCyE4EA6oPcWgUALs5TixEasGxjp5BsiJZmwDUu9ZbXdsAyZsUt7Zj4Lvkpu19ZcY68ymWh5QxL",
  "key37": "5QbwiMS8L6bppzhnMrUESCvgv8JjRC9VevYek4sCrnJvUfWwEY7AgEWwyVn5GYF6oT3Mh69MAQjQ8rUAoxG54CZt",
  "key38": "28C2Pb2pUP3jBBRYbUszvpXmbQj43gd8RqBALh5CVRm5xSC8dPbyofWzg2fmc5nCrVCKEpddN6SDaXovpj2ev5A2"
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
