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
    "653N9CeQdYBwVb2Yj3h5Akg3WpUxZG24dWnC2wwLRVT96CGdoJ7s7zkadC5rT4QnMN3yopwqGM2VFjn79p4ideEi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V18LrapVeMuzEWhEounXbw7JPn2nRF4UanRW6Peu7NzN5mLNR8u3nLQxWbKijcvJJDL7NrwJphGR6THAmVUiZHf",
  "key1": "HuJs5jywFoimhkw8izqZeyocSSEtNEsisBnTAFQNSw3AFTpG4xP8enaBzNnKWZPG4VgjsY1z18B3ZFZ77woYoFE",
  "key2": "3fMBXWSeLpfFqMDj4v2RTJnQ7vuGyjz3Nkked6venkUbZUEa8neaWBZhbQV9d2hii9Uom7vnHT9u8om3y7RekmPP",
  "key3": "erQmV3ZdfKQKtWqNKNs6dLhcnbvT6z1jNi7UbLoApMZ5eXk8s8aJABg71rwyNTrJu1azLyMYDocm7tY4eUZgPwz",
  "key4": "2dHCrNxiB5zxVSnNfjyEyiCD4hYMgVKnK6S2fWQJoegdKVsNV2qTPmLEe7eppW9HSTCdnNZPZtUbGAwMBc28ngoN",
  "key5": "2bXJ4EyLkDi8cA3962qvHygibLv6K5QKYRMJyRZ2P2HEaJPBG5fWJ8tGTyH1gFDmuE7q9kw4BCFVbmNMyvJMU6kE",
  "key6": "5sKUk7pF963YyB6JjCsneM1zggVGXtrjw4HvN9RzzCtbFzecLMDb7mVXm6bECz3NFVPrLh5T8BytRTyDtPCEcnSW",
  "key7": "GRMqjCWSMbxSkngJSY71moVAsBY24hHhxUSnmgsUTDBpBD1HpTWVmvYMFMEupNJ5yvChuyzUDBsdjzUreACGnzV",
  "key8": "CWVmGX5kZ7X28yhVu6bzSrNrsfC21M6tzKJRnfqx2gp1LKGstULsN1efoL6N4CynLBmvcqFzVq3Vbz24oLYtJRp",
  "key9": "W2u8XKLBX2mPipxUJUfDAYFByHBukwQ93fzkeKdndVm23nxBmyjQyFXV397tD3pg6YWLhqyviwzCUjEmvjTMjEr",
  "key10": "4SocQqEbFjPDGQVeEhodfUMwgmnWjxYtnMh7E8xjHwawvEiQGCtwsovdPrpsyErDtPR1a2xKskykZdHbwkKJ98zv",
  "key11": "2dtxsymrG9mdzFRdmsuwu2kBxAvupxYk3N2gJwT1Te73Qqro8vSrRvRHhwCThGbXpVH4ES8WxJzEPo5Je2psp9eK",
  "key12": "7jnHkwbpPRyp9dTZrDdgLPVh5TLgoWBEMxY1X9hGPcxgNR9uVjniygLzf9n19Bsp3GE9bdirNoBVR21xnbhKDaC",
  "key13": "5abWGZowWUkjt8NcSWogv9xkyoKkdSL5vgVNYLGJ1bL8SdDiNuQMuegqvKbAx4hcsD1tZKnNt44iQHtbWjn8RcLt",
  "key14": "4rXZsiFYv1u7hQtkMfMwPpYNN3CZpycRFbhdryfwVRb1xMWyWe112KSswTzJJUBwV15e4mWM1jFixCfoTkeKz1wU",
  "key15": "xQ2qw15gKQChppuPaFpepZn2faD2AedLLFggX7Vg6WE9XJNf7gC2qeuUkPYF6pSC6xn9ibng6cN92na7aBqD5K2",
  "key16": "39Zc5dKg5BdwsnJbAHDHjFW9Jej5AWMvtxq55xX9jqE9tYrGxrA2SLkEjb5GfAaFrXM2CY3jidHLSiuQ8wN946tt",
  "key17": "34rVyVaBx6fABfBTUbFbQfZjrw3hzMmh2n9fT1rKQmtYiaFhjznkcN9NdoZiuuyssLksh32b56WCVjTLrwgCPudb",
  "key18": "3VjKnE5PWNUzPchmJ8PY8TpsFK8RxK6K546QFxM91HMF1ubXCHGqu6bHdVyK4r37h4Dqk4KJRtpedtbyXo7YZNof",
  "key19": "5ep3GyrocDfpuDLzz1XGGNeaJ8s6MgDgBPC4jwBBAXCNQ4snUfvAPCx1T8jk5uNFanYGTrNWqUbWFZ6bmuH7Vq4A",
  "key20": "5HAs8iEMi3SMe8C7B7EwjCcFRaNjsUueKTN8zNQSBbrH4kMB1Sqj7754mWUSymcVtWXCpptWnHgSPvj8wrnNLcAs",
  "key21": "2TsytqDkfUzRfiLTAXSBykSDVcvHa2ZZRmMG2RoW2sHbkGDnmGviamKiLhx8Nh3idMoAYCV3WA3u8uJZD8UVPefx",
  "key22": "hWVjup8WeFvm6rkpWxLyyum12y3t9vEauCPs82uWUn4tTPQ6ad7NSs2TNi2Ar5DakxFQpHn7m8oCYsdvjMdr8ro",
  "key23": "3PB2MLtYQGx7waGA8iJo8CN9VkbNBtwnvD6sB8xuU6oLvR2nYMF1ih3vanFNbyAp7HgU4ivqwGCF43iZFhuij3at",
  "key24": "C8KbAMYwK5LektN2RAZotS3dmpd4r58jUKH5HmYbUtCJd1zzfsERzZhjtLKu8pgGyXThYQ7CinM9s7mPwoixUTp",
  "key25": "3hLr5WQ18y4EKN3zKthREvaFMR7TdVVqLobtxNJgG43ReAXeJ6Jm2frVER176TzrsfmMcjLkNJbeTbwWtYSLRdDG",
  "key26": "vZ6sb9Szu2CESm7EEYS3UX7mutgZJFJWLKSY6QSpUiw9uUKbNr6GrbYVo8AUZE2ZCLymDVH46GGYyDgRAWCYSPe",
  "key27": "5J4DdEex93TaJRBHzMAuZ9zDrGVFJMFGPvKs68qa2Eq3frxhZVt5YGHuzsV72tmEsT7cuB7p3vxefgY2ynAYXywb",
  "key28": "2JFzm1hSCdBnYtjG28m1GvHaYGoDhsyUGJtvVXuUD4x6Jn3nu4CJjLxkAThk3YAeaEZKxEd5jbQyraVtPeakTFM4",
  "key29": "5wjVfQi7XfbkfivphCpaNvDs6A1DdBPexvgpKDYeqYyvyHQfSa8R8PAhjKVjx4Y9NoYYRQNvXN692oUMzXaDbimW",
  "key30": "5v4ktqo68WSP5FxVBN94x4sC3L47Si8M4A5DvEoJTdfbXj9AiuCzSuaSciK4eSPNf9GMb9QX1xHW9iLCFq9JPq1D",
  "key31": "3Mp5xtVq8bf9jEKaWr4evhZ1NWNvXnjc6anaRRRZeW8PxxhdXeLT6XkqU4qV2kSjBBYmoBb1m3MTkR5N32sceF49",
  "key32": "3xZjR6X2TsvyHBpKGRdfpiDN1xLoN2jq7MpWcDBcs9mvwiS1M2i4nfQGp7Z8H6hnAAVCS8GgLBKoMGnThMMpAkZp",
  "key33": "3G2MKpHoeLzDBS9JdEf943f1pPYQudw33F44gseJhRRDPXuV5E7gxaSsoHzQojKt5ydpnk6gANxU67vDZRSpmUXU",
  "key34": "4akErbnfNZtCdVpN6ewoU1GiS2589QcHgVmQzbE5t2CX5K8aCsA34QG7WmyVAUJvp6skT9JNHSM1MCqVCcf9NPw8",
  "key35": "4ZNArjNZEmcVdhFsbGJBRTGSzEyLUM4rbVMshULyVtgioqtVDUDGn2dAaU4yada4yBMAwnASFXv7L2MnsNHrEi8",
  "key36": "3ccttZhkPkSkjE8q79tfn2nszf3DwNRAS9QR8rsYFf1nTSzgSR7DSq28zhc5dNM7RTjcLFqpHmbfesAZNGziKJdS",
  "key37": "2Gm7ppofxL943RtFKTXJ6yZdYiMa4M45J1MiLW2NVfPST9dCNP67qujo3RqQL3hPwuBRpeJ3CmwtYSRiwcySdbb3",
  "key38": "5tRTiPy6W8J3vDo4frpxTkVx6BJTrCwDVrZDYNqt1Dc9dhnWN7SP3izCp5eo2ztww8956snrr5baoYpnXWNQGE2Z",
  "key39": "qK2eTHesrgwVuDHJKDJmqm4vNzAnt4HP4LP5n5KrJ8SYenx3W3LzU4A8Mnv5rpMKHLN6XyQYQ3QKWSZXXhLeD4z",
  "key40": "2u6U9c888HrBXUnVYcsLKayxhQt6sLmesXNY2o7t9AKkNUodAqhmeG1zfoPVi3NDzzUcjfz2YkhX7hQMbnKVTgYg",
  "key41": "5bJxX357tSFSBqhjyeSNRDBuauu1eG3JHN81Nxo7U765RXAGJLNCXJyN913q4wmTpPaFbNZAZ8PrY8N3CStAU172",
  "key42": "5Bc7fuRr92EYaesHMetWpGtqTohZTtQxZ5RgnHeRXGagDdBDmK7itVN6MP1N4dS5JTfhs5VsY7PksNaFF7UpRXmA",
  "key43": "4Nkf3gX3EwWWD4vio5HR7QMfZzV7ePczL4jEbhemk47FszGarWbgZhXFEJqWMcwppe4MVeAKnuL5mA2YAEBptruq",
  "key44": "4su7RA6ZhgPFnrLRQ5Hv92UkjwWXVSkCKSTRnuieqYuVKgticCE6Dwsrcdsou5tCxKCiEZppvEKAZPaxqrgPz3nz",
  "key45": "q2EVhcHrEKdboPrkUdWy2ByXsuaba28mCYtgFNFddh33f3b6yXgWw8YoTT1vmGDcvJFC6pZXkPpd1Tt2euECZS9",
  "key46": "4Da3GWtWWmimxoCwaghUqrEs2BwjVSn3Dsgu8GSM1P1KnkHEw1bCxhjrYpiYikxRCkYaZPRVcVsxKPsmKK4M2tyb",
  "key47": "4UNxv5Kmuj7Qd98rq4poFH6DrVJf25tTEXHiJB57opYLBnJF61NiDjJ2rPewW4Qv2RWKytosV5Y5BDXgpErDZ2aN",
  "key48": "3yaS41CkV4bZ4BKWkPJv7ZXikvm2UtrxQQADnwxh68CpdhfGGrLDqVeZBJvaPRS1exGMiyfbiGZAukFuNL2zjHQr"
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
