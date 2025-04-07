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
    "4i3MAu1LN1Uapk4gz3V1K3C9UTNdDbWLKRvXXvPqe2tC8xbXo4XXcLZWFBVTW7ikBDpADV31dEfGx2TwBKVjb3BW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xmXvFrJXEd4bjTg3bTGBH7QzPt8Nftck2pAGBNSdNxAGecBaPuLyCMzUgwRRXPwHynjTX8qbWzhyKpCvpihgGv3",
  "key1": "2M2FvLchB115aK46dr4pN9K36QqqvhHqHYJ1Sy1wxxMvdeFyVpLNDSipgfScJYSyE4TRcpfcM7v3sJTZtxDzk1zR",
  "key2": "5PE37Bzy3zE6n7Ay87UYZF77gvDjoeGkqYa3wKznjGnJLWmu4Qj9SaGL1dc7vrKnSWZwW76YhpUQDNtFnin1L8U5",
  "key3": "5HDKvV3WCzN3FQWTTSgh31YwEDSmoz7GpWvEwGKXYPrXcopm9pC5uqCfEC2ke2czzNX2MLby8njXgJuniwtA6TGC",
  "key4": "3MF9Nx7gSoYsHdeW3u99boP5Ryjmqa4exo3NfTaXvE7yozKXWXAMZtkHZgg8eN4b4kgzyaxMXeDjcSngqbvLdD7P",
  "key5": "nhx2EdFyzcDcinoxnHBTk4NcdQwPcLWYXhydFmCYMLTWEY2b7vNoV88TMHwTsMCPQvcSx1mhH8Kyfxx6uG9xPEd",
  "key6": "5VUeisrpPBkFzKndAop6eFvVoY7rnaYg2VYd8iVujpq21EU2xbM146vAvmEx4y8a78hZZDPqQt7pYXBUxYDHqLY",
  "key7": "YXFkEYH8fZs78TaQ2wT33fpEpj7exXQXBDmptb3DnDQ1w2YPZHb44S5EfLLiRi7PuRkHQDxrGrh4UR3AYyMPNZz",
  "key8": "pgMtaRpLyxkgTxQKiDzFNPRVt1EowUkcVMRFQ8iS2GsqmiHWixYcE4wWhxmP9pTbsB46TNvo6L1jecK74qM8k37",
  "key9": "xyH6CgSr7HNchQGtySj84VbKK14djnBgLCqn48tRtCmDDzbTVFDuCnstSqSNUki9xL8ZirFGdxoxguaqDVmpZyz",
  "key10": "36x1qSjJvtJxmPHNb9v8vV5PTniUSYLfgXoULUf8Vs2bTF3bbRQx28nnemay4kdjXCaT1PXfrcmoWg6W7TCHZAYe",
  "key11": "2ubxmQpp7dDX1HFE7rhh1wxEnQeE6G2ww3LiaGRZ9tvV92fa4sX2ziYZxNvKQPDozP186usyH2wGMpDSxzJPwaq1",
  "key12": "3XqZ38dizhN5JDNgu1yn53s4w5zGwfQU3bk6hTMambgjmzize3doGp8yJ2D652hza7N257UvY7wotno4YygBRag9",
  "key13": "63kzhAGigWZzpfrYpJQBbJqN97DBB8FKpZpUfwGy6FUrTTS6JHk4XhvEbGETtnciGVPL6bo5YEzUbQooEVJvnHdq",
  "key14": "2DYpmiw1dhrfB8WzNKfJR94XoeE2wX7Lio5ag6oS9wJS7jznZbmjwyBrFiDVKBQEDYnY6ogLFx3U4Q1HdNbtsdyN",
  "key15": "2PUbCPXRYWNeLV6WWb1NNfvopquho9vUJWVjwpeJh895WnpjRFjQbunxtKz8iieSnD338GZZkLnLmZmnbxfSKXkj",
  "key16": "5hP7ASBEkDYNBQ3PYcQPKwggkjc9pExy4bpzXGWoXCL3H8DzbtiB1KetXLcybA1fTmonPp57jdd8vk7npuZra7YC",
  "key17": "39phoY92hTgFU72s7mLxeq8L7w4Q4vzeo4Un5WhAVorgG7TjaYafNmycMLGGST37MycJwrr43GBdDGjgeNr2W8k7",
  "key18": "qfx3U6qBHJzPXE2bHJz374u3Z1YsVGC88q6H65NzYbvuWDcTJCcGL3omsga2v7TqDZ8DY6sVYcmEtTyEHP5o8rY",
  "key19": "3dQdnMd5ecnXPjNxdj98wUEpt63pTq6NTSi7yokzQay44xh7cHvFudbAYCKxdz9ec8wVHan9fptpn7PNkkpgC8MZ",
  "key20": "4VgGByvoA1Y3HM48GexQ5hCd3eCA5fcAna8Q5dy3bWbrbBLgdPc1h3jkPsWaU5PmukxZLq2xVRFZFJnSC1ww4VCU",
  "key21": "2KSAFZ2yyPoca2sx5UrbWNSZk6YZQC9cznswoWFGUv7PJEjaek3KkrJAUK2wKu64AK4YAvuWZo5GQ66c2eMRySBh",
  "key22": "5y1doQKCEEAR2kVei7CMpjZ7M7eWKHagXe2gLVWGbVaZ67F9tvd2Ua7swAdEwn7d3V3DtLSBTci4JVjmzBnXe6T",
  "key23": "5VpwT6CmjDkX3NvL4fE3vb2rPnhjKZvyXg2cPovV1VaroUw8mhQLCP8bLymKH4LfTz2bDGGsCFHMEcLRxrQVJZSc",
  "key24": "5AAacAbDFf3yCTcsbjVKFJpmCVn57ER5935eLb6Q4j6e21ANfL4uaFrv2VqvbYawiVUP3vAqgjXsTBv3mw3JGq9s",
  "key25": "2f12pTaUAkHuakrRji59ZcmP8ka4fya6RejeQh2XUWJ4E8h1XhQcQBf5Wh3wUs3PjqQV7695NRYTL7j1nJvRgBPh",
  "key26": "2iWCKzcscmrxCSmNG8XioCJdkpDuKAveKwqQskUF6BtjpEwDNXLyugJ2Y6k6pJc2y7xPapCWbGRsximG9ukMKwVa",
  "key27": "3RvrkZFmwaVgmUYt5xZtHvhmjFNr2q9Jk94WFS25AaoquNh195EVs32DZMB5Ftfha7ksAtNpyv9wcPxc2Dv3EhL3",
  "key28": "4cXSURut41E7N43HgMDbB7C4VV94PvisP8mSA5c73JoD1AdTLPdp3teGfmindQ2rZo4WW99d6H4DZQHvn7mzbqEU",
  "key29": "iRqikv2hKTi8mzAbzwVTrkVU9JPMAQRdAdHhwD3mQhyNJL5A27rqZ8kLHcYnpbbv88tiRK5gf6xaxoW4FXpwEGz",
  "key30": "3ewgNSCaPGjLhSSm35Xg4CPY7vDucNmzGEoP8FEsn1vbCxyL37jbHLWPGg7qxeH3cgXU6TKLZqLMyh7iQeKyiFzP",
  "key31": "XLo6DdNuTC6PkMJo4BqX3tWVAYdvQ7Ld4bq6axr5mYVVckPkakkanHraCBqUTGhbuBNjmXLrQC1sg28K1KwoD3m",
  "key32": "4JKw8oHdNffCkoh6w5jL2tue4hGQS3wvBMgRjS5EhkrFDHbLpFZiJWgqpzazC8rZm6LMPpbM3QYxoPU1kWrCwQrX",
  "key33": "4tsYiSb4DyYLhKG9VkQQQcdPFETi6Ghh6XDzEwgsws8Mh5siLbatt8BtivbZ6VPwTCChyQ8877VnsGRfHAfW7XEP",
  "key34": "heCxkxZYXhq6UJyaC2bZgWcvEVmCufbtr2nK8D9d29gESKbvbhdHLVe6BnZtSWTRzwfBLR5K44ufN9tzDPb9p77",
  "key35": "wy5mP2TJNLKmWhBGx6suzRtZzwNXasa4N3p3Spuh8TJSJQbs1hFX7BcJos6woXZREcnksyzZ2CF6aviP9Wj1kf8",
  "key36": "5CfwbZMTyXYWdnmXnm8DMhEMHyEnUZsm1uRizi8PhN8ua7wxz1wS114x2PQNa2RWLc4EygQzXHYWnxJEw5YfYCEG",
  "key37": "4W7wyLjtgDMZifje2rLCLHjRf5QFhHpgRxLuNAxm149TdvsAiNEwvG8T3YtsXM5Sh7zNjxmxBh6113rd6oZWPdcJ",
  "key38": "Hdydf81SVyziBoTec1GSteZockfHZA48Yd1nMVszJ5uWTyGqe9NdCHdS9k62B5NxH4CF2KtRfvD5rSucK2hKZpZ"
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
