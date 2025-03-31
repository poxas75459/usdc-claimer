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
    "4hF73vingp6DGU6UB6FtEfDPiKEW4nJwVeXLk5oWPjswAtNLJK1trNRRaeN1GVfepUUh75HonPcSm3ARAojYnFZN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9k5DufhV9xQBhwKFhXBfTtRdXGXt7mq4C48aVWy65SYR4f33f7jHSCzVpN3Kgf4AoAnTbEXsnYV1FnxfVzAd3o6",
  "key1": "3YPGZ2MYJ9asQxKtXRtrpVf19YyKo8DpLWE61TUXdKEgJB4mmiJ5CczJ7313ieaQnpAbV6dNKkcVC7cmN1XiBXtM",
  "key2": "4hJmReNroMtHFwx69s4vXjk7raw6s4kpbtunuWr6mZG4Tjkx4ffF4jc9STMNUWACBGoDeH2i2aRouLh56NgKDhUU",
  "key3": "4oxKfLkkYKpDmjQgpR82cuk3KfHo4hTJ4aA76BsmVa4YBYdpAK7vWtmSn7abm6UkfgFN6G4iWFt24fLPzg2G8nua",
  "key4": "5svhWpEJrcjTu2tptJkKbp8JFcVUK8e6htQTjwuDMzfHyp7BiPVM4JQEwDy5pPmnAY3k1ytTx8tLEN6vSH23tNPN",
  "key5": "286xMjjoWbWPzw8LExyyWSF71apsQzL856ix3H7BmPRrjreqVULU1LBgEXrvg2rzM5gA38LrPka4HQpZczfUkUY4",
  "key6": "2CzeqVqucGW78i3Mop7JjMMKmNgSrqJFrsahnAnwh119bymnnXhjibqN1zEG6sRr7esTFbbxs24QvcbsCvyBJKus",
  "key7": "3V5xbbevsjLuGCD4DhuqHFizgCEZXdx9jR8crFDF7sH7DNPsStZvfba5Y4Zj4pcHB8xaSDNm7cT4szPgi8TRtpAV",
  "key8": "2NYmhJ27GiEwLD44sYtpGqcVnLJRcYLxzodvMJYreawpdGacSqFDUADmeaRGasGJ4ArX6ojmoujVDkVWUXMU7gZW",
  "key9": "5PbBx3QNm3d9mhsfJ55EL5VnXEiSGdRtftpJhus4pjAoPkaiV5pNZqe6RACo9F1M4ZSTHCQp8m9hXJcUZrWobaRL",
  "key10": "8YWy4ynGanxaXtg4Njwr3aSk4fLwXDsFX1EJSXeMLJceA3RMJSLa1WRMkPKuHzqQi141ouHPamCNzSqPL9EdjWJ",
  "key11": "NZBzGKpecgFTfFZSSgwDKVXsMnvtKb5rashQiejBagCpuWuG5yrZUWRqSLh9CdmzEtpmsKk63WguxrRurCkZ4J2",
  "key12": "8WZiTENWDj785uY472tUJhMKLHGvH6VYa4Udw3y87euciiXkaEG1EnnBVAby3K1pAA6e8gsSu6xw5h3XXTyVxLh",
  "key13": "511ZkNPjnhjFBTDvJw35AU5da2kZiw38GypfWRkK734WCv9QjXC2GJEg3A4Fm7TWdqE9UAkdHEG1CD9674NaTfFs",
  "key14": "3gfZg5esUa1BQtC2y78Zm5P3SPxoKBJKkgMZruwjDWvHDaCfASh9e6WDSrstjob3P51eGekKCna3fDLTCrvuyphm",
  "key15": "5BmiK6VkFpv4sx4GS3xzo8Vd6BhcZNDYxRJq7eQPzrMhF9fgJzGEbG7mPwEM2eAoRxrgeNGd8P1TeMMfaVg48uZF",
  "key16": "3xkzq8oFuCjnjRtyxBpxhN4HQP5thmKr8cyYfspnqn96GZ3PPLbVUxBqGLg4a6Cc2A2ARJhRCFCkouaeYKCun4tx",
  "key17": "kojKCh3JB6vURUHut64R97sFU2jrV8xzwWtyRBpnSpu2Fv5ax4kcrq6Rh8BK5ooAfBXTTwdHSa8NdrY7fD8iQ5J",
  "key18": "4YansbfmjdcNsS5mwHeLdCw1ALbAsJC5fy5EA3xiqz7u3um9qm7ezNzck1UDhKKVgpi4E2vLWcuy8GFzVYfbZa5u",
  "key19": "4dx3SL4CEGHrsBBM2jxANh4q9nH2HJtEYNp8r5Qixucdc82719bBngEivM38SjyjTRSvMBf1qqdBahmehGtCowKz",
  "key20": "5KgCu64aWB9xqtugA432HREgsjA2sAUoR6acs3egCmPYTLpX4C15apVRjj8pcRSaFWic5q7sJFoS5QykxXZkDc4o",
  "key21": "2aQznMwWEiJsRa4urXnrE7Bd8Bu82TjxNA3oXbbPcPhhiTNwkJikh47JirP8YRd9sZ6DT7adeJS2j2sBzweqXF2Q",
  "key22": "34LjLeJ354UGd1iu2McE1TogjeWUbwoMUb5cZ9oRnVGjwmPhxsKwndmVoE8V2utbDsw993uptJepo6PSMEGkrtwB",
  "key23": "5NLM5Sxd7NuNKsDw2N2j8yUV57irvGC7ojcwGyaXch53oZeT4EsbU7p6bdpBojoQucgqiKFq4VfRRLopvvbqRWo3",
  "key24": "2xdakgXBTtGkfeYHHMtLKqHXDA6bcUj9AoK17QiiujW1N5UzqcmoHMWMEnvVx3ynW44UzR8oPUKZDQxB9WnE5CL9",
  "key25": "5Rc7g7hypwUdH3XujiYDJVkbAb596sbyfRDx2NSZjKn87JfZz4TLbW88v76j6nN69QLAkiqs4pxDAxcY86xtLs24",
  "key26": "4hfvVQZGrwHPLQJZ4qNqJF9oDv2WBV9dCE6dsQjaqAA1KsjTdsdqrVMW6V9QuKEgVR6dYqnzhD6M4XFT4cE7pb8G",
  "key27": "NNYq5GzPJzBzaSPjvFwAMou7MCA33wvTKVhXLATFUVonuVyNtXqD459DzvELFoDK4vYb3SqNeyVfTTgaFncy4ik",
  "key28": "4YYXVTodAc2mwKxzYibiQVuvsqbue1LWBfzRHGseETggAu9doS9Pa4EmHzt2iHuozVeTGnyuYpqi9Je9neqfa7o8",
  "key29": "5ZdNqdYWJRWCsuzgAEiju2pQQqFzD9riercHJsaYeppSeRxbRrADhLiQkL1UrReXiaLtxGTcmm1cvN2c6afYEw61",
  "key30": "AZ3A8q84AtLzXaBNrTLHXticx1GD6ppoY1W6kz6mbASY5g5jB7JeohNcV56t2f6rTHwyvhQJ6WnafBHKEuhDRUe",
  "key31": "4R3fnhAZU89ur8JmKH1dbDuHNkdJwkQxiSE6MtBZVPcYNWzsdXRRwqSXcQhmPqGhQsiCbJs8G7rpVaf7LVzXNmtH",
  "key32": "TTgeYithmB75qdYekKxdJZ9bWRpuKQDzC7ZrJpXWY9y1kHyFgVWR1qwc7DagoGJfTkxLA1E3BpWguJ6cCRArVCt",
  "key33": "3renYqm7BtiD4qX1vbDpmFMfE9MwfRoNXixzuqjp11rrRXYDyA1Auu43ECXkUzbuwnrDw8KzMZJqh8AzVdWbcCQi"
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
