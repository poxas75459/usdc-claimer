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
    "4WZ7AELoeepuAD7GDwWjXgkS7riqemYkFo1ddZG16M8wfTccdG6T5YKhw6oZougcMcs8MW7g8ye9pTdkyjH3sT8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KDSyyXmqjF8zHzzquo1ZkWGYJJ3LZyfAnvsWfPeDLwtWwi2nPAgK81zHaUpVW3zyzjDX4WeWB7VH8PEvDCXbhvM",
  "key1": "53wS5MQC7bNYUAz4gPZQz8hz3VH7Sqk3q17U6defixdKph9po6tixLgDL3FnkyWeteURbdQqLbKXJgnK4FwvmidL",
  "key2": "56nxtc4ytwrVdFFDJNi3Z6qAGfLjQVsoJrCbYgcLY6F56vkBa5cw8bDHQJEqTgzwh9Nbp4b3iUk7reGFVJnzysHs",
  "key3": "4WHvAvP2HKZSQ8GkRKrMj1MphfziH5Yyoen7AqQVjUsDtwJ1t4hzrmd4vbqRMVzS4ja76CGfS23NV6gFkibY64q2",
  "key4": "62wvtVf1RUTgexqYLHKaJ983KuS7C79WivpAWQ7QGtJhSbPtUrkxkUyPqbjNk86yehW7o9knp2gUvs1WJswj7rh2",
  "key5": "3gCzJMjEHLi1eSyA7fe2maTWBZPk31LH131VkwFvxb5kTgSWWWiVTvFGQQYJHEAn9hWhmGfmj7miNCN2r3DAMqFF",
  "key6": "TexokTFStPCDZUp8kj1ZbwhMroyYbk4YpnRyHmu3oGErtih8VSr1HWbZsoe41nGBKM9njdMrdtvN9TWQx6YTKUb",
  "key7": "286rPQMTEM6dkmHSuL53fRKgVdMRdmKsDXh887jycf3gb1FcHa1FoNbqheWE8ANeCAj6TnJdvinVSTrv987tR7QW",
  "key8": "33CJ822uhBQFiyw1dGboMK1vGwChpeGD78Z95mfiWhu1ku6fzDCut1wZgnHkNQpXYyg6RqHjD3rH72LpQAxEKY6d",
  "key9": "jZXVTRj9i2QSrgPcULEA9jnZgYDjAK44uWUmbrt6WD89ELMaF1AHX1Whq57HkxKVpfMbmqcvFWWpXU65Wmd5uCQ",
  "key10": "5vEzu9fTZZrFJQwqFMxctFbWryiF3oPyGwgyjVpA4w7xE3LuR4eA3TDbHbszkhci9QRbHfBfjXKiEz1toJET9Wt3",
  "key11": "3p25pLAMkjk3FYqLcKxTkXyu5XzY4RVpZzd4KXopzztzF17fUU2MfN1yhmNToro7ZYGscRDQxAetLMMNLVqatKrJ",
  "key12": "2qJPL6fxF1nXAWduNDer4SqkFnuhT6rnU7gpA4EeyugEYExiMaiYVwhChrYZRGjoawnWGTEUyrvxpAL99ENj9aYh",
  "key13": "5FohghMgopRxcEBDZBcrxmuU1fGmCH1yk4iJKgWgXBp3ek6DRMhAf3vDPpEoLNz3wj7WDcNBnr2gnmQXB9WrXzj7",
  "key14": "5E3bC2qTYkucWh46rpYDzDsfc8XKKyxUbrDyZzDJccLyoBjTZA2iyRyfVDLstGaRN39w2Eedf2uUPV7AZ9eEVSBR",
  "key15": "4ndYxKoAA9c32Zrmj1hpbUNWBwXAj3uBRFXnLSc9t9DtcyqZgUg9XroJqgCvUmDGJnd5KtitJw58VzstYBbVPjQM",
  "key16": "3q1qDf2LnFdSNCdWLrfAmmVSXJzzGU2oKwyQKKHNmkxdYuCoqU29Uo1e39BWbnNRKm46b8FKHMMScdnfHnNWiP2s",
  "key17": "363p9QEM527TvDTcH7DYV5ZSYA7VvDq5zD8a1sN3NSZZWkoDeTXoi9qWbPttqmEpamKPcGpZp4tQkVCcurfbWrwY",
  "key18": "287QyrPtwg5L1kG6Tb1g9t3TeENPujM7qGNd5NTehiRKttcureH8bspgztMVq2dLXigF71JMAvgFTJSuVYecz989",
  "key19": "4zavsGKB2bkzGBSxKP6ZrKVgVyYC5AFJrfbpXMSPsnr7uoWRanhWgktgCFZ7L9nmfVGEHbWdgGmAGAjbR5ESP2eb",
  "key20": "5MU4z7dCgWTCF68jcdKnjxG7Xnt5YErsKQRfkskqv9pscvBByL9BTb8Xh9FN1UzsbZJjXmSj2gzQMN4W9uLga4re",
  "key21": "3wSbey1UpjrvUo4yXBLSvngMxc2LqPuDZJo4ByR8wjvjwuobr1m5MsBcLPi154Vpn9TniPsKAKDog2gyPtpiMRp2",
  "key22": "5FCMiUfZKaP69P5qRcSHAZNQddFEAo86otn5AZ54NG3ihtwwqzm1tFoWaKBJ4g99AyqFtr2HCqwVme6WWsAWbgUv",
  "key23": "4TRMgRy1iGKR7MWM2dQ3JojXDbrXpCxRkerkGGYNKmWNEktForq5mNb6VVsB86pikwPT8uMTua39PQc6MGYEofXP",
  "key24": "3KNwnSxf2hGaSQtWQpUEHP4xgsa2LSLmu9K2ohaoL4YCSVx4jbSqcJxvWgfUoY2qc8MPBunD7AcGFpkdhz8fYPCt",
  "key25": "3K4HGFYcAn5GRDmjauhHrRHnwgW3TahzFQWHMznCx91ViRdwcNYjqtSzexPAtUoqzVACP9jbLb3zhdrc33CRNxP6",
  "key26": "23QiCyYbBhNtip7pSq6g93EPcPnkXmo4kRJjixHYyNHb3TWkvAgaBCVzNJUjAqGGsQCQTEKaJvXcehHpx85Yvqpn",
  "key27": "5ACMyQ43TAuoRLceEvrWGeNFaMpjCdzTSAGNrdaZb6BUS1pz48tZASihHmq9CU78tJdRja5NiWXikRa8S61sdgZs",
  "key28": "3Fudc1D94VXBP8H5d25TEygvmGpcRyybY5MnqFhbLjSRMyQH4gqsDGUuXJSUrGRq6UqhD3gyoqHzqK656LmzZkab"
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
