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
    "3VnXBZFPh9Q2ySScuxuSKwhFmbJRA6QWPG1Q1FHhSiKqANWnVCvA19BhuqnHkegdaiuR1Z2Zi85791vnazAND15i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z2YsAYTDGEzymjkBtUyzELLmew7UvP7Z2ZLfqFvyB1UnrPkbJdGt8qcDGRssP8EhLNbC2YFKkAc4w9aeY23y7tr",
  "key1": "WLuWj6NCwQXmAhFXyJXqjsnLUWtXwK1qpxMsidHeYkg1UC7ZH5uC6fDvSuuZFPxAmPpzqtDXhoabqJCXAe3GF3B",
  "key2": "3XmsPzXRFcWb7U1wXnM3CoWHAyP2oTh6sB28QvfnuYoSAe1hdJs8RNbKDbGNCnWa348bEqSsxTY7z1QTPLLbMsYV",
  "key3": "5pKT6CGu8rcVmLmnN1btFJE1t1QTqh23szi95utrf8FeiskxWyfRCTr7e6RxXfsMMSKStY4HmawjBXPr5Mw2QeTL",
  "key4": "2Ur96Uh35SG5LBApCU5LBWKkviCyjfTmuoGViEWxVqQ2dr6MdFjUbE3cd7M3HsLvTFMpF8WH7L7sV1GtGk87RgBL",
  "key5": "5xK8bRLdBcabiMi4uoJPP2tKJgtnBqDKW2w9L5EeMtAA3FngvsBWt4EdtqkjemBAFoz5Hv2j7ayW3B3C3WdwEG8c",
  "key6": "22V5cd5iBMU4jT41qsdCPc3iRQ5Vd6szmvLDgciWiTnYYVjVsjXfH5yhcxv9mz6djvEbiPS6939c3mRyQ96J7ygt",
  "key7": "UCLLoWDV6Mv45LSLvGXrrKC5XZUNpph7Mev9VsrP2SFBf4TtM1vTVKPuTZD4cu8jLUCbeLspEskA8TP7jMLfwdi",
  "key8": "5AWCsYnrtoVuCPd7Jr2k5B8JSTECSmqTHyYpcnTJ1aVekB3odBks5fe8eMFWdjU9PKm8xgYDPoAiWvvTf9KwgdAH",
  "key9": "3ub6C2k2SyzU3D8d7uYc9QExEp9yzfb5DjNJEfsrE5zUTEDeT3ub1HgS1Pa1PmwPLMFEAUXSXDgRujdzq4jjdgzy",
  "key10": "xk5kAmWBA41UPaXeYxLy6Fc5qSVt59BWgQCgv7YX7MKdcrpNHKpLn68vGppMgesnRk3eFNkumxXDny2A1mpK6Q5",
  "key11": "JnCZgk3eRELm5wVNhrvpnkD1YMHgxQ89PbVDkeLsaNrdrMTbASapopA3HXgB96Seuk36to9QEAHdt7EgtnPV4gX",
  "key12": "43NnuMM1c8zdTd47zgbPWrhJ6xN2cTjGwipmTkJjgh332yk9okPkPj236xERgFumtsZi2E5pYGCtg8CNrptN7Brg",
  "key13": "3yvBtGaiLCkGPz1ydoDrvvc2qU86Rnz8B26rra3iLukJqXsLBTE9PkTRpwrzevCHhsvL45dHYGJZCncrKDXafRS8",
  "key14": "2uNGL5U1UgP8Xa4RzHiXf984gpbvLohZYwB8KcRpcHXvMnBAmjP1E3EvzvDBdkA45ENXqGDufZrk4sqTjfYQc1Np",
  "key15": "5i9yCxsBvwhsoUx9AQvkWZHkbVb23hFADohPa7YVrUt2ZKit3YdqgTBV9oZMRP1r3cvHJZuGzm2oCxZoKiZMb5zf",
  "key16": "5h1VFrH9DgYMXtXqAZkbC5kT9cn15oCohvHtVziYnA4ePkebJy8Gj17Nyng5oqW4p3nu3fV9ESgTVK7YP9s7RCgW",
  "key17": "3VjKGWkcQvtDAqHZgkT8jcA5SzZSzAdTRrZv11K7wF7Zp5QKRhsFMQdw9oTUWRj61gpMvPqyPJR7Kb9ySmYZxcUW",
  "key18": "q7qbxKZ4BiH6dfgZC7R6VvAph41jqQYcrqU9pn79F8f26BjQXndPR18hZEUjhRqigm4BE1gTSyfhEAkS7WQT94e",
  "key19": "53kg4DHu6c8xm1GQkN6XmnFGVHSoBbxiQWjgQUHT7WuaLceWJGEpWzokhoGefViNvdkUwRNcBdqNGkYtGAN5U7ND",
  "key20": "2LZKkZtWSLzcUf68Ngjc8DQKEy83MhvuyC8tqM21bS7u55RYYrf5KHpooFESeENNG5jfonedu1MmUx35VUjhJFuF",
  "key21": "2ZsckKm9q1YP8StPc9WnRXaBmLWV9zcZKP7maj6NyGkaBhepLckH1tnda8u6QvUthnSWwu94dTNYqmvkxqXkfiB1",
  "key22": "2qJQm6L4FoqMYRz5EVDwDuayyWHQ6yECEX3aZVSo63kZSKSe9vLCZhDYG3pgG1at6ZHv1efo8UfyfXeo1L8Dr7uX",
  "key23": "HJ186Wjpm4N5R8CGoQzpzJVg7n1WeX2oop5qFnfct1471wciENeWHrFYima8DBDxsvFspRhJNA7KtZjKojvqRW6",
  "key24": "3K7bebS7Ag6EC1zDUGJmNuEcfBi6LMGboxFeZes51kShYPU2C9rxS9WhLr95wcrpANyX7hMp3tkLimC5YK8xuhFb",
  "key25": "4ktC7gb1dtm1nhT9f9XJC7M8ajdmYMWPUgGpLRUdkqqLhk9fAZmPR2PHKeBT17gMeAKi8neafYhUYYR31ScvfJBN",
  "key26": "4edpkpgXQVKFZwmwb4Ng2kbum5moSfVoWYoUpXgWVFHF5VPzDVV7dU4SVY9iEpoxKvEWzXXfN1WXr68nChv7sXq3",
  "key27": "66qAjyqnpdqogRYvShxJQRswgFcaqXSiwcJzGsHJB94Wve2Lus1xrmgqrMocZmwh5E7kHK2etVoH6idwci76DxST",
  "key28": "3phZyqPUZXX2tF3pXK9bjmnRgLE674TNnCuAJFdreDWHFRQVKsxDnprnV3kQY3hx4PvjYi4Q9NzyrSV1xKr1YNrN",
  "key29": "2L2NVnW26NiW9CZfApPGFi2qmyCfSYaSjnJKDwV2ViDLVhsqZQxiuMtrmktkWQtk6otXmQ67P245h46TCdrtv6hq",
  "key30": "3ex3E5F161JsQcdbc8ZPATnFmXkWeeAfd5BZrXDwfDxy5S6WHhFBbcNCAh2NYPTCppwRMmNgD9M9nSyfrHpUWX7s",
  "key31": "3iMHpBPtRmT1tcmAcdLMMmtxE862LG2MzJc4QFB5ZEHmM18vLJcZa96AVgvARHEqbBB3gDJQYNeXvzr2FPFWPo7E",
  "key32": "PmGTy6TBuKCVB4jw6EjqDtnsxgu6mqQzsF521nK5mrobNaNtK2sYmGpuZawpx28FvET9CDLFrwE5tXzEnFYkz4Q",
  "key33": "2SbxFsk7mPJb36gokLikmmEjnDWYuc6Mjc4AXkpG1TaGYaECJeZkEMuem7pivu5VBU12ZZ9zYM9jUsksgXLVmkP6",
  "key34": "5DSHYANkqYMzXZsQV1cEdwve56MfHyAruzFhCnP4GNaS9SvymRKbL6zt1KZ9HLyrSu1m34e4RnTQVY39weCvMFti",
  "key35": "3jtAnCKj7rTvbHCdYZL5ufiikvs1qi8bUnPRgwpb2T2vhG9TdS1Wy9L3LdPdhk3FGF2oifJddQ34N6yahuz2L7A",
  "key36": "3X21Gj7c4394Sm858s87ZSvkoSvSFwNCPN4eYdRj1iLiF8Yyx4rpSVQGC5Yfb5fkz3yom3ykJfTLdMWkKdBf9jTW",
  "key37": "4kQwGGqFmhg4bVUkckYwg5CBKmkgR6T9uo1QsTmULU59xesoTvVDvcjACmVBQHiCbgkmqsgtc4UbcSBQ1T5PeYPr",
  "key38": "RvgyfmrTUtrwexHgwZRMPJJAUMwcams2GE1wLvEEsMGRksDRukWiw1w93mQ7MsyfdgRyTXZ5i4K2jygsVLYPDNz",
  "key39": "241sxWRZiynDekkjzw4E5rVvGwax4xweYYJYjZGCX2vvpedpjc87y2q5EXPumtsSY9BUW6F2rLYGtuUVDKUTkyKe",
  "key40": "3sEDer43ESRTWRqnN2rw79iQSH2bVwS7auq8w5NC38T7yeA1SFpwPvTqPEc5zLyKaxhJE75GNAWcvvjx8QGVqUq4",
  "key41": "2W7fb4PvCK6oqcVL5LKfmvDuYZ465Bo649u5GpPvMdn4jgQJbapmmodUxk3uEkPuN172UmzQyAUy2gnD1W7wzxsZ",
  "key42": "k3BozYpXKWH5Hkt6MjFzwfT53FYLkX4DipTgr6oFhNA2jB2bpKxaCNhcFSjLEMz9LrxLjQQps37BpDj5mwbd81q",
  "key43": "4amxJJNhzX9jzbTYjsuQdmYixewsW7ZNjUBhVwqQrXEXZ2hsEC4TZM2EPRue21zLmKjaebr61FFzpR5e5oCSN6Lv",
  "key44": "3WA4Xy1Btt67v17odiDjbhAHaPN5fuznY4K9aNccrwpG5uc8kf13Kodzw4gZYHxPT8nG6PxHaGqiFt8vNqm3ZSP3",
  "key45": "2Xfbg1Nz4ZmdFAajkRrzc74X7Wmgu6RBvdsu9aFwTmm2N1RJXpx6R3F8bJBrdB6APCViJ2cxNUycBvNc8hnKZLmG"
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
