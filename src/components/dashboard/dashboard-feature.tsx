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
    "4q4w1aJPojKhzFoJQKzir3esQNcP17ojnNZy235MWnzmRLrSFtLZXuebiiMn3bG2GDuKqYBAwoeD9BXd4Q31kgg8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ASLaGeunpt7haqrX4PXRuxz81D9UVBvrDWV2gpTFHussJvcoYeJVxvkXTvehG6Rkqxaeob5kbysYRCvCAr7MNdj",
  "key1": "3m8cAgar86FMBCt8roHHxpz3ojZNcBzoszCsBSUXoqMSexUagSxmymmE66uK6sRX79zguqFJZ62cQZ4gTE1JhB2V",
  "key2": "59hLFjTXXYdtp6ZH36KcRCYsmj4rektUajUCvSfKzByrhYRWobkXufxqRdyhKwGCU6AntoiGzEkM9tDgUDfCBjoS",
  "key3": "TsUCPJ7kYnykCqGgW7NuEWpm7coGsZUBGPhaSGKvNBzvX7KhvMwTX2gCUSjTVEfnMLacba51ZGBMgNmgNdzAeWC",
  "key4": "53W8UEsSkmnsyVgiu2Zch3B8FvDXqbK5oJk1DXQMAhYUmEP3R59N4j2FHpQxfrd9ZwpMZV83tTgF5rSt4ayHit6n",
  "key5": "3vFfau2njbDs5XFyp8CDdTL48Mdizk4Rc3UU6deP4qHEozHdZ2Yw11gjEonTr1yRL633fjXx1ssiDbKwsDzwQDWz",
  "key6": "EQKiwVSHFUuQ1oniAUF5fHh4NYZWwHZ4n3MVWurkcPQQDEw6F7Tg4zSAxcqVjmRcFT3LSu29PQkaUhgBEcDSDvc",
  "key7": "2fHTYEomvK8VMxcohKGy7FDVEVWBqKvjH5ujYWChhUheMUrmjyHCab2UuVaymrsytGmtM93x7Uuko7ouJgvqM5qY",
  "key8": "5nLyH8Gy6WtCWHBWjHhqQN5rr7wfy72sfz42hGmTpGNjiZMb9oYixQP8QdnFWJEn2Yem1ewCm3N5FzzSBpsEuLWy",
  "key9": "2t7fyquWjGD3WKxL7JUz4atu4NXoH8ofX8CYitu3izLAXKzs3DcBJ5TUYFLhZ3YhY6GrRHiYU34WoE83kCAjmRLJ",
  "key10": "2TN7kpSQ5YJfzEpKpQYyLkiypwUMJhLRbNkXzpaM6dygknVLju4g92ZUZds9jWtFc1wNrchGAcphE84ZEaFzWwo3",
  "key11": "DXp9WrSUAtdA2BHks2XqWrkaCFcnh4KtSt3nMaND3KTLcQ8SfiWLSvHaV96CYYnjxfqp8ULCxnb1AVRsuKRVeFu",
  "key12": "wkccya8tpzaXJSTmVdJksKAb6VxgADbuiCqyesVHXJ4fqHrNC1EwrucqcZVHwrEGPCNcpT3GyPuUGt4YLRFXRPE",
  "key13": "2UQCSmBdK22u6TCgPkWbDP8RT2DgcEadsGnN4JqjMHosCR6XbDWd5HTKEZWJ9K67CfRa1vEm6xty3UXfoH9YexnQ",
  "key14": "22VyRTnddcVbmgaGPtT581uM2sXyg2ACeCMpbJVxNg1UQ7Kr28wLHv5XghH1jcW9WwBhDVFt77sV7hTKcvDmMvVS",
  "key15": "4JHtbv2b9LqHsyWQcemh7uGoaP6doDMuVn6XQifHdcohhgvqCXZxP8j7bwCfh8RxeDUYGhx6W6yUJQHHC4dXQgL",
  "key16": "35sYYdriR2Yx3mrRFR73brBQVDasa7UZNrYQMLTsG6q26i4ViawFg9BWRNadbE7bgyk9vMuWctuKYcRsk32uG16m",
  "key17": "5px1jnqSFJaevCT25gcJDG3sJsDcrvMJTGD6mDgF6hPBPycQ6NG8BetrWw5cqxvsebz5nAxNm2yaHuzfiwawFuij",
  "key18": "3Do7LVJ8bWZPQa6eyq4zoDXiKFmCjwQznSNmreJZRpVqWjSvtis9C9CyktHtit5sQ1iBVw67wgDRkFz8yLqdgaXc",
  "key19": "2kojAXv1VzPkuSFUDrPkHBNq2hP3kEgTrqqkpuJjTQHXa1UKprnXrZhCPAXjacue2BsvHVMbKmhrVskgbhHYYyZ1",
  "key20": "5S9yEBeCvQY34yaeuvoj4j52AUrvzMgXarsq9aMhvcSCHwoZngScPQLTJrK727ezxu7qwF1QhzmXTAPME3toYcEM",
  "key21": "22GkTvrnS9dzeoTP9bBKmwYK6fhdYLomVs3ims2diqFhfEqbMywdYkMCN81Ararf8NXUhFe5KcgqxYVESrF9mMMt",
  "key22": "47VEtNkTXNKyLUDxBYphTi7gTmZXMgAUmqii7FFqzKziGWmZCw7ipxpTvJeNNL39gqrHcq5xhT5o5S8Nxm7eMXDA",
  "key23": "4JAmPLf6jjDhmkA8uJAoJvLgY9zBPeeJCDtPToqNEta1mqgpebnkJd2T3jMt2t5fYDGRRwzLkKRrFhtVShkHZUGW",
  "key24": "5VTrgLuWCC4YESmn7AHi2nurg85NkGFGYbBcvNBKxvtpCRyybgcmXkS4zTKBwRufGm1MeRLEFVDyq351ugPnQB1Y",
  "key25": "2chnX6AQtqYtAV6MJQKJHJYCKo2onihDwuGrZccLEnQAtkd6n2pqGJKpgAD2UmWFG9V4sC6NwNZsAZht9gqhD6LA",
  "key26": "zjHQXZ2W6deZeUvwbynZpdQsc8PScjjjUS4dPkGH4iVWWcPzKMy3PMSBidpAJscsueM73oDk3WpivgT2VTHwt33",
  "key27": "cWTZn1qQMYAapv3tEw5DzQpPqA5NGKxmgwGMjuAJMR3VgaEB1aw7oKEyARkhxEjD4nLBU1aMBuTxAhAxbNzcHm2"
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
