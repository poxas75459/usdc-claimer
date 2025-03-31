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
    "2C5JshbDWA7tTaJaHMg3mYT1wrEcdXmYv1wJohvzqzfeS4HPaicqyrAUm6sdCsjkE7gGEZRaLijrShoijWXHzLof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PG6AULVineouhhQRJNMoV4JuhBCoJ7Yi2kegVQLFXEG6C3GRwV2W4d8b8jgBL1hayivm58JCY2AMXVNPAa7EFF6",
  "key1": "2GP6LagkQLbyHtTQMNCwAHoYepaXE6qrNhP1eLFa3DEsGwmVLe2mG1Sxtv6BhY5uC8HqFj2AFRYo6dYJ1BwUtsAb",
  "key2": "4QdN7MHBMaBTSX7EWQt7kVZyzxRwSU86Q4GjKkbzenfp255DceGEHKgUXHKWLac2Lu9SEip9nDb37PoHycmtV4ye",
  "key3": "3GLNCu8ewmWccKEFEqnNuks69p4W5FRwLSoFJqUDnBaJWMdX4oh3s7Wrkk43xRMCo14rEL2D3qbF8zcKYKMbxXhq",
  "key4": "2ujjyiW297ZZrdymFL5Q6rCjonb7EYZ8roWUT25sdP8ohxJEUamUnvuKggSDgtFeSRoxBVrWCoiQeQFLttpnJbLM",
  "key5": "4qg4PeTGuwPMAFdwbKmxVAMwDPzYM1wTrViDHcEkHabeBu31tQ1EZFS5cYitgN8ppRrmZD7sFi4JH5y5Q6zL3c8W",
  "key6": "ERR5jR5kknLRW97m7uQFAawGzyazth7JwbEAAr7g8aRQcyYLyYEwwyjJA468emsRD1Ko6JWATg8owTGdYLLJND9",
  "key7": "Wi4CuAZE2qrnRn39mhAuTX1xbbAG4PS97e3Xqkji4qNwpG9P1knFBDx7zRF5mdKTJf57KkW7CH1b4dLA7QNbLAY",
  "key8": "5BruPUdp4kMKMFzzKS5UpGamL9Z2ftKPGuQxTQzxaGZRogM5g8AyWiNTe2y9hBNWb8JSG6SgUtF9npTd2Gck86Gd",
  "key9": "44pwHpwYLsbVjs49Hb1L8hpoWcfcfnCbxq7ZzUcygQX6Bqg7x45FSirbaPTTaE5BHJebHtBGt6Xt1x4GcMhXz81J",
  "key10": "4iKcgtBkqXLejvoTSK6rbfsQvT5jaodgncZzagpVTcoEF1mkkP9VmmKDVKZsXSE7xpaXBUci1YN3h9XBTFDFNUux",
  "key11": "5Dhgdkngo1R6b6NXJNRzA29YCJDeTsk3R6ZqBBtiC97XJ6T6GKsi2qpcPPpnCHmzLQMXRfuYDosx5QariLZD5dmM",
  "key12": "ob4wJqkZN7eZcmyKQSixyE8L67WFUDT4woLsPmHfw7xb1vEqHC8Yb1EMeP8tqXdBn4cc7tXPseTkc3MP3YNH518",
  "key13": "126LttgVG4QoHoKTKuzhU28BVjQNP3Twk35ZRi48mzfP8A3sWi25krB1oF4xdt8P1Ra1HkNC6U5nYPwcvye1hXae",
  "key14": "3gEqQaWiBLMqhLggwqRj6SPuSWbwiGBs9YNkLcYLepAgGFvytwSEBM6aWBnoRRKfuienQ8o7YzV1Z3vQoRSQy5AP",
  "key15": "564TE6XGxsm4HaJ6EkLXTkyN8i3TxVoGPRaB6YFm2nfFB9hr43DUqc7ut3LekKWq5V1JNW8UgbKse1PFLh3j8Snh",
  "key16": "4zcH5sNV7P77nKNvvxEN9Fcin7CVu6iRN67XANSY5A2LQ3wDtisaTuNXU2Dt9VQqtnhBG2vsF7FxXLSEUZC5XiYW",
  "key17": "5cmS4mtzF6qA4w6sBVJNXv1uJpSux7HEyugafNizLJ7q23aUXySDHoa2WSZrGXX7kBEjJupKytSZBSgmr5tYRUr6",
  "key18": "62PgqQRN1BT6dqdjZ42WgMHzRoTpy6ipaHnA5ppTD5E1BBvhJC61pXNEPnnCcZes7YWqnYe7f3ZEaRzhBTXebJku",
  "key19": "34KfPGLCdH25RtCjVZM9WuEhpZraS91AaNMUqZGS8JWiqrnWPPtAt1L2ttL476n4Uhr2mCSojRFU4dnCDyU21o6U",
  "key20": "5utU5rhARbkgtGRFmTE3tdiAg74mNqn7qpxgHM43MgRic1mxKxB5UPZHNEE7RHGfsosLqDBxWKixUHN7wwzqSPvp",
  "key21": "468HSoEYnKp5Db1ErGcB8K1dCeydDvhSCTbChQw1LYjRbBXgMajTyGq17hiDYEceChixPtVWs3h9qjww5jS292uh",
  "key22": "5r7Whi4hdPKyUvdxKYZ27WkZ4Sp1qckhWpGwmtGRVSH3LfHZ17TBvTUdg1XqwMwnangRpZQzUMLVGgqYzgJEq7my",
  "key23": "6rvLq3UgDcHwfsZMijBmkieP8SW4xqVeyV4gdEfKQHXD7n1D8xsLhCZbkfHjMRHiqjwFq7zMcZYZJLmH1iSNDqe",
  "key24": "3XSWemhEa36oXMtYyZ72Z3dyyZ2nE8EmN27qvDVoPB4tGhsAYLzmsW33en8xuDq4m6H9FwzCSrPMXXqBvhKUsUNp",
  "key25": "3LvAcdPcNG3avmNtA2ZwMnLReELfTqndVXbxmzBoTkKuReMB1YvSjHCLfTfgYrxsmGQugzRNDr8VEBvGwvg9BzXL",
  "key26": "yR3qv9GjwSKdRZdbATqavfMJNb9GeR3U85YVoexFfc2Tyn9uAyg2QeLf7cZF6txQA4hszLnbGAKNuV9Cf9jxG9C",
  "key27": "5Sj3JXaipacLXVhqH4n1kJZWZepNCmycRiS6jBcJnyQSvNmmnvC3T7s1FyyUZVjqUem7C7DtsZ2Vhb2M3qHxN8ja"
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
