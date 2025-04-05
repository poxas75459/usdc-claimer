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
    "3dKg6N6J7Go92K9Wq6R6c7Cka7MZCq6ebmUN7kdaLqusvJJov7Pt1zebJHWmuLvXz1DfJfkutSbUCGjHroW8yeZg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48GAv4S7B9tRh2Hd1e5eqTFCfAgs8rbst5uCD99zpGr46c5fJGuJaLDdasxozc5YDomweWf6v37m8KHPqn1jkWft",
  "key1": "L6Gveqd4S8DjgekrDE8sJVuohpXygR2ZX37wzvJH6ojmRouVdmougixCdcFtQWAD5mFVXafM5YkjXfzf6TK6XCV",
  "key2": "38BWU88GwkqUQZpSq41qNPq1ptJa42WadS6RG4DK14xUd2qUMrL4GFfZw48of47N3iLGoEK7FRejz9LgCyMTkjnL",
  "key3": "33fkGQaxQCB8VqoQiVUyZdi7r3bvXG2GpBXatLBjTqEz5FLycXZ82PLdP1Kc4fxYZcuHefxbqeXMiQAhFHWZrBRg",
  "key4": "4TkpmmiHs79UdSuWtvWBkZwzdBon1aUZp1gqik2cNxvGypCXRmns48BrZciaEqzm3f6Z9e7r59DMRLbitmms75on",
  "key5": "BxkcnQ5ihfEReqCEq53p3c9Dh7eySL4BLewGvVTLXkg6hryKEyVba22iXyp96WjSRX8DrvFvnP84akaK8Fmr1tS",
  "key6": "4r1EngtBiuqLYSeqSA9qLEKndae5BBpvw8EAXRi31Ttr6SEPttNuUJ7HhkdUsz6B6s6pV23bwjryvg1GMQSHZw95",
  "key7": "4rB3rZde6YLVJwyLk17NE2z4UJZtobhJ5pyqp4B8aHeTpFjnWM1un8hNkB5nCt356rXy52Egm8oaqXNpKmtaUkM8",
  "key8": "3PXTTkPnf9KFUWQJuLJJJU4XMZSrTR5SQqN13pVsCcNrJC2PcGRaxLPFiyfkPtHvd9iRWSof9fmhG2b9qtNmNSMn",
  "key9": "3YoyHzNF9tk2zb87iyQP3NtpVFdiZ56Tkwgn61wjAaFre2K82z9bLeY8JNPW5W6AoT8VTXbPdMk5WLkAwjiHRjcY",
  "key10": "5YQLFG4SsUXEWGrpNYtJs1gZXPnftw6SUdcwmaknrNCRCjtFU5UY8CmMvPxwkBDtgmAXdAvairCwQmRg5uDJS7Zn",
  "key11": "4gmEkZuhYjZWA5WkUVvfFk9wCsdUEhVSBekE3wpXDubfBrDw5zhCLrFQpUVaYB9tCg2YKbK2UsFRTqWn5tfVtm3V",
  "key12": "RsDgHN8wwWaDmisvYwzVGyXQ9DuPormVX9rzSwJ2NRmQCnbYjoNKNjmChbDQWreKTF3rVrmHLV7vTZPQJTdkpTz",
  "key13": "44LqYh1FNApg7rGqbrA6P6NjaMkWNLrxSA5eJa8W2HENCZ7Vn83nLumuzQNic2dozZLeFmidACwWwiBkgXcYguyU",
  "key14": "5eyngohJ3Q4Kt1kdYWo4Fq6wSH9hN1m9H6EY39c96ZG3jYapHAdg6vApBrbC6NNuib9DvaqGxdv19STGFnH4RFF",
  "key15": "26tVaGunVedST3nTtMkVJP1EPMfMeMcEYJ81BRUm2hTR7sFQDqYFky1BtN7bie38bVXXrqobcwTLta8kedik4iT8",
  "key16": "2GzbobGXWdbb6g13wx8ScorWP6g7ryERwc4vz9wpuJ8YwKSc6oU24TCneZjKeSQk4zPYvK3zefLJNuH2QHuSqRNq",
  "key17": "3iBqUurf2AMMiYS4hvDXwQH6rPrXQWg2hA6Lv6uVFtTrYNVGnjMDi4DB8oekMi1XHUougy9v8ALv6ydMoSHyiet1",
  "key18": "BshMpEizD2q1f4SunL1nxAdAyYSFZhdCbtuoTxjMoTuUDCqFmJCzfKRvzRLf3DerUndAK2WmbZNaHd5STjpH6wJ",
  "key19": "46Lb5YouzuJUTTgew1ttJtZMy1UkdaT4X87sg6DNvSLSEtVRkyHuEZnMDi58W1Dkre6hz6fYBQAPiSLTSoPHi6pS",
  "key20": "3sjasVDX9xtyQF5btRE3egZhzMqmai8zzELE9fwwubCsaCK51GYXW6neVUBXHFCtw2DggA3PWQ4fWjdjesK4Fawk",
  "key21": "3N3W3DyyTqXG1zsnGGP2WvBvB2X9VPWZLcwTsXZT6FbjtNAA6XdL2bbrnHqRmXuJiHpSeRUAdGhU4SrVWin1X7DA",
  "key22": "2CKB8BHanuUBCeoSz3E7UjobbW955tAoc1ci2195smok5Bd6PWiqWpAfyoy7LfvkBpTfULfpzcZX1uRZJxQ7iRet",
  "key23": "2WbB5uWczvGcsRyxPsSED1NixvXn5iEYB7ntnuBCqz6Xbpgw4NehAZJSr9YfbZrpQKX1Cfq9PvuzQmM3s8ERVp5Q",
  "key24": "4wewtByYKyxUy4FXxtZWUSCC7B4euXhhJYNCtASCygKFRbGUz37Z29zxH4mUtcd712YtjoNN1EgSZikqi6178JfJ",
  "key25": "23XhP1pbNDUSpcRTL7yRpcm9VBBPqeixP7qgKReiNoue7UdmWrmGi8GaSbHfxxYfgXyi7N2KWY7i4bboAyKS1PFt",
  "key26": "5QvbvTRPQEkdFh6NV66yiw8H5ahFpmjmGms6bGRNZYrw8a4yDtwchWAd5SseDXP3Kw5NWDddSwDjDDrmBk3BAQXt",
  "key27": "2zMCuT6DiRyuwvYhidxtmvFZyNPjEKsukVYtxhuHRBH9KgXfE7aq67WgBbmaPgB4eTERpY3ZzQ4J2VNcd8oHikTh",
  "key28": "4RXpHhQmb1xvWzYNFxXnVbGXfuxFArboT65qMzDHvZkR1DHnbeZSDnjQRiquTgY71ciYi8rt1qnHJ8DDB4NQxmnf"
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
