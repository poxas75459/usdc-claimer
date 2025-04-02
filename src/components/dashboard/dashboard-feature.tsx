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
    "3iu4BeenvR2d4VuSLZwmsCgpTU8gavALBcDh84vQ3KAZ3sh37oCdDpxMnxY7zMqGjcLuzckXqdgqU29moru4A6zA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56P7mAmCQ126T7mPP44WFckfosGYhbdetV5D6MvCAMiC7s5wjMTtLmGaKyECdyQFYRY5nKikhjdp2kRS5pha8vh8",
  "key1": "FBpjDnyJKBVh7QKoFB7tNLfejSUN9BckmbvjWiDfcgtkwKb7WgUEoznKHFhwHt2jX3Eg2brmM2zKsVe6JV9SmPg",
  "key2": "5FBSoX6JwjANdasvNLyurFkd6sLTAqFXBZZW2oir9U9kXTvutAtc62TVNj6oBH2oZB38iiYycEYNDxhvGY3ibwFs",
  "key3": "McjEtatsxuioXPWjPcUdPRtWMEVbS6RfXq35fA3toKZqouscwazrcuH4N8V5WedYB5Uus9ntAodm8NJdgAQdsSf",
  "key4": "4RGtWZQLPcjCDWcv4MapyVAkmyuCVkZur9JgL2soxxu3reymd6SS3VV49AiS9XtaqLQL8fKRZvZCug1jX3E5zQ89",
  "key5": "638XmjjYojNCAEz3mse79NBiz1YXXDdXiKNnHV6HyVA5MdhnqthSeyW9JvKphJFzGEt2SGfGBJfjCCYNg6jRQaHq",
  "key6": "67qzmLnensQU5QePPaGnCEs7PkkayVndFbAuutHn13oVPc1YdRk1Rifj9Et6WmMY9A2An721GNcQXCgkBkjm2Enr",
  "key7": "2FKJDXbUQT2yj9vAmQPtKGnq3datqCFTJjwkxsMtNQZghsnTqiGuWgium4R77iR7wi49YsMUWAeSKtMzvwA6q5cT",
  "key8": "4cLCTGhaHmkNUQWzyCqLuAxJki3mLbaSKKPUQCqCSs5Hf3MG1KQ12yhPg5Ss3719ZmnTaepyEVZNUcHaKWvfx4Jz",
  "key9": "5KQ1YbW6ggeF3ddQdou7WxxUM8ZYvdMuEpv849osFQGVXvioPDnCTqsyERitGtNeU5LNrMe2fMBmJtVAV2sQwS9S",
  "key10": "2E5NokYvpJKG2SsvbZkoAoi6TiM9j4MFCwsF94n6qxFNHgLWzCEReN4mWaDgpNye9rz4RMnYefnneF8TUDiAxHLA",
  "key11": "3FJbju6KvqZ2LsXcGDjRTHezPeDuv6ye9J9HP9G6rRn2G9GJB833qWSj6SfXQtCnxcuV7nm3eEj6wwbEAEine1tW",
  "key12": "2mYvPQtGbeXNF4iv22R5pU7cd4MDdafHrHhK5PwB7RDRtAUeaxdBeQku18bQcAoFEQRzege9Kg4rN9GLWjfy2iuU",
  "key13": "hDrwAdhvSeNZDTC8brLD4B8SkYDRr5eXYQ4WzxxrupfkTrjWUmMEtGC9mGHGYSG8wi7Nrmqb691bc4rib9eiSrM",
  "key14": "3A66r8NFCKwx6cWqy7UnhGiQSD7SHG3ixBeC2hQZaUZdbyMDmWvfqWUW63jguV11DHgqM4K4aetsq4Jx4T9ewqZy",
  "key15": "2ygqXiSyoQDiLGdNYMKpmLUDhrwL6obUdPbuwJLE7wLDRp6EgVGmFQCSU51taR1sHZVneH7A6BbBU3AJ8359NPie",
  "key16": "2B1vnEZtGCq7df63pfnuXmXnuujk8B51or7iSP97UjLt2qnvvnQq9mhdbtLndwa5XXZmjKZEUcJ8yFHDoTyTeDdV",
  "key17": "EyJ49DqEDogJ9ctMiheG3fEcMPSv3VwSbcKMzA2YDqEqPqobM8aFk4iy12bD9Tg3HmzBaT3NWrdjmjQQqFjk6kQ",
  "key18": "4VGZQuKUMtujJ9hUX4CnukCdBn5yWvSxVDjgrgEMmqpZZmJbzdezoKLJ8UBVEbZ5TZyesTk3BS42hBzn7Mg6j2Wm",
  "key19": "3NYQ1oWibNSCYtrQNDhE6421Si3Km7Me4Qc1BzAxEXFxwWhVmAJ6dp6dGtrBh9EL3JbbMEEQQkvSeiih3S94SRos",
  "key20": "2RqYGyCHYhEgENZ5in9g65NaaKVcMPhv5yUWLMVpb9SsepLRhn6ZqMiveVb18gJvjngDD1ipLdphHE4Hr64jq5da",
  "key21": "2Ytpjz8rCShC9qWrKddfS2e8B4GE43Nm2H3BCWaYiAGPpUrmsiLsXP8GSCwVhxavzRMfpta9Ws2p2Ge8roBt5xnV",
  "key22": "5ZR3T5xSgrrnpcPGzt3QW7oTtq7XzML43Myhv6Si2xkMueSUjtNu23kDm9eB3FwvRHPRuRTcQQATuwhYdkDUJwEK",
  "key23": "3ayvZkKa7KfF52L7r9MZFnt1H7UpkSBSieVEBWCdJKZxTX8xb15Nasf76HtwkBAPmxFmkSHygc2K5KVPrtGtAyH5",
  "key24": "38ckkVtd7vYCwuoyj4w2nG7SjUqrNq7ENAoMxMGa8QyXm8NLLzSAYVUgQtXm5TFJeJuDwXtEFdBPSAUiug9TDF8z",
  "key25": "53ez3UW6jZ3tDMLQowakDf5R7FtSYNaMpq65uYHsN74hErJWHYw8fDBmMXGDzWZYC7fRQiktTHsx8c8ciLxMDykJ",
  "key26": "3ur1ppCoaGenpumzwtrTfBqHBaB4U4RYF7APsdsmjYC5gArG5btuCzwdED4zMCxDXc2Ss5NCvLUhFuA1KvcZH7AZ",
  "key27": "5z1ZrJk8R7W4vcZgXhFbYRN8c9ADDRyZCzgyXeSUkzLMWddDMPZoCgbxZqmfd4p6Ars8vFQi27xB8my7X1kBuiRp",
  "key28": "2CqT6n9KNUsgZf2RbPDD1f1ra9YoyKv3rJJtrDDjRyekBPNw4DgrEwGKTQ2XG3K9iNiAoQwWfXMxooPBpuzCN5hZ",
  "key29": "5MfEZV87kkQ1KFYEMAS8uue16aEdYDCEpqvVnRwS1ngMZjRL6dpZV6DFSGbT3PtP2pKu6zEVfsACsMfSVJYY82MD"
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
