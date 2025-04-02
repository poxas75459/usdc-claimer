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
    "zmUkCBrU4FQ4MuSoo3PAjGrcEWsknJroVnXRyowq3NrUXRYeDfAAS53UD6JPJyQtRFqR81FGywfX7ZMPyJhKBQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rh3w4hmJT1xsGkvV27LLdAa49HYqRCfwKwapqEEh5ss7xkTzf8X2mTALMUFBvaPP8Wj3dUYuawpR1Knxh8A8dEi",
  "key1": "398eqPQBzUs6FxZgPewGH2Np8ywhpJtZsesqC7c1Gsa8E2MteiSxr4uCgszk56VmZJ6hhF75Lcifyo1t5dqNt3V6",
  "key2": "5WWQAmEUC9VhAYQZeUJaXsaMMF8P36hBbXbK7fGfaYt5FjrYac6ewa1pUv45cxXqg7UvWmtQ9LncxGWMkALY8E7k",
  "key3": "41o4imBCodSth9JDRRhfBBKtTx1KWgVDfKjrAxVVcVARqS3UVRYgPGRqosukfcAW9u9yr1KS1ChUqLgjJYQPSRix",
  "key4": "2f98TrJ96XYD8pdxTKvRA7sDGe9L3NUdf3nmFmgWVpf2s57wwtZ5iquVzYzf9v6BKL8LnZ59jXCCjXe4yhPozAUX",
  "key5": "5JsBNAT35FyndgaDCkJGDRueTqGngX7PuFPve7CPxP7c9GnqbCKbDnzSS4CvVb4Nn1vd32VZHJrygzYLGooy3p2m",
  "key6": "23Lbsvid4N728z246J4a3Y4xq3wzcdbhM2vvYHnkmgzBiKciZKbLbwwLPp75ATnzqb4C7XFioyQj8bFu16XyuTv8",
  "key7": "2PDVXZ45aTvjPQhdxde16U15su4fCZs2wHaF3bZTvq4wmNiJuA1BoC8TQ6wAufNLWzMHdTxnMwRuejn7bs35vMWt",
  "key8": "3VkgKF6sXtUQ6G12a1CLqEKQKYshgmLxnvZWXaZR3YX5h3R8QqoGAaAbxQLHiz2iFsdvZGhgxDASpUP69Djx1Bqv",
  "key9": "5FmpS1gWdZawHEFdnzJVQNHVdhs4goLbBc7SxzWDnUQcxfPHhNRBnbsT3Bi89NcZA4gWsNH5oTu4kQC7tHoJvgJc",
  "key10": "3tXEarsrnDHqUmFAKZfhDzxWchfdEaKy6LkQdeY3mXLKEZY8M23GzcCJCwKCAEfcNuc4RReM6J4Dwd6b8ssGLVAm",
  "key11": "XLghoDVW6dCEVcVSfnsMZtEAxZUg8R2rWthbGTR1Puf1AaSEP8v3swcZNAFaXRkL3W8hmAzbJz3Fh37b8253FvE",
  "key12": "3Bmh3nQvZas333g5onJLcCm4KVge3yhEth4ARmh1D14VqnSsA61mibmi2PfqMarbf3geZLxMp9jvm5ZYxX3zTJiK",
  "key13": "5anbiqSmESsgcfri9NqifzSBLZyLf8CQj7SkrovTTHmkZGidckfmvK2NcUwgespwH8hrgLbsj2snpiz8suFVxups",
  "key14": "2NSwqMKDrkorNr82AsxJJMLHSXqZ7S4shPrRePFkqvoRXPEkrVNSoaoEnCvbUk5QZ1BFjmaHiQ32kX9MqEjvJM2K",
  "key15": "389wDRGb7DAw3D45W77vtxUSQVc118ofk9YKVBGkgPVf4MG7CPDSEYeVZSdjfEd1ZLN3n7YKiou2p2xRxm6zg5Jb",
  "key16": "3NmypmphWuamPMbg9MLV9hAtkBVKxNz5onuAtFv9tvYyoiZfTKMuJyjkXoZmYR5AYhpasxuGNpHFZTtC7gTkc1CH",
  "key17": "2Nv1yPnMD2rYA9HL5yjBCVN4rfAM9bUDqidjaGYv8uHc7cvdfkHPC8yv819534oAfmsS8w8CcDTpXdg7LRhngkMw",
  "key18": "4g53uPD88NFZZBbn3YFBcMRy1gDcc9m8NF2xT55ikzU2P2D6BdJwxpAB5DgXkD217uf3zzXnchA8QWDHjw9L9zDE",
  "key19": "5EUp77tgjJpjPvH9ZJJSaH5yHo5u46yyWDBYpwnyA7HCnLs3wFB9osCMh67cY961t5UwPVnLW2RAv3kSgKPosyYa",
  "key20": "hCTYrbXz77vFi44RfBGubZWbYc7cX2AkGb12dzhrzjKN5JRJ24dp4BZtRaP2SrLDXcZt4RDr56Rw5egRUXnYoPB",
  "key21": "2JjHeZPWiVUNZrWdHC7dj5C2Xo38dRpZoiBqYj7yo4rL5E8QtVthgmyPZ2E1CvTPgWVBxPApkbuZWyDkkEogGAn7",
  "key22": "dsJwSHNPofd1T48vw6hmrv4hQjvjExD9YuWQaYJj2c3q3cAqXLTXzJNKhEznz2PPMDtpDt9KNNnDttm57mW7XAN",
  "key23": "2RWFqJUzpQzhPtTEQrGemSCjbd2isiuzuqMjnMehKYjF3sq1ehJwBZRsXqiJogdVxWrVoHCDnghdp8ei7kfNHuf7",
  "key24": "2rsEtXJoq9eKBwj9VUmbHaiKZpt9gJvi2eKF1MCRY3fW1MqyFBNQtMcf56xsPHMATi4aGkKCi5Zahqug5jxBK6KG",
  "key25": "39bmBZ5MeBr9otQhK5JHT5pB8TxmPB5R68GKtMwkTcRsDgQw3aB3j77c87geHtXXe4zRjvjLUwNhhPAaa7qMEz8j",
  "key26": "3tkqLcfkvQVNrk17zcxP2mNJXAPvSxbB1JATxmaPq4AYH3JhxXPP2Ms9UbFsLuqma2xo29FDpUxc3Jw7UiCjBRxX",
  "key27": "TUH3Ci62i2D5qwbXdrfzX4yFyAV5kM8e668T9SqeFFfBMv4BNTzGvF4PYt65z7xpbAYxqQXBrBaoX1RPRDtJSns",
  "key28": "2YonMbVKX1Jsqfy8b24TLy39z7VVcknmbz5oQdmVmcz2AoB4VkvKsgBwDPEap77Luy2spwEaAGWwmESTTGZ31J72",
  "key29": "mV8s7uNimBMPkG55hQQwvSDeaRiPsKBfPpEq5T3gJXE8ee2cxnTMZDLHLCqufYdj1qR7Qkv5WCixV6RWoH3yVZM",
  "key30": "2TxWXsz42YThFFWuMgrSnEMZ7dSmWLZHAWTBC3TnDEePM7Giq9f11moBkCa2KLiZJySiNAFjoZQsLz13RPpFUzoJ",
  "key31": "4KpXJ8fpRbbcYdVcZ5VA58g9vAZucbZZo6aBkwphfjoadnseYg5z5iQsfDFr8oRQbdGKW7GXxjR9juRWo2hHFXgP",
  "key32": "Kq6gb31VTnUfzxHTiSLkHzoVUNiFeJQYxgmKJvz7cBJohFbqFKninxEiPQFEWgfJNkr1t9mcVYHdsJ13JkVw74M",
  "key33": "3kVPLB52onoq9qUHWbtrKoXhHUDmdZ91waoSUeJTybetwaU9PtPUQRjpSdJZjfAGPPj7JY3iSCTXWbeKkSnpLksc",
  "key34": "5tBoFRdNgypyHNmHap6nCPge7MBbqocLN6QFkGH6u6vaSsXWEeh2yzsysypiUnCQUi2MH9gu1dUwszM6aaux4wY4",
  "key35": "4tHExjkqPvhLrwVc8DZZmvkLVAcqfu9yQa9PKAoYCuaHPguELPkXR7G1ts9y6pC1QVPsBgsJrJYb8fH42zneduRi",
  "key36": "SWpKjY6TCHmjuuRLDtHdgM62qnumH7zsfJwbPdkZ3E4WqstELd6omN2Mi3tdQUZUugAFgb4VbgreioghZxowWmG",
  "key37": "28yM5JGUWt3GSkWpAGCJCaSGRofhHbNhF2t51Ec7WrxSMAoGCRdqvphFZ7yrRieQnmtP6BBU2FnfJ8FQZx3JteVX",
  "key38": "4ngUFTFrvM31DeB1mMirrgK61wGJumG5cKoek5x5Neoj2zPGH91JG8iEoTmeypjZnvQhVhVD8gzDj2y5tVDhCF4Y",
  "key39": "5oVPtnKqrfjBz6okKNkb6eQP5cAVGhoM7dB1mA4Uyt9msbNHnv4bA71VEYNYNTkBMH6muK8aQaoJipRoowZugLCE",
  "key40": "41a1EZ3hNBKfHJrPNZyDHpFDR1UJ5Zkd5TT3rVdDe8MKYkL3pkkaS6bnVz3NrEarVC9ZkHCnsRyQYAY88N2HMsy",
  "key41": "4Yx2dgc44BjiVnUauBwwxNQ96XEjrYyZo228HAkz2xTr7KBZ5o7sekRsjknTF246LmP9XRCTbJhiyEZGZEWJbeR2",
  "key42": "5USGxt3XL26tjaNnGhLsSMZWC2E6ayoZFgPKBveM3eGB5snS3q2oyeH7XqKiqVD1h2W3bfdGz1ETjaZxTEFmDw9e",
  "key43": "4uD1cnxdn4ZMGcX3AorRbEU5QmfWxk6LYTpoFcJ5qfZPsVKfZxdkWCcEwev1gQ9uyDYvSZU5gGV6QF9t68mRnw4S",
  "key44": "wc2tf9xzNCREVv4KQEfNnBLEKi3rGqnu8Q6HMy432dYFvXMT4Fq7eLmghxL35hXFK5wjVe52sUMEcr3omRYJ5xk"
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
