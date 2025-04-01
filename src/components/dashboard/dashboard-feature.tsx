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
    "2Zm4JHRQ6S5m9WranbciV1Tup81Yajbn1M9BNstEPY64qChhH49tv5fAgvBvdBbqZWCHCbmPZB5ncqNC8faZSW9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hnSUD2n8jeR1FuNjNAfuRnR3Ez37sAfPpMAkY6pgmDAZFg2MyjgYKSejBtjgE5vjQnarer47xCGQqFnpnDPEGrz",
  "key1": "2DuLJaCKL2TCVL9ejS9nzCD76U8CRg2mf7iBWmtXcmZiGg7MbKFxYwCiybmPBs7APRsUUWhD27ChErnHCiGzEJtG",
  "key2": "5bEvNd1SKf5d5TVJnkqKbPWWauVr71ee7j4AjhKP26mFhgmrgHMXLYMeh9PmmxDo9pg7VcsQ83MBenWP5Kq6ZDde",
  "key3": "2wT6FRAsRenMZ3yZa6jv7PRZfam7KsccSwR7ZtajDkTgZvuifmE6EpDqqUbk3mDUQaWAurNFc6vCudVevZzAK6k3",
  "key4": "4Ky17miCJT5VBwt93x9VFojf72734HAGQ6a9HxChXYzrKx75j5tDVSPPAES3fojvBKmfmEto47XL7JvKbF5rXD8D",
  "key5": "41vSntMLT6T6JAb4AAjvCs19Ph13KDbqvdRFMynGSm4iZPLTi7Wf6wmCY2gnbbeWBQqa5jEYkGfbtYFNsuBpjC5d",
  "key6": "cTJajQLaHG72nW1kZbnr3P3sAhqFQkXfMqXn4xZHUrhQr8xEQBtRLK5KLbFfibiqRaQ2sbQ2hyixSpfTfH3uB4S",
  "key7": "3Dhi63bPxqp67V2i16WfZx13AjqYDQhD1k6Vwct6dB7g1JtyisHGGvy8dT6yEdWFgCsp4L5GasNB3Hoa1986d9dD",
  "key8": "GEmCGoDRXszA5phzLN6xHpSn4ieQXvUEcNnKASThyfzs86Yscawh5443kW6AG3Bhb6RAqCYW1kvuruGe8t4K4DJ",
  "key9": "PXTxYv3bhdJUK8bsVKsLL912HH2JLkEarjVDZzWvGtm5zSDoM9Yv3tCnRyJUoyCjVdLkMH12B9E33JzQf43yN6e",
  "key10": "4A7uhG8MKxDz7oQAsoTCiK999rxcau4d3hjcNKb93aVeAWC5vMRvYATNQK4eRjTUp1BivpdtPp4PuWQzD43HThAw",
  "key11": "5VG9S22Pzq51WWeYTUetnpLwLof95fi5vqsRfEbfrWHQoHd6HfYzRSh7ECCNjxWDKfDdMt1Jcu9PpsmBLcWRzkMG",
  "key12": "zfkMWcxie5uzgxon7J8YR4VfWj8Lcr6KGECG5HdzPP3mDegc6m98shtgZdsXTDKGubwHVdxc22uFGR4gVgK3jGm",
  "key13": "3QMbRGoood4hkUcUxRkSvTmAhNBc232z5FxDZz32BUwDsjV5obe66NHXLdo6e3wktv1StujVkE4T7B8ZuhiZAiDh",
  "key14": "wnbvpbXj1XtrhXq1bG2mMCPJAFgarQq4sPaLPJ9MaL1Hu1F6wcupVQjPLQKD1bDfEE5N7Eq6V5HPmdq87AEXjhX",
  "key15": "23jNR817Ayi4wjDEfNhhQwxc3Qq1nz8357YNWD95FtaKP7QCrXFpQAYfGCLkpwdLgNjTD3WtYmUWLdjW3JVqLjgR",
  "key16": "3CmY75KGchwba1XxsqyHeBPaEZZXBmtnNSaikXv8pDMg6dSzBKaMPGZ1jENpiw7sHtmTpbSKrEj1vqUWqxpt4RVU",
  "key17": "5m5AnDs9E1Gnx3sRmbAXv6Xja4GBowFUPv2J7GyPy4EqRGbANnZo7WK6zcF8gaG74KiiJW3AYWgbaYyKt7K1mC24",
  "key18": "2SkaFk4PGnraAKyTW8MJpSyYLnGBfAxgzFdFwX9oZdaRBwmx7T3oPZ5hYTRcmVBfhTJLAA4ZCpwc3mjvy6J8q4Wv",
  "key19": "3ZVdG2B4cc1LaTUAPVy4TRVBw6h25Ta2ZfqvxdNGznXGmxGT1dLfwMK8mMjQC82mtPEbZvecyVGGCrKWgWbwkezi",
  "key20": "23y9WVn7Zc16CMio94zcNpRM2ut5uWcudwUFVkGv1To7mFWJ6ZLMriGSHJ3fQqEsyziBBgwha1WkdD26ncr8XSXw",
  "key21": "2nARG1vX8dWBhzCfC6y8oRttgcKreFLvxRY4LuJ5rFQYFav7ufVpVQMAjdbE1GZTrBQgv9YTTZ1SDxRdqXMgmMX1",
  "key22": "K3PKuUirf1R1PSdcFUKVZAfbZdeuXLVgJ8WkDDuivLeQzz3zDvXwaknRAYUkURASd5kbZgSVQZVVzGYj62gpmDt",
  "key23": "3ks5TDydCC93niX48GSrvVVEsPbJw6uee8TTAzBHYevSL25iJYPRmyh3pQcm3x6N6aL63ueFVxhM2db8m7zcW1mc",
  "key24": "4FNbBUmgPH5hAP3yFGWJUckTZfgHxzST48mwULu4asfVCQXfZfoTN7LwHBNHvJSsYMpXmoT3brFuAcLmru9FaEff",
  "key25": "5KhJ2jjfLvugmQg3jiHqVNW3Vu6HdJgeemMrW2kyXZiBJNuUfDwZCZMwxPXAtLtGU5w7ozF7WsULvumgZPLdLQss",
  "key26": "4BN3QJB7Lu9x3xFPg4XU7Yy2Amkfh7vT1eNN6VyYeGioTXMn21Xaq8BYeXf48UhPsNrgHq8W3PyRsQbHXcadXd2M",
  "key27": "63jBcGXdJEq6FQFSzpSCTEqoqTxFmfx11wnzJbV9UoLQqQkcAPBte2kwH7uBHhE6U4iP5zD4KgAbhuDRgxUB4T3d",
  "key28": "3tN3JDHzhrsHsvRRHdTgKD154aongi21MBanQcLzbG5WyeRDxVb4dp8hm8EXn18f9AAnTx9Ae7uG5uphyrYyHzMo",
  "key29": "2fBFp6qiuwE1XLcZfbe6sVCrTW95gx9gobdw2ztwc3CCoF3SqK21Spt7zKwZcrzS9K5kJaG2URiQKCPSApGecxqR",
  "key30": "rmcUu5vLSaP9HFVU3cNHhwKD8CsUszgydYaaYRfaJUFUecwfUYWeM9JyTyksJZKjk6YNQYvkqkqMkJxjdY9nxfF",
  "key31": "3PFG7ed1EpmAtyFckkKf5Eu5pDQpspRvU5ZhpSYou92Vj2McoDcWEggwrcryrWKA4gkkBL1y3Y2jGQTd32kP15UH",
  "key32": "3B2JVAaMqQviMomj9fyMkRWniEiNRSrKcPniCE6e1AHwQLUVuerKvCkyB1i9nxuE7xnapZsprEL8UKUbVEWoANvx",
  "key33": "1YRvAx6Km3xpVJ8yGD3DrwffhTjUhgTjsTGtPHmZndyW2tnFBxcNqWRqEsh1sUXiP1W4a44NpBP1uhvAzHsxs2v",
  "key34": "btRQBisAKWBAo2MxEksSEwn7WqKn76atZT1nXg5FgEuetYJvTuzWQmykcgyvSo3MMaR9JsKFChtQ4TTuTSARKtp",
  "key35": "4jtzAdkjaYzsNHffdfPAZSvXJLKQv63s3cmaM1vb8gxXjsJHvaQr4PP4cJ2C8ZAcVUfNLViDLDVG7QGbAFuknTHt",
  "key36": "66qD6svenCdWrruYYGiGvdX5h1YtrawyoC6iMxqKW7kRTf9TyiaQ5qNDoX4T5RX8c8UoWd6xujFi5U8TNs6XhrzG",
  "key37": "3gkuCKyHP8aWDJTCGaLTxCctLzS2Ykahbbo7jpkAggyJ2NJVBAAbDjo2fvLfA2KSgVCerEhfR3eCy6MJ14Qi95KB",
  "key38": "5ipL2D5MADgtv1p1T3xQmsBfc4HxeXimtdY5CisdYTvKFvX2N2V7nPc19rzcR8aKL8ZhM7LeiceKrR34ngwGkKyb",
  "key39": "tTtQFZXbnBUqFJD8DAD2WRQnw5fDEmS5yYn6nFqUGsRPJAzjfhUHAc1CMTFchX4uS4GxjQgoN7A3evM1mafbj72",
  "key40": "5KbMjRnopGYJAjuww3FcA6BQuhbUEtJP6MSPomksneXzaBuZUVs3dYTtqaCr6mB99efiMJ2YmNBcPHmAv52UTxLV",
  "key41": "CojWmiZq1eF1s2LnJx1m7Ec8XMJgUdKpoojQsXwB5BoNot9WhzLLRVxZAuFVhDwcLvkd1qzqt2Cze3jzv8zFNoj",
  "key42": "23ane7YJCUkbk6cZkSgvH1w9Gw1pMzZaZQYerkkq3AWMZ7cgguS8qn7dLUKCQUuehamDwYyh1Mwumr6dygBWuLxv",
  "key43": "2EEvgNQYafRsv79a3zkaqWM8PWG8jvavb8UV3R8oER6Kkhkn99zQhVo8YKerX6ZaGoTk3o5AFjVdB7ECAF9Kb6ug"
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
