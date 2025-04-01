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
    "5Kqd5Q16KHnS1uz6DwPjbEkbyK1cNmmKoi6LCET8YwveXShz3XqQfFSWh2fozZyaMNKFmwrFoCDKUHbxJygsRbF9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WsyHyvPvxVBWPF3JLE85FAioG8EehgehusCvr4p86zoqkinSZ4qsMw5rZDgTQyC1jW8B2dDeLPK52gueGE24RaE",
  "key1": "4QkiWWpmeodFHAE4hPKEnbUcGjZYpmriUs3PYMECDbCNn7VmaypyW4bqBYc7TyrQ93r7XC8Sa2HyW3fGKDwMYZJH",
  "key2": "21PuMhtHP5EsFVkqsnaXK3uzbzmzh9v81DFSqV8pnFBQpsZVVEgHviPCfsoEeqtLJSnXSgiUaNFDw6Z29cuiUsiA",
  "key3": "3deapC2emJrzpBQ28YgJZc8BauGt8vRVob6kmdiCXFKoYZU5ivX38oVXSxa65BMifWtKXzUQxcTBbRE8nvpMM6CK",
  "key4": "3Fm9GiYSiY9uuadyA525EeQBS8uf1mc8RbceGWMpQQsy4B3YswMxzf5Xv2k2jxkZh1ZeaiVz64CkgQg85fNCAufz",
  "key5": "2oo8dDamwUY8EfoJDXXADUiyobcY9s7QCZ5RSRghwyAYCEm2cgZXFPi6GWe8wBenA2GMxUP5xy18HJiqjf9xeCDy",
  "key6": "LpV8mfbioeNmt5FAF4DvZHEZfeNHUFnCJd5QbEjLijLD3rRRvma8tv9W728QdW4xjQxKR8q5nVpQSeuL6S7v1Hf",
  "key7": "23Zrt6pxYierdxJSNRQj2UmMNhcPUxd2a8co5y11uD68XKohg84gLJN1TnnYmExaoFCTz57k5YU8U11L1UGrye2y",
  "key8": "5QzkzKsjMtg2ZktqZJKhSNEvr8bHLnfyK8dLg5GR2ZThJuGuPoG2gTbAjBv2mkagRApMJNZz8AH8HnHRCowa7ZiW",
  "key9": "5oRyLBHM3JQ7MdBq82DgAvzLJM6WRLBcsbUU8btoSMxcyxN7pywaBHQLJWXFM3vcXMwqZDiC8JjvkDR82rXzt9sd",
  "key10": "4F2Tcz5nEKqq35oU5fi594Wj3sPykmnje71Kt1bRc1e2qd42Ki9EMEfSFT6gndy5yCVL9n4yFHtyyNCMJm1K1Hc3",
  "key11": "bQU4zzgEpC1h7Koi3r93yKG2JQ9wKkfPpVRCawwkRwdiGeCMSSiYWs1SD5dEQFtQf16iGrMNQY5P7wU8eA4qA9r",
  "key12": "2z4cxad1ZMHw3RWd33noq5YKGCgfuPRjhMvhRHV7RKTEpNY7xjmX9HimZPjNEtPedMTZkVTNcjVWuLvJxxrSf6Rd",
  "key13": "28p4q4tmewxTy3cBV3vEMaqpaWYPyEh5NfcCyZ1VgYgSrM7nv2jEUsh5zzGPgckyfVEKitLVWmuTbSaRRxaC9VNi",
  "key14": "4E4sqUPrjg6YbsVN13jwu31RCeWxqeJGvaK86JR9mpeeebkHuCV535KG3iogx2XLmYZWV2jHdQq6Nf5hFfYjX5NN",
  "key15": "66hzpzwWRZdLt3tWup7fGqaUPYkGBQ1xCzem1dmgxsyB64UKF4MvLgiPY84t3rzcL2eXGSHnaoXVtgDVCD7KjhKr",
  "key16": "2xMH2XU7RtdbYM6EKqYaaH6GXS5g7VWKXiAwLeCYoQtc39szfHms1zYTd6ZAHQpVB54VsQ4TxX2eN9NMnyq7gkWs",
  "key17": "553FRbxv6RyWPGn1s5Mf66HE67t9Xas6mj2UZ9qbtg9sBXnWh3cRGdLVpmf9eYPVqj9JWPzjWHBomfhAjABygdXH",
  "key18": "5EXssoMfJKsaTmABrgqmAsKXjtohuTUVyFEKPSHaZeYZJkbHR1HMQRXxmu4Uk84DK5tyiq9srk4fkaGdeQh7yTxy",
  "key19": "2DsXZJNggWLL5YA7UmHdKu2wDquxY6u4fqeb7YLAPrjDF9Uhcsrxh2YFCogxcVRziYg5w6qMH6u8L75Kun7oNYQi",
  "key20": "5SsXbAWbBgxMrjs8psZ23cQ4CG5FTZbuFSUYRYDLLUnwdVZw5Fy7G99dxbVagCLHVK2PLokbuXfgs1L34khDyyQR",
  "key21": "3ENx7kTyuKX4gbS1xi6bRWEEUmExS3QTS8Q1FkfVyAUyW3o3b6TRSR6Mo1fo5cbuq5M5AdVaBHZusn2TnHB9xC8K",
  "key22": "5Lo8nWKsMAGkYhUwmqcKzMMstDwsidGcxsBuzDhhCz8nL659JJP5kYnWwFR6xTuBBbruHbY2V2vaakTyrfMYG293",
  "key23": "4UDvigvEMWqYFpkbPg6xLLmxTmBvg9jMFdojXwVkjJ9eWkso6UHQp1Y6MMNCRKbkmLuJC8jSVf7pYRv7arWMK9KY",
  "key24": "24ParX6exx4PaNi3z8nyKU42sXFthaEG6jvyZHoGapfhQeo7hpzdXoAt2xJCKdWXqvtqNMjhEUnMPKRmuDJWMpqV"
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
