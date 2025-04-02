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
    "5jB2Qh621zgQucgsUpgV3DRpWevoXrwcabR8s9QcEE8pxZmDUrFapYLxVPpECruKdAGFJNLH6PNbbHACDJa3htUd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UYQ29NZLbafstfciRpMFaWxp8cZgMM6mtYL2Foj8jpV1GQTRbr5Zoz5wzwYGhcz4m1mJGLVmwEMCSFEyHHhR8UA",
  "key1": "5Y6SF8jr7sQGhpFrVS6tZTo1KkhvhE8kogB8BXycMGDKpZZxwZqDEH7jeDZBj6nfo4E9YkhjG1QJ5JX2vo1P96vf",
  "key2": "4pTbcqtLQ3F8CGEWQac3dn2MWX6EvpEsSisThGpS5sCW9wwnKkEHgnQEzSEps38RmTRzMt3zUdnakMb5fAfV1nu8",
  "key3": "bX8TDf7nH8t6ai32rvMnxYEGJC3bGqMWqQHR6Qxayyik12eUmLKyotwvAjy2NEVhsAfVYFpXjqkgFVompbKRjG8",
  "key4": "4idzkBPxMBWqN41272qXTfcDNS31crFzdjnJnG4aLSm86jHyGNZd6oLKGYZPKAc3v1gD2dvWBeYmfLDaTK61Fmmj",
  "key5": "2zVxMwu8azWyyaFQQoD3AW3UZNzthkrX751f1FwUHEYLBrsXVxjFjjnKxChrd7JFM9fMzUx9XdsoJmGWMHnLdeft",
  "key6": "2RpUABnUnhE39258mU192dfuRY5nqoAvUkF6eq21hV4cyYgJgpCQGJz2cQDB1qvd5SDgtcrWc1e3QuFUeAa9t2PC",
  "key7": "2jWS4kFePTEnKaMNDoPAR6rsqBHCTthUCyBoLtQVZNKhvvpAKGK1rWL44sKJcm6fQyELL9FpMrJu6JE8uJVtmzdj",
  "key8": "2Xy4TpoPz31JZpRjZCtfiZGgybybrMPMjHAAw2wDmeeVTm3m4p2hqJ8ngKQTsBE2TeKdtiiE44oLNowfeeSFyzXX",
  "key9": "48RNErhj1yAUnHTosRA7M684yxKzXbtibhBHTivzwSStLe9PCMsLCE64UsRCMpNaZfkmgMhxXYzu1XKPN4KTU2Sc",
  "key10": "nVxYmSs2jDeh7qRpDhoJeUZ5v36juEHCFonG6Yp8JvN8zMX77ytrEz1tFcJWTZWz1qe4UUbbHPChcJPrFf9k3c9",
  "key11": "5zVpk2q9MJwQQfEtdzyaz6NamAZHkLMLeEDdoWBkekhSg3HpY3mUKRsdpTEJePXBCjEihZAoiPHv3i5p9CBsyj8W",
  "key12": "2wRjCa6dKsbo4auMZSZgUukhEg8B7LNJs9WX1HJkWHAyRx77zniCQoEU5cGpVK3nW5Uz5mAd37WfT4BaKtNh4tP5",
  "key13": "4wmZ6FXaaqFhYVGgAKAugEPpJFy33gi8thj24WwqzVF6UGxBjNmiR7pTUYxeeSwJbT9NpM6mVAU194bSdg58c89J",
  "key14": "5RMRemMZAHhtdAMxiViQZ5LqxVHrwXD6Y45ct1aYbqFvC66v86qr8ab4nVv7vTqbMemDzUYZVQo3BDEGhFth7RBf",
  "key15": "2XUY2xHD2m9i1cnojsURN9CwGwJ9cRv7265UTXjKRLpfUGwuo6wjT6kdgay7M4RufNxpyBhv2RG9X6CQU2irLtR3",
  "key16": "62PkX1pcnXjPz4sR8E2BHrB6oc5uErjL6LQw88RhVHKSqxXhuV2Z9FvPp1bWvr5TmYwGTLSN2qkL7okZjiWfg7Bv",
  "key17": "3tYSDL88frxWroUZ2gDHex4j51jdGvgf4CAgFqC5TT1XWnYGsqvt763qKxV5QTAUEovkSF74twHcUs4Rf6Hdk1Cd",
  "key18": "5Jf5J5xMqp3YFiNPkdw83uEXYgWRUnehQpdcLBBykL6kaBEoeEEob439jW2CmTDpzgwmPyb6RTSXQQ6ToUjmeXTb",
  "key19": "4nFGqVSPpHcQhtcvTVvt6SGwHu2narZxT2D98mC2TTnvx8uPku34GpuHhpjq6vLUZrmzbxd1k2TC3UtPqfw34jsU",
  "key20": "4cn99EskaFsPSif79JZserv3TnBR37r846AggCGrgRWTcrvMqystUhGkW3euLjsNGKo34piZGXZKwVbwGbaH1nU5",
  "key21": "2h3gHGyUrCCGczg7wMwGUZ3noahbaXpuyufmjgYky9GHtbE378s6oVqEKNMHZZaixRjF7jFRmisDHvW5kHrt8J6R",
  "key22": "FiWUkcUfeBSWgWYu4s4kKbzCKk8qUXCzxUAnoiYdTaEKH1xeov6KFcRttr6Q7ikhvX6VjmbjVpjtjCRhi6iKj36",
  "key23": "3xMJh1GsrAioFmdwUbrK5JCfdCzxFrcGTXQPNG6eJx4mj4MRC56g1PcXhxHLqwxzkCqpzzp25aHmkdz8phpB8vzA",
  "key24": "4EzdkuvJeap6cUdHd38CRQcHdL5WavZqY1JVSQrgHWmNBXJcQJesVshS7GHzdYrNBqVWJvogn1cFea2vMr8V9hbY",
  "key25": "KLxUMTtSeizkrXZ6wLELde74A98wCDgoSRQPXa1ZMxY51YEBzsWvQVac7g7eAnmotxjiREAD97MjapuVugCSpZF",
  "key26": "xcJ1ypm8cYAKD4zeJRgxgjH1xHaPvsxxdJqLdCwVyWtgt4toackKxHRV5K9wSq3A6ygXV3MiG9B3dHaKQD7tRhq",
  "key27": "4WXtyc9RbEtWaxX1H3eyrj1R5kqoSSiiT5QqYis1Ec2QZ2ANS8GheqKFbvgxLZKWPctYksD3wjBg2sajtTsz8oe4",
  "key28": "4CyMiiiVpj5YAuAorhMPPM7sTE8DxhoWJUxeTCyCwzoRtCufDz5FaKZa3nd5b7dFLTzEQLGfw2Z1i7F5J9woHEvN",
  "key29": "3mBpngLfGp1KYR5J17UvxwpdWQE97Y2znu3uvtv1V5hXi7zzJxZEkprYVBRKKVbzPEJJfZUANvEpf8EGeUf2mURT",
  "key30": "5rXyVgyuj7PR9zUygDReQHusuAnCRRLnxJA6td3jeRqFBJDPrermtQFh2BfcaaGT7Xpz4mTSJg8bQkjferz9c9vL",
  "key31": "3axL664B1HDJ2uREq7PV6pcdcy59EhXzzasXdE8D9BygabN6gwzhiSS6cLB4LQsr8ZALeLe9q25cCmiMMapxdqXW",
  "key32": "3sa5c7Hpzc3hJKd5NH1f5q67LmVSmfinEmQGpjT9oWnmSWT1XnBVeGiVXhPJDHdGF4smbK9aYH8WTh4vFkoy162W",
  "key33": "3u8htxZ5JeFE1mkq5n3jfvXcQtZESTNEsxQ7smGQX6C7WAghcFquohDRcfQvCS9t7zTuw9sWv945gEpyXvafdfsh",
  "key34": "5b1vVZKHrutRzt8CEyWyNFLzS9b9UPTZimgEiC3K2uGGdxwcetXQd9KRXMViqC2iostuNded8uvQ5FwsWrsZWiba",
  "key35": "3zvCBfykU4ErwtnxWUZNZyKHGf9zDi7VW265Rb5MwJRXRyp34wqKSYYUiwUTzuxxtK8A71PQS89mvwwX9EahtnhT",
  "key36": "iAXT2LDCXHHh46hgYFfAbgRrStjpd3WaJ26m3noMa5G11SonXqdTJAUt6PerayBvM5UnabTVvahNv1kUnj25yky",
  "key37": "2Nz2pY2cRxyoQXko7mUoCH4f4ZvZWzLXWtLgp7dTT2hDVZ5C6tWmWQaBosApRtZxiGR5hiWHHMVup5fj5ZqwGVYP",
  "key38": "2Dz4L1cWbUY75nHFfh6PLs2FPJHUUujNbUEMci5zHeXJYJCsMSm2QJ9uDDeiKx3CEf4DP4kuFUKzPpCzpnAyZTgg",
  "key39": "5SKPuG92oCvYud75uo61WsUS5BiVGJ6UrzpZHWJbNF8fwpRRfZ2m61ayaNnWkUh8eaBbERFHhwTNZzwqvmjWhwfM",
  "key40": "3Pre6VToeL3iLae2KobhNNPf6vnjTMgugBM8RU48fZvLnZLsYHNBknhTU8EBBgnDvxDau2czRMrJ2rtzXpE1VuST",
  "key41": "3A2MQaZHwcsu5o3VCHhkPipYwDy29uVqvghFthPR15FxRNedFFqeGwdEyjYbBo4Tqnhq7Rk1XeQ5CKYrtu5c3Wva"
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
