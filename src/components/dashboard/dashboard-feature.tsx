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
    "UN841jvDFKaQvNUjnoMJ17CGdUYpPfSrjbdTiqUNK7SCs8CxCP8LCr8qjRvYuT2hPif6sjwukPH6HZ8kwhP27V2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gKNqPAr1CaSdrZN7XkbkNN8iYTMon9prLQ8MVUJ6UTm3rDnVqh24M9jSkDe7DiC3d95psYakoKBywE8mndTQwnN",
  "key1": "428gi3YoN4KLYuzApH1GFkDdbeswU1hxE93t2cfdwbz3GAyVSsbem2g78Ubu3fa38a1WxQfCvnzeDNHMkEZUP4A5",
  "key2": "uPbmLpHvgzud2RM2VzdrsjSbTfRAP8WXGcYAPatqMCL5fPu5E4FTzsNGCi7eQe6fT4tQ14ARQNN8drHntfBtJVC",
  "key3": "52mNKSmoVPbWqTpWQuT2Qnf3mpiRGckTsVpfRTtM8AtX2ZTddwMLE3uPhknviZqJ1f9UP9KYjc5ftvuU6GkLWgjd",
  "key4": "4pT3jdZUsskc1QMvomnQixh4AtsEzXwpAxJxLj4LabpDE4YmPcR9W8LFPs3WKFysBbhWNtkNRpcPxJmz9ZEDUhdB",
  "key5": "42uSfmWFb7dpzQ3oT8HywZkvwTur324B7ncYAp15sWZW4PTfAye3PnFWh1CiPFxxCCDW8Vxkt8jpRpNngfNrwzKy",
  "key6": "5QdyzUmfWK9rU4Lnwfjrou5dhSvYuvKL1aG7b5fCRMh2o2RKvmhjBVCVrNbmHrKdX6gLgmGGZg2SQZ5Ub5WEkD1A",
  "key7": "3fHgWBL3KnC222c6AC4hGWRzUTcSX588XCbgGo9ck3x7AcoPuLnv6HgXYe9AQ8zrX7BmnhxaM43kK4Uqf6QGeM1V",
  "key8": "4RgGZZo2Hvht6gd5ruyKBi5V2Se9DN5QjNnDN8WaMf3wFJHVQ9dvwvLwUHjYMJ3ihgZJ8hc2GH2R1bYekqqPhamP",
  "key9": "2UkQBGtnk9wmad6G5yffa3KBDXwhMJbMhW2oo3zYedVxeYGJqRjFJrgu5qNinHYYSnRnhengesmxtUNYhQ6VA5M9",
  "key10": "51n1pxKa2aUDw9iYQgHiUqW3XP3ejug2BKVekB8Yx7wvzfDpHjnSjTsgirUi1f88M6sy5P4ZgCNN1kxBc7NbgK8b",
  "key11": "2rcJmDqW3fekUrstPaebEdeDmMSE97bPGU9hcDTtw7h5sBEG8ZoqodfuSdesevvXGmHvY1NQn1jNRRXpCNz94G1f",
  "key12": "5BQXhtDgyzu5SgRVp6tt4NKBK6Tt6cwQhd8Bop6f4wQ1pTLCD1qs3UGp337DNaNerSXz8nerHBvHUPtsanvQQzWT",
  "key13": "59v6GQWMk4X8uhvhNDdbpLhHu3RkVoTthMedDMU5Tin9tnvAPcb7hgm9yYAkA6ScHfLbRZG8p5DkKi2KgRJ3rjuv",
  "key14": "3gNRH7FXyLm1ntFV6WJVeQZHdvNAqRf8qS1WNfCygyCpED8U3N4QLTB56haUFjs3REULxBn7afBPcMWPLMMGBt8f",
  "key15": "3SiT1Yp3zqF2YLYRe51JfcZ4TMYBXU3NjrbBmaXvB4h7AnnEMTc7brMM1y5RDV14aAAZh3XAyb352H7X7kEhd9LH",
  "key16": "2PWUkihDDmJf2BYy4dBhksoCmk54Ph9oiRrkcD3WGT1i8e1rkhFBVrLctK3QKLrajemJyPrUvnp2rDhPF4GD5Y46",
  "key17": "xGivmMYmseuoN1WNhAG53eeHjUp9QvprWwxFktFH2TKVTFM5TC7ufuq9cPsxYGZuPKL6yR3Anfb4GHMEZwwe8zZ",
  "key18": "2DoJY6EuMbV1a6FkDLGCmjGavya292RmQ7fvVtbbMj2mGGxbgFBmfeUEhgN5V1TFyMy3dFGCvRThUzaCD1iRXhZA",
  "key19": "3gGyRi796TmMYaNCXP256DkUFXYQy67zHicqT2yyu3g77wuEfJNTcM6vsPXTFCWdvSMD3ZDmr485kgYYs1LwVCCM",
  "key20": "2coTqedHXZJW19fPNDk9HVomDHMpRLajgF2qZ3U6ztZMPdjUNtyq6GCRVMLb7jxno2MjbSNqhRoHjYRaso5zTwMN",
  "key21": "2U7wY9UBQcUWk8G9V2G6mGHMVbYi3JwAuN1u3ft8NptC3vGRW117Xp7FisFCX3E8T4VJmcK4huyPT5zGD92f1dG7",
  "key22": "3zutd3NhPXDWm5PUHeCYtnuyZR1MgWECc7n65EGj6EH3EmTapjCGPuzrwBCw5y2KT4kTHxRnbpmi3PZoQdTkFZgh",
  "key23": "3XVJGmmJm9UmfedEuBEXFvvz7LwSRffGrfUDn8pbim1JZkUf98DpymiUkLjXA2PjFrWz2YGP5sZPmefp2he47but",
  "key24": "5gmfxoX13Zq9KcYu2GseETJNkonhjBoVR68ZkbtfjPfafyekfxLPkk2M8sbQPBMDHdR4rfMPnBbeQfavBRDxU19S",
  "key25": "5NQqZ43TMR63BmLxpJm3awh1KqrZH9mcTkWBEZmoVHyL2Nvy7FwmoASEbXGLYA5MzsbmKrPgCe3UUARTY1mU8ByU",
  "key26": "SiLnmGxyjo9L6XE3QNMDWpcMBoQCo2cDdRpobyFZpBPM97hQByJ9ii7zMMidh4dGkVxzENfxiMy3fLuC4ukCz6Q",
  "key27": "4emufGavDutcsFPpwE1PMyxBmtt1zpv5JHi3ScGQ7ypgSxkUz75f4ALot2X68KTQsWvEW8az1d6nKmUzdMMWmhAU",
  "key28": "2qGHmqurKNKSGwPd5CRNPftUvDN94rPJNWuGjGKjz6ZsDESMrYrsYhhyRUAQA6HBMaxW2Wv1N681dqPcA11bsonx",
  "key29": "47PALf6K8Sn9AErApt1wfR2yNNto3UMxt8u8npQMePriUR339ghHCGVK6A1s54XUCAd4JaiTERRCf7jVWvi7KmH6",
  "key30": "5ujCTPmEAJFTZGXFGqT1UZKfDRoFzzimrxtQpNdeibdRiEMLiHtu4dAegC49bNeKeDRx6UK9MuZWif1doqRTfcLc",
  "key31": "424Tadm5AjvXfimuAr9f94pjum73g57hqKb7wKbZxYEvGoJeK5ckN9MPFSXA9GvKdMB7VHGZqnM9Cm9hyabevCx",
  "key32": "5wgG8JishuiYYf9sQ2sVrhyPzD642YK8DKYoyvVq4qLsCDNRbsyrAJuZwshA7GoNGFgANLikdPY6kDZtEZe1TQ9V",
  "key33": "4RJZ86Wj1XdGfVCmEwVSjzhhDvGH7dsUtm9MW5NfKDGuus7m3sZV1QdqMsFG4BZdzA9irj9v1fbdhYRPeKrtZc1W",
  "key34": "JYxiDDPKoskBVZzpfQZw6KuCcTG8pRdWThd2aV6qXtYUg4iLpi5RfZ1Yqo24hHueGdPA8r8YnP2ndz87DFhs2Vv",
  "key35": "2Qro5nkgyEEK8tTNXYa1qvbXJAjycJGrJYHruorANcX8SEhoMbovpkzZPG4Vn7PV2eyV8er2kEVRRWQ2Vuwp8JSW",
  "key36": "4S9kVuWmGzhFkKkUa7XkAxoZKATGHPwGsdGptYht1oYhNjfiPv5ANmCuoFJ5uwScqwcTV3PR1yQxMG9h6JLxuiz",
  "key37": "5ju92msRaPG1FZQkuRs6Hw5Pg46h62JjoJ8a99xc8Tc6gQt1uX9MfVvdraixzxtraoJXdTXddToSouNWT6kxzhAu",
  "key38": "4a7UuTF9TqaRmpbg6CEF3QgRkG1SxuAQujiJ1r2ZLkPzdSuRYzsSkHaVBSJrLiSfgn8GDaWj6tQaMUTP924rwk8o",
  "key39": "oT17BwE8auyT3k2xHf2Jgg5CpZuzg6Fnk3bNn2b9eWixwqkd381q8HvyS8qENqjhj658mCoMNUaHUFEYLBddh16",
  "key40": "3wbkE6HR3voBtWVCVTgSu6VR7KE5GjnSNFpnajV13UyXcvxcHEAim7akVTNTxDzLpkUf6mpv2AwAyr84wK8yXQmE",
  "key41": "34fsKhXPEnnsbyST188gGQepu9Vw82cUvPiKCNuYVDR5gQozoUqJzbN58R1NDP8Fss59g8uXQ3fyc2DbyLi6rLAb",
  "key42": "3RzxUMiasKt68oePPeLdnHmTtXQw7QLZ8gAHWoNGZr4BkeQHMCmCMUoBsShy4JJjavcKv7SYyUPw7GXb8E8wWQdw"
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
