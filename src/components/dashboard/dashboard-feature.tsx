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
    "2px2AUEKoYvcFL4rRF2hmu8nPRK4c7Wg9gmTNrHqTy53MJkhcEBoucNusmW3EfQbmyzPGHhkigH2XdJNAyoHWheJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oGWuggeDg2Rd6MU56c4cu69WTepaohm6vFPrff2rygA5DpbdJvwPR6AtvD4e6i5XyqaZ2QoL8py3cT3AfkozESa",
  "key1": "4WA11sqbJ9ASb9VKz6kpd5V5HjTmeVxdmNYY5ohMFpi2edCExQ9wFMxCRsDJnevUWZ5JakKmLsaiEjupgBp2HCxJ",
  "key2": "sA41wszh69t2Sq41WxVCLZom3abF2AUaDZ2vPtpVxFKjPG6p7hPWupcF9iFsk75NngHnngoRTgKKxTAwv71iyiT",
  "key3": "3Amva4yZ9WirWnTnAMpSi7RU9p84AmrrwMnBwadEiyyMjeTPTTLhN9DGHn3Jrn83jHLFfh4YW2iFp2zePKAfZ7kU",
  "key4": "2JBX4B6CFrEBcNVWmvrPUUSR8GNpst1Zg7a9xfX1JyJ3WSHUxJa7gaSZvh73ZYadFu3aPWziuL5m9DUuiJEtwSjY",
  "key5": "5JvSH3U7M3s7QmoTRZ6BFTD3DnJKc9vN7Vst1YQK8MBioF7bXGXcHYmRSsbq66r47hBtwv4Hzio82Fu8MfgVfXTW",
  "key6": "5fh7z32Jy4zyCRhUEjhXamKRb9AuX5MzcDuSVVL8rcbUqs8GqpJxxeQ91DADonVYPSeojvVy54f2ETin2mFS9N2Z",
  "key7": "2iAquHqW2gZE4LK4PPaB5WFQ2hE1A4whCFiZnwsXopXh55bJCHPGpdY4qxXeVx3ncg5kzjYczQ2RbpQgL8CBFVEb",
  "key8": "3aVprDAT9zUYDVyrkozFbcGPvhK7o7nSEti4QqD4DufEDuqDHaDmLBXxAmLwRveUEeQfq9DkJuASvGRzgGrbWaYV",
  "key9": "5srr2uiuEr2dvB2ExrmLXPaqNeJ2nq1Snbbpfpc1kMz6beJGwbQUQCyiZTragEs3rF2myKxPtsEfLnHPoHh5QUFo",
  "key10": "4XBETc8xYc4KaccdUsT3KCj7bAekwDsmKz5oRf6MiNJJZBkqQ23pQ8GhtnvwWgxvztqEonEp6spXZBQBEgeZkeDo",
  "key11": "5wYirSGX9aEZxNEaR39ejWrsAema1MFdkrdBPiLx7oMbkm3aMi1d3TbhS1KeZ8fsyzK7BtSzMF6ZQu7v5Y2MN6Gb",
  "key12": "2bPZv6ZVTzyBK6jhXhYuiC9Xgqkv6SZVLjgXKRrYTTdsuWwHZHtE3EVQdrzGwexcM6B78xiuYxRsGBdrSX1s1u6s",
  "key13": "2Q9MPSUewUqL9hWM8xj1NDc6mhYepsSAs5uDeyoN22xX1okWgchVyz1ndQE4GawXFHw2FPhmypVAX8xHNwKpEDzG",
  "key14": "2R4JyQZWb7nYboHi4H5VA5gCafkVWY6eofLvvVsZ6RTuappzpdyE2opmA7yqQw2FKCX14Zyj41BWckfXFhWcLtyZ",
  "key15": "4yxGaNeBxhwn59ydWcEA2rNokaXkKokNCCt1oUHBz7rysvQGA5Gn5oT4yBxGfGYxwDdqff77g3ER4aHBjQqkcyg7",
  "key16": "4zoUW2Nm4g1A9ikJGHdguesN5M5RX57S9Q8Z72WAJXNb6VRGqSxHrYtbMhfF6pZe1Ckjf2vWrvNDUsoR3yis89ck",
  "key17": "4HirXrti4LXBbj3bgVrGFcXtCD1Z8zXox5iyjgTe75vRzYAEcun1bGk1CaZPMg5N3RTyNVh2kRNiJY6XBQtnKMb1",
  "key18": "mWtb2fK5jxwLLuuJpzB8R46K57YUb3grcXAbvB6q91pYr1AUqnr3dt2KEDcj8Y1Kvpp6v72HZSe75GCgDpAarv9",
  "key19": "4LvbinBykDy7H6rCRL4h2bVHfkYSd8VjY3WqDcutADypzkFXKbLBwsmUHBXCc8PefgcyBsZdi7wmgAdZwFA9G9GJ",
  "key20": "3598ZEdPToYVroCN7Yr1Zg7JYrWAwNUvhPThSt9GNyjL2zXrfPt3rHQtU5HJhu7TvtkTxzfueNVLVxNH3xnfCb6p",
  "key21": "2mFr2LRCqMcMR2jhZ6zBL1wvU9h5fVFtzQpqSwDXGKZk1cbiEuJ2oy8LaFQrVk9buGHLsov6hw2fBKowrDCzHn1Q",
  "key22": "2PhTGmcixaszCwotchDeoQyy63prF3kwWdRf3DQvPyiA88hnKp2wgnBfgNHXsQKvUGCgNYaUQgcuqD1qzWKmmubh",
  "key23": "2p2RCuz6Z8fJHQz1z1MBhrg68dtyWm7GZYHG5FUwX9zpHNSjKUGu4ajhyXCXZFfoyH9zFfHNxGd6QjGFQiWkg5fN",
  "key24": "4kqbDYThwUEmLLXaaG7hNbeRwXHDa6RHenGh4Bz9Ru8RN2J2jpD3eyb3kuEqCSW8U12Zv9FDyRM6rkcoCRXtpDMG",
  "key25": "3BNetLLuZZAV8xEaUn64GgaUwa5B7JBV7q7erEc8PE8NqSxi8ZLfWEdpqVFeZPfPXzknfAhNbZtCZ1XhviyG6rwi",
  "key26": "3sVGbgY2fjdRaC5jGYb1LVNrLp2JvtpYZxx9g2NwKfEvPX2jBUmxgXAjDowbPyyR5Cg8Hi5YhMv8hqRVGJsvTPRt",
  "key27": "fXCib6UzrYyS3RsRQ8W9GLNjmYyR5wjcpNcQcKKNcJE2nceQfKtWbeJLDS2S6d9krsnragvnVY3EgiLcCtnjpdk",
  "key28": "5Dd92JpdCPdNU33e6yFZmsUeShkKQ4hToBauJZd16PQRoNGvRm18phdNLcvRiC1AwCsw2bRxgsNm5sNj94EEiym",
  "key29": "4MuuUgPbTXRi96NzBS6XpYZ774qLva95W9tuvDVj4L1ikBk1FW1NaB4Nq5L8iUb9uDZmEf4bQ8xCVzBQdisSxkKq",
  "key30": "2tThF3xAAFJM2dbBCk5inGN4TnUxuN86vK18457uctMNd6jaNFT4HtHfW9tMNtY1SNvXkAK3Cn7isUAdj8iv4S7z",
  "key31": "eionNK61y6GdJyvgPsVWeCvMpRhyf5GnG7CwxWF6HTKXKYo6XMvGs44yMfpsDhqZoCSyYqtwZuspNDTaHoU2aM2",
  "key32": "43nh6qP2w1pPh7Y7vDdF4MJ8tSUkUyFnxsfbzL1q1To2eLqp45Lbf2kEG2V9mXtUcDLx2TrU8hX3QWYvrYiifMru",
  "key33": "49cc3Qw8n44o4CWDbg7zMxgZhADtVxzGdcBZtgX1p9WzAa5xyexS48VazikBYs4A5YLLZBdmZeadZ5iNZJaPBvto",
  "key34": "5U1zrF14W1RNvQbk53bgE7UvfSHy1z3C5xzjfJggcxgXDUKboLcCnPzo8jtqKjQt6mGUpkyrFd72bjzko4Uwq5ZK",
  "key35": "2gFjpvFpffA1V7jkc8MTnUT9ADwmBSELgMMpkZKeXP1MM6gE93JQYNoMDQyAytyBj46gPQYiuBrRnnhC2G6MVVyz",
  "key36": "5w1kJQtd71NfDbvCKKjrUfDtC4Z6NBWYPaEZXvGm8ThGLN1HKqJBMJxQ7SpwzRqtprg1Bdr1GZpHi3TWAMJxPX2Z",
  "key37": "4MbEB7N7okPaXXZRR2qPLnFMAJiEp3mnLkJqUanMZjcEhQVui3wGUTgd2J2vhxkEtjqCoQ1997k9XHGkxLSmj1S5",
  "key38": "33khryTWjjzHhFHusM2ZmmCi6GrwNmMx9yEnCP3TLFjBUjB4Q2bqfQJKhRhDHpRCt9hM5GeCx5qxN5YcAu74DZyP",
  "key39": "5rrH28YeprLaRYhysz1cYTqbVkNct1eKwBf5qycZHLEroWdAAFk59nbLAkPJHcy61oP69WdZDYhh39inhaeAVUGr",
  "key40": "uVD8Fo1yc2SG7kcTaBx7xg3MN89NBuMonXxm4ow1KRySo3cMV3tTkYrTZTnrCW2hjtdttytgRm5RdhnsjwLNiCp",
  "key41": "2WDwZV6tquBsews2JetqXmRWvGXyGzgznrPEariMpFz9AE9gKgHwafJQNQFbciuyLPm7Cpq6WJTcSJFzkJJAviKu",
  "key42": "34YVDrnF1yYYVN2wJvASWyQagcvdc8P8x72F7xXhNBNjmQoVxKk95zJpd7f84QfBR4DBrWASc9Qf2G2bGBF2PXPw",
  "key43": "sJixo9qcCbpqwj1AwZYKtpLpywcu2DkisirKAXVr1FnAUR4ycQSd4gVnCP7f6eh8v7Q1nXMyi6221awRForztCt",
  "key44": "37pgukKWQT1fQTdgoj521Pvf5nWLGe3N74vgWoBSkxjj8WhUd2eBEw6K6rFgauAZvCg1WtQCUoRCNwbgPsccjUsT",
  "key45": "awdHZBTYkLxhDQhH86WWwYELqnoDjcZVLRh2iFtcjDmHUJee53o3MGA5AtAbiDRrvV7tB755dVh7cn3nyz5Sc5E",
  "key46": "5epWYkusSdAaVbq1fSM2iqEq2Hak1fTnp2EMoRNYVe1kRMhW67QVYpHJYt7JbcthvphrZJq6X7xHs8xig8wzbVg2",
  "key47": "2nMD3mPNfEUbeTfQmCduVVCFs2UTBuB7hN4JJ6tf9rpV1KyKGamBhanJbVa64KcDveyssaWfuahyVZ72cxekjesS"
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
