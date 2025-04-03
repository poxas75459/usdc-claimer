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
    "2CWjJ1T56G17zurcZLuwp11hXaeexwqvzta1ZgKD87iQFahF76jieDSyEiYbtuY1hMK642yeTAeJmH25R96sNHjc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nm7VxUk8rPWPacwveUSW5Y37vhTBxGyzTcmVaYsSG6tGDQCjf7q8nTcXdXF5WVfvTEfC1baSn2H4UPXhyvfKh9N",
  "key1": "5zY2Ey7MHgSFTCjQE4M7FnWhGVxcHGJdpqNKavy1Povr6C5QMnmW7B6GkFGKVJ57GQgjz5FN2nEa19yNfGscouxu",
  "key2": "2ixW6aLUatsCa9YpCCGmpQpaj63gpDRWSKr8wXoKtSxCzCJ9dLH63whe1uZPHh7ivkYMT77Ztij4Rci3rvsJejzB",
  "key3": "QpsJofGcz7vrHPSSMh6kZ8b355fvXSDtZ1PFmCzSVDWT8vcsX9mUUWkT5aD1dcNDChPzVzzZA9A9hptULY6VUgS",
  "key4": "47qvqnNpm2DDxm5tNvmKMfwB5BdcwdVExKgGYDVZs4Gxj1jtXpjhXTEb3NPdf8TbxP5wsQg7QBWTmD3EST5WTuJJ",
  "key5": "2s2TVEbdjMmC7oePGFBgoYptjgiKTVDbJdXnmmjnUE8Xb7R3JVEbPjF4HPBH64CwnqJEi3mueyQRGHd2VY3Lrycc",
  "key6": "5SFrzvTghgrH5mjn3USGK2SsS6rfqyJmKBtVoVSk8PKQ7kcLAQS11Qd5AFoSYxecYAXj5iyLULUaR1LtDtsixBSi",
  "key7": "27BELuEkKWNF43nTyy6X1AUtPrJ78vugopXesRqqz87MRoRwHEjv7GB33DkaH1cpnW8bfF16BmfYQupAQy3fGbsy",
  "key8": "fJCwTuXZJ4eFfou7G672WhWbbP11JDYRqCFt35gYN17x8JTe6CL8poVj5XV4ySmkiDA56vyjVWaFQiyVKgQwazp",
  "key9": "U7xbfABAbwhfJGNbnoA6UqzHnAQXXBkKd1fGZsgQ4vJGbzgn98CwGRaX2BXGKZfmBB5CEW1f45KsLHUkVS5JYwg",
  "key10": "VuMDvRHDQENvAJpRMkwXKM8VBKXe4sY1MaayVVurHwE7gcCdLV2atP8Mj12WAriUyjHKxdxGWjyvhS4mhexFvPp",
  "key11": "3BBm6Ccs4CyCjAJ66Jb1L8AVhXJywXLNurWa4XiCbeAkpCrBMXQTdN3sE16ykY5femXdcLsLhMgef21ZRaVDmY8m",
  "key12": "2tT7CDmVEqAGSN9o6UqdBuRFjRn6DFAQMz1jRupXnQkcRNJyXowzqDicWPHgmLsVf2xiJu2w84arMSuzT3Vexe3a",
  "key13": "28zj1Cky8pSEoowBprfnP1judr8gDLuzSjQSStGbhK7hvKV6WiMon54Gt5q6CJGXqAsiDS8rFJUTAuJHi2hWXgxx",
  "key14": "3sVRVQJND2vszYBKmuq67LYT3nE864juD2wQtU5ioQVYQYXs5uktwTWf8KTV5DtnGA7ucF9Su7UEBqPNQRXahPVS",
  "key15": "54NyhZYRXhw87G4dbBWDv28v5nmb75PULsM1K6QNCq3go1NStARGk1CLXsTwpB3t9ejQxgQHv7cP85X3zApn2zca",
  "key16": "58nQoBBg1Ny6SgbQMmpRECzWnbFikkx48Tfrf1VDatFV644bpBeiw7qmwh9U2FD24Ji215VyNadZ6TQz3GQmPuHE",
  "key17": "44X9d4xP5HeWwJXrwvSyPzKYc5yaMMMKhpSi1TvYXeSRGHfSnqZC8oKCPXFhsxUuzieh7kauAbXMGW5x35uVRGro",
  "key18": "zja58s6AFBjHPyfM9aJMm3KwfXuC6PMX4gwtfezJpEsqs6zoYoAqfAZYNjwjZLTL39aqHjHqkdyRj5rLMKWXyRQ",
  "key19": "3nZqwZxyrsL3DN3M11GpfbrmwZRwGAPBZfgk7SWUmP8Mn53sDeE7SHvxB6k2pQ6Ps1mRrFtK5g5zyNLcySkSVFmM",
  "key20": "C3winNBBFdjNPXi85RHKBDZPVqARov7xu7DT1b3tjJDmspsudjk4kVHVpynFja94ghtaUxDD8W8RCCgxasMkqmh",
  "key21": "2eYMkH52bWKPtx14sK7xba3wB28Lw1xc553u6P17wFM2PBL5Fdfa9v3KjNsgvyuNncBt7J8HreZsG2mh5joaiGJq",
  "key22": "5a9m72Y31gBEjR73wu6tDQpPRMRkMD4yVfXy2yvoysxZwViUXEEA3SbQJt9BqiCvtUi9Pbg341G4Mw1pFHsgfgX7",
  "key23": "4xzGS5HgAVsJiMeo6McweD7VGWAKr2isN2NjwtZhG9baLdVrKKpyWBWoWidMEumZ53WPS5RM2gJzq6Tkgx4UjxnP",
  "key24": "3ZuwyvDAeNEMx8uChnzy1TuHSPg6FJy7BgkFcYeheiCU2QkQHvBHWB4JJuMGYFfjZ68N6REE8fdD7Rp3QDSpmgc2",
  "key25": "5CvCin1xo7xNVjr1WiF3r4bWL86AkMzzchP7WmcK45qun1T8tWqdUhBN1vVGw3tsS2cSTM9jPanukW65z19ConcF",
  "key26": "3wuajqQC7UJxx2Tvp45Q1zfRvp34QjP1T6fnq6y7ZYTJtcfiFHmAUavCJeSgNsi7oM8zwdyxb1nmkBN8AKF94Gc5"
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
