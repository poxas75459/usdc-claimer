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
    "CiWSm1HpApCSBBJcos38egk7GccVD4bXTauUdumxDzwUTY4KnF2ETcgsdEbB9jZCGh2xssTFp9q1mtHa5dCkcf1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bjCfBUbiqdFU7YwBmMoyt5dpgdZWTGo6KBaXwUbJPBGJHTK1zdgZobsAAg2UNwSJF4wbPjj2Ldk2AUh8Hz9mivB",
  "key1": "4JyBtQ7a9JmN4QGbWXLdBi3v4UxS2D68kGRXnt95oKkZTF2DCLYGaKVYuYpEDFwLLcozgYv6KwzdQCeqaFv2rVe3",
  "key2": "2vTeH14bhS1LZjfTVxxrYuXP42v3SSSykGPaUiKPL3JVDDdjNG4XXyVcsNc4vdYp1dXLnmyUt9KmN9seZywE6viy",
  "key3": "2PehcnP8gH4Vqhc51dwFfgDdmymN2ShzRZjBQkjZR6ZMQtBUStUaFyStgQgtMtkREi5MgK2LKPzgvsjH2kwxsMKz",
  "key4": "4MxNVXc2z1PyTpiQC8vMCiJeP5ighUjhcBPZCy6tfsNcvcm4o5aXzoQ5QJYMQxuEsrtMx6sCvoiZBQxJrbWYPk4m",
  "key5": "5K9uhEXHNpcjLqJziJqFsBhHcCZutcJGmGJfN1VXpXjjGCfewPsTzwE3VWwHfAz788e8QmPzDWUt1NQAAd7XQGAY",
  "key6": "47B8AMt5LZP28CaGCDCQ2rw7FkLbFwRoaHfyf2qzyLxTyvv4X2fBmHAFgNCDiZLyLoRC514baGziHJjeSwmeTb84",
  "key7": "5JoxJZPQ7EPRA9dxirtV9hg8MS1Fxvfi7dT1nwt8M5UN9pq5ZNttX4j34MSitJKY9uTns5qjzWkn2LPJqUWEL755",
  "key8": "4ixrBnHkuikJgpURqk22MkRaWWatBbuaRH8WbXe7hxhDSHkjA5cReyu622CBEcoaZcnUsGT93qu2va5HZS23pnJ4",
  "key9": "2FDAin2Z5TU8AeXrmyxVjGfNoWQBSex6CfqTbcktcXUkxPjWzafrr5TagyZwYYApXiCzFHPgdtNngFNpWPR4h4RM",
  "key10": "2r9jTWVRgSdyhdZG6n7NWUG5T9rDqF6qUJVCK4Qpa1N2cvB83nakLrSVTE3KD3QZfG85QcDL1Wvg9WB2oTDRqCHT",
  "key11": "4LaakbsKTRJPW2Zn5GcD42mYtjzVCuUj3RUMbqbcDAEJCGYv8inMvcQz42rupPsFYb4P1QczuLJvQ1ob6yxpN3Wq",
  "key12": "2Q4mWf6X6CkvDXyrp22kJJ1genJmytwP7s1WuNtKrXJ512pKGKsDgPVQVw9Ae9EM1dVLVWWDLKm4TgMfiys1ZabC",
  "key13": "29pXG1gb8FWw56zNmxUnCWbn5xVMumUmXr2NnE5rQ5YLBt5uTqaREdL43bEMqbLYxdis6JRpuB7HGuhEEYc8V1Un",
  "key14": "2RMqLvHRQ1LcLmNPQyHkv1KKwxzXNLdGcQh7FQ158xDBpHj3mnK7o98my76EmcWqHtBZwQB2kvssnMEQ27dmcvQ4",
  "key15": "DrWrPwAWeqxN1NXEgZCaCh9iJyK8T9Me5kmC6dwgKfyj1jYf3mGktjA49cwJNBoMNZjnEmF7GtC18pckEq5jGh9",
  "key16": "4nQ6qUtMoGWysFxtuKWzzhq2FBK6poPj1sn6HtPNq2r5eu83KeU5SKMdmTTSJi9sPiG41UYvw25PhcvnLSSWtMvt",
  "key17": "2d1Qz59w8muH1S4ZrkFxBysjS9RQncbScE3jA5esmQ92xpEHsF2EiNrX7k6YEPehrLrrhLu9mQ55uv9VGQL1do8m",
  "key18": "3yVEr5PRRDRECaS5ZVeEPtz5qaT4GDWBHgSMjNPYfK5FPRCHGDTYvVxCWdHYUVGDExKGjCTDoczK59hcrRDyK98Y",
  "key19": "j5PEjQr32tmNZs2hArpLzhMBMXWTxN7qyssXg45NoTYkSSFWW621SKpaPBv3v2HPkeLkXcCt4rtQ2AAocLK8mSS",
  "key20": "3nbyvHv6L926FmpoP1dZdf3N4DUEBZKjUL4xpUXpNLDmBrH1JVQcCLkBssRv55CG99hB6RqxnDNCU1ekNGeJyxPG",
  "key21": "3SvA1GP2LFFidcCP5EPeAjKH9Zdhnf4DKHTrZZscEB2dSfHrqx5rh4UezuzMj7whBA4X2LMakKRRpU9GQEqrmLdi",
  "key22": "2XGM2EFt5YdcWEUqdqs7amqbiHfLq9wiWu2ErK7EUFbe8s4k2K95PYtpgihP7DRD3yYFa6ULa88BPxATn2HA2KLh",
  "key23": "5NmibybJTLRLEBw6LCCqMBUT6ZWJn433PNEWFfowCzuoUSzxrTc8D3iJanXkdBi17rZ72uvDDj3ecv8ab5yBxJge",
  "key24": "kTvZiYWknPydoL4DDB53SDjDERaVaSTDqLaptwyLz3KcGwNdUTCBN5Rc62CaqA5dcqAKEiAAkZ6BZe9jz75NgkH",
  "key25": "2rxQKZEW2tccrtGzWzhn5W7g3obKvauPVmkf1Ro4ftSwEJCCgD3tEvQ8iesD9Z4GwTNkBhPKL7xb3ifTBzmwgmfy",
  "key26": "5fwmdwJvL46iJmSVh4oViDmbbgezsufbccgLNBSB8jgWoMZaukzmiLvyc6tKJMr7n2c6ixyRFyFXtnw7rJRDQwJd",
  "key27": "HFXhfgkK2j2EkyJGL2TPGuPoHrEjJAmSsvyaGr5GwxA7AxADkLRpzZUE24i56176DLNkmy7KfWUEkjgUY69xVKY",
  "key28": "3TSoocJwjVa9etDgoFJTirtn8pHppibvrK28Twm42fqmvbyjaZKiQtqyWVB1aa4noRFPLWtAYg43h3doUvi3Ppm",
  "key29": "4LdXghjLid8CoumYrcmDarJW2WmW9CxMAHddvjovexf6DBJwqRcVrDnK87yjCPe8GBiy2PmZ3SDnrCdVh8in258G",
  "key30": "2WBZopupV4L3Ri5BSdMdSU7phzZ7iLxJwreZumPZYnEgTgJRfwTzopHfUNyTfBxTqttgCV9Nxf8vtfgKTAE5jyfK",
  "key31": "3N5Q7HdY2PjXLnXcSLyy5cft9eUFbCQhnosKdsKtu1o71o9sAkm4h4zPeTE7cEMUqEQj4xDXDZ7NFteoteggEczq",
  "key32": "a3zXUwVyrRaZNns7kQhDRAQmwXN2sG3ULQ5gxxjtFtjYTK3yw7w4a2UzHmbBLY9RUhBzNXreSLTA4Ex1DrwKjb7",
  "key33": "LEPSzD6m4xKTNV9Jnx5qVUWZxEyJwJuuU55WjjqYkfDGfb9meMYoks7xD3Wo3NuhKLVYmhdU7WGzRouFxvosP2r",
  "key34": "34zkojQdjAy2Jwja1vt2zRW4nmqY5kMdn1cXYhSqkb19dhifAF7A4BLYCwtETEqQ5PCVdnodLCY2kEbytwKW439o",
  "key35": "5ZtZjtX46StjiQCoELp9PNTfuzypmkLVCPss537uaXf6KH6mXdtQUtiB9itEhcqAkWA5K68RiwFqH1eFUDrqrsji",
  "key36": "44ost11iNsecMccyKDqmARMvRm63gZAsNgwpTsZP7hQNtJpzqK6HGearSGSXF3xB3XWN9RBLMG1nHuvvmW9UDA94",
  "key37": "tVnJQWV851HemNVVUrtyMNJcFimAwkFdnSn2GeCVwqPhNhLrH3nLi6xcDSyDezABSbucCLECi5Th3bgRrNntcTF",
  "key38": "5NWXEyeREZwrqgBdRAF37ZN4Aiy6VPA2qSehZvRafcmMpYhMErZV21rYrXWP6Ydz9mWUQ9XTatbqbmZHNgwhcvD9",
  "key39": "24CYzFrZqQL5xK2gEsksCdRexKfE7BTgxNrVZkV36xzMHt6zaudfasg4ygtoH6BdaSTun9axTABELJaw4u4b7DEr",
  "key40": "9ioUVaeLr2qSVMbcqfaiSmeHSiN1DisdLFdmjXKuqXULV6RgJEeSx5W7ykjChEoccXUriuZmkFyUS24bbA6uptZ",
  "key41": "2gMtDaS5XvJEKECKg9VzueFZTyMTNks3uvdhyyrjRmBf5wmd2BEpbe5kgfDuVnMnKWMfY5Tnhej79NwHS2Mg86PE",
  "key42": "4fr2LMfYgEhxWJ4qjiZJSDfifEUyqwXeMkitNchTViFF1RVxzBQPtwWxZoppmEhCD2WL2Bh59um15UZt4YrgdrsS",
  "key43": "57TKUpCXErgSz39MgzpPAtrbkcPEJptGyGHH3AaqXqQEfNW1amzsoftDPS8Ub2VQfmZQUY8qB5kWZjPfdrkjJ2GN",
  "key44": "4gnGMqLJ6KGU2zt6a36YZ6KsjVKUNYu1SgzKsmMdF3NBUtuknJ4UHPu49Z7ePnHJyWwYpdDqadE9r2AegXAKrMYM",
  "key45": "2sBVtapWPzNegwrC9CPKdnXnwKfW62ZFqVsSdUJYn4sg9Z4jS2tJ99RGMEYSWf6hNfWoDW2qz5qaGktRQP5eV9By",
  "key46": "2Nkf1Zw4EHMBptgxfmRU2hws7m9kw26yYwqkzT1VBjy63ewwmzf46Y5sQbfargdNR3PQEjfxdpswrPQycQpcS5gR"
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
