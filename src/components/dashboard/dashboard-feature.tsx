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
    "24PydQ41tQoBmzqe8wxb695vTKU7j1aEVvRfEovmwRLkmmgpeR4xS91STTJ95F5T7gqQQ4ZTEJYZFsxa1outuwuX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "237FJVEgYkm6AERENXLSgYejph6cqr37xU9WmqngsSTmU8P4Vyce4xbGTGqBioF9e5yz1ytuvvBbnQJw4qbZVbtt",
  "key1": "ADbuGRs5GfDgkS9CwN74m3Ue6Q78Pcpijy6DDWghTNo4P6Wiq5tdZ5GC3HNx6HshobKwFeg89FcsC315gBbrrqq",
  "key2": "ZyLCfFyh6cay62TcxDWwkKg1rY4gMgza3sWaMKpswbATWjdD8Mf53h2uCr2t15NtHmmuRDvUrzyeqifF1rW4tUt",
  "key3": "3ZgNSjwWZETUhQPB8sNwd5uNKwF7oGrFJSZzzJh6BoikUWhmncSXW7EAuMAYEX4j8LxAU4sUe2ocEeRWynigVSDX",
  "key4": "4CmJRzTBWZCRRWM5cjLBheudS8uniKc9pfaDgEow5DEpbwYCfyMc3rnR8kL1A54rYRCC9PzSBqxFautfH7dxAyMU",
  "key5": "4JkAqotSBWvxfrZHVQ6G75ywxBGWm6g3zzN5NnWxT38L2b8pRhBNxrWh5FKoospHWyfnqwqRX6w4nGaUzFQ68DSB",
  "key6": "34A4Rp6xDjka3P5swx2VhUZqb5tB8xMnnRuRicsT3Kw5YXE8P5iRGF6hatYRp24Prtz4Qp1J5NdKnjpARG8Fo8Sk",
  "key7": "3QFJRnZmzwVpwU6sWzw8Ex1uMdCNow57f6EPy65rvGVhxvCK5nNGiMrFKbXja4ZbBFMD1JAXkhnDJJp6mQsAndz8",
  "key8": "5YD8d89xdKaieyi18yj1KnPpeX7TPL7EEZEFHCnBJVgYYPfYGMR7u2vJRtnYso6KcMzk14Rbcu21cP1TZxKW1QRM",
  "key9": "3ghVZe4wx4yAQJFNBqr1KfCEwKW89MQ7sDEcF2hajunkcV1DsR9JMX87a3unqAm86fJpnXZAdgkEoCTbML1QkNep",
  "key10": "3Nvs6S2ogw2y9Gqus1j71tN8SpDKVSBgwUSzyGu7dZ4mkBmYSXV98JkgDBtvCxEsVbVqwzXXqSzKkSx1Ay6PAaQ7",
  "key11": "27RZhfjbEeRUyDpcePHuBckfXQTD6xxs8q4sCJ7PL8WyMDSV9PXzQ8EjgZ8jDDLsncYPcqQjb7z8PmrthKg3fftH",
  "key12": "63GjiL47Y5kHR77vEp8JuDbJ18ZHUs534qhff7xiPuF2vuhmMRTnEpJhFY86G527C4Bw4H2Vws3FqHeYUjex7J3b",
  "key13": "5Gb5SppkJKhByY67zroBAeBFMs9FDhLa4euhjBq6UDR1a6vB7MhxSDwa62DcQK1RNYwEsLczcWb83yKUmrLvypad",
  "key14": "wSVrZkKjn2RQDK3r2mSrpnhuwZKEZgwWVR8jnSRdmwDmMS5eZ8QHeYQaoXrn7iciDW6xzxPdqoJynR6xoCD23ir",
  "key15": "9CMokRsh91pgkFrLVWd1j17MiE8cJtkHTWq1gu94JFy4KAkzQRDUA1GZQosyEtRga5BERQBeQ2Kq7ym3FNxwYwX",
  "key16": "4yNCSEAgZi6cYPGyA7x78pSSvJANJmP5eCK7MKVswwNvPdxpmFMaGSMwaCWUFUQL1vNDEVZoJwb8Dx1M7oMETDZU",
  "key17": "z2QTd6KB7ubbxj2LWU7yJQCgwd4B1CmZQt3LHeAbP524WMhBazfyzuLUVZkyD76gwfHdASdqePcWB4D6s4Hqx9u",
  "key18": "5NdXktWXBaah9PUC9bZ6cA8UTYTq5nYMoVpm4XFUU7WpotbnYZWian6upkzXcw9tXCP8AiMp2mNH2JFX4Z1MLgPN",
  "key19": "3UhjoEvWd1yRBJ2sE5hgkcMgvBWrVzdDiroFwfJynMbWGQaMmzncqKwmgTKqy8x21r9KSFJqiMqYUeNPhbtn7f1H",
  "key20": "QVm1g9U9V82ihdyHGY1ZY3zyU1daSDAWAjd66riRoQvSxxqQ3VaVLdmHbHP4Mb38S7ErNywoupuGbpEazmYy9xF",
  "key21": "2UiRZaoUJr4uMyjSxNcFpz2tsEL5arkXCTHtsV45RHH5tDF7t8RwXphJqo3UwKADS9MdZtQYmeagyMQTw6xD3LY9",
  "key22": "EE54HYsqEcNtiqE7GzGMt1y1qayDvNavZ6747ykt3HL6eUjixes5obQhN53AGZNoYFj75bc12WPUX3PaU6TkwJP",
  "key23": "kn6LowVfSqR1DdEvq5L4ngWChwcMVYf6hpaYQ8FcRusKT2b2MgTKNnmLaKCStDcxdteU1RFDFbuPQGPQ2Fvo2YD",
  "key24": "4S9XtdqKEuvmnmc4euRkhjnJrzAr79SXT48qGZU1iLpRJiVeABEYQS5SQPAB9aDcqiZKPVvgFNuSvVVrpe5Mnk4x",
  "key25": "21UTxXHbSvFLsqCgkpcHvndb5HBX23cdCRhEZgN1eR6yNV41cAKiJ7zWQBhNty4oXoN9HqrsLD7EDCX5GFo37Siu",
  "key26": "5qPd1bL2YKvA65f8GYE9K1jmqhfdzim9ttp3PSFk8wH3gJhw4CbDRPejrmYW2jnYvrKw361gJxvZ1CJ1s3Pz6mMC",
  "key27": "66ZSnaQ3XCNadji5hnNFJeHLfpnQxE6Pzvegj2xeTsYqaRknRJUQcwDwtoVSyPfWPTxjoqC8KADmWFHZwE6c6tpT",
  "key28": "2wtTKt8YjkMRrHPcqdkvhoEAJ4U3KqmmHnqjbqXdgVQn6EdVsBg82qtgT3kUCa6jGCTD8eViJzkQYR7rEDLhmoFN"
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
