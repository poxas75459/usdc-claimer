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
    "5aXeFEPD6psJiaJioErJ4Y9DjxqFERTLjXzMBuiBo3tCTE7prvu5afE2CvsGfEzYibdqa8BYdewGNPpan14GxWD6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bZawnLFnQkSy5qRioFB9PSs5SiKkoyZ3mq9W2SskbHxKUAQ6b9aQPRMaYxKetpkTmob6A6MmYBsewtWmEbgXTXJ",
  "key1": "5fZHmv9ee2kdyWf9fWb1tR9Mje6L8dHh4tysBcLUBW6EydspddrPq5y7rxVja8qYQosb38bh53fAoBY1u7y6afEN",
  "key2": "2G153g6UqmcuJoRgwXyEEdcgYd8jjPZT4UooxtHGwRZx7JSTDwkW4TnbkkN6WihNFoKntzUHZCrn6WsKGtHGHDWq",
  "key3": "eiu2v4mX2bNnX5cnmD7csWWenkrWrb5wC8uNJkvHaYZiwXSEbrVzDJEvAHK6vtC8PDb2MrTHfKbDf3mBBpSXAUb",
  "key4": "5uNKbRVsMxSdSPtmZecYy52ngsdzr1YyH65P9ufHzjbBVGLj6RgSeAC3KpawS8fF3gVJxUL9e3WUHmU7sHQEMvSD",
  "key5": "3iwkPviHwJoXrS9a5VRcjsXcLiPnYbExYGfWBCNk2JTjK2ipvNbDyDx3zFs7JYHEjAnonpU54eS6y7CqKEqX5UCw",
  "key6": "4gZf13SQPJFbxyWAGYRCKmCTSAdxnxd5uBN8iY6oxTXPU6ea2SSyTgr72ba7XQ5R4Ez154j8K7p9Gx4ViADQhGih",
  "key7": "3vw1PsEVSdGxRL3GF9q6zF2B8CHf79rKxU8decC8y1dqHMRgyZttUUwL4KBUpATQAp2U4B4QnG5YpcatuMWSbkdv",
  "key8": "4NS1bXRYt5x2e3syGDkie1M4pN7yVpYYPJbznMfLPfn1d5P9xhZ6TjuG4Sg3Xjb9hU6Qx8qAnbasmP1YdkW1ciEs",
  "key9": "mTgYeEoBCNQHTQ1thJPVP7E9Xxem8K2jC7sMnnKQ5MBaVteLJkHgqZog1djU2mxaRxzqUtACE8kY5kNcrrHSF8W",
  "key10": "2gJgvbGPVQe1k3iz6suqg2jKASSMVh3wbRMnYsCaJ9hzkC4Pg4a12ZjqrGC2cAQKEhCahovxFL5HmDUAYhHyGkkd",
  "key11": "3VXqqKc5caUEuXtArDTSiwcBdr1M1qdbECKw7jdzgiGqP8BQwk1EG1tGhkzrrs39fhFePu78stYyRoiFxWk4oNg5",
  "key12": "46Y4nsi27xepsMQdzQowRFRANt5FrxwmQZ9XLT97k1xWW6dsn8NWX3MVDcjx3RQK9b6ohLxP61BWyHCQcpqvhyWu",
  "key13": "4z4pxh9viUimLx4cSqEejpGB5moVK42DNyzmY3Qap7rr6HBBQ2R6AmmrggeTW9eG9w4vRezcvv4idpZrzDY7Nj5r",
  "key14": "VYDuTHd742Qzajzgw5obk2bE6TY3qXdxU537hCGp5iJnwLD5XyAKT7Rnq17chkKXHhbTDMkDp1soYEvj37jT8gs",
  "key15": "iZnumjMHU2hTxrbJgnXRwAySUsexf7hmrWLu8pegNNR4LirZkriKMdcWy65pm9GtGN1oDrCCAwFCYoiyg8G1tJL",
  "key16": "4LNdzYntSjRe6Tg7i5dgvDXSsTUvA8qyzuXCeJFKUDbsM9Uf2QtjZ46jMafCKhtfJAHVDLRxHmA4dUvgkFJ4J8W9",
  "key17": "2QCUsBLJVLy2n4iyTHLAAECLtiWLbrxKQFP5QSomfcLH6AfSxG7PRhCJ1XfswZvSRjpPR5chLQ8QNRvZSVAPrN7",
  "key18": "54TzjPCLiijAx8CQbyrgZqhSGiPJHVzp66s41uYMnhueAEoneLcrC96y1vGavLEWT5kK4xvJQrWyZGERhvrwN7wj",
  "key19": "Hn5bsr91cKP2zYZpU19DmV5GJjBeP4GJEqfjokQpcX9cU8p6nWV3K9CmADBXrMjTAmYLrH31ms4yr95iKmyxvT9",
  "key20": "46tx8hSfU9pLPH1ZPSK95e3tUeVhSsPaLjo7UdKLn7veqnFAqEpB5hr6s9N5A9H9zgNX7Fz4HpEossPk1HvC4Lkt",
  "key21": "3CJSTALW5cuWva5DHSsRxeQRo8N9piMaeH3uZnAtXDC5YuGiAK37WF8ayWrh4GrUWoTBRB8eZehBPU2JN5xWPm9k",
  "key22": "45yitU8ybuweyBCDG4gbUTNnKcpWpgSshzRRjvrzAVPhoEmxvyvgjFFdnSx5QZHnNAcjTd7bhzkWVAqi6soCKZ3w",
  "key23": "3x5rRJjXK7btRGFiHkqt4o3cWqwpRJ8wPKCcJiSyuQXJjyW4jSNwfoHZCfJHnAqdYGYw8XqTH4rovtADyW4AtCPN",
  "key24": "3zeq2JTF1P5KvTkauJEwYNpDaBN5cGuAzE5ZJxc8go84Kw42E5RSHsmWakZfPsgtx8KeWsCcPXaaGfvzbt4k4YLD",
  "key25": "3wdTubkFmo1ZgUtQu4KN918cbeoxGCwyAj7cpEpW3cziibRakcgW18Yvam2bDFeKmD2FxTkK9DULvPrFZmgCtLp2",
  "key26": "3yrDnicWjhA5Yu5Bc4FwszWgtqoGJY2frYHpB5EaLHJsKDsSrHSHeb53KS8LUd4GRYueCZgaxUNHKYw9f3A5iu46",
  "key27": "12668AMQZnDM3dSoaq2dUca3Hce3mcMarVCs3rNghH57VvtP1gEwpLeVV57fshLoAFKbSbRx6Nv7sJWQpfrYrDMM",
  "key28": "fr4S75HMPvu5oGCqzirrZvmYkek493QsX6qjWUi5rpNUJyWaYsruktAyDQUwagY24u4G2ehDU2VhQYmK2TMhQV9",
  "key29": "52AdhjVj7CNJVFUhEzS9PR96PZXMNytbssRvML3o84rpRs2jT5py2Yb4sThsfxwPmRU5uJj7s3vWt2YJ5rQ97fW5",
  "key30": "5h2AxafKii3Zud5GdZxHcMYJ9ZAtTTzyRe1E4Xddk414qJSzvk6HRUVaxVXp7SJQRiWAnEaKaBouMpFohFzSiP3A",
  "key31": "HzLWdNkbceVSsnNatqRFez5CKB9kfXMxgC1G9a1K4pLKKSMrrysXVs9kU8QCCFBYojdoQZVrEAvyZEqTp4eQBkU",
  "key32": "48hPMpfNLG35iaQT4PnQMunPLC2vgACZFt4vA1bEeKYio6UpmwfxFhpEtK1Dn3KFdHHSA71K1iCQjnMb8rmR9yE9",
  "key33": "YvMhNv9joGTqURHwYTkL1BpF1DDo2W7qfMfsmMZZUU5eh7G1MqAhTt92h8Ub5K4xV94VCqL9vRWBaVcCdyq8SKa",
  "key34": "4GmDHkGimmqo3EurarTB9PYbNYpeZpykAkkMcpp3FQ38NrPBBwXUquPJXehsUmUmHbYWSUvSFfR6bFojVxSFAbaQ"
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
