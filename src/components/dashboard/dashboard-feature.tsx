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
    "5JSS3prhAHpHhdWAB5KYaVfwXTJga8LkE5WbRtV8LNtw5qTVC7Zw4vhDhcLXRutaX516XJ3p2aNJtcg6mg7yGGK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GTXVYSmumdKGhEcBYTfAnrKjuz6o6PjE6wm9YeEqjfSrYz6yX1hFf98PPUcnica7N9CQr8Xt9548x56fLxunwg8",
  "key1": "3Sojk4MmUUTy3KuMdrqjiRCLG1Ap5bz3qRyckEKqZ6mfdsbWxxdwtQ2qbgBbenHGEjssivBwHcoT1NJVjEk2T1Dd",
  "key2": "vrz5h8rzLuJW19hY5Yr6fT6ZVK1TsUNxYxbBpTkVE57yPzmD88L96L5rg8GukDMYLKtJhyT33H6zCxPhg2spNNq",
  "key3": "2vxeZDsX6SsBoNCEc7EWBAARH7xg9dLWuCaU8S1iArFMifZYUSxHK9kJMhtLMkEka7NNemweGpKSWSDwSXhkd227",
  "key4": "5BN1xqdq56MyFdMpyfUHTJH9nztuoBQP8inQXgQGsg11bj4pZBhzLbg6jmyETPjg5mAV5us2JQPHagBTUxS5T4mx",
  "key5": "64811y5HtQ5uJ5AkFgigR27MGj3TfoTXDfaKWZh81XLH9seLExEanRLX3mQfCNdBCygQsitXBeaAHWzHsKPPJwLH",
  "key6": "4fTdbWKk4UU7mt7jBHN2mqKgTK7Cp1NjqodZ1WbhsW8cd5PX4uzGT42HccvP2cXNzNyRURUpupVTNKGgK3EGxXLM",
  "key7": "3yeXBfDjEcisoknkRuJeTg5YJGU3UCLx85r6bdHfqFFmAiNEUECuQ7ArXK5Yx3KfNzz2sGE9RWMRAnbZx7hP8ciR",
  "key8": "2vqGJ1GGvfhpvm2CR4SLsmAxqJFpDAFvbL4SUkVVs9dqWftzLm3HSNybD7C2uxo8kT4eqFVK9nHjf9GrJkF7BXd6",
  "key9": "445rEzugUi5Ucg9cCWsWzAFFBzmwktYDc5bDSxX6TwgM5X5adQSm685KmbHw4v4eAJVtkpBzExvp7FPDwA6Tda9W",
  "key10": "j3RDtrUvyQMM7j8mZ8QEiD331DqF5W2PQJEx2oAs22nKyLXFLU1RJfpHsqaQeESYPYTUyJ4Ro5iSc4KTbFpP4Zm",
  "key11": "3B9U99GnGEh25bvJnRjKcUR7VPhWjm8f9kD3ekuFtwhCyrJYREwiTkV9nXw7M53FpqhLTdjaDfawPqapwu4kmMZe",
  "key12": "2RSQWUmFKRKdS13HevJVKnenNKVypXXhBUFgJk3TxH4m8URGWMpo3E5ojGNeponKsRQreZfgLXZwtRbtVbNyMRyo",
  "key13": "4Ju691jCH1sYiHU9qxTDvRA9pfGnevxTJXQ4AD8Hb3hFjvSu455qGTqK5Wq8DGgdpgFwbkAuT4gqBznrBzVqC9cG",
  "key14": "4abXFz1vZ6kfWjRvd7riUBsDXLP5mcXYC4fkkFbVZqUx2PBaNTzzMKvbYMhtZgdpTQ2g38SASJi86GUFBMfnRLTY",
  "key15": "4SXSQRj8cUG4vGgfWMbG9597GafHKtfg8K3SZn71p8Kwg9oZKCWwq4ZvZgVEuiAMvDg55AFsDQ8cLUHJVwtAXnYD",
  "key16": "27UQ7Wo9Q2QQDV7wB7zt7qXmLHLjRW9BdEDiSMzGMJrdnR1DpiVNSuUaEbQnPBvyRjdCsDSn6NiXSnGQp6ujujBo",
  "key17": "2bfcC22gzM9ZRNXBu8HgJoaHTyeJrVCUwADULA8KKsUMdSrsvZH349nVEaiAk8f9gP8nVPZwbRJUxd2HiHHmmTQT",
  "key18": "5j3wgQgi33h53UVPhNesPydqmAhnhzEEPnzxtSDND2ZNZoEFFbm484hXqZ9HDw9S8TCvBNJvJitecsNCJZiJS7Wn",
  "key19": "3bBX42vHBRr1ffXoU1ESKEnAv5Anv7oCHQuvMBV72korNbG3Km5K2gLHYqaT5DQtdvE2GDdYFWVj1RdQ8MPYdvYG",
  "key20": "3QkyJD9zHZb8QeYqHjP1kshT6oRkb9VodPb2TLB8pnkn7Me1uKwBwxQSmrF8ufF4XJedF6zZG7LxpM39SBrEtb9D",
  "key21": "5bYrxA7sYnSs1nAFusqKLwKQvTMtph9fgyfFGC7ykzho1jiz5A4gcaNeShXqzaB3w1NkDZZfjcqQ4sq4kvamATff",
  "key22": "3BkdcyizPxv7RMrhSssxnAEcaJAtKCFbgYfkrmGYdoFtSEt2vSiynJqphmTiR1X8eiqNREV1jR7t1FZv1UBfr2fB",
  "key23": "39C61hP67hT1EkymGuKUm5Xgmx7szzX82Z9PVME5teQUsKVkgQighGDNNm7HrXBdEqvoo9wGG4Wn8dE9Vy9ggerb",
  "key24": "DPMgp7Ug8eFBVvLFj9M6CGEs8ddRQpfCRdvVndTgFcid4mXwqUn9YVU54phHQRmG22Hpq1ePjUNADiVXbUZ6z4h",
  "key25": "3bEML2UxwpPJvkB36ayKAnbY7sUyxLVNMJ918m8SDQznDXhrUYfbJc7siHdS2fBeboP8rWXrk6mTkwrxFJLEKMgS",
  "key26": "2bppvjE9xjigMtY1hxGisAb1LmkbSbMzGUykHFFYCsxuCNtjT5ER39JNCMh3m51pL1f4QoXYwx1kL3BwLQtH7aN5",
  "key27": "cokLzotfd6TAp1Eg5LBNMSN3bMHNB63sJcucWzDQpCmHBKc9zhCYaeWXebJnxnYUSg29PoYsZtnwdhpDqo9WpAr",
  "key28": "Dc6E2wG847jv49C9nsB3skjvQdEdEDQUNHpNHTUd4C8XjD1bybLA17iJuTTFdVM2gwXmpLgPNAJYfw5VCqEEesc",
  "key29": "3LfTCrSbPrxPYvwm9wnXUdbfytipp5WDCJ3KhbgbTxZTmJqCav1gr4teTVjuWgqp6k9HdWrdjQvLcKVxJhDPGJhp",
  "key30": "2vEYTYohzTXCvLto2RZMKGSF8s4THWTPFurRWLA4tu4ozaVAuAC57zbuqpq2DjpLDyr17nugYruTfCSE3EknE8Fw",
  "key31": "3bDbYowT4P3Mz4ewF2AEu4vDK6k7ipF9iSSm9qkVHPbBDbitBHJW1rbWHn3fYtoWaN6xLJ6t2NCasMratTNoAhvd"
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
