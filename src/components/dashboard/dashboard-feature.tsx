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
    "yHqKTry1LHgpTMhR3yVFVhwQJrJGvSAQoyaELx7VhfCXQ97BPHPMHsPf6gk4UNTqy4QTLjT2Asq9w2Yt5JVFxap"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hN34KM4trfohJiuUQd8qFFESb8c4bXgjfUpi9oHvi5C1rLpTXZskye4oXgpCq5RadEAGzhDV4Y7HStXnuRbo9bJ",
  "key1": "3Hcj2en5XNQzDAVXAVATZsUrKSoupFomKacSbtr6Ck5RF4imZUKFXgqp1NoTYw9hG7tYrhYRyvpphw6C9N3paZTb",
  "key2": "3h6REGUb58oAuwNDthbB4hwgoyDqZXNgu6MhwpbPVoFr8ztYvSsyJ8XstaNe3maZaY2Wtc1kwxtcCCcb4nvvV2C2",
  "key3": "5ja22ZsydpdBytj5s8kb5fYGEcK8MfDPM4par9iJuzy8Rkywh2av7YTeP3yKZVmMsnyLPyjENucrdUS58ntruXj9",
  "key4": "5JF4gQGchp1Gc2QDrdkMZumZHCwWXDver1YVHwqqYtDiLVYXggYiegxncAN8McoowFv5vWe6EYhYks9C47TmC2p5",
  "key5": "5du6qH1vbeDCTB8EQb3kW76kcf4Wiy484pEdNZBT7ty214dZMSATQ4A25FA3afUR7DJsAB6sKB3xGstYnyy2w34e",
  "key6": "2pmRuP7ygELzCq1GazE28t7j4x3LZahVZeEgC6L48p1sFg2gCZJX1KKy1K7WZxo8hmV1efz2Tv5NcCJvbnG8FEjH",
  "key7": "5FtHoo31qeGapCmCiGNXpoeMHREf9SgwmfiWo1Ua2g2k1fH2AQtnNWfzu8Au8tNgjyF688KWDMmGJM5gJX1SsLHz",
  "key8": "47NNam1WkrZrVtTBWLdF7KMTYTx8opT1585PQAusL7iZFbEiW93uLCrvHAXiYFKU8aKak1qPFxE3axKBiFCCeHFT",
  "key9": "wRkYrXuJrxfrB1DhUCdvwrAQmrKjrA1P9QWwDCZUBsAJtTGXz9w2d7A73A2Ud7H5A4XttNzVqZ374wWER134Dzc",
  "key10": "3x5QvCuxyxoHkwfiB1KaCdHLfNYqTGYqpGKq9qTCktRTjiMfHKjEcYobJozitp5cy418SghpbnLdG6gYmAbNz4bm",
  "key11": "2oZ7ifhxbBLtdSwb5jorvxecJd4HJLZWxCsKKp8rrB4yR63kzRkmmfSvh3BWtEzX6BTb2KLjfZzre5eNPhuasuG3",
  "key12": "5va59gWfc8s7P93khSpDrWijVmEdZm1VuUo2bt38vv23ofsjJwxoYSh28xRk772QTrYyeH8Gm5uahPGrueuHFbGy",
  "key13": "4yVGcLh5HhvW1LYFVGzfXUWQiPe7pz1cdBdtfZgCZqBpFyvzXzRk3JhzTeE4HhCi5vyYxJYpd3mhVSXomZjWaMiB",
  "key14": "3zKJFKQtoC33KtaQy4ybf6cNdwkvWTgwQdqYM1J3yEcTGBL9Y7EuDPwq2nkhnp7wdpBnBLv5bAvb3Z4mhZDK2tGa",
  "key15": "3fJGTxdfSPkyGx4NpjXhiWD3RUwDMz15PhiCj2dfyd68QAHCSmYCnjtio6RQUeJ1aRnuW9fgEez7myCVHiEMqRxe",
  "key16": "2amfAqwML8MtBpAq6uRQ3BoZy1P3ao7GUBSgG7RMDYDU9wdh3eCfJeFPBeT6e5643Kv6HJeXQBJgoM3EyH2Xdn68",
  "key17": "4zkDnFXtjFf51dFU7ugJhVkXbYiCTusYMRCAwgfvzQBZDnUg7sDhWy62a5R6vUrWLLyRmGb7Sw1mFtUtH1SJo5xH",
  "key18": "RKj8C2GDAAafgjsbxBCwQLuwHKBQbkiyaNUsz5Hahhog4e9VUv13VaMyurQrDyp33ubx7WCwhdJAt1L314o9i8e",
  "key19": "2Tf79zjZ8hNtyzCvSMGLfJvVoYJjAX9AUvgJzwzVsM4aJDqxvYdexrEWZkUNAUP4zk9hXzbLHqffmgSn23eQt3iN",
  "key20": "4wXTa1tv2punam6jPsieGPqwy4koSTw4nHAwLJwxeTBcXHqLiR44px5uZgAZakvkQo1YjvQEfveWHb8sEeeW15S1",
  "key21": "57NLUFwL7BzNu46PUEvngRJe5RKbbmVcawBwZcGiN6BDDv2jcj2hKZqBb73HKA5FmbGFyv6rE1QpdWt4e9m1fF6v",
  "key22": "NzLLTo8jUzU5wYyAASGMw5RBn5CmYTJtat8wBC998kGKtoP5PPKxoG7VN2NSScvyiPuWWwXggBQQgeMfCNNDnfW",
  "key23": "Usm3b5CwBKCAiLwYPxn52if2PzreccsedKciFUAFXUVht3CoU4mAwBXJc4EapcrWG7umfnJuBNQz7sg4hnDkXgr",
  "key24": "2u9EweCbnnMiQywYRoCkMyKSSLEYFnsKdf33s57bJsfv52qVEoKQuvU2bNVpfEeeNnkqEgztrxCvosXUjDfRCQiZ"
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
