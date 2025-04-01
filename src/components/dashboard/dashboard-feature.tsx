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
    "6yqWxFEU3DAmP5iCEwiuqfP3B93h3z7r5dsboVvCmhbSC5YYvnjvxM8KLGn2AWvyuFnAEhpvQ1sMxk1znUa8QFd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5138RqUDVSdPaDR8okSbK8QZnDQCpTcnkDeWWG5T1cVGYFcP5tPj2T1hF2mDNsnPy68fE5Ux78gmAabHW7YWZsow",
  "key1": "2NPK4CFt9ZhmYnude5VeUa6AdRsgZW2CyMdBWzD6qHVcVZa2xV58fatAvf7hCM5L8LU8tXQnenkBkMxBy9Hwf4sB",
  "key2": "3CxwuKLEvDoXxbb4YJnzo1Q5dPQTDdULShu7n1bpuW7Ky5VB7mMzE5KmJwf9ckXNivYFyZjayYjDHZNdEdxEFVEY",
  "key3": "33edbuJhBzJEqassU5sph97BvdoHfm8y3jB2uf79EuRQQCMe39czwThgeNhzr3K3abza8foCDQaCCiMPHG6sq8xK",
  "key4": "5GgAYcvxEMhittuotPUFH2vsNCHss58oeka8ummdDi1vP6yaEKRsCkCkUEjspuxRA8sfP4tKQGKYnsUb6oZdk8mq",
  "key5": "cYrpu7hVR4LYbdfLUBjzUZYsAvkVRs5aK8LVBTqsaBDi3w45tYuZYcc8P4uJN5XD7jm6HJKMJ7UbsxApZrX7jaW",
  "key6": "3bwjMuZ8pn7iWM3KRnh4mWAk7BiFf2xc1mxWHA8YqniHd158euats3Q4zR1HiwQE2bpn6LmMvUrfDSuz7qV3emUX",
  "key7": "4o43rw2Ff2HebYbPxDGLDm5oHp2zEPPULYG4BE6TX9QassPfzz9dhy12NaJryztjijZugXdRcK5ESFLkS5FKKuvy",
  "key8": "3S4Wqo8dmTRMfLAdTqXZSUF4owtobwU5nFRiES7JqFiMTA5DFrLjLZ5YAj5kYaVatwvQZDUR6TVjzpiV6cAHsKGH",
  "key9": "3L14NXtin47BpVBpcKCriPpgLXw9ZK5e1rg6DWdvsJLyU21uLEUD8t1qYnieVQ23suxVArcuqeH2JQPaXCL1k287",
  "key10": "5JdnZk5Jvsrk7UCg7vBJxLcxJJsFsegMd5weSQPFaEsSNwToYw5fRzJkjUihuKf4AroF2dUR4y7bp9yGNWi5vemn",
  "key11": "27rEZ2YK6jYq4tyRxmdwRi4Q2Q4BDwYCyXm1RXtJUY9VLuupiTdWfWF5q4co14b1bHCtWvh29qgdG1TuWZzJKcaR",
  "key12": "3Y5vsVUweT8SMGgymvTJxPMdJ6iGikePSo7Dy5KcrVG6EBerXPZ5zpNKPEo1GRDnoUsqSbE4necBhTDcrTTCLdfQ",
  "key13": "MXE5aDCgZXVbS5zo4UfFdBhsyo3MzKSBt26sb1Fe6jCkkfj2kFpaSxi5v3hTZU2RVRwpkGDD3yxM4PLcmTzNYCx",
  "key14": "8Tqft1W2Yq6f75arW1LAmsH6FBSSMCciHvA32kDMZeLbGLusptgGuUPLouydKpYSmf9HdPivPv2NWF6adbryRyg",
  "key15": "5J5byaCaLanofJXgRp1JbifNJQKx8qvbVKDTNdzj83opbdt1FXzLNAMwMJUpLHXz6rcDtMUjqzxVFtnXt5WGKvag",
  "key16": "2ZJVSVqXQMegBmJUM2knGHGWQgkxkHmtVWXu95xGGYfSznZV5k9AJLPEf3SyqbdTezHw2qJiKdCSekupX7Tm6Y2q",
  "key17": "5Mwywm1t2R6gU1eJpUXoeny4uNHwEcT8gNX7riaB99FgbjQdtTHkURW4ybJyVYKppSHzvcE41vG4zzGCHhR6w12Q",
  "key18": "22aZFZcEiw5rTEiCdF8BHyy3coYryP4GtHpDScYJbywtfMmV5rL7Lx4McWuuX8WqPfy5j3Yu3fih613M265xNmnn",
  "key19": "3S2frSwAL4xvAZKreept3xtaTUSfBKzHMiEM9sT4fGZFPq9No14NTq1GGMdG4KuuS7LL9MGCGasAP8GtfgMFzKQD",
  "key20": "28HgWn3jowtvSq85fTFHGWGXytGKavAinemwQKxqcp9HUW5SUkLHSAUiDuwAmJWzCrRcudRiWgo29uBQSuUeyxmk",
  "key21": "bGfzTTofjfTWxW1BbeX5YNhkdtgToSUpiCb7GUWyK7fJ7NRRPuVQyVmYvU56iGEWH1ggdJ5L26JX56JbPHLQWEk",
  "key22": "4A17ezqHEpL6EcSpR4A1XrdteEo9auxcqsHxc9q4BCbARBVrGjaQwGC6AwGkY8G8rm6ukQG3hK5uAuJQJwSTeVhY",
  "key23": "2r7o1STYy5y1aV6gG4hXdtjY8BmdkS2XBt1CxfxAYtcsBixM5yHQgULLZ51nAToNSumwYiDYh5Pcg1idqzBJmkmc",
  "key24": "XPMytAVwSU6xWobVGGskJU8Mg8fL94kUbYf3aunrmRDGDBMKcT7ucmFYHi5DK9DcWrekd8p3gKhtExTxvGwS2Cc",
  "key25": "62WPCx2vPk93fYsCawD6f67DauYkzVQqanotxAsAMznEPkW74UgAtwXo84d93yMVf97ruLwoFgpP4wTZr9oeeGgf",
  "key26": "1KpE8Yv1RCLyhU1XCnYdSCRJPYB3e3TsQY2dYoNix3pMEYnV9Vm4krJdmAgEuV5M73QXM7j9Rf1C6mCVbJiVkpL",
  "key27": "47nHxD8SdQiaMJ18cWu9nivVdHga9HtTKFvB89r52jMctbo5nKoFytvkPzPfJd54eQQE5wQYgJSRj9Y67APpxHfM",
  "key28": "5sqRerT6pajFU7W9EQTM18sv1XxdyqPJxTw1XuBcbx2NVwwEWTauGgiB6c8HDEhKppoFkgXWYguR4btETbx8UQoD",
  "key29": "39taCXe2p3d3z1a4YBxmkXWfen31q2f4FdfFAynh6eW36PUiMubkqXTAKTmwg78bTVHV2nTrh3w7w7ffnJqkREuH",
  "key30": "5YAPYRGuGwT1ZdVLxF2A2t25Z7KGfE2i7wgYXF8iiKkcbhCU537aya7Wms3TTuRacE2neAZjrHztzLNF1GGyYvCA",
  "key31": "7DNUTsVJ4HEsz4nLRK8AN1fPUHFikQ1iZPp1jQ8Zcw9jKi4FZQgDGxamCeAoEfG8Hb99QGotVTpcQiMpPm8tZcd",
  "key32": "5pjhNHmUm839icFXejb7uAeGJTAM3U2USgbQ9YhcvcKfrLEM7voAzwpHh68H7gkbG4uEWRjQgsh1apoQzwc8zxs5",
  "key33": "4cTUx6BwmotRgs5EFPNrK233QP1pHtFLhJ6HcYhthEmz5yBLr91E42xR6DoqmVdR8FatyejDaBw1sQGmy2PmYZqd",
  "key34": "3uwdRiMUkWx75TusTcGpatZDpaBNvB2LxqRUoxCUofdtAgTEFVz9cKXzc5zZuwqZCSQxMK3jaJP15QHbbVPyvKrR",
  "key35": "4Fm6sPrBojNHLTd2XrjKNjoG62xsp58J3wrEvkfF1tHpagd8EBrut6qAqtjzmKURPN9NNMCe2o9epRejqha2ZbmV",
  "key36": "5v4jXSwyDtPB9UoYw1hUkj3W79ighkTTpjbHKmfQSHGNgnGpGHfVV6r4mXUK2Ux7taHGwWT5sJFbQ8Gqh3yqsFEz",
  "key37": "2Pz5dbgpTakaobqHs4PfQBhX4cm5M5NiDztG66avCNvypxT29NCHXENP2Xhpc3uJe2tqW7ypdn4aSn2MLXab4fXM",
  "key38": "52c3pdJX7KXsKLTyP5oaGciqtNCu25EYNdK5NV24bgH2bDRR8Y4gzyhJhRKKayGoS7Lhjaoej5fp4X56c9QJuF7o",
  "key39": "3u4eynhKRrZw1Ukifedk8Gvq1uCbVjRCMMpHw1yP4AiQBMhDMeBfxqyfkm8GupiKiphLhe5XC6giWPTR4832Xess",
  "key40": "3dV7mTf7AXX8LhS3a6RE9RvvxMBYnAVn45ihP8wMo5bxJoZ4SNs9jfxPhGdM23zpsdKA7URAmvyNfg6TXQQ1S3fY",
  "key41": "2VrWVLG9qYhZSrfKjZmdDzebPWkjoi2d9apSTtP76rAt84s5XNVSTZoPnNC4TaWNTMwKwoySuVzFmSRMRvoZxFRm",
  "key42": "2tDzwhyZV6sqxD5tk44C6dsNL1WdthtADjKCVMLoQuDZEuyjPcC1cUpZYWWpLKHjMu5p8u5GJpTxVoBD8NanGZ1o",
  "key43": "3HjrwmYCRdMF2kTY7Z346vMRD1y2MiLMRkRKUeFnJjdF5BxSUCzyqbMbgVkhHESm2DjWLGQtD6yWjbEodbPSpbTE"
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
