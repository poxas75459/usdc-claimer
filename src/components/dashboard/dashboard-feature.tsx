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
    "49TDnj6y2uefvhgQdfoxvfS2qstCanjNYszCTAJGA9zfvxc5KU1M9RdHMibV1b4z5ci7wngz5BKzo5aXuQWguPAQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2avqhSwRWwdibwmpGiLTWFiBLfmm4BmCSxUF284F2ZUjB3jCY9GWqsfGHWLRXvfccNhxhoGgtS3PWLG3r4Q64ets",
  "key1": "2JR87LXfJUrWXNjoaYJ6BzTx2SoPwRNx7HVwYMMvBPgNETeBSTEDWh32rLVnivY8yv6uULXiq4hXZ6CBT8V4dQ15",
  "key2": "hhHSepkzSWgWkj5NJWepAPYGhGtRa77pimnvWr6PEotm7z9dFEiTfsQm4WHE4UMSxFgET3pCQt5ExD8rTvJBT4V",
  "key3": "4aXz7p1MZXSQwkqMdxBgqxrsQZRekUBQ3MGPMezSRsDVUJx9aTNe8eCow8MxBeLzeuKd1eyNQPXSK3PXw4TG2irW",
  "key4": "4ajZ4itcMM3XhUGsjY4eJgkAkLWeGA8mhzaLzp2HkDkoWFzwzejwpMXAEiDmU1mF2aynrDQAHGFWxiypadkD4Pvu",
  "key5": "5jETUSYNdwFvn99kB68hdqYmdbVZRqbtiHqMYELmwddFtbnjL92w9Ny42kxVnzbErVDDMsTudHUS4avjaWquyDcf",
  "key6": "3Ws8wmVq6p3cqt9N2yDK3gL2G2f5Vfu6YBq8TzhZ4cs4Svj1b6eu5iMmhPBM6YNc15MBgN8CV6r4SCimCwGRJYxi",
  "key7": "4MnfBiyyEm4b3vKUVrbSXrqoa3YkmAc9fvheHi2LMx8QpVpR78WDnBtEX24GKcfKhvcPJ68fgHKMkNC7GUEFzXfn",
  "key8": "61aMPMgtkjRbCLPqhLTzGKzSdgR7xymM3Xrwfbj7Y9p4wQRTue8gvRfgcwkdz3G6E3JNi2yXWV5RBiyS8ejyEW6n",
  "key9": "3P5PA2FoXiWbJrqpweqH31M3gNezYig1rxx6druJvRz6KdEvE8kBVUiiS8cQsWCRzdgJvyEmh1hBVGCtccHV76ne",
  "key10": "4SzHbY4PnZk9EmdxLP7z9xtcF6r7Bz8pu3snLGyYN2ZgG5QTAznFEcKDZtdrmtnXv6fD8mEoDWzJufQiyk53dJXH",
  "key11": "4oC7jK4cestCxJBYvASoyyvhD9bPGkM79t8qu7ygaxURKUxwNp9dxBFuAfETbagXKhirRPmUweVtPb1UL12MJKPU",
  "key12": "3RQkeovxDKizQp2J77vWhPYxitDDakD57sHSXM9zwHzn6wAWKKxQVeD9Eg56mbnv8JdtucWT7EjnERj5GFZkupzy",
  "key13": "5fWik741diHEbVJkENHTex52gLSFTxrMrwqFcjxEzR4nirQBr1j1nhG5MTS7ejvCrDSE4WbSMkEiSq2uULEnmHuy",
  "key14": "5bdr2H3AvcQNq28hdPKaBkATWGmxuyVqent1kVfyC7ah4viUdnyZ5APMyNe7MTKsFW6xCiKz4zstNZfVcCpz8Xqw",
  "key15": "3imJgKemgxJ9s3pig9eNcE9noBoE6e8c75qyuVkU58kCzNsbofF5yU8FQ6bd45ywd3RVCXZKyu9UDJP89zmtywzQ",
  "key16": "NjXbeFtxpbvpeNuwJQ3jszforfAmEiK3X4qN4skpXFHavNkvug2JdTTDRfU6SoRpTZZSzXxNTqrxy3BgkY9jByU",
  "key17": "4Mb7DbG5GkTC3TjLbmzqZbeqVWu8xrmVR1fafoUihZFGEcjzTq9WWe45jpd92tBDa3AhhpFUSh9yFwpw6cf2KgfR",
  "key18": "2iXxh2MvHmoT28dBYk6ka76maTHoz9DwV8DK28PoBXWrUiwjeqDv7feBqgRgFJVmhbwfhR7jeNxTHmF2tXJT3s8R",
  "key19": "58vRuSQX1eWHNAGt8Ui483iEyR4e3Nnx9azBXQVEac9k28qfagZab9DCpFHvGrqRMRmig6LnARJMctsr1LoffUM4",
  "key20": "55hhfNYAVJ85Eh76e8T1U8jQT9WBWd8NDbSDrckCjAqoz1zur3uEXp4wF1cfwus3C4iJdfQEQ4Jsznqb4jLnivdF",
  "key21": "5TF35yQuza4jvr27rzo7CyB8WkucxUbfN4PCqBCiMBPRZpsSACrKhrGad4oj5qBinWFoXLsps779GFAsWF1pH8eL",
  "key22": "3Lj2jroLxEmHFpitbrkxZtY1oWyeeVVRExD3TtzPz9o1G9XLnWFMJeHwdjQjmNdmCrvQNLd6tAVeSu66aWQNkrqb",
  "key23": "4F87iuFRpizCfC7r1sxsBvFmHSoekiBAThvkzHwjZqKNKKMS1rhCSoLcAf9uEWHRiDLenhpeuVVVWhx455vRewG8",
  "key24": "2Ph6fjudDgbHbh6CT8YhjEVUeX1TMeiRz7ucYxYfRvfcmSf81HVhK9ucvjgEQZzSNPh25TxWE28U4KA8BYB68EBf",
  "key25": "YPwpYcvCaUBNUzLV3QJgDgCvHfQ7ni5HiZpMgFki8JbzApRL7k2n9EgS2HMWzaZDHdJinedU8vMg9ZAum2frn7R",
  "key26": "5C9XmKD7DLJKCGKrdKM1i9ukxfdv5a8tERYkV23eDDvHTTPaNWPN5fZQGW9wCSx7borsB64YzE5Fmgk7yeXPPG1V",
  "key27": "5yyPt9AQwscPtwYnoFzXXZ24AnamRibDEWUs3yZaFj9uYJDCBAaegWeE94KyHw2JaJVRNKDnbdqA8RWkZcj6hPKG",
  "key28": "qZhu8AYH19qANobgUfx6qz5xxaC1aAzgdkiKoyTgQ14QMADLpJd9wp8JQ2gdeT9QBjbYkRpARyuC2n4h8G5pzut",
  "key29": "3f3vLs8MWJ9UujdrqR7WCwF42LSEvTbXybB2HSNYbnRNtpJg1sEuXi67aYscP3dweBPACpukeJ75qkgAx7ER5MLK",
  "key30": "59RXUcGZYiHRUFZywif55SuNBosnMD4sPjAzYm9sbSp32buJ4WEdf2GbSxkJaBNKsoNMcRiDQB2p1JXZDXgqzQMY",
  "key31": "4n2HnVEfAxmStLgPLpkX3pZKx2RouF8Bk1MD3gxY9MbEQmufKF7CKqcpyLT1cniEMgkCem3nySFDjT98Sa1kTn7F",
  "key32": "2NLWrELGkzpKXHX2iQwUs7WAEwjJ3cykd3tu1qKUn3jeBu1QL5py4ZeF989fydMjKTbtWJhtQUm337N8GYP9vc9N",
  "key33": "2ypxcssy9LiEGQRHJ2cFN9etfwuoEr7gSiHvyY8HTMyiyYJv1ycgZzJXc11pjauQKwVnFrrUApNUAegvMsoGUKgc",
  "key34": "4jrPh6gKioTSyGH81VZq6K5rmLNPdBGH6dXDWwLPq98mx9b6A2mB4ZHnXrCo433T5DDQTKtixWwjCLAkxKoqadcV",
  "key35": "2vFzdqtBVYrNsw6ZzS2GUBhnhuHiNEaKmB7H7rxJ6bbqPVyrnPiX8zikkkKEcgzNsjtz9GhWcbf1Rhf4nBMA9Z4K",
  "key36": "boW4Gb21ttZZcgN9VcY4K45XGpXQTXYdTivhuD1ShtADsDHTybqRuf6M2svTok9rUSgpJrJfVgmEHDqqFuFVbcK",
  "key37": "4h39FoYhAXSQZdoLsWCVY3HtHHEx4K6jcrH185UHKP15WXskSASVdYk6nPSygLY57unT2Dfs6tFqU9nVqVPiMb6A",
  "key38": "4LrGhDUoGGyy1iXPKr7ctgfa5xCSCUxd2fprNKHbFsdWqYih2xCrwHVsZJHjQkziczXwMk1BVSMgPbcRsqVHqRpG",
  "key39": "5jVYtpQtop2U1rrXaXp3cKQ5VnFNrFJmGqwSXVSWDP24jPKZ2inR3W9byd4igAj9pntJezeDukvvEFgVaSxdJudn",
  "key40": "4LySzJpmNXRekzFcZve7SoefTSQ3yQapxjR6g9ktspTuUg1zYFSKKcmKp7hBSinpctvVk7fqovFVoeJEEZGF4J85",
  "key41": "3X57oAhSoBwAz6gMQA1GVTxDn4349Zuznoa9EfNV575Nzfnc6pZL8nv5aCuCp9FTcmDRph8mZVSuEJqHHSPbn27k",
  "key42": "3nCAkyjCqos4obFiok1h73WYab48qBGQUx7M9DXrjKaEaKyxq9pKCcQBArBj8brgUMCZkmKdKUnecRj3QVrDSf1g",
  "key43": "4g7y5yiVWY6oxsLmgUcfM9M6ggNNiby1m4zDM8VFpqDNDK59j5q1hSSvoGCtYUyobVipLXZm9fygLZzhAAF1w6a"
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
