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
    "5ho4nfS6dEyLBC5AiVL2m4qW17qmjzq5qeitTjyxny5EdFdNaWjYxzYJkcsuDP1mRifjbKjW3GSGg68Zd64nto8g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PwL2uJB7Tg1Yvz6nm7YZ5vTvMCX8pjNzxfeXQ52eCiW81NjrKRbinhZhxXRH9mfkrDnPB6NVpHHiVw7fZF8fg2k",
  "key1": "46RKoAisAoASGveVy4LXdcpmBCCKNGYz17Gr83wjAZ2SbyXiqXkmkYtVMxbaZbNUcRwnWSVVH5VaNMQacs4Doe9j",
  "key2": "NbPFQKeU5hbM9V8w129Ki7V676YhH8YyPX4hueHsAW5wHY6QmZikMVhUCdMxpdS7vmnvshT9LVSwzpQ546EauWV",
  "key3": "2KZhu6RZE8D9oy5RaTKXMxrS4J6YscFnmQe7on47SvcT1wXA3xY92eNaYjKVYAocKTW1xAGdZZfbTmShQxhgwoFa",
  "key4": "5vJxep2DLXXZR36MqadDVhSrRLxzQSDehKxAvpN9QtR1ZAhi2Yb4dUSnomuawRA9eriGcmZpuUd2cH5PZ8e3sQfV",
  "key5": "2hV4LdV4pWy1CxuU2kpTUC3jPdyDcRHVUmWRXDLL1xP79nXo13fQxADmYfYqcDh6gDC3ZUdfuap7r97hp1hKCG9H",
  "key6": "Nn2cb9GHr6t6NsSy96NouvHzKh8gyTUgSvegyd5o3VzDveqJkzzpvvPRqyz6wbf2XAWC4NN2DmzB8aLgA3Dhbhd",
  "key7": "2Lpg3eFgnN481MnaDv7qUYUrFWLgpeRQndAyrDBLpPUE4AcZA4PNGRsU3xEUf2kWULpMVxSHLToeVqGRs92eHuCt",
  "key8": "45xhGtfyi8Mp4BL3kHJkbSkGBTjtn9PeQDGs7My2FuWRbfiGstttfunz8EsSRyPvEF9aJXFSMeJq8SyQytF5Kg5M",
  "key9": "4ZFUUopeGtcDZ848ssQJoTUP8cEAoygLKhZJmDjF6jE2aNfHwwtnx4RYipNNeeVuXo2eCyDF8nft942ujwJGDKGB",
  "key10": "36qMb1NJCH93PoUjwYzaNnjkLtVF8RF3fYEnNRJaBtdp3HdPehWp3QFDek1KswFRW1crLvgxz1yWL4kMdF9TnwjZ",
  "key11": "k86nDyxzJo4LigUCFEUzYRu1mKSww9tHjcNCJLysWDqajT8FfGLjWqcsnapMsXAM36kf9NCrtmWykKALsNYx5xv",
  "key12": "2np7njRqi1gFmgeBkRAr6WwJc6LL4dtB4tmT2cGFqhqGUHsTym3Gye4Pz8cNQtZxQb8CG7WD5ZStFzEPJ2pRMwZx",
  "key13": "A9StPLoaove5GaNFmiiWkP6SiLhjfdExHQG6EeoDZaQDQMeXszrSzbbPxkfQYieo2kYgjedJXuBURqYDpBWeNqs",
  "key14": "58dz4R1ai9uqggz1rxBStav3LiXEfiKUT8tqr46rxFXs7TcxJ1ApUm6dZNwexfStWmwMcwsv39NPANNd3CLXVmh1",
  "key15": "3HJPgqnWCx4Y8MNv7BWhWtTc7cS1xYXFbuUeUAjCJZZQidNSZQSck1jQz5LU2bqVbpCgzF5oi5skue3QckxyUCpv",
  "key16": "bPf4YTJXZAZBLDGJnhaLoaiCepr1R3TgmyxfnsgxLuyz7gW3G6o1udpJFqCispXyXFRF4FCs8cWnGe4zYvTYnbR",
  "key17": "hcC8Ti5WRFEVWkXZN7oCybjpmAWfRpyqSSyrCfeK69KMYRhpBwCJc4VqHPMZYCwY98LzXGU6KekVLz9dHUizZwZ",
  "key18": "3ZKb4odeivSeNvfEfd4EYujo6jKiZ6F55FpcB9GvWpsxW84pgjof3PaYo1aJXmvp7gB6UNS3k9tSJzYExRdcoCjA",
  "key19": "4qE3MqSrqgBQzhrth9W6mfMCYUx1PhwHU3eGXN9PqDZ2jSUYGEueqCwraosx3krXy82zf1kH8RdZ3sHh5Cj5zrS4",
  "key20": "5kcg6J1SZfvCNjqQEvmqVNfX14XNnEkZvwHThZvjzW9g2VLk6SYeyCaESTDfJJrhFfr5NbmpQnQJWg2yqKxeJPeX",
  "key21": "oLG4b4GNMN5SEndsfeEoNXggGTvsdyXUGvELEEnVj1jgixNXY3PvVaYnH4Qf2Fgdwco7pFZarQZRSEEDazNjFz8",
  "key22": "67aM1gBAdzCssaGCziShD4dwS2ChBsA5W1dy3A1byvB9LTRMxhtSqQKdTVyYfCLXtCeW4PLbiB9mdrP6CpiKnWt9",
  "key23": "5DmxUnd14RSgyTTwHabDFqJJahdJwnRDkGjhbx19nHyB2gzwkT7pSwD5sGo1XKWWkwMeCoZpfTC6QZVXqG24AKk",
  "key24": "34BCEp2vkfDRVZuYNGuGwEeStWczuQvVmeGWauum16ozdhg51TFf6eCvFhQEiVPEXmTW1CS4spqS8LsDyASy6N2r"
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
