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
    "32hG5VnUGk7o4Ucsv31cE3A4uxxJQWR7gP19jxBxaWhN6sVhxbeqp95SDtuugQEWgLerwYY8PRLAvk6qRFFjPQuH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fqx2wKEKcKLUP9CQzFvUL6e6up3icsh5aJNWBzW6zQRNqztN4xhuGfHERGYB7sEKpuwyDmqGPUTSL8CeJ4VM2aS",
  "key1": "3XBB7EQb5Nf7UacdwLXcNR1LTMYpWxeKeAeV1F9LRoam6DgqZagxN4ghtDxCasAMDCp1mpHp6rPHV7XavJRqETuD",
  "key2": "2aywXPTAXrjMQCAsdsfGWceEUu4XCXkjT638gP7JZvdwFibpnumkDLLQkZmJXCJji7nvHk6jMdw8iXni3fWNRAfu",
  "key3": "5u9uf3XDMavLw5nFvZwjjDAYXouAr1Mxrbho3SoA5SUoAPv3ZGMUEbUCFoV7Z4y9oRwe84k1zwxeyKcuFsCz2Eu1",
  "key4": "34T3KXiKSCSaHhBDXwtv3M2XWenCvvgMA1BHvh4KJtq1NebYYjU2eYVFCuzewiyZGmEL497CKAfhYTjQupYt9tPP",
  "key5": "mzg8SD2E4iFSNi4bduMFESJNQW9h6AbY9XM9fBHMoJnyAJACTDqovtMM6CLJmofy5tmAjTcrKswo3nFZbimWQtS",
  "key6": "2zTjzFNDmC8GcYveML5e5JPwABMJVb5g9Z2zELCga9JNnzHq8jWxymugxJRYD2CRQY239wRJgYzXRBmDA1L2SRZ8",
  "key7": "2J5KrmSNmU8fm2MeG6AUZRprjH4XFTQwdzCQqnJwQfrthi2fu8JoL5zNX9vr79anbqfgtq7T14kbSZQSvCvRyqLS",
  "key8": "asc5cvt4YQ4qmq2AZHry47XgAJi9yGwKmhy32ijtRRn2oLYw11DcnwDvikaNxrazaarZbPeCtt49SWGd6o7ZNrq",
  "key9": "4UW2hSRFnJjgA1gRNkVZ7tcGZg9fMEAbExPXghfvEYoPw9mHXPxSCxiA6vY6jg85iQ1mmeymo86uS7ACk2ATTYkM",
  "key10": "2H3Jx8EiYbdqZi2pwZ5F1N1k5t4C78ap3iC4hVx7rmfxGnyEipC7X6DdkBGMaGv6NmL9ERuSF8ZgftQLfCmYFbcd",
  "key11": "4bw6m1tzaeA9WzdREJhgNwdbgFLyUgSoXtszEck4vAP4fjEoRgYqzCMWC86ZLvx6uca2XhzLhkHrEEPvew1CeSnz",
  "key12": "2YJDgipQdJzVJoBhg5H2Znm6RbeHX75MTAh8r3rfrCohg3ws9mNCLXM91TxSG2gepjvvGdJcxwoMofYfVYgcSB8m",
  "key13": "3qyTzqBg3yQ5wH7P2SnMvrV6NSBPf1tzVUTciHb7yCxkNWVHBBj9K3hCRsjMQUGbsb4gLiTNPSmyDWdnwQeqoyHv",
  "key14": "bpxt32AnzCih5oQTYNwWd1ugBGKaSYEDJZncdbLFMUFst9Zqtfse1A2sDkMo5AYADQgUVHy1a1aXwYZ5ao6TPp7",
  "key15": "2f9cYDv14FSuZhYR2zgFqUgnt4VBcQhoDaxSapwvu6FSn4DqAy5sWMnSycHmBMphcPdr5JxVhvNLeRqJbYfawq4q",
  "key16": "sWp7tfqyidhiVFyS9YBwsDZV5eMRvbjMs1U4mVyg7fEakPMU8hK8gnYmRPX13rHSNjcbyWsqp9Rk3QHvXJsRdzb",
  "key17": "KHWBeD4fbTXSJJRP7wSimhTpEPtDASc29SJhbp9uYDBzTxCCehkV6VoVB5e5esAEJgssKmgrQsgJ31WwVuRxtQr",
  "key18": "dFqnd4o9uw18fHj5LyGZo2x3jZN9RghinHxgGh6MUNLGmiYziZs9vyXjyvnTFFBLQ8DL2GeK7TcXmzLTfRoAtyT",
  "key19": "3X7hKfp9DCshrNH98r2bBdorgnfxRDnnnicKodMeKbqrVgXVgk74DDNmrSCcbSSc15hkCQaJ3QYS3M2NRNK4UMJg",
  "key20": "4vH88TLu2KSwK4QMFVdxSwxjbDqjgkCkgJMNmvgJASEiWZLsbaxjhjEudrnMakoKQduamnRxpykVkPv2D8CAse1G",
  "key21": "58VzDRC2Mb3WMYwoikWpMctVprZ2VyEe5NwPTtYSmoMazKMHDEPiJ7TVrvrVQC6V6HL95YKWxkniXZjvFnJSSqnG",
  "key22": "4srNUzGXW8nuRZ9YdSrSoENFnr6sQmyGygcLGfaRY4zzEbHtAJofPrifRxGVMb6aRp9k3kcH7JXrkEauFJyMdwTL",
  "key23": "stjWDBTiQVLFtVk5H1SzMbtM7gYACyY1YuQExTyS8MuVWwSabMoBqopQXHkPDbf87tr7BQNCw5v3ncc6U44aKGu",
  "key24": "5cpgSmuc1RJHi77dZTkpe6BCgkXrdYXBeqkg6irRcJBvqouENEubsvsbFbw7hh37uiyNc3A46dKSgmCATjh1egQp",
  "key25": "4hJRbM2TP1WkgqhiNidqytfk2xyJmdKZAb9pPzsLnx7opAnpjpDLN8MF79qeAfLt44mTbuM2RTZCMwM5b7aEPK8C",
  "key26": "zFjGjagkVQs6fUCfXwVV1CDgj4xahmRG4t5jb4t2YdSZgSxEzFUmUPZ71moaU2hP5mam3RtfHke7annB2xH7Yq3",
  "key27": "3J1X8AyGL4dF3oWUZWjTu7YAhjUgLGUNSCQ31Rgp4gRbsHu1jTMgDroaApJriL7WCSe3dNeFwLE8AjHA4iHyjxv2",
  "key28": "3rFdGfKG1WPbnC39iZuD4A6e3F6ptCxJj6W2hh3wGdmgUhHgzB8UeuWfDTzWxfnnosDhmQHawZDjiRXhWGfaws1e",
  "key29": "29fSdkeXPcSAUrs5BVS2VoPFMiWrkCQwh2yg7ratBCDiG2RAWBPyee5eWGuTq8LTHDzSAc4sRYiUnxysTskpVA6p",
  "key30": "4AMP9hPp74PqbdTAiAC8g6n2HS2LMwvm7cJbNku1o9FtUACgiCEZTvVJ4MMBEYBG3KjUtiwqmfekkCMde8s73rbJ",
  "key31": "21pnrRpYZoo5z966Y2JmutiXY9rZvmzgCGhUVym8EbAqLTz84GNhscWFbDZM3KE3YaVSYZrSAQGy8JDjo8b1191T",
  "key32": "ynRFySnfPimwN43BD4nA1x4T1EzBQ62Nk5hAYyuDD16xpwTnXdczbGXbyZc6RPmN6G3V67HzPjxjEuk1wK9fzeG",
  "key33": "R39WiU99Xh7J4AXvMsHeHS2H1dWW2XcZ9TcULGe3eiJ7EAJQh36ZWKM6t28rEYiX6oV1uD3rJd8cCuj7Qx4HCw9",
  "key34": "412LKDCXBrMQe5YQsyCvxStYzkiJK7JWCrMzz1VwiG46BFcifJx4hrbCFhyDkxaZd7PqXHR3DMEYx1Zizz1xNtE5",
  "key35": "5ZfT19iw9sB5x5H4tJLHtzuMotiw9DD3TzTDPJU3nawPcYUzuV24QYSZL8LmTCf9Sw7CvtwEKnmWeB15QJaJTvfv",
  "key36": "2JGK23DwxpsskSWB9JeyWdVF27wvnFP8JJbaTGmcguqT3MTcUfRY17p5FYRVngBchrUxVhCc7ZGdawmyjmv74huE",
  "key37": "arnUNqZd8AT1Q7xCAc2tpSMhdQ7dC6FwYzhUzvLoqbZYEerTygAUnZcuqnmcuGHkECSeWRtMmbhuW8UctJ3ThNs",
  "key38": "3hMqvWe9Tm5ss7HjggJry7sprsgeiAHBr88o4Phg1r6hZHomxbSvvtwX1gmcHvAvyRTqTtZjMLm9egvBwfzyBVxa"
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
