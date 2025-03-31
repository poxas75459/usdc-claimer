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
    "5gpepMbqCYapQuhHwFGzxmdbZKXDpUnCxagKZJyNHfE4BA7tXsu5heiQQtTan8EpQTJETux3A1uAK3doiupU8MTm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DAYPaCasWHYwoDhAib79bMetHAsyvdfrJcybyzqhVDpi5gaZQZQFLyyds3mXWaRW8b3NWXSWCAitkZr5rdRwyiw",
  "key1": "49hT5ojExWxBMycGas2bpe3Wb3StTNcbpD7s1d24zizGvfHfprQKkQSReiDg9WxuW6qA1YbAhXyxyxbK6Lo8TEsY",
  "key2": "5y9BjfD6FbUzAAz5jkfEVUVFygTzkwfsEbWpxdb7Lf8AcUmMjA3kYCwL2vDaGNZJzMYwyMmC6bK119enrCdpkdN5",
  "key3": "RHaj2iT5ahawW93mbbTiwPBnkFj8kSt36BUvJbBjKXJnGfKAGQqWETu2mgUbvTuUxKQFSTMXfTH4KKyfuWeo13U",
  "key4": "2wUpHEQoNEjhd1X7ZoKFNpUpES9JXCYxdavTTBQP5hedMNYibakpMFaDa7dKsdKHPeDxZ1wiRsxHVfpXw1Ufxn1S",
  "key5": "4YnSmqEudicqCKKxtRHH4yb7Z4fKhrghPDtYXZQTTV3BeGYJbv13yH29SfhKikoCGn9Mhs4NEgahNPsr4AGjpzdd",
  "key6": "5TiHT6Gome91KH48Cp8dm81T1oy4R6YLk8Z5Xgbh118kQvfpnwHVZvVuCTiZhxYZSVKXgriJ8yaiVEYt2CpFXaSm",
  "key7": "5VLkE9VuEDfnZERqSSg4WAtAj8QF5J7zkA5dVKbhtRjbEZUiW5YNB252xnC7pR78v1mEJcVybLeeDifYw2x4dL53",
  "key8": "3SiBexpgn6mrzkZmJ3sbnLwBsQe6YQXdSuvsKk2PAhQSBTbU6P3MuHr63bdhhkYcJW5KL5xQ22YieZLVNgJW4D2R",
  "key9": "d2PhBEcCC1TwXLBjWvxDFYkboiAdD9t9KkvQ38vRL2FvGn9y8zfautzh7dNRXFYwLkbyRnShnWSCfKXHEvRUTQz",
  "key10": "5Gx9KhKUi5SvdFtZMyQo7TRqMwM6CN2PitCaZg8JZQKq2C2nigboxWraqtbuHpwTBuRmkncZZdtsBmuZYf9ksFuW",
  "key11": "5ETbEEzgnXvSxmULbNZRjEb689GCtuesxV3vjnCPm79DhSKMuW1wT9rYocUFbcnXPeuRmM29EyPHpCa6X6oDwcvW",
  "key12": "3PrHpav9rV5gspdATmKgu4w22gUq2tdZhxwFcAA3TAgnruAqm3Pe6gXgHcnwWUfRCUwA1PXXMHTaK5MtzVDw3aTW",
  "key13": "scRTeG23LYQ4UPWjRcyUc1XwQVEme6V493joyKWiS3JRAw8SDbofu28YUEMqt3RBaGrAvL74s7RBKh4FjfHqQ7N",
  "key14": "3qK9BU4qZjYYD7JMFcYizdww1NQU4fFDbV66dDCDsU57zCkge7tbfcQq15hW7HXvYcWDuj7M6waPRHJziuABNJwD",
  "key15": "5Ehga4eijuNcQcfQrZZgzyBJ3kmYKu1xaLGN73BNm4dC79uxgvCYyuuUVZsj5yAvtTkMwtFcp3BhNCbsL3HawZZW",
  "key16": "5cC3p5XSB8bwiuxhsUxwERT3yiQrH1EoJmYHuMZRuSSQUYDXAffHCYwMAAP758mF3oycLXvjpEvfiQKsj7mbpwtQ",
  "key17": "4hqBTdy1ZCbJDGVZm57wFwqkM5bGCm5UHMiVGuzbU9phfGMJiwNjjZwpXDHT8vcKnn5EUZbVTFr2NQ7DXt1VLJsk",
  "key18": "3FjGtbdparGsb8nwAcnwJ8ioFhKEeKkGq7mYk9rcPCFZihihKyUSKZ79eyFcBhgCv47WyTcWZX3WynqTxJSg7Ynu",
  "key19": "G9BVobzNnjXiVtbQzVoDP6yc79359LszQAqVfQsZ1pXk5WtqgBUsgbjDKY3CbvGWByU9JdeXuf3NW2eiHHLnsD5",
  "key20": "5KhVD5aaeX7M5jumTF4UMREZVPWy766DHyCpZjsi4MGmGHW5v4CNRC1F1HLvAqk9iMfthGTrd19jgDknMZm4RPvT",
  "key21": "2xF3M7KNrbJJwkD3chY7gkXn9X7GmxPdfq85BCeJfH2FW5Pm5ZXTjXUyfkf5ztJBdtmuTyUQJJJEWvDHmGef3ZjY",
  "key22": "2vMHoSTxsKm5xRJ2spRyZHs3yxqL13dSTDGiAkrdG36SK1XbuYaxCjYxjY6X8RY36FpMx36g1hveSYrL9rd2WtX1",
  "key23": "3Yzsza1fM7NG8avebCVkp2kovhEuYRWJhmhsXVSSFNHBZAfnCbKuZwo8iWsiV17VAtd6WW6qyxnFMryPguzwqSFa",
  "key24": "4uXbVhyhUPRoByTMsjeYNjRTatJB1UCtUMgpifyq8bcHKZUgwNsf6Qu1iezLka9mHUd4Kk8P91tCekQFMZkxE6eH",
  "key25": "34LJxrCjAoQK3FNUR8kdhCRM4rG8mJ6AwpMfSNZrSMQfttiuJgUANYmwqSR5MtNdc8vCPBuw75KjjUwotgEAsSv8",
  "key26": "4P55U7qCHroF3cfzPtmRoPwdVKb5dhx6PCyRwydgSWmAeSFv1TTmh2hsGy8fdrFrmYriQon8gzVSyGzgQkUQ5FMT",
  "key27": "3Vn54mEzbAYrrQamF5BG1xxycmWHnctzvxPVAhpqcGQdC7Au1TwssgyrK7F7e5rTchQkS47pzkfAhdXd2UMMxJ3f",
  "key28": "4qzTc6fvjZudVTQ3LCvcxLboVKE2tSjW3uJM3LWdcd4mVg2pWsSxraCLW2m5sPrKwRpg3QMqnhegdRNaE5ymJLfo",
  "key29": "QdpHu8AmC82HCkrcLtnfVpjWmkSy74rw6QXriwKc1ZVBUgerH1uBquAvzfWn6uZSC78JaXSUpPW3Tpait3JjLzs",
  "key30": "35eBXe8NFaefs2igcobidc7whUaGXgkG9xdRjowsxGa5G73G2RmrMJ8HrE1iDgE8o9kFqp5eDkYfNGppnAYtMbUW",
  "key31": "1wBeF5z9ipbntUhUaGSRatyGVgYYrsckPxHkoC3kRVR8ytMgTmupo9c6P14Z9zunzZhrKyiApgxqC3AuwJChUxU",
  "key32": "4UxoYtXD6n3yyKQgQe5nJianiCyXeZWdTuGh14CPWL98Ndx4cEQwVV56DZoArZxPZ5qJRA3mJMxZt3emDoGJPFxc",
  "key33": "4swLuyrEkYgMyMApsv7yd13Tr2BRQDzxkd3jhqoxG6gvHUo1PTa6Si1ue4fwQkh5WuU8dErzAAFxaquALct6eXUv",
  "key34": "25EzQ2DzA3wGHKY8avc3JytKWRBGU9qwRye6PuNYJwhPcQxztxJ5anUk7LPGaGiiQyKK5EpWfXpyWZMWqpuSxgJL",
  "key35": "3Mwo4bo4E5dbKBbHKnK477ccdaudriuCYo21qPwjZiwybRvFpy3DRW2pyCoibQhtcVLqyzhcVr9ifqjT7Cd44jBU",
  "key36": "5Ebey8QWrJJmrY93QkH11fnsvmFrhfqYqeNNjCzMZ61M3251P3wHG9ryTTqhUKxqZ2GtBPtMiUjFNfM5uarBsfeN"
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
