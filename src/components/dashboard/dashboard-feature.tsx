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
    "4W3iQEYBdaVGpV8Jgx5GLQiAytaHa18tgQd7wDSDfzJGbKc46XKDBsVvQVehjNWpJDjQxQtmVY8Q9UU3D96dy7wi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hwUicJ3gQ9kiLyPwdDFQuZygicMEQFon61nKyGq8864XRiWm57UoqzX8hJH5QtE9xpcASVYKVzkQCe843Mw5igE",
  "key1": "4np5RoTyZHk7ZxLzkL5nKUqgE5hA9UVzhZQxCM2pW687Xu6V3RVv12MLu2BB8sKmkAdC2h4H7twPX3a19NEgts2s",
  "key2": "pWHTNM62p62esFcaTMoSJFTvYFRsxfxjNTcAysN1Xm9fxZkhoQ5mSVbBv1tEAXrmPqEAYGyE58YAGDw4LB9nepB",
  "key3": "67THSYojtYPdsMUvZLomHSB6WQT1j7syCFGvdARZbftVA34jLvCuWG8ye7wKuj3qrPCJAi7iPaqRviEM6K9RPNYU",
  "key4": "5CNxso1ePKXtCwtyf9Nojbg3F6Tec9xTyC7p4JE1wptsTSPDmMoMG5Cze1njaipQG5pzSzqfgMdEGZAXsr46ec9r",
  "key5": "4FwrCtctoT33PGsWJLi4BdShBJmchZCRubEEBch9ntVTKuQZt1BDw1XHJB2AxMH8mxtKr7s2Dnt35FVCcjeJLGaJ",
  "key6": "5tjCqbYyuyuWvPQGvrydMNp2fViJLwwPUfm8jYCgCmos3b73WzDCVef2kmZP3fvoVCjvpjfNi9gfrsJ3qQt3iCc2",
  "key7": "4imWsp134cg5h9Q8KTBiJXGwBiVKiJZU6wJJ8nemCxJ6gGpP2DjSBCHyTtisTfPeqxFSYqEpM48JBLiwth2bhARF",
  "key8": "5BZqfQdYuma4hqy5N7AfMNGqtdNjHgUH8aR5K697BGVkKN6hdJy8RuCiDfmTnLQZ8EBT6T8A2MRD5Vdy51eg1CTE",
  "key9": "YkXFZBd9mRKDM96fQTywBVfkqmWHAnS14gBgMxm5LcFGVF5wPYDozC3wbGuXhJDM6bkUDXDKeeZNLn3vCL7qL3g",
  "key10": "3tKEfRNpkeR1hHzFMnf5VVr6sGVWhNxaauvWyasC7HznyHFA5ZvQZ4PqEsb9yJxZttGEPPyke4vKwkP48q13oPEc",
  "key11": "esFmxk9pZhVBJEAMENXXRfh8WiRYa6JdHADhaqDwX2YYkGAq6RYsxNSvrADDrNHxkSkXy4JZCr3MshxTKXkSyKV",
  "key12": "2VkmUYJ5MSu17CDrB2bajjnQh6bpufkSctqXz6pBwuew3ywwjmHym1povyAJwquKGTP1EdbMc2mLCfPAYpohZZ4A",
  "key13": "2L6Fx4rnu9sgfSh4vuNvkeVwwLNqFBL1HWogmrAxaeVSRxSChaSSCWrwgQVrzK8N2h4Af9DoJM6itwVVUSMFyj2Y",
  "key14": "2VcHvuWytq3hqLKmxUmBxTRP9guMJiFcB6sSAqtFyx3dkcoJ7fDg4Fs6f7hc5vUo7XZMSwrDY1A8A5DUyRaUBV2U",
  "key15": "2zQuWmhDjcL2MCcPBxD8q7k689TsRnofPw8GqUayBG44rQ45BhAmZLitkTsFmJQ9ioXCoJPAJ2oeCtBWEvubaN2U",
  "key16": "65Jv4Ur6EjsAZyZXd9FLBomDST77U2jHTsd7gDjFoP4mPRTbhZvxHAYixxgaZ83SeaC4qTaP7w5ZfFLw1wVKagXF",
  "key17": "3eF2WisPezsrHgUeqxKv1jhizQaVXbviW1SyiSBYT9zxs7D5oogp8tEoyz3m1hCvL26to9MNqXqUddHANPZeHiEZ",
  "key18": "2GhH8NM5ipj9rsXP66KDYVxButJRqDTnD5abwmGRXwCNn8bB7goYqAtWjSMFPirArEVLRH4bB8BsDrVXMuHCehtP",
  "key19": "3BHqJ2EytNpU5UH6qcQwUFPQ6Ldof4JWp4k7oxLX3NkjmgRSXnem44iwuV7BdN53JQ9ZBoDonbj5cok6jQ6hjPco",
  "key20": "CHwHEVmsy1dgh2P8m1FFzPmnB9UgPXALSH3sjgJyrnxCUEnuxdVonmZ2Ek61oPfp5VjUwGU9Mt7VKSsv6jMUMbX",
  "key21": "3jotYKUUiqTe4a2xdTiYHXKsueArUmN8LxS62BT8WFZ6itZ4PLkMhRHkim65ac4dSMEpMdwX2dqoyEPdh63mmDMo",
  "key22": "3jnTpzPqTarPzgykRfFTaPRni3u9h7yJXLsnwPyWYfxLV64eSFAeGi5v3Vn9XaLsXeTVMnp24e2vyeYeinbDHdsr",
  "key23": "dKqGz21ESiHLkmLxzRCpbE6AGK9KvppDWZVsASbREhRpEKDcewfa3Qmi45noQB2JCwwE9EdEKVawMDntmWVhb8p",
  "key24": "353fCb6H4pEzYEC286dVUHDwmhuszrARyhxa3g4D9NJ1ckkxuK8nzW81mXA8TzR3Uadm1mG8vzistiLTW7v4BfH5",
  "key25": "hsh3xo7WhgNiD9AM7YKYcuohMaaXGQzrso7tboc8jatQZ8WHV1MKzUQMnCDBWQqgDCrE4UDnMUPddginoVLj6xd",
  "key26": "kEdPwwPBXAs5iQMwB61pq66TZaxNFQdtVogN1pCxPZkgwZ2gB2kv159JxvnFszMgqVGiL1nJ9KQorLbqiNEPX3D",
  "key27": "4XXgcDXz7ivoEUnqofrxAue9rEyi61EbmTh1PRdD1ni6Ah8AmXsjaZooLKxktfNzrMXYxx4ZEKH7Gub7o2p7rVMt",
  "key28": "5n3jDE6xHW2Y2LznfTjstLsjWZu6QX8wt9LEn9Uii2QUYpUwunsaPVMoXUqxjWBfHLEa1wJKijVzS9gbCUXaVMVr",
  "key29": "3UMko72Q8j3FnPKQyG3oqFgkaCHWQLKU8Jpx25XoiKnhXRjxJsfR85fm7fi4jTZQpdpPkpmqg49mx7LZ6QjDq3xi",
  "key30": "5mBR3TMB5Z8i8kAxxzPpmobA9KaFKjoEGGKVtchirVSbcGVHiWpdgvxbJhe1gqvCmziukAHUfXL2vwYVzpnJEv6V",
  "key31": "2WHMDBTxfgodY8CUkAwvxt8NAd2uUqadGV8cvYLBureihMyKjGgPjmD7t1GosebXPGQDgTPkX49NpQ3V8FYLwoxv",
  "key32": "3A3Ccf2LLfW3M8FhvwybEbSW1U5PkN3AqVWaFnbMdgJBs2FSCbR9pKDdRaojwFes4zK3gSrwEb4WMUSpZZNLhDqf",
  "key33": "3a2Rmho8JABwKUbhSmukFJk4LY9R4eCGUMKtA6LHmXuLvqrM17XFMFXdn8S7smw21i2vVRwQzYThvh3DUcPmhfvv",
  "key34": "3yqToYpN2sA8mLbJCf8RWgktFQwJEt9URVzzWBTPhHn4WbBC1xpLCtcKLpfuqKwkTqa2mj49AEcEhHAHkCKFXcV9",
  "key35": "2bFEehVur8veTeYzBSHADj58aQRv8MqhQsL8Bp2dzjCfXDro7aQYQo8GTigYsa1YF2hDN4EkBAhSFKoEADcBDUmG",
  "key36": "umyoVDdGfbbiFSnPtBxdpNBmHTvWyBRBQhNGQCitPCrEWBzyVKFcxWEPMNdH6xGD34gwQz5ePm9zBNFW8Vfbt9S",
  "key37": "3vXLVJoKuTpdyi7nJGCF5LRU134PXomNUQTTK899tUDjs6TcvHP1doKTmr7yHYU3b1zgapt5c6uun5opjHEBJ5aA",
  "key38": "21R8XSYcj3BjbCe7WexFEoFJrDqBoLsTZijmv6rDMbUGeLeu1hAv7CAHVt5qnpT3StaQLaYAXZusfFLGHJfqmNTj",
  "key39": "qy7A7nHjq6wz9bsf4Twkk93N7krd91gUJik6KHpmiJ82dwRogjEJk6SoN2vHV6uL9zMuWo4ENSsdtNc4BwiKsar",
  "key40": "24fZfFdgFjDCpQNTZxgwecGpDoW8MS1j7DchNA8Qs4AjxRf7aF5YsBrhZYMnEYZNL8F7LwZfVWZjQ37JgB5czTm1"
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
