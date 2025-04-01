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
    "49Z5HfaHP35LYNRFx4khKk5cJfKYoFK6bgwngvxy25yho7oWA6owh8WNF7CbSJ8xP7p4ekSDmLywdn6Df9LBdWFp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eFVASwfJiJ8h9snkkuRBxj4xjzBWjg3kbmGgog7ATXmmaZyybhKURM6hES3ZuECAwHCzyfEGJPo6fkddhg4vmkZ",
  "key1": "PX2M9oVT5KQ3eYtMcTrvLHxCTteVda4KcyDGP8c4ecDMwgNoEMqZwLY5gahFgrSvhN8bNwBZWwfRtBitMQVvtAv",
  "key2": "4NfyjRprGwWsxorWGhdEazM38DYAEHtwBH93uaajhNG1Bx8ChhvS6FZbkXTSxaFseXU8wt3qtftFwBy4McWwwEGV",
  "key3": "56pLPjkkg8Uy6xecLX9bg82upvJkHrbUxgKW2kanT3WVrHgogqp72Zww2V2NDL9EEyKfTPHMPSYoZLWLC4tLiPYQ",
  "key4": "jRq9vNyDQhyhHfpXyyMKKeoB7FGRpvB5vQxbq9YxcwuR9XBsLs4QuLr9nnfYaCRhRXLSYN1418bVjrMSogpBP1k",
  "key5": "2jH3PASJ2Vd2e72NCPGmXtEgeSBtx12DVyJpQMqpc5ADMouJJJ7J4KwPNFPDuKzyPdwenx3S5GmiFCJs9sHhgU21",
  "key6": "5TcNZew1v28mHZ36w17m3EJzJV5oNnPYL1fia7PvqhEPTCpBXrH1Y9mkAyiym2XGYJ14hUH5oQEuRxK8sxp79btS",
  "key7": "oo6DvXqVShhueYr8YXAHXeoW9DVZnqc4J2zVzJoqxvmZ5dTsebXeDL1d4PggiwM4shn2fHQGQHTv9h6ZdiVY43Q",
  "key8": "34ZSkC9vK22gggGtBUySo8jmR6ZSXnns4N4zLtXVnEnNoEJ732ztvCsb3ft7A5d1Jx3qxsy618d46ifMLadEQk9P",
  "key9": "3RL39bbyLGTSoPXUQLBHU7wpyKfhiZwBzguJSDKACMYMR2CFRKvKRTAfwwRUWVhdCov8HTHE9JMYVBFF55hWJ1fC",
  "key10": "3GRC4VLyhyBoebku3bHnpGyHiDRuLxFY3HYbdgTYh7wBBdwwDArp31NX6pc7H57CZ41wgse2rG2BjJFsYjT1fMX1",
  "key11": "24Ns1oLn5bw31KqGzZ1UxL1RhqyxRLGGJBUXutk9KZDfqzDjH8oeBXKotNM9fvVvdf3X9qGJM6Y5Wa8qrDhdXeQK",
  "key12": "5isY1mJRwzG9z8PT2pdj6y4jWVCbubYB6yMUfq2VDK3gXmdRVy1sLsomrAMvdnBfYVkdxufKnHwqjs2Y1c1fQjuL",
  "key13": "4ycPHU3q1pKypYJiVxu4eqkrJuULeVbax23LrmyyuMR98aw3FpKU3QiL3fujh5dHCd34vEDkGAEapz3bt62FqTCS",
  "key14": "2sVRUKmutUaCQo2Xmfrfeoc64dgz8tLFcCX3X3PXFipPFnKF4NqvKYowEsHxi1c73wwP1KzekPkoHcLDtb5KZR2j",
  "key15": "4xf4rEuoBPvpcMhpUDPJ2mmSMMPeNFfTpEoqLyjHe5T4uPfLLtE7ifJSkL9hFH6UFeiZzEsjQfdx4nyEFQLYCL1s",
  "key16": "2PYRTGWFGRvnvufQAJqaeiu5fVihsB5toXbLYSRFgLKFFfSrDkvEitSSnyKaBhYwgxDxnp2iqCJTRFXk9QXgUvEE",
  "key17": "3R3dXeG6t4L8RvXNbNxTNf1HkVfpV2QHnTWmFSozet6fu25X19pGqkUsTRJt1FU3ED5dCaSTCxK7eghEVv8QSgmm",
  "key18": "wr7Jk7o1GjW8GaA5EybNwPkCQ3tgana58a32AvXKHY838ryTqowieULPh3ymK9ESjyx4qYVmMBoCptoD3D4UgLy",
  "key19": "3PKctVrNNEHLsP9FjexRiacQ44LBnhzWhgM43G8GGjfdBicQtcsXaHmkPmhkWsuLc5DanCzvm3Z9aUpJVb2MpUW2",
  "key20": "4v1vYXMZvM5ZwU8MP4z1ffcW729gNDNFH3EvGX7zkQ4aJz6H2LYzKTzVssnuU2jBMZpB1h2AgEDr11Zr4P8m3JLg",
  "key21": "62C3YmsUzRKLCSc2GjijfGdkyqoH1ByYLt2m5xSYWPv455NPewotpjA4ZLwWJPMVJ8xYxpfgPiDoqbifv3yPux69",
  "key22": "BwFTbE8ticpDheJ2VamqGXLztxC4cvRwHWBFXGBvMkpPhpRh8ZwEAripxTUswqMrxq39ByMEExm3CZ5i1oUUxod",
  "key23": "2m5iQrNpntwAiYRBtDokMrTXW6YhScnAmQju1Ng1ZFNg33JFYRtgUk8cGWyFwcg4cMrcdppdMkPJRKjhtawapnrY",
  "key24": "d7CW36tzGzzz3SBzHXGbyijThQ9hfhckbxhhWL6uGLGDj4jWgM6G6bHxZwQpZDfcCrJW3BiLt5DwBCKcDgjCzWD",
  "key25": "2M8jEnBQHjsEvG36j8Hyh87MYGxKeEgfgLJVWyzLUquFu8qkoYAndei3nxfb2qVHPTRBYZbCsGpbc27yXkebfuwh",
  "key26": "5J3mWZzq97JqpjP96RYoQWeb5zubEst4rnyZgrTWjR598EcdYmop9Tz6pJrsuhFjnGcizXnU9WxvVTNTmgKYhK6c",
  "key27": "4L5VanfBcJLGCsKuc1GG8bnuS8QadkQzrj7mLTTB7WcEpr5hMHbSUspQGsET5pEsEHg3wjXxgnGJzLgxoYDmaqwT",
  "key28": "mP1uEFnPzFgHNuKKbeJ6zJTCzGU2ULEiqohc6SYjsTSLWA7V6q7DmMTBAuPBZZoCjd43A4rnK7X1UPBGNbR98Je",
  "key29": "2zcXEKSPxXYy12ksX2EaKaCXfVyoYwJ9ZWwRD9tRxMrZVPEYJafAbAQeRTmtfhXEQFLEwpexbgcbtLUypabHdwvX",
  "key30": "216Exk3M1kxKn7VFPzhCyZmj3wQXXSThvrbJAfJ14hbzeeAr3pFs6aSjU2scBZtGdaFeFedEvwhtZNbMHd1RHAqq",
  "key31": "5nh7nxndkRzDsbiDKNNdHirx5zcqevtYmaZFMoCDWcVN9PvKBxfgDzDp7MVLXf4a8TjuuZoqNSbSXWKUfieHPeU1",
  "key32": "X5YF1XmVQAnFHMnRTyfrWSUcWALgLF1pri97hzifvPswd4d46VXXaXS2u1g4bVPV8tnuULEaQ1XYe72uwM91a8r",
  "key33": "2JstqAojYdRoHe59Lvby43ukDTYiSFicyXsGpKBqEZBtkwbijQrBmu2JXDdXyehZo2UJ789fzjxuVuGD5s15iBXZ",
  "key34": "5C5RuL2isQxYjEpw52imymy8JZM8YRDHruGxU4BNwxyTBiDZ4nzRAQfQwpGcwjFUmKkL9yvAuhro5jsELu7va3uz",
  "key35": "4Vnfgo7DfeZp6uAXZms1fRGcaChbewTSQtkHZJ6bgKEY9Ebd7ybGhxPqa8zcusxAopbWGr2zag3S58FVsNV5BuYo",
  "key36": "616p5z2UriC62t3eQ7KMpA1FXiDCxQRenZjzKHqRRtVXPZwv1iQVSRjd9yB7dRCfsNd1MH1mqJR9LnbXqUqE8GsU",
  "key37": "45KZrv35cvYrsXuTqAWytyFc72h1hag8yxHgYbrtAjk5KgPMRKfHPhkjDiG3phUeBNPUAWfKPMb6tTkPb6TdCxaD"
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
