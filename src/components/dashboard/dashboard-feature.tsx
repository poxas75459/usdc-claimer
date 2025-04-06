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
    "5serRdjaJrLFRxExdbb311YVvckVcpLHW6ifuWPPCo9Unvq6E4z4EzUbwPm7Y4oSABe42MQWGku2hktwKP5UcGDb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rzZTzz3gWEYPC9brDcmYT3cSajzj4HV34c3TfTdqjNW2g63WRcbwzbuLVdNky7stVPvXCMXwubYzYV6tSJ68Vuj",
  "key1": "VR82YfCmjJ2cHG7ZkhwihSZ8Y3ktpiC5SA5QH7mhRMxo5HJ3AksjsaAQowyFHfk5p1ijNiosTBsp5Qi5zmbJdru",
  "key2": "zV6GRmG1FKRyhjfAHs1LXyYErPWxERzA1L2iojLBVWdQqDJHtzL8ewhdx6VfSSzQWamet8BXvpgGSoJTchWMg4M",
  "key3": "2fYrd7JVA3KJ6RnYwEE2ZJ3koowhjY9qM1vk5NvE3LSZKujrP7jD1RdeGFHwrqaSrkAwsgSyHwjnGuNeKuz2UDk8",
  "key4": "5J4x3Zzijseq9NSdGdFv9PagGNFx8D6Rsd6avjTbACAL68ZmKj5VreHwAAwzxh2FuaJBkLGGi9FGA2nrqa83K4tJ",
  "key5": "4LJJ485HecAUS6TeDdkCoSY2VR6emhp6FotUa3QQ7aprRjMDsYipAvt2dRRQvFNrM2PGR3dDQKZ1LExjpTfh4bWv",
  "key6": "2VzQgzx4E5EDbbXBRaa5anLE2ELhX9k4qKG8zz3CapKb5htpaWE7ZfJ37KccrrgBfpSaLSDcthbC6r2bCLL3qgPW",
  "key7": "3XfS9EofJZHq8GBFWEqHBTgH2jwtThCNH1BocZau2Hn1jMGoc2cyqAkf3UcX2re59ux8WrDnBvca47gPGbkL3Vdv",
  "key8": "5bNhQgiAb1HkVGDAyVmrhbMXDxES3rycdvSy7QDZhzLcwqKeDB6ZXxu8EemPwE4GenZYu4Cvk5kKxEhG6cGYRtCF",
  "key9": "2HohwEm55LBthS5PSDyBs3tMvvkig9fyWn7ydyQDjBDQzucG9YCxfJjdWkKHuAC271E4GJ5tnNDejkggeyryxXwQ",
  "key10": "2oetdoFVtiwpZQdaHbx1g1ntS8zMR6DjBvQasX3VoBiZyUZGd3XyARZS2C6AkufNjv5BBQB9dpqbKJgQ4JJ5NjdP",
  "key11": "37WCEekXTpT3XebVhjp93akJYWP8Q7nPEGsGvtuwRY8DsV893aBgeMuMsBt9YesSZyas5VhHFWo3PXpi8itLjdXe",
  "key12": "2hZa2vXdCfH1MfLVwdNKt9NrLsHsQ8g4LvmSX5SzaDqFFeqHWwBqxkqtWTkLSscCvGJUr4xaYXKwZ475K3LyyQQq",
  "key13": "5Q73Ga3ck7NNaui8oVTaZmawX6vsrYMoE5EgW9X5ziEnvF8FuRU6a4XARty2zA56ixQk1r2Z1rPPQhHUBS2fdQt4",
  "key14": "54GHJM6hSwoBvMkdRmpPNZrV2hNrKVe1u7h25MQ6MgxmCSdzDFdx3vb1U8hLvQMNAkVHsYkZpWefaAaDYPk8xyfU",
  "key15": "3CH3hWQz5Uu8tT9Phk9RpdEBDGeTBDABqTNGKn74Vx5aPkjVVxAEERAfLwF9UzWDLE1V2J3JiDi2SiKNvZ21tJCx",
  "key16": "28SQJpihPN5HzCngd324GEBpApm7FAEGVQaMCALC82u43qzXJydg11H1Hd8GqhwPi6Yp5pLw59gXs8dKQgRHzzyh",
  "key17": "45eLM6qjYkTao1FusRgaQDdXktb7reSFDmmEj5qGqRsG7vLGruAnNxhG5ihsUvXuTHUr1Ku8fLt3nDzwieNYokx1",
  "key18": "4cmSsxQEUhahBRitoPVANdtprvmVyjtSYzVGLhSyBcga3iJWWoBPFtWoSTZ1owdDXzdsvbQBk9Z9cAJE2ZUgjhSP",
  "key19": "5AsGE75Hnh87JyVUpJS14KQoY4CUianv2fiGLm39ZzJmYmqk4MnfJrThFRqAzQuSUHXA8gWXRKJgRgvTucBxVGjH",
  "key20": "5ERHKrEWHPfrSwgp87GTQQHNzz9gJSgR7wQ1woaoV7khcXfuKSNhNzVWxmSRjjY6XDt7eE1fNhCQmvoABeDJoXmr",
  "key21": "4RG42Eh8QbFTpPByptijWCjUsXYEJM5PW8jHJ86nfHAgwCjpGWWesT86uedeEajs8guepdj2HQkKzc21UGNsTPYw",
  "key22": "GtBSZKuSVPH5tDHmwnU1G1U4RQYenFguaoEngaMmUBMGjUojVWPqyQmigqiedMe9YmkCyHL9DUJM7R85DMjCoKs",
  "key23": "3CMkQTFV6nT7w9tJ63SyA5VW4e98ppytiuRjDEGjLZdVqjXGZ4HBKBqtB9kCWWtd2ekV6LbKFJDpJZK4UzRfdHbM",
  "key24": "1o84p4hDzX6xU49aYULjPH41YizGXojMqAjrEwmbVTBCWop3yF2H3WT7f1LBaKPmKD7cizHXG9wVXAya5SLHsV7",
  "key25": "2J95nmTuKdnnZFxNS1r8f5oo3w6B1DAqvEi9mfJsH9K18Uqgi6RLK62eGoc9xD7PQX6chzaEX4ozeZmNEPdTGEaZ",
  "key26": "4XwH7H6UNCv3trqWKQMfyFj1iSx1oJEfFPi3BMynLnhrvAKibZyaTQPwTNfWjz1MFWVM7miRmNLfd3kvYJRGfMX3",
  "key27": "3Ksvu6mVtRckciSeFRVuMJBQTY9ufShZpGd7vtsjAyqa1AeB37xN6x3Xz7gsBCxkLKLgVQ4vzWZ3bfFhD1KW2URu",
  "key28": "4zX94Bsysxo3TAzpZq1j5NTZ74CykX3MSsEkN3FhewvALz4zQ6AraiuWhciVVex8iHMRUC5hgE5uEcZs6rHkLe4s",
  "key29": "4LZNyezJLbWHTETc65dtfnBC6RkdfkxAQ9XFx1CguPDAM7Z6TkpeHpHzEMvA3PKNFRQ3s7ykAiSWXAXZB1Xewtwy",
  "key30": "5z33PWP9PdVyphPeuEcAS9CHztMGve5JhKL67zuWGYtUSM3EAawStsaz2BoXsRk8HdvcDk4sghXSZJ19SGBayHS4",
  "key31": "3snZR5HTBbVzRvveLow3rDo4EQhyaTTVo7wc6gYmCEqSZbY2v2wJmWfsbKrqwVQRqk7kxXtFqcwUK2LoLPXv7ST4",
  "key32": "2HF72NFArRiAtnzqhFpSFHfdUKuiGdJjE4KGXT5FxEeanNkp34CcTVN9e71RowHLRcwHQiH1K7VxMy7dM2Njowzk",
  "key33": "5TjXU1rNkMkBH54iSGBgUsGmBXQHBbTY7kNJC7KTbHp1nbRyfpH2SA3VGwqUyoMMiPHsKszthAFVvH8bU4DrMo1T",
  "key34": "4RREKyUF8nmXhTZaMU7hZM4ghGG13fNbUopUkfkMe5M3NBfw5YRSG39WYvkT6mhJoEDw1McFYL7p2N75WNHWoZQb",
  "key35": "de4MS9SrxxX54reqHgaUX9KGLhBhWjiYJEvswpBVVtw2A7C5vijjG9SmU2uicBhcjCY8dDRnRcwcB6BNo5aTgCQ",
  "key36": "4xJFav6Yrtb6kc5nWn6XeHV7xTfo2Jgzfsn2dpxbGha4qASD36DDPrN3zSVy9Jw9ufppqoAgwSoxyWRVeY5gTdu",
  "key37": "4sLnFoQCe4RLDdxJhA1BXSj5rHYGjpb4zqEQvyCh9pxoCshC3RiQSLqXLB1M9CJGwNkn4ktcr6LQ3HL4S1F4TWqq",
  "key38": "4MDmwKDWkAAeZjegmpYDCmvNFTC2eA8WNezhwJrH6c5DtUMPEvgUG5jP7faGKvmGsjsnfeyGynSF7GGyyv6Gh1WM",
  "key39": "569P8vr1c4i6aaNW4udb57aB22MCtCwn8p4gkWyfBnLM3EhXZjC1xHefq68ryrh1gReWPL83s9NisRjqFVytN4v2",
  "key40": "2tpiNwYLEky6RusmvFfZgAebXCQDXZz1cHxiHViEcikdq8pGwmPgwEnku2R9UAF8Bzb9Y6GJw7Va8gs5MtRtxKQ2",
  "key41": "4wkLrydrKtqVUyZXNDF6W3Bn2KvhPU1q7p8w4Fnec5Q2C9Z7S7cAKbLFRV3vQM1HEbnZWTBcLVbGxPjt6zALV6Ah",
  "key42": "bzHkvrW5KL42GmHQbBAxzy9pAExBBYsocjffAVvnZyxY6AS2dBy88yCesa3UEdTxneo9nzwKwNbKmwpm1AdZVDW",
  "key43": "Uje4H876zXfYnE6LsqUtK5f5iProe5m1cyN849saLjwLdc7R784HPZTgVepiZbgno9imYLhMGGXvqq68W7W3urR",
  "key44": "4R3A6E8LrAEEUmvzB9kV9tsTXgeMbGrnHbTiK1ch1B8pzCh4TaBrXfuij9P6NzXr2G8AS3uc5naARBZehdnfHpz3",
  "key45": "QvGHMJ8cfirfV548Kow5HoUi7xNV7xPPsRLZQX6W7jkwnXPiRequ89o3dMLa6n4LpCkZnKc9iPxac7cW9FuULZt",
  "key46": "3JWPv9J1B6PmHcpCbgSNb314AApHaATCnxzhQzr5v4aPvfj4WMrpww3r6hfe2pV38aeq274N5swhYpkUTuqXgb2N",
  "key47": "bmaccDme2Xde3KkUTSY89HPj6VZiHZ1PVrouhMF8gB8KpdEJrkaVB76bXxWGMCULzJY3MDwSfLSnaDKRuYqE9r7",
  "key48": "3328LiMrA5RMAyBRJ8v6CNkZYu3qc2j53VwZdsmWeybxqaqyMv5yF137CM4isDZGXFUQmrRLxHihfPtwBrFNXwpE",
  "key49": "JfhKv8Y5hwpiJz7AKW8KRxaqLATYXxQ2LVUgkdaW3oc3Q2dNGNo71yTq4z5zvcvkGLaZnXk7T9P7h4tHddyJj7x"
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
