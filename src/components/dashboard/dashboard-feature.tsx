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
    "5bKxW1sDWiKSYpth45eneVveDGNFfkXyAU9xNECYwd96cNseBET8Naqn6rGEAk77q6hdL4X1sJe7bKBKnU2svD5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YAZC4FQPTf65kNjX6VRHcXqkJbvnofCpfV4G3QUQsa6eTWDDbzq63wyQSC1xo9yCb1rbfsjYZqKRN4g1QqRHwfp",
  "key1": "5ze9vhV2gj6iiopL7YM7mSMPJ4FqhzkvJTz2exU4LjaZPvJ3NCSowS1tueALY6mjPaNJLdoSRkA8c13XrsbwnKCj",
  "key2": "45cMu3bfEhnCgMCgDsrpti5f2C5FyETee3vikihkMouLt3TkpwiocWekSaK9cW1CqKt4YdtGWXdkUuVRJr5d75nB",
  "key3": "5SiMJe3W5MiLiGyWWNqVsWKjXVpPEBoSE2QgqkwGwbW1z28kPwpuapUEqSM3muHiB93hh3kETapXxsUVvkDxVrTt",
  "key4": "48hETVhbaVqTbQkVfKufWwUuLZPaQSebUiHvm2eWRAHC9cR38pjkSPxF56B7sHbQPAM8W3bVFMeybBAiMx92Gp6Q",
  "key5": "QeS4RyP16wNZ8gA4vsty4tmHnKn8N7vF2m58bDpHScvnkhGBjZjjqGJ9GjuX4s7hCXB9s3TgWFKpuSaPXJEhMRt",
  "key6": "4ugSu9E5ighWc8AskyfafMQf1Q484Tn11RBpNDqCduAtoRLG3kw9bUZJkz5Bd7zRfzmFotdgQPhz4WhewGqFGACy",
  "key7": "q7B4yhVeyLMsfHGpLwvCRYms6r8VwA4BGaamQRGPckhbHeNkNoeFWTEx8P4n21aCLaM3xTYGsiqmSTFYUAf21N7",
  "key8": "Gr3ce7tMDtZVB82BYWcMTC38WLTR7CnJrV31kbevd4VW3V7iD8Z7cji6aE273oEDWdGE9V7wzeResw8J4n9cc5K",
  "key9": "5CcyKwsDv9wCqFZXgqSLvugHzuc1yxYcjLsscQzxdn1HfiZKKJyqG4wWAupwo9JApou53hBtMxksyisUbGJtgXSx",
  "key10": "37RFiZUnaqUREhxqHkszADTe43HiZVtz6NYSDKeXoWcxyvyFMqyXED3FZv9KgxjGGtgqWvXrNvknVois6JavTcV9",
  "key11": "3ifjtVznd66mAiiFEqKwdNCSrFmobuTzP7wRXL2AAGdBptZMKcgdVAed8pPB6SyGnR3zspUXe1tRfqEq6jSAMHG2",
  "key12": "625ujzUMQwriSQS1rR8osmtDnpX7SFWC79A9GKrcQayYojBC8caWuLqV3u9aQkgvzH4pAGYYrP9UnzmNSVwG7s5k",
  "key13": "4m5uzyn4eSfqgrEdUC7iUebBuwEvUX1pDUPRo5Hz7rkojod2PfPipG3upCLB5q8zxaWwxLVe9a7nL3ZJZpC1dRMq",
  "key14": "3ydZVsgZ1uj2fAx1ocxXUzjeQ9Ptj4Jxdt6UDPenJa1DQMRdRb4CzPDeHCGytWPGV7XyrviCtANbGkeT7ASUAyYg",
  "key15": "Aey9gUb9e1NaJZmXxU1hw8fbpAc7sACzjzvr78BZMqMic2nQNusqjk4g31RkPLG3AvqvPr68CNnBxsAogUykSNp",
  "key16": "2G4RVpi3BJLYMgyNY2CMxddDQesCfCQ7DqxzyLemjPo4pyDUzWJwf2PQhCsVHw2EgqzzLaeG8jTkgMLi8UD8mZQf",
  "key17": "5Ma1e4ausaVB4k9eU2ajm76U7d8CzBmcWa6Lnv9Eb2S8cfwKB69AmhZdEmBL6py6AWUNQFHSHcuZYXXpN7xYn1XG",
  "key18": "mHwMqFTKGNjVCwYXPqNovNCoGP7ZMQNzn285q8tyrbpbGKt1EfAXV5ZgDEFmnmdNuFCe8eodDSy1MPw2zKdNiig",
  "key19": "2MMFzPov9mdm7u6wTwefk3sBbDVaY3Zp2StceaA56fecMvHPBsUoCx7tsbGWsZUem8NFBJHVNhJvWDw3iEsyodV1",
  "key20": "32mHCDZ5GndRmiEZWeJ8gnsmbmBkqSsoZaXfqtVDHE9ZnJ74MpX7Y1TpaKtfzYkxnZPDdk2G5gs5LsdQbKVWY93R",
  "key21": "2zzBbhrAu2QYfdcJZM5QMPL8L6Jqwn9xqabxhxrTV13pXjncVVruKBTRKwqWPRmfRRn9z8XYXFshUk7exLYrxGg6",
  "key22": "5SKCEqwnyvmHyDB6ghmyVTfjdvA2Dtu4NVHBwdDyci3PEaHvci7H2N9LBcPLY3c1DYtpR4kgX87MXVGcSaQPJpru",
  "key23": "siZwhGPnbavjLMjTJPbMCKAP4wCmPM3KVyBxSGsiM6fVg4FwzxKG2iakLRsSTjw8ktpFN52GJfSL6P7iq7YeGpy",
  "key24": "qZCbGnagnfwSrkGGQhfodfh6cMN83yd2qoCoFYUrJoXU8AJaUnTZmCCpWe2BNSmhe8cSDA4PUjJ55xq3BmmBjqH",
  "key25": "2UNtRoZ75hpihhtGLAYVB5Z65MCWv9JzYxZSKdbfsJpCrTzK3RdqYQcmYgfDXCLseGXghH1CpB2iBJAepq2u3VUf",
  "key26": "2FfihVr8P8Fsumd2Wkt2f4UMysmtSdN6MT9a5KjVR3ApJcvCaGopzruhcqEQWpfGethyKuAgUHiKqPfVB5v9VeZB",
  "key27": "5VtXGznfwsYpwYk8fX8cfCqhHWUTiF46NFQneMwRWhS7z5aXBqF5EjLJNyL8dfu9qSi3Q2jTutR9skbjeAPVEdcB",
  "key28": "2JLNwoSuztAtWfaE8bWbFFJieQr67DzXNKeyNqi7oQoQRHKYY8pXYewZZBNm58uL5JuZwHjq8S2yECmdxqPtQtBV",
  "key29": "5ai4wZUh6SPnFTJJpgTebTiubNfVaLZYA8YKP5gm3HvGtzfH3MxyZcUP9DmUNyMTUMkHnJ4PmrfXKRnN5wawUJFQ",
  "key30": "2Q6w8DhsWWTTCLFA5PiznAdMpRGr6vewpGgfLUpm8U6ixcrQsZbRe77oerfbgXpjaAhCdvjWQ75hyusPJx6f1YD3",
  "key31": "3qBJtWpvTYpCL5bXdJJbdNLg98C9RnPdhChgxoJeKK5DFqkJRDBCRYfHw8voJ1nrjsNY28YrVvFKu1omzGa3EJHx",
  "key32": "588fmrWSducYNA53hp6gWku1sSC89R3Nm3fY7MCMCQ1dXa9sPLjSYY7jq82XiLMjDGsTkv3KJXRPiY6FLWFMeuqN",
  "key33": "2DajEVsjaWt3EKmgK16vxQ77NXxF4FhpCFpiR2wCXdTe6uVbp3AcKZu8sk6WK8di7WNYCKoJK6EcQDGYjNwY5fVo",
  "key34": "5M64cGJS14r8wjTuQJ98FmvTYBau5mShi7dX7KvkGi8Siy3kQRneevcS53JmXbiJwB7vqtHnnxrXNatXCnuLxZ2g",
  "key35": "5EsPxcxHHSFDix9JQGCTbaW8h21FCKLb6ijcN9JTVUiseiJN9hmt2gfW48efPQGF2JdqzHSQzpmEAocu2M4zjyNV",
  "key36": "3zJcQC5qvbXD2RUYpzairVkF5PayXgBjkAMj8LJKkETgH5ok5J7zJmpJTL1BJs2pBNwJhUQ41jeBwYBweatJT5nq",
  "key37": "4rjjmbgmwwTojVPMbmopmUgej3z2HaNTpj3NY7CeGRMwn9VES6aPuD8GdYmyC8MNQEMeab6bqeAShbwS166QMopP",
  "key38": "rCQtxAdXYx15TgvTchCaFXZRzSMJSuyUkMMefncaZMcKpG1NTVLMyRyKYibSAFBcu6uHGV6tZqLCfrD7zUBVNif",
  "key39": "CafEwXmmoLnM4E1Q9xCqkedaJp41435PDKCrcgj4b29dnaUpg6t8ASZifobputaWCUKqNoYQBYWqnEu8xP4J3DU"
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
