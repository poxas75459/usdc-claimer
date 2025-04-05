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
    "37RJPniJhaYvYBiivZaHQN5WyrpXUnDVkr61kxXBDvR8LLDKSGCz4P4YFrKnAvhbGjbfqAA8q7jcPf8nHoMrdjqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R9PwrKE2UhTm1FY6J3QMmhAM8npTZMdU8rCQWt6U28jga5RPYUEJL8kk9VWaqdvadrgvwAdpcuju3QgJpdWemXc",
  "key1": "ArTnfGpsfFEh5N592s1ph2ECRB6YGH594fsLWVm6MKRyiukyevVwHvjuhR5jpW8cT92bd3LDimN69phJAYT7doz",
  "key2": "2N9cb2p6CQwN4tcEFBLcPfyhww71NVm2SoqmKSt1Ceuev3Y8SzhL91LA9yPhxASu3LbupM8vzfqTPmHT3ABuQ2xN",
  "key3": "q9n3vCHnwAoBqoCGmH3HfrnZsumN72jwJNJS1jeRwJxuiqwDt2Tg1sRq8tXbeZmau9zYkEprSJSpzGYKH29yrd5",
  "key4": "4LSe5c1hmJt1LMeprRjzPdUHGjC4TdeJT47imnqPSqzNk5v5cRqodPUKXeCrCHk5jtANWCGTGRE5SRxbooQU1xF4",
  "key5": "2rbxds1opLLDxBHYhBpRJP5rSQEEWfYBB6RAzHKzmfD2ioEwC7V7SxWKAEsgvGX3v7eXTbXb4zDMxs9qRY8mjbGD",
  "key6": "fXFZhosyRFj1JBttLfrE8imZPV1JFmsdrczTJipL8JUpyJhXmN74AYHkETmo7GBobuyaGA5iEVxB6nKai11H98n",
  "key7": "JrkAnXJ2UFNm4uXAVJeKT4y1nZoBsS2RjwNWQaY7eDcYNoxuSRQ5HGKbMYeiH75xedsdZGNtjEQ2eeF4kwRYrm7",
  "key8": "5F8eNf4JS2WithHA9gak2H1wmbbZPciQzujsRdJC3tnV65kgQp13yj3oSES7gVH7QuSLW7hZNYXGKgqBJ3StVmjM",
  "key9": "5su2zbTdFBM5JLiMUxozXXCzr53GjpVp6cDhiTEMsdgetF6wo5ioe252ZscDWr7NZ1MXyR9yYgYgpnYdLcUvePqz",
  "key10": "4fQjP8qQcuwwCft9Fq7kDcrvNmwXM6fkmun2XUWu4ad9MdLxtKtXQBLMsxnJWpAMB1fSXm1Yec68PeRowhJ9R1RS",
  "key11": "vvV85jzBvVYhdVj2yTunCBk1NJFaL15QkR6q3JaMFwhfEnQJdarLuivCajLTcAdda3dUiP8x6Q8UQggAshS6Y8W",
  "key12": "5gNRRh9zue3GCu3VRpn1eGFRbvXYBiA1mJkjBkKPdJst23by7P8tFQM4YvJBULXYjMfuqNUPXpbHfYgpPoYhdAT9",
  "key13": "4nsMhNMfKy23ZpZZfMCYMCEnDHqXY8FnWGuV85U5X8Q6UTyPscLsMm29S81rxYVi5VVe9iKg7kZ72gAdt1hDJaLj",
  "key14": "4Ci5pw8doVEubTPsTJxBjKXft8ZHJAwpCNse6cjxXz1q7BSTYEwHn6UxYE6DtJhP5zn9BCUh6yRTeb1neRkz69nx",
  "key15": "2rgL1VH4iybJe1KeQTZfc38qWwXsgJWZ6CNbiGwd69koZufF7WUB91Jwnm8tzbXukVN3ZbJbAF3awtcf6fBfNZwu",
  "key16": "2hYDbeVgERorC94CBfDaj9ssBBfXRyYsprh7qrMrnMBYpDCx63GHqPTFe6cGDQQrXG5FZSuBzk5DorcBfRNCcfE6",
  "key17": "8n3jFmNtQEtKk9m4N2nDG1nZ19YjDfQaii9dU7pNeqjZMrQSgSknaBLBoDE4YH5RmfBDbXUxSPToEhtHdzKXt4S",
  "key18": "Qfyudm4hLLnJDcheqRNGBB4vGTmqkDLGUZGhiAtSJnT9eLSur9EobReqxRkt1mrCCaX7wZZSLcQaHJVsGzYcnHC",
  "key19": "bJEGhoxRAT5XYVFng4ap4QcKudZcVrbD1YtfSDuUkmYitRKQDUweNd3Wz9LhhPeteTBppq6xj67LVGNvMprVaNG",
  "key20": "4mMWm7vE6Fzw4BLpTcvnDWpW1DwYFuCqGjXhAheuFqeDqpJE3qgpMYW9J32qj2DnpRVVt7jhZAapPUxnCVxeghK4",
  "key21": "2KiwMZUtmeZyZWVDWkNTksdBfXDECDepXFAKDYUyDSMt8sAB2mc7ZUxHdYiqqwc2zNVLRc9FPqE8PCma9yaMsTQn",
  "key22": "2XcvB6dB7gEF2AJUMUgYDeUcJvmmzmvuxcJwWgLKmdgCsG9KPR9cqc45C6SB2iTMeP1aJeQbh8Bzr6NhDfi5Nbz3",
  "key23": "5KnZRq2dg6byhNQMUGYQvszMq7nriTmuRAnKD48ykCc28GRXLxfxWsPdRybn68zSR687XLTLqP7iTt5DckV7HNGa",
  "key24": "37SK1aECLgnfcGAXB7eykEumi3K9HCpamn3h2WybSa78T1PbX9tGLv9CSuwtK3gYPehQ8RJdkYszq5sKX3y1Acmu",
  "key25": "4sim2FoEz5wrswqHjjr4VzRXkVs1SEYcv6zSjMsZLHN78aBxWbMLV1NpVtfQD455sUftKBkDB8HhnBZjr4mAVJTd",
  "key26": "2bibhbq7FFUQMMkmyE6yYazKLh4fAKf9vVSZWH7hcH47k4xRZ6JVnQCG5DfNaAwMWdmSBT1Pgby67rP7RovX65Kk",
  "key27": "5raWmmUEj4SB2k34oVhRoo37aNneMhddLBxzGJHnLdNaMfwgZNcXuWBtuTr8EbzTmydxeFg3epeDfj82q859SPM3",
  "key28": "46tX4iB8sEiYG3onHd7Tgra9o65RgpNpgKqvvoPwJSisjjHw8WvSZTBkdH2bRHSP5KHEgcJpeSXnLjDX3iA6Kocc",
  "key29": "5H41cAGTDcUYxMBeU8iTJ1HSAREBnB293QcK8upbABJhHcZktPeHXCxwNqVb3LKj6v1ydFRCKGTTdqdDgm5xtkmG",
  "key30": "5WTNukS1HMQGg1vsWxSzEo8DyqFKFaxrnnegJnq5GZect19BfYFqp7fmENo3zJrJXLEksSB8GkZzaQdHKYm3izae",
  "key31": "3ySZsszMFKkjnz6UD4NcrcnZphFNESTfxyBiqu1bnJYv1vi4GB4ZGUVZULrmnkXtwDkxLNKTPwasyQukYWWoS6kS",
  "key32": "5vGEXSNgkSQV7Uw8gwynHW7DLKomojqfeeJh9q8agQus27tu6PVPuB19BwHiLTB4qdEcakXDiuZiMTfQ68gLsmwR",
  "key33": "3MUoMCm9isUQz41mKxysRUr1j96UQrf5JwDdDx655H1FnjCR1ZfAkhUhFKpn3vny1bJ6q9Q7h4CESYU2nqUVaKdN",
  "key34": "23dy3VJbv724HtfKdRSi83YeiAbXkUUKfUMteYv348MUzqaGe9L7T5iiL8gaKFj5KvxUGgk6w2TURuYJwQ2siAVX",
  "key35": "5zmY3Gwrxk5xmhytVz1Gi3SeCA88xG54QFL7jQxCaAq9VwNLZoChpzPLFgfJqkkdf6jyiakvQy8hhiuvPsquZLVb",
  "key36": "42TJBgg5g8vMGpvcPLq4zHqnRMcPMpPxpicjcjha7z1SCWfve4QdNoxUWQEuamtEsMm1WUyZjrYyMzzefexfhHq2",
  "key37": "2gT32P1RQgQSXiTa34A2dkV6ZE2Jk3BTbainThE5xvMPHNYPwp1dXarM5AFBaU12rJcKdFt4E3VUE5mdSMZLtBxC",
  "key38": "5x72vgzgmjzMNpWuTNFxHYrYutUvCwBNc4DV3YxHsFNtRvwhm6xZ5wBLjZzWw2mGBVR2frE2tvyqVfbyxUiwLNrB",
  "key39": "2wiNvFVst6EF6CHc2RGs5vbVYuSCJH1JDYkibrTExQHaYVVeU6b34UP45CbDNfuoYZxxGa3TtrnZ46Tq4TgfzCwN",
  "key40": "5vjfQnefULj4f8bjEKkm7CxwM63EFjaA35QtuPrZtaEpZx9R6Jq1Znns73NLSJRHQ9YCXdyKDLhHgvzzJ4HuMvUs",
  "key41": "2ErHm1CoqjjPx9vXdCeKm8YgV6M8WK73Ta3GFKcJiS72UyLKzbLbEC9Nb7d5ZmgawqQpvqPAojvgdE1pR34EnzYa",
  "key42": "2BQiQ9pzabuaU3xxmV8Zaa6sd6ZhJnRFywPpWKQhHuQZ9q5uWMoeFNvR3PTTNGcNkCXYvTsaEcysdjrshAGnnZ2t",
  "key43": "3pXL89HHaUaUgJQUDdED5niBYQ8LeJwuK6t2FJchcbfiZgNDquvhGTivPJjmjLnvRfMCHmzt7c5SN5uazoWehGZR",
  "key44": "3qBp6vK7uarzcPDE6aa4AVJp9irEi7TXDGxBB7FTiCRvPGE4JLWR5jm8NSanueUsoNgrKVL3bnZAMJo5vBpa2Kqb"
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
