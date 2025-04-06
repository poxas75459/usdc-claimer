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
    "2dz6jyFcSNQp4NZLhiZqacBb8N2cQEoUWHwGgNxhtFmRikWD9VhpGZjeQzwwDpCnSyk7Eyx2ckDwuSG98Mj2VtjJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JmzgpT3zX6Zq1tJs76ASTddtKBCxhs5PGHKDS7FA2x7uYxkUxkQ9k3f6acytCMFHPmgkWp9yE4zBZ9zMeZMeXBn",
  "key1": "3dK6nBrNXoqpTb3z1WdGATUj1J4ZsJPQxFQcbsXXzFG1kn79SEvuCY5wtfRdxsfEvQZ1peu3YwpH3KvRn3iHwJ5n",
  "key2": "5NQHJaJD28CqxErvMzFC8uWYD5aW6koHqMzkoSqEZnzw1LM4yCDwo5Adp7xoSk7xe1KT4cSLMj7e7XeWyEgYREHn",
  "key3": "5PtuHijBoB7idKLNvGYxjr5npcjW1iR6BTo7NzRKN1QuxSB3x14mGsubnFJgaJNU8XgtbqGtphtVHhjDQsd6GLYH",
  "key4": "3MiTPHeHgboX59s37hBqH9k1BYDUwqRUQJ9DDd9WCNmP2oKqme7CPpYRoMYmogWFXjbooWNJCLX3r8bKso1wM4Wb",
  "key5": "51gYJMwtdYTABgw6AwdpPGYe9re72YxCyy376XA9CMWxH6hyU7YfALvG9sZMpQ77ynpPjqbpYJgNfytQyK2sYsEj",
  "key6": "2wxBppDBvMEyCFwuKTY7LCmRLFXKryf8uqHBm8TrRbFxsEdBULwHDjwESRimWQmqYnXmnWkedSMuQDDrd3sZRnhA",
  "key7": "2HocmHmypzhBYcvKmTNvfcxB4PcxmDCeeoe2EpaQmnwVNfsiAhWPeSbFJ63DsEhLf4hVp1aqn5ueen9rnruNF2UJ",
  "key8": "4sg7xvWRp1dbjiTqasz7U6qUf9tjJBsQv98YAyT2UZrhSiun8EHgd1pmuH1qD3LZwgnrnB4BDhCwcRnAYWo3teqH",
  "key9": "5nSMTW9VwYbEE9yjeG8qNQH2hLkvLfHqZ8YpTKRrfenaaGZbMpQXMuXUkHX6u5qHJvRmFkHMyJueXyDae85R5S9s",
  "key10": "4jfFbxBPDzQvLMVWsrsabKRBqrttjgwx2pbccEhtcE2hz8DhZ9caVzcTbQkHv8uhUsbLYBZShhwQjXdYddKdmJAS",
  "key11": "5iEtCDGnut4FtSMTB3WC7Fr5qshkmzj24uSkmEosEeQX5Jb7s4k2uCQjqrEUDrQeYs81fFp67x64AVGPTk7YP2xR",
  "key12": "DGJUZaGhTtHaMUeUShwpu8mU4YgxWUCoAmEnECyzVVUArncZfoYVnD2JW6dRtKyz26UYoRGxixmeVM6hnA6fKhM",
  "key13": "2RXiE4PyDCSZULZCDKcTqm3fKoSVEvG9b2h3womH5zvMFVmG3t6B1KZfzsCJC3B2SUzCvCxa4CNWGv4tgXCkdMKi",
  "key14": "4gwng8V3k2cs2igJLeEsHGHpywKZvmxq5wULJZWrhN6FfmpGWXXbnC8ZUcNYuFimwvPQtCobxQL5EeSRg6k9f2qt",
  "key15": "RjFGwtS4YnS9ExHotyMHsfoyQCSs9PcywWc653hBZotNcrpYbg9eEojQUPhi6gKs7adNxDu4XAj22vgp9HLqaCy",
  "key16": "5UNze9NCj2MEy645Ef9S9n7FELpNWyq6F9nzbfX2owPccCSrug8D3iWDMEp6Bsn3yaCfigev3DxnKCv2fneKBahF",
  "key17": "3rqrd8KB2VhUBRzybxfUvQHFt2d7uM7okHchEkE1iS9mWfeEJqocnTvfrqkazPbdearwWAJo6nSftim4Rc1Zy2r3",
  "key18": "2AtqzgRpeR8brx5jA8Vz8EUeQXxKtmCrjNoHyZ6rvQcDVXyBZmJ1r3FiFBHsruvzkEWJSS3u5AUiyiMuKKwm1dXj",
  "key19": "3QyrQXpqcxfbaDv68tdrD3ahVu7JrTti779SHEB9SD928uydaj1VvUDZSDLNhmrrswLZHvKk7MWxTNeEF6eR4wMd",
  "key20": "2EC9oBCELC8NuWLAvNKNPtY4Fp3AWa1YoSdgTVzatUd6ygyCbJn4TJ5wqVB83FLykkGrsf7yRZ3Je7odTP5SPgPz",
  "key21": "2GtDRPwCEJ9fDzHdHJZLnjQVjF4wJPUWJ7hEvVhL8MH81eh9Z51QrggRbzjZ7WsKJhygsSXUo1HexbUN73RjE1ti",
  "key22": "62hTbdanrRyqawaHcrT41MVW3pThKB7s2SbS9Nb8nfG8D1TKUkAfS4KC6ojrQM7zxBQtdRxBvjdQfeijLiE6fV8d",
  "key23": "5ZugMKzkQh8sebwdF2j4M8TJF6bDYYGH2M1C9ZaC6Y3yMMKHbXKiQKgkv9uK6YhzmUHJKxfoxiA9GGywrjz5P9G8",
  "key24": "4Lfuq7gfUZfiNLATdyYma2SL4MvNfjPiA6ebdhKZrsyPS5uygcUGAV6vC2ifh7GCaBLCK3jVnVMeeNdWe3yw7BH2",
  "key25": "62DAfUtr8R9MMXjsVsuSn4pfHhKZU5q8ogpVn5ta5CVMmQkaPgXj3uf3HkymJC9ps9Aq4XoLBnZ6gzrvZM9GCTng",
  "key26": "axXCkHgQDv1k73x6gcvkwKq4niNccNUV2mPMqFWZ5trhRE5yttXSL4rYDYzVfLXMJ97ZDonA9Tb4A884ysA1DSz",
  "key27": "4JkJi5JZSJFuvDMnXnmFr2mGD7Pyt44TUnSxb4EbVRPuzgUKtZkbQos38dnKQ6FKSiYYPrRagcBE5UHhz5NR7PJL",
  "key28": "skRuXpXQFvGyuR7Bhyf17GCyrhka7Rzesc9KUc21DMpznmDgz4duVPfxeFDZpPDjujRhuxupjJdCULzzje88gSS",
  "key29": "47XWh19qM8aWPZfJ7Xnrcx37w6g9qt6NgZaYkMFxAspuDvph8i7HVcbHXtsHsJXdWENYkBM3UHeyvfnffrpP9AKG",
  "key30": "4aKp34kErWgZXwDhF5SbpHzRveXxNt5WHB3bXaG2TDeabiqFAxHi2gvhokGokown3Fs2a33nsiFSkRvm6qEAhcsm",
  "key31": "37QMgP3xVWJC6bgLTs9HBYJZ4MbVnqyQoB1GsamA35asUpVaESb5AxWkUXPzo74vkCnQVmZUn7JG49BTMzbsXTjf",
  "key32": "5rw1ugB2JYa3Y2p7YpDNHX3KW24h74eevXxwXJmMnDxU9iwjtD8svP6LgvPZ1ETgaA2KD8oNBK834AP813sUQC5d",
  "key33": "66ND77QZfUKzCJXEu1pMd4NnDmJBD7TAocX1aK8HiRrR6n9kvmbVZXDFjPZinBuNY4nGLCg2x6SvejQMhcMSy9Cd",
  "key34": "3dkJpZmy9ZfnWBAvT2vmhoAn8F2WKv3LxwhKNVKJJj9x1PppVLyBqav5k5tjG9rdJRAGwDoX2GEtcPLFRFFHQC4M",
  "key35": "3yyqCp9s47iehetLvxwRa5YCiY8cJjSgaPYDZS3VH7FsTZ1upVxyMZb25acodbFTbUFcUqZMWxfXyT4erkhBoNt4",
  "key36": "2mRxhWEvwmAZronXwuGtqKXStaittzoDqDUMpy6i7AXDGKwG9PJXLezdoV36KfVPba4hGA4dyBv5jbhehszbQsUZ",
  "key37": "5iP6QdZw3qvjSgFi9HqKnpuSxocpfUSULhnWGez25VNrdozkGvwCDC1aiMz16Zp8QDnPnpqbSGh6wimzYWFVGMic",
  "key38": "5EGaYNjFUYbAYftYMRhG7zTmushQr3yZXAkvFnjP3yQmQB2AWSHvfvk7nBWQGXPnADpJRABLnHV2ivKizTBwAMFh",
  "key39": "4oMdjKGTt2jwAye9WGe1UF29KeeN3Ee4pzGqvfBy5LDLksgregRMPMhpoMYLuFtvHHu1ongJT6nr4hqx7XT3vMdt",
  "key40": "3jjH4wG3ohVi2o3hQVcJdXe6Eo1MuJMp2H3mCrm13viGadTwt3WhPBkyPbpcp9f4dztHT8BUNhB7T8zmdojeb3b9",
  "key41": "5BMhBJGUeq3FQmXWGqTKfd4zyeMJbqTpHL8HmYHbSpKovfUd5mhq1kY35p7wY9UwKWWsBtbCmhZWAJfRKdMMaXrg",
  "key42": "5HiauZFm25D2Kpu6Uyy19wLp2NZpnkgSrokLkincuEBx4eJKFv78a2rsRrBJYA3m34V3a7W7prdHZwiuVJbbXyMr",
  "key43": "65Mwc4RzpckvCJqoZcdzDkgCAAyboCEjPQqQJ2yLtuhAwECQknLzwpKcU2EsNkrfWVtG8EBZbMhcKsa2UF9Kmss"
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
