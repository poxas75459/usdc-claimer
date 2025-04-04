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
    "522MnAPzXambQomgp1PSecdxM7uZ9xGbMKUJCmWfHsqddwXFiWMXk2Wv72pVTEGTx8SPcybSzVYaPh7S1FeFrLt7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NMHMMf56VFPG56QR976rMwWbRfCrYPbFdA7zx3deCEfFPs3KjYhfWu7BE6uFPXK9FXQTqV379Neu4honXzwGQg",
  "key1": "1hpxKnrz912dJtU5QtwGWe2ByquE8B8yU5WwgkgNAJ6Znix6cbnBVYfqhtgTPL3ynu7hn4rf51EKpEUrkEHVyvV",
  "key2": "5qBFZEfiSU47T4KMyEcwh5Z33QwrPWpzEWG9WtcLEGjxhJNoMMwB8WAMM4S1BPYjgaKWjbC76kQ21VuianuqL9qH",
  "key3": "5Y81Zb7A3FkbY4kh4PrXXGxKyxWTAUGQcfZRW2Ff5RcVq57LxMSd78L8STUTiaFoiitwXpiVrZwwoWiA2zCVT3z5",
  "key4": "NcAndBtcjsdyeh1gvL85Vtep85xsqdEqRa1y13BDuR4TsLNbJjQPcyzaqfFdk7z3TrJHVsWqKcazpxGtpfNMEo7",
  "key5": "Rx3VpkGEhvk8bp5CfCKd4ik93HaaEg5Gnx227fq849rH48Q6d6VsgB8QPpzqdwkGpWAJFvtAhxYkDToPvXugrcK",
  "key6": "UUf3uAf2rvkWRZeB6BWY62SCe2Ryu7szU9hSbuoHctHJpjao7NC81dYiJ41NRZeo8m8urYj3AjQTC78rGE9BPYx",
  "key7": "tqz7D4QFs5DhrgQiyo1GF1WARYptjTG3nqXmHb4LYZhX5PUNbTpW2jPZ12wseDBxQ2oXRBLL7D9tSnanMz3cn5r",
  "key8": "iYLKBj9cjLx4piHCAqTMvVFEiSaSJ1U5emPMxxXVdx4cdzK9wesRQLrb15YWsrSkG7wWvZef2p16APX8hKwLXuj",
  "key9": "3eYutMXEJf4xVaKpeabrtB7Pqk1FhaiNT8Uf3YZdcrfkfamAqFtJcHo2M7PSLVkHcfRsTYWfv9fpzU64Uaw4BbDG",
  "key10": "vUuepeCFWUw5RqFTnkhPFuWVTSzuzjDRxi7VnYX2YoZubxFqsZ1muE6kNqxex2D7zQtgry7sD3srmSWBXfpnNPc",
  "key11": "389R59WB52ugDjw6brvvAPEHEtwd3F89bLf9t3zQZ8CotQDfA6xT8wrEi3v65s4EcXW2da9mandcWwg8NNrAEhQt",
  "key12": "4SQSnfYYBxz7UCLVFvea4LePsKX56nQo52JK1D43TvrtsJwkMfEG6spMfZq8PEpbqe7e4r5w2ukg4bPPF4vxXSR8",
  "key13": "666aMNXDGvsL9BcNXjsCsqXgf2crZJGTQDtYHDpGiPZXsT3Bzck4R1sBAfXg8cHaKxdFfq17onwmhJpHAW1KPzqM",
  "key14": "dwGLp4Fozkp43LgzXNyEb3FinE2Wj7avug7jH42DH4ZC3oSQ37Dex18cFWSbA687PNZAHKG3ivsP48wbAhMBrJ3",
  "key15": "3fYW8bAtkk7y6oSpUfKuRRd8qNuq5htwpuYQa6WBwNoUjEwSivd9yQ33VZpKUQmHLUH2kVQBYFtSvSfdaK6p7LJo",
  "key16": "3nNL2oRRK1MQtPpiZjknXE44ubtcmAjtpfn8sA3g7G9pAwwQpxUCQFEB6TcK8VdJyyRvtPCab8FpxTB6HPDNazsQ",
  "key17": "27fBibDJi7WWXVcXVmvGDeH6LCZhAEYj4fnFpen3Sxg8CHbV3rbXY31bPstxMUHdS7p5BqaD32KASmcmqGYX9A2J",
  "key18": "dpa9nzEVRwAcNhgUy4oHTfh6zWTkg5AGYQpWWa2pgpciicPrEYoN7y829qd58f13HVMUtAi6HbfD6iTzyYQwHGY",
  "key19": "22QmYrvWJQsLCLDm2sjptFtktfcXiApibPViJgbid5Uu6F1acqm3oAR1tqwM2WChcyQn5Zz9K3Xg768YNHsNCjXU",
  "key20": "3fb5mUE4muH63eTcjhKtRHTNbsXVCmn8GkhPthcUfMtLcc5c6LCdW4iHkzZQZDuyLLcBJgHqthC1X3jQoj2r2DZi",
  "key21": "4C9uUXqF2cp7LpZk1zqGf7cmDXnL3xRgKcXmmKS9dc7nLBQmTU7CGbuTN39pfaJDYwDAkZ5AugycMh4VsS99GJDF",
  "key22": "5GWADh3MkbnjvEBNso4RXf2gPMXknRQhca9kfehLNagrRQ6nvbt8n5xdQAzMfHvWDmpcP7swJSYVVxR5vgwTTTva",
  "key23": "2TtFnQR69RNXJVHvP6YUeDAHox8ML1GJDxED6LCiwJbsod1jwv5XDAndCMSuRzzkXr87QQhPwrJMB3zwfajpNw49",
  "key24": "59t7JKFRHMf8AJ4pxmrJppCbsj5q5nsqigtFZmcQqYNPTB5qkbKstTiAeV7QxxcfbarqMSzVM8SVyk8R1pC3jY1y",
  "key25": "5LaAxi7vVbdS1DtPemufhV9PGVKYjVTa2akmYrktce2L9a2QSrJAczyU2wGv7q3StYVBqfCPb7PJHSmvoyZYHG1Y",
  "key26": "2xgaiE72a7T7yBmMp4GaHYhFrm5mBiEo9GyyYr8jQMiyYdMzEYe8uEEj2AAZunHwnjXCnpBmUxVpc8KNSHvs9egc",
  "key27": "4k8cBqjS4SxKYcbCWuutkak5BR7ggSWH9CRrn5uz1waEmBHcT9kGPnQ5CPnvUztY6zkTw936AZhw7QF1rsMqik4a",
  "key28": "3gDvhKcybnPD2qMFNSjSnxHuj5AAeS8w5QbBVFGnR7GpGA19kQbLbBNZcfbaYjFatyjNPBcnGemjKew621RSxkPC"
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
