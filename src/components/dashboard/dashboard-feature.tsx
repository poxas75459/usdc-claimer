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
    "4JdtJqRukyTjUD9MRCLavz1YL6oDUt43cXqoRYvLgB1poxPav4FTJ9P8vZ9gcNsoLa4USfWWB3p6eZKtEWdP6fDm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PezPmg7sqwYAgkr6ioE6P67rL4DbowFt3qcqmA3HEwuXda2p9vYc915hPfaAQzn71r6FwBeBEHy1bUhh8ec62UM",
  "key1": "STTDWiqYHiFr2gYpeh8z4nLfPNHnJEoGyfQFDkdhhNHk9ffHkUbwtsMjGwigFyVtdWZpNFFgXg5YBFaDrNVVVb9",
  "key2": "nzfoQ17sdRxMApLfVrXe1hhnRrjkyGX4oXE7d8bCqTNLYbcYuRoD3zVoVSeoi1RFVnRPEz37Ea8wsCwKLTisG7e",
  "key3": "2Qa8TaogR4J5noC6WnWw3TXj51TBAWfFk47q3vtGdxgcETwsrrK6Z1PL5o5cJVEkJ1TYEdLUbSBjZnEwgALPigdm",
  "key4": "2wECn9nLzpwaJ3sfQZPKbWheGwmWPwTjySXvEjSEDwESAyxeejz1v4TswPJgcDYJW7PRkZukEyZ2qhrVfMoXxNCQ",
  "key5": "2iW9EXJ8nSEyJaZzviXvYHMySXGrzGkbZdgDbg3fUBSY7inv5XMMVZqsGLbQr9mZZ3YW3Wc4P161hWDLKMvSmcd4",
  "key6": "47BemAS3FyLQriv5o7VPrZftfZN5HXNZUqtFWCTssBJxuGZa81Qc58kDNoAvVEJLKHkAk2YVLizMTn1dbXLr3cFu",
  "key7": "4yxHo347yPtsznLYRKQ3CUuoY46mRkpshKaAqPFz4f2v6v3Eo61AVPHko9EzZakVuEiYu97d2ncZMrDiUutGbHiH",
  "key8": "5GHfqvmjD3gJc6ft274ftVC2JfgVVs42bupZoEvCNPUgL7r667Y5i8jAP5zStxv3bV3U2BoD8Ggcqw4HV84mnVKP",
  "key9": "2gviry7C5jUNeugd7u5JzWeaBD3A63xZ2dc7e7xKaP1jTCQgQcrGjk1Sq6QWDoAwbjD8mrz89N6LG6j2xuUQYBTx",
  "key10": "3uBC83jw8FSNC3YmJyfpaMSbatT58SZ5hf2YzdeLhP4LDStrcEoxZhUMy8GgkCbSP1vLTFju4nF5NrQjEZXFFEQr",
  "key11": "5RgxWc3wJPxDrJ6hrKYmMLTSQTmjZytR8oBXrJQmpcG5gAN4HuQDmdqPSnTWZEV2drwUuDFDb3qM23kNx8MRBC41",
  "key12": "t91Td9Drt3TZRKQG7YJ1LL8VywZyLMEDCAYDkGddwuAbpchZqjEpaJdbSGrM18b7WKsYpspT8ndsE2unsyTQDkC",
  "key13": "3m6BSG3vSp2zzBNGVcWTKzf1cjA24ebwHLaLUFHbmCUU9q6SfVA4TebnWf7sVkj4V6GPA8joCAY3kuPigpPHxuvS",
  "key14": "3bZFxuLYdqX8jsZxNHbjuH4zeL7d8xaYetbCNFe1osfvWT32eUKrYDsHLFjh5BYFdNbyun6ku6e4TsD3BDS7QRuN",
  "key15": "qrK6KNggE8CCtkCQb3m8hKauKX8P2JXjxTY7Y1oDHQyGDuQsgZVssV6Sr1vKERfJc1FwSbmposKrWQRk46gRMSB",
  "key16": "67Uzog1CrumCAQHX7yicSG3LHgxm6yvfJjekvLt7qtwxFUNG1sCdBVv3zDtXptKtVXd5TooGKsoVG9hUnAKJg3q",
  "key17": "63xmcEArkqrKWKAaV6xpELGejJJsiQ3JVGEW8wxnnx9NoZJsKGZH1DBLcLx8s1xRsmtwQteSVoup81AUywPJ7Q8r",
  "key18": "2FPbpTocaLECe96ngCE4DuNRZa9nxHwpyVBtv5qR4fxcGF8GzvCfWwYumsrcksaKEed1j8zp2NF9NxHFaus3GZnH",
  "key19": "5kB9J6tHNEkTSPeyrsopKsc2s5iau1VUoqzXMejt43dbED7yAodonxPwGKBzJJfJHsXpL944j1tfi3YSMzYaKGtx",
  "key20": "5HtKNdan7dHgbB45UbKEAzqB61Gck9u9DEc7Vs7BCPEmLwLz2Zee45axSkqmNz1YiVwgLsebMcisC2CG2h8Uxb45",
  "key21": "2V7PJg8bozwqtY1K3JHneT6Dyi8sTSUQpNNgBKpRRbi6GoVSrmsLuHEqBrNG8xdGT6CbxPd2zNEy1CMMqnoBr42H",
  "key22": "3PkDyo3egzVNbfnxVdFPG5SKMuMLBsUcf6sdpiWwU22EESxHvtSVPombAU8CUXSLmRgRrUUAGd2oAfEMZF8ZfwVf",
  "key23": "3qvoQH7QM3G8kyruQHu8aGyFYkQXPHssaKuDZN8B9pVn1pNkUxp5Zz4436tQTin25GDjVGyW2xj8VBR8GtHvozz5",
  "key24": "32Zs4jYmHfq9VQC17p1uQ6q3YUtwvpPGnDHVp5ST2PT3Pw8PeUAHXR8wkicHrU6qrksAt1HhJ2WpErGihK4eGXYF",
  "key25": "3o74PDJfGHEeY2Ypu2Lmzf7P4Q6QGfW7TuCG3NwyibLvfaMD2obY6kjiR5Mzke3iYcv2S9J87iHG6X72eCnZLpdj",
  "key26": "5hDs2AvojV3LLqtEa8cXFkgLiraZPLBBr2yo6HMSyG6SaNKLxRYMh3Sp9z5kQ8QCgTaqU935wJJgT6MXpKymVV4H",
  "key27": "4NUG4cwHQYvHQWniiW3qea38tPQgpFkvfoRCHj1hqzxTpkeTkLUzbi1ut88sUb9ETuJSmbX3aLiaPxuoK76SfB3G",
  "key28": "VqBLRMXBjrxuYRkrgorqi5ujkDVJLtBRYFpWaQoX8YJtjzr69rdT8y6G8hadHA3Xt2rMNB5zP8rz3bn1nBGA3P4",
  "key29": "5xEaze6bbYDfAfGpqc47vEkxLsYTndLZG1DAUZzLDXcnXXrxkNWdpJabX68NvSTCw57d1mBnLdXkFU2Vt3HWvtia",
  "key30": "677KqcduViyXixLburVDBTFEGC1MmYbc5B1GuvwNE93d97Q4bECRui4TS8cCpHfQq3LvcSZo7uKNsYKamygx6fdL",
  "key31": "4JdppBh91bjocdkSP76mt3MeZ2CjN58tAcNAvgdzgxdvTHfiq96wvcyyUUA3HLiwkHw7jTV1TxZSqPxQgHy95bdE"
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
