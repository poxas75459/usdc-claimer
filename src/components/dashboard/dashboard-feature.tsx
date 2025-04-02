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
    "2XeW6ZjX83tDb2PdoiqwF5BA1qVgoQBYQdWVvkeGpy2phg6oXt3QmHJfEA1kWzwNozAfLxGoYRxnjuzumYyg8f8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NyCWo6mrWcYdrY2bhUSFWgLnHTUPqwYQ7xcW6F99hhjfdNwFXDQVnV7JZfmYCKtsViLWMpwQnuKouuCHDKBXrAT",
  "key1": "5nGuEQyzqWZcuhDXRGUcFmctgEyLd8j9V3XPswHwJkMzsGimUfeuErXbrfET43Z3119ecBb315YzLewAdRsn1mP2",
  "key2": "4fr2pwSiUutonFvsgfpJRLQeXdauAENYqdT4Af2SeNrAzCZzgcWqLjAZPUv3F9x7ympJttrt66tNbhFXzUKY8jap",
  "key3": "3X9dakoQkSus8HSphf2EUXECFW1JSfZE31AwkJLnLmu1qSpwbEi2Nd1Z67waavUsj7MKvWgbSGrHsvRCXbCHiwkJ",
  "key4": "3sfomASv8WYU237B1rYfSi1K31ys3Cio3dsg7ATNGsLAwWeTGoxR7U4Gqu2sJy8hBVekEYy8BLatrbUpZuKQcQLE",
  "key5": "4AezGD4ZwkBMWVcCwkZiJdJpmCvc7DchNcZYa9Kv6okgugD5L5L1oeJXTBNLRywQJ3MTvbnV36QZQUoCKMy6Zvm3",
  "key6": "27e5HQT3Gmugoj1ZnXFJeaxj6WtATYdH4CPLd7n3dGMpkQaVbZuVbfL24DKhLPKqTYjkR4irkiQgbGbBbycJHdSf",
  "key7": "2MHx5hWaULY8kHRUsrEEsoNgJrpz3GLxKQtv5c2uqg9oBPaXRvnhhoRBJK1uhZfxzbaKEHYpZGJhS2zWGqUYMKJj",
  "key8": "ouNx56UFbWZjGVwxvDB5KDx8K1j7QGRCB3cQsZGJrxs6v3EBB7LL4XsMtA9hpPwdPxNsFUfN7qRQQnC33Zgk1Y8",
  "key9": "48SSPXNTYFS29YN3jWYa7Wvc2Ntrr4vCcjr4BR7WGJ6bcMm5Pj6rru7pC8pbqqT7izHMxsAygGdWH2NrRf5TG5zD",
  "key10": "2W3b4s7EkRN9BDsU3LXxkyXPbg4q9JTh8JFRtxMz49beyxWj3rVd15sFQZKJg3PDiBuUQvEdDEZXKEwCeLAf2QNG",
  "key11": "ibMpiVr5EoYyKQAdmeNo7Fz33cst3x1f9EQctC2v7jf67EUdehiUYV753LrKRNcjEDDMjHfPrccUKekUsWN4D87",
  "key12": "YXCS6YvBPmK1zGoDuwjtEEhuSMW2gocGVjj9t1WA9baQwEH9gDCdYpwpLzzoATJQmEdUdqTHCZo7Qe6zjRy6ftz",
  "key13": "4av5X9xpyUH4UGQRKxZbztXWCSvJ4YiykFDvAJmPYk5UW5SdJ7qXjxBNYtgREZa2uJbpMAxS1HMwuZpGYKJLHpiw",
  "key14": "2vmzbm6hfMiH6B8sxqi7L5Jz3mH4dGTaf4KSac4eru4pjUG9BAyo1mcJXcJnDKbihK18krgh9gmLSw2JgPaxUktf",
  "key15": "2dKQuCnj5te7pMBLwk2n6ZkwQ7zyMSxxS6WKF83PMqMGrE8WTMePDZaVHxQ9czrhJyBrV4qEKpuyQE2T3vEqGTnF",
  "key16": "4bU9SX9d5R7UU9u19YnZAzNyg1w3UpiVYhoMv2cz3h8XNr6kQRDDGt85WrjTTR8mQuBpv5fXAyR5FqfhfzfcChyY",
  "key17": "4Q9RfACZYky4AzcxwtQghvJrFMug6ieJ3FfTGPM1RLkJKQyMqR9X3djAMBffc1tLQCH1b9yWjE35YpuUmtT5FY2r",
  "key18": "4gRrmdQvkStfZxoWQKvagHAfd7dUD3UbtDyK5nWDQhPArmtaSWdmxDXQfMHDFtt5nu5WbxnoqGpQvPB1QCZKDKR4",
  "key19": "3JXdywmR213KM7w8Fsi91g99JRzbewEkRBbcsB3mk1kffqBCwgroeDhpi61pNTn97c7PEw1cnQ7zyeC6VdTXTxhp",
  "key20": "296ejhZEGSVEJcKPyp9rEQwU8iP8ssnnafmTFx9UZgtpnVBFhTxubnHsypT479ErfC3sgjTvDV8uRu3ZjQzYMtEF",
  "key21": "645uQyAFYoEePAWGv2qMv35VMYToZANC2mAdZQ47jaREg8qumCidehLqbcKwj56Bgso18kicAnZNxRmfKhcMxgcF",
  "key22": "5SiTGRySksmTfq5JR7Vm15rK44z4wyF6aXgLcpuMPGsh2C4bW3kQNVqCy6zVhxWnX8EGnxMsRGwatoSBxWfYTkr4",
  "key23": "4RVRtYhGhrHVwAmfTzqu4sK5PcJBRwBRwJ2geVBVHKYct2bvcdh3idQVYtwhKoTAkNqoCHviVdKmkk3gW2GAvhJZ",
  "key24": "5sD1yD7XwoG8anGAcjqKmmZb71SzgjjiMHybYwZ9Kaw3JFVynJxorXHb3yLvYAxwuCez5m2pRBFFmaVn6hLb9FYy",
  "key25": "3hoFAdJLnHbRGXBEk4Q6otqsnWBDJPJCrYJVcaSyzgk4AKMQRUcAVUcr9ydKXoUujAJtN5vq3RaCFUiP1EM7DGrW",
  "key26": "2zqMgGttshUkPb9ENzN7ZmXt1Q8uehjVCKgcsBLLX8vNDim52KPoqr2StPJ7UtdrGNScfQrfS5vbBJrgmN6wdwAT",
  "key27": "5ppkcTbaaeAuM7bDqXstoMo62ENbcbAkkXrmfwAiK1ndksDwDB464GvJhgeg9C7qaBrmoxPN8G5cak2QztVBc7d8",
  "key28": "66VBw8HzYMcH2L46oG69XwGuHWkMJw3EdxVQgit4QZfGifCsxVmrCgg9WP1N14zekuBzNFGs9tJdrZgV1tUnejq3",
  "key29": "3nGHcXLwZnkAqXWSSNQRPrjgLasNuWCU6aCVzxFNq4TfDG1AZCvGKJTnVMSwJJxC1vMyMHuNJYSxTYLaHTZjVbLy"
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
