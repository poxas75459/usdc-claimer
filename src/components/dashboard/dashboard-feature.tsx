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
    "29dKRrP8w7WkLHzkvZthbJXVFqDa762eMc4XZSohZygxnygjGdED1TeZ8DvWQaXEzeBcaHpvAfo2fjUzNzXx9ZC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XYiPgZZ4DFydJh6Z6P178ZJjLz88LyX7Sqk5xMdnuSybVbrrRNrTT48vxLdGHg1pUzbUddF8ZuzmMirwDHoTnBC",
  "key1": "3grEcNiUUYXBeRgfGygNsnYvc88Bs2gL2sy6DBdRvVjZS3Ch9mPC2DR9ifoyqPZD217E5jjgUhuV81EUGkq14TUt",
  "key2": "HcsLGw246Spz7Bs24PGTeS4nHvRqkM2pUKbNGcvFn3rDcSmUDS5Ldg29CyGPzV1Y8E44uufYQan8dLtdgUZKbNC",
  "key3": "mHw1vstMGVZPXEvPe48Km5R1mD9ZXjrPeros5qbeRvorbbbyKFbqoaVgfwzW1TtuAhTKL9aGxistwim7yhKUV9f",
  "key4": "2ZsKRfUPG7aTsPwjLQKVdHpGzrAqppmGgcngkkb9NKZ7gDh1agtkpNj8BRVQaR2ww5C7PGVhFwaurEqvVXTpe3JG",
  "key5": "5re35AK9BCmnT1JKHpCaPFUCcKRw95nXAhRdnxnRZ3mTqPqNwyuLfiLrGyVsntNECaVSaaG6Hwgft1c1BDRzwsgn",
  "key6": "oEQnkT7N9HhGMLTKPL4fmw3RCSM2DQ72TTkqYfYiFvcxfN53hcBcE2sok3HhVDn9AzjW7VduV5NMbPHMPkv7FAB",
  "key7": "2mrJVosrYYQHzHT6ZDuPmRDUYMvDg7uwRjVv813tFD37wihvPY2dX9ZUwcJYCyjmTw3WakT4P5F8U2HQHD7Bzgyw",
  "key8": "5hsHUTsWDCU5CVDASExwXaErJYDF1yWjnuurstyx79uwspgKd763Z8FGqZVD7VxsGm4ynZTZQStBL3N661KhjzYc",
  "key9": "5cdgfNdMYU1oQtYvsUdjWK9BgwuS7hqiEMiMY6wCMw6D7qQucgxmu2GvuKZ46TM8t3L32f2Gr6m9atACPPdL9pRw",
  "key10": "53fjDdoJ3VRr7gG9ipGgBoSUTxPuHpoV4drKrRrHiD9WY5nvxqaUn9SvgroWMdLtxb9ZsGRHYdvCugtAb2AMS9n5",
  "key11": "CcEm54E4jReDdMsWXH2Y3gAx2UE339yGtbygHDe1vkbqpmbW5GYerDgbV5fd2SjKhDD5G4UxgGcheRtsD4KuXob",
  "key12": "2ytVvQiEcW4zWtKj9CamAwdF4Xhvf3XSjvxpgpoDGEPX7rSSysp7VrdSQTTBVkzy2EvupQyyggyWkoyF18iqqWHm",
  "key13": "978AKgzGuJLeL6P83DhtSQr8fzF17w3rtADFCCQTEbKcJPTxMQPL3GdbRWpToHLaHLnhuC1KnKELxmy63zvWfa2",
  "key14": "56T6kir23DRjatKXe9TdH2N2cReN7d9CyvaqR6q97f2yHqcRtmpqo9cMBVMuV9zL1i4v2J8eVRBv8dnWFupQyWdn",
  "key15": "5nDJzsyJb4jgfSTJxzafvzjULSMgXFvvWaDd4JUwYU4VoK1eu5A6yxakE3kR1UbWLMwYLwDaupsCB3JqUG1yCv9q",
  "key16": "3hHcJJeubGdf24wXpCw22rM2CoMthWsonyhm4QWDmXSY5v1PQSLKD8WrcM2LJUV7EUPkQezuf5b4u5D3tNm3XeVH",
  "key17": "66PF6SvSHS7vvpbeSygKR4r3zMMck4bUymdNbVmyurPBPZZpGbf2TTRrHkC4ocssxJT9xWdDMuH4yLQV9JdVZsED",
  "key18": "2CGWXLBpvAB1cELHK8iFzj5hwfLmf9rcc2k3aG7QczDrKqJovcyFoUbRk6rmMxRN57g3g938scBupJx26swK9Bgc",
  "key19": "5cTyNCR5ZKyG1PXR8osj1newq5RdZANL7t79ucJio7ZxGhZpW69hkGt6bvCr2A9nY1RjWUUKXWaeDtUnjbt5LZ2A",
  "key20": "5UtwB1hqhfE2Tmh8idgB2dbHTRzhv34DB8JRYvWfs4NfV48tZD6CRfGK8VfpqNtKEmoUVqc7pHwcUSrTXTbP1znN",
  "key21": "3bBpJ1o1DoVhp5XeacPJhGfbEbMbxLSVpzb1L94TZCkqgtu7nYD9VUsAhKGj7sLEa5DJHPN7ZDz64nY9sBQSuLLW",
  "key22": "5fi1iZnKRsUcGPiZ2pTuD5cqZ6Zh8sZUprGvkKwdaSDsgTkmUj8FyrmkufPAgYSUvBzgHwuQSmeEvbMXmDmNSdqh",
  "key23": "3abiZCJHydrUMDdpayDqYJk76kUYFhZLPjd7z71JoGHAnFP9rTQP5ZTbG5v6Rt14hVFGBUBKqwrpBwyoegnEVSXh",
  "key24": "3UDnSSHx3Aq5nrZLXTHCmzjg6BB9FMHE7ph5YFZgQDU94jpBqR34ji3d7uFmvoawmYnjGfgnTq8biZ2FYM85hrqx",
  "key25": "RzCAyW7tKDGv8Do3WHME1or3K12qYkHuzuw91sKccAXXTGRqWQtx3kjLoPzznfZy88Uw41qyyo4zGSQKP9XMn2A",
  "key26": "9yZA7mGMp9dSzuanPcM4pr9CwmFii9gJgAqgoBJNsGWJsLS71XVEX1QoAPhodmWXay4Dzjst9zR39Sf5FLpbezp",
  "key27": "NEXyym8mHVTYb5bt5Jg9sVUpcRG7BcrJ8gpSazFZEAq1zha7zXpnAexBFq5qeFAFBMELUhDnSWvhpHfuMdWKqmM",
  "key28": "2hFqCi1XD7Rvvw6WjoD1jXDVaJDZsW2tooebRQRZHdESr5esT69fTC91CUWr3WjmAkygjiGR6bhYCQr6iLvx1VgU",
  "key29": "3rE5zN33WHJy6y2JaMWVyvWf9gtE95PWJ7bpHdv1DwnuzPXbSrFjnMZEwW2FzyhUei2Kh1LBY5i1KdczBmfxvze6",
  "key30": "4VxZCQthDw9eUcSwG4Js4u3F5TzWjmo721qfmkQkMeATg71JszYFUNWPhh16viqAEaLEwpP8vFzzHfRW4CLcXyEC",
  "key31": "3rdgCMZMmLrMC9AwpGmcBetcgfrpDNSNXEE99wkBHvKuYaeoNV7suiZeiv1quTYj5rsskheXzRQYKTLejtSxYTN1",
  "key32": "4SjnAB9RaXFqq3dBFxqnRV37NYzA6NHHzVFAtYhB57MvjTZxHL6xr4ykSZzoT7QyJ6FDccdL6wxqgprF87cxa8WN",
  "key33": "5DTndmRVvKPcmgQ5a7DtyLBmJkPpxEjUx9M1iDkJuGn3KbjHbPdN2kc5et7owWLWVpi9bs5pYNJx5MJic4iVNsvv",
  "key34": "3Hec3uTM35GZtPURCdyYLbf9hw1tMwkeEofe2BpfR41oQqbzH2u22oAucyufEtuY5EVzhb3wVaWE8YWhrnh1h793",
  "key35": "2jy3gTURQoKBAGT4TPWF1p2MX4bodaYRfn4UCrYMfj1aFgH7KxDYGJNkdHCMicgLuUrQccqPrhzekBJUoTuvQx71",
  "key36": "n1CXy1qC97TRUsGeMpDyR8eJegdgs1VyEwkh167MmNAayYRQbghzt5AAK3vBPoPYdmDAV5hMkiSW6YQHFDBSz7i",
  "key37": "5CtLNG8JN6zjyhGK9xhu66H9peKqBSxb412Un1me9Cqt2ScqcgN7PU13emoPhGA8NqomEZB98guxoBqQvM1DZVhr",
  "key38": "4HNGLPotDhLEkUWfpGHX9RV3RoErRY2ZiUTUYyBtfjCbs3REYKkVMoHYGnT7jYXcgRZuLYzAaTqy2pA7mVs8yUyk",
  "key39": "27xYHWjJc2qaTMA2FQUj3peyyfwanFqPCNCeC5kzRbJjNtFmPetn8n4XbpnKgweLVVWSHuv1T3mkCyhiP1ysbeNZ",
  "key40": "cRNzBfrmNv2ddtktrpq4KzL2Pds2wMbaxxKxbZYK4n1K3gskzjie2LcQAVkEH7r2CMFdVQDWB442hdP982fdFco",
  "key41": "4AN1Rt6FxXYuEUyiq8VpgaTfCckZ4ro5gnqaycZjvqqJ5qEJQ9epwdZomAdCMDGph2eTgHmsXAY3MNXuAFfkfP24",
  "key42": "WwT7dPwHA29UecjDxmMWRsSTsgALRzm9UF1WrXSBdRmiaFQmsevN2K5VMTS5QDM4HpkUjnUbWQB7LwHr6Y5z29s",
  "key43": "2eDJqg6PPmaLcTaJjTmpDYyWXbneAFL6zum1ga6FixfG67vgoqG4vM7ghFZ7psEAUVZsWUhDsdZSF7hMDwD58svj",
  "key44": "btpoKtya1rfvXetyx8gbtbqZgerkZdYHCT83cyp5TfTEp1NERmsnK4Agf9twi3WHmDiiP3eKSKm2B7XWmboMQQq"
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
