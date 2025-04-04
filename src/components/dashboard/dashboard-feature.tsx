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
    "2Tq5oiDwcyg4J6inzBiATMrEbSshKoRChkLFUH1qByXe9DonTuXtt7eRjuHDuHfKskLkZbpi1bZkA8cVcXEDDb6X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q9nZ1aiLgevNv3tMiqGdhRNGZZfGuRPRBjXQg7E7gJcdx57KgkjYXo78xwNKhGgDpCndowDfZqvZtgnYwKcM24Z",
  "key1": "25sW9fqY3MoRVmxq1VinBWxxQCYzqbQwktZvENdfZhNLNDQHxrbd2TZeqeWPm4ucbfWtkHa5sUYn4J72WM1nkQZs",
  "key2": "2QLkYMjvggAcmT4NUf3AedTaXyjmLvxoZzVnxDeFHAUMX4opGkKQ7fk5c2H1sTFwB5LC2QZi1gQT3Vi1eeNbQVWm",
  "key3": "4gxEpxKsAzTcDQruULeMDkRQHchm1Sa71U6xwrPcNTzAUiQLSDknassenebmjiaH5LnmA67jkQj2iwGJfHVk1bvq",
  "key4": "8DHSjgniUQCpS6bH7zaDt358Xms5ESz1CX3D7KXZDtcXsfyGJoLiTCFbqkJ7SsSvwpqE7h6jKNoFrYusSycZUyC",
  "key5": "82MPTmotV8jYZeSKDNmZX7pgFzMUoBNqUf1ot2T7qBq7Y5Jz1fGbizw5Aq75r2uQJHXSMV3MpKmFuezyrmYGeKD",
  "key6": "4ueE71R6ZKzFPM8jczgiksU8JGZzLbegBpmAhbfZ3o62S5YwoD85jDFt9eqZ6H8HNqMLVJajrTzUbL3Y5itQuDVR",
  "key7": "3kXxEJNo5uMeXiiPiWspZkGaZL4ZwtgArbnhNJz2G9VUvpqn6P69o1YkSHw315HcybHJfAbCCtJ54xF1aZxTC9mE",
  "key8": "5DWnJREwmZ5nGXAqi4y378hasvXq4gMydpPpAw8BAZixy7nBoG7oqaMkcyc97FodYTzBczJFSJ5fRxemR53aTgRY",
  "key9": "3Tf7gagCDyygzhV2RE4PuF9ZeG4JR6Dk31bEdaamqTBLjhrLFHCvqWMYQVXXnMB3JpZmZZtdvx1cemGZHWUqrFXY",
  "key10": "3haUNStnWEtkdcjLpTM5CXMF5jNdKNMJ6vccmM1tF31AoPvrpmqde4zXCHoDbjRsNtLRktG8frWp3H8v5B761CMz",
  "key11": "2uiVosppvADLK9GP1mKR7rmYzACeh363NDHimrdGovUu3Xw3DAL2B4i56dK3AhDcvFwuiAR8PDUipdtop1RWEExx",
  "key12": "5ArN3tr4q2goBCpHEEY4VwUJ7VvKDfm3vw8g6MZn1RZJGkuVqLzyE3WdwdrmZrJJPwrqov9zEufws7pnz3hyuR2U",
  "key13": "5GNr7faeSRxVWBzkhG96xaESdBdii49ePRzuGMFnfrSYuJ3jEqBXt71r2xx1dV5pHL927y7CmigC8E3XZVA5Lwiq",
  "key14": "5ZbXie8zQ1orXisR2TQRZhVYoN3pv8EhAQwKu9W2vh278n7aZQiNAbZpWX3YQCFxVJe1kw67qSHGXoCP1Ff4izwB",
  "key15": "2u1U1PZVbapD24VHkSdy8ZristfrNLEY2V3ZaqsLEDU7YfHp8di72enJM5yA7tEy38noZnRCMXa2NBzqFaZqGHjU",
  "key16": "VGaGFWr5MTAmC5k3x7o1uvhvKvsLvf2nKV6zGQBzfXfcLLTJGrbcvGwCgrDG5ZuaykhpyTX78t4agh3q7Ag8Pwi",
  "key17": "2FDzPFfkE4GGW2keiNTYXXj5A7deRFxFDzaMJxBnMajw4yaQ4pf9zfo2M5e4whCcQf5DMFqQ7guwCaytXh3Tp1VJ",
  "key18": "Htb2P6kjmDXdv8KsVcSr2bfwPM4zmrg9G14XytWEoG1gPGMHHUzmTsyBwQ95s3xw1ahPGcq1apDn7DHPS4BUVth",
  "key19": "4ZSN4UZVDEUHoVKpYQy8Mghu7U4xP9dZFvzoHbaGWkpjPTeUN2iQ4opRvzBsELnoBUoNnQ7SRFxFUfULVoVEhD3u",
  "key20": "22PsMjUTgFBASRBhBDeJ6f86c6zdU7dzAKsKSEgrjL9c3ukK3J2Y72xNnNQtU2eotjznAn2jCGRVSwaCVruanvUt",
  "key21": "GgLFKFspba24GXQ52AnMUNpcg2Y2R2Yax1LLyBTr3YxXn6wDvKGRCvZq9f8zZLK5nKtkQQafEhei64AaiNFmuLf",
  "key22": "2EvmkzP2UvSurLeGbZ2GeG1ghy5Apak2wP651zpjW5E5rYhPnhhb5bhfzzx15DPts7uXX9iqomtGCnJaFWfAjaeN",
  "key23": "HsB62W53tAQDeD5gZXQytcb1R6PdkwVnpxnR3R6drUwJNQRF7o24H5bvBPg4SWTbp8vxerk4TzMDXLyLx7QgDh2",
  "key24": "59frgUDZqAdgfheLrmeFgQbZCVwjxHzcJ2aJ9SE7dsryttp3thSSuf7nFCDjwVpQcF9DMGNksb6gPcma4iYtc9ax",
  "key25": "3mBksz6tsjC3LL8fKZA8JGG54jUiyC2TpvXsgm6DeroyGdvKCotkrS8JfWnhwS864AyMZXJJuaJAg5gW9LwcLZZL",
  "key26": "4xYmY9CqMMX5gDLhgTznZLatYPEFcR3v77qWszwycjW2J7Q3B7oBhbXPtuDA34c9FZfgjPzob3bve9kbqbYQ1K4C",
  "key27": "65AwNqomrJhFneF3SCQGARJStNMAjG4DupJMWshoMoQGq3cTHXUWSwksZ33vuccyJSQ3J9FxD8VSQNLBdrU4iP1K",
  "key28": "HHrMXW5sL71ekEfRjQpLy6oUzLRUGYgswgBDxBaHwKsWTyTmUBRZuCcvFtnjezHu7DwjLUruVfKk884mJFZDoeA",
  "key29": "5i4TVXHSPhZvGc6EdNgCvS3XaENaCzpEHh1jwLa8wcLtx589fzFkBTDkAAjVLCooEgjrHyyuui3c7c1gPqC27RMe",
  "key30": "FtUsUf6zT2JbDYKzt6W3sYYUroV3wkJRtPX6qJtWxJs4zV5kYxqnoUmLn4DEUUKesrA2aJc6wnzYCi6EMuMusQE",
  "key31": "3aBm3XK7HuV6Lz4V1myxjNkHb6RNuwadF885bgBiyi7jF9t9wsPfphyQeAXNUUYDDhrNN2cfD1sL3uHzYU6FGWRp",
  "key32": "2qKQ5wFDwe4N97YzNYm6WczuwoowMp2UPtqJFmH322MvW3vKDcVxHFAmF3UuzXWp7GxsKPWGPXcay5xY7jXDzd2h",
  "key33": "4xa4MmbXyUqyhTdRBrqTp32agdeEBnPMxD2B2QW1P7zJM7ss45yZTLnu7i7usib1ywtMw9gnTtLdzXiddacGbV9P",
  "key34": "SEPrRbFK6ZF6FEwXgCDLdUvE5535unA9vcGu8cGZ94gNrw5f7a8xANYoA68TzGEHTUHFK14FP2ECC6iMPgDQHso",
  "key35": "5GEGT9LQWTgbR4ZxcDRz5nB2tJPBZQYdpH32EcLmP9RggEgRCWuWHeruudhoKQvTouABzAU7q4SfxSeGNLNGeZkq",
  "key36": "4f7g1uiLjYxpXBXWYTXH7J8pwF8QtJbar83fzq3Ta8yuAnhQhSBECEjoTqNNH1yPdWQuu5PqjiPHawYDJpuXuZL4",
  "key37": "31LXkJbuyw3eLYuWyUreswBZF8AC155E6Q7yXCL9i3G1hCZJ4qTDD8GfuuvLnmh5VGBBU7kGYUxfWacGGGNb7gSP",
  "key38": "56esAZNSz9Ty7C7QCXFcecrE46gJCpM7oVnPVvcMHgVPLbVJfVe8U4erS7NcAieYPGPo8E6VjifmpEnRhvRyyJfD"
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
