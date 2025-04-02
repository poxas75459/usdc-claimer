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
    "2smbvJYZoeusd5VvyqKj1hZEmqjD2i5Stvvzozb2n55VCgidrVaeKiuG7ZMX6PnjcUNvn5GaKeAX6X8z2LTfKe75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Tti3cFay1ytspSxmVV3XYcTtXtfGsccHf79FFJfRAGNM1JY5nJixzLjrf99nbijZQcuoy2Ei88NKwUmaYBh6ZE7",
  "key1": "3Bwx1D3QdrW3hC2L8F1Bh1c9uc3o5shmgNtLwVy8aphgpxsHWFapHVZje76qRAxNooD1VtiMzvcahGCrJndhbp1B",
  "key2": "DXX7pcHU6BLGwZboqfhU3R4Uk7WkzRLvJdShtxhUJKmbSzGzr9UMX74Ux7SGm1zhStE7cuD1rfguUFPDyH1owa1",
  "key3": "4VrJWCRzNpQw4PuvbFhWs46LfEak1JT7PYSzByN5b7pM7bGXtVcjRo8B2CHY2M3jYWzeEpVybFsgzVrpZWS2JNwk",
  "key4": "3H291A6arntkPH3hw4bp9RUQ3yxgXcsoyEZvH2FkkJxPQhFfwCfsszpZJTyVRaF9gpqhpN46SD9SqdcPPWyh9YeH",
  "key5": "4BfjcWVw6xVJ92QZYjo1Nu3ZLYewymCra9Hy8MHbEzQYiwkZq7XFR8PEMKKxV5P9xDCWF55v6UNtD1pgBCSogWxC",
  "key6": "23pNgsX3NqPcpWUhHVSBxDFVLpeaP5nvEKs8pYd6SwvQvShTsxcAGsyvkpF1gEmfHw7DQZPUW9NfY8fAzu2CAjTa",
  "key7": "5EfkavUn2BN6CPThd9kPJDRjaV4gaNZjztrEbP5SjuFhsaAQJLcd3uEDEyX6YKYipBsFabTjqeLnvb1ERDddz1fN",
  "key8": "2XKfpubdhXvykZ16eRiUoLYc44DxYAUQfeXgiF6YfDZanXJcyfZcoauKDu1huPhToBU9bqnwyMbuCyPbP1XZzB7p",
  "key9": "4HTJWZGRGbLqKVZkSnFuZ35148G7nVaD8YAxbvHTQQqnq4Rr6Bgxh64HgLrHVXNhyUGDrVPRq4CsftSuVjNvPYjd",
  "key10": "4RzjLeXP9P2YYFJrVbXJBQ7GpqtcdZTeXvhtnu1X8wX6QvG7KqHKTunFU111hWSBfTgVUhXTT36shgBiedEzFGvt",
  "key11": "452weuH9isdYr6j3PogjS4APpaeswe82s4kMsgMSW5wiry37tdN3tzwuCjR2KE6JNUdut6QivxWzo7RhCcfDssoz",
  "key12": "2YnnFV5aSns9J38bnB9GFmysbu6x2Mijq8Rjtej4dWj3ThsZHJ9XSVuaZAbMuUks6RHLxLFMZMtAtcgjNXnkk2YX",
  "key13": "26eJLzEekkteyLqZJgCs4jqC7tWWEFw1y9muC31uLoiKgeDNEpWUfFKSCTZt3aVyBRVUjHfJeDdPch6otXbgu6TC",
  "key14": "52CQfjifsJBBAdvrDcotfjQDSDFyShxMyeGid8Ai66dq2A3ysCBjzduVDNZ69eqmASbNifmg6mifxz4zNjvWWcs3",
  "key15": "3aeU7xGeoZDd5ysh2VMgAE9PTYowT6Fx4nWxBUycXvrVhciv1Ft6kNLnBakgh7DNvGh8PoSeaLF8fDEoKtqPCDBy",
  "key16": "5aLkwrGbk2wWYPsB5WAgaWLrAWR7rNzLVECQ5UXEBrZMw2g8WWQCxvg3YdCDP1aDcdv19kK3QnmYCsbDt93wfzSY",
  "key17": "s1XG8juBttWh6kPiqGiWNBcLVMci3rkJdxLznkuyVBnPjH46moi82b4uqEga6xim62u2wqvRBZuJPQmxQmsmouF",
  "key18": "5xL1WHkWouKp7XN1QmimPyiThAKLYTjZvu3PMy2UNXBoZBCdNo9UKh922V8A8XowDmqVguo8NdSR7qcPvzv4kHMD",
  "key19": "3mPTNNCYqKgJzQPiCkgnnerrY5veL5NZSGUxFUnV9sFTLe69AcwWwTwXVHjNKzX9k5bBzaH2RDA2N7Y4b2hu8yGA",
  "key20": "3iBKghPzfW1tc3eni5zWzWpPEpx6cTFHrFCxBRhob4acYq3UfipRj1bL8ZZCDPeCvzk8QEJommkAx2H1Et6Q8RQ6",
  "key21": "3yAk9MBjPtfNZ5xWdWhKXKv6U3qn31Y1u7bobqQdWudjmdrfrtvb2tR9CwcyZHT49Ac7mPXqT1NnvWFwZgq12gfG",
  "key22": "bSPazhYVMsotnJ4Cyk6FD8EmHJCUVcjtvp7Xow6ttwJkuMcdTKuXwGB1t1JW6ko1LXCmHQgPk2wH66PetyDAFGy",
  "key23": "MR7UX1P2g5YeMbEe5b8F4GA86UNY9Mw2T55o4qVoKH4Hfe2QhiE63ApqcDHyu2QNiXi63aT8cok2LLyH3S1doGX",
  "key24": "4J7Ao15HsEKQhziem4W2bBDaNPvG4XNnsUQX9Y5hPmrcUeZqugeKyFGSMLs7GnuCkymQ5oZS2LTiDuXYUWTZPPMW",
  "key25": "enk5zjRpU9mbcGezkJGkHCTifJMW6fgaGJzuWAd6tmXgzdJGJezbrdHgq6qvMWYW9o5oxXUUeerCWJ7azEk3DtM",
  "key26": "2WNzG5wNbxHJ51K5ubKrdNXDZqomPcdKNpLffa7PkgpN84HrqK2uhQsgcEfNTqqRY9jhe6Q33iNYtdMohrKTkMGc",
  "key27": "48nm2aTQQ1eFnr1nF4SB7zmCuQRKHH8vEEdLqtWRVoMjx8A6ap5QEmHY9wsi5GTFwjkBCB8oSyYGrf8nnuGTPJuJ",
  "key28": "RTzHNZFHe8xpKm2EY9mUCRXXZWWuJWkXchJ3dpv1CmyXsKo88uyynB2AZLuVcYQdnNjjY2bNiina83AyZHPZrzB",
  "key29": "4ijoiaiB1LQ1g6ETLoMY37AkFBYxmrdLiikMpyWPREfLzmvtyXyGbEgiNqVCRh9BLBT5u9h3SMHoBMYxo8KwYHmC",
  "key30": "2Z41QYu9VdNaRv9CT8jqms8Qjk46SS45kPTEQ6CQ3p6o4xqwAhuq11JuKoR6XQ14XS8xqDaWp7PUyasiF96vocYT",
  "key31": "3GshG1fjiqq63Woc26fs16SJuR8TviKHgTtEAvAdPgKtfyRgxd6VVdNP4j87hQpRpd7bj1TPnkDqY3zfXnoKJGyD",
  "key32": "3DQ53L28g7tdXqDJH22NXw4NfysufoFU3MrJpitkk55pqNnYAvVn6TUrhEfxMwchxd4BoX8ZSNPRmSarKyMWHKv9",
  "key33": "5QdfSDgmuNSkSXoL1LZCT39DCk9B4HNKFCza4hGh1ZhiNVybkco5EsgZe2c8tRmfEMjmdhTHiqoG82k9JVK1KTVN",
  "key34": "4TfLgM9FQq8LNNZ57QsGDfbWWLFXr7LpaaMDcRy3fScWKC6qgdiMe8xxmE4DE7iVNs29G6wWtENcRJdLU4A3W8gu",
  "key35": "bufmYbPVF2YawWCnHcvB6BRxMWQ7Q3EGErk9WsENG63Sy6He9ZPRjUSdgongCRte3q6vjtUG8MrmRkHQBLHChnp",
  "key36": "5NLsAjkhKPNPk9MJQYjBGTyfAroDEBCv8yL5WKwfG6DfKtSwawnJEF6SWn2Ry6xoPyPJQ3PCFs4TNQsip6xseWBb",
  "key37": "4SPzTrmQ5ih6MHsoZbKHgyb1mLVKze2s8RZ5TzHKSa8PUV3rxMxGUx8fzVJ7mjEZYbVk5Z9tSRJx9jdiYxFRJgG7",
  "key38": "mpbF3LgStMKbH77F5Xxq1P89TuL2Cmtk5TDqqVCpGDpbvySfpd55yqhRHXskfHeNkpg4i5KV3TeeYdPtj6aYsap",
  "key39": "2V6LULHn7JETsTDT3yTzf8kVXRB7sMTum4ZdYWnB4muebGpEknUfvmxTqzi1ftUMGqCF7iqFa5Y5FYBoPPhn1KGp",
  "key40": "3ah1rTPKSnpasL9LTp7scjKgQPPmWaHZ3xkxM8mcn68PGWwWPoVDZ29nrEAMVXoSK6gSZ9Z8tgraEzXrjbA3dFCG",
  "key41": "2V4cieatvndPSoxhrz9bujsKHDgfK9x2NefFtXBZo2Hf9FRFDJUXz27QnTLAYLaYLsxYjcd5hK98BdSnhb6y53TK"
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
