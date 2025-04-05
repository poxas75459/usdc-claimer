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
    "4YCcxRjDbvWAjqorxZKxqi84k5k6JTr6ZSPNQbFQrTVTGdWavNpaRHjymSvAJAL5486C37YNTPeN1L8HbuCjU1GA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X21eNwUR7u5uo6FXouhQhbjAyreGREVtYXMPUakfSroaqnCg9zrQXY4Ff2DEfaWpg9n7Dr2wcEuL12fcJPGSxrD",
  "key1": "4UYt3v9zdAyUy7KMT3oduJ4N4F5PfMSEkXfV8ChALVuXEHtTo7eiPHHUFoJDNtFrMxbZwWYcD76NTyi7Lf68xCJZ",
  "key2": "2ychPf25S3iHUT64fbNzRuuCVfyXkfP6amAvWDtNCuWsaCLuMMfMWcy1QGqwcWFb3hwS13cMtsmPp4V7dha55fHJ",
  "key3": "44iDC7NV7AqXY5WRoFofPuMPdL3jSc5fFYsbssUcnKAuS1XT45ZDWCQP8xRcHetKxnfSPG64nitnRQHRxCKbQUBd",
  "key4": "4RMBQ8FVhsSKkaYrGRjxW5rc3knWUCC4xKT5r4ftvZEEayqtyfLzGwC4X7D2tSxe17nxZnHdZkETRzTvnNPX2E3A",
  "key5": "C78jQeXH8vmY5B4M76pMEEpFP5HCSvpQbzPYbXms2JKtcu3FHezQaNv5mjjmwfRpcnjsAEdkY3C4bfaFYrDFvXk",
  "key6": "5dYm89vVSmTxewx6u9XJQpAabB9hiMxLNtN1CCqMs1Wf96VNNw62RpZMALe4GdQKBgsCGbKXuUyTM3MX43gtAqVU",
  "key7": "5cAHpk4nH5CmFjbDob1UCkfooTY7VKLYQZNH4cGxMF2c1sS5x4RNHfxT5vvfCCcpLqmr3SuRkLxLDGFHgJAEox2G",
  "key8": "xFBv1iicFbNHP9sS8nDw9PAfmtsgHDevZfVUAFP2ioRhFCozk7Ysd7Vn3GbanvwL7mpu1mTpfsiLn6qEf4mZ7FP",
  "key9": "B74fjMAyytMpQssNJwW9RjEufbyDsE9QCZK8YVbej83QQoE1EBCBtwjAByweAtAHKtDPfhjhTqDLcVRozEzkhAV",
  "key10": "5ZcAkzUU7KvQxuAbVtfuUyedk8jVf5MfX8gq5Nrfusdat5ft2DaGGgF7awv4cMSMBrSiLY1pzcHvfSZDT7WwtA5D",
  "key11": "2WNadwaThbHYWYnsFGwx7RmPkFGrMrLbKLBvZKTBk6AW3VcEBZwajZ8PuBsHzQgo2bZA5qKounPKfYBJnbg34v72",
  "key12": "3efwUdSzvRBLB5ZWPkQDFuxqPVRrayKwHtPxX3BTtoLWdXgDmHF5rijMeuGrMvQ7hzem7JuMnxRTx2HtAC5QdEeW",
  "key13": "5e5jx6U1aeLbkgpcrXoAb5uMXD4MazNetqp7YYTKJR7aQbu7AZsjXjmye2t4m2c1U4KJD4P8QMkzVV2Qi9MoZPd7",
  "key14": "5u62UiJ21q4XXt5WsPmBhNVGrHjWTz15zHiJTdZq8YroZk1qXWeuq3VzvswvEwXEroGWPdS6xXjKuffMzgyFeGEF",
  "key15": "33rXrwRsPLyXN7SuP3YfYSgUqEpxYMDL1QSbPvxHH122a9DyTwcE7g9fr9XUrj2RgNw3qHE4JMQbDf1eaCXGQREu",
  "key16": "3aD9LKg9TNz5ZL6uy56SneJadPwNfexidbDpJtBTGVs4WhhTYy3WW7ceyq3HPqtSeeuxjKX3oxF9yfgHsnuJeT5H",
  "key17": "64QTVgtevQxjAJk1L9LN6EZo4CJVAfizb1XkG7QDXismfmthNTmQ2yWyrnHzNBR4HcEpvjFmU686KLZLsqdvQE46",
  "key18": "5xVCMnLDQc4sBuz2FJpgHmUmPuw5eKMyVXSH3fCva3CBk13WYngS4wVWeBS8bM6p9UZXcveXEJRRfwvT1ArzbZNE",
  "key19": "2xcbQ8QqAqMim1C8cx9nrajNogMFoban5uc7yYZ6bArEt8p2vnjAWLo9qkqcZdpYT9AzcZVwv2P6EBL44xtg3oku",
  "key20": "2gUHr8fPoNtdCHX8ZaTMMDT9FTsg4Pp7a1kiBrheosNdC4UbVmoDjnJcVKr4UUV81UN1j7reWeAB3EpoT5PvQn5p",
  "key21": "9TXi134WsPmnL9Y5bVvCtCQ7uBBpzkCapV6SD39HUm9fDMzqzsKkATQ1DZTqY5p6uGHx34ycKVVcmTjZ5roxy7B",
  "key22": "4SmTgYmN6QF9tZncdPPyVfxRQyHKWN5EvWzGJduHCQ5Y9vaZEAXHWWbAmkNnAiPactM3vNhqY7t81zvzC91gN1W2",
  "key23": "4M5nA9wt29fgyZV6V1f5jST3v78NqTzxLeGBJaugjJ1AwnRniFeN5QbHiSW3v3wuzz3TdEFVgZdsZLf6h2uaJEP",
  "key24": "5bg48vg9VmPhH9PzoznsGyUKqoE6DRzcYBaHSHeZFyeDx192GF8rsu6FjUwqPVKcgbshhkoqXeTuTe8VygnYwd7v",
  "key25": "638oZfVdRYB7i54NdqTbVgwsrCKpGVPeXLnpNbUQF7u9Jk8aj9cQi2UWvDWUBN5eRomsWbAXuNAXRTZR8rL3LNy2",
  "key26": "1g6zm8KXG3TZVjpzWkuHDq5iPAFVbhAop754of7wZ1fp2tPqzJddnmjRawS1nvZ1hq77avkHcdp59sm7C3fncri",
  "key27": "5yLtuuFRtWYTZv1s6175qQCyuK1769HMfK2sNdkTzeZDzGHqQy4hzC2CFaJYgpUfVoPr4jHsrUnJSK3Tfweyws59",
  "key28": "2mhGPPwipDSxexcXX98V3A9MmVVasfrEZW1PnSx8GdXrKfuP6uzP4P75D8xwqu5MuAR5pgJwfH9gR2tPyfWj3Uk2",
  "key29": "7tZwHA5nrVHL5kebdJLxd7nYv8woZpnwvVw6piG389Lh1Z2tK381o12o8NDX9nL7CmuMPSu1C3prYhx5GRRT1mJ",
  "key30": "6Dsp7AneCCmmVWmjm9YSuX4RJW8X11usk9pnmruMFnxwyxsxbyxzXFPfkQXQxTno9xLcz7boDABmgRfvQar7KmT",
  "key31": "5AFZMX7dBm1E9fVPy9fpps54ftEjLSnTKLxtfTeQVyywqwcZtcNjRA3k1kdyQHGLnkK4r8xzqyvaPCzqTNGn6pjp",
  "key32": "42sXhyehxyziNSFjtk5ezDhwDsMvXFViZhfdwi6ySVBnPSHHkp5GZF2SQpMMHmRcSRLxhqiJC5Bco57bCPCL2Mb5",
  "key33": "5UahfFiVKcfqZBncGsuwBzDM36ZXhzDS6sGHRDof4DZYB9JRvExR4YqQsMsuRRvN323ReYkNZpqqeLoHWShiuoET",
  "key34": "3SL5bRXkQXsdfcBc6gsTmpQszM2bVaNjE1TXZR15Hpxt1e7c15mSm7yqLfMfZ46cJ3pLnMg759ZtrwFyrgAkF7m9",
  "key35": "31dx9sstGbu1EvXJckt3E7oe9N6iT5ZmETGD5dfeQKfbPMmDcWKJ4de5XPybd6j8qvWk3YJmeHnZaWa8nKCwN8qv",
  "key36": "BgogLeBKPsZrTES9QM8aS2djYkixVYkScHUdhXaSAfwQq3F9aod4b31ZeC5Qx3kV6sqq6NddEzyVxSf1y3AbCHE",
  "key37": "4N9VL2JdLHoRS5cNNeYftxepphFEA7MMnNQ84oajuWfA4KW3m7soBQPySWFLCrDCFBdRDEX8NFguosCyRuYX6jmS",
  "key38": "zz2jS585eqjamhiekrrS6oHxcZcSUV3CQyhhX7coRpkGYYHJJzQDN37W9ehqYbBXFWJLTfHCWPzMKas6JHz3x5V",
  "key39": "5Unzw23LJSJZ1rjex8MZQcoE7B7hE1gfc5QxWuEpZjG6Nzud4dJrVyyo6ZRfMJ43tboU3cgCGNQQuy1T4ZZoRm2h",
  "key40": "TmnCBshhmPyUgugeQ1RRA1uKnbca39G7vbujED2rR6LZi3xeDM7FzDeizRNGZyLrF41MpS5yffGYYFXUy6bKore",
  "key41": "4yLkLvQZjYAj4iNyWVbSVxL8TAkDSRvguWNe2KSX6hQtH58sEnjVcA8nRr1oS8qAGKHUL1xkqdHvKgm31hCtPTTG",
  "key42": "5VktZqM98CgfniTfaCPWAPbhp8CDBbcgQzWMPaxShP39wUTLtSsZFkxHgQTUgmLkZwJ8tXN8VUFZm8f2eyp5rfb9"
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
