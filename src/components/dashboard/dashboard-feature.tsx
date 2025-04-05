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
    "22etTRBQhGdGwVyXp9fctDHY9RJSNoKcZrAF24Q7UwJii6WWDww83tvA2R2rt24dzn3XxR9FC5Jy57eWFiqGamAd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iYmSi8wYgZSWMSioMuamPuBi4qw9oWK8sN738mdrwijuJ3S5Qbc4tQix18XG5RCbxJdYELjprAM9WoE6cXMFoyL",
  "key1": "3jCMeuSsN9N4m4X2uMXqZesaAeTowjaTGFwSKMHhDR9spW4qAx8XurLA3rVS1RrfMX4Zuw9MtcTHei5qFsQBCPGc",
  "key2": "cV19nu64dbbnY5eMNzk81eFbimX5Qxsmo1k5xUjSs49BjZqvSqLnP5VWQvqp2svPNVXY58XYUXjPd5jbD41Qqoz",
  "key3": "4wtNUYkaas2xU6iJVSHPwwHpy6CjBeUgu5mg3BA4LthhsYXyM1HsDv3gJAFDRcpBc2ds8Gm9WtSFpvFJ74s4Ywat",
  "key4": "5ZGAnhibNVVVHjDSLfHvGBb3WDqeSyvrBwvNGs2m2Xsq2r8xf2AXPVPLbyViSBHHJCTKWtsMQ3SJpdXC4hh1aK3c",
  "key5": "2zgz8xCsfrnz1GVwA7VwBZjZgneDvESQBx4uJfwtkvJAsKqwwbYSTPqfUYpZB88xSTuL3AQ6xP3vaZhs2CX3UXr6",
  "key6": "2U2Y4yaVCkYdLyLSW5qcPyyBCszCFhygreUKfTgmBjRqECBkuGGW83U7UX6B6tiszNaW42VcrMvZ3XJc7ot97pi5",
  "key7": "rDtQZqgUGP9gx5GArFuQa7jxNF9cfyCEn1cU1stPZn6tr23GaUG43YWsRqqWweUNCLuHWFqy8Zn9qEksXhnXFTh",
  "key8": "4oNu7SnnGXUkaZ4Uw9XypSLvZpTSStBZcDX7XaviMv1ZmJXDJpMWGrzgGJsPayMBSxfk38pPUspxW1vDwoA18HyA",
  "key9": "5S3eq6rSTNoPwJJsnm3JSiwJiQqqr3CKmPRFnpheJaN42zCxzm5wVvsNJJ7Rvpe6v2MXP1NMZLHMMSiPWVz9XASy",
  "key10": "2GdHAbeAHSp1Phc5trdmTxuTqzbNVy5je6Djw8KgamCAnsHhpVX3Bx1uNuNTMAYE5uQkiZmVNCGYsXBh62EG8H9t",
  "key11": "2jAbAnuE2iibseRXhcwL7FX7mX381mVMLbA81g7Bnc8hRhfPJCcGb1Y3spGnRrj7x128KcRCurf3rUkwEoY4rHX9",
  "key12": "3uMi8WMn1TUeWbXysHQpZWfMdTR3ynvpu3Qzd11s1grxkhNmKdmoksFTAY1xyRxSxPQXpnJGGw9vWuuzUwfnQSpJ",
  "key13": "4VyDcFr4xoY3PzSFRe8CVCRVNDbKvYDMmqssDetBo9DNUnfX61zJvHw1SJFLkmCkpff4XBs8CszLNRLLqHLYoyM7",
  "key14": "fUykcra51NqswZ4mFct7Xcu42Aap6xgxutWnSUZtfo11CL7bhZ8GcgNHxTfA8qFopsHBtiKFRrMubNGm5sS7anV",
  "key15": "283oK8v63buzyMPTbE3HoQFgPHG5h7DGTysFyT5qpRFdX8AfVSv2vYcrZiunvJqS1diqb3ShsZ18k2pjCXpicXcG",
  "key16": "FVVouHDkHwXh7m98QEBDptiV6UiGh9Z1JYGPKeNAWRzJFVAumHafGFLCNwLZmrE3HY4V9GFDSDxWy5QN1YydPaW",
  "key17": "2YxfB6wvq1JgbxtS3iYWMvrfEwHhao4yX6NRF5GoUHmtpn59eummr1gi88kp8Nagj93sMaNpwWJzxugJ7p3PMYyz",
  "key18": "49DTvnT8taArbMGcaNVmzXtu6BgHWGsw9ePnd7HK149qK5H5Q3inEhz6BjdeU3AMWXdENAqk3Bp21iW9iT5bvwVa",
  "key19": "27JzTd6Xpd9Tq38rvxwvo6y9DdVrx8Nrd4mZjktjq2pSirvAGNL6LvfNu7TWbzag7TAyH6vwQTvYja7py4DNStc1",
  "key20": "4Uo6sd2kaQFu5bQfgVpk4HeYB8UKGZyfPA7hPdxp2CV5yMqsXo8WTgAk6KZsQ3K6V29ZmfCx7aA88ZwvkT3VobVA",
  "key21": "3pjtiZTHXHbcWKHaR92Gm1zZdjaj8PirKngdpYwhM3A4R16Eksno61psNQaN9umCAssJ4FyFx48JZS29tVTNWp4",
  "key22": "2GrSpv2x6gounNqdVqaNJ47WbfQnHELPiFWT26zuGvMqWtLwgTpCPCQZbeiX65WVUTAS6B4TVFoJCMtmAynFTug2",
  "key23": "4ThqU7AcRWoRi4Br8fiVrRdxt91vciSb2NkSScoKCaWoZxfLnVkKtJMoNM8LHBPU1gm8idFF5ksq1ppECLAPdPgy",
  "key24": "3ACe657UNtRdude4Zizv4HwMZi42LPhrWS5zUocWe9avGpD2vCnbC1qrc9VYJtHfkBdDituWioSJmUf2WD2hHvvf",
  "key25": "4atTneBsN6kVfbNhDGNRmie7eqK2GZ8ygzxJzkURv8etDV2E1C1KbBW8U2Xo7j61aHd5HaDAuWy2zkdyKZS2uThR",
  "key26": "3g9iNmk9SDU8AqS55LfUby9f23JhGF1CZ48ANdtgohLhufT1CZx1PtwnQMzqG9R3coLKj7XsKrHkiEQdivb3JgxZ",
  "key27": "4uXj4m9LteSpW5z418XRoYUNWuU5mi5DVuT4AA6Rb5QgKVXhAseJBb7eF2nfYqsSWJAPrtYr2ra5zQVFiKywsMXb",
  "key28": "3WF2tSe82in2HzmdXoXDhmc5qXmeYUxCfq5oCuiXsuJ1WdTYBS4RKHbHCR3pyvBXGjjux4VxiRJZDdJULSGCxkx1",
  "key29": "9aMArP2xrLjmA8mYttk4zyzSAuCTb1BXx54DNYj2ELfvfe8wHo7G4N7kUGvZZJqvYqSVEqgQCAbS3PDKjrQD1GD",
  "key30": "StnqKRbVDcjRYArhXeGRQ7h1JS29EyAwTrwHBcZZupVgUZtPtTPdxrXtBFcZMBBbP7TfbQtXTtKCUjzHHehR8Da",
  "key31": "2fWaScJjpERnFnSNtJ9PDs5EwvsYTmnxXGmEpd2952V86471jUg88Vf8uKs2rdzk5TFZXHQy5C2dsfoBZSX74e58",
  "key32": "2NJ99yYWybjRRBNQzyiqBkWiVGBqJQmMNdJH6D7wKm262BeQC5QruZojM3bS6dVXcVUdcisQ8npxPjLsircedbdr",
  "key33": "GAx5CtYCJjaG21mbdsFPbe3e7gh9TgpuP3x5zEsP6vcpngMDZupZ3HM3BqszV6r9wwa2583yDoPeBkqkTsKM66S",
  "key34": "5SWK7Dgg2EMkFJmAoXchxfHwrhfm8b7PBzQeDrzDqVXJ7C9osrVyA7qTbQuaz4n2ayDMB2eGHrMkSycUTCzEkXCE",
  "key35": "5fFi1s4swwSBKdqS7weN3FHcXs3rtEdVEN1TkmxZPLZjxpjNu2KdMw17JXyRMaqG2CXAGzwj3Ys33ZawEg5uznLS",
  "key36": "4gp3iJau6qz5itv4WcostXhLzPcRNfpn3KK86vMDCidizBwqXdBAZtMAR81uLmp7senXoZuCbcPCxvfUNzQWrMgf",
  "key37": "4g2PPWyDXKTpdPejcGs8SJZ2KKoiYA5yzYmtNa9PCCFsK5fHqjx5WSa83NaZkBaGtfZcpoHuqqoKrLMR6r7eFqEw",
  "key38": "3ATubZZHy77cLNgKUtbW6eTKnsbkXojgESmjv5cm5c2PxCNJKX5zW5ZWiMvknAeKSc9miCoHCdrojmFqXi5nGnXM",
  "key39": "37CUwKBy9qTzfGGcih9Kv47gBbGhGyxsVu4gw7DixgADhnCsNGwNya3fdXfiJN5bQUAvKh5mhBX3XA89tMgtVUJ6",
  "key40": "5iThh4D2iiACJ3PPsjnAgaChiNPVBGNwbmeSsGbZxRfzBrsSF4J9VF86rHfBSw5xsXNzhwn4HgKKFzwEHgXmf9B4",
  "key41": "3sszUXtxScbRLHkxQ52BMGEjFk8zJMjLoDAcpdruLCwyu6HvM3THSwZr7gfvfKgVF8haDwvi6D4ScmZW9tzyZ5cP",
  "key42": "5VwZPRkXvyz5b7Q7tT5FWEkEy2NZ9rey6ReAzCQkACvBChoAPMQTLbVMSmk1EMcpARkmt54H9EGsQp7gk2K62ZRU",
  "key43": "EB22Cr79SGg67t2h1EFqfCVQTRCjUCkEsN3ScobLDPREQKoM3Nm6yzCoyybRqPC34QqfQAYH21JbLUgiKhFgxDV",
  "key44": "SS2XsLh13S5EooZNdo6HnpDhT2zunKo4iFPSSWXqY5XpMtEWHyukdkKm6CMrtTJb583tZxbfbnufb6c5A8nbRKf"
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
