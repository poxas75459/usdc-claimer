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
    "25Bzkkeuf9QEQ2kxahUY8LGKATnFnmHJFRHKBuGPzjQvfqiVpX33aQyTed59V5HQsfG9JtuvFscAfneKS9U8eEg9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5szUc4q6VYgBLTW1fRxxwcjyapYXN8uY4xsT1mS1zmnszyFdXJWvKnjSPEojjbasJsNHtaXXSZQKGnwwktoZzm1K",
  "key1": "cRrwm1sB7wP15cSUfvbMTjbhFabreyeTJ1iBeVcu3tHU6yUU72A64CpKSzikqYQ5Q6nvt9eJdCN16fRvb9vtocM",
  "key2": "5TzbFnekB4wHUDeJiy6JbL4dMWBx3qmQh1eU6RB35FoLXNnB6FKDPfazwyJx4GjEWR1SrUNgXHTF7r5WrALP21zZ",
  "key3": "5ZGbbby7zUL8qsPDSvZdiSghWpAZXVHwfAzWPVVNVU2TU5hJgSu7NuPgmAa6ZCjCVGDQ31SkizMWSX4KSwTmAWsA",
  "key4": "4PET5sZ1KKpFPNXj9UErqJt4rtNsMdTfGEV5ezVD9xgWCn41YfhNuy5xXKzK7M4oMcxKdYDHECZXKLvd6JTHmG7m",
  "key5": "3eCgdV1ZToYwdXxVKrkGU7BwS9VXtQ4FRp19o7BVV8anhMfmxur1EaHcmnKEoKbVBnc661n1gd5kwGYUDZVVvx9Z",
  "key6": "KQ5WZRsV4hA6Mn5Z74bP5CM4Cvetsj13kMo4mh3PYxncwoeCSne27JWWJS9QZvhprgjn5dJhxf8GSY83QP9JPY3",
  "key7": "241Rxztrp3jHxwQfNNW8oUbVq5KQb3GgGfofeE1qKSE6gTNZakMx5JQiH2uTi33d1gpyQbA7p6VV8D2FvhGX6anE",
  "key8": "3XQ1qJcJvhKgTDM7Mqr5ynV46C59kCr2EPh2g3hWd6QJi37tZKi53BeDMV3xmGSusRpzv2mqfc2Ky5AMEZJ15mMw",
  "key9": "nDvhMiBLHdnuc4PPJwokkzUwtuNbo2tHD6VUBnofTc8b27XMsFjrNgZDbXjAcGmyNwq4QTHFoEe74zGsMzNrgwu",
  "key10": "5RkBXeTvnN4owcFnio4aYUUT3vJJExbM7B8sUUqe1w2SRWgMh6a5GTZXvn6ic9iC3uGnUNXf8zB4z3VKaV81gFh2",
  "key11": "549iUQBDFT2DcLuvbadrHGSvV8uQQNt5iwG2SDoYBr85rE53Um23mx2nbo8iVE3TTJmxqDVYJQqMQZAEhPeKu16M",
  "key12": "31H24jgpY4raFnYKau2mMXiBVmRvCSMnoTByh4YKxsVw2B7vhVp74mPpZWq7K5gbLYBzHXQwPkYgYMjueE5vWdvc",
  "key13": "3CwYAqwGajcZbk54kPWMwnknBnuxfzwx5KTsdZogTpkrECeHMFJKBzAvZgyQVkQaiCpeATNfU9Jac8sZC48KvWsd",
  "key14": "5bGURmnYYh9byUr5sfsnG6S9dz6uxbp1e1p2YxQvi7bELnod2u8Z2CKyCHtG2PvqFSm87K8HdBLS5t9D1pN4dy53",
  "key15": "3A7nfp2owgNgrGuZTbyNdJCrQw9KjToA7o2ZJPk2ywPCqL7VipesPkV78qSFKNaivdzFNxo9t48WZXZ2dsCLLKv4",
  "key16": "31eB6E3qzg1stjGVqXQXE6ZHSquwq6WszFeWc5i3kKgPGxShKw7CFKKb8GJZGa7bDqqgBxFCTnykJHQ5qK9xgxbS",
  "key17": "novqAHoj73dqSy8CZU2XMhm93ki7vqzDLKLZdpnXiNtdG6TBzfBHf9sAJ6C4cub731QqJNGjAgTrVZbtfF7MEz5",
  "key18": "4SEkiEhEoRfgfwwyr9jTKnPqNy5PB3DsFRiyGt5i1jC3d3DRo4zPMgTXPBYTmZbGzCFHiu9kRCje2h7L6BTqduUp",
  "key19": "4ouHfzhzqveeLt2HMyRVMmKVyevKHSSJkQdsck1sgAcghSsT5Z2hZKWkHrpDDWwqjerWKfKsKeCDPyMqzYpCURqM",
  "key20": "3i7ntPrFH2mr6X3pxCuHGMBZudJwuokoQ8FHP2UXKGQaKWrw6nMne82oLZE8XZ41VAy8PikSfRu5Um3d5M33dDri",
  "key21": "5q9zCntpVn2g2hfstXfcDaiuiCbMtkKLYwoEwLZku5FDCwczM2pRpFNdNqS9kBSaCAVCAe2m1i6SLudhMhp1ACp3",
  "key22": "3p7ARKDVVJygcJ6bwdWmrnBoXUtAVT84ga1XPTDwywUUaigVrj2HaL6MVejHkvuiHFfHhhSTba37mG6qQecVudzA",
  "key23": "4o5AjHjCyzVQigYGdanAs1kPhBbGLSnf41ta2c2W2LMDpFgttPDA8hoNrniLy74Zi7z4W63ednGN95Hz6GYojCuB",
  "key24": "4rZUNruDfvTBgGikTq1TXkNvY4H3a6VCkxTKPm4LSXcj8z8GnomTW7L5cdqwR8Ws8RR3tAiLsQsgP3LUySzJdkL1",
  "key25": "64RfCbsrAE6Sh2MwyhDevXCdvj5h16aHjuphS7dESRom1jLZMk64cgNrFY2Y78mtA91NyJBnsSkA3QLcVmecQGN3",
  "key26": "3qEJJTjnF2i2AHx7d7MFA8wafGgZaKbcfEEPitrTWTJdRszUfsPFP4CEsq8qirdYkQRhAJFm5SKPHNw48zTm2KKV",
  "key27": "4tW5z89LPaJQwrUyknJHSDRDUSqjDwkQkQjKHmvzo47EMP4aWRBT3unfGnzvHX9SJcMmmot8jHZUeEXZcWA9TNya",
  "key28": "4fbRzG4QucWy4wauqtXnDUpcZocYxqRZNYogFysjtLGaoFE29YydFZa3LzzjReyuJFBJCRukS4zehNwk9MxJzaE",
  "key29": "4FEptWLa6jhrdMjPCii79ZRc7eSmMRC7xMCgJjdSvcHU5Z7YGKW4mu8zh2cRJPePtB2uvY98FVKt1iLqNe9pzsGx"
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
