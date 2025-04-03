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
    "4F4ADsHmS4Y12A15D35ofnRoPC3ivMP83qqQxGusbFCSi2oBH3RHkw48pNJVpuTBoo6D4UXmxKKWsEX4pJ65PMgp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m89oFNM4DGCUzvyUXUvqbYnMs8GZmeYqqvi8EgtHsQPbF1qV4gR7jXDp3Hy2mzu7mZ1XCWzw81XuhENhRkEieam",
  "key1": "5JiuuY1W3hPfHz49yowYKNaFUEzyUnKJ3s9S3V1DypPySuUKb8gZZ3tWLnx4ffPMxP1ip3r8p6smTCCYRNNAFszR",
  "key2": "5aqzdALLv5WUnWhS8nLHV4ftYRbtKSfGgFzuSgQzDutVP5oTkjtZ9F2o2y1JEUGiG9Y3reuAvbJMakz7iXpXWZ9M",
  "key3": "23VEgLsqQbssBGZc9DdkeTaBWqxnXfwLUNtKA8s6yxyJq6xuuV3wZewFK7TWCLuJuJTgCfT1bzu6KtP17ryisgvY",
  "key4": "4w5Ptph8wAtv9tQB9tcePhsMjkxcRgMWpyLuSTCnBFq9QZLVX5pAfivJJ7DFJZ7jLaox8S7zgoXvcYMWa4kSwgh5",
  "key5": "33CQrnEeixcSrzo9YwY5LKkL26EoLU7RsRm6EdFfUF4uaRPuLseghJf1bwhrKEUcDjp3eRE5GybdLTZPYgAuLuLA",
  "key6": "2f8Kw4AWUyqzTkDZC4SorMA8yNz7yXCQC4V91iFgS4tTApFHZVbrim4nrkpoQSnoJfCFL43rAjEMQecNyvkBRKbE",
  "key7": "3dMbYyJdTNMzKfuiyQvGuehtSGf7i9RmGor8wC4UJD5sdZEQ9qnVubtGD59o9W7CQfogqTKZKzgivYH3nPFmRSiP",
  "key8": "53rqWEfumYvkLqSdc2Fpe6y1mYJHgxJSzzxvwZX8XoBRqQrLcibJkbfNQ7TzbF9n9nti7dZaHeMEVP7d5tVWFeK9",
  "key9": "4z9FpYohBee45j65EGyebBKxKwXmgSYJeXpT6969xtFTfDihhuZVTQFPthQ6rX9wbFAEZNDfhSf1brcQVKRCNQTB",
  "key10": "3PFkcJ8Rh7fz5GhF8QmQmd6UwXcPJTRbwtr7zaQ489JpAFa3DCbs9JVdRQLq5Yh5S7AWufQJkczfHRidTDQQtMn8",
  "key11": "ZiwDn4giiHyoR9ha7qNAGrHZe2oZDAFfmVPNSFUfTsdUyeREd5Uc5Dyya98aMejpc7uSmr6tyNmyrgHESnxgLji",
  "key12": "51HND4DZYBbyNe1xT5EEe6WcKJ8LnUptDhPjBTVDTBH7SKCVHZu5DMUmhsrDuaYP5i9BaKtH5Tv3zKgzUpWVmVRY",
  "key13": "3gssFMkod94thdznUe1HX3FWmuR5K2mSBX3fpH2LCGVNswyK35tDu8V9ykEUZFdwzq9vExs8Ston1s8MRxX4n9LR",
  "key14": "GnsSc73bKt7WTTu9gYYEKPppgoRywjq4TvEevNRwDsP7AMVTGGPU3fYnZVbgGBrAq9SAqAg13cFoedoZDUzeJUQ",
  "key15": "jVpYCrNCkf7y5ubPWLGV1VBzt8FRNw6D9LSHHGLbKUM4R73xNVEtMHuR1NKgHgsUXUmWiby7qDHY9fzSjCsFzyQ",
  "key16": "2jNsdjXpGmQXZ2cE14FG2Qztpea9TwSmPWJBLprYFVMNXH5wHgDsuF5sDT2qkuTDPxr7K1YqfTBGi3UEQD1KiUuS",
  "key17": "2mtHHL2EVgwVf84kdpanaoF3kA8f8i6sayr3vmvj736wHWWfXPLLczVzApVGmmrnzjXUyhzxzymJxD5mHGxETG8h",
  "key18": "35VMXRhbM31UVkmW3zvpc9Dsp8dVu8A6HJa44jbDufCUB28ADpmUd2pvbavHTWpfrdL4w6DVTjkLb7Yv6s1LxCpH",
  "key19": "2ZAUyryZMrKzgVX3C8g3XCZeReJ4LUx3vWvnukZ2PboQW2GiEs1sCCkEwZb4XfCRB9koruFNccn3smNsHvdWHfoq",
  "key20": "4vde4zX1rNFVj8tHXCUebU8fgBPjBHLMsaMZTBQBAHHi4vw3HSzw2vwk3AVJXoZBGtvyFTBP92VwA6D3UDq8Xi9C",
  "key21": "bNX6WJ48gBzWX7seVdgAhKQfkLi3FtJ6BtyWAftwEL7XLA9k9PApGijixLU2tXzF2chmPVFUqo7MBpeuUhiMFp8",
  "key22": "2qKLcN7CJDhEuntt8XBS66esi8vuAorq46PhHR3AtqsTVhWiyNgojxjir93ay4YsGX7Bv5QxcqSkqnCnJrKMpJ3L",
  "key23": "4c43qQcPuq4yGVaZqjVd4QWwFvjM2f4HiQjuGKS2B7vW6PSFriAW25comfot9eP9fkVx7LoFQ4vWKo7GpgeQGpcX",
  "key24": "3gM8xfGFXfewDQ2L4EcpF1TBuW4nVVJ3s5ZZ512ncUVrb8RbqE8ZVx1S6URcBeLTDLFBJcntcFovcvfCTWdanfDT",
  "key25": "4exf32Z4sra8pFVUYoVtUHrU519Tu7JUupHLFPKkSwhKzja3zDdC8yfyenqM1Jskm78nurmxBXWXbBn7GmF3sdRZ",
  "key26": "zPtsEepsnf18KwYVozPXRbytzKsP8Gukiuf1nbgwHDkzTTaPHdhBpXBC3MPn6XZLxFhZtqgKR1kHCFj7pGDHabi",
  "key27": "4kzgY4RvKvugxivTvmE25cSsTPJgNdhbaEX7yQvCNJD9vaxBE48yubfVspLHuxPbBvRHEDDFCUbuvxkKjtL7UMZP"
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
