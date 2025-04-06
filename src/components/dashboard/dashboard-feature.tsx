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
    "5bSvkvw3DFnHgVhZkoSohvYvU2KtnVYA1SyYjht5hpDTJv3Py9pNoYqMMcViJ14b74qECXiPRsCFK3n6Jnmh24iL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21ogdKzfAyr2DfUteuF2vt2JSuzHp4oyBncEbQM5iebA7VdY8UGxXtWoY8AJPy89tsmywpWhY3SuhUWCw1qPnig2",
  "key1": "2kmkfFJsXyhbEaV99xGU5dEBm6mqiG3BP8C9QRoNCwgBhuu13QETcKeqthFfBy8Zv8Vz7urTC5QVVZEroahaKdUF",
  "key2": "2zyr8Psz5TTBzbbhqwUBqVq5m1dgjEkS2WVVUbQ8k653aZZcuVFXn9WWfrgcchviTZDAqgGbJ7eEhXWZRe5AUxCt",
  "key3": "51opnSqjzgwrk3PvrgdngT6Mg8pFNaduwYNLuorTbgrtUnjprbBvkyhewAZcbphrWqnjxMCHnXofi6Sy3YszCPYN",
  "key4": "1bufnDB2VXbiurtkLZpAvDeti8cMVjQMenknS5fhD91RQxe7qZ24mdoR4d2n3C9z6oiKZcbYBwoicqmx1mWEvVD",
  "key5": "3BSY7yLXpqGYUaZfF7MyrxQT2KtjcQ32jzqCLait67FK98HZ95RduCX2nvZQyEqzEk8DPhD3qDDx73spKFKkJAq6",
  "key6": "2CGGK4JZziQvC7Dg6FgX1wXXUFZn5fDajLTn8CEyXitnNkSXo43DXRQgYvcM5TvXEXWKgTZ6RTqJwb7PRJ8qc2kq",
  "key7": "4KKJtatDLgtDxFtPVugFMPNk7HLyXPNuGLyshbmnWkV6MiWPmnJ2GXZRqgejsmCDDmbFom9uZnhM4qnSLsQwk1sn",
  "key8": "31jSuUWrFxcfaimvAUaTDZ7ci5GGyySApKgrizpjA7Q3XYKSDPcnevprtX9ZEtPG7d4PHiS9HnJ6h6SSXCd99y9P",
  "key9": "2nDxqE7Jrk6iTLUgdTCa4rhgC1hnq9JZfb85G335m7kZ4SHJmM4F9MUxo4vSi8pwiDuE9zb3iQv6Leha1Q1DA2nC",
  "key10": "3YL26HnvEwHQfvZmAgmTGpdpXWFXT4Mjd18yqhrnyujccV6dyFRqBY21fRtry51Rf4f4PW6ybjaDHJiz7qwgPjzV",
  "key11": "3canP9CxnNphhqBjphF4fgExFRUQPqSxFTPs7c2ApE881LoPTywZPncMNaBhoQGfhX5LrLBPxP9mSCsduX9TtzUy",
  "key12": "5LPEX8ahaSwupwavrm5Gy7QiLBD7p2fuDVfSkxoGNRhEmUhSSwxzqs5xaxRhXXhhYPxZ3X9hDMMbURnkz6aGonUc",
  "key13": "4bbLqawkda8azAPHSKD9hLb3K7QLv2vNYzwuADC97FV7fVMQ5t6hVPiKZcK9s23yD94Bn158ZXmjCQ6puyrBv7yj",
  "key14": "x2rk29ucSM4W8317pjqGiQccUnAGBtyndh3Up1cUt3RzGvPXNhyrVwoox4Pgot3g1RCwwjLZ3UBc2LS9kHcgfrX",
  "key15": "4btffeyt6pdmzugmPAjWU7AaZZkaThkhwhNU5TEsCVuUpx2TetkFnAExSxry97PQGDoPSNbbmza3Li8BzbzBEE7H",
  "key16": "3BhJmyjyunu3upk7kjSMrwjXJt45A9n8rQoj3hERQvZuoBMVXBrooLYN45eAqitfhT9f6qUMnBQqgWayT1hC4JWP",
  "key17": "4rddLLPT3qwLypXRgXD2jvxujgZqDvnxqtqXSwC2PcrmdPvZnXYvY33v36t1qoXB6obi1EYuXkTZcuj4pGxUPxZN",
  "key18": "2PmRLZwwF8CNxLTFUzX7oeeCR14iatCbAFyPpELK3rVc245tmF22xgU525sY2AEJKhcQWvKfR887YVufWvc3atSd",
  "key19": "3hKYGfEtYDmUHyfLSB2s7MmQJShsreVK67UcB9UPnLFgMzo7dJSPaegmKwNmZjnKQBWFD3uXH2kznxRMJndQBZBC",
  "key20": "6kVfqmXxTXgcBYia1Am1v1gRmpKjXQqXpLNsuhR8LQ1Xeqaoxus2feT9x1jA2puM3dk5TEVkHar3yWjXfnMNU3R",
  "key21": "36LscwCJeuW6nK9SC6uTNGLA5vLdnLeepNFpUtp6pPdi5pMFqn8ZVCJ4iRkW462fAaUWohk4bcbMMLCsk2d5gv7",
  "key22": "5PM3VXbDtLzfWf48v9UVYDmh4egL9LtdhqA336biVDRmF3TUHHVHsPLb49fSNKvDWzFVkjs3KR19QDuFYhJYYZsL",
  "key23": "5dXEnpQd8zLo4jhDNJNdoYVDoG4yUTuRoaRHZ7fopyoYtrs96AVA1NuY8jTR9z6tTVU5QbHFifkTYLdD2nXFNbtU",
  "key24": "5DDeHVZbUmsmSiztZetcdkB1H4M2QGZZfafs2nTUk539EPHFzdoGyfGkiQFDpDKaSNy6GB5owcj4wQDoYXbVDY1D",
  "key25": "RjPhxj1VK4XGvZdMgBx3jEceQVfiGMS6PXFcsQkNSxNNrVRrKGRXYemapXSxXgJr8FzHiQq9PyFtC4E4w7CCu7e",
  "key26": "2qbF3NbiAiTMcUw85MnxP4Lnfh4cVokKW1MbCbapq8Hy9iwzrNT86XGWhRQ7aRFbCQSc3Uhgrjcp7n43Tf8YBLRY"
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
