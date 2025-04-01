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
    "2QVMofBkqboP8vSuYDjTKcgnBd5qp4sAv39tLQSgR1xBnmXs1KU4nvvUHiGtVKdV8T35raGxjRBkTDswPCxfvhCt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "497zgR7JUKMXuTrik3Ts1QQ8mHZ7zYaQHWzgDtyyrCHByEqxetBca9yZDS1Y98sdUALEcQVoStjNdjR29Rhx23m9",
  "key1": "3eZDqgLroWXwc79wTYJHwUijPPHt4cLdZotaadz5y5bQRLbeLmsXdbhHcLGmDJSGnQNhbAfEe581Evs2DfKA8Fjb",
  "key2": "cnsd8ND4rVWYuSibSRd4EFWhMSVG38GCJ7Jh37RY5HkvXbjdS8Qut4yzn8JJF6EDovqcRBgH9oYGWTgMM2CfCPL",
  "key3": "3bvgVwvn9nrNjiw649psK36o9RaGBRZhkSANDdHjfQE4VMWXPxjXDozEFuz4nWDDQ7yF5MReopvRVybGbKTBAMbW",
  "key4": "2gk1GVhUyDFSBCB55tkZXhyMmDsTFKUKaexyyJfHc8FoHAGrNXBYUtX6Lotb1j5xSAWdQSAaPQSVCSNvjrr8ey14",
  "key5": "3EdTFGswetf9Mq32o1uCVkRse2CpHzX9pVawwdxQNAN5Hj2BkDpHMgVhj46h5gVQbayENEhDtkEjJGgS9YVP4jmp",
  "key6": "W7vckKyJncKcAnzh7tycgDucAsRUYq46aXPAKNDxfyLxYeumVWZwAuMWghjzZDr2JCPMJ5vYX2qtadx79kxUcD8",
  "key7": "4QStokGYrVbkocN55N47xaAJ4asvBzv7d3XhbFqx588prBhA9QAfAzjCR6cdxthfks1BW1fdUgMh3D1yqaDMNUTK",
  "key8": "Pmzic3iELkRNuvSkcu9jTsqkdR3MbAVP4zoWq2JQRBinrw4evsfJkV1fbm4vwumDiuGK5M9J5yZvQsG5tZzxu7D",
  "key9": "3i1KsgYXbQY7cu2J3cU2ebRsZDQ7ftgP7idDp1hGovdTU8tn1CQruWuVvmcmgZkZhFbeDUWs5XnMxVmd33hL3c5H",
  "key10": "4UnET2NmF2NKLJGuek6gY6C3jWrvFtuLSKAQ1enPVhof8f4Nrb3AePqE5jXGz9jpZjXgq3PgYgWYatcnGCQDKQUW",
  "key11": "4TBt2UYFbk2Aka75bGJhynb9MVeb6exitZPtRq5SEd1dxZVSNq9XCQ1ru4TLSow1vCanPpgEeZ358pxep7TUN9wx",
  "key12": "4BdPQBEmduWrCF5er5nJ8uUhRTawiFudMqPCze9fi4EjMZzjy4xNKCH1Dw2fieWxBoiGK6QGu8VrptXLkR3NbxBS",
  "key13": "58pFTbiPjdkFDRNJHP8VfAcBfhrNr6hvgPeofgAB7HSjw9uZzrxSyMwsvcYHUubyBkxnPU199N6P7SUyrMXBpXiD",
  "key14": "6XbaSx3X481P4Xe7KL6WKxxzdSoX5PpyfJhE8146u6WeBE8SJJZ8yMjTWb9Mue29QWfsp1gDJvPN25JHKt1CZP6",
  "key15": "4bbdRT9Me2CqkPibwuTYVE92CrFj9YsxL4dPUq7VrcPnQzg15NvD6gHcLxrJ53JewRaZUkcHVirBatFPNRLup53X",
  "key16": "X8q5wWTScNsuQq9Vt2N8QsD2iD9EMP1tM6wJr6VfFcu1cpM8zH13SYqBHSpYqmDERfFTM7aQuvEwnHHhUaDbguV",
  "key17": "2xcjGMVc4MxigpNbRQkjWpJcg2UJ1HVhuhbFCm3HpvEf47VmihoNBXxUdGrreQk6pnEgN3vjdpe19h9zQ61GGUK6",
  "key18": "3LwrdgPd542TpEa3im4DMnoAAc2ZpdDYASQq8r29ERpr64GinN2PYgJ4cdA2jvHPUHzpBvH67PmqconqUTE2LwW",
  "key19": "2YiLvZCkwX2KPJfQFpbjJCFgjvXxqqTQbhgg2rrWgX1VNqUsTeTJhpzdqFmtiLRxaAnTh3SJx6fzRpMazDf77DAq",
  "key20": "5xLRReaBfdmyMFkwgq9KzP8Tw337goAMHequuecBN6wwYysQUqM7xYvFhsXF6DrJkLJuRzTvSEMbi4eBsenjcqH2",
  "key21": "3Gq8KmGSsxmrK5WEkjRr7YaX7h6vRERM1LrNib8umQCLy7HayB1oivS2TUiAqvaAGBMga5Cbgw7ChtqVUv7paZck",
  "key22": "5BvJbE4GXKv1r3F16i9jukxgur5uuT4mcikzw2vHBJYw7oDKqDvAF1dr9W71mRhtXPCoxZUz5dZLUfLekcuEa7qB",
  "key23": "tFzH1Qzo3Xm8rUSNcxQssS43tvrQTf2WcVKzETi6iNyBNeTxA1AReMgSynt77o6oxA6ihH7cQ2ZjXE4W6N8S6NU",
  "key24": "2HRaeBMPsHXKM7AijDQppfjzqhK2RphLooHwQeRydG6rDEXe1UCq71U42JaCUtfnvtn3YNrHcVSpciy2P55RBT4A",
  "key25": "2NWufqL8BNPKcPW8bghYcqPq4oCUSdCvVLCbZPJVXNUkUvsKY2dpSUqzFn14x5ruadxrRVxzpN7qypAdmcd1juvJ",
  "key26": "4yDvZ9BuTSze9MfXxBYmgZ7EX7wRUJQ3ZGutgGLmqkGr9VSirt69VVCC1bv1yXvyrb17doHz8xdR3kC2fnTw99hf"
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
