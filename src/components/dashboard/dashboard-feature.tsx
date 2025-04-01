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
    "3GZfyZJBqcGasjTr1pY22SxB4fd1VP9AcxpB4rdgU4NCg45D9TcDSjDKAnTBAcHNioLZmKLN2vNSaL3uxbtyqbbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59U2R4equMorPUwwLQS2mZri5tRu35nMBAcqEy7zonvRv1iqCS2Y4xyDz3dLghjGwVt728E9kVUq9RrVcZmddSac",
  "key1": "2mAryZXkJESQ4L5L7zWrS2EvpHpD72ijq6cidjS52Ry5ThQUpyi65qAAgqBZcStp3swS4UiAZbX8513H8fsKQrcL",
  "key2": "5eu7DRf1gH1xseq7WikMTF1JV9VzGJjQAGJHP95RXV3m7uspcvD1zekPQDjS293Sb7gK3xZCWMvxRnJNsyb6thaH",
  "key3": "4hNvLPzPL13KZ6BQeXVk5LHmzTWCgskPZNDnuAT1kbaXtkmcDz8c2V2bCFhH6QuoJk38kuifdyFLpgf2nWydXmJh",
  "key4": "5Anj5FL6KiPyRgzm8YctcsV4DkoxGRRWZfpbkicDw1vbTWQvTpNnyrR2wBr6C6yKK9BJtPErGJv621Ls8ha9EqiA",
  "key5": "5XxxRJzH98RNa7GwniB7H6DZdRmqtbx7U6UXcee7e4tFMUazCugb5sEMsRSdPyT3gFsww71pcLyC9uFVf89vTFqE",
  "key6": "32ZhbVFcSA1ELw3k8BCHweHvA4nk8uzLSKdWisKyQ5Zk77cQoDZRGL1hd6axappLjKLTp3fJWg3rbWmFNaJqpL3C",
  "key7": "4tUuRKHhp5uRV4U4jKRCd6s6XyfpLqR9L1CcdQLr8BAcdPyDNaR4aZszqL3q6icyCvRLuu8ySnUg6YHT5sJ5oenj",
  "key8": "48CASewShZfVfB4j6ie8nSWTGVVbLG1MH4Su7DXsQ5FpmQ1LwVwMMaNnLM5PSQta15Z3TZB4rsDHWa3bVpoMup7G",
  "key9": "4SHCZ3DmJYpSSYmDyvfrPfVYjfihXz7Hh8ykez7GfsBXd6LzCHfBjkRqyEFW1XKyduKCa49dt1nXdtswZRKZZdM7",
  "key10": "61PtE6Va3QDppcPTjuAk6kw7hCdF4NJwAmLsbYJctUnNK82UgHNehgDhrLmmsVt6Ur3kGEqAbYaR6ee4ZE4YaTFd",
  "key11": "xDLsB1e2Sr6VJH8MJAjGxvfwEbG8EkGNsz4dWFPULV3sYZGQozhaUd4z5aFUfBmG3QmA6rX1XbQ1b26LBZvHFE2",
  "key12": "3y8GQukojBsbqj9SpKuoJpDZxkUpeoMQNUf6WUJkU5pEfAfZXhTHL9oyUUjTe74A54dKbaQsTXgd7AhdbArsomEt",
  "key13": "cVz6B3QJhFXWEgWhHqBWFjq2YUVbwGeXUNhiYDHjNs9SXYFujiwCkyGQZphtuNoYaTJe8b1Cp23jWedGHzr9SSe",
  "key14": "67ETr24DCYGmcui3hrj6U7qWa8tY88J9MaFkmuRGReGRXocogKBWTcVo7KDvidJBGXTtJLqtPEmojSNhhJGCX49t",
  "key15": "51T59CVKbqCUM2yGL2UXbwDfTPRhonwfeJUHej6Y71LmefmM68UKGhGUxBZRopekfzfvxBsXKApnm8yv5BrRCu7x",
  "key16": "61N9JPjuxA63h9G2Wa1kmhQd7ZwvsFEGEKBox9qq74J2t1aD4KNt9xuNM2GTZEsZhNMTxfcWAAi2zRQ9fzEJcFvm",
  "key17": "2ULso9ovcqonhJTvDSxnodLMgKpibbzCoBaSrkmfvf1am9h9spywLUSpFedWZpNhKW138mr5P14jW3qR1123P3tK",
  "key18": "2ZiHbp8ZYN4VZmofNDVsXbHRSbkuYUzg7H6qnS2HtS5GdqhJKciB4vAdykWpJjBjsncz1pw5PBPhfbpfxWU1TmzP",
  "key19": "2uqxNwS74LunEw7dgkySWjjNBc2QETkGqQM5M1qx3H2X5fMnV4uYj8o2NQjaTxtMGvDHRXBXkniwtDCAyJaK8BD",
  "key20": "3HpjUvERFwu7xdX7ifyD65niyE3BT5xHMAwEqRhkNRhurXxQzzBPvyHvEW9hcMLLx3AV8hDotqSkQ8np7Zoe5ry7",
  "key21": "czkEEHuEeNx9VuzorRtjzT4VgCmDeDWJL3FFPQzRVjrcfdPJF15C8q2aZk4AUU7ZBF7J7tBqySPHyXZp5rmRXAt",
  "key22": "5aMiEzrrsnLoTGgR583UkvD6Ar3Qg5ezchkEn1rJowVHwTA6VKrCLVFCYKsdCjBX3eKuEXNHqC6GRywDeZtmF4d5",
  "key23": "byG8vAWVBcWDPijSnYGaQDstuz55T1r7EbL9G2UwuTEhCopyt2U1YhdRseuJNuRvtPBtJZcgDmYB4WYKhLwckd6",
  "key24": "5mmfZ8gysVBoKGvRAC5je7FtX5MmaHDrhcVkR9SoH78FTU9bFuBqiSwA1QCCSWqNtyc2JA3RNfb14ztvVs7b6W7E",
  "key25": "4XtkGUCBg87DxvHoJP1mawctM6ujzjD5ctam9qwgUHmd9Crjq9a4PhdQMN6NsMLnM5AiVKLKUaZmoB1XXMyLxUhr",
  "key26": "22x136eH8GxnzWc6Cr8yFFU6UqRxPAmzue7QJmTG99NWzSJDNwYrequudxFFpG7dPbh1p9bsBrX1VM8A76oX51cG",
  "key27": "4vqQF4VzUUbNRRnsfEa9xNVdmgAk37oRvscNhS7gKSDe4Y87p9tQPoNQNhU6HY4QcU3ycWCJe4imAywU52dvbBSC",
  "key28": "1wzxzJ1VrkfMbfZmSnRo8mdUzze8ENN3NGGbbm6Ar6W5zXZjTVSUQpdV1A4LdZA4fhhbaqRqChimr54h7bod5J4",
  "key29": "3yZovLkNSJ3sCTnJwDXk9ZbR1iCP7roDUFcLaLoA8k9ysnDo3duSB3Ph2QcyzEkcyjQidUqPiLc84vauXGJKTuFd",
  "key30": "5Bt4Y3Q2Wx6mcbgnVaSZbRT1Mg4iYyY6WLgRL6qjMyeg9G32ca9Qu76DrSot1YefW1AB8aEp8qHhfC3BvD26cdFA",
  "key31": "2ZPepVqZVaiefSkkymZCMTqqhexYRWFqCDwisRyiwG4jovN1mKtmo1rv8ZxtjXMfbeX7HWgE5B9JfZVSP9ooQFU4",
  "key32": "5tbE8tq5v2dnM7f68rFcUkJsXHY5jcarAd9W4cTnTmbGrTb8ZCJ86U8NmRvHdqQ8Cbr7YmEnoXa5iXUFe4mq6C6C",
  "key33": "5QRirhH88RNjHS7GyL5abWHNZBEFwKwtAx58pGVk4NtbaZLDfAk9B7zS8M4o3oj2Wp4uAzGQz3RmmjowS5sJCdVG",
  "key34": "5AszyTiXpxE2uanPvvsMRV7drGx1tr6FVXQqwTdAPXT3q66Uwtgj4p6BTHSeF3cKW8KnqzqByVivcyExgYmcM7Ye",
  "key35": "3DuvNS6KuWPrDFrxA4RLr5JLUmu3124qSu1jKiKE15kaPZ6BGv4Zk8Jeg3rynjMFTdVvc3xC4gbwP3QXKtouJVtx",
  "key36": "54oFQvoePrpNW8ZsD2mJybp74gGpk3q2XUfRE7rB6LVaf2PtWTWxykMTvAv737o4q83izGgaku7XhgYwpCLQfwtq",
  "key37": "5wbbVDzEa8n8wD9V2eJ65JQgQHjsVMByVT95T2fg5jQnxPGm4NBaCVpBJbwemFbzcew9rdYWCs1UBVWseE13wwK5",
  "key38": "62sdSGNBC2bzyfut2DRF1wzFh8eUyHoyucaJiwHCsMN6TitDCuAr1p4L24XFfg8oD74mZbQ9sscfMVj3z4VmXiym",
  "key39": "353jVCzKTZ5fTBCT8NTWXsJbHQbBjksr14pyesFKumHiEsaBVZHva2Vj5QhgPbC2WeFX9YhjDJkcTec38X7HpHnv",
  "key40": "2CCt14HPSUijexqUKfhtCjedXNbbaHCv7B16A95ZhivQWy1BaEKC3EeFbCmKHU68qj9DMDyiVEnBYGLPnxz31zf5"
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
