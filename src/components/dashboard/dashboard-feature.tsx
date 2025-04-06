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
    "6mk9SPSCgmT7cmjMVoWRTAm5TCWBb7eLCyVVZCkpqVTNAGnUharVSYJZUd6P9QRXKb8xUfGfPmMN1x2p6xNcBVs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vhcd4h2DANeWPLcYSsCkcxA5yZDiaD7Kqr9rsUBHrzHEybPgEmnMBakXNPfLWyynbpDdafECvba1P1UewkH1uf8",
  "key1": "34WdYpSrBGunDyYgaAv8Gy15EfW9aqWmB14cChxC3GiZsoCZ6Jk5Jq5RkuU3Wcre1nWN1DGjgkQw9TtqGBQPDzp1",
  "key2": "W2qgqu5L1N49XUh4BHebeMdtzxPikugmUD65Z577VvPxyP2xzAtexU7oDSM1wFbiJpZdxVTg69o1TczhaQyAfDE",
  "key3": "45bZ71W9ko61ekmV6BouVJwtcsvoinUPyKZJdhKquwnsY5Lg7aFtEYFVcHCztr8RVYvr3bQZjEQBS8TSbaLSvJ5x",
  "key4": "5VvbvHGdEHuV5WPyqedEtDWyvmdP3KxMvwZzHuoZ6jcgLs6AQz3YHaznQGA9vqK7ePC3vswZPr5F4hv1TE7pVcJU",
  "key5": "5UqywVxnbt5cjRrEqYQFxuqFzCvRhUURckLqbGMHcrv9n7zTFtWigAiadRJhf63qc9zu9ghsfWpdVAz9vj7nrt7",
  "key6": "3FxRz2Ns8ekRWscxQJP7cdZiUi9bTU9fDEHRtBBcseFjkJoHpuJsDDvJj5cLV4X9vLojQ7G8UDZLjDTWyU2nornc",
  "key7": "3Nrdg95T2DPX1VRnD7rPdTXHqCsdZ5TesyYzcYmPiwvfX8UeY6ikzShLDWCHjUub2o3aJCNjsJ583ZZtKpxUSuxz",
  "key8": "3eyLoWkSCSHDbQj5zM49hcsKwcoCVPVUE3Ks77A9sqJzDacCB2KuuFjkfeEeLDnWHrLajXcu5D7gcTmU7WW6GtxZ",
  "key9": "5EyiV9wWGrycq6C2p83dWDqximzX2RU2YU82TDVkjtV89CJwEXH9xXzTqFtZZTAFoeCGLh96EGEX96iBCabHXUrc",
  "key10": "bNnNEbpxxbAFJMLeg865Q7DKrWchQo9sfdDSTymxCApU6rerrnxJWWe7cPNTDfNNUJeJXLcxrmpzUvEmLBvG95t",
  "key11": "4ZJzjcFEh1iZiKqjyu1AnA9FpsK8fJR9WnAPwBtZd46KrsGLacXZgwdpGfS69yATWS1EZ2Ep1tF2Yue1fwrAfYZr",
  "key12": "BrwP2zoPj8dxTbtPqRdC3vxb5AgfVDyP4EwF7ATpFiqk1DEK61w2FYCoPSHTy3wJnNUcuRoP918WsQzedQ9kkfK",
  "key13": "41njbGPUXBWkxeZ76QCKP3P8pUyF5QydEFHA1fSSxQSmdBk2BE4SZw1ZmycYQWFSNKACoePp9nGhp4SGtnMXPGgb",
  "key14": "2n6Scd7UGSn6anbE9PJbvxiSfh2x9tSy8LYhEp8mMYm2SE48DTyi2bxaigarVLYzuehK1j1tubiF93AxiU6b99XP",
  "key15": "4rqYVBkXiQWVhqmYvR64UUvLEPwG5cW1ACPMsE4kTFfjZ7kLGbWG4To6w11S2rD8ZqdNNSuEuc7i5F1HxuAnkeoS",
  "key16": "3KCXEo9cKCKCmeQX4PNazkneVziCTEucUZQ8jjgEKDbqZbhWG2NB9fu4Nu63BJQfSEj3cJenRsGTP1H1iUoEuuHz",
  "key17": "3voxMzYaUKnZPgtHPUb9embTdrzJzyCYx4e1YRfDTm2RMK6VXBnvo3Ubo2U57EA46LpiRWabMCv54JF9G974K4ok",
  "key18": "4GowaW8i5LTvL1r53vH1gkm69BMpdE7xz7SNff61o1ccKZKitj8Z5iposNCyc5EYfhRDmXbVzMfS4vD32kuzAych",
  "key19": "2vS67ydU81MSEo86r51D9XQNwakBKUNyHqNoF46V9SCcNPFDd6jG76tkUWnzeKt1LQx49aMMd95fauNsPq8CUB51",
  "key20": "9mbJifTuZyyv49YYJK1MRy5faAimMcxe6gkCa5ThrfLjVYb8FCWzkeVKBmSF2UYGzDCk9TjbgxgWVUDtSrkmbzv",
  "key21": "48K8MjD2bCBHf3U5M5HHvSWtBwYhU95k9ro2abBvXQiwWR7vN6PqA5iYEj2L6SrzXLQyVu9QCs3ugLAcpMv4ok2j",
  "key22": "2Dk7umv855EqRo6N7a2m1aG343HxAXNBVSeE91ci1HknQXHFnDo8pCeDw1X8fFTEpDCbxsBoC71QQTQ8UdtSNea7",
  "key23": "CxRw4mm8ebMKWCPkYGpfr9PqWFaEmFvUBKWTSMMhagAZfHcnb9sUmyhM3TjV7J9hAVTDXfYR1GMD6CP4sDow93V",
  "key24": "591FfQk8hqxvKk129zeg73otntMFraftcpd2FBg3j7RXzVkC4WsKzk54BDPyVzJqTCRCYsBokYyMKW6yTTT6ZYMY",
  "key25": "2m11yVcjNrhPMSB7HtLp37r3rB6iQNW2ua3QHRHT7TBEq2WePuVLY1dsHx4gcfnhm34eAsV8Vky8o2jnHe1GrD6X",
  "key26": "dCdXeXHZoXewnyPnxHCdyDunRq8BQLsYxPr11KWGhHfngKrZ4FLzRgNswZzhZn3qfyax6DL26Siqg3g8t1q2QyF",
  "key27": "3ujySZvTZvwR4gbN5FxLPaoJAhgPCPE8sn7G3BxuheALEoyxXmB43PSVpgMaqs6KEqt1JyS3mBSFB6ACALt5w3LD",
  "key28": "491kncFRBA7B5zhAozYUBzYSAxPY7osmfoBoTRWmtTc985GPf5o9woAaNryLWUM5SwHu3swythRRfEKSufpvhBnr",
  "key29": "4dPjmUoGTvqzz77sPP8nX7jfNxs87m883KKmysvsVxKJ78z61ATy7JCUU55oC1uagC5Sgfo6EhfMK5sGiUJfCNNC",
  "key30": "4a1zfV6KFMqiMRKYmgz9L5dVxdgUfwj6novG1wq1tJmz3pyC3vhtd5gDFotWfto78v5qPSd3iYSAK2Bj2NmGUken",
  "key31": "3FQbzMQaBjyH3FVeH8sDHwkuszh8PvQtNFa6CgCmX3mc6QLHcK944Ux8XZ5wTZuoSsM3tTqf6XLhoYiQLiSjuqEB",
  "key32": "26ZxWcZdQdrMVFvR6u5wE1EHuy9j38A8kJ7zDcpcbce79GbMk8Trsu1RG98Fu8BcV6CK2v7bCi13e6xB3ZBSoQRw",
  "key33": "2JhcTgLzy7bbeevxUk1Lgd2Nn4bP8f1WL7d84ZaeE4szSGoDcFUj4y7zYygH82c3BSD46vzy1t1cB5WAvEb4M5Gz",
  "key34": "5KSEi4zajq7kfUBnuJSdfnGs3xEGpencHPouWgRqy1qnDpRtsBXMia35MKe8ADmAmuRnt6VVXvv6H5UCH6y6GABu",
  "key35": "2LKES3rLeCwZy7KPPiYrKaaPTEy9hZ6bmatqYLAaNLUYhSX7YKBvNFzLv1t9Fkt7AJr38AWPGtMnDcKCJ1JBdvLx",
  "key36": "4JrCT7SzdQhWsxXR8ypSv44Q65QAU1XrZpsenxXAk6QwCZyuGhbfmftnCEroFPrs34voo8TezjFr763sHCNnxwba",
  "key37": "2iEz8oP5gyK9sj8vNAuBySQRBJwU5GE2VWzmir8aDQjo2P6toHw7JUWVMbG2mVUiwq9vVg7RVW4J7juidkHdEzba",
  "key38": "5E8KQJpCwEDb1y6mY7EPfgD2BuSErDBLQxAqccAhCHieviiqVSnQrN25pH9brVfTczBZZtbWr9jEv6XfJXnhWAWx",
  "key39": "55zzbFDHp1i6XMtY2rpyv44mBGKuFzX2LmEsqc9NZ9yBE3z3mnu9saBaTNMAz4PSQwsWe3in77wHXsmvx69gSVka"
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
