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
    "4jFYiqsFWTxooe2iV6CcMNWy2Z4sF1mKYwECS8F8GeB94dZ2BZvENMbcN22gDWspYSTrKsBVnhhcZX9M1yuN26k7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ax9b9UiWiju5i5JkRsU6SUC2BRLGUUMZr4tHiJtLpzji62Gi1J436MtGx4WZkgA6J7T5CmbrCK4K7EqVxMYNB2y",
  "key1": "4i7ddXot4ckwv5AghLWddFdyzKRfias4Arf6R5xdB98SFFAauKBAJzV2DzgSEaYauRYqZD7Gx3gpUxPbvkE8WyZ4",
  "key2": "ncVrZwffTMH5isVzpNw93HnBPdv5MsJnt684tWW9MymS56uCsuVYPhu1q7AiWzJBomaReRHEnEsQMbiDyTpe8cf",
  "key3": "5MuTh2VKg98hWrXe7hr2LtTvyV56EMyaN98NXeWKa5CzjKubneboYHJL1283w4rNoTe5mjks8GTSW79CDy2BXEGF",
  "key4": "7w7wp4DGVaBTsVVyBUqF3NgMNxLpF8WRuHPWRJeMTKZ83rR14sxAs7jya6uNWQuHJbPdgdqRFrpKb9zvLRMtcGf",
  "key5": "3zGbVxd6N3P1NHgWosoMhDnBRsGn2WrPHeXSo3vgWEEcBGTq42Je1wSDzKuQCwoMdvUymsdHvSbhtQbP1AVAkL9N",
  "key6": "4XS25VkjgJiaaY4xFsG5zYEWzc17fAwsYegcBXnnwoPdxCSUbXNg9bSCrCZCeeP9a5mDusbqFrKPcpJC4WAqBtSp",
  "key7": "2Ez6Qwn6RQS4eA91e6okurjXtqu6HfHsfwLRL79UZyiXpRwQiZhn79NYKq8dHYS4Wo91pnW9ERPzA6Ms2JgqTsZp",
  "key8": "2zzNY58HNv84bEqCdnxkTNKyCkfGxmiyCgmih2onjd9L8btNHxJKZCebHtpQisV1nwW8SpLnTYcFoydm3KHvod9M",
  "key9": "5Si7cWpMKzRaz53sSbRwGE5ymvZwybxf2jAT7PveA4dwU1dW4WYY1sFjHDgUNAfAuTyKJ7yY5C8kgmw1k5aKCD5j",
  "key10": "4EsEP86CgeD8DLekK73JqnrHy71DzSuAsQvK7w1bctomfeJhFianv5gYq83t8bPmGj6XxYM86cS1fxf4aR7Z737X",
  "key11": "3EAEEYCfBst8r1aQibtji9oCuUgrpGXYZ8WvkxmQmkmSqPp2LUw1PqC3u3fy6wJyBCH3wyMhYUJhh1MDHEHERsY3",
  "key12": "4f3wKAJVDDoghzDHx5yxPf12b9ZDq19KNE4pLnsp6vw8hBkuGq7QixHjP6sqctfoZMyZZj1Wk4brrRmEXt7ztn2N",
  "key13": "55GEbak5b7KG1dAvhM2nEryHJmdTaDijmqREETYs5E7vgZGcyx4SW4SMMZzLdzZAaYhihcYNy57LHnvYKVZqfRgn",
  "key14": "4GbZowZKd93SqcN6K1PU5XH6CHYVTnZGdWVHFyyBgRTRzEoo2LYNxo8T2K7U2oxDcNfPNbFKhqstu9oW26wPXgYB",
  "key15": "42GMGdKwf4Hy7yF7yhfpDq2v2uDaTXf8uGdUm68jioZCqzVf3BoffLviKVfsmSQt3bh1i5QHwgN9RNn3gB1dcE2s",
  "key16": "3jc781r2Sp4CVW18FUoxNcdBozeaBD7RdscKscFnUXpRXgYKmARRoraCiGtuUcP62owJybWVMdkrnoVed2SDsjc8",
  "key17": "v7sqKuU7e8ZdA6Hi6nFoTNV4F34UcUbRW8bc7AMP1oT4DdgoErpkbybo8QxnkC7Lxf4YPAT5cboofVfwbgtpFyD",
  "key18": "Yqoogg4EpANKs6gi9beZ74Qp42kdGLCjd2sq8N5yy97FXtw4TYQYmhRhaL3jBdZKo79Wcth4rkgqf2KWrzryBv2",
  "key19": "4xLEKvAXtNbdoqeb4qvkQUYnHAe92er6wBQm85X6uf2fcohVbGZkjdpenXhS2R4Ut6BRmVTpExm1kAFVe7EGdAfg",
  "key20": "HcT7f7UTQL3ghZHps25TEMAsb4u9j9Ar6UWoHU3yb5CjbxLUkdPkkDNM8keyd76PYy3MAJoX2xhuux4dwXryuea",
  "key21": "5HqvNaUaGp6pNCQ3wiLYGrRrxa5bAYHRhiyjwZwViKQkoPaVoih65wvMhk9BoCAHvingHWHrt9qDBLzhjh176MaD",
  "key22": "deKs1BCkPNGo3FZpxPT4vvmqRLCBmpDpsqyooWDikrkGUnjDmcibnP1MkjThkkSBHhBDsUwp43nn2ErfgD8EAY2",
  "key23": "4wcxNA81uhma1sDy3vkXob2MDAXTm1rZiGgXXyvTwv6vcP91ZAg4WapEwgBPonstJjDqjo1d5bis2TgZSkPFxpo6",
  "key24": "4LennWETv5te9BNRMT5L3cu7zp62tPs4FVam1QAc9nz6MWN8soLbvUxTGrcr8Z7qboygfGTxhF7hyvxp1XUDZUeL",
  "key25": "4h9jrAUnMduybx1qQAouisA5XWfq3HT6Az6mHtjvJ9QFE4xbikxQkXnZGd1vSySzkNYdNQ78icLxH6A58KohcG2d",
  "key26": "2em7yKf3oFovZwTvPnGwu8fDcXohTbUqwLszkDgYwWFdGKnRizodK7qAZDfhCfZ53B4mA7wzMkPpuZf5FMaWtJBX",
  "key27": "3AUErWtfQT7yJk4LBT56SEXWGmk1JXW2KvxW2a7FnwGdxkw9EMtWzqWoPy6pwZvLfVoszTBS3VjQd8MdCXWGvMzB",
  "key28": "5SBqFoFqPpnvMWEPjVnf2RrNDT44tVYHr2UhEAvPFN5AbTwBt4HdaRH8a891HicwtGdyaAjCfZSF2fSLz3AUibh4",
  "key29": "34x694HmJ1wdrNwtdG7myGEVHdG73DxTgg6UQQswZGEofVxQoghZdw8k6uDzXHHFAf2sDk4QHuTJhhtWYNJvJNBU",
  "key30": "616MQtkicN6mKo6LU1KTKj9cnCBKvFHC3LaJ4XLj9Lc8kaixwQ9m32SLSUeehXobkjYP9XeTn31WcSEoUvM1tNRp",
  "key31": "5rnyeRWLadbGRp244UwVVnVyNjhEWn4Npe2rpdZFnvKpwx2HnTgZSu1HbuMkMpNhwzqbozQdXXbMCpGMF3iCk7kN",
  "key32": "WMbZ97AFeFQd6vxnjWBb9xKQ69vHWaMascYKZftH5yGrMr5cQXZ9eXVSp9YouMJuLS1FB1EvbR58PPwhh4frq1B",
  "key33": "dm99HcPoMSaz7Y6Td8qAumXn7K3xyLmk7YhdRhuBWcfiQzkJW9K4W3K2QZ6PhnD9DLfbMYxoBNL15NjTMW3YaWX",
  "key34": "56htdwEhHXQQu7DonJQ6rMRijN2tboWzCW8MR3gDfJUGRgMRNPZvVv3rHtxjQfAfr3KY4p49suzkoBmHL1MZ7Nw3",
  "key35": "xzWnth3rK385CAVtdvNVXvZbFtkNjZBMKq73rQe1KTjFhV1eG6M5jab7iXwQckxdHSncdrgqsQk9g85FnsV2rgW",
  "key36": "4WqiRyYTFmnDUe3Hs91zXujcu4cjDPtsdWs6PQtuLKVeeSGwcCWanaZmkQtcp6E2iexbwzZueKfe58rn12h9TkZ4",
  "key37": "58ns4mx5PYTokCC1nTPTR9Jk7h1UgJQLqyTr6xLoqPG3PZnrUAHXFnMw8sFG5cCzU3sx3QC8zzxfWpyE9ey1qYz",
  "key38": "314RGuioqZUKiGrzRptoKT4vKmXK8HFS7ru13kDZyjSM9k8ye9cdNvKpHQwrTYq6vQ5JWRG8hFTojuRvUfews712",
  "key39": "5vRDJD7tTCaqyxXwoJvosQny9jc8aKV76xxoP9zKv9SoFCx5BbPxR1AKV4AeQMzb74nzKRCMvHkrpPCh2VtX5WSj",
  "key40": "5Sw1WoAgifdfuSHkMxbv6qyj7CbSDDMj8Y91CuaHSA5TxSK76fsSs4AHWPobTh6nw1iA7KkjNfEEeHDDq65AGVxb",
  "key41": "4cM4rXgqEer4b6EF4dpDqY9kyAinKcPBBNS2YnSADUt8KMoiDGYCgK7UoCrtjAwtaUU9Ur39Ns2KqtWzfG29Wd2E",
  "key42": "5eppze6otic5yqfJcrzFwSFQ7ZWzyGrU7BnS31y5hi5gh7gLQ1yjLpzw3U8EqhxQ3h5cED5hyZsA7DRBcwPvHsKb",
  "key43": "2ddB8R9fFJFab2hnrY8pHx6R1x5EcCf95VMpJhoryZx6kxHfeHKdQWumEnqMzj7VJVzqhFnMmwaGCtyBeTMf4uYJ",
  "key44": "4troD88ytAstCma4bFQy5Pu3V8nbJFZ5kZt2PEtN6jS8DwJCMts26iLXqa2tjNVWvqBajJBVujbXt2Wh4VPVqs2E",
  "key45": "2RJ99VR9SJY7SATdP9gGGVBLX9hwQnJDeq2fLGFXLhmJTdrx2Y8Rx2EU7TRmz2wcvKRxAsEMQpMJvaHUziL9VGA2",
  "key46": "5UP2v4mq8PpSr8qbFKoPcVLdtTWVGAjvUN5CwGD83VGhpjaPpUPmP6o8svNZKLA7AyDNqJYk9aucPgrZFs7E29VS",
  "key47": "5yhsiYwrabZxwoZEKdbiwE849MT3wgLTyNAVQuTQk3mMm1rRG523wVqjK4XjkkvDCyaYhQ5z795rxAxosqncRxNh"
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
