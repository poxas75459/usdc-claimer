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
    "4wcf3vEKEkN3sesoouLagoKW5NbZDWXnFxLweEjHznTKY9QaCuiPxhQndH8kPdYozcdY4d5UmXDs2HNjzkadmewP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EEmDsL8VK9gEQLJvhZMa1J53Hrh3GfH3X5RsBEVJQpFz4JheZbrxUCmQLQaJhe6Xtk5hZbZtJHjN63x3t8hYM5F",
  "key1": "5iWGbeL9spHjJkeFBLg9GQG2xedgF2md3vA5R6kUzA9D3rHXX1LLpskFmGkJuGxPwyYXQYht42PAGy7U1Gr3PPuU",
  "key2": "boUrmsqz2TsBkPtwUB358g3Z1RA4LcBCeh1HeF866xqDZ3LESMPTxPDDDEgSQ4TRZq9m5WYfzoZ6bNRZ4MgXUtf",
  "key3": "54YNRAxWxnrkJoCzUXe5DtT58bescQ8rzDrESoiJMmPMQ5XJzdTBBQ2U2v3KiPWtiEkyhrWbeFhMXo96eVCcWu2R",
  "key4": "3u8eV3QCGsV3Wpo3M55yga6KCVSfGuBbceGXF3G984qMcXZAHt25238SuT77Axg1LYNayMH7BPRCD7xk4iiozyap",
  "key5": "4wKXtkLhCQBN3MUQJRyWkCFLnmznRwUNdM7VzR9kuswJJjn5AX25jiH53t4sQMYnUEBQyn6DhEBTgdNrW5xDgSou",
  "key6": "2Py1iFYPqwPcxbUPVH9WLeYMRQUHFoSvnoUQ8hcj8Avv7kvdQjj442ia4iyhtyMEfsqJSbXaPVnogWZEaaPkt9HQ",
  "key7": "5nj3VSZRZV4pbNZb5vMNeHGExEA66xa5PhoyYsnyqwhh3YGQh4UpiAyjZAaUn7mjzA1hRzdeQkS3Ybs79xUZhSM",
  "key8": "4K3AhFrRQ2GWNyFN7Zg33PmDYYek9HjqBkyE9NZnfu6AUX5NCBwWxFRwFfNamKatmRMBTKJVmGV1KJLL7qmtHTBr",
  "key9": "45PZWtLztZttWbK72r3d5R2ihhNgZWNqweyd3gznEFPZA9FNdvcxaYput6N1fgbTGCn9fyVhCV7FQhpVzdn2xZiJ",
  "key10": "3ARqSmxSxwPqYtHkvbQajfH4TQLbYjdvTKKknjANK9Evfo6QfwYw8XponPfkdXe6tKAGK3dmPBMgkAoxFUUQig8M",
  "key11": "2wxNjUT6mmraqeqDSyPZ1SLzDxACrFkdYXsQeLcpEjjDbyv1BfwN31sxixMzKmzu3rz1LfhSkq5sbV5JFfsknfLb",
  "key12": "3c11sL1yx3cqENXGnDfLWTtecioNPfMdu8CaawB1iQq4unWk9S5SHJaMquZkZgrUTytCT7hguViSuV5YQ7sXDGbh",
  "key13": "5FdrU23dnBhMgSg3pN1Rw3UAjoTq4otHGe3n1G9dt9jEg5sw5cgkqqdqC3Yovsvtg8k2zbCH4Xqzs47HHpXbhMaA",
  "key14": "4RRytRGD1uUsMkyQCXLntc6Q6rXBCMT8uYcL2kCpGQGVnbRmR2iv9Y6xPVdjmCkC9w4xjQw6F8Udt71AtbLsfmMC",
  "key15": "ewVxGZTfYDbd4g3xzUwmbG59HrmycxraA579SFsbyTA1oDbwgg22qqSiabJDkd1nMui2CrJJxvSUkc8QjMmFkBe",
  "key16": "5QtPaztWzYQRAKX83GghDFuPZCK3G9Lt5EFiZkhkVhgrfPTtN53PyW9HgfqPPgFovxvybseRJsSASkkz1NHWp6tg",
  "key17": "k6LS5pXdBWQFXRFnTP1faHXpgWywK3gtoCxWcJU2NGAYzPvYe2BL7WVNLtHUBKTg4rbMGUFknXQCpD2rrW82ino",
  "key18": "4H4j7vXFJpAD18SqCuVVAko7SXpSJJS9NfWpSZQM1EG5f9MkF3EfuCBuQE3hstgdPG2JKyWF4kwQGyuN7hhSnb5q",
  "key19": "5yciT6xj16YrTjTa318esoiRjufs1WCAuYREz4Q1UhzchPgVtpWadLFu4WF6hQc14HzR12idTz51UtBAdjhDV1Fm",
  "key20": "5vLBZYvcGPdPqMzgSmb9zy9743wqNVhbxCmTGKj3vaei5NQV3cxWWPAAXdTvH5xGKsf4UhYmNH1mobRzEdr9TTpe",
  "key21": "nTqQaSv19XxMhrNrTMeUqLxmhB9PuZ4S7KQawBSJacxZFN7YPujuQ7zAZMo1jAFzuSxGMeQLxm6Joz1VVGR7xwQ",
  "key22": "25EzixBJhpzDha6CkeBLUK1FEGFJ3jeCaKfRjvfAqyhfUxojNnJTxQX1NG7FtaGxLy7orEnkarDyXrCVj6NeW2rG",
  "key23": "63yTkdD39tVzaAd2E6jCCLfhFtw97Sp2vdApgMQWzJ5wSxYA1wpod72Xy2gRMGLLfZYwgpZyFu3XqAGo39CDggQ3",
  "key24": "f8bzj8pv6zXuDvkvA7RMj6CTftFfpgDC8m5tSDRvzQ39sMh7vFbcVanB75oPkwd45CTLfDiLAQgynGJjZEcxNF9",
  "key25": "5G7zKDzrSQ5nUHj4uoqe44eXEor4YtY1YtsKdouXeRDptgnr5LMrSpRXxHkx46hdutng1H8ndH8f8Feo916KBpso",
  "key26": "CQQs1JFL6nFfX1SerXEqpyksX2nppMxcwoXeNVX3QXJqf42tBHu6ajNPLBMDFVkYrzoGLiVZr476s4rQUvbie7C",
  "key27": "62WgJ9AjQMJ3VFJDUVo55gUZRXpTQX7QdEwFYDLJHq6Btsww9ZEyhsXQx3PTU6RTBXnQMekn4TMoV1ZVuKmBtKpw",
  "key28": "4x43VRy7CwVj1NZzA8YAE6Bg6AQGQvBKNPwxosLE8vxjhooUTt1vt2PZYopNqHdDqoArdZWaaBtDqG26YncBB9XC",
  "key29": "4qe8JbwMFRhHyJEnUrTkhmmUJeJ1aToQ4emM6UTNJvLzJEUPCWqD1uQBTk4tXKwYhKztGQXAwZcv3siENfkimWzn",
  "key30": "2jhVayuKXnSAECCndKuJU5SL9VthGGTMyGEF2ztq2p9zDsQcnfwGbGcP5xTy3UgU4DY98LWdKPczkWameGz2tQCY"
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
