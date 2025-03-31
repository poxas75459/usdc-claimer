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
    "4PzPJRPXvZ12BWXroYo8vLFaxASyHivVm986VRmqFuQJ27QDU1qBMmG5QrtXV7GUevtiyL1gQfFkvn7SQ6n31Lvh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i9iVWUtGZYW5bsLZEs1wzTvzqFXGma8ztDjJcKx22gBjbpGfLs2UuQhKrhFxEhrkauCVryW7VSEdkNsEGVZDh63",
  "key1": "2QepmSfBDYUR5qzcghwKkxUHyZpTRW1HC2fnvgceLcE847ffURf6E1BYMUUgPpPEohpHvLoehZk7BbiP1dmMoqKJ",
  "key2": "2YJVTGfgorn3DqMXsoSXzLjFB5mrqMoBoEge4oy8oGVDcnZLKadhBXHwnv4vaHkLdcQATU8WHRN54eGYPvhAYZFw",
  "key3": "4ZHaeo88iGCUi59gbPikmf7556o4XHdDTGhBh7tkkAGY7qvZTqJP6rX9KdcuRp8ykEEuAyZ2KUJoSCwcY6WscTn3",
  "key4": "5KkRdDskhFtvADdaFTt7kpCstD9GxNkFKq5Vym5LFYmTHmSnfFQtBjCssqCc38gmzQUaGzLuoR4zT4sM4ZG89JAg",
  "key5": "HWrdNn6uBEbi35Mascn8cBSU9VcwpkcumvyjyQWBSx7hPbdAMeXySZ84NKxd7v5C4rDMYQoRpHMvXdehUscgKGY",
  "key6": "5ZKD5yEi2h6xwKxo5UmU4AWWAdQP3xvikQkhRrpfi3JniSaKisDNuSy9FL9TdARHzGoUiejLdDuj1rFPg3AA94pB",
  "key7": "2DTL67JShf7tQMNc26uHnk8ZseaZBzwNpxq1c6u8Q5uBz5VBBeLFhuhFU5r8i24u7RpJmv2ULVpjuDuyY5uho1qc",
  "key8": "p1FGDwy6dpWP4pfeg3KxygiizpwDueSvj1NTHce7xBu2KUGSPySMAZ6SWwLQfLEASq93asQGkgRQd2QkSRtughB",
  "key9": "56r1FEbpdqUt3HNWV3guuNXQ9DKj7PRm9896EmPXQpZDx9rjQQ4HcsBgM1EurMwT5vvdu3mN6A1qSrru5NnW7R2x",
  "key10": "fDwLBf48JMbNaBBc2dk8xCpQKY7LgYon8aDXYPP5R9BQVy6kGXfaABAT4FCsmYN7vzCJmVZw4Qrhgjgic1qoUGo",
  "key11": "5hUNNwqaRGBoPsNmd15cgeZjWkmYmxzZq3FTVjvt94WpsrR67D7hAFELMtiArqjS3pg9dj4Q6GXt9pAdY881n6fD",
  "key12": "PeCKjhKrDcxc3XFSSfZBkjeqCu4HiaCerE57q3Ury94eQ2Y75WJfoeeXaeiuB4WJyEJFX3UX7Pxkvfv94pgYxSf",
  "key13": "59Lg8evqcsDj36TnYzXSgg3Ypb7UntLx5iqqWB3NJFQ8XfikHtUsMU5VxLuu9exZfXyJ8LLFfirxfJWntWYmV38a",
  "key14": "3R7tCnqqQUxUt8XVumKZ56aS9S2aQDaLoo7cfex4rUMwXpJ1y1Gn43SEi4aDS2fhtmUmR9mcPYeijrjKZx1BKP9r",
  "key15": "5uh9ZqwcaJZEDSq35ohN3xmhzDQrLETrDZV5UesGPoJmVUtCcPGMuvJnzzYs1UhaZY8kcCxucUUAvZVPLuDwfhVu",
  "key16": "297odxQGdBntbti6R9ABKAfyLryvyjixbdAVfLeyqDfk5UAZ6wz26ZHkNrqFv3SPCKXCaMTsaAPp7qKjjvBE5gsG",
  "key17": "3EnHHSERHV5Pn9JJqnZNK9hpHvjzKFCKDgVtsuHtfRyGS1cUzFxabGbT8cFeL6oGuUq1LNRU9YVA4zdJhmP4FtXS",
  "key18": "4Y5S3DyGqTRvqAhJTxwiSWEWb1eH56Jo2GEjz7sSB37dNmgsq58ERc6rgzAEPXZGxxxf6769L8fwDJ7Z18Kk4izX",
  "key19": "e7ECHNv2vz7hBxmCKvohq1p6BLkt7HbErzSRDn7FGRCMurH4C6SiCV6Jucpu9vBMPKK7icSHmJgJiMy8PozCyPo",
  "key20": "2Uqm2GT1da7YF22zJK78k9eo7MNM6cKwBWTkKsuNBDKQ9sjroSvqbDkFPHn4Fd4qmhc9oYPKtBHNMms5RmRJUZCK",
  "key21": "3dZxoF15H4KkBpsNq4PygrgBHWf16uzMn8nz2gTThAnwMD1Sb2z5V49CuTcAeCH9rWfBFsTW8Z7XQBoUHu2vP6ri",
  "key22": "63eGFYPRrXt4TDnKSusM9vgWKkuvMFGaAjrK4HRTXD7rPjctXfnwS51B64qtVGSN2fnpo4fGRhMvgUotPkoQvZzn",
  "key23": "4a3rKy7cWtRfwezHKwxnWHSBYSxnhp1Apoh3Y1b9JcFny6PZ2bwkCD3krgADzTDwraJjDhHiAHZDGqMGcT3pWrRk",
  "key24": "qFMHosfCvj7BqZutQZ8YFoA8U757mDjx94JWQVVWmHMXSBsfGrqV22LjSm8Q3tUCAM76QqpRMgsWnVxtugVNSKw"
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
