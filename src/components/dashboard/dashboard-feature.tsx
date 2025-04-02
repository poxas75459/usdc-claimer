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
    "25hm31CFPvbtfYxhTvHBXzHdsoXwUcbJGcxEAKAsqbfZUFbN9SEyUtEcKGkU5zXawnMsrG3bd4BGHox24uzcZJU1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "555kGaJsGjUTN2mtWRJH8cuexmwz7KhJhiYyvKyutQM8sPoAXcDwi7VoekP9AnLZqurANEdDYPv6ehGB7JFFZ2bo",
  "key1": "3wiJjvuYJYkuzv8RuzBEyY6g1VLgpuTkvUe3JQCo1aV49bdoX84PhurWmfiZRZB6hpf2ieudBg2215mnuKKoXV1c",
  "key2": "2W1mwwywWGrzLJt2v4fDcJxPsUAyN8eYtkbYFsgFXGbn4rJd4baqN5w7dhpeagYQPuqL6yUwexiJLrLT35AjVjoU",
  "key3": "55oAhW28f5JRLuNmhH3KiFWxFXiyZQb2nGo9FxFeahDrfo6VfJdRJ5P76RMCuduSo2We1PKTa7cbKn39Lj1dRMCd",
  "key4": "3hf97qZTXr7G2Sc9EkkpyKrzwgfPNRF7cm8pjsFw649YhostyNWgZhqKweJYfS1eDh25Dm7joCiWJGrct8WiWwUP",
  "key5": "XAs3mP8Ptnf1UBFLiKTK1eFHXDZtm6riGtaVr1u6LSXh4LpaW7tcDaaRuZW3UU5QgYhMwDukMbFpRDq1N6zcPZY",
  "key6": "4btsbPtDvR3dGsMy8ZsZTKJSdLwtABEa94RWCVGeSLzYNSVwGVcSaeHLUwzdZQE3UZ9dEjX3EWndAhViLhDU2Gk2",
  "key7": "3KVXysGfDnvq1YTxpK2arsJcMV3vt68nqq5No828WXC7F8hJL4ndHDmMBTJoegqxC9vG62o7tcC2TXjzVzniohA",
  "key8": "3BmQiarhWBE47ZMBnGasX3yH5sNoA2DgBszB2xte8UUtEr34MKvF5FyotTttwb9NjojzeV6h4GwVtWUhZwKWdNBS",
  "key9": "n2X4YpVoY5ThsLGECvKdhBqpgiXPZFjDphyAFKAkcrD5uJkzW7Ae4f6hVJZR7uoWinzJ6mnob8MF1wzfQdxRMXf",
  "key10": "3YtGbwvye94fPTey19CHzrHMiGx2akSNDDZzNMNpEe5F1n7nvoepnKH2pYxcgb8krhzEKFnLdnH79tJN9xdvHjGD",
  "key11": "2i4sgJ2eJx2mvykjhP1J1TXxtaMZoLN5FaMy5gfX4R5G8KpHwodJnSt4sc7d7P8WxhAobyhGT7wQBZmFtFB2co6F",
  "key12": "4AjkswezcDwpZGRUFeV7Gih6cff2DdVawRa5Un4MwKFgpkbQf94Xrzwxk6yw9Z6y116ZrvnXf3h4dQYiYe8sFBrS",
  "key13": "kLFumXNF729BEf7qwN48fYhkE6kt532imswQB9gAdRvbdzdU7ZAxcws4zTPzuu9L4qSqDqCbC9UVYPy99YfB1zR",
  "key14": "5WmmfFpAKTjbwxQpT9kVT5i2ygx1EdoNUurH4cKf2P2yLKHYxg9oo329MjVtMXhy89nM7wsF5iFkwhBCf96Nr8mu",
  "key15": "AjW8RfErncBnybXB7waSaFTYrCPATkzbGKz6x9LUmJ4gsW6LVqbXMagxXyczNnPMtP2jyWobZFQaud4Xzn9gk9C",
  "key16": "5k2EWcv7j9YytZjANWUh3wd3C7tK97ouUn3YDj3vcjfATEWJxnYYsEtbmtfVfgLeyG9tK7832ZvW7yGGdoXrgNX4",
  "key17": "5Sj1x21kGUvLwYpEgiNngtHxWfFwAPcSv9Kat78fUHe8BtGNNQcdjbiLraaNd1YSap3WzaRmhZNDDvRb7uxUSaZi",
  "key18": "6JrUWEQdm8VKbiCFGoruMtP94ctFdeVqLHE6M11r5cngYfTDmQfwuFkto8se7T43nzQEZAokHDx5VAuNWMctnFY",
  "key19": "2h25wcKpJozQaGuiLggi47gKcKTcNi6Xmw9m5UryMDuFAZsThHA7sBs2FjBxin9yXqHusLXjDrzER6sgyJyG3rrC",
  "key20": "5FZBvPrbbawZgPH2yztH5AVL5jnAK3r3snkJJbErk6rD81oUH8AcStw4A5Bhquqw9CGZRz19PorKfy98x3FNXuns",
  "key21": "2V7MrK3RV7eN5LMGGsmjkoKduAYNkukQUgH3SH17cPMy9KyovCHtDMp3b9vPv9zZfe5Dn5ygdn7crtD3M9zDzhrZ",
  "key22": "3UffuVUhmKNytS5uia4mwpL6u29gqtgp7iWDu25YNcjMv4Tzvn7crVjAPUVCZX32AXT5dQxhzG7ZptCe7wPr1yC5",
  "key23": "MAefjqAAN8Dg8GiqHcm3oLSr6jBmpS4poykM991sgEdAYbyF31wYLjUbLRfE7rCxaMiSepUrmLNEpjwLK1KcUMU",
  "key24": "3ZK8XS8ymLf5v7BadN9FRieGPfEityBH3MSuEHNG837TKcqsgZFvrXbLMH1nDZedGyALRJJ5RqMYyyq3pajJAtv9",
  "key25": "2LQ47Nxq7W62KvNim7EUWBa38QSvEdteFgxywMp5tyiSUxy5mBb4uKDC8PJLjH5cMKHgchSrJ4RRLpyszfxU4A2q"
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
