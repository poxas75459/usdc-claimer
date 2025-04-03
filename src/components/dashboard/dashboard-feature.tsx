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
    "4RneB49xS2M34BqeYguqjJF47GPms2rSzn4NwhEQWG93ATHwAYDpYxVpDh8JdxbRbyBnPGGzVc2z7JRr7w6CKknC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vYVGKCJLdjVAMzPp9ht4eWhaVjW89zuuPyNs84jRNMsUidfK921x1XJAEJN3FeptWKAqU8174H7C4onFkQfMrgr",
  "key1": "2U49eVVqRaMaa3sZJk2gtVugeBJMwinvxGLiPGEv86nZoGYbXHeU3oe7SWreTGKpPkFFydcDw1ze3Wms8nuRaYjf",
  "key2": "2dfmzLFHgFU2gi55VihTfD8fm8SfDYQ9zmVprJup1rcGvX94AW5LJYzJczVD9YundyXfFfo7r4dRpsbHNNdDSBNg",
  "key3": "5Ve9mxiLReNu2s2iqDXE5CBTnv8e2ah7UUp4ucfKa4hunrKXvctbSDkVz49weKMJuq5d3WpaYpSwFdkqVGC1Fkqi",
  "key4": "44DMjE2nM86ycx6kHqeJSZYdXGpnNNmnFAfC83qz5bMsuDWUmXRZ1ti8NDtsvgHpNCNbNFdbjMe7ttXDbXn47cyT",
  "key5": "4voxCGmjDi5fmVjXKMjTFsm2s6KtQLhE3rPQ4kTTiYWdAwsKfepGHbPrtbET8mpsD7bgZm6yZySeGkaTT6es48hD",
  "key6": "4t3UkVSpVaJXknf5LtW1QBbLWP5tmM8qF5rtW6Vat5S1qodXFos4WHXGiJEDDrN9HnwWoLH2kBajCXXmKRMWDgSV",
  "key7": "tsyfMzcZnTo53oB125SwztAMMnxZkWpQnzuDqA9YGGkFdndrtTbyY1TtKa58NAc1hYgG6xJ1LQd38eiow3Q51Ha",
  "key8": "2Ws8KxtFsfX2hBZCWnsG72u6WaZ42CX53NpmufWXrQaMxLn2DtXPJFviTNHrPSuBjpiX1SeewKreBXsnV18YBjUa",
  "key9": "2vejM5qK7PXodRcJwPv9pci86JBKYQzLZmg6cauju4wT2hrZfuJcjhCmk8kPk1ozuutzepwg3xcaALuhkmHyAPPm",
  "key10": "39o6Ku12DLJxcvVSXgkq8iiWwkNLVo8DfAocFVnC5dG4YZUQDgUi9nnpsGEsnc43bxpKJMq3bBeDLWypCjJDhNbv",
  "key11": "5Vjwb6HNLVMfCpuBupi9rANpVebrbn4ujvZ7FEgXEdoXpiA7q49bTaS3fPKM3zfhTVMwTAu3yyek8nMLMgGc4kAG",
  "key12": "2TGTx8V1CeS1aJUZEdSGkpfXxLYX6XGy74S3unPieqc5C336hpPhisiGEr7qkxsQs1VzrQk3ZP7kzVvPahoho5MH",
  "key13": "3NaqboWCVDVFFW7MCk5VJjN1RPmWFCxm7PnBLruG3NoQ7U26psFUgxvGXNP6YvYPGhADas4MtGMZomSyGuH9vXCA",
  "key14": "LnT6zaYZ9XYtsMHLuj1m1FbiPsmhbiihwnZtRkBawgiiwfK8yupnRBXEj73QwFmomyuHLy8Ao7Uguri6UwxXszZ",
  "key15": "2zxX45r7UQzv62NK5SbCiSSBFZAVg32KKMyBLiQgpZEHsNnFn7fQNqddqzkDu9uTHkoi2tDqv94mTvamzMtDWT6j",
  "key16": "9r1aSyMCzM5qe2vpJzsoenXmaJWdotjebQg5Efbw8ZFYe4R9pM7zSZdntsoa6DA81QcbFUPn5BhdPVTdmZSBoEY",
  "key17": "4KQhiXm9GNHeZYgugWAzzobatr4rGWAnnqvY6W6jcWvhBoHNiUf8Syn3NyLNUR9Q7nnyVj8Gq5ceTwV484YSECH5",
  "key18": "3GUrgMvVW54SUGL12Ly2w6vPTUe3HrCMdcMQm1F38VsMQcWmY4yr2AUQn5TZVFf4goQ8LSReynynJxqpUhujfHMm",
  "key19": "3vSJTPwMQgFHidjgTAoQ69oyDffY34LuULx2EyZUfbKUpDaWSDNvXbTFhhvpbAJvjbRH1Z4KrT9VtXLzBNuu2hVq",
  "key20": "2o8ck8YP9zq3kRhr1sMY5afGfM5Y8keGTf3n2QNFBQ2E8ietfsSzP5wDeLnFkg1AkvFbzMLRA4Zwnwp7ZJPEm9rA",
  "key21": "428pSGSTUqnib45HnPgSHEjGD5n83U475tFBhMtt4jjYsK9pXkbf4ZhLaC7B517kYQkdbLXdTCeYRDnoQwd5YNWq",
  "key22": "4HCNJZ8FTg5mmCz3RcW88setDbvjmQhzXiSgNN4AaFddEmgXww7ZyVkK75ighxBjEFsQmWYpBgvjXskyRadNRVHS",
  "key23": "doBt7D8ooFyAhU99GCwgyza5bdQZJYPRVqUWQCf5ZqwQxkiZ4QGPSXP313FtCTdv4fQfQffJeNkMfhGYhx38cNM",
  "key24": "uf5UZMoamYKzj1rPC212SGs6HL8nhGEWD3ZMTvY6ckN8Gbb5gn8fft8kAZE6zanCe8BqmQmiy6YgYsT6idkMoeU",
  "key25": "39BuHZi6cJSPJPL4JZpAm6z3S8qrBVK6WRsbDm1Z8PFtCjpfuTfHpZ8kwz19nqXhTFLHFkfUiepz2UEB5hnzvCuW",
  "key26": "9FUngZLDsFMxVMkrs7fDMHuQwF4QQG46HQv7TwuQe17S7sMjUCfHAvs8PjFP87qvz9YLuJ9NdX2Pjk8wvDyUzBV",
  "key27": "4NKZfcqT6cjyxXpUqbgyu526YUstUV1HD2pkFG8sDKUzFL2WcfsJZ8iXopySND6vBt62zFEUdMYr36vdm3QR4L36",
  "key28": "591jdu4cFgvg47Qoi8NaJn4HXVE5pgbU6GvTNnNBFSmpfnVScWR5ZLv8BvtAspFf4D185QtUc8f1vdxCVoUyGrh8",
  "key29": "32CEWCFcLLXm4JoherHXou6UdaBYKW2UCeQDZBC9qNhj9bpyja9KAvTJyFs77saSAHW3aVrHsgCYoXhdD8GRxbek",
  "key30": "4eYXvDLUGmaYoRz6GS9EnLP2hHaTQ7hdPKU8F1uCW4zeQ3aL3tn2nHEZ2qCF8Sq3K423TsbrotHCREkTK6AT8iwX"
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
