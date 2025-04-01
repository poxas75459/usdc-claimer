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
    "3nm6nCLqyaD6ys7d1RMQco3eair3t2KW7MiSTmdpZhdq8x85KnfqqDiscP99g7nLegcDbFkwYQiumjQoBrzG3EM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BLTJgVfZcKfwAgckitJcsT3kd9FYDfqJe7LpkYQzxgQATizQs2PaCkHZKB7SMJWbLCpBaE2tNjgsYFQ46kTSjm5",
  "key1": "mSxGHX6eidxLMYcuMSQA7tnvssF4rodU5jeuiQeZHUCjYQy6KPRhLGggzxfrsr2BSpUZsNWgRCEYeDgtfCENMMz",
  "key2": "4uZWVzczuuQrB8WVPovbJ2JtHpTgZ25APWnzpvos6KLGRZdSjwtCQqAKXciMfbEZ8DGidryxX6tJGisZAoQxntvA",
  "key3": "4Z1r7NxAa2Xj9RzwU5dcHC8sqdUWXyAB8LBy3aEMJfBPv3HiGrv6HL6hZVmY3NKdTcETaUQ5z7RaPfi7LdJytpkg",
  "key4": "aBM4s6KCUd7ReBS41TqBdQq6xKQE9EG533jeUYvv2BcsdsTcJj3MecGM6Tj1o4bHkH8mx7PzaDd6VVtzqfahLci",
  "key5": "5JnFYJjFWR6rNPGz9g3QUSQCkPtbVTCz1s2pphBK9zX5VjDBU21ii6k4hs8ZzzvB8p7yfhqXtai4UAJ15RtSbitY",
  "key6": "5bXjSdXjbUE3R5Vs4t9BAFbape4YBeDANt7MXSc5uqKoQFoK2aogukbbBgL6PHA2GG6MjEkoZHF3ZMoQnjx75qk7",
  "key7": "7T1tBKawWDLzNCAxjiHFhmaCcUCZQEBUZjqWbXzPWKFvzjSqyWNySmyKw6YvTNB8PjkfpoamUj343CWuMwie9Cv",
  "key8": "3QeUS3yiyYho7nZ3vniArCbfRfCFJw4cGhzwrrkg7bgoZCxp7HUGoni5w87VUoobRkQTFn5NNQiAFTTKiFn1vvVt",
  "key9": "3T9MCDzEvkPr9rmNmR8sv7X2gn8rLAzbLRsKDe3Ba91mzwVPrFasHZQgWV4mZiXy2mjsZPXGgBkqes73VmvHi1PH",
  "key10": "3d1JPtDxYN34hByiEydhjeZwWNcjUGVmZBkQp9SCvKsHBsex82a53ehizqUCVPSbq6Vmow9oNb4Q73k6tfvsni6T",
  "key11": "4fivqnajHbFY8rEbrAaUqT1Z3KVgkR7cMMSVgk2z5vwXkqi4ZykV7S6ic57rqh2bXCNUZAn3sK48fMxM85Vt2S8s",
  "key12": "YdbZLnguLmq6JZUANsT7vndv7RTbiZ3Qvr6ssxNBNFiHuy6DsrTRFRsxQJNRCPbTMxM64ZX3CNMsxZ9nSybhAYU",
  "key13": "5Mov3PeEaYCNMshQRuab3FF7yizJJtvo8REtHiWny2sjGzGtMZKYFT3hsmEWx5HQkx8zg7FXyFELDLaK5HqZjwBw",
  "key14": "3StUzYs8dC3YmQkQfSeKo7ppqHNgsy93UdfA5XjSjKyFcqVLgofNiaCVaohP37aFiSYdqJtFet3Mzh4XHSBqBez7",
  "key15": "29nhki9SPjSNC6hNWqvNqVfzsgUQ2gQ7GHceidETKWLbvJ7BudKc7QNJWxiVTkw2NVrHaPLTXrwtA7NdTpUC2Pcj",
  "key16": "9emZLmbnKvgpsBFBrWyMVsHfM5vpmtKCUMojMhnGrFXw2xXcSqh8WWWEDueGd93JC3btAg8NhVoZcsedQSnkvM9",
  "key17": "4DiNPiEA69a33qVH4krueVPbtJesRfYtH13jzKdnnMwkWBAQivL4yXQv5nEevMkNCDK1cW4QgH1f9qpMbkrZdaWx",
  "key18": "4HrufXBJfRuCEo988jAFL5JnqGMy8aZZEsfkd4tN53RVnQq5Kj96QyvcCPtP6H89SuLboY6xtKt2eYQqcjNE1ZiJ",
  "key19": "62z8E24WFBQnNgjtJ3My28i9uPZm9yF5koJiSV5eAf5Epw8bcvCMSCcKNoqK2p28C1Mcg1CVoxDsEvHYzTipmQhC",
  "key20": "kttAXUAemN1pnEWTuLFL8zzKzv4JcKSBq5G9PUP2gxDfwtVs3VKHUdS8qrRBxFvRgUpoQJ97FxbhCWMjiMEdKaQ",
  "key21": "5ScLfxK9d39qpYmLdQ1VfXevYT5vDZ7sidsCoqfp6cdCrhD62sXq3QKUGh1kCFuiw67VZiBLZSzAb5poVdJLce8Q",
  "key22": "4JW5WpWFyCS7t4HJ2nL7rfnPuzJt6rkZ1RDTDbiyQtjJo5cmbCrNeXHX7QPo7kD3bQzqooqo5n3zDT6pqxSXs9FW",
  "key23": "28GHFJn69JapgDZCdys5bBtGXkqZiQaYbLFUESTQpjNcu3Eg61QxNVvris25moUg8rsRbRcSUFHXJAixX6bJSRnp",
  "key24": "5vUrF3H29ojKiFyjXJn2RgjFgS25zyMZvoCKKRVKTmdJSn3bwuMLuVjrFnviQcq5Je7wYo96qdqe9eR1N4UgNVav"
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
