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
    "5PZpo4YMMxcDuZecRMv3Gk4jxoq4vkasftdWBGm1nbMZoUgN7E1pAedZdaj3M3TDUUKH11ubXmzDEJpifseQUWWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xbq9JGCeoehBepVHFMic9SfuoRpYCeEuD7rj2G9yKYwWWG5woPRvx1pAaXN3qWYpoZoZYWrqV1XUAa6rajAjpoc",
  "key1": "4YTGhN2uSqxwCbt7Xr3D9CL3gZsPQXFiVBUqeiY7mRUjA7Ju2dAHcdKsaUvXGQAi79yAaY8F8EJuNnGqNsc7NCgw",
  "key2": "2JJHKNbtp8MMhcXDghHqnT4oorZN5j14BU4PTVESCcvLtX1sUcjLU75AnRW6MHKdHF8xbT2sjtyqwCN7Ww5qgdFv",
  "key3": "4UHdVe6XULaXjg8ZCM686wLis8TaYn7yE9HJXk3hBQV3CzgY438cxsUKqj1WwdboX8QPZSkH9tMxu9qYBt4oRi4n",
  "key4": "LXCUrk9FmiXD88K6fHTV5vYRwDtkiYSD6NFsUHJvo4q4KUB5G4Pqd1sSg8nWEHtUAfp16BKG7mMhRYtULBCqbpP",
  "key5": "2UZu3euUpKcteVM14eh2PFi6G9PAZYmei7yPeRR2SWi6VXpkqjKGoinFZNSfHfVFShu8QwUJus3uApZjnMv5B8my",
  "key6": "D95Du6pbAv5TH7bx6jdEqB9qguEWb8FcQ2jLXBKU5BLQLRz7A2n6oHervqXmgqVMWSYvPKbUbQK3MDnqyAAdsfy",
  "key7": "5NatmUiZQjuXmWUDYzEUNytZWQPttiAowYTjFAi2EUKQBnzmGQrNbYNMtB4FhVmxqipEXJdMB2Lzwzthgo3Ec3d8",
  "key8": "4y4AQ7PFWRnhumspywwAwdBtyZiYeSNVbxa224zv6GZehAZyemjG4U5e1LEZFi5ya5cfc79mk1yxKeyaBQx6guFF",
  "key9": "5JroCAF6c8KCaE17Usmo8nCyQpzm7rXHMFwPTK5fzfNXf1EfjyH94SYm6gS74JkETMxp9vKy1HegFBam6bFNttr4",
  "key10": "66dCk1JmvkMG7VZmE6orcgNJuM8Rq8FzXgC3tHAWXbC8GmdbTrDaSyWvbWZWW2ss9fj3pSvAppLYuNtQfXUSwyhT",
  "key11": "NntaRnJd64w5PyiPN23Ukrdkyt2EN6t5cqWjdbRHfA9GyhvK3PJN6iEAXDA4Wi5V4U2CgzmLD1EyKDdRia9fvTK",
  "key12": "2HMreDRPFacwnGTkFQ59U8frJ2AmDncaBikeAn38jmkhLa3dtj6E1JokDED49R3HMpxVRdp7MChakvjaaDZPMRBi",
  "key13": "3iyJnJurfb83SWXA9oJ6oiiv53CaSeKf9YbhXqA429cf1KesmErMVJL9a5kWPVzx1JmkV4UGVxduxeCxxu5EATHG",
  "key14": "5oXZWX7j6R42k25JaDtCASk5qEFtSgNgjTx5v9k7TV3DCPMv2DRFTp9kHrJLC4FVpgJD3twcCSnHQsqyY8GhT2Jc",
  "key15": "3dQ7KvktuP9rdBwcdakR2yZyk2Yc1RAhPYqLmjQdJrXBur7rAt7dLJaDJM4sQfpfcVqdH85DQxmxKLG6X3wJKMMJ",
  "key16": "4sZthLUiE4fUdduBPMoHgsdAa1psZroQxgMewx9SGbFBQQPqRUVpz4w1mSqRm7jQ7hWcmdHJsyUkibeGB8dv4yUJ",
  "key17": "4miBgBrLEw1WyCddHvAco7dvsQBqjjYHd8eaonwd5yQRWL6FMsB8KAcfoHn8GLdZtLrHBxa3dNjN95oC7KBg6jav",
  "key18": "64fbdQTieJLhmBjk9Pj1gN6Tci7ouW2HewfBQuEVdbHPWWyY5nsmGi1uU1nZZiiqXkdMgqwnCzvaKv3kPoG5EqNF",
  "key19": "ouTfK9Abwry4tbJ2qeE5AtUjz8e176CSXkuyoV4FTh6hr9cNiVB1U8k74P9fFobsqG3cySRBHX1kjm5NByfFbkE",
  "key20": "2d2eTYkQ22s7Na7CKE13CAvDXGJner3r4tMZVSNGa9gESVLfBpf29xJNt5FBqK5dsi7nTszyMXvJpcnE37iTGV6a",
  "key21": "37MbUoHR4XAQtZakdi3qVphFQymfr9FZmMfQdtY6ffmvwvTXKM6TTYgtmF41sE7dYwLYb2puxwoxZnS3y3djB24J",
  "key22": "4prkzVv8awKGRwmtjEP2kUsQq3HyGJoU6LVfYUfXFa44smcHNqfsXKrytfSYKo47zQFiuiL65t5RX2w2RveFPwNT",
  "key23": "4P62VB1ZjofsRxBnNkeS6DWYAqJytpv3GMXAF7CP78pqCwFXEvkjPBwMRBztakSAaL9vR3x8RUue8tRDwL8BD9mb",
  "key24": "4Qc32vVwhL6HyaFkEQ7gSGuVGd8SkvwBH726RKtJLPupkSvJ2xZhCvNfW9rqe3BhwUvM77nhHEKAE8NxwhA4936F",
  "key25": "2uhUzpiBSK8oLtfqfLjTWLAMb8AhjVkA2FpSRn5N5jbP1h1E2ngpsFKed6Gy6DZNkVUPEJaRK3V96K81ZTxQS9d6",
  "key26": "roktkCt4Kwg7swwaAwnUz9816XfZhwVrbXt61eGVhN4hX41UXD2iMuWE2xVrSrq8YL9b1M5vQpNPjiSQxz2b59y",
  "key27": "4vUHVbYYPKA8Wmnz1PriWMA1zRif4QuFdLZYhwqVWULnoYEkZwZAk9htzmnTco3LVQDaMdvRAbf9Ax5B84MUiQRY",
  "key28": "3XJYFCXLSXKupGgM7M7fNiK6zuWdrNDUnjxzp8QCn7YxdiX744BS9MaAnmdx89iR1Dwps2zhHo2cBSWCERh1cJPn",
  "key29": "5gCvmtftoemL5KyGEGrxe58B7TbzUM9wvV17g6dd151awbhGpQVxi4ziqWtYNgYseSDjCp56KPn5vjyx4zPkVqMM",
  "key30": "6GbhgQGCRikmWn1z7SCbYV5s4a7ctSdU3LbHddGkZGHxgnj4Ayne5cHUcve3WCaJemmY1ZKcU4rsK5m1hggumuu",
  "key31": "4og2kpvoTCGr9hfSwDs9RPfZTBLU1DXruiRz5oid79DQqkbvLzf14pE9qqYwRENEVbNxqnAeMw1eGJwVKtBX2N6K",
  "key32": "uA2y1aEbUMj9eyLvPqwDMfYVrn9FtgsHzoiHmnuhFVHSMWZdoDCj1FLpvVvs7XqmbxX958pT2H1zoQj6AFbXS4x",
  "key33": "5Cm37qcyQAwZ41arvFgev9bJvxmjHRZ4ENXPHBUjSp3DNHbVUJ9ce3KnnTgPfyEkMwFwGUPyVd4Y2NAPizFZYsKT",
  "key34": "3iYHX2W25XxJhSc1rQAeoS43D8iCHtcUqBHZvz4FWHjTkEeS3s6zNtVhzofp9PWbET1DXU2ZhTrHEAuM5iHyVG8m",
  "key35": "2KY24CRMwFJN2iivxj2hb17EHdY68y8TU46iv5SfLNAJAd1iZQAjTgXcGDHuky3ExrkDXd26q4TeWtxXnwvwsP6A",
  "key36": "4hS1vqviYxxPjLUMwMKRbtHmNkUm5t4pRXK9UPqboa9BkfchEoc7tCP8TQ1TgKh3LyPWTvfFK14DmKM4rVaRKybE",
  "key37": "2gG2ZtwYoJsJLNtuHZPkVYWp34BwK35uiw5o8czCh87TQdu2gkmD4Yh396MKS6Tw3id4zD564a2csVtBSi7VukqT",
  "key38": "Md1RkYKV4mgK1zCeEhYgbny5JarGgxzC2dQjhbqYhBH5G8GUob4ZmhMjfWExKYxaGQS8PXwu8F17BrR2pMQ56pt",
  "key39": "2BBfxmXCgW7Lc74ypiRZgBodgD6pYLgZRS5woKkkCQEffjhBmPnpy6UjZtkzXAtBaRkePfesYCN8hiJfwUqrh87C",
  "key40": "5HNLdy2ztktM9WNQxJAmFrZrphNckud4Z4BJHwYaDzjsLobXCYkm2rQeLAjDDKwSKp6FoUBqWShZMsBkQjVeonXP",
  "key41": "3ox4Xw9aiKk9CAavqCe2q4mLpktF4oQSNjr259kELUsG3yvw9w1UnGbRyQXWqbKR9pHi435ATjWawV7FExw3kZyP"
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
