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
    "d1gUEcHgDWQJPy2Airc5ebfozLjJMMD8Psb4eBepg3ZN9kB2sgG1ZocjSW8j6SQyfwpo15GFMivFrke3awEJ9P8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m6oPoLqjtwPTwH6fQrCFNFALMwAtZffthveqTUXfk4gH4QLthUqFeZK7Z9NtpdHnGqptNmaF6CTvvBFjdwoeAEt",
  "key1": "31vRbGjEYCxpWN2Cbu7qnyvkk23We5wtHJLHXXWB14hFpmQQUCWfboBBk45xTPm7EDGKswhy18bAXWubHL8sXBe7",
  "key2": "61dUp79hrq6kE9pdtay2QQ4zFoPJ342RDuqHQZRTnn87jFfXPMj45dHR4BmZzfzGAKdhDiex9Fp7cfcX64498kaG",
  "key3": "48zN8rLB5nxdJM2ubbYYsezG7QC556XsVWUwEYTzbf6a6TPTYWdHUcXJi4scWsbKq7tosPFBsfR53Mi75cVrvVnj",
  "key4": "61Uar6zQ7EJ2KUawjjvuj9FQSbFTk4JreN1ddMidLf9XX2v5QpNyPV7HiLdiP5CATgafBxAvxM6jee2kSfAUaC4e",
  "key5": "2waBBRoPYsu7KDRkTdDb49yJ116Ueu8EBPLFPdMUrie6ZmM6z8JHHCQoTtsQGATq9BCfpJa985zEEsydUjv472RD",
  "key6": "MfqvrUo2jLUytdMz5RyjVVjdF3AGk2yyhWQvo73G7NQCRhZzP5TUnPTX69MkFGD8fWCkcVNXqTGyd58K6G2uc9a",
  "key7": "4mcuF5gLKiZ35ao2jRUJjfDuvn6VWRjbfQ7WxMkn1Bb9bPToErzexuJTuAsNFkThiuZ39zjKab8iYt4krcLG9a8e",
  "key8": "5ACqcQT6zzcgv8ssXpqvkL4NViqAdwUfhuMETJLqUNs4V71b4HkBzMM8VecW8hwrPH9rSye89fKtEjVhpgws3XUU",
  "key9": "4MgAWo1knSwkKNGQUfTJ9v39BWYdhT1JF3hurbmUAit7Tt3FKF26NoJSDXqQAuRPxbzYZfW1HHb34XVjtucFFCtq",
  "key10": "4oVRn1gcsAxE2khAunjPDj6NjSyFozR5NPMgBpovXfHhnhCcbFpCyjs5Dtw3teJc6qmoeNNvSvjuzmsAgv7fifnK",
  "key11": "4stx2bTjL6F3V3cqTGJBSbaPK5kjz6ZfqHxhLj11QcuLvyFhhJV7A8HiB48Z91ibPFGp1AwwGCpenVBXkBTpE2AZ",
  "key12": "3ePPGYdB8kBEtCqv2kAhWhxZKuYVAwUSaLEnZz17vgt3xMsws1f8f3aAwxcPFG1JYMLsMyb3si7vcVEcN8Mfyf9Z",
  "key13": "5ZE5DbxMBHtnMKHcE7T8VqqsAKVdbrj2xN9MXcBWY6mZr4auAP3AyeDcnt2qiVPQ6Kx6Mqn1k6mudggfGNqpX5uA",
  "key14": "3DmR2HgYPpbwtSLaZSKansbFntBc5zwVb6UY7AUwVpTwq6LuwcjScrmcwYdx5MsjFC6fYZ2XVXEhV7x5VzLuxqbe",
  "key15": "vc2cRTCYCdUwfGq3VG5TonFGVNQh7kk6dgFEyprjmy4qUhxtraDLe5R6zAtMVEBiKDQfRwmxaC2okpwJ6Kesyz8",
  "key16": "3EDsk6FFK61YFse9i4B5B7eKPZWXMPM24nnQ3Ekee48hoLtxhq88G4xcTVMwr7SeR5cc3G8ZxZ4QSob8g5bapGD3",
  "key17": "nYfiizrh3Gh3fjpGvts3Y3kpE8GzZNq2fg9V5AqBjKB8JLfVwK6e2a3kQLk2BakXimVvu5J3L9vX3wNj98t3bi4",
  "key18": "4CJpa4ftEpwHXpaXbyHfETRmAGt6JSBDVrHcKg1GoVZrjjTPrqbNSiPY5kiZwkPYMH7UjfBV5NVY8duhnT6vutxq",
  "key19": "41AhRMdvKhMH3JaYh7YG7nEz5Zukh2AeuFnN7gdVakpY1NgiTUHndT5dJCqDToWTyMDSR2MHcouumQAZp3zXzg2y",
  "key20": "3Mrrgb7G3TAhiMFPbiCQdPQY3p7Ak9xRjSY6Wtpc6uhpdWnBkSvwzTgKY9Zw8Ee3fdmq4mHQh5r3QoMmZWJKS4Ki",
  "key21": "5Vk7tjj7JkXhQvgJnnbTswVfH9PTyKTetiE5A3zZviwbE9umXr5hhboEhR4JWQBstfAWnXsEPF7So1KXftrDYBEu",
  "key22": "3Ee39Fnag2njCRdEdNmvL2be3pGX6njX1WB7HmGDHkLiPbrkWkaEk4456nsTjoFR3d71HTZC5bycdnFKdKC4mEgR",
  "key23": "4qMUKpBfrttipTABdHoU89XpT7x3vmSgw1WxohkGEcL8DQK359mkYdau7VNZbpXwpeEKyPADHKUvg2szgpKo5ebU",
  "key24": "5sLiA1iZ1yYTrdDtAfiLDYqPCbaWsQftadD3RorPAzobmCLRpAjtCfHLX2vR9QStgvEiMT4wVg3iLnaMbq61sSrc",
  "key25": "5LyHADKKS26uU4caBmdedGok5xfsGTjBiKes2dYNaFqjYv8TeXKNhUTdQ9DwbqjH8pkREwSyyCERLSLxzjsXKqbf",
  "key26": "U5KHUdT2HHp8EWQn6WPAoTKGQTzbr2w4jTDgSdigMcQj7mRwgo2c3HEwtwVvZfXgm6G4DdWDMAyRWLcnN6fmBEH",
  "key27": "LDyxZH9i1r75g5zYGDDhpRRGBA2R78wFkrstzUEaESViz1v2cihJLBDm6zkaBU3XA9XNDtsh21A5e17SyK1i6YR"
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
