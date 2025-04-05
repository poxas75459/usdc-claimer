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
    "5EE2nH577VmzmcGh4KhCgnd4UmnnkEz9EU8GnYqTLGkhvCNYqRY2xC64FdF5LRhbKLaxPH2864LmNriCuPbnV5wF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jn3TgehHaGCa1QTqm63f3SWkAR2kb3d7BNrT6mqw4J9RydhQAqADfeLri4tAPv2bNdw2FJHYpW8Ge5hGGDqbko5",
  "key1": "5pukShBMDmLFJoxC5CcJxhfrQqGsS2xcWkjapvMcgX9qVNR9U2aLL2WgVYnDTp5MbTZYzRPk5Mb1duZAVUHHaEqN",
  "key2": "4uSy1EsjXKCUwFS8h6ff6UCvQKCAMiKNnzrS9b4TxDQSWzENoke6m3wsYUFgLm1JSqYnihB89TqbnodU4GZEEaPs",
  "key3": "2St6r72KknNadXKhBej8uVC6DZc5YSYfe6gEezXiMzqLQGRiFk3NQXToRq1JrW61mt8srzXwe8LH4c4J28W7FrgR",
  "key4": "32Rjn8HS5Y1J9XFChNYMShuLmL9qMcF8zZLYRj9gTED27RxZiHqYZSRaX2KHtyZz1LryZXBLYSQ1QUTQQ6c7bRJN",
  "key5": "Wb4D74dz5CvNwmMUdVEWcHFgAZKM7n8WnAvU3wn2vJV8YcXZ7YdRwW22M27N4MnPW2G31Wtv2JtaayyGFb53Mdm",
  "key6": "2fCwgvuXjyE1dRzDekai2xv3MHsSuTeC432apGPfRLVkb4RUBW5NnBsdYbTE7BtCwBa2g8Hu3xEz11pjFhZniy76",
  "key7": "47Yu7WZkhuoMHU57o1mABoypuVPTPmzCkZotFRywHdnic8vbNUNUfpxN6nFio4VFkRdAJp4TLW5TmLFf2WMEemQz",
  "key8": "2dfB6UDqze8qHt7ACSycRZvUAw3tbpRXqH3LBTBeeYat2ZcuU4robpq4cj8SuqMe7tS137uYk5PNStrPECK6qgE9",
  "key9": "46MqbAx47ewrupsoTsUoqk17xMuwBZsFA8C8vhiGmQPvChiqAqSJThaqB1u1fat6CkmBtU4RjCcYCfeKYMp6iWAj",
  "key10": "gLsbUa7uaYfACkxLP9PtmAXAirFESV5vjF7C84Edrm7omhdFZspYQjbqyBDSpSf1GAn1sPSnYemEndSvhGnGcKH",
  "key11": "2mUTcm62ouuV8F6cEK91sekhdEkudrdCwJrqDgpPitV1qDWP8NSu5JGx2zdzDEpKFvbcGZ1mTPqKAVdxC6Re6i9B",
  "key12": "3W1GqWfXZus7W3fuWWymieiaUftkCXKST2zpXhuD6zh6ur5VBE3DBoct8ZCHgGJEVYo5bMQoNQaDF5eogizKXhPQ",
  "key13": "3SQQKKoPcoteuVBRWAESbZ9gZReppcv55t1M3WuEYVbBC25aNhS7ac4CAHrzG7jGC2x4w75vao7zhDru2bQ5Mi8Z",
  "key14": "2n7Do8hfHAwkEaNE9scZPdhTkeVhCwErLBTfYSdhnDjUbFQyZPUns9x8BcSfVRZAzkXdwpHnDC31eTieMMYMPtZh",
  "key15": "21z4XrN7vV74aqPtPyFSkiz2Dt6m7htr155kAFfMJdtYXvC313rdtAYxNA8iHES8bMKkPq26kji5YvTNE48T66a8",
  "key16": "4FsPPbwoSm8zLfs2ZviCq5cGJvpaDcNeCqUQtBcgnxZVjBunXjNMPCiDF3GZrz11ExuYQ6uLu8HCfDoHGo3tcpnD",
  "key17": "3uEyskoeLRD4E2JBpRMRZzrNpTDb4119mYyiEH1eo29kg8goa71fhgbC4UZtRJ59R4aDbABLtBPSYhN1D2oGhQGb",
  "key18": "57eWCyg9EK3P2Kc222LyuY6vavnd7KeRJZBgCvNis1u9EbCqQjNX82kKYzDvf8FqEb9gsQs6w4987FD2W4dp6dnZ",
  "key19": "xKN7mDV8BbqKYaob5ZDtAqiLCEHXUw4fdwsPfB2fKRBxVKFY1ubHiuirHjK8YL98kH5pYui1EXddGMND72Gw4UB",
  "key20": "4iUJMVGSRXjN4cQZguvdaxe3acMLM9Fvf3dCJ2CByXMbvJJxCA17xrvkvxcgBi3HXTKeqbAiWJcmBZxkGe7msB7m",
  "key21": "GvzeGsnmTJVv5sUTQb8qWS1mY4aUncGCp5rNpfE4QwLt9NX2xVbkuufhvcUMwfHABvv4XtpXH1HtDTBJLMzTpEw",
  "key22": "2v457HyiuQHYhc5HhMVSPKSheKozxJVf4sCLn3jw4Kpbfhw8zXJDJ1eHEvTCwUQJXN8G918p6vsGc5M94X2CneHr",
  "key23": "636FMoRvPAknMcFP43kpHA4grqQwC71kRrWFBWdgpQMUS9LbyvrmMNvMS85Yx7C2BQtgSN3JUxCwKmtKDkAUnJfs",
  "key24": "dd8KGo6FUKgJKBspM2sQ8JzMD4JvEkoTGBvW6y56AdyYhHPTV3YwJhNpZhF64Ku1Ag12MjH1m437hWD3GhnTgiD",
  "key25": "3sYU94tLY9u6qWbyuxBq9KwXeqjdmUYNCednRiHEH3Jpf361k1W9Me4eHuE3BnY33iykUJvNAcC3Dbe7Eg3egVth"
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
