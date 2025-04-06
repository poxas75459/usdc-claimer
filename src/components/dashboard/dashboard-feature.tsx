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
    "4hENPAoExAozNkVVaL4QCRBZd8XQLN7GR5CPSRn9c2srtYJjokajDgmG9as4x4MiwddU62Bqe46TLin2JfzFNszD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gR9rtHoAWLzZToGTSYJtSxdhREkw8hJj7uy3rxMvoN7r7txuAumgR8zKhHAUdhF6fHthofhaTff3aQ7Aog12pq3",
  "key1": "2bMxP8dQfac5N4S6rkiW7UzjhKsHz7DpP9KsHwgRSfgmh3Xg8FdS9WBUijThKByqgKepMDUGA5i7jBBQZX61c3wz",
  "key2": "5P4iyxsH5AdDNQGuwt2qRSmWvWqXSwsaiBwWdbPrMkTc6gRTQLW2orVC1gxUXLzvGmD2dHnM8VyPvR3M9grjZoYi",
  "key3": "4KuHxWAwnmqCW7HrzLw9DKa85UjAG9Nac23C8FHHDAPGeYbaEXtDfD8QFMhRPQL7npetwZ2LZrkvNKGTUSTpipuE",
  "key4": "3kXP8oDSXR4GS9zF3Lemzpy9cbyMXp2rhUhTsW6v4VuURZy5TERSYxBqrTpjHmfMvaZeZmiP4tw11fAWJi36Rz8",
  "key5": "5EQkbnrg7FrAgvyUjvfx6A5SUVyshsoN5rZqjAUzKRWETvddqFucfqQV2vkAA3VGpAruX7Ygcg4NF2FmNDYUiv2w",
  "key6": "59Ecx3nVE3ednGgbkRtDt2cVLLpdBV9JrBQuV4ovDQZjSgp3fwyPr2s7oAcHGdCmesZboNw5hcQTXLNnsgjRZpqx",
  "key7": "5FLU1oJ3pf7h1R8sJXXJ12T6QfEDzJD4bLAcxkyzzZ5FkY1SfoN1JMf8g1764xQDjEKe1uS9ACokdoMi3ishu7sV",
  "key8": "4ezETh8PSjzpu5XRvZ2aqWetCAomQxcpDSjfgkoVnS5nE1uWZvAAYPM3rCeboxxjBN7U415ayjkBjqY3FENqEPCF",
  "key9": "5SrFx3SdMK7GSueVi84Y3NW3R2akWrDetqokus6aEDGNEEEkN7JEQPckRLfG8gq4mn2TFxnzkJCQAbgScppzqgiQ",
  "key10": "2A2WchceDX45yUXbapsmxVpzyb2XzpE1vcJYyj7cT6VnmqtZdAEKsiuN8yESiDXH6oAixWqdY8KNPdm3Wh3cBYqg",
  "key11": "31fe3jxZUirGhgzQfRjRMASpjcbq2C4mj97hWNu2ttiL9RaHy9vRsQD1Smmwb8LaM8rXfXBVKWNH3d7Js5RGUBjo",
  "key12": "5xLMcuwfD4Dq2XJrhWZuWwM6nJHRX3YWUMgm4nVKtt9XZfLJ4f4KvpLC6pderARLp647WjdV3bv4eUTabkVkAfC7",
  "key13": "xHPCeBfjSutkaxhL9mzbBowjea2NKuZdiBK94ocP6BjMAMoQ8UQkJ6bBtwKdnCSCFkn2ivQ8LMFEF7zZg5SMrbs",
  "key14": "2e9MiTXkZUrzsDsaRqwPU3vcAovZoQu416MRKM6rYikeDRt6KMViD62fAag6W4cPrzeW7WYwKHa1g5oS6AzpHXnB",
  "key15": "3aCDMb1kVYkRcJzGPvDFby2Q6xDw99P7ZjnFVMRtSYvVBjuhAezhrjFxNr3euoSqqVXv9Lxo1yhFBPM7wSZB4QJE",
  "key16": "5KHVs4AyXfPyYDuu52GQQq1EXc1DjDXtEojnJ7FaGGgpYdDEdDNCyD2QtiSt4dXE8CfPXnZBeFK1LaochfEaHxBH",
  "key17": "rrdchUXBh1tFxZUC9kDMWfeP7t9EgMVB1H1mELo4eRTsWS67YdCAEYaoLH4bFfQzYj98WQGwxDd3Kj1ao9jkei3",
  "key18": "37PcKFrR17Q6PYVeNDtDQWcE2nzTSt1VqnYqjYFELkcJ53RzJ1ityo5hzqa5wKtDY5M1iEB9ATK1XCvQ8RPkbE2h",
  "key19": "5Bv7gqYnLbhDjSj7XjAAPLx6ZwV7viVo2PYenP1YuJKWEomSrB7qADtYoPSUZm8uje9wtTpqedEcEDmHES7xXARp",
  "key20": "2Z74XQ8zwAbU3pee8Nix3GGSnPw4FZXEJhup9bEcPLNmQpH6PPpTZQoYd1MdEYPfsGmwRHEcX6KN8n7YFE5ED832",
  "key21": "3Gc1BVigeBHEj15fj2D6bD7UWq1QkHdbBXeTJ9MMkcZAuNQ4moKCa35MPiRLR8XfNRUKowdTeK5vkX6qHQE7XiK3",
  "key22": "3Kg9q3aqpZdTSVxwKLE4m5Ua8X8KUYL1dfFoUijhUZU53pZfXrN3bushPKk9NoG6aYBYV62hmtmQTcvYrn6wE9uj",
  "key23": "5f9XVBptDMRNneqpbLrL4wTjusQ2eYgjoZVZVJi7ynDvPSdCRLqrLpY6JrLczZu4goF6pfX7Ee2FckH8fkw4VNvL",
  "key24": "2mjtz4LFthzYnhZT9u5bwXztMVTo9PVeDmJfhbJFYkoA7FGShmkWT8PpLPu6JKcDYf2d87qmA8hz8YoxZ6v41Bj2",
  "key25": "XKVLkfzv1swBC1VW6FAjf19y8sVdWaiUAJoGSjL3jXHZLdcothjxP7Xv7mQyau1mEPdwVTbedN1fhvURVjsHRiF",
  "key26": "5BwsrP6rhtFFRxNba4PBx9txLw54oqezacHuszEex4a4R3vtLZNqzpmL4eDqSR8caoNCxGiW1Bx6b9cTpX2j5j9s",
  "key27": "55hidjfxuabtivvxdHWutEVdc1yPy5fzqfRFRtmYCK9UyKywxU7GmqAJL7UT6cEToTWkP9J2P6msnzkN9v7yUV6R",
  "key28": "4DzJGUbKRFihoUXwT5sSKFpYoqLrsmzAR4auhpKVv3694B2GSxjxeWyLnB7Ptzj6MJi6jiy8Gd8Qz6EZLtfXoL4J",
  "key29": "5syM5S68nqH1rqVxzsEqh92aeA1uf6D97sA4U1Lhve66WyPgwBTzEKxcbK7gVf81njRZxFXKV3VXtKLZkjeQmX3k"
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
