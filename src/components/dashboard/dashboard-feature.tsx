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
    "4WRCAjHUczS3JmiqPy6qNXwdibfJyNGAsKuJqgEStqiGLUTYrGYqn9XTsMfBuhMGzigeBEhEkoyiHoKU1A25Z1CE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NmFwDck1kp8K1SowexzAm4Rykhk2Rfbk67rTbjMdkm1K7wXg1d6X7fokkGZz15hkdnBZAnMACSTrYSjeRdT9CWd",
  "key1": "47wEiHmxL7u1hLk482e727e152r7HrW6CmuFFWhMaQWrBNm5zC7M5BSoouFgHjiNx2uaQEdDgwGzg2nsjy1qKJMz",
  "key2": "3Q7b2Ts1MU7gteQpTK6Dr9eKsiJbZvLBn1hoRozDPzpfJaWwSdbaecsqTmcYGtYNGu2E6sbM94xNt4NV4a7HevEr",
  "key3": "4pH9Xp5CABtSj98JW5ZNM3y7zJg3nUiu9ntK4oS4bt7mpc2UKU9H92EoELfZcUnFGbhzNzfc3tDJLnrUSNqCTRv2",
  "key4": "3CVinGruFLmj9pskY9UUEsebAx5F8Tuyht6JweL7a9wDDLTFrZVZp744t3CFg1sHakgVgXksbWj3JV2c2niXdqf1",
  "key5": "4APAtRdYJRKDgFQg5e32KHDU6ERocj5o5exvdNq7AjQe5jSFQQoz542ED3G5ATEg7KsW7uLP8LfmSW4a3Tqmb4i6",
  "key6": "k44HWWkXd3qYt2T9VpMGKdsMZouCtFULwQ94J6Bxk41wFdWyzt8ZUzcLJKGTdECos68zVHfAwwcBmJUZ8XApGud",
  "key7": "3q5Cfh3GbURnrRffjxhKLxE6TyxGxCwLNidCbj2w9ogTjwwZgKwfYse4DgETSbkJhgMshSjwha1L26ofqQgghFx5",
  "key8": "2vYDGZHLMk5p3zG4t3Y1Rdgfu4hkGgdWjpnFEjRLQbeZgvFVsuQV28ERhcP2hW8fP1Ss9eTdmJgtKQ6xoRQk7UFX",
  "key9": "2WawdQB4iQHPozwgWQGoVgauCDRDbDVuhutM1g26dQwzPimajCCF7VhXUMLS8XgFKd87URNus8xbctQAWQ9ggGwK",
  "key10": "4T6in4JFbJGNH1U9S9Ws5wBV4K5if8oXD7J9NV4pvy81LTMArmErJFXvNRt6VfaAge6YRLkhSQxMaCDcHfsYTT9Q",
  "key11": "3Wz4Gut97NkRt8TFSzW4qJXHNL32ymD9YML9HvhbDDpMv2kz21dXMskodTz91VaeiopDX3PQV94p6a6Zafyv1uq8",
  "key12": "2oMz7yeCxBFzpFUrAuXiouUxu4LhhaMMXu31giTAbCF5NigzVYtBJLjQCQPnqDhGQ7bKNG63Yya2HbjL8Mm3dEvk",
  "key13": "4y6NRyCuzuCj2eSPE2EGxnFMrsY3RbgRstS5vPkxiAZYjCEKMub2EwTWWMwjPfS8ATbayKAoRuWtnJoqxTbQoT4x",
  "key14": "K7LXNn7b4HngFbwmw4pvXXNhAKSQryAbKApta46Ya6bwNqSJM3aseDvd3kKtWjfB9NH88jfxn1ApMTLzhotdgfT",
  "key15": "5ccdnd1ABV8VLGDJx2VoAM93p8CxADctHXmMLKhUqa2AVGiRN6ewg35uT4knicBQwEQsGhEBmt5CqAGrNVxidaUr",
  "key16": "3Yg68DPfKU1wDoRDCnd73T47bVPvzpP3Dvz9ezsnuANeW9zkXQN7j8ppuvN9wGCybnuGkLPayc7ctRRiT7GdnBD",
  "key17": "4MpS66JbH5xxXvFywEEbFdxW1iKACb5CPAPNUxozy1tiqCK8Bs9CZEFMW34GN9JmkKx5uXVc2V35rx71Na2AaUZQ",
  "key18": "2dure3R3N3mj3pGW4ga2AVDkM94uhLf1SM8vXFdhrwBctjw5rfYW2ei8Hzgb6LGaaJGy3QL7fsRnhTueiUaYZaJy",
  "key19": "EX8irVyT88cMAf8u2wcReaxeyUcokMxRi1gQropmDWMMTLNj5mssqoURv5T2rD9qG6yFpJJqcL7TVPh5jpbz3S2",
  "key20": "3DPm29vA4SiJ3BbB5B5RbZiUmePswoak9hk2Lmcu8sdFeCr9zW7oeGZNjRFSa7fyW9ko7MGsjr4gxw8VBjGGxh2n",
  "key21": "2xfbCwzvJRhp851e7WhfaaBXzrRbGnTMCD3hr1xCbJFPg5ZKrJkryFesmiwYMu5HwG2R2dPdh57D9WSysjGqwbN9",
  "key22": "5oQVmfEa76K697KZcipMwLsyXGkjtqv1b9VSVT4iCvhgpyjYKYinBVpJrLK7qHXUuBavWNG1Lwadrw7Dsoo13KzB",
  "key23": "sAjTUACcy7d9A7FdqYPGDUuxEQSgxVYTnS8e3ifK79q3AZzHpYLVoeo1kB2Z2rRqFBPv3sYFdrKE7UQCC8FttAs",
  "key24": "3UFU8mSHTjMc8JruWZBeffwApUoMFgPkYbEE5Ep1L55m8yCc63Bt6c3K8ymQf395wn45bhouK3vta6q5ZWaJZzK4",
  "key25": "3uyvyyW816iJmBkqF3yxCLhMUtNn77AwB6zm98b95SxNCnciXEmz6kTGANhatbtH1oCd46EMxvmfNwutvRdJcinC",
  "key26": "369xbPeScSPoiN2qbfTSR1mh521hRKoAApKqrLSsL6Un3ia1HJyBooJKRuzJece5awAPcy1kXmT8qSntkQTQ4vvy",
  "key27": "4X5E4iq3Xp4vLhe5o2EMKFGAjamDM8QHxXEo5XyqJWdwEpMRzdM91F8Aui3AAWk1Ty8gYb71NJrCUatTosGjLWg3",
  "key28": "2oFmaVTpcyMargWoHwwAQSFZ49pec9E8qjFz1C99oC3vHm7e3sRk3paDN473B1P4Ywp52bH1CfTnwUK2TKrSM6BV",
  "key29": "5EDoyuzJ9MkSMNpFtfAeoLjsuxHzy9wnF76pKx9tAkSovXSjEsg4AMf5xHwxcdMiYQWFnfPhxPoYb6BzTBzFZkHP",
  "key30": "xtJ2Nfp8LUWm3EUJkM6NuiUsYbzvUZQGFLFfB15X8VchWZXBGp3MXymff2yhUEhUFeef1DJ2rpFnN1h4kiSjxRu",
  "key31": "3EnRZ6DTJohPvo97Tb52UiczxQG5LpWTkJznJ7bPVqAT2GCuXvJH2nLzp4bkF2i62VWzQcp8hZCZZjPrpLi1DoAR",
  "key32": "5DaEi2rWkHtU9ZnGYXKuyNkm89A7SgLJpF5PSabdPeRt6TY99EtVwbcLnxPX7VABxFngrSTruAwMWzomPbQv83Li",
  "key33": "2mAJYF9daa5dtGTUgzvwBEtjSswVpdnKT5EYXXEwPKRCVSCYhtKAkGcjh9ZK2dV84y5zaEuNd5Z2dZfFaj1FnKrN",
  "key34": "3PdtuVFtmmqc1HxiQSdSiUop5xznZEhCDojncjhhEFxxyjwJfpGAKXiMMtM5cQwAmLDnWBtLMBCwjwFXrhUaX5gT",
  "key35": "3QycDvcZ1yZuz212LYAJv3B5s1RMme3L6k1ojHAo3usYxu3jMpFKrwXFkx2KTv4maQ1EBfiX7E4t8XEQQCmQgMyR"
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
