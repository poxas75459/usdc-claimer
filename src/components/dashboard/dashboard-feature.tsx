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
    "3MuuCEYKpwuvskJp21dM7pSnXXnAuSzfoynvucaQNgBe9k8tqPeg7hnMorERvTnJdLQWFJkKFnggtuZ8EuE4rD3s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n6NPihohqsv2AL6f5hUWA389Lt4Eddyn2GuMQxWrC97Tb7HPvcoNejNjrBERFQzFKTYAeoFBq7qNDgVcpEMt3av",
  "key1": "8VTbpfLuPeokZSYidQtUfhRvx8hFCmGj89tv3gkmfgH2MA9QQYXWsLenz7o1AJx3F4DF15kvngkTP6E9sfLinfB",
  "key2": "2who446mwDRwP4pWco3RBQLVZRRkEfHQTjUtJs7w9ZPnprxyXHegdZzoGJdZC2uJNGLNTVeqzsRTUCV3EYP4KJ5p",
  "key3": "2ommUQAtf9KXHGVW5cNawXa1HCuaf2EsgaS2uYsk22qeb1a9ZNHi44Z7r7btEx59R8j3hHj5GYDxEeBLVH1xWpDq",
  "key4": "4WTZsNE5cCgF7B2JzwUe3nQBH8sUscwtHRkt4rMoaBzkUNMcP1jQhiZ4dNLMzSWiYijBsciZvd1hkyuUedUrJwSa",
  "key5": "2fHyJ4gVJn314uanbKTyTH6nuYi6g8MicBva5Mf8PYbCJL21Giq7D3A5ecVzahsdzbiEXMMjqALS3Meo2yqaabAY",
  "key6": "58sWmFjfwxjUvNKoNe2FcfHdmoJLKRCs5iXL3uW6vGqJtTkVkVGhkHgtPEd5R5TPGGfboh88ZqcMDFpGcpphc84j",
  "key7": "jSy2sTHD3aLx3dBNJXsmzoMe6uJBTpUjPmg5eXqJG4SENFH44ZsRvXLa2w67x8Uh54LUKmRTiLS3Ews6wvftH1G",
  "key8": "C26E1zaSW33MSKrPWRwS7LH8RoXFCzCP7qNYpxFDXoVPD1cffV7zzC1BDx3BYouxwCmoabkVvu18iznD9fyspJ6",
  "key9": "64wUvsqRnEHzFcD6qoav5kZiCArVAyXWXJ5m2M3AvwPHxA26QxUG3dQcdEg2oRLjzpX7hZBbV2Lbs1bJju44zzdA",
  "key10": "4QDFDuFaEfTrmevkZVGmZVS6BKQ7ifgC3qKUix8TogmJp9F3pw5y1N57HaGFiYrDayzW2ZpKkfEShn2v4czwFd6N",
  "key11": "3nX1mXkSh1ZgwvQfwawFohKJi9MHPbj3svthPD6cLWhwnjk12r9pfa2tqhhitFsgZuKT4iYeRaPUr8GkcXaphQSt",
  "key12": "38wggdSth7HMbZD6cWPjuoo9bhgmAVsA5BDERqfVieRRbWigxUomiP82hvBQKEC3D3HGwMvhUpNZZxFd52ZXPD77",
  "key13": "4N11GZqismAj5e5M1YmPRP4yosriX2Me6igFq2YJBJpw8cB8w34xjyRcpDWuE9WA41CgrUTWVv4sACuFRjeYFtv",
  "key14": "4Bpa6deAS1fwa1K2o1H6HGvxv2UUnxnF4nMQkV2iypRX9PQCMHYVG3wXcD15ENjhR5Kd4dpWPK9rGQPEkvCgEp3W",
  "key15": "35XxW39e7uqPptrVs8pfp1FUvZToY1Byy9UXS2cZhv4AaT32gA1m2HhW9M4vRCdLDroCi56Xe7bdtYogk4j1Quvc",
  "key16": "ob3DeLFXh2LNUnpsaJzfzxCj827RLCMY3DiuJUGkBjoF7zfybPH8HPRuSb5zSwz4xpaUkWqmsMzqpEJu62VQJSx",
  "key17": "2udwzP31M1wgTrcqTwsmnGxXpFvL7BWqbJ6oED7DjPr8YedyNJVnMWjkSqPTivxhnTyeLcQoLtu9S4oWs5zrmGKf",
  "key18": "51vnuvMbTtYsP6MYgA5b6RujenZJs89hAq6c3oKNF3EE2UpJxW9BnSBa1BeAbbQycr4kj2YrFY8PTGuCSajy4vQM",
  "key19": "5wstRZeSz4jJUxQZbQoZoQDM4eFJRnratxpgnec2KApnEej3RgdupYStqKbVQsoRpKwT7qbshhfd34oaKRNKKh2m",
  "key20": "48MG8XXZqVc8wpUL83Hik3UNbF29h3ntvPM4riPaywTKqZcpFBCvPi1Qhg288tDjYGbo4HkjxHT3T3YLfiW5cg2s",
  "key21": "3GVLXJGoxtEMZYoJYEpwLBs3yvEfn6EeTjHgr9gkRMqsYWgE9BNq9XhZ28KVGDjGZsueQPrXZZiCpbedhcibePQd",
  "key22": "5HHxMTpDQydWe2mEoXLC2sAbPJaEA9vPMxhdW8oqvd62EDVh6xceX183dd8Zz3Ph7B4qFuUoyVzRCR1TNawrtXup",
  "key23": "2a1dgfhWdUGBrFTrBVYQ87H1JrHRZg7ZBeUQDXmQjk7SUA5Pg5WL6hixT6BJkCfcR2pNDvgsd9yoUaxZ5ZEPDReS",
  "key24": "5CixWVmACDD3PmeLg1j2mtSDj7f5ABgQbhqgFeG3TcwN5ieqKEKZMTFVVfkK7kUePkWBq2VGF5R7JuYK683nfxAb",
  "key25": "tSx1ArKk8bdngWsuCikWY6FXc36Hxwoun94KW5axiJjK8j1HYi2MfHPw88ML99KwWnFYwFNLvVDJpxcVp2XUaBD",
  "key26": "2TgmEqmVY2jarG9Nz8xupfxZYAwjQcY5C4CBFLvGTBtjP8kKDefFWAG2kHdXLQiVJqwHxW5UnB4oawoF7oTZ8iQj",
  "key27": "2Q9kZaH2y4T2jcQuzsV9LuDmUGQi6F7b8QC6e3YrFdqx1o7LeTgXQ5aYZRBRmAXtoQwxsGkeP2mXzU6m28rzqhWR",
  "key28": "3z5BhVsCKFYhex51rUa2AbSWv3YBMPMJsnPt1WLWi4n4TkeeF92ayaEeEycdeBcMo74yJ1cU1ekr83os5n8zuYCG",
  "key29": "Zm9BGeW2M3HHUC4PXn6fZ3WwF1BjPXp4ZGy5YjkwufukRkxWyYr3FaGJKkg9oXGrLg95SJX9GdSLNp8JXefXFNP",
  "key30": "5o9w6fXachYENHavpzMABwQDv6oMwT9Xx3z5zuvx9QEbUW3S9yPtgmukvzQriTwmdrCanXf1Nv9Uv78LUs3ka3qY",
  "key31": "5mRuRqAZskUhZU6pU2gsjP9bpRvMH5sV3UPtfqSM94KUVHSQrQHnEp1KgVyArrHFdxDHvPeQiCik3Ja7pUbdJ4yh",
  "key32": "44qA9TfcpRs5ScocmrC2MJVRKPvu8BbsDiDc9C1icuAhckdp8xK19mZWSf7tbqBsmzkGtwfDqJw1Q3jorbad9HBD",
  "key33": "3pr4g6WFshTyqem87tkEuiBanp7Mi21fKjnKNN94zryVFpv4p38n7MY5emmdYmA7J9LgN7KJ36ihmoUCzPYjJ6Rc",
  "key34": "ZJurZAb9rE66iucrZZXFGu1Q75VypiqrRGcuZYuQ4NWzq48aku2ytzNgqz3NgeCeCLjDPbA63aAMiLhioDQgLMD",
  "key35": "RiSTtrQECmZ83F5Y1gnu4JbzjFk5G1qiZ1TkQnDopAM1CnzhebKCRPkyzi1BRK7Qfz4z4XFYziF2L9Vh2oshjzc",
  "key36": "4AP7GiC3ux2dDgqXx5NJurEjaRU2q26vAx94mHuacRWLfoWLrkbJv8XyC9Ht26rWYfxzBFPXCSwKNXJfZisrX1vd",
  "key37": "4nCDndwhmnxdb1yPX5xAdeSP1swemnfQ7SHENXFQXaYmKGssmymJyfuqGJmQD4rZzHVhxSdsHfqry5NyDome6yZV",
  "key38": "3iDfUMQY6Ygrj9uR9yevMwuSP2gsWZCfGBjsuBz6ZmpcVLitMHrrgALhLLmYSLiYnrddvajTfUoNZv1P5tSqAsGa",
  "key39": "5nZYQHy31JQZZCtgDbvr1gFnGomuNaRPDHaVudkWzQYeQDXPT2ppVYExrTZNZhVmgTF8n2KhsUKFJkpvRRSxrwrL",
  "key40": "22WM7PNKfBJLa3DqEdh7qNtXnyf51h5ej8wrxoGpUPB3hZnMxqUdz2jYB76UiJrgFaJRumkVB8STRC1AM4F4fhkp",
  "key41": "5PH3UsBFob6Rxt3HLWidkKhB56vgaALKRGV5VfkdqfqafYE5zBeqTMfPYerdDhZynbKKurv4PLcW1Lu8QmnDtpyA",
  "key42": "4RyWqbDJnHP3zwTNL7BMLqedBMWP3nmo3rALo4z8reziK2Sbx861AyXeRX8ncx6zPAYs4fbDodMjKu148vKD5GEX",
  "key43": "5V186LvAS3AyiBLzAGLeUMv3NPVf8h9Ew8qU1wAaLaHJKN2jFagHYRTPsvGHMYLoefxwWiLYPbodPJPvr43Hbu8z",
  "key44": "3xiEAJL1mkRg7i9sbfm8rnFtTMWLXZG9ueEb6xVEpqjBEzkZBzZSpJTQ951EcuMy7y1tkEFmD62rZNTZMmt3hv4n",
  "key45": "ePR8rgjeLPZgkHTqZHvKCnxjCyrRUzXa1xGv6HfTe9dAtDmbCaLdgwTgDaeSmkURv2D8F3xiiWz4d5FP3sdgsfQ"
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
