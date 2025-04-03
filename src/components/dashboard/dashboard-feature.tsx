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
    "2WqxiBSRVQgfLe3j2DAFWg2dJ56VW5u9aGEAwWg29rkWwHfHHgDC96359FCQzEsW8hGvpaAvCNkxie1CPFfc2rtm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AscHtKRbTkYrx52gjAEmQNep2w2CHJFvPQv8ACZ6CxRvQZqWCkcxy4ySLLC5KpFziMVb9fP7wMcByStXnX4fi8C",
  "key1": "4k6pJho5VN7JfybdgmzJDcnx9JnqGL1PekJzWvosqyf3t1Bm1U2V8ubb3YrrAWTiK5ViVtzrxwQo8cBcDB587cF8",
  "key2": "5EfqAZAxdAoSYaQMDNEtXdQFAkK89d3TQUuU1YaxbVgE5ovkcktpgin1Tpfm2Vr3eYgh9FABVg8AVM919idKV2SA",
  "key3": "HvTKqPjDovT4C1A7QfjyHr3wUyXcnYAwXN3iaz6FtJieneRfAs6NoQKt5vJDtXF8NR4cTQKEynY5QfytyrotJ6B",
  "key4": "21uFrkhCf269R41Sq1PgwYNQn6ptaCpE3B3w24zFBAzBnVx882EC5bLUfAqqt6d45BDoe2JDYh86Cd7h6S4JVzQE",
  "key5": "51gxegXcLpNkTJnhMp4paDdRd4qdxSrEjf5vZtuUeijSgoRMaDnXj2GauJyKj9pnRDQU2YGrmsYA3FtcMPJtkx1R",
  "key6": "cfvZpHurLaFzFqwoHyK8ScrGZb6Qfw2boMMV6E5grpj8anYaTTGRNuz6D9aQ1Dsi1DrPL7YjV1j5YPueN4L7SMG",
  "key7": "3M82ao1UBp7NaokGaS2FLkSQ9LaVHrn9JcB6UoMZCjWMi9oYuVEsctXk8iGJcADzmPuyuZuLbwNgw8D61FMZrBEH",
  "key8": "5tAU8my7AyDs1AoFptZVo1yf6idAjmmLFNLZiU7TkPyVZdXZi1Rd5FR6z3DvCFW67NAQZRApNikSjQ6fb2yurUtE",
  "key9": "3N4FQzQpPztoeM8Uf6sW5Q6yfAa2TpH29bPG7ZHzgkaguPKZv4taskjGSocX27ZJX8qmBS7AEJjDFt44fnuwEupr",
  "key10": "35pRBJvCR8pUVvFUFWXEiF7BavDrjbAdpPr5ZLntEpRSsCV3rV47CoQXkUtacUdYofqJQvDPD7XBW6AHg4yUZqA4",
  "key11": "3bUATShnN5n7nG86Wso4NZrZVmv9gM8B8mQXgH12EKWRrxwT2efeYfEBxpiwW2Ygg7K2x9cPprdTtjvzR5MKXCEZ",
  "key12": "5oCebp3NrzG7fs73KThSaFXEzMr6Li8jyudsAuctAihZdUwrQjoWEjJT1NRtNuPkEaEdQqDXQCHHNxfVRi54jyFy",
  "key13": "5xcfJutbLmEjiHpt2agrAd8Hb66BWLESX2sr34cyEWAMDQ77SEkDFDEXmR3THi7ksiCGtTKdfYA2T1Fuusy4bEHd",
  "key14": "4BnxGC8RVmsuXGaMXbUDib2uEk7s7tjuwXYRpS9sCfHjAbVXo1HRkSJFjFMcQ5tUgjBfysQyHqYoVFJULyBiHgdu",
  "key15": "2FZQUMFohjZjE673RQNYWPsD3Hha1yxtExcGSFm9eCjppQDMRj3cGVrKY2i4WwZedBfiM4wbupkF9mrnDPjZG7ML",
  "key16": "5vHex2puvpvp4KVeHdxSzixsHLrSJ5D7HyQGKT8KXBQEkPndg2kDH8T3WfknL4AixgMSvZ9vntNZmVtycpiEcn5a",
  "key17": "75yPJs4r2f695dsF8RimNFGKnCoZVbvJ98TnYG6mseA6tx5NZKA7hKRYSFUsBx7o8ybadsLUT4vnsuRMVMcndXR",
  "key18": "2FoXBk2DY5xL2vmc7Cud3eNHHAxfDiPpCm9Jga6fhbM42QhqawmC5b9NZ2zSjoN1GxT6Y4Jp9DdGn2S7683EsNYs",
  "key19": "3qeMrCkam6LfCKdUGRwkoJFkDw3VpSixB7ferWR761m44oMFpqoEm51TzVBHTpsTrPo3mmNhnzXXXz6vgVhLZ8EY",
  "key20": "5MYzQhM5LeHFBGzir6iPgeXDBht36yUBQnebpJnm5WzXn7TBrjWMspfRvbZWNrhjVR9BhYqKQNdUZB68M3jEin5v",
  "key21": "5SRKAtUVtoyb4FHsKm4ZdK1NB8KuPRXtR5yCoJg5g2Z3mYBtHpg4kAcSqNGSGDKU73fySt39PVz28zGBoJhK3Ljd",
  "key22": "2h3EPq3WdA3jnLL9GC6QpRF5MoTuF3axc8W2kD66hDpGtgTKv64URr5b6f3mcFnHQ9S5oXjN8eLXf69GCPewgrtj",
  "key23": "36FU3CGWuxBcNToEjYEUpuigbJz11WmSQwy4gVRM1RtWb7Vgehr5XwqnZhqGjq9RdrNk5jQWBv9Bg2wYNSWPAU1e",
  "key24": "3iyKUu5umHL5xJC6ZR6wNPcZn6zXxg4BV2HJLH2rwjBpr67HSXkx5CHRLmedxGYT6ihFZKBE9PGnV6JqRYESZU5z",
  "key25": "5CDWcJsvjNyNPwmuJvUmWN68BKYku7sa61X5dpnk3ciugkyMNCjjgzQUgAy5hDeyEFyH1dch2uu59NJmxkhTHnJg",
  "key26": "3soNkpPmdRe29niAPsiQAPbSGAavBCsSkiHD1AzsrdXrpsUjHoQNeuPuKk8DqpwXwENx9n61PczYpmf11cAY6jep",
  "key27": "25XsEVv4YjZyZdPRyDv2N9ZKLLo46MBmehx3iSZd666nXEDo2LxQS6JXProTNsqp77xRApmkcGBfKF2wjfCva9Pw",
  "key28": "2Tg1fQVDmPt3MbbKNjDrB6jTrr1xNAdEizgBhXeHZVVuKYFGqq5XfqMiidUrkqQ51aGZS96sZQu1PGoda4qmbE3D",
  "key29": "3UfDRLwWmwLWrjwymv1t3sz9Z9WivGfH8yqzvtSEgWiFikrw2aLPU6HVcTYkmJg7i26D8D3M6NybDXg3FuiqEsBy",
  "key30": "ypJxTTdHWVzCC9EfwxXJ8NQRdaf6uzmi7d3hjabZiHHiSi7CzUiCLV54Fvr71vPrqj6bidppDn2p4TByLxt3cbA",
  "key31": "5sxztutkBX5dqTmBDqLsGw7Y3hLVu2u8JyZCtU8euLHY4MTdCRR52W48NkRuZWpNGpYARKhFforMy1SNBLzPBmcp",
  "key32": "54ouhKHPCt4HkxMWiyrVQLpxBaCkwaBPiXKu9rpmVa3PyRR1ZVtddzXnZPeEaBXURrcSr6psfLJmMVpGLgiZAru2",
  "key33": "5paNak1gaRZyepamDtdcZYqKNgmz8dRK6KAh21aSxM87h6icm83P5rXHCVpC3r1xTTixyE6CkV1qfA28zEwobheF",
  "key34": "vjpyGvYZBb83n5hcqjN61sA6scMJX1fNoJ2DsGysdhKqxjR29E26wBPiCPYTnpTVi3aG4neD3h7Zjk3A3wgUPEv",
  "key35": "46BURUvKiKLc8xAQp6ZQ9CHhbN6VVX4h5UyaAbDiDD94X3usShzkWBdw3HuA5dPcb2xFCqMSXmRBsdGFMBh457EU",
  "key36": "4NJyqKrhdK8KAUWnxyAWkaD2hbuBsDTMqSZkPUv4fUP1BBtavp9Pd1qFvUobGWucwNHP6rPvRFE69iVi8ReZ4aQB",
  "key37": "4s81qTQWa79nmYPfUAZrCQSBWKGgv7W2PhkuXHK3CkckSJJvQXDtGUCLnTKpQ3UL6JnstgTBxVhtaVcMy2PR7wLd",
  "key38": "2ZLkXmfUGMXHuzNLg4xjM9d3jcRCXLZM2WdAL7sjuF8Pgy5djA8MKNVK2imMU2icyadK1JBHN2CCUABss8TT3fba",
  "key39": "5HYLmgGa2dY2AWxQNCSAJ8tvyA4hNVcqbTTU7XoUZDCeJBHQmeJUefpV6Wu4X9gtG6ryUnFGxB5zhtGEmQsdy1C9",
  "key40": "2hn8FSwib6fMMC8ZedPJkWx9TmPbcMpwZySvVc4fp4DH7K5ALBppou6ipm5wM725p5t8M659qPMnMAEfy7hLWrb1",
  "key41": "53HLgh4QUKCChqHpcyNXNsq62q1akFD9L6odMBFGb7UjVfjq3GDjY2nzsmiBu2AsYZdYZAEbdQ2Bsg81BzAiNjWZ",
  "key42": "5fmzUymnVtPzSqG1yJpHVSDRPhXCCFir2GL5aRFMjaFxiyX2LVQhEAFqrLsK7bVVwsTD5fXq7EBYkqXL4N353nCy",
  "key43": "3HGy3cr6D4qqLaxKamy489YUj1GsxyL1qGvujC8WBW4LNGHEfivSfn29CuYKGx3EGzNnLvAfWAYCDvpExUjxpU8",
  "key44": "4MRbEppSEjDkaAaK6UsjehbxmrQbpvzq6rzz3XyKXs5EUGHohYkJHRvtToWWBd2p8YvVWLwPma6mJUvtnQNDcucC",
  "key45": "492gf8PJJpx7hTQbmKev6z5N1e5NTtFZ4VqMzSxcfHYm3RqPPKV72dpwqzyqVmmM59QDSkECebEWK4Q96d4hs1Xh",
  "key46": "5czMrnDqZUj2RL4Piba8gk2Jkv2Bo9YNtGTiRHkUu6c6hUqari2iCLyHXCLipHKfffWtWuVBd95JcMYuCpEBfmf4",
  "key47": "2Nb7L6NQm45j4wtPdJSDLRa2KQabAq7xvxbhSJj2Rfb9YF2u7qn81fB3HCVaBmT82VShh4NST9JLYmY2SJ7N4Fo3",
  "key48": "3tL86MZ77xqD4Z9WNFeeSLjVFHPhQKe38tdqLXoqVcqPBhv9Hdsy7pESk4xjySXAj9tvw4TZe3zr5AxLNozaAJFQ",
  "key49": "hBh47FSNHUjfkukA3cDjXNan4eHWvBkuahxNCvd1iuXtoqKqJYZNgqtpa5FUcmi3ZMRack19NLyBAov8urUdSKv"
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
