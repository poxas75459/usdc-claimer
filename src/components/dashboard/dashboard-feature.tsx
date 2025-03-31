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
    "5KoMQhRPYbUJJw5E2r3Za8kymVa3jFi7t8Uooz9gLsLdku2RRbE6JvzJKMYCDmmwtHu4Q7eNpLDpKCP8co5GXVf7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EbArxabfoVYJbBy5rgQJcwSNQKzDQ6KQgc52AEzZBkQNWZcGrETiSCvTHgfVzkyYg7AijGUJnfmv2KVJu5vPWce",
  "key1": "5PNkUTAqf63Ltdk1RdVLyAjCA9GbyWfdiMi2T54g4GPMbr3eQT6h3RZnfXSMmgz5HWJodAUBFSFeyiu5yt6JaADL",
  "key2": "38twGLEW4nA3WQz4kuWoiQhbSHVitdTGzQLEYju3QSTkPfhr1UzVKTympzZb3Xwe9YkEHs5MRepCtKEzzGbKKU9L",
  "key3": "55JgG8vWvpDKpZSHHYyTVemo2bAzZVxayLSYkt5uBtmF6LowTWVCgXcjAoBVjsNR56BHup1kzPrNGDrRjGuGKXHX",
  "key4": "4rJVxBhk34TDbpyrpcGVFn7cDDt1dAigXZA1JLRqmWUrbDYUqWPZfJNvqDmkivQcTNmchnnPatrACL9Hgndg3riS",
  "key5": "yVZitkHC5GGCURR2u1uezEi5i9nfFRDDe5fLqGjHL6fH8FwSwrtZ7J6FfDJzbpwn5nTGM5fNaejB5vK6mkXnbPx",
  "key6": "HQsczZ5tWJqE53s7dSf1uhc1VJsiyr5ugqbRYNEKaZ7toNAKiM2NUCkoYeoXo2adr7kBPaHoZwvJ3BZqmHLgx8H",
  "key7": "Mgf9TBYGUGu2rrGwi1eEFgrkuXXHdr7e3MsAPzmmneN4iMPw4AWMrpMdo191gx99AkS53im5R91GCwdawD2nAPH",
  "key8": "2PiTv539wknzxd9QjMG3BuYNKnijcokjpzBuSxgWXMJEjTW4US5KquhRwfDY8C2qpzjoiwsc5khVoDxM5c85WFyJ",
  "key9": "4SW8mZWoxwzAVG5rxvbmFJ23T2sk9Xf1k5bMMrFJTwQ3qH8tq2FGFTpqz3W6WF4U9Y5Qc4Mgu5EKYPQy9V4XVXkH",
  "key10": "MK9jg2TxAnc97RjsS3A8M4K3RG7SJncwk9S2Kgqt1UffnZUsiPigdJLLisb7keArQcZnphM62GoTXnDcNvovWL6",
  "key11": "2HbdqcUn28HvZf1ufRUj17ucfBXe2uophZKro5QaCU53LL8LsVVGWCPjJVCtkNDBPECGuY1mFp9dYCadnWTE91do",
  "key12": "haLSU7XcpnmkTqSjbW9hPqygG5DPJAiCzMqVBX1tJDCKbSsT4bvEnsLjG3t9sw34f1YpQmt4AvRABMHXniYRBwo",
  "key13": "4dgY87XDjib5g35LsWkQkj3QRp6fsSidd14hCFABfzzrEpcF3ckjAFWLG5AzYNjddanmGt8HAY6Frs2cT4gZcznz",
  "key14": "4YEiRpUbd1JbqT5WosRCtg7L3qzgea3ikMarcJDsCqB8bSrrcFn6JrjkkH8t5UjhopoiV3UNtuwd6oYoTNaS5VHv",
  "key15": "2XPWPL76sSsdatYWZ5fVRWebCoyitvGZxVaeGyjUG9M47xQHR5bNr9PGAamADguwYAf6ozvZGFRS6Yg3F2e8Gs6H",
  "key16": "YCSiHXnRHatyz77v4esQGoPTHSAVz5ERFeoGqBRRasQyBcTmz79a6hMh3y1oCCiJCDbhq18hMD67SSEzUsACBPk",
  "key17": "2LWvuGpDYfUkkP4ixxUx16NFGna6Sb1yTbFs47VUEfFfvrZgcTnZkFN119DPeD4YZ51QwTDzn9FEtstS1KjFrvKf",
  "key18": "4ejDnxH8N1r3oFPPVcmnd3Sa94K2rNHJ5sfDWd2LEfVcriWPDqiyy1JWUhiNLPDYDrzV65vjZmEV9SCt5HivZHAU",
  "key19": "NuSWnhqhCE1GHetGzFTEWUkprQM2ci1441ATxmd6U9pCbhgD6yR2XCTRpykDLMVBknsZ7Z82jFBiSQ2miYjh2kp",
  "key20": "4sdLnxKtNMjNj3h3XPAr4cW4ngNHQPLLgxyfRWkqucjjPq6KLVGCRrtmH9pBEM7KWdTxSif4tvnqhESetKaq4dXE",
  "key21": "4CsY3MBieS11BK2Vn9y54f391AhkysT7zXtipPtcCCrtGnwbpBU4Temd1L823NRGo94i3KKznULXi9jrTTt54Nta",
  "key22": "3CpUujbHi9xtiQV3iXfoiy9sEp5i83ngVSHBdPa7Feg2BgezvWSPSBGZkTsGkf8vmDDib6Vh2SwiA1Bqj4fk5nzU",
  "key23": "2HRbrmMgBTQigQkWx147goDsdjFjKEPtdEsYKPpseBjpukc69HfCvFXS14Z5oxM4Q4XvmpB25Pb5k2m3KDe39J1Y",
  "key24": "2C2iSb6BviSnDG8wJAHi9C6DcBkBX2uHmRvvNgXzLatcdbLiHVouNaS22tRRnMLozdGDBqgbbZvwyJ1dqkaGDgN6",
  "key25": "62pu28avnPGSpynQazK8AD5XxSJfpTwE91xfHM9mUnJn1QHk1YoqH661eGHzr11k9evbp1PqKMyGf17F4MYgytxW",
  "key26": "5gXguBqGooLP3Lz2BNMyLQSLmwnRU6u7ztwB5zqHFFx2rqr7gLpm7mcXjDSDCmmPav6ZvHiv7NqRYP8fvAqxHREt",
  "key27": "4oiLAquyFR5PBh3542agddStRortPzRyrnLnB9cFjoQMLqHXwjw2qgmWCB7CzAm34RLfh3vUEfAjw7tB4zd8vXVB",
  "key28": "6tLZHVyH4hZno8hRZAr6Gu4M8MeEGUpUmuvurZfauqmgH2ZmVWrmR9nFXjNeCy83QSrWdn8Gg9MUV9S8Mxj1fhM",
  "key29": "2ysuwuViTr9kcnfFyHA3auLkLT3SP58H3ZeJ4KgXGTQDNAq2Ksch7bGyE924QkwApTg2W62WJ91V9wmoYVAszzN5",
  "key30": "3kJ5cJoyDp3er32YxiS6F22D9aUrj3fT31epRigKi3WRfKRbJKimTEsR5tfB2NBXNY93QwodHtzhxArz7PjDPhJL",
  "key31": "4qF6LhG82QuwresUsyXgN16krAqq5WsPuPEwY1v3mNojTGgKRajism8bCeDX4QuTTUB8XLRywok8ACiHekDhz3yx",
  "key32": "5tyoKcPRznEkZndbF2nJinANHYmAJeer7dT7fVQWNya5vcHPYogrG3iJWviGUd1dhL4ticWGSwUJLVZoh5T6iqtv",
  "key33": "4zr4rN6qpkvSufmxJFJGXj8CfLw6LfBq3ko1faqCRjBRQeyHq6cGtzJMse4KtxrkvY7kJ9eMh7xg7W8EonT3W3jh"
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
