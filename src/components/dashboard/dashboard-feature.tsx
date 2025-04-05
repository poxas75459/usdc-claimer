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
    "ZUXkEm1gBaCiXb5LNmBS4ni65nyEJXKsV226K5Ds85Ds9jqBppHKHwHZJN7bCPUbG5WTjXqqS5QB3DL7NijVocC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DzunVhokGKcxEQZj3g8dyuRWGyJSrVFmq11uM7pkU5XHy1tRYwYEMMqWT5N18xtXsbMXP25Nnsfe4GZMEnBeFbP",
  "key1": "4mqVjQCL27QL6PE33LJezQKAPXAkkHY8BBEw9TGMqxPAzWzcBpW27ZQmiuFfFXNRqL5XS2Wzcp2LAVSDoSCD9j8w",
  "key2": "2QVwuKV72Kyb4rnr8cMTbEwt5phoY8QRy5YEqy4bN6NUKkGSKvARQ7NwdN5EEScfLjHw7mvKeqTKCi8r2K8cpQcb",
  "key3": "aibr9cQzsAamninW2VYUVHb1SsLuVALQq7ncYrZz1AzR5USHsFn7hkZ8SVK42A8JFxHNychRAmj4AgWC445ivPU",
  "key4": "53ZzN1Exm7Bxzky7eGxGLYqbxiSxbFEd9FyTBebp9dpcxS1FQ3xH95WU4L12DsSMzYF6z1hPvFNRXZV6hT6rbCu5",
  "key5": "5GfpaaJTNbPAd9NPvScQwcrPAVFqZWr7z4H2YG6t838XApQQ1wTtckg8ZuTqmP1ukec3nt8Def9FjpcVNazhZGdj",
  "key6": "2DkHb6ooojV24zgLyJ7fnWHJzZ6uwhd93Vh6hA5KPLo2CSgtsZhpa7SjWpHaj5jKu9p9dym3577CHHgGxnBtt9Lq",
  "key7": "36TicAqSBSzESxZv6pdLWnthVauTJHYLsUFLgeDWMz9Eozukft9YCq2Uyc5a5fzVff6dznVgpJcK7TfNAZf57doE",
  "key8": "5tUL5VRw1NJWZ6tm5QF6F1sUA1iw8dgpN191q2632i3C5ip8CXcXSY3dd7MZNoPXFWaq3tt6KrvmrxtgDQVS7xtL",
  "key9": "2XyAEoUwwZax5H6Wc8PdkM7xTpYWrLELbKhPWmnFHvBWm8Pzrc2v7BmCYEKyXPjg5BZST1YPeTQcRBtuMjApQDV4",
  "key10": "2u6bFDh2aWSSrMQFU9a2q45WXJzPHEpD42bkbhczJ3ukt3tJL62PzyErAmsMJ1c3E1bEMx7qevMK38BFcyuDMqfd",
  "key11": "3CCPwXrj6qhwrhB7vf9fNzS7c6SAmgeNDdgiez3WiS2ED2tQtdzWYhkWHpm7qWB82KiTkC6z3yBgemP18FA8x79A",
  "key12": "4M4gvsQ1grFJPLFKtm18JRpnz9hGvdahDqFm59VaEy5wRm8CJkUSVwQG8Ecqt6jY2oDHC75zygTitXY3ariPPW78",
  "key13": "5qTv71Jq5Vgm9t2pUHrEBw13h9gAF2VL5FE4pAFVTrr3cXsj7wuHRvqqebuPZyuZUVoUSdgHUT28Pwr2NByVv2SM",
  "key14": "233njrF4uNMG2398wRi4uDZUY17SCHrL5LHmmw4PYKy9uFm8PrHZNfLW7j57kLfdetpCjzhPLBZj53xUFSXJvLXp",
  "key15": "5TqGnXZTUfnrrTx9DdhV3PJfG1ZVCDfesTaLwF8NQCtzJ6SYV2dRSRMsoVxmqHbFqyPxm5tdUqDdBEpPth1Wygn8",
  "key16": "3c5pe2F5FT7fggkHpLRrpKcjMkGKworum1eLtcTFcKJqtwt9yQkquZo1PXdXiBhTCp6mD36V8EG49Dh5TeKDb4tT",
  "key17": "2gNJSxCdU2LtuSn55fAwUhwtvcUNNXDZKH7TFGKFV1fUHgnj9J8ir1nWLXSKqLpVTrckdrHzxDeFtd9NdLEHh4Jn",
  "key18": "NfUtsgCMJEpCXEohi4uJYERH9DpN6QHT3PViCzGEo574ctqM66s7UfkrT982BQoh19VNjZ6YLGNrYQ45bQViPM9",
  "key19": "2VfxHS8hJ8wyGWKLsiiccwpL1jHmr7i6nKeZ7WhcufCDHohYaLzr8zob3pDgS3GiX3CSS9umMBSD3wT15coEFY21",
  "key20": "5JjWN87ZcDApjbEKhmXEg4Ap9tttA1qF7qVec2YiB286UgkoAGFpjkCzQvXQWFLUAXQrmLAb4KwTTFSNkDszqDhd",
  "key21": "2cKzJxtrYWLsNuQvJsqCF4QXqas7DiSyq8JrnrG4PsWpU64kBWRu2DWYVYPD33bfYKarvd362H9pFFE7HZDseJak",
  "key22": "54tB37PG4MYtzhHmL3ta6Ud9waFrLkWSYxMspVG9gYKXVeVx4sSo1hwctRqWZ8SdpXsDkir1UgfYKrxVbz18fmJu",
  "key23": "2p1ZCqJ9SSZkCajqrhWNuvCYTeEASmQcbW4uyhJL85bu8H7iGNGexpTKUMjMDjHpHqwFvMSNCFEVoEXEj68n7YqQ",
  "key24": "5KHKUsYGctv2GSYWoNkFMEMmH12LnejWyhGQ4A74yhCuuBjGfLy7TqmerihNcWDFuLUjN4NaEYqwkLf4oQK5WkDy",
  "key25": "63KzXHw2otkhxVy1xn4k9LhCbJVz8Q1mhXrWufEkPCQffkTpesK8bspaiDYjZeFnerkSn1kDg7ftEGv9DxqzWc15",
  "key26": "L4p987g2BzwaUap5aCqtVSKb6vJi7aE1VpRv9niSsQcQEHT81jBdhrK5iQ9yqiD9UAw3FaPrhPwWYNF8m48F89P",
  "key27": "hXF2bcCSNJYj6ZvbFY8bV58ARJH8PqaGU3SWHFe1gpruUxyVeQ3eDACT7vzjMVRizMQNJvM7ebrsSMyNJ5DGQs9",
  "key28": "3EKnTNjE7YaCjawaDV7nTtFicKRis6dZhoWQAuKNXuW3hJocMnvNmK8Y3Go44UvapSRutDRBzG1DAy9X4oeabSRm",
  "key29": "4x712zmCotgK66mebpkhwzMpUUqJ46k1QW6QFWXkmRQHs9ysbUXMTYDNGmUX58jYPwkdD1N9tuaghHSBPt4DWMUd",
  "key30": "5zFaP47CqH8eZo7pUoBHpt4XyAmJv95mnph4dq9PkTR9n59dZxZhTTUtt72KLHGb1yrTsKgAVYdNRLBmSs6a4FT4",
  "key31": "4qxbUWrNbuVUNFL2reKCwEmBURs6PH3fosVsv4KbFTd4BNozDzYt7RZAGToVGEADHWCqvC84uJLGFBKWoUEeNKQ2",
  "key32": "Sx9axR3XZ13mMQqPKybVz8wT5a3DcrAuq8rJn7zdRygAUus7NrbztHvgLpW9VCP7aU8nLqJbUV8QaR6pjohsMxD",
  "key33": "2xP6FDJnuoJdnvdLcBmhcyJ68D5mM9DZo9KptsUhgb1euS2T4PEKcZ9ct5Wmi8Ys2prLAvQbTWNLRxUadZGULGuH",
  "key34": "ZRzFxoRFPkwc6xYuvGtuFVeJQUiK8ed7QvCARXxKjgxbT1HnB6Zjd7Ed3sGCEGw1LzT5m8BfnbsfxxJvfFZVsU9",
  "key35": "2u7ZXJFFxxNZTc4QbmZ8A7zwTKrLfmt4fRFoXhcRsLBGjwZ4UzvuzNgD5tPiq8NAfGGw71gAvyBbnhZ4Gm6MuUbo",
  "key36": "2aq5NDWZkH4CQgXLPZyJiMwsWwhUqoNvsddokyPLY1ExuUSU4jv8p2qZrpwntsLMmohJedTXoeFgH7kmkGv79aSj",
  "key37": "2XfRTeAMpRUWNZBZAVpSu5wwqQUMAh4zRv169nvgihq8enBHVKUfK4yEsf9KyZjKb9P8W18VXmAtW33rkmAxPCzL",
  "key38": "2xjAVk9esEg5Nacsb9x67Pzx5bQJdLEPJqXnWPofNGYmovK9W82n3B4kdZQHPsmJ8NRR2hU2m1PicFV5zNGAuzCA",
  "key39": "NCuzgohnSUQfHBGSCevyegzsQ7hP8pw8HzMh3hmfQDZAbhVi86CmduCcrLBNCcoHjNQgrx8iu9YrrQz65Nh4qik",
  "key40": "2YeiWwLTpu8dtNgaT6ARLEDcRXu1wyRaCcvTCdQ8c8Ht5AK19EdvESJ4pYcRAVHiWrxjSuF9sjwxHkAwCJey8jw9",
  "key41": "4QM6tcvZzhyR5zXK9zo82dMDZUHVziEBs2Tu1vodQ8zrm6DweD7gAAMUxrPPUrETyP7ch7Y2BSfGk7cWJTpPWSV9",
  "key42": "4r7853L4E4afBSYjmPBGfDrfZoZbHsFb5ueVQc4Ayhzd3PVFW79S2oFwCXAQyisq4Lj8cb83LFxWGEqfLXx1rNgi",
  "key43": "5835f9nCUtqKJkZtcD5TDBUu3wVwjcfHK9Rtv3jmUNhZHxPwPAywan89RzuiodToy6jLXgxkUWocPu3rXzJRJGv9",
  "key44": "53i6E9cdDLq43G69puawqh8DQ3KCopQyTJseQ9XKfTkxt4SRtVLhFEPmrsSiuxbuvs9QyyFtpVzRGPwPTZYYvgEn",
  "key45": "2qdCZb6sef7pAhN4if2fUosbTrDn6J9c3JrpFVJpm5TyHXPu7SKwyBAZxTfRnekQ2DkcU6ANRg7XV1URQ53421Z1",
  "key46": "4iF1MAq1wcPXbjLSDNmw4HL1m6g453TNmg78eiFdJV8kCCayxvrxKbxb8Wypuci45iNQKDKZDDezaYjBw6RjZcUa",
  "key47": "3MRi7AVG3xCXbxeA73wNzk5hXZ8bwQaaBuVyBTvqzmChSSf6bCqUBxCfHSfnsFPDaR7qAS361ZvSts8gssKAVBjH",
  "key48": "3crrrXjD5wtCvXfKQGyBsL7HZ4nxeEaqrdQiVatv7XNaoaNo21nVZL47DQd4CYdbFqYzDjCNo7JQRL5b3zPMn95a"
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
