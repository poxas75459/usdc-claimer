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
    "2hKhTj1AW3G4ksqGQPonXi5apMwATvafh2HZPiaTxaJKQiSgfjepUV8rtHoKVJ715XR26RLSzvMjkzws835vk2TW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35eS7bt3f4RCLryZgSC2Vp7h3kCsM6EenNuAChoH6rZwwSK53TXf3WrUbMMPzcu5C4EP9aQXc6BTg486mT57tTZK",
  "key1": "EmiPcdsutfucPXyhnHpvsTaSeanCNR1MbvaGphp6NkkjW9uwghyxKXtd4tjH4FN1o3wDCLh5hHfhA6TxYwQfy7B",
  "key2": "3DcP1vJ9rP8gRRDoCRs2Ekv4ZfZf4dDVXsRh4RxZF6Yh1PXdSiev3kggLNjkt2FYXTZhssnafBGQgwoByWfFjSv4",
  "key3": "y8VxSqsicr51tQGsshjiuYQRJsnLtaF4NuHZnVs6n3etptv8dyXbdwCj82VPBbZS4vTrdT8uzdWaN9s5EoUfsmW",
  "key4": "62AgBqGYGawE6fMqTihK6jmzvseWX8aT1dwWYUDXTgWAzqrxkTnbWqVyzLw6GoyQ7bAuPFKYGw1ASVk6yhrxB4SH",
  "key5": "9XDD2qfTnsQwjgD7NAFA2XjtfjBwRwetu3birWfUaeKeTmaSYd2w7EiWiMssYV5YDK5Hm9ru1HrpJzyrHE3aW2Y",
  "key6": "67VBu8R1wiMvFnz8BpJw3LJBdTnJaCAQhL6DoLHMMsVeNsSAspTVmovcoXrA5mDZphjpEz87QrMqjZwrHGkiG3gf",
  "key7": "3neETEfddKEvSYynNbYc2focvQiheubFCab3veGf2pmrTV7P3rReSMD33CGtahYV49iAihtGuQfCYoTW172bYfnz",
  "key8": "qnTg76kfvfuWbyziWcDcVsC79Zx8Rk1rXAyczyXdBpcjf9hWRUFGwQetZsXHAiLpXLXM7c2tVe3pnX8EBwKNyK8",
  "key9": "35BUcVv3ACwd3Nxf9R9w54t6EmLwxrxRRVBd9vm5TYP944TT3jp1GQJ4WTC2f6u1pUw7foura7KjCAKdo3bAHxNV",
  "key10": "2iv76Aed33bDVWA5nyUb6rAoKR7VAsNYo7SRLVJD6QeumDxbyzQqgvsKAnJFQsVYSi7raC5BRYUFtDYrwk9MtUQ8",
  "key11": "3o9RGnMNaBR3ZVbaooqxmxVQPZFWi8vri1wFmNFTpsdMkABGyydapmSmEnqPinpsoEiYxhEVxc6wJV5GD7NgWsrr",
  "key12": "4ShaqPVPuLhRHW47TRhaKUsG7zpoTeyEYAx5igu4yet6nMhf3N8iQBEiSwdhNcWyqVdreUTqfmvEvRUWthFg9GzR",
  "key13": "4tPmi7kW2zTu3hjapmhsVQvGzP1JxaUbZyS3gGmYqPhYLSrqgX9XbJxpwabXPKKnednyeEVdJ5my4qZ1Gyb4j8vW",
  "key14": "2sM1bFm3voUBeq99oXCfGEptpbEfD5x5Afxp9t5adJJ2JwNp4e31HiNtd5ZmAtQUHCyCVBxadJjthtyvG1MewNHE",
  "key15": "5vckeTD5Tw9o5dbZusRXeR7Foqx1pfHYdeTWAdKu3vhNdRPAbmTEVgi2WoadozZKVNNDGXj3rLperRryLSzxCQNy",
  "key16": "2KQS13Vhw6Bad4eXaNJXtHwSVNiM66fbHj6ERFbSJ7wFPGomrqNNa8QVn2sv8iZ18k2mLbTy97z6UgSNjZ2tEdcz",
  "key17": "4F9KoeaSg4ar7VhmG65sGNJxznX18KEeaus6Nktey2tEd1FZoZiDXUpGakwmXaHcrzbi8aQt8K7q25Bi3vSbXfhS",
  "key18": "fuvZdZ41xgQBpzrmug595XfTbuiqsAUEPgen8zBzth6v3E69ifsChJX9XUn8Ah1n4Tup9o61ZU82a229i8G1fW6",
  "key19": "5h5ova89QgqXdnV39wchmeoKz7r85Vgu2qThL5BADXVGw5NVqzYQzhtfdndtKhkVtnr5GVi3xLfF6vn9ERdtQT8",
  "key20": "3QxkmjHS1boSa5psSYLMSUSuXv9afydABQUS3gfSWotKnLJw5hcW5PJwHGArLw71pYiCYXZsDoeP6Fa7LARgSL4C",
  "key21": "4Ybi114aP2tHugthg9NtFshf2wZXAHZZhU4x4i8zCN6BopfE9X2kBqHrEtXR24TqbWKW2F54WsBWYS9MgRPDaTsP",
  "key22": "4CsVBX9Mhz2kWzjP4u8PndDvn1AS4ZMpW6Wn7n5QNrstWwpHcJW5JyR4K8rBXYBChxZXZQh61vQXrDEy7Ly3ojJR",
  "key23": "22VaxjK9nWWyehexhhDZh2nopMy5MtEKpKV72FoH3wn9zGbkBkFrFDQUr5LSrSTSLTf2N78EHV7DzGWhFifWopx5",
  "key24": "2cG5HNdiHxg14YYfqoRssGTAFHbCVEhXPPQ2Lvn3kHLwSmasGgzw7vSivSKqm6Aov1uLRJiHVaTJuaWzSnSRuph4",
  "key25": "aMrQoyoTsh4dwWDcHk92iJB9FmUVRyXD4NtMJquBUs5iavZnGwmfrnrZhGcgKtextGj8ipoxjKgeb8VXcwtGv44",
  "key26": "9yHP9bJbgoPaEm4RitM8axS6cHds17QGJUhWCQfwxGFSer53ypcXGr4gXSg4yYHCyUQBvDfHzPhP1YjhYLWwFEz",
  "key27": "2JVyLdZy87uEPU9epF8MJtme9fkhf3HSduTU4GTnTScqWCcVGtYBAEeYEekiT78B5MDEuB9Vq7A8pczBDHuMDRKG",
  "key28": "5vxFTZ4VYdhgGiYPQDMq7sk69mx9mqefFquXsT8ZXr5bdDavpGb7LFC5ccw4YsCkVuuAjRsQi8XUxWoCSp2sVQs3",
  "key29": "2oqUSbkADY4QFUerZDMBEPNeoHr9Wu3Mwn32p1MTmg5XBcJCSkrGiNxr2XvdCwFU3EAojBCyCJ6VWMsCxPtGfTTE",
  "key30": "X6TpcoBaKGnK63CNE6oaF14BE8sKXGxDCUMKCiBYWeLF4oC3iX2kLCxFSYBDpMRYRypy2gmUsKrTVn84QkdMuxz",
  "key31": "3CcEWLJgFz6jKXsspuhXBdka7EC4GxXdXLo8kGPQMj5G7FcCcSaRNHHfGP9cqREcQEWc1jLoxVbyLxbaDnyEhRWA",
  "key32": "5JArJDqSs6zFaX3XWL9kYpXmQDpFnfPUAEUf4J6HWdff6RLAEpHoWa8X5mg5YjSCYEB29yoNHnSk1wJUPQyLnnSc",
  "key33": "2H28RzMy8j2pxrSfsX9hTMVFpgah5fz1gW3bpqm9iwt7GSijzicFmg9zs32qNp2xGjJoSjdh2Pf5g8Z77sXjQZVW",
  "key34": "4EYRCPNQpVxpbJH8mZaxrAhbe3j8AMnQcpQuuC1fj8ZjK49tdiSMn97ufqXa4Z25Wa6Ja41eChnSgyyGkPf5urSY",
  "key35": "5mqKY5Pwt46neWSqsZuPWaZ92V43gqDyYCAUC1QsFfPrzFSnXmArjuxCWQXsMyU3AzjwMwY94GrLH8Xpz1xtkgWD",
  "key36": "4NsjmTacwHXooKZrtgxLA5zvxFmmN9cLNuBS1X5KLSFbcek98LkGc9AvEh1jTNGCji5DhoatS4xecbPPc8tsAMet",
  "key37": "2CBvbrinS5GWxDCXwP6qNMFfuP3YEdHhYb4ZAsCL8vQq9HcZNqK6iR1e2fHGWR6BAAeC3qD54d8ae1a4aUUtR2VK",
  "key38": "ji4Q23ykSGe8fKQSphD5iy4SsZm87bUQchHx86QZafenJfgJg7pN2xydnKKB8upm6HnxPf5xoqH12vK6aByV92T",
  "key39": "3gBwNVwqvu7w4gqq465RBvkg5SCZuJUcgBJvHLwocqeoXQgsy7sWUhMh95pxX2dQuvYcx31emkMcz2hkfV1yuaWp",
  "key40": "2i5MSXUPBzWb8XULZ3kRVzCkMt3vTWVwgNuRBR5px9K8pHEyYZA4Tx2Bcg2iHHdATYMn9yJfqoqSk1rnKs4TakvP",
  "key41": "2UhA3GMfSsFz3bZtetrmDWV2vUGWXCXoiGkeX3sDGPnkX6G1qu46dcq7k3soChs3nch5CDB2B864i75rPqfZj81B",
  "key42": "4ru3dUxcKurMsjnvMKHePaJD7FKfDSET6gqGqcFWrTcx57L2m1TnN9Dt9hWco8sFytUJv1m4M8FqTVL2GZF5dCQ4",
  "key43": "5nmEQSfya6nrvTpB4tGEJc15xCcMhyaE5CqvinQ5STFPMTffFL6XVBnmo1U2NCuR2KoZD2uMtvv3UTuStxAKrGWj"
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
