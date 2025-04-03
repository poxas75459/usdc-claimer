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
    "LRDYk5WJSbbP153oWh3puL44vY9hkN9qUXDC8W1pPNjvgejTXHChLQhyquXP2mqPkyyz2aUUwbA5QoaXGmbtfjD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NRWJbPoK2d9XUR16xvjwLgFcsAFK3FibkrmHC1xyU4Tk4xanWFx4Mhn4S7YzkdhNS3tRgo6RVPr3dr59pkSNXnY",
  "key1": "bG3fbHX3QaTBv68VY2LgP5zX22JvoQPYy8gWgrDw3CoBspTmTD5er4K7jeqqY2gSLzkyCJB12jZ9Y3eqpwxbSpk",
  "key2": "vPuFcC3c9QZop4fp2SJu3PF1WE3TtGjkw1U1T8aEpbNU7rtoMjDtg9mGQF33gudXcS9EXSjEEKFjs9nYV85vDem",
  "key3": "4HcpSni5bA5naygCSELPZcqYZt4hh3npaBr9KXFfnZ4qbHWRfMhVevYCpDNS1JkkxggoHN1UXKcuZhwDEhSqcFGD",
  "key4": "5wK9gwFoRk7vSoD9QapVEomijcMpmyKcCj7xtdts75jB2P4ZLcW3aEnVDLQUTBfJHLh7f6q7jmNTYC5hnRz3NjY4",
  "key5": "xseBcxvi9NdiWoibhc3QxfwK1rqn2ghKTUXpHARM736m4UuivV8nA5unbGSL5ScN7c5EsmJUmjK7g7ox1paqvHr",
  "key6": "4hoexi4mMCtgvYDn15WgaZYFEqYYdQu49vnuVZmSHFsLigzikF2atJ9A1Fuvohjw2Yr7G5d3QCFBYsJR9tgceoTx",
  "key7": "CxNM4Bo1DyUR5RKR3wteqfUFwXfjxwXp7W74DrV2zHPf2nv5xMjjNo2LaDhGqERx8akxBUD5Cp5g7PjGzbYT677",
  "key8": "PeZkegP2iQme6kSsfSze2uza6N8DsmfEUxju3sMmaZoqzxDGzFNBHbnnmEhxVe3JUW1sjzoyTehr5K6ev5BG9xU",
  "key9": "2suGoje8u31J7XKx6P4jRuZ3yemXmCNGMsFRjuWJ6LTN5MMs2gVzLnSMj3m97zLYtqEKkt4gJLADkQ5ipVnK5SgE",
  "key10": "sK422Gxm5jY4tQLJdSxeJSsPB66gZj8qDw4AgsaJ6v62wSFKhdVbEWuCKMDHw8bUsDyr5GJkS6DRWxhf7qkSsqN",
  "key11": "4HiPTib8i5Q7ka7obbf37FxYV4zPFP3xjnqHxW3UB6NuvEXx2FCZgGnaG7TtpAoc6VFhH7cywqkPsGwDTfEXd2iR",
  "key12": "2mYbNh3dk3WjkwQhHgyoe14nxBEDW9ZrvCC6Ukj5zPmDs2Uktf4qdu1cKfVqD3mcmK44uJCeT2JmRn6St8GMZiEK",
  "key13": "NXVJ9Pzgpt3J5SLkMUB8X6LRSMrnoKQD8xp6d6yUxzSZeTwKbYgA5nzLuZ156EkDaZj91WFDSr7T5LTeEUsiKjS",
  "key14": "24EHh4kMj3LxgHcDhdiaeVU4LjGV9dF5pLkmBxKbwf98jeYGQ6xHPgLknKs1pdRZaRm79BKkfJE4hhdy5JFTn5S7",
  "key15": "zNobyVmrMT1YsDr1HCmpVEy8tMYabehpDaWwSQwdaPMH2TRQpQgimMuXWiG26nENRDaBCJgdsYT9g8vrMrPSWB6",
  "key16": "5yjVywTb95CEw7N2houi1awdwS16ersecy9zBvRKq4bLD3ZCFtkjscyAsCPRaS2FAn9srRosF21wMLxUobYkRtPf",
  "key17": "22THTTRfjksoq8GFwv3BSK5XR1pEymZKmnLWFDrLNtxJjywzUHmcm5Ny54n4an2GHR3ZZBrLXVA7ULUDdjY4f7Ux",
  "key18": "3TjMyjnxGyDptTYjuzu5Tui17puWV1ZCn5jfQdAhhnf569DQw8CNE6JUZzJkkc897P5GHwwdSH6eEuxd2n13V1GT",
  "key19": "3Rfpf7iHbmeTUR1S5HP1ZChVEEUr9jY8xT563hPFwzyhVPCEuCLk6X7oFY3N53omwGyzCp3Eq5mrPpUDRqdz9Xf8",
  "key20": "5rLXttbNdwBK3LDyvctZMQ5A5587UgM8j7mRVD4P5a4kFJvBShfVxqgLMv4xMo8eesraYpGyApBRMin8xhAAwwUb",
  "key21": "4ezqYymPG5M747Gc7PaUkXQ2cao3sfi23rtfe61hmef5rdbQmcDP7ZS5GKKDMRjZsSntpqpRu9JPXUXhRkoxcAaF",
  "key22": "5nd2eYHwuNbEf8NqjC55UsTv3CsPBTyPYn1MhpU7Mcz3cdov8gT5XBTWRErJ6CSKigUfFQTWdBFoZ2WGZZbeEuKu",
  "key23": "2qHuFf8n2VwuC5u3T5fCEah5JydzKS9PaEECHD3G4TyF5C6WNFk6tGbsCLpQA9DFBbrZR55QoC6sxtpr7ppPddKv",
  "key24": "u575VrrVe89MzLCC6PcstHtRmKgnqaeHEYFFa8aFyqzhpeEziSkrMECVQH4N7wqtWKhDssjxvDb7DbAJVBvp6em",
  "key25": "2V2DVdxPvXJRb5JfjhEy26h2PivdrMZYkGEEkTNCMm3gPSntDM7PpfwgVBJr43ExjLi9exSghqvWminNPGJZaaEr",
  "key26": "28GeMjSFX3SXUvRNa97ZeXexg1owxM4fP1LaJXAe7MygjqZGRrN76sEFMXPVsDWGratHGG5NJkYEx9FVmtkSUN84",
  "key27": "5edvtDFN3Gq1rzrGdCViqgfJY3rUgGVL4hsnL8eZbydTHep81wFcjmCvr35e2GdFpigdPHXJDdWJHLTyg497fP8U",
  "key28": "3ZBseVX9aRnKeX3HR8A5W84MopLMG4SGZYoaSVma7yACCzV73a6939TkwutszoC5j4UTeyM9rks1jwfuhRpFDr7N",
  "key29": "2Q7MFouSP3QWVZoYL6wTmBy8ivhtKNfcju1HnBn8WrM3JgtJ1CD1qnogUjqdnM9JYYoNbHeESZhKBDUorx9h2cZu",
  "key30": "5qrmebgTBCuRBVvBFKuQxe2c2YxoE4eA63U5bL5iCgh6Q4WFrkSN1RRHQYiSJMzGRDjUdR7EhYUJjZQkkR5zmTv5",
  "key31": "4kwLikMRmHgyv6H7zNDNcjKepuJryt5rYcUcAbhTPNUx7nGSqDyoGn2jfW63EZkyhqCjGtJwDRB7YzHre4tm1CWx",
  "key32": "16X2KiTDkeTdj4MbhM8p2yggrqDYUtpRpKfpJB9Bt2GsmvoNHntP2SQFNPxg69NwmwnTqM2E7JweY2eV1MR2ELr",
  "key33": "anihnFXrbLyXHe9q3HvYU41LLJ9kadNNWTHAVuEpYiLYStHLffFqnAYDWpdscbkA9Z8QuaxqvbzHvVMVyE6HSKC",
  "key34": "2SYrq5ka1upnZeFJBCfdVTECWutYeAuKJSWCeaUjLpourtFFg4sM3HuSbsDywUE9fiAc8iQhomGpvQPevDyvnxpX"
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
