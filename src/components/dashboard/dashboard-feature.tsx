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
    "nDnHaBAA8FP5r1VyJenBD7erCxSDWa751VDtH8ogEQxNfYmGRCp1bbbfjvA55d2cpFz1kEzgq1qa51sYHZwgT7d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DY8k43XEYsHfNXLCdKQ2JoBUK31NEWszsoF5wKbJQ6fVFVd2SEupWhpXUWD4D5Hy1zrrXqGVbqJ3ETMnSZuodE7",
  "key1": "3fnMqLFXDcfTa5Du6gQHmbcpnkyzQnS7QtUDwcJJhuXEayUBEw6NBqigAGfYFdDQnd6wXgNia868YgjnaH6FFhye",
  "key2": "4k7maneHP5pmm8Lni2cFHDRpjoparqfNZv5pHnGrh8FKnLJizU5BkVJEpr5KecVakoVn5fmNVsT72W5PzaDnvvmP",
  "key3": "4YTj8GWcqu8FhmftUrCMVs4YRPUhJffy1VEGpwN4HBxNnp2hwdWk3SH99JtZmYuHdpgHyFri3TF1zhq4EumYEsqn",
  "key4": "5S8Zb2YxkoY5MSxEwtjUWXX7RBpdV9XSGzrcyxjpNAr34hS5M2prqkG2n3Ankt7U6qZcqunYUV6e56JVNE67eRuM",
  "key5": "4DQHPjfDj8GhoALTAwUuzJEQCB6NKKiqyDNzeY6YgDHwjbNBi3vG6MQQZKJYYEK37jotC2E7DYihodoqpRgtWZnE",
  "key6": "5grFR83U4rWANw33ehfaR1XF8KsQWuDp6VrfvZMujbbPV9mwvrZbd1m7Q6zSyAHHASu543jVEuDXxdGjfWQ8AeV9",
  "key7": "4wNcoBhZA5cKtKynh7JXZKwS4pMyc1Vr4DZHBeDTg3TwNWFLfySwJtsyqbQUeqMLqyy7XJrRV8KgjdUvvxpQEV9t",
  "key8": "3SZyNTLnJGxike5WBHWqSoL687e2tFb78nVaF1aUpeFMMGbD8unBqgoF8KNChV4YHvGKcsHhHBUiBguWtagRtrix",
  "key9": "5iskhdhvVoog9QphETC1HsUN1cW5Adkoww89ygMFLKPqzoVm445QRTwULoM469qFv3zeFH1Y22FScyHQDqLKomkd",
  "key10": "4rdgciRQe9rNk26qjeyRJv3x3Q5KWfSw212NhFEJncHcV2vxNhh8aQHiUEWj59sNTtFcp3SXyZzuS46wUkj7RN2t",
  "key11": "2E3LrVbNfo2jX1J6krxRSvF1pAkHRPdnkiJVjFUvnCNaui6QNUm5zsJN1NZAoPq9HWV4udQcyUoPyT7kzGUYsWLj",
  "key12": "2c2CBk2J4BjF9CNpqAJBQE1aaqVE3K6zUFt9ndb54ec7kJD8dstfG9VPUzbeiyCUZaZSoFTJJBU4ucNTCYsuCFjE",
  "key13": "5SUK9MWudrTfUUNvMBsaQJRa5z1NCGHtJejw3ykUyouCVKJiqdSxy5vrhpkEnDX2sgGtQD4bcTGTZ4CKUCt4NChd",
  "key14": "3bxCHnA6W7e7G9aox2ETDefxdtTcUBXrqcXJHExcYFdfUQ4yzGfaSRMUE54ikFTgooxdACbf564YeiVkPg6sdGC3",
  "key15": "5ty8cZsuUnd3HWXwoGSeW5VkodWF4j8tARHbk5W95jJtgVDWZ5JT2rhVYZ4qpf7R8gfjTsYSoNLSBrTs4WGvzXGq",
  "key16": "4UHENLBxWwRpEWh1tdZ4ge6EUAtmar4d1XU8jVRe7mvgRpe5aRYbVwngQfPVA3nXAiZFS3gyfJF1RKGxzBNeKX8i",
  "key17": "4gsWGKGuNE2SUYMgQUAfu23CqLM637a5JSyhRcFszPqmEpWG5HW6G8Xa9mnhBNYadV2QjBVMiP4r9zuL2jNuBYRV",
  "key18": "bQmxZ2MknZ8yyTaSCLDHExaZTLUBBcD1TJZwBYFv7Sqh3mHyijjR85vnobLS1hRyabfh8w2A7NEFrBNeBkwfX7D",
  "key19": "54T3n3WopniUaXs69UbVr5EnFZzALq3gf4mxvhbUw8EXaEJyQo2uucPpSbcHbgrsCXUQycaMVjXrUQPrLdAXxvQh",
  "key20": "6dBeKWrn2YhdbMm1PCsS35JEZnC7zgaEAwvhGJW8pCy7JUNoXsMpdRwj26kxXjyy1hkrhVskxtB8U4yy7jgkmxX",
  "key21": "3uL2MYWoL4EmwVDfCCWgFRYnBYP9TsyVuu6gAQDyy2Mf24pJgkBBR8SHRP52Fv3DdXdsPJXNTtDVKf1cTChW9M1N",
  "key22": "3ui5zc5fmC8UxPTQKFXh6h5LYUd8AqPNCXxKRCuk1NrdguxGSXhuhFuxeBE34qJC12wYteYLKnPbeHz8rqZpAoyi",
  "key23": "4WKxHcVGKT44nmskR55j8QZGM3xkUxe2eDHmqoZw1xSeHDwnR3s67VDsVZ6JCRKQydCQCffBhZXwaazitR5MtdWb",
  "key24": "UsjA3PfXRFZxuvLzd56tpKQuG543FtFMQ7k5dFiptQrUPX3HztyJoQHQwHeMeMC2oR3FqdH7fbrBxt8rRCxvUNb",
  "key25": "XyRKrzGDtF3vZqzPQhRxVVQZj9gPGMYet2FR7tJeeoSaNrFSLakZSEoENpvGhNZo3xAfNQ8fLCqLd8uaLKcLXr7",
  "key26": "2TEYPVA2mkzjHAz2Qqv5MDU1ELpunkJz2mvLzrBPX94Cq5pGSM32Jjdc8543QHqNnRAsJwxk62UKaLJ8uBwUuspz"
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
