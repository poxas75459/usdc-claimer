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
    "7G3ELWSnFnofi2MHKaHr4jtiEpXexspENecXrtLqxXjcbNMYL6FVfn8YQd41XdS8Bm5CFJYWJ52bhtRoS4L1eNG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iBQSSJ9P8EFFo4eMncDuqrfPGYTqvjCKBfdc1JJBWPmm9itCQ53BhRQds4DvJ7EN2MK1KuT6x6zn2Buikxm73aS",
  "key1": "DToBDJ4b8Xi7vkaVoYsYJFZSY5sVqEDStuEywH5GQXa64PEt34yi1rb8tfecwJTnpF8U6Qc5mab72Mndm5Ah3Sd",
  "key2": "5b3n4G66T14awCZoPFNXxqWsqfza92bTPoLCGXspdGeLgdmD72xUfWMUFDda6b4BubLRYwtdhmSBvcCGg7PoWCoE",
  "key3": "4BsNAjVNfBNxGr45UPUn9JU25ZosdujWnh9QymgTWHmGuPUSG5M46eZowZw4RJNnjD5NczeXULgdce637DcqUHz8",
  "key4": "Hu1WXYNkEYWjbKVeUQDMB2SUszQQEzxGL9RJr7TYJi1C5ZgrEK4acQUwdvqxFH3ym2Pk8jEurUSJFoXTFuN9bZT",
  "key5": "4k8TdTwBxwXcrFSGBNZXdSG7wfZni7AaJr7oNRTLwejoTBrH4JScSCuxMpsG4yMXpsXZkGynNkECRLk9pQ3aei7v",
  "key6": "5wKF3rVj6pwaTx5rj5YgDcs2sxTpQbMaHVimSNXvoU4goegn3QDJ1XEETyDuuUthDegAkN6eQva6LL4GeURvvbEi",
  "key7": "BCudKLEiZmcC1jPGySkWKAmW1gwev56oCNwWtdJadmPySpno8NBpgQhof1tofSQ4YLma6dxmP9MMAzLNP8YChJ1",
  "key8": "47PgUssggHd5i7LqtuPUF1U6zZCBga2Hfr7DHHBjtd743yrgKDH1v3aGPe9nTs8vkrBEupYAbn9GJ7X3qvwU32sG",
  "key9": "2bpAbXsRfsLTwjtz8VtZXrCdm54ZriXGaGzoP3dKMRabU8p39xFrb4gMPhsT7LdSW5eCF7LxDShtawfR9drMT4bV",
  "key10": "3dv5vPemkuuzJWop8cHfBvmjGj1Unxerkb4cRtcaVhPbvRLHWvNvRpGC2fRyZagTAXKDjstbfkgyyxZw3hkaLf1w",
  "key11": "3f7hNRsVeTxB4uwenkVgkvpZX3tS8BjdwZDJfD9YPzkbankKdgzbQjrCjyVBu9DKVmbnFqMPDz8oxvEvfi1mDi7n",
  "key12": "2ofvCShiUXD5fiYednBv9naY3UbXhHHAtZw8NMSpC4fNfquqJAtXEizViikKsbHksgB4vczSiEtZDhRQAZ6fw5HL",
  "key13": "7FvbLJFR3vBF5kzZsTwy66psh4XPimEfN1mZY5Vun3QFtKphXT9EUnb99FzdTvysHmq9Fiv81f5J5anMeYvDCZM",
  "key14": "5tyDASLQStw78JVb7JA7vdehRig9U7pdKk42xbaBhtNxJ76mE1o9ensNDeJdsGyNioyL7NLActBLk4JANGjcGNc1",
  "key15": "329uEWWXffvGgEEHXSRFCuNwhXuM52TFxWs3zc7fJGJ6Dhh2y6bp1U6VXyCRSqoWiMwqZ5BDVFZJVxGNEXF2ZNGK",
  "key16": "3nXSxkrgBPMbf7GWNnE2in8myHVnuvAziiQEqxA5JuLVNwaZhTJjhsNjp2kAtK4Rou86wGHYWJs2fBcZzK1jhuvq",
  "key17": "3aCq4dfiwhQW8atWwmwxyGf2qEReM9iDzHyhYs3aPiTaLkL8vKqXHv9jTQkJ6hJDpjYMMBZ6DGTDSdKYSLR36oa",
  "key18": "oBeMyfw51KHXVqvgiFLNusVnM34miQCu755pa2vgg1Nzg7DhhzZ1YZcGxE1qcHqaWCXVvsDPN6tYNdU4hnbLrMq",
  "key19": "36KK9ZwixZE4C6GRZbX85FsyaCdNEPJSGLsjRjsbz9ZEwnc3KNHvj3hzexaPHAfWDicJYQvs4NkskwuAkg6r4HeE",
  "key20": "3Cc5pb1Qx2hARftQnFvmLPpnpNVVdUydTbAe8ue6jGWUJs2NmpCkPCwLXEBft2mvNUf8NBN74MEjjoqz6hQkcJNx",
  "key21": "2ScjUGdisvY3f3brRrpQ14xAUKGij1mH7mV4AjrvNZWtPW4MvQqXBJ2UPJrfXo2gTdtgkBxae7LC6xukPskJQm5Q",
  "key22": "5bALbs5h8xnaJ6iHMrwnjmYRmVx5cvWchDa79drqqmJmLQ9w4hXwaLtzZksGujavsUhabEHR43fT3ePEXWLoGCgP",
  "key23": "2PCduqEFKhxyGhYT4fD7S1Rj127BYtfWgD7NMiT4WttWvpfLGf5WxbAuPeMCzPbBtCDNSB5zDA56Pg9aVWWk25CV",
  "key24": "2SrLSdjdEEEo9Gczgz8xrvqU1ooYd4oQGBqVmxWvVfJv3MmQe6RhkGwjbjPHGVe5Vw4AQ8NY6mRep9TTcENoSBwE",
  "key25": "4KsiGERknKzy39TDKrm8sgLhWi33vNHDycDXovuWkjhtZ4xrNnfE8LwGorJBodsKjvdtMJRwfKZSMwjTARSay4Nt",
  "key26": "mCEzsJyvY4hvzZgT9Bof82BzL5bEwxxWxQLenhm32EpfZ5zFQVWxJEvmtuTdHkHSAgYk2ptSrSimax5e5xEjjjE",
  "key27": "4qah2ZmpDYVShtzp998ibE65UhPi1uLpxAxmNRbntqq9QKckPyv9mCKuCntVhsDZph22HGaaQNhmR2QxyK71j8oJ",
  "key28": "3ojBFth6LHTp3Fun5FL6W9GTMXoCoBerG4iugm4QHkaP66XXaaJievrhMzteRTWireHqKBRRJr7HmM5XL6EU429Z",
  "key29": "RbAuYCdh9PHe3c6UL3wBd8nRQgEt9zQmL8AA4FXgtWDWfEgHTjYyvVTuMqovwo7Wtn5Fx3QGKP3xU9gSdXw5oqn",
  "key30": "5aDwmacA6W5SLAnCp3ZsKSRf7F3fjNwe8LqW5rSeJXXW21YxHcGHBan6aQGDBvwcc8RcC3bnyfuTSDV71gyzJJBj",
  "key31": "2J8YLpsPpGoc8rjcHvpsbLHadqtiCXhyw7sUnwET953R23aWokayNuNUygXvHGsvJVfivEQA6oYKjT5y4o1abibM",
  "key32": "4HHxeixd8SL6C94Xndfrz2wW1HQqACo7jN3XzZHhSnurCcHCG6pPkJkY9rXXFuX13piYf8GBJkyF4a2ZVVH6ABXv",
  "key33": "2Eey8RgPrUKjyHZFmZ6sprLjKCMnas1gaCQqfKw32FWk2hppMEZaH8rnn9zjBvCiJhBDDpa4oJu1rTfMD1VfrBia",
  "key34": "5BU6tUQ7VK43Ns1gaakYGugaFpm4f98bpWVEqvGUenz4NwA1WHZeWVmQUN8SVaMN4vhBtS1QJPRUgE35M9ymJFpe",
  "key35": "2pyFMz3ppmDQbgKzm6Djg8XhGfRaaE2kPZLWbHx79sL5bDdgy1gEE7geEPwAC97QhSWrEtC7Ma4LcHZ4X3jBSQVq",
  "key36": "3oHj5Xvp9mDeiUyqUA4VfRnEnuabcYByJHKX2GtHBqhDbqBZoFt9Eowo1MqUVSqkUgBUzYPgvG42SYjrzn9AbQvZ",
  "key37": "3V3fkZr47h9ZdAD7siUov26CxX9pHT99mqKuoQ1PDvQ7mxNtayecVsBdcX5umVvQdpkx8NpS6Pnu61hSBtsSVw2a",
  "key38": "48DyTzjLTGgsQrQ6vRi9SyjAg9pvXtJYTnrxCVVi7FnHMvjLYLNGQ1FgnASUfVyCwewouhPysjGmZxpHyJNwYhV8",
  "key39": "7qBGgShagYdqws7AcKzJoSP1bfQKDBRwRqzS9J1pVs3MG99YyJJhDnG3wKevjN75srtdzTnFkK4GrvKPDsyNEkt",
  "key40": "2B3ESBY1dgfhG6nRVWF6uPU5dsizeM1HEJ9qGWsdgY67bsqzdcEa1y56nfUCUv57mweFv6s1vCd6Q43CRYXvgPrB",
  "key41": "4nToqiiVbPuKLNHkREmjyUtRad5nyWGbdKFu9Jd4ktHK3Vhz7zoj8TvT5B5mYVQtfanfuWEtGXnSB5J7vUCMBtwC",
  "key42": "3naVaC8EuWA3T7CnAqcemFrJtHG9SSC4m6XiNY5HhFEANCxj4VCQM83Y4qhso9Nnsp1oXpmzSYSedDcx59WXkeFV",
  "key43": "yaBRen1K88AdwX7z197ZghJ4bSN1phL9ph94ALY9a5qs3QW4dpgu6gBaWjJtTNvhj1rUpAX4MJuYYZr1iPXDsej",
  "key44": "kA3cRuAbA5TQkvNiUSNSZfLzfEQWC5k4bNUVqg4ZVutLtQerLNL5FM9i6j8WiqJp2uKBVTWU43mU9QM3fybTqxG"
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
