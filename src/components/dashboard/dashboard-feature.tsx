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
    "3ECHiUxXShYvosXjRmjMxAXPJub6NbZ6nSGqFb5wMCkcQYJtXzWYCJQN6Qdi22zN3gfZoSLEDBgNZ3cN3mFsKqHd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VvXSUMxviVbbzDYcjN3jtDahD4yDCyNN55KJ1AxcxEdnjkJSXmw1A67ZnqtPYZu8NrdaoQtGMPguRTGh3DRt4eJ",
  "key1": "27kUUR6BzD5np3x9YZsnD8AgokpdqgEguzstfoCHFk12cNejafL6SF2hwzM2LtcnrshyMRNYWEAuHdG3nRPTfiUv",
  "key2": "2gPJDNELF7PjxiS2YFfjB7qGAys66WwonKdwYPaKxnYmz6sYpz44uuCnS75SYSL1FZc4h75XL7GDAZFSPgtBJC4k",
  "key3": "2atiUKhAQxDXNNasgNrCXkWop2ENxU2ACgRmhHaBWGjZpsbc87kgTpqFKgU5vjHZb2iJAxeuHdS5TatsP3ceDuKE",
  "key4": "3ZLqkUnkJF6gjQn5E53DkgoKRsVpDgjdwCcBwqZ2BzBVd2rSyyuxd7sgG1EcMuAeRgW1NMKr1KdegYhL135zX3g6",
  "key5": "PDTd2B7rypytFwCCLnYV7xuJgPzmjFGi76NBNPtrxAZGEzfzGAAsaRg8NVZxJoyAJ6cqRBs9WBKCbn9W3bx5KqK",
  "key6": "3ih8shvpWYYLWpZsZD1jmE4E2zvXYjFJEbqqCeqTiJgzosHq8wu5SbGnQ8jz6avtq93Ew9qY1SRP2q3CJrSEUBtH",
  "key7": "3nRRtKkMFiN4RrFVpAXvN5JymibzkUW7DypCnCyAKMde9mZ1DN1BDTAMKzej8P9bvwhNEZvcRTmiia7ndQbq4hxj",
  "key8": "4ihZzSbiJksGzd2VpeH6Ase6z56MwPNVfBwynbUxEWrvr3YQpYWCmq68eWkp8WtMXGe8AsMnwbxF3UUK1GPABnBP",
  "key9": "2HJaHpzrAQNhtP2aCGVSey7zxy3AAnd6grjZ23tCTCHqLXi6jCACABUxwLRyugcCnsbiFVH9143YUh4zgansXFLL",
  "key10": "18p2QBkbHPv99cygWeogAbYeUnA7QK4NDaxN9Q73GUa4EqtFeUGJErRLbeq3fn9wVPzo9XrQF1GXnTLP3aFsr2t",
  "key11": "Y8Z8NJ3dxLHWEjeTrpRxFMcs7Rr7mFQxYKS4oDmB2ecyK2FPRdcUgbhQ3tEEr1mPBJBJ21K7GjSoZ8RphuLSdip",
  "key12": "56WL4qXxduXQnPr9FC9TstJV9TpvQmRHQdYCkxN6vWtrThdat8d9gn62qt6pbJw2zq9qL4kc6qY3mvMzQ1D4hs37",
  "key13": "2i3VWhVCjNadBDGCvojH3nCypfm4huqUjyvMrVdc6Vjvwsn88qtzdApLP3iLYSpVbGqsTDFWDuSLahAtMnfmYFAD",
  "key14": "5zCEgd4scQUm4qx5YNwN5qbhoFkWDgwgaDxANqKmHgTc2hKtXC5yFNWbF9TuqfAvzpe16DR6mTWzPE3AStvtx7sF",
  "key15": "5S4dn7fDMWz8An75eTFy3jPXSh5py821Q5BNDMU9dq985VuER5WbsgcNuetx2ZH64HMkR3sWdPfJw5e3foZrpUUg",
  "key16": "4D2SbWvHm3vvjAXjA7aJcpRyKKScPhdQQXo6Bw8D68KP4H3MnU3Cv2Sf5MfFaj2JAKtHKhoVkfZsqKHuMaZKhRnE",
  "key17": "3pcXs8FQVXuhzq36GHvmuWUxRNr9XPzFm84LcCxqeZE6aVUeSZyYnP3usduR6jFAGFPKBnQi3VC5S71THP34micM",
  "key18": "gTeWgdj9faR7QCwCHeLbcZaAPeDvQBw6RT3KndocEmhwbH6mtWiFUohL3GMcpvXoQVQni6qkgc4tNQVsTH6pZhH",
  "key19": "41rnmzBpRmBGU5SQK5afG2ABSHjuL8bPYJW4EHFGMSJfvCLfh7QkCmrKGoCoXuEeUWn4PHWKd1p9LPdmvb6H4aTq",
  "key20": "2kfvVkDagmP9szSnkebJrwnRWdCLpAxVkaYjokL1nddyptLUpHvwJjr51nfrqhrL6gFo7ri85vmQTnhFBTQV3RuG",
  "key21": "3hssCzF9nbnXmsbJQxKVwfDPe2NnNnCEgzQdqs4Ytr7Lx5NNxapZrq9KyTqVDkpjrionvKhJJMJqbwHrNEh4wnmr",
  "key22": "4pqHaB123auNtezxHyG6eHMP7YuHywpP9AsGvxYUL2PdriLkrTPZHVY7bx8n6HKaSAxV2mEDPWkZCG7iZE9t2RFz",
  "key23": "5NBpEdMuvsxD6YcbW7uDA6y5GrKeSmjiSNNYTRpo5Myzq442paWCoZSCQbh1Uhu34rwsRuvM9MVAYRpmHYau3HQZ",
  "key24": "3KgSk6ynfah8x63hHnoeKznMztAjX8Nstid2dqdyrEUGL2poWNATE1X4Xyk2o11p5xPzYCTbEZ55beY2PS3Zzv4w",
  "key25": "4CChgJpx7Vxfdt99zcypDSzAEMZryJStvttEhsiG62uT1FKQ173E3dnN4wx7TCd5Fy2smzoG44yKRVBY59XuMCVw",
  "key26": "GZv9k1W8BVvbPG1rQQUrjbNbRCkw1M2iL5Hy6fnRzYV5YpVd3oCEifbNaQRKKjKPkfHW3rzkAwdiRrrhENy2Joa",
  "key27": "2gSJpSKT7TJEFXBuPpZxomcLVigppvqMD5UsjHkn8pxyHGzfvkhBTJ2KyeaTphq9NkzaRgKjn2dgJno2XNwEM4hk",
  "key28": "4cKNLTarwceSM8FeJcGaot1HRi2ymPJ2pdP95xRzAJCE9QNG9ZMT98exAYdfNM6ZyLpNZXrYioqajSUbguwvPjah",
  "key29": "3iRDTDpB4Eyf5yTCULUzomziQpsgjX4Srx2FVU989CE9NuAJmNRmPbPV8YAo7gNjMB7qGTbBEi28ug9zZMvvY96c",
  "key30": "hBRPWXSW3XiiAF5G57DxzzpF6K1YegCsJKUDftq3X8yVoqowQPEAG5YgPaeSrCjTruxd7PLQTUM5LHhHmxWZfWH",
  "key31": "4S7Cj1jHTHjbjtxkHi3rXpj3cZmC1Pm4964t6eWBEKcddnC1XcKunnSGQzNM9Gi3WqKqJjSR2XoXCktqayNapV1h"
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
