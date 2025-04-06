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
    "5kTKXgGPK69yZQeVkHPf7QJvocW5umeDyMVUTaNmjAdULwwP19KeGHYYAXLFT56GkTJXSbQdPRkjxf6YX29UNJtQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ajy6CikWeqt7EkyppUyq2gyC2vpwqeYRXJRT54hETPTibTER3rApiTKGFEGgtTHYbhvKzdraQFpAADi9tA3Cdjr",
  "key1": "AZQGux1YaUbUub6xG49NPgHMiU56pyauNCRHaDGtEzEAucFPR33Bid2wYThBr9DSs25mScuDkLJaZ7U7KBiXFK3",
  "key2": "rej29s4jNuwUtYEx8CwZGiG9JCj6MByzA1Ayjk4o6Z3oYoFgxQcqQJpHyt1M6eLtgWvnWL4aVFQBecxdvikUfpX",
  "key3": "4x23jkBw6Gj24JwfHCnSYQu4NwNWUkkhZPYXtTA8MNiVjRDfzDkWMx4xAkmuBcRzfJCg4dBKkQg2ymwgPALmU6NP",
  "key4": "48VJXNxmWyP8QXhX1AjPU2HypxKJDUGA5iJcAnkW4gAseiDKU5msEZTVoLsT68ZWAp7YZjUUQVdP7NDumhAjiBjZ",
  "key5": "3tsDQBCvkqbw6fqMjgxV8EQ37zTqQc6B2X4xy7emqYC48aX51LE5Lb5cEHFyAZKKvhapAKVP339Eito4SEGkBMgE",
  "key6": "237NRtf5mutjay8d1JcaM1SnyFXq9TPVbYRfaV8U1NKtKUsa2gjt1DjYdLawachT1fRxmHjjRCcUhVWm4n8NhGMj",
  "key7": "BnsSnkRtkEjxH62arHv4AkBucZrEZe7aSP5UvGkyHUY2wdubwJr2cK63sYTQ9Nmq2VE1BQRisKFuiKBNqvmEnCb",
  "key8": "5Rkn19q5sMTWNJ4uCy5wowAvdpVoo2PpDyjTx2ZVChVPjaBBKLTK5LYcovER9mG2yuDyMCyoYE1obF3tPKR1iDBJ",
  "key9": "tKvQvstEAQkPr8hhBgdt7VMYSNFmwhM1Knrq8Q4QUZRtEuDVjtJspdhYCsDWet4H5VvkaciB9ckNgSiLVxVvQge",
  "key10": "4qc5Q2FDYBQDdCdqdBf4AsXgDrSnPfHE9sXfhav9JCAxYsDe1QJqcPw1io5jkcDMFJdzsVYzw2DCnJhJ3NS5L5vA",
  "key11": "eCmut4WG873b8YEusFmysYTw37DAKNhNZ8ACpyxkFVFZXiUNw4HAsPtkrj6DxLHcq3buoPVJX8bfL1mH6uFFoZT",
  "key12": "5QA8nQrD8zibtT1o36N5rYFzsckdUGEbMKii5UCpGueV7r5Vh54UaCjfUEw7xXpRGfWQkSCnFSnSMsW24Mb6ns61",
  "key13": "XWyzcePcM8EcJmueoFEzu7psDaSbLYCb39MDosNZFA3cjyWSpbMsYTJagVQGBt5NCorZRGALkCf43ao5UVxsTPx",
  "key14": "4RZH8HVv4D1rEB7FWgHuF8TnwCNqeeZ2r8arTPHTdYyzeJexee9qkya9tuntfTp2PrdaeTAkxvWMeabLYNdmp54q",
  "key15": "56ypdiCX5X3jZ4nNvtWFp1S5rJYFF9bLzrS1x5rKKuL8QKf2iixsrUYeAKBnzxLUH3rKjQF9hLKkRtm9mnRmNr1D",
  "key16": "5NUGpQFtADEojgPkkB9YRUVBfnMTbnpCY4h9wJfZ89EVaSzBJesQyEMnjrBwHAMVA38VwDGiDEx5qh5NofojZUyo",
  "key17": "3iSjAwQ4Uh4CcTHY5PfvDoaxCGY3HUeUEayH2odis1TWcMrCPrv8b2myFxD5woVjvzuRe3Y9HX2CgGTdUU1MxHn8",
  "key18": "mKMNeugWuR8WjeswD4VenKehQy42LD94iWKASizYwFnkPPam7miyfovhViBDbWtXcCpQHPomCsPEMsnsjVrinkL",
  "key19": "ehJ9Fw9LgAPoSGy6xqiVm7BRamjQBSpiuamhbA8vXu9hSgVNCMyNYL8QvZZgtjbkTfe6583bdS8CJa3mzRWQXQN",
  "key20": "4jjDy9z6ahotH5XuWmCjDA3EzZvLY9zrhbPcxvTFKpoktZDiEW2UF9KZ1BtNpWdy23YWchtL6qX5XJqtLA1EtZGY",
  "key21": "2VTbJDsbBw7UwRcHCQ1Q9zG698YKTzfsoYWPQEug5cr1FwFzVwcwKy5FjKb2hnQ17Cy3ZWSYnWxuZrxUzU6hGCjg",
  "key22": "5XkseuKcLsTEARk3w3hbzMgQ5dQWxNrFN3UySQ55A2beZZYNWNV8kCuUxcGEm5GCZWCHiwKxQi39tP3ZQvtoVTub",
  "key23": "5S53ZFXizaybG4Xdog4NqDjXxs5M6sj9smpwZ9qVZC3eeWeuCPtrkpd69jJKsNYy859T6xyNt9nX1xe7EbsbeZN2",
  "key24": "4dytN68u9uWFHeCtKwgEo9tqwyUVvQa1vLJZJq6S24eyPeChbx9rzLJ2y6iHdFhpzydSuGaC8Py3Q3Rnp5uCex8K",
  "key25": "4gocHpuSTYV2cF3GGLXNGnE38UbKVKSe8U1JQ6FKEffF7irei8riiGpYxzCbouQbxQ5WMopjk7UtDNLC3QAf4NMo",
  "key26": "3JAQCGHFVesATwGnK25tgRRAGoKEmykoswLkNpXy281d4XxDYWLmcyGKfEueGVsPZu1P71mstutweUHPw2BuvFee",
  "key27": "4GuFtZmwR6uqZFmzbg1ALWX6fGcahS6xZW6wyrr8Ek41qVFMMYSragdEfuCqcztt3iZrFqYPxsbPoidftfUXmioi",
  "key28": "26gxXatA3XtG9BUWBtJ51CsQazbtWeLA54mPEn1i4ptgF84QApsXKEM1gDb8QC1a4ADur15EQkrAq6vADV5iM3k9",
  "key29": "5BhBdm2TagbDxcErAcp9PzfMLFcvh8m6ktKkYdqJyagbTH2ViLVxqyg54yYehHjne2p6GEBNEpDxR8VKQptuP7qU",
  "key30": "bzKBa134MdXWWt2Fwpx4nAecZEsMJaBH1uRhR8DMtTk287cB1sKsTgqqyZiM3AE52AMT9HvA8QVa5d1P1vf9HLk",
  "key31": "62GYgfRbDeQNZ3zABLmdwXE86SpnZKtKhzsV4CmQvW4hPbJ6ybfdVmnDP4BVA6twVag6MCTp5hXBYEyY7cWVmJRp",
  "key32": "3qqDnFct1CJpTwMNqfHVHimDukrZt2FwT4xM3FtxfdiyQ8QuigFwtD1LYNzgFse4nnuDuRTzr2Cgir3AUaDm3n3w",
  "key33": "3ifZeg631n9CVhu2tc7Uacz9edxvtRXskTVdoV2VZgG9xMdNLB8tEah7GF2dQ3hg3P7RrnkNGN9bnJPmzBGe4z74",
  "key34": "5koJsaWXFb3Wqzpu5HVspLyr3WYSKsCqj6kpoD3nM2ttfCr5d8rBii6V6gNKgoCnCKHZh5Wzqme6NPT1awkYxzCe",
  "key35": "fZKgyeaG6bhf1eyiM6M9RZMTVsL5ZTF88tP5wr53gUyUCuhqELUeARXgPamrjAZRciEAgzpTftiYuLqpcCneDeH",
  "key36": "hpgzVrZu4QoTFgFw3cqWAUbK4RfqVvZmTAAhoNSirYuH2EiKXmkE1bTHQ7dw3fg2zQHTNqTpEMTMsX42JnwrvkA",
  "key37": "rVNHkVZHBjc6oUuSVFeVb4cvsSps8WXeSBJeAsj4QKnqMrzbSsSL6ksiMU6GLVwL4YQ7znqBjWfPDZjFdahPY6v",
  "key38": "46ZzxY5KPeKQA5rGin7ZAFKmP2NZ7wXLfUiyqQvFH2ep6YDWDYZTq4mUSqgsUkf8yx2xUdnmmncwEqYu8SE9zY58",
  "key39": "YVEaq6a6meVC5AGkSPkiQQnfuVRB4pr6n3AotwCPXcdke7uuA8LDiapyxEHnLCizuMpnJGPoSo74QBK1Sa7ouwD",
  "key40": "F1dzKaCjK61D7oYFgKmnaJV1RRgw6h7MTXn4LnVuMH4e6dKXVjrszHcTC4VdMVt4ucK2qiQgRgdfjGfyVXjniKk"
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
