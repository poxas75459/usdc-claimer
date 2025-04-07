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
    "gtiWMGVBu66yLuotDtxCBKUVfuH3niPv9FFsKbkXA7JwLTdTUbSsthdSmVVvEApXvbn3WKGrfrEur39oENTcxgn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9UHhfzstaAc3migTJVg8ihPk4frfP3Kiy1schstocV75nR7MBjfVNGVrxjgLLkSyGyeQDXwBvHbzKvB5k1Ezr7s",
  "key1": "3NaUryWW4oZtpYubjUFwHuS2BogzvQerGixCqnHYXsSNuCLCYPgDiZhtAEvHuWknZFqXA6pD5foXz8KwFCQfXEGm",
  "key2": "3HArT5v2r73meFpbjBpLgCv1XbVZB71cB8SXdmvWV5mUaLPPVoLfKpQh6QfypuKp92CvLihDeyWwuku9Vtpe98qk",
  "key3": "3WKMykw3K53k1RCRjMhBqJdD4UQVgh9EQawuR2wVA8dzb7YjdTeDtpRpvpcCj8DsGXQHHsWZxnmPwCLyF2comk6d",
  "key4": "5io7QhWBhgyns7UFvwHnGZD6xeXbhMn9wqSDN9G7AsZDz3f4WhiDKNMnm8Wdf3szmPhjHGytuoAL3EphNSPvuuUa",
  "key5": "3QLueHgzwPSbSJYDFov747H7MumEVWr4W9WuiHm5LQCsfFczS2xswWUE9Aw8DdohQ3fJD6cnX5q959kU337N87Sc",
  "key6": "DRUK1y7zDCwUczS8E4yDBibownPdysqixzP2FFCniZ1zUSGF4SeNWdyZkB3Kr1rpc7HE391K8Doe6kj2U9SHkLT",
  "key7": "4dsduVd55kR8sAUN6Ggwh6Sq2g3zWiF9H9HyBGgR74tUeut78hzywJVFdqr6L2zvjoaKGL17DvMFbpLDuQRvaTEb",
  "key8": "2cEs4Kk6RCSfpbwerwHtj5gxDFXL5782jS92w8UVsWzb5prfQeFg5bw4NvTgEgXQ3vwXfRiPH9xCc5UNZd71dncn",
  "key9": "4SUSGd85P2P1Ys7hu7ssUQjCZC9ZxdgkUwpLnSM7TkD6CynKXBmNGPdAm8mk3vx851UeQfn4UbmkKB4QDBsocyju",
  "key10": "5oJ2LxZhK81pe6fDnn8Leb3RwGLsEn9uknsAjb2zYGM19QzJx1aErk6DgXt8otBcmHhi9hFabTM9tvnCUcqayw8o",
  "key11": "4UFFnLgStMZ5CEmGx3SYtJoYQ4nVCSy9kHJmFrifdP96U7WncjtunxiYY793RYdbbzPHcGu4dycf6A5B8MphWiXq",
  "key12": "2Wm4qGdQTYEnC3f3mgh6Q4DAdNFPp6f2FpUxTsWVuNAUsaw3GrSrzQzMWeUj8GfaFMKWx7yWbJYwgm3Aooe5YDL7",
  "key13": "tKD8eUhtp4xGeDGLk44XCJshEovYyADPy7Q98H4soav8aNJqAchADoYWNtJarbV4okJtfMjv6VW2HKeqoMdjPka",
  "key14": "3L43nEged3weg87uCvoW3QvhHh6Vm2yeKnbQ5TdZZ81JJALioc8kENyeML8aiY25iJjz8bVmdSbYCf4r8hLtbbdw",
  "key15": "2eDP5LyiXVbDam7K6Sw4exhC5PTVbbRTKKRpUrbYzxwHqc8ESkbXvEocPhFJqZtmt6MEmK4dwAESTX2wEGUD8tQr",
  "key16": "5wvKDUhG6R3mcj56mXJmF5JoXE4z1iJXfa6wwVLq7EXKu34t9iUodEHdNJ1Xmzco1BeoKFUqSmhTxpMxVEEiQ9mP",
  "key17": "RQ9gk2u795m3crUPdYSQxgbT9tkgEa3vdhXeRZk92oKbgDPJoKd4VrD5XPa7SW6r3Nyb7PYYAX3TBjLtH3Pd5hR",
  "key18": "3ZjxT3CqwhufTeoUMq6fQx7JxTWLYe6LkBHfRkLunXgEJgoXH8r9sU77b4SEyXYKVn6k3WsriCBKbjGHu4ZNqaJ7",
  "key19": "3egahrxjXgaZMAp5Gv21bfVebit5W6hhz4Mtqnt591t4qfigRZLAZVjqoeFfoTCyNHw3Kqi2ffJtkb9Hjw5DecZq",
  "key20": "2c6rb6V2Wqa4qc6zL94cXRZeFSLDWgBK1H7xQiDFbpSzVbBmJBxTJueP51nhMTQV388UyjzUAjYK7KU8btoWbFBQ",
  "key21": "2z3aHEZZvNMRfxdzkBiMRE1p5poAveyeQnW9k6tbogHyMBEh1kuFKHgcBXpqQRrM45ZzLAsYDMGXugTzKa7Gyyrk",
  "key22": "rUcEgY3puvgSYwELHd1K3MBHfUjmibiSo4C6qGfQKocsEBG4Fp2f81PQKor2pUq1u1yLGTqvEdYeYWxzoBmrzyj",
  "key23": "2NB8D67sRWiCDF5zDzDKnfq6YikCDgF5rJ8P1tuRLhbzBwe1xBYBYf8kCvkEXEqesbMPCw8YJSQCEvUeSNq5PpZu",
  "key24": "udGJ3vLi7BdxZvA8DvQtgZZssXJR1TVuy7u1JngYHv1zjpV7xJaWiPKYTGo6jJjXn4wS16VkhFdqn9fxgjnUJmq",
  "key25": "iZ1YWCX4JwwXLVQDNEbqyihbV9FBcSofFDA1paZ7KLbGX3s533cSWsavcafGZ3Y4YHGdZxGipuwxecLoYPxtp8F",
  "key26": "65J1G1TTwWBnzpnpvFhaXBje8E8HqBncQ4MDFhDi5ByG9RLuoGKS6ksNt9GzMh8rwDU5zGNcujRRbNhRuZCweP27",
  "key27": "5a6zE1ipDiAZM3Ef4AEd6dbSZmkUTxMx3o6BdQobKoguWikPsurj1qCXYShzUqGHNKiYDwUhzGadqxffJE8e4JtM",
  "key28": "9W7iH5b8F6bg2Ef9xQdPx6BTAL9fntVeCCMWY3FDHRXdKeAft8B3BsLwyvShCNcfetasoCtB4ptx3n7jo11JNbL",
  "key29": "5E5tjdSndv5N4Fp2xyHt5i52o1XLCBmTh9PhyHtfFzctuP4iLMn1yB5Qkyv5nfc61Gc1xk6hYHiRjtoP6hJWQis9",
  "key30": "3Ugp7kXsZoXnpBwnvEZrCMCFFF4216hFM35am97FvGok4BzX6MBwozoLtSaqdBPZQbp8ibJwvBX1paqq1D8FVjej",
  "key31": "5v6Wr1HjRXePRKAmVNCnRsmRGktbWc9fpiKxG1KDUX17dPFcmAb8nKmLmuNPvoJwZfqFa8W6qw2Vzacee7xvacww",
  "key32": "5htweWiGGnrqdknVC2xmnKx11XBofGRcJKzh4Zw5g4G6mL2jRrKH1mMUwVjYzcYtNM3b8fxF6V6Hh2m9kts1ZtAS",
  "key33": "58DEBjBL3YBC5nfvdcFg9Xzr1whA95UFuj5arfXg2L6HCVwTikgSua1AUz2cTXjpz6vRgFNNztHAwUf5qgJzySWg",
  "key34": "33j42892PPLcCirsW7vfVgFa3Pt9f35fwTqYr9Dstji5tZbPCWQwxYh6Qj9S5p5kF4AaNbA6LyiB5gSxRq2U5Tqs",
  "key35": "3YZWbcnHb64dCYNi4weim1p4ajdv72QAHzB4H8okPjdbXeZBLEYuN9ZvWugERXt2fUCvBx8G9eupVtqtjHAWLvch"
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
