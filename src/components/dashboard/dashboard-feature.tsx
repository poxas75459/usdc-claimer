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
    "4Xouj2a2H3KGsNokN4T3mUsmACQzgHAHvrJu6y3wgeFkWVPqrQ74YBsxoXEc3eYYVTQAYDKYgMcLSSJai6Xv1Nx1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67o6hAXyD3qKY5U5Yha9xr78Ga9quu3VU1ya9itUi9HHBPgP31Tn9TtT5g2rZUuJjuMqxPfVvkSjY2w3U4W5ZZSh",
  "key1": "3uzk3c4f5opJae5Jya5G7yLF4RShedKZqMMB6VW89pyLVyyDW2oT4TaqVxnmweSUTnrYipsjEbKx76U6ZmaMLXJL",
  "key2": "4Pqf4gXJYtKehnawBFiHAF2tXWgaeJKzkprcMpbppw6jDQCxrMKaEbprA6PVChGKo3py2tXDPEDxSFxdsGtWoAYQ",
  "key3": "hfiKYbYUTzmi7gNNhHhoPoW9UFdFsBPk1oEWFzE4rfkeTgfedi8dVDQP6y55baBpwYweuJD9ZSE5RXW3jCozqRj",
  "key4": "5HViceL3xjVHUHHEzE5WxjeAB7xozMYuCudghaEEzMPgSvJ6FGkG12ywhYM4dF2SetM5zXVsJ2Bprw4y6Y5Ckhis",
  "key5": "5RGVSc8D9vFudEV1P7YVBfQSVrTF4tokGJTE2f27ixaShuvbeVKq4LDX8zo6WCjwVy2mqUEjB7MMNYfhcUCmbREe",
  "key6": "5qx9WpUFk7f3CspufA1XAxj8obgaBFgxHUt16CcWFc7NHqM22XoLx4DHvwqSeksPh3Az2BP9zY1nCy2TemCCpn9D",
  "key7": "4M9HDe9sUuhCakKKauMGktYPMSHBRVm41fFA273XL4Ek4QUL6eXwDiLoarA9vHF24CpDEWDG7zJrd9XpJPme58fy",
  "key8": "61RFuLq5YnVr9yfD9QCDmx5wBCY5csxkxWT8DfhRjGaZo8ZghmqsjwZGcfK4pzZoV48xKMwhwtN1AvKbT2jHAHPE",
  "key9": "nrWDvgGYWsnxtmuBgTyhLDG2oF3cfDpe5vAMiqLtYYbJ8v5kka6fjGjqvnZcX7WYbhSfn9WaxdN5WrTTzRzP5XZ",
  "key10": "52Q7G34FNPpXsVpiw66NETXr8uPubgiLohgRdzruQf71fXh4QJsKY71bkLSMBe27PYrgNfWQe3pir3owNxfsibkF",
  "key11": "kFj1hPekLWZVYW8tGZGWMTz2dnxHaCeCebwrTazkdCSqHH41euPkaHp6hBdvyfLw3DWEAphEVu6BCvyrCiwPaox",
  "key12": "4MoFYsXEuro1AyWRVpaZvWKtLzKM1Yyp8ybAWvBc51gn3X46CCo5zaZviHucEY3XL3ivCeBGAoQSzrdJ1Sq7v299",
  "key13": "5h4MNuGqqXo5DyDmfqqfXkJUkh8NJqngFoVgodWZNnnn2wuTb9rTtYCNx6c1TpRzJsben2JWtWQDYrtiEgW4N8Sk",
  "key14": "EnvumNQ8GaL9yw7gHynXyQW2us8B18E9dkpBTUgjgsJchWoZm5bVXRTsEHrdD2FhsVuBt2ogadtE1V73bdNj3BA",
  "key15": "8X56TSxtZXUA5YfqeZ8nuxNAWEKFjVCHSwbE5x2YboiXqfCW5KnVqY9g6TeBoNFaxdpyhS4D2eEKei2fpQFK3mW",
  "key16": "5fxrf3AfGTZo8WZFr6gwzicFhz1TKDEeD7N5jXfL3qszKxM7JnRSw9AFbhtQPcXV6s5dXCqZCPy8Q8Ydb2nLydch",
  "key17": "aDwDP3DSa9CR9Hv6Cu73addNaAJG6iKsyN1rqaoS8mvNHp2eWVREK8XhNGrR2henm1mvD6Uijk2urdavfvFKm39",
  "key18": "48ahpckFvRp47SqxHuB8RNGD3sKgtVo3ccrhq5LyWz41UvDZz7fij83rcF8g74zGqo1BBoV7gCSyiFSwjietcTeP",
  "key19": "4J25BH3MiVecZd7gogJEqtSruWs9uy3248KEhzZ4yJusqMC8b5fx4Hfcg1C5ByY8txsZ6cK3c4R9KQetYivpCEc1",
  "key20": "viP8et7EprVfKZfqR5Tet4j1stLBi4pC8MUwy4RssDe82HpWeKmmfFZkqxr2WQ9W8Pxp7ash35AkR7Uc1U46ckf",
  "key21": "3VPobkmjo78EkV1E1m96z5k1LzB1jEAjpBtF6pr45nfxcaCnxSShAr1t5VHxAcvmkssd8ZvKBfFLJDrKUR9dGFCE",
  "key22": "KJF9z9nFUpmq3vvDYhiaQV3T5HDAgt3BsrAaWbSkEqdEw4bhLy4cy3RMexN9HARZiQCcKigM8vXaUkKXZNxPmDS",
  "key23": "YVY45tofTyg5Shwos5av3Uypq9nL7gUKAfaVmhW8BR9Eros7ZfsLuYTaTfLyzxobr22XHwj1cdutD7aDcmpdt59",
  "key24": "rVSTBhv1P3CiPcoo11M6CFvfZa3TtXuSGQKEn7QLm8BQoCh2v9weBdB1S2xjUngtBsN3wZpvmxNzSeT3Zc16obB",
  "key25": "2aZv5Kz9xTK6YPzkuBengRpcAzTK7QYCgorZ6ZQGsbVipMyyYWD7KTx2c8SqF6MXcCe4Ajgf7CaHo5JUpkDMhSc9",
  "key26": "3bSkq2obYTJxeHTxBcv98JkXi4fEdkrj88Y1jWxArhFua7zVnyw5AjxdgDDTAazBpdkJS6tDL46JkrEWo8MDu7zc",
  "key27": "2zoFqmTTUywRsPRy6erobFQtdMN3w4SPK8iYJYsZ6z1xH1f8aBSg8CXN4YxkJFjU3o8UEahA7Q2a8oQzdt7wULLS",
  "key28": "4DBjHgQChxDgcb6rEqGfcfeyQTZ5EQNGaG1tRYt89Cwt8rmm7fsM1XFqzQiY7w2N4yjP3Ap5ehZKVTC6qFt1xQ9P",
  "key29": "38jY7fPf7577D1YMiA794i8PY61CaW3EkPoWTEmPBidwSSoXv9S8BUd8TgftTC12Zd1MoLGG58wsfXRKXgQokByj",
  "key30": "3zoaVaVDKSJvpjcmw6oCP42qTXhD5PweKckaj4CYg8epWyccggxtHtzMexvk5UphJb4XjLmCfjCv6ZVEdCdweGjb",
  "key31": "3AttCmpF177ea6UeYQtR9rGasfM1XXMzapnT6QDXY7qzmWyA8qnywB1wD28xXbfJqj6nQAHkMQZSh1fgTHKTgYZg",
  "key32": "4wxhjMcx3A5Bbj7Y1u4JLfXhQydWsvzhUHaJmxF9WcXfZWby6PdhoXsqiMJXNewhQaNa4vhEPvhrhmaeWVGneBqE",
  "key33": "4TKBWMsrwUZBaqiijmTp1rLKNQBjK8GjESGZtdtfibeeipiUoF4XwB7tgALVkjLv2KK5346LybLMiqd1oQrdVN3f",
  "key34": "46KShZiGNTfbwe4UFcMPNch5qFtBNhz1WmWDyvtugxs28uLTcms6UmmJtXe21mFC7sw8RpX7cwXKGsB9jowX1iBj",
  "key35": "64Y6Nqyfj9QvFto3D5JZRnYz75ku68vxKZXjvrVGh9d494cB6yuxQSizXL8seosQiSKcFFG4BJF7CTbfZ3Fp6Xxt",
  "key36": "21RJ4sk3E6LXZUqQPAc2SXcRqnvL9wDLGQXqHem8ZwSQQgGq6XcLcdzBSnPXg563V8r1ttuN82Zg67Syj2ooAxs3",
  "key37": "3Yj7Akiehn6P5CAPjax5FdXb2UXx8wDWA9azDnSQvfdPezMudEsRYJoWH42BuyjAF38cc4JeqabJLgg4GhDsp3BS",
  "key38": "4UhxQdXNFjcRtvGvGXU8mrc8NaazvV2N4zX4mVczhv6DiBZEzYcaD4f69anZjGXurqWboCKyh5ZUEU4xYM9AVLYN",
  "key39": "5K33dxx2PnC6rLqSP4YRWzwH2C9s9LjQWNYm7dzR3YwXxCy9DchfXwHSzsYf9BLm1hiKhYz5vRStcEWoG3Um6EbV",
  "key40": "cEZh9BYiSGDiPzczXRJaq9mhGtFxT4zNax4s4HpH8speqGHYj3ZtGtbvJLVmWzGViWRxhf4Rd2jr722JbK8Zs3t",
  "key41": "2xbyph9MZ8QhETfGU5sBsJ9munWTtdfVbbsyYeT3XHZKoBbMTijcBQ4AHYUVmMSk5mx1u4fDtMuhbKWF4XUbCEEp",
  "key42": "P1TDjZbPNY71T5bgXw1ZsLsKzL4enfK4uf5AmkCrHUPKWu4seem91yqgzV6SowobQweeDgBgpR1h4vhJgRdwKp6",
  "key43": "3k2phPCuHCUDpjCqato8btAQohmEzcE7AkvcadryNszQdzXYVbv21so1JTYYmq6FAEuUMcBqGyKxwXeLWEqSeSpf",
  "key44": "3abpS6MGn34Fd6VrQYFsAdAawij4nFHHczobRCVYBKn3AhAMLAEy5v4L49rHe6NdyBoRs84TJrQ6DF7MECpnBTpk"
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
