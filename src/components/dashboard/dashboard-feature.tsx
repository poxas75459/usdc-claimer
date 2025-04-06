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
    "3bR4yrLLx9N7aDd9moCpTkdE3spMikQ39R5JXQ4Xj2DM4N4qcSva1nmRSDQEgamx2Z6H5FvaCU6jTs9ZjgFRERdY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qznDm5C9MxmUHvi9JHir7hbVgNTgefA8ygYijaz2PpXsJDMSPFDPKMCzcjneqjcNu2AXkDTBNVnwP8ieGJniEES",
  "key1": "qAQzNasZRENMzqakfG1Lg7sK8ABjxtEmRjFxR2T26Ls2LNnb74jbiczaQ1tRXai5dLVd9ad6XshvMDMnsQZFGxJ",
  "key2": "4uoH3r7p8Vx6YKARa8mbe9cuQB6qQJqDxxmXNLDQpBXjteMhafdWZ2Dg5H6nWWhiEoMRgVPThU8ngWUTRvjCMuY6",
  "key3": "3WuYrmx1ryFQxA9CSaojuBnQVcUYhjgiXnP5CGs5TpLjuNDvvM2AqL6eUMCTTy3VBMqVZiEsvg1oqjaoyhakcwYx",
  "key4": "51aUAd8KNgUFQdcMnhThjC7oACUJ9UBu3nh3meVN7tRypfZ68H1KQZUfHBmvvU15HRvd62pNE8Wh4urKxSvtmMWL",
  "key5": "N2khtYvUHwHduqLhnkh4qesZVYA8hH5EHRxz7hmfShk8GqZtiqewP8Gru7Z2fkMZRdeaCfmHF7ckmYVdfvj8QhC",
  "key6": "5yUYoHzLcCo3oNKE7WdFDMxJqXdVKmXGCMHo2dAcZaL8LacGc3wzwBmm37mShRQEp2F7PKSAGAwmNK63YzknCPyi",
  "key7": "3AKUH39JXVxXzNtkVtaZad5rHePzDtBWzH6x36j6u7z9HVDFBc2y5VViKupzcqt6xKaYWRP5XciqC1QttcaKk2f3",
  "key8": "4TBSEFtwc3THTenB8Am3wgsQy38YuKPU9EPbzew1k7RtCNQPXvpmZRmVoKhtCNnjPqTaTcVnqf6sKmzDUorDJpjX",
  "key9": "648vSdpdYRh26uSWbuqx3D7x5WYeGMKpkyn145GBpUAkb557UCcxNhRzvMZQ6soAm1qD2x3DcUghAKbjm31UZom9",
  "key10": "2asv5CHJasqSrwe3y1AA7RqGJZHCHPzmm8QUrEyA1ZpD8TvnJWjUnmhEeQSyPP22jFzDPMZow8oRZC9HBkkAKJdp",
  "key11": "5srKwQvDZPS57BvxvDd7L4qmBmpJUqn9cb8wKYsSSCM3byGkjhuorwewixxuuw2Nj3oB2DLKogPBcvxvGESRiFwg",
  "key12": "2hKiDaxDeUZ7TNCuwSjqNKUYRpP35WSwC2t4Gk8NSc7Dvepg3HzbbbZANSgCsLjMgfD3ohSefg6B5hWm7RqodTu2",
  "key13": "2TRAFBpztJCzsy9ryfXwUfx4XhbmE7kEPPZCifM1ioRaBDKHP7KiShnruEFq3YbGM6wSsji83QzRvWRThP2Z5Wz2",
  "key14": "65aheoi11nE7wkHCPpAcqxZLiQFJSQmaf7dqZ71KWMKMDT4Bitphyf3XAWhvSgfj3CTdnk3kpDDzY6RwAdEixRiM",
  "key15": "2NyzChvNLuWG1dKN9SrBx1W5HPSPdrYcSiCuQGpDZuTkVEwprQNtNwmWUmLtqF3MNFWFtbfpRVi4waVMjDeuLsuh",
  "key16": "3G95rFewCZqNfLB8iu2UEVu1Wb44kf37h9zTEtVrab2Kg3fFpNBWDHcbiMUEj54YCqR81MGX19hwmvtHL1tG3ZEc",
  "key17": "4S8fLfzTBEuDYWNHCpFHMUfdXTviWf8wDdQtnywqKcSQxsHq9oyA6GgpNgE5nVS39hr7xemCq8YK5Sy89MA8W1fM",
  "key18": "2sbzL5eWUyHTNfuWZaSG1XTedEeszZ8XXunTjnfetoS5Zdu8pc8xJMD72tC7kr4cgho81KaBQEJLD5kRUAzpFzSZ",
  "key19": "GiNo929gsj3LnCCP32d58N1W4ZhEW9oeXmrDZen7DaiVLPA8MUCHQ6mBMce29rw2s6miZ6tfduL7ks4Gv2MJSn8",
  "key20": "4KdKY24bVK6LHcTV8QGSpxpvkDuYqxVYCRL4Ha1kxnsLNoURSg4HYfjWScm8tNNrUKpdsc4yVHY92BEuVcVDDPDw",
  "key21": "vmMtBpMhX4bTLraFRhg5eWQh1H2kAunn7Jk3iYzVwWGZWMn5qpgYEGZvbDuCkKot2gqVgEELWkmJo9vFQv16HCr",
  "key22": "4kMP86HGz8J3fxkBohSjzWmYbhq49nSH1hbefUJNWeVJcToLj8cKZyDZmZDCNAw37k2A5Qyw7J3rzxGF8wQ6Yo4z",
  "key23": "4UdbgREXSCfHfVKuEwbV8VhNPQbRQrnwLC3v9dtjNX2h1frSbDvmxo1t3twVyJSiweYYLA18CVYBhMV9ubMu5kZs",
  "key24": "58H8roahL9M953BNVcHfCiUY5GtNrHuFtA4xUhd89ATtusLWhJeGcYYQyeMLVp5thA69YNQ2qZcFY5mAcbEEVWQ1",
  "key25": "41vSyE954oSJd8sYJ3uXJGX4KWnNYXDoGME3RETXboz7GWNdCR5V1ESVQFkRApmNui2F2Yr1Gj15Ejxsm7BUmXoB",
  "key26": "4bbvr7y57SassmXeN3QiiZtu4BouFrRPBTjsxeTcBLyaxpGiigpFDNkMuADiidNJHZ8YcVZq4aeVpyGRqkJi6YKf",
  "key27": "5Ms7frt3uNF7DynRR4iYmHbSZLXU9hnvTBjWkvzHsRHA71bQuHLQDzYbJUarG2Ff4FaAnrWBhbbCVanbnBCYofwT",
  "key28": "XtESzpVCRm2rS2HRAYVVDkCNLWm6zL5jLXrnWTnmDoiKGVRLPE4qq6Rdkq9EXaKL16mC8qHTQzjr9JsdwcRNWvX",
  "key29": "4EgFTW2xT7BQXNw8W4pupkuAZTfJEAP8qB5fovjzKKWJE6vDdosuKGqpRp676W3ZGrZzd6Tbmdr5GARCNmWGXVLh",
  "key30": "5Vdc5ro9SJi7fkMFNboCVwVtCJcwLapSJuojK8whipBKqiqtoDYh8ZXRsbuoFjSPrWQUnpJ82q9rygX6G5rB4tPR",
  "key31": "4j1G9DqtSYHoiromeraCtfvSWHeJjsZmjNugw2qiTkBdgz3jfbu2eCCpggFADXz3V42841ws1sWN2o63JCXPY3LH",
  "key32": "5Sv4PwesZVKiryZxyBeJWovNDNLmSW7TKMDJMjvgA1c9emE7nHWg1GgzVQwRa8j4RFBrzgtoJ3VEt2vWxighNY4S",
  "key33": "4Lz7fqEgdPBg3xcXQnyFgWq8PUg6GJmcT7zGV4A5V7rE3osDVMx2FC5KexTjWcZySJRMLC3a2TgMmcjNKfPnXem",
  "key34": "DfUiARbLzxCFg2Ywf6kR4rmgKv8M2uYp4kkJdPRyhbcLGaQ8WHGrkbgwMp4dS3gjSCPkguHPtJyfis4BQqmFzbM",
  "key35": "4z8y1KqPELHEmVcUH8cCz4eMQVdeThYQy4FcgaULHKUP5sLEJXqRLepCrDerKsjAiDDHJKqaZkcVQvXSx1VQ3ynx",
  "key36": "3ZFWoSxqugUkhZFcs6cBUS3AM9bxF59dHkuV3jq6c8buGsGH1gBUTupGNLbxVGNUjgduZKyuEynPaqAE1wPM9SoB",
  "key37": "2NyrmRBtqDajKmjtqTksTRzRFbYaVPyi5XFbuw1x9jVixxt7Wgr3ta8CbAUPeWjcP427u9mkP25xgyDb14FgKfaX",
  "key38": "61b9qysf5v9bLQay4hpoJP4XNNodVwwADCdqfRVku2qmpUiCBzcoxZo8rDx7Au7NrWvsC9ejeMXBCRwc1tBk6Awt",
  "key39": "7oanAUUEyADUc1AsHKUDjqiqgouFfZcFCPHoCfj4msyppMEPFyG3A416WS9Asegyp7ZKJx4uFgsQAA3NFvA9ENr",
  "key40": "VeMST2vS84oqGBCwpt9LstT54CVTXJVnKArRvKSad2BXG4fnxU4MpMm3YU6d1kndt8wssFpeAe38YDkVbujzkJh",
  "key41": "5tbZTUtavwMXz6nGQuwC7h6aM7TbWsMYMCDJHpbZs92z3sLg7c63pJNSsw4FhY6zEzGCbk3efGZJSoKQCcqG6UAD",
  "key42": "zdGFGFE91UYyzswkvvc8zfiJxtFNjbtDyayzXLQ7HTFhsSL1hTK6MA4wZqnHiSSaepTsyffm2u6bYmnYuoRNvNM",
  "key43": "5JJAx2ULFHR5hh2F8jkX4xYLqAMVYH1c1r2f8vRFrjhrhdihvBfL4N5snpTVD9MjWTL8uqWmu84nUgAPn4LMpLu5",
  "key44": "4r6NWFRxXxi3kQ5eYaqEuxZnKTu6mmLsfC5zqg3N7b2NQd1hXiktQCpjHs98pRkVbddRoRGUJ6MjJK621adaXMB1"
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
