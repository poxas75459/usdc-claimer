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
    "3WWWE7M64Xg2ZrctBipxpnw8GVuHPGuEk9YCcAeHQsMmvKH9G8kLau7DMXXKdxhM3cJhX2kuBV4F8Yyoz5sXcE4a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57wECYmqe8vvTQGiP3FmBpivQ854hREGUwrfcEWaVQks6xNLnUpqHwhwQSKXNEhyRNfP5zXCP5oRBp81vPmVGYAc",
  "key1": "2i7HYyY8qutEsWRwKBD4vkkhWHpBpVQK1i1N1667RSveMgztVCDv7FCSqsp1PFNowDW57hSrZEtdRZW68kmhsKfc",
  "key2": "3hQ6jwqgvZfCZZHh9bEzzzbr3ut2gVYxcGkVzqk3JH5gddyeFfaBDfr8BQDem6YSF3dCRGcocNxxTMVTp6JzKX8q",
  "key3": "5b29123K2yqU42EoECrvnPvzSwx2g1cTq7v7LRYWV6mqVhWar8maEJJA9T7LLLA91iMyT1yCqjyuDGt8xW88UJcf",
  "key4": "3EMnbh1PwDwZeELY66KXTAAccBu9Ux34BY7bUrWFc5WoBbuzvBX3rPvy7e49cNMzKrX5tr84LYs2WrNQyxQ1Sfg1",
  "key5": "cw242CJPhJQytLK7k9iV17W9JPC14FBPtyzvCAzitWLcSwm4X7bYW6iJbJ7z6qwvUM9XuLYLSWTBezDDYVSWVnf",
  "key6": "57Ek64wbF9NcSKEHqjuKRqkJy72JVMCemtzgTAmihuXJJiBDPAgzq2nNmrCKwmUeZweCEcX9fpvZhttYLs8jrWc6",
  "key7": "4SgUCWrbp55pd3hTAXZV75YmLsqaZiNmte5nKUkczQhkZ9duLETb87r6ckLwUMWSvVJ2pP3M39hJjU7pEXPENnCu",
  "key8": "4Zu7RxdacRFj5mguR7kBhGZCozobzrBL5HvU5m8jFMHPi6NTNPZTrKXQcb2fHvBG44cnsTD2pLGQ9HGgu8nro4J",
  "key9": "5j7mLMkUHhk6Y4uiPzpVcU9rSmxadwRGWnzktes9T3jKqYcpvE4vnrPe2sh8eU1co8eqQQMA1JWrajGoi3ULZVVo",
  "key10": "5PzDDXqdkSepQfb7JaCjc1s957Er3xizqnahxtiWxKxhCYCc9utfYQBQfxZvzHnaUTGqZgGfNA3rC3NkeyHnGcGY",
  "key11": "5Sbxfhu2b5KgTSVVNr9tmwuiE7K1uW2uAM2mBKvgMMm3cataEEdS9FrdCLRjDJ5Qh6dc5fbkbXPG3JArruBf1TvT",
  "key12": "2ov63mW6brZu4Ea5nH8GGTCvQKZzreMxPAoMmDL8bCWzxoNGpDaSbVLLYEzt7fEos94BssS1JyC28t7fA2F44use",
  "key13": "2Wz7YVCit7sgzL7y3SmPuB9UTESSfCNBUAdaGVbYMi8x6QPjdQ8DKXtPusJN1RtVeVCWfKRrY6timnVe5uraZFsU",
  "key14": "3cGe7isUmFR8qCJkeCoAbKE2wVmBKV12C1bMXm4vC5uAjFvo5knbx1Z6aE8WUXcgaobY1WfadLNaNUeydXBGfDt7",
  "key15": "2oBZg5M1kEEohu446XC1cHkDyjdCCsNcKqxxXKyYAv7AhM5XDPmjbdyQGNWeyAND67YrgaW1qE4yb9YhQwxySQgZ",
  "key16": "3xa4vDXyFsjZxdeyyWxMue61wAa6n2WUycaFAR5iUiBXtsA6hiq8d3i9wMPDkf75dhvejN3ivhDjgbdLPVytKKgN",
  "key17": "47f9F12GXzfcFKwzZF41o1xtToX9M4JdnqiGp7LT86iEH2QFFntoRCGH17JUASioAELyds5ZXZqTWaQrXtctryjF",
  "key18": "3Sdr8owpcZvLugUr77skpd74gZXxkJixY1hgUoJAXJSRyDoJChgj6LjA5nENqmFqxWkt1XjRxzDTQCUNigQifvZU",
  "key19": "42tV7mrbh37PSZpsKtoz4h4dzLrZKrcKPcVZnj2kdvBX9Bt7q78RRBetokNVxcVYXmWGQcsSi2Vt8g5DBwwEcyBw",
  "key20": "5ZEbAwjSnUKe31en8k9dCtjbcPaCVZWWW9rKDxZHYwh2cNaakagRwzaqCQzLLcAm2mcnptNgs8xhCBgw7artR4ie",
  "key21": "2nRZZpe1SQpuTz34kDnJLtUpLeoyGDUR1vjF2jNzpVPetKyRnMjKEDnVzKHCyxkPdAz3xnt9sCecemaktf9L9vz1",
  "key22": "4b6z39LkHUpFSTPu4pPosaqqpkh8MwgNyo1LaQ6L3uptBzgo82MtNE4dY7mbgEva3Esp767QvVCubXKQxzdY3jQ4",
  "key23": "55L1nFYNJRTqca9TQkrWfZrQXmFx9FmcaGJytm8NoZoJMavoEe7n93PgkY2LNgppUoL5XeWSHmQbUg8E9y5GNKtU",
  "key24": "2VyMs94jHCvMRMAkUcKsRHpBvEcQwfYds1hayxUrs7EgXH4YWCFNhf7HMM8UXXTmawzJXy6rFeXV1GU45zEV2YHq",
  "key25": "4JhvZaWCUpgyo2H29fH5yMg4xHdWqYdNBuF14G4ub4xw4FL8vu8PCv78HFfgMwDRPPFkzz2BMD8A2iuNGcSViY7K",
  "key26": "E1Mu7XzE4aL6BEoFkXVQPkwucrMYP1ac3jWJb1KdEqBLtVpBiyTwWqFiX9tdcCAGHk5geLbZ5L5JrMwcMA5CHtG",
  "key27": "4SzjGtTDzAqLGto7c1Bykg8knEaVaGteRtwirhV1Bi5ep2DEMkpN5fVHRK7f9JpJuaUTPh7syh5zBNfGm5RAopry",
  "key28": "3YmKhrSu5byAUhSZrJHato8Re3GdQneyE79zHkzN1RcCezeaavupJCC7Zze4m1cHmweJk3sW9d222VFDSiG2oBZ4",
  "key29": "emW4syvJJvKNueChL2yyYPS3M1Z2oJ1i73TCov4v9RtssaiAKmqTfFSwYqZbmFK51Ub9xGugdaTRP1NMxhYnb5S",
  "key30": "5zjscoMVk4kQAN68MMc7a9bMbwv67nNnHSokUpP8NtLaaHdzNCJ5sjkhAfdWaAPHBPwyzXx8L7LuBzudJXVBbHYe",
  "key31": "3rSwe48dVywE1iaNPakn8e6P8UG7K1zMTthFhZnkYGGNP5BsEgAeLn8yEwyts3zzxdoUNnNMdeJsW8ETMaqM6eGH",
  "key32": "b2mVuYunZ5pwZQjjRDGxTDMCA2hf9VsHo5eUp3iLaXjzxPy4Zie6B3xVPD8osFt27czSidEnQpwwxDScQmerpy4",
  "key33": "2DsmZku9BNp2rht5D3SDs6sPRPjjN1spbg8MMj53DaRtELsx3kDaa7dFjx8MgwoPEqgo1YkdeavkMiPCYYumMhBa",
  "key34": "5MXn9SCF52rwTMHXikXucAj2FXSdtjwiwCYvYbubfzqkSTmt5wiNJ68o6KWzivHuUNAkfh4pyxNgVi9LY5FfdSbK",
  "key35": "27cwGb84PnPZg58GwfckQvyomVEETjem1rrGfJ5Cyoir5egjL72L4UxqsedZ9zrf242uZ638xjccLUKLXehX4wju",
  "key36": "2xhzpHh1saAUggH5qPG1McGaSM7JHL3eZ74XmkBDN2oADVxjaSG1JrahcyLQ4KfaaP68FYjeRbwBWxHskKB96hEq",
  "key37": "4YKPuEHj7VdMhsaNTASp3fNjWFdce3R7KZzH4VbQKNF7Q2awX1nGTC5NbML5XuWXaTua48cfvuDRsrnwtW2mpDbw",
  "key38": "4FNzbXZp3FM33cRTumyMugKTJ3r1nPUvvAPudFfbHyR5YoPbm98p8gXUWipfdh5SRLATEXJayq1Ec2HWEUPCzR1F",
  "key39": "25RpUUQE8DNHRoMPy874yeuMyQAPyjdea3UrX4E1HGwEfgDqCdNKXCqMMZVryHb7NJ3Qns5xzkQFrkiMbdax7Q2E",
  "key40": "4KuCKchTnDvNeVT93mPWZzdfgZSWVfAMqf6Jjaj4qMAGRgu2YtabqgsNTQdmVPdYQ2PeA5dxyBy3g5F9bNk8u1Du",
  "key41": "2ujxYhPheFSyAU2dNkBaz4rVMkb2yapN5P81ZNzT3Xe8PHn8nJTRJtcGtGAzkcCVMiA7q5tmiA3P9XvQvrjtovdJ",
  "key42": "21JTxasBcC6hW7YLUFM4oTQ3dctfkm8yqP63afwBspqyF9UaLBNyVG386nhGDWfQZrbRkXqJijSyKCXAyadudhr5",
  "key43": "31K2A672AGVZEexb8v8xuLocdeWFwiURjj3uNP7g6WV3JaFSNKwWgtGqrFvrJ5i9uuHJ2cwVyrhNbUb9xzGCAnU5",
  "key44": "AyVVZVuiLq8P1QCdtBrrppw6NTERoNtKCoJUmdZVkufvkp3G259YqeeQUeXKA8CS8cvJeTLuDE1WdnYeUqiUjz2",
  "key45": "2cQ3fAkH9gQAFNhhcxBJ4z4xLd3TmcCac7CeSy2Qp8ps4SvujnN6i3NLrwQzBSsgYeYiUPH2DcEYG48rbhqzNtne",
  "key46": "4Vg778nQMR9Ha9UbvPE6LWme6ARACdEWQ4V1PdEZDcsrQiRPWr9NxWBaX9fryFF7Dho7tMTua5bbLU9iRtz23sZU",
  "key47": "XvVDc1yKj2S7GmZJLjmxtyz9TMmfn3EBjhhBjtLfW4u77nTJFCdsYEVcawuksshjwHnUXqhH4ER5otrmrR5wxwH",
  "key48": "GMqECfm9NpirNWVfWn63Y9ENpTpCuNrkNvLgBkGvLTjkX5jLCpZMTY8S8UPSSun1Na4yvNrFjcrdodMCvY4TA4Y",
  "key49": "YWVTyCZWwxhXdoK4xFsw2asrahtHbMkktbabwP5UxcS81tCM6RfZaHJk41oRpA3JewTTY54s32qhG3sdTaD8HAf"
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
