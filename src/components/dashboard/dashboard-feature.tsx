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
    "5PgPxntXb2kFTnYe1nMWqhBCCr1cePvADfkbLauSta2yMz8cAYgSRrjfuXwr2VaVRNfQzZ6QCgou5CaEciJm7CKV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QBwsTQdFECAeKkVwQaGvL2uhgqwmjrUm42HcPe4VMJCkTq8wc2C6bMEcSAbLWQD2rXHBVD2JkxuREeHdSvDPhqT",
  "key1": "4NvRiAxFRtXDawjq7R5FFT1DYPuc7yK2fCkXW4SPDBMY9BmRcAbQ2fppkBMuwAb7dT4vKsPx8L1ZFDfHkqTtAXno",
  "key2": "3Nck6oqR9hjHGXpnhWWzqwUDjR1ps56r8RdBRmXtfGywNxS4YJPAmtFQThydfHFSPPFrxqLkuYuzpPv5n43oEmLT",
  "key3": "2k6pgrdVb6FsH9tvrp7UqeX3U38a7TKaSj9AJZkZecvasn7UHGoQbj632YgccnqkY5fch1sVsik6SXZM9asqnddF",
  "key4": "2qRs4eMiBS4N6EBSXwGkyAXBizP91qEcnosfmHowZ167oh7PTbKiiDtLSqP6Hd8wjmYzYCu1tWSziDyvPqGCcPYd",
  "key5": "5ybi4QCWBVAYGshMVXFUK4ZHkVA92GymPmjKD3jwTgS9NnLesWo2LZwV8NoYPdbVGgdPc7mP5ZivqiYbTi96Wv2Z",
  "key6": "vT4uVCT2oyDL7CUSCQBaE3PoKfoBiuDmMJKE48SUbT4s7W4P1FXJadDmm1qJjZ9hwJpi3mKgLNaCXKVSDi3BQAL",
  "key7": "5iSdj8mzd2LvohpAjbGKi7U6v4m88ScsB8hdM35SuvRdrfUuiXgnFwQRq8qkfvttDna9a9Z1wDzwkddekLnhAhQu",
  "key8": "5V9vLv3uDZHir71Wy51AsLuVKMvRMeKxx5ScBaoGgq4Hg2zHK5xeyDT4H1xUizimD49iTWuUQQrX9oiGkmGnkCp8",
  "key9": "4kzaQVZbV5Azet5qrXNvL5kdRbwfASYViVJrHDEbbkHo2teKYHbY3Spa8cFLsZD2zujunbwqFDzApU8BgLDGvd2g",
  "key10": "26Fgu5HHXPM3knUybE5nkPWGkVo3ZfUZys825Z6r4dgF9Jf9uFpep92Kdwk43X88QwmerKwKK5mbfXRn7rZrfQns",
  "key11": "5j4NpbVvLVMZpr8ySUE3vjGyWUe1iMkSHyA3qmgVRhRCtPbc3Taa3yu6NMr8hXvSgcGVN1rANu9ke7D73V3zSwAb",
  "key12": "5tbcsnas2Vk7Qg1zTTWtQqmtUtmw4jLq2Bh8kR8YvcCmWXftdqNBPJBKweni4TE1skd7FAZW3yjxdSGkrUrZJLmg",
  "key13": "3ccD2eBg6ZEeWjvd9BN6ccvhUtMtKdRUEtDQodd89iuNEoc8qui5WRShFZ58vMXDFpDACWhxdbXjwY4AxcistvKV",
  "key14": "3vVZoyx4Jo5xy3sSZHfwWxQtqYscBf1HjjHN64cCg48AU4giPGN7kBFZUNaz1U9ac48zs9B5sj4q66P7h1JeB1vS",
  "key15": "4gkCmDFcCUqfrDTRusd9BuyjDBmgMj24Pgb83ZYpLsKkQ8zCvCVvbkB6W1EdyGdrmPZ99MFx1U7dCZZBSGHrW2J6",
  "key16": "5xURpfDStFuBcDV9yghc453PAKzfFgGzBVJ2ub32CnSNoazvHjsX85bXDvyyWsymKCiPAumHZkrep36F8DHPckEH",
  "key17": "2JuuZgsVD3rnkkhu5BQGTEtiCcN9bxMfarSRJhQdnkaugDeNA2ZymYCuHSf5jhTirfQ9qkjo3ZWu54PN7T9cpzLt",
  "key18": "EcKipsEfMogwrVpSLsxA3JS6JpY8tcii2UcAg3UgMQaRosFxN5uZFGFk5vMG8tSbtmKhkUYTrqSNyiMRrGuKL9i",
  "key19": "2HhcYLiZU76TRZ5dp9pGev6RHHkaLdvPzkXsuq4YizNq659gPaPEWhiB3rDBU2Ky6ep3VUSuScSTJueNuwHA8xfH",
  "key20": "EoHYJofYfFQpPgaYAC52hHY74DKKVv3GBMmTPqySHpeHuArCs3nRTYAmJfNLXgG5FDaVXNPv3oy3dCMxYKrAuZz",
  "key21": "4ZYurYgQYmqxDUqmEL8FpLecyRaQDztcQg1kSFZA4fo1inXFiRxryZ3qUFKixzEJ1b4EjVE3AYwRgAkAh58b12mE",
  "key22": "3ar23QsFYc7Yf3CPKeALEuUguD7QeYDW5ehs6KyEHdEFHXeGTDp5wJSVTGdfSPxRDRQ3imSEbuE1WyX8rfsYxBfD",
  "key23": "4LbZA7uVgaFyGPFsyouRNaLsWGVcaXKc6cbPTuVknFfvsp3r14HvF88D3pCquABSbySrykthJJ1XeA6cQVLc1HN1",
  "key24": "5tSqD7nuY6qdqyz4G3ipjLGCyspx2YdZSfK9Tk4qiMecaZCG25gyqqYDfSw2N8mK2hNKBkqnau1wi5jxu19SRSge",
  "key25": "v2y5DM3Jtv47AUn3UTjAn3hE4kzsu3AeAuLE3Z3bGGu5U7mLieUmPgmL21qgnv67w1BkhYYotavQ7BUgyZoYHoM",
  "key26": "2hu745YSxt5EGcRwnxpVVLRwo5uhkgUN6B3Kn8K4mifhqsus4aRh8EgFawFdgqoSy2imJ6QUXG8rbTGK7y5F8UsY",
  "key27": "3rGbspRHhC9pY4tYjX4YQqeqyw7n4v1YiE5ZZx3ZBCNLUBFTYqaEVWbMp9iAxWrcGjqn1HA1tKdrcL846q4jLN8F",
  "key28": "zFPX8fp8UvPBrpQn9VukrtZH5S5FTbDk4raCHNiokHJzA3szRbovv1mnYeryqacrdmeZADgvdwZb4ChTgPfEEY2",
  "key29": "5ajSJMpL8wNGFBtyS8UChRUsnEe28GjGqDj1AV2pP1HkuAwDz4HhShsifhiLb8h4Ja3Le7L5DdHW8Yu4qsEXngq5"
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
