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
    "3QnbW3aymtcL1cM3G6TkCHHFD8QeUFYpghLSz7mW3KyjCxtYQDDUn8f5GxMwRKhZWCNofRSZfhDm9vxD1MVChYpF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Swod2avF4Nah9TRrmMTGyxuoA3Kq8duDrfFCKVdMBKNRJVg6WoGo53s7yHJEw9zPD4TWm7tPeJcXXzJM5Jxxkh1",
  "key1": "4wYoUovaUDB4CrYpkTXJFGWL7wqyXmQuGDJD73T8t4pdaPACKbVC5hTx2FTfrrTyafmmGjGbg8CFatsiCMxNSp9y",
  "key2": "DP4Nu35UstbYgo3naNa97L89pAuKhovqiuh4qtXrsS1eCKbTdHbMnz2pW9yVor7xfMp6xhxwRDDzZ1MiZYEydxb",
  "key3": "2WBKYKNTqADvgpbcPmbVEP9Qx4auq77jfYVJv8NJ7HTeV5TSFLUd9KwBsEipW5v1YKHLjmC4NF4vDNe5HDoGTVQw",
  "key4": "3cVtTvhDVFCunnfJNhLodJgA8voUU6pwSCKsBthsAtKCwtqD3npReWuCHDgwWtyyugYZ3bemCPDS4p3k4nVSZSfZ",
  "key5": "5MpvebdG8yxxG2gge5ZbE2RJRwpvwSvDFiZFhAHu6A3HB48Sgsm7sGcr7f7vwAeH7Hz8dj9hUDhjSxrDacH5rBQZ",
  "key6": "5w3j56og5tDNdWFZcAV6mZD3XeR8PCQHgVatftjjR3zuUzc7MogEQUYRXQBx4LEnMhVaxTTwy3W66CFcwjJ8Mx6v",
  "key7": "5JHRsQ8xhNZizGm3g4TWU2WLqwYqXoafV6ZMM7dGv6h4rn99dhDdRmYamH3WLHyBjcyznqfcnitejbAScgv3hYBb",
  "key8": "5Ks5W7wKATy3vugrP1eXtjid58NXQJXCQpaRjdMUn49VDzoNDAP2nfFZgEgiRUhDuNuQCPgw9RZrnkb9gRDapUvN",
  "key9": "3PFvffXrdCbWTMA8Po1Zmn2nZYPp4nk5nHFpiQNgWc3fhs7oCHbxZFNeBAEMYB388gfsqj4ii7grD4HxKVGXgZ9u",
  "key10": "2rGb8n6Rrdbhg4ygQSHL1WtU82vtk3iXQ3pU8h5M4pbDgxUomMg1AUMuNXe9H1469oDgfRkw5CbW2GQvBmjASFyK",
  "key11": "3VF9F5yMdafKuh3F1cj6HgEsPPJyL598wheba2Kyi7gaLUjTVMXe87idesrr7S5kCurcTRgpadM8zVrBnRKwB1uK",
  "key12": "x2kgNxTVwVW7AsxG9rNxaewCaVkr7Zxj72odW3iUAvJb6GumQA7wEzukGsSyAHmBS7WLXHdBa45Dyq5hiDHUbzA",
  "key13": "4AdeXU6KZrk9WAtwp9FsYv5tRmuzytm8VYBig3om2aFgsdNKC31iNA53yukUpff4oX6sS64T44tqgSqHpLYA3FA7",
  "key14": "5tjEM5g6a4pxr2B2BCoGVv2upXZmNW8qPUQKmp8esK9bhBqmMABaPEAsUBWXWzrfCmjp3YpJMD7rvq2bJY5Euep3",
  "key15": "5qBSTK82hqohHQBtXx5LMd7crwxpYF4F25uZ8pYyRSXdCLC22QJXGwq2C5F3TcYWB1dbikwFszdvFwUcWrgRuX4y",
  "key16": "3X95PmMiFZeiJUH46n9Jn32uUvuRXkmBE7AWsbQmL7R77j3A1xtDvVm22MoDXEqyjHK43ZsUdctjtpDmMs9uMiTf",
  "key17": "3jNR8swyuuxrPBfMcK6BX2wf4mmK472FSyB2T4y1WJpEfQ5czaTpEayJFSXerDnG6pYiDk4QdbAbhEGYFG7JxaXd",
  "key18": "5hXSGqbxztTo6bQe6sfLQS8nED6gtRgHEqNoT28tbd3jKTLUcy1PmbEmEGRqoNctfYaxH4Ft14jrxsqugNgKq7dy",
  "key19": "2burMZQB9g5CzsuuFdpsDzfyLx3WE5WHPDLVTERDwCgYKM9V4AeVZcJM8YNqoVsPB1cLi84nR2xmEgvhkq9TmKmK",
  "key20": "5UugkR3WjAPEbTEpSosdPA7mJmL9ZWJNdXh7TobgBDyTDtnuPD2858LhAHqpcakxeVtTsqShTUAYMUGxoVzP5FVf",
  "key21": "43Kdgsc67TBGYNHGCaLogzVVkaUdtVRoyNtSNArRBYiV7seM1dwTNUxnhZNUSNzzEuxWqgVsRGsR2fHfVr4Jn29B",
  "key22": "3HdQAWBpi7i8nyzfdd6TtynvTeE15M2tZ1AiXaEkJXVuKNiji19pTj9xZKBYhFYVuAVZzXukaTRG4kdW5CGYbRxD",
  "key23": "5GhTndUk5a2FaBQYsR3DSg6wr2bBEr31VxoPyoKQmLs21KKYAWa5RS78odqqSnJ9nVZ6MrWcYN8A2AHWmzX4eCtY",
  "key24": "4aDhL2RXM4NXhJHqhWVDbTvdHm5BrGY2L4X1E4UtKVpt3R68tQWJiqHktGuQHzTXUExhi4TTuXmzcJaiqJeag2Hf",
  "key25": "7mzgvtvHL9tuqJDMzyrCai73eg5fpjN4AuzopZZVQ3FbSKQXzVJ9cymitP1w9kYxqo8cG7mNmEJCvLwa8a62tc5",
  "key26": "3RJfMqvpJz1gevEMeYK3AMth661PZjPd9ftnsb3gc4Y2Bj5TJZ3K51YybPcfAv4gqm563pQBkxGorUKmf11htsa2",
  "key27": "JKs1hAupvt11nzDSsYVy9Fugazwns3TKtsyDDXhSopc6JxRjotp5C7cakfVCAt7a55xRsUuJaJtdnBwRP2P4txp",
  "key28": "3W6z94DrjqmWnbWCyhf6SBRrxBbDWUaeh6PJg3XYKSWRkgVCEGEYcg3i74M4kQ7aGPbsLzZeiY5hCRBb3ZSMtWkm",
  "key29": "52CsKthqJitCp1BNjhCqVaK4PYFXtwRKJuRNGBQYa5RuJsVW92zCPfhvaWiwVV53QiN8RAvuS3aT2ux1YGQXrE9g",
  "key30": "Ygf8uVfEjATF2kN2ttVhKnYtS6fa15N9D2yeQmnugpZtdjZ1YoEzbFDc12hWCPakY8d1QNRb28sD5qPzhxasHYi"
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
