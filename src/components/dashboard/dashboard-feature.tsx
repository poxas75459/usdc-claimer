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
    "VfbMkAaASQ1VfVNtGGD2nUuMTRt2P6jyXA5b6XJDroNcMqAd9v8YJm6bDt8WiVndzdsoNaaT2Xwhp6g9CmeZYYy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z7i3ib8XGEybyJF8Nvrpx31UebRAv9crVBtBEkiPFnykkJTCgCAGduCtz5AYaBzPbKUucAZF8eXTdoUE9HAQgTQ",
  "key1": "2kySPsdgiUbBYKiiusXKuDVmUmVWxswBL8L9J3sGyFCZ7iB9zt3V7nwZbf71MWgLrbe33F5GaiCZKgedKwx22fcq",
  "key2": "D12CtD9EPTUVV8V5ZRWpDeZANF6N3Do5abrXTrLiQZgcBYUsEciGm1ZFzJixHG6ozvvsG9AKxWevgP2vV9yZoVs",
  "key3": "5pKH5tGHYYk2X93YKsHW2R2VDfscscYtr3sWaWChnX6szUVmsTsgNhHCsEV2hS8pwt3Z5bQt3MR2HdeRNPD5L9P5",
  "key4": "29Jy7iEQJyMWxe6GUHNH61B2uDTCWTNa8cWzBzJ4qEPVSBTe1ijbNyhTD3Uzzx5Pf2BqyZPe9mo87eWDcorC9NSH",
  "key5": "41xv1DGyG5dDjCfcoM321u3EAcxitghhvGQyCBjxwq3xQaJ1xM3eqrrfGRs5H9yxQYAa7HTtoAnpJUgGNqxk9XDn",
  "key6": "4gBpxWM2c1KfP8HgiHVuovXpDyddim6p7edJJHouiRUidYhEbtSRCpEFZmxWjJ7G7zu85uqxS4eSdhxjncVzGs2u",
  "key7": "5QuSsmwwNR9vprsTW8knruxyZdFpcvDQDFXZ4Cxcpf9BZPD7uy4FAyZ3uW2wpqmmCexNXbcxMdcMVkKaRwZeu3xK",
  "key8": "b7PrWVryoGNAAvA5gKUaCoce9NgfBxNaoGx6aVfgBVFs1DaHQW7WdWbnCEwUuW4Ey6oG7SvAgm2vKGy2KMwHA9e",
  "key9": "5PDxYPuzHZgrB3iLZJk39RKAy9xYCSW2WQKPzkdzvLKifLyhCAimvZz4DZdwmSeJpGrAuk3YK25FTPtihpSPfaqn",
  "key10": "4ywJUzjYQx8hsjBCtEpabLC54sB8WyTW2ZCKHNn2hF4K4mec5Zb7L9LKyqHF8WtDLpPGCoS4JL47gjSPjhGxNBXK",
  "key11": "64e4t6kJ89BSYoQCfMzToQdnZRef1brTBERKftAq1wGFu7gR12RWAxY4PmYSCWSHUNBFWyV5x6ASKbk54UgAVQ9M",
  "key12": "5ySD9oUxtyj34Go6j83BNrFtG3bPzRE4JSke4iP7vEthfDdeFJ8c6mdZMLM3Cz3r1Bo2Puv6mVReRaJmczpeqeMd",
  "key13": "7GysuybGYPswpDeCAayNKvqM5ZC81Hb6z59nKviTFXGKfghCLAnoW8XP3F5Q4Hei4GWTF7mAc6zW7GUtDeYTcDt",
  "key14": "2eJv8SbpoLSredEs6FLPvByJ83F9WRsaJAeg9XPyr3MM1tsWZEqmLBUB9crETAWjcDFoYHZRtroEWtJaFi6dT7Vg",
  "key15": "27X2JBfJAPsEjoa4jWkF8XDrxFVhnsnTJ5tBm5qrHrv9veBQccfwGprvQ7YyBmcSGu9CAtmKUbu47FJiJubTpAt1",
  "key16": "5hUDh3qPtCJ7S6RpAhZuzfUHWKGYfsdyF5C6DwJgjixKSU5f8ut2Nsvoct6kfeRFwo3H1fMQTGucSCh7JN6GQ3yP",
  "key17": "514SKT7gX1kvjmCpF7TPi914idXRJkmxPj8ZDsukB4xsD1sDwkCx22r7TDBwy2HeSH1CedNHWW6zNgRqs5jNvaS8",
  "key18": "4n8LQKhN3VP4Tf1oQBDwbv2vr2N2Cjdm7uVJbYp5ZdFs2pwDTpakGxtiQEAvRFAteDKn6FwRARKw5f1Y916TK2Wg",
  "key19": "SxGJ86C4ZUPU2vZ4NWQLv3GwyTB4cjL2YCswUdK5CCPtVh7qejGUdCxa95e5wVsK735ApXevHAhBWxSMx4BCzvU",
  "key20": "2vptZLy3H3BQuLe9dEoa72WniFnkT4t5JhH8asyKdVfaY2EBH35H4NqaMMUfwqH4fLZVK2cP6EwLp1WVKRbtV937",
  "key21": "w2M6VC7iaMZ7udvWTSmyzWBPtB9YGb9PnAqhWZf2viRMXvEvgWQ5tJqFdZDbL8Bk3LYofqD3hGBp3MSHge1RrAo",
  "key22": "4J3qB1Zhj7xXTbsWBv1Y5wjHUqCLNZwusBpRMkPscJdzwNg8mqA5c9Ldqnsk9TcmQuAmZPr1o4cFJvnpKNV3UPt1",
  "key23": "GWHM3HcppNdeV6agwTMGsHSGYjbtvkk5v695G9zDYn2qUv5vX8gAWQMvjWhfdsuMTBbGhwEakokYbDccfL895hf",
  "key24": "3nnZvdoehcUgcsba4KeCh7YCpVGdL7b3cqfPbGchJYgA67Xi8ULhA439RJmmqUQVRGYGZkRdwSH7Pdjqmf5Z1mEq",
  "key25": "4jjrCRpbnuiga8UW9LzpuqTXpaZJM5L4bBDTgeWDT9GjHyttBR8PqhzH74tCMLMdwyMLcGGjkPZu15TKEmsXGW9s",
  "key26": "5iLuXoZWfod7J9Nv8sDqdsAL46ZfxLLJYTEQCJVxgXtJ3hRxwRgBKFXnKcVt4iRGMU8snG8F5sUHgwVNPpuxAtrv",
  "key27": "2fPjsWjoKfB3hxW6paNxvJJrwu3mFrUqZzByE8WSzNrUnPJ4jLHRkPqDAhxUwoymGmgHwDjERci519yXEPo5FaDd",
  "key28": "5x79QhrS9nJxwPogCvNzZGUfrk4d8pkkrnt4YK2cztTgNF4SL8JQH4jfW7XbggnASLREKvDLCsAEopk2rkPpgaZy",
  "key29": "3CdCQm9Y16opmc97sqyTGbEmxzZGMB6NciH5TPnmD5pyy9nkyxWgHbua1jVBvC2jcAWu4Rcx1d9XKPqbBTd8uLRt",
  "key30": "3QXJ4vdgUE9zsU1RxaGpgcfssmZAKZTVMDTRpJXmcy7amkqzmMpNbrZCeRXUDLDDZC2JcLtKP5cEgbDoLQakxgyq",
  "key31": "43wFv8x5DCa65trzx1d8Rsqw1LfPibZsYZRdJ4g9jHkAjmtseVs7FwrBm6wdYBQ7GReNwB23Aie4ny32LMw3vuHo",
  "key32": "5o3tRgCszLZt8o85PgELVScmAMss85RrF51QjLQs67jw7Xs7RaFCtPgYoMZhyHKxY2pFnA2gnYhiDYAUSxru4ve6",
  "key33": "23C7SpxKjMJw592aZL2bPbLV4rKXFRVZR35SEc3acsoxtZT3LpLxCYGjJ6E3KEcPaUuGGEg9vreBuTTtptgE4BMY",
  "key34": "5PHLd9YJnAiQMWjeuHtjqSLN9VR3Cw4rauDPYqD7MSXCfmPTQHwGcr4rE8UHDrzrhL568RivCkCfp4Re3weDuYY6",
  "key35": "iFwddyDd3FqPcNXbbPeYNXmu66GkW3NyeheXCjyXso5hfZB7UJ4imFnNTZXsWL2U9ZkPyxfBdXzqjucSppVqyqf",
  "key36": "oJJxmGRwgbnLJD4NJ7WkASsSuYXUJpmNKvmLmh6sQ9G67UtLVVKmY1R8MrfJATNaH5m73Dko8afBqGXHyfoDxTY",
  "key37": "2hnuF3MeWhB77DW5zjyBPj9J2bDhL7kkzH3HEvJkBeCuappLJ3gLkWFGwAa5zczQDHz6awX5HiPFgV1dBfNoHvbD",
  "key38": "3mrKtABkm2R7tfNuksAxvPknWxdiNiYYCfxpSMgAixPRbGTqT642rRUgp5kDqMaRsWcJGTyTUh5CuLmscfRJXdbV",
  "key39": "5S1Y5rzMFhjY1UuACmsGyWsV3tu32mLJBvVqER37NC2KkvDyQLysYtqEQbd1XeLBQJ883wCvhN9B6fbEE8XSyZbA",
  "key40": "2gbxPereuxw7BdwcUGDFvotCYLoSRbqaZCmLaSKYKuTCzBcMz3n8sUTsLWhsXwLyNRksBmJCr4pj4Vqw4Ku1GQGP",
  "key41": "5gCKoi2iGVzhPDvPaKXyWBoUhXFPg26n4dYwLuFmDHXiweEyvUbuAXXsce3zmzCeVxA19jkRCuhqEqYtHKFiXwvD",
  "key42": "3wQ7JdevaG2WpQm21AyM5zHYp3CcK6ao6URbihb9nAVR11t8g8oqUMjE6vYN3ZgnkqmHpcwyyitD9f9GW1JEqW1o",
  "key43": "PPCgzSCBjRyh51F1kCWgg1B1wXRuWZNBLdjpDYFkeks7LHFKEyek3KAGD5GHvVi6722Srb9P2A8V5F9EbguNkaT",
  "key44": "5oUnG2UWobXodQgWmjnwP5q5PbAA71AEnAMwp4dLYSq2DU4mNJD6KLjhYPbCFktYB2542PXe2YhHywtKk3rdXsoz",
  "key45": "3ddVSVVrwYBCcHFA8HdwEUpabK8VdT3QsvQBPjhpwcP6BWZCMS7RuBG8TP9GPNvdWfizkQkVymZFE62Ld6PLuwiY",
  "key46": "2BdmnN3cy9jPyx8Rgd7AiFo1xHZYuDtVAszsGf7AoWcdaTWKLibZb6D3mNofFzEwnQfjJg4kfGKH1aCfVSpwkj1V",
  "key47": "2CD4B4arVimNDJuYDHiGEJ5HYzXSW2pyK2wXSaVYrWRhmfS5UuaJio5ET7g3QmNsshCXsKnq5usrbqanvAmvQrSq"
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
