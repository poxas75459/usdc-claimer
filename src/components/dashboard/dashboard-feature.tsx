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
    "XMLoSVPW9EtrNgNiz6yhTsrXLuyhb685uSPCGpDKdQgvpfWci2dru6go9sGZbFbiTJ4ooVNbXN1A41Zh5uZb6Ku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5czH6wevAsG68wqc6HdgqGgrgL74rf5wNDsZpSnz8sLefVdcKWQE7oiChetV1tCP9CEGS3LG4J9KQRWn9TEGTg35",
  "key1": "33MArBJxJqBSjfkgrVpeGhER89QKvUwpsMf1zuPAwYsgu9JuhRmFsnPP4YvfZgLvF1z3MLZnx3DKqfMtjdbREEr9",
  "key2": "4QHS2T2bxYFt15ysLy6q7f8mRJTiJoE8RCPBXYvpBdoFLjwhBaqp5RpnH4kzRcqYWwZZzh2jZuTDu5eVXSkpXvKu",
  "key3": "59KtE2wk9zZ7zCBk556B59MwLy1GNP5iQBtmTUpoHonSBG7NbPYCCJzte1LuhRWPBWMh7Dqtu4AMSHamm32gJYj6",
  "key4": "2Hppx7kfUv5jGEPEqDb5DCFttCjuGdNWXhf28JQ4vNGL53rhrH55Q7qUjuUSGcyKEq8hfsXjwKTkqSxB5LQKgWxY",
  "key5": "4gUSRvjCjq1FcjfTQrsKuBSLJHQudbz6KD4f82toR2zGJYUEcHQGa3QUPpDjdXBcJNakS6TsKYVB9zoDWNaKjhPa",
  "key6": "5tGbar9PyYECCWaKvCt32DMpwwcWJGisXVxWtbjWnvajmKLqNHbtydPfJ37V1eHaPxZfBcW9XgPK8vLpMmX5nK48",
  "key7": "4VtxzCHGRkYFeXdc44CRu93X2Uu4SjJdspHkS19kxnHhfgRtyRAjszXAVdSuYM3U6MfxEcpZLjczAYZi3VJTQqtE",
  "key8": "5so46Pyw9mmxu7CojD8KvjpPWrNPFBmcQskthBHKNCDv8L8CNCNAQHh1AMUdi9WXhiJZJyw3U2e4RKYpH5VRRAoa",
  "key9": "5VAbh7P1riWF9Qr7AdcnpsvaCHTpmaTfVLL6yyUKiM4ChfGGEHrjndH4cWEeyLYTn2pU961ZxysR9VrxAirzLYDx",
  "key10": "Xh5pa2Hp8K5884D41s3j4k8LWG6p6QjAfoduLQYrKm1iShgwG9kc1u1E4461Ho6gCRXEGjoaxDM1Kt9xTpyMF5x",
  "key11": "2EnSXgo3GntcjoARDE4pM4aYUaggupZgJjMKQKug1TSYK2oS7jFZgmbL8uKfKJLKnXuWavqQ6Md7trYW3pn2rHpt",
  "key12": "3Tz4Ck158o5yQ5gcots5ohd8XNVg11YgzFYQBNbM9SjJ6C4nZBj1sv1gDpzBJVCLrvYap5hKHyrAWei9VnXxGtsb",
  "key13": "2QYbVVERZqmGnkehD7JadDycGPhUEAtaFyhJrB6DN6KYEdzYFhrfYqEEyarjhscHoRqGNFkAmf9XJceAmNGSte8d",
  "key14": "44WntqJPu5w3v5tZDNshQpwfWxaasnJjLQDNxgKovrARoj5mvWfR5bk4nbHHn3njgEF73xvHXhSYHJoxMcfdFN9Z",
  "key15": "38mSBoTNhtycDiwZKL1PCESBjVCS1CpQFbm2MQ35P5hRN1LXyL8kzQErdvNnTn52AmYibCfJDSjgCKNgvRYM3vYP",
  "key16": "rmFT4oSPv6QTigDezUnGAEfgMCGtVw9vFFU3RVwnY1yYACzSKVzW85fWG9Zp1N1KrkQrDPEdFDxFx2u4BEM4tM8",
  "key17": "LU9kuViVgRgXRnp3zCmgBJsssns53RkqA1YwgYcn8tQvuwym8hdcEcU5mEdUTVFMcx2hRBgGpG2LGMdGCpYwv9E",
  "key18": "57FqUWg2wpyDuxnshkyvSwnycpZjsphwu7YvVsPtn5aREQkU4RY1i9A5Ta6Vo2vdS5CwqowVD28XZbYenZ3nCK2a",
  "key19": "3PLs5XhnZDMuKw9Z2eiSJM71BfgagrvfXhqxYsYdApNf8a1kRTaekMReaNY1ZfhebXfAwqSLUPJbAZ62ZVVoVSXb",
  "key20": "4eXg4Mawg7L9pW3ujbB3mnXDquqSdhPsV6XDHki2GNsLek9JFtVJkyN3HtivTmLtrNFLeaFkJ8sbaaT94fWzQQYk",
  "key21": "2vfHRDja9rdnPziq2TMC9p34qU5prNywWFKbYwfNM3QYEHNEpW9ZJfYEiUDCQwNaUeYkxNW3Wqa51XqUymc9w8QX",
  "key22": "4Lrwum3Mz8dHf1wgkBgTMPU6KU53s9owgbiNZsyPBc55ZC8ZRaEHevJTMa4GyoDuNPPaxkMAXsk8LAviCpzenDWU",
  "key23": "4mNB2tjrUHcFxVzQZJwFh6qpjwif8h7FdKoBuqQLEqryZkHz7p27Nf7xk3piK1EAVBUgxfpYpe4b3UA2fFEHUKsb",
  "key24": "4qRZkYpzf2qcBQEquCGucfdjacdkwVDeSrn8dQA4xxrTnmhv4JK7hJuuGoGWzYbkM3chfPkxeNaZaqBd8gSDzsVS",
  "key25": "67MmnetNouUG26mfKUyrLNyYNZmVpSFZCEeY4Yq2aV9ZyyEZN9jmcB9DwyKiRbVxGVT1oy5hcLuGzA8c9s7gZgBK",
  "key26": "4BTj1qyAfAL3nSE1vh88X2vdzvN8T4aRHQa7CsSbTYgVLacFpybB7VCdmaLDxT3vAB1YchnBYp8zS3Xxh9JYrHrb",
  "key27": "41Tnv7YVYXeuE4MdM9fyCJxQ6mCArie4WNT3WRFqM8Dj4VNPoGGXdsT8tFk5iCGbSmpxFMfMY295S1yUkviMRKVv",
  "key28": "2ojtLHM3q6svMfCi8eyuvCPPRDt2JaegiCf6KfCqx2DJa42ertDbXadQajDQKn3JNhYQp78hbehDFJoykwuxLg52"
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
