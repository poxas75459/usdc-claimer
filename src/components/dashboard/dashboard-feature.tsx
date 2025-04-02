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
    "qKQ4acZA5Eak5AGsqoMtdTmFDrvLE2Jp2GxaKrEtr7ND6raWudr8Z765pAQRWVbsUqPjoWx96tzP37CzA5D5GEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JFKWDWxJfn7Dq9bjBxhxt2u9a8KKo8ky91DCqRWwf9MC72Y542N1w6BqW7wS38Aac2jvioW2GXJZ1MkC3h7U3QM",
  "key1": "4Ku6G4tNwPbHHt5yycmCKN6C3wQuyvkENqKN7RoRtfMzfCUjbW3tfwJmi6679TTLtwdit3ZxoP9E7p1PXPzRyauM",
  "key2": "3ovCfWibaYrco9PuM8JarLL8Mft9VgvJa2Kp6tvrKms4nNWWD8hYPkP1Q1bQP6otFjdNbN6RVQLeD259PxERX9yc",
  "key3": "5YfJmGKUJ9PEHLwr9z44dhymffYWSyf2JK8fqxzoc5ejUBW2zwNDPXQg2aoJfMRCuoVPg5TCgSd8XpjZU58begRY",
  "key4": "rnuoMEVnHQhvMXkJQWDkH5izA5qrCZncq6vF7DX7zAynE2Xqab1PVr9EweiMhXG42yRL1Q1ZCBGXn5jXu7ZZyNL",
  "key5": "5vJEtUV2mVmv4vCBYgFYmDrRcFcoq68fzy2w3xE1Ucgp4bhwnHgGBBVQcpmoeEN8BdRhdPyT3BR4aH1Gm7Ys7Wat",
  "key6": "5ZFHQE57iYZ3Ki6A4U8Ey2FdpFyTUQimAK9bSZ5TBQaa9QPu4sNbUKhCHDqQGCHqvnGuGiL78FzWHhanJrqaF6eh",
  "key7": "3ZGGRuRM5sPhmsCdZvfNGe3Pnix2Mj83qXb9zARfvZhYHmJAXyUnkuuiozpWn9zMwR5res8ub1H9HJmyZEQ5MFYT",
  "key8": "2mUeBJq9iEuND1Bjt6ggKUnZ8thupiRbpKUpfbSzgciqyD16FdKCM79rkzVaLYhTWAKwx2XNYX4FxDdWHytUZZ73",
  "key9": "2inyL7YFMJzaf5rS3AxtbouhTL9H5mukkyyzzRGfewJ4vftVJ3Mxqw4mZAuUgMpCCxCoKVc4Mma4pkBmq1by1cCA",
  "key10": "3sE5r9c68Lk6F5wXNt7iLGZfqXLUobsnYduF7tHZJNVtAdfeA8v4XgHMUw33kndgbH9iT7jEkunuwfQxkLEUdB1H",
  "key11": "5LPGp6qWTYRUYS21WxLL1bpZUvDPDaj3F7AqVTS5uV8i3c6eCit4RS8cuxtwDpKX5KEyv4ypCijTM4hA8c1pyM1t",
  "key12": "anJjBdzyVnWV3qfNGo9C2xpd3merGYKQeZFpy79xnvhd7uPcuPWT1nBcs3aASGVSBMSx5kfp8cMEfjVBwPv3Pyg",
  "key13": "rUYcPx1puZbhozkdQ9bUFNPfwMMAqaua84CaHmuQ2BCeZm5RG5AGxaXajNc9ebuTWzg2D7usSBwu2xYednDPo8u",
  "key14": "5Juk337EtReuiY8KC1iVFXrN6rXhVsyYozkpRuPQx6ZsF5zvhg99W6JSNfVfEiQvcXSQbuT5QRfxpheGtt5hGLHg",
  "key15": "5jfZ5pRUBT5iMtPj7Qh9ZkPneo5ChUtk9BqjQyQ29D931ZfbyFLgixt4cAySvf8r9M1A3bgSLeP9bJeTD3W3kNiL",
  "key16": "2rHNfNr9nCiPQAJuV8wY51QgXJqF5GcJVSg1gCKUcLpfyM1RQn6Q1nVvPTtZLW5f7MdQjST2FVJkQPnTorGhdD4w",
  "key17": "47UUsBqSbQGraaaKaHEDKEsnQxQ3NwXPtHxEfry6wKCdBNBy8LV12WvDRM2iKnbvuQZ1uJcbFqCxaZwL1SjD983F",
  "key18": "4Jp3bw55tjHsxhHoE8QifuM6Sp8NgwGGd69D8D4fHfucwsFVCSbihF1PB6bWoZrfBisJkgSJh7ERLyCsSTEjeSR9",
  "key19": "39o9L4jb9jUEsQm9efzMiDTXdvvKFUKFBf7VqVpt4UzzvaM5ScmYxkmJUb8rrVQzcGzzBwZ6HjMjpG9XM64cJt58",
  "key20": "4Gt81gjsACNYMuoqH4uoXVWXA3vjHutrq3a355JDhft8CiwyMYNRkJ5bU5XjQN1MysBSZGhGs7BMaGZGVkBdQQVA",
  "key21": "4DA4nAyQeKaVD96rzCpnXhNBLtKg2hAHshcWyfhG1iGVBr5JNLmjhXRgmrx4hXGquULzxAEQgGKEXRADQ9Mi64Qa",
  "key22": "KzQY6rtN7h8aUz3xHC2ePq2QRFShvkmQS9URDmDbvuMPDRF7d3zq8vwGTpaBbQBJB1Htc8hNR1GzV9EWKCygBhW",
  "key23": "4UqFyZ86deWjKzqJQ38f8q8ue12iynmnjb6F8QHuMHHifUxku6APA9bZwodpxvr9m8RryaVQuwnpJRbL88nVzxxp",
  "key24": "55Jd3tHRUyz9TsB8mf5V1y9SPq5tYvCQFLWR8TDd3dcUtW2pJ3kFoiyDdMkwtfjtvNa7tpYe4jdAkRRFmEPRduTz"
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
