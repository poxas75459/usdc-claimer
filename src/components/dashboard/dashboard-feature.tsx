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
    "2ggj3fSbHN8tU2j4KxATqKFAsAi93HFFNVr9AjAiu5Ru6YjLoAxyoM44ktExjQoBWQGyTaW5daZRYeHb5NMEuKU1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N4upoL8exxq4XfjN3LJibHAaJnzZBPF1Y8NcE4gKWcJaZ11i3wj6XhBccYM8D73L4nHZjobpi5dmz7xKXYErphX",
  "key1": "5eQdp9MKQTu8CBxCueFwd5fnxzgNongvWrNhgyEnxTAuDcMuPA5THZhonCUB43rqbK9nhJWgnJUmcHmRSWA8W2xT",
  "key2": "3z8eJ89qsVC888yzBiZ5nbTeE9oXCJXorWq1vKtBKEUvfAxcZiAsgsk9RXnm7cVrUGimmqkfZpv9gMrVJ4poJTYE",
  "key3": "4qQgFeJc9EF9ag9eb4KYpi4kNUnEZzrNBBLweWuyVcmrzWgpH8DhTnYYA4ppYYkwzW7P7gr9dyJJ9VzD4rGRQ9qM",
  "key4": "625xLrX15Nbf8ZvPUD2WkLiFYobYCpitY1iu53tcKNNXgJ1tqhD2FXyyuUArbYvu8hX9uxqEPyymavt4EgZdNLTL",
  "key5": "3nz1v5tpToeAqpktqtZe4uYnsTow4A57PKipTVhauKUfHHL5qRv26tQ1MXCcBzrr83s7gScHfpgif4u2aVnd5BwM",
  "key6": "2ndfSXNTRC8PRFCPQkaGhC4GpuVv6aT1RdSFRFBRn2fD2rEGc3UCb7GdYKfY127wPQ28tFLF4ao3e9UNdBnaCgDh",
  "key7": "2nVjwueFJEQnRwnNXFmWzgSAS6sw1NHv8X79gBmrQfz5daL3yyBcGpY77sDG3hkPHTBECc5ps1FHS5eCySbPv6a6",
  "key8": "3VEotsnLZVFiGrA4n4YTM1ivbZ8jVLE3YF2JBU51bfdZRTyy9zaESrM8JNXAoKTUB3uYA8YWTZ7abrNAiJzCYTtW",
  "key9": "2MgZFvpDdsdcdZXw2rAWR4qABoL5e2767n1e3PHxGtpfbHA6moCjY2ogMJbnVxtrYdqU3UqPBbU8W5Ena5wHZU2W",
  "key10": "4MEhevNVk6U1BQuQTrKp5VKy9X7Ay9qZScprBniWB7rpR3iWYpLCjZ9G7kxAfPgzuxZCn7L1T9oCbC9ABnHn8MHR",
  "key11": "3cbFEVBnCnZWFagtXmfsPCCfowcjy9ezzbS8ebuJH5Ds5hjcQX69igpy2cnbT47TtTtM3XAade5oS8mFdZxgr5je",
  "key12": "3zgPkAsxyZejCmers2R4zpi9GcbuM34mS8AKLdq3wBtRzupbN9yBK2DyrBQ4GT72ctSnC2RDZYgc8pmAH3kJXcKe",
  "key13": "4sr4ieKEhtTATb25zAP4KA6HkFLiMeMRYNLW1yXUBoG5eL8pexbFuGhLymFdmJrg51pu6VpGibDyFYqbsYwsAJgh",
  "key14": "2xjTPB9RWHYw5YPquWffJphRcpmmNraZPyuEXhveoXxcdaMfZUafPPfgw6R7ZpLyDAmmm4b8bpuLpFM7KTwPi98u",
  "key15": "4jkqVMQvEJHvGY3PVE9QtxvAT6JDh3rHGE4C1Y8hprMyMDqTZot1piNo5cHjGRnHcst9X3B9wsiihHymoJURbDTe",
  "key16": "5eipC9jwQdAyuLozw1cdU1yDS5aHSGUUchuRPLHFDkmgyximgjx76YvZmm7ejNvdq3jyL3YGMJERT37T5zNnpTog",
  "key17": "4HkHjfSUsZQRaKJZaGmWPvUDidxLoJUY5zuM6Qpnw4WoQHwjadoJKq9pzd3hANSKRzJwRNMtRYxJcGHYvwAxWD3G",
  "key18": "5vUye6Cu3Hgma5Rpau33scUKFSJWu4DpgttwYh8LfvupFqfGWixzkEUtH5zRXT6dRC41ZQhB3y7ctB6tK5RqP1zT",
  "key19": "5kh4dMXds2Px8465TQTDfDDfBJkW9gqMzKJBbmwm5DAZhr8EhmRXD9oD8WzSofrfpr2ZVDQvLsiHLkJERAbTKy1d",
  "key20": "5WycGXrXGvRsGefu3jSxwnHYTAELo8i95sam5qPFGXPwyonzZYSxLAFj3UJBXu7EV4JJ5y4MFtZNzxSYvnqWLiyv",
  "key21": "jL1HpntFruPHMwdkbXcHUVZykaL4eeU4NGgVRvkK6PS9Bzr68V42XSgZkMR98cvXA7uzjeqppHSpJZ9M8tRhcjq",
  "key22": "3qHZGo4PfNwLewomcp76Jc11CTkJrZFce4ysdtbiXTmmu6GrQKwz4LuKp5YUCfK7JPJDn4afSJGNpA81ogLB9w3f",
  "key23": "4ogP2sTxq8vBcbhx88DpDEgwSfiwfBUPr21wfLiwWrdm5p51jBWJFDnTv3KmgshzpgsgBPd15ESnB9z2WY3Fhoxz",
  "key24": "2Yjc1963WGz5SeA7HH7T7hoYWBzKhHAqbbWsgFeJnMXoUH79PyS4ghCwAZp1EHie4uDBmhQYutc1wfTwtuoLLku4"
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
