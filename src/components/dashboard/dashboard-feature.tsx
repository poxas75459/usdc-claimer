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
    "3bGSMLHWdfUXkJ5y8QnwVHqKEhA5g6RqQsJsF78bot5xbSyzzkTZ2biNpHhmwAWB8o8VYWy6PPuuku5BhZbzagms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A5agkRzDcy7es4NzPjMDkBTVCSe8uuC27XzRUnqYUYpF7ir9o6whhzv5434LXovUWva3ntgLUxxjMe6M6VtDtYV",
  "key1": "63m2jkgkSdr5AMoX7fBXQypnXgvzmUiDXA147KsjLkGrh8wGYXUu14KPue93yJ5FcwPgTMLdWEowBZASNwrm9sbb",
  "key2": "28yuw6usiLohNJhDpXgp61W2QCsgDSxUvuAGSePGW8NUUXka1CdkC8NfdkTicXN5aZ261T46qBdYEUhZcfyDJj6F",
  "key3": "2kmWayE8bwPNWrQmSF9KnkfZXTuvuD8B1FYu7UsQy6Hy7NtLtRzFr1yTgFUiFicQDmGeyAgqHuvhLMV97wRL4sSX",
  "key4": "VYzEdZqkRkiQ9ivowdBD9PNXcKV7ngfWnPKq9asduQinibSae15BxFkfShwjozNaBo1mdHo1xaY7Ku32HXn9Sbu",
  "key5": "47Z3FCNYqPrmJLAyk9Sype9CjarkCoLRCPB1F4BFRXWAjKcaGgajdRcwFt4MoUNP9pkhev5NsygGW9NpPyrf24GQ",
  "key6": "4UMMQ1oVZHQ6QKGfzySATKLZKhscwvGPLaFFFn5g7PBeAMxNGz4GR2EYSUPxdtjm3qTAy9WHshSSwgP3GJ5wvehV",
  "key7": "3jmYejcns7NKnWCEsKAj79BvWBU2qU4Dgb1eyMyk6vjJkEacnn8aCdjfaxuVB2F1xLjxaBMYDwQBvjTdxzxx97Fx",
  "key8": "3bqD3iKm3q3E4iJghkCRoWVTPzDbVKGF6FTpDw6sya2XNURx4Sg4gQmSZ4jxZaQ1qDWhf9NTPbukpG1KhqtthMM8",
  "key9": "5jJLZDtbukdkPzCSGVAF7iRG6tigFxAVaSEwCCSZN9UbjAeGPyBadttYmyk8VaXupn62aPrNj4xdt83DRXr44EEg",
  "key10": "3e2oGuXVqa4REok16TvTG72L9WDvRF7FFfmRfQE37YzVsQ43TLtZDAqWPHU5vEmBxwnr53dDxeoKVLyRGhPBbU3M",
  "key11": "ctfzuBkWEmbtnX5YGibxz2zCc2M6TXENsJYb81H9HWKmnTAmUekWRRJWJ88Dc5ZdkUTftsnrqLhtNdE4UJTU9JC",
  "key12": "5VbkoFk6X85TgAuu4WmYBHxqzvbgQWdEMjpAwrcN4VRAburqyQNdKs9M6Q86YfieMdUg4JqxMHdHEsTXjYkD7d1V",
  "key13": "4fTB7ydmxkbnFnAgRYfZqXXaFkmSphGnxGsxL4V5G8YtkgrNpckV1tdhR1sY3GLFNuWkJXzLRoGYpMMWg6RBPV4d",
  "key14": "32EQMEenBKxEdDk3tuBKyE2JpUdKtXfuJcFGFYsr3GDenbAbKSMYdXbmcSiGVWqjvUjjABu1xSYEizaSKuNaYwkb",
  "key15": "pr29PKRqgvRqxxXf37dGJGkJj9Fnpo9RMrD7rpg645ion1nF77e2ruBFr9auLzJGxMAngmgy35Mb21jJNyjDY9s",
  "key16": "2FMLroSX4FZHtGue9ZMXoAGYTLdGymfsVQaC7sVMAiG58Ps7QtarjAKmVY6pFdjoF63m4k1Mw8YjKDyPutrx6ygz",
  "key17": "7K5abPyWPadzHd2e9WkCkFo71e7eUNdkkNy2qFX58dqAbadw1YcNC9T6vUsQBkVGxUyqqa79u6deAfrKqnfvuee",
  "key18": "4mayoLCmVh2gPQwstVuCYW79wZmeRNHXjKYqjwK4r3LuCxa8fkDCAuM1hDWnR1y5ZLnM3pVAAKNkLc15SuzFUcGe",
  "key19": "4CNqfbFMNEBzqBDgpPWRZ7XYbZZdkrpoNAK6U78XHFQQwBM5oa7fCMQRTFWiMD9BWQakqTFVzpyToaGJ6CfY6nps",
  "key20": "3Ms9cbzTxF4SS5yWyHUyJaHgBkrZiSE1KYtAKBTfV9BeAdAxSYS2NHGLxaQ58AWJbBc1NDmtLwnmnTjC3aTd8nki",
  "key21": "4JPiGgayVLTsm7vfYnX6pTbEW4VPTGARqqPitqs12nSWVR1B2XoaCWaV4otAT5stAA7P3bNf7bZa4JWmrfgVbfzW",
  "key22": "AtvgbHPLf1AM8hb6Fe6R9fYXqdmkXkdd4LPxGCqtbLd9Ka6WaVfP1V1ACPEdJxQeBeiPvWVevdutnN4MakF7rki",
  "key23": "4TsLndUjEf2jg6pgHrMMyqjPCpk9ECiF8JPZGm6rnE1R4oaK2hsxqsjgafY3EmXNJM8J6fLG5U7yKovdAYEhCaEe",
  "key24": "5necJH4F5rp7TVKqSH815p1DAtR34uPzZH9Df786egdKN74ShBmGka9eDqrjvYVFEfXwdQQr79JUTUahUQBNX4MU",
  "key25": "29DBZPAEk4JD7Fu175PiE5fR97Z6ZyTKHHRBv2N7ExdGQKqVCheDAjkQd5z6Vs8xxce78nEjGU41WCMDwdvTquiP",
  "key26": "3r7Ku11RE9WKCvtfRm8AG2ULJx7tjn7TFB3oytkDnKpeCM97NMFWvEYz16jimyeZ5XRTT1Fc8mFNWKahpzMGCkXZ",
  "key27": "3eXrjk7fH1k9Bsf3mR7ABRKK3iiVHqe4PLk4Qzs3skCxmWhhwyPrRc6spDcGeoxHz25rpFviWkeaUWw5oKqyNwVR",
  "key28": "4ZGveCnChhVe8uBuG2qZG6kQL52BjSW7BA6fvaGgXHk22zjN3JhJRLU8dgV8y18TkaZhReqA6xkHXN1hvi1sssXc",
  "key29": "62brgt3grvgBKDGyFv1xHbtSQSQZsEkzWJ9xukTZYVGkfuxNAzftyoRbADuWNLCZF3bnoxY3yDXxCsTGRWxzkUhs",
  "key30": "qH9rBrk1RadwT4TxxrDc1VTsqWJ5SyYdvsdpnu8WY8F6R92127DGhco9CxPGUv8DvpsSHpPgfMQ68XxcdbDsukQ",
  "key31": "5PyB9geCcVqTNh7PkPfGYM8wHugTRHR4cEUVNwrnw9LNocFuqqbSUvj7ptsTKWUkEgn8Kh5LkaSBcdPrfDQXr4ef",
  "key32": "49Nt34PFMNcfHBrQnpD83ZGcu5AybcCAP3wDErFE9uWvsDEDd2WX2EiqhTj955nkx85zHSVKzRWXaj9pGeTFKrXY",
  "key33": "3MRgUasDF94cfZw2U9BxRH7d4WwQVX6yFDUcMiAxffpXQySrmJm8DdxBtYwiEmsWU3iZ1GTgVgm735HPGG4TtopM",
  "key34": "4pkZUyAhEiWeVSH5s4CBCvB53CRGedYxqhPVhE3xgYfDpJ6j2NUX1RwcQZ7cG43QQE8s8gVqFAPiMCyWpqjLAzoU",
  "key35": "jegrmmwkjTEeRJPm8746TnGyzFkHgKEzttY6McoGHGHNg8o1bsVMi6H7GN3hDyRvu8HtU6oBdV4e58f1KTwDmu8",
  "key36": "2Qs5FZ333qFoKBmtRE323oLtgBxiQMbQE5Eum5XhB5S2rxjTAcUXSPqS53wr3qagHGBFcyBhHxroQqEdBC2HKMw1",
  "key37": "2waKqVWm1xWeTaLBXiwm4Z27gXfdg2dK2e6bnQkBmAX9Z4Xq32eJFi24GuF87JYm7w8P3GqDHTSfp6MfnR3G5PT1",
  "key38": "3oTehacqVetZMZzPZwpmZiR2PyJuVK9WfndnUkzjFzKBPW21K3GorLkUBRjjfyMquPpAxrqscyg7rzTuooJqi2Ky",
  "key39": "5bf5HZyeCjte5VTDZNFaoHcfH7rt4yjNtgFt4Rsd27nkZRuCfDgibfn9NiwnYCqZYhgzovEnrji8ibNLNTFPJLVK",
  "key40": "3qAVY9NXjdan77hR4pAtvvG72vZUJxVWK3bWSH19JoVrcBcebj2xjwhnJCAsVa8rxV2J3skpuTd1K8usDa6VM3EX",
  "key41": "3WkvrgWegkaNeKVzK13n79FRXcfwMCKfUthbEh4CUY621Vxn5R64sARWH677h6czfBhL47b1kaAuXYvhgXhiYdsX",
  "key42": "FGDPmjpmNQvfDSS5xkWtpohiJTFSUhMrmycpTB7suPbkyGo1TTTJmTnyfKkahxhwhsXQKoMRje4pL3ftN2bh6cV",
  "key43": "3wfkNPEMZLEESc8KP3AyDJD6pnQr6wbBiMVoiGw1tuYQ732q81yNenL1eyCAoYBUVAj62jLeQ6mXwJAmAevPPnBq",
  "key44": "22xMg9VM5QnmsFGuiDFiSkwkWbs47MraWdvxHC4xJTRArA8pnTbDemZQnCFvj3k8M1yw2HDcW5tWwhsuwL7k6Psj"
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
