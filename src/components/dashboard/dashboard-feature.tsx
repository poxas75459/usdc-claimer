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
    "5W7T3BJsyn3G49uNr9YsSLRWPiLWAQuXhR6KHTYBKVp8XPeVXTCrvj3oWnWrHe2qf5EEVtmaC6rhVtspCLi5DtoH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gU8ppsBDsSUi2T18ne5ZQQqhEz536eXZvuxqtrcy6DuZ2cFW2CXVGj5UmaHAXVw6irMkcYcdd7yPMHC7ueQg9Uk",
  "key1": "4Rq2WsXPhshnV8AP5ARPYLU8BPwTkR6pA9VaGEFPttrB7gG7Conyqon6iNbiZDszyK9kmL6XBmg6nBFomXxSCXQj",
  "key2": "XZTqa3fVtKRgjJQJ2mcgtVPwVaaUyWN8qyzFubTuYEtjirHjwxjB7RiAHh27MKhnDPwGXiJSXQTTE7gFVBNS686",
  "key3": "2TvinqMkFzyZxe1PXL6tVxwus8B9C9ZEwkMuzX7DgkR27QoUaDKRyD5otK6yPAC4RhnUQjY3iyQ3S5avP5EAXbkF",
  "key4": "4GDCa5ZzP1YXrxSAqmBi711tdCWhDeGusAwaV1RDTfjBZBM5x86D48VBttBAFUt4rsa5GSM7S6eqr6zywFEv5z3k",
  "key5": "eeNRn9D7JgsFHN5wBaiBGDyj8pT7TL1w1koQQP93zTKqpkSzxNwtdheBUuew9jPMok7ehhZKb9ipHXx3sssBr3P",
  "key6": "2w1vNaEU6eWM6iVEtHhVdBVBeRi8G7Bp8TKPiETGx2noYYXqKc3Rt1QzArKjnNuAMvnJ58gE8UTxEAWFczhe9gGo",
  "key7": "4VR4VD9aMoeE1pdZanGSmGqZXzB7ZpaYUS7sjKPAEDEh2j1bfN8v3rTk9QtePYn4sit5NCB87UrZyLzpUDUEwsz5",
  "key8": "4cdCeSb9xLKxDrgsUJ2FwJ2xhvoRAem6EECFvFH4AujpGGJaXzr1HE46b1DWRU2mmJQFs9i4LtV6jWjk8bnrv3A5",
  "key9": "2oQZ8uNXA7C4Dn2TUh5Y82QY1ichZUA2Q7KXpxYK3Gdw6YFKDoB21wCcXs3gU2QzJa1nibmtNFyJux2xazt616b7",
  "key10": "344b629qcTDgqFYW4w5Egfki1X8G1hnWwRht244EQdsw74iZLT8D9GXRXe8fJ5DkdHqpooSjirWWZcK6iD6e9VEp",
  "key11": "2APv3gRjt8JGBcLhN7wQG1tLQaJk2eSZANESY9ubmUM3crkwNgenJhzRFMQBDDbLFroANvw4taWMhVcTvTfUDaXF",
  "key12": "47xB4VXQVtcs7TrDj4NAxfZHL7UwETKvvju7gDmhNzuundArBfGKVKCFkwRWMRFhCFff3m22MZrWAjmjfcPqeRZo",
  "key13": "58mwH3sR6uyk83QAegztg92yGfYLnuZowN8E6X16Hn6hauu8ys9WGYhz5abXtpXWc7iPfSiiox4qNWP3aYgWm9QX",
  "key14": "AToA3FMDbHjDYh8Z29PnkinRmRRB9WcuVF62dfQB4v2zy9tEihhpTbCqXxZmoW6UMbquN9knoemtX4WyWKMddUw",
  "key15": "5LmvDGX5V1AP7f3jqh2JjSjrvGDxetbsr9fpvYed46UWYJ7x6bqTAuTuSBSf1PfFVHmkP35JAMXYpv7WzheEAXrG",
  "key16": "3EZAQWnvqCVN2f1Snw98kchzPLsBigvBZQm3GuedmoLqo7xLCqrCGmuaYA9d1gwsiTduECLMqHy4RHC1N61LVvCG",
  "key17": "CW2NPh83c9setLfF3CXiC5PnYE81aKetZCHM73Y6QeDL9PcjPgZ8V5XCrkg4n45R4AJEbXHdbEP5bgTKPD3tCvK",
  "key18": "AicvJsCmrcnV1NwGBse3xLZxe5MmkzPiwPEw76QXgmZVTmtGcyudJeuQ4zMFYpReTZpzXu5UHXznibDix5Jzx2u",
  "key19": "53tVg62PydZQExXdWC9RYqY99rS7GwKVgcRgVMf36D268fgZFiDqWUVJaoVJXqdHKdYEKRurk35KN1ECsJPCvZmN",
  "key20": "5dXq7T8h8cYFJcbwaRe9PJyNRtEN8WoAooBgdMdUvvpiLSB52s6ftt5LjiJiSAiYVgWZ8MvdW6Bw2W8shk2Ujewf",
  "key21": "qWyBhLLiVETyvtf6R1xqVPBNvToERkAoyyj1wXjpJhpn78rrUmg3smNV87W3a4Hv1ut6HCcTprmK9oV12FT1B3C",
  "key22": "5C1PuEZQbdQDyV9LaUtAFmmxw537YwQjsJNa6pPRLsJkUoGdqH4xxo3oyofLqstiZeLRG5fbu446P7sQwGSgR3ZZ",
  "key23": "3e1VJrRcym6FxyjLazVtXUCbcicGUkByBK3eoR4HTNDHTTmyPgruYm3UX9VG8xukEPChenS94DMDgE8Kf48KC8U1",
  "key24": "3mMxqL1eZHuaZRqeZJuosPvsKC2Rsnx72wkn3qBMh1jXK5N5rZkjaLRygfQbj1VhTTVbXybeGNDKq5ApBcG5tSrw",
  "key25": "3XtTo9GPiRdWQGbyPkDJbxs2XK7AhzpJVSzxoXkCuHidfg48eCFW6mXWjiV1hqvLH76otPQgkZcnMzCrzXbDcfGt",
  "key26": "5NndFb31FatxQSVWo7W4A7GeZhpzRbA7UvwZsdrpYz26Dz1fKsbjY2AL6yrDdjBzSCudHXempRW8jvpgfRctHTQh",
  "key27": "NSZnyJ9VQTuqAciDArQvcNTmKFxy6peLAYxWSSa7VmHgL7arH5dq9xWfskTXN8tchWR6uBQfWTyKnApasgK8iWP",
  "key28": "fXTfhSm26yT7nQMbNErfuiDojhKnSFhjBadWZzPghp2g2o1sWsw3oCeMXric8orsQed1WRzsLQUVpQa5ij6K5XF",
  "key29": "YUjR29FLErQqz4xqUiw4SuU7iMfe9uhPv4aQxQh8V9gmkGY1hQqvDpxN5ZEGxuL4ousbU5KRnASnxxYihcdfVDa",
  "key30": "5TiqMz46v6FPK9cKfJEHqg8MaMDFT1L7QJtzFp5pioiBS4Cb2FGaeRB3ToofRnD7fQZm297SV2mqxL8yGVLT24Dg",
  "key31": "2SKB8AYS48zueEm5BPtgXPeoeQTAPHtjyaNKGCz6ZaxYRShDmrGnhgUKZfxHDgEZCFf2WaNksoRQFCKrvBfipvyQ",
  "key32": "4yXE1Lxdq89c5YNa7SNmyY8N2Af7LTRQmKvpYk6FXpSNqts36tcgpMMAHijEGkKWUUMHkGDcZe58wmmsojBpzRrh",
  "key33": "X6G9Eep3cfbKmXbUE4mLrpsbUzdBC8qsLKZ8t4Q6C8RWpERVZ6HM2SM92zKJ8z5JYnB5EmDhdKGbfzty1b7MFBc",
  "key34": "5bRS2BXgXNTMQ79FHmg4vnAeUw8T32FHjm7cSYLZBwCYJ291RkB3u6uzzFNBdBavRkgxPq81UdV9kSeupgByWEco"
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
