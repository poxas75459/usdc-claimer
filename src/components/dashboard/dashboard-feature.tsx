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
    "e3gLyQqTDaR3KJagKq5p9aaL8x7WNhKs9Mh2N7AkKfvJPKf7Ft5EKMpxQsRnZpXBC4JWXtzq6u11DQNCEcVCeQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s6wg9aD6mysXonNEWC5KsqDpEUUiF1DXi5bUkpn5svdHcaUqSyt1cXYMmhwbAQEQvAgvTkMe4xtDa3dJNLWGBpM",
  "key1": "5xuRbrQ6whBTx2Bdzibu8kHxbohd32DZ9PMoMwnacvh9JZs5EWAw7magyj6Mj8ZjjdejejwJLjNvnrSBdS77ttfY",
  "key2": "4vYBffFEqwiQ1c9dtz6SJuc9UMsjtPFMV9iDqBjTQvbPZfs61ruB1Rr3MR9qtTi5JvbymVs2z7SEUcv1hHmMDycD",
  "key3": "4DxNA26icj7uoXtFUtagVBs1LrwQjpuAbc2i41NXSd6WJRhpRFgZm9B258TxB3owJYaQJKUBWmMyMB87eKQL4wbM",
  "key4": "2ijYTiUq5Fyecf4VuLJpzpAqFfz8rfwcW692s7ywmfEeVr4pnBsEQ7nUHTkUe76Pt8zA8cgEvUN7DTVWWMQotECh",
  "key5": "2XEty2hciu5vjgGRrYNjDVEZo23JAyX935x5P42a1YeWJ1b6osBZh7pSccqPWR7y19WtfhrUYMgAtRXiaKTdDVDd",
  "key6": "2G8uZBVNz5px8GksfhdGjR693DLpgUqyREgLfXoF3qX1q19BQtkrj6hcmJdtnHqUgEejunqyH1tBMpnsf919QDvb",
  "key7": "5DMFTPjQVFh8WdvQrd7PM46T7K99UVtW7KNAK7WxWwbTKdAVZzUo6XfpxAesPKnS94XcCN9epTmzdbQpHSpKAVED",
  "key8": "2HLknaxmykhooNvXzbTfFXF3t96ry2iyguZXPkPZgph67e9Bjq58EY9yXei7YNASz9tyN8BsR6murmaETJAS4MPw",
  "key9": "bePmsep93Azwgjxt7wYiPEDPVqCPDitEyL72hutfycKztAmWsW3cRVxHcmdsxrGnHAV4CRhVNeLpx9S6YJjLRbs",
  "key10": "oJYDt7pwrNNaponJ6MqPYKwQyvX4TQH3N3EhHHEVus16ShMVDAtwmTEnFY5ME5FoGo9QrTDeAGXGJqwxmL3NxZd",
  "key11": "2ToPUR9UZCffCVcbZNME1M451HpPzy7PAjifh2GafzWD2WFPGk5kqNvHSchsxDGNnfZktQNdqA5WqP2o5kM63XFJ",
  "key12": "2Eomr2v8Ct2jQu63qXWJnvPCGEQX2sqvHU7HgGhd8X1qNjyLiHtYQYk4zYZ97Ew3dhp8SjXeEwksS3CPgYTymkSd",
  "key13": "5Mfmto4TsARK7RYvddxqxTu4Z2hv5vZV52XHvQm3kRu7vDzFsGt9H6Q2GyR7Yy1F76vuCSx5xC1NKhNe6SaBcbfk",
  "key14": "3EF6W2TK8sa9Wybujm445LSKqKZyjJesSeytFwj2A8he1Buskk752fBADi2HTxaRSpRRyZGz9E8X9yNio7LaPvbu",
  "key15": "yNAvJrr37rTDfMNWJPidpQ2hGTCwW4hFghTwWVDUe79Sm3RZtu2B8TuGuBKQYZxG6hrf2YFToVdoG2LnCGgY2nq",
  "key16": "2cePBs1RkeSig4zdhVU1Di2t1LQry9ok8M9hz213SKPG4Po29exhZvd6VCA6bdfQ4efjdRMpJcjYwUrYzkbtNKmA",
  "key17": "dfCa4j9Am1JKnbirmDW9juaeMmDF1DTrGBMSnHadgGQjZBTDMjcEwgqoc2rR9budmwWjZfKKLdo8KXQG1fhE1qC",
  "key18": "2Tn6b5v4Z2QhQ6jz7xmL7vLM8QLnfYyS4H9S4aSkqUArSsE5WfbNZZnaAodKowqa44fjHVyMzrz3wupEexp54Vv3",
  "key19": "RawhBin84uQRxFNqjuveNJaYSCF83MQQF3hSSY7WWKgxYmsbZ3zmFXSPYRDNEpA1q8fo9Js3QYwEVss5iRJPjio",
  "key20": "3GfmP152htBNMvi1hw7atyWAHb9Zgu4Wp2w6or9EuuFvwfbsEg5ycgse5FWp5P27teMocFbzge3NyDq3ofAUHxtt",
  "key21": "2K3N7cqp6qGa51mnkvqcXdRKZV6rkcmQnwpbCB45tQPnJrejRCYdHPrjFW1Fdbg41yV9vnv7tidKxy1QQnx327TR",
  "key22": "4Mb3CppPPdzaXk5qw3XTBpNUd6wy6ZkwkeqMsMoq4PxBsGuBztsxtor54d1nEUMnn1fD6KtqZ9AL2bWizjnhdfkU",
  "key23": "2smNfZCLob9gfKv3zcthsY6RSjuLE88EUuGwKBcWgQTi5jriLExZUV5nQz1EEqLS2gH9tcF4yySeraxPDCuoox9G",
  "key24": "5uusL4wxd9byWwaF2j88L5iSgx5SpDV7uLZwYz1xxAkmhoEm1XqhqRjbJRsmY8XaFLBmei2WB746qGzUvyPmoiBc",
  "key25": "3ohGuWpvKf8c5KfK5zL42hKQnrnkuhVjWr3hpCgKtkpkgfdDLhh6UjdtUdSzbYCaEmi5nxpLToaaUDU75HwcJosD",
  "key26": "3bbU7ZT1aEzw64ru74p4Hvm4r3uc1hGXkJQ4VoQwjDER8YeQEPmZFnB82cNZ9NosxbShAxAf2QzxtHahXj41NuLe",
  "key27": "25B6LKkjKgtdfGsahTptizHuU7FCDHLMH2YcJE7iSr1DmFJfiRGGhUW4v6gSxuPcrgfuukbMfnw4mfnYS8c6mwsS",
  "key28": "35vXNSfHUwEe51RoM8JACZgUmuEhaxqEprn39G7ieNpLcReV7oxvdVZutp4UdqxrH1i6Mi29oSFN8srPrAVYkcPL",
  "key29": "JZiL55qCYMkExhWtmqaXSoWov6UiJjnQNFgNpvWpbE8vYhBxNAZxaFDmq3dzdxP3V8W48bJis9DijvkCYk6EbCa",
  "key30": "63btxfMbqwYa1TN4SNkhdSTHY23VUqzgPVAofXTdjD6qzKJfwLoseCARTSNkjULw4RhCDcJAJnBePuqzE6TaTpcq",
  "key31": "Tp2EDDmwTXFXLdLSGkbAnAX1tVbdfNsSJ8JXSL7Ewg9RqqSSAGbdXxf428DDrKvUsoZHGPmPi2QQ6oSA1UEhsoK",
  "key32": "9wboitvxj9Spph3PWGV5eN2QzWE5gXzdLvws15cuz3EV1haiyaSeNXCPEixhLL2QFwnBjtGj7t48NcAxpnuGsri",
  "key33": "64epqfT2ABKcG23N5p37x8p4jD8qKVLQz8hjooRvQB7XCi5BJCKLTo1rjJqXe5WraDmcsrreSE4JYzoowtpMtp1Z",
  "key34": "5C8JXYafgKyQgXoDjyx1RQWfpD44nftBocCJrwcnJcWD39VAqBVbV4KYmzn8QbgrwPLvGdByAPfXSb3mvGuHDhq2",
  "key35": "5FQnNK5UDXYYJ3NmPqLPdi3U7FuLQZDJXcyF6J1gSqqZ1mjaeuRhbTRtABkjhrokBGcokWXBe78VcERhXXo1pfJH",
  "key36": "5uUvH9Qgs2DT8chNZpzjGgVREVFyt7hRZNTQqBrKJ4tVj3XTF3XfbFrwferKa4fdqeeF6C9EoUZRNjtdx9NaY5tQ",
  "key37": "4P7WBWp1FY36WyLZ32po1gD8M9pRRiYhLGyvPNaw3mAAJaJtyEz5xsmeDXJeMXCPP6TdzbDsRNYhTQB4jxKMPCcb",
  "key38": "G8WGyzfon34SY79Sw7RTXEXsDav9dzd3EDwVQSKtf949NRR1wMVzQQ7YCtWQfForE7oG3cuDpJEJt6FA7stztay",
  "key39": "3xLGdHE8kg1i9n7hWjaYjPfvuqDMgWJ1iATZCknuGzhv2L7DbNgjHg6eihEUogPVDzk3YQnYyLECbkdWWmxAkRw",
  "key40": "UsTVR3B5D6tfe3mcHV7QS5hMNFLARFcBWVWHBqD3dHeXfwhb6piDE4nAL1ctiV7vU32Jjty6mcbP75jBEN2Zv2k",
  "key41": "2RRL1h2T3z4jEm14GQwmF3WUMAzrPUwRTavUhMZVs461Pg9CkM6NuQzAw18gNQAcDQJ1GH5rTBZA4nLcRfxPdpHK",
  "key42": "2nvduebbzPtg4MyMqebo1eDkCtnL3FJmFPpVavfkjKxphZXZrpFo7xL8dMWPhYVFmHXH5xqb35ndNfZbBAoJFcHi",
  "key43": "2s1yFLLEjHPWZJeJMnJjuSniBXV2iczZNMnzTqcTEV77fYkeDUtrjmggPYadSKbH2FrUL9FPaKaKNm2syL6Lw9Td"
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
