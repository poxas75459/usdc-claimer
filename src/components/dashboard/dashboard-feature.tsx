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
    "3aS27fweETiTrApU2sjd4WVCnQQkRbfU7FrZU1GyXm7Hm6c5Kj26XkVxB7uha1BbhiTwcji4ERcdzYVAHN4rhhWU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47v2oMEUwibATEqYvJFhEbSWKoFrQ9TUahDsy3r4va8kFpBzS2qHi62uiFrfp1pAz5UQ6ktid6FQA5dSPU49z25U",
  "key1": "4ZEQiQo9LPKeWpGMiynFyk1rK7kdwMhqWe5eNw2cymzsNdiyuK2GCh2jwdDcwPtq4a3eZthVF1J8mAJjfmgXMm4X",
  "key2": "42GepPcZpw7PVttQHtktzm9ftxX7izVAhCqZBop5NfVDYJmD7rX3jBgcA2RLxRDKSsAVTUnUXAzTSesvUMuLAMj7",
  "key3": "E1Tf7ngsE1r9ywkRSYVZdkvT1H17kdrsPSe2WZaG96hCWqWKDvG7BzaHEiN53iaDFWXPLdSPU5eGTkyzNWf7MvB",
  "key4": "msavzLU1ucASdgat7Z1515RcjJJoJBLjpwH7z5kMMUXJ54nFNXwoWbSccLXWSoX7vdscW3CvBAnT2Y3ety9FcS5",
  "key5": "2VBB8S8ykSxK68g1jWw6WqexiWUSZ7968dZVLLFgGnExT426T5mMvrhqjW6y1e2VFEV572u13F8yVfH21QNQ44TM",
  "key6": "3ZriDv3LTDAoHJBxDdJiHeHNpZVTrFou85zs1QStgEt1a8tATjaaNDUApgAUMwzhszpEyrDkJrzaUni7mVr3nM3n",
  "key7": "1GgKGBQ3tXxoJ7V5iXomjicSnYjzBEMZ8digc4z7MzLXTuLdav65KS4TfuatWU8vrXW9k2wt8GSh6VguhDSzHna",
  "key8": "5ajtxendEjJZtLdYpwoDqsDiwycFgKKbTJP4KVyD7GCk9sZyEM2ubSUerDkjZ1uaBEyQq1wuns2Bxe4JU4zHuQ9s",
  "key9": "58k7fBuVZhzgogVemepjtNHuRLubwu2b13neHeSkmrrhyqJeMWoGMgJmzEbkACqdfXuXb7JQjqBN9jDhDDsYgbn",
  "key10": "5xMb2EDua4NLNNN7ASxZFciPqhgmLbb9wRqPd6EmmFYEiow9SkQY65heRqggADmQv6FS4ay9rvZ6Bzk3wUmTqUQS",
  "key11": "Lc4L6PKq1MUeqgZWSmL8CVCJPYmVHbqjQ4foyGEd8RBPoteuDDqeJUoJdLYWya2eiYo54y1RbRBNcMak2fnzFZ7",
  "key12": "2EbLKZgph7H8ExEspSqZywsLaT2AP1twv21LJSjgo3GESkMDTJVRf2zzjgqjcYi8uiocrnkWz5KNYQVc5w543x1a",
  "key13": "2LQqeCxEKAdGgLrSwQ9JeWT9T5ke3u9JL1WPGf7D5crc1kcX2M3QhKbXTPHVnuYu5qFteukM6ZtQrRB3LZeBGcyu",
  "key14": "Sy62hoUBKKL8QXBTL99ciUoLAQ12HCCYr3NBej6Ct61cC3zV1riN9KRtnz9nLLrzC9noEfyL9pDewhW2kikYFdW",
  "key15": "4wEnDF1tMKn6LfptBYj1SX1oE8B4FMmjgmaE9eTq9QTvXbEkwF6mkHBfXwbSUF7hzfc8J17cHxKRg2uVfn7WAG2V",
  "key16": "4pZ9C28XNXLFNYe3c9nNXyKYhk58ps3Ljtanj2ec86N6EF2gg513PDB6LAskS7gRTjiihrZzSTVNypPDunw93SVj",
  "key17": "2yF9W3hm1AkQsxaqSzdqmShgSfqoodvvDuMjgW9aMgPESPrL6hpDuYpq5DDg92DQouMwpCixLs7Bcw33FngfNf5D",
  "key18": "32u5N3FRUYjnX5kyyG5QXnhQsg7HThPPmNM4a5HcjcruvJY3S5k21KvhqGs5StuDjjZ7p1y5H4Nqx9a1muvEhHcs",
  "key19": "5EKmz397PugjdmjQdJsypSWMxy5ojEfSKBbr7oz9TKaFQC88aAHvf2EPThYzvUpYrrgofTMJrBYvWCMifEMs3Yj3",
  "key20": "3m5gJX5sGSpEDmhUiDdtxJadDsgUbrmzQynqGjieYD8ArHCAnpgRZScTrjn7n87ZBd5YBkUAdVhUp8NuRHP3PL6z",
  "key21": "3TgxkrEkPzPs5gpVcuxJ7HCWsjpdh5Ud75nXfDNR6YuQcTGYtAYm7KzK4Gfek9iyv4xGc2aWTrNsFLSiyWjpLbjq",
  "key22": "5qnogCGteqRCdLgzjehLZVQm166JWYiFiQoRvhxqWJ71Du9coecPQjSuy1F5cLX7L1zJwe6pxQbkxQaaMhUAUucT",
  "key23": "2V8L6KaBNH4BrzhWmgivWcVfjyBNypDnbQbunKiup6jfpBSpYRXbZvf2NNGW8TWFJsh6iXNZqnGsfDi4ngt4LZ4H",
  "key24": "3LVNWaxBC6tbh9LPgygJweKhUKHUak6qF9QKx1J5kYG7GuwriHMdzjT2nC3SX5KSBSgYyNpDFsYxTcu4sk4BxyHh",
  "key25": "29GjcudhCUcPJSXbR8nZp51n4tuGAT6M2YQEWLchzDr5eVDyZKmzpZWmMUtGnRwsCWvSiGtqGqQw8ssSk5CqWgtG",
  "key26": "5bhq8h2DYyPmS3Uk8AgLmeYuG923R97qS8seFFvYEw7AFabaoYXf5Gqux9EmDjhgJP54M6EdTQeGod1Re3oVBWKg",
  "key27": "3us3pG5HzhdekqrQF3nLvSTBc32nF8WnM3dSXegC5xC6qse6q2hpd5MQmY1WVoDG9uz29UMT53abVXfc7NxH1Q3C",
  "key28": "2Kpprh6u16sMgFYziRt8rkoRSqCUSUzajEqLUnhn1T88jYG5Uph3b5588acPYAv9XXm3qvCcxNi9wxBHqkgzkDXD",
  "key29": "2dNB7VfzKHerZe18zyXFsbJQpCiM8FXy9zmSnDKvAPXVhMUv9fAQ13M5orwc42PZbqZdN9q8eEA4upn9s5DDzvTH",
  "key30": "3EDUJDeSL93JRK1jwFDGSg2xg2vrrmkJSByAchibyYfQCGZHpCgZ4RRPZiMbrnckgAk9kQT4bcmSEizg3dSG3hih",
  "key31": "4M6CW972UBmNC3gXevstSefSYtexNtniQfvrd1xr1xjJ9LMrgNP3DFWGN2UBGbWyQ6koQ5Zx8DYo66giDtihdFrA",
  "key32": "3KmVwq5xqGvxo7Cu91uoonphgFJhT7MvssARZx7HTcy2bFYEpSnQ5aek7wkruhL2KeGkf7Ut8tA2EV46yiRRJzs6",
  "key33": "4U2mMUZnSKhrAZKPGtVxHgMUGeuoRrpKystFC4VS2wEyerK6nPpgyoXxCrpiGXw3NH5vHvq3QW3RtvBaDJVvK5HZ",
  "key34": "4YcaVMFPqEkemh9xE388jEFjJJ94zpDqKu42huwR7db41EduNAeeCWeGETRJnmqo2iyXt2Lhio5eYvvxonTBNvYz",
  "key35": "5CrVXkJMu94CxRgdNUTVind3awbMpQ2iqvB4k7yF1Z4BqEW95Q4CzpN4bPa3JXTBkXGbUa1JrJD6UJZyJ1Ur1uCF",
  "key36": "SnRTRRCxAvkqET9ecNrRQzeVg9g123T5SLe1wZJ2gpgroGsyh31gn6zg2SyCq3G95srYcknj4xkZL7d146Vp9iy",
  "key37": "46XWHUd6zRXxX3DbZgybbDu4yy4bfGSRt4toyhVbP4pzoPNhE4FFD26VCo4hNDg2EqjhDZxgWwpFCmJLPx9qXAeD",
  "key38": "4yGMJYGKCXCvgw3JEM6RNX7e8LSJD7wH7Q8p2x85dQayLr98DKmaVP3S4x6asZaamS88m6GjMaTswFJAEfsFPGcv",
  "key39": "BXhPFgbuqyCUvPQ5QbQPbMCKPYGe6S5hAtmd7wfRY8odwvp9p9u8grMwwgnAmnTL6vDQ9R8ka5DALr2Hva8N1vG",
  "key40": "5PYBUvLnu1ZNxXy8qyyNn6w1XBbXfy9qBgyxEMT7tJoXwYBrnpiuBfzhyeR8jGyhqWGxiwZQwd9KpmpP2GjYwrUn",
  "key41": "xaMNEu7EY11qnALcNB6AxLMW8FJBGYQPyLsaomhrRKoZnpGAuPZGKpyGVh5yjwAsxoKrtmn8up1MQ6amuBuo85T",
  "key42": "4BhL2tzEQa6EjhFXTj8X8BJNXLRpLPXuvN8796ab2J5e7rBU6VtKowbBDWGBCWhWDiHgrgTeWyYjxz554JYok99q",
  "key43": "3LYnT4W8oUefcN24A3RAZwsLgt3rm9LMe1LhaSM41Aj74BHUGX8vpEuFvmwVuEQjjA7tYeR1pByP7Zq7H7ee1xrG"
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
