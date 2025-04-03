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
    "63oZDCUdfKo63PZihBAMKvoujPMmUUdRjLxXqYvXYFguwg7FuTaykTbbUznU5asQ5XaXw7hKxxYWmfQSfBnuQN2F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FQKPfvVZ7jHYauAVeotPaXgpt4VepgnprnsgrfmiCNTYHAHpdUbGMHSCegxSdrakN5rt2p76MMVrQeW5TJeUCrh",
  "key1": "2jLMb7CAm2qQ7ucPmSWwzRYwsJNndxXYwxwSRnwp5R7wdBWvPGHawJFjjeoC1e9K2krmJXNytazabBMmMDBYEStr",
  "key2": "4u1U2UNUSS9Adsyy4cabJzmAp8xUCXL7mK5m9mSRMjCPQairK3XfE5dv1vktqVh2kCSkiHFZxeCzZFBbcfKtMLKz",
  "key3": "5ha54k7ERnSroSnTLF9bZNB6WZxHrKAZUUTAjZ4nxe7h9iFXxzRvKtbySnW99RmHaT7pi8wQvRZxPpdVrTerWyvu",
  "key4": "kjHpeUGS7A27Q3ADxQjXBW3GBEXcmkLXi8DjD725L2D28amKdGvgFy4RvtxuchTShGfTQ2QrARgbg96gargcDHL",
  "key5": "4cuSUFYNSfB2dWH4UwVn6DUGMCKA8uVmMGkZgyK8iyWewpWmfUSsTV1N9dCU1ZJNpgSYQeDaYFUzMqqpVcJpnqdu",
  "key6": "3ZBKsPYpBpaaqXuqhs67VQejTjyfErSA5zTsXHcPr9MvQkCBxwtgdq3mwQue4fVHprGYc8PSEAKAQS9jAfsrePHn",
  "key7": "2q4x6BQMYwpF8PLgnpTVYPH3x7yNgcNE7F9oopciyyU8HCUB53BorYYNe8ZaNqLWQNHGajez755izuuTA1d84AFd",
  "key8": "5wMSHj8SVcxfCcuKq8XEyWPt7dcSrTSxVmLda89HZcgHDQb1k721Z8aVBMQhD8kxW3zzNPvUS6qTE8pKRx245PAS",
  "key9": "A86SiHzEqffkYV157c7M9tQBkmzo4wBcRNXbDnrwkh1U8UctLpe2QxS4VSEGtqLFdCpK8zcS179BrrMGvesAUvF",
  "key10": "4rjS1dMxpnNAHv1NbvttTMfk5crFn39hrHTrMvzoDax5wvs1MjbKwPerFWKWa3dk9127dTUVEoNLdPegUqLzMmXL",
  "key11": "5NTbUKgjiXC6EDeLRsY1xqXeQSL9SAdEJaDogm1mor9xxq5Si11LwcBC99Zv1rjCro3EazbUP5N6aq7g6eXMDL4v",
  "key12": "2rFMEs6Twi4RUh2KLKTceoK4QxzjH3JmsiEEEjNqpz9Nxs4baFEPPMrweMgGrS3euvEnrUktKpVFqJq7g2tgTyHs",
  "key13": "36BtepK1P4F9fAsfoeAdLW28YfSMik8P4dQLUZXiU8RSSsqY2rcH7dqWxa9Nr57ZzwsVzcgK5yqXyt2qfmGzdkuo",
  "key14": "4fEnA9S972bgC5sfe8tvcfD2MdkYaH5Vpw51GPFrsWfXc55KDYfBYH1Sp9PjfQ4ek28HBAuptR63cbyGEQ8YrLoK",
  "key15": "4fBahXmdCmtJoe1oyrztTmpYm9bXiyVGo8PayuokVhPzLr929wRkwv9vpSTuAyjeos6Q7hzYWJrZwXvk3DBnipUC",
  "key16": "642uFhNuipUxv15prXDFpz5x7RTVP5j2KxqrotFZe8246WWqerUG8uL57fg9Yb7rNKonfqoULLysJAFfqTBUMqJC",
  "key17": "2YvyULoszFtcb5KEKtuhEFwYm4LLWJFBs8wA1Cj7e3uLR6gV44T3uScyQvwdygY8zyXX8AmRHuEEmPxq8HRhTu5R",
  "key18": "3eHUkJSAoXCC4k6whGCNUeeXETWD2StCLNqpYCkDESKaUip2kAFSKE7pNSdZcUHDtjWL55yynX6VXyrr549cg51y",
  "key19": "3S3z6jWcG25vykD1QkHYzcRZjrupxAgSMcRaqum8asVoUDBRQ7C19fr2ZBUT2QGRKEcnNSJyzUp6RKVQDmEwqMaT",
  "key20": "59nLpqkBtR5drnmJfm4CHFE2cxBRQgAKYfdjoQ2CFGtvh4Vbf2oYV2ZREJvaxWHm5vbFd8WpBP1yeuz25uLXYTMY",
  "key21": "5xmAjJ9yZcYqBS2tyMGf5eVrACzAsYMwQhxxrCPwschcdf39Qj2USr7AU91Li4ZP9nXtwmpPKeWCquCoi62TjTsb",
  "key22": "25iqEzFo22CvcyyDCMm32swDJEKdQpg5UUmPdbANsRvpeLtFvSz1tN7GBqv1HahyVVmR6FTfWDUJBfVFKHLnJJyS",
  "key23": "4K6Zqp5CCK8VEwsHsjatj9V3iuEAbRBnMjGrjon5zWoM3q3EFUzfpX78B1eKU2mPYPETafeDukH6QPvPBpyikZpQ",
  "key24": "2PpTECQxA2uinzS5xrDYoKuvtCG4jgcQwQoRqCN6XDdfBg9pPYcxwL5eDppaMKZcPEDp94UBu7RaTFBA7mnykACH"
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
