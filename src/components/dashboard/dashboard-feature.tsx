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
    "3PmXtd7Ubwk19BXBYqt6iMTDatyF8daqKpjH7FknoQNa13PzX8LvzAUck3TWxFKdKRZTSiFwJNwZrWuoar8ppudi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ekPZKGYFJCyCwhwMZ4f5FHVmtiPsGffmpkWsvLkoc9hRNiWqtJC7Q9jJge1FxAESTaLQ3Ftksd5SjzH4JGVyCGs",
  "key1": "4q3R4K1vFZa45CsAo1cwQrdbeA7NvooL86r7gwGB8eXgu3A25rZywWgCMWhSoovMzV2sdWabtsmaCUfKkMNZASwz",
  "key2": "3dfNVaxfE7UmhEsXGiUVoj8uTMR6ZUwDTBeXePheRFM9dv9yCLRcMxSFarpreQYA3VF6LuMXSCQq5RLqzuS9u12U",
  "key3": "5RdeiDDpi9zLmM4AQ3Gc9Pqx9DvYRx8oVZXuppviyGEQ52dBjb2aUw8jKwk4Rxu7Dof4UMejpvLhW2hctbGjXY13",
  "key4": "3MRszXEXKZMehYG5ZaiqiQcEUDeyZB8w2oUKYKgGyyDxd7aAnMSC7qyMtAvVYFE5X4vxGS7eyzAx61aYPvSVn8D9",
  "key5": "42Ug7i6ok69e2LTsZQL6Kfb7Ub74uz4q48no6isqGrDBrAwsgVH359PC8tRVT7Rq5TR2xd1uSBiiM2u423StnDkQ",
  "key6": "4UeQD4rjKbtsReKXU9gCH2KgfAyfD1RP8M4FHosAKcg8t1PTGYjbhdaTe6jb5sZuyqMnXajBcRDipksghbqz4Wh8",
  "key7": "2zSTpjRzqNvjZruZAApunS79QFnLeDYzzFiHPJzhatLxi96jksTNEYVWsyhAmx43CYVextQcUWZT2gHkqxNUsw1M",
  "key8": "23gjLEJCdEgn7CzJnswWPpts75r6Lz46g5nL6VcVgskeJ4t4w1Me5JvNEiS1NwgUtvkR8cc2zuyNSr23DQrpeGmt",
  "key9": "3RxPnZUTsmnaC6WWuRWwuAgsnvC6TnknoV2XocLK36VWCQR8oRJB3wCiaoXyzEU8dmTVPoBUKhS7rXREmEuFELJk",
  "key10": "4Z6D4TZPh6ox4ZooM33QdE6ZmfuG22NonT26WiErcS7wWeamLkstsCxaZwwEH63W1r1mRLAo1ZaejFDydGEqt9EX",
  "key11": "2yEjGuiLrsC63AtpvGBy7CmK7uurhHbDLK9EB9ihLpf4cB16DdRzNAvnZZV3iA3JaNH5fon3n7Qu7r6QijhzTaAG",
  "key12": "321LgV38JDuaAvzKEGHnbBmZFsqTsDDGXnKGunHY8EyCQvbcX59fGRvEWYvSwqUP9SdX3fNcjDq8jSMCjiSmzHPx",
  "key13": "3xMKFvwUXzidVsYRipLRLfzu8aLF6aPhEvSoj51id4vLcKFvTBdsNyAArdgFAWGkEaLCsot2mU9Ya58hjM9Zf1Qe",
  "key14": "yf9zCp9HzxEkhEaVcik13YUnfSMBfKsd3MLxzULidJj5M9wCQJeXpiwi32pUhV81MrNChvX6pffeb41fWMkggn9",
  "key15": "3m7NsPAoU3XWLaiK6LohwmxSdorcSEFqZkBukFnsVA7vnHhT7Wmqx9sA2vMk6W3e6CUsqnDMQFKAPWD2aCv2Pk1u",
  "key16": "64bmWvY1XhSbyC73o7hE2Gm5XX39KuNWyQcSKgswApeBKXS5xYzkqTMnHSJvY2TdXD6ko35eXq2UiBqVm2BzMc1m",
  "key17": "HUjgWwH4yytkU5ufYA3AsTfsYrzdSJPaGkDy99pT32xWiTPxdA6gCLgBiqQtijPa2RCUfTAmP9fGuk6oVpmDecm",
  "key18": "D8QVGco5BqEno8SkeL6MQpEXgDZLY7Lz2Je15TDk6juyNFokDbuQMs5MqTqRdv87mPcTjw6xm3N3ccUWJuYX4mr",
  "key19": "5rE63JPcB9m5jCuEk2mFG8UrwnHYrdcd3hfac5bhxUc7DzzD5yu5nGfzNunC52A1Wv7qC68ZjP48hhQMT6VPe8pd",
  "key20": "2kUcxxyD9SJPhnrvPLT5WbEpXGcj5DFN1aGvWJQr6UYebKrXULLR5jUgpEBxzz9xhGvfgeVi6ckgmYHzw3oraDdJ",
  "key21": "3rUaqkdmAdgqMeyoyXCyyry1UC2P2hYpqjuY11i8ZLkNzKwKEErkynaJwR9ZLyDvqGRgCJqrBDgto7pPzRP89WG9",
  "key22": "4LLFFUxZKCijvB9bi5NnTvkQQLrie3Grb3nry2PbSQGiSmjHeZWFRie1ntFotu1eh25uGnMfm6JzkZXcTPbPEMBT",
  "key23": "43Cd1yyDPUQ2P3eUdBzMV4bwLwDteumRewB5pGDK1HFUXtW8f9petY3NVcLenmf3eMTSJF653BcvDoKuJ3wpTFUB",
  "key24": "2LicrUdqZdTK9xsJDkC7jrY4fCe4tupbtVLK3D2RnkwnLfFHGYELPD1wdk3Z2ZFNNyf9GjBgY57MNF2i2eJszHzt",
  "key25": "4kuqVcggkpn9Xt9mj2u1u5yMssZcioQK7DH2FnjoZMQBDk7Y7LRj3KZyQ9rdtABtj3CtAoA1aGnTPgfSW1WsKPrm",
  "key26": "4gX4TaBG4w8fv9s6MBiBzrszZ6Q9Egz7egN2qsZTL7owrm2Awd3VffiLtBhfMVCMnszC5EETNjQ9gFGaw2W3kYwM",
  "key27": "4HfhB99s5PgMduis5Mr6F7rdyJXmpoRwNrRjzHeVPyA3PJSKfkwXrePYevLKABJ7Q9zqoVKSb8wDKQUEhf6hg37Q",
  "key28": "VUwg22MzWDjRMFijNEGNkxu2P5nSPMSEaSHBmEboV1A7AhNFW7EMHUJynESQFAfb8RacTpacfg7nyLms6dMNX47",
  "key29": "2VVVdkYZFgFmP3wKwSFgrPA9Gaz36fN4baC51LmFXfko8ggPht2jRiZYn7rMYNJgDBFEmUknBFeNq3KNxpEyFDVV",
  "key30": "3VxD6vYf6FvdqXeJHsNrDXzyUhFmZraVKbS3H6PfgGLxD7e5GUyGEyydY2yecpXEmeXdW8ptvfqEiiyXXCDCJQiJ",
  "key31": "5AMKohspEixp35haghprU1uHbbGuKv9zQkMYwrvVdUCu8KARYohoNDuRa3qvCA7keAugZUNKJ8Ds9oTHUEjpY7AM",
  "key32": "3aafDr9641J81ejUJN8GGZPavYjqJ16XGigMNwuwPiaCBp8QruoEaRNBwtfd7VRpYWy5ti4ADdgxEDvNm8MRsyy2",
  "key33": "NEFSXddXqMRno7vTutxE8gzh1Zsa8nMbCpt44zhrUSNeaCh4mSZQDtsAmduQ6VsWLjjEK5SDv1Zy9VMPuFCL1U1",
  "key34": "2FTAVsDXCbHg9xCv4zYXbC8N4kQDXk4BCdfk1n75bRbmFdZFbyN8p6UnY2qTZTZJ3UPeYi3amgtksiidKCu89JiW",
  "key35": "4YaztiSdQEnJoWALDRbz6xfM4v1CK3DZsQzcc9EV5mNqMN44NH3yYnw4LjD9mrXaSKiLijaaujuGSHgcAt1QKg3p",
  "key36": "3nEypJMxSAr7yduxPZK5kDo3BtwG3yvk3iALBJkQFBh8tFMyMoDbrjaYMARYzoYUjajQ4Y6479sy8aWjVWSAvKUE",
  "key37": "4VXvs7Jc7dGzN29PGZoAE6ywzkUrxezpk5hxCxjtwE3W49GMQtGFDMcqeQMfdgCgUo3pMuLjRGbvTc9ZYnJjMhkR",
  "key38": "8nAwavkUn5W1NQGDd3hJZBvky6eVtkXboj9HNZ67D4k3nMxLXoFLG2NAn1JhdLQjLKAGRrQkaFJ4F3JAhoxqK5V",
  "key39": "3wqxt1oF9P36h2gwy8fKjgNpUik8gKXsKZhz7rrZxfvQ3x5HUqRSwJZVsaLoKsyxSCMxx9vcyKJrMEBndrHwvbG1",
  "key40": "AEqy1GvPJRPwDRbDRs7Yhj69sxZBDFM7jqqH7RC7VKVHu868dYAwroh9z9TUzBrRFiLqG1eU9mfsKPgekgo6qUh",
  "key41": "XNsxaan8PN6hV3Sn9nUPogJKA8ELen7FxtfQ8XiMa7imFEbkKYUXvrhpW2Z6Q4ZrA5NnmStTEE53vFfRGWfx8xk"
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
