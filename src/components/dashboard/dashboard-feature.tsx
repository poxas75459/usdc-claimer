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
    "2oTPj7GP6F1goDjSyGC3gc6oia9jkz58GhUnExmHHTNBRtCZbUNZYgYidS46kwQg4rv52hGaceXu4Q2xvhDq12b2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rdBqkcsaqNLddjKCnFW364idEexBNPMwzsBBi5HaHHapknB1X516kE4zP6qsPahXoUoDqipUUSRUBUzE9LHdzrX",
  "key1": "4vNPG8iQtYBMo4HouSqN2TYQa8VmaSK7SkMYEPVxBXyCBkXVBPXuVKuJFC4SW9RtKpAxwYNoJsN5XPV6hXWunDMF",
  "key2": "2a9LS91SRZU2gELrxUS9wkiVfaGur7JQzbaitsg7VCE2zwsELnJS4tDcxyaNZw49CUCXQxgHLo1HcQcGJGUcUZkT",
  "key3": "5xfhE6UJmvQgzoxKsQtdTWi4BbRPiL3Q3b4jTcZiq4pjZbTUeqg9iRh8syqDtE1H3yvQHAUjMcN7j5EpFKZCNLXB",
  "key4": "2s4Vtn3e1UZbU9sCFqDqRnTTiUaYDyBfd5HtTVTe9GqNz63P1o9TarDrtHug6Vdt165Zn5tsGFHQqsVTMnVWyHbM",
  "key5": "4c3ZiNzTD8MegGFuXrkwyL2S5gcYfPpvePSJcshfYfvBcjYypbDJx2y59iJRSejGGuCNVKAxG7FYKkMsAehQ7Hoa",
  "key6": "3NJCpxmBXUtwDBPx8yFAnEjqspd474cKK8u29cYj57Foy8vAg8i2cECTvnuRDML4Y7ZNeMD4iEXZpVBVwpCXk7pX",
  "key7": "E4GVpQmAJP4Ld721hu5CWhyNUXtZLnQsWNkRAWWM5L3peGU2nmQEKJtyc3zNiart1xd32vzFjNotLi9fNL4VV49",
  "key8": "wnSEyofw2kJoD1TjDCH4hqCpntokySBdtGRaRwmVtMJs3kkwqph9Y71kksoWv4rpduGEhEffCEerLdpPJoiAbFk",
  "key9": "5THzdcD9Lf1nYAFaBJmcSe2JUEi7yg9fcLeLSHedaDJomTDgJEDJEi6sQVuWgQyiwjkSntcv1yudMK3bZLidos1B",
  "key10": "4chFdimYkDJVAt3Nj5XHVrFCLcY6VhR5YQu9VQ8wKtU4Sh69DaLLA4iUGUbU5ewiuhozcodHvcVmjcR4HLNQbq3Z",
  "key11": "R3LXGjyn24q3SqGcYkqmHFyRwweRcy35dmBJaRX6AznqZjioE9AdivDCznibfbQWdJs7JSMrDd25ckm2QuXKmxQ",
  "key12": "4WrJfdTMDS9uANCcG35WkT17SKdDPRJx6Lk3ppmot7NtfgMcH2GoGEqd56p1vU6rqAmUgVAcDwvuUG1WNEJDmGrd",
  "key13": "3NPRKhQ4r81mC6jA31wQyezV8Yjf4zBCYj6z7z3URFNrDw4WBYURFkKwK7v34TU3ffPQJAbdudxJw2c8Xo4pN9sZ",
  "key14": "3UFEX2feoaxEF7CXYNyFK1W9NanKkdZBz2QhjC1VjGCiYCc5pSyHgNNCWrLojqXLVcs3hWh613eWZS1edsrYhZDz",
  "key15": "2JguVcWADK8rEygnTyJAk81i2J9GNV4e848z1wW2rRuBNMfHjmdko2wXqr3u82TbFuL3M1ojrqCsYTTNmkDnpvt1",
  "key16": "2vR2gY7G4wm6VjHiVi5Xk6sgpvfCSy2NoXSpUbaW367frctRbm54ZuH29iKkGTksDj8kFoNgRLKsfkgoFUM71R8h",
  "key17": "2hsnjoH4cXBE66deG3zZ1Rp4DWtYTZhc4gdgKnSAPcXodVhE74S8vX3PdeMs1JWchWu6FJVJZ4z7iHDneFyHCoNc",
  "key18": "4Y1aQGL5AVqjhhvfv5dwWJvudc55Wdbko1V95P2UZJbEiC8Gt95s7axngJkHZYFNgRrPrZYD7bRTv1hnxJCoaj8n",
  "key19": "2mUHQ8JgT9RcEeqkRLp974nTeHZpmoG1LioMmFepnATxWjj7riWtSrrvFEXxhekHiacc1M7ycWVNf6UiERxAM7Zp",
  "key20": "4uhNjSMaYK4Q7z6VNMGBKfzKC3vi3QxSu9Q7mFZV9UYisxpoYLWLsRvgDemB2dwVBfQqnoTWY7GcuUEph2ZpofMF",
  "key21": "CQraFtvKbzCTW1B2BWH4vqThioC32rFv62RSsxw9zx8sNaDPSRhKugkuG1TWiyK14iEsdggpD8JepKLVeavNvJK",
  "key22": "4m1ni76ayykC1Eha4R8qQt9Dz4m6Szbe7Jh88Psrs8ZT22fy55LPpsQgtdJF5vFAxrsy7AmecnmjQkbKx1zvXDcD",
  "key23": "4Qb4hm7kKpy2gyBCwFRKUR24cvDKeA8CU6vgweWw6XSbKPDK99AZri9eh3M5vgFe7xqDNA8M8rMUaaPAzPbnNeRE",
  "key24": "4z57fR64KkNpnCLzszpNTJ4VoLMMgz5kEGtgVToHpcpRg29MA1mcHzq6RxX8EZ9dvou63x1uTEAfTbmnWHaUeMfs",
  "key25": "576UBeYmKuyRBRwMSf6qQ3P7Fb4VQM4xHoY5FXumaUFMGCjykxoZuNXiRVs2bXwVUZp5RrM35piwucuErdxxtAKC",
  "key26": "4YsmrjKMXBizzSKZe3J3JHgdipxZNe3Gnny2grNv7rhshNoL1Q2CUjechMRsMJtqrmhs3FBrffFnzov6oU2CRv5s"
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
