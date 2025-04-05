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
    "4JAXcdVk8Q9qH5KvrvTqCSGDN2uEMXsaGo64spub7jify79UPsN5UoApBLDUqmzB8HBTXho9mT4XKVNDGBYwzSDL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DocvB2szGLHnNRW26gkVQPhhrrfGWGrgAoqiCDJ2YH5EUnVacoW2tvsQi273sNzA6VjB1yndi7mwpbddJfRaZsT",
  "key1": "5jgZNDim6HuyggEQ7mBZRyUK5bir26wqNmX66x8oNRgf48LwNYtUdk1jJ2pfenzwAGXsECUZreA84HpzS7sdBHpS",
  "key2": "67pwE3MxAQautjxZHKMg8v4jM5TJyVqaZhLy6Q5BWb79FkeU6zY4w9wSyMNZoGkqwemSPUjiMcTStknvER3emdUH",
  "key3": "58tT7esK991mLid4rS9dzqCdYZ1TVwfRa5WevJmk6c7xBNcfxhMVCEKxa5ST6KHuHZdB1LYcfG1zrrwLhrCQ4kE7",
  "key4": "2ifDttKZmuMXgCnwyqWjvrpGyj2NSU6DRrvdpqmVUx3y6154sTdqE3daSFBE8f5R2FvypM5UeZnxndjcGomqUAtK",
  "key5": "4BePhipqtLw5eayhTR8sHdCFsjRGqwXainysevrRtd9ZmgAyfQ11EwoSrdzgw5QRMe5taF1VQ2mL8pifHw3PCjdg",
  "key6": "2njAhK74zby7Bg8aE5GgQn5PgVNv1Ed5BvXuQTf83ox8gst1sMc5feBzwFfH1ieW7DBRBSGVJ9Pt9Jnwt4kB6F7u",
  "key7": "2XfDv97eXz9LDMdJDpydFffykZTDDGxfY7hLjRczCRBnEXu2LymhDqiEtR9wRRRZyw5SGkvCmRGhv4bomsUbjtsC",
  "key8": "3tsoyYHvY7gCLn4HGaNn77ubqmqGhrG8fsFGnKEE2xAA31i8NL7r2YnHFjy5xEVe7Ntkyq1MiBuZuzVnWkHDvTv7",
  "key9": "5fZm9XmPzVSjTvn4HJT5o1F34RskTkPQkZmni9jXWJG2F7AT8NF45EuYABL13kbfrG4C9eX7a5VYyWv2DrByJQLe",
  "key10": "uTNqxwvDQZSDb8mLbogZS9c5kWn1YSrTkKS7yDg12j8ZfVH2V1JwPJL7ExdLq3iS3AYCZr48tLKtvFg6vrDXySt",
  "key11": "W91SfeMZ4MDUzFH4PN3LcSHCEExutrfPNPD3NcqvBd7wqCmi4jyryNT42BeEmm7FcZnZmHV4wssqAetLnABFxjY",
  "key12": "2iFZkxC74y8wmpgbMgtiGXHCo3GUBzNkyKTGTga77zCWHz92PYAVxkgd5GbMrgNqmRL7YCcgbFctyDYAncET4Z85",
  "key13": "2sxzwvZ14G7xwsCP9JZDedKqSZeuxDNFbEfTab9DyJJZBjrxq2P1k2mLhHrBsCLHb5WBSco67GWPE1JoarZXnDzK",
  "key14": "4Tz1LLeHDFpzTALyt3p7FLN961GpNXR32v8M8VmCWV8PYqQ4FhWzqXF311WfkNBV9LE3smTpH9sqP6GEQYF9hrJ9",
  "key15": "4kbuAkNdhXqEGFd3h1PRKpi4ZDBiRK9RBEdP5trh5DZycS8jj7JjYoxjKx5NvjBbLZ2EWgawbi2v4FwcvBwTuVSA",
  "key16": "4FW9Qncrpp3fUXbDnGuiCiWuWnHGPnYtcPMjdPbjmnsFDip8QXE3wTNqkWA2ErMCpKcVDLjwYBHE8qzzTqEN59W6",
  "key17": "51oEkLuNSRtcShidGdLHmLsjMReJY3yt7WoekavbQGzXKk8PBmgoXEMpCN5KySwRibaZZnmbjmMuocjgTMq6sthL",
  "key18": "39DEhysvuuxnKjefrTtQ8S68KRisQsoWvGibjDVbd441LAx4BhshAecnJo94nyhwKFXQC3hGvunjQfXg2fHiewJ3",
  "key19": "5NyMoZGHcFtAgD2FPphyCNaYscrGr5VVJKbHPWpfiefWcb9S8SK6LPwk4dfk8ExZNu4mbpgXfEvQgWTLZY2xe7Zh",
  "key20": "49tC8e9P7cdkKU5MHiNwTNXZ4V57mzuraFCz3FiV3UMvqjaaBYW9Ksjn7Wsb93SLZyxPbqhLzYhdM75YBKUMpKgc",
  "key21": "2JACcy6wNS8DFu3PegN6x9uMcSeS5mnpZE6qpD8LdnTtZt4xxc35rRPtGLbUFRHR33eZkmrYLuieydL8cuWEunaw",
  "key22": "4JSsqhutyZANUysUsFEEhXD7cPQ1AGsPr7QrKKyiwiw9ZuE4BBWe9uoyEZhRnZyQFBDos1mvCypJE2VhWucsvhYY",
  "key23": "3C1tWL8iWkrtyPk3u6JDhCjAyPsikipUAhdzewtdKC7tbeYqoKaCiZpCBNQhYhQqBvq4PtizfApSiW1sGDZYk9An",
  "key24": "2cNYp6MPtjxd2DehkYNK9VZFcUUmZxpE4Ah41AT9G1nK1j4J4c9qBBtRCsHjvx6WK39UeXaKNUsFvh1igVkFiepK",
  "key25": "3bN1BT2a1Txt2yY6F8tgibFBGDTwDEb7SNVQZEVaY5ZdhzAwjYnNq3fngS7eGTEW4QKkj2VKnWhu397RHikpJ9L5",
  "key26": "2iyWbGswNpT4GiLNiyZoSjqdAEGgsvPh2fTWTstiuYHX2PL52YR8RAsBMkkYBC4YvnCV6NekH4ojrLAF6xdqMiZ2",
  "key27": "2rz822wJ5yv417ZRmNLCjo8Y8fWgX29HRfr2pxnipuArJP34GXmxnozVoj6PEtGrPuSW2Jrtd7vp42UW8US1H8qx",
  "key28": "5a53yKsZ8nnEoaMrGVwGHLuYHpdSsztk4HdxiAWG258cvm41DFro58LLCHYKCCVmgpG6KBW2Pi6jaNLHHxrYYXqs",
  "key29": "41jQhXByeLiug5md6Uo4VDiDv57osufLnCaByAvmvBxLffW38jZ5xfx1Thp7W83p3F3G2sCYq47cfvr7H1YqkMoN",
  "key30": "2buwDvVYM1Bq8HX6sEDnD6mGhcQ9AySTQdAK4C4hrPnUvSpRKXTBN8koPEou9xXMWEvCiQg7nX7XpXvT1ZTwsxDi",
  "key31": "x4rupWevzsoiT46ZMscV98Hf1MGZWChyWpS7zowzNV6KWuw2h29YkdmR3pcoZ35H3DWLQj73zjEPMVS4uiMZHT9",
  "key32": "3Q1dzj4TZNwmFqZFiusqdbUcRP11g1JQrRb2ot5fupnHY1vFba78XVpHu61yPF9wuvk4WJp3UniAYLoaWLYfN2fE",
  "key33": "DRjab7DoLcrsioUudh3RwNL1hsH39vz2x9SjDCPH6kDFJ4TJXd5jgQNmAJEXDEgrxsbLnoB1hxVZ95vU6jsy4jx",
  "key34": "qUc8VPMZztMahmZdcaoFiSyEQdttG46uyQ8yKNiK6C3vjvi9cZb4KYQVPWuBz7rfUWidxFTqHJZgbKHQJuycXC7",
  "key35": "5PRLFuLq57vGW8U6N6N16BKEKWZp7P63aoWe1MxbsTUvAyvWTp4RcQP5DGBS41L9f6eUwp14X7WdBKNKZKp5auLc",
  "key36": "4KTSQqvSZpEA9V5U32voscWqLTikdMkAkUx8odLPe5suVdCD1H4knRDrE3HyimXGpKrLh3XaMYqMR27LhsFC1mLH",
  "key37": "5j5U9QEUFFrPLHrPqBjCNFgZ9EmcbrM9tqzDqi64fg5RbXemEYMudJWdgw2geusvETfCLX3EVz3CUj7xRM7y5NNC",
  "key38": "kwyb8p36tfSEsTSwAHHZhu1L35BvAT2qDCuEMfqVZSyAwKKY7Tj8BvKrKBpcpBR73RB4AT5dXAUJhwS914Md46j",
  "key39": "2XmhS23ngQGAyckQNpAEsgjGekiPrh65LAEUbyjdwJeJYYXuNgTCU84TpRVQDTH4VGA1iJnMqi9MD5vHq2XhQRN6",
  "key40": "5aV3UdBfgLvhDM9i9dG9pGLT6GFXyb2wnxeet19b7JuxjnoimZyih8Wc65kdZehVBhQrRwRMvEz3XkLVquuHtXF2",
  "key41": "3pNTxR4ren9vstvQzj9cBJsWUPVRkQX9RzMggskFU2L8g3qdnb5qQWUa6hFnrB4JSEE8QjNnF5kXB1Fwn39Ra75X",
  "key42": "5D4WpGNmkUS3ym8zLH5MNroRosJjUswJgY5fTtSksxuVUDcdGeNVSAgCsWGt2pKHrYqQuRtcmnNBPW7uiDi9vkEd",
  "key43": "54bk5yqNEyNKjXhjwDZLBgBSosf1Mrk8WrqeiZ2Wp1aTSSmYLAptNN7Gf5NoGDBaawsaVfGM8pftygmk8QVWmxbf",
  "key44": "4qZcx5YH5J54YF59BQJrUHxEdzuUG5PEchPCx4otjZVQ85CjUa5yTmj72GvnQmgoFUzKmi9WGRHabuBi87KGSuXm",
  "key45": "4y94EbWXVFBoQqtKuakgBB54y7Vh6kmTC4SXfUDDbE8642tu5AgbJSCPtp1gU865tpYbno8XDztbJB9Ms5pVTvQm",
  "key46": "4kLqDtCjX9Wxn76iv98efRqWNhTdNSYU5dX3ktds7CTmRVMHe7AY62GBApkYb8XU6HpsG7roGvdMrKXooUbSSBVf",
  "key47": "34yzZRAsrqiCwkzba2N8CqThmkrWtkSsciohGjCdXwvpvNxMbEioZCXrExuaUH4mdT4U6YVqRu4jBFEf4axtSbu9",
  "key48": "3eQBW1sSKGJWAmwwmCr1MxmypEZLBqz9s4CojeNsCvxQXBt3jvMXga8LejjCJcWw5hNtKuEW7LYKwV2tmNZYSkkh",
  "key49": "5zLcYsV9mo6itNaF1Ai8qhxa8hBcRvXVVme5Gt6eXrV6c7ix21MUZfhauzG4mnCwzbFM9skwqzNeVBkTtbHVn4LL"
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
