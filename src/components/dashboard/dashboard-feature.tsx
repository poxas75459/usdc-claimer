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
    "2YA91LnKAX9P9q9jVEZ4fpbrbvQQLzTiREiYvGiedgTopb2oBtpkeX75R9j1n34hjnggvihD5Ai8TwodqTBshccr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39WCuvTuSYAGHMKrgi8Rqj7XLVUP1gwdkiVENsMg9qg4mnhNTmKk4YynPjCnx6mDutjkLAocdNoSBHVjZf31Qu5r",
  "key1": "3YZ9gt1E3bbfmLisZBPLS3Fgpb3RRhMukWLcrpYTCKNGZc2neRJgiHqxooWTrisC3aLiJjC7oU2Ef3JRAhkCir6b",
  "key2": "3h9TtT1D4ig4b4uxk2SEVPgVuA6fbFS6Fm2hqpQXEnvCAWQo9QuN7ZcccQfjiAFJ1Go4Cd3T8UtgMCq73qC43fTH",
  "key3": "49MWgJ9iQYL3YV4J44VsLXhTexoZjDu23CaUtLjxC323GyHQHozJ1mFbfARFrp5G1KbjpQJn4QSdPtSsr5yqkP1L",
  "key4": "g5aP7XnUQLVNXmSVj1FkLatg1epgQAgFUSKcJn3vAfDfDvutqJmmTiWUt1skCS44Xb8Jzf5nkKVgraGC92x3NS1",
  "key5": "2dQJQLTWfstpPAoZzcnfxCQJiZjVWkKPAeuCHGwnFnEfw5KCPLjBjkfHmhVgDXW3F27nJBgaSuKKt3pF5pNcRmi7",
  "key6": "2vUAwwxdRcyLZyoQDm6LHdBsyjbCMuGJUepJm94btfYwMCvH2yWuDa5JoVkY1n71hSgJZRCHD3E4bscpJZYaJakz",
  "key7": "5WMyvrVSStTYtEbjTo8cFco5BsUfWMBji25HxX5cgjbWM2JuoEh8tJjFJfxg8K9zVJsuNgkeDaM9X3Uduaq6gszu",
  "key8": "gCCS8rb6hiEvHkFpjr2dQGVkQtSPh1t68T4AAZtGmYCyUJqcgbxu25chXZCqPKjBgoCLVbMJHWz8irWwz66ojvw",
  "key9": "61ENYaeN24iCt7m2AHJYTwmQnyLy1ZK3sxixUbdT6m5M3AzXSD129Lophvd2rWxGNrp7QhDvubUCva7AbhEu36Zr",
  "key10": "25sDP9F1UUARmpPsyZPnMBJ6SjkfXxTYN9TLmTocv6rT8F7cbw5m4buffH6pQTP1xqQ62r7B9JijR3qGAsAM4Rjt",
  "key11": "3HVus26PzJCyjVSXEPmo9wkVY3cSb5dHWEXasPgYaDaMPCcmZamefeJB2hUyMKDTYJZaC23Sunr7m3rbG9SfqAu7",
  "key12": "bqXLGueYZ3quEpo8ZUdr8LkuW2wTVf2fzVCpVHDDGYCtAWW8QMkj9zV7bkK5GMmQodcqpUAWK3r7b37bC3TcqrE",
  "key13": "2c7KKqXgu9YYckYxbWqpuwV8DEPip9pyv3RXgD9tWu2h6YhfKPtEiuYZPt4UhR67zsVJLAUQx1bYAy7GstMjVTo5",
  "key14": "3yEx6Awpx8dnTbzZzAiofnCqHcrieH336bdZeyk1vfmUGh4GTZafbim1WsYH9XWrrXucWemy5z97qukmWCAD3FwX",
  "key15": "3EHQesbaKhjWv8PAhEHLjkpq8dY1XTQMHf2ucegQNPhJcF8bkdn9pfZvYe4Jjvg43q7aLYsB7mrbBZaLkHw16uYh",
  "key16": "59zuWFqMTMR2RHGSAWb4Q7tLNvoS6qazXvr2JrwofJewqvQRfNYeGcuFyhD6iundpV1unhxHB2ZB5ismVFc7zTrL",
  "key17": "3ovmFABogdhGw5WfAaKQnrRMXvJFKVHtTw78pf2qSonRYTVtLdMuyMKCk7cUrNWTS9Y2oQEZL9UBTTduww4ibm2c",
  "key18": "FxJr2pKKzoPNoSgCYiUSzgBropvu9mzbCYeSzwKhrKGU7CS4mtpCivwa7CtzJefqQY2g4YfX3BkQy6vsxvGtVXT",
  "key19": "3ARHQHFHzv7FzkzxrMuZAbpcMovLZ88DQWSxXYqyWWy9pmd6kmwRvBmoUVYAGF8zja77e7G8Gw67gLNfBCVCTbZy",
  "key20": "ad4C4n3z1UBsC95kN5Z1EubbrBfcaDSVj1B7YmwEaGk2XYfBHM33tzCfSVqqg3y7gN9AxyTwc6abkNEWnbMRD5q",
  "key21": "2eheVe4jm3YgN3wHsevti8sEJPxGC6AvP71F9JjUDuGFz1TDxkDcD3ECkycDtaovGr9phgDskruza6ZjefEN4iuY",
  "key22": "5DRgmq9thJEnuySo2yc8w8wkex9seX56PsqNWvWzZ3sedCTgw1McTiKjTThCTabqQsZS1je2kMhYWtGAscERCRJ3",
  "key23": "28yMj3RSeDXt6Nsk9Y9o1UDgEoFVFeXs2rZpYsy5CVjkVZSqTFzojPgsatjG9Jap6D2xvHvEAojrzuCcJbbKpiQ1",
  "key24": "AeES9C9A87infYkvUy2uWKH4PwXUsrATLgy41QncsQoNf8QKRa2vttSyGrPrZMVe4sw2FWasPBvUNw7dp1v7iTV",
  "key25": "2dkZG4bqSa5HJ6iZQfWbehn34na9Wsz8bxiZnKTezQecGmQnzQPKmm3rrYvXb1Uv2WghB7DZ6ayT4PpipKZ7SWhz",
  "key26": "3ZU463d2ntgAHPwNR6o23mnpVWywL7xHheUpac4QWJtkA6Gs4XukParo7gPGKMbHqhQgJ4Upw6wzv3QLfwE4tBzT",
  "key27": "2mAqyVBsyUs6eHHjn1FoB6NaG5zRwHLsCaoYA9uvk9Y7z5GpaDNLh2DVUYDjCnQ8ddwFs9JTTtKMyBTSdaG67go3",
  "key28": "3TyZJ1jm5F44PyvPW1u2fGb9EPTuKAFAwh5AHWQ4gm58kWcbwKPkmQwC6a6zk9xv7YW3F5wi58bksgaoQv6fF42t",
  "key29": "2uMHbcb2ht6qzYfY1Rfgasgoe2RNGFm7J1YBXESMBgrwg61UwfHvnXwpUiTJ2dGkDrLUTm8C2CK8ezT5CyQZWbwA",
  "key30": "4B7wEYSwcxJLVNiQMW9GqCaP3nxiWptf8iXU7oz7CbsL7PCCbvuM3udASHWgTvuRkpCewnM7j2hr2hevevhVTHCk",
  "key31": "5GVnDF4TknQKPBZEDWX89ZiezRpvKG3Tfb9VVFd4UxiW3f2tXNBHVi7Gj6pG8hwQMvkCbuCYFHx2AKEXZG1GhdxX",
  "key32": "4VYk6HJQQMCjaN2K1kH9HSFhtdCv9vcjSFWEWMTgicF6HpQUGoEUm3UodoWVr4iJ5PvCvyvQJ34G3MVw7sxDahyi",
  "key33": "4qZxpabUSkejznURy2qh9hQX89VrPotxm6asBT67DkBXq48FQ3GGvZ6j5JwRE2ae3wFj7NHdDAgfMUgVWZktdqon",
  "key34": "HFpAcbj6aX5hAgVVcdhju8eRQcan9M13MW8LhLMUpn5f6ML3ZvTLiw6Vz2Naa5pLJTDVzUknHamUkjvzzqFQGC2",
  "key35": "2hGBGBbQGgN7wrpvuoMtxSoVXwBX9nEnuKvrjxbiXJxQbqrv5jcBPfxheoJyS9Fmjz7YqEx2x3rNjMNmdG4f1PBD",
  "key36": "23jcb2nV7Q2QuMP2naYEhkrmj9dKv4J5GgxfY3SbQXhQQkr9P3Rpb4R66noBEppBjK88kVwBXxhQqdZkyobqdLBh",
  "key37": "5VsCvvAxwGq6pat3UFYEMDPkQhPaKr3YhckfB8h7ZNFt5NvKmDGbMHnEs4o9foVMEnWo16e9SzHf1HbNYf9tKpfC",
  "key38": "656FMRU518cn2oggDKS3moTyeYRkLsQC3ZM8x31MtUr3z84934uYeSGgjvacCo7zWHMsSd7LdoMNwd7bXhv51qgY",
  "key39": "28Zv5vNksmAc9cz7XUE5ywmv3desXYPxuFZSaY79Dk5MbddWCaeFFJ7nP88vge9wjag7FfwF88aj3Q2Uvb6HwzJ4",
  "key40": "5LaiZBVwLaiFDF5fRQo7B3q24PxK9osDzvQJGZpkGApU4HgbW5VkbZV7WLh3f3Ey2dDUY4jWEuGbKzwNxTU34Ere",
  "key41": "4aGgqXphkHmnxxRXQbTznWTo6aRALerv4KqEUiJrfP2q2q5Aj5zKtjMdRWBCQVFozvSUoQGijm7A81xX1wGwEFwT",
  "key42": "4m377TykBDp9wdiqVG4VHju2wRcCk39q8TiY471qPLvn5NS1Z61BWeZPVxoNfeaKJUmyVJ7yz2tngtoe9bYcEGSG",
  "key43": "3ABrGzq6ostbz5vM3mKUqXbEmQHyR8hAKhfZPFcooeVFPXW6cVpvLDYApAwA6gcWpDFXTHQqAPdkrXFSrqhX816P",
  "key44": "vRyGkDwA56f2gFj5R6dpdUxQHscEnLEBof7cCc3ESUQwcqCZRM6eYLN3qAy1qnnTw1oeGsaT3XszPE8M6WbHHzo",
  "key45": "FCXBXFZoqZR7NhNLbgUiH5y8f2p4bsLrRvHiknDaHMQuR7saDtB4vPuNptiD4yiDGjD8EwoGXt8gbcLjrHfo5Gf",
  "key46": "554zsBQammDrRjnAcFhrahyPUqhZBsNZhY5Gk6saQtKAxMfvhQySDNzzNNhWdur9kwjM64PWRBfyGgLDgGszV3Wv",
  "key47": "4JJaX4YBFaUJi13Ji31EXwuBBjHoSNNp1AgcqiXUZeU9cYerg2g9Bx2FyzhmZoWdytnhk98Gx64NWSW67a6AH11t",
  "key48": "4X7pVMXieUkfqNrzLZvrK2FZUENg9qTztpdmU4fz5FsSHGtTC91HeLfn8qGuS3JuGGBp8pmbBDzQiqr7RKP5MbQm"
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
