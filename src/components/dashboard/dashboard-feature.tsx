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
    "2hP5rotT7kbxuFpuDbJNSvEZLYYBDGUErD5wLELzg2aRUgBvVzuj6axEmtjbk6yUkq9JyzQBXTPSzJRQSGYAyKgC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29hrpPH3dikCipo8Arv3qtu4q6R64KgY5o8gf9r9Wui1STWJVk91oDt8zBMXMVDSkhnrumHGxZvwuLxvLbMLCgRN",
  "key1": "NcQ8id3qJRidxWzU5iDVapcMHSHGaV5vr4qZ9oQJuJhGdu925nsvCmzKXUNT9Rpk34im66fia6nUDgkcaTwNeXb",
  "key2": "r2dfTesVYMAsXiriDnXXvYehKcW3KoSKuRjuZ1peaXj6z9hPurfxMiWSt9qkWAS4qAuwU4m5A7JagfvDLzyPpYc",
  "key3": "3Q1DY2P6pVE6MRaMXqd6yESqaqgDwgdnQzdKKtJbybaxY72F9gHUjaFD746qc4E1T9QaCzdvu6pRFVjFKhLPnQny",
  "key4": "2NrMrA5fdMnrcDMAN6D1sxUNRbumHdh4Q3scbRhiofpYdGTzm3XxLW1yCrGc8PnFx7tn4Aa6xMzqeXK5fDnFktyB",
  "key5": "2wJQvFWpP34TKBwz2MztDcNBa5ajW3BZyFjMETWEyeH1uDjqnM7eX1rnsBoy42u8sSMyEKqQXrj3g7P6oW3KyRA8",
  "key6": "BeFKhoTjRuRF6t35QUfqCtEpgr7hNAc4TLniZ8tFSQc25rB1i8w5139scf5LYdA2aP2cz3RDRgHf9uTrN4wVdxv",
  "key7": "4Me1gwz88getc7RF8ZpYwKs34zRDTch565EKevpz2ykgvTo4DcdnV4qnbL34UKMWPJpWQW1BVkscJtyebbKwsskk",
  "key8": "2KSQwvo8cNLgQM7fNvvvzt34q4cZiBkHj1dQU8P1KDDyymjrNvaZaDwVzTSinXFYA5tEFEvjepweyYkrohx2CGbA",
  "key9": "5BMq4nnT1BcBgzh9UvcyTYSVbjcgma6C2RSPvkhhnzhB8tzSMryNfQW4fccretSpFoi72wEXTq8LGkXchYxgcdKR",
  "key10": "4a3gjb9tefB4FMubXxnbPpnJptaXw2RyBG7B2xEXBfpjgcLwhoxCTBEfjBRgdx5Q5yHjh7qgUWD7DrFoJ8diUFaZ",
  "key11": "4q6gmif5YRdSdWsPgwm9NUQV4e8axJwXBfoyoiGrtEK8YEUvRUzx7pL5EHaQYn96e3YD3FGy2PTzUUk3XBehj4Nb",
  "key12": "3i8m1AAxX79ppzyH4gaNjrZP94seWJTGRhLEAsqdVo7Co5SK2cPgRXcXHuPiVSRkUatDdokcEyf28n5CXRK4fVMG",
  "key13": "4vmdcPtKQacPM1qPLKKof6FiHpuQjS1VD79pWrk3WnmB9tN3FZRZ5uf8nv6hANPzr5hbYeiFJM2jjSMS3HmT8rv8",
  "key14": "25EPQHGpSYxBjrZEnZeBUcJadiSh8qoys9dPUcLJ84B7c3dYhqkCxvasNQQmJdAXeKEZajbx6apsEjfM7puftWGs",
  "key15": "5y79YYAX1V7BtEaaDedFMJpddevj5YGUP5ohob8erJZp3oBpQTgA7QNUC83k6rUnvJw5bZyGwph1VLZYPzfSbwRC",
  "key16": "5zW7k7rC8XSjBmMwweNyx7HbYEz8pXgok2SE4UdeMRPQAa3syMt1ZJwqCUigSQwbyQcveEVu2jgXQja5bx2iBRAU",
  "key17": "2joYCr3CkTzPiHHDmhTHbwNr9ZpJEi6Q2zGNjdjTD9dxkpbF39uZSqcgvr2WQk5i8BigaeEfDcEQVEEPuUBMeWjT",
  "key18": "243oVtcPftcYf2gXCPaz6QRqbCd7sj6FmeP6pE7wGB7g6bx6smmsVwGDRAZvUxkxUyTfaAZqh69PEMDp885rjKhS",
  "key19": "5mzXTuzCffvF9RTS8BVUEzsB4t2JGxLa6q4ahTuEJTtnCX2aR1Miz4kfce1fRaPiN9iXSpoSerDiw3Xh6Ha1PiUM",
  "key20": "Kjz3fCvADHSHKN3CbexVbAsjLx6Ci3R7uyfQYmFcffrKNYNAGJAYFwi2vsvZ9w8WLYzAmWikLcVBJhyY5BGm9tw",
  "key21": "3LKe8P4qDcVsrD3JcwsN4ZagEbpuoN2pRPCNyw7HdCypwgjcAJopssLUaYjGdrzacCVcP34UCb6VKXv3NHfcYnyH",
  "key22": "5EHJWUvg21ZxySBaDGFpSugkL82DeCwmNdHTqR7fJQyApTD4qs78ReePNJteHjNSNyxLXr3u9T59zNDvTeDmZQVC",
  "key23": "4vqT3uJH68KDWJ3ramuSYP5QGk63AnaJKavGtJbp8QToLXnXA58ekQgji3YCyoaMgmPDZ4JiTotcbukcYqfsqo8B",
  "key24": "33qqyy4YCsagKNJbff8znujnfA17HDD3JdTuEmLFn7kZgiqyJTCymSR4a7ucKLfkCt6gjTzhSsPjCrNTzfZgGrZf",
  "key25": "3Bo1pLYx2unvsznz3Fh5Bj9b9fzZmiJzGkGhvEQmwd7ffmxxNZjUsNsgUiCQUwR8J7BcVHKdcrsLAAxves5j9jMT",
  "key26": "eMo3dCrzuq3N5jq9VLRDQHJ54x4NU3yowTgo1FXHJLamEE86NfaoheCDM6LvjDbSQ8ZM19GJRoGnYLiC5jrMfhA",
  "key27": "4vp7mSmnz7QquRydj34AfeJu5aYeGaJrc6oVQHRtbLEYdfApZYehGZ6orUCeKdBqp9UsDDL83p3fqqF9Rx2dzhoA",
  "key28": "4M7E2d94D91b6ZMNnPVnNbR1c21BUcZd1EkkyPfGf854sNw5ZiwuyBjVF5FuWS42ytUts6oQQhJ7bHcoStFsvJb3",
  "key29": "ABVRRRHRykoMRRTSk8sZXv7N9GKHpCvDNUrCg6sbCjC3pXXaXFeSsw8G1zyhYQFDbaiWgRnJbVQcFqYJ1mAupco",
  "key30": "36HUYFZSSWwqcCikytdsWMyhwjHpmiEydh4Kj1vkEokgFpaN2SPMbMWKvJtQ7ny9WK1xpaAsseCWRVkbRoTb6peC",
  "key31": "XyBFjZwJjucn2KrzzAFVcrbzsS3RL6iZuvopwMowCxrjZzjK1Uv1PnUntgdBUHfxcSaLWBLCFU4aVJSBYd16QA2",
  "key32": "MCseqJ42D2WtYnbLsCcR2uwdB9tdCjTeHrEfWr7NoS6SPvhbChmDREJdWevojMH21oke1d3d7zqabMSgLiLGuUB",
  "key33": "2XgFph4jpdJSaBquP1xfbDdCrmjt1dcrSSMNiMwgCwYHxVZRsP8v96nRLk7yu1WfhLGWB2qfQ1HssvhFex6UkWcu",
  "key34": "2tkxKv8b3zboAyjScKNWyMnLAHEJa1GSiixffQC7dhYFvdox21cAz1MyHWTjz5JvLPSm56duPJPKQRhHe65qis5r",
  "key35": "5RDd4XEGrXpWUCF3qh5JnDkZq23kP1oAtW6WtEJimigzJ51AN6fdoFbv2EvCcHgieRP8iJc35bzFtL32n4To15bY",
  "key36": "3PSPBcZ7XoYvgXKgvM3CmGTAG1FSkNYEHXFgRF62y65B5TSTXCdyTZ9q1VQnuWitCdTMxQ8sUY2LqG4nQvMvBxgS",
  "key37": "3BwjTbNDrbZv8BufTTc1QE3VNPraST4u3VfgsGk5Fgxzvv9nXPnEFYGSvLsmMzXYL7XSTpjnRNgdnxFGcQexitQa",
  "key38": "59ZAtUTwxvRWiMawaTfhf3BRgpSbiyXTBp4RcEKeCVVFxmtYfWwLroqbDD6LckiBmHFi4U9nNajcj7XdSYmoLCUu",
  "key39": "2jr3zu3La2PdxNqCP6trewzGzGVxWEn3N75uVN68YAxrfXjrtvV58fVCb1JBUw1SttjAK6mL2FLwFa2rEXrUoAym",
  "key40": "aoYnTkdE4uwFzKRuZZhP7SYnnu8FgAhzN5E7eAcnodw35FTfmZTNCbfLMp68uWxd9M6o4Et3RggCDfvoUCpqA59",
  "key41": "219KSs4dD9gifnkWFcU9dekntsrdSXLZsiYYgMtX95cPHxHxD5UtJKRveAVxbUprHVCAPtnf9xo9M1Bdi2soKJTF",
  "key42": "3GwW9nKDftLFzePWNb9beydj7DgNFq6sMSGyQsxdmh5ibRXgcpr6CDeiVt7CS31SCT8etFqzymexQX3i2bSNCWoc",
  "key43": "26HbFNU5Vm2gJjeQmWEfZnneuMLb47MCQhvPMCjHLE9wTMP7eisFdNYkAGPMKPiYm6LFqmfjwAgT7d9YdXFA6m3b",
  "key44": "m5cW9GFUxJz4JRRCeFXfJnZDLEVKF6Kq9VbAGZc4j6AYCtczKmXeN9afd759aERaVy3fhukiNwtU1yLLyZxA22P"
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
