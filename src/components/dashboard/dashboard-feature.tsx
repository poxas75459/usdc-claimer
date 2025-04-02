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
    "NT1EjMbh3LUmpZ42QH23NGXf7jhP6T23qddvgHmbeQHmmeUJbj72jtiziicbADumXdKJEQDCdS5hHUqCkgdwN6E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29F7jPoHpPCw31S6Dd824pTZHrjKoF9FRNPANt7GUPvNbjduDcCQuPRY3uoZy4YUA86UYWXvEELn5kfEgLzWALdG",
  "key1": "dUkNY5EGrEjGNSRLNk7Dn6qG4dc37f7p8FgDShm5EjN4Wv2WZ7PFaGNZatyDkcjX2ETv4hdzBo9EYWdiUqGEczL",
  "key2": "5LFJNs7vU5HRCPoVfU921SbsAR4voEcnapWn6LweW3JpP9KkMm6BxoJWBaCawKxzKHYrTuxJuf74sQRNAvi59jb8",
  "key3": "4amYGUsKE1KidmicTBvumojrdXntiRcdADy5iHVUkkjA7WSSKHBKucsZDwTtDZnQ7cZBSFvGNABJRwKuCn1xoj5m",
  "key4": "3QtzjjEhuph9dLWpCrZRdS8iFxnAZuDLEHoCDTFnLZNz9AqX3RmAZ6qHj3NxyvVFzjXdAKez9V5m1qUv91mYfvHQ",
  "key5": "2jopvWwvb2uNzYMFRaMr8UYvtWmtH9Ex6frnwBi7EY8QmSxU97Yx4VeVFPFo5bjUpbPVdLqf7n45oGxmJcfe4vTX",
  "key6": "4NFactFZ8zC3CtHNEoNsZNd4ZwSvbQdLWdanXdJSXASuHWM8A9nhtMygPck8gRgJiHhqgSf7vwTgVg77yvg5CTwd",
  "key7": "2p1wJvDeoqsVnKz2sJW1SDftgXtuXBkkK3QQLfYhoTydDjj4stp6B99Kguka8ZTRML5VPiaUAj6hDYXVpqkHP1Uj",
  "key8": "iDEfsXMjDHEMwTPaMqyaMG99pdzFCEpoX1HZFdgBiUYhg7uaFDmJuaWf18r5NE6WgJYAoymJZdtpCqw95vZmpYW",
  "key9": "jZQeeeaUE9AJiuaGyuuFRFTkQGB6DZZry58pL89GQWXE32Kt98uHboL3hVmM9b1X3YNR9Y95Dos5ytWzgbiH1wK",
  "key10": "5ggoJTcimoWRmqLmm3M1NxXG5ntafhVpVboHv52L21LF6zJPifANuFiJUYvjBeMNq5EEejnitgorMRkVNsZv1foK",
  "key11": "2D8fKgycmQTyc7rFXwhCtyc2aEgFKCPwv6QaeN6UFumN4ScMuby5Tg7V7sEPdMXgSyDUcSfnW1TZjxXbxUj4kyNg",
  "key12": "3FRsKFo9uMA47te4sQroUGN7ExxYc1d9jyijSexgsWjbMGkV91zsNffULgz77NDeuMBUQmyD4cVNnkRCJrf3PaNH",
  "key13": "bdhhHdFR6N56CsSAPCV1x1LKyDkFtTqFagY844qEdtVqh6RQ8NnUQgBXdJcThdysmQteh5R94txBr5XZ2YL5b5H",
  "key14": "4mTTPhmv3jMjivym5zJoBBx4PHiQuPYTgZ8xiY6D3w594F3VcyvGBCJr8Ug4zwdwP6uT9Z7XLCCXEzzmtGzvYaej",
  "key15": "2nra9gHFs6mJuiNnXKN5MXb2HWFyZPDffxpEG6DEA2rR6Zb7cB4SquS9e4CkmDsWTmYsizGAk65945ecCE8dZHnX",
  "key16": "2mQPsn2MqVcYyUw6stGwJPQdqA6suQ3LHrQRu8uNyLWbPRMqgResBypZfaXuJYGanpFRZNFamsU3Js3SDZTwETqR",
  "key17": "3g2vRnnHAGZQmxJy8tW5HnxMg1EgadSkaPinEPv9ajJRy5cDctXES37B2NtRM9DGHwKs5Xh3qZ9zyZ4P1MduMb3o",
  "key18": "ezkrSkyPfFtf9YecWJeS39Rszi14QwJ8yvFpBLsj2FGRPhqXQ5EEMrY739QC8MW38xhkxFc1MH4XWKniEFSsx8B",
  "key19": "3UQAGc624xDJpwjDUaEryyNeK4a5odNwmE9v8nCy7tDA1WZazcvzguySDXfp1auiqVeUAPv98DrWyN8gZo9EQshA",
  "key20": "3oe9TV2ChkGrV2ZkVQeiBGnHwDkUDfi6YqvmUJgtxH8tiXBJBvrvPDGsWvw9AtbCu8pSgSjiww67Z6irBmq1TtSi",
  "key21": "4HY8Yuvq1uoUqo8DnodFyCtaCpoHmB9HSm6sgJESobpV7dnPhDzaoywkr6mRSZo4x7PX6S2M4fbNNfqFfdrwC6oD",
  "key22": "5hDxYmB9cL1TTvgHmvNgLXfypfJXuQDqYrXVtP5v8RLKdorps46cWEFWMkaBAhhRvHpzaqq49EBF1fLrhXSVn4rf",
  "key23": "2bFCyFrW7LfYK3QoXqkeQ7S6jp5AqK5VGRhjG56qyxaJ4XZn8uceJGDzrDpLZHvYFafegkZEGgPdEMjBG8kvxTAb",
  "key24": "2d9YeaSRFaGGxe6NPQkxDRyQMEZMsTBc4LUUwyqUxqwynsT5kfX3SMMuUy5hywgsYL42Satmt8p8Y2r6eSNFGDbU",
  "key25": "59z61aNZ9LRvYJApj5UnXbzVmoksdTU3dN7nnuPccka2Yh3LgANnatgZ2pSYQjSPNqXuBPmtX6PeGgPUGav8Qdvb",
  "key26": "5NKEHb3yQ7wFiaPj6eBoe86Fda2X8JyKSRoyqmfkzkyWH4QTsgtthQP28s3MyiugDjFVwB64MESqenYr2T8ZjA5w",
  "key27": "2dKiBhshzbfoghan9xBTmmARjKUCbJgxk6JfLFbhxKL36W9t53LYnb5jSFYjz28skVdp14tV9vGEiNEYpcvJQY9s",
  "key28": "5GrkGKq3aSwBvJiNgBonp7g5dFZ6QvQ6yCtVZS3aHgv28UuaZBcpJUH17gcopi53beiFKCaW2No6SQiYscepyQEJ",
  "key29": "4hdq2cX5Et1qdY3TtojaaBDkV9FxPGnafDDMyzoVM2D9K4xQSCLz6bYhNuLpHCiYJnJTWtUr3fyMs3xqMu4qURQM",
  "key30": "5m35vNokLnFEBhCm66FAnQUnd7cdX2HYu4JQgajqDBg2poixi535Dni24FdRK2CEernvoGUKNUmLhWcHE2V1qYMf",
  "key31": "2jAmB9k8iHSjLVvF9QHPjqrBhHuXerUNvqrxenUgfK4BEW8W38upPQU5HPrNCvzKuejTRVhAgYvoZ3BtMG1NY2Nr",
  "key32": "4U5YwJ3XkBcbZzMKUXacq1prFZU2ina1gBbY8Rz4MpbqScoAYiKHbm97L5XKnHKLroUmr91T1Mvp9pUqt1qhdgeR",
  "key33": "4r6TgHyz1634vt5v3p34yhdeYG1MwNcYQUUz3mrJas1V23QKtopeAvnyd3prMw5cmZJiZ5NU4vVQ1vDNEqKKMCZw",
  "key34": "24UnzvEwRmYer3i4dWwrnf3tdUaczcUYLTfeagwApbDrQHktjPvvAgXx4P6iim6ckno3TPn9SHRywY4RKwshrt3N",
  "key35": "21Bk3NRypEWBUyeB8E7u4aZ3SWfdCx84iXZ7M4Q4rzqyoCX1QztRJEzwuBvcJEwRsRoXsFEpFVnCiShFhcNDD6zn",
  "key36": "5uABAQkoC5QPik7u8m97FaVhYnmv89cTdB1DMG3dWTUfBu2PfqEnaqM9nLMx2CZ338dn3CzUT7D7mD3wN9pCaGbQ",
  "key37": "GHzeHmte6gjZKAWedew9de55ZX8W3vTkGjsVCSrYoPdjstvFDoL77toSWnnbJBdfnCj7SSb7izYkzKZzMAKwy66",
  "key38": "6sLjCm8FMtVMaULUqkMMovaNuJjPo4G4JBpD4dGdNAAAuxoY2Kr9xY524e4tuzCY3qFss59DBUA4qQHxCRZYFHL",
  "key39": "3QJL4Hdp6yWad3AbqKZp5h4DDR2z3ENPxMWgrYgrSaw4APxLrTGXJbtJtwxVSvoyv4jwS71DUrdojfBNFB3ZZLwQ",
  "key40": "i5Qzz5uUgjjW2VZfXnnHT6oMZmzKqcggQhNu33BE963Ge3x83ni6UxNHadG93StSuXDHKAj6UsJDQniRJsDqiek",
  "key41": "3GHGpqreAXkYMyGFyfaSFpRsppXH7mm67nQrbHAW2j4WM8oMqDFmmc4YfrXSsbpz7Uga6wfwRGvn3iNkbUsg6qWr",
  "key42": "2HZUUZCLzGcYj3gYBMYX8mVptvU2rjBaWWcrKpGY72dQDNjdsbTktdTPyEkDktwocEU74qsULoHaZ17pskVnEgPF",
  "key43": "4JrVp3Ew6k9vph4vSQ3NMZJzqaehjHtnAKGKUdSvDHiuLKVLApHfckgzdWNFmoVxiXAP87hh8enaSQnTSDhLTTBq",
  "key44": "5pmKT6PJ4MRXepQJQUSDgtPvvBHSnYRw1U19EbiCyAJpMbg86b6cPPfmguY4K8nL2ho2wRFpgcfRnZAoQaocbA2M"
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
