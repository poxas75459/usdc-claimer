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
    "426D7Q32fYt2Y1zm5YHJWCN1HE1P26yGRJMorP8UQVerZUTfqPfhkGWfAehF43EwaYTkdMDzyxTPEaSTpVuq8x8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WU7RUdnEMShKksj4AQwoW6XT3MiEC3EsN7GWSvamvEjeEVDamEGrfBoPxaHngrMhpsWuDkSDSKUixot33kdxjmT",
  "key1": "3f6KA3ghNjwpkf62TBXuMo4ukqk5Atr5qYdwwLoeDYmfSdxAXhk1JVB7v4T9uCk2fbCLJ9wd6Ejh4CNXf1eVLcd8",
  "key2": "TG7BWfHBywAgUdUb4pNEddjcGFprC1dFB3tW6KAvjWpKSUAFZkfcreUhwAY5dPRmGuWq4sgCkUwacXaaRftMg2L",
  "key3": "4Yy49VUwRdDWbxTWXX5af1fgx8hMKHCss4c9fjvZdC9Ugb44hedASBpd1UtDUnUR4ANUZZPhMEDiXTpGSpiU3Lmp",
  "key4": "4QvnJjSAW53mkkY9mnsCLZBttncC7Wvh9uRSoK9Yn9cHFcaid5Ay3V5xHtvz7mdeQhTGxzmaeAorJVpwR3nPk6h3",
  "key5": "21YL7dcxBe6GvvvkqfVJpWsYQgFfX3kMybLykpFzMGUnuMZ9F2iqaB1VzF1XdxKL93s3yxrRSiZ21L9tGzSykGqR",
  "key6": "2gx6p65dN2AmmKBEVhG2YKcMqqygWR6xgEWdaymkrzfPXXWC8KtQtipGxomc3q6cE2CofKe27RFmmjQzCFWoswPe",
  "key7": "4zLaALbdgAwttGLdHeX5S15Ksk1wXstoycW9ZRQ9xtxhvvPMGs1RtPk8vDRWwXsBDbVGzvMr4ipaVDpNzVTbbZua",
  "key8": "2Bocsdqkrj9VQrSmvKhqq2NjfUNUdeMcvUAK2Zye6prjt9RHLBAgW153JbAKcrqM9aAoN7AHpUJsxYu3PA5VzyAD",
  "key9": "3cVxD5hJaxcUsK6BiATaZQruMoZyi4YNTCb1MTbJk2T2pgyYejDBRvxKQm2RpioZgAp8KQ1xhBUF2QJr7XZyTth2",
  "key10": "4fBezXeBEC1qzxcSYo7Mh4F9GdaM1mzbDYBVNBd71kiiYfo1PCRCqUKjRzjvXjPpX7pULWZDUFBDsVYgcbh8WR7w",
  "key11": "K8M55baFPvrt53PxDu9MuDdoR35rqPd7L8B3QCzC6AFZ6kGvuXX9TeNpcf1NsS3bv9dakTxWTnb5YNU9FimtDQa",
  "key12": "2GssNhey5nG2BwnkKdkbSVsvdFgieEaExpt7yyMECb7yyN8EJXRxTMS6vQLmKUhvwn5hsSohwvENjRrzVYGjTxUA",
  "key13": "5BDSKAwfJHWzhDacmpCchiEbQJcJMm57taHb6m8CitaGr7h7uGZGrCkhwJ3ZELQ6KPjx81MN9UhfsWb5pv1XfJBM",
  "key14": "5jwaKKkJNMH4Nbo4Hxc847wW7QCMdGLaJktDgTwHp6Pcxdvs2yuj8nXEXuNeBpKKic6iAiGzjgQibcnV3sDsrXpR",
  "key15": "39EdSJTbTXYQap9T2HkWPGgnTQTpW66joVMBizSqtfu5Mx5jXHz1a4EaibH2UGCkTRz9Nj5frqiUZRRTXdqrY5nZ",
  "key16": "Jcjd9JQEwWY3sh3QH9QHyxN9AE3zmFRFtdzXm1kZMHEKLArbqkU4fyqK4hTTdMxnmvS8ssHkYecGPe1CU5pMqvi",
  "key17": "2c6pSNuAK8AFhFdUND8VJtJyfyNgk3jWwYekqFbrDEKCLNXoRRrfMtkk9zfTFkGu9E7jRnQ8HaTETeMgq7GAMWpX",
  "key18": "24zKiQrNi4UhWyVRvDDzejJpA96qYps1AY8Z8oHzUKqfFB6hju6XuWURBK8ptUcFo6BAgdTw999m4k3L3NzQfRux",
  "key19": "sKyFJBvVuozA1M6nH8UWTu7t1JLA7TLJt1vodDg5P6BwW2Uv8GPAjCswYJLspykU9dzVSV6uvaLGKGMBL2TDZa9",
  "key20": "5utuKnMJiU7TSFjRaf6oYBrLSufcB73VVxbymbvgWYYcHfoCBr3z6pLP26viHDjSSt5e9iJ4aKWpuEXeoWv2tsCs",
  "key21": "2k4W5UMVQhjYgVuTip4xtaisDoJStGFzd6iP1KuyFDnHhFfUNFF8YHgAQbNssYd269wddTUiYYRTNXLapih2RwFg",
  "key22": "4S848eeYiho72D8LPw1xcBbCnESxjEDY9CccP2rFoqw57Dzy1jcJphy2fnDzsEHoRwWU29s1JsgzM184cSDyRdi5",
  "key23": "CAUYHX3Yu4J53MBCfion16WnDdNxJ6ShNRrhndTaaJwFRYuGJegw7zgNszurPupJtzaLUnvfqKNyKwsSr6ZJeKk",
  "key24": "x48mpKJ9TALUnQaZPGo63sMq9txT7ayvwjh3ox3Qo8621g5j8vWpSaEV4PffzqAXKYF8JGnQPvF848GnCjmY8aY",
  "key25": "Kr8RBsx2vLaK8pPqe44piWgDLz2adyYdRqtzAfEcHwyzHorM1guYKcE8PN9PSPCDDBDaborgPRsHUSSwCVMotJi",
  "key26": "vKTqH3CpDyaBvi4Dskq8PAsN3iD29JHGxKCPDCAFvbDVtFNmhFokXuJBBmipGw8DyH8hMFY7L1cfTLrLWPfw2hM"
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
