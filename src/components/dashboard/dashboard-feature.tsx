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
    "2GVKcD1yWe8R57tEFtyoHdBNndwgwmsfsoLNcPxqz8mpALzhsENS6MD28ij3DDzickV3BCj44aGgKeXhqkZ1ioQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "331YXNTro2jFBKQb4U41tMDaQdzCYmw1bNyNdD6vqyRiDh3kvL9PbSrK2SKacPgbZB5Tcwersxqvb8zpPFT955qX",
  "key1": "5QK33UJoG1Dhy2ABv4AwygA8k9EieoDCxax4UqAWpLvq5JrkKR8sehxK5iSyzYHMpAeWJjyVQBttWob9BuMf5CHc",
  "key2": "5m6LMKHLSufSN9mb7fgbhHyi2hXEgJhpULmvHuEMKESKpaGxxhbfmG4xKz59vpXBtF1ByKANWFxFfa7n2prDHmAn",
  "key3": "whXWf4WGtBwQkpX9GD8dGMLzoxjQ6AnnpUemjPE75qN6sFZ1MzV8QfU4Kk2RpeGEip6CWbrHgsmrML2hcgqrcXF",
  "key4": "3ERWxT2vvXUeDf9dwWatfZZ9uHB1DPAPQX2UP9XeXNUR54UTkWLERLcBfPdHu8UQR4d5m5KjHcR3zG7Lt59M4jdP",
  "key5": "3ohNZJmfowo6myAMQPqdigJyTmAECAhXbSjLh6qB3jj5NeC7wE9WTpiqq4Z7f5ne2hWNeTbFujStfUCEatFBzWVY",
  "key6": "2tfkKLUTK5ED5F8RDeSJPeCUV3tU991JVcDkMrjtccKupcv45SZ3135jizoWxuMWnPUnSk1jvG4NPdQPa5EsseJ4",
  "key7": "TVy16dTcv5et4KU2LiFo63SyVCXGaPMoXPKPQNTySH8TxjM7kufjsJyu6U3zKeuSf7J4Pa1Dbj5gXvHuf37gB44",
  "key8": "4boXYVMLoaVXhtxd9Ngsnmx3auHYj5PBYcw2Arg9PemihiJvPj5R8hbpYMp76XRh8wwCd1fZJPrR45W8FrQkKnL3",
  "key9": "cLBhoH9bGZFfrWeNdYieC6jPAZYEucL64LmKXyxBNRh3MFnXNkQpyBhREgdNMd8WjjzgWR2sq7nrvjqsyqL8GW2",
  "key10": "39jJGGAzTXDU2GJwxxLEGEFv5hYnKhaC4ubpZnnRneYigw82CUtPNr5QcKXtnaJ2XjUUvJ4QLdKW7FFZiD3GARnV",
  "key11": "3tnNxaE1ab6k3ngApqsgFHnMpSoG2J3Kf7obYFybTJgSEgyyZTnwdPctdEaAqUph5eUCxky6s6dgiXA9XmhFdQLc",
  "key12": "3qmgvB1968pEdNtqY8m2L2PxfW9rxfGswPSDcr8pCMCP7Hxiawyhbj4JoUSTS2LWUTovN2yquS5815vLjVCbuTEf",
  "key13": "NizqQCjhgohTMcyDDk99tdpkqFn3ZsvnHQceFTuTTpYQ4gh8kJwSwasvsk8nqHJW74PfVQWLxeN2pzEeYVqfrXT",
  "key14": "4X2JZqur1e8WRZgRrVuTjy42VQZrfeMxG5hdUhquwTpXyfkqJTZfqm9b4u9EkU9yosuo2rJq1Rt5t7ZJ8mMxhUL9",
  "key15": "556epX2YEmhdW9g1xWFyJ4fwYev8UGZ435Lbq2dihUXk4UA8h1eamd7XsVZ9A6dRn1q6JeWwkdy5yXCWg2mQfsCy",
  "key16": "73cKC84dJnern5BtiKFmvggW1totabwGvkQ6wQ7xFiqMa3ycQ9PBiGrjdm9K3zWmd8xABuNoccz4F2gCFmB1unb",
  "key17": "2wFdLLHF7CW5RqsVF8g3icUa9jPtfvpkXbQ2zGTHqjpdjNWmzD1iymE8E8GZrhB1bCe1PhwmjAT2wUuZairaw9c2",
  "key18": "5YLwXseZskdyQ6Tk28Vrk8TwQedsyceCqnFX2pk5GiKML77DGy6QpDkLBkPF1hJXGe3qtGhrazaN4xcCRRpDdZkG",
  "key19": "ah18R26QgtFL55KcjajqRJkX1a8xpEB1zeSt6SfcN5b4w6HMvzJqZhtvkBQMKx1de5bExopTGoURf2CTcU3Dxm4",
  "key20": "vXMfBZ1MQfWzMJUUcKDSTqVNv2dM67UqeVi3VF6zF7e14Jprt96iKdf8hqhHCPamghpq1dSfpv2xnqpfHLTudVQ",
  "key21": "65uPYi7ozHAxkL3WoMzCA4tWC8C6wZ874ttLaHKtpvmSu8QgAMVAkEESWoXWGeCBUNpyxrhH2iJ3iuPsdowwPApR",
  "key22": "3RGE9E2eDSMwSjTS1PQGDF6BMk31rgn2rm8foSGKXzd4jKbDm5kh8LcEwpHfeyNEN6zYqQ9RsvAGfzqyJMLTgwdv",
  "key23": "2w56h1VmCxehj8f2xKDV4HWX5dyyiEc48EJaeXs8DBP9egrJ97rshR6ipzmLePt1p9sDvm8QsjfB3woLjNsftD3z",
  "key24": "2SESC9H9ZQbBWzMPX8DjYi4yZdhtiynSXN3AaijLj7nPfG2EC8nEVYNzXUSmmSqWUU1vhzthp1x611EEuriYEqNr",
  "key25": "TRyMjmcXS8KgUrYXoRpZBiYGpZDRmao2YsCzEKYkFsUGQjPaRw3PKFyHSK8UqC9BaAJzDMfx2E8bYyrSmsVRE54",
  "key26": "5rWHJPmYW2iHjYZ5dNyCsLFrosjbFDevw1VM4YoncxMRVVTcd3BvqivFAz5H7b5dna9mx2u7HcQKiKkAadnbM3Sg",
  "key27": "4bYCtdX1SGpc4ae1x7DZgtBoMNsXTMcsNbDUqN6UwvKk3c2cEgxcHyfjexGE5qvLa3f1uhwwQ6UK9AdSNbTaXkgn",
  "key28": "2knrTc6PrreZo4S3FwgPD4JxtATCSVFPjnyC5gGtYpDkpLRLz77ty6m7CzvDph2qgYhpzFgPrV6y218hAT3Dr6tg",
  "key29": "5acNJJ4mTpeXm2hM4y7B6KR1uZz2RDgg4KLR1P6W7nBuh8TJQg5x1JARP34F6tYBfcnPbQ5Tr2Hf4URUWc2Z12oM",
  "key30": "28xwKpsKFvgTA5o7JVcMPbNW2H1j6MeXvTZgkV9swtEbTJv6iZiTReeY7Mqicct9pxugvHdTXtVgcsfAGQFsygBt",
  "key31": "2EEKpvPVXNDLuPjuBebyt8fFMyFw3zSRKE96KQ1BpyNXDBgjFBThBkHZB8nsD4Bm4MtuuQnPYnZtArkFb7E26ZWQ",
  "key32": "w7p3GSxos6JqDJBH6cXupcqGMRi8uT8bb68qpxodvT81j1giPGXmdzUP2tpEoGV2kYpWTx49NbDqECAneDYHY1i",
  "key33": "571fHT5wpvA7QGqUye6PWokZJuzaRJZSQE4LsxTtzgdhsiPnZ78ngcvFtCENs9wAL4xHp2DrkqJRo1L2qrUDkBW3",
  "key34": "3cMyuiLMPvxzoR4zxSop1pzmX5h2HrzvKe43CNNGne2juzD1VhKHFYhHdMmymFBwCn5WBKvQGaKowyJ4PcswbY8R",
  "key35": "RvT7pCZr1z6ZnjDi4DyhLgbN5q6EmGzbspJ9CFGcv45idVg6dcnfVuULmt7Swj3S5mcfvXYRye3US648DfmyX8r",
  "key36": "3rQt8UE16iD9vDZYyvUDSeNetXHi2Y67ZxWjHd43ExWn1P4C7eZhThiaEjakYMzKY4We5XYvnGun39X9JL7eq4xm",
  "key37": "j4gckCS883LVuKFxokEHaWWrLZmqBbLxoRwCJXuaTv87KGwRa1GuCnkULbwr7nmF6GbAumw7zMnrzHjX4Xq3JTU",
  "key38": "3r6Hnj1dqE5e2aEKm2jeM8Ru3MS743ttrYTktC6jPoLMeQhjgpwtRnu3cNi41skWaL7qoR8vTMwvkFH9gaYf4AFG",
  "key39": "Qy68BeWBb2Li3Wro8Ydw9jgpgr5ta1xQxKVehurJuPYLyr4qKRTLNRK74Hn3iLAY7iaY2PXS2VWXe26aujTPNEu",
  "key40": "4bif9WhTq3stqo4NZR7bhdsfNn4Wwr1bvak53W23y6ehiDhP25RZxGTzoLcqcLspahA42Tn927dZroNZCpa3CEMv",
  "key41": "JYuAm3HnTZT3mc7Jr7RjLbFE9YYBo13Y9xJv6Rz77DiwMJV184AL2tiyT2am7c49NJ37DYACwwksYr9wLPUWBF9",
  "key42": "55UUwbYWjRhK6R3ePo9G4VguaES9ZoAZWMAWL9FeHYFRNZdpiVBWvKCmEojPZBeZQLadhTanqg8xAFiM6ccQuhGp",
  "key43": "4rTzqPKQCFvdqJxS5mjaMat3CRwd9nwHCbza74T5kw5uXimVmuFMenrWB7icWuh3nyXgcTMtuwJg5uBM8sHpvcJq",
  "key44": "59yfE5R9vN1o22b6wKeEXFbUCdNPpUd5y2736pJyG3r1MgrZJYREq8cRrFXnuFg5EnpABeaqoS7j5g43YcX4ckvC",
  "key45": "3P7F14yGQ7y9xgmJsoU1aaooyNjbSPVWhvxujtVeLeWdhAJQgKzqdqYm85GW28CVHUhVx8Mnyg5WQng8ZBvWjyE7",
  "key46": "4V5ydrh8WW7tshzEFfS1c4HGcj2FNUmX49oMuezqWVxCB7oy6XzAP33UQ8y7mkcZwsLNE5YN7kHjX7Wn37Za8NNk",
  "key47": "2ydfKgkaRKDH1dryEBNRWoTxjSfFaitru2vspMWzHc3XsH1EHeA1VTGL4aWHomZzfMkKLd9tUcRiF1MzN4EbE6GT",
  "key48": "2xTaDFr6Gygo4b8Bk5M9vL7nEhXQbtwcPBdKWy98pqsfMQgqAiHGs61tfZtMz6CRba7hiSbkpSaNy5gmV58xpTfr",
  "key49": "48F1i1coDjb58CeKiYKx7qiZuENhQ9ZD1RHC4b5R5xNmnamAgYDSmHJmYwsbfuehTZ7YpPTRgzzJnMP9im6dHHSQ"
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
