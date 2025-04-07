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
    "2gm5KzNfL6W3g1uuYVwkas4C57FEqxeMuDUSeGDVR4iq5U22DLQJVbdF3Et6Qwid396na4PVYMj9fEwVGMbwswXJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oX9YGp6GrBPJkGR1joM3PKbN5LHWUz3XfrTYHTMoApiHbmy8iyT93ii7yTd5nJ46mgewZrdTZPnGAygt5AZycTp",
  "key1": "2JmasmzZ4AnQg8tQ3QkApSDBDSE1rNj1sANcDcNRvYka9YMkLMTuoTVgmREaYQTM2iiPujQs4WSy4a95HkLZcFnz",
  "key2": "4vPQKzXa5THGNRx5VAcAVSi43LZcWGcWdLp9zL1rCdwQeBEFzRnkv7eWoWinEjHB6fGF5AGDtsFAeyyNnssPqsqu",
  "key3": "2MrueAebSXSGxLekzgnp5sndzqQa1yMBwNAf9RFYbWtE8MMCVtAnkExhjSMWaimaaaatY9SdmLk85FYtF9ucVoUy",
  "key4": "5JNMYLnEGdUzvPfsKUjpCjecgH56EFatsGM6J64M5TCPXQRXdZQCirg69ce8iATnpr6eUDPLuRVkDMZZFNtuLgTt",
  "key5": "ALeuHBvD3ntx615LET36hpPxMW7UCbUPrZrUqH3PVeRbQrzf55D7v8epUKLkeoYcSs9sgNJcVvouPd3sjZvVc61",
  "key6": "5wqH6im3fvpe8m7CbUQj5ynuBKbPNCEyYj7S72e8fcXAHLwEr1A27L6bnLz6Zj5f2qFLdMGaWwJNcu9XKC96Bn5q",
  "key7": "3B8WSDCovuPnGz7DNkocSiSU8VV1QXymT6vZjia1LkjDNSa8EfrgwzoqU9Yd51vPU7KFtjtkMCC7EsMsRNQCnWN4",
  "key8": "2CqGbwhUKCtswqPcXojBPSXD6eWeZAp1tsXMzWxqeW9nN3Wt5yhnRE6fPSLVQospEk3nteN7V5sgqRhPnitcjcQA",
  "key9": "3Qqnzgfx3Hx3HCNjanvqTJrE6fU4qF7mzr5GQ6hZWR6r6DXDb1wfZNnY76ds4jWqVWYZNoi8qu9yVK8B3F7jnz7n",
  "key10": "5rPn8rR6wtEmXfL5bhD183Q7jspmo2MUWsHZZBEeyP2CDNj71nbYFsm7xJvd3PKqFoJvGE3Zyiwb4A961vyDas9Q",
  "key11": "3hW8A2Z8aDJurBG6nFdkJhzTVLJMG9trzNfCG9AenYWAPLmt74EQCKeRMgzse1s55VznL1J4TciDSmdRVvUTdngV",
  "key12": "3r2Q6na4frUT2FiWaAvxnGqqifjUtE5uG9vyTho35vTHA2LLcJZsZCYrEmw3gwfE1Z14JW77yE3oWtjSQPmTQhCS",
  "key13": "4ET9nJ6z5tZsNKWaYihiMNKbKzvycyAusVnSQZAmpGmHBpdsFvyrHMjnbE3vqHJaZ43geefPToxkttxtBxcg1zWh",
  "key14": "5fuJhY1zsvGdiTAaPtD8rzNinhF2oVQaXkmcUL6Vs5LuNk2dhCaRoviD72fZwSTXmJYkMk7ofZD2TQMnLR4rPy99",
  "key15": "5QZewwsq6JGJy4K5csY7VRGTTCFYctv9DRdqWxHAMvBrxbTeS7KdAxU3ioThaUiouuvy7kaYKhiN2LzKVhVi1is",
  "key16": "2hR8s8JU6FV2vEUb9JxHYBi8kUjvFX4LgvDNCGRVeZaxvz82XiMUVs124aadzbm1gwEc9q7LHpAQVRUW4RjLcmYU",
  "key17": "324gkHdEag63mGsVGuRvScTYxnXtbwacPy2YaGe19yXwxcie7GzbCQiezq1aK7L1JWijiYN6LMVsv8sBGdutz1fL",
  "key18": "36gVqhM7P6KfiD3VdXSAUjczcxGmdd3C1Ufufq9awNBp3AxLryiYLFqc6u6SXoAabxVXaGkbbXbsqgbErsqEqjhU",
  "key19": "3WEMoYVJX9uSchXRdZajUNRUk3MNomfeh95wBjP4xuP4TKRBDCJDeLGVzyyeTbmZq9KoTDKT6zuteUMDLxT9yvNS",
  "key20": "44sMdc4cUwFxhXJ54tKqWHpJ9W8q4ifwvoGkzsoj6h9azGSePuqRFroTNKmjNqR6eLscMgm7QJ5K3EmE2kxPZG4U",
  "key21": "4Sjhu7LNh3gs9qBmxDVGFj6MCGRzwTQUToyjo84KkDYKBHn2vgvxGENHLi9bLduibvp3itG3dGHKBbvUouSLn9bA",
  "key22": "FnB4MzDNpDaH7r5gc6gTc4EhxAFJG9R5anexPEMFY3e1jfn64RrmhjcrHxd6NBcc5Sd646KFKvpG6HogkquRNrT",
  "key23": "2xqAM5KnxCrPzC4K8zKVXdBLHdSNvEJbyWZtHkVoeZ6HCcXjPju3ANsPjvZdRCZwwUHFJkMuyXeQFBre3tbszwby",
  "key24": "5j4DQt5p45fADBji93E5ps7sgSF2cvipCTowQC2wZrTPe8fGK4pFecHviWfnZw1ZfXbFftY8N2hdrAUCUbuAYwsk",
  "key25": "4KeLR38qQ6YcEFHsAwnxavEe7YeyCxwRjFLKc8ACknxAS8AkB76UfNrwLyWud4VR3atDx2KQ9GDUNjkyQkywGXgG",
  "key26": "5JHbhbkXHnBdvzi9yUUSgcCxHMdPWK5brSBEZSA5kp6Cck6CPj4BVayXwBAtAhcjt44Vwzmrak4ZfkQNnSYACTGy",
  "key27": "idPCKu6YgyDyNR95JJ4X3wbpf2zdAAsFjB7uQC7S8CdmBCNXGMSdBjd4nsPHC2EgLcNxzb5PRGo3ZSh6uPLr2WH"
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
