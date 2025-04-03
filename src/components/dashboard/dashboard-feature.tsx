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
    "3r5N3XVMeNaaA7VvVfujkEtUXqnfGKRThc9PaSFUXTktxwNmWArWpmJJs1aV7acCxKbFRojsAke4uqy1ohaMUGyh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YMSnzkWhe3AoyTQtC2KxhDXsh4DVoopBBwHnXTZPq633Ea43LxPNfAcfT3SkQSR5zWhib43V9DzGrKWdFhcukhi",
  "key1": "676917cZNPvHLtueUqrV1PZKu2PvtQp6SWQnW1GAcY7JTYfHbYQrBonfXcwtipvtcUNZjb6XsYYpxXVfLYBcqzbB",
  "key2": "5ekwPR6vGsck8HdSKy7iq9XkJ5oYSALnAezPxJ7GzUFbDwnRPQ3tvVVTJRBMcbVNCEsndzbuvRgccHMVTZm121s4",
  "key3": "34WNvo4Z4KearWNhi9aEkz9WXw8pk1wVP9UPPfam3aV4KfFutP51LU9x2VH46DFtSpDboHTm97MHwB4fp8kgYMr9",
  "key4": "2HKXKDNJFeqvjbqQdJfnS6suEadJ3kA3qCQqudPrmGxHgQ3Dxe4kJ78hEWsUfeL3aWwjFw98XwcuTDTt99nZwJWM",
  "key5": "3jb8f6QehuVphDuiUsyPCcDj4vbAf1XXhP6vtKSQ4m79o9HrjCP8gXv2JhjYLq4EfhM6UfHbsZ9VXgYsHkE2YhHe",
  "key6": "64wMs6rdxHdgrT429x25bZNr4P3pHXunYwD4YMM7BXpSRPbThh5rRJq2YnqHnpeAcEU6sAcGg4AfEB2pAgdtz4SX",
  "key7": "4SbLSVaY7JUCszropR45S4QKoK2QzNNbHVRtzVrNgv8y89SRUz9aCqXxw4jGBB5TgtgDVHVcBKZJCNBh6Zey8EPG",
  "key8": "2BoPfayC38GMeTK2a2nR48wVRKZoK9s6kd3ksAq4Bvmssi1mkPyfbAcQ1Qkm3gcTK9jweitgGffbQN1QENfoBu9z",
  "key9": "ZeKzghEMdfemVHAyyYkcm4b7sSWZJHXEQP5LjgfUqWxD5BhFz8qovnBfrzgtC5aLVqYyKEUpZJHdMesw4e4L67Q",
  "key10": "emF54dMZBorE287VB9CnXghYmnHrFafEjKhCUyvo7TmJjFQsH5PGtzgcs6Q5MVfiRq5nDBFDibxK9M6sH5c9ycy",
  "key11": "445tNw93DfXhhG7CRKZGfaqAKAofoWwx8umcgyMM8EaJASQDaFXeGPBaiwNAtta4dpdRRho4icP2VsPCzuryNzTR",
  "key12": "5mWNmVHuQkgWyQRAATLtavDkUfYSafcWXdWwMqPBS4UvNSGGt54SgNAM7tUMp7Yb3sZ27t84jjmfH2U6nwuugvPw",
  "key13": "3x93uMW6oRVvGUzLFMzro1JUMhRPfrxmQfBGLRzx3UYST5h5oq7S57K5Q1pgnAc3GTQqmq4bobR1qf7xavTdoovA",
  "key14": "593gGXr1sPSiwT7msxFhuDwoRBoign8TwtUBSQ3ms9y34qNv6fCGT3vYWyhu1i41oE4tdKC7e9VM7GvRMK6caURQ",
  "key15": "5VqFP7UwWWMNf1soSxMEAEgkkPSshxGRmyUEZaxgKAMgyefBor7hMokvu2xScsYSKXJivyQAbFb2fD2dUSxcptwU",
  "key16": "3VjaZgTmH2FtitpX26mepjeg5nGNG74gXLhhVyKZ2p5JLWQpVeAYqv15sRvHinB8pjaQjbgf8vfYyqup7vYEPBU5",
  "key17": "324kCqr69fG72NxaNvuuqWuzrQEkFPwWfgcxmkqPR4Hxy7vPu5pmigGctnSNCXm3r9nufTFrxBxrN1CnJLyyKj4j",
  "key18": "2Bgznj9o5gvnwRFzCpueBjxfdg4DkqCd8PY4dBcvgFygzVJMcLPa2tS7yXuAzUEs9E4t8UJoT3ViEoQago9Kv5rN",
  "key19": "3X5wPX5xNM7Bk5gQJ67BAv8cjFAkaPuxSQeEnbpfh6G49C7ACQ2AxLdbdHHqrTpbg5QNvX7hW4eQjJ7npHiF1aWo",
  "key20": "4PWboYJDvfTSSx7Lo62WSGqDZkw9BZN3xnUwwXAx9a7tzh9F7X9RzUgyQBLfrY37X46yAV1cR8MgtpSTzNvHsKZJ",
  "key21": "cKz775G7jRwHUYnLdzMTR6ZKH8T9w81WBN36oE25eA2iDSah1sqbTYQVtLfbPrTFDan9qrK5HyzsKTTsSHMrDA8",
  "key22": "4fEZCeJAhuM9Vb1CF8nAhLvJbs3JTghFFkFQvoPrBVtP4pXD7ZJH5Ajq8MzBMHyBi6pbqmTRyEcyeAvQbchZ7B1W",
  "key23": "4Ld9A9e76ySHCjbh511cQe75iGYzq1Yk1NaPWF4f9z19HN18DEAfEqjowe8RPZWc3L9oiDEJWqxaDH48QH7hkyUD",
  "key24": "48zr1rUbtmDHNSWFiBCE6ZqqBF5rXcTQfg5eAjnmjytB2Fk7ciUqqHeoXmLvH8DeuGT7cQKash1Q3Z2J5C8SPbke",
  "key25": "2DtaX4uDtjYRqfkvzTt38QdAYvPjTQEmiZb2tyFRnvRpWwY3WWTnbU5DbGUqjSuicY261V3Ph8v3RH2iucShKGS7",
  "key26": "bMdwHmuMdD2kwPiaWKfXniRk7Ee9Hnx46SP6Tqa8kT83qpuCeDLQjM7vXq4fKQ1v2tZTLigy8Ge99n6Ep1mXWCA",
  "key27": "42gDqqN8VWt98fftPNTTwkq8MXiCwuf1ZGNkQWMyMZuco25vyG14fTyVaD7aPEU3NnCSFg9PqQV8AzQvdukNpDW2",
  "key28": "3FjwTruPQtevwYvjCDYuDiYVWepzPPp7Q1Tz8552ndSy7HmR2EECHKyGrai3HnbopBDSze9fiKTVnFHmyTs2Y3J6",
  "key29": "4AFW2NYqLUzubgxCNQSkH7Cc2pVzHUwBJg3KdYN6n7eCtMuXACM5qNBdJRGDGWr5vmX8G34fDPELop1Ns2gwHWSs",
  "key30": "5Dz2amDvKdzZUoCE2kquhuAafepEpGZ9ztzSwbtM6XTyApgegDvq9ur9nqox3iRRTKynLg2WjGVunt9NhFc6DGYR",
  "key31": "w5EFSF8Vprnb8RJAgCo1tLEsCXicHpBwkoUbdUFsRKB3ijuQQrH6DoTokU1RmHBrxGkPsLJRj8Z1TBeZubvcrdD",
  "key32": "2NQ45JoH2Jk92tr3ur3TfRHzF4VBf8kJC2Kh3WYDt5ap18MdAbgDcjpZqCGDvNwj9nmF9XMsJd3buFtCZh112Scw",
  "key33": "3mMWMcyVULUQ7nmtgTAsKbW5D5rDtxAAAmiD5z5NSmP5fiHsEERL2oJ7N2SCYGUwAra1UiXxHEjb5zgdsitpYU3k"
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
