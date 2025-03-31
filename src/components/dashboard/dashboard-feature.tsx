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
    "3kbU6atrBTmjW6f3zNkAbVmFenhNzm3SBs3syoXdmZLzj9GncFJ4PFVVwNWdwMXktX5t7tno1eZF4zVZxkbgwp6t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mUJfCLd9nYDXXCqZSMbT9Ekn54LctWLtjBXJB2PfawwGGMTUGk2GMd3TLjmpQYWBwNq5rD5P2oV8zXWhEs4AYxG",
  "key1": "4uTowHCcCMzprcD2Rc6Ct4fVkNtg1fUGMaWmSxFyxUkPeLm6PRjLLhGZ9QZoum4p1t4EKNdLWpSSob6ZgQMSft7L",
  "key2": "314ohuSvHVruNT8qPYJRqKcmgNgdWzCX1VZuX2jvDfw82azMcM9xNjiFhp7CvRUL7Ya7GpaNecVqPf7y5unk8LvZ",
  "key3": "u4dYjKbzNH9skf8rUo5DzHFofjRcCLzmoZYXUpsrTfjiyxBtnp5aknCvDq11ctfuNkHYM9uF4zPMJ6dB1nxHU4L",
  "key4": "4xBP2XmPb3obtDjSzhNoycYScT5UuUJ5RM8rqrJpyre1pkhuYheCkiYRk1FmJeuaMFVfS6SXrRb7zs9jR7td3y2B",
  "key5": "4ASq5Ti4bhxowjvkNrBxvkBpzojug74zR7AMpJ3VR7cnwvn4jB8EjMDxJFVmzxSoQfv15GQGTMjrmtZDtQNEeyUG",
  "key6": "46B1DP529DLwAi4HCBeBJq6WMsntmpR8fJkeEPZYXkek2B4N7eZmqQzicMCqJQxYd8wjs3fWAGGZW9jXTvysizBU",
  "key7": "5EyN5y6uNPZLmDVJFE8sGnzeVxnEabEBSf9Kz3QACaAiSqgB3Y5MXyZpuR4PxGjxHRFBfFtc28Xm1hxdUFwfB7Fa",
  "key8": "43yYn2fPR7EMA4H2EBB8wRTKDQUAo6st988u3QB3RXp1LJQy2oANky8t6WvqL9ujBpfYWy2bJfkhF1VapRgcJFdz",
  "key9": "xwU3hYoEjRgy5gNTMXWJUXNByC9rn9kUHBi5qHektF9TvDdayZashYdVyGveQCM9SDXydhFtcUC1TDgJPHfKMzH",
  "key10": "54imRoQXyhhSmFcmo3XxGHKgA3tW6wPZr4V94fqRNKGcZtWiz1qjUX6tZ4jFyP12jTkwnGPysYwT9SAZisTn4db7",
  "key11": "7G8EScU4QQr5cdZb1nQjBAqfyEskiWfc6mc6gyR2WmHytwLjBgaHFip8zW6vBLk1nRjyqnCXoWhLCcpAFBdir18",
  "key12": "2QUsr8Fk3qRALTNWxroEap9g8hbDywxinQReMsDyb1g7Hq1bUAmNDpsJi73WCJRJv6HRojpY1fQS4qhDMEZdWQva",
  "key13": "2FX4cVA1VXAzVbdB5dU2H2h6GFC8uqURUdhiEQ51sNh5T4KGLq7Mo7okRaDgCj5MhwwzgGQ2YfELTi7PWTUvqhoY",
  "key14": "65mJKpq4c67hGRsaJpy7sHEmYDRYahXQHbbd1Nb5GFE5mNGHxFbwvjjnjRpeGsGaDZx4mJCzcRNqLmNWvCUuzb3W",
  "key15": "LbZ3k8PJfZF6A4ixXCLpmr7EWn3dj6wcfC3AkyXH5koANJjoiftLuihHks18GtvEqad5xF99WSFeA4edBKfgxgf",
  "key16": "2Sc1A6yUQoKVY6NCXCLam3B4QFrV9Rtm9pDjLSAhfFEXBujVcRdkwcEMDsktBFaQLQmkizDWaex9TMfvLxfQCPo1",
  "key17": "2RHfervVkMQobV4gFHe3AYSj8ZT2kua1HVvujoD5a9Sgp315n5o8YmsKyjb6dPHqwiAUPvX1drJHwP94eDjqqsog",
  "key18": "3zTHzttPW3ojjr7nJGF4ERU2jDwuVrBUdz4QshZRXsRgjeVCxrHTp9Jd5JxhjK6bfGU23a1JgezMczCwYvg6R1f1",
  "key19": "aZ8FCKEgHiN1HggC7sR5X5G55cgtmuZ5bpfAuD94R5sv7uonAjRCYdhaUtTGikj4CEHi72TxqgCmTGZRxowqaS9",
  "key20": "3EWBies4vfeQbDovv4R5TQgQYq98jRp936VoQDLLpQrJvaJxoLkJHqrTm2TjRPPVEDVTK6uwJLy3dmunJ8XTHNoT",
  "key21": "35RLhqYgaxeeYSy9CtEQ5RPqJ5Yzei26mb2jDpioZxcLD1Z8DDWzM3fgjwaW2CPjEz4hk52kkyM2Y8rnJzFRGctz",
  "key22": "2D7SPJoAwThiBsSdb8W1uoEv7yHiouikr2MWrr4q4zJn38G8AbkyNTG217ZAnFi6aQxxVwhrPuQxFAGRvGbRjjnM",
  "key23": "4wtWk6YTm15TQ26jEmmojEFryyhu5L8kY8zJBD9w4is6g14CfmdkwVZfDWjKvtdTacDrzc58YPsoSF5ky2uN2zhZ",
  "key24": "2pYS4cT6Zgc1T6G3SiH5oy2j2sn4hqSstr1o2midMLfTbPBEyMYAcviktqSBe7PJ4p228MyQPNYhiSKZ2AfyNwQj",
  "key25": "67cJQ5pNEfYGU6VswYu37s2oSFmDHUAcWSMNDb4mUkQ7WZk58eHpsHb92ZDGFckhpXKLViexn9Uq3nVJGWcPWEeN",
  "key26": "3NqLqUNkcoVqXoM5WK9a87ZLuLqqZm4BqcXzCHQjrbb2wJCzBwDnrtE7vmhGCyez65i46edo4XrPz2FP6z5UssaK",
  "key27": "2EWmmevwfbeRNoR6DgFj34YD4LurC8USQU4nVno2QDAWA7GykeDZC31iiiTEXEXKcPFszJofbxn3SpkYMTQ8YKzd"
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
