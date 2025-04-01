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
    "4YrVZTwnSHmZ5gGF2LiaAoCQ4r8uTqWZwxSmryL8YrYrHYFqie8kdSimKhEk7zXJhJxuiUzeFtCZAAzeCM4SmGjb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "535mbSQuuJeHGxNcZkji2oFEZcjVCE1PdbMU5BQWbwYQ7jewBrQNLd46sSnWf2vcCgf9gjosoFqFK9draHN3vv4v",
  "key1": "5YnWj8GgC4X5hqJBjATcYEbWZvyvzX9zFZXd3i3NJ4GwpaQBkh6MLVKJrhMeazQDVLpVxEnRJEiSBtUuPiu91KNu",
  "key2": "59DDqXnE7jvfSSeVUW96yTguwiNAA2ujf2bdhmWpK1hvp1c64JWK6rLbtf44ye2xChRdMpjgaXF5ZpE2WqUxyxGt",
  "key3": "2BcHf8n8Vhq8dtyrGNPufp6bxCHDeVJk8hjLHeSX9yMQbhDSyWLq9uYJDmUtVsMERUbGZC7kE1j43FC3G3uuDDNr",
  "key4": "5TPcUFDsBE33zKzp5B4QKoCfeHT962saLqytyKWCoQASdagSkCq8MDK5xVhNqnu7mLHwZYXaXW8cZVKcyPdp6iyi",
  "key5": "5ZPBBi59xBnbw5ZNo8Bx3hzGBXYfxLkgoTuPD7jwEQmr4GimGA973ZMP4k791S7jba77MWsXjMzr2Xze6ZCXWzxc",
  "key6": "3ntBKa6foTKcq1Y4C7v1WT7saGua4tMxe4YE1vzNdKG6qnxRrPrw7vjnddBXitsURcvoAE8aKZCDDAEQ4dwvKQNK",
  "key7": "43tf4gPuoqe4MssjYqrBQR3UugwmrT4mP1LMZmNydaoPyJEDR1vQjV2rat8kVLZzSrBrP9fFuWvYXncPMQyc4UYM",
  "key8": "3VJkGtfwZ6qfjFHuKoJFKjgcCqoULoaUAhZYKinPUB6JVXDDLNncTrDUZGcuGenUkjK7C2QKb2j7bBc6CM3ZvfRH",
  "key9": "K35g9BWPdo1LVP9cDXAE1PwAwnVLVk33Lvyw8JqXtQCNTxNiXypz6cbc8F4DD28AATq4QjgtZLvDBY9S224iwt6",
  "key10": "3fGdBLxUzgoxVeQ8kAraAQSU3rz1G2nunKm9hDwjUjiSoDjF6wp7CXPAsiswxd1J3Jnee2qng2ADggggPZdZ69uF",
  "key11": "3pLxD4dvAc4Sgv6yEQkiGkz8E3MVmAuYjqbasawRxfFAQEe9MpXWkunfzDwBjJzuWMQyDPVGJoHrdrQgxVyLkSvD",
  "key12": "3rTxE7QS9EPmDiYm3TMhXNsZnjSXNEbmuEb9aNbxtgbbNeLmhVktUeAnrmZ1veZYwjiTiNNAdktqRX4hZ2ydjLQi",
  "key13": "52qFFDuMDRaVG48DdpQWctyKkG9t2DeD1NMVSDwk9TuDmWpMcg3ms4p7JVCSRSc6475orWc71fQZ3R62hiFGHdgD",
  "key14": "NSErGGR4Q8Qykqmc9wcyHBQmQxGt6nW3VmnN59M8kJ4o7rfQkftu3NTsfPesLRb4wadzqMBQeaXr43pAk2YNXJN",
  "key15": "2FsQsKkbzn4N9YktpsnkHh1gSGQ8qEAySWEKCWScQTZ2GCXgv5PbyTkZKwMrJqSP4KUAevH6UxFm2HSEkcXGgTrQ",
  "key16": "2NmYuNV1eQbvb5cDRBZaQjGBTwcXRa2WvnCR7G8D2SfZ863YqafrZbgRNQgCNdCS27dGsnjTmJR5LiPoTjggYjov",
  "key17": "3k3fwpTYQhMNLBGnCM4HhbifxWUNLamUhZqa2fqfxWnciDQZdj9rdyRTxbXX1ozjgCpiR1D2rtkaNfegm3Uw1WkX",
  "key18": "5GwSwrJiEJXc8R3qbBJ6Jq5on8fVbfHMWUNX234FhsbjsnaJRc2YxFyTQNPH4AwMRme8PMaFXHeYbQBZP4pCrFVq",
  "key19": "5QKmVHh3nL5Di1hqSf56htcXmCW9P3JE2HSB1BfMWFmV227d1AXqsBYkTjpAoTHaarfKMxDR595bE3c5HgGvNoU6",
  "key20": "22zLisPz2XYQq9FuCYzdYCCwkJELX2wN73pYiofRgRCabzTWiNNfTiKYPpf4ViQvG8aFCKE5rsgtqpk7avocLZZc",
  "key21": "3c7Cj9EHRdYniXbGXhYmbYWyrLzZ4zYfhirrYRWP9P8vkWTKCmw13xsYwY4dfXPDjfNaDVygYrL9UHJZsrXYpDNz",
  "key22": "Ggmm3NagT8YawG8cG3esHVUU93Do2oCychjRmhgLMHeiBmfYEetUh48if6qXmW7yiYjrhLjKM4usmHTb1oS1vum",
  "key23": "3ZPBYAs3MpTApYy8SjvY2A4UYMbgsAkZcXrTUBAoiGHFsdNAE8zaQYpYXT22yuSE31NCNbj5oAZuXPpg31wK7e5W",
  "key24": "2Gw8zBNqHX1ZvHaqG78b3eBK7SA67RFUHDet642mbt9SzpyQ98kWTWuGBUZTvMFpTWqzeYhvqextxhap2Q87sUSd",
  "key25": "HmHPJ7dYTkRasJaxZ2scjL89eGmhfxLzG7kj6Xwr5beZ4BvVLxBQtGnzSo4KB4m8RF7KJMHSdZSzTVJWM78PVfL",
  "key26": "5LCkZF2ihuK3JnNgnsjAGiSEqVXbaoLyE5aWjPVo6pNjf7F6TRriDR7NyBJ88YWtYofcsisvVZsf89jAkXPf7s32",
  "key27": "5v4Qs8PCwdQ4XL4T9uXmfaFvko9nUEk5bHfmwSrNUEwZsWLGada4KbY4vpnCkNiUu9YrgnhxXykyBu1eX5r3i9nf",
  "key28": "2rLNdM7fKJAXwD5UcTKM8GRin9Gn6XsYj7f12yrGaGVbtxGxoaFghTVQKXGaNt71NqDeMvNf5TvPrUSkMFUqjYFJ",
  "key29": "1cxWTo7zyNRFW83mUhtXxdZZ53wSC7X5wxTuXn4JF6gtWxfkxWVYDACUa2C6PhfnQxgK1utDz3TdCQrvLRqArH1",
  "key30": "5VHtFjHmMoTnvE86FBfsaTxAEsGEqCnQVF28tyhaEojy79Fe2VFh3LYVzKD7a7A4MPwE88EoYr5br7T8ap9SpKVm",
  "key31": "5ofteqo2vKUABbackg3faVEeBiKESryJ4SaAy6tjYCvaU5egNXWGSpF1iw97o6LSHTv7oJWmwT8GtBxAZ53cMyvt",
  "key32": "5QbNqdb9gQNaVMRQikVEV7Z93pkcPutyTDchSN1pLZdN9Cyjp6oWmKSd5R2k9ymrkXzzQCEF4EBfXV4rKedhnvwC",
  "key33": "2sq9t3UoyPC4gvjPyHm9jhL5WBKsBwnDP8dBbkrSEbW1hnVQd7iobPxho46FDuNNaRqrBpNaC79YvJheZFymrw5g",
  "key34": "43tML4NLCZ4JA5xD6Zfu4aEbTxrqwAEMHnSkdFZHfTkkHv38LF5Nb2jUA8dNwpKi3eG16aWFGNg4ma4DWKuZNmci",
  "key35": "4NH62EgcgnDxxUxZfGBASRVY92J3aSkv6WZcExxu19MKKPAUr4VToJzgCEFNpcYk8Sv7sCfL7v7gaH5D2u9fT9ya",
  "key36": "5DHB37go4SuThy7bWbwDQcdzsZqdPkzmVXqB5mcdQhWADLVudg31ys58xzjTNnZUR3yMTY1BpUjABicNkwkLV52D",
  "key37": "5CFZCe7529fhDNbkeGU5VAFXFDgArHmPdQjacYw9RLaUAm6YYyVUtSAwYhQFt1WxWPLHhLKXpn6NxTJ45VLTCGod",
  "key38": "4NtaQwxmmVaJp5LusjSTuHYvg2SZsn2Rm2VMKFLX7CkHjXevr4GMWLgzG7yVrfkJzCryfHvMeSN8GL6SDaWwrC3Q",
  "key39": "eenZt38g2CT2t7Eq9NLfhLF19KuFAup4KRzx2coMLaahqKaptvVDeRAV5hVhrzj9Mkj7QMDXTZWcG5H3jPc2vhu",
  "key40": "4sAVSEn6JD2tYh9cycQZAmwK37rdcFHtYdsYwTicLzG3BGz3jRJnBxFGYuKAKiTsXnXSBM6YNS3LdxMFXbKZaosT",
  "key41": "3z6DyEsQBYjuTgC46vLtLweNyNVULGXjT8wB7iCnGPaTSHgBhg7AnLYTdW3Mvw4HHoQbyWEq2TyUvw56BUxodnbW",
  "key42": "5HTnoYyDMvGTRumGzP3StEgLwaCZBWJKRXtuMs1UqxVsgg3r2Peq5Y7QNYnmVEzvEfq1SH5hgT2vi6sAvSLTxnna",
  "key43": "4xUr6s2qHS7AQMrWWqHn9QEQHW4wceBsdw2GsSPeaLEzabkGf9J8vBP2w6m8Ga2rc3qYosgfWXTGRnpm7G2dDKLi",
  "key44": "5LyV2aSRr3axVdUAw9qRZLt2oS3hnsakDRSw1PBfWErH8VtKYXbFV5aeSBjr3Bm3G2XjqyM5ConCaktomoZ4JRNx"
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
