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
    "59QyeSiGZ19SiTvKefHyVnWzhNprjrJRRhC5wyichWmke6Ugr7jWpUxnYq8Cdz6ASDtxYQzmuurymTChNN7rt2AU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JJwoT76vwcwr8Atq9Q6zCBkntGSEKQ13K74sGmN4SpBMjKXYHpUMY83wWBjXXd5wWpV8jEN7DVfiTYzZhngpD7g",
  "key1": "2tJ86mnNjB3ZDuG6zksKv9yAgai9CJQBEwjRzdEkJL3H2VjzYG4HEXFnrguvonPBa8pD6DCPKFXmUmbkvTJpnnnC",
  "key2": "5sAMeXJtxMegcUDWfeJ7KTAKogT5fdKHcSRxjCLuVmBbbcvFw3xB8dnYomkk7bgXjz6Wm8WVtTNWs29K8b3j2LnG",
  "key3": "3w5hurR7ZsL1NhLsFWixEGkPHTNSAyv7RZfDMD5EzcpCazRa3TbACd2oeT1GQotQpbTJevtBEQViR2sDsEDSh8j4",
  "key4": "22umAxCFsUEzP7TCboxjkkrLk69fSQEHzhXbvPAFyAwu9J8Wpu1bt89aAkR5qwkNufC339tg1PFcVMHV5DirZjN5",
  "key5": "39mz8Hfagqi2DT9YXoaXUosdDYihU6bFUdGNVps85EGSsPveQ79uJGQsgKYkF71Jks2oMZEvTDC28Cuapeui2uAa",
  "key6": "65zsuLxpjbTd6czwuqfaSrYd5mnNu363feUbdiNXGdbZuLSRpYHfNXxDP1QzFohBdKe6mXSDfZY6jJsF8hhbEnBm",
  "key7": "4zH55Xtcf8AjrtY67nt71hhevvYB4BP6TuQEHLbWWrKAi8ugqDqkwL4TC5j27GyQoHNiJPL4gfZLs99XmmJ5q9HL",
  "key8": "3vqU2o4vYP3RRLmuqYWxd3Vw1S41aQ2BPvnSHQJuENFwMtYA1S4oJK75WG8j2yvtUt6PXR7muz1U6ygz4oNXX9pA",
  "key9": "2Y2QSaMEFa7PhW3X3oGqKEwvto1VBpDMZM6vLK1c4pDSKTAoG4Z5bQVg4JbX9ZsosSEUDLMcY6Kya2tcM3rTh6zZ",
  "key10": "5HpuLU6qWsLo4asARd7jkS7q6FFsDUrZ838nVBCwN4nhDMnvHeC1zY7KXgPE5dPVqVRjuJRRaymffsmKg6jTSM3s",
  "key11": "2ytFDiKAhvfhqvFNUKb2ULSDuEwBnNvziKXJWQf3Huw8X8garBPdtGoPh5Tme8yfTawsfqwBxeGpFzVSqesXn6ux",
  "key12": "RKwRXJKf14NBUdtRBaGW7reHSxGMLyUkpERJBJ3y2JZxh2xgGvoxELwafya56i3S35o5Eo9uqieue9dnYiDvyJa",
  "key13": "3wmqnMB8fzdVgGWZM5QDTK51LgjFZoUCc6ZbXte2g8tUuZomeAARp4GRo1KQ9A8WxRsjpAhwATN7vaGZgHZrdmB1",
  "key14": "5y7xccqYUKe7fxsTrW11mC6jkC6mqVFTfcKuJzSMafWCno8qBC1wWgb6AvAyyU4E3j3TrLDoW8Z66w2QgH7kLtrk",
  "key15": "GJe1wrKTuVEcb1X99GZuBJPn3rphnajYHpXKF9JCaZNyVrdLUQSfgau8D1aPWLZNL6dRiovNqKG2VmRe2xfQL3w",
  "key16": "59QRHmx2iV1YS88p2AgeUTyW7psEhTAxieGUfeBybMyAVLcoqMU2NJJoiHF9fTyEUY5LbvJtxB9e3urfYUhNhqxE",
  "key17": "593qptoaxWwufmA6n4K97Efg37gvANXBLBG3VdoQEX3Wp5mKVJnLNwGCzaa88E4RtjDf4cbqeAKM7zBVwNqTF2BE",
  "key18": "5KCAPZjLtuMP9oCjZKG5Bza7aj8hvVN6jrNRbKYmQhvdtxQmnHK8cu5zFtE93rZ7vb1q5ysn9RxJ8AYAbGWobkiK",
  "key19": "5AGPf4AW1mV8r8SMrtp4q8y98MwFdcdQPMKaEiKHsy9SKaFJooU258nLkCqJAqiW52jWTrtv8Cs6udAUtpUmtEyT",
  "key20": "3G8mdxeykbS6TESBYerQiTFwurGvz1XvDYzhhLbsduTm1dRHzpB3Zsg43opRMAkntZwzSHb25dDjoTwQXtY2ymvK",
  "key21": "2UctCYNinhUhZ5xSepDyr27guFXfCropqkZkx7GjW2mAa24fggqekn2jHVJmrSzLwYdveKWzLZ2tYBJuP7xspRh8",
  "key22": "4s9cp2JXYM2DYys5DYFX17GksBNrxBBQdQaTSAAuP9cCo4RC1pYLjJSZZsrWiDvsffatxmGcmb4wpQhsTyYizrct",
  "key23": "2FGLfPLZcundQJ63optxRYWMKH26WwKStNnZSS5J4TGbktf1yTRXDQRKcgd8Ks1GepJHbVRB5WQ6cpsnvnWc3xqx",
  "key24": "UXguib7PNa5hPSBfKKWFpBp7qtfwYUnS6t6zqqKcdehWd9GkXP2yWtHt5Fdadv9WXuSW7ymw9iar4eXuoX5KuhL",
  "key25": "2KraMxHDUmphm7t4bDoByomUYgN23zgifCKgMhSPK3EVPT4mnVmyvBYmvumDWxYR4oaeQgKnagzc8Vj4o2tU5WR9",
  "key26": "65WX5Z5AgEXh7m62dAhxpoRVTjKrQ7PpEgqWBwAsumHKV1gmqx2P8WKDo5PxRw9C4rherUKmEMKn4aqgWyuXFmH6",
  "key27": "NgyavC7D3LaJedsKhkdiGD9QM8tb4uKyJ4UJQUnYYgiKwKMMwLDwqqMkJAtcqToX6gw2BcpmZgH16ESbV1BR6vJ",
  "key28": "232n7hk3PYXoCqNxqN6dDfj3MtLtc5xXZ9bm1DCmnh1NaJiwa5UT8w8xp7sRnm8Dgn2K75i7wXfXJEzfbDmkpRxM",
  "key29": "5b8cD2mwGEqahaZQYihEzJFhnDSj4UcoLnPfnLHVLyGh4pNt1fQNC7cxVULPqubatjzegJcpbr8XWoMdLDiKjNuz",
  "key30": "46NVkjV9CndNHhqrk1mungQTZPsK31T247whhJusdd42np9EPeQvJ7nsenRo1GrhZQRZHjVLweEfZpBSmnmDWSab",
  "key31": "66sASCHWNX7s5iipe78vRhzG1BTVn89jVtx1SE57KitdEmEd5rKPqo1m7QcvcH91qAZW1Gbc6boo1C1zLLpBxBUM",
  "key32": "3oAcqwxsTFWaz7we84wtWdYQBFzzLKDfPW2ktTUpraxY49JR6Pz6aLP3twSeejZv2ZzuW1M6eMhyujngY1xEEL96",
  "key33": "vygC9KnhjDNcifGNWzna8aBAHfSFFBVC41bc337R5VAgiKvVUTc7tXMYP6narPasQxzVnCziLFtwGT7eP64suq7",
  "key34": "4WXe2cCqrRuEPKNCnVhA8sYytE2oCyhVvT3s4JcWyuojPHUKaUjuun6eMdC2y8uPA49tTBKvGxVww3BD3dzLmcf5",
  "key35": "4SPAdnGFZHpVGPeAmogZPTcqtSV9wz2y6QAj5b1tT5AtxRR2baZUPY81hPXb6ttC6BWcZhAferzJsKufimTgbDeK"
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
