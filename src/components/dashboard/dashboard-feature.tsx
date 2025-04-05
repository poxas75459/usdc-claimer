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
    "2QUdodCmPkQqurnQUWMWYKLFuDcYZ2g1EHCzk5SSxDQbztXmVX3jWjczbcuN9JCD3WQf9jxPSBFHVHzxv3KMmccE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48fJv79kMM9rgGxEe6v5AXduiEir5kHwevQN4StxWbPnhRzNTz4jZ3QpuHBEGKiykG1CAmSUtTLPtnux2NHAEadC",
  "key1": "36K7PtMSbvNF4Udonsqcz9Tm8SuXRveUhpVs1pUTsrNiwQxbNtgzF1ygiXm1K1gb7wseY4fFyK1VUiA4U3VCHYyW",
  "key2": "45yqucrma47iuQDniFgZ7878p56L6KCbpSvuYrB8NmWqBctBD52b3wq5TkH8cSMqRJRvFoTGbN6zLgwE4WbNnESo",
  "key3": "4HUKLWm47xkYnJeCNmHYcnBDTSNihNyL4UUxBoufvAhtQUk1J4XC4B4y64hjn3F5oEbe7U7V2QaXvrgAQ4EbPb5Q",
  "key4": "29r3j6MBsetL65WYQ3PNmhfPjdQhRp6bVea5i1j2Ps9QKoB6rVpE9s1C1oVdmFiGY9sMwWevWZJxU5yK1xDQHEsV",
  "key5": "2pXBWajgKErcrmcCVVETF4yoSa99RUXiWwGSxsYtMC6xcqxhpBo9K4PsRvqZBS5MozsqsvSfw2vS2E4PoGTczN7u",
  "key6": "4SnXfk4Xt2Aww7Jj8PxJDM4qQ4TgdiTZN48KxY2Ndr7nHojZxwuaj1YnkqpnzfKPgw8aVya1Kt7ehyx814X9yHtT",
  "key7": "56PcoNoiXrCtL5yqqHsommTQGCbpVb6QwvJeGT2ZtH3R8BVRmeTWBWyG1LUWmMH4QCejY7E83kxi2tHBBx9Dr8dF",
  "key8": "58vJF6C1sB1bgWW5BphSbn3gETDwuomotV4oJEWZLPNekRqjfguB6HuQZwK2q7FLrJxkRYna71PMVwc2F5SrXFc2",
  "key9": "4mmdgF6TW1s5tkMx9fQs7B2JHEiu3geKYW6JoXAsvD5NzJbiH29X8ttyEQqSPjXWxgfgj2in8XdsLCNPevfcA7jj",
  "key10": "479FFWD9XQagAFesbEKnxX2YGPy933FqqFaFvWcSYAXnQxwotnhf81iR1U3qTzV2Adxnbssvwt15TcRqbpdkM76P",
  "key11": "3cZTX94MHWizktqhhyMkEnB4NaDYr4qjdqRJ2DfKJMf1ykUvfuRc4JB5FPjEtxFD6F5Wf1qhJFn9hKb6ZqcUEaxz",
  "key12": "5WqvwypWRBHnLCahRVW5mVQDTJy93TmNh3qCFveB5guYPmpf9MqGMJ17mQpHLZy9gjNXWD4VoUvnepjdUDQQmTPw",
  "key13": "2YbvFGBiC7fem9662UpFNvuamkYjWkCZLC19E3Bdw2R9Wp4oQNSZuCK7wwTG43kCoW5rfCbX6AU7n8T45DsRdsA1",
  "key14": "4pYRiBtqaaHjSgu6Pr5ohSWU6diFYD9L9Wnj7oiybDoKacmRxPawa3tkALYvZtYUapLTM6KLzPhhuopZAUGPC2uS",
  "key15": "3B2KuBNauJDhWxTaRqgUQb1gCet52XmWKxWtTUbA7xRZh8eTYZB92gyev4UuWL6SP3YXaE9kJGZdVxjVYg4KX2Jz",
  "key16": "4KjwBuc9Hfzq9sNJQa7UeABCTgcoY1EMZWG9JAbb5gFEBE9vitC3CWDA6bbHH6uwXPoauVr9KKy1qhCjgkUfTERf",
  "key17": "Quegg44xiHRBqcrLVfVNC4iwCY3UnuHhVyRvzbok8ktQSV588nRwTMh8osV8mz7KVncTbpK8CH3VBxLiCEJNYPe",
  "key18": "39hQ28bDTjHzqHf5BoMLGAf5g2mD2Xbx8Lt5jbGnjk9mMWsb5gJ1YMgaHfWYrqHHrZ35TDMj68USiFFzisTJj8GG",
  "key19": "2nLVnfaA9fQfytuoYPhVNwbtkASTgg5sNZcomy3G44aLEBKqktNpP1NFxihMssidBB8gMxYi4kkFUaBS3Bap6wPp",
  "key20": "3JTQRPXKJryMH3bzhx7cqDUGqWmtFevxkVMN1cXFRuZKJPGawXw5NTk1yEmhMYyyJhJmGvyiks7x1zLTou85YYTx",
  "key21": "5yQxv6BC1jeesLnG99eF4uCC8K8ngXntmDhLnYwx6u66LtLhGd6wmBbjorcPbWwV7D8Ti3rzggLVDCk6X6WKvpey",
  "key22": "3Z2EFTZUb1pcLcq4D6EMaMjKhCLM2VSAsncFgvESsEzvLqWLXhFYxrABZFuWHHZLGGgNBot3ttJP1tfmKaYY5iDR",
  "key23": "48fG6fVSDgFGMNhS9QDk64ggGohqaCMDaPEu6zVLDhRVjLXBDhVoWizGGNCH9sKXTbVArryFrZkQTAuuUhTuR7Wm",
  "key24": "3C82zVsEZAdaZq6FuVWBZWq1S3Vhe1cpn1zjBf3mp9Vt7asmpqxNxynLRfggDK7abMN8YesnGfzkr1PhVjrdnmRP",
  "key25": "2iWhM2xSeY299rCBonheCnNjtsC1Y3vrr63GroptrMBZpmJ6f7aKYMF7uYUvSvKw6jctFghDroQYxFQAu8LywEfR"
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
