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
    "4uYNQhNmxXgBXMUkwGdPN7pkfSaKezFLTe7QkQ9sfFhpwkFKxkTmFpJBVSp3DHfY3QhXAcf5nEs3nBk53H1QoU2B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KWMtnEBS7HHGD1Mt8CJSLtTT2p2qxB6PuyACyVjvCCWU2TTq3Mu3cC1ajVs8mokXt5TyryKuyWr1G2SzGuSS9hb",
  "key1": "2t3W13gSjDUPUKUpn2mo771us48pbcyDCsfmy7s1fG5U5X9ponPecxzLLa6XYqVuaLY5rHqEMkgc7Ymzkce89iEd",
  "key2": "2Pr2W7UpUaNr7ifP6qaueYedf3RLuwCdwP1maxXByzQRXuX7x4sh7eM86rrJA18FuX1Xha97wNBqNyadbLuNEGXU",
  "key3": "5CeSRkjRHLo86YnJWQfKYfe77qrMEBKidGj4vwCiFWwKZV3GNwrvsNkBMje1TNm5iq1y2v9o6iMQGGvjSWqhCCMY",
  "key4": "3uWu5avyqbRVHdMsVw9Mguwi1Jsnjr8pgZ8gH9FecZt9ZcEQCiHUTsKdTXqtQebhhjHSs4fcw5DMtZbkvMsgYJii",
  "key5": "5X8QfLuMTqsq46AQz2RTQJ5LwAhErS9D5CizTzB9Nwmx1qvy6BHJd8WRB9CM4rrHA8KyYBKnCYaqUBi3yfLj9BFG",
  "key6": "3by3v8ALffrvGQ7GKvfcMKq2d3HzX4wTvw4AJGt9smgpv6JEwdW5ecnLvzWXi5hgSTGVMbsqsCJGsiZzVxwyfUzo",
  "key7": "4JbHoCrSNgZhb7x4TQy5gfnF5JaujBvqWTLNdxggBPx8RzRBmQviXX4tgdESbh5Js8FGYDWvX1qPsUoQuZyfQhGo",
  "key8": "3ydijug1RwyhcDcYzhMiW9mQ8yUGnSXtd5B5DbDbqJ1MDcUdz1AVEFtQzWKq7GRmGL1mw6WBcWkbhsknV71114wk",
  "key9": "51XFFx5RSqLVYHgNWZGRAGe9CahE3Pz9VBRSJzWDgaTa78YGPvX1EKgmDQHv3LyGACunSzB52rS5LLHehZoYZFbN",
  "key10": "4iHsnksqR3dSfzzKhgKonN2LYpqHLvfbg5kRGSe3MsDcnefcAj6Nz4mGvg53z4diPhFxiDDNmYMCjPzedueLNb1g",
  "key11": "3K8DniHkW3DQKFqJqPumRU7e89K2oBXAsbutVEeJv25Qsibvq3uevJCC93nJWKhHdnaCaYbS9AByYR78nsGK7vde",
  "key12": "3F9QzWbyY18k6om2ytqEa1UwvjytR2317obabeG6KzH3hEEuAfg1jWxFnz3fbeigtEB1pspfiD7eNDiFaHw7PHtz",
  "key13": "44j8P6u9Z7eiVeH1LC4GaJ6gHe5G6CQvofyotfJJuQC2KJkT8e6w325mNT6veGCeceDQBHmpf1yY72VazbmZELDj",
  "key14": "41THTLsfggXgMAQBYuG1ezf9EHyFCeRCRQhgLJM9yPDgsFPCSAgrofR7C5KW6ywxmdjqC5rjJzJSjnzuAawKiMgU",
  "key15": "5VJnRCyQirMhEmY62bTVuXY3KHgkGdWFaezRjuy5PeyS8YybPdxUvFpRRK2KpJPuqkdcvezVZhX4j6D9ZzwSVG7C",
  "key16": "3Fz3kdh7eTsHe8JQnnphPayQ9Ao8E3gFrij3YoyyZDjk1t2ZHoZBgRugQRiP4Ewb3Mk5XcCbWX77UzsMTVZBQNos",
  "key17": "5FU66tFCVdYUvDJFYuWM8CQ2XWXb3T8RfKFb2Tee9n6odhHiWTPqbT8JHaKYW2qvGEE5fhSj9ZCR5VBHsf28cFVQ",
  "key18": "2nyCmrVZcWa4qUmo91atugii44mYMfsJk4BAGdS4hs5yZTfeFyd5nkxaXAjwQYVA9w4xD1uecCMyoHmbGvgoG3BY",
  "key19": "w2wLucTEJEV5gNzvPA2ZonabK24gw9emaBRKahnZr24dHzWUuvN3iQVT66H7L4B8W8VRSL9HAMVEaXcCLg7dGBA",
  "key20": "4zEYXaeLJePfp2XPGRMA7QDgoATbZuX6d41hueXmgZaQUNuvfKvfWe5uria98CdXPUXu93DNX4PpWrsnGCzJNGZT",
  "key21": "43sXPL9YSNRFtGeXUhnvfinxDomVvDxFai4RcbYnBPY5BDjMwhyH8zU5tP8BBrs6BGaN9ATfDLmrJ4qVJdoSDSNK",
  "key22": "34UFEhgd8jNYSam18BsTvYoFd8KNggFF3J5pw274hRG5LD1YMH6LKntgex6ErPsMKmSMaCkYiGkqgRJ1HXWCEmny",
  "key23": "2Px6CoFs358PTb5iGLvbEKNEfXWqEnCLS9h2AGoZ8mq2K8e6qFxWnz6BffehD2UgLtmaGwn1a1FNKMf4nqngpk7u",
  "key24": "2mk7Nmy95EGtK6zKFcobAMAt95cE3aCJHEubsZtK2D4naUM4Wb7S7xWrU3k7NbVrchPZjDCEcC1zXSU3bXDxtHUn",
  "key25": "2uQHqcgbfRnuXwuz1WGbXaELXbNyQhQ78rXRn7UGLJ4FUiJwsBpchBnUnYHuRZU9uuprAcDwXGovHPG68q6wzdmo",
  "key26": "35ZVGcQ1J6SLjt7fAnvihhxdzoXHGf2pZg8gW4YzGrhrNoAfuTVALs8cw8zGyE3GEJ6LhbaJsAvGuD4nh9GZXReG",
  "key27": "39dvCTJZXgLvKLJBy8HWvfMHce6Hs7AvhzGhixgWH1Fda2s5Sj5DEzd4fEojVw6R9WgkxzqxRq546zHSDZXEDA24",
  "key28": "379KQR48NXkTBB9tZxmJoMUKKEBw5e5VGeAi9C2CnAqmbhcZk1MwNMAvxjEFECcrWpGbkRB3o8zUn1y4CrJoeq5B",
  "key29": "3MBeu5fhbZtKF33kc88mYGbmU7znaSDFvhY6wjqWH49z4VGRgp25ox8eyEZFM1C4WSoPK8HB2yhGsYXqLK8uwxCa",
  "key30": "5nkD8j2F9HdSZsDjUtJmPfSSxjPNPRdXn3yjfZRcvdqCSxbpkqg4jcnx6SRuoDDQLYasQYRU2kPY16De5HEDXvoc",
  "key31": "3dHXKmRk5vxzPuK3RZpbsFUueoPCA8VT2Q3732H5p4545RnPVbJJo32mU8NKE5FxwUvp7WigFFwWFfhBs6s878CS",
  "key32": "3k1WRoC1EibuWnGpaPeZNAY7LXDiX2Agz4PZChGNwGQCzP3QbLQ8x6Yn9ZXoFosobnrYW5yNrkKdCzS8dwHJt3xL",
  "key33": "RKxagY1T9r1t4DAfk6nBWu2kiikYHaK2hmghMdbGXF6CBARZwaFQG8YefnXiFKNsdTbiWQJptyqFVPmZHeKFkgG",
  "key34": "5bdkSHFbGxtMMhLFJkKWKFayFPYeBGZjufTRArsArP9Gap72thoFDrpymXM8zi4QYUTmnTkhSLvKATRzpq26n7Dh",
  "key35": "3oZNsP9R5A8Pw9hvL7rpJ3rLd8XKiKdHw7DPUSs3BeiyRQrs7SC3Y5WSjwNmsL5bDxiNmDkNcmr2UhC1BWAa9kvk",
  "key36": "4UW4rL7fL3rpuDJ8tHvFGBeNwH4pimJW6U9M7n2SCXRk6585ocVfTg1YjafgLKPkRB1zupiswB8iprfejMkh8hNn",
  "key37": "ggL1fu5F3J6gu97vdQSN1ywX2tWyuV7e2vpBiUWKf5VSMcjKZTLoo868ioj7wayeSzvStz8bgBnMTAoRPh3vUFo",
  "key38": "85B2y6uZm3mtfCdobjE9EXBcDxHTUQApA5uCc76sSZwdoV5MP6StQWcz5drCiNSQVcPvcko19k6jNKJdXauU155",
  "key39": "4y5EUJcQxNbbrj2T2dvyrAh9ZHT1kEtcmqzr5bzwNrGeuNnqUwPm4rKRJ6XZNWdAgtAqU1HpxwirUnRc7EzfZBqM",
  "key40": "4Hm3haYtnFKSvUNebn8Ui6seHcUbNK9TK8AxTvFTtZN1zPXXzQPdZTM65q1PSrxxoB4xH3hGvQLsvS33QPBMW5aU",
  "key41": "49Y87JWy1UXdAFe5qMJopGmEXMSC4v24fD5Q24myjYsWCXBCbZMVn6DUkCShc1u3AkQbkfDPGvRkviKHm3R1QJ6E"
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
