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
    "4oqXK38prQubMKPzZSbyHPy6YNwfwZgu6H5C6ErFtMGmvWZ6HYaqGU7zfkwsvL89ANmj2FqU87SGYisdXAN8jnUH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46B8gd8hhunhfHWWfCczLxK9jHZMvqRHNkCnGccJTuzPJvquVKqbfaKmbqzMPuiyemPQfTaiPQYC9ots1UbtUAb",
  "key1": "5BtNbk1k7w8Z9tQuH6LJMeFgvFU3GonNXQeJwkYVMwAHrFtwqRjWyHE1VRHNPd32ssSwhrDtiLhT562do5BvRmDP",
  "key2": "3BpEc7nL4VjEbk1mQdbRhNaVTLwUBXH344FCVs9NDZCuQsr2beAGWEU9FmuGLGV2ttpMNmqvpQiJVz3ahBKqyspM",
  "key3": "4FiDus1R4Sfj6iKaLjry95WcDGKGVPiaB4Ezuo1XMxWY945HLdDmHucnPm5Hf5cTkFSPMDz8fyzL2fwk8Jps7ntc",
  "key4": "L6d1ZB1EogB38EVYcwBJMNRtRTkY6KAKkPvNwz52HRTdDjp7ifURFRjccDvRtW2qn8yruJdqkjDkZqPUBnXH9GQ",
  "key5": "e8a8GGq3CeHZTdDndRMQtPEzHnVZNmQkVZqPJLtZCrnSUs7R2QEYnT8V8YYsupfD7x6H3nsVqQ7aZ5aeEUJnw8z",
  "key6": "4KaqxoziALr7qwnV2Vx375roDbDBwTs9YQspjTXHK8aQR9KVJzM1Ah6djgAcpTmgHrA2PkCW8ECj2aZWStMMrx9v",
  "key7": "Z6StF5WyL2B5ortp58qJX8zkznb43AB9H14M5N5XgpLmiFHzPyMx2zph3iQzG61ewa358Bjp2LKfFo8R8BDgXys",
  "key8": "gY6VPwx6YVTSZUx3wf6ZbPbj6UJs972P6LKaUWnhHMaTnspqFmVBZc5ZHtfm3qJ4c4zzcmeJ8wBzLGFiWEN3vfz",
  "key9": "4zfFpz2SxhwQ3vvXUxaW2tjfxbPWWRoa4KtdUG29oX4CYifuPFkEXazjYM1hRhBu3nr43ZjG4gqrCfDcByxSDrtt",
  "key10": "4XEUEm8SWM2vyZYoQd4j6RgCBFPBmT3Ji1vQvbgazVL2qEtYR9fcPpzBukbh6kz7ju96q6Nn7aH4pW2FJ3ToERcU",
  "key11": "49BtVuWyN9mx6Y8ZanyEPGTBfXr9v2eyfgkusfm6cHbw4YipSzB3xu4jCrVR4khkp9xDem8AujGtjbERZUU9ifD4",
  "key12": "5ir6PZUPpfCYtTJ1Dv9p9N8xXUPTQwGSSVCC9MEf1ywdETstneTiYqUETeiTPRVFFZyn1H9h5p349xWSmwJqugf2",
  "key13": "3PVSJdDBmHopNnt5aLhsRoRvixbPifLtgjFH21znWouyXSByAQL6Lq52QGQ33NJtwDYr92VNNiBvq1fSFEye1DVM",
  "key14": "5TpJNqZcstYBECGo1oMEugA9zAcxy5reQ4yEEtthSPnGfRxdT1NmqdT9LYkzunBmzKPV7dCQd6uRE9SQ1FNuRNvq",
  "key15": "2Cvpt8hc8A9mUgrAVpGGzojAHGmSXKiYPkZSug5CjPmoVXxjLvhqsp2z3yWAtEV3zqtMAdUEEF5Dt4hJRHe8mMNZ",
  "key16": "2fBU15Rt9uzGv7f6YAKXREk5JTgzHM4K87NE822T4FhRdWszZv9hbGUfcK1r5HxQDb8ZMEuTyU8JQhBGC6UrxbiE",
  "key17": "2bpUF7mu7ajEUbj9FKk7YubB6ZGzkNbLFpv4T1ba3EFaJ4nrBjCfY8Zm7whxzjyFq892G1Xz2cXMa5d2QnJBLNiT",
  "key18": "3nyQtyRTP4nq6bPzvjHfyQdc3yptnvKthrYSPgsFpNf3fsz6aydxRkrfoWsnn4AnB37btReTEgi4jF553zckaM9R",
  "key19": "3TN8Qfb9vSqChR3JS9y61wTTKkULtyLMWv1Au2NoPTutCYCt8t8oDTpfgRgcGYYrq7dMM4Zv53ogFr9vpbWJp4bt",
  "key20": "3vi6C2434RLfAWJPLij1i8aNT333mppdF5YRZSbJKzQ3e1tde1uxy6KQ9W19hS2CBtripsczc87MNyHpAftFoF1H",
  "key21": "4pCmyBDKy7LrmaUAWmD86EBxEWMuRkw3H3BrnknuCLsoRAhCrUfw3TUHtTsyeY54u9WQ2VVQFesi6Y33JKgaJhVA",
  "key22": "2aEeya9gy1YPYGhPbDZorbvRjiTSfynDYquiYn4DwZcggys1mArdKyyxTmz7t19iMTz1wtNq2RRzL1SPA3u25uyq",
  "key23": "61QVzKZ9g1NTLPqL5P1y8ys9ZyC1qNgKLn45spp6Hk6Na5dfaWAcXsi6ZrsQsvHCcYPVRr1VWhBo9joURbdUGuVs",
  "key24": "3wgNiryK2MeNXFxG8uB2FWv5RQeDKdhvuGfsV4TjhM5Yn8hhQJp5GG218WThTghuH1PVfyrme5Pj1UETmURfcg9q",
  "key25": "DTVxBZpZy35m19tJzfUgBGwStpk4rwq14eooMAJPGa8xCduSK9MXnX4Y4hg8umnck32oBosvwBGG153DwVkCst2",
  "key26": "23iSPDGhv1oVTeAuFSZKC25iMohsGD6HZx5dBPkjMQ95Vkb1XnCeQ1a2anYHVBzsRw4jGNEz2FQDun2Padrpz5st",
  "key27": "NNDsDB4tQjqQZaYZn75BfVXGkU6aKngZPFRkUkzYZiDRnqt7jvP2kTCzauncwXgu2dBvsWsXYWmJErWWQPH8ipo",
  "key28": "4uA747xj49sdv5Jn79Xiybm5wHkVNGzWhnhnKmPhYrELniNNg4F9tSrH4vYsxg8Qrui1D1zEmqz3RrGrfGoJppuG",
  "key29": "r5Lcvu5rbyr6arKKDvFxN68sh4zux1MdiJUnAof9Tie9riN7YVYMMk6qb8hsh26Br3YXzEo6UXib49JA28PR2gq"
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
