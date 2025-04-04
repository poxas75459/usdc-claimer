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
    "5hA13un2NRRAC2vfQyFrZhi1AsWw4vJ1RSLzK5S5LFggP4g2x4TSKsu2WWbupSxdqapNeFMfUHg4AAJk85VeSbkV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ku5aFxAUYCyStD4SeyAPCwxzGzVL83c9BPGm9DKhWzp89Ys9rBof1GoSj8cpS6Ja4cdBM3ZqXnBcEZfCLGpBLYm",
  "key1": "3wLnb2Cctx14B2GjBvkGhPCv9avXy3uccxV2VRNvxaV1Lrp3dhXvFsAQSUUWyr5EW2VT86CRaZ5p7sSf1E9qWpBq",
  "key2": "2xR9ivg2wWwFVgzXYyNaCMjku8z9rHfpmuNnEPJuiUioYUChch89dDxztuCor7tmt18aBmVnzT8vtXj24e4u6Ht3",
  "key3": "2FVsRa2iWEokygs9w4wkR6fXv7EJURrBxZfCz3vsLNFt2oWPztJzh448YYPWkcGr6DbUMLs84BXRE52YdRimTDAX",
  "key4": "3S1yqSg8QYWsm6RanaWt7Lw89oLkrvFvBTfuWJeAiiJcZZt5ytBnn2wbuSYtrirp4Gaz2RDgA1p9yTg7Mya5V5rE",
  "key5": "knEzFKQZjWpPR6BQ39dFDRXQcxCQFqrnbC4vYWopNjHUevasEFD8uSePai2f48gcBVmtm9Rj9tqdEuxcQ3XySJi",
  "key6": "xbBvpjvaTegrjrx2RDAmqve91JS4HYn6cca7XEyX3JrGXhTHQYhJw248fWjZWpYcag4h1SGFb81uMKmGgdNYwSa",
  "key7": "3QnTiY5mn9csSLCTEUEhhg1m4SVxsjHZmAuKeQsuGAraJ6b7jFfWpLyAu6r4WZ8ZTGowEefffvDRra6stXHWmBJc",
  "key8": "3HQ5QwKNgyptkqcoMj8uLMaPhVGWXW7mN6dn5FVqjhDq9AXgUwoyQL7vfyok8gsXU59jog3ogoPN8oM98XAMSpYC",
  "key9": "329H93eGyjgjKACmvacaj7o1nYxsy7ChW1RZKh3Tm1V4RbmHW3dt6hLjEVejoY267eWQxozoZSftWpzTZSHuFD5z",
  "key10": "56bix82viSsMMtBmYiAoXVF5m15c7TK2Afccm4mPkLVzJTX6WTY8LcEFvakbpTxCJvBet7vKKCgxheormVoGjBQ9",
  "key11": "4d4Q6ocZgxw6GUgbbCEmMT4dLoZeACnuANgQ68uwajmCYajhLMaMjNf3rwv9yejzyRsqdedcZ89Yh647vXcb7JYh",
  "key12": "24fzbMNEsLChkEPx77DnoM8ngKrzbNwNQQE1YmQAA2Q7yEfE89w5f3Q9P5aQ4pH9JRrLB1WK6xjWgCtnaSHRjBfW",
  "key13": "soAiz8vonwknT5SrTmYk5y5Z5uXZ6Xp9KApbxtJSyFCLavXRJ7yWRybAmrNfNEoRiPKDBW9iZ88TzdUMuv7xf7e",
  "key14": "5q3xQdNCJBZvG9eRg6nf88Mm2fCNGyRdP1pQaRNMMQeFJ7UEbNKdZCVaC34VifizXTvAfoHU9UCCem5YEMi6WftN",
  "key15": "3XVZiits8bpRMq3hPCc9H3Ysak7mNqpFWRu1pMVGu6BPNVBMPmTyyy8hB9dHbCvR84YHR97XXvNZzu29UfGTh4q1",
  "key16": "2zeoJXu7gfSmk69zs3xSiLnnhnqWNvCAJYBPt2hmMuxwuNxEAnfsxoCVVnG8eqcNpg7DoVqxQUp3nrMmSoejBEou",
  "key17": "4ipdudV6SearVMUU1mt9vNWuqirdqXyXDsQ7rK5ZoNpxs2GEyG6Auq18PcgKWGUnUXuwdmx4guLhDBE1XVhKEV2F",
  "key18": "67epuLmNwYR5CfE5phmyn3ZkNQC6n3i21DgUVhvgr5AmyX84fs8sRhb3AGntdP4bkPGxKKG4CPeweiJow5yJ6EGQ",
  "key19": "4RwEzNiUpe1jG6tQwapN1eNWo8tJsFziibW9JVCbF8WE8Ds2rzpwrgU7buSVrERchcA3ydXoCsjZMd7Pxc6U8rxu",
  "key20": "23WKF77EpaUCcWxCSoLRJomenVoo7iLHiBTc6STfvRTa1t57toA6oyUyhQUKHFuXuSnyydnjyzgYUvzaWJyMp5Fh",
  "key21": "5ktvg5szR7wLKfFyEtN8tSENUjxLua3gzxLrfSwaXY5WnzCyYtcPR6c8sxGN3KCMSMYxSZkFr1ipiZuUePjv42T5",
  "key22": "5vLRpyURm9Hmo3A9UKdCjjrfxsCs4yRnGwCpzLX4eKrxtDnzByt47Gs5zQ5tBz3shUmhRdga93yzg7jWWXbrcLJ3",
  "key23": "ZfskPVoxb5bcjVuvyPwxsEkAzCUzd6M2xCmagUz7QUF9Km6m8WxiH6WiNDNSFL5G8tPw4jfd6z71tjkbUiyqRb4",
  "key24": "21QyGxTAFfmjrNMsxor6Rr36ybi3pfe8HEeGZ1utqCcdBVqryCMyFSFjuTdd8aJVSF2Yw8eWd3dXL6ccodnW4dY1",
  "key25": "gemtiEjx88yphbCpcQcCMfGkEy2ikHABBjvtG6VjHc3Pd6Bwe61DtiBracUxDXFBRgBuuK672e2beHP9o7gb5cF",
  "key26": "3mLESoC9QZGNS1HUuJMeRHKuEMnU2dsnLXHoY9qFbvZXHLoFtMG2sscVnf2LqJbRkv42BR69pcqqGMAfTD7QR7e8",
  "key27": "39ZTPFfZp47naWeq8CyUK17X2KBzzmEf8E9VLWbZXuz3Yb1LERxzwfYe8nm3iEnJkupGsZPBN9PwHoj2B4QMbUoA",
  "key28": "4iQJPCa3gtKhnCzWttcc7YauSuU33kUMysfj7mEhSxh96LuoKfcbzfsPjGh5YvGY6aibrrA8B9hkjhXd5ByEJq41",
  "key29": "4fTjdE4Jokn1XziBCjSn2x5wxmxDSU8No5YrnEg8FfXYi7gMSuSPBwpN45FHRJFwngzwGsfNfyZMmgqNhwLGeehF",
  "key30": "61iigVhST3QoHA9TbmV8iJGwVMXVMzpxpSw9iJTQZYwxiLawZHxQfz8WcWZHkYgv7uzJd7GBpFULBfdm4T3gBCK9",
  "key31": "ERKsLhZG18fzxuPAvvnPyrhDt7ewYJabhw3Hd2z6mBbasKfV8TqkUsnN3mYeVGswcRHYsRXkYLLPBRdfFhrXNAL",
  "key32": "4ztQvjbns5p2XeYN6akLgp3Cvi5o7BiD9PHLjipbUs2thPadFJjWVnRq47Qtd8K4ejMTYqTHJqq2QJT2skMuCoPM",
  "key33": "3KSPTZhD3mx2bQdciU6QBLnwJZBdj3Wx8A1P9347yx1wgqutUu6AioPAk5bY3nV7ND4p5hqQpE82ApDBkqxpm44J",
  "key34": "55LPEyz6fVwn1zRjCmMWfUhr8xh139YiZDigVCHZZrgCQGsDQ39Pvi31FrBgB6k5NTYhAuYEHghGz9aV1pRmHofY",
  "key35": "3zxsE7iM8bqaD7CX6Uyse1gZeBVug9t3MPnGoGKyJW74SLubuyqS3nd4F8f2zbCT5U5fBh79Q8n13EcHwmWKqBS7",
  "key36": "4AoG68QHK9qDKbBPeXMf37nptnP7cAVM2CTELcLb7EdgLARGVvMQ5ri4eYGJ6wGkeZvv2wvMSAqp5mzozDUv6hDw",
  "key37": "4p2y5fi8VuaVmBYVcdv9DxPvjT82kjrEJTTaXxPXX8HfdrAPbEZcr1xwAaz5FiQuKeARs7DYiajdDzmsayeJuh8L",
  "key38": "55zXvZN3XLapLAuL26XDaQgG7LyCw2nos95QBHjWYt5njNip7aqoWRDChmCckbeRk3GfYcEm2S25hW1BeW5ygsU5",
  "key39": "3cLbzxeuUMKaWDig1gYCfSUposVQJFdH3nzDiTV4HFuNbMxu57rNTXPQ35qrSdv1SHay4FsGHE9Q2EhBdQnswFoY",
  "key40": "2qgLzvY83Z2ia51xq8pi3dazwmoP99YzZmgk9gfSeNGEJTRSPToKo9diZtuchoYrWXkNqMjWDU6xyjGNqiG3MahP",
  "key41": "61pjPDApS5aUaVoYgNdfaPexbG7i6Vv9uMY72bGWVaJU9D9XzGrVwMaHvY3VGdFNvhksekf3mwp81fjoqdJD9sn2",
  "key42": "2HvH3Y7YLvi7unau5q7FZJt98PcMPmbNW7SgDmCxvuiLYrKLwRY4NBn8ssHjZK7EimHaKcMze8aS1mS7Lf9H4gmu",
  "key43": "5tntF3xVNr4jCpkL3uw7sRZWXZFUkgg8s5yC7nzhd3WvS1hWo9JnBg9Ar11xX9HFSfnfRiZFNQQTc4E3TUu5ViwX",
  "key44": "AardasWaJfZ1UoNDF7rAsM1P8UxDTAYMxGb7FuCXqt8ALKga7etvLw3J9af8BQTmP21HkEQ3fiX8TNZc6zFXs9Q",
  "key45": "2G4f9xzQ5DF3xhtNknp5uRTV96ZgiZ1rGXHeykjAzRHjqMpCekFuKDD9P3FXLVFCQGJ6d3F28YLUW5Bx1HbZCmZU",
  "key46": "3MDWV3VaPXS4aa4uQ3LxfabnBsUdpkuLePH9uVwwGSMx3bTSs6mAJSzTNubvRbo8HAPLggtmKMiWhoyt3VYoL9Fg",
  "key47": "4vpN91zWZ1dCZLighQSharsZ1hWa5VU62wqv5kwNHEqc5GcaBDPkEu3c6SShtoCXyNPXXyzBQ4qju2XDjpPB2xLW"
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
