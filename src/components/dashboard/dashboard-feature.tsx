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
    "v25yUt4GQ9XFHk8Yo8niEujpH7ZwkSiQ6p7NUHqKchGVC4Hi37RwGr3PUgDqaz7iFGB6QQZGUjuC4QdsXHTuKJv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YMJ4nJZi5CUcdvbXT3EMPhqZ44de823sNk3ScZaJijBriTuxRd3G7SrRoP8Gamh8DyJmBX8p65c9rJE14ZGxoRm",
  "key1": "4bKftoYpntqqFhrvTKhvbG7NBCn3a6idjJFD76dre4iMPbXJ1UNgjJ7AyN9JxyNx3pExuhnHoxxAdRZMYNkAaUkJ",
  "key2": "52SVdxuZ4qgfMCKfHtGUhjkgUMcooqYM5bCTCbJC3odcvrpXzJJ1NEJNKnasqQhMbJHQhovwqDgD2LAUY6DtzMy8",
  "key3": "jg2GJkaw1fVu4d24h8QfLagpbRXFaRsXdAPrJ1vvormqnngg89QRYhuXsWME4QiAaiZZ37q3cKMa5rDeTTf9hU4",
  "key4": "3ewV8HLa2XFVaTyTPcdoPYpDjAu4gePsMg71j1KGtDxTYg54TogxQ8AGb4p5Dmo9PPbBTiAZw4rkEMeJtytSqYw8",
  "key5": "3Befbe47HrcF8DDc3mE9PAcyzpFV1srBftyPv7D6N7ZkMa71nejxsCtpaaLQYsbkAnkgQxux8NnMuaVswDfkaQo",
  "key6": "2LaohYTcxTZkpgfsgAqwp456hArdEhiH5KATj99Xog5ajp9uFmvbKuZzTXxb2B57QdiFjPVgg8MTfjNvYM7LeYLL",
  "key7": "4TMZNAisuTPZSjjx43FrVYZBPVh7onLosffMnbhSSBosmEhEETToDLcvJEEJNFMtcC4Q8GggkJaKXLze4giY8QFF",
  "key8": "3JtrhpgZC8M1G7tw8V9eSHG4qR9EeUdjLTLxSHfwBcz45tiFMQehmFk3G43CsPHcTPhToiLyGNvPQjD2Zdmbquw7",
  "key9": "4fXJspd5rK6sD9C3kV1a93kGux9DmFroR1PtvnH3vcfjau6zBtgPLGWryicPVUT1WjUkHKnovJxV71tM3bemRTtT",
  "key10": "3ifAoa2kgNRmsQtAY11BRjPS9wXri5SSMwDrLSUsKaCwhCxTpXBMrjNnfvHQheG56hMn3C7skFQrHsYSMQKZCKRQ",
  "key11": "4pfcEMV5yLtw7fd4YDA3i4uoLgwnQSvvDnrhtFM3qr1NgM4Au8qg4mYqbb9QbjofvN2hxiVrQvLAvqVmmM6c7LJD",
  "key12": "36K5vYn5LE7rx3jfy7JfXWRH1N5C2qRuc7Q4tiYNxgTLRwKoMkG2M3HZLhdDBuJWqewkNJ7Th86uXcRtRRbZv48f",
  "key13": "2PXJYvQrkbh3wp2dVUocvcSDcUQsfEYm6caaNNabxYvSUVMWyuiEoh6oH6GBND1xLomBNUCfjsBnBpDzft4bShWV",
  "key14": "LsVkpecxB3a5usdAZSCALgyo2dZsQAy2etYi4UurtVeRN99rcwN7p39XTa1rMoVGGygCB9wfJ9Ek2zHhCeJNGAm",
  "key15": "9RpWAckLhoYaBjqbZT9GfBMLmMnx8RRj9h5nxTcxrWTkpkMUxTtMeYDnf7pjvEbiscjK1xqSasMEPpMYdBHaTjG",
  "key16": "34s6abH8DeirbEdr9khneJad6sGvsS4UKJ4g4AswMPSNG8yx95PXayYuzbU6g1PMcGYtDhiwAGrSbQSL8WLF9cUF",
  "key17": "2m8BRs7x9fuooz52iHchVyi5dsrMNnKPjhRZn8UpfFUe2boCAGJfw8pE5xFW2QHzi95EvXXiaSGAKc2HxhiWJGuk",
  "key18": "v5kMmsqoLteGwRdkpn6mtwu4h86TWkryR79JhcazZRt5NXQgbCAXKPrP2aDx2ZZEsLegEAPXUbfwkiDFDRG73Ue",
  "key19": "2mQV6oM77naTw4fDUjFhkbUGRKDaEkGyWnfFq4tdaeyC3UBxM7AhMdgTkHDMdzpSyAyK5RNRv1u5NX6ghHcUJaPj",
  "key20": "5iyaaTLqFfwJ9nv1ZwouivtLQ3dbcHqqxoBewvgvZZnjhDbFHMKvyrpixHXXh9x6e1PYfdAAWS7gb5ChsJm2qELq",
  "key21": "SMjX1r7QfXxYKwQqFcgXF4wnpS5caHexhhZZyf8rLzXGAdAyAD5SyfGy73hQxHGwbSG72zS4KppYbm34CM5oYYV",
  "key22": "3ndDihbvHgxyJARHz13CUPWXh6JWdFG2YwmgEYKVe3DUUSpbAUwiq6hCt6r56z9QJmKvhNLMZFxYA117aCBRed9x",
  "key23": "5J2m97FPdTozBDKNH878TAhymWU2EsorLNPh6VfpbMpXAG9BDEg2ARwt5yLjuK1UbNJyKF98EtxFNFuGdL6dpJcd",
  "key24": "4xmuLpXKyuQwF9VDxHE2oc1L9YN3eQMDbLZJAJXmw5NPVPFKcUHYN8rU7Am4VfFchTXbtB9VVXthPdNdWKn23EZu",
  "key25": "3odvtKakQdbrUuaYSWsCLnDCc68BfTnAhfubpzb1o5ZZH3XuahMDbL1npemu4SLjvCrMvrfwQAMQdG2oPB45hEvP",
  "key26": "3VtNdBYNXadmzMvAXsfeggaGhVj36A1D4mD63SQh1TJf55yk9YaLJTSdSJifwzvoqYFyfoPvqfziUKJu9hsWSUza",
  "key27": "jSz5B2AJ7WhtRNedoaVNDnm4NVvt9PdpC9aDoMH7don5NMFbF86XjRa6yX82qRBwePPZvxdosP8E6GzWjTnA7H5",
  "key28": "cur5tXdEyiPSW5GdmdhzZ8PMaGbx12B9X87b4hHK62TKRiD3rbhGruLebHNJfwx52n6WtkJ5b4yYi9fSzAGRyLY",
  "key29": "a54UXBZZhiEcynW2MGdwQzKJzu8exiXNKARuTinPHA5m5WnzGc7MVqqzW3w9vbHNeEnewRtj9hZ9H34UnK63jB5",
  "key30": "bd6Jk9HuUomSBsjw2fTuKrcYyF7kxtZVkd4bXjDsqLFrTKwz4SHsEBEdT5qvxzr8gyK4TRSNg8GdvQCiZi3Nyqq",
  "key31": "3zPv2ddPKU1Mqg29Pn83vB7psStqXUNuDjdFo675eoByauA6GF5GCsKeCUHR7LyBAWvs1xkaVTViAepWu3h56t1F",
  "key32": "4V29WxMA6MwA4XnyQPfMJT4acPKtWNVWZd1kY59u8i1NuzsCuQyL2KKbKWj64ATjTz9izPWSArdd8aVcVy6N9nze",
  "key33": "3dYGR7Kp7fUnWPxGKaFX9zHU1gH2oFXLVnjhpUgmXHg3MMcjVULgQ3owqWQhQGUUzhyj7GaUTyBe9i9V5EfyT6EC",
  "key34": "54yJJG1ud9sLVPMBg9DaM2CicJJEYpQwTygDcteDirHrMYV2C1PyR31zZ2gzLizHCebPS4ik9sM41icBXMHjKJ2C",
  "key35": "5XsAmjSEhvsji4zhkTcSWUEoU2xWJUcDmRucTDAVzXa59kfiti4MwgbPX6uEaPHvCekobEXmcetcZWYa6YDa31sm",
  "key36": "6xjcGxXpzuxcjDVzxg157jdKfWt17bZdCK24KZWdFnZF3KenEpHHfK6AAFAv291vVtCZpRnShnAEibjdj5HyVF3",
  "key37": "59oPXeRBxTSEoVnRiTKHZw68FgwZfmxPmLJtjJAkF13KiJoyVmngrZ5HdmXF8ubfJUYauEbNfDPbRifJ96AA1yxL",
  "key38": "3N4RghU8vHGPrbJiBNc32PBNuoU2UksoFR4aQNGVcEnEjGui7rgppv8RZBKdQApHZQoVfFkycoAdhX2ZvBX5phJ1",
  "key39": "2xabAr83cmd4EshuB8RWKJJqGRtsDZAh6Xmp3zv7mPsu2HAyxCNyJFVgzBpCHrNB2qhDTn19yD5Jv13LrDqC7t3H",
  "key40": "4ADtg4C6XEsqVZ5wr2W7Pm5UxGSLtGmjfqqkoqiawLuAFwwqoaXnQiUi56eUmaFFWYwm6F6oCTRtmFQeRsuEwaGP"
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
