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
    "5iTsELaGu8pg3KvnF6WTmEnrBBNREsYbMCtH24ZckWsRzQa2kjQYLq5fwGSoqRs5PuXVjurPo3LfxdTkp44gPJVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d8ZsToY33XB6tYh44pQUz2iwJN5EU9wmsHpPGsYQkUFzQVapDo1ztapUhnjECC1GtmbXobG2fL82XNz9LSWYqHt",
  "key1": "47hqub5kHTAFERUPhiztLXb2HmA6G9L4vcTJr4EbnbZH4iyPWH5w1Pr8UcXJ6vvLyu58PkMkZBqpyLgkMFNEYPts",
  "key2": "2FWhiypu8nSe3RMaoLGkafizcZLGec4r7io4cxwSS82K9FmXg6ZGheTDfc7iJ9454XKjC2eF8zNFqdBT5w64TsFE",
  "key3": "4Xvog4MxNC4wj1pXkuiwzgoFviYeKY4VUp3jiyToczrGxaKZLiTPUvJfRBkqRhw6Z9R7N5zVp9Mxc2o61f9uDBb",
  "key4": "2ryhrTqNykrRqNPFeqXt6PFhzccNMkSRNd1aSU8SLzFxaLFYJiqoKfLqMDbnezqN7LEtB6EDwV24cHxKcNnT2cQA",
  "key5": "4v1DLgRsC3zdjGuD8DiDqZ6kpwRQRJJU7VWv4WNdJEMy7poijc9udMVvNNjnj2Z3BWq1jEgNTM9Q6WkXhS5t9jmb",
  "key6": "2iXEvJ3rBFh2mieFjsemSU4eUvWGUaQfEFhqWNWYr7XdYJ6YQiQt9bUH25FQ49UE5J7ZMLfy6L6xA2FLk8N1mooN",
  "key7": "3vJacZG1ereLJLPv7NuqrSx63TkFncq3bqLoTrYvBk1HECg6unSxgSYB2whqm4erjEqABdpw8BmQRjp3g8eMxQkY",
  "key8": "3QwsySg3NB6XDAJTe6RBaNoCkEST3zDyWjvaGfUGeghC1sRHBqyVyNrtX1JEfFRJ11RdkCrb7sPhbkxtFxgi9FeB",
  "key9": "5h5e7bm4PBB1rnyQUdonEVMGzZhYCBHv22tVS7qSLzQ5YQYXyXYNvEyeca3G8R6p9GLChmfL2ndncXo1mqQ8dbga",
  "key10": "45h7XhQJRA78jwxkG6W1dLLLDfwuvbBZgn6jktcbZU2vEepaLwkeqjf9aE9gzuGSyvktcmxEGz5wEBdRvsWfarm9",
  "key11": "5pRppf2iqQVJBeZEPN6h85zWZqyLHiorNHrcPAGjrHCu76arMLTmJkmC3xXWDHBLJ7WVB9PsVDNoootZkvAFE6u2",
  "key12": "2E3iqqs7Z8fq9exX88DfyVfSXgxcmb15kAAtYboc2aq1LakrKq9kStUMMu9mm3TdyJVQF9a3q9HF5vqjhikSSfwL",
  "key13": "5bCsuaVAEjFqNN8n3auqkCtvk8m5RNtpAVhGTiGTxSdvMwsgkDbhcAuboVYeinKhaxv9eTFuCcSEjNRLyQoWcdX7",
  "key14": "5m88tdAkoCMKXf4NpgFfReNk4kKfXLEWwPbxPRxCcXXZW9Bqut9yeabQBp9bTevbdznMLono2S4dZYZUttcgCDUo",
  "key15": "3BZ1dZVKDLesXYNYG29HBYt51dLdk4yX6njWXTdbfYmQXeETCdDzfzieFpZF8AokiShKmLMsWNdMdaTyquec7YzB",
  "key16": "34jucUqYN1ouJ62r6K31NGrjPDJzbrnE7LFKwWFz1az2AaYdxwcLRXfqs1tbkhTRdMTvcfmWQPeCdFYVh1cX4Dpu",
  "key17": "2HNo2H1NKiBMhU4Z5TtMi1PjnsZwZECRPDC8UoAv9PoXYpKbwh4GNRtBUqW3SMEF7Yf9eofZUJAij6tNqAoq2DpQ",
  "key18": "54gbisc2MBrHtwgsbfSv2LysbbTmWgakFR8vMEVjfZnj7m3k17Gz2jHW5qwTSEV5T2n3FK9NgLVC1UVPbLYRjAuQ",
  "key19": "5sDsdBCB6oPqBDZq58z3H7i2rKk3gYhZyRb8EjQip81WA15oG33JgiWDaNGXpn14UDzkLm1iBoS93wunoWoUsNz1",
  "key20": "4pHc5A6BekMED8fZ7yebxDpKQAU7WzmxGQf5p21ubzxmDKBgnDqbbA8YGKpcWJTZKHugE1PNk2GeSoEBJ2Z6BoyK",
  "key21": "2rCuE9rSVMcG6yyV2krYRwqmBDuzwD43vY3A7eDHMbWDnFtwdkWrLkw1nfaq2tVMmymUMEg2c2vZMTtDuUHU2W1w",
  "key22": "39TavtJbNswKoqejYQbxEQCeiiaELDV8fkKHtcPukg8wNmx3Y1RwGvhSkuPtzJ4kHX1xZJKAq4Arx2FS2hnRBV1i",
  "key23": "4NsoMaxdtWsZSJXZugcpep7io22T2MsNtfDNHHUjCjPwm3jbU7CyWWoiLLd1g8EzTFewJhuSyohcysinp2pV1ZEk",
  "key24": "2PeFT4QgAHcmwUaTpVqGLDYtaU4M9X39D937DCH7dN9pt4yj9Rft5JsiYgkaRGBb1Jtvs3s3wKuEo72AaFKMAswe",
  "key25": "38JLw5AHamNFk7EGz6Msgq5VJKScvf288xUD2y5X9827cyVq7Gq1FLGzUCPzp693hRLDAyfvQRYdhgCxQcCbX9bU",
  "key26": "3U4vJip1hABbACziyKDnU77KdNG2wFYnxrqh6Y5Vs3oWJSxEw4FH1xBMBoG73n6VvCY6s2x8Lb3qnr6kV6bzStXt",
  "key27": "3H5i2K3vvVVaUfQAhjLofbUz3SvwMdbeRthcXCEz363kF63dWXXsPtgN2Hp5mfzx11SmgESzx8f4kPmfMDT5J2pS",
  "key28": "26fzn4nTcNor8vM8w8iB93JMxSRTfi7NvEfcTUncPxvdNKk9hA6yRmFBvedd4Mx683ryTGj3zwNhKbP9LNcRSPtZ",
  "key29": "2Jx8XWXjWhoHNub4AP2NuSE4TQuYbvqVNpgsPu1Ag4WjFgkHd2n1Ebu5sboCTUGbAGXiDAYHFzi5GtPcgdJrXXoj",
  "key30": "2zZWQ66WSQTNNhFNKNkQuo48vtUHmFMSmMVF4uSK4dubm5ANgXNPKRuoHthG9WgD9VeqSCTQC1LJdwfYtJ2RidQx",
  "key31": "EkRXkmkhq2HFyve4Uwg8fY38C2beKk1dtKzPQAT69YV3K6Uhf8sUXS4Hg7768WtPKu5Ts2DsmTYY6rBhrThJEPi",
  "key32": "2Cz4MLnBmbeXaPP5Zb7i2ZAXqXLKJALeLi4Y7GP4M89d1D7iwfmfMh9hLsVh4o8MQBr6Y9XNFbFuUiu5jcXprKEp",
  "key33": "61JjCpxrNpSCvDWtuWQmbQPNZeTcaXTvxrrYAks4jGLHyduReBZSvY4pYkCLH1tqb9X2U4DnvtSfnmTLnCJZ2Yba",
  "key34": "41gVvQAxHmpH5ii8a4cTnFcY8oPtqMxJsDBzEdfJp3p6kAHRx4ha4VTjchiqGc6HaVG9RDpQyTU1QkxZ5g9LEDEV",
  "key35": "UYhEeR8ism64nCwS1cxGKfgxZ3xnVRcZh7UYGozYnY4pvfQS4xZPNAdXEprEf3RRvTSvE3p1odqBJHvfGVRgB1B",
  "key36": "3Cz5dmkNkmYgiNCysJJRFY3hVaKA1tbkTg4aBE4omjNdJm523HrVmA5siKaajWhW6jFaivFypKbL9HCv8rX39T1M",
  "key37": "3pyHQdjc6zKVAitLq4VFTUDUUV7UrJbR2DzY7STjWzxtAnGRcmQWgENevk5VHwZZS3Yq1zQR1h4ryh7q4oqaSxSW",
  "key38": "3ESPJGkN1TUL3ZadsWjsYWqkKg6aj1BtoeZvp9qg9jwjJJx9c7mgPLfSUxHxh1boQZRPw2ioSg9LM2bgTbUitvKo",
  "key39": "4sf3Ky8eDD7PXX8umKPL5SXPMR3e5mdj8TQVhzjKjRm8PRviMig7n9fyHRKSoccBr9HL35HHWhaQ5XRD2mgwHdwe"
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
