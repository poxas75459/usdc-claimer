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
    "xmURbsD22QH4yr716FdfLz87rJnZVGXvJSrJHGWGAsXFMyTMcg92j2i7RwiQYo5UQckZYnQX3GURrPBv6irthYN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bDZqQmqJwjEHJUdt9pb1aHvLLHyfpqLAh2n66is5GBhZKzT8fmamHkiZTQoqjePSNMKC16GXHUyg1D1XrY6JZKL",
  "key1": "4nqmBCveyuHiNkhY8AeDQeTDzDf3XWHEaeMrTvgiEZcKb1hbJsvsp4YVswdRLaRsKPcWnQaUN4GSX1kryZAwh4Se",
  "key2": "4Pay1sJzXqewZxVHoaJTPE4hfE1XbS4zgvc4Dqzn67Zykue8tyWnXFGwbUFuShmah5FGt4qrpmv6VHwVihtRXEjV",
  "key3": "52TFKHzfWEv6JyRMes4yD8aqj7YWdSt8gNWBFQnYWQuPtFbYF9Nf2rWf6o9PodEPZQtjYRQjuShxpGqDEgFBGcRR",
  "key4": "4c5duVURD3rqY6E5Jh9deduVK2xPYiBq9hnAbRBEnyVNZxoxmL1oFMqhPBmMpTLafFwcmZZwMhPyTweAm8neZBnw",
  "key5": "4JPogfSkZrYaTCBBdd814LffjZVcCvqfn23Y6q8eA6g94F5iDToPxtu7B7vdWCdjkga69uBSyFq2Z1LR8vffnGkY",
  "key6": "3nQP8fC9pkBChFdC4e9spXgqdA1K8UHHGTBDau5qmHtq5kyvonuLJHrUTYVhr4a8BF5SPm11QEegtJ6soj8AQne3",
  "key7": "3mRM34SpNGv1L4f3xj6HrSZsCQN9HbuoqgBghqncxS1sNiNGhcu1WiEDLkVzaLEab3kSdnZDUeweY1j1vdUG29w1",
  "key8": "fcoumPSPn9nnGe5RG8mnPXp6NXxwwPFda9AbhpRmYDzaKjUiUpvjR3kJx6cSnGmLswoe4NmAZfi5givswq5C3HQ",
  "key9": "4KvQyc1MvfW65dLsEhcJGLXVuw5LWMA7tsk8nBVWuWVacZrvobLrB4rxKD92F5WgSPjYUbD3iJ7prMmEArCKVrXM",
  "key10": "2ai3iUGboyEX5sAMuN86Jgu6UZZ3FL8UqDnVks3o4S2jf6fkJSBUiHxwgMTpUAnNmQs4TyFTzX8DnafpVf4Gwh3S",
  "key11": "24FdNJ6LHGUSF2v1NPXqv88TbbSrLWadTjcCUpyoGcXTxEtzwDdiSMHT2snwUZpUhFfg9L2jHchH4XDrJDrg2jJT",
  "key12": "2LJf1bKvW9zkLVrek2DYs4Tx4ewVm24fG36paymeUkG5kmPHE1wQ7qS1unA5BBC6hpVxXwQMPBxs8ENdoRhNkwqB",
  "key13": "4UhCr7y5PKTHtrYRC2qWQf92aSB6MXYePG5k7rfuHMsGHrYkzYLWnX3gLbJCC3gW7jWN8UgDhTArLmuPgbh5Xnjv",
  "key14": "31rRSFhCCVzrqsfygKvfSRd3C81ddmimC1kiQyBWjbPEonFBor1b5JqfXp4fhS31nVM4LEhUMLqo8urWDFuCPSYx",
  "key15": "RN14sZepTtNZrLSBjLNUXXxEcASj2VfnWaFgU4gXuy3pjybVi3y3AjPb45P4rD9Bz4b9Kaqe3F7x69CJU6z6QXv",
  "key16": "2BR1ngzeShXGmsN7LBjSBaQGt21XxcyJUMrRGUyiz73ckHuVTse5eyLsfpXM5rvLKH5oWJ26sHidp3cjBPybH29s",
  "key17": "55hQ6qLnUNFe6KAhnM3jeqeR59ioEpYjKG8kKJXH57U8FyKYUsiHcJNyzHugyqbCYgd9v2X9Jxwi62YcjE59Tp4a",
  "key18": "jPtthpM3hyDh4P6KDsYuGTB3S9xtRugcoz1VFnguiXM7ADEu69KY6XaXvzmRj3ZiJyNAx8GZkGstAJQmp7PPoyd",
  "key19": "5YMqrpdPDzqfGYFhcEps2fN6EEFUGyFwBW8Vw3Nn6SLtomFhiUBvncLxybxD8tWsbfmuU2iu3TngEwNsBFYc5thV",
  "key20": "2FLRhbyBpckXoCuJERKRHwmfK5owahhmhrFi6u7ut2p6G2eA6REgJgtkj89BBgo4BiNr7TUez5NR3Nr2q3NkYLpa",
  "key21": "2Pb11YK9fJdCLaDfrhnixDXguVZkeYT7o17fMzbQwKgD5zLuaQAoeVukB4eJR8V2qS9Gup2A3EdfP6eQ68jcL325",
  "key22": "4rKsQ2k139xEBeFsnSuaajY7iQgZDMf9i6NijtbZGhKaiaugCSSqroNccJRRfbcRzy8H6xDsbNE16npPCaZsnBEk",
  "key23": "5aTHnafR26qzEtoMux7w3ecF4fKABDdRYC2GSYTYGfqHmN49zAqgNgYXyhNU3CxLdxK8TGtabYBTghZhEknA6dPF",
  "key24": "2ycTLw9ZhK1Pb4ZcqVDWoTbTr3AiNmSfQqQcCV9DvYLPaz8RYWpKqLz1HdqJ21Yp14TfCvR3fmcdAnxPuvmcqidV",
  "key25": "4KQpjdcHBd1Ra7fjGNrSd3JJLSS2j39VicQ6DXEW8CVDM3PMcJRX3mtvVaxodx95QesPcuY6DufNfXBaVeanCMar",
  "key26": "5WEF4nCx6iLkNrjqF8CTP6g1xZECHNJmrBZMQk2buaVgdLn46RyhFKUtAms9zfkpvTxnrmhPjtHH5EiV4tGKvwWJ",
  "key27": "2JAj9Ke2WNopZ4rtNdPr41yNtDGvxwLn2fu15Ms1CKNLGY1NoEiU3QNiH4aZdUMzGrmsph7FmcwNfPBfvgec2dW5",
  "key28": "b95DQE1yUevViUmpWhQctNLxNWM8nNkmuEDZvXUG4eympVBEiJpu3pSf9LeWkCKpdgS8JoRXsTPdmLAbs9T5WGL",
  "key29": "2MpLCFoYXTHz1ZWcU5YEvnhKjQ8hXXrAGehMn7kgN2kpHvVLLvnTT8GowuSFzsCZHWW1N7FviJxtvh9o1iLrHTnA",
  "key30": "uLR97ZFRpk8byNAbhVYWVPNasHU7QDqHp6PcTVaCwkhf5uQtNq9xwvkTYmwy78acWFq2GnQMijHHM1hPJ7qUp8c",
  "key31": "2mqUw7jQ2qrgiLTJiSXTd7CdnzT3aSDkKBxqr96kXmEZnMwFw59ntWtU4Cpv41GL2fWsTxGBRb5DzpEg1ypabMf2",
  "key32": "3EdbMZA21odgpmRu35jVXmatbEWgknkmn49H3hKvRJQix1JTbJqCJjDo2LDDvrZbmUty5Avg2CnZahRCpYF6LVup",
  "key33": "5WbdZJGjNuqzQyMkjBJucAzoZdnWBYjJVjRnDDh9fowkSf6Yd4HxZDecZju1WiUjC1JVbW79S7xYzxCG1km3gzYa"
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
