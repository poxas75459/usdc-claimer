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
    "kSWwbYrUgDs5D3UCBpYveP9UWe9P2r9jqgzRu7qi32SiwDYKWD7w2SAAT9RBmgJxrZarq9yyKwc8pG6aunfUuKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36p9wSVsY7HLJ16bU8ypPfU9gvps8biZy39iEdSYc3WdovLUFJxyfujrMXeTtxHs7B7EBjRudpD9MNMTyfUiBHde",
  "key1": "3tuFMzDpAGot8Bhq3b78gACzo6m1kckspLaFYaUpYAqqzEGuq1LmCpKikZTg1bb9ETEaNZ9scJHh2RUdggEmSjfM",
  "key2": "5ZU7SM7qYhQq8N6csuT1aSxybJyk4qhTsorq4DtiBfKwoqMkh9PdXp92iYAgP4Kd1v43m55cyXwLmSzRYuQ6dWFP",
  "key3": "3PfuiQnc2rf7MHsPtWM3gj3GWSiSQvTf4jaJWgSJk5ar7wopcjcTAJMnUEvaVYcFzZqrSzxTVnsMRd6smQxDLxnY",
  "key4": "mBeN4DoDtYUgNEjkzeF8DZY5wY9ttTmSiosyGaP8RLnPpEavgoGQxN119xoEYUYsvgetJdYEUn8Vc6PeFioQMru",
  "key5": "5nc9wKccQmrL9RKcRWn68R72WdtVb1Pex5jwceK39A11Fcgumo2qgiLx6tep2x3USWjP6dsj7fxcLEmH18Xk2Fej",
  "key6": "5CPSTb573ZLnFoBhYCmbkQV2WK1gu63VwxV8S1cab8CaBrErHPP4hztRavzGSnpmYfmTkPGfrHiB4m9bB9j5Jeen",
  "key7": "59vh5znU6AnS7xuiYA3NxJ4UXakJoR2arrM6XmpCEdb9YaP6fuVkMPBLsZkoPVKV9c1Lb2GyjycPrWWFQUSQs1TQ",
  "key8": "3eVTZ32F93aV9qXGZJBkvHMcgcGfccCTxAN1drZS48yqUAzStcRLAbykiynozZ5CNVUT4isXPBwxi5qUjX22WAfz",
  "key9": "2M3AtCoZ5VbXkHfTBwC3WJBC5e4zJRe4kf7Pfz4fqs6CQTusbziR4Bwd4xJ4VmWFf7xfCbEeqFwdjLkaoqNofTku",
  "key10": "3eLG3xXU3CHH2xRBixLvkDpQdE6TfqTFAzS3oExPiEpt8iMSWUAzryEUvpVvwMa9LJ5kh3xd5CzLHJJVTDDCuFVQ",
  "key11": "5c7zcTG279YeKige1sHHaKmjZEYyox5kanp2TjruyPZGTFaHZSv9qbHr67Cb6gebLFjazyFmkKZMSJVS4yWAjkrR",
  "key12": "g6FkqGx5DTL2CU5DeZNkdER4jVbTZ6d7DYpkK8rosNAr4HwkeULv7Ey6CkCXWEZkim9YFgrmKyDuECmjoAqrEjw",
  "key13": "498gxQySj6ZHpQ7Jy5knjmhi1kCQtUeJQnjwyvHicA61Z7KmkWnNfD6JSPJjzy1D1445jVAaUzxctvhc8XKjmuzf",
  "key14": "3j5SxrJLofujDjW1Ljzxq5PfzDKSELZHnJtFJgobBkHW852QjEaWnRnXWFMuWDh5Zx5Mn3NoU9k5JxaAxgRMYbjY",
  "key15": "3qJRCtoZ9HoNrz1gzyEbW5kunewvMVZzG5fWaePCStASTghfzTzQwPd2PAmUwQrr53en6FzZQwJuwGGDx6kbiVHT",
  "key16": "4N1aEtHcwpCeCBGSFPmFerqnhPSzUqzMX5uAeciYeWMDH4j4HajaYViLzGwH7r3hyJcH6iCnd1xy2NKaF8doavjz",
  "key17": "4cqEJUtjS4AQtxmBHeYx1ic1YCr5CUeTDKbCKJep19isfkM9rngvtHJdJ4dVgdRE7JB3vfrYqTKZidLpzaGwrj8Z",
  "key18": "54byyAzknxihxiUXnVM7k3eCVQa5NJhqiv7t3c9hsJRqBKsXWRRV1ek1mo9Dc9D32AfY1TYMLShfyus1Gm7HAo5h",
  "key19": "Zv81tXGmJ2RYkFCumVddpGr3iEMDqQa1GAa359Yfg7B3js9z96yLiv39Quxz5QchBjLDLyabii6NAoLczydZE6z",
  "key20": "3jPZMZ18hhmwVXCdY2n5ncxLi8DNFjgEgur49LjQjaspsfzibPdxT9FdaVCy36BRHAahE2BgvFbUFSL3XQGnmxBs",
  "key21": "4YpKYJMt34Hb533LveUQD3jBfGVPWzNL4h8EV4XzcqbsyL4sToruUyw83LwNNAM7pNEhYLxYRgLteRGiQTdAwuyk",
  "key22": "4qvrg4KwFTjL1YHdz141PLAWsHYeyHuD1BvBfNUan9NvKLaNSnk5NqCjsUxZZ4q1JwZeYbEAPSHTBxiidti9KrJE",
  "key23": "64mVvbHQnTL4y6P8KKnnkjddZNrncBNQ8yqc5aUgbuBg5ypwngnaPDxYy9Dy2Uu7DbzKccDzaCUcfLTRu3D9bVKc",
  "key24": "yjAgmTinHaX1ybEMBX5H3yWNMxfeWNU16VYu9TBwhmATKYJhU5CSmLLsSoWfp4hFygk7uKSWpwN8D81nvsVdJyG",
  "key25": "4jNEKjNcXSYbjeN7dmbYkccSeWSGdhVuUHaXGWJDgse1TKoBrY8PrwnY15uCMQ9JRVksJFx7wZP8tgXBG57jYtcu",
  "key26": "5wDjeYijpRuikmSA8W12bWKtr9RfoPd2EVV6XjMhzazEyM6rubHuVMuF6dHzCD17124VBdbyS6YLMQzbXWZx1QkV",
  "key27": "3jTMeUS8bxgw9X7V1Jidoc4rRecBH5nJvrNW4nvfRbXQ1vciu4TTivVcHEfDuMaPo5KftUUEyvNs2vHid3EpunEA",
  "key28": "3HxTsih5orV7dMrLozcUDnXnu69cvXstzBSaNwu4nFtNSqBUrmTfNAEUxc6HrZwu6X6rAQ7p8xdFbnZwHddM79AJ",
  "key29": "LEpvGsio3qJUhEq78r1J2B1jcid4iiHGn3S3oetKYBbHmUVx6hWuyNTkKtuTJt2Mnec3CiVFfA9NthYEaaePDk2",
  "key30": "3qrbCf33FC86WJYdhgruTqZUM3kV6VEsZfXovAnw8LFeg4bh55jJMq3Gw3CugxTHFqBeL6kNs4tkfSnT25vT82sq",
  "key31": "5Tb9K8jzmdexJoKYURbfeYGZNAHZfgPN1QrzCT1oZ9BTEMUcpGDZqn9PafLuLzPKdEW2PhQTvpJTw2biJ4YaimCe"
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
