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
    "5F5i1RucdZd188Nc3a66ocbxqdWv861iMcRHJE5Rc9LhUPqioArqa9gNMCafXgAU6KXPYj4bfwGJMd7bZ2b2NBvh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s9Ld8qvqXmWDnJzVKFkyb7pRmzpZLtA7a792CaxDFqsf66bLZag9W8rP9DsrervPTWgxsjW5GEVWr3sGachj5GQ",
  "key1": "2W8K6WdBsyfjAKuLwPJp9XVMoqPmwU7y5WmmFsd3kDkfm1LSgP6UN5efB818zXLhMBX5UW8hVid5YEEuwY2QU2w1",
  "key2": "vQTDWLLgqLiFZVNhtemj1LBCZsFRoYmUi1zkNNnW3BiHdTcz5fCBg8YBrvoAaZLb7DXcVxPitZMiX4jRkQyG7zB",
  "key3": "PUX4PwxWh2ommtF9fMEwJoVPokMFb2aH4bGK4WkMeSwTnmCbXdkymriDKeYtmN5GFZTaJqToxXC9U82sD9scGme",
  "key4": "568FCrQHaoi8Yj2k5gKGXY7ZKfUGj8ocFtGgzVir3ygsP8tqwJ1pVqDHoFALcjFdi91C1nSxaeMRhJ3c7GsztVAN",
  "key5": "43bf8ExWVB3itHk8Gt2kc3iCPCqbnZMzbGHCLwgngegRYpZpLLKnatVbQ7bjS9Mv6DrMDwwAhUYXkzKz57zmfjS6",
  "key6": "3p3JqkcmXYy6qRDeKvGLxjTdaKBv2CMWvhegm1Q378enV2sXP2Zsma53jY9iCGuJe3zQgs7Fg7MTFtDLA3kh7Fws",
  "key7": "3hbW9pSYxLMS334zYWrteyiCt3z7K3pdyWhZqwuGLDNxqWfKpJPrrCPLbm3JWBtzcejQFxXqJ5hm5B3FDm3MESWu",
  "key8": "TW91jpLydJ2bkfav8jkhCMwAMWrAm7kU21VUaFNYLGyf9zxkJ5v3MsWeSmPYvM8XDKhwpZ9Y8TvCKPcvrPcpzKA",
  "key9": "67JD5q5WmPPDR79t5k41RqNvGxTve8d7mYCDmbWD6JPs9DKfLU7v9zFqr3VaqYuZnUapvDkpxYP9g5sKnCo4RVLa",
  "key10": "5KDbP68XfXoVU5WFshd5gjSUrY8DMHu2FJbqadGceqPLLCb3KDFMThm51hZ6Gr2wHsUFDGNY7nDaC2ojUKmzsdB8",
  "key11": "36VCdMiizE8sZC1TPCvuf39gcsmXMoUBbe3jwcyhmjmKJdguxV4qQ5X1V46s5Z2CyifH1E3A2JVGzkWhkjea1mvC",
  "key12": "35Mmf2Rbm7t1bxtooekBqcvfgYQSauyhPD8ot4xbQCXrWKbigH2GrPJNG4pkJs2cNbz6N6hHNjaWVf8HWUroD3WM",
  "key13": "fiiyLGKS4aPJh3pFWcxc5QJG6og4eSKZv8T6m2bxoJZ1ukxgvT2s8hitkwJytV86nGxGp54iGjgfGGjE4EkWh8f",
  "key14": "XLADEkpJqPFNAej8MqK4aH9dJqrXk68RdD7L1NY5k31AZro5PHcAec4HSz7G9f3rq2cYetmuXdU7yABejCBwD9F",
  "key15": "5MrsvHZzPh3KCkaiJPuBy8nwLNeJ8yekktD3tGuwPzsQEdo4R2dHA8XMV1W7Uc68ZqrgEAEK386RRNgFxmAoHZY4",
  "key16": "1xaXDNVduZp8HhZdaAmaidfC9QWuqSeW3RT2NkujhxDSFoo82KwdW8yktYRmaTR3zJXEao9CT3iVPdBVN6gxvnW",
  "key17": "2W9dHTS7Ebx4ydJoXdsrTqmsnnXh1eGiZ5p1q54hMeRsmdt16zzpoq8PNFsL8oim4Jp67iXc25pVLW81SeEZJLQQ",
  "key18": "2r49ukHCa6WdqJP1oBzx5HSSndSSZCbKDmLXvMWtmCyNCNKMJQArbkfriDE8JbbRyWgH2Rf9hqFgL8EVtuT2TDpx",
  "key19": "4M3oYJ8x6s6xWmCiPs4U2fQtx884hhtNVwW6v2eZ7qrvGsEQk85UiG1MVUonK5rTjN2HD9Ri5DmJ4satPBQAbBFq",
  "key20": "5irmngfQbj2rErc4pMXiaEkdzqkzyuekZ8ujam7KXCDygpPnYsEga4fHsX77aDRvBfgpg5EDvQUHEdsQu4Yktjex",
  "key21": "2g22XnjbqFFjmfP8BUkxmGk3s9SGu7k6FnD5b9wzdWDiFNQTWH5Cgr3urmUKU6eMoiNmebNPMZv7geyarDsh22jV",
  "key22": "5ffkvYUqZAV3w7XshkB4dy8kU7EvgL4rreCcyfLWt5e7sNdTpgMoxzNVNi4jRLwzKURMk9A3Ao8HBGv6hLTK77qr",
  "key23": "K9unKcePmUEjUVoeboqH7LfLWuFWUSZdgbA7Sc5LRZjJgYgN7GwhpiTRdN6sr48kKDffWe9FWs7HMPz3QttP6C4",
  "key24": "2PbErYez8R2B6iUiBwkEUDRXJsfrrbJmYzcnV1j8tkTua6iiT1Hrz86BzH41Hhgz2NSqtMkWjn4wVnhTrb1WbAw3",
  "key25": "44ckZ8xoqXUkM3PEFrpbfioBFmDZSqDkp1tK1DVQ4R8Wu3g1z4ZXGytKe3HvBFCqktAhjKDSFvN2XtwvBXYkNHKm",
  "key26": "3YXRhK9rQCWHzGzhmdECxuTKCQnd4rAbTxdhdhk4CxDSAXBC676BLXGQz7TrEhxFAersvPb2kgvN8vjqh3pRSEPn",
  "key27": "cPqTQxnVjWKA1MaGjLbyXZknyUhyuJL4BUS9DVe7XDR6pw1jZBNEk2JPHrQfAUWcJ32sQt1bHpnuwd4HtqKuoxc",
  "key28": "4rBx1DTTt8Upd9Ngxz4JHiLUaLJRRw2j1j5ZAN2g561Mdtq6ZGSuEAMTyhSBdjwLGfVWcbMPG2329YGGMAmtT59v",
  "key29": "63Zf3EiwBUGyMP6DCNfXVZV1hwp595zqHvQ7BfkxDnxydPbMQEoBm7PQ8gMdogRGekM7EbHW8tANMBigvkDe1wBs",
  "key30": "2pTVjGSiDUtoG4oszYD7NjiKekLH1xUTq5YH3LW7XMiMw5dgtwVk37aCwpvYU8S1jVrC5oCN3oU6GBWV9UnF8Va",
  "key31": "5WiHRiiD2xW7ZmrhKe521rc5aWQJR9jmkuFhyFvHnmbYfFSSk77TbdMBAYkRJigpHCcTiUFDyuh323AKKbwVuRuu",
  "key32": "3y4UmbJGCNQUfGfNKDE1ZCWVvMd3dv5LRhuhqkhpBkVUDduQHA7epBS4zfgkUdmqJiVhp21R8sh6mxCjHWKCvi2W",
  "key33": "jmeAjpQbFCKw2ZMcMquJJbaJAnz8qL6kcgLVY3hJG1UWmvULNeVcFfz2AhVWRt5ZAAEG5erMB99nhfFLCWHTQMR",
  "key34": "TsULZE5fKG4T7v3XHmgqc6MuwzpG8kjVZUVoenyWufjbB5haSMg621cCCmvj3Nh4BqQ4FKWhyTsPLeC5GiqDzGK",
  "key35": "cQ5skp1DDjM3cWyzA5xM3h3VX5HzMbWSf17c5zw9LRoaxdxSv7SYX4gDUyz2cnFfWtXvMRmyTZEimAwurikEAtH",
  "key36": "5urAPiAECu1ESutfu5YoLD2gbxd5rRPy3u7YaHQdrh4j88bTdcH8BaR7uqDMhHN1zjfCHbBXnC2XZEjn2DspGbP6",
  "key37": "2nKJirABvHgsmjiEMS9rY8Ghzxa2V3YhU4cPErFaUPSLDktZVKVox51RLvQyBUs5ypmYA4i3eYpbaHwrw3tPJvNc",
  "key38": "3MFbbEg5v47hDpzCEJZeq4GUrjaz5V6HgYCAZQcNtNJJMvzjXbgd3Np25zfWRBsEMnoaR6w9EbDFxgjVdG4Wckpk",
  "key39": "3Gahn4u9H1pkw7Qtv88A4xh6SQvGPKqe241YBcbyKMuzxuetfJ3qe3L49eGQVCPMj4YTeGrW9CsiXwR9uQkBqr7p",
  "key40": "2D9WUwriBEfEzJF5DDPpMRxGRtzamx9bgGxqQ7gErqzMRkYtq2rkMahKU3TrzEssffpSCE763GinekFTWr2uMbSe",
  "key41": "3ku4kgnNg2iweNFNYLgftAggPWzK5LgsKaAgz7oaRQv2CwBABNhxoqer1c7oNexqhxvr6y3abgdvhgh5RUDycaQy",
  "key42": "2PTPyDBLK9Qrcj9rimg1if31TnYGzEShi9d1zdMiE4DxrfeUePUu3XjdzeiSQgpCUKSt4TBpXJ4qs9shffwNTJMn"
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
