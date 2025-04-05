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
    "5knuqsgJgRfi2abdYWaVCxd7WMLGWGEDBoivEeWvtpSQ8zcJJwSJGkYkmFSggCLJtksoEkx1w3iuGjLX9WdXb6hr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E8DVEF3ZmgPL8r6vNNisqYFNjmWAxNn9UuyEhYo39E9o5ArXwrwKBU8BHWwnuVRG4DikcMrsFb6s4wSbxvQ4E7p",
  "key1": "2URYosBRLJ9krmxLVi5xxtkxzBCyoWxG1SSZvFZkdKWrBcLRotSiru5ZvpwaKthQyX1o22o8t55AYQuvrvqS97mn",
  "key2": "2V4iVEYDe124GwFUVNidpVpwjCA1iJX1DtMLcet24MpbTkW8qKb4NcfVmwVbmydujQnmj6JXQUsM9LBJNWhXubFx",
  "key3": "4QJtWcYa3SsyiTY5iRa1B6aKTDQJhFn2vHjSKs9iMLBjTjwMC3RxJNzcSXmzYhhkgcdWw52k4xfu4q2YayB7inyH",
  "key4": "2AWvn7CqmaJtWcrERGh9vgsA3yLgjHE4GRqL1bKTyBkgVM3F83uFcfUSDXD7LXniro4HdZXENDKVTqR1w66AfvRz",
  "key5": "5DHj33FvKFREV4SzQwfA83gAUuANuEcPtejoDEeeYU7noQY3tb1XpmC6XoFpF3FEMn7ym9dtzwr7afk8gUXhZGDf",
  "key6": "5PtLbZaEVuPJogcH2WPER3GygquTg9Lx9WfNvqR92hW4W9r8idPRcihkVTT4XHvhvwFKZo5AbhwaTD4hSeDLaxhH",
  "key7": "3SsqLGFp1279F2gNW5XL4M6LPdnvHwD1QHCbEa83xZj5RQYy3GBQpxetjY2MTbzH5sjrtHufrQupT5277xv7Xa8F",
  "key8": "3qGNypmRTdhEt5GfDDJmtMvpG6PRjnzoUhKYios5NGQrcFyKDj2CKqA5mGebfzxtruyQPE2MBjVx1YhR2zchePVw",
  "key9": "4xDr6q1Sn5GFkHX8gq6TLtoRBdvX4DE32EMeucz3ZqUriyUpCyPEM3R56PtBNaBp2CFpW8bqS9e7h4ZqDRgLo5J1",
  "key10": "41RbdSKUqCzPeVvZ6sohA4aL3AqtEspsXqXZUFH9yvsKfT4PuPmgTUiMX2anbNUab5ovUa54GPhBjdAqyQsCLSBM",
  "key11": "SBxUPzs6e6L4mVfGBKuYnLwLuxg15Ry1UpymrfnmfFrJosAQGFtzchV7Hmrvp9xrHxctykPiDydc1EXzy8ZjZKk",
  "key12": "51tcC9W5piJhjsnt85217yyNWwnAg3EFrDmAveFesfYmm5cWZuFEQVEmv5w979rnJHKAVtPMRHTaMae6FYgCw9x7",
  "key13": "2cdpASvu1e5SHzbWLEyqC1FJS9DyDp8hQjYD7wcFdggc3oj8d3pJD9D7YzsHv8q4PBHCCHu7rgarqW82Yj3ytQCU",
  "key14": "3LSdNi9EaWGMasrkmZufwu1erqN2GM676gF68wDx4api3i5nUAHzpn2aJasz73yormRfkbcdCyqr7dkjcYC9Dk2H",
  "key15": "2x7hREMSFDmjCkkmV9rxWG1duC88qcKeeZQjXudqa9xBH893JvqjthSevHXcAx7jkv9dZkE5LPseGTAG7DHtouAB",
  "key16": "2zHUGPaVcUdTLhT8p6tjoR4n8Wq2cBwQ8sLtiEFrYN9gcCEhar1mw8xbD7J3DkbudeiMxVh8XkwzAAsi9txQyTUJ",
  "key17": "t5eqvD5uz8qE6im5D1ZFYmChm22pr8ok23yKVCZQ3M7yLBkS89UbUxgtJETzS8QmWE2fyVbTmCvAXTw3qinSvqC",
  "key18": "V2kM6HRuZpq3BPbQCTTrK3RUUnjez5EQbNaJWuMAQ9LkKtUmFVU8amc6YsZEc4uYTj3k7Y8gqTQ2ZWYWaQeHFNP",
  "key19": "Bp93mojPpng38gq2wmALNWsV33hsZYA3Ri3fDydwWPRHKm7zckWY5wVr5U5CGqoBobGTGxZYmvQmkv9zQvhesWX",
  "key20": "pNK6GktNrnHMjebKiNZdK2wDmsrFPy6PmHNCgGoVHMC8dnRbvKeS44dQsr6RC5SoY8dHmto8C2rPrTBPHZu6B3c",
  "key21": "4RMPjrESmjR9YTCH47SfWbHQ1KFk7YYCQS7WjEk2bkWLz1sbGTFQEqPyV4gphi7vDZop84YxnpRstpqU8imfNHAD",
  "key22": "2rko7GAUpsLRgf9WpwUcDr3Pv2bj23YCy7R1RH7hD6STnSxzghycRHvKhm3hUJgtM5qE7b22aSNzjJ2b4JLEjpiC",
  "key23": "24xTVJyeTfo7xJz57c5Pgf8T6Zruu8ETpuZKnRSNTjfdhT3m6XGD8B4uZ9dEDp5UnCh95jEHCZuDKuh33cKkP93j",
  "key24": "3E1jbUiShAkmcrW6QTRikzaMCxeTyeNNpKRQqUFcUR1Gr4vsrJGd7cEdAk46w6pdvkFn7hJJpSAqSsRS8RN3Xhwm",
  "key25": "5eEHpUEpfUngzg9bu9A3XjieyRZ95EM9mrxW3zEaktHFL6pJXiHxzH4uGxMxMtD2D4dyio5tDAZe6F7aKvr7Lq8Y",
  "key26": "21FmQo5nsgi3aTFJ8gS4ACwcTQdk6F68BkzME92Fjx9x2Wz29A7R3p3NHPygRqysbkuHV67XHnVoJ2u3pDztKkhd",
  "key27": "5mTDvwr93CmqMonvayvFpjUbgBeYPYgZgnWHz45DD3yjv9eNtNkREn7rbMv69fjeF6st8Paw18Jt53Svd85H4hzA",
  "key28": "3c77uQQPjvorRzAdWEkbadAn1NA7zgL4wsPRexwv7WK2dpHwQhwx6FhXVncxwhnY3PEodAeAGzafafV8wrMTVBMh",
  "key29": "wxfUTiv69qLZkAwXY6rXS4DiVRSsxPa9UAFN1NgzMV6dkiQFVZmr4hWZkamXztbebzu7Vi3XPcbFnZf44HsU85S",
  "key30": "4CLzhD3iS2N7hnV3CCgwuMyGPsV5nRR2JLBssThMxbf8x5Hr5kmmiqNagGwGkFinttuRj4xDbh2xPtBcjHgTbB6T",
  "key31": "5gTXx94yMcCUkc2UkNEMp3nMBLj3KuVMu2xdEqFRvkp4YsSXLAcZ1PDLnG4ieNnnsNbprPJuk7a1WVUzficaWmik",
  "key32": "37iD9RWoUh68eyy86raDPPpf8E4igkNPnnAtDgo9dkegEGqiYhHcZzaGhrsDsLginxbzRuqxQJokqBPtSd6ug7mZ",
  "key33": "63kVMDQHsDhEeUDaQj41vLM3hDMJrfc8pzbRHVuLkP5B5YrhftdSoPUd6AvPD4fLVrCt64hwveAf8ApN2P7nHnnk"
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
