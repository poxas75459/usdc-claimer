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
    "5eY8SPcaCD29FA7NfGN73vQXWHtU1ndotnHetQhDjUwHEShCRiNAjMpNsTwZPSEYtK54R17uNDtUEd6xCUE2VQVM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7vaPcDGRy9jNPoYWKg1Fsecdt2rGkppEMQ9D3kmCvv9DZPF8V5wKh7A2a2vuBiQbiQaBpxs5rJFC6ZFDTNdDiuq",
  "key1": "3ENmWqqD4cyHREhC1NxjmKekVAaGyf1qBou5pVkByNBL6zkhJ8dZ2yetfpt15mqbf2BMR4Ag7Rs1o9dawEKon24E",
  "key2": "5cRsSycs62DoEHYe4qCVFePuaxwvjjhB9dryMg6hhNjGf86xQaqrakxbmg161R6MQyLsse6uYSXb2M3vPv87Eeqf",
  "key3": "5sGaX7UVjSBUDRsoz5hnJKjPCLyxgSFFnkCBt1qW9zHJFC15jJg3nE56BezCMVnfqHAdQeDXeebkJKByA4UJEWer",
  "key4": "3pfnRepmvApCKiT7js1GdpBygtssp5uW3xPqczDKX5uAx77N4YcAL9xmqU6wRq5Rii2WVgwrKhzUcALQCHqxMN7r",
  "key5": "4NfyacBSMfz7ox54DdMqnRN31uKsow98JeAhzcdHzyNC9U3wwmKzpSJKD4W4s5GxJtpguTg6jQT7QvfXn4NpvmUF",
  "key6": "5LwB3qCPUtwkmoKDkdb9vLWKP8971gVN2ahaUeVJFMKaKvhuVLbsEM12Nt4oNULLVQpYGHitnBN1bHR7jq4aGcbu",
  "key7": "iujbP8YxMKsPqXtf63qjSyM88r49B5quxjUZSyqQZvm9GiceJaz5oTAvVXLdKSjRemvk9D7aTNUzMGrB2GSKyNy",
  "key8": "3GwYoSF5Qrg9tyUqinqqFkGBES5eXkcZoNBnQck3z2GjGUkJfdPua5PLUEoG9St4Vsu9EdtMy7VghcjtUmB7s1HA",
  "key9": "4DzkbwBuCeuodwG44MTjv9xnoS4ugiL6q9icYmmRQVu7VDt9Vgan9uKgTW2Dv3EAXeJYU3MJ1q7AU45LT7dJEkX1",
  "key10": "5tp6aoSuPf2QzTXvnDHibntJKGzBS6UA1ZzmCCMKg8SFggp36V6Aw46xCefcfYoYQNhnHcEP3jK66m76ixFSJCbU",
  "key11": "52eJbmhSNbvbWHdGSZwh4DjKd6R5c5uTGUYi1Kkn6jB1ZScVnyHpkdYAhZvJgnXr9Hcz95F5UWezqRphzs5R2JS9",
  "key12": "276ZmqfKhBnvbhCUN3bVQcLNEPpwi2qTiBWLxvorybiHQ1fkfrvnmU6fR5N7cEPvFpa8LUvqeg4WPUvnZ2Nho6oK",
  "key13": "3iLSpBPCBQCUwYwPbbWbsE1H8fJBNTx63yU8WRGajBznuHja9nVLtow7yeCMA5a88eyQeP1VbeFVhxCkH9o1FnwY",
  "key14": "5xx99jsTiEnNsEjy115sRV2fF6jbh4cbnZ9vPpogAswE37TzosaYJy3G3HrsY5rguxLJS1JmLQ8Zuf4ZZuxpYCU1",
  "key15": "5KvZqR5UgEkT9NKKRMPcmCH1db3p91RNnM7BSGtGR9y1koLGvs6c1kVJjJkq3ZQ9sYoaQub8E2xhZoDZcQ1z66Q9",
  "key16": "5scJVx7xdWm7yCviZnbw6EWDuU4FTWgnGCvuzhuqXdxUukFwm4nHRcNiLfXeiYBpXzBXcWozAkDwhL68Kp7cCGCX",
  "key17": "28oV79g714oUMbQDgTfSVHcniUBtPrN2xjn3LpxmyqxhCiufiCQkcA6qED9HkNPBmUZbtjyGt2o1u4yGJrovChdA",
  "key18": "5gYJ6k1n6mWEiHE8ZETvhuPxUvLvkTTwhz2y2ygcqF7twNmWsdUHSERFazcw1vdZ5CijA5nhWD2qLGKsmHkvxSJV",
  "key19": "3erXZcEYhLcdbW9diryQme6sWgZTVMp1TkijRvnsQzg5vtuKU941fZbKQnyzo23BFHAy32CWCWnaWChiEuDEY86Z",
  "key20": "4jJvJWMwqEh9VcLzVLVDXGZZ2U3sE2Mx26ow5DQmkGhgK8QY5eDCdfot2mu8sx9TtEWmrxAK5e59EXdDzBLSUSJv",
  "key21": "vn2EL27BmXXsxVs4zL7TzyBB5wqz3xix1zWF6hS5GeDoGKZ9cHXCLzBRWGwbcrmMXotVvDgNYXnHqWhRQHcozpu",
  "key22": "2Bu8746ezKjS9zvxSAxqZRmRvddQyHKG4X61HkmJvycYZY6TCsNFU42scKncs3Y37S2MPne61jejFsZQFSkiGJiw",
  "key23": "2oecTn7TANuAsMwqPWTpQU1uPT9SeW64yymbpXNaJokT2mzZFH3CMvXUgpwp9tgzma5eXqDdjvkmF1L22YCQG5ux",
  "key24": "5A2SgMvYvHt484e4G5KXousDSLZejU1WXACmTQCjsY3EdmYKXCXojguicRxgt4jfuvgo7q61DTRq9pPFUksUGp6k",
  "key25": "6uZCn1SJdgXrFa7FZBPyR6YEWZwChNgenT2o57SbP87Rq1iM24JYg3835Hzyxh38huV3b4jKoQV64BBQRKH912s",
  "key26": "39FF8DJZ29MpDpoxmzAev1nEHg7qcnuDp4Wo8SLZSZSDQv3C5ru5xtP3Pnq1nLbtwoM5DBu3bYXXo3cmm5XSUUrP",
  "key27": "41VNeff2WPoH73SNCFHSPUYXEVjAtmHR9CWx8qujsJWMG7YjAte6FbJ4EPvARhRDejHUCRnLFGF3xWFiT9E7LcdU",
  "key28": "3RYGxzbiURMVMJWMpfPAZmrXaLZzwMCzUrUaPnLJ3bhB8eY77mvRZ4YUEq7qNz23gb7eAZmEcPFBKqUkQFoebDMJ",
  "key29": "GfGjrmtcpYFefANdPGArsWMoh5RRwa92Uwjp1n2JjBaDaZDWKn2AHgLRSLwbfUMvb5xET1UiXUrCRg6tnmXaBxc",
  "key30": "4pSG3m9u8P3eYQcstW8pueRZrczrHyXdPY5FbWRMyay7aFwS4aYDgK4uebhWEFt3WU34NtM46jea2RuUNRVzpxDt",
  "key31": "65eHsAuya19NRpuBUyE8vFje6Yrffnb2imYgeFSTgRCNdp6244Km2j3sZNwdCHfTA4cAKtxsVadLp1uHN8NLFCWF",
  "key32": "23CtiUSHxXUPHxTxY4GGEC7r7QVKHbP8hnkrZsmMLqvziaVbaeGFGjGKHMLNkrS25PwMhHSX3mSsN4F6T1euyitA",
  "key33": "3DY4V5bAkKMiUKdrabFhxwHfDE5t6F5ktsfPrYGSiR2PkQUJmSDXcH7BX5kvq312pgzHS9ghYaVDKWYsuXmJXKf4",
  "key34": "SeV77AgXrLz5pqjfVgdoZB1GwyCzebCNhRtpeagBmSKXWYQ66anriMc9HmncDfqqLPz1KC6xJq9WrrBxqx8E2WH",
  "key35": "4x5rigtgxTRbbE1FQyFDq5KDKgtqyHdPt8nNRU31czGam7cE88W4qVyEFKhG9LiKhQ8JbYpT3iHyncA6BmXoJaMb",
  "key36": "4HWUKqPJ7hxjYEfXuUi6w3cJvH4YFHx6fNHspSryk5kqg9QpqDxi6FsjETAmVjwBxCSUXunBKAypuAB6pDMj7vha",
  "key37": "5Q5KGdzPH4Q1fbteZantkzZQSToBNHrMNqWTgtX19Fqu8R7WzBzTW8qJRcQUCHx5cx6uTvrW7BLqjBDGgdFx6anB",
  "key38": "fnSJpapb644StZPzSg69VTjwU1LhsW8E6ybaB3YmYQVrUbEGzfAfHk2HPUNPNh67s6ABtdS24XXyLANKQgEKTs3",
  "key39": "N8wnihMKJmijHa3sg1L44RJThPsjXzPhXE6UiG79kzAtnJL5991qTtAzPj8ht1kH3bgJFjAhhxNgh1PLXPThZkr",
  "key40": "4SsCYC2Vq9KNxSn5RZpF1YUpTebjU9uQaDH9cTEVdfbQtYPkVic7mZud7dn5Q48FS3FzPo8AtXwS51kDVSV7Ujaz",
  "key41": "53zZAhPzTSZk6Vo8yGXV8tq43xVvnCaRqwHezwr8esxw4EzMUWcZBmBwAu2tsMc6cmHwCSXkmECM5r4BmxMzwKRF",
  "key42": "4NUur3cE7oMT6cfDQgqukvoA1GasxLL5RRqQKDMBtFbXp8nX4r1GEo1r6xHowFpPp9kKqQAfVRXhBfiiWY2WLv55",
  "key43": "3pP3oigwsJASkTPaaPAEssuqqSoX25LdPJ8pVsNxPbviGxt7yNj7FU7ceBfxeTZ7UQpXz7jgBPyCevYJxVmqmJ9A",
  "key44": "3XYndzRzKY7KC5vdi2T1xXzRgeN19P5v1kZqtRf9gKWdVQJUpJg3isnk11pjkPEzZoyEcCMC7AGH4HUH5MUopHMM",
  "key45": "4JroYwsDA4C7JrK1mT1ctSVVNDTEnaLbPfiHtfpSsQurEeEkEsqT5FsfzgpvXxjgDtBFjtUTGNaDmn5RCgtgsDqa",
  "key46": "42xJNUY5BBDcapdMQ4z2wmxPN2wEiNb2G5z7LQsnZthQ4Psm63d7YowKD68D9XUY2iQ5J2mQCGdiWUihUL4FoXhR",
  "key47": "3VHbJHWHYVFabEn9tnD1zcHFvGiQp9Fi4U4a4LGJw7oJb5xa22Y1FKMVL2shvAUGQEpQXxPGY6dpj57gW37pdfXC",
  "key48": "4KD2UBSrWrEzb1cpJY6v54uNSjJLC4PGmSFA9TG2qB4DLYm7PFdppZ11rGmkHLrCH5sPmPuF6yUfiKj3iW54yamH"
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
