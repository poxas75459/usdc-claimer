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
    "DGytDNiURprWSJZYKVHeyp1W3Fvomv6RSFbiqJHcG2GiQFsjM2kMFBFLk7L3jWvjjyCczLrSTpTmXyBLWGLX9cP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WEHGVZUrLASKSRme46Bqckc7fDjYoPfX1h9YzWYV6x8KR9iZrBfYa9PCNi2io8TpzqaMU7cDKsUMWGR9kfyx26F",
  "key1": "3awfcAVHiy1LRhTcxxHkhkdqy3Gm5ETfajESDnHt1dacZs57EGZeDnpNYPai3PXzNU7s8b38GVQCBzVkRBzB9Qfu",
  "key2": "2RYEoteZK5bLw7qRNZ794NqvLm5gxQc3H2bUhvMRUczQwDgZ8YQbz5RzLCibrtpLFySMuWHR5amvqYUNLg8haGV7",
  "key3": "46vjRQUYJ5N8C4UaM3Ha6ihH3RVWCrgm9ME5qDqcbn6UFr5BRds3mv8rR8KeZWQu2cEj3yqRqX7oB3cFgpqG9afL",
  "key4": "5VvxKjp9eWJy8v4ZQTGgAbyXnAuSSB29tC9BjeavwAY5rEG8fCQ4GYvx8kMLiHDKiUsV1nGyh2YpWngVdbmddnLZ",
  "key5": "5NUAm4uFUUbiMKXVetj5WdNEGWVnoY1mU5pTHaZ5bXUwhdBdhBr8ZNQzoRNcGiRVF3CgYeY8xgy34MTuLbvxi4vv",
  "key6": "vM5GoL4EMAewCW4Kj911P65o3RKQfvMFpGAYuDUkUNYezfsVjBTwPfPrg6LAJBJxQMSZzmWBgpEdfVP3vzn6SzY",
  "key7": "32reT3Yfii3nk8SszAHn5Xe6GuR1KzYkSS9C5bFKytih3xFsVmx7PtdfYExGPbMDW9Gzm4HcJJa4Q1p7ffxibwA3",
  "key8": "669HiMP9sPpdpdWVD9cV6y8JyNJBXwgvnragZZubKy6V3HiF34aEM2xe2wkrFKMZ9EfpDDZioPjwYVC9Y5sosdJe",
  "key9": "4NDCtjW9n9LWjpTq6AcBxBTQdoeMhh726fWKwFRUHdMjrXPPCkEcgFCEdCyZdcYkaN921UGRdNaLyZ4CwhwdWoYo",
  "key10": "63jVEcxYh2BbC4FzEH1bzJegowxLuXJhVtSEia5jRbuKuD8n2uaFBQ1tJY6RP3BxPMovyEjWNbV3UG2AKUkceHum",
  "key11": "5kda614wW9sV3A9TknNnJGRYvMzsKaSpN1iGfetf3bXGuLeemYxbfcGmhzHFuw497Ma8dtPAixKt6itVf51pvvyE",
  "key12": "DtH9tyXk83NnxBSYmdgsGQq1oXYMxJPxL3DpqG44gySYmjezQEVYiLAJ1Nk2HrsRbqibRkzTK31rNh68ftGDcjM",
  "key13": "51UdZKvDRbbcfWdXajGnfaPppPNMSvX4RYAWgtJXDxxj7jyQFL4TzuTMMGHtLiPpbUWzAVredMugngh6FWdoo5qq",
  "key14": "5K95R1DsSWehi2uUBSfvXyZe1Rk9g8N4efJCYvK8LhcAfmK3sj5hwr9Q7uSBTZLDE8Ua5Qs5fujBYsZxDbRnYriW",
  "key15": "5KY9ULBLgkA1ksp4Jafe1rSY4mu7dDeVacAZMEwbcCdLTn2PK7iKbgf4g56omCLVJ6c45G3WHutgB4gRZmEnanbn",
  "key16": "2eSUjYLDrzehsA84j8CPjjje2cjiQuFxLLXDVrN4VCoHUan1Ri8eCPA88LBTunxtwcS8nmajEuQou3xBiDecWje8",
  "key17": "3gSPqumsyvMZds5YnXcUccPocyJ4AvsqLZ8CyogXfkcho4cWfNMJYZX9tNvai2fZtc1CPQcjW7eiKHXJBXfvzYVg",
  "key18": "4kWZtVVc6jZvTTqS7iZ9aa1CEfu6f7BApN3S59n1RwvxdHtzpZWc88HXEGEe8cccLLMvz6GMBJwyUz1H4JMRC2Cd",
  "key19": "62L8ZfJLStzD3mmJfcpwqHb2y4oHEJUr1ANJZ1KQ54bfaaTMaa2DRbTgFajcMD93x1ypZgPdPCvtApaAumk8VYXh",
  "key20": "5GDLBsAgkcQYEYeXEHcTo1Piau21MtHdHRu9hhsG6XF8YpykHZHYQsyiQUU7KTape9Np41RUNu2FAVPYjRt9pdsB",
  "key21": "5UvaQjdpgoxo28GEp1Fv76inV2Mq1QEDpUx4q8uuDpfPujaVHSFssE2t277DMNeS74FcUuBGhWv57XoTp3dDi8zc",
  "key22": "2QGv8nqtff1aj4TA2djwwafZJHoCDxUgws7BByUGkrdyTsNjCbxwkUFewP9UCJp73RA2k32DW8k8wst98EqMyXjU",
  "key23": "3VYvwBmV1KemE1NNAWVWky7G3ryekKbxz19UNUSZEXyPBD2dsacpZsdib2JRajbBmBxFoPoRMUxrqPCwF98FR928",
  "key24": "4M4xyKYHSsy3CEE3LfYT4FqubjYSzg98WxxZsMYdTGNnipXB51nr8SKfLDQaZwGokXXx6CGwZnSBeJe8Z82NY3Qm",
  "key25": "eR4Z67Kh4RJ3jjsMKuhCkc233tWcSx3tLu6zKrDYgm6eBmMkEYx472yejgtvPeNKzekDqMbUfEn8y2mSGsyD1t8",
  "key26": "3T6gv7Uyx8dz8wq5Rwu5dxepGBc4rVrkMy2SxaGrCxrame4qrxDZJynKeQTJ6W4fqaX61KVdtr2HDFkgNYY91GHU",
  "key27": "G7cCNxv15dzSY9f6MzcbAEp3fUt2ukq7Q33Rds2TuuTxTkuu2HxMbQ22CuYkmQoizw2Mtxi15H3ZoepN2pBRyyD",
  "key28": "3fCQtX6eBXhpAgsDraCZ4udncUMpiU3qRNNnjEntFx4pMAR3vv2L1cmiJT6ZACKm75ARkdWnqGjcszFLHidYdbfQ",
  "key29": "4wa3K5LAi8kpYXgPfYUXTWtQhbnYgc7Doyohcekv8WxH3bsZ5iE4ifojzPQw7X8v1ZTkwsuXZBaZqAR2g2rSLLVC",
  "key30": "2gNzb6akoJqmsURZHdwWPiScaAW2xVELYVSa6TB9mq6BWwYsF39sWL4DX4AVBdJ11pRFmLA6dPApwRPKZjE8cchf",
  "key31": "3oXQ7sj9NHRi18QyU5xaXGUCKa9fBD9sip6XgTiqX2feu73AtPwWLfkpWa7vgEeNwpC7VEcTCnPzQqyDKbxSDgPq",
  "key32": "3hWMhubK4sh193KP4VJodhNMzf83A3pHap2E9pHcPVuEnXYgyMkbtFqXWdwE4G1HpNrXjMHJxf1ZEYZx4gfyaxcr",
  "key33": "4XEbb1MMYTc37Jc59gesLE1RbiYeu8Qg2aXz96p4hYs8sdVa4Pdpi5tokhDRNTtTvN4SYRgfvxLvqzQgo9Uw4bwi",
  "key34": "3m83gDEyxQyk9BQXkk5Gf3utB2wKqB1MdREDzuU3BdFmARZDB6JeuYA2TRtLdajaRwpgjzMBQgu5CBcc2MARBja8",
  "key35": "2kj7ZERvCziKmTpvsd5B9HTgU4SoWiEsWbGFnzjMHNpdEGjZfYMxUgUDMkpmokce2krqsuZWYaT9Yrksb2tjXsNP",
  "key36": "4Td9YDUAzNdG9thqfJRnNZeZ1eqQFqvjmhxjnt4u4ACVsLzaEhhpbUJMsocjTTu1xkf6BjwqFAqX9dP1Kdnm1vZn",
  "key37": "58X7Wr65BzgubsXPnQeVuDoPmaPDLoyQMgZ4wCcixoQVJn3sNsZ9tGktEF5EhDFAVwL2JJpx4c7LxSYjrkrZi5k2",
  "key38": "5z12ZJNkmyNjh3iuBfPviVvsd95zDh7gRXUnXZSLnM2M9Fs2U8Jveh1PGSZZ3JfRxwnxhpJNemeekNwBfvuzcmTk",
  "key39": "23VAsz1KD1EUmTg86How8EuDGJdbyYCGA6K39Z3NWQ87wG2zV5U3nHd6L6NF4Z8u8g62tZuai61NBb7x6rAJeYZC",
  "key40": "obzjGUMqJFcgaQthMHfS5Zcke3Ao9fK75gBsrjbx69T8VmRjapvApFKEmBPuJLbdeoM1WCutRMRJ6JjAJXQUomb",
  "key41": "EJtiWZ9LSqunDH46itufdNrPowYPpEZ1gReiaA96RMC4uTEjxLpLL8adLbATSZvoZCNTi9DnLkPnFdPSUrGq1SC",
  "key42": "2QhRDmH1vkgmziQSLgcdp57oHBkAoEFdgjbwuAZkecxt82kQeBjxNgsbrcbpQ7RrJu6a1Ziywbu1x5tJoz7rrfV8",
  "key43": "58C9AbmkJE3DwVJaLdepQ9FDwz4TteCkF6nBhsoLwzDwyGwM4nQkGM9janDVBjfSSk6FqcTL1C6sgVwfyNKZmuWx",
  "key44": "2ZvVND6rYzAY2pwKbMwsUTTMRh4JLuwTU7aF1qqqEWLXVhAsDXSZYcaCwUteHZEJtvQ9uec94ySxVEdXntCZ7XT5",
  "key45": "3P4xQhvF99MQUm4dZovMZhrtS5K1TKFi3L8jKfzpgnLYUATpNQ4ULGfNSSBUyvstz1PLFgoyyfVuj38ziGEMw5fd",
  "key46": "4KPZshH9dDEv6zG2rXUsPLLUAPkUDAnBREr9JM5CiQBiYmeThVNM1RNTwmQyHN2sqxjBNtKt5i2agbdedNspLC6G"
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
