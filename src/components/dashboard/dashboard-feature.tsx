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
    "2gDGvsgsKcDPJdafazkw89eqiGRR4sSL85ygoSHzAYKbU6tmtdjknc3CVuVLmqL2v6HPnFWZ9pKRpgy9BTvd55kj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34VKgtoQcR1S5MvV8Hz9QoCqHMC84rbPknknnCAXQKpzwQMiYSQ88trDBwJvHoPaXfs6EfXcxeonrqEzZaUExXMu",
  "key1": "2TvD5QQEr4NGm47kDKyt9xfh3XjDJDPmdMCTdbFGkwgs5vifHDx8detqGxFPfhL2iynzKbTG9Rp92WfsFe6EacCM",
  "key2": "4RduB9y7zLatcCixN755Ju2SbL8A699CmWmrzRNGF3iffG3ZbQtvzAYFj5EJMXsgjnd7gdWN7j9CFhbdTtfN4RTF",
  "key3": "5CbGCDZkPhjW9mCR6QxkcefayRMdw4aFFQU3VbSoZqTv9EKLwyMx99daNpD58WhZ4vVCEVCC32C4mQhNJWeZ8HQC",
  "key4": "3SNbK5tSyk1TWW8cDBv1YP5EjXeSrhj6y1jbDpxhcDvQKCGyRiTU4DkFq9GRFu8hHK1EJn3Q6D8bzCyYz3KkPdc1",
  "key5": "LcxbRnD2p67Un499FEqohDCh2GUZ2Vd87a5P1BhqkFB8jjBkt5AsMUAjis5G6iEPCrtWSqpnAsN5fRWZ15XgMPb",
  "key6": "2qUX7dKYt12rNJJcWjuQ3uuNBLJcWbnHzedezNe3cFvj95JC1kM6PkX82bodsxtTMAfZHiLYeLcHYBPtSFvU7cyj",
  "key7": "nsMRii7fh34d7gUeuBUKY77YorstoLjESVFL9Kaw1TD3U4HXA3wnqUjnAGaYJMGVTmrMWvnJf74CofjzqZG5CU9",
  "key8": "26Ff1p7yDqXC7BPibXfRmWXCdUUSspYakFKwmgk3ejogWyx5fkYqJm9yqVJD2ubj1fKciG7QwB99arGeUEGyp4Do",
  "key9": "3J8X5JzaX2rkpyR4KWpLLXfJRu1HgafgCs5cJ38tsCbBAgAyey5zZDz1W8unitnjUCiUQjUFYzbPPeaCMiZvJtph",
  "key10": "6567rrvdhWvw2qtRJWE7QYMEKSp6NUSxnsrBC4nzeU1SfiAarQL6ScsoyGri7iB5MbMVc365Q6ootCtnPGkK5dbh",
  "key11": "63SuzPQkjs8bUXtPMS25dvYy1ZrmdRTDTCmUcfdHP4LzZSq9Vu7pReTnKhsgcxnVfWnkEU2VSNh11nr7cK2TLDBD",
  "key12": "3TfaT6v9CKv2154QSMiUvS1GE5KmjJoxiwenmctPo5YWguNfiJMHgpQeFoyRAbxMJQRrV6trKHCkhSu7NZyd7rQy",
  "key13": "42wAbCEgMWtGRtsef6Ns2WvPoohXRL3XtbP9TNYouEJY785fC3j8zof6kVhff7B5xU1Ta6txwhr6fF3FEr6sL2Es",
  "key14": "5UgJcVCATxHPVTuhQE6XTURL7qFrzCuLrGq3tbspFLDKuiZWEA56XfaVeg5gJAWwozKkr7TvaZ672LLQVRB5Kpx6",
  "key15": "3mvEZySiPoeJnXDS7DsSnyoyDnndnSJBW42sw9NYphPzvLdKfMqgaswFbcQAzUJWCCeZNrYjpAmQoVKxAJCz3PGd",
  "key16": "2SSTdTvNVAxsZ9D2LHkJZNXa3G3YCRsqwq3dWCzehWWE1J7HSUWg8wvYeX4v5Zz3H8dYgqfjTdo1pZDVkWXKTctu",
  "key17": "4qSzsypKVssaHniLDJH28ZV2nrUCzEuBo1wgqUdwrREtoB1xChCEGQTbp272PcPFhKBokGMNXcyeCcotcTPqFbYX",
  "key18": "4DWqLNpAi9RtsoYRXo8Rzh5XsDcch6rB2KRgSYHRCap3e5tyLzGDsy8vBXsvLEKbcpZRuibdas7eX6QfD8CGAU4M",
  "key19": "4HhkQ1Q1DSwimyB3uUHwiYXUgeFpgbhzrfW8FE5EiFkeustspdjPwpwM5VUgsQifVPzZk4RkPQ76CGRXKCyj1G7v",
  "key20": "3Fhxa26jsKQbfkow3ofAf3Y9oDstuPkXjgurLdi4x3Lo46zZY94WiGjsf7N4npeZNfGpsrpDtTZrK9aLypjhYucv",
  "key21": "3nnqNcLt3ec9Sk7GRUUN6cqZkxxhgnq36KhsSzVYYs8kAHVQVCLz4K9fUaMoDfeWyZ3sQ14HBhwE1fnLbPV7sGGN",
  "key22": "G2zdhuGo1q8GUCEskJZdp1aKT1Y6SpsW6NnshzcLkikiBPgm5ujFBXNzfHFGuZZAkQdypBzbj7fPNVYbbSFX9ue",
  "key23": "3aAQLGLdhFAXGKCVmYDS98GFtVoKt6935NbtWsT3ZN3yaiftnDC54wbD8ZzJDKS54shMY91toY4B2bWJyY2rK4bm",
  "key24": "58wUpW3grZdTWjCe6CAoWaowBBezWa11pP9Xf2uy8WraF4DQR7Vt6u1Dyt3MKymhmnTdspVxRLQ7M9YMXuZoV8F1",
  "key25": "DYEtTG84ho1U7otpucETCgfGaqzsTz4EkrHFGXwaV4CDXbHfPnYh9jGmkpMsfYXFByZ9kH7nagCTScsPqdxGM18",
  "key26": "b45PRcxLKD3vFEFV1Qnuuu3NECYc227MQeiwZLwM4zjKchqm2Etd8KqKskbajZZnW7eKFaL88o9r7nMczPEgoxz",
  "key27": "3Xt7Tf1B7PZmvAfCKYVMzxwLPuuw1N3ybTGxRtKtNwMG3RbKY7BVUR21T68hUjxbuvp8akMS6R6MnKUrar4XcHWF",
  "key28": "4GgT8HX95Qew2oFGSk3nDsWBMfdVoqNh9txtRaR7LHfFe5FgxfBGp8HbbZas2W7tFXYFZWZnHW9fX5nCDeuifJxS",
  "key29": "5AhWgdrG8aLW73iBczKQhTwVyj1ZsSBu3Zk6L8WMtKNqkpr3GQviczkDLmT5xjM8SBuACLkotRGDuzPobceGKXtp",
  "key30": "qb42LK5YuBDzTjewCZR5EzK46UeQ9YNqpA96j2R88FVxG1fGYMebc8NDjxQYADCNPqx4irmEVgPLL3GhyaFyRGA",
  "key31": "58SUHX5Vu1r3L6Jm6wQhvLNQE8t9GZsWB9zr3rGauYMZBJBX9FLnBpspn2RLsKi3ZthcW7smpCArhBNtAtvuFumH",
  "key32": "4AAHhXyABhcXvAw8iP149wK2YpPHREdGkkSRcCgCTSZAqZCyEDHoZ7E71aKaR1kWx2dFSMVK6v8V6ctBMJjNUv2s",
  "key33": "3kyYjFpmcKZJo31FR89C7rwkRhaoMs1RWtx29A5FbJRrMCqzAoXWTXdnWvWjNaqrcBu29xqqKTx6KFE9DV5paZWv",
  "key34": "53bijFJLywjDenCEi9Br4812inuUh3mDdy4ss8NuKaQBRWDj7W3ywjgxybRVASAHezi9Soe68Fc9z8sRPvtUchTQ",
  "key35": "2KSNFGS9q5HyVJnTxLnakH7b8ApkKVdjm1KDtmceASBDmkhL1qsgByitKLUEq8XQj9e45MrTAfYbTK5dMTpifreW",
  "key36": "4Vj1CakzVJGwGm5HpRMoNYDvVX7aYWeaANHnTh5QS2KeBCTTinxrBZ4zjmsfjHTjpr55hNQcJco7CmkAkhmLTMQC",
  "key37": "3Kau2s6CQtpJD1zyepAVUSnzUPuW4PHEVwytzVrqHL67YWPeDN8WYnSEdHqjAQaX43pnT2YpCVjoxwFcexWSRHhR",
  "key38": "4ekKicv2L9AKE6avyMk1x7yNx9PWw9DxLEAFdEkDtPzy9onb1P7zciXXDmspETyCzJqyZ84P4W2FxNkuZ97Re9B3",
  "key39": "4o2hMY3L7Ls5mDGXhoLZayA1tdm9q3rP9DroBECdy7H5aYQVxMnt5RiLD3pekDDKxnHm7VxtACTbDTY78Akn16pv",
  "key40": "2SvH1AYwxPQhoDtCyfmx6LFRopYh31aCCvzgbuY8GrXAb62dxXyEgFQKLUmKY5G1BEVvmReuG9zkk1i2K3KCBd4x",
  "key41": "35cVGE4sFxXoiM7QHphofHGbRWhVkcE4hBrVMTnVsXt3qa5EV7JFGTp4zyoFNtuSP7wAJtjcvYHTEEk6WKRsMqGX",
  "key42": "5wAfgeSjrQRdLgE4mG6kqgGLM2HEtqxGXeVisC8ttZTbrVYTYpY9wZWxz7zUobmEQuJuR3Zxx6vckkbPxnQ2M6BM",
  "key43": "3Gpafeh5RzkyAs8U6uxmiuymPKio1Y6UioEspCGx4q26TMSu1uNukKZpqVVzCy48n4rXPizpLruMvQqWja7gG1vd",
  "key44": "kYcyWLnj3DL1sDTeqTRcEdsCBiLU8QCKtC9YkMLa2SwpuKXScmNMEQRqjXsQhWuoZHhQKwV4D3H2JvdzqLNKcFb",
  "key45": "495dechPJeq12VxFBin7d6UPtJpZZETiku9FaypvT8jUizXN2xv6ZGaWhmp77N9FaZvrAzUqBpspy57tD7Ne9qVX",
  "key46": "3Rxc9d6eYv8iRmfmZBEtAea4QE1DUtGJY1tphCg3QSQD1eUWJo17idL4LgXThfkTxo9nydc1kMhdnVHP9DvdkmaK",
  "key47": "4s5CuQ6Bft7zJXggR884TbmE7i6BpaqsCdPNtvU4PeKLdhVCMY2SmR3mJ9LTKQ51mob9nGimuJYJJg8uC4jpbeor"
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
