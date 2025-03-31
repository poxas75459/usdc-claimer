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
    "32Rop9DZFKB7LDXYcd5BxsCNqCDLSEmYsVMxL64HAvDW6tPhN6SMiKPNubDwxpmFgkwDfeTDKXZUzqxavoNXU13o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59rCa5iAHuzCRdmt54Pi4LUmvbyDcaarsmcfkoFLpfhpG1PxpGNYyyk1JuHtdvTbrLT5XhsrjCS8Hc4xMfzLTHuK",
  "key1": "4vKVL6FNK4ZPvdKHQpr71ZEJk8QMWxCgduD8JKi6zBEVeRatkKGQbmKucFPMrijCffKACYsKh59FRZnjh1pc5kHa",
  "key2": "5EsNjAyLJmcaje3NHaqKEhsE8AKZCx5FzZ2jjwU4FbCAXwCNUF4oEfzoY8cCV3JDyhiUnjp6Y2aF6FAAwCptg1wJ",
  "key3": "2RjAaNz9E16fYU3w7zivbbJd7etpdjAYzer7UPh28yYmSuevXhQbFtMQnFeoito8PPzPKkZJhpLZGrVdLFpsgLkk",
  "key4": "jvpe5JRJ5k6sevYfdDHudhaziLBZGSdWbz7bXYbFr3JmnrBNeRuxxidukBeut7qeX8jQ4wytphQ1eGdgne4Pu5G",
  "key5": "3xFKH5ET1F56QytL4kRpjw4JB64C24HG3YrRj2F4akMU4uzNaxWZLtoqP9P6J5bpGWCGQXcKep3XFMqGdQu5mHmf",
  "key6": "4HNdXry9H2d9FZVFaVZv73SSUq97MsGY9npFivHvvA2BsR2d29BYBNme9Z3jk9vmfANFTaVnddWMvx8CZiMFDH2Y",
  "key7": "5DWVp5HPZJZx5k2ZeoDNu2ha5u4xhHxQbfZrRhJxR9Dxmv7aX6bcxu9GHtvTLV3uzSVUySfogWKuTNkDgwyb3T7s",
  "key8": "aBPp9NWWNmnbRABgTzDYXF5LNVVrYbkqHxNvYBbGjfHHbEt4WGEZYQovTbmAW1s6uJzLpgL5HF9CXRhyVxuu7p7",
  "key9": "3JMRphAyT8cMjEJDz1esQ661FBqwkCX1y8bWebF63vYXSv3VhtTZetXNti6SmrXRX88NagijC3R5RyZfqYVbYwXJ",
  "key10": "2eKFEwZQefEWVuZk7JwLSLojQBFtBhij8hVDMNFXqKRnp4AmgZ9UdZvyfcAxK3w15VNHz8iUFznJQaD82wJQwmgM",
  "key11": "4tvnz1LseMiZSECHTcnyigh31F1g8X24qSwvabanWwsLvrFVtmgMXQQPgqfYyXy8kby4LVu9bKwtp454SPEMRwbk",
  "key12": "63qV5x8Ye4gbfMYD8avqGpf8GWEru5CrpyiYhbd6N71uth2mtBDyevdhJy8EbthM7E5Dxcws4Y2q6QZLQPn4Jwqs",
  "key13": "2kScawhaW9awRv512Ydy3K8Z9aG22rNgU55nEd8wcr6vbuzwuUSuzb9pruJMhXGCtn54LFbwySdHs4LtPRK31Tfo",
  "key14": "cZ1s2FL69yucQ9UYeRBR57Zvn3RD2uadihP9RPjJi1k3Zyg17u6Y1c1KirUgUtQvM82FYQnLm2MdwWAqPksKLyG",
  "key15": "28EK1ZZX3MrGpcWGQPT8PkLFmjT26yLcLZfhVPq7M8dYzMgxJ6brAsUcJvqMNuciQgZLTi8qTrDyWz3GDfU5Wpxc",
  "key16": "3AP33THRpbRSqPmLgHxwNZ6Kc7Wie3Y7kmhNtwT1hhdUbs4mMY2RBEfMwRN2FDKfP4Lo6FUJDpFgFcg1LKNLi2dv",
  "key17": "4whj7e7mGe1zipkXdxYLKSfh4iZXcr1J9PQwPXJg9Wq2Ye1p2gGZocgALnJEcSCDUzdxpt95d65fQhVpeprQ5qJf",
  "key18": "2smwiKEyjSSN9wkyWChv1H3opkqZuPfP6MeTzTmdVtzufFsBSaqjR73vzf7XESmSGtHX2WigcNYtDF8PSXwpkVue",
  "key19": "2MG9xyCJWvanZuvXS6tmPN3Rf25wz6TieevufkcyyrMQXXevz9YZYhewAq9c8jo6VykGr941fqE6ybWNSy9qadbh",
  "key20": "4VBCoeDBKLx71yRoEsCCZYe9F9fqpuXBEyL2b6zxEACHZehqqkw1cuaFJ7cjhT15H75XoeWiBQGRgvtgS6MMbcFk",
  "key21": "Q65swtytmEBPqV9TcpTyA8gTGR9p8vjuBZDBt9E47U4SAmcdigDS5EMjCAppqcZf7ss7X39j46UcqQo21RQyMpQ",
  "key22": "WfPypNMUP1ceoUAwtwUJ4z4uoAfCSiL3JAHi1A71D4xuQ5JjYf8Pakc1TXNGS1jUbfXiyocEmd1HdfV2BeohWm4",
  "key23": "53DYd1yxDoiACrW4R5cBX8Zn4o2Nut2GgiFU7PjGwkb5eS2ijqQJji321X2YQ869vSPM7iQXUzRt14CpmmvwgLTb",
  "key24": "2sLf14bzWYzwszVoKUhfKbkdvuTJ8DwKhh7kza7Y1pwdXV85WST9tKiwfFRMcmq8CobJoDjZqFRabsdyzLcSYCEM",
  "key25": "3P3t3bC1xzFpxvcCCk4Km7Yz4MYGmDvPvo8UKFkanKcNhwxdXjA49C3NJaZpqczXb4SK4EL3bCtvrA1vsbwvuCGt",
  "key26": "5CUbrsMweDr63KfJ775g6vuUKUGr7nd2E7JCkSy98RYEQKWChRejm9X5urR5YMDTpzUpkUVckvhnDgjU8JJztd2k",
  "key27": "3nMYbFRXo1U3U96zMk4pdqSGCPf7xeVNiKjvu2KwtGbj6NuTGkiim7tG3bNKpyNDom2rAC789gw5vjyonPevxdim",
  "key28": "xmdaiquBXSjEM3rAJCwdqVqVPktKaEfuBFrwhJP9vkokXHewCyaTb6Z3ZEvXd5YUk1hLEZVaLNjmXEkDMwj7zSk",
  "key29": "3MbsFxLSUhz8AyaLKYxmUFmj4KBeB9tJ7UcE8TYNuj9gVWLrTPUYKTuJbGkdQ8jvoxwPE9Cer7Zqhf1P3xmYaFEJ",
  "key30": "4NcbQcUc7Sjz71RExoVzVajmAEWKx3V4h7AYYq5Nx2b6WiFakhYnBBaokiTKx2RhTfykWiV5bUsNffCDnvk45p2V",
  "key31": "5cXQrzCZGtsuKBuqAmiDiy7me8GxksFM4rSszAVMKamWq4vUQvuPKQ9b5LWb9MAvSku1vkgXVEt8sAHetQsnzGLs",
  "key32": "5jnznQxK5raJgaxaFNchVYESW6PGPiV91AySvbUVc8DcDZZEUFv8yAx4Kd2xdNvGruHeLpqmYGBrARDmwdSC6Z5b",
  "key33": "3qihHogYwwnjqJUTspHSAprZhfyEbLakPD8kVxDgmVbQnTeWYnAo6xWUEsgqvdGyxA4aMfaMqCTdk3vnanWPVDAP",
  "key34": "532VXw3hBqi6NVFsy7zv923Sp4frgjSYCtvxLiWqJeZTioB3BRzxMRRwAjkgxNQVdK3PL4hdhVteZbz3mufjXQ4T",
  "key35": "3yLK4yVZcDRcWhb9qXhTu4XpivyxtTfAw8rMB3fj7gaogLjGyFR3QMAiYzqYorr22vSyeSWEM3U47XbsrZuWbCDg",
  "key36": "2DeQwonN8qfVkNFh6jStVqWDiq1SPFQDdAh8g1q97mtYk42cudgDFnBod9RzixdqCpsMHi4ry24os5kQpknAnhPo",
  "key37": "2hRFRLsYRXcgA3DaEWjtvHS1mRXTxywVQB2r8sUa4LJCAVe5NuzRshuf4cEeAAeqrVjeSDpgEPxBFUCXQ3Vo4Aai",
  "key38": "5MfmoknPeAxeR91DuXMR8Rq2HwhGM61tPdr6MKGThdY9JyfM7xsCh7FykGJ6XMGPEhQMD3fhWWTwowcHR5g8BFQK",
  "key39": "2nhv5cCj2TWYZB2MQmvtEa1F2hR9UYHhhyev8NBsXhvijxis1oNhMiuPnFWvQnrnd7pFxWS76qiu3PMpJYk8Umz2",
  "key40": "4cFBw34MtZsSvuWqq6epE7R8MP8FFRNZVJVhPbphEaXtg1kDCBPNjdmNPMsZjVWe98DH7DQJoArBAraCLd1esi2c",
  "key41": "3KN5cBk5RBFmFaNpydUCWyjg4kn9d6n8qrbmwZrLXJmfzhkfVTfZzCbic3ZUYzsYNRn57tsojS9JsLrPiKk4XKgW",
  "key42": "4pn6yrhTEDEDgXWTgm72AzssifAEPzsk8N8mGnrQ77Pay3mWLzeUka6USL8vZoBBqCcEhauyyCx9Zt2TcvLVGmGZ",
  "key43": "21wrBxZppTCtv4AGcqYm9nuSzdi2mXxAegDaEiqBjzZRzoSVLpPyaL4WGUfJyrGKH3S3qxxVfcbAqBFN184JC1tp",
  "key44": "3bWfPp6JKCfSX2sYfcys2tum8kCDeo9r6PijoR4f4qATS3W1BvTRp2g8Es5VQFnWN5cTnJ7kTxxY9R7LBUZz4WJb"
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
