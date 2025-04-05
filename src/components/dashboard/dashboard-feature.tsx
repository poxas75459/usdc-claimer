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
    "4onmr2kLqm8gEraSCZQ8wdtTcNaM683Zx6V11YWv8uRhK7JkFYExZ3Ti2BaMWaUN5VXgWcMJUgHAnAs6ar7eHjFk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "231egAF68v5aJpHwVgkbuEnVD94RkG6epy4HXWkbv82SstBzK6PURyoptgihnK5jH1shMdwA2Md3YyfxbxA8Pw9F",
  "key1": "46T7YWD57hXqEXXv4zNEVcrCfmFkSXK1NNWFAiuqvVt5RYvmBvUCLuJmso4jxTwMyWrq9okbb8aX325NgkdHGAhw",
  "key2": "53tVvSDUrjk9eLV8ggf1zWDczEDMoFJzhrPBJ1W5v1xkVYTg1wp9zrqtcJoSmcQWdh8TzG19oKEEY92aKbFKUrFF",
  "key3": "4CZu1kMXty34Pu7GKwrKMuKLEtYjA8fE3EeuULqoj4S2FYEq4F26xu1EUjLKEouQTQXrDWELzQDtQHsQpTkkz5GA",
  "key4": "3ZqUn6b6jct9Z6DWTDyEKDkZ4eibLJJUuRtpNJpFupCTXkEp7HLXQJJP3FK7MNnxfFdMntXXEq8ZN67RYk3Re6pn",
  "key5": "4fYZGRePYcVCt7XFxRExzAexH9Ryyepk1syqSxKBzkEvs9rs9bZveexEbyTovS9gQa9tnqFMdbdVDQLtHhhgyFVi",
  "key6": "2dhz9gZFZRk7wvrC4nMsdCMBAEsdQuetuD8X2rFvRDHJiPReqPCkg3XoqnX1k4smKqzzrX9v4wot7uci5JCk8pNP",
  "key7": "z1J7i98etzZfWWsnxu893ehYWNVKxEX9iKLD2A9Xm1nYdyR93RFdcZf2rHAUNdog63aAMnrHSxf56vCHzq2o3zq",
  "key8": "2pqyUHQh2ULFADGwKFYagTXDU7AnsfstHZr6gnvv66xpRyRDZMB7MQNUysTQVUwfGERJLwhj2Vr699czfUMTSCyt",
  "key9": "5qVLQEetkHMKofVcopp2gVqrg8C8mrWKPF65zzcceQfwnGPDAzSmvRMzNwsreJbzkbjY4TkiKrWxout6oK8vn9Rm",
  "key10": "8rx4EayS1xJPCzyy5rYyXyjmHBDSjP28Zyk3puuCJyJB1fA312zEg76tbs6Xkak8s82KdLonVL84yLnuuHUWNPX",
  "key11": "3J4GHCD5RZGoqkGiMD8HdNideUbvqGgeTooUfnnaaATepx1FzniQ5qbxgy2t9geDrhjfoLzmEcpKSt1fMFv5J6vS",
  "key12": "2Ux9fCcLEJhmPJfixgCFBuddGfptCHE3ukcX46AY2mPFBo5wnPxzQvXYeeBzQhfpZWa4BQTWi9vLD6dbXN4wotkY",
  "key13": "3hbxmoPaCv37w6LqMiao4fyiesKKjBmUZ6oCSgRv9U4nDwK7zWDdViyS7pCiZ2ADn3unYkJ9HeEbtwQQa7fR6RFF",
  "key14": "psRjhK8hCJWMr6jpRiVByWCg6ceehYjrR7zBrqySet2DqTBHePCEHr7MBAWzx8yejagG4T6883ZvWKM7jSZvASi",
  "key15": "2i6UjiWBqALcbuutAhTxYu1W29jUFTentH386n5Qy5iphXvj1zStFCgnsjrFcwJNgQZgWxhea9JL3VnYi2ujFhDe",
  "key16": "3cJzSY7yGFPzvwBCTCABpfnbR1ViRrzfVgBbREUJg9qxH2ocusTD1XV8P6idviLa9XNxP4PR445xvw6kxdyN7eRm",
  "key17": "4UcuVzS3uELZbhCFk7BG1ijUbdeyuB1n7eRszxRaNcAXwpj6aSKabkuBuCUPsEMLH1PRc4NVwaSyRaAtCtuJNwJ8",
  "key18": "2c6pzxjSoDmCUcXzhWSge1PasaPAeEH5y3FjLjsGohuzkn8QXWLkgfXeH1kMN32qTcw1zXoErpgwER4v34ptKfRc",
  "key19": "9pZYat8tHNhd5B8LoJW87pRoeYwF2o9jBsAofDy1nnfuFkxTk1hxdraNa29xtJ9i2ZG4AZnfcyg4YgHLoxWPgMk",
  "key20": "4bRSBNxTbfRJS7e7Bfm7px1N32qHq9M4xM3Eqgbn8h1YXpejD7zWoKjzMQkKqvbY5wfhE1mB7P4MdZGy2wi14NmE",
  "key21": "4DR66fDeaAiFVvwFb7QSzxtyFdubHE5MJqw1QrNjdAfpUxMmCmX4gVYahwMNYj1jHBQ2ufA1HZyBBnxM4JXznZeA",
  "key22": "5XStiEPXvSWJkVepV8YtUApF5JSjN3UKrPfXifLZDJTUWbEeLhrnarmjCPU1pz42PXP5w3gd92rPuH7ypdYLeneX",
  "key23": "3ogQomvkBrgndMpR2yyAnUwyYDpsyesEyjK7DNsweDHnhgcb2x7WWtZZ8cS2jDp3nusKZGvbj8H4F9kZeh2d8ZQz",
  "key24": "4fM2QEz2RCQeRuiWYD8ktQiBMeKBqWXjke748zacEEeKQPdmq7bMaiubtzKR2hPSPb3q6FAW87hgN1wUFsFVQVnt",
  "key25": "4qyWfsSDzQGF4UWdA7AjKahePAGzfNerXHgRMfEjzv3EBiDyf8TLonL9cmZrZBRZruKxR6uWm7kiVEG1Dt3ASeGn",
  "key26": "v1VveB5i315P7679n3uUdUKPehHVjexhw8FV6hGhUhHRnTybCUwRTBCxEGWJKRj4a1gSHHiDtWYSwwSbQM9Gfyw",
  "key27": "5sb9c7b8y5MUaBr3ZaTp8TNtdNaGGvePsjoxaAszT1Q2YJXgAG1LUAQHQoEgNYCzoSaVVbpbPto21HoiiR8fCHHK",
  "key28": "4EeNnPZBLLtQSezh57SsZ4fPgRAW37WMEnS5EsQB3WMHnsddCvB3vzK375ructGCKx3rHZ2p514SzvpirTUmrkNj",
  "key29": "43moWZB9dmVMDsgcGqkn6XXQCzTFUygs8ALj52qiksjr9iwXoVmTN4XtGb2sQoS3e6PWWMza56vyx7m3RrwBfjBf",
  "key30": "3k4qNwWrTaenY23HS5x3GhAMT5RaZtkht2sjQBEFxMpfS3eYcBtZDzipi4DtFJMReKRcu7nvdz7KCeehidwZhCf3",
  "key31": "4BMHGp7HiUQ3z5fu8b5WuzKFDEK5ecHDF4hUAEqLgGMuatMjHS29KkXprkbziK8vkTXRzrEsNe27gJZeDsat1MTF",
  "key32": "54FKPZHBTwws4utVpFMN34Ji9E8ZqTDb8by4hnuYU7trZ1EVS63VCvim1ZZtKuqyvM5TCpVJGcnyf7wuk49Pmrbw",
  "key33": "5sQVVURw25tHjF718iAPLBcF47qVZnAwTcYLnACP2QPbALnaTQdwYsR9HkQzCn4vPVupEiKX3AH3auSoDgnqDyGe"
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
