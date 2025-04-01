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
    "65QymWAB9ZQP3Xejpryi76z1hdEYY7Ts1bsQRvEfbRGLapDTt2W5242NMpehStu5N6GcYeD2AynphJAm49PB6GEG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SKCNKc8rGXaUfmGyxewANuBwUVPsovwoUx2ve2jLetWbsy6eQdWGvQQKWeXQr18Ej3yEGxxdQTr74i1wGuevPX8",
  "key1": "55ycJPHVqsG8eRnYvKWmbvwA5S9sWZnwT7xtk9qSnUdQD9fNpL3G8Hj1Jebs8sWRzy5L1kUmYbsnoWUsXM54qPnp",
  "key2": "3sAZrZ1sW2UrN9zqU2cU4NUE2ZqZv799G8bSKoJvo3hZHsMscMRgY7Grw1DruSG8GxM8QbseazEquCyXo8gChK1F",
  "key3": "HgGPrNkjA26i416TKqSxihNMS7NUy8nqEujVzjdJ9M6Ksdotq8pZKxmymaEH2DrGPuXZBJkjsrkz8wKLiHgFVSL",
  "key4": "5RpuMmpThwV9CcF8qXdj44nGRfAZHj2U9Gt1nTPNxiS9SVJJG2q2jspWKRssGCcdpyij6P4GHDadjxZDpinmTu16",
  "key5": "4XkgbA4ZYQmR3Wz2FtFCf6AnViaucv9ibLaq7Rs1u3NxwgQnteMNqFJ9zjqYRSmx4AEMhBJ7TYQ1CTL7gFZQeNm2",
  "key6": "5xRPiUv79TkvHpA93zznWkjYjyFq32Lt2mupGghDQtcRPcQbnanhjbPaXoTh3wEu3YGHcRxCV6wNgBgorKedSbxe",
  "key7": "5U6C8Z5PmuLHp4kTpNnxsZzbqcfMwK1BXmoH3PHx1sWX2QGNGFwJkGgVpP22qAkJBp4w9hPfbNHHXbKmsjKtRKZC",
  "key8": "CXFzdVobdYyaPEyShY5tXa4LTwqmtCoFzfLPzfzEtauA2ugUySYVBi53YsvTEU9X2J3NEsQSB1yK7Xp8V14SbgW",
  "key9": "22GCm4spuQjs5wkSYh656Gfc5GgFEA2byvfCEUKNse9StSvpkuo3nsKgyDzCNg5LgcierB5sSqXvS7wrd3WQ97WX",
  "key10": "B337S51C5mq5pGwszjwMMKY8NNVnkS5Zopzuey3b19PJ2dfUBRmfeftPJwhzXdn7Sz1guCGkfgeUm5rs494t3k6",
  "key11": "5VPsCPnj9vQ1SwiVFB5LwKGazDnXa5MgEshgw1JKPZreQ7EK4zLmgHKoCwrdD8La3GU6C4EVVbBbRw3BNWjhYFMo",
  "key12": "4rsV5nLvGCFAb1WbhJF9TgJNG4TyoNBYjMpp8i9jyT615YikujkB6VoWYjGMyhgRD67ChJ88TWbXh38GTbg4hwbJ",
  "key13": "5xigQqxqqSQJ4oH8hqx1chhsK5GuHf2pRDAP9RDTEQTFDkd1NCyn8a2Tt3MoyhAsSBXNbAf5rTUsxmppyFii91sf",
  "key14": "5sc2EUimpa7Zr4L7A3NRD1Wses1cAyq6nPVAewqFwviJmyDZj39nSvJTK7KpFYEdY7xuiz6DDBNwYn1xXBDm8x4L",
  "key15": "3ypy3dZRD5LbA63AD2Vp4dovNJjgZTLtoRmmTXT2zBsh6gCijkejoCu3EjwgG4sV6HTQ26W3m3bvvv93eywgzY2g",
  "key16": "37nTbag6wamgRVtRaCR5hUzLJ3Bq4WmCojf3U2Df5cBzcRgDaSrAzEAp2yQF5KqRmV9a524YbYEogmqbs768Ncq2",
  "key17": "3FbGHTyjLYEEqoux5snLvp911UEuFxEJUhe4e298LAg33uwLiGCa2C7YtrG2zAoxAn9reYtbsxjXAtoumscQ35LL",
  "key18": "4jpWfks9omg8DfvLAxFisUT8AxjEA2pbQcVw3RJNVGmrJMuDsuWaMrSJcpBsBVwAHAUQBb7ndLHiHqyTDJuQKS4o",
  "key19": "QjZ2PzEWjiUHez5Ma6SG3oGUgpCyVZEBnmSmwhr89BVUQBdTeds4NHBdCL9taAwpFxPPqJ9xZTiigkaGVMpyvKD",
  "key20": "3hgDndnvdSZLoSsBrRvbWvHUcFRhiS4bbWZztsKMQ6CzQDfenftz24XeJYnz4UFQaYC44f7qj4AgRxAQWt6qcvKG",
  "key21": "5m7aZuGZnLyDXVty1uuxp9trT9GqXtm3XUrzNvRkKFvXSy8iN6yXwvGhfDe5j4CS6NmUKwf3jg3AwG9VfQzYdbGX",
  "key22": "2ggkH2YzcuKmJFm3vv7V25stsLMtGSwqinSCbZoPMRGPja8hcs1ZZVrKBYmiqixjLE15PGCMyrXP6QNMCFEJ9htQ",
  "key23": "3T1ZozTGrnAUUpYH69UdcgfVFFQZCwqsdrXSRPUmVx7G8QwRE471PwMSvqfdfQbp9uBiLsZRis3ssY6mLa5Uw3Z8",
  "key24": "3gZebjMW2PChQv4FoL8dFnMddBaFCpz4xxdvEpveXBeUYHCTXBnh7hd4uRAuFsAdy8oNegNcTAzVT8U457YtHoPN",
  "key25": "DiYQ53HZW2KqiBy5PyGU4v6t9dRfAaw6LrtQxkwC9vsyJjSevCdDfxud7rQ2BBL7sd1ow9UbUvxL7FMbsaqSFvm",
  "key26": "5qiUdm3CGMjEDy32tBevak8C3WzQdD3SmH4htxiMdFEkWTvhDkiBjGhYx86CWHjLdUkd4uBJ1cfqgz9diWZxSTDo",
  "key27": "bBSqkrVLrameZ7yRmwRGeeksS34GDtPQco7FsSdYNsYJhh7k4cti9r8NaC6NnxGuvBaeGfgsZMARpmcY3R4EhwB",
  "key28": "2J47oEPzHpPurow6c6tu3ncbN1msZrccQDRtRBm41jgbwZS7n6L5Qhp4cMdphhcggq9m2nABdD5dXUSiCEhKuk9L",
  "key29": "3UphbAbY9XaZZRNoFP1DYsKFux4ceCwakmvgpSaJ7VFXGNirtNeJe5Py9KeYD38p8cEmfLHsozJshV7JGQanrPCQ",
  "key30": "3dL4mFRj9yVc3u5zaBmxWWxrCyhuZtpUBxrJuy926QifChdCwiSAeiKitWr3H2HdRK2LrX9gndWdmEyaQfTWJ5W9",
  "key31": "63WDWkb5inhRxRmhcY16GZyyRfcS2ynb8owCF3UT5R7wFBofiszwTnoGnsEWpMtUCiAe3QTjpW5gHYhvbySa4vb1",
  "key32": "5eord1TubbwiwbNHSnC7mR71vLYCQfFSdgoGPWKZZUprGtpZcrLE6DdLav5GvWG6JkXY8VXPUgXj3cdht5cLAeZM",
  "key33": "3fzjyFdKMwRAjH469hfYWVFB4aeZFmmxv9bDmafnphzDnNsfrRdAas1z8M9q4w8HWDr1Cb3aYAzh2up9URSR8qmW",
  "key34": "47U3X3rAr5dCcG2AoMcRLM4MBWzLgqcx97oAChxq7f8w48SwCV7WkLd7hdLMwUjB5NxF5Axxc1XuayfUkvRZ8M1N",
  "key35": "5HWd5mAVY5BKyEGJp2Er7GuA1Bf3YKTBwZQngCQJ9jmxRD2kVZFBDisVGjWdhGYiUSPcSRXnZJkQzDQsfSHjZk2",
  "key36": "2WS1UEPQh1qw1CrEnhbNGicpYqjjyEhkeRVPAdxMMKQ1x4AXkrTsis8SULauaV9kUBEDRCTXSwTdfyMbrJ7dCUca",
  "key37": "48Kh5u2ZTofnH2gqNP94uAM3qkJU1wgYvspmhqXSGE3suuJ5ueuvK9CmPCEG5fXrZC6K6XDJd82oPY69udsBBiG"
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
