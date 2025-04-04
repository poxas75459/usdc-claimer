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
    "4GEtP7xC7w4fZmrDRpdB7A6xe5eCLNwKRqWjXgtPe7nkbwPcEUaJaEsSMjb4QkFrN5dfve7Mg2g8rJaZmChsc7nD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D8wykNqM2jG5fMipHNzDFN7e7E5wMv2j6nnvizEKRVyxSmXXYSLuA1oMFFaoXZ22G42zXzmQj6TvzP8tXzXNyj",
  "key1": "4N21sHMw88AQ92eBJYsZDBY9SRdBn3srXyps7stF3vDtyjdHY7D4YMTBAGkY8EuHRoKyQvUPPxe8gE6ZaihduYiP",
  "key2": "4oip1tjeZ7o2YV7PDiw3P539qLPPZMR8AUT3pcmKbVSmXCsenxzsXayTf1JK2TUvphKSHqjHUMwm41k1HR3U53D9",
  "key3": "5q5Drw7Ztbq1ADudUPL5M72LfkNoNPTkP7wHmFZGZWH67a4xxWAV3E7y6D9akaXKJytSGqe7NkfC4GgkjGWqMxA5",
  "key4": "257kMZUCpBWRQQFQKHcF4eTt8oQ6hKKKVmTkmoZY1L27nfanHbitEUSmz9a9mY18NEnEdNyPPXMYsPG2XqTk28Ki",
  "key5": "36eFQ9PmdKuCkFS61V1Kv28gh8Sb815QrnbgHwz7HCKe2TzQWgq7Bx5tR18tUfzkPsREF9x5H8oC3ReQzmotAy5Q",
  "key6": "4e3zNDJonEaYSpb4YcfyXHaxrwv33fNPyVurp7obZRSZcGMDbepFUqTbakwxLKgXv7f9U3X2CbGAn3SkWto11UvX",
  "key7": "atYT3BqU6Fn5X7QrW7Wp3ggPV35MjoPZQ7TPhQaXWrxqGy9AT3uJBQbrzfMWTjgdPNzMf6XJtp3HPjZL6XNux5X",
  "key8": "fhHNhw11viBMKvsi8Pu9L2yZi8r2mRX9Rg6m26Z1NLsbUjvSF6RmxakwgY6xYqKe1FmhzUpJa6dSFpsRf5DDxrQ",
  "key9": "5683NFBr1xWsACAZw3i4ameh4M7gjmM7MdamgiJqPFLd44aVCBUfmbPRWxNsdY6wkhrPgVn7ZZ9pd3bVDt4yVhRr",
  "key10": "3jwNGjpTACYDCo5fwKo3GoJUyCeEAP5e6i5uguvmrHGjdY9k8do2DG81twVapBLJW1WbfpiafPr7Ut9aUy3gmjJj",
  "key11": "4MmTmdt3Fi9HJgsKBdxTw1zU8h5z1ZfA2vFqMQiZBMU9vFJvvCEEoqtg74Cqw6FksS745xAhhdPEEzc6GH1DGSiP",
  "key12": "8jHLixZdyw97Sdsoao2jGJobdn1RaK1HiuGQLzWvAwnQ5gA7AxUDk6h3v7rQmawBsBabhK7FWwTVSNz5bKCuNfs",
  "key13": "5AbQJd7UaA368UiST4xutx5sLBLpUKRJycJw9PLZ9tH6UFaT3jQiNyssxa94xnZhHjnzZcvRGoZfAFqBXB6sAcar",
  "key14": "5RZFNAPFdNwKo72Nxw1R2LrJgJ9s3DqPBAAUTLHAohYT2JihjASjEbC6QrAMsYjXorPkpGs6qHcruu5TGvcTkbGk",
  "key15": "387RsajHWB4LTXei8QGX7suKFw9Piy4q7cv4TjEYMe2y51qfB28uQ48VfsVP8fodfWQk5T8xC6CXWqzHP8PW4bZc",
  "key16": "2dLaqDLuCDA7L4MKcm4Spv6RoekXdnDWDW1BVXqN6bSzWg4mFgNAK7tohpvWSiUDBuFnVuz1Ya4DZeooCrXhypeo",
  "key17": "4FvWLFNR8MYD1SgJtBnmwVeX6bY5k9XaWSdJo2WfSBfUCgEARYMXqRNN2577UKyWpZSfCvpMY6izuZs6hRGGsvBV",
  "key18": "2ehHqrQ7sQigBTpx7xeccDu4nM3WxPAkgJfei9fh2YBeWDAgrhxu7mw8SwUP83wdeGkyn9uyGE8ptKDW64TyoP5D",
  "key19": "5J79nD4aAnnWdwBfeA8jHU3yoJjsA1wzUWcd8YsDsUSV7qWyS1bjz1Et4bkimc7xRncmRomXFC9NVKFHE3aXvAoo",
  "key20": "5JhG6inyz1ngr4nyKsBuBFPpz5PkgeEuY1AJTsc2seKAMcjUnY9HW5YpJBaUQDs5ZsDXRXQd8d75qkiHntmeQeAw",
  "key21": "2P4wq4YZDs5voapKsRtzPXXtJysoxPh4VgrHLGSim1oDMzGdirjQWy6qg5GEqz3PuaEpuE5d8YHDz5gv8ZagZ7Zn",
  "key22": "2CpJcJwaX22yKWbrdQSQq2E8qvStNHEmdSC67MtWJMVo3VquHPt5RpCY9LaASppJKCQDtXjjgUUce7Q42zea9WPx",
  "key23": "3qFnJY9rixQAmXV8QGKAAiMrC34zyVGW2mTMN7oQm4ucjkKQsgcpLu7HAACt7JW8MC6FoXkjVD6GpWxiMFDNYDXw",
  "key24": "3d2v1CDPtn2PHKC2AdcPTJsTwPY74kgLGvR661Vfg3PC37JdYMZrZuA8FjVXZqSYUEgwF5jrVYWXNfeoFxRiyz95",
  "key25": "4Vb83ct6uFz8v5cTSAugYAAwG5yR2zpMMVgnbMDunJgkYxz7FmPJV1YacfZj35n9LYg3hfLiGViPertaEKbEA8h8",
  "key26": "2av9jSkWcwMRADc2BLFPEMsdTts8t3J7wmLe4MwioEuQoN3RcxrMipvgnhLyehAUamvAhsBjok1KZSX4owdzdo3P",
  "key27": "5BTas4TrDkWPBSUSQPMqDSKSxNg7p9fPnExsy9pmpG8rzJYXPh7Ywg6zuBbGbC9MA5qAsx6aQ9YQvWEnVd4mV3pn",
  "key28": "4TCj1H748i2R6DMWhaJ98K4wgiz8zYwV6RNfJ2eUTe1LjRhdmJu4b6yrcDpsbBXXuG58TzURxZTvUd9KmuL6C87R",
  "key29": "5wRpMucWydGK7zYcD2Hmqki7BMVbZJjWoS11iBQfs2gzUGS7fD9jMDbj2kuyHHDbLfaGxXXHjAYphMUMRLrpGjYz",
  "key30": "5gKVbf7YYuuXBk5X4EbwBCPQxxEgDkBbUdAkDHgQNjQYFdnV78EhVr75QXaEDcA4m5E8tpKMta9TMQbECtypmQkt",
  "key31": "2FY5g1umrsqpCnts8tqK5WmWTFnt8Y6krcjbmmC6DtAW7eLpVKjAnmvwzxcNrQ1BApXxVthEnkRZzYFD5VvAgZu8"
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
