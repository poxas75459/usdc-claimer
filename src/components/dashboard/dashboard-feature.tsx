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
    "2D3FJ26QjV7UPgDy26PUNZjXwjGdA9x9sRMK2d7MwcZUXuxYaDvroHTftdtmvRyfBdacQSkfieJqk84aAocncXSR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LNS9T5EZoYCDf2BaYMrfCoBtFAh6sgYUZqeGsbvBJnBYucU1PsjFPpFjGKRnr1MP6NVepMay8TfWU8qcdsKtJR1",
  "key1": "3mLxkkJYmV2pjdqm9x9xGbe6sor7DLYR8wt4QGwNtfWUWCg5uhEN4DUTWDYNY3UYdnqPZFBQr4RcfT4uMujFrRaB",
  "key2": "2eCSEdDpz5wngQUBokwEgrNdnNt1aThbNevmTC3BbKWKkHxQKiyG6EWgfVyJRvqEkndGq6mrTLSFSBoufueYzLSu",
  "key3": "2SfkH837remhz2TquWm1E4WKxjvncDSh2uWw3aGE36Ycj9iJEuistyJpjXphFBJ7Y7zzvXGcCzHoEu8kLL6UDmmG",
  "key4": "2oiZkPoELoz1zeWexEbp5B4LSaCqbymE8ZfpmM3rbYCEzuFs6591azwwSW8LFxgoq8bjCBc25mtF2jAJE94QeBRK",
  "key5": "5nzAv23uK38DT98Q8K7nq8KmdhDcf5hu1Rn8Ew4f8yiSJfq9c9jmFspTv2rS9GYuWY5JmZgiToVtGqnQvNzRv4z9",
  "key6": "KizKpd89QGF5oKs5s3sAwaPGAMCJ3eYwTVt91hcPS9Nds2fzxwnmQHoLP5gMjgMMGaUDoUFcMQij6vn7XwQyYfV",
  "key7": "AAvm1zp23RmEJBAajT2Yom5RxsLRh8BH51r9N1phNcyYWFiMDj4TmAxTkdKuTcZVPaoZRK1VLrREkmUss7WMfjG",
  "key8": "3QHE2CKnvoqW2X2gBThmDjVFj8F6RSsimNmc9h9GYfDNpWqwETRihiRxv2vMFxnSB9dpifJhnuqFZiEkFASoNE26",
  "key9": "5ARopHwJe5mCFABzJbRfTJcm151RLzcAsszpfjRmUHCwfeJzvp3pHatW3cWaHwCBV6pmUDu3aQbyGtrLwN5CzUQJ",
  "key10": "5rLbrJPQnVijxwbSp7jvHH71HB58EJa5QJRqsX18nXbhNtLQy6TbM4n9SYkaVoGib1M4pm1VZBDauboyxVLHHsbQ",
  "key11": "3e9BX21p9ftEbXVycTi1WjEJn2aPX3kyswVw6BWBEXAf6UzrcC65hyejMCJDLQ5vrGWUSr7YhHGbzS5V5PE5R2sK",
  "key12": "4TtCtnJo7Lg4BGRgUtdDwU1mpYQr1dEZuhTPr6AFH5h9YcxtTDmJ8WjrQfnTAc7NTaGgtzMEZy9zY9qQjmSDyzqN",
  "key13": "4AFwGERDcmdJMSkeYz7ycwHseVJ7oboAzqw32f8xphptTntVGfqPFqC4ihG8TdMfKCtSQ4s1sa3neAkSHppCbMut",
  "key14": "4ZsvcvzsP7XPq8hqixtevThQ6AfxRq5C2BzXM8ouq3rnCazzezhHMHzMKCT5vjqqqcf4dUgRamTXwtvLkuXveXg2",
  "key15": "64Wagak2NgvrWRkkoCaMVUMPPGA9rYgGoEroCzzVZm3fBEQ9gsVhkSzP8xcf25N2JGtdvxqJuhhPj2n6zf7uFY7q",
  "key16": "2uiZp7kLz39GBKJG45dimGv9Q8sxyK5qCkVS86XfT5awemNRHA5geEStjRbaWy4a67ro35gL3mWRrt6Gmmqnzyvm",
  "key17": "4t4e3qYX96NGNpxKb3tuiKCC2NqXqoU5MXLt56ZSUVUaeahL7vRaY17DrnNa5JFcVtNR2gjbmuirg8Sa1EDrjTCH",
  "key18": "2oz3Vvag4TwC3BSDXPojFDcfQbKkwjLK7niDJK1VveF1HktMyAimAiriB8qGoXxWvEGY347JwrosHTciFQtFPWpL",
  "key19": "81y1oT1jYtgE4Gzr6BUAs2FmaDs4HzTdgcBTJdTBDdZVRfXYFd4j7n1b7GL1moeZgtS2L2DFcNEWhSg97TqemT3",
  "key20": "2ScXQkoAKgcGLC33v5j2qaZf2S87iJWS3yRBXTPAvJsTDPxHv25dhPPAbSMv4cjaPH1ghpVS3vV3tgV63x8Hpm4U",
  "key21": "2isuFz7SwTNof2dQpXQ99jUARCTWAWvLv85jfe5soEshqX7ApF2vRNj9pQLqS9GMZE7Q4wgwh43mGdsB3FF63HVJ",
  "key22": "3D5UrDLpZ1t2z9mHYZ5R7b7DgjcknmQdRSvVFmNjZYsAiGK7ancWBLqHVLwaRoWFMgMnycVot2zFyBKgiN9GRtqj",
  "key23": "2H4KpCwnxgoYUBL1EZF7Jst5E91G9GfKrAnEsSDDxNZmxKF52mfiZyiBGT4kYWQ2z6jLoEi5nGd6htxHuGYbzpJs",
  "key24": "2mTEtyvEJbJVAw7ArR3NgmQRgtKYaLDzyJXUCHXL1nGcL1X2rCVX8XiS7hbWeKgk8chdqnPwE243e4hm1Nfwn9v8",
  "key25": "2hrR4uA7UJCSPMgpotfP7nvYDgw9nVxsnDjA316vW2xjHxax3pWLYEZqH4vUw1dC6D4UheFhgBNgSW6WUBvDp8gU",
  "key26": "5vwpoqUS3GwwEYMwUgHfHrqY1CpDH9f2CxCfagAj4dNVh1SMMcz3NseNNRArh2PLYPVtWVcsZdU8HBP88Y8G6oCK",
  "key27": "3rnDs8Lbe5H1uRYt7EVgJQzGk3pDrqUoyX4udg1NDoEFwsdtorUtzzKphBQ1RHXtXNZfwaaKkNpqrqQL6V3Ps2y6",
  "key28": "w7VjqjofLwKFPS8ztwGbksGbqj8rTxcu5LdpcMeZJa6StduhE3AgFuJQU66YECDLCBHKJyFCDTAyCQgegRT4wSM",
  "key29": "4Fb9w2FwuB7exTEwvbbtLTzBxf3EckHG7Q2CpECzEPMpNs5nfpvMS7JmfFJH3o3jaNXPCkbDqwEDkfKUbQE76WtN",
  "key30": "4f82MC9BBfPQUyxaLV7c7HXAwkiG7wUBqAzwB1RyftemK8wDeeCv8xfN53xim4Z6UTzpkPr8M2N4YABTnSxTDzGR",
  "key31": "2cddQPdM2bE4Xfo638Ddzsfxrg8S6wV2mDfjE5yrBwjvyMVFCQLXYVHSAXRDG2FN7qiHwUzpCgvG7PTcEMJyQULu",
  "key32": "4j4QP5d3afLVnayUwbVGg4W5Y7fZFo3NiYFXdsrXbVYhkmpczxswZT1GuKBnBRj9xW3esZK7cDqQyUxphdaGK9Wf",
  "key33": "35E5VVUKkhuuBrSgk4r3QzBgbUtUSjfCukakzk2CPpTNxTVTw2MMGFjxnZJCsm3NRRogfQEEySxChMbMCJvXGDrz",
  "key34": "3gyYjpPDus3yreZCwguc6qAxWFQYBvzRBviGc967TNiYmssSDhrT6JmydempLiBXTVfY7RpQVWLrDdHPsgHhA72z",
  "key35": "2rUEYHi2mzkT9Yyads5yiUPsDQhguDtjT1HyD4RQKS29gBHLBwe6Zx3GnGwB2SUbFVAeZU8yxphonuiD7GBxmCYf",
  "key36": "5eyytfvbBXyBoMjEghBpbJZN9KJnTjrywqcX3Lx1nXpTfFSajzcUgLChwBtdPmBwUxMhgtPiz2rmKTSsaqBpsve9",
  "key37": "yDaDt6o25LfzkZzsPuNjsEuym2LUGNqsFaH8P9WHrhKc1FiSwgk4zqs4UpJyHkydRMVmRFp6LAgi4LRetYDCjZt",
  "key38": "33b8bc1FjR6zDjZAfcHzGTPqwA6DVVDGJVhkqsVQ7PXuvkXeDvS8WN7Yqvgq4gLdRx7h1SAK8N3NkbyGNpVmXLtj",
  "key39": "5eJTQSvSr6X84y9kfnNHxptoTUZGb4DfspqV4pcLquf8wVbue7Axi5ccpT3FdMWYEaihYHP3xU8vXdURoTK3Cjaf",
  "key40": "2uHabQ91x22Kq6nz6i8gKWawh4UFr6pXfBugjQe52vR3ZrZGD15gpAJSY8zHKbWvchNYR6yXt8AdZvmF236ysTiJ",
  "key41": "s45Cu95K3fbwverzBNbgkCL9fJAGCnL3c5Av7YUrZmPeh4FB8geN1fcSctuhqCbK9YhDemj3hWkg1Wsn6Rng4FW",
  "key42": "5gKqJTdqwZuzRUCy4QJv3ueVrM81ktfvSBerWs4sBh3nkoaWmENuAiT86FByvtnNjbFtk7PNog9rdAZqS85b5Cjg"
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
