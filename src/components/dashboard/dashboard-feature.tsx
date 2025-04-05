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
    "3y7EdLQK8Pkz4K9n8oxrgic7uFKcdxEKuKT5pfNqJia8GV4HPHP98yfuUpUBRrpGvDmrTnGi5SF5zHCmd4ysfeju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kNG9GwMJgP7vdKsDvLaptfvaLEYsv1UFz3VxZg9jtJss6hqUiP4246XBV5eijYDvhCcJ7Qksg58npimyuHFRPzx",
  "key1": "2k3jW9MdhxQe6NiMne4fu1PKocp9GF4QuNvB4Rwso5cBwzYt6riBQEUcG9G1f62n8PudYAW66mws4mpncE1e4NbT",
  "key2": "5JGFJ3AS4gj1R1j3HRQWvogDzG2R3X23b7hRaXqLowyEEoxUNrV1LpP1QgBPBT7V6cCiYVCwNTcFLUddxB6c1Bne",
  "key3": "4pPPx1zwi5vPae2DV1gag9z7YquCJRWiUfbJsKPtiLUaTc1JjgH8AtSFvH9piUB2R5HGzPTqHg3tfs9QTSDEfBa1",
  "key4": "5AQbgpJ4SivBEP5jC5c4oFuAGTd8ZxApqaJKuW3M1skxzbznZLJni4JWyHFaURsD3gRjYNhLWoagns17xTNraTSs",
  "key5": "2mEk4BdekWVb9DGNqKbNq787DxUmoxzKXtc3ccEpWjneqg7mG7oc5puYFQnADq6jvRYzVDWZRpLrjT4V9Pir5o8t",
  "key6": "3LqqMPXvFMezuHLh9JBV1nYokU7jwmx3auLn1gXnjfLkRu5gLgXp4KqHzQZYgEHk2z13AvdX9wjMUXVdPLjSjAhi",
  "key7": "45hvL6fYM8aD9VzbxYhTRsE4EBSx6daMjr4B1dqknjyCQAGEp8diLLkYuQG5i4kp6TF9vCtfaU9rEZpk8ba1qpFU",
  "key8": "WM8XGyQxvUUeHRf8NuA2v8NLJPyHWGKDVL2u3o2tYKpUKC5Kn1r1hz3WbWVMtqo2cu3GxAm2fjkyaWcWWDYkT78",
  "key9": "5cddBJoVSQcFM6H8n94wfL7MZoSjdeVLC6BNM2T5SxcmkuJ4CvvB4nkJUfvRoKRmVq7KFDMqw5VnrBfnEXjAq2up",
  "key10": "3BkcvNBLYVRRBFYQo1o8MyNt6YPaZrCtrkUX8hpisq43vgDHgbpvK7piFhMg2qcpT22kkQ6YFjUk2D4nX7bsBt4n",
  "key11": "2wz2DrpJiecvfERESizJbuUX4U2fetFxX56hSx7gTSucGpXtNdP8FHA1L1CC4rVgtBp8WA5vcenGq4Pcvc9oaWis",
  "key12": "32t3LMHAHc2CmCzeke8yoi6P6nTnksF8oBv5Y16yH8odLWViE2GHGDWL2eU2sHY3pvUDND3NyRwctr71yRUguXBB",
  "key13": "5WXXbfbYn2unTJAhPFtQKVG4Au8cjDthMmzXsHaqd8pcevzLWXBDnitTqLgPPYyP2w2htJpYJgAHGwe6U54CcF4M",
  "key14": "2hphP51hdLc6tpcPTAEp88NCucsiLKBVTDidDFi6BDZHLWK3SwdWeXs3MhXi7wyURdhjDw1wpvRLb3vHFoDCLX4N",
  "key15": "3gdk1rLhBTVKcyPZw2vqixnJ2HvHeHCYgbTocjHx974PoJff1fwxEBzLuBh6jyzuM4TCwQPG2Q8FJ14f8bQ3GXeu",
  "key16": "doXGB4PR6XbUNbkDEU4PYcbmwT8p8kUsc3TJjkYqpCWA9dtHEtTR72gn2RyV9BtxrMABUA9jarnUq3pU1nzcGEX",
  "key17": "3epaiJUCuteUj4euq4abQcUKMAeujhBje8gQNLU5EtjpVQ84aWqqtaRbcNgFhMTtEYtQmS6xo1GmdWGK7zEdodgp",
  "key18": "5eccLNTV9aVc1CEuZcTeDCSEAceEiCa3GLarFscekEU9xFr3swwc1S9kcUcCJN31dh8qa7NQrtxz8Kk6ouiYdiTs",
  "key19": "5Djc3xxiVZmLaksrqVPXvgprYwM9xUogbzEmGjjuoqF1z91X5Cx5dgBbHz2aywGWHZavp3odcH2eY22Nx99UGtNA",
  "key20": "42ev9tEuebtGivxyam8cqtgbWVPUevScpeyixUeuQTA88wZ82PNtnZedGA7DjiVmkLVicBY2dGaZYaST5LBxNfJD",
  "key21": "4J8QpdqXLQX3iJfWwRFib4s17MjQtZAKR6KsF8BsuxHMFV3T4CkzsQqtTyWXGVd3dGiR5aYrHZJPMUdSQ4k8Rh7H",
  "key22": "23uqAheyiyGiT1dRMviu3jVfSwkqTZHT4wYA5GHd9d7bQDTVaaUwMFktPhTUUMLdy2waa9oYywkqczKuoXHecCm3",
  "key23": "2nn9uQfSdrrq8UaMsmG3GyJNU9WptjTyP6mPL7yg8bDgUN2c7Yu9dG7FQWqH7ajrGpiQZy9z1SoZStzhcdiZLBZC",
  "key24": "2RZg23Y4w1ajg835WBSZBpz1VHFW37yQ3LNru3jcGM6ZQi6FFH5vWgFV2AmFaXAu7FrGyNwVPG5jvppJ1ifQxazw",
  "key25": "3tgkAAuvSidoSqbTxL93MNdz88iHrCyExdYTiEaqLcesnszhhqZS4n5J8Jf6PbheZCaQmvrdcuWtiWpHNStX6bUp",
  "key26": "23bXLhv9XC12ah5GgeT7ECfw3TtNXiCf9XaiNDkGeV9vEVpefXmE3xxntKsSgTbjXHc11HCDePBbonW7a2NJ42J2",
  "key27": "V46N9HhNmssWNFSqRikWHW7ayYmXtm9WbBzLc8f3VgW4HRUMoXBJvF5nQqEHTFaqDJ8VhJwPDzKiBXwjYGDAuxe",
  "key28": "4nJ7JvKfvmBR8na1BtLGDgTbPmHyJ6UwKDgXh1s4zhNyb834U83jHgF4frtTXWXb6hK1diaXmMnRpsB3SMAEfWjd",
  "key29": "4em51nGR8o1ZXDMnasSX2rhp4SHJvp6xHDrTH8zuezuJhqxg8uWuU1ZY6htCWWPES4TyXydF1FwRYwGYhvHttk85",
  "key30": "EHTAyyzm96zw6VD4bwVjfoQcHhaCkmp9uJPqbRRL8WQaNTnB5J6LYvvEDqEs8WTBbZK2D81DvdST3oadfdVNkCJ",
  "key31": "33G2RHcYu19U6Bo5CwPL4mSyuxnaQpzpND2THGEF8ThdEMu4DPDJBcgMibQ8K51PT6JxgswyQHJschYSVbWhCHLF",
  "key32": "37SFWFyoaX2rVFtNA2BanDYBz8iUwUZM7tiFc4LDKFKXUdA763vGGByTjzMgm5xD23a8jVjyqvsA43WdvnYbWQ8U",
  "key33": "Ja7oAY5CPDeLMV27T8omJCMuQbHfDVy1XNUfidtWNoCFf5K3tEg7N84dbJT49dNZbDAHDtFLxJzmMqQbdHEg97K"
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
