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
    "5yAbZqWK3V9jq5pPWKfNrA4aPdnL5BfNKMqqpGD2eQviDcj3m2RjpUKCeqffXBxxtNsPNsxPvmDJj3FfMtePLpEQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23i2a2bGLBYBqPNajDwfoADj8ULjExbFSpNwQo5ghybRVBJtT5CUSkABF3UjfMX3MKC92btjQGwkmZUMsYGZjwzs",
  "key1": "gpDSE4s62cFfqnB7jPc3ZoemxynUc7WPmkNsUSktyBRx8XjPiaGfyrXnzYnsgrnkY5VCHAmaQFacAvrLpWJsoat",
  "key2": "48derrgw4adB2B7cgAw3A5iszxatHDZBPT1fywivP8y7Z93EfLDLHgXSVCPsG2FtkuYAnLDqgv8XTMGZx2T3vSPt",
  "key3": "2YAzHhkzYDUu532Bx4e2eDBxPz9vyCiCSW3xr3oFLu79K6Z8uaRWtJZsreLuSJCNNSnwKW1YCL6qFRG5SFBGrV9r",
  "key4": "4yAu3zfNWa8En4vSruH2Rvpt6HJxDjq4waoCekirS7fseNVe4yABgpeaxUhzN88CRTLJYFH7oUF17LTjgEHvqUx7",
  "key5": "55Juc5N9aBapdNc4rQYNNw4CybddPo8Cu6YaGg6US99XwDro6W7tup9Edp27k3Af45pyj7EhqY43sQ4sxj1KM4wJ",
  "key6": "34Gp8QH5VSsaDcbqx3wmximdsnXK9re78KRfeo7fKNSU32TmpsH9BeGQWs3aC9rY9wrUoG2J7KD2GCpZkAhRKrC8",
  "key7": "5pdrAJBGSR3LgaNZbGwpdCsMxk5pEeTXxvgRUCaKRqzje9VR2kJVHdFEoikF9jEjbsZkgyyPKdYtnR3TewpRU18s",
  "key8": "3cDDous9wvMLNF9X6vKELtgW82DeiDmwSaaNqku6cPniBU8LptbR47RkvfvMMnyJTitFKwsN1ZmtfYMPjmyqwwKJ",
  "key9": "SVzyU4diegsk4o9ULFUCjutnkm3RhPZ11XzDp6S3eymApz5pHHApSi92Ro67ouzRYXmTKydLYAu3FoirbZafoBF",
  "key10": "57TDtari1E7GGWxVyxPqUyHPj2oWdUGizumkRCKMfho7eURy8TTrzKsSueR67LY9gEYs5wkLA7m7eVHv1HqQ4GFS",
  "key11": "3rnvF9p8PJJpr9wsR98oF4NB2Ak8ijTUwJeb15dUBrHdK6Df5Hgdz9F77Rqqa24H473ejTJgCdSDNiSpJBtLzo5r",
  "key12": "4mwZdZS83vMVeDVpeDpyg8xBGVJvNxcdBen7Y56TurcQ3uCwA6XJz2ETKkeUmEeqdaaYDdtF5UqcZeD8AwZ6zBhc",
  "key13": "4njpBYe3SzuWnoHq9eDSibmrD3ud8qMFsg32u3VyvbPSK5sF7LvbvHpF2stLYFPNyagjzGFquhiCxfcXF9bWM2a3",
  "key14": "2hwM19vsgj7U9fTPyUqsfwEMvtFvgF9FapMK4qRwqfrHf72pQ2UBCQgmeme3vXD99FTvExfgCuBEDWBUcgmaMeQx",
  "key15": "eJ2AwX2Y3VNe6t2KGDCAoQyoSU8BxKmf964nHQJgo8hycyQoo8fRQYWBHe1duQR3HAUAFdbU6z2fqNNGrGy357G",
  "key16": "rAHubroBPuV2MJDf7U6AMkGJTUvD6bLHi7Zoqfh13n2ehA8Me2wndFVro3U2BKsAnufTSxC51HQVkNYgK3Zcf4K",
  "key17": "2ZRyn5NWDyVnqbF6WSnExkzpVd5jPuY47jnXEWUiTmBoy4Um1oQzGXNDkU9RWmeyNJhoDAGAzHMLQUGuHyuKu4e9",
  "key18": "3Ay17tty86cVfsV38sxL7trtB9CCtQnnkYXeDJozwwhe48NkaEUW5aAg8Tmj2NoeL6FpyEeFAvs1CMu5DyBbuS5J",
  "key19": "rAX7GGMUZRZfeksmK6Vbh6TacteVF7yva3xMkp3ZmS8UGvz5eJkT4SCWf1CvtLYkVQDYsxPxxkij5kWNfrWiUty",
  "key20": "4ADnJZsXHHgEZmq6M8AxVWRHW7uGXsU1NM52odaTJmLeMW9EdcxcZnt1YSewRLE2LVAPnSaWK239ZQTVfKku7KwL",
  "key21": "3Wr7notdbYmTofkdaZUh2ruMThaa7mtCiVy6AwyYoCk2PTiSejGc6K7n2fPRSX3SHXyuvDjFdRYts98uTwA1YQHH",
  "key22": "5JcymsGQQydCL6GfqYeCxSiGVUis5TJqzc8fNvhN3s3CjkRjkjUTEjreB5cKnEviPzfsN6u3ytNuQQqB5LNnjP8U",
  "key23": "2QicAz2UWyf9HYEFAbZFxvcPx84opYJ9L5An6FTVTrZHsr1UzoY24xoDeb7LZ54rGwSYnxKN6pjxigMj5pNusZbs",
  "key24": "2FHFoAKiA2HGLuHKHvZZyPzZATiZ3pd8aA1ecQ7oZGRKpLrLsyWhyKnxMzeAGY77LXVdqhMy33fE61Hgm7sDV69B",
  "key25": "4FmFJmoiDJG4LRB8C6bav66phjFNqzKzREbUJ78eagw8QbrQofzAvS3pQA9LXCY3jRZvnnKiWaEsm4Yspx27ZLCf",
  "key26": "5RvBybjbs4ALD3CB1V6jZPvh4tgW74L15NLqdobSogbW4Ltr7QhPmzeaUvXnGmRCavoUiDsYCa4MrLDG7foYcm6z",
  "key27": "4BH8JUV7EzNAkKzcQx9L8FwKgdwifagtJ46FjHRpfwTpmrB3XYUn1EJE95WWQBuCBPsyZCrLu5XeVCZ3iFQ6U3nN",
  "key28": "3jcqpUjEf3cUyzi4jPae6VmnCF2YctZm3vuuxhgaVivzPUdh3QoEhRvJ4MiKzPUmHGRCw7YwGuE5gEiudd9G25q",
  "key29": "4SHCb7YLmrAAaafYp6kjxkmB64H3h9cFGLAwqVo1uh72WG5qqe6epjMwx8co3HLhBaa451wbccMcXEZDN2TYX6o8"
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
