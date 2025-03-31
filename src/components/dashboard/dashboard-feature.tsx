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
    "4pPAS621qHmSvtgWgjhssHUMxWwaKNkfTK4HRoDnottkWNm1DTQ7xUiA5dH8vCGjTpVjvQodAE9tqpdn7oddyz29"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oBzPQjGNH4qjNMwhnFYXGF6jsKKrBGWr3hNcihbS3hf9QpGMMtn2pJWWV2Dhq1u7iACmxihyFoAyyduWH6We6jU",
  "key1": "4WtEG5Nnq5y2YqZfciRnM16PtcAFuKYjXxiKXP5Wrszdn5HL8e62fBypzivEeNZ6gJfVDAs99v4tXLMNQLMW4ucX",
  "key2": "4jdBmvS4kYqbt2GdtvZBB5ABJv1kRJQJcGRMtNaKGC84YZF7pLL5LC8PPhoQV3WbKkXiezBReZrnnAxFJQbkWXy5",
  "key3": "4CbNQXq9YheLW2uqUVALhPGkJ6quvhzX8cYCKUCe74nqjnvmTwYcRZaK7is3kwbnF13Exaqex5HSQZLbnXtWGtp5",
  "key4": "H4SCTxM7E7AbbdnS98BE5MZinrH9A4RLm7dFD2NdpuvqiLx1kxPYWSBWRKZDjTTW8LAmrrybhZCqDoxL7341M18",
  "key5": "4FUhSmxS6s2J4YUfe1hr3XjRr2BeijZR3d7q2GjDUY9Ac9xHdfT3ijVy8GMR74KzTSs7XQ8Cg8PgeiwJSEjLStLp",
  "key6": "67aHqJvRr3zcpLpeohEBYFj1h2ymwKGM9UirCBEebwPjXHqZAiqVhuf8fzYWL6dhP7hkEyGdKcx8XvbJSSQdV87",
  "key7": "4gpJ8ew1WGaXhe4xvV2P9rCGg8svg22kod3Xuz3jhGHcTUtHb7ns2VWjWc6PCnk3PvQRFmEfDaq8hceyox3ug8gB",
  "key8": "2wGPxpso2nXigpT1g7QNSxrEmyD1Q7pJ27KcUZcXEscpWDouTqG9Kv8pkbGGMjwysRQnpgk2AUscNViHf4REH7V4",
  "key9": "4PohjvgiUhXDR2c27Kj12cfB6BJnH39pYbEYixeNVF79qQQ4ArR8m76FdmxAvnj6MiKh9RskFjTVrCE62F116jKs",
  "key10": "3revCvudZc2PNgzX1yZMg1noFrR2mAaKbAyYYeeYh4B7zRgL5GKUqgUXspgveWUMhXHqiR33TT1UNSFJv9bJAweh",
  "key11": "f2AcuVsiGHjTjsgzQtxHginqNmUvRaCHdr1GALFvELWiuUccwB51XraW73jtuS2E2MMiGzecoy5v1sr7rY7ZaJj",
  "key12": "5xxST7J6AsnBTrXetLZZDq1qAi32NtdckST98gLJo3CqN1EfdHcgjB2UBeFVg7XQnxnYtPY7i3wbgecSqiCWa7Qh",
  "key13": "3Z48y9FMCzsktXt77qQraHK7LySCBZvWv81qtWLbNzAxSYc31DouwoY8XNA6sWDHkhaKRrAqje9dKXnRazeBcHxK",
  "key14": "37rsq8qrpF2D3AVJfgVTjR7uUwXjKc5wJi9LTjLFfpJ3Gb2rYNgvPBpmFgT1jKNN8Ppd6g97bo33v5BPiuskAGYh",
  "key15": "jipoAyjzpjmRRs1E9s22wStzJ83rgZHb9F8Qem2YMonTn8jzjGZa2myuVxSyiGNbb4e1vVpETNGQKvj2Leed3ne",
  "key16": "53xzKhRUvjaW4qynSNxcLo2K6DvfXKEUcfNJhDuA7vpLC1rznzCo7BBX4MvymrK512EKZbxRW5KrBiXKh9KNJVog",
  "key17": "3MyrXrRxwHvzkF15XDPhy6SHwsoJJEkuRfs2bqT9QhfYfh6h4uauByUwvNvD2Vx4zNmFbyC6oArR3YuTq9FkhrPw",
  "key18": "u3WYQmgkcnzxCMHkCdmLEhYfbBWwEzTQ2gCT2xQrk9LeooaS92wM5MAaSN5bm6x1LAfwCeNP88yLEhEYKBfeKAP",
  "key19": "fY3HFWfV8rbsAMEbpZ487AayP1q4TR6C3VxrhyvuDmxm3TXmVA68w6TgTp8oHjh9nzTTFtXgJwQGr7w8ZGgXzNc",
  "key20": "QodAKcY3kMpMphv87umwfJg6DaEA4E4v37i8t1cHR5e5PDJG3GmjxhuYyyWXizreKUYfS9t12CrArXRWQiazMBe",
  "key21": "2qrjJHfa4piUbuQbLk48Qc72HJyyBE3omXnwnpsKgxDicLKAuyaZv5msBZ8MtgD7DLzKf53JYZ5ZspRfjYbF3xA3",
  "key22": "4C7QEuKpRsbtKEsGKJrYWeNepBG8VGnKoiL1v5rYec3ASf31UeZVLwtDJesNRvkdmxaGHy8sZsv8ELTEFUWDwbEm",
  "key23": "5kM7dq1n5gQSKLPnuJVLTK4oVHDwZFTTtqqKoZqJ1qyzeCpxJ7SR4AbFuecndARwYYhrdbGQFzNA4CM6n7MMGRMe",
  "key24": "3xbwsua39uze4bgoYtkrna5uY5kyBb3nKSJXouZn84HQVXXaBwTQ6K79nrwQavW7AJxkxPdqCMp4GuRiZboUSYkX",
  "key25": "2MxeFBo1ouf8FBCzQxENdabkafAvCggtVZwDtvumzy4xBazM6M7fuuhQU2bUXSLbrNLPQc2RGwmghEn3PPiRU7L5",
  "key26": "3JzZTo8TSZGjeAmemQBctRPm6fB4MEdgqF7fiNQGfwUiFHNXJZrtFWmuduumk4X86dJTXTtpj2K63paBxPT7rhEe",
  "key27": "2rya4s9XNcamd35PEHVgofzuksqFGi7VASYbSz9LPHturPrVARYEjNU6vVPeXz1t7iMBmJpqnrAu9bxSpdMm2Ejt"
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
