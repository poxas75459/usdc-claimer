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
    "3346LM5TzvrCNyeUvaScDkq47AY5b6h4G3TmizRyDgANBp3fHJBV7CHWSdC2sXuY75wypz2zFuKt1ApoDVWMGeiw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cq922cBt3QP1Pzj8cTd9SBThA8Np1v6uud71frEhQEJztYkw5QGxGuT331tXLq2aEZLgStXhnEzmsax88A82KbR",
  "key1": "4XdExHWbu4HjDyFzbxxpEc2kdhnCr5vtPnPShu1SwxqFxCAPxUN8U7qaoMbW4p9aZ2GKSZUTLnz9Mb79RY1DmZKj",
  "key2": "4UCUKToE4Dyhu4bcgbcJFgQ4awZLuPUP4GEvNpMvUenLhVdkJmETUMEVaGhLengyULNwDhwYvLL7rkeGSXVEHm2Z",
  "key3": "3AFwWX3EaN3KeGRhufsuB5MTpbzZyPvQPD4BRoZnuMkHG7Hnf53GSqADBWGXFzJZ5cUYdGzCXqKdBzeFQaVAyJWa",
  "key4": "2DP12HYiCzMMUigbEbTym5XvAsA4yHXwCLN8YozLXfi8khiVUgDPvRKPkm1WoGZHi3pBD555jkkgm3VQ7s5KGytH",
  "key5": "5Yp49tDoo9ija7gcSJLjkd2RX6QpkupVdhMM6Kc7UhRdVDPsEJtFgdVgssSMVu6iPsqajkgzGeUaTSAkQvzeDgz3",
  "key6": "5ExEJMwQ6W9b35Jcd99bWT2MSTNbxq7HZVZMZcFC7dPZM24iCdMYbZnRG5d4kW7pHXysjBz4t56SAFP5kD7KgrKA",
  "key7": "2drTsm7wCGghWMuZPceLcZhUzB2eHaDPNdh2QTC8PrX2NiB6XgJX71v7xRfhQPnkq4K9CBvCd9TfbSBNcJcsTK4",
  "key8": "2yAznWybWfBtmoiRd2DFCUEUdNQTscJSVRSCu2NQFZRVEGo4BasZsUzBhwwii5FiKj4Le9brm459Wxwbn35hVihq",
  "key9": "5aE45U18N56aVUmhN8SKr94csghHRB9oNhf8AHhz3VrsozBaN6i7CPHXKa68SqVCGZZaKxAZZC7X5ww8eVXrHTMQ",
  "key10": "ZjEuFXsfSqJXZZ8wBw1WX5QDQuj3TLXjPbfhHzffLm5JHDAmStdKdHYBks9S3szSQ1mh4NGx96THdf38LSsHfis",
  "key11": "3dQhp3D3qabK6emVJQsp8zrdyFFEV4evt6T2pj8YVMmBXGKP5tcc4HocLXqYR83rVBQd7WdtNQX81fBPnPjdFLxT",
  "key12": "5Qvngrg5izBJNsRoVycXHw91wbGgygDLYwMwBB4rWRzrAkAANhUnEw3RFq9VpiqihM8rznUwFPGnDfWD5Sa6fvtr",
  "key13": "2W6ZRU3rfowj7PRKGW83DHnKtGeYFo4buisfU78ihqnvNavwyrLHJbUcuJeHWsxfbr58EjXvyfgy2X1ugFVxRFMf",
  "key14": "2GUvxNb12NxSxm2dYX3ZG2bvTW4RwXqfHrJ5ihjGNENYMhwsmjR9d2YovtAASQErBYwrGh5TEoVJjX2nN61hUmm2",
  "key15": "3vHC638XXVoU1QeXXYQvVdWwgcv2VDVUxv5FKkiEMndciJsq9zPHcQ3PzGntd1WDWaYH63X2HpDSBw5wWxEYCaCj",
  "key16": "3pPMsHQq66yGBFL1hRL1yByqwiWoAQ72kLEB6GRyjHSU85xKNSbgdL7jgM551dfN9CNVfRW9N8quUraHxLMsgeto",
  "key17": "2unyKgJgQG8cFyaEj83EXVGWDcGGzzyLNohzzJT2PxuZaotqpwkcKCtDAm9WXsTTr7e8yJKoGfPp5DRycJV2BDf7",
  "key18": "2Tq4i9AC2KPuqMQj1U5pZRmE5jd2pSLMxSE9YgJJ3GzVHz2U2EmXGqBtWmntADi6f8XKGAc348VWYCCjfQwk5c6g",
  "key19": "32FzcFDfSe4k6b7TVq7przFLwJRNLTgYFdaYZxBLksQsoDC3KumYexS26qC2RmDArLjcF4PG6xFkYrMdtwKQtUB3",
  "key20": "5Fq1aEJj7LKGeX3TaekitjAJLhVteBwJPHmGLTLWUcd71wYiLWJPsmyxjghm3rhkjwB4fNcE5sRpdeuhF7goNVjJ",
  "key21": "5PcqFApvW1NwLc135qYxXJqAMrzdcJ77MPgLJkAE5mkCWmAE6iu3gcCuFnrZBVnSwJ8bTVx5DCqkJ2fQbeU9jiHa",
  "key22": "5FzyFwLRc2CZBvgprbafaAP3LKweLwbvdKbQ1mpP5NmAxC7ZDS9bnzoEx7QxQPfcwakVoEKWgnPSzijMT1UA18R5",
  "key23": "3gVRsABYNyAv1YVi72p7HFFK7dJgKcNfasCZjMmV2LEpy3BKBQDCfDYmQs4vgzoqr1gqHWFiM5y3umu7Ja7UDuC4",
  "key24": "2ey6oQp87M8yYhGbobobLu5oTom6so5Gc5b7g4GcXnTLMd3fsUeKdqvoVEUXJZAGgMQsRRgVBusGC4nkfS651swx",
  "key25": "3gpQXEvCvhseKAsPeAJNZyB9Mqjm48uBhWWobk6ZdAR7CLmY8srtqjU8xVVkMFR7bY3pxXoHHY9GkNCbQN2xme3U"
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
