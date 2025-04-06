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
    "4kYi94aq4NjWhd1moxXxS7Bc4p6yEPGssuQCuhS6mcRgrT4F6pBZczoNq1q1Lrq8irVR1xwtgDuGjNwHYPuVd9WJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9tucLywWBHtb46PMaUB5tkE6o6ea1p6Qfx7r289A4Si2W8FRd7Yo3LwpBAc9sQVFwcmLZuzMkmpLRAYwyje8WG2",
  "key1": "2gbEWpu1RbfVWEztUUH9uWkiJJ8Ec9fPifivwPYranaHyCMV4deqn8iKjKEQbCf6dXZnpL2RaHis3v66aWGhJTe3",
  "key2": "45DZKJuiTETUKVwxNbmhWSCbBHeBAePUK1VmstvyqCzjTEs77q95TpEz9p9LCP89BSp3Z3YAdtksfsBdx5SwRFo9",
  "key3": "4mnQ7VQ95mU26WYtGV8bR68fs8zz87y3vPuNg8W8hDEsZVyNveM2ETAB93L7npNWFzUK1i1Vdk4GayhrodydH7ck",
  "key4": "2Tb2h6WEWhtua3X7fEwa5mJNUyEv9YTp9j8b5jonWKXrnme1jCQgEbNKWAoCtuBveJTaJQuYqud3tsSbr47GUpkk",
  "key5": "w1eJNahNFxNExy1vXpatMDwaPHjcYxAYHtXAGqekweagugLsaQnHFpp41FEXpQWvfNRg4uK1ZjVdAVw7p9mJDym",
  "key6": "RxbTAogzVW8bzJG5K1oNpXvfgRnUP6YU8wyoYqpCN7GaayxAfRsmNTk3ComXAueJkzcvBHvEk6DZcbzSqpLwmED",
  "key7": "4siEngerW5vLUHcLb6rAGmGmK8wTPLYw3GvSEgDA3JBnPcn7RxcPjPsAqBpYDFxvehfViLLJrCmC3Cy1BeBQEqt9",
  "key8": "257y8RHKScFm3uYeL7VxHCpSHujfyHXPwY2xYTxtkPEn8BaDca5MN3rPK3viU3dP4YbCq4TrdHuMpeacHk3fcRzi",
  "key9": "4qVrW8C4Meo3QZDcB76XtcMiH1TKU3GfmdMxYiWydPWScp1q7oNnbhiCiMKYXnEKXjqf8GAaA6F38rskDJDTgXPH",
  "key10": "5uM9xfrfLEcjjqkjUcndpoCKi9j5bcujdDbe8wUt5wzHDoF6bqxp2frRA45cDyJrCbAKhAC2YRFHDPZGfZxu5qq5",
  "key11": "3t12RRCGHa4FHRELxRcn4it1aKx7ZqoSW42Hfz6xgNRJXoZDk7yz24sjgWbc558g56qnhMqvX8waWqQhHWydLdK7",
  "key12": "44QzhSkfP9LQ7urfRy5htBo9rh9juZLMyRnxUACxmqQd9LECNF55mekVFKEGXYUiRBzqHV5ck2VCZCp7y8VuXu99",
  "key13": "25dwrHUdqySKgsH8WPC9CvGb2T1pqTf5vMNiEGU6H2bEfMxaeJARxnZ7S1iA5LNwJYJkv9jbJaecVyTBNvpFgmfY",
  "key14": "68BFbCgPNTCmn6aSF19AVWb1amxPvhXMuzcrv7EmMHFBdQij5f6X2x8c7pD8gY7TRShHgjxnd2WnpTGdf3Jyo1n",
  "key15": "4P6YfLhw2vGiVggr5tVFWBq7wzXM5b3D4mWD2Vdhj8cnZU9g26CegZga1j9qR4eAzPNY3saBidb2vvyyNGWiZGZj",
  "key16": "2X91CVnfmjGagcGQzrszZ7wrEhjBoGxdtDiLBcHhjKcZgPumDm72p8DJFM9reraBoqupq1zbqJ5aiMaN3rLntckV",
  "key17": "28vpqb6JjYZ2iKCbQiPW85cJaQBtbF4KG2EvbmW56zGHgyQGjw4ZkMYPWUvQ88uUToRnG4xtpHzEQTZ8PKxFajtS",
  "key18": "2kpSKHnCZG9hozWdJ2KoTwQ8wJSquME1rXEezvHkKJo3DsJfGMrFKwMs8N48FUK4VyDvf3VEjDqSYkeGc3K3aGM3",
  "key19": "4gigNPAdCAKfHkRXULhKm9cwsPe2o6E5NthbALgTBtw6BJKRNmiA6qT6CgA37aGvWAMJpkgfgKpsic7V54Px9bbN",
  "key20": "MmyAPbj4vynSTP6YyEfnTMuj9XrPQCzbqc5GeHmtySFGNkWMpRm4PHkiCCLVT1Rzr5iS1e5vC8b8PwBGFAJvPxx",
  "key21": "67i1AYeevGxvB5buULZT8USXD9x1bY93cc4VfE65bCZmBy2Z1CKdURh9KJ1vD6YuKcWFgek3pznhNNvuCUqfaYYK",
  "key22": "2c161KqkqdzPHw7KPYMgUv8t7YGsGNmb8Cn9HdbEWSiupTpWtmUjHQSFkiTFjzKC3CpcA7fhWcfBAPeR1oEPyQTB",
  "key23": "3pQNUvNGXPAL46jtpbPSw5G9f9q6WHg1E9M6dzrTkhgdmwwRC9n5CmFYu1VAExKLNi2uzDvTTaqKuoN8ecGJTD9T",
  "key24": "2kezDfdBmAbxjZKQ1Vw5BGHBFrVhYSRzvTLrrZ1RGgz28DcFGtYDR7fwnWUkSkcAEc87FvwumtLbgiwb7ioRsR5r",
  "key25": "41wd7VXWsoQ2PrjLRrFN3zgbyRwK9DDF7vXeJNrv32n8GaYUPcVd4Aigdmd283n2qt3TeJPLjXdoKV6sndtv46tJ",
  "key26": "3bqCCW6rnBRLeF3Tz2RAVoc43SBQMyp8KG7kX6Sr7g1oVnjWuso2HJeg54yxjZgQvdy6Fb2cbqHbehYMpCaGCHQi",
  "key27": "5x39NgVhSmR7sFCYG9GsCG6UK3GStq7DKCwKzgN94KDDkTqp3pG4EcmJ6kN4hP2ZMrGTYTf8TGP4MJdhRDEDAgxT"
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
