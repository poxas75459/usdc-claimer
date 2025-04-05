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
    "5eEgbUwbMb4YX5QigGVPc2yavAxrPtncfjR1bHcE3Ukn5QtJwfb8dre8MV6u3J4Pi595CS7N6bqvq2o8MkPK36pR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fp7iLsbnUDXPxLJ7H1TQoRCHzYXZrzNfQojRrPPi1ar31f9ng7EFxUZ5SieALZMM2nJUUiszhzi31KwxPW27Wuj",
  "key1": "5md4RYmhYoruDTUUkDkeTzGnQoZBGBAUjJWttc3MzQ72eK2CG6m5DG9kntfhBW2DBVKs4xWninM9uMCqZFSSBtAL",
  "key2": "39fqBekQVNZ8heRkdG9b9bSdkH4E9BXjNRCJXDpqmSxdLnpEc8mXygDuqwkJS4K32Aiwnp7SNocaUYUQzTMFF9QZ",
  "key3": "4RkbugnzG1dfpGEC7aBoqeXB6pkgX9V5rKTUPtBjeYEaGQvaVb3dZ7qRXcME3s5FJ9ZwfJXcLXUScr2JaqxBAw7h",
  "key4": "2QNZA4ySVgez5FCcPvxsJYwLJHS4GAERZfYCizkH9LG1p4XyorzoyJb3EQUKg82zdZgqnP4NQHWtVHcAkvzX5hKA",
  "key5": "5obVkyrJtZAWmBZs97CYpj8Ekz2rDok1z3pyoDNZVn3MinpRdmE8hhNEMLpPCyo91BXcVY155SVbSf1BqCJwWPVL",
  "key6": "4WanvYmRvUFWuFRL1qDKQVtE6JZXERBGXSwcJFAnezdjXSYCHAZotSTAPYcKpDQn157NvaK5UUA6UYnSXt4f2hde",
  "key7": "3mCVtdV3JXcTWY8fiScXHRFgBjEzrTHMobfBGeup2z6Pjy7vARy2zoocmgiBbMi9QwyaSnRFSDhs6brEmcRfXPE7",
  "key8": "SJy5u3iurhobj48QDd5fWW1teeQuA7JfRoCcmGwqyvQaneMGkK3i1paXJK9LpLdzPWkikdBPWM1NRw6DAfMPsns",
  "key9": "4gUd6kjNrrVm4v46T9uE28AVABfFJHkefBJW3MTitZ825SjCGuEKvFSTSejuqRw6i4kbV36bNWt17MviJaikAUi",
  "key10": "5Zt7chBJrpUZP8evRKtsPzVNejKVNG5d3gzGXscQ6RDndVY1QmQssXybufBUegyp6hrq7vL9aYk7gRJSsnKZEBFF",
  "key11": "2WzNdfwkZ4pSXVh7hvvPphWi8qWzMYTp6wCNct6o796vhGsLcLf1F6HiJ5guphondMqNu1UnwSgqB1Nao54WMpeD",
  "key12": "4UeNN1jiLELTidPUwdpQuTpnrxYVTXqmJ6ii8xnHedhsXYED7qbCXiaqM2MhT8Cn2kSYHXno4QGQs3qdtLVcejft",
  "key13": "3jqstBcs6uckB4skdSPLyvDW4kMAj49A7toWDo1RkQPkzwcz1ZoVE3scYXYeHzgLLNzBxBgHv2pGZcKsKekTDQy4",
  "key14": "2FKwJ9abkJSiEKx4qn7RGP6FWEwVYrHvL7Gyy12JnAyTBd1zp5LiRUtUmhGsq3rGP4y5r4H4yKsKzpyv43Xa7Ns7",
  "key15": "4VAFT4fYA5FV1Wx7r4JE4mpjLz5PZNfrYEHdq88q5zUANkLSteAyx9xHtccingR85sshRcaMWBFBU2e9JPPZM2cg",
  "key16": "4tWFKkse6x1cYGhBv1TPzGewB7kMgG1VudbBhB6tD2RJq3DoJGgcokYhMkVs4ssR2Vdb2dGisvr87S8CXCe2tYdk",
  "key17": "39QqXhhhqjQg3N1wu9gKAwojMPNw5z3iwKg792VToWTFRpnMrLfHJXLVqgf1rUDHviKmCQ5cQ2KEWiGXVFtQGbq4",
  "key18": "3fPXCuHbPBEHdPB9rpKBQj5rZz3KsbNsqMhENfGH9D5Pq39NL93ox5FnFe6mfZQfkdPghq6NvzWLXdnregFCqctU",
  "key19": "42j2VTqU9swjq6we6nqU3xjvxQTxBSTDPWjkFpcJFgBky2RWGEtmDe92Bq5uiL6nqt9cNH4q9a9RAuTWrk8pYPpj",
  "key20": "2yM4rsWw478HrYTpUPgERCWHAkG941KdTUpTHtbmpMcaZScnXjxmHMPLK2KDvHb4tx24SSHVtCyMh4qoYjHAcHrp",
  "key21": "BmdceZVTYFpUoM5SfjHgeHdN6SP8e8Qv4e9SjSw2djD1VuqgF6k6adyZFkRaRqCeEXL5xnLHMPgfZkKHWyKAJeg",
  "key22": "3qJEQ9kazj7m3XLkeP5AHs9Syh7EagrDzvLzMuHQVyeQ1x69E6Tvr7C3FoVYXYdpNsyPWofSq2Qj1hmnUX9yx2tK",
  "key23": "5ZDsvtEYKuDy8D68HH2sWUssfnx2nj6NVYfPfDPsnS2bKjSetPGcuapKBLZLH7knLw6j77r4hj6C6VdEiudpxyih",
  "key24": "22fR7iAb7BQDF2bW74tgzYV9rQy4HvF8gbBpNtXfqBoXKsiYwgFk8Fg5oQanzfFqb1DWbVTTSJwrHfbcAcpMjwJd",
  "key25": "3HqZEKdJPT4KByxzHCz45qmffvnjgxz6g4qJY8tvTu86XHQEwnHQtRcs7rzUi4ZhZe1o2Kd6gxKERmewNyrFh2Z1",
  "key26": "4t2pkQCVrnWsUJBDmv6dv9Khsw3mveY8aKcjxw1aERuTUnii58Go2V9ZkCoKxq738DLr4T2Qo8Y8igjyDVpjBGQk",
  "key27": "2Yckrd6hAo7kGMeKTFEorUYn2LDJUYA99974joDGawcqeo5y2fprk2DTvcQDhqCXyGPCQHxbwctmzb5MkrmG9Y7x",
  "key28": "4pXN7mu7ao5dyZbtfv3AmJSTrCHX3PeqEs4cDZ9QAvSSJWWeGUbqZLXJoPSufj8usb4vA2QgYwGHwtoJa2xmZrsU",
  "key29": "3MddEVGDtrrrnVbKscDQTXEaToWt1Ywat4z3eoXbv45hs631Bo7We6FGNgbqWqTENqGgF13yoqEG9xWb1VaU7mD7",
  "key30": "gbRGUpC97dY2SiKTjbgXm9ESQq1J9K9rVCx1TWCvekveRDC1BMcRxXwx24yzUFjgZ7f8vJHrwCN8tk5cBDwNyJK",
  "key31": "aa4Dkjj47dh6a1esUDJHQ48xxqhu4hWN7agxw2LPF9DKnmgnBEZ99aDfiK3g7JqamR9gwtpotmR7MdSLcDT1KWo",
  "key32": "2q7BGBz8p4YbgqMJp93A93zVUSTtZsCEKU8CCfnB7SfcRzjrdE7ruzeG3Q4AhB5zTD9kp1wBZVh6FdDp4oezMCqZ",
  "key33": "4YfVdHaZoLeMgTHpLM8LbGt1547nEzqSNFvY8xXMeNgxTqQcPZ58tGyPwxBJ7XuiPA6m1rudYjmVHKUR3zb5BpkR",
  "key34": "5UffPZaXBqDeADGZR3YjWUVBn7aUKtATnP9JpXj68Y1UcVqZG7BaWdJ6sc5RqvE2B7uLSeJr7gBxd6LXu1BKv8oC",
  "key35": "3rmJNWC5K6XuzTboenxwDJFk1aM1tmULe3GwWUaT2FFCXMZDr4v2V26MXqkoLw1XK1rEWhzjLVuuLzAqk686pio8",
  "key36": "3LvmWDc9HUsjxsdXbewiU52LbPv8rVwibD8BQJ7CyDNGgCAodLJDTpMkrcHKGTA8U7xnyWXQMdDzU8PpDBUTU1Ee",
  "key37": "5R12UejUP9b3PEVn5XBkJoLd74srnJ9ZctqBXyiKckRBHiVRtpZ7TSWyvf2EAQqmdtKpthuCSyNDRoNJnZi4xqbu"
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
