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
    "2NDmjvgVtarKQV6ZGsCzNRVsUwCjzvjkHyDa32KmnLo67EAFm6qt9PGEkQuQNkweugkQFrVZQnu8zB2aev3tpvGd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CFAKcBaHNWtiyAN2ctUnvdyujD6egnVZTSAY5uGuBzZg8hwiaM7bxcfj6REpL2NVDFdNKcRpN3X9CWcbG4q5uz4",
  "key1": "5VCf3e5inEvWVFPhkceXRyeeXNdYvTXG6mfzp1f38zANBCvh82U8ppmDUvZxZGDX1ey2bH9BEXktUHZ7mebnCqhG",
  "key2": "4C5XMDznBsf64AnzB74phqm7EhioA1c6a95fvStCG1UUtaq8EHSnNRL2dv6tAp2WXCWoeoeMEoxZFsojvufzk3K3",
  "key3": "4kmWsQfB8VifY2vfSbDN4VCgXTXrm3f83yETCYrN3iyGHUy1hCJ89wQLvzC5hUBkfN9w3C1C8EwvV8SUY4HfgceR",
  "key4": "yF5qGUfd8URHB5EHYbjKtAG4Tkv5zGEfRQmfCfimj5w2q3CnrqJwNVLV9Z63C9YS7VttydLWuso27wht1TDDeiL",
  "key5": "2fgN8K3VYPA634dNaqD2uosLugragGDsTUApx3FydXaNhUBnuduzAkFaoYsh4YXDQmPN6gYJ5Xo5CrWvAtZXh7ro",
  "key6": "39YJNUeAM5MCH9n6CmEk5Ed5hYpiTMmiSPAtpAPxYwvi69mgvri8kvqTDytm4uW9zaoYNKmukdroZEwp6r2dGAvB",
  "key7": "b2c7fRTDfX2dph4KrAQF7omAtRMfMUZYkLXpqKvoHP1XTiJdsGvca2S1EiUQyQmXqEBaQQVck1BCPsp32dDAYxc",
  "key8": "474GtmP5p7bNUAvmPkcXsDveqXNYjpo6HmeQ8nBhFtK31rRX61YTLNi4mPTowb4LydXnpfah4UCTxgceymvNHEB2",
  "key9": "4wCr5AKZKQ5doRJJs3ha9brb16vm56CCY11cjJ9tLNmk8gXfjhU8z3oEqL5SJXsmt7mhfcdCztsZ7ftb3HX4nhe6",
  "key10": "5PiX3Uq2preoKcBPdZESDYjH6xMjFF65BHxRqofv546VB6UV2Qu64Y94BXn9YmZyimR7PkmqBCoF6dwf1Y24RYRD",
  "key11": "2oq1hMqyydQbbniEyQqSJJrbc2FW6G18GAz8hu4FCpXHdfnpWET3J6zE3WgHV5UYPTp712HJYQAQ7LQY27JRQcKX",
  "key12": "B9n3tSXTf3Ya3foRPJ86gsxQdfVdgq4QSxK6XoeoV3McNC8eDhi8sQYPozvs5ZgVXtR6J7dm7iXABunoMay9Cwv",
  "key13": "3gchBbqmqs8EueWn9ZuV9CqpfWjM93viNW2EAssQSsPVT6DQffRfzZ4M9z1Nkm1sJ3CxkbN9YKffBXonr2UdwcYd",
  "key14": "5ZCVkoAwSWqV2uBokoPQsNqJUKkUebtKyrSH3j538XXKx88y3JHFP2unJH9HWdFHBE4hR99iLD9G8VYRFMWtrqok",
  "key15": "Z4ak5jR9siFVWeiGdUQYCVnuSrtBBoj1433UwF9ZyhYta9zsAumCmAdxCkTtHARCVL72xwhNgrzfdfM6atLUemz",
  "key16": "GKSDpEPiJRUqVKUPrNoxvuYbjHdAKGmJQPKcgTcXTjVHQVr4MtwgeHP3EzGN1MQPwdcxX8FMtKBW1dP9GgruZwW",
  "key17": "3o6CDt51bRWZa9YEBe6nH214RnPEYuudMch3f3EJP1XRFmJYXfYoDa8Mo83MaNSVUsHC7MNa3Ka9gsufWp31bMsS",
  "key18": "oHx1uTLznYwcqQx4CMJ36HHwFrQUhnvbgsz2jCVV5SitmmfCGDd37T7U4zBcm4iCXqJtdVLSgUxftRmuRdXK6YQ",
  "key19": "Pcnds22wixFLCX649BBXcxecbkPcHH1BRh7HAwtcofx7kgSmpRVBRSBvFnrpJVXWQ6yenSrNJmFUG8BLfjiMCae",
  "key20": "2qpjrgpbHeSJJ9LpAbuVNwLzWHcvSr5i4y7TGDTG8P6A6KkGsJtVL63xQR16VR1S8YRdyiZMWPQb3xNTXAVAGkiT",
  "key21": "4rAvSTBDQSzay3AdCtqvd32EjTfPBwJnyi2LSsDWaETwLX9EMr3paKuD1zdCTZ7jXxYqzG6vmhSzUt6mRDPE6pv1",
  "key22": "4wmSpjvFJVsFTMPRkqJQmmjUBPamNU7fyaF7TChsm8ezc9P1HQxmEXT1VvggJrcBXdRrsXgWAA8UcBjoetzvYSM",
  "key23": "4sApi33zUVQkJNBZn4oyxiYfK8V4CLoHP4gSx7kL4XpfxWJnCh4vbSfqe9bbVrqtnyuCyp8DuG9seDHciHjETZ42",
  "key24": "3Pe3fjY5jzFiGp6fCcLCn4nYVTHtcdzuCkY3Feu7MGSPEU1uVaBU7TLZ6Cs9yLYgwyWgbwRTDd2X6zvpnyDvhnnm",
  "key25": "5s9BtwV4D3zAbMd34QcZzR6h3sZZ7stMJucvJUCMRHFDY671gvbAtsFu3H34vBAnzpe7C7GwnQkQRZHPmxzDPdT",
  "key26": "3JyS2pszDtbYNmhPAfXAyUaQDCA3YpwijgAqziVcfTEEkBBDawuUrv54gXWe95YszHn5zsqTXmvgnSiPzGjbCJgz",
  "key27": "3LmK3bfdxo715VVwKxo4pZJzTwWBeno1TayABGoCy6citurthrdKmhSUmusTwArEEoa1pmVGpivyKL4LsiTRYDhS",
  "key28": "586Cmi4xDqbmDuQRmb2PYroEJtGG6m67dMm8qrgYMvaDQZ63xFtBKjc5SRXG42D7PBPzu7RtXWzhAQ97pNHmAGzF",
  "key29": "4PbBeiQEqr2xQ9pCU62pwfhwvkejZ7PtBaf39tcsEoXHbYNubRJLJ2XvR1CpuQQwtxEiEioMVq1yq4mKythzfC5k",
  "key30": "2zZFfGdumykc2cFfrZiKmnV1Bz8Cu5kpeTXxknQitEcbaJcu4jmLJM84Hr3AjGZoWTCKFL59oPnjmgM7idZaaH5X",
  "key31": "3jiCarrW1a8LpC9R6yiGA3YsjLAMARjDhnnNr4gLnhjgJFzjovubgSGheF1HazSF6fcTfRhH3xRQo3NkrHJrTFZi",
  "key32": "4FAt8GLsyNN5bawbQvvaUHM7koVaSbLcVQSfXwDTzPUnfHQY8ucLkbdo7HMrM5BMmXcLHGtyt3uBZruA1Ng3Umgt",
  "key33": "29zCysS92XWcJqjGx7k6f9Pgzg5XsX27WkSRwzwex4TBT6zkNFGyuqq8jvPpjGgq8jzpNF2vGPydmy8Qwn8a7XtR",
  "key34": "2pcZBWKisr7FXzjK42VwqAmBPfdgp1QZtwXtmSX5gW4EhR9V3R8KDuTKxBwCABJpCmJdtdsnuWTBHR8k1Gk9fEc8",
  "key35": "5GjgXio6ZRRqvQY7QvAqnf6pWiWaqPNboUUsudHhzX2tC1iQ8x3yM72rMoZUcmk4vYJ3j4QYVfT4FxAMtBHbPn9y",
  "key36": "3BgsJDHpMpeVseBazmE7SLzdUoDYPk4cqBmV7CMendj46n88H1uTpXG1hNSAQbmFBB3PDSxAyNhiQWXC4QKyiYZk",
  "key37": "61iKp8iLG4g4ujptcGJ4osFu8B3Ut6yjhFNkdYGMTqVWGnYH4iZXz6zUXPXnRg6qp6NknukVbGp57xvMC91DKa74"
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
