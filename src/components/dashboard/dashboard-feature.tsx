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
    "4x2PnjTt1TP7EFKWN7edBjYXNfgLFhKJ4SZYw4MgjfPvEWHR8boxviGT5Vt4iKvgwENh3sxjzN5hziLft7F9FeVP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vx4oiSXmdvDnkAvZ36pz4WskrpN3mRF1ZDnxun2xo4Xe1AL3KnJdxLzsdrxLtzwra8JFfuCY9v56WjaCXUEUviK",
  "key1": "2LxeVv6M2bTCJyFv8eMgm5yokZxndmKeynqSqTanJV4tJxe7iKUJ2ivxdWTZzBzF3CbJZeosjUkBDq9FKMwjdmmX",
  "key2": "2WyG5wxsrbpZSkD3EgcrkHCRSRdkeoyDxZeZJMvG1cZfbWRP413ZLyoXDEt9Vrd7f3DosTn8Ct3DEtUPn3MBd71H",
  "key3": "AMwhAtm2qeErjHZV9y1D5SRdqzKPHBL5UhNXnn5nVxh1sKKJoFoXXWSHjuZLXyizzvvXCeT1JUXZYUhQADcoLEU",
  "key4": "2cqC5cVtoSKvnYPKpRTcZrQZnncoe7EZMwAPsdHtTcwJaiHjrhDALbUc4NAF1ZdpLc5WHFhZ3ah3Wm446nwfg3qa",
  "key5": "4nVuyuD72DeLcrg1hYzXSUrmMmZDvAs1n9pEryviJYRScgsAjYS9WuJdnNt2y4fTmFEiDPy97aK27NAPKgecUrcW",
  "key6": "2mrp33FP8tkNXtuH1vof3sH1ip8dvuXp9FTyTC95NAy7yiwdggCpPnhoaRRk9FkrwrfV1DUSFfAtQNbTPKCvNUCw",
  "key7": "AhgJt5yaDbkpnPvvDHcR9UpqZLzU66y266tZyoUmtSsqe7PcSa1SSAJFeGF9Jo1LAGaiBUULorBwpwupbxG9bZq",
  "key8": "5CJMzda4v17tgmTAgNHXNm5i7KwbLkd6hZTMsrMNgraJ3sAPxN8z1NjSgDM5WazBfJV13ixkdfmb91pnyzUaP9ss",
  "key9": "u6E4ds8N9ok5cQHNJokKQ57aYXmRb3KJ3ygMoEi6Cq6pssgCZx8JxyMj6X2dk9ysFPLJuXrCD3ATN9STfnEppVk",
  "key10": "3R6Ep59Cu3NSr9DnWUToxhVzPV3ZPpThj9msxTcYVsQk4ZRWi98EssudJe4rYviFeUsqMzbyguHprNnaSwwo76KU",
  "key11": "37mBTShPVJvcxTiSSD2FS29EbD5aPp7ppBNWeEpe1GxmV6a2H3Ep8buzUYe92FWXRqojphdkHcQ1tHihcGh33Ebf",
  "key12": "5eBg4LKiAb8c4Fxz3ZinJEdK23M9u45mHPYZRBFqPHNMiUZWVT97f4VyyZfkfhL9KYyxBmjVbm4P5ZYCcPhHA9da",
  "key13": "WAKfEGEry5De3vZdY1noQMVPb2XbDgJ3KTQvcXWoiZbWhXoTwo6kWQCxzzu7zi8fT8n4xuHKcUjMfL5jws9USMX",
  "key14": "4eaYMnSMVfYs1VEQJJk1XNfMsLCR2r9AUFtd4W4BmYfNw6L4mGh778tmYxYwrLTMKjNk1Hp1yFfa4Ft4TKR9vTJV",
  "key15": "5jMmwSEfKMcdjfuwuKXHmc5ChR4aKeJsA2RnvoEwcr7QwHhLwrHTBHQg8on3DZ3kBPKBdi7T7vpnQs1FRKQADMqY",
  "key16": "4fm2DeFUj39RF4817vYbr4nCMoTgn2AHDLJKmJjF1kyZuFmJCtuP2SRaqNaLYhMy4vWT8EhR8hXgXcYfRKS6GVXX",
  "key17": "zRozD6wwpou4gdjCvuaEJvRAXyfbb2bxwavbYtU472mVypMtXvaRpvtumk4g53qY8u2PoCt2RfXRfDzpN8bhakb",
  "key18": "3JoacYmvS1RwDfQ1HvJVHwkhmMRgiC5V9vVN4c9qvFoAyfdjs6vada4Fi6sQ45DVS5jppSNmz9CU7r8VAhpNTzWh",
  "key19": "4AmNTnyRAWVAwA7FZn1iACP1Zojk1fhXTJZbAUMmPu81r8hpJUrdkkAQAK5H25zxESYuNq85gLk9tQA28tKbNdzQ",
  "key20": "BPFpa5uQf79jCfiSRgu5THM2g2BjJiD2g36LhVByTFirWAExb7jndCf9KKwYThAk6GNGEh3xAADWB3nZ5wRMT3i",
  "key21": "3tSpoxEcGHu1Z4uknQBg2gMmKMgSRDkdz96FdsraehP64sHZswTX7HMBo2Ju4j7hyDzk1uRq7dzY4qc7nJGm74fp",
  "key22": "3eQRcNTNEq38aRCQcMpB9fySdr4tf2w84rnY2ammT6HN82hwcdj1KETpegvg3bv9nb7z8md3R6fFe8TcQ6SQAsZ6",
  "key23": "4fCRMaPDjGW213TCapZrsDkuysifnoqFBUzp9gHQ9Aih3pfhrWk9Fozb8JbMzoyjxjfbvVm8Tc66819qyCvTAsSh",
  "key24": "2dz7Rh7TZbmSHiQEZ7kE8kRPpmqJ6YJ1VbhShoFhNmny5hQy4qbF7aM2fB9Whd7kKneprvuPAFPuhCxCoVzvE478",
  "key25": "G5Wb6g7jw37aWGVCUrC1dm3WTJsnBux2WS6p9bs6xAe3JUiCcAbsrAhbpEfSnnom2CjWcm1BDrWdt9XDHsJpEcq",
  "key26": "k54hY1uUFHND4d7eG9tHE7PRbKHoapMGPsDohEDL8TxXyh6rQMLxkh1XwwZdPzUGryXByjW9jzDmdJctFHn1Uek",
  "key27": "2at8FPmLzz9cPJHiHzKesamsb592iVvqyo3PKrPFdKKo7skYGeuKKAHtk7HvmWg9iF3SjCoNFJC31quNGQmMwZYr",
  "key28": "48iSYGkYUWSGdE8Re8pytYhdhMuc1sceSFwWAmiRDpoBTqbmLaMhbUhUaFeDMqnzhVqsfxNUgt3KHAcxKR6YrBmT",
  "key29": "3QACxgm2nrJyVCkjjc6TM5x81cgS5SLBVDJiWcbxT5d4xYAN8CJmWTbmqUUiLv6n9eziFmfHmhcxCZrKuXneC8LJ",
  "key30": "puskY9f98ftqPX717x79FiL34631Fs7TDqDQkDD6LAMo3nAPMpkoPz114vrTp3m74PLymznz5JEz1AMDXXiMyBy",
  "key31": "3qCAkStMWGBGjPRL5V3RRgejnDCUKAgaZUp92Dniso3EQ8DwWKvxa56W4d9s9QatFkQEmrfYoLnLMN8StSV232Le",
  "key32": "3PDLgV2vKWpjAnTemBEw2KUhxk3VGhwGvg7nWddeHSL6C9UsS8Q7SnyGb3mPXmd7xpeEqkV2aVg1RM8UURgzk7n1",
  "key33": "erxm1huPvL9soL9TasParaXoGEcgUcfVigJMwooW7UJ6ZFPzJ39VDeSMWtHct9LkzpPZTZQ3E6Y2KRCmnQDphc2",
  "key34": "Yg2haZ8pUoBrkhDHpqXahj1dRcgLqw1gMc2T3d33q7og3PGqHFCKQdjL9K3JwYibQRssBCf319sG5ERW2iiJWE1",
  "key35": "3EM3ec2gTjkCUEZ7C7bnZnyoJuEYUtPJu8pKWLrfpbqR5YkRbzwENwBbebET4goVj9ALbBb3C3M5Cm9GmAFsuumk",
  "key36": "3fcXXN18xW7dKx4k4nioceo2T9EHohaPbkKTyRYRzLxSEXXXLg6oUn4HpFXAn5HNB9fHU9hPDPtYpyKLfpFqNMUQ",
  "key37": "54MkUxpiRgF6ZdqnveqXZZm9biviQJpfqWtBcf1GCWz7QhzMJDa53G7u6wvt8yjpjW9XNm7bFTEQ9riAKy1uNJGc",
  "key38": "4Sek1b2gNTjd7u67f7paZ3dF8cjum3iV2yuxGKFwEqdqyU2t4c9uVbiF8rUL16mxFGET8V1j8ZmdJpNFdkEcSns9",
  "key39": "61p3M4dW2FzxidK5zrtBiUfdEkRbYiix1rcDU5srWF6bxRj341w5REgdNmte55QCqvq5qvWMoYVKr9fwtF3PwnYW",
  "key40": "3MSU3RaBnLx97QYCVxkYTP6KXnEZDjXFMmKTDXno17ZLgv8qYUUxvdcegPySbELZfunhSGaadZdsrgeVUmGnz1zM",
  "key41": "28remzYQkzWggcP4bBN52XNg9Ncs69DtNp9VrXTnZ6YT6f9S26Pss1gGsrcjmXekd1xtxPyPjfKRKMJ9wkWZLtkV",
  "key42": "4hK6FCctx2usmHEE41GpZBwEUKmb62bEd4EyFSTArLLAJhKyrt8f1BZvdRfar3nVJZi5uAMdKbdmYxeJGnXhjczM",
  "key43": "2yQDtPLu7enw8mSekV5okke2hfRzChPEgyDqKyHmxRf7NEgQw3zVi6djcHf6Hy6vwU8FZW9acHEXFeFXFjdXWFmK",
  "key44": "r4XcGjmABdqTt4bD2t7Yi1qrVqdxVWBhBFiRjfoas1PgUutkgVnxhUsD1M6iqH96VE4GtkxrEV2iRVyDg9jCSnQ",
  "key45": "5tTVzLLmFAEboU4vBk379sCBhsUKJYYq3ak6TSVZaTaa7Nk4fQ7RYBBzja8y4prYwSZTW73hxYaQQVgKsikvtZDW"
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
