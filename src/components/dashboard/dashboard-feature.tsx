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
    "4w2vDBVbPaQ12BbNNJycWLVrWTjB2Rmguxny8DD1KPuyb5BpWQHBYWfijPqxL6JjoGZZwTovHFmBMZZ3aXjNxSN7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QCF6Y3NzHMSYQFDHH75js1VeeiJtMLYa2xQpto7ojd1eyDKsVofCYc5asvEMLCf16ZC4XJNZRdyrtCpsMVnktNd",
  "key1": "yNz7QoH1r7sfHoC6hf2zAeuBT2jXFo79qrBetsX6u6H1WHnbz4Hf6P7w9mAk6176mpiPznEhkvsXafWCZjEozdv",
  "key2": "2pVcCANZtAHY3oQghhW3yBSDQimztdewn1Gbh4DsCmbvwFnauZ2f5vEqXYiqXUzpNGerVv9eJ93K18HyVojPwzY6",
  "key3": "3DWgCyuKfnTvG72DFR1CZprtfhLrNHVoQDPEvyQHypHWHyKFhgsBoQP7rGmNiiahN2h5ASoNiFDSSFEYdiam8Vay",
  "key4": "3CxRpbnaM5N8pgb9hjRTZhWf1Wq7GHDvEP8JE84WCGZj6qNs7dD6cxSSv5qb5gb7WVazC4He64AMPWiogTxs6sMC",
  "key5": "3qKGey3AKEXLDo3urMJfdNVtstKZjciNRqMfHzVTGJ73pNqbZqootfvFHbstk3YG2DpUw8qGVAAUJ4bzJ9JeRaWv",
  "key6": "3otGXvppHt2X1s48S5s5HN1TjNnX7Bd4qHi45sAufb3zdTzVwZNRgYmsuQYxpjFfDiD1cPxBvaPFfXQmmiyD8j5s",
  "key7": "2qRPZEkuJptZ5fWahot48omwjQok62MqNgAKajrxEoaCNa3vzbkkwpnzKwN1CdnG67ZwA6WxhqofaQQvTg62X3Wk",
  "key8": "3RDnPjUSUQeRs3mkFxKVL8BhcSsKhyjaSWLPbXGPPQVB2oaLoJS1ayXob8vpjKWLq2oXbBXidFmFxfA735W7qAHc",
  "key9": "3asrSvZCpPn7jwXQBLVgTdMr7LJtBuXXff3e8w9HnPyicA5sR9KNSKB2EPcKoiTF3hosyU8fAeg8c8pq4mh5FuZb",
  "key10": "BUyceH9P5SNshzgpLcyLUPKsYhZvQGyk2icvLyA4HDPAiptzebTP78u9q26gHbEK56EcNvWWPqH51yY1GZyRkKK",
  "key11": "3FmyEy3qy1jbqBXB34mWprAo6Ymm1G6NQPArpktWALJqvhjhnExZNXRyoirgbNYqVpHSVTzJgheqvMHnKoaizkrz",
  "key12": "39iSixvHd1m6BxD6612bGLammsgYbNZwgNkmtzjtGa9hRs8kdctVtBTzc2iFzBYHZ8MjxZ3VuVgLTRHkPpqTTDc5",
  "key13": "kmUR1mJ6F3b763WpJ4SWBLEGcUCDhsSBVCPH86o6AtA8Y6GTtM94MPky5VSQLTTFZpMYtMcEgJ6ooE12Z4m6NhG",
  "key14": "5uXETrWJD7SMeCm7aiXYJepN5rHom4UF5VUxuAMjcbusFbxkJPuJj6Yh3RBmKEfkGtiJSCATC2RxQV41CksnFain",
  "key15": "4v7eDRZYY6AxZLS1JdDA4VaBTLmrgejsvhLjse3ff4wQH6hzhxa2rRVMFqhzSY5So4y645ctVK46uu1EWWi1TzE1",
  "key16": "ncsjYcR1jy3Uq7ADQ2jGAeHS9ZV2FPswAbqGo9owZ5sznoEMJV8kavM3yFv6qKsaWzUMqwsiG9jVP7BeQ3UkseH",
  "key17": "2hk9tpE1Zf4c9VwBKuVtnwcrBRqPe4JpegrXeJFTbBYWRbdAR45RyDAjbAfFYi2NsP8avwwiY7g2mrYrcDaw8Uf4",
  "key18": "5mAyusoHV5mF8R7STamhnHbmuQDa9MPrZ9tc94v59LeiKKtnKtxdWav8RMpwQshYRdMXRHAe6A4uRhJQt1GJcPaR",
  "key19": "JnEDdZQWjjvUQLFjE6gd3z8KEBGASPhcttp1PBV2ScK7bUnPzVLgDyfTnP4kXimchXV8pCK2n6SEbnnrq9ykkTU",
  "key20": "3qbr3o3Fjg3gewjszso6XyQt1pPegnLfwFyeoKyZ4QVKUDfFopzGQcVtrgD2y3Q7oh4gWyGLsF2rYT3tg94z9mx1",
  "key21": "2JSazcTxzuCCS2QTCKeZUAFjBwXKmG3Bya7gx8uJr6N99rUGsCDEWHx84jW8t1LAxQbSzhmmxJaDA43TUiKL2RU",
  "key22": "4bYuh6mmq99MQUTFzVFC9wx9QchBZssdPHRjfNRiFiGxGG38gDGDKypYfLatFF8449MzZniy6Jo78KBokgwrY3TE",
  "key23": "56RL1HKea4hgQrgUYUwSpj9pc9Wa3fYdyXpyqNHCpBBCCSkSUoztGkhcdFL1dPS3w5wyaeJCus5SGtrLETWN5SDa",
  "key24": "61hw9iUTBfTorzou1R2aHUr7yGw3swqPnLiFzrreyYp6Y7iHf95AQXdHGNoJAaHN7r2MjwXjvqu2rd1ovXZi2zXg",
  "key25": "4Pje2YmaYi293H1gEn3mFcYErPFo6d4ZEQ4AmyEs2g9dRZrkPpesFP1rJLRYya1Y7zLh2mFEnJftrwr9zpPEY3qX",
  "key26": "5QVgjRBq9hBv3aMpiC7BxzgzK43k87oevWRMUZLFMFXtsnNtaXrHvjMF4Qiv8hpbRNPMbJsPhWD38Bjfb11ZRrjM"
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
