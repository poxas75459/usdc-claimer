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
    "2i4vCqGfgh8bcbjKs7LgkjFFT8wga5p7NkYqDaBUk8kMf8kE3jnHwkunmd1hoGn5SrW8sfZHpbCxWTUrrUPh9kHi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hyMTAYzntULmn7zzXQ2KjJNH124sS3nvUpVTYwbW1qWb7yBkeMLgj6sdRapXyYfifWPrVqNP15eT47gFPm95dSo",
  "key1": "5DGie5FKYVBSfV1Vvn6HvG3SiDY2qinj5kH8TYQhsCHepLYnU11Pt6MZpN7qAF8ZEkmnAPyqfd2DzbMWMkdcjgav",
  "key2": "9HXq93gjyAENKpACQjzeyez3Q5qiMhHihuqEMgNWNQy25i3BBXAyjmAXJz7v9Wvpu3gV68HA26SM9xgAc3G2gsT",
  "key3": "4MSmMrXnWoAj7Nzfma9X54SwAU9fW2SCs87nG3LT9jtDjHpdsDFywiHSpzVeDQU3SxXP7BZCH9L6kQ2yUqJj4CKf",
  "key4": "2xG86H4Lm8jXxrpuBAicHQuRvRHn6Xqc36jfcNgyh1UMx6RrViCWp7McFfqXJo1AJFa2yudMsx77wvPeHM2Tj9oR",
  "key5": "5BBgJu66LeSMGVMpRFu7cRrH7Xd1GnuEFEtNpiu4wx5b7gcn7q6B1U9RvhrtuJUbUqzVkmDna8DtPwrWNBWPAkid",
  "key6": "5Pc5Kpur2ooUC1bBujBd1xdMQu64ESx1RapsSYWoyE86nYPHDQh9sgmjiWzhvbr8CaXcc2YXm1rcG23V5KqgV2sp",
  "key7": "3ARzKcxHdgiv12SfKCB4ApNGxuezq8oTR8bZXRXD4DsUHVc8PK5Chk2kExnce8p8GpqeBYyHXH9KyMPdvBBhLULF",
  "key8": "2VjT7Zuu46V3ExjjeGLFkMhAuRoJcHFg8EfCJNWswEVaVgeR2GLpE3TAiViA2sEAJaEX5DqsRKCvMaFqs34DXLxC",
  "key9": "5cAhWL5VHe3XLXsn5p7tRGeXftq9fsXwCMATZPjqQtz2r4S7xmRCHXJktrouwxDTTvfH5FXxcFNE73GLGB2WzEz8",
  "key10": "2qegACTdNpDFkX38BfReT33Bo1sz9WmGLb5rZV9VoFvQuQyu9EWUc3DYztMEUyKzACC96WeAG1M92JjtFAkTXKtn",
  "key11": "3APRCj5dAUJN96DsLs62CCryFjaq8GvQyEYeFCfuY2mRBufB6jxbbdoMbGBu1gNTxuaLm99pnf8XERw9wkno2Lau",
  "key12": "3uri9cT16t7PTSkwB6iAC82AY2dd5ZGz2bh1qpzCopswzyFg27FHEHbtR4PjGZynsfY4vVvsAHY2kaW5Y1ALRbXn",
  "key13": "iFsGypiSKdqFMTBa2nSMobo366PoFH7KAUmEAXg3vGgjDuV4mmTfdX2vd1iZKTtTGtjTfAcCsz18TdcrSEgM9uh",
  "key14": "2QorvictNUzEPkUmrK4MNfYnAvceiGmv7g9RBFGKAkffNGfocEqb76mbv1oDzsf4vf5y61uYGBn37AVpMXCwRiDc",
  "key15": "4sCV75iZUcTB19dPe6KJc97ULKPMFtTJLsTeG2ULDH2TQiUs5zTyZuFFucdKv8TYpiBjLjxYss962fdUQkD5Xqg7",
  "key16": "5f4PuYe8TSGH9igvgtoqexf45DiGQKwcFoeHiuZ7F9KJvDwKa1R6SEWo7dDmTCvTT32AS2VhdZo4rpTVokDwF3YZ",
  "key17": "3J57tVMBxENrd7oh89LG7zRRwQti8kUY4p5Je4Lzu5kSG3mQcggki195jkcjEwxLd83Rp14dfEjECKGMtBctcuKw",
  "key18": "2ihAnCW5BH2Ze5nFsx5S6B1dCbd5Nfk9NNkjBHXcja2zqNLFPvrGmQbWsnXJq5CXpmBvcjSqJf9gCnUTrCmLfJok",
  "key19": "2vQvCcPptjzbo1FuC2ropYBHuDzKq38QVmedowS4LrcxbLEV1hKX2Pb1wSbiXsJyi83XHyMkrEAodRqGisjY2VBd",
  "key20": "3HEmbz3MY62oyBR76Qubf3gU2rAtT2yP4EwxGqqj3Hj19qXVyWuD86ETrRgVNs2vvF97MsdiD92trawwhoUTkoQH",
  "key21": "4oXx3RFaCTNTmBaCiqQUaNiapYVEiBgU2EU6jxJmVcQ9vVBjxr9h1e8ruFzu7xKc5SXTcwmna16zFwEAap1Zged9",
  "key22": "TzGgdFayfa9zhZf8SfwkeG5RqEkMTtuw7RVDzDEe3HWzDkgDieocpqeKcSjVKFAJ1czgDwbgY8hoqRwKiB2rEmf",
  "key23": "2P7uGD8qNRWhge58WdYAePfWRPNFkYb1nUK6tQd97EbS3BA5uc34KgWNL83QbApDh5xQ42F32cPv6gpynyoTpMAU",
  "key24": "2214qd46G861iqwrgoLQcybndM971PA4gGVbFcgVVoGWzKGqn57X5sXfAKABBLvZR6GgcRF8kXiHoL8R7PozZUSk",
  "key25": "4Pa8cTXbrq9TWBjBEMaayumQkYXpZDg47iVUPZ6T5wwvzZHA5U4y1mTQG1aGiSBBdg1ch6EynP73basSSk7dC47D",
  "key26": "5Rp2JWd25xDdWLrmMuqZqdaeHrAexLECnjfkbVRrUkAQ82U4Yz6vdBUpaGVqPdVRe7zjH1zucEEyKJCkhNbo8EtD",
  "key27": "4YJuwPH3RoaFMFuVzqnKMAf6Z4fkwM3yt4QAXeLCn5XAr7koZAy9mQxWd35GWcu9zUrKHMey1ZLKNekF7dmqMvGu",
  "key28": "59iQDih6J68fqkzMvnRfbpUTtjDVWZYTh6Qh68Y1WwQY9RjPsZivFtQgzP6wXbFZBUctpPdgbEUiyhMWsj1yAWne",
  "key29": "2P1f46Q3EvwjUGSfdesZXGDxsMhJhwVGNNhAuHBra2DNB4W4U9pZrZo55xG98aLDwnGZ6TZGSRdxxmfyfyJbBGzG",
  "key30": "2D24iQWqB4LoxZUVUEe1dn3XcnDCgrZtX8oiJwvJAyP3oFV8DYwPFAEaACu89AzVGnSPspP2fP1pyM6ECbmQRD5K",
  "key31": "9LaRsv6ohDewSUiBectKq8942VHe9hTP1uY1hyHrtKNNP2Qv6fWXeSrUK2gwST7hK3tJfKjG5229zXWvee5USwV",
  "key32": "5R4gLCLpL3TFCmsPo8CRkYxnpL1Y3iXLR6sofm8KxW6bdexh4AH4jnuBeac5KZCSrAYTrcXHrTMuZzJ53pGRNB1h",
  "key33": "bzM9Uq4oiGyT7u4hqyJjiDh9RhqF5w8GXZH17NHnjxTww2hhRqg5PfmZGmW3JAeFrja7xm9apH47wovw1ibkSXh"
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
