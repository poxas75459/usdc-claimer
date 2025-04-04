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
    "xsC5xdFVpz1j9dcDF32dHUr7zu8zQR28NehqZ13b2QyyK3QduRuG2U2PhxRhyJuc3MZShPx52mWjuixfUeT8KLn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vspRjq5FLSB4X1sHNnd8dzc3xWYvjfS6AVqeoSEY6X41jX4bG9CNJ1Fwpktwxea88vqCjU4rqZKC2PC3r7HxMuE",
  "key1": "3ew18mmiCHwikBWAf8WADfvg3rpysnE9unFScHshFkokbdUFtidmzn62sthdQ56uH43wFoUPXmYWwMcjNqTk6mBn",
  "key2": "3KsBN2ebiTQ7pKiQz1E7dAYkwhmc9XiKyaHiE2ofBdNS5D6WU3uo8BRCUGT66i82CRNxgmR191qnKfyYbc4Z1jPT",
  "key3": "2T8MTQbC4h6eXP38Mk3q6UPS2a736LxrW5e7DGZwHTkz24ESAEHvvdMAuxZHQAXXAgjEJBWiE88cZPshHn6XCPGe",
  "key4": "4mh4zs729QANoLFaUYs19XePjHf2E8PvN2VvCpep5LcjUNwZBnDb4yR2k5bEXxU9Xq3wgcY3BTu21eyVtkDC8Ly5",
  "key5": "5aSHHnB575yqWXg4z5uvmLanBcF5zPAibMtvVKL3aLXXLXKfdqdUCsdkbGtt1ESg3tz929tqX9YArpxRYvsoyMQz",
  "key6": "65KN44D7AVdY1PdVkHVEt17zixaFFpBDB2XkANtcc8MDYCdLKCLhfxQZDiFsEmkCdp2LHVTfPa327tWnyt3o367o",
  "key7": "eW58ix4jYHzVUqxMSEMFgTS6jJQ9XneewUkUyFTh2jNbBSTwruveNu1WQjV9TiNTTuyFvn3NPpqRjTYbJWJ3ZGN",
  "key8": "4X95qwWist71LPSTyuAEe79hAuW9DSNtaa7Kd1wwn4ydDww7JWSF2qo2dJcz4cRNnUCNVhT25uwCGWaMKdwkECAn",
  "key9": "3TazcWoEW88DKBHVeRk4G5ZYHNNyQJGxReM6rKcieUFgiD9qurWZFXiQVqS1MWMtfbrYfVeuU9JQMHnuEJhPwKeC",
  "key10": "4H8HwD14RfNffNzRqsuZHaM4mC5VLGvC3quMmmnBmp1GiTr8z7yubTJKFdDJsiMYZdAueGeKiThjuHHiM96Xr2UC",
  "key11": "5fqpJTDCUyjsVmCNk4zDM4LgVspzz95FBboGZrNGDQUEpLNMrBqpPd6nPZ4vefeP9Q3ec5smt9VF7YA1tHMwyjef",
  "key12": "3YiMsZuWySuXdGdMmEqza4pMNzzuZiRRofXYHCqPkRajT5XfMPyTRRWoEtxPKJCFT4CGd2CdJeQVdYr5uZM2X1rD",
  "key13": "41Jq7cZXn4cNFjC875RF7hDySfomxLfWzgwCs1W2L3TgKfVc3Vhyjh55JQ8kQdfjwW5Rpn4zoxQnVbaPMz8TMG4g",
  "key14": "3t7uK3Pk8fNfRdmxcrpaZ3Ho6zbEUt8s91cAAncKtPTdyxTaueFy7q46saY77w7yv7ZjhYtNWFYDensngRaAyznD",
  "key15": "5bfJyyXdcbLqruF5u8rFVBxKpLdm82FPfXd7ntCdAgbX9XzeBh78q9JCt5FeUr5hmDZY3YKYbFw8UXKT4rMK5pUe",
  "key16": "3WwEjEJYMn6ea52aiqz5LG8BbC6GdX1Grhp5fe8iEbrMysinQyvbBwQkxH37F2jWvXEuZZK1hVTJBhDQoi6pdh3k",
  "key17": "3Rsj9sb3nY7qBoeoAvbc492tPgB8vyQMo9ssRBRY2UDSyjXdjUgqNFpv5ZPeM3ZYmJVHNVvSsZFgxWAUpBvsiCKR",
  "key18": "9t4YW73cb1zRUtYZTU7rETZia6fFYR7syp1sXB7fNxESqjVrZq3frJuVvEbzZvnCZSJcSmDUHQbu8KHFjPMuasZ",
  "key19": "aWcgLRAtyc7jtyzP8z8WdX97bABAsTe3XSKkk1uRUyWhqYNz6dp96RyH7KWvQYSQAkD185C1zEG2pG3L91z5QGi",
  "key20": "4vgaDmh9Tx8v1xgTUanmsfTy5wDi1hBLG5V7u1cbpH4hr4ctjBuU3pxdqcnpiqHQ8mtRnGc8J3KQJpYCBzhUv685",
  "key21": "3FwoovCMh6CrUugG3FFP4Zfi2MKnASxpTHYpj3sKpTQaSgzP7ixVqNmbHU3YhVeJoKovdT3PvywFFQmG15arjiTo",
  "key22": "3yo5Fw2ftE42KN5YFmeCqM8fjRcvpv9nW5WhjA9DTAmtt3tHd2oZSoubNTuBZCUUT4LEskWeYSz8eL1CUCk4MPJE",
  "key23": "56RTf8gBXgxp5dHaAR5YyjrCe5PSu9GWwHeabcEtUAR8NM4N9Y2kK7jNRGhyA6oXUUf98ehZfWJaWcwzZemwkNcr",
  "key24": "qii6TyNP2ytwCpmNnCETU1TEhNbdvFmQjQNnmkXrcqMZkws5DF2MALMtyqeD2rFPKyHUAPQZNBmPkUtW1EnWayB",
  "key25": "Vj4JHpeFZQ8ZevkUvAArQYxgh28QJ77tKTc6Jy2zW5ynDwQbBska4SEaR5ffuYxjsjiZcMyxEBE6yvY7aQywBa3",
  "key26": "2kY3Jrqrfd8jvb2HuT2stpWjDSb7yE98q34GcEX1eJG48YoNDL988uXLLEJnLVCNjoKhi2EDj9ZazoVaMUGa1s88",
  "key27": "4DLHKsx54fLEHeqJo6bjW6frhaMpXp6itgeGro7hTMKPEYUgBQjDeP2vNsPZYcUmeGkSdgs1niuM7yQExZHYnq2Q"
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
