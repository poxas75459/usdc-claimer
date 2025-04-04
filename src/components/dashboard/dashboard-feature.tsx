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
    "6dfoSH7dneszELptbrjYV7hUeTAqBj4RAce4TLaqpXwX1ok3ALU3TZbcJQZcQcU5ptwmN6ZheFcLChiX21NzrxU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Uw116rSQditNidGX7DRP98zxW3oYRtbrfRfygQknFU5TtaY1QWamEHo628AZQwi533e9J9g7RhdDyjDGNrHBxiL",
  "key1": "522TFPxKzvhkJeW9YJJa2QcuEquMyWHQPwERvVCR8cKH6ktXejoYSGqNrxTXNKvGhnxHYThaiVhLPzN3oWugyxkJ",
  "key2": "281ATQWtEcxrTv9knfxUBzH26Mc9LdJkqiA9mPwLbXrb2V51htKvb8CAMd66VBzYzqNwz6Mx95gWBQGJ92pwaznD",
  "key3": "bcQMvDFHd9ZaHSHfg6Hg45dzaAEiTVP2TMYuqcVmR1XsiT75VHsdFdBDWauUWSrChHJkDzvtPW1dKMLVFKXjS5C",
  "key4": "5t7rDMQAeAfEvDr4zCzFuqsgbBqjSfF4F1t4yM4c4jjL2pBPk57o6aEB4tq9hkfEZmfWPfRJgKdVyrDvhoJh3u4w",
  "key5": "343yEYKCW9CzptUu3Qmuf414EfCCeX4sAWpH9MxVgQyCfnmfxwxg2wSqT9xj2d6bA1s1z37du91JshhQCmbA41DV",
  "key6": "5dPHVzbYzrsVMMDtyuxZeU1JPWtd5PVb6ANr7brQ6Gk2ypihb7dRaF9XACicGQfmEKPKf3Q9Jkmmb2CuArG72fRW",
  "key7": "2kdjTBTLcrFFKmnA1WfM9n5VLW5qkff3FKtLz91avQLK2RMhZsrQchGSQRp6HeUzNeSNYvr1a8j9wCHrEYqi3cXW",
  "key8": "5FNgbtMKj3sHvDwCCQAtP1W996eaFueLoXZgpbFV6r3cRQb8CyhY6wLw5uTaY89MmTTYab1pDsHiv9zyVRLgWm4X",
  "key9": "2WWYND8J7x6PFRTapE4pPgA8kA9FFK1BByPHyq339gzpa9iaSrNB6LfDU4NLXV5XJA8McAHJ363CL5ZTN2RLxdhM",
  "key10": "4sYB4pMT87ehAEJm8DGoGXr3F4BNVWA4mMGNPL7SZNqsRgPwKZMssjeDVvGPksNnZZ6676a4KR797ujefTKEMEtP",
  "key11": "3PQy4v361NxcxtNGU53ZAzPu7f8AvrDj1yCKrQhL4g8aks4xcGNqruYf3Sg8evjr4LsMU7LSpRMLiRDYupfHytdC",
  "key12": "5NPTKBxJUvAb9qG5mtnYdFEVrQ9aqBHQBqfX9b4GrpbRMG87u4qMmdam5UtJqW7qSrm3TsddCEnHR7HeNoDPqvQw",
  "key13": "4GG9xkmNmm6JynZ3zYP4SfYj5fDwBkkkCXzpucnDPPcKE2fSz2SpvwNz1wzG4Ni5evYJgqPkkUUwvwkcaDTLAPRE",
  "key14": "dViip8bXvzh9jpeJeFnbWnkmEZjKkEonS2irYSVrDcJQ9hbgw6BB8m3xAFhtfVTYdPfZfCdAGMcmcpp1cD3QsKh",
  "key15": "2wtcPzhh1fU4D2ESEXGFj7joAfXtvHTANAiLhAUZFHMAnH7fr6z54nM4ZoA4YGYsuC5SxjWJ6Q1MS7pquRBNUjBJ",
  "key16": "ymwwdYPKeB8jCE1PnzQWdWQ545p5Yamzb667TDZqx6bYiiPGh6PJxi3Zw9LCoaT43b2tcEVEzrja5BdDKZF33Zr",
  "key17": "4EcWnhEYZ7Ershg2zLSdvnnGuSWKzd5AMzR6DqVQhc1FQtYVQtPVnnRJAmA17f4nm2MHjF6Ub2VFt2WJYeu2f1yJ",
  "key18": "4RL6cPGSN3ooih3YmiPuTKFN9YWVUskRNu1KhjEyYhHKTHD4AhAzQ6sB9mRsr9GNv8hoaLYuPjWxTX3aPngwvbUp",
  "key19": "2Q1Qku8Rxbbn3ZhYNgwZVhgNtZm8MHapg52qdNAJoZAzL9ifgRY79SAGaraVYXWSSbPCYVgQjP1Snwj2mfGzAaqc",
  "key20": "5k9UiE8q4TW8iGD88ntm8aomM7Tig8T19rMmyF6zRRNTJPGpfJSvVy5sekHACyK2fTaG2N96rg4hf2k4Kszesfim",
  "key21": "36bmjV5xfqD8Bav1Et6dH7yJp1SQ891wywLSjQqda7Xyt5di5G2d2qZRh1PjbRRhZc19tL9pJpAzFwTA6HMxb6a7",
  "key22": "2dgf3TdGonir1FiiucmYfVQFtdK76ejFwg72KcKn2m9XBsugWJbHeUY65v6cudgyR5PtMwK3KG72awCLxE42oEih",
  "key23": "QW2Ck6xUtKy4PmRydECfFfytE296p5FMgHaf9vnLieeaoaKAnAV9RfoQh2rEDKRKWfpLnWcxMMcQ313ZfaXZAS6",
  "key24": "2iebepduU9CNa5VSukNwPUirmWvKxfcfJTPhoV5DgJzdmRUxesuEwrZzSXS9iLXVsuijmjeECrN66aSHGrm3b2j9",
  "key25": "3vK7uWfcmUtLkWvJVHncPaZfzLthmosnU6BVuMVPGqXL1hHypEKtBxb5tzYFXMJGGRRi1B7v5f71QZzDTv4YBRCp"
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
