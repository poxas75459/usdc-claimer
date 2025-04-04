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
    "2cuJL5DL8r54xT3QqqCLT3qCZYMawn8c5oinfTxxLzHmko9gtxjX6wociXLaTHHrPLodazh8xXsPYph1Wkv7BLDD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pVVEq2so9HwPaNw1AgG7Tb6RxMpgXWntrzyTVWdeXRyDdyhX6ZxJi5w2ioEw8KGQrqqH4BC7BEjYMct83AnPD2g",
  "key1": "4hXnBXhsAKNnohZhBDMqAa6LUDFg3azyXsqwSLc5qoR428q58W1Fk2YWSTm57gx5YEgJSm4debpCKpNhbuG2yG32",
  "key2": "341ZWiLJPcGPmXurt6hruNVGfRdsPvSwKko1ufL8wxuES3TnK4euXzakPzG1njCF4v5ekAp8M9HcKF1E6hBjXgEu",
  "key3": "byfbCk4eo1WzagjiKKvofTrncJZh5gkEkoSZqg1PZwNj2hTKk8w8nCicmL6GYUzDaXKVAWjdMrWPRLWzE7ThdHa",
  "key4": "4vq2Y2pXP2sMSppWiPmCJbdJGh5aUTGDrTXC3iM2sV58u5p2WNwhhT4WimpjyEFihywLU5CT62c6WeY7npzxKpsB",
  "key5": "izMZix5Lh8rFcZtgHq3DcLxPt5NGPKn4gJnErT8cgQCQhzLF75121w4ke4hKYrsjUxqRNWfyQLJRaYrWjvcrcsL",
  "key6": "54Q6b94nUvNjDtDicfkNQ3HzXTjDgLmfyPw3FTe4u1nvXF8QtkYpXiJb328twyUVwLLcJjiqjh9hVZ211nbEMite",
  "key7": "3uAsPvxV8AzAi5Q74PCGs3khEJdAdLxPv7dLdehc2rsSSh4YLCmZrzzsBw4AVody3itXioeWVciusQPKHHRu7jkh",
  "key8": "4Nkt2rWywWw8HAKokFrenpgwFWhFLyhmUcwP9nsV5kL8GjdUo6ptR55m37LYhsfNBPVPQjUBun4JFY7kFdFMQMCs",
  "key9": "2ewnmsECg3kLdvnVZYHzpnH7vbDaK2DtRoS8Fo5qMiaL7XN1Yb5EL8CbjHXkfn9xQGSwUmTiDSzc71HbR7VATGFP",
  "key10": "2o1xbQUyL2T5a1hJECx3x5vh2rvxLAY6PEimETJjkJh9ShrNMCtKo3snDWJrWASZn1qFgWFM7TukBrnizv7W6EyQ",
  "key11": "5x8ne6HZAABS1ogDMwsF5M71fV1tNL84RMcicvfkmHmVFZ6zYrv8wPJqoqdayNRwddPkd6wY6KEZprnk1KX7A8eY",
  "key12": "3ymEom4xM2mzG5x794i7z6Uc2M9JDFtUHgjqqn2X2cxZGwWDwXZ3SV1FZ3KGgnJZvQK6gfZ185BeiJdPMT2z3Wqf",
  "key13": "2QafAW87koF7FPQE9Z4dLTjDGzVsEvtXAjipp67vcj3pES5v1bY4o6XiFjBns68SCyD7yKPpoM1vvN8Pihv22o6Z",
  "key14": "5taBgbigXDFk6cmxUwpdrPrtE3PQwC3LJ3fCb9LXSdD6UyipppvjpU8yo41mMygu7JbKA8CPGh3VvdJ9ERCibiFb",
  "key15": "62NDy3GxNdYeYhvHMh7vhjHZNQCzZbsu6MiLx5PrkDtzXfVhGfKw3CHhzcvLBJSk8diCh4UJ5eaN71UbZMuDKUKo",
  "key16": "5K7D64b535CvU83p1rinFGmo8wENW7DyuREsa4VTVWiLBuu26D7FDX2pThzbewKwERcUhLwUrWi3PxgdZaRN93YA",
  "key17": "FJQhhLmvPj1JFgcEtH5rpZEkKcPbUDAS856uKGCDBGpkmJCNQaRCozmfYMaECr1H5HmtBhvu2rgwGrirUuARdV6",
  "key18": "2uyPTnuGYtuo2aXdVGuh5vPij1ERg178yNzZULC3ot3SMJz5VsVr12NmNqvNucjkLPQwrW2GMRdPqMMKApdBTjDJ",
  "key19": "4eKegfvBGC2pwKNf3DFzNwN6Jht3qCahsPpWJYWAKLnRFgEyCty7bgPKuWGcSnp8FLMeXcR915ABtmENqBwVe7Nw",
  "key20": "2dr9sTYPGH3pdvHRVBvaedc2DdAZCnoaDn754JYMnH63b68Jm3WcG17pZ3mdNLooPDhPjVkuWKqB5wzbwsFMcqte",
  "key21": "4ZVvfxXqA5YQzsDGLKhovv7XxdJz9h5Mbg7NQTrragEcoJA78oZFoEzhCby3NwVhmyEZVFHhoNYk1gvWWUHntwaz",
  "key22": "5HyWe4mzkEJVo5wzRaPyBMpva1EtxfpUYrDTnfVmj6UJjA2XPGgQKcGWffDN7EHN918RqqS9VWnZBALtSLruhRgh",
  "key23": "3xeDhaqhgrEALAUT2ksLydYHrjBhrcchY7Q9eVtC3t3b3bNiy78w6sGoQNwd2i4rCbC7qfg25qy8B8RfghnVBTDu",
  "key24": "3wHSdQdiSugSTcS3WrcX4uAwcrQnWsLhjqAFCKb13X23CYu5Pujv26WvLAkkTwa3sxpyvcGZ7623PbMvRxTpwZgF",
  "key25": "2JWFTjgtkZedVE2jVELAbG41PGtmoXq8RW3Dfktbe45irfoF5TjApP5P6aoEMJ945d55gfztWeqmemPTBw4piVaA",
  "key26": "5XeVyT1WeL8YLGWwtRjHR5mrC9Bznf9xv1qeXX5PF9dC1H3kDtZrtPUSKsCmkntohzRsYtqd41XYaQStZgjPfTbV",
  "key27": "56ySgNgsqSZWVgDpH1vix2AZW5rwZeurn7r2nExYXMPEGzcK5WHLPyrT19H9FtY3Z9SWE4RhfLmBAuzEJ3tzF2Sy",
  "key28": "547YRRUwNVP1zWMjVmDV2bXpLBXCDQ89cgZDnrxLKMr6nhCJXvUU2hZZHoNsJrkcqpoKUok8uEPpJ8RXm6gSdS9n",
  "key29": "4CT2Ncm8zBqfcq6aJETi4A7iRVTVnLgFuKys3BHXCRoXR66kqpxB4PFd6VwsqBkg7ArF3sDN9wvNmvg42zNhZe8V",
  "key30": "57EvcSuMrriRz7fV6ddaAW4U9oy49Jh3Wik1Hxt8cdVuYKX2tRoswMMMQ2TCuJdWwKBoE3ZG2GP9k1LdiEDtz12w",
  "key31": "2yVNVbBjbbdCT5URg47AWzQXUf3bQR8CF6B574gszfWtLjzKotJfGUJaXxeLiEmSa7CwJVakNtrv3VUzARoHMMDU",
  "key32": "3ttNDmgRdD97Ad7b8VBpthTchnp2pMNdUrZkFNJwpqyznf7rEE8EiTtTLMEMzPDxCjRqFRM4v8Hv7Qo2DHH6uFZ3",
  "key33": "D7wbaErrBzJdgkhF4L9U4pMr7DnhQ4yBZRFwXVTt9d6UGXMtcdTrPGAzpsvGrQLa4WjnHzrHnJxGMQxiJUgwo9L",
  "key34": "36c2VCUjUg7z8gwPn2zHPuQQrayqhtGycHGfa7srQHGyFT3Qr5hjyC6zEfvBHcDxHW68TRE9u7MP5hmiHPgmZYRM",
  "key35": "2v8p9VhL3TF9utD579VYSropQHvVWUDhJVUX9GuKEkbYuLLog4QXwBuLGfUGX6bzTZQ4ZhDgrjwHvES5wxhxWQxy",
  "key36": "3zyYZwEg6x78geXXQsDGXM2KQj2BbjeNvgHrxuVzcQUP5NMVxCemUiv35M6tw591MXE2wYRoRGZmfYNipoUACL6F",
  "key37": "5y1wu5mUCFG4UH7hZLLH124PMy7Y4bwMeJGQejLdkD3AEtCQ1cKs48t1WysDnrnuohvzbkef7vPTYTdXKXCJ5d5a",
  "key38": "4kN7HdwgJUhCBp9w4wPH6dm9zcqUkeaya8nbGbpU3DADuMV9qjj3cybGf3knMdVg7gpLNfJd2vgCs74qRwpAVMHW",
  "key39": "4JBptALVGdZqyrRJor23dGfoBKVuxVLAuJd7pPKroY1e9GfauNBPTupJ4GTbKpVUvSMcY5uLkRy9NXDZr2kV7orQ",
  "key40": "cd7gLAd2ZvfLaPYPkv8Fbe2CeXsbi3pKJ1dsEZKv83BAb3V1zhbRaCgdW1VdxSmeFGhnyULP3c7EAp91FabsHcT",
  "key41": "z3uEK1VgPT7ryxjmRvkP5dAKvFoSiYi1nXemQfTiNM6F1DNq6Wu6bNyhD3RaSM2hFFmbcnQ9PYaqDoYY1fcfNqg",
  "key42": "3LBqaiyFcMmvqr37wapkDqLHCE6awscPEFv5GPj5dVaNn55is7QkaJ9nPMzAZFbd3HXFHFP215yLL6yLX2M7VU5G"
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
