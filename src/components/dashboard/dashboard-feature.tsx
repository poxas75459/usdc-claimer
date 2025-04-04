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
    "3skRuv9C38GRhXZHXt8Dc8vPYVo2VR9GSRTgqKSPrdmeBk2oDYCaNuaimBCi4XxMZsundNCNeg8F1zJjvuyPSpJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58QgQR3b2riA3PSAcTiEkKjtTMfzojPR5XMGHS2P969Gz8KHmYntUEDRPDdDgNSFzaURgXCEGmv64LCt2miT2Zu",
  "key1": "gGcNnvW1gC7baEkGHJzeEeTXyvYBguT8yMLo1ydzrfujSznV1niZAsLapCTnBFkrcYMjV3a5Qj27enMwWrwQsTo",
  "key2": "3SqVkNFMsoby4ZvEecGouRYkg5tTkZc83BW1jvWPHMTXb5MyWns7ihCL8CABEHqAE8TLRSRrEMAcsDSA4CjEf9aV",
  "key3": "2YGeRxG9HGxQQ8mUeCc4ScyX5ZWSHCibRrrBPX2sjcEULdjgM6mV8dpacL2xwigAbauaV4SFM8VVhnPCikHVvb45",
  "key4": "oxYuFjY2jStFXaDv5zPsJ2MRc4wbuAqsamCbUPZxnx1ot2Hk6KJcsHTmiLbuPJ3SAjwM7aeNbmCAthCg4YuWhjr",
  "key5": "5xVMmqHJdeE8Sq7XS5Fd41mkgzcq9sgBHjeA786TKAbH219scSaqC5sDX7usUNZKpuenkKiTVQq3mcZ1LpAjy7Pr",
  "key6": "4E9QVoDoLn7c2zUxENZ9JUDaeTyzz4WSAAVi39fFe5X81oAt7CumR3wDX9zmKfgwBR2Nv1SGLbSuq8Dc8cJuK9RF",
  "key7": "5Zx9Q41q4FPWD64SMHivYUa344VEDdWCtGJ2HcU3o5YefBU76mjVtnCqG84unm2ADhrMMBXyZd3Zaoe1KAN9JQDJ",
  "key8": "5cNBFL6yWrgSfKaJGzZcySWvFbHp44pBitmzaz3bYzgokYfMFGWV3xZuajYVb1pjtgESSYw3DpQMmzMzN3uAdB8B",
  "key9": "5wUe1WdHwa1iDG859GMmCJKHm3fQLghdaRQeU3ujkVEy5oExMLKWwH5FxZE8QFmhcZAVNotwSZeEMPrYkRB98CNx",
  "key10": "H4SZxaDVwUrTfabLLAYPrSmPUusBSqbEFJnVdCPaDeZmdTzEByvRM67WK8eAb9YzWjRDaRQUrGGZQW59TUhto69",
  "key11": "4NrEFVGyfLm9rVoqA2nqreCdJN7Xy4vUfcSxHVKqEJZczHJ4udyaBTNGTWhkmHeqQ3ihdrFXWFAUjp1t6x7fXr9m",
  "key12": "tANBs6aBDEfFraJiC7j1e2weuP6SbDxTTYs3gmiJH5pvSDs5joMUjnj7drfWwVory96YB7rsokkcUrkQwUaoBtd",
  "key13": "5TG3CcdqzpLdJUWHZUnbqevJCPWi1xdVfemSxp2kUE1unvExVzJNCpq6n4ywJfacegAVNG456zrj5Rj4T67Lg9rs",
  "key14": "4mK7AM3H42FzpQKExbiiqYMf5BzwDcGaA5y6w7VtnCyEKAvLRGfJ3FhUQsEdxJevBao3yV5AHRnVwh6UQiuj58hb",
  "key15": "2iHUtXeFAH8MNE6ozBw94VRqPHbcBXtZ2w9E5NgPWUq3hyFhNduaY1iUJi9KDpQ8WTB48tajj7cFvFDLmyyTDM2q",
  "key16": "5CFfMiW6wG3qpV5tEi42nKYW8bBYac6X91yB18q7XwkGbS1PUW51RzW3VedppHY583GRdAazwjF1w6KcWY1JNMdZ",
  "key17": "2LyQvMjJp4qZXtKnkKm4rAq2puBRDjb3XVMVNbbCc2BguiUgab3Eepb4ZyoH6KrNkcZq7FC2w5tCpusefpYxhtW6",
  "key18": "4dSWNV98wSkVpRzFXPNmCpChWzMepCJ3PbXFPZaJ2C8kdpfA6ZxLSio4NBzY5CQHZMJ2rwqBMH6916U6g9U2MK6b",
  "key19": "2b9FLXSqpUmRwJC7YfLGAyyRve4UmiA5wiXfnq6JpVh6TbZFZaNCvbmJw8HBNfD5cE99FXxd2igBKyabcuDLbpyk",
  "key20": "2Y8iJ9ipqqDoFYE6cyab8ehjsod9V3BdPT5XxZuBsm98ieBdm97FDb7mYL6FY6DprVJtDnwqSfVt6xMuvfe9pgMn",
  "key21": "MsQCGEWE5rsGEv6PeBhDvwV6bUmtW2gidm2cjsQZ9jADeqBCdRETzjMPg1RyQvC2E3UJbuaP8zfnQDyEhyEY7pX",
  "key22": "2mPESWzyFQjQSh1u9pEWGstTs1xSK7WBTdnVmWXUjYNwJXjudfgFTd3WmyYpb2UFMmKZzzaudPRQaG91pJpNyzLN",
  "key23": "47tD2vwNdGBE5Kxd5qqvwpQxirhHGWSp7sPrHnvAPHZUkhEGPHcLHKo8n1xgXeP9yepjGGguZN5uRb9FGnxiNqtU",
  "key24": "1B9gVis6jAP85DHzDQeVrkdztaJJGTTHaWLcWVmGLDmcu5zYvuR8Mr6wd1fR1tzmxBTDm4Pdh8tTFMqfpUFZC9K",
  "key25": "2gEb7AnntozsftQ8bSEqiJWSTMQFAXjqD77aK5btM7wJWgP7tSmT2QETUkfbGUruABXhZVugdwzEwAZZPcqjQCWz",
  "key26": "3K6R4CtBckUU2HZSY3vdmUX1JNSF17Vjqu5SS9Azurg8gsF8cm9p3XkdSCmEENMzsy1gopS7hVu6Hjms4a73PQZQ",
  "key27": "4QqVdYMwSmvhu2DRZiGKZ2LLsyvRUUvqaNoJnVz2b4kypJyZj65FhdaWgKP7CaePVdChqsujWgXqGiLwnAUTBXCr",
  "key28": "42YEki9UP9CB8jjep4U9iKJo9cdCUytquBRgLv1YBKgopbtfVy2xGLgvr7XJM5qvqX886kENDhpdZZ396M2x39jR",
  "key29": "4Yf99hxaR8qAqzPz8JVNn2dZhi4iKktc6tTPodsvMWCMdoFfdzuSVK8csfN1PWmBv4uGdG369QB5xXoAC7MmfMoK",
  "key30": "3FeGR38AiURWBwJS2UjABY5HA3v5a654XK9VmaEcAf6Hq9rDU1QFf3QPX7z57HRUHzUsAJG6pa5QwsJWzoHsUn29",
  "key31": "3swDkbayJ36XhUXGmQHjzhDVJhBTmRWTBew4GfJVt7E8vLzHrLh1gHE5Tmfv715g9nYY1nDwtQNkNDmtYAsfdc7",
  "key32": "4vqfsvcLFjsbg3erUjY3Sz4WU2wjm4oTg4Ps9HKefvjxLnbTLHqoTECH5Pgq5zV7z6nk3VpqKT2gMJaTaie4Wqa",
  "key33": "AJvXN1oYwonJFKqGgUxJzsYzohFooVRvkw262Rzj7MVtUE2htMtEcUtqMqW9PgLRN1U8i9oEEezySokcnMyd1Bh",
  "key34": "64FrHwY7yq1eGQHpwx9Af9WzaQwPENX5rfSwCf8teVzzW9UxPZWz7XrFLHq4GE26ZHezCmmTiczPwnFMbZkq4i3F",
  "key35": "3YRzGZYzuiP9E8RhZdDatmmhE7KkAfgmo7DaEXpJvqJ9BwzxdCrqypqaM6AqPheLYUtTJD5y4LduJgAx1S4ZoSBn",
  "key36": "5QQv1sX7yGKfkW2CExbemsxUYj1r6cdjs2b6yJtgKYXFaRyUFUiejRBJL55vdQoh6hyH8YqfVwrD3keKaYymvfgH",
  "key37": "62EvPB9TLHvHzSwxBAomUiFy6X7navsK8KVkUi9fKiBRCY84XCU9c27E5ZJeSsGJg553R8wqkzezU7X16vqxKFww",
  "key38": "3djJADtuxCuXnTB84QEGXQLVcbmPVAvUkDt5k9rtegz2EBF96miZs5N4CjLoSupmbigdMwLWYmyYFbge62GFpg7W",
  "key39": "KdP3vKM8Mf7rZVohxWAzLPpDYwvQ8dR7Q2rDMv5maYqqMd4XiXvKM1e16QwAzv6JfNrHCSUoPGDzctdSXf14Kce",
  "key40": "4cBdXHBCUgxMi1LqXstxeifXgAXHiwoofXb3pUD4F1rotFK25ddZE8rHud7SKSAYA8zKLrPr2xBrWWig6HgaZkc9",
  "key41": "814WLwAEYNHJrnfVWbfR7P14zLz7tvTw3VBUjHvKDXj5jK4p1mCjxqpjJLFqjrDyS93zpQ1ejiaNGwtdeeWA5cg"
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
