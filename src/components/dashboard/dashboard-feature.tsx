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
    "39HHYbyxgJ7XVaZjH84qp6kXvS8jxPd3psHFzjDyvc4DPfQJf4dNF9mTohDcqpVUtCpFcPThaXLXxQ1ojDWUU6pj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LrQYGXY4UAU657SFR8LYGQQd2zBG7xi1wB5zSWTYQeFafvPi2zwd64JSnAxfP53SVAhTQgKperiuDNALEz3xQHf",
  "key1": "GaAbBsWFtJEm5N2FViSirFJnjn1JYkrE8BwvsGeADK8AKkfPNb3EaG3mrvStro6G9coBgorDxB5xcsRmoSy3X1z",
  "key2": "2PGCMLTpnHKQT5UqpSMnx6esfM3dhr7JpRjZ6k2EnkFsWsQXibTkqDZd1DKwL55V8KmG3DNzXTNQFsazY1FQ1bX5",
  "key3": "59SpMsD5eM3HyS7fRH7VxjAvGvzvxrc8geHAV2nx7XwL6q8bY7bkESGPTATs3M8LZBBAvtm5zADhy7N2KDjUPviE",
  "key4": "2YmuuhqhBv98uSiWeGW71dcz1ks4ve46BxTzxBfPxhDACrJ6E5hvpsbiQwY8ihCCiJCgGByaFPNkfN2sgz6DkoGC",
  "key5": "2YaduZbTU24FHp75gWjohxfYLuikUCczu51FWdLP33BZbdidnAZeD6JnNosf736PKxmCUXoQ1STi5xskRNSWZ96k",
  "key6": "5dX6vVjxZ8Gk39uARDzYt2eubcoX5gS3fJeQJxYeZTgVgsWR978uhWuLLXEewKi85aK9CDiSrrQz1Le9LYdRT9H2",
  "key7": "2htBiojLZB3XHpKPJJqt8U6UYtXBBP8YHiSgiLUf6Uqa2y4mgkaSpfjNwSWW1iMLcU74W5FVrgjyafpgmqtLnfjW",
  "key8": "2kXDkQEre6gV9JfNj1g6RtDRk4NM4fMDJt5BNAP8GYLwsbCdQ9GzEYChAbmLKYMLQwfKRVCzSYv82VdyWUWAaRnd",
  "key9": "3xAPNHpzKsutSmRpBnLB1kjhjWwvnPkGqJwLnADbYyYDYSHZFHsarHreCBCfXzckFBSDgtSb42T8mEqs1gZhNrXm",
  "key10": "64XxQobRnrpjUBZkmFLEugBkKbvdu2wkJ3g3gVeJ2d5ViEfykj1Awo6KsaRNgr6aYrxYcxC5qgQoauc8u2Qi8Dou",
  "key11": "2F3kdD7BJfVQrhmdBJZHirVXwxtehGvJu9K7MMZB9wcjvPrHWgAkxyuZP8wnZSgBQNuxa84WCJnamrLJ3xxyf6ty",
  "key12": "CMKX67jugfEYY78hAgKZP1kd16GQQWzvbJkRLTBTnHbbdpKDrUCZoQ3DYYsQYtQmcPsYsg1TTiCmiwWoNQx3gtw",
  "key13": "5YoUEmkac1XgU2dPEke72FftvuHKqohzZi6QJudPTw5obnMe6ghFzWs5zfBFSvoCUGPZtFaK7VRTmjJDnY6uP8Qa",
  "key14": "4HdQtKFjbgiAHmcz2Cmx4myNRiDiK3Bw22VYP9oQSzKkpRbPnC1CEE3GjbcgyH6AYUs2i4FHsG1WD8yLtXSe8evD",
  "key15": "48Q93PQsKSmwaFvHEdrgFMveLMiJGPQCDxPVV1cDv7pA32tncbBgqnScwb3W1NFj1msoe44hgLaqrNPYVTivSG7M",
  "key16": "4q5HL5gXR8UW6jYamHszUQ5kKf6qvayk4cSpXypAbNknpbm31zQXiJyvfk7HR4Sw3ZF4YPnA9n99ZDNedmJpD9E8",
  "key17": "2atwCy79GbkRDNYJrRq3ghK7KzRM9xCLwbPpJgSfA5zisCTnkj1SNt1PizLH1y7Jj4mJByv1LS1iSjrhRANZJjvH",
  "key18": "5L767pw8qYBi4kSt1D9S42bubUVtPy6DCqkydhpec8B6yxNpncAJcV1BgR3a71X7Xq5ghDErx2NAE1edpRt4pdx4",
  "key19": "3jCd4eRR3acaAi2DqgwndTmwheqy17gjGWVRjqyDfxHbK96MoFrs1CVknJYingzAm4T4r7q4wjEEMMT6w9ZrRRXj",
  "key20": "5NaumkmwkTM9jjXQvBVEputKUcRqdNMwZsQnMNZJNaYLVfowRBT55q8WgFnQihPaGj6BE5GZxnzoM87WtyE5mA35",
  "key21": "4msaxj7jnEwWaGdSgfxUKBqRhgR17HHtHNGyVimhsV6bgB9x7YF4Lx52qxf1DDNTGrDdFwo57GZ7Dkaj8GJTrDNE",
  "key22": "3HVpB2cSVTSZ837DjTdtFqiZ7gkux3rAEF8mMqvLQVheZewotWWyDv6smJWfhHnn5E8sptmiYoRXxPZjnhQX1FP2",
  "key23": "U8PYq1dscqF5Z2tjphHNak8qTCsYWPALvi3eW2JkCMyWw3m1UF2AcViQogdxZGWpHr5CnLriHEhLGxrSiiQCbbn",
  "key24": "AZtnCmc97dx5X4Xky1H8v5dT5RwPmkSrcfd7fhpN6URn6CEwYK8fyGxpC3RQNXc3uH5rfxwzEFsAUm9GGCoRtjF",
  "key25": "5Ft3aUWxXGxoYD1UGMwPt9hjgH7HDuvfi4jSr8tWyVEbPzxcfnCcxy6V3GNNRbhiARmis9hNboJaEqWK7BS8Z1wg",
  "key26": "3TZNNBShNDADnUujRKeax4XZgLmqUNfPeNf8fFNYCLHN4Tn3uW7oAcsZ4zR9ytML9XXwqvpJVvwx8jNxXTBrDawm",
  "key27": "3m5mc59HnAuNtcfDrjB8gimMwAK139sF9SZjCUyouX4184bTFmVnTuT75hLkGTCQjuVVRUoz5x835ZvtwUadpswF",
  "key28": "61P4pMcFr3g4oLGdCCzj1eBwhsyBi8FRXZ7B4Jbk2EfShjm3szX9eMkWZ2UEFQeDFiw1g9Z3zko6uaCcQCWphBcm",
  "key29": "26xAsjzD1jeFmWwyB2wPJhFXtZAX57X5PirBtYJE1B3TZBeTenGfh8CzbN65RRszF1ssZcYGgWyNMoWAdjJJhWqo",
  "key30": "4ZnzCXpU62vZXhBRbE5MXQV1pRdVkfAkyPDk2Qn3zXpu68NT6RBF2KYmmiRHRqfTwuYoLWT8jkyv7dTRH1ftrGGk",
  "key31": "5rNkv7Mpra1xTcLQfBMCgeSREiCzdhcCRE8YaftBYwYUEbfzTzRJFfgNstKCzcfikjCFE78sFseZLe58xqWrpMPg",
  "key32": "sMj72CKJfHuNMK7r1xSx3LxcXqeHufkeHrcToNbhpHHfakxh7ST72xxdWhgurvLPFJ4gtX3yoJSAZt2KRhXjSah",
  "key33": "4xXJjCUm3fWpHmNyHQ19cNUTgQyasDk7DaVmYmW3hpfJrQ8FeC5VWifPPNhXSUYLY732A8L1XFsbhUN3tNg6WcuX",
  "key34": "2LzSYHkuTsKhhMqU4eU6hx6imiibFUKAuCyV5HjXkbFvmX4ig3g7LprDYR73jQ76foLhaog3CF8GF3JJf6QL1ywe",
  "key35": "67YBjAeYqS3SDLbDpuHPrWCHWm7f6Gz94i9ekUGP3UpC2GHYy4cs9UAEFdkv4tuCLustvC5AZa8nv16tv9ZhpG3o"
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
