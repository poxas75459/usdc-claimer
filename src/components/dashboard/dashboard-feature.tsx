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
    "2gjrxz9wj5TwKHzYXDGGXaM6ZhEAJrssGgRkoLXvRVcT1iuANi5PgPuPLUrhVJdWMmjnLn2i65VKRfC2V6EDG3d4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JTxurK1RTKCcAAtv68qgCJ3c2YbW7k1G38H4bzeXgEFusYPSMz612PwTF1gBu4r43Rr2pgCJgaWEznGqeqExLkW",
  "key1": "5cSgzpVKPKsfy4BZHWxxBTMttEKuDL8yS7uJuVLGa6TKPCbu9h99jjzUG6okvzPHVorY2Psm51aecNRNh7iALLBZ",
  "key2": "3LQjgCABmGb7gsxPVyRJUjP9sfC3pV5DCe6o1DUxK34xMVHTbobjQdfQCvMxD33CgzbWymuBcwfdch4cJxzsXE9A",
  "key3": "8M5VU1NyMrgvArC8tee1g9MtFB9fFXAdQ65VGHjNUqfDSRSRDZWAGxribeZtyuQ9WdTPR4bAG1trd4Ux3hupfBh",
  "key4": "47TqzyNMZt3X79UJbrjZX94vS2wERVYqCqLK5XPwcUdzxMpy4jEPEmJTLVdNjVzoyUrRbE2j5Q9vCEjUVLYS4Qjk",
  "key5": "4CpbF9ahNT4skUrDojFdXkhTgWaNa97B1emnuRome2tqkNyHH9X268R4XqH8LWuEtXCT2gqze1tCEY6FSmfD4oDc",
  "key6": "XVKjs1VzM9bMCK2ugS7X1FcU8TBLudts5dRcAe8nEy1PuWQ4n3t9BxQnVSi9CV5NHrhhdBrjMSypCJQYKjciijz",
  "key7": "4uFbaePWgXwWqPPpR1VEt8pxbTaQKeQvhxtUF2KfYVLv56xEUuMAeR8RYqTTfARBntT8nJXCdRpBuAwbtVVFywPA",
  "key8": "53uytm7HuyRfNzjJT4VwReaNQQHvtBBztQ2xiLxT1pYL6YHfpphw7DUvRSCr4xJnGwg7TmxkLrr9omQgdxsM7TrM",
  "key9": "HpL8o7oGZQzttosRCUKU81WqWq3DAsC6fidN5kgVNdcWHHsWhzg7YAYJu2dZ1phSvqub9KobwFCA9QbYMWgxZ1H",
  "key10": "5SdbTM9kaLbzYTjqxNb8Ne9cxh7TKgp7E8Cymg6ex8qiQMriFnvV8icWamESrZBvRf5QFa2MMMd1JRty9KgecAkJ",
  "key11": "3Q4VvwbGTnhSxg8e7cxsvPwkTbcEG9M8ow5GG2ozSmbxtWCxJqz3mafkpQB99dEwTiyX27yLhrWGhJRBqm5xTbR1",
  "key12": "4j8ry2wNv56zeT4bvMSmoAo1fN8si67XcxEZRweNNpavWU6GZRseNZtMa6RVw23Gazkarf4zHQTEvxUehyu6jJFa",
  "key13": "53EvJ3dsJkDbEuNBFwStb8TifdEayAJpNcJUtC2FTbS2iMzG5JZrRBkBgWcm25YmB4tVfQFiNfYH8Z59ZK7zMvxG",
  "key14": "28Ph3wujkJRNpiQk8z1mwbwyN7yospGYcuLDFsqdRxTYf4g3mPsTUwUKmXBsyEEsew8arQJZJZaPpPvVmyHipihv",
  "key15": "5jQQZ4F4eGsasNEw68hiySEQmC87bRJVgYaLiCYo7W2vxzpktYZfjhEdgaxh3TKP3agukpQ6wiAGrfH9mcRpax7C",
  "key16": "65zbKeeJFCaYsVGJWdQr4G93WH9zzigt1DQjktYrfDEATo1nD2waZuAYPHvYRorm3ULYaw1FoS2yUGxFnw67FM4Z",
  "key17": "4hbgQtJM5c9gSe1L5HrqBvCctMhpN1i52zpm1v55GDpwa5b8DaJCkTSSxE1ccaChMLp24TGLG1zAhW9zxvnfxciF",
  "key18": "rA4mUXjyUkoTYeRKzAV2Z4RJCeaoo6AmSnFcvzYViXwqYB1ux9CxHM6gqoPEm6mXtxyxH28PhE9o6DHtE697T2C",
  "key19": "3VJ3fJWGb48P1fYLnJxUrjKVpHXYHceq6VzMhVHZzF3fxJBuA5SnWYM7ML3t6UbrwCupTaJn2bzNWwgbC7KFuwHg",
  "key20": "34u7nsupLhCUvtiqKeTSf67fgW4swcyB6WzJZqnEZN6TDMPBZz3H5tA4Yrr3DmAacTUeAwp2ppPsd8vpKXiJ32ii",
  "key21": "5Mxk91AHLWr4ikt9XpYXsKvmFMVDRMqGHNSwArs8Dxz7WZAeN3Nh7gaHdiq3om6Kc379Ln5uqreyo1dXEQ3AWH4P",
  "key22": "66Ts6WgXCdgUwZ419uxeZWBSGk2axGPMZUrNWVCkCgJDxdvwZJkChyub7YW2SvFnUvL7DmXg9fmjqLeEJrxJJfVF",
  "key23": "3DCNgRMqyXqyyQ6MF7WVjfLbzNSqQS7Bany3e6pcGzE4Z8gtwZk6hpyr5gjF2TVuj14pY1nLQn6Zcgi6oFudvKUk",
  "key24": "zLxEYKC5pFRt84NVV2kGDMzGhsFtrd9kV68QL2nYAUhEYUbbzjNe4iop1bH3QZZPeGcUPQk4vsJeBsRuNQqbxaU",
  "key25": "4QhRnF9i3LxNYKMDHFTuDR8YTwFMbhzmnhkcqu4EEFxJSeUrueGhU7vK8fEU8ujao14PcTjvtBC41KmGg1xHpvTK",
  "key26": "2jZ3RrwzVxddsoUFWPMuusPpWEJWH9Y2WJbeAgn85tTvxN5zkpnnGYmxY5iqNhwjAWGGGxQ3FNHzmbtbbBJkea8H",
  "key27": "3FmN8HdLC1sgu1Ly9D3CAUEvbyLYx2pGvkwC42n6e7Xfs83HWcGWYYphrdpP9FV2PDWPusv3Gf6jnvsx23xUahRd",
  "key28": "eDRyMpGGYCE957hVgVoWagMPScGZPTY44Smb5QC7fBZGxcWuy9rBo1VBt8dJKGMDULEUFCoy7Hfiyu5k7G6yGvE",
  "key29": "5R2Sa7sjvPAQ8mqccCkUTW4o2f9fAT4SSpdDYvueXVmHH6tceZ1cZBBRJmT6tfTvn65Byz77SBAS16sjrfguKMms",
  "key30": "T5ieEBsNWjgCYnaSWKAEU7wRTHzVtt5Vw7TNVC34PC2KzZawhKaocV23UZYTcdTFDa8eb2w7BMoWAp2dyK4UEBz",
  "key31": "3QGQJzAxp5G59mXKdcL9Be8Mfr1HBNf4DHj6oACx9f3o6AVzgzMtEcRkS9t2FQ1QopXCJ4pctQ24HQUu2hy7Zd1u",
  "key32": "ziJ8cNZSiFbyP4NmEmfdDKWbVxHynqcxJzQfREgfpu5ghS5bEvjNrLUwFGpkF1a35oGDafGF8ciqTDG6CL6ZtYK",
  "key33": "6BpR68NzSrcdFYmty6KSnUT7iFuiFR3H7CqHgerxuUt3645n2f8DdUbTD2GbnWMhYgHzA78mkCam6gaVEE8ZRfa",
  "key34": "2yGVnDcDaK26TKmNN5cQvTJKbKrLuqcus8WujU4epU58pRJqteRUbt9tpXnLDFr4cYqyQBxniQRnmt2K4Wy1F9iu",
  "key35": "2faB1uWpy5hJootDjBjX5xnJbjp5yLDCsAqsC2e7BeDZfyC64hgEqVFS26WmTNgTg34DPSw4RaNQDKRhgH2kQV5D",
  "key36": "4oVSS2FNrXXfEEYPZ3aDz34sHkGNaQkx8Rd45aRLDVWMhnuWzyV7yUWdtTdwkpKW9xxLWb7acPcHQyyYhPgt5nd8",
  "key37": "2Buy1PX2EFzb4A9QQG4bif6Uoyv1wdEAduJEUh1hKfK8miKsJHeFNRQqzZVzYxyMjfzYJCPCTfvwdWEY1Uhw89sH",
  "key38": "4Zp8GREmfdifSyXHj6oVPXhTCXoYoJPxhySpN5jAm4BvEZRH5mkXiAUyMmG1FRqfsWUJXwevBtuQweHnzMU4e9Ur",
  "key39": "2LNJrKr3aPya7dbBb9btT9J5FmcnhkrGz1Wf1y69pi6DemaC8ByDmaM41ENUT9br2HYR5C6cH2nyg8pqPLJGakxF",
  "key40": "47BhpQg4EbHRbkGvNzbMJZmS2xhaWxBVb5kC2uXokr2NDcbKLrMJkm26WbDE7zZWMtYyvNEuc3zgtKkVkwukKcA4",
  "key41": "3Jw3nRufYjKmsLnzSk6ZDcwydbCTcZbkYGpiaAFivfC6RhYWgAe2oPQvoRCz6G9EJD1zBX1tfW8NcDjU2DQdgFoK",
  "key42": "2QY45Xrb81acEJjKms3GdaQHK65KwmSfuhAbB41syCsvzUDHvxsJqZZM1f19sayUUSJUPi94seJ6cctzrmPrczCL",
  "key43": "3KdA4wJVP86Zd12hsDp74gVRr4KMMn97CnV7NrLJkLsnc1MR1K3SCdR29QijtfxDa9XdL5y466YWQznbuPLcfr4k",
  "key44": "GZ9XEGsUXr8mo1t1d1SRMyQe7skrGSpmWuREps1QhtzxLWSPQDyNEC41yeakCC6A2UZjqF6kN14zrZUDGUDhNjH",
  "key45": "3raRP6wXFA26utbrtu1cZAShAyo5n9NA2yuoxYxzMH4GC2avLqWKXCQx2fK6ESw2DG2sDqZg3h6dWeNTUJTphxEU"
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
