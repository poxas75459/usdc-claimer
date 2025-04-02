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
    "2bxNPotdJjw2sMbdZvkLmw9HCww9KkjaGqZVUd5RWoJh2HMotCvUg3Z9PDNoQZSDtVaqoe7tFkZXddACjwbq8rDD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Cy6znh92hreg5Ayksq1FrVLT9yPmBnAk1ca1Dn94wWPSg3tWrFmxYLdDcRiyj8nQxk5WGM65qgsrgBRYiRFKXdL",
  "key1": "3u1yfB7FDNXhyLFj5hB2NGQAokXkPotvA7FkMzebynMSRL3bCsx2wkShnai7qWhybfvFYFSGq9eTx3EFxWypxxSt",
  "key2": "5dcNLKbP1ed5rZnHR7a2YLAWphzBBS6ZMgxu2o7BKaWviVQmBYPbpjTYei94Q4GGq5rJ1vbFsFaKiMvjfJkoByHc",
  "key3": "4xuvGe68sQCREYxbX5hc6BDBSCNHMeYzKiHHqXoGY964QFgXy4r684SPKigkMiq9GHecNAcs2wyp85XNBia4W2Pe",
  "key4": "GY6CExH8vJotZwBg2EzrysHo7nHzkcWRh4qHtf8WthHC55J5NXujforZ8pF84jQZfrcWrUPkKtPJnyUsvWiAdnx",
  "key5": "338sZX8ibpCcYam3QFyzokpW4729KAST75jh4UyvnoBtt2kohmXV6Q19TUt44wzm1QKcana3FBX2DBSzU5V5sw94",
  "key6": "43KaJewiSwk2BrzQui5BzmbdHWy1CJJhU3Pbqxk2YxLWWv7thXnAqK45wF5MTF8zQvRjVB1AipYhY8ti53Tc7Yj7",
  "key7": "bP43UAHidSP9Mq5Pe3v6X5aYASXzuikK97XxULaoxoNFXYhgnuokfgJAFoDDsj33CxPMkUDpEKXCunwjYw7GrkV",
  "key8": "2ruNBsCsTYUqkz7DSfiAT8bTKhH5hWv7NcqEkyXUPZ9E3c7y4Q1MZzw7FyPcon2t4cDkHjXMybqLN5NJaRnQT9RQ",
  "key9": "CCFrquXCj3Hv3y15aD7zwoF787RC8Z9AnEQ7UqpcyT7QEmzvbPDxah3A48Rr4V5E6CjPQnuT2FfhNAGdXru8Ebd",
  "key10": "446heAy2Ss5gZjmqLcEnCnn37YvK58neEQZBeUrHfMkFGKimukPRjbrTcnp5M7FBoMfCQ8LKiki8V2mpr7g4D92Q",
  "key11": "BjhrFQY3h1hCi5jfURnNevGEnLQYpXKr13xWg4fyUPzDy3TKRFsH5qKz6CcdjTmsQuDzfRgTVdrGRSN3FhDoqPS",
  "key12": "66Awqc2aUTbJtXf9cfAo4CDQY39tttJ4ZQQELcQ2ETmmRq4Pdpih28Q25LPngUd7Vo3VbXVMjjgJUyTN6pSUYvP2",
  "key13": "DDm3a5XVrhZTmzfgsdYS2FQhtMFYyeDFsYqJi4DiKt4bXoMGcpw9XqSVUfRyAoAoqxJxBwL56eh3Cqs4dB7Pc7b",
  "key14": "3phTjc3umg6Aij3Est3UzKRrNMFn5R2UbUvGy1yJtBJJzRmdzASxHSHeR5DdiDCYWfNmAXg6ovcTF8aK8oGKcpGa",
  "key15": "4LPQrtqPCDusEGHM7Jjk4AzECsFwcPYTM1dnY9WmqKg5KMLYh8tsFBjhcrQ1HmeUtk8AyvRSKB63qw8x5ARdR9Yb",
  "key16": "4Hb42vLvZibm199orK1Q1BrxdxmJyHx2swSBAywfDks6cXbb8xPHQhg13My1Av88ZKayTaDqvZYxyCz7fEHTvdMm",
  "key17": "26Fgt7s5dhuve89LwLRWMg1wbU7zKmQdKYXrCU6xRbA7DFKhmJTXcXgcnmLXcFeTGY1LKTH2KEsVhFhDtP4EHzH4",
  "key18": "5Zype381rHeWdv8FUmDjwbRDcwTTYEUFnKZNKVUD3JUM1rR8UGLt7X9KJidMCmyC5Ep2QYuB2LXdfDYZKW3ndPQN",
  "key19": "4rqV7pg1Qm7XhMJSgBfcWV9cTkcq8QVsK2Z7TR46QQnmwtjrWXRpn43z25yQ55f1sLj5BQmwqitnR54fHcjKyHHe",
  "key20": "4zWXmkJbvZ7BFxHaWEck8Qej326ffqNb9iD5hCe6Uo1fCTNYKb7QcMRxLa13rouwZXirefosTaxkKmNRcYDDZqG2",
  "key21": "5YZniqhgguTX7unDPMK9WXtt1y4YTMwUv4bCwbFxio5SvCTXGBPPuG71AqxYFCaScKuoppTLjWcXn1W1TvZjKTxb",
  "key22": "2SVkQsQGHGbpHNGSepokU1UxwmScAdSDmA2c2BiNCCuJuXvsUtKBfSUZR4rsmPzHeAXT1qUT5mbAhCDShRdqLNC7",
  "key23": "xYiMtMxtdepmyf5CP29qvP2qW8XvQkoUF3NN2QQAEFYbjtrWpAF9ecTNGmHigGP8oAJVSmUby2Q32yzQ64k3Ux9",
  "key24": "26UiwgAAos428M1f7fo7BeGWqg19e4MFQ7QhDFFrvZN1tXunDXsF5gNU3pKVpWmAkG9Zhj1KVSz7UzZGUr4yQVVo",
  "key25": "5MeXBCwbSQoRik7ZDDcvaZ1bCpvTVS9LpRoMytkhgdVkjrrtUTt7uAMD1RByFzXui3CcKKtKUpf3Mhd4eqriFrfA",
  "key26": "2s27U57cbnJpuczYR6CSDrUzkjMrq5UeHdzsdysDuJSsdB6b7MY4nZH1XGAaYEiP8Aysv8bVM1STpDXpUrpA3Rzw"
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
