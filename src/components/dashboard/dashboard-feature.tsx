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
    "o6bKSUCdLE55mn6HqgmYPCSt85GtW2sVFbzznnTDfZicmjyPewc4PhnypqivH7A3FsBqXQ3cPesDqkkZNXeM4J2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MaMoZ7EdcRjwhngot5XkxNxHDMWjmFtH7ugr1uZA7jgrhRw5wgKAHbjtDwks38VVZNQbekmQEzfanAwbsJPUKjS",
  "key1": "8mMC4SpLK7qD8Gju9Cg15WGs3ujZfiQgFBzaeqxF2ux4Yw73gqP7m27SgRMJ2yn5GCZbXTZHGBF65oNsSyPcYjn",
  "key2": "3Cv6ZPEkaX3ewG8TGgYiRvoHo8s1zci7HyRGPGJavSE3H2nC56MymbuBxKMRHuYuDLRApv9avRwC2oj6rQVN6sP9",
  "key3": "4swfamrgsjBEogaveVGw6tUbpbRCJaekxmM6aAWmeviJzLbX2znbaAPFzFbb1idsCYAPjQfxMRRypYuDWXiqLBX9",
  "key4": "2TKogYnobopa81wopFj2oxuhe2x5qyJHw3ThUCHu2zkf9fcTaRsGGMdE9Cdy8qGAEaBcWPT8qNasdxtUsygb2D8",
  "key5": "2YBafdJuedgw98pF8coHVhEqo9joWAfLMsQzaeakrDyepy1HAzbi3duP7oDVZQUXbh2FJF86DPeeAC2U1YPfVZU9",
  "key6": "2p1dokfmrx4BxXg8sh2aYwZKLXcQtnf3EKHGFA57JrdiEZjH1pPc4LhuTfxN7CcWXW9KRZspxi5JdFn4SaQsStgT",
  "key7": "NUx8DzjkG8up9NjaLtBQoGsVham944tQ8aX1AJKYvXwPDu5QQcguuz6wSYTQ69qyjJQN625eh65SAtSmnihWXuv",
  "key8": "5aDPqkkuKKGoUu3b5d8xQ1Wwg5uqndLjx2T8FJjMd2V2GxpvYjsYkqWEaK3fEooQNSrs6EWrMWsxrRP8Q8oAwJXj",
  "key9": "39qFjHPjitKnfUArDXSUtX1yxDDEMnCF9JCDPVC9Bk34EeqvbGS3WUgBgNr2944pUtheTF8Mi7rTvsmvKgnV8MCB",
  "key10": "5dFzqcMYuYtN7RNoM1R1AxJceEAYBfhTPBaEwtwAFsZ3Y3yUSjBbguxiwKKFBpL6Gw8krNzXv7tpz14byWqYPmhC",
  "key11": "3icVpoP6znjvrYiebKQswiGgtJKUvH2QDwUfUsUSdG4keVr4vBNnrNxd4e8WrH6BHbAKLyUsb2YGEVvTejX3Dnks",
  "key12": "4nangXN38ePZ4JZSamgohp8qQ1h6uXDAbaoRoPnUUWzgQW28LAW4BhtaMiSS6hLKJtGaC1KBN47yANQBZuAYG51R",
  "key13": "2ubTWmnAFSiL2Fv5okQG8WKAEAHNxK7G1QdEwPiU3sYHvK1mirA94D3C9N2SaCJYnC4msB3RERXkUHtq3uZw97De",
  "key14": "3vTmuGkyL74ZcZzRazkXQuo4uTRVkZTwSHxxqhQWeZHpKbkwto9giUBeKGWfXDpNfNxWJtxgeSawKNTLsqCVJP6n",
  "key15": "34ZYc2Es4r5decUV2nGCLg62fUDCvdLTLWJ2WmzyF7AnfzybwhRTV12fcUSAta7UnNYevZ32HfaLjqxSZgKXn9yR",
  "key16": "2rsMB5gqVJ1Nr7DFQtndREixoNeYzdqdvXWEGUHM4Ajw1J1epStuYZ2QSP2zCc7cfzMqWdd8fjsVmCyzfab3aeU9",
  "key17": "3zc8GPiZgoCDGwP8xMGHSi9GgoGHY2G7uA8zjhA3T7e3z7xHi2DYZMfgkYc5HJ4v4XFi2sRx49Fbk7qs5fHL4YgS",
  "key18": "2JTyDDyAdYRoa9ziD7mLJ3okbMRnGDCC6GEDkptu3bagvCp5nFRQmkkgRFx9gL4BNvPAMmdHQjkgSdkK9P5LphQq",
  "key19": "3BJHpTBLNBKcfmnrv4XJnbcmTfoor3RS527WGQ9U6WfbG2QxBgAi6PMcyWpFQzuZFs44S91ck9ozKx377V9kMxkL",
  "key20": "616hecnNaLTosMdimS7g7cQsXfjsrE99XCfMiitDAgzhDvqRNXa9rrnjvhwLeLwTzqNeS4SmDT6tVmtVKuBB2nHF",
  "key21": "m3LZ78VpbhKmPAvBPPwm2FmfVjW8G4qF9ysFUa1rgJHGthAqSG3amrTwMynm9HgSf54xeK4bqhmeJzgCTXzngop",
  "key22": "489cmi82FzxiyWswYAu1bYX5NbdVpiereyGWMnufBJH6ezoiEpFdeZpX1SvvYC6NkPGtnte2ERhkfzx6HBBnJUXr",
  "key23": "2KQQcB5wu7Wy7fXeJQLUBM7wcWvnBLDihuboj3g5indzMqHGw2M6ymK4CVxJ7mmzicAXvDa76k1sAs3UjytnA7rc",
  "key24": "3NY9vughGXJFW77piMuLyZS1oygT9JfQfd4SJj9VMw9aujXhSid4V9i5CJmykiJKGvJ7DfWyanoi8mjr7zZLStrc",
  "key25": "5eQXEuk8VgeN8zpfoNRA6BKtYhzuZaD98mhRwS78vdgRa1QjuBNj8VguHtuXTvyUMUChpLyjpP6a7JVA5B8AF468",
  "key26": "4HgDdxzrPUJich9dBri45Bcu5Vwr5MLA5SFVzCvhSVDcQw2etLNtQ5nUGkEEXRU3omnhxkupBsKH6dLLJ9tC9cJ2",
  "key27": "mqQx6EMRYPEvcqZnhKyNEFiCuxxqv59DG4QWvzRJus17sSs2tYzk6JhArDPLtXjDSzUwLcGopXiY4m1njUmXZgX",
  "key28": "2erxi3vjThDjKYyHsNSw8oyF2nb5VgxUMLM6NZbenUimZefS7XRFLhYaWCPzkZUWKJtnEvJjUMHFLDo5zCmrJdg6",
  "key29": "PpuCs2ahHi8EkrkUEjaVc4Vk19ychznf6GmHXi67SRxTdNsjydpKYTJ5s2yDc66gB7QXGWsSLcpXotnpKpFKEyr",
  "key30": "4Czxnc4wQX2tJ1HRrUMfejKeeBkrpfovy8fcmWDXUwKjo7avS4jsiet2dLxqZ82xRCM9uhCCeaFb7q93n46Chbx8",
  "key31": "4oDmU3fwFN46s8VbXLAMMjc4LrJ76RgvAsA5ucBz9sEHuDPVsCaGyCzn4ANzy91oQXhP43oXxzRFt1vdjPLQiQoE",
  "key32": "2VB1x8zihTdkaSufGyNNYTECsbCwAfwEWrKvJbbFaEmb12FDXzGiujYdgv6ySh7g3zrzJMc1h8tzG8hK3fMZtMgy",
  "key33": "5DKEiPfKZAcUJ8QSBWq6MvS1qCde3PaDdQAyiD6uAi8LvXAt3p5ZqbfgDZ3G6EVWYy1m346jN4U3pV6g8dn5sVcn"
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
