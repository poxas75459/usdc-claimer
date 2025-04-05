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
    "uysrv18Qz4oh2AJAt3aZHb1tZXfJsiS9qtSVEd5L1tWdhJ41DxDNXBSLjNfxNkrayB52ayVgm4mUQmEMJujzzrC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5svJbr9oyFejNizEQN4JRMfySmhFPrSPUbNWUDTPu72L89APyErizrk2oLJGcn2uHuHRAAE2KupmWmHx4hBqC9xG",
  "key1": "2rzPJgzpYejJgb4Fhhxt1g5FY8VFCozS8xGQazybgKxXrZWQAPZgBxbkUpqWwtbRoFPHLx3cpEQoKtQV96FiZ96B",
  "key2": "63iZ67SoiSek2e5V75BdGfq8w9KaP3UffYkfamkqLkg38zTvkMAGaefcCvzg4e1B8LE4WcY1LsbkifCepw4tpUqN",
  "key3": "4UWTBD45KujnpGx2RMk6PRuVgpRLhHBRgyK7x7DxyJSvZJBjZ7opdjtwuuwTq8j5xSSM2h1JM1hkE4zJa9BZYGnC",
  "key4": "nN4ad9fCd1VoqDdh7tfTrw2JRY4ptb7znvcC58Vbybts1a8igcS6TmBov77ebHD98PJR5C6LdomfJSUnjtReLUs",
  "key5": "4DyLK22h1TPTPupSHHmPVsHPrqPrLa1WRqtGSUomY1mnRekfDxkkLrbe1UitiNgYXoFtCEnoeGFSZg5K41LzCz54",
  "key6": "RApqQ2UWJSz1Cc5GtWdsqFkVjsfP8QRe7sNw2B2GVkSKQPNYwFg6iwDqT3rtCHkXdEfThy5JKTMqPN2ZEwncxKT",
  "key7": "3Uo4DSLsdYseMnJ2TXqFNt9Cj1uffMgBVY9JznVS35SkXQC1pRjn3Wfm9A48MzuKuhqCiqsgkbvfw7UEYbNgaKER",
  "key8": "4u34iDuGKzSiFQoEuVGa4y4YnoH6UxfRvewWaBmJUjbsZoMhEmxQKmUED9NJUUXgf4prHqw5yk6X3Aa1s5NLs2J9",
  "key9": "4SAnDmqrkcGuV8iBBPpfi5Zpu2JBAxte5wMpudfLL4YHnhpEmBZ3LKHkLrWjH5MQUD6A9MvxxYtxfEtVeDprW4Lo",
  "key10": "2TFexw6avtasL1dtLkru3x6JZ4dFgVGwcao6fELkQk8YrqN31pkxtabUj5QjbvJ4aQiV2SnazC5QiTTVNjdYJitB",
  "key11": "45DMAGcTXdJF4uPnsAu3TrQrctQzYERKCZmWW95sU4jpcZ8uFrHi1snEQvmhnoEZgLMYP3n76Lqt2fxy7aXsxVqD",
  "key12": "k4kSZCeschsCdTkDU1z3HUqrASThXxXqVEU6f7c3sE38WDbQxi75FhSBgyAFQykpqDQZhv8n1KFCAyAp5oycuBx",
  "key13": "3nbGcKUL3bPAe52YmZLMJpkNe3YMgeWYm92GoutMjwVDiHr3dq7ggPzfdnXgLDQeZ5NtCeQGPEimZZ1PGKZocD6S",
  "key14": "4JZnzMEE4mVyXZ6T9E5dpTUb89ZN7WvHEBtjKsuV9o3xDKDVEPWJh5iYpQcPke8NURt5wgV4nTQsWh2h4kzMhyRQ",
  "key15": "4fi22rBndMQtHwfEBiLaBWR6Jc7KPsGKGgUvkLux1uXz2QREcrZdxRkHX2YLxrgPk9b5P4meFuubj2YEnVFqZNTA",
  "key16": "4NXcESVBpaEyfrHnhRv7V9L8f24YH2ee34jmEDLsfeN2YUCZ18Z5Q4XnSR4HqAM76cEaR9KW2pGnnSRM9uv8b5bo",
  "key17": "2LHcBaPbnJFQbiNy3mC8t7AkCQo1NrtnEdjmvL1aZoy6ErU1x3Qq14AXuPE2XAuyCag5by5j6dioGvtCYXcjvhcy",
  "key18": "oXbg5znLyr6cqphCqBE2XhZK5jHGvRtoyGnYwXgxfkWjFw2tmzDmvFra2CqibFr7nUmfUiTUncxhsn7zbsWk6m9",
  "key19": "2d88ewX8Vk1ALXK9cWt9auD75JeUCBPpTM7LSUP4QcHF67tVUzTQjaBdc8674WUAsrtT1Fs1ZGCMJW6GiLWjcVRH",
  "key20": "2M3Do15Ri6z8cSLJGQrKHtz8n3LfynzuRVhTYg7U6PYmcNRLXV2R5izhLLk8QXLPCdTtXpg4DDKriUBeM4TmLJ79",
  "key21": "2vPJMEc2keM1H3fUKUA4mT8VbJUVdUd3KQS6DxdzM8wQs3jXTeJH3EcEh1jsTrZSyBZFXDzYB6ZULwARTRfLWSGB",
  "key22": "vx91bE1dr2JUTrwQAL8LVycEezmBy4tL78cubPBZmDc4ntmQadmR6KYeX1EeBLmh5SZ1ewgrA6LrYEphaz8KikG",
  "key23": "4bdArXNCGtNq8AcM4hXKLp6znk1cq8ht9QHkxeLnd84XjxQ7Z2aWMf2ETgz1vmTTYSxB6G8vKAEKXY4gnqtFSMMM",
  "key24": "513UCRSp8FguT1VFnrRdkrVeRiRPSLAVXHb94WHw6Txko15bD4TfN18NHv7BJ4gwQfkunp6Ctw91yfemK96bXAZP",
  "key25": "5Mu4uBtGrRvh3sfzxLABDD1FxHRCHMhbpqiJRKwKy1DhigoqKu41x2L75LibJmEAKswHLHdFnQGtkvkQXTuy99gG",
  "key26": "54b2sFbKsUP3eUsswYP6bwhTTcb8Zpmw7cqrVufLmdj1JTs13afcQZEsc2tMyquLr4HRHNh3aXfrn7goL27MZPSL"
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
