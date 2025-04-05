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
    "2ik1VuU3hsYL7a4hN93kUhyGXRS7Mqi161d6qkeknG9SSdmYLGQvD4PeR3otsdzx4xYXFHWqLYf6pv15vfaiBX1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "st5MWyyvP5N9bYuTBYUsqe2r7f2dkm5z1pRwCvkd6pZdfkk3CByDFuUGU1wggkYkc7cWFSXxPnUN3wt141cUYan",
  "key1": "2yQi5r2SzsB5gF46yCixx3oymcRWG1svoXAZGyJCpjK62TMvDsMbfPnHeq9HhXKjR5JPJHBxCZw8ijfqAsUjBgg",
  "key2": "3N7tJuTxAX28hd3ojd6P4irmuT9xKgnSUsicDSaFGiuHBnSEBMtDSGek4ceLFuBUSmWugi3oz5JbXRjgUdaif6JG",
  "key3": "4r7dpfdX5bPvGn7FMDvMRdpryVRUwjcEQZ6LeUi2mrQJJN2Ea8qYnxmEZc8NQWr9GTF39t8EGxSh916tfTNa3pPz",
  "key4": "odoAwgU1rAoV2a5RBffgkiyK2oug95TB5c58eeCUMriq59hZsgbXQWJkga26vckMwcyDCJEojWxEAv3R7Agfcue",
  "key5": "4PJp8ijwqVhy14fbKh6VXfJK5vu8N5epBDoA2dVBruGMF4BPvg7DWs3Uun1gWSGA4oetscc9YXhEnP97jZreRx2e",
  "key6": "3PXJzEwsBs36uoCgLVRDziPmk3tCyCGRiNFZgFAgjrrTsLs7pnanjRrohNb7EFuGA1tiA4Dd8SdPp5qvsioKC22V",
  "key7": "4p1gjh6brFvuKYtiEzYygDgK2iwqXqbr9CAAeEfQaW6HyuSf7cErhjTFCWbNd5thXdPViXUkuqZjxBik31cCcArE",
  "key8": "4q29CurHPUUz5X5ebSe6HxW7xtxJVmGQ5sxKcmP1zioRhYG8c5aVcsVRF4KHzsVe9fN13P1s7Uh49J6LyiW11Vvz",
  "key9": "5hLjmWEAiEQVJKjyEhVxYgM2pjcyFaw7JL1A5m2wQWwYquzH3AA5wVUD7zcfB2rs1Xyh5gEVMAHGPns5XwZHaaW4",
  "key10": "3eSVYuoPJYUiXx3tDNwKtm76YgJrZwVBg3TxgyzomjRZ79ZBtw487am3aHjdGshcuzWfyDH8hpEdWVCMkUMRMjT4",
  "key11": "DPvWKdmTwYTUvWpKKpMgFXG735AUoDKD6nNKJ8dPZ8wZN8DVMfYzvow7Thdg3eqBb9TZYv8ym54YJDCzDFp4Ci2",
  "key12": "3P4DHNn5uPvEjV9gRmVEsqEYdpbTFz7nZieC1kTjdaN1HNsre6rrYdv9qetcs1k59NMKnUQ1CmVvDgxd6w3Uz1QU",
  "key13": "3R8W3v6pWK39sqRc5GGaWqQoCjqYFsQNTb7tsYhcFBnKxakBwSjrD2WbreM14qmAdnDsTP9zuBbBrMaEWXTbSqmW",
  "key14": "4xwSVsptzL6U7yqVJ5a2ZEWKds7aVmtKuWxeLvdD9HRJZBY8kEFaAdNxTLJVUqNHdUv8u7fgx5RcPaMGnBZaK9F9",
  "key15": "2cqECwcUZYV1ohsSVUvihP3TMSKSjLSAf7JeDDbZRxdHaRSqxwBS2CCqUunhDUM7XPjZvT3reVRfdCyE8U94wJzH",
  "key16": "5HsnwEGohpSUaHUmd46BFW5KdwwQJ9FYqjtyLGU57sYKUtSG52usPYnMmu5vnmf3PcQ9v9cGgrWpfrys3m4a2Vqm",
  "key17": "4h9SvLELRZ6feCmWr2UadY7aqzyLuVk7pK5sZHqxSac9Z4USskcrTNCWZ8FyUBeLjhLWaW7aNJmW9BaFP6X4Urzu",
  "key18": "8nwcC2MYcwQpL53kAkpEeq5WnFDdDiXaLpXGwfWBHHScf3CUu2VVm7YrkX71B7KbMRedHq7MLdz2ha6gbPfZru6",
  "key19": "qGJAgSHDLnB2KFjV8N1y1JECd2fzsUa1jCGH8ePeJvik29ffhkYfXXUasiozhADs7a4higLhXQKMiECp9ZTgq3a",
  "key20": "5Qc9d3ykDHrW65kX5PGvzDiXmpLxghV8soLgMbitJ9VqN8Ja4C1CGFDgrD1mbUGVMGiBfmwCBX3QFuzkarLirf3n",
  "key21": "5qfyz7U64wesjsR2aMJfpVBcJ66BYcbMcaxY7w43Ym6yqw9a2oAit37LQTPMNCt7JBiT6hJ51B34wTdEhoaFq1te",
  "key22": "66Bs8g1YXE5PqfXmmESV5ZuFfXmypU5nPEUbmNWbTj4KwQ4vjqrc1ZvcfkdCA2Y1bhKpcdzyuhFqGgixUJrJkqiz",
  "key23": "4AzncwRh661sFDFPWPAcTfqVsLTeBm4mkJEk24BRANNmuiaGygPwAgPzhBGt6SPWMQTdhUUrmWJDb36JsdGt38Qo",
  "key24": "4yrrCyfzixetcALQFVF2hTjUvA8JzymTmSwLAGUguoqf68zDRJJAUz4FdeBcSjPJtwiwWnNsU3EFPNCN4mTrbTi",
  "key25": "4Lz4cXpjNb6KESJM6G3fZ2FJ8G3c6zYssBW29MqG6ZRXKZQxKU9L51rW4vbY8euTGYaSRPrq1gn59oAE5QeUY8tV",
  "key26": "qvBn8ixt35sxCTg8US9XGJqdc8KtHNr6pzwVh6E1rpg7kBL8nVa6xaYsLHkZRe2xcwEqhtD7WFbKiaEsZa9DFoK",
  "key27": "5EadmfUhXAewG245USmM78oM8iX6cZjBYj2s8pbQWtuqAuW1mC7VLGbF2GLQP86J1Af945WDxwJwSCZtDhz9ZPVq",
  "key28": "41xyniemHfrerGPwRadnCXMtmqR1eKwWFFNcTaM41VTCZqYycZSNLMqjamKJE62HYZL2dACqZW1ZJVj1t2QH4ufi",
  "key29": "5NAHHuwifd4qBiq2sf4wAp6CqrHzahQSQsywvNm9UJM6YQYtPURtp66d5suXZtUTPCambk7P17M4LyQj897iKa2m",
  "key30": "6W7bNqdnpnSBP7R7kEBM4wxqn5FhUbLFyoH665t2ZhpD7XQheC6QqgDunFnHNKSSRhd6tUje7vi4EfgKAYky6Hx",
  "key31": "514imvd3tzqqQ42qrH6ihLfJm2aHPh7jyzVyDK5hajQkAfzMwKAasicn1Db59rJ8uA9SxhMQ6WFCG2QU1LLAaZkS",
  "key32": "Ywie9r48y9CkXmTYehrLwH8UP32hGBTFhutBtvtWoiuPsSAoehR7iPjDAxk5Cnw1rNpofoJnXgTCU3psWf34bh6",
  "key33": "Ha5ZSQnPaCFE8AS6XGqauMUNEAH22QeqXp5SXzfxE82B1D439jq7nQRPRceicvm76x4ZkVLUY5Mrv6s2ewbaVti",
  "key34": "4Vhpc7oVknkWzc87P5MVdGxg1LVfkg7GeaVgQLneYftcFqhxrwhmzv6xuKzeWiyprqaqz2XGMfp4KqAzNEuoV6Vz"
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
