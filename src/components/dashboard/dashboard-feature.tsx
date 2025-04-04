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
    "4eFUTdZDiBtCvUMN25RrcTauyvtaRiYiFiH5YPQmta3GHEzWC62BnFijnYu17FS89aCvWpjRhR6ySQEnAKJ6pfgF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GGRZ6rk4kSKfqjjNTsTjSoZJaGjVxj4k19YCjgDYgXdSX68w9oGQ47J4TR1NaqqrM6mCC7LXtvvjKrsDAqMPmeV",
  "key1": "3NZ1gJzBV4fhV5vrtASdheY7uippPQnMLkhu5cCS9birh1EvccCErKM9S2Lf38gns3FtQ1sPFDMYoM4odJoqgNg",
  "key2": "5DWLFrTonRbJxf5Wg1UvtqrdUTw4vM4YY2VE41uW8RUYqMYm1KHysdCcwcFgK7LoLQK8woAe5aKHCFcfq9hqUEeS",
  "key3": "5GehTG6PctUsNYJBSMsbKGu6mB97WA6Kakck4weGtY7TvsvfcmJqrj8iy1zAKTDBG4yBALBw8nCFDYHt1AZ4rvjG",
  "key4": "3TmZvgUS2pbLLYXms4W1MAa9Ei5XvVXCoN7skeKSbEGUepiFANFBQiU2Ty381Sp5nowXZGQaxqrBvEknauZ9HHK6",
  "key5": "5pPAuz8SXStCrSE3vZdECaSHvZVoFGWtPBYdHtF1xGaGa1FnU6Y23z9LmEsrDKqKwApd2MGWoGVPjmXHkz4P2UVL",
  "key6": "4MK8ZPE2K8Ti9aeic3hKtcAc4qHdJZUVkznWeTHRZncNhoRBf8yiEvY66hChuZzf6WAMap1xXBH4pE8CK8riC7Uj",
  "key7": "4RGcZZuMHXmv4DojeYkHuAUbxL2bSGEuesU6iTW9KRHayt15oqR9x84PB5NsmEfuvM3YP5coKEyZcM4PT93SHod9",
  "key8": "48sg5yKaPVVNsq3roSqbyMwqBwHgM8N5myoEqRWgngj8b64edGdN2zoYGBoWSuAaSXdQxbn4CrzJQ4cNVXjfjmVb",
  "key9": "3xXRijAPVhNowxyyQwsdzbgNTNYMfhQMSpkm2net1FznxgmwPDZ36CHPNLW42f5ExToGoAY4tGST4jsNHyNWi2m4",
  "key10": "3FhBJpkqqHCE3hZTZiUCN8D7VGiSCKtgsPnD23pSev1tb3YVQ1DByrKumBnPvTojcB4afZBBtNGjwr9Gkxt8xd1e",
  "key11": "2E5asDvUGMsfRrNQdVVh5VrxdBQqzkUkURxsbcZkQrZ4dLwojfHwgiN6qN62kcP71RHfBmo7rHwacWB5TiJ6mW1z",
  "key12": "iFknskVmZxeyeCXi4GQTxi96mZNzcheC8Xe1eZcdv71XktpcVFgMpKrKEagDxAHZtiQNvJM1J8UiSUh2saWYLSR",
  "key13": "3Y5L3uFKc3dpEzXrY96oxAtYUEV479AZK7sEgHc9dMBjhQgrt4HaWhXGeAY6rDTwcPUiRxCc7b1gSLbmWAE4GEWD",
  "key14": "62CQSorvoEJfquqhzmgFs5rXgoQJ2oJxjGTDjKsJRdUFME58WBMmQ1rxBjmydjkQYCkagakFKKBnezv9eZqeQMpw",
  "key15": "4ZxSpvs8EABUBF84qpsj6cLiuLiPMKdf9eAvDGhUEWyu9CPuCTGG6M7yz5Nbqxf8nwqx74ct2gVempocQ4QYz1kv",
  "key16": "49e5hFSDzpU1C9njRhGB25oi4DPhDsacyFAr71NosC75go6NBRzHwooJRXqkvqNKuhtJ4c3dfMPMKKtcTxXBF2sJ",
  "key17": "3fKGReHt6D5VEscL2jwuAK3PGLWgzmKsQhTgaQf4K8eUr9AVXTicwigCr2CUN8WxN5hgNtHjsG4L3waZA88Fw7yt",
  "key18": "43AfSc8sZjEzqxuD6KuirpU7nXECbUQi6Jy7HpnF29s6eMy9oeE1Y46gBL7sY5hzPDFNdCDWueZYucq7dHFkZywZ",
  "key19": "2zYCR3jJAP9hDmtsRb9tkh1MESabHSH6RsLp4YKk7BFWhvryDjJFsGa3LiSj48heWs1cPvmk5guzDNUqdSJJwBNy",
  "key20": "4yf2sRGZyffb4dGiGjRbnRHBxDus62uVZtqvyESyxQQfdKWD2g21JNf1PbDVEQgzHaTXPbaono9z5Swcr9xDHeAT",
  "key21": "4jGwghP44WCGwuiBZtk1JUo4m7FXrbUq9WqXprjvzx3nvdUFzuF2BNkLL9hh7LvSuqWhxBzGJKtjod8D5EVUYUCh",
  "key22": "3SWiUxzQaVmVqpRc98qJdG5jW4HqmhJaY9BYpA5iQPVtqN7v4LSEM8Aj4yPgTXCNKFAUXu5Y179xJ2SnYwSwPy1r",
  "key23": "2Ke3zyLdg8ggFc6jfgnW5oaif95TyS49QYo5REYjfWfYCPidK9V3ff6cxnQL647mwKYDdBVnt81eCUsa9QwLcn4P",
  "key24": "5QypsDPy4ukqnP2BfGwP3M85W6BfQKSmek4xVQXsyoJx133NfaEqqqdVtmytAaj7KXKUGSmhhf4Dq9rW5o7hkKZ2",
  "key25": "jy4urrY58E2h2BBUH3EbCoMT3GoigwLNixLMPWEXTbTerRgeUW4vusiePFMLz11qnD2dmaMo9RQzmdVpqUR4YmR",
  "key26": "66rUryMYW9GVAbWzLpGQ13K6BQEscCEJbi3VqvRS5Eor2pVGYayY7HH3rjGf5K4EpDF11GGpq5bMhuKXLdDT7hkv",
  "key27": "4424BS3Cc8UnsKiHomsRA5MM9MVEuBfybMJaSTDRKNna7nhnXvrFfB5WCk3dUb5z1WdgyALw3g6GyB1RNAFjCja5",
  "key28": "2Jt1oe14yqXdyBGaadZrM6s1XyAuPPrhHZo5Dy8ifMRVdYSGyjnLjAKgPofmCqMDPhwsS4UvxPG2KaN1Fsh18whQ",
  "key29": "5pHyE6dY6mXWMro27RrsGUP3qPjSLiSudH4d82DfZ94gTanP2k922e8cSHTsQWQPdyxEjhjAWSyjh68MxL8FBaLB",
  "key30": "3FaGDP3dvsNdBd7LPeZ1xdxh7LKxRMthKPXYjuzAV4GSarCikHxaKy5ofGkqrDB7Tb5t4PsWDDXcWjXrwYaJwGAA",
  "key31": "5gznEa2GkoJ6PeNMnrqmpYA8iF9CQRStrrdhbRyjCmSyHXG4cdtHZUgBohn1jGWxtVhEcLJPqjdgcrJbw7QZHRxV",
  "key32": "3mHC6ae6MV6EiSaU7b3QnagFyRFdMVEGSoamda99UANVcYLVQa9FVaaVDxwN4SKuK19GY5Ss3tUZnD6djNR8Epvv",
  "key33": "5mG7xJAqbfVc5aDtBNk9aFwKmkgY1iZ9gvaZWaoNhbfYz7N4fGa8E7HhWyfwFZVDsjMg3cKZ8qVqwuGoSfUv5XxR",
  "key34": "4MGeSqP646q7RmkwDgduNMqGbKdCtkaXbkM7cexkrh7QeXxBNYE9bLTmHvNt6xnLwEBuxhXThPkDBYMKxv1Gmfbh",
  "key35": "4ZuEqormGoKojQ4QDmgyREnK8T2pYmnQ1KrYWipJ889M2CyPmMpDqDJC1KA4Ju55sZGAPmFJs9EKYKqvEy1SH2nx",
  "key36": "3XpJvWHypoy2yc2f5aKcVaHNi4KNMXATHMgH2ZcSXwfyE5vSDidjwzYXbJbbPzhX1CQGFvA4EjZhaMTWYiM2H6my",
  "key37": "876SfizRDPq1S97HS1EkhMuH18muQB91C8JJA1qRgWXFWZNc8aVkVTzjUh3i8gBfFVdqMLr28xGtT33KFsoC7qn",
  "key38": "Gq7GnwZduDfoPaqpgnu63vNmNA5Jxq32CrLuEextaQ5kjszmtkDmBV3SxkJ1pHwmbB4H86DBtYoSvp1X2LnBhNi",
  "key39": "Jm2f8tjJTRan2gRzZs1AUbiNXCbs8QyJcKYgrZ2A5uw2rZpJn87PbbniRiyudbrScc3T9wNVNN1e371zspFPSJd",
  "key40": "4K44eHWFV8VbTwMZHp2oCxnYfMQyxZbmQ96iQvta6Tg1fsaH6wBon2KLBPS12GPUYD4iLAhdgXLV3Edorz5UwSKV",
  "key41": "5KS15WodiMMhMemP25XTxUAdEsNrjRNdSryhmL326tvhrJGimNJBpan3mvD4PcbrN94fBoSVTCPHNYGuq5JdBzTU",
  "key42": "C4CCoVLbseLsFn3PTxL5SmLqpTj7xXhidznE1JNLQhetux1Zvm7UdX7oMW9b84bZuYpwTWUv4HyB5b6LkXrZ3PS",
  "key43": "XL6V1VUR9nCEHk4UCDFN2aYzWp5XyBAab8R7terpxSk1WTWj3haBR9uwnw7k5Z3TUp3PbBnXvFNMR2NKZjyqKb5"
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
