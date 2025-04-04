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
    "u6BcDMJc9tgYzCuYGKDyf6nM18hAaQJx7y9KUbTi4YgsRRbTZVsCzpnmjzUCGkTB4SV9sthJCjqLG4MLgeHJtib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58u5qmoaGiypPGAnbqFsNbeS7vMXeHcH59E1Q6BpKSgNkLKWxXXnPpc9oL2KhLTJCryA5eMtdPG2Gv6QmEPvRWT6",
  "key1": "5rPke1x98qgNCCVc2ZPtL4Qj6jAfUqwK4wXbZLqwrhrRZk52RCenW7tAygLJtu5uaj65eLYw614kWnSCAX8FYgCb",
  "key2": "n5qiR5Eh5acw5CmKh2LBQoj5wA85EXv5kuEPiiF3b3fyUVMwQQSkddacFh3PM5Y6Wnnb5TKWizcRDM258xez67s",
  "key3": "qsxQbSsE6rAwcLsWR1pUL7A76zXHgW4EpgTbZdQGycd5FLTbf5cq7Feobxbn2Ph7vRd7WTQVn8F1qWJPQHar4Ct",
  "key4": "VY5yRJc7UEqpC1fAXFvioNbeyUnTuTeakFpLnUtgWsb9AoYVDg1GwsmKVhS93ussYFMRxa7ak879ozu9eY3ZpdP",
  "key5": "3ogYHmmfiax1XWvUm8UAH7EfHkMnT2tZGZb1uJFYqWK4vb9tbgjbM1zx1m96Ztys777ifKe87Czkpcsx6dqH9ggV",
  "key6": "46NVDVeYZnVbSivVcZY3kJoFv8HJ9CAVQYjGwM8q2TbFvXzzPBGaQ2aj96AgcVQQMPM5UmZZitZZQpyfLsZuoV8H",
  "key7": "N4yPoKkghQrtBsSKgfuUgivhNXFT7TWXgSawoLDDonRmf1SrnqScj98Sni5M9Qp7LcchnP3FiMBjqoEKw14r8f3",
  "key8": "eLPpjL33B2AdNVbD8YNMduotYSc1HnMXLsFUm23mQpCAtiGBFGpvHhf7G1UDyFpBEManpvNfb9h5M2a3vXYWEnS",
  "key9": "4KevGMv335uuGHm277JGd2rWJewPxjwofAMYhy7oRnrBQUDBNudVPix8kXAQKDvLaTcgo7dbHMLZRgf1j6CCJM8c",
  "key10": "2eqKdnd2MYUNrZkS2xakmciVJQBxGAMS5A6C9WgipREgdhyJDBouaBZKqhfa4bPVBtZkxfmqW1FFXYzgs7AzRoPr",
  "key11": "4gHTtADC3A2KxBW5X44iGZrtLtMeBncszzG2nJnF8NBdmTBzGvaWysKgBPkzmT1wa9hRY71soZnEod9hJCyasPQM",
  "key12": "32dXWeENiB35yMmAVZTSmzHxYULJ6N3zMFkuWrrSxFC93y6TFfrx3FWyha2ZHRFD8bXNZ8Cv2nBZMTz3vRiostiu",
  "key13": "5z3tnphtGgW3bAZo4dEJRkccDZB95ZZ5AYHBiPZochoiSiFgmyai35euV57ULdyfeaoaabZBK4XgUZqPdvndZpHz",
  "key14": "3Ev4FbGD1nox91wTY6Z1gX7VeqGQZL3LVk4JiL4p45p8kz3ATNxePYzSVEkeMUkrcBHQix2D3maHFUpXm72dvqg9",
  "key15": "47ewUSvDTU3HapFTAt5KaJF3RLKmsUAUyVqwntAWRww4EgGWETJYJkavX3WPtpaZVBGHJhDQpXQiwDeGxrMne4ni",
  "key16": "2xp9vcbcUsRjoLWB572WnEjtsXrnvJfRpNubXhfc6Tn2bH888r5TSPYwmjjVTDWxK4H9onHhkZKC4KDVz2NjSxx6",
  "key17": "6LKuxdtTiujKwecRjxDqW8EbhKxcAhHeWdpNPPVNLMrgtvPuEu9Mgq4knd65tu8Lt3X75b29eAuvHKo3tbqFBYW",
  "key18": "4kVChZt1WA66G2rp9HMoVAgg5YPVQ3FTgW5AYrwxJ59xxjuggQKPf3n3UeH2S4CcX3PSe6gYktuduZcVW9feU2QJ",
  "key19": "3mxcuww14UzsHkW16B6r2q9QPM9yGx8q2WupNZ8kvj3RUEDWva2g84JDq2Hz85SA7FQY6dkF4tNu8m4c3okSVT6k",
  "key20": "QCJdkQUjwCNpXMtSdDHcoyv3rYDBa6xrvULkZ7sUbxEgc5FMk8pSqmXdioqwFcwgGZKc7UcuPfwNyGKy7CoxSgV",
  "key21": "4kujTTDgwqMSbNtCZQmxdi4oMCCHMSdCcm231LrWfgsGm2DpSfKb3rDDygSM6kV8d8XJv6gCaw7XmNBf5EepufY9",
  "key22": "3oAU6GJFBBUn36oHFgxeWT7SU3J7yPj93twk1nSf8uRCWdS9JQwrBcezoW1ysvW7wLXsCgGffMar84CjeLUy54jJ",
  "key23": "2YyTqiJTuWCeGs25FnZCzvZrLEDaNT9mcvraJxU5JUPqcmTakJ2VAjxoiesm8MTVenrhZjyDZuvvT1HkZ12BUS4o",
  "key24": "2nyJW8mfoVkFv83dg5ETDiEcW31ENLaMZyCf1gQQ43NLTxRxTuw6Aqon1VrhgF9gRkqWhZHYEFQLkGEYSw6tA25f"
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
