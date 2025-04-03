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
    "2ocKjjyTjrxuUeXxRZhks51LKkw1yfm1j87tepeJk1SkaWJ4aTnu2EfFkR4wUB2Lm5cGHpnJfeyAbPzHcrFkwoyZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jsb9NwWWGft3AeEEiotzpxKUJDks7Fv5mepBs9u2JiDybTRFrrGLu51XhaBLNyVetEPBijpCawNhsN3RtkHUcFp",
  "key1": "5M3Ly4ZmoNEeiA3u7NRUYUh6sP3s3zzh7Lz35PcLoff3nkJrHTdZUhSmLhmYG5xBf5dzPLuEFa9ecqBTUnGFuRoT",
  "key2": "uDrtmjoKeXCc28NvtXGw2PYpxEfLT697KHoT7tseW13LnPvcQQByhoy3PeWvS7cppJaCYf9RpSE5LvpLMa6buMb",
  "key3": "3eV1kEswc1Na4kThoKfe6eiW3bYXa4y3MsKrA1ag2wKoBjNgJ72BKUG4vNUEgmFzKQiznYpsqwiMVsLMkEThpA6t",
  "key4": "2tokVSFTBVr6pri8fVppfJoQzzyGxipPjZWmzQwp6XbtVuBeDZv3EDe7veF8FUdYoehaZjvSgYUBoPHrYRJ2turc",
  "key5": "3MNQVB8DSoqBJf1ebAC1mTHA1UX2WJjhMwaAPwqbkRHopCdYMckifEPCQR372GqJ18XY4jnHDJh2VLGzgN9tZTwA",
  "key6": "3K4Mkvi2m6WngUXUx7xUekF48nA3v1p8hJr7bdhHSn1Rb3dgzKEP7rJjRf2fk8iVRikAJAkrJgf3TRf5W5BA1nvD",
  "key7": "5ruw13ZKu2eyqVKF8SS2S2mgPhgWs7i8DK9QS9dHwFZM354PpJXWh4F5LK8Lud7CTUfHG5Sp9pqEThkUfQLa2DvZ",
  "key8": "M2exU21fXBaTsWRDRVAmwMwkRP6AJNaGJwATXbFAjfWzsnPmefsEoi29bYkNQ89SZjB5L6ViKdDvshv4JXjHntB",
  "key9": "4g7gww5F7hiDX2zUHa8uUuvqNGwr8HBa5NcnSVvSsyHmrwzsLcAUi26nNHRwtcsqVZYwv4NzTxD7ui2uuzfRUmXA",
  "key10": "21Gd1raHgaCQdtvYUibC7LeZLLX59u2eL9CazfnjtwAN6YWnXFoZ2sDnbJho7BUP6nZNBAFb4FPnyzhpSpRGCWJH",
  "key11": "3cjZFyNewyVWPdXB4r8tAu9K8bAmCfHJmf4tALGiUSc5ZW9FFn9gXhiRGYdiemZDMzJGAaasYhQYb5dWupveMhtr",
  "key12": "5pDWg2tf6DgjHvmNSMWSkGTGCoxqSdzzKem3Gm3mDePjvqJjnxUesi88W4Y61gud5K5nbkgiYFG69dK2kEYJHuNQ",
  "key13": "4S5Rm9Hh7M3tHinSRsChUSTkMTAZGwyosEzQAFUe4MrYBxUnkoUtEP5ibWyX8vCknnogdzmWEoMC1FYhVh6CsfTb",
  "key14": "3kontguk76bobTd16UTyG1P4zK5pLttZMwGonUP8zNtWyVuF5N4u4bRPUvhGmRwSobDbYniMtut7g89TJCkdLjZT",
  "key15": "28njXHJPZGu6wSrj6qAPxAHzvXPZLWnXYYmyjNydo9cUauJymuPZ8GqenP1zCA1nN1m7tXCrVbisTDGUmwzPKpvA",
  "key16": "29njEUQcEP2eZ12YxpA2zp2Av1eQNNuLArs4t6agTFLPtzamQh3cUy4mdhbUpc5wcYTK2y6uUDFgdUdRvGTMdeXe",
  "key17": "2Tos7pvGSVeVGJ51m4Mmhp1YBe3mpuNbSazka5budwupWAEqiFaGX4PzsqZzBNf6V48EQEAK8a3QUAmDrRYCsJRk",
  "key18": "3j2vk49xXzCRKwyKTG7UTyo2cmCBqkLdJMb46YYSpudZ3vReS1tkBZhDWaWdvkKkQaUFNiFmWuMjkCEChW3bM7pF",
  "key19": "4zWurxz46zwG4ZZw8m9F9pM8KB88NP8cj8sjwSbgXg2DbpS5ZjA9ZDf1v1zeeyWxP1x8QuTyxytmpzoF7uj98Sy6",
  "key20": "yQwbeyMJfE2Am7EjQcPzYTYUJ539M9S89TPoFqHT5VLCewDFw4Qgdc4EatK9sWAC3zQcaNc4QL3NCxu4253rJ9A",
  "key21": "4E7BwBqSjiXdgeWmEVQDcfQN63s3Tk5GMt1WxaTKgbEcvbRuS8Kfo4CLZFHCZQ64jhsx2w8TNLawjnwj1V46hwLx",
  "key22": "2yzeAxUsunSjPT44VTfBMmyNCb4uGTbnXgERNKUfFphG6CcxpaQfeJuQxvEEZQS6qCDqsecpEJWSL7Sbu8LJDM6e",
  "key23": "5CaQrCZiAqGRkvivYYbTLdXW4pkrBno3R4bCdYKhB6Ysfa7YX1FZ4p8VesPg8GdWmy6GvtJA5WWXDuNarc6nSWz8",
  "key24": "3wbh86tY4y1L3fsfdvoQwPY6PajcFT4ZtoW96my14uGoUUai1kPtuDp6zeRYGqBYBbgK95bgwr53fe6hMYUcXQfw",
  "key25": "3zxyPJve3uLs8DJ2ePHpXnEoXsNzLpANRUvZbXrTmnhjgkZD4AURUAyKRSf6dMjmaYsNYo74pjy9vsQs9n4ARtLC",
  "key26": "sxpXq4itkz9KQdtWHS6SSecY7cWdCZykyfauDCQ8fmAkJDu7HhoKNkUapyQbBDHFL3XUgXwnWYbuowYYiw5do4h",
  "key27": "4qwkYKJPbxkxSX1mA5Wk8H1M5pX77SfYtZysW28V9h35hqbN86NgGwJU2mgNphy2oJZ7AjLyxjUb9927NUijY7ZN",
  "key28": "3VkCWL3rcPfbyJL8fif5ccmtcp436BaoX9KjgNQ3NsmA5zmPw8v2vLLVDRqfnasMUf5fB9gsnKnitXCmAkTEW9BH",
  "key29": "2jQyhwyvdjMyt7rqjXJ3kYsqxVSf8EG4ArAw3GfeU1EwmG7einF6Qm7JDnTkMUHJwyJZ4ivcxEDYDnc6ghVi8Rtm",
  "key30": "24Wdiji7VYa8nioGgMEH5UPzeSWouxW1ijcKQ5ndYPT1ZedMevNoXc6ZFsA3KhM5uewpMm9iGWyLZjtNNEgSwNY3",
  "key31": "3ewixh1vWDVz8Yr58JzfAbb9aFaKqPtAst5Lygjho6M3dSpeJNyTcez1ithfk8FQLQDZBhkgtQB8i66rD6pN8JuV",
  "key32": "5iEeeGPAJFb3Z1onKhQJUQNscWE94wzsLSwuHZFZjuSFMeTfu2bteGzkhJ3tynn4zNxVfAQdAJkKXy8ZxKqeX6kq",
  "key33": "3sNPbUFZe7B8iywz5TmEaWvGs3cyPXD1ENP58oWwmNwUEctvxLzmduxrGfS6FSVgDiUhH4YQubhsVKFA1TNMb6YB",
  "key34": "4cGcSVGpRpqwWacwKVVsA6oz4Reb9vpYaqxGTp8JreYbbEDDNNvJG4muhTUWVVTm3rsQVWmVa1JvRM2VGELgn13R",
  "key35": "57eRjz2A3nSdtYcjnaZTke5SX3zpkbHooY2KeXxy8YodmriBQ1kbAshX4j6dSdhx4kq2bn1dyVPHZvpL1HGMJmCa"
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
