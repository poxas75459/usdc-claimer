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
    "2PpvDNiTnMUvNwuDDgRDijwZtgF1gGCtV76qANUxVnGXanUmE6uviU2gVduPZMfDVbYtN2J8Z9fzwNSaySX5ehT6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HbPV8V2kHEpVmGecLJFRXtEzbEx9na3CueTtLUC7dkcTfWmbvnz5NsYv8UND4d6yXBnd5wBzhFpyEJcCQdsPnpE",
  "key1": "251iMyaoZK2Y5eYBNU5eqbGVFY7EBe3FsRne7kk3N3oYuwHUXkhuSktEVthF8WCjFwGkTGRRGdPAEnXCfZL1YcZf",
  "key2": "k9ANosjNhiCRm5gyn4R4zXuSydbUxxX6dBX9Jo16jFpjM77iXJxwYATFCY2bWSfZqBCYXjCx5dC7FBbB9EpAwsx",
  "key3": "3LfARbuo6j1iqvfxUWWVx7dv5aLxgkKnKohGoaE4kPUF2npZd4Etm4ugVPsLz2w5b92S1eoa2TYmsQLysxezpJLW",
  "key4": "82ipHtw1vYs1DXqLCfzC1ZgnVRsZZPjFsxa5LspX5HkrmdzEhetVQA3SU9aLoa3sLN9mKSijpGNGqUq47BMPtY2",
  "key5": "3XSJnJZTb6zyTk5yrr8Tc37RtYBTczuxiB8resJ7EwnCfLonLhoEZ5URft5DkniThoLVDVBXagUaGA7cuRpBKERW",
  "key6": "4ZRaGMMV4TH6oKEr8BuuA5QkYdghK9DuxukpTxzBdbuMooLrSjbYBke4WnFBpDh4LDCCKcVzpmZSHHsVbGb5YF2Z",
  "key7": "5nXmqrbxfyPxQs7u8TXeXTnPdEV21rEjqr8JhBHpw8zu86vFyTR32QE4qvHYMgeYLZReoPNkTtutPRw5X9uqTbCb",
  "key8": "65cdDkDJ3intbYSP6E85BtvhAWPUMpr8tSdwsMxDEFcoTVXBdqYZirqqGmkuiCrnLCSTQ2tLSddDd5sVEdUdUz2a",
  "key9": "4A3ah79796kBcDBHXz5ZVrVm2ipYoabHPSJMBWchTA8nE4Jk67pFZWiMZ4VHbcfDFPyEEuDZQEzFZLDqZjjVAbTK",
  "key10": "tSTvstfL3AsW7NPPEd2fHDkh89VVk6P2mRzjPbqvp4HKbBon8hmMJwWM1ydptiqX4V6vXF2Vadzbov82zks529J",
  "key11": "4tWhZZSZwG7m82aSrbSpcym9Biq2DznHQUZ3SiFsKhba6Te6VnoLQMuW95Cb7gShi1Cjx3m7AfnNGFHmnKmyFxZh",
  "key12": "4PQweTy8ciGhZnFsqVgVf3zARdYJWkXMvKACfcnrPzUStj1AxMja3uAhnTfXE3VtBDiBLd4JCvgU3CquELX7mpUp",
  "key13": "3LJ6BWXWR5xV2J5DJ8fnYdH21rsThvpYEG825xeK1fVXVBGBFcEMBMyyYo5ecPrc6Zi31XZpjUwRy7Tt5pBSUQoM",
  "key14": "2xBjhmnctXhuZJwuc6QUwNx6V2cq6FyLpDzYrrwBgpcH2sRw8tx9PVtnoza4hjW6prKtu5vQf6xvywdLurwEP6Nn",
  "key15": "5HZ5SBw9nMb13DahgPGhzp6VDLFDCc1CLXnUQe1LzkfTNMrUY93rJPWAEQdeZe6HJJqspsu9En23jMkqZbAqBVqz",
  "key16": "5rMqf1o8tBsoiskN4611n1KC8dGe9fE45r9wZQuRXTvVeiX71aJ4KLEFUvGfi2qYzJLWVSgy4ASvLjpjWXzwvLdU",
  "key17": "4RFwEmjb6jfZdMTJbfCC148nqS82xsU8dn7s7zRRsX7PFMvEQfqcZ7xNa2zwqi3pSvNx9Z9wf4ds5u4oaPzmZ1dZ",
  "key18": "TVjGnbhgzASmpZ6gf1yp8tzBMvUoHUVVPZWUNba7VGmPuxJV4sqb3k2vAqj7nSNq7aMZ98mtCdwTWJ5RPnyYGf5",
  "key19": "3hkufU5SMgVZMx7C9xobEkVjTGitVee4GsYHF3EGf4Ug8nC8484XdYXWLgUQ2JqpbWpiQFTgzNtbvCBYeFJsJUsv",
  "key20": "2DAhCHBSJVbqrYAWHjjJpJZB8DGFqMJfGm7bMqLKfMEuWugASY8c6SLpz63asrK1icTUUURkTsQWEg77aYxe9kpu",
  "key21": "CgJy48KXznpLbEJUzec5TAeGRfGfstEkkKs3DS9u8UVfEBjrYNWPX3GYcudEKmutYBYDD5ZRDLvy3bHh1bAeYoB",
  "key22": "5WDh3ySEz2TbSbfGQ9f4tbWmKd55EZHdfd2Fp6pPwsQzYJi1d2aBXzrSQ965JQFCV2MoRhsbtGspqCEZFMdXkKa6",
  "key23": "5q3i1MSwzpwmATk3hrAM4yXp5ykPSRPvTpsG8qrM2UeLJmSkELTsBis5djAptrpjQGBnAFgME1tRHNciVA2aNi3s",
  "key24": "5ELdzXausDqGSrM2eQ6DF6sGYvpATVRR1GM9fXtyD8cw4pisfVBDn2QtMiYZ6aog2QjETA74VFNtqSrPwW5vkdCt",
  "key25": "5uxieebfMoRKvBXoDT1rp47astQd9S8VWH9XL5TbmfCbSEwdwKV6qURuV11vH5TzQtx6hoNQVGvctPzi9WBc44bD",
  "key26": "5qJGHR78UQNWG82Z1Mghwpwar3JiA9mQCmd2ADUYsXFBKRGUmrWvE6MQqV7j9a2qHss2ERrjt4jBKY5YvgDYmWKm",
  "key27": "2wpFYdYAQF8CiJySqdnrEFvbdcwvY8D5SunuooAeH1PGHnpnnLuT1o5ugBXBw2jKFT4rGoywrAmw2c9mABmF3MbC",
  "key28": "4zyKZ56BiyscRXqFzPyiu5Z9SJBDBNZY23pkSKJRNFtzV76Cn88gchpxNXgD9kYP86mdBagSUDMzAsEgGr9pUVVb",
  "key29": "2sALmocz29LU5p2rnJKErzmq68nAMqymD9G16cMsNTJcsdm2a3AeZW3KPwz84q2myhjQTgjk7L9QmWJ2cPx1MxVZ",
  "key30": "4J8sM5AqfiQuNDYAK16Ks1zwGHWmFwegiMzr3bLR2u16JCd3rpy83LjJs124PayBZu5KDmFVqNS6SwozmUn6diJ3",
  "key31": "2joW9Xh4iCmUra7oJug1o5rFK5uAnM6pghLVNamgwQuNL4zFFspRKYmosLcFD1AWAQjktb1MimKJ7AcMEWCjcBZb",
  "key32": "3Ad1Vgoq5spgFSCzA3YJZTSeU54v7byCkK4WhtqG5RomHffDe2EyK99AUqjHoRsPeRqgr4SDqmHjPDGhPzuDC8Zo",
  "key33": "4jVsraHhuGvS811EEkpaKGDa8tx6js2h7ps1W6LuopARDgfmFKZuZav2DWnda3g9kKpQNFz9LBEDosyLV6DYrHFJ",
  "key34": "3vbxtoTXTtrFydHcpymAvZjWwEcjpvrjPMuwFG4hkae1iHitz6JUMBwyBhLX5CSEzamVzj7QShbT58c9v7HK9PCF",
  "key35": "4rCFF6hXmSmuvdo2QyoyPiN9AC4wBGTo9BRtZcvEpKjzBp9CLNDUkzeAMYZErD3dj8qkaE4ifDqM3GiAbHjPEdmq",
  "key36": "2X8UpTwA8e2YBYbLXthPkfvUkzDQKtGKchcDarDWcPTLH1NgGCXfuywni4BVH8tzHw3fssHLZF1K1W6fBw5XweQv",
  "key37": "63f61eX5DvfW9YAFtDurui4n6DMMGU4bhwmP5dGHN9ZXQW5Huv9mYHxWad6a7uSPoG5qnghBW4q6v5p2JdZHqT1E",
  "key38": "fMykkJioNh7X5pqndho296Jqb4KhaKmTmKsX4mmcWMBZPpoNkRqWgReHqP26YpyRoQ8ByV1Yrq8dJH4TMDJ81Rt",
  "key39": "3UeFFfREhEmPSTuVBB6kX6puyvafmpDsqw2SdxnqouUBjvheYoUVexCXjetMeVwdHdLXbRuqswoUoDzwiZUr1GzX",
  "key40": "2U2cQrFppdztHWyLWn8tYzDYfzAcUjSFkitp9Pcs4UeiQt4affPkKCdXCmRYmCBb7qUuWuxtet7RhgFJwzPoYnSK",
  "key41": "x8uG3r2KsvFHfaEfGdDMJUo86zq6qoznm2XxKNgWe4gXpSSdPyxeqTNMHFN5p2HsAe9UaQEpFv31brmxDod3gLN",
  "key42": "4nPwbfKLtmGZJEma1XG1zMU4ThXHvMM83GivJxrW7mcKumnb3SYuEq777d8Dup8T9EG1G3uHymwVZ4qZSrVqjHxX",
  "key43": "2jEK23srHqq9evig1yGCk1sR8sPXzYaxi3hpayz6GrVB5GTiR3opWnmNXxZeaLWrsYnZ8zY9wyJPF3T6k2YcyiZ8",
  "key44": "CXipdWw139wKCRGjbTMj3fGg7GSYy73xn2XqvUNRLkKNdMGwEPX1tbWFZDuDzysKT2NGHKir2KonVHNgD2uUEDJ",
  "key45": "4gJEW4smfBqnexK8Jn2JY6FoSSLDbh16pDw7qUVu26xU6XbNssWVEdkS8SYY1Ny3673SxGhAc7uzaJULHmtQ62VB",
  "key46": "SjNpvdws49ogskV8HrTgJAaPiSsmRUJYhVDXFRVP68TruGAQAW5fKdMQHnKZLEicMBktBtDoWNecAtGevGomfgG"
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
