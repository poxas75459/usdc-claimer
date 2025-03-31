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
    "33jLu597yBAHagyyhZ78tQ64UFCe3vcXoeFkd8JqbX7QUDEsDWMVUZg19iw9HskoF2CM2PjpVDyFaTJtUxB8XW5q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f3cmyPdieee7qzgGfopQuJFpjT14icNqdGuLzHbNN4vaFyKtjqxGqRkeo4vVgWvFxSb9S7KtNCNHS7Hfedbnqty",
  "key1": "3HxN36GxPBivcLPmjYu2pfcj2zdF4eKCQbFDsAV55WKTJUF7BmJFSJAVXaK9dRzEsob3bwAzAwe94vj6CSCu3P9h",
  "key2": "4MTEgPgxQeEFHuaMcjYNtWD39XAd6d6tP1eXNfgtrqePJxhGXz6qaeiBnWcujXdFCHYx4w7JLj6LGJbmd68GErHg",
  "key3": "4L4YzBsWeBvAhEKMUUVWyHgtXCiDN4mp3yn7vMeg8HfFTK9cAqisxCAt6rrVRLy42scnkSoRYC98ShN3Gjs5k6fH",
  "key4": "3F3UrP6cvFHibAU4EmNWNskpjQhyxyZuKbS9CrAqtYNoR6ieygKEuGKfmY7MStuGgZYfLiqFJL4EZ569WUNabEis",
  "key5": "5KvC27kbXqiU5nhbJzY95ApnQTd2rXdbfrNLjhNBqd3ZkTkhNDbYXvYK8fG1fqH1G4jjKB3dX9axVasyJ3ur2RFV",
  "key6": "4a3E4AVgwwBepNERjwDNZgRPY8FAfDj6hUGmeAdNvvBuqCvniXCGV57VEp7ueCM643ppetsU1o6WCrp47XdskXDH",
  "key7": "4R24L6rmn3SnNuVavforqUxEqpNxieyqw3NtNT9MZuJfNFUpUnaUtwcXYhQQK78Zr7SNfcwZVUVigPsqe8z3x77M",
  "key8": "2szvQzFdHsrYMR167zmkQPxgiACdhnuTvadUmVB4ocJEWbMXmz5jga6ikP6U81KDrdSR6QJgen5TM9uSDT3yUA6p",
  "key9": "61gTDa6ruXW8eEVhPS5fEQtLKPWyiA7Y4rp3dBfQ7Su8F5EF8KLrtfcbX31hVA9Py1dXa7UhB2hu3fKGaQNCn2iJ",
  "key10": "5kNaxKwCKKPSkmJkF7hpxxpLdQe21qsMPzKTB7rQFPX8zbDSDYTrf42QL8zU1ygy5SfRcqPsJAyqfTuaCsHtDH89",
  "key11": "2sWqT96kZpBqVWTXzpWpTDatB95VgwmHhZbsv8xHkFQrihp5PooqnPk9gAxjAfDL467SWDrXAukTtTn5xSPjtx9q",
  "key12": "5QRFbSVX3h8JY2b4GVKsnhvCCacxqMkcMFGXGKPcRPaVtHNcJptaNsH62v4r8eBqriYARCfuToLKXxrU6zGbXFbB",
  "key13": "i2wxNm4DXWSbZUETyAwugbd5FwPaSCK2rwyVbdiyGbVYp1AM3JHW3SihDwuNxCLJdZ6FeM4Ktnx2XW5baKQwah6",
  "key14": "2PUzzQfm8CtfiFaohnmVnfx114iT7b2xBMwKoXu8WXRLV8VpKY2EtTJFwMKdpape3DhvHPyDMowkqjDc7aHXb6vS",
  "key15": "3LeiVjs83b51iVS3Q18YPwvPL2KNPyMq7Xbfj8A4ESFtb6QMFUJZHckqyRPXUrrpPC469Gu4zprgAuHqYY2nssKq",
  "key16": "64MAVQzVwTUQSGW65zgabZf5nBQ9xaDuuzyYr4M8Sv8NaGGUVscw86BUZ1HRZ61b92nMTD46yBdNkRqXJJPD1Npm",
  "key17": "UybopwMm3hgkNXcEcqRFG7P1c9Zmf6F9svHPiGWnugyGDz6R2x51yQgh7iQPyRfWwQdioLv3td9dstXWMqgg51W",
  "key18": "4Li2QwLU9NTtVj6oe9cTwYMvw7u69U5cJPSz174i4fnwe5HZbUpwokuJ6NYaMdfzW77G5K6ootm3kMvnwP36Tbz6",
  "key19": "3XVTaMyUs36UrHXVhtHwWqExAPbraEbgGUb51vRBRHrfqqjTEc7i2Jef14T7q57zJr6dPAPCv4huUyp2xwCrcCfZ",
  "key20": "2hfD7TsdhinRMuh3ahcPYV8n2gPHqCzitFa7BkNtfXgBvqt8WrNUK3jSCeQUfwnNfTjdAeTg7kZLhrToutr7FDh5",
  "key21": "APYYJKDEZAb3JtmYdB8qk8XJQHRRkXtF6pdYEJnALmNh1pJ8XxARvJzrSwKG4YEXsvSxVZk1RoFjUuyshQKBZth",
  "key22": "rdC8Rig8MhfAhXPVeAhLMwDr4gjEPvM7WDAVBu44USTpHBZjFw15e7oD7VUp2VUd1dL3vpDzNtwRg8PdUJHgwUD",
  "key23": "4CuuxTuV2j9wL6wFJwsa18u9hvUPvuEFYpJXc8iBYKLyBKYJt5SboJaRYaiPv9UXouDJ28W9Vr7U2cnyYbnz5JWm",
  "key24": "FmvgDQ4bx7HWo51oKYiCjwqSY3ATHqmwN2gpNZ7JKFdTNwFB3FXsJYXH7QonZSiPACemypsou4NMnx5DLq9GXV6",
  "key25": "4f9r9EY13nq5ruzMJQxERJgLXANbNVFwCft7GuGqtP1mrSTGYhA7mWZie45xMCtNruhDG9VFgwdqQg38GtiAJBVU",
  "key26": "48mEhSYH2ywPkVoqcVubKhFCuH9RWRkSEp9oouNwdWooVxsxpqHEhbEfyeLu5bcWCeg1YZxwbvWgn1ZM8eDMJstz",
  "key27": "4ykMUuAd16e9pxPojzjV2onApDxDnY3BJY9sBU13goJ6LhLHLDqJW41pHdYxawgcoX856kTXbZtZ6YPLALgfzC8B",
  "key28": "2jXqFuBUsF1vDGWCDoMGt7yJcVhE2dRU9QCcm6dhTxQUMFTbQGjnozKtVkVVcKNNqzWzLqfDTVetSJGzZVgCARHG",
  "key29": "3HGDqFmDZySZN3GBEMuPEQbHGavyxtrwQK5dAW1rqNEv9TvJPq3ppJF1YhGWqrR4XHBvMJpUjxLNysEwxbVRiz5u",
  "key30": "2DwVvQq8ZGRYj8BTkFZmqYd8x2foo7tReM4qYRD4A5GLwtBouR5SvhDrZQJEG1SKX71BpvrQ6EDSCFosyCMruTKD",
  "key31": "3i26528ic8FJqW48f7t54p74RhxnG2KASyY8AcSnxCxdhe5L81BwGqTnu6edtceu13eyD24XzBHKKYYm3JWXLMfc",
  "key32": "UKWiXMLL7VgckmcLrWZAzDDcqoDBEf5PikviN4Lb7kWXekAZsCygr2dKNhJZ2JVjxcoAwc5ywy3Dk8m2kp9r9Y1",
  "key33": "jKnHPSusgP1zzSjKEUYrGo76YqpjRw7yAm6ErobFx8WGii674hKa4PwFZWBGwg4HaHc1bveko84nYmhgycQTYTV",
  "key34": "5pfk1wr8jzNUXbYLEDwaJum92j2pbsvuzZZeWwQJ38kHMyPJzhBkMxoxeuGmm1uqggmm9uzeC2k9wVAsUCEMab4K",
  "key35": "3rHA9WLfWA3p5eAtASBeoQVCjrUVcmnpP5yvMtvgnpUKrrToZYbmkuyQLneGBCfBR3cgcAHryjChxta9uWDrLDwj",
  "key36": "6Bwwe6kR3yiX38xn2hXsG6gDUK8DrPL1a5Rwpxc4yN89RqQBnwYc7wSzkMaa7ddPkkynFjMsav1rAHZTiRpsuaD",
  "key37": "32S7zzLpkznELCQhbbUAbGUfzzhaD7Qud32kgD6dUUN7rLqwaVH1S9SKMDGDsU6Z1v7nanR1KZGcKYSdeSNwNJ4J",
  "key38": "hfBMmxhTFHSrbS1rKkU7JXd5zTzbZ5SePmdpyr6BFFHCieGToaqeFN4gCziCn94481QHocFpHBf5dk6o8GkwQKb",
  "key39": "3vaTPq5xoAkjPzNiGGZTV2joapsa4FXB6UPTbWPuCBBPDHRockPtgScqZq8pXc2ZdrDu4sv6iYZY5jfJo37hSA5V",
  "key40": "3FrvByBm6fsRG1Gzd6TosTcFGwzXgi8Sd2K4zkea3jzaaZqpuYFLf6TLQct4BxvomX5mwAiL3Efa8sPEewansbMn",
  "key41": "5Qq6oJfqKewZU9TyBKo1NRSYmj37K5M91xZSX6GNBMBEH5HJmeBw74tsnQquX8R5SBPFRyUQe2itPPmtf8dmLwbU",
  "key42": "5Vg4uEzDTCEBHLyGFmBCzxRe9xng74CPm4RAg4kkDgyCRNm4E4Nr1BqnhWsrzjDktnaRtf54onQTdZ1pyYCit9sn",
  "key43": "44pWG7NS8Aeur74uTpGLR75dRFSeSS59VPwg6KWtQfuvqfxe9FtyKzvr2xdxzQGeRGahoDx6HhNhttv9kFd4p1Hm"
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
