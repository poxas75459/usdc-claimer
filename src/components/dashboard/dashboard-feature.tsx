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
    "1a17kvCdz9J6REgqhdF4LtW3fcqAYExqFcF2G6Bg4vfztgbGQcJdmJohNpkGwUSDskAbvXmPs1qKZ4E7iDRPhSZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RpCMEzjaktMsbVuCnhLurURY5P5m5uR2YJN4MsGdNPQz3ZgeMUv2WTMgAtEJvNSsBefifsJGfWoSgae7f6GTwLD",
  "key1": "4p86mYUC9eXDAWE6QzJnVSip8W2S9cXSn1R4DduhXoGj3dqe7b5DbCpgAPGw5ZPEXt2kHvviy9Vp8EXVuXhtfNLE",
  "key2": "5rEqHEpcfcA2nxLVaQsQ2TkHdiefC7dj2s9n9vardf7ghyVi8dHxvvkRY8B1FDjyhZQo6eyuq9NqzFFej8ALLuNL",
  "key3": "47N9LPXJFBmAeWiMaHaspRE5jbHwCKsVr1vNkAkCEgrxf2tTFbUrQddamYjUiuuMNCz2XyUGujgjyRSQ97gei2hN",
  "key4": "65kAqnHuUD6RoPdZ83hCvAEZx8jUnhPhtRu9uxi9bPnPAKPNPz6GfSc7uYeJFAzZiu8Tvyaj59kq9eyEdGrbg4YV",
  "key5": "wC9UXbmkJArykds9qVVHdVcQzZZnU7nUndjDJiYm81sbDSBWY5y39wdTPsvxVwzU7VYYksn75WQ6uqyaP2inJ3s",
  "key6": "3EPz8NxZuELchpNj3tQhrthCgs2VkH5ZKSjJ6Sfz8MPqzMfibWpK7WF6362tH7VPRUqmJDxHuJWDVaKzNhrHgjST",
  "key7": "4QFLZx47BkadbehpPtb6coCj1ejrKX9rsk5hpVTnBdiXDASftoK9qj6qJ2eLnUGnDc8HbrfUjCaJUmUuYJnkRb5U",
  "key8": "4ispWzNsXBXR8mTQjqBf447cvDR9xobWjSYLdTXQMHV6zA2J6STQmdWaakx2NCqdGpBWr1oByPm1iZv6wQnLU7MQ",
  "key9": "4wNqLkJZdHjHNYBymenVCDZYW8QucENss2xjCbovg3CKzvRo2wiRwaNNuyp37j2m1UxhG6QbTp2Ck4W8thLdH9xi",
  "key10": "41DCMEcsw5WDxvHpgYowTM9yiMJxybnjA14braiZDDxueDciaH5LNBBqVtwPDKCjzDVB3hSysdJNqGEhN4dLaRFy",
  "key11": "3U8Fzy6YHcyT4Vcr2zr43MF3Go31hA823NtBkeWAnBGeVLtAV1qK562tPmGaPaGm5GFS4wwVb72o1uwSqPJisQAS",
  "key12": "65WNQf1PdTwZYYkG87rFTLMhnrwZKCgU3328sKg6B7zyBpeMja1ad1Lzd13z1upDTM7UyBTXKpwqB7EtMuMyU6RN",
  "key13": "h3PwYeVmPuuQZeNxrtA8Y1oinTqn3HMze9wYdraFnGNR9WbbM91qDmk8EqefqQ2bPahoBxUjM4iZJP6EEaRCEtt",
  "key14": "4rbCF69J98izP8X8dmuhi3Kwsaeb7zLvujmHoyqJftd3zASsFP6TbhmMrtBP9AFcuKXRC2LAjNt3S8wAmxmJ8azm",
  "key15": "2BQg5FZRCazY8ky51XpPaeRdatLonHC1tCpLesd8txgu7rZGFZCsC8Qn4MTZVXwiX2zADcpFkbsdh1JeAcz6gMJH",
  "key16": "47WcGoFfbVRKG1R9TNgUwzwXSaRDg5YjZT17qxiB8sKs1d4CeaLDmJecUpKjpiEA4jhj8nBFYVA2TK2QssREvbfK",
  "key17": "28ugYQKmtfmiHsBxR1nTubDexmh63cLjx4fEREMJuFSm3qmu4mbyyGxHdNJwEXg8FzEvAEoRFkfu2qE9x9hQej4m",
  "key18": "5DQ15uxibcNKfW1ZtQK47mwpfMxbYs4Vv4pg5ng4uWbtWuA1K9fbUSLSdAP6LG212NLGEEeGbnVosT4ZNdKJeKxW",
  "key19": "fY8iGF1nEYPsnM3QWVtBDMN4MQYmC2jiFsbJ5Xv38csZ1qHVNt8rnoLaBfiiv7mhdU1M44NqWWV9mLdDVExDQNB",
  "key20": "2H4ki5rLcXbR4jbY3p87PpC46VZATaBVM1NmWTxUvVJxqWpp22LDfLtPYdvRAnvZc1gwkATkqb3jWqMfv3pMEhsy",
  "key21": "5LvdGBf48NwFkfrF61knZ2mbNq283vj7fhYQ13mnTPdNoEyX7KFrdA3RhhTGtQpDMZKSthjJL1Zq7h5t9ixrhuki",
  "key22": "2kdAfxUNwXdakGKMiry6a6fNDsxTsxG3BnXEK2y97jqo5QH5fyRMmP3WH1yW1ggx79NG6x6sLtHGF6PaSLzpbKRq",
  "key23": "3Kn2VEXAcz8nBJUW5BLRd2dM7opkGnwyYi75iuJZaddcEYW2qp6D4E9FY3hHfTSpde9Bv4DqWqAHdtn2r32dKPWr",
  "key24": "5RNfNZ1MmgNNkUfLiF9yxfnyfkTyyLUQnxrUp5A4h9ZQ7mQ1eSt1xnUgom5azSGQznqghk5etK2Qrmx6nWmr27Uz",
  "key25": "4dtMJ7qjGistubiVNUSDKnTHK73LejR2upg5SkMeHkueRDNk9QUYXJg4YjdNqzdev7Bwn3smkJ74f9qmiNgbZ9zC",
  "key26": "v77ACjmcd1RDcQRQR5Z1t81qeEsRtcgbKN2mF7YX9bkxRWXeijqPKGxwGxKjYSALw7x3j4cyg5gqG5JHmwzHpRG",
  "key27": "EZqi5smbbegSdqYacUAGkYYaiRDreuWYoeA7oXFqPPmczYubmYbgJP1cgGcmasZXXmRYoC2LSyzaEd7i5u5EJMb",
  "key28": "5EXcR4he35jM198jxocWZTRdUhbBiU2BVannFJ2gJgfuCRjNeTvb4fzJagu7hNkZd636nshCFW1WujS9Qa1q9LuE",
  "key29": "5r2igPFamcQEht5QMwvq1WVQcpt1x9crfKSRT9JCXq1dBmAr5BTJj21ANEWu5CQJxGQ7Rcgm92cJTXnfVyfjsgHh",
  "key30": "3HuTZb5XvPYJswzDnJ9LM3y5W1ofJk8fKAEdTBhmYF7nSNMHsJzoCshSNgqYFTWiQrjh922skysD7RfXiL2HEaGK",
  "key31": "oA6tE8JxyqzLpaMgheqpkMTiD1NEVU7GQdoqSrSgACtsevGBbHgNt762mKPYZNEWojMXP5rmRH6cGjxqdh4aZDW",
  "key32": "3ZQVHQgLXr9cTkXhxpS4bQGdDakb5fivs5dKfs3xPFp3ZzjHenQkPDmKav4FHtR6CpyDkrKWqH9vFSudzHJJ2UZJ",
  "key33": "3bgfyaTfQsn7ZdppCnJmpohTgeCBEVPYqwgKs5SGYm24Wh5P22uewxUUjriu9B4SSYZSoh2s3V9f6aQoC7rydkBD",
  "key34": "39ehYhR7Pc8p8pSVtKUfo4XfxYftG1ocMRNELNubVZNcHyw8At9spStucaMbeZLHAmCTRyk5dsdJWpSJo86FPfRG",
  "key35": "3g4UWhdfWMnP6yJgSsKVwiPGb3Fz89BycBsEiYeWmF4e83hhvmbdurjUtT1R5DdSeq3Ryt4oggfKeQhxLD963Ve9",
  "key36": "3FehPJ439wu12qmVUfpJV64ynEiH7zw3yHKY4kwGVjdHp1MSK8aKDQ5pArngtoiURa1hb8SkWzRNg8RTnnvNNajt",
  "key37": "62jeaFB8zuuM5qoNieBXgimCCi8r9MvxUySryAzq2YyFCNB8KwSEWYb4VbnybirHbdggAXbPMEFn6hm75dukUq7v",
  "key38": "3S2jEneS38GEBcULGFk816buQdDSUgtauBBcHfSdtHxCqgsELQaHgk9DQgXNVmRVQpMiVNhzXUK2L16RwMtM7rPQ",
  "key39": "2pHD9aZn2AFobuigpmDiS1Cfa2NrDGVM6QBJVgMGr5Ujtpb1vE7YecmqqZQGPXpaHFBHWWFGcPBu78tApUXSQJ2k",
  "key40": "5snnNDWNDSzqDtwUESsA74YJ4hgqmUFbTm5XwXKwLewpbPYN1aPCgzabHM9gKGBuQyPkPsS5EuHotGTTLwT7YGEp",
  "key41": "Vjpn38UpA7QMBX6rZvXYiUtxmPZcBVFasQL7LCHjf2kLTZ2azXw4L1jEAVgfoKGEq1sreVaP72suf2rUJRabrJZ",
  "key42": "277WQevpPQ9zRgkjMvTrVrNDKeVu7VdQvWFXptuXmkeXqvhjHPheqVQR6i7iMyUXsCzA4UqbzdUD3YLEVpKRYjUL",
  "key43": "2LY4AKNQLk3Ubyc7uA4kGDkcw5dxExbdu4Rb4weueQzzpnNdGyiDZ74xvaYWypR9ZUKSjLz95aodPpxLKpMzSVtf",
  "key44": "4N3iQwEBxnQbgHoN5uDf4NJF5NP19BUUFxeqjVwW89SCP9yfZT1t3q7hucvxRiZ6QfmpEX2gFbQw6TxqVwnnLtZ2",
  "key45": "4XjzB39Z1qLnHyoTovtro6ZPkSqx5JWFDZ6NmZQEzjtfj3ju6cDi4mgt3Mdwqu8ZDDciAqhDGdrdLwpVxawQL3Yf",
  "key46": "igf6wXiWNQ7DZnNWfpwgenpjYx8swbyX3YmJWdSmpSYV8kgjGo2ZzRrqwjZa92dCr6rsXsecRTA3cJkCX3dhtG8",
  "key47": "4cSmzMbfA5bqvwvbQsZ2XmHcuoEeTDQcZL4dFJQ5m2v3e18RxQUvK5g4AeDhwH3E9Bpthv5FH15mayRmJ5itXEBX"
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
