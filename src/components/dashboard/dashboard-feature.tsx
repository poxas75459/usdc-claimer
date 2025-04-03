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
    "27Hmuy8mnNPehJxgyST64UfQ6JayC55BW4XfLSMTXFkoPfBEaFaNXXtbMgeK8CbU4ap2y97J82hbPixKU53KZcG1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62YTjvY8HcLoPWQTnigqNKrDjcSA1HLn7Jt2E82tyeK5X3k41LamLquZvHtoT649jjrzZPhCEvwbigPbfRyevi2Q",
  "key1": "2LArUKZDuZ2EKvTy7FVcPbhWjLFs6erjALTRnvbn7SHhj9NhnBieLc9vcQwWRNh7o8ove4o3x9JcRXcenGuzBQZo",
  "key2": "2XXZZBcBMqnsLeM6o3vEZ6zBMUrAV3GhrkJUVGchDiBB6GBfnrg7aREZT2t4cEkH9qrEar1SGknzDshQAJoPMLGA",
  "key3": "33ZNy3sCUbaxcbGTJzb3jgnp3HFDBHnWD2PUssr35BY2CzSx5rtDta8H8KK1NMLNZgqJ2jZgcNBjWERVEADvykcc",
  "key4": "3J4mjgP9PmXEtTrDxKoY3DAjYKEcFPMuFy23PLn9LNhZMGYiKLJrB6vxV3gGQLndBAHSVxjmzP3cgZBffEZCMTmV",
  "key5": "2gNoBzv4sqMNUfUK9pkMiwof2qTAoueUeWha3P6LdReFGcDkWDxBbgciwcjYJS6bhmmbEMkFrBZs7spK3EdpdBDh",
  "key6": "au8DAU1ajXgZMdGbkeZVPD7R4VPYZrPWC8MrkHNepfQhQcVFi1xMFGe7DNa5SWKd3WHeTn3F5xPq6cSG6Ev5Vqv",
  "key7": "67SiTu5D93jgUuc2yRvVHi4BziLP8owHPPBBuUVbSNmjAHafwFRM3a84KuiNZjFiu2ih8qmisQUY7uBasTe8xZt9",
  "key8": "555yAST8kT7Nc6KnfpXu9f8RbfjRvDGFAkip4ZiwZfVsC6uomfKXE38knxkYPUpZPhKFXRFjXBigdYwdDxZszDgj",
  "key9": "4zau2rWBCKaYGEUeqtZ8ks4MhZcdqPexnEiG51YrNtnSd4Pxo2bL1tYi63L6yqyc7FZuigHz87cta2eRRwVHikwU",
  "key10": "2Gap8g1bhyciXjjFdJ2pStRWQRNJXTj9QRCD3NXQud75r1t98uqUzHaVHVbxBfKQxcw3xiB8uJ8Y5MRmutJH7Kxq",
  "key11": "4GDqqx9wqTWhed684HWVTHfaFDco7zChoMwCUiJtQNWRbCEbGFutt4T163CfqGWzqS5eEZpkZYLVGrYSvHNiVd8r",
  "key12": "t7L8RNMVPpCQCvLt3ZnKEB3adnhnYvMe54Eb6iKWffWBcfsVVafVA1cxhcZwCgSgGpYLotCkPYu1quGiWxkSbDa",
  "key13": "FTpbtt7pJVHvasAjQAiDdofDDi6Ca8wKsjLWi5JGTR7ZYarkvJpg2kvVKZtW32ByWKZLrfz2xXSwrcdmPeFn8Nk",
  "key14": "54bTEdhZrNzFJV34FHC8hjWY8PhUbaPe6PVFiicXMgDM3BQhCpRpPd2LUF1yvaSEAspJR5GbiACNGzsHsXK2jxgm",
  "key15": "4zZyE5GKjPRMmXabeMwrUvdoeF44ypuQNWeyvYQQkhnAAFaQU4CLe3HzdnJWnqKr6sC4naufpPZbd1ioVr6q8h96",
  "key16": "2s6VbpjVpmQUdUupnJ71UDL9CQJneEzTYNzA8dZnrcxnSieDTEcBYx5BvRsXs6BvCHJpBfiDKNNmtGQJv6iyKwV",
  "key17": "5YQUCYgXmxPkkfEsVpXg7qVdhiUdUJUUtbyJXvhnej27bfVUgNWzbB5FVMuacd68Eqzor3ibzziALTh85egiKzEK",
  "key18": "2HQjUt7DpdSZ9HDZp8ejwuj98viAvnDAshU94554epxfdsnvqAjTT51afPM9oQfRmLyujALK8RpeKfQJ4YHaiMQZ",
  "key19": "5htUP81xVScyqjU5npundWA6yELgE3TnRPq3S61HVQ36bou1hgM7NBdwt3ZUmG7Fh3p3wxeqMb4uV8BUDp6v7tfm",
  "key20": "3aix3gur3hbhxWB4P9p6eeGNCVDLsp7n5UKLiB7DWRncWjvjdHu7R6cbghFxgTVohfLSG6EwaGVH5bdWFzsSDMfW",
  "key21": "3PZcanXKwvxa2cAVbJF8KqM78aNPg5yYN97p2nkrwbT5q2dBt18FQZCTQ4VdGy7nNhNcBKzoDnVZXB48q6ddBaMW",
  "key22": "2GpRfMgK48HYeJwCbsjTpqtfAfZhDeGZQkuanDcZ2Kd9HdyMpwSkVWFqVMtNJeVsNGCgnhDPBbydWciryFVY9Sv",
  "key23": "5dYD3taU24DaoD6DyYhxcm64Xyj9fihsV1uB5ArGgu2PmUxmxKjLDCndfWa7ahyDDM4wbuDdctp8vk1mM564Tdw5",
  "key24": "3quxzvwTJaEuTQRTCcz9MDtRSpN4CxShhi6CWhvb4HBx4vnEDpuHWCozD6D9A59mXqKPXWWcVhqauMLkvxWL2gvu",
  "key25": "4YYP3wKFjHaUdDZuuruhzKCtDURMspy6SeB9FXjXzhLqWPmJ5eYfdaRuwD4r7ybbGbGreiVicDLjgNGcv5SWRNqm",
  "key26": "52E3GUyYsQqp7jH14GNk6L8P3mzs2if9Npvb13nkoEzwjiP3LnbesC6zN4Vj4vdmxBF7yvbzW73hoKQq83C9RGAS",
  "key27": "47u3acceEpN61TjXVXcjRormpshXMr7r8oyjAn8VTfpyy9x15YJXbYEBdxqtZy9tnk54YVknUt8EcqBGscUh9aAQ",
  "key28": "ghvX9yCEzMwcvRmxTbz9mNkAbKUWoVvPpGwPddwu3HxeLyjrFcvf3LRW8VoRGmrGB5eQgVptAhnMfCeSZWz1sEi",
  "key29": "2YkYLNJ626tpi9PYcyubCuksKhQDg393stD2eW4Uy5WJbiZtyq6yjJtDFYcZ1EHkvVRdjB7LTVZx3WHWqBSu2316",
  "key30": "5j1YU9ebgBavQXSPW1JwQp773veh2N5dDjQiegTtS12sywqmGFBduTYwP9TaSi1HHWvY1dvqgEkUEa9P1c9aamX4",
  "key31": "YxUyWEHRXYhWmMVzepBykWRTAeeqQcn98jeU85W8Pzumeonz63BbJRGrQWRRCXE4PwdnSjZNhZTNJUqtc4LC4Kt",
  "key32": "3sWYLEALF8pTL9Q7PXjXKjNoobNkpYkYq3RWWeDMdoEuM1ZDwYU9inYcmvX93TtHfXZqVX4odfK4Cp4Qdm5GeLH4",
  "key33": "5Lg2P1JSLyKdMgJDDTGrbDYa1NCEoMypzZh1oCiUQ3Sqdb3af9WMmeSkLAemjY5NBN1T7RQk1Nipkdf7KkQj4a9u"
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
