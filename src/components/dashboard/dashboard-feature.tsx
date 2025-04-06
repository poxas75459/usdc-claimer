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
    "3AEA8o6Xvg9Ke4cEX5wHeypB4sExFdhVrLGJKj8WDGBUxs7mJu42NQyEETBH2FqvQ8yceZYYSP6inEs9THFzBLWg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33JNfgWxyZz2ic7PojqiuCRFSu1YApu1habWvuecfYn6X4PaCe1NqSTYtVpv9cs4XWRcEaC1kG37kKRq8sotEiCB",
  "key1": "25vXEtuc8RG75hHsC6apNdXNv1u7VQqY4LSc91psCdnyeVvu6iAfnbqMZ8TZ7CH4iNqrRmhaZRmuxvSAR2bf2CqV",
  "key2": "5jPs6XMBSXmbK35N21Zf3Dw5t8DxqRpbj5oeSXRTjqakSyTPXr8VZaAwTcrLng9aPotNpF2kJAPX3Z9WxzbV54ek",
  "key3": "3xw5DxNSK66bePgTrsX6m9Y4caKTc3JxeMeNiE7gxVAtTBtkhrgBzSx7JshGyejupzhKwuKDtxSVKmvJtoQF7okN",
  "key4": "4J1XG9uChQ85De51TTA5TLKir732DqLd3pyPtqFuaBSg47v3CmNppKsj334v5LS93C6pU1fALJYGZ8WhjLo5ePAv",
  "key5": "w1p9wjDbHraV5oYfdWC5RmcLJX6R4PR9CVs819uXm34fYJhaw9eYzqKcUCmFgwwChxffTRmf8AFBRwj3hgL9hzc",
  "key6": "4e9TSNWCmc4z3JnSWyE5yata6LtSPcWgCypoAdLm2Vkw3SibRJdbzq52ZshJ8m4JVwiFDejwirPieAgyrJ3Sk4VW",
  "key7": "EtWhmjskqPXqUPpKywbAbRBk7fbdnantrbGfJSSvAx2KWau5tHHXvZc2kU9nkW4HfSUzqjAjEkYhpC8Vmhj5GPh",
  "key8": "dDdL1ppAfgz5xxdyArmkKqKf5ViGaLjv6mT1hDqSiDCbjhBGFsRnmEBcLXhXQYMcpMd7XEPUg6HopCthqfS79h4",
  "key9": "4DRurffV5RtXA1P9KvYAyivKAxQJVmSss24Nn9WdA2jnYZnevQ7FBd3eoMFUEgF9WRAKCm2ct3GVz2veFjbrGt1d",
  "key10": "35WtKxYHaLtwWAVDog9tE7GKbEA8UTfRnsNHCxP1Kw3WA7PoT6x1ABfMSxeLNiVE1uMX4Rs2TE6UyUeuv4xHbiWZ",
  "key11": "4C5tHhUkBba6ktXaLTXDmzPoBQfVjih7Cgue5QLjRW3GvWmyMDHgcRzyyNc9mLdjPgSQ87atsqE1WyLsjHUKbAGH",
  "key12": "4PTRL2p8cHdNpCgN3yt6zmNUvqGLuESSfAreYUsh7iWyn4A5c5KetBLMidnkiDaR2C5NzrUC6HVxsRVzVnuMqfmt",
  "key13": "64WCa8TcbBnfbKvDsTs2Lv2dZpHe6uWXJb6bLSPiXwi3KazbQZFFXBck2KmaHh6ofT3c9929XjgQ5WgE3y4SSziE",
  "key14": "jfraKYsysg7uqaGfcQvrVGXNuojF81ZsUhqsFPJ4upgFzorb83oPKNvQCBeAPxqSMQvaf5YdnnPS6YvrxtTVJCr",
  "key15": "3FKWZyv8d4AmAgia7pUgxD6UiT4bXBTSaGzTn96pG7LaGw2AoFQRNEGqgceK3mpVGDAdosxhAyDLJ9cdgg7ZfYhv",
  "key16": "3yfstufLAWZcpK99znEWypJnkFB1FJF4gKm56XC4ViYAumdMzarc7R1gDYKcc3zmQNAupfHYAapAtYjpKKv9FUmU",
  "key17": "2ywhY9acAAVvyGdSnANsLvJCo9do6sR8KQR3bnhdbYpY7tap4jMhNecD3TdZBFp2rZjVMsXmRYWS6a2zQfJsV5ET",
  "key18": "2aroT5kSk914kmC4sXMyvYU5w91YiBxJWrJLtdFarm6frJvfFxCEwr8Z14bvSRzaXwy7XYMwSXzXHtmi27xb2e9A",
  "key19": "2eY5ZUKPR9uT6LAstPbAnTer3AeafcAuxatk6WEqfDR75SYpdb2t74oufRfWJbqwj1J1eZhxeFSbFaedSYBx9BiE",
  "key20": "2WqVgCtq5Dk3zBAwTxSxmRsdqe4zs8AHcD5iFLSz3nAH5fE4hGcCgJEsaykh1ymQBecZFTBwRDWtvpqRssk9tVHa",
  "key21": "5NahmvWwUHQHvfZ4HW1Mv9sojT4onv6nEruwuhh39o1VdGoyMuAWMnL3WiLxdrRXyf9612b6AkoLLLkN9C9PerDt",
  "key22": "5ACmyL6RGBPcqbHhwTdeLCz2xRXEwZ3pqnfRFkUMwfDfo6dnX135sizZYaFQmxoSFxXE85BbBbCGKRqUvJSWv2Do",
  "key23": "5h7oRCohfHyHGAvu8YHJUwVob1SwJxEpZ45Lxj2CU41oC7yg7KinDoHyUgxDL425QnPZxhke6HEvSBg4J5cTA3WS",
  "key24": "5nDSLUJ1z1aBQHZTcptjsxgyTSPuucmTJXnGSFUzzKc1c9sbSoNBZmUBiRqs6Btd6tDwBASnpiB52EB55TLnp6No",
  "key25": "v7mR5udT6RHaMJ1GoMhn62JNUwoPyQx7TtaJ6AYQAkyBL1JU47yo4zrRN6XxiRheiV6LysG777MhdkY94RhcrDx",
  "key26": "5LtjZXgmwi4hWjh7Qiz9nKVwjSszYwVUAjgwbq4GjNFG5P17zYnjiJkFbq18fypLKVgcSUKzJ1e8rrdRQ9kFDMd2",
  "key27": "4LmCckoeAitmzeWHeiTzyzNJGwaBNt997DtD3ScL1rDBqsySyJxTB8jJCAUAfWwV4E9RNVEwu8jyG1fzpm1XnAZg",
  "key28": "4C7md8kCQNAgjvCWphwqXHmt9TrTmGaPPZLqYQK2Z6XYAa4QkhxvAujPupuQNywUimx3rVUJ32XXw4jWYXFridXf",
  "key29": "5tHvWR2LeVXkXFVTXASRVPZQt8HZqcpn78EBbHVLvvKz3J58mZQLa9jGDBE9KEag9zh3EeP5jKnYD2joE5oSPxMJ",
  "key30": "5H6jNfaCaK7U5F1HtZmAqBx8wk16NH1PabFwYVx5uPpFRgG82bkFTPhDS4KtgcDb64eVji55FmMv1LzZGH1276Bq",
  "key31": "5nMqmgpzNpD4Nua6GZ8jUC5iGomY2cMKu8eGFQcu8JJBGG3h6h8RJTwr3oERY5xztrGm9Mj4UMsbE77c3jooWqbL",
  "key32": "636ACDcERj7AJVKmLyZSmt2fHBw73X6XKUzrFCycxxL547zf43XZpReiSRgNkNfMZoCJSsz6RZciu6VhFJKkq2XQ",
  "key33": "56i2X4DsR2p9SHGLgDLokSvdDgKUtdJApPEkX7LyeWCbqeNe8wMuPedG8KSxtdV9yGonYHCJ9C8ejpZrLc5iRMHE",
  "key34": "4kLWPGHfi5A93REVKQPiNA93zZgiopCPf3fYcvJQfJNnpqBJZ4wGeVGQcP3PWCXRbTB83JHWQv7tawMdjuYbqP3U",
  "key35": "mW7cTdrDcijqqXFmJX93Z9F7hwB169pz2W63MyJmRyC2ThMsTzCRMVTPEJyPEzYcZx7TuaJAzPNKqT48DvULgj1",
  "key36": "3CqdZiqQieikTbxLCDxUgnqy6BVMkXinLkX3sav4Ajrg1QWYBS29C3vEqYdJPAyuBffmFZmu2fPhWmq3dQ3TFnsJ",
  "key37": "3QMe1M8KBJDPqyAFsKhm7DwNq4CqWvx4fC2V1dDYUaJPbUA3K5XNV3QxHJaSJkiEiHk6CNsWmNytkyKfTcN6LEuL",
  "key38": "5QbqDxEsjWp2YZhUCABdGd35MGmB8FTwL5wSvsD92FyRmXpRU4K8tGKu32oDxHUne6Dn9pebr8U41wDzDCZ7tBKG",
  "key39": "3Uxa2EDdJYCBbiRyTTJViNDTAfM23fvg5rCywrz4zLMBjbCTu6junCg7dx5J34hcS8xtkgv3gH8qSCUNJLPXYNMb",
  "key40": "5J472HXmT6AYB3ecFu9z7BHitD3fyuWEDP8ARHf8gHpRew3xsjaT7aKzTzHbsBQfqTAkFwnYq8viMGCoWnKP6e4Y",
  "key41": "5q2n1uop6r5wnj8kHNTgw7hrs2Cdw3yYagb2dANGhR25BP2Dqkd8gMNvifoTLau2d9ZtX2skmEmDFFY8Dru5WkVj",
  "key42": "2biygzTXQbSaDasfEYse5NPKPVtsbc67Dgp4fixebeFBUx6zBeUqH2frvPqQv4NuNKYF34WsSm8v2RuzTeSf6cG8"
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
