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
    "3fMrdCQo5wqACB3aqvwdGn8i8ku9Z1fYhB8xWMxaQgrSDeVRRMeYq98zWmdyKavoFyYquiAKERYdCdYYDtjcuMZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dMH6KEYcYpRHPwFjN6BMXevCXPzWe85eavZtLfs6nW1ERajYEnJiUVX7gY2qASmr5fMxJjijbVbrPFKhjZz8AbU",
  "key1": "27NfK73P5YHuxGsPorLtNPAUZ2sN47WPFUCwuWbbCj36WRfucNBVhsLaexT6omm6dE2jSFbRmTnpyw7KjF6iTfwY",
  "key2": "42KNDswFftJ8ijRXnAPV3CsVa1mJGUJNhWyKfpKEMzXrY6niyskp6YffHxB4khyxQQWfej15sWH8fKpJX59QzygR",
  "key3": "tbYUJamiJCh6u7NMKNUk2dzk6zGMgWfFoMC22MxUzubr1mSvUi8vtBhZphovnvZnHB9JdQjmFDLiWbZRcpqv9FV",
  "key4": "3X822oAoRugAcRdBDHuQd9rC6KQbDJbxqpuNrnf5opnvxpERL5j9SmWoEcJpBkksMS59gPZueGnaPZvSzpCqkjt7",
  "key5": "ERUPgpKcRr1fsxRPZdB6LXy1yNeYm1BcZTvDedMttohAdE6teywWpkjmdYHja85xNP9gStQjCM3D6jWcorE8Kcc",
  "key6": "2b2XoA9ZnWH4D1M8F2E4e1LUQMcziWYUEYtHncPJvSvqXt2NkCzMRaehuc5D4MSjaKrzKmvHMQUDDraUKfmSrRKt",
  "key7": "M8wzQURqiAMck8gKtLa9MVZtSR6nyyxRsjhffx3oUamvh4WWxBqpmfmxR6do5oWjKapJVaXvyrnGrHYL9PKbSjW",
  "key8": "5bciKSG5bRkgKK9fzfdXg4qpots3igUNGa28k6oAwfSLzq91Pp2E7pUZDWuNyZARdjbMXnLxBDcH2DmwUJv6nZTe",
  "key9": "27ZnHpkaLQKL4PdvjDUx6DE8o7weoJaFgCEzwYqCfk3jfPhUPQVe5yXeZuKxmu7NnhYbZheSzSiHWtf2JYaqchkv",
  "key10": "3JRhPgqdkERvSCYmBVExackSszskW1aC2tH22wkTNGpXrGZPZdq3zXiKC8E5tz67skuirdViEBUqiq7w2YbV2pyD",
  "key11": "3QNzfpCAo6M3DE6AJYUcZtcoV7bWf5V1nYaG2sc1JfaoLjCqkAkrUMJbdk3awnLaVPNVEYApqvCVbw6QmEiQksi8",
  "key12": "2ujQJSTRMPmUJbFohDcDL2bf1XaXwU73bfHbLkx4MyMwZZtB8GPKB1kFWyXqkhmvBdN1pfyPad28we6M87gz11fe",
  "key13": "27CSjDEVkDYpXRhrJjvSQBN6ejw3rEi2FmndJthz7Uurrnq6aqd4uraAqh2pS3qXAPSMajVrECed49vZQaJNUf4e",
  "key14": "iCbr5jEobnpMyuQLxWCcfVNK9i5G5wH9ZS5m7PtcdkFQiRQeKY6SH565V4s9P7ZX9aC9EetpDJJmHzUmeHyogR2",
  "key15": "632rqpqrV2G4zjXTqhFYb8skUfG3u2iMdNZJ3wGPN4f56qrdU9zAATxyX7stYZFMF7ittuaPvuj2T86huvpx1A7F",
  "key16": "4ayh2hN6D8QWJmy6m5JgMZXQkTgQw5WMJNGTpdFyGh4A36iRtjmDTrfG2o1p33aqutUNQZmHtvAYfYrkjfKLKK4",
  "key17": "5evAu8a8B3HK2x1y3asaoSMuG8rhmM4Ratzia4ARQ5PJUK3wGWFhox6TZ1nECJvqL1c7ziU1M9v4hENJpUax7V6Y",
  "key18": "4vxms5w4f4abYwkeiPdt2EHbBhxaJLtuYZo4smM4KvcZgfGGtRwX2eRCVLuLmJBuLfEDs9aZbcTWrg47FtMy5KLr",
  "key19": "37hb8tN7Zpxq3UFWtAVwc78JQj8VSk9rJwPRwL8doRuCADehnwsBrT9akSp18cgshoeBFofBCrnHvwoNVBWGvHv9",
  "key20": "51jkxtFz1ZLd7WZ9XsZj1uUyUEPVSXr5rDZBvpMUHQ8xtsVMHNPQTsj9FzUV4QPuX4JCB92pV86XVKeBcMnmNKo1",
  "key21": "2BwYG8EjJJyMbwa7q6HU4QpEPEHnhTp7D7KCKUdMafLhfVL5kPXo8pS5Ka973c1AuX7Ed1fiu1EUkXN3s5DS2972",
  "key22": "3X8N1UTXwta6Rc67x2pspneSrSYcuLiwJ9rfryTEdgvvihq61Rvj5n86avTxgbyMWfRN1673bZNseLFKteaf4gJa",
  "key23": "3jsBE8HPzB1s2ETmh8wEYxx8g1UzdN5ZrXCvcq5pKoTkBUMqy7xr5Vdz1aVASHhQqWJLjVcJp8CQ4K1j39VG1Xn5",
  "key24": "5JhpsBb8Y7fmVdbs3qwhcwQ2fNoTx6LvdbmVxJeagckuyGUpKntdiuxcAqHw3ZgyY2LDu97f1Tape2bckobz6s9d",
  "key25": "WRu8bSVEiGDTQNWBkuxHn2QuerYTpZ6j15pQkGC42D79LprSDBbwiXEGe7EgHEGnJZU8jpGhHD1g7BiXq4VfcSF"
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
