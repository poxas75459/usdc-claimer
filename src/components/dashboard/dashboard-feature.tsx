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
    "3jQCRXyKk5v9qFzHQXAeRmbTofDsGskeHfMyKNsKtfnjDrmzSK2C9bHoQpbEaispAUSfX4q7wPV2fah754vMPHMf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "387db9Dmjuq75HvNpeQicQGsoYnaLes21TTRH6M8FSyJaTRsRD8z7fcvBsk5QZJu4L1XK6mNcDD7hfod3j7MG1En",
  "key1": "4ArJLJwC28i3f1nb7WbZjY329tsXDQhRoGk61qJowjdKaE8LuEiBq5kiziZdG4sSVEwAJ1DNQLiiduYjdDUciQa5",
  "key2": "SRacgTsfyfQgQCfcgotiYF4JKXYo7dqyFcF8jisCgq9Sq7jBPtYFZ45cciFuterdUQ5MEPhdCD7fgV5PH536huA",
  "key3": "e4e6kFn1UUoh45x3CzrcFhBZ6hqnMP4dimHKuQqYdDreRJf2jvCjb79nJe8tWadqtwQnmUiRsY8PXCvR4UvXKtT",
  "key4": "4L3HSpt5NuF3Y2nAPy3ensw6n3JMGVScnpEsw4UB9nRbd2vsSPAkSBoUMNJoxFce1vk7ipTz2Rx5JNhUsuqBc1SA",
  "key5": "4j1363LdCe2udcJduWjxRrD4GY8jieJo7Hb25ACpDvspsH44Ho6PKtV2YA7vQEkDUA6aRpXVQWFWbe72hEmWAhFi",
  "key6": "5tiMFZgefCTaFX9f28DmFVkbdmeNSxyZCTTgugeMa69nTHa6CbfHQ1b2uUPFTWr4ozAYz9nRZcszAV4mXnQhhsrq",
  "key7": "2n9QGHnhaDunmS89V5hMsKm7DGm3UkaBDsAyqyrc3i7gHwZVDww95Zp9zKYBRPKAwEGqtUGSKZkb7bCUFyxQTtUd",
  "key8": "51PwV85RihtnfkkRuJKxvf3asy72TyUBm153hmzeM33PWuFSXFspGpNFn3xtE9a5FyiKbFSsKHL8NCu9HdufpdMb",
  "key9": "43cZqiCdJmNGWvnwhLuTsSJHeJcrPVLGezCZTif3TkQoHKNrw6jnaxNA9GLFeHWg83uKgdp9v5hzvzrTrsrMwXg9",
  "key10": "3ggDHrqHGuFnDVfhYF9ZvVkxHC779uvrsryUqf2EZsWCB2JYhDXaiXAF32gxeuE3uSGnqtDTemrywbWUtZf2B7Gs",
  "key11": "3rKWVNyFo6fvv539F2Dw1jPQ1Rb3T2H1ewwS5GKvVTm3upt35YSxPwWpWxGYXEZirmefwCGepDqrJKpkRa58mR6n",
  "key12": "5SJTfbzv7zqtnH2T9bZc6z5zjkgpy5MUrMiUrd8ghGfqPR1iqTt8bRG7JUG7gveza9CCtCwptsoBFu3LCf1C5Div",
  "key13": "4tN9r4PTmLwK14JR2J9PyoFcHyTKA4UJutBBDPDdNyf4Vff4BLpVRidwvG9wJPLwsc1c5yX5G84JaDwpeieRuopi",
  "key14": "5vqQ7FZTiDjkApiFr2P4AJTjcAaXE34NDcXgTMk5hRHqSehxuaWXVj3h748VnEjL5QEHfS5sG26BhkDwp8VF3Bo3",
  "key15": "2FhpY4ELxc6LiSVHjTk1gjpUs9sGVbzBy5CqwZYLRm4tBQmq5qmwnvg4vSXLr7BRm3qds2foDMiwpmBB58FYYSmV",
  "key16": "4Jc4jPemjiUF6qCfwZhYUB9kNzLSiDeB9iNH2NZRwFnKYWcRtQCG13n5TEh8GxPXLMKP46B6KH1yEHadLSnBWEtV",
  "key17": "4hfbWdTf4ws44zGeP27XLPFjweQsZZDBPy5CEv8Khm1MfwjHkw5wUCHpnRrzxq5jhMa9dnYXNzWgfiuRdYah6bUE",
  "key18": "3drBAP2eBw3dujcT2wPU4jABkHnmCpU5N8vnG9CZGzpNakj5ackQsgZa24GAdun4HzJba4gsk14zP3a25LFHrvvS",
  "key19": "5vb5xMsuvMjFgu8hQnHkKVay2B9AmLJDwytzhzKREXspXEoXWpbGpgp79bGeJn2kANE9ZJuDohihMf1nt71VQNZA",
  "key20": "n7atwvsUK85QdAW3zhKncs6Fjh9CkUTKQ69ECM54RhT774rVRgsdivKonVNSebNgpUa1qVGmG6Getz8wv7yag94",
  "key21": "366e52BiCdYdHACDpn7yaHQHiid2aaPWt5SbMdTM9boRGgJ2rKEQaZDwtZJ64DNPBwsKyR8TUDXu8cJTB6J37Vpj",
  "key22": "LocsL77wvmbHhkrhrRjLwjPsYZ2PwTG7Wx477XtnuzJ6u7iYjWC2rMcdVD3W2ESAuYgwe1XJkATLSwhi5VdMgwu",
  "key23": "HrHWHUX3S556EdyBVYnA97Kt7QeM6CEGQk2mdTQc4RmASZdxoe7gGF4Rn7rW67pHB2zwyzLLSbky6ABBEHHixgb",
  "key24": "eupyHaVNTPKwGHFUZ1FJ3cQf6DDt5pvbJXS5auf9sw1gDriakhwV5mVoG1qvWVVrVaFAzU1XeXas1suCQTpf2BM",
  "key25": "254HRaqPXA4tMvesvgesNahjRjQgZkdM8sBmW4A6a7FsvGeknnUGYVSSiKEocmJgXHc97F6qgKVDvbEwFEJvJYiA",
  "key26": "2Wvicho5iW8eWLGrm4exXsbSZzKC5hEvAVE7nNG9Y1dWRrjGifFP1CFJwSR7c1JA5gf6jfXqqVHaawXEzgDVCi16",
  "key27": "spnD4sSqzrhEzBHpnjrFh76f932xikC6Fyh1ADujPBVJ6RqVz91dgi76aFgRFUGiR9ruDK98GsxM8zUzymxdjQv",
  "key28": "5e6FcXkXvQe7k5Ea2xoDKgLFKDfYJTn2KDtWcwtZaTrvJ98MbDtB7AczAXuGrr65tkgavpxhpU5RPhw3uSYs8GNx",
  "key29": "3jZfw6dkVwsLrgiqVqPmSxozDEtq6RX7nV4AQA36xsHYT2ZmKSe4WHDjw2KFLd5efh2v2SvnwQ7kJ4w3TzuKEfVb",
  "key30": "51szmsN3tErrAwwrCwkf7MvBuQS3S6M3GNNzzfV1SuuDKMD9RZnBf9sNPgyS8HyMj1CGcRBinTHnnfhZJLcHoHSS",
  "key31": "4cCivTr9uUdaw2SzbGmP9rCdAeNP9wnYjShwvqobe6m5y33BDJXfEe61VLMkgGP8eXrSEhJ27Ew3RzsRTxEMzGr2",
  "key32": "4JDNVFgAx8hJtJZdbPPJ8wtrwM5Cb7Ghg9SpfUY7F5G3sJrZBYp8h5Jofb1V9YZWAiHLTv96h3tDTCwvjJsmmQci",
  "key33": "3FkcrFxku8Yn6E9CfnpHYhj4T1urZ9rFJ8edH3zJQHHQTxBiq2w1ZCngKyLF664XtV3vmJvkvajakkEpojbTFYC7",
  "key34": "56XfPtWDTRRgR6F749mPxphDn8aj8cAwp25umVb1PiJ1AqrNBEpQ8sAn9uhmnZwjeRzga5zQpt5weR2pDxs6uZne",
  "key35": "5VXECVAqBHvs5LuYVQDM5tngnURUoahmGNAZzDUDrH4hidoP64AGUsnbA1fmNHL1DzWne3LpjBU1y6zjVT2UKgHH",
  "key36": "3DC4n5QnFZqeTen9F2TT6ma67Dr8G2Qph74856tF1WD7ZkRdMkRFGj3DyUyZiUj1vMwvPeJcUmCqxcmrPZnZTsxo",
  "key37": "5KYTRmT6JPKKMDq3UirSAvhJ4DKa3JJcAT3YzwwQCcikVwkJwxacnHGRNvwLt532GymFRoEjUuwMHodA351D6FbC",
  "key38": "2tRwRutYH6tHcDGktxoqnDSEh2G5wSeqALvtgnt1D67dcTLaY3mBGBU7V4msR857PvFSdgz1WvCvJ72zXQMKiqya",
  "key39": "33NTx2F7L9uvcnMHSjV3jH5JRwHCdSs4aBsZvETHTzHFUQkNLKLjq2xn5T521LaMNctSJWbSbyL9zgryPB4bCxoM",
  "key40": "55jUtQuEjmdM1pCgK7RnXMqorUNfGgxTo379XFk4mXGXrVtQBA9Ey32jHLKZR2aBSVHeK7BWVetWtaFoAoCTTa9y",
  "key41": "4medP3ct3CuyGLEXxXpjAdX1KvUxVRLj9GdcfRMTq1XgAH6PGf7ZuP2Vx1fx1cjyWXN4XQXVeRaZibpkSc1sb3NA",
  "key42": "ogpzuQp4HQ6dcW1fQRjriwpb9w31jpKZGq1FBtDQ2AVRwAigyaoHzEgqhd57nu3AepFhjcj3KhmXVKJFaVDaDTe",
  "key43": "2HBWnJqjUjVnhF3suZ3Y1WQBQnpq3ZkSPLmCywGMWrCXy9XDKs1jZ77UVknudbYvvWXNu1R7MCKtu68wmcNcbZyP",
  "key44": "4j4W4xdwBBdSWHDwQdzs58HqidRJkesbDFeHKi1csuKkcyVpqLpSAsCRpr2WXQFuBEXFWhM5Z4BiF4Bjj4DzvKgY",
  "key45": "3nZYQmK2kLFpfjZxL9xEJ3gdsDpBzTWaQbo48QCN7nn4B7nz1wNaiQUgjhrJcsyzDfngkibPVQUHF6S94dw2LD7L",
  "key46": "2jMLn4yM6cB1CNAFFibgVvMYquHpLghDhkdfWzCGZhT7x4GmsvpmKqLSGUGG6u845k2zTB2PUkXhWMojkWuaa3iS",
  "key47": "2MdAQG5D8CxV51DhgxqW8g3oCB7CJJTLYroQk7tm4GkxPuz5wwkqQjzZ3pi8FFQwya3ckkD3qjSD6d6Zxnj66YHo",
  "key48": "4XpcYYD44SgJ6mQRNX4hsRgqVC2G5QPy5KEb9P4A2N7nRm64rTD8AR9sciDsiMeSYNM8XnNpTuo78E8sEro6GBPA"
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
