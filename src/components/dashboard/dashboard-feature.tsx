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
    "4wqYTgfR78Asv1E2XwCDtBfDTtTj5fxvcH7DnwR4WRqa4i8vQca9euBaX2y2584UeN8d1MGq5nZZ5ennwaBbYUeD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d5DMdcwr9onTcnSJ9PxC8RbunmuRnVpfp9Gep7fBGq2YY17bHAPgUd8w7Cocfy24TzgDSNuFfB9TwSdY4sGcA6B",
  "key1": "aXiFS5PztXWVcB6LXFwLbVdZndug93zdLq6RPpbRaKAQALQyAWtWKYePdpnDeDs7hDD769PsJYLTtiSWhu9ntf2",
  "key2": "53J6zDgtgpskYDYMERkaDNN3MbWw4c635R9M97jYhghtSjUeCRwY9MV1ZoBKEKxzLLpEnK3kMQLk4yKz7m1qNJZa",
  "key3": "436UKguE5CsE2XDHiC9mCHA5CgkjDHNddt4J6EHPhhWyrg5NfsKe5BcsAHfVFW8qfoRnkyPfenA1sFPn6qFWktnx",
  "key4": "cW7WzJcBeP7851ut6SPCBFvMcy6H7bPYH65zPxatdH7FzF2ugxAdSP9WhijYKkN3sTGpWU8HS1X9mBCJCgiNUyM",
  "key5": "4agb4awTMAeNToAgB9yTWZEgXHXAXb5q3okL4heQN36LXeonfgy3QMHRWz11e6688WbNK4y4nafDhxmLJDNnDiUT",
  "key6": "2BixyDsBWUZ3k2znVSF7wfom9MAASeYuRwJ5aGKSooKLrhfopbwrTs9cmUFoJ9p8xDpW3FSebPihwVPCSt9gw9ZJ",
  "key7": "XscuF1Fgxp84uBmRdsgM2LAsJFDGTPukxfRHTAkHSarPLrQBCquo99DZVZUfFdeZMo2YcoaMXmErHyCTq8hKKhu",
  "key8": "5oKp91Xjh1yEYxQKdn4MBXeVZcbNJDJE3YAYpyB8PPNaFrfSi7w7VkDMpnsD35qj9m94LUUgHgPieHVqBJJTTdck",
  "key9": "5qBGnmtvMYEguDQbDqjuqqAo8BhnnN6MG84MV3zkLRUb6ZaB1ExymcfGna7z83FCBws1Bs2VwsNChjDVywHdzmbP",
  "key10": "237q8GUJBqr43FUEKmpn9XVTQkHw9c9G4QExuDX9ynAjVVhauX9ChjjLcpduKShVeuEugxuKbZfAvbMq91pTg85z",
  "key11": "2fb49L937Ajhdzesnxv9cY9TGL7SyDybHm8wGW92vpUBHUM7EQAh9rfV1NKmY4R6fk14vCaCghG61qnzbt9Rtizc",
  "key12": "5EJChp9wtn38HmDowNotvSFrfkFhDcCMpunKkhtzXaL5NXaAQLtZv21kQMmoJ8ChPUR2EeCq4hduqwdrPwgrBmNm",
  "key13": "3ffL2c5MPd1eLxrLDk8sFeyygXLtdjKE1EnGWnWNdw1ytYpnAS7yoX1P78xB6pUrVQWGsLyuj4nPyhWn2Adx7LN6",
  "key14": "63DPSD1jWbQtLvVeRneCEio7417jeuNEjSsLgtCA5h5Sb8ru51R3Qo6nBLjXXWSnPUsU4YkTe2Akk4EKWFhuqjNC",
  "key15": "37gx1pZM63pVyT1bEU95gb3KpQaWzse1dPZq54xkNKzXKP641mh5r6jVu68zPt9ycQrNCCHUuqdwSJ5QfAXYRzQr",
  "key16": "4bQRrGpX1M6Ef2EGUYXFuPaLqBBMvK325bT99PZ3Hp73YQ35RuePYDGLJVvKuZoPaLFoHHCM67yXHDXNPspGc4Nt",
  "key17": "3TEsnjnwcEufkHz4dPZbibYxNqfwnYcZAr1ACoX1wdbVX9ni9JyFTisuLW83GULpWeMZbDFABqycNhjqvFTUTXy2",
  "key18": "5MusZ3Cy4oCNteAPTGEt5puqrUUu5iPqmzBZoGkFQxsZEsJF1QwC3G9Q7ZvmLRr1CLBhK6i8XKWQgEz2obCXPnAq",
  "key19": "63y64nZ5ChQaYNsgXTBEGJCLBjYzRzdHrPh7sC4zFCokXbczTYLAi97FgfFWF6Dy7oisQyjhDsTtEJopswxpXtBU",
  "key20": "5jM6H65Gri3tex4yJheW1qwiUuaK265cGoueVktQT3tzz4UAoHV4qdMYj1eeUtr1cU8x3CdiBV4D8SsNt2Q12N2Y",
  "key21": "wsgUkJBBjH2kPVzMcfSFHWC6a4pVRv9NiKanm96Dp2ZNmdeoFm6VFxGqMhsRy3WKUx2iWoqbkn9JWed6t7U9fad",
  "key22": "2gd2gkxnxKjfJixdSMtpCR5ZNacxibnRkALqygdnSPDTzVBrNtrxyDupo2CBbxkfRHZ9kYvomL3XvoTnrS5RtXAk",
  "key23": "4Sk4xyhboRjYurVvtfTwRJ8McKmJ1nNmXad4YpLaz7cN4TW5p91oJEKbGABqAQLZaH1phYLX9sz2tF3jc4psJX7R",
  "key24": "5VDVH5nwp8eHFQJzTgTKg2m9rLo5ibwao4JGGpPZo2YLDu692USx8WYZo94YCQeMchfs2gnfuBHykDEWcF2YQ5gG",
  "key25": "3N7nLJDdDdji2Qwsr89feCG8CfGdB4grvATiR67Y6AfpDRKoFCEpmfbxhFnkuisQk6KcjkNFBXEimYikZ6avgEuE",
  "key26": "58aZxM9hcztdS85d8FLVnPHcqqwswRJG2CnohVWXFHyw4yAFH2U5hwyKvyCVP3N1V9j2jk16CGqzXHShvcZChASK",
  "key27": "pkQsJy5mXtWQhbWuz4DSuJ22LbY84aPfQSNAav8tYo2zuhXEYETDUCD14Xr1js6a36Zexb4F7k1o7ASxSN4SKgZ",
  "key28": "D8PNTPNttfSz6S9Nx9y1wCk7BDBxCh9CvvJAEWuQqWUhMqrDMWogsNW4rAJnoxRp33xquXEzr8Bgn6qGy96uguR",
  "key29": "4yEYFeDjozRs6A5DPRVzcu1NZ213tVB6PXcedJSv3xq8bdnu8Pg9Tk1XuTnNcNaXLg9UJ8o75YyuxbxaZC5QmFQf",
  "key30": "3Q18dd1y3JntYK72bz9p9GfGd6SKYDg5DB19FrPbxymbeVERxgY4pRcsZzUH9QWUKDymYNtHinxSTkrpQUtj6JoP",
  "key31": "5iH7DjnKQt6pSdHKSkucZrPuY3G6tSQUEFbQTinAnhXvhomNrVNsxzafjPyHoqofjhG9YNrGbCi6Sa9YDwdpSpAS",
  "key32": "2KjG2pRf3Q7ugNhK7qcY16PJuUYeujFcGzCKNHj22YMACVz7moNJgFXXYhzvj8KdzJAtkzkJjkwhKfzXSKm6BNLS",
  "key33": "2wJ6bB2vhJ31R3pApiGYnB2JKs9eU3DMxcdMaiVJNZkQBbSWmiov4QLU7KThZQYHzboJN4jb5qMnke1ZaXE3Hpqw",
  "key34": "FkyXdFbyrkNMkW8PhZJDLnb6CgwZcqTn4jWod5uto6SKBseMN1whjtrFBWdsHhDX3k8tdJSuG8hFW1MnUqVNxqC",
  "key35": "2Q1T63woAFngZoWZTQWuB45uLDq7SpzrJcSnZLjdDVg69nhc9gaHsf4exEyPKKPUb4gYnp2RKDwMEohqSRNjEvqx",
  "key36": "5AsGEcTMPTtZB12BeRqbbDPEUQeEks2qEZV6W3LjxWADKRDwAcXh4wyJPsVRmwy1LhGFeN1542fEudZMyFxFGjdj",
  "key37": "3agAf68nLkX7u4BgqmjtDxpfFfnbTPCkBzmBHdpum5KNwnsaNacN6vXokcuQYbm6XsnYahTR9k3Mf6pU24FWzzZo",
  "key38": "4YzMTgr9nJUFvEHTmiD5YeeRCdiRAeNWCj8xVUGKPvfEDrfJSfwC7NrdDJpUBeGXKNxE7FBEWmbRT2YFXQYNRkTw",
  "key39": "3gbzxaph16bGxto8roKjucEcntcpP569Zc5pkLrJZs64EiZhCX6durxhffVqnNYESZyoP4BFJ88EQsinR4AKaqpc",
  "key40": "3vJ5ggMaJtzKBjco8ktbyygD1X4JNkXr6uCmJdQ59CKriKwYusCCCjys4dQ2YPNLA8sZn8n1fNZjazBhLqRZ7VuJ",
  "key41": "igAwoWCQXMaYfQpDwsTuhKxHv1YqX8EswJrzHY7ay5aBoNiie4EFoYatgdukRXJKowHSJqSZDwaZoa4M4r1HfEN",
  "key42": "ugsRU1cuiaxgRx14YAS3nXe9KCuERFmXmM96mMvZ1fn1b3wvgXf1iXWk8TYyu12yioAxc6jF6e9MDtLNBqccWgb"
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
