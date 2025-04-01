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
    "4WfAcCpFSKLL8m3iuUi5BwXFrRCYUWwbq879gPr288AhBz7GubPFhqK7oqVQo7UxFXp3wfLFMK2qXsbdK7f7zsjW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AUPJHhaT5LjdmepfXpoZm2Uj8jaf2NY9tPCtcwmeGV5rgnnpYUhFNsdPeSzFJqpmw18Xmjb3x9fgDE2oeg3xTsa",
  "key1": "2CTPQZvwgRUWDsUQcFdg9iHB9QBegUXK3qjo8t6NkucfZQM2RuMgHQ1LiEmhnnJbUX2WAcb77yv6YaYbcd3e5eXF",
  "key2": "7ys41ufAW2tuPYm4o1ukzEKb91vfE9x6wnAhfdXvBQUVxicKgsFbqW6w6QCJotxcUfJPhJQaRUznJsjxKmJtJJQ",
  "key3": "2BJZA8VrrFxnVmnr91AgjhtJFCuL3TX6vyPdeVerqb3YEPf2xuJt1i9bkgbAak6CV5zTtb8a5WMhyQssNXMq7pZW",
  "key4": "2MM7WyCamfygfxBP36AYbsmUkekngGSia7bG8SJFxHGTkHpe17ptYmZLBDQZ1BWaLyBwbzJ3NbWoaVQPe26eVWPd",
  "key5": "3A44ZcEsRfA1f8vAN6BboAkgwp1E5u6YWeZJBBMjNSQC8qUY4dxY8TdCDjDvzAY9UJ819Rg1QTqnT93G5daqsrgr",
  "key6": "3W1qMidT1WGd9usVcYuQ8XbtBGfmaa12jqfPSyY6i3xNnXTRVUQdyFJ1uNt1L1QDh9XvtH3kCUqmuD78ESyFNP9F",
  "key7": "81oFtDNXP4rfjrkMSMp6SsjJzfZ8xG3hDnGfqAZtybP85kouQGB88nrKzcM7tEQmGJcMifbPEsXFFujLDvfcLwF",
  "key8": "2exVJYe4VzpBaL55Mha2CLheBbKfYnq7aqVJgWmseFRFCtZTyxkS4eBhXaYNzGR483tw1HeSNwbM41rLFVT6ueK8",
  "key9": "3nHS4Yr5vTHD6DcwhrMb7z26hjCDorAkQTxT8syo2bK2GFRur7pnzrJisNHagz4zWJc11qUKi99JymQkaBoQsmM",
  "key10": "3AbKsWFvx9kV3F6EiRuJWwWiU8C1G1WoMjcbVuM2EDWp3hhqrTB1vac8VShVeTVmS7HvdqQLDeLMehokr4V41wiU",
  "key11": "2NdaUH1shB9bopgxG83AKK15JscX73AtNwtVzqWcfdzH258AcLwhdznxH7QUz3XQUKJLRkQ73aCvrYYU6WdioLYV",
  "key12": "594u3Aaf3VCy9SxHV6ivEHwT6YfbsaizHcgZz8pgXWv8EQKuG3379KBwW9iAZWZmS35Qew2gEVCS73nvh4grvRQb",
  "key13": "3Ne86EQdfZzGtc9eg1SZgtqCqH8hWhWDTLh3A5ixtPJxh5GkZvkMrDMmMBiCjXWpCuQfixeubMvkJYy6N3Xnnc2j",
  "key14": "5JQneWEPJWsWUJ4ZVzcTs3399hRcwYGzvCxHgkAYPsB6hnDQz8tDi7unzQ7qBwKpiN5c9s5zg7e4k9dBh2cLYec5",
  "key15": "5VhfcuMjP1WXP59f58G2RQyepV2TnRkLuD69VJshuV1VFKHALeBCTGDdim38xurXVapyPxKoRReajxcccCVjN8Ap",
  "key16": "586XYcKtouzdD2WVeVy1wdg22EaduSSCvj1qAV9QDoTMCRJDx3N23kPZjShHU4zXf8aqiLL4bHb5RtCiHq1Dw3ze",
  "key17": "2pxHi86oEt6qt27d4bZwnVFhV72pRFmjC6cx5J11iYKrmX4McwwR11Bx2dnEgS8Xzu9n2P8tEXkxktQHjinfEySj",
  "key18": "2eoCCbRWDHURzy3VK19Dt6KfQSoUrLyqqsqvqQHQ6B6sZiAW7DV23DbV8PaDVfXVShnnVDiWUvb7S72tvPoKtKT6",
  "key19": "NMv8AwVfrw5SET9AFPQkawuCArUJqxm3MoF8iDEyrjVDdVWaSDba1RscwmTEyoqUNKRcAxK7bn6t2FnbZA9TT4L",
  "key20": "uJxBMHpaWeFXvgiUnsxnwoxE9SmJLmhCypb1BpSQzatbKwmRmmzoGMh8D8LTUu5fBJwS9ups25BQRWXXDPfZzDk",
  "key21": "3ELmhrfP3TcxHs1uL9aCabLb8xmaf2xfLSbDCXPqmWL7GXy5PVLDfnNSLvBoWQRgKPWFsFSvkp6yWWFPyeF7TgDD",
  "key22": "4Ax6oaA7eC6xCmZrwwqzgZE2Hgr3ujDe5HNWqmFSYGVE4jH5bAHKP7K1VyKMZA7ZbFycxtSx45fZacgESDWYCfRX",
  "key23": "ws7wNzBbUQgTHsjaXdTmPWbjUhG6bRxbWYK3vSDixTShRDfVUn1mbgquLCn3sRNdfcZR8gBx9VPMDDcoH3JPmPt",
  "key24": "5ZUuyGc9MP1yPTSAzs3YnMJZH4FfFL43dpyKVWm9a9asKuFs7TuAXhi3XAzEEY8YfxVahCfnR7ubEmJD9ySyRTy5",
  "key25": "NAKa8vPLEQ1MSyNd88atvEqTknxTBcDqNQg6dRb127YxmJPeKKKEQetvkBq1dxe72NwHntX5wvpHduDSmCCkHvv",
  "key26": "4kLeMNx8ZT7pC6AXcjpYT8UBvKpMQpPZwnvgFF5dy45ZBY23XXihAinkb2xTGHVef1i5kVLnsMgqLBBNVYX7quSw",
  "key27": "3fk6nGBuo6n6DJEQUicRUiTji9MQQQZqK87b9zhdS8nVusMosVfVv3VUDwdMJ1io52ukhWoDwT2cvn6U2VuaSxKQ",
  "key28": "2c9PisjtDQsTZGf2q3KwnnEKesraZh3FgmpSA4yWhiQbNUPLDmpDHThss3A1ERWi1XmXatcUGW52SuBFrH6uAvi8",
  "key29": "X3J3CUxHpy9AdkjzfYSGgwMCRGpFB8L8rSm79Jz7DBK5xVoScMubSoQQACfjg4eLHJPVWeAbZSEaUWVAvjozAXr",
  "key30": "2PgSDxQXJT3gjuE7ZwAmxfrpETiY8Go51azT32QFviwG9PhhhGXzR1unk1pK27Sx6aMfUzKwH8RzxbBrwG2vNVDE",
  "key31": "3S6QycLnLypsRMFNkvT3krRFnbkqmyBKTBdvBiASyuGzeTGDhaCWzbBAFrFasUSvLnawE1mqRwvwfnDHcTNHvpma",
  "key32": "jgKmKCMgSn72zwo1qD2r22TiLFLxFNnFeEkqpgTeseEkNfyGo9a2C3vmHHmduGNfRJLGrhWJaea6YJoX9oS2fG7",
  "key33": "5M8rADZe1vbHEVJwMYXJuSJcxbUx49jhjpdA4NdpioQfjU3fcLuaAjgnaTPQkPyaS7J2dU7q4ivKJFt7ZiLyi5m9",
  "key34": "BMVgLkseZsKL2oG9tPjaXa9grXTfScEUFsEBhAbqMUw43mYi4GBM56qHD4EfFmz3DZx68zcjfQq8SwLf5VKxfHG",
  "key35": "nfSx1vt9ZgZbzoQnY8wJMxZAfv8L68bhTkquqqT9DsuK4fz46XcjKmDrtk8wvCZQsFhFZ3FjkaMcT5AHt5SJTpy",
  "key36": "3C2VvmJhh5z1DCVeizB1DoJkV1qFKYHQdCWaag22C8F1JYkVD38wG51G9jpK964jR76YDyk3fzRfRaBG8w2gM1GW",
  "key37": "4SH7VdVV21P6QKgmNg4iHkyF1dYDsXUxwBVsGtEr4QZtAPoyDRxATuSi1hjwNT3oBSni6BAxDQtJJESeJBSpsYAU",
  "key38": "53SU8v5YiLSxXGTM4Ng3hd6TTYCfmKTkVazARQNtKJfEa3pCcmWGXcjZUG9fSCbRJXmhXTG5mpHdz5ZawNXqiRTc",
  "key39": "vv5r6X7EPrEMZBN4vCT4mkXLarTsmmUc8d628KLZgS7AGbN2AhmYExRprEwZqbdJ77ZmBLnSA9v7nwZCQSobXV1",
  "key40": "3mgru3gZnEhJfycG7JaSovN4eL5DWA9bGpTYm3NYYqxeAyc6mnE5uEfNZK1Gtwjbp9QVW4f9RaagqSTjWcH9gpq7",
  "key41": "3zpn1kTAredD9NR2X89EtWum8A3SWxvQ73YY4BS5AWEoZhMtqurkQeuCaGbLHxHveCLknJkCQ6jGtE1bHsUEzbV7",
  "key42": "4DhypcVM6ZzP1938vjJcA2JEbD2sKe4aSez36tcNbK9QFSnfit26Rb49Zs79r2tPFhC8e3pqs6HRxiMwPgrkGuNc",
  "key43": "5eqMB8ezEWALSBJ4j2qkZK4PKSR8wGDSB9ZA61nVfnptLwnwkcCxwPfp3pWSYYDLJFLT2N218JaziMuEi5VvFskt",
  "key44": "5KWCHNbXxdPFr2wjBjeqk3wP4EGD2gEKMmw3Pu87pYUiskwmtZeRizdGGNsjC7J2z6kFE2Ud1QdnM2zHvzwPvRYX",
  "key45": "31L11GVD88cF8YLBxAQbZL7g4iR1jiP7NurAkP5D4fyTCFha8zQMJucY8TkKoSrq884ayad5RdNWWirEv6k6d22f",
  "key46": "58y79AX2gZ5GFfTLgi5QS6nKNWC1CesSk4RRpMX2GmppGS4VR6QMT6ijB87JZ3CPsBkkV21pSXvn2Ra3TTcJLXKK"
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
