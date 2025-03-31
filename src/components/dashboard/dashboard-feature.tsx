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
    "3pCEcmnpQfXLztCK2a31iyfDYq5DhV922gvzttgHqpKLLzr8AC8ECYTZ4HExjvT2CvUrwWdDAZg8B9KCjoUvj2ef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7SVDoRmvvrrctvrHfPfvRwVFziVmXxM6e7pWTwfGwoDmzD4hLsV1Kof2DcuUsCes4UxeeQTx8CCqSE5ETgR9Xet",
  "key1": "4p7GaEfdynjGTDybLJERTNKGRSUH54zNGE7XZvahruhMcP6q5kZPauoq84sSgn2tq23BafFrRZ4cUGjKjLiz8F6",
  "key2": "2jkhKK5bmdrPDXxxzWRrAjqXh96G28TFCTUcDsJgVohAb8eno3waq77zeNeFUEV3Uc6xwjiZqrHTH7wbi3okyCGz",
  "key3": "5gdTeov8hhJraUsi3dDf3xwexawdGaduNYHNaoEzXmYASQTtrFXmMt75FkJ6ScxV5GrA56pV2KbuxktDfBEkuLkP",
  "key4": "MWT6i7QdEk5t9hMNUjKguMHmNgCWNTqH3F5XywG4aPozuBgvk2ywxBaDDVA9NkDiEhYKVir9fvGZJbDtq8ms8T7",
  "key5": "tvu5VWDjtEGFro6zrBV7AF63DPCUF2Szz2VmkkbFKFfBNH93PYkesQT2hFYh5MoDSe5NN95iuHiivFsHJkhn4u7",
  "key6": "3yXG3N3PnZo8CyKdkuUrHTJjqJMhSTuvAkDCPeBEWJS3M3xtNkRUhbVc5NK3HXnCJPHDrVRnjnAMuHwbNWpMrf4j",
  "key7": "faD2NDR4Mqn6u3j9bYSCwfoHoHxKPRWTpfu9pbb7guG8trnZpNvVzHkMpVNrqXkPtV5eKaXUpwjbkgB5uB3qZM1",
  "key8": "5qhcgehD42AstAb5fWd7XQucMMBfLyUmHRQd6vdzXTAHLiWbZ86z1tu1jS5vZ3BjvjmS2mmPjt6Dg8ykQe2vHoYD",
  "key9": "4Hd2ypQvdpCtuu5iEjgjwcBDN3ZjdNVVKuE5iog39ogbgyb3pFpxiBSU5K1beJ1EKWx68AvQfmqH4FLHUM32n2DW",
  "key10": "3kWR4KLoon4PWGtC3DuFarqmBKDFLwhbq4y9juWrhYawkpEfkWj33Ecid5LgevATUg37MCngKFpoohbzgtsPCg2P",
  "key11": "3TZSCVCyfLJacFqBPe8dU8sTBphnPn5cyywbw2JJz4wYVs5DYvmUDddJq3edKRtGR8Jxd3SLYtFkaJk3PsjTh7iR",
  "key12": "4T5VMKN4JdDJ4NqpHKTPHbA8UFRdqPzDQR6ufzShCmuEovscxLk5bxqWXyPPLN9DSebTWku5MuJFjGvaviJGnfM9",
  "key13": "4SeTgZUGd6pPxQyRD8uLEyWf9NASPzWnxkjuSNXtfdrFZ3WEJbC9FDwdPgpnsFEQpNgkzfEu6Zy1Sc2caKeLa1Ma",
  "key14": "2Kpdb5Atc7wVQYti3wdafEtmuCmAxyx8A15TAZSbnCNxAp1G7vjop2FGLXoPz7fsL3YRvj9yqcauehGV8AnXM6C3",
  "key15": "3gMXhui44nyftxm6ZFyFa7RcMPaj2B7iybftJiVhvK2M34W3umUX1L156XwJkhnYxRhVcomWFyTDpkfzTZ49DRKV",
  "key16": "513habBAeshmQuKjAcwuzWAKfk8YKo6uYpPSF7vcx5RKcxMuTeN4aRdKGYu7ZM18VqS3iHuSQgrY1wZogyYJYr9c",
  "key17": "4DvUgAoNSZydHLfnimSpoVPxkBkHvHFiU7fx1dSMrPAmdMHMpHBJZ1NUUeWegyPp9stmvx2AYYtZqzz9rmYG8Yg5",
  "key18": "4FBsvpCNXUM6PnS4ax5RdKA52gcdq5zdr4RhMk5dPdGVgYBPm99iq2bGQ4t21e4rve5Gx89mt6br4atxkQYBMs26",
  "key19": "r8bi5TeA6v7N2z1843Aa5UWMDxHnsmkx2J4vqPmfryrnsAHhqbZtcYZPkw7WkZq8Y6HXVqMPk9Km6vSdLWnQQNt",
  "key20": "48qYxRYoD1gwvX3KnQ5713tUCp7KL1q1iQMcMnvxPYr9evkkqkEDixbNZXxBTXcqoC5ZUHLtq3RKJYSxhMJLxF4X",
  "key21": "5XAgEfZ3R2REKvWpwm3GQmcPQbCh8Dkg4D6wcS6Zn9i3JUQz5snqRh2BfXE5dautLtfEBYVR4AP77gtzKzN4964C",
  "key22": "3SrKZzEmtFfxfsKvG4g68bvkYL4a3pj1jZsihe4UE1sGm2zNmhT5735Q73i4vepHCbyLVbYJexUpUm4NWyVJ5mUE",
  "key23": "2maNThAYZxopM1ALhum5bpLcXhc2WDtnpp4a9yJ7wGQKW6ZSDQwihJQYU8W8tpfVYbnncuThQ4TYuWvnH2pc5AwD",
  "key24": "3oMduc69HzfWpSV8JN7FcLpDyZxrf6tczgZ2JaK6vUoSeacVQ1B3ktsRJejJ9Zs7o5fz8JLcn47PXT5hQMf6RuiJ",
  "key25": "3b7hnXUKJXhD9ZJ7ccCc2dPtukfZ41fEYATcmUFyNZSMGsrwHTP4fCWNxFmp8L6ovsvLUBRt2vMCTurjFKEwEuf6",
  "key26": "3zNSg2msQVdfdmpEEJ9DSk6XFHdCJUsnSpyJqqJZJsZXVawMw1vfmumgKweycghaXrtoz9H8eRcHvaamKTV5o3P",
  "key27": "2ki6gErw1w1in81EoMTiHxpB8sWVx2rZusuK8u5oHG5L7V3SujhLrPmE48vxvm2Jvrxzoyb3CaAJwbmMxXZzJZLv",
  "key28": "5i5XnGvBj7ZnF8oXpFon2NnyjpEVFyZzgfFTqoN4UgYFsY16Cgx6GQWoKYSZyEE7Fd3FZ151o2sHMqEKjQ7v84GZ",
  "key29": "pATNNWhqHfpMySTTSg9JsF3nVGbSVpvJQ3JecVJtftGGb9HdQELmVC1AdM93TzPE6kPiMgRu2toJKCaquLGqzmg",
  "key30": "3M5UuA5vCAdH4euD26Ep7dGKgLnZXUk2EM1nMrmdCTo69E2WBbUsf3iqxkdLUyEZBtzSRxzvcUTUd1KCsU5RZ5z7",
  "key31": "DtcyE48QgZnPQ7X56YnmiC1XEdArEgrMYuKmuXbssoaiezoiFrQtvZVSF2KmyjHaS5jyvfA1Dwux9BpcvUPZkJT",
  "key32": "4jszC1HVoWSf4KieH5qAUpy3kwxnRWJsWpRpc3Mgm7wKbikz4xN5XhetFVeSa3DMFaPa3FKH6fGSPR4EgRkwpLnH",
  "key33": "3W2dpi5WeUkpDWEMwaT3q3gLf6uCRNSxg5ADPBwP4Xn1NaTva2CBCPiAReDGZk5U8LUHt4s3LkVwk8w4maHFG6QG",
  "key34": "4WDaznhCwgzqSn52wgY1k7wifJsTbw2P8wjHjK8usta1L3z8SRTfDpYQzbM2iVPMwoxiULPfxkxYJ5dMafWSEKaX",
  "key35": "KQfqvVTBjrTDdHTn76WKoBTAGWTNxriKkEXkMsJwz2dj2uNexrEbXgaqtpWaSGWNFGzNhF1ZmqLhHUTc2TqQYpJ",
  "key36": "uDdrQVvemcwPy6JdodsAKFo1mpbGqTZwKbZwR7H6YPfFFv3Ad3UJ6cYfwfjVuUC2wxZVhHdJafJEV97P2PeBt3Z",
  "key37": "MZZz2hKeqfoEHTKVUBJW5LzxeaWZc9A8Mu9sNjTHQEC316sZeP2dA3wYxri9zCngD65gxSoMrXZNujULYJiw2G8",
  "key38": "4eWbZKWSudUdhyVLww9Ug2bgvYw5xMULyypALp4CHg75APZHWsTztKncrxfpdp4hVTbTPW6gC75i2bKxVh96kAQ9",
  "key39": "2rtws9D2wjEThZ3bmpJtJntWZBdh2XD4t2EDxNFfdDWypNnQ9uzz4aDDjsv1UU7sb6MqiHEuuucTNwjdL7UicRLm",
  "key40": "3GnCDkh5dkhejyH8TJTAPFsqowaSsbQRrxo9Wj8AMk7XrTTZdG7kCoz5FYZUXCPV4LwSrtoCtquJmNtFQYDQbYqi",
  "key41": "64DEPshBVMa51XqgVLqQ8NYP7SBJdtUU6UwXWuktV7Q9Bwzc53SFifSFmCesWpVyRtiHrDfG4p7ffCNWiUL5NPL9",
  "key42": "AeXsNxismyZ98xBpYpvVZWXJcNYh1PuWEas3BsFW895c92F3Ehr1CzW4fNzhh99N4hGS1RpQhpR863Bj4QGnd7B",
  "key43": "4DFwsvMZXjxckvBZFDThKTeWyv3bTmSv8ytCJL23EGJXTz89mGZPa55xNpQHVgdpvyj54GJe857cm7SSpVfLRbi4",
  "key44": "3bQrKGnscLkNoVQGCHmsjiXKUmyrXGq2zjMEEgbBGNB2KhEsFL2CdVMfTowU2j1dfFyrBuxrXt6Hp6kL86r7jsNd",
  "key45": "2szWuLKJMHhqdQgSRTBFpLBHiYimjFiz3JaEqVPdHBCeWQ8HkUDsYzCtvAKGAGr5KALkoVosAWJn5aAr5a46R6wa",
  "key46": "2XVjkXFLP4UjvwerU5UpfChW9fxkiWVK9wsH5MVALVUEtHnuC2aVieinnKe9VPGrWM2MEJdkWL2x8n7VTsLyu3uu",
  "key47": "3wkF7NEpjvGnbHiR5E3EzUd98QrQD2kUKR3zM9KV2vqqMzkwQFGDARogbPduDZXUoXSnqyDazuhjPCi4rt7FKHKM",
  "key48": "2ZivofWjA89Wj9YmemUr5pxFxrJodWiRJgr98dTHWACg5JJdwHEr1DEQcQAgg25cWKcvhZTJG1jKocmpHqEGnDzH",
  "key49": "5Py3AToWo2BCCwtVY1cnyov4w9Hnwh4GXfqEcKo7cMyS28SLP8SCP24MpMU8cDX2p3FnzB4mzWyFPv8YQRQji8xN"
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
