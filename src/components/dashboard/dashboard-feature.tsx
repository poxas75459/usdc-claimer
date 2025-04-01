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
    "63ZZwoPU3CmJcDZ1sP2z5cL3VhKJQuTgE2zKr6e625SHR9nbA14SzYgUzxtSqWWxKt5rGrcPb7d6Wm5fAp2Hb9kg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wSD3sdNK8fMocPF49qQLvmoUyNbtDFm6demdzHBQN9aqLjhu6Mw9uTwE7oPGQEPXCmpsEheCvghgrSPKtHGBZXw",
  "key1": "24sjdQffLaWvBtWjkiF9XfzcrkvbkCefeb4KfUfCz4WqB2w6RDDSaDPy8Ba441JrxeJH6P2MvKvmmahvjTFXxdGh",
  "key2": "4Tn8DtzyMTNkS31v35Kw3SCNycYmAzWma4a24cARq6kd1bCLQFvnHexjkef1zJuEiWn7aiKS6wg4nFEMwF3199xW",
  "key3": "kv5txEDeZACDEiP4QhV6jDQ5jxumT12DCW7xh84gvPuD34vexYiwJaBkkYvCgVpzdPZWFxv7tNG6EjSMGEfQtJb",
  "key4": "2HM6h2FsX2VSNThi6THp8oetDADKiAs7cB4aKYynt89rFgkcKQe45T5MTPWN9UcyLCZuXyHwGybLquPJZSuXn3La",
  "key5": "3Z6h1Mck5g9ouEFaG3ijqRnpqzjTCTwgteiTxi9DEvXzfyNojJZNTyppovGkViHCeXgtWy5WzENdYkGW9371v94i",
  "key6": "5vatrQhYzdBrcna2ZgqSRsDNk76GkRwBcGvHZEor4KEetu8YvxLWpkkmj2Y5WnNqfHCYHQLkF3yzEByHkN77o9Hu",
  "key7": "3ATKxKuhHxG9SgHg2LGDqW8WqPLzBx7Z2Y3JTB1iSoATiYMTfKZXEV9UjGyGWcKYwY92e7De7pGV7fxTuxGpTJxr",
  "key8": "2MESYBUgAzsUtsEBEbfkfSxYtcL4ZWn5BwbBGAAo7Lbqcs6DbA1x41zjiE5DmoaqW3DFW31s4fNRvMwrm4iv42Ns",
  "key9": "yRnak8dQagXzKerxW1HEKPRFApjnCT2cjj946SLvrkf3Lcmv4eTQeQ9mTDknCqJAHdmgiGWtB2wGG1CdcxyWAtc",
  "key10": "2sXHHLpcp5QAv8w54cq2cJCo77GkbAqgP9g2AsoMpW5tGpQSCSPV8uckiZsgFyg88T8PFwDQWBLC4AQyrzYPmZj3",
  "key11": "EGejMJBoED5nZETMQeFrv8DCbqjAvDk9aEdZAjUv8DwX2Cy4QXkpxrwrYMqUJ9mULUn3syBpTBYqW8jtJXvixrv",
  "key12": "5ZmW4EXc1Ys1sRdJutvm9RNzrxvUXNMz4HzSwspAuPhx5iz8PFVwKQutVxARw7MSTsgRdCpDSEpS9m9ZKhDRD18h",
  "key13": "FrY7uZarBumZBXheXApoTqDVudevQuhV5GRbFCxKAUFuzeRd9i7aNWwfKAJA4CoRL472wv8F4LMitFz4LKx1XPm",
  "key14": "52zhEUckAyeEj5WecBFXPPV9B37wQdPhxon6e9KwS48gEdjhbQK2KM3CH5SiXqHRQ17vr1fBnaxxbMMrNxGgobdY",
  "key15": "36PyrtN89R9YPvQVviMp6mbyqT7nK2FRMLvxxjijyKX1WtZWViEFReS53hLcWGK3sMQhQ5cv2G2MJAbb85hjanho",
  "key16": "5jhPNYeoK7rP2HEjDDoevqj31XMa5jopoDSjS3DuCFhYmWvD5xFVRHGA7LUCWfkxgs693dRx1ReREBQhLNjWbq7H",
  "key17": "56TgpiKoWESHrDLzaxW6Gg4T7xV8JJqAuugutXdgRyrweXe1LvDDiTMDDKjkXuHkjrJx8RT8Xxi8jhuRJQCQS5uh",
  "key18": "38YFrNzDdD56Psf86pEVJyDshZMKJTKw1Rc1VQH11k6ukdCanyikT2aWeYmq626tN1f1DrDWYvQLhoGr6zdDCjrn",
  "key19": "3UoiHwNqLtUiE7bVkwTqCk13Tgfcmdd3huqTm2YD4jx7LVt42kRb4dpMMTdqp9RSEVoibm7GUGd4pz3tyzqN7TH9",
  "key20": "5PC2kLZ1YztwPZfqhA4Kngoz2YP2Ao1xZo9vgL2JWpYyck9aUjhhFPacmwbxRLPmuY3ePzLcwiXzR8hA1rpDXhPU",
  "key21": "fqNR1uw8YKcweXHMRz6W3f4mDvfeVvVUXaygzATju14Jw6W24iXr9cvPd7ur7rjfobnaHDTLnY1RhDgiRNio5NL",
  "key22": "2tJHULJkGzJ4Eagdc7KCaqT8gVxTGvx5AoFbiNunJZpJigENdpxEWkPeBA8YmxjqzoAeMwYxSjyzkFf59qBYpduB",
  "key23": "3nD9ZLVgGibU5rJPZ8WhM8BfPktwXSfSJLoqHXAownKzBiKK53Vr2Ru7dToqxvKRKRXJw7dyRw6GjUPfNUqk8oHJ",
  "key24": "n24w1QreLDMCyMDkN1WnmhrqPFmonJ7KSwHBBtoRzbr6mWo4SzXKCDrNKT1jmtEUSSYRNaMtPZYaBqcMixEtBbv",
  "key25": "5RqT6g2Ah4LdAwPMBQsmWEuhvkPVsP22XmrBraBqWi9dSapMhnV2fJHAKkr5TZXtbx2PsAdLf7jPxbvSYv23zyRj",
  "key26": "3oVugzchPhYu2aT1yAh4cQ6mqDqYNF57YmoaPwT3Sn2uxK4Rcf5847BrPWq5SyJ7ogL6KHLTTB3YcexwGqYxnhEd",
  "key27": "2W3phhSthdECmptFS2tg74C71F16uL2oB2WUNgSxF2tjoH81BYC2gcAb1gCBnr5jbfocCR3XNxn52nYygh8sks6C",
  "key28": "5EwGpFCCV2YteDBDQXjU4ucVF4EhyK4sybB54VmDNNK3FGDmwK9oB88MRFuzoDJmxmJAsiRDHKrrg3K3VookPqUb",
  "key29": "63AQhCXQ1nbyTM1PRDLhQqokpUhSfJdmhWcpbgx5iWwoSR9drj2ZMECFG76ShcjzUbSJRpQnde5FRdsewQQ8N67h",
  "key30": "frosirfWAU5TcxZ78aPYe66CkUAubioA46cF35AsWworBj2Gr9zRXnZqYvyDianwCYes4to9oSKsSZjuS8sE2VF",
  "key31": "3aFLQPWDAhyiWzTTsfzLtR7i4sta31waZygr1nQ6NF2Tt15E3nZ3i6h4cCdzLJf3GGsWzpRsUvJHPUzRvZzQb2aq",
  "key32": "4pBF6JmFsPUwhFPtQY8yanyrPaXzLibGdhYPaYhndFSTaDjYc9Yc7ChCRGQMfRL1vkJMbDpdetfnRMqNrUH8F1VT",
  "key33": "5FEcASWD3gsMk8Z8gTvyj2vXVYnBvgB9zeDsRsH8EmMrDDLAJmwRMk4wbjb8awpb6qbbyCDRzdbsd1aMy9ddnF9m",
  "key34": "NfPrna8HHLgPg492JKGqtVmF4HDV5Nb12cYAPiFHkfaLuiKvfrwE99c7SkLR7vp46aZcrGh4yt7puavaK6qj4VQ",
  "key35": "5BHMEnNVrXErsy3xy8zC4dnS1eVjt5TXcKM6dqaYc9vdvYupohj3A7dDe7o54UwfLRpDzFWq4Y52m8FCbjkWzM55",
  "key36": "5fbJWpfhwGvfp8XWffBya7xjW6Lpw837BWMtxtx9qUNvQUBzKQVyTe96RSTxxDCtZmtBbeW8YjSRsZZZTCipmv9e",
  "key37": "cMb7dqFdbjXrUiZ9vk4889J3mYuTj5r6DjfzwqM5eKrjUzBFEbzhqmaKdVmrgVg71JZeQhoeFABWGc9bVHi8u3S",
  "key38": "2MU1kKmwjB5e2mFReTUiSEuTcnyTDrC3CWRwqQnQ3kKezsKo7cM9LBSHcMf1L3Qe6hgekLtubA2chqUQZK255y88",
  "key39": "b9PG2NkaYLZvL9E837qeHJxcm3QStiPRiSrF5YZ7DRAP2CBWfyVK7HzKaTJ7cHC8ZVP3hBXYWzCJafAj6CbCoz9",
  "key40": "ohYoRRtBw47J5xxSRvV8gNwJP1CJZDpbYLEjdio9ruDZgXT8naQ6X4aM1KxWRq4FfbhXsckYdq3iSS4eEa6ohLA",
  "key41": "5pY2bsQ6w45iUb6ymAGJKZv2zyyjN6WUi1ps31GUeiWEVSfi8H7NLTJPqBTf8W18oesbGp6NAL9vvHKKQxUjgAiZ",
  "key42": "4cFUeKhPJJJHDEP3CHrqTHx1Cu6K3hYUJtwJZZaWuEfhRD1HaGmj8FXXamZDh4jgu7rJgM1JHnZdU5hoq6PyFFeu",
  "key43": "23iM9V4ouwKtgPSP1cm5cCds753XqQWpnkdRCLejtmMVtSbeDW1L4NCchzndnPNasjgfj7dqAeEkea6CUw9fFf49"
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
