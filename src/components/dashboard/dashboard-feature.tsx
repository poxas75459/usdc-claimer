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
    "4iK8JgL92dy55HpUdMmdBC3AD5Mtoh2FHcoxRmHMN3KDWRBL7ND49TAGibgWa4icafVfrnBT6ssR8y9yMYFFrdsj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sUdDUmL4PYHeohDS1zQGG9xLos4wautiENnz9Vm3XucLKPfmYu4hYUmbxFxxJAiopsfcPTUSfo7xFPsDfKLuKFC",
  "key1": "5AGou9nUryckhbKDDMaYRBVndM2e8t8bD32ZytEtqPPmSBPLhcz8A7qVanc7eKJqPWAd244ejqaGq58xzHriPnUj",
  "key2": "5nHzEHdceLXKYjT8tTyqktbYdfmmNmiYA7HpNYiGmfngbFpaSmqkbykZyAi4XnLMnFPF42dmJLZsYRpT9hcVVbtT",
  "key3": "3idzmsxrX61HWN86FQ5jPULD2HQHn7Lr3yRQ1NUwUFUbQtno9jVrX6CMb3zdfkCFDPr8Tk1sZzAgkPraVy3CoiyK",
  "key4": "5FsFWXLxwgd3Yh9LrUkF6BiZQVJtXsezsnRUqNDCqL6SxzqcbRsMrL4DkXHzx4oqS95ZYPw87dZnJuRA5UUi5M8m",
  "key5": "64bLdGycrakggotsCtoBpmMRCc57a3zkDnFCNjsg3aAJnvtCJ5Bn15jVFtkLsTGodUSw2dT9cpSoUeYoExFbqHWi",
  "key6": "2dLyt4mkd2uurmQAeFJM2EC6sBqZoFWCnpKvFkM123AM5KpbRgVhnZrNVJb38dXnSVh3Peiw8jgHygpWauTA3Fk1",
  "key7": "52SdPSAwNbXpW2xGs9tH7JdfZhGQi7N3rqBPQ4Q5n7aLpsFY5rq2LtRggbMHsv5Qeh1H1ujtnDn4rbujeJzEqUQN",
  "key8": "13pU6DLfEuA2eLBDB9wr6WRSc8jGdHHTcipz5zRb9H2Jbmcc6Sy7T5AbeXSJSoBorGQtvXTsYqGHT7EapJVmwhk",
  "key9": "3pUpnWCLrvciaSgBiBFfKaikHt2DzCRRqCoyJH9CHvyLe2M4Zd12uACuFKVnv3v1n8WfHSMRnUR9UR2D9jKrKeUG",
  "key10": "dHwpHL4uxuamyvNJGgoim7VHnUzAovVpPJsigv2fKWSA8vnQyVx8wreiHChVWfK99i4CS1A84So94QPbHBDyJ3x",
  "key11": "2j2fUfbjdKWhmELJDWqpXXMEMg6oWEuM1E6ZDN1FLDdy34Zcq2auxzg3dkgpRCARXGY24jjLmdXfXzdJ5zqNemMi",
  "key12": "2oS99x9h7QyAKirytHBFoXsaxnm6VaViVraJrTqvnqu4bZRJp5Nr1v6WdPaytmAYRBDVSQefGLSoCfVmsJfGZb8y",
  "key13": "4R9h2pb2Sim8gaBWTfb8sEBCkBK4hx42GugYRWu6pEH7GbRNBahn4TKqpkndH5xkvKQQUpb549vdxbHPj3xbFaJj",
  "key14": "2vNY3YqTNaRSni988kSubrJ9pWN742Umyj1gBu5WQuxY9DqAy2JsNtNnE9Pk4LYoFxKvytrozbenRSC5VgFVrnoR",
  "key15": "3chH7kXUzWCBS3FqY2rcvWswtHntnTWqDPhgJBUNn18q8zsAKCVopQywe8urqGwFdg8RAiFJbmykCpnj1xUVjLm3",
  "key16": "3LoMXRQm64tPJ6XLTtVPS7mr9BFSQCzeCjd1SixfjD4YWZu7DV3bYNL6MS3at8GQFpNkTnYRLuuJqcFuGeUAFjAv",
  "key17": "YkpcsLTEzqZr32NfNoJjVoxp6xNdJWEJEfeJm4ry4nSD4Gz4yiFxNEtVxpJzBDwoHJuNdXeafAde39c1uUFn59L",
  "key18": "5s3HTAcKEozD6JYQp52BGspUqwuMCrWpdWCpdYX1rzhZ7SUwqQEh8BF55HHmLBPKHMhCsCK6fJzivVYkh5Jxdkgd",
  "key19": "5RZfRDdYsbQJ64s5bQ1X2WmMFqhpZUdJ6CDEndVHvbTojFrFNqfTF8aiqBbWWmtzPi3bBB7kALMYbbCWHieGuc1f",
  "key20": "2UqjH7fPSYHMFFiH2FMXPmnUFQaU5aWMaX1pdDxz88oUYbX4Em1nWUTU1Fd8b472eiYUzWE87jBdNyXRUGqytBER",
  "key21": "rH27qjfjNUqyLmyA7exBnoHyQymDU5uEQXXBDTQRPu5h6A1AQEPWDDErbTAB8gkvoGXjvVWLqCqs9iPcg5YG9Pv",
  "key22": "5aDbVPuC4KjtAdw7RXgkhEETLVUFqgSLuCNFV5bTWcd1uisiPD3w9SPe9LYrXUXMym49wwMpW1LbHoSHtYzexWES",
  "key23": "REP7z8U2R9hDtzST1pkeboAMW155ZMXvWqCJzJ1kbf6sUSs5bfHUPX9oSvNS6s9fDJZ9mUxBa4F9BWDK7mrgU9Z",
  "key24": "5zuWAx7Ui191qA53pLHZMjcJANg5rvNCDPijdmG3qdb1RSgPbgBDM5kXh8qpb9DrKUjBT3Ra9uXsUzMQDmy3ccvc",
  "key25": "5EJWy3QvFGY3QayW8u336cL2QsQcisC983LDUueTzjww334AaBhFrs2QorkZNEY2h9PTCZqQpfEuCUxMA8N4sD59",
  "key26": "5Wede51rZCkQX1dxjMRQrUwjnhmnSGPLqsYsMTwo24FtEvKT3FgDwt8vWb5NTSasKZHHVmYAJHALauNEF3QqAL3s",
  "key27": "4oJdiFte73XFRZsTtdMD7Ed4v1v6zS8mAYPRvTUrLFkngDKoicJq6yPKF8imQHKUQ51SPY6CUXX9QMsJYXPqagem",
  "key28": "4Tf2hYWrnzsX8exJZT9dSSXSA3FTXsWfqc6oHCYF4aYuRcVkHzURRkhpEGNWeM2kuM5dFZsuyL38XXX1ncFkFy1V",
  "key29": "33iF237jyjYEfmWhuYdVz7XbDtkD4q7FKtdstj4dyMcsCXV27iV2SDenYEz8nKJakjnRKkFJTumXUNrrwxqBu1jF",
  "key30": "1FNePW7BS7rGevLy1uTXxpCkR7bepTnVSZ2sk8bxNYsXJ124bRGg3EPBjtoVCYJpDeCQxUgbQtLoQH346XRreUr",
  "key31": "5yrecBPABCnvWgHTv4Nmi5dosu7ZhLc8SkS1cvtYFihNZPMs9CWfjUaZSKaCCwxa6gDq9FfhrEuQxmpYURB27aCb",
  "key32": "5XVxr58uAvwUxUHFsDKHonKvszU5TmGgSHrbGbcmNVibrHjz23uJcwuXgtqyE2EuYo8p7Uj4G9TrgvLeoqPgzNbe",
  "key33": "zXNLQjpLGMuBWBC3H1hakt7tBSWrtbQXKXRfZiQGvYTahcpj36Aequ4WStvrNe4TqnKGCkRkZECgJKTpZbC4pBz",
  "key34": "3dfukRuFmaNSUfBgdwEwZneszEWtXs2nqseM3ujsdQ18CqcS9yEcDvUstem7mcQuSYEY3p3dwGUynNxLfuDr14UX"
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
