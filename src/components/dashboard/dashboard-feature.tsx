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
    "XWfrWXeLKnFJ9g91ffJqXG25RcNRho4RWpYYybvhnwnkVdgSj7Yrtvsfzv2chXZZovY5n7moNUFKvkHBCTWRqjT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "549aweRUZQS8cc5UtWq8iMbzgWcWcULMRbJ5FPCfmA8cNGki8bj8489czHeeyCasBECurctEyn1b15XJLBPp9REj",
  "key1": "3GN5v2osuaaa7vme3ecC9FMEQHPfAAiBM2bjEAjCpfzNtBqvUNCNa7XdznUZ9s864fakXP6LmVq73M44u1MBedRY",
  "key2": "5u8J8JTa47JwEc7zqLznQPtG2jUjd5z6zNZWkSQacw1ZfyyaQSakDazKHpUgLqZgH4EvNTghhLK7Jz8gBVbfdQRp",
  "key3": "2P9qEPKT8hStxWniYGF9cvyF89EmC9vBBxLLHTn5ZrtHuBsNUDz6PM39gva5yVkRxCt4XWh1nvDp6i921frBwzym",
  "key4": "2siGaFDB1YTmCsiZyTi6iGeBftR2N4jbxBZBTS6DnJMw1wgzGtPfryxTr46YHarmwu7yjRQz6RrDrtTuL74EbBr3",
  "key5": "5Xaw9BCru3m7JC5MqDpAgWsmLaLeMs39yRWALAmP4hWmnfBBvywatXgS41XWFCkhesQa5LYNhAZaYugJvybEtaeN",
  "key6": "3DK66ZYTKsaQadhkLFFSTwQLjFaUArwrzUTUaTiW14DU9Wjq2eUW5G23s2V7gA2BKYwZAkBcarLbMWYvLJqrd2FB",
  "key7": "2zWCxZzq52dtzv26omunuSNR6HmbzrZHtyAbfb3zaGZHaFXT1taDVNdmMB59HUUJdR9yKSuWEUYiSvHMxKinXnaS",
  "key8": "2uiGeM5M6uPBPJRVHzgn4saLCdHyoAJstP5uAMD6Ti7hqdPVFcTeMPMn66tWL1uhBskVKsW9Q9kMZmDjGkaYVjdn",
  "key9": "2cXzHxeLsc7xsUzUm2ntkUjCM8JqjzrhSqb9FHJeaJpzzgNxNpps1Ev95izLfMSYjurPeXMZkzZK4rc2kd8dCB1X",
  "key10": "6kqM8DtCRrxjFjd5ph6E2RuJHiLFes8mFXdGXismjadGGp9aD7M3amdjzG4UcQdZ161Qf5Xw9HN9f64SxvCFpV8",
  "key11": "23bNnuCFhtytG4atgpQpBCL18C8fwdS8a5bNKnX6zukJSfW19d9oR3HSYF2fendN1hvz5h9P9LQxoSf1rKvyGnmC",
  "key12": "PeYdNkkQTy4R1y3MWyh3E1LCzvJ4tu29DaEj37jgdPpFAfLF1j5G9WmdWyXHgk4QVYVT1SmzbaynxgB2kLCr8Uw",
  "key13": "5iLE6PyrkgG5vdyAbpjs2bj7k8F7F3k2rD3NMrxbemspXdsakJP7BvrpEMFo7qa5Lz79iyUWNEwBDNsyZdNKZFRA",
  "key14": "3HhJJa1NFvT8xUnsLgAC2e7xyWpzPRCWeMVW8XfFH6n36XywHhx19z9wB96dEgGqU8rtKnUGLR1zQYQbxGLmmtpW",
  "key15": "3X4KkRcFHeox8KAZ6grQwDxM3auGHEegwL9emRP7bgdrTMPqgUtCUPuZjRQvcw7KeiCSNzkbBForqbtoSGsExX1P",
  "key16": "4MvWk3zzMRtTgbXN9vM5zvCbD5Yjycfjpx5N5WWaQdBUDQecD4Vg1SB4Yh9MofS86ooppaMsRBHdcihfgam3kp2",
  "key17": "3fS35ug4L5vbBzShPfXYKqyDWpXRmZLfehUTzZUvowDvvNHsk6H2o62cDjpbLdx5CHCxzSzWEz69paeXGayNSK91",
  "key18": "XcHneqzCKef21MKv9n6x3Rsqjkw7GQFQPpJ1ex5gDuoLFga5FdfhwzN4E3ruJb4KhNQfV2sqJ14m12RHsEHUov1",
  "key19": "4NBzrywDRF8iwPj3HZ9Jq8EJwD8hNE1xqwZcAJqqQzknG2cMApzocj5eifwVGjDaxWVDuw44XoZY2BixUiB1fL3o",
  "key20": "3YMGSAo5hhW8UL6b36qkWYRAPANqk3LrrrHtsPFHyK2juKGGufZqKZ9m3uvYGbGd8XTRytH1sgaSYZopXtiooxpB",
  "key21": "5313cQSZqgy9onsY67obSg1uPcwxKcLgJaFep3h7GZEWHXEMEJBYpxHzHZubq185AwcxLQfDhJaNdwcfeFpdjPmb",
  "key22": "R4J8C8mXUD4zLJbi1Tv6TDFenCw692pPMZ45B6pvBQEb4SsCTGqqzUQK3EtEdeRTatyj9hmYP1i8vUBHm4bzgMS",
  "key23": "32X3iLdwZHUS3URAUHFyivBZ5bfPJanvEnqzBiDeR18M77PeLj5L3vHN68LBgXFwHAjcBKXwTWNtrHgg8wsLgVt7",
  "key24": "4ZhiffmyZcbEdyGyX7VUexR4ru8QERdWbT9Kj5ZmTre3nF9Axr49TZ5WpLtEH6sK1nCqxEt79JFo5cr9UDiMzHM2",
  "key25": "5Y8smMXHfmt96H7rHxKZC3iN4eTN1GaEv9MZRZXheWtTro3tuG7TpdtVNQaMzi4DgTW93rzYRZSmHyctndJViW7i",
  "key26": "21QNbRBUP1NRNJhpZweXjN7uKegtXynDSPaUeXDew2FK3nsKGmFFUSbnpXZ2Evj9M5K8ceQJsQmM9ZwNj3wsLTrx",
  "key27": "5LhbUhYq1QmqJgeTG9PLrrXPYnefVXdqCM1DknFvaNQAbvuTUzf2i4yQxEy327xNbBg89DcnYL6mBdhoH44tkrCG",
  "key28": "3NQXdMxBWyns9h7YkuqkPd6C7zdDFUsvGEKFrfiExwDLsznvMBJrQzKrUCuz3gGXfto3wgx1ZeB3SwTPUJkvBC8B",
  "key29": "WWjyikfSdqTJm4WotXKipokjoHPxzTbzRykDFVV11fmvsp1VyMCf2oN7vthdePv6xzK5DcijqQ6BmpDUnp5u2A1",
  "key30": "2gnoGtQXHqDmErqzJGE4dpnce5f9E8baRXijA3taDp3ciwauS9v2UVM4JxbGnvjmrLzL8Z3L7wA98UxMvCTKgrx",
  "key31": "o92gXW2aXvL6cbBBEFLvr31EDHV1qGUaNYG3Vy36MEUeXqdLZzdhFeFunPY7wf9Gwbd1J9abA2CDiGQR8f1163D",
  "key32": "2W3TXFLqiaZbjskEmYuAM8vcUjsGSCbXyoqs85YvGWH1TMjPbQJ1tqBDMdVpmt5xKSu167sfYmV5k4189HHfzLEf",
  "key33": "2aD13hqVsiYg5sbyV9qgfaxBX2vho3kMgLzRdfa9sJ12LP1hUMG4zcr7jYSd4VdTs2JTTXNJ6jJefsxBmqbvXhaa",
  "key34": "4ej6EErQD7gakZvqDAmANdTy12ZaS5FCPNJhE5GGPiEMnf3iU5Peq7qCBLQeqbjtnNy8whdiGs2ChHV2yXGHpLHt",
  "key35": "3dzGSGjhVomwj9e83YFxaHABpRVhgCFTmvPPbnfP8XELwXQktNvdpWiYJX3N6zdcdvJqZ2oEvyXbwaKxRjCVK4mo",
  "key36": "DWC8hMA7ZqUh2HpKsRFxWdUHX9befRtBcj76Y9BUxin6oRcv65fKZvwuoQH5dJjoBUdjnbHUP5j6a4NNSqc4hoc",
  "key37": "L8n7MfEna5VHg96HGHzi5kVeZv3FfgquXJCD3TuECpnpKkLtiwty5mX2MXPm65nctCgprSHAv7GuL3WnaX8vTRX",
  "key38": "aXywh6oNcK54Sp3ZzujiVLK67qhxor9T8vwcvuRY8u6SYhYu3f16K3cmfAibnqenmRQc6zXT3mWjFB7wT9qtgYf",
  "key39": "vMFSLgZdp8Vh4hwmKxUB2NnfvTH9SZiD55RyADcEsSSfTPnHUZicrfzW5LrsFV6wHbM71LXjRqcupRGoc5rUrDZ"
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
