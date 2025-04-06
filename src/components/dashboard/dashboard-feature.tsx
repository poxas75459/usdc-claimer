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
    "bygg18zX1aeNVHu99d3A7QfkvrhXLAVzmUYcAT7KoSSALmJbSCVXqYYG5xAwJp7G8kdnViTSoqfWtGcAoFUbcvr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jL2CeMHa5HhTvPk7sP3Y1CuF7iWUdYWofZkdExy6PbApYKBkKC3wFfBQEc9ahqWoebc4bHyTGMPQJTLbWSQaMqm",
  "key1": "47xFFQzrCFJv9GAea7zUDuXJmUXEx5BpPZZNp9hW3rHYAVoNozHLPNHyW2yD9j58XzeuAsZ47Rb358EZjEt9DFqj",
  "key2": "56FAL1vU3MzZqcb5vZ6v9W76ghipm4kuV7PkKv7qUeqDWMtFeCgHG1SwtrEdHKqWwG16d7nfSGyB7btbX7rhKT9X",
  "key3": "2qADkCaHmokC76jgY6SYakXb4VZvgjXAXFd2MVMYCvoDEkDBG1hC9bkDg9qaCQXNJVCHK92Qi8CXgdptder9MKnB",
  "key4": "61sT5xHydUJTs6HWQMV2F8hqpMG4U4TULdDkzXK2UVAqiZBCburn2V2PByzRZ1z27EXDSyaCPiXbTsdxHq5k643h",
  "key5": "2n6Jrj3AERnKtEFCJt2LaSYz7SkQAwVPCz3RmFibrDQp7txe1a5nvHT8zBG9NkRH2V9w9mMbm2QxbGAcqDMWhLYR",
  "key6": "4ZBa3E4jXE8iTWBsJ5HdNyaoUS1xKT3rA9cofB5mSD3uXAVYNXoCGd6Xn2RqdKofSSz3pdvjeyECxzk3WKeubVHK",
  "key7": "4CuzgeBkQmhUmeJkyjjCzjXAXEMnE49yza9i1uc8zEC7yRMH6AvSX5Rg2S9W6SHz3t2Dkc5sJj2JV8N6oQ8qyQn1",
  "key8": "5KmFFcBTi1qFV8H4kSpeiYiJbpfgnsLaoxuJz11FtE5mQVerQ6eYBeiJABoyFt1odUDCgVJxP9ArDX6NdyBdV4To",
  "key9": "2ZvE1EDreWALjR5DimPLfMhiSMKCcVRDBLVWHTNC5TP7ckQ9nctnHDmJpcuPtk2iFqSfvJsewe3UJAuhjMxr18tA",
  "key10": "x7kf2rvkbzMhGg6PnwsRNCDDpxttvAARL95ZmCa2dxs6Wb3bZi8pS8PQFpvgddmPtU2CvWY6CMBNynUborpp9Ua",
  "key11": "3gKif6kdL3TBGNBaMc92CrpYnCwvJ5wcZdA33HW5RjQUeJdP6XPX1MyRCKhJmXHXCETgznEt8AzLVws17t9DDukH",
  "key12": "3rjVTzNv1iHk36f8JAy9hTL2y5CU5iHfbdBTFf1ZGdKzQF81CBJPRLKjBCDRB2pASSvxVDjvZiDMdfVVvPQz4jye",
  "key13": "2rp5q6HF9Dzrywzpj7bs73TYRvSU13jtmYtZwQUsMPr8wg7qK7e5L7a89gCS4bHyXGX4VB6pGmKfsFHjCZpfiUQ9",
  "key14": "2NWZSjMMctWLGnwqxAWJDGt6nSbosNDD1dUegWACqeUDp1yH4ewT9mqZB1RH913GJjEQxDpPG6deXygXYH93nzWv",
  "key15": "Gyh9MhQ9EW9D2YY9WSpGD1YavLmSKFkTNF7f1iPqxmAAEm2uwHMq9PyAkBAuwmwP7P95zSMfVZwmwLmbftMjvJz",
  "key16": "62B84iZeP371UjrC98V4KZ7ayCBBSKEYRRpiaBMZeP96zQet7vT4mkvPntnD4BJEegiH3rWZS8gkuRKKGkGsovc4",
  "key17": "4TC7H7McHjEvn1Wk3QCtp8cVZhrrCrnrh6WxhtGfzr3ictc8oNT1uwDngzSGBhQU6qzXENecve82q9jTniRDKUiA",
  "key18": "3PEJkX6EntNNqiibPaEzf3XHzH6ntwyuS1WqkXr4yzf95bjcQUHSFJ2EadrCNARS2jZVs7GemEaaDsMbE7ViqpPw",
  "key19": "2AAhJWhDomisEn3sXVPpgurNxwDzBaq7rUJ1yzvwmUwoughskefzKBWhV4gb1gXrdYaBBkeRSEAmct4xuaA5zovQ",
  "key20": "3aLfyxNYchfuReDeqJU56kFaTG7xbjyh4XaAZbRwLimrSzdb96DRG2txuuSr8sNBh7B2x36fRCXMHBn94Spcrp18",
  "key21": "4EtFGyfUQoHnJbS5bgJzYa6V9wtTt15B8GNUpWjTzrzywv8xUUo56Baxpzac8W8goUet6esMzD8n9U51z98h9xYZ",
  "key22": "24dBLLHQQa5vU7vNUYM6RXCprngnyErGLZq4AdjeU3dL6HLJcAHo4ucrg4zeSDaKur9ZoTAMuZTL36ssMZsDxZSZ",
  "key23": "3YCFiVrfTx6oWRn6fLTWejCR7pSgzEn59ixpAhiDkX8zpyFmCGahcmT2G8BDjp247Xb2osfBEpyCovzDZ8TdPcSa",
  "key24": "3CbGCi6iqtNjUr5owhwpyUhaEkVFLzYVDH8ssqByMv8VjBmA7wkC3hy9v8Xoqyj6a2y7rQWp9fGN9CfuDyWpSYyn",
  "key25": "3UbtC1dgMiqY9DJ6ijy1oYTxiLraQvd4mfHoSrKGRpLY8yzLpAexywSJWvxseFXoEFVtFR9eWvNgxhvDc8x8v4d1",
  "key26": "dS45xCi8oiikwPgJbeHyAuXRiyeicrua7fL4bedr2To4sGcd7zkXw1Grk8BWHkQXtSWorVoq8AgSgECh8tpN9p3",
  "key27": "4wxwQMyEB1XFxqDrj6pwapzNahX1JYQFjUJE7PCd8W7xKW59HvDVXN5vErouVh9FQCnyoXaKznbHsHwoJmJeRuKJ",
  "key28": "2T3bg7KJZuWBGSLfewegh87KJP17FPZ5n96p9GQoTu7UB2wkFVV4BQvntvoRFsULzRFcVvjqwoNZ4Wvo3ChWWTq4",
  "key29": "22x5iGBkXhU954dpCJJiv5MNYCbn93tUthWHaqHvkBL8E64PjiuTnS5vpsGFjVwxzX2Bzr4DgSi8AukLLbAMRX8f",
  "key30": "5reHBYsCEsx5kxD66eAVjFnAgZ6uKxTnmqFbZPxEjxBffqycCweds3n2kXgcenasrZuL9RqYZYCswKcJkqXQE6vV",
  "key31": "HxqHNn68ZT5QJ4XBAF9pB6otct5cZmFZrJjzFMFnbWsEALzyKnQVVQtc7kpUTvTKtBAMbHdHjfobE6DZPs4wUsp",
  "key32": "ehxZtiyiRzj2GokodmT6BATk55HkbxVAxqJgyVFmrbDomH6yVWvcvvX3ynB5YxQMwe5VXS8NyPGcpqqsg7DkV5m",
  "key33": "EcTBAMC47HRwzr4wcfh7zqmBLsARBMMkZXvS8hNXCEmKYiWiiJst7ushyDsLsBh6Bzzjm92QcrCb5FjEzDmito6",
  "key34": "4s1HAVMjUNnovUpbSEACsaik7BKV4SwC5SY32kFa7xz2eQNjmvK7aQyXi3d9NsaZ3xmgAXvGm27A5spx2MRs7Mzf",
  "key35": "3SNZXaP2ATBVyuCoYcp9AWE3WFjPWtdAJCZ1j6ysd6Yk1oy84V1FxtNk5D1MEdpJYtQAVYRqrWrxozRCeDXvKs3J",
  "key36": "2uY4QBMBtbxNYkwJtfFvRGEVQmMDdRq4HZsnz3TJVH1ZFq5QSLxx2Jwz7F162ZAG7jvcnpkP4hQKsv2y7XpNGNbf",
  "key37": "48h6rAy2QcmnnJcUHFouCqeT76qtzV2tJEpcUKRTKq4YCJwtu5FrfDztwfGk8uBSQ7zH6pKa15E14jSLDorqrsoq",
  "key38": "5wMsTt4q2EnryuW9tFD4AvQwmaA6Be32AXP41xPsnwB6fXMwvVxnjVeNhVoh5MnkhzF12rs7ZLvfMfxJddeSrAHZ",
  "key39": "2qq8UYk5PankvMqbU67Xbye5BmeP2oNiVmYeTTn9S3f78WJoLNLe25ss5EDtBHvq6LGeGegwTfmsT5CpGCwk9Wd9",
  "key40": "5YDipqWSGMXBLYQYgU21Z5iUmpxAoVRynYWVATbTvqhrhHuHPDJKgaRnYkTTidzArw2GQbWvQBLjSE2M6VVwKL8Y",
  "key41": "3nB5bXATZS8prYxUBRVbmpNbJCdPVnJ6CBh78RYjtArtS3xNRFPSnw3SDYdYHgAUzR1B3cN5qaKo3D42DrK3uRPR",
  "key42": "2xBHhao5ZqKem9UZbcSujZ3xoPDaHVu3rP8qnWFXhVqqnxeg2WzsydW9P3UJXMt5jRH5fdK77bTuk8KvrTzZgYzu",
  "key43": "3ozHrTmGUiNrHEQs5ToXGS22JmD9bV9TSqcJhtW4HxzQdjqEJKu3ZmBRT6cAzcGDoiG7VTpuqkQXZqJdGDTEfNA5",
  "key44": "eLXH2NBwb2agQxjJyHwAYouhhe2hhZZyJKLE78o4nqoFgaCaYVEqdJPfgU8u5KX4Txw8fttcwdmj5QcFrsAev8n"
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
