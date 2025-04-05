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
    "M9P6jwqY8ihENGRQ4ht4LbE7JXeVdvqJTHAuMrwRdtt6r3xtszjehM9mKTu2pYunkXtWnQHf2iFtYMMJShLJzu6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bgXQEvfCYX91orL5WLUsawC7gm4uwbmZKjM1hoJQ8LRjiBHoqMCbzqdER4JeLMukrWqukZV9wofEdtUbvaT7REp",
  "key1": "2VjwxYCMVEqXZcskWatqYJj2XvvNBvkU9bvMZyN38gPmuWW5xrFu6nQDf6im3kPCBtHL7Lfj2Xpn9RDBXQjfbM1W",
  "key2": "znkwGXQ7xqigeWSJM6XhEnRTwXXuVAkW4FnGL6LutxQinty2peD9jAfXZcUwYAH3yNTrexsh8qP9WYZgTDJnAHu",
  "key3": "43Zx3ERrRtZM8CyFzJUde8zffVoLKs2diMHtyxWbst85FraYrmpebRKHwrodqZRq5zMdKvVGLzNLJiUGEQJ9fymY",
  "key4": "2EaQuJcT5oCacx1cwjiBAZdDJws35gjhCjU1R51UdnWfhcfENtfJhdHNCZCu8Hqzb8H9UYvxCgR8ivdrAYPXTKPS",
  "key5": "3pj3nxhQFKjEqhMkni8h92jbPktX57Cw41ikYSukUcgkytMRjCU6ycWVEDkA5rqm9b1cY4fG9yZod1L7HRYKBfHY",
  "key6": "2pkcJumuu3sQDLsWJh4xwJz7LJ7crTctxQunLvHSkTGhwrW7qSW39kv8C6Zszzeu2xmwfhRhCfVgQLiezYKQ5YyD",
  "key7": "tgzV9GxNfKi3pBMHnmFKR7LaQuTz77pQJaFqk2AVHJjtPVi1sNPaE42amBWR1kza27UrpEn5dMBcnNskV9WZ5JF",
  "key8": "NGkHyFbYpR5xPNhkGp8SoPZestnwbcKmc1uzfmggLAsk7TBWRbZLYSFS1nzz4A5BR51rND4HXmCsG8rhfDEPgqA",
  "key9": "seMysGGHbUkJArfmERGDvBVZynH8GXBHd4K2EAxv77PZhWau7K8bX3fsKXxKJADSHttGobX25Vzj6LjkPUqGEfw",
  "key10": "21CtzhfhxzG9SkT1Rp4gi6avvQqAvC4XN9rQFgjAXKFr2SEN8DCdcW6RLfnqHmhukqByQFtYAM5DBQfn2WETdY2n",
  "key11": "4NJapX3TcXdUynNQidSxajjesNha45G5NeT2AkJVzUZMUKW1zA4m3hHdQP9dZw3B5crVFkVSkoAV5n9xZt57noLu",
  "key12": "5ucTXPY66eX8e3eYPQGtq3b9CKQPyPGsfkmUf6C6uTmeo2wZgr8ZJkvavLxy712ngQ58xByVkyDtmj9mxdvDNeLC",
  "key13": "dfd8gHWj774iz3KZvpxVtcUx5uufUQjTKpptBKj5KowaazKjXPXvjggNjLYdq2JN9skUGY1zSncT5BKaunN3xs9",
  "key14": "3wxdLLckRBVRKTecBY8rhNUUJtcN7z7fYPpJpiCSUkBgexh8DcKpoi7EasagiG46t41pUaDxweJaDjbRE9engrm4",
  "key15": "4L7V51rPget4EizhULm3KWxSNrom9Fr38htkL37E8Zobqw3PTtRAcArH5z8LTM5ueVtNaxabSRi82wuxdEjxjtPN",
  "key16": "5j9s1L2skNVgxdfo1q9rptWFTJFtDT3pYybit3mU9MSEdnHEgy9qh4gmcMJuzyoUAiWMa9H4nTPGnmTskDMyaMJ8",
  "key17": "T57H2emFeHETXvnkgENxc1DEt2A9QFzF8SuaMphq7CTycLS8Nv8dBCY5Krvc1WPRaGpEQdGmyDwJUsU7HP9VPce",
  "key18": "4R34sk4dXrHgfCf8r7cGzwHAvHNYgzJzEhq49Q8CsYLHyL7MpkRJrczeCm17pGwXf4besWFNYXYY42ntTPGvPJQq",
  "key19": "47yrhRfGv51PT6n9KjAPmLFb4GPAExwAbUZFCguZ3hgyjZtyCniCotRmEWWK6rBdAjDdYDT4TQfbbuUdGCLqCNmY",
  "key20": "5YUtDHnG6XNwf34hCwiom5Ues9KUHDKSzkbQA8vkJ9JwDC9R7vLpNJetMS8a4vPd4s14EY8gfetXkaJAWvTJXaaG",
  "key21": "5JwrmuTVoiBeD3SJXdgjQMyHP61DXdZTdctoD3yzzt8HssX9WWsCYbMkeeo9ByntfjVDGdfyKFr6ciuA12xWVLrq",
  "key22": "413B7pE6eeFxy5t2zw9yBFGYY6nTnGJvm1wstifvDH2pyT4aruR9gWjy3yssD7mXEvX67DJChXhPEeS2ZuhKarQm",
  "key23": "4kVKCVVAGGTzJzHmkYC5YCASBCQ7u5wkyEQT7kvZNcvVUWx3SUD3J3p72f5A5A4ws7yF6rFuKmTpQbZCwgDqv6VN",
  "key24": "4iHXssG1BLrBCxtP8aT7ErVPphANode2JKfB2psKKZPypGWEuE6HXiqQvoqTdZymwt95hdUfU1UWBDE4ntfrFuzV",
  "key25": "4nYm8sDgKNCL3FaXHKQtotH45PPNvLnKyWZFyPBEBNYACCEN7H4DeRoV8EsP3tGLeP1x5U4QA2hZi2qBg7QoSXV1",
  "key26": "65kB9UFZjphLggyexYC9ddm5VeCzRR9L7KY65zWwfyqcPirzzxU1cGsxhujjhDcq24avyv3oQJc46KHvVurnKYQm",
  "key27": "37hGGcocagvKuT8eyjRiE4SYenFegXEta87tcUXqdp5uRcoU8vR5BFV9qt89EJ2d2n3uP18Mk2RJi31vHJTaZZap",
  "key28": "5NQ658UcvXRwuW1HbDDESV4i56vYWVU1ZDPoxEXa8uVhMhM1Yog7HTM4Tao8aFpw59MzMWaASobDXRdm3PdPcGgt",
  "key29": "4G7r8xh85PCeUL57MZ7wd9xFNK2KBZpaSYrAGF1tC7YeQudjHPJfzgwnr5sFRyYD9z4CQa79SvQh2sESAdBUQpTz",
  "key30": "2SzmuQtQ17Vek4yK1fgMtgEns1SusH1tKmAdMpGWiw6oFfStFxXahpWQ8RRuzTjr25rf6DcpSdHfFqq7HscPKcgu",
  "key31": "4bsyanfA1Zq65skrdzpe6w4nc92ccXJBFW4utWCrbTBP1kr9M2n4CBkpuCdLro58abCZ531XiXctSgeqfRsXbnfK",
  "key32": "64MQy2bv26VZRBuZFtJ5AB8cvib4kYnpzXqrVaPi64AjeCyyX77VjU1SxNM9kbfhBTvWoKancFiz2VExVundbmkd"
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
