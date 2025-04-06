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
    "mjahtBgxaPRA6SeN33yTHqPa5JHTAjmhbJmUg6nwrtC2R9W3RGJoVb2DnNA7tEP49emBs1ANHucNKGKCN6MJpKQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tJDDNHV3wfHgsq49Jrz6G1MxppkKMx5SwdSjNZj2buWU73oEZhxocUitYrB8MRECnuHzp4xiygSZ5A7ssTqsux",
  "key1": "2zAK2hDXGoTdXrzhzKUVXgkVj46oQexvvYfHAKX5jcdMqX5goCc9KK5PGXLXFxhSHkmVHnJZP9Xvy7tiBp5STKPN",
  "key2": "BsT7AeSgMAcKndpgZwULFkBWTWKubyQA9CDvXfbWtBmE4dNJDXrAEwjyGE7PG2R3Sy9SQgcrP6PXeenmBJDjVPY",
  "key3": "2CXmNbA6HnSjkTH1PUHztVz6PoyES1uhHX51HA7KN14KGKwYqPbd87TkRgt8wXFVR6iFTUJZS8Kgfg7v6zdjGC4k",
  "key4": "5u1PRaA8XC91fMMG4d4SLT49Yif9MdMDcbRdMmczV9xURE5DEA5iNz5BWFdzioBM3jA91zn7fmxreS6Z19CGihvi",
  "key5": "28BwJuhGYoHRSwgWhVUCxJEaG4NnDem51d5aYaLpioXUJRp5ywTh4TWwPnqL41M8LHayKBsBU1ToTEyptV11TLCc",
  "key6": "5ets1VwfiJeZZEa13ysbkRF9HJfwbM1T7pAiDQpVfLk3P6Mz3tSPVmJp23qs6akxXXm2U1Fr9mZVznitiVU6Bu1p",
  "key7": "2UGAreE7hJ6kboYbDa642SQYw38QPcSEA6zyNqVyQ4mWfZHzRhB4WwLow1DgywCKKWY4FvpMEJBhVMeN5NHr4HSh",
  "key8": "2gGBqvzxgw4gPS3fVKUehzU7YBo13updNzsPrJa9Qdud4kGaEuaDiJZwMUDzfL26ir3cUUgJtpZGUPD3URSTBBk4",
  "key9": "2HayMeo7rcNP539URdeq6L1graBzjaLcxKRm7femFScd6V2UJanqNP5Wh41bUfDe2dpoX9iYiystvAwXztSuoVPk",
  "key10": "2MoLSyPybV27PxFnh8eJQZijMNwmGTPb7JWYtCdFb2jEpF4uUH1UPFRtCchgHxqjpeYP4i4h2D8VFyLB1PTBH5Fm",
  "key11": "3TTWTHqEMDiYzpqCdT73ZvcGje6UdvhdWuzzKChqgy8iCeEvdPnMZh25ZPgxg5uEnCfK9gN46z8oczgUD44vJ9Ki",
  "key12": "2sSgeatwjPyw3QpW8Uh1JazhMaEZNNHnvEk5m5aVueZtVPA6bVNcv7vQQs64aw2mn3jQnwcZwaEBR8M98y3ZQoHA",
  "key13": "5NYPKULW7faVvX5HG8G3wm6QLhzSmya8TzSqoBMgAczsoEv9GctRH7YTJkxTUCVLrqfvgSgn9KnwjLPnrVmNPozU",
  "key14": "21VdhUL3QpLupRB3dwwboeQDt28Yq37nciNjyJvxhyJrtT9APtrpkUbLdXWeqw3PanaPRtrKL9h6vReHBxbBKGLY",
  "key15": "4pVGpeyS1k4UaATWetaH8Y4h6VBBPcUwu7XPPTzHvao3MTGCWapGkDc8VYvc7z6nLpRv9yVRzp6HJAjseRzSbjgP",
  "key16": "2kzGrxJou7qffM52fzw8Nj8Csz6rvacEmPBtUQsb5VGTsroKthCA6JH2mqGjy55tGfZXevVniDURAEWpbwuKPfje",
  "key17": "46etnFoxQYgW9ZAsh8PfTbw4uMoFZFovVLbnk4KRXMHD25xW9VjnZUhNr94HrXg1bVhHnJrDYWVpeQjdFKcsiG6o",
  "key18": "yihnmPwrmk7Kaq9yPppZtgoTeJRygvjUkcD7FhfmEQmJz2Zmrjdp9kLQ9Zw7HvRUG2bTyxeVpvdr45uNcvqZH8R",
  "key19": "2zXeK31tzL2hFKkGayhwS5BVY543K6PZxzTq8qMJWea2oRYMgTDRYvG66pkKd8xoeZcXA8uCPVToXYNXgqp3BGPx",
  "key20": "rc2gKaqECvpKr1R3Wyu8sjLnRoJhjQDDFpFFTkdeztJzEvaMPrY9nv8aXbeb7tR62YV7Ub8WUCXr87XZFsekAkB",
  "key21": "5LyzdfSteqKRj6njS6cboocRabyWzWXohfTaYTKriDMsKDMHSPwpyNRR1mWmad2QMzVHkwVQWGxT7eDM5R3JVopk",
  "key22": "2CQgtKBSNi8eyWwxCQMmRpMg7V5o37a9Q43tUSCSQiQ2sJRso8dXeeVReVvo2QxRYgS8jWQTRs65fzSdUGUX4VkL",
  "key23": "55gkm9wj6j3RHv3kYGrcPpca5U41SxzXoj3jRQHHiJVZb9sMCWETFuK3Arc42S3v4Z1znJ7SVjPnmphtqY5ZsTBj",
  "key24": "2vYV92BdRVEJrb2UZBoJMzYkg3E1y6teaSipH28ZTK85NvWFeVwi7XKps5ZoZY3RzQwqox3LZtGFSYz8jBCprb6j",
  "key25": "2doqB4CySmyjSBmqKjKQWHiUYnMZoPgy8upqfJuySp2yyES5k1YiF34keuUXcen819FLptTo9vX67MD7CtfM8wGp",
  "key26": "3yWmRfr61dQQgUok7ckNeXFisiugb1NHtRXBhjiogqJkXKSCEdda5MaKDbToweK9r5xbpo89maVPB1woNrGMYnuM",
  "key27": "VaYrxj9jzFYG3sxcBFaDPmtkYJs7wxwt9v1Rg3TtQkHSCeXx3Q9FBAgsXgbKffRKtb9GtgjZ8Xnd8uLs7o23FeM",
  "key28": "41dJE2eXfrdcxREvSZNZLuxtFfkSb4GtmP9nJjzKuNmLgvTuVaihLkfg52FQQrEL4qSsRUqZwMkD4YLdrm3KWLTn",
  "key29": "2NZE5EJuT9yEckXpKtqEQjzPhYyhcyn5xfchVZdKRFuyJGa7PH2WSzWymLTNRHvV7VzuwtedNdg62qBocVwJg2By",
  "key30": "ZKMNWgGqL9FK93aqUmbBhZEnHppmLbehWy9y67gWWPv1PzcyVB5qjtxqM16zMKmV1yRDTNQDX6CE3AUkAxHvUby",
  "key31": "uagHnJ3dfyJW2H1Z25R2FmMXc3WEBCGNyHCWTzZcwPcw1AxvTH6KXoRPYQmmMwnJbY2KQkFNYzCtmhStrsWUkg6",
  "key32": "31bTTSKoMFewaHSbnFPFTHrp3MS1jiFfgkHdMLcPuRBBeYxZ2vfUFVmrkWhgynWmDY3G1iNJwxoWXPsekv1Lf7G1",
  "key33": "5mEp7CKLksST2VeiTtThCVPQkrDgHJV1rGMnzAgyhD71DsgsPPXBZr1Et3aCsNox8cPBNFKVZREGw71wKVZjGHNJ",
  "key34": "4H6AXAkjp7vuGNJSPQ9rURzR3SSv15E4gTADYdMPVwoZXNjjZzxeQrUEDqHGyCrF2wMt4p9RRsF911p45JsGdQFC",
  "key35": "4og7H7LF4kc89BemwMukzxCGBDA6PF6ruFA3ag1C5hDJ6Guh2qUU1ntw1G9HKqaZN6Bro2GUkUM7HqNDLAjGx1BM",
  "key36": "3yUXDSBYHVea3kcESsjZu4656Ji4txJee8fdfZ5aPLBYRcntipZu5ftSsRUmDyExH2Y8BFEHnCmtTzwchbWtamMC",
  "key37": "2n7v824xAAbNyfuAJstRwjahFzJMiLRwBRLs7dMM5YBU5AdQ1rWkBHQGGHNSQPNqsz21qWRdn4PQpVChRsFPe6PT",
  "key38": "58nc8sArHqcDkkFHDkQFsBRAEocDkCvdqU8FN3YhxwbFE7DWUm1mdag8DbuQ31QNS3hMqEJCqmvdtJkTsw5nNHEV",
  "key39": "AasdqBtV15ptFucPBrYreHLxVPaGjGXFHz4U8DXj418Cf2BqYdsaCHvuZGrUoWfss3z1VJgQw3LTYpLsekVjqvL",
  "key40": "5xXuxvwTk7PonDdNorMpDnHY8m6EdXKYBv6y8Q8Q9PN7GT4w7vMjnF5QbDjsGhfVAuRMXq4w3wUX2QA6PcgT6XRg",
  "key41": "56SJ7CERRNf4jKSKnh7agfr2KcArhv2mhw89DbGWgMKCpirpMYn5QeH2zbMZt27NkfZyEmz5p5RLkTvi7grphnjP"
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
