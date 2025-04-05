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
    "3YQsoxAwxsa1wPyLkKuGyzyNUpjd3kATmAPym1rSGTzQwvRbQgiGGyvoqqx3Spgmrm3nWSBQNAkoiKQQm1jvKYE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21fjyfgttjaZCeHTyLDcKsJupmeTsojPf1jhYS8wCJ1C5i7ANZH3ACiX74Xp5ES2dCsHAMT1Ht2YASiTRxqWLiGn",
  "key1": "3tsws1mzjMmyMZjrzgrVkiuxEC3CjmZhtPb43bQYMV2G8VcLFyJLqFGNpRNk6Z7eGLHwHMwN5oemPj8dMWg1pfW8",
  "key2": "5pdEuSsdRCqjqTAn2WbuY3Lz6JzBaijnbrmyizwJ1BhrCKkw71fkpxZcGReX5ymUCmmw5JzBV9FHhXPssaBYYqvx",
  "key3": "4E3ZadgXQE4dMYyGwsVPEX8vbrnJ1yWjCLifc1H5tvjcUJBRMowQMTZ9gbvCFjkh3QvPJ4qx7BsDZGCweyMLwSYv",
  "key4": "3fxxHZiihG6a16vzNPsARh816zvbFVBe3JnKViJj2hutqqG9rQyNAbTF2bqnYS8oLENobaKsZx6rix7xDckAm6Xz",
  "key5": "5XNv83dnNP19aFq3CR14dQVkH8DGnwcQVgZqSCuzPDsTuFnuiT5Nzc9b2nRW3xytb6Y89BnqfqXmRXKKKXgBh9Yn",
  "key6": "XUxyRUVMyLk3wPXSmzBJLinY6YPyCDTFrcUdMcXD63Dn8bXS95v9MVHpJFTXwHp971NHr9eURGSRU8SAvh3KEVo",
  "key7": "2xNHHkqBeCuBc53a7BuBHkWNSjH89ySBh46tXYJmpacury6kgUBaM4kb2apoeSnPYsJrnK991GJbXNh726vbkAi",
  "key8": "5XbngjCx1FZ9eya9ZngRZHLkFE4ahUbckLFEHtefGmUt3oK9sKnrRaAfz9ynbDRRGjmS536B2qA6pxzFdkLFyFDy",
  "key9": "62euG2KyUF23ku3PHGcUqnB1QXEQ7Yrm9yPKN66PjBNi1VJjF2PdWzyX2KRuPGA3a4DMz67jr9uM1fLCuXZ2qFeY",
  "key10": "4Bija4PZAWnPVFsqne4tnmqyCvj9FTqauJ6NUdy4X68oE82tGuUiS4AWWPpTkpiNZEG76uggpriR7p5Bpj2wUMah",
  "key11": "5Z7q858SxyMJy2eS4X9SjyEUSVi1Dt17ZwX1LQjhrEWcDnsps5Ge6bCmwxfZ51ArJXqoDVdsLLAYkHtEgHz5QzXF",
  "key12": "hvYgRtBuMwj5DCPXWz3RR528Kfdc899XSUarayK3eJePwGPkVmUkg6adQFYCYaMpLsh9jVnvvMytUJDz7awiBz1",
  "key13": "52CYzK7m5yuRRys7xB3YLWhgDwidwCtVWgErY2epZ4Lq65d45Wxa1c47Tp1BnNfx1uNaMBbqWbA8RychbxwNBEtU",
  "key14": "2UuKAzizeCLm12yWmKnk8GHe41qK7G5jbvM3w47iyHKeWpm8rcox3VeLVo8Hh8THChYyJtzLStDXeWP3JZG7qhDe",
  "key15": "4FxGzLoLorqMLBJwbzmhdu2aYaCHHRSaPHyA2AsbVyHfZVhtX4fwAZUUqNoYhsvpq1mq9z1XNSvp73vjFwvzLeYb",
  "key16": "4ErgF1XNmgighSQ2CCiFTspU8XdcQUHmXBTYt7U8CgETL2LU7YrLsAnFAL91JU1TavEPztGHhsDFDmCXTiXryqfw",
  "key17": "3F7KrLyVhp2sbbtUBK976RWAKvZnKXwDaaU3ZLGGXLeNVX7LAtZ99DUkLt9DzWuMyMkfwjo5Lbbtbrkve7UrtMp1",
  "key18": "4New6P6au94cei63UnrQ8WtFpwRTLyM6z6baEEUuawDe1qvY24fzW8JGcttLhzJwu5tF1EK5cigeZZsDF7y1E2bv",
  "key19": "3Fuqfq3bWQwxtMGYt2iEN7Dw5cQrKb84CvsvXdYWVGVb1sxUDjH15UnT27nFqWYpbuCUbvrqdNEYZmgrqYYYPUfc",
  "key20": "3Jt69EHH54k5QQfQ5TKadrwYStmb9Cb8UHzJFh34cNqzZhjoqraeBEGFT4hNASSgbVC3mPXBFJe3HNcxVn6JaRUB",
  "key21": "4XLLSN5dft3cGPminBmmFFJznovoeBVZHfsENkfz6GuQw9spE2XthYbLDis8ryubcwqseTkXCgbp15TXy7JkR5TJ",
  "key22": "4AFbdMQkrgHu3Xah7khdjxnbTavDkfPFub69Yg5nCiSEs4EiMFkj3SWmf94jQnG4vSSLUHXDguBJo3gChbkdimsw",
  "key23": "663C49EGWNjSSi1r1PnfJx2gqp53zHkmtBvpQKJ2xQMFFviybAdK5PkebGv9uHREik6zaTrZW6Ku4qLByW82xT7g",
  "key24": "8iGqaYSSLjJruxgzA3YmiAvPr9qkKcWey36iovNb5o2jxinkzeGi64ZinsV8BSVsjGHNd5b5MgPdvBP6XEjopuE",
  "key25": "wbqg6qCvGiR9VXdV7crCX4vKnSCLxZwnNK6RKipxmXotehSzPeanT7CxhuG3AE35Vo3nQwtFtRpKNvfKFktjmkL",
  "key26": "5Y6HtjgSjVMFmZ8zd4M6G8EoiMGpVmNW87vQBqLHodEvMJkewNAaWCfh8ZC6QafNgG5vFgHEmdgCPGrUbLb6oBMP",
  "key27": "5WmQxb9KTDzXD78oq52ibnJqUYetXuQp5Yn6DJw6TS9TppPLpEQFnUB1V85HYxT577hf7oLdejPNSVbfFfFCCRU",
  "key28": "oRPo4LwyEXNo23u94cw5W4yVCXwm1ha1dDHZb6n18ZgWhWAv7w8u3U4fbVnNTzL2ddzbWH8wDZJxFoDeWroF5px",
  "key29": "X5fK3JSKgXfbkRMGTEukbHHWNQsvEDXfy4UrEFxiqeyqdhdGBVqtdMiiQASb9vhtVa6UEFWMedz33SCt9SwJvNk",
  "key30": "Y8bPtsLDm96YPviHvTFG8V5Rzn4LcLEJLP7JBHiohGNh83NHGVfBMDzcp4Uy7rvru8uKtouXRjGRzEgUKbpi6QX",
  "key31": "374Ch2WDdduVWtv7qnjbZWpQ8eCf2aULbyQrKWRJ37E79p3Ub1uaaPoRXdHwAgDMW13x7jxPo9yUDUVYEFfnkVX7",
  "key32": "61pRxiaQV2tUqw3QSGZeiRfYdAFBBLuahj9zHrS3LdERhiwTF95ooNSPE1uqg7MZbs9qoWShYinDree85UWMds4f",
  "key33": "tt1ARCoB3sJmtQL9yBe2Y6sUaFB26QqNBdNUgzuWq3WGaCP5gswFk2mAt9S8wgHsq2txBVpHSHU1dSfF9B7Vadg",
  "key34": "3MXaxhJXL1xDrdUEybYR5YMfLofqJX7YPygW5Gu5eEct6xZxzox9HJfp5ih9FdJwtpcsY3bvZZ1A2h1ZpVcnVkeD",
  "key35": "37Xi2R6TPrWAUVzU8MdibNLXhZSoapZP2W4nofmV6bMrNAC1kcY1GRDBFtKiu4jYMfE9NBmaqyMXGDc5Vd2dfbH8",
  "key36": "4bg1o4dyTPGwmnGou2aXLRaY7T7M2yKeW5JtT3tsggjCFJqDZ5SYZQUzP6p3btJZoVaYLxc2LXxkeRoAeaZtatFY",
  "key37": "2tp1kzNMReQrzKGVi7vYCzeFg4TFqHJoNzHJA696pocCPBnR3cBdMUpHMQfsQMnLywPtnRyNW5taPFwUtWU4CfQw",
  "key38": "4Hu9Z1VksSMHynmTmVRAUBxehhdT1eR7pAh2oACZVf8dBvGQJFSoBsuurcoKFE7Yp5PDhoxHSJcCR7SDodPJM1Uq",
  "key39": "37SquHGKSNBmhqCFeE54FfgxGg6iP4KhUu2T55nHzY1WSN68EEAQHsk6dyQTJpVpYeJPtpArB4gCkUDMYrwVPdEf",
  "key40": "PDXYDsuUwyAPPBc2oe4fdx4KbwFQ5AQdVwHTyJSzcvHo1pK3jopAB5uacc3P9HCgZzenoi3TvVvnvr1GYRdRJf8",
  "key41": "5jEARfUa4ybCiK8vNeYJd71jgEPTHNtd1FR41zf3DG2vSjy5xccP1diF2hQqN2kaC8aGnztEaKEtiZdevNhVNhEQ",
  "key42": "4uxKZtWX3w4MnzvPmRyAM5z4NsUVyGpWbLBcn8pqni5uxFJN84bvRYu5gXgGL9hoBHLN81oEjtDwm7tM7Q52Le92",
  "key43": "2Z7V7joQDQCY22hB6rEG1j3LHBqk8imDMAvJFx21udNqvfaejR9LSUBz2JSxRhkv9y9c3bKXF89begqdJ4YK8vbe",
  "key44": "5hbuMjtTiVff3XaDyhw5nnFdYYSg29xYZEFR1fE4rRUjwftz2ZFPeruvxKeMgK5m3UkEV2w2YQbCwJpNr1CZ22SL",
  "key45": "5qboC2F7afPZqbVCCJFfZEA9QB9hUYRpaQTbF2WXA6FiTg2K8MBReZChVUqzkvrUZWzHMx4arjQo8WbjPd6Csfqn",
  "key46": "4xihjZBQ4BM4nBKkHtfTE4zsX79gQmot2Wyb6RHsALQ7Xzwu7ikdssyLKBASC4D6CGEUfFPq9mJGfe9xLfL4y48k",
  "key47": "N9hTRVXRdNUxpHn561sFFRWk46FqporU2PooQqggLC5jy2K5RVEnbiub4qwa3mU8p2GZ2r6FWDZqge5khK9FGg3",
  "key48": "2LqnW4y569nHpUpnzUvgPqqtRr2cC1QejHSdrjjGZnoc2btQzvhmJbAiL1uQzs1QrBCrUzw3sfBqobivinAgS8Vv",
  "key49": "2jEjTnZAkGP6rN1XVr3jGBihPyr1X5Z9JZMptitNxeSyJkVr5vJNkRbcPkdWMe7Ra7VyjjtHvT7ntLx3GSau6YJo"
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
