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
    "4Qoqk5rhmdhE8xB23vYWh8JtXbpyoh6KphPXeL3xD6kaW1t1mAwZhG1iMdcRTPH1gaNt6dmxwhU1ADRjtXuFHDbd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MedRWpYSLJ2Kh4BPXcrFfmt2hUw3j1YWhvq6K22ZHGwWwvtdksuY9gFNekLhhVr4K3REJk75Tfxp8uT45aNPjpy",
  "key1": "2URSug4eJzVY6n4wixD2VPqUn5bF3TBgCxgs2LJwDqJoodke1PqLyQQyZpgrmEfid6Eg7gPSbJMnhgRwPVRfDoBr",
  "key2": "5sPh2MsJuL9rvAQNP4g3iXFD5UPjZoEbRkvShw5tWF2PQd2ax726RtcaNi9ZWpNtVF3xvk4LwDtCM6DvUiEs2NUF",
  "key3": "3DvYR1N9fWB2VN772nQHWQL9fwGNGyC8T6VPZJiMiQHUCANvQFvvB1zvpJfHFAkfJcG6EtAvxUHyXiiQXxXkxGGa",
  "key4": "5S4FKpNqGnnyvoaaJkud3hR6Ljq2Kh2Wb5eDogs5avb7C6WaBByPfshcBeEsCaLiATrLzGvEWmMFhwhc4iHmzTsv",
  "key5": "7kU16ketzVRbQms9DPTiTu45HCUBzYeuzc3SynmUc6fRzfU1NgoPdMapQuSh9zvpVMc8JMhbvP7w7m5EoR4rELX",
  "key6": "BVQ6Piypw3BKGnZSavQBTaY6kTnoTj93jiA9Z9CTeLb3cqgdQ7S43bny876qMB6NGojj5ZKr8W1CYDBdrXCRXhQ",
  "key7": "46b4rwGisGEHDCrsAgaFkWM76Qtz4TeU2cQeJSWTXC4pW9ECEEeVyjXdteNLN5QiC9mxomHsbSkwFT1bVpmZQkwZ",
  "key8": "632vxVuGMWZcG449VUiVPSvevw9r5WXdGgUEq9WsKL6H4GmPrxc6tSmPrsA9vgSC64LmZADDJGqDvpkQTKQr8sAM",
  "key9": "2pFcUwP6MXoSz31eABoCjzxKQMCihXhskdLvENzGpTHwvz2LmVtQUmcHQpR5B2h6WCKpqJsxxyRCgu56899v5P3E",
  "key10": "FCdFCi6ebsdjSvk4jPBnG9Cn69qx1gj2FPKuoCE22U4eJnY27NnfQmdhPy7fAEFYwTHE5Su2V618shkgUaaZeST",
  "key11": "3Uy8izUDH4jmhY5ZZDNMEkAh6EnKJ2tnNEKXGoeD6JQ2bQMfshecvzinQsChd6VUQpscLfiYqGUmHmtyntXN1uNv",
  "key12": "2GVWfiGhTjNT7JqUMCB3KUQdijfBu1MLmD3N1kXspzf1B7X9RqVSuKFXDtgqWsf1fkDfGdGbAmzaWLD8RuNPXmaX",
  "key13": "2Zp98NiGsYTMbzn8R7Yy1hZfgjmGhidsDkhapw5uNCNVAayP3WvJqTXU3dBz6xBQriAV6XQpWT8Sk2wvYomSeycQ",
  "key14": "2dvLRY3xx8fd81qGWzUGBaZtHEHMqvHPdqCTJwV9i2V1gzeGnXgLF6an14QdyQUGS5eQZX5pJEyYKHDT2yZRAUaZ",
  "key15": "2v6QYiL6zMCXXBAL6uKdp9zmXH5LFWsCQR7e1scr3VdLKCRyN8w2NXXo5evpo4GyXEkBGUPPwBSh2A5tAVtdjDNF",
  "key16": "53RsY2hZRNDqtrofgYDiqcCN2GcoKFq22yWRgzLE2fzpepBJK64rYX7fbcwCX6DbGaCboDXFM1dTNQnk6uvVvFmE",
  "key17": "2jZ6C5fW7HEhEqE4Hv935NX9F4HnemF1XU5DYCBfuRyFM3YbbL7i8JSoEJFCMAVQnxa175nBiqZWjEhyk3ki41Bx",
  "key18": "5BzkeXYmzBW9MMaCpPE8rBoRJvNBk9g4aZPvqKuj2mTn2FUh55muGtP9SH7ukmrPXZe5vWvpiuFd9Yb5sbVQyXQn",
  "key19": "4azsJhhwEepTHxWysSzkFC9GUuy9YYJoboF5g2XM3VPLLLybTVTpSdLkX6ihpnFEbd4KrTVZxsk6sAKdvu68QQBU",
  "key20": "4DwUcuPHu4um8LMuRZLorbe7ynPhFnYNEqFbXJAqHyk1NCXaC5Y6e8fM6EkMdZULzn425Q4Sp5epkPvnQdPeNdrm",
  "key21": "2VT1vV8K29CTkbdUiMndjYYnZdd5xTQ4eYgQ6LE41oXGbmk7vJAXAvVEGgQne34GU2aZYntxWthpDyoKTKL4Q1Qs",
  "key22": "2oCbFYqvJeyeccc3nfhYXWCupzJWMdr7Nro7qHFE71wmeLdVFtkSChgW8uiYv2vaQJTbQEM597ZJwxfqvCdyKE5o",
  "key23": "62RqHLAfZputSRA6Zxe9zYR4bZM58fL3Nbf3V6Peu4wydAtuBE7QM3ReEXTEUni74H1YxdQAdrfmjRc8UiS1V9YT",
  "key24": "3mRUXaaJtTZTeB8YaRYZXLx7W97TtuGN1fwL9XANfDYGVjukWkfrdGDgKHSVdFdBBEZW7s7c2sXV62zAcSKN656u",
  "key25": "3svroBi6gm3g7nDbLNxv45ugbxnNPxznGiX36RZzLzjr8f6XxkhyhQ8D31CtMsAUUGw7WnW76soKf5DRuiwBVh5",
  "key26": "2K9QfyAcbxWoHdRGBSEPKHKpr7WkZewSmcAzXySSyPmWzMVd5ZkMecoo4qnRWKUVaHuJsaY9oGU6wGXfmFsfAgkD",
  "key27": "27Z2a59oRqmmz8RUz4bDS7CDKrv9rCE4gpmYPvypk3sb81g7jjCppKV97gCgTu5drJgGGgS4Uzdf5qDetLmpgbxb",
  "key28": "4H7kRSB9XgS8FQzZw2WAC1B2K9ZzAvYvBxXd3N6AkMxoNBqQjnu8NyqHyEpYYdZmRLZ7m1y5ccXKU77PkBfBoJyY",
  "key29": "4szxQvH9JxfWJZ8A11bpTnvxkKx6GXHCmyhUSRTT9k7rXRtaUNNdbm37KtwwfWZfMJhXkK5r2Yffs4ARwuLdJW6H",
  "key30": "5ThVDRQM4XnRCyEfdMYgdWa2z4nk5Ma6Lv2TrozBzeTg1VZfaunigYQTWbAfHc7bPuiGKKuj4jBEHNBf4XiGpo6G",
  "key31": "s9xGhHzFNRZJfFH8CZSLDXpB3w2M8PDCAQjKKnGq59iEw1ZyVTM9SvNC5cQB7fAAtxa23kr9uLpcnuwKgi6A1WZ",
  "key32": "2FMMfKCqwKMHJYG1QFqWXvrsjTLBE9Zrm5evCePjFyShTvPN9iHgTNgDPLvuMWu7Zi6SnDCz7FroYFzZkFyCCxaL"
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
