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
    "42UHMbrYgRPXZqPGVp9XRtEd4iexhpP4V24vy9fwS9kVcwhnbyV1Za3zbj6v21sr18j2QsPEuVyxe9ByPEeJWHQX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sigspkxzF8xfdc1XcmZWWkvuwRziSn24wYtB9xj2Se1Qn7gXgFmePiSvayScDQxZVm2HZJo2NcXexyYdmvchGsF",
  "key1": "3Xs3Z7wqZwACa5YyUJJR5hQV6S2ZuyLf5N9n4XBTCavhb88Zh79ooe2LZZchy7JNwZqmpLDoJXYXHBCdwfkJT88d",
  "key2": "2rbNsSKo7TdCHhuawJLAzQXS2W1b1yuARnXMzsYShasLsxLCyDB6dJN8uSdWsPRL5csVZcitgFkR8sZ8YdsoBEvX",
  "key3": "4L6sEHb8PvG3Lum5k7Lwgh57fHDGCnDuBtFpyEVVfKbCZgubUVMze4F7jxbaqmPidt3mYSjwtDob7bXeopHyevK6",
  "key4": "2KTWFfxFgT2PA212VzLLqxK3qU6AyEntXx7dhFsP5gY2qZoWdY4Gu9Zbj85uAVZCTZJ8Ehj2gCSFYKFsageNYKWq",
  "key5": "3KVmYtWNtoiw31cHS8fKR9Nt5agkPW2VQoTufTTyS2wmRh7ba2hHuYCjVf1UzGnobC5zxnXfxyt38sZ4DVN6t7b7",
  "key6": "5jEcLsxQNqt9QW2j4BmJKTHAhi6fByscqqaHhn7jokpiBHgudbfYqJXGpdbpuAMvrdeJRXnb8Y6XwjBzxVgHpikb",
  "key7": "51guMhQ2ZKqVXnxyLSv44je26NhErqzKqc3JnJXnVwkDLcwZEj3BpgK6CEA5rfjVor23ngLeh8hGbVGRKP8uEiM5",
  "key8": "66xiPxCb5qzsdAixH9Rdbu718XzcFufVAdvqRWF8gkyPaC9QzL9qYFHDpkpmt7s7BCsKHDYNLfiLfjqFcXSe1YSr",
  "key9": "2ViGo5TS55fxmc1xdd16VEgShGWLLtXvgwZxLqozk1MTKc1HJyKYdPb8KReXpwedJGdeygjVUKkgLnD8P4MtUxvU",
  "key10": "51JenqyCuwcGeJi8DrPpaK4D4B8shTDnkbbgCFwpa3Ev1QuPKshQ9WenJJcHaf1kDF9KPV4xtJwpDdSagn6E5mpH",
  "key11": "JXPdRCHgznVb9DRK5sW5QTJTLAwu4E8RWdGRDq5Lz2ATYgvex2i7ibuUbHQ93N2SrRHom2MonVS8QaCHBEHxWw9",
  "key12": "oNLvxH2WVKVcrRcnmqSnKvZHgqfGjsSWUm46mfYBTP27AT1qcPsBP9i7Def3Kn5hxNLVP2ikJizvD7kdcbWfpna",
  "key13": "48kehWiTRwpWhwLsJHufQU6xpJ7T3wxJrCvd3voBEofBagqvQWXG8q1KGMHBuua3fuw7HHCrGcRY4awheNx3jBTZ",
  "key14": "2QkocrPwrcE3rw6TAcdA9tkM7hNT9eR6eoied8k2xdZDdAnYbRVcv1HiGChoiLTGRfuEXrB7FxdF6SyfHYk7gPQY",
  "key15": "53cw4gyf878Tq6WEowU1AVmQiy4Xv4DNDgkFAUZASTXFABvrJdhZooyShVfxZucDfsKMSrv59QSnPRkpKYHvAvYX",
  "key16": "2JwjFtEwKNbZKVtBvf743ot1LWLf6Ux3Vq5jzFZh2qKdHHx6F6Pxh3EuN1v6HjTik4SuHinhhMv2RJTUnD2FXay6",
  "key17": "4Soo5niuFT55iyseAvYRYGF76M93qYjejgKDdz5hUBjDkUEuADuL7eMmfvQVPG36Mpg8RGiFa6MJKg5yHaaKz1Ak",
  "key18": "2f6LJGyMs7JtoNuGsR2j2BdtHKRRRnBxmLmCRD9dBhvDQNEoth9Q96VQwqFf6CGRc2vCeL2GXjuWvoBSR9VPEtsc",
  "key19": "5JZ9VvmgK3SW126uLxgFCBKte2rE2sk9p5NnBLs6PtuV6tyLrYRnLw8L5qkBYyU2RnCJDEtfFjN9fQz4xBAaC3HS",
  "key20": "5UW9wZGMMM4dG42kziWvZwjHMrnEYNyD2RCs5b3hnvPxdmzxC7G6zxzgc47X8VqK9CZMrohMAF8peGESEKorNJKQ",
  "key21": "5nourRRGq6LTErWAtDvsbJHAEEiLJodKu8Gs6H2556b5y6oSVqAG4vSjL1DXXjQH96U5RK3jz2nWYVUxiaTiHL4g",
  "key22": "5oTn8fYHqQ1QyChkWAbzbA3hmCw8w5h5WCdqJNHKss1qiwGCZ1XWWZcCsUdgsCaxTZGAaHkfMcMi8AtQ4QVjrYB4",
  "key23": "37JPW2eGxg7dJ4vPAKSbvZeJQqV27XLgftNYuQUEQSFo7T3q4ta5jWCQPHPA9ww8ooB2twoKx2zHJkB2jwVgRDNf",
  "key24": "5oHhTUf6sJQDTgNWp7zcYK4VzoJi4YLKh8bmwe6HmpQhTCymYMLg8tWH5LwqnkPBWQ1cNafqdCkxBFM4br7UrfDV",
  "key25": "5woy6eygnz2fxh3yd12YsWCLH5G5B2eBSarNDbf38aer9XpYBkxYATrnS9YFSQifv5kxXeF8boYA6GdK5Rqnferp",
  "key26": "4rP5JFo12SwmypKbgctHTHwpH1chbPSrYjp6uqXADQcPcwSpAWbi5iTh3eh9Wbxy7Go28GmMpUQfMoojAYkhyjwC",
  "key27": "5oQocR5H5cEYwqnJSFExDVBHnrmMdwo3qyi7NXonpAgonuM1Kgbr84N4gxP6SzoUvwHBMVdLdX12ooH61xCscV5y",
  "key28": "65N4PGmiRxX2PbJnmEvMbYekeK3vKh3GvpdkuTyXNia4CfZmRLrHnqmoBbDAgYvY3Ep8CZ3rV6nTy4G8tqK37ww4",
  "key29": "2KPX5JWJGyPoWLZAxFduhoR6CitUTkebLfDzjTdnGYA3wJwjBVmokB1UnW4jgqYhUbPB7XeeX5UWxESaC83o3Jvv",
  "key30": "2PYJFLjkfTHSh48KWonQNhYu4QZxMjzRfWipkHD8HMwNe2iksfDyNf6sS6Pis2S4BdKt5MwkBPYVgo7QA9Eyzufr",
  "key31": "5BLZ586Y6DBSZQUHs8Kc2AmjWGJjA5qAvRG9Ggf8RopEFLk3rRU9adRVDoNgvbJduuFPDdfFtQbwCDsqwy9CvCHt",
  "key32": "2eCoURb2pCfTWmNtb9siJMBfosLQeii31wk4DRVHP22gxBfvRUoi4YfpKozS9fXsmBk3vEyhs9w9kpuqudZDX2rb",
  "key33": "BoF4J936aLPyAV8JFGxjLHeQrsAmsn8VpUfzfMv6jYpb9CuaPpgzGvxNy6pBE2uR2UeFDetWtKWcUcfViUTJTcX",
  "key34": "55b6jv3k67osrcWYkzAV7JNUxtCrttD38S3mcitdEaKfs6VAbsU7idwfr1LHgsYyJ2epKoEfij4sb7mnLqXyB9Uf",
  "key35": "2LXDHqUsMKfC7RoNVzVFqLvks9qpcmLbM9HtxZGr3kpXgkyehhyKFLRoinp1sLGWwvzpMW6Ed8pqFeJPBWdpzDjB",
  "key36": "223Dkuhr9AqVU8WvSz5kiaBiWZdV9oF8Cy4KqjDM1NeH9QMWQ5PToM49Jmx51T759FMokm3TSJDGCHn2jfi3bUwS",
  "key37": "3t2Mrij7X78SGsA2rtk3vU7vJ4Nbkgetg16iJ7dCMjNazALURoSi6b5cwqcrovRx61HGTyzb2y9iAn1oKBmyE6bu",
  "key38": "5oSWwhTtPVD2zzGxr6Y6Es11ZRyicGNa3bc6FhaFWEaMk7P5EBAqeB8HqqbSsZE7YZUDXGCjLHqQNjoNjaQf1LbP",
  "key39": "2eZW8vRHzoJNAqx5zfovUWVLEAYobGgjwTnk3eLCFUiFF32wkUfyW2di8tHhY6g7DRa5FRz42F8SGemwKCrH61SS",
  "key40": "2PGsQGRa33fDsDvA7CyFPrMs1ELRswXaFrAFicrEVjYk4zczN793RhPgjvSsSSUZqQwigGCh2PrzR4H8UCXSjxCq",
  "key41": "63WBHoNVh23h8TLVTLcSDQo34L6ghY94SmdE1mFyvgiV91EUevQ6aFZ7JMg6mnyoE4cNDicPGcAJtcbx2Qufvrc4",
  "key42": "5jwx32XpCWRb9Z187WjsPq6JtC5YcwznGTRAXiCcgf7a4wk88Rv2NYoJ822TeCi3zt3vSKKuSrcA2UU4zYLFnkaC",
  "key43": "2eKZQjK8jPTSES8BUYGGRKuvJbwbA4NN9rgVN7KJ3QQECFNFxTFuvtZskJsPTPAgZHY4d5K3ysmpHoQy7He1tq1P"
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
