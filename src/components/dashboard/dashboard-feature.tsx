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
    "2KMXZHUAuhqgCriqbTKe4jUZvGc7Dc1o348C2qCRQMtvRE57WZbdYyRj86Sf7FqZjX8opxD3ERAAVxUHqqPi7EDN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eiUPSy3ChardT1CQM5bv22eSHBEqceezRsJAzGeCPWvST322DAJo7vRCGya1JssDa6viEccX2iupAPovRt6z96H",
  "key1": "57ohzJ7Py8DzG9Xh3f5PsSpjLzyMVVsBg2vhY2QrtiaXqubSjd4GPKRMEzTkQXhuvQogzS1FPQFV96BibQDU4VSV",
  "key2": "2g6gaQZF2GKUj9VTLpYW3cJSE6HG6XHWYXWmwAzioyQcRYMPsM5T6PtwStQci8YRHCZWHGEtAKHnVKtqjiqbheQk",
  "key3": "31yykpysRqLHVGTLE7UpwB7JdxQbz5iBdcVja6VRGZRxidsDEftWpPFc2VfcnmMPpTRJXhK4iKVGbBunKyukgV19",
  "key4": "5Rjg86aA4bQ5tmn4Jrad8oALWvrJA9cayVYyG9FwqXvFApi5EoKuhkAQYEnfH59g6DPVxg7RPNV4HeAkpCW8iCD",
  "key5": "4yWTTbM7Z9jwBCu38vEiobrTvC1SFa1aKPJBrrNUSqccWqfA2MBoPfDGBV26u5ztkVA1gL4ZpGyAd7cLRT6CZh4i",
  "key6": "4UEWqUSF5kxUKwEn4QXjnuuJV5zwFMdVoWa5n2SZ9CZqKWDy8uPYpEurCoHvTxYHTvcLrJoPhABJ9PZ6xm1LJbBx",
  "key7": "49RzdqjYdQVXPXVgw9rhi21RyUT7hkUrEzeHU4Z9BJUReg7FMoYGt7Rt8TTzvWjiaWcCicJ26MUqy6h57bqMWP1S",
  "key8": "353N78hu7sePXVH1fswQ68FGiTDnAJ4H95kUiXRj4dRF7NUojeXau6ts3JzMyNRoaVFzWjQiKoxZ5uMyRKqgvPfg",
  "key9": "5bzZns1HmMkbvN6ahgCBp91XSbRTmyurtGWWTkRaXryGk7ZH5PcYvKu2X7MbbJFotWwEZ8KkfT2yaQdmxtCQyyYx",
  "key10": "3mxx8wpK7wjAYA9u3Y4v9u4UeqEPZY4kXvdLpeCVGmDs3RmSGFwJuDC9eeCwr4nd6ARRZbpuX5GhbzBnJF9HG1gs",
  "key11": "3iHUV5QgUsRtchvWJQuKCjBpgSUSehskDxmawM9sF5zH3aogvuHwnXu2BKrYv1YtHfxjyePJVdkjMDrhMC3ZpUCQ",
  "key12": "5HhQg6diByrL3wuaAd9Bgs3Hn3iDUDY2TTaugNEKRK9X39BKiYSK2dRXwsKLJyJWmXCdBEhfuT4JwVE9mnMgYS99",
  "key13": "5M54yX1h4zSWC7nSUEU5BbTkyg1JwZu312ivG9Sis1u8M4TuNGHF4rpuxc46pQKPSrCtD3oSaE3k4dY84VV4SVuw",
  "key14": "3FCStko2PADWm5jUhKb5gKrwK4Hs5jeX5xoouTzudzob8ogfCJ2YrEbZKgtk4oLPPv2kJY73YUXhQZWCsnAdhK43",
  "key15": "28hVZrP89HvnipGNjXzRbNTn4fc6aFQ1wQpvYZWigX9mHTA3VMK5H41YTvYGY4xNbBMJmtnMSpkSLz8WgkQ7vexK",
  "key16": "NV3113TW11BiYp8m1q1Db6iqH8TtohyN9zBy2kWZr9SUuPtrAVi8RkP5pWsdgvZp9oH5rLDmfJsDciJTf8owQiL",
  "key17": "2c3Br4vi9fze9Hpupoxr4hR9JX9YrksNPdiA95PYijFQkEgmAifcQAhoBtqj9miVECQdpNmGiT8rfPEZdPWm32Rb",
  "key18": "2r6TDLK5yYWmJMGRg4ehuaZGVnGFfqjBTCfpn7FQWDB2dU5MurmvZh5CEJPyVcxvB4VqsjEnJgBKEfTeGwLzh9yR",
  "key19": "PsqAvMeMteCfm9sk2jxteZY6SKGWcUspBkyzzt9mhzYmUGiuQi39CoLxmp82df4MMtpiJjj9gXHzaYtj3Toi7u1",
  "key20": "4rc8ibKPd4q1JAfJG6n4yz7N6JXkBC5ikmVGAbRsbfE58FwGeiYjbwdAhhG4KatyJ3WWYw2Y6qZ51mm25xHnXucJ",
  "key21": "53MiXM5WTSz7TddrFMo2r9cvfubahJbUSHJjKnAaU84bXrsMZG6DbXnYihP1xpcwHbB7FKCTGtr41E53xV9A3Yfx",
  "key22": "5qVd6k9f6zk9qUG6xf8EgFiFjZh6VfZp6ZKpYP1rSmyhP2M5WuSgS5QZzqV6KgAhqWFBnKit2hBXYQT4qVxRb27h",
  "key23": "3HQGXDXV3JwCGY7qGcnjk5TEKsHAJFr4tPTJ9BHTeifBJsEKJxrFDRZAbYWj7qB2kBxX5q2QcbSzsCQgP2RxC5WU",
  "key24": "4AzEs9Wctf376wC1gGbMRRjhjQqhA8wdpE7JidPPLSzkehPX2LFVJ5oggcJrcVhRsvA7q3MgcmjireFp5iY1HuUU",
  "key25": "4Kq1cC9dT5XoDv9m85ZFTNeR6vkq245b4w6p7wTa4BqcAPVo78zHbDL3MkpdFDfrVQV84uPmZYz5ax4PuvbafAtP",
  "key26": "3QnPTGcwUAKAAXoi4hyk1KhCHR3QbMhWxF7E7SiBC4wEcZ2Qpw26f29FosAoWAJvGKLcGtcXtYfxcihc7UQexvhp",
  "key27": "5U5ba12htbmkfVhYeVs8hpenXza2qeGt5vfTZJZEewnvAaHWtx2ztbom4qSmrdTyeGx9z3vszM7ovgai2npUBJjr",
  "key28": "vWssPhLtWfvYKhojr6nJy77cpkFq9ZPJjHPsnFBpFCrmuWugF68bBCNEuHhGELC79ariWDu9WrbieokxtZRHw29",
  "key29": "V9WyAh5VSkLDrfeGPu9jtv41s3s8WgUpGxB5h6WF8BA244G3A7ompwJmjVQe6HNjaTnzWqWwVetuZE8uxrnDL4a",
  "key30": "5onXM3WYt5EQqcaYNvqNq1XVkCWRvh1zXJTr93pRD5nXTqzQvggD5fHEkZCNaSrwtrmJ8oit8HGWHA4XGWSKHthR",
  "key31": "RFbzgEs3tgAtSpySWZwXK7tg1ppXPeCgfzqimiHLGqXy7Vq2QPpC9hnn9uQMKf5JZeUkBvCmnoZwxpzqaCy7UjA",
  "key32": "261EA4xpiRUsTwwSvnnygEnku85idcz7Skra3BPMNVrzeWdzKPoHSwSf98X9GZzF6NsbvrzwKbpf2hp4h5dcJgXM"
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
