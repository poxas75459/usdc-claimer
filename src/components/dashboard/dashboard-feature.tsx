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
    "5fo8sZdpKLiKzGQuQ6uk4ML7acsaHdLFYEHcmyNQLvVBGWYaQbiFN2pqWWwbzqWtPsBXEdmCGdJVp1jM6aLVWqoy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r9Hfv5qYvh8ohmb3ZMyNSq2badcd8iP58bee7PZms7xTq5qkvbHyzunmKWNzWhiPkmudoFDqdGdmBKUJPjkFpWA",
  "key1": "26sixqLqNKRho4AZ7ZVpBLyJXokkkc1rXxxfSWUZko1gpkqGu2sYgB2FLB7RsQrPw4Mx4n1jzMngttUdofQoHa6T",
  "key2": "32M8kScszRmbnPS3cMNNRm5iUpwX3YoZQsdUr15F8Qs82K6tUsZHU3FtVUKZ8YMvyqA3UbS962V9sm23SeiQgVRH",
  "key3": "52r7rsgKFaouryy7hBrYpJVy3aTi6SrTPMtHLffpzwW79fRGjDgYaFqgjB91G6915jutZ5BSnesNrfdjitVzzbu8",
  "key4": "vY8XEkvhdFhWVFagnMNe6dJx1HyZ9wRCdDzVxZ1MoX4CGmHjj8vcWQc8hrQXcgwhqAbtUHFNcr44YSjCbcUPSxt",
  "key5": "4dSMyH6725suMHoUfQwSmbheDSNUeM22MACneWs1SPrfYeaqkhXAQ14414y6fg6mevWHEoeMr1U2xLGTPr2QP6Gb",
  "key6": "2VPHrvMnEwYZqMSQR7Wjo2qnt3sTDLVXB3vtYF6AZsJ2uFdxkybZq8rNUCjLGvMQBi7ZSUSXBe3RngVWks87wrsz",
  "key7": "3jbV63MQjHKmHk232DbgYtAWN4LfJnwAVMRDMCFK33Gxdb2poxmZxaKk6bdF1XZNJDR6uay9HAHdxubuMruXTZqG",
  "key8": "2TocEUepHAikJNPh343MXwvHHd2DoSjBomTHbg4MPA7sVgn8poWEtfBN2EwG4i3fWW6KT2GwHiyeDqA2NrhdjTTr",
  "key9": "323XRhKRZMJfSGFXpzypCAhDyjHKPiUmpcPbZg6GdUnJCd3MDP2EtKtyhgD9n7tiCYyAQW3KRDKZHRaSgBBQD7KQ",
  "key10": "5Za73hkyQWUqD7wm8X5S1Z34yM6sg9837vXWtZoobLh5vAseZGcNBgCxi1Xjtu1FzKbh52SLcmMEwpiU3UhZ9ZTf",
  "key11": "2crWggWtjXSPZD98Dswe6wXY6ECWEPirK5Mg6qbmz8CPrbTTHxjcgHggaz4kjDVt2BgbogJY48Hg85vuUW3dgVmx",
  "key12": "NXxR44fdjAQQ7bHVEuCroM4a1EhWf4ZaJ5iwrvX3rAV7VL2AEvQRkzVnfSqoh3vM1NbQip5AdVqBr1ZQVULpCe5",
  "key13": "3Q64dxhVYqddZySGmvt5358DAeX8d4F1q9cSM7zJjpeW4BFd9CDemsTWaRVaUth5ZyugUWiWoDu7YxgJEWh1a2Um",
  "key14": "3t6j6dsQDaFk2BKZnGfEaK5Hz956TBTxBaW8XrVYmEhyBoDssG2nuWL7NvNEzS4u7ZQBdU2wKs7Lh3WGVgeiNQNN",
  "key15": "61G14FjbPK9sePnmjNa5h7hKDnbRBNEv3tT3iF4iT9YHWWJzXa6jB77hS5Y3V1ePtCNFHLgXWZxsB2yjRVGiWBWh",
  "key16": "52sBNvwfZCpzdrJRjxoCAXCUhyz1oadKutsmgesJsbhRuzYPpMukZsCyDcUU8s3yfCgxpYgBZ1VqRXhWg7ij9WQs",
  "key17": "t21VnG2T6Fw7hQt1su7tS4anNJfQSeuj5Ltf7orWKLdLBDaAt6zPEDUa8H8woMRf3jMjwhTrcMUaauFcSxk4E7n",
  "key18": "4Yc6v54F1Pp7BAwYAEULVUeVcJqViQu48bu8spHi452mYpTGcgcoC1kFXzoqkoPTHaaVYC9NRpUkVb4LHmGfZteg",
  "key19": "5GPayCKsv67vr5mD6YvNWt5r3ND4VxqH48xWKQ6spFvAUM8sHzrzakYCZgdpYFmPHdBgBLxe92qHieWkNyzZ8qkR",
  "key20": "5UPcAg4iMmGAiUSnDtBVwBSwULcsnQFciwU34JvqJRjNGAvCtzZLX7YQkeuDHLXZCd6p2PCqCrMKiQ5iYVXPyAUz",
  "key21": "39SgeDS6so4gstYoC6HTZRANEaB5CFALfhyPDfKamLmW5KEkJAJsRbh7sKzi7yAaAn4Bks8LENKCTHS712JeQhjw",
  "key22": "3rVnZXrgdee9wM6m9yhfghg7Ap7T425SpN6eKnMZ6e4wf3uYGErzeELGF9FMujEQHA35JvTUYv8v3f7xgmQSvyco",
  "key23": "3FCis6QCY9vfo9neNjisWoaW2NJzgQjx95Erewmpv915hX5iLbcjttYazxWQtRiotn55Hf7mQgP3ahREJ36qLGXs",
  "key24": "56ocdopZ58gJuK5oc5ta23ACB1ePFXZAG2rYYKJmtfKQX8u3fZMPrdpsBNypLbVyD3RU3nchnMPWACtiKsaxw2Y",
  "key25": "5922YBVEYR91Tg1fdhicnmbu3LjLDxL7Mzehg3iofR74r3DnKM9Uw9T1wZzaZE3n7S5bUfgG8Xqi6ENTFtGwq6ak",
  "key26": "y3bvLQ7kiUWpkUrmNyWMsrVtFmy8wQnauCruoghWrvktaTnb1Lzdayt2miVigTLVBLyQzxUkb7WVLxWRoeU34QM",
  "key27": "3ZQh5Hagtg8azUCWuTAw68KHajTfFkB4dQwG15mXDhbaVkjiZxzYiY8b66Qkc2EK5dX7fsfUm26JxLS1Bc5BXbYM",
  "key28": "5MiDNVYSqGhQ3pKvpFKkDHnwtUdCDiGpLj56cRAiFVT915ZFxfyZsLc9BqSJbaCWCdRkY6Y7NupynT9aYtf82Yds",
  "key29": "4aG2hgQqNkXZb8dsymn4MqcPcLJoDtXwijDj6N9J2aBR7LwMJD7QaSbCQdv3UP4xGMEhSqE57kBotr4LdFwR6X5Y"
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
