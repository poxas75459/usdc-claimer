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
    "4N6C9aeFQHsLMgBzSZWC3GvbbMwMYQzbopvDwyNRn9GHmdmfLJi2Um9eMmFUyrq1rfE6BAwDBUfSGS1FcrCisHu1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fMjpHY11HrCgG5By6f5TtQXJQFZJmKbME7wy4EUHdvU57YRQJroX5Yj32YEQfa7GuF1K8mdMJDR1mw1ZuofLdvM",
  "key1": "4MnCcrHARwxfAzkb9DiinD2FMGfMZJQ6TjZtMYCKq1uSo3CGq85LT9RU6ZFoYEghRysnq1k6gKkse6czSt4hNMhJ",
  "key2": "4LSAgodHMzDS7YuqNL2dPDRZaHqkLhJcVjyp4jZ4QLi6Cgq5XJLiNCnDkjy5e3zNjYuHzrhqyr4ad7nduRTHwsei",
  "key3": "4vKPUqUhFQj3vwrrC36Jd6EsDzffbFhpEZGunPK6gDAdzLfpxNmVaEd1C1UCfVsd2wANyLgiR4iUdfM5vto5kCzu",
  "key4": "3SuaSJ1vrTxFkNqNeLwRm6AWCS2dKs4F6JNBiq7NGpjqEXbNs1EmNF2D3AunNPiqMKLC8pnUf9W5Tog9EZNoC5Vo",
  "key5": "3TPUjck3EXfuHpEo93EH5eAXFsffgnyiEEiHfAApjdwXNiXsvszg7d9nyeGtjC1SVqYrq7uevsvkkXgWahzNXPrj",
  "key6": "5mWpBcjnqqLTbdxVT1CPyiHuFEUGaW5UHB13NXS3nitMKrGKqMN3aMK9fVataj9B3hQdmy1WNkt3HNMoZtLUV77a",
  "key7": "2L5bvmU8B5jZPNRPq35YKmd7afo3kT4Z9BsqSBNc1afa1Yun64mxPDngDoVTUBEXNXxd7GuTnRi9GUdcNcTvrYZZ",
  "key8": "63wuqGC6rDn3fWJg928dis1ZURNtcSEnHTzryqiUyez628pmk4AQmhGpbaVULLra9iGViwNhavqUD1BPughgpbv8",
  "key9": "2yUzRx4e9Nm9Wn4mCuz67GKhmLUDNXL57LisLb47sFQa1qVKkpHXkFe95iaFN3hW4ZueDB6VQx119yk2UA5Nxx7S",
  "key10": "5Ti1QF4n5iDepKFncuhmExK9BmiDwrnixEXC7HDAWCVzxrQCkgijhPSeK8qQ1Ekx7vK7RNf39dXy2CanZDWAhdN7",
  "key11": "5SMoKfXiKsXCRENKB65AoZE1Zm4fUUX6Xm999h21QDQYBPMpsTExPbnCJE3h6wgN7JgwH8zqp4oxK3BMU75nJdw5",
  "key12": "kQRfRGh3VP7QsGNeE1zrmbPGVVKERsx7jSAk8JQAyEVC6QUg2qDGQUFeMN1QuhrryumRttnvyywiiZqcMUVr2Vz",
  "key13": "2XQFmuuMZXyouU6ZN64wPLAaSYXmkbE2qvPm9iDuHxJLjAjMJcQX9Ej7JrR79GVe6FtvTWS4qi5YryxdUHnjaRWK",
  "key14": "2gAPdZohqdtWzzAmKxKQttYpEqYXABPMReaMjTnDtXVJ6X6CRz23vjto6fcAnbFXyMp2p6qxkzsxsQoqx43W6oHR",
  "key15": "NDYu9VHKFRZmVRNb2p1e5186A9EMkLbN74YkNoKy7zJt9GgbkLwVd56GEipunCf2JKwED2kqAWaFSNHKptUdeFx",
  "key16": "2U3xBLv9YtbSwYuB2wMBomaHuh793BhnJHbUhCjJRc7Psnn9mREYW2ekZ9SJ3PfjP3YFecfBXHZDFNRMspSirqS8",
  "key17": "4B5EYe1dssAC54dzZUuG6wVhbPYzxFCbADuQ4YJCx83MwNcgt2XL2Abannu2ejRbLSihux2ZAFG73xHQiXcfTXFJ",
  "key18": "RR717BYD8DQ79L5Rs6ZDGpohgTV1ywrDz2rwkvjtddB8HWnKm9nBLSY5KMCGquXSN72wZeE9V8Q3etHjBdp79XE",
  "key19": "2wCRZe4ZXKnoPfGpLL5HxMuQGyepzV56ZxPguVxcTJ9uVXhzamkFWHRhxbze5FkW784G7hZG3EqgWumvwCXrSwMA",
  "key20": "2Y7FstteAQKLgd8Bc8QMBbJcB3fDXHun2L55Y7XaQL4LNW29Vscq5HvY4yi1BduujYzSS2JiPEgQRZeFg7UCNLM7",
  "key21": "53B8EpdxQwuBoLAq6XpWCaxrPgEXi5VazKJsGmRXYKHHgky2zzaRrz8JaeVgnuvbK4TgUz29urnr4xaqJGh3h2Dn",
  "key22": "4rEVj8ewRk5uJifHLRdmqau23vJqPsMmLGbrC4uELbtvhrUYV9E7DksS7JNYnMZoHxdKoJWzmgyDg7sovRQxksGi",
  "key23": "4EykShjw8pYdXxuWF6nZ4S9Q5MHZxUHZjpYYkpQSyzXT14kwuQqkLXd8Anj1nbKxXMZtqBgDcJ8E3WeQhiz6c68P",
  "key24": "2hXNnFdFMjSCULH2xj4zU3JxKNKxmzSoAXDBshzmHNFLsrfTMX8SBjLKYMKx9cTUgsdbgcxMxP5MVdKVznopPaqM",
  "key25": "2ixYnmugJnPNb4DEsLq5g1Yef2oKbDcPcdNePyGPrbFreNagN66D8JiQcy5xsTw26uxY8ZajbVHpN36B1nnkSqoq",
  "key26": "5KWUCuWMQJz6rh59aBGnjavaQvoyrPXSVpAAYR2dJa1rP5FHXrgzfJrj2kfhDqS5T3VRX67txvbsngXoYuX8yZ6C",
  "key27": "2nDEBtcVoXvp9wknHBtZLFe59honwGEgFqYexHqLk6mYykZx3129RvqcyaSYNNWPUgtJNZHNx4jhLh2AQrdXNxTa",
  "key28": "66spEWi8NvKuVaX5RPtn1VRijumJEM9BCmjbiccQoNiDEw7XkcUwDjEqSmN9FMnnRW6DVoCPMnGUgGoVkvN5ZdKH",
  "key29": "Te3AEa4HbrHPdjk2NHd8thT4E6AMweGs1cXjuDi8LCXAqdXNfCtHGzEgydb63Sg7XpvXgeaVS3TwGEKkqDtPV7y",
  "key30": "2Xvf5cb94MLJ2j5pRaYggWmtTsPcGeqZnBAkXoLwPsLHZeMJcCzhhQ9xX9TrmTEB4jj9TGvuc3uteq5Me6TmbuUZ",
  "key31": "4Wh2hDQ49SLEvhftRkZTSxH3CmNuE7tUFbgrfQDJSJRj6aWvaChuPobhNvAgZtoqhirZGtbUmP4xXhq9fWkVCX5E",
  "key32": "5cC3oQ4UJmGz5P8mdhPvswfr9V9Zq8RZmokM97Wu5HRKzbyuknd6mt3Uh99dUWzXB3EYzR2yuB2QKKBF69tgJqGg"
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
