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
    "2JtN6pbQWHJKT5GYm19bZbv9dxmD6Wwq3XskF4MuoiY4HDW42QFo2TqzwtJEhchzKrzNt8NuyNdDTfMpfAFmBEdy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PW9nfAGBZbk1MzGvrrQTESy94eMSug5sNLrEWeNSpjKBrTTnP2i8RXCwsKF2NoG8ok9nPz1JKrS41bKs7CrEZMk",
  "key1": "vL3fAkyif5BPEauPNmfjixGHoqeMHetoY6y6Sb9xaFs1rqFB91QxyCucjxgrSmt4VjyPzFiYXevwp49rzrhEH2P",
  "key2": "3owxQHXUj5sWN8YsHri8XjKY8bGspbLHn6kGkn15gK4bK4hD6SnWLt3ngeXzUU3U6BafETvxxWC3nFGLm9ivav47",
  "key3": "yt1aD1jcML6Fhi4zcVmfmznYCDDFbRBG4MvUJHNoH3BLduw9Zi3YXBuBQ1Wda4fcUZRcLwUPRbtgbJF3UrxLDRE",
  "key4": "2Dwarfvbg6mskdZ21A7HkaqEF2CkCuGWKiz4HCWR9VVuJyYiThZRfRuU8DhBTX7R4LxXqGhgMboJ4FBvzqJXPJ4h",
  "key5": "3uN2Eyu9hV5Fmo33ovSAgyNXZDATi4pQBb7Aeo6NoG83ShsTtU2YizjDATJhXBPjLf3BkfoG2VS4RNimqEWCHk5m",
  "key6": "5CZ7frrZRVcUtSo3nXDQjUz22Ve8qmbm135qf5sfvmZ9C7DJ5mSK1gYGuyAVJrao6UHXG9fqrp8BjSXk75TZeNbX",
  "key7": "CEa9HJUMswebxUdS12MkJohqDQ6rCJSvqJQ7RtfXF7nahoqPZ2Fr7mZq9Ao9SNnvMkstsAQrveuDEYHDjfdVGkK",
  "key8": "28At2jEHnBjWotNvuSLSjty9AM2xvaqhMxamrmAKxnUrgSGMrdfsM3NnmCkqu8bAXq6jzqcwc1Q2Db9VJccBb3NG",
  "key9": "58PPbJhtaYxgpkDneGenVwKVhSxVqSjd5Un9CtKSYthY7ZNDcXUUGR6d6ePnXtWC5uoeDzKJgr56X6mcguHNr9rz",
  "key10": "4iGfwNbYHmRZsngoC4LFd9sKKEvzqjHWgsUi3MVE1h2HbD1FSiAJPaw3sHGA4PFKxi4cf1S9Q9F28HjFxWZC28cS",
  "key11": "2Dge3V6AD4k5697VZxwHpj8icEBGRj9fJavgGca7hGnD57dQTQAgEvtkhgnNw3q5ptnfcib7zJVsbRQBxeqkwGWZ",
  "key12": "4jcNowo8uaJ8rXH8eUTnrvge5zs1jjQeTwXCAsqsachNagyvD4JFKGp8ZVUjsj4sPDAiCQDhTQNyCUNfSsFsAQAi",
  "key13": "3Q6tatjcGQtRzB2BCTUZwfY4p422vWMy87McdReCff2QFDh7GLrnK6zvsRmiUtgcLJz12EPxy3HNEdX79zmvRpLz",
  "key14": "cGkVV7CXk39RfDdsZBqWw3iZD3khfT97mmFHEuw25SiFMJvAe5WyRMWAgWBcKNpoNvFEhZ92UAg7is2Kbo5bJq1",
  "key15": "XsZ7SmfVquG42JzR5bqZTVbFKDbXw458i2L764XW3N4Q3hUN1jJ24nWg3Xd2PDPv7fvcLMW1dknNXSnCWWxKckS",
  "key16": "4noZJ6eLTdXB6J37DFDG1XEa2gNKHQ6Max1JMS9S6gcfqEQh62SiqxSdYHdfX9iyPAZknsKMi4BnCghitCAepbZA",
  "key17": "5qWBKLgL6KACLQz9qxnj6fqMKDrcgKPA9duiW8eMeARxJCMYT6H2zXu5mARprvSNR3NdMJXoEsyNoMTJ8ALrnxUj",
  "key18": "5KJLrXS34dktJNRG8rhJnkZBeqjZ5pnssZvNDnxnC2koHDbdhfgWpyS551fU6CR4yapczBQpmfNu6KpWNzjfKUgz",
  "key19": "3xwUPLHES77JmhCC7Bp6XHvGsr5jKNWBLjCYxdcnJmcoNcZZeQbdHsJzQcMHdUzD4LKBMBPVPC8Cx567DF3MGEek",
  "key20": "3XR8dZJkYNno5TSEEExBspBgfMUaV6Gdf5xLZZWdg6jQDte64tfsTbBzAk4DsQwptfTN1nDTe6p7tTKjaZba5RAL",
  "key21": "q1SdjS7qCfkrvhiCKgQ35UDoKHwtRBqrxVdWqf6NNBVkYNN2MJ8KVZN5fcgBKLknikTQAHokCoGypL4WPtund5M",
  "key22": "3chB6hHcHg9TrTbx3VsMpquKrY1zHgBowyFPqn7c9XUwHStWqMwCp1N9dvAdQqFVZVgJiysST49xQ5x3xA2Hyqjq",
  "key23": "2UTixumrdbw6rWJHLfD2BjJiDNFaMwn2UZq4dXBgD2CzqPbX6tMnfVr8LtADyqtgum9HNwUjm5EEmBksjGyR9sWC",
  "key24": "2Dit4CmmhSA3TEUC2MyxG9mr4SL8rHJKkaGNmBQFi3VER93gX4ivqyWosaa5mvyZ1ghRMdZVnJLejNxk9DN59YJx",
  "key25": "3U4Vg9bNUJDXY8rfRU8b5D1pWMrxuckvcNgndxqXNi9rKkugs6m882eXMu79wRi3s6hoWArnkEQibtxMYup75Qb7",
  "key26": "2VVN3xw8yxV67rrLyB1NxpcvW482Rjw4MjZKA374S5DMTA8pCdJiZZo6GhW8izUCTToYccfg4bMwm3QgTKxfzgXS",
  "key27": "3aFWiDftpZVqcGE88A9F5GuBcrFFP8XfaR3R7jGfnpjg51ns3EqYaH1Pps1HtXwTk6RVuGt3SsJukEKBzcYkh8Hm",
  "key28": "4hXnf97QjzSXyAdafyKNHai5BCtDyuHpWzWReJBgGPCDGMG5oRnRzmCDLCwanqP6pzv3GC8sNDxRscmp17qE6uTq",
  "key29": "3pJ7aJQJgsiKYmCdptep3qGC1jLBE93xHevLff7ASiaFr2oY5mT3QXgUEACa2JX8qZHaLQSXD1U7gDwUftPqajC2",
  "key30": "tpgNGQaR9GKqCgs1CLYmeBa9EFzd2aphQfZuXtJbqiEEQy8oLgXDjtdczbjpqbdQJtUXcVihE27djggR3mwKbp9"
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
