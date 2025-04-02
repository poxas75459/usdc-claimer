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
    "Qd7c4inGbWfWtk3KJtuT2uCAhCftVWN8KuM51FAXkWNi5DZDWrNAnmTUF7F7JznrMNRKH11gXEcVZavWXBanJom"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KfxQuJjFpuM5kREtUE4AHurgvB4BCiVMxKsSnYWrfL1CKngLDFpbSdD7Jq8PmZsvczwWPGa7ppj8kjRorPU517p",
  "key1": "hubiQfk2ncfsqM7345K17fsMLAijQ4xcN4kCVik7mRrMZfzGANtZxGn3VSTZim62CQayw3maK52Ze7qUjxw54ZU",
  "key2": "q41wNYUqevvpSVYxRe2Yxz5BqJzAToaYME3VGFd7WLmJfvs4yvnE2ofWESntd31MkapKWHjEr6HevrSwnQ15Vmf",
  "key3": "2nUp71SwPYnppLQ1AEV3mSHj8jEhCe8ChWUC9Y7BFrw6brfyEXun644vTeRvX3bSBUMHdJxZH1awXUjF3rVSJeWb",
  "key4": "34kYALodP5uGWKCZV1wNJDLtx8sSX1QCqmdiv6z8XLLieSp9QFWnjHHYrervukPwSDKfZoL5i8X2xjNENPs2Rcpc",
  "key5": "2jycaD2qDNgTiGMyg33y45UNPseLAJ4V2WuLTzJ5NdsTkJSxzGPaDxSNx7d5BUcDHBLstNDdNzn1w52kfpeHVn7S",
  "key6": "gUmmks1aV2Lnx2seDoR6Wgb36xPJdhezZs71JSK9NapPX4uuBtJEkZ1JCy6LEJ4ZS8L6YfU9MqohDRTtxhc2i34",
  "key7": "2djSiukM7o3o8TgMV62kebmWFRMMGukGWp78yxmWHBuZ8yjn8nWZW6efaRoQR4gNjGcnCMtwhtJVYq5wkZGVRoV9",
  "key8": "5FD9r1CgNVXLYVC4GPbSn9d59pSMgEM8T17YqRATjK9e22h7GDGd9HAGGnJZ3x24xoJDwi4HUvmHtoADndeFRkuo",
  "key9": "upxe6ELWwNxufo4AsgBTCXxJfR1hsXz3jvK4xLEp3wpKGxjcoNpYVzLQszkwQvuTJ3KUWjDsysDa73kGzZmFVJY",
  "key10": "HAiTJV6k8JfnSe6nUJwPhwSy9Abr3vXoDMxL8KSCWJKUGz1xfzjry6k1A9xFjkVnzQenGXi7EezoeoYk7SLCwC9",
  "key11": "5mGh99BmF6SorHxLk3tS14vELeNP3PDABWNFWjo8ViHTKraGf6kTjUAqAGaJkknjFi7QfbLnYnajusED8rWeUbRh",
  "key12": "33LwHq1E2VNRgzhmP3y4UaqE1pFcmPVWgtjjubbFET1RYLqkA9di63tot1L2PanpteBuhgGGCf2LKkBv1bdsj64x",
  "key13": "RMtw9HDjPtCsBWtACXYaVReRmWExaMNYte1LqumErCAsKZwEwqokddGohRKnvXHPP7UU2H4mmPyQ1d4ZJZwwEA6",
  "key14": "5F7r4JFbj7XTnjB5cAEnXEMA8jzw6Tjgb1KcU2Z6WtLbS4QcvgGnuzugS2zfzePXF8zfYu2PK8pBFkX9JePNGC8",
  "key15": "4EvB2NDRcBW6Sw1mKEv86spsrx2WsNnVM1fEL9uJE827S7pYDFhhrxZFmbuaV5y3gNkSADEtixePBFErbvLRFwHt",
  "key16": "5nUqMcChvjquB4a2SXvkxsFCGiVnEwMrwPFB3hoCwrbjLUsgoEjB2ioan1Pv9tNhBHhdHNX5PrH3XAqN4wamqcNP",
  "key17": "3BrNFrqcS5CCnzFNpxbuDjtrzuwZcfPK84DcbfYZe6eNPBJzQmCtMFUBjKNrZKE46V967bzK8khAFzq6PY8tRkBx",
  "key18": "hUCdBkLvZ3nxBSGccEkNX8ygb3mGqnuxx9MX5WQfyWcDp9FkTsT2Vp7wcX2L2xmK6cpjTNDaQtjJ92Ry7aoLyg2",
  "key19": "2jvmDZzJoumkR947H3XQg3UjskeiZAshzhns6r2wtH2fomJWs8upnhvtNZ8vtpBfLEX3bonGPeJG5t1DbDN8CW71",
  "key20": "2Me87nDx9PgK8uyke4D8mGQAWkn4Fa5JGqL7GfrTHnK3rMe1nmQSzJtS6CFoAA8u2SqjGSq4LvCkcDFaS4Ciqdqi",
  "key21": "3EcabXxsrahkTHEBAhGZvLSKZTGBHRfee2nNg4FFQNj4ZG8f4X3qZF2kF5XE37j2Siq8ggLv3gbm3ZbJvonQ9TdV",
  "key22": "48ZDFuF61tjTZR9yz3NgB8T6267o6mwATGApqXU2aHwtXtmoBc3fcRrFZcFp3CR3pHhmwzfSi2G2mk4Rm2oNFZUb",
  "key23": "4Xd2L4qt1n24NGX61EJVwpHYt5fHdD14EnwCtG2kKmXbukdBZ6u9haybzW8bhw6wYgTiQvEWVF4ZjH7gJKvs7g3b",
  "key24": "2aNCNbJLf98XTeHcJKm1CQjjkB3sfXbQqXXCGrrKvPJcBWiW8DMpT5VpixLZBPWizZeyebSfW3hW4tfDpS12ngga",
  "key25": "5etza7kyosHzBJDXuyi1ZJaXRqmdAv1BZADrgSPMLrb4nLNvyc1vbhBTSpqyHmhtEGu11jdnyfsgFzcdamTW6GFk",
  "key26": "5VksVZUMz1eivh5hBNq72nfKCBYTcHRJuYrN54fPdLtGRPeq7tiKoW5mXJaUzsbnJQUxZvz5FMes5jkPFrriQmn",
  "key27": "3BtHsGoqiMii1uUZJwmA1E9sJWLK1wpAFr5ZebwqAtxYRfR4C7QLigAU1dpsHypk21zdPF8iiTREiEtVhRL7WMDo",
  "key28": "5JhyYkCycbhPFhprsnu9dncBzQsLc3PYA4moi3WEmmtkG3PkfBUvTqv2y8VtkaWDcHvkCttKdKo6Dao5MJhYQHLY",
  "key29": "5sj5AwYn7539WU3H2MBKmo1gzCkhmCtsv51zRy9FFrkQTtLPqMs1nmDZiBvobXy5HqqpwSrMt2BYgVMPG4HatV1o",
  "key30": "3s6Cyrtc8KssZb85F2mBBiUHSKervfKTeJub9RiDdW7qsjbhjDokQLbQo7LakxPAHneAHqRJHPFz5UiYmL5E8c7P"
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
