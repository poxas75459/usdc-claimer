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
    "4cvCXHmhTVJk9VQ5x6Gns3Js3tNwBmf2dCVSqVUP9s7DqYqsgVkDnEYTSnmREnQFJyukshvjxw6NTYPRVpSCPML2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a4KeHnXWavecKvsqv78yVwZr3jha6huab5rNULWghng1ziKSkNDHBijf2Efm7iif5wcBPXJfmHc4VodGjrEGiGL",
  "key1": "6U4CRz9K15YFiW7XJSqTm988TqhwF5HGFUnG3r9ipsVmgY8SLtzGxQcBhk8FkruaNnufvvxHkrm7sqFdQeBELrx",
  "key2": "2hLNK28KUKDwcsL66w99wccbEow4TPzMVSxyzKmvA5xmYCPN4vxqMDw6Zo6TdmxM55xeowFWRE62ocj6XHspMF6e",
  "key3": "4z3UrDfmvdcwxA1tAYMdZSwRiSZEmDaeB51rppB8PeNssiFBygF2cjshpYeEXguZ6S6E2Guhgq9nde8UARKUMCC4",
  "key4": "35KysjGovSyNiapJEpxthBcVbSuapKCyMnmVTvRwHzKcj62AAw8rBpWDqjucD6Nw6JP3bfjjcMCPJehchjkPMaSj",
  "key5": "4TnQJAxV9Je2WXv8WNACFsBwzPL6nbsyoJrBNpnmbbDdPocDmfAoQ1Qcrni9kbovTey5AJ6MAxxTi1pUoHUP8LxH",
  "key6": "36bb3kXkBjBxKfXQHwopfj39XABTj3XKmqy1jB5gR1UBt3vEB4ANVitrEijBGQoqhdy9ZBsrb9aDzyMxzS2EsoKg",
  "key7": "48ASANqUApAS8j4bALTxXTMGNHEarMvM8cdZrLzWUGw8DYivYJBuDxK5KrhFtm8EYxeE45L6aWkPUF2UE4Ydq749",
  "key8": "31ecBQiAPhs3zheKvqqkPJRUoTNYgJsZ9tJEbcLUK6yU1awiH4tqcERLXzsT9RVTZ3aAr47xNenvhatfRyDPZydc",
  "key9": "3oAfj2eqKndiiQ716AHjHTGSiVqRMFuKR7GfsygPyU4P2TFeGPqJVrPKzQyLsB6KnvVj3DminFGG7r1u5ZqYRLmm",
  "key10": "2CEumBFGVk4W3TuUzcDAxzmwG6vetj63tWFjzTSa9JNDx2BJcNYKP8hzLisvMjGR4ktH3nLJusy7mXxafTViuAMF",
  "key11": "21v68VRQEYvpvZzzacJkNYGa4AVtQwxzT74pj8YpbtwS8C8M9PtdQT1PLv4JZKURckq2kkbEV29BkxH9KgeWYP2X",
  "key12": "5dApEfAB188Hc6MD2v51Bu8s64L6c6ghoheLroyT7zEUrPrAusDeKjssv2ifa7XCtpviRepWyruQoYg87gbzbTuj",
  "key13": "2L64f9Loody4KAdyxMNXfw82EhR36zU28i2fm58MHcaoTvPLUcYocBNvkMyfcTQUddAzjUUdEdN7TjBVymf4ACJG",
  "key14": "377fggiAnH7QkzdBe2AeXopQ2mUgPutqd95zvC2ZZQ3FcF4i4dt9qimzvFszQxRykhzDV4XDEPzYPf1jNqwrs3PK",
  "key15": "4QK2eA7yMkpT1HXKdNvxKDbDStbwczGRG7AS2Lbczecpa4PSB6AD2o3iaLu36wJRpb5LGFSMJs7txDTeMycQpNmA",
  "key16": "RvvbLeQEtZFA1WSiRJp52sPH8W1zKhprDoRZAsnrVDF4czuGW2wgLRHjxzFAYxc3LXN2fzagLPCEsGfKKpymyVJ",
  "key17": "39eAjdG6WwsRGD2gvjGY9286CeraYSRzc7cSxpqYdbU4rXuYRTRqtymmTMfBFq4M26KQyZsDboNBXykJXd1f417b",
  "key18": "4DHuMhr69V7V5dWFSzcZ9compW3vtiQbDNG7X4HfWtFJKUb66fx25cNVzRunRVAYU3m82K4H4QgxKPQN1jScY3X9",
  "key19": "4vymAxMuhwCzLeGvWS2WmprCpmbqEeBKhCnzmHfjYXxTLFqdSY6qyaf82h94yRz2SprW8bv89ApPeALTnrywuppW",
  "key20": "4x2fFhXn5NJAcfbtYKZUx65z7DehFetmCkjRz5bwLdpF54RkPniLiPMsi9eEzD1KbJ8uoGEofgtxRahwEZWHBxWP",
  "key21": "1ToTYauVt9WubYiswR3L7gdC9qdwukcpxz65uARqaUvJtfcrbjCRusF8EfsiHrE9pSge9qowGd1F2znna2Dkryj",
  "key22": "57gVAFbHTcvivvBjux7BKRsnZdRA59eWkztnJiHDMVJVZSWNM26ow6FJg3SBsaNndHkyWksiDwhtqnSUkSAQdMxd",
  "key23": "4ZR16cXif9PCzWm7sfbEsdxPyoiNps1qAxsiV94F4sqz4yShNQmEH197K6w1VUaj6tYpQUXYXonSj58uqi1G6hDw",
  "key24": "4ALmM1S7B67LUuhxV5AjRUcNaD31smxPSmsnVUh5saia7qY5h7coTLo1d8TUjSJ5NgL2N9MQoyP2G9dVqiZsJirr",
  "key25": "3sH8SkfNBk3hWKEsSUFvshR7uRQhnfCt6gcXa4EwZunLcw2aHub59yKG9JPvAo13oupfHnhat5tcdirQDyr8xp6d",
  "key26": "3yepfqmBcHr498yHN8gvSt2C9jGGVY8mkmwRH4odK9yz2auwypegEHffTeizgn8SANVtSoSazcmGGoukPMc5jkKV",
  "key27": "3g1vfQfKjFhsgZUpgEoxHdwkpoR6ZHdFMzezYAwjNS7QeEwoXDrqpktLXbQp9gdtQQsAjdo72PpCgcbfkcwbVrnB",
  "key28": "3DKsiLHcfVwrXu3SFDgeMpUMv4bP4HUSjXxRZ6W1GcDZnc3KVmVuemAzWK8DyLXc5sUSAFg6Shgx7ZuGCfyvSrsp",
  "key29": "UH3DRNpHZnBfeVpR9RXXAFT2X2mrs8qk4SEvrVcdFnRAXm4PtBdZVjWF7pEWHJ3WS67KKXjw21gi3xBrLMDfqSz",
  "key30": "53FUWkYjC1R4XH4ZxUQFPbsi1gSQHLSr5LhAKJmhKCginkZqzZWbnvH2K6aZuC8MM5sPZreyZYKUnvvqMXvDQ33n",
  "key31": "2mur1mtjtDhZ4jTz6L9MVEiinv5kYXw5K7ScSB4EG5cdQoTrUoo5WzpVGxGQNkqS7nypxbDWdKJ4EtdRiYknrN95",
  "key32": "PzQSxQXyiAtneuHFbsVAx2kccH6sr2776kULpQoK4AuktowX2bPzPk4uusdr4f99n9R3VFsJHSpfXMpHkrSvLY8",
  "key33": "4EijgZzGkQKfzW5HoF4n2tLvk9Eg6pUK2PbKXSXRWEcQ47tRvhGDNnZ6Nnn7mPmDG4pHgDz6sjMuPNS8CyD2WvK1",
  "key34": "THCq4gk1V4ccqLJNCxcaMrEz7YZm2wxnsG7RknFZGsG7qkgCqkKuuqousNH8nne8Tat3UNBfQTFj62e4iZoUUMF",
  "key35": "46chbCt8wzADgfKd3QPH1U7yC7zjjHke4Qt1i3QuL2EsMS4793i6c1kXC2XabFMGJSC9bgkvdtRFoaQyJDnW1Jiy",
  "key36": "5yDmyY1cA3pnypoCqo2CDypeof5fnQLDSWpKtdbqe7ntPHCvtucRQggfbQn9ayp13X1koViB6S16VLipp4N8gUDa",
  "key37": "YAP5FFysMgJE69iNS6nR3tn5JqnGQb3vMTLNouji8qukfBVnqGqjnNFhjyqSxzs2qVVBxNxNsaUeKy8RVEiSdyZ",
  "key38": "S5E3upfndmGXr7PcfTJgfaL86MoT27Wey1jqYdPPfvL4FpXjp6HnaWfTAT154k1UdDN5xgyBwLWYZsnoNmbZ1Yj",
  "key39": "2xrZ3oCFCfnByxJMfeGEDv7fbGzLkgCLqKa7M9jssfSJBWWXFmV6zrVLQAG5ohjAdfLKznc8jUTwCpPUAbB4WCoA",
  "key40": "4gop2zNoum3qSXE1ph1NN7B5L78rFcRJCi1T7jUWkVRQQvggrNF8wmeJC2J3W7bt8L1583eE8e6cV3rppamXSmsY",
  "key41": "2Da1S8375xyqcCJau52xaNxdM9M9tCxX23EKTXmbtwywnjHncbbBu5BqZtMqqz7VNSe79ei8gkoet1vNFd3MVzzy",
  "key42": "3QuEtnyGx4pv9TC4PwBhjSSbxiqWCQLg4GgwcxFMPCc5xbnXiNRfq1iLRJRBeMdHAaqS4Z6Hn2EPeaJrV5M3HFsC",
  "key43": "3eN6szhwkLZcDsEgNu5gTEfhPveb5qec3cj8UbYaWK7T8hFEGjU9oazrJVHRmjK45vhVBBCZ7eqyLo1u3fnTJ5AT",
  "key44": "4r4xacFgzTB6aRpnTkLqqD4c5t4B44TiQbHsSgN2GxNfsVoSneJUzgvF2qmA3PanhdfWMwCjDanuAL9RRyZPKqnJ",
  "key45": "MBwjSkHiNo7SWFvVQuazmcrzHV1NCryg1hLo56FEeeECGBR7q5gF9KjSkQsoTUZnxRTQZ8CYfv9UGGhRGxy3BNU",
  "key46": "3hdxstnJNvf6o6fxAVVSgW3BZx6qtADdcxGXDAFVfSF9ZVVx5aMMFixdHiykeuPHENbjoRmzFSwGCDHymbkSjCgQ",
  "key47": "ogePFLrZSubQERNaU17rHJZWKL3uMkKXPk4dkNcFBhYosfLx6G5Z4uZWtZ2PbUEGCgnuowSeKqy2hMotAn4DAFm",
  "key48": "LVVhX59JFKQRR6C2cR9SQPvKqvMtqt4MhTegVWgycdmd6S77UHX7sUXEHqnYwqnkEuZVu1wUypoYEnBFrafXEHC"
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
