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
    "rmGgGwgK5PRxnBgHYVGomWVCtvubDJw3CpepeHYbEXdjQhBc9uWRyVZ4qedFkcGnEmUvJUKYJJpujxoKeNtriqZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54sfGL66vt951zSTZMzKStfxzpSkrU7ukz1vc8Ubf9Y6wVKMkomrFn6KHpQnTzUc4AmqJsmzq6cebTaZXHWfmz6D",
  "key1": "3o8odLUZLf7BERFvoJKgwVDGQchnfLvkJKQQsyowmA3GGNbn3RPz9swjN8A7LYtfM7WbxPHU5qAwn7r4fPEmKJjc",
  "key2": "dHcFDXFYYsPfuLRXHtW2NV9W1ujA9jwqyADkH9jgaLbtGJ5XXzTNPxby9hrtJpiJXScpkWvGroeWF9AiTu7hSho",
  "key3": "2AhjwU3gHdsTeEUFW5iYvS4JyXytTcKy8uiKUHJ377FfPdB5ZMVqPyjLYzvSsp3TQ4zgZCK8tMB1Lmr6bxLGQ19m",
  "key4": "3FaLH5W6X8m6kVuoozwiAu3WZ8xCfgubnYFsK6daFunjyTEeW2jAzLrwXcLHyNH9xmNuaPBQUNEvepMtEYDTCViQ",
  "key5": "5kawA6LD2FDMVYuaNiajz3ncSpL1VTVm3dhAHYHW9bsQbkHPmahnLoaoWGP7wjjtuGYjusARojf6WuHB89kHWKQM",
  "key6": "5Jy45VLLjaQ7v8Z3jkE6yxpK3PNpnsyy2JxbLkithzCzNevntqrzEevv4e8qoKJqxcab5qV2CssymkDmRgDYngW3",
  "key7": "3ejgUByhNY4yFK4B4acKdznBKioQPnoSLt3vb88vbuw4XAH5tTcjR8SH3k3VqzbtQvEF9DETK1y7rUjHa1bxkBpd",
  "key8": "38d6opF55myLmryi7Za4DdzUHjA3aH1D1HRmr2DcTjQNG8FXG19SN7FzhEkh7ABtzdV7DbGmBrHo2NRT9QMn3b4a",
  "key9": "4sv4YZeKbSLzfDj7ehJRWxMKSAt85pqYrY8hcuB1rhNijXNajopwZBD5XvoF8BdpcThPGBr5BNy57SrxxMXcM6Dx",
  "key10": "4yp9W8Bjv8c4zwjfsYmHZJ8RjBfKEsKDZcCAnqGEv8WvMxuMu9WGBXXFwx8uEgmJ8cYz8BFWJBDBcJs4oKmTrgDH",
  "key11": "366x1pbcoukEXa6oZEWsiJESHAeSg5R5wnwqUvj29T41pfovzEUQ9YeHx28c4w8kEEHxz1hr76KF5tJoa8FehKDc",
  "key12": "3dwHhzbGBbLCSNmGE7zeiawRTYjwNLa2YMw5E7S1brRxvFxjv7tpFGzsFMgm6PrWsiGDb3nje77k8iurvyMdiV2H",
  "key13": "uuAcABN8b7B8gxA19zmwDdpMdvAFAJ71oKTweuQ7yexJ67NMjUqF9PWdjXcSnvswBakdqWwfrmkmkAW8a8S1KUX",
  "key14": "2nuf125qfcwkiS4K8qEu5FRFiBMrSSGUXfn93j6Msp5DLgnaTyT7gEuv9c4xKTtre2aPMHMB91aDwNPsKFXfkTwC",
  "key15": "3omDftok85E8BGUZF9eWqqf6Em8ZxuQDjKy4HFn9PDTSLjbo85xpLw8L6hcAHtXthkVqfp8dYjVFWbjidJgrjPB",
  "key16": "dRh5GoXVQeh3mGfBC6Enb16SnL1JbvkR4cWF9bjgZvkTVQcsmFKFewhGnjcy6Kh8t3tCK2oxeq5zP4Ctu6N1afw",
  "key17": "hA4oNuQJ9J6hpGRQxcebwYwEBdJhZ8WZagVrRHMCfiWwUa3pceVbUNTtFo5YurEnexbChnkEwSaDG3LbrQS6Y93",
  "key18": "5hfTjn39WyjKLbrkfK92eBAkYc961tmtEACJ9L5Dzj8kCyRLTLveK8YGPHBpzsVmNHLCbSiGjzWqMMYWoypj4jL4",
  "key19": "h2rF8vzVZNHsxkKFmn8ickPNhsZ7hHi7vNd2AuoSLECsHAjpGyzFjmTDvKDGLu9uSdi9MsY27KVazKXA2pLsbdC",
  "key20": "jLUJz6i3Wt3LhTqPU8zfWHZVPJi5g8wErGnEUkXritYAaMCcuM12JLpP2muFntNdeYnQ6S4KgCEQR4YhGA4vLUB",
  "key21": "3YziC9FbvUNox2aAGZeNsPK1pAmKGiGw3CPu9N1YnhrKmQnrx6D1qtoCRZdRQkj4WW8uqFjNweYuyNFGhAMJDGup",
  "key22": "3G5v7TGGr2636wmuTL5ABnDhPhvL6tusLT9J1RHSeDcicCxJSttq6ykg95ZjJ5bBB2WkuBrfks4PkyJ2VXsyxuP7",
  "key23": "41ECtPPJcGvyqPqr4MJaZua3mM8EwJrzzHuCx32PWGi8sc1EQUmyCxYL29KNCfSCE4VvCZAjsMSM1nKMZjpYqixY",
  "key24": "4Q43PoJ11bM9U3MnvJ1qcZmHZ7BFuVUQyFdKa2HqQsZr3R22rb48vyeEUkAw7zLayLKe1cKnz9uqeFvdLpsigPz4",
  "key25": "4GRj6eXybDdfwbj1XgFBysfaUAJoHmYVRSj1gvQ3otwcD9aRZKFzwzk9TAFEE3gffwFqJnchfor4z9uGCRSN5mZD",
  "key26": "3Tj89eDQuPVvR9mooXj5d5h3tiuHZqthjjZjbp3cVtfKTraxQkiScCRUwBaHfdTGiPZ1GxxYPFTnw9b6iBmgCVm8"
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
