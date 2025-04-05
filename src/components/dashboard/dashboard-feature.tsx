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
    "61wBKzRwT9KvXtzxzjpAvvTpSLq3v8anRvGkrQgdQpNMbfcmyT1B3J8uX7sRxBKkBEFjQmL8DxChmdsnEw8P9rcC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JGB2YzL2MQeE1J5poQPEea9uqzAeAAqtP1rvGVTN8GPWw4hEgnVRoga5DF9ATsphbvfYWg5fevhtYUndMURX4gP",
  "key1": "59mkNz6k5iVz9zZjK5Xb7UU9EUToJHY5HtZdy3cpjdy46H5uD1cmJJf72PkEtTBNihmx857b9oBVujAct282a8At",
  "key2": "PxxCMNQ53zprVsELVK3w6wRFTAjQ2xqNUQBBox9YbFMnKGNBJX9WS1J7bCaafYRwGNjSt2uTsjiAS1qhnF3YZ6o",
  "key3": "5xVuxjEidixxAaS34jwFDvD2Ls4NSQNE76FsHFDnjktYZM8ksPBGdzjWvVikiVoaHx3dHa8tdUGKeBog8W8UWikU",
  "key4": "5BgtaVnGihi9wEPpudyvr6KpY9hb1CQoy1frnQiMeRiJ2d2Q8MHddeYzmAA6cy2TS2KU8rgjwXBUV8LY6ntUPkPt",
  "key5": "5nStN77DSMsumwFsaK3yTK1uN4DjDtXoo2Nea2su1F9RKHePsSZrN34fvBK4SDG5rEysVbPb3umEmqqws4xnJcJn",
  "key6": "2Fnz9srZQ3aZ3mGVP1YA4SuQErFrjSgfqCB6Wp8mmr6zcqdgWxREydVdALtERHgxLC179yQwpUHwQRyrVGFcmVEZ",
  "key7": "Dhr6ura5tx7pfwJ4NnFwji4nNA29zaz1oYd7JHWoadNbMdpx8ciCLaYRtZewJCRFe3zQiWVC3kvMiEQEdZbcDpK",
  "key8": "3UFvQFHGxrX1dichSkfBuDnxn7iJfHSDfMmEviu5MgKXKgu1dVub1uF2opXfKBU6ZFL6ZfQpwbGpSv7eFygrMafY",
  "key9": "4L2o3iVStzBcDjPgy5vPDR7YYVRWNrFyKd6SpbUfn7FdEJb8hcmqNBygwtpXU2H3LvtRaGBbirrmRiBu1JyL9jox",
  "key10": "5KeWSonQiMRptjx1eB7Frf1yUC4BxB4FjGsYwwBPXt4AJFmdHBweAGnD3JhrUHVwyZTvLUP2Smv4Dm9upc25WBpy",
  "key11": "43AdgvQLucHvV8T8AT7McQx1t7DQiEQE33doLCNHLkwRej12SAfxfZAVcz5YgE43Ptas7nLyk3wjR6Uam4hGBYZy",
  "key12": "3iVCrNfS1eTeDeqgoa9jkEdenbSvAySczN7QMyrtBMvu4zkUfPg3TAv9RRs8AW9QHshXMpzi1gwBRBxb9JJyNJhZ",
  "key13": "21DUpoGQbcmn2GrCnQa3n5mneKwfWQXzGUF6voao25TPbfx4JvgVQNzMJxDiKNeNTitpHg4MLTPpNhBasBWGSFeo",
  "key14": "4wuvMbLeiJsmaUWyjxeoaPEwmfqBgs2QwSbgeMHFqMqiQjKcfjwwPE1y4SBfT7AEYmL3umTNPdXJmNxPtqMxH8Nv",
  "key15": "23KRisQkj6KZPtB5rWvzaF5CMqH1dJ9yx7YyZpw7jTdWkUnBTWPqrd7N9K6ce1YDeNN4uNACNtZgABDUx1j4yL9b",
  "key16": "2r9GReC2kpqDcXtVti5QfXQCqPCWH2rsGiCQ3zrkFGp4VQcc1rsrD81U6yaE8zwmMG7WuqSPgxKB7fim2TkTvzaV",
  "key17": "bzCLXJSvzr4wa9WWKhGGNXA6L4qgJHJsh2cagasBPhoY5wPHY1ETdLW5h2fLc38N9UEQe5CzXDZ1F8LGtJumkk1",
  "key18": "3sVChhudTqa518kvFemY2xKaQDZDsM1obHTBa8MRm9fkbqjZBuBTEBJqa8i8bLWfBDFoxh61vGNcDSf67NJsD2jw",
  "key19": "4T3oXYWa2DbCdNkUYvkT2VbjTakPKw9VDXtBtX95eBktDwxsjgmmGYtoZeS5MG8WvNEYGAgUuDeqYxqSGDxHCczc",
  "key20": "4xRiRKKsiBkQ3TtChfDXEVLRHkbEvuKfHwXei6gKtCF7XnGzJDKRhsFG44mpTzozxPcuyAeWFVCrqSqJyPUSRLxy",
  "key21": "4aGkPgRu4hCXw1gsToRb991EV33a81QMHmszyMP7Egt9PS7DPBoRpn9oRTnE9rtw2vHDUomWP1wNgAp3UFS3EFAJ",
  "key22": "3gFBfQ4GTjFCJGqgDAVxrwLDhrLMSgZvrbXecDoTtgMKSjSn3syajQ18AXUxLqCqsR55M6USYn1PKJnrxEzeEj6y",
  "key23": "23U52bthwDPSYhKsMk9o3AzHALxy8Qowenz58FvP1vv2cQ7n5oV8QMcz69NEf4WvAgNZnCaGRXQdpJebxx5FZ2qF",
  "key24": "2GzX6mEAqmfsS6WV3JCJZLMVAeW3MtFFUMhDE2SHzMAzaeENKkjVYmm6wAZVJfQrHsUWBanr8b1oK2FjgNyk75ZZ",
  "key25": "3UbdhhRBBSJvqKk8VWhT6fPH1XrVBhTkhbfFpVVsNHkTcnjpFovgZNCH8xHa786WLf9Nz1nPy7BDnuZtvGVXoE4F",
  "key26": "6AYv49D1Weu6pNuaLhANDnBnZZ3jh1hg8MR9GLMfn9whV72ATcHosTywff5QtRE7FxcCrepVXPMAWPxULZyzBGK",
  "key27": "3uPbiTYeMWFZcQBf1oeXGC4m1cmG9tcGLXGk7UQa21SwYqPo5pxvket2YYDobTe3jv6DNZFsSKyjVW2ykKADy3LZ",
  "key28": "5SMoM2LD53wZWV8hDYsteX7UCArMpW6ZP9Pi4H6ZaVwA2AMXw1MAzKh1URDXZBUSc6DHzLjHBuAFFmGDqytc1YuC",
  "key29": "2s5mKPDUTb8izzkHeyY1t2pb6WJrEvzYuw4L7DmF5CZ9CDpH72K8zqto2rNaLhif4wUgA1pBx2813FUbvNGmrEw9",
  "key30": "2VRRV7xezAe2kQ8CChGZDp69Dpmk6DEtTkt6NXA45RNWreLwtMwoMRjh4aM9kpdc42yB89qNfvVmNSDTRMj1XWeP",
  "key31": "4KS7k6EHrJs4U2FKSTy8zjuEPYd8Gxfh3rX3dWdGzauFTe9vQGpSXQ5wNgbXFYhnD2F6d75honXFXRKPfKYw2dFJ",
  "key32": "4V6b6Wy1evTVvDxisWd6LiYZZrJH9s9oCK5itLcBNhWZeTdxpmJGYPShsY9yMiaixF5DUfr6Yu2scTXss2yjxiKk",
  "key33": "5wYFZMANH1v6kn5iKjJPeTscksCgamg8AGu1h8pYo8GdLtD4z2sZHL81KTbrptWMrTUVikeCPkY93aTJA8dUTtRR",
  "key34": "2Xaa7tq4gwWEMynTCeaJfXX6EeHMx6J5jmDR3WxPdxaQ1WXekYCmFvR1V6P8CohUicv7zg3sj9kSwZPCRBcUerdc",
  "key35": "3MVmX4H33knKpnPw6VaXdvKgNfrpPmZvQHuUyCuDck4WzVnk238pw8tAFgTeDPsvC38HszMVTZE8oKxNdGpA2P97",
  "key36": "5gSsGmHBwCuNGFj3GQYKASNfh97U36avrSW6Eyx7n1cTxtxTmoQYhDtbjPBj1Gzu7h1jvtWsuEnmbiNT5rjxBfEC",
  "key37": "5i1TYtutJhRk3v6nW5hJBCfXXtyehHsVcWdJh72Xbefcu4cXC8mGzGxoUVERP837VESqwKCjjvrQRDzDeiSes7Am",
  "key38": "2jX3Ysj5vPWjS8pEA3LH5fLspwEtghY6JX2Vfjgo25BtwhLakkeknVneJC396z4Yt9vMjL8g1rjLkjRMGG4id9Xn"
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
