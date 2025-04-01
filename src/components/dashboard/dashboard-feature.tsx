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
    "4T4k5jdFhaMeUuP5cZZdppdBcyrNWvsyyXup6myAWLFM95AFbu5vA2H2PRSf7G2SL6pfxvfHsQ7ubDbiEHXfvUK3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rSPYxLGZqqF9WsmTuQARrKfZiEirKWqQCCL7XdNo33kMxLuy7G1oy8C42HcxQv1xnzkRkWT75ERxBN2rdNPSPCp",
  "key1": "4Ynt5sEGWC5WM8KW4aKWyZSrk4PJjhfzfRjSoUaJJZa98jA65DJ1VTxmJVucGsB7BT2s7J5wjPrkFHFHGBR7EjmV",
  "key2": "4hGPaJoG3uPLiQtmSrMiSj7JPgfqGj1F2qCB42Z3rQ9LXCpmu2arPdbbz39u24KU6FRbfVhV71F6ZYyJYJqnc9kB",
  "key3": "ZDgPadCK2So6ZNvik5WWxdqYQ4XKbeX7cpoUzaETL5hPSvvcjsJRRPyYUikPCtVpSNwLErDaLdm3tYsTVy1ADwq",
  "key4": "2VLzbiQ1kZmkBEHHphVJc3WWdVyrqmi3ovF3ANTmkZK7fzGA83Ne31a7PHb5FUW3ZsqFQ4M3JP1X9vaB2VGdz4Rw",
  "key5": "Hp6wN3LDYkodMZUv8aKEFBoGgR8apMKEwrNMHmd1TgKywvkdauShFG2L9eXSvvQTmG38VfLuTRtCWCx1jz3y2S2",
  "key6": "5qjaC1nBLwed3t9wdrNCf9YVd1WUwQFnVj7yBe58pGQBmD3rcFy9Ym1g4v99yqN72hvcRrK7JnYXgdQu2wU2dZGL",
  "key7": "2eBvT2tpDVGBoK7VCFgEGHmqn5CFfxbnCVSS1Yy21N5srak9YAzoUsEjvmEHA9f3Znxg2tT9PKBGLwrssafxXYZh",
  "key8": "4R5EpSmjHZVfYeFaVjJFzGgUWAuaYRwCN51avLf7KZcsUH9jFc2XxNKgm9cx45zUSPUbn5bojPzmnNfWe1L3pFHc",
  "key9": "4dKAFkrXqoAeyK3hq3w84BBVv2oGhaieJQKFTz7LetPxvYnHzm3uuax6ZB8NQh25C9R1BE8yU3wsnUJTNajByrNt",
  "key10": "475n8YVBCLi4pS239ipDifYHV3PoL5psZAtg4K4t3Pg7CaGCNwvJXeZTyUs2NzjuMVJaAYStbHpfUozxKuHifYbL",
  "key11": "eXc7o67oCNVBQXc1h43ZoVUV85HyamMpfkxqDs2zdhZEEnELjvHJNw9rt9yoAX6twdfcm5rXJHpwM1wHQygnEB7",
  "key12": "5e6TiatFfPuocowG31YRbEtYXzxDj66mQC4eNf3YhH1s2kP154tZRHNm88uBxGqYjpi1XiGDrVuUPyEBee35gz1D",
  "key13": "2qappZwFs1B7bvGfJur4bQr7Tf8WRB8b771fR3uozVaE75tdUGrexnVTMovsFfh9ZUtEVUidp81iozXA54uJg735",
  "key14": "3uWa86Kz4xkRbacR38y35vbH9Ypdm95veKFrUXBVGkHerfCfd1mobxGY8CZXvaA5ujggiAffkw9bcBqQr7CJFAEX",
  "key15": "36C53vm2mBH5SppXCRJ1bhi8pQZPd6UqNMSc6DkdZeLpxq8jMmAEwBmeWVNjhY6tuzfNmoZCZkZSWkJ62KC6kHha",
  "key16": "5Qu9VEMDcJUZjyVU1HHcozX4U2SwjERHvtShzSHrxQQ56SCfd8AjKdNBYus1nU1zJupw6CFvuWayXra8mL7sKyYn",
  "key17": "5RoW1EsRisjRf8CiqWyMWhaApSdSBNJoiRMsM3nXKuT8QoYvU6UCJF2RUVHYMyP8z7NG5MVHmFDcao2ALurm3VK3",
  "key18": "3W7MaLAA125mNHoQoHTdypasJxWRh2SsanPWMJhs2Sf3Azpz3UKdaYHZEVL2UK6jaQpMNNgf3Pmb772DggB5eiKN",
  "key19": "RGknqKq6iueDCufvY2YX88wwK4TeRXLJeKETwb6Z45QGDjAtfpe2PDnjSMkB2L4yEgcDRWzaNE1XhuuWZ97o7V9",
  "key20": "5T8G3JHjY3XYo4BrsP2gCTcUfPysJRvr67uX9PFYohS2V9cs7nVi8QdZUqtM9ZxaAVirMV8T1TSx9WtrvtRdvFmC",
  "key21": "3UPXyUBngwtpRQveWDiHKgBseQBVrNRwDX4im5a6E2TScpg8SKGJGdhYGWBC5QSqWVHHhZkL6UctugZFQaVaZDaP",
  "key22": "5hoiCtCfNNF1hbnX7UWuS8o5dArj8KzbEAS8V2neo5DFGiS4E432JoU7JsgYmsQct6T17XNncMGwyN8JabaJAooB",
  "key23": "4SxcF3WYLzt5bpttjJ2T9xmwe5yzcno489MTZyGwC6npjgiq5Q8NFrYAwNA3iC29pD1dLNx7XiavMVMkqCSGxZJe",
  "key24": "5L6qnGqz2SeypfBLiWhf5cqXQZ9tdPvBQLBrdVLK6x5DVSYLY1UhApLxEBofRARr3CjM1SZsg7E4PQDWqpLBKW87",
  "key25": "5fPGNhBW4qyGhsZTnyYbibBaPEr9BdA5JW6d6XmZwkCJqqeXKt7KpuuLh9kaX8VrYWYsUHAWFAjbhmV6qvsBiT3B",
  "key26": "5RuqTFCpRUudyQZUMwfeCUdH5sPyKw8S7Lk9PQVbQ25k3qtwuNvMmDybfWjnpA4jfPTCF7TDvbhRfhVNYpEAhNxU",
  "key27": "3NGX3Dq4HumQmv6FHSEpzBj1aJ19uY12xU4GYw8QvYYNLZEw3f4mjtRGsQPqkiPiefggKEqoYETPHu9gG1jWkuzu",
  "key28": "5jaXrrHFs3yXRhDUwQUgjTLnAQK8b25JnmYagqeMUd2JCGq53Vs7EMg5Dek4BmHKN7tuXzQswzhhayseuWmM57m9",
  "key29": "5gJjpVnhs7zYNGvnBkMv8Y2i5uvSCWU79ec6fHwSMLTZ1iA8LBbnntPmczQEDNgfspZ7AZaVnXkm91fo39wkXrKx",
  "key30": "4VLPuKpVFYdf5CVxUDb1cXnn2kzEqkzr2ZVVz5uHjC3vH3z94hpmBLhikiKNZJfRA3yb5SDtXsYLWM1RBCZYHXM9",
  "key31": "21pQuMWtdKYCGx9Dzw3YeYDKTA8bdW98MBs32SoKzgZifrkkwRbU98Qr3iSCvabdDYMSrQgfrMWSRrKPaEucN1ne"
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
