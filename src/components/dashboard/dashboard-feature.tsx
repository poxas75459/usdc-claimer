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
    "47JjwYVrwzv1XqrjH5zqcxrUdiCMGMwmX7Pf56PHfC2QdEzErp3LF3rDc9XxMYZMFghWMeoAc6FXrxGwPTwaa96R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B4iqPmuYLat3uPT2Yh6YWJVSx6JBXSaQnivbbRseEmWdjE2nSQkVCG9L6cZKJSQbqX4iD4t2LXEQsPS4nUbcLud",
  "key1": "5cmvsWze5A8cugbt7qgwnZ7jLEYrFEMdW7uvahDcbuKZ8y6AWnwbt37B1A41kpHYA3LZKtXXKWCfq5vVZBYvAtNG",
  "key2": "5LZKDNRStWivVK98smX2NSQ63bJv7hiJgK98RmUfGMNc82VBaAS723utDaPLiRnxidE8acUvxuJu5fghpsb3aHwZ",
  "key3": "4Wwew9caaKMjtduntecGgS8JKcuaKxg9LDofNhBJC6aCscj4wYjDY1tk74WtkqXVsjfwzump2XfVmmotmYkyEynk",
  "key4": "4BBTDQ6j4VNyXztKZR9hveHyLMT9h19s5Qzz1aYohBPDYTTMfG833U5Kd1CYmALT4BqDLpwa7EgZHbC1vR8rE6tt",
  "key5": "66C7kzSCEj673fZVpGaqoTCLQsHzWeW4Y1chP91UY63LawJRaasALvx7gdkhLFUB2RJ5TNcTs75Y8pyTPzGYU1Qn",
  "key6": "qUDT8SVHynsXYY7aTdGrqqK3KhC9wrTHUg49ywvrzXowei5kWtzcu4UgfRojpRW5gaUmBpmLgQwJnT1xSvrq4ip",
  "key7": "4vnMoB4nS8eqEgacZQCAhtkDHNiiVPW19vacbRHzu1d5mBTSDRTKwUCEe8W4UE6G9tV6iFaWctcNDexG9AczyAdk",
  "key8": "UZXUjz37kjw1WUAzuMYYyF9EcSXXrVPxz17GcSmfEeeEVTdzsc5HmhT5o2pFCMTm7AJaGTjtoP2gnAQat9q7d5Z",
  "key9": "4FNUzGoDx7omqhvTbEnBNaC5WJP6d5pfHsx8GheMmi4Xzi8jXjafDBxbCxaS1obt1Gfeg2G6Gev6NMPhNZmSuN5f",
  "key10": "3zv26fwxneb3RMCzpfbaqXnuExtCiJHJEEr6NnWdLDtASjfjahDj819pZpZrXnAw5umMjzRvp2368358nUu23ujc",
  "key11": "dkpANZ7jhwEHTpc2LgwXrXXdeWtHUfV5ags8dxeiV2a7VHNvjPbfhtjMVmQM3aEhfSQMgeY2vvCwRBsu5MYrHV7",
  "key12": "4H1k638tHXWP2n8HToj3tP3kpA3FhbQA5VoyGwd9UTQW5wMRQoEMzZXMTi7hqmQhsQsQqXPKUtgDME2Yn548Dxw7",
  "key13": "488aE6YzBDPygLTfeCzGSKVFUUghHfVbKCTP58X6CsHCzvTreTDr1G1Ag8HSwraVUhYmeZdLz14yyWG4nE3JG8jn",
  "key14": "3UJb7h45whPR5cWEHwmZ6AYiv9CDa7mekeUUAHdQuY7bX9buaXzcwTQXwfFURfKPNxjH5t9ScMcPMY4AfeZaQtTe",
  "key15": "3d82uqHTUonnRsprNj5w4jGk7Q5gFaKhSGuTC6UvTfThpjiPvLuenbbcmQMz321CyD6tnstQ8WUbvyJi7GAFFPJA",
  "key16": "z5zjNHq1Bnvn7GpjPD6SzB3DMvF4pE2yd61cwGTC6qQRuSJHtKJo9VXqUupjPfgic3nfEXRu1rtQUe3jvcQACNU",
  "key17": "63YvEwYwyeHv7eyzbEUruYZxkQ96QvuT99Wfnka9H9ZPhk5dJfY1qJGJnWq4VgzBoajuS85X5Zf5ECXGNByGMn3p",
  "key18": "3yVAATF68F4sgECDAqrgL4dGMDWVuc4XEWADkXo8FnujJJro399mVzEfnDnmMXbAk4CRiWQqpUQp4hD4Wy8QoitW",
  "key19": "3VSZ1pvbiHXAAnSZMZ8SZqN2coKQfbF6HVrgx4NfsX3pqTqtT7UAhGnYGadhhVKKygwEDmzJwGwa3zgUgLApfUQ8",
  "key20": "WuMUeeoZS1WvQyHup3YG7qrDeBAgkg95FCKJHRUvho8Jy7HuchW6PiosRhXoTU8jqT3TN8ZiT2b3tT4mu1uMoHm",
  "key21": "spgUmpD53khLRMrvSZwTuKg8XYBUmX5vQWTqFoaSpkFxbVZZJE13E8fgxaiwBhEYJzNGWrsxvB1WArj6o32HmwH",
  "key22": "4q7BDYjsLUD7BVJPBiSdA1NCH6iikbf282iV4idegK8K41GpssPNKucnCNDeZdyzWjCguen3iYquMaESaffvqhMB",
  "key23": "5K9fWSB85Lrzi5GuUr3HAFcqQ3sKcnpXe2BQxAGb9w64bD1o5RjG13i1remV3EdL2pf2L3Dr9y6st7hfjfxLEm3M",
  "key24": "N4cicDdPVX1QukTcZs5EKsLRG8jmJjuwJtdrP24uYssLqXeEAMizbKMdF2ESfSNDBLJMfT2qRX1g1sWQJrBB9KG",
  "key25": "5K3vTivQLLRBzU6XhS5yRGL7yiELTfoDjzxFNexvhbAXwfe8VwpJD75P8u38aznP6bEEG6fLCqQieW13jZjmMiKo",
  "key26": "gcqmZ4eXxJ5dtN1qR4QWzc8JJDkvbs3MQbzTYE4TbfriAUnQmPPCxsUuATGyv9EsmSN9RD5BmVGHX4GEKLANT6D",
  "key27": "3QEe2abR14hTiB1kAksfjwhc95AqGhewKpt8oQd74XkS9SxtxSTzGrCqH675EEpBGDYGf1JZCCfFoXukoVh9dcfN",
  "key28": "5d1Hk3b1PaP1fyX94NHT8PxE7sSC6Z3taxBCQsCJCQFRXiYbRrTDLXbo6vTPfN6rSLP3wPWtrZ1cfjDfmtu3S9zn",
  "key29": "rA78aLd4WS6Y6r4oX2eYUFZdm1ELc3BSZakDyDH9CHKP5WYPZm44Rsme7kmzzNBUDtXBWMJD5ncynKoPvRAhAQv"
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
