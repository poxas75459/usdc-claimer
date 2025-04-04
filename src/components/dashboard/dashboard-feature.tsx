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
    "4aoF2Zp5XDNztmNawks32XcLEpfqTpzyJ5PTZENgw3XDwna46r5xnHNK3fn1QLCCfMFyUU7BVMmqTJNYnBi4pkAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HYvJWztw2YqKAPGHdckjZaxj1FHzyGEEjze6JeybcSjGGbR7rVLPERhok3Z8wrkpRjj91ADCuykKa7gJN18ezyw",
  "key1": "WJG93aeEwvKWjENTwZyrUKDEK1swqPXBfigwKjbdZv8mZMYgcH6JUiQ5sG8YDTJTFThBkK1dDJ5kNunfAthSWpN",
  "key2": "34RUAhxHmtUXpqkhR9gchS4PgaH8sSrT4ihWdvouvPrVfmAniK9VPZcLhdfBDam51Z7BE33ktJNGt1Lr6Mv7Dr3y",
  "key3": "btZm7r2F982D8UKnjsNAnjsggQPwe4uzsoun8NQ8Xt3dtXTj6cmBuCJTsqDK4BnrouN8NFFTZ1VYVb4aJUQHsof",
  "key4": "5Mg1w4frFtnE21AosX1F29zdYATtvamuMse8UTxZ439huz9rSA5yybKP5aNYr9Wp5MC1g5kSQuG2dN41nP1UaNuS",
  "key5": "5toGmVRYvMgHMpNsyJDtAG1TTp8zonk6exENzGeNZwx4rKQ3DGzpuZc6opPpyDMSRPzp7KC7b9C6CnQEz2BS33eC",
  "key6": "2pp6NA7arfcuonfahaQc4YM71TeJJdKweANSRPR6YeUxfSeqXn8TEHYThC7KfEG1uHp1uEy283QomqT5xyhbyAK5",
  "key7": "4sQgxUxhobdPttK4r2UZw1JhfYKV9z2ArjqoSunNXgehF8vP8CcpScW27oS2YKjtLwzE9kAcuz7Zn3CWcP1fv65H",
  "key8": "4BzckNWjYzBGWxGM9FJCnyAwVsp7wLZ5XVCeRxm3niJAscrMtC3a85Ruust31AGmGpLPu4PmmDmTfvK6J52Ctr1L",
  "key9": "2Rmc6vvrpHzKv7LHmnt5hcVPSD5HPsJxXJqMP4hoYrQ9uRw7t76ooGh2d4ESmUYHNFHXTY5JArmjMMvMbcS73tCM",
  "key10": "5QAjnSuwitES1PuRMeYV8puS2y9PDjn8JnRaWLEecX2QYTUbRWEFmzMWf1swWW46vHfdkTeFJPMFTpEFCKWJXcco",
  "key11": "7ZQ1vEHLqAEonLHU1sVTnB6bYm8tuxW4arcZZrq67EzkBp2YTKPDq49s1PxqGzsh99Be4YYnEfT2LN9iCbTbx3Y",
  "key12": "5jdGBtUMzP2uZ6fLr5b5cXCyPcqUgJCCcRMjXa6iakF63nniWnBwnmVPgU3m4cDCfX8jQLXoc1YpBJ6aBXPAhecd",
  "key13": "2ofkLzHweCW2SdxCYGFd9fTHaDpoSbBeWW4SHcyP26YaQwCqgai7i73M1KqyfmZWj1sEUv5JVYExgA8KVqNPWsQV",
  "key14": "ntpHyCS6ZZaVcWs37n7N3imSSvyTo6eyAqburVJSM6Vvx8BjA9XAhEkSeDs4w21EYNudCsWTHS9apGFALzNqTuk",
  "key15": "521d69uMDdt5ke5rke8TNmfctEsnxeUapX3tBJr4nvDN1SXJCGwuyGCjw1y2TB8vEwke2k1SpwFUWf9Cs65t54Ns",
  "key16": "2r31h2vdB1jxG4EeHfExvhdZZV1ZarTz1RcybxbSDEyQ1yxN896PtwLnCLjxpdAKDv34qoKF7JehMpp3FAbzZY7w",
  "key17": "3EP1NsbcPcEXTr8gzrcix4UKrtJ5NJHbgamLFiFhbegQwgE9EW7qkw9XCetUitaEpB4vdQgueRhCKjcT9kw4Gs4K",
  "key18": "57x5HmqekKnQqqkYJhSAYH9XsQWNwzZG3yh1PYwLFzdAmLUoN63KgsGjeqAFzfWARMUMYiAPP1xe5QMisWPT6ZEu",
  "key19": "4j3bdSCEaQzGgBwj2gWoiU4tqTo3Sf4TVUpXd5wSkzeM3tfgBWSrcW5snv1LiGygx9464sPvHYNLAFEQjQXSfyax",
  "key20": "4XPRqPZh8jnY64hZTAg8kxjKBPUWRYTngUh44WNBQTBxWcUp4n3tsRZgSeX4YmMxnNtTTLNvncFcM1piE6vHoXCn",
  "key21": "3BUc1oFwS86voeqLa5cLqVyWqbuxp6qKi9Kc5JuwjQshAvHd7C2FRfAmr9yneRnuDShB3s859aR54QEAcZcV6id2",
  "key22": "2VPxbwSnBteek8QTbrrG1eXoEJGmSpU9f2d43323MjPYxnSkoQqpWjePUAJ7cZXfu42iotd1joE2ECumcUfhdDwU",
  "key23": "3bDa8yK6a6uZzM2WoEGfojRe5KBYNqfyr6rJBgjn5QESsrwc6hrgD3fqmD9VY4BSKFJTgrSNbR5tr1w1V3TbHXj9",
  "key24": "2guayfWJzBVQ7xvDQM7QC2PyzsJFvAj1oSQUp4KcEx6B3fDVBCTjj57TyPQZ5PGctYGaGRBHhdkuiiJ8songSxd4",
  "key25": "3RE8sFneyjJFYLi8VVQeNyGZFRtb3R4zi3FNbThAAgg7wpLim2SUY6dnvYpSk9DNoioZ7M9pg9oTCtQzgm2CgjmB",
  "key26": "2FX3yVGpe1PzDh9RBcHYbWVo3yxRcYngPPxrQSGxgkeWedCxW15bk3tTUtNFgxFoExapBu1X17PpNsaQfKzj2dHL",
  "key27": "5MLCpKZdHF1XbMcuELRmjbXYCGpdq8892RcwHbNrAPhR8VGgGQHRhVrkM5UwTfAKP3AVCVMrKWdjnCoHUGpBLnE5",
  "key28": "1zi1PZ3tfLydaRsKGAgAQakArQQLYGs1pZJ2HmhomTVq8EBiNP4D2wUp3Qyef1E9QK6CjWr9jsELfo6tiqycT9P",
  "key29": "2b8k4Gg3S4U8E4Atsv66vHFQ8BhQ6LeGuULAdE12ybG1B3d6jwuMmhYqeJwuMuXxEd48sdU2zzrf4F9SMB5XwXaD",
  "key30": "52JHapm6juiFbUF1Yx72eVPhNp8G1zYGieGrYRUicRTN8F1Pj3feQ6jzcgHpUS14R1sRvbzX7we74kpEpwSoFWVR",
  "key31": "3b2MH28awbVtP95NgwihqKCio2fNJJDPXnL3VAWXuBPyWuHcN16d1Em6V1CicsmN3dtHwMSo653ATHqBBvCH66aR",
  "key32": "3JCCimkEHLV14MtDbYPmyANcCVEXZiiiCpp8TyvMuFkJ1nRK8D5kqj16UGxBgwDaWu8WeCodvJqXkQLxtpHEP4xu",
  "key33": "5NguYfv7EtkcAeBMgLxx2CtRmWJyEXhcmSHoHHLaLroWb9toXELTfCJeBCBSyxvNYhofsFZf72xdYqe9yWDJzvTE",
  "key34": "2Q71YraZYo7QD9SaBJ6ckEssrZGTRXjrsmGHf3CEn17xJqPF19ELUjQCyQju3SoayyNPvBRq4fmXRocQ1aSMmtbh",
  "key35": "5MvgTgcUv6EnMUFVfmkP4ZiqMzYtiX4Ui1jKn37Xm7nEQmyatpWMyMph2NSLBxtVoMS3PradZHbpRoF6PNWFpCbR"
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
