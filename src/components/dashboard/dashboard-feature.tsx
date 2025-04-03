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
    "4xxpb1u3CFq86Fmq7qaYbnq1CccVXE3a26JS5aKYR4j9fuYnufoU66LG3o3ngoi8S5wgoZfJDhmRLh3gSnz7Rq46"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z83mexiPwt4MfN6zjRSYnvvV5sYcckNEYocoEBXLNkGHMvrYEu7TnAyCsFfMrwcQdpbxZefJLGZ8fXjQHH9VFsB",
  "key1": "67p457jSDAnwkozuMTiYdCYedJbjN3cajFVhq9EBUwGUzSFwBxEzjdCknyEce7rxXx2WfagqRomJaPuTEiNgfLLq",
  "key2": "36zy2brDTFyc4ZTQjrykRaYddTN5wL4UZKbQPj2yqubj9Z24ZcqNgG7Y13VmLrVcSb4W6fT1LRFejDigpqXFsJyE",
  "key3": "55a9V9KMwv2LYsqUjXswPMCfN3UcaLJwdrKSMNsuqaaUFZ2scypqFuRTN3JmBsrnWL2UVJ3oqQZzkbuGyy7Yd69V",
  "key4": "5xz84TysuDdz6fYfmq1PsGPh7joYttLNE5T7p1agjZhx1MLSKsE3KLtwNC8wE3gJo4H2ruDmyazaXPttFJ7ZJjWb",
  "key5": "4YKXMoYDnGbv3XbvfemnGkCCzKwqUnbPVDyVaD34XkmZ2Hch6Lo6fHSqKcCKunDYabBEpbU1razBb4c32DMAqqaN",
  "key6": "51WRBLbKPx6qSAXxmhG9Bp5n9JPiRmFpFPMKMXs4mKk4nyWs4ZHEHVnYFztw4fhBDRXfyUgD9MoCCx2JqrZ5miw1",
  "key7": "4YfQ8448UwMJR2ZcJDPHdd87Npmgog9gUbRhfqDL7gYc9ki4EZXFDBgBBf8eKVFLSib7wERZmL2si6Pj5hPD11vp",
  "key8": "2wpBtQNpZ7nNmkyioJr3Noy7vvyzXnkieZ77diY2ChY3dWU7fppRuy9C6XU6NNwi3f4n7zovgMS4ozwM9dgqvRAh",
  "key9": "35ghd5r1eSzYaYrEB4KVYECdPCDsV6ubgNo9AhxpcTAi8JoWpRoM7pwFBbJ6XFYG1BHxgCXLrrJFbcenMZ49aH3c",
  "key10": "4WHUNNLCqLbhGF1wTxNGgmoeFcfvJVXFktvcaycRfq446U3EBEpRzGsJkRkmXUmKVgiGtvRg2TbKhf9ErUfXyo1L",
  "key11": "zrwPopAUVuP4pk4E78c5ZtYbfafuMzCJrwBXaBVLff3MXeXB9zxCDGCMqVEyWcdRXzs5jhjqG3pX8iu7RYUZbeH",
  "key12": "SezWcC2PBJfM5VyCAi8bRnoQjV5ntGi5pmdsHM4HzLWkgCyE92eRu3pmMddfPYzFymYWFFcrqZgLq59JLMtF7cZ",
  "key13": "3ywkmTWwAnBiyrjv4CuvSWMsoM5xykt6WQwTK6Z4mjNhK1z4F4nsAMCSGLTKHXtay6iqZ7TKLrUmHnmGZaZVd3zy",
  "key14": "3iZKRokf6FdQitqq4z8317NCBaGUzRkpUgYGgEmExdvoTjmkLgPx7nk6em1q5vQ3XpgW2ZRP4ynjgnwjm5mqEjbz",
  "key15": "3rTpJNL8xqnm7P9mfAY2h2x4MBb88sn5AvA9jDSZKYpof7AfmtYoxwurjYSsezZ9coYvoRP2SoS3QMzXw2igpxC2",
  "key16": "3SJfXUedhx2VsPwfzGMVLyRckCnH7XhMbuGzXPyNT5Ppcx6X1PE9JEpkQzyJxoH4K62PFy2zMuQW3MHTKKeJGBMC",
  "key17": "2L88NBEJriMqhsPrzWhje16NwuFL4ZAZM88khTNjDSYhAdU7z9cLCrCN5uPozTEcEXCiDhPnsuUBiNYzGnqofRhi",
  "key18": "3e4AcdhaLp9pwR8XJYWj9F57RXgYcssfav2tvSZpxfYfJtEEtgGmXHQ6pz45AfspcT8UWnBSMSz4H9rchavfY8J3",
  "key19": "43euLRMbzAXBEk59B8AxcjS6ZJ3owe1GbPPNWoUL7WjQVj9JDFvbNSLo2upq8QKeuqhFn3SX66ZRqKC2JsNAHPLA",
  "key20": "2UzQUSx1Bx86bqdTmEAmXu8dgGFvZ7o8G9ZUkbHT74AiTxVfySCS988jKkh189anfLLwpfYiNi3VNNuE1uxaaWpg",
  "key21": "4jAMCkMNisEBM68xN5xU56sYXeGgFNYof6MdwLZFJmedodJtJjeRMjPmac3HDaCcTVSu6dfpM9BbGwmV4H8km9C",
  "key22": "4yW49QZtNosEKTHiAYuKwm3SoG1qGVRMP5t4KvtGyMk1TgMg8ARiiaKYMConAVFybjnuEMne6sDZdjzdf2GN5nBs",
  "key23": "5kdZsbdq2FmP5Dc1CcJCR7dMBmX9LkmNpsWRHgoNP5P5v3CszWLh24Rs64GdcWsmKdmUmJcXk77Rv5R56D8KxT2b",
  "key24": "3XJsGxJa8z7jyWmz3JLrxXhWSWeEqbzBxg8uCGWVvNz574ggUMfUNpx9LJPaGvLHWS6miw38AKZdrYh4JTUXLesn",
  "key25": "3vMFyk7xKgEnFdiP9gwKrz7nc5ciFsnLGaguqYd8nkDwMzZMX7LxyETxrqEte92eZUy4LLNAihMXRok3dTMT51dW",
  "key26": "4wpRyhSScsL7p72785asEjYVMECrSiBu168p2AqLW1Jr8Eb5dS2gUcrxH8ww7xmjWW7hzvRyyfpikJKVyx65o6vQ",
  "key27": "5sC7vtF8uYvchYggURuZU7aJhAJgxUySeDpBT5odFNu39SdfigrTrpx6htqQKNEYGULTNhxDpKSuUXVG79jEpwYz",
  "key28": "5svCA6sjPHRotESg91DhPVNLqiM5F1RcH4NPZ9vJ3mPwkP7azL4VNGBcGiEugxS8HFWmgXx7mmTXfH44bCbDW5Rz",
  "key29": "3w5F9VLbRMVvPSakBUFqeearUABi7KKjUv7sEqUmYVUE2176BCeGK24HHbaXT1mo4KobJGeZ6dD3Ks2C6kF28Bxk",
  "key30": "xLhsNyFxfsisck2HsT3gHc8h7BecMBzh9nWHEWekbRQxrJrccacc6TwdouLuJVVSAmcCRSMbqv3LbKCyGsM5MwL",
  "key31": "2KUe1LNocN24pptuPisDnLukqQrc2QTMrH58ArQL4iUHBfBVyb8qt38xr13Y7zeqi8Z7oHQ49MwwiXx5W94W4WJi",
  "key32": "5eT4pHCfrY8iiSBDK5iRa6m3AyhfxiZrZUDg5LUEAQnhezvgEtJaRgcfqg9wn38TyxMdEPWYJwwH89wZQwH7Ch6x",
  "key33": "3NcVEnkzYZuqSDYkYSCKqW4CJUTcVhfcGfuXqokS8LXTmpFPxQgTSEoxYmg9uRMJJQH7FZUejsRdJedMKB6whZ4m",
  "key34": "2AiaEjNV9dMWGvwnGDDAxpDnZ41WTHZ4257ZjErDEP22SvBxii45bXiXSexDXP2qtxunNG9xvv7LCHYHSQb3A4j",
  "key35": "2SSWuw1jhRuqfsi254yEAj9tNq3QDjVHifpK7c3eVjhmRdfqkbhFc6TB2Aq423suXgzWPpJhrNv2mVTEGvRaDbJe",
  "key36": "5z53UA2wj7AFP6SXgvQtB3wQFuByGLLGncWBtxK86uGXkTeqrHStzwGmSQH8PAdLtRQWEefPQS2AtoHwCz9GmG3a",
  "key37": "2h3QJSLdHsxQcNdDmRYZcLHhmnbvooKA76K4rvigeoqykqQqGq2iwoJ4PZHHZM3qiVqcrYT4YVxUMnt72p1KYdqw",
  "key38": "5LLMrFr9uvxbzEagQ3up59trp4Jf5NgyxwxzLsNfPmdbqeZv97exn5GS9dsKyDAGECH4PVTs2pMNhdCK5etJPi7m",
  "key39": "3tVeo5baSPMu2RmEj4moo8wJD8VxiLi77dNSSWSPB4oVBc3SyqM6QjaVioHmgozC7AHebgUqxTyi5WVCmrkDxqaG",
  "key40": "YAtoX9NJ81QxQwQuCoCtw3VQAPdLe9dXELJdnKYrFAfxY6AqHXXPkzy6ucPXQmwp6n8qABjvc5wQSgZkaEVatry"
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
