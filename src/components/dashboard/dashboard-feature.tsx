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
    "3xSCbAXTzTiY8FGQ8uTAmvxXGZWd6RuXcQe4osprsziVMeiymixaskVxZvpy7xJUbeYVWcvjhbDRyGsEvgynfedf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AJJdokoiGRyxTT7Ko3C6j7i9Pe2yYghXj6hToEom79gNTawMhgegca4LPYJrQC36ozAvjD75Km835drNDLXbV6g",
  "key1": "ncnodeDRDGEmQGkkA65cBnxUSDdCEtPy9CMWMY4HpL4eV1EJB5dfajCVnVaEFyPbpFuWwKV73J4gk15fHMzJcz1",
  "key2": "2MsFFHav6szdjrbfC31ny96QTEZpGEKe77H7jvUgt2EFFm945pqPs1jkqhyB3vKf3onJTH6EiEAf5DGyNvBzJto8",
  "key3": "4pnHmoYqjXngjMgo4PKaSVyp2CFYLWbMy2Kuy5uCZrzMJMzDHsQrwEqSmSoEGBUTuomYyLKaRmagkvMGLvhajaMs",
  "key4": "4vERhm9PFYsH1ZaaTYQYdRG4pUfHqmBaSKYtVZD7UmsX2qJ36rUuydhz9PRwdx2nBQnWEha7SzSEDVGX7mV6K1aq",
  "key5": "2xoJtQ8Wuc3dghjCx1CcgAtq4hdqnpFaL63iv3wZnA7gCqeNFH8zqtRvREEHBCZxf8ZRxGqssvfHTEFBadseXirb",
  "key6": "5bGKNLCMSChAJwJd8RrK2En3reSTKMwSUvc7XqMpZWFpZ3H3yG6652vNTUdxoioMR6xBvJyMJi6NfrnysCX5H3DK",
  "key7": "5ouSwzRrshvL3NPsEpJEvrL8PuDiAoH4WbVuaHZbirE15qpszJq6cNYtkhmCYcdcxf3gM26f6KzkJ8zd2o4mCSjN",
  "key8": "5Gq1BfGdeYhA87p7QSuohKh2BUULVaC5p2wqkm3rUWx1mcKiagKb1A6EQGL7aFCJBgpyBo9Wf1wEYhVGRHc7pC8R",
  "key9": "5R6wU7KKrbJnhKgHiXDgiQYfqWjdeZ2aze1bohSmwJJwMMogXVuca56U2ZMKieePiTP3M3igRA86AwdGMfNNoWDP",
  "key10": "ht3d7FUkAKn2bhfPqWAkFKtUDkP4Sh8pM5cQ3rpnYQC7YPwysvhcy6fsTpSfpr4iKWZrGQhKaH5RD8zLyn2aSEC",
  "key11": "66wv4Hqk7gJEaLmQJVqwrHdrtPagWmXzzcueXeZMRHRpCJypFedR8XEHVJXh1C7Le7gcCxCwUs1xjAWeJQ57ntMZ",
  "key12": "sgbRc6xoQ2cB7mT9AsySbMd37Bp65cW4eWYLSqSNBBpQEzarRDctPusqGTBzUUND3WTudLYA1SBbN9o8cipa6BK",
  "key13": "2pWiVREyti8YdZ1Rtb9q7FD4rnFvRSS8ku1GEeKjQcYvmKfiGXdweoJ9SLwKaeSgMPvkUntBML98CM4QRwRJmGm6",
  "key14": "5wv3b5GBdgmSUGgJ2uwri8Ybh9wG4E3xhRPbe8kzNAnALqGN5dDRSmyNEsWGhkbcsbpkuekw7yDxV5ZTMoLv2Kb4",
  "key15": "5LFqFoQvitqDuuqG17FDQtGuDjmygoKj57C2bo6RRiueGfx3juUxaRdaXkPp1woAN2zACW7dHNb8zps5XJgowk5a",
  "key16": "4mdZ5zhnN3KtjQoGXyjL4r2MkESkMkpXcL17RkKjs4tAG7dnajLCEWQWwPCnTCxQrULThifmT6zjJuUKHrW7vQwL",
  "key17": "5i24FqzhBRCXakYYLzm7nwtSBa9omP46SVF8jvGHjGZXvTU9X64mdRseA6oZ9Kg7MFwsgsiRSvpMYHskUDk2zB5h",
  "key18": "5gqtUrBRWbC8oLrq8QRMt4zMTvFNUhSuLcQuvt9aH8CYr1cYD9kDD4reUZJWtWyu5jtCu6tWEPft88gw3F1s2JrB",
  "key19": "4gZwd88PcaYk1cSUXaJHN6SUWbYDiYffktaEXKDLXHJXDVFwwZufRwnRoAhwtmPuvaf1ohaUqGo321Emire51xPH",
  "key20": "3AwAaBgaGetUDwhkjAKV7qpWtFHaohJCBRfJvD9v1E1M7w6Ax1LbAQsdGxvK7xAKgxh6iKCdQjKvgFoRkqBGw9ro",
  "key21": "5vPhSPV2NMzwycMqdzWzad4beHhYFPeGQvtsomfA4kkiLyafGg2nh75kGu8bwp51ZAzvbMFtxPLTd92HTrBwHZoG",
  "key22": "3B3NV4tXxVGyGXfT5x2PrV2qcyHKP5TYbi9Usq8jjyesTmxPc3dMC1btPVVqSNBu6n9kJmVhbxio8nkVogUeHSuv",
  "key23": "6iSWBymnNfUP7HVhn2CbpA72B5ynhmp7VSvuKphoVDXfvKDEvseDj5WghkuMmd3z9RDbC2yvN13V7cVtv4esuLm",
  "key24": "2nMPTWmMEDDjPCugC8CNYYN3iyASZtxnD96PV66Ya8kH1MRfi6iMbKpbDAEEHznbSYokpQx7nFdCqbixKcjB2nsx",
  "key25": "fAoKyFkcNVC9GVjuWcKFjr4PXQMt3q2wWdmg5iZwbRAe8Rkpfo1b5KGQPKZHPYtZdYgfSS6DVx4UZ5ufGtA7AtG",
  "key26": "4BAwgr8q3Q5SpBsQ54PePxobm3UiGb1SAwfgheFX3RNFW18QWUud9J383e6LK9v9JAcdw1mQiEsyaNWD88ftutdW",
  "key27": "3dL8WvrZs8ZEjYnopRckpCZNYpoUcfFeySz3nu2KDdLiMsh5CUZbEVknTRniTAzmgkUbXn1Mi4J1hFRgxYs6berc",
  "key28": "jEajQn9qNeGC7zE1uZo2ZrCZNfGBqZDiwo6UEuZAin8tQDB7YKcxVC7R7Y4oaLRL8BS6WP3fHt1Dq6gLztLBRRv",
  "key29": "32NKncZX78T7GDawgCoYDMb9RbsGZ7e3aRCxyejEXJDrZK8SY8ZQTPm2Y2hgbxaztJjji6PK9uFftWXAhpnJtZyp",
  "key30": "5g3uES7P3HBRGSowDoT9DbuqRJFXfmJEv85BACGyEr5g7yK4GtsyXCHGshV3qQjUJkgyBsWXvdGaoTEnPyT6yqqU",
  "key31": "4wK8DWQseTp9UKBvkt2rsWF8V13BVoQV1PKdy25ebxUA9tHbyvVohe7afLcf7ZQMPVUTqosjaNk77SLRbFDBgRrP",
  "key32": "2YyBkMYH96CdpesmPVPCBimf2zn8bhLNMSWjqHV793qQDuyLCp3sSwsHowGQZqNvbu8BbTCUFq43jhaFC11YF6Mi",
  "key33": "2t1XTQEz29fzGsQbDogcyZK9gKnUsbgVebzsgbb5rEgJsEJqtJTv2viakBxjK6HReEScg44iY9SXretuQ4EzgHea",
  "key34": "2EtJjU1oPcCkhJYaTndPNwnhBGKBps6VwrNuM4t2jfiTacRTmFnbeSGEidh6ybmA28WGVYxACoPdnX2pSUKv6xSJ",
  "key35": "4w2RHFtwh2yojfEYriz32h1tpNHd2Lo8xidJQ64hxuFmj6B8q2S4GHyKpk3eovKjuKSzW8nYy9QzzCyRMWvZC7YL",
  "key36": "ym2BDTuYxo6xdZy3Ag3bumaXVnK5EYQV9GydwE6LyGwnpZiokPAAZvAe5uRwgsYNzSwkcs2hPn6Fh89EAXApKqh",
  "key37": "o4Pdm6VsrutWSvPPsCndBvS3QfaS6q3SwRSTvh5GN35Yt4ten35PGw1cznSUWrTZAusoct73ErXz5gX4Nf3uktD",
  "key38": "5Jeuq9bHxNbM62GbpnMmXHrfNV75iUDpU8taF9548hAT3bbdNQHHkH7uX5xQru8ZvRRWf2s9LJBcnPZfQkeTYEnF",
  "key39": "5TwoACkh9MUMzPFBB7MTdhtJxF3CXVjEqB99vnugX8hLUSQBit8uZTLVKw7GKBrtm5zr5g7C3L5iK2EjCq6Sd2Hu",
  "key40": "4U22RsMiekZgpaCeJ5XAhiGEVXB2hq9n78uMxfbK6nHob73TP8AmRNt3sASyCiTrVKxhYXZqpjDASJvbyEeChXds",
  "key41": "8FoHu1d5vu5fDwCyQYiJh8WeA3uDNZrx2YV2ndtvuX4symEZE13jmDkzNNHTUX3W7b34r9CCpRCnkJZXyk6SPXM",
  "key42": "3hsNTs6bZoWMD8vKi6H9D6upUgwAog3gsWThWWckz2tRDSpqGD2HdyGzunpc7Q6hrFgkaBkRbZLGZBiTV7b9be3p",
  "key43": "4JPHYFHFs7ghMDE7S1e7U3Y9gQNMoAX5rTxuy6NBbccWRE9JkCpWPRjbbLfaWGvKsDG3kbs9krTfNP8fnsxwbNCQ",
  "key44": "49KT1MYHo3yHKabNuba7N3nK3jmTQerXVgyBMNFVwFJx9DP7vkQUkyeAVmTEcECtVjAwyf7kqiUXSvPULmkwBsNR",
  "key45": "2FKT1YT2zN2qZQsACx6yCbnG7ijJLXTxMjfuT35eAMnK8SFZVnkJUbwNTck9djApwFaACgiG1r6kAG43JKX4aSuK",
  "key46": "2HTyfe5topbqpWcRjBxmWGQr8BnTvrrbcUmFgXfmRGjX2uQwj4r9amyNsdBhgvqSxXBUhNC7BHYBSJK8cq8VaYsu"
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
