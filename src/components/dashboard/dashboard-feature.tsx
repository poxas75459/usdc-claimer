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
    "4sG9KBfssyoaAMTQjx2MEC5oD5BMbXx7WjjrGaXAAxRY7s8pG4gXdat5hm2UHme6JFrncgsPnoFXQ9cHx2m8qALX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WwvEcrX2UTDD1QRF1cLqtgZEGiaCaXwNH9X8gLEuVRrzneF1AtqHiuxPriCMJjp9qqj4XuzXJsSLVpGGcXG2Vrq",
  "key1": "3DkF6cxmtLmEL59XkLDYzSbyrohySV9M2vVtdEQDNmv5i31DJEPmTAJuVnW51TofNCjBti2inNH5Tq2U9MYwZVYA",
  "key2": "5BbG4tV7cPioHqcuoHb3Py1HZdoyb9yUkFwKgi3SUZSFwJ6BcvDxar6MpRDSo1ju5PHKoFzdyjuup2p5tnfy2Bwe",
  "key3": "3Udd1QTkavNdp29kL2Q39HCMXjJVn7LVifbqyvfXuLGcRUzULEnz3gE33Kd4a2NtbuRZ7SJzuXvEQNfryjuuXML",
  "key4": "231MeK3HW26jrHmVmiHAs4XycuqPa8zZKaPgseLiPnz6ctJSkVhAw2iiE5Q5EuvesxowuyaKCK5nkDraepKbaKeh",
  "key5": "5Cy1Vv2EJMQn2ZXZY6dvPdDJJifJArGAPr7YwyPUrRh86FetqMuN7LJdTmvTqyLRJDUbf7qKAUJrDvK27V2TYckh",
  "key6": "494kZEpFfbDNDVh8cBhoWu5Pmv4mezbknyEyQHtuRXGenG1rZe5QYTBVyrazxZmxheTQ9BfhYrqVQ7ha1pjSePQ2",
  "key7": "5P939V2aZD7fRksKNi6pnjvhq2dhfV5EwbLgM2QiZZn7NKgnmcwS75VH44pmmcKFq2aBBLxipmJawenMZUuxYd3",
  "key8": "3NocKHyT2MUaCFPr4XkTxbxfNTF7Zc6E5HuNjbi1KhUqz46NWCNmVzBUyU7JBqLLbTegBhN66YN7GAw7H2JqcUAU",
  "key9": "GZxmcNZN5d8zeGCi4fGn7CPgJPuKE6CMjX9HdECVBd3tJdGY8Ync94RVMBbtsLe2qazSZ6ZkwoYnJJppUqo41MW",
  "key10": "3UsTqoN4yCggH29xRNA6eDSNiFicEPgGomV3yDps4Nei6XSSu7Wt2QFp2nwat7mAgg7vr6TD3iyWyrYCuCcWzHqj",
  "key11": "fgLBK794YDTctyBdTjKEUUAHgpjrbMPQMUsXiwPGJabcP12aZwT7VuarV2krVHm9YDiDMTBVkYMxAkvwymPFyj3",
  "key12": "NdLFph4V2zaQ2FhgNpCz4BCU7DJBpDZpRywUH5uTiLUucPuJhbAFNXfQBuforCC8k6om3wfyTbERDYf266BYFBD",
  "key13": "JnbqzUF2GLTxApTV3YweH9CPF45Zq9aetxNg4U7YcHuwujTZXCH8TULWWqF7PyDbHWWKveQpV56QC9D8KmqDqRR",
  "key14": "63mndtqpYSu2xtZXgKrjHAdEsDQNPjgZxsGqV6198R35gHuMM3gqDgu8T55V1FLzPUY1khNY2eW6mPwkz8ubtwjX",
  "key15": "5T1rnupjYYTiNkY7oHfJ81NPErkEzUxkn9Rf9B8V1RcjFYxbKymansX8gMXnit4Md9gMwaVPfgnr1ZC1o8fgQy5w",
  "key16": "3JMHpBnn7UTg1gMXsQmh2LzGHZhEWks1Yw1tPNddeU6NQApfBsDGCm79ejqZmArBFya4JVM4KBWXwA1kZZza8jjR",
  "key17": "4RVoLtRywE4u2xNpDzD3TuzLDe9BnSQGmLEdvpayYm1b6EV7MAQAvCeptqtSN1EBHhdrFwrRPjSoNWpQpSyZiwpq",
  "key18": "2mRzaMoMuiFNFTGNiWu8G2hfvdZxjHYFRY6v5iMKJ8qJnhL4MR642ZtQ18PKct4KubTJBSJ1Byysx4F2LouR4v9h",
  "key19": "64Nhm98dywqb6PbeTVLTKyJPDBpWV64yZWXA9kEYsGh3K7M8H8o1DNv7Gj4WApuHLjvBCWdo6N54qaqn7jVrSEuX",
  "key20": "5e918RKYAqtxQTp4WrrV9YhQHd3SZR9azze363zF4eje8xhGeiTTRhsmzDpJ8mjCo69nKiZ7CAyRxJ2dcrNhMUz2",
  "key21": "ZTEPkPAtx8AibYTrZt2VVS7kCGja9VCMmbQndjdALixxaaZtMWErZfVuzQtgpSM2SdaRqHtSuyEAQLSDa99fMZ1",
  "key22": "5bmxAsRnGRAxANmj49eYi2nH89gNeZJu6vYTLbERSNSYmRx9VpJwmjFuaksbBNLPyyZHt3bAaZwi573por3qS9fd",
  "key23": "3E58ocvXbBvQriv5gHzrQNayF6NoHLL1WZdmjxyPr4hQKLiTB1MCSUC5KHcrsKXjSMYvwEHFx5JvdmrKvQfkA2uh",
  "key24": "5YJUnBkBmPBo8QdCVqJ4aEjDkUmr1cNdYMHZuUNnzfWzkvV2rXLRRvAiofhhcN4KbLkRLQEf2V4wu55prz3Ez8Gq"
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
