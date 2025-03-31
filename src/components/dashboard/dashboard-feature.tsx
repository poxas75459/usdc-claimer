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
    "4b6JVNstu7Hx2LYPg6zBvUTA8k7gY1asMM2xi47pp83sQxLGdWFpdoGa1kmyo2eYqB3KrzXewpwkwpSXLAwwqh7Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HMxGVN3h5UXsHhoocrTSTkmk7mBbS8Ah9EahP5r8rAthz7Vsh9nffbtyNjTk62Q8F76varYuHMsjTrEhkye1k5z",
  "key1": "5jHZYwqtLMsYky7qCodFyEhYh1pgTDypi5Xq4m9q7chrHa8K6NmbU7DLoJdmoNodrYEf9M2Y7nhzW81zqiD9bSzq",
  "key2": "4SaShXDrjoxuG5NMQy6spQZ8pkGr5BZz4DxHuTAKH92pPdbhHzcg3S7gtQ2GEEi8kA2s52LkBSbF8ceUFfNRY51W",
  "key3": "KApR7SGuKYSXX9aLVdUYTBW8yfLjSBKCYb6dVXmF3cqfiTi36RWL9WVAzBT8qE3r1W3ABCKwaTcy33K12xkPNeW",
  "key4": "3GiYdtKG7TXTu6c3wyXg6Wuq3mHjQbZfxG1HZmD5XVaji23fNFp3sHgdKeJvreHAuHgDF44jvaGyX7sSZTnyNXb7",
  "key5": "5dGpQ9NKAazi5dDczsm8CpEE4EVhvPtbFmnVqd4ZxnLv7s6MJML8saew8mB1GPxZYvVMpBjaUrn1gV6kAp48RTUh",
  "key6": "4BPvCYz4356hHJNqYVENiuwP7x6fPnXHVDNXxgQBbS22FSMBEA2gV1jnRxcBXEht9mBJgKt4jJPngFzUV4Kvr65S",
  "key7": "4f4BQtrDJcGLKPKC3iVKYXVhMRsaatRqRi52QMuoD5RmCkFUTBbBYY62DMwcdb9VeNxTx8ZfmqaegFbq6DKK41pT",
  "key8": "3qsK7ANtNiUypAJHSmtXK1L3B6WDt6j8vrECegM3acPwmrbZdYxbBurUeYvu73kobJqDMzAf8v87GtfqhMjjfnKc",
  "key9": "657BK3nbmBgBpeBAFvq4XkA2WrWxaX1sPBNYRViazeK79smgMRY3ZxAoDY63hqynLA7HziE5b4dZxMyxMA5bzhhk",
  "key10": "jCMBAWFCPtcLG1SZYmwAx2Ng1K5rGB3dT7L7TFQCtG8DV7xrh1oSmYQWAyzqRHjaFuRTRwnrc3nWZg3v93yJwzG",
  "key11": "2VnDkskA72BLpfm5f7QFNmcF4vy2WDQ1VQLRER9gpv4HuQN6M3wauv7LJg5UhzyZZzpLAq7kscQhSfi8PvnM8NSc",
  "key12": "v8bbCfV32dXQUY7z7bETEHpN16kE8XhK2jmq6zjQE6w1zyCsCL5jwhqN5mF8SNsMBcRqy3WcGMMvviRgP2tV1K6",
  "key13": "Vtpui7YLMvCFNYWBRjv6H4nbEnDwYrmp2ZgvCD3Kc5EVuvp9K3cv5JQoaHP6eGEfNgR49csLpFDCoupjXFYoyZt",
  "key14": "4ybrjrAouuSxCNncSQViaVtxLqYDGxUR9MaKYwuE2GQ65r1ZYrZdwooiowZtcCUGzbD96w3iSjFt1mtr6SAJCMqo",
  "key15": "jHCct5pCdCQBofbEdy5n9qxu7Mypn26ryJdRvkJsiVYbxtyBK3Ma93MoiD7XaNctPUz8d3jn1PwTKveXGamMaQQ",
  "key16": "3myaCoBtcQLp898Bt923ggL4XmmStJPuYTqJe5VnDucLyufNvfx5ZpSEUgECR6LqJmWH8zVKoLEpDrhDurxx3JFB",
  "key17": "AtHvGtweXGRW1gArviV2iaRFK5xqXCSrAAdtmEaUG66951Z4dKfq267cWNRBjQhdgfAMhK2PHXrW6yvHydC9ppU",
  "key18": "2NYEsRRJsETbVpnjNfEzzgDN8dtdtNkxvnbyjsFnine6FEKm4aeisSwftTs18SDuzjCPDePFopq2GVzeDpEd7rNR",
  "key19": "2CMWV59rTGBWLJXQp6zQvQUKbgXpkqE9DLV78FCCeVazKjyCGmANCMt8FZkmdpLmNyxLWtGwrJ8QoBWUCshVseF3",
  "key20": "5y55DTwKZLi6o2y9X9wBXptTkT44jQqk6RLBKumAyE9Dr6KdiHM3NrqjCWZgAnqupn56v8jMKoPQXNNEUk2LzpQJ",
  "key21": "3QJSDK8hS7sXARjwpt7HkpozGBcojSLBa4u28crU7B7JLdjaaXpRrBzr4ajm5nmtSPnmGgjhK6KUkucaes7RvNwS",
  "key22": "5L7JtPtxN33Cmz7b8htSnTaCfC4U6DPCxDxUsUuTwUNkpekWvGMRK5SzYfx5KQnYPnBd61hUDhyT2j4i5QxcwdXV",
  "key23": "3r7ZpGLgmR9dsHpcxrXtUeEbfcFpDqhUGKwiVzo1HRLfcju4YoLRoKrqEthAHbyQWfbkoNx6hs8PZ5tqVpMVc1yS",
  "key24": "4GCLjDBEMy6cbh4Q1GxCGzLAkDkzs2tbmnicUyPcJBWwSNRb1nTTQvar21Fbh5ZicHuY6xpJ8TfRwypHHTavt7JK",
  "key25": "4BbQKdFsouPznEHG9Nwdq5PJU4TeFge4ZmsLykNn7J7GJXPSEt1HN6iMzzqG5UhuqvvpcmfH9BcCDC4a9nBkepU1",
  "key26": "3nDuubsGNzPC2LDkFmyYgjZQQXwXKktYVffHDMFNWEgPnPbouxC1RLtTZbTL9SJYoqyABngADxjEPxcfbDsyMdAr",
  "key27": "D3dERM4yiYVkTnCCh1yjYKF47YuFimUFsQzt5Krc5JVygsMc7CDPjimYNpY4fA7f3UH3vE4Lx6MZxaz2yDY1yWL",
  "key28": "3SgGFFymA5uNM6MEXfqecquzDfCQdQaamnHsZD4iuUTYB8koBbkj5QsoV2toxRrJZCN86PEqQxvKRgyFJEfnwKgJ",
  "key29": "3eZBJAWiG1QYuxYjB8GTD9vqWaVKXYYGxcQ7Bfa1XmoyvRMMSkuVvvYdjCfkuLzz1sCWWgffxGx6wmbgozLsMaNT",
  "key30": "2TXvmf2TiZcyqaGSQa1nS1XJL5JTQDN8F4JtkjFmRmKeaxS7UzyQtw6n4DiHdoe1xH9kjd5TxWg2SLUhVm5Vtoja",
  "key31": "YpBC2MVboSvPvmcqgN4zV2ntJMZSwHGHUDrnoMwTYe1JcZyDdimvDbssAk4wX9MLtyybTTzMjCn35aGfBQkTARG",
  "key32": "2vZ5RtZ2NJ8JjBPrM8dpRcg7dcWMq49u4Tr2p4DEzc6TzmiydH1PUb18jZGXz9skFoMdsQoUdCJijpG872HpHUEV",
  "key33": "624MLDbnmqRHYEYPCT9QuAryEmvpysxrnjH86uZPDG3GUBcU1hwZJiW5BdZY4FkbNaBFiZMNU8NoowJ4emYBH8Eo",
  "key34": "423eGMad48TbfKwEgUBGWm3tFPLaFtE4JnBC7E6pxyKyu7VSEWJ6RE9KQsrw3cxX8X26A8toGrTrLofHmS3QN97u",
  "key35": "3mwpHmQ6AgczMdKSDEE3Es6WphVFP2M4FMdYQuhk6YHWLTBatckBGCgoysJp4mtQtbMeaKRWmaPDhLt5iLy8GiXa",
  "key36": "LK7ccuTi2qnyiPHfNAxXdvRGqXo5PPqxbMagp6MsLMuEEY7rDDtYdVj4kUHpi96rqMxANQCSGZ5aGX4y1KJk6f2",
  "key37": "2tHGTjAcQ2g78YvY21szXZFG5Lh4PAqmz8qZihdbo2Rz1s1LSotGADBdj6CfqGuV2sHqr4h7RgKnLGckL9UwiXvv",
  "key38": "rFrDcrPYVkiyvheTKT7Qf8HhxsHjLJuantmSnaUuomiTvFNL3ar7DsZwC2stq9VxJkAhKkfmq2PqsAPSfMnS3TU",
  "key39": "5RSGStiCA8vd9k3CzsgcRn1MmuCA3iRC8xk9UXtcE6E7U3ZFkosEpvSLEGUq3m2m46NkmuouhoR8Vk8aUKipFSAF"
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
