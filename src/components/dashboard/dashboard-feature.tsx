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
    "3ZNSjpUB8PtL6foQ4X8P8FdeQMWjQTzSRQTevsrggUvKHCYLgcyaUueYah8X7mLb9nTj8tjt3ShscL3dV6YQccoT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GgsFSQzkWEnjpisWK9ZJkbzhk8CTckAVXRPYgWi4hXzmPEtfu3AEex2nNya6hnbzs3E9jKKpQzoRDvdojmDVBau",
  "key1": "2g59G4wMBgtrJJ3fpsrHMmYh339SYziadnWtKvNqR8SVH3U1Wm3J5JorGh4u7uTsTzf1QcjRdQNxQ2Tiw7m3TYu5",
  "key2": "3CBsz7DTv7DM7SrCjjmZGCz2VtPqFgEGWbnvU52s9Uj71DxmXA9Wemw7No8hvQmDQ9PPtMNeYFNVWaYqv79DdUTy",
  "key3": "4GhMZMDuyyypEFJhmLnHVAZxAxxw9tXuVZdJaSUEYd2gdueyNWs2EMFUpNBr4EvjYFMMpKDreikatq63JpY6w39c",
  "key4": "4sJrTe2S29Tt3e39k9Lmzb8dFoAFenV3svDeAn1ytpYqJ4wvLt4NN8fSVLBEdmyPaB7vidxkLF7JELktLyPKobbJ",
  "key5": "421ReFwYpuCKo36rHnFGdDg4b1GxiYGwG3h99GYYxDFiVaN6N4dVjz6wufei5tM2KWnWjsAzyH5dUkWwtZGNacbF",
  "key6": "3Q45adsJ1sqzazBAHqMJeVGZKbmuWK8DRc3mddK4SeUrxnpC3uu9oRodgRE1aFGRA8vzZc9HYPaXm2EokTqMXp1M",
  "key7": "2iZp6Jo6myDCn9akb7VAEC76Zq3qMac7GPabDPPdn5uNrFqkQPZE62QZDiKU13F57dZVzjmA5R7ZHAh2SsT2ZNiq",
  "key8": "PrSZNCFtuvnV1U9RWGdtJ9mVRjXD9iSiHaddVoeHi8YR2HWeFwvE851BVSvRCCXx5yuo8cgdkaqszpujSFw5ANA",
  "key9": "3S1psTTTLrNfXu47EVYnbMmSFoNdf779N6zbgjEzs6sJRGDdAopvbA6ZL3D1dbL2xQk6HoAySgxgKYGWEzS2dD5b",
  "key10": "2bQ7Rue15VRiqhpPGcX1KnNCMtFYWNavMWsRYNfkeYM9shSEsM1tMzEYjyqKVN6p8nw8T3ZDyyhqC2P2B6YKGKTG",
  "key11": "uUTLzLuggPpUkG9vnBeztTTcLnHFDxgYMccBf15hLqyHoNrg8pvJzpSfothChrVKv8VXqFuvkQsszGm5mJ3zk7T",
  "key12": "3pfWvkRK252ihszCvXgXCfk25FTTVvswRs7RM2EU2B2hrLKSKe7VYvQs8TR6c6byF3iGh19ntaquyhhM9h84Qsnw",
  "key13": "5fLHnUK7R2xujeGkdfqHZiK2Q4sncEW1s4hCw34cLxynquz6g6tbjgiYREdwDXxim679bCF4dCYXaM8wipQWzMMB",
  "key14": "5NbAZdn8tpijQZHLQ5EFk69jbpfcr7Lj9aLsUL9gk3DE85DGtspm4C9RiUnZgxh5gDWkjjFq9k1XRY2txxYPBuU6",
  "key15": "2qNHNq5ATiLzvbKJ4iuUnmhu7BuwioTqHLxhSTz5mXU7jb4FESC5riNrGZKNQuDiyjJ4MNFfGESahzBG934CrNfT",
  "key16": "3eTNw7Ape7RAj2Vgi2tEsBBaHv1nsst9xTrvriyGeT3gUeAnc8uwn9zsuRwLt3oGGu2pYqMaiPj7fxHnf7TXz2Qw",
  "key17": "646DwsNY2pbTjE8ajUu5u3PfXbwCwftzhZc2eJZyWSLdujw1JrwmbrEHVTeigJjrtxkeBwLx3qw22eNV3NEaxeUJ",
  "key18": "2v3rNzybqpUxbhLz5dvhgbWUHX3tEZByXZc18Mq5TWjpPGDgVAJQsN4AHopw7ronHSVBH96NMxzPBux51XYFMVDE",
  "key19": "2w5kqsfUrPk37Mc1vreRFuqG78jt984NMi54eLmNEKmwsyFruAESWLzAo4cnKmuj8YNTEPWm94vzHjsc64cWSoHd",
  "key20": "2pLeoenGBhMzcX23XmDRv6Nj58MuS8TUpQHKKyoryo33L9psemEsaPVxPR2JsGUB47m79f6n59oeiMgE3Y9yENMu",
  "key21": "2E5epRsPKRoe1Mp21FijLJ1S1K4GfiHbQ13XE2LcFcEqcmu8tW53L9TnyCVPxb2ujLHDThkyYUn1wzF2U5SX333J",
  "key22": "2hvJtaZtTmwg4ukCr9Kx3z54aBTqPuqU1nBYTXAnQ5XdW7RoqVkPrySxA1FaMUKGBo2PdSzdt8EyCp1YKdkcmGw7",
  "key23": "2584PYLRw586cMGqzDUwEpVpQg5eCz1jBM7RMuVHBZ95n6EbkL1yxFEtMQ38hNJ6GR8Qm6F9t6EKVwXBKWZPBAWP",
  "key24": "RqXeWL6uGWY7Ub9oxPQ737kd4ahtYymrSrsYuLFSbQhbS38tKKHfX9joRFJ6e8UqBf4zPkHXiTrZEQ2U5oiknTh",
  "key25": "54ndaQgt8U4oVzgMTbVJBxxFu4n3gnh8t5e6W9x7GMqJdWj6juoS7yV2FDPryGrxjR8VApZcAL9QVbRqfFaDgDb7",
  "key26": "2Urt5b9bEPGwxs1Z1MmMrQTGEcvkZbeMRZwLJTsfEDfZjgquuLDswcQvPYptd9MPha5xQ7xNGrvNazLn4cKYN7dE",
  "key27": "5Q3EJNqyjtV5DhgRGKwiMuKTkb7MVU92YboMFVZvak5Q5wZjdY4vSceCX7NYRg2bJwvSrJCu8qKCvyVR2kk7i9h6",
  "key28": "2zJfyLGyYGk4CN7bSoSyKWRzyAmZazeiBTMJjnnMRiVjLEvCM5xkMLWrSLcTaU9NkpUkigWAn2yga1nt1pe7YjNa",
  "key29": "3hB7P8zEeb79FB3fypy1WbQqZAXfTJjn4YBxuarutbc9xwntWuGjwHReW5t5qhuTby984Mq2cakL8Y8dgPnViyJN",
  "key30": "mXZZnpbG1dqZrdPvvbdXYyKGC4YyKENfJk61d85xkHzVfAesqQncz3WMNx4yL94JnjNjWuyjtvpCPaa31CWjS2U",
  "key31": "4686hDkffvwNME9GvECMK7ivwqXPLjyBga2S6FkBCWwnYqjQ6pFJ5ABzt28onxg3C5uHSaqYQRkHvw4kiq7cUwic",
  "key32": "CFfcWQQHJ3YofMYmWbtxmvj8md1vGTxLKTASHM61G14WbwCU62186rFFANSRReZ4kh69PJpqW6iDKXTeAQ5tnzp",
  "key33": "5jnGd3pCc1wm5sF1eya3qsJqC8JXMDXcg7NkoiVCHxvamncv6VqsRfSj6ejRguMkG9nkxiZDnWMwSE4rV67xb4LZ",
  "key34": "3LNzYipLx7zUWD2JawKj5CmdJe8uGJVvWEPNaBLuarhdF71Ufq3fMuLYEvUCYp8YJqEMtUi3cTX7q9gCgVRgAjSu",
  "key35": "3iLh6E2LuKUFjvZwH9yTfFLuazuh9HpLSkJk5QSZkLeStpnNJd1vNSqMkZB1j66Q3QXjatHZs1bz2517K5jTf5ED",
  "key36": "JEBs3viXsrh5NdVUrfC8gzgACaDVzmfEfZhXdAV6VUCF4z6kHgRWaRdaLuWYXtvjGhgSoqRwSpvU4w9YWAKkXKf",
  "key37": "hJrfYmy2hkGxVvHCRT3DkivXrgtC2X6RVzUBb32TFS6c87qdTzwSnMmezPYeF7zHBnap774EgeNmKGuo1nzwAN3",
  "key38": "5UaPeiUnbjtdHbaje5zQMpnn16r4rGJC4sr4x3x1DmKgjp73qEeYoeJtxpHSXARL35VKbZr1GJw47UNaBESyZmas"
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
