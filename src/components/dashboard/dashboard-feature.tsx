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
    "2thocyuE3iwpFG6TTqib7NGrHDavgcDSSBFE8pSRWGwydCNjNuaXQzobnNyABUuwEjpJZrg8VVNPWpEavVvWotTL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qd2DGw2VKGwXqaqoAvXHtVahumtbFWfaXjmCSgNjtbxWBRxHVo9xQyFWbGLcZPKAQ6TkLW14uX8Kpk4hShxBwht",
  "key1": "4QsUjBNbXB9sQ1yBXwo4PD8yyEbutRG2iAnTUoJ7foxCF3w6cqkuMcV7U55fqu4wPBz6VDS1vhnAnBwVN9obccXn",
  "key2": "THbr6XvsLB8YRMRUY7c7HfQSSs41qwQtqd5toq3Pyjobub8iVdPbeUUKo474NbmSTDeDasPiPWBXZQotQVifgL3",
  "key3": "4sokBmNi2NDBqqXKQsPt8uAE8vWJR4qYKivwByt1cYqtbypr3CG4YMUea3ChCHQYLHY3ELdJKaz8HWXBgxVkUxyx",
  "key4": "3EVQRcRJP29MjraeHHTWn5Sr2YDqZa3antySDmyavs6PPvi5q4bX8WK2HKgk9ZoruHaRfmVaw7KdkB7wcPwLcfJr",
  "key5": "L3DgqYePLVu1sAVupMA7Lta5JeG83zYmERQsDxiGyzznqoaVHurctbpYuCWQE89BgRfb424Ax6kjtdEHuPX4iC4",
  "key6": "1b8dWguLe1YpaDnE5hC69CeXpV7YUHrVYVzTnGJGN1ua6pEsxGVa8Mv3SwgfddtkdWj6VNKPBbZcgegqjq3Kd6r",
  "key7": "3XobBJ3Kqdy9TLp5WMqEpaeSDhnRtmwton8ZDziFa1MFP6MF6EVVZd6qBxE9sQvXPQhKJzeiDdShrWCju83bD3oB",
  "key8": "3KxSYiR8DeiRa119etXMCdR4UE3FvgP1W6omBJD6CuK9NYqt8Ch5kkcJxFrcnDM6Ty2Fmz1C86kTo5U3e5TcrhHs",
  "key9": "5wKjeo5Bu3y9xHvuZHjS8SPhuNdxnNqNQG8e9Bcs1qtqQCJUhf1KaTk25kXNsqReUmfeF9kmNzA65KQiDN1syD8y",
  "key10": "4AEN5BERZdD2hhmKe3CjynfXiUA1jwuP7FSee2VvM3x3vWiUNp3LuDzaNmuw3A3Tcy4Yt2G4tQJ9oXuKL3CH5zgR",
  "key11": "yAEh4qLFYx3iUkQVXvUTjWPX8HuAFM6zq25fPggNvE6C2zV6rNhepDXbFjHxXLYzeRQdmSDWdPFaz4CpJAqxQ9T",
  "key12": "EqEgA3m1CRKBo5qEwB64AqffKH9Sfthyxhjjufd3CEwJKbMaQvQ8DauWGB28uTeUiUeDaua2TryYwv6JMn9dCCk",
  "key13": "4xxc9xcXXHkMfE7YEnUGihGmZYnnfenFT14Z5W2b2tehcF1SrG9ZyR4hpE6CaX93JvnkvXKT3zrNMZyoGJB6vavc",
  "key14": "4EUXovv2Ljj1qP4iekbVqKr9EbuqnMPEjo4fm8hJBajdhVDiD2Wwzyn5HtNENGteqH8QozUbsAfyHnDToVGXACVF",
  "key15": "5oW1w3YjrDudvbriqNajqF4jXSQqz37zX4DgFFhXbVDjGfJxCPw7YTxpRNPTxECkBEGDP3JWQ485mLCK2eE3azkR",
  "key16": "3Le9r4LzQjp9t2EAd86zFyVHnZPkD9prUCXU54aRBKA4kMWY1EBH8dp3w14HykG9fheRxoPDzrQRivZxvgkacSuL",
  "key17": "2Scc4gkznpo3LiorczoQ1ZNYQ8zTxjTs4qZe3PhYsuWbNCEaXbPosxF9bZQ5gieT8Tz879Xiz1AHQtya2JmGGQrf",
  "key18": "MxQznuud7T4DSQxpFen3nqcUbGw95oMFcpwoNxq29db67DL4cdxCeK3qLNibji5JJ17c6vdLEuQpS5Ffa5kqSkm",
  "key19": "2C1fUifQDVxqQohxgumkUGBgsHLBZLBWaLuTGccdDNdCQ7Sa5HCHH48y83KXAY2vauc6shbGSD2PP7MhFJd8MhiK",
  "key20": "5HGdAji9PsK4Z4yHCjfxSmxXCrGBwwSNwPiWgkRaikjj4CTKYcHwkWBSeDvH8BdsnLTdHHUGgm687P9kaEgYPxmZ",
  "key21": "62NKR96AWfn11RCfWoY4J5fUW4uGQJyCX4CQ66miqnuVphP4AyWLmDZ4p32KTXeWRx2muGW293CRAA6ZugEDB4uT",
  "key22": "2pyW2iEUyGbgChPJMHpiZXJifpDe2g2mZzMFiX2JN1bd4Dhq8N8QyJjLVijY3GVcTw2sGQtLJWBAimsrwx41PknG",
  "key23": "5CK4SWZorLeiWp2HHXfLFpyJt1VUjyfPjWMaCikUisep7MmzobnxH13TSwzusekzCsqaEqnc8qY525vpECngKKTH",
  "key24": "5AS99B1RqCb5RutbFJwU6pwGfs2tYDebaR6nZd2jpDvPP767scDHDw7fRpRAEdhUHJKo9YkyUX92QzRLykeiSQnR",
  "key25": "58HC7aQiXuMNpEmC3REK42YqnfK3UYbzkLNChVfHrhMde7pfwJN9HzvpU1SQ1xeRc72CDNPgMWXc1CctU2AQNypj",
  "key26": "3rU2DvBa4HwspseP9bjuz9mA8m8fCwCVhLFUavQZeR34L8jcaYid6PX72AfzkKVp1BwK194j5xBGtWfscmAX67cm",
  "key27": "3hDeaaufDK3uEG7EFR9bk1ZHEzQnzGnY6GHZQGMSo5ke6MBwQVQtR4i9WHWUD88TtsJv8Vi5abbYZsNAuqwCFF8C",
  "key28": "4ErFtyXA7XfbLnSYTrgDmUjcrhYDsuwBqdAo7icdgZk6K6MUYFnJeWDwJkGhqqrC8jHV4KQeJbYwSYMaa9bbkEn3",
  "key29": "4QCsadMKiguMrT7DqUKq6KBvqsrHWei25rx2XzMGhUmt4JcQx5QTry89oTsGekNipuoEfXQm7neH9LeN94G2PVAW",
  "key30": "2hGFMUo448ngPV5CkAzrw2pCyRNVgKDSxdFsA85FgQvRQrE2HJM42Sg3W51g7Es76WH87WshrDUKmDUucvUGudUE",
  "key31": "5yvvAjuc1TnKK8bwtTMA38Q29VWapwzzgFEyAppQ7v5SVDcuZUUMFXe2zksJzUyf95CgRbCnGS8zcah8qNvzNGht",
  "key32": "3tZZzzS5Dj9znDctHzxrf5j71QC862wJvD12WSRrYbHEbTMWQFfJxBfnUvqaGEdFH8CCJpbbepzLQW77C4kn2bQe",
  "key33": "2X783EXqgBQqbCSGg8ymMjdZAG8s72sMU8WGvnYLNpXoZkyfj6NuJdJtDeXHDJp6v5cXn5fxdftgUXLdveK4KqEX",
  "key34": "5MshEcB2kv3i374M5JUbMZCjqA41AfCFbQR6qUhKmBtihoANGVMksMG47gEABFV85BU2sNzACTNDevbgAGLpzKFG",
  "key35": "577Sx8ShqBx3LS4ZqcFq5m5b8AhBJvVTocGYgTpg9YD5uTFJVZ5aCjHrMWhPgcmhmdd9X8sK2RBuLfNkwM9dHKrt",
  "key36": "46CgMSZxXis6r1ZE5AMBQ1ShE7LEnrDUHbEpMvDquckXpb1Y17iztyD4XKtEePjWH9ehXbVpphKJjXbJv7TFWGy7"
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
