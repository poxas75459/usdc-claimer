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
    "5qnPiF5Qpyhyy5ZaJ3VXfh2ALf1GHEjQKGz2CeU137GSm2TsWtf9zVHXddfzZaQD6k54RMV9jLChQNxNaAeZD7QQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GZYbo8qUcf5HwAfZfF11i86jpwD9vCXWyCeRsWTPc738Hqn6GA4nuhQxGH5oqY71Tybc7kBBzncGv2tZjRpGsLL",
  "key1": "3iWtLZw8DCwjKvgr9QMwQBuC6wydEMJKmV7Pjd63cdxc8VuvQ6BFKWW1hmx43JHswoJDn4v2V3rXVYz6x3apcAko",
  "key2": "4zGhpvQMT9rY3yKsavx3AxfhcpRSn46LFD8ao9PoNgRipY1XhrgxEVQZJV6yCKtyeUn9MxWHYagKiMLxweVMRPnG",
  "key3": "qmjvcBgaTJDyTrQ7tZZaFxQi4cTntbbendX1pAKTBF5AQowCag6kdmgZSBzJp9M25DBgaVs5GFguxu5crCpvLLY",
  "key4": "5pkTcbvsRWPVvLCW5tdRf2icsBBTN2yD2PW9BxdG3JzDVt7bKadiqAT77QMvYy9setYevjC4arDebbp1b5WYhsEH",
  "key5": "2mcTMu92DgV1qXbo9E1Z9bivV643beqmPrwe8wtLnExLQLJiiuhiim2rMmYK3kiLBGTCdFubVcuEzNJUhYrTCNBe",
  "key6": "3z8NjE9vjoyxrrg3gFQGVLytJQgkVjM6AAuZeZFhoh569wMX84PzxyAWpJXmMgbXXa9jsBKizPUFAvJwWku6m4D9",
  "key7": "5yYpnsw2txt7rg4HYzKQDpDDxeghae2YEuSvK6iqPv9NwTBy3Jr2pATUXT9M2oDssBvDBX9WLGsFaJ9d1G8uVpdY",
  "key8": "YLZR8BrhcAwRTKFq3bts3HuURo2GyrcjBb4xHUta2BUz611Lpujyr6S9EdQnTLCAR54aQUFbc51DTgmCULpHMEq",
  "key9": "eNZHLUwYoEyxBwfhmXZFwcowC8Z9pFqGnM7BHr77xr5PRCDexLxgm83HhKkCgnd1VpYhZijFGdk3pD24kvWgJwC",
  "key10": "33CEq1mQEXaAhosmC62GVS1EzsRur1ifnvh5iZ5R4HPtHabYgUFBNNSRU5Av187aSyaUDRm8Tr6yuXhiCU5CvRMU",
  "key11": "4KtPTL4qPZZ9TCikFvFyGZffNv1FWbsUHtecx49vEo8L12bstc52FgYUEjcqdArZoDggP9BkPDvrYzjWWoqTZxZs",
  "key12": "5UkTjghJZpUVvpYJkCc8KX7127DRnQpaqs5KVjxJRWpXPejiYbbmEBzbgGcLxkAee719SE3yGTFN2b9vsTr5rPtE",
  "key13": "5JjoPn2C6VCiRonrNbXhjHHVtKNDrs8HbrJQDEKqmaw7CBfXNNMauabQirDX2o5T12FKqYgEAb7beSMNhV9XJgwu",
  "key14": "5M3eYu8cQpLWLbjpojDX2HwBrpVLdnKzUZNRgNqufRX5axJrZYrWxBGAMz5fekBATu54w9dKxUNodAq5jKHEPNp6",
  "key15": "BLAuPs5Nu2MHChYBMsSwMZiARZhzkwtSgSo7KVo27Pbhwz5iE5Su18AWJPgQ2VVJCeLCtAwdA2feJLgCK79LxmY",
  "key16": "4KxmouG3zk1HF7nNtWe2AxrpjTnXmsFkJAKDEHZk7KtRAuGx2CFc9WQW8cG2otxETuTCnbrBXnu924JwsiSRSMHa",
  "key17": "p4qdvSMo7utp82EpZM7RAPmNiyuebfXR2cvCnX5HzxJZPjdk8qdGbfjMHDiYRXU7JGz4jEbLiN4sTRTXgx4RMme",
  "key18": "5unGpanGQEB2ytXqUdLjbGcpySZx5mqARSgFttK681vwLi9YaqGR4QmhPx1akGR8nTNMasDYrUKGaKJVeaoXT2tp",
  "key19": "3KARHq1aMpJbH286J61r6a89byGWrATit5eM9ZxVdFijfJ8zZ8SYMkbSGVFebPJFDZB2gnzWjKafLsP7rdXucWC5",
  "key20": "36LVickL3dNH4Qo86DbGKAw3SYyECfmDt5JqTAtuAUNkWCCAxZBiiLCStTcmMd9mZL9VFxShAVKCMFQDkqc99LAs",
  "key21": "3hGLqhxZkC2e61X66T9Hw9pkRTJ9KF5bDPWeGThXtK55vH9JHFNvYcEE1NjXJz426L1ddmAHsRU9sJdHFau9GsAC",
  "key22": "2SzkDtV67zryvdvFbVa4MaqyLwqL2jRdNhVkyLX8sF2gvJJVtzSx1xRwn9Nzc4VNJEtFqzUG1Hi5J5pmrrfn6Boi",
  "key23": "3oTsuhxNNQy8bF6LfvGeAUqoKSungLyAFbfjHPp6nt8FbAwPCUHXXPjrbTVzSErSc9LGkctfkbVkKLdhwsQEyRwu",
  "key24": "3F1DAwjH8CXE1MEnBzrDzVKmxkMZcd9xCi5R1vC9cNvyGQ1dGnSs6bKAMZnrFA6R3ZEEMxEJCP4zj1BgMo9uB18r",
  "key25": "bfkG2K7YPEiM5SJc5kCc43F6EZoanuGwcRLFu4LuZYo6on8TMnMfu5nGpmoLTqGHgRDyJH85dw6GkUiyVsCds2R",
  "key26": "2iXDTcjKjbsP6stx4hc5po6rQgVVghE9hGJkKHbnByexDPrJERqFksqyNYxFDYVi4micfanYvykrfNjR1U3jdBN",
  "key27": "3iztUzFU2AiQvgJ3yNvJ3s3MF2iWmBdBRMnMMZUhEkexVhQP6Y8614settwzywDnnoUff5684vwcD5tHRSQZYLxu",
  "key28": "ALs6PUM2irtGPFB3w9v8nENGC6TtFrRV4pLwtMRXZGgPiAJqV4YiMSz9hSxNMsMtoLpAyAvNgZxrVKNR117uxTq"
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
