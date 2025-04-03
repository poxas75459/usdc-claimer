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
    "4v9Rv6rfLLRZamGFPrBpUUmpRmHGvC2UorBHYHooJyznVKivbMAT6gP8yZRFFxwG2G6TQcJa3eMzzoGVyUX674N5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22vUQCjG1FmZUqezeGSwSE4SUH8jFNSMvLgbkLQeQYxrWHcoELKbkMgXLfUGyn9eapoVhtwaGNr1EoBKaCwRKYkw",
  "key1": "4DfXXorwmqHp8yBE2K5SZZyNJr44NKjE9aCDfeA9LjBz9UbGhwms9JasYsdw3BdV4xgkpwmtxCqK8jFjNRpbWH2f",
  "key2": "2K2MHTnz8VBYJoQcreoRtaP3Y79NAboYiMi8SkqMJFdUNRFxS1WUUqHQKwhLntauifJVqgYgunnvdoeRHobAaQS1",
  "key3": "2w3rCd9JHzRfRVWe76jgLtzjqHrt7VYHn9dy3WPj1jgJ9hnW8LGntzAKPqJEhdNkf1fLbbfsH17tnqc7a5jqKYRy",
  "key4": "3k5bQHgmKcGY3bzfegKXq9SK7pH9LkiV5CGEZXkHEA3KgZBiLKKS3FfLpuDz5Ko6fK5TpKSznHymhfKqjzwizRaa",
  "key5": "2q3aYPbeADqhi7i7bothxTB3gAF45HozGtiQ4GM61aH4dqEq15Zu74oqpEp8po2GQKEVtajNz4a6JRu4MFaAqfJu",
  "key6": "mEFe6TjB33heMwtg1RLtf6NjUHiFVkPuvPDcw24ujHA89de43geBfQqGzAs8Qabnp9F2BpmPVYihh9jVx7yGTQa",
  "key7": "5b7nxUxqsmM3sLRShJ8FapXXCBMoQzuhTwJaSgLrRG3zEEtHr5BVkJttikq27sMDbjNhphTLRSguMboTLJ9DEDUh",
  "key8": "3T8Nnfhw4Zfrzg7uMd33egMdZJpNerWKf1xqPwcY93YCpkcKMvWEk3nWE6vReXSekyznsCnaRg1zNEFP5i42jtQF",
  "key9": "458WDPXZudXVLom6RatCWyfuT54jMpMGbXU3MAWTYTEgFdkgWiL49ESKiect2hPLucCSo2jMdKncG5GreQbLAGXG",
  "key10": "42NfRs5HeVH3TkUQGBJKARKwxi9oZ7kdmZLqy5pgp3XGLxSqqhSJTaUDUZ4ZRVWBRnukSNvSPTKPNLLR9zTEpK6m",
  "key11": "27sE28DGcTSi4ALXhtJsCLKQtvT4xKsMEncMukJojQSVFzFpeMwz1DiBmN7uCj499DrrdJgAyY4PLyWFa213BgAd",
  "key12": "5qtgsAkSg78VB8BP2M8L6UaPAzS5caqPD9tFvNNRVzvAfAeSkDySBeZAzJNKMyeswaa24dA1C23ibXJVVQPHU3ZL",
  "key13": "5h7ik5GsciouxTx3SEmbMNGwTn9Xu962aGBGLcUJCU99xPDmpXbY3Jtr45RypQrxqYBRoTNKiyHTcUGgoGrLaYwb",
  "key14": "2Yegr7DXHCPmZxXxqruTAvzGfxdTBbFgD3it3Bh9bpp9SnKHgFr84Btfet7uB86wk3GqP8ut9sTrdaYs58cVsCW2",
  "key15": "mvzSbwgaVDc5hrz3sRqQHUpeMAwUWqKezp2Ybxc8Lyg7A2zbvvjeHDNewawRC53i2YNNrguZaY4AXo9TL6N5uLG",
  "key16": "xcUAqPiY8BwbdfKPoLWiH2A4zJU3pDx12xQoGngCrJdpyEqqHDKxNgCNh1dWEoMXjHKyswq3z12Bca4jNcrAbYQ",
  "key17": "3dCWH7TYSmWvEpeypcjvwkv9PGutyjYCBFqS4n55aMBrGbK8tMysF1Lu56smq2gDwaqGZGrBiAChUZrV9wV1sdaT",
  "key18": "24xi1e21NLVyFaU2EABsrUungfXgw5MJtUXZbdDvC3GwJrivggJCu61CFkqX9J6CQc17VGJ9eWJBT8gw8dqbF4db",
  "key19": "5moFA3b7Mei1K8v2iHo8r9SmRi8f4hGcwzVWzsKzZqLr6fs1q2noW9YrgVExs6KgjPYk4zQjYUbpw2A2cYjSEHom",
  "key20": "jys8xtAxWMWwJXZUnanMdbf2wKJrE6nj5UqwbFDexXXatYKqv9h53mGG4JoBVQbgApyKsF7AUEVgnSNkin5DEy4",
  "key21": "jYTqFCvREaxGUJgRSxPLqYq5W28vdFL9tmEB6dW7rcJqsNVWZKQMTpDncgHUuciqX7kE9MrTgbmE5JJKtFxp7z5",
  "key22": "54SXHYTojk8oXxutzRhQUYLpS4mjumkq43Ta5BCc5WNp6wjoY6BgcRh484ATL2m87jaAjkwYPNLzmpTsPsVQHoQu",
  "key23": "2gkGPHQz4Yw8sJZyZFHedJ67q8asAhWhW3HEM6Li9tyvR4G3PkasJHPpuJcmJ4dzz2X3ippqz93PQpq6Ghxqbun6",
  "key24": "mhrZBQTJFo6PiQLJG6okKnfGu6uRxehA1jKZxF2LjkA5FoULKg7EBNKSX5yMT1vwqHvEQh6dxx6uWeX8d5suZtk",
  "key25": "5hDeez62NazjajkwcvTN6c2vnz4V5yuABemeDY9czz9wCndbBXV3nqpThmxowKfFUanRwBgEFKQM7H9ucXe7nbbb",
  "key26": "48rYCpW8gD8eSx5MFJWPsw2gPKKtefn4JUBPQfyjM6F84BmRMxiVoLnMDhcxcG1wJsnXKVa79D5ScUq8ix7g1yWV",
  "key27": "61dGYBacD9Lta4Yu193A64Yu7c1prykNiAGEjEzLP8RBFsiFPne6LM3M4kHP765VznLtMc5DLX3QB1LdrrK2iptP",
  "key28": "38tGJgp1EMxQ8aAvqVnBFMpGEoBuSBnfK4mToYesfKVYz21gsGCQrABNvfUGxVxj1Fsv7UwgB5z7KoLH2xAioCob",
  "key29": "23HgL7iQAM6zXAfPswjuAW2HTf9bZw2mT86hyZ7wMGAusdG7QhA8gtch5sM6x93eXAocu4uC6FfSS3MHMfPZvoa1",
  "key30": "4AopeuiZv1i33fQGg1QC1KaUgK2Qwo8Dt8yqJzNuchdwGbDxxN6NR2tih9mTGXknAbSXJegDMTAryLS5Kwv928EH",
  "key31": "Rtmzt8YMEVw7yJBXDLnbkihXSNZGxoNsJYU29Y4wtmswN2i7LaPFM932fhJg7gPCoVd27aZnLorvdWYjtTCZCrr",
  "key32": "k47h641EzefkCNPHdMpNyRbDS6AybUnGa5Sh1r7hgxREEevtykrcDUPWiZwzGfUFeqhXMuFc7XjCnB1Tf5B2ogr",
  "key33": "a7pW2yDiHuSUzUm3f4A2Fv1LCYcvyHxBsLQpuT3VFrFBHFAF3MkS5Q9z1uJY2pvTvtq3r9ZLJVykfr4AF219JFb",
  "key34": "oMvxz6cMTAmy9Ge3dTTjTqSW7grLiistsCGz6CwKjZWdFrhg1FgKHseCF7RywsgDfkwd47UY1oYxD7dMyjEp3Vv",
  "key35": "qmeZ9LSnZjcQgKKG2CMqApbz3xSQJwffCp3Hzptsa5DAGCx9cwtGKRT3vUai2kYEbRBxHoaijHGgftMa1FBDEzy",
  "key36": "G2RtEFdh3xYCxWhvAapj9Kf9KxYCAajqEn1Rg3CWdG7j5zgqN7Twt7AjmGmL86tyZqu4egX4wdHtcdsz8QeBZfK",
  "key37": "62xrfsy7ijWUcVbgpeHNnJATmRVCpwc8W3xDQsBcB5751NAWzhJKp22UygLVmnYqaExoUC2UETq219sFMBxgnrSv",
  "key38": "xnRQAdRAd3WkE8H1hVzLsSsfvqa5G8ZvED7XRxh6eVrQyZeXMufsKPWN2ZgD592Rj8rD1mnjzZJsxrf2kBbiiNZ",
  "key39": "3abatAQpZHds7i219Zbgzj3dkDsCpbyREuFemsrmC4gV3GbieYM2mt4Lk36QkUdC9Qom9LrLm2ixKMknyHDQdvRa",
  "key40": "2Q8Di5JnUxdtWCiVfu8c5fkLm7k8Xh5skj9FKsrEHipJVsJz8P65Y9PcJVCdQbVRhzNnEoxLfRAqVb2iLxnBRhTr",
  "key41": "4skRfKqX2ETL1HqysoRixZSrYXh9yojXvwmV7bsJB9SAmxKDkkCzWZpVXcavoG7cxrbRus3LQJcV9aaMPL4yx1iE",
  "key42": "5PaTSJZ7x1JjufV1dSjhaCdXChuSCKcxVBGW6QUCfdMyytfYKbq32uDCvenowjAxvae7gPugmYQKGn74czRB4wrM",
  "key43": "35gZCmMk2KJ56c6dV4KBiTKfCJRyYRhvvPW1y5m2jCKSr7pnLuvx8NaHbq3Gx9Ya5rtqbb5bEpvkPmLJP9v8yQLM"
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
