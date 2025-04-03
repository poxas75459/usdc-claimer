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
    "4KmedD2MuYfUCbypgjVWVo8i6CdJdvk3DF3y7AFBtfHXiYxZ5fSqCMKxkgpRhtRDkEphDxWn4jC2npi9vRBJymgx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fu4dxKZfjAc9AYojRgp2zfWdENRubcpzqLjMSECTb5HrxJPkCHib5DCPvyUURppYuZhwCDnpYeV2bBgwkbyxJh1",
  "key1": "jJTDDRUwsuSm53YALfmst8an7bdeaZRA5HTrTeBttWdgUL2xF7oPiLNRSzmR9htSeCTkAHe5xusjU5cp83Qh5DZ",
  "key2": "hdmdogczahEbSE4anLtrqVq2h4vYKpqAwNpNpsL9czSxeFZtku1agYSJ2c8ErPu3fimNhToSCtUa4Ng4mygzapz",
  "key3": "3JDtHwDuTj6RbqXHmesMHtw5tWiwqFXAtgPbnYrX5EkDtnHG6iB3eusd4WKe4kfCpUVyJ3SRQ9w3RQZQFwwhL5YE",
  "key4": "5gqs5JkHgMy7EumZ88n1yy4KLvEKhK2JWSis6j5H9Fe9iWA3ZrTNy175C6xJims7Qu51jPsLfVGi6MeURJpHQwQ9",
  "key5": "5GYgKPzPbe4mmyTRLUgu6Zcom3J6yJ5yiURkrmUnvtasezifXichtexPk4AM6ehZTPesQERKU6dvitVasdhXwa5J",
  "key6": "5wUSn1sr5Jt3CwWVBwsVcugDT1yKGvxAoNS6WRDB3y2cJrtCarJGZAnhWmK2H5R7GLqG7nkK1vRR4pQ1f1rHs7Wo",
  "key7": "5DFGR7JqYZx9eAwTSA98SzexnMD6pseVrSS3mdPMii8Dp6HoeFciAjr2CbSMUHrZkq3AX4N75BTwYMnzTtrSujwA",
  "key8": "3EwhE7eVviL5udWfN9X7sCzSgMjMUjNmgGMztWG7fLPDDp27ShzxEyqYEjPFN1cGjFKt5juL3XKXUZhXaevKzz1t",
  "key9": "2hfn9UXd6EFCkMuNLb9cVC9aDuHPQSjfgo6RDFTYUvxPkrDpcERjz4FmMAf3LxkXf73r2NjLrWEVb5VSX8VpiW3R",
  "key10": "3QhpZuh98MJ1RS3wb6zhFsRw7hr9xxHzEXBXjDYVvcFuVgHLTczvwuw1ucytbSyBYfPsLreeQGk5nzGHmXx5M9Ct",
  "key11": "2g1AjvaXgHN3NeHfFiNXGHx4AFiQtdREVXZXcdve8tSctMn9SgJqHAuoFEnSheEwUBCDK2Lbxux5ysnr1KuJaM5V",
  "key12": "4MGGrQcDEpAof25UPLZbQyAMm1yGnbSqtWyxAkNyxW5xpjhhKwzTS3cG9oGmfRu5heBfm9fkWQXL1urozN4auhJe",
  "key13": "5ePZRWFpP7wHYhYpirxrmPkqQ3yAHJ4Lv8YTtBVGwNbFSPbFDt364w5UqvRYmgMD3Dx4GyBR6hY12cFkQjnWSDfA",
  "key14": "5LuwphgDtbPqatzsaTHarTyseb4PRiNjp7b7drmkVvDDk14gPdru1uo4g7YEhbmTzPhgEYbA1fnCDym7fm4LwJbz",
  "key15": "poJjx6XeAAp5gvbX6Qm9LmuADBGky2UHAAH1jvKyz2m5AJSYKzwmMcywBZh2xqWAuHC76SynYHBkT3LkmXSfxdU",
  "key16": "4GmVR9m7WUCDhH8GUwm6s12qCmrf6NoLgLHhAsmYeBQHGeBP2TZDFYiDvVupPCLyEiqohM8LkvXWDSJKvuva8LSr",
  "key17": "Hu3fX7Z3Kz39YJ96hzxy9jTwNHSTgous8Lx6YqVSjxJ4PXJgY4sManCtnys1TydhB1QD8BYpaEGtw9aj4RDhd8W",
  "key18": "389M1GxMvvKDuyK2FyszcTAo4jYozKmew2RUUyuvVxUNwjF56wpYwUaK6tRois4GcnnNivHV5kvXYUNmjWTXHoNF",
  "key19": "4kN8woSaLfa2hYfvWHWma8ksMu4nkk7KCUxU5SfzLXzqYPxLkMEwYC92s8VXGPMpTh3qkTkJvooEB5n6L272Ed3Z",
  "key20": "2Y9NjwnjFVX5y7JHQiKG9WzfYGJ2xy2Rf9ew5WvsdjZ8DJuW9LZwjzbZZUurL6Y2AtkT9CSUXb8e4HPrHtVKr5Yd",
  "key21": "2YcxB2mazcWuoefLVYTy6AEcmgQoGJjcWgLXfuG7kXvmZSNHFCPwX4aptXAZEXQpnSod9aF9MeWkCgdKjRMVaVdh",
  "key22": "251NcyKX6koUEU8Mtb9HoEGJA7mvGi5KXVseNWWWPxEzDdHM8hvWsGANS7spJPxTKY5j7MjA9CtRFXK6r6vmC3to",
  "key23": "36Bbrt72kwfNqxKJLSYCgKsZRzhx2zAQY8jvq8Jw1GcXBopxwsG1du6wfzmJQaQDkt1eYWrU4foZZtj2cYxSL8xs",
  "key24": "mQha9KZriMDN9j93MMW9GjL37MvP9JvSMR5KDEkZYvjG5HrdybR6Tm4SHqZWkRhAZ3QU6SfYxEqQGKfaSujTy2M",
  "key25": "2VoJUhB3DoyGoLqo1YXN2Awk9eVNbvKdXxpiZ8c4e9nPANKP2NWRGJAm4UcfkbYqkGLKUBbpYc8SEbqryD5Qp2Mg",
  "key26": "4RQ3djT9CmiaJtn9FHXW1p83g98HRfjXGVHG1q72NH4rKYi2MFj33HzQrivFqGzJV2rZXBMjp7g8c8yCVpPHdXWn",
  "key27": "2qkhUU8DQ97D5FvurcYzFLsKAJdpHK1nZkABYsnZA13pc9CRhvXbhriCtKP1zPs88rcZMbzfmht6LdhE2CyoWDd2",
  "key28": "rprZ4aSh4CPkGYqz4JgBDiLUgQyV3GaNsYHrWefD4yHGeNQGp2JHjF6gTe6DLeb86zDwwCTP4K866BRdf8BwB4c",
  "key29": "5c7LkQ97HmeqDtgpggEZQJyMJRVzkbWfNodDqnaW5FMSF6Q8Zo6qfCiq4S4MRRHuBSTJ5xu3BQTLyufSKmfwdzfA",
  "key30": "5WiHAg66P6wvdxoHM9NxmxgbYrCxEdfNuZCdVeBmG8Qbm1i35VLA2TatMEcXvph9UpT3xMNe8VaadVKwxhtE5FYx",
  "key31": "572rqhSfKvXF2sZvUpkyeNEuHs6PdmWB3WAmcWh9eoMRPRXj2f7BjZUR9jBbWALUWzKws5AFwEvdrwK2qnuToVJw",
  "key32": "otozPYn4tsLuCc5CzaDw4dLLkBFwWQ1iRg6Pc4Z26GJBq41AaF6RL9F2SJgp8RERNH2fgq5neS7QHTqZ2ozRyJ2",
  "key33": "yXQb3UFhgJZ5v38bWxUoZ8CJkajxHEmkoQTkubmRtcbNf7jSHVVn9mWt7SCKsF5FpHxSav6ek8kzizLzKvha2w1",
  "key34": "5G8TwQKSdQKEnrsc5t7chgUQV625Zqfjq6rY2MXNfraLXqnUtrVmAwN15pxQntEmkZJxv8LMMHrP1M29dt73RGRv",
  "key35": "39qKQbct1YFkcHcGusmMQk4iKaffD7q3SxU4ezDkZyha8PPKVvNp1esP6qY3CKDS7A2djNrsnyV6As9fg5Si5t1t",
  "key36": "2dkHB8LVtuV4BWft6e5mr5n3aHjkFUExHSRssZBSqQXvGn2mNYNZvyxiV3sxzozm9LLtK1joSJsd8TpEkDaaoK6q",
  "key37": "4C8BkSSkhS3yvVs191YnpWryKnsjZu8ycSVQBPGxPtBEEEiiZo5VUhCmu1mDZe1cJaaCVqmnh6jE4J6GfjL6Epgq"
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
