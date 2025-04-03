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
    "3K3DmH4PEdNJUXizf4y8m55gUPQxo5jHVwCvqxUekSpLrEGcMWk7H8sXBthQC7XMTAUva6V9PjQBiF9Sjh1AXLHr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tD8MEuW2GNTmmq7jB3RdjZyNA8cybvf96bdnZftvP4UMnMCrbPcuUHFHztuazxmNHC1F5HtTSFRHUGGbZBntnu9",
  "key1": "pZYunkYy8k8oKXWShKWGeNaZ91qm5Q9dtdtdSSkRNJWXjKLLbpAJTN9mme19aedJaxPqKh6X4VPPpG3mpSPz6US",
  "key2": "2fo98ELDVYhaiddimcR2Qvz36TnM8Je8M9c5fpapDrB2uqYJ4omGeA6cxKfY78UTUQoFviD1w7rDnneuEZTv1B6G",
  "key3": "4ykvYt8FrzrFcw6LoZMWZTE8GV2LbP3WsvfNwV3pMdmMh8Z5x3f2pXxJsPrEASGxykPp8S8Zcfsxoz5BwpPAjLHx",
  "key4": "3GCSB4Dzcs6iVSW4nuBVotJWCTfhzfq5Uczt6gv9HPXxLCWTrufc8pfMvqDw2F1RBUjRNyqLpBuB7rT7EUeUL8kQ",
  "key5": "tCC4t4PWwGFjnGnEi8rriMJb7Mb8kpxEXZiwJEcGqxk3MKqojyezWxMYEHmk5zunQrB1viCxPwcS7BgS2mMhHxp",
  "key6": "34aRjDGZgk6ziwXtAX4K9LWTik2ubKfncy6SMQyybF88eG9ct43xLMaDc5EJpbUmnZwNDysoYUPabndSkWhVD3Gg",
  "key7": "4paB66p4581GQBXYcnakdeniMZWmaujo1eggtqavKwjgZL5JKTHQEqPxUtTuUPiG2BbGu8PkjwBrpNsZVejfTtUn",
  "key8": "3ZUsUvoeqeJahzgpxNFj5yY8uMpEtAnvoH391wPJuW2WTNEnwCPwAiVkaaT5mG7RUxn8ZFxqGxgr1wrYKDkR4dfo",
  "key9": "2wp2uPM1wn5QknU68kEzNzNPiZuKgHBbR7oZhBT2w7haXej7wsmqVedfpURaivRfoyMW8GLB29ByS2yu4vAtoixk",
  "key10": "5FrNejJsdRg4i2h1hNGWJn6zobjcYVVMxAFXhFqrvpeGFCLVGieJXeddMHhVJ6AivPC9eHuTgKC7zhWkD7z92Jem",
  "key11": "3ZEeuW4uK1kLqkx3pagz4GaRmYb8rhfUKp44Wsd7g64fUtuhjYenMC5ofFGBimaFQL25TJvXB8gjqPNykZt7myZ1",
  "key12": "5xpXci5rZ6jbGqW523xmvePWiTWLMHiobJxUuieAmsZgVuTzFAG95fYrUxbGGdp8apBPwex8fGbHSeMyMSYagCz1",
  "key13": "NJTCwzuMH8xLUUoyCS8xodB9F5xE43PSgpPE74XhzhVuSkGWvTqcqu8JXYdJN4UktEoyuQBnCuHdAyG3x7TT7E5",
  "key14": "22BACVXbT7P67w7ACLNR4TZ4j94H5zn3gUCivT4gU7P6j8L9x1GgYULWru6oBLwFSwUVqPrDywXZUsDDtNP7VdpD",
  "key15": "3NG6TR9qGJxhRu5PWbGXkTaKmmnkYJBrWxF8Ltwvz5ggmo4QDvYgHxRAkvzRYysohM9caLCf47iehtEzXKDL3ffi",
  "key16": "4yDuKzsogCftsKXWHqwyK18HJW5KbiGxDMT7TxiUUD5hahQZx4gMpDhRixXVPLybeTrxph5HaaR63KgdAHqxkTCj",
  "key17": "5Ytzo5WK8t9KMGWQsoDfnjReSvX9t5qrAaYM849hZygEDyqiYUbcfSmW5mJM9VHZFM5t7jnVVt6tPv9TZp9mvCDM",
  "key18": "5DsfaT6iSc8ExtSr8a5aD8mFR5UhsA9jPdGThEt7wb4jTXS1qZbtRgLZcHah5hW4YrEiYJj3MZ2XFZLFTAFRoJok",
  "key19": "2BQ6aCnLchzbFGuFzRwN1iHTt7ukv8cJzYx4h8hPmsVF7MHPaGfL7AAoBqD92W6bXmVUpwijFkdE82AT2EMMnJTY",
  "key20": "5VfDswoEE55h8tMP5kCXUpn8ti69jHaP75vegJHWdFEoErSqqhf67sWE27PhiQiHt1j46oNaQBiP87je6pbKRT7d",
  "key21": "4os5DVH5Xa5r1pw25sCJ9Yuxh5jpV1dFV7Z94ZFysrzkyenvmCfBbBrUwwjvguhj2AiQMsFhfv8teqS6MJyN4qz6",
  "key22": "2ZHGCu6mb1dRBQdJ4HTET9Ni5Famfaz8BmqrEpX6eAxQmT4Egw99trhQ6S7YRWoBFcZTrfXQSNy88bH2rn7aVqZP",
  "key23": "2MGKPtVJQBwneBoXjh3ZGwXAMLRuC28UVFUuu5SCQ58iJyBcpHWnETFP2PTFnc7DYqwrVHjik9UeP8dkKhMFJE92",
  "key24": "4BVKT1iBT9c23db7ZSkYAruDHNe1LQJURmn45oR5CAQvU6ExHhq67gACFxaHy31oy2ttjMbDDGRiS54YcegzamPF",
  "key25": "EBgW8xiNSkLrxyZ9FaDHYzkxmpFBJp3AvxicbmXMGmgwLykiCmfD4Dc6BrUZAyChmVBUv6KrskxMNE3k3YAwfKh",
  "key26": "2R1TgfAJ4xFzC1SicVd1M8hPnBqZgi2UBg6JWPmKPJRwJdiX2Wq35Myi1KENTHwtRGFmj8EMnCaT44coe6WiSzfj",
  "key27": "6Gd2oJyLyVMa8bQdpfiBaaQ41cdmokG8JuTwZrqPW2XkR3vbTFG1ukFqJQkQy4xk8Hi2LhPAeR8txP4HKmVFai7",
  "key28": "4PQ2yct1RRYkVGqi3dZaxAxMDJQJxXTdsTwErNVTN2Lxdx9mjUUQmWh1eY4Ckjc5EyZQRxN2fec1CpVEM6x2EmFZ",
  "key29": "26FgfHK3A3PTTsDkQWcNf4Yw5XpQfT5xyepEhJ4KXrgVXsbZpV8irid9CEr8VAxbp5UsuWM7BtbZkZpCZgoXeTuG",
  "key30": "3qynkMBufgBWnSjxsQQRVrRoSCSzQHeTyqEaYmrMDetbtEcJbCXYreVtPgm8jnWwNjP153vNo3pyoV2vRt441Hz5",
  "key31": "47pLtK3dSZ6a87Kkonbb6FBNUuZU62ALi2z1uDr1Csjrqs41Kogbf7eVA2bDXs5f8zoJ7gjgzouEiCUeVyQHRsF5",
  "key32": "2ktexXgkE5LPS1kwrtej8xciURgt7aebx1Ydk6NyC3ZQJ1Wd8aQiu4bMY4LvKxgeCnWxQJPb2xw7kjhvLZZDfibr",
  "key33": "3kd1QRxKrdxKDHknJVf59DDuvSSJ1VprLKKumZwdcKMapp75pj9D7NiRJxz1Jamqfvf1c6K68mZ2GVa3icLJJU5U",
  "key34": "UWAPrhm8P8BZjUfaJ3yzpAutA3smm8AVC2UW8LSJJUNpLWQuEThTzf2BrNVkUgAU8hTFpQtnVveh2q1zKnUofRE",
  "key35": "5t3uLfh1j8d3m5jpX8XmeRUmb4cQwyxSGLWwFaD7cYnP5mf7EQUmrVxTETAJ7Fc7iQPpBkGQU9BgcKzTZQccoJoo",
  "key36": "4ii9SC2tKDHkSDtR4GDU8uLD3kVbRV9LnonQDRcSE4iuhEBteJ1pwVFcpyNPdU6CdiiWNvDrqQoPZBtaKW9c4mU3",
  "key37": "4HbtEj9nwwrbaWNeUiSEx3oordwzXZU7wTaRboygzzYxJFUK9GhtFiKD8A6LPiR6uDJejjwWgf7RqP9CPiAtbmao",
  "key38": "5LLSQfsaWXYcRxjShg7FtVtDELVorHALtGfwzFvvx3YDkX96gEs62yMeMVXJoFJVi8sN3BM9VGvzoBzhKA1a5G11",
  "key39": "5AZvVm3u37crtfEiYeuCap4Nh6uBq7Jf4TdrEX4eMLrGk8wK68pXX5BBY5K1JxHqvC7i97iVqrvCULnvTCnfKprx"
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
