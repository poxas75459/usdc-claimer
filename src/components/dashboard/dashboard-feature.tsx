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
    "5EoEvVwno6t2oUYMP8uaQqNxYARB3GRxrnvnCrreMJfimbAUXDTX5Syfowuc9LKeYAxQ8qheK2XFF766Nfh5vyFS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ny4AyHAFKArfuYtqSwCFmfBTYLZPxdDs2LD6TGSYt47MEp57WEs8CZwKoGnfLckR4nPQDLYYS7zj8E29QZ81fSN",
  "key1": "1K1iwKEGkz3bS69qRmg9SZKA91j5mu11BANvPjg12m3Hmdkk6riSynEZoK3CACxuGHwJPUNuYRZTUCWg2rSWmvP",
  "key2": "4PcB4F7drFhKWnY1yM2SP7iQha2VVcYNZA9Q8AfmiDNTr69EePyC8x2uLqJGSCs8bm5W4F3vXcMSGPVsioxE5MRc",
  "key3": "5q1sSsreLHu9Y4wMbj1JWDXP1bRDVTggnvb5s7T76LEyZjzGYKMb2sZ1atvVW3w2Y1KJnxcBGzuCsJRrueEGQQBs",
  "key4": "4Cz5hXSUuHiFajWGRNoNLk2JKX4Vep3hhbptEDGfsfku2zi68UpJMBJQ7pK2gxAFamfwjYoYoSdEvoGe9W5fm6pA",
  "key5": "4EZxMJnqrihixr94E31edaHU1waJYBp5cXv7vAATnUaWee5NWaZrd59tp3ueW6vGPRdee5DX7wrJ6JANxrvRwUHu",
  "key6": "2CXVa8RU2buy3PbYKEXtJbqzvKZThfDTiupdMems3gURLp3oiqM9eGgstzVu3eCLvTgDCqMK265SWWo2JTFk3CU4",
  "key7": "5vepb1CuM6DD5wMYqDAEyRLuj8opkL57qTiEnW5U6SWCwzZHBUZoLecNVMzjpHU8ch2CfW685C8aCPJFBg6h6VRA",
  "key8": "3GiDUTHtsL4WTbVTzaiFHNfyD6RdTVqArPCyH2fZawCd3FwnkhP8XseRGRUim46BeC8MMDWbEAzWPEUKdVnsD8wo",
  "key9": "3SA5DvcctwHsHzsRX5zZ6iHNg5KshLCWywiJk74vPCVGCw4vHVXTKmGJbN9q48bqXo3L4199BswbCy5CqezdUyzF",
  "key10": "4dxb8NYoJbuzbDdRW9Heat63e2mcd3tBmRDU8jrH9umhdxwUjyFho7JWYiSassQ1FhsKJB92CXEGoH7hZBPFgdYb",
  "key11": "4Y75aV4SsUNrmfNqv1nfbVAx2RKc9qd9jWzwc8WqaVYTFddksrtVZQKMwWYAt4me5eD9Nvy2uxKPnRphxSkznXX4",
  "key12": "3mcyNixcoPiMZzXS1wJPyu5EHh4rNJj4g9kaRULNMp8rHVBTQv4jL5dKsaDBNEDy7AfUYH8AFuWKWQLDJ2EmKUNP",
  "key13": "44Ly6Bb8zcyhkHhFHNLNbLdozevShdd5ZPC5bsWsWCi5pryv4hu483hioAQB4drqjQN9AHBywTvrJCvsqwEy7AQC",
  "key14": "3ngoL4h1vi7KP1hZRsBJ3SnBZ23ReSBXnxAyQ8RbHYZac9QXX7rKhR5ohW3PcMKTuzoGLm6a7SPnuTpC69AZhHNn",
  "key15": "4V4xgR5AvEkoy4KqCBk7cxkAfqSzBqTnoSXrXXmybmwUvZ136qQ8vqBSfwfKWEMci6g3Au8y5iYE28nuTte2VUL2",
  "key16": "4ifFTTGCj6VQv9nGBQeQ7gH4MivKsjs97PDmh5yB7385iLy7hvxGXiz5ngcEBHn3Fi72P912DGuavfaBNU3GbLKd",
  "key17": "zpzsmx9bf8i3hqgUqyiMBrT6iPcvDXncvdDFGrTrjtvFigqgrYN6KzBCrRxze5Ef6sFqEb4s8bp9D1vo7EkLfsh",
  "key18": "5iVK2jz58fgBSChseYCT2WsQQxQB16hNSc2BXo4sXjfL2ERLwc6GgwPZCi86xBK55a4R5WDMBpnwym5B2yM2KqEd",
  "key19": "qJTgCfgpjddq16krZnrxBFa2QPZftFB35UYob4mbjdrT4pBmGfjd2J9S5jrgCvkp7XfdLMTqTNjQ3jdZmm4fBmz",
  "key20": "2qstuV1gpLA46DNR916GWbdXvx2TK5R9R9Hrgins9qCASEnVpDU4G8qNVEKWzzz3BCmoxjGS2qnX7on9gjS5KQFr",
  "key21": "5xDfPrMV5j5RWYDebVHPsMzUG2Fdrez7yTwCvHxL8d2tnxDydNo7Nd6hb2Dnw2aeZ3gxfvxWYBPFFuR8Sp8FQVVd",
  "key22": "43MmzXR6WG8jdiN4iowyE8xEVcjENawRyphVi6vj9KynvKuFCVjmkynxBsMLMnhPxWSv7zAyFWb2H8KZ2fjFT58S",
  "key23": "mcRGFRV33W9mVuKVcD1niPRyz5RFJ7unqPK3vyZGxfHYso7yT6BrSd9t2Gf3DqTTDTnSeNe3NnVykujm2FxGhW4",
  "key24": "5ViH98ioas1fydbRCFcubTFppASNuWYK4UQrLEwfULwHze6UpEHhG39wBFp9VaHkXssqKemcJAPmF8hwavFPTyv1",
  "key25": "2RBjeiLHf4mFPj4VPew8yhk4jQZA5pRGuLuKHsETd47HRu6G2nj78wYhdtJ1ELYMFR48mK9PswYsduM676VvE4GV",
  "key26": "3x8SNhqmLTRXaHcfET7JTU7NjoY1SWbdmVPoP9VPtFNCaSMfS73aGwoKk5q448fRiS1rQ36EivVVFTtMRrW4gxof",
  "key27": "5eTREH9fBwL7TWcHDsB8FHbNvhSUbz5BGAMKMEjjY4S8p3zjjFJpSCX5HnH1xQJhobfa6usZu59zPGuKmNDN6DXY",
  "key28": "2RkB5ENXMsmWCsU79QEos41ZWzrJgGy2tBKhjMb9G39hJi68HJF1obTUeUgrQfiFLVoEsvRpWBQCYrog6kkwoVeV",
  "key29": "5GZSbZTzhyJK3tSgrySfR8kogg1XURwha3rgwr8SZLuzKy5m4UvsQCmcQg8sX2F7iLkdsDrv9zEHhT7MiGpsfdj1",
  "key30": "31HqTaDvPfGk7xzoQMUhGcmwMog4oacgScwz2ghuPKkPJzTHrvxmiSWXiorTrRjyUcmGzpciNZvA8adDGSwXyvDy",
  "key31": "5k2EeVBxfDvcUwLmPvHsSCghSTJbLhnbCER3HSLAUiHkHUynnztcAZqhBME8ZDrPUgaXUApjoXzAyjT6h9rkQvgc",
  "key32": "52zLkVTDiSHhf397WZPbDWVYr2Jvhekssfiw6csT4WX4rG63x4xvZ8d87XAtU4puz2FMqHGwELdWM7YqyVX7HhXC",
  "key33": "41S9x8TTjpDxT84Z2trDsWbN6B4S7LovMay1f2Dzq9sn1d7YymKseTyW4BnUEeNo8kSu2ibjXtg3UB7uXcqCDBkp",
  "key34": "2APZ9JLXoaCqUYQP64NACa3TEUocurkwzAJNzgEEFttGU1WvyFaFG8Afn6X2c5CrjhY3vkXMdtu27qGf4KkoCqV9",
  "key35": "mxVyHYRhhi2s4EhsiNEWEgcMUAp3BaUDCzDgJJNhjK7chjFfnjDwhmWuDVFk6r7Nw5NVKJo1Ns1khQpgwSAZrwv",
  "key36": "2bxb6Vh6M9yzucKnPQXD5hjC8vjaroKtV5zDQo6s7h3j8vBLFdMXQRdVTFe2cRBQsjDREWb1rybGp71DLD9zMfuR",
  "key37": "5XBosNX4DeCpW5AdR4su1EB4QtPVz1wA87KrNaw2Jqbgbo14PKqrHfK9T5w9mQEkuzHw14xsA9qx9WyBwfdTSV6C",
  "key38": "UKb6LY156RgPjBExCQZC29wM8cg1exSwXFUn32Ado5zQEyNSeVTFesws1zJWNgGd5AUcfpZUY7yZa8NT4NK2HmF",
  "key39": "tsbmjudNU7ojs2jtooYx72t5avzY7rpcEXsAoaPRqyBeSBQvMpCbvnz2oZZPnGzchjmmypiSAefHF21b9VJdNun"
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
