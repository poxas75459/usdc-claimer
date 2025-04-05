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
    "49pTb4rRV3ryTpMjgbrNAaZ2rLcdzHcK2xMvAQMFTaBMHfyQRSA5tVXSmofL8PmmyqJQCZL6pnNUBuAjfMLma74t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sR2SamCELuBmBxdwkkw7GdBWtNomdcU7zytRHBeQAHwm8LQiXqj3QfaphNeGh3d9ejHtK42TRucZ15EuJKVqPhP",
  "key1": "3UxzNRu6EdWCfJa6XkqxWrS49zg2ziAqGF4kjMkXFwRZMK91AssexB334RkLYEDQyVepf7Yj4YB5WpDJJ1rYVyLV",
  "key2": "3ykHCVEAFCdV4pX3h29CBpiwbX2uc3akH5cU7dzGQXL8JqjBzCa4dhu988szhApLEWuQNuTuASs1GA1nwNxMG3Hz",
  "key3": "3xp8yUoHsF81t5Muvxa4ZwqkmnuTNxGAM6njcYNukNke2kQ4bkVQo7ePtG6s5n4T7tk2trZpFM4r84qR2cLPps1u",
  "key4": "37cUvpTGUp9YZHp8Nr56StMt1Xra7sYaaxVksSrdCJsG1aKUTcKCn7x49yR8ELVH2jWrEVQf6ayyGk7JSMewAtRj",
  "key5": "2uoYUz2F5EfnYZZBivRKM6XoLva31JorHij4Y8pDNg1FDjAFvzBVqFTSzUGeC1v7ucf4ZF9ZkDui1wWMSAfp4AZq",
  "key6": "4a1RPQWHCAfUKcf6Z3ao4QwHi4qffr4D574gkDFUTUJTm5TKmkkev1JizRHPiwVSebwYxSTqCVqYJBcoByUyzZdT",
  "key7": "5zTz4xVkVwe6Bkh5PM5cwZR6aMUuKErLTWeFVyiTNnrKhn7yby6ESygCUJyNQf8rX2pz5yGYmixvqtUnAPCoGLk7",
  "key8": "4D1BmEX9U6BGQhUreMCvchim41hDknWxTZaAc6pPuJTtX7nXsZ5Ez3G86HDDGVZDSczZ2cV1bsbse1zq7eqsd62k",
  "key9": "41s2eyTUnSmx2yvVgLPpwKa1p2x3gKdcuUokNn34b9dwkh9uX8W6LkBF492LY3hXGVgFcJw3H1j6tRyyo8YoyNfA",
  "key10": "2QuUbvyeBgHgpxALGcnvtyyPFE496sXAC3y41FrmMey8FNY284zTGzTRMam6E84wUMtEqeQvvYHUy9jT63hfkqcB",
  "key11": "3bVTW61oujc1wHkb9EVY1tD1iKQ5oTDRKsefc7f5xuMrDGwdySXkvCFbvvuT93XNgDE78Kq76id2qCAgfQy9YRqs",
  "key12": "414jYFEanWCDkYiybrpuS8ekNvhin4KpZoo6dUQq6XSS8Rg3UZW3iD34QmuYQa8mFqzgaHcV1DFZCLH7HVRznvvk",
  "key13": "qoFRGDkEReYyo8UgXxjqvhXG8w7KywBjx7f5Ao61YHJAPvt6Ae4DM1WdJqWwnkjGC8EoXbgPXtDbhoEzBPk1EKA",
  "key14": "5hpA4tzmUrBM6nYo7rkw7qJ5jJStK1WUkZbJeANvY23fzhY7w8D7T2JDKv5DDRRogzXy2nZocu2zQqRMjrrJB8FM",
  "key15": "2DmkDUsRiodLe22rNNUCMnQvgukXbrjhSU5US58hnJ9sCTEasDWMrUaMZKfuztB6eZupJxWaNcgbbisBqgiEpeEL",
  "key16": "59d7heaApNHn5DjqHm9dpojFnr6uPT6ywF2jiNdnWC4qPKn7ZxMWGNnQb7Y8jAdJdhDKgyyzfcN3MtBiM44LRqQd",
  "key17": "PF6n4DXHd8WtUTdsn1qsNi2z8nh3QUqev2RU3PBf4NofxjQJuYcRSnpZkeXuaRqv2aq8pWBsACrjfjeYa1PtnRW",
  "key18": "278DZiFg8qtnNWVvse8sqDZiDmLNCiGsKRHvdKqjNgPgDA5hf9oFJ8pr7fo5Db3H7qmz2aqepcPrAKJEouP7V2wx",
  "key19": "4WytZuZLtgygBUHszuyMjeg2edMZQKEbSPNrjRgCBTRHSE6NmRHdr1zFTMUP48dv8nK5eLobbx4rM8AiMwPn7X4D",
  "key20": "4ktzPGDEQyVfmSeZavNZoodf6KzeRhHJuQ6tUUcUN1k3m3DdFDUjTJcC97jXdeo3rKfFe95346xDsx6qoMJDRkvU",
  "key21": "3PdP2QmAVXrXsXidXSWBui2HbWS1cZJQ38RQqmbuTSwtskR14DhxnFs6TM4XCRjLUPooBRNwJDndh5KCJQL6aR77",
  "key22": "28rPYo15p9Ds2nZJFMwRk5pwZqHEYFaUo1XqBChyVwsoDXcjPohsVT6RurWLSGXUZg6vB6rxA513eXmfNC9BLq1M",
  "key23": "4neFn1YoFPe7Y7DTguxnYjHWUMF2sV1TwEupdotGBxkDrD8RTku8GTmtMc8rcf2UNDm85ACV3F87zRHqsdbxfg5Y",
  "key24": "42XsdT62CLJLRxStDzLMMz2LVAu1TAzTBgMA3Jabv2Zc9ji5UsKLoeMFxB93UKdrJbHaxfCoWLnjdQATzeMz22mT",
  "key25": "5ngoMbACnmdVkFd6mua33w2VBEGK91gXgExhHm15ZqSNq8g7sbG3HiJkuMF1wwSFetekyan9nF8M434DitnA9sWw",
  "key26": "qPhCMFkeDc9k6KqVBfNySc5YU8GZ7x6SnyKmnLanuPohiEaTyzzWCWGmZvsvFW3BbmL3opFpvJHWseMxxEHmQk1",
  "key27": "ZMHhFN2WK4Qakg4kUCcUtiKtrSg7jWweuo8Ey2eEU5ZQEpMJ8eRNwiPHb8j8DZFHJjrHbgKzWFihTECRCjJ3J8G",
  "key28": "3U5ECpVQnu1GLv1pLw32XhnteryrZtQoLZGbw62bugJitLRrDHZ7yP6GF91GciR4DpCD4CQxHWZXZij29DJdBMCb",
  "key29": "3pSRe3CUKz6RzwSV3GrKVKL6MFg16Ab1JS7w9mwwcJf98KmUEWYCK4Zc2tg79PbCF8N43vxgUD65BVnZ2t2XtCmk",
  "key30": "4spQvvqAB3h8is9jpnd5byKPP3PQEHWiisea5ny7KZSt8Z7K7roXCwdxXDWiQMp9xtgUpqHai1oSv5cSCw2fUFhd",
  "key31": "h1mo4DsFNiTto9cEbfBh89414kTAtScWwHTzxjMncAAjzEMfC7yiFjMwnMxHZrEZ3VdbtF3oRDxQBYNrtLS8XJq",
  "key32": "4qGDVuukkSuCc213kLL1557bfeSXH7joNEqjoHDVxamTia9TmEPhnMoVToQKNEHmo6aFFvvuqu16EU5dsc7cSMQK",
  "key33": "Moq7JSscux3Jhk3AixY1QAtmTu6xLKoJYjK95MB6AXXf34WEF8TEo3iUVip2JKLbLGa6fKeaLTeZ3NwH7ibqmot",
  "key34": "2t8o4uG5L1XBWqsLig5meHTNVpRmzKcvuVeZBM9RuCSeLq3Hw9DRHn55HggeC91fWvHphh8xGHFwVyYttja7rqsh",
  "key35": "4PmyFtSpw4a9LArehaMbzHgU6sjLcJFca7ijpgaY1d7ei56nsFxg55gSBwRoSSo9iGEMrMrbSp4fYo43CmvRa6af",
  "key36": "4sNEqriBh6eBDkJ9ychWEByUHLmrvu3zm7SKReJgWS6JB2GtJLt79nexJ7KWFKb2aJ1Yud68yGM7dtTSCs6ixKbD",
  "key37": "2prmV62BXWnt42iYrhHR77JVoztPZpv7JYmwx7iA8i4cGbc1MtK5crgGXsL5CK8opjz2kfEuCKBrUTCctV4iMZVw",
  "key38": "57wGr4fCCNV3wKP6dRTLcSPMursos392jvyuWNETBkzZcgKoYpWLqqp88cfGM2wHUWCdpZzUFKzwN8nbNfaR9szn",
  "key39": "2C2b1gRDk8rtyhsUHZdQB1ekQ2y6iSfpDRBvAdnCGvxUgTsKLaPy7Ttvarnc3CzhjckctP3gvyvTQfRpPu56vhiN"
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
