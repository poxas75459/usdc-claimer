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
    "3q4TMTmU9V8FkUsXpvxya1SUDNLT96XH1xY6wgSG9Cny88EgqQvSGcNBiFBezbzyj46QMygrHJrKC3GasRect1MS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dQVaB2PEdmTxxkaTS8hV73mfGbFB6txfymDgzZ6sMxn6wQBRkBdLxqCyB1xsgjrFoLQ5fMoN1WTs5TvX8N12R7",
  "key1": "D3cFzVgq8sdovEqwH2qQHPdMPLfg9cHYSXovTRZ7pH5USLUefgPGaZfG1k14h6qzHFjEoJJUG9uTcbq5b3SPkL8",
  "key2": "5Kxyipn6jgDJHvg5NNECfLynbS38FpKLKUs61CZUSgKSRxKdz4uLi37obYMGYXSRnVhmcoY8yG9RAbLzNPeWc2tq",
  "key3": "3Ynpyn2irui5F5Aa8F3aCMcR9JWcu4WBQ2S8fxsSPu7KyweVa7pBi6yZ8pFe3rsaKb52a7V3cXjanvYKgfkrMDDV",
  "key4": "2jEfUrbefHzbiMhEDdEZshrXAJeTMvFBbMKGhefcehyQTeirVyAmgGT3oHJVZJ6LXgYfkVYiMUJa6GjupTrUkGzk",
  "key5": "2qrSycrEtLk6eP46pW8da8gAzfJYg1Y51wHDQ89w2szA3hty4BWG5noEmZamkrR9bs79sU9Zbve56czNVV2E9Xuv",
  "key6": "2FDS3Amq14qU9ogNRXmmXm5pu8ivdnnySEavtBy2wQqkZ4emeHCeALkysWocDg6ozPAsi6Q7F8LErDu6fDWQSha7",
  "key7": "3x4cHHgT1Van2rqubbdQ3Y5sksEgKJnaA7uEWEF4syjBfF7ENUwF1R3pdMRDi8UoLmQuo2QiU8CzP2C8ixwW2MWB",
  "key8": "3YiQ2nVBTJva28J4GaqJYM6QT9ik6wLCK4Ybzz7KLXggDMXbbC81LAMN4qkMjkGh7keZXNoMVUYRbozE8nULzP9j",
  "key9": "5QzwwNQoGqtHpTx3r8RbwJzu8RsKHa3gPwhNema8qBTYZU9Chaj9hDRnLseNn9Chs5NVAHxm1iPcANqfCaw2vQVw",
  "key10": "4fRrevbfpsvaeVPe2SHD1QyJAGr7vXuSXTJbuLxEYC37B8bCuiWYu97zzCCRQ5G86wdbeXpo2txJougWnX5NyAaQ",
  "key11": "2qrjgw5sHKdMLafudfdZNdDAgDms6H4csC7g4Vz37zNzgZjwCN9eRZAz8ukf3uWn65evtskg9eVwSNsX5oAAM5Si",
  "key12": "3J2ny59vH8JCdLL3e9KiGduFyLKGEthqR4vC175b9vJ6kGJDpsW4ncXnzTvsUpaBYadkB8Af5SaMLMUTmssc2Byg",
  "key13": "5TRWFp6L6d5eLKmx8dPFEKp7Bz8Xe74zYd9QavXBu4caMk13GzGderFvfRRweMADXtVZN3QdCjjVhJtACx6esXMx",
  "key14": "3m489VdNET2x2S3fAvgns6EMhzXhTQtXne9dnkp3riqcrn4eqVRSTUmvP7UhNyD1vc6aFEUtuVrqKZPqhJovYnhQ",
  "key15": "656pVrqdzb1fVshFB54vw9seoFJvVgjMDxSNWu6TndY8Z6MtnZEt5Kxw7ANUwqJATPAUcqgstunJbDNYNCsWAAUe",
  "key16": "3iry8eqjJM7Tt4yTaqog449HakxMHNiCSB3fsDhiXaEhn2BQLjjm3ajyxxVs9bL6DQ3mqnmpWrxjrRgAiRuiwnA4",
  "key17": "2Q34eGnvzpgYxL8dSL6BBxoDN6pZ5fAjgYEddoRtdENTJeXHexneLECZrr3ie8VUUgbNBkduygXTxYbC5bbz9hE7",
  "key18": "dHXg1Vs6J24SNWYpQQ8NDQo35YSk7uN3yaPCFxsvfqZ7wJRdnzAAfeYdSeVoRJfmTrCMsgykYy1B5xvvsed9qUo",
  "key19": "3dFAYDoQZMNn5qV5XhK6jwtc7CpdGbhfbppGGGn613eSTmSfro1NZ68cQsxV58EcHNEez92e28JfqYw4m9K5Cr68",
  "key20": "GJxG4CRmWppYXfXuPYgrGd3MWnGSAGFKmYZ13Jd4btJamPFs5aEBS5xLWAt2vE68fwJvx938ADjTaKs7DZYsMjA",
  "key21": "31RM3R3B5Nn4wdpKH77zMS6oVGdXRvQ1F78j6DzJE5d45wU2HmaFkpgZLFEZHQLfpyqG96Tw8UjzyK3GgPK9mcMV",
  "key22": "2KpKGPZCqZq8UwE3Yz6ynztcqJ1MkfSy5hPG96ZqRyYZDL19DXZ9vgFoap2JJGS4npJAuvUNJNbbXS3RrUWD4DWN",
  "key23": "41P5DGT3Q7i6XLQ4avXgpTJdha3huza5ecpuqHrTN2JEFxheDN7J8AAXadQqPRLcRPC6Ap5Sny6Mw8xViqscesp",
  "key24": "2M4Y91h2y38j4W5frWANjsq8uTHpNkKnxUv7HmdhfuRz6M57ZNdsKmgpBxqnQXho88XTKNMg3w1qhwFRQSx6TjMF",
  "key25": "4ecU5GMwNJSzBurq6UjiShFeBn83odC16vSiK7rSyxT1PfaMGLTbavhaHtBWeES1S3AJMDuPm2Ayjq54N68yW9Mi",
  "key26": "2tkKVU9m2iXFAY4YqXxBQ3BBdsbGSzk5wMCaFUbTfqqVDcpYyjvFrLAtyE7AxG3X4rm7V156sLEcDqykpZKumFo6",
  "key27": "5PT2Xc8fcdkMPjMH1C97e5eFcMu9gcuZRdYUkkgzDKaPkKihLA2gjRNUDjnqxinQmaTsdSAWjBp831k6HK94apzZ",
  "key28": "5u9XEDshGCX9jXtPN1EoCEqS4jvEs5VBsPRbby31o8f6ad9pFghoQZSVKTN1xUAFa8uMH577TbMaW33DvEDX4KEq",
  "key29": "4a9raHiz2dhAWUfkHZy5EqszYmw6oJZpMtuVrk671aZpkA4wBfVuqqfLRADu5XxBk6SoGopdU4UGR6vRL7BphYx6",
  "key30": "56bk3M8xKzXobQUtzLE1mySGuWyAdBuc3SVinkMFi1AW96iNheMrX5TYSsgzgw3Yr32No8WHmgpQG8ixH3PfkgKF",
  "key31": "4oC5gnFGJ66LyLtkyY6iPpeR9kQgDFgFA58viDJUjMhhRfzN22kZ1FMBbfVDY9FEp8AybSk1xaf9eRxYVxdhAEQz",
  "key32": "2qoAKGUo88MsiCaXMMnCpu2QFSUjRGHCEG64BaP7dndZZHE925u6E3ejNB7YaXGP8x4BDvfxsybSuxoDsN4NHwfh",
  "key33": "3W17vCAgwb83gdzJ1HakqUtvtKPkgU4GxiKLsRemoNb4SNjSkMenfCcyR1vXW9aWioWSnurMWBZGm7LTQDdTCYgE",
  "key34": "4KwfYKhY4hNJ2Syoge64qhcpJdfLHJcsBtkwH7ALkLxx9bx288NDRgnj44SEPD4ThJ8nVWM5ZNzNWKhCFW8xmCg9",
  "key35": "4VMwky87EjbWEQK1epDvWXWphTd6qY3LHnF8VDt1gkFW8XDczPMhP78EG3NVTkzSQPutiy9Udfs6W6Yp4F7Ccf6f",
  "key36": "3VvJmbkudqiPrmWDiwUGk7g8XetBzHiTLp4W3WJMCnrrakiVtVuhQLSx46ym9g1mRhG4g2FkdbYnYLDj28yEyiu4",
  "key37": "4FLi2FFpJtB6ZLwJYyN6xEjqgHghEzqohcn3YfrHCTbs49zbQZ4N9cr5SP8EBWLJp7gRX9XPyiPThcApEkyZrWB2",
  "key38": "2xSGCz8kVL9YXD1NaChfYkBw9ccrBP74XpE8v2pjRL6m3bQvvRWER95NNSVtZQ4i79qr2ZkYRw2uVRceHFY6S9D3",
  "key39": "3cvgFvguh5JgmGWhTmRNjHM2HKwvj9gVq9QXD5tKwKrjhw9Z2UfQBezQcEFudcQz4sPLWyUYCLmjK3M3Cb8V7WpZ",
  "key40": "56wgCTvCHvCkA6x6vhURXmvcs1V362hUqUkNP2K76831JJVN2HWzt9wb46xJ8jE7Rtacj2wWQ5vBqjU7Xi3bhdHN",
  "key41": "51WQuDqmbin8u6Y6AoEP9JAKLEsDTehoAopeABAm7HsC1ctQD64qNVgN7q5V7Ke25t6n98myuFo3xvgAxrzYtgq1",
  "key42": "66VmNk7JPWjjZKtPjj6hCqzS3vs8bSDfXDC35Q98hD8a9bJ8uKKpLebYS3xvWK3xkSvZoX5of5RyHTK7N8VWMNH5",
  "key43": "22znEFPNnrZ2JxAXyCWgbrjGte2Er5zbY3wAyfWdgyy6MsgRoQYYskSUsvbGG2fWEnG1hkcoJzh4k39qeFzwvyYu",
  "key44": "4aWbGC9BSAUgawCRzTKigFoccjHsSPJJN9i9aodYhMv3wx8WU5A1FNnHQYibNKNnT3cUD1tdSLR5JrgsexTQGHLp",
  "key45": "4Q8GFVGD2MkuDRnMqwpLAaWGsWoGgV2sJFRYursuRHYRQn52yy6Z73mqzXZoFRqbx3dqxUMvCnsDQt3npJfcb1xa"
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
