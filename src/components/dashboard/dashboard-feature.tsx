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
    "44AHi4Q2ZvWYoo3KD9w1obnU7SMfxKySNkp4qGHGTVxZBAtJE7v1KNC5Qti3DjVbpMgoHesT8TSVeuRySFcwAnTR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E5HRXDDaxU1gs5i69FJtrAvqYUVNbAkWcCiLQS8p7StmM1qeAkJAtpF4BtiFP2cotDGDnxiJF7SmaNUYzkgfkL6",
  "key1": "4mtFiTi1ZrAYYMYYpHgREDzjzD4p5yHCzthjWvuPjVEMRd491EfnpvLTvtuBr8AWUDd5uGEZbKCHm4MFbspXwJ1e",
  "key2": "4r5DZZFTGa2w8yxVfZEoxB3vP47EEK4zqFEYSvSRQKkpbq75DoYEXyWtt6bYMUp98eZAAAqu5LJBseXGTBkwVwBU",
  "key3": "4bZhicUcU4vL8adXKTrM1EL3FGNJbAYCMn6vveLYXXcsaSX9Y9JXKXjaCVP4BTYDPEKPdbRQwto49ZWjnXN1ReWn",
  "key4": "KLsWTe9XddT5q8uxnWjkb79cE1wjh9B2r9zs2tYoGX1qrNxAiCz5BUaG4zoAGrseBXDZpyAqYLVyksQXr8chxVj",
  "key5": "5XZ1g17okCSXeNFjxKzcmtNzkdjsiHJWiTCc7JJcTUuwfTKQokJwgiZv1jM8cHizRD9SBMgUBSVz1rqobrgzUYoF",
  "key6": "4HiyH7mrs8Hrb7Wf7KspRhjxry3hbnPprMmFSNu9jN1Bpv2ckwV3WQt4dfZqromT8C7o7uCCXdfRqtutUarn8LH7",
  "key7": "5Tek2BrVF3LaA5tYfi2FgfXn33bHv2c1zr4xHmmav3bYsEhUFhZum9g1xHrruwamxskG7SE2AVziz9gVKTdjhp7g",
  "key8": "1wuPgTp9XLeTr2EpAie7jfzwf2QnnKQpmuj8b19QVeCamS6YZnN8PzJHc5sdRQCBKsRai5kF6WGRqdH8g1dNSR4",
  "key9": "3mdpeXhTPt5RRh4Nfkpm9meL6G9xFee3LqkLWAULEBDH2vVSHvdvXMPteu9PpD2WhE6AutzuHsTRYvn7McGNwymK",
  "key10": "4gr8zCjjq8eLZvG5sG1qXWUijYM51Gw57Kk5yoUVX6upHSrVCi1DeNp4sNzniMVp3shthbAVWs6mdqtd6o9huUKv",
  "key11": "4yXwUVzzZzfEtuWG2gnjBpaUWHhgPQBApXU2aggcqGRDBNoqnzksFf8K8VxNmVUMuPAY7sYDcGdbjfqTzYSQihWX",
  "key12": "495yLxaWd3Uc8nwx2mHtpLSvCSek1Sei3PU9r7RGCvA6oaDY86pYrvbbUHF9R2f3KTHsHxio4TiY3Ea725WziaTW",
  "key13": "i6DiWfb8e7ySbaPd5APYpvNcUFGx6oVfjTM4bRBKH9mzUiPonp1UPR23mXdFB7M5ZF2tnnJhffz64zx95VFQtd5",
  "key14": "3KhMjtUngAuMpYhHi1kXZH1EsEpiPpHCW4z7u1vuk2ernja6jNhRSGtMnbgMiw34WqZhHQ4QHiqYEWzuriMHsgoC",
  "key15": "4GtLpnC5djRwx8E8G9JQZ9MWKxkDjyPHdibpVFCHSXvZtn6Z7Ab5ra7KzuD9ugYRuXGZafVEngMFtB4BA2SF5oeR",
  "key16": "56o43h4GKHsBndx2e4A2JsuSoVpd7Wz6qtZVYdswhK43Wwn3uUBJfjMBn4WueRNAmeq61F9v4CBkRNvcxraFcdeL",
  "key17": "2Pj4Md4LhMscCkJkxahCNniHmKE5aR1nSdUyye3EfyzT1quxwxwG1bnoMkJ1fNugoU8QreaGiMZgM9B8nFc3wk1w",
  "key18": "LP1kcK3zA7F1xd6xTQByPWU75jPKdbHgptefTRu4RdixBDiLg1xHLyANpf4VY9Vd9ZWs8KFYbrnftgGP4VakLXX",
  "key19": "2LNueE3wP8mQtpBM7MNAggKP2RpuEZQjKPKxnyCxoW9qSY6RDgo2oj8mEoQdC7avN7ZE9BbXBGMd9xoo2TgMFRNt",
  "key20": "sktM8iMX2bzCABZWYbnSB9GwkbUzJtorEDydZd5L6yWTXtHncDQpvFKV3LeF2v7vmsyGszC6tSLd9D6UL72fREY",
  "key21": "34t6wM3kq5R9ngk69aKC5BokjWDB2uVRZAqCGiDA96EdxfPhq4TWUPqsBCSSw3keDjx4zSMrRFjJuBReq2VkNGgs",
  "key22": "bRWe8KaW1aJ98KnwNcDmppo48SEAV23QZkvgJCv6U4EU6DyH6nSA6KYd3C9ecuxBTNzPZ8Xb3o6zsnW9Yj2rz6o",
  "key23": "3Qt6pJ9kG7KvNZhpdCNfE2BNezi9xKhxyAGeCUhm1ZYG2swfoyZkbga2e63Y8RBgJFfeCSRFvXTz9UBDTTMXkfiv",
  "key24": "5AKDBYeKrfHKD9uDnbWe9ztpz4s3kChRVJYkhYLHyVgwErzrD8nAHX1NstGVZ8Bih24Vm7MFRe3s76ZXNiYfJTWt",
  "key25": "52ZYPBJMCvJGNDrouQ2mu2b3oKbb4Hd5oJBL5JsoLR6vYNwXcgMpj4Z3puXcADtUbKpwH5LYuyLUau1MxoG8MSfE",
  "key26": "3YwiXHxpbVsoNV56qJDEczG9XGvaPMKjVetzXHYDhfTAVCfcH2TdhQK4s21GSFhCPXbLLktdiYxbbhPxihDkVzWL",
  "key27": "2wBSXucrUEQspEyfWKpcKY8pZj3o5Mw5qwrXVmRj2uXAf9u2SXg3nAt3nsLAzKNmKWECykeAMQSW4kXe2kniiRYq",
  "key28": "StQS9deDMRoujEYN1Sq4ipchqaqow3H1RaHp1YM2XnmQr62uvzCTW4Dvs6QEkSfJzaJ7F1fZ4sxdQ3Z1wMJxcTa",
  "key29": "2Hy9UKUstb1mpz8bBPtRRTH54K44fZofJVtRaRxcqDGAPte1x4wBkJhRAfj4UBkwphsUoQNM1sxfvYn7aJPdFK9a",
  "key30": "58RLZVRhSpAxu1JckdGvJ7JChs3x2MS6RePBPmL1ERH9WaguNvrweMZbLJZyetNBXdA7r92qUgcPJ98bfsrd6qwV",
  "key31": "5KWLWCrTKxgVWH1KqJZtwkcHMLTq3tpcu6HcB1XDzFzpbGQJY4uExp4PEJ9SUnsiafiPLysUWAnzip3fwkChrSJY",
  "key32": "5b5JV3NHbUKmpYYPy1BbG87exb2XBzdaKmyhDXz75oPHGmekCZ1SAYMQ4GfoyFgqYuFhQkR4Mh8K9Nxiwdh5vhNw",
  "key33": "4nMruPeu3cB8Ut3s8rCrSwJ4S9FrQ8YohUMHYCZ6iHzViuE2CHS9EzhazUWkXZFP7cPPq2Mrj2XioATTBgkbHDWV",
  "key34": "FZwjwfxAPiV3zYBoisVqmghBfA1bv6sFHXPa8eadtiW3vmipnh1y8qX1ZSPF31ovNcwXK9NnL9PS6GFWwV6bRbT",
  "key35": "CpHipG3itZvw3azRTsW52xBED9PrL6aKNTg8UtaVkRCAG5z8qkr3mD6QyvvnueWWanrFqqWwMRmMjBsBoQn814u",
  "key36": "5pH3B2vSbZ1iVkYFL5iMVULvwhWiUnFKUPB8HfCo3juJeNJzMpHFLUKMfjDdzpT5PNxzfQDCa48xzSmSPWcFTxNj",
  "key37": "2HQuBcKnF4joEwHbr3EehyhBRPae8GYkEzJmmGd9KTerJGGHXRUwFmruuqbZbn8zvZceWxqsV5cW9Z2r3uJqfhDA",
  "key38": "3haeZ9dJM4YFk9TfuYeTPNqoFcECmqiEZo3pzrkTFo5WABnitcMhimboeR3UC5mFzCSHk64nNwPwHmW1YMLfv8Ko",
  "key39": "VETJYwj5jJ7X4YbQ9gJqZES6TweywqBUxUjAeP71oexfhssp6XZVfFujVkeAnxRwob2FBcZVsw7EYVQW4Eo7duR",
  "key40": "319u2wUoJT2obK9PjU3JJVXCjviJBZJBVz75u4gaTpXkTkDhsujrG9hMs7p9qLxNsZGE2b5pVMwtF58nDmfD76uJ",
  "key41": "4mEmrDJjBC6XYznAdWCbBNxXhTouPSnyPZbuRthg923vLthN96tYfhDtoDgFwVbbyUXXkyKoRi1VYXCD4m5qen5V",
  "key42": "56DYcyZth2vaYmQ52wDe4z1ZR8gYuuEF767rYgZqesrPsQzsbuADGrWLjfj6NCtWxMxPzuEgNvc2Dx5comxnC7GJ",
  "key43": "2VvyEEnPyJQdnSrKGho53e8ibda39nVqYkgVUPVem7hw7o4F7PnS7qRkzZzibR5XYr5xDHnXeUTpn67nFrMXw6yT",
  "key44": "44WB7EHufVZkKSdnAEVj1AA7RJPncbqUcikS2DPrHMCV68erVTMZ5TNxRRK69gTUrZchMJQgFy21ppp96Rn3SwFZ"
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
