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
    "4MhNCwZQbLuHpUZqwScMxhig79f9dNsH6jDWHK2EuuQRNymdA2MiEPdNRcVSBuYGAQAZm6XEkC9Q2dZtjwVwZoe5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p5fY4FzidRwGEAUjTy7pT5YeUCYGNwKZcCGgbiKRcStYAeBiS4zvM9juKV7qePgwyGc9Zxh7DoVP26HodLLPxAb",
  "key1": "4hSdTbc13fm8DPVGWzhAz9oPaqdc69oXY6tJ16pf4rpuPQUGM2gDuMVUA9k83YNXg5vo2azzip2QnRX791mRFb8Z",
  "key2": "4q41TrKRkeD44bHj8eeXKyVK7faudPG95EFiw4sNPX32p9Hvwix9rT8NqgtxK7iv9ETp3Gej3zXB9e3ha1KNG9oY",
  "key3": "2wp67EGooUZr37fRCnQ9Aif8aCngh8mEQJDyqaYuG9zMs4HRUfyvojF1dbMry42n71y6gupd3ZcsBHRoBEdG2WfV",
  "key4": "3KghQfLPG1xJjRBF8xMGwgAUYCgm66NgsL2gfkD1XhtfwuSNptDWEDZmn7KgaFwcULbTtKBrx2KFH3GoLWYT2Cqi",
  "key5": "PWaXFBhW195wuRyfWCXeeqk4qE1681qAFkC8reWzLuNKXwtc7R7BHzToKt1k2tsVBAJq2QwG2BpAqTYrUBktofr",
  "key6": "5bLFBhWHFPPGEKHPqRoG2i6qAAT7HwiwqWkCqtHetiqNh1tqqpHfD7U6BWN1j78oCwDVeb3mxjJs5EZ4jHWWCnZU",
  "key7": "2jvajBxt8fNy1US873ySgT63SgDQcZtskK9AaBxq4C7WTocR2DgeRgNkhUsdcmfJ8CMBJcEyMjtLaGXyLwDvaEMz",
  "key8": "2Kvcb4uE87it686gtqQVUBGA4GfdZgJiFaUAHmTk2Wa8tqk87PRUvRoM6ZR6xfPoiJWSvSGt1LqvPqLakQNgMk2o",
  "key9": "5gFZDyKCdvBxHAy8wanq2XZ1oEnYA9JRuEnJxsMg3YFXinxVGt2rygECvDmYFiMFhapnw5iJdaJzZas7kzV1MpkU",
  "key10": "25QyckX6PH8Jk3qTe75HYpq3DWpLLLFSDvaG9MazGvVfVpG6ASCGa8Hrfd9G6Mt47FMrrPfnfWRn2unpCqNJ6KFr",
  "key11": "5xW1zm4YCjXNJevPCYwToU7kaNypfguvdjnRrQ9aw1Mt26sckQvmeVaUBuitnhcsTugXN9VHB1chydgKzga8FRij",
  "key12": "M6fcjajpdpbMcygbGEqaK6mAkSTyc8kdS21P4qedJgjSYPLwJyKoF7d5aDda6F5X1bXBhnS1ko7kwPAqy3NAVkT",
  "key13": "4uowdBmCJEk7u4DfkeEjb2P3ka64mMq97KeaL59QoawKXycLcTCqpQLzEpLToVwHC5s5bPnWoDMdEm94XFoeX3Ye",
  "key14": "2rwK8MpsFwmEz9Px1XgNXwFe7xGALE4iHWE5Hm7JfhgnfQTUPJmSHVzhFZH4fPMXvvXEgNfqEBzhxHurAdGnnHfy",
  "key15": "5CgpWJvtKSVeqdx7evHS82MHGq7QCJLcLd9Ln82ft3SGz5SFh8dPTWGKbJLxMLA4yESF3kLzN9JTXvod7e3Hhy7G",
  "key16": "3DrpxFMRyWwKsVnZVa7tci6MjV7bP3rYRXYJy1ybekQobQqcbbuPYEmrGrhzA2Vp8AqSihVQZeCHVQP5PjqXKgJ2",
  "key17": "3kvtr4NZpkWcGWAAFyN6NeJpmdbabG8Dn4C4pwg6naa8pi2sRneaaMSfp82tfYhLp8gwheCvQoLJkhquWZADnKmT",
  "key18": "3DNcJvDwthaomAtovBVsLdKQ1nF3jv2bpampX2dV5SszAazhKKwcVePtztaTzSueoMLBqAzSC7kZmy7Uxx45BWv7",
  "key19": "5Dgdqy7kzYdFtaqFukwc7xDCLz6kjBecdubu6rt6KSz9roJscevNjiKoN2RmwfvLLhcRsHQXy8pV6c6avPToaD4Y",
  "key20": "5bvmxXt9ty1uaT8UkezcB7oMd6X2SYSJkSFbG9TuNQifpSBZsMgWthxcrNmUzVhrP958xFjK4FK2sNHoZt75uQJw",
  "key21": "3REDbyZA2BWKHUNdtUrBXw2Z16DEBTx8Cf3uFibTmhNx3ugkhv1R9T47fUfAW5kJzWQygL2H3aYpMRvZkPX1Awqp",
  "key22": "BTzL8gYnMeeidEVi96B9mnnBoykJhbVDrtEr8n4YGFrhBU6bSzv6jLfEv6DQV6GXhdS7cYnU6EMHQKR9k3DHwLy",
  "key23": "3uiR4K27Mv8FpC5da2PuA2ZtmidCY2ZDvH4sc1Te6VNUNv27Km6fjmL3qBngUTBA7JtswRoXt7wbSCGCkZWfyDy7",
  "key24": "DCtstu2THX8jfhYv2pUkXUVSBQv4rVdstEHQviwqCmPjeKpMCg4CCJ5CFMCCT7gn2jgoFr3nyTKVM4X4vTnxrMf",
  "key25": "3hE6yf33F8nnyvYv45q8bbYBGnoczuPiE52UQ7FKMtigibfk1JYSBi22VpiUkfeaBuSnv7Wkvs9D8RbStHu7URS8",
  "key26": "65cdcrfKzuKSwesiXZho47WqGbs8WTRXNvBt2swobHozaPVgRYn9fLoAYTjM1qxBGgaAVEE9XrgLeD7K3DkxsVbS",
  "key27": "3f2VutMmTBMepkd6mKR8YwEdkLRDzHGGViktGJYPgeUipT5QuXAujshSGsgZ5pVmQvELm1Wof3qPUZZCq3WhUjP1",
  "key28": "4fLgEKH9pshq5DBB1YfoyXBz6ft3Pk3E2RSYguFKMMjXJHWB3nCxqk5b6AcFKQWvu3DRgNYmj8czyXj7VH3qSvF1",
  "key29": "2whVMfTxZjvm1xB4VrLD33rAekUGDqhQCiDg2h96MCThcX1R99k53EcGyts15CWBsyPZo26oMC5ti4pDPA7Cezcu",
  "key30": "5SnWYm41iGa8anwNWdxJ9MYv1Z5BEeSfeZTZgg2NAVszgCDKF6h33KHcSc7TwXUAgxf9toV4PXTKpatwb52AZTe4",
  "key31": "2xNnVkXfBmoLFXCKAwcs63AT6WZMSitcR9SpXXf2tijojjQyNrnBd1P2V8bNcKZWBeiCbMKgYxLhMm7FjWhn1dug",
  "key32": "4ePHrbhAiRv3bN8kivTYG81J9rA5RKvB2Rhq4a25kAQ7PY3JBYqgiHLhhus9TsccJayZ3v3myX4QGLbKTwrHXotS",
  "key33": "5S1xJLKPA5upfRUfUDmKajSg1bqsQ7Hx47DddwDpVNbSgZk8XzbvJMPPKBS9xyJTuysEgLJMW17DAJHjRiEpt8bu",
  "key34": "2SBLC5gfy5yUfNRJgNyVgx7wgi2Z6h5yCPobhgsWxrQ5MPJGxhF1d9croUoD8ykkVCmUnfsxxSS3PgQiBurH3nCU",
  "key35": "9y34D1MEtzHEEdoDcTwm6H97YfB4UjcSX8yP6rccNQrEGDCfpVcHfP9FDHDeh4VTJvW3f2G6e28sMGxV7yckWdv",
  "key36": "FsSU2pSwRFVKSvQ79rQM9bANLiqvW1QPZQ19Pq3AqUQqCZZSA5EGWeCy8rdoaMN3vzX8SUKkadwFBf1u7NcGuse",
  "key37": "44eGsPWuQ5BDSX5nDScv4SM6NrTzkBg9qTCXThG6DJEowPwpAG8gfu65qRfhVThSRqoSpReNXa3KWmFtisEkJgX",
  "key38": "525aj67BzxCz9ERYgAFktWoiqAFBG6hxGRgvph3oBTrhnoZFKNE3LvUkf9J3DQbrdd5E7R3VFBWhx49ziTcAaAbP",
  "key39": "2wpSSBriKMWK4VuTAcPNne9XN4FiTKFFh7S8jzvmQapteNYtYqvF1pb6KLxuhD488mQssCVC1m25dqeJKxJhiNhm",
  "key40": "28neAAMQN64vjpbbCFEWDtrrQ9hXwj8Y1LCq1iG7oB7YxeNqJyFZmqDJnTn9xYq1sJ9e8SsgCs3kRkxJgcSoNxnB",
  "key41": "35xmf54PSAq51Sq7SfRLBXPP4b9XRsM1YLbNdfAQ96b4XdBdC54hFReQXDprjvq1nrVQoqPubGaAzhTeo5s3S4sZ",
  "key42": "3WGcSodZkD98vCHcnP9LnUUrAiJSHJVHGr6FTU86ZK3zcEaN3C4mJoLLvCMV83vJq8qxqFMUJVEdz8Cgt5YiXaY9",
  "key43": "3KYuzw8BrTquVuqFAZiaNKdCaFZJXn3PU31EAqxozjdmB3KUePHFfJXYJxLPej7SkCQ5qVKhGkAMTeQtjpLaXtt3",
  "key44": "37VQoHoJTg9NY5Xf8adC765wjLDaSp1gjxos3J4GUHbzN1EYoCeNBKne8U8cfmZT577AM5LgMmYXPr2eYcB1XXu1"
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
