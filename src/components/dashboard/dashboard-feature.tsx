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
    "husYxRsWbuhCYvQ7ooXiQSU6ERr1xZKxW1nM7qHeQLtY7gntwN6GuQKvupZpKMZ3F5R4Ln4GWRVBgQ95mxyAnt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t4GvuU4ZDSSaKm4DYQBFaC3EQy9dvbz6LDoF2dpffzzkzZ3cDgL1iqqZzc6z2qFpfTSXkuhZpmRMRJEvJTtsTdt",
  "key1": "2UH6SHebowoVzNRivNRA3Qq1AwmYg5pyX8cVCg4iyzTEsvpeJdCH5zUZ56bPTArCAWRSzQQvBXUVubrwWjFeAMbn",
  "key2": "3n9W4VA1ShSvn1CXTnJSXdLJuXvFNxt8i7aJAqBhkEWqAmibT2vWvaWChj1C7NosEmH2Aj3eMXUsmzAxif7AYBGZ",
  "key3": "4YSdrzok1mY1DoLvcpNWQ1vjnoP12UTPekTaLLDVHWc8dfntRhsAgZ6CYMPmAXxYo797PUe56zCUcPcUoQST6Yda",
  "key4": "3DwpoCCf8ZtC3UywqALv2y2WHBd7ZR2BjSowtoqW9uKCUT18HdRcb4WSEsG43b3aAvArPkr3Vx8hLqFR8SPEV81T",
  "key5": "4oLtoAJPfTr8skqp9viMcCvLfhHFaMP7AS1JhstahGZREbwuQBkbpqpp6MLLYqu3XAPc9DaRBCd82gZJX4vb3zA",
  "key6": "g7anudHUPEz1Wy58xqEjGFxmH2FnhjoYQB4bwCNDp48iwNTHAWvVmNaFemHFs11bydagPSfvBuXBMeuECC74zpR",
  "key7": "4EW5GsPbdareBS28HHVvCauZxLsGG6VEMV7J6YvEdpC3nrab6XxSWQs9k7jfdW44YCZjd1MK2zuZd61et3dqa23d",
  "key8": "63ftJgNASD8NyvUnqGsCnJK4Q5YEbDMH36AWbkjnLv96G2RKwLjQPTkJUo3DuqXHvEjMJeTzcDwrwc1bhEXt4bFG",
  "key9": "VP43yp6K2MsHTMMq4V6x3ECP22sxJD3MTvde3dcmRbdswRonKc1YJGR6Aw7xE69wBWFS6ViBG8bGBhNs1j6fRqa",
  "key10": "2oqLk5GFn4gANJESK1mj5o7vaRToWWNaihDT1wiTPCKpN6JLPkEnqLgGHfprLdLqRQzu7zeQF4jz1dPw5Bc8m784",
  "key11": "4WPmfyjxVeFB5VkRA9agsbW5Y8Swe1eewywuCoYjCFcL8Yet8rUd56iZ5nbZ1KQMkGtfmUNKFQLpdrRhfPbRiJ6E",
  "key12": "5ZpJjukDs2rGdLM7q3j5rKmGbabwbS9Bv1WNhPXQbMCdpuWW5Ka4KDYmKNLPiHBe4jY9YFv1Raad1rDQNngrVpUK",
  "key13": "2BAe6r5pcjQaVgdApcUzr2Pv1MaNmdwzUfMjYYQPtXyrRP1o4gyaz6TW7Jm1fTYLC2tGpHv4AnNYUDqnJkRDqJHY",
  "key14": "w5xPJou1hCrxuPoV6NWioKHZsfQTuqFfZRrLKYXjRm1N6zSi7V2Wuz46FP967D4JV64WTzVYUP8tVW8Ae5fhvgp",
  "key15": "5iqzfvND1biibaNoBEFN3wXanE2Bb5yZfv2G9yMM6TYYJ1fKwQoQer6UxJ1K7sgWwgNYYBca8mqnsNs4YjzsyMn2",
  "key16": "5nUgwdybyAk8y2LhypsrWt36HqPd46nwYZko7GJh3LtJKyxqpAZtmp6rKF34yR5f5HigELCfPZLrqm1ZnXYtaUzb",
  "key17": "3jYZokSiSv9FD4waJEkbYfxkm8iyZ6F5F2Z1w55jykiaMMZDfGmcYzYMdJm3DaQ37bwZM19H6Fs9bTWr3kAM6YnY",
  "key18": "4toRKHRMBV8kiofgEb4ZysWgQyW6PsYtapyzmh15pAHBaaushtp2G1EEGCfkUeXV4EPbhxGiJTT6cFJtJGt2S6qJ",
  "key19": "5hYgBUPCinWAizrJm7h89vg455LsBzckt52bSAh2pxYyhwkAaAcYG2kqXqgNMnmG4t4uznpPAnJE6NTHodJGPkbV",
  "key20": "2F2pL3phcKQq6ZT8eTh44ngg4zbtNDr8JDP2v3GpHvtseforCdb17vWEFYU4SpyDmvVRP8XZVMdMnSYHtz6YCNWF",
  "key21": "43MTPUNEkwKG8WBroaFQaWbSXHMdGgPLDSS2xmedT4LsMhd6EbygKh9wkj2jKW1MsY645YJvZxQbhCLxiinRj6WM",
  "key22": "2921wEt3e2LuAMSQHmeD8jyGzUTPC4zh74p9VQNAb84EQLEPBMEYq9MxoRnTRL8ZQfPuCSPgEANR17phUh2ZS9xb",
  "key23": "Zu8cQ8iX5e6KNYSFAagRVBjUCtzKb5EVFL72LoHUCeGo1sZHjXXB7LKqboGn6WZwFAFgJmaAszvQXXmBZDXnMRm",
  "key24": "MJYu2rRzJQS4FteHzRGMo2HTTnKZBQQ5P81YQCZK9i4kEtH5mdRn9mWXQ5N4oP7Nz4JwTsSK4XDKGmN9S28APYP",
  "key25": "4d1mZH8pTGZ4P2X2qgkVrTXToqQma2wx3scXkg9kvRSEvGHfarNh48xen2bSGKp7jXEdYi8pDDbrSTudQ4XjacNc"
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
