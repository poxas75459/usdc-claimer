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
    "5GXz249Kfdqr6Ax58axZFxFHnvqfXbzpqboPY6Rtc97Gx4keE28bdezMvaDn3Q6Zc4RvRFTr1dRQ8UHEXe78TTeq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QHL8oGsUtvq2xtBWYcr6igoGryKhxcwANEQjSX5TB7peceUdPmH8BwsJbAWuDpdPdKcPWyp4GEW5ZdqJKqEChrY",
  "key1": "3KVKbjEjHSpyNoUYxsoGnDSU9BrurJPxUbpoY1qRc6NjKgzqB1VWWUXCAJPkMRWq5w4tJJuJkJhj6Bu9qwKMdTo2",
  "key2": "fkWcAS7TwpxpEscmMWNG6uNVzigU6YgYGuUxHvMxDhmoWVeCw397fAjJVFNX5jsRQdme7LhBN9ERBaAoDbhNwch",
  "key3": "2jUZtQa7qzzBbWbi33VJf1ETAPBwXRgyB82wyAjq9ckKnGpNCMgg2RNWBEcEWH1nwT95Wsxg32jNTKefHuavSvqF",
  "key4": "37AGuJij5gxteaM1bnNQFYkDwVgdyJ4uAYYSN3QPjKzJsqe9VMBmtca97dmP1NFfE8bkHZGyhYb5UcFsX6M61Fip",
  "key5": "4GKJTyaBiV9MokiiXjNB1Fr5ryd9cyJQiQJ5MZccBL6NtVpGs5yxhjzuDf1Awa9fKRwPWP1DEQFe2LZ687anEusc",
  "key6": "3hf1fNRqHg6HZQ2ravzRfFFYA11LNRsZhR31Pw5RGo9XkhSxPRVjoGJSjrh2tU3GcqYwiM7KEGPhW4zi9deuXKUq",
  "key7": "xYwAExqJoZfTz7Vhm8UvMAhGw3saP5SpRebyGAfoanC7XytuSmNvtBmJUnawUd8YgzCfPFzTC2VNxgEdzGh4prN",
  "key8": "4v68EpYjbAcHwEZJouLyST1oko3rmmhZ77efAwNhLovmMiV2krNeQTebyxECgiwkdi5nVsaJkeyJ99p1e7medXLU",
  "key9": "56jonF5eP2YkG5jLCh3VcRf8vT6XvGgjGA625PfrZQuWxx93b3NXdRoTBB6foSZxXiJYPTQjfx26DYHxEjT2uHmR",
  "key10": "5svMp7jKktwxb3bMBxUGPiZBwYSZVZScymuaAmMoZZRxaphZpSjKB9zKRcCSdNtdvNkFP4o9BJrpD1pVwwXGovGz",
  "key11": "2uWhQSpcMmYUFgVsS4UHWV2cyWuaAqNRMf3YBdWnKZDnG6EoD27wUfSBjghvftfggbhwi2ZD8zEMiCGg5adFQh3J",
  "key12": "66PSTPw7uwFnWtc7kMeGXMmSzDvGNMpgidbrzXT45iVaqeRs1bmGVbYeWmPXbYUVYXHkJhtN3w5oMY6sP6dA8Mmk",
  "key13": "2zNa6kwvef9EEf7z5cAvdDq9x91PnuZJB4ourVQvdvvvKKGYAN8mTEzKCEw5aHTN8ME9SvssR1J9PW44CWb1jd3F",
  "key14": "4AjNBxu1Pu5LusSvT3YLYJGyrnxaa8ogZ3B2Mm1KajEqQZYzT2RbZfMv6uvfZMSrj88Bfo8nPxyZq86fFswQ5DNZ",
  "key15": "2fs43rPsBLFXBkquFm7oXzrAnyLRtdkzBb4SmruQ6sT1Tv6Vc3Jt43mScbC6AtNPRLUzeU3gYU2AEQik3o7RCCbZ",
  "key16": "3Gz6tjbHQ5LWeDNA7xUuFhbjL1KNai2sSZLj6yD6kxqKrEYaZXD1tCuDdQXJnJEVNUh11L1yWGfedfALG2rmJotm",
  "key17": "2PXcZB2Wh9TgQe3rkREvmb3sgAY1MGnjoaNw73KMh1GWHfKaUu8v2TXj6cqiQvg5mkQnwQf7ZdqMXvTPSnfhmXft",
  "key18": "5MfCkzDFLr3pnoWD3dnbn8xkMTcUzxkY813PQy2QzWM1jSYvPK693pDLaTdr4DqkTaboh8b91CVgBPpz4T2BrkET",
  "key19": "uNqvyGawiPNEgaDXm1P7J7Bm2HQ8RisTiAbEqkFazYyotwTKMMJEPtzZTSjRnyoHwJYb8f4BZu6sVVpQ26wHPro",
  "key20": "c4ojD1NZgaDQ8bijMYFt9CVYVcTe4BSn5E8tsJEgJ4jFSkHtea92Vcqvp7rKTqyL4ufo9M813iw6cs5rVyWPYK5",
  "key21": "2DdDzaZHvubaLfDBVcxUvscDcL3QLENviHLFynVbkLLcsGdkgHDNr4LpKVddPdNrmNru46Z7ikSZ13Wg5YNGN49J",
  "key22": "3WYYeVvFoPhcZtSk6eTHgDSAu7j8jzbXRvMA9Rp4tgSNYcqgL3t3T3LPCU31DD8K6sGBoeNLCSfQpmbriGKZXY3j",
  "key23": "4CWGQipzRcLysynqm1aHnXdWEFe9wd91mB79X9R9WyrBMQ4rKqgxpg6ZVm3bxQKs8UT6fbgnsKDfvd1aM2daFtg",
  "key24": "4HsrQ86Mznw8i9VBzRm7KNhSXDfKuafzB9yNN6wfJwWvaLf9CNeo3fVHNx2w1D8adHtDqJZkZxKUpAFxyHFdB5f8",
  "key25": "3yXzDBRqGYoA88sAB4qiwM9QLCzab3mxG3oSwRC2xm228yYUWzq1yu6yhyUdJGosXQR49mGVLA4kMzkZEWDkoF6u",
  "key26": "2vSsG9S2S1LHXoY2xT3Xxu8JoXNX6gM38wRMryju9aEjiQVMa1SfiRGHnu9aZE2HgN1Ghb6KiPFBGkVhNd4tGCaV",
  "key27": "pwqBpv1HLUVKCrtVeB4bfyVeZdoLopcphCaMV4DgyBzUNVNHs8TBgYFf7PpK89w8RCbJ9XXuGHZRZQ4o8biKVuX",
  "key28": "3JrCsZXggaCv77LjKimcmSpDUwLioYsroVtD5aMBhEeJzGTDAbC44JNVzrUskUnGjb98Nr1HSs6cTvd3PHwqZEHJ",
  "key29": "3ZGdmxic7PhpyMLKRc5yjN4YoizaE49YqJedEC7xHWddk65gqCa7G76UehFzNPMXtDuVGaREisumMVXout6dSDRX",
  "key30": "3HNnJurcj9Nv64cgaDQRnJZVu5tkRb6ATAf5uu5LTNP8FqSMLJ5wF5x9LYdGs9nYz4CDiJQjbmSq11RRKp8RRJaf",
  "key31": "4ZPJQ2g5oQ8Y48dGPFENGbFBGViP4HfA9FHJH2VRrfgC8qcwFx1vN6hBtG8ZpyewPysxMypsWA3Lhc5AHmakGs4s",
  "key32": "2bTYb7QbgfNH3gSHyqCp2JqGWeCdWutnnj3djL5CP1ZM8sVRjr1YPwH5zuptCeUbDUjwZbxmHbvrNMWSrpEGS7XX",
  "key33": "2nDvN2NMaFkMJ7cwc5sJzEzwBui3Pcg3g5W4NQnz15orB3zcUeaNLb9YbN8Axo7sy6kHPEr2SMxBzBi7Wvu4HfL",
  "key34": "3wLUubMsev7G6aAezo2dbozBgXLiCyrVQ9cEoZaQM9t5TwdsAHNXWtJRDkCHqYN4YbXUxkkAkSTJQQTaLejNyWWT",
  "key35": "4mdyBKLBKUep6SUk4444rJPbbVpqvSYnUsg9ybMNZSrNMPPGVyv2KATNSSZHr3PLvVKMkyqYr6NgpvBMoGCpqQDM",
  "key36": "413empxc8DKPvG64gzKSg2zj35a5vTTDqZTvPRjDkBjq8of2VCLRe3oaaatd4hfg1UBTBmdmc2zx5nnY8PSv42jx",
  "key37": "7MCLuiAnoD2L2XQuvusYbGpx9RM2QGzyxvuBEWgt91Nfctz6kBwsicfacLMDjD9pEpfiUkzvsTqnhGQs7PZcQZu",
  "key38": "2Rrgiieujgn2G98fdtYhBf3467v4Y9LWgnCNUrN4jcNwez6dRRjLMHF3Z5QbEApQB6frZJ8fQZumx4cZUiJstgQj",
  "key39": "SHFPAzcdbhftEQ82RiLNdKrakERh68MaYuUSYAmFAhCnnB5G8FKi6cCBX3LU1dMRZU8N56rByF7YmC1nUrqmo1R",
  "key40": "JPvK2kNtrgvo9q2a9x8QjiNbxDWR1D9s4HWYKqPd7Q2ggFwmVtUuWUht9Aod6cL2Z6xfY46brVqkKbUsa9xcXNm",
  "key41": "L6YjmG5PxGsinpSA47xgToR4ouEVCnFRLBAmb2xQ1HwJfp84zFzEyzzdGwufRCeGNmh8Gt4LkAPMhH5tqyqD8ge"
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
