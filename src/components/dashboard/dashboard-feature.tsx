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
    "5jnATYwfmPNJKgQPwj3mEAvQDEA99kG3kFjDLn3cCPaPBQWDyAff9xPZGKgVZmCm9g7yuGHohcYTDao9YPGKRbpo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DznAie7Wdxb63DuSdSuh79EFtspD3C5b4MTaz1k2qegqCmWUfcdL2RHHuqaK986Y4XasjACd2tcKpnQEiimAevp",
  "key1": "73uXJmdiy3cgxAC2gWFPL3fNJaBHCWdQqe8fUXerYFvuUBEbWsMG56HpL6qA8MhnT7LHeU1TUND1rvwhMsLffWL",
  "key2": "5z7UHGcMdFoSr6wDCJXQ2AGV7TrT6BcoJeFvsyqbHKc1JGrdEt25J3dM9UTdrfHjJRLcujPeVccbms4BGthMVGGw",
  "key3": "64xA3DaLUvxiFXmRd1rou93mSy3VRUq5Z2fQngMm9qu2ioZw3wfA9d6HmdYQjAz2K9uAtVynf19U3vjyQUHXPYcM",
  "key4": "4QcrZwkcrcWLBVffBb7auogHG8n6FgqSeeKYWcWeT54utJaLR3mwiSVNrCtdntqfMrfhe1cUjDqUkVbSMPMwVwKm",
  "key5": "RABnxz77eHBXxxR8U58gRd3vLbva6irAxPRi7nLoGYBq4nusn8fNtD17gLzpZF6vtzoH7peG3x42Z3nqShW43Qv",
  "key6": "3pYyWapSMUZf8rgPg2XgkhRJF4EG8pE7ca7Lk8JtCpgYfJwmRYGze6yDf39VuBsh2Ddo2nfmnTegsoJjZrssE7qe",
  "key7": "4HrXfRV6ebwmHUKtTho2RXCAi7yJrM7pJ29rdqCgX3R2VHYPGcXHPpbohzmUBtVHyjPN3Zzgwx8pXK6yEHVCMMxk",
  "key8": "3Jc753ssy5hU8JPBy5dee8zPFHTkEpHEgLpS9AE4QcNK9woJJWCxcLnMRo63LJhXofhmhhh8XRobrnFUsjgiA5kp",
  "key9": "BaHBekdc9ETpt1ieuyGcYfVNPV4Y6qymWYpfMabBBbLQCpKE6SM3H2CLMRJrU6yrTe4nDgNhwc8pzmYCiSBzMXF",
  "key10": "3JwaBANn9qY5gTtiMvY7VF6aGzGkHpGku8iMTxLQnm5cq1UCSCdmPoz2opCrgRaA3nAEo1f2DAbGXSfsVFPFv4Ge",
  "key11": "4mPd2KJekfSMJcoTk8n5auGEWn2jAS4s6V23DTT8kB6vDR64xLwGZXrCsoxQ15qtDFmfrGMiiP1gPCfCnurYh9jD",
  "key12": "5Md2q615uM5KW8tfAjMxxDLoE3qKZ8SbuFbFNE2qHq3ZghXEnqGFcAXV9WnTYjE5ZtjF6fohjJCLKRtU4jtDYRr3",
  "key13": "3KKkUqCdpm8ay92ihmrJXE9dfy5743KdLb46PepRninqrfPvKPPovUf1AF4SKqYoCsbNF4SXcteRkQ1533F126Qu",
  "key14": "54MUBMonQ4yufJjxRT62T4Dh8bP1cQRAJpPvcJrwNh4dVzuHufHvHJnQNCYnzt1gGqgTCa78ACpWWY6ATNYuYJ3",
  "key15": "GuN2KcQUtESkZ3TQQVmoiHbnaLz55M29HVh5jYhoxtAKUzCtdNk1YjxVWBTTLEcFGYwC87Znd1Uuque4ChXxnZp",
  "key16": "5v45tMqbbv3aMtG1amCBWgqzM9nY2n6NzTxS6pkNz6hCn1z5gjds47q1yhM8dt3XqfDiQzzR2dBNUYb4BrVHrAFC",
  "key17": "3choh7Y4SN1XoJ8wrq3vP3mCgKQJbfZCLTp5YLXZieiQDp2mhwdjUuFtsmVnhbxhz8BwhEnvVGNW9aEu8DQQ6Lw9",
  "key18": "djvZYRoLFoDMxu62f1x3YZ1nzHNYmhsV64rnJMiBxqBqyRz7XQ7PudzQY1dZMc1yLVj2seWvioEASFeiRNfjYgH",
  "key19": "3Ys7N2APGqUCGYCDDqEdcMeFEkBExJpyRUNoRPpnLPUigUSUxvheDSSJqf6UzfN2MadfSbxjQyZtfp8u5UPQ2fMD",
  "key20": "4qvB8FU8G4AxPvN4NJgG78CyoLggxuEYE4d889YFKhZkg2Hanf1QK4cB1Hy5x6f4wtq5MUpWscWF2c5yUVq9JfEZ",
  "key21": "34U8mT7EcKs9igou172zwW3cCU4YD663TH2T3sJd87dznoLgheXhTmPVSSpJkNNrfTeYtPVvKPqM7qPM7FnBB8Nf",
  "key22": "32hJaWPi1dUkJ2KUhNQCdTaFsGHv8PVxjHL2VPGUPXUBwQAk1L4YN7GHjXNTv4AhYF6M97V8VdUQzoY4YNKKQnmy",
  "key23": "5X8W3DEgFJLSBgbnzWfmRUwtfdqnZTrmkE2T6jm8m5U5D9WDom7YeRm6qMWnfVz8kDMf4zSDd8u8zPzGaPHkPwWQ",
  "key24": "5wZHEnUatf4ntyyBGo9mtUYAJCaJPL8apRft2iXR584CAtk11ENGtnU6FmKT8g4HMLHJgCbNta7iz5KSsGMfH2UD",
  "key25": "1FHr2VFz2K1sxcfXKLZXTUASFkB7jDuN8rgph9UwPjcRiPiBH9wEdQbU2jdATsYWUqBexCBqPzjfBBiDqxWfpD1",
  "key26": "2mYnKuKfBzqH8c351BCaEBipWDuWBHiRdn4axwwkvtikgWdAbwQU5Ge9bWWfDvtrsy9C5fvwez48bDFtAKgCp43j",
  "key27": "4JcQRdXd9KVcmAaeNKBquiuF2FWPiCLvwXk8jnNHzSrUGmue3ccZzozMcknLg1BiHctt5sh8mDFHjvCe39Gj7wh5",
  "key28": "2Qjcwe1XVpm9Vo3kw4enHhYFPdLirQgrbidew64L23gL8FbKVwrGTUwFiyazi6SKqdDTtUKaQUcdTa2ukFHWdXGU",
  "key29": "3UUonFmSoCoGFG6iApt7jDB8MpZitaQSiQ23vmVdhdhpSmWx6U5MEfqPFmsnJDpzZhjWuBdzGTs22tYnxRw4xnFG",
  "key30": "2FzUcyi4FDLLgtzh3Ddcjqvzkti8uQGcvymvJsS6a5FPNjoswpYPsrhah8xSokkZ7WUJEyfq3So7tNgpcnw7zUZN",
  "key31": "jQBmfeB3Y3dx5UhD9MoHaQgHfRRuDhLYnvZrm2ogrPrQ38RPwRkvycuNBf4wJezan7caJCpHW1WeHuc9yZyAPyy",
  "key32": "3bUi6dYociipqDXSgQGqym8LzNRsMNUz8DWL7TeRdSfQoEUoMi551smg8nRqxra7FXsM58o9MfnfUMFZFHMPdoq6",
  "key33": "MAvLrLJrRd7qNZVcwMmdYb1QRidfTG43yLcssrJ4BpJPBUJacrL1s56gmnSMtgJZ8yKgg4gM2yMQHUrG4sh6U39",
  "key34": "362Z6FBtVmsrhXHBaUeeLc3FfJpKnZAA8BUnvxxgRvijGprifevzZ3WB429FRP2vzZAjFYjXFbxzLD9noFC3DY1B"
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
