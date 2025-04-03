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
    "4313WXn64TqFn4dDZkBt2jWbXvzhAnaoJxhMFzopBwjjEEh5VWKFX1sUHz4hZsgy4Sf6kZY63vTP1gHCZBaHuTmL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "woFyUx5YgNUxzBYLhSR93gzoj3FwqQkP6bwBUBvoCmaiVeeEc53bhJQcS983HM5aXzrpbRArn7XngBx5zgmNYyf",
  "key1": "2HPUnwFqdNTLjEYYndXaM2HKf9X4npMjkbZvrxm6VjG86CaX5GW9CBTxv7T2JAvYpR6SPEP4VjdfWixokqQLyieG",
  "key2": "26Dur3ibJAuoaznTSqUneyDU4KTzCUS2owdbCgSQWC9noRTDZoJg8kT51Aw5cqtZWHYbEtNyPRVQ5LGR7rsMNDzN",
  "key3": "2dbJAHYaCN4mYBSXWH7kU8pnHXQQq3f5nUTa3d3Pywq8xK6e9kgGKRCqkvQYcrqXQ7purvWJa8ByjQ48PnqYCCgr",
  "key4": "3qSvvABuTxYs9JRji5vM9cPvZnCNmDBezo8ZvZjtwHRSbShB39BSeEoyAfGVNSxRsDxHs6xG3qt2wCBr1H441zdY",
  "key5": "2quUaFHojnkSq3bytDK9gfbAiTgYDSCphxfZ47Lux5RAHSPEjA4Pes334AucqjXDgXAWiM7y5ZQzfaoTxe3FZZmK",
  "key6": "82KYho5p25gnUVhHLdcfffT9E8UGs8JTAEExkJ9pgZ3FDGzU1Nzv4B4fFjJLJkMZG2W6h7ZVJB6356kyLi7mQNY",
  "key7": "2Hw5PAJikqmQ6N4Cb3Co8vLZszZd77iiYGVn9xbs3ZACQHrZZm2dkjZyLV66n2iMCYTqyiA6pFHSqXKATotm6pix",
  "key8": "2mC1qg442LzTDsYVihJFz3wQ46RWcfqsFXCFLDR1xNwyoFbDYWcp5Gco6nJ5JgsjRkqiuidcRwQ4hHui1CCGcdy",
  "key9": "tARURrYLJuoPHRNEQ3R1hUFVrM3jLYXTXJ36mQwAcF9YeYq184xATtHMzVRawyUH7v6qthhVEPMAbVuACMWog58",
  "key10": "2VKQR4maASWp5LHfyEkQJofFwf5PggjgeQccTpiv1aTXFhRPvESkFVvUtNTa6bAEruve7xTh5JgKb1kpxyw71vhh",
  "key11": "4VY526Uy5fLUe4mtKWBTGFoMBkrZNXibvETofCMoRnaSRWGxnNdZo4XDR3fWN9NKX8pQirUbq77zQcxBnVv4WMWx",
  "key12": "5ZStc5ojBhfzuHsZxqYp5AtUmts8gXXELnQ8Yj9nxQm7fEtaR9hetK42EnTQEAamVcFdfiAVK5k1whVvyKvw6stD",
  "key13": "4NhEEQ1ChjfkmzN6J7PVxwvDiTmcH4UKpVgXGN95wbswuWg8TnFSggZTYcRFmCKd8hySeuCxu3RYJKXAX4w1p3Gb",
  "key14": "4krT71TH9qNET6ATMPGCsDhFcGGxPeVL3GxLi9RfX4CMXHeBhWhjUwqUNaCM9Yc5JNgDxodmbpwe7p2Vocg4DzEa",
  "key15": "2Lewde6nrJ8D5A1wunXRkrbEEKMJeFZhPLb1pBoMTeHKm23kTM9DE1AWjYt2vivgtRvRFT2a2fJ2rQ3dpZtpR6kG",
  "key16": "4pcFXvnhzdJ28AAQABnXPiC1R9kBFeEADABiJHf5NNAjuYZFEnDHn27JjbvTQbknyQfVUa4LngKwfHjCZgtBuLzt",
  "key17": "2ohruJPb8UamMNRfaH9P5JEN8mCes67RdQCo8QBFS3qDKDNXVeekBFFhU3si6i6TWdWzCMNzTuMnKq57aX78kzJV",
  "key18": "5L5uXmUFQtZv9ACn2PHeoy158mLDkEgt3GusUm6h9fPjjcxdkwWChotEjzprxdPmE3VCfT5SuzPjmM8p8jnQy3Xf",
  "key19": "3L2ywuhkrzBmv1TNXUr1cQCCvzMbG9RhNngMkkjX5GG85EKWSzZzMrmC5tqHSdtN4ivUpm4XQWkpZf7SWL6cFUkg",
  "key20": "5iChSmoHzh1mqZtYYRnBcmL63y3hq2ceWJRx83vjDA1GE4XbtHwhFDp8hQPcMXqMMMAUcTz3DX8h4ABfZjTLU5u6",
  "key21": "2dVQ1Xkm5ozt2ZRT4hQmEJEuxz8ZjxkBCx6kJbFff8zrKNbbYaXneevMbEfwf9AzCc1ghJzWiLuZiJTKZt8muNXU",
  "key22": "5WsWrCKq8qpvAnYuoM2XuzZY5Fd5KzZuLS4vCdaMjAMkoJswEYAUQTmd4QP1k7vuDVwGn5bv1fR5pKXV6SWkWRhi",
  "key23": "24gh8RVQr1Shsk3tiC5wE3m9iuzdVNrG2gEAuJLBFEr1MkwvFpLp6qS3wuP5hDJwpkmLnGPjwQHDs9Yh7oG8YHuL",
  "key24": "5ppgMEYryURezbdjmDhsKVcV1a9GXuBU3GZdo99ccc3BZxfXTPgzLqWynac2ojXWL5GfXE8v9JpDXvRaV1jD89Lm",
  "key25": "JLzZJNeASc9BbpYgDQCX46E9QzkEAb8Lj8xv1aNTQ7MMCUcciQHMxLXfgyARdDLUCVoGUGcQFMEkL81cwPfBXpn"
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
