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
    "3LHNcCCnmhMTWDLDjcRKunq5dfZ5Tr9dfPygwThrG1DiiXDhzok3HTsG47tu9SFygoZRc9WCXb2VhRKa8nZN2MK4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63yFdRFCqJovFM3B41AG7QF8ke3L4DaBk8VxQVJJMsfr6V7MsHAEEnY7AuqvU24VhPk17Wab5b15qmtEdho8Gkty",
  "key1": "N7mjmYgnPwu4jN3admvv5SiERNNqvHg8EubcG3DQX1RKLjhtC8RuKEyNPsGNLLrJNKwcw9tdEUJapW9atK1bUsb",
  "key2": "ZvtReB4snWaTkwgUUvCS8PffrMndoveHya7mRfZbuV7aJHqZWxWYumiQCw8SbWPsaQSwSj7jzi21FTi3TYCjNhS",
  "key3": "3xzvfeKmdpFgQr3TGBHApw73pVU8Wmk3AnhQqv2p6hNVe92NeF8qi8zpMcn6FA46EuNg1NqovenejFHmcGC7mcPL",
  "key4": "42jv4b3NvGV34x5U6nHARipNPZWfuGyG9P44ccaySM1nytSQacNCju6qGe34RkokuKFtN9QiVD2jGTWUWhpSn7Me",
  "key5": "iLBxQ9JNMGpPs61RcPzhMphVeEV3XT5LRysHywHXeV3eGVxNTRv285zA3GopyPg8umavzfpANwugHbDS7F5wcBM",
  "key6": "3yHp7s4oHVug27WHeYT5vZu3u5xvnEw3cPKHVpEDvcweSG9UsHuxLgUriSbk4zLv9TzTwGC9xUrgB4Zxr3R9vsTE",
  "key7": "3ghR1tYYEvNoRdzqQwcu3SQmSsxPoRdVHSWd6SD31SqTnf7A5pBMqtTUao97v6X8me1cXttv7QEyHTsZn2FuVBHP",
  "key8": "329gANm4j4ty84ghCex9WRSX3YW9JNPQ8ommT2GrvogQnSKusvTsxM2wc3RGz3uC7ec78w8njFR1NTHjAuJ36QLL",
  "key9": "4LcsJuzHXVTuWexR4Z494pNA5mPLZ5GYkPTC4Lih9ygVjrFVyeJ323Gs8Ax9fczhEkT37SrYLE19QvYsag2wwnEd",
  "key10": "U4NmLCdLGVRvnngpHDAQcdTTGETLQQMWPZ1wJnMosghAsZuELZx58APD3NVg82pJjJdqDkSsMPGbp1sUS9fUnZV",
  "key11": "2q3rwEKj4kEK2M5rWYfnXVxgAfQkWmRQ4Vv4zqeTxGW9dszmu6TCZXtN6PfvSa9Eoo1MH8ZVE3nbyb9G7XZwwGHi",
  "key12": "5tx72hTEb6bKQzrYGvc41Foa4rp5gtxZfXVcKAfx9oa5ByP3zVbR2P3uzCV8zvgz7rDtz42gij2Ndzfq8SxF4zAC",
  "key13": "2j25fupWigyhgJjocgrwCDSxV5xZKX7Rcrm673ALvR5FfopmVanu8bFUvDQqgSAk6FfGWcyc8eFBP89N1rk1NV3D",
  "key14": "3f1ASQb1eqzS9LyWiqX2XzceGs2GD2eCHNvbci3KWH9kD1PccuTEEwYz5QBccwWeiZRME8xRCFy1H1r5F7xDuGVB",
  "key15": "2YYYVdzqGT5APXgMuA5Y3Sg9ez3tUZBATGdSoMNG7HmvvigtFAdmDro99mmjoKoVWehviFgUPd8WR8AMzkrqNewg",
  "key16": "igKDwomVMJf3dnHVzssXpfAv8zeLGnXktxGmWVfXpJDrKeS1yZJ8vTw7U5JjYJ8Myjeo4n7DL32GYP3fkQUpx1H",
  "key17": "2GhxoFzdsW2S5kVJ8Fr6f6NftTK8rMZkGhGy6xZ8Fx64uxgKLKQWBpF7tYTSaHrUQaYz2gpDaX5h9QgFUNzt4xds",
  "key18": "2GgvBRqQGR3e1TpiCbSXLPNSxcSpcXo9ZwD8wuyFxd8zuGPvLM476MvSM1AAc83Ji8tuEoJ65vqbtQpFBvnq44RJ",
  "key19": "2dm1izgPY6b1git1FcQkJ12hmDxeBbYnvYnC4vZZfAYhXSZYBqcXYSB4hdTjEWZMFvui9jkeV1XRauk3E7Ffo35t",
  "key20": "3iPGpbZQvHYgUdPWfzzNkV7bY4NuC1GJxPT8Bieo8BH3kCvwkpr2ARMLBqibLej8VzTk1YFs1ugcSX8R6JaUptUu",
  "key21": "63Dvu5XWL3C7DxoNeANRPtLXWQtHMtVVvrVxRy8z7RUqSgsu4R6eJ1d27yvWVVtEzzKbYz278MnDoNCgTurTaQKx",
  "key22": "2HntweqNZKML5rqLGA9Fh7BVvha7qyN5r2MszpkSNAdXQtDUiEvC4zyJ7caBMYvouaRvVBTFWq5EMAiAYRdJvrht",
  "key23": "23ktoU85CyaF1Pw578gTSxZn5i1o4Ekh2bnSgmigcGEJUCYcTYKrV7aXeLoiBnaaMdyMecKfF5M9eYb5K1T4TLZH",
  "key24": "4WovK92tYiXNHZHaYAfWYE9TruMh8y7aECj5iYVXF4tgMvhjUPSiYRMjBX4QpUEswg2k44yTt9icjYPSKpipocZu",
  "key25": "3K9U7NmwZ6Gm2iArhTfRcgtSqST6CG2vRoxeXpdWs2qsjP6M7ubrtAV1aFobzgBBbck53iAJV6HSHsJE8DRCbcTy",
  "key26": "5yE1q5XdtqZ4umjhyvPxDRPaGRXGBnCaYSuR3V7244D6tViV2noixjYQUNyFkAnQVfYxDsovD8ZcV49cSjs67He3",
  "key27": "46SzqSBuPSyEMji15We7te7H1KYezjWG4JxTj5DTY6HPHLLrkvsvpXEdHe7afepA4MLjuhH1TXnbTLJgR7FxmAXZ",
  "key28": "2g9SuJ6M1Pzdw67sZLYVEhTZcAK2D8Szzhcy8T3BbfGBYw84Z5x6BjBZMXhx5oV4Kdr4MUfY9JwCykTj7bGnYZDy",
  "key29": "2MpjsEHreN95cZzzQXGcJxznJP5yyEm27R8sN9XGr1x6kkTT7YKYp4cX7manbG2uiFCcVBrC1HWUTr4HM99nHn2A"
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
