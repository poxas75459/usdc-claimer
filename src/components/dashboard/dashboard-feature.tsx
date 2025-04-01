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
    "5xuwcLoAhkCKwKGRZGEWo2HHMLH8meqnRCjFRG44QKTPGyitJCFpaPL7jbnrq8HSZCeim7zau3PN4AubmfFTPfQ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p5MkWyQ48DzPanDLzYjkRYVPJbFEqynsAxLpQgPt5U6iUxjh5uV27uXf7XFevUrF5UHJPRvZerrbgLqSP9QCQgN",
  "key1": "3s8HorGMKkSC8xFdgktME1rz4DNFbVd5xwYLbam3PDgbRbctBqNCxNxGHT8hkikiZiAD3dnDbV9fUJeowERTqNAY",
  "key2": "5upxHAW6paT72M7ywfEU7BLtPhcsvkH5GjJkqjNEmKgBEKZnsepZ5W3DwSM8mfW1SinVZSdejEnpf8xvqNWUADNL",
  "key3": "4rv4mQdpoTDMTbNjN2Rvcn2YGGWN2NuH8D18XMQD5qYDNfnrWKgj38qD7BeZpGLXDb26xwqRaMaV3LBdWHuv3y8Q",
  "key4": "fNEqDYZ27d2LMp94TEtPw4SdQs23g2gg4i66pdnishniZ53czYNaSieT6FgFDpQjnoSzDRC92QVyU9cb4KQxxSn",
  "key5": "5oUNT8tSZUmLVjMFPb9JHRp5jDUPBonh5SpvMXvuL5jbXgiuVav2JqaxP6nmcJ4rm7TsJkQrjGBSPRrfS2PEuck",
  "key6": "5UfHeDSjNcpnbD2yTXbSM6QZyix2eadJyHXqm1i4cMiKyqfATf4wkt8Uz8Dy6hz3ABNqS2AfUb9gvYq4DVDjR7qL",
  "key7": "5VgHNry8Fooa2nmmoZqVqXq5qCzL7D8HNXVVdWsGksqjv4mtSe7tPxSR22vLT4Qz8QAFMZxuM6vD97eWpRQBMPYi",
  "key8": "2ShCKg3KHJgaaxpr3gX14CDhb9dwqRZ1btQctHHrBa9iFugFNbkp31NPSwsD8nPc2i9XxRKoRSzdt8sFNcxRPNar",
  "key9": "3BF1CJ18CS5xobZGE7pqtzSgmzHUbomjXr786qsyFy2KjnBvmjUUgbnjE9QH9SnrTxGtzxD2WbhfsPAtp7FEGsUj",
  "key10": "GEpymx2FoMJSvKtUiFdzHaZuYdJ4iks993nNB3EfdFox1CLZ7zYK8bRvbsbH8FrnRj916XJkxxihsTsiUau2NPs",
  "key11": "2dXjBGN5tcAF5gzjf9KLTWwcMBYanCnHGestgeWHmnV8UXZUeJZNPKasWnTWRJGeop6LJQRZq8B3C55ri323tgWM",
  "key12": "3brNWMBYq5yinXqF85v5CmeTEjcJfZHoZnaoMpvZQBynei5rBuasyPPiHJhQeJqpExrn5qGZuz8up1jLZp7qzmn9",
  "key13": "3tFVhBseLhNmEzUCZCMGnfGxJR7A3g8HfLGSJUBwWZSpq27WsW3sA5thZw5SxtdHYYKxwTvyZwM5v7aNXRRCXkGe",
  "key14": "24me54sWS8kcSnXHZwkXv6E95mPu8FqAx6153MQ8W5EFC2bSrEx6pqv7VXLHbDDbCz1ryLRjjSgSHaEy5s9extZJ",
  "key15": "4kK5UQJFnGd1UCQQzBSGBBbWmZuXDWiiDSrEPL3hfg9ADntHthb1JY4syguKrixTBJfwXrGfd6tPUbTs4cmimdzh",
  "key16": "3h8nj8RGnZmw7KrgMZB8fU7Xg3XV8ytiJaH2aqE8opFBmwUphoeuNe6otRcAWYcaAqyppsFDw4BC6raS5c4GecKp",
  "key17": "61Z7SqLzggXieNM8H95mt8QAxTCcCR8d9egE9pqKR9qgW2UsSU8Qo8KFcMojhCD9GrT7fwr6E2YVdrZuJaRc1ZJP",
  "key18": "48BAKrLgh4HBVNS4DwhdRzEh6sHJ4DVNGqGrxqezTecQxj7PBi8cJDD3o4c7vkYueLcFoGS7Y1ENW1MdQfnrKEx5",
  "key19": "3Czxb3Zuipw8YQs2BmoiNQDnvHUJvTdKeugoixy9qaPazjAhTe6u4VhJiHUPF3QmZS58Yu3m4qSDTkNJUVcsYPdP",
  "key20": "5ndvQhmcUWrvtXQettczx5xRxWU2Y7UA3erbbS7NGe5UuQbPXrgyNcxW1zjWYVSDyhhqiPsEVrvtKTDiGx4LDjGa",
  "key21": "3NPGBjf8ekipz7xdLBWNFTh9WfjXCepUNiUBnHBEdgYbqtsU48YProu4DysVkryKdsLWNcpN39VJvuek1K1aL7uX",
  "key22": "2AiqT2yhKQ2o9M4FPxNmnAS2DH5WcSvMszaymRa6airhi4qNE9znVLiBvrzsvAkybApS9ZJsPWEzSnYmShDqYR2n",
  "key23": "Rt2iW2wkNSvard7Z35z4ND5S3LWagg8ZjVGiTr6N6W9F1RL3c3KpSvBhiAiyArtdsG4pHr95bkf4vxPMGkyQG9J",
  "key24": "2AfwV6EBWqfyv4U4gvF3TVjHCWypr2ZqfsDRCbeZ3WjrPR2LggpybosiBnEkByC9sqkT3oaC43U3b83daYtArEN2",
  "key25": "TpUzpatJ7Gzp2PbDPeEibj8wtrE5UBR9GuXgidVPcidcpKkz7ZqM2qckTZdZzCXdg4S3gwP9qtojmi5YxoWvSUP",
  "key26": "3cExnfK2kCMmT1BnVF3KgkfM4Ycn9qm7y4fYQ886Kh8TsgMxJ9w5okQa2LSp5S6TUBVuwgrEztcAKhZKoCaDpvT8",
  "key27": "2SXGsX1Do7BKgZq5V3Vrfm1v9iNjqrhBj9ts7Q9uEUoVCzfWV4BzPLPAZuF5nudUTB8ePZ87dAroautk2sEQ9CY5",
  "key28": "KmpNB7AxqrAa7sxn3zv7shUrytwYooVYPyx65PUrFfLESv5hsSArVFWKZNShE6iNVw5ywUyJRysvWQNejNNFcck"
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
