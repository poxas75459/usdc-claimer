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
    "38p6mep8inG3CE7oSwSeAWy8kc74bFaM7UcKcAz4CHM4zeBP99oUtD7F7oVha6LL8CYuWNbo9cYLyhUCaesuY3N4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z5xMA46tDEcVhbjmPfnUxuA1G3Zuy1repsn5Su7yyRgat5nWkFakX9GjhBhpMJixqEgnCbLtoE4mzQV2Mu6BsJ7",
  "key1": "27EKd6vWtikscg92fDNNNWeqQnAsX9G3QVZUecNFxX2dbSo5V7UvGZTwKP287kkmZ3329QRksp3424AssVwMXRhE",
  "key2": "23JDVsHo5uywcpT94idcQwMCfTnNLgykrTWavPmzXtUNUpYXpzxi5wNsUZBLia5rJeM29XhePwjie1A8CrE7Wswi",
  "key3": "3MgzBurSsFvdD1BroeErvPg9HkG9H8GHasZxjdeY4VCKJjXrCcL1mmMr9MrLQHTKhoxSAB1CoQ9fbJD4SNyAGp9Q",
  "key4": "2Y8Txi69NPVEfY8dtpyZ7y2kjg6Kt3ZTTMEEV5X7J7g1E8aizNw6i1VhDop9r8tDz6qcpoAHFVAYQEH5E2xGfTV4",
  "key5": "HgDq9Jm1W6AnBC8FWccZE1TR5cTkXG6LTt7Nz6mWKv6WiUyFXi1Y6qUBMu8WiwCuZgNQ2eKVjksSoxnsUH98Sdr",
  "key6": "22JM7LkRGGsLyc8yvJyRhdqxbk9VCYtVhAApN5hahkbGKw14oTFM82TCUX2T7DWeTX2nCD5JH7NooznJ1wyJPLoZ",
  "key7": "46A1AgRatfTfFxrwfHaWRhcDMkC9sZrG6hyaftxMswqbzEjS2LCTXMj12KPajy7dM2zzkEboZ8MsfvknpJvHWRjJ",
  "key8": "4nsV1YAzLAyVKFCDbvjCcFpnCGXakf9evxeyna4XXUMMkC3rY2knrqrUSKXmXotYdDWHLm29puotHxwUpRYY6vFW",
  "key9": "5t9QoTJjMT5dur2TctZXnXXwB65yugaB1FWzH5pcrPcbpU4jCaCxCEbB1Urb8o7FfPQjKnJZvuauLrPVoLpsewjj",
  "key10": "kxoKhC2rWGBRQ4F2bmLkeYxKWYGTGWVhJh5GzN6s9S9UMxV4neksnhXPbaEQiAoRgKHa2zvPJri1D6V6wn6AzJD",
  "key11": "4Mz69NQ6VArGZbYwuHpWw4Fxj1zpu1jviM9YuV8Az74XfLq8RWUM2xumgB1nMwp4UEwdrgx3YGJuwX53rHvSSQDZ",
  "key12": "61wfhDvZuS9EPC1BtvLRrAvB6dDWr9JEBxhC2NZikYRuVVL6KTWSBLXymXSdTyJjT6hvbYFrQ4wzePzyGqXN1dQ9",
  "key13": "3D4T6sbUcWvorWXEquaJnbvAmq4DFmycQR6h5H8TfaVYEPnxiPCJJDEwtfS4ZdUxSPMdZhUqSo7GpDugduVVuBRW",
  "key14": "4QHhpuEwEMyn7USS6MQGJC5NRgG2oqMtA8UwAxp6MKrZ51aHAFjYP2PfpxPNFz8kPyz2n9WvdorjPwrrraDipBtA",
  "key15": "3CZgTKf4BbWxz8gC3w2cv9atFZ24bkNDzwm2GnZ4jhSkFxLjWmT5XCBseFBhKyMMxj7CZMty2mc4Ccoyj3ekmsoi",
  "key16": "zmDSj8WVYkv5K1FDovg2RJ6jhe7n69v9Af5FkgTWLygQRoWKBujf6rfqeBqLH4YqvaRB5u6xpRuJWoYAJ4fQux2",
  "key17": "3inqFCSkSiHmsWvDoEFKZV1LT2naXMswWzD9kUFTLx3sY25qYjLZD37WofRU9NsoTRXmb9uw8WecYE1ec1MNPFTd",
  "key18": "5djZc8rFeLMD4zSikfzYoNVchKyDqZLAxm8S8rUuygExnpiNuQqJXuYWsc33uakCUcFbD7JyaWGMjhf9udmUuwQ3",
  "key19": "29k3XjP71rtwxA5X4okASmunLwKC751djgGsPpgpX3Q8BbWW5P3Rxdyy3EHope57ChAZkowFpkeYQLk8qNswzbie",
  "key20": "BYEorFHdKzip3NarC2Vuhenteju9aie1vpp5acwXFNsJkmCSiqxUrEz8f9yiRTp2m1wJ8uVygHncQR3FFnhMiwR",
  "key21": "71877Fy93GqA75M73rUwNDUL5hezZaj1WUHxfEE1A2JvMPhKcsrHnbm7acSjNhTZPzZLXM6zeTz6AXKQt8LcMFh",
  "key22": "5FYzYQ4jKeb7k2HXzKU7g5d7N23118S2VCdymXXyuq8n8nkij8A8g6xX7avyTmaBXwsAe2b8ioxzneyvudeKckja",
  "key23": "5nDLu5TBaf1hRz1Eyyo9SzwkvWToLJ7fbRwouZmxrZ9trMiiCPooYguQeBs4KPBuEe5SPAKQ6W7rbXrdwsr8McVw",
  "key24": "XCC4sDSXRcrCYidjywng78GKgBQuWq6s5WXrSsBCKLZaZfdiMVXP7ub4nbLWw6DtUm37yEmt2YWZQbM8gTgEyyp",
  "key25": "4MrnKA91ckwcsQAu6GHshcvP8Mh6SqXe52NbVg6ixVSTkxC72ZGg17bnV1fVPX63D7D8Vc2hV8bZnamARCstF3H6",
  "key26": "4gNGXoc78ZocGMFHRD6vLvgcDGWy6TzrzvBC2MU1ajnYjF1T9R23VNyjRDQhhn4okqiBJutkF2NbJ18ikZFeKFyV",
  "key27": "2W2F1dgvDS59GEVYw9yW3zREGM6GLdnTQcYRNaYc8wQPaH59F8P6RGddSCQLNbeTTNqjaSXpxgAuykYLrTHFhQDj",
  "key28": "5rzaFWAGfTGBDJ2rPPoCqqdXaP74nPM6H6j3mQLLLEUy3eDEn1mGjigDhr21RFunzRxjfAKjFjVZviQUaMbLnwfz",
  "key29": "2HdBCfb4gwN3sfs1Lb4vfmyPK9NWZSWX7irvjTXxujpMQYeHrWPMibd249MMzDMKFQESzMmd8S3F4Hs9pcdiGhx2",
  "key30": "WpDCcYkeRYGF1LGuktsTzrropbmFem6ivou8tGTA7ZDELVYugK7X93J2hZCJoPgbYgrzWEzhMRfwSTfywRbDyo5",
  "key31": "4Dghp1CXaDdepcrbD1NTCZ2y7AdmDwRbMurfpvgb2RMp6SEkUg4DaoCTX6eRsWRc8NtQczrcFnoKHwboeuQ9SdP4",
  "key32": "3DKV6FFwKeT3xXCZqXAyDWTM4mXpzDpJo6NaPekBHkZwZefyUSmydUTdgyWTzXY34wKtDu4bL1Q4yeF4M4fzhDtT",
  "key33": "pzdbbMiSQH8ELFzaZbud2Mno6Za7qVPki6AzDj8HnrsQRjacEJC1ZunixJgnpTRSZNrnuchS9V5T3sSBjvQg2V9",
  "key34": "2FpDiziJcYMFKTb9SfYTtk1MQcNGWt9qzLNMekU5BoCX2xRY35AWSiPE4nBfDEBNgL948wcQS3GopmGxKM6EcSSE",
  "key35": "4RAtE3jVoX2Fok2ZJLrxeSvv3j9U3mYnP2ru2qwPMsG4G3yLSj2H37DBN1GWPD1YQJCXSmVgxxbzJGKLQfXbxfJY",
  "key36": "4r96pbyfPVw7tWJ89d9xadyWWXUs88BCmsMccPVMsw38o9cuAAu7AYcYzmkMDXAs3NDS4dfnp59ZdDeFPsapa4SS",
  "key37": "5jdFHcbxufQYQhkdFJKvXAkjaqf3QbdaraRoH3PwnCqbkyLiSQX4yp3vBZ2Ea3evEW7jBge5WFwMF2YYXwWhfZYZ",
  "key38": "5zUyhRNxCeos5doVRsNzNzcTHcAttph2AhhCHvoWh4dHSkjyJupHNqDZsMUxv1mARnM2AVyWHn1stgsDaszGLjmn",
  "key39": "5M5mboQ1Dr69YVhQHp8L52ELq136MLnJMHetJCFJjS9NXnzuf5fj9oVow8hv7xpASWm3w5yTUf8pXbWayamx4c9V",
  "key40": "5EF2wVvYA4Rw35Ew8h2vbkoa9ytB8Gdh6MSJYf63NF7ZbX8ArqmvChDmxkiaCwuUn4wjP7xZsk33cyS626ay37x"
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
