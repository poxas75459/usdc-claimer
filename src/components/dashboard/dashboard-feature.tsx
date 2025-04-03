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
    "2QEiHRCfBKzvvoyyShwJMBmypQggwYJu8ryg6EdCnLsGfCgAVQjuMe6CTd7yPPLy85cSbvBVmAg6LNScDCaj7P7f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TNgkiqxJHK5d3ecMmRHR19e4CYj8U8op9stVZkSK9kdaS7qqKiwGW3An8HfC7iaGADu4aF5CAkXJ3385jwcFVi8",
  "key1": "2kUzRjSupHM4E13GXGjc2M6feycQ81rLSVaiKtMiyubBgFFZUBMvDhuCeq8bf66wWuGSyM6qhdeAQGEkQw97GkLK",
  "key2": "5uDLbFdYCEhfQEt2Xbx4KrUgMe9A8QszKv8487Bkq5ws9f3eixNw6cQZ8N7m3uJ2zRSnfCB5Bzhcd8xNLFoLGWG9",
  "key3": "3vN43Lcq2TMAXaKLdT5H6JzsSi6NofZFcQhfDNygr1TM9B3L4YCPuPdT9xaPV7oAu7UjBVxL5QAi2a5RJsDV7efe",
  "key4": "4Mvp9f6TRsGfT7v7exXCtTSMFh8qHNuk2R9G3h9HEwc5JooNLqCSiY4JcJJYi3XW8HGGC5oCNMHw4HxrXaeJFS4G",
  "key5": "5eaqXano3Wh1wot4YrMYxoPavpZRqLLALyWmr1pgogWRm2qCsPtFbCad3cGX3Najz7dGUn57qLc4tYSSkKe7Xd1C",
  "key6": "5zXcSgyyzv2WuSAy4SKLuQaVjRjQzAdtimjXmcijzhUrKDRRAg2QBiYnQQDesNSmrM1De4fG9z1EeX5CZn3ffx2y",
  "key7": "4rKGT9skQGVbTE48gBpTei8Y3Ks5m9ZLcwYS423zcixuTGEvo8v1LM7JuBowwEPgyrfKPNsQ3EqU39BRPTHchSwx",
  "key8": "Pnsvu72w9k8AmiXFqykUGNkB4fg2BaYPvn1Gcs1jVp4eKYtpVdwZxhvuxWybicsU1CQD5XrStTK33iMiw5zBf1r",
  "key9": "5guHTBf8CDHgCoBnb4uHFYz678cBiuCdMRVBkhvvr8D5sDMgAWYTkm7mCRmZkYbzyLb2bRToKt9zVh5rNohmZiLD",
  "key10": "3WC4V8L3jiUknmdoM8NdJjA3Vz1iU7byiQEArNuwb9svqioG8DVvGJSfbjUeVL37YxmSWRJvqRDBVTqUPJWgnW3G",
  "key11": "3ZpJou7CVa8tsrdMpKPqDayryGNBHUyoTPWv9JXr2sYZ5bJ8VC45tMJtU98fRAujgLak2zY6ngPhCetNi87yFM2Y",
  "key12": "47rNDRXRECBx6jEWxux5psV3MPL9AcXyF12XiywuFDpBHcsGu5e2CBjaQwUZnKDHB6hJKS49BbE29QCSTivXkSt3",
  "key13": "5aZE37hLRaEYnss44tTMURviuiocj8nSjcecPVMESd8n4LNzUDdJ8U5KR3TCvLaHDVmM3ZmPtkpHhzwgHnAFRMvx",
  "key14": "5UxQv4Nd63dMbPhzGJieQ7vdrvZRYxwZS37G1U7DmpDmDkHzUtFjW46zYGAhWM6RocA31xLtGPygkirVVH9a8nYM",
  "key15": "5afkvp2SycsNpXGyoS61EVqTWNFzotFeXCCMtstvFyLstDuKxUwb6osngLLzfE7FeAJYWSkNwToCdqvm7ajJdHqg",
  "key16": "4YESCX82c2aQk6ZR6eQXH6crhN47igozhhH37dKemzYJJUkqPooN9iUvFWR3JGQAVpSDXXWz2G8B3bD7ebcDoPbr",
  "key17": "3sQDK8WZwGHPm3VEBFpyz7C84JsKV4xN16gexZkDXJwBv4Afa3YHmWzCjo7mpPpwRxvXsrmchS3rCyeQWXojJcTf",
  "key18": "3UUNbRVpW87ZmSpmgYLmJxxxhHy9j7Kna1LZx1RQeToXRpLNwwVYzVNHrYMnXHjqQubSZArMfsSySuWgJANy1Rb1",
  "key19": "4HT4xTRpndCT1D2qxsbBBwSA2mgGGzTUQyFz4XjLr1FiozWCGejaNfH8K1BAdzLoSs5piUSp5QwPKvMCSBzyZ73V",
  "key20": "3omvHnsiwg6R5AWT39QsRiskMvV4jAd4VXXWpSM8Bk77xCqkPvuWZdbcDUciXC7cLtnsvCHq6dy5jp3PvaJdAJaj",
  "key21": "5CLfvf8LpWV2sdd9WnJ2DRpm857qck8dxEuDCTsvEyfzgEfQwoPczr1tGggV5dN1CMvt1LqWVssDXJKd24iTjKgN",
  "key22": "27CgqorGo9Dp2u9SCRoPXxbmZ6oGNo2ouE1wm5e7e9vrLzCqU2RnVbjCUFx4UhB5zNiAYDFSrCwduiRC5UGNB5eg",
  "key23": "5o4Ja5X1sgjzhATvKTrK9EddWTHXJcfpKkaByZtRv4JL8xH2GCxJN4ESQDbn6jhGPvLjSzMjgWjviRntrc9AuTes",
  "key24": "3DAG1uDB6PTdwqQew5x1BWG37aB8AaL8TSiHPtwozoARV8vtjEUhLFGnGauhDaNWMnTJ6dMgaiFFcUNeSeyvRxpc",
  "key25": "5FSAw5QcPk94RsuqRufCTjTYYT7d12JsZaT9LRLs6XGEa4dktuCiYnytPobVAroemWxaPtrQZ8ymurQjkauGFkNa",
  "key26": "66He5BnUu6Mt1Jkw1uMY7zfJvdgbBEtn8cNpyuvmL8rKrTc7CcDDiWL75WDsTQgjiMikS3xeMh1uepPaVnaZ2E6",
  "key27": "2HmYiobNb8LX7uAW2E1GK5VJdAjQUcQPenWFC7Wp16CUoXwVdNjGYwVeXuDRoFuD9w691io6THgpvesKeLn3Q2At"
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
