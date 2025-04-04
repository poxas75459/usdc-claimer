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
    "3hBV1nvo8e7JosCwrtzGFzJK5e13d3UeZT6YcJyXHcey4NGJEsNGV38eykvdn43pMVDGHN2BZDUAntx7on4eCBLf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HsPtdEDLhGy7Fy1UByCiwA6CqMcQseaN95MpqWYLB7WgA67Ao1AJDJpEQM7M2iB2mD1CTzmdtVvaP3EH6QhW8QW",
  "key1": "5foh7fj5NY6ihNpfJuGfSEsmNLPV1eNe9KRM4ocwHazb8qxmbULZiuMe6s16f65VvHLo4Cy5JVtqExsztjE7L4Kn",
  "key2": "1en8h28BQAVisrQis4T2p8fevd4RdeF22JYuaoQjLsg3wRushzEM3bSY7tzbH3kjtCMYSGi6GGDCGB15UqU29mV",
  "key3": "2ryRc1G9upUDiSQDz4ZmnJX5i16iRCCv5GdmaVLThwsP2YoFqAjDdbYwJigHSJh1aWHfk5tEu8Fu4mA2BmjVGaY6",
  "key4": "3KctiLYhS5r9XmXSE3baCwRQFDrRmTgmCxmknp14yGpcrFcJGYYsSiAsKLWopccJDdujU6g9Gtq4nc1JSBYXJseP",
  "key5": "pQHRN6wQeRffaj5omMKiMo1mkAotUMfU22tLNVupnL8bA6fqyHSs9QYVovPCzBi7ds32rkdiceYcUVytiiK8sUb",
  "key6": "3w1SkjqsErrjBWqM8F7axVYGTxABSK5NChbTyDt1icne8c2LFJ6f8j95GznUFD4ZQypHe71qx39NyNr1n6srvtXq",
  "key7": "3GjfrGhshrFNPiWgZtHpcQ2VbSY7FMJNJgDneQ91jJJqv5zh7QMgsyqerAsAjquzXqMrjMNAeg1sKUHCWUb5BGRs",
  "key8": "56SvfVUpuw7GdeFb7XyQdoe9s1NYUHRe4WstXTiwbgYvL3XhsNLzH6hJdKZAtKvcRSWEdFgcKiaS9Mf25JTNrR5X",
  "key9": "2c4QGVpGrtn9BXaDBdSaJou63uh2VPp1k68jLcrX3svjNcpSnUTG2aYKV5DirtWsMLsy1ExTbHGEH3JBw6z7Hxxk",
  "key10": "5UZLaKnCJTe7UwbtmCKzfKxnqBeXa5JD2WgXhHinWUSXW7mE5xikNEaLQtFtQEEYK1KWZzgStLtspdKv9FcmLXGd",
  "key11": "41EBi6pQbyRZs5vGF36XsjVwK83qxae8MftjaZsCKYe2PpgHWpQyLPpFFadwvK98NQ6DNBzh7TvAumQviUqkr93d",
  "key12": "2Jq8BJz1gKRDKVioLuH9NyxwUdxNqwxZFjj3eN6Mh6kJ79S5cZVBoBBJ5muVRxUJpYJMntN6XLrUh3JkLL2qtCSJ",
  "key13": "2bsQqLFyrPSCGsov53iC1Uha5fpes3TJuNH72uXop5UT5vYSfrVPuSiwuBZbEEgRCtrq3CMdzhZSvjV4m4Q4Fphd",
  "key14": "526jNA1JCvT83najA5tWaMLySh2otbwTqSXLxFFV1w5k1eCbQPT2bgS3kfoaiiwiPC12sj4VGfHJBHz7EnuuYZvU",
  "key15": "2L9HMDhj4W5qWTj2WXua74LQasMBTF3Hq86Aej2rsKxftXhrYdHDYQ5TmdjnhKML3jJoi95mkmggqCn8L7j93peU",
  "key16": "5dfRTxVrt3ytxELLEchyHkwbRecKG4THmyxPfZunxzhVTfsUGqgNXZa9LC5SjpCHzyGHjfmVjGwpvoEmcWpR989o",
  "key17": "2wue1DumuE8aZg6FZF3tnUbDs2MzwKyauBZ7cY2Mk8qsyxoSkrhfEDELo3aaRmZoBDNqdHntxsfKKeiYCgXTNwb2",
  "key18": "47MKoi6WKTcUvA4Jd1hXTToAZsV6ossLQRMTitx1ojKpsna7SqFJQfCftQRUWkS5M5sLLiqHNFygLMPCJeD4rLHC",
  "key19": "5kd45wVMae4c2MxaSJctGT6noHZubBfpzf3YnS1uSFXa1w9c4htmH1NfmPa2sDHdBNXRntp5gWM8Zu6S8k1UsSZm",
  "key20": "4SihsoDzjaewsSp5VHjHCpQFkeN5Kox3jPm3YeF9DC6WCNMUoTt81whJ8EqBX9gqvUEVe8K2pnAmkATGL1TohXEC",
  "key21": "5tUWZZnpiYVG5i9BT3TqxZkX9bxZYNctkMyZheiSo66e6t8r5TuZDvpUZE1MhQdLRQdBvt4fJmiGyxAwUhmgLuf5",
  "key22": "5rxht8rewU9aZM1hpZs4pfE7uy1gbjKmTnPYyVsxh8bbtiVSvyeFL4wiRvJP4hgEaGeDsDTJBUjkr9jJkSLefHdZ",
  "key23": "238ZnaCPB4kMfFPyp1S8xFcg7haFdsw13Bo9CVCbPKtrMAgbvnvdP6vvsX1FNAxFdMZHN6sYDvLNcjyFt49TKwcv",
  "key24": "59SnYz5f4UsAxnjyXxjw6kuWKAYjV9cPZbqnJ5gHwMvvmHt625m5mLWWFDTPZjNwyCqVuyAciCmbg4HvRJWvp7tb",
  "key25": "2DqDZjbVcrWR4J9hnajkDej4BVaaPdM5Fqik4kpLQNjJ4T83GCRy5HU29d6tzQV6WJf32myV19tounqxDkBWVQTZ",
  "key26": "51JiqEon5CwS8TKBdgBQ9GfsmkzhVnxpsMa4dt165MDLGg6RE9Q6rQCyc42kx9LyR7EdQKLm6BVCHCwLMGxgYYW4",
  "key27": "jzLFKJEg7Bx7bwwB9VKsudG9yf97UYBYHqnUA2udXk4c7pcqycZHU5vx8yTd5pfsaU6kAJU8AaxZTcNNh35rVNJ",
  "key28": "NvbrB5KVReJmEg2iCYqpZb8jivbPX5hHnqC5WYWxL3iECpXTvsy2na5KKuzEbajvT8hwDNx4c6NwWBuDETJeW2H",
  "key29": "3kQaGM5r1NHSNNpgFbJL43kxbRsLy1gKvySvyxYDbGL8YKj45BDfTwifstuQy4y7WVc4ryGXe96zBaHhqvyg4P6z",
  "key30": "5i9p9JCw38YJMpwwXiDx9Q3d3jwF4YJzRNFmQTkXttBrGrNjrE9gdRRjQeKjqEFizEZUTzttTjF2r1FLNbqSUDwr",
  "key31": "3wAXHMgnnk1xtjvLnBmx9C4n478268ra74JoPv2uZaLdxjWuyCUHMT3WUUFNgYp4rRq7ftMpCMP4KU1QwNX4DYu9",
  "key32": "2XS1pYCcg6ZD6DCjZBM1HEtkunvvsoHc2kBB6vpvm6nhc34YbLfmPn3osDNS7kbwUWhDMog5uSD6bitxQXDec5pJ",
  "key33": "5BYaoHPP4d8DrktYGpfcNaNifdHj6AssRdEd4o3pPZcwNjq8KtB937Bdd1JYV3Z3rkerNjwgjWuAwb3FzXPoiMZy",
  "key34": "2ipUFvYTeS5t1SwnLKuuamB1RzLLze3a9my1c89yD53dBohYuHV8dfvryLz49vagSFW9GQf1KeavpYbukhD8tmva",
  "key35": "5c3x9dzJaB4rtG7JZ8HuUc7Vt5GDLd1J9y51XMaxh9UA99Gv5zhedPbYXUYc8Nr75ZUCbWMUvGyVhWfprg2iMLZB",
  "key36": "2haV4b6kH1pyQG2qEwVtJsRKUWtbVrnwHRc5PdujmNQaChE72XzZdZusPJWcJvcw1R8rpQPnTAQWtAyeshEZ2zgD",
  "key37": "2H8ZxjKc6VByy2CbwtnN1Zeq2WLZL2SjezgTUR5wd2abZFXdVU5ue5DtrffoAUyhBRckydXY9n32LEcRkpipJqQL"
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
