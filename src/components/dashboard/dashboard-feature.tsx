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
    "5FKvhFzy1EtY9irrzBwGLdvueV2cLnztDBpwrqhKYDCbNBr5rCcLZj7LZa6z2J6WhmEG99sSX2cu3rnZ6PiSro6y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KJyCxjEnvUyk3Qst3bxHeTkVkpBWRAY85BbqAkBrbPmyuhrNg6nfmCUG66o1twrm15Wpdxah6SWAeZ3C9ofQbnZ",
  "key1": "3A98TXPDFyUrtC3AEc9K5E6M7AEDToJUTDA8Ng6BBXTGuGeAGNZMTJ4bi9k54rG7QKkoaRnkrFExo3uFhe35Bzvs",
  "key2": "tcnEMx9rgQEhxdiu6SuFBFAMUvxq3k2qvE3f277MeYWpo61wATLuMBkseNdvVwZSdhk6VDBdGo5pbrTcBzUarSJ",
  "key3": "4T1fJVcKqYAhKJW9TGTUyBTYFKzAsgTrJSMnLkvs9kVMLbpxBBMC3aeNREcwQSo4cBiwiPRGZpz7cA6HJ2dDW5V9",
  "key4": "3J2GffWVarGF9uFSrLYYG6vZSzxbHqMb8fXDKPnJT41dLG7KBZwPGBqoZumCb8Z32tQW8c8Wi2TxUYgToDW9bsZF",
  "key5": "42MyFFUx7vVMn6oqt8vvamWtCJX4xu9L48TgKFboUtztbpfa859nZMtZyPrWFb6H86U1a6kPh3AUhgQEgRJxCybW",
  "key6": "uP4VoWziUhn5TRo48B9Cw56PFpZVTCeJsF7Jg6h3EqqxthpmarbjsFJqVaQnYrA2i8iScFS2KwyAjgj9UBVwdGN",
  "key7": "5soCqguaUJjtjqHPdpdtbE2E4HMR3FehBQaEQyhNGTtCtEmEjd5RRaVSwHoZxgFJvj22fPBo645S6BBjZ2VBbjSa",
  "key8": "X51d2qXyiv7WLixyv96kUeDjsSaQv1Wuhendo1sn2EjconHiM6g1YgNy5iq2z82oQbPf2nobsUmUDThHTuK2xVG",
  "key9": "3rd8K2WWtLWhCjnqWL628gn8d2Ub4VwBjXY1usJCam4vJvPxuevWVCvxhmAtGxvwkEvdyZ7c6h5c6AY9CYGZmhWA",
  "key10": "4532vmayciK2d9PTCsf51DkGRQdQ2CMo8dpWnqeJ3XXN9quM4WPh4WE9m1NnfgoXt6cxXW2eaxxqCVKMRg9deV5v",
  "key11": "41B8jLQZisdjaf1DbiDjgQBMPHXEdLsjHqvPCS9fF62U4xoLSSzSU6ZKQ3hhcgCryyUMs3rupnbrtEDpvW2T6jXC",
  "key12": "2VzxQqRJJxzxZWzcZdLQWDKUcR2UJCxf1a68FdKWCnno3o24MosY2QaRxAyy3Ptfy2Kz8BcLkRvPVV6b9CS2DW5C",
  "key13": "pHYH6v1vtLttkgN2RKsUwQ1mVbh4hqSmVatSZ5YenM5XjTQGwEUc2BGQg7Ltdk6ocw8NTiN46Xm84iWLC4MkvL9",
  "key14": "52iGQrE1TNpJ2WAowP9dFobsTgHUUuCuuJp4H62QHcoyiBCvou8P1MzfHv2qBzzZhFw2CLAZW1KB6Zy4pdy1SCEy",
  "key15": "2hysj5wVe9JmXENAkf8jLo5XZ1henjnKU92YwSgsbSUr6Cj2G7SPk5sfrY4YN8izYvZsgMRpoWnoSnerGMwpYNvD",
  "key16": "22uqTdD7nrcpWLKyJ253iGuL2kc3qFkmDgfHSjRguicAD3ywzK4REdyRnUVtiRwTRtoFkYrD2z9hLB44B4sBQvom",
  "key17": "5gdiKSgD2iPR2udaTWEBqXiNS7YdLc43GgqB8t2STNBchvVbeQBvhXbYZnoAH4ZnXcywq2pyVzvyPCqzFS8Bx1WA",
  "key18": "vC3YgpnuYLYmnCjC6JaQwcQD8eXuu5mUpfoifpPZrWLdK3kxhsn1wPJVQqjC2QLyojrdzSdDSYjWruBDv1WRzqV",
  "key19": "4b326GQNfxzon3feRgKMYdmD2uvKBkerzj4WxeNx7LPKAt9VWJxWuvBLWbVskv4EraTM6q3U58SYu4oeHxntL9iu",
  "key20": "2AY6VsGPP7WmwJoWzcBVZKo3fSyzwwcXdGzPc8qhJ8PbQSpur1gCNnHFXdZqYDpjgW4ug3zUGaaKgwVZ1jaDCRn9",
  "key21": "wQ88YVFJcw73RDyhpEr2H5hNrcnzo4YEpGzVn83qFbcGdWsGLyVwtgGyNB9LpGrvRaAAzzvY4bSo6q3xS2dMTyq",
  "key22": "4kHoAj42CQ59K2WqREKmDn9umo9L1mqho9MAbFJd5wCWXa9PfKTonXau6NBuAug9JjH7nxshNupdV7VJyYYyZwg7",
  "key23": "3zcbMrF1i42jiQnAq2cidMgaLPw6aqqmHR2B4c2ynsQ4u7L36osv9yTAY8FLDVqNeD5MG9Zc2THE2heKdKyHcbyh",
  "key24": "64cUdacic5ns8x1qZLFwuC9drUVrxHGh14TQRbUtRa5eG81gQ9V57gd1XPKiFme7J8iQjKQt3RUy5TPsgKqQkTS2",
  "key25": "2aJ4SEaFUW3yKfgfKMW9jiSeKKNPaiWbhQg8tyYpTMr7emag8tVjeSP5D1pt53xMLdjtSEpY8pU7PnQaA1sDEXeB",
  "key26": "2Hy2cppexm6PzNTQWgnQBhsV7kmUt6sfs8yoGSmnXGPHG5v7FtR5fNeZUSLRCMaSA6dhVQLMHiPCvS39nravfSSt",
  "key27": "5MKf6NasDU9dpcPYbW1dUzqT4BZamnRL2tUsdaGnEUe1JGRs5cDQN4JKEferxTrcVw3pshhibpTsMR5p7NAB72MB",
  "key28": "4yEN9sVoX3vc4arCKzGMxS1FtuM15e2PYhCnnoWKVA1Ycbkhite8FkkRa4L65vbvrZ6F2v8wwudr4cJDfrTDAcdY",
  "key29": "61tPvzrVJxvBM2CJsJctD7KdXyijbRh4pLg4qaDtZ3ZtovStcpRH2y9r7r2QpKkZkC6CHLd89pPD8kygpyL8QDAG",
  "key30": "Z3cdy55zPc3pxH1jRdfBZvtqSURRGj3MgSW5gJ1muDaEQ3R564MxUPqZNw6ejLrzv46B6vzDAKx5DeFLZ3FtuUB",
  "key31": "wtGrcbVDS9xsVwBVHbWqLkNKA5opogcUTYoeQNRJWAAUnJ4EngBrBVARo97D83hyWvPi2o6Ea2oFYsyMF1VXEq9",
  "key32": "4hSJBKL72Yiz7k8LQw2zAhZMMtD7jB76UvmZ7UygkH23mCUKDopReXnKxYa3vFqFHYZvcZTggeEfevvSa2eBV2z6",
  "key33": "4BVvzidQf9s7XyEg2G9fiTCXN7t6rPPsmYiDRcH7hf1fvz2o8ScsfNfid3orh3Y9WbEQSCcbJ6LDW4qjifeFyZS8",
  "key34": "5zPSy4sMvy6a8GfUNhAdLm24CNLK4Zn5sYDxByZxTYiTLR5LmwM6zfhuMWje8Mn12GNyaaggtRc6MC2tTj1pSb8f",
  "key35": "q262AW6d1zrr7PpC9mZJquZSTttFNWPnzF3L1uaSxLXBByY69tZKSAcxzE2RZZeNZxQCnD4j1JhW5MTVJxmo4iv",
  "key36": "3yFvGS5dCq6PUgujfQ2Vq8uKsjZ5s9Eds6wRUsiFyBytZjZGrpghFoTp5oCaGGJqE3LgDoKsVYWEBjWnaWdF56jU",
  "key37": "2fvpiAKnsDyMXbivMrw9m4YLjsJE5yHBRZVJXfU86WjwpKfdvxnhVSF7VqW8mM8D1qeY6Ze2NdPyHxAVCsMe2b7d",
  "key38": "3jfNDEdryzBdwnLA7pAVg2vhgZyLcB2Nf8kzoUubMNCt36npWHP8RQQDAFmzWr1L6ZSNEn5t2ErWAzgx9TH9tPip",
  "key39": "3pEATq6C76yceGAnkiaBwzuo3vAnh7xeUpmujBcHCziA2peSkXWx1ax5r2nGhp7k8mV9XLKD4bNaxuMNBwnXG9Pw",
  "key40": "2PchogMNDE8apNuSyGw3STsPumZyzzoTZ969Fy5F2NyUSXqq2RtHFTdwyH2rgfJENwBbFJcMLXKDW841RgkSbzL2",
  "key41": "5b3g891rSQsBMZckK98xepTxKYBAtrtoz8X6dUCDsygF5Yj9KVfwQKcrMxzr7uw1B6AnQgnkoF3mZ6UNZMoRFnJw",
  "key42": "4LQj43uows88iTF5NTxCC1CK5VD4LXr3Yqt9qMVgwLGiaWx2D4Nf57gz2Jh3zsqu2ffotBE3SCNe3MViaDtKcDmr",
  "key43": "6RzukWJtPCyVz9rXruunhhBSRK18Y2jgoPnFpVkuk41E273yGm5HhWe6fw3sMjpTqLpPFxK2DDCkde5FjnvA8uA",
  "key44": "3yKVkf1PVBwyV3uVk1jGukQrSeUANYV28aRT6ZioeVX5eaEW5bVmpiCk7P92XC4CNk79JpRNUqTT9oady8p1uL8S",
  "key45": "n9cMuSUSijDukLN2zUtc6qP324HFCCaubxzWMNy9fY5MnmjQ63qr7itvRFFXxQo6mcp5oPLGSPMbjapZnnjddMi"
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
